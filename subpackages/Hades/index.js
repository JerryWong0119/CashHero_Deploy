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
  Hades_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdaf8hZYYBFcomIYT3W227r", "Hades_Bottom");
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
  Hades_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7449trlLlKSa1/n9+mlWAP", "Hades_Cfg");
    "use strict";
    var _symbol, _cardmap;
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
        node: "s15",
        win_node: "w15",
        win_ani: {
          name: "Wild",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 2, {
        node: "s12",
        win_node: "w13",
        win_ani: {
          name: "Scatter_02",
          zIndex: 800
        },
        stop_ani: {
          name: "Scatter_01",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 3, {
        node: "s14"
      }), _defineProperty(_symbol, 4, {
        node: "s1"
      }), _defineProperty(_symbol, 5, {
        node: "s2"
      }), _defineProperty(_symbol, 6, {
        node: "s3"
      }), _defineProperty(_symbol, 7, {
        node: "s4"
      }), _defineProperty(_symbol, 8, {
        node: "s5"
      }), _defineProperty(_symbol, 9, {
        node: "s6"
      }), _defineProperty(_symbol, 10, {
        node: "s7"
      }), _defineProperty(_symbol, 11, {
        node: "s8"
      }), _defineProperty(_symbol, 12, {
        node: "s9"
      }), _defineProperty(_symbol, 13, {
        node: "s10"
      }), _defineProperty(_symbol, 14, {
        node: "s11"
      }), _defineProperty(_symbol, 102, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "Scatter_03",
          zIndex: 800
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "Hades_Bottom",
        Slots: "Hades_Slots",
        Reels: "Hades_reel",
        Symbols: "Hades_symbol",
        Sound: "Hades_sound"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 128,
        height: 109
      },
      helpItems: [ "games/Hades/prefab/LMSlots_Help_item1", "games/Hades/prefab/LMSlots_Help_item2", "games/Hades/prefab/LMSlots_Help_item3" ],
      scatterId: 2,
      autoModelDelay: 1,
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 12, 12, 14, 14, 14, 14, 4, 4, 4, 4, 2, 1, 13, 13, 13, 13, 1, 4, 4, 4, 4, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 14, 14, 14, 14, 6, 5, 5, 11, 4, 4, 4, 4, 2, 12, 12, 8, 8, 8, 4, 4, 13, 13, 13, 13, 10, 10, 10, 10, 14, 14, 14, 14, 1, 1, 2, 7, 8, 8, 8, 12, 12, 12, 12, 4, 2, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 4, 4, 4, 4, 11, 10, 10, 14, 14, 14, 14, 10, 2, 7, 7, 7, 7, 13, 13, 13, 13, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 4, 4, 4, 4, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 2, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 13, 13, 13, 13, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmap, 2, [ 13, 13, 13, 13, 7, 7, 7, 7, 14, 14, 14, 14, 8, 8, 7, 11, 11, 11, 3, 1, 1, 7, 7, 1, 14, 14, 14, 14, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 4, 4, 4, 9, 9, 3, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 13, 13, 13, 13, 10, 10, 14, 14, 14, 14, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 3, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 3, 4, 4, 2, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 13, 13, 13, 13, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmap, 3, [ 4, 4, 4, 4, 14, 14, 14, 14, 10, 9, 11, 11, 11, 11, 14, 14, 14, 14, 8, 8, 12, 12, 12, 12, 7, 7, 7, 13, 13, 13, 13, 4, 4, 4, 4, 4, 4, 4, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 13, 13, 13, 13, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 2, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 14, 14, 14, 14, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 4, 4, 4, 4, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 4, 4, 4, 4, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 4, 4, 4, 4, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 13, 13, 13, 13, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 4, [ 8, 9, 9, 9, 13, 13, 13, 13, 14, 14, 14, 14, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 2, 3, 7, 14, 14, 14, 14, 7, 7, 4, 7, 7, 4, 4, 12, 3, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 3, 14, 14, 14, 14, 8, 8, 8, 8, 7, 7, 1, 1, 13, 13, 13, 13, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 3, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 6, 8, 4, 13, 13, 13, 13, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 5, [ 5, 5, 5, 5, 14, 14, 14, 14, 2, 11, 11, 11, 7, 7, 7, 1, 4, 7, 7, 7, 13, 13, 13, 13, 8, 10, 10, 2, 11, 11, 11, 2, 1, 1, 6, 4, 4, 4, 4, 11, 11, 11, 2, 4, 4, 4, 6, 6, 6, 6, 2, 14, 14, 14, 14, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 2, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 4, 4, 4, 4, 2, 7, 7, 7, 7, 1, 1, 2, 4, 4, 4, 4, 8, 8, 8, 8, 6, 6, 6, 5, 4, 4, 4, 4, 2, 5, 5, 5, 5, 13, 13, 13, 13, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 2, 4, 4, 4, 4, 4, 4, 10, 10, 10, 1, 4, 4, 6, 6, 6, 2, 7, 14, 14, 14, 14, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 4, 13, 13, 13, 13, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmap),
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      commEffect: {
        path: "games/Hades/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ]
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/Hades/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelmoon",
        antSound: "reelfast",
        antSpeed: 3200
      }, {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_ani",
        path: "games/Hades/",
        reelStopSound: "reelstop",
        symbolStopSound: "scatter_",
        antSound: "reelfast",
        antSpeed: 3200
      } ],
      reelStateInfoFree: [ {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/Hades/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelmoon",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 2,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_ani",
        path: "games/Hades/",
        reelStopSound: "reelstop",
        symbolStopSound: "scatter_",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      AddAntiTime: 2,
      normalBgm: "ngbgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Hades_CollectNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c755aeFm2dGS4aTznwCkRuM", "Hades_CollectNode");
    "use strict";
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    cc.Class(_defineProperty({
      extends: cc.Component,
      properties: {
        zhezhao: {
          default: null,
          type: cc.Node
        },
        _unlock: null,
        _betup: null,
        _needBet: 0,
        _click: null,
        _betupActive: true
      },
      onLoad: function onLoad() {
        this._unlock = cc.find("B_unlock", this.node);
        this._betup = cc.find("Betup", this.node);
        this.zhezhao.active = false;
        this._unlock.active = false;
        this._betup.active = true;
        this._betupActive = true;
        this._click = cc.find("click", this._betup);
        this._click.on("click", this.onClickNode, this);
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
      isDoubleGame: function isDoubleGame() {
        var curmult = cc.vv.gameData.GetBetIdx();
        return curmult >= this._needBet;
      },
      show: function show() {
        if (!this._betupActive) {
          this._unlock.active = false;
          this.zhezhao.active = false;
          this._betup.active = true;
          this._betupActive = true;
          cc.vv.gameData.getManage().changeKuang(1);
          var betupSp = this._betup.getComponent(sp.Skeleton);
          betupSp.setAnimation(0, "Betup_lock", false);
          betupSp.addAnimation(0, "Betup_idle", true);
          betupSp.setCompleteListener(null);
          this._click.getComponent(cc.Button).interactable = true;
          cc.vv.gameData.getManage().changeSlot(0);
        }
      },
      showUnLock: function showUnLock() {
        var _this2 = this;
        if (this._betupActive) {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
          this._betup.active = true;
          this._betupActive = false;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
          var betupSp = this._betup.getComponent(sp.Skeleton);
          betupSp.setAnimation(0, "Betup_unlock", false);
          betupSp.setCompleteListener(function() {
            _this2._betup.active = false;
            _this2._unlock.active = true;
            cc.vv.gameData.getManage().changeKuang(3);
            _this2._unlock.getComponent(sp.Skeleton).setAnimation(0, "B_unlock", false);
            _this2.zhezhao.active = true;
            _this2.zhezhao.getComponent(sp.Skeleton).setAnimation(0, "B_zhezhao", false);
            betupSp.setCompleteListener(null);
            cc.vv.gameData.getManage().changeSlot(1);
            cc.vv.gameData.GetSlotsScript().CanDoNextRound();
          });
        }
      },
      hide: function hide() {
        this._unlock.active = false;
        this.zhezhao.active = false;
        this._betup.active = false;
        this._betupActive = false;
        cc.vv.gameData.getManage().changeSlot(1);
      },
      startMove: function startMove() {
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult >= this._needBet) {
          this._unlock.active = false;
          this.zhezhao.active = false;
        }
      },
      setCollectData: function setCollectData(needbet) {
        this._needBet = needbet;
        this.initCollectNode();
      },
      onClickNode: function onClickNode() {
        if (cc.vv.gameData.GetSlotsScript()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this._needBet <= cc.vv.gameData._deskInfo.mults.length) {
          var curmult = cc.vv.gameData.GetBetIdx();
          if (curmult >= this._needBet) ; else {
            this._click.getComponent(cc.Button).interactable = false;
            var bottom = cc.vv.gameData.GetBottomScript();
            bottom.SetBetIdx(this._needBet);
          }
        }
      },
      initCollectNode: function initCollectNode() {
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult >= this._needBet) {
          this.hide();
          cc.vv.gameData.getManage().changeKuang(3);
        } else this.show();
      },
      changeCollectNode: function changeCollectNode() {
        var curmult = cc.vv.gameData.GetBetIdx();
        curmult >= this._needBet ? this.showUnLock() : this.show();
      }
    }, "awaitTime", function awaitTime(time) {
      var _this3 = this;
      return new Promise(function(sucess, failed) {
        _this3.scheduleOnce(function() {
          sucess();
        }, time);
      });
    }));
    cc._RF.pop();
  }, {} ],
  Hades_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "200bdPthJlICIQ3Jik+nsHV", "Hades_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collectNode: null,
        _popWin: null,
        _qiePing: null,
        _slotsArr: [],
        _slotsIndex: 0,
        _wildTrans: null,
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
      getWildTransition: function getWildTransition() {
        return this._wildTrans;
      },
      setWildTransition: function setWildTransition(script) {
        this._wildTrans = script;
      },
      showSlot: function showSlot() {
        for (var i = 0; i < this._slotsArr.length; i++) {
          var slot = this._slotsArr[i];
          i == this._slotsIndex ? slot.show() : slot.hide();
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
  Hades_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4e879jMLlPkbfNSBxmIEE9", "Hades_Logic");
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
        var script_slotssuper = cc.find("slotsdouble", safeNode).addComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(script_slotssuper);
        var script_slotsfree = cc.find("slotsfree", safeNode).addComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(script_slotsfree);
        this.node.addComponent("LMSots_OtherSys");
        cfg.puzzleCfg && this.node.addComponent("LMSlots_Puzzle");
        var collectNode = safeNode.getComponentInChildren("Hades_CollectNode");
        collectNode && cc.vv.gameData.setCollectNode(collectNode);
        var popWin = safeNode.getComponentInChildren("Hades_Pop");
        popWin && cc.vv.gameData.setPopWinManage(popWin);
        var qieping = safeNode.getComponentInChildren("Hades_qiePing");
        qieping && cc.vv.gameData.setQiePing(qieping);
        var wildTransition = safeNode.getComponentInChildren("Hades_wildTransition");
        wildTransition && cc.vv.gameData.setWildTransition(wildTransition);
        cc.vv.gameData.setManage(this.node.getComponent("Hades_manage"));
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
  Hades_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84c102hNDJBd6nZka5i7aFH", "Hades_Pop");
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
        var guochang = cc.find("guochang", this.node);
        guochang.active = false;
      },
      showWinEx: function showWinEx() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        var guochang = cc.find("guochang", this.node);
        guochang.active = true;
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
      hideWinEx: function hideWinEx(callBack) {
        var guochang = cc.find("guochang", this.node);
        guochang.active = false;
        callBack && callBack();
        this.node.active = false;
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
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var show_popup, freeTimes;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgbegin);
                _this3.showWinEx();
                show_popup = cc.find("show_freeGameTimes", _this3.node);
                show_popup.active = true;
                freeTimes = cc.find("times", show_popup);
                freeTimes.active = true;
                show_popup.scale = 0;
                cc.tween(show_popup).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 10;
                return _this3.awaitTime(2.5);

               case 10:
                cc.tween(show_popup).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context.next = 13;
                return _this3.awaitTime(.5);

               case 13:
                _this3.hideWinEx(function() {
                  sucess();
                });

               case 14:
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
      showFreeGameWinCoin: function showFreeGameWinCoin(num) {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popup, coin, collectBtn, func;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgend);
                _this4.showWinEx();
                show_popup = cc.find("show_freeGame_winCoin", _this4.node);
                show_popup.active = true;
                coin = cc.find("coin", show_popup);
                collectBtn = cc.find("collectBtn", show_popup);
                show_popup.scale = 0;
                cc.tween(show_popup).to(.5, {
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
                func = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this4._startAddCoin) {
                          _this4._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                        }
                        _context2.next = 4;
                        return _this4.awaitTime(.2);

                       case 4:
                        cc.tween(show_popup).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context2.next = 7;
                        return _this4.awaitTime(.5);

                       case 7:
                        _this4.hideWinEx(function() {
                          sucess();
                        });

                       case 8:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function func() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(collectBtn, func);
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      collectBtn.stopAllActions();
                      _context3.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));

               case 15:
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
      showFreeGameWinFree: function showFreeGameWinFree(num) {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var show_popup, freeTimes5, freeTimes8, _freeTimes, _freeTimes2;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgtrans);
                _this5.showWin();
                show_popup = cc.find("show_freeGame_winfree", _this5.node);
                show_popup.active = true;
                if (5 === num) {
                  freeTimes5 = cc.find("times5", show_popup);
                  freeTimes5.active = true;
                  freeTimes8 = cc.find("times8", show_popup);
                  freeTimes8.active = false;
                } else {
                  _freeTimes = cc.find("times8", show_popup);
                  _freeTimes.active = true;
                  _freeTimes2 = cc.find("times5", show_popup);
                  _freeTimes2.active = false;
                }
                show_popup.scale = 0;
                cc.tween(show_popup).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context5.next = 9;
                return _this5.awaitTime(2.5);

               case 9:
                cc.tween(show_popup).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context5.next = 12;
                return _this5.awaitTime(.5);

               case 12:
                _this5.hideWin(function() {
                  sucess();
                });

               case 13:
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
      showJackPotWinCoin: function showJackPotWinCoin(num) {
        var _this6 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var show_popup, coin, collectBtn, func;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.JPwin);
                _this6.showWin();
                show_popup = cc.find("show_win_jackpot", _this6.node);
                show_popup.active = true;
                coin = cc.find("coin", show_popup);
                collectBtn = cc.find("collectBtn", show_popup);
                show_popup.scale = 0;
                cc.tween(show_popup).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this6._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this6._startAddCoin = false;
                }, null, 0, true);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                func = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this6._startAddCoin) {
                          _this6._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                        }
                        _context6.next = 4;
                        return _this6.awaitTime(.2);

                       case 4:
                        cc.tween(show_popup).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context6.next = 7;
                        return _this6.awaitTime(.5);

                       case 7:
                        _this6.hideWin(function() {
                          sucess();
                        });

                       case 8:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function func() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(collectBtn, func);
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      collectBtn.stopAllActions();
                      _context7.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                })));

               case 15:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref6.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Hades_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b13bp1rEpD0pq4pwAO7Tkr", "Hades_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          if (_this.node.y + _this.node.height / 2 > cc.winSize.height / 2 - 74) {
            var length = _this.node.y + _this.node.height / 2 - (cc.winSize.height / 2 - 74);
            _this.node.y -= length;
          }
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {},
      setPrizePoxY: function setPrizePoxY(bFree) {
        var node = cc.find("prizePool_Grand", this.node);
        node.y = bFree ? 45 : 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Hades_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f6d4gYfm5Da5vGfWdbHlRK", "Hades_Slots");
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
        _stopClick: null
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        "slotsdouble" === this.node.name && (this._row = 5);
        "slotsfree" === this.node.name && (this._row = 9);
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.ReconnectShow();
      },
      onLoad: function onLoad() {
        this._super();
        this._normalSpine = cc.find("reels_bg/theme228_base_frame", this.node);
        this._normalSpine.on("click", this.slotsSpine, this);
        this._stopClick = cc.find("reels_bg/stopClick", this.node);
        this._stopClick.on("click", this.stopSpin, this);
        this._stopClick.active = false;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      show: function show() {
        this.node.active = true;
      },
      hide: function hide() {
        this.node.active = false;
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
        this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        this._normalSpine.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.getCollectNode().startMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = true;
        this._canStop = false;
        this._bonusSpin = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var showAnimation, nAddWin, nTotalBet, nMul, showJiLi;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super(msg);
              showAnimation = false;
              if (!cc.vv.gameData.getManage()._isInFree) {
                _this2._gameInfo.freeResult && _this2._gameInfo.freeResult.freeInfo && _this2._gameInfo.freeResult.freeInfo.scatterIdx && (showAnimation = true);
                nAddWin = cc.vv.gameData.GetGameWin();
                nTotalBet = cc.vv.gameData.GetTotalBet();
                nMul = nAddWin / nTotalBet;
                nMul >= 10 && (showAnimation = true);
                if (showAnimation) {
                  showJiLi = Global.random(1, 100);
                  showJiLi > 80;
                }
              }
              _this2._canStop = true;

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this3.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

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
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, isNormalGame, i, key, symbol, _i, _key, _symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              if (!(_this4._gameInfo.bonusInfo && _this4._gameInfo.bonusInfo.triggerIdxs.length > 0)) {
                _context3.next = 4;
                break;
              }
              _context3.next = 4;
              return cc.vv.gameData.getWildTransition().showBonus(_this4._gameInfo.bonusInfo, function() {
                for (var i = 0; i < _this4._gameInfo.bonusInfo.wildCols.length; i++) {
                  var col = _this4._gameInfo.bonusInfo.wildCols[i] - 1;
                  var reel = _this4._reels[col];
                  for (var j = 0; j < reel._symbols.length - 1; j++) {
                    var symbol = reel._symbols[j];
                    symbol && symbol.changeWild();
                  }
                }
              });

             case 4:
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              _context3.next = 11;
              return _this4.ShowWinCoin(nWin, nTotal, isNormalGame);

             case 11:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context3.next = 23;
                break;
              }
              if (!_this4._gameInfo.freeResult) {
                _context3.next = 21;
                break;
              }
              if (!(_this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context3.next = 21;
                break;
              }
              for (i = 0; i < _this4._gameInfo.freeResult.freeInfo.scatterIdx.length; i++) {
                key = _this4._gameInfo.freeResult.freeInfo.scatterIdx[i];
                symbol = _this4.GetSymbolByIdx(Number(key));
                symbol && symbol.playWinAnimation();
              }
              if (!(_this4._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context3.next = 21;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.retrigger);
              _context3.next = 19;
              return _this4.awaitTime(2);

             case 19:
              _context3.next = 21;
              return _this4.CheckFreeEnterFreeGame(_this4._gameInfo.freeResult.freeInfo.freeCnt);

             case 21:
              _context3.next = 32;
              break;

             case 23:
              if (!_this4._gameInfo.freeResult) {
                _context3.next = 32;
                break;
              }
              if (!(_this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context3.next = 32;
                break;
              }
              for (_i = 0; _i < _this4._gameInfo.freeResult.freeInfo.scatterIdx.length; _i++) {
                _key = _this4._gameInfo.freeResult.freeInfo.scatterIdx[_i];
                _symbol = _this4.GetSymbolByIdx(Number(_key));
                _symbol && _symbol.playWinAnimation();
              }
              if (!(_this4._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context3.next = 32;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.triggering);
              _context3.next = 30;
              return _this4.awaitTime(2);

             case 30:
              _context3.next = 32;
              return _this4.CheckEnterFreeGame(_this4._gameInfo.freeResult.freeInfo.freeCnt);

             case 32:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 35;
                break;
              }
              _context3.next = 35;
              return _this4.CheckExitFreeGame();

             case 35:
              _this4.CanDoNextRound();

             case 36:
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
        var _this5 = this;
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
                      Global.SlotsSoundMgr.stopBgm();
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context5.next = 5;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin);

                     case 5:
                      _this5.ShowGameview(false);
                      _this5.clearSlots();
                      cc.vv.gameData.getCollectNode().isDoubleGame() ? cc.vv.gameData.getManage().changeSlot(1) : cc.vv.gameData.getManage().changeSlot(0);
                      _this5.ShowFreeTimes(false);
                      cc.vv.gameData.SetTotalFree(0);
                      _context5.next = 12;
                      return _this5.ShowWinCoin(nWin, nTotal, true);

                     case 12:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 14:
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
        var _this6 = this;
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
                      return _this6.awaitTime(1);

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
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      _context9.next = 3;
                      return cc.vv.gameData.getPopWinManage().showFreeGameTimes(num);

                     case 3:
                      _this7.ShowGameview(true);
                      cc.vv.gameData.getManage().changeSlot(2);
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.fgbgm);
                      _this7.ShowFreeTimes(true);
                      sucess();

                     case 8:
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
        var bgCmp = cc.find("Canvas/safe_node/bg").getComponent("ImgSwitchCmp");
        bgCmp.setIndex(bFree ? 1 : 0);
        cc.vv.gameData.showOtherSysNode(!bFree);
        cc.vv.gameData.getManage().setPrizePoxY(bFree);
      },
      ShowFreeTimes: function ShowFreeTimes(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
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
            symbol.stopWinTweenAction();
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
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this8 = this;
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
          var _loop = function _loop() {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this8._reels[_i2];
              var reelRes = reelResults[_i2];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && isContinuous && (stateInfo.isAnt = true);
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
              stateInfo.continuous && stateInfo.counts[_i2] > 0 && 0 == reelCountOfID && (isContinuous = false);
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
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          20 === cards[i] && (cards[i] = Global.random(4, 14));
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
          var item = this._reels[_i3];
          var reelRes = reelResults[_i3];
          item.SetResult(reelRes);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Hades_manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be0fe4zh3lEOL3GtVexMMjW", "Hades_manage");
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
        _prizePool: null,
        _isInFree: false,
        _kuang1: null,
        _kuang2: null,
        _allofakindi: null,
        _man: null
      },
      onLoad: function onLoad() {
        this._prizePool = cc.find("safe_node/LMSlots_PrizePool_1", this.node).getComponent("Hades_PrizePool");
        this._kuang1 = cc.find("safe_node/kuang1", this.node);
        this._kuang2 = cc.find("safe_node/kuang2", this.node);
        this._allofakindi = cc.find("safe_node/quanpan", this.node);
        this._allofakindi.active = false;
        this._man = cc.find("safe_node/hadishi", this.node);
      },
      start: function start() {
        this.ReconnectShow();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.getCollectNode().setCollectData(cc.vv.gameData._deskInfo.needBet);
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this2.changeSlot(2);
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.fgbgm);
                cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(true);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                cc.vv.gameData.GetBottomScript().SetWin(nTotal);
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              } else {
                cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(false);
                cc.vv.gameData.getCollectNode().isDoubleGame() ? _this2.changeSlot(1) : _this2.changeSlot(0);
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      changeKuang: function changeKuang(type) {
        switch (type) {
         case 1:
          var kuang1Sp = this._kuang1.getComponent(sp.Skeleton);
          kuang1Sp.setAnimation(0, "kuang_NG", true);
          var kuang2Sp = this._kuang2.getComponent(sp.Skeleton);
          kuang2Sp.setAnimation(0, "kuang_NG", true);
          break;

         case 2:
          var _kuang1Sp = this._kuang1.getComponent(sp.Skeleton);
          _kuang1Sp.setAnimation(0, "kuang_NG2", true);
          var _kuang2Sp = this._kuang2.getComponent(sp.Skeleton);
          _kuang2Sp.setAnimation(0, "kuang_NG2", true);
          break;

         case 3:
          var _kuang1Sp2 = this._kuang1.getComponent(sp.Skeleton);
          _kuang1Sp2.setAnimation(0, "kuang_FG", true);
          var _kuang2Sp2 = this._kuang2.getComponent(sp.Skeleton);
          _kuang2Sp2.setAnimation(0, "kuang_FG", true);
          break;

         case 4:
          var _kuang1Sp3 = this._kuang1.getComponent(sp.Skeleton);
          _kuang1Sp3.setAnimation(0, "kuang_FG2", true);
          var _kuang2Sp3 = this._kuang2.getComponent(sp.Skeleton);
          _kuang2Sp3.setAnimation(0, "kuang_FG2", true);
        }
      },
      changeSlot: function changeSlot(index) {
        cc.vv.gameData.setSlotsIndex(index);
        cc.vv.gameData.showSlot();
        if (2 === index) {
          cc.vv.gameData.getCollectNode().node.active = false;
          this._man.active = false;
        } else {
          cc.vv.gameData.getCollectNode().node.active = true;
          this._man.active = true;
        }
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
      setPrizePoxY: function setPrizePoxY(bFree) {
        this._prizePool.setPrizePoxY(bFree);
      },
      showAllOfAKindi: function showAllOfAKindi() {
        var _this3 = this;
        this._allofakindi.active = true;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Voice_AllOfAKind);
        var allSp = this._allofakindi.getComponent(sp.Skeleton);
        allSp.setCompleteListener(function() {
          _this3._allofakindi.active = false;
          allSp.setCompleteListener(null);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Hades_qiePing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8145fHm79dMcLWUfxOyaBsc", "Hades_qiePing");
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
        qiepin: {
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
      showQP: function showQP(callBack) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.qiepin.active = true;
                show_popupSp = _this2.qiepin.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "FG_guochang_intro", false);
                show_popupSp.setCompleteListener(function() {
                  _this2.qiepin.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context.next = 6;
                return _this2.awaitTime(.5);

               case 6:
                callBack && callBack();

               case 7:
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
      showDaJiangYuGao: function showDaJiangYuGao() {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bigAward);
                _this3.qiepin.active = true;
                show_popupSp = _this3.qiepin.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "dajiangyugao", false);
                show_popupSp.setCompleteListener(function() {
                  _this3.qiepin.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });

               case 5:
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
  Hades_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f14c1XV0hF3IxLkCUOHVIH", "Hades_reel");
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
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator4 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var info = _step4.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
                node && node.active && (node.active = false);
                this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } else {
          var _node = cc.find("mask/" + name, this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Hades_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39fd6I+75hGxpOi2J3JvZkX", "Hades_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/Hades/",
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
          default: "",
          override: true
        },
        reel_stop: {
          default: "",
          override: true
        },
        scatter_stop: {
          default: "",
          override: true
        },
        AllOfAKind: "AllOfAKind",
        bigAward: "bigAward",
        fgbegin: "fgbegin",
        fgbgm: "fgbgm",
        fgend: "fgend",
        fgtrans: "fgtrans",
        JPwin: "JPwin",
        ngbgm: "ngbgm",
        reelfast: "reelfast",
        reelmoon: "reelmoon",
        reelscatr: "reelscatr",
        reelstop: "reelstop",
        retrigger: "retrigger",
        scatter_1: "scatter_1",
        scatter_2: "scatter_2",
        scatter_3: "scatter_3",
        scatter_4: "scatter_4",
        scatter_5: "scatter_5",
        triggering: "triggering",
        unlock: "unlock",
        Voice_AllOfAKind: "Voice_AllOfAKind",
        Voice_PowerZone: "Voice_PowerZone",
        wildreel1: "wildreel1",
        wildreel3: "wildreel3"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  Hades_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fb57USRYdDBYBjHvoonkJg", "Hades_symbol");
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
      changeWild: function changeWild() {
        this.setAnimationToTop(false);
        2 === this._id ? this.ShowById(102) : this.ShowById(1);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Hades_wildTransition: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3bf27ZnlnxB66+9Jyg3JSQ8", "Hades_wildTransition");
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
        _transitionMap: null
      },
      onLoad: function onLoad() {
        this._transitionMap = {};
        this._transitionMap["L_Blue1x3"] = cc.find("L_Blue1x3", this.node);
        this._transitionMap["L_Blue1x4"] = cc.find("L_Blue1x4", this.node);
        this._transitionMap["L_Blue1x9"] = cc.find("L_Blue1x9", this.node);
        this._transitionMap["L_Red3x3"] = cc.find("L_Red3x3", this.node);
        this._transitionMap["L_Red3x9"] = cc.find("L_Red3x9", this.node);
        this._transitionMap["L_Red3x4x5"] = cc.find("L_Red3x4x5", this.node);
        this._transitionMap["R_Blue1x3"] = cc.find("R_Blue1x3", this.node);
        this._transitionMap["R_Blue1x4"] = cc.find("R_Blue1x4", this.node);
        this._transitionMap["R_Blue1x9"] = cc.find("R_Blue1x9", this.node);
        this._transitionMap["R_Red3x3"] = cc.find("R_Red3x3", this.node);
        this._transitionMap["R_Red3x9"] = cc.find("R_Red3x9", this.node);
        this._transitionMap["R_Red3x4x5"] = cc.find("R_Red3x4x5", this.node);
        this._transitionMap["Red5x3"] = cc.find("Red5x3", this.node);
        this._transitionMap["Red5x5x5"] = cc.find("Red5x5x5", this.node);
        this._transitionMap["Red5x9"] = cc.find("Red5x9", this.node);
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
      showTransition: function showTransition(type) {
        var transitionNode = this._transitionMap[type];
        if (transitionNode) {
          transitionNode.active = true;
          var transitionNodeSp = transitionNode.getComponent(sp.Skeleton);
          switch (type) {
           case "L_Blue1x3":
           case "L_Blue1x4":
           case "L_Blue1x9":
           case "R_Blue1x3":
           case "R_Blue1x4":
           case "R_Blue1x9":
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wildreel1);
            break;

           case "L_Red3x3":
           case "L_Red3x9":
           case "L_Red3x4x5":
           case "R_Red3x3":
           case "R_Red3x9":
           case "R_Red3x4x5":
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wildreel3);
            break;

           case "Red5x3":
           case "Red5x5x5":
           case "Red5x9":
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.AllOfAKind);
            cc.vv.gameData.getManage().showAllOfAKindi();
          }
          transitionNodeSp.setCompleteListener(function() {
            transitionNode.active = false;
          });
        }
      },
      showBonus: function showBonus(bonusInfo, callBack) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var col1, col2, col3, col4, col5, isFreeGame, isDouble;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Voice_PowerZone);
                _context.next = 3;
                return _this2.awaitTime(.2);

               case 3:
                col1 = bonusInfo.wildCols.includes(1);
                col2 = bonusInfo.wildCols.includes(2);
                col3 = bonusInfo.wildCols.includes(3);
                col4 = bonusInfo.wildCols.includes(4);
                col5 = bonusInfo.wildCols.includes(5);
                isFreeGame = cc.vv.gameData.getManage()._isInFree;
                isDouble = cc.vv.gameData.getCollectNode().isDoubleGame();
                if (isFreeGame) if (col1 && col2 && col3 && col4 && col5) _this2.showTransition("Red5x9"); else if (col1 && col2 && col3 && col4) {
                  _this2.showTransition("L_Red3x9");
                  _this2.showTransition("R_Blue1x9");
                } else if (col2 && col3 && col4 && col5) {
                  _this2.showTransition("L_Blue1x9");
                  _this2.showTransition("R_Red3x9");
                } else if (col1 && col2 && col3) _this2.showTransition("L_Red3x9"); else if (col3 && col4 && col5) _this2.showTransition("R_Red3x9"); else if (col2 && col4) {
                  _this2.showTransition("R_Blue1x9");
                  _this2.showTransition("L_Blue1x9");
                } else col2 ? _this2.showTransition("L_Blue1x9") : col4 && _this2.showTransition("R_Blue1x9"); else if (isDouble) if (col1 && col2 && col3 && col4 && col5) _this2.showTransition("Red5x5x5"); else if (col1 && col2 && col3 && col4) {
                  _this2.showTransition("L_Red3x4x5");
                  _this2.showTransition("R_Blue1x4");
                } else if (col2 && col3 && col4 && col5) {
                  _this2.showTransition("L_Blue1x4");
                  _this2.showTransition("R_Red3x4x5");
                } else if (col1 && col2 && col3) _this2.showTransition("L_Red3x4x5"); else if (col3 && col4 && col5) _this2.showTransition("R_Red3x4x5"); else if (col2 && col4) {
                  _this2.showTransition("R_Blue1x4");
                  _this2.showTransition("L_Blue1x4");
                } else col2 ? _this2.showTransition("L_Blue1x4") : col4 && _this2.showTransition("R_Blue1x4"); else if (col1 && col2 && col3 && col4 && col5) _this2.showTransition("Red5x3"); else if (col1 && col2 && col3 && col4) {
                  _this2.showTransition("L_Red3x3");
                  _this2.showTransition("R_Blue1x3");
                } else if (col2 && col3 && col4 && col5) {
                  _this2.showTransition("L_Blue1x3");
                  _this2.showTransition("R_Red3x3");
                } else if (col1 && col2 && col3) _this2.showTransition("L_Red3x3"); else if (col3 && col4 && col5) _this2.showTransition("R_Red3x3"); else if (col2 && col4) {
                  _this2.showTransition("R_Blue1x3");
                  _this2.showTransition("L_Blue1x3");
                } else col2 ? _this2.showTransition("L_Blue1x3") : col4 && _this2.showTransition("R_Blue1x3");
                _context.next = 13;
                return _this2.awaitTime(.5);

               case 13:
                callBack && callBack();
                _context.next = 16;
                return _this2.awaitTime(2);

               case 16:
                success();

               case 17:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Hades_Bottom", "Hades_Cfg", "Hades_CollectNode", "Hades_GameData", "Hades_Logic", "Hades_Pop", "Hades_PrizePool", "Hades_Slots", "Hades_manage", "Hades_qiePing", "Hades_reel", "Hades_sound", "Hades_symbol", "Hades_wildTransition" ]);