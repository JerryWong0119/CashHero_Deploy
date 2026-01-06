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
  Sphinx_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c88a4QKeZFLYIPwQzXFNgVd", "Sphinx_Cfg");
    "use strict";
    var _symbol, _cardmap, _cardmapFree;
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
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        idle_ani: {
          name: "animation2",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        await_ani: {
          name: "animation2",
          zIndex: 100
        },
        prep_node: "jinbizhuan",
        prep_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 1
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 2
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 3
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 4
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 5
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 6
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 7
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 8
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 9
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 10
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 11
      }), _defineProperty(_symbol, 15, {
        node: "s15",
        win_node: "w15",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        del_id: 12
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        await_ani: {
          name: "animation2",
          zIndex: 100
        },
        prep_node: "caibizhuan",
        prep_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _symbol),
      bonus_symbol: {
        free: {
          node: "w_free",
          open_ani: {
            name: "animation%s",
            zIndex: 100
          },
          trigger_ani: {
            name: "animation%s_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation%s_2",
            zIndex: 100
          }
        },
        jackpot: {
          node: "w_jp",
          open_ani: {
            name: "animation",
            zIndex: 100
          },
          trigger_ani: {
            name: "animation_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation_3",
            zIndex: 100
          }
        },
        coin: {
          node: "w_coin",
          open_ani: {
            name: "animation",
            zIndex: 100
          },
          show_ani: {
            name: "animation_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation_3",
            zIndex: 100
          }
        },
        megaCoin: {
          node: "w_m_coin",
          open_ani: {
            name: "animation",
            zIndex: 100
          },
          show_ani: {
            name: "animation_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation_3",
            zIndex: 100
          }
        },
        superCoin: {
          node: "w_s_coin",
          open_ani: {
            name: "animation",
            zIndex: 100
          },
          show_ani: {
            name: "animation_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation_3",
            zIndex: 100
          }
        },
        powerUp: {
          node: "w_power",
          open_ani: {
            name: "animation",
            zIndex: 100
          },
          show_ani: {
            name: "animation_2",
            zIndex: 100
          },
          trigger_ani: {
            name: "animation_2",
            zIndex: 100
          },
          resume_ani: {
            name: "animation_3",
            zIndex: 100
          }
        }
      },
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Sphinx_Slots",
        Reels: "Sphinx_Reel",
        Symbols: "Sphinx_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 128
      },
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 13, 8, 8, 4, 7, 7, 14, 2, 6, 6, 10, 4, 5, 4, 2, 5, 4, 11, 10, 2, 4, 11, 11, 11, 4, 8, 7, 7, 2, 5, 4, 14, 12, 12, 5, 5, 12, 4, 4, 9, 9, 15, 6, 9, 15, 6, 5, 12, 12, 7, 8, 15, 8, 4, 4, 7, 4, 4, 11, 9, 6, 6, 7, 10, 13, 5, 13, 10, 6, 6, 10, 4, 4, 9, 5, 14, 15, 8, 14, 14, 13, 13, 7, 5, 5, 6, 6, 15 ]), 
      _defineProperty(_cardmap, 2, [ 7, 5, 5, 10, 4, 4, 11, 11, 2, 4, 9, 5, 4, 6, 2, 13, 13, 6, 6, 1, 14, 14, 9, 2, 6, 6, 1, 4, 4, 1, 4, 2, 5, 6, 15, 15, 15, 12, 12, 12, 4, 4, 5, 10, 7, 11, 11, 7, 7, 8, 14, 14, 7, 7, 14, 15, 15, 8, 9, 1, 8, 5, 8, 9, 9, 4, 1, 6, 10, 10, 10, 4, 4, 6, 7, 13, 7, 4, 8, 8, 4, 5, 12, 12, 13, 13, 6, 5, 5, 4, 5, 6, 11 ]), 
      _defineProperty(_cardmap, 3, [ 1, 11, 11, 8, 8, 1, 13, 2, 5, 5, 14, 14, 6, 7, 12, 12, 2, 9, 9, 15, 6, 14, 14, 14, 7, 2, 1, 10, 7, 12, 4, 2, 6, 5, 5, 13, 13, 8, 7, 7, 12, 8, 8, 15, 15, 1, 15, 15, 7, 10, 10, 4, 11, 5, 5, 6, 6, 4, 4, 5, 5, 7, 7, 4, 13, 13, 12, 5, 10, 10, 4, 4, 8, 9, 1, 6, 11, 11, 4, 5, 6, 4, 9, 6, 4, 6, 4, 4, 9, 6, 4, 4, 4 ]), 
      _defineProperty(_cardmap, 4, [ 12, 12, 5, 5, 1, 9, 9, 13, 13, 2, 7, 1, 6, 6, 10, 5, 2, 6, 6, 8, 5, 4, 10, 10, 10, 2, 8, 11, 11, 7, 7, 9, 9, 8, 8, 2, 1, 4, 4, 14, 14, 4, 4, 15, 15, 15, 10, 6, 6, 5, 5, 1, 12, 12, 12, 13, 5, 15, 15, 13, 13, 7, 14, 7, 1, 4, 6, 6, 8, 11, 4, 4, 7, 7, 11, 4, 14, 14, 6, 9, 4, 4, 7, 6, 4, 11, 8, 5, 4, 4, 5, 4, 5 ]), 
      _defineProperty(_cardmap, 5, [ 7, 9, 4, 13, 13, 15, 15, 2, 13, 13, 13, 6, 14, 14, 14, 8, 7, 2, 1, 4, 4, 6, 7, 7, 10, 10, 10, 2, 6, 8, 14, 12, 12, 5, 5, 2, 4, 6, 11, 11, 6, 6, 7, 9, 8, 8, 11, 11, 11, 7, 4, 6, 6, 10, 5, 5, 1, 4, 1, 4, 4, 7, 8, 5, 1, 7, 15, 15, 6, 6, 1, 12, 12, 5, 5, 9, 4, 4, 12, 5, 4, 4, 9, 5, 9, 5, 15, 4, 4, 10, 8, 14, 4 ]), 
      _cardmap),
      cardmapFree: (_cardmapFree = {}, _defineProperty(_cardmapFree, 1, [ 7, 8, 8, 5, 8, 6, 6, 2, 5, 4, 9, 8, 8, 4, 2, 6, 6, 8, 6, 7, 7, 6, 7, 7, 9, 9, 6, 4, 8, 5, 5, 7, 5, 5, 8, 7, 4, 9, 4, 5, 5, 7, 4, 5, 5, 6, 6, 4, 9, 9, 4, 7, 6, 4, 7, 4, 9, 9, 4, 4 ]), 
      _defineProperty(_cardmapFree, 2, [ 8, 5, 9, 7, 7, 5, 5, 2, 8, 8, 6, 5, 6, 6, 4, 2, 7, 4, 7, 8, 7, 8, 9, 4, 1, 6, 6, 5, 6, 5, 5, 6, 4, 9, 9, 8, 8, 4, 7, 9, 9, 5, 7, 7, 5, 5, 4, 1, 4, 8, 4, 1, 4, 6, 4, 6, 4, 6, 7, 7, 4, 9, 9, 1 ]), 
      _defineProperty(_cardmapFree, 3, [ 4, 5, 5, 7, 4, 7, 2, 6, 6, 8, 8, 1, 7, 4, 2, 6, 8, 7, 5, 9, 9, 4, 8, 5, 4, 9, 1, 6, 1, 5, 7, 9, 9, 4, 9, 7, 7, 8, 5, 6, 6, 4, 6, 6, 5, 5, 7, 1, 7, 4, 7, 8, 6, 4, 5, 5, 8, 9, 4, 8, 9, 6, 4, 4 ]), 
      _defineProperty(_cardmapFree, 4, [ 4, 8, 8, 5, 5, 1, 6, 2, 7, 7, 4, 7, 7, 1, 6, 2, 7, 9, 6, 4, 1, 4, 6, 9, 4, 9, 9, 7, 8, 8, 4, 6, 6, 9, 9, 4, 5, 4, 6, 8, 8, 7, 5, 1, 5, 5, 7, 5, 6, 6, 9, 8, 4, 5, 5, 4, 8, 4, 6, 7, 9, 5, 4, 7 ]), 
      _defineProperty(_cardmapFree, 5, [ 8, 9, 4, 7, 4, 2, 9, 5, 4, 6, 6, 5, 2, 4, 6, 8, 8, 9, 9, 5, 8, 8, 6, 6, 4, 1, 6, 6, 8, 8, 9, 7, 4, 9, 5, 4, 1, 5, 4, 6, 4, 5, 8, 4, 1, 7, 7, 9, 7, 5, 7, 7, 6, 6, 9, 7, 7, 4, 5, 7, 5, 1, 5, 4 ]), 
      _cardmapFree),
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      helpItems: [ "games/Sphinx/prefab/help_node/LMSlots_Help_item1", "games/Sphinx/prefab/help_node/LMSlots_Help_item2", "games/Sphinx/prefab/help_node/LMSlots_Help_item3", "games/Sphinx/prefab/help_node/LMSlots_Help_item4", "games/Sphinx/prefab/help_node/LMSlots_Help_item5", "games/Sphinx/prefab/help_node/LMSlots_Help_item6", "games/Sphinx/prefab/help_node/LMSlots_Help_item7", "games/Sphinx/prefab/help_node/LMSlots_Help_item8", "games/Sphinx/prefab/help_node/LMSlots_Help_item9" ],
      commEffect: {
        path: "games/Sphinx/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 1.5,
      normalBgm: "base_bgm",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Sphinx/",
        reelStopSound: "reel_stop",
        symbolStopSound: [ "scatter1", "scatter2", "scatter3", "scatter4", "scatter5" ],
        antSound: [ "reel_active1", "reel_active2", "reel_active3" ],
        antSpeed: 2200,
        type: "free"
      }, {
        id: [ 3, 301 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        path: "games/Sphinx/",
        reelStopSound: "reel_stop",
        symbolStopSound: [ "coin_land1", "coin_land2", "coin_land3", "coin_land4", "coin_land5" ],
        antSpeed: 2200,
        type: "bonus"
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Sphinx_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46934bchWpL4qO7FGbEfZQ9", "Sphinx_Collect");
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
      start: function start() {},
      Init: function Init() {
        this._node_collect = cc.find("safe_node/slots/node_collect", this.node);
        for (var i = 1; i <= 10; i++) {
          var item = cc.find("node_items/item" + i, this._node_collect);
          this._itemList.push(item);
        }
        this._spine_super = cc.find("spine_super", this._node_collect);
        var btn_lock = cc.find("btn_lock", this._node_collect);
        btn_lock.off("click");
        Global.btnClickEvent(btn_lock, this.clickLockBtn, this);
        this._spine_lock = cc.find("btn_lock/spine_lock", this._node_collect);
        this._par_fly = cc.find("par_fly", this._node_collect);
        this._par_fly.active = false;
        this._spr_tip = cc.find("safe_node/slots/spr_collect_tip", this.node);
        this._spr_tip.active = false;
        this.initItems();
        this.showLockSpin();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      initItems: function initItems() {
        this._bonusTrail = cc.vv.gameData.getBonusTrail();
        var curCnt = this._bonusTrail.count;
        curCnt == this._bonusTrail.totalCount && (curCnt = 0);
        for (var i = 0; i < this._itemList.length; i++) {
          cc.find("spr", this._itemList[i]).active = i < curCnt;
          var spine_dange = cc.find("spine_dange", this._itemList[i]);
          spine_dange.active = i < curCnt;
          spine_dange.active && spine_dange.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
        }
        var spine_jl = cc.find("spine_jl", this._itemList[9]);
        if (9 === curCnt) {
          spine_jl.active = true;
          spine_jl.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        } else spine_jl.active = false;
        this._spine_super.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
      },
      playGainItemAnim: function playGainItemAnim(list) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
                  var curCnt, item, _loop, i, spr, spine_dange;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      if (!_this._isLock) {
                        _context.next = 3;
                        break;
                      }
                      success();
                      return _context.abrupt("return");

                     case 3:
                      _this._bonusTrail = cc.vv.gameData.getBonusTrail();
                      curCnt = _this._bonusTrail.count;
                      item = _this._itemList[curCnt - 1];
                      _loop = function _loop(i) {
                        var par = cc.instantiate(_this._par_fly);
                        par.parent = _this._node_collect;
                        var symbol = list[i];
                        var startPos = _this._node_collect.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                        var endPos = _this._node_collect.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
                        par.position = startPos;
                        par.active = true;
                        par.getComponent(cc.ParticleSystem).resetSystem();
                        cc.tween(par).to(.5, {
                          position: endPos
                        }).call(function() {
                          par.destroy();
                        }).start();
                      };
                      for (i = 0; i < list.length; i++) _loop(i);
                      _context.next = 10;
                      return cc.vv.gameData.awaitTime(.5);

                     case 10:
                      spr = cc.find("spr", item);
                      spine_dange = cc.find("spine_dange", item);
                      if (!(curCnt < 10)) {
                        _context.next = 19;
                        break;
                      }
                      spr.active = true;
                      spine_dange.active = true;
                      spine_dange.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                      spine_dange.getComponent(sp.Skeleton).addAnimation(0, "animation1", true);
                      _context.next = 29;
                      break;

                     case 19:
                      cc.find("spine_jl", item).active = false;
                      spr.active = true;
                      spine_dange.active = true;
                      spine_dange.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                      spine_dange.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                      _context.next = 26;
                      return cc.vv.gameData.awaitTime(.2);

                     case 26:
                      _this._spine_super.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      _context.next = 29;
                      return cc.vv.gameData.awaitTime(.8);

                     case 29:
                      success();

                     case 30:
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
      showLockSpin: function showLockSpin() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        if (curBet < needBet) {
          this._isLock = true;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        } else {
          this._isLock = false;
          this._spine_lock.active = false;
        }
      },
      clickLockBtn: function clickLockBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.isSuperGame()) return;
        if (cc.vv.gameData.isBonusGame()) return;
        if (this._isLock) {
          var needBet = cc.vv.gameData.getNeedBet();
          var allMults = cc.vv.gameData.GetBetMults();
          needBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        if (curBet < needBet && !this._isLock) {
          Global.SlotsSoundMgr.playEffect("sb_lock");
          this._isLock = true;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          this._spine_lock.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
          this.showTipSpr(false);
        } else if (curBet >= needBet && this._isLock) {
          Global.SlotsSoundMgr.playEffect("sb_unlock");
          this._isLock = false;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          this.showTipSpr(true);
        }
      },
      showTipSpr: function showTipSpr(bShow) {
        var _this2 = this;
        this._spr_tip.stopAllActions();
        if (bShow) {
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          cc.tween(this._spr_tip).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).delay(2).to(.5, {
            scale: 0
          }).call(function() {
            _this2._spr_tip.active = false;
          }).start();
        } else this._spr_tip.active && cc.tween(this._spr_tip).to(this._spr_tip.scaleX / 2, {
          scale: 0
        }).call(function() {
          _this2._spr_tip.active = false;
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  Sphinx_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c64c7LntM1AULhgoM9sIuQ2", "Sphinx_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._bonusTrail = deskInfo.bonusTrail;
        this._bonusInfo = deskInfo.bonusInfo;
        this._jackpotGame = deskInfo.jackpotGame;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusTrail = msg.bonusTrail;
          this._bonusInfo = msg.bonusInfo;
          this._jackpotGame = msg.jackpotGame;
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(scp) {
        this._popupScp = scp;
      },
      getPopupScript: function getPopupScript() {
        return this._popupScp;
      },
      setCollectScript: function setCollectScript(scp) {
        this._collectScp = scp;
      },
      getCollectScript: function getCollectScript() {
        return this._collectScp;
      },
      setPickScript: function setPickScript(scp) {
        this._pickScp = scp;
      },
      getPickScript: function getPickScript() {
        return this._pickScp;
      },
      isSuperGame: function isSuperGame() {
        return this._isSuper;
      },
      setIsSuper: function setIsSuper(val) {
        this._isSuper = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFree;
      },
      setIsFree: function setIsFree(val) {
        this._isFree = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonus;
      },
      setIsBonus: function setIsBonus(val) {
        this._isBonus = val;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(val) {
        this._freeWinCoin = val;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getBonusTrail: function getBonusTrail() {
        return this._bonusTrail;
      },
      getBonusInfo: function getBonusInfo() {
        return this._bonusInfo;
      },
      getJackpotGame: function getJackpotGame() {
        return this._jackpotGame;
      },
      setJackpotGame: function setJackpotGame(val) {
        this._jackpotGame = val;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Sphinx_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9992dCbnpFA4rcEf8LLapsP", "Sphinx_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Sphinx_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_collect = this.node.addComponent("Sphinx_Collect");
        script_collect.Init();
        cc.vv.gameData.setCollectScript(script_collect);
        var script_pick = this.node.addComponent("Sphinx_Pick");
        script_pick.Init();
        cc.vv.gameData.setPickScript(script_pick);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Sphinx_Pick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1c272kBtxHnI0mNGVxpSCT", "Sphinx_Pick");
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
    var itemType = {
      none: 0,
      Mini: 1,
      Minor: 2,
      Major: 3,
      Maxi: 4,
      Grand: 5,
      jackpotBoost: 6,
      megaJackpotBoost: 7,
      superJackpotBoost: 8,
      jackpotRemove: 9
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _itemList: [],
        _winItemList: [],
        _choiceIdxs: [],
        _canClick: false,
        _removeJpCnt: 0
      },
      start: function start() {},
      Init: function Init() {
        this._spr_bg_pick = cc.find("safe_node/spr_bg_pick", this.node);
        this._spr_bg_pick.active = false;
        this._node_slotsAni = cc.find("safe_node/slots/top_ani", this.node);
        this._node_slotsReel = cc.find("safe_node/slots/reels", this.node);
        this._node_pick = cc.find("safe_node/node_pick", this.node);
        this._node_pick.active = false;
        this._node_tit = cc.find("node_tit", this._node_pick);
        this._spine_db = cc.find("layout/spine_db", this._node_pick);
        this._spine_db.active = false;
        this._node_items = cc.find("layout/node_items", this._node_pick);
        for (var i = 1; i <= 18; i++) {
          var item = cc.find("item" + i, this._node_items);
          Global.btnClickEvent(item, this.onClickItem, this);
          this._itemList.push({
            node: item,
            type: itemType.none
          });
        }
        this._spr_mask = cc.find("layout/spr_mask", this._node_pick);
        this._spr_mask.active = false;
        this._node_top = cc.find("layout/node_top", this._node_pick);
        for (var _i = 1; _i <= 18; _i++) {
          var _item = cc.find("win" + _i, this._node_top);
          _item.active = true;
          for (var idx = 0; idx < _item.childrenCount; idx++) _item.children[idx].active = false;
          this._winItemList.push(_item);
        }
        this._par_fly_jp = cc.find("par_fly_jp", this._node_pick);
        this._par_fly_jp.active = false;
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      initTit: function initTit() {
        cc.find("spr_bonus", this._node_tit).active = false;
        cc.find("spr_freegame", this._node_tit).active = false;
        cc.find("spr_match", this._node_tit).active = true;
      },
      initAllItems: function initAllItems() {
        for (var i = 0; i < this._itemList.length; i++) {
          var pick = cc.find("pick", this._itemList[i].node);
          var choiceIdxs = this._jackpotGame.choiceIdxs;
          var results = this._jackpotGame.results;
          var type = void 0;
          type = choiceIdxs && choiceIdxs.includes(i + 1) ? results[choiceIdxs.indexOf(i + 1)] : itemType.none;
          var animName = this.getAnimNameByType(type);
          pick.getComponent(sp.Skeleton).setAnimation(0, animName, false);
          this._itemList[i].type = type;
          var winNode = cc.find("w" + type, this._winItemList[i]);
          if (0 === type) ; else if (type < 6) {
            winNode.active = true;
            var idxs = this.getSameTypeIdxs(type, this._curCnt - 1);
            idxs.length >= 2 ? winNode.getComponent(sp.Skeleton).setAnimation(0, "animation", true) : winNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          } else {
            winNode.active = true;
            winNode.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", true);
          }
        }
      },
      initWinItems: function initWinItems() {
        for (var i = 0; i < this._winItemList.length; i++) {
          var item = this._winItemList[i];
          for (var idx = 0; idx < item.childrenCount; idx++) item.children[idx].active = false;
        }
      },
      initAllJackpot: function initAllJackpot() {
        var choiceIdxs = this._jackpotGame.choiceIdxs;
        var results = this._jackpotGame.results;
        this._removeJpCnt = 0;
        for (var i = 0; i < choiceIdxs.length; i++) if (9 === results[i]) {
          this._removeJpCnt += 1;
          this.showJackpot(false, this._removeJpCnt, true);
        }
      },
      playItemBlinkAnim: function playItemBlinkAnim() {
        var idxsList = [];
        var length = Global.random(4, 7);
        for (;idxsList.length < length; ) {
          var num = Global.random(1, 18);
          idxsList.includes(num) || idxsList.push(num);
        }
        for (var i = 0; i < idxsList.length; i++) {
          var idx = idxsList[i] - 1;
          this._itemList[idx].type === itemType.none && cc.find("pick", this._itemList[idx].node).getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        }
      },
      gainPickGame: function gainPickGame(isTri) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this._jackpotGame = cc.vv.gameData.getJackpotGame();
                cc.vv.gameData.GetSlotsScript().showTaSpr(false);
                cc.vv.gameData.GetSlotsScript().removeAllFlyNode(false);
                _this._spr_bg_pick.active = true;
                _this._node_slotsAni.active = false;
                _this._node_slotsReel.active = false;
                _this._node_pick.active = true;
                _this._spr_mask.active = false;
                _this._curCnt = _this._jackpotGame.choiceIdxs.length;
                _this.initTit();
                _this.initWinItems();
                _this.initAllItems();
                _this.lockJackpot(_this._jackpotGame.jackpotValues, _this._jackpotGame.currMult);
                _this.initAllJackpot();
                if (!isTri) {
                  _context.next = 17;
                  break;
                }
                _context.next = 17;
                return cc.vv.gameData.awaitTime(1.5);

               case 17:
                Global.SlotsSoundMgr.playBgm("pick_bgm");
                if (!(isTri && _this._jackpotGame.powerUpCnt > 0)) {
                  _context.next = 21;
                  break;
                }
                _context.next = 21;
                return cc.vv.gameData.getPopupScript().playPowerUpAnim(_this._jackpotGame.powerUpCnt);

               case 21:
                _this._node_items.stopAllActions();
                _this._node_items.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                  _this.playItemBlinkAnim();
                }))));
                _context.next = 25;
                return cc.vv.gameData.awaitTime(.5);

               case 25:
                _this._canClick = true;
                _this._gatherInfo = false;
                _this._pickSuccess = success;

               case 28:
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
      endPickGame: function endPickGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var isLock, winCoin, nTotal, bgm;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              _this2._spine_db.active = true;
              _this2._spine_db.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _this2._node_items.stopAllActions();
              _this2.playWinResult();
              isLock = _this2.getPoolBLock(_this2._jackpotGame.jackpot.id - 1);
              isLock || _this2.playWinJpAnim(_this2._jackpotGame.jackpot.id, true);
              _context2.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              winCoin = _this2._jackpotGame.winCoin;
              if (!isLock) {
                _context2.next = 16;
                break;
              }
              _context2.next = 14;
              return cc.vv.gameData.getPopupScript().playEndPickAnim(winCoin);

             case 14:
              _context2.next = 19;
              break;

             case 16:
              _this2.playWinJpAnim(_this2._jackpotGame.jackpot.id, false);
              _context2.next = 19;
              return cc.vv.gameData.getPopupScript().playEndPickJpAnim(winCoin, _this2._jackpotGame.jackpot.id);

             case 19:
              cc.vv.gameData.getPopupScript().playQPMen();
              _context2.next = 22;
              return cc.vv.gameData.awaitTime(2);

             case 22:
              _this2._spr_bg_pick.active = false;
              _this2._node_pick.active = false;
              _this2._node_slotsAni.active = true;
              _this2._node_slotsReel.active = true;
              _this2.unlockJackpot();
              cc.vv.gameData.GetSlotsScript().showTaSpr(true);
              _this2._removeJpCnt = 0;
              _this2.showJackpot(true, 5, true);
              _context2.next = 32;
              return cc.vv.gameData.awaitTime(2);

             case 32:
              nTotal = winCoin;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal += cc.vv.gameData.getFreeWinCoin();
                cc.vv.gameData.setFreeWinCoin(nTotal);
              } else 0 === cc.vv.gameData.GetFreeTime() && cc.vv.gameData.AddCoin(winCoin);
              _context2.next = 36;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, nTotal, true, function() {
                  success();
                });
              });

             case 36:
              if (_this2._pickSuccess) {
                Global.SlotsSoundMgr.stopBgm();
                bgm = cc.vv.gameData.isSuperGame() ? "sb_bgm" : "fg_bgm";
                Global.SlotsSoundMgr.playBgm(bgm);
                _this2._pickSuccess();
                _this2._pickSuccess = null;
              }

             case 37:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onClickItem: function onClickItem(event) {
        var _this3 = this;
        var idx = Number(event.node.name.substring("item".length));
        if (!this._canClick) return;
        if (this._itemList[idx - 1].type !== itemType.none) return;
        var results = this._jackpotGame.results;
        if (this._curCnt >= results.length) return;
        results[this._curCnt] > 5 && (this._canClick = false);
        if (this._choiceIdxs.includes(idx) || this._jackpotGame.choiceIdxs.includes(idx)) return;
        this._curCnt += 1;
        this._choiceIdxs.push(idx);
        this._itemList[idx - 1].type = results[this._curCnt - 1];
        this._needAwait = results[this._curCnt - 1] > 5;
        cc.log("this._needAwait", this._needAwait);
        this.showItemResult(event.node, results[this._curCnt - 1], this._curCnt);
        this._gatherInfo || cc.tween(event.node).call(function() {
          _this3._gatherInfo = true;
        }).delay(.5).call(function() {
          _this3._canClick = false;
          _this3.sendMsg();
        }).start();
      },
      sendMsg: function sendMsg() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: 1,
          choiceIdxs: this._choiceIdxs
        };
        cc.vv.NetManager.send(req, true);
        this._rcvMsg = false;
        this._choiceIdxs = [];
        this._canClick = false;
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 === msg.code) {
          this._rcvMsg = true;
          var data = msg.data;
          this._jackpotGame = data.jackpotGame;
          cc.vv.gameData.setJackpotGame(this._jackpotGame);
        }
      },
      showItemResult: function showItemResult(node, type, curCnt) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var pick, animName, isLast, idxs, _animName, choiceIdxs, i, idx, winNode, jpList, startPos, prizeNode, endPos, singleTime, creTime;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              pick = cc.find("pick", node);
              animName = _this4.getAnimNameByType(type);
              isLast = curCnt === _this4._jackpotGame.results.length;
              if (!isLast) {
                _context3.next = 10;
                break;
              }
              pick.getComponent(sp.Skeleton).setAnimation(0, "animation11", false);
              pick.getComponent(sp.Skeleton).addAnimation(0, animName, false);
              _context3.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _context3.next = 11;
              break;

             case 10:
              pick.getComponent(sp.Skeleton).setAnimation(0, animName, false);

             case 11:
              Global.SlotsSoundMgr.playEffect(type < 6 ? "jp_appear" : "boost_appear");
              _context3.next = 14;
              return cc.vv.gameData.awaitTime(1);

             case 14:
              if (!(type < 6)) {
                _context3.next = 22;
                break;
              }
              idxs = _this4.getSameTypeIdxs(type, curCnt);
              _animName = "animation2";
              idxs.length >= 2 && (_animName = "animation");
              choiceIdxs = _this4._jackpotGame.choiceIdxs;
              for (i = 0; i < idxs.length; i++) {
                idx = choiceIdxs[idxs[i]];
                winNode = cc.find("w" + type, _this4._winItemList[idx - 1]);
                winNode.active = true;
                winNode.getComponent(sp.Skeleton).setAnimation(0, _animName, true);
              }
              _context3.next = 66;
              break;

             case 22:
              if (!(type >= 6)) {
                _context3.next = 66;
                break;
              }
              jpList = [ "MINI", "MINOR", "MAJOR", "MAXI", "GRAND" ];
              startPos = _this4._node_pick.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
              prizeNode = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jpList[_this4._removeJpCnt]);
              endPos = _this4._node_pick.convertToNodeSpaceAR(prizeNode.convertToWorldSpaceAR(cc.v2(0, 0)));
              _this4._par_fly_jp.active = true;
              _this4._par_fly_jp.getComponent(cc.ParticleSystem).resetSystem();
              _this4._par_fly_jp.position = startPos;
              cc.tween(_this4._par_fly_jp).to(.5, {
                position: endPos
              }).start();
              _context3.next = 33;
              return cc.vv.gameData.awaitTime(.5);

             case 33:
              _this4._par_fly_jp.active = false;
              _this4._spine_db.active = true;
              _this4._spine_db.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              singleTime = 1;
              creTime = .1;
              if (!(6 == type)) {
                _context3.next = 45;
                break;
              }
              Global.SlotsSoundMgr.playEffect("jp_boost");
              _this4.increaseJackpot(_this4._jackpotGame.jackpotValues, singleTime, creTime, _this4._jackpotGame.currMult);
              _context3.next = 43;
              return cc.vv.gameData.awaitTime((5 - _this4._removeJpCnt) * creTime);

             case 43:
              _context3.next = 65;
              break;

             case 45:
              if (!(7 == type)) {
                _context3.next = 52;
                break;
              }
              Global.SlotsSoundMgr.playEffect("jp_boost");
              _this4.increaseJackpot(_this4._jackpotGame.jackpotValues, singleTime, creTime, _this4._jackpotGame.currMult);
              _context3.next = 50;
              return cc.vv.gameData.awaitTime((5 - _this4._removeJpCnt) * creTime);

             case 50:
              _context3.next = 65;
              break;

             case 52:
              if (!(8 == type)) {
                _context3.next = 59;
                break;
              }
              Global.SlotsSoundMgr.playEffect("jp_boost");
              _this4.increaseJackpot(_this4._jackpotGame.jackpotValues, singleTime, creTime, _this4._jackpotGame.currMult);
              _context3.next = 57;
              return cc.vv.gameData.awaitTime((5 - _this4._removeJpCnt) * creTime);

             case 57:
              _context3.next = 65;
              break;

             case 59:
              if (!(9 == type)) {
                _context3.next = 65;
                break;
              }
              Global.SlotsSoundMgr.playEffect("jp_remove");
              _this4._removeJpCnt += 1;
              _this4.showJackpot(false, _this4._removeJpCnt, false);
              _context3.next = 65;
              return cc.vv.gameData.awaitTime(1);

             case 65:
              _this4._needAwait = false;

             case 66:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playWinResult: function playWinResult() {
        var jackpot = this._jackpotGame.jackpot;
        var results = this._jackpotGame.results;
        var choiceIdxs = this._jackpotGame.choiceIdxs;
        this._spr_mask.active = true;
        for (var i = 0; i < choiceIdxs.length; i++) results[i] !== jackpot.id && (cc.find("w" + results[i], this._winItemList[choiceIdxs[i] - 1]).active = false);
      },
      getSameTypeIdxs: function getSameTypeIdxs(type, idx) {
        var results = this._jackpotGame.results;
        var list = [];
        for (var i = 0; i < idx; i++) results[i] === type && list.push(i);
        cc.log(list);
        return list;
      },
      getAnimNameByType: function getAnimNameByType(type) {
        switch (type) {
         case 0:
          return "animation1_1";

         case 1:
          return "animation7";

         case 2:
          return "animation6";

         case 3:
          return "animation5";

         case 4:
          return "animation4";

         case 5:
          return "animation3";

         case 6:
          return "animation8";

         case 7:
          return "animation9";

         case 8:
          return "animation10";

         case 9:
          return "animation2";
        }
      },
      lockJackpot: function lockJackpot(jackpotvalus, mult) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.PausePool([ {
          prizeType: 0,
          pauseNum: jackpotvalus[0] * mult
        }, {
          prizeType: 1,
          pauseNum: jackpotvalus[1] * mult
        }, {
          prizeType: 2,
          pauseNum: jackpotvalus[2] * mult
        }, {
          prizeType: 3,
          pauseNum: jackpotvalus[3] * mult
        }, {
          prizeType: 4,
          pauseNum: jackpotvalus[4] * mult
        } ]);
      },
      unlockJackpot: function unlockJackpot() {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      increaseJackpot: function increaseJackpot(jackpotvalus, singleTime, creTime, mult) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.increaseJackpot([ {
          prizeType: 0,
          pauseNum: jackpotvalus[0]
        }, {
          prizeType: 1,
          pauseNum: jackpotvalus[1]
        }, {
          prizeType: 2,
          pauseNum: jackpotvalus[2]
        }, {
          prizeType: 3,
          pauseNum: jackpotvalus[3]
        }, {
          prizeType: 4,
          pauseNum: jackpotvalus[4]
        } ], singleTime, creTime, mult);
      },
      showJackpot: function showJackpot(bShow, cnt, init) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        if (init) for (var i = 0; i < cnt; i++) prizepool.showJackpot(bShow, i, init); else prizepool.showJackpot(bShow, cnt - 1, init);
      },
      playWinJpAnim: function playWinJpAnim(jpId, bPlay) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.playJp1Anim(jpId - 1, bPlay);
      },
      getPoolBLock: function getPoolBLock(idx) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        return prizepool.getPoolBLock(idx);
      },
      update: function update(dt) {
        if (!this._needAwait && this._rcvMsg) {
          this._needAwait = true;
          this._rcvMsg = false;
          cc.log(this._jackpotGame);
          if (this._jackpotGame.isEnd) this.endPickGame(); else {
            this._canClick = true;
            this._gatherInfo = false;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Sphinx_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f6d2J1B4xOD6XVpTbB6XgV", "Sphinx_Popup");
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
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_del_free = cc.find("node_del_free", this._node_popup);
        this._node_tri_pick = cc.find("node_tri_pick", this._node_popup);
        this._node_end_pick = cc.find("node_end_pick", this._node_popup);
        this._node_end_pick_jp = cc.find("node_end_pick_jp", this._node_popup);
        this._node_power_up = cc.find("node_power_up", this._node_popup);
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_del_free.active = false;
        this._node_tri_pick.active = false;
        this._node_end_pick.active = false;
        this._node_end_pick_jp.active = false;
        this._node_power_up.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
        this._qp_jzt = cc.find("spine_jzt", this._node_qp);
        this._qp_men = cc.find("spine_men", this._node_qp);
        this._qp_jzt.active = false;
        this._qp_men.active = false;
      },
      playTriFreeAnim: function playTriFreeAnim(freeCnt, bSuper, isFirstTri, powerCnt) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var effect, sp_type, spine_bg, lbl_cnt, spr_power, btn_start, i, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                effect = "";
                sp_type = 0;
                if (isFirstTri) if (bSuper) {
                  effect = "sb_start1";
                  sp_type = 3;
                } else {
                  effect = "fg_start1";
                  sp_type = 0;
                } else if (bSuper) {
                  effect = "sb_extra";
                  sp_type = 4;
                } else {
                  effect = "fg_extra";
                  sp_type = 1;
                }
                Global.SlotsSoundMgr.playEffect(effect);
                _this._node_popup.active = true;
                _this._node_tri_free.active = true;
                spine_bg = cc.find("spine_bg", _this._node_tri_free);
                lbl_cnt = cc.find("lbl_cnt", _this._node_tri_free);
                spr_power = cc.find("spr_powerUp", _this._node_tri_free);
                btn_start = cc.find("btn_start", _this._node_tri_free);
                lbl_cnt.getComponent(cc.Label).string = freeCnt;
                lbl_cnt.active = false;
                spr_power.active = false;
                btn_start.active = false;
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_1", sp_type), false);
                spine_bg.getComponent(sp.Skeleton).addAnimation(0, cc.js.formatStr("animation%s_2", sp_type), true);
                _context3.next = 18;
                return cc.vv.gameData.awaitTime(.3);

               case 18:
                lbl_cnt.active = true;
                lbl_cnt.setScale(0);
                cc.tween(lbl_cnt).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                spr_power.active = powerCnt > 0;
                if (powerCnt > 0) {
                  spr_power.active = true;
                  for (i = 1; i <= 4; i++) cc.find("add" + i, spr_power).active = i === powerCnt;
                  spr_power.setScale(0);
                  cc.tween(spr_power).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                }
                if (isFirstTri) {
                  _context3.next = 38;
                  break;
                }
                _context3.next = 26;
                return cc.vv.gameData.awaitTime(1.5);

               case 26:
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_3", sp_type), false);
                _context3.next = 29;
                return cc.vv.gameData.awaitTime(.3);

               case 29:
                cc.tween(lbl_cnt).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                spr_power.active && cc.tween(spr_power).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context3.next = 33;
                return cc.vv.gameData.awaitTime(.5);

               case 33:
                _this._node_popup.active = false;
                _this._node_tri_free.active = false;
                success();
                _context3.next = 51;
                break;

               case 38:
                _context3.next = 40;
                return cc.vv.gameData.awaitTime(.3);

               case 40:
                btn_start.active = true;
                btn_start.setScale(0);
                cc.tween(btn_start).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context3.next = 45;
                return cc.vv.gameData.awaitTime(.5);

               case 45:
                self = _this;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(btn_start).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_3", sp_type), false);
                        _context.next = 6;
                        return cc.vv.gameData.awaitTime(.3);

                       case 6:
                        cc.tween(lbl_cnt).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        spr_power.active && cc.tween(spr_power).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context.next = 10;
                        return cc.vv.gameData.awaitTime(.5);

                       case 10:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 13:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function clickFunc() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                btn_start.off("click");
                btn_start.getComponent(cc.Button).interactable = true;
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      btn_start.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

               case 51:
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
      playDelSymFree: function playDelSymFree(idxs, powerCnt) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var spine_bg, node_sym, spine_bz, spine_lbl, spr_power, spr_add, par, atlas_base, i, item, cfg, _i, id, _item, _i2, _id, _item2, startPos, endPos;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this2._node_popup.active = true;
                _this2._node_del_free.active = true;
                spine_bg = cc.find("spine_bg", _this2._node_del_free);
                node_sym = cc.find("node_syms", _this2._node_del_free);
                spine_bz = cc.find("node_syms/spine_bz", _this2._node_del_free);
                spine_lbl = cc.find("spine_lbl", _this2._node_del_free);
                spr_power = cc.find("spr_powerUp", _this2._node_del_free);
                spr_add = cc.find("spr_add", spr_power);
                par = cc.find("par", _this2._node_del_free);
                spine_lbl.active = false;
                spr_power.active = powerCnt > 0;
                atlas_base = cc.vv.gameData.GetAtlasByName("baseImg");
                if (powerCnt > 0) {
                  spr_add.getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame("dialog_" + powerCnt);
                  spr_power.setScale(0);
                  cc.tween(spr_power).to(.3, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                }
                par.active = false;
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine_bg.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                node_sym.active = true;
                node_sym.setScale(1);
                for (i = 1; i <= 12; i++) {
                  item = cc.find("item_" + i, node_sym);
                  item.active = true;
                  item.setScale(1);
                  item.getComponent(sp.Skeleton).setAnimation(0, "animation" + i, false);
                  item.getComponent(sp.Skeleton).addAnimation(0, "animation" + i + "_1", false);
                }
                _context4.next = 21;
                return cc.vv.gameData.awaitTime(1);

               case 21:
                idxs.sort(function(a, b) {
                  return b - a;
                });
                cfg = cc.vv.gameData.getGameCfg();
                _i = 0;

               case 24:
                if (!(_i < 6)) {
                  _context4.next = 39;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("symbol_remove");
                id = cfg.symbol[idxs[_i]].del_id;
                _item = cc.find("item_" + id, node_sym);
                spine_bz.active = true;
                spine_bz.position = _item.position;
                spine_bz.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _context4.next = 33;
                return cc.vv.gameData.awaitTime(.3);

               case 33:
                cc.tween(_item).to(.3, {
                  scale: 0
                }).start();
                _context4.next = 36;
                return cc.vv.gameData.awaitTime(.8);

               case 36:
                _i++;
                _context4.next = 24;
                break;

               case 39:
                Global.SlotsSoundMgr.playEffect("power_appear");
                spine_lbl.active = true;
                spine_lbl.getComponent(sp.Skeleton).setAnimation(0, "animation7", false);
                spine_lbl.getComponent(sp.Skeleton).addAnimation(0, "animation8", false);
                _context4.next = 45;
                return cc.vv.gameData.awaitTime(1.2);

               case 45:
                if (!(powerCnt > 0)) {
                  _context4.next = 83;
                  break;
                }
                _context4.next = 48;
                return cc.vv.gameData.awaitTime(2);

               case 48:
                Global.SlotsSoundMgr.playEffect("power_appear");
                spine_lbl.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                spine_lbl.getComponent(sp.Skeleton).addAnimation(0, "animation4", false);
                _context4.next = 53;
                return cc.vv.gameData.awaitTime(2);

               case 53:
                _i2 = 6;

               case 54:
                if (!(_i2 < idxs.length)) {
                  _context4.next = 77;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("power_shoot");
                _id = cfg.symbol[idxs[_i2]].del_id;
                _item2 = cc.find("item_" + _id, node_sym);
                spine_bz.active = true;
                spine_bz.position = _item2.position;
                startPos = _this2._node_del_free.convertToNodeSpaceAR(spr_add.convertToWorldSpaceAR(cc.v2(0, 0)));
                endPos = _this2._node_del_free.convertToNodeSpaceAR(_item2.convertToWorldSpaceAR(cc.v2(0, 0)));
                par.active = true;
                par.getComponent(cc.ParticleSystem).resetSystem();
                par.position = startPos;
                cc.tween(par).to(.3, {
                  position: endPos
                }).start();
                _context4.next = 68;
                return cc.vv.gameData.awaitTime(.3);

               case 68:
                spine_bz.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                powerCnt -= 1;
                powerCnt > 0 && (spr_add.getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame("theme227_dialog_" + powerCnt));
                _context4.next = 73;
                return cc.vv.gameData.awaitTime(.5);

               case 73:
                cc.tween(_item2).to(.3, {
                  scale: 0
                }).start();

               case 74:
                _i2++;
                _context4.next = 54;
                break;

               case 77:
                _context4.next = 79;
                return cc.vv.gameData.awaitTime(.3);

               case 79:
                spine_lbl.getComponent(sp.Skeleton).setAnimation(0, "animation6", false);
                spr_power.active && cc.tween(spr_power).to(.3, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context4.next = 83;
                return cc.vv.gameData.awaitTime(1);

               case 83:
                cc.tween(node_sym).to(.3, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation5", false);
                _context4.next = 87;
                return cc.vv.gameData.awaitTime(1);

               case 87:
                _this2._node_del_free.active = false;
                _this2._node_popup.active = false;
                success();

               case 90:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playEndFreeAnim: function playEndFreeAnim(wincoin) {
        var _this3 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var sp_type, effect, spine_bg, lbl_cnt, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                sp_type = 2;
                effect = "fg_collect";
                if (cc.vv.gameData.isSuperGame()) {
                  sp_type = 5;
                  effect = "sb_collect";
                }
                Global.SlotsSoundMgr.playEffect(effect);
                _this3._node_popup.active = true;
                _this3._node_end_free.active = true;
                spine_bg = cc.find("spine_bg", _this3._node_end_free);
                lbl_cnt = cc.find("lbl_cnt", _this3._node_end_free);
                btn_collect = cc.find("btn_collect", _this3._node_end_free);
                lbl_cnt.active = false;
                btn_collect.active = false;
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_1", sp_type), false);
                spine_bg.getComponent(sp.Skeleton).addAnimation(0, cc.js.formatStr("animation%s_2", sp_type), true);
                _context7.next = 15;
                return cc.vv.gameData.awaitTime(.3);

               case 15:
                lbl_cnt.active = true;
                lbl_cnt.setScale(0);
                Global.doRoallNumEff(lbl_cnt, 0, wincoin, 1.5, null, null, 0, true);
                cc.tween(lbl_cnt).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 21;
                return cc.vv.gameData.awaitTime(.3);

               case 21:
                btn_collect.active = true;
                btn_collect.setScale(0);
                cc.tween(btn_collect).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 26;
                return cc.vv.gameData.awaitTime(.5);

               case 26:
                self = _this3;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl_cnt.getComponent(cc.Label).string) != wincoin)) {
                          _context5.next = 7;
                          break;
                        }
                        lbl_cnt.stopAllActions();
                        lbl_cnt.getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                        _context5.next = 7;
                        return cc.vv.gameData.awaitTime(.2);

                       case 7:
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        cc.tween(btn_collect).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_3", sp_type), false);
                        _context5.next = 12;
                        return cc.vv.gameData.awaitTime(.3);

                       case 12:
                        cc.tween(lbl_cnt).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context5.next = 15;
                        return cc.vv.gameData.awaitTime(.5);

                       case 15:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 18:
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
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
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

               case 32:
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
      playTriPickAnim: function playTriPickAnim() {
        var _this4 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var self, spine;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("pick_start1");
                _this4._node_popup.active = true;
                _this4._node_tri_pick.active = true;
                self = _this4;
                spine = cc.find("spine", _this4._node_tri_pick);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  self._node_popup.active = false;
                  self._node_tri_pick.active = false;
                  success();
                });

               case 7:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      playEndPickAnim: function playEndPickAnim(wincoin) {
        var _this5 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var spine_bg, lbl_cnt, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("pick_collect");
                _this5._node_popup.active = true;
                _this5._node_end_pick.active = true;
                spine_bg = cc.find("spine_bg", _this5._node_end_pick);
                lbl_cnt = cc.find("lbl_cnt", _this5._node_end_pick);
                btn_collect = cc.find("btn_collect", _this5._node_end_pick);
                lbl_cnt.active = false;
                btn_collect.active = false;
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
                spine_bg.getComponent(sp.Skeleton).addAnimation(0, "animation2_2", true);
                _context11.next = 12;
                return cc.vv.gameData.awaitTime(.3);

               case 12:
                lbl_cnt.active = true;
                lbl_cnt.setScale(0);
                Global.doRoallNumEff(lbl_cnt, 0, wincoin, 1.5, null, null, 0, true);
                cc.tween(lbl_cnt).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context11.next = 18;
                return cc.vv.gameData.awaitTime(.3);

               case 18:
                btn_collect.active = true;
                btn_collect.setScale(0);
                cc.tween(btn_collect).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context11.next = 23;
                return cc.vv.gameData.awaitTime(.5);

               case 23:
                self = _this5;
                clickFunc = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl_cnt.getComponent(cc.Label).string) != wincoin)) {
                          _context9.next = 7;
                          break;
                        }
                        lbl_cnt.stopAllActions();
                        lbl_cnt.getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                        _context9.next = 7;
                        return cc.vv.gameData.awaitTime(.2);

                       case 7:
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        cc.tween(btn_collect).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation2_3", false);
                        _context9.next = 12;
                        return cc.vv.gameData.awaitTime(.3);

                       case 12:
                        cc.tween(lbl_cnt).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context9.next = 15;
                        return cc.vv.gameData.awaitTime(.5);

                       case 15:
                        self._node_popup.active = false;
                        self._node_end_pick.active = false;
                        success();

                       case 18:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function clickFunc() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 29:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x9, _x10) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playEndPickJpAnim: function playEndPickJpAnim(wincoin, jpType) {
        var _this6 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var effList, spine_bg, lbl_cnt, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                effList = [ "dialog_mini", "dialog_minor", "dialog_major", "dialog_maxi", "dialog_grand" ];
                Global.SlotsSoundMgr.playEffect(effList[jpType - 1]);
                _this6._node_popup.active = true;
                _this6._node_end_pick_jp.active = true;
                spine_bg = cc.find("spine_bg", _this6._node_end_pick_jp);
                lbl_cnt = cc.find("lbl_cnt", _this6._node_end_pick_jp);
                btn_collect = cc.find("btn_collect", _this6._node_end_pick_jp);
                lbl_cnt.active = false;
                btn_collect.active = false;
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_1", 6 - jpType), false);
                spine_bg.getComponent(sp.Skeleton).addAnimation(0, cc.js.formatStr("animation%s_2", 6 - jpType), true);
                _context14.next = 13;
                return cc.vv.gameData.awaitTime(.3);

               case 13:
                lbl_cnt.active = true;
                lbl_cnt.setScale(0);
                Global.doRoallNumEff(lbl_cnt, 0, wincoin, 1.5, null, null, 0, true);
                cc.tween(lbl_cnt).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context14.next = 19;
                return cc.vv.gameData.awaitTime(.3);

               case 19:
                btn_collect.active = true;
                btn_collect.setScale(0);
                cc.tween(btn_collect).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context14.next = 24;
                return cc.vv.gameData.awaitTime(.5);

               case 24:
                self = _this6;
                clickFunc = function() {
                  var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl_cnt.getComponent(cc.Label).string) != wincoin)) {
                          _context12.next = 7;
                          break;
                        }
                        lbl_cnt.stopAllActions();
                        lbl_cnt.getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                        _context12.next = 7;
                        return cc.vv.gameData.awaitTime(.2);

                       case 7:
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        cc.tween(btn_collect).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        spine_bg.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_3", 6 - jpType), false);
                        _context12.next = 12;
                        return cc.vv.gameData.awaitTime(.3);

                       case 12:
                        cc.tween(lbl_cnt).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context12.next = 15;
                        return cc.vv.gameData.awaitTime(.5);

                       case 15:
                        self._node_popup.active = false;
                        self._node_end_pick_jp.active = false;
                        success();

                       case 18:
                       case "end":
                        return _context12.stop();
                      }
                    }, _callee12);
                  }));
                  return function clickFunc() {
                    return _ref13.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));

               case 30:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x11, _x12) {
            return _ref12.apply(this, arguments);
          };
        }());
      },
      playPowerUpAnim: function playPowerUpAnim(cnt) {
        var _this7 = this;
        return new Promise(function() {
          var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success, failed) {
            var self, spine_bg;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                _this7._node_popup.active = true;
                _this7._node_power_up.active = true;
                self = _this7;
                spine_bg = cc.find("spine_bg", _this7._node_power_up);
                spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation" + cnt, false);
                spine_bg.getComponent(sp.Skeleton).setCompleteListener(function() {
                  self._node_power_up.active = false;
                  self._node_popup.active = false;
                  success();
                });
                _context15.next = 8;
                return cc.vv.gameData.awaitTime(.5);

               case 8:
                Global.SlotsSoundMgr.playEffect("popup_out");

               case 9:
               case "end":
                return _context15.stop();
              }
            }, _callee15);
          }));
          return function(_x13, _x14) {
            return _ref15.apply(this, arguments);
          };
        }());
      },
      playQPJzt: function playQPJzt() {
        Global.SlotsSoundMgr.playEffect("transition1");
        var self = this;
        this._node_qp.active = true;
        this._qp_jzt.active = true;
        this._qp_jzt.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._qp_jzt.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._qp_jzt.active = false;
          self._node_qp.active = false;
        });
      },
      playQPMen: function playQPMen() {
        Global.SlotsSoundMgr.playEffect("transition2");
        var self = this;
        this._node_qp.active = true;
        this._qp_men.active = true;
        this._qp_men.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._qp_men.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._qp_men.active = false;
          self._node_qp.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Sphinx_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8fdffcoa5M1oxGdtKw9heA", "Sphinx_PrizePool");
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
    var jackpotNames = [ "MINI", "MINOR", "MAJOR", "MAXI", "GRAND" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      InItPoolList: function InItPoolList() {
        this._super();
        for (var i = 0; i < this._poolList.length; i++) {
          var item = this._poolList[i].node;
          cc.find("jp1", item).active = false;
          cc.find("jp2", item).active = false;
          cc.find("jp3", item).active = false;
          cc.find("jp4", item).active = false;
          cc.find("jp_suo", item).active = false;
          cc.find("tip", item).active = false;
          cc.find("tip/spr_lock", item).active = false;
          cc.find("tip/spr_unlock", item).active = false;
        }
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var targetJpNode = node;
        var spine_lock = cc.find("jp_suo", targetJpNode);
        if (targetJpNode) {
          this.showTipNode(bLock, poolType, bInit);
          var aniType = [ 5, 4, 3, 2, 1 ];
          var sprType = [ "mini", "minor", "major", "maxi", "grand" ];
          var fontSize = 25;
          var fontSizeList = [ 20, 20, 22, 22, 25 ];
          if (bLock) {
            if (bInit) spine_lock.active = false; else {
              Global.SlotsSoundMgr.playEffect("jp_lock");
              spine_lock.active = true;
              spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 1), false);
            }
            this.showNodeState(targetJpNode, true, sprType[poolType], aniType[poolType], fontSizeList[poolType]);
            this.playJp4Anim(false, node);
          } else {
            if (bInit) spine_lock.active = false; else {
              Global.SlotsSoundMgr.playEffect("jp_unlock");
              spine_lock.active = true;
              spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 2), false);
            }
            this.showNodeState(targetJpNode, false, sprType[poolType], aniType[poolType], fontSize);
            this.playJp4Anim(true, node, poolType);
          }
        }
      },
      showTipNode: function showTipNode(bLock, poolType, bInit) {
        for (var i = 0; i < jackpotNames.length; i++) {
          var tips = cc.find(cc.js.formatStr("prizePool_%s/tip", jackpotNames[i]), this.node);
          tips.active = true;
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
      showNodeState: function showNodeState(node, isLock, name, type, fontSize) {
        var atlas_base = cc.vv.gameData.GetAtlasByName("baseImg");
        if (isLock) {
          node.getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame(cc.js.formatStr("jp_%s_1", name));
          cc.find("lbl_num", node).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme227_base_jp0");
          cc.find("lbl_num", node).position = cc.find("pos_jp0", node).position;
        } else {
          node.getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame(cc.js.formatStr("jp_%s", name));
          cc.find("lbl_num", node).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName(cc.js.formatStr("theme227_base_jp%s", type));
          cc.find("lbl_num", node).position = cc.v2(0, -14);
        }
        cc.find("lbl_num", node).getComponent(cc.Label).fontSize = fontSize;
      },
      increaseJackpot: function increaseJackpot(pauseDatas, singleTime, creTime, mult) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var p_Idx, poolNode, poolLbl, poolType, d_Idx;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._poolList = _this.node.getComponentsInChildren("LMSlotMachine_PrizePool");
              p_Idx = 0;

             case 2:
              if (!(p_Idx < _this._poolList.length)) {
                _context.next = 22;
                break;
              }
              poolNode = _this._poolList[p_Idx].node;
              if (!poolNode.active) {
                _context.next = 19;
                break;
              }
              poolLbl = _this._poolList[p_Idx].getJackpotLabel();
              poolType = _this._poolList[p_Idx].GetPoolType();
              d_Idx = 0;

             case 8:
              if (!(d_Idx < pauseDatas.length)) {
                _context.next = 19;
                break;
              }
              if (!(poolType == pauseDatas[d_Idx].prizeType)) {
                _context.next = 16;
                break;
              }
              if (!poolLbl) {
                _context.next = 15;
                break;
              }
              Global.doRoallNumEff(poolLbl, 0, pauseDatas[d_Idx].pauseNum * mult, singleTime, null, null, 0, true);
              _this.playJp3Anim(poolNode, d_Idx);
              _context.next = 15;
              return cc.vv.gameData.awaitTime(creTime);

             case 15:
              return _context.abrupt("break", 19);

             case 16:
              d_Idx++;
              _context.next = 8;
              break;

             case 19:
              p_Idx++;
              _context.next = 2;
              break;

             case 22:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playJp1Anim: function playJp1Anim(idx, bPlay) {
        var aniType = [ 5, 4, 3, 2, 1 ];
        var poolNode = cc.find(cc.js.formatStr("prizePool_%s", jackpotNames[idx]), this.node);
        var jp1 = cc.find("jp1", poolNode);
        if (jp1) if (bPlay) {
          jp1.active = true;
          var animName = cc.js.formatStr("animation%s", aniType[idx]);
          jp1.getComponent(sp.Skeleton).setAnimation(0, animName, true);
        } else jp1.active = false;
      },
      playJp2Anim: function playJp2Anim(node, idx) {
        var aniType = [ 5, 4, 3, 2, 1 ];
        var jp2 = cc.find("jp2", node);
        if (jp2) {
          jp2.active = true;
          var animName = cc.js.formatStr("animation%s", aniType[idx]);
          jp2.getComponent(sp.Skeleton).setAnimation(0, animName, false);
          jp2.getComponent(sp.Skeleton).setCompleteListener(function() {
            jp2.active = false;
          });
        }
      },
      playJp3Anim: function playJp3Anim(node, idx) {
        var aniType = [ 5, 4, 3, 2, 1 ];
        var jp3 = cc.find("jp3", node);
        if (jp3) {
          jp3.active = true;
          var animName = cc.js.formatStr("animation%s", aniType[idx]);
          jp3.getComponent(sp.Skeleton).setAnimation(0, animName, false);
          jp3.getComponent(sp.Skeleton).setCompleteListener(function() {
            jp3.active = false;
          });
        }
      },
      playJp4Anim: function playJp4Anim(bPlay, node, idx) {
        var aniType = [ 5, 4, 3, 2, 1 ];
        var jp4 = cc.find("jp4", node);
        if (jp4) if (bPlay) {
          jp4.active = true;
          var animName = cc.js.formatStr("animation%s", aniType[idx]);
          jp4.getComponent(sp.Skeleton).setAnimation(0, animName, true);
        } else jp4.active = false;
      },
      showJackpot: function showJackpot(bShow, idx, init) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var poolNode;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              poolNode = cc.find(cc.js.formatStr("prizePool_%s", jackpotNames[idx]), _this2.node);
              if (!poolNode) {
                _context2.next = 7;
                break;
              }
              if (init) {
                _context2.next = 6;
                break;
              }
              _this2.playJp2Anim(poolNode, idx);
              _context2.next = 6;
              return cc.vv.gameData.awaitTime(.5);

             case 6:
              poolNode.active = bShow;

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getPoolBLock: function getPoolBLock(idx) {
        var poolNode = cc.find(cc.js.formatStr("prizePool_%s", jackpotNames[idx]), this.node);
        var isLock = poolNode.getComponent("LMSlotMachine_PrizePool").isLocked();
        return isLock;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Sphinx_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "271cdXZ1xBBcbLS+EfWbM8H", "Sphinx_Reel");
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
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _info = _step2.value;
              if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound[_info.stopIdx] : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      playAntiAnimation: function playAntiAnimation() {
        var isPlayAniti = false;
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var _iterator3 = _createForOfIteratorHelper(this._reelState), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var info = _step3.value;
              if (info.isAnt && info.antiNode) {
                this.ShowAntiEffect(true, info.antiNode);
                var soundPath = info.path;
                soundPath || (soundPath = cc.vv.gameData.getGameDir());
                cc.vv.AudioManager.playEff(soundPath, info.antSound[info.antIdx], true);
                var cfgAntSpeed = info.antSpeed;
                cfgAntSpeed && (cfgAntSpeed *= this.GetTimeScale());
                this._speed = cfgAntSpeed || this._speed;
                isPlayAniti = true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return isPlayAniti;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Sphinx_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f3dbFNj4lHK4LFkV01edsL", "Sphinx_Slots");
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
        _canStop: true,
        _leftTaList: [],
        _rightTaList: [],
        _triBonusSymbol: [],
        _triFreeSymbol: []
      },
      Init: function Init() {
        this._spr_coins = cc.find("node_top/spr_coins", this.node);
        this._fly_coin = cc.find("fly_coin", this.node);
        this._fly_coin.active = false;
        this._spr_mask = cc.find("spr_mask", this.node);
        this._spr_mask.active = false;
        this._spine_jl2 = cc.find("Canvas/safe_node/base_jl2");
        this._spine_fanbei = cc.find("spine_fanbei", this.node);
        this._spine_jl1 = cc.find("spine_jl1", this.node);
        this._spine_jl2.active = false;
        this._spine_fanbei.active = false;
        this._spine_jl1.active = false;
        this._spr_ta_left = cc.find("node_top/spr_ta_left", this.node);
        this._spr_ta_right = cc.find("node_top/spr_ta_right", this.node);
        this._top_fly = cc.find("top_fly", this.node);
        this._super();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusTrail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              bonusTrail = cc.vv.gameData.getBonusTrail();
              cc.vv.gameData.GetTotalFree() > 0 ? _this.ShowGameview(true, 2 === bonusTrail.state) : _this.ShowGameview(false, false);
              if (!cc.vv.gameData.getJackpotGame()) {
                _context.next = 7;
                break;
              }
              _context.next = 7;
              return _this.gainPickGame(false);

             case 7:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return _this.exitFreeGame();

             case 10:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        this._triBonusSymbol.splice(0, this._triBonusSymbol.length);
        this._triFreeSymbol.splice(0, this._triFreeSymbol.length);
        Global.SlotsSoundMgr.playNormalBgm();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this2 = this;
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
            stateInfo.stopIdx = 0;
            stateInfo.antIdx = 0;
            var stopCnt = 0;
            var antCnt = 0;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this2._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              if (haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous) {
                stateInfo.isAnt = true;
                stateInfo.antIdx = antCnt;
                antCnt += 1;
              }
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              if (reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous) {
                stateInfo.isStop = true;
                stateInfo.stopIdx = stopCnt;
                stopCnt += 1;
              }
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
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
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        for (var row = 0; row < this._row; row++) {
          var symbol = this._reels[colIdx].GetSymbolByRow(row);
          symbol && (3 == symbol.GetShowId() ? symbol.playBonusBgGuangAnim(true, "bonus") : 301 == symbol.GetShowId() && symbol.playBonusBgGuangAnim(true, "special"));
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!_this3._gameInfo.bonusInfo) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return _this3.playBonusItemAnim();

             case 3:
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.getFreeWinCoin());
              _context2.next = 9;
              return new Promise(function(success, failed) {
                _this3.ShowBottomWin(nWin, nTotal, true, function() {
                  success();
                });
              });

             case 9:
              if (!_this3._gameInfo.jackpotGame) {
                _context2.next = 12;
                break;
              }
              _context2.next = 12;
              return _this3.gainPickGame(true);

             case 12:
              if (!(_this3._gameInfo.freeResult && _this3._gameInfo.freeResult.freeInfo && _this3._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 15;
                break;
              }
              _context2.next = 15;
              return _this3.gainFreeGame(2 === _this3._gameInfo.bonusTrail.state);

             case 15:
              if (!(_this3._gameInfo.allFreeCnt > 0 && 0 == _this3._gameInfo.freeCnt)) {
                _context2.next = 18;
                break;
              }
              _context2.next = 18;
              return _this3.exitFreeGame();

             case 18:
              _this3.CanDoNextRound();

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      gainPickGame: function gainPickGame(isTri) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var idxs, i, _i2;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                if (!isTri) {
                  _context3.next = 13;
                  break;
                }
                if (!(_this4._triBonusSymbol.length > 0)) {
                  _context3.next = 8;
                  break;
                }
                idxs = _this4._gameInfo.bonusInfo.idxs;
                if (idxs) for (i = 0; i < idxs.length; i++) _this4.GetSymbolByIdx(idxs[i]).playBonusBgGuangAnim(false);
                for (_i2 = 0; _i2 < _this4._triBonusSymbol.length; _i2++) _this4._triBonusSymbol[_i2].symbol.playBonusTriAnim(_this4._triBonusSymbol[_i2].type);
                Global.SlotsSoundMgr.playEffect("pick_trigger");
                _context3.next = 8;
                return cc.vv.gameData.awaitTime(2);

               case 8:
                _context3.next = 10;
                return cc.vv.gameData.getPopupScript().playTriPickAnim();

               case 10:
                cc.vv.gameData.getPopupScript().playQPMen();
                _context3.next = 13;
                return cc.vv.gameData.awaitTime(2);

               case 13:
                _context3.next = 15;
                return cc.vv.gameData.getPickScript().gainPickGame(isTri);

               case 15:
                success();

               case 16:
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
      gainFreeGame: function gainFreeGame(bSuper) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var isFirstTri, result, _idxs, list, i, symbol, powerUpCnt, _idxs2, _i3, _list, _i4, freeInfo, idxs;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bell");
                isFirstTri = _this5._gameInfo.freeCnt === _this5._gameInfo.allFreeCnt;
                result = _this5._gameInfo.freeResult;
                if (!(result && result.freeInfo && result.freeInfo.scatterIdx)) {
                  _context4.next = 14;
                  break;
                }
                _idxs = result.freeInfo.scatterIdx;
                list = [];
                for (i = 0; i < _idxs.length; i++) {
                  symbol = _this5.GetSymbolByIdx(_idxs[i]);
                  if (symbol) {
                    symbol.playTriggerAnimation();
                    list.push(symbol);
                  }
                }
                if (!isFirstTri) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 10;
                return cc.vv.gameData.getCollectScript().playGainItemAnim(list);

               case 10:
                _context4.next = 12;
                return cc.vv.gameData.awaitTime(2);

               case 12:
                _context4.next = 14;
                return cc.vv.gameData.getPopupScript().playTriFreeAnim(result.freeInfo.freeCnt, bSuper, isFirstTri);

               case 14:
                if (!(_this5._triFreeSymbol.length > 0)) {
                  _context4.next = 28;
                  break;
                }
                _idxs2 = _this5._gameInfo.bonusInfo.idxs;
                if (_idxs2) for (_i3 = 0; _i3 < _idxs2.length; _i3++) _this5.GetSymbolByIdx(_idxs2[_i3]).playBonusBgGuangAnim(false);
                _list = [];
                for (_i4 = 0; _i4 < _this5._triFreeSymbol.length; _i4++) if ("free" == _this5._triFreeSymbol[_i4].type) {
                  _list.push(_this5._triFreeSymbol[_i4].symbol);
                  _this5._triFreeSymbol[_i4].symbol.playBonusTriAnim(_this5._triFreeSymbol[_i4].type, result.freeInfo.freeCnt);
                } else _this5._triFreeSymbol[_i4].symbol.playBonusTriAnim(_this5._triFreeSymbol[_i4].type);
                if (!isFirstTri) {
                  _context4.next = 22;
                  break;
                }
                _context4.next = 22;
                return cc.vv.gameData.getCollectScript().playGainItemAnim(_list);

               case 22:
                _context4.next = 24;
                return cc.vv.gameData.awaitTime(2);

               case 24:
                freeInfo = _this5._gameInfo.bonusInfo.freeInfo;
                powerUpCnt = freeInfo.powerUpCnt;
                _context4.next = 28;
                return cc.vv.gameData.getPopupScript().playTriFreeAnim(freeInfo.freeCnt, bSuper, isFirstTri, freeInfo.powerUpCnt);

               case 28:
                if (isFirstTri) {
                  _this5.Backup();
                  cc.vv.gameData.getPopupScript().playQPJzt();
                }
                _this5.removeAllFlyNode(false);
                _this5.ShowGameview(true, bSuper);
                _context4.next = 33;
                return cc.vv.gameData.awaitTime(2);

               case 33:
                idxs = _this5._gameInfo.removeSymbols;
                if (!isFirstTri) {
                  _context4.next = 55;
                  break;
                }
                _context4.next = 37;
                return cc.vv.gameData.getPopupScript().playDelSymFree(idxs, powerUpCnt || 0);

               case 37:
                _this5._canStop = false;
                success();
                _context4.next = 41;
                return cc.vv.gameData.awaitTime(.5);

               case 41:
                Global.SlotsSoundMgr.playEffect("coin_fg");
                _this5._spine_jl1.active = true;
                _this5._spine_jl1.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _this5._spr_mask.active = true;
                _context4.next = 47;
                return cc.vv.gameData.awaitTime(2);

               case 47:
                _this5._spine_jl1.active = false;
                _this5._spr_mask.active = false;
                Global.SlotsSoundMgr.playEffect("free_open");
                _context4.next = 52;
                return cc.vv.gameData.awaitTime(2);

               case 52:
                _this5._canStop = true;
                _context4.next = 56;
                break;

               case 55:
                success();

               case 56:
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
      exitFreeGame: function exitFreeGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var winCoin;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                winCoin = cc.vv.gameData.getFreeWinCoin();
                _context5.next = 3;
                return cc.vv.gameData.getPopupScript().playEndFreeAnim(winCoin);

               case 3:
                cc.vv.gameData.getPopupScript().playQPJzt();
                _this6.Resume();
                _this6.ShowGameview(false, false);
                2 === _this6._gameInfo.bonusTrail.state && cc.vv.gameData.getCollectScript().initItems();
                Global.SlotsSoundMgr.stopBgm();
                _context5.next = 10;
                return cc.vv.gameData.awaitTime(2);

               case 10:
                _context5.next = 12;
                return new Promise(function(success, failed) {
                  _this6.ShowBottomWin(winCoin, winCoin, true, function() {
                    success();
                  });
                });

               case 12:
                success();

               case 13:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playBonusItemAnim: function playBonusItemAnim() {
        var _this7 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var bonusIdxs, bonusItems, specailIdxs, specailItems, idxs, remainIdxs, superCoinIdx, i, idx, data, symbol, newData, _i5, _idx, _data, _symbol, _i6, _idx2, _data2, _symbol2;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                bonusIdxs = _this7._gameInfo.bonusInfo.idxs;
                bonusItems = _this7._gameInfo.bonusInfo.items;
                specailIdxs = _this7._gameInfo.bonusInfo.specailIdxs;
                specailItems = _this7._gameInfo.bonusInfo.specailItems;
                idxs = bonusIdxs.concat(specailIdxs);
                idxs.sort(function(a, b) {
                  return (a - 1) % 5 - (b - 1) % 5;
                }).sort(function(a, b) {
                  return a / 5 + (a - 1) % 5 - (b / 5 + (b - 1) % 5);
                });
                remainIdxs = [];
                superCoinIdx = [];
                i = 0;

               case 9:
                if (!(i < idxs.length)) {
                  _context6.next = 38;
                  break;
                }
                idx = idxs[i];
                data = void 0;
                data = bonusIdxs.includes(idx) ? bonusItems[bonusIdxs.indexOf(idx)] : specailItems[specailIdxs.indexOf(idx)];
                symbol = _this7.GetSymbolByIdx(idx);
                if (!data.coin) {
                  _context6.next = 25;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("coin_turn1");
                newData = Global.copy(data);
                if (cc.vv.gameData.isSuperGame()) {
                  newData.coin = data.coin / 5;
                  superCoinIdx.push(idx);
                }
                symbol.playAddCoinAnim(newData);
                _context6.next = 21;
                return cc.vv.gameData.awaitTime(.5);

               case 21:
                _context6.next = 23;
                return _this7.flyBonusSymbol(symbol.node);

               case 23:
                _context6.next = 35;
                break;

               case 25:
                if (!(i === idx.length - 1 && 0 === remainIdxs.length)) {
                  _context6.next = 30;
                  break;
                }
                _context6.next = 28;
                return _this7.playSpecialBonus(data, symbol);

               case 28:
                _context6.next = 35;
                break;

               case 30:
                Global.SlotsSoundMgr.playEffect("coin_active");
                symbol.playBonusAwaitAnim();
                data.jackpotBonus || data.freeCnt ? remainIdxs.unshift(idx) : remainIdxs.push(idx);
                _context6.next = 35;
                return cc.vv.gameData.awaitTime(.5);

               case 35:
                i++;
                _context6.next = 9;
                break;

               case 38:
                _i5 = 0;

               case 39:
                if (!(_i5 < remainIdxs.length)) {
                  _context6.next = 49;
                  break;
                }
                _idx = remainIdxs[_i5];
                _data = void 0;
                _data = bonusIdxs.includes(_idx) ? bonusItems[bonusIdxs.indexOf(_idx)] : specailItems[specailIdxs.indexOf(_idx)];
                _symbol = _this7.GetSymbolByIdx(_idx);
                _context6.next = 46;
                return _this7.playSpecialBonus(_data, _symbol);

               case 46:
                _i5++;
                _context6.next = 39;
                break;

               case 49:
                if (!(cc.vv.gameData.isSuperGame() && superCoinIdx.length > 0)) {
                  _context6.next = 57;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("coin_increase");
                _this7.playBoostJlAnim(2);
                _context6.next = 54;
                return cc.vv.gameData.awaitTime(1);

               case 54:
                for (_i6 = 0; _i6 < superCoinIdx.length; _i6++) {
                  _idx2 = superCoinIdx[_i6];
                  _data2 = void 0;
                  _data2 = bonusIdxs.includes(_idx2) ? bonusItems[bonusIdxs.indexOf(_idx2)] : specailItems[specailIdxs.indexOf(_idx2)];
                  _symbol2 = _this7.GetSymbolByIdx(_idx2);
                  _data2.coin && _symbol2.playAddCoinAnim(_data2);
                }
                _context6.next = 57;
                return cc.vv.gameData.awaitTime(1);

               case 57:
                success();

               case 58:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playSpecialBonus: function playSpecialBonus(data, symbol) {
        var _this8 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var animName;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("coin_turn2");
                if (!data.jackpotBonus) {
                  _context7.next = 10;
                  break;
                }
                _this8._triBonusSymbol.push({
                  symbol: symbol,
                  type: "jackpot"
                });
                symbol.playBonusWin("jackpot");
                _context7.next = 6;
                return cc.vv.gameData.awaitTime(.6);

               case 6:
                _context7.next = 8;
                return _this8.flyBonusToTa(symbol, false, "animation_1");

               case 8:
                _context7.next = 69;
                break;

               case 10:
                if (!data.freeCnt) {
                  _context7.next = 20;
                  break;
                }
                _this8._triFreeSymbol.push({
                  symbol: symbol,
                  type: "free"
                });
                symbol.playBonusWin("free", data.freeCnt);
                _context7.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                animName = cc.js.formatStr("animation%s_1", data.freeCnt);
                _context7.next = 18;
                return _this8.flyBonusToTa(symbol, true, animName);

               case 18:
                _context7.next = 69;
                break;

               case 20:
                if (!data.type) {
                  _context7.next = 69;
                  break;
                }
                if (!(1 === data.type)) {
                  _context7.next = 34;
                  break;
                }
                symbol.playBonusWin("coin");
                _context7.next = 25;
                return cc.vv.gameData.awaitTime(1);

               case 25:
                _this8.playBoostJlAnim(1);
                _context7.next = 28;
                return cc.vv.gameData.awaitTime(1);

               case 28:
                _context7.next = 30;
                return _this8.bonusAddCoin(data.mult);

               case 30:
                _context7.next = 32;
                return cc.vv.gameData.awaitTime(1);

               case 32:
                _context7.next = 67;
                break;

               case 34:
                if (!(2 === data.type)) {
                  _context7.next = 47;
                  break;
                }
                symbol.playBonusWin("megaCoin");
                _context7.next = 38;
                return cc.vv.gameData.awaitTime(1);

               case 38:
                _this8.playBoostJlAnim(1);
                _context7.next = 41;
                return cc.vv.gameData.awaitTime(1);

               case 41:
                _context7.next = 43;
                return _this8.bonusAddCoin(data.mult);

               case 43:
                _context7.next = 45;
                return cc.vv.gameData.awaitTime(1);

               case 45:
                _context7.next = 67;
                break;

               case 47:
                if (!(3 === data.type)) {
                  _context7.next = 60;
                  break;
                }
                symbol.playBonusWin("superCoin");
                _context7.next = 51;
                return cc.vv.gameData.awaitTime(1);

               case 51:
                _this8.playBoostJlAnim(1);
                _context7.next = 54;
                return cc.vv.gameData.awaitTime(1);

               case 54:
                _context7.next = 56;
                return _this8.bonusAddCoin(data.mult);

               case 56:
                _context7.next = 58;
                return cc.vv.gameData.awaitTime(1);

               case 58:
                _context7.next = 67;
                break;

               case 60:
                if (!(4 === data.type)) {
                  _context7.next = 67;
                  break;
                }
                _this8._triBonusSymbol.push({
                  symbol: symbol,
                  type: "powerUp"
                });
                _this8._triFreeSymbol.push({
                  symbol: symbol,
                  type: "powerUp"
                });
                symbol.playBonusWin("powerUp");
                _context7.next = 66;
                return cc.vv.gameData.awaitTime(1);

               case 66:
                _this8.flyBonusToTa(symbol, !_this8._gameInfo.jackpotGame, "animation_1");

               case 67:
                _context7.next = 69;
                return cc.vv.gameData.awaitTime(1);

               case 69:
                success();

               case 70:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      playBoostJlAnim: function playBoostJlAnim(type) {
        var eff = "boost_man";
        var fanbeiAnim = "animation2";
        if (2 == type) {
          eff = "super_man";
          fanbeiAnim = "animation1";
        }
        Global.SlotsSoundMgr.playEffect(eff);
        this._spine_jl2.active = true;
        this._spine_fanbei.active = true;
        var self = this;
        this._spine_jl2.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_fanbei.getComponent(sp.Skeleton).setAnimation(0, fanbeiAnim, false);
        this._spine_fanbei.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_fanbei.active = false;
        });
      },
      flyBonusSymbol: function flyBonusSymbol(s_node) {
        var _this9 = this;
        return new Promise(function(success, failed) {
          var flyNode = cc.instantiate(_this9._fly_coin);
          flyNode.parent = _this9._top_fly;
          flyNode.active = true;
          var startPos = _this9._top_fly.convertToNodeSpaceAR(s_node.convertToWorldSpaceAR(cc.v2(0, 0)));
          var endPos = _this9._top_fly.convertToNodeSpaceAR(_this9._spr_coins.convertToWorldSpaceAR(cc.v2(0, 0)));
          flyNode.position = startPos;
          flyNode.getComponent(sp.Skeleton).setAnimation(0, "animation_1", false);
          cc.tween(flyNode).to(.6, {
            position: endPos
          }).delay(.4).call(function() {
            flyNode.destroy();
            success();
          }).start();
        });
      },
      flyBonusToTa: function flyBonusToTa(symbol, isLeft, animName) {
        var _this10 = this;
        return new Promise(function(success, failed) {
          Global.SlotsSoundMgr.playEffect("feature_fly");
          var flyNode = cc.instantiate(symbol.getShowNode());
          flyNode.active = true;
          flyNode.parent = _this10._top_fly;
          var endNode;
          endNode = isLeft ? cc.find(cc.js.formatStr("spr_%s", _this10._leftTaList.length + 1), _this10._spr_ta_left) : cc.find(cc.js.formatStr("spr_%s", _this10._rightTaList.length + 1), _this10._spr_ta_right);
          var startPos = _this10._top_fly.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
          var endPos = _this10._top_fly.convertToNodeSpaceAR(endNode.convertToWorldSpaceAR(cc.v2(0, 0)));
          flyNode.position = startPos;
          flyNode.getComponent(sp.Skeleton).setAnimation(0, animName, false);
          cc.tween(flyNode).to(.6, {
            position: endPos
          }).delay(.4).call(function() {
            isLeft ? _this10._leftTaList.push(flyNode) : _this10._rightTaList.push(flyNode);
            success();
          }).start();
        });
      },
      bonusAddCoin: function bonusAddCoin(mult) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var idxs, items, i, idx, data, symbol;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("coin_increase");
              idxs = _this11._gameInfo.bonusInfo.idxs;
              items = _this11._gameInfo.bonusInfo.items;
              for (i = 0; i < idxs.length; i++) {
                idx = idxs[i];
                data = items[idxs.indexOf(idx)];
                if (data.coin) {
                  symbol = _this11.GetSymbolByIdx(idx);
                  symbol.playAddCoinAnim(data, mult);
                }
              }

             case 4:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showTaSpr: function showTaSpr(bShow) {
        for (var i = 0; i < this._spr_ta_left.childrenCount; i++) this._spr_ta_left.children[i].active = bShow;
        for (var _i7 = 0; _i7 < this._spr_ta_right.childrenCount; _i7++) this._spr_ta_right.children[_i7].active = bShow;
      },
      removeAllFlyNode: function removeAllFlyNode() {
        this._top_fly.removeAllChildren();
        this._leftTaList.splice(0, this._leftTaList.length);
        this._rightTaList.splice(0, this._rightTaList.length);
      },
      ShowGameview: function ShowGameview(bFree, bSuper) {
        cc.vv.gameData.setIsSuper(bSuper);
        bSuper || cc.vv.gameData.setIsFree(bFree);
        cc.find("node_free_tit", this.node).active = bFree;
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
          var bgm = bSuper ? "sb_bgm" : "fg_bgm";
          Global.SlotsSoundMgr.playBgm(bgm);
          cc.find("node_free_tit/spr_free", this.node).active = !bSuper;
          cc.find("node_free_tit/spr_super", this.node).active = bSuper;
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var superFree = cc.find("Canvas/safe_node/spr_bg_super");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          superFree.active = bSuper;
          bSuper || (normalFree.active = bFree);
        }
      },
      CanStopSlot: function CanStopSlot() {
        return null != this._gameInfo && this._canStop;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Sphinx_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecb180k4kFC26u+dzceK4jY", "Sphinx_Symbol");
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
        _coinNum: 0,
        _bonusType: "",
        _bonusFree: 0
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        var isFree = cc.vv.gameData.isFreeGame() || cc.vv.gameData.isSuperGame();
        if (isFree && cfg.cardmapFree) return cfg.cardmapFree;
        return cfg.cardmap;
      },
      StartMove: function StartMove() {
        this._super();
        this._coinNum = 0;
        this._bonusType = "";
        this._bonusFree = 0;
        this.playBonusBgGuangAnim(false);
        this._startMove = true;
      },
      StopMoveEnd: function StopMoveEnd() {
        this._super();
        this._startMove = false;
        this.playRunBgAnim(false, true);
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.hideAllIcon();
        this._startMove && 2 == id ? this.playRunBgAnim(true) : this.playRunBgAnim(false);
      },
      hideAllIcon: function hideAllIcon() {
        this.setCoin();
      },
      setCoin: function setCoin(num, bPlay) {
        var lbl_coin = cc.find("lbl_coin", this.node);
        if (num) {
          var font = null;
          var nVal = cc.vv.gameData.GetTotalBet();
          font = num < .5 * nVal ? cc.vv.gameData.GetFontByName("theme227_base_coin3") : num < nVal ? cc.vv.gameData.GetFontByName("theme227_base_coin2") : cc.vv.gameData.GetFontByName("theme227_base_coin1");
          lbl_coin.active = true;
          lbl_coin.getComponent(cc.Label).font = font;
          lbl_coin.getComponent(cc.Label).string = Global.formatNumShort(num, 0);
          if (bPlay) {
            lbl_coin.setScale(0);
            cc.tween(lbl_coin).to(.5, {
              scale: 1
            }).start();
          }
          this._coinNum = num;
        } else {
          lbl_coin.active = false;
          lbl_coin.getComponent(cc.Label).string = "";
          this._coinNum = 0;
        }
      },
      playAddCoinAnim: function playAddCoinAnim(data, mult) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.setCoin();
              _this.playBonusWinCoin(data);
              _context.next = 4;
              return cc.vv.gameData.awaitTime(.5);

             case 4:
              _this._curNum = mult ? _this._curNum + data.coin * mult : data.coin;
              _this.setCoin(_this._curNum, true);

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playRunBgAnim: function playRunBgAnim(bPlay, isEnd) {
        var scatter_bg = cc.find("w201", this.node);
        var id = this._id;
        if (bPlay && 2 == id) {
          scatter_bg.active = true;
          scatter_bg.opacity = 255;
          scatter_bg.stopAllActions();
          scatter_bg.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else isEnd && scatter_bg.active ? cc.tween(scatter_bg).to(.2, {
          opacity: 0
        }).call(function() {
          scatter_bg.active = false;
        }).start() : scatter_bg.active = false;
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
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, true);
          }
        }
        return isPlay;
      },
      playBonusBgGuangAnim: function playBonusBgGuangAnim(bPlay, type) {
        var bg_guang = cc.find("w_guang", this.node);
        if (bg_guang) if (bPlay) {
          bg_guang.active = true;
          var animName = "";
          "bonus" == type ? animName = "animation1" : "special" == type && (animName = "animation6");
          bg_guang.getComponent(sp.Skeleton).setAnimation(0, animName, true);
        } else bg_guang.active = false;
      },
      playBonusAwaitAnim: function playBonusAwaitAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].await_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].await_ani.name) {
            this.node.zIndex = cfg.symbol[id].await_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].await_ani.name, true);
          }
        }
      },
      playBonusWinCoin: function playBonusWinCoin(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var id, cfg, prep_node, quan_zhuan;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              id = _this2._id;
              cfg = cc.vv.gameData.getGameCfg();
              if (cfg.symbol[id] && cfg.symbol[id].prep_node && cfg.symbol[id].prep_ani && "" != cfg.symbol[id].prep_ani.name) {
                _this2._showNode && (_this2._showNode.active = false);
                prep_node = cc.find(cfg.symbol[id].prep_node, _this2.node);
                prep_node.active = true;
                prep_node.getComponent(sp.Skeleton).setAnimation(0, cfg.symbol[id].prep_ani.name, false);
                prep_node.getComponent(sp.Skeleton).setCompleteListener(function() {
                  prep_node.active = false;
                });
                _this2._showNode = cc.find("w_jinbi", _this2.node);
                _this2._showNode.active = true;
                _this2._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                quan_zhuan = cc.find("quan_zhuan", _this2.node);
                quan_zhuan.active = true;
                quan_zhuan.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                quan_zhuan.getComponent(sp.Skeleton).setCompleteListener(function() {
                  quan_zhuan.active = false;
                });
              }

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playBonusWin: function playBonusWin(type, freeCnt, isResume) {
        this._bonusType = type;
        this._bonusFree = freeCnt;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        var data;
        "free" == type && cfg.bonus_symbol.free ? data = cfg.bonus_symbol.free : "jackpot" == type && cfg.bonus_symbol.jackpot ? data = cfg.bonus_symbol.jackpot : "coin" == type && cfg.bonus_symbol.coin ? data = cfg.bonus_symbol.coin : "megaCoin" == type && cfg.bonus_symbol.megaCoin ? data = cfg.bonus_symbol.megaCoin : "superCoin" == type && cfg.bonus_symbol.superCoin ? data = cfg.bonus_symbol.superCoin : "powerUp" == type && cfg.bonus_symbol.powerUp && (data = cfg.bonus_symbol.powerUp);
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find(data.node, this.node);
        this._showNode.active = true;
        if (isResume) {
          if (data && data.node && data.resume_ani && "" != data.resume_ani.name) {
            this.node.zIndex = data.open_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cc.js.formatStr(data.resume_ani.name, freeCnt), false);
          }
        } else if (data && data.node && data.open_ani && "" != data.open_ani.name) {
          var prep_node = cc.find(cfg.symbol[id].prep_node, this.node);
          prep_node.active = true;
          prep_node.getComponent(sp.Skeleton).setAnimation(0, cfg.symbol[id].prep_ani.name, false);
          prep_node.getComponent(sp.Skeleton).setCompleteListener(function() {
            prep_node.active = false;
          });
          this.node.zIndex = data.open_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var _nodeSp = this._showNode.getComponent(sp.Skeleton);
          if (_nodeSp) {
            var open_name = data.open_ani.name;
            "free" == type && (open_name = cc.js.formatStr(open_name, freeCnt));
            _nodeSp.setAnimation(0, open_name, false);
            if (data.show_ani && "" != data.show_ani.name) {
              var show_name = data.show_ani.name;
              "free" == type && (show_name = cc.js.formatStr(show_name, freeCnt));
              _nodeSp.addAnimation(0, show_name, false);
            }
          }
        }
      },
      playBonusTriAnim: function playBonusTriAnim(type, freeCnt) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        var data;
        "free" == type && cfg.bonus_symbol.free ? data = cfg.bonus_symbol.free : "jackpot" == type && cfg.bonus_symbol.jackpot ? data = cfg.bonus_symbol.jackpot : "powerUp" == type && cfg.bonus_symbol.powerUp && (data = cfg.bonus_symbol.powerUp);
        if (data && data.node && data.trigger_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(data.node, this.node);
          this._showNode.active = true;
          if ("" != data.trigger_ani.name) {
            this.node.zIndex = data.trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var tri_name = data.trigger_ani.name;
              "free" == type && (tri_name = cc.js.formatStr(tri_name, freeCnt));
              nodeSp.setAnimation(0, tri_name, true);
            }
          }
        }
      },
      getShowNode: function getShowNode() {
        return this._showNode;
      },
      Backup: function Backup() {
        var backup = {};
        backup.symbolIdx = this._symbolIdx;
        backup.id = this._id;
        this._data && (backup.data = Global.copy(this._data));
        backup.isKuang = this._isKuang;
        backup.state = this._state;
        backup.coinNum = this._coinNum;
        backup.bonusType = this._bonusType;
        backup.bonusFree = this._bonusFree;
        return backup;
      },
      Resume: function Resume(backup) {
        this._super(backup);
        if (!backup) return;
        var coinNum = backup.coinNum;
        var bonusType = backup.bonusType;
        var bonusFree = backup.bonusFree;
        this.playBonusBgGuangAnim(false);
        coinNum > 0 ? this.setCoin(coinNum, false) : this.setCoin();
        bonusType && this.playBonusWin(bonusType, bonusFree, true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Sphinx_Cfg", "Sphinx_Collect", "Sphinx_GameData", "Sphinx_Logic", "Sphinx_Pick", "Sphinx_Popup", "Sphinx_PrizePool", "Sphinx_Reel", "Sphinx_Slots", "Sphinx_Symbol" ]);