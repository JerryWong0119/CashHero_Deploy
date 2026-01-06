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
  FatherOfInvention_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "048ace8mxhIyoDHOt/AY6cz", "FatherOfInvention_Cfg");
    "use strict";
    var _symbol, _towerCfg, _cardmap;
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
        node: "symbol_1",
        win_node: "animation_1",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9"
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10"
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11"
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12"
      }), _defineProperty(_symbol, 101, {
        node: "symbol_101",
        win_node: "animation_101",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _symbol),
      towerCfg: (_towerCfg = {}, _defineProperty(_towerCfg, 1, {
        ball_animation: "animation3",
        jackpotDialogAnimationIndex: 3,
        jackpotSound: "minor_jackpot",
        dialogSkin: "LS"
      }), _defineProperty(_towerCfg, 2, {
        ball_animation: "animation1",
        jackpotDialogAnimationIndex: 1,
        jackpotSound: "grand_jackpot",
        dialogSkin: "HS"
      }), _defineProperty(_towerCfg, 3, {
        ball_animation: "animation2",
        jackpotDialogAnimationIndex: 2,
        jackpotSound: "major_jackpot",
        dialogSkin: "ZS"
      }), _towerCfg),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "FatherOfInvention_Slots",
        Reels: "FatherOfInvention_Reel",
        Symbols: "FatherOfInvention_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 125,
        height: 125
      },
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 9, 5, 5, 12, 12, 7, 7, 5, 5, 6, 10, 11, 9, 9, 12, 12, 10, 8, 5, 11, 11, 7, 6, 9, 7, 12, 12, 4, 11, 11, 8, 10, 10, 5, 10, 7, 5, 7, 7, 12, 12, 5, 5, 6, 4, 7, 5, 5, 11, 5, 7, 7, 9, 6, 11, 7, 9, 12, 8, 8, 6, 12, 11, 8, 8, 6, 6, 5, 6, 6, 12, 10, 9, 12, 6, 6, 8, 9, 5, 5, 6, 8, 9, 5, 11, 7, 4, 10, 10, 8, 8, 4, 9, 11, 11, 7, 5, 8, 7, 6, 4, 8, 9, 9, 5, 5, 8, 5, 5, 6, 11, 12, 8, 9, 5, 8, 8, 12, 12, 5, 5, 10, 10, 4, 6, 7, 5, 5, 12, 11, 6, 10, 9, 9, 8, 6, 6, 8, 10, 5, 4, 4, 7, 9, 8, 8, 7, 7, 9, 9, 8, 5, 8, 7, 7, 11, 8, 8, 6, 7, 6, 7, 7, 7 ]), 
      _defineProperty(_cardmap, 2, [ 11, 11, 8, 8, 1, 8, 10, 7, 5, 2, 8, 8, 10, 3, 8, 1, 1, 7, 6, 1, 2, 9, 5, 6, 9, 9, 3, 7, 9, 9, 5, 2, 11, 4, 10, 8, 8, 12, 8, 3, 1, 2, 6, 7, 9, 7, 12, 12, 5, 9, 9, 2, 8, 3, 6, 5, 7, 5, 7, 5, 5, 2, 1, 1, 6, 10, 10, 3, 6, 6, 12, 7, 7, 9, 2, 5, 1, 7, 8, 1, 1, 3, 9, 8, 2, 5, 8, 8, 5, 11, 11, 4, 4, 9, 6, 2, 3, 8, 8, 7, 6, 9, 11, 4, 11, 2, 6, 8, 8, 3, 9, 4, 7, 7, 6, 6, 1, 7, 5, 7, 6, 3, 9, 9, 10, 7, 8, 12, 10, 8, 5, 8, 8, 3, 4, 6, 12, 12, 5, 7, 4, 6, 5, 5, 12, 8, 8, 5, 10, 12, 12, 1, 5, 5, 11, 12, 11, 11, 9, 9, 10, 4, 5, 5, 9, 7, 10, 7, 10, 12, 5, 5, 7, 5, 12, 6, 6, 12, 5, 7, 5, 6, 11, 7, 5, 10, 11, 12, 11, 11, 12, 7, 7, 6, 5, 6 ]), 
      _defineProperty(_cardmap, 3, [ 11, 8, 9, 9, 4, 9, 7, 12, 2, 6, 5, 6, 6, 12, 4, 10, 7, 2, 9, 11, 12, 12, 8, 8, 5, 6, 6, 5, 2, 12, 10, 5, 7, 10, 11, 1, 2, 6, 7, 7, 8, 12, 9, 5, 12, 2, 5, 5, 8, 8, 10, 10, 8, 1, 1, 7, 9, 2, 7, 5, 7, 5, 5, 1, 9, 8, 8, 2, 10, 11, 5, 5, 12, 11, 6, 7, 7, 2, 9, 6, 6, 11, 7, 11, 9, 9, 7, 2, 6, 6, 5, 4, 12, 7, 11, 5, 2, 11, 8, 8, 11, 11, 9, 7, 11, 7, 6, 1, 1, 7, 7, 10, 8, 9, 5, 5, 4, 4, 1, 7, 8, 6, 12, 12, 11, 8, 1, 1, 10, 9, 9, 5, 8, 4, 7, 10, 12, 5, 7, 4, 4, 8, 8, 10, 6, 5, 5, 9, 8, 7, 11, 7, 6, 6, 5, 5, 8, 7, 9, 10, 1, 1, 9, 12, 8, 5, 5, 6, 5, 5, 12, 8, 6, 1, 5, 12, 10, 6, 12, 8, 7, 8, 9, 5, 8, 6 ]), 
      _defineProperty(_cardmap, 4, [ 12, 12, 7, 4, 4, 11, 11, 6, 5, 6, 6, 2, 4, 11, 11, 3, 7, 7, 6, 9, 9, 7, 7, 4, 2, 5, 5, 12, 12, 5, 5, 10, 3, 6, 6, 5, 8, 8, 2, 1, 6, 5, 8, 8, 10, 5, 3, 1, 1, 2, 5, 5, 9, 8, 7, 11, 9, 1, 2, 7, 3, 8, 11, 11, 12, 12, 1, 5, 5, 8, 8, 2, 9, 9, 1, 1, 7, 3, 9, 8, 7, 1, 1, 2, 5, 5, 9, 9, 4, 4, 8, 8, 12, 12, 3, 6, 6, 7, 2, 6, 7, 4, 4, 8, 8, 10, 10, 9, 5, 5, 2, 3, 9, 12, 12, 8, 6, 6, 7, 10, 10, 9, 9, 2, 10, 7, 7, 3, 1, 6, 8, 8, 5, 5, 10, 7, 10, 7, 8, 3, 5, 5, 6, 5, 11, 8, 7, 7, 9, 11, 10, 10, 3, 8, 12, 11, 7, 9, 9, 5, 9, 9, 7, 11, 8, 8, 6, 6, 10, 12, 7, 1, 12, 12, 1, 11, 11, 6, 5, 5, 12, 12, 6, 5, 7, 5, 5, 6, 7, 11, 6, 8, 5, 8, 8, 7 ]), 
      _defineProperty(_cardmap, 5, [ 5, 9, 1, 5, 9, 12, 12, 5, 7, 8, 8, 6, 6, 7, 6, 9, 9, 5, 5, 6, 6, 9, 9, 7, 7, 6, 6, 7, 7, 8, 7, 10, 10, 5, 8, 11, 7, 9, 9, 1, 6, 1, 1, 5, 7, 7, 9, 5, 12, 4, 5, 10, 6, 5, 5, 1, 1, 6, 8, 8, 10, 5, 8, 11, 7, 1, 1, 9, 8, 11, 11, 5, 5, 12, 6, 7, 7, 8, 6, 6, 7, 7, 6, 4, 9, 9, 11, 8, 8, 9, 12, 10, 12, 12, 1, 1, 4, 4, 8, 8, 6, 6, 4, 4, 10, 10, 8, 7, 12, 12, 1, 1, 12, 12, 11, 11, 9, 5, 5, 8, 5, 5, 10, 9, 9, 12, 7, 5, 5, 11, 5, 8, 8, 9, 8, 7, 7, 4, 5, 5, 7, 6, 5, 5, 11, 11, 6, 7, 9, 12, 12, 7, 10, 10, 12, 5, 11, 11, 4, 10, 12, 11, 8, 5, 8, 11, 6, 6, 5, 8, 8, 7, 7, 10, 8, 8 ]), 
      _cardmap),
      wildId: 1,
      doubleWildId: 101,
      scatterId: 2,
      ballId: 3,
      collectSymbolId: 4,
      autoModelDelay: 1,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/FatherOfInvention/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter_drop",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/FatherOfInvention/prefab/help_item_1", "games/FatherOfInvention/prefab/help_item_2", "games/FatherOfInvention/prefab/help_item_3", "games/FatherOfInvention/prefab/help_item_4", "games/FatherOfInvention/prefab/help_item_5", "games/FatherOfInvention/prefab/help_item_6", "games/FatherOfInvention/prefab/help_item_7", "games/FatherOfInvention/prefab/help_item_8" ],
      commEffect: {
        path: "games/FatherOfInvention/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        win3: [ "win3", "win3end" ]
      },
      normalBgm: "base_bgm",
      sysFloatOffsetPos: cc.v2(0, 150)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  FatherOfInvention_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "618440qZZ5MgpI+xCSnwrKx", "FatherOfInvention_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var node_superSlots = cc.find("safe_node/super_slots", this.node);
        node_superSlots.addComponent("FatherOfInvention_SuperSlots");
        node_superSlots.active = true;
        var deskInfo = cc.vv.gameData.getDeskInfo();
        if (3 === deskInfo.collectInfo.state) {
          cc.vv.gameData.SetSlotsScript(node_superSlots.getComponent("FatherOfInvention_SuperSlots"));
          cc.find("safe_node/slots", this.node).getComponent("FatherOfInvention_Slots").Init();
          cc.find("safe_node/slots", this.node).active = false;
          node_superSlots.active = true;
        } else {
          node_superSlots.getComponent("FatherOfInvention_SuperSlots").Init();
          cc.find("safe_node/slots", this.node).active = true;
          node_superSlots.active = false;
        }
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_unlock", true);
          this._lockBonus = false;
          script.setAnimation(0, "animation1", false);
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_lock", true);
          this._lockBonus = true;
          script.setAnimation(0, "animation3", false);
          script.addAnimation(0, "animation2", true);
        }
        cc.find("safe_node/slots", this.node).getComponent("FatherOfInvention_Slots").towerInfo = deskInfo.towerInfos[cc.vv.gameData.GetBetIdx() - 1];
        cc.find("safe_node/slots", this.node).getComponent("FatherOfInvention_Slots").setTower(deskInfo.towerInfos[cc.vv.gameData.GetBetIdx() - 1]);
      },
      StartSlot: function StartSlot() {
        var script_slots = cc.vv.gameData.GetSlotsScript();
        script_slots.Init();
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        if (200 !== msg.code) return;
        1 === msg.data.rtype ? cc.find("safe_node/map", this.node).getComponent("FatherOfInvention_Map").onRcvSubGameData(msg) : 2 === msg.data.rtype ? cc.find("safe_node/map", this.node).getComponent("FatherOfInvention_Map").onRcvSubGameData(msg) : 3 === msg.data.rtype && cc.find("safe_node/wheel", this.node).getComponent("FatherOfInvention_Wheel").onRcvSubgameData(msg);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, false, this);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  FatherOfInvention_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb42dM1Wy9IBIxk+acK/myR", "FatherOfInvention_Map");
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
      extends: cc.Component,
      properties: {
        btn_tip: cc.Node,
        title_freeTimes: cc.Label,
        optionNodes: [ cc.Node ],
        btn_chooseRandom: cc.Node,
        btn_startFreeSpin: cc.Node,
        btn_back: cc.Node,
        black_bg: cc.Node,
        energize_node: cc.Node,
        energize_icon: cc.Sprite,
        energize_btn_yes: cc.Node,
        energize_btn_no: cc.Node,
        start_node: cc.Node,
        start_curFreeTime: cc.Label,
        start_btn_no: cc.Node,
        start_btn_start: cc.Node,
        help_node: cc.Node,
        help_bg: cc.Node,
        help_content: cc.Node,
        help_title: cc.Node,
        btn_i_see: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _curSelectCard: 0
      },
      onLoad: function onLoad() {},
      initMap: function initMap(collectInfo) {
        var _this = this;
        var monsterInfo = collectInfo.monsterInfo;
        this.node.active = true;
        this.node.y = cc.winSize.height;
        var cfg = cc.vv.gameData.getGameCfg();
        this.btn_tip.off("click");
        this.btn_tip.on("click", function() {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
          _this.black_bg.active = true;
          _this.black_bg.opacity = 200;
          _this.help_node.active = true;
          _this.help_bg.scale = 0;
          _this.help_bg.opacity = 255;
          _this.help_content.scale = 0;
          _this.help_content.opacity = 255;
          _this.help_title.scale = 0;
          _this.help_title.opacity = 255;
          _this.btn_i_see.scale = 0;
          _this.btn_i_see.opacity = 255;
          _this.btn_i_see.getComponent(cc.Button).interactable = true;
          cc.tween(_this.help_bg).to(.2, {
            scale: 1.25
          }, {
            easing: "backOut"
          }).start();
          cc.tween(_this.help_title).delay(.2).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          cc.tween(_this.help_content).delay(.4).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          cc.tween(_this.btn_i_see).delay(.6).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        });
        this.title_freeTimes.string = collectInfo.currFreeCnt;
        var _loop = function _loop(i) {
          var info = monsterInfo[i];
          var node = _this.optionNodes[i];
          cc.find("total_multiplier", node).getComponent(cc.Label).string = "X" + info.triggerMult[info.triggerMult.length - 1];
          cc.find("cur_multiplier", node).getComponent(cc.Label).string = "X" + info.currmult;
          for (var j = 0; j < info.maxLen; j++) cc.find("progress_" + (j + 1), node).active = j < info.currLen;
          for (var _j = 0; _j < 3; _j++) cc.find("target_" + (_j + 1), node).color = info.currLen < info.triggerIdx[_j] ? cc.Color.WHITE : cc.Color.GRAY;
          cc.find("idle_spine", node).active = info.currLen < info.maxLen;
          cc.find("add_spins", node).color = info.currLen === info.maxLen ? cc.Color.GRAY : cc.Color.WHITE;
          node.on(cc.Node.EventType.TOUCH_END, function() {
            if (!_this._canSelect) return;
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_monster_click", true);
            if (info.currLen >= info.maxLen) return;
            _this._curSelectCard = info.card;
            _this.black_bg.active = true;
            _this.black_bg.opacity = 200;
            _this.energize_node.active = true;
            _this.energize_node.opacity = 255;
            _this.energize_node.scale = 0;
            cc.tween(_this.energize_node).to(.2, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
            _this.energize_icon.node.getComponent("ImgSwitchCmp").setIndex(info.card - 5);
            _this.energize_btn_yes.on("click", function() {
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
              _this.energize_btn_yes.off("click");
              cc.tween(_this.energize_node).to(.2, {
                opacity: 0
              }).call(function() {
                _this.energize_node.active = false;
              }).start();
              _this.btn_chooseRandom.getComponent(cc.Button).interactable = false;
              _this.btn_startFreeSpin.getComponent(cc.Button).interactable = false;
              var _iterator3 = _createForOfIteratorHelper(_this.optionNodes), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  var optionNode = _step3.value;
                  cc.find("idle_spine", optionNode).active = false;
                  optionNode.off(cc.Node.EventType.TOUCH_END);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _this._canSelect = false;
              var req = {
                c: MsgId.SLOT_SUBGAME_DATA
              };
              req.uid = Global.playerData.uid;
              req.gameid = cc.vv.gameData._gameId;
              req.data = {};
              req.data.rtype = 1;
              req.data.choiceId = _this._curSelectCard;
              cc.vv.NetManager.send(req);
            });
            _this.energize_btn_no.on("click", function() {
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
              _this.energize_btn_no.off("click");
              cc.tween(_this.energize_node).to(.2, {
                opacity: 0
              }).call(function() {
                _this.energize_node.active = false;
              }).start();
              cc.tween(_this.black_bg).to(.2, {
                opacity: 0
              }).call(function() {
                _this.black_bg.active = false;
              }).start();
            });
          });
        };
        for (var i = 0; i < monsterInfo.length; i++) _loop(i);
        var canChooseRandom = false;
        var _iterator = _createForOfIteratorHelper(monsterInfo), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monsterInfoElement = _step.value;
            if (monsterInfoElement.currLen !== monsterInfoElement.maxLen) {
              canChooseRandom = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        22 === collectInfo.currFreeCnt && (canChooseRandom = false);
        this.btn_chooseRandom.getComponent(cc.Button).interactable = canChooseRandom;
        this.btn_chooseRandom.off("click");
        this.btn_chooseRandom.on("click", function() {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
          _this.black_bg.active = true;
          _this.black_bg.opacity = 200;
          _this.energize_node.active = true;
          _this.energize_node.opacity = 255;
          _this.energize_node.scale = 0;
          cc.tween(_this.energize_node).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          var randomCard = _this.getCanSelectRandomCard(collectInfo);
          var atlas = cc.vv.gameData.GetAtlasByName("symbol");
          _this.energize_icon.node.getComponent("ImgSwitchCmp").setIndex(randomCard - 5);
          _this._curSelectCard = randomCard;
          _this.energize_btn_yes.on("click", function() {
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
            _this.energize_btn_yes.off("click");
            var _iterator2 = _createForOfIteratorHelper(_this.optionNodes), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var optionNode = _step2.value;
                cc.find("idle_spine", optionNode).active = false;
                optionNode.off(cc.Node.EventType.TOUCH_END);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            _this.btn_chooseRandom.getComponent(cc.Button).interactable = false;
            _this.btn_startFreeSpin.getComponent(cc.Button).interactable = false;
            _this._canSelect = false;
            cc.tween(_this.energize_node).to(.2, {
              opacity: 0
            }).call(function() {
              _this.energize_node.active = false;
            }).start();
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.uid = Global.playerData.uid;
            req.gameid = cc.vv.gameData._gameId;
            req.data = {};
            req.data.rtype = 1;
            req.data.choiceId = _this._curSelectCard;
            cc.vv.NetManager.send(req);
          });
          _this.energize_btn_no.on("click", function() {
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
            _this.energize_btn_no.off("click");
            cc.tween(_this.energize_node).to(.2, {
              opacity: 0
            }).call(function() {
              _this.energize_node.active = false;
            }).start();
            cc.tween(_this.black_bg).to(.2, {
              opacity: 0
            }).call(function() {
              _this.black_bg.active = false;
            }).start();
          });
        });
        this.btn_startFreeSpin.getComponent(cc.Button).interactable = collectInfo.currFreeCnt > 0;
        this.btn_startFreeSpin.off("click");
        this.btn_startFreeSpin.on("click", function() {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
          _this.black_bg.active = true;
          _this.black_bg.opacity = 200;
          _this.start_node.active = true;
          _this.start_node.opacity = 255;
          _this.start_node.scale = 0;
          cc.tween(_this.start_node).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          _this.start_curFreeTime.string = collectInfo.currFreeCnt;
          _this.start_btn_start.on("click", function() {
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
            _this.start_btn_start.off("click");
            _this._canSelect = false;
            _this.btn_chooseRandom.getComponent(cc.Button).interactable = false;
            _this.btn_startFreeSpin.getComponent(cc.Button).interactable = false;
            cc.tween(_this.black_bg).to(.2, {
              opacity: 0
            }).call(function() {
              _this.black_bg.active = false;
            }).start();
            cc.tween(_this.start_node).to(.2, {
              opacity: 0
            }).call(function() {
              _this.start_node.active = false;
            }).start();
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.uid = Global.playerData.uid;
            req.gameid = cc.vv.gameData._gameId;
            req.data = {};
            req.data.rtype = 2;
            cc.vv.NetManager.send(req);
          });
          _this.start_btn_no.on("click", function() {
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
            _this.start_btn_no.off("click");
            cc.tween(_this.black_bg).to(.2, {
              opacity: 0
            }).call(function() {
              _this.black_bg.active = false;
            }).start();
            cc.tween(_this.start_node).to(.2, {
              opacity: 0
            }).call(function() {
              _this.start_node.active = false;
            }).start();
          });
        });
        this.btn_i_see.off("click");
        this.btn_i_see.on("click", function() {
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
          _this.btn_i_see.getComponent(cc.Button).interactable = false;
          cc.tween(_this.black_bg).to(.2, {
            opacity: 0
          }).delay(.1).call(function() {
            _this.black_bg.active = false;
            _this.help_node.active = false;
          }).start();
          cc.tween(_this.help_bg).to(.2, {
            opacity: 0
          }).start();
          cc.tween(_this.help_content).to(.2, {
            opacity: 0
          }).start();
          cc.tween(_this.help_title).to(.2, {
            opacity: 0
          }).start();
          cc.tween(_this.btn_i_see).to(.2, {
            opacity: 0
          }).start();
        });
      },
      getCanSelectRandomCard: function getCanSelectRandomCard(collectInfo) {
        var array = [];
        var _iterator4 = _createForOfIteratorHelper(collectInfo.monsterInfo), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var monsterInfo = _step4.value;
            monsterInfo.currLen < monsterInfo.maxLen && array.push(monsterInfo);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return array[Math.floor(Math.random() * array.length)].card;
      },
      openMap: function openMap(showBtn) {
        var _this2 = this;
        this.node.y = cc.winSize.height;
        this.node.active = true;
        if (showBtn) {
          var _iterator5 = _createForOfIteratorHelper(this.optionNodes), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var optionNode = _step5.value;
              cc.find("idle_spine", optionNode).active = false;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          this.btn_chooseRandom.getComponent(cc.Button).interactable = false;
          this.btn_startFreeSpin.getComponent(cc.Button).interactable = false;
        } else this.btn_back.active = false;
        cc.tween(this.node).to(.5, {
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
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
            _this2.btn_back.off("click");
            cc.tween(_this2.btn_back).to(.2, {
              scale: 0
            }).start();
            cc.tween(_this2.node).to(.5, {
              y: cc.winSize.height
            }).call(function() {
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              _this2.node.active = false;
            }).start();
          });
        }
      },
      showMap: function showMap(collectInfo) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.initMap(collectInfo);
              _this3.openMap(false);
              _context.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              _this3._canSelect = true;
              cc.vv.gameData.GetSlotsScript().clearCollectProgress();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var collectInfo, monsterInfo, node, select_spine, spine, info, progress, target, sprite, finish_spine, animationName, spin_sprite, copy_spin, endPos;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(200 !== msg.code)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              if (!(1 === msg.data.rtype)) {
                _context2.next = 67;
                break;
              }
              _this4.black_bg.active = false;
              collectInfo = msg.data.collectInfo;
              cc.vv.gameData.getDeskInfo().collectInfo = collectInfo;
              monsterInfo = collectInfo.monsterInfo;
              node = _this4.optionNodes[msg.data.choiceId - 5];
              select_spine = cc.find("select_spine", node).getComponent(sp.Skeleton);
              select_spine.node.active = true;
              select_spine.setAnimation(0, "animation", false);
              select_spine.setCompleteListener(function() {
                select_spine.setCompleteListener(null);
                select_spine.node.active = false;
              });
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_monster_rise", true);
              _context2.next = 15;
              return cc.vv.gameData.awaitTime(1);

             case 15:
              spine = cc.find("spine", node).getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation2", false);
              spine.addAnimation(0, "animation3", true);
              _context2.next = 20;
              return cc.vv.gameData.awaitTime(1);

             case 20:
              info = monsterInfo[msg.data.choiceId - 5];
              progress = cc.find("progress_" + info.currLen, node);
              progress.active = true;
              progress.scaleX = 0;
              cc.tween(progress).to(.5, {
                scaleX: 1
              }).start();
              if (!(-1 !== info.triggerIdx.indexOf(info.currLen))) {
                _context2.next = 37;
                break;
              }
              _context2.next = 28;
              return cc.vv.gameData.awaitTime(.5);

             case 28:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_times_accept", true);
              target = cc.find("target_" + (info.triggerIdx.indexOf(info.currLen) + 1), node);
              sprite = cc.instantiate(target);
              target.color = cc.Color.GRAY;
              sprite.parent = target.parent;
              sprite.position = target.position;
              cc.tween(sprite).to(.2, {
                scale: 1.2
              }).delay(.3).then(cc.jumpTo(.5, cc.find("cur_multiplier", node).position, 50, 1)).call(function() {
                cc.find("cur_multiplier", node).getComponent(cc.Label).string = "X" + info.currmult;
              }).removeSelf().start();
              _context2.next = 37;
              return cc.vv.gameData.awaitTime(1);

             case 37:
              if (!(info.currLen === info.maxLen)) {
                _context2.next = 58;
                break;
              }
              _context2.next = 40;
              return cc.vv.gameData.awaitTime(.5);

             case 40:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_times_fly", true);
              finish_spine = cc.find("finish_spine", node).getComponent(sp.Skeleton);
              animationName = "animation1";
              7 === msg.data.choiceId ? animationName = "animation2" : 8 === msg.data.choiceId && (animationName = "animation3");
              finish_spine.node.active = true;
              finish_spine.setAnimation(0, animationName, false);
              finish_spine.setCompleteListener(function() {
                finish_spine.setCompleteListener(null);
                finish_spine.node.active = false;
              });
              _context2.next = 49;
              return cc.vv.gameData.awaitTime(.5);

             case 49:
              spin_sprite = cc.find("add_spins", node);
              copy_spin = cc.instantiate(spin_sprite);
              copy_spin.parent = spin_sprite.parent;
              copy_spin.position = spin_sprite.position;
              endPos = _this4.title_freeTimes.node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = node.convertToNodeSpaceAR(endPos);
              cc.tween(copy_spin).to(.2, {
                scale: 1.2
              }).delay(.3).to(.5, {
                position: endPos
              }).call(function() {
                _this4.title_freeTimes.string = collectInfo.currFreeCnt;
              }).removeSelf().start();
              _context2.next = 58;
              return cc.vv.gameData.awaitTime(1.5);

             case 58:
              _context2.next = 60;
              return cc.vv.gameData.awaitTime(1);

             case 60:
              cc.tween(_this4.node).to(.5, {
                y: cc.winSize.height
              }).start();
              _context2.next = 63;
              return cc.vv.gameData.awaitTime(.5);

             case 63:
              _this4.node.active = false;
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              _context2.next = 82;
              break;

             case 67:
              if (!(2 === msg.data.rtype)) {
                _context2.next = 81;
                break;
              }
              cc.vv.gameData.getDeskInfo().collectInfo = msg.data.collectInfo;
              _context2.next = 71;
              return cc.vv.gameData.awaitTime(.5);

             case 71:
              cc.find("wheel", _this4.node.parent).getComponent("FatherOfInvention_Wheel").startWheel(msg.data.collectInfo);
              _context2.next = 74;
              return cc.vv.gameData.awaitTime(.5);

             case 74:
              cc.tween(_this4.node).to(.5, {
                y: cc.winSize.height
              }).start();
              _context2.next = 77;
              return cc.vv.gameData.awaitTime(.5);

             case 77:
              _this4.black_bg.active = false;
              _this4.node.active = false;
              _context2.next = 82;
              break;

             case 81:
              3 === msg.data.rtype && cc.find("wheel", _this4.node.parent).getComponent("FatherOfInvention_Wheel").onRcvSubGameData(msg);

             case 82:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  FatherOfInvention_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec2d3eFyD9KRYISpYFRbzYU", "FatherOfInvention_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          item.GetShowId() === this._cfg.ballId && item.playStopAnimation();
          if (item.GetShowId() === this._cfg.collectSymbolId) {
            item.playStopAnimation();
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "symbol_coins_drop", true);
          }
        }
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (0 === this._reelIdx) {
          for (var i = 1; i < 5; i++) {
            var line = cc.find("reels_frame/line_" + i, this.node.parent.parent);
            line && objs.push(line);
          }
          var left_bg = cc.find("reels_frame/left_bg", this.node.parent.parent);
          left_bg && objs.push(left_bg);
          var right_bg = cc.find("reels_frame/right_bg", this.node.parent.parent);
          right_bg && objs.push(right_bg);
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
          var left_top = cc.find("reels_frame/left_top", this.node.parent.parent);
          left_top && objs.push(left_top);
          var right_top = cc.find("reels_frame/right_top", this.node.parent.parent);
          right_top && objs.push(right_top);
          var collect_node = cc.find("collect_node", this.node.parent.parent);
          collect_node && objs.push(collect_node);
          var tower = cc.find("collect_tower", this.node.parent.parent);
          tower && objs.push(tower);
        }
        return objs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  FatherOfInvention_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39397fTmfdGjbV+0MJFyUqT", "FatherOfInvention_Slots");
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
    var TowerGameType = {
      ExpandingReels: 1,
      RandomWilds: 2,
      MultiplierWilds: 3
    };
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        towerInfo: null,
        freeTowerInfo: null,
        towerGame: null
      },
      Init: function Init() {
        var _this = this;
        this._super();
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        this.towerInfo = deskInfo.towerInfos[cc.vv.gameData.GetBetIdx() - 1];
        this.setTower(this.towerInfo);
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= deskInfo.currmult) script.setAnimation(0, "animation1", false); else {
          script.setAnimation(0, "animation3", false);
          script.addAnimation(0, "animation2", true);
        }
        this.updateCollectProgress(deskInfo.collectInfo, false);
        var btn_map = cc.find("collect_node/btn_map", this.node);
        btn_map.on("click", function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          if (cc.vv.gameData.isAutoGame()) return;
          if (_this._bottomScript._bAutoModel) return;
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
          _this._bottomScript.ShowBtnsByState("moveing_1");
          cc.find("map", _this.node.parent).getComponent("FatherOfInvention_Map").initMap(deskInfo.collectInfo);
          cc.find("map", _this.node.parent).getComponent("FatherOfInvention_Map").openMap(true);
        });
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
      setTower: function setTower(towerInfo) {
        var tower_blue = cc.find("collect_tower/tower_1", this.node);
        var tower_red = cc.find("collect_tower/tower_2", this.node);
        var tower_purple = cc.find("collect_tower/tower_3", this.node);
        cc.find("tower", tower_blue).getComponent(sp.Skeleton).setAnimation(0, "animation" + towerInfo.blueStatus, true);
        cc.find("tower", tower_red).getComponent(sp.Skeleton).setAnimation(0, "animation" + towerInfo.redStatus, true);
        cc.find("tower", tower_purple).getComponent(sp.Skeleton).setAnimation(0, "animation" + towerInfo.purpleStatus, true);
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        if (this.towerGame) {
          if (this.towerGame.expandingReels) {
            var _iterator = _createForOfIteratorHelper(this._reels), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var reel = _step.value;
                reel.AddCount(3);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_rise", true);
            var waikuang_lan = cc.find("waikuang_lan", this.node).getComponent(sp.Skeleton);
            waikuang_lan.node.active = true;
            waikuang_lan.setAnimation(0, "animation1", false);
            waikuang_lan.addAnimation(0, "animation2", true);
            var guanzishangsheng = cc.find("reels_frame/guanzishangsheng", this.node).getComponent(sp.Skeleton);
            guanzishangsheng.setAnimation(0, "animation1_1", false);
            guanzishangsheng.addAnimation(0, "animation2", true);
          }
          if (this.towerGame.doubleWild) {
            var waikuang_zi = cc.find("waikuang_zi", this.node).getComponent(sp.Skeleton);
            waikuang_zi.node.active = !this.towerGame.expandingReels;
            waikuang_zi.setAnimation(0, "animation1", false);
            waikuang_zi.addAnimation(0, "animation2", true);
          }
        }
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, _iterator2, _step2, reel, waikuang_lan, guanzishangsheng, spine_full, script;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!(3 === deskInfo.collectInfo.state)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 11;
                break;
              }
              _this2.freeTowerInfo = deskInfo.freeTowerInfo;
              _this2.setTower(_this2.freeTowerInfo);
              _this2.ShowGameview(true);
              if (deskInfo.towerGame) {
                _this2.towerGame = deskInfo.towerGame;
                if (deskInfo.towerGame.expandingReels) {
                  _iterator2 = _createForOfIteratorHelper(_this2._reels);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      reel = _step2.value;
                      reel.AddCount(3, .01);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  waikuang_lan = cc.find("waikuang_lan", _this2.node).getComponent(sp.Skeleton);
                  waikuang_lan.node.active = true;
                  waikuang_lan.setAnimation(0, "animation2", true);
                  guanzishangsheng = cc.find("reel_frame/guanzishangsheng", _this2.node).getComponent(sp.Skeleton);
                  guanzishangsheng.setAnimation(0, "animation2", true);
                }
                _this2._bottomScript.SendSpinReq();
              } else _this2.CanDoNextRound();
              _context.next = 32;
              break;

             case 11:
              _this2.ShowGameview(false);
              if (!(1 === deskInfo.collectInfo.state)) {
                _context.next = 27;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 16;
              return cc.vv.gameData.awaitTime(.5);

             case 16:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_full", true);
              spine_full = cc.find("collect_node/progress/spine_full", _this2.node).getComponent(sp.Skeleton);
              spine_full.node.active = true;
              spine_full.setAnimation(0, "animation", false);
              spine_full.setCompleteListener(function() {
                spine_full.setCompleteListener(null);
                spine_full.node.active = false;
              });
              _context.next = 23;
              return cc.vv.gameData.awaitTime(1);

             case 23:
              script = cc.find("map", _this2.node.parent).getComponent("FatherOfInvention_Map");
              script.showMap(deskInfo.collectInfo);
              _context.next = 32;
              break;

             case 27:
              if (!(2 === deskInfo.collectInfo.state)) {
                _context.next = 32;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 31;
              return cc.vv.gameData.awaitTime(.5);

             case 31:
              cc.find("wheel", _this2.node.parent).getComponent("FatherOfInvention_Wheel").startWheel(deskInfo.collectInfo);

             case 32:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var stopTime, i, card, soundIndex, _i, _card;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._super(msg);
              cc.vv.gameData.getDeskInfo().collectInfo = msg.collectInfo;
              _this3.towerInfo = msg.towerInfo;
              if (!_this3.towerGame) {
                _context3.next = 21;
                break;
              }
              stopTime = 1;
              for (i = 0; i < _this3._gameInfo.resultCards.length; i++) {
                card = _this3._gameInfo.resultCards[i];
                card === _this3._cfg.wildId && (stopTime += .7);
              }
              _this3.towerGame.expandingReels && (stopTime += 1.5);
              _this3.SetStopTime(stopTime);
              if (!_this3.towerGame.randWilds) {
                _context3.next = 21;
                break;
              }
              cc.find("black_bg", _this3.node).active = true;
              cc.find("waikuang_hong", _this3.node).active = !_this3.towerGame.expandingReels;
              soundIndex = 1;
              _i = 0;

             case 13:
              if (!(_i < _this3._gameInfo.resultCards.length)) {
                _context3.next = 20;
                break;
              }
              _card = _this3._gameInfo.resultCards[_i];
              if (!(_card === _this3._cfg.wildId)) {
                _context3.next = 17;
                break;
              }
              return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
                var light, node, spine;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    light = cc.find("collect_tower/tower_2/jackpot_light", _this3.node).getComponent(sp.Skeleton);
                    light.node.active = true;
                    cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_launch", true);
                    light.setAnimation(0, "animation1", false);
                    node = cc.instantiate(cc.find("wild_sprite", _this3.node));
                    node.scale = 0;
                    node.active = true;
                    node.parent = cc.find("wild_parent", _this3.node);
                    node.position = cc.v2(_i % 5 * _this3._cfg.symbolSize.width + .5 * _this3._cfg.symbolSize.width, (_this3._gameInfo.resultCards.length / _this3._cfg.col - 1 - Math.floor(_i / 5)) * _this3._cfg.symbolSize.height + .5 * _this3._cfg.symbolSize.height);
                    _this3.changeLightAngleAndScale(light.node, node, cc.v2(0, -1), -1, 180, 480);
                    _context2.next = 12;
                    return cc.vv.gameData.awaitTime(.1);

                   case 12:
                    soundIndex > 5 && (soundIndex = 5);
                    cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_receive" + soundIndex, true);
                    spine = cc.instantiate(cc.find("generate_wild_spine", _this3.node)).getComponent(sp.Skeleton);
                    spine.node.active = true;
                    spine.setAnimation(0, "animation4", false);
                    spine.node.parent = cc.find("wild_parent", _this3.node);
                    spine.node.position = node.position;
                    spine.setCompleteListener(function() {
                      spine.node.removeFromParent();
                    });
                    soundIndex++;
                    cc.tween(node).to(.3, {
                      scale: 1
                    }).start();
                    _context2.next = 24;
                    return cc.vv.gameData.awaitTime(.5);

                   case 24:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })(), "t0", 17);

             case 17:
              _i++;
              _context3.next = 13;
              break;

             case 20:
              cc.find("black_bg", _this3.node).active = false;

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        this._super(cards);
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoin, totalWinCoin, isUpdateUserCoin;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return _this4.collectSymbol();

             case 2:
              _context5.next = 4;
              return _this4.collectTower();

             case 4:
              if (!_this4.towerGame) {
                _context5.next = 9;
                break;
              }
              if (!_this4.towerGame.doubleWild) {
                _context5.next = 8;
                break;
              }
              _context5.next = 8;
              return _this4.triggerDoubleWild();

             case 8:
              _this4.towerGame.randWilds && cc.find("wild_parent", _this4.node).removeAllChildren();

             case 9:
              _this4.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              isUpdateUserCoin = true;
              if (_this4._gameInfo.addTowerInfo && _this4._gameInfo.addTowerInfo.jackpot) {
                winCoin -= _this4._gameInfo.addTowerInfo.winCoin;
                totalWinCoin -= _this4._gameInfo.addTowerInfo.winCoin;
                isUpdateUserCoin = false;
              }
              _this4.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var _iterator3, _step3, reel, waikuang_lan, guanzishangsheng, spine_full, script;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    if (!(_this4._gameInfo.addTowerInfo && _this4._gameInfo.jackpot)) {
                      _context4.next = 3;
                      break;
                    }
                    _context4.next = 3;
                    return _this4.triggerJackpot();

                   case 3:
                    if (!_this4.towerGame) {
                      _context4.next = 22;
                      break;
                    }
                    cc.find("waikuang_hong", _this4.node).active = false;
                    cc.find("waikuang_zi", _this4.node).active = false;
                    if (!_this4.towerGame.expandingReels) {
                      _context4.next = 20;
                      break;
                    }
                    _this4.ClearAllTopShow();
                    _iterator3 = _createForOfIteratorHelper(_this4._reels);
                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                        reel = _step3.value;
                        reel.AddCount(-3);
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                    cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_down", true);
                    waikuang_lan = cc.find("waikuang_lan", _this4.node).getComponent(sp.Skeleton);
                    waikuang_lan.node.active = true;
                    waikuang_lan.setAnimation(0, "animation3", false);
                    guanzishangsheng = cc.find("reels_frame/guanzishangsheng", _this4.node).getComponent(sp.Skeleton);
                    guanzishangsheng.setAnimation(0, "animation2_1", false);
                    guanzishangsheng.addAnimation(0, "animation1", true);
                    _context4.next = 19;
                    return cc.vv.gameData.awaitTime(1.5);

                   case 19:
                    waikuang_lan.node.active = false;

                   case 20:
                    _this4.towerGame = null;
                    cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() ? _this4.setTower(_this4._gameInfo.freeTowerInfo) : _this4.setTower(_this4._gameInfo.towerInfo);

                   case 22:
                    if (!_this4._gameInfo.towerGame) {
                      _context4.next = 27;
                      break;
                    }
                    _context4.next = 25;
                    return _this4.triggerTowerGame();

                   case 25:
                    _context4.next = 53;
                    break;

                   case 27:
                    if (!(_this4._gameInfo.collectInfo && 0 !== _this4._gameInfo.collectInfo.state && _this4._gameInfo.collectInfo.progressData.currCnt > 0)) {
                      _context4.next = 42;
                      break;
                    }
                    _this4._bottomScript.ShowBtnsByState("moveing_1");
                    _context4.next = 31;
                    return cc.vv.gameData.awaitTime(.5);

                   case 31:
                    cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_full", true);
                    spine_full = cc.find("collect_node/progress/spine_full", _this4.node).getComponent(sp.Skeleton);
                    spine_full.node.active = true;
                    spine_full.setAnimation(0, "animation", false);
                    spine_full.setCompleteListener(function() {
                      spine_full.setCompleteListener(null);
                      spine_full.node.active = false;
                    });
                    _context4.next = 38;
                    return cc.vv.gameData.awaitTime(1);

                   case 38:
                    script = cc.find("map", _this4.node.parent).getComponent("FatherOfInvention_Map");
                    script.showMap(_this4._gameInfo.collectInfo);
                    _context4.next = 53;
                    break;

                   case 42:
                    if (!_this4.CheckEnterFreeGame()) {
                      _context4.next = 46;
                      break;
                    }
                    _this4.triggerFreeGame();
                    _context4.next = 53;
                    break;

                   case 46:
                    if (!_this4.CheckExitFreeGame()) {
                      _context4.next = 50;
                      break;
                    }
                    _this4.triggerExitFreeGame();
                    _context4.next = 53;
                    break;

                   case 50:
                    _context4.next = 52;
                    return cc.vv.gameData.awaitTime(.5);

                   case 52:
                    _this4.CanDoNextRound();

                   case 53:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 16:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      ClearAllTopShow: function ClearAllTopShow() {
        this._super();
        var _iterator4 = _createForOfIteratorHelper(this._reels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var reel = _step4.value;
            for (var i = 0; i < this._cfg.row; i++) reel.GetSymbolByRow(i).setAnimationToTop(false);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      triggerDoubleWild: function triggerDoubleWild() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, card, light, symbol;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _context6.next = 2;
              return cc.vv.gameData.awaitTime(.5);

             case 2:
              i = 0;

             case 3:
              if (!(i < _this5._gameInfo.resultCards.length)) {
                _context6.next = 20;
                break;
              }
              card = _this5._gameInfo.resultCards[i];
              if (!(card === _this5._cfg.wildId)) {
                _context6.next = 17;
                break;
              }
              light = cc.find("collect_tower/tower_3/jackpot_light", _this5.node).getComponent(sp.Skeleton);
              light.node.active = true;
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_launch", true);
              light.setAnimation(0, "animation1", false);
              symbol = _this5.GetSymbolByIdx(i + 1);
              _this5.changeLightAngleAndScale(light.node, symbol.node, cc.v2(0, -1), -1, 180, 480);
              _context6.next = 14;
              return cc.vv.gameData.awaitTime(.1);

             case 14:
              symbol.ShowById(_this5._cfg.doubleWildId);
              _context6.next = 17;
              return cc.vv.gameData.awaitTime(.3);

             case 17:
              i++;
              _context6.next = 3;
              break;

             case 20:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      triggerTowerGame: function triggerTowerGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var featuretanchuang, spNode, animationIndex;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!_this6._gameInfo.towerGame) {
                _context7.next = 48;
                break;
              }
              _this6.towerGame = _this6._gameInfo.towerGame;
              featuretanchuang = cc.find("featuretanchuang", _this6.node);
              featuretanchuang.active = true;
              featuretanchuang.opacity = 255;
              spNode = cc.find("featuretanchuang", featuretanchuang);
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_dialog_show", true);
              animationIndex = 0;
              if (!_this6._gameInfo.towerGame.expandingReels) {
                _context7.next = 20;
                break;
              }
              animationIndex = _this6._cfg.towerCfg[1].jackpotDialogAnimationIndex;
              featuretanchuang.opacity = 255;
              spNode.getComponent(sp.Skeleton).setSkin(_this6._cfg.towerCfg[1].dialogSkin);
              spNode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              spNode.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
              _context7.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_dialog_close", true);
              cc.tween(featuretanchuang).to(.2, {
                opacity: 0
              }).start();
              _context7.next = 20;
              return cc.vv.gameData.awaitTime(.5);

             case 20:
              if (!_this6._gameInfo.towerGame.randWilds) {
                _context7.next = 32;
                break;
              }
              featuretanchuang.opacity = 255;
              animationIndex = _this6._cfg.towerCfg[2].jackpotDialogAnimationIndex;
              spNode.getComponent(sp.Skeleton).setSkin(_this6._cfg.towerCfg[2].dialogSkin);
              spNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + animationIndex, false);
              spNode.getComponent(sp.Skeleton).addAnimation(0, "animation" + animationIndex + "_1", true);
              _context7.next = 28;
              return cc.vv.gameData.awaitTime(2);

             case 28:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_dialog_close", true);
              cc.tween(featuretanchuang).to(.2, {
                opacity: 0
              }).start();
              _context7.next = 32;
              return cc.vv.gameData.awaitTime(.5);

             case 32:
              if (!_this6._gameInfo.towerGame.doubleWild) {
                _context7.next = 44;
                break;
              }
              featuretanchuang.opacity = 255;
              animationIndex = _this6._cfg.towerCfg[3].jackpotDialogAnimationIndex;
              spNode.getComponent(sp.Skeleton).setSkin(_this6._cfg.towerCfg[3].dialogSkin);
              spNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + animationIndex, false);
              spNode.getComponent(sp.Skeleton).addAnimation(0, "animation" + animationIndex + "_1", true);
              _context7.next = 40;
              return cc.vv.gameData.awaitTime(2);

             case 40:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_dialog_close", true);
              cc.tween(featuretanchuang).to(.2, {
                opacity: 0
              }).start();
              _context7.next = 44;
              return cc.vv.gameData.awaitTime(.5);

             case 44:
              featuretanchuang.active = false;
              _context7.next = 47;
              return cc.vv.gameData.awaitTime(1);

             case 47:
              _this6._bottomScript.SendSpinReq();

             case 48:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      triggerJackpot: function triggerJackpot() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var jackpotLight, endJackpot, towerIndex, spine, cf_jackpot_01;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      if (!(_this7._gameInfo.addTowerInfo && _this7._gameInfo.jackpot)) {
                        _context8.next = 25;
                        break;
                      }
                      _context8.next = 3;
                      return cc.vv.gameData.awaitTime(1);

                     case 3:
                      cc.find("LMSlots_PrizePool_1", _this7.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                        prizeType: 1,
                        pauseNum: _this7._gameInfo.addTowerInfo.jackpotValues[0]
                      }, {
                        prizeType: 2,
                        pauseNum: _this7._gameInfo.addTowerInfo.jackpotValues[1]
                      }, {
                        prizeType: 3,
                        pauseNum: _this7._gameInfo.addTowerInfo.jackpotValues[2]
                      } ]);
                      jackpotLight = cc.find("collect_tower/tower_1/jackpot_light", _this7.node);
                      endJackpot = cc.find("LMSlots_PrizePool_1/prizePool_Minor", _this7.node.parent);
                      towerIndex = 1;
                      if (2 === _this7._gameInfo.jackpot) _this7.changeLightAngleAndScale(jackpotLight, endJackpot, cc.v2(0, 1), -1, 0, 230); else if (3 === _this7._gameInfo.addTowerInfo.jackpot) {
                        jackpotLight = cc.find("collect_tower/tower_3/jackpot_light", _this7.node);
                        endJackpot = cc.find("LMSlots_PrizePool_1/prizePool_Major", _this7.node.parent);
                        towerIndex = 3;
                        _this7.changeLightAngleAndScale(jackpotLight, endJackpot, cc.v2(0, -1), -1, 180, 500);
                      } else if (4 === _this7._gameInfo.addTowerInfo.jackpot) {
                        jackpotLight = cc.find("collect_tower/tower_2/jackpot_light", _this7.node);
                        endJackpot = cc.find("LMSlots_PrizePool_1/prizePool_Grand", _this7.node.parent);
                        towerIndex = 2;
                        _this7.changeLightAngleAndScale(jackpotLight, endJackpot, cc.v2(0, -1), -1, 180, 500);
                      }
                      spine = jackpotLight.getComponent(sp.Skeleton);
                      jackpotLight.active = true;
                      spine.setAnimation(0, "animation1", false);
                      cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_launch", true);
                      spine.setCompleteListener(function() {
                        spine.setCompleteListener(null);
                        jackpotLight.active = false;
                      });
                      _context8.next = 15;
                      return cc.vv.gameData.awaitTime(.1);

                     case 15:
                      cc.vv.AudioManager.playEff("games/FatherOfInvention/", "jp_show", true);
                      cf_jackpot_01 = cc.find("cf_jackpot_01", endJackpot);
                      cf_jackpot_01.active = true;
                      cf_jackpot_01.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      cf_jackpot_01.getComponent(sp.Skeleton).setCompleteListener(function() {
                        cf_jackpot_01.getComponent(sp.Skeleton).setCompleteListener(null);
                        cf_jackpot_01.active = false;
                      });
                      _context8.next = 22;
                      return cc.vv.gameData.awaitTime(1);

                     case 22:
                      _context8.next = 24;
                      return _this7.popJackpotDialog(towerIndex);

                     case 24:
                      _this7.ShowBottomWin(_this7._gameInfo.addTowerInfo.winCoin, _this7._gameInfo.addTowerInfo.winCoin, true, function() {
                        success();
                      });

                     case 25:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      collectTower: function collectTower() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var i, symbol, startPos, sprite, middlePosition, endPosition, _i2, tower_type, towerCfg, ball_symbol;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              if (_this8._gameInfo.addTowerInfo) {
                _context11.next = 2;
                break;
              }
              return _context11.abrupt("return");

             case 2:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context11.next = 6;
                break;
              }
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) if (_this8._gameInfo.resultCards[i] === _this8._cfg.ballId) {
                symbol = _this8.GetSymbolByIdx(i + 1);
                startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = _this8.node.parent.convertToNodeSpaceAR(startPos);
                sprite = cc.instantiate(cc.find("add1", _this8.node.parent));
                sprite.parent = _this8.node.parent;
                sprite.position = startPos;
                sprite.scale = .5;
                sprite.active = true;
                middlePosition = _this8.GetSymbolByIdx(3).node.convertToWorldSpaceAR(cc.v2(0, 0));
                middlePosition = _this8.node.parent.convertToNodeSpaceAR(middlePosition);
                endPosition = cc.find("LMSlots_Bottom/free_time", _this8.node.parent).convertToWorldSpaceAR(cc.v2(0, 0));
                endPosition = _this8.node.parent.convertToNodeSpaceAR(endPosition);
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "free_times", true);
                cc.tween(sprite).to(.3, {
                  scale: 1,
                  position: middlePosition
                }).delay(.5).to(.6, {
                  position: endPosition
                }, {
                  easing: "sineIn"
                }).call(function() {
                  _this8._bottomScript.UpdateFreeTime(cc.vv.gameData.GetTotalFree(), cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime());
                }).removeSelf().start();
              }
              _context11.next = 6;
              return cc.vv.gameData.awaitTime(1.5);

             case 6:
              _i2 = 0;

             case 7:
              if (!(_i2 < _this8._gameInfo.addTowerInfo.games.length)) {
                _context11.next = 16;
                break;
              }
              tower_type = _this8._gameInfo.addTowerInfo.games[_i2];
              towerCfg = _this8._cfg.towerCfg[tower_type];
              ball_symbol = _this8.getBallSymbol();
              if (!ball_symbol) {
                _context11.next = 13;
                break;
              }
              return _context11.delegateYield(regeneratorRuntime.mark(function _callee10() {
                var ball_spine, startPos, tower, bo_sd_spine, endPos;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                   case 0:
                    ball_symbol.playTriggerAnimation();
                    _context10.next = 3;
                    return cc.vv.gameData.awaitTime(.5);

                   case 3:
                    ball_spine = cc.instantiate(cc.find("bo_qiu", _this8.node.parent)).getComponent(sp.Skeleton);
                    ball_spine.node.active = true;
                    ball_spine.node.parent = _this8.node.parent;
                    startPos = ball_symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this8.node.parent.convertToNodeSpaceAR(startPos);
                    startPos.y += 40;
                    ball_spine.node.position = startPos;
                    ball_spine.setAnimation(0, towerCfg.ball_animation, true);
                    cc.vv.AudioManager.playEff("games/FatherOfInvention/", "symbol_scatter_trans", true);
                    _context10.next = 14;
                    return cc.vv.gameData.awaitTime(.5);

                   case 14:
                    tower = cc.find("collect_tower/tower_" + tower_type, _this8.node);
                    bo_sd_spine = cc.find("bo_sd", tower).getComponent(sp.Skeleton);
                    endPos = bo_sd_spine.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this8.node.parent.convertToNodeSpaceAR(endPos);
                    cc.tween(ball_spine.node).to(.5, {
                      position: endPos
                    }).removeSelf().start();
                    _context10.next = 21;
                    return cc.vv.gameData.awaitTime(.5);

                   case 21:
                    bo_sd_spine.node.active = true;
                    bo_sd_spine.setAnimation(0, towerCfg.ball_animation, false);
                    bo_sd_spine.setCompleteListener(function() {
                      bo_sd_spine.setCompleteListener(null);
                      bo_sd_spine.node.active = false;
                    });
                    _context10.next = 26;
                    return cc.vv.gameData.awaitTime(.1);

                   case 26:
                    cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() ? _this8.updateTower(tower_type, _this8._gameInfo.freeTowerInfo) : _this8.updateTower(tower_type, _this8._gameInfo.towerInfo);
                    _context10.next = 29;
                    return cc.vv.gameData.awaitTime(.5);

                   case 29:
                   case "end":
                    return _context10.stop();
                  }
                }, _callee10);
              })(), "t0", 13);

             case 13:
              _i2++;
              _context11.next = 7;
              break;

             case 16:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      updateTower: function updateTower(towerType, towerInfo) {
        var tower_spine = cc.find("collect_tower/tower_" + towerType + "/tower", this.node).getComponent(sp.Skeleton);
        switch (towerType) {
         case TowerGameType.ExpandingReels:
          tower_spine.setAnimation(0, "animation" + towerInfo.blueStatus, true);
          3 === towerInfo.blueStatus ? cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_active", true) : 1 !== towerInfo.blueStatus && 2 !== towerInfo.blueStatus || cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_part", true);
          break;

         case TowerGameType.RandomWilds:
          tower_spine.setAnimation(0, "animation" + towerInfo.redStatus, true);
          3 === towerInfo.redStatus ? cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_active", true) : 1 !== towerInfo.redStatus && 2 !== towerInfo.redStatus || cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_part", true);
          break;

         case TowerGameType.MultiplierWilds:
          tower_spine.setAnimation(0, "animation" + towerInfo.purpleStatus, true);
          3 === towerInfo.purpleStatus ? cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_active", true) : 1 !== towerInfo.purpleStatus && 2 !== towerInfo.purpleStatus || cc.vv.AudioManager.playEff("games/FatherOfInvention/", "feature_tower_part", true);
        }
      },
      getBallSymbol: function getBallSymbol() {
        for (var i = 0; i < this._gameInfo.resultCards.length; i++) if (this._gameInfo.resultCards[i] === this._cfg.ballId) return this.GetSymbolByIdx(i + 1);
        return null;
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("collect_node", this.node).active = !bFree;
        cc.find("collect_tower", this.node).y = bFree ? 240 : 290;
        cc.find("reels/reel2/mask/free_bg", this.node).active = bFree;
        cc.find("reels/reel4/mask/free_bg", this.node).active = bFree;
      },
      collectSymbol: function collectSymbol() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var jinbi_jieshou_01, haveCollect, i, card, symbol, fly_spine, startPos, endPos;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context12.next = 2;
                break;
              }
              return _context12.abrupt("return");

             case 2:
              if (!(0 === _this9._gameInfo.collectInfo.progressData.currCnt)) {
                _context12.next = 4;
                break;
              }
              return _context12.abrupt("return");

             case 4:
              jinbi_jieshou_01 = cc.find("collect_node/jinbi_jieshou_01", _this9.node);
              haveCollect = false;
              for (i = 0; i < _this9._gameInfo.resultCards.length; i++) {
                card = _this9._gameInfo.resultCards[i];
                if (card === _this9._cfg.collectSymbolId) {
                  symbol = _this9.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    fly_spine = cc.instantiate(cc.find("fly_spine", _this9.node.parent)).getComponent(sp.Skeleton);
                    fly_spine.node.active = true;
                    fly_spine.node.parent = _this9.node.parent;
                    startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this9.node.parent.convertToNodeSpaceAR(startPos);
                    fly_spine.node.position = startPos;
                    fly_spine.setAnimation(0, "animation2", false);
                    haveCollect = true;
                    endPos = jinbi_jieshou_01.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this9.node.parent.convertToNodeSpaceAR(endPos);
                    cc.tween(fly_spine.node).delay(.2).to(.3, {
                      position: endPos
                    }).removeSelf().start();
                  }
                }
              }
              if (!haveCollect) {
                _context12.next = 14;
                break;
              }
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_fly", true);
              cc.tween(jinbi_jieshou_01).delay(.5).call(function() {
                var spine = jinbi_jieshou_01.getComponent(sp.Skeleton);
                spine.setAnimation(0, "animation2", false);
                spine.addAnimation(0, "animation1", true);
              }).start();
              _context12.next = 12;
              return cc.vv.gameData.awaitTime(.5);

             case 12:
              _context12.next = 14;
              return _this9.updateCollectProgress(_this9._gameInfo.collectInfo, true);

             case 14:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this10._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this10._gameInfo.resultCards.length; i++) {
                card = _this10._gameInfo.resultCards[i];
                if (card === _this10._cfg.scatterId) {
                  symbol = _this10.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "bell", true);
              _context13.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context13.next = 7;
              return _this10.popFreeDialog();

             case 7:
              _this10.cutSceneDoctor();
              _context13.next = 10;
              return cc.vv.gameData.awaitTime(2.3);

             case 10:
              _this10.Backup();
              _this10.ShowGameview(true);
              _this10.freeTowerInfo = _this10._gameInfo.freeTowerInfo;
              _this10.setTower(_this10.freeTowerInfo);
              _context13.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free_bgm");
              _this10.CanDoNextRound();

             case 19:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      cutSceneDoctor: function cutSceneDoctor() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var role, transition;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "transition1", true);
              role = cc.find("Canvas/safe_node/role");
              role.getComponent(sp.Skeleton).setAnimation(0, "skill02", false);
              _context14.next = 5;
              return cc.vv.gameData.awaitTime(1.3);

             case 5:
              transition = cc.find("transition1", _this11.node.parent);
              transition.active = true;
              transition.getComponent(sp.Skeleton).setAnimation(0, "skill2", false);
              transition.getComponent(sp.Skeleton).setCompleteListener(function() {
                transition.getComponent(sp.Skeleton).setCompleteListener(null);
                transition.active = false;
              });
              _context14.next = 11;
              return cc.vv.gameData.awaitTime(1);

             case 11:
              role.getComponent(sp.Skeleton).setAnimation(0, "idle", true);

             case 12:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              _this12._bottomScript.ShowBtnsByState("moveing_1");
              _context15.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context15.next = 5;
              return _this12.popFreeResultDialog();

             case 5:
              _this12.cutSceneDoctor();
              _context15.next = 8;
              return cc.vv.gameData.awaitTime(2.3);

             case 8:
              _this12.Resume();
              _this12.ShowGameview(false);
              _this12.freeTowerInfo = null;
              _this12.setTower(_this12.towerInfo);
              _this12.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this12.CanDoNextRound();
              });

             case 13:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      popFreeDialog: function popFreeDialog() {
        var _this13 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
            var free_dialog, free_bg, dialog, times, spine, btn_start, func;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this13.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                dialog.opacity = 255;
                times = cc.find("times", dialog);
                times.scale = 0;
                spine = cc.find("spine", dialog).getComponent(sp.Skeleton);
                spine.node.active = true;
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "free_dialog_start_show", true);
                spine.setAnimation(0, "animation1", false);
                spine.addAnimation(0, "animation2", true);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.tween(times).to(.8, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_start = cc.find("btn_start", dialog);
                btn_start.scale = 0;
                _context18.next = 21;
                return cc.vv.gameData.awaitTime(.3);

               case 21:
                cc.tween(btn_start).to(.2, {
                  scale: 1
                }).start();
                _context18.next = 24;
                return cc.vv.gameData.awaitTime(.2);

               case 24:
                btn_start.off("click");
                func = function() {
                  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                    return regeneratorRuntime.wrap(function _callee16$(_context16) {
                      while (1) switch (_context16.prev = _context16.next) {
                       case 0:
                        btn_start.off("click");
                        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
                        cc.tween(dialog).to(.2, {
                          opacity: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        _context16.next = 6;
                        return cc.vv.gameData.awaitTime(.3);

                       case 6:
                        dialog.active = false;
                        free_dialog.active = false;
                        spine.node.active = false;
                        success();

                       case 10:
                       case "end":
                        return _context16.stop();
                      }
                    }, _callee16);
                  }));
                  return function func() {
                    return _ref4.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                  return regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context17.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context17.stop();
                    }
                  }, _callee17);
                })));

               case 28:
               case "end":
                return _context18.stop();
              }
            }, _callee18);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this14 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(success) {
            var free_dialog, free_bg, dialog, spine, coin_bg, coin, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
               case 0:
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "free_dialog_collect_show", true);
                free_dialog = cc.find("free_dialog", _this14.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("result_node", free_dialog);
                dialog.opacity = 255;
                dialog.active = true;
                spine = cc.find("spine", dialog).getComponent(sp.Skeleton);
                spine.node.active = true;
                coin_bg = cc.find("coin_bg", dialog);
                coin_bg.scale = 0;
                coin = cc.find("coin", dialog);
                coin.scale = 0;
                coin.getComponent(cc.Label).string = "";
                spine.setAnimation(0, "animation1", false);
                spine.addAnimation(0, "animation2", true);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                _context21.next = 22;
                return cc.vv.gameData.awaitTime(.3);

               case 22:
                Global.doRoallNumEff(coin, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                cc.tween(coin).to(.2, {
                  scale: 1
                }).start();
                cc.tween(coin_bg).to(.2, {
                  scale: 1
                }).start();
                _context21.next = 27;
                return cc.vv.gameData.awaitTime(.2);

               case 27:
                cc.tween(btn_collect).to(.2, {
                  scale: 1
                }).start();
                btn_collect.off("click");
                _context21.next = 31;
                return cc.vv.gameData.awaitTime(.2);

               case 31:
                func = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) switch (_context19.prev = _context19.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
                        cc.tween(dialog).to(.2, {
                          opacity: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        _context19.next = 6;
                        return cc.vv.gameData.awaitTime(.3);

                       case 6:
                        dialog.active = false;
                        free_dialog.active = false;
                        spine.node.active = false;
                        success();

                       case 10:
                       case "end":
                        return _context19.stop();
                      }
                    }, _callee19);
                  }));
                  return function func() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context20.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                })));

               case 34:
               case "end":
                return _context21.stop();
              }
            }, _callee21);
          }));
          return function(_x3) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      popJackpotDialog: function popJackpotDialog(towerIndex) {
        var _this15 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(success) {
            var free_dialog, free_bg, dialog, spine, coin_bg, coin, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
               case 0:
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "jp_tower", true);
                free_dialog = cc.find("free_dialog", _this15.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("jackpot_node", free_dialog);
                dialog.active = true;
                dialog.opacity = 255;
                spine = cc.find("spine", dialog).getComponent(sp.Skeleton);
                spine.node.active = true;
                coin_bg = cc.find("coin_bg", dialog);
                coin_bg.scale = 0;
                coin = cc.find("coin", coin_bg);
                coin.getComponent(cc.Label).string = "";
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", _this15._cfg.towerCfg[towerIndex].jackpotSound, true);
                spine.setAnimation(0, "animation" + _this15._cfg.towerCfg[towerIndex].jackpotDialogAnimationIndex, false);
                spine.addAnimation(0, "animation" + _this15._cfg.towerCfg[towerIndex].jackpotDialogAnimationIndex + "_1", true);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                _context24.next = 22;
                return cc.vv.gameData.awaitTime(.3);

               case 22:
                Global.doRoallNumEff(coin, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                cc.tween(coin_bg).to(.2, {
                  scale: 1
                }).start();
                _context24.next = 26;
                return cc.vv.gameData.awaitTime(.2);

               case 26:
                cc.tween(btn_collect).to(.2, {
                  scale: 1
                }).start();
                btn_collect.off("click");
                _context24.next = 30;
                return cc.vv.gameData.awaitTime(.2);

               case 30:
                func = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                      while (1) switch (_context22.prev = _context22.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
                        cc.tween(dialog).to(.2, {
                          opacity: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        _context22.next = 6;
                        return cc.vv.gameData.awaitTime(.3);

                       case 6:
                        dialog.active = false;
                        free_dialog.active = false;
                        success();

                       case 9:
                       case "end":
                        return _context22.stop();
                      }
                    }, _callee22);
                  }));
                  return function func() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
                  return regeneratorRuntime.wrap(function _callee23$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context23.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context23.stop();
                    }
                  }, _callee23);
                })));

               case 33:
               case "end":
                return _context24.stop();
              }
            }, _callee24);
          }));
          return function(_x4) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(collectInfo, isAdd) {
        var _this16 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
          var progress, bar;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
             case 0:
              progress = cc.find("collect_node/progress", _this16.node);
              bar = cc.find("bar", progress);
              isAdd ? cc.tween(bar).to(.3, {
                x: progress.width * Math.min(1, collectInfo.progressData.totalCnt / collectInfo.progressData.needCnt)
              }).start() : bar.x = progress.width * Math.min(1, collectInfo.progressData.totalCnt / collectInfo.progressData.needCnt);

             case 3:
             case "end":
              return _context25.stop();
            }
          }, _callee25);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var progress = cc.find("collect_node/progress", this.node);
        var bar = cc.find("bar", progress);
        bar.x = 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  FatherOfInvention_SuperSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f058antdjRNgZNaehVldnII", "FatherOfInvention_SuperSlots");
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
        _haveSpinEnd: false
      },
      Init: function Init() {
        this._super();
      },
      setSlots: function setSlots(collectFreeGame) {
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        for (var i = 0; i < 4; i++) {
          var bg = cc.find("bg/bg_" + (i + 1), this.node);
          var slots = collectFreeGame.slots[i];
          var active = collectFreeGame.activeCard === slots.card;
          cc.find("bg4", bg).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(active ? "theme178_free2_bg4" : "theme178_free_bg4");
          cc.find("bg3", bg).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(active ? "theme178_free2_bg3" : "theme178_free_bg3");
          cc.find("ear_bg", bg).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(active ? "theme178_free2_reel_11" : "theme178_free2_reel_10");
          cc.find("bg2", bg).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(active ? "theme178_free2_bg2" : "theme178_free_bg2");
          cc.find("your_monster", bg).active = active;
          cc.find("coin_bg/coin", bg).getComponent(cc.Label).string = slots.collectCnt;
          cc.find("win_bg/rate_bg", bg).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(active ? "theme178_free2_bg0" : "theme178_free_bg0");
          cc.find("win_bg/rate_bg/rate", bg).getComponent(cc.Label).string = slots.mult;
          cc.find("win_bg/coin", bg).getComponent(cc.Label).string = Global.formatMoney(slots.totalWinCoin);
          cc.find("symbol", bg).color = active ? cc.Color.WHITE : cc.Color.GRAY;
        }
      },
      createReels: function createReels(col, row) {
        this._reels = [];
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < 4; i++) {
          var reels = [];
          for (var j = 0; j < col; j++) {
            var node = cc.find("reels_" + (i + 1) + "/reel" + (j + 1), this.node);
            var scp = node.addComponent(reelCmp);
            scp.Init(j, row, cc.find("reels_" + (i + 1) + "/top_ani", this.node));
            reels.push(scp);
          }
          this._reels.push(reels);
        }
      },
      StartMove: function StartMove() {
        this._super();
        this._haveSpinEnd = false;
        Global.SlotsSoundMgr.playNormalBgm();
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {},
      MoveReels: function MoveReels(arry) {
        this.moveReelLastIdx = -1;
        for (var i = 0; i < arry.length; i++) {
          var reels = arry[i];
          for (var j = 0; j < reels.length; j++) {
            var item = reels[j];
            item.StartMove();
            var idx = item.GetReelIdx();
            idx > this.moveReelLastIdx && (this.moveReelLastIdx = idx);
          }
        }
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        for (var i = 0; i < this._reels.length; i++) {
          var reels = this._reels[i];
          for (var j = 0; j < reels.length; j++) {
            var item = reels[j];
            var reelStopInterv = 0;
            item.StopMove(reelStopInterv);
            item.StopMoveRightNow();
          }
        }
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this.ShowGameview(true);
                if (3 === deskInfo.collectInfo.state) {
                  _this.setSlots(deskInfo.collectFreeGame);
                  _this.CanDoNextRound();
                }
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var slots;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._gameInfo = msg;
              slots = msg.collectFreeGame.slots;
              _this2.SetSlotsResult(slots);

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(slots) {
        for (var i = 0; i < 4; i++) {
          var cards = slots[i].resultCards;
          var acRow = cards.length / this._col;
          var reelResults = [];
          for (var _i = 0; _i < cards.length; _i++) {
            var row = Math.floor(_i / acRow);
            var col = _i % this._col;
            if (this._cfg.symbol[cards[_i]]) {
              var res = {};
              res.sid = cards[_i];
              reelResults[col] || (reelResults[col] = []);
              reelResults[col].unshift(res);
            }
          }
          var reels = this._reels[i];
          for (var _i2 = 0; _i2 < reels.length; _i2++) {
            var item = reels[_i2];
            var reelRes = reelResults[_i2];
            item.SetResult(reelRes);
          }
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        for (var i = 0; i < 4; i++) {
          var zjLuXian = this._gameInfo.collectFreeGame.slots[i].zjLuXian;
          var allWinIdx = [];
          for (var j = 0; j < zjLuXian.length; j++) {
            var item = zjLuXian[j];
            for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
          }
          for (var key in allWinIdx) {
            var symbol = this.GetSymbolByIdx(Number(key), i);
            if (symbol) {
              symbol.playWinAnimation();
              symbol.ShowKuang();
            }
          }
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx, reelIndex) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[reelIndex][col].GetSymbolByRow(row);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!_this3._haveSpinEnd) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              _this3._haveSpinEnd = true;
              _context3.next = 5;
              return _this3.collectCoin();

             case 5:
              _this3.ShowWinTrace();
              for (i = 0; i < 4; i++) {
                winCoin = _this3._gameInfo.collectFreeGame.slots[i].winCoin;
                totalWinCoin = _this3._gameInfo.collectFreeGame.slots[i].totalWinCoin;
                Global.doRoallNumEff(cc.find("bg/bg_" + (i + 1) + "/win_bg/coin", _this3.node), totalWinCoin - winCoin, totalWinCoin, 2, null, null, 0, true, false);
              }
              _context3.next = 9;
              return cc.vv.gameData.awaitTime(2.5);

             case 9:
              if (!_this3._gameInfo.collectFreeGame.isEnd) {
                _context3.next = 24;
                break;
              }
              _context3.next = 12;
              return _this3.popFreeResultDialog();

             case 12:
              _this3._haveSpinEnd = false;
              _this3.cutScene();
              _context3.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              cc.find("slots", _this3.node.parent).active = true;
              _this3.node.active = false;
              cc.vv.gameData.SetSlotsScript(cc.find("slots", _this3.node.parent).getComponent("FatherOfInvention_Slots"));
              _context3.next = 21;
              return cc.vv.gameData.awaitTime(1);

             case 21:
              cc.find("slots", _this3.node.parent).getComponent("FatherOfInvention_Slots").ShowBottomWin(_this3._gameInfo.collectFreeGame.winCoin, _this3._gameInfo.collectFreeGame.winCoin, true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this3._bottomScript.SetBetNodeVisible(true);
                cc.find("slots", _this3.node.parent).getComponent("FatherOfInvention_Slots").ShowGameview(false);
                cc.find("slots", _this3.node.parent).getComponent("FatherOfInvention_Slots").CanDoNextRound();
              });
              _context3.next = 25;
              break;

             case 24:
              _this3.CanDoNextRound();

             case 25:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      cutScene: function cutScene() {
        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "transition2", true);
        var transition = cc.find("transition2", this.node.parent);
        transition.active = true;
        transition.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        transition.getComponent(sp.Skeleton).setCompleteListener(function() {
          transition.getComponent(sp.Skeleton).setCompleteListener(null);
          transition.active = false;
        });
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
            var free_dialog, free_bg, dialog, spine, coin_bg, coin, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "free_dialog_collect_show", true);
                free_dialog = cc.find("free_dialog", _this4.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("result_node", free_dialog);
                dialog.opacity = 255;
                dialog.active = true;
                spine = cc.find("spine", dialog).getComponent(sp.Skeleton);
                spine.node.active = true;
                coin_bg = cc.find("coin_bg", dialog);
                coin_bg.scale = 0;
                coin = cc.find("coin", dialog);
                coin.scale = 0;
                coin.getComponent(cc.Label).string = "";
                spine.setAnimation(0, "animation1", false);
                spine.addAnimation(0, "animation2", true);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                _context6.next = 22;
                return cc.vv.gameData.awaitTime(.3);

               case 22:
                Global.doRoallNumEff(coin, 0, _this4._gameInfo.collectFreeGame.winCoin, 3, null, null, 0, true);
                cc.tween(coin).to(.2, {
                  scale: 1
                }).start();
                cc.tween(coin_bg).to(.2, {
                  scale: 1
                }).start();
                _context6.next = 27;
                return cc.vv.gameData.awaitTime(.2);

               case 27:
                cc.tween(btn_collect).to(.2, {
                  scale: 1
                }).start();
                btn_collect.off("click");
                _context6.next = 31;
                return cc.vv.gameData.awaitTime(.2);

               case 31:
                func = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "btn_click", true);
                        cc.tween(dialog).to(.2, {
                          opacity: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        _context4.next = 6;
                        return cc.vv.gameData.awaitTime(.3);

                       case 6:
                        dialog.active = false;
                        free_dialog.active = false;
                        spine.node.active = false;
                        success();

                       case 10:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function func() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context5.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                })));

               case 34:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      collectCoin: function collectCoin() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var slots, i, collectIdxs, preCollectCnt, j, symbol;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              slots = _this5._gameInfo.collectFreeGame.slots;
              i = 0;

             case 2:
              if (!(i < slots.length)) {
                _context7.next = 21;
                break;
              }
              collectIdxs = slots[i].currCollectIdxs;
              preCollectCnt = slots[i].collectCnt - slots[i].currCollectIdxs.length;
              j = 0;

             case 6:
              if (!(j < collectIdxs.length)) {
                _context7.next = 18;
                break;
              }
              symbol = _this5.GetSymbolByIdx(collectIdxs[j], i);
              if (!symbol) {
                _context7.next = 15;
                break;
              }
              symbol.playStopAnimation();
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_count", true);
              preCollectCnt++;
              cc.find("bg/bg_" + (i + 1) + "/coin_bg/coin", _this5.node).getComponent(cc.Label).string = preCollectCnt;
              _context7.next = 15;
              return cc.vv.gameData.awaitTime(.5);

             case 15:
              j++;
              _context7.next = 6;
              break;

             case 18:
              i++;
              _context7.next = 2;
              break;

             case 21:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var reels = this._reels[i];
              for (var j = 0; j < reels.length; j++) {
                var item = reels[j];
                var reelStopInterv = this.GetReelStopInter(j);
                item.StopMove(reelStopInterv);
              }
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          if (3 === cc.vv.gameData.getDeskInfo().collectInfo.state) {
            var total = cc.vv.gameData.GetTotalFree();
            var rest = cc.vv.gameData.GetFreeTime();
            this._bottomScript.ShowFreeModel(true, total - rest, total);
            var nTotal = cc.vv.gameData.GetTotalFreeWin();
            this._bottomScript.SetWin(nTotal);
            this._bottomScript.SetBetNodeVisible(false);
          }
        } else {
          this._bottomScript.SetBetNodeVisible(true);
          this._bottomScript.ShowFreeModel(false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  FatherOfInvention_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e930e+3QiFCV6h7R22+ovKO", "FatherOfInvention_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      Init: function Init(idx, node) {
        this._super(idx, node);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        if (this._id === cc.vv.gameData.getGameCfg().ballId) {
          this.node.zIndex = 400;
          cc.vv.AudioManager.playEff("games/FatherOfInvention/", "symbol_bonus_slip", true);
        }
      },
      StopMoveBefore: function StopMoveBefore() {},
      StartMove: function StartMove() {
        this._super();
        var cfg = cc.vv.gameData.getGameCfg();
        this._id === cfg.scatterId && (this.node.zIndex = 500);
        this._id === cfg.ballId && (this.node.zIndex = 400);
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._super(idx);
        var cfg = cc.vv.gameData.getGameCfg();
        this._id === cfg.scatterId && (this.node.zIndex = 500);
        this._id === cfg.ballId && (this.node.zIndex = 400);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  FatherOfInvention_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4abdf42dB9HR6g0z31hZtUk", "FatherOfInvention_Wheel");
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
        wheel: cc.Node,
        spine_zhuanpan: sp.Skeleton,
        spine_chilun: sp.Skeleton,
        spine_huoxing: sp.Skeleton,
        spine_zhongjiang: sp.Skeleton,
        free_times: cc.Label,
        touch_spin: cc.Node,
        average_bet: cc.Label,
        _successCallback: null
      },
      startWheel: function startWheel(collectInfo) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var func, i, info;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.node.y = cc.winSize.height;
              _this.node.active = true;
              cc.tween(_this.node).to(.5, {
                y: 0
              }).start();
              _this.wheel.angle = 0;
              _this.spine_zhuanpan.node.active = true;
              _this.spine_chilun.node.active = true;
              _this.spine_chilun.node.color = cc.Color.WHITE;
              _this.spine_chilun.setAnimation(0, "animation", true);
              _this.spine_huoxing.node.active = false;
              _this.spine_zhongjiang.node.active = false;
              _this.touch_spin.off(cc.Node.EventType.TOUCH_END);
              func = function func() {
                _this.touch_spin.off(cc.Node.EventType.TOUCH_END);
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_roulette_spin", true);
                var req = {
                  c: MsgId.SLOT_SUBGAME_DATA
                };
                req.uid = Global.playerData.uid;
                req.gameid = cc.vv.gameData._gameId;
                req.data = {};
                req.data.rtype = 3;
                cc.vv.NetManager.send(req);
              };
              cc.vv.gameData.checkAutoPlay(_this.touch_spin, func);
              _this.touch_spin.on(cc.Node.EventType.TOUCH_END, function() {
                _this.touch_spin.stopAllActions();
                func();
              });
              _this.free_times.string = collectInfo.currFreeCnt;
              _this.average_bet.string = Global.formatNumShort(collectInfo.startPrice, 0);
              for (i = 0; i < collectInfo.monsterInfo.length; i++) {
                info = collectInfo.monsterInfo[i];
                cc.find("multiplier_" + (i + 1), _this.wheel).getComponent(cc.Label).string = "X" + info.currmult;
              }

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onRcvSubgameData: function onRcvSubgameData(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var index;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              cc.vv.gameData.getDeskInfo().collectInfo = msg.data.collectInfo;
              _this2.spine_zhuanpan.node.active = false;
              _this2.spine_chilun.setAnimation(0, "animation2", true);
              _this2.spine_chilun.node.color = cc.Color.GRAY;
              _this2.spine_huoxing.node.active = true;
              index = [ 6, 5, 8, 7 ];
              _context2.next = 8;
              return _this2._rotateWheel(index.indexOf(msg.data.collectFreeGame.activeCard));

             case 8:
              cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_roulette_stop", true);
              _this2.spine_zhongjiang.node.active = true;
              _context2.next = 12;
              return cc.vv.gameData.awaitTime(2);

             case 12:
              _this2.cutScene();
              _context2.next = 15;
              return cc.vv.gameData.awaitTime(2);

             case 15:
              _this2.node.active = false;
              cc.find("slots", _this2.node.parent).active = false;
              cc.find("super_slots", _this2.node.parent).active = true;
              cc.vv.gameData.SetSlotsScript(cc.find("super_slots", _this2.node.parent).getComponent("FatherOfInvention_SuperSlots"));
              cc.find("super_slots", _this2.node.parent).getComponent("FatherOfInvention_SuperSlots").setSlots(msg.data.collectFreeGame);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("mapfree_bgm");
              cc.vv.gameData.SetTotalFree(msg.data.collectFreeGame.freeCnt);
              cc.vv.gameData.SetFreeTime(msg.data.collectFreeGame.freeCnt);
              _context2.next = 26;
              return cc.vv.gameData.awaitTime(2);

             case 26:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 27:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      cutScene: function cutScene() {
        cc.vv.AudioManager.playEff("games/FatherOfInvention/", "transition2", true);
        var transition = cc.find("transition2", this.node.parent);
        transition.active = true;
        transition.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        transition.getComponent(sp.Skeleton).setCompleteListener(function() {
          transition.getComponent(sp.Skeleton).setCompleteListener(null);
          transition.active = false;
        });
      },
      _rotateWheel: function _rotateWheel(endIndex) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                var angle = 90 * endIndex - 2160;
                cc.log(angle);
                cc.vv.AudioManager.playEff("games/FatherOfInvention/", "collect_roulette_start", true);
                var action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                _this3.wheel.runAction(cc.sequence(action, cc.callFunc(function() {
                  success();
                })));
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "FatherOfInvention_Cfg", "FatherOfInvention_Logic", "FatherOfInvention_Map", "FatherOfInvention_Reel", "FatherOfInvention_Slots", "FatherOfInvention_SuperSlots", "FatherOfInvention_Symbol", "FatherOfInvention_Wheel" ]);