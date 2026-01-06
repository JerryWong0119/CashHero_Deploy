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
  LampOfAladdin_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ef53q0qfpGhKPtR/QDL00z", "LampOfAladdin_Cfg");
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
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 8, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        zIndex: 100,
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "wildchange",
        win_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "LampOfAladdin_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "LampOfAladdin_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LampOfAladdin_Symbol",
      symbolSize: {
        width: 200,
        height: 200
      },
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
      scatterId: 9,
      wildId: 10,
      collectId: 1,
      kuang: "LampOfAladdin_kuang",
      speed: 3e3,
      reelStopInter: .2,
      autoModelDelay: 1,
      auto_stop_time: .5,
      AddAntiTime: 3,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 9 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/LampOfAladdin/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_landing",
        antSound: "anticipation",
        antSpeed: 2500
      }, {
        id: [ 10 ],
        mini: 0,
        counts: [ 3, 3, 3, 3, 3 ],
        path: "games/LampOfAladdin/",
        reelStopSound: "reel_stop",
        symbolStopSound: ""
      } ],
      normalBgm: "base_bgm",
      soundCfg: {
        base_bgm: "base_bgm",
        free_bgm: "free_bgm",
        all_anticipation: "all_anticipation",
        click: "click",
        fg_popclose: "fg_popclose",
        fg_popup: "fg_popup",
        jp_popup: "jp_popup",
        transition_1: "transition_1",
        transition_2: "transition_2",
        transition1: "transition1",
        transition2: "transition2",
        lock: "lock",
        reel_notify: "anticipation",
        reel_stop: "reel_stop",
        symbol_fly: "symbol_fly",
        wild_fly: "wild_fly",
        symbol_scatter: "scatter_landing",
        unlock: "unlock",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        win3: "win3",
        win3end: "win3end",
        win4: "win4",
        win4end: "win4end",
        map_close: "map_close",
        map_move: "map_move",
        map_open: "map_open",
        map_popclose: "map_popclose",
        map_popup: "map_popup",
        map_node: "map_node",
        meter_full: "meter_full",
        reel_appear: "reel_appear",
        reel_hide: "reel_hide",
        pick_bgm: "pick_bgm",
        pick_congratulate: "pick_congratulate",
        pick_popup: "pick_popup",
        pick_popclose: "pick_popclose",
        jp_congratulate: "jp_congratulate",
        lamp_bird: "lamp_bird",
        lamp_click: "lamp_click",
        lamp_disappear: "lamp_disappear",
        wheel_bgm: "wheel_bgm",
        wheel_popup: "wheel_popup",
        wheel_popclose: "wheel_popclose"
      },
      helpItems: [ "games/LampOfAladdin/prefab/LMSlots_Help_item1", "games/LampOfAladdin/prefab/LMSlots_Help_item2", "games/LampOfAladdin/prefab/LMSlots_Help_item3", "games/LampOfAladdin/prefab/LMSlots_Help_item4", "games/LampOfAladdin/prefab/LMSlots_Help_item5", "games/LampOfAladdin/prefab/LMSlots_Help_item6" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_CoinBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8763ePJDu1Bsax32agleDAF", "LampOfAladdin_CoinBoom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this._lblNum = cc.find("lbl_num", this.node).getComponent(cc.Label);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onChangeBetValue, this);
      },
      start: function start() {
        this.initShow();
      },
      initShow: function initShow() {
        var val = cc.vv.gameData.GetTotalBet();
        this._lblNum.string = Global.FormatNumToComma(50 * val);
      },
      onChangeBetValue: function onChangeBetValue(data) {
        var val = data.detail;
        this._lblNum.string = Global.FormatNumToComma(50 * val);
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_Energy_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e197K2hzdCjqREUIUKIok2", "LampOfAladdin_Energy_FreeGame");
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
        _isEnable: false
      },
      onLoad: function onLoad() {
        this._mid_ani = cc.find("Canvas/safe_node/mid_ani");
        this._spine_genie = cc.find("spine_genie", this._mid_ani);
        this._spine_cloud = cc.find("spine_cloud", this._mid_ani);
        this._lbl_mult = cc.find("lbl_mult", this._mid_ani);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      enterFreeGame: function enterFreeGame() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var resp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._isEnable = true;
              _this._setFreeUIVisible(true);
              _context.next = 4;
              return _this._showStartUI();

             case 4:
              _context.next = 6;
              return cc.vv.gameData.reqSubGame(2);

             case 6:
              resp = _context.sent;
              if (200 == resp.code) {
                Global.SlotsSoundMgr.playBgm(_this._soundCfg.free_bgm);
                cc.vv.gameData.SetTotalFree(10);
                cc.vv.gameData.SetFreeTime(10);
                cc.vv.gameData.GetBottomScript().CanDoNextRound();
              }

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      reconnect: function reconnect() {
        if (cc.vv.gameData.GetFreeTime() > 0) {
          this._setFreeUIVisible(true);
          this._isEnable = true;
        }
      },
      exitFreeGame: function exitFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2._showResultUI();

             case 2:
              _this2._isEnable = false;
              _this2.scheduleOnce(function() {
                _this2._setFreeUIVisible(false);
                var collectData = cc.vv.gameData.getCollectData();
                collectData.num = 0;
                Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
                Global.SlotsSoundMgr.stopBgm();
              }, .5);
              _this2.setCharacterVisible(false);
              _this2._switchScreen();
              _context2.next = 8;
              return cc.vv.gameData.awaitTime(1.5);

             case 8:
              _this2.setCharacterVisible(true);

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      isEnable: function isEnable() {
        return this._isEnable;
      },
      onStartMove: function onStartMove() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this3._isEnable) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              _this3._lbl_mult.active = false;

             case 3:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onEndMove: function onEndMove() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var collectData;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (_this4._isEnable) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              if (!("animation4" == _this4._spine_cloud.getComponent(sp.Skeleton).animation)) {
                _context4.next = 7;
                break;
              }
              _this4.playSpine(_this4._spine_cloud, "animation1", false, function() {
                _this4.playSpine(_this4._spine_cloud, "animation3");
              });
              Global.SlotsSoundMgr.playEffect(_this4._soundCfg.reel_appear);
              _context4.next = 7;
              return _this4.playSpine(_this4._spine_genie, "animation1");

             case 7:
              collectData = cc.vv.gameData.getCollectData();
              _this4._lbl_mult.active = true;
              _this4._lbl_mult.getComponent(cc.Label).string = collectData.mult + "X";
              _this4.playSpine(_this4._spine_genie, "animation");

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      isFinish: function isFinish() {
        var collect = cc.vv.gameData.getGameInfo().collect;
        if (collect && 2 == collect.open && cc.vv.gameData.isFinishFreeTime()) return true;
        return false;
      },
      _setFreeUIVisible: function _setFreeUIVisible(isVisible) {
        cc.vv.gameData.GetSlotsScript()._bottomScript.ShowFreeModel(isVisible, 10, 10);
        cc.find("Canvas/safe_node/slots/node_energy").active = !isVisible;
        cc.find("Canvas/safe_node/gameWheel").active = !isVisible;
        cc.vv.gameData.setClientOpenCollectEnergy(!isVisible);
        cc.find("Canvas/safe_node/slots/spine_collect_wild").active = !isVisible;
        cc.vv.gameData.setClientOpenCollectWild(!isVisible);
        cc.find("Canvas/safe_node/spr_bg_normal").active = !isVisible;
        cc.find("Canvas/safe_node/spr_bg_free_map").active = isVisible;
        cc.find("totalBetBg", cc.vv.gameData.GetSlotsScript()._bottomScript.node).active = !isVisible;
        isVisible ? this._showSlotMidReel() : this._hideSlotMidReel();
      },
      _showSlotMidReel: function _showSlotMidReel() {
        this._mid_ani.active = true;
        this.playSpine(this._spine_genie, "animation4");
        this.playSpine(this._spine_cloud, "animation4");
        this._lbl_mult.active = false;
      },
      _hideSlotMidReel: function _hideSlotMidReel() {
        this._mid_ani.active = false;
      },
      _showStartUI: function _showStartUI() {
        var _this5 = this;
        this._hideFreeGameUI();
        var grayBg = cc.find("grayBg", this.node);
        grayBg.active = true;
        var spineBg = cc.find("spine_bg", this.node);
        spineBg.active = true;
        var btnstart = cc.find("btn_start", this.node);
        btnstart.active = true;
        var lbl_mult1 = cc.find("lbl_mult1", this.node);
        lbl_mult1.active = true;
        lbl_mult1.getComponent(cc.Label).string = "";
        var lbl_mult2 = cc.find("lbl_mult2", this.node);
        lbl_mult2.active = true;
        lbl_mult2.getComponent(cc.Label).string = "";
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
            var cfg, engData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(_this5._soundCfg.map_popclose);
                btnstart.getComponent(cc.Button).enabled = false;
                cfg = {
                  3: [ 2, 5 ],
                  7: [ 2, 10 ],
                  12: [ 3, 25 ],
                  19: [ 5, 100 ]
                };
                engData = cc.vv.gameData.getCollectData();
                if (engData && engData.idx) {
                  lbl_mult1.getComponent(cc.Label).string = cfg[engData.idx][0] + "X";
                  lbl_mult2.getComponent(cc.Label).string = cfg[engData.idx][1] + "X";
                }
                cc.tween(btnstart).to(.3, {
                  scale: 1.3
                }).to(.2, {
                  scale: 1
                }).start();
                _context7.next = 8;
                return _this5.playSpine(spineBg, "animation1");

               case 8:
                btnstart.getComponent(cc.Button).enabled = true;
                _this5.playSpine(spineBg, "animation1_1", true);
                if (cc.vv.gameData.isNeedAutoPlay()) {
                  btnstart.stopAllActions();
                  cc.tween(btnstart).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        btnstart.getComponent(cc.Button).enabled = false;
                        Global.SlotsSoundMgr.playEffect(_this5._soundCfg.fg_popclose);
                        _context5.next = 4;
                        return _this5.playSpine(spineBg, "animation1_2");

                       case 4:
                        spineBg.active = false;
                        btnstart.off("click");
                        btnstart.active = false;
                        grayBg.active = false;
                        lbl_mult1.active = false;
                        lbl_mult2.active = false;
                        success();

                       case 11:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  }))).to(.3, {
                    scale: 1.3
                  }).to(.2, {
                    scale: 0
                  }).start();
                }
                Global.btnClickEvent(btnstart, _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btnstart.stopAllActions();
                      btnstart.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect(_this5._soundCfg.click);
                      cc.tween(btnstart).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 0
                      }).start();
                      Global.SlotsSoundMgr.playEffect(_this5._soundCfg.fg_popclose);
                      _context6.next = 7;
                      return _this5.playSpine(spineBg, "animation1_2");

                     case 7:
                      spineBg.active = false;
                      btnstart.off("click");
                      btnstart.active = false;
                      grayBg.active = false;
                      lbl_mult1.active = false;
                      lbl_mult2.active = false;
                      success();

                     case 14:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })), _this5);

               case 12:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      _showResultUI: function _showResultUI() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var grayBg, spineBg, btncollect, lblWinCoin, self;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this6._hideFreeGameUI();
              grayBg = cc.find("grayBg", _this6.node);
              grayBg.active = true;
              spineBg = cc.find("spine_bg", _this6.node);
              spineBg.active = true;
              btncollect = cc.find("btn_collect", _this6.node);
              btncollect.active = true;
              btncollect.getComponent(cc.Button).enabled = false;
              lblWinCoin = cc.find("lblWinCoin", _this6.node);
              lblWinCoin.active = true;
              lblWinCoin.getComponent(cc.Label).string = "";
              self = _this6;
              return _context11.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var winCoin;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(_this6._soundCfg.map_popup);
                      cc.tween(btncollect).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 1
                      }).start();
                      _this6.playSpine(spineBg, "animation2", false, function() {
                        self.playSpine(spineBg, "animation2_1", true);
                      });
                      _context10.next = 5;
                      return cc.vv.gameData.awaitTime(.4);

                     case 5:
                      winCoin = cc.vv.gameData.GetGameTotalFreeWin();
                      lblWinCoin.scale = 1;
                      Global.doRoallNumEff(lblWinCoin, 0, winCoin, 2, function() {
                        btncollect.getComponent(cc.Button).enabled = true;
                      }, null, 0, true);
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        btncollect.stopAllActions();
                        cc.tween(btncollect).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) switch (_context8.prev = _context8.next) {
                             case 0:
                              btncollect.getComponent(cc.Button).enabled = false;
                              lblWinCoin.getComponent(cc.Label).string = Global.FormatNumToComma(Number(winCoin));
                              cc.tween(lblWinCoin).to(.3, {
                                scale: 1.3
                              }).to(.2, {
                                scale: 0
                              }).start();
                              Global.SlotsSoundMgr.playEffect(_this6._soundCfg.fg_popclose);
                              _context8.next = 6;
                              return _this6.playSpine(spineBg, "animation2_2");

                             case 6:
                              spineBg.active = false;
                              btncollect.off("click");
                              btncollect.active = false;
                              lblWinCoin.active = false;
                              grayBg.active = false;
                              success();

                             case 12:
                             case "end":
                              return _context8.stop();
                            }
                          }, _callee8);
                        }))).to(.3, {
                          scale: 1.3
                        }).to(.2, {
                          scale: 0
                        }).start();
                      }
                      Global.btnClickEvent(btncollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                           case 0:
                            btncollect.stopAllActions();
                            btncollect.getComponent(cc.Button).enabled = false;
                            lblWinCoin.getComponent(cc.Label).string = Global.FormatNumToComma(Number(winCoin));
                            cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(winCoin);
                            Global.SlotsSoundMgr.playEffect(_this6._soundCfg.click);
                            cc.tween(btncollect).to(.3, {
                              scale: 1.3
                            }).to(.2, {
                              scale: 0
                            }).start();
                            cc.tween(lblWinCoin).to(.3, {
                              scale: 1.3
                            }).to(.2, {
                              scale: 0
                            }).start();
                            Global.SlotsSoundMgr.playEffect(_this6._soundCfg.fg_popclose);
                            _context9.next = 10;
                            return _this6.playSpine(spineBg, "animation2_2");

                           case 10:
                            spineBg.active = false;
                            btncollect.off("click");
                            btncollect.active = false;
                            lblWinCoin.active = false;
                            grayBg.active = false;
                            success();

                           case 16:
                           case "end":
                            return _context9.stop();
                          }
                        }, _callee9);
                      })), _this6);

                     case 10:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x2) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 13:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      _hideFreeGameUI: function _hideFreeGameUI() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var subNode = _step.value;
            subNode.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      setCharacterVisible: function setCharacterVisible(bVisible) {
        var character = cc.find("Canvas/safe_node/character");
        character.active = bVisible;
      },
      _switchScreen: function _switchScreen() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var spine_transition;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              spine_transition = cc.find("Canvas/safe_node/spine_transition");
              _context12.next = 3;
              return _this7.playSpine(spine_transition, "skill_1");

             case 3:
              spine_transition.active = false;
              Global.SlotsSoundMgr.playEffect(_this7._soundCfg.transition1);

             case 5:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      playSpine: function playSpine(node) {
        var animationName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
        var isLoop = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var endCall = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return new Promise(function(success) {
          if (node) {
            node.active = true;
            node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
            isLoop ? success() : node.getComponent(sp.Skeleton).setCompleteListener(function() {
              endCall && endCall();
              success();
            });
          } else {
            endCall && endCall();
            success();
          }
        });
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(success) {
          _this8.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_Energy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eec6blsssFKDJoTWiL+RNmv", "LampOfAladdin_Energy");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCollectState: false
      },
      onLoad: function onLoad() {
        var btn_lock = cc.find("btn_lock", this.node);
        Global.btnClickEvent(btn_lock, this.onClicklock, this);
        var btn_juanzhou = cc.find("btn_juanzhou", this.node);
        Global.btnClickEvent(btn_juanzhou, this.onClickJuanzhou, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventChangeBetIdx, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY, this.onEventRefushEnergy, this);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.initShow(false);
        });
      },
      initShow: function initShow() {
        var _this2 = this;
        var collectData = cc.vv.gameData.getCollectData();
        if (!collectData) return;
        var btn_lock = cc.find("btn_lock", this.node);
        var ani_node = btn_lock.getChildByName("node_spine");
        var boo = cc.vv.gameData.isOpenCollectProgress();
        if (this._isCollectState != boo) if (boo) {
          Global.SlotsSoundMgr.playEffect(this._soundCfg.unlock);
          btn_lock.getComponent(cc.Button).enabled = false;
          var chaAni = ani_node.getComponent(sp.Skeleton);
          chaAni.setAnimation(0, "animation2", false);
          chaAni.setCompleteListener(function() {
            _this2.updateCollectProgress(collectData);
            chaAni.setCompleteListener(null);
          });
        } else {
          Global.SlotsSoundMgr.playEffect(this._soundCfg.lock);
          btn_lock.getComponent(cc.Button).enabled = true;
          var _chaAni = ani_node.getComponent(sp.Skeleton);
          _chaAni.setAnimation(0, "animation1", false);
        }
        this._isCollectState = boo;
        this.updateNextAimIcon(collectData);
      },
      onClicklock: function onClicklock() {
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if ("idle" !== cc.vv.gameData.GetSlotState()) return;
        var collectData = cc.vv.gameData.getCollectData();
        if (!collectData) return;
        cc.vv.gameData._serverRawMult = collectData.min + 1;
        cc.vv.UserManager.setEnterSelectBet(null);
        cc.vv.gameData.SetBetIdx(collectData.min + 1);
        cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBetCoin();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, cc.vv.gameData.GetTotalBet());
        this.initShow();
      },
      onClickJuanzhou: function onClickJuanzhou() {
        if (SlotsFacade.dm.GetFreeTime() > 0) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        if (SlotsFacade.dm.GetAutoModelTime() > 0) return;
        var node = cc.find("Canvas/safe_node/map_game");
        node.active = true;
        node.getComponent("LampOfAladdin_Map").enterMap(false);
        Global.SlotsSoundMgr.playEffect(this._soundCfg.click);
      },
      lockAniEndCall: function lockAniEndCall(trackEntry, data2) {
        var name = trackEntry.animation ? trackEntry.animation.name : "";
        if ("animation3" == name) {
          var btn_lock = cc.find("btn_lock", this.node);
          btn_lock.active = false;
        }
      },
      onEventChangeBetIdx: function onEventChangeBetIdx() {
        this.initShow();
      },
      updateCollectProgress: function updateCollectProgress(collectData) {
        if (collectData) {
          var per = collectData.num / collectData.total;
          per = Math.min(per, 1);
          this.showEnergyProgress(per);
        }
      },
      showEnergyProgress: function showEnergyProgress(per) {
        var maskNode = this.node.getChildByName("masknode");
        var bar = maskNode.getChildByName("bar");
        var spine_prgAdd = bar.getChildByName("spine_prgAdd");
        if (per > 0) {
          spine_prgAdd.active = true;
          cc.tween(bar).to(.3, {
            x: -maskNode.width + maskNode.width * per
          }).start();
          this._playNodeSpine(spine_prgAdd, "animation", false);
        } else {
          bar.x = -maskNode.width;
          spine_prgAdd.active = false;
        }
      },
      onEventRefushEnergy: function onEventRefushEnergy() {
        AppLog.log("\u5237\u65b0\u80fd\u91cf");
        var collectData = cc.vv.gameData.getCollectData();
        this.updateCollectProgress(collectData);
        this.updateNextAimIcon(collectData);
      },
      updateNextAimIcon: function updateNextAimIcon(collectData) {
        var bigGate = {
          3: "collect_building4",
          7: "collect_building3",
          12: "collect_building2",
          19: "collect_building1"
        };
        var curMapIdx = collectData.idx;
        var spr_next = cc.find("spr_collect_building", this.node);
        var fileName = bigGate[curMapIdx + 1];
        var atlasName = "base";
        if (!fileName) {
          atlasName = "map";
          fileName = "theme175_map_yuanbao_light";
        }
        spr_next.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName(atlasName).getSpriteFrame(fileName);
      },
      _playNodeSpine: function _playNodeSpine(node, aniName, loop) {
        var ske = sp.Skeleton;
        if (node) {
          node.active = true;
          var _sp = node.getComponent(ske);
          _sp.setAnimation(0, aniName, loop);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "086e9PnyBVOgY+ZugDanNdA", "LampOfAladdin_GameData");
    "use strict";
    var BigGate = [ 3, 7, 12, 19 ];
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collectData: null,
        _collectWildData: null,
        _isClientOpenCollectEnergy: true,
        _isClientOpenCollectWild: true
      },
      reqSubGame: function reqSubGame(rType) {
        var _this = this;
        var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId
          };
          req.data = data || {};
          req.data.rtype = rType;
          var resp = function resp(msg) {
            cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, resp, false, _this);
            res(msg);
          };
          cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, resp, _this);
          cc.vv.NetManager.send(req, true);
        });
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (msg.spcode && 967 == msg.spcode) {
          cc.vv.FloatTip.show("\u6d41\u7a0b\u9519\u8bef\uff01\uff01\uff01");
          return;
        }
        this._super(msg);
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      IsSelectSubGame: function IsSelectSubGame() {
        var select = this._gameInfo ? this._gameInfo.select : this._deskInfo.select;
        return select && select.state;
      },
      getGameInfo: function getGameInfo() {
        return this._gameInfo;
      },
      getCollectData: function getCollectData() {
        var gamedata = this.getGameInfo();
        gamedata ? gamedata.collect && (this._collectData = gamedata.collect) : gamedata = this.getDeskInfo();
        gamedata && gamedata.collect && (this._collectData = gamedata.collect);
        return this._collectData;
      },
      getCollectWildData: function getCollectWildData() {
        var gamedata = this.getGameInfo();
        gamedata || (gamedata = this.getDeskInfo());
        gamedata && gamedata.pool && (this._collectWildData = gamedata.pool);
        return this._collectWildData;
      },
      clearCollectData: function clearCollectData() {
        var gameinfo = this.getGameDataInfo();
        gameinfo.collect && (gameinfo.collect.open = 0);
      },
      clearFreeData: function clearFreeData() {
        this._gameInfo.allFreeCnt = 0;
      },
      getGameDataInfo: function getGameDataInfo() {
        var gamedata = cc.vv.gameData.getGameInfo();
        if (gamedata) return gamedata;
        gamedata = cc.vv.gameData.getDeskInfo();
        if (gamedata) return gamedata;
        return null;
      },
      isBigGate: function isBigGate(idx) {
        var res;
        for (var i = 0; i < BigGate.length; i++) idx == BigGate[i] && (res = true);
        return res;
      },
      playSpine: function playSpine(node, aniName, loop, endCall) {
        if (node) {
          node.active = true;
          var ske = node.getComponent(sp.Skeleton);
          if (ske) {
            ske.setAnimation(0, aniName, loop);
            ske.setCompleteListener(function() {
              endCall && endCall();
            });
          }
        }
      },
      isFreeTime: function isFreeTime() {
        var gameinfo = this.getGameDataInfo();
        if (gameinfo.allFreeCnt > 0 && gameinfo.freeCnt != gameinfo.allFreeCnt) return true;
        return false;
      },
      isFinishFreeTime: function isFinishFreeTime() {
        var gameinfo = this.getGameDataInfo();
        if (gameinfo.allFreeCnt > 0 && 0 == gameinfo.freeCnt) return true;
        return false;
      },
      isEnterFreeGame: function isEnterFreeGame() {
        var gameinfo = this.getGameDataInfo();
        if (gameinfo.freeCnt == gameinfo.allFreeCnt && gameinfo.allFreeCnt > 0) return true;
        return false;
      },
      isOpenCollectProgress: function isOpenCollectProgress() {
        var collect = this.getGameDataInfo().collect || cc.vv.gameData.getDeskInfo().collect;
        return collect && this.GetBetIdx() >= collect.min && this._isClientOpenCollectEnergy;
      },
      setClientOpenCollectEnergy: function setClientOpenCollectEnergy(isOpen) {
        this._isClientOpenCollectEnergy = isOpen;
      },
      isOpenCollectWild: function isOpenCollectWild() {
        return this._isClientOpenCollectWild;
      },
      setClientOpenCollectWild: function setClientOpenCollectWild(isOpen) {
        this._isClientOpenCollectWild = isOpen;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  LampOfAladdin_GameWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94e31CofXVLI5XlgBK7BMJI", "LampOfAladdin_GameWheel");
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
    var RESOURCE_CFG = {
      JACKPOT: "theme175_wheel_jackpot",
      GRAND: "theme175_wheel_jp_0",
      ULTRA: "theme175_wheel_jp_1",
      MEGA: "theme175_wheel_jp_2",
      MAJOR: "theme175_wheel_jp_3",
      MINOR: "theme175_wheel_jp_4",
      MINI: "theme175_wheel_jp_5",
      2: "theme175_wheel_2x",
      3: "theme175_wheel_3x",
      5: "theme175_wheel_5x",
      10: "theme175_wheel_10x",
      FREE8: "theme175_wheel_freegame8",
      FREE10: "theme175_wheel_freegame10",
      FREE15: "theme175_wheel_freegame15",
      Blue: "theme175_wheel_blue",
      Black: "theme175_wheel_black",
      Orange: "theme175_wheel_orange",
      Gold: "theme175_wheel_gold",
      Red: "theme175_wheel_red",
      White: "theme175_wheel_white",
      Green: "theme175_wheel_green"
    };
    var ITEM_TYPE = {
      FREE: 1,
      GOLD: 2,
      JACKPOT: 3
    };
    var WHEEL_ITEM_TYPE_CFG = [ 3, 2, 2, 1, 2, 2, 3, 2, 2, 1, 2, 2, 3, 2, 2, 1, 2, 2 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _isInGame: false,
        _isAutoRotation: true,
        _node_ui_pop: null,
        _wheelSpineParent: null,
        _wheel: null,
        _btnGo: null,
        _slotsInitPos: null,
        _itemsList: null,
        _atlas: null,
        _interval: 0,
        _propsList: null,
        _multsList: null,
        _bToFree: false,
        _bReceive: false
      },
      ReconnectNet: function ReconnectNet(propsList, mults) {
        this._bReceive || this.enterGame(propsList, mults);
      },
      enterGame: function enterGame(propsList, mults) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bTransition, resp, sttlInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._propsList = propsList;
              _this._multsList = mults;
              _this._bToFree = false;
              _this._bReceive = false;
              cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(0);
              Global.SlotsSoundMgr.playBgm(_this._soundCfg.wheel_bgm);
              _this.setAutoRotation(false);
              _this._isInGame = true;
              _this.scheduleOnce(function() {
                _this._setGrayBgVisible(true);
                _this._setWildCollectVisible(false);
              }, .5);
              _this.setCharacterVisible(false);
              _this._switchScreen();
              _context.next = 13;
              return _this.awaitTime(1.5);

             case 13:
              _this.panel.active = true;
              _this.bg.active = true;
              Global.SlotsSoundMgr.playEffect("carpet_move");
              _this.playSpine(cc.find("spine_magic_fog", _this._wheelSpineParent));
              _context.next = 19;
              return _this.awaitTime(.5);

             case 19:
              _this.playSpine(cc.find("ui/spine_wheel_adge", _this.node), "animation", true);
              _this.playSpine(cc.find("ui/spine_light", _this.node), "animation", true);
              Global.SlotsSoundMgr.playEffect("magic_appear");
              _context.next = 24;
              return _this.awaitTime(.5);

             case 24:
              _this.playSpine(cc.find("spine_fog_path", _this._wheelSpineParent));
              _this._setAllNotJackpotToBlack();
              _context.next = 28;
              return _this._setSlotsVisible(false);

             case 28:
              _this._setAllNotJackpotToGrayMask();
              _context.next = 31;
              return _this.awaitTime(1.5);

             case 31:
              _context.next = 33;
              return _this.playSpine(cc.find("spine_disappear_fog", _this._wheelSpineParent), "animation1");

             case 33:
              _this.playSpine(cc.find("spine_disappear_fog", _this._wheelSpineParent), "animation2");
              _context.next = 36;
              return _this._setGrayBgVisible(false);

             case 36:
              _context.next = 38;
              return _this._changeJackpotToPool();

             case 38:
              _context.next = 40;
              return _this.awaitTime(.3);

             case 40:
              _this.playSpine(cc.find("spine_wheel_fog", _this._wheelSpineParent));
              _context.next = 43;
              return _this._showWheelItemsProp();

             case 43:
              _context.next = 45;
              return _this.awaitTime(.3);

             case 45:
              bTransition = false;
              _context.next = 48;
              return cc.vv.gameData.reqSubGame(3);

             case 48:
              resp = _context.sent;
              if (!(200 == resp.code)) {
                _context.next = 66;
                break;
              }
              _this._bReceive = true;
              sttlInfo = resp.data.info;
              _context.next = 54;
              return _this._startRotationWheel(resp.data.idx - 1, false);

             case 54:
              if (!("free" == sttlInfo.type)) {
                _context.next = 64;
                break;
              }
              bTransition = true;
              _context.next = 58;
              return _this._showFreeGameStartUIDialouge(sttlInfo.num);

             case 58:
              cc.vv.gameData.SetTotalFree(sttlInfo.num);
              cc.vv.gameData.SetFreeTime(sttlInfo.num);
              cc.vv.gameData.GetSlotsScript().ShowGameview(true);
              _this._bToFree = true;
              _context.next = 66;
              break;

             case 64:
              _context.next = 66;
              return _this._showWinCoinResultUIDialouge(sttlInfo.num);

             case 66:
              _context.next = 68;
              return _this.exitGameWheel(bTransition);

             case 68:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitFreeGame: function exitFreeGame(freewinCoin) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2._showFreeGameResultUIDialouge(freewinCoin);

             case 2:
              _this2._hideAllUIDialouge();
              Global.SlotsSoundMgr.stopBgm();

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitGameWheel: function exitGameWheel(bTransition) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3.scheduleOnce(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var _iterator, _step, subNode, _iterator2, _step2, _subNode;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    Global.SlotsSoundMgr.stopBgm();
                    _this3._isInGame = false;
                    _this3._isAutoRotation = true;
                    _this3._setWildCollectVisible(true);
                    _context3.next = 6;
                    return _this3._setSlotsVisible(true);

                   case 6:
                    _iterator = _createForOfIteratorHelper(cc.find("ui", _this3.node).children);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        subNode = _step.value;
                        "spine" == subNode.name.substr(0, 5) && (subNode.active = false);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    _this3._hideAllUIDialouge();
                    _this3.resetInit();
                    _iterator2 = _createForOfIteratorHelper(_this3._wheelSpineParent.children);
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        _subNode = _step2.value;
                        _subNode.active = false;
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                    _this3.panel.active = false;
                    _this3.bg.active = false;

                   case 14:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })), .2);
              if (!bTransition) {
                _context4.next = 8;
                break;
              }
              _this3._switchScreen();
              _context4.next = 5;
              return _this3.awaitTime(1.5);

             case 5:
              _this3.setCharacterVisible(true);
              _context4.next = 9;
              break;

             case 8:
              _this3.setCharacterVisible(true, true);

             case 9:
              SlotsFacade.dm.GetFreeTime() > 0 && Global.SlotsSoundMgr.playBgm("free_bgm");

             case 10:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      setAutoRotation: function setAutoRotation(auto) {
        this._isAutoRotation = auto;
      },
      onLoad: function onLoad() {
        this._node_ui_pop = cc.find("Canvas/safe_node/node_ui_pop");
        this._wheelSpineParent = cc.find("GameWheelSpine", this._node_ui_pop);
        this._wheelSpineParent.active = true;
        this._atlas = cc.vv.gameData.GetAtlasByName("wheel");
        this._wheel = cc.find("ui/wheel", this.node);
        this._btnSpin = cc.find("ui/btn_go", this.node);
        var itemTemplate = cc.find("itemsList/Item", this._wheel);
        itemTemplate.active = false;
        var multItemTemplate = cc.find("itemListExtra/ItemExtra", this._wheel);
        multItemTemplate.active = false;
        this._itemsList = [];
        for (var i = 0; i < 18; i++) {
          var item = cc.instantiate(itemTemplate);
          item.active = true;
          item.angle = -(20 * i + 10);
          item.parent = itemTemplate.parent;
          var multItem = cc.instantiate(multItemTemplate);
          multItem.active = true;
          multItem.angle = item.angle;
          multItem.parent = multItemTemplate.parent;
          this._itemsList.push({
            item: item,
            mult: multItem
          });
        }
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
        this.panel = this.node.getChildByName("ui");
        this.panel.active = false;
        this.bg = this.node.getChildByName("bg_wheel");
        this.bg.active = false;
      },
      start: function start() {
        this.resetInit();
      },
      resetInit: function resetInit() {
        this._interval = 0;
        this._btnSpin.getComponent(cc.Button).enabled = false;
        var wheelDataList = [];
        var freeCnt = 0;
        var _iterator3 = _createForOfIteratorHelper(WHEEL_ITEM_TYPE_CFG), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var type = _step3.value;
            switch (type) {
             case ITEM_TYPE.FREE:
              var FREE_LIST = [ "FREE8", "FREE10", "FREE15" ];
              wheelDataList.push(FREE_LIST[freeCnt]);
              freeCnt++;
              break;

             case ITEM_TYPE.GOLD:
              var goldsNum = cc.vv.gameData.GetTotalBet() * Global.random(5, 375);
              wheelDataList.push(goldsNum);
              break;

             case ITEM_TYPE.JACKPOT:
              var jackpot = "JACKPOT";
              wheelDataList.push(jackpot);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.resetWheel(wheelDataList);
      },
      resetWheel: function resetWheel(wheelDataList, multList) {
        this.restoreItems();
        for (var i in wheelDataList) {
          var itemDataId = wheelDataList[i];
          var mult = null;
          multList && (mult = multList["idx_" + (parseInt(i) + 1)]);
          var obj = this._itemsList[i];
          this._setItemShowByData(obj, itemDataId, mult);
        }
      },
      restoreItems: function restoreItems() {
        var _iterator4 = _createForOfIteratorHelper(this._itemsList), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var obj = _step4.value;
            var item = obj.item;
            for (var i = 1; i <= 4; i++) item.getChildByName("props" + i).active = false;
            obj.mult.active = false;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      update: function update(dt) {
        if (this._isAutoRotation) {
          this._interval += dt;
          if (this._interval > .03) {
            this._interval -= .03;
            this._wheel.angle -= .2;
          }
        }
      },
      onBtnSpinClick: function onBtnSpinClick() {
        this._btnSpin.getComponent(cc.Button).interactable = false;
      },
      _startRotationWheel: function _startRotationWheel(winPropIdx, isNeedRelocation) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var alad, sScaleX, sScaleY, targetPropIdx;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("magic_stir");
              _this4.playSpine(cc.find("ui/spine_go", _this4.node));
              alad = cc.find("ui/spine_genie_action", _this4.node);
              alad.active = true;
              sScaleX = alad.scaleX;
              sScaleY = alad.scaleY;
              alad.scale = 0;
              cc.tween(alad).to(.5, {
                scaleX: sScaleX,
                scaleY: sScaleY
              }).start();
              _this4.playSpine(alad, "skill", true);
              Global.SlotsSoundMgr.playEffect("wheel_spin");
              targetPropIdx = winPropIdx;
              _this4.playSpine(cc.find("ui/spine_boom", _this4.node));
              _context5.next = 14;
              return _this4._rotateWheelToTarget(targetPropIdx, 6, isNeedRelocation);

             case 14:
              Global.SlotsSoundMgr.stopEffectByName("wheel_spin");
              if (!isNeedRelocation) {
                _context5.next = 24;
                break;
              }
              _context5.next = 18;
              return _this4.awaitTime(1);

             case 18:
              _this4._rotateWheelToTarget(targetPropIdx, 0, false);
              Global.SlotsSoundMgr.playEffect("wheel_stop");
              _context5.next = 22;
              return _this4.awaitTime(.5);

             case 22:
              _context5.next = 25;
              break;

             case 24:
              Global.SlotsSoundMgr.playEffect("wheel_stop");

             case 25:
              _this4.playSpine(cc.find("ui/spine_win", _this4.node), "animation", true);
              _this4.playSpine(cc.find("ui/spine_wheel_adge", _this4.node), "animation2", true);
              _context5.next = 29;
              return _this4.awaitTime(2);

             case 29:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _rotateWheelToTarget: function _rotateWheelToTarget(targetIdx, roundNum, isNeedRelocation) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var rorationWheel, targetAngle, diffAngle, mRound;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      rorationWheel = _this5._wheel;
                      if (isNeedRelocation) {
                        targetIdx++;
                        targetIdx >= 18 && (targetIdx -= 18);
                      }
                      targetAngle = 20 * targetIdx + 10;
                      targetAngle *= -1;
                      diffAngle = targetAngle - rorationWheel.angle;
                      mRound = roundNum;
                      _context6.next = 8;
                      return _this5.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound + .4, rorationWheel.angle + 360 * mRound + diffAngle).easing(cc.easeSineInOut()) ]);

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _setItemShowByData: function _setItemShowByData(itemObj, itemDataId, mult) {
        var propType = this._getPropType(itemDataId);
        var propsNode = itemObj.item.getChildByName("props" + propType);
        propsNode.active = true;
        switch (propType) {
         case ITEM_TYPE.FREE:
         case ITEM_TYPE.JACKPOT:
          propsNode.getComponent(cc.Sprite).spriteFrame = this._atlas.getSpriteFrame(RESOURCE_CFG[itemDataId]);
          break;

         case ITEM_TYPE.GOLD:
          propsNode.getComponent(cc.Label).string = Global.convertNumToShort(parseInt(itemDataId), 1e3, 0);
        }
        itemObj.item.name = itemDataId.toString();
        itemObj.item.getChildByName("item_bg").getComponent(cc.Sprite).spriteFrame = this._atlas.getSpriteFrame(RESOURCE_CFG[this._getItemBgColorName(itemDataId)]);
        if (mult) {
          var multNode = itemObj.mult;
          multNode.active = true;
          multNode.getChildByName("mult").getComponent(cc.Sprite).spriteFrame = this._atlas.getSpriteFrame(RESOURCE_CFG[mult.toString()]);
        }
      },
      _getItemBgColorName: function _getItemBgColorName(itemDataId) {
        var propType = this._getPropType(itemDataId);
        var bgColor = "White";
        switch (propType) {
         case ITEM_TYPE.FREE:
          bgColor = "Red";
          break;

         case ITEM_TYPE.JACKPOT:
          bgColor = "Gold";
          break;

         case ITEM_TYPE.GOLD:
          var mult = parseInt(itemDataId) / cc.vv.gameData.GetTotalBet();
          bgColor = mult > 300 ? "Orange" : mult > 200 ? "Blue" : this._isInGame ? "Green" : "White";
        }
        return bgColor;
      },
      _getPropType: function _getPropType(prop) {
        return "string" == typeof prop ? "FREE" == prop.substr(0, 4) ? ITEM_TYPE.FREE : ITEM_TYPE.JACKPOT : ITEM_TYPE.GOLD;
      },
      _changeJackpotToPool: function _changeJackpotToPool() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var _loop, i;
          return regeneratorRuntime.wrap(function _callee8$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("jp_reset");
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var item;
                return regeneratorRuntime.wrap(function _loop$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                   case 0:
                    if (!(WHEEL_ITEM_TYPE_CFG[i] == ITEM_TYPE.JACKPOT)) {
                      _context8.next = 6;
                      break;
                    }
                    item = _this6._itemsList[i].item;
                    _this6._propsList && item.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                      _this6._setItemShowByData(_this6._itemsList[i], _this6._propsList[i]);
                    })));
                    _context8.next = 5;
                    return _this6.playSpine(item.getChildByName("spine_jackpot_change"));

                   case 5:
                    item.getChildByName("spine_jackpot_change").active = false;

                   case 6:
                   case "end":
                    return _context8.stop();
                  }
                }, _loop);
              });
              _context9.t0 = regeneratorRuntime.keys(WHEEL_ITEM_TYPE_CFG);

             case 3:
              if ((_context9.t1 = _context9.t0()).done) {
                _context9.next = 8;
                break;
              }
              i = _context9.t1.value;
              return _context9.delegateYield(_loop(i), "t2", 6);

             case 6:
              _context9.next = 3;
              break;

             case 8:
             case "end":
              return _context9.stop();
            }
          }, _callee8);
        }))();
      },
      _showWheelItemsProp: function _showWheelItemsProp() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var i, propId, propType, bgColor, _i, _propId, _propType, _bgColor, itemObj;
          return regeneratorRuntime.wrap(function _callee10$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              if (!_this7._propsList) {
                _context11.next = 25;
                break;
              }
              Global.SlotsSoundMgr.playEffect("multi_reset");
              _context11.t0 = regeneratorRuntime.keys(_this7._propsList);

             case 3:
              if ((_context11.t1 = _context11.t0()).done) {
                _context11.next = 14;
                break;
              }
              i = _context11.t1.value;
              propId = _this7._propsList[i];
              propType = _this7._getPropType(propId);
              if (!(propType == ITEM_TYPE.JACKPOT)) {
                _context11.next = 9;
                break;
              }
              return _context11.abrupt("continue", 3);

             case 9:
              bgColor = _this7._getItemBgColorName(propId);
              if (!("Green" == bgColor)) {
                _context11.next = 12;
                break;
              }
              return _context11.delegateYield(regeneratorRuntime.mark(function _callee9() {
                var itemObj;
                return regeneratorRuntime.wrap(function _callee9$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                   case 0:
                    itemObj = _this7._itemsList[i];
                    _this7._setItemShowByData(itemObj, propId, _this7._multsList["idx_" + (parseInt(i) + 1)]);
                    itemObj.item.getChildByName("black_mask").active = false;
                    _context10.next = 5;
                    return _this7.playActions(itemObj.item, [ cc.delayTime(.1), cc.callFunc(function() {
                      _this7.playSpine(itemObj.item.getChildByName("spine_green_bg"), "animation2");
                      itemObj.item.getChildByName("spine_green_bg").active = false;
                    }) ]);

                   case 5:
                   case "end":
                    return _context10.stop();
                  }
                }, _callee9);
              })(), "t2", 12);

             case 12:
              _context11.next = 3;
              break;

             case 14:
              _context11.t3 = regeneratorRuntime.keys(_this7._propsList);

             case 15:
              if ((_context11.t4 = _context11.t3()).done) {
                _context11.next = 25;
                break;
              }
              _i = _context11.t4.value;
              _propId = _this7._propsList[_i];
              _propType = _this7._getPropType(_propId);
              if (!(_propType == ITEM_TYPE.JACKPOT)) {
                _context11.next = 21;
                break;
              }
              return _context11.abrupt("continue", 15);

             case 21:
              _bgColor = _this7._getItemBgColorName(_propId);
              if ("Green" != _bgColor) {
                itemObj = _this7._itemsList[_i];
                itemObj.item.getChildByName("black_mask").active = false;
                _this7._setItemShowByData(itemObj, _propId);
              }
              _context11.next = 15;
              break;

             case 25:
             case "end":
              return _context11.stop();
            }
          }, _callee10);
        }))();
      },
      _setAllNotJackpotToBlack: function _setAllNotJackpotToBlack() {
        var _iterator5 = _createForOfIteratorHelper(this._itemsList), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var obj = _step5.value;
            if ("JACKPOT" != obj.item.name) {
              var black_mask = obj.item.getChildByName("black_mask");
              black_mask.active = true;
              black_mask.opacity = 255;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      },
      _setAllNotJackpotToGrayMask: function _setAllNotJackpotToGrayMask() {
        var _iterator6 = _createForOfIteratorHelper(this._itemsList), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var obj = _step6.value;
            if ("JACKPOT" != obj.item.name) {
              var black_mask = obj.item.getChildByName("black_mask");
              cc.tween(black_mask).to(.8, {
                opacity: 180
              }).start();
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      setCharacterVisible: function setCharacterVisible(bVisible) {
        var bMove = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var character = cc.find("Canvas/safe_node/character");
        if (bVisible && bMove) {
          var norPos = character.position;
          character.x = norPos.x - cc.winSize.width;
          character.active = bVisible;
          cc.tween(character).to(.5, {
            position: norPos
          }, {
            easing: "easeIn"
          }).start();
        } else character.active = bVisible;
      },
      _setSlotsVisible: function _setSlotsVisible(isVisible) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var slotsNode, node_energy, prizePool, hidePos, startPos, targetPos;
          return regeneratorRuntime.wrap(function _callee11$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              slotsNode = cc.find("Canvas/safe_node/slots");
              if (!(slotsNode.active == isVisible)) {
                _context12.next = 3;
                break;
              }
              return _context12.abrupt("return");

             case 3:
              node_energy = cc.find("Canvas/safe_node/slots/node_energy");
              node_energy.active = false;
              prizePool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
              prizePool.active = isVisible;
              hidePos = cc.v2(0, -1e3);
              _this8._slotsInitPos || (_this8._slotsInitPos = slotsNode.position);
              startPos = isVisible ? hidePos : _this8._slotsInitPos;
              targetPos = isVisible ? _this8._slotsInitPos : hidePos;
              if (!isVisible) {
                _context12.next = 17;
                break;
              }
              _this8._bToFree || (node_energy.active = true);
              slotsNode.position = targetPos;
              slotsNode.active = true;
              _context12.next = 21;
              break;

             case 17:
              slotsNode.position = startPos;
              _context12.next = 20;
              return _this8.playActions(slotsNode, [ cc.moveTo(1, targetPos).easing(cc.easeSineIn()) ]);

             case 20:
              slotsNode.active = false;

             case 21:
             case "end":
              return _context12.stop();
            }
          }, _callee11);
        }))();
      },
      _setWildCollectVisible: function _setWildCollectVisible(isVisible) {
        cc.find("Canvas/safe_node/slots/spine_collect_wild").active = isVisible;
      },
      _setGrayBgVisible: function _setGrayBgVisible(isVisible) {
        var startOpacity = isVisible ? 0 : 200;
        var targetOpacity = isVisible ? 200 : 0;
        var grayLayer = cc.find("grayLayer", this._wheelSpineParent);
        grayLayer.active = true;
        grayLayer.opacity = startOpacity;
        return new Promise(function(success) {
          cc.tween(grayLayer).to(1, {
            opacity: targetOpacity
          }).call(function() {
            isVisible || (grayLayer.active = false);
            success();
          }).start();
        });
      },
      _switchScreen: function _switchScreen() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var spine_transition;
          return regeneratorRuntime.wrap(function _callee12$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this9._bToFree ? Global.SlotsSoundMgr.playEffect(_this9._soundCfg.transition1) : Global.SlotsSoundMgr.playEffect(_this9._soundCfg.transition_2);
              spine_transition = cc.find("Canvas/safe_node/spine_transition");
              spine_transition.parent.active = true;
              _context13.next = 5;
              return _this9.playSpine(spine_transition, "skill_1");

             case 5:
              spine_transition.active = false;

             case 6:
             case "end":
              return _context13.stop();
            }
          }, _callee12);
        }))();
      },
      _showFreeGameStartUIDialouge: function _showFreeGameStartUIDialouge(freetimes) {
        var _this10 = this;
        this._hideAllUIDialouge();
        var dialouge = cc.find("uiFreeGameTri", this._node_ui_pop);
        dialouge.active = true;
        var spineBg = cc.find("spine", dialouge);
        spineBg.active = true;
        var btnstart = cc.find("btn", dialouge);
        btnstart.getComponent(cc.Button).enabled = false;
        var lblFreetimes = cc.find("times", dialouge);
        lblFreetimes.getComponent(cc.Label).string = freetimes;
        var self = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
            return regeneratorRuntime.wrap(function _callee15$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(_this10._soundCfg.fg_popup);
                lblFreetimes.scale = 0;
                cc.tween(lblFreetimes).delay(.5).to(.3, {
                  scale: 1.3
                }).to(.2, {
                  scale: 1
                }).start();
                cc.tween(btnstart).to(.3, {
                  scale: 1.3
                }).to(.2, {
                  scale: 1
                }).start();
                _context16.next = 7;
                return _this10.playSpine(spineBg, "animation1", false, function() {
                  self.playSpine(spineBg, "animation1_1", true);
                });

               case 7:
                btnstart.getComponent(cc.Button).enabled = true;
                if (cc.vv.gameData.isNeedAutoPlay()) {
                  btnstart.stopAllActions();
                  cc.tween(btnstart).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                    return regeneratorRuntime.wrap(function _callee13$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        btnstart.getComponent(cc.Button).enabled = false;
                        cc.tween(lblFreetimes).to(.3, {
                          scale: 1.3
                        }).to(.2, {
                          scale: 0
                        }).start();
                        cc.tween(btnstart).to(.3, {
                          scale: 1.3
                        }).to(.2, {
                          scale: 0
                        }).start();
                        Global.SlotsSoundMgr.playEffect(_this10._soundCfg.fg_popclose);
                        _context14.next = 6;
                        return _this10.playSpine(spineBg, "animation1_2");

                       case 6:
                        btnstart.off("click");
                        dialouge.active = false;
                        success();

                       case 9:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee13);
                  }))).start();
                }
                Global.btnClickEvent(btnstart, _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      btnstart.stopAllActions();
                      btnstart.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect(_this10._soundCfg.click);
                      cc.tween(lblFreetimes).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 0
                      }).start();
                      cc.tween(btnstart).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 0
                      }).start();
                      Global.SlotsSoundMgr.playEffect(_this10._soundCfg.fg_popclose);
                      _context15.next = 8;
                      return _this10.playSpine(spineBg, "animation1_2");

                     case 8:
                      btnstart.off("click");
                      dialouge.active = false;
                      success();

                     case 11:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee14);
                })), _this10);

               case 10:
               case "end":
                return _context16.stop();
              }
            }, _callee15);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      _showFreeGameResultUIDialouge: function _showFreeGameResultUIDialouge(winCoin) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          var dialouge, spineBg, offY, uiResult, btnCollect, lblWinCoin, self;
          return regeneratorRuntime.wrap(function _callee19$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              _this11._hideAllUIDialouge();
              dialouge = cc.find("uiFreeGameEnd", _this11._node_ui_pop);
              dialouge.active = true;
              spineBg = cc.find("spine", dialouge);
              spineBg.active = true;
              offY = 45;
              uiResult = cc.find("uiResult", dialouge);
              uiResult.active = true;
              uiResult.y = -offY;
              uiResult.opacity = 0;
              btnCollect = cc.find("btn", uiResult);
              btnCollect.getComponent(cc.Button).enabled = false;
              lblWinCoin = cc.find("lblWinCoin", uiResult);
              lblWinCoin.active = true;
              lblWinCoin.getComponent(cc.Label).string = "";
              self = _this11;
              return _context20.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
                  return regeneratorRuntime.wrap(function _callee18$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect(_this11._soundCfg.fg_popup);
                      cc.tween(uiResult).to(.4, {
                        y: 0,
                        opacity: 255
                      }).start();
                      _this11.playSpine(spineBg, "animation2", false, function() {
                        self.playSpine(spineBg, "animation2_1", true);
                      });
                      _context19.next = 6;
                      return cc.vv.gameData.awaitTime(.4);

                     case 6:
                      lblWinCoin.active = true;
                      Global.doRoallNumEff(lblWinCoin, 0, winCoin, 2, function() {
                        btnCollect.getComponent(cc.Button).enabled = true;
                      }, null, 0, true);
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        btnCollect.stopAllActions();
                        cc.tween(btnCollect).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                          return regeneratorRuntime.wrap(function _callee16$(_context17) {
                            while (1) switch (_context17.prev = _context17.next) {
                             case 0:
                              btnCollect.getComponent(cc.Button).enabled = false;
                              cc.tween(uiResult).to(.4, {
                                y: -offY,
                                opacity: 0
                              }).start();
                              Global.SlotsSoundMgr.playEffect(_this11._soundCfg.fg_popclose);
                              _context17.next = 5;
                              return _this11.playSpine(spineBg, "animation2_2");

                             case 5:
                              btnCollect.off("click");
                              dialouge.active = false;
                              _context17.next = 9;
                              return _this11.awaitTime(.2);

                             case 9:
                              cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                              _this11.setCharacterVisible(false);
                              _this11._switchScreen();
                              _context17.next = 14;
                              return _this11.awaitTime(1.3);

                             case 14:
                              _this11.setCharacterVisible(true);
                              success();

                             case 16:
                             case "end":
                              return _context17.stop();
                            }
                          }, _callee16);
                        }))).start();
                      }
                      Global.btnClickEvent(btnCollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                        return regeneratorRuntime.wrap(function _callee17$(_context18) {
                          while (1) switch (_context18.prev = _context18.next) {
                           case 0:
                            btnCollect.stopAllActions();
                            btnCollect.getComponent(cc.Button).enabled = false;
                            Global.SlotsSoundMgr.playEffect(_this11._soundCfg.click);
                            cc.tween(uiResult).to(.4, {
                              y: -offY,
                              opacity: 0
                            }).start();
                            Global.SlotsSoundMgr.playEffect(_this11._soundCfg.fg_popclose);
                            _context18.next = 7;
                            return _this11.playSpine(spineBg, "animation2_2");

                           case 7:
                            btnCollect.off("click");
                            dialouge.active = false;
                            _context18.next = 11;
                            return _this11.awaitTime(.2);

                           case 11:
                            cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                            _this11.setCharacterVisible(false);
                            _this11._switchScreen();
                            _context18.next = 16;
                            return _this11.awaitTime(1.3);

                           case 16:
                            _this11.setCharacterVisible(true);
                            success();

                           case 18:
                           case "end":
                            return _context18.stop();
                          }
                        }, _callee17);
                      })), _this11);

                     case 10:
                     case "end":
                      return _context19.stop();
                    }
                  }, _callee18);
                }));
                return function(_x3) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 17:
             case "end":
              return _context20.stop();
            }
          }, _callee19);
        }))();
      },
      _showWinCoinResultUIDialouge: function _showWinCoinResultUIDialouge(winCoin) {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          var dialouge, spineBg, uiResult, btnCollect, lblWinCoin, self;
          return regeneratorRuntime.wrap(function _callee23$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
             case 0:
              _this12._hideAllUIDialouge();
              dialouge = cc.find("uiWinCoinDialouge", _this12._node_ui_pop);
              dialouge.active = true;
              spineBg = cc.find("spine", dialouge);
              spineBg.active = true;
              uiResult = cc.find("uiResult", dialouge);
              uiResult.active = true;
              uiResult.y = -100;
              uiResult.opacity = 0;
              btnCollect = cc.find("btn", uiResult);
              btnCollect.getComponent(cc.Button).enabled = false;
              lblWinCoin = cc.find("lblWinCoin", uiResult);
              lblWinCoin.active = true;
              lblWinCoin.getComponent(cc.Label).string = "";
              self = _this12;
              return _context24.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success) {
                  return regeneratorRuntime.wrap(function _callee22$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect(_this12._soundCfg.wheel_popup);
                      cc.tween(uiResult).to(.4, {
                        y: 0,
                        opacity: 255
                      }).start();
                      _this12.playSpine(spineBg, "animation1", false, function() {
                        self.playSpine(spineBg, "animation1_1", true);
                      });
                      _context23.next = 6;
                      return cc.vv.gameData.awaitTime(.4);

                     case 6:
                      Global.doRoallNumEff(lblWinCoin, 0, winCoin, 2, function() {
                        btnCollect.getComponent(cc.Button).enabled = true;
                      }, null, 0, true);
                      btnCollect.getComponent(cc.Button).enabled = true;
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(winCoin);
                      cc.vv.gameData.AddCoin(winCoin);
                      cc.vv.gameData.GetSlotsScript()._topScript.ShowCoin();
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        btnCollect.stopAllActions();
                        cc.tween(btnCollect).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                          return regeneratorRuntime.wrap(function _callee20$(_context21) {
                            while (1) switch (_context21.prev = _context21.next) {
                             case 0:
                              btnCollect.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(_this12._soundCfg.wheel_popclose);
                              cc.tween(uiResult).to(.4, {
                                y: -100,
                                opacity: 0
                              }).start();
                              _context21.next = 5;
                              return _this12.playSpine(spineBg, "animation1_2");

                             case 5:
                              btnCollect.off("click");
                              dialouge.active = false;
                              success();

                             case 8:
                             case "end":
                              return _context21.stop();
                            }
                          }, _callee20);
                        }))).start();
                      }
                      Global.btnClickEvent(btnCollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                        return regeneratorRuntime.wrap(function _callee21$(_context22) {
                          while (1) switch (_context22.prev = _context22.next) {
                           case 0:
                            btnCollect.stopAllActions();
                            btnCollect.getComponent(cc.Button).enabled = false;
                            Global.SlotsSoundMgr.playEffect(_this12._soundCfg.click);
                            Global.SlotsSoundMgr.playEffect(_this12._soundCfg.wheel_popclose);
                            cc.tween(uiResult).to(.4, {
                              y: -100,
                              opacity: 0
                            }).start();
                            _context22.next = 7;
                            return _this12.playSpine(spineBg, "animation1_2");

                           case 7:
                            btnCollect.off("click");
                            dialouge.active = false;
                            success();

                           case 10:
                           case "end":
                            return _context22.stop();
                          }
                        }, _callee21);
                      })), _this12);

                     case 13:
                     case "end":
                      return _context23.stop();
                    }
                  }, _callee22);
                }));
                return function(_x4) {
                  return _ref9.apply(this, arguments);
                };
              }()));

             case 16:
             case "end":
              return _context24.stop();
            }
          }, _callee23);
        }))();
      },
      _hideAllUIDialouge: function _hideAllUIDialouge() {
        cc.find("uiFreeGameTri", this._node_ui_pop).active = false;
        cc.find("uiFreeGameEnd", this._node_ui_pop).active = false;
        cc.find("uiWinCoinDialouge", this._node_ui_pop).active = false;
      },
      playSpine: function playSpine(node) {
        var animationName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
        var isLoop = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var endCall = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return new Promise(function(success) {
          if (node) {
            node.active = true;
            AppLog.log("\u64ad\u653e\u8282\u70b9[" + node.parent.name + "/" + node.name + "]\u7684spine\u52a8\u4f5c: " + animationName);
            node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
            isLoop ? success() : node.getComponent(sp.Skeleton).setCompleteListener(function() {
              endCall && endCall();
              success();
            });
          } else {
            endCall && endCall();
            success();
          }
        });
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this13 = this;
        return new Promise(function(success) {
          _this13.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79f09khnypKEboWdf8bnqJA", "LampOfAladdin_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.InitCommComponent();
        this.mainPanel = cc.find("safe_node", this.node);
        this.energyCollect = cc.find("slots/node_energy", this.mainPanel).getComponent("LampOfAladdin_Energy");
        this.energyFreeGame = cc.find("node_energy_free_game", this.mainPanel).getComponent("LampOfAladdin_Energy_FreeGame");
        this.gameWheel = cc.find("gameWheel", this.mainPanel).getComponent("LampOfAladdin_GameWheel");
        this.map = cc.find("map_game", this.mainPanel).getComponent("LampOfAladdin_Map");
        this.pickBonus = cc.find("gamePickBonus", this.mainPanel).getComponent("LampOfAladdin_PickBonus");
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
      },
      onDestroy: function onDestroy() {
        window.SlotsFacade = null;
        this.dm = null;
      },
      delayTime: function delayTime(time) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.scheduleOnce(function() {
            res();
          }, time);
        });
      },
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LampOfAladdin_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bf8f4bXplPlbm1dI1mXm1a", "LampOfAladdin_Map");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        yb_grey: cc.SpriteFrame,
        yb_light: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        this._entermap = false;
        this._lay_bg = cc.find("lay_bg", this.node);
        this._lay_bg.active = false;
        this._node_mask = cc.find("node_mask", this.node);
        this._map = cc.find("map", this._node_mask);
        this._moveUser = cc.find("user_sp", this._map);
        var btnBack = cc.find("map/btn_back", this._node_mask);
        Global.btnClickEvent(btnBack, this.onClickBack, this);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      showMapDetail: function showMapDetail() {
        var _this = this;
        var engData = cc.vv.gameData.getCollectData();
        var curMapId = engData.idx;
        var yuanbaolight = cc.find("yuanbaolight", this._map);
        yuanbaolight.active = false;
        for (var i = 1; i <= 19; i++) {
          var item = cc.find("s_" + i, this._map);
          if (item) if (cc.vv.gameData.isBigGate(i)) {
            var item_spine = item.getChildByName("spine");
            if (i > curMapId) item_spine.active = false; else if (i == curMapId && !this._bTrigger) {
              this._moveUser.position = item.position;
              this._moveUser.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              item_spine.active = true;
              item_spine.getComponent(sp.Skeleton).setAnimation(0, "animation" + i + "_1", true);
            }
          } else if (i < curMapId) item.getComponent(cc.Sprite).spriteFrame = this.yb_light; else if (i == curMapId) {
            if (!this._bTrigger) {
              this._moveUser.position = item.position;
              this._moveUser.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              this.showSmallGateLight(item, yuanbaolight);
              item.getComponent(cc.Sprite).spriteFrame = this.yb_light;
            }
          } else item.getComponent(cc.Sprite).spriteFrame = this.yb_grey;
        }
        if (this._bTrigger) {
          this._moveUser.position = cc.find("s_" + (curMapId - 1), this._map).position;
          cc.tween(this._moveUser).to(.5, {
            position: cc.find("s_" + curMapId, this._map).position
          }).start();
          var spineMoveUser = this._moveUser.getComponent(sp.Skeleton);
          spineMoveUser.setAnimation(0, "animation", false);
          spineMoveUser.setCompleteListener(function() {
            spineMoveUser.setAnimation(0, "animation2", true);
            spineMoveUser.setCompleteListener(null);
            _this.pathMoveFinish(curMapId, yuanbaolight, curMapId);
            _this.delayShowExistMap();
          });
          cc.vv.gameData.isBigGate(curMapId) ? 19 == curMapId ? Global.SlotsSoundMgr.playEffect(this._soundCfg.meter_full) : Global.SlotsSoundMgr.playEffect(this._soundCfg.map_node) : Global.SlotsSoundMgr.playEffect(this._soundCfg.map_move);
        }
      },
      delayShowExistMap: function delayShowExistMap() {
        var _this2 = this;
        this._bTrigger && this.scheduleOnce(function() {
          _this2.existMap(_this2.showSubGame(_this2));
        }, 2);
      },
      ReconnectNet: function ReconnectNet(bTrigger) {},
      enterMap: function enterMap(bTrigger) {
        var _this3 = this;
        if (this._entermap) return;
        this._entermap = true;
        cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
        this._bTrigger = bTrigger;
        this.node.active = true;
        this._node_mask.active = true;
        this._lay_bg.active = true;
        this._map.y = 2e3;
        Global.SlotsSoundMgr.playEffect(this._soundCfg.map_open);
        cc.tween(this._map).to(.3, {
          y: 0
        }).call(function() {
          _this3.showMapDetail();
          var btnBack = cc.find("map/btn_back", _this3._node_mask);
          btnBack.active = !_this3._bTrigger;
          btnBack.scale = 0;
          btnBack.active && cc.tween(btnBack).delay(.1).to(.2, {
            scale: 1.3
          }).to(.2, {
            scale: 1
          }).start();
        }).start();
      },
      existMap: function existMap(endCall) {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect(this._soundCfg.map_close);
        cc.tween(this._map).to(.3, {
          position: cc.v2(0, 2e3)
        }).call(function() {
          _this4._lay_bg.active = false;
          _this4._node_mask.active = false;
          _this4.node.active = false;
          _this4._entermap = false;
          endCall && endCall();
        }).start();
      },
      onClickBack: function onClickBack() {
        var _this5 = this;
        Global.SlotsSoundMgr.playEffect(this._soundCfg.click);
        var btnBack = cc.find("map/btn_back", this._node_mask);
        btnBack.getComponent(cc.Button).enabled = false;
        cc.tween(btnBack).to(.1, {
          scale: 1.3
        }).to(.2, {
          scale: 0
        }).call(function() {
          btnBack.getComponent(cc.Button).enabled = true;
          _this5.existMap(function() {
            cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
          });
        }).start();
      },
      pathMoveFinish: function pathMoveFinish(mapid, ybnode, id) {
        var item = cc.find("s_" + mapid, this._map);
        cc.vv.gameData.isBigGate(mapid) ? this.openBigGate(item, id) : this.openSmallGate(item, ybnode);
      },
      showSmallGateLight: function showSmallGateLight(itemnode, yuanbaonode) {
        yuanbaonode.position = yuanbaonode.parent.convertToNodeSpaceAR(itemnode.convertToWorldSpaceAR(cc.v2(0, 0)));
        yuanbaonode.active = true;
        var ybsp = yuanbaonode.getComponent(sp.Skeleton);
        ybsp.setAnimation(0, "animation1_1", true);
      },
      openBigGate: function openBigGate(itemnode, id) {
        var item_spine = itemnode.getChildByName("spine");
        var ybsp = item_spine.getComponent(sp.Skeleton);
        ybsp.setAnimation(0, "animation" + id, false);
        ybsp.setCompleteListener(function() {
          ybsp.setAnimation(0, "animation" + id + "_1", true);
          ybsp.setCompleteListener(null);
        });
      },
      openSmallGate: function openSmallGate(itemnode, yuanbaonode) {
        itemnode.getComponent(cc.Sprite).spriteFrame = this.yb_light;
        yuanbaonode.position = yuanbaonode.parent.convertToNodeSpaceAR(itemnode.convertToWorldSpaceAR(cc.v2(0, 0)));
        yuanbaonode.active = true;
        var ybsp = yuanbaonode.getComponent(sp.Skeleton);
        ybsp.setAnimation(0, "animation1", false);
        ybsp.setCompleteListener(function() {
          ybsp.setAnimation(0, "animation1_1", true);
          ybsp.setCompleteListener(null);
        });
      },
      showSubGame: function showSubGame(self) {
        var engData = cc.vv.gameData.getCollectData();
        if (!engData) return;
        var opengame = engData.open;
        AppLog.log("\u663e\u793a\u5b50\u6e38\u620f:" + opengame);
        if (2 == opengame) {
          var freeGame = cc.find("Canvas/safe_node/node_energy_free_game");
          freeGame.active = true;
          SlotsFacade.energyFreeGame.enterFreeGame(engData);
        } else if (1 == opengame) {
          cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
          var mapGame = cc.find("Canvas/safe_node/LMSlots_Subgame777");
          mapGame.active = true;
          mapGame.getComponent("LMSlots_Subgame777").showEnter(engData.bet);
        }
        cc.vv.gameData.clearCollectData();
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_PickBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa0c4nXFUhPU42Z484urmdv", "LampOfAladdin_PickBonus");
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
    var BottleItem = function BottleItem(node, atlas, owner) {
      var _this = this;
      this.node = node;
      this.atlas = atlas;
      this.owner = owner;
      this.jackpotIdx = 0;
      this.bottle = cc.find("bottle", this.node);
      this.jackpot = cc.find("jackpot", this.node);
      this.spine_click = cc.find("spine_click", this.node);
      this.spine_loop = cc.find("spine_loop", this.node);
      this.spine_bird_show = cc.find("spine_bird_show", this.node);
      this.spine_bird = cc.find("spine_bird_fly", this.node);
      this.spine_bottle_disappear = cc.find("spine_bottle_disappear", this.node);
      this.resetInit = function() {
        var _iterator = _createForOfIteratorHelper(_this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var subnode = _step.value;
            subnode.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        _this.bottle.active = true;
        _this.setJackpotIdx(0);
        _this.setClickEnable(true);
        _this.setGray(false);
      };
      this.restoreByData = function(serverItemInfo) {
        _this.setClickEnable(false);
        _this.setJackpotIdx(serverItemInfo.localType);
        if (serverItemInfo.localType) if (7 == serverItemInfo.localType) {
          _this.owner.playSpine(_this.spine_bird_show, "animation", true);
          _this.owner.playSpine(_this.spine_bird, "animation", true);
          _this.jackpot.active = false;
        } else {
          _this.owner.scheduleOnce(function() {
            _this.owner.playSpine(_this.spine_loop, "animation" + _this.jackpotIdx, true);
          }, 1);
          _this.jackpot.getComponent(cc.Sprite).spriteFrame = _this.atlas.getSpriteFrame("pick_jp_" + _this.jackpotIdx);
          _this.jackpot.active = true;
          _this.jackpot.scale = 1;
        }
      };
      this.setJackpotIdx = function(jackpotIdx) {
        _this.jackpotIdx = jackpotIdx;
        if (7 == jackpotIdx) {
          _this.bottle.getComponent(cc.Sprite).spriteFrame = _this.atlas.getSpriteFrame("pick_niao");
          _this.bottle.active = true;
        } else _this.bottle.getComponent(cc.Sprite).spriteFrame = _this.atlas.getSpriteFrame("pick_deng");
      };
      this.setClickCallback = function(callback) {
        _this.node.off("click");
        Global.btnClickEvent(_this.node, function() {
          _this.setClickEnable(false);
          callback();
        }, _this);
      };
      this.setClickEnable = function(enabled) {
        _this.node.getComponent(cc.Button).interactable = enabled;
      };
      this.isClickEnable = function() {
        return _this.node.getComponent(cc.Button).interactable;
      };
      this.setGray = function(isGray) {
        var color = isGray ? new cc.Color(80, 80, 80, 255) : cc.Color.WHITE;
        var _iterator2 = _createForOfIteratorHelper(_this.node.children), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _node = _step2.value;
            _node.color = color;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      };
      this.playJackpotDisappear = function() {
        var bAnim = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        _this.jackpot.active = true;
        _this.jackpot.getComponent(cc.Sprite).spriteFrame = _this.atlas.getSpriteFrame("pick_jp_" + _this.jackpotIdx);
        bAnim ? cc.tween(_this.jackpot).call(function() {
          _this.jackpot.scale = 0;
        }).to(.3, {
          scale: 1.2
        }).to(.15, {
          scale: 1
        }).start() : _this.jackpot.scale = 1;
      };
      this.playItemLock = function() {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(jackpotIdx) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.setJackpotIdx(jackpotIdx);
              _this.owner.scheduleOnce(function() {
                _this.playJackpotDisappear();
                _this.owner.playSpine(_this.spine_loop, "animation" + jackpotIdx, true);
              }, .5);
              _context.next = 4;
              return _this.owner.playSpine(_this.spine_click, "animation" + jackpotIdx);

             case 4:
              _context.next = 6;
              return _this.owner.awaitTime(.5);

             case 6:
              _this.jackpot.color = new cc.Color(80, 80, 80, 255);
              _this.spine_loop.active = false;
              _this.spine_click.active = false;
              _this.bottle.active = false;
              _this.owner.playSpine(_this.spine_bottle_disappear);

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }));
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      this.playOpenItem = function() {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(jackpotIdx) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this.setJackpotIdx(jackpotIdx);
              _this.owner.scheduleOnce(function() {
                _this.playJackpotDisappear();
                _this.owner.playSpine(_this.spine_loop, "animation" + jackpotIdx, true);
              }, .5);
              _context2.next = 4;
              return _this.owner.playSpine(_this.spine_click, "animation" + jackpotIdx);

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }));
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      }();
      this.playShowBird = function() {
        _this.jackpot.active = false;
        _this.bottle.active = false;
        _this.owner.playSpine(_this.spine_bird_show, "animation", true);
        _this.owner.playSpine(_this.spine_bird, "animation", true);
      };
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _uiStart: null,
        _uiMain: null,
        _uiResult: null,
        _itemsList: null,
        _jackpotList: null,
        _subgameInfo: null
      },
      onLoad: function onLoad() {
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
        this._slot = cc.find("Canvas/safe_node/slots");
        this._uiStart = cc.find("uiStart", this.node);
        this._uiResult = cc.find("uiResult", this.node);
        this._uiQp = cc.find("uiQp", this.node);
        this._uiQp.active = false;
        this._uiMain = cc.find("uiMain", this.node);
        this._itemsList = [];
        var atlas = cc.vv.gameData.GetAtlasByName("pick");
        var listNode = cc.find("itemListBg/List", this._uiMain);
        var itemTemplate = cc.find("ItemTemplate", listNode);
        itemTemplate.active = false;
        for (var i = 0; i < 20; i++) {
          var item = cc.instantiate(itemTemplate);
          item.active = true;
          item.name = i.toString();
          item.parent = listNode;
          this._itemsList.push(new BottleItem(item, atlas, this));
        }
        this._jackpotList = [];
        var jackpotNode = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
        var _iterator3 = _createForOfIteratorHelper(jackpotNode.children), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var node = _step3.value;
            this._jackpotList.push(node);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      ReconnectNet: function ReconnectNet(subgameInfo, isReconnected) {
        this._subgameInfo && this._subgameInfo.endFlag || this.enterGame(subgameInfo, isReconnected);
      },
      enterGame: function enterGame(subgameInfo, isReconnected) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2._subgameInfo = subgameInfo;
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playBgm(_this2._soundCfg.pick_bgm);
              _this2._resetInit();
              if (!isReconnected) {
                _context3.next = 8;
                break;
              }
              _this2._restoreByServerData();
              _context3.next = 12;
              break;

             case 8:
              _context3.next = 10;
              return _this2._playWildCollectSuccess();

             case 10:
              _context3.next = 12;
              return _this2._popStartDialuage();

             case 12:
              _context3.next = 14;
              return _this2._showMain();

             case 14:
              _context3.next = 16;
              return _this2._showResultDialouge(_this2._subgameInfo.coin);

             case 16:
              _context3.next = 18;
              return _this2.exitGame();

             case 18:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function(success) {
                var collectWildData = cc.vv.gameData.getCollectWildData();
                if (collectWildData) {
                  collectWildData.num = 0;
                  Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_COLLECT_WILD_PROGRESS);
                }
                cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
                _this3._resetInit();
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(_this3._subgameInfo.coin, _this3._subgameInfo.coin, true, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      start: function start() {},
      _resetInit: function _resetInit() {
        var _iterator4 = _createForOfIteratorHelper(this.node.children), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var subNode = _step4.value;
            subNode.active = false;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _iterator5 = _createForOfIteratorHelper(this._jackpotList), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var jackpot = _step5.value;
            jackpot.getChildByName("spine_jackpot_disappear").active = false;
            jackpot.getChildByName("spine_jackpot_win").active = false;
            jackpot.color = cc.Color.WHITE;
            var _iterator7 = _createForOfIteratorHelper(jackpot.children), _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                var node = _step7.value;
                node.color = cc.Color.WHITE;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(this._itemsList), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var bottleItem = _step6.value;
            bottleItem.resetInit();
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      _restoreByServerData: function _restoreByServerData() {
        var pickInfo = this._subgameInfo.pick;
        for (var i = 1; i <= 20; i++) {
          var itemInfo = pickInfo["idx_" + i];
          if (itemInfo.state) {
            itemInfo.localType = this._convertServerType(itemInfo.type);
            var bottleItem = this._itemsList[i - 1];
            bottleItem.restoreByData(itemInfo);
          }
        }
        var birdNum = this._getBirdNum();
        if (birdNum > 0) for (var _i = 1; _i <= birdNum; _i++) {
          var jackpotNode = this._jackpotList[6 - _i];
          jackpotNode.color = new cc.Color(80, 80, 80, 255);
          var _iterator8 = _createForOfIteratorHelper(jackpotNode.children), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              var node = _step8.value;
              node.color = new cc.Color(80, 80, 80, 255);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      },
      _getBirdNum: function _getBirdNum() {
        var birdNum = 0;
        var pickInfo = this._subgameInfo.pick;
        for (var i = 1; i <= 20; i++) {
          var itemInfo = pickInfo["idx_" + i];
          7 == itemInfo.type && birdNum++;
        }
        return birdNum;
      },
      _playWildCollectSuccess: function _playWildCollectSuccess() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var spineWildWin;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(_this4._soundCfg.pick_congratulate);
              spineWildWin = cc.find("Canvas/safe_node/slots/spine_collect_wild/spine2");
              _context5.next = 4;
              return _this4.playSpine(spineWildWin);

             case 4:
              spineWildWin.active = false;

             case 5:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _showMain: function _showMain() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var self;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this5._playTransition();
              _context8.next = 3;
              return cc.vv.gameData.awaitTime(2.2);

             case 3:
              _this5._uiMain.active = true;
              _this5._slot.active = false;
              self = _this5;
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
                  var _iterator9, _step9, _loop;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _this5._pickSuccess = success;
                      _iterator9 = _createForOfIteratorHelper(_this5._itemsList);
                      try {
                        _loop = function _loop() {
                          var bottleItem = _step9.value;
                          bottleItem.setClickCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) switch (_context6.prev = _context6.next) {
                               case 0:
                                self.clickItemfunc(bottleItem);

                               case 1:
                               case "end":
                                return _context6.stop();
                              }
                            }, _callee6);
                          })));
                        };
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) _loop();
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }
                      self.setAutoPlay();

                     case 4:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 7:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      clickItemfunc: function clickItemfunc(bottleItem) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var resp, info, jackpotIdx, birdNum, lockJackpotIdx, _iterator10, _step10, idx, lockItemIdx, lockItem;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this6._itemsList.forEach(function(item) {
                item.node.stopAllActions();
              });
              _this6._setUnSelectItemsClickEnable(false);
              _context9.next = 4;
              return cc.vv.gameData.reqSubGame(4, {
                idx: parseInt(bottleItem.node.name) + 1
              });

             case 4:
              resp = _context9.sent;
              if (!(200 === resp.code)) {
                _context9.next = 39;
                break;
              }
              info = resp.data;
              _this6._subgameInfo = info;
              jackpotIdx = _this6._convertServerType(info.type);
              bottleItem.setJackpotIdx(jackpotIdx);
              _this6.scheduleOnce(function() {
                bottleItem.bottle.active = false;
              }, .3);
              if (!(7 == jackpotIdx)) {
                _context9.next = 25;
                break;
              }
              Global.SlotsSoundMgr.playEffect(_this6._soundCfg.lamp_bird);
              bottleItem.playShowBird();
              _context9.next = 16;
              return _this6.awaitTime(.6);

             case 16:
              birdNum = _this6._getBirdNum();
              lockJackpotIdx = 7 - birdNum;
              if (_this6._subgameInfo.minTypeIdxs) {
                _iterator10 = _createForOfIteratorHelper(_this6._subgameInfo.minTypeIdxs);
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                    idx = _step10.value;
                    lockItemIdx = idx - 1;
                    lockItem = _this6._itemsList[lockItemIdx];
                    lockItem.playItemLock(lockJackpotIdx);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
                Global.SlotsSoundMgr.playEffect(_this6._soundCfg.lamp_disappear);
              }
              _context9.next = 21;
              return _this6.awaitTime(.6);

             case 21:
              _context9.next = 23;
              return _this6._playJackpotDisappearEffect(parseInt(bottleItem.node.name), lockJackpotIdx);

             case 23:
              _context9.next = 28;
              break;

             case 25:
              Global.SlotsSoundMgr.playEffect(_this6._soundCfg.lamp_click);
              _context9.next = 28;
              return bottleItem.playOpenItem(jackpotIdx);

             case 28:
              if (!info.endFlag) {
                _context9.next = 35;
                break;
              }
              _this6._playWinEffect(jackpotIdx);
              _context9.next = 32;
              return _this6.awaitTime(2);

             case 32:
              if (_this6._pickSuccess) {
                _this6._pickSuccess();
                _this6._pickSuccess = null;
              }
              _context9.next = 37;
              break;

             case 35:
              _this6._setUnSelectItemsClickEnable(true);
              _this6.setAutoPlay();

             case 37:
              _context9.next = 40;
              break;

             case 39:
              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");

             case 40:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 0; i < this._itemsList.length; i++) this._itemsList[i].isClickEnable() && list.push(this._itemsList[i]);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(list[randomIdx].node, function() {
          self.clickItemfunc(list[randomIdx]);
        });
      },
      _convertServerType: function _convertServerType(serverType) {
        return 7 == serverType ? serverType : 7 - serverType;
      },
      _setUnSelectItemsClickEnable: function _setUnSelectItemsClickEnable(enable) {
        var _iterator11 = _createForOfIteratorHelper(this._itemsList), _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
            var bottleItem = _step11.value;
            0 == bottleItem.jackpotIdx && bottleItem.setClickEnable(enable);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      },
      _showUnSelectItems: function _showUnSelectItems() {
        var _iterator12 = _createForOfIteratorHelper(this._itemsList), _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
            var bottleItem = _step12.value;
            if (0 == bottleItem.jackpotIdx) {
              var itemInfo = this._subgameInfo.pick["idx_" + (parseInt(bottleItem.node.name) + 1)];
              itemInfo.localType = this._convertServerType(itemInfo.type);
              bottleItem.setJackpotIdx(itemInfo.localType);
              7 != itemInfo.localType && bottleItem.playJackpotDisappear(false);
              bottleItem.setGray(true);
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      },
      _playWinEffect: function _playWinEffect(winPropIdx) {
        var _iterator13 = _createForOfIteratorHelper(this._itemsList), _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
            var bottleItem = _step13.value;
            bottleItem.jackpotIdx == winPropIdx && this.playSpine(bottleItem.spine_loop, "animation" + bottleItem.jackpotIdx + "_1", true);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
        this._showUnSelectItems();
        this._playJackpotWinEffect(winPropIdx);
      },
      _playJackpotWinEffect: function _playJackpotWinEffect(jackpotIdx) {
        var jackpotNode = this._jackpotList[jackpotIdx - 1];
        jackpotNode.getChildByName("spine_jackpot_win").active = true;
        Global.SlotsSoundMgr.playEffect(this._soundCfg.jp_congratulate);
      },
      _playJackpotDisappearEffect: function _playJackpotDisappearEffect(itemIdx, jackpotIdx) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var jackpotNode, particle_eff, p, _iterator14, _step14, node;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              jackpotNode = _this7._jackpotList[jackpotIdx - 1];
              particle_eff = cc.find("particle_eff", _this7._uiMain);
              particle_eff.active = true;
              particle_eff.position = _this7._convertNodePosToLocalPos(_this7._itemsList[itemIdx].node, _this7._uiMain);
              p = particle_eff.getComponent(cc.ParticleSystem);
              p.resetSystem();
              _context10.next = 8;
              return _this7.playActions(particle_eff, [ cc.moveTo(.5, _this7._convertNodePosToLocalPos(jackpotNode, _this7._uiMain)) ]);

             case 8:
              jackpotNode.getChildByName("spine_jackpot_disappear").active = true;
              jackpotNode.color = new cc.Color(80, 80, 80, 255);
              _iterator14 = _createForOfIteratorHelper(jackpotNode.children);
              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                  node = _step14.value;
                  node.color = new cc.Color(80, 80, 80, 255);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
              _context10.next = 14;
              return _this7.playSpine(jackpotNode.getChildByName("spine_jackpot_disappear"), "animation" + jackpotIdx);

             case 14:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      _convertNodePosToLocalPos: function _convertNodePosToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      },
      _popStartDialuage: function _popStartDialuage() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var spineBg, btnstart;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              _this8._uiStart.active = true;
              spineBg = cc.find("spine_bg", _this8._uiStart);
              spineBg.active = true;
              btnstart = cc.find("btn_start", _this8._uiStart);
              btnstart.getComponent(cc.Button).enabled = false;
              return _context14.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      cc.tween(btnstart).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 1
                      }).start();
                      _context13.next = 3;
                      return _this8.playSpine(spineBg, "animation1");

                     case 3:
                      btnstart.getComponent(cc.Button).enabled = true;
                      _context13.next = 6;
                      return _this8.playSpine(spineBg, "animation1_1", true);

                     case 6:
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        btnstart.stopAllActions();
                        cc.tween(btnstart).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) switch (_context11.prev = _context11.next) {
                             case 0:
                              btnstart.getComponent(cc.Button).enabled = false;
                              _context11.next = 3;
                              return _this8.playSpine(spineBg, "animation1_2");

                             case 3:
                              btnstart.off("click");
                              _this8._uiStart.active = false;
                              success();

                             case 6:
                             case "end":
                              return _context11.stop();
                            }
                          }, _callee11);
                        }))).to(.3, {
                          scale: 1.3
                        }).to(.2, {
                          scale: 0
                        }).start();
                      }
                      Global.btnClickEvent(btnstart, _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            btnstart.stopAllActions();
                            Global.SlotsSoundMgr.playEffect(_this8._soundCfg.click);
                            btnstart.getComponent(cc.Button).enabled = false;
                            cc.tween(btnstart).to(.3, {
                              scale: 1.3
                            }).to(.2, {
                              scale: 0
                            }).start();
                            _context12.next = 6;
                            return _this8.playSpine(spineBg, "animation1_2");

                           case 6:
                            btnstart.off("click");
                            _this8._uiStart.active = false;
                            success();

                           case 9:
                           case "end":
                            return _context12.stop();
                          }
                        }, _callee12);
                      })), _this8);

                     case 8:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x5) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 6:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      _playTransition: function _playTransition() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var spine_transition;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(_this9._soundCfg.transition2);
              _this9._uiQp.active = true;
              spine_transition = cc.find("spine_transition", _this9._uiQp);
              _context15.next = 5;
              return _this9.playSpine(spine_transition, "animation");

             case 5:
              _this9._uiQp.active = false;

             case 6:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      _showResultDialouge: function _showResultDialouge(winCoin) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          var spineBg, btncollect, lblWinCoin;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              _this10._uiResult.active = true;
              spineBg = cc.find("spine_bg", _this10._uiResult);
              spineBg.active = true;
              btncollect = cc.find("btn_collect", _this10._uiResult);
              btncollect.getComponent(cc.Button).enabled = false;
              lblWinCoin = cc.find("lblWinCoin", _this10._uiResult);
              lblWinCoin.active = true;
              lblWinCoin.scale = 1;
              lblWinCoin.getComponent(cc.Label).string = "";
              return _context19.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(_this10._soundCfg.pick_popup);
                      cc.tween(btncollect).to(.3, {
                        scale: 1.3
                      }).to(.2, {
                        scale: 1
                      }).start();
                      _context18.next = 4;
                      return _this10.playSpine(spineBg, "animation2");

                     case 4:
                      _this10.playSpine(spineBg, "animation2_1", true);
                      Global.doRoallNumEff(lblWinCoin, 0, winCoin, 2, function() {
                        btncollect.getComponent(cc.Button).enabled = true;
                        cc.vv.gameData.AddCoin(winCoin);
                      }, null, 0, true);
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        btncollect.stopAllActions();
                        cc.tween(btncollect).delay(cc.vv.gameData.getAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) switch (_context16.prev = _context16.next) {
                             case 0:
                              btncollect.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(_this10._soundCfg.pick_popclose);
                              cc.tween(lblWinCoin).to(.3, {
                                scale: 1.3
                              }).to(.2, {
                                scale: 0
                              }).start();
                              _context16.next = 5;
                              return _this10.playSpine(spineBg, "animation2_2");

                             case 5:
                              btncollect.off("click");
                              _this10._uiResult.active = false;
                              _this10.scheduleOnce(function() {
                                _this10._uiMain.active = false;
                                _this10._slot.active = true;
                              }, 2.2);
                              _context16.next = 10;
                              return _this10._playTransition();

                             case 10:
                              success();

                             case 11:
                             case "end":
                              return _context16.stop();
                            }
                          }, _callee16);
                        }))).to(.3, {
                          scale: 1.3
                        }).to(.2, {
                          scale: 0
                        }).start();
                      }
                      Global.btnClickEvent(btncollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                        return regeneratorRuntime.wrap(function _callee17$(_context17) {
                          while (1) switch (_context17.prev = _context17.next) {
                           case 0:
                            btncollect.stopAllActions();
                            btncollect.getComponent(cc.Button).enabled = false;
                            Global.SlotsSoundMgr.playEffect(_this10._soundCfg.click);
                            Global.SlotsSoundMgr.playEffect(_this10._soundCfg.pick_popclose);
                            cc.tween(btncollect).to(.3, {
                              scale: 1.3
                            }).to(.2, {
                              scale: 0
                            }).start();
                            cc.tween(lblWinCoin).to(.3, {
                              scale: 1.3
                            }).to(.2, {
                              scale: 0
                            }).start();
                            _context17.next = 8;
                            return _this10.playSpine(spineBg, "animation2_2");

                           case 8:
                            btncollect.off("click");
                            _this10._uiResult.active = false;
                            _this10.scheduleOnce(function() {
                              _this10._uiMain.active = false;
                              _this10._slot.active = true;
                            }, 2.2);
                            _context17.next = 13;
                            return _this10._playTransition();

                           case 13:
                            success();

                           case 14:
                           case "end":
                            return _context17.stop();
                          }
                        }, _callee17);
                      })), _this10);

                     case 8:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function(_x6) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 10:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        }))();
      },
      playSpine: function playSpine(node) {
        var animationName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
        var isLoop = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var endCall = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return new Promise(function(success) {
          if (node) {
            node.active = true;
            AppLog.log("\u64ad\u653e\u8282\u70b9[" + node.parent.name + "/" + node.name + "]\u7684spine\u52a8\u4f5c: " + animationName);
            node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
            isLoop ? success() : node.getComponent(sp.Skeleton).setCompleteListener(function() {
              endCall && endCall();
              success();
            });
          } else {
            endCall && endCall();
            success();
          }
        });
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this11 = this;
        return new Promise(function(success) {
          _this11.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LampOfAladdin_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ccfaHqsN9G4rHWjm2aVUdS", "LampOfAladdin_Slots");
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
        _hasLoaded: false
      },
      onLoad: function onLoad() {
        this._super();
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_ENERGYGAME_OperationOVER, this.onEnergyGameOver, this);
      },
      onEnergyGameOver: function onEnergyGameOver() {
        this._bottomScript.ShowBtnsByState("idle");
        SlotsFacade.energyCollect.showEnergyProgress(0);
      },
      start: function start() {
        this._super();
        this._hasLoaded = true;
        this.ReconnectShow();
        this.refreshGoldPen();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, engData, mapGame, freeGame;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!_this._hasLoaded) {
                _context.next = 43;
                break;
              }
              rest = cc.vv.gameData.GetFreeTime();
              rest ? _this.ShowGameview(true) : _this.ShowGameview(false);
              _this._gameInfo = cc.vv.gameData.getDeskInfo();
              if (!(_this._gameInfo.select && _this._gameInfo.select.state)) {
                _context.next = 41;
                break;
              }
              _this._bottomScript.ShowBtnsByState("moveing_1");
              if (!(3 == _this._gameInfo.select.rtype)) {
                _context.next = 15;
                break;
              }
              if (!_this._gameInfo.wheelInfo) {
                _context.next = 12;
                break;
              }
              _context.next = 10;
              return SlotsFacade.gameWheel.enterGame(_this._gameInfo.wheelInfo.cfg, _this._gameInfo.wheelInfo.mults);

             case 10:
              _context.next = 13;
              break;

             case 12:
              AppLog.err("\u8f6e\u76d8\u6570\u636e\u4e0d\u5b58\u5728");

             case 13:
              _context.next = 38;
              break;

             case 15:
              if (!(4 == _this._gameInfo.select.rtype)) {
                _context.next = 22;
                break;
              }
              cc.vv.gameData.GetSlotsScript()._topScript.SetBackLobby(false);
              _context.next = 19;
              return SlotsFacade.pickBonus.enterGame(_this._gameInfo.pool, true);

             case 19:
              _this._topScript.ShowCoin();
              _context.next = 38;
              break;

             case 22:
              if (!(2 == _this._gameInfo.select.rtype)) {
                _context.next = 27;
                break;
              }
              SlotsFacade.map.node.active = true;
              SlotsFacade.map.enterMap(true);
              _context.next = 38;
              break;

             case 27:
              if (!(1 == _this._gameInfo.select.rtype)) {
                _context.next = 37;
                break;
              }
              engData = cc.vv.gameData.getCollectData();
              if (engData) {
                _context.next = 31;
                break;
              }
              return _context.abrupt("return");

             case 31:
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
              mapGame = cc.find("Canvas/safe_node/LMSlots_Subgame777");
              mapGame.active = true;
              mapGame.getComponent("LMSlots_Subgame777").showEnter(engData.bet);
              _context.next = 38;
              break;

             case 37:
              AppLog.warn("\u672a\u77e5\u73a9\u6cd5...");

             case 38:
              _this._bottomScript.ShowBtnsByState("idle");
              _context.next = 42;
              break;

             case 41:
              if (_this._gameInfo.collect && 2 == _this._gameInfo.collect.open) {
                freeGame = cc.find("Canvas/safe_node/node_energy_free_game");
                freeGame.active = true;
                SlotsFacade.energyFreeGame.reconnect();
              }

             case 42:
              cc.vv.gameData.GetFreeTime() && _this.CanDoNextRound();

             case 43:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ReconnectNet: function ReconnectNet() {
        var _gameInfo = cc.vv.gameData.getDeskInfo();
        if (this._stopTime > 0 && !this._gameInfo) this.ReconnectShow(); else if (_gameInfo.select && _gameInfo.select.state) if (3 == _gameInfo.select.rtype) _gameInfo.wheelInfo && SlotsFacade.gameWheel.ReconnectNet(_gameInfo.wheelInfo.cfg, _gameInfo.wheelInfo.mults); else if (4 == _gameInfo.select.rtype) SlotsFacade.pickBonus.ReconnectNet(_gameInfo.pool, true); else if (2 == _gameInfo.select.rtype) SlotsFacade.map.ReconnectNet(true); else if (1 == _gameInfo.select.rtype) {
          var engData = cc.vv.gameData.getCollectData();
          if (!engData) return;
          var mapGame = cc.find("Canvas/safe_node/LMSlots_Subgame777");
          mapGame.getComponent("LMSlots_Subgame777").ReconnectNet(engData.bet);
        }
      },
      RegisterEvent: function RegisterEvent() {
        cc.vv.gameData._EventId.SLOT_REFUSH_COLLECT_WILD_PROGRESS = "EventId.SLOT_REFUSH_COLLECT_WILD_PROGRESS";
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_COLLECT_WILD_PROGRESS, this.OnEventRefreshCollectWildProgress, this);
      },
      OnEventRefreshCollectWildProgress: function OnEventRefreshCollectWildProgress() {
        this.refreshGoldPen();
      },
      refreshGoldPen: function refreshGoldPen() {
        var collectWildData = cc.vv.gameData.getCollectWildData();
        if (!collectWildData) return;
        var targetNode = cc.find("Canvas/safe_node/slots/spine_collect_wild");
        var percent = collectWildData.num / collectWildData.total;
        var animPercentCfg = [ 0, .02, .5, .85 ];
        var animIdx = 0;
        for (var i in animPercentCfg) percent >= animPercentCfg[i] && (animIdx = i);
        if (this._animIdxCollectWild != animIdx) {
          this._animIdxCollectWild = animIdx;
          targetNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + (0 == animIdx ? "" : animIdx), true);
        }
      },
      StartMove: function StartMove() {
        this.ClearAllTopAni();
        this._super();
        cc.vv.gameData.isFreeTime() || Global.SlotsSoundMgr.playNormalBgm();
        SlotsFacade.energyFreeGame.onStartMove();
      },
      ClearAllTopAni: function ClearAllTopAni() {
        var reels = this._reels;
        var _iterator = _createForOfIteratorHelper(reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            for (var i = 0; i < this._row; i++) {
              var symbol = reel.GetSymbolByRow(i);
              symbol && symbol.ShowNormal();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.ClearAllTopShow();
      },
      GetSymboleExtraData: function GetSymboleExtraData(idx) {
        var wildMults = this._gameInfo.wildMults;
        for (var key in wildMults) {
          var tIdx = parseInt(key.substr(4, key.length - 4)) - 1;
          if (idx == tIdx) return {
            t: "mult",
            num: wildMults[key]
          };
        }
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = this.GetSymboleExtraData(i);
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var j = 0; j < this._reels.length; j++) {
          var item = this._reels[j];
          var reelRes = reelResults[j];
          item.SetResult(reelRes);
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super(colIdx);
        var reel = this._reels[colIdx];
        for (var i = 0; i < this._row; i++) {
          var symbol = reel.GetSymbolByRow(i);
          symbol.GetShowId() != cc.vv.gameData.getGameCfg().wildId && symbol.GetShowId() != cc.vv.gameData.getGameCfg().scatterId || symbol.playWildCollectAction();
        }
      },
      ShowSymbolTopAni: function ShowSymbolTopAni(nRow, nCol) {
        var parNode = cc.find("top_ani", this.node);
        if (parNode) {
          var cfg = cc.vv.gameData.getGameCfg();
          var symScp = cfg.scripts.Symbols;
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", nRow, nCol), parNode);
          showNode && showNode.removeFromParent(true);
          var reel = this._reels[nCol];
          var symbol = reel.GetSymbolByRow(nRow);
          if (symbol) {
            var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
            var newNode = cc.instantiate(symbol.node);
            newNode.parent = parNode;
            newNode.name = cc.js.formatStr("top_symbol_%s_%s", nRow, nCol);
            newNode.position = parNode.convertToNodeSpaceAR(wordPos);
            return newNode.getComponent(symScp);
          }
        }
      },
      ShowScatterWinTrace: function ShowScatterWinTrace() {
        var allWinIdx = [];
        if (this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo) {
          var freeInfo = this._gameInfo.freeResult.freeInfo;
          if (freeInfo.idxs) for (var i = 0; i < freeInfo.idxs.length; i++) {
            var val = freeInfo.idxs[i];
            allWinIdx[val] = 1;
          }
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          symbol && symbol.playWinAnimation();
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _collectData, collectData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context2.next = 3;
              return SlotsFacade.energyFreeGame.onEndMove();

             case 3:
              _this2.ShowWinTrace();
              _context2.next = 6;
              return _this2.ShowWinCoin();

             case 6:
              if (!cc.vv.gameData.isFinishFreeTime()) {
                _context2.next = 17;
                break;
              }
              if (!SlotsFacade.energyFreeGame.isFinish()) {
                _context2.next = 12;
                break;
              }
              _context2.next = 10;
              return SlotsFacade.energyFreeGame.exitFreeGame();

             case 10:
              _context2.next = 15;
              break;

             case 12:
              _context2.next = 14;
              return SlotsFacade.gameWheel.exitFreeGame(cc.vv.gameData.GetGameTotalFreeWin());

             case 14:
              _this2.ShowGameview(false);

             case 15:
              _context2.next = 17;
              return new Promise(function(success) {
                _this2.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                  success();
                });
              });

             case 17:
              if (!(_this2.isNeedCollecting() && !cc.vv.gameData.isFreeTime())) {
                _context2.next = 22;
                break;
              }
              _this2.CollectEnergy();
              _collectData = cc.vv.gameData.getCollectData();
              _context2.next = 22;
              return _this2.awaitTime(_collectData.num >= _collectData.total ? 2.2 : 0);

             case 22:
              if (!(_this2._gameInfo.select && _this2._gameInfo.select.state)) {
                _context2.next = 42;
                break;
              }
              if (!(3 == _this2._gameInfo.select.rtype)) {
                _context2.next = 36;
                break;
              }
              _this2.ShowScatterWinTrace();
              Global.SlotsSoundMgr.playEffect("magic_move");
              _context2.next = 28;
              return _this2.awaitTime(2);

             case 28:
              if (!_this2._gameInfo.wheelInfo) {
                _context2.next = 33;
                break;
              }
              _context2.next = 31;
              return SlotsFacade.gameWheel.enterGame(_this2._gameInfo.wheelInfo.cfg, _this2._gameInfo.wheelInfo.mults);

             case 31:
              _context2.next = 34;
              break;

             case 33:
              AppLog.err("\u8f6e\u76d8\u6570\u636e\u4e0d\u5b58\u5728");

             case 34:
              _context2.next = 42;
              break;

             case 36:
              if (!(4 == _this2._gameInfo.select.rtype)) {
                _context2.next = 41;
                break;
              }
              _context2.next = 39;
              return SlotsFacade.pickBonus.enterGame(_this2._gameInfo.pool);

             case 39:
              _context2.next = 42;
              break;

             case 41:
              AppLog.warn("\u672a\u77e5\u73a9\u6cd5...");

             case 42:
              collectData = cc.vv.gameData.getCollectData();
              if (collectData && collectData.open > 0 && cc.vv.gameData.IsSelectSubGame()) {
                SlotsFacade.map.node.active = true;
                SlotsFacade.map.enterMap(true);
              } else _this2.CanDoNextRound();

             case 44:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      ShowWinCoin: function ShowWinCoin() {
        var _this3 = this;
        return new Promise(function(success) {
          var nWin = cc.vv.gameData.GetGameWin();
          if (nWin > 0) {
            var updateRightnow = true;
            var nTotal = nWin;
            if (cc.vv.gameData.isFreeTime()) {
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              updateRightnow = false;
            }
            _this3.ShowBottomWin(nWin, nTotal, updateRightnow, function() {
              success();
            });
          } else success();
        });
      },
      isNeedCollecting: function isNeedCollecting() {
        var cards = this._gameInfo.resultCards;
        if (cc.vv.gameData.isOpenCollectProgress()) {
          var collectId = cc.vv.gameData.getGameCfg().collectId;
          var _iterator2 = _createForOfIteratorHelper(cards), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var symboleId = _step2.value;
              if (symboleId == collectId) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          var wildId = cc.vv.gameData.getGameCfg().wildId;
          var _iterator3 = _createForOfIteratorHelper(cards), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _symboleId = _step3.value;
              if (_symboleId == wildId) return true;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return false;
      },
      CollectEnergy: function CollectEnergy() {
        if (!cc.vv.gameData.isOpenCollectProgress()) return;
        var count = 0;
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 3; j++) {
            var bPlay = sys[j].PlayCollectAction();
            bPlay && (count += 1);
          }
        }
        count > 0 && Global.SlotsSoundMgr.playEffect(this._soundCfg.symbol_fly);
        this.scheduleOnce(function() {
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
        }, 1);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i = 0; _i < this._gameInfo.scatterZJLuXian.indexs.length; _i++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i];
          allWinIdx[val] = 1;
        }
        var midList = [];
        SlotsFacade.energyFreeGame.isEnable() && (midList = [ 3, 8, 13 ]);
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol && !midList.includes(Number(key))) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        SlotsFacade.energyCollect.node.active = !bFree;
      },
      awaitTime: function awaitTime(time) {
        var _this4 = this;
        return new Promise(function(success) {
          _this4.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LampOfAladdin_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96949/HZMhK9LWHy/V4qAzz", "LampOfAladdin_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
        this.SetMult();
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        this.node.zIndex = 10 === idx ? 50 : 50 - idx;
      },
      SetMult: function SetMult(mult) {
        var txt = cc.find("coin_num", this.node);
        if (mult) {
          txt.active = true;
          txt.getComponent(cc.Label).string = mult + "X";
          txt.scaleY = 0;
          cc.tween(txt).to(.3, {
            scaleY: 1.2
          }).to(.3, {
            scaleY: 1
          }).call(function() {
            AppLog.warn("SetMult: ", txt.scaleY);
          }).start();
        } else {
          txt.cleanup();
          txt.active = false;
        }
      },
      setAnimationToTop: function setAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
            cloneNode || (cloneNode = cc.instantiate(this.node));
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            cloneNode.parent = this._topAniNode;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx);
            cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            this.node.active = false;
            this._data && "mult" == this._data.t && cloneNode.getComponent("LampOfAladdin_Symbol").SetMult(this._data.num);
            return cloneNode;
          }
          var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
          if (showNode) {
            showNode.removeFromParent();
            showNode.destroy();
          }
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      },
      PlayCollectAction: function PlayCollectAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._id != cfg.collectId) return;
        var flyNode = cc.instantiate(this.node);
        var parentNode = cc.find("Canvas/safe_node");
        flyNode.parent = parentNode;
        var beiginPos = parentNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        flyNode.position = beiginPos;
        flyNode.active = true;
        cc.find(cfg.symbol[this._id].node, flyNode).active = false;
        var wnode = cc.find(cfg.symbol[this._id].win_node, flyNode);
        wnode.active = true;
        wnode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        wnode.getComponent(sp.Skeleton).setCompleteListener(function() {
          flyNode.removeFromParent(true);
        });
        var targetNode = cc.find("Canvas/safe_node/slots/node_energy/spr_collect_m1");
        var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        flyNode.runAction(cc.bezierTo(.4, [ cc.v2(beiginPos.x, beiginPos.y), cc.v2(tarPos.x, beiginPos.y), cc.v2(tarPos.x, tarPos.y) ]));
        return true;
      },
      playWildCollectAction: function playWildCollectAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._id != cfg.wildId) return;
        if (!cc.vv.gameData.isOpenCollectWild()) return;
        this._data && "mult" == this._data.t && this.SetMult(this._data.num);
        var flyNode = cc.instantiate(this.node);
        var symScript = flyNode.getComponent("LampOfAladdin_Symbol");
        var parentNode = cc.find("Canvas/safe_node");
        flyNode.parent = parentNode;
        var beiginPos = parentNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        flyNode.position = beiginPos;
        var targetNode = cc.find("Canvas/safe_node/slots/spine_collect_wild");
        var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(-30, 40)));
        symScript._showNode.active = false;
        Global.SlotsSoundMgr.playEffect("wild_fly");
        cc.tween(flyNode).delay(.5).call(function() {
          symScript._showNode = cc.find("w100", flyNode);
          symScript._showNode.active = true;
          symScript._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        }).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(tarPos.x, beiginPos.y), cc.v2(tarPos.x, tarPos.y)).call(function() {
          symScript._showNode.active = false;
          symScript._showNode = cc.find("w101", flyNode);
          symScript._showNode.active = true;
          symScript._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        }).delay(.2).call(function() {
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_COLLECT_WILD_PROGRESS);
        }).removeSelf().start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "LampOfAladdin_Cfg", "LampOfAladdin_CoinBoom", "LampOfAladdin_Energy", "LampOfAladdin_Energy_FreeGame", "LampOfAladdin_GameData", "LampOfAladdin_GameWheel", "LampOfAladdin_Logic", "LampOfAladdin_Map", "LampOfAladdin_PickBonus", "LampOfAladdin_Slots", "LampOfAladdin_Symbol" ]);