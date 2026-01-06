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
  GenghisKhan_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d725QqRD1Bo4Df+O8u17Sp", "GenghisKhan_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      },
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        cc.vv.gameData.GetSlotsScript()._stopClick.active = "moveing_2" == strState;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  GenghisKhan_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d333aTKKshGy5NQ9GPlTlCw", "GenghisKhan_Cfg");
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
          name: "animation1",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 2, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation2",
          zIndex: 800
        },
        stop_ani: {
          name: "animation",
          zIndex: 160
        },
        idle_ani: {
          name: "animation1",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 3, {
        node: "s14",
        win_node: "w14",
        stop_ani: {
          name: "animation",
          zIndex: 160
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 9, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 10, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 11, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 12, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 13, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 14, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 101, {
        node: "s200",
        win_node: "w16",
        win_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 102, {
        node: "s300",
        win_node: "w16",
        win_ani: {
          name: "animation3",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 103, {
        node: "s500",
        win_node: "w16",
        win_ani: {
          name: "animation5",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 104, {
        node: "s800",
        win_node: "w16",
        win_ani: {
          name: "animation8",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 105, {
        node: "s1000",
        win_node: "w16",
        win_ani: {
          name: "animation10",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 106, {
        node: "s17",
        win_node: "w15",
        win_ani: {
          name: "animation3",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 107, {
        node: "s16",
        win_node: "w15",
        win_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 108, {
        node: "s15",
        win_node: "w15",
        win_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "GenghisKhan_Bottom",
        Slots: "GenghisKhan_Slots",
        Reels: "GenghisKhan_reel",
        Symbols: "GenghisKhan_symbol",
        Sound: "GenghisKhan_sound"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 125,
        height: 105
      },
      help_prefab: "games/GenghisKhan/prefab/LMSlots_Help_prefab",
      helpItems: [ "games/GenghisKhan/prefab/LMSlots_Help_item1", "games/GenghisKhan/prefab/LMSlots_Help_item2", "games/GenghisKhan/prefab/LMSlots_Help_item3", "games/GenghisKhan/prefab/LMSlots_Help_item4", "games/GenghisKhan/prefab/LMSlots_Help_item5", "games/GenghisKhan/prefab/LMSlots_Help_item6", "games/GenghisKhan/prefab/LMSlots_Help_item7" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 1, 1, 1, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14 ],
      randomSymbols_move: [ 2, 3, 1, 1, 1, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14 ],
      randomSymbols_bonus: [ 1, 101, 102, 103, 104, 105, 106, 107, 108 ],
      kuang: "kuang",
      speed: 1600,
      reelStopInter: .2,
      auto_stop_time: 2,
      bounce: true,
      bounceInfo: {
        distance: 10,
        time: .2
      },
      commEffect: {
        path: "games/GenghisKhan/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 100,
        counts: [ 1, 1, 1, 1, 1, 100 ],
        antiNode: "",
        path: "games/GenghisKhan/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/GenghisKhan/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      reelStateInfoFree: [ {
        id: [ 3 ],
        mini: 100,
        counts: [ 1, 1, 1, 1, 1, 100 ],
        antiNode: "",
        path: "games/GenghisKhan/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 2,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/GenghisKhan/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      AddAntiTime: 2,
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  GenghisKhan_CollectNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "204b3lNCfJMVJ0dSDIXJPKF", "GenghisKhan_CollectNode");
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
        _suo: null,
        _clickNode: null,
        _pointList: [],
        _needBet: 0,
        _collectLock: true,
        _pointIndex: 0,
        _maxCount: 0,
        _superJL: null,
        _tips: null,
        _sjt: null
      },
      onLoad: function onLoad() {
        this._suo = cc.find("sjt_suo", this.node);
        this._clickNode = cc.find("clickNode", this.node);
        for (var i = 1; i < 7; i++) {
          var point = cc.find("point" + i, this.node);
          this._pointList.push(point);
        }
        this._clickNode.on("click", this.onClickNode, this);
        this._superJL = cc.find("superJL", this.node);
        this._tips = cc.find("tips", this.node);
        this._sjt = cc.find("sjt", this.node);
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
      isSuperBonus: function isSuperBonus() {
        return this._pointIndex == this._maxCount;
      },
      show: function show() {
        cc.tween(this.node).to(.5, {
          opacity: 255
        }).start();
      },
      hide: function hide() {
        cc.tween(this.node).to(.5, {
          opacity: 0
        }).start();
      },
      setCollectData: function setCollectData(collect, needbet) {
        this._needBet = needbet;
        this._pointIndex = collect.count || 0;
        this._maxCount = collect.totalCount;
        for (var i = 0; i < this._pointIndex; i++) {
          var element = this._pointList[i];
          cc.find("select", element).active = true;
        }
        this.initCollectNode();
        this._maxCount - this._pointIndex == 1 ? this._superJL.active = true : this._superJL.active = false;
      },
      onClickNode: function onClickNode() {
        if (cc.vv.gameData.GetSlotsScript()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this._tips.active) return;
        if (this._needBet <= cc.vv.gameData._deskInfo.mults.length) {
          var curmult = cc.vv.gameData.GetBetIdx();
          if (curmult >= this._needBet) this.showTips(); else {
            var bottom = cc.vv.gameData.GetBottomScript();
            bottom.SetBetIdx(this._needBet);
          }
        }
      },
      showTips: function showTips() {
        var _this2 = this;
        this._tips.active = true;
        this._tips.scale = 0;
        this._tips.stopAllActions();
        cc.tween(this._tips).to(.2, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(2).to(.2, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this2._tips.active = false;
        }).start();
      },
      initCollectNode: function initCollectNode() {
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult >= this._needBet) {
          this._collectLock = false;
          this._suo.active = false;
          this.showTips();
        } else {
          this._suo.active = true;
          var spineSp = this._suo.getComponent(sp.Skeleton);
          spineSp.setAnimation(0, "animation2", true);
          this._collectLock = true;
        }
      },
      changeCollectNode: function changeCollectNode() {
        var _this3 = this;
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult >= this._needBet) {
          if (this._collectLock) {
            this._collectLock = false;
            var spineSp = this._suo.getComponent(sp.Skeleton);
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_unlock);
            this._suo.active = true;
            spineSp.setAnimation(0, "animation3", false);
            spineSp.setCompleteListener(function() {
              _this3._suo.active = false;
              spineSp.setCompleteListener(null);
            });
          }
        } else if (!this._collectLock) {
          this._collectLock = true;
          var _spineSp = this._suo.getComponent(sp.Skeleton);
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_lock);
          this._suo.active = true;
          _spineSp.setAnimation(0, "animation1", false);
          _spineSp.addAnimation(0, "animation2", true);
        }
      },
      addPoint: function addPoint(idxList) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var curmult, point, pointPos, endPos, i, idx, symbol, sjtSP;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              curmult = cc.vv.gameData.GetBetIdx();
              if (!(curmult < _this4._needBet)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              _this4._pointIndex++;
              _this4._pointIndex > _this4._maxCount && (_this4._pointIndex = _this4._maxCount);
              point = _this4._pointList[_this4._pointIndex - 1];
              pointPos = point.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = cc.vv.gameData.getManage()._collectFree.convertToNodeSpaceAR(pointPos);
              for (i = 0; i < idxList.length; i++) {
                idx = idxList[i];
                symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                symbol && function() {
                  var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  var startPos = cc.vv.gameData.getManage()._collectFree.convertToNodeSpaceAR(symbolPos);
                  var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("scattershouji"));
                  lizi.parent = cc.vv.gameData.getManage()._collectFree;
                  lizi.position = startPos;
                  cc.tween(lizi).to(.5, {
                    position: endPos
                  }).call(function() {
                    lizi.parent = null;
                  }).start();
                }();
              }
              _context.next = 11;
              return _this4.awaitTime(.5);

             case 11:
              cc.find("select", point).active = true;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_light);
              _this4._maxCount - _this4._pointIndex == 1 ? _this4._superJL.active = true : _this4._superJL.active = false;
              if (!(_this4._pointIndex >= _this4._maxCount)) {
                _context.next = 21;
                break;
              }
              _context.next = 17;
              return _this4.awaitTime(.2);

             case 17:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_full);
              sjtSP = _this4._sjt.getComponent(sp.Skeleton);
              sjtSP.setAnimation(0, "animation2", false);
              sjtSP.addAnimation(0, "animation1", true);

             case 21:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      resetCollect: function resetCollect() {
        for (var i = 0; i < this._pointList.length; i++) {
          var element = this._pointList[i];
          cc.find("select", element).active = false;
        }
        this._pointIndex = 0;
        this._superJL.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "563e0I2jalJ9IDwfz3dQA99", "GenghisKhan_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collectNode: null,
        _popWin: null,
        _qiePing: null,
        _slotsArr: [],
        _slotsIndex: 0,
        _bonus: null,
        _manage: null
      },
      getCollectNode: function getCollectNode() {
        return this._collectNode;
      },
      setCollectNode: function setCollectNode(script) {
        this._collectNode = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWin;
      },
      setPopWinManage: function setPopWinManage(script) {
        this._popWin = script;
      },
      getQiePing: function getQiePing() {
        return this._qiePing;
      },
      setQiePing: function setQiePing(script) {
        this._qiePing = script;
      },
      addSlots: function addSlots(cmp) {
        this._slotsArr.push(cmp);
      },
      setSlotsIndex: function setSlotsIndex(index) {
        this._slotsIndex = index;
      },
      GetSlotsScript: function GetSlotsScript() {
        return this._slotsArr[this._slotsIndex];
      },
      GetSlotsScriptById: function GetSlotsScriptById(idx) {
        return this._slotsArr[idx];
      },
      getBonus: function getBonus() {
        return this._bonus;
      },
      setBonus: function setBonus(script) {
        this._bonus = script;
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._deskInfo.restFreeCount > 0 ? this._slotsIndex = 1 : this._slotsIndex = 0;
      },
      showSlot: function showSlot() {
        for (var i = 0; i < this._slotsArr.length; i++) {
          var slot = this._slotsArr[i];
          i == this._slotsIndex ? slot.show() : slot.hide();
        }
      },
      recoverySlot: function recoverySlot() {
        for (var i = 0; i < this._slotsArr.length; i++) {
          var slot = this._slotsArr[i];
          i == this._slotsIndex ? slot.recovery() : slot.hide();
        }
      },
      getManage: function getManage() {
        return this._manage;
      },
      setManage: function setManage(script) {
        this._manage = script;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  GenghisKhan_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56718gFsKNEoowF1khR6MGl", "GenghisKhan_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this.FitIPad();
        this.node.addComponent("BigWin");
        var assetScp = cc.find("Canvas").getComponent("LMSlots_Asset_Base");
        cc.vv.gameData.SetAssetScript(assetScp);
        var safeNode = cc.find("safe_node", this.node);
        var cfg = cc.vv.gameData.getGameCfg();
        var defSoundCmp = "LMSlots_Sound";
        cfg.scripts.Sound && (defSoundCmp = cfg.scripts.Sound);
        this.node.addComponent(defSoundCmp);
        var node_top = cc.find("LMSlots_Top", safeNode);
        var script_top = node_top.addComponent(cfg.scripts.Top);
        script_top.Init();
        var node_bottom = cc.find("LMSlots_Bottom", safeNode);
        var script_bottom = node_bottom.addComponent(cfg.scripts.Bottom);
        script_bottom.Init();
        cc.vv.gameData.SetTopBottomScript(script_top, script_bottom);
        var node_slots = cc.find("slots", safeNode);
        var script_slots = node_slots.addComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(script_slots);
        var script_slotsfree = cc.find("slotsfree", safeNode).addComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(script_slotsfree);
        var script_slotssuper = cc.find("slotssuper", safeNode).addComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(script_slotssuper);
        this.node.addComponent("LMSots_OtherSys");
        cfg.puzzleCfg && this.node.addComponent("LMSlots_Puzzle");
        var slots = cc.find("Canvas/safe_node/slots");
        var collect = slots.getComponentInChildren("GenghisKhan_CollectNode");
        collect && cc.vv.gameData.setCollectNode(collect);
        var popWin = safeNode.getComponentInChildren("GenghisKhan_Pop");
        popWin && cc.vv.gameData.setPopWinManage(popWin);
        var qieping = safeNode.getComponentInChildren("GenghisKhan_qiePing");
        qieping && cc.vv.gameData.setQiePing(qieping);
        var bonus = safeNode.getComponentInChildren("GenghisKhan_bouns");
        bonus && cc.vv.gameData.setBonus(bonus);
        cc.vv.gameData.setManage(this.node.getComponent("GenghisKhan_manage"));
      },
      StartSlot: function StartSlot() {
        var script_slots = cc.vv.gameData._slotsArr;
        for (var i = 0; i < script_slots.length; i++) {
          var element = script_slots[i];
          element.Init();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  GenghisKhan_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "732a6T4R5lOuK+HIznjAcXp", "GenghisKhan_Pop");
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
      onLoad: function onLoad() {},
      start: function start() {},
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      showWinEx: function showWinEx() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
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
      showFreeGameTimes: function showFreeGameTimes(num) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var show_popup, freeTimes, startBtn, freetanchuang, show_popupSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this3.showWin();
                show_popup = cc.find("show_freeGameTimes", _this3.node);
                show_popup.active = true;
                freeTimes = cc.find("times", show_popup);
                freeTimes.active = false;
                startBtn = cc.find("startButton", show_popup);
                startBtn.active = false;
                freetanchuang = cc.find("freetanchuang", show_popup);
                freetanchuang.active = true;
                show_popupSp = freetanchuang.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation3", false);
                show_popupSp.addAnimation(0, "animation3_1", true);
                _context2.next = 15;
                return _this3.awaitTime(.5);

               case 15:
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                freeTimes.active = true;
                freeTimes.getComponent(cc.Label).string = num;
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      startBtn.getComponent(cc.Button).interactable = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                      _context.next = 4;
                      return _this3.awaitTime(.2);

                     case 4:
                      show_popupSp.setAnimation(0, "animation3_2", false);
                      show_popupSp.setCompleteListener(function() {
                        show_popup.active = false;
                        _this3.hideWin(function() {
                          sucess();
                        });
                        show_popupSp.setCompleteListener(null);
                      });
                      _context.next = 8;
                      return _this3.awaitTime(.5);

                     case 8:
                      freeTimes.active = false;
                      cc.tween(startBtn).to(.2, {
                        scale: 0
                      }, {
                        easing: "backOut"
                      }).start();

                     case 10:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                })));

               case 23:
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
      showFreeGameWinCoin: function showFreeGameWinCoin(num) {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popup, coin, collectBtn, show_popupSp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this4.showWin();
                show_popup = cc.find("show_freeGame_winCoin", _this4.node);
                show_popup.active = true;
                coin = cc.find("coin", show_popup);
                collectBtn = cc.find("collectBtn", show_popup);
                coin.active = false;
                collectBtn.active = false;
                show_popupSp = cc.find("freetanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1", false);
                show_popupSp.addAnimation(0, "animation1_1", true);
                _context4.next = 13;
                return _this4.awaitTime(.5);

               case 13:
                coin.active = true;
                coin.scale = 1;
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this4._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this4._startAddCoin = false;
                }, null, 0, true);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  var winCoinLabel;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      collectBtn.getComponent(cc.Button).interactable = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                      if (_this4._startAddCoin) {
                        _this4._startAddCoin = false;
                        coin.stopAllActions();
                        winCoinLabel = coin.getComponent(cc.Label);
                        winCoinLabel.string = Global.FormatNumToComma(num);
                      }
                      _context3.next = 5;
                      return _this4.awaitTime(.2);

                     case 5:
                      show_popupSp.setAnimation(0, "animation1_2", false);
                      show_popupSp.setCompleteListener(function() {
                        show_popup.active = false;
                        _this4.hideWin(function() {
                          sucess();
                        });
                        show_popupSp.setCompleteListener(null);
                      });
                      _context3.next = 9;
                      return _this4.awaitTime(.5);

                     case 9:
                      cc.tween(collectBtn).to(.2, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      cc.tween(coin).to(.3, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();

                     case 11:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));

               case 23:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree: function showFreeGameWinFree(num) {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var show_popup, freeTimes, show_popupSp;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_retrigger_dialog_start_show);
                _this5.showWin();
                show_popup = cc.find("show_freeGame_winfree", _this5.node);
                show_popup.active = true;
                freeTimes = cc.find("times", show_popup);
                freeTimes.active = false;
                show_popupSp = cc.find("freetanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2", false);
                show_popupSp.addAnimation(0, "animation2_1", true);
                _context5.next = 11;
                return _this5.awaitTime(.5);

               case 11:
                freeTimes.active = true;
                freeTimes.scale = 0;
                cc.tween(freeTimes).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                freeTimes.getComponent(cc.Label).string = num;
                _context5.next = 17;
                return _this5.awaitTime(2);

               case 17:
                show_popupSp.setAnimation(0, "animation2_2", false);
                show_popupSp.setCompleteListener(function() {
                  show_popup.active = false;
                  _this5.hideWin(function() {
                    sucess();
                  });
                  show_popupSp.setCompleteListener(null);
                });
                _context5.next = 21;
                return _this5.awaitTime(.3);

               case 21:
                cc.tween(freeTimes).to(.2, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();

               case 22:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      showSuperBonusStart: function showSuperBonusStart() {
        var _this6 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var show_popup, startBtn, freetanchuang, show_popupSp;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this6.showWin();
                show_popup = cc.find("show_superBonusStart", _this6.node);
                show_popup.active = true;
                startBtn = cc.find("startButton", show_popup);
                startBtn.active = false;
                freetanchuang = cc.find("bonustanchuang", show_popup);
                freetanchuang.active = true;
                show_popupSp = freetanchuang.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2", false);
                show_popupSp.addAnimation(0, "animation2_1", true);
                _context7.next = 13;
                return _this6.awaitTime(.5);

               case 13:
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      startBtn.getComponent(cc.Button).interactable = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                      _context6.next = 4;
                      return _this6.awaitTime(.2);

                     case 4:
                      show_popupSp.setAnimation(0, "animation2_2", false);
                      show_popupSp.setCompleteListener(function() {
                        show_popup.active = false;
                        _this6.hideWin(function() {
                          sucess();
                        });
                        show_popupSp.setCompleteListener(null);
                      });
                      _context6.next = 8;
                      return _this6.awaitTime(.5);

                     case 8:
                      cc.tween(startBtn).to(.2, {
                        scale: 0
                      }, {
                        easing: "backOut"
                      }).start();

                     case 9:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 19:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x7, _x8) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      showBonusGameStart: function showBonusGameStart() {
        var _this7 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var show_popup, bonuskaishi, show_popupSp;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_start_show);
                _this7.showWinEx();
                show_popup = cc.find("showBonusGame", _this7.node);
                show_popup.active = true;
                bonuskaishi = cc.find("bonuskaishi", show_popup);
                bonuskaishi.active = true;
                show_popupSp = bonuskaishi.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  show_popup.active = false;
                  _this7.hideWin(function() {
                    sucess();
                  });
                  show_popupSp.setCompleteListener(null);
                });

               case 9:
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
      showBonusGameFreeStart: function showBonusGameFreeStart() {
        var _this8 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var show_popup, bonuskaishi, show_popupSp;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_start_show);
                _this8.showWinEx();
                show_popup = cc.find("showBonusGameFree", _this8.node);
                show_popup.active = true;
                bonuskaishi = cc.find("bonuskaishi", show_popup);
                bonuskaishi.active = true;
                show_popupSp = bonuskaishi.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  show_popup.active = false;
                  _this8.hideWin(function() {
                    sucess();
                  });
                  show_popupSp.setCompleteListener(null);
                });

               case 9:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x11, _x12) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      showSuperBonusWinCoin: function showSuperBonusWinCoin(num) {
        var _this9 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var show_popup, coin, collectBtn, show_popupSp;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this9.showWin();
                show_popup = cc.find("show_superBonusWinCoin", _this9.node);
                show_popup.active = true;
                coin = cc.find("coin", show_popup);
                collectBtn = cc.find("collectBtn", show_popup);
                coin.active = false;
                collectBtn.active = false;
                show_popupSp = cc.find("bonustanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1", false);
                show_popupSp.addAnimation(0, "animation1_1", true);
                _context11.next = 13;
                return _this9.awaitTime(.5);

               case 13:
                coin.active = true;
                coin.scale = 1;
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this9._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this9._startAddCoin = false;
                }, null, 0, true);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  var winCoinLabel;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      collectBtn.getComponent(cc.Button).interactable = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                      if (_this9._startAddCoin) {
                        _this9._startAddCoin = false;
                        coin.stopAllActions();
                        winCoinLabel = coin.getComponent(cc.Label);
                        winCoinLabel.string = Global.FormatNumToComma(num);
                      }
                      _context10.next = 5;
                      return _this9.awaitTime(.2);

                     case 5:
                      show_popupSp.setAnimation(0, "animation1_2", false);
                      show_popupSp.setCompleteListener(function() {
                        show_popup.active = false;
                        _this9.hideWin(function() {
                          sucess();
                        });
                        show_popupSp.setCompleteListener(null);
                      });
                      _context10.next = 9;
                      return _this9.awaitTime(.5);

                     case 9:
                      cc.tween(collectBtn).to(.2, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      cc.tween(coin).to(.3, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();

                     case 11:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 23:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x13, _x14) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      showJackpotWinCoin: function showJackpotWinCoin(num, jpId) {
        var _this10 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(sucess, failed) {
            var show_popup, coin, collectBtn, jptanchuang_diSp, jptanchuang_maSp, jptanchuang_banSp;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                0 !== jpId && (jpId -= 1);
                _context13.t0 = jpId;
                _context13.next = 0 === _context13.t0 ? 4 : 1 === _context13.t0 ? 6 : 2 === _context13.t0 ? 8 : 3 === _context13.t0 ? 10 : 12;
                break;

               case 4:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_collect_show);
                return _context13.abrupt("break", 12);

               case 6:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.MINOR_jp_dialog_collect_show);
                return _context13.abrupt("break", 12);

               case 8:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Major_jp_dialog_collect_show);
                return _context13.abrupt("break", 12);

               case 10:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Grand_jp_dialog_collect_show);
                return _context13.abrupt("break", 12);

               case 12:
                _this10.showWin();
                show_popup = cc.find("show_win_jackpot", _this10.node);
                show_popup.active = true;
                coin = cc.find("coin", show_popup);
                collectBtn = cc.find("collectBtn", show_popup);
                coin.active = false;
                collectBtn.active = false;
                jptanchuang_diSp = cc.find("jptanchuang_di", show_popup).getComponent(sp.Skeleton);
                jptanchuang_maSp = cc.find("jptanchuang_ma", show_popup).getComponent(sp.Skeleton);
                jptanchuang_banSp = cc.find("jptanchuang_ban", show_popup).getComponent(sp.Skeleton);
                jptanchuang_diSp.setAnimation(0, "animation" + (4 - jpId), false);
                jptanchuang_diSp.addAnimation(0, "animation" + (4 - jpId) + "_1", true);
                jptanchuang_maSp.setAnimation(0, "animation" + (4 - jpId), false);
                jptanchuang_maSp.addAnimation(0, "animation" + (4 - jpId) + "_1", true);
                jptanchuang_banSp.setAnimation(0, "animation" + (4 - jpId), false);
                jptanchuang_banSp.addAnimation(0, "animation" + (4 - jpId) + "_1", true);
                _context13.next = 30;
                return _this10.awaitTime(.5);

               case 30:
                coin.active = true;
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this10._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this10._startAddCoin = false;
                }, null, 0, true);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                  var winCoinLabel;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      collectBtn.getComponent(cc.Button).interactable = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                      if (_this10._startAddCoin) {
                        _this10._startAddCoin = false;
                        coin.stopAllActions();
                        winCoinLabel = coin.getComponent(cc.Label);
                        winCoinLabel.string = Global.FormatNumToComma(num);
                      }
                      _context12.next = 5;
                      return _this10.awaitTime(.2);

                     case 5:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                      jptanchuang_diSp.setAnimation(0, "animation" + (4 - jpId) + "_2", false);
                      jptanchuang_maSp.setAnimation(0, "animation" + (4 - jpId) + "_2", false);
                      jptanchuang_banSp.setAnimation(0, "animation" + (4 - jpId) + "_2", false);
                      jptanchuang_diSp.setCompleteListener(function() {
                        show_popup.active = false;
                        _this10.hideWin(function() {
                          sucess();
                        });
                        jptanchuang_diSp.setCompleteListener(null);
                      });
                      _context12.next = 12;
                      return _this10.awaitTime(.5);

                     case 12:
                      cc.tween(collectBtn).to(.2, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      coin.active = false;

                     case 14:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                })));

               case 39:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x15, _x16) {
            return _ref12.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "621d57knjVP85zwXW1Gdnsk", "GenghisKhan_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _lastLockJackpot: 0
      },
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          if (_this.node.y + _this.node.height / 2 > cc.winSize.height / 2 - 74) {
            var length = _this.node.y + _this.node.height / 2 - (cc.winSize.height / 2 - 20);
            _this.node.y -= length;
          }
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (poolType > 0 && poolType < 4) {
          var jpNodeName = jackpotNames[poolType];
          this.updataJackPoolLock(poolType, bLock);
          if (jpNodeName) {
            var safeNode = cc.find("Canvas/safe_node");
            var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
            if (jpNode) {
              var targetJpNode = cc.find("prizePool_" + jpNodeName, jpNode.node.parent);
              if (targetJpNode) {
                var lbl_num = cc.find("lbl_num", targetJpNode);
                var title = cc.find("spr_title", targetJpNode);
                var liuguang = cc.find("liuguang", targetJpNode);
                var lockEffect = cc.find("lockEffect", targetJpNode);
                if (bLock) {
                  if (!bInit) {
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_lock);
                    lockEffect.active = true;
                    var lockEffectSp = lockEffect.getComponent(sp.Skeleton);
                    lockEffectSp.setAnimation(0, "animation" + (4 - poolType) + "_1", false);
                    lockEffectSp.setCompleteListener(function() {
                      lockEffectSp.setCompleteListener(null);
                      lockEffect.active = false;
                    });
                  }
                  lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme228_base2");
                  targetJpNode.getComponent("ImgSwitchCmp").setIndex(1);
                  liuguang.active = false;
                } else {
                  if (!bInit) {
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_unlock);
                    lockEffect.active = true;
                    var _lockEffectSp = lockEffect.getComponent(sp.Skeleton);
                    _lockEffectSp.setAnimation(0, "animation" + (4 - poolType) + "_2", false);
                    _lockEffectSp.setCompleteListener(function() {
                      _lockEffectSp.setCompleteListener(null);
                      lockEffect.active = false;
                    });
                  }
                  lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme228_base1");
                  targetJpNode.getComponent("ImgSwitchCmp").setIndex(0);
                  liuguang.active = true;
                }
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
        if (jpNode) for (var i = 1; i < jackpotNames.length; i++) {
          var jpNodeName = jackpotNames[i];
          var tips = cc.find("tips_" + jpNodeName, jpNode.node.parent);
          if (tips) if (index === i) if (isLock) {
            cc.find("lock", tips).active = true;
            cc.find("unlock", tips).active = false;
            tips.scale = 0;
            tips.stopAllActions();
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
            tips.stopAllActions();
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
  GenghisKhan_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "813009Io9ZMn6ad7UUvsMP4", "GenghisKhan_Slots");
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
        _canShowStop: false,
        _canStop: false,
        _normalSpine: null,
        _bonuskuang: null,
        _stayNode: null,
        _kuangFree: null,
        _bonusSpin: false,
        _mask: null,
        _chufaFreeGame: false,
        _stopClick: null
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        "slots" !== this.node.name && (this._row = 8);
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.ReconnectShow();
      },
      onLoad: function onLoad() {
        this._super();
        this._normalSpine = cc.find("reels_bg/click", this.node);
        this._bonuskuang = cc.find("kuang_lz", this.node);
        this._bonuskuang.active = false;
        this._stayNode = cc.find("stayNode", this.node);
        this._kuangFree = cc.find("kuang_sd", this.node);
        this._kuangFree.active = false;
        this._mask = cc.find("mask", this.node);
        this._stopClick = cc.find("reels_bg/stopClick", this.node);
        this._stopClick.active = false;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      show: function show() {
        var _this = this;
        this.node.active = true;
        if ("slots" !== this.node.name) {
          this.clearSlots();
          this.scheduleOnce(function() {
            _this.node.y = -900 - cc.winSize.height / 2;
            var dstpos = -cc.winSize.height / 2 + 189;
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_rise);
            cc.tween(_this.node).to(.5, {
              y: dstpos
            }).start();
          }, 0);
        }
      },
      recovery: function recovery() {
        var _this2 = this;
        this.node.active = true;
        "slots" !== this.node.name && this.scheduleOnce(function() {
          _this2.node.y = -cc.winSize.height / 2 + 189;
        });
      },
      hide: function hide() {
        this.node.active = false;
        "slots" !== this.node.name && (this.node.y = -900 - cc.winSize.height / 2);
      },
      slotsSpine: function slotsSpine() {
        this._bottomScript.OnClickSpin();
      },
      stopSpin: function stopSpin() {
        this._stopClick.active = false;
        this._bottomScript.OnClickStop();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._super();
        "slots" === this.node.name && (this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState());
      },
      awaitTime: function awaitTime(time) {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        "slots" === this.node.name && (this._normalSpine.getComponent(cc.Button).interactable = false);
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = true;
        this._canStop = false;
        this._bonusSpin = false;
      },
      startBonusMove: function startBonusMove(bonusGame) {
        this._gameInfo.resultCards = Global.copy(bonusGame.resultCards);
        this._gameInfo.winCoin = Global.copy(bonusGame.winCoin);
        this._gameInfo.zjLuXian = Global.copy(bonusGame.zjLuXian);
        bonusGame.jackpot ? this._gameInfo.jackpot = Global.copy(bonusGame.jackpot) : this._gameInfo.jackpot = null;
        this._gameInfo.jackpotValues = Global.copy(bonusGame.jackpotValues);
        this._gameInfo.randWildIdxs = Global.copy(bonusGame.randWildIdxs);
        this._gameInfo.bonusGame = null;
        Global.SlotsSoundMgr.playNormalBgm();
        this.MoveReels(this._reels);
        var cards = this._gameInfo.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
        this._stopTime = 4;
        this._canShowStop = false;
        this._canStop = true;
        this._bonusSpin = true;
        this._mask.opacity = 0;
        this._mask.active = true;
        cc.tween(this._mask).to(.2, {
          opacity: 140
        }).delay(this._stopTime).to(.2, {
          opacity: 0
        }).start();
      },
      showJackpotWinEffect: function showJackpotWinEffect(index) {
        if (index < 0) return;
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        if (jpNode) {
          var element = jackpotNames[index];
          var targetJpNode = cc.find("prizePool_" + element, jpNode.node.parent);
          if (targetJpNode) {
            var winEffect = targetJpNode.getChildByName("winEffect");
            if (winEffect) {
              var winEffectSp = winEffect.getComponent(sp.Skeleton);
              winEffect.active = true;
              winEffectSp.setCompleteListener(function() {
                winEffect.active = false;
                winEffectSp.setCompleteListener(null);
              });
            }
          }
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var showAnimation, nAddWin, nTotalBet, nMul, showJiLi;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this4._super(msg);
              showAnimation = false;
              if (cc.vv.gameData.getManage()._isInFree) {
                _context.next = 15;
                break;
              }
              _this4._gameInfo.freeResult && _this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.scatterIdx && (showAnimation = true);
              nAddWin = cc.vv.gameData.GetGameWin();
              nTotalBet = cc.vv.gameData.GetTotalBet();
              nMul = nAddWin / nTotalBet;
              nMul >= 10 && (showAnimation = true);
              _this4._gameInfo.bonusGame && (showAnimation = true);
              if (!showAnimation) {
                _context.next = 15;
                break;
              }
              showJiLi = Global.random(1, 100);
              if (!(showJiLi > 50)) {
                _context.next = 15;
                break;
              }
              _this4._chufaFreeGame = true;
              _context.next = 15;
              return cc.vv.gameData.getManage().showFreeGameEffect(2.5, 10, 10);

             case 15:
              if (!cc.vv.gameData.getCollectNode().isSuperBonus()) {
                _context.next = 19;
                break;
              }
              if (!(cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime() == 1)) {
                _context.next = 19;
                break;
              }
              _context.next = 19;
              return _this4.showRandomMa();

             case 19:
              _this4._canStop = true;

             case 20:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this5 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this5.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

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
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, idx, symbol, nWin, nTotal, isNormalGame, _nWin, _nTotal, _i, reel, j, _symbol2, _symbol, _i2, data, symbol1, _i3, key, _symbol3, _i4, _key, _symbol4;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              _this6._stayNode.removeAllChildren();
              _this6._mask.stopAllActions();
              _this6._mask.active = false;
              _this6._chufaFreeGame = false;
              _this6._bonuskuang.active = false;
              if (!(_this6._gameInfo.randWildIdxs && _this6._gameInfo.randWildIdxs.length > 0)) {
                _context3.next = 19;
                break;
              }
              i = 0;

             case 8:
              if (!(i < _this6._gameInfo.randWildIdxs.length)) {
                _context3.next = 17;
                break;
              }
              idx = _this6._gameInfo.randWildIdxs[i];
              symbol = _this6.GetSymbolByIdx(idx);
              symbol && symbol.changeWild();
              _context3.next = 14;
              return _this6.awaitTime(.2);

             case 14:
              i++;
              _context3.next = 8;
              break;

             case 17:
              _context3.next = 19;
              return _this6.awaitTime(.8);

             case 19:
              if (!_this6._gameInfo.jackpot) {
                _context3.next = 23;
                break;
              }
              _this6.showJackpotWinEffect(_this6._gameInfo.jackpot.id - 1);
              _context3.next = 23;
              return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(_this6._gameInfo.jackpot.value, _this6._gameInfo.jackpot.id);

             case 23:
              _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              if (_this6._gameInfo.bonusGame) {
                nWin -= _this6._gameInfo.bonusGame.winCoin;
                nTotal -= _this6._gameInfo.bonusGame.winCoin;
                isNormalGame = false;
              }
              if (!(!_this6._isInFree && _this6._bonusSpin)) {
                _context3.next = 36;
                break;
              }
              _nWin = _this6._bottomScript.getCurrentWin() + cc.vv.gameData.GetGameWin();
              _nTotal = _nWin;
              _context3.next = 34;
              return _this6.ShowWinCoin(_nWin, _nTotal, true);

             case 34:
              _context3.next = 38;
              break;

             case 36:
              _context3.next = 38;
              return _this6.ShowWinCoin(nWin, nTotal, isNormalGame);

             case 38:
              if (!_this6._gameInfo.bonusGame) {
                _context3.next = 73;
                break;
              }
              cc.vv.gameData.getManage().showBonusBg();
              cc.vv.gameData.getCollectNode().hide();
              for (_i = 0; _i < _this6._reels.length; _i++) {
                reel = _this6._reels[_i];
                for (j = 0; j < reel._symbols.length; j++) {
                  _symbol2 = reel._symbols[j];
                  _symbol2.ShowNormal();
                  _symbol2.ShowKuang(false);
                }
              }
              cc.vv.gameData.getManage().PausePool(_this6._gameInfo.bonusGame.jackpotValues);
              _symbol = _this6.GetSymbolByIdx(_this6._gameInfo.bonusGame.bonusIdx);
              if (!_symbol) {
                _context3.next = 49;
                break;
              }
              _symbol.playTriggerAnimation();
              _context3.next = 48;
              return _this6.awaitTime(1);

             case 48:
              _symbol.ShowNormal();

             case 49:
              if (!cc.vv.gameData.getManage()._isInFree) {
                _context3.next = 57;
                break;
              }
              _this6._mask.active = true;
              _this6._mask.opacity = 140;
              _context3.next = 54;
              return cc.vv.gameData.getPopWinManage().showBonusGameFreeStart();

             case 54:
              _this6._mask.active = false;
              _context3.next = 62;
              break;

             case 57:
              _this6._mask.active = true;
              _this6._mask.opacity = 140;
              _context3.next = 61;
              return cc.vv.gameData.getPopWinManage().showBonusGameStart();

             case 61:
              _this6._mask.active = false;

             case 62:
              _this6._bonuskuang.active = true;
              _this6._gameInfo.bonusGame.lockSymbols.length > 0 && Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_lock);
              for (_i2 = 0; _i2 < _this6._gameInfo.bonusGame.lockSymbols.length; _i2++) {
                data = _this6._gameInfo.bonusGame.lockSymbols[_i2];
                symbol1 = _this6.GetSymbolByIdx(data.idx);
                symbol1 && symbol1.showSuo();
              }
              if (!_symbol) {
                _context3.next = 68;
                break;
              }
              _context3.next = 68;
              return _symbol.showZhaQiu();

             case 68:
              cc.vv.gameData.getBonus().showBonus(_symbol._reelIdx, _this6._gameInfo.bonusGame.wheels, _this6.OnSpinEnd.bind(_this6), _this6._gameInfo.bonusGame.stopIdx - 1);
              _context3.next = 71;
              return _this6.awaitTime(1.3);

             case 71:
              _this6.startBonusMove(_this6._gameInfo.bonusGame);
              return _context3.abrupt("return");

             case 73:
              cc.vv.gameData.getManage().ResumePausePool();
              cc.vv.gameData.getManage().hideBonusBg();
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context3.next = 87;
                break;
              }
              if (!_this6._gameInfo.freeResult) {
                _context3.next = 85;
                break;
              }
              if (!(_this6._gameInfo.freeResult.freeInfo && _this6._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context3.next = 85;
                break;
              }
              for (_i3 = 0; _i3 < _this6._gameInfo.freeResult.freeInfo.scatterIdx.length; _i3++) {
                key = _this6._gameInfo.freeResult.freeInfo.scatterIdx[_i3];
                _symbol3 = _this6.GetSymbolByIdx(Number(key));
                _symbol3 && _symbol3.playWinAnimation();
              }
              if (!(_this6._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context3.next = 85;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell2);
              _context3.next = 83;
              return _this6.awaitTime(2);

             case 83:
              _context3.next = 85;
              return _this6.CheckFreeEnterFreeGame(_this6._gameInfo.freeResult.freeInfo.freeCnt);

             case 85:
              _context3.next = 99;
              break;

             case 87:
              if (!_this6._gameInfo.freeResult) {
                _context3.next = 99;
                break;
              }
              if (!(_this6._gameInfo.freeResult.freeInfo && _this6._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context3.next = 99;
                break;
              }
              for (_i4 = 0; _i4 < _this6._gameInfo.freeResult.freeInfo.scatterIdx.length; _i4++) {
                _key = _this6._gameInfo.freeResult.freeInfo.scatterIdx[_i4];
                _symbol4 = _this6.GetSymbolByIdx(Number(_key));
                _symbol4 && _symbol4.playWinAnimation();
              }
              if (!(_this6._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context3.next = 99;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              _context3.next = 94;
              return _this6.awaitTime(1);

             case 94:
              cc.vv.gameData.getCollectNode().addPoint(_this6._gameInfo.freeResult.freeInfo.scatterIdx);
              _context3.next = 97;
              return _this6.awaitTime(1);

             case 97:
              _context3.next = 99;
              return _this6.CheckEnterFreeGame(_this6._gameInfo.freeResult.freeInfo.freeCnt);

             case 99:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 102;
                break;
              }
              _context3.next = 102;
              return _this6.CheckExitFreeGame();

             case 102:
              _this6.CanDoNextRound();

             case 103:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      if (!cc.vv.gameData.getCollectNode().isSuperBonus()) {
                        _context5.next = 9;
                        break;
                      }
                      _context5.next = 5;
                      return cc.vv.gameData.getPopWinManage().showSuperBonusWinCoin(nWin);

                     case 5:
                      _context5.next = 7;
                      return cc.vv.gameData.getQiePing().showQiu(function() {
                        _this7.ShowGameview(false);
                        cc.vv.gameData.getManage().changeSlot(0);
                        cc.vv.gameData.getCollectNode().resetCollect();
                      });

                     case 7:
                      _context5.next = 13;
                      break;

                     case 9:
                      _context5.next = 11;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin);

                     case 11:
                      _context5.next = 13;
                      return cc.vv.gameData.getQiePing().showGongDian(function() {
                        _this7.ShowGameview(false);
                        cc.vv.gameData.getManage().changeSlot(0);
                      });

                     case 13:
                      _this7.ShowFreeTimes(false);
                      cc.vv.gameData.SetTotalFree(0);
                      _context5.next = 17;
                      return _this7.ShowWinCoin(nWin, nTotal, true);

                     case 17:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 19:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame(num) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinFree(num);

                     case 2:
                      _context7.next = 4;
                      return _this8.awaitTime(1);

                     case 4:
                      sucess();

                     case 5:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame(num) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      if (!cc.vv.gameData.getCollectNode().isSuperBonus()) {
                        _context9.next = 10;
                        break;
                      }
                      _context9.next = 3;
                      return cc.vv.gameData.getPopWinManage().showSuperBonusStart();

                     case 3:
                      _context9.next = 5;
                      return cc.vv.gameData.getQiePing().showQiu(function() {
                        _this9.ShowGameview(true);
                        cc.vv.gameData.GetSlotsScriptById(0).hide();
                      });

                     case 5:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.map_bgm);
                      _context9.next = 8;
                      return cc.vv.gameData.getManage().changeSlot(2);

                     case 8:
                      _context9.next = 17;
                      break;

                     case 10:
                      _context9.next = 12;
                      return cc.vv.gameData.getPopWinManage().showFreeGameTimes(num);

                     case 12:
                      _context9.next = 14;
                      return cc.vv.gameData.getQiePing().showGongDian(function() {
                        _this9.ShowGameview(true);
                        cc.vv.gameData.GetSlotsScriptById(0).hide();
                      });

                     case 14:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                      _context9.next = 17;
                      return cc.vv.gameData.getManage().changeSlot(1);

                     case 17:
                      _this9.ShowFreeTimes(true);
                      sucess();

                     case 19:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        cc.vv.gameData.getManage()._isInFree = bFree;
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var normalSuper = cc.find("Canvas/safe_node/spr_bg_superBonus");
        normalBg && (normalBg.active = !bFree);
        if (cc.vv.gameData.getCollectNode().isSuperBonus()) {
          normalSuper.active = bFree;
          normalFree.active = false;
        } else {
          normalFree.active = bFree;
          normalSuper.active = false;
        }
      },
      ShowFreeTimes: function ShowFreeTimes(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          cc.vv.gameData.getCollectNode().isSuperBonus() && this._bottomScript.showTotalBet(false);
        } else {
          this._bottomScript.ShowFreeModel(false);
          this._bottomScript.showTotalBet(true);
        }
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        this.clearSlots();
        this._super();
      },
      clearSlots: function clearSlots() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
            symbol.ShowKuang(false);
          }
        }
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._canShowStop && this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
      },
      CanStopSlot: function CanStopSlot() {
        return this._canStop;
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        cc.vv.gameData.getCollectNode().changeCollectNode();
      },
      showFreeGameEffect: function showFreeGameEffect(time, x, y) {
        var _this10 = this;
        this.node.runAction(cc.shake(time, x, y));
        this._kuangFree.active = true;
        this.scheduleOnce(function() {
          _this10._kuangFree.active = false;
        }, time + .5);
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (!this._bStopRightnow && !this._chufaFreeGame) {
          var isPlayAnit = false;
          for (var i = 0; i < this._reels.length; i++) {
            var idx = this._reels[i].GetReelIdx();
            idx == colIdx + 1 && (isPlayAnit = this._reels[i].playAntiAnimation());
            if (idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      showRandomMa: function showRandomMa() {
        var _this11 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee11$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                _loop = regeneratorRuntime.mark(function _loop(i) {
                  var ma, idx, symbol, symbolpos, pos, maSp, reel;
                  return regeneratorRuntime.wrap(function _loop$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      ma = cc.instantiate(cc.vv.gameData.GetPrefabByName("m1za"));
                      ma.parent = cc.vv.gameData.getManage()._collectFree;
                      idx = Global.random(1, 40);
                      symbol = _this11.GetSymbolByIdx(idx);
                      if (symbol) {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_add);
                        symbolpos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                        pos = cc.vv.gameData.getManage()._collectFree.convertToNodeSpaceAR(symbolpos);
                        ma.position = pos;
                        maSp = ma.getComponent(sp.Skeleton);
                        maSp.setAnimation(0, "animation", false);
                        maSp.setCompleteListener(function() {
                          ma.parent = null;
                          maSp.setCompleteListener(null);
                        });
                        reel = _this11._reels[symbol._reelIdx];
                        ma.y += Math.abs(reel._curY);
                      }
                      _context11.next = 7;
                      return _this11.awaitTime(.1);

                     case 7:
                     case "end":
                      return _context11.stop();
                    }
                  }, _loop);
                });
                i = 0;

               case 2:
                if (!(i < 20)) {
                  _context12.next = 7;
                  break;
                }
                return _context12.delegateYield(_loop(i), "t0", 4);

               case 4:
                i++;
                _context12.next = 2;
                break;

               case 7:
                sucess();

               case 8:
               case "end":
                return _context12.stop();
              }
            }, _callee11);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this12 = this;
        var reelStateInfo = this._cfg.reelStateInfo;
        cc.vv.gameData.getManage()._isInFree && (reelStateInfo = this._cfg.reelStateInfoFree);
        if (!reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var scatterNum = 0;
        var _iterator = _createForOfIteratorHelper(reelStateInfo), _step;
        try {
          var _loop2 = function _loop2() {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i5 = 0; _i5 < reelResults.length; _i5++) {
              var item = _this12._reels[_i5];
              var reelRes = reelResults[_i5];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i5] > 0 && isContinuous && (stateInfo.isAnt = true);
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
                if (2 === info.id[0]) {
                  scatterNum++;
                  stateInfo.symbolStopSound = info.symbolStopSound + scatterNum;
                }
              }
              stateInfo.continuous && stateInfo.counts[_i5] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop2();
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  GenghisKhan_bounsReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb8acXeKj5AHrZw4yNVSzJ2", "GenghisKhan_bounsReel");
    "use strict";
    var speed = 1600;
    var g = 680;
    cc.Class({
      extends: cc.Component,
      properties: {
        _reelIdx: 0,
        _result: [],
        _backReuslt: [],
        _symbols: [],
        _moveLength: 0,
        _cfg: null,
        _remainingAmount: 0,
        _randomVal: 0,
        _mask: null,
        _bg: null,
        _stopTime: 0,
        _bMoveing: false,
        _moveSpeed: 0,
        _holder: null,
        _callBack: null
      },
      onLoad: function onLoad() {
        this._cfg = cc.vv.gameData.getGameCfg();
        this._mask = cc.find("mask", this.node);
        this._holder = cc.find("holder", this._mask);
      },
      start: function start() {},
      init: function init(index) {
        this._reelIdx = index;
        this._bg = cc.find("reels_bg/reel" + this._reelIdx, this.node.parent.parent);
        this.hide();
      },
      randomVal: function randomVal() {
        if (this._remainingAmount > 0) {
          this._remainingAmount--;
          return this._randomVal;
        }
        var index = Global.random(0, this._cfg.randomSymbols_bonus.length - 1);
        var val = this._cfg.randomSymbols_bonus[index];
        this._randomVal = val;
        this._remainingAmount = 3;
        return this._randomVal;
      },
      hide: function hide() {
        this.node.active = false;
        this._bg.active = false;
        if (this._callBack) {
          this._callBack();
          this._callBack = null;
        }
      },
      show: function show(result, callBack, stopIdx) {
        this._callBack = callBack;
        this.node.active = true;
        this._bg.active = true;
        this.clearSymbols();
        this.showAnimation(result, stopIdx);
      },
      clearSymbols: function clearSymbols() {
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          symbol.node.parent = null;
        }
        this._symbols = [];
      },
      showAnimation: function showAnimation(result, stopIdx) {
        var _this = this;
        this.setResult(result, stopIdx);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_rise);
        var nodeSp = this._bg.getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "animation2", false);
        nodeSp.addAnimation(0, "animation3", true);
        nodeSp.setCompleteListener(function() {
          _this.startSpin();
          nodeSp.setCompleteListener(null);
        });
      },
      setResult: function setResult(result, stopIdx) {
        this._result = result;
        this._backReuslt = [];
        for (var i = stopIdx; i < result.length; i++) this._backReuslt.push(result[i]);
      },
      startSpin: function startSpin() {
        0 == this._symbols.length && this.updateSymbol();
        this._stopTime = 4.5;
        this._bMoveing = true;
        this._moveSpeed = speed;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_roll);
      },
      update: function update(dt) {
        this._stopTime -= dt;
        if (this._bMoveing && this._symbols.length > 0) {
          var pos = this._moveSpeed * dt;
          for (var i = 0; i < this._symbols.length; i++) {
            var symbol = this._symbols[i];
            symbol.node.y -= pos;
          }
          this._moveLength += pos;
          if (this._moveLength > this._cfg.symbolSize.height) {
            this.updateSymbol();
            this._moveLength -= this._cfg.symbolSize.height;
          }
        }
        if (this._stopTime <= 0) {
          this._moveSpeed -= g * dt;
          this._moveSpeed < 150 && (this._moveSpeed = 150);
        }
      },
      updateSymbol: function updateSymbol() {
        var _this2 = this;
        var tempNode = null;
        this._symbols[0] && this._symbols[0].node.y <= -this._cfg.symbolSize.height / 2 && (tempNode = this._symbols.shift());
        if (!tempNode) {
          var node = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          tempNode = node.addComponent(this._cfg.scripts.Symbols);
          tempNode.node.parent = this._mask;
        }
        var id = this.randomVal();
        var resultId = null;
        if (this._bMoveing && this._stopTime <= 2) {
          resultId = this._result.shift();
          if (!resultId) {
            this._bMoveing = false;
            var lastNodePosY = this._holder.y - this._cfg.symbolSize.height / 2;
            var trueLastNodePosY = this._symbols[0].node.y;
            var cha = lastNodePosY - trueLastNodePosY;
            var time = -cha / this._moveSpeed;
            time < 0 && (time = 0);
            for (var i = 0; i < this._symbols.length; i++) {
              var symbol = this._symbols[i];
              var dstpos = symbol.node.y + cha;
              cc.tween(symbol.node).to(time, {
                y: dstpos
              }).start();
            }
            this.scheduleOnce(function() {
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_stop);
              _this2.hideAnimation();
            }, time + .5);
          }
        }
        resultId && (id = resultId);
        tempNode.ShowById(id);
        this._symbols.length > 0 ? tempNode.node.y = this._symbols[this._symbols.length - 1].node.y + this._cfg.symbolSize.height : tempNode.node.y = this._mask.height + this._cfg.symbolSize.height / 2 + this._holder.y;
        this._symbols.push(tempNode);
      },
      hideAnimation: function hideAnimation() {
        var _this3 = this;
        var nodeSp = this._bg.getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "animation4", false);
        nodeSp.setCompleteListener(function() {
          _this3.hide();
          nodeSp.setCompleteListener(null);
        });
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          cc.tween(symbol.node).to(.5, {
            opacity: 0
          }).start();
        }
        for (var _i = 0; _i < this._backReuslt.length; _i++) {
          var id = this._backReuslt[_i];
          var reel = cc.vv.gameData.GetSlotsScript()._reels[this._reelIdx - 1];
          var reelSymbol = reel._symbols[_i];
          reelSymbol && reelSymbol.ShowById(id);
        }
        cc.vv.gameData.getCollectNode().show();
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_bouns: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e847C/iiBHKYE5rm4IDBJx", "GenghisKhan_bouns");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _reels: []
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 6; i++) {
          var reel = cc.find("reels/reel" + i, this.node).addComponent("GenghisKhan_bounsReel");
          this._reels.push(reel);
          reel.init(i);
        }
      },
      start: function start() {},
      showBonus: function showBonus(idx, result, callBack, stopIdx) {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          reel.hide();
        }
        this._reels[idx].show(result, callBack, stopIdx);
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c81a094z+xCBYGekeLJTTzw", "GenghisKhan_manage");
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
        _malizi1: null,
        _malizi2: null,
        _tianma: null,
        _reels_frame: null,
        _prizePool: null,
        _bonusBg: null,
        _isInFree: false,
        _collectFree: null
      },
      onLoad: function onLoad() {
        this._malizi1 = cc.find("safe_node/reels_frame/malizi1", this.node);
        this._malizi1.active = false;
        this._malizi2 = cc.find("safe_node/reels_frame/malizi2", this.node);
        this._malizi2.active = false;
        this._tianma = cc.find("safe_node/tianma", this.node);
        this._tianma.on("click", this.onClickTianMa, this);
        this._reels_frame = cc.find("safe_node/reels_frame", this.node);
        this._prizePool = cc.find("safe_node/LMSlots_PrizePool_1", this.node).getComponent("GenghisKhan_PrizePool");
        this._bonusBg = cc.find("safe_node/spr_bg_bonus", this.node);
        this._collectFree = cc.find("safe_node/collectFree", this.node);
      },
      start: function start() {
        this.ReconnectShow();
      },
      onClickTianMa: function onClickTianMa() {
        var _this = this;
        this._tianma.getComponent(cc.Button).interactable = false;
        var tianmaSp = this._tianma.getComponent(sp.Skeleton);
        tianmaSp.setAnimation(0, "animation2", false);
        tianmaSp.addAnimation(0, "animation1", true);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.interaction);
        this.scheduleOnce(function() {
          _this._tianma.getComponent(cc.Button).interactable = true;
        }, 3);
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ReconnectShow: function ReconnectShow() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.getCollectNode().setCollectData(cc.vv.gameData._deskInfo.bonusTrail, cc.vv.gameData._deskInfo.needBet);
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                if (cc.vv.gameData.getCollectNode().isSuperBonus()) {
                  _this3.recoverySlot(2);
                  Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.map_bgm);
                } else {
                  _this3.recoverySlot(1);
                  Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                }
                cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(true);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                cc.vv.gameData.GetBottomScript().SetWin(nTotal);
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              } else {
                cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(false);
                _this3.recoverySlot(0);
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      changeSlot: function changeSlot(index) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                if (0 == index) {
                  _this4._tianma.active = true;
                  _this4._tianma.opacity = 255;
                } else cc.tween(_this4._tianma).delay(.5).to(.5, {
                  opacity: 0
                }).call(function() {
                  _this4._tianma.active = false;
                }).start();
                cc.vv.gameData.setSlotsIndex(index);
                cc.vv.gameData.showSlot();
                _context2.next = 5;
                return _this4.awaitTime(.5);

               case 5:
                sucess();

               case 6:
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
      recoverySlot: function recoverySlot(index) {
        if (0 == index) {
          this._tianma.active = true;
          this._tianma.opacity = 255;
        } else this._tianma.active = false;
        cc.vv.gameData.setSlotsIndex(index);
        cc.vv.gameData.recoverySlot();
      },
      showFreeGameEffect: function showFreeGameEffect(time, x, y) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var tianmaSp;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.notify);
                _this5._malizi1.active = true;
                _this5._malizi2.active = true;
                _context3.next = 5;
                return _this5.awaitTime(.6);

               case 5:
                tianmaSp = _this5._tianma.getComponent(sp.Skeleton);
                tianmaSp.setAnimation(0, "animation3", false);
                tianmaSp.addAnimation(0, "animation1", true);
                _this5._reels_frame.runAction(cc.shake(time - .5, x, y));
                cc.vv.gameData.GetSlotsScript().showFreeGameEffect(time - .5, x, y);
                _this5._prizePool.node.runAction(cc.shake(time - .5, x, y));
                _context3.next = 13;
                return _this5.awaitTime(time);

               case 13:
                _this5._malizi1.active = false;
                _this5._malizi2.active = false;
                success();

               case 16:
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
      PausePool: function PausePool(jackpotValues) {
        var data = [];
        for (var i = 0; i < jackpotValues.length; i++) {
          var element = jackpotValues[i];
          data.push({
            prizeType: i,
            pauseNum: element
          });
        }
        this._prizePool.PausePool(data);
      },
      ResumePausePool: function ResumePausePool() {
        this._prizePool.ResumePausePool();
      },
      showBonusBg: function showBonusBg() {
        this._bonusBg.active = true;
        this._bonusBg.opacity = 0;
        cc.tween(this._bonusBg).to(.5, {
          opacity: 255
        }).start();
        Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.bonus_bgm);
      },
      hideBonusBg: function hideBonusBg() {
        var _this6 = this;
        if (this._bonusBg.active) {
          cc.tween(this._bonusBg).to(.5, {
            opacity: 0
          }).call(function() {
            _this6._bonusBg.active = false;
          }).start();
          cc.vv.gameData.GetSlotsScript()._isInFree ? cc.vv.gameData.getCollectNode().isSuperBonus() ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.map_bgm) : Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm) : Global.SlotsSoundMgr.playNormalBgm(true);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_qiePing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a5b1itllZOtav0lRInw6Pd", "GenghisKhan_qiePing");
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
        qiepinGD: {
          default: null,
          type: cc.Node
        },
        qiepinQiu: {
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
      showGongDian: function showGongDian(callBack) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_free);
                _this2.qiepinGD.active = true;
                show_popupSp = _this2.qiepinGD.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this2.qiepinGD.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context.next = 7;
                return _this2.awaitTime(.5);

               case 7:
                callBack && callBack();

               case 8:
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
      showQiu: function showQiu(callBack) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_map);
                _this3.qiepinQiu.active = true;
                show_popupSp = _this3.qiepinQiu.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this3.qiepinQiu.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context2.next = 7;
                return _this3.awaitTime(.5);

               case 7:
                callBack && callBack();

               case 8:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  GenghisKhan_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78f01w3UhBCO4NRC5+ENvII", "GenghisKhan_reel");
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
      start: function start() {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        if (!cc.vv.gameData.GetSlotsScript()._bonusSpin) {
          var lastReelStopIdx = slots.GetLastStopReelIdx();
          this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionBefore(this._reelIdx);
        this.playReelStop();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      playReelStop: function playReelStop() {
        var reelStateInfo = this._cfg.reelStateInfo;
        cc.vv.gameData.getManage()._isInFree && (reelStateInfo = this._cfg.reelStateInfoFree);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) ? item.playStopAnimation() : item.playidleAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (reelStateInfo && reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _info = _step2.value;
              if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          var soundPath = reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      playAntiAnimation: function playAntiAnimation() {
        var reelStateInfo = this._cfg.reelStateInfo;
        cc.vv.gameData.getManage()._isInFree && (reelStateInfo = this._cfg.reelStateInfoFree);
        var isPlayAniti = false;
        if (reelStateInfo && reelStateInfo[0]) {
          var _iterator3 = _createForOfIteratorHelper(this._reelState), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var info = _step3.value;
              if (info.isAnt && info.antiNode) {
                this.ShowAntiEffect(true, info.antiNode);
                var soundPath = info.path;
                soundPath || (soundPath = cc.vv.gameData.getGameDir());
                cc.vv.AudioManager.playEff(soundPath, info.antSound, true);
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
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        var reelStateInfo = this._cfg.reelStateInfo;
        cc.vv.gameData.getManage()._isInFree && (reelStateInfo = this._cfg.reelStateInfoFree);
        if (false == bShow) {
          if (reelStateInfo) {
            var _iterator4 = _createForOfIteratorHelper(reelStateInfo), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var info = _step4.value;
                var node = cc.find("effect/reel" + (this._reelIdx + 1) + "/" + info.antiNode, this.node.parent);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } else {
          var _node = cc.find("effect/reel" + (this._reelIdx + 1) + "/node_anti", this.node.parent);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1aeffect/node_anti");
        }
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) if (this._result instanceof Array) {
          this.ReadyToStop();
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        } else cc.error("LMSlots_Reel_Base.updataSymbol\u8bbe\u7f6e\u7684\u7ed3\u679c\u4e0d\u662f\u6570\u7ec4!");
        symbolData ? symbol.ShowById(symbolData.sid, symbolData.data) : symbol.ShowRandomSymbol_move();
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  GenghisKhan_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9374brEFrpDAqL9irtaif7x", "GenghisKhan_sound");
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
          default: "games/GenghisKhan/",
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
          default: "symbol_scatter",
          override: true
        },
        bell: "bell",
        bell2: "bell2",
        bonus_sweep: "bonus_sweep",
        click: "click",
        collect_full: "collect_full",
        collect_light: "collect_light",
        collect_lock: "collect_lock",
        collect_unlock: "collect_unlock",
        interaction: "interaction",
        jp_lock: "jp_lock",
        jp_unlock: "jp_unlock",
        notify: "notify",
        popup_out: "popup_out",
        reel_notify: "reel_notify",
        reel_notify2: "reel_notify2"
      }, _defineProperty(_properties, "reel_stop", "reel_stop"), _defineProperty(_properties, "scatter_sweep", "scatter_sweep"), 
      _defineProperty(_properties, "shake", "shake"), _defineProperty(_properties, "symbol_bonus", "symbol_bonus"), 
      _defineProperty(_properties, "symbol_scatter1", "symbol_scatter1"), _defineProperty(_properties, "symbol_scatter2", "symbol_scatter2"), 
      _defineProperty(_properties, "symbol_scatter3", "symbol_scatter3"), _defineProperty(_properties, "symbol_scatter4", "symbol_scatter4"), 
      _defineProperty(_properties, "symbol_scatter5", "symbol_scatter5"), _defineProperty(_properties, "transition_free", "transition_free"), 
      _defineProperty(_properties, "transition_map", "transition_map"), _defineProperty(_properties, "welcome", "welcome"), 
      _defineProperty(_properties, "bonus_bgm", "bonus_bgm"), _defineProperty(_properties, "bonus_boom", "bonus_boom"), 
      _defineProperty(_properties, "bonus_dialog_collect_show", "bonus_dialog_collect_show"), 
      _defineProperty(_properties, "bonus_dialog_start_show", "bonus_dialog_start_show"), 
      _defineProperty(_properties, "bonus_lock", "bonus_lock"), _defineProperty(_properties, "bonus_rise", "bonus_rise"), 
      _defineProperty(_properties, "bonus_roll", "bonus_roll"), _defineProperty(_properties, "bonus_stop", "bonus_stop"), 
      _defineProperty(_properties, "Grand_jp_dialog_collect_show", "Grand_jp_dialog_collect_show"), 
      _defineProperty(_properties, "Major_jp_dialog_collect_show", "Major_jp_dialog_collect_show"), 
      _defineProperty(_properties, "MINOR_jp_dialog_collect_show", "MINOR_jp_dialog_collect_show"), 
      _defineProperty(_properties, "random_wild", "random_wild"), _defineProperty(_properties, "free_bgm", "free_bgm"), 
      _defineProperty(_properties, "free_dialog_collect_show", "free_dialog_collect_show"), 
      _defineProperty(_properties, "free_dialog_start_show", "free_dialog_start_show"), 
      _defineProperty(_properties, "free_retrigger_dialog_start_show", "free_retrigger_dialog_start_show"), 
      _defineProperty(_properties, "free_rise", "free_rise"), _defineProperty(_properties, "map_bgm", "map_bgm"), 
      _defineProperty(_properties, "mapfree_dialog_collect_show", "mapfree_dialog_collect_show"), 
      _defineProperty(_properties, "mapfree_dialog_start_show", "mapfree_dialog_start_show"), 
      _defineProperty(_properties, "wild_add", "wild_add"), _properties)
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  GenghisKhan_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe027G97MFA755YEAByrqVO", "GenghisKhan_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      showZhaQiu: function showZhaQiu() {
        var _this = this;
        return new Promise(function(success, failed) {
          if (3 !== _this._id) {
            success();
            return;
          }
          var tempNode = cc.instantiate(_this.node);
          tempNode.parent = cc.vv.gameData.GetSlotsScript()._stayNode;
          tempNode.active = true;
          var pos = _this.node.convertToWorldSpaceAR(cc.v2(0, 0));
          var endPos = cc.vv.gameData.GetSlotsScript()._stayNode.convertToNodeSpaceAR(pos);
          tempNode.position = endPos;
          var node = cc.find("w14", tempNode);
          node.active = true;
          var nodeSp = node.getComponent(sp.Skeleton);
          nodeSp.setAnimation(0, "animation3", true);
          _this.scheduleOnce(function() {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_boom);
            var animation = cc.find("zhaqiu", tempNode);
            animation.active = true;
            var animationSp = animation.getComponent(sp.Skeleton);
            animationSp.setAnimation(0, "animation", false);
            animationSp.setCompleteListener(function() {
              tempNode.parent = null;
              success();
              animationSp.setCompleteListener(null);
            });
          }, 1.5);
        });
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
          if ("" != cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani && nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
      },
      playidleAnimation: function playidleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" != cfg.symbol[id].idle_ani.name) {
            aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
        return isPlay;
      },
      showSuo: function showSuo() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        var tempNode = cc.instantiate(this.node);
        tempNode.parent = cc.vv.gameData.GetSlotsScript()._stayNode;
        tempNode.active = true;
        var pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        var endPos = cc.vv.gameData.GetSlotsScript()._stayNode.convertToNodeSpaceAR(pos);
        tempNode.position = endPos;
        cc.find(cfg.symbol[id].node, tempNode).active = true;
        var suo = cc.find("suo2", tempNode);
        suo.active = true;
        var suoSp = suo.getComponent(sp.Skeleton);
        suoSp.setAnimation(0, "animation", false);
        suoSp.addAnimation(0, "animation2", true);
        suoSp.setCompleteListener(function() {
          suoSp.setCompleteListener(null);
        });
      },
      changeWild: function changeWild() {
        this.ShowById(1);
        this.playTriggerAnimation();
      },
      ShowRandomSymbol_move: function ShowRandomSymbol_move() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols_move.length);
        var randVal = cfg.randomSymbols_move[randIdx - 1];
        this.ShowById(randVal);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "GenghisKhan_Bottom", "GenghisKhan_Cfg", "GenghisKhan_CollectNode", "GenghisKhan_GameData", "GenghisKhan_Logic", "GenghisKhan_Pop", "GenghisKhan_PrizePool", "GenghisKhan_Slots", "GenghisKhan_bouns", "GenghisKhan_bounsReel", "GenghisKhan_manage", "GenghisKhan_qiePing", "GenghisKhan_reel", "GenghisKhan_sound", "GenghisKhan_symbol" ]);