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
  ThePhoenix_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f701hix8BIHJ+8JzXSkCyX", "ThePhoenix_BonusGame");
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
        labelTemplate: cc.Label,
        spineBottom: sp.Skeleton,
        _cbHandler: null
      },
      onLoad: function onLoad() {
        this.labelTemplate.node.active = false;
        this.spineBottom.node.active = false;
      },
      enterBonus: function enterBonus(cbHandler) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._cbHandler = cbHandler;
              _context.next = 3;
              return _this.settlementCoin();

             case 3:
              cbHandler && cbHandler(SlotsFacade.dm.getSpinData().bonusInfo.winCoin);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      settlementCoin: function settlementCoin() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var bonusInfo, items, bottomLabel, bottomPos, startCoin, sum, _loop, i;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
              items = bonusInfo.winItems.concat();
              items.sort(function(a, b) {
                var aIdxInfo = SlotsFacade.slots.transferIdx(a.idx);
                var bIdxInfo = SlotsFacade.slots.transferIdx(b.idx);
                return aIdxInfo.col > bIdxInfo.col ? 1 : aIdxInfo.col < bIdxInfo.col ? -1 : aIdxInfo.row - bIdxInfo.row;
              });
              bottomLabel = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
              bottomPos = bottomLabel.convertToWorldSpaceAR(cc.v2(0, 0));
              bottomPos = _this2.node.convertToNodeSpaceAR(bottomPos);
              startCoin = 0;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (startCoin = cc.vv.gameData.GetGameTotalFreeWin() - cc.vv.gameData.GetGameWin());
              sum = startCoin;
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var val, symbol, label;
                return regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    SlotsFacade.soundMgr.playEffect("sound_WildGorilla_bonus_collect");
                    val = items[i].coin || items[i].jackpot.value;
                    symbol = SlotsFacade.slots.GetSymbolByIdx(items[i].idx);
                    symbol.playBonusAni();
                    if (!items[i].jackpot) {
                      _context2.next = 11;
                      break;
                    }
                    _context2.next = 7;
                    return SlotsFacade.delayTime(.5);

                   case 7:
                    _context2.next = 9;
                    return SlotsFacade.popup.showWinJPGold(items[i].jackpot.id, items[i].jackpot.value);

                   case 9:
                    _context2.next = 19;
                    break;

                   case 11:
                    label = cc.instantiate(_this2.labelTemplate.node).getComponent(cc.Label);
                    label.node.active = true;
                    label.node.parent = _this2.node;
                    label.node.position = _this2.node.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(items[i].idx));
                    label.string = Global.convertNumToShort(val);
                    cc.tween(label.node).to(.6, {
                      x: bottomPos.x,
                      y: bottomPos.y
                    }, {
                      easing: "cubicIn"
                    }).call(function() {
                      label.node.removeFromParent(true);
                    }).start();
                    _context2.next = 19;
                    return SlotsFacade.delayTime(.6);

                   case 19:
                    SlotsFacade.soundMgr.playEffect("sound_WildGorilla_bonus_ground");
                    _this2.spineBottom.node.active = true;
                    _this2.spineBottom.node.position = bottomPos;
                    _this2.spineBottom.setAnimation(0, "animation", false);
                    _this2.spineBottom.setCompleteListener(function() {
                      _this2.spineBottom.setCompleteListener(null);
                      _this2.spineBottom.node.active = false;
                    });
                    bottomLabel.active = true;
                    _context2.next = 27;
                    return new Promise(function(res) {
                      Global.doRoallNumEff(bottomLabel, sum, sum + val, 1, res, null, 0, true);
                    });

                   case 27:
                    sum += val;

                   case 28:
                   case "end":
                    return _context2.stop();
                  }
                }, _loop);
              });
              i = 0;

             case 11:
              if (!(i < items.length)) {
                _context3.next = 16;
                break;
              }
              return _context3.delegateYield(_loop(i), "t0", 13);

             case 13:
              i++;
              _context3.next = 11;
              break;

             case 16:
              _context3.next = 18;
              return SlotsFacade.delayTime(.5);

             case 18:
             case "end":
              return _context3.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a4d4aZXQtLdZ7DkRpHZlRu", "ThePhoenix_Cfg");
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
        zIndex: 300,
        win_node: "w1",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        stop_ani: {
          name: "buling",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        zIndex: 300,
        win_node: "w2",
        win_ani: {
          name: "buling",
          zIndex: 300
        },
        trigger_ani: {
          name: "actionframe",
          zIndex: 300,
          loop: true
        },
        stop_ani: {
          name: "buling",
          zIndex: 400
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        zIndex: 300,
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "buling",
          zIndex: 300
        },
        bonus_ani: {
          name: "jiesuan",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        zIndex: 100,
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        zIndex: 100,
        win_node: "w5",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        zIndex: 100,
        win_node: "w6",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        zIndex: 100,
        win_node: "w7",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        zIndex: 100,
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        zIndex: 100,
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        zIndex: 100,
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        zIndex: 100,
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        zIndex: 100,
        win_node: ""
      }), _defineProperty(_symbol, 101, {
        node: "s1",
        zIndex: 300,
        win_node: "w101",
        win_ani: {
          name: "actionframe_x2",
          zIndex: 300
        },
        stop_ani: {
          name: "buling_x2",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe_x2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 102, {
        node: "s1",
        zIndex: 300,
        win_node: "w102",
        win_ani: {
          name: "actionframe_x3",
          zIndex: 300
        },
        stop_ani: {
          name: "buling_x3",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe_x3",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 103, {
        node: "s1",
        zIndex: 300,
        win_node: "w102",
        win_ani: {
          name: "actionframe_x5",
          zIndex: 300
        },
        stop_ani: {
          name: "buling_x5",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe_x5",
          zIndex: 400
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      blankId: 20,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "ThePhoenix_Slots",
        Reels: "ThePhoenix_Reel",
        Symbols: "ThePhoenix_Symbol"
      },
      col: 5,
      row: 6,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 120
      },
      helpItems: [ "games/ThePhoenix/prefab/LMSlots_Help_item1", "games/ThePhoenix/prefab/LMSlots_Help_item2", "games/ThePhoenix/prefab/LMSlots_Help_item3", "games/ThePhoenix/prefab/LMSlots_Help_item4", "games/ThePhoenix/prefab/LMSlots_Help_item5" ],
      autoModelDelay: 1,
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      normalBgm: "music_WildGorilla_base_bgm",
      commEffect: {
        path: "games/ThePhoenix/",
        win1: [ "sound_WildGorilla_last_win1", "" ],
        win2: [ "sound_WildGorilla_last_win2", "" ]
      },
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        isScatter: true,
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/ThePhoenix/",
        reelStopSound: "sound_WildGorilla_Reel_Stop",
        symbolStopSound: "sound_WildGorilla_Scatter_ground",
        antSound: "sound_WildGorilla_fast_run",
        antSpeed: 2e3
      } ]
    };
    Cfg.isEnergyId = function(id) {
      return 3 == id || 301 == id || 302 == id;
    };
    Cfg.isWildKind = function(id) {
      return 1 == id || 101 == id || 102 == id || 103 == id;
    };
    Cfg.NeedIdleIds = [];
    Cfg.StoreItemType = {
      freeCnt: 1,
      stickyWild: 2,
      randWild: 3,
      roamingWilds: 4,
      removeSymbol: 5,
      extraBonus: 6,
      multWild: 7,
      stickyWildAndRemoveSymbol: 8,
      randomWildAndRemoveSymbol: 9,
      roamingWildAndRemoveSymbol: 10,
      extraBonusAndMultBonus: 11
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  ThePhoenix_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f6e1aUlIxMyLv8zMoL5y4d", "ThePhoenix_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spineRole: sp.Skeleton
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.playAction();
        }, this);
      },
      playAction: function playAction() {},
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a96b4aszk1EX5xvXFqprt8F", "ThePhoenix_Collect");
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
        collect_info_node: cc.Node,
        progress: cc.Node,
        items: [ cc.Node ],
        tips_btn: cc.Button,
        tips: cc.Node,
        free_info_node: cc.Node,
        free_normal_title: cc.Node,
        free_super_title: cc.Node,
        _step: 0,
        _topZIndex: 100
      },
      onLoad: function onLoad() {
        var _this = this;
        this.tips.active = false;
        this.tips_btn.node.on("click", function() {
          _this._showTips();
        }, this);
      },
      start: function start() {
        this._step = SlotsFacade.dm.bonusTrail.count;
        this.setStep(this._step);
      },
      _showTips: function _showTips() {
        var _this2 = this;
        if (this.tips.active) return;
        this.tips.active = true;
        this.tips.opacity = 0;
        cc.tween(this.tips).to(.5, {
          opacity: 255
        }).delay(2).to(.5, {
          opacity: 0
        }).call(function() {
          _this2.tips.active = false;
        }).start();
      },
      addStep: function addStep() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var item, icon;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              console.log("\u6dfb\u52a0\u6b65\u6570\uff0c\u5f53\u524d\u6b65\u6570:".concat(_this3._step));
              4 == _this3._step ? SlotsFacade.soundMgr.playEffect("sound_WildGorilla_super_collect") : SlotsFacade.soundMgr.playEffect("sound_WildGorilla_normal_collect");
              _this3._topZIndex++;
              item = _this3.items[_this3._step];
              item.zIndex = _this3._topZIndex;
              icon = item.getChildByName("icon");
              icon.active = true;
              cc.tween(icon).to(.3, {
                scale: 1.5
              }).to(.2, {
                scale: 1
              }).start();
              _context.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              _this3._step += 1;

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setStep: function setStep(step) {
        console.log("\u8bbe\u7f6e\u6536\u96c6\u8fdb\u5ea6\u6b65\u6570:".concat(step));
        this._step = step;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          var icon = item.getChildByName("icon");
          icon.active = step > i;
        }
      },
      enableTipsBtn: function enableTipsBtn(boo) {
        this.tips_btn.interactable = boo;
      },
      hide: function hide() {
        this.collect_info_node.active = false;
        this.free_info_node.active = true;
        this.free_normal_title.active = SlotsFacade.dm.bonusTrail.count != SlotsFacade.dm.bonusTrail.totalCount;
        this.free_super_title.active = !this.free_normal_title.active;
      },
      show: function show() {
        this.collect_info_node.active = true;
        this.free_info_node.active = false;
        this.setStep(SlotsFacade.dm.bonusTrail.count);
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "795cc64/N9IxYtpWHnNzrHh", "ThePhoenix_FlowCtrl");
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
      enterRoom: function enterRoom() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 6;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 6;
              return _this.enterFreeGame(true);

             case 6:
              SlotsFacade.slots.CanDoNextRound();

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startMove: function startMove() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cards;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return SlotsFacade.slots.collapseReel();

             case 2:
              SlotsFacade.slots._gameInfo = msg;
              cards = msg.resultCards;
              SlotsFacade.slots.SetSlotsResult(cards);
              SlotsFacade.slots.SetReelStateInfo(cards);

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, nTotal, bonusWin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              cc.vv.AudioManager.stopEffectByName("sound_WildGorilla_fast_run");
              cc.vv.AudioManager.stopEffectByName("sound_WildGorilla_trigger_bonus");
              _context4.next = 4;
              return _this2.enterBonusGame();

             case 4:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              bonusWin = 0;
              SlotsFacade.dm.getSpinData().bonusInfo.isTrigger && (bonusWin = SlotsFacade.dm.getSpinData().bonusInfo.winCoin);
              nWin -= bonusWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 13:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 37;
                break;
              }
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 33;
                break;
              }
              _context4.next = 17;
              return SlotsFacade.slots.playTriggerAni(SlotsFacade.dm.getScatterIndexs());

             case 17:
              SlotsFacade.slots.Backup();
              _context4.next = 20;
              return SlotsFacade.collect.addStep();

             case 20:
              if (!(SlotsFacade.dm.bonusTrail.count == SlotsFacade.dm.bonusTrail.totalCount)) {
                _context4.next = 25;
                break;
              }
              _context4.next = 23;
              return SlotsFacade.popup.showWinSuperFreeCnt(SlotsFacade.dm.triggerFreeCnt());

             case 23:
              _context4.next = 27;
              break;

             case 25:
              _context4.next = 27;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), true);

             case 27:
              _context4.next = 29;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 29:
              _context4.next = 31;
              return _this2.enterFreeGame();

             case 31:
              _context4.next = 35;
              break;

             case 33:
              _context4.next = 35;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), false);

             case 35:
              _context4.next = 46;
              break;

             case 37:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 46;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context4.next = 41;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin(), SlotsFacade.dm.GetTotalFree(), SlotsFacade.dm.bonusTrail.count == SlotsFacade.dm.bonusTrail.totalCount);

             case 41:
              _context4.next = 43;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 43:
              SlotsFacade.slots.Resume();
              _context4.next = 46;
              return _this2.enterNormalGame();

             case 46:
              SlotsFacade.slots.CanDoNextRound();

             case 47:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var total, rest;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              SlotsFacade.collect.hide();
              _context5.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.collect.show();
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              Global.SlotsSoundMgr.playNormalBgm(true);
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 8;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 8;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enterBonusGame: function enterBonusGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var bonusInfo;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
              if (!(bonusInfo.isTrigger && bonusInfo.winCoin > 0)) {
                _context7.next = 6;
                break;
              }
              _context7.next = 4;
              return SlotsFacade.delayTime(.3);

             case 4:
              _context7.next = 6;
              return new Promise(function(res) {
                SlotsFacade.bonusGame.enterBonus(res);
              });

             case 6:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d51c3mIFeBGFZBOPi2lNutg", "ThePhoenix_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        bonusTrail: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.bonusTrail = this._deskInfo.bonusTrail;
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, false, this);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.bonusTrail = msg.bonusTrail;
          msg.resultCards.push(20, 20, 20, 20, 20);
        }
        this._super(msg);
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      hasFree: function hasFree() {
        return this.GetFreeTime() > 0;
      },
      isTriggerFree: function isTriggerFree() {
        return this.triggerFreeCnt() > 0;
      },
      triggerFreeCnt: function triggerFreeCnt() {
        var freeResult = this._gameInfo.freeResult;
        if (freeResult && freeResult.triFreeCnt && freeResult.freeInfo && freeResult.freeInfo.freeCnt) return freeResult.freeInfo.freeCnt;
        return 0;
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this._gameInfo.freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      getCollectSymbolIndexs: function getCollectSymbolIndexs() {
        var _this = this;
        var cards = this._gameInfo.resultCards;
        if (!cards || cards.length < 1) return [];
        var ret = [];
        cards.forEach(function(v, i) {
          _this.getGameCfg().isEnergyId(v) && ret.push(i + 1);
        });
        return ret;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
      },
      reqSubGame: function reqSubGame(param) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: this._gameId,
          data: param
        };
        cc.vv.NetManager.send(req, true);
      },
      onResp: function onResp(msg) {
        console.log("reqSubGame-resp:", msg);
        1 == msg.data.rtype ? SlotsFacade.storeGame.onMsg(msg) : 3 == msg.data.rtype;
      },
      getRewardData: function getRewardData() {
        var rewardIdxs = this.getSpinData().rewardIdxs;
        if (!rewardIdxs || rewardIdxs.length < 1) return null;
        var bonusIdxs = this.getSpinData().bonusIdxs;
        var bonusItems = this.getSpinData().bonusItems;
        var honeycombData = [];
        var jackpotData = [];
        var goldData = [];
        for (var i = 0; i < rewardIdxs.length; i++) {
          var idx = rewardIdxs[i];
          var index = bonusIdxs.indexOf(idx);
          if (-1 != index) {
            var item = bonusItems[index];
            item.coin ? goldData.push({
              idx: idx,
              item: item
            }) : item.jackpot ? jackpotData.push({
              idx: idx,
              item: item
            }) : item.wheel && honeycombData.push({
              idx: idx,
              item: item
            });
          } else console.log("#err\u6570\u636e\u51fa\u9519rewardIdxs", rewardIdxs, bonusIdxs, bonusItems);
        }
        honeycombData.sort(function(a, b) {
          var idxInfoA = SlotsFacade.slots.transferIdx(a.idx);
          var idxInfoB = SlotsFacade.slots.transferIdx(b.idx);
          if (idxInfoA.col != idxInfoB.col) return idxInfoA.col - idxInfoB.col;
          return idxInfoA.row - idxInfoB.row;
        });
        jackpotData.sort(function(a, b) {
          var idxInfoA = SlotsFacade.slots.transferIdx(a.idx);
          var idxInfoB = SlotsFacade.slots.transferIdx(b.idx);
          if (idxInfoA.col != idxInfoB.col) return idxInfoA.col - idxInfoB.col;
          return idxInfoA.row - idxInfoB.row;
        });
        return {
          rewardIdxs: rewardIdxs,
          honeycombData: honeycombData,
          jackpotData: jackpotData,
          goldData: goldData
        };
      },
      getReelCards: function getReelCards(reelIdx) {
        var ret = [];
        var cards = this.getSpinData().resultCards;
        for (var i = 0; i < cards.length; i++) i % 5 == reelIdx && ret.push(cards[i]);
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  ThePhoenix_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19ff6c3nhxFnJ+0Ho6UFgY1", "ThePhoenix_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("ThePhoenix_MainPanel");
        this.soundMgr = this.addComponent("ThePhoenix_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("ThePhoenix_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("ThePhoenix_Popup");
        this.character = this.mainPanel.character_node.getComponent("ThePhoenix_Character");
        this.collect = this.mainPanel.collect.getComponent("ThePhoenix_Collect");
        this.bonusGame = this.mainPanel.bonus_game.getComponent("ThePhoenix_BonusGame");
        this.prizePool = this.mainPanel.jpNode.getComponent("ThePhoenix_PrizePool");
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
        SlotsFacade.soundMgr.playEffect("sound_WildGorilla_enter");
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  ThePhoenix_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f7530lQGROr4nKH7Bg9vaT", "ThePhoenix_MainPanel");
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
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character");
        this.popup_node = this.node.getChildByName("popup_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.collect = this.slots.getChildByName("collect");
        this.bonus_game = this.node.getChildByName("bonus_game");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type = type || 0;
        1 == type && (type = SlotsFacade.dm.bonusTrail.count == SlotsFacade.dm.bonusTrail.totalCount ? 2 : 1);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type, cmpHandler) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.character.hide();
              type = type || 1;
              spine = _this.transition_node.getChildByName("spine").getComponent(sp.Skeleton);
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_guochang_open");
              spine.node.active = true;
              spine.setAnimation(0, "skill", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 9;
              return SlotsFacade.delayTime(1.2);

             case 9:
              SlotsFacade.character.show();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b50f9UbPQ1DiaYyEezPTBLb", "ThePhoenix_Popup");
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
        bg: cc.Node,
        bg_dark: cc.Node
      },
      onLoad: function onLoad() {},
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showBgDark: function showBgDark(boo) {
        this.bg_dark.active = boo;
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isFirstTrigger && Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_tips_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.active = isFirstTrigger;
              panel.getChildByName("tips2").active = !isFirstTrigger;
              _context.next = 13;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  res();
                }).start();
              });

             case 13:
              if (!isFirstTrigger) {
                _context.next = 18;
                break;
              }
              _context.next = 16;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 16:
              _context.next = 23;
              break;

             case 18:
              _context.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
              SlotsFacade.soundMgr.playEffect("dialog_close");
              _context.next = 23;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });

             case 23:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinSuperFreeCnt: function showWinSuperFreeCnt(cnt) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_tips_show");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_super_free_cnt");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              _context2.next = 11;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  res();
                }).start();
              });

             case 11:
              _context2.next = 13;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb, cnt, isSuperFree) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_freespin_over");
              isSuperFree = isSuperFree || false;
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              panel.getChildByName("label_cnt").getComponent(cc.Label).string = cnt.toString();
              panel.getChildByName("tips_normal").active = !isSuperFree;
              panel.getChildByName("tips_super").active = isSuperFree;
              okBtn = panel.getChildByName("btn_ok");
              _context3.next = 15;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  res();
                }).start();
              });

             case 15:
              _context3.next = 17;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  var delayT = 0;
                  if (Global.FormatCommaNumToNum(label.getComponent(cc.Label).string) < goldNumb) {
                    label.getComponent("LabelRollCmp").stopRoll();
                    label.getComponent(cc.Label).string = Global.FormatNumToComma(goldNumb);
                    delayT += .3;
                  }
                  cc.tween(panel).delay(delayT).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel, label, titleCmp, okBtn;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_guochang_open");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              titleCmp = panel.getChildByName("title").getComponent("ImgSwitchCmp");
              titleCmp.setIndex(jpType - 1);
              okBtn = panel.getChildByName("btn_ok");
              _context4.next = 12;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  res();
                }).start();
              });

             case 12:
              _context4.next = 14;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  var delayT = 0;
                  if (Global.FormatCommaNumToNum(label.getComponent(cc.Label).string) < goldNumb) {
                    label.getComponent("LabelRollCmp").stopRoll();
                    label.getComponent(cc.Label).string = Global.FormatNumToComma(goldNumb);
                    delayT += .3;
                  }
                  cc.tween(panel).delay(delayT).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this4.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 14:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "561fd/qPChDO7mBLcGyBwta", "ThePhoenix_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  ThePhoenix_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3125xUnkdNbYtDXGEFO9EX", "ThePhoenix_Reel");
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
          cc.vv.AudioManager.stopEffectByName("sound_WildGorilla_fast_run");
          var _node = cc.find(name + "_" + (this._reelIdx + 1), this.node.parent);
          if (_node) {
            _node.active = true;
            var ani = _node.getComponent(cc.Animation);
            ani.play();
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  ThePhoenix_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49a35LDUPpKW4eBFMFLYsCL", "ThePhoenix_Slots");
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
        mask: cc.Node,
        rightReelNode: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.rightReelNode = cc.find("reels/right", this.node);
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < 2; i++) {
          var node = cc.find("reels/left/reel" + (i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
        for (var _i = 2; _i < 5; _i++) {
          var _node = cc.find("reels/right/reels/reel" + (_i + 1), this.node);
          var _scp = _node.addComponent(reelCmp);
          _scp.Init(_i, row, this._topAniNode);
          this._reels.push(_scp);
        }
      },
      StartMove: function StartMove() {
        this._super();
        SlotsFacade.flowCtrl.startMove();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        SlotsFacade.flowCtrl.onSpinMsg(msg);
      },
      OnSpinEnd: function OnSpinEnd() {
        SlotsFacade.flowCtrl.spinEnd();
      },
      ReconnectShow: function ReconnectShow() {
        this.scheduleOnce(function() {
          SlotsFacade.flowCtrl.enterRoom();
        });
      },
      transferIdx: function transferIdx(idx) {
        idx -= 1;
        var col = idx % this._col;
        var row = this._row - Math.floor(idx / this._col) - 1;
        return {
          col: col,
          row: row
        };
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var pos = reel.GetSymbolPosByRow(idxInfo.row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this.GetSymbolByIdx(element));
        });
        return ret;
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          var res = {};
          res.sid = cards[i];
          res.data = {
            idx: i + 1
          };
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(res);
        }
        var spinData = SlotsFacade.dm.getSpinData();
        if (spinData.bonusInfo) {
          var bonusItems = spinData.bonusInfo.loseItems.concat(spinData.bonusInfo.winItems);
          var _iterator = _createForOfIteratorHelper(bonusItems), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              var idxInfo = this.transferIdx(item.idx);
              var data = reelResults[idxInfo.col][idxInfo.row].data;
              item.coin ? data.coin = item.coin : item.jackpot && (data.jackpot = item.jackpot.id);
              spinData.bonusInfo.winItems.includes(item) && (data.isWinBonus = true);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var _item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          _item.SetResult(reelRes);
        }
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_FreeSpin_trigger");
              indexs.forEach(function(element) {
                var item = _this2.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      expandReel: function expandReel() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var spinData, bonusInfo, effect, expandCnt, maskHeight, resultCards, blankId;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              bonusInfo = spinData.bonusInfo;
              if (!(!bonusInfo || !bonusInfo.isTrigger)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return");

             case 4:
              SlotsFacade.soundMgr.playEffect("sound_WildGorilla_trigger_bonus");
              SlotsFacade.character.playAction();
              effect = _this3.rightReelNode.getChildByName("effect");
              effect.active = true;
              effect.opacity = 0;
              cc.tween(effect).to(.3, {
                opacity: 255
              }).start();
              _context2.next = 12;
              return SlotsFacade.delayTime(.3);

             case 12:
              expandCnt = 0;
              maskHeight = 440;
              resultCards = spinData.resultCards;
              blankId = SlotsFacade.dm.getGameCfg().blankId;
              if (resultCards[4] != blankId) {
                expandCnt = 2;
                maskHeight = 635;
              } else if (resultCards[9] != blankId) {
                expandCnt = 1;
                maskHeight = 515;
              }
              1 == expandCnt ? SlotsFacade.soundMgr.playEffect("sound_WildGorilla_fire3to4") : 2 == expandCnt && SlotsFacade.soundMgr.playEffect("sound_WildGorilla_fire3to5");
              expandCnt > 0 && cc.tween(_this3.rightReelNode).delay(.2).to(.5, {
                height: maskHeight
              }).start();
              _this3.rightReelNode.isExpand = true;
              _context2.next = 22;
              return SlotsFacade.delayTime(2);

             case 22:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      collapseReel: function collapseReel() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var effect;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this4.rightReelNode.isExpand) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              cc.tween(_this4.rightReelNode).to(.5, {
                height: 440
              }).call(function() {
                _this4.rightReelNode.isExpand = false;
              }).start();
              effect = _this4.rightReelNode.getChildByName("effect");
              cc.tween(effect).to(.2, {
                opacity: 0
              }).start();
              _context3.next = 7;
              return SlotsFacade.delayTime(.7);

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._roundSpineTime = 0;
            var expandReelTime = 0;
            var bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
            bonusInfo && bonusInfo.isTrigger ? expandReelTime = 2 : this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              i > 1 && (reelStopInterv += (i - 1) * expandReelTime);
              item.StopMove(reelStopInterv);
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        1 == colIdx && this.expandReel();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  ThePhoenix_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c57045ZTNDiLvMA6883Zyj", "ThePhoenix_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/ThePhoenix/",
        _isPlayBgm: false
      },
      playEffect: function playEffect(audioName, isLoop) {
        return cc.vv.AudioManager.playEff(this._soundPath, audioName, true, isLoop);
      },
      stopEffectByName: function stopEffectByName(audioName) {
        cc.vv.AudioManager.stopEffectByName(audioName);
      },
      playBgm: function playBgm(bgmName) {
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      stopBgm: function stopBgm() {
        Global.SlotsSoundMgr.stopBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("music_WildGorilla_freespin_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  ThePhoenix_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "036f9K2bHdMS7iFkghre/vu", "ThePhoenix_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        label: cc.Label,
        jackpot: cc.Node,
        bonusKuang: cc.Node
      },
      onLoad: function onLoad() {
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.jackpot = this.node.getChildByName("jackpot");
        this.bonusKuang = this.node.getChildByName("kuang_bonus");
      },
      StartMove: function StartMove() {
        this._super();
        this.showLabel();
        this.showBonusKuang();
      },
      ShowById: function ShowById(id, data) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (id == cfg.blankId) {
          id = this.getRandomId();
          if (id == cc.vv.gameData.getGameCfg().bonusId) {
            data = {};
            data.coin = Global.random(1, 10) * SlotsFacade.dm.GetTotalBet();
          }
        }
        this._super(id, data);
        data ? this.showLabel(true) : this.showLabel(false);
      },
      getRandomId: function getRandomId() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        return randVal;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randVal = this.getRandomId();
        var data = null;
        if (randVal == cc.vv.gameData.getGameCfg().bonusId) {
          data = {};
          data.coin = Global.random(1, 10) * SlotsFacade.dm.GetTotalBet();
        }
        this.ShowById(randVal, data);
      },
      showLabel: function showLabel(boo) {
        if (boo && this._data && (this._data.coin || this._data.jackpot)) if (this._data.coin) {
          this.jackpot.active = false;
          this.label.node.active = true;
          this.label.node.scaleX = 1;
          this.label.string = Global.convertNumToShort(this._data.coin);
        } else {
          this.jackpot.active = true;
          this.label.node.active = false;
          this.jackpot.getComponent("ImgSwitchCmp").setIndex(this._data.jackpot - 1);
        } else {
          this.label.node.active = false;
          this.jackpot.active = false;
        }
      },
      StopMoveDeep: function StopMoveDeep() {
        if (!SlotsFacade.dm.getSpinData()) return;
        if (SlotsFacade.dm.getGameCfg().isWildKind(this._id)) {
          SlotsFacade.soundMgr.playEffect("sound_WildGorilla_wild_ground");
          this.playStopAnimation();
        }
      },
      StopMoveEnd: function StopMoveEnd() {
        var NeedIdleIds = SlotsFacade.dm.getGameCfg().NeedIdleIds;
        if (NeedIdleIds.includes(this._id)) {
          var rewardIdxs = SlotsFacade.dm.getSpinData().rewardIdxs;
          rewardIdxs.includes(this._data.idx) || this.playidleAnimation();
        }
        this._data && this._data.isWinBonus && this.showBonusKuang(true);
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var stopAni = cfg.symbol[id].stop_ani;
              var idleAni = cfg.symbol[id].idle_ani;
              nodeSp.setAnimation(0, stopAni.name, false);
              idleAni && nodeSp.addAnimation(0, idleAni.name, true);
            }
          }
        }
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
            if (nodeSp) {
              var triggerAni = cfg.symbol[id].trigger_ani.name;
              nodeSp.setAnimation(0, triggerAni, cfg.symbol[id].trigger_ani.loop);
            }
          }
          var label = aniNode.getChildByName("label");
          if (!label.active && this._data.coin) {
            label.active = true;
            label.getComponent(cc.Label).string = Global.convertNumToShort(this._data.coin);
          }
        }
        return isPlay;
      },
      ShowKuang: function ShowKuang(boo) {
        this._id == SlotsFacade.dm.getGameCfg().scatterId && (boo = false);
        this._super(boo);
      },
      showBonusKuang: function showBonusKuang(boo) {
        boo = boo || false;
        this.bonusKuang.active = boo;
      },
      playBonusAni: function playBonusAni() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (id != cfg.bonusId) return;
        this._showNode && (this._showNode.active = false);
        var itemCfg = cfg.symbol[id];
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find(itemCfg.win_node, aniNode);
        topShowNode.active = true;
        aniNode.zIndex = itemCfg.bonus_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
        var nodeSp = topShowNode.getComponent(sp.Skeleton);
        var bonusAni = itemCfg.bonus_ani.name;
        nodeSp.setAnimation(0, bonusAni, false);
        this.showBonusKuang(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "ThePhoenix_BonusGame", "ThePhoenix_Cfg", "ThePhoenix_Character", "ThePhoenix_Collect", "ThePhoenix_FlowCtrl", "ThePhoenix_GameData", "ThePhoenix_Logic", "ThePhoenix_MainPanel", "ThePhoenix_Popup", "ThePhoenix_PrizePool", "ThePhoenix_Reel", "ThePhoenix_Slots", "ThePhoenix_Sound", "ThePhoenix_Symbol" ]);