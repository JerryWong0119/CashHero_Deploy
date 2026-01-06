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
  LordCaesar_BonusReel1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4c39uGTDZIrIbwzAgWOX5Z", "LordCaesar_BonusReel1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemHeight: 69,
        symbols: [],
        val: 0,
        _currSymbol: null,
        isLoaded: false,
        select_effect: sp.Skeleton,
        credit_liuguang: sp.Skeleton
      },
      onLoad: function onLoad() {
        this.select_effect = this.node.getChildByName("select_effect").getComponent(sp.Skeleton);
        this.select_effect.node.active = false;
        this.credit_liuguang = this.node.getChildByName("credit_liuguang").getComponent(sp.Skeleton);
        this.credit_liuguang.node.active = false;
        for (var i = 0; i < 2; i++) {
          var s = this.node.getChildByName("symbol" + (i + 1));
          this.symbols.push(s);
        }
        this._currSymbol = this.symbols[0];
        this.isLoaded = true;
        this.setCurrSymbol(this.val);
      },
      setCurrSymbol: function setCurrSymbol(val) {
        this.val = val;
        if (!this.isLoaded) return;
        this.updateSymbol(this._currSymbol, this.val);
      },
      setMultiple: function setMultiple(mul) {
        this.val = mul * this.val;
        this.updateSymbol(this._currSymbol, this.val);
      },
      updateSymbol: function updateSymbol(symbol, val) {
        var s = symbol;
        var img = s.getComponent("ImgSwitchCmp");
        var label = s.getChildByName("label");
        label.active = val > 0;
        if (val) {
          var bet = SlotsFacade.dm.GetTotalBet();
          var mul = val / bet;
          mul >= 20 ? img.setIndex(4) : mul >= 10 ? img.setIndex(3) : mul >= 5 ? img.setIndex(2) : img.setIndex(1);
          label.getComponent(cc.Label).string = Global.formatNumShort(val);
        } else img.setIndex(0);
      },
      reel: function reel(val) {
        var _this = this;
        this.val = val;
        this._currSymbol = this.symbols[1];
        this.updateSymbol(this._currSymbol, this.val);
        var symbols = this.symbols.concat();
        var temp = this.symbols[0];
        this.symbols[0] = this.symbols[1];
        this.symbols[1] = temp;
        for (var i = 0; i < symbols.length; i++) {
          var s = symbols[i];
          s.y = i * this.itemHeight;
        }
        cc.tween(symbols[0]).to(.5, {
          y: -this.itemHeight
        }).start();
        cc.tween(symbols[1]).to(.5, {
          y: 0
        }).call(function() {
          var bet = SlotsFacade.dm.GetTotalBet();
          var mul = val / bet;
          if (0 == _this.val || mul >= 5) {
            _this.credit_liuguang.node.active = true;
            _this.credit_liuguang.setAnimation(0, "animation", false);
          }
        }).start();
      },
      playSelectEffect: function playSelectEffect(boo, loop) {
        this.select_effect.node.active = boo;
        if (boo) {
          loop = loop || false;
          this.select_effect.setAnimation(0, "animation", loop);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_BonusReel2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0017c9ClUBMwIR3lofwCj7t", "LordCaesar_BonusReel2");
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
        symbol: cc.Node,
        select_effect: sp.Skeleton,
        spine_lock: sp.Skeleton,
        isLoaded: false,
        val: 0,
        type: 1
      },
      onLoad: function onLoad() {
        this.symbol = this.node.getChildByName("symbol");
        this.select_effect = this.node.getChildByName("select_effect").getComponent(sp.Skeleton);
        this.select_effect.node.active = false;
        this.spine_lock = this.node.getChildByName("spine_lock").getComponent(sp.Skeleton);
        this.isLoaded = true;
      },
      setType: function setType(type) {
        this.type = type;
      },
      playSelectEffect: function playSelectEffect(boo, loop) {
        this.select_effect.node.active = boo;
        if (boo) {
          loop = loop || false;
          this.select_effect.setAnimation(0, "animation", loop);
        }
      },
      setUnlock: function setUnlock(boo) {
        boo = boo || false;
        this.spine_lock.node.active = !boo;
        boo || this.spine_lock.setAnimation(0, "animation".concat(this.type, "_1"), true);
      },
      toUnlock: function toUnlock() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.spine_lock.node.active = true;
              _this.spine_lock.setAnimation(0, "animation".concat(_this.type, "_2"), false);
              _this.spine_lock.setCompleteListener(function() {
                _this.spine_lock.setCompleteListener(null);
                _this.spine_lock.node.active = false;
              });

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9876VMmf1Do5xGmBAvrjXy", "LordCaesar_Cfg");
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
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _symbol),
      scatterId: 2,
      wildId: 1,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "LordCaesar_Slots",
        Reels: "LordCaesar_Reel",
        Symbols: "LordCaesar_symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 123
      },
      helpItems: [ "games/LordCaesar/prefab/LMSlots_Help_item1", "games/LordCaesar/prefab/LMSlots_Help_item2", "games/LordCaesar/prefab/LMSlots_Help_item3", "games/LordCaesar/prefab/LMSlots_Help_item4", "games/LordCaesar/prefab/LMSlots_Help_item5" ],
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "base_bgm",
      commEffect: {
        path: "games/LordCaesar/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 1,
        counts: [ 0, 0, 0, 0, 0 ],
        antiNode: "node_anti",
        path: "games/LordCaesar/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatterSmart_stop_1",
        antSound: "anticipation",
        antSpeed: 2400
      } ]
    };
    Cfg.isWild = function(id) {
      return 1 == id;
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LordCaesar_DrumsGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "481fbiXPIpMPbwj+V1TaWXt", "LordCaesar_DrumsGame");
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
    var BonusType = {
      FreeGame: 1,
      Wheel: 2,
      Coin: 3
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        collect: cc.Node,
        bonus_tips_node: cc.Node,
        bonus_item: cc.Node,
        character: cc.Node,
        collect_tips: cc.Node,
        spine_character: cc.Node,
        _isOpenCollect: false,
        _bonusReels: [],
        _bonusWheels: [],
        _collectStepItems: []
      },
      onLoad: function onLoad() {
        var _this = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.showCollect(false);
        }, this);
        this.collect.on(cc.Node.EventType.TOUCH_END, function() {
          _this._showCollectTips(!_this.collect_tips.active);
          _this._clickCollect();
        }, this);
        for (var i = 0; i < 3; i++) {
          var reel = this.bonus_item.getChildByName("reel" + (i + 1));
          var cmp = reel.addComponent("LordCaesar_BonusReel1");
          this._bonusReels.push(cmp);
        }
        for (var _i = 0; _i < 2; _i++) {
          var wheel = this.bonus_item.getChildByName("wheel" + (_i + 1));
          var _cmp = wheel.addComponent("LordCaesar_BonusReel2");
          _cmp.setType(_i + 1);
          this._bonusWheels.push(_cmp);
        }
        this._collectStepItems = [];
        for (var _i2 = 0; _i2 < 16; _i2++) this._collectStepItems.push(this.collect.getChildByName("step" + (_i2 + 1)));
      },
      start: function start() {
        this.showCollect(true);
        this.initCollectProgress();
        this.initBonusReels();
        this.initBonusWheels();
        SlotsFacade.dm.hasFree() ? this.toFreeGame() : this.toNormalGame();
      },
      initBonusReels: function initBonusReels() {
        var items = SlotsFacade.dm.extraBonusRow.items;
        var reelsData = [ items[0], items[2], items[4] ];
        var bet = SlotsFacade.dm.GetTotalBet();
        for (var i = 0; i < reelsData.length; i++) {
          var reel = this._bonusReels[i];
          var vo = reelsData[i];
          vo.type == BonusType.FreeGame ? reel.setCurrSymbol(0) : reel.setCurrSymbol(bet * vo.mult);
        }
      },
      initBonusWheels: function initBonusWheels() {
        var hasFree = SlotsFacade.dm.hasFree();
        for (var i = 0; i < this._bonusWheels.length; i++) {
          var wheel = this._bonusWheels[i];
          wheel.setUnlock(hasFree);
        }
      },
      _showCollectTips: function _showCollectTips(boo) {
        var tips = this.collect_tips;
        if (boo) {
          if (tips.active) return;
          tips.active = true;
          tips.stopAllActions();
          tips.opacity = 0;
          cc.tween(tips).to(1, {
            opacity: 255
          }).delay(2).to(1, {
            opacity: 0
          }).call(function() {
            tips.active = false;
          }).start();
        } else {
          if (!tips.active) return;
          tips.active = true;
          tips.stopAllActions();
          cc.tween(tips).to(1, {
            opacity: 0
          }).call(function() {
            tips.active = false;
          }).start();
        }
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        var lock = this.collect.getChildByName("lock").getComponent(sp.Skeleton);
        if (boo) {
          if (!this._isOpenCollect) {
            if (isInit) lock.node.active = false; else {
              lock.node.active = true;
              SlotsFacade.soundMgr.playEffect("ad_board_change");
              lock.setAnimation(0, "animation2", false);
            }
            this._showCollectTips(true);
          }
        } else if (isInit) {
          lock.node.active = true;
          lock.setAnimation(0, "animation1", true);
        } else if (this._isOpenCollect) {
          SlotsFacade.soundMgr.playEffect("ad_board_change");
          lock.node.active = true;
          lock.setAnimation(0, "animation3", false);
          lock.addAnimation(0, "animation1", true);
          this._showCollectTips(false);
        }
        this._isOpenCollect = boo;
      },
      initCollectProgress: function initCollectProgress() {
        var bonusTrail = SlotsFacade.dm.bonusTrail;
        var count = bonusTrail.count;
        for (var i = 0; i < 16; i++) {
          var item = this._collectStepItems[i];
          item.getChildByName("icon").active = i < count;
        }
      },
      updateCollectProgress: function updateCollectProgress() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusTrail, count, item, spNode, icon, spine, aniName, soundName;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              bonusTrail = SlotsFacade.dm.bonusTrail;
              count = bonusTrail.count;
              item = _this2._collectStepItems[count - 1];
              if (item) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");

             case 5:
              spNode = item.getChildByName("spine");
              icon = item.getChildByName("icon");
              if (!spNode) {
                _context.next = 19;
                break;
              }
              spine = item.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              aniName = "animation1";
              soundName = "lightup1";
              if (bonusTrail.megaIdx.includes(count)) {
                aniName = "animation2";
                soundName = "lightup2";
              } else if (bonusTrail.superBonus.includes(count)) {
                aniName = "animation3";
                soundName = "lightup2";
              }
              SlotsFacade.soundMgr.playEffect("soundName");
              spine.setAnimation(0, aniName, false);
              _context.next = 17;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                  item.getChildByName("icon").active = true;
                  res();
                });
              });

             case 17:
              _context.next = 23;
              break;

             case 19:
              item.getChildByName("icon").active = true;
              icon.setScale(0);
              _context.next = 23;
              return new Promise(function(res) {
                cc.tween(icon).to(.5, {
                  scale: .85
                }).delay(.2).call(function() {
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
      changeBonusReel: function changeBonusReel() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var items, reelsData, bet, i, reel, vo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              items = SlotsFacade.dm.extraBonusRow.items;
              reelsData = [ items[0], items[2], items[4] ];
              bet = SlotsFacade.dm.GetTotalBet();
              for (i = 0; i < reelsData.length; i++) {
                reel = _this3._bonusReels[i];
                vo = reelsData[i];
                vo.type == BonusType.FreeGame ? reel.reel(0) : reel.reel(bet * vo.mult);
              }
              _context2.next = 6;
              return SlotsFacade.delayTime(.6);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _clickCollect: function _clickCollect() {
        if (!this._isOpenCollect) {
          if (SlotsFacade.dm.hasFree()) return;
          if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
          if (SlotsFacade.dm.GetAutoModelTime() > 0) return;
          var betList = SlotsFacade.dm.GetBetMults();
          var needBet = SlotsFacade.dm.getDeskInfo().needBet;
          if (needBet > betList.length) return;
          cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        }
      },
      hothot: function hothot() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var spinData, multipleExtraBonus, spineMul, spineZhuanGuang, items, reelsData, spine_trigger, i, vo, reel;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              multipleExtraBonus = spinData.multipleExtraBonus;
              if (!multipleExtraBonus) {
                _context3.next = 35;
                break;
              }
              _this4.spine_character.getComponent(sp.Skeleton).setAnimation(0, "skill01", false);
              _this4.spine_character.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              _context3.next = 7;
              return cc.vv.gameData.awaitTime(.8);

             case 7:
              SlotsFacade.soundMgr.playEffect("multiply_active");
              spineMul = _this4.character.getChildByName("shuzi_x" + multipleExtraBonus).getComponent(sp.Skeleton);
              spineZhuanGuang = _this4.character.getChildByName("zhuanguang").getComponent(sp.Skeleton);
              spineMul.node.active = true;
              spineMul.setAnimation(0, "animation".concat(multipleExtraBonus, "_1"), false);
              spineMul.addAnimation(0, "animation".concat(multipleExtraBonus, "_2"), true);
              _context3.next = 15;
              return new Promise(function(res) {
                spineMul.setCompleteListener(function() {
                  spineMul.setCompleteListener(null);
                  spineZhuanGuang.node.active = true;
                  res();
                });
              });

             case 15:
              items = SlotsFacade.dm.extraBonusRow.items;
              reelsData = [ items[0], items[2], items[4] ];
              spine_trigger = _this4.character.getChildByName("spine_trigger").getComponent(sp.Skeleton);
              spine_trigger.node.active = true;
              i = 0;

             case 20:
              if (!(i < reelsData.length)) {
                _context3.next = 35;
                break;
              }
              vo = reelsData[i];
              if (!(vo.type == BonusType.Coin)) {
                _context3.next = 32;
                break;
              }
              SlotsFacade.soundMgr.playEffect("bonus_shot");
              spine_trigger.setAnimation(0, "animation" + (i + 1), false);
              _context3.next = 27;
              return SlotsFacade.delayTime(.6);

             case 27:
              reel = _this4._bonusReels[i];
              reel.setMultiple(multipleExtraBonus);
              reel.playSelectEffect(true, true);
              _context3.next = 32;
              return SlotsFacade.delayTime(.4);

             case 32:
              i++;
              _context3.next = 20;
              break;

             case 35:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      toNormal: function toNormal() {
        var spinData = SlotsFacade.dm.getSpinData();
        var multipleExtraBonus = spinData.multipleExtraBonus;
        if (multipleExtraBonus) {
          this._bonusReels.forEach(function(element) {
            element.playSelectEffect(false);
          });
          var spineMul = this.character.getChildByName("shuzi_x" + multipleExtraBonus).getComponent(sp.Skeleton);
          spineMul.setAnimation(0, "animation".concat(multipleExtraBonus, "_3"), false);
          spineMul.setCompleteListener(function() {
            spineMul.setCompleteListener(null);
            spineMul.node.active = false;
          });
          var spineZhuanGuang = this.character.getChildByName("zhuanguang").getComponent(sp.Skeleton);
          spineZhuanGuang.node.active = false;
        }
      },
      reelBingo: function reelBingo(reelIndx) {
        var item = [ this._bonusReels[0], this._bonusWheels[0], this._bonusReels[1], this._bonusWheels[1], this._bonusReels[2] ][reelIndx - 1];
        item.playSelectEffect(true, false);
      },
      unlockWheel: function unlockWheel() {
        SlotsFacade.soundMgr.playEffect("free_unlock");
        this._bonusWheels.forEach(function(element) {
          element.toUnlock();
        });
      },
      toNormalGame: function toNormalGame() {
        this.initBonusWheels();
        this.bonus_tips_node.active = false;
        this.collect.active = true;
      },
      toFreeGame: function toFreeGame() {
        this.collect.active = false;
        this.bonus_tips_node.active = true;
        var freeType = SlotsFacade.dm.getFreeType();
        var megaTips = this.bonus_tips_node.getChildByName("mega_tips");
        var superTips = this.bonus_tips_node.getChildByName("super_tips");
        megaTips.active = 2 == freeType;
        superTips.active = 3 == freeType;
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d8a8ivE8NBFowWWDbX1VhB", "LordCaesar_FlowCtrl");
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
          var total, rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (rest > 0) {
                SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                SlotsFacade.bottomCmp.SetWin(nTotal);
                SlotsFacade.mainPanel.showBg(1);
              }
              _context.next = 5;
              return _this.enterWheelGame();

             case 5:
              SlotsFacade.slots.CanDoNextRound();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return SlotsFacade.drumsGame.changeBonusReel();

             case 2:
              _context2.next = 4;
              return SlotsFacade.drumsGame.hothot();

             case 4:
              SlotsFacade.slots._gameInfo = msg;
              _context2.next = 7;
              return SlotsFacade.slots.bonusShake();

             case 7:
              SlotsFacade.drumsGame.toNormal();
              SlotsFacade.slots.SetSlotsResult(msg.resultCards);
              SlotsFacade.slots.SetReelStateInfo(msg.resultCards);

             case 10:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, bonusCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              bonusCoin = SlotsFacade.dm.getBonusCoin();
              nWin -= bonusCoin;
              nTotal -= bonusCoin;
              _context3.next = 9;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 9:
              _context3.next = 11;
              return _this2.enterBonusGame();

             case 11:
              _context3.next = 13;
              return _this2.enterWheelGame();

             case 13:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context3.next = 27;
                break;
              }
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context3.next = 23;
                break;
              }
              _context3.next = 17;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), SlotsFacade.dm.getFreeType());

             case 17:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
              _context3.next = 22;
              return _this2.enterFreeGame();

             case 22:
              SlotsFacade.drumsGame.unlockWheel();

             case 23:
              _context3.next = 25;
              return SlotsFacade.delayTime(1);

             case 25:
              _context3.next = 35;
              break;

             case 27:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context3.next = 35;
                break;
              }
              _context3.next = 30;
              return SlotsFacade.popup.showWinFreeCoin(SlotsFacade.dm.getFreeWinCoin());

             case 30:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 33;
              return SlotsFacade.delayTime(1.5);

             case 33:
              _context3.next = 35;
              return _this2.enterNormalGame();

             case 35:
              SlotsFacade.slots.CanDoNextRound();

             case 36:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var freeCnt, freeTotalCnt;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.slots.Backup();
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.drumsGame.toFreeGame();
              freeCnt = SlotsFacade.dm.GetFreeTime();
              freeTotalCnt = SlotsFacade.dm.GetTotalFree();
              SlotsFacade.bottomCmp.ShowFreeModel(true, freeTotalCnt - freeCnt, freeTotalCnt);
              _context4.next = 11;
              return SlotsFacade.delayTime(.5);

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.slots.Resume();
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.soundMgr.playBgm();
              SlotsFacade.drumsGame.toNormalGame();
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context5.next = 9;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context5.next = 9;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterBonusGame: function enterBonusGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var spinData;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              if (spinData.bonusResult) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              _context6.next = 5;
              return SlotsFacade.slots.playBonusResult();

             case 5:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enterWheelGame: function enterWheelGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var wheelGame;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              wheelGame = SlotsFacade.dm.wheelGame;
              if (wheelGame) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");

             case 3:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context7.next = 7;
              return new Promise(function(res) {
                SlotsFacade.wheelJpGame.open(res);
              });

             case 7:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8313SkDwJIc5Ghi45NFNN1", "LordCaesar_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        bonusTrail: null,
        extraBonusRow: null,
        wheelGame: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this.bonusTrail = deskInfo.bonusTrail;
        this.extraBonusRow = deskInfo.extraBonusRow;
        this.wheelGame = deskInfo.wheelGame;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        this.wheelGame = null;
        if (200 == msg.code) {
          this.bonusTrail = msg.bonusTrail;
          this.extraBonusRow = msg.extraBonusRow;
          this.wheelGame = msg.wheelGame;
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
        var bonusResult = this._gameInfo.bonusResult;
        if (bonusResult && 1 == bonusResult.type) return bonusResult.freeCnt;
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
      getBonusIndexs: function getBonusIndexs() {
        if (!this.bonusData) return [];
        var ret = [];
        var scatterId = this.getGameCfg().scatterId;
        var cards = this.getSpinData().resultCards;
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i];
          c == scatterId && ret.push(i + 1);
        }
        return ret;
      },
      getColCards: function getColCards(colIndex) {
        var data = this._gameInfo.resultCards;
        var ret = [];
        var cfg = this.getGameCfg();
        var col = cfg.col;
        var row = cfg.row;
        for (var i = 0; i < row; i++) ret.push(data[colIndex + i * col]);
        return ret;
      },
      getFreeType: function getFreeType() {
        var ret = 1;
        if (this.hasFree()) {
          var count = this.bonusTrail.count;
          ret = this.bonusTrail.superBonus.includes(count) ? 3 : this.bonusTrail.megaIdx.includes(count) ? 2 : 1;
        }
        return ret;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
      },
      getJpValue: function getJpValue(jpType) {
        var baseArr = cc.vv.AppData.getGameJackpot(this._gameId);
        var jpBase = 10;
        baseArr && (jpBase = baseArr[jpType]);
        return this.GetTotalBet() * jpBase;
      },
      getBonusCoin: function getBonusCoin() {
        var bonusResult = this.getSpinData().bonusResult;
        if (!bonusResult || !bonusResult.winCoin) return 0;
        return bonusResult.winCoin;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  LordCaesar_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a269bL4C9C3oWIJ8kt+ohx", "LordCaesar_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("LordCaesar_MainPanel");
        this.flowCtrl = this.addComponent("LordCaesar_FlowCtrl");
        this.soundMgr = this.addComponent("LordCaesar_Sound");
        this.popup = this.mainPanel.popup_node.addComponent("LordCaesar_Popup");
        this.drumsGame = this.mainPanel.drums_game_node.getComponent("LordCaesar_DrumsGame");
        this.wheelJpGame = this.mainPanel.wheel_game.getComponent("LordCaesar_WheelJPGame");
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LordCaesar_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b0db086yZKOrFwTFplrnPh", "LordCaesar_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.bg_free = this.node.getChildByName("bg_free");
        this.character = this.node.getChildByName("character");
        this.slots = this.node.getChildByName("slots");
        this.drums_game_node = this.slots.getChildByName("drums_game_node");
        this.wheel_game = this.node.getChildByName("wheel_game");
        this.popup_node = this.node.getChildByName("popup_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.active = 0 == type;
        this.bg_free.active = 1 == type;
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        SlotsFacade.soundMgr.playEffect("transition_free");
        var qp = cc.find("qp01", this.transition_node);
        qp.active = true;
        qp.opacity = 0;
        cc.tween(qp).to(.3, {
          opacity: 255
        }).start();
        var spine = cc.find("spine", qp).getComponent(sp.Skeleton);
        spine.setAnimation(0, "skill02", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          qp.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36c50OErqhJmrolM+k25oAx", "LordCaesar_Popup");
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
        bg: cc.Node
      },
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
      },
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showWinFreeCoin: function showWinFreeCoin(goldNumb) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_coin");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              _context.next = 14;
              return new Promise(function(res) {
                var okBtn = panel.getChildByName("btn_ok");
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("common_click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    okBtn.getComponent(cc.Button).interactable = false;
                    _this.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 14:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinJpCoin: function showWinJpCoin(jpType, goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, i, title, titleSpine, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("win_jp_show");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("bg").getComponent("ImgSwitchCmp").setIndex(jpType);
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              panel.getChildByName("label_bg").getComponent("ImgSwitchCmp").setIndex(jpType);
              for (i = 0; i < 4; i++) {
                title = panel.getChildByName("title" + i);
                titleSpine = panel.getChildByName("title_spine" + i).getComponent(sp.Skeleton);
                if (i == jpType) {
                  title.active = true;
                  titleSpine.node.active = true;
                  titleSpine.setAnimation(0, "animation", true);
                } else {
                  title.active = false;
                  titleSpine.node.active = false;
                }
              }
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context2.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              _context2.next = 17;
              return new Promise(function(res) {
                var okBtn = panel.getChildByName("btn_ok");
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("win_jp_click");
                  okBtn.stopAllActions();
                  okBtn.getComponent(cc.Button).interactable = false;
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
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

             case 17:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, freeType) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, uiName, i, ui, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              freeType = freeType || 1;
              SlotsFacade.soundMgr.playEffect("free_dialog_start_show");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent(cc.Label).string = cnt + "";
              uiName = "ui_" + freeType;
              for (i = 0; i < 3; i++) {
                ui = panel.getChildByName("ui_" + (i + 1));
                ui.active = ui.name == uiName;
              }
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context3.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              _context3.next = 16;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("common_click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  okBtn.getComponent(cc.Button).interactable = false;
                  cc.tween(panel).to(.5, {
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

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9474diBsDtD1LCSAiDFx3F6", "LordCaesar_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        }, 0);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  LordCaesar_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "563ebFm4JxMN4s0Zlyb6NcX", "LordCaesar_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  LordCaesar_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a27f5qs4+dMiK0Z52gSN45z", "LordCaesar_Slots");
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
        particle_node: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.particle_node = this.node.getChildByName("particle_node");
        this.particle_node.active = false;
      },
      StartMove: function StartMove() {
        this._super();
        0 == SlotsFacade.dm.GetTotalFree() && SlotsFacade.soundMgr.playBgm();
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
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this.GetSymbolByIdx(element));
        });
        return ret;
      },
      showAllSymbolsToNormal: function showAllSymbolsToNormal() {
        this._reels.forEach(function(element) {
          element._symbols.forEach(function(s) {
            s.ShowKuang(false);
            s.ShowNormal();
          });
        });
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        var reel = this._reels[col];
        var pos = reel.GetSymbolPosByRow(row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      bonusShake: function bonusShake() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spinData, shakeTime, shakeOffset, i, p;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              if (spinData.bonusResult) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("reel_notify_s");
              shakeTime = 1.3;
              shakeOffset = 10;
              _this2.particle_node.active = true;
              for (i = 0; i < 6; i++) {
                p = _this2.particle_node.getChildByName("p" + (i + 1)).getComponent(cc.ParticleSystem);
                p.resetSystem();
              }
              Global.shakeNode(_this2.node, shakeOffset, shakeTime);
              _context.next = 11;
              return SlotsFacade.delayTime(1.1);

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      allSymbolsToStartMove: function allSymbolsToStartMove() {
        for (var i = 0; i < this._reels.length; i++) {
          var symbols = this._reels[i]._symbols;
          for (var j = 0; j < symbols.length; j++) symbols[j].StartMove();
        }
      },
      playBonusResult: function playBonusResult() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var spinData, bonusResult, cards, index, idx, symbol, addfreeCnt;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              if (spinData.bonusResult) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              _this3.allSymbolsToStartMove();
              bonusResult = spinData.bonusResult;
              cards = SlotsFacade.dm.getColCards(bonusResult.col - 1);
              index = cards.indexOf(_this3._cfg.scatterId);
              if (!(-1 != index)) {
                _context2.next = 25;
                break;
              }
              idx = index * _this3._cfg.col + bonusResult.col;
              symbol = _this3.GetSymbolByIdx(idx);
              addfreeCnt = false;
              SlotsFacade.dm.hasFree() && 1 == bonusResult.type && (addfreeCnt = 2 == bonusResult.freeCnt);
              _context2.next = 14;
              return symbol.playGuBonusReel(addfreeCnt);

             case 14:
              SlotsFacade.drumsGame.reelBingo(bonusResult.col);
              _context2.next = 17;
              return SlotsFacade.delayTime(1);

             case 17:
              if (!(3 == bonusResult.type && bonusResult.winCoin)) {
                _context2.next = 22;
                break;
              }
              _context2.next = 20;
              return _this3.addBonusCoin(bonusResult.winCoin);

             case 20:
              cc.vv.gameData.AddCoin(bonusResult.winCoin);
              cc.vv.gameData.GetSlotsScript()._topScript.ShowCoin();

             case 22:
              if (!(1 == bonusResult.type && SlotsFacade.dm.canCollect() && SlotsFacade.dm.isFistTriggerFree())) {
                _context2.next = 25;
                break;
              }
              _context2.next = 25;
              return SlotsFacade.drumsGame.updateCollectProgress();

             case 25:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      addBonusCoin: function addBonusCoin(winCoin) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              nWin = winCoin;
              nTotal = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context3.next = 5;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 5:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LordCaesar_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0d1c4U9b9I76HPFMMiH0fu", "LordCaesar_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/LordCaesar/",
        _isPlayBgm: false
      },
      playEffect: function playEffect(audioName, isLoop) {
        return cc.vv.AudioManager.playEff(this._soundPath, audioName, true, isLoop);
      },
      stopEffectByName: function stopEffectByName(audioName) {
        cc.vv.AudioManager.stopEffectByName(audioName);
      },
      stopEffect: function stopEffect() {
        cc.vv.AudioManager.stopAudio();
      },
      playBgm: function playBgm(bgmName) {
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("free_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_WheelJPGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8f3etM3HBPUoDGFmSLApFK", "LordCaesar_WheelJPGame");
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
    var ReelCfg = [ [ 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0 ], [ 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1 ], [ 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2 ], [ 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3 ] ];
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        symbol: cc.Node,
        reel: cc.Node,
        popup_start: cc.Node,
        win_flag: cc.Node,
        jp_node: cc.Node,
        _cbHandler: null,
        _reelLen: 11,
        _itemHeight: 163,
        _symbolItems: [],
        _reelResult: null,
        _moveObj: null,
        _jpData: null
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onMsg, this);
        for (var i = 0; i < this._reelLen; i++) {
          var item = cc.instantiate(this.symbol);
          item.active = true;
          item.parent = this.reel;
          item.idx = i;
          this._symbolItems.push(item);
        }
        this._itemHeight = this._symbolItems[0].height;
        this.setReelPos();
        this.reel.y = -this._itemHeight * this._reelLen / 2;
        this._initMoveObj();
      },
      setReelPos: function setReelPos() {
        for (var i = 0; i < this._symbolItems.length; i++) {
          var item = this._symbolItems[i];
          item.y = this._itemHeight / 2 + this._itemHeight * i;
        }
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onMsg, false, this);
      },
      _initMoveObj: function _initMoveObj() {
        this._moveObj = {
          round: 6,
          minSpeed: 50,
          maxSpeed: 2400,
          currSpeed: 0,
          acc: 15,
          totalDis: 0,
          movedDis: 0,
          canMove: false,
          addSpeedPer: .855
        };
        this._moveObj.currSpeed = this._moveObj.minSpeed;
        this._moveObj.totalDis = this._moveObj.round * this._reelLen * this._itemHeight;
      },
      onMsg: function onMsg(msg) {
        console.log("#wheeljpgame:", msg);
        if (200 == msg.code && 1 == msg.data.rtype) {
          SlotsFacade.soundMgr.playEffect("bonus_wheel_spin");
          this._jpData = msg.data.jackpot;
          this._reelResult = this.genReelData(this._jpData.id - 1);
          this._initMoveObj();
          this._moveObj.canMove = true;
        }
      },
      genReelData: function genReelData(jpId) {
        return ReelCfg[jpId].concat();
      },
      sendMsg: function sendMsg() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData._gameId;
        req.data = {
          rtype: 1
        };
        cc.vv.NetManager.send(req);
      },
      close: function close() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.mainPanel.showSceneTransition();
              _context.next = 3;
              return SlotsFacade.delayTime(1.5);

             case 3:
              _this.panel.active = false;
              _context.next = 6;
              return SlotsFacade.delayTime(.5);

             case 6:
              if (!SlotsFacade.dm.hasFree()) {
                _context.next = 11;
                break;
              }
              cc.vv.gameData.GetBottomScript().SetWin(cc.vv.gameData.GetBottomScript().getCurrentWin() + _this._jpData.value);
              SlotsFacade.soundMgr.playFreeBgm();
              _context.next = 15;
              break;

             case 11:
              cc.vv.gameData.AddCoin(_this._jpData.value);
              _context.next = 14;
              return new Promise(function(sucess, failed) {
                _this.ShowBottomWin(_this._jpData.value, _this._jpData.value, true, sucess);
              });

             case 14:
              SlotsFacade.soundMgr.playBgm();

             case 15:
              _this._cbHandler && _this._cbHandler();

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      open: function open(cbHandler) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._cbHandler = cbHandler;
              SlotsFacade.mainPanel.showSceneTransition(function() {
                SlotsFacade.soundMgr.playBgm("bonus_bgm");
                _this2.showPopupStart();
              });
              _context2.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
              _this2._showJpInfo();
              _this2.panel.active = true;
              _this2._initReel();

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _showJpInfo: function _showJpInfo() {
        for (var i = 0; i < 4; i++) {
          var item = this.jp_node.getChildByName("jp" + i);
          var label = item.getChildByName("lbl_num");
          label.getComponent(cc.Label).string = Global.FormatNumToComma(SlotsFacade.dm.getJpValue(i));
        }
      },
      showPopupStart: function showPopupStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, bg, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              panel = _this3.panel.getChildByName("popup_start");
              panel.active = true;
              bg = panel.getChildByName("bg");
              bg.active = true;
              bg.opacity = 0;
              cc.tween(bg).to(.3, {
                opacity: 255
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "animation1", false);
              spine.addAnimation(0, "animation2", true);
              _context3.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
              _context3.next = 14;
              return new Promise(function(res) {
                var handler = function handler() {
                  _this3.sendMsg();
                  SlotsFacade.soundMgr.playEffect("bonus_wheel_click");
                  panel.stopAllActions();
                  panel.off(cc.Node.EventType.TOUCH_END, handler);
                  spine.setAnimation(0, "animation3", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(panel, handler);
                panel.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 14:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _initReel: function _initReel() {
        var reelData = this.genReelData(Math.floor(4 * Math.random()));
        var reelDataLen = reelData.length;
        for (var i = 0; i < this._symbolItems.length; i++) {
          var item = this._symbolItems[i];
          var cmp = item.getComponent("ImgSwitchCmp");
          var jpId = reelData[i % reelDataLen];
          cmp.setIndex(jpId);
        }
      },
      _reelCmp: function _reelCmp() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var i, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bonus_active");
              for (i = 0; i < 2; i++) {
                spine = _this4.win_flag.getChildByName("spine" + (i + 1)).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "animation", true);
              }
              _context4.next = 4;
              return SlotsFacade.delayTime(2);

             case 4:
              _this4.win_flag.getChildByName("spine1").active = false;
              _this4.win_flag.getChildByName("spine2").active = false;
              _context4.next = 8;
              return SlotsFacade.popup.showWinJpCoin(_this4._jpData.id - 1, _this4._jpData.value);

             case 8:
              _this4.close();

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      update: function update(dt) {
        if (!this._moveObj || !this._moveObj.canMove) return;
        var per = this._moveObj.movedDis / this._moveObj.totalDis;
        per = Math.min(per, 1);
        var speed = this._moveObj.currSpeed;
        per < this._moveObj.addSpeedPer ? speed += this._moveObj.acc : per >= this._moveObj.addSpeedPer && (speed -= this._moveObj.acc);
        speed = Math.max(this._moveObj.minSpeed, speed);
        speed = Math.min(this._moveObj.maxSpeed, speed);
        this._moveObj.currSpeed = speed;
        var dis = this._moveObj.currSpeed * dt;
        dis > this._itemHeight && (dis = this._itemHeight);
        this._moveObj.movedDis += dis;
        for (var i = 0; i < this._symbolItems.length; i++) {
          var item = this._symbolItems[i];
          item.y -= dis;
        }
        for (var _i = 0; _i < this._symbolItems.length; _i++) {
          var _item = this._symbolItems[_i];
          if (_item.y < -this._itemHeight / 2) {
            var nextIdx = _item.idx - 1;
            nextIdx < 0 && (nextIdx = this._reelLen - 1);
            var nextItem = this._symbolItems[nextIdx];
            _item.y = nextItem.y + this._itemHeight;
            _item.idx == this._reelLen - 1 && (this._moveObj.round -= 1);
            if (0 == this._moveObj.round) {
              var cmp = _item.getComponent("ImgSwitchCmp");
              var jpId = this._reelResult[_item.idx % this._reelResult.length];
              cmp.setIndex(jpId);
            }
            if (this._moveObj.round < 0) {
              this._moveObj.canMove = false;
              this._reelCmp();
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LordCaesar_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae587Wr5q5BOYk3xPwiAGa5", "LordCaesar_symbol");
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
      properties: {
        isEpic: false
      },
      playGuBonusReel: function playGuBonusReel(addFreeCnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var id, cfg, aniNode, topShowNode, nodeSp, spine, freeCntSpine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              id = _this.GetShowId();
              cfg = SlotsFacade.dm.getGameCfg();
              if (!(id != cfg.scatterId)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");

             case 4:
              SlotsFacade.soundMgr.playEffect("scatter_active");
              _this.setAnimationToTop(false);
              _this._showNode && (_this._showNode.active = false);
              aniNode = _this.setAnimationToTop(true);
              aniNode.active = true;
              topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
              topShowNode.active = true;
              aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - _this._symbolIdx + 10 * _this._reelIdx;
              nodeSp = topShowNode.getComponent(sp.Skeleton);
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              spine = aniNode.getChildByName("gu_lizifei").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, [ "animation3", "animation2", "animation1" ][_this._symbolIdx], false);
              if (addFreeCnt) {
                freeCntSpine = aniNode.getChildByName("gu_2").getComponent(sp.Skeleton);
                freeCntSpine.node.active = true;
                freeCntSpine.setAnimation(0, "animation", false);
              }
              _context.next = 20;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  res();
                });
              });

             case 20:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setAnimationToTop: function setAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
            cloneNode && cc.isValid(cloneNode) || (cloneNode = cc.instantiate(this.node));
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            cloneNode.parent = this._topAniNode;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx);
            cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            this.node.active = false;
            return cloneNode;
          }
          var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
          showNode && showNode.removeFromParent();
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "LordCaesar_BonusReel1", "LordCaesar_BonusReel2", "LordCaesar_Cfg", "LordCaesar_DrumsGame", "LordCaesar_FlowCtrl", "LordCaesar_GameData", "LordCaesar_Logic", "LordCaesar_MainPanel", "LordCaesar_Popup", "LordCaesar_PrizePool", "LordCaesar_Reel", "LordCaesar_Slots", "LordCaesar_Sound", "LordCaesar_WheelJPGame", "LordCaesar_symbol" ]);