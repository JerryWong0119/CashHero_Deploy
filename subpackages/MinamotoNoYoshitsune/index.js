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
  MinamotoNoYoshitsune_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "939d3rFB9FGcrL0xSnKsB3P", "MinamotoNoYoshitsune_Cfg");
    "use strict";
    var _symbol, _, _2, _3, _4, _5, _6, _shoujifeiCfg;
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
      symbol: (_symbol = {}, _defineProperty(_symbol, 101, {
        node: "symbol_101",
        win_node: "animation_101",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 102, {
        node: "symbol_102",
        win_node: "animation_102",
        win_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 103, {
        node: "symbol_103",
        win_node: "animation_103",
        win_ani: {
          name: "animation4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 104, {
        node: "symbol_104",
        win_node: "animation_104"
      }), _defineProperty(_symbol, 105, {
        node: "symbol_105",
        win_node: "animation_105"
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation",
          zIndex: 400
        },
        idle_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        win_ani: {
          name: "animation1_4",
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
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "symbol_301",
        win_node: "animation_3",
        stop_ani_1: {
          name: "animation3_1",
          zIndex: 100
        },
        trigger_ani_1: {
          name: "animation3_3",
          zIndex: 400
        },
        idle_ani_1: {
          name: "animation3_2",
          zIndex: 200
        },
        win_ani_1: {
          name: "animation3_4",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2_1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2_3",
          zIndex: 400
        },
        idle_ani: {
          name: "animation2_2",
          zIndex: 200
        },
        win_ani: {
          name: "animation2_4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 401, {
        node: "symbol_401"
      }), _symbol),
      emptyId: 401,
      autoModelDelay: 1,
      shoujifeiCfg: (_shoujifeiCfg = {}, _defineProperty(_shoujifeiCfg, 4, (_3 = {}, _defineProperty(_3, 5, (_ = {}, 
      _defineProperty(_, 1, "animation1"), _defineProperty(_, 2, "animation2"), _defineProperty(_, 3, "animation3"), 
      _defineProperty(_, 4, "animation4"), _defineProperty(_, 6, "animation5"), _defineProperty(_, 7, "animation6"), 
      _defineProperty(_, 8, "animation7"), _defineProperty(_, 9, "animation8"), _defineProperty(_, 11, "animation9"), 
      _defineProperty(_, 12, "animation10"), _defineProperty(_, 13, "animation11"), _defineProperty(_, 14, "animation12"), 
      _defineProperty(_, 16, "animation13"), _defineProperty(_, 17, "animation14"), _defineProperty(_, 18, "animation15"), 
      _defineProperty(_, 19, "animation16"), _)), _defineProperty(_3, 6, (_2 = {}, _defineProperty(_2, 1, "animation1"), 
      _defineProperty(_2, 2, "animation2"), _defineProperty(_2, 3, "animation3"), _defineProperty(_2, 4, "animation4"), 
      _defineProperty(_2, 5, "animation4"), _defineProperty(_2, 6, "animation5"), _defineProperty(_2, 7, "animation6"), 
      _defineProperty(_2, 8, "animation7"), _defineProperty(_2, 9, "animation8"), _defineProperty(_2, 10, "animation8"), 
      _defineProperty(_2, 11, "animation9"), _defineProperty(_2, 12, "animation10"), _defineProperty(_2, 13, "animation11"), 
      _defineProperty(_2, 14, "animation12"), _defineProperty(_2, 15, "animation12"), 
      _defineProperty(_2, 16, "animation13"), _defineProperty(_2, 17, "animation14"), 
      _defineProperty(_2, 18, "animation15"), _defineProperty(_2, 19, "animation16"), 
      _defineProperty(_2, 20, "animation16"), _2)), _3)), _defineProperty(_shoujifeiCfg, 5, (_6 = {}, 
      _defineProperty(_6, 5, (_4 = {}, _defineProperty(_4, 1, "animation1"), _defineProperty(_4, 2, "animation2"), 
      _defineProperty(_4, 3, "animation3"), _defineProperty(_4, 4, "animation4"), _defineProperty(_4, 5, "animation4"), 
      _defineProperty(_4, 6, "animation5"), _defineProperty(_4, 7, "animation6"), _defineProperty(_4, 8, "animation7"), 
      _defineProperty(_4, 9, "animation8"), _defineProperty(_4, 10, "animation8"), _defineProperty(_4, 11, "animation9"), 
      _defineProperty(_4, 12, "animation10"), _defineProperty(_4, 13, "animation11"), 
      _defineProperty(_4, 14, "animation12"), _defineProperty(_4, 15, "animation12"), 
      _defineProperty(_4, 16, "animation13"), _defineProperty(_4, 17, "animation14"), 
      _defineProperty(_4, 18, "animation15"), _defineProperty(_4, 19, "animation16"), 
      _defineProperty(_4, 20, "animation16"), _4)), _defineProperty(_6, 6, (_5 = {}, _defineProperty(_5, 1, "animation1"), 
      _defineProperty(_5, 2, "animation2"), _defineProperty(_5, 3, "animation3"), _defineProperty(_5, 4, "animation4"), 
      _defineProperty(_5, 5, "animation4"), _defineProperty(_5, 6, "animation5"), _defineProperty(_5, 7, "animation6"), 
      _defineProperty(_5, 8, "animation7"), _defineProperty(_5, 9, "animation8"), _defineProperty(_5, 10, "animation8"), 
      _defineProperty(_5, 11, "animation9"), _defineProperty(_5, 12, "animation10"), _defineProperty(_5, 13, "animation11"), 
      _defineProperty(_5, 14, "animation12"), _defineProperty(_5, 15, "animation12"), 
      _defineProperty(_5, 16, "animation13"), _defineProperty(_5, 17, "animation14"), 
      _defineProperty(_5, 18, "animation15"), _defineProperty(_5, 19, "animation16"), 
      _defineProperty(_5, 20, "animation16"), _defineProperty(_5, 21, "animation13"), 
      _defineProperty(_5, 22, "animation14"), _defineProperty(_5, 23, "animation15"), 
      _defineProperty(_5, 24, "animation16"), _defineProperty(_5, 25, "animation16"), 
      _5)), _6)), _shoujifeiCfg),
      MapType: {
        PickBooster: 1,
        SuperFreeGame: 2
      },
      MapBoostType: {
        ExtraFreeCnt: 1,
        WildPaysDouble: 2,
        AddReel: 3,
        AddRow: 4,
        ExtraBonus: 5,
        Coin: 6
      },
      MapConfig: [ {
        id: 1,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 3,
        index: 1
      }, {
        id: 2,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 3,
        index: 1
      }, {
        id: 3,
        type: 2,
        boosters: [ 1, 2 ],
        animationName: "animation1",
        nextSlotsId: 7,
        index: 1,
        mult: 1
      }, {
        id: 4,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 5,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 6,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 7,
        type: 2,
        boosters: [ 1, 2 ],
        animationName: "animation2",
        nextSlotsId: 12,
        index: 2,
        mult: 1.25
      }, {
        id: 8,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 9,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 10,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 11,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 12,
        type: 2,
        boosters: [ 1, 2, 3 ],
        animationName: "animation3",
        nextSlotsId: 18,
        index: 3,
        mult: 1.5
      }, {
        id: 13,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 14,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 15,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 16,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 17,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 18,
        type: 2,
        boosters: [ 1, 2, 3, 4 ],
        animationName: "animation4",
        nextSlotsId: 25,
        index: 4,
        mult: 1.75
      }, {
        id: 19,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 20,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 21,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 22,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 23,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 24,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 25,
        type: 2,
        boosters: [ 1, 2, 3, 4, 5 ],
        animationName: "animation5",
        nextSlotsId: 33,
        index: 5,
        mult: 2
      }, {
        id: 26,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 27,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 28,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 29,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 30,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 31,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 32,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 33,
        type: 2,
        boosters: [ 1, 2, 3, 4, 5 ],
        animationName: "animation6",
        nextSlotsId: 3,
        index: 6,
        mult: 2.5
      } ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "MinamotoNoYoshitsune_Slots",
        Reels: "MinamotoNoYoshitsune_Reel",
        Symbols: "MinamotoNoYoshitsune_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 118,
        height: 87
      },
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      wildId: 101,
      scatterId: 2,
      bonusId: 3,
      collectSymbolId: 3,
      extraSpinId: 301,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 1.5,
      reelStateInfo: [],
      helpItems: [ "games/MinamotoNoYoshitsune/prefab/help_item_1", "games/MinamotoNoYoshitsune/prefab/help_item_2", "games/MinamotoNoYoshitsune/prefab/help_item_3", "games/MinamotoNoYoshitsune/prefab/help_item_4", "games/MinamotoNoYoshitsune/prefab/help_item_5", "games/MinamotoNoYoshitsune/prefab/help_item_6" ],
      commEffect: {
        path: "games/MinamotoNoYoshitsune/",
        win1: [ "win1", "" ],
        win2: [ "win2", "" ],
        win3: [ "win3", "" ],
        win4: [ "win4", "" ]
      },
      normalBgm: "bg_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  MinamotoNoYoshitsune_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "378089aCghEdqEOGMTni680", "MinamotoNoYoshitsune_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _pickBonusData: null,
        _lockBonus: false,
        _leftSpiderCount: 0,
        _rightSpiderCount: 0
      },
      onLoad: function onLoad() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/jdt", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_unlock", true);
          this._lockBonus = false;
          script.setAnimation(0, "animation2", false);
          script.addAnimation(0, "animation2_1", true);
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_lock", true);
          this._lockBonus = true;
          script.setAnimation(0, "animation1", false);
          script.addAnimation(0, "animation1_1", true);
        }
        cc.find("safe_node/slots/collect_node/scale_node", this.node).active = !this._lockBonus;
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        if (200 !== msg.code) return;
        1 === msg.data.rtype ? cc.find("safe_node/pick_game", this.node).getComponent("MinamotoNoYoshitsune_PickGame").onRcvSubGameData(msg) : 2 === msg.data.rtype ? cc.find("safe_node/slots/pick_bonus", this.node).getComponent("MinamotoNoYoshitsune_PickBonus").onRcvSubGameData(msg) : cc.log("cannot get msg reciver");
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, false, this);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  MinamotoNoYoshitsune_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9542cs2z6RB+bIkfDBnjdwG", "MinamotoNoYoshitsune_Map");
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
        role: cc.Node,
        points: [ cc.Node ],
        map: cc.Node,
        start_node: cc.Node,
        btn_back: cc.Node
      },
      initMap: function initMap(mapInfo) {
        this.node.active = true;
        this.map.y = cc.winSize.height;
        var cfg = cc.vv.gameData.getGameCfg();
        var atlas = cc.vv.gameData.GetAtlasByName("map");
        for (var i = 0; i < cfg.MapConfig.length; i++) {
          var pointCfg = cfg.MapConfig[i];
          var point = this.points[i];
          var spine = point.getChildByName("spine").getComponent(sp.Skeleton);
          if (pointCfg.type === cfg.MapType.PickBooster) spine.node.active = i < mapInfo.currId; else if (pointCfg.type === cfg.MapType.SuperFreeGame) {
            var common = point.getChildByName("common");
            var finish = point.getChildByName("finish");
            common.active = i >= mapInfo.currId;
            finish.active = i < mapInfo.currId;
            if (i < mapInfo.currId) {
              spine.setAnimation(0, "animation" + pointCfg.index + "_3", true);
              point.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(pointCfg.boosters.length);
            } else {
              spine.setAnimation(0, "animation" + pointCfg.index, true);
              point.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(0);
            }
            point.getChildByName("allBooster").getComponent("ImgSwitchCmp").setIndex(pointCfg.boosters.length);
            cc.find("diamond_winCoin/num", point).getComponent(cc.Label).string = Global.formatNumShort(mapInfo.startPrice * pointCfg.mult, 0);
            for (var _i = 1; _i < 6; _i++) {
              var tips = common.getChildByName("tips_" + _i);
              if (tips) {
                tips.getChildByName("no").active = false;
                tips.getChildByName("yes").active = false;
              }
            }
          }
        }
        var nextFreeGameIndex = mapInfo.currId >= 1 ? cfg.MapConfig[mapInfo.currId - 1].nextSlotsId - 1 : cfg.MapConfig[0].nextSlotsId - 1;
        var nextFreeGameCfg = cfg.MapConfig[nextFreeGameIndex];
        var nextFreeGamePoint = this.points[nextFreeGameIndex];
        if (nextFreeGamePoint) {
          var _common = nextFreeGamePoint.getChildByName("common");
          if (_common) {
            for (var _i2 = 1; _i2 < 6; _i2++) {
              var _tips = _common.getChildByName("tips_" + _i2);
              if (_tips) {
                _tips.getChildByName("no").active = false;
                _tips.getChildByName("yes").active = -1 !== mapInfo.nextUnlockBoosters.indexOf(_i2);
              }
            }
            nextFreeGamePoint.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(mapInfo.nextUnlockBoosters.length);
          }
        }
        var startPoint = mapInfo.currId <= 0 ? this.start_node : this.points[mapInfo.currId - 1];
        this.role.active = true;
        this.role.position = startPoint.position;
      },
      openMap: function openMap(showBtn) {
        var _this = this;
        this.node.active = true;
        this.map.y = cc.winSize.height;
        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_open", true);
        cc.tween(this.map).to(.5, {
          y: 0
        }).start();
        if (showBtn) {
          this.btn_back.active = true;
          this.btn_back.scale = 0;
          cc.tween(this.btn_back).delay(.6).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          this.btn_back.on("click", function() {
            _this.btn_back.off("click");
            cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
            cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_close", true);
            cc.tween(_this.btn_back).to(.2, {
              scale: 0
            }).start();
            _this.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
            cc.tween(_this.map).to(.5, {
              y: cc.winSize.height
            }).call(function() {
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              _this.node.active = false;
              cc.vv.gameData.GetSlotsScript()._haveOpenMap = false;
            }).start();
          });
        }
      },
      showMap: function showMap(mapInfo) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cfg, pointCfg, point, spine, common, finish, i, tips, position, percentY, startPoint, endPoint, endPointCfg, _spine, _spine2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2.node.active = true;
              cfg = cc.vv.gameData.getGameCfg();
              _this2.initMap(mapInfo);
              pointCfg = cfg.MapConfig[mapInfo.currId - 1];
              point = _this2.points[mapInfo.currId - 1];
              spine = point.getChildByName("spine").getComponent(sp.Skeleton);
              if (pointCfg.type === cfg.MapType.PickBooster) spine.node.active = false; else if (pointCfg.type === cfg.MapType.SuperFreeGame) {
                common = point.getChildByName("common");
                finish = point.getChildByName("finish");
                common.active = true;
                finish.active = false;
                spine.setAnimation(0, "animation" + pointCfg.index, true);
                for (i = 1; i < 6; i++) {
                  tips = common.getChildByName("tips_" + i);
                  if (tips) {
                    tips.getChildByName("no").active = -1 === mapInfo.nextUnlockBoosters.indexOf(i);
                    tips.getChildByName("yes").active = -1 !== mapInfo.nextUnlockBoosters.indexOf(i);
                  }
                }
              }
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
              _this2.openMap(false);
              _context.next = 11;
              return cc.vv.gameData.awaitTime(.5);

             case 11:
              position = point.convertToWorldSpaceAR(cc.v2(0, 0));
              percentY = position.y / cc.winSize.height - .15;
              percentY < 0 ? percentY = 0 : percentY > 1 && (percentY = 1);
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(percentY);
              startPoint = mapInfo.currId - 1 <= 0 ? _this2.start_node : _this2.points[mapInfo.currId - 2];
              endPoint = _this2.points[mapInfo.currId - 1];
              _this2.role.active = true;
              _this2.role.position = startPoint.position;
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "man_jump", true);
              cc.tween(_this2.role).delay(.5).to(.5, {
                position: endPoint.position
              }).start();
              endPointCfg = cfg.MapConfig[mapInfo.currId - 1];
              if (!(endPointCfg.type === cfg.MapType.PickBooster)) {
                _context.next = 36;
                break;
              }
              _context.next = 25;
              return cc.vv.gameData.awaitTime(.8);

             case 25:
              _spine = endPoint.getChildByName("spine").getComponent(sp.Skeleton);
              _spine.node.active = true;
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "fire_ignite", true);
              _context.next = 30;
              return cc.vv.gameData.awaitTime(1);

             case 30:
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
              cc.tween(_this2.map).to(.5, {
                y: cc.winSize.height
              }).start();
              _context.next = 34;
              return cc.vv.gameData.awaitTime(.5);

             case 34:
              _context.next = 49;
              break;

             case 36:
              if (!(endPointCfg.type === cfg.MapType.SuperFreeGame)) {
                _context.next = 49;
                break;
              }
              _context.next = 39;
              return cc.vv.gameData.awaitTime(.5);

             case 39:
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "tiger_roar", true);
              _spine2 = endPoint.getChildByName("spine").getComponent(sp.Skeleton);
              _spine2.setAnimation(0, "animation" + endPointCfg.index + "_1", true);
              _context.next = 44;
              return cc.vv.gameData.awaitTime(2);

             case 44:
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_close", true);
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
              cc.tween(_this2.map).to(.5, {
                y: cc.winSize.height
              }).start();
              _context.next = 49;
              return cc.vv.gameData.awaitTime(.5);

             case 49:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      cutScenePick: function cutScenePick() {
        cc.vv.AudioManager.playEff("games/SpookyHalloween/", "transition3", true);
        var pick_qieping = cc.find("pick_qieping", this.node.parent);
        pick_qieping.active = true;
        var spine = pick_qieping.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          pick_qieping.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  MinamotoNoYoshitsune_PickBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a7359KC81PBpO+dIbDEcPI", "MinamotoNoYoshitsune_PickBonus");
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
        reels_bg: cc.Node,
        tips_node: cc.Node,
        reels_frame: cc.Node,
        bonus_bj: sp.Skeleton,
        bonus_wenzi: sp.Skeleton,
        items_node: cc.Node,
        items: [ cc.Node ],
        pick_lizi: cc.Node,
        tengman: sp.Skeleton,
        remain_times: cc.Label,
        _successCallback: null,
        _canSelect: false,
        _remainTimes: 3,
        _haveOpenReward: [],
        _winCoin: 0,
        _startPosY: 0
      },
      onLoad: function onLoad() {},
      reconnect: function reconnect() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("pick1_bgm");
                _this.reset();
                _this._successCallback = success;
                _this.node.active = true;
                var pickBonus = cc.vv.gameData.getDeskInfo().pickBonus;
                _this._remainTimes = pickBonus.spinCnt;
                _this.bonus_bj.node.active = true;
                _this.bonus_bj.setAnimation(0, "animation1_2", true);
                _this.bonus_wenzi.node.y = 0;
                _this.bonus_wenzi.node.active = true;
                _this.bonus_wenzi.setAnimation(0, "animation2", true);
                _this.reels_bg.active = true;
                _this.reels_frame.active = true;
                _this.items_node.active = true;
                _this._haveOpenReward = pickBonus.choiceIdxs;
                _this._canSelect = true;
                var _loop = function _loop(i) {
                  var item = _this.items[i];
                  item.scale = 1;
                  item.off(cc.Node.EventType.TOUCH_END);
                  item.on(cc.Node.EventType.TOUCH_END, function() {
                    if (!_this._canSelect) return;
                    item.off(cc.Node.EventType.TOUCH_END);
                    cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_click", true);
                    _this._canSelect = false;
                    var req = {
                      c: MsgId.SLOT_SUBGAME_DATA
                    };
                    req.uid = Global.playerData.uid;
                    req.gameid = cc.vv.gameData._gameId;
                    req.data = {};
                    req.data.rtype = 2;
                    req.data.choiceId = i + 1;
                    cc.vv.NetManager.send(req);
                  });
                  cc.find("zishuijing", item).getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                  if (-1 !== _this._haveOpenReward.indexOf(i + 1)) {
                    var lanbaoshi_spine = cc.find("lanbaoshi", item).getComponent(sp.Skeleton);
                    lanbaoshi_spine.node.active = true;
                    lanbaoshi_spine.setAnimation(0, "animation1", true);
                    var reward = pickBonus.items[i];
                    if (reward.coin > 0) {
                      var coin = cc.find("coin", item);
                      coin.active = true;
                      coin.getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0);
                    } else {
                      var atlas = cc.vv.gameData.GetAtlasByName("symbols");
                      cc.find("jackpot", item).active = true;
                      cc.find("jackpot", item).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme205_s_jp" + (5 - reward.jackpot.id));
                    }
                  }
                };
                for (var i = 0; i < _this.items.length; i++) _loop(i);
                cc.find("collect_node", _this.node.parent).y -= 100;
                _this.tips_node.active = true;
                _this.tips_node.y += 100;
                _this.remain_times.string = _this._remainTimes;
                _this.tengman.node.active = true;
                _this.tengman.setAnimation(0, "animation6_1", true);
                var winCoin = cc.find("coin", _this.tengman.node);
                winCoin.active = true;
                winCoin.opacity = 255;
                winCoin.getComponent(cc.Label).string = Global.formatNumShort(pickBonus.winCoin);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      enterPickBonus: function enterPickBonus(posY) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  var i, item, collect_node, _loop2, _i;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("pick1_bgm");
                      cc.find("role", _this2.node.parent.parent).active = false;
                      _this2.tengman.node.active = true;
                      _this2.node.active = true;
                      _this2.reset();
                      _this2._successCallback = success;
                      _this2._startPosY = posY;
                      _this2.bonus_bj.node.active = true;
                      _this2.bonus_bj.setAnimation(0, "animation1_1", false);
                      _this2.bonus_bj.addAnimation(0, "animation1_2", true);
                      _this2.bonus_wenzi.node.active = true;
                      _this2.bonus_wenzi.node.y = posY;
                      _this2.bonus_wenzi.setAnimation(0, "animation2", true);
                      cc.tween(_this2.bonus_wenzi.node).to(.5, {
                        y: 0
                      }).start();
                      _context2.next = 17;
                      return cc.vv.gameData.awaitTime(.5);

                     case 17:
                      _this2.reels_bg.active = true;
                      _this2.reels_frame.active = true;
                      _this2.items_node.active = true;
                      for (i = 0; i < _this2.items.length; i++) {
                        item = _this2.items[i];
                        cc.tween(item).delay(i % 4 * .3).to(.3, {
                          scale: 1
                        }).start();
                      }
                      _context2.next = 23;
                      return cc.vv.gameData.awaitTime(1.2);

                     case 23:
                      collect_node = cc.find("collect_node", _this2.node.parent);
                      cc.tween(collect_node).by(.5, {
                        y: -100
                      }).start();
                      _context2.next = 27;
                      return cc.vv.gameData.awaitTime(.5);

                     case 27:
                      _this2.tips_node.active = true;
                      cc.tween(_this2.tips_node).by(.5, {
                        y: 100
                      }).start();
                      _this2.remain_times.string = _this2._remainTimes;
                      _context2.next = 32;
                      return cc.vv.gameData.awaitTime(.5);

                     case 32:
                      _this2._canSelect = true;
                      _loop2 = function _loop2(_i) {
                        var item = _this2.items[_i];
                        item.off(cc.Node.EventType.TOUCH_END);
                        item.on(cc.Node.EventType.TOUCH_END, function() {
                          if (!_this2._canSelect) return;
                          item.off(cc.Node.EventType.TOUCH_END);
                          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_click", true);
                          _this2._canSelect = false;
                          var req = {
                            c: MsgId.SLOT_SUBGAME_DATA
                          };
                          req.uid = Global.playerData.uid;
                          req.gameid = cc.vv.gameData._gameId;
                          req.data = {};
                          req.data.rtype = 2;
                          req.data.choiceId = _i + 1;
                          cc.vv.NetManager.send(req);
                        });
                      };
                      for (_i = 0; _i < _this2.items.length; _i++) _loop2(_i);

                     case 35:
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
      reset: function reset() {
        this.reels_bg.active = false;
        this.tips_node.y = 116;
        this.reels_frame.active = false;
        this.bonus_bj.node.active = false;
        this.bonus_wenzi.node.active = false;
        this.items_node.active = false;
        var _iterator = _createForOfIteratorHelper(this.items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            cc.find("lanbaoshi", item).active = false;
            cc.find("coin", item).active = false;
            cc.find("pick_more", item).active = false;
            cc.find("jackpot", item).active = false;
            cc.find("dianji", item).active = false;
            cc.find("shoujifei", item).active = false;
            cc.find("zishuijing", item).active = true;
            cc.find("zishuijing", item).getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
            var _iterator2 = _createForOfIteratorHelper(item.children), _step2;
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
            item.scale = 0;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._successCallback = null;
        this._canSelect = false;
        this._remainTimes = 3;
        this._haveOpenReward = [];
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var data, i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (!(200 !== msg.code)) {
                _context4.next = 3;
                break;
              }
              _this3._canSelect = true;
              return _context4.abrupt("return");

             case 3:
              if (!(2 !== msg.data.rtype)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");

             case 5:
              data = msg.data;
              _this3._result = data;
              _this3._haveOpenReward.push(data.choiceId);
              _this3._remainTimes--;
              _this3._remainTimes < 0 && (_this3._remainTimes = 0);
              _this3.remain_times.string = _this3._remainTimes;
              if (!(0 === data.pickBonus.spinCnt)) {
                _context4.next = 25;
                break;
              }
              _this3.showReward(data.choiceId, false, data.pickBonus.items[data.choiceId - 1], data.pickBonus.winCoin);
              _this3._canSelect = false;
              _this3._winCoin = data.pickBonus.winCoin;
              cc.vv.gameData.AddCoin(_this3._winCoin);
              _context4.next = 18;
              return cc.vv.gameData.awaitTime(3);

             case 18:
              for (i = 0; i < _this3.items.length; i++) -1 === _this3._haveOpenReward.indexOf(i + 1) && _this3.showReward(i + 1, true, data.pickBonus.items[i], data.pickBonus.winCoin);
              _context4.next = 21;
              return cc.vv.gameData.awaitTime(2);

             case 21:
              _context4.next = 23;
              return _this3.exitPickBonus();

             case 23:
              _context4.next = 26;
              break;

             case 25:
              _this3.showReward(data.choiceId, false, data.pickBonus.items[data.choiceId - 1], data.pickBonus.winCoin);

             case 26:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showReward: function showReward(choiceId, isGray, reward, allWinCoin) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var item, zishuijing, _iterator3, _step3, child, coin, atlas, dianji_spine, lanbaoshi_spine, pick_more, endPos, _coin, jackpot, _atlas;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              item = _this4.items[choiceId - 1];
              zishuijing = item.getChildByName("zishuijing");
              if (!isGray) {
                _context5.next = 9;
                break;
              }
              zishuijing.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
              _iterator3 = _createForOfIteratorHelper(item.children);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  child = _step3.value;
                  child.color = cc.Color.GRAY;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (reward.repick) cc.find("pick_more", item).active = true; else if (reward.coin > 0) {
                coin = cc.find("coin", item);
                coin.active = true;
                coin.getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0);
              } else if (reward.jackpot) {
                atlas = cc.vv.gameData.GetAtlasByName("symbols");
                cc.find("jackpot", item).active = true;
                cc.find("jackpot", item).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme205_s_jp" + (5 - reward.jackpot.id));
              }
              _context5.next = 41;
              break;

             case 9:
              dianji_spine = cc.find("dianji", item).getComponent(sp.Skeleton);
              dianji_spine.node.active = true;
              dianji_spine.setAnimation(0, "animation", false);
              dianji_spine.setCompleteListener(function() {
                dianji_spine.setCompleteListener(null);
                dianji_spine.node.active = false;
              });
              zishuijing.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
              _context5.next = 16;
              return cc.vv.gameData.awaitTime(.5);

             case 16:
              lanbaoshi_spine = cc.find("lanbaoshi", item).getComponent(sp.Skeleton);
              lanbaoshi_spine.node.active = true;
              lanbaoshi_spine.setAnimation(0, "animation1", true);
              if (!reward.repick) {
                _context5.next = 40;
                break;
              }
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_addone", true);
              pick_more = cc.find("pick_more", item);
              pick_more.scale = 0;
              pick_more.active = true;
              cc.tween(pick_more).to(.5, {
                scale: 1
              }).start();
              _context5.next = 27;
              return cc.vv.gameData.awaitTime(.5);

             case 27:
              _this4._remainTimes++;
              _this4.pick_lizi.active = true;
              _this4.pick_lizi.position = item.position;
              endPos = _this4.remain_times.node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this4.node.convertToNodeSpaceAR(endPos);
              cc.tween(_this4.pick_lizi).to(.5, {
                position: endPos
              }).call(function() {
                _this4.remain_times.string = _this4._remainTimes;
                _this4.pick_lizi.active = false;
              }).start();
              _context5.next = 35;
              return cc.vv.gameData.awaitTime(1.2);

             case 35:
              lanbaoshi_spine.setAnimation(0, "animation2", false);
              lanbaoshi_spine.addAnimation(0, "animation1", true);
              _context5.next = 39;
              return cc.vv.gameData.awaitTime(.3);

             case 39:
              pick_more.active = false;

             case 40:
              if (reward.coin > 0) {
                cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_coin", true);
                _coin = cc.find("coin", item);
                _coin.active = true;
                _coin.scale = 0;
                _coin.getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0);
                cc.tween(_coin).to(.5, {
                  scale: 1
                }).call(function() {
                  if (1 === _this4._haveOpenReward.length) {
                    _this4.tengman.setAnimation(0, "animation7", false);
                    _this4.tengman.addAnimation(0, "animation6_1", true);
                  }
                }).delay(.2).call(function() {
                  var shoujifei_spine = cc.find("shoujifei", item).getComponent(sp.Skeleton);
                  shoujifei_spine.node.active = true;
                  shoujifei_spine.setAnimation(0, "animation" + choiceId, false);
                  shoujifei_spine.setCompleteListener(function() {
                    shoujifei_spine.setCompleteListener(null);
                    shoujifei_spine.node.active = false;
                    var winCoin = cc.find("coin", _this4.tengman.node);
                    winCoin.active = true;
                    winCoin.opacity = 255;
                    winCoin.getComponent(cc.Label).string = Global.formatNumShort(allWinCoin, 0);
                    _this4._canSelect = true;
                    cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", true);
                    var bonusjieshou_spine = cc.find("bonusjieshou", _this4.tengman.node).getComponent(sp.Skeleton);
                    bonusjieshou_spine.node.active = true;
                    bonusjieshou_spine.setAnimation(0, "animation", false);
                    bonusjieshou_spine.setCompleteListener(function() {
                      bonusjieshou_spine.setCompleteListener(null);
                      bonusjieshou_spine.node.active = false;
                    });
                  });
                }).start();
              } else if (reward.jackpot) {
                jackpot = cc.find("jackpot", item);
                _atlas = cc.vv.gameData.GetAtlasByName("symbols");
                jackpot.active = true;
                jackpot.scale = 0;
                jackpot.getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame("theme205_s_jp" + (5 - reward.jackpot.id));
                cc.tween(jackpot).to(.5, {
                  scale: 1
                }).call(function() {
                  if (1 === _this4._haveOpenReward.length) {
                    _this4.tengman.setAnimation(0, "animation7", false);
                    _this4.tengman.addAnimation(0, "animation6_1", true);
                  }
                }).delay(.2).call(function() {
                  var shoujifei_spine = cc.find("shoujifei", item).getComponent(sp.Skeleton);
                  shoujifei_spine.node.active = true;
                  shoujifei_spine.setAnimation(0, "animation" + choiceId, false);
                  shoujifei_spine.setCompleteListener(function() {
                    shoujifei_spine.setCompleteListener(null);
                    var winCoin = cc.find("coin", _this4.tengman.node);
                    winCoin.active = true;
                    winCoin.opacity = 255;
                    winCoin.getComponent(cc.Label).string = Global.formatNumShort(allWinCoin, 0);
                    _this4.popJackpotResult(reward.jackpot);
                  });
                }).start();
              }

             case 41:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      popJackpotResult: function popJackpotResult(jackpot) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var free_dialog, free_bg, dialog, freetanchuang_spine, coin, sound, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              free_dialog = cc.find("free_dialog", _this5.node.parent.parent);
              free_dialog.active = true;
              free_bg = cc.find("free_dialog_bg", free_dialog);
              free_bg.opacity = 0;
              free_bg.runAction(cc.fadeTo(.2, 200));
              dialog = cc.find("jackpot_node", free_dialog);
              dialog.active = true;
              freetanchuang_spine = cc.find("freetanchuang", dialog).getComponent(sp.Skeleton);
              freetanchuang_spine.node.active = true;
              coin = cc.find("coin", dialog);
              coin.scale = 0;
              coin.getComponent(cc.Label).string = "";
              sound = "dialog_mini_collect";
              _context8.t0 = jackpot.id;
              _context8.next = 1 === _context8.t0 ? 16 : 2 === _context8.t0 ? 18 : 3 === _context8.t0 ? 20 : 4 === _context8.t0 ? 22 : 24;
              break;

             case 16:
              sound = "dialog_mini_collect";
              return _context8.abrupt("break", 24);

             case 18:
              sound = "dialog_minor_collect";
              return _context8.abrupt("break", 24);

             case 20:
              sound = "dialog_major_collect";
              return _context8.abrupt("break", 24);

             case 22:
              sound = "dialog_grand_collect";
              return _context8.abrupt("break", 24);

             case 24:
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", sound, true);
              freetanchuang_spine.setAnimation(0, "animation" + jackpot.id + "_1", false);
              freetanchuang_spine.addAnimation(0, "animation" + jackpot.id + "_2", true);
              btn_collect = cc.find("btn_collect", dialog);
              btn_collect.scale = 0;
              _context8.next = 31;
              return cc.vv.gameData.awaitTime(.3);

             case 31:
              Global.doRoallNumEff(coin, 0, jackpot.value, 3, null, null, 0, true);
              cc.tween(coin).to(.2, {
                scale: 1
              }).start();
              _context8.next = 35;
              return cc.vv.gameData.awaitTime(.2);

             case 35:
              cc.tween(btn_collect).to(.2, {
                scale: .5
              }).start();
              _context8.next = 38;
              return cc.vv.gameData.awaitTime(.2);

             case 38:
              btn_collect.off("click");
              func = function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btn_collect.off("click");
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", true);
                      cc.tween(free_bg).to(.2, {
                        opacity: 0
                      }).start();
                      freetanchuang_spine.setAnimation(0, "animation" + jackpot.id + "_3", false);
                      freetanchuang_spine.setCompleteListener(function() {
                        freetanchuang_spine.setCompleteListener(null);
                        dialog.active = false;
                        free_dialog.active = false;
                        freetanchuang_spine.node.active = false;
                        _this5._canSelect = true;
                      });
                      _context6.next = 8;
                      return cc.vv.gameData.awaitTime(.3);

                     case 8:
                      cc.tween(coin).to(.2, {
                        scale: 0
                      }).start();

                     case 9:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function func() {
                  return _ref2.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context7.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context7.stop();
                  }
                }, _callee7);
              })));

             case 42:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      exitPickBonus: function exitPickBonus() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var coin;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this6.reels_bg.active = false;
              _this6.reels_frame.active = false;
              _this6.items_node.active = false;
              _this6.bonus_bj.setAnimation(0, "animation1_3", false);
              _this6.bonus_bj.setCompleteListener(function() {
                _this6.bonus_bj.setCompleteListener(null);
                _this6.bonus_bj.node.active = false;
              });
              cc.tween(_this6.bonus_wenzi.node).to(.5, {
                y: _this6._startPosY
              }).call(function() {
                _this6.bonus_wenzi.node.active = false;
              }).start();
              coin = cc.find("coin", _this6.tengman.node);
              cc.tween(coin).to(.5, {
                opacity: 0
              }).call(function() {
                coin.active = false;
              }).start();
              _this6.tips_node.y -= 100;
              _this6.tips_node.active = false;
              cc.tween(cc.find("collect_node", _this6.node.parent)).by(.5, {
                y: 100
              }).start();
              _this6.tengman.setAnimation(0, "animation1", false);
              _this6.tengman.addAnimation(0, "animation2", true);
              _context9.next = 15;
              return cc.vv.gameData.awaitTime(1);

             case 15:
              _this6.tengman.node.active = false;
              cc.find("role", _this6.node.parent.parent).active = true;
              _this6.node.active = false;
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();
              _this6._successCallback();

             case 21:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      }
    });
    cc._RF.pop();
  }, {} ],
  MinamotoNoYoshitsune_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fc05wF6OBHCavBUqRA3FS4", "MinamotoNoYoshitsune_PickGame");
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
        top_bg: cc.Node,
        items: [ cc.Node ],
        black_bg: cc.Node,
        _haveOpenReward: [],
        _canSelect: true,
        _result: null,
        _successCallback: null,
        _unlockBooster: []
      },
      onLoad: function onLoad() {},
      enterPickGame: function enterPickGame(index, times, pickBoosterGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                _this._successCallback = success;
                _this.node.active = true;
                _this.reset();
                for (var i = 0; i < pickBoosterGame.choiceIdxs.length; i++) {
                  var _index = pickBoosterGame.choiceIdxs[i];
                  var item = cc.find("item_bg/item_" + _index, _this.node);
                  _this.showReward(item, false, pickBoosterGame.choiceItems[i]);
                  _this._haveOpenReward.push(_index);
                }
                cc.find("num_2", _this.top_bg).active = 2 === pickBoosterGame.totalCnt;
                cc.find("num_3", _this.top_bg).active = 3 === pickBoosterGame.totalCnt;
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("pick2_bgm");
                var _loop = function _loop(_i) {
                  var item = cc.find("item_bg/item_" + _i, _this.node);
                  item.off(cc.Node.EventType.TOUCH_END);
                  item.on(cc.Node.EventType.TOUCH_END, function() {
                    if (!_this._canSelect) return;
                    item.off(cc.Node.EventType.TOUCH_END);
                    cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "mappick_open", true);
                    _this._canSelect = false;
                    var req = {
                      c: MsgId.SLOT_SUBGAME_DATA
                    };
                    req.uid = Global.playerData.uid;
                    req.gameid = cc.vv.gameData._gameId;
                    req.data = {};
                    req.data.rtype = 1;
                    req.data.choiceId = _i;
                    cc.vv.NetManager.send(req);
                  });
                };
                for (var _i = 1; _i < 9; _i++) _loop(_i);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      reset: function reset() {
        this._haveOpenReward = [];
        this._result = null;
        this._canSelect = true;
        this._unlockBooster = [];
        for (var i = 1; i < 9; i++) {
          var item = cc.find("item_bg/item_" + i, this.node);
          var _iterator = _createForOfIteratorHelper(item.children), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var child = _step.value;
              child.color = cc.Color.WHITE;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var spine = cc.find("spine", item).getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation", true);
          var coin = cc.find("coin", item);
          coin.active = false;
          var coin_light = cc.find("coin_light", item);
          coin_light.active = false;
        }
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cfg, data, item, resultIndex, i, _item, _item2;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(200 !== msg.code)) {
                _context2.next = 3;
                break;
              }
              _this2._canSelect = true;
              return _context2.abrupt("return");

             case 3:
              if (!(1 !== msg.data.rtype)) {
                _context2.next = 6;
                break;
              }
              _this2._canSelect = true;
              return _context2.abrupt("return");

             case 6:
              cfg = cc.vv.gameData.getGameCfg();
              data = msg.data;
              _this2._result = data;
              _this2._haveOpenReward.push(data.choiceId);
              data.choiceItem.type !== cfg.MapBoostType.Coin && _this2._unlockBooster.push(data.choiceItem.type);
              if (!data.pickBoosterGame.isEnd) {
                _context2.next = 26;
                break;
              }
              item = _this2.items[data.choiceId - 1];
              _this2.showReward(item, false, data.choiceItem);
              _context2.next = 16;
              return cc.vv.gameData.awaitTime(.8);

             case 16:
              cc.vv.gameData.AddCoin(data.pickBoosterGame.winCoin);
              resultIndex = 0;
              for (i = 0; i < _this2.items.length; i++) if (-1 === _this2._haveOpenReward.indexOf(i + 1)) {
                _item = _this2.items[i];
                _this2.showReward(_item, true, data.pickBoosterGame.totalItems[resultIndex]);
                resultIndex++;
              }
              _context2.next = 21;
              return cc.vv.gameData.awaitTime(2);

             case 21:
              _context2.next = 23;
              return _this2.popResult();

             case 23:
              _this2._successCallback();
              _context2.next = 29;
              break;

             case 26:
              _this2._canSelect = true;
              _item2 = _this2.items[data.choiceId - 1];
              _this2.showReward(_item2, false, data.choiceItem);

             case 29:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getResult: function getResult() {
        return this._result;
      },
      showReward: function showReward(item, isGray, reward) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cfg, animationIndex, spine, _iterator2, _step2, child, coin, _coin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cfg = cc.vv.gameData.getGameCfg();
              animationIndex = 1;
              _context3.t0 = reward.type;
              _context3.next = _context3.t0 === cfg.MapBoostType.ExtraFreeCnt ? 5 : _context3.t0 === cfg.MapBoostType.WildPaysDouble ? 7 : _context3.t0 === cfg.MapBoostType.Coin ? 9 : 11;
              break;

             case 5:
              animationIndex = 2;
              return _context3.abrupt("break", 13);

             case 7:
              animationIndex = 6;
              return _context3.abrupt("break", 13);

             case 9:
              animationIndex = 7;
              return _context3.abrupt("break", 13);

             case 11:
              animationIndex = reward.type;
              return _context3.abrupt("break", 13);

             case 13:
              spine = item.getChildByName("spine").getComponent(sp.Skeleton);
              if (isGray) {
                spine.setAnimation(0, "animation" + animationIndex + "_2", false);
                _iterator2 = _createForOfIteratorHelper(item.children);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    child = _step2.value;
                    child.color = cc.Color.GRAY;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                if (reward.type === cfg.MapBoostType.Coin) {
                  coin = cc.find("coin", item);
                  coin.active = true;
                  coin.scale = 1;
                  coin.getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0);
                }
              } else {
                spine.setAnimation(0, "animation" + animationIndex, false);
                spine.addAnimation(0, "animation" + animationIndex + "_1", true);
                if (reward.type === cfg.MapBoostType.Coin) {
                  _coin = cc.find("coin", item);
                  _coin.getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0);
                  _coin.active = true;
                  _coin.scale = 0;
                  cc.tween(_coin).delay(.3).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).call(function() {
                    cc.find("coin_light", item).active = true;
                  }).start();
                }
              }

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      popResult: function popResult() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  var cfg, boosterNum, _iterator3, _step3, item, node, spine, coin, btn_collect, booster_1, atlas, booster_2, _atlas, func;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      cfg = cc.vv.gameData.getGameCfg();
                      if (!_this3._result) {
                        _context4.next = 27;
                        break;
                      }
                      boosterNum = 0;
                      _iterator3 = _createForOfIteratorHelper(_this3._result.pickBoosterGame.choiceItems);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          item = _step3.value;
                          item.type !== cfg.MapBoostType.Coin && boosterNum++;
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_mappick_collect", true);
                      _this3.black_bg.active = true;
                      node = cc.find("booster_result_" + boosterNum, _this3.node);
                      node.active = true;
                      spine = node.getComponent(sp.Skeleton);
                      if (0 === boosterNum) {
                        spine.setAnimation(0, "animation", false);
                        spine.addAnimation(0, "animation2", true);
                      } else {
                        spine.setAnimation(0, "animation" + (boosterNum + 1) + "_1", false);
                        spine.addAnimation(0, "animation" + (boosterNum + 1) + "_2", true);
                      }
                      coin = cc.find("coin", node);
                      coin.scale = 0;
                      Global.doRoallNumEff(coin, 0, _this3._result.pickBoosterGame.winCoin, 1.5, null, null, 0, true);
                      cc.tween(coin).delay(.2).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_collect = cc.find("btn_collect", node);
                      btn_collect.scale = 0;
                      cc.tween(btn_collect).delay(.4).to(.5, {
                        scale: .5
                      }, {
                        easing: "backOut"
                      }).start();
                      booster_1 = cc.find("booster_1", node);
                      if (booster_1) {
                        booster_1.scale = 0;
                        atlas = cc.vv.gameData.GetAtlasByName("popup");
                        booster_1.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme205_pop_booster" + _this3._unlockBooster[0]);
                        cc.tween(booster_1).delay(.3).to(.5, {
                          scale: 1 === boosterNum ? 1 : .8
                        }, {
                          easing: "backOut"
                        }).start();
                      }
                      booster_2 = cc.find("booster_2", node);
                      if (booster_2) {
                        _atlas = cc.vv.gameData.GetAtlasByName("popup");
                        booster_2.getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame("theme205_pop_booster" + _this3._unlockBooster[1]);
                        booster_2.scale = 0;
                        cc.tween(booster_2).delay(.3).to(.5, {
                          scale: 1 === boosterNum ? 1 : .8
                        }, {
                          easing: "backOut"
                        }).start();
                      }
                      _context4.next = 24;
                      return cc.vv.gameData.awaitTime(.9);

                     case 24:
                      func = function func() {
                        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
                        cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(_this3._result.pickBoosterGame.winCoin);
                        btn_collect.off("click");
                        cc.tween(coin).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        booster_1 && cc.tween(booster_1).to(.5, {
                          scale: 0
                        }, {
                          easing: "backOut"
                        }).start();
                        booster_2 && cc.tween(booster_2).to(.5, {
                          scale: 0
                        }, {
                          easing: "backOut"
                        }).start();
                        0 === boosterNum ? spine.setAnimation(0, "animation3", false) : spine.setAnimation(0, "animation" + (boosterNum + 1) + "_3", false);
                        spine.setCompleteListener(function() {
                          spine.setCompleteListener(null);
                          _this3.black_bg.active = false;
                          success();
                        });
                      };
                      cc.vv.gameData.checkAutoPlay(btn_collect, func);
                      btn_collect.on("click", function() {
                        btn_collect.stopAllActions();
                        func();
                      });

                     case 27:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  MinamotoNoYoshitsune_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "159b1YVzChAj5ViRm7Pp+jG", "MinamotoNoYoshitsune_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (node) {
          var lockNode = cc.find("lock", node);
          var lockTips = cc.find("image", lockNode);
          var unlockNode = cc.find("unlock", node);
          var unlockTips = cc.find("image", unlockNode);
          var spine = cc.find("jpsuo", node).getComponent(sp.Skeleton);
          if (bLock) if (bInit) {
            lockNode.active = true;
            spine.setAnimation(0, "animation" + (4 - poolType) + "_2", true);
            unlockNode.active = false;
            lockTips.scale = 0;
          } else {
            cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "jp_lock", true);
            spine.clearTracks();
            spine.setToSetupPose();
            spine.setAnimation(0, "animation" + (4 - poolType), false);
            spine.addAnimation(0, "animation" + (4 - poolType) + "_2", true);
            lockNode.active = true;
            unlockNode.active = false;
            lockTips.scale = 0;
            cc.tween(lockTips).to(.1, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.1, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          } else if (bInit) {
            lockNode.active = false;
            unlockNode.active = true;
            unlockTips.scale = 0;
            spine.setAnimation(0, "animation", true);
          } else {
            cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "jp_unlock", true);
            spine.clearTracks();
            spine.setToSetupPose();
            spine.setAnimation(0, "animation" + (4 - poolType) + "_1", false);
            spine.addAnimation(0, "animation", true);
            lockNode.active = false;
            unlockNode.active = true;
            unlockTips.scale = 0;
            cc.tween(unlockTips).to(.1, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.1, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  MinamotoNoYoshitsune_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c005zopPNAtIFC8/dPLchd", "MinamotoNoYoshitsune_Reel");
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
      StartMove: function StartMove() {
        this._super();
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && (bg.color = cc.Color.GRAY);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
      },
      clearLastSymbol: function clearLastSymbol() {
        var symbol = this._symbols[this._symbols.length - 1];
        if (symbol) {
          symbol.setAnimationToTop(false);
          symbol.ShowKuang(false);
        }
      },
      playReelStop: function playReelStop() {
        var haveSpecialSymbol = false;
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.bonusId || item.GetShowId() === this._cfg.extraSpinId || item.GetShowId() === this._cfg.scatterId) {
            haveSpecialSymbol = true;
            item.GetShowId() === this._cfg.bonusId ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus1_land", true) : item.GetShowId() === this._cfg.scatterId ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_land", true) : cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus2_land", true);
            item.playStopAnimation();
          }
        }
        haveSpecialSymbol || cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_stop", true);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && (bg.color = cc.Color.WHITE);
        var _iterator = _createForOfIteratorHelper(this._symbols), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var symbol = _step.value;
            symbol.resetColor();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      playAntiAnimation: function playAntiAnimation() {
        var isPlayAniti = false;
        var gameInfo = cc.vv.gameData.getGameInfo();
        if (4 === this._reelIdx) if (gameInfo.gemsPushBonus) {
          this.ShowAntiEffect(true, "node_anti");
          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_notify", true);
          this._speed = 2e3;
          isPlayAniti = true;
        } else if (Math.random() <= .05) {
          if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime()) return isPlayAniti;
          this.ShowAntiEffect(true, "node_anti");
          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_notify", true);
          this._speed = 2e3;
          isPlayAniti = true;
        }
        return isPlayAniti;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false === bShow) {
          var node = cc.find("node_anti", this.node);
          if (node && node.active) {
            node.active = false;
            this._stopRightNow && cc.vv.AudioManager.stopEffectByName("reel_notify");
          }
        } else {
          var _node = cc.find(name, this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (0 === this._reelIdx) {
          var left_bg = cc.find("reels_frame/left_bg", this.node.parent.parent);
          left_bg && objs.push(left_bg);
          var right_bg = cc.find("reels_frame/right_bg", this.node.parent.parent);
          right_bg && objs.push(right_bg);
          for (var i = 1; i < 5; i++) {
            var line = cc.find("reels_frame/line_" + i, this.node.parent.parent);
            line && objs.push(line);
          }
          var black_bg = cc.find("black_bg", this.node.parent.parent);
          black_bg && objs.push(black_bg);
        }
        return objs;
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        if (0 === this._reelIdx) {
          var frameTop = cc.find("reels_frame/top_bg", this.node.parent.parent);
          frameTop && objs.push(frameTop);
          var freegame_tips = cc.find("freegame_tips", this.node.parent.parent);
          freegame_tips && objs.push(freegame_tips);
        }
        return objs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  MinamotoNoYoshitsune_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ad75x4CqZASo7cIoBd3j/s", "MinamotoNoYoshitsune_Slots");
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
        _haveOpenMap: false,
        _formatCards: null,
        _baseCoin: 0,
        _freeCnt: 0,
        _curUnlockBooster: []
      },
      Init: function Init() {
        var _this = this;
        this._super();
        var jdtsaoguang = cc.find("collect_node/jdtsaoguang", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        jdtsaoguang.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("collect_node/jdt", this.node).getComponent(sp.Skeleton);
        deskInfo.needBet <= deskInfo.currmult ? script.setAnimation(0, "animation2_1", true) : script.setAnimation(0, "animation1_1", true);
        cc.find("collect_node/scale_node", this.node).active = deskInfo.needBet <= deskInfo.currmult;
        this.updateCollectProgress(deskInfo.mapInfo, false);
        var btn_map = cc.find("collect_node/btn_map", this.node);
        btn_map.on("click", function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          if (_this._haveOpenMap) return;
          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
          _this._haveOpenMap = true;
          _this._bottomScript.ShowBtnsByState("moveing_1");
          var map_script = cc.find("mapControl", _this.node.parent).getComponent("MinamotoNoYoshitsune_Map");
          map_script.initMap(_this._gameInfo ? _this._gameInfo.mapInfo : deskInfo.mapInfo);
          map_script.openMap(true);
        });
        var tengman = cc.find("tengman", this.node.parent).getComponent(sp.Skeleton);
        tengman.setStartListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          var sound = "";
          switch (name) {
           case "animation4":
            sound = "logo_unlock";
            break;

           case "animation5":
            sound = "logo_active";
            break;

           case "animation1":
            sound = "logo_lock";
          }
          "" !== sound && cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", sound, true);
        });
      },
      getBaseCoin: function getBaseCoin() {
        return this._baseCoin;
      },
      StartMove: function StartMove() {
        if (this._freeCnt > 0) {
          this._freeCnt--;
          this._freeCnt < 0 && (this._freeCnt = 0);
          this.updateFreeTimes(this._freeCnt);
        }
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, tengman_spine, rowNum, colNum, _iterator, _step, reel, map_bonus_node, _tengman_spine, collect_node, freegame_tips, winCoin, bonus_bj_spine, bonus_wenzi_spine, tengman, pickBonusScript, jiman, map, endPointCfg, script, result, _winCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super();
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 60;
                break;
              }
              if (!(2 === deskInfo.mapInfo.state)) {
                _context.next = 29;
                break;
              }
              _this2.ShowGameview(true);
              cc.find("spr_bg_bonus", _this2.node.parent).active = true;
              cc.find("LMSlots_PrizePool_1", _this2.node.parent).active = false;
              _this2.setTengmanVisible(true);
              tengman_spine = cc.find("tengman", _this2.node.parent).getComponent(sp.Skeleton);
              tengman_spine.setAnimation(0, "animation6_1", true);
              cc.find("coin", tengman_spine.node).active = true;
              cc.find("coin", tengman_spine.node).getComponent(cc.Label).string = Global.formatNumShort(deskInfo.bonusTotalCoin, 0);
              rowNum = _this2._cfg.row;
              colNum = _this2._cfg.col;
              if (-1 !== deskInfo.mapInfo.nextUnlockBoosters.indexOf(_this2._cfg.MapBoostType.AddRow)) {
                _iterator = _createForOfIteratorHelper(_this2._reels);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    reel = _step.value;
                    reel.AddCount(1, .01);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                rowNum = _this2._cfg.row + 1;
              }
              if (-1 !== deskInfo.mapInfo.nextUnlockBoosters.indexOf(_this2._cfg.MapBoostType.AddReel)) {
                cc.find("reels_bg", _this2.node).scale = .82;
                cc.find("reels", _this2.node).scale = .82;
                cc.find("top_ani", _this2.node).scale = .82;
                cc.find("black_bg", _this2.node).scale = .82;
                cc.find("reels_frame", _this2.node).active = false;
                cc.find("reels_frame_" + rowNum + "_6", _this2.node).active = true;
                colNum = _this2._cfg.col + 1;
              }
              _this2._curUnlockBooster = deskInfo.mapInfo.nextUnlockBoosters;
              _this2._freeCnt = rest;
              _this2.updateFreeTimes(rest);
              map_bonus_node = cc.find("map_" + rowNum + "_" + colNum, _this2.node);
              map_bonus_node.active = true;
              cc.find("bonus_wenzi/coin", map_bonus_node).getComponent(cc.Label).string = Global.formatNumShort(deskInfo.bonusBaseCoin, 0);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free2_bgm");
              _context.next = 27;
              return cc.vv.gameData.awaitTime(1);

             case 27:
              _context.next = 58;
              break;

             case 29:
              _this2.setTengmanVisible(true);
              _tengman_spine = cc.find("tengman", _this2.node.parent).getComponent(sp.Skeleton);
              _tengman_spine.setAnimation(0, "animation6_1", true);
              collect_node = cc.find("collect_node", _this2.node);
              collect_node.y -= 100;
              collect_node.active = false;
              freegame_tips = cc.find("freegame_tips", _this2.node);
              freegame_tips.active = true;
              _this2._freeCnt = rest;
              _this2.updateFreeTimes(rest);
              freegame_tips.y += 100;
              winCoin = cc.find("coin", _tengman_spine.node);
              winCoin.active = true;
              winCoin.opacity = 255;
              winCoin.getComponent(cc.Label).string = Global.formatNumShort(deskInfo.bonusTotalCoin, 0);
              bonus_bj_spine = cc.find("bonus_bj", _this2.node).getComponent(sp.Skeleton);
              bonus_bj_spine.node.active = true;
              bonus_bj_spine.setAnimation(0, "animation1_2", true);
              bonus_wenzi_spine = cc.find("bonus_wenzi", _this2.node).getComponent(sp.Skeleton);
              bonus_wenzi_spine.node.active = true;
              bonus_wenzi_spine.node.y = 0;
              cc.find("icon", bonus_wenzi_spine.node).active = false;
              cc.find("coin", bonus_wenzi_spine.node).active = true;
              cc.find("coin", bonus_wenzi_spine.node).getComponent(cc.Label).string = Global.formatNumShort(deskInfo.bonusBaseCoin, 0);
              _this2.ShowGameview(true);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free1_bgm");
              _context.next = 58;
              return cc.vv.gameData.awaitTime(1);

             case 58:
              _context.next = 104;
              break;

             case 60:
              _this2.ShowGameview(false);
              if (!deskInfo.pickBonus) {
                _context.next = 72;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _this2.setTengmanVisible(true);
              tengman = cc.find("tengman", _this2.node.parent).getComponent(sp.Skeleton);
              tengman.setAnimation(0, "animation6", true);
              cc.find("LMSlots_PrizePool_1", _this2.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: deskInfo.pickBonus.jackpotValues[0]
              }, {
                prizeType: 1,
                pauseNum: deskInfo.pickBonus.jackpotValues[1]
              }, {
                prizeType: 2,
                pauseNum: deskInfo.pickBonus.jackpotValues[2]
              }, {
                prizeType: 3,
                pauseNum: deskInfo.pickBonus.jackpotValues[3]
              } ]);
              pickBonusScript = cc.find("pick_bonus", _this2.node).getComponent("MinamotoNoYoshitsune_PickBonus");
              _context.next = 70;
              return pickBonusScript.reconnect();

             case 70:
              cc.find("LMSlots_PrizePool_1", _this2.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
              _this2.ShowBottomWin(pickBonusScript.getWinCoin(), pickBonusScript.getWinCoin(), true, function() {
                _this2.CanDoNextRound();
              });

             case 72:
              if (!(1 === deskInfo.mapInfo.state)) {
                _context.next = 104;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 76;
              return cc.vv.gameData.awaitTime(.5);

             case 76:
              jiman = cc.find("collect_node/jiman", _this2.node).getComponent(sp.Skeleton);
              jiman.node.active = true;
              jiman.setToSetupPose();
              jiman.setAnimation(0, "animation", false);
              jiman.setCompleteListener(function() {
                jiman.node.active = false;
              });
              _context.next = 83;
              return cc.vv.gameData.awaitTime(1);

             case 83:
              map = cc.find("mapControl", _this2.node.parent).getComponent("MinamotoNoYoshitsune_Map");
              _context.next = 86;
              return map.showMap(deskInfo.mapInfo);

             case 86:
              endPointCfg = _this2._cfg.MapConfig[deskInfo.mapInfo.currId - 1];
              _this2.cutScenePick();
              _context.next = 90;
              return cc.vv.gameData.awaitTime(1.8);

             case 90:
              script = cc.find("pick_game", _this2.node.parent).getComponent("MinamotoNoYoshitsune_PickGame");
              _context.next = 93;
              return script.enterPickGame(endPointCfg.index, endPointCfg.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

             case 93:
              _this2.cutScenePick();
              _context.next = 96;
              return cc.vv.gameData.awaitTime(1.8);

             case 96:
              cc.find("pick_game", _this2.node.parent).active = false;
              result = script.getResult();
              _this2.clearCollectProgress();
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();
              _winCoin = result.pickBoosterGame.winCoin;
              _context.next = 104;
              return _this2.ShowBottomWin(_winCoin, _winCoin, true, function() {
                _this2.CanDoNextRound();
              });

             case 104:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setTengmanVisible: function setTengmanVisible(isOrNot) {
        cc.find("tengman", this.node.parent).active = isOrNot;
        cc.find("role", this.node.parent).active = !isOrNot;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cards, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._gameInfo = msg;
              _this3._gameInfo.bonusBaseCoin ? _this3._baseCoin = _this3._gameInfo.bonusBaseCoin : _this3._baseCoin = 0;
              cards = msg.resultCards;
              _this3.formatSlotsResult(cards);
              _this3.SetSlotsResult(_this3._formatCards);
              if (_this3._gameInfo.pickBonus) {
                _this3.SetStopTime(4);
                cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "active_man", true);
                spine = cc.find("transition", _this3.node.parent).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setToSetupPose();
                spine.setAnimation(0, "skill", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                });
              }

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      formatSlotsResult: function formatSlotsResult(originalCards) {
        var cards = originalCards.concat();
        for (var i = 0; i < this._cfg.col; i++) {
          var array = [];
          var wildNum = 0;
          for (var j = 0; j < cards.length / this._cfg.row; j++) {
            cards[j * this._cfg.col + i] === this._cfg.wildId && wildNum++;
            array.push(cards[j * this._cfg.col + i]);
          }
          var offset = 0;
          var firstWildRow = -1;
          for (var _j = 0; _j < array.length; _j++) if (array[_j] === this._cfg.wildId) {
            -1 === firstWildRow && (firstWildRow = _j);
            array[_j] = (0 === firstWildRow ? 105 - wildNum : 101) + offset;
            cards[_j * this._cfg.col + i] = array[_j];
            offset++;
          }
        }
        this._formatCards = cards;
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
            if (cards[i] === this._cfg.bonusId || cards[i] === this._cfg.extraSpinId) {
              var index = this._gameInfo.bonusIdxs.indexOf(i + 1);
              -1 !== index && index < this._gameInfo.bonusItems.length && (res.data = this._gameInfo.bonusItems[index]);
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          } else {
            var _res = {};
            _res.sid = 5;
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(_res);
          }
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i2 = 0; _i2 < this._gameInfo.scatterZJLuXian.indexs.length; _i2++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i2];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            if (101 !== symbol.GetShowId() && 102 !== symbol.GetShowId() && 103 !== symbol.GetShowId() && 104 !== symbol.GetShowId() && 105 !== symbol.GetShowId()) symbol.playWinAnimation(); else if (101 === symbol.GetShowId() || 102 === symbol.GetShowId() || 103 === symbol.GetShowId()) if (Math.floor((Number(key) - 1) / this._cfg.col) === this._cfg.row - 1) symbol.playWinAnimation(); else {
              var col = symbol.GetSymbolReelIdx();
              var reel = this._reels[col];
              for (var _i3 = 0; _i3 < this._cfg.row; _i3++) {
                var newSymbol = reel.GetSymbolByRow(_i3);
                if (104 === newSymbol.GetShowId() || 105 === newSymbol.GetShowId()) {
                  newSymbol.playWildAnimation();
                  break;
                }
                if (101 === newSymbol.GetShowId() || 102 === newSymbol.GetShowId() || 103 === newSymbol.GetShowId()) {
                  newSymbol.playWinAnimation();
                  break;
                }
              }
            } else symbol.playWildAnimation();
            symbol.ShowKuang();
          }
        }
      },
      cutScenePick: function cutScenePick() {
        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition2", true);
        var black_bg = cc.find("black_bg", this.node.parent);
        black_bg.active = true;
        var transition = cc.find("transition", this.node.parent);
        transition.active = true;
        var spine = transition.getComponent(sp.Skeleton);
        spine.setAnimation(0, "skill", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          transition.active = false;
          black_bg.active = false;
        });
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this4.collectSymbol();

             case 2:
              if (!_this4._gameInfo.gemsPushBonus) {
                _context4.next = 5;
                break;
              }
              _context4.next = 5;
              return _this4.triggerGemsPushBonus();

             case 5:
              if (!_this4._gameInfo.pickBonus) {
                _context4.next = 8;
                break;
              }
              _context4.next = 8;
              return _this4.triggerPickBonus();

             case 8:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && _this4._gameInfo.bonusIdxs.length > 0)) {
                _context4.next = 11;
                break;
              }
              _context4.next = 11;
              return _this4.triggerBonusCollectInFreeGame();

             case 11:
              if (!(_this4.CheckEnterFreeGame() && 0 === _this4._gameInfo.mapInfo.state)) {
                _context4.next = 14;
                break;
              }
              _context4.next = 14;
              return _this4.triggerGetFreeTime();

             case 14:
              _this4.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this4.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var tengman_spine, jiman, script, endPointCfg, _script, black_bg, result, _winCoin2, transition, rowNum, colNum, _iterator2, _step2, reel, map_bonus_node, _tengman_spine2;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    if (_this4._gameInfo.gemsPushBonus) {
                      _this4.setTengmanVisible(false);
                      tengman_spine = cc.find("tengman", _this4.node.parent).getComponent(sp.Skeleton);
                      cc.find("coin", tengman_spine.node).active = false;
                      tengman_spine.setAnimation(0, "animation1", false);
                      tengman_spine.addAnimation(0, "animation2", true);
                    }
                    if (!(0 !== _this4._gameInfo.mapInfo.state && _this4._gameInfo.mapInfo.progressData.currCnt > 0)) {
                      _context3.next = 71;
                      break;
                    }
                    _this4._bottomScript.ShowBtnsByState("moveing_1");
                    _context3.next = 5;
                    return cc.vv.gameData.awaitTime(.5);

                   case 5:
                    cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_full", true);
                    jiman = cc.find("collect_node/jiman", _this4.node).getComponent(sp.Skeleton);
                    jiman.node.active = true;
                    jiman.setToSetupPose();
                    jiman.setAnimation(0, "animation", false);
                    jiman.setCompleteListener(function() {
                      jiman.node.active = false;
                    });
                    _context3.next = 13;
                    return cc.vv.gameData.awaitTime(1);

                   case 13:
                    script = cc.find("mapControl", _this4.node.parent).getComponent("MinamotoNoYoshitsune_Map");
                    _context3.next = 16;
                    return script.showMap(_this4._gameInfo.mapInfo);

                   case 16:
                    endPointCfg = _this4._cfg.MapConfig[_this4._gameInfo.mapInfo.currId - 1];
                    if (!(endPointCfg.type === _this4._cfg.MapType.PickBooster)) {
                      _context3.next = 37;
                      break;
                    }
                    _this4.cutScenePick();
                    _context3.next = 21;
                    return cc.vv.gameData.awaitTime(1.5);

                   case 21:
                    _script = cc.find("pick_game", _this4.node.parent).getComponent("MinamotoNoYoshitsune_PickGame");
                    _context3.next = 24;
                    return _script.enterPickGame(endPointCfg.index, endPointCfg.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

                   case 24:
                    _this4.cutScenePick();
                    _context3.next = 27;
                    return cc.vv.gameData.awaitTime(1.3);

                   case 27:
                    black_bg = cc.find("black_bg", _this4.node.parent);
                    black_bg.active = false;
                    cc.find("pick_game", _this4.node.parent).active = false;
                    result = _script.getResult();
                    _this4.clearCollectProgress();
                    _winCoin2 = result.pickBoosterGame.winCoin;
                    _context3.next = 35;
                    return _this4.ShowBottomWin(_winCoin2, _winCoin2, true, function() {
                      _this4.CanDoNextRound();
                    });

                   case 35:
                    _context3.next = 69;
                    break;

                   case 37:
                    if (!(endPointCfg.type === _this4._cfg.MapType.SuperFreeGame)) {
                      _context3.next = 69;
                      break;
                    }
                    _context3.next = 40;
                    return _this4.popMapFreeDialog(_this4._gameInfo.mapInfo);

                   case 40:
                    _this4._curUnlockBooster = _this4._gameInfo.mapInfo.nextUnlockBoosters;
                    cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition3", true);
                    transition = cc.find("transition", _this4.node.parent);
                    transition.active = true;
                    transition.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
                    transition.getComponent(sp.Skeleton).setCompleteListener(function() {
                      transition.getComponent(sp.Skeleton).setCompleteListener(null);
                      transition.active = false;
                    });
                    _context3.next = 48;
                    return cc.vv.gameData.awaitTime(2);

                   case 48:
                    _this4.ShowGameview(true);
                    cc.find("spr_bg_bonus", _this4.node.parent).active = true;
                    cc.find("LMSlots_PrizePool_1", _this4.node.parent).active = false;
                    _this4.clearCollectProgress();
                    rowNum = _this4._cfg.row;
                    colNum = _this4._cfg.col;
                    if (-1 !== _this4._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this4._cfg.MapBoostType.AddRow)) {
                      _iterator2 = _createForOfIteratorHelper(_this4._reels);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          reel = _step2.value;
                          reel.AddCount(1, .01);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      rowNum = _this4._cfg.row + 1;
                    }
                    if (-1 !== _this4._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this4._cfg.MapBoostType.AddReel)) {
                      cc.find("reels_bg", _this4.node).scale = .82;
                      cc.find("reels", _this4.node).scale = .82;
                      cc.find("top_ani", _this4.node).scale = .82;
                      cc.find("black_bg", _this4.node).scale = .82;
                      cc.find("reels_frame", _this4.node).active = false;
                      cc.find("reels_frame_" + rowNum + "_6", _this4.node).active = true;
                      colNum = _this4._cfg.col + 1;
                    } else cc.find("freegame_tips", _this4.node).active = true;
                    _this4._freeCnt = cc.vv.gameData.GetTotalFree();
                    _this4.updateFreeTimes(cc.vv.gameData.GetTotalFree());
                    map_bonus_node = cc.find("map_" + rowNum + "_" + colNum, _this4.node);
                    map_bonus_node.active = true;
                    _this4.setTengmanVisible(true);
                    _tengman_spine2 = cc.find("tengman", _this4.node.parent).getComponent(sp.Skeleton);
                    _tengman_spine2.setAnimation(0, "animation6", true);
                    cc.find("bonus_wenzi/coin", map_bonus_node).getComponent(cc.Label).string = Global.formatNumShort(_this4._gameInfo.mapInfo.startPrice, 0);
                    _context3.next = 66;
                    return cc.vv.gameData.awaitTime(2);

                   case 66:
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playBgm("free2_bgm");
                    _this4.CanDoNextRound();

                   case 69:
                    _context3.next = 72;
                    break;

                   case 71:
                    _this4.CheckEnterFreeGame() ? _this4.triggerFreeGame() : _this4.CheckExitFreeGame() ? _this4.triggerExitFreeGame() : _this4.CanDoNextRound();

                   case 72:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      triggerBonusCollectInFreeGame: function triggerBonusCollectInFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var kuang_gl_01_spine, colNum, rowNum, i, index, symbol, tengman_spine, shoujifei_spine, allWinCoin, _i4, _index, _symbol, startPos, _i5, _index2, _symbol2, particle, _startPos, freegame_tips, mapInfo, endPos;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              kuang_gl_01_spine = cc.find("kuang_gl_01", _this5.node).getComponent(sp.Skeleton);
              kuang_gl_01_spine.node.active = true;
              colNum = _this5._cfg.col;
              rowNum = _this5._cfg.row;
              if (2 === _this5._gameInfo.mapInfo.state) {
                colNum = -1 === _this5._curUnlockBooster.indexOf(_this5._cfg.MapBoostType.AddReel) ? 5 : 6;
                rowNum = -1 === _this5._curUnlockBooster.indexOf(_this5._cfg.MapBoostType.AddRow) ? 4 : 5;
                kuang_gl_01_spine.setAnimation(0, "animation" + rowNum + "_" + colNum, true);
              } else kuang_gl_01_spine.setAnimation(0, "animation4_5", true);
              cc.find("black_bg", _this5.node).active = true;
              for (i = 0; i < _this5._gameInfo.bonusIdxs.length; i++) {
                index = _this5._gameInfo.bonusIdxs[i];
                symbol = _this5.GetSymbolByIdx(index);
                symbol && symbol.playWinAnimation();
              }
              _context5.next = 9;
              return cc.vv.gameData.awaitTime(.5);

             case 9:
              if (!(2 === _this5._gameInfo.mapInfo.state)) {
                _context5.next = 17;
                break;
              }
              if (!(_this5._gameInfo.bonusTotalCoin - _this5._gameInfo.bonusCurCoin === 0 && 0 !== _this5._gameInfo.bonusTotalCoin)) {
                _context5.next = 17;
                break;
              }
              _this5.setTengmanVisible(true);
              tengman_spine = cc.find("tengman", _this5.node.parent).getComponent(sp.Skeleton);
              tengman_spine.setAnimation(0, "animation7", false);
              tengman_spine.addAnimation(0, "animation6_1", true);
              _context5.next = 17;
              return cc.vv.gameData.awaitTime(1);

             case 17:
              shoujifei_spine = cc.find("shoujifei", _this5.node).getComponent(sp.Skeleton);
              allWinCoin = _this5._gameInfo.bonusTotalCoin - _this5._gameInfo.bonusCurCoin;
              _i4 = 0;

             case 20:
              if (!(_i4 < _this5._gameInfo.bonusIdxs.length)) {
                _context5.next = 36;
                break;
              }
              _index = _this5._gameInfo.bonusIdxs[_i4];
              if (!_this5._gameInfo.bonusItems[_i4].coin) {
                _context5.next = 33;
                break;
              }
              _symbol = _this5.GetSymbolByIdx(_index);
              if (!_symbol) {
                _context5.next = 33;
                break;
              }
              shoujifei_spine.node.active = true;
              startPos = _symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this5.node.convertToNodeSpaceAR(startPos);
              shoujifei_spine.node.position = startPos;
              shoujifei_spine.setAnimation(0, _this5._cfg.shoujifeiCfg[rowNum][colNum][_index], false);
              allWinCoin += _this5._gameInfo.bonusItems[_i4].coin;
              _context5.next = 33;
              return new Promise(function(success) {
                shoujifei_spine.setCompleteListener(function() {
                  shoujifei_spine.setCompleteListener(null);
                  var winCoin = cc.find("tengman/coin", _this5.node.parent);
                  winCoin.active = true;
                  winCoin.opacity = 255;
                  winCoin.getComponent(cc.Label).string = Global.formatNumShort(allWinCoin, 0);
                  cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", true);
                  var bonusjieshou_spine = cc.find("tengman/bonusjieshou", _this5.node.parent).getComponent(sp.Skeleton);
                  bonusjieshou_spine.node.active = true;
                  bonusjieshou_spine.setAnimation(0, "animation", false);
                  bonusjieshou_spine.setCompleteListener(function() {
                    bonusjieshou_spine.setCompleteListener(null);
                    success();
                    bonusjieshou_spine.node.active = false;
                  });
                });
              });

             case 33:
              _i4++;
              _context5.next = 20;
              break;

             case 36:
              _i5 = 0;

             case 37:
              if (!(_i5 < _this5._gameInfo.bonusIdxs.length)) {
                _context5.next = 61;
                break;
              }
              _index2 = _this5._gameInfo.bonusIdxs[_i5];
              if (!_this5._gameInfo.bonusItems[_i5].freeCnt) {
                _context5.next = 58;
                break;
              }
              _symbol2 = _this5.GetSymbolByIdx(_index2);
              if (!_symbol2) {
                _context5.next = 58;
                break;
              }
              _this5._freeCnt += _this5._gameInfo.bonusItems[_i5].freeCnt;
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "fg_collect", true);
              particle = cc.instantiate(cc.find("particle_fly", _this5.node.parent));
              particle.active = true;
              particle.parent = _this5.node.parent;
              _startPos = _symbol2.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _startPos = _this5.node.parent.convertToNodeSpaceAR(_startPos);
              particle.position = _startPos;
              freegame_tips = cc.find("freegame_tips", _this5.node);
              mapInfo = _this5._gameInfo.mapInfo;
              -1 !== _this5._curUnlockBooster.indexOf(_this5._cfg.MapBoostType.AddReel) && (freegame_tips = -1 !== _this5._curUnlockBooster.indexOf(_this5._cfg.MapBoostType.AddRow) ? cc.find("reels_frame_5_6/freegame_tips", _this5.node) : cc.find("reels_frame_4_6/freegame_tips", _this5.node));
              endPos = cc.find("remain_times", freegame_tips).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
              cc.tween(particle).to(.5, {
                position: endPos
              }).call(function() {
                _this5.updateFreeTimes(_this5._freeCnt);
              }).removeSelf().start();
              _context5.next = 58;
              return cc.vv.gameData.awaitTime(.5);

             case 58:
              _i5++;
              _context5.next = 37;
              break;

             case 61:
              kuang_gl_01_spine.node.active = false;
              cc.find("black_bg", _this5.node).active = false;

             case 63:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      triggerGemsPushBonus: function triggerGemsPushBonus() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var kuang_gl_01_spine, colNum, rowNum, i, card, symbol, _i6, index, _symbol3, tengman_spine, shoujifei_spine, allWinCoin, _i7, _index3, _symbol4, startPos;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              kuang_gl_01_spine = cc.find("kuang_gl_01", _this6.node).getComponent(sp.Skeleton);
              kuang_gl_01_spine.node.active = true;
              colNum = _this6._cfg.col;
              rowNum = _this6._cfg.row;
              kuang_gl_01_spine.setAnimation(0, "animation4_5", true);
              cc.find("black_bg", _this6.node).active = true;
              i = 0;

             case 7:
              if (!(i < _this6._gameInfo.resultCards.length)) {
                _context6.next = 17;
                break;
              }
              card = _this6._gameInfo.resultCards[i];
              if (!(card === _this6._cfg.scatterId)) {
                _context6.next = 14;
                break;
              }
              symbol = _this6.GetSymbolByIdx(i + 1);
              if (!symbol) {
                _context6.next = 14;
                break;
              }
              symbol.playTriggerAnimation();
              return _context6.abrupt("break", 17);

             case 14:
              i++;
              _context6.next = 7;
              break;

             case 17:
              for (_i6 = 0; _i6 < _this6._gameInfo.bonusIdxs.length; _i6++) {
                index = _this6._gameInfo.bonusIdxs[_i6];
                _symbol3 = _this6.GetSymbolByIdx(index);
                _symbol3 && _symbol3.playTriggerAnimation();
              }
              _context6.next = 20;
              return cc.vv.gameData.awaitTime(.5);

             case 20:
              cc.find("LMSlots_PrizePool_1", _this6.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: _this6._gameInfo.jackpotValues[0]
              }, {
                prizeType: 1,
                pauseNum: _this6._gameInfo.jackpotValues[1]
              }, {
                prizeType: 2,
                pauseNum: _this6._gameInfo.jackpotValues[2]
              }, {
                prizeType: 3,
                pauseNum: _this6._gameInfo.jackpotValues[3]
              } ]);
              _this6.setTengmanVisible(true);
              tengman_spine = cc.find("tengman", _this6.node.parent).getComponent(sp.Skeleton);
              tengman_spine.setAnimation(0, "animation4", false);
              tengman_spine.addAnimation(0, "animation5", false);
              tengman_spine.addAnimation(0, "animation6", false);
              tengman_spine.addAnimation(0, "animation7", false);
              tengman_spine.addAnimation(0, "animation6_1", true);
              _context6.next = 30;
              return cc.vv.gameData.awaitTime(7);

             case 30:
              shoujifei_spine = cc.find("shoujifei", _this6.node).getComponent(sp.Skeleton);
              allWinCoin = 0;
              _i7 = 0;

             case 33:
              if (!(_i7 < _this6._gameInfo.bonusIdxs.length)) {
                _context6.next = 48;
                break;
              }
              _index3 = _this6._gameInfo.bonusIdxs[_i7];
              _symbol4 = _this6.GetSymbolByIdx(_index3);
              if (!_symbol4) {
                _context6.next = 45;
                break;
              }
              shoujifei_spine.node.active = true;
              startPos = _symbol4.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this6.node.convertToNodeSpaceAR(startPos);
              shoujifei_spine.node.position = startPos;
              shoujifei_spine.setAnimation(0, _this6._cfg.shoujifeiCfg[rowNum][colNum][_index3], false);
              allWinCoin += _this6._gameInfo.bonusItems[_i7].jackpot ? _this6._gameInfo.bonusItems[_i7].jackpot.value : _this6._gameInfo.bonusItems[_i7].coin;
              _context6.next = 45;
              return new Promise(function(success) {
                shoujifei_spine.setCompleteListener(function() {
                  shoujifei_spine.setCompleteListener(null);
                  var winCoin = cc.find("coin", tengman_spine.node);
                  winCoin.active = true;
                  winCoin.opacity = 255;
                  winCoin.getComponent(cc.Label).string = Global.formatNumShort(allWinCoin, 0);
                  cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", true);
                  var bonusjieshou_spine = cc.find("bonusjieshou", tengman_spine.node).getComponent(sp.Skeleton);
                  bonusjieshou_spine.node.active = true;
                  bonusjieshou_spine.setAnimation(0, "animation", false);
                  bonusjieshou_spine.setCompleteListener(function() {
                    bonusjieshou_spine.setCompleteListener(null);
                    success();
                    bonusjieshou_spine.node.active = false;
                  });
                });
              });

             case 45:
              _i7++;
              _context6.next = 33;
              break;

             case 48:
              cc.find("LMSlots_PrizePool_1", _this6.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
              cc.find("black_bg", _this6.node).active = false;
              kuang_gl_01_spine.node.active = false;

             case 51:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      triggerPickBonus: function triggerPickBonus() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var scatterSymbol, scatterIndex, i, card, symbol, shouji_huoyan, startPos, animationIndex, tengman, pickBonusScript;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              scatterSymbol = null;
              scatterIndex = 0;
              i = 0;

             case 3:
              if (!(i < _this7._gameInfo.resultCards.length)) {
                _context7.next = 15;
                break;
              }
              card = _this7._gameInfo.resultCards[i];
              if (!(card === _this7._cfg.scatterId)) {
                _context7.next = 12;
                break;
              }
              symbol = _this7.GetSymbolByIdx(i + 1);
              if (!symbol) {
                _context7.next = 12;
                break;
              }
              scatterSymbol = symbol;
              scatterIndex = i;
              symbol.playTriggerAnimation();
              return _context7.abrupt("break", 15);

             case 12:
              i++;
              _context7.next = 3;
              break;

             case 15:
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_trigger", true);
              _context7.next = 18;
              return cc.vv.gameData.awaitTime(1);

             case 18:
              cc.find("LMSlots_PrizePool_1", _this7.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: _this7._gameInfo.jackpotValues[0]
              }, {
                prizeType: 1,
                pauseNum: _this7._gameInfo.jackpotValues[1]
              }, {
                prizeType: 2,
                pauseNum: _this7._gameInfo.jackpotValues[2]
              }, {
                prizeType: 3,
                pauseNum: _this7._gameInfo.jackpotValues[3]
              } ]);
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_active", true);
              shouji_huoyan = cc.find("shouji_huoyan", _this7.node);
              shouji_huoyan.active = true;
              startPos = scatterSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this7.node.convertToNodeSpaceAR(startPos);
              shouji_huoyan.position = startPos;
              animationIndex = Math.floor(scatterIndex / 5) + 1;
              shouji_huoyan.getComponent(sp.Skeleton).setAnimation(0, "animation" + animationIndex, false);
              shouji_huoyan.getComponent(sp.Skeleton).setCompleteListener(function() {
                shouji_huoyan.getComponent(sp.Skeleton).setCompleteListener(null);
                shouji_huoyan.active = false;
              });
              _context7.next = 30;
              return cc.vv.gameData.awaitTime(.5);

             case 30:
              _this7.setTengmanVisible(true);
              tengman = cc.find("tengman", _this7.node.parent).getComponent(sp.Skeleton);
              tengman.setAnimation(0, "animation4", false);
              tengman.addAnimation(0, "animation5", false);
              tengman.addAnimation(0, "animation6", true);
              _context7.next = 37;
              return cc.vv.gameData.awaitTime(2);

             case 37:
              pickBonusScript = cc.find("pick_bonus", _this7.node).getComponent("MinamotoNoYoshitsune_PickBonus");
              _context7.next = 40;
              return pickBonusScript.enterPickBonus(startPos.y);

             case 40:
              cc.find("LMSlots_PrizePool_1", _this7.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
              _context7.next = 43;
              return _this7.ShowBottomWin(pickBonusScript.getWinCoin(), pickBonusScript.getWinCoin(), true, null);

             case 43:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("collect_node", this.node).active = !bFree;
      },
      collectSymbol: function collectSymbol() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var icon_diamond, haveCollect, i, card, symbol, particle, startPos, endPos;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              if (!(0 === _this8._gameInfo.mapInfo.progressData.currCnt)) {
                _context8.next = 4;
                break;
              }
              return _context8.abrupt("return");

             case 4:
              icon_diamond = cc.find("collect_node/icon_diamond", _this8.node);
              haveCollect = false;
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (card === _this8._cfg.collectSymbolId) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    haveCollect = true;
                    particle = cc.instantiate(cc.find("particle_fly", _this8.node.parent));
                    particle.active = true;
                    particle.parent = _this8.node.parent;
                    startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this8.node.parent.convertToNodeSpaceAR(startPos);
                    particle.position = startPos;
                    endPos = icon_diamond.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this8.node.parent.convertToNodeSpaceAR(endPos);
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).removeSelf().start();
                  }
                }
              }
              if (!haveCollect) {
                _context8.next = 14;
                break;
              }
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_fly", true);
              cc.tween(icon_diamond).delay(.5).call(function() {
                var spine = cc.find("jieshou", icon_diamond).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setToSetupPose();
                spine.setAnimation(0, "animation", false);
                spine.setCompleteListener(function(track) {
                  spine.node.active = false;
                });
              }).start();
              _context8.next = 12;
              return cc.vv.gameData.awaitTime(.5);

             case 12:
              _context8.next = 14;
              return _this8.updateCollectProgress(_this8._gameInfo.mapInfo, true);

             case 14:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      triggerGetFreeTime: function triggerGetFreeTime() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _context10.next = 2;
              return new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
                  var posY, kuang_gl_01_spine, i, card, symbol, position, _i8, index, _symbol5, tengman_spine, collect_node, freegame_tips, shoujifei_spine, allWinCoin, _i9, _index4, _symbol6, startPos, freetime, _i10, _index5, _symbol7, particle, _startPos2, endPos;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _this9._bottomScript.ShowBtnsByState("moveing_1");
                      _this9._freeCnt = _this9._gameInfo.freeCnt;
                      posY = 0;
                      kuang_gl_01_spine = cc.find("kuang_gl_01", _this9.node).getComponent(sp.Skeleton);
                      kuang_gl_01_spine.node.active = true;
                      kuang_gl_01_spine.setAnimation(0, "animation4_5", true);
                      cc.find("black_bg", _this9.node).active = true;
                      i = 0;

                     case 8:
                      if (!(i < _this9._gameInfo.resultCards.length)) {
                        _context9.next = 20;
                        break;
                      }
                      card = _this9._gameInfo.resultCards[i];
                      if (!(card === _this9._cfg.scatterId)) {
                        _context9.next = 17;
                        break;
                      }
                      symbol = _this9.GetSymbolByIdx(i + 1);
                      if (!symbol) {
                        _context9.next = 17;
                        break;
                      }
                      position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      posY = _this9.node.convertToNodeSpaceAR(position).y;
                      symbol.playTriggerAnimation();
                      return _context9.abrupt("break", 20);

                     case 17:
                      i++;
                      _context9.next = 8;
                      break;

                     case 20:
                      for (_i8 = 0; _i8 < _this9._gameInfo.bonusIdxs.length; _i8++) {
                        index = _this9._gameInfo.bonusIdxs[_i8];
                        _symbol5 = _this9.GetSymbolByIdx(index);
                        _symbol5 && _symbol5.playTriggerAnimation();
                      }
                      _context9.next = 23;
                      return cc.vv.gameData.awaitTime(.5);

                     case 23:
                      _this9.setTengmanVisible(true);
                      tengman_spine = cc.find("tengman", _this9.node.parent).getComponent(sp.Skeleton);
                      tengman_spine.setAnimation(0, "animation4", false);
                      tengman_spine.addAnimation(0, "animation5", false);
                      tengman_spine.addAnimation(0, "animation6", false);
                      tengman_spine.addAnimation(0, "animation7", false);
                      tengman_spine.addAnimation(0, "animation6_1", true);
                      _context9.next = 32;
                      return cc.vv.gameData.awaitTime(6);

                     case 32:
                      collect_node = cc.find("collect_node", _this9.node);
                      cc.tween(collect_node).by(.5, {
                        y: -100
                      }).call(function() {
                        collect_node.active = false;
                      }).start();
                      freegame_tips = cc.find("freegame_tips", _this9.node);
                      freegame_tips.active = true;
                      _this9.updateFreeTimes(0);
                      cc.tween(freegame_tips).delay(.5).by(.5, {
                        y: 100
                      }).start();
                      shoujifei_spine = cc.find("shoujifei", _this9.node).getComponent(sp.Skeleton);
                      allWinCoin = 0;
                      _i9 = 0;

                     case 41:
                      if (!(_i9 < _this9._gameInfo.bonusIdxs.length)) {
                        _context9.next = 57;
                        break;
                      }
                      _index4 = _this9._gameInfo.bonusIdxs[_i9];
                      if (!_this9._gameInfo.bonusItems[_i9].coin) {
                        _context9.next = 54;
                        break;
                      }
                      _symbol6 = _this9.GetSymbolByIdx(_index4);
                      if (!_symbol6) {
                        _context9.next = 54;
                        break;
                      }
                      shoujifei_spine.node.active = true;
                      startPos = _symbol6.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      startPos = _this9.node.convertToNodeSpaceAR(startPos);
                      shoujifei_spine.node.position = startPos;
                      shoujifei_spine.setAnimation(0, _this9._cfg.shoujifeiCfg[4][5][_index4], false);
                      allWinCoin += _this9._gameInfo.bonusItems[_i9].jackpot ? _this9._gameInfo.bonusItems[_i9].jackpot.value : _this9._gameInfo.bonusItems[_i9].coin;
                      _context9.next = 54;
                      return new Promise(function(success) {
                        shoujifei_spine.setCompleteListener(function() {
                          shoujifei_spine.setCompleteListener(null);
                          var winCoin = cc.find("coin", tengman_spine.node);
                          winCoin.active = true;
                          winCoin.opacity = 255;
                          winCoin.getComponent(cc.Label).string = Global.formatNumShort(allWinCoin, 0);
                          cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", true);
                          var bonusjieshou_spine = cc.find("bonusjieshou", tengman_spine.node).getComponent(sp.Skeleton);
                          bonusjieshou_spine.node.active = true;
                          bonusjieshou_spine.setAnimation(0, "animation", false);
                          bonusjieshou_spine.setCompleteListener(function() {
                            bonusjieshou_spine.setCompleteListener(null);
                            success();
                            bonusjieshou_spine.node.active = false;
                          });
                        });
                      });

                     case 54:
                      _i9++;
                      _context9.next = 41;
                      break;

                     case 57:
                      freetime = 0;
                      _i10 = 0;

                     case 59:
                      if (!(_i10 < _this9._gameInfo.bonusIdxs.length)) {
                        _context9.next = 79;
                        break;
                      }
                      _index5 = _this9._gameInfo.bonusIdxs[_i10];
                      if (!_this9._gameInfo.bonusItems[_i10].freeCnt) {
                        _context9.next = 76;
                        break;
                      }
                      _symbol7 = _this9.GetSymbolByIdx(_index5);
                      if (!_symbol7) {
                        _context9.next = 76;
                        break;
                      }
                      freetime += _this9._gameInfo.bonusItems[_i10].freeCnt;
                      particle = cc.instantiate(cc.find("particle_fly", _this9.node.parent));
                      particle.active = true;
                      particle.parent = _this9.node.parent;
                      _startPos2 = _symbol7.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      _startPos2 = _this9.node.parent.convertToNodeSpaceAR(_startPos2);
                      particle.position = _startPos2;
                      endPos = cc.find("remain_times", freegame_tips).convertToWorldSpaceAR(cc.v2(0, 0));
                      endPos = _this9.node.parent.convertToNodeSpaceAR(endPos);
                      cc.tween(particle).to(.5, {
                        position: endPos
                      }).call(function() {
                        _this9.updateFreeTimes(freetime);
                      }).removeSelf().start();
                      _context9.next = 76;
                      return cc.vv.gameData.awaitTime(.5);

                     case 76:
                      _i10++;
                      _context9.next = 59;
                      break;

                     case 79:
                      cc.find("black_bg", _this9.node).active = false;
                      kuang_gl_01_spine.node.active = false;
                      success();

                     case 82:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

             case 2:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var posY, allWinCoin, i, index, _i11, card, symbol, position, _i13, _card, _symbol9;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              posY = 0;
              allWinCoin = 0;
              for (i = 0; i < _this10._gameInfo.bonusIdxs.length; i++) {
                index = _this10._gameInfo.bonusIdxs[i];
                _this10._gameInfo.bonusItems[i].coin && (allWinCoin += _this10._gameInfo.bonusItems[i].jackpot ? _this10._gameInfo.bonusItems[i].jackpot.value : _this10._gameInfo.bonusItems[i].coin);
              }
              _i11 = 0;

             case 4:
              if (!(_i11 < _this10._gameInfo.resultCards.length)) {
                _context12.next = 15;
                break;
              }
              card = _this10._gameInfo.resultCards[_i11];
              if (!(card === _this10._cfg.scatterId)) {
                _context12.next = 12;
                break;
              }
              symbol = _this10.GetSymbolByIdx(_i11 + 1);
              if (!symbol) {
                _context12.next = 12;
                break;
              }
              position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              posY = _this10.node.convertToNodeSpaceAR(position).y;
              return _context12.abrupt("break", 15);

             case 12:
              _i11++;
              _context12.next = 4;
              break;

             case 15:
              _context12.next = 17;
              return new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var bonus_bj_spine, bonus_wenzi_spine, coin, perCoin, endPos, _i12, _index6, _symbol8, startPos, newSymbol;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      bonus_bj_spine = cc.find("bonus_bj", _this10.node).getComponent(sp.Skeleton);
                      bonus_bj_spine.node.active = true;
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_expand", true);
                      bonus_bj_spine.setAnimation(0, "animation1_1", false);
                      bonus_bj_spine.addAnimation(0, "animation1_2", true);
                      bonus_wenzi_spine = cc.find("bonus_wenzi", _this10.node).getComponent(sp.Skeleton);
                      bonus_wenzi_spine.node.active = true;
                      coin = cc.find("coin", bonus_wenzi_spine.node);
                      coin.getComponent(cc.Label).string = 0;
                      bonus_wenzi_spine.node.y = posY;
                      cc.tween(bonus_wenzi_spine.node).to(.5, {
                        y: 0
                      }).start();
                      _context11.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      perCoin = 0;
                      endPos = bonus_wenzi_spine.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      endPos = _this10.node.parent.convertToNodeSpaceAR(endPos);
                      _i12 = 0;

                     case 17:
                      if (!(_i12 < _this10._gameInfo.bonusIdxs.length)) {
                        _context11.next = 42;
                        break;
                      }
                      _index6 = _this10._gameInfo.bonusIdxs[_i12];
                      if (!_this10._gameInfo.bonusItems[_i12].coin) {
                        _context11.next = 39;
                        break;
                      }
                      _symbol8 = _this10.GetSymbolByIdx(_index6);
                      if (!_symbol8) {
                        _context11.next = 39;
                        break;
                      }
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_collect", true);
                      startPos = _symbol8.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      startPos = _this10.node.parent.convertToNodeSpaceAR(startPos);
                      perCoin += _this10._gameInfo.bonusItems[_i12].coin;
                      newSymbol = cc.instantiate(_symbol8.node).getComponent("MinamotoNoYoshitsune_Symbol");
                      newSymbol.node.parent = _this10.node.parent;
                      newSymbol.node.position = startPos;
                      newSymbol.ShowNormal();
                      newSymbol.ShowById(_symbol8.GetShowId(), _symbol8.GetData());
                      newSymbol.playFlyBonusAnimation();
                      _symbol8.ShowNormal();
                      _symbol8.ShowById(_this10._cfg.emptyId, null);
                      _context11.next = 36;
                      return cc.vv.gameData.awaitTime(.3);

                     case 36:
                      cc.tween(newSymbol.node).to(.5, {
                        position: endPos
                      }).call(function() {
                        var coin = cc.find("coin", bonus_wenzi_spine.node);
                        coin.active = true;
                        coin.getComponent(cc.Label).string = Global.formatNumShort(perCoin, 0);
                        var icon = cc.find("icon", bonus_wenzi_spine.node);
                        icon.active = false;
                      }).removeSelf().start();
                      _context11.next = 39;
                      return cc.vv.gameData.awaitTime(.5);

                     case 39:
                      _i12++;
                      _context11.next = 17;
                      break;

                     case 42:
                      success();

                     case 43:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());

             case 17:
              for (_i13 = 0; _i13 < _this10._gameInfo.resultCards.length; _i13++) {
                _card = _this10._gameInfo.resultCards[_i13];
                if (_card === _this10._cfg.extraSpinId) {
                  _symbol9 = _this10.GetSymbolByIdx(_i13 + 1);
                  _symbol9 && _symbol9.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bell", true);
              _context12.next = 21;
              return cc.vv.gameData.awaitTime(1);

             case 21:
              _context12.next = 23;
              return _this10.popFreeDialog();

             case 23:
              _this10.cutSceneGem();
              _context12.next = 26;
              return cc.vv.gameData.awaitTime(2);

             case 26:
              _this10.ShowGameview(true);
              _context12.next = 29;
              return cc.vv.gameData.awaitTime(2);

             case 29:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free1_bgm");
              _this10.CanDoNextRound();

             case 32:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      cutSceneGem: function cutSceneGem() {
        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition1", true);
        var fg_qp_01_spine = cc.find("fg_qp_01", this.node.parent).getComponent(sp.Skeleton);
        fg_qp_01_spine.node.active = true;
        fg_qp_01_spine.setAnimation(0, "animation", false);
        fg_qp_01_spine.setCompleteListener(function() {
          fg_qp_01_spine.setCompleteListener(null);
          fg_qp_01_spine.node.active = false;
        });
      },
      updateFreeTimes: function updateFreeTimes(freetime) {
        var freegame_tips = cc.find("freegame_tips", this.node);
        var mapInfo = cc.vv.gameData.getDeskInfo().mapInfo;
        this._gameInfo && (mapInfo = this._gameInfo.mapInfo);
        2 === mapInfo.state && -1 !== this._curUnlockBooster.indexOf(this._cfg.MapBoostType.AddReel) && (freegame_tips = -1 !== this._curUnlockBooster.indexOf(this._cfg.MapBoostType.AddRow) ? cc.find("reels_frame_5_6/freegame_tips", this.node) : cc.find("reels_frame_4_6/freegame_tips", this.node));
        cc.find("frees", freegame_tips).active = freetime > 1;
        cc.find("free", freegame_tips).active = freetime <= 1;
        cc.find("remain_times", freegame_tips).getComponent(cc.Label).string = freetime;
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var transition, _iterator3, _step3, reel, _iterator4, _step4, _reel, collect_node, freegame_tips, bonus_bj_spine, bonus_wenzi_spine, tengman_spine;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              _this11._freeCnt = 0;
              _context13.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              _context13.next = 6;
              return _this11.popFreeResultDialog(2 === _this11._gameInfo.mapInfo.state);

             case 6:
              if (!(2 === _this11._gameInfo.mapInfo.state)) {
                _context13.next = 28;
                break;
              }
              transition = cc.find("transition", _this11.node.parent);
              transition.active = true;
              transition.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              transition.getComponent(sp.Skeleton).setCompleteListener(function() {
                transition.getComponent(sp.Skeleton).setCompleteListener(null);
                transition.active = false;
              });
              _context13.next = 13;
              return cc.vv.gameData.awaitTime(2);

             case 13:
              cc.find("freegame_tips", _this11.node).active = false;
              if (-1 !== _this11._curUnlockBooster.indexOf(_this11._cfg.MapBoostType.AddRow)) {
                _iterator3 = _createForOfIteratorHelper(_this11._reels);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    reel = _step3.value;
                    reel.StartRecycleSymbol(.01);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                _iterator4 = _createForOfIteratorHelper(_this11._reels);
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    _reel = _step4.value;
                    _reel.clearLastSymbol();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
              cc.find("reels_bg", _this11.node).scale = 1;
              cc.find("reels", _this11.node).scale = 1;
              cc.find("top_ani", _this11.node).scale = 1;
              cc.find("black_bg", _this11.node).scale = 1;
              cc.find("reels_frame", _this11.node).active = true;
              cc.find("reels_frame_4_6", _this11.node).active = false;
              cc.find("reels_frame_5_6", _this11.node).active = false;
              cc.find("map_4_5", _this11.node).active = false;
              cc.find("map_4_6", _this11.node).active = false;
              cc.find("map_5_5", _this11.node).active = false;
              cc.find("map_5_6", _this11.node).active = false;
              _context13.next = 41;
              break;

             case 28:
              _this11.cutSceneGem();
              _context13.next = 31;
              return cc.vv.gameData.awaitTime(2);

             case 31:
              collect_node = cc.find("collect_node", _this11.node);
              collect_node.y += 100;
              collect_node.active = true;
              freegame_tips = cc.find("freegame_tips", _this11.node);
              freegame_tips.y -= 100;
              freegame_tips.active = false;
              bonus_bj_spine = cc.find("bonus_bj", _this11.node).getComponent(sp.Skeleton);
              bonus_bj_spine.node.active = false;
              bonus_wenzi_spine = cc.find("bonus_wenzi", _this11.node).getComponent(sp.Skeleton);
              bonus_wenzi_spine.node.active = false;

             case 41:
              cc.find("spr_bg_bonus", _this11.node.parent).active = false;
              cc.find("LMSlots_PrizePool_1", _this11.node.parent).active = true;
              _this11.setTengmanVisible(false);
              tengman_spine = cc.find("tengman", _this11.node.parent).getComponent(sp.Skeleton);
              tengman_spine.setAnimation(0, "animation1", false);
              tengman_spine.addAnimation(0, "animation2", true);
              cc.find("coin", tengman_spine.node).active = false;
              _this11.ShowGameview(false);
              _this11.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this11.CanDoNextRound();
              });

             case 50:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      popFreeDialog: function popFreeDialog() {
        var _this12 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
            var free_dialog, free_bg, dialog, times, freetanchuang_spine, coin, btn_start, func;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this12.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                times = cc.find("times", dialog);
                times.scale = 0;
                freetanchuang_spine = cc.find("freetanchuang", dialog).getComponent(sp.Skeleton);
                freetanchuang_spine.node.active = true;
                coin = cc.find("coin", dialog);
                coin.getComponent(cc.Label).string = Global.formatNumShort(_this12._gameInfo.bonusBaseCoin, 0);
                cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_fg_start", true);
                cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus_trigger", true);
                freetanchuang_spine.setAnimation(0, "animation1_1", false);
                freetanchuang_spine.addAnimation(0, "animation1_2", true);
                btn_start = cc.find("btn_start", dialog);
                btn_start.scale = 0;
                _context16.next = 21;
                return cc.vv.gameData.awaitTime(.3);

               case 21:
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.tween(times).to(.2, {
                  scale: 1
                }).start();
                _context16.next = 25;
                return cc.vv.gameData.awaitTime(.2);

               case 25:
                cc.tween(btn_start).to(.2, {
                  scale: .5
                }).start();
                _context16.next = 28;
                return cc.vv.gameData.awaitTime(.2);

               case 28:
                btn_start.off("click");
                func = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        btn_start.off("click");
                        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
                        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", true);
                        cc.tween(btn_start).to(.2, {
                          scale: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        cc.tween(times).to(.2, {
                          scale: 0
                        }).start();
                        freetanchuang_spine.setAnimation(0, "animation1_3", false);
                        freetanchuang_spine.setCompleteListener(function(track) {
                          freetanchuang_spine.setCompleteListener(null);
                          dialog.active = false;
                          free_dialog.active = false;
                          freetanchuang_spine.node.active = false;
                          success();
                        });

                       case 8:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee14);
                  }));
                  return function func() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context15.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                })));

               case 32:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog(isMap) {
        var _this13 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
            var free_dialog, free_bg, dialog, freetanchuang_spine, coin, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this13.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = isMap ? cc.find("map_free_result_node", free_dialog) : cc.find("result_node", free_dialog);
                dialog.active = true;
                freetanchuang_spine = cc.find("freetanchuang", dialog).getComponent(sp.Skeleton);
                freetanchuang_spine.node.active = true;
                coin = cc.find("coin", dialog);
                coin.scale = 0;
                coin.getComponent(cc.Label).string = "";
                isMap ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_map_collect", true) : cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_fg_collect", true);
                isMap && _this13.clearCollectProgress();
                freetanchuang_spine.setAnimation(0, isMap ? "animation" : "animation2_1", false);
                freetanchuang_spine.addAnimation(0, isMap ? "animation2" : "animation2_2", true);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                _context19.next = 20;
                return cc.vv.gameData.awaitTime(.3);

               case 20:
                Global.doRoallNumEff(coin, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                cc.tween(coin).to(.2, {
                  scale: 1
                }).start();
                _context19.next = 24;
                return cc.vv.gameData.awaitTime(.2);

               case 24:
                cc.tween(btn_collect).to(.2, {
                  scale: .5
                }).start();
                btn_collect.off("click");
                _context19.next = 28;
                return cc.vv.gameData.awaitTime(.2);

               case 28:
                func = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
                        cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", true);
                        cc.tween(btn_collect).to(.2, {
                          scale: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        freetanchuang_spine.setAnimation(0, isMap ? "animation3" : "animation2_3", false);
                        freetanchuang_spine.setCompleteListener(function() {
                          freetanchuang_spine.setCompleteListener(null);
                          dialog.active = false;
                          free_dialog.active = false;
                          freetanchuang_spine.node.active = false;
                          success();
                        });
                        _context17.next = 9;
                        return cc.vv.gameData.awaitTime(.3);

                       case 9:
                        cc.tween(coin).to(.2, {
                          scale: 0
                        }).start();

                       case 10:
                       case "end":
                        return _context17.stop();
                      }
                    }, _callee17);
                  }));
                  return function func() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context18.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                })));

               case 31:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x4) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      popMapFreeDialog: function popMapFreeDialog(mapInfo) {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              return _context23.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success) {
                  var free_dialog, free_bg, dialog, superbonustanchuang_spine, times, coin, i, booster, btn_start, _i14, _booster, func;
                  return regeneratorRuntime.wrap(function _callee22$(_context22) {
                    while (1) switch (_context22.prev = _context22.next) {
                     case 0:
                      cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_mapfg_start", true);
                      free_dialog = cc.find("free_dialog", _this14.node.parent);
                      free_dialog.active = true;
                      free_bg = cc.find("free_dialog_bg", free_dialog);
                      free_bg.opacity = 0;
                      free_bg.runAction(cc.fadeTo(.2, 200));
                      dialog = cc.find("map_free_node", free_dialog);
                      dialog.active = true;
                      superbonustanchuang_spine = cc.find("superbonustanchuang", dialog).getComponent(sp.Skeleton);
                      superbonustanchuang_spine.node.active = true;
                      times = cc.find("times", dialog);
                      times.getComponent(cc.Label).string = _this14._gameInfo.mapInfo.nextSpinCount;
                      times.scale = 0;
                      coin = cc.find("coin", dialog);
                      coin.getComponent(cc.Label).string = Global.formatNumShort(_this14._gameInfo.mapInfo.startPrice, 0);
                      for (i = 1; i < 6; i++) {
                        booster = cc.find("booster_" + i, dialog);
                        booster.active = -1 !== mapInfo.nextBoosters.indexOf(i);
                        cc.find("black_bg", booster).active = -1 === mapInfo.nextUnlockBoosters.indexOf(i);
                        booster.scale = 0;
                      }
                      superbonustanchuang_spine.setAnimation(0, "animation1_1", false);
                      superbonustanchuang_spine.addAnimation(0, "animation1_2", true);
                      btn_start = cc.find("btn_start", dialog);
                      btn_start.scale = 0;
                      _context22.next = 22;
                      return cc.vv.gameData.awaitTime(.3);

                     case 22:
                      cc.tween(times).to(.2, {
                        scale: 1
                      }).start();
                      _context22.next = 25;
                      return cc.vv.gameData.awaitTime(.2);

                     case 25:
                      cc.tween(btn_start).to(.2, {
                        scale: .5
                      }).start();
                      for (_i14 = 1; _i14 < 6; _i14++) {
                        _booster = cc.find("booster_" + _i14, dialog);
                        cc.tween(_booster).to(.2, {
                          scale: 1
                        }).start();
                      }
                      _context22.next = 29;
                      return cc.vv.gameData.awaitTime(.2);

                     case 29:
                      func = function() {
                        var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                          return regeneratorRuntime.wrap(function _callee20$(_context20) {
                            while (1) switch (_context20.prev = _context20.next) {
                             case 0:
                              btn_start.off("click");
                              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", true);
                              cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", true);
                              cc.tween(btn_start).to(.2, {
                                scale: 0
                              }).start();
                              cc.tween(free_bg).to(.2, {
                                opacity: 0
                              }).start();
                              superbonustanchuang_spine.setAnimation(0, "animation1_3", false);
                              superbonustanchuang_spine.setCompleteListener(function(track) {
                                superbonustanchuang_spine.setCompleteListener(null);
                                dialog.active = false;
                                free_dialog.active = false;
                                superbonustanchuang_spine.node.active = false;
                                success();
                              });
                              _context20.next = 9;
                              return cc.vv.gameData.awaitTime(.3);

                             case 9:
                              cc.tween(times).to(.2, {
                                scale: 0
                              }).start();

                             case 10:
                             case "end":
                              return _context20.stop();
                            }
                          }, _callee20);
                        }));
                        return function func() {
                          return _ref11.apply(this, arguments);
                        };
                      }();
                      btn_start.off("click");
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) switch (_context21.prev = _context21.next) {
                           case 0:
                            btn_start.stopAllActions();
                            _context21.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context21.stop();
                          }
                        }, _callee21);
                      })));

                     case 33:
                     case "end":
                      return _context22.stop();
                    }
                  }, _callee22);
                }));
                return function(_x5) {
                  return _ref10.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      updateCollectProgress: function updateCollectProgress(mapInfo, isAdd) {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
          var progress, scale_node, spine_collect;
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
             case 0:
              progress = cc.find("collect_node/progress", _this15.node);
              scale_node = cc.find("collect_node/scale_node", _this15.node);
              if (isAdd) {
                cc.tween(scale_node).to(.3, {
                  scaleX: mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt
                }).start();
                cc.tween(progress.getComponent(cc.ProgressBar)).to(.3, {
                  progress: mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt
                }).start();
                spine_collect = cc.find("bar/jdtshangzhang", progress).getComponent(sp.Skeleton);
                spine_collect.node.active = true;
                spine_collect.setToSetupPose();
                spine_collect.setAnimation(0, "animation", false);
                spine_collect.setCompleteListener(function() {
                  spine_collect.node.active = false;
                });
              } else {
                progress.getComponent(cc.ProgressBar).progress = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
                scale_node.scaleX = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
              }

             case 3:
             case "end":
              return _context24.stop();
            }
          }, _callee24);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var progress = cc.find("collect_node/progress", this.node);
        var scale_node = cc.find("collect_node/scale_node", this.node);
        scale_node.scaleX = 0;
        progress.getComponent(cc.ProgressBar).progress = 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  MinamotoNoYoshitsune_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17fcfoAa0xE2pJsz/27vJPS", "MinamotoNoYoshitsune_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      Init: function Init(idx, node) {
        this._super(idx, node);
        this._showNode.color = cc.Color.WHITE;
      },
      StartMove: function StartMove() {
        this._super();
        this._id !== cc.vv.gameData.getGameCfg().bonusId ? this._showNode.color = cc.Color.GRAY : this._showNode.color = cc.Color.WHITE;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        this._id !== cc.vv.gameData.getGameCfg().bonusId ? this._showNode.color = cc.Color.GRAY : this._showNode.color = cc.Color.WHITE;
        this.showCoin();
        this.showFreeTimes();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.showCoin();
        this.showFreeTimes();
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" !== cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              id === cfg.bonusId && nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
      },
      showCoin: function showCoin() {
        var coin = cc.find("coin", this.node);
        var jackpot = cc.find("jackpot", this.node);
        if (coin && jackpot && this._id === cc.vv.gameData.getGameCfg().bonusId) if (this._data) {
          if (this._data.coin > 0) {
            coin.active = true;
            coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
          } else if (this._data.jackpot) {
            jackpot.active = true;
            var atlas = cc.vv.gameData.GetAtlasByName("symbols");
            jackpot.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme205_s_jp" + (5 - this._data.jackpot.id));
          }
        } else if (0 !== cc.vv.gameData.GetSlotsScript().getBaseCoin()) {
          coin.active = true;
          coin.getComponent(cc.Label).string = Global.formatNumShort(cc.vv.gameData.GetSlotsScript().getBaseCoin(), 0);
        } else {
          coin.active = true;
          var randomRate = [ .25, .5, .75, 1, 2, 5, 10 ];
          var randomCoin = cc.vv.gameData.GetTotalBet() * randomRate[Math.floor(Math.random() * randomRate.length)];
          coin.getComponent(cc.Label).string = Global.formatNumShort(randomCoin, 0);
        } else {
          coin.active = false;
          jackpot.active = false;
        }
      },
      showFreeTimes: function showFreeTimes() {
        var times = cc.find("times", this.node);
        if (times && this._id === cc.vv.gameData.getGameCfg().extraSpinId) {
          if (this._data && this._data.freeCnt) {
            times.active = true;
            times.getComponent(cc.Label).string = this._data.freeCnt;
          }
        } else times.active = false;
      },
      playWinAnimation: function playWinAnimation() {
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
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && (id === cfg.extraSpinId ? this._data.freeCnt > 1 ? nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true) : nodeSp.setAnimation(0, cfg.symbol[id].win_ani_1.name, true) : nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true));
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
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
          if ("" !== cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              id !== cfg.scatterId && id !== cfg.bonusId || !cfg.symbol[id].idle_ani || nodeSp.setCompleteListener(function() {
                nodeSp.setCompleteListener(null);
                nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
                cc.find("icon", topShowNode) && (cc.find("icon", topShowNode).active = true);
              });
            }
          }
        }
        return isPlay;
      },
      playFlyBonusAnimation: function playFlyBonusAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
        this._showNode.active = true;
        this.node.zIndex = 500 - this._symbolIdx + 10 * this._reelIdx;
        var nodeSp = this._showNode.getComponent(sp.Skeleton);
        nodeSp && nodeSp.setAnimation(0, "animation1_5", false);
      },
      playWildAnimation: function playWildAnimation() {
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
          aniNode.zIndex = 300 - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          var animationName = 105 === id ? "animation1_1" : "animation1";
          this._symbolIdx < cc.vv.gameData.getGameCfg().row && this._symbolIdx > 0 && (animationName = "animation" + (3 - this._symbolIdx + 5) + (105 === id ? "_1" : ""));
          nodeSp && nodeSp.setAnimation(0, animationName, true);
        }
      },
      Resume: function Resume(backup) {
        if (!backup) return;
        this._symbolIdx = backup.symbolIdx;
        this._id = backup.id;
        this._data = Global.copy(backup.data);
        this.ShowKuang(backup.isKuang);
        this.ShowNormal();
        var cfg = cc.vv.gameData.getGameCfg();
        var state = backup.state;
        if ("win" == state) if (101 === this.GetShowId() || 102 === this.GetShowId() || 103 === this.GetShowId()) if (Math.floor((Number(key) - 1) / cfg.col) === cfg.row - 1) this.playWinAnimation(); else {
          var col = this.GetSymbolReelIdx();
          var reel = cc.vv.gameData.GetSlotsScript()._reels[col];
          for (var i = 0; i < cfg.row; i++) {
            var newSymbol = reel.GetSymbolByRow(i);
            if (104 === newSymbol.GetShowId() || 105 === newSymbol.GetShowId()) {
              newSymbol.playWildAnimation();
              break;
            }
            if (101 === newSymbol.GetShowId() || 102 === newSymbol.GetShowId() || 103 === newSymbol.GetShowId()) {
              newSymbol.playWinAnimation();
              break;
            }
          }
        } else this.playWildAnimation(); else "stop" == state ? this.playStopAnimation() : "idle" == state ? this.playidleAnimation() : "trigger" == state && this.playTriggerAnimation();
        if (this._id === cfg.bonusId || this._id === cfg.extraSpinId) {
          this._state = "win";
          this.playWinAnimation();
        }
      },
      resetColor: function resetColor() {
        this._showNode.color = cc.Color.WHITE;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "MinamotoNoYoshitsune_Cfg", "MinamotoNoYoshitsune_Logic", "MinamotoNoYoshitsune_Map", "MinamotoNoYoshitsune_PickBonus", "MinamotoNoYoshitsune_PickGame", "MinamotoNoYoshitsune_PrizePool", "MinamotoNoYoshitsune_Reel", "MinamotoNoYoshitsune_Slots", "MinamotoNoYoshitsune_Symbol" ]);