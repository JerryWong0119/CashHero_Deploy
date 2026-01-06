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
  LuckyCat_Asset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "317023viYhIwLlGBo7ob2NM", "LuckyCat_Asset");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Asset_Base"),
      properties: {},
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Asset_Base: void 0
  } ],
  LuckyCat_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70d68oEGjhDL5Kc3cSqgMTy", "LuckyCat_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._bStartRound = false;
        this.ShowBtnsByState("idle");
        var restFree = cc.vv.gameData.GetFreeTime();
        if (restFree) {
          cc.vv.gameData.SetFreeTime(restFree - 1);
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this.ShowFreeModel(true, total - rest, total);
          this.SendSpinReq();
          return;
        }
        if (cc.vv.gameData.isWaitOperate()) return;
        var autoTime = cc.vv.gameData.GetAutoModelTime();
        if (autoTime) {
          var cfg = cc.vv.gameData.getGameCfg();
          this.scheduleOnce(this.DoAutoSpine.bind(this), cfg.autoModelDelay);
          return;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  LuckyCat_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80f0e5Qz/dEhL/K4o4DAtAj", "LuckyCat_ButtonSafe");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        safeTime: {
          default: .5,
          tooltip: "\u6309\u94ae\u4fdd\u62a4\u65f6\u95f4\uff0c\u6307\u5b9a\u95f4\u9694\u5185\u53ea\u80fd\u70b9\u51fb\u4e00\u6b21."
        }
      },
      onLoad: function onLoad() {
        var button = this.getComponent(cc.Button);
        if (!button) return;
        this.clickEvents = button.clickEvents;
        Global.btnClickEvent(this.node, function(buttton) {
          buttton.interactable = false;
          var slotsSrc = cc.vv.gameData.GetSlotsScript();
          slotsSrc && slotsSrc.scheduleOnce(function() {
            buttton.interactable = true;
          }, this.safeTime);
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f675bmiT7tDfI+/hbZ/kXjg", "LuckyCat_Cfg");
    "use strict";
    var _symbol, _soundCfg;
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
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 5, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 6, {
        node: "s2",
        win_node: "w2",
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
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 10, {
        node: "s6",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s7",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "wildchange",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LuckyCat_Bottom",
        Slots: "LuckyCat_Slots",
        Reels: "LuckyCat_Reel",
        Symbols: "LuckyCat_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 100,
        height: 97
      },
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      autoModelDelay: .5,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      normalBgm: "base_bgm",
      bounce: true,
      bounceActionDur: .3,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2, 3, 4, 5 ],
        mini: 6,
        counts: [ 3, 3, 3, 3, 3 ],
        antiNode: "node_anti",
        path: "games/LuckyCat/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2500
      } ],
      soundCfg: (_soundCfg = {
        base_bgm: "base_bgm",
        bell: "bell",
        common_click: "common_click",
        full: "full",
        jp_win_grand: "jp_win_grand",
        jp_win_major: "jp_win_major",
        jp_win_minor: "jp_win_minor",
        lock: "lock",
        popup_out: "popup_out",
        reel_notify: "reel_notify",
        reel_stop: "reel_stop",
        symbol_fly: "symbol_fly",
        symbol_scatter: "symbol_scatter",
        unlock: "unlock",
        wild_reel: "wild_reel",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        win3: "win3",
        win3end: "win3end",
        win4: "win4",
        win4end: "win4end",
        free_bgm: "free_bgm",
        coin_collect: "coin_collect",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_start_show: "free_dialog_start_show",
        free_dialog_pick: "free_dialog_pick",
        free_dialog_pick_show: "free_dialog_pick_show",
        fg_start: "fg_start",
        transition_free: "transition_free",
        free_dialog_click: "free_dialog_click",
        free_dialog_more_show: "free_dialog_more_show",
        bonus_collect: "bonus_collect",
        bonus_up: "bonus_up"
      }, _defineProperty(_soundCfg, "coin_collect", "coin_collect"), _defineProperty(_soundCfg, "map_bgm", "map_bgm"), 
      _defineProperty(_soundCfg, "map_close", "map_close"), _defineProperty(_soundCfg, "map_move", "map_move"), 
      _defineProperty(_soundCfg, "map_open", "map_open"), _defineProperty(_soundCfg, "map_node", "map_node"), 
      _defineProperty(_soundCfg, "click", "click"), _defineProperty(_soundCfg, "slot_popup", "slot_popup"), 
      _defineProperty(_soundCfg, "slot_spin", "slot_spin"), _defineProperty(_soundCfg, "slot_win", "slot_win"), 
      _soundCfg),
      helpItems: [ "games/LuckyCat/prefab/LuckyCat_Help_item1", "games/LuckyCat/prefab/LuckyCat_Help_item2", "games/LuckyCat/prefab/LuckyCat_Help_item3", "games/LuckyCat/prefab/LuckyCat_Help_item4", "games/LuckyCat/prefab/LuckyCat_Help_item5" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LuckyCat_CoinBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51526sENyFOobDg8oTw8SE/", "LuckyCat_CoinBoom");
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
  LuckyCat_Energy_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "276c41Ck5tIM57JFiJTBmKt", "LuckyCat_Energy_FreeGame");
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
        bgs: [ cc.SpriteFrame ],
        freegamespine: cc.Node,
        _midState: "animation3"
      },
      onLoad: function onLoad() {
        this._mid_ani = cc.find("Canvas/safe_node/slots/mid_ani");
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_STOP_MOVE, this.playStop, this);
        var btnstart = cc.find("node/energyfreegame_start/middimage/btn_start", this.node);
        Global.btnClickEvent(btnstart, this.startEnergyFreeGame, this);
        var btncollect = cc.find("node/energyfreegame_end/middimage/btn_collect", this.node);
        Global.btnClickEvent(btncollect, this.collectEnergyFreeGame, this);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      setTigerPos: function setTigerPos(isshow) {
        var node_tiger = cc.find("safe_node/tiger", this.node);
        var posy = isshow ? -155 : -200;
        node_tiger.setPosition(0, posy);
      },
      showEnergyUI: function showEnergyUI(isshow) {
        var node_energy = cc.find("safe_node/node_energy", this.node);
        node_energy.active = isshow;
        this.setTigerPos(isshow);
      },
      showEngnerFreeGame: function showEngnerFreeGame(bShow, etype) {
        this.showFreeTimes(bShow);
        this.showGameBg(bShow);
      },
      showGameBg: function showGameBg(bShow) {
        var fileName = "theme115_base_bg";
        bShow && (fileName = "theme115_free_bg");
        var gameDir = cc.vv.gameData.getGameCfg().gameDir;
        cc.loader.loadRes(gameDir + "img/" + fileName, cc.SpriteFrame, function(err, data) {
          if (!err) {
            var bg = cc.find("Canvas/safe_node/bg");
            bg.getComponent(cc.Sprite).spriteFrame = data;
          }
        });
      },
      onEventShowEngFreeGame: function onEventShowEngFreeGame(data) {
        var val = data.detail;
        if (void 0 == val.isshow) return;
        this.showEngnerFreeGame(val.isshow, val.etype);
      },
      onEventStartSpin: function onEventStartSpin() {
        2 == this.eType && this.showEnergyUI(false);
      },
      energyFreeGameStart: function energyFreeGameStart(engData) {
        this.showEnergyFreeUI(true);
      },
      spinEnd: function spinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                var gameinfo = cc.vv.gameData.getGameInfo();
                if (gameinfo.booms) {
                  success();
                  return;
                }
                if (gameinfo.allFreeCnt > 0) {
                  if (gameinfo.freeCnt >= 0) {
                    _this.changeWildMult(gameinfo.collect.mult);
                    _this.lineStop();
                  }
                  _this.scheduleOnce(function() {
                    success();
                  }, 1.5);
                } else success();
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playLineOver: function playLineOver() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                _this2._nextpromise = success;
                AppLog.log("###\u80fd\u91cf\u6e38\u620f\u64ad\u653e\u7ed3\u675f");
                var gameinfo = cc.vv.gameData.getGameInfo();
                if (gameinfo.booms || 0 == gameinfo.allFreeCnt) {
                  success();
                  return;
                }
                AppLog.log("###\u514d\u8d39\u6b21\u6570 " + gameinfo.freeCnt);
                if (gameinfo.allFreeCnt > 0) if (gameinfo.freeCnt > 0) success(); else {
                  cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                  _this2.showEnergyFreeUI(false);
                }
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playMidAniClose: function playMidAniClose() {
        if (this._mid_ani.active) {
          Global.playHSEffect("reel_hide");
          this.playMidAnimation("animation3");
        }
      },
      changeWildMult: function changeWildMult(mult) {
        for (var i = 1; i < 4; i++) {
          var midspine = cc.find("lbl_mul" + i, this._mid_ani);
          0 == mult ? midspine.active = false : cc.vv.gameData.playSpine(midspine, "animation" + mult, true);
        }
      },
      playStop: function playStop() {},
      lineStop: function lineStop() {
        var gameinfo = cc.vv.gameData.getGameInfo();
        if (gameinfo.booms) return;
        AppLog.log("###\u514d\u8d39\u6b21\u6570 " + gameinfo.freeCnt);
        if (gameinfo.freeCnt >= 0) {
          Global.playHSEffect("reel_appear");
          this.playMidAnimation("animation2");
        }
      },
      showEnergyFreeUI: function showEnergyFreeUI(showstart) {
        cc.find("node", this.node).active = true;
        cc.find("node/energyfreegame_start", this.node).active = showstart;
        cc.find("node/energyfreegame_end", this.node).active = !showstart;
        if (showstart) {
          Global.playHSEffect("bonus_dialog_start_show");
          var engData = cc.vv.gameData.getCollectData();
          var freetime = cc.find("node/energyfreegame_start/middimage/up/freetime", this.node);
          freetime.getComponent(cc.Label).string = engData.free;
          this.openStartUIAni();
        } else {
          Global.playHSEffect("bonus_dialog_collect_show");
          cc.vv.gameData.setWaitOperate(true);
          var gameinfo = cc.vv.gameData.getGameInfo();
          var reward = cc.find("node/energyfreegame_end/middimage/collectbg/rewardnum", this.node);
          Global.doRoallNumEff(reward, 0, gameinfo.freeWinCoin, 1.5, null, null, 0, true);
          this.openCollectUIAni();
        }
      },
      openStartUIAni: function openStartUIAni() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var startnode, topnode, mainobj, toptext, btnstart, upnode, downnode;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              startnode = cc.find("node/energyfreegame_start", _this3.node);
              topnode = cc.find("topimage", startnode);
              mainobj = cc.find("middimage", startnode);
              toptext = cc.find("toptext", mainobj);
              btnstart = cc.find("btn_start", mainobj);
              upnode = cc.find("up", mainobj);
              downnode = cc.find("down", mainobj);
              mainobj.position = cc.v2(0, 910);
              toptext.position = cc.v2(0, 100);
              toptext.scale = 0;
              upnode.scale = 0;
              downnode.scale = 0;
              btnstart.scale = 0;
              topnode.position = cc.v2(0, 800);
              cc.tween(topnode).to(.3, {
                position: cc.v2(0, 300)
              }, {
                easing: "backIn"
              }).call(function() {
                cc.tween(mainobj).to(.3, {
                  position: cc.v2(0, -38)
                }).call(function() {
                  cc.tween(toptext).to(.3, {
                    position: cc.v2(0, 178),
                    scale: .5
                  }).start();
                  cc.tween(upnode).to(.3, {
                    scale: .5
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    cc.tween(downnode).to(.3, {
                      scale: .5
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      cc.tween(btnstart).to(.3, {
                        scale: 1.5
                      }, {
                        easing: "backIn"
                      }).call(function() {}).start();
                    }).start();
                  }).start();
                }).start();
              }).start();
              _this3.setMultShow(mainobj);
              _context3.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              cc.vv.gameData.checkAutoPlay(btnstart, function() {
                Global.playHSEffect(_this3._soundCfg.free_dialog_click);
                _this3.sendEnergyFreeGameStart();
                cc.find("node", _this3.node).active = false;
                Global.playHSEffect("transition_free");
                cc.vv.gameData.playSpine(_this3.freegamespine, "animation", false, function() {
                  _this3.reconnectEnterFreeGame();
                });
              });

             case 19:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      setMultShow: function setMultShow(middnode) {
        var engData = cc.vv.gameData.getCollectData();
        var mults = this.getMultArr(engData.idx);
        for (var i = 1; i < 4; i++) {
          cc.find("down/bg1/ratiotext" + i, middnode).getComponent(cc.Label).string = mults[0] + "X";
          cc.find("down/bg2/ratiotext" + i, middnode).getComponent(cc.Label).string = mults[1] + "X";
        }
      },
      getMultArr: function getMultArr(idx) {
        switch (idx) {
         case 2:
          return [ 2, 5 ];

         case 7:
          return [ 2, 10 ];

         case 13:
          return [ 3, 25 ];

         case 20:
          return [ 5, 100 ];

         default:
          return [ 2, 5 ];
        }
      },
      openCollectUIAni: function openCollectUIAni() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var startnode, topnode, mainobj, toptext, btnstart, upnode, downnode;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              startnode = cc.find("node/energyfreegame_end", _this4.node);
              topnode = cc.find("topimage", startnode);
              mainobj = cc.find("middimage", startnode);
              toptext = cc.find("toptext", mainobj);
              btnstart = cc.find("btn_collect", mainobj);
              upnode = cc.find("youwin", mainobj);
              downnode = cc.find("collectbg", mainobj);
              mainobj.position = cc.v2(0, 910);
              toptext.position = cc.v2(0, 0);
              toptext.scale = 0;
              upnode.scale = 0;
              downnode.scale = 0;
              btnstart.scale = 0;
              topnode.position = cc.v2(0, 800);
              cc.tween(topnode).to(.3, {
                position: cc.v2(0, 300)
              }, {
                easing: "backOut"
              }).call(function() {
                cc.tween(mainobj).to(.3, {
                  position: cc.v2(0, -68)
                }).call(function() {
                  cc.tween(toptext).to(.3, {
                    position: cc.v2(0, 106),
                    scale: .5
                  }).start();
                  cc.tween(upnode).to(.3, {
                    scale: .5
                  }, {
                    easing: "backOut"
                  }).call(function() {
                    cc.tween(downnode).to(.3, {
                      scale: .5
                    }, {
                      easing: "backOut"
                    }).call(function() {
                      cc.tween(btnstart).to(.3, {
                        scale: 1.5
                      }, {
                        easing: "backOut"
                      }).call(function() {}).start();
                    }).start();
                  }).start();
                }).start();
              }).start();
              _context4.next = 17;
              return cc.vv.gameData.awaitTime(2);

             case 17:
              cc.vv.gameData.checkAutoPlay(btnstart, function() {
                Global.playHSEffect(_this4._soundCfg.free_dialog_click);
                Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_ENERGYGAME_OperationOVER, {
                  isshow: false,
                  etype: 0
                });
                _this4.node.active = false;
                var self = _this4;
                Global.SlotsSoundMgr.stopBgm();
                Global.playHSEffect("transition_free");
                cc.vv.gameData.playSpine(_this4.freegamespine, "animation", false, function() {
                  self.changeGameBackimage(false);
                  self.changeEnergyFreeGameState(false);
                  self.showFreeTimes(false);
                  cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
                  cc.vv.gameData.GetTopScript().StopMove();
                  cc.vv.gameData.setWaitOperate(false);
                  _this4._nextpromise && _this4._nextpromise();
                });
              });

             case 18:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      startEnergyFreeGame: function startEnergyFreeGame() {
        var _this5 = this;
        var startnode = cc.find("node/energyfreegame_end", this.node);
        var mainobj = cc.find("middimage", startnode);
        var btnstart = cc.find("btn_collect", mainobj);
        btnstart.stopAllActions();
        Global.playHSEffect(this._soundCfg.free_dialog_click);
        this.sendEnergyFreeGameStart();
        cc.find("node", this.node).active = false;
        Global.playHSEffect("transition_free");
        cc.vv.gameData.playSpine(this.freegamespine, "animation", false, function() {
          _this5.reconnectEnterFreeGame();
        });
      },
      reconnectEnterFreeGame: function reconnectEnterFreeGame() {
        this.changeGameBackimage(true);
        this.changeEnergyFreeGameState(true);
        this.showFreeTimes(true);
        this.sendSpin();
        Global.SlotsSoundMgr.playBgm("free_bgm");
      },
      sendEnergyFreeGameStart: function sendEnergyFreeGameStart() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = 2;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      handSpine: function handSpine() {
        this.scheduleOnce(function() {
          cc.find("Canvas/safe_node/slots").getComponent("LuckyCat_Slots").CanDoNextRound();
        }, 1);
      },
      sendSpin: function sendSpin() {
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      collectEnergyFreeGame: function collectEnergyFreeGame() {
        var _this6 = this;
        var startnode = cc.find("node/energyfreegame_end", this.node);
        var mainobj = cc.find("middimage", startnode);
        var btnstart = cc.find("btn_collect", mainobj);
        btnstart.stopAllActions();
        Global.playHSEffect(this._soundCfg.free_dialog_click);
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_ENERGYGAME_OperationOVER, {
          isshow: false,
          etype: 0
        });
        this.node.active = false;
        var self = this;
        Global.SlotsSoundMgr.stopBgm();
        Global.playHSEffect("transition_free");
        cc.vv.gameData.playSpine(this.freegamespine, "animation", false, function() {
          self.changeGameBackimage(false);
          self.changeEnergyFreeGameState(false);
          self.showFreeTimes(false);
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
          cc.vv.gameData.GetTopScript().StopMove();
          cc.vv.gameData.setWaitOperate(false);
          _this6._nextpromise && _this6._nextpromise();
        });
      },
      changeGameBackimage: function changeGameBackimage(isfree) {
        var bg = cc.find("Canvas/safe_node/bg").getComponent(cc.Sprite);
        bg.spriteFrame = isfree ? this.bgs[1] : this.bgs[0];
      },
      changeEnergyFreeGameState: function changeEnergyFreeGameState(isenergy) {
        cc.find("Canvas/safe_node/slots/mid_ani").active = isenergy;
        cc.find("Canvas/safe_node/node_energy/energyfreemask").active = isenergy;
        cc.find("Canvas/safe_node/node_energy/spr_left").active = !isenergy;
      },
      playMidAnimation: function playMidAnimation(aniname) {
        var _this7 = this;
        if (this._midState == aniname) return;
        var isshow = "animation2" == aniname;
        this.controlMultShow(isshow);
        this._midState = aniname;
        var midspine = cc.find("node_zu", this._mid_ani);
        cc.vv.gameData.playSpine(midspine, aniname, false, function() {
          _this7._midState = "";
        });
      },
      controlMultShow: function controlMultShow(isshow) {
        for (var i = 1; i < 4; i++) cc.find("lbl_mul" + i, this._mid_ani).active = isshow;
      },
      showFreeTimes: function showFreeTimes(bshow) {
        if (bshow) {
          var collect = cc.vv.gameData.getCollectData();
          if (collect) {
            var freetime = cc.vv.gameData.GetFreeTime();
            cc.vv.gameData.GetBottomScript().ShowFreeModel(true, freetime + 1, collect.free);
          }
        } else cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
      },
      onEnergyGameOver: function onEnergyGameOver() {}
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_Energy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1903c2zslVMA5mtoKZKGDAO", "LuckyCat_Energy");
    "use strict";
    var UNLOCKVAL = 1e4;
    cc.Class({
      extends: cc.Component,
      properties: {
        _playUnlockState: 0
      },
      onLoad: function onLoad() {
        var btn_lock = cc.find("btn_lock", this.node);
        Global.btnClickEvent(btn_lock, this.onClicklock, this);
        var btn_juanzhou = cc.find("btn_juanzhou", this.node);
        Global.btnClickEvent(btn_juanzhou, this.onClickJuanzhou, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventChangeBetIdx, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY, this.onEventRefushEnergy, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_GAME_START, this.onRecvStart, this);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      start: function start() {
        this.initShow();
      },
      initShow: function initShow() {
        var collectData = cc.vv.gameData.getCollectData();
        if (!collectData) return;
        this.UNLOCKVAL = collectData.min;
        var betIdx = cc.vv.gameData.GetBetIdx();
        var btn_lock = cc.find("btn_lock", this.node);
        var ani_node = btn_lock.getChildByName("node_spine");
        this.updateCoinProgress(collectData);
        if (betIdx >= this.UNLOCKVAL) {
          if (1 != this._playUnlockState) {
            this._playUnlockState = 1;
            btn_lock.active = true;
            Global.playHSEffect("unlock");
            cc.vv.gameData.playSpine(ani_node, "animation2", false, function() {
              btn_lock.active = false;
            });
          }
        } else if (2 != this._playUnlockState) {
          this._playUnlockState = 2;
          btn_lock.active = true;
          Global.playHSEffect("lock");
          cc.vv.gameData.playSpine(ani_node, "animation1", false, function() {});
        }
        this.updateEnergyGame(collectData, 1.2, true);
        this.updateNextAimIcon(collectData);
      },
      onClicklock: function onClicklock() {
        var _this = this;
        if (cc.vv.gameData.isReelMove()) return;
        if (1 == this._playUnlockState) return;
        cc.vv.gameData.GetBottomScript().SetBetIdx(this.UNLOCKVAL);
        var btn_lock = cc.find("btn_lock", this.node);
        var ani_node = btn_lock.getChildByName("node_spine");
        cc.vv.gameData.playSpine(ani_node, "animation2", false, function() {
          btn_lock.active = false;
          _this._playUnlockAni = false;
        });
      },
      onClickJuanzhou: function onClickJuanzhou() {
        if (cc.vv.gameData.isReelMove()) return;
        Global.playHSEffect("bonus_dialog_click");
        var node = cc.find("Canvas/safe_node/map_game");
        node.active = true;
        node.getComponent("LuckyCat_Map").enterMap(false);
      },
      onEventChangeBetIdx: function onEventChangeBetIdx() {
        this.initShow();
      },
      updateCoinProgress: function updateCoinProgress(collectData) {
        if (collectData) {
          this._collectcoin = collectData.num;
          var per = collectData.num / collectData.total;
          this.showEnergyProgress(per);
          if (per > 0) {
            var pro_spin = cc.find("masknode/coin_progress/bar/spin_pro", this.node);
            this._playNodeSpine(pro_spin, "animation", true);
          }
        }
      },
      showEnergyProgress: function showEnergyProgress(per) {
        var pro = cc.find("masknode/coin_progress", this.node);
        pro.getComponent(cc.ProgressBar).progress = per;
        this.playProgressChangeSp(pro, per);
      },
      onEventRefushEnergy: function onEventRefushEnergy() {
        AppLog.log("\u5237\u65b0\u80fd\u91cf");
        var collectData = cc.vv.gameData.getCollectData();
        if (this._collectcoin == collectData.num) return;
        var coin_collect = cc.find("spr_left/spin_collect", this.node);
        this._playNodeSpine(coin_collect, "animation", false);
        this.updateCoinProgress(collectData);
      },
      IsEnterEnergyGame: function IsEnterEnergyGame() {
        var collectData = cc.vv.gameData.getCollectData();
        this.updateEnergyGame(collectData, 2, false);
      },
      updateNextAimIcon: function updateNextAimIcon(collectData) {
        var bigGate = {
          2: "theme160_collect_house1",
          7: "theme160_collect_house2",
          13: "theme160_collect_house3",
          20: "theme160_collect_house4"
        };
        var curMapIdx = collectData.idx;
        var fileName = bigGate[curMapIdx + 1];
        var spr_next = cc.find("spr_yb", this.node);
        fileName ? cc.loader.loadRes("games/LuckyCat/images/plist/base", cc.SpriteAtlas, function(err, data) {
          spr_next.getComponent(cc.Sprite).spriteFrame = data.getSpriteFrame(fileName);
        }) : cc.loader.loadRes("games/LuckyCat/images/plist/map", cc.SpriteAtlas, function(err, data) {
          spr_next.getComponent(cc.Sprite).spriteFrame = data.getSpriteFrame("theme160_map_sushi_light");
        });
      },
      updateEnergyGame: function updateEnergyGame(collectData, delay, isinit) {
        var selectdata = cc.vv.gameData.getSelectData();
        if (selectdata && selectdata.state && collectData.open > 0) {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
          this.scheduleOnce(function() {
            var node = cc.find("Canvas/safe_node/map_game");
            node.active = true;
            node.getComponent("LuckyCat_Map").enterMap(true);
          }, delay);
        } else collectData && 2 == collectData.open && isinit && cc.find("Canvas/safe_node/node_energy_free_game").getComponent("LuckyCat_Energy_FreeGame").reconnectEnterFreeGame();
      },
      onEnergyGameOver: function onEnergyGameOver() {
        this.showEnergyProgress(0);
        cc.vv.gameData.setCollectDataNum(0);
        var collectdata = cc.vv.gameData.getCollectData();
        collectdata && this.updateNextAimIcon(collectdata);
      },
      playProgressChangeSp: function playProgressChangeSp(pro, per) {
        if (per >= 1) {
          Global.playHSEffect("full");
          var fullnode = cc.find("progressfull", pro);
          cc.vv.gameData.playSpine(fullnode, "animation", false, function() {
            fullnode.active = false;
          });
        } else {
          Global.playHSEffect("symbol_fly");
          var jieshounode = cc.find("bar/jieshou", pro);
          var pronode = cc.find("bar/progress", pro);
          cc.vv.gameData.playSpine(jieshounode, "animation", false);
          cc.vv.gameData.playSpine(pronode, "animation", false);
        }
      },
      onRecvStart: function onRecvStart() {
        this._newRound = true;
      },
      _playNodeSpine: function _playNodeSpine(node, aniName, loop) {
        var ske = sp.Skeleton;
        if (node) {
          node.active = true;
          var _sp = node.getComponent(ske);
          _sp.setAnimation(0, aniName, loop);
          !loop;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd2b2WI3vFOs7h3yCQ6pBPO", "LuckyCat_FreeGame");
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
        _bgs: null,
        freegamespine: cc.Node
      },
      init: function init(bgs) {
        this._bgs = bgs;
        this._upCount = 0;
        this._freeGameNode = cc.find("safe_node/free_game", this.node);
        this._freeBgNode = cc.find("safe_node/Normal/free_bg", this.node);
        this._freeBgNode && (this._freeBgNode.active = false);
        this._freeGameNode && (this._freeGameNode.active = false);
        this._freeGameOverTips = cc.find("safe_node/free_game_over", this.node);
        this._freeGameOverTips && (this._freeGameOverTips.active = false);
      },
      onLoad: function onLoad() {
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
        this._freedialogui = cc.find("safe_node/node_free_game", this.node);
        for (var i = 1; i < 4; i++) {
          var btn_bag = cc.find("nodeui/nicewin/item" + i, this._freedialogui);
          Global.btnClickEvent(btn_bag, this.choiceMoneybagEvent, this);
        }
        var btn1 = cc.find("nodeui/youwin/startgame/btn_start", this._freedialogui);
        Global.btnClickEvent(btn1, this.youwinStartEvent, this);
        var btn2 = cc.find("nodeui/youwin/settlementgame/btn_collect", this._freedialogui);
        Global.btnClickEvent(btn2, this.youwinCollectEvent, this);
        this.init();
        this.reConnectDo();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      reConnectDo: function reConnectDo() {
        var datainfo = cc.vv.gameData.getGameDataInfo();
        if (datainfo.booms) {
          cc.find("kuang_xz", this._freeGameNode).active = false;
          this.initPoolNum(datainfo);
          this.showFreeUI(true);
          datainfo.select && datainfo.select.state && 3 == datainfo.select.rtype ? this.showBoomsSelect() : cc.vv.gameData.isEnterEnergyGame() ? cc.find("Canvas/safe_node/node_energy").getComponent("LuckyCat_Energy").IsEnterEnergyGame() : this.scheduleOnce(function() {
            cc.vv.gameData.GetBottomScript().CanDoNextRound();
          }, .5);
        }
      },
      handSpine: function handSpine() {
        AppLog.log("####\u624b\u52a8\u65cb\u8f6c");
        this.scheduleOnce(function() {
          cc.vv.gameData.GetBottomScript().CanDoNextRound();
        }, 1);
      },
      initPoolNum: function initPoolNum(datainfo) {
        this._upCount = 0;
        this.resetGrayTopShow();
        if (datainfo.booms) {
          var poolnum = datainfo.booms.pool;
          for (var i = 0; i < poolnum.length; i++) {
            var shownum = cc.find("topshow/topshow" + (i + 1) + "/shownum", this._freeGameNode);
            shownum.getComponent(cc.Label).string = Global.FormatNumToComma(poolnum[i]);
          }
          this._upCount = datainfo.booms.idx;
          this.initUpIndex(datainfo.booms.idx);
        }
      },
      showBoomsSelect: function showBoomsSelect() {
        this._stopCounttime = false;
        this._nextTime = 5;
        this.showNiceWinUI();
        this.showDiscountTime();
        this.choiceMoneyBagButtonShow(true);
      },
      showDiscountTime: function showDiscountTime() {
        var _this = this;
        if (this._stopCounttime) return;
        var lblTime = cc.find("nodeui/nicewin/timebg/counttime", this._freedialogui);
        lblTime.getComponent(cc.Label).string = this._nextTime;
        if (this._nextTime <= 0) {
          this.unschedule(this.showDiscountTime, this);
          this.choiceMoneyBagButtonShow(false);
          this.sendChoiceMoneybag(Global.random(1, 3));
          this._stopCounttime = true;
        } else this.scheduleOnce(function() {
          _this.showDiscountTime();
        }, 1);
        --this._nextTime;
      },
      showNiceWinUI: function showNiceWinUI() {
        Global.playHSEffect(this._soundCfg.full);
        this._freedialogui.active = true;
        cc.find("nodeui/nicewin", this._freedialogui).active = true;
        cc.find("nodeui/youwin", this._freedialogui).active = false;
        for (var i = 1; i < 4; i++) {
          var btn_bag = cc.find("nodeui/nicewin/item" + i + "/spine_bag", this._freedialogui);
          btn_bag.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
          var bg = cc.find("nodeui/nicewin/item" + i + "/bg", this._freedialogui);
          bg.active = false;
        }
      },
      showYouWinUI: function showYouWinUI(type, freecnt) {
        var _this2 = this;
        Global.SlotsSoundMgr.stopBgm();
        cc.vv.gameData.setWaitOperate(true);
        this._freedialogui.active = true;
        cc.find("nodeui/nicewin", this._freedialogui).active = false;
        var youwinnode = cc.find("nodeui/youwin", this._freedialogui);
        youwinnode.active = true;
        youwinnode.scale = 0;
        if (0 == type) {
          Global.playHSEffect(this._soundCfg.free_dialog_start_show);
          cc.find("nodeui/youwin/startgame", this._freedialogui).active = true;
          cc.find("nodeui/youwin/settlementgame", this._freedialogui).active = false;
          cc.find("nodeui/youwin/startgame/freetime", this._freedialogui).getComponent(cc.Label).string = freecnt;
          cc.tween(youwinnode).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          var btn1 = cc.find("nodeui/youwin/startgame/btn_start", this._freedialogui);
          cc.vv.gameData.checkAutoPlay(btn1, function() {
            Global.playHSEffect(_this2._soundCfg.common_click);
            var youwinnode = cc.find("nodeui/youwin", _this2._freedialogui);
            cc.tween(youwinnode).to(.3, {
              scale: 0
            }, {
              easing: "backInOut"
            }).call(function() {
              _this2._freedialogui.active = false;
              Global.playHSEffect(_this2._soundCfg.transition_free);
              cc.vv.gameData.playSpine(_this2.freegamespine, "animation", false, function() {
                Global.SlotsSoundMgr.playBgm(_this2._soundCfg.free_bgm);
                _this2.handSpine();
              });
              _this2.scheduleOnce(function() {
                var datainfo = cc.vv.gameData.getGameDataInfo();
                cc.find("kuang_xz", _this2._freeGameNode).active = false;
                _this2.initPoolNum(datainfo);
                _this2.showFreeUI(true);
              }, .3);
            }).start();
          });
        } else {
          Global.playHSEffect(this._soundCfg.free_dialog_collect_show);
          cc.find("nodeui/youwin/startgame", this._freedialogui).active = false;
          cc.find("nodeui/youwin/settlementgame", this._freedialogui).active = true;
          var collect = cc.find("nodeui/youwin/settlementgame/collectnum", this._freedialogui);
          var wincoin = cc.vv.gameData.GetGameTotalFreeWin();
          cc.tween(youwinnode).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function() {
            Global.doRoallNumEff(collect, 0, wincoin, 1, null, null, 0, true);
          }).start();
          var btn2 = cc.find("nodeui/youwin/settlementgame/btn_collect", this._freedialogui);
          cc.vv.gameData.checkAutoPlay(btn2, function() {
            var self = _this2;
            Global.playHSEffect(_this2._soundCfg.free_dialog_click);
            var youwinnode = cc.find("nodeui/youwin", _this2._freedialogui);
            cc.tween(youwinnode).to(.3, {
              scale: 0
            }, {
              easing: "backInOut"
            }).call(function() {
              self._freedialogui.active = false;
              Global.playHSEffect(self._soundCfg.transition_free);
              cc.vv.gameData.playSpine(self.freegamespine, "animation", false, function() {
                Global.SlotsSoundMgr.playBgm(self._soundCfg.base_bgm);
                self._freeGameNode.active = false;
                self.showFreeUI(false);
                cc.vv.gameData.setWaitOperate(false);
                cc.vv.gameData.GetTopScript().SetBackLobby(true);
                var freewin = cc.vv.gameData.GetGameTotalFreeWin();
                cc.vv.gameData.GetSlotsScript().Resume();
                var nVal = cc.vv.gameData.GetCoin();
                var datainfo = cc.vv.gameData.getGameDataInfo();
                datainfo.select.state && cc.vv.gameData.AddCoin(freewin);
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(freewin, freewin, false, function() {
                  cc.vv.gameData.GetTopScript().ShowCoin();
                  cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                });
              });
            }).start();
          });
        }
      },
      choiceMoneyBagButtonShow: function choiceMoneyBagButtonShow(interactable) {
        for (var i = 1; i < 4; i++) {
          var btn_bag = cc.find("nodeui/nicewin/item" + i, this._freedialogui);
          btn_bag.getComponent(cc.Button).interactable = interactable;
        }
      },
      choiceMoneybagEvent: function choiceMoneybagEvent(btn) {
        AppLog.log("\u70b9\u51fb\u6309\u94ae:" + btn.node.name);
        var idx = parseInt(btn.node.name.substr(-1, 1));
        this.choiceMoneyBagButtonShow(false);
        this.sendChoiceMoneybag(idx);
        this._stopCounttime = true;
      },
      sendChoiceMoneybag: function sendChoiceMoneybag(idx) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = 3;
        req.data.idx = idx;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
        Global.playHSEffect(this._soundCfg.free_dialog_pick);
      },
      changeSpriteGray: function changeSpriteGray(sp, isgray) {
        var newMaterial = null;
        newMaterial = isgray ? cc.Material.createWithBuiltin(cc.Material.BUILTIN_NAME.GRAY_SPRITE, 0) : cc.Material.createWithBuiltin(cc.Material.BUILTIN_NAME.SPRITE, 0);
        newMaterial.define("USE_TEXTURE", true, 0);
        sp.setMaterial(0, newMaterial);
      },
      changeNumSprite: function changeNumSprite(sp, spname) {
        cc.loader.loadRes("games/LuckyCat/images/plist/free_popup", cc.SpriteAtlas, function(err, data) {
          sp.getComponent(cc.Sprite).spriteFrame = data.getSpriteFrame(spname);
        });
      },
      getAtlasSpriteName: function getAtlasSpriteName(num) {
        switch (num) {
         case 1:
          return "theme160_freePop_4";

         case 2:
          return "theme160_freePop_5";

         case 3:
          return "theme160_freePop_6";
        }
      },
      youwinStartEvent: function youwinStartEvent() {
        var _this3 = this;
        var btn1 = cc.find("nodeui/youwin/startgame/btn_start", this._freedialogui);
        btn1.stopAllActions();
        Global.playHSEffect(this._soundCfg.common_click);
        var youwinnode = cc.find("nodeui/youwin", this._freedialogui);
        cc.tween(youwinnode).to(.3, {
          scale: 0
        }, {
          easing: "backInOut"
        }).call(function() {
          _this3._freedialogui.active = false;
          Global.playHSEffect(_this3._soundCfg.transition_free);
          cc.vv.gameData.playSpine(_this3.freegamespine, "animation", false, function() {
            Global.SlotsSoundMgr.playBgm(_this3._soundCfg.free_bgm);
            _this3.handSpine();
          });
          _this3.scheduleOnce(function() {
            var datainfo = cc.vv.gameData.getGameDataInfo();
            cc.find("kuang_xz", _this3._freeGameNode).active = false;
            _this3.initPoolNum(datainfo);
            _this3.showFreeUI(true);
          }, .3);
        }).start();
      },
      youwinCollectEvent: function youwinCollectEvent() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var btn2, self, youwinnode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              btn2 = cc.find("nodeui/youwin/settlementgame/btn_collect", _this4._freedialogui);
              btn2.stopAllActions();
              self = _this4;
              Global.playHSEffect(_this4._soundCfg.free_dialog_click);
              youwinnode = cc.find("nodeui/youwin", _this4._freedialogui);
              cc.tween(youwinnode).to(.3, {
                scale: 0
              }, {
                easing: "backInOut"
              }).call(function() {
                self._freedialogui.active = false;
                Global.playHSEffect(self._soundCfg.transition_free);
                cc.vv.gameData.playSpine(self.freegamespine, "animation", false, function() {
                  Global.SlotsSoundMgr.playBgm(self._soundCfg.base_bgm);
                  self._freeGameNode.active = false;
                  self.showFreeUI(false);
                  cc.vv.gameData.setWaitOperate(false);
                  cc.vv.gameData.GetTopScript().SetBackLobby(true);
                  var freewin = cc.vv.gameData.GetGameTotalFreeWin();
                  cc.vv.gameData.GetSlotsScript().Resume();
                  var nVal = cc.vv.gameData.GetCoin();
                  var datainfo = cc.vv.gameData.getGameDataInfo();
                  datainfo.select.state && cc.vv.gameData.AddCoin(freewin);
                  cc.vv.gameData.GetSlotsScript().ShowBottomWin(freewin, freewin, false, function() {
                    cc.vv.gameData.GetTopScript().ShowCoin();
                    cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                  });
                });
              }).start();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showFreeUI: function showFreeUI(isshow) {
        this._freeGameNode.active = isshow;
        if (isshow) {
          var totalfree = cc.vv.gameData.GetTotalFree();
          var resttimes = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.GetBottomScript().ShowFreeModel(true, totalfree - resttimes, totalfree);
        } else cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        var _this5 = this;
        var self = this;
        if (200 == msg.code) {
          if (3 != msg.data.rtype) return;
          var index = msg.data.idx;
          if (void 0 == index) {
            AppLog.log("idx\u6570\u636e\u9519\u8bef!");
            this._freedialogui.active = false;
            return;
          }
          var btn_bag = cc.find("nodeui/nicewin/item" + index + "/spine_bag", this._freedialogui);
          btn_bag.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
          var bg = cc.find("nodeui/nicewin/item" + index + "/bg", this._freedialogui);
          bg.active = true;
          var spnum = cc.find("num", bg).getComponent(cc.Sprite);
          this.changeNumSprite(spnum, this.getAtlasSpriteName(msg.data.num));
          this.changeSpriteGray(bg.getComponent(cc.Sprite), false);
          this.changeSpriteGray(spnum, false);
          this.scheduleOnce(function() {
            switch (index) {
             case 1:
              _this5.randomShowIndex([ 2, 3 ], msg.data.num);
              break;

             case 2:
              _this5.randomShowIndex([ 1, 3 ], msg.data.num);
              break;

             case 3:
              _this5.randomShowIndex([ 1, 2 ], msg.data.num);
            }
            Global.playHSEffect(_this5._soundCfg.free_dialog_pick_show);
          }, 1);
          msg.data.freeWinCoin && cc.vv.gameData.setFreeWinTotal(msg.data.freeWinCoin);
          this.scheduleOnce(function() {
            _this5._freedialogui.active = false;
            _this5.scatterCollectGoldCoin(msg.data.num);
          }, 2);
        }
      },
      scatterCollectGoldCoin: function scatterCollectGoldCoin(index) {
        this.playGetCoinUp(index);
      },
      randomShowIndex: function randomShowIndex(index, num) {
        if (1 == num) {
          this.randomShowNum(index[0], 2);
          this.randomShowNum(index[1], 3);
        } else if (2 == num) {
          this.randomShowNum(index[0], 1);
          this.randomShowNum(index[1], 3);
        } else if (3 == num) {
          this.randomShowNum(index[0], 1);
          this.randomShowNum(index[1], 2);
        }
      },
      randomShowNum: function randomShowNum(index, num) {
        var spine_bag = cc.find("nodeui/nicewin/item" + index + "/spine_bag", this._freedialogui);
        spine_bag.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
        var bg = cc.find("nodeui/nicewin/item" + index + "/bg", this._freedialogui);
        bg.active = true;
        var spnum = cc.find("num", bg).getComponent(cc.Sprite);
        this.changeNumSprite(spnum, this.getAtlasSpriteName(num));
        this.changeSpriteGray(bg.getComponent(cc.Sprite), true);
        this.changeSpriteGray(spnum, true);
      },
      onRecvPlayLineFinish: function onRecvPlayLineFinish() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                AppLog.log("###\u7ebf\u8def\u64ad\u653e\u5b8c\u6210\uff01");
                _this6._nextpromise = success;
                var gameinfo = cc.vv.gameData.getGameInfo();
                if (gameinfo.select && gameinfo.select.state && 3 == gameinfo.select.rtype) {
                  gameinfo.booms.indexs && gameinfo.booms.indexs.info.length > 0 ? _this6.boomsIndexfly(gameinfo.booms) : _this6.showBoomsSelect();
                  return;
                }
                if (gameinfo.booms) {
                  AppLog.log("###\u666e\u901a\u514d\u8d39\u6b21\u6570 " + gameinfo.freeCnt);
                  if (gameinfo.freeCnt == gameinfo.allFreeCnt) {
                    Global.playHSEffect(_this6._soundCfg.bell);
                    _this6.scheduleOnce(function() {
                      _this6.showYouWinUI(0, gameinfo.freeCnt);
                    }, 2);
                  } else {
                    AppLog.log("###\u514d\u8d39\u6e38\u620f\u72b6\u6001 ");
                    gameinfo.booms.indexs && gameinfo.booms.indexs.info.length > 0 ? _this6.boomsIndexfly(gameinfo.booms) : _this6.showOperateResult();
                  }
                } else if (_this6._nextpromise) {
                  _this6._nextpromise();
                  _this6._nextpromise = null;
                }
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      coinFlyToBottom: function coinFlyToBottom() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                if (_this7._upCount < 1) success(); else {
                  var curlevel = _this7._upCount + 1;
                  var startnode = cc.find("topshow/topshow" + curlevel, _this7._freeGameNode);
                  var winnode = cc.find("safe_node/LMSlots_Bottom/winBg", _this7.node);
                  var flyeffect = cc.find("jinbijieshou", _this7._freeGameNode);
                  var lizibaozha = cc.find("safe_node/lizibaozha", _this7.node);
                  var insteff = cc.instantiate(flyeffect);
                  insteff.parent = flyeffect.parent.parent;
                  insteff.active = true;
                  lizibaozha.position = lizibaozha.parent.convertToNodeSpaceAR(winnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                  var beiginPos = insteff.parent.convertToNodeSpaceAR(startnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                  insteff.position = beiginPos;
                  Global.playHSEffect(_this7._soundCfg.symbol_fly);
                  var aimpos = insteff.parent.convertToNodeSpaceAR(winnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                  cc.tween(insteff).to(.5, {
                    position: aimpos
                  }).call(function() {
                    var freewin = cc.vv.gameData.GetGameTotalFreeWin();
                    cc.vv.gameData.GetBottomScript().SetWin(freewin);
                    lizibaozha.active = true;
                    lizibaozha.getComponent(cc.ParticleSystem).resetSystem();
                    insteff.destroy();
                    success();
                  }).start();
                }
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      boomsIndexfly: function boomsIndexfly(booms) {
        var _this8 = this;
        var aimnode = cc.find("safe_node/free_game/topshow16", this.node);
        var flyeffect = cc.find("safe_node/free_game/getcoin", this.node);
        var indexinfo = booms.indexs.info;
        var _loop = function _loop(i) {
          var info = indexinfo[i];
          var insteff = cc.instantiate(flyeffect);
          insteff.parent = flyeffect.parent.parent;
          insteff.active = true;
          var symbol = cc.find("safe_node/slots", _this8.node).getComponent("LuckyCat_Slots").GetSymbolByIdx(info.idx);
          var beiginPos = insteff.parent.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
          insteff.position = beiginPos;
          Global.playHSEffect(_this8._soundCfg.symbol_fly);
          var aimpos = insteff.parent.convertToNodeSpaceAR(aimnode.convertToWorldSpaceAR(cc.v2(0, 0)));
          var xpos = _this8.getPosOffset(info.idx, beiginPos.x * i);
          var bezier = [ cc.v2(beiginPos.x, beiginPos.y), cc.v2(xpos, beiginPos.y), aimpos ];
          insteff.runAction(cc.sequence(cc.bezierTo(.6, bezier), cc.callFunc(function() {
            _this8.playWildChange(symbol);
            _this8.playCollectJieshou(booms.indexs.total);
            insteff.destroy();
          })));
        };
        for (var i = 0; i < indexinfo.length; i++) _loop(i);
        Global.playHSEffect(this._soundCfg.bonus_collect);
        this.scheduleOnce(function() {
          Global.playHSEffect("symbol_fly");
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
        }, .5);
        this.scheduleOnce(function() {
          var gameinfo = cc.vv.gameData.getGameInfo();
          gameinfo.select && gameinfo.select.state && 3 == gameinfo.select.rtype ? _this8.showBoomsSelect() : _this8.showOperateResult();
        }, 2);
      },
      showOperateResult: function showOperateResult() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (!(cc.vv.gameData.GetFreeTime() > 0)) {
                _context4.next = 4;
                break;
              }
              _this9.handSpine();
              _context4.next = 9;
              break;

             case 4:
              _context4.next = 6;
              return _this9.coinFlyToBottom();

             case 6:
              _context4.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _this9.showYouWinUI(1);

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getPosOffset: function getPosOffset(idx, srcx) {
        if (1 == idx || 2 == idx || 6 == idx || 7 == idx || 11 == idx || 12 == idx) return -srcx;
        return srcx;
      },
      playCollectJieshou: function playCollectJieshou(total) {
        var jieshou = cc.find("safe_node/free_game/topshow16/collectjieshou", this.node);
        jieshou.active = true;
        jieshou.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        var shownum = cc.find("safe_node/free_game/topshow16/shownum", this.node);
        var srcnum = parseInt(shownum.getComponent(cc.Label).string);
        Global.doRoallNumEff(shownum, srcnum, srcnum + total, 1.5, null, null, 0, true);
      },
      playWildChange: function playWildChange(symbol) {
        AppLog.log("\u514d\u8d39\u5185\u5237\u65b0\u80fd\u91cf");
        symbol.playFreeCollectAction();
      },
      initUpIndex: function initUpIndex(upnum) {
        if (0 == upnum) return;
        for (var i = 0; i < upnum; i++) this.changeGrayLastTopShow(i, true);
        var topshow = cc.find("topshow/topshow" + upnum, this._freeGameNode);
        this.playArrowAnimation(topshow, upnum, true);
        var kuang = cc.find("kuang_xz", this._freeGameNode);
        kuang.active = true;
        var aniname = this.getKuangAnimation(upnum);
        kuang.getComponent(sp.Skeleton).setAnimation(0, aniname, true);
        kuang.position = this._freeGameNode.convertToNodeSpaceAR(topshow.convertToWorldSpaceAR(cc.v2(0, 0)));
      },
      playGetCoinUp: function playGetCoinUp(upnum) {
        var _this10 = this;
        var upindex = this._upCount + 1;
        if (this._upCount + upnum > 16) {
          upnum = 16 - this._upCount;
          this._upCount = 16;
        } else this._upCount += upnum;
        var kuang = cc.find("kuang_xz", this._freeGameNode);
        this.schedule(function() {
          kuang.active = true;
          var topshow = cc.find("topshow/topshow" + upindex, _this10._freeGameNode);
          var aniname = _this10.getKuangAnimation(upindex);
          kuang.getComponent(sp.Skeleton).setAnimation(0, aniname, true);
          kuang.position = _this10._freeGameNode.convertToNodeSpaceAR(topshow.convertToWorldSpaceAR(cc.v2(0, 0)));
          _this10.changeGrayLastTopShow(upindex - 1, true);
          _this10.playArrowAnimation(topshow, upindex, upindex == _this10._upCount);
          Global.playHSEffect(_this10._soundCfg.bonus_up);
          upindex == _this10._upCount && _this10.showOperateResult();
          upindex++;
        }, 1, upnum - 1);
      },
      getKuangAnimation: function getKuangAnimation(upindex) {
        switch (upindex) {
         case 1:
         case 2:
          return "animation1";

         case 3:
         case 4:
          return "animation2";

         case 5:
         case 6:
          return "animation3";

         case 7:
         case 8:
          return "animation4";

         case 9:
          return "animation5";

         case 10:
          return "animation6";

         case 11:
          return "animation7";

         case 12:
          return "animation8";

         case 13:
          return "animation9";

         case 14:
          return "animation10";

         case 15:
          return "animation11";

         case 16:
          return "animation12";
        }
        return "animation12";
      },
      playArrowAnimation: function playArrowAnimation(topshow, upindex, isover) {
        if (upindex > 8) {
          var kuang = cc.find("kuang_jt03", topshow);
          if (kuang) {
            kuang.active = true;
            kuang.getComponent(sp.Skeleton).setAnimation(0, "animation1", isover);
          }
          kuang = cc.find("kuang_jt04", topshow);
          if (kuang) {
            kuang.active = true;
            kuang.getComponent(sp.Skeleton).setAnimation(0, "animation1", isover);
          }
        } else {
          var arrow = cc.find("kuang_jt01", topshow);
          if (arrow) {
            arrow.active = true;
            arrow.getComponent(sp.Skeleton).setAnimation(0, "animation1", isover);
          }
          this.scheduleOnce(function() {
            var arrow2 = cc.find("kuang_jt02", topshow);
            if (arrow2) {
              arrow2.active = true;
              arrow2.getComponent(sp.Skeleton).setAnimation(0, "animation1", isover);
            }
          }, .5);
        }
      },
      changeGrayLastTopShow: function changeGrayLastTopShow(index, isgray) {
        if (index <= 0) return;
        var topshow = cc.find("topshow/topshow" + index, this._freeGameNode);
        var obj = topshow.getChildByName("arrow");
        obj && this.changeSpriteGray(obj.getComponent(cc.Sprite), isgray);
        obj = topshow.getChildByName("shownum");
        obj && this.changeSpriteGray(obj.getComponent(cc.Label), isgray);
        obj = topshow.getChildByName("bg");
        obj && this.changeSpriteGray(obj.getComponent(cc.Sprite), isgray);
        obj = topshow.getChildByName("leftarrow");
        obj && this.changeSpriteGray(obj.getComponent(cc.Sprite), isgray);
        obj = topshow.getChildByName("rightarrow");
        obj && this.changeSpriteGray(obj.getComponent(cc.Sprite), isgray);
        obj = cc.find("kuang_jt03", topshow);
        obj && (obj.active = false);
        obj = cc.find("kuang_jt04", topshow);
        obj && (obj.active = false);
        obj = cc.find("kuang_jt01", topshow);
        obj && (obj.active = false);
        obj = cc.find("kuang_jt02", topshow);
        obj && (obj.active = false);
      },
      resetGrayTopShow: function resetGrayTopShow() {
        for (var i = 1; i < 16; i++) this.changeGrayLastTopShow(i, false);
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96360tnV6BNKq+CbfVH5GpU", "LuckyCat_GameData");
    "use strict";
    var BigGate = [ 2, 7, 13, 20 ];
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collectData: null,
        needBet: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._collectData = this._deskInfo.collect;
        this._selectData = this._deskInfo.select;
        this.needBet = this._collectData.min;
        this._boomsData = this._deskInfo.booms;
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        this._EventId.LuckyCat_UNLOCK_ENERGY = "LuckyCat_UNLOCK_ENERGY";
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._super(msg);
          this._collectData = msg.collect;
          this._selectData = msg.select;
          this._boomsData = this._deskInfo.booms;
        }
      },
      getBoomsData: function getBoomsData() {
        return this._boomsData;
      },
      getSelectData: function getSelectData() {
        return this._selectData;
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      IsSelectWheel: function IsSelectWheel() {
        return this._deskInfo.select;
      },
      getGameInfo: function getGameInfo() {
        return this._gameInfo;
      },
      getCollectData: function getCollectData() {
        return this._collectData;
      },
      setCollectDataNum: function setCollectDataNum(num) {
        this._collectData.num = num;
      },
      clearCollectData: function clearCollectData() {
        var gameinfo = this.getGameDataInfo();
        gameinfo.collect && (gameinfo.collect.open = 0);
      },
      clearFreeData: function clearFreeData() {
        this._gameInfo.allFreeCnt = 0;
      },
      isOpenCollectProgress: function isOpenCollectProgress() {
        return this.GetBetIdx() >= this.needBet;
      },
      setFreeWinTotal: function setFreeWinTotal(wincoin) {
        this._gameInfo.freeWinCoin = wincoin;
      },
      isNormalFreeGameOver: function isNormalFreeGameOver() {
        return 0 == this._gameInfo.freeCnt && this._gameInfo.allFreeCnt > 0;
      },
      getGameDataInfo: function getGameDataInfo() {
        var gamedata = cc.vv.gameData.getGameInfo();
        if (gamedata) return gamedata;
        gamedata = cc.vv.gameData.getDeskInfo();
        if (gamedata) return gamedata;
        return null;
      },
      isBigGate: function isBigGate(idx) {
        var res = false;
        for (var i = 0; i < BigGate.length; i++) idx == BigGate[i] && (res = true);
        return res;
      },
      isTriggerNormalFree: function isTriggerNormalFree() {
        return this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt;
      },
      isEnterEnergyGame: function isEnterEnergyGame() {
        if (this._collectData && this._collectData.open > 0 && this._selectData.state) return true;
        return false;
      },
      isFreeGamesTime: function isFreeGamesTime() {
        return this._deskInfo.allFreeCount > 0;
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
        if (gameinfo.freeCnt > 0) return true;
        return false;
      },
      isEnterFreeGame: function isEnterFreeGame() {
        var gameinfo = this.getGameDataInfo();
        if (gameinfo.booms && gameinfo.freeCnt == gameinfo.allFreeCnt && gameinfo.allFreeCnt > 0) return true;
        return false;
      },
      isWaitOperate: function isWaitOperate() {
        return this._isWait;
      },
      setWaitOperate: function setWaitOperate(iswait) {
        this._isWait = iswait;
      },
      isReelMove: function isReelMove() {
        if (this.GetFreeTime() > 0) return true;
        return this._isReelMove || this._autoTime > 0;
      },
      setReelMove: function setReelMove(ismove) {
        this._isReelMove = ismove;
      },
      saveFreeGameScript: function saveFreeGameScript(freescript) {
        this._freeGameScript = freescript;
      },
      getFreeGameScript: function getFreeGameScript() {
        return this._freeGameScript;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  LuckyCat_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bfac4gyfJDlLxmTMUF9ErR", "LuckyCat_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        Global.playHSMusic = function(fn, loop) {
          cc.vv.AudioManager.playBgm("games/LuckyCat/", fn, true, loop);
        };
        Global.playHSEffect = function(fn, loop, callback, volume) {
          cc.vv.AudioManager.playEff("games/LuckyCat/", fn, true, loop, callback, volume);
        };
        Global.stopHSEffect = function(fn) {
          cc.vv.AudioManager.stopEffectByName(fn);
        };
        var freescript = cc.find("Canvas").getComponent("LuckyCat_FreeGame");
        cc.vv.gameData.saveFreeGameScript(freescript);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LuckyCat_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8ecfl/BXdCPZ7sH4xDsp/o", "LuckyCat_Map");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        yb_grey: cc.SpriteFrame,
        yb_light: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        this._node_head = cc.find("spr_head", this.node);
        this._node_mask = cc.find("node_mask", this.node);
        this._head_pos = cc.find("head_pos", this.node);
        var btnBack = cc.find("spr_mid/spr_foot/btn_back", this._node_mask);
        Global.btnClickEvent(btnBack, this.onClickBack, this);
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
      },
      start: function start() {},
      showMapDetail: function showMapDetail() {
        var _this = this;
        var self = this;
        var engData = cc.vv.gameData.getCollectData();
        var curMapId = engData.idx;
        var yuanbaolight = cc.find("spr_mid/yuanbaolight", this._node_mask);
        yuanbaolight.active = false;
        for (var i = 1; i < 21; i++) {
          var item = cc.find("spr_mid/s_" + i, this._node_mask);
          if (item) if (cc.vv.gameData.isBigGate(i)) i > curMapId ? item.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", true) : i != curMapId || this._bTrigger || item.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", true); else if (i < curMapId) {
            this._bTrigger && Global.playHSEffect(this._soundCfg.map_move);
            item.getComponent(cc.Sprite).spriteFrame = this.yb_light;
          } else if (i == curMapId) {
            this.initShowSmallGate(item, yuanbaolight);
            item.getComponent(cc.Sprite).spriteFrame = this.yb_light;
            this._bTrigger && Global.playHSEffect(this._soundCfg.map_move);
          } else item.getComponent(cc.Sprite).spriteFrame = this.yb_grey;
        }
        var node_lx = cc.find("spr_mid/node_lx", this._node_mask);
        node_lx.active = curMapId > 1;
        if (curMapId > 1) {
          var mapindex = curMapId - 1;
          var lxAni = cc.js.formatStr("animation%s_%s", mapindex, mapindex);
          if (this._bTrigger) {
            Global.playHSEffect("map_node");
            lxAni = cc.js.formatStr("animation%s", mapindex);
          }
          cc.vv.gameData.playSpine(node_lx, lxAni, false, function() {
            var item = cc.find("spr_mid/s_" + curMapId, _this._node_mask);
            if (cc.vv.gameData.isBigGate(curMapId)) {
              Global.playHSEffect("map_node");
              _this.openBigGate(item);
            } else _this.openSmallGate(item, yuanbaolight);
          });
        }
        this._bTrigger && this.scheduleOnce(function() {
          _this.existMap(_this.showSubGame);
        }, 2);
      },
      delayShowExistMap: function delayShowExistMap() {
        if (this._bTrigger) {
          var delayCall = function delayCall() {
            this.existMap(this.showSubGame(this));
          };
          this.scheduleOnce(delayCall, 2);
        }
      },
      enterMap: function enterMap(bTrigger) {
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        var self = this;
        this._bTrigger = bTrigger;
        this._node_head.position = cc.v2(0, 800);
        var endPos = this._head_pos.position;
        this._node_head.active = true;
        cc.tween(this._node_head).to(.3, {
          position: cc.v2(endPos.x, endPos.y)
        }).call(function() {
          Global.playHSEffect("map_close");
          self._node_mask.active = true;
          var sprMid = cc.find("spr_mid", self._node_mask);
          sprMid.active = true;
          sprMid.position = cc.v2(0, 1e3);
          cc.tween(sprMid).to(.3, {
            position: cc.v2(0, 0)
          }).call(function() {
            self.showMapDetail();
            var btnBack = cc.find("spr_foot/btn_back", sprMid);
            btnBack.active = !self._bTrigger;
            cc.tween(btnBack).to(.2, {
              scale: 1.3
            }).to(.2, {
              scale: 1
            }).call(function() {}).start();
          }).start();
        }).start();
      },
      existMap: function existMap(endCall) {
        var self = this;
        var sprMid = cc.find("spr_mid", self._node_mask);
        cc.tween(sprMid).to(.3, {
          position: cc.v2(0, 1e3)
        }).call(function() {
          Global.playHSEffect("map_open");
          self._node_mask.active = false;
          cc.tween(self._node_head).to(.3, {
            position: cc.v2(0, 800)
          }).call(function() {
            endCall && endCall();
            self.node.active = false;
          }).start();
        }).start();
      },
      onClickBack: function onClickBack() {
        var _this2 = this;
        Global.playHSEffect("bonus_dialog_click");
        this.existMap(function() {
          _this2.node.active = false;
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
        });
      },
      initShowSmallGate: function initShowSmallGate(itemnode, yuanbaonode) {
        yuanbaonode.position = yuanbaonode.parent.convertToNodeSpaceAR(itemnode.convertToWorldSpaceAR(cc.v2(0, 0)));
        yuanbaonode.active = true;
        var ybsp = yuanbaonode.getComponent(sp.Skeleton);
        ybsp.setAnimation(0, "animation2", true);
      },
      openBigGate: function openBigGate(itemnode) {
        var ybsp = itemnode.getComponent(sp.Skeleton);
        if (this._bTrigger) {
          ybsp.setAnimation(0, "animation1_2", false);
          ybsp.setCompleteListener(function() {
            ybsp.setAnimation(0, "animation1_4", false);
            ybsp.setCompleteListener(null);
          });
        }
      },
      openSmallGate: function openSmallGate(itemnode, yuanbaonode) {
        itemnode.getComponent(cc.Sprite).spriteFrame = this.yb_light;
        yuanbaonode.position = yuanbaonode.parent.convertToNodeSpaceAR(itemnode.convertToWorldSpaceAR(cc.v2(0, 0)));
        yuanbaonode.active = true;
        var ybsp = yuanbaonode.getComponent(sp.Skeleton);
        ybsp.setAnimation(0, "animation1", false);
        ybsp.setCompleteListener(function() {
          ybsp.setAnimation(0, "animation2", true);
          ybsp.setCompleteListener(null);
        });
      },
      showSubGame: function showSubGame() {
        var engData = cc.vv.gameData.getCollectData();
        if (void 0 == engData) return;
        var opengame = engData.open;
        AppLog.log("\u663e\u793a\u5b50\u6e38\u620f:" + opengame);
        if (2 == opengame) {
          var freeGame = cc.find("Canvas/safe_node/node_energy_free_game");
          freeGame.active = true;
          var scp = freeGame.getComponent("LuckyCat_Energy_FreeGame");
          scp.energyFreeGameStart(engData);
        } else if (1 == opengame) {
          var mapGame = cc.find("Canvas/safe_node/LMSlots_Subgame777");
          mapGame.getComponent("LMSlots_Subgame777").showEnter(engData.bet);
        }
        cc.vv.gameData.clearCollectData();
        opengame > 0 && cc.find("Canvas/safe_node/node_energy").getComponent("LuckyCat_Energy").onEnergyGameOver();
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f34d3DwZnFDnKntHUa9Zdq5", "LuckyCat_Pop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _showNode: null
      },
      onLoad: function onLoad() {
        var btnCollect = cc.find("pop_wheel_result/node_coin/btn_collect", this.node);
        Global.btnClickEvent(btnCollect, this.OnClickCollect, this);
        var btnStart = cc.find("pop_wheel_result/node_freegames/btn_start", this.node);
        Global.btnClickEvent(btnStart, this.OnClickStart, this);
      },
      start: function start() {},
      ShowWheelResult: function ShowWheelResult(data) {
        var _this = this;
        this._WheelResultData = data;
        this._showNode && (this._showNode.active = false);
        var node_result = cc.find("pop_wheel_result", this.node);
        this._showNode = node_result;
        var node_coin = cc.find("node_coin", node_result);
        node_coin.active = 1 == data.awardType;
        var node_free = cc.find("node_freegames", node_result);
        node_free.active = !node_coin.active;
        if (1 == data.awardType) {
          Global.showAlertAction(node_coin, true, .1, 1);
          var lbl_coin = cc.find("lbl_coin", node_coin);
          Global.doRoallNumEff(lbl_coin, 0, data.num, 3, null, null, 0, true);
          var majorType = [ 1, 5, 9, 13 ];
          for (var i = 0; i < majorType.length; i++) {
            var nodeMajor = cc.find("res_" + majorType[i], node_coin);
            nodeMajor.active = majorType[i] == data.idx;
          }
          var btnCollect = cc.find("pop_wheel_result/node_coin/btn_collect", this.node);
          cc.vv.gameData.checkAutoPlay(btnCollect, function() {
            _this.HidePopNode();
            var slotScp = cc.vv.gameData.GetSlotsScript();
            slotScp.ShowTranstionExit();
          });
        } else {
          Global.showAlertAction(node_free, true, .1, 1);
          var lbl_time = cc.find("lbl_time", node_free);
          lbl_time.getComponent(cc.Label).string = Global.FormatNumToComma(data.num);
          var btnStart = cc.find("pop_wheel_result/node_freegames/btn_start", this.node);
          cc.vv.gameData.checkAutoPlay(btnStart, function() {
            _this.HidePopNode();
            var slotScp = cc.vv.gameData.GetSlotsScript();
            slotScp.ShowTranstionExit();
          });
        }
        var hitIdx = data.num;
        var tarSp = "theme135_popup_bg7";
        5 == hitIdx ? tarSp = "theme135_popup_bg1" : 8 == hitIdx ? tarSp = "theme135_popup_bg3" : 20 == hitIdx ? tarSp = "theme135_popup_bg6" : 15 == hitIdx ? tarSp = "theme135_popup_bg5" : 10 == hitIdx ? tarSp = "theme135_popup_bg4" : 7 == hitIdx && (tarSp = "theme135_popup_bg2");
        var spr_bg = cc.find("spr_bg", node_result);
        var atlas = cc.vv.gameData.GetAtlasByName("popup");
        spr_bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(tarSp);
      },
      ShowExtraFree: function ShowExtraFree(nTime) {
        this._showNode && (this._showNode.active = false);
        var node_extra = cc.find("node_extre_free", this.node);
        this._showNode = node_extra;
        node_extra.active = true;
        var lbl_time = cc.find("lbl_time", node_extra);
        lbl_time.getComponent(cc.Label).string = nTime;
        var sprTime1 = cc.find("txt_frees1", node_extra);
        sprTime1.active = 1 == nTime;
        var sprTime2 = cc.find("txt_frees2", node_extra);
        sprTime2.active = !sprTime1.active;
      },
      HidePopNode: function HidePopNode() {
        this.node.active = false;
      },
      OnClickCollect: function OnClickCollect() {
        var btnCollect = cc.find("pop_wheel_result/node_coin/btn_collect", this.node);
        btnCollect.stopAllActions();
        this.HidePopNode();
        var slotScp = cc.vv.gameData.GetSlotsScript();
        slotScp.ShowTranstionExit();
      },
      OnClickStart: function OnClickStart() {
        var btnStart = cc.find("pop_wheel_result/node_freegames/btn_start", this.node);
        btnStart.stopAllActions();
        this.HidePopNode();
        var slotScp = cc.vv.gameData.GetSlotsScript();
        slotScp.ShowTranstionExit();
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckyCat_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21ec7vRsFxIgb+kzOfbZ9BO", "LuckyCat_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  LuckyCat_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d48civ6SNAr6XbPIIjv/sb", "LuckyCat_Slots");
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
        _isFireGame: true,
        _scatterCount: 0
      },
      RegisterEvent: function RegisterEvent() {
        this._energyfreegame || (this._energyfreegame = cc.find("Canvas/safe_node/node_energy_free_game").getComponent("LuckyCat_Energy_FreeGame"));
      },
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.setReelMove(true);
        this._energyfreegame.playMidAniClose();
        Global.SlotsSoundMgr.playNormalBgm();
        cc.find("Canvas/safe_node/node_energy/btn_juanzhou").getComponent(cc.Button).interactable = false;
      },
      GetBonusData: function GetBonusData(idx) {
        var bonusData = this._gameInfo.bonusGame;
        if (bonusData && bonusData.open) {
          for (var i = 0; i < bonusData.coins.length; i++) if (bonusData.coins[i].idx == idx) return {
            t: "coin",
            num: bonusData.coins[i].num
          };
          for (var _i = 0; _i < bonusData.free.length; _i++) if (bonusData.free[_i].idx == idx) return {
            t: "free",
            num: bonusData.free[_i].num
          };
        }
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
            res.data = this.GetBonusData(i + 1);
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
      showScatterCoin: function showScatterCoin(colidx) {
        var gameinfo = cc.vv.gameData.getGameInfo();
        if (gameinfo.booms) {
          var indexinfo = gameinfo.booms.indexs.info;
          if (indexinfo) for (var i = 0; i < indexinfo.length; i++) {
            var col = (indexinfo[i].idx - 1) % this._col;
            if (col == colidx) {
              var symbol = this.GetSymbolByIdx(indexinfo[i].idx);
              symbol.showSymbolNumber(indexinfo[i].coin);
            }
          }
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._scatterCount = 0;
        this.resetScatterShow();
        this._super(msg);
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
        if (cc.vv.gameData.isEnterFreeGame()) for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 3; j++) sys[j].playScatterAnimation();
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this.showScatterCoin(colIdx);
        this.reelStopPlaySound(colIdx);
        this._super(colIdx);
      },
      reelStopPlaySound: function reelStopPlaySound(colIdx) {
        var sys = this._reels[colIdx]._symbols;
        for (var j = 0; j < 3; j++) {
          var itemid = sys[j].GetShowId();
          if (2 == itemid || 3 == itemid || 4 == itemid || 5 == itemid) {
            this._scatterCount++;
            colIdx < 4 ? this.showReelBg(colIdx) : this._scatterCount >= 3 && this.showReelBg(colIdx);
          }
        }
        4 == colIdx && this.hideReelBg();
      },
      StopMove: function StopMove() {
        this._super();
        this.hideReelBg();
      },
      showReelBg: function showReelBg(colIdx) {
        var reelindex = colIdx + 1;
        var node_ani = cc.find("reels/reel" + reelindex + "/mask/node_anti", this.node);
        node_ani.active = true;
        node_ani.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
      },
      hideReelBg: function hideReelBg() {
        for (var i = 1; i < 6; i++) {
          var node_ani = cc.find("reels/reel" + i + "/mask/node_anti", this.node);
          node_ani.active = false;
        }
      },
      resetScatterShow: function resetScatterShow() {
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].resetScatterShow();
        }
        this.resetWildShow();
      },
      resetWildShow: function resetWildShow() {
        var parNode = cc.find("top_ani", this.node);
        for (var i = 0; i < 5; i++) for (var j = 0; j < 4; j++) {
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", j, i), parNode);
          showNode && showNode.active && (showNode.active = false);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bHit, rest, autoTime;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.setReelMove(false);
              bHit = _this.CheckSpecialReward();
              bHit && _this._bottomScript.ShowBtnsByState("moveing_1");
              cc.vv.gameData.isOpenCollectProgress() && _this.CollectEnergy();
              _context.next = 6;
              return _this.stopSpinPlayMulti();

             case 6:
              _this.ShowWinTrace();
              _this.playScatterAnimation(true);
              _context.next = 10;
              return _this.playBottomWin();

             case 10:
              _context.next = 12;
              return _this.enterEnergyGame();

             case 12:
              _context.next = 14;
              return cc.vv.gameData.getFreeGameScript().onRecvPlayLineFinish();

             case 14:
              _context.next = 16;
              return _this._energyfreegame.playLineOver();

             case 16:
              _this.CanDoNextRound();
              rest = cc.vv.gameData.GetFreeTime();
              autoTime = cc.vv.gameData.GetAutoModelTime();
              0 == rest && autoTime <= 0 && (cc.find("Canvas/safe_node/node_energy/btn_juanzhou").getComponent(cc.Button).interactable = true);

             case 20:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(success) {
          _this2.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      stopSpinPlayMulti: function stopSpinPlayMulti() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this3._energyfreegame.spinEnd();

             case 2:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterEnergyGame: function enterEnergyGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                if (cc.vv.gameData.isEnterEnergyGame()) {
                  cc.log("\u8fdb\u5165\u80fd\u91cf\u6e38\u620f");
                  cc.find("Canvas/safe_node/node_energy").getComponent("LuckyCat_Energy").IsEnterEnergyGame();
                } else success();
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        if (cc.vv.gameData.isEnterEnergyGame()) return true;
        return false;
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (cc.vv.gameData.isTriggerNormalFree()) {
          this.Backup();
          for (var i = 0; i < 5; i++) {
            var sys = this._reels[i]._symbols;
            for (var j = 0; j < 3; j++) sys[j].playScatterAnimation(isplay);
          }
        }
      },
      playBottomWin: function playBottomWin() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                var gameinfo = cc.vv.gameData.getGameInfo();
                if (gameinfo.freeCnt != gameinfo.allFreeCnt && gameinfo.allFreeCnt > 0) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = false;
                }
                _this4.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
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
      CollectEnergy: function CollectEnergy() {
        if (cc.vv.gameData.isTriggerNormalFree()) return;
        var isupdate = false;
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 3; j++) {
            var id = sys[j].GetShowId();
            2 != id && 3 != id && 4 != id && 5 != id || (isupdate = true);
            sys[j].PlayCollectAction();
          }
        }
        isupdate && this.scheduleOnce(function() {
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
        }, 1);
      },
      scatterCollectGoldCoin: function scatterCollectGoldCoin() {},
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var res = false;
        if (this._gameInfo.allFreeCnt > 0 && this._gameInfo.freeCnt == this._gameInfo.allFreeCnt) return true;
        return res;
      },
      ShowReelEffect: function ShowReelEffect() {
        var self = this;
        var role = cc.find("spine_role", this.node);
        role.active = true;
        var roleSp = role.getComponent(sp.Skeleton);
        roleSp.setAnimation(0, "animation3", true);
        roleSp.addAnimation(0, "animation2", false, 3);
        var music = cc.find("reels_frame/node_eff/spine_music", this.node);
        music.active = true;
        var musicSp = music.getComponent(sp.Skeleton);
        musicSp.setAnimation(0, "animation", false);
        musicSp.setCompleteListener(function() {
          var kuang = cc.find("reels_frame/node_eff/spine_kuang", self.node);
          kuang.active = true;
          var kuangSp = kuang.getComponent(sp.Skeleton);
          kuangSp.setAnimation(0, "animation1", false);
          kuangSp.addAnimation(0, "animation2", false);
          kuangSp.addAnimation(0, "animation3", false);
          musicSp.setCompleteListener(null);
        });
      },
      ShowTranstion: function ShowTranstion(pEndCall) {
        var tranNode = cc.find("Canvas/safe_node/translate_node");
        tranNode.active = true;
        var ani = tranNode.getComponent(sp.Skeleton);
        ani.setAnimation(0, "animation", false);
        var delayCall = function delayCall() {
          pEndCall && pEndCall();
        };
        this.scheduleOnce(delayCall, .5);
      },
      ShowTranstionExit: function ShowTranstionExit() {
        var self = this;
        var endCall = function endCall() {
          var node = cc.find("Canvas/safe_node/wheel_node");
          node.active = false;
        };
        var delayCall = function delayCall() {
          var subData = cc.vv.gameData.GetSubGameData();
          if (1 == subData.awardType) {
            var add = subData.num;
            self.ShowBottomWin(add, add, true);
            self.CanDoNextRound();
          }
        };
        this.scheduleOnce(delayCall, 1);
      },
      OnEventWheelResult: function OnEventWheelResult(data) {
        var val = data.detail;
        var node_pop = cc.find("Canvas/safe_node/node_pop_ui");
        node_pop.active = true;
        var cmp = node_pop.getComponent("JalapanDelight_Pop");
        cmp.ShowWheelResult(val);
      },
      ReconnectShow: function ReconnectShow() {
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        rest > 0 && this._bottomScript.ShowFreeModel(true, rest, total);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LuckyCat_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d74edmV3i9F5oYacOpSP2dk", "LuckyCat_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this.SetText();
      },
      ShowBonus: function ShowBonus(bShow) {
        if (this._data) if (bShow) {
          this.SetText(this._data.num);
          this.ShowWin();
        } else this.SetText();
      },
      ShowMask: function ShowMask(bShow) {
        var mask = cc.find("mask", this.node);
        mask.active = bShow;
      },
      SetText: function SetText(num) {},
      PlayCollectAction: function PlayCollectAction() {
        var self = this;
        if (2 != this._id && 3 != this._id && 4 != this._id && 5 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var tongyongnode = cc.find("tongyongdi", this.node);
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        tongyongnode.active = true;
        wnode.active = true;
        tongyongnode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        wnode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        var flyNode = cc.instantiate(this.node);
        flyNode.active = false;
        var parentNode = cc.find("Canvas/safe_node");
        flyNode.parent = parentNode;
        var beiginPos = parentNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        flyNode.position = beiginPos;
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
          tongyongnode.active = false;
          wnode.active = false;
          flyNode.active = true;
          var targetNode = cc.find("Canvas/safe_node/node_energy/spr_left");
          var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
          cc.tween(flyNode).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(tarPos.x, beiginPos.y), cc.v2(tarPos.x, tarPos.y), {
            scale: .3
          }).call(function() {
            flyNode.destroy();
          }).start();
        })));
      },
      playScatterAnimation: function playScatterAnimation() {
        if (2 != this._id && 3 != this._id && 4 != this._id && 5 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        wnode.active = true;
        wnode.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
      },
      resetScatterShow: function resetScatterShow() {
        this.node.getChildByName("num").active = false;
        this.node.getChildByName("w10").active = false;
        this.node.getChildByName("w11").active = false;
        this.node.getChildByName("w12").active = false;
        this.node.getChildByName("w13").active = false;
      },
      showSymbolNumber: function showSymbolNumber(num) {
        var numnode = cc.find("num", this.node);
        numnode.active = true;
        numnode.getComponent(cc.Label).string = Global.formatNumShort(num);
      },
      playFreeCollectAction: function playFreeCollectAction() {
        var self = this;
        if (14 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var flyNode = cc.instantiate(this.node);
        var parentNode = cc.find("Canvas/safe_node");
        flyNode.parent = parentNode;
        var beiginPos = parentNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        flyNode.position = beiginPos;
        var wnode = cc.find(cfg.symbol[this._id].win_node, flyNode);
        wnode.active = true;
        var ske = wnode.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation1", false);
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
          var targetNode = cc.find("Canvas/safe_node/node_energy/spr_left");
          var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
          cc.tween(flyNode).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(tarPos.x, beiginPos.y), cc.v2(tarPos.x, tarPos.y), {
            scale: .3
          }).call(function() {
            flyNode.destroy();
          }).start();
        })));
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  LuckyCat_freeUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "287d0m6GZVPwoRQ5TkPNTuF", "LuckyCat_freeUI");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "LuckyCat_Asset", "LuckyCat_Bottom", "LuckyCat_ButtonSafe", "LuckyCat_Cfg", "LuckyCat_CoinBoom", "LuckyCat_Energy", "LuckyCat_Energy_FreeGame", "LuckyCat_FreeGame", "LuckyCat_GameData", "LuckyCat_Logic", "LuckyCat_Map", "LuckyCat_Pop", "LuckyCat_Reel", "LuckyCat_Slots", "LuckyCat_Symbol", "LuckyCat_freeUI" ]);