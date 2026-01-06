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
  G_Cleopatra_Asset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9f9dG2hWRI5oRkgYXOZBdR", "G_Cleopatra_Asset");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Asset_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Asset_Base: void 0
  } ],
  G_Cleopatra_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf6faS9wEhDNKbmLzneOpFo", "G_Cleopatra_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.G_CLEOPATRA_UNLOCK_ENERGY, this.unlockBetChange, this);
      },
      OnClickSpin: function OnClickSpin() {
        if (cc.vv.gameData.isWaitOperate()) return;
        this._super();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._bStartRound = false;
        this.ShowBtnsByState("idle");
        var deskdata = cc.vv.gameData.getDeskInfo();
        if (deskdata.select && deskdata.select.state) {
          this.ShowBtnsByState("moveing_1");
          return;
        }
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
      },
      unlockBetChange: function unlockBetChange(data) {
        var val = data.detail;
        cc.vv.gameData.SetBetIdx(val);
        this.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  G_Cleopatra_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d89b4iH2KVGwpotr2mrbD0j", "G_Cleopatra_ButtonSafe");
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
  G_Cleopatra_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "795bc268KBExKevNOL6nQ3f", "G_Cleopatra_Cfg");
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
          name: "animation2",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s13",
        win_node: "w13",
        zIndex: 100,
        stop_ani: {
          name: "animation2",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s14",
        win_node: "w14"
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 9, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 10, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 11, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 12, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 13, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 14, {
        node: "s12",
        win_node: "w12",
        stop_ani: {
          name: "animation_1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation_2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 102, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation2",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 103, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation3",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 104, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation4",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 105, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation5",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 107, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation7",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 110, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation10",
          zIndex: 100
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "G_Cleopatra_Bottom",
        Slots: "G_Cleopatra_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "G_Cleopatra_Symbol"
      },
      col: 5,
      row: 4,
      scatterId: 2,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 119,
        height: 81
      },
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: .5,
      normalBgm: "base_bgm",
      soundCfg: {
        base_bgm: "base_bgm",
        free_bgm: "free_bgm"
      },
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 0, 1, 0, 1 ],
        antiNode: "node_anti",
        path: "games/G_Cleopatra/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "anticipation1",
        antSpeed: 2e3
      } ],
      SPINE: {
        pyramid: {
          init: 120,
          add: 40
        },
        num: {
          min: 3,
          max: 50
        },
        comment: "free game spins"
      },
      SINGLE: {
        S1: {
          pyramid: [ 105, 255, 480, 855, 1380 ],
          value: [ "1", "2", "3", "4", "5" ],
          comment: "sticky wilds"
        },
        S2: {
          pyramid: [ 855, 2130, 4380 ],
          value: [ "2X-5X", "3X-7X", "4X-10X" ],
          comment: "multipler wilds"
        },
        S3: {
          pyramid: [ 105, 255, 480, 855, 1320 ],
          value: [ "1", "2", "3", "4", "5" ],
          comment: "random wilds"
        },
        S4: {
          pyramid: [ 105, 150, 195, 240, 420 ],
          symbolid: [ [ 13 ], [ 13, 12 ], [ 13, 12, 11 ], [ 13, 12, 11, 10 ], [ 13, 12, 11, 10, 9 ] ],
          comment: "remove symbols"
        },
        S5: {
          pyramid: [ 15, 60, 225 ],
          value: [ "5", "4,5", "3,4,5" ],
          reel: [ 3, 4, 5 ],
          comment: "expanding wild"
        }
      },
      GROUP: {
        G6: {
          type_1_1: 1155,
          type_1_2: 1380,
          type_1_3: 1710,
          type_1_4: 2130,
          type_1_5: 2730,
          type_2_1: 2430,
          type_2_2: 2880,
          type_2_3: 3630,
          type_2_4: 4080,
          type_2_5: 5055,
          type_3_1: 6330,
          type_3_2: 6630,
          type_3_3: 8130,
          type_3_4: 9105,
          type_3_5: 10680
        },
        G7: {
          type_1_1: 3150,
          type_1_2: 7650,
          type_1_3: 19875,
          type_1_4: 46050,
          type_1_5: 103500,
          type_2_1: 6900,
          type_2_2: 22950,
          type_2_3: 61500,
          type_2_4: 157500,
          type_2_5: 345e3,
          type_3_1: 21225,
          type_3_2: 83250,
          type_3_3: 186750,
          type_3_4: 655500,
          type_3_5: 1552e3
        },
        G8: {
          type_1_1: 120,
          type_1_2: 210,
          type_1_3: 435,
          type_2_1: 300,
          type_2_2: 420,
          type_2_3: 735,
          type_3_1: 555,
          type_3_2: 765,
          type_3_3: 1110,
          type_4_1: 945,
          type_4_2: 1185,
          type_4_3: 1620,
          type_5_1: 1635,
          type_5_2: 1800,
          type_5_3: 2325
        }
      },
      commEffect: {
        path: "games/G_Cleopatra/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      helpItems: [ "games/G_Cleopatra/prefab/G_Cleopatra_Help_item1", "games/G_Cleopatra/prefab/G_Cleopatra_Help_item2", "games/G_Cleopatra/prefab/G_Cleopatra_Help_item3", "games/G_Cleopatra/prefab/G_Cleopatra_Help_item4" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_ChoicMultiplier: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b2ca3l8++REYJ9i/clrETKu", "G_Cleopatra_ChoicMultiplier");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgs: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 4; i++) {
          var btncollect = cc.find("btn_jiachong_" + i, this.node);
          Global.btnClickEvent(btncollect, this.onChoiceJiachong, this);
        }
      },
      onEnable: function onEnable() {
        this.showJiachongButton(true);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      init: function init(data) {
        this._subGameData = data;
        this.initUI();
        var self = this;
        var btn1 = cc.find("btn_jiachong_1", this.node);
        cc.vv.gameData.checkAutoPlay(btn1, function() {
          self.onChoiceJiachong(btn1.name);
        });
      },
      initUI: function initUI() {
        var index = 3 == this._subGameData.type ? 0 : 1;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgs[index];
        this.showWinUI(false);
        this.hideJiachong(true);
        for (var i = 1; i < 4; i++) cc.find("sp_mult" + i, this.node).active = false;
      },
      onChoiceJiachong: function onChoiceJiachong(event) {
        Global.playHSEffect("pick");
        cc.find("btn_jiachong_1", this.node).stopAllActions();
        var name;
        name = "string" == typeof event ? event : event.node.name;
        var idx = parseInt(name.substr(name.lastIndexOf("_") + 1));
        this.sendEnterFreeeGame(idx);
        this.showJiachongButton(false);
      },
      sendEnterFreeeGame: function sendEnterFreeeGame(idx) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = this._subGameData.select.rtype;
        req.data.idx = idx;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var _this = this;
        if (200 == msg.code) {
          var jiachongnode = cc.find("btn_jiachong_" + msg.data.idx, this.node);
          if (jiachongnode) {
            jiachongnode.active = true;
            cc.vv.gameData.playSpine(jiachongnode, "animation2", false, function() {
              cc.vv.gameData.playSpine(jiachongnode, "animation3", false, function() {
                _this.hideJiachong(false);
                _this.showMultiplier(msg.data);
                _this.showWinUI(true);
              });
            });
          }
        }
      },
      showJiachongButton: function showJiachongButton(isshow) {
        for (var i = 1; i < 4; i++) {
          var btncollect = cc.find("btn_jiachong_" + i, this.node);
          btncollect.getComponent(cc.Button).interactable = isshow;
        }
      },
      showWinUI: function showWinUI(isshow) {
        cc.find("winimg", this.node).active = isshow;
        cc.find("selectimg", this.node).active = !isshow;
      },
      hideJiachong: function hideJiachong(isshow) {
        for (var i = 1; i < 4; i++) {
          var jiachongnode = cc.find("btn_jiachong_" + i, this.node);
          jiachongnode.active = isshow;
          isshow && cc.vv.gameData.playSpine(jiachongnode, "animation1", true, null);
        }
      },
      showMultiplier: function showMultiplier(data) {
        var _this2 = this;
        var atlas = cc.vv.gameData.GetAtlasByName("free");
        var mulval = 0;
        var defconf = data.conf;
        var index = 0;
        cc.vv.gameData.removeValue(defconf, data.mult);
        for (var i = 1; i < 4; i++) {
          var multnode = cc.find("sp_mult" + i, this.node);
          multnode.active = true;
          if (i != data.idx) {
            multnode.color = cc.color(90, 90, 90);
            mulval = defconf[index];
            index++;
          } else {
            multnode.color = cc.color(255, 255, 255);
            mulval = data.mult;
          }
          multnode.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme186_free_text_muti_" + mulval);
        }
        this.scheduleOnce(function() {
          _this2.node.active = false;
          cc.vv.gameData.GetFreeGameScript().startFreeGame(_this2._subGameData.freeCnt);
        }, 2);
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_CollectFree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e461ezTCAlPXqYdTqyvOSDm", "G_Cleopatra_CollectFree");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this._collectOverUI = cc.find("safe_node/freeGameUI/collectGameUI", this.node);
        this._collectUI = cc.find("safe_node/collectUI", this.node);
        this._collectbgspine = cc.find("safe_node/spine_character", this.node);
        this._collectspine = cc.find("safe_node/node_energy/collectcoin", this.node);
        this._energyUI = cc.find("safe_node/node_energy", this.node);
        var btncollect = cc.find("uinode/btn_collect", this._collectOverUI);
        Global.btnClickEvent(btncollect, this.onCollectEvent, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_PLAY_LINE_FINISH, this.playLineOver, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      start: function start() {
        this.reConnectCollectFree();
      },
      reConnectCollectFree: function reConnectCollectFree() {
        this._collectFree = cc.vv.gameData.getCollectFree();
        if (this._collectFree && !this._collectFree.state) return;
        Global.SlotsSoundMgr.playBgm("superfg_bgm");
        this.showUI(true);
        this.updateTitle(this._collectFree.recv, cc.vv.gameData.GetTotalFree());
        cc.vv.gameData.GetBottomScript().CanDoNextRound();
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 == msg.code) {
          this._subGameData = msg.data;
          if (5 == this._subGameData.rtype) {
            AppLog.log("\u8fdb\u5165\u6536\u96c6\u514d\u8d39\u6e38\u620f");
            this.updateTitle(this._subGameData.recv, this._subGameData.freeCnt);
            this._totalFreeTimes = this._subGameData.freeCnt;
            cc.vv.gameData.GetSlotsScript().Backup();
            this.startCollectFreeGame();
            var startPrize = cc.vv.gameData.getCollectFreeGameStartPrize();
            startPrize && (cc.find("Canvas/safe_node/LMSlots_Bottom/totalBetBg").active = false);
          }
        }
      },
      startCollectFreeGame: function startCollectFreeGame() {
        var _this = this;
        this.playPyramidSpine(function() {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
          Global.SlotsSoundMgr.playBgm("superfg_bgm");
          cc.vv.gameData.clearLastWinCoin();
          _this.showUI(true);
          _this.sendSpin();
        });
      },
      showUI: function showUI(isshow) {
        this._collectUI.active = isshow;
        this._energyUI.active = !isshow;
        this._collectspine.active = !isshow;
        isshow ? this.playCollectbgAni("skill") : this.playCollectbgAni("idle");
        if (isshow) {
          this.showJackpotUI(false);
          cc.vv.gameData.GetGameLogic().changeGameBg(4);
        } else {
          this.showJackpotUI(true);
          cc.vv.gameData.GetGameLogic().changeGameBg(5);
        }
      },
      showJackpotUI: function showJackpotUI(isshow) {
        cc.find("safe_node/LMSlots_PrizePool", this.node).active = isshow;
      },
      sendSpin: function sendSpin() {
        cc.vv.gameData.SetFreeTime(this._totalFreeTimes - 1);
        cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 1, this._totalFreeTimes);
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      playPyramidSpine: function playPyramidSpine(callback) {
        Global.playHSEffect("transition1");
        var freestartspine = cc.find("safe_node/screenspine/collectstartspine", this.node);
        freestartspine.active = true;
        cc.vv.gameData.playSpine(freestartspine, "animation", false, function() {
          freestartspine.active = false;
          callback && callback();
        });
      },
      playLineOver: function playLineOver() {
        this._collectFree = cc.vv.gameData.getCollectFree();
        if (this._collectFree && this._collectFree.state) {
          var restFree = cc.vv.gameData.GetFreeTime();
          0 == restFree && this.showCollectOverUI();
        }
      },
      showCollectOverUI: function showCollectOverUI() {
        var _this2 = this;
        cc.vv.gameData._collectFreeState = false;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        Global.playHSEffect("dialog_sfg_collect");
        this._collectOverUI.active = true;
        var node = cc.find("uinode", this._collectOverUI);
        Global.showAlertAction(node, true, .1, 1, function() {
          var wincoin = cc.vv.gameData.GetFreeWinCoin();
          var coinnode = cc.find("uinode/framebg/coinnum", _this2._collectOverUI);
          Global.doRoallNumEff(coinnode, 0, wincoin, 1.5, null, null, 0, true);
          var btncollect = cc.find("uinode/btn_collect", _this2._collectOverUI);
          cc.vv.gameData.checkAutoPlay(btncollect, _this2.onCollectEvent.bind(_this2));
        });
      },
      onCollectEvent: function onCollectEvent() {
        var _this3 = this;
        Global.playHSEffect("btn_click");
        cc.find("uinode/btn_collect", this._collectOverUI).stopAllActions();
        var node = cc.find("uinode", this._collectOverUI);
        Global.showAlertAction(node, false, .1, 1, function() {
          Global.SlotsSoundMgr.stopBgm();
          _this3._collectOverUI.active = false;
          _this3.playPyramidSpine(function() {
            _this3.showUI(false);
            cc.vv.gameData.GetSlotsScript().clearWildShow();
            cc.vv.gameData.GetSlotsScript().clearData();
            cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
            var wincoin = cc.vv.gameData.GetFreeWinCoin();
            cc.vv.gameData.GetSlotsScript().ShowBottomWin(wincoin, wincoin, true, function() {
              cc.vv.gameData.GetTopScript().SetBackLobby(true);
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
            });
            cc.find("Canvas/safe_node/LMSlots_Bottom/totalBetBg").active = true;
            cc.vv.gameData.GetBottomScript().ShowBetCoin();
          });
        });
      },
      updateTitle: function updateTitle(recv, freecnt) {
        var _this4 = this;
        var line = cc.find("title/titleline", this._collectUI);
        var singletitle = cc.find("title/items/singletitle", this._collectUI);
        var singletitle1 = cc.find("title/items/singletitle1", this._collectUI);
        var singletitle2 = cc.find("title/items/singletitle2", this._collectUI);
        var singletitle4 = cc.find("title/items/singletitle4", this._collectUI);
        var singletitle5 = cc.find("title/items/singletitle5", this._collectUI);
        singletitle.active = false;
        singletitle1.active = false;
        singletitle2.active = false;
        singletitle4.active = false;
        singletitle5.active = false;
        if (recv.other.length < 2) {
          line.active = false;
          if (1 == recv.other.length) this.showTitlebytype(recv.other[0].type, recv.other[0].idx, singletitle, singletitle2, singletitle4, singletitle5); else {
            singletitle1.active = true;
            singletitle1.getChildByName("mult").getComponent(cc.Label).string = freecnt;
          }
        } else {
          line.active = true;
          recv.other.forEach(function(element) {
            _this4.showTitlebytype(element.type, element.idx, singletitle, singletitle2, singletitle4, singletitle5);
          });
        }
      },
      showTitlebytype: function showTitlebytype(type, idx, singletitle, singletitle2, singletitle4, singletitle5) {
        var pos = idx - 1;
        var singleCfg = cc.vv.gameData.getGameCfg().SINGLE;
        if (1 == type || 3 == type) {
          var atlas = cc.vv.gameData.GetAtlasByName("mapfree");
          var spname = this.getSpriteName(type);
          singletitle.active = true;
          singletitle.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(spname);
        } else if (2 == type) {
          singletitle2.active = true;
          singletitle2.getChildByName("mult").getComponent(cc.Label).string = singleCfg.S2.value[pos];
        } else if (4 == type) {
          singletitle4.active = true;
          var len = singleCfg.S4.symbolid[pos].length;
          for (var i = 0; i < 5; i++) cc.find("symbols/symbol" + i, singletitle4).active = i < len;
        } else 5 == type && (singletitle5.active = true);
      },
      getSpriteName: function getSpriteName(type) {
        switch (type) {
         case 1:
          return "theme186_mapfree_2";

         case 2:
          return "theme186_mapfree_3";

         case 3:
          return "theme186_mapfree_4";

         case 4:
          return "theme186_mapfree_5";

         case 5:
          return "theme186_mapfree_6";
        }
      },
      playCollectbgAni: function playCollectbgAni(aniname) {
        cc.vv.gameData.playSpine(this._collectbgspine, aniname, true);
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_CollectUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2e963t/11KYq93yzL3LoHj", "G_Cleopatra_CollectUI");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        items: [ cc.Node ]
      },
      onLoad: function onLoad() {
        var _this = this;
        this._spineCfg = cc.vv.gameData.getGameCfg().SPINE;
        this._singleCfg = cc.vv.gameData.getGameCfg().SINGLE;
        this._groupCfg = cc.vv.gameData.getGameCfg().GROUP;
        this.items.forEach(function(element) {
          Global.btnClickEvent(element, _this.onChoiceEvent, _this);
          var btn_help = cc.find("choicebg/btn_help", element);
          Global.btnClickEvent(btn_help, _this.onItemHelpEvent, _this);
          var btn_subtract = cc.find("choicebg/btn_subtract", element);
          Global.btnClickEvent(btn_subtract, _this.onSubtractEvent, _this);
          var btn_add = cc.find("choicebg/btn_add", element);
          Global.btnClickEvent(btn_add, _this.onAddEvent, _this);
          var btn_subtract2 = cc.find("choicebg/btn_subtract2", element);
          Global.btnClickEvent(btn_subtract2, _this.onSubtract2Event, _this);
          var btn_add2 = cc.find("choicebg/btn_add2", element);
          Global.btnClickEvent(btn_add2, _this.onAdd2Event, _this);
        });
        var btn_freesubtract = cc.find("center/freegamespins/btn_subtract", this.node);
        Global.btnClickEvent(btn_freesubtract, this.onFreeSpinsSubtractEvent, this);
        var btn_freeadd = cc.find("center/freegamespins/btn_add", this.node);
        Global.btnClickEvent(btn_freeadd, this.onFreeSpinsAddEvent, this);
        var collecthelop = cc.find("btn_close", this.node);
        Global.btnClickEvent(collecthelop, this.onCloseUI, this);
        var buildplay = cc.find("btn_buildplay", this.node);
        Global.btnClickEvent(buildplay, this.onBuildPlayEvent, this);
        this._lblTotalCost = cc.find("btn_buildplay/totalcost", this.node).getComponent(cc.Label);
      },
      onEnable: function onEnable() {
        this._freeSpinsValue = this._spineCfg.num.min;
        this._defaultCost = this._spineCfg.pyramid.init;
        this._otherCost = 0;
        this._itemIndex = 0;
        this._pyramidCount = cc.vv.gameData.getPyramidNum();
        var collectcoin = cc.find("bg_collectcoin/lbl_collectcoin", this.node);
        collectcoin.getComponent(cc.Label).string = Global.FormatNumToComma(this._pyramidCount);
        this.updateFreeGameSpins();
        this.updateTotalCost();
        this.hideAllItems();
      },
      onCloseUI: function onCloseUI() {
        var _this2 = this;
        Global.playHSEffect("btn_click");
        Global.showAlertAction(this.node, false, .1, 0, function() {
          _this2.node.active = false;
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
        });
      },
      sendStartCollectGame: function sendStartCollectGame() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.other = {};
        req.data.rtype = 5;
        req.data.spin = {
          num: this._freeSpinsValue - 2
        };
        req.data.other = this.getSendTypeIndex();
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
        Global.playHSEffect("btn_click");
      },
      onBuildPlayEvent: function onBuildPlayEvent(btn) {
        var _this3 = this;
        Global.playHSEffect("btn_click");
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.showAlertAction(this.node, false, .1, 0, function() {
          _this3.node.active = false;
          cc.vv.gameData._collectFreeState = true;
          _this3.sendStartCollectGame();
        });
      },
      hideAllItems: function hideAllItems() {
        this.items.forEach(function(element) {
          cc.find("choicebg", element).active = false;
        });
      },
      onChoiceEvent: function onChoiceEvent(item) {
        this._curpos = 0;
        this._curpos2 = 0;
        this._itemIndex = parseInt(item.node.name.replace("item", ""));
        this.updateConfiguration(item.node);
        Global.playHSEffect("choose1");
        cc.find("choicebg", item.node).active = true;
        this.items.forEach(function(element) {
          item.node != element && (cc.find("choicebg", element).active = false);
        });
      },
      updateConfiguration: function updateConfiguration(itemnode) {
        var getcfg = this.getCfgbyIndex(this._itemIndex);
        var addcost = 0;
        if (getcfg) {
          for (var i = 0; i < getcfg.length; i++) {
            if (getcfg[i].reel) {
              var pos = 0 == i ? this._curpos : this._curpos2;
              cc.find("choicebg/reels/number", itemnode).getComponent(cc.Label).string = getcfg[i].value[pos];
              if (0 == pos) {
                cc.find("choicebg/reels/reel", itemnode).active = true;
                cc.find("choicebg/reels/reels", itemnode).active = false;
              } else {
                cc.find("choicebg/reels/reel", itemnode).active = false;
                cc.find("choicebg/reels/reels", itemnode).active = true;
              }
              addcost += getcfg[i].pyramid[pos];
            } else if (getcfg[i].symbolid) {
              var _pos = 0 == i ? this._curpos : this._curpos2;
              var symbollist = getcfg[i].symbolid[_pos];
              for (var _i = 0; _i < 5; _i++) _i < symbollist.length ? cc.find("choicebg/symbols/symbol" + _i, itemnode).active = true : cc.find("choicebg/symbols/symbol" + _i, itemnode).active = false;
              addcost += getcfg[i].pyramid[_pos];
            } else if (0 == i) {
              cc.find("choicebg/curtimes", itemnode).getComponent(cc.Label).string = getcfg[i].value[this._curpos];
              addcost += getcfg[i].pyramid[this._curpos];
            } else {
              cc.find("choicebg/curtimes2", itemnode).getComponent(cc.Label).string = getcfg[i].value[this._curpos2];
              addcost += getcfg[i].pyramid[this._curpos2];
            }
            this.updateSubandAddBtn(itemnode, getcfg[i].pyramid.length - 1, i);
          }
          7 != this._itemIndex && 8 != this._itemIndex && 9 != this._itemIndex || (addcost = this.getPyramidCount(this._itemIndex, this._curpos + 1, this._curpos2 + 1));
          cc.find("choicebg/totaltimes", itemnode).getComponent(cc.Label).string = this.getFreeGameSpinsAddCost(addcost);
        }
        this._otherCost = addcost;
        this.updateTotalCost();
      },
      onFreeSpinsSubtractEvent: function onFreeSpinsSubtractEvent(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._freeSpinsValue--;
        this.updateFreeGameSpins();
        this.updateTotalCost();
      },
      onFreeSpinsAddEvent: function onFreeSpinsAddEvent(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._freeSpinsValue++;
        this.updateFreeGameSpins();
        this.updateTotalCost();
      },
      freeSpinsChangeMulCost: function freeSpinsChangeMulCost() {
        var curcost = this.getFreeGameSpinsAddCost(this._otherCost);
        var totaltimes = cc.find(cc.js.formatStr("center/item%s/choicebg/totaltimes", this._itemIndex), this.node);
        totaltimes && (totaltimes.getComponent(cc.Label).string = Global.FormatNumToComma(curcost));
      },
      updateFreeGameSpins: function updateFreeGameSpins() {
        var addnode = cc.find("center/freegamespins/btn_add", this.node);
        var subtract = cc.find("center/freegamespins/btn_subtract", this.node);
        this._freeSpinsValue == this._spineCfg.num.max ? addnode.getComponent(cc.Button).interactable = false : addnode.getComponent(cc.Button).interactable = true;
        this._freeSpinsValue == this._spineCfg.num.min ? subtract.getComponent(cc.Button).interactable = false : subtract.getComponent(cc.Button).interactable = true;
        this._defaultCost = this.getFreeGameSpinsAddCost(this._spineCfg.pyramid.init);
        cc.find("center/freegamespins/totaltimes", this.node).getComponent(cc.Label).string = Global.FormatNumToComma(this._defaultCost);
        cc.find("center/freegamespins/curtimes", this.node).getComponent(cc.Label).string = Global.FormatNumToComma(this._freeSpinsValue);
        this.freeSpinsChangeMulCost();
      },
      getFreeGameSpinsAddCost: function getFreeGameSpinsAddCost(curvalue) {
        return Math.floor(curvalue * this._freeSpinsValue / this._spineCfg.num.min);
      },
      updateSubandAddBtn: function updateSubandAddBtn(itemnode, maxpos, subindex) {
        if (1 == subindex) {
          0 == this._curpos2 ? cc.find("choicebg/btn_subtract2", itemnode).getComponent(cc.Button).interactable = false : cc.find("choicebg/btn_subtract2", itemnode).getComponent(cc.Button).interactable = true;
          this._curpos2 == maxpos ? cc.find("choicebg/btn_add2", itemnode).getComponent(cc.Button).interactable = false : cc.find("choicebg/btn_add2", itemnode).getComponent(cc.Button).interactable = true;
        } else {
          0 == this._curpos ? cc.find("choicebg/btn_subtract", itemnode).getComponent(cc.Button).interactable = false : cc.find("choicebg/btn_subtract", itemnode).getComponent(cc.Button).interactable = true;
          this._curpos == maxpos ? cc.find("choicebg/btn_add", itemnode).getComponent(cc.Button).interactable = false : cc.find("choicebg/btn_add", itemnode).getComponent(cc.Button).interactable = true;
        }
      },
      getCfgbyIndex: function getCfgbyIndex(index) {
        switch (index) {
         case 2:
          return [ this._singleCfg.S1 ];

         case 3:
          return [ this._singleCfg.S2 ];

         case 4:
          return [ this._singleCfg.S3 ];

         case 5:
          return [ this._singleCfg.S4 ];

         case 6:
          return [ this._singleCfg.S5 ];

         case 7:
          return [ this._singleCfg.S2, this._singleCfg.S4 ];

         case 8:
          return [ this._singleCfg.S2, this._singleCfg.S3 ];

         case 9:
          return [ this._singleCfg.S1, this._singleCfg.S5 ];
        }
        return;
      },
      getSendTypeIndex: function getSendTypeIndex() {
        switch (this._itemIndex) {
         case 2:
          return [ {
            type: 1,
            idx: this._curpos + 1
          } ];

         case 3:
          return [ {
            type: 2,
            idx: this._curpos + 1
          } ];

         case 4:
          return [ {
            type: 3,
            idx: this._curpos + 1
          } ];

         case 5:
          return [ {
            type: 4,
            idx: this._curpos + 1
          } ];

         case 6:
          return [ {
            type: 5,
            idx: this._curpos + 1
          } ];

         case 7:
          return [ {
            type: 2,
            idx: this._curpos + 1
          }, {
            type: 4,
            idx: this._curpos2 + 1
          } ];

         case 8:
          return [ {
            type: 2,
            idx: this._curpos + 1
          }, {
            type: 3,
            idx: this._curpos2 + 1
          } ];

         case 9:
          return [ {
            type: 1,
            idx: this._curpos + 1
          }, {
            type: 5,
            idx: this._curpos2 + 1
          } ];
        }
        return [];
      },
      getPyramidCount: function getPyramidCount(index, pos1, pos2) {
        switch (index) {
         case 7:
          return this.getGroupPyramid(this._groupCfg.G6, pos1, pos2);

         case 8:
          return this.getGroupPyramid(this._groupCfg.G7, pos1, pos2);

         case 9:
          return this.getGroupPyramid(this._groupCfg.G8, pos1, pos2);
        }
        return 0;
      },
      getGroupPyramid: function getGroupPyramid(group, pos1, pos2) {
        switch (pos1) {
         case 1:
          switch (pos2) {
           case 1:
            return group.type_1_1;

           case 2:
            return group.type_1_2;

           case 3:
            return group.type_1_3;

           case 4:
            return group.type_1_4;

           case 5:
            return group.type_1_5;
          }
          break;

         case 2:
          switch (pos2) {
           case 1:
            return group.type_2_1;

           case 2:
            return group.type_2_2;

           case 3:
            return group.type_2_3;

           case 4:
            return group.type_2_4;

           case 5:
            return group.type_2_5;
          }
          break;

         case 3:
          switch (pos2) {
           case 1:
            return group.type_3_1;

           case 2:
            return group.type_3_2;

           case 3:
            return group.type_3_3;

           case 4:
            return group.type_3_4;

           case 5:
            return group.type_3_5;
          }
          break;

         case 4:
          switch (pos2) {
           case 1:
            return group.type_4_1;

           case 2:
            return group.type_4_2;

           case 3:
            return group.type_4_3;

           case 4:
            return group.type_4_4;

           case 5:
            return group.type_4_5;
          }
          break;

         case 5:
          switch (pos2) {
           case 1:
            return group.type_5_1;

           case 2:
            return group.type_5_2;

           case 3:
            return group.type_5_3;

           case 4:
            return group.type_5_4;

           case 5:
            return group.type_5_5;
          }
        }
        return 0;
      },
      onItemHelpEvent: function onItemHelpEvent(item) {
        Global.playHSEffect("btn_click");
      },
      onSubtractEvent: function onSubtractEvent(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._curpos--;
        this.updateConfiguration(btn.node.parent.parent);
      },
      onAddEvent: function onAddEvent(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._curpos++;
        this.updateConfiguration(btn.node.parent.parent);
      },
      onSubtract2Event: function onSubtract2Event(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._curpos2--;
        this.updateConfiguration(btn.node.parent.parent);
      },
      onAdd2Event: function onAdd2Event(btn) {
        if (!btn.node.getComponent(cc.Button).interactable) return;
        Global.playHSEffect("btn_click");
        this._curpos2++;
        this.updateConfiguration(btn.node.parent.parent);
      },
      updateTotalCost: function updateTotalCost() {
        var totalcost = this._defaultCost + this.getFreeGameSpinsAddCost(this._otherCost);
        this._lblTotalCost.string = Global.FormatNumToComma(totalcost);
        totalcost > this._pyramidCount ? cc.find("btn_buildplay", this.node).getComponent(cc.Button).interactable = false : cc.find("btn_buildplay", this.node).getComponent(cc.Button).interactable = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_Energy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a801cigXMhLw7nrTPh8/A5r", "G_Cleopatra_Energy");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _playUnlockState: 0
      },
      onLoad: function onLoad() {
        this._collectUI = cc.find("Canvas/safe_node/collectGameUI");
        this._lblPyramidnumNode = cc.find("collectnum", this.node);
        var btn_lock = cc.find("btn_unlock", this.node);
        Global.btnClickEvent(btn_lock, this.onClicklock, this);
        var collecthelop = cc.find("pyramidicon", this.node);
        Global.btnClickEvent(collecthelop, this.onStartFreeGameEvent, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY, this.updateEnergy, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onChangeBetValue, this);
        this.updatePyaramidLock();
      },
      onEnable: function onEnable() {
        this.updateEnergy();
      },
      onClicklock: function onClicklock() {
        if (cc.vv.gameData.isReelMove()) return;
        if (1 == this._playUnlockState) return;
        Global.playHSEffect("collect_unlock");
        Global.dispatchEvent(cc.vv.gameData._EventId.G_CLEOPATRA_UNLOCK_ENERGY, cc.vv.gameData.getMinBet());
        var btn_unlock = cc.find("btn_unlock", this.node);
        cc.vv.gameData.playSpine(btn_unlock, "animation1", false, function() {
          btn_unlock.active = false;
        });
      },
      updatePyaramidLock: function updatePyaramidLock() {
        var btn_unlock = cc.find("btn_unlock", this.node);
        if (cc.vv.gameData.isOpenCollectProgress()) {
          if (1 != this._playUnlockState) {
            this._playUnlockState = 1;
            Global.playHSEffect("collect_unlock");
            cc.vv.gameData.playSpine(btn_unlock, "animation1", false, function() {
              btn_unlock.active = false;
            });
          }
        } else if (2 != this._playUnlockState) {
          this._playUnlockState = 2;
          Global.playHSEffect("collect_lock");
          cc.vv.gameData.playSpine(btn_unlock, "animation2", false, function() {});
        }
      },
      updateEnergy: function updateEnergy() {
        var pyramid = cc.vv.gameData.getPyramidNum();
        this.updatePyramidNum(pyramid);
      },
      updatePyramidNum: function updatePyramidNum(num) {
        Global.doRoallNumEff(this._lblPyramidnumNode, num, num, 0, null, null, 0, true);
      },
      onStartFreeGameEvent: function onStartFreeGameEvent() {
        if (cc.vv.gameData.isReelMove()) return;
        var data = cc.vv.gameData.getSelectData();
        if (data.state) return;
        if (cc.vv.gameData._collectFreeState) return;
        Global.playHSEffect("btn_click");
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this._collectUI.active = true;
        Global.showAlertAction(this._collectUI, true, .1, 1, null);
      },
      onChangeBetValue: function onChangeBetValue(data) {
        this.updatePyaramidLock();
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a421aruORPJ6ghVcvZzFFV", "G_Cleopatra_FreeGame");
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
        _freeGameType: 0
      },
      onLoad: function onLoad() {
        this._totalFreeTimes = 7;
        this._rewardGameRollUI = cc.find("safe_node/rewardsGameRollUI", this.node);
        this._freeGameRollUI = cc.find("safe_node/freeGameRollUI", this.node);
        this._freeGameUI = cc.find("safe_node/freeGameUI", this.node);
        this._pyramidNumNode = cc.find("bg_collectcoin/lbl_collectcoin", this._freeGameUI);
        var rewardstartnode = cc.find("startspine", this._rewardGameRollUI);
        Global.btnClickEvent(rewardstartnode, this.onStartBonusFreeGameEvent, this);
        var startnode = cc.find("startspine", this._freeGameRollUI);
        Global.btnClickEvent(startnode, this.onStartFreeGameEvent, this);
        var collectnode = cc.find("gameEndUI/btn_collect", this._freeGameUI);
        Global.btnClickEvent(collectnode, this.onCollectEvent, this);
        var startgamenode2 = cc.find("pressStartUI_2/btn_start", this._freeGameUI);
        Global.btnClickEvent(startgamenode2, this.onStartFreeGame24, this);
        var startgamenode4 = cc.find("pressStartUI_4/btn_start", this._freeGameUI);
        Global.btnClickEvent(startgamenode4, this.onStartFreeGame24, this);
        var collectreward = cc.find("rewardCollectUI/btn_collect", this._freeGameUI);
        Global.btnClickEvent(collectreward, this.onRewardCollectEvent, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_PLAY_LINE_FINISH, this.playLineOver, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY, this.updateEnergy, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      reConnectEnterFreeGame: function reConnectEnterFreeGame() {
        var deskdata = cc.vv.gameData.getDeskInfo();
        this._subGameData = deskdata.freeGameData;
        this._freeGameType = this._subGameData.rtype;
        if (deskdata.select && deskdata.select.state) {
          if (1 == deskdata.select.rtype) cc.vv.gameData.GetFreeGameScript().EnterFreeGame(1); else {
            if (4 != deskdata.select.rtype) {
              var choicemult = cc.find("choicemultiplier", this._freeGameUI);
              choicemult.active = true;
              var freeinfo = this._subGameData.triFreeData.freeInfo;
              choicemult.getComponent("G_Cleopatra_ChoicMultiplier").init(freeinfo);
            }
            this.enterFreeGameBytype(this._freeGameType);
            this.reConnectShowUIDate();
          }
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        } else {
          if (cc.vv.gameData.getCollectFree().state) return;
          this.enterFreeGameBytype(this._freeGameType);
          this.reConnectShowUIDate();
        }
      },
      reConnectEnterRewardGame: function reConnectEnterRewardGame() {
        this.lockJackpot();
        this._rewardGameRollUI.active = true;
        var startnode = cc.find("startspine", this._rewardGameRollUI);
        cc.vv.gameData.playSpine(startnode, "animation1", false, null);
        cc.vv.gameData.checkAutoPlay(startnode, this.onStartBonusFreeGameEvent.bind(this));
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
      },
      reConnectShowUIDate: function reConnectShowUIDate() {
        var _this = this;
        Global.SlotsSoundMgr.playBgm("free_bgm");
        var atlas = cc.vv.gameData.GetAtlasByName("free");
        var index = 1;
        this._subGameData.boxs.forEach(function(val) {
          index <= _this._subGameData.allFreeCount - _this._subGameData.restFreeCount && _this.setItemGray(index, true);
          var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this._freeGameType, index);
          var item = cc.find(path, _this._freeGameUI);
          1 == _this._freeGameType || 3 == _this._freeGameType ? item.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme186_free_text_muti_" + val) : 2 == _this._freeGameType && (item.getComponent(cc.Label).string = Global.convertNumToShort(val));
          index++;
        });
        cc.vv.gameData.GetBottomScript().CanDoNextRound();
      },
      EnterFreeGame: function EnterFreeGame(rtype) {
        var _this2 = this;
        AppLog.log("##freeGameType:" + rtype);
        if (4 == rtype) this.playRenwuRewardAni(function() {
          _this2.playSanjinbiSpine(function() {
            _this2.lockJackpot();
            cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
            _this2._rewardGameRollUI.active = true;
            var startnode = cc.find("startspine", _this2._rewardGameRollUI);
            cc.vv.gameData.playSpine(startnode, "animation1", true, null);
            cc.vv.gameData.checkAutoPlay(startnode, _this2.onStartBonusFreeGameEvent.bind(_this2));
          });
        }); else if (1 == rtype) {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
          this._freeGameRollUI.active = true;
          this.playStartClickSpine();
        }
      },
      playRenwuRewardAni: function playRenwuRewardAni(callback) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var renwunode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              renwunode = cc.find("safe_node/spine_character", _this3.node);
              cc.vv.gameData.playSpine(renwunode, "skill1", false, function() {
                cc.vv.gameData.playSpine(renwunode, "idle", true);
              });
              _context.next = 4;
              return cc.vv.gameData.awaitTime(2);

             case 4:
              callback && callback();

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onStartFreeGameEvent: function onStartFreeGameEvent() {
        Global.playHSEffect("press");
        var startnode = cc.find("startspine", this._freeGameRollUI);
        startnode.stopAllActions();
        startnode.getComponent(cc.Button).interactable = false;
        this.sendEnterFreeeGame(1);
        cc.vv.gameData.playSpine(startnode, "animation2", false, function() {
          startnode.active = false;
          startnode.getComponent(cc.Button).interactable = true;
        });
      },
      onStartBonusFreeGameEvent: function onStartBonusFreeGameEvent(btn) {
        Global.playHSEffect("press");
        var startnode = cc.find("startspine", this._rewardGameRollUI);
        startnode.stopAllActions();
        startnode.getComponent(cc.Button).interactable = false;
        this.sendEnterFreeeGame(4);
        cc.vv.gameData.playSpine(startnode, "animation2", false, function() {
          startnode.active = false;
          startnode.getComponent(cc.Button).interactable = true;
        });
      },
      lockJackpot: function lockJackpot() {
        var poollist = cc.vv.gameData.getPoolList();
        if (poollist) {
          var prizepool = cc.find("safe_node/LMSlots_PrizePool", this.node).getComponent("LMSlots_PrizePool_Base");
          prizepool.PausePool([ {
            prizeType: 0,
            pauseNum: poollist[0]
          }, {
            prizeType: 1,
            pauseNum: poollist[1]
          }, {
            prizeType: 2,
            pauseNum: poollist[2]
          }, {
            prizeType: 3,
            pauseNum: poollist[3]
          }, {
            prizeType: 4,
            pauseNum: poollist[4]
          } ]);
        }
      },
      resetJackpot: function resetJackpot() {
        var prizepool = cc.find("safe_node/LMSlots_PrizePool", this.node).getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      playStartClickSpine: function playStartClickSpine() {
        var startnode = cc.find("startspine", this._freeGameRollUI);
        startnode.active = true;
        cc.vv.gameData.playSpine(startnode, "animation1", true, null);
        cc.vv.gameData.checkAutoPlay(startnode, this.onStartFreeGameEvent.bind(this));
      },
      playFreeSpine: function playFreeSpine(callback) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var freestartspine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              Global.playHSEffect("transition3");
              freestartspine = cc.find("safe_node/screenspine/qp_aijiyanhou", _this4.node);
              freestartspine.active = true;
              cc.vv.gameData.playSpine(freestartspine, "skill2", false, function() {
                freestartspine.active = false;
              });
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(1.5);

             case 7:
              callback && callback();

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playBonusGameSpine: function playBonusGameSpine(callback) {
        Global.playHSEffect("transition1");
        var freestartspine = cc.find("safe_node/screenspine/bonusgamespine", this.node);
        freestartspine.active = true;
        cc.vv.gameData.playSpine(freestartspine, "animation", false, function() {
          freestartspine.active = false;
          callback && callback();
        });
      },
      playSanjinbiSpine: function playSanjinbiSpine(callback) {
        Global.playHSEffect("transition2");
        var freestartspine = cc.find("safe_node/screenspine/sanjinbispine", this.node);
        freestartspine.active = true;
        cc.vv.gameData.playSpine(freestartspine, "animation", false, function() {
          freestartspine.active = false;
          callback && callback();
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 == msg.code) {
          if (5 == msg.data.rtype) return;
          this._subGameData = msg.data;
          if (4 == this._subGameData.rtype) {
            this._freeGameType = void 0;
            this._rewardGameRollUI.getComponent("G_Cleopatra_Roll").startMove(this._subGameData);
          } else {
            this._freeGameType = msg.data.type;
            1 == this._subGameData.rtype && this._freeGameRollUI.getComponent("G_Cleopatra_Roll").startMove(this._subGameData);
          }
        }
      },
      sendEnterFreeeGame: function sendEnterFreeeGame(type) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = type;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      rollEndHandle: function rollEndHandle(subdata) {
        var _this5 = this;
        if (subdata.rtype && 4 == subdata.rtype) this.showRewardCollectUI(subdata); else {
          this.playFreeSpine(function() {
            _this5._freeGameType = subdata.type;
            AppLog.log("####freegametype:" + _this5._freeGameType);
            if (subdata.select && subdata.select.state) {
              var choicemult = cc.find("choicemultiplier", _this5._freeGameUI);
              choicemult.active = true;
              choicemult.getComponent("G_Cleopatra_ChoicMultiplier").init(subdata);
            } else if (2 == _this5._freeGameType) {
              cc.find("pressStartUI_2", _this5._freeGameUI).active = true;
              var startgamenode2 = cc.find("pressStartUI_2/btn_start", _this5._freeGameUI);
              cc.vv.gameData.checkAutoPlay(startgamenode2, _this5.onStartFreeGame24.bind(_this5));
            } else if (4 == _this5._freeGameType) {
              cc.find("pressStartUI_4", _this5._freeGameUI).active = true;
              var startgamenode4 = cc.find("pressStartUI_4/btn_start", _this5._freeGameUI);
              cc.vv.gameData.checkAutoPlay(startgamenode4, _this5.onStartFreeGame24.bind(_this5));
            } else _this5.startFreeGame();
            _this5.enterFreeGameBytype(_this5._freeGameType);
            _this5._freeGameRollUI.active = false;
          });
          this.scheduleOnce(function() {
            cc.vv.gameData.GetSlotsScript().freeReUpdateSymbol();
          }, .3);
        }
      },
      onStartFreeGame24: function onStartFreeGame24() {
        Global.playHSEffect("btn_click");
        cc.find("pressStartUI_2", this._freeGameUI).active = false;
        cc.find("pressStartUI_2", this._freeGameUI).stopAllActions();
        cc.find("pressStartUI_4", this._freeGameUI).active = false;
        cc.find("pressStartUI_4", this._freeGameUI).stopAllActions();
        this.startFreeGame();
      },
      startMoveFreeGame: function startMoveFreeGame() {
        if (this._freeGameType) {
          var restFree = cc.vv.gameData.GetFreeTime();
          AppLog.log("####\u5f00\u59cb\u79fb\u52a8 RestFree:" + restFree);
          this.setFrameSpineShow(this._totalFreeTimes - restFree);
        }
      },
      startFreeGame: function startFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.playBgm("free_bgm");
              if (1 == _this6._freeGameType) _this6.freeType1ShowMult(); else if (2 == _this6._freeGameType) _this6.freeType2ShowMult(); else if (3 == _this6._freeGameType) _this6.freeType3ShowMult(); else {
                for (i = 1; i < 8; i++) _this6.setItemGray(i, false);
                _this6.sendSpin();
              }

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      freeType1ShowMult: function freeType1ShowMult() {
        var _this7 = this;
        var atlas = cc.vv.gameData.GetAtlasByName("free");
        var index = 1;
        this._subGameData.boxs.forEach(function(val) {
          _this7.setItemGray(index, false);
          var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this7._freeGameType, index);
          var mult = cc.find(path, _this7._freeGameUI);
          mult.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme186_free_text_muti_" + val);
          index++;
        });
        for (var j = 4; j < 8; j++) {
          var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", this._freeGameType, j);
          var mult = cc.find(path, this._freeGameUI);
          mult.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.5, 1).easing(cc.easeBackInOut())));
        }
        this.scheduleOnce(function() {
          _this7.sendSpin();
        }, 1);
      },
      freeType2ShowMult: function freeType2ShowMult() {
        var _this8 = this;
        var index = 1;
        this._subGameData.boxs.forEach(function(val) {
          _this8.setItemGray(index, false);
          var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this8._freeGameType, index);
          var item = cc.find(path, _this8._freeGameUI);
          item.getComponent(cc.Label).string = Global.convertNumToShort(val);
          index++;
        });
        this.sendSpin();
      },
      freeType3ShowMult: function freeType3ShowMult() {
        var _this9 = this;
        var atlas = cc.vv.gameData.GetAtlasByName("free");
        var index = 1;
        this._subGameData.boxs.forEach(function(val) {
          _this9.setItemGray(index, false);
          var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this9._freeGameType, index);
          var mult = cc.find(path, _this9._freeGameUI);
          mult.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme186_free_text_muti_" + val);
          index++;
        });
        var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", this._freeGameType, 7);
        var mult7 = cc.find(path, this._freeGameUI);
        mult7.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.5, 1).easing(cc.easeBackInOut())));
        this.scheduleOnce(function() {
          _this9.sendSpin();
        }, 1);
      },
      sendSpin: function sendSpin() {
        cc.vv.gameData.SetFreeTime(this._totalFreeTimes - 1);
        cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 1, this._totalFreeTimes);
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      showLastSpinUI: function showLastSpinUI() {
        cc.vv.gameData.GetSlotsScript().showMask(true);
        Global.playHSEffect("dialog_lastspin");
        var atlas = cc.vv.gameData.GetAtlasByName("dialog");
        var spname = this.getLastSpinSpNameByType(this._freeGameType);
        var lastui = cc.find("lastspin", this._freeGameUI);
        lastui.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(spname);
        lastui.active = true;
        cc.tween(lastui).to(.5, {
          position: cc.v2(0, -431)
        }, {
          easing: "backIn"
        }).call(function() {
          var movetop = cc.moveTo(.5, cc.v2(0, -401)).easing(cc.easeBackOut());
          var movebottom = cc.moveTo(.5, cc.v2(0, -461)).easing(cc.easeBackOut());
          lastui.runAction(cc.repeat(cc.sequence(movetop, movebottom), 2));
        }).delay(2).to(.5, {
          position: cc.v2(0, -1e3)
        }).call(function() {
          lastui.active = false;
          cc.vv.gameData.GetSlotsScript().showMask(false);
        }).start();
      },
      showFreeOverCollectUI: function showFreeOverCollectUI() {
        var _this10 = this;
        Global.playHSEffect("fg_end");
        cc.vv.gameData.GetSlotsScript().showMask(true);
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        var self = this;
        this.scheduleOnce(function() {
          var atlas = cc.vv.gameData.GetAtlasByName("dialog");
          var winbgname = _this10.getWinnerBgSpNameByType(_this10._freeGameType);
          var winspname = _this10.getWinnerSpNameByType(_this10._freeGameType);
          var endui = cc.find("gameEndUI", _this10._freeGameUI);
          var btnnode = cc.find("btn_collect", endui);
          var winner = cc.find("gameEndUI/winner", _this10._freeGameUI);
          var coinnode = cc.find("gameEndUI/collectnum", _this10._freeGameUI);
          endui.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(winbgname);
          winner.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(winspname);
          var wincoin = cc.vv.gameData.GetFreeWinCoin();
          Global.doRoallNumEff(coinnode, 0, wincoin, 1.5, null, null, 0, true);
          btnnode.scale = 0;
          endui.active = true;
          Global.playHSEffect("popup_out");
          cc.tween(endui).to(.3, {
            position: cc.v2(0, -422)
          }, {
            easing: "backOut"
          }).call(function() {
            cc.tween(btnnode).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).call(function() {
              cc.vv.gameData.checkAutoPlay(btnnode, _this10.onCollectEvent.bind(self));
            }).start();
          }).start();
        }, .3);
      },
      onCollectEvent: function onCollectEvent() {
        var _this11 = this;
        Global.playHSEffect("btn_click");
        var collectnode = cc.find("gameEndUI/btn_collect", this._freeGameUI);
        collectnode.stopAllActions();
        var endui = cc.find("gameEndUI", this._freeGameUI);
        cc.tween(endui).to(.5, {
          position: cc.v2(0, -1e3)
        }).call(function() {
          cc.vv.gameData.GetSlotsScript().showMask(false);
          cc.vv.gameData.GetGameLogic().changeGameBg(5);
          _this11.playFreeSpine(function() {
            _this11.exitFreeGame();
            cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
            cc.vv.gameData.GetTopScript().SetBackLobby(true);
            endui.active = false;
          });
        }).start();
      },
      playLineOver: function playLineOver() {
        var isfree = cc.vv.gameData.isFreeToPlay();
        if (isfree) {
          var restFree = cc.vv.gameData.GetFreeTime();
          if (0 == restFree) {
            cc.vv.gameData.setWaitOperate(true);
            this.showFreeOverCollectUI();
          } else 1 == restFree && this.showLastSpinUI();
          this.setItemGray(this._totalFreeTimes - restFree, true);
        }
      },
      setItemGray: function setItemGray(index, isgray) {
        var path = cc.js.formatStr("gameUI_%s/bottomnode/item%s", this._freeGameType, index);
        var item = cc.find(path, this._freeGameUI);
        var children = item.children;
        for (var i = 0, count = children.length; i < count; i++) children[i].color = isgray ? cc.color(90, 90, 90) : cc.color(255, 255, 255);
        item.color = isgray ? cc.color(90, 90, 90) : cc.color(255, 255, 255);
        this.hideFrameSpine();
      },
      setFrameSpineShow: function setFrameSpineShow(index) {
        Global.playHSEffect("kuang");
        var path = cc.js.formatStr("gameUI_%s/bottomnode/framespine", this._freeGameType);
        var frame = cc.find(path, this._freeGameUI);
        if (frame) {
          frame.active = true;
          var itempath = cc.js.formatStr("gameUI_%s/bottomnode/item%s", this._freeGameType, index);
          var item = cc.find(itempath, this._freeGameUI);
          frame.position = item.position;
        }
      },
      hideFrameSpine: function hideFrameSpine() {
        var path = cc.js.formatStr("gameUI_%s/bottomnode/framespine", this._freeGameType);
        var frame = cc.find(path, this._freeGameUI);
        frame && (frame.active = false);
      },
      enterFreeGameBytype: function enterFreeGameBytype(type) {
        cc.find("gameUI_" + type, this._freeGameUI).active = true;
        cc.find("bg_collectcoin", this._freeGameUI).active = true;
        cc.find("safe_node/LMSlots_PrizePool", this.node).active = false;
        cc.find("safe_node/spine_character", this.node).active = false;
        cc.find("safe_node/node_energy", this.node).active = false;
        this.updateEnergy();
        cc.vv.gameData.GetGameLogic().changeGameBg(type - 1);
      },
      updateEnergy: function updateEnergy() {
        var pyramnum = cc.vv.gameData.getPyramidNum();
        pyramnum && Global.doRoallNumEff(this._pyramidNumNode, pyramnum, pyramnum, 0, null, null, 0, true);
      },
      rewardDropdown: function rewardDropdown() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, restFree;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (cc.vv.gameData.isFreeToPlay()) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              nWin = cc.vv.gameData.GetGameWin();
              if (!(0 == nWin)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");

             case 5:
              restFree = cc.vv.gameData.GetFreeTime();
              AppLog.log("####RestFree:" + restFree);
              if (!(4 == _this12._freeGameType)) {
                _context4.next = 12;
                break;
              }
              _context4.next = 10;
              return _this12.wildFlyToReels(_this12._totalFreeTimes - restFree);

             case 10:
              _context4.next = 19;
              break;

             case 12:
              if (!(2 == _this12._freeGameType)) {
                _context4.next = 17;
                break;
              }
              _context4.next = 15;
              return _this12.iconFlyToLionSymbol(_this12._totalFreeTimes - restFree);

             case 15:
              _context4.next = 19;
              break;

             case 17:
              _context4.next = 19;
              return _this12.iconFlyToBottom(_this12._totalFreeTimes - restFree);

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      wildFlyToReels: function wildFlyToReels(index) {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var basefree, arr, promiseArr, path, wild, topaninode;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              basefree = cc.vv.gameData.GetBaseFree();
              arr = basefree.free7Wilds.idxs;
              if (!(0 == arr.length)) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return");

             case 4:
              promiseArr = [];
              path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/bg_icon", _this13._freeGameType, index);
              wild = cc.find(path, _this13._freeGameUI);
              topaninode = cc.find("safe_node/slots/top_wild", _this13.node);
              arr.forEach(function(val) {
                var flyNode = cc.instantiate(wild);
                var parentNode = cc.find("Canvas/safe_node");
                flyNode.parent = parentNode;
                var beiginPos = parentNode.convertToNodeSpaceAR(wild.convertToWorldSpaceAR(cc.v2(0, -16)));
                flyNode.position = beiginPos;
                var col = (val - 1) % 5;
                var row = 4 - Math.floor((val - 1) / 5) - 1;
                var tarPos = _this13.getWildPos(col, row);
                var aimpos = parentNode.convertToNodeSpaceAR(topaninode.convertToWorldSpaceAR(tarPos));
                var self = _this13;
                Global.playHSEffect("wild_out");
                promiseArr.push(new Promise(function(success) {
                  cc.tween(flyNode).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(aimpos.x, beiginPos.y), cc.v2(aimpos.x, aimpos.y), {
                    scale: 2
                  }).call(function() {
                    self.playWildSpine(tarPos);
                    flyNode.destroy();
                    success();
                  }).start();
                }));
              });
              _context5.next = 11;
              return Promise.all(promiseArr);

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      playWildSpine: function playWildSpine(tarpos) {
        var wildspine = cc.find("safe_node/slots/top_wild/wildspine", this.node);
        var wildnode = cc.instantiate(wildspine);
        wildnode.active = true;
        wildnode.parent = wildspine.parent;
        wildnode.position = tarpos;
        cc.vv.gameData.playSpine(wildnode, "animation", false, function() {
          wildnode.destroy();
        });
      },
      getWildPos: function getWildPos(col, row) {
        return cc.v2(61 + 123 * col, 40.5 + 81 * row);
      },
      iconFlyToLionSymbol: function iconFlyToLionSymbol(index) {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var lionNodeArr, path, item, _loop, key;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              lionNodeArr = cc.vv.gameData.GetSlotsScript().getLionNodeArr();
              if (!(0 == lionNodeArr.length)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this14._freeGameType, index);
              item = cc.find(path, _this14._freeGameUI);
              if (item) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return");

             case 7:
              console.log("lionNodeArr", lionNodeArr);
              _loop = function _loop(key) {
                var lionSrc = lionNodeArr[key];
                var lionNode = lionSrc.node;
                var multparticle = cc.find("multparticle", _this14._freeGameUI);
                var flyNode = cc.instantiate(item);
                var particlenode = cc.instantiate(multparticle);
                var parentNode = cc.find("Canvas/safe_node");
                flyNode.parent = parentNode;
                var beiginPos = parentNode.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
                flyNode.position = beiginPos;
                particlenode.parent = parentNode;
                particlenode.active = true;
                particlenode.position = beiginPos;
                var tarPos = parentNode.convertToNodeSpaceAR(lionNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                Global.playHSEffect("mul_fly");
                cc.tween(particlenode).delay(1 * key).to(.5, {
                  position: tarPos
                }).call(function() {
                  lionSrc.playLionAni(_this14._subGameData.boxs[index - 1]);
                  particlenode.destroy();
                }).start();
                cc.tween(flyNode).delay(1 * key).to(.5, {
                  position: tarPos
                }).call(function() {
                  flyNode.destroy();
                }).start();
              };
              for (key in lionNodeArr) _loop(key);
              _context6.next = 12;
              return _this14.awaitTime(1 * lionNodeArr.length);

             case 12:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      iconFlyToBottom: function iconFlyToBottom(index) {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var path, item, multparticle, flyNode, particlenode, parentNode, beiginPos, winbgnode, tarPos;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!(index < 4)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              path = cc.js.formatStr("gameUI_%s/bottomnode/item%s/mult", _this15._freeGameType, index);
              item = cc.find(path, _this15._freeGameUI);
              if (item) {
                _context7.next = 6;
                break;
              }
              return _context7.abrupt("return");

             case 6:
              multparticle = cc.find("multparticle", _this15._freeGameUI);
              flyNode = cc.instantiate(item);
              particlenode = cc.instantiate(multparticle);
              parentNode = cc.find("Canvas/safe_node");
              flyNode.parent = parentNode;
              beiginPos = parentNode.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
              flyNode.position = beiginPos;
              particlenode.parent = parentNode;
              particlenode.active = true;
              particlenode.position = beiginPos;
              winbgnode = cc.find("safe_node/LMSlots_Bottom/winBg", _this15.node);
              tarPos = parentNode.convertToNodeSpaceAR(winbgnode.convertToWorldSpaceAR(cc.v2(0, 0)));
              Global.playHSEffect("mul_fly");
              return _context7.abrupt("return", new Promise(function(success) {
                cc.tween(particlenode).to(.5, {
                  position: tarPos
                }).call(function() {
                  particlenode.destroy();
                }).start();
                cc.tween(flyNode).to(.5, {
                  position: tarPos
                }).call(function() {
                  flyNode.destroy();
                  success();
                }).start();
              }));

             case 20:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      exitFreeGame: function exitFreeGame() {
        var _this16 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var i, nWin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              for (i = 1; i < 5; i++) cc.find("gameUI_" + i, _this16._freeGameUI).active = false;
              cc.find("bg_collectcoin", _this16._freeGameUI).active = false;
              cc.find("safe_node/LMSlots_PrizePool", _this16.node).active = true;
              cc.find("safe_node/spine_character", _this16.node).active = true;
              cc.find("safe_node/node_energy", _this16.node).active = true;
              _this16._freeGameType = 0;
              cc.vv.gameData.setWaitOperate(false);
              cc.vv.gameData.GetSlotsScript().resumeSymbolState();
              cc.vv.gameData.GetSlotsScript().playScatterAnimation(true);
              _context8.next = 11;
              return cc.vv.gameData.awaitTime(1);

             case 11:
              nWin = cc.vv.gameData.GetGameTotalFreeWin();
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nWin, true, function() {
                cc.vv.gameData.GetBottomScript().CanDoNextRound();
              });

             case 13:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      hideJackpotSpine: function hideJackpotSpine() {
        var jackpotnode = cc.find("Canvas/safe_node/LMSlots_PrizePool");
        cc.find("prizePool_Mini/rewardspine", jackpotnode).active = false;
        cc.find("prizePool_Minor/rewardspine", jackpotnode).active = false;
        cc.find("prizePool_Major/rewardspine", jackpotnode).active = false;
        cc.find("prizePool_Mega/rewardspine", jackpotnode).active = false;
        cc.find("prizePool_Grand/rewardspine", jackpotnode).active = false;
      },
      showRewardCollectUI: function showRewardCollectUI(subdata) {
        Global.playHSEffect("dialog_jackpot_collect");
        this.updateCollectUI(subdata.result.type);
        cc.find("rewardCollectUI", this._freeGameUI).active = true;
        var headsp = cc.find("rewardCollectUI/head/sp", this._freeGameUI);
        var haeadspname = this.getRewardHeadSpName(subdata.result.type);
        cc.vv.gameData.playSpine(headsp, haeadspname, true);
        this._rewardCoin = subdata.coin;
        var collectnode = cc.find("rewardCollectUI/collectnum", this._freeGameUI);
        Global.doRoallNumEff(collectnode, 0, subdata.coin, 1.5, null, null, 0, true);
        var collectreward = cc.find("rewardCollectUI/btn_collect", this._freeGameUI);
        cc.vv.gameData.checkAutoPlay(collectreward, this.onRewardCollectEvent.bind(this));
      },
      onRewardCollectEvent: function onRewardCollectEvent() {
        var _this17 = this;
        Global.playHSEffect("btn_click");
        cc.find("rewardCollectUI/btn_collect", this._freeGameUI).stopAllActions();
        cc.find("rewardCollectUI", this._freeGameUI).active = false;
        this.hideJackpotSpine();
        this.playBonusGameSpine(function() {});
        this.scheduleOnce(function() {
          _this17.resetJackpot();
          _this17._rewardGameRollUI.active = false;
          cc.vv.gameData.clearSelectState();
          cc.vv.gameData.AddCoin(_this17._rewardCoin);
          cc.vv.gameData.GetSlotsScript().rewardGamePlayBottomWin(_this17._rewardCoin, function() {
            cc.vv.gameData.GetTopScript().SetBackLobby(true);
            cc.vv.gameData.GetBottomScript().CanDoNextRound();
          });
        }, 1.5);
      },
      updateCollectUI: function updateCollectUI(type) {
        var atlas = cc.vv.gameData.GetAtlasByName("dialog");
        var bgspname = this.getRewardUIBgSpName(type);
        var headspname = this.getRewardUIHeadSpName(type);
        var framespname = this.getRewardUIFrameSpName(type);
        var bg1 = cc.find("rewardCollectUI/bg_left", this._freeGameUI);
        var bg2 = cc.find("rewardCollectUI/bg_left/bg_right", this._freeGameUI);
        var frame1 = cc.find("rewardCollectUI/textbg", this._freeGameUI);
        var frame2 = cc.find("rewardCollectUI/textbg/textbg2", this._freeGameUI);
        var head = cc.find("rewardCollectUI/head", this._freeGameUI);
        bg1.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(bgspname);
        bg2.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(bgspname);
        frame1.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(framespname);
        frame2.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(framespname);
        head.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(headspname);
      },
      getRewardHeadSpName: function getRewardHeadSpName(type) {
        switch (type) {
         case 1:
          return "animation5";

         case 2:
          return "animation4";

         case 3:
          return "animation3";

         case 4:
          return "animation2";

         case 5:
          return "animation1";
        }
      },
      getRewardUIHeadSpName: function getRewardUIHeadSpName(type) {
        switch (type) {
         case 1:
          return "theme186_d_text_jp5";

         case 2:
          return "theme186_d_text_jp4";

         case 3:
          return "theme186_d_text_jp3";

         case 4:
          return "theme186_d_text_jp2";

         case 5:
          return "theme186_d_text_jp1";
        }
      },
      getRewardUIBgSpName: function getRewardUIBgSpName(type) {
        switch (type) {
         case 1:
          return "theme186_d_bg1_5";

         case 2:
          return "theme186_d_bg1_4";

         case 3:
          return "theme186_d_bg1_3";

         case 4:
          return "theme186_d_bg1_2";

         case 5:
          return "theme186_d_bg1_1";
        }
      },
      getRewardUIFrameSpName: function getRewardUIFrameSpName(type) {
        switch (type) {
         case 1:
          return "theme186_d_bg3_5";

         case 2:
          return "theme186_d_bg3_4";

         case 3:
          return "theme186_d_bg3_3";

         case 4:
          return "theme186_d_bg3_2";

         case 5:
          return "theme186_d_bg3_1";
        }
      },
      getWinnerBgSpNameByType: function getWinnerBgSpNameByType(type) {
        switch (type) {
         case 1:
          return "theme186_d_bg2_3";

         case 2:
          return "theme186_d_bg2_4";

         case 3:
          return "theme186_d_bg2_1";

         case 4:
          return "theme186_d_bg2_2";
        }
      },
      getLastSpinSpNameByType: function getLastSpinSpNameByType(type) {
        switch (type) {
         case 1:
          return "theme186_d_bg4_3";

         case 2:
          return "theme186_d_bg4_4";

         case 3:
          return "theme186_d_bg4_1";

         case 4:
          return "theme186_d_bg4_2";
        }
      },
      getWinnerSpNameByType: function getWinnerSpNameByType(type) {
        switch (type) {
         case 1:
          return "theme186_d_text_win3";

         case 2:
          return "theme186_d_text_win4";

         case 3:
          return "theme186_d_text_win1";

         case 4:
          return "theme186_d_text_win2";
        }
      },
      awaitTime: function awaitTime(time) {
        var _this18 = this;
        return new Promise(function(success) {
          _this18.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79bf7of3MhDZYp8lLBl8Uxy", "G_Cleopatra_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collectFreeState: false
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this.selectData = deskInfo.select;
        this._collectFree = deskInfo.collectFree;
        this.needBet = deskInfo.collectFree.min;
        if (deskInfo.poolGame) {
          this.wheelData = deskInfo.poolGame.wheel;
          this._poolList = deskInfo.poolGame.poolList;
        }
        this._super(deskInfo, gameId, gameJackpot);
        deskInfo.collectFree.startPrize && this.setCollectFreeGameStartPrize(deskInfo.collectFree.startPrize);
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        this._EventId.G_CLEOPATRA_UNLOCK_ENERGY = "G_CLEOPATRA_UNLOCK_ENERGY";
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.selectData = msg.select;
          this._deskInfo.select = msg.select;
          this.wheelData = msg.wheel;
          this._collectFree = msg.collectFree;
          this._poolList = msg.poolList;
          this._super(msg);
          msg.collectFree && msg.collectFree.startPrize && this.setCollectFreeGameStartPrize(msg.collectFree.startPrize);
        }
      },
      GetGameWin: function GetGameWin() {
        if (this._gameInfo) return this._gameInfo.wincoin;
        return 0;
      },
      getPoolList: function getPoolList() {
        return this._poolList;
      },
      getSelectData: function getSelectData() {
        return this.selectData;
      },
      SetGameScript: function SetGameScript(fgame) {
        this._freeGame = fgame;
      },
      GetFreeGameScript: function GetFreeGameScript() {
        return this._freeGame;
      },
      SetGameLogicScript: function SetGameLogicScript(logic) {
        this._gameLogic = logic;
      },
      GetGameLogic: function GetGameLogic() {
        return this._gameLogic;
      },
      GetFreeWinCoin: function GetFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      GetBaseFree: function GetBaseFree() {
        return this._gameInfo.baseFree;
      },
      getWheel: function getWheel() {
        return this.wheelData;
      },
      isFreeGamesTime: function isFreeGamesTime() {
        return this._deskInfo.allFreeCount > 0;
      },
      isRewardGame: function isRewardGame() {
        if (this.selectData && 4 == this.selectData.rtype) return 4;
        return 0;
      },
      clearSelectState: function clearSelectState() {
        this.selectData && this.selectData.state && (this.selectData.state = false);
      },
      isOperateGame: function isOperateGame() {
        if (this.selectData && this.selectData.state) return this.selectData.rtype;
        return 0;
      },
      isOpenCollectProgress: function isOpenCollectProgress() {
        return this.GetBetIdx() >= this.needBet;
      },
      getMinBet: function getMinBet() {
        return this.needBet;
      },
      getPyramidNum: function getPyramidNum() {
        if (this._gameInfo && this._gameInfo.pyramid) return this._gameInfo.pyramid.after;
        if (this._collectFree) return this._collectFree.pyramid;
        return 0;
      },
      getPyramidData: function getPyramidData() {
        if (this._gameInfo && this._gameInfo.pyramid) return this._gameInfo.pyramid;
      },
      getCollectFree: function getCollectFree() {
        return this._collectFree;
      },
      isTriggerNormalFree: function isTriggerNormalFree() {
        var enterfree = this._gameInfo.freeResult.freeInfo.idxs && this._gameInfo.freeResult.freeInfo.idxs.length > 0;
        if (enterfree && this.selectData.state) return this.selectData.rtype;
        return 0;
      },
      isTriggerFree: function isTriggerFree() {
        return this._gameInfo.freeResult.freeInfo.idxs && this._gameInfo.freeResult.freeInfo.idxs.length > 0;
      },
      isFreeToPlay: function isFreeToPlay() {
        return this._gameInfo.baseFree && this._gameInfo.baseFree.type;
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
      isWaitOperate: function isWaitOperate() {
        return this._isWait;
      },
      setWaitOperate: function setWaitOperate(iswait) {
        this._isWait = iswait;
      },
      removeValue: function removeValue(arr, val) {
        var index = this.indexOf(arr, val);
        index > -1 && arr.splice(index, 1);
      },
      clearLastWinCoin: function clearLastWinCoin() {
        this._gameInfo && (this._gameInfo.wincoin = 0);
        this._bottomScp.SetWin(0);
      },
      isReelMove: function isReelMove() {
        return this._isReelMove || this._autoTime > 0;
      },
      setReelMove: function setReelMove(ismove) {
        this._isReelMove = ismove;
      },
      indexOf: function indexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) if (arr[i] == val) return i;
        return -1;
      },
      setCollectFreeGameStartPrize: function setCollectFreeGameStartPrize(num) {
        this._startPrize = num;
      },
      getCollectFreeGameStartPrize: function getCollectFreeGameStartPrize() {
        return this._startPrize;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  G_Cleopatra_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f2f1gMQH1Ft6yDrdPgLAho", "G_Cleopatra_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        bg: cc.Sprite,
        gameBg: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        Global.playHSMusic = function(fn, loop) {
          cc.vv.AudioManager.playBgm("games/G_Cleopatra/", fn, true, loop);
        };
        Global.playHSEffect = function(fn, loop, callback, volume) {
          cc.vv.AudioManager.playEff("games/G_Cleopatra/", fn, true, loop, callback, volume);
        };
        Global.stopHSEffect = function(fn) {
          cc.vv.AudioManager.stopEffectByName(fn);
        };
        var script_freegame = this.node.addComponent("G_Cleopatra_FreeGame");
        cc.vv.gameData.SetGameScript(script_freegame);
        this.node.addComponent("G_Cleopatra_CollectFree");
        cc.vv.gameData.SetGameLogicScript(this);
        this._super();
      },
      changeGameBg: function changeGameBg(index) {
        this.bg.spriteFrame = this.gameBg[index];
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  G_Cleopatra_Roll: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7607KwqzVMZ4uu5t+lJgHj", "G_Cleopatra_Roll");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        items: [ cc.Node ],
        _moveSpeed: 36,
        _choicItem: null
      },
      onLoad: function onLoad() {
        this._initPosX = this.items[this.items.length - 1].position.x + 196;
        this._parentWidth = cc.find("rollView/view/content", this.node).width;
      },
      startMove: function startMove(gamedata) {
        var _this = this;
        var spineani = cc.find("choiceFrame/framespine", this.node);
        cc.vv.gameData.playSpine(spineani, "animation", false, function() {
          spineani.active = false;
          _this.resetData();
          _this.initUpdateCoin();
          _this._subGameData = gamedata;
          _this._subGameData.rtype && 4 == _this._subGameData.rtype ? _this._stopItemName = "img" + gamedata.idx : _this._stopItemName = "img" + gamedata.type;
          Global.playHSEffect("wheel_spin");
        });
      },
      resetData: function resetData() {
        this._stopItemName = void 0;
        this._moveSpeed = 28;
        this._curMoveTimes = 0;
        this._moveTimes = 4;
        this._startStop = false;
      },
      moveEnd: function moveEnd() {
        var _this2 = this;
        AppLog.log("###\u505c\u6b62\u79fb\u52a8");
        this.resetData();
        var spineani = cc.find("choiceFrame/framespine", this.node);
        cc.vv.gameData.playSpine(spineani, "animation", false, function() {
          spineani.active = false;
          cc.vv.gameData.GetFreeGameScript().rollEndHandle(_this2._subGameData);
        });
        Global.playHSEffect("wheel_win");
        this.playJackpot();
      },
      initUpdateCoin: function initUpdateCoin() {
        var wheel = cc.vv.gameData.getWheel();
        var index = 0;
        for (var key in wheel) {
          if (wheel[key].coin) {
            var lblnum = cc.find("lbl_num", this.items[index]);
            lblnum && (lblnum.getComponent(cc.Label).string = Global.convertNumToShort(wheel[key].coin));
          }
          index++;
        }
      },
      playJackpot: function playJackpot() {
        if (this._subGameData.result) {
          var type = this._subGameData.result.type;
          var jacknode = void 0;
          1 == type ? jacknode = cc.find("Canvas/safe_node/LMSlots_PrizePool/prizePool_Mini/rewardspine") : 2 == type ? jacknode = cc.find("Canvas/safe_node/LMSlots_PrizePool/prizePool_Minor/rewardspine") : 3 == type ? jacknode = cc.find("Canvas/safe_node/LMSlots_PrizePool/prizePool_Major/rewardspine") : 4 == type ? jacknode = cc.find("Canvas/safe_node/LMSlots_PrizePool/prizePool_Mega/rewardspine") : 5 == type && (jacknode = cc.find("Canvas/safe_node/LMSlots_PrizePool/prizePool_Grand/rewardspine"));
          jacknode && cc.vv.gameData.playSpine(jacknode, "animation1", false, function() {
            cc.vv.gameData.playSpine(jacknode, "animation2", true);
          });
        }
      },
      update: function update(dt) {
        var _this3 = this;
        if (!this._stopItemName) return;
        this.items.forEach(function(item) {
          if (item.x > _this3._initPosX) {
            item.x = item.x - _this3._parentWidth;
            if (_this3._stopItemName == item.name) {
              _this3._curMoveTimes++;
              if (_this3._curMoveTimes > _this3._moveTimes) {
                _this3._startStop = true;
                _this3._choicItem = item;
              }
            }
          }
          item.x += _this3._moveSpeed;
        });
        this._startStop && (this._choicItem.x > -1 ? this.moveEnd() : this._moveSpeed = dt * this._parentWidth / 4);
      }
    });
    cc._RF.pop();
  }, {} ],
  G_Cleopatra_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4060+rWVZIW7JTQ/gax4db", "G_Cleopatra_Slots");
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
    function around() {
      var val = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .1;
      return 1 - val + Math.random() * val * 2;
    }
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _collectSpineNode: cc.Node
      },
      ReconnectShow: function ReconnectShow() {
        var operate = cc.vv.gameData.isOperateGame();
        if (4 == operate) cc.vv.gameData.GetFreeGameScript().reConnectEnterRewardGame(); else if (cc.vv.gameData.isFreeGamesTime() || operate > 0) {
          cc.vv.gameData.GetFreeGameScript().reConnectEnterFreeGame();
          cc.vv.gameData.isFreeGamesTime() && this.ShowGameview(true);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bHit, rtype, delaytime, collectfree, restFree;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.setReelMove(false);
              _this.showMask(false);
              bHit = _this.CheckSpecialReward();
              bHit && _this._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 6;
              return cc.vv.gameData.GetFreeGameScript().rewardDropdown();

             case 6:
              if (!cc.vv.gameData.isOpenCollectProgress()) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.CollectEnergy();

             case 9:
              _this.ShowWinTrace();
              _this.showWildWinTrace();
              cc.vv.gameData.isTriggerFree() && _this.playScatterAnimation(true);
              _context.next = 14;
              return _this.playBottomWin();

             case 14:
              rtype = cc.vv.gameData.isTriggerNormalFree() || cc.vv.gameData.isRewardGame();
              if (!(rtype > 0)) {
                _context.next = 22;
                break;
              }
              delaytime = 4 == rtype ? 1 : 3;
              _context.next = 19;
              return _this.awaitTime(delaytime);

             case 19:
              _this.backupSymbolState();
              cc.vv.gameData.GetFreeGameScript().EnterFreeGame(rtype);
              return _context.abrupt("return");

             case 22:
              Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_PLAY_LINE_FINISH);
              if (!(cc.vv.gameData.isFreeToPlay() && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 25;
                break;
              }
              return _context.abrupt("return");

             case 25:
              collectfree = cc.vv.gameData.getCollectFree();
              if (!(collectfree && collectfree.state)) {
                _context.next = 30;
                break;
              }
              restFree = cc.vv.gameData.GetFreeTime();
              if (!(0 == restFree)) {
                _context.next = 30;
                break;
              }
              return _context.abrupt("return");

             case 30:
              if (!(collectfree && (collectfree.expandingWild || collectfree.stickyWilds))) {
                _context.next = 35;
                break;
              }
              _context.next = 33;
              return _this.awaitTime(1.5);

             case 33:
              _context.next = 35;
              break;

             case 35:
              _this.CanDoNextRound();
              cc.find("Canvas/safe_node/node_energy/pyramidicon").getComponent(cc.Button).interactable = true;

             case 37:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      CollectEnergy: function CollectEnergy() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var collectfree, pyramiddata, symbolArr, key, idx, col, row, sys;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              collectfree = cc.vv.gameData.getCollectFree();
              if (!(collectfree && collectfree.state)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              pyramiddata = cc.vv.gameData.getPyramidData();
              if (!(pyramiddata && pyramiddata.info)) {
                _context2.next = 11;
                break;
              }
              symbolArr = [];
              for (key in pyramiddata.info) {
                idx = parseInt(key.replace("idx_", ""));
                col = (idx - 1) % 5;
                row = 4 - Math.floor((idx - 1) / 5) - 1;
                sys = _this2._reels[col]._symbols;
                symbolArr[idx] = {
                  symbol: sys[row],
                  val: pyramiddata.info[key]
                };
              }
              if (!(symbolArr.length > 0)) {
                _context2.next = 11;
                break;
              }
              _context2.next = 10;
              return _this2.PlaySymbolFly(symbolArr);

             case 10:
              Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      PlaySymbolFly: function PlaySymbolFly(symbolArr) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var promiseArr, parentNode, _loop, key;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              promiseArr = [];
              Global.playHSEffect("collect_fly");
              parentNode = cc.find("Canvas/safe_node");
              _loop = function _loop(key) {
                var symbol = symbolArr[key].symbol;
                var collectnode = symbol.node.getChildByName("flyparticle");
                var flyNode = cc.instantiate(collectnode);
                collectnode.active = false;
                flyNode.parent = parentNode;
                var beiginPos = parentNode.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                flyNode.position = beiginPos;
                flyNode.getComponent(cc.ParticleSystem).resetSystem();
                var targetNode = cc.vv.gameData.isFreeGamesTime() ? cc.find("Canvas/safe_node/freeGameUI/bg_collectcoin") : cc.find("Canvas/safe_node/node_energy/pyramidicon");
                var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                promiseArr.push(new Promise(function(res) {
                  cc.tween(flyNode).to(.5, {
                    position: tarPos
                  }, {
                    scale: .1
                  }).call(function() {
                    flyNode.destroy();
                    res();
                  }).start();
                }));
              };
              for (key in symbolArr) _loop(key);
              _context3.next = 7;
              return Promise.all(promiseArr);

             case 7:
              promiseArr.length > 0 && _this3.playCollectSpine();

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playCollectSpine: function playCollectSpine() {
        var _this4 = this;
        var jinzitajieshou = cc.find("Canvas/safe_node/freeGameUI/bg_collectcoin/jinzitajieshou");
        jinzitajieshou.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._collectSpineNode || (this._collectSpineNode = cc.find("Canvas/safe_node/node_energy/collectspine"));
        this._collectSpineNode.active = true;
        cc.vv.gameData.playSpine(this._collectSpineNode, "animation", false, function() {
          _this4._collectSpineNode.active = false;
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        this.showCollectFreeWild();
        cc.vv.gameData.isFreeToPlay() && cc.vv.gameData.GetFreeGameScript().startMoveFreeGame();
      },
      StartMove: function StartMove() {
        this._super();
        this.resetScatterShow();
        cc.vv.gameData.setReelMove(true);
        Global.SlotsSoundMgr.playNormalBgm();
        cc.find("Canvas/safe_node/node_energy/pyramidicon").getComponent(cc.Button).interactable = false;
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super(colIdx);
        this.collectWildEffect(colIdx);
        var pyramid = cc.vv.gameData.getPyramidData();
        pyramid && pyramid.info && this.showCollectNum(colIdx, pyramid.info);
        this.showExpandingWild(colIdx);
        this.showScatterToTop(colIdx);
      },
      showScatterToTop: function showScatterToTop(colidx) {
        var sys = this._reels[colidx]._symbols;
        for (var j = 0; j < 4; j++) sys[j].scatterSymbolStop();
      },
      collectWildEffect: function collectWildEffect(colidx) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var energynode, bgspinenode, wildani, parentNode, sys, promiseArr, flycount, tarPos, j, spnode;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              energynode = cc.find("Canvas/safe_node/node_energy");
              if (energynode.active) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");

             case 3:
              bgspinenode = cc.find("collectcoin", energynode);
              wildani = cc.find("wildani", _this5.node);
              parentNode = cc.find("Canvas/safe_node");
              sys = _this5._reels[colidx]._symbols;
              promiseArr = [];
              flycount = 6;
              tarPos = parentNode.convertToNodeSpaceAR(bgspinenode.convertToWorldSpaceAR(cc.v2(0, 0)));
              for (j = 0; j < 4; j++) 1 == sys[j].GetShowId() && function() {
                var beiginPos = parentNode.convertToNodeSpaceAR(sys[j].node.convertToWorldSpaceAR(cc.v2(0, 0)));
                var _loop2 = function _loop2(i) {
                  var flyNode = cc.instantiate(wildani);
                  flyNode.active = true;
                  flyNode.parent = parentNode;
                  flyNode.position = beiginPos;
                  promiseArr.push(new Promise(function(success) {
                    var startmoveaim = _this5.getFlyStartPos(i, cc.v2(beiginPos.x, tarPos.y));
                    cc.vv.gameData.playSpine(flyNode, "animation", false, null);
                    cc.tween(flyNode).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(startmoveaim.x, startmoveaim.y), cc.v2(tarPos.x, tarPos.y)).call(function() {
                      var starnode = cc.find("wildstar", flyNode);
                      cc.vv.gameData.playSpine(starnode, "animation", false, function() {
                        flyNode.destroy();
                      });
                      success();
                    }).start();
                  }));
                };
                for (var i = 0; i < flycount; i++) _loop2(i);
              }();
              promiseArr.length > 0 && Global.playHSEffect("wild_fly");
              _context4.next = 14;
              return Promise.all(promiseArr);

             case 14:
              if (promiseArr.length > 0) {
                spnode = cc.find("fullspine", bgspinenode);
                cc.vv.gameData.playSpine(spnode, "animation2", false, null);
              }

             case 15:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getFlyStartPos: function getFlyStartPos(i, movepos) {
        var pos;
        switch (i) {
         case 0:
          pos = cc.v2(-50, 0);
          break;

         case 1:
          pos = cc.v2(-100, 150);
          break;

         case 2:
          pos = cc.v2(-200, 50);
          break;

         case 3:
          pos = cc.v2(50, 0);
          break;

         case 4:
          pos = cc.v2(100, 150);
          break;

         case 5:
          pos = cc.v2(200, 50);
        }
        return cc.v2(movepos.x + pos.x, movepos.y + pos.y);
      },
      getFlyEndPos: function getFlyEndPos(idx, endpos) {
        return cc.v2(endpos.x + 30 * idx, endpos.y);
      },
      showCollectFreeWild: function showCollectFreeWild() {
        var collectfree = cc.vv.gameData.getCollectFree();
        if (collectfree) {
          if (collectfree.stickyWilds.pos.length > 0 && !this._stickywildspos) {
            this._stickywildspos = collectfree.stickyWilds.pos;
            this.showStickyWilds(collectfree.stickyWilds);
          }
          if (collectfree.randomWilds.pos.length > 0) {
            this.showMask(true);
            this.showRandomWilds(collectfree.randomWilds, collectfree.multiplerWilds);
          }
        }
      },
      showMask: function showMask(isshow) {
        cc.find("top_wild/mask", this.node).active = isshow;
      },
      showStickyWilds: function showStickyWilds(wilds) {
        var _this6 = this;
        wilds.pos.forEach(function(element) {
          Global.playHSEffect("wild_out2");
          _this6.ShowWildSymbolTopAni(element);
        });
      },
      showRandomWilds: function showRandomWilds(wilds, mult) {
        var _this7 = this;
        wilds.pos.forEach(function(element) {
          Global.playHSEffect("wild_out2");
          _this7.showRandomWildToTopAni(element, mult);
        });
      },
      showExpandingWild: function showExpandingWild(colidx) {
        var _this8 = this;
        var collectfree = cc.vv.gameData.getCollectFree();
        collectfree && collectfree.expandingWild && collectfree.expandingWild.forEach(function(pos) {
          if (pos - 1 == colidx) {
            Global.playHSEffect("wild_expand");
            var sys = _this8._reels[colidx]._symbols;
            for (var j = 0; j < 4; j++) if (1 == sys[j].GetShowId()) {
              _this8.createExpandingWilds(colidx, j);
              return;
            }
          }
        });
      },
      createExpandingWilds: function createExpandingWilds(col, initrow) {
        var _this9 = this;
        var parNode = cc.find("top_wild", this.node);
        if (parNode) for (var row = 0; row < 4; row++) {
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", row, col), parNode);
          if (!showNode) {
            var wildsymbol = cc.find("collectfreewild", parNode);
            showNode = cc.instantiate(wildsymbol);
            showNode.parent = parNode;
            showNode.name = cc.js.formatStr("top_symbol_%s_%s", row, col);
          }
          if (!showNode.active) {
            showNode.active = true;
            showNode.position = this.getWildPos(col, initrow);
            var aimpos = this.getWildPos(col, row);
            cc.tween(showNode).to(.5, {
              position: aimpos
            }).call(function() {
              _this9._reels[col].node.active = false;
            }).start();
          }
        }
      },
      showRandomWildToTopAni: function showRandomWildToTopAni(idx, mult) {
        var col = (idx - 1) % 5;
        var row = 4 - Math.floor((idx - 1) / 5) - 1;
        var parNode = cc.find("top_wild", this.node);
        if (parNode) {
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", row, col), parNode);
          if (!showNode) {
            var multname = mult ? "multwild" : "collectfreewild";
            var wildsymbol = cc.find(multname, parNode);
            showNode = cc.instantiate(wildsymbol);
            showNode.parent = parNode;
            showNode.name = cc.js.formatStr("top_symbol_%s_%s", row, col);
            showNode.position = this.getWildPos(col, row);
          }
          showNode.active = true;
          mult ? cc.vv.gameData.playSpine(showNode, cc.js.formatStr("animation%s_2", mult), false, function() {
            cc.vv.gameData.playSpine(showNode, cc.js.formatStr("animation%s_3", mult), true, null);
          }) : cc.vv.gameData.playSpine(showNode, "animation1", false, function() {
            cc.vv.gameData.playSpine(showNode, "animation3", true, null);
          });
        }
      },
      ShowWildSymbolTopAni: function ShowWildSymbolTopAni(idx) {
        var col = (idx - 1) % 5;
        var row = 4 - Math.floor((idx - 1) / 5) - 1;
        var parNode = cc.find("top_wild", this.node);
        if (parNode) {
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", row, col), parNode);
          if (!showNode) {
            var wildsymbol = cc.find("collectfreewild", parNode);
            showNode = cc.instantiate(wildsymbol);
            showNode.parent = parNode;
            showNode.name = cc.js.formatStr("top_symbol_%s_%s", row, col);
            showNode.position = this.getWildPos(col, row);
          }
          showNode.active = true;
          showNode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        }
      },
      showWildWinTrace: function showWildWinTrace() {
        var parNode = cc.find("top_wild", this.node);
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < 4; idx++) {
            var itemidx = item.indexs[idx];
            var col = (itemidx - 1) % 5;
            var row = 4 - Math.floor((itemidx - 1) / 5) - 1;
            var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", row, col), parNode);
            if (showNode && showNode.active) {
              var mult = this._gameInfo.collectFree.multiplerWilds;
              mult ? showNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + mult, true) : showNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
            }
          }
        }
      },
      hideCollectNum: function hideCollectNum() {
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].hideCollectNum();
        }
      },
      showCollectNum: function showCollectNum(colidx, info) {
        for (var key in info) {
          var idx = parseInt(key.replace("idx_", ""));
          var col = (idx - 1) % 5;
          var row = 4 - Math.floor((idx - 1) / 5) - 1;
          if (col == colidx) {
            var sys = this._reels[col]._symbols;
            sys[row].showCollectNum(info[key]);
          }
        }
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        Global.playHSEffect("bell");
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].playScatterAnimation(isplay);
        }
      },
      resetScatterShow: function resetScatterShow() {
        for (var i = 0; i < 5; i++) {
          this._reels[i].node.active = true;
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].resetScatterShow();
        }
        this.resetWildShow();
      },
      resetWildShow: function resetWildShow() {
        var _this10 = this;
        var parNode = cc.find("top_wild", this.node);
        for (var i = 0; i < 5; i++) for (var j = 0; j < 5; j++) {
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", j, i), parNode);
          showNode && showNode.active && (this._stickywildspos && this._stickywildspos.length > 0 ? function() {
            var needreset = true;
            var idx = _this10.getRowColToIdx(20, j, i);
            _this10._stickywildspos.forEach(function(element) {
              element == idx && (needreset = false);
            });
            needreset ? showNode.active = false : cc.vv.gameData.playSpine(showNode, "animation3", false, null);
          }() : showNode.active = false);
        }
      },
      clearWildShow: function clearWildShow() {
        var parNode = cc.find("top_wild", this.node);
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          this._reels[i].node.active = true;
          for (var j = 0; j < 5; j++) {
            var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", j, i), parNode);
            showNode && showNode.destroy();
            sys[j].showNode();
          }
        }
      },
      playBottomWin: function playBottomWin() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = false;
                }
                _this11.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      rewardGamePlayBottomWin: function rewardGamePlayBottomWin(wincoin, callback) {
        var nWin = cc.vv.gameData.GetGameWin();
        var nTotal = nWin + wincoin;
        this.ShowBottomWin(nTotal, nTotal, true, function() {
          callback();
        });
      },
      getWildPos: function getWildPos(col, row) {
        return cc.v2(61 + 123 * col, 40.5 + 81 * row);
      },
      clearData: function clearData() {
        this._stickywildspos = null;
      },
      getRowColToIdx: function getRowColToIdx(cardslen, nRow, nCol) {
        var acRow = cardslen / this._col;
        var idx = this._col * (acRow - nRow - 1) + nCol;
        return idx + 1;
      },
      freeReUpdateSymbol: function freeReUpdateSymbol() {
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].ShowRandomSymbol();
        }
      },
      backupSymbolState: function backupSymbolState() {
        for (var i = 0; i < 5; i++) this._reels[i].Backup();
      },
      resumeSymbolState: function resumeSymbolState() {
        for (var i = 0; i < 5; i++) this._reels[i].Resume();
      },
      getLionNodeArr: function getLionNodeArr() {
        var lionNodeArr = [];
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) {
            var symbol = sys[j];
            14 == symbol._id && lionNodeArr.push(symbol);
          }
        }
        return lionNodeArr;
      },
      awaitTime: function awaitTime(time) {
        var _this12 = this;
        return new Promise(function(success) {
          _this12.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  G_Cleopatra_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c5c3i7BHpBp5St3c0YFbDI", "G_Cleopatra_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      ShowById: function ShowById(id, data) {
        var collectfree = cc.vv.gameData.getCollectFree();
        collectfree && collectfree.multiplerWilds && 1 == id && (id = 100 + collectfree.multiplerWilds);
        this._super(id, data);
        id > 100 && this.setSymbolMulti(collectfree.multiplerWilds);
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (2 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        if (isplay) {
          wnode.active = true;
          wnode.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        } else wnode.active = false;
      },
      scatterSymbolStop: function scatterSymbolStop() {
        2 == this._id && (this.node.zIndex = 100);
      },
      resetScatterShow: function resetScatterShow() {
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        wnode && (wnode.active = false);
        this.hideCollectNum();
        this.hideSymbolMulti();
      },
      showCollectNum: function showCollectNum(num) {
        var numnode = cc.find("flyparticle", this.node);
        cc.vv.gameData.playSpine(numnode, "animation" + num, false);
      },
      hideCollectNum: function hideCollectNum() {
        var numnode = cc.find("flyparticle", this.node);
        numnode.active = false;
      },
      setSymbolMulti: function setSymbolMulti(multi) {
        var multinode = cc.find("multi", this.node);
        multinode.active = true;
        var atlas = cc.vv.gameData.GetAtlasByName("symbol");
        multinode.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme186_s_X" + multi);
      },
      hideSymbolMulti: function hideSymbolMulti() {
        var multinode = cc.find("multi", this.node);
        multinode.active && (multinode.active = false);
      },
      playLionAni: function playLionAni(num) {
        var _this = this;
        if (14 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find(cfg.symbol[this._id].win_node, this.node);
        this._showNode.active = true;
        this._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
        cc.tween(this.node).call(function() {
          var lab = cc.find("lab", _this._showNode);
          lab.active = true;
          lab.getComponent(cc.Label).string = Global.formatNumShort(num);
        }).start();
      },
      showNode: function showNode() {
        if (this._showNode) this._showNode.active = true; else {
          var cfg = cc.vv.gameData.getGameCfg();
          var topShowNode = cc.find(cfg.symbol[this._id].node, this.node);
          topShowNode.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "G_Cleopatra_Asset", "G_Cleopatra_Bottom", "G_Cleopatra_ButtonSafe", "G_Cleopatra_Cfg", "G_Cleopatra_ChoicMultiplier", "G_Cleopatra_CollectFree", "G_Cleopatra_CollectUI", "G_Cleopatra_Energy", "G_Cleopatra_FreeGame", "G_Cleopatra_GameData", "G_Cleopatra_Logic", "G_Cleopatra_Roll", "G_Cleopatra_Slots", "G_Cleopatra_Symbol" ]);