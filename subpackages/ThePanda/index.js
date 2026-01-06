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
  ThePanda_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5b6aDTABpMM6PPN+qEGHRC", "ThePanda_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      OnClickSpin: function OnClickSpin() {
        var slots = cc.vv.gameData.GetSlotsScript();
        var res = this._CheckCoinEnough();
        res && slots.onSpin();
        this._super();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._bStartRound = false;
        this.ShowBtnsByState("idle");
        this._checkForsePoptips();
        var selectdata = cc.vv.gameData.GetSelectData();
        var bonusdata = cc.vv.gameData.GetBounusData();
        if (bonusdata.state || selectdata.state) {
          this.SendSpinReq();
          return;
        }
        var autoTime = cc.vv.gameData.GetAutoModelTime();
        if (autoTime > 0) {
          var cfg = cc.vv.gameData.getGameCfg();
          this.scheduleOnce(this.DoAutoSpine.bind(this), cfg.autoModelDelay);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  ThePanda_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eba2a8S559PEZWEzQFFslVi", "ThePanda_Cfg");
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
        node: "s1",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s1",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s1",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s1",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s1",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s1",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 8, {
        node: "s1",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 9, {
        node: "null",
        win_node: "",
        win_ani: ""
      }), _symbol),
      shadowSymbolNode: "s2",
      puzzleCfg: {
        atlas: "puzzle_14",
        bg: "theme_store_puzzle14_bg",
        full: "theme_store_puzzle14_full",
        pieces: [ "theme_store_puzzle_14_1", "theme_store_puzzle_14_2", "theme_store_puzzle_14_3", "theme_store_puzzle_14_4", "theme_store_puzzle_14_5", "theme_store_puzzle_14_6", "theme_store_puzzle_14_7", "theme_store_puzzle_14_8", "theme_store_puzzle_14_9", "theme_store_puzzle_14_10", "theme_store_puzzle_14_11", "theme_store_puzzle_14_12" ]
      },
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "ThePanda_Bottom",
        Slots: "ThePanda_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "ThePanda_Symbol"
      },
      col: 5,
      row: 4,
      randomSymbols: [ 2, 3, 4, 5, 6, 7 ],
      scatterId: 1,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 150,
        height: 85
      },
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      normalBgm: "base_bgm",
      winningBox: [ [ "sp1", "sp2", "sp3", "sp4", "sp5", "sp6" ], [ "sp4", "sp7", "sp8", "sp9", "sp10", "sp11" ], [ "sp12", "sp13", "sp6", "sp14", "sp15", "sp16" ], [ "sp14", "sp5", "sp11", "sp17", "sp18", "sp19" ], [ "sp17", "sp10", "sp20", "sp21", "sp22", "sp23" ], [ "sp24", "sp25", "sp16", "sp26", "sp27", "sp28" ], [ "sp26", "sp15", "sp19", "sp29", "sp30", "sp31" ], [ "sp29", "sp18", "sp23", "sp32", "sp33", "sp34" ], [ "sp32", "sp22", "sp35", "sp36", "sp37", "sp38" ], [ "sp39", "sp27", "sp31", "sp40", "sp41", "sp42" ], [ "sp40", "sp30", "sp34", "sp43", "sp44", "sp45" ], [ "sp43", "sp33", "sp38", "sp46", "sp47", "sp48" ], [ "sp49", "sp41", "sp45", "sp50", "sp51", "sp52" ], [ "sp50", "sp44", "sp48", "sp53", "sp54", "sp55" ] ],
      commEffect: {
        path: "games/ThePanda/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      helpItems: [ "games/ThePanda/prefab/Panda_Help_item1", "games/ThePanda/prefab/Panda_Help_item2", "games/ThePanda/prefab/Panda_Help_item3", "games/ThePanda/prefab/Panda_Help_item4", "games/ThePanda/prefab/Panda_Help_item5" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  ThePanda_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf467y3zE1EX5NSw9K8p3ad", "ThePanda_FreeGame");
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
        _nextStep: cc.callFunc,
        _maxBetEnterBonus: 13,
        _isReConnect: false
      },
      onLoad: function onLoad() {
        this._startSpine = cc.find("safe_node/screenspine/startfree", this.node);
        this._pressStartSpine = cc.find("safe_node/freeui/pressstart/sp", this.node);
        this._collectSpine = cc.find("safe_node/freeui/collectsp", this.node);
        this._collectResultSp = cc.find("safe_node/freeui/collectresultsp", this.node);
        this._pressNode = cc.find("safe_node/freeui/pressstart", this.node);
        this._pressNode.on(cc.Node.EventType.TOUCH_END, this.onPressStart, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onChangeBetValue, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      reConnectShowPressStart: function reConnectShowPressStart() {
        var _this = this;
        var delay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._isReConnect = 1 == delay;
        this.scheduleOnce(function() {
          _this._pressNode.active = true;
          _this._pressStartSpine.scale = 1;
          Global.playHSEffect("bonus_start");
          _this.showFreeGameUI(true);
          cc.vv.gameData.playSpine(_this._pressStartSpine, "animation1", false, function() {
            _this._pressShow = true;
            cc.vv.gameData.playSpine(_this._pressStartSpine, "animation2", true, null);
          });
          cc.vv.gameData.checkAutoPlay(_this._pressNode, function() {
            if (!_this._pressShow) return;
            _this._pressShow = false;
            Global.playHSEffect("button_start");
            cc.tween(_this._pressStartSpine).to(.5, {
              scale: 0
            }, {
              easing: "backInOut"
            }).call(function() {
              _this._pressNode.active = false;
              _this.scheduleOnce(function() {
                _this.sendEnterFreeeGame();
              }, .5);
            }).start();
          });
        }, delay);
      },
      enterFreeGame: function enterFreeGame(symbols, isCollectGame) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                _this2._nextStep = success;
                _this2._symbolScript = symbols;
                var select = cc.vv.gameData.GetSelectData();
                if (select.state || isCollectGame) {
                  AppLog.log("#####\u8fdb\u5165\u514d\u8d39");
                  _this2.playEnterFreeAni(function() {
                    _this2.updateFreeGame(true);
                  });
                  _this2.scheduleOnce(function() {
                    _this2.showFreeGameUI(true);
                    _this2._symbolScript && _this2._symbolScript.forEach(function(syb) {
                      syb.enterBonusGame();
                    });
                  }, .3);
                } else {
                  var bonusdata = cc.vv.gameData.GetBounusData();
                  if (bonusdata.state) {
                    var isadd = _this2.isAddCoin(bonusdata.data);
                    _this2.updateFreeGame(false, isadd);
                  } else success();
                }
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      isAddCoin: function isAddCoin(data) {
        for (var key in data) if (data[key].addpool > 0 || data[key].addcoin > 0) return true;
        return false;
      },
      updateFreeGame: function updateFreeGame(istigger, isadd) {
        var _this3 = this;
        this.scheduleOnce(function() {
          _this3._symbolScript && _this3._symbolScript.forEach(function(syb) {
            syb.moveCoinOrJackpot();
          });
        }, .5);
        if (istigger) this.reConnectShowPressStart(3); else {
          var delay = isadd ? 3 : .5;
          this.scheduleOnce(function() {
            if (_this3._nextStep) {
              _this3._nextStep();
              _this3._nextStep = null;
            }
          }, delay);
        }
      },
      freeGameOver: function freeGameOver(symbols) {
        var timesnode = cc.find("safe_node/slots/descui/freetimes", this.node);
        cc.tween(timesnode).to(1, {
          opacity: 0
        }).call(function() {
          timesnode.active = false;
          timesnode.opacity = 255;
          cc.find("Canvas/safe_node/LMSlots_Collect_Puzzle").active = true;
        }).start();
        this.playCollectCoin(symbols);
      },
      playEnterFreeAni: function playEnterFreeAni(callback) {
        Global.playHSEffect("bonus_transiton");
        cc.vv.gameData.playSpine(this._startSpine, "animation", false, function() {
          callback && callback();
        });
      },
      onPressStart: function onPressStart() {
        var _this4 = this;
        if (!this._pressShow) return;
        this._pressShow = false;
        this._pressNode.stopAllActions();
        Global.playHSEffect("button_start");
        cc.tween(this._pressStartSpine).to(.5, {
          scale: 0
        }, {
          easing: "backInOut"
        }).call(function() {
          _this4._pressNode.active = false;
          _this4.scheduleOnce(function() {
            _this4.sendEnterFreeeGame();
          }, .5);
        }).start();
      },
      showFreeGameUI: function showFreeGameUI(isshow) {
        var count = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        isshow ? Global.SlotsSoundMgr.playBgm("bonus_bgm") : Global.SlotsSoundMgr.stopBgm();
        this.changeBg(isshow);
        cc.find("safe_node/slots/descui/desc1", this.node).active = !isshow;
        cc.find("safe_node/slots/descui/freetimes", this.node).active = isshow;
        this.updateFreetimes(count, true);
      },
      updateFreetimes: function updateFreetimes(count) {
        var isinit = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        var spr = cc.find("safe_node/slots/descui/freetimes/freecount", this.node);
        spr.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme132_cnt" + count);
        if (3 == count && !isinit) {
          var respin = cc.find("safe_node/slots/descui/freetimes/respin", this.node);
          respin.active = true;
          cc.vv.gameData.playSpine(respin, "animation", false, null);
        }
      },
      playCollectCoin: function playCollectCoin(symbols) {
        this._collectSpine.active = true;
        var index = 0;
        var curtotal = 0;
        var safenode = cc.find("safe_node", this.node);
        var winnode = cc.vv.gameData.GetBottomScript().getWinLabelNor();
        this._collectResultSp.position = safenode.convertToNodeSpaceAR(winnode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var self = this;
        var flyAnimation = function flyAnimation() {
          if (index >= symbols.length) {
            AppLog.log("###\u9000\u51fa\u6536\u96c6");
            self.scheduleOnce(function() {
              self.playEnterFreeAni(function() {
                cc.vv.gameData.GetBottomScript().SetWin(0);
                self.collectOverHandle();
              });
              self.scheduleOnce(function() {
                cc.vv.gameData.GetSlotsScript().resetEnterFreeCards();
                self.showFreeGameUI(false);
              }, .5);
            }, 1);
            return;
          }
          var symboldata = self.getBonusDataByindex(index + 1);
          if (symboldata) {
            var symbolnode = symbols[index].node;
            if (symboldata.pool > 0) if (cc.find("topbag", symbolnode).active) {
              var tobgnode = cc.find("topbag/spine", symbolnode);
              cc.vv.gameData.playSpine(tobgnode, "animation", false, null);
              var jackpotcoin = cc.vv.gameData.getPoolbyType(symboldata.pool);
              curtotal += jackpotcoin;
              self.scheduleOnce(function() {
                self.collectChangeFrameColor(cc.find("topbag", symbolnode));
                self.showJackpotCollectUI(symboldata.pool, jackpotcoin);
              }, .5);
              self.scheduleOnce(function() {
                cc.vv.gameData.GetBottomScript().SetWin(curtotal);
                cc.vv.gameData.clearBonusDataPool(index + 1);
                flyAnimation();
              }, 6);
            } else flyAnimation(); else if (symboldata.coin > 0) {
              if (cc.find("bottombg", symbolnode).active) {
                var bbgnode = cc.find("bottombg/spine", symbolnode);
                cc.vv.gameData.playSpine(bbgnode, "animation", false, null);
                var startpos = safenode.convertToNodeSpaceAR(bbgnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                var endpos = safenode.convertToNodeSpaceAR(winnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                self._collectSpine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                var v = cc.v2(endpos.x, endpos.y).sub(cc.v2(startpos.x, startpos.y));
                var length = v.mag();
                self._collectSpine.scale = length / 460;
                var angle = v.signAngle(cc.v2(1, 0));
                self._collectSpine.angle = -angle * cc.macro.DEG + 90;
                self._collectSpine.position = startpos;
                curtotal += symboldata.coin;
                Global.playHSEffect("bonus_hit");
                self.collectChangeFrameColor(cc.find("bottombg", symbolnode));
                self.scheduleOnce(function() {
                  self._collectResultSp.active = true;
                  self._collectResultSp.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                  cc.vv.gameData.GetBottomScript().SetWin(curtotal);
                }, .5);
              }
              index++;
              self.scheduleOnce(function() {
                flyAnimation();
              }, 1);
            } else {
              index++;
              flyAnimation();
            }
          } else {
            index++;
            flyAnimation();
          }
        };
        flyAnimation();
      },
      showJackpotCollectUI: function showJackpotCollectUI(pool, jackpotcoin) {
        var jackpotui = cc.find("safe_node/freeui/jackpotui", this.node);
        var mainnode = cc.find("mainnode", jackpotui);
        var framenode = cc.find("framebg", mainnode);
        var descnode = cc.find("bottomdesc", mainnode);
        var headnode;
        for (var i = 1; i < 5; i++) if (pool == i) {
          headnode = cc.find("head" + i, mainnode);
          headnode.active = true;
        } else cc.find("head" + i, mainnode).active = false;
        var atlas = cc.vv.gameData.GetAtlasByName("dialog1");
        var spr = cc.find("bg", mainnode);
        var spname = this.getJackputUIBgSpritename(pool);
        spr.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(spname);
        jackpotui.active = true;
        mainnode.scale = 0;
        descnode.scale = 0;
        headnode.scale = 0;
        framenode.scale = 0;
        Global.playHSEffect("bonus_collect");
        cc.tween(mainnode).to(.4, {
          scale: 1
        }, {
          easing: "backInOut"
        }).call(function() {
          cc.tween(headnode).to(.3, {
            scale: 1
          }, {
            easing: "backInOut"
          }).start();
          cc.tween(framenode).to(.6, {
            scale: 1
          }, {
            easing: "backInOut"
          }).call(function() {
            var lblcoin = cc.find("mainnode/framebg/totalnum", jackpotui);
            Global.doRoallNumEff(lblcoin, 0, jackpotcoin, 1, function() {
              Global.playHSEffect("bonus_end");
            }, null, 0, true);
          }).start();
          cc.tween(descnode).to(.3, {
            scale: 1
          }, {
            easing: "backInOut"
          }).start();
        }).start();
        this.scheduleOnce(function() {
          cc.tween(mainnode).to(.5, {
            scale: 0
          }).call(function() {
            jackpotui.active = false;
          }).start();
        }, 5);
      },
      getJackputUIBgSpritename: function getJackputUIBgSpritename(pool) {
        switch (pool) {
         case 1:
          return "theme132_dialog_bg4";

         case 2:
          return "theme132_dialog_bg3";

         case 3:
          return "theme132_dialog_bg4";

         case 4:
          return "theme132_dialog_bg1";
        }
      },
      collectChangeFrameColor: function collectChangeFrameColor(bgnode) {
        bgnode.color = cc.color(64, 91, 255);
      },
      collectOverHandle: function collectOverHandle() {
        cc.vv.gameData.GetSlotsScript().freeOverHideObj();
        cc.vv.gameData.clearBonusState();
      },
      getBonusDataByindex: function getBonusDataByindex(index) {
        var bonusdata = cc.vv.gameData.GetBounusData().data;
        for (var key in bonusdata) if (bonusdata[key].idx == index) return bonusdata[key];
        return null;
      },
      getRotationAngle: function getRotationAngle(pos) {
        switch (pos) {
         case 1:
          return -12;

         case 7:
          return -18;

         case 13:
          return -35;

         case 2:
         case 8:
          return -2;

         case 14:
          return -3;

         case 3:
          return -20;

         case 4:
          return -10;

         case 10:
          return -35;

         case 5:
          return 5;

         case 12:
          return 10;

         case 6:
          return -33;

         case 9:
          return 15;

         case 11:
          return -15;
        }
        return 0;
      },
      changeLightAngleAndScale: function changeLightAngleAndScale(startNode, endNode, signAngleStandard, dir, offsetAngle, size) {
        var endPos = endNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var startPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var dx = endPos.x - startPos.x;
        var dy = endPos.y - startPos.y;
        var dPos = cc.v2(dx, dy);
        var angle = dPos.signAngle(cc.v2(0, 1));
        var degree = angle / Math.PI * 180;
        startNode.angle = degree * dir + offsetAngle;
        var dis = Math.abs(dPos.mag());
        startNode.scale = dis / size;
      },
      getScaleMul: function getScaleMul(from, to) {
        var v = cc.v2(to.x, to.y).sub(cc.v2(from.x, from.y));
        var length = v.mag();
        this._flash.scale = length / 220;
        var angle = v.signAngle(cc.v2(1, 0));
        this._flash.angle = -angle * cc.macro.DEG - 90;
        this._flash.position = from;
        switch (pos) {
         case 1:
         case 2:
          return 1.5;

         case 3:
         case 4:
         case 5:
          return 1.3;

         case 6:
         case 7:
         case 8:
         case 9:
          return 1.1;

         case 10:
         case 11:
         case 12:
          return .75;

         case 13:
         case 14:
          return .45;
        }
        return 1;
      },
      onChangeBetValue: function onChangeBetValue(data) {
        var descnode = cc.find("safe_node/slots/descui/desc1", this.node);
        if (!descnode.active) return;
        var changespine = cc.find("safe_node/slots/descui/desc1/changespine", this.node);
        var betIdx = cc.vv.gameData.GetBetIdx();
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        var spr = cc.find("num", descnode);
        if (betIdx < this._maxBetEnterBonus) {
          if (6 != cc.vv.gameData.getNeedBonusIconNum()) {
            Global.playHSEffect("board_change");
            cc.vv.gameData.playSpine(changespine, "animation", false, null);
            cc.vv.gameData.setBonusIconNum(6);
            spr.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme132_tip2");
          }
        } else if (5 != cc.vv.gameData.getNeedBonusIconNum()) {
          Global.playHSEffect("board_change");
          cc.vv.gameData.playSpine(changespine, "animation", false, null);
          cc.vv.gameData.setBonusIconNum(5);
          spr.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme132_tip1");
        }
      },
      changeBg: function changeBg(isfree) {
        var bgCmp = cc.find("safe_node/bg", this.node).getComponent("ImgSwitchCmp");
        isfree ? bgCmp.setIndex(1) : bgCmp.setIndex(0);
      },
      sendEnterFreeeGame: function sendEnterFreeeGame() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = 1;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 == msg.code) if (20 == msg.data.rtype) ; else if (1 == msg.data.rtype) {
          if (cc.vv.gameData.GetCollectGame() && null == msg.data.chipGame) {
            cc.vv.gameData.GetBottomScript().SendSpinReq();
            cc.vv.gameData.SetCollectGame(false);
            return;
          }
          var selectdata = cc.vv.gameData.GetSelectData();
          if (this._isReConnect && selectdata.state) {
            cc.vv.gameData.GetSlotsScript().autoStartSpin();
            this._isReConnect = false;
          } else if (this._nextStep) {
            this._nextStep();
            this._nextStep = null;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePanda_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ad16Sx+AhDjY+NsMLubJ5K", "ThePanda_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _needBonusNum: 6,
        _isCollectGame: false
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._bonusData = this._deskInfo.bonusData;
        this._selectData = this._deskInfo.select;
        this._poolList = this._bonusData.poolList;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusData = msg.bonusData;
          this._selectData = msg.select;
          this._bonusData && (this._poolList = this._bonusData.poolList);
          this._super(msg);
        }
      },
      getPoolbyType: function getPoolbyType(type) {
        if (this._poolList) return this._poolList[type - 1];
        return 0;
      },
      GetBounusData: function GetBounusData() {
        return this._bonusData;
      },
      clearBonusState: function clearBonusState() {
        this._bonusData.state = false;
      },
      GetSelectData: function GetSelectData() {
        return this._selectData;
      },
      clearSelectState: function clearSelectState() {
        this._selectData.state = false;
      },
      SetGameScript: function SetGameScript(fgame) {
        this._freeGame = fgame;
      },
      GetFreeGameScript: function GetFreeGameScript() {
        return this._freeGame;
      },
      SetCollectGame: function SetCollectGame(isCollectGame) {
        this._isCollectGame = isCollectGame;
      },
      GetCollectGame: function GetCollectGame() {
        return this._isCollectGame;
      },
      isFreeGame: function isFreeGame() {
        return this._bonusData.state;
      },
      getNeedBonusIconNum: function getNeedBonusIconNum() {
        return this._needBonusNum;
      },
      setBonusIconNum: function setBonusIconNum(num) {
        this._needBonusNum = num;
      },
      clearBonusDataPool: function clearBonusDataPool(index) {
        var bonusdata = this._bonusData.data;
        for (var key in bonusdata) if (bonusdata[key].idx == index) {
          bonusdata[key].pool = 0;
          break;
        }
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  ThePanda_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c13f0T33BVE9IyL+ffFNJ+S", "ThePanda_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        Global.playHSMusic = function(fn, loop) {
          cc.vv.AudioManager.playBgm("games/ThePanda/", fn, true, loop);
        };
        Global.playHSEffect = function(fn, loop, callback, volume) {
          cc.vv.AudioManager.playEff("games/ThePanda/", fn, true, loop, callback, volume);
        };
        Global.stopHSEffect = function(fn) {
          cc.vv.AudioManager.stopEffectByName(fn);
        };
        var script_freegame = this.node.addComponent("ThePanda_FreeGame");
        cc.vv.gameData.SetGameScript(script_freegame);
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  ThePanda_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81c34eqeBdG1q6RAXPpSL3T", "ThePanda_Slots");
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
        _symbolCount: 14,
        _symbols: [],
        _stopAutoShowSymbol: false,
        _enterCards: [],
        _reverseSpeed: .2
      },
      Init: function Init() {
        var _this = this;
        var self = this;
        this._enterCards = [ 3, 2, 3, 4, 5, 6, 7, 2, 3, 4, 7, 2, 4, 7 ];
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this.createSymbol();
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.ReconnectShow();
        this.node.parent.parent.getComponent("LMSlots_Puzzle").setCallback(function(freeInfo, chipGame) {
          console.log("---1\u6536\u96c6\u6e38\u620f\u7684callback\u903b\u8f91");
          if (_this._gameInfo) {
            _this._enterCards = _this._gameInfo.resultCards;
            _this._enterBonusData = _this._gameInfo.bonusData;
          } else {
            _this._enterCards = [];
            _this._enterBonusData = cc.vv.gameData.GetBounusData();
          }
          _this._enterBonusData.data = [];
          cc.vv.gameData.SetCollectGame(true);
          cc.vv.gameData.GetFreeGameScript().enterFreeGame(null, true);
          for (var i = 0; i < _this._symbols.length; i++) _this._symbols[i].enterCollectGame();
          _this.hideSymbols();
        });
      },
      ReconnectShow: function ReconnectShow() {
        var selectdata = cc.vv.gameData.GetSelectData();
        var bonusdata = cc.vv.gameData.GetBounusData();
        if (selectdata.state || bonusdata.state) {
          for (var i = 0; i < this._symbols.length; i++) {
            var data = this.GetCoinData(i + 1);
            this._symbols[i].initShowSymbol(bonusdata.cards[i], data.pool, data.coin, selectdata.state);
          }
          if (selectdata.state) cc.vv.gameData.GetFreeGameScript().reConnectShowPressStart(); else {
            cc.vv.gameData.GetFreeGameScript().showFreeGameUI(true, bonusdata.num);
            this.autoStartSpin();
          }
        }
      },
      autoStartSpin: function autoStartSpin() {
        var _this2 = this;
        this.scheduleOnce(function() {
          _this2.hideSymbols();
        }, .5);
        this.scheduleOnce(function() {
          _this2.CanDoNextRound();
        }, 1);
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusdata, selectdata;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3._gameInfo = msg;
              if (msg.select && msg.select.state) {
                _this3._enterCards = msg.resultCards;
                _this3._enterBonusData = msg.bonusData;
              }
              _this3._stopAutoShowSymbol = false;
              _context.next = 5;
              return _this3.startReverseCards(_this3._gameInfo.bonusData);

             case 5:
              _this3._stopTime = -1;
              bonusdata = cc.vv.gameData.GetBounusData();
              selectdata = cc.vv.gameData.GetSelectData();
              selectdata.state && Global.playHSEffect("bell");
              if (!(!bonusdata.state && !selectdata.state)) {
                _context.next = 13;
                break;
              }
              _this3.ShowWinTrace();
              _context.next = 13;
              return _this3.playBottomWin();

             case 13:
              _context.next = 15;
              return cc.vv.gameData.GetFreeGameScript().enterFreeGame(_this3._symbols);

             case 15:
              _context.next = 17;
              return _this3.spineOver();

             case 17:
              _this3.CanDoNextRound();

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      spineOver: function spineOver() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                _this4._nextStep = success;
                var bonusdata = cc.vv.gameData.GetBounusData();
                if (bonusdata && bonusdata.state) {
                  AppLog.log("####\u65cb\u8f6c\u7ed3\u675f:" + bonusdata.num);
                  if (bonusdata.num > 0) {
                    _this4.onSpin();
                    _this4.scheduleOnce(function() {
                      success();
                    }, 1);
                  } else cc.vv.gameData.GetFreeGameScript().freeGameOver(_this4._symbols);
                } else {
                  var selectdata = cc.vv.gameData.GetSelectData();
                  selectdata.state && _this4.onSpin();
                  _this4.scheduleOnce(function() {
                    success();
                  }, .5);
                }
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playBottomWin: function playBottomWin() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                var bonusdata = cc.vv.gameData.GetBounusData();
                var selectdata = cc.vv.gameData.GetSelectData();
                if (selectdata.state || bonusdata.state) {
                  nTotal = bonusdata.coin;
                  updateAllCoin = true;
                }
                _this5.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      StopMove: function StopMove() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this6._super();
              AppLog.log("###\u70b9\u51fb\u505c\u6b62\u79fb\u52a8");
              _this6._stopAutoShowSymbol = true;

             case 3:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onSpin: function onSpin() {
        this.hideSymbols();
      },
      hideSymbols: function hideSymbols() {
        Global.playHSEffect("reel_change");
        for (var i = 0; i < this._symbols.length; i++) this._symbols[i].spineHideSymbol();
        var bonusdata = cc.vv.gameData.GetBounusData();
        if (bonusdata.state) cc.vv.gameData.GetFreeGameScript().updateFreetimes(bonusdata.num - 1); else {
          this.hideAllWinningBox();
          var select = cc.vv.gameData.GetSelectData();
          select && select.state && cc.vv.gameData.GetFreeGameScript().updateFreetimes(2);
        }
      },
      startReverseCards: function startReverseCards(bonusdata) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return _this7.startShowCards();

             case 2:
              if (bonusdata.state) {
                _this7.showNewCoinKuangGuang();
                cc.vv.gameData.GetFreeGameScript().updateFreetimes(bonusdata.num);
              }
              bonusdata.state && 0 == bonusdata.num && Global.playHSEffect("bouns_play_end");
              _context5.next = 6;
              return _this7.awaitTime(.5);

             case 6:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showNewCoinKuangGuang: function showNewCoinKuangGuang() {
        for (var i = 0; i < this._symbols.length; i++) this._symbols[i].newCoinShowKuang();
      },
      startShowCards: function startShowCards() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function(success) {
                var cards = _this8._gameInfo.resultCards;
                var index = 0;
                var self = _this8;
                var coincount = 0;
                _this8._reverseSpeed = .2;
                var showcards = function showcards() {
                  for (var i = 0; i < self._symbols.length; i++) {
                    self.showSymbols(self._symbols[i], cards[i], i + 1);
                    self._symbols[i].coinSpeedLightShow(false);
                  }
                };
                var bonusnum = cc.vv.gameData.getNeedBonusIconNum() - 1;
                var autoshowcards = function autoshowcards() {
                  if (self._symbols[index]) {
                    if (8 == cards[index]) {
                      coincount++;
                      coincount >= bonusnum ? Global.playHSEffect("bonus_land_3") : cc.vv.gameData.isFreeGame() ? Global.playHSEffect("bonus_land_2") : Global.playHSEffect("bonus_land_1");
                    } else Global.playHSEffect("reel_stop");
                    var bonusdata = cc.vv.gameData.GetBounusData();
                    if (coincount >= bonusnum && !bonusdata.state) {
                      self._reverseSpeed = 1.2;
                      self._symbols.length > index + 1 && self._symbols[index + 1].coinSpeedLightShow(true);
                    }
                    self._symbols[index].coinSpeedLightShow(false);
                    self.showSymbols(self._symbols[index], cards[index], index + 1);
                    index++;
                    self.scheduleOnce(function() {
                      if (self._stopAutoShowSymbol) {
                        showcards();
                        success();
                      } else autoshowcards();
                    }, self._reverseSpeed);
                  } else success();
                };
                autoshowcards();
              }));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showSymbols: function showSymbols(symscript, id, index) {
        var data = this.GetCoinData(index);
        symscript.reverseSymbol(id, data);
      },
      GetCoinData: function GetCoinData(index) {
        var bonusdata = cc.vv.gameData.GetBounusData().data;
        if (bonusdata) for (var key in bonusdata) if (bonusdata[key].idx == index) return bonusdata[key];
        return 0;
      },
      createSymbol: function createSymbol() {
        var symbol = this._cfg.scripts.Symbols;
        for (var idx = 0; idx < this._symbolCount; idx++) {
          var node = cc.find("reels/Panda_Symbol" + (idx + 1), this.node);
          var scp = node.addComponent(symbol);
          scp.Init(idx);
          this._symbols.push(scp);
        }
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
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          symbol && symbol.playWinAnimation();
        }
        this.showWinningBox(allWinIdx);
      },
      showWinningBox: function showWinningBox(allwinidx) {
        var boxcfg = cc.vv.gameData.getGameCfg().winningBox;
        var winbox = {};
        for (var idx in allwinidx) {
          var box = boxcfg[idx - 1];
          box.forEach(function(name) {
            winbox[name] ? winbox[name] += 1 : winbox[name] = 1;
          });
        }
        var framenode = cc.find("node_frame", this.node);
        for (var key in winbox) 1 == winbox[key] && (framenode.getChildByName(key).active = true);
      },
      hideAllWinningBox: function hideAllWinningBox() {
        var framenode = cc.find("node_frame", this.node);
        var children = framenode.children;
        for (var i = 0, count = children.length; i < count; i++) children[i].active = false;
      },
      freeOverHideObj: function freeOverHideObj() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this9.hideAllWinningBox();
              _context7.next = 3;
              return _this9.playBottomWin();

             case 3:
              _this9._nextStep && _this9._nextStep();

             case 4:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        return this._symbols[idx - 1];
      },
      resetEnterFreeCards: function resetEnterFreeCards() {
        for (var i = 0; i < this._symbols.length; i++) {
          var data = this.GetEnterBonusData(i + 1);
          this._symbols[i].resetEnterFreeSymbol(this._enterCards[i], data);
        }
      },
      GetEnterBonusData: function GetEnterBonusData(index) {
        if (this._enterBonusData && this._enterBonusData.data) {
          var data = this._enterBonusData.data;
          for (var key in data) if (data[key].idx == index) return data[key];
        }
        return 0;
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(success) {
          _this10.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  ThePanda_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "338ea0OCHFMAbXdqbuvnjbe", "ThePanda_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        totalCoin: 0,
        pool: 0,
        showtype: 0
      },
      onLoad: function onLoad() {
        this._num = cc.find("num", this.node);
        this._jackpot = cc.find("getjackpot", this.node);
        this._bottom = cc.find("bottombg", this.node);
        this._top = cc.find("topbag", this.node);
        this._kuangguang = cc.find("kuang_guang", this.node);
        this._kuang = cc.find("kuang", this.node);
        this._numscalesp = cc.find("numscalesp", this.node);
        this._nummovebtsp = cc.find("nummovebtsp", this.node);
        this._freeSymbolName = cc.vv.gameData.getGameCfg().shadowSymbolNode;
      },
      initShowSymbol: function initShowSymbol(id, pool, coin, selectstate) {
        this._id = id;
        this._pool = pool;
        this._showNode = cc.find(this._freeSymbolName, this.node);
        this.playSymbolAni(1);
        (pool || coin) && (this._kuang.active = true);
        if (pool) {
          this.resetFrameColor(this._top);
          var jackimg = cc.find("jackpotimg", this._top);
          this.updateJackpotImg(jackimg, "base", "theme132_s_top" + (28 + pool));
        }
        if (coin) {
          this.resetFrameColor(this._bottom);
          cc.find("totalnum", this._bottom).getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 0);
        }
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        this._id = cfg.randomSymbols[randIdx - 1];
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          this._showNode = cc.find(cfg.symbol[this._id].node, this.node);
          this.playSymbolAni(1);
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + this._id);
      },
      reverseSymbol: function reverseSymbol(id, data) {
        var _this = this;
        this._id = id;
        this.playSymbolAni(3);
        if (8 == this._id) {
          this.showKuang();
          this.scheduleOnce(function() {
            _this.showCoinNum(data.addcoin, data.addpool);
          }, .2);
        } else this.showtype = 0;
      },
      showCoinNum: function showCoinNum(addnum, pool) {
        var playsound = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (addnum > 0) {
          this.showtype = 1;
          this.totalCoin += addnum;
          this._jackpot.active = false;
          this._num.active = true;
          this._num.getComponent(cc.Label).string = Global.convertNumToShort(addnum, 1e3, 0);
          this._num.scaleY = 0;
          cc.tween(this._num).to(.2, {
            scaleY: 1
          }).start();
        } else if (pool > 0) {
          this.showtype = 2;
          this.pool = pool;
          this._num.active = false;
          this._jackpot.active = true;
          this.updateJackpotImg(this._jackpot, "symbol", "theme132_s_" + (28 + pool));
          this._jackpot.scaleY = 0;
          cc.tween(this._jackpot).to(.2, {
            scaleY: 1
          }).start();
        } else playsound && cc.vv.gameData.isFreeGame() && Global.playHSEffect("bonus_land_3");
      },
      playSymbolAni: function playSymbolAni(type) {
        if (this._showNode && this._state != type) {
          this._showNode.active = true;
          var ske = this._showNode.getComponent(sp.Skeleton);
          var aniname = 8 == this._id ? "animationj_" + type : "animation" + this._id + "_" + type;
          ske.setAnimation(0, aniname, false);
          this._state = type;
        }
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (1 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        if (isplay) {
          wnode.active = true;
          wnode.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        } else wnode.active = false;
      },
      spineHideSymbol: function spineHideSymbol() {
        var bonusdata = cc.vv.gameData.GetBounusData();
        var selectdata = cc.vv.gameData.GetSelectData();
        bonusdata.state || selectdata.state ? cc.find("s1", this.node).active = false : this.hideOtherNode();
        this.playSymbolAni(2);
      },
      hideOtherNode: function hideOtherNode() {
        var children = this.node.children;
        for (var i = 0, count = children.length; i < count; i++) "s1" != children[i].name && (children[i].active = false);
        this.clearData();
      },
      enterBonusGame: function enterBonusGame() {
        8 == this._id && (this._kuang.active = true);
        this._showNode.active = false;
        this._showNode = cc.find(this._freeSymbolName, this.node);
        this.playSymbolAni(1);
      },
      enterCollectGame: function enterCollectGame() {
        this._kuang.active = false;
        this.totalCoin = 0;
        this._showNode = cc.find(this._freeSymbolName, this.node);
        this._showNode.active = true;
      },
      moveCoinOrJackpot: function moveCoinOrJackpot() {
        1 == this.showtype ? this.moveCoinToBottom() : 2 == this.showtype && this.moveJackpotToTop();
      },
      moveCoinToBottom: function moveCoinToBottom() {
        var _this2 = this;
        var instnode = cc.instantiate(this._num);
        instnode.parent = this.node;
        this._num.getComponent(cc.Label).string = "";
        var targetpos = this._bottom.position;
        cc.tween(instnode).to(.3, {
          scale: 0
        }).call(function() {
          cc.vv.gameData.playSpine(_this2._numscalesp, "animation", false, null);
          Global.playHSEffect("bonus_collect");
          _this2.resetFrameColor(_this2._bottom);
          cc.tween(instnode).to(1, {
            scale: 1
          }, {
            easing: "backInOut"
          }).call(function() {
            cc.vv.gameData.playSpine(_this2._nummovebtsp, "animation1", false, null);
            cc.tween(instnode).to(1, {
              position: targetpos,
              scale: 0
            }, {
              easing: "backInOut"
            }).call(function() {
              instnode.destroy();
              cc.find("totalnum", _this2._bottom).getComponent(cc.Label).string = Global.convertNumToShort(_this2.totalCoin, 1e3, 0);
            }).start();
          }).start();
        }).start();
      },
      moveJackpotToTop: function moveJackpotToTop() {
        var _this3 = this;
        var instnode = cc.instantiate(this._jackpot);
        instnode.parent = this.node;
        this._jackpot.active = false;
        var targetpos = this._top.position;
        cc.tween(instnode).to(.3, {
          scale: 0
        }).call(function() {
          cc.vv.gameData.playSpine(_this3._numscalesp, "animation", false, null);
          Global.playHSEffect("bonus_collect");
          _this3.resetFrameColor(_this3._top);
          cc.tween(instnode).to(1, {
            scale: 1
          }, {
            easing: "backInOut"
          }).call(function() {
            cc.vv.gameData.playSpine(_this3._nummovebtsp, "animation2", false, null);
            cc.tween(instnode).to(1, {
              position: targetpos,
              scale: 0
            }, {
              easing: "backInOut"
            }).call(function() {
              instnode.destroy();
              var jackimg = cc.find("jackpotimg", _this3._top);
              jackimg.active = true;
              _this3.updateJackpotImg(jackimg, "base", "theme132_s_top" + (28 + _this3.pool));
            }).start();
          }).start();
        }).start();
      },
      updateJackpotImg: function updateJackpotImg(spimg, atlasname, spname) {
        var atlas = cc.vv.gameData.GetAtlasByName(atlasname);
        spimg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(spname);
      },
      coinSpeedLightShow: function coinSpeedLightShow(isshow) {
        var lightnode = cc.find("speedlight", this.node);
        lightnode.active = isshow;
        if (isshow) {
          cc.vv.gameData.playSpine(lightnode, "animation", false, null);
          Global.shakeNode(this.node, 3, 1, this.node.position);
          Global.playHSEffect("bonus_notify");
        }
      },
      clearData: function clearData() {
        cc.find("totalnum", this._bottom).getComponent(cc.Label).string = "";
        cc.find("jackpotimg", this._top).active = false;
      },
      hideFreeObject: function hideFreeObject() {
        this._bottom.active = false;
        this._top.active = false;
        this._num.active = true;
        if ("s1" != this._showNode.name) {
          this._showNode.active = false;
          this._showNode = cc.find("s1", this.node);
          this.playSymbolAni(1);
        }
      },
      showKuang: function showKuang() {
        var bonusdata = cc.vv.gameData.GetBounusData();
        if (!this._kuang.active && bonusdata.state) {
          this._kuang.active = true;
          this._kuangguang.active = true;
          cc.vv.gameData.playSpine(this._kuangguang, "animation1", true, null);
        }
      },
      newCoinShowKuang: function newCoinShowKuang() {
        var _this4 = this;
        if (!this._kuangguang.active) return;
        cc.vv.gameData.playSpine(this._kuangguang, "animation2", false, function() {
          _this4._kuangguang.active = false;
        });
      },
      resetEnterFreeSymbol: function resetEnterFreeSymbol(id, data) {
        cc.find("s2", this.node).active = false;
        this._id = id;
        this._showNode = cc.find("s1", this.node);
        this.playSymbolAni(1);
        this._bottom.active = false;
        this._top.active = false;
        this.showCoinNum(data.coin, data.pool, false);
        this.totalCoin = 0;
        this._kuang.active = false;
      },
      resetFrameColor: function resetFrameColor(bgnode) {
        bgnode.active = true;
        bgnode.color = cc.color(255, 255, 255);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "ThePanda_Bottom", "ThePanda_Cfg", "ThePanda_FreeGame", "ThePanda_GameData", "ThePanda_Logic", "ThePanda_Slots", "ThePanda_Symbol" ]);