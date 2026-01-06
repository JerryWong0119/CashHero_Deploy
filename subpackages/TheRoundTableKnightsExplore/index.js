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
  TheRoundTableKnightsExplore_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20016VcpJ9N0bSdAPkwH6xn", "TheRoundTableKnightsExplore_Cfg");
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
          name: "animation3",
          zIndex: 800
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation3",
          zIndex: 800
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 4, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 5, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 6, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 7, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 8, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 9, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 10, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 11, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 12, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheRoundTableKnightsExplore_Slots",
        Reels: "TheRoundTableKnightsExplore_reel",
        Symbols: "TheRoundTableKnightsExplore_symbol",
        Sound: "TheRoundTableKnightsExplore_sound"
      },
      col: 5,
      row: 4,
      col_free: 5,
      row_free: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 120,
        height: 90
      },
      helpItems: [ "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item1", "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item2", "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item3", "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item4", "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item5", "games/TheRoundTableKnightsExplore/prefab/LMSlots_Help_item6" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12 ],
      kuang: "zjlx_01",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      commEffect: {
        path: "games/TheRoundTableKnightsExplore/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheRoundTableKnightsExplore/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      grayColor: cc.color(60, 60, 60),
      normalColor: cc.color(255, 255, 255),
      normalBgm: "base_bgm",
      AddAntiTime: 2,
      MapConfig: [ {
        id: 0,
        type: 0,
        needCnt: 60
      }, {
        id: 1,
        type: 1,
        needCnt: 60
      }, {
        id: 2,
        type: 1,
        needCnt: 60
      }, {
        id: 3,
        type: 2,
        needCnt: 60
      }, {
        id: 4,
        type: 1,
        needCnt: 60
      }, {
        id: 5,
        type: 1,
        needCnt: 60
      }, {
        id: 6,
        type: 1,
        needCnt: 60
      }, {
        id: 7,
        type: 3,
        needCnt: 60,
        min: 5,
        max: 10
      }, {
        id: 8,
        type: 1,
        needCnt: 60
      }, {
        id: 9,
        type: 1,
        needCnt: 60
      }, {
        id: 10,
        type: 1,
        needCnt: 60
      }, {
        id: 11,
        type: 1,
        needCnt: 60
      }, {
        id: 12,
        type: 4,
        needCnt: 60
      }, {
        id: 13,
        type: 1,
        needCnt: 60
      }, {
        id: 14,
        type: 1,
        needCnt: 60
      }, {
        id: 15,
        type: 1,
        needCnt: 60
      }, {
        id: 16,
        type: 1,
        needCnt: 60
      }, {
        id: 17,
        type: 1,
        needCnt: 60
      }, {
        id: 18,
        type: 3,
        needCnt: 60,
        min: 15,
        max: 50
      }, {
        id: 19,
        type: 1,
        needCnt: 60
      }, {
        id: 20,
        type: 1,
        needCnt: 60
      }, {
        id: 21,
        type: 1,
        needCnt: 60
      }, {
        id: 22,
        type: 1,
        needCnt: 60
      }, {
        id: 23,
        type: 1,
        needCnt: 60
      }, {
        id: 24,
        type: 1,
        needCnt: 60
      }, {
        id: 25,
        type: 5,
        needCnt: 60
      }, {
        id: 26,
        type: 1,
        needCnt: 60
      }, {
        id: 27,
        type: 1,
        needCnt: 60
      }, {
        id: 28,
        type: 1,
        needCnt: 60
      }, {
        id: 29,
        type: 1,
        needCnt: 60
      }, {
        id: 30,
        type: 1,
        needCnt: 60
      }, {
        id: 31,
        type: 1,
        needCnt: 60
      }, {
        id: 32,
        type: 1,
        needCnt: 60
      }, {
        id: 33,
        type: 3,
        needCnt: 60,
        min: 50,
        max: 100
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27331y2umdMZ4psPKJbeH2N", "TheRoundTableKnightsExplore_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _gameManage: null,
        _popWinManage: null,
        _qiePing: null,
        _wheelControl: null,
        _freeWheel: null,
        _mapControl: null,
        _yayaControl: null
      },
      getMapInfo: function getMapInfo() {
        return this._deskInfo.mapInfo;
      },
      setMapInfo: function setMapInfo(mapInfo) {
        this._deskInfo.mapInfo = mapInfo;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getBalloonGame: function getBalloonGame() {
        return this._deskInfo.balloonGame;
      },
      setPopWinMange: function setPopWinMange(script) {
        this._popWinManage = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWinManage;
      },
      getManage: function getManage() {
        return this._gameManage;
      },
      setManage: function setManage(script) {
        this._gameManage = script;
      },
      getQiePing: function getQiePing() {
        return this._qiePing;
      },
      setQiePing: function setQiePing(script) {
        this._qiePing = script;
      },
      getWheelControl: function getWheelControl() {
        return this._wheelControl;
      },
      setWheelControl: function setWheelControl(script) {
        this._wheelControl = script;
      },
      getFreeWheel: function getFreeWheel() {
        return this._freeWheel;
      },
      setFreeWheel: function setFreeWheel(script) {
        this._freeWheel = script;
      },
      getMapControl: function getMapControl() {
        return this._mapControl;
      },
      setMapControl: function setMapControl(script) {
        this._mapControl = script;
      },
      getYayaControl: function getYayaControl() {
        return this._yayaControl;
      },
      setYayaControl: function setYayaControl(script) {
        this._yayaControl = script;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheRoundTableKnightsExplore_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "478aamsiq5F0pIiSNP8VWZp", "TheRoundTableKnightsExplore_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script = this.node.addComponent("TheRoundTableKnightsExplore_Manage");
        cc.vv.gameData.setManage(script);
        var safeNode = cc.find("Canvas/safe_node");
        var popWinManage = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_Pop");
        popWinManage && cc.vv.gameData.setPopWinMange(popWinManage);
        var qieping = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_qiePing");
        qieping && cc.vv.gameData.setQiePing(qieping);
        var wheelControl = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_wheelControl");
        wheelControl && cc.vv.gameData.setWheelControl(wheelControl);
        var freeWheel = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_freeWheel");
        freeWheel && cc.vv.gameData.setFreeWheel(freeWheel);
        var mapControl = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_mapControl");
        mapControl && cc.vv.gameData.setMapControl(mapControl);
        var yayaControl = safeNode.getComponentInChildren("TheRoundTableKnightsExplore_yayaControl");
        yayaControl && cc.vv.gameData.setYayaControl(yayaControl);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheRoundTableKnightsExplore_Manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "107766KLeFNh6aGA2I8w16f", "TheRoundTableKnightsExplore_Manage");
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
    var collectEffectInteval = -212.5;
    cc.Class({
      extends: cc.Component,
      properties: {
        _turntableTriggerBar: null,
        _PrizePoolRoot: null,
        _turntableTriggerBarLock: false,
        _collectNode: null,
        _initTurntableTriggerBar: true,
        _PrizePoolRootInitY: 0,
        _showCasualAnimation: false,
        _showCasualAnimationTime: 0
      },
      onLoad: function onLoad() {
        this._turntableTriggerBar = cc.find("safe_node/slots/turntableTriggerBar", this.node);
        this._PrizePoolRoot = cc.find("safe_node/LMSlots_PrizePool_1", this.node);
        this._collectNode = cc.find("safe_node/collectNode", this.node);
        var collectButton = cc.find("iconRight/button", this._turntableTriggerBar);
        Global.btnClickEvent(collectButton, this.showMap, this);
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        Global.btnClickEvent(turntableBarButton, this.unlockTurntable, this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
        this.initTurntableTriggerBar();
      },
      start: function start() {
        this._PrizePoolRootInitY = this._PrizePoolRoot.y;
        this._showCasualAnimation = true;
      },
      showCasualAnimation: function showCasualAnimation() {},
      stopCasualAnimation: function stopCasualAnimation() {
        this._showCasualAnimation = false;
      },
      resumeCasualAnimation: function resumeCasualAnimation() {
        this._showCasualAnimation = true;
      },
      update: function update(dt) {
        if (this._showCasualAnimation && cc.vv.gameData && !cc.vv.gameData.GetSlotsScript()._isInFree) {
          this._showCasualAnimationTime += dt;
          if (this._showCasualAnimationTime > 10) {
            this.showCasualAnimation();
            this._showCasualAnimationTime -= 10;
          }
        }
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, false, this);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowGameview: function ShowGameview(bFree) {},
      showTurntableTriggerBar: function showTurntableTriggerBar(bFree) {
        this._turntableTriggerBar.active = !bFree;
      },
      initTurntableTriggerBar: function initTurntableTriggerBar() {
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (mapInfo) {
          var curmult = cc.vv.gameData.GetBetIdx();
          var lockNode = cc.find("lock", this._turntableTriggerBar);
          if (curmult >= cc.vv.gameData.getNeedBet()) {
            lockNode.active = false;
            this._turntableTriggerBarLock = false;
          } else {
            lockNode.active = true;
            this._turntableTriggerBarLock = true;
          }
          var bar = cc.find("Bar", this._turntableTriggerBar);
          var barMask = cc.find("barMask", bar);
          var barPrograss = cc.find("barMask/bar", bar);
          var progress = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
          progress >= 1 && (progress = 0);
          var dstWidth = barMask.width * progress;
          barPrograss.x = dstWidth - barMask.width;
        }
      },
      changeTurntableTriggerBar: function changeTurntableTriggerBar() {
        var curmult = cc.vv.gameData.GetBetIdx();
        var lockNode = cc.find("lock", this._turntableTriggerBar);
        if (curmult >= cc.vv.gameData.getNeedBet()) {
          if (this._turntableTriggerBarLock) {
            this._turntableTriggerBarLock = false;
            var spine = cc.find("spine", lockNode);
            var spineSp = spine.getComponent(sp.Skeleton);
            spineSp.setAnimation(0, "animation2", false);
            spineSp.addAnimation(0, "animation2_1", true);
            this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_unlock);
            var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
            turntableBarButton.getComponent(cc.Button).interactable = false;
          }
        } else if (!this._turntableTriggerBarLock) {
          this._turntableTriggerBarLock = true;
          lockNode.active = true;
          var _spine = cc.find("spine", lockNode);
          var _spineSp = _spine.getComponent(sp.Skeleton);
          _spineSp.setAnimation(0, "animation1", false);
          _spineSp.addAnimation(0, "animation1_1", true);
          this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_lock);
          var _turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
          _turntableBarButton.getComponent(cc.Button).interactable = true;
        }
        this._initTurntableTriggerBar = false;
      },
      TrunTableTriggerBarVal: function TrunTableTriggerBarVal(mapInfo) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var curmult, bar, barMask, barPrograss, progress, jinHeZi, lihe, lihePos, endPos, i, symbol, position, finalPosition, lizi, tempSymbolNode, spine, liheSpine, dstWidth, jindutiaoxunhuanSp, jiman, jimanSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                curmult = cc.vv.gameData.GetBetIdx();
                if (!(curmult < cc.vv.gameData.getNeedBet())) {
                  _context.next = 4;
                  break;
                }
                sucess();
                return _context.abrupt("return");

               case 4:
                bar = cc.find("Bar", _this2._turntableTriggerBar);
                barMask = cc.find("barMask", bar);
                barPrograss = cc.find("barMask/bar", bar);
                progress = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
                jinHeZi = cc.vv.gameData.GetSlotsScript().findAllShouJiSymbol();
                if (!(jinHeZi.length > 0)) {
                  _context.next = 41;
                  break;
                }
                lihe = cc.find("giftBoxes", _this2._turntableTriggerBar);
                lihePos = lihe.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this2._collectNode.convertToNodeSpaceAR(lihePos);
                for (i = 0; i < jinHeZi.length; i++) {
                  symbol = jinHeZi[i];
                  position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  finalPosition = _this2._collectNode.convertToNodeSpaceAR(position);
                  lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("m1lizi"));
                  lizi.parent = _this2._collectNode;
                  lizi.position = finalPosition;
                  cc.tween(lizi).to(.5, {
                    position: endPos
                  }, {
                    easing: "quadIn"
                  }).start();
                  tempSymbolNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("LMSlots_Symbol"));
                  cc.find("w2", tempSymbolNode).active = true;
                  tempSymbolNode.parent = _this2._collectNode;
                  tempSymbolNode.position = finalPosition;
                  tempSymbolNode.scale = .5;
                  cc.tween(tempSymbolNode).to(.5, {
                    position: endPos
                  }, {
                    easing: "quadIn"
                  }).start();
                }
                _context.next = 16;
                return _this2.awaitTime(.5);

               case 16:
                _this2._collectNode.removeAllChildren();
                spine = cc.find("spine", lihe);
                liheSpine = spine.getComponent(sp.Skeleton);
                liheSpine.setAnimation(0, "animation1", false);
                liheSpine.addAnimation(0, "animation2", true);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_fly);
                progress > 1 && (progress = 1);
                dstWidth = barMask.width * progress;
                cc.tween(barPrograss).to(.2, {
                  x: dstWidth - barMask.width
                }).start();
                cc.find("jindutiaoxunhuan", barPrograss).active = true;
                jindutiaoxunhuanSp = cc.find("jindutiaoxunhuan", barPrograss).getComponent(sp.Skeleton);
                jindutiaoxunhuanSp.setAnimation(0, "animation1", false);
                jindutiaoxunhuanSp.setCompleteListener(function() {
                  cc.find("jindutiaoxunhuan", barPrograss).active = false;
                  jindutiaoxunhuanSp.setCompleteListener(null);
                });
                _context.next = 31;
                return _this2.awaitTime(.2);

               case 31:
                if (!(progress >= 1)) {
                  _context.next = 41;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_full);
                jiman = cc.find("jiman", bar);
                jiman.active = true;
                jimanSp = jiman.getComponent(sp.Skeleton);
                jimanSp.setAnimation(0, "animation", false);
                jimanSp.setCompleteListener(function() {
                  jiman.active = false;
                  jimanSp.setCompleteListener(null);
                });
                _context.next = 40;
                return _this2.awaitTime(1.6);

               case 40:
                _this2.scheduleOnce(function() {
                  barPrograss.x = -barMask.width;
                }, 2);

               case 41:
                sucess();

               case 42:
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
      setNodeColor: function setNodeColor(node, color) {
        if (node) {
          node.color = color;
          for (var i = 0; i < node.children.length; i++) {
            var element = node.children[i];
            element.color = color;
          }
        }
      },
      onRecvClickQiQiu: function onRecvClickQiQiu(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              200 == msg.code && (1 === msg.data.rtype || 2 === msg.data.rtype && cc.vv.gameData.getFreeWheel().onSpinWheel(msg.data));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        this.changeTurntableTriggerBar();
      },
      showMap: function showMap() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var curmult, collectButton;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!cc.vv.gameData.GetSlotsScript()._isInFree) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              if (!("idle" != cc.vv.gameData.GetSlotState())) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");

             case 4:
              if (!(cc.vv.gameData.GetAutoModelTime() > 0)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");

             case 6:
              curmult = cc.vv.gameData.GetBetIdx();
              if (!(curmult < cc.vv.gameData.getNeedBet())) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return");

             case 9:
              collectButton = cc.find("iconRight/button", _this3._turntableTriggerBar);
              collectButton.getComponent(cc.Button).interactable = false;
              _context3.next = 13;
              return cc.vv.gameData.getMapControl().show(cc.vv.gameData.getMapInfo());

             case 13:
              _context3.next = 15;
              return _this3.awaitTime(2);

             case 15:
              collectButton.getComponent(cc.Button).interactable = true;

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      unlockTurntable: function unlockTurntable() {
        if (cc.vv.gameData.GetSlotsScript()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        if (cc.vv.gameData.getNeedBet() <= cc.vv.gameData._deskInfo.mults.length) {
          turntableBarButton.getComponent(cc.Button).interactable = false;
          var bottom = cc.vv.gameData.GetBottomScript();
          bottom.SetBetIdx(cc.vv.gameData.getNeedBet());
        }
      },
      enter77: function enter77(avgBet) {
        cc.find("Canvas/safe_node/LMSlots_Subgame777").getComponent("LMSlots_Subgame777").showEnter(avgBet);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32bffq471tPILRvMLVR97UA", "TheRoundTableKnightsExplore_Pop");
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
    var spinRuslt = [ -120, -300, -240, -60, 0, -180 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        freeWinCoin: {
          default: null,
          type: cc.Node
        },
        freeCollectButton: {
          default: null,
          type: cc.Node
        },
        freeStartButton: {
          default: null,
          type: cc.Node
        },
        freeTimes: {
          default: null,
          type: cc.Node
        },
        extraFreeTimes: {
          default: null,
          type: cc.Node
        },
        mpFreeWinCoin: {
          default: null,
          type: cc.Node
        },
        mpFreeCollectButton: {
          default: null,
          type: cc.Node
        },
        mpExtraFreeTimes: {
          default: null,
          type: cc.Node
        },
        mpFreeStartButton: {
          default: null,
          type: cc.Node
        },
        mpFreeStartButton_can: {
          default: null,
          type: cc.Node
        },
        mpFreeMult1: {
          default: null,
          type: cc.Node
        },
        mpFreeMult2: {
          default: null,
          type: cc.Node
        },
        jpWinCoin: {
          default: null,
          type: cc.Node
        },
        jpCollectButton: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {},
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      hideWin: function hideWin(callBack) {
        var _this = this;
        var popBg = cc.find("popup", this.node);
        cc.tween(popBg).to(.3, {
          opacity: 0
        }).call(function() {
          callBack && callBack();
          _this.node.active = false;
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showFreeGameWinCoin: function showFreeGameWinCoin(num) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var show_popup, show_popupSp, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this3.showWin();
                _this3.freeCollectButton.active = false;
                _this3.freeWinCoin.active = false;
                show_popup = cc.find("freeGameWinCoin", _this3.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context3.next = 11;
                return _this3.awaitTime(.5);

               case 11:
                _this3.freeCollectButton.active = true;
                _this3.freeWinCoin.active = true;
                _this3._startAddCoin = true;
                Global.doRoallNumEff(_this3.freeWinCoin, Math.floor(.1 * num), num, 2.5, function() {
                  _this3._startAddCoin = false;
                }, null, 0, true);
                self = _this3;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success1) {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          self.freeCollectButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          if (self._startAddCoin) {
                            self._startAddCoin = false;
                            self.freeWinCoin.stopAllActions();
                            winCoinLabel = self.freeWinCoin.getComponent(cc.Label);
                            winCoinLabel.string = Global.FormatNumToComma(num);
                          }
                          _context.next = 5;
                          return self.awaitTime(.2);

                         case 5:
                          show_popupSp.setAnimation(0, "animation1_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          self.freeCollectButton.active = false;
                          self.freeWinCoin.active = false;
                          success1();

                         case 12:
                         case "end":
                          return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function(_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this3.freeCollectButton, collectFunc);
                _this3.freeCollectButton.getComponent(cc.Button).interactable = true;
                _this3.freeCollectButton.off("click");
                _this3.freeCollectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this3.freeCollectButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

               case 21:
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
      showWheelStart: function showWheelStart() {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popup, show_popupSp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_start_show);
                _this4.showWin();
                show_popup = cc.find("wheel", _this4.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  show_popup.active = false;
                  _this4.hideWin(function() {
                    sucess();
                  });
                  show_popupSp.setCompleteListener(null);
                });
                _context4.next = 10;
                return _this4.awaitTime(2.5);

               case 10:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);

               case 11:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x4, _x5) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      showFreeGameTimes: function showFreeGameTimes(num) {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var show_popup, show_popupSp, i, element, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this5.showWin();
                _this5.freeStartButton.active = false;
                _this5.freeTimes.active = false;
                show_popup = cc.find("freeGameTimes", _this5.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2_1", false);
                show_popupSp.addAnimation(0, "animation2_2", true);
                _context7.next = 11;
                return _this5.awaitTime(.5);

               case 11:
                _this5.freeStartButton.active = true;
                for (i = 0; i < _this5.freeTimes.children.length; i++) {
                  element = _this5.freeTimes.children[i];
                  element.active = false;
                }
                _this5.freeTimes.active = true;
                cc.find("freenum" + num, _this5.freeTimes).active = true;
                self = _this5;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success1) {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                         case 0:
                          self.freeStartButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          _context5.next = 4;
                          return self.awaitTime(.2);

                         case 4:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation2_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context5.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          self.freeStartButton.active = false;
                          self.freeTimes.active = false;
                          success1();

                         case 12:
                         case "end":
                          return _context5.stop();
                        }
                      }, _callee5);
                    }));
                    return function(_x8) {
                      return _ref6.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this5.freeStartButton, collectFunc);
                _this5.freeStartButton.getComponent(cc.Button).interactable = true;
                _this5.freeStartButton.off("click");
                _this5.freeStartButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this5.freeStartButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 21:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x6, _x7) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree: function showFreeGameWinFree(num) {
        var _this6 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var show_popup, show_popupSp, i, element;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this6.showWin();
                _this6.extraFreeTimes.active = false;
                show_popup = cc.find("freeGameWinFree", _this6.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation3_1", false);
                show_popupSp.addAnimation(0, "animation3_2", true);
                _context8.next = 10;
                return _this6.awaitTime(.5);

               case 10:
                for (i = 0; i < _this6.extraFreeTimes.children.length; i++) {
                  element = _this6.extraFreeTimes.children[i];
                  element.active = false;
                }
                _this6.extraFreeTimes.active = true;
                cc.find("freenum" + num, _this6.extraFreeTimes).active = true;
                _context8.next = 15;
                return _this6.awaitTime(1);

               case 15:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                show_popupSp.setAnimation(0, "animation3_3", false);
                show_popupSp.setCompleteListener(function() {
                  show_popup.active = false;
                  _this6.hideWin(function() {
                    sucess();
                  });
                  show_popupSp.setCompleteListener(null);
                });
                _context8.next = 20;
                return _this6.awaitTime(.5);

               case 20:
                _this6.extraFreeTimes.active = false;

               case 21:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x9, _x10) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      showMPFreeGameWinCoin: function showMPFreeGameWinCoin(num) {
        var _this7 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var show_popup, show_popupSp, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this7.showWin();
                _this7.mpFreeCollectButton.active = false;
                _this7.mpFreeWinCoin.active = false;
                show_popup = cc.find("mpFreeGameWinCoin", _this7.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context11.next = 11;
                return _this7.awaitTime(.5);

               case 11:
                _this7.mpFreeCollectButton.active = true;
                _this7.mpFreeWinCoin.active = true;
                _this7._startAddCoin = true;
                Global.doRoallNumEff(_this7.mpFreeWinCoin, Math.floor(.1 * num), num, 2.5, function() {
                  _this7._startAddCoin = false;
                }, null, 0, true);
                self = _this7;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success1) {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) switch (_context9.prev = _context9.next) {
                         case 0:
                          self.mpFreeCollectButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          if (self._startAddCoin) {
                            self._startAddCoin = false;
                            self.mpFreeWinCoin.stopAllActions();
                            winCoinLabel = self.mpFreeWinCoin.getComponent(cc.Label);
                            winCoinLabel.string = Global.FormatNumToComma(num);
                          }
                          _context9.next = 5;
                          return self.awaitTime(.2);

                         case 5:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation1_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context9.next = 10;
                          return self.awaitTime(.5);

                         case 10:
                          self.mpFreeCollectButton.active = false;
                          self.mpFreeWinCoin.active = false;
                          success1();

                         case 13:
                         case "end":
                          return _context9.stop();
                        }
                      }, _callee9);
                    }));
                    return function(_x13) {
                      return _ref10.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this7.mpFreeCollectButton, collectFunc);
                _this7.mpFreeCollectButton.getComponent(cc.Button).interactable = true;
                _this7.mpFreeCollectButton.off("click");
                _this7.mpFreeCollectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this7.mpFreeCollectButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 21:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x11, _x12) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree_sticky: function showFreeGameWinFree_sticky(num) {
        var _this8 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(sucess, failed) {
            var show_popup, show_popupSp, i, element, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this8.showWin();
                _this8.mpExtraFreeTimes.active = false;
                show_popup = cc.find("mpFreeGameWinFree", _this8.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2_1", false);
                show_popupSp.addAnimation(0, "animation2_2", true);
                _this8.mpFreeStartButton.active = false;
                _context14.next = 12;
                return _this8.awaitTime(.5);

               case 12:
                _this8.mpFreeStartButton.active = true;
                for (i = 0; i < _this8.mpExtraFreeTimes.children.length; i++) {
                  element = _this8.mpExtraFreeTimes.children[i];
                  element.active = false;
                }
                _this8.mpExtraFreeTimes.active = true;
                cc.find("freenum" + num, _this8.mpExtraFreeTimes).active = true;
                self = _this8;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success1) {
                      return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) switch (_context12.prev = _context12.next) {
                         case 0:
                          self.mpFreeStartButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          _context12.next = 4;
                          return self.awaitTime(.2);

                         case 4:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation2_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context12.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          self.mpExtraFreeTimes.active = false;
                          self.mpFreeStartButton.active = false;
                          success1();

                         case 12:
                         case "end":
                          return _context12.stop();
                        }
                      }, _callee12);
                    }));
                    return function(_x16) {
                      return _ref13.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this8.mpFreeStartButton, collectFunc);
                _this8.mpFreeStartButton.getComponent(cc.Button).interactable = true;
                _this8.mpFreeStartButton.off("click");
                _this8.mpFreeStartButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      _this8.mpFreeStartButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));

               case 22:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x14, _x15) {
            return _ref12.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree_can_reveal: function showFreeGameWinFree_can_reveal(mult1, mult2) {
        var _this9 = this;
        return new Promise(function() {
          var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(sucess, failed) {
            var show_popup, show_popupSp, i, element, _i, _element, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this9.showWin();
                show_popup = cc.find("mpFreeGameWinFree_can", _this9.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation3_1", false);
                show_popupSp.addAnimation(0, "animation3_2", true);
                _this9.mpFreeStartButton_can.active = false;
                for (i = 0; i < _this9.mpFreeMult1.children.length; i++) {
                  element = _this9.mpFreeMult1.children[i];
                  element.active = false;
                }
                for (_i = 0; _i < _this9.mpFreeMult2.children.length; _i++) {
                  _element = _this9.mpFreeMult2.children[_i];
                  _element.active = false;
                }
                _context17.next = 13;
                return _this9.awaitTime(.5);

               case 13:
                cc.find("freewild" + mult1, _this9.mpFreeMult1).active = true;
                cc.find("freewild" + mult2, _this9.mpFreeMult2).active = true;
                _this9.mpFreeStartButton_can.active = true;
                self = _this9;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success1) {
                      return regeneratorRuntime.wrap(function _callee15$(_context15) {
                        while (1) switch (_context15.prev = _context15.next) {
                         case 0:
                          self.mpFreeStartButton_can.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          _context15.next = 4;
                          return self.awaitTime(.2);

                         case 4:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation3_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context15.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          cc.find("freewild" + mult1, self.mpFreeMult1).active = false;
                          cc.find("freewild" + mult2, self.mpFreeMult2).active = false;
                          self.mpFreeStartButton_can.active = false;
                          success1();

                         case 13:
                         case "end":
                          return _context15.stop();
                        }
                      }, _callee15);
                    }));
                    return function(_x19) {
                      return _ref16.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this9.mpFreeStartButton_can, collectFunc);
                _this9.mpFreeStartButton_can.getComponent(cc.Button).interactable = true;
                _this9.mpFreeStartButton_can.off("click");
                _this9.mpFreeStartButton_can.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      _this9.mpFreeStartButton_can.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                })));

               case 22:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x17, _x18) {
            return _ref15.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree_moving: function showFreeGameWinFree_moving(num) {
        var _this10 = this;
        return new Promise(function() {
          var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(sucess, failed) {
            var show_popup, show_popupSp, i, element, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this10.showWin();
                _this10.mpExtraFreeTimes.active = false;
                show_popup = cc.find("mpFreeGameWinFree", _this10.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation4_1", false);
                show_popupSp.addAnimation(0, "animation4_2", true);
                _this10.mpFreeStartButton.active = false;
                _context20.next = 12;
                return _this10.awaitTime(.5);

               case 12:
                _this10.mpFreeStartButton.active = true;
                for (i = 0; i < _this10.mpExtraFreeTimes.children.length; i++) {
                  element = _this10.mpExtraFreeTimes.children[i];
                  element.active = false;
                }
                _this10.mpExtraFreeTimes.active = true;
                cc.find("freenum" + num, _this10.mpExtraFreeTimes).active = true;
                self = _this10;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success1) {
                      return regeneratorRuntime.wrap(function _callee18$(_context18) {
                        while (1) switch (_context18.prev = _context18.next) {
                         case 0:
                          self.mpFreeStartButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          _context18.next = 4;
                          return self.awaitTime(.2);

                         case 4:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation4_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context18.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          self.mpExtraFreeTimes.active = false;
                          self.mpFreeStartButton.active = false;
                          success1();

                         case 12:
                         case "end":
                          return _context18.stop();
                        }
                      }, _callee18);
                    }));
                    return function(_x22) {
                      return _ref19.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this10.mpFreeStartButton, collectFunc);
                _this10.mpFreeStartButton.getComponent(cc.Button).interactable = true;
                _this10.mpFreeStartButton.off("click");
                _this10.mpFreeStartButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                     case 0:
                      _this10.mpFreeStartButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context19.stop();
                    }
                  }, _callee19);
                })));

               case 22:
               case "end":
                return _context20.stop();
              }
            }, _callee20);
          }));
          return function(_x20, _x21) {
            return _ref18.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree_random: function showFreeGameWinFree_random(num) {
        var _this11 = this;
        return new Promise(function() {
          var _ref21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(sucess, failed) {
            var show_popup, show_popupSp, i, element, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this11.showWin();
                _this11.mpExtraFreeTimes.active = false;
                show_popup = cc.find("mpFreeGameWinFree", _this11.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation5_1", false);
                show_popupSp.addAnimation(0, "animation5_2", true);
                _this11.mpFreeStartButton.active = false;
                _context23.next = 12;
                return _this11.awaitTime(.5);

               case 12:
                _this11.mpFreeStartButton.active = true;
                for (i = 0; i < _this11.mpExtraFreeTimes.children.length; i++) {
                  element = _this11.mpExtraFreeTimes.children[i];
                  element.active = false;
                }
                _this11.mpExtraFreeTimes.active = true;
                cc.find("freenum" + num, _this11.mpExtraFreeTimes).active = true;
                self = _this11;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref22 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(success1) {
                      return regeneratorRuntime.wrap(function _callee21$(_context21) {
                        while (1) switch (_context21.prev = _context21.next) {
                         case 0:
                          self.mpFreeStartButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          _context21.next = 4;
                          return self.awaitTime(.2);

                         case 4:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation5_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context21.next = 9;
                          return self.awaitTime(.5);

                         case 9:
                          self.mpExtraFreeTimes.active = false;
                          self.mpFreeStartButton.active = false;
                          success1();

                         case 12:
                         case "end":
                          return _context21.stop();
                        }
                      }, _callee21);
                    }));
                    return function(_x25) {
                      return _ref22.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this11.mpFreeStartButton, collectFunc);
                _this11.mpFreeStartButton.getComponent(cc.Button).interactable = true;
                _this11.mpFreeStartButton.off("click");
                _this11.mpFreeStartButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
                  return regeneratorRuntime.wrap(function _callee22$(_context22) {
                    while (1) switch (_context22.prev = _context22.next) {
                     case 0:
                      _this11.mpFreeStartButton.stopAllActions();
                      collectFunc();

                     case 2:
                     case "end":
                      return _context22.stop();
                    }
                  }, _callee22);
                })));

               case 22:
               case "end":
                return _context23.stop();
              }
            }, _callee23);
          }));
          return function(_x23, _x24) {
            return _ref21.apply(this, arguments);
          };
        }());
      },
      showJackpotWinCoin: function showJackpotWinCoin(num, jpid) {
        var _this12 = this;
        return new Promise(function() {
          var _ref24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26(sucess, failed) {
            var show_popup, show_popupSp, self, collectFunc;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) switch (_context26.prev = _context26.next) {
               case 0:
                _context26.t0 = jpid;
                _context26.next = 1 === _context26.t0 ? 3 : 2 === _context26.t0 ? 5 : 3 === _context26.t0 ? 7 : 4 === _context26.t0 ? 9 : 11;
                break;

               case 3:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_mini);
                return _context26.abrupt("break", 11);

               case 5:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_minor);
                return _context26.abrupt("break", 11);

               case 7:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_major);
                return _context26.abrupt("break", 11);

               case 9:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_grand);
                return _context26.abrupt("break", 11);

               case 11:
                _this12.showWin();
                _this12.jpCollectButton.active = false;
                _this12.jpWinCoin.active = false;
                show_popup = cc.find("jpWinCoin", _this12.node);
                show_popup.active = true;
                show_popupSp = show_popup.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation" + (5 - jpid) + "_1", false);
                show_popupSp.addAnimation(0, "animation" + (5 - jpid) + "_2", true);
                _context26.next = 21;
                return _this12.awaitTime(.5);

               case 21:
                _this12.jpCollectButton.active = true;
                _this12.jpWinCoin.active = true;
                _this12._startAddCoin = true;
                Global.doRoallNumEff(_this12.jpWinCoin, Math.floor(.1 * num), num, 2.5, function() {
                  _this12._startAddCoin = false;
                }, null, 0, true);
                self = _this12;
                collectFunc = function collectFunc() {
                  return new Promise(function() {
                    var _ref25 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(success1) {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee24$(_context24) {
                        while (1) switch (_context24.prev = _context24.next) {
                         case 0:
                          self.jpCollectButton.getComponent(cc.Button).interactable = false;
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          if (self._startAddCoin) {
                            self._startAddCoin = false;
                            self.jpWinCoin.stopAllActions();
                            winCoinLabel = self.jpWinCoin.getComponent(cc.Label);
                            winCoinLabel.string = Global.FormatNumToComma(num);
                          }
                          _context24.next = 5;
                          return self.awaitTime(.2);

                         case 5:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                          show_popupSp.setAnimation(0, "animation" + (5 - jpid) + "_3", false);
                          show_popupSp.setCompleteListener(function() {
                            show_popup.active = false;
                            self.hideWin(function() {
                              sucess();
                            });
                            show_popupSp.setCompleteListener(null);
                          });
                          _context24.next = 10;
                          return self.awaitTime(.5);

                         case 10:
                          self.jpCollectButton.active = false;
                          self.jpWinCoin.active = false;
                          success1();

                         case 13:
                         case "end":
                          return _context24.stop();
                        }
                      }, _callee24);
                    }));
                    return function(_x28) {
                      return _ref25.apply(this, arguments);
                    };
                  }());
                };
                cc.vv.gameData.checkAutoPlay(_this12.jpCollectButton, collectFunc);
                _this12.jpCollectButton.getComponent(cc.Button).interactable = true;
                _this12.jpCollectButton.off("click");
                _this12.jpCollectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
                  return regeneratorRuntime.wrap(function _callee25$(_context25) {
                    while (1) switch (_context25.prev = _context25.next) {
                     case 0:
                      _this12.jpCollectButton.stopAllActions();
                      _context25.next = 3;
                      return collectFunc();

                     case 3:
                     case "end":
                      return _context25.stop();
                    }
                  }, _callee25);
                })));

               case 31:
               case "end":
                return _context26.stop();
              }
            }, _callee26);
          }));
          return function(_x26, _x27) {
            return _ref24.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aea2G9fG9EX5bl8jFm+APj", "TheRoundTableKnightsExplore_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _nowUpdatePool: 0
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var jpNodeName = jackpotNames[poolType];
        this.updataJackPoolLock(poolType, bLock);
        if (jpNodeName) {
          var safeNode = cc.find("Canvas/safe_node");
          var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
          if (jpNode) {
            var targetJpNode = cc.find("prizePool_" + jpNodeName, jpNode.node.parent);
            if (targetJpNode) {
              var lbl_num = cc.find("lbl_num", targetJpNode);
              var bg = cc.find("bg", targetJpNode);
              if (bLock) {
                bInit || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_lock);
                lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme219_4");
                Global.showSpriteGray(bg, true);
              } else {
                bInit || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_unlock);
                lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme219_3");
                Global.showSpriteGray(bg, false);
              }
            }
          }
        }
      },
      updataJackPoolLock: function updataJackPoolLock(index, isLock) {
        var tempIndex = index;
        if (isLock) {
          if (this._nowUpdatePool < tempIndex) return;
          this._nowUpdatePool = tempIndex;
        } else {
          if (this._nowUpdatePool > tempIndex) return;
          this._nowUpdatePool = tempIndex;
        }
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        if (jpNode) for (var i = 0; i < jackpotNames.length; i++) {
          var jpNodeName = jackpotNames[i];
          var tips = cc.find("tips_" + jpNodeName, jpNode.node.parent);
          if (tips) if (index === i) if (isLock) {
            cc.find("lock", tips).active = true;
            cc.find("unlock", tips).active = false;
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
            cc.find("lock", tips).active = false;
            cc.find("unlock", tips).active = true;
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
            tips.stopAllActions();
            tips.scale = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  TheRoundTableKnightsExplore_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aea32xJ1LpCR7+HC8dttmy+", "TheRoundTableKnightsExplore_Slots");
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
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _node_freeGame: null,
        _freeGameFinalWays: [],
        _isInFree: false,
        _colFree: 0,
        _rowFree: 0,
        _reelsFree: [],
        _freeSlotsNode: null,
        _prizePool: null,
        _normalMask: null,
        _freeMask: null,
        _canStop: false,
        _normalSpine: null,
        _freeTopAniNode: null,
        _wildTopNode: null,
        _wildMultNode: null,
        _currWildList: [],
        _currWildNodeList: [],
        _mapFree: false
      },
      Init: function Init() {
        var _this = this;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._colFree = this._cfg.col_free;
        this._rowFree = this._cfg.row_free;
        this.createReels(this._col, this._row);
        this.createFreeReels(this._colFree, this._rowFree);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.scheduleOnce(function() {
          _this.ReconnectShow();
        }, 0);
      },
      onLoad: function onLoad() {
        this._topAniNode = cc.find("reels/top_ani", this.node);
        this._freeSlotsNode = cc.find("slotsfree", this.node.parent);
        this._freeTopAniNode = cc.find("reels/top_ani", this._freeSlotsNode);
        this._prizePool = cc.find("LMSlots_PrizePool_1", this.node.parent).getComponent("TheRoundTableKnightsExplore_PrizePool");
        this._normalMask = cc.find("reels/mask", this.node);
        this._normalMask.opacity = 0;
        this._freeMask = cc.find("reels/mask", this._freeSlotsNode);
        this._freeMask.opacity = 0;
        this._normalSpine = cc.find("reels/spine", this.node);
        this._normalSpine.on("click", this.slotsSpine, this);
        this._wildTopNode = cc.find("wildTopNode", this.node.parent);
        this._wildMultNode = cc.find("reels/wildMultNode", this._freeSlotsNode);
        this._wildMultNode.active = false;
      },
      slotsSpine: function slotsSpine() {
        this._bottomScript.OnClickSpin();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._super();
        this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
        this._isInFree || cc.vv.gameData.getManage().resumeCasualAnimation();
      },
      RegisterEvent: function RegisterEvent() {},
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          this._reels.push(scp);
          scp.Init(i, row, this._topAniNode);
        }
      },
      createFreeReels: function createFreeReels(col, row) {
        this._freeSlotsNode.active = true;
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._freeSlotsNode);
          var scp = node.addComponent(reelCmp);
          this._reelsFree.push(scp);
          scp.Init(i, row, this._freeTopAniNode);
        }
        this._freeSlotsNode.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var showRandom, showSuiJiYa, nAddWin, nTotalBet, nMul, _showRandom, cards;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!msg.bonusGame) {
                _context.next = 8;
                break;
              }
              showRandom = Global.random(0, 100);
              if (!(showRandom > 50)) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return cc.vv.gameData.getYayaControl().showRandomAnimation();

             case 5:
              _this3.showYaYa(msg.bonusGame);
              _context.next = 21;
              break;

             case 8:
              showSuiJiYa = Global.random(0, 100);
              if (!(showSuiJiYa < 20)) {
                _context.next = 13;
                break;
              }
              cc.vv.gameData.getYayaControl().showYaYa(Global.random(1, 4));
              _context.next = 21;
              break;

             case 13:
              nAddWin = cc.vv.gameData.GetGameWin();
              nTotalBet = cc.vv.gameData.GetTotalBet();
              nMul = nAddWin / nTotalBet;
              if (!(nMul >= 10)) {
                _context.next = 21;
                break;
              }
              _showRandom = Global.random(0, 100);
              if (!(_showRandom > 50)) {
                _context.next = 21;
                break;
              }
              _context.next = 21;
              return cc.vv.gameData.getYayaControl().showRandomAnimation();

             case 21:
              _this3._gameInfo = msg;
              cards = msg.resultCards;
              _this3.SetSlotsResult(cards);
              _this3.SetReelStateInfo(cards);
              if (!_this3._mapFree) {
                _context.next = 39;
                break;
              }
              if (!(2 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 31;
                break;
              }
              _context.next = 29;
              return _this3.showRandomWild(msg.mapInfo);

             case 29:
              _context.next = 39;
              break;

             case 31:
              if (!(4 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 36;
                break;
              }
              _context.next = 34;
              return _this3.showMoveWild(msg.mapInfo);

             case 34:
              _context.next = 39;
              break;

             case 36:
              if (!(3 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 39;
                break;
              }
              _context.next = 39;
              return _this3.awaitTime(2);

             case 39:
              _this3._canStop = true;

             case 40:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showYaYa: function showYaYa(bonusGame) {
        var position = this.GetSymbolWorldPosByIdx(bonusGame.idx);
        var finalPosition = cc.vv.gameData.getYayaControl().node.convertToNodeSpaceAR(position);
        cc.vv.gameData.getYayaControl().showYaYa(bonusGame.type, finalPosition);
      },
      GetSymbolWorldPosByIdx: function GetSymbolWorldPosByIdx(idx) {
        var reels = this._reels;
        var _col = this._col;
        var _row = this._row;
        if (this._isInFree) {
          reels = this._reelsFree;
          _col = this._colFree;
          _row = this._rowFree;
        }
        var col = (idx - 1) % _col;
        var row = _row - Math.floor((idx - 1) / _col) - 1;
        var position = reels[col].GetSymbolPosByRow(row);
        var retPos = reels[col]._holderNode.convertToWorldSpaceAR(position);
        retPos.y += reels[col]._curY;
        return retPos;
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        for (var i = 0; i < reels.length; i++) {
          var item = reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      findJackPotBack: function findJackPotBack(arr) {
        var jinSeBeiJinNum = 0;
        for (var i = 0; i < arr.length; i++) {
          var element = arr[i];
          0 == jinSeBeiJinNum ? 1 === element && jinSeBeiJinNum++ : 1 === element && element === arr[i - 1] ? jinSeBeiJinNum++ : jinSeBeiJinNum = 0;
        }
        return jinSeBeiJinNum >= 4;
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        if (this._isInFree) {
          var acRow = cards.length / this._colFree;
          var reelResults = [];
          for (var i = 0; i < cards.length; i++) {
            var row = Math.floor(i / acRow);
            var col = i % this._colFree;
            if (this._cfg.symbol[cards[i]]) {
              var res = {};
              res.sid = cards[i];
              reelResults[col] || (reelResults[col] = []);
              reelResults[col].unshift(res);
            }
          }
          for (var _i = 0; _i < this._reelsFree.length; _i++) {
            var item = this._reelsFree[_i];
            var reelRes = reelResults[_i];
            item.SetResult(reelRes);
          }
        } else {
          var _acRow = cards.length / this._col;
          var _reelResults = [];
          for (var _i2 = 0; _i2 < cards.length; _i2++) {
            var _row2 = Math.floor(_i2 / _acRow);
            var _col2 = _i2 % this._col;
            if (this._cfg.symbol[cards[_i2]]) {
              var _res = {};
              _res.sid = cards[_i2];
              _reelResults[_col2] || (_reelResults[_col2] = []);
              _reelResults[_col2].unshift(_res);
            }
          }
          for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
            var _item = this._reels[_i3];
            var _reelRes = _reelResults[_i3];
            _item.SetResult(_reelRes);
          }
        }
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this4.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

               case 1:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showShake: function showShake(time, x, y) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                cc.find("Canvas/safe_node/slots").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/slotsfree").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/logo").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/LMSlots_PrizePool_1").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/spr_bg_normal").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/spr_bg_free").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/spr_bg_mapfree").runAction(cc.shake(time, x, y));
                _context3.next = 10;
                return _this5.awaitTime(time);

               case 10:
                Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.bell);
                sucess();

               case 12:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var mapInfo, _mapInfo, nAddWin, nTotalBet, nMul, _mapInfo2, progress, nWin, nTotal, _mapInfo3, i, key, symbol, _i4, _key, _symbol, data, _i5, element;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              if (!(_this6._cfg.MapConfig[_this6._gameInfo.mapInfo.currId].type > 3 && _this6._gameInfo.mapInfo.state > 0)) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return _this6.awaitTime(.2);

             case 4:
              _this6.setStopWildList(_this6._gameInfo.mapInfo);

             case 5:
              _this6._wildTopNode.active = false;
              if (_this6._isInFree) {
                _mapInfo = _this6._gameInfo.mapInfo;
                if (_mapInfo) {
                  cc.vv.gameData.setMapInfo(_mapInfo);
                  3 === _this6._cfg.MapConfig[_mapInfo.currId].type && _mapInfo.state > 0 && _this6.showWildMultEnd(_mapInfo.freeInfo.wildMult);
                }
              } else {
                mapInfo = _this6._gameInfo.mapInfo;
                if (mapInfo) {
                  cc.vv.gameData.setMapInfo(mapInfo);
                  cc.vv.gameData.getManage().TrunTableTriggerBarVal(mapInfo);
                }
              }
              if (!_this6._gameInfo.bonusGame) {
                _context4.next = 18;
                break;
              }
              _context4.next = 10;
              return cc.vv.gameData.getYayaControl().showYaYaResult(_this6._gameInfo.bonusGame);

             case 10:
              nAddWin = cc.vv.gameData.GetGameWin();
              nTotalBet = cc.vv.gameData.GetTotalBet();
              nMul = nAddWin / nTotalBet;
              if (!(nMul >= 5)) {
                _context4.next = 16;
                break;
              }
              _context4.next = 16;
              return _this6.showShake(1, 5, 5);

             case 16:
              _context4.next = 27;
              break;

             case 18:
              if (_this6._isInFree) {
                _context4.next = 27;
                break;
              }
              _mapInfo2 = _this6._gameInfo.mapInfo;
              if (!_mapInfo2) {
                _context4.next = 27;
                break;
              }
              progress = _mapInfo2.progressData.totalCnt / _mapInfo2.progressData.needCnt;
              if (!(progress >= 1)) {
                _context4.next = 27;
                break;
              }
              _context4.next = 25;
              return _this6.awaitTime(2.3);

             case 25:
              _context4.next = 27;
              break;

             case 27:
              _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) nTotal = cc.vv.gameData.GetGameTotalFreeWin(); else if (_this6._gameInfo.freeGameBonus && !_this6._gameInfo.freeGameBonus.isEnd) {
                nWin = _this6._gameInfo.freeGameBonus.winCoin;
                nTotal = nWin;
              }
              _context4.next = 33;
              return _this6.ShowWinCoin(nWin, nTotal, true);

             case 33:
              if (_this6._isInFree) {
                _context4.next = 69;
                break;
              }
              _mapInfo3 = _this6._gameInfo.mapInfo;
              if (!_mapInfo3) {
                _context4.next = 69;
                break;
              }
              if (!(_mapInfo3.state > 0)) {
                _context4.next = 69;
                break;
              }
              _context4.next = 39;
              return cc.vv.gameData.getMapControl().showTip();

             case 39:
              _context4.t0 = _this6._cfg.MapConfig[_mapInfo3.currId].type;
              _context4.next = 1 === _context4.t0 ? 42 : 2 === _context4.t0 ? 45 : 3 === _context4.t0 ? 51 : 4 === _context4.t0 ? 57 : 5 === _context4.t0 ? 63 : 69;
              break;

             case 42:
              cc.vv.gameData.getManage().enter77(_mapInfo3.startPrice);
              cc.vv.gameData.getManage().stopCasualAnimation();
              return _context4.abrupt("return");

             case 45:
              _context4.next = 47;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinFree_random(10);

             case 47:
              _context4.next = 49;
              return cc.vv.gameData.getQiePing().showMap(function() {
                _this6.showFreeGameSlots();
                _this6._mapFree = true;
              });

             case 49:
              _this6.ShowFreeGame(true);
              return _context4.abrupt("break", 69);

             case 51:
              _context4.next = 53;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinFree_can_reveal(_this6._cfg.MapConfig[_mapInfo3.currId].min, _this6._cfg.MapConfig[_mapInfo3.currId].max);

             case 53:
              _context4.next = 55;
              return cc.vv.gameData.getQiePing().showMap(function() {
                _this6.showFreeGameSlots();
                _this6.showWildMultInit();
                _this6._mapFree = true;
              });

             case 55:
              _this6.ShowFreeGame(true);
              return _context4.abrupt("break", 69);

             case 57:
              _context4.next = 59;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinFree_moving(10);

             case 59:
              _context4.next = 61;
              return cc.vv.gameData.getQiePing().showMap(function() {
                _this6.showFreeGameSlots();
                _this6._currWildList = [];
                _this6._currWildNodeList = [];
                _this6._wildTopNode.removeAllChildren();
                _this6._mapFree = true;
              });

             case 61:
              _this6.ShowFreeGame(true);
              return _context4.abrupt("break", 69);

             case 63:
              _context4.next = 65;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinFree_sticky(10);

             case 65:
              _context4.next = 67;
              return cc.vv.gameData.getQiePing().showMap(function() {
                _this6.showFreeGameSlots();
                _this6._currWildList = [];
                _this6._currWildNodeList = [];
                _this6._wildTopNode.removeAllChildren();
                _this6._mapFree = true;
              });

             case 67:
              _this6.ShowFreeGame(true);
              return _context4.abrupt("break", 69);

             case 69:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context4.next = 81;
                break;
              }
              if (!_this6._gameInfo.freeResult) {
                _context4.next = 79;
                break;
              }
              if (!(_this6._gameInfo.freeResult.freeInfo && _this6._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context4.next = 79;
                break;
              }
              for (i = 0; i < _this6._gameInfo.freeResult.freeInfo.scatterIdx.length; i++) {
                key = _this6._gameInfo.freeResult.freeInfo.scatterIdx[i];
                symbol = _this6.GetSymbolByIdx(key);
                symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              if (!(_this6._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context4.next = 79;
                break;
              }
              _context4.next = 77;
              return _this6.awaitTime(2);

             case 77:
              _context4.next = 79;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinFree(_this6._gameInfo.freeResult.freeInfo.freeCnt);

             case 79:
              _context4.next = 98;
              break;

             case 81:
              if (!_this6._gameInfo.captainWheel) {
                _context4.next = 98;
                break;
              }
              if (!_this6._gameInfo.captainWheel.scatterIdxs) {
                _context4.next = 98;
                break;
              }
              for (_i4 = 0; _i4 < _this6._gameInfo.captainWheel.scatterIdxs.length; _i4++) {
                _key = _this6._gameInfo.captainWheel.scatterIdxs[_i4];
                _symbol = _this6.GetSymbolByIdx(_key);
                _symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              _context4.next = 87;
              return _this6.awaitTime(2);

             case 87:
              _context4.next = 89;
              return cc.vv.gameData.getPopWinManage().showWheelStart();

             case 89:
              cc.vv.gameData.getQiePing().showQiePing1();
              data = [];
              for (_i5 = 0; _i5 < _this6._gameInfo.captainWheel.jackpotValues.length; _i5++) {
                element = _this6._gameInfo.captainWheel.jackpotValues[_i5];
                data.push({
                  prizeType: _i5,
                  pauseNum: element
                });
              }
              _this6._prizePool.PausePool(data);
              _context4.next = 95;
              return _this6.awaitTime(.5);

             case 95:
              _context4.next = 97;
              return cc.vv.gameData.getFreeWheel().showWheel();

             case 97:
              _this6._prizePool.ResumePausePool();

             case 98:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context4.next = 101;
                break;
              }
              _context4.next = 101;
              return _this6.CheckExitFreeGame();

             case 101:
              _this6.CanDoNextRound();

             case 102:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var rest, nTotal, mapInfo, captainWheel, data, i, element;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this7.showFreeGameSlots();
                _this7.ShowFreeGame(true);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                _this7._bottomScript.SetWin(nTotal);
              } else {
                _this7.hideFreeGameSlots(true);
                _this7.ShowFreeGame(false);
              }
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              mapInfo = cc.vv.gameData.getMapInfo();
              if (!mapInfo) {
                _context5.next = 24;
                break;
              }
              cc.vv.gameData.getMapControl().init(mapInfo);
              if (!(mapInfo.state > 0)) {
                _context5.next = 24;
                break;
              }
              _context5.t0 = _this7._cfg.MapConfig[mapInfo.currId].type;
              _context5.next = 1 === _context5.t0 ? 10 : 2 === _context5.t0 ? 13 : 3 === _context5.t0 ? 15 : 4 === _context5.t0 ? 18 : 5 === _context5.t0 ? 21 : 24;
              break;

             case 10:
              cc.vv.gameData.getManage().enter77(mapInfo.startPrice);
              cc.vv.gameData.getManage().stopCasualAnimation();
              return _context5.abrupt("return");

             case 13:
              _this7._mapFree = true;
              return _context5.abrupt("break", 24);

             case 15:
              _this7.showWildMultInit();
              _this7._mapFree = true;
              return _context5.abrupt("break", 24);

             case 18:
              _this7.showWildInit_moveing(mapInfo);
              _this7._mapFree = true;
              return _context5.abrupt("break", 24);

             case 21:
              _this7.showWildInit_sticky(mapInfo);
              _this7._mapFree = true;
              return _context5.abrupt("break", 24);

             case 24:
              captainWheel = cc.vv.gameData._deskInfo.captainWheel;
              if (!captainWheel) {
                _context5.next = 32;
                break;
              }
              data = [];
              for (i = 0; i < captainWheel.jackpotValues.length; i++) {
                element = captainWheel.jackpotValues[i];
                data.push({
                  prizeType: i,
                  pauseNum: element
                });
              }
              _this7._prizePool.PausePool(data);
              _context5.next = 31;
              return cc.vv.gameData.getFreeWheel().showWheel();

             case 31:
              _this7._prizePool.ResumePausePool();

             case 32:
              _this7._bottomScript.ShowBtnsByState("idle");
              _this7.CanDoNextRound();

             case 34:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return _this8.awaitTime(1);

                     case 2:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      Global.SlotsSoundMgr.stopBgm();
                      if (!_this8._mapFree) {
                        _context6.next = 13;
                        break;
                      }
                      _context6.next = 8;
                      return cc.vv.gameData.getPopWinManage().showMPFreeGameWinCoin(nWin);

                     case 8:
                      _context6.next = 10;
                      return cc.vv.gameData.getQiePing().showMap(function() {
                        _this8.hideFreeGameSlots();
                      });

                     case 10:
                      _this8._mapFree = false;
                      _context6.next = 17;
                      break;

                     case 13:
                      _context6.next = 15;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin);

                     case 15:
                      _context6.next = 17;
                      return cc.vv.gameData.getQiePing().showChuan(function() {
                        _this8.hideFreeGameSlots();
                      });

                     case 17:
                      _this8.ShowFreeGame(false);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.leaf_close);
                      _context6.next = 21;
                      return _this8.ShowWinCoin(nWin, nTotal, true);

                     case 21:
                      sucess();

                     case 22:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      ShowGameview: function ShowGameview(bFree, init) {
        this._isInFree = bFree;
        cc.vv.gameData.getManage().ShowGameview(bFree);
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (bFree) {
          this._freeSlotsNode.active = true;
          cc.find("reels", this.node).active = false;
          mapInfo && this._cfg.MapConfig[mapInfo.currId].type > 1 && mapInfo.state > 0 ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.mapfree_bgm) : Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
        } else {
          this._freeSlotsNode.active = false;
          cc.find("reels", this.node).active = true;
          init || Global.SlotsSoundMgr.playNormalBgm(true);
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var mapFree = cc.find("Canvas/safe_node/spr_bg_mapfree");
        if (mapInfo) if (this._cfg.MapConfig[mapInfo.currId].type > 1 && mapInfo.state > 0) {
          mapFree.active = bFree;
          normalFree.active = false;
        } else {
          normalFree.active = bFree;
          mapFree.active = false;
        } else {
          normalFree.active = bFree;
          mapFree.active = false;
        }
        normalBg.active = !bFree;
        cc.find("Canvas/safe_node/character").active = !bFree;
      },
      ShowFreeGame: function ShowFreeGame(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
        } else this._bottomScript.ShowFreeModel(false);
      },
      StartMove: function StartMove() {
        this._isInFree || Global.SlotsSoundMgr.playNormalBgm();
        this._normalSpine.getComponent(cc.Button).interactable = false;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this._isInFree ? this.MoveReels(this._reelsFree) : this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canStop = false;
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (this._mapFree) {
          this.showMask(this._cfg.MapConfig[mapInfo.currId].type > 1);
          if (this._cfg.MapConfig[mapInfo.currId].type > 1) {
            this._wildTopNode.active = true;
            if (2 === this._cfg.MapConfig[mapInfo.currId].type) this._wildTopNode.removeAllChildren(); else if (3 === this._cfg.MapConfig[mapInfo.currId].type) {
              this._wildTopNode.removeAllChildren();
              this.showWildMultStart();
            }
          }
        } else this._wildTopNode.removeAllChildren();
      },
      showFreeGameSlots: function showFreeGameSlots() {
        var _this9 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var i, element;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                _this9.ShowGameview(true);
                cc.vv.gameData.getManage().stopCasualAnimation();
                _this9._freeSlotsNode.active = true;
                for (i = 0; i < _this9.node.children.length; i++) {
                  element = _this9.node.children[i];
                  element.active = false;
                }
                cc.vv.gameData.getManage().showTurntableTriggerBar(true);
                sucess();

               case 6:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      hideFreeGameSlots: function hideFreeGameSlots(init) {
        var _this10 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var i, reel, j, symbol, _i6, element;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                if (_this10._freeSlotsNode) {
                  cc.vv.gameData.getManage().showTurntableTriggerBar(false);
                  cc.vv.gameData.getManage().resumeCasualAnimation();
                  _this10._freeSlotsNode.active = false;
                  _this10._wildMultNode.active = false;
                  _this10._wildTopNode.removeAllChildren();
                  for (i = 0; i < _this10._reelsFree.length; i++) {
                    reel = _this10._reelsFree[i];
                    for (j = 0; j < reel._symbols.length; j++) {
                      symbol = reel._symbols[j];
                      symbol.ShowNormal();
                      symbol.ShowKuang(false);
                    }
                  }
                  for (_i6 = 0; _i6 < _this10.node.children.length; _i6++) {
                    element = _this10.node.children[_i6];
                    element.active = true;
                  }
                  _this10.ShowGameview(false, init);
                }
                sucess();

               case 2:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        if (!this._bStopRightnow) {
          var isPlayAnit = false;
          for (var i = 0; i < reels.length; i++) {
            var idx = reels[i].GetReelIdx();
            idx == colIdx + 1 && (isPlayAnit = reels[i].playAntiAnimation());
            if (idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._gameInfo && !this._gameInfo.bonusGame && this._bottomScript.ShowBtnsByState("moveing_2");
            this.showMask(false);
            var reels = this._reels;
            this._isInFree && (reels = this._reelsFree);
            for (var i = 0; i < reels.length; i++) {
              var item = reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (!this._cfg.reelStateInfo) return;
        var reels = this._reels;
        var tempcol = this._col;
        if (this._isInFree) {
          reels = this._reelsFree;
          tempcol = this._colFree;
        }
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % tempcol;
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
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i7 = 0; _i7 < reelResults.length; _i7++) {
              var item = reels[_i7];
              var reelRes = reelResults[_i7];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i7] > 0 && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && (stateInfo.isStop = true);
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
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        if (this._isInFree) {
          var col = (idx - 1) % this._colFree;
          var row = this._rowFree - Math.floor((idx - 1) / this._colFree) - 1;
          return this._reelsFree[col].GetSymbolByRow(row);
        }
        var _col3 = (idx - 1) % this._col;
        var _row3 = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[_col3].GetSymbolByRow(_row3);
      },
      findAllShouJiSymbol: function findAllShouJiSymbol() {
        var ret = [];
        if (this._isInFree) for (var i = 0; i < this._reelsFree.length; i++) {
          var reel = this._reelsFree[i];
          for (var j = 0; j < reel._symbols.length - 1; j++) {
            var symbol = reel._symbols[j];
            3 === symbol._id && ret.push(symbol);
          }
        } else for (var _i8 = 0; _i8 < this._reels.length; _i8++) {
          var _reel = this._reels[_i8];
          for (var _j = 0; _j < _reel._symbols.length - 1; _j++) {
            var _symbol2 = _reel._symbols[_j];
            3 === _symbol2._id && ret.push(_symbol2);
          }
        }
        return ret;
      },
      showMask: function showMask(isShow) {
        isShow ? this._isInFree ? cc.tween(this._freeMask).to(.3, {
          opacity: 160
        }).start() : cc.tween(this._normalMask).to(.3, {
          opacity: 160
        }).start() : this._isInFree ? cc.tween(this._freeMask).to(.3, {
          opacity: 0
        }).start() : cc.tween(this._normalMask).to(.3, {
          opacity: 0
        }).start();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canStop;
      },
      showRandomWild: function showRandomWild(mapInfo) {
        var _this11 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
            var i, idx, tempNode, position, finalPosition;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                i = 0;

               case 1:
                if (!(i < mapInfo.freeInfo.randomWilds.currIdxs.length)) {
                  _context10.next = 17;
                  break;
                }
                idx = mapInfo.freeInfo.randomWilds.currIdxs[i];
                tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this11._cfg.symbolPrefab));
                position = _this11.GetSymbolWorldPosByIdx(idx);
                finalPosition = _this11._wildTopNode.convertToNodeSpaceAR(position);
                tempNode.parent = _this11._wildTopNode;
                tempNode.position = finalPosition;
                cc.find("w1", tempNode).active = true;
                cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                cc.find("w1", tempNode).getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.random_wild);
                _context10.next = 14;
                return _this11.awaitTime(.5);

               case 14:
                i++;
                _context10.next = 1;
                break;

               case 17:
                sucess();

               case 18:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      showWildMultInit: function showWildMultInit() {
        this._wildMultNode.active = true;
        var spineMask = cc.find("spineMask", this._wildMultNode);
        spineMask.active = false;
        var spine = cc.find("spine", this._wildMultNode);
        spine.active = true;
        var spineSp = spine.getComponent(sp.Skeleton);
        spineSp.setAnimation(0, "animation1_2", true);
        var multNode = cc.find("spine/mult", this._wildMultNode);
        multNode.scale = 0;
      },
      showWildMultStart: function showWildMultStart() {
        var spineMask = cc.find("spineMask", this._wildMultNode);
        spineMask.active = true;
        var spineMaskSp = spineMask.getComponent(sp.Skeleton);
        spineMaskSp.setAnimation(0, "animation4", false);
        spineMaskSp.addAnimation(0, "animation1_1", true);
        var spine = cc.find("spine", this._wildMultNode);
        spine.active = true;
        var spineSp = spine.getComponent(sp.Skeleton);
        spineSp.setAnimation(0, "animation1_2", true);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.leaf_close);
      },
      showWildMultEnd: function showWildMultEnd(mult) {
        var multNode = cc.find("spine/mult", this._wildMultNode);
        multNode.scale = 0;
        multNode.getComponent(cc.Label).string = "X" + mult;
        var spineMask = cc.find("spineMask", this._wildMultNode);
        spineMask.active = true;
        var spineMaskSp = spineMask.getComponent(sp.Skeleton);
        spineMaskSp.setAnimation(0, "animation2", false);
        spineMaskSp.setCompleteListener(function() {
          cc.tween(multNode).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          spineMask.active = false;
          spineMaskSp.setCompleteListener(null);
        });
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.leaf_open);
      },
      showWildMultWinAnimation: function showWildMultWinAnimation() {
        var spine = cc.find("spine", this._wildMultNode);
        spine.active = true;
        var spineSp = spine.getComponent(sp.Skeleton);
        spineSp.setAnimation(0, "animation3", true);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i9 = 0; _i9 < this._gameInfo.scatterZJLuXian.indexs.length; _i9++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i9];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
        var wildAnimation = false;
        for (var _key2 in allWinIdx) if (3 == _key2 || 8 == _key2 || 13 == _key2 || 18 == _key2 || 23 == _key2 || 28 == _key2 || 33 == _key2 || 38 == _key2) {
          wildAnimation = true;
          break;
        }
        wildAnimation && this.showWildMultWinAnimation();
      },
      showWildInit_moveing: function showWildInit_moveing(mapInfo) {
        for (var i = 0; i < mapInfo.freeInfo.moveWilds.currIdxs.length; i++) {
          var idx = mapInfo.freeInfo.moveWilds.currIdxs[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          this._currWildNodeList[idx] = tempNode;
        }
        this._currWildList = mapInfo.freeInfo.moveWilds.currIdxs || [];
      },
      showWildInit_sticky: function showWildInit_sticky(mapInfo) {
        for (var i = 0; i < mapInfo.freeInfo.stickyWilds.existIdxs.length; i++) {
          var idx = mapInfo.freeInfo.stickyWilds.existIdxs[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          this._currWildNodeList[idx] = tempNode;
        }
        this._currWildList = mapInfo.freeInfo.stickyWilds.existIdxs || [];
      },
      showStopWild: function showStopWild(idx, symbol) {
        if (!this._currWildNodeList[idx]) {
          this._wildTopNode.active = true;
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          this._currWildNodeList[idx] = tempNode;
        }
      },
      setStopWildList: function setStopWildList(mapInfo) {
        if (this._cfg.MapConfig[mapInfo.currId].type < 4) return;
        4 == this._cfg.MapConfig[mapInfo.currId].type ? this._currWildList = mapInfo.freeInfo.moveWilds.currIdxs || [] : 5 == this._cfg.MapConfig[mapInfo.currId].type && (this._currWildList = mapInfo.freeInfo.stickyWilds.currIdxs || []);
      },
      showMoveWild: function showMoveWild(mapInfo) {
        var _this12 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var tempNodeList, i, preidx, curridx, position, finalPosition;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                tempNodeList = [];
                for (i = 0; i < mapInfo.freeInfo.moveWilds.prevIdxs.length; i++) {
                  preidx = mapInfo.freeInfo.moveWilds.prevIdxs[i];
                  curridx = mapInfo.freeInfo.moveWilds.currIdxs[i];
                  position = _this12.GetSymbolWorldPosByIdx(curridx);
                  finalPosition = _this12._wildTopNode.convertToNodeSpaceAR(position);
                  cc.tween(_this12._currWildNodeList[preidx]).to(1, {
                    position: finalPosition
                  }).start();
                  tempNodeList[curridx] = _this12._currWildNodeList[preidx];
                }
                _this12._currWildNodeList = tempNodeList;
                _this12._currWildList = mapInfo.freeInfo.moveWilds.currIdxs || [];
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.moving_wild);
                _context11.next = 7;
                return _this12.awaitTime(1.2);

               case 7:
                sucess();

               case 8:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      getPoolIsLocked: function getPoolIsLocked(id) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[id - 1]).getComponent("LMSlotMachine_PrizePool");
        return target.isLocked();
      },
      showWinJackPoolAnimation: function showWinJackPoolAnimation(index) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[index - 1]);
        if (target) {
          var winEffect = cc.find("winEffect", target);
          winEffect.active = true;
          var winEffectSp = winEffect.getComponent(sp.Skeleton);
          winEffectSp.setAnimation(0, "animation" + (5 - index) + "_1", true);
        }
      },
      hideWinJackPoolAnimation: function hideWinJackPoolAnimation(index) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[index - 1]);
        if (target) {
          var winEffect = cc.find("winEffect", target);
          winEffect.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheRoundTableKnightsExplore_freeWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7036cIOLBMQbRiIWlAq5mp", "TheRoundTableKnightsExplore_freeWheel");
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
    var speed = 1540;
    var g = 570;
    cc.Class({
      extends: cc.Component,
      properties: {
        spin: {
          default: null,
          type: cc.Node
        },
        anniuEffect: {
          default: null,
          type: cc.Node
        },
        huoxing: {
          default: null,
          type: cc.Node
        },
        zhongjiang: {
          default: null,
          type: cc.Node
        },
        rollNode: {
          default: null,
          type: cc.Node
        },
        _rollNodeList: [],
        _startMove: false,
        _trueSpeed: 0,
        _startStop: false,
        _readStop: false,
        _resultNode: null,
        _sucess: null,
        _resultData: null
      },
      onLoad: function onLoad() {
        this.spin.on("click", this.onSpin, this);
        for (var i = 15; i >= 0; i--) this._rollNodeList[this._rollNodeList.length] = cc.find("node" + i, this.rollNode);
      },
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showWheel: function showWheel() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var anniuSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.wheel_bgm);
                cc.vv.gameData.getManage().stopCasualAnimation();
                _this2._sucess = sucess;
                _this2.node.active = true;
                cc.find("Canvas/safe_node/character").active = false;
                anniuSp = _this2.anniuEffect.getComponent(sp.Skeleton);
                anniuSp.setAnimation(0, "animation", true);
                _this2.huoxing.active = false;
                _this2.zhongjiang.active = false;
                _this2.spin.getComponent(cc.Button).interactable = true;
                cc.vv.gameData.checkAutoPlay(_this2.spin, _this2.onSpin.bind(_this2));

               case 11:
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
      onSpin: function onSpin() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_click);
        this.spin.stopAllActions();
        this.spin.getComponent(cc.Button).interactable = false;
        var anniuSp = this.anniuEffect.getComponent(sp.Skeleton);
        anniuSp.setAnimation(0, "animation2", false);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        cc.vv.NetManager.send(req);
      },
      onSpinWheel: function onSpinWheel(data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._resultData = data;
              _this3._startMove = true;
              _this3._trueSpeed = 0;
              _this3._startStop = false;
              _this3.zhongjiang.active = false;
              _this3.huoxing.active = true;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_roll);
              _context2.next = 9;
              return _this3.awaitTime(3.5);

             case 9:
              _this3._readStop = true;
              data.itemId && (_this3._resultNode = cc.find("node" + (data.itemId - 1), _this3.rollNode));

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      endSpin: function endSpin() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              if (!_this4._resultData.freeInfo) {
                _context3.next = 8;
                break;
              }
              _context3.next = 4;
              return cc.vv.gameData.getPopWinManage().showFreeGameTimes(_this4._resultData.freeInfo.freeCnt);

             case 4:
              cc.vv.gameData.AddTotalFreeTime(_this4._resultData.freeInfo.freeCnt);
              _context3.next = 7;
              return cc.vv.gameData.getQiePing().showChuan(function() {
                cc.vv.gameData.GetSlotsScript().showFreeGameSlots();
                _this4.hide();
              });

             case 7:
              cc.vv.gameData.GetSlotsScript().ShowFreeGame(true);

             case 8:
              if (!_this4._resultData.jackpot) {
                _context3.next = 23;
                break;
              }
              if (!cc.vv.gameData.GetSlotsScript().getPoolIsLocked(_this4._resultData.jackpot.id)) {
                _context3.next = 14;
                break;
              }
              _context3.next = 12;
              return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(_this4._resultData.jackpot.value);

             case 12:
              _context3.next = 16;
              break;

             case 14:
              _context3.next = 16;
              return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(_this4._resultData.jackpot.value, _this4._resultData.jackpot.id);

             case 16:
              _context3.next = 18;
              return cc.vv.gameData.getQiePing().showQiePing1(function() {
                _this4.hide();
                cc.find("Canvas/safe_node/character").active = true;
                cc.vv.gameData.GetSlotsScript().hideWinJackPoolAnimation(_this4._resultData.jackpot.id);
              });

             case 18:
              nTotal = _this4._resultData.jackpot.value + cc.vv.gameData.GetBottomScript().getCurrentWin();
              cc.vv.gameData.AddCoin(_this4._resultData.jackpot.value);
              _context3.next = 22;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(_this4._resultData.jackpot.value, nTotal, true);

             case 22:
              Global.SlotsSoundMgr.playNormalBgm(true);

             case 23:
              _this4.exitWheel();

             case 24:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      startWheel: function startWheel(length) {
        for (var i = 0; i < this._rollNodeList.length; i++) {
          var element = this._rollNodeList[i];
          element.y -= length;
        }
        var halfHeight = .5 * this.rollNode.height;
        var firstNode = this._rollNodeList[0];
        if (firstNode.y <= -halfHeight - .5 * firstNode.height) {
          var changeNode = this._rollNodeList.shift();
          var lastNode = this._rollNodeList[this._rollNodeList.length - 1];
          changeNode.y = lastNode.y + .5 * lastNode.height + .5 * changeNode.height;
          this._rollNodeList.push(changeNode);
        }
        if (this._readStop && this._resultNode) {
          var pos = Math.abs(this._resultNode.y) - 6;
          if (pos < 20) {
            this._startStop = true;
            this._startMove = false;
            this._readStop = false;
          }
        }
      },
      hide: function hide() {
        Global.SlotsSoundMgr.stopBgm();
        cc.vv.gameData.getManage().resumeCasualAnimation();
        this.node.active = false;
      },
      exitWheel: function exitWheel() {
        if (this._sucess) {
          this._sucess();
          this._sucess = null;
        }
      },
      update: function update(dt) {
        if (this._startMove) {
          this._trueSpeed += dt * g;
          this._trueSpeed > speed && (this._trueSpeed = speed);
          this.startWheel(dt * this._trueSpeed);
        }
        if (this._startStop) {
          this._trueSpeed -= dt * g;
          if (this._trueSpeed < 0) {
            this._trueSpeed = 0;
            this._startStop = false;
            this.moveToResult();
          }
          this.startWheel(dt * this._trueSpeed);
        }
      },
      moveToResult: function moveToResult() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var moveLength, i, element, actionName;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              moveLength = _this5._resultNode.y - 6;
              for (i = 0; i < _this5._rollNodeList.length; i++) {
                element = _this5._rollNodeList[i];
                cc.tween(element).by(.2, {
                  y: -moveLength
                }).start();
              }
              _context4.next = 4;
              return _this5.awaitTime(.2);

             case 4:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.option);
              _this5.huoxing.active = false;
              _this5.zhongjiang.active = true;
              actionName = "animation2";
              "node3" !== _this5._resultNode.name && "node9" !== _this5._resultNode.name && "node15" !== _this5._resultNode.name || (actionName = "animation");
              _this5.zhongjiang.getComponent(sp.Skeleton).setAnimation(0, actionName, true);
              if (_this5._resultData.jackpot) {
                _this5.node.runAction(cc.shake(.5, 10, 10));
                cc.vv.gameData.GetSlotsScript().showWinJackPoolAnimation(_this5._resultData.jackpot.id);
              }
              _context4.next = 13;
              return _this5.awaitTime(.5);

             case 13:
              _this5.endSpin();

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
  TheRoundTableKnightsExplore_mapControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e638R1JR5OprDyfMvjmLjy", "TheRoundTableKnightsExplore_mapControl");
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
    var scrollPos = [ 0, 0, 0, 0, 0, 0, 0, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .8, .8, .8, .8, .8, .8, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        mapNode: {
          default: null,
          type: cc.Node
        },
        backButton: {
          default: null,
          type: cc.Node
        },
        jueSe: {
          default: null,
          type: cc.Node
        },
        content: {
          default: null,
          type: cc.Node
        },
        _roadList: [],
        _pointList: [],
        _pointNum: 0
      },
      onLoad: function onLoad() {
        this.backButton.on("click", this.onBackGame, this);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road1/inportNode1", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road1/inportNode2", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao1", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road2/inportNode3", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road2/inportNode4", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road2/inportNode5", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao2", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road3/inportNode6", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road3/inportNode7", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road3/inportNode8", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road3/inportNode9", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao3", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road4/inportNode10", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road4/inportNode11", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road4/inportNode12", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road4/inportNode13", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road4/inportNode14", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao4", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode15", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode16", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode17", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode18", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode19", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road5/inportNode20", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao5", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode21", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode22", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode23", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode24", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode25", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode26", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/road6/inportNode27", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao6", this.content);
        var num = [ 3, 4, 5, 6, 7, 8 ];
        for (var i = 0; i < 6; i++) for (var j = 0; j < num[i]; j++) {
          var road = cc.find("roadRoot/road" + (i + 1) + "/road" + (i + 1) + "_" + j, this.content);
          this._roadList.push(road);
        }
      },
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      init: function init(mapInfo) {
        this._pointNum = mapInfo.currId;
      },
      initNode: function initNode() {
        for (var i = 0; i < this._pointNum; i++) this._roadList[i].active = true;
        for (var _i = 0; _i < this._pointNum - 1; _i++) {
          var element = this._pointList[_i];
          if (-1 !== element.name.indexOf("dao")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation4", true);
            cc.find("biaoqian/normal", element).active = false;
          } else cc.find("small1", element).active = false;
        }
        if (this._pointNum > 0) {
          var pointNode = this._pointList[this._pointNum - 1];
          var position = pointNode.convertToWorldSpaceAR(cc.v2(0, 0));
          var finalPosition = this.content.convertToNodeSpaceAR(position);
          this.jueSe.position = finalPosition;
        }
      },
      resetMap: function resetMap() {
        for (var i = 0; i < this._roadList.length; i++) this._roadList[i].active = false;
        for (var _i2 = 0; _i2 < this._pointList.length; _i2++) {
          var element = this._pointList[_i2];
          if (-1 !== element.name.indexOf("dao")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation3", true);
            cc.find("biaoqian/normal", element).active = true;
          } else cc.find("small1", element).active = true;
        }
        this.jueSe.position = cc.v2(-181.609, -621.102);
        this._pointNum = 0;
      },
      show: function show() {
        var _this2 = this;
        this.mapNode.active = true;
        cc.vv.gameData.getManage().stopCasualAnimation();
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_open);
        this.scheduleOnce(function() {
          33 === _this2._pointNum ? _this2.resetMap() : _this2.initNode();
          _this2.mapNode.y = cc.winSize.height;
          _this2.backButton.scale = 0;
          _this2.backButton.getComponent(cc.Button).interactable = true;
          cc.tween(_this2.mapNode).to(.2, {
            y: 0
          }).call(function() {
            cc.tween(_this2.backButton).to(.2, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }).start();
          _this2.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
          _this2.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this2._pointNum - 1], 0);
        }, 0);
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
      },
      showTip: function showTip() {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3.mapNode.active = true;
          cc.vv.gameData.getManage().stopCasualAnimation();
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_open);
          _this3.scheduleOnce(function() {
            33 === _this3._pointNum ? _this3.resetMap() : _this3.initNode();
            _this3.mapNode.y = cc.winSize.height;
            _this3.backButton.scale = 0;
            cc.tween(_this3.mapNode).to(.2, {
              y: 0
            }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                 case 0:
                  _this3.jumpToNext();
                  _context.next = 3;
                  return _this3.awaitTime(3);

                 case 3:
                  _this3.hide();
                  _context.next = 6;
                  return _this3.awaitTime(.2);

                 case 6:
                  sucess();

                 case 7:
                 case "end":
                  return _context.stop();
                }
              }, _callee);
            }))).start();
            _this3.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
            _this3.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this3._pointNum - 1], 0);
          }, 0);
        });
      },
      onBackGame: function onBackGame() {
        this.backButton.getComponent(cc.Button).interactable = false;
        this.hide();
        this.scheduleOnce(function() {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
        }, .2);
      },
      hide: function hide() {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_close);
        cc.tween(this.mapNode).to(.2, {
          y: cc.winSize.height
        }).call(function() {
          _this4.mapNode.active = false;
          cc.vv.gameData.getManage().resumeCasualAnimation();
        }).start();
      },
      jumpToNext: function jumpToNext() {
        var _this5 = this;
        this._pointNum++;
        this._pointNum > 33 && (this._pointNum = 33);
        var pointNode = this._pointList[this._pointNum - 1];
        var position = pointNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var finalPosition = this.content.convertToNodeSpaceAR(position);
        cc.tween(this.jueSe).delay(.25).to(.25, {
          position: finalPosition
        }).start();
        this.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this.jueSe.getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
        this.jueSe.getComponent(sp.Skeleton).addAnimation(0, "animation1", true);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pass1);
        this.scheduleOnce(function() {
          for (var i = 0; i < _this5._pointNum; i++) _this5._roadList[i].active = true;
          for (var _i3 = 0; _i3 < _this5._pointNum - 1; _i3++) {
            var element = _this5._pointList[_i3];
            if (-1 !== element.name.indexOf("dao")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation4", true);
              cc.find("biaoqian/normal", element).active = false;
            } else cc.find("small1", element).active = false;
          }
          if (-1 !== pointNode.name.indexOf("dao")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation3", true);
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pass3);
          } else {
            var chufa = cc.find("chufa", pointNode);
            chufa.active = true;
            chufa.getComponent(sp.Skeleton).setCompleteListener(function() {
              chufa.getComponent(sp.Skeleton).setCompleteListener(null);
              chufa.active = false;
            });
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pass2);
          }
          _this5.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this5._pointNum - 1], 1);
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_qiePing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58128c7ncJLlIUf+iquCNxD", "TheRoundTableKnightsExplore_qiePing");
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
        chuan: {
          default: null,
          type: cc.Node
        },
        qiepin1: {
          default: null,
          type: cc.Node
        },
        qiepin2: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showChuan: function showChuan(callBack) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var spine;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_free);
                _this2.chuan.active = true;
                _this2.chuan.opacity = 0;
                cc.tween(_this2.chuan).to(.3, {
                  opacity: 255
                }).start();
                spine = cc.find("yase", _this2.chuan);
                spine.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine.getComponent(sp.Skeleton).setCompleteListener(null);
                  cc.tween(_this2.chuan).to(.3, {
                    opacity: 0
                  }).start();
                  _this2.chuan.active = false;
                  sucess();
                });
                _context.next = 9;
                return _this2.awaitTime(2);

               case 9:
                callBack && callBack();

               case 10:
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
      showQiePing1: function showQiePing1(callBack) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_wheel);
                _this3.qiepin1.active = true;
                show_popupSp = _this3.qiepin1.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this3.qiepin1.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _this3._showQiePing2();
                _context2.next = 8;
                return _this3.awaitTime(.5);

               case 8:
                callBack && callBack();

               case 9:
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
      _showQiePing2: function _showQiePing2() {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this4.qiepin2.active = true;
                show_popupSp = _this4.qiepin2.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this4.qiepin2.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });

               case 4:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showMap: function showMap(callBack) {
        var _this5 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_mapfree);
                _this5.map.active = true;
                show_popupSp = _this5.map.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this5.map.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context4.next = 7;
                return _this5.awaitTime(3);

               case 7:
                callBack && callBack();

               case 8:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f49095WZ9J9oV7YEOJ/N5o", "TheRoundTableKnightsExplore_reel");
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
      properties: {
        _isShowScatter: false
      },
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this._isShowScatter = false;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
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
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      StartRecycleSymbol: function StartRecycleSymbol() {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (this._cfg.MapConfig[mapInfo.currId].type > 3) for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          if (1 === symbol._id) {
            var idx = this._reelIdx + 1 + (this._cfg.row_free - i - 1) * this._cfg.col_free;
            cc.vv.gameData.GetSlotsScript().showStopWild(idx, symbol);
          }
        }
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheRoundTableKnightsExplore_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d836UJsFBCz4kxTtPT0BSO", "TheRoundTableKnightsExplore_sound");
    "use strict";
    var _properties;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: (_properties = {
        soundPath: {
          default: "games/TheRoundTableKnightsExplore/",
          override: true
        },
        bonus_stop: {
          default: "",
          override: true
        },
        scatter_ant: {
          default: "",
          override: true
        },
        bonus_ant: {
          default: "",
          override: true
        },
        base_bgm: {
          default: "base_bgm",
          override: true
        },
        reel_stop: {
          default: "reel_stop",
          override: true
        },
        scatter_stop: {
          default: "scatter_notify",
          override: true
        }
      }, _defineProperty(_properties, "base_bgm", "base_bgm"), _defineProperty(_properties, "bell", "bell"), 
      _defineProperty(_properties, "bubble_fly", "bubble_fly"), _defineProperty(_properties, "bubble_open", "bubble_open"), 
      _defineProperty(_properties, "bubble_rise", "bubble_rise"), _defineProperty(_properties, "click", "click"), 
      _defineProperty(_properties, "collect_fly", "collect_fly"), _defineProperty(_properties, "collect_full", "collect_full"), 
      _defineProperty(_properties, "collect_lock", "collect_lock"), _defineProperty(_properties, "collect_unlock", "collect_unlock"), 
      _defineProperty(_properties, "jili", "jili"), _defineProperty(_properties, "jp_lock", "jp_lock"), 
      _defineProperty(_properties, "jp_unlock", "jp_unlock"), _defineProperty(_properties, "map_close", "map_close"), 
      _defineProperty(_properties, "map_open", "map_open"), _defineProperty(_properties, "popup_out", "popup_out"), 
      _defineProperty(_properties, "reel_notify", "reel_notify"), _defineProperty(_properties, "reel_stop", "reel_stop"), 
      _defineProperty(_properties, "smallwheel", "smallwheel"), _defineProperty(_properties, "smallwheel_click", "smallwheel_click"), 
      _defineProperty(_properties, "smallwheel_option", "smallwheel_option"), _defineProperty(_properties, "smallwheel_roll", "smallwheel_roll"), 
      _defineProperty(_properties, "symbol_scatter", "symbol_scatter"), _defineProperty(_properties, "transition_free", "transition_free"), 
      _defineProperty(_properties, "transition_mapfree", "transition_mapfree"), _defineProperty(_properties, "transition_wheel", "transition_wheel"), 
      _defineProperty(_properties, "wild1", "wild1"), _defineProperty(_properties, "wild2", "wild2"), 
      _defineProperty(_properties, "wild3", "wild3"), _defineProperty(_properties, "win1", "win1"), 
      _defineProperty(_properties, "win1end", "win1end"), _defineProperty(_properties, "win2", "win2"), 
      _defineProperty(_properties, "win2end", "win2end"), _defineProperty(_properties, "win3", "win3"), 
      _defineProperty(_properties, "win3end", "win3end"), _defineProperty(_properties, "win4", "win4"), 
      _defineProperty(_properties, "win4end", "win4end"), _defineProperty(_properties, "free_bgm", "free_bgm"), 
      _defineProperty(_properties, "free_dialog_collect_show", "free_dialog_collect_show"), 
      _defineProperty(_properties, "free_dialog_start_show", "free_dialog_start_show"), 
      _defineProperty(_properties, "mapfree_bgm", "mapfree_bgm"), _defineProperty(_properties, "leaf_close", "leaf_close"), 
      _defineProperty(_properties, "leaf_open", "leaf_open"), _defineProperty(_properties, "mapfree_dialog_collect_show", "mapfree_dialog_collect_show"), 
      _defineProperty(_properties, "mapfree_dialog_start_show", "mapfree_dialog_start_show"), 
      _defineProperty(_properties, "moving_wild", "moving_wild"), _defineProperty(_properties, "pass1", "pass1"), 
      _defineProperty(_properties, "pass2", "pass2"), _defineProperty(_properties, "pass3", "pass3"), 
      _defineProperty(_properties, "random_wild", "random_wild"), _defineProperty(_properties, "jp_grand", "jp_grand"), 
      _defineProperty(_properties, "jp_major", "jp_major"), _defineProperty(_properties, "jp_mini", "jp_mini"), 
      _defineProperty(_properties, "jp_minor", "jp_minor"), _defineProperty(_properties, "option", "option"), 
      _defineProperty(_properties, "wheel_bgm", "wheel_bgm"), _defineProperty(_properties, "wheel_click", "wheel_click"), 
      _defineProperty(_properties, "wheel_roll", "wheel_roll"), _defineProperty(_properties, "wheel_start_show", "wheel_start_show"), 
      _properties)
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  TheRoundTableKnightsExplore_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72a06+tSMhNfpXtI9/9Fb8k", "TheRoundTableKnightsExplore_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          this.OnReelBounsAction(aniNode);
          if ("" != cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
          }
        }
      },
      changeWild: function changeWild() {
        this.setAnimationToTop(false);
        this.ShowById(1);
      },
      OnReelBounsAction: function OnReelBounsAction(node) {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        time /= cc.vv.gameData.GetSlotsScript().GetTimeScale();
        cc.tween(node).to(time, {
          position: cc.v2(node.x, node.y + distance)
        }).start();
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var reel = cc.vv.gameData.GetSlotsScript()._reels[this._reelIdx];
        cc.vv.gameData.GetSlotsScript()._isInFree && (reel = cc.vv.gameData.GetSlotsScript()._reelsFree[this._reelIdx]);
        if (reel._isShowScatter) {
          var randIdx = Global.random(2, cfg.randomSymbols.length);
          var randVal = cfg.randomSymbols[randIdx - 1];
          this.ShowById(randVal);
        } else {
          var _randIdx = Global.random(1, cfg.randomSymbols.length);
          var _randVal = cfg.randomSymbols[_randIdx - 1];
          2 === _randVal && (reel._isShowScatter = true);
          this.ShowById(_randVal);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheRoundTableKnightsExplore_wheelControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f0d7iRA6pCM5J0LZuuFIFT", "TheRoundTableKnightsExplore_wheelControl");
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
    var multList = {
      10: 0,
      8: 1,
      7: 2,
      6: 3,
      5: 4,
      4: 5,
      3: 6,
      2: 7
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        spin: {
          default: null,
          type: cc.Node
        },
        selectEffect: {
          default: null,
          type: cc.Node
        },
        guang: {
          default: null,
          type: cc.Node
        },
        rollNode: {
          default: null,
          type: cc.Node
        },
        _mult: 0,
        _sucess: null
      },
      onLoad: function onLoad() {
        this.spin.on("click", this.onSpin, this);
      },
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showWheel: function showWheel(position, mult, sucess) {
        var _this2 = this;
        this._mult = mult;
        this._sucess = sucess;
        this.node.active = true;
        position && (this.node.position = position);
        this.node.scale = 1;
        this.rollNode.angle = 0;
        this.guang.active = true;
        var guangSp = this.guang.getComponent(sp.Skeleton);
        guangSp.setAnimation(0, "animation2", false);
        guangSp.setCompleteListener(function() {
          _this2.guang.active = false;
          guangSp.setCompleteListener(null);
        });
        this.selectEffect.active = false;
        cc.tween(this.spin).repeatForever(cc.tween().to(.7, {
          scale: 1.3
        }).to(.7, {
          scale: 1
        })).start();
        this.spin.getComponent(cc.Button).interactable = true;
        cc.vv.gameData.checkAutoPlay(this.spin, this.onSpin.bind(this));
      },
      onSpin: function onSpin() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.smallwheel_click);
        this.spin.stopAllActions();
        this.spin.getComponent(cc.Button).interactable = false;
        this.spin.stopAllActions();
        this.guang.active = false;
        this.onSpinWheel(multList[this._mult]);
      },
      onSpinWheel: function onSpinWheel(index) {
        var _this3 = this;
        var rusltAngle = -45 * index;
        rusltAngle -= 1800;
        this.selectEffect.active = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.smallwheel_roll);
        cc.tween(this.rollNode).to(6, {
          angle: rusltAngle - 20
        }, {
          easing: "quadInOut"
        }).to(.7, {
          angle: rusltAngle
        }, {
          easing: "quadIn"
        }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.rollNode.angle %= 360;
              _this3.selectEffect.active = true;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.smallwheel_option);
              _context.next = 5;
              return _this3.awaitTime(2);

             case 5:
              _this3.hide();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))).start();
      },
      hide: function hide() {
        var _this4 = this;
        cc.tween(this.node).to(.3, {
          scale: 0
        }).call(function() {
          _this4.node.active = false;
          _this4._sucess && _this4._sucess();
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheRoundTableKnightsExplore_yayaControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9ccfdm829AWYdQNVMyZGLx", "TheRoundTableKnightsExplore_yayaControl");
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
    var speed = 1e3;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showRandomAnimation: function showRandomAnimation() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var tempyaList, posX, posY, i, yaya, tempyaya, _i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jili);
                tempyaList = [];
                posX = [ 0, -160, -54, 53, 160 ];
                posY = [ 0, -370, -360, -350, -370 ];
                for (i = 1; i <= 4; i++) {
                  yaya = cc.find("ya" + i, _this2.node);
                  tempyaya = cc.instantiate(yaya);
                  tempyaya.parent = yaya.parent;
                  tempyaya.position = cc.v2(posX[i], posY[i]);
                  tempyaya.active = true;
                  tempyaya.getComponent(sp.Skeleton).setAnimation(0, "animation5", false);
                  tempyaList.push(tempyaya);
                }
                cc.vv.gameData.GetSlotsScript().showMask(true);
                _context.next = 8;
                return _this2.awaitTime(2.3);

               case 8:
                cc.vv.gameData.GetSlotsScript().showMask(false);
                for (_i = 0; _i < tempyaList.length; _i++) tempyaList[_i].parent = null;
                sucess();

               case 11:
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
      showYaYa: function showYaYa(type, endPosition) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var yaya, symbol, position, finalPosition, finalY, endY;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              yaya = cc.find("ya" + type, _this3.node);
              if (!yaya.active) {
                yaya.active = true;
                yaya.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                yaya.getComponent(sp.Skeleton).setCompleteListener(null);
                yaya.y = -cc.winSize.height / 2;
                if (endPosition) {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_rise);
                  yaya.x = endPosition.x;
                  cc.tween(yaya).to(1.5, {
                    y: endPosition.y
                  }).start();
                } else {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_rise);
                  symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(Global.random(1, 5));
                  position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  finalPosition = _this3.node.convertToNodeSpaceAR(position);
                  yaya.x = finalPosition.x;
                  finalY = cc.winSize.height / 2;
                  endY = yaya.y + 700;
                  if (cc.vv.gameData.GetSlotsScript()._isInFree) {
                    endY = yaya.y + 1060;
                    speed = 1500;
                  }
                  cc.tween(yaya).to(1.7, {
                    y: endY
                  }).call(function() {
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_fly);
                    cc.tween(yaya).to((finalY - yaya.y) / speed, {
                      y: finalY
                    }).call(function() {
                      yaya.active = false;
                    }).start();
                  }).start();
                }
              }

             case 2:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showYaYaResult: function showYaYaResult(bonusGame) {
        var _this4 = this;
        return new Promise(function(sucess, failed) {
          var type = bonusGame.type;
          var effect = bonusGame.effect;
          var yaya = cc.find("ya" + type, _this4.node);
          if (yaya.active) {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_open);
            yaya.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            yaya.getComponent(sp.Skeleton).addAnimation(0, "animation3", false);
            yaya.getComponent(sp.Skeleton).addAnimation(0, "animation4", false);
            var times = 0;
            yaya.getComponent(sp.Skeleton).setCompleteListener(function() {
              times++;
              switch (times) {
               case 1:
                4 === type && _this4.showEndEffect(type, effect);
                break;

               case 2:
                Global.SlotsSoundMgr.playEffect("random" + type);
                1 === type || 2 === type ? _this4.showEndEffect(type, effect) : 3 === type && _this4.scheduleOnce(function() {
                  _this4.showEndEffect(type, effect, sucess);
                }, .5);
                break;

               case 3:
                yaya.active = false;
                3 !== type && sucess();
              }
            });
          } else sucess();
        });
      },
      showEndEffect: function showEndEffect(type, effect, _sucess) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var yaya, _loop, i, _loop2, _i2, position, finalPosition, wheelShow;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              yaya = cc.find("ya" + type, _this5.node);
              _context3.t0 = type;
              _context3.next = 1 === _context3.t0 ? 4 : 2 === _context3.t0 ? 8 : 3 === _context3.t0 ? 12 : 4 === _context3.t0 ? 21 : 23;
              break;

             case 4:
              _loop = function _loop(i) {
                var idx = effect.convertIdxs[i];
                var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                var _collectNode = cc.vv.gameData.getManage()._collectNode;
                if (symbol) {
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  var finalPosition = _collectNode.convertToNodeSpaceAR(position);
                  var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("zimu"));
                  tempNode.parent = _collectNode;
                  tempNode.position = finalPosition;
                  9 === symbol._id ? tempNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false) : 10 === symbol._id ? tempNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", false) : 11 === symbol._id ? tempNode.getComponent(sp.Skeleton).setAnimation(0, "animation3", false) : 12 === symbol._id && tempNode.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                  tempNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                    tempNode.parent = null;
                  });
                  _this5.scheduleOnce(function() {
                    symbol.changeWild();
                  }, .5);
                }
              };
              for (i = 0; i < effect.convertIdxs.length; i++) _loop(i);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild2);
              return _context3.abrupt("break", 23);

             case 8:
              _loop2 = function _loop2(_i2) {
                var idx = effect.convertIdxs[_i2];
                var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                var _collectNode = cc.vv.gameData.getManage()._collectNode;
                if (symbol) {
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  var finalPosition = _collectNode.convertToNodeSpaceAR(position);
                  var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("zhouwei"));
                  tempNode.parent = _collectNode;
                  tempNode.position = finalPosition;
                  tempNode.active = true;
                  tempNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                  tempNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                    tempNode.parent = null;
                  });
                  _this5.scheduleOnce(function() {
                    symbol.changeWild();
                  }, .5);
                }
              };
              for (_i2 = 0; _i2 < effect.convertIdxs.length; _i2++) _loop2(_i2);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild3);
              return _context3.abrupt("break", 23);

             case 12:
              position = yaya.convertToWorldSpaceAR(cc.v2(0, 0));
              finalPosition = cc.find("Canvas/safe_node").convertToNodeSpaceAR(position);
              wheelShow = cc.instantiate(cc.vv.gameData.GetPrefabByName("wheelShow"));
              wheelShow.parent = _this5.node;
              wheelShow.position = _this5.node.convertToNodeSpaceAR(position);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.smallwheel);
              wheelShow.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              wheelShow.getComponent(sp.Skeleton).setCompleteListener(function() {
                wheelShow.parent = null;
                cc.vv.gameData.getWheelControl().showWheel(finalPosition, effect.mult, _sucess);
              });
              return _context3.abrupt("break", 23);

             case 21:
              (function() {
                var position = yaya.convertToWorldSpaceAR(cc.v2(0, 0));
                var _collectNode = cc.vv.gameData.getManage()._collectNode;
                var startPosition = _collectNode.convertToNodeSpaceAR(position);
                var _loop3 = function _loop3(_i3) {
                  var idx = effect.randIdxs[_i3];
                  var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  var finalPosition = _collectNode.convertToNodeSpaceAR(position);
                  var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("qiang2_1"));
                  tempNode.parent = _collectNode;
                  tempNode.position = startPosition;
                  cc.tween(tempNode).to(.2, {
                    position: finalPosition
                  }).call(function() {
                    tempNode.parent = null;
                    var shouqiangNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("shouqiang"));
                    shouqiangNode.parent = _collectNode;
                    shouqiangNode.position = finalPosition;
                    shouqiangNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                    shouqiangNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                      shouqiangNode.parent = null;
                    });
                    _this5.scheduleOnce(function() {
                      symbol.changeWild();
                    }, .5);
                  }).start();
                };
                for (var _i3 = 0; _i3 < effect.randIdxs.length; _i3++) _loop3(_i3);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild1);
              })();
              return _context3.abrupt("break", 23);

             case 23:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheRoundTableKnightsExplore_Cfg", "TheRoundTableKnightsExplore_GameData", "TheRoundTableKnightsExplore_Logic", "TheRoundTableKnightsExplore_Manage", "TheRoundTableKnightsExplore_Pop", "TheRoundTableKnightsExplore_PrizePool", "TheRoundTableKnightsExplore_Slots", "TheRoundTableKnightsExplore_freeWheel", "TheRoundTableKnightsExplore_mapControl", "TheRoundTableKnightsExplore_qiePing", "TheRoundTableKnightsExplore_reel", "TheRoundTableKnightsExplore_sound", "TheRoundTableKnightsExplore_symbol", "TheRoundTableKnightsExplore_wheelControl", "TheRoundTableKnightsExplore_yayaControl" ]);