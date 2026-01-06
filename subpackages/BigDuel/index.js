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
  BigDuel_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e15b0TSCplFMY+BEXr1fjBq", "BigDuel_ButtonSafe");
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
          cc.vv.gameData.GetSlotsScript().scheduleOnce(function() {
            buttton.interactable = true;
          }, this.safeTime);
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  BigDuel_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b15f4r5/f1IvacNhYDEJ62y", "BigDuel_Cfg");
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
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        win_ani: {
          name: "animation",
          zIndex: 296
        }
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w302",
        win_ani: {
          name: "animation",
          zIndex: 297
        }
      }), _defineProperty(_symbol, 303, {
        node: "s303",
        win_node: "w303",
        win_ani: {
          name: "animation",
          zIndex: 298
        }
      }), _defineProperty(_symbol, 304, {
        node: "s304",
        win_node: "w304",
        win_ani: {
          name: "animation",
          zIndex: 299
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
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation4_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation4_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "w13",
        win_ani: {
          name: "animation3_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 15, {
        node: "s15",
        win_node: "w13",
        win_ani: {
          name: "animation5_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation5_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 16, {
        node: "s16",
        win_node: "w13",
        win_ani: {
          name: "animation2_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 17, {
        node: "s17",
        win_node: "w13",
        win_ani: {
          name: "animation1_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation1_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 18, {
        node: "s18",
        win_node: "w13",
        win_ani: {
          name: "animation6_3",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation6_2",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "BigDuel_Slots",
        Reels: "BigDuel_Reel",
        Symbols: "BigDuel_symbol"
      },
      col: 5,
      row: 4,
      realRow: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 134,
        height: 92
      },
      helpItems: [ "games/BigDuel/prefab/LMSlots_Help_item1", "games/BigDuel/prefab/LMSlots_Help_item2", "games/BigDuel/prefab/LMSlots_Help_item3", "games/BigDuel/prefab/LMSlots_Help_item4", "games/BigDuel/prefab/LMSlots_Help_item5", "games/BigDuel/prefab/LMSlots_Help_item6", "games/BigDuel/prefab/LMSlots_Help_item7" ],
      autoModelDelay: 1,
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      commEffect: {
        path: "games/BigDuel/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        win3: [ "win3", "win3end" ],
        win4: [ "win4", "win4end" ]
      },
      normalBgm: "base_bgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "anticipation",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  BigDuel_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e244c174+BIX68Vd0ZJm5SI", "BigDuel_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _slotsNode: null,
        isBigStoreToFreeGame: false,
        isSmallStoreToFreeGame: false
      },
      SetPopNodeScript: function SetPopNodeScript(scp) {
        this._popupScp = scp;
      },
      GetPopNodeScript: function GetPopNodeScript(scp) {
        return this._popupScp;
      },
      SetSlotsNode: function SetSlotsNode(scp) {
        this._slotsNode = scp;
      },
      GetSlotsNode: function GetSlotsNode(scp) {
        return this._slotsNode;
      },
      SetWheelScript: function SetWheelScript(scp) {
        this._wheelScp = scp;
      },
      GetWheelScript: function GetWheelScript() {
        return this._wheelScp;
      },
      SetStoreScript: function SetStoreScript(scp) {
        this._storeScp = scp;
      },
      GetStoreScript: function GetStoreScript() {
        return this._storeScp;
      },
      SetBigStoreToFreeGame: function SetBigStoreToFreeGame(scp) {
        this.isBigStoreToFreeGame = scp;
      },
      GetBigStoreToFreeGame: function GetBigStoreToFreeGame() {
        return this.isBigStoreToFreeGame;
      },
      SetSmallStoreToFreeGame: function SetSmallStoreToFreeGame(scp) {
        this.isSmallStoreToFreeGame = scp;
      },
      GetSmallStoreToFreeGame: function GetSmallStoreToFreeGame() {
        return this.isSmallStoreToFreeGame;
      },
      SetJackpotUnlock: function SetJackpotUnlock(JackpotUnlock) {
        this.JackpotUnlock = JackpotUnlock;
      },
      GetJackpotUnlock: function GetJackpotUnlock() {
        return this.JackpotUnlock;
      },
      IdxToBet: function IdxToBet(idx) {
        return this._deskInfo.mults[idx];
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  BigDuel_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1d317wI/tLNZlrz8QdPD9/", "BigDuel_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var cfg = cc.vv.gameData.getGameCfg();
        cc.vv.gameData.SetSlotsNode(cc.vv.gameData.GetSlotsScript().node);
        var node_wheel = cc.find("wheel_node", safe_node);
        var script_wheel = node_wheel.getComponent("BigDuel_Wheel");
        script_wheel.Init();
        cc.vv.gameData.SetWheelScript(script_wheel);
        var node_pop = cc.find("node_pop_ui", safe_node);
        var script_pop = node_pop.getComponent("BigDuel_Pop");
        script_pop.Init();
        cc.vv.gameData.SetPopNodeScript(script_pop);
        var node_store = cc.find("node_store", safe_node);
        var script_store = node_store.getComponent("BigDuel_Store");
        script_store.Init();
        cc.vv.gameData.SetStoreScript(script_store);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  BigDuel_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b31f9eQ+thBwax0gr2sIthM", "BigDuel_Pop");
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
    var BigDuel_Tools = require("./BigDuel_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _node_free_Game: null,
        _node_free_tanchuang: null,
        _spine_freeGame: null,
        _spine_bonusGame: null,
        _spine_storeToFreeGame: null,
        _spine_storeToFreeGameEnd: null,
        _storeExtenLine: 0,
        _hasSendMsg: false
      },
      Init: function Init() {
        this._node_free_Game = cc.find("node_free_Game", this.node);
        this._node_free_Game.active = false;
        this._node_free_tanchuang = cc.find("node_free_tanchuang", this.node);
        this._node_free_tanchuang.active = false;
        this._spine_freeGame = cc.find("spine_qp_jian", this.node.parent);
        this._spine_freeGame.active = false;
        this._spine_bonusGame = cc.find("spine_qp_moon", this.node.parent);
        this._spine_bonusGame.active = false;
        this._spine_storeToFreeGame = cc.find("spine_storeToFreeGame", this.node.parent);
        this._spine_storeToFreeGame.active = false;
        this._spine_storeToFreeGameEnd = cc.find("spine_storeToFreeGameEnd", this.node.parent);
        this._spine_storeToFreeGameEnd.active = false;
        this.initFreeGame();
      },
      onEnable: function onEnable() {
        this._hasSendMsg = false;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var _this = this;
        if (200 != msg.code) return;
        var data = msg.data;
        var numArr = {
          1: 10,
          2: 8,
          3: 5,
          4: 3
        };
        var lineArr = {
          1: 4,
          2: 5,
          3: 6,
          4: 8
        };
        var index = data.choiceId;
        cc.vv.gameData.GetSlotsScript().extendLine(lineArr[index], .01);
        console.log("\u514d\u8cbb\u6e38\u6232\u96a8\u6a5f\u9078\u64c7\u884c\u6570\u6269\u5c55\u5217", index, lineArr[index]);
        BigDuel_Tools.nodeAni(this._node_free_Game, 2);
        this.scheduleOnce(function() {
          for (var i = 1; i < 6; i++) {
            var chooseBtn = cc.find("choose" + i, _this._node_free_Game);
            cc.find("black", chooseBtn).active = false;
          }
          cc.find("choose5/wenHao", _this._node_free_Game).active = true;
          cc.find("choose5/beishubianhua", _this._node_free_Game).active = false;
          _this.showFreeGameDialog(1, numArr[index]);
          if (data.freeInfo) {
            cc.vv.gameData.SetTotalFree(data.freeInfo.freeCnt);
            cc.vv.gameData.SetFreeTime(data.freeInfo.freeCnt);
          }
          cc.vv.gameData.GetSlotsScript().ShowGameview(true);
        }, .5);
      },
      updateUi: function updateUi() {
        this._node_free_Game.active = false;
        this._node_free_tanchuang.active = false;
        this._spine_freeGame.active = false;
        this._spine_bonusGame.active = false;
      },
      initFreeGame: function initFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var index, element, sureBtn, collectBtn, startBtn, bigCollectBtn;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              for (index = 1; index < 6; index++) {
                element = _this2._node_free_Game.getChildByName("choose" + index);
                element.target = index;
                Global.btnClickEvent(element, function() {
                  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(buttton) {
                    var index, numArr, i, chooseBtn, req;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        index = buttton.node.target;
                        numArr = {
                          1: 10,
                          2: 8,
                          3: 5,
                          4: 3
                        };
                        if (!this._hasSendMsg) {
                          _context.next = 4;
                          break;
                        }
                        return _context.abrupt("return");

                       case 4:
                        this._node_free_Game.stopAllActions();
                        this._hasSendMsg = true;
                        i = 1;

                       case 7:
                        if (!(i < 6)) {
                          _context.next = 17;
                          break;
                        }
                        if (!(i === index)) {
                          _context.next = 10;
                          break;
                        }
                        return _context.abrupt("continue", 14);

                       case 10:
                        chooseBtn = cc.find("choose" + i, this._node_free_Game);
                        chooseBtn.stopAllActions();
                        chooseBtn.getChildByName("biankuangliuguang").active = false;
                        cc.find("black", chooseBtn).active = true;

                       case 14:
                        i++;
                        _context.next = 7;
                        break;

                       case 17:
                        Global.SlotsSoundMgr.playEffect("choose");
                        BigDuel_Tools.playSpineAni(buttton.node.getChildByName("xuanzhong"), "animation1", true);
                        if (!(5 === index)) {
                          _context.next = 31;
                          break;
                        }
                        index = Math.round(3 * Math.random() + 1);
                        buttton.node.getChildByName("wenHao").active = false;
                        buttton.node.getChildByName("beishubianhua").active = true;
                        console.log("\u514d\u8cbb\u6e38\u6232\u96a8\u6a5f\u9078\u64c7numArr[index]", index, numArr[index]);
                        buttton.node.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + numArr[index], false);
                        _context.next = 27;
                        return this.awaitTime(1);

                       case 27:
                        buttton.node.getChildByName("xuanzhong").active = false;
                        _context.next = 30;
                        return this.awaitTime(3);

                       case 30:
                        buttton.node.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + numArr[index] + "_1", false);

                       case 31:
                        _context.next = 33;
                        return this.awaitTime(2);

                       case 33:
                        buttton.node.getChildByName("xuanzhong").active = false;
                        req = {
                          c: MsgId.SLOT_SUBGAME_DATA
                        };
                        req.gameid = cc.vv.gameData.getGameId();
                        req.data = {};
                        req.data.rtype = 1;
                        req.data.choiceId = index || 1;
                        cc.vv.NetManager.send(req, true);

                       case 40:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee, this);
                  }));
                  return function(_x) {
                    return _ref.apply(this, arguments);
                  };
                }(), _this2);
              }
              sureBtn = cc.find("sureBtn", _this2._node_free_tanchuang);
              Global.btnClickEvent(sureBtn, function() {
                sureBtn.stopAllActions();
                this._node_free_tanchuang.active = false;
                this.node.active = false;
                this.scheduleOnce(function() {
                  cc.vv.gameData.GetBottomScript().SendSpinReq();
                  var totalFree = cc.vv.gameData.GetTotalFree();
                  cc.vv.gameData.SetFreeTime(totalFree - 1);
                  cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                }, 1.5);
              }, _this2);
              collectBtn = cc.find("collectBtn", _this2._node_free_tanchuang);
              Global.btnClickEvent(collectBtn, function() {
                var _this3 = this;
                collectBtn.stopAllActions();
                Global.SlotsSoundMgr.playEffect("btn_click");
                BigDuel_Tools.nodeAni(this._node_free_tanchuang, 3);
                this.scheduleOnce(function() {
                  _this3.exitFreeGame();
                }, .5);
              }, _this2);
              startBtn = cc.find("startBtn", _this2._spine_storeToFreeGame);
              Global.btnClickEvent(startBtn, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                var slotsSrc, frameUp, totalFree;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    Global.SlotsSoundMgr.playEffect("transitionz");
                    slotsSrc = cc.vv.gameData.GetSlotsScript();
                    this._spine_freeGame.active = true;
                    this._spine_storeToFreeGame.active = false;
                    BigDuel_Tools.playSpineAni(this._spine_freeGame, "animation", false);
                    slotsSrc._bottomScript.ShowBtnsByState("moveing_1");
                    slotsSrc.ShowGameview(true);
                    _context2.next = 9;
                    return this.awaitTime(3);

                   case 9:
                    this._spine_freeGame.active = false;
                    slotsSrc.extendLine(this._storeExtenLine, .01);
                    frameUp = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
                    cc.find("rose", frameUp).active = false;
                    cc.find("freeGameAllWins", frameUp).active = true;
                    _context2.next = 16;
                    return this.awaitTime(1);

                   case 16:
                    cc.vv.gameData.GetBottomScript().SendSpinReq();
                    totalFree = cc.vv.gameData.GetTotalFree();
                    cc.vv.gameData.SetFreeTime(totalFree - 1);
                    slotsSrc.ShowGameview(true);

                   case 20:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2, this);
              })), _this2);
              bigCollectBtn = cc.find("startBtn", _this2._spine_storeToFreeGameEnd);
              Global.btnClickEvent(bigCollectBtn, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var gameData, unlockPage;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    Global.SlotsSoundMgr.playEffect("btn_click");
                    gameData = cc.vv.gameData;
                    BigDuel_Tools.nodeAni(this._spine_storeToFreeGameEnd, 2);
                    _context3.next = 5;
                    return this.awaitTime(.5);

                   case 5:
                    _context3.next = 7;
                    return this.exitFreeGame();

                   case 7:
                    Global.SlotsSoundMgr.playEffect("dialog_store_show");
                    gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                    gameData.GetStoreScript().showRoseStore();
                    _context3.next = 12;
                    return this.awaitTime(1);

                   case 12:
                    this._spine_storeToFreeGameEnd.active = true;
                    cc.find("winCoinNode", this._spine_storeToFreeGameEnd).active = false;
                    cc.find("startBtn", this._spine_storeToFreeGameEnd).active = false;
                    cc.find("pageNumNode", this._spine_storeToFreeGameEnd).active = true;
                    unlockPage = gameData.GetStoreScript()._roseStore.unlockPage;
                    cc.find("pageNumNode/2", this._spine_storeToFreeGameEnd).active = false;
                    cc.find("pageNumNode/3", this._spine_storeToFreeGameEnd).active = false;
                    cc.find("pageNumNode/4", this._spine_storeToFreeGameEnd).active = false;
                    cc.find("pageNumNode/5", this._spine_storeToFreeGameEnd).active = false;
                    1 == unlockPage ? cc.find("pageNumNode/5", this._spine_storeToFreeGameEnd).active = true : cc.find("pageNumNode/" + unlockPage, this._spine_storeToFreeGameEnd).active = true;
                    Global.SlotsSoundMgr.playEffect("dialog_store_unlock");
                    BigDuel_Tools.playSpineAni(this._spine_storeToFreeGameEnd, "animation1", false);
                    _context3.next = 26;
                    return this.awaitTime(1);

                   case 26:
                    BigDuel_Tools.playSpineAni(this._spine_storeToFreeGameEnd, "animation1_1", false);
                    _context3.next = 29;
                    return this.awaitTime(1);

                   case 29:
                    BigDuel_Tools.nodeAni(this._spine_storeToFreeGameEnd, 2);
                    _context3.next = 32;
                    return this.awaitTime(.5);

                   case 32:
                    gameData.GetStoreScript().movePage(2);

                   case 33:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3, this);
              })), _this2);

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showFreeGame: function showFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var self, title, _loop, index, element;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              self = _this4;
              _this4.node.active = true;
              _this4.updateUi();
              Global.SlotsSoundMgr.playEffect("transitionz");
              _this4._spine_freeGame.active = true;
              BigDuel_Tools.playSpineAni(_this4._spine_freeGame, "animation", false);
              _context6.next = 8;
              return _this4.awaitTime(2.5);

             case 8:
              _this4._spine_freeGame.active = false;
              _this4._node_free_Game.active = true;
              title = cc.find("title", _this4._node_free_Game);
              title.stopAllActions();
              title.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.delayTime(2))));
              _loop = function _loop(index) {
                var element = _this4._node_free_Game.getChildByName("choose" + index);
                cc.tween(element).delay(2 * index).call(function() {
                  element.getChildByName("biankuangliuguang").active = true;
                  element.getChildByName("biankuangliuguang").getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                }).start();
              };
              for (index = 1; index < 6; index++) _loop(index);
              if (cc.vv.gameData.isNeedAutoPlay()) {
                element = _this4._node_free_Game.getChildByName("choose5");
                cc.tween(_this4._node_free_Game).delay(cc.vv.gameData.getManualAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                  var index, numArr, buttton, i, chooseBtn, req;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      index = 5;
                      numArr = {
                        1: 10,
                        2: 8,
                        3: 5,
                        4: 3
                      };
                      if (!_this4._hasSendMsg) {
                        _context5.next = 4;
                        break;
                      }
                      return _context5.abrupt("return");

                     case 4:
                      _this4._hasSendMsg = true;
                      buttton = cc.find("choose5", _this4._node_free_Game);
                      i = 1;

                     case 7:
                      if (!(i < 6)) {
                        _context5.next = 17;
                        break;
                      }
                      if (!(i === index)) {
                        _context5.next = 10;
                        break;
                      }
                      return _context5.abrupt("continue", 14);

                     case 10:
                      chooseBtn = cc.find("choose" + i, _this4._node_free_Game);
                      chooseBtn.stopAllActions();
                      chooseBtn.getChildByName("biankuangliuguang").active = false;
                      cc.find("black", chooseBtn).active = true;

                     case 14:
                      i++;
                      _context5.next = 7;
                      break;

                     case 17:
                      Global.SlotsSoundMgr.playEffect("choose");
                      BigDuel_Tools.playSpineAni(buttton.getChildByName("xuanzhong"), "animation1", true);
                      if (!(5 === index)) {
                        _context5.next = 31;
                        break;
                      }
                      index = Math.round(3 * Math.random() + 1);
                      buttton.getChildByName("wenHao").active = false;
                      buttton.getChildByName("beishubianhua").active = true;
                      console.log("\u514d\u8cbb\u6e38\u6232\u96a8\u6a5f\u9078\u64c7numArr[index]", index, numArr[index]);
                      buttton.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + numArr[index], false);
                      _context5.next = 27;
                      return _this4.awaitTime(1);

                     case 27:
                      buttton.getChildByName("xuanzhong").active = false;
                      _context5.next = 30;
                      return _this4.awaitTime(3);

                     case 30:
                      buttton.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + numArr[index] + "_1", false);

                     case 31:
                      _context5.next = 33;
                      return _this4.awaitTime(2);

                     case 33:
                      buttton.getChildByName("xuanzhong").active = false;
                      req = {
                        c: MsgId.SLOT_SUBGAME_DATA
                      };
                      req.gameid = cc.vv.gameData.getGameId();
                      req.data = {};
                      req.data.rtype = 1;
                      req.data.choiceId = index || 1;
                      cc.vv.NetManager.send(req, true);

                     case 40:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }))).start();
              }

             case 16:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      roseStoreToFreeGame: function roseStoreToFreeGame(page, pageReward) {
        var _this5 = this;
        Global.SlotsSoundMgr.playEffect("dialog_sfg_start");
        var gameData = cc.vv.gameData;
        var row = pageReward.row;
        var freeCnt = pageReward.freeCnt;
        var mult = pageReward.mult;
        this._spine_storeToFreeGame.active = true;
        gameData.SetTotalFree(freeCnt);
        gameData.SetFreeTime(freeCnt);
        this._storeExtenLine = row;
        BigDuel_Tools.changeNodeLab(cc.find("numBg/lab", this._spine_storeToFreeGame), freeCnt);
        var frameUp = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
        cc.find("freeGameAllWins/3", frameUp).active = false;
        cc.find("freeGameAllWins/4", frameUp).active = false;
        cc.find("freeGameAllWins/5", frameUp).active = false;
        cc.find("freeGameAllWins/8", frameUp).active = false;
        cc.find("freeGameAllWins/" + mult, frameUp).active = true;
        var aniName1 = "animation" + (page + 3);
        var aniName2 = "animation" + (page + 3) + "_1";
        var numBg = cc.find("numBg", this._spine_storeToFreeGame);
        numBg.active = false;
        var startBtn = cc.find("startBtn", this._spine_storeToFreeGame);
        startBtn.active = false;
        BigDuel_Tools.playSpineAni(this._spine_storeToFreeGame.getChildByName("spine"), aniName1, false);
        cc.tween(gameData.GetSlotsNode()).delay(.5).call(function() {
          startBtn.active = true;
          numBg.active = true;
          BigDuel_Tools.playSpineAni(_this5._spine_storeToFreeGame.getChildByName("spine"), aniName2, true);
        }).start();
      },
      exitStoreFreeGame: function exitStoreFreeGame(coinNum) {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect("dialog_sfg_collect");
        var gameData = cc.vv.gameData;
        gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.node.active = true;
        this._spine_storeToFreeGameEnd.active = true;
        var aniName1 = "animation2";
        var aniName2 = "animation2_1";
        var winCoinNode = cc.find("winCoinNode", this._spine_storeToFreeGameEnd);
        var startBtn = cc.find("startBtn", this._spine_storeToFreeGameEnd);
        winCoinNode.active = false;
        startBtn.active = false;
        cc.find("pageNumNode", this._spine_storeToFreeGameEnd).active = false;
        cc.tween(gameData.GetSlotsNode()).call(function() {
          BigDuel_Tools.playSpineAni(_this6._spine_storeToFreeGameEnd, aniName1, false);
        }).delay(.5).call(function() {
          BigDuel_Tools.playSpineAni(cc.find("winCoinNode/shuzikuang", _this6._spine_storeToFreeGameEnd));
          BigDuel_Tools.playSpineAni(cc.find("startBtn/anniu", _this6._spine_storeToFreeGameEnd));
          BigDuel_Tools.nodeAni(winCoinNode, 1);
          BigDuel_Tools.nodeAni(startBtn, 1);
        }).delay(.3).call(function() {
          BigDuel_Tools.playSpineAni(_this6._spine_storeToFreeGameEnd, aniName2, true);
          var numNode = cc.find("winCoinNode/numBg/num", _this6._spine_storeToFreeGameEnd);
          Global.doRoallNumEff(numNode, 0, coinNum, 2, null, null, 0, true);
          cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose").active = true;
        }).start();
      },
      exitFreeGame: function exitFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var gameData, slotsSrc, frameUp, freeWin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              gameData = cc.vv.gameData;
              slotsSrc = gameData.GetSlotsScript();
              Global.SlotsSoundMgr.playEffect("transitionz");
              gameData.SetBigStoreToFreeGame(false);
              _this7.updateUi();
              _this7._spine_freeGame.active = true;
              BigDuel_Tools.playSpineAni(_this7._spine_freeGame, "animation", false);
              _context7.next = 9;
              return _this7.awaitTime(1.8);

             case 9:
              slotsSrc.recoverLine();
              slotsSrc._row = slotsSrc._cfg.row;
              slotsSrc.ShowGameview(false);
              _context7.next = 14;
              return _this7.awaitTime(1);

             case 14:
              slotsSrc.Resume();
              _this7.node.active = false;
              frameUp = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
              cc.find("freeGameAllWins", frameUp).active = false;
              _context7.next = 20;
              return _this7.awaitTime(1.5);

             case 20:
              _this7._spine_freeGame.active = false;
              freeWin = gameData.GetGameTotalFreeWin();
              _context7.next = 24;
              return gameData.GetSlotsScript().ShowBottomWin(freeWin, freeWin, true, null, 1);

             case 24:
              if (gameData.GetSmallStoreToFreeGame()) {
                gameData.GetStoreScript().showRoseStore();
                gameData.SetSmallStoreToFreeGame(false);
              } else gameData.GetSlotsScript().CanDoNextRound();

             case 25:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showFreeGameDialog: function showFreeGameDialog(type, num) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var sureBtn, collectBtn, freeGameNode, moreFreeNode, winCoinNode, spine_freetanchuang;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this8.node.active = true;
              _this8._node_free_tanchuang.active = true;
              sureBtn = cc.find("sureBtn", _this8._node_free_tanchuang);
              sureBtn.active = false;
              collectBtn = cc.find("collectBtn", _this8._node_free_tanchuang);
              collectBtn.active = false;
              freeGameNode = cc.find("freeGameNode", _this8._node_free_tanchuang);
              freeGameNode.active = false;
              moreFreeNode = cc.find("moreFreeNode", _this8._node_free_tanchuang);
              moreFreeNode.active = false;
              winCoinNode = cc.find("winCoinNode", _this8._node_free_tanchuang);
              winCoinNode.active = false;
              spine_freetanchuang = cc.find("spine_freetanchuang", _this8._node_free_tanchuang);
              spine_freetanchuang.active = false;
              if (!(1 == type)) {
                _context8.next = 28;
                break;
              }
              Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
              spine_freetanchuang.active = true;
              BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation1", false);
              BigDuel_Tools.playSpineAni(cc.find("anniu", sureBtn), "animation", true);
              BigDuel_Tools.changeNodeLab(cc.find("num", freeGameNode), num);
              freeGameNode.active = true;
              _context8.next = 23;
              return _this8.awaitTime(.5);

             case 23:
              sureBtn.active = true;
              BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation1_1", true);
              cc.vv.gameData.checkAutoPlay(sureBtn, function() {
                _this8._node_free_tanchuang.active = false;
                _this8.node.active = false;
                _this8.scheduleOnce(function() {
                  cc.vv.gameData.GetBottomScript().SendSpinReq();
                  var totalFree = cc.vv.gameData.GetTotalFree();
                  cc.vv.gameData.SetFreeTime(totalFree - 1);
                  cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                }, 1.5);
              });
              _context8.next = 59;
              break;

             case 28:
              if (!(2 == type)) {
                _context8.next = 43;
                break;
              }
              Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
              spine_freetanchuang.active = true;
              BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation2", false);
              BigDuel_Tools.changeNodeLab(cc.find("num", moreFreeNode), num);
              moreFreeNode.active = true;
              _context8.next = 36;
              return _this8.awaitTime(1);

             case 36:
              BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation2_1", true);
              _context8.next = 39;
              return _this8.awaitTime(1);

             case 39:
              _this8.updateUi();
              _this8.node.active = false;
              _context8.next = 59;
              break;

             case 43:
              if (!(3 == type)) {
                _context8.next = 59;
                break;
              }
              cc.vv.gameData.GetSlotsScript().stopAllSymbolAni();
              Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
              console.log("\u9000\u51fa\u514d\u8d39\u6e38\u620f\u5f39\u7a973");
              _this8.updateUi();
              _this8._node_free_tanchuang.active = true;
              spine_freetanchuang.active = true;
              BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation3", false);
              BigDuel_Tools.playSpineAni(cc.find("anniu", collectBtn), "animation", true);
              Global.doRoallNumEff(cc.find("numBg/num", winCoinNode), 0, num, 2, null, null, 0, true);
              winCoinNode.active = true;
              BigDuel_Tools.playSpineAni(cc.find("shuzikuang", winCoinNode));
              cc.tween(_this8.node).delay(1).call(function() {
                collectBtn.active = true;
                BigDuel_Tools.playSpineAni(spine_freetanchuang, "animation3_1", true);
              }).start();
              _context8.next = 58;
              return cc.vv.gameData.awaitTime(1);

             case 58:
              cc.vv.gameData.checkAutoPlay(collectBtn, function() {
                Global.SlotsSoundMgr.playEffect("btn_click");
                BigDuel_Tools.nodeAni(_this8._node_free_tanchuang, 3);
                _this8.scheduleOnce(function() {
                  _this8.exitFreeGame();
                }, .5);
              });

             case 59:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showWheelGame: function showWheelGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this9.updateUi();
              _this9.node.active = true;
              _this9._spine_bonusGame.active = true;
              BigDuel_Tools.playSpineAni(_this9._spine_bonusGame, "animation", false);
              _context9.next = 6;
              return _this9.awaitTime(2);

             case 6:
              _this9._spine_bonusGame.active = false;
              _this9.node.active = false;
              cc.vv.gameData.GetWheelScript().enterWheelGame();

             case 9:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(sucess, failed) {
          _this10.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools"
  } ],
  BigDuel_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3ae79vRq5Ctr0TN5n3K5iz", "BigDuel_PrizePool");
    "use strict";
    var BigDuel_Tools = require("./BigDuel_Tools");
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {}
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools",
    LMSlots_PrizePool_Base: void 0
  } ],
  BigDuel_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e5d2kfVyVAcK/qy2+PpgSd", "BigDuel_Reel");
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
        this._super();
      },
      OnReelHeigtChange: function OnReelHeigtChange(nAddHeight) {
        this._super(nAddHeight);
        if (1 == this._reelIdx) {
          var reels_frame = cc.find("Canvas/safe_node/slots/reels_frame");
          var frameUp = cc.find("frameUp", reels_frame);
          var frameLeft = cc.find("frameLeft", reels_frame);
          var frameRight = cc.find("frameRight", reels_frame);
          var roseNode = cc.find("rose", frameUp);
          var bigRoseNode = cc.find("bigRose", frameUp);
          frameLeft.height += nAddHeight;
          frameRight.height += nAddHeight;
          cc.find("xianShu", frameLeft).active = nAddHeight < 0;
          cc.find("xianShu", frameRight).active = nAddHeight < 0;
          for (var index = 1; index < 5; index++) cc.find("Canvas/safe_node/slots/reels_bg/role_line" + index).height += nAddHeight;
          frameUp.y += nAddHeight;
          if (nAddHeight >= 360) {
            cc.vv.gameData.GetBigStoreToFreeGame() || (bigRoseNode.active = true);
            roseNode.active = false;
            roseNode.x = 0;
            var _roseNum = cc.vv.gameData.GetSlotsScript()._roseNum;
            cc.find("numBg/num", bigRoseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_roseNum);
          } else {
            cc.vv.gameData.GetBigStoreToFreeGame() || (roseNode.active = true);
            bigRoseNode.active = false;
            roseNode.x = -280;
          }
        }
      },
      StartRecycleSymbol: function StartRecycleSymbol(nTime) {
        var cfg = cc.vv.gameData.getGameCfg();
        var localRow = cfg.row + 1;
        if (this._symbols.length > localRow) {
          var nCount = -(this._symbols.length - (cfg.row + 1));
          this.AddCount(nCount, nTime);
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
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
          var _node = cc.find("mask/" + name, this.node);
          var cfg = cc.vv.gameData.getGameCfg();
          var aniNameArr = {
            4: "1",
            5: "2",
            6: "3",
            8: "4"
          };
          var posArr = {
            4: 185,
            5: 233,
            6: 274,
            8: 370
          };
          var aniName = "lzjl_" + aniNameArr[cfg.row];
          if (_node) {
            _node.getComponent(sp.Skeleton).setAnimation(0, aniName, true);
            _node.active = bShow;
            _node.y = posArr[cfg.row];
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BigDuel_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ba157aXXZH4aOTupNlv3XX", "BigDuel_Slots");
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
    var BigDuel_Tools = require("./BigDuel_Tools");
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _entranceBtn: cc.node,
        _roseBtn: cc.node,
        _roseNum: 0
      },
      onLoad: function onLoad() {
        this._super();
        this._entranceBtn = cc.find("reels_frame/frameUp/rose/entrance", this.node);
        Global.btnClickEvent(this._entranceBtn, function() {
          Global.SlotsSoundMgr.playEffect("dialog_store_show");
          this._bottomScript.ShowBtnsByState("moveing_1");
          cc.vv.gameData.GetStoreScript().showRoseStore();
        }, this);
        this._roseBtn = cc.find("reels_frame/frameUp/rose/roseBtn", this.node);
        Global.btnClickEvent(this._roseBtn, function() {
          Global.SlotsSoundMgr.playEffect("dialog_store_show");
          this._bottomScript.ShowBtnsByState("moveing_1");
          cc.vv.gameData.GetStoreScript().showRoseStore();
        }, this);
        this.playZuoluoAni();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        this._entranceBtn.getComponent(cc.Button).interactable = false;
        this._roseBtn.getComponent(cc.Button).interactable = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
        cc.vv.gameData.GetStoreScript().updateData(msg.roseStore);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nWin, nTotal, rest, autoTime;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.ShowWinTrace();
              _this.collectRose();
              nWin = cc.vv.gameData.GetGameWin();
              _this._gameInfo.bonusGame && _this._gameInfo.bonusGame.winCoin && (nWin -= _this._gameInfo.bonusGame.winCoin);
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context.next = 8;
              return new Promise(function(sucess, failed) {
                var isUpdate = true;
                _this._gameInfo.bonusGame && (isUpdate = false);
                _this.ShowBottomWin(nWin, nTotal, isUpdate, function() {
                  sucess();
                });
              });

             case 8:
              if (!_this._gameInfo.freeResult.freeInfo.freeCnt) {
                _context.next = 13;
                break;
              }
              _context.next = 11;
              return _this.enterDoubleFreeGame();

             case 11:
              _context.next = 29;
              break;

             case 13:
              if (!_this._gameInfo.bonusGame) {
                _context.next = 18;
                break;
              }
              _context.next = 16;
              return _this.CheckTriggerSubGame();

             case 16:
              _context.next = 29;
              break;

             case 18:
              if (!(_this._gameInfo.allFreeCnt > 0 && 0 == _this._gameInfo.freeCnt)) {
                _context.next = 23;
                break;
              }
              _context.next = 21;
              return _this.CheckExitFreeGame();

             case 21:
              _context.next = 29;
              break;

             case 23:
              if (!_this._gameInfo.freeGameOptions) {
                _context.next = 28;
                break;
              }
              _context.next = 26;
              return _this.CheckEnterFreeGame(1);

             case 26:
              _context.next = 29;
              break;

             case 28:
              _this.CanDoNextRound();

             case 29:
              rest = cc.vv.gameData.GetFreeTime();
              autoTime = cc.vv.gameData.GetAutoModelTime();
              if (0 == rest && autoTime <= 0) {
                _this._entranceBtn.getComponent(cc.Button).interactable = true;
                _this._roseBtn.getComponent(cc.Button).interactable = true;
              }

             case 32:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator, _step, id, symbol, _iterator2, _step2, _id, _symbol, reels_bg, reels, reels_frame, top_ani;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.stopAllSymbolAni();
              _iterator = _createForOfIteratorHelper(_this2._gameInfo.bonusGame.idxs);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  id = _step.value;
                  symbol = _this2.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              Global.SlotsSoundMgr.playEffect("symbol_bonus");
              _context2.next = 6;
              return _this2.awaitTime(1);

             case 6:
              Global.SlotsSoundMgr.playEffect("trigger");
              _context2.next = 9;
              return _this2.awaitTime(1.5);

             case 9:
              _iterator2 = _createForOfIteratorHelper(_this2._gameInfo.bonusGame.idxs);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _id = _step2.value;
                  _symbol = _this2.GetSymbolByIdx(_id);
                  _symbol && _symbol.playTriggerAnimation(false);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              Global.SlotsSoundMgr.playEffect("transitionmoon");
              _context2.next = 14;
              return _this2.playZuoluoAni(true);

             case 14:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              reels_bg = cc.find("reels_bg", _this2.node);
              reels = cc.find("reels", _this2.node);
              reels_frame = cc.find("reels_frame", _this2.node);
              top_ani = cc.find("top_ani", _this2.node);
              reels_bg.runAction(cc.moveTo(.8, cc.v2(0, -800)));
              reels.runAction(cc.moveTo(.8, cc.v2(0, -800)));
              reels_frame.runAction(cc.moveTo(.8, cc.v2(0, -800)));
              top_ani.runAction(cc.moveTo(.8, cc.v2(0, -960)));
              cc.vv.gameData.GetPopNodeScript().showWheelGame();

             case 25:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      ExitBonusGame: function ExitBonusGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var reels_bg, reels, reels_frame, top_ani, _iterator3, _step3, id, symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              reels_bg = cc.find("reels_bg", _this3.node);
              reels = cc.find("reels", _this3.node);
              reels_frame = cc.find("reels_frame", _this3.node);
              top_ani = cc.find("top_ani", _this3.node);
              reels_bg.runAction(cc.moveTo(.8, cc.v2(0, 0)));
              reels.runAction(cc.moveTo(.8, cc.v2(0, 0)));
              reels_frame.runAction(cc.moveTo(.8, cc.v2(0, 0)));
              top_ani.runAction(cc.moveTo(.8, cc.v2(0, -180)));
              _iterator3 = _createForOfIteratorHelper(_this3._gameInfo.bonusGame.idxs);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  id = _step3.value;
                  symbol = _this3.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _context3.next = 12;
              return _this3.awaitTime(2);

             case 12:
              Global.SlotsSoundMgr.playNormalBgm();
              _this3.CanDoNextRound();

             case 14:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame(type) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var popNodeSrc, _iterator4, _step4, id, symbol, _iterator5, _step5, _id2, _symbol2;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              popNodeSrc = cc.vv.gameData.GetPopNodeScript();
              if (!(1 == type)) {
                _context4.next = 13;
                break;
              }
              _iterator4 = _createForOfIteratorHelper(_this4._gameInfo.freeGameOptions.scatterIdx);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  id = _step4.value;
                  symbol = _this4.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              Global.SlotsSoundMgr.playEffect("bell");
              _this4.Backup();
              _context4.next = 9;
              return _this4.awaitTime(4);

             case 9:
              _iterator5 = _createForOfIteratorHelper(_this4._gameInfo.freeGameOptions.scatterIdx);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  _id2 = _step5.value;
                  _symbol2 = _this4.GetSymbolByIdx(_id2);
                  _symbol2 && _symbol2.playTriggerAnimation(false);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              _context4.next = 14;
              break;

             case 13:
              _this4.Backup();

             case 14:
              Global.SlotsSoundMgr.playEffect("dialog_sfg_start");
              popNodeSrc.showFreeGame();

             case 16:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterDoubleFreeGame: function enterDoubleFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var _iterator6, _step6, id, symbol, _iterator7, _step7, _id3, _symbol3;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("transitionz");
              _iterator6 = _createForOfIteratorHelper(_this5._gameInfo.freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  id = _step6.value;
                  symbol = _this5.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              _context5.next = 5;
              return _this5.awaitTime(1.5);

             case 5:
              _context5.next = 7;
              return cc.vv.gameData.GetPopNodeScript().showFreeGameDialog(2, _this5._gameInfo.freeResult.freeInfo.freeCnt);

             case 7:
              _iterator7 = _createForOfIteratorHelper(_this5._gameInfo.freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  _id3 = _step7.value;
                  _symbol3 = _this5.GetSymbolByIdx(_id3);
                  _symbol3 && _symbol3.playTriggerAnimation(false);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              _this5.CanDoNextRound();

             case 10:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var GameData = cc.vv.gameData;
        var deskInfo = GameData._deskInfo;
        if (deskInfo.freeGameOptions) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          GameData.GetPopNodeScript().showFreeGame();
        } else {
          var total = GameData.GetTotalFree();
          var rest = GameData.GetFreeTime();
          if (rest > 0) {
            Global.SlotsSoundMgr.playBgm("free_bgm");
            this._bottomScript.ShowFreeModel(true, total - rest, total);
            var nTotal = GameData.GetTotalFreeWin();
            this._bottomScript.SetWin(nTotal);
            this.extendLine(deskInfo.freeGameInfo.row, .01);
            this.CanDoNextRound();
            this.ShowGameview(true);
          }
        }
        GameData.GetStoreScript().updateData(deskInfo.roseStore);
        this._roseNum = deskInfo.roseStore.roseCnt;
        GameData.SetJackpotUnlock(deskInfo.JackpotUnlock);
        this.onEventTotalbetUpdated();
        var num = cc.find("reels_frame/frameUp/rose/numBg/num", this.node);
        BigDuel_Tools.changeNodeLab(num, Global.FormatNumToComma(Math.floor(deskInfo.roseStore.roseCnt)));
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("dialog_sfg_collect");
              if (!cc.vv.gameData.GetBigStoreToFreeGame()) {
                _context6.next = 6;
                break;
              }
              cc.vv.gameData.GetPopNodeScript().exitStoreFreeGame(_this6._gameInfo.freeWinCoin);
              _context6.next = 8;
              break;

             case 6:
              _context6.next = 8;
              return cc.vv.gameData.GetPopNodeScript().showFreeGameDialog(3, _this6._gameInfo.freeWinCoin);

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      collectRose: function collectRose() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var roseInfo, i, symbol, src, rose, bigRose, numLab;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              roseInfo = _this7._gameInfo.roseInfo;
              if (!(!roseInfo || 0 === roseInfo.totalCnt)) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");

             case 3:
              Global.SlotsSoundMgr.playEffect("collect_rose");
              for (i = 0; i < roseInfo.idxs.length; i++) {
                symbol = _this7.GetSymbolByIdx(roseInfo.idxs[i]);
                if (symbol) {
                  src = symbol.getComponent("BigDuel_symbol");
                  src.SetRoseText(roseInfo.cnts[i]);
                }
              }
              _context7.next = 7;
              return _this7.awaitTime(.7);

             case 7:
              rose = cc.find("reels_frame/frameUp/rose", _this7.node);
              bigRose = cc.find("reels_frame/frameUp/bigRose", _this7.node);
              numLab = cc.find("numBg/num", rose);
              rose.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
              if (bigRose.active) {
                BigDuel_Tools.changeNodeLab(cc.find("numBg/num", rose), Global.FormatNumToComma(Math.floor(_this7._roseNum + roseInfo.totalCnt)));
                numLab = cc.find("numBg/num", bigRose);
              }
              Global.doRoallNumEff(numLab, _this7._roseNum, _this7._roseNum + roseInfo.totalCnt, .5, null, null, 0, true);
              _this7._roseNum += roseInfo.totalCnt;
              _context7.next = 16;
              return _this7.awaitTime(.5);

             case 16:
              rose.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);

             case 17:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      extendLine: function extendLine(count) {
        var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01;
        var GameCfg = cc.vv.gameData.getGameCfg();
        var addLineNum = count - GameCfg.row;
        GameCfg.row = count;
        var topAniNode = cc.find("Canvas/safe_node/slots/top_ani");
        topAniNode.height = count * GameCfg.symbolSize.height;
        if (addLineNum > 0) for (var i = 0; i < 5; i++) this._reels[i].AddCount(addLineNum, time);
        this._row = this._cfg.row;
      },
      recoverLine: function recoverLine() {
        var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .01;
        var data1 = cc.vv.gameData.getGameCfg().row;
        var data2 = cc.vv.gameData.getGameCfg().realRow;
        var addLineNum = data2 - data1;
        var topAniNode = cc.find("Canvas/safe_node/slots/top_ani");
        topAniNode.height = 93 * data2;
        if (0 != addLineNum) for (var i = 0; i < 5; i++) this._reels[i].AddCount(addLineNum, time);
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var symbol4 = item._symbols[4];
          symbol4.setAnimationToTop(false);
          symbol4.ShowKuang(false);
        }
        cc.vv.gameData.getGameCfg().row = cc.vv.gameData.getGameCfg().realRow;
      },
      ShowGameview: function ShowGameview(bFree) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var total, rest, nTotal, normalBg, normalFree;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (bFree) {
                Global.SlotsSoundMgr.playBgm("free_bgm");
                total = cc.vv.gameData.GetTotalFree();
                rest = cc.vv.gameData.GetFreeTime();
                _this8._bottomScript.ShowFreeModel(true, total - rest, total);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                _this8._bottomScript.SetWin(nTotal);
                cc.find("reels_frame/frameUp/rose", _this8.node).y = 110;
                cc.find("reels_frame/frameUp/unLockNode", _this8.node).active = false;
                _this8._entranceBtn.getComponent(cc.Button).interactable = false;
                _this8._roseBtn.getComponent(cc.Button).interactable = false;
              } else {
                _this8._bottomScript.ShowFreeModel(false);
                cc.find("reels_frame/frameUp/rose", _this8.node).y = 160;
                cc.find("reels_frame/frameUp/unLockNode", _this8.node).active = true;
                _this8._entranceBtn.getComponent(cc.Button).interactable = true;
                _this8._roseBtn.getComponent(cc.Button).interactable = true;
              }
              normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
              normalFree = cc.find("Canvas/safe_node/spr_bg_free");
              normalBg && (normalBg.active = !bFree);
              normalFree && (normalFree.active = bFree);

             case 5:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      playZuoluoAni: function playZuoluoAni(isInBonus) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var spine_role;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              spine_role = cc.find("new_role", _this9.node);
              if (!isInBonus) {
                _context9.next = 6;
                break;
              }
              spine_role.stopAllActions();
              spine_role.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              _context9.next = 6;
              return _this9.awaitTime(2);

             case 6:
              spine_role.getComponent(sp.Skeleton).setAnimation(0, "idle", true);

             case 7:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data, bInit) {
        var GameData = cc.vv.gameData;
        var _bet = 0;
        data && (_bet = data.detail);
        var unLockNode = cc.find("reels_frame/frameUp/unLockNode", this.node);
        var betMultsArr = GameData.GetBetMults();
        var _JackpotUnlock = GameData.GetJackpotUnlock();
        var betIndex = cc.vv.gameData.GetBetIdx();
        console.log("\u62bc\u6ce8\u5217\u8868", betMultsArr, "\u89e3\u9501bonus index\u6570\u7ec4", _JackpotUnlock, "\u5f53\u524d\u62bc\u6ce8index", betIndex, "\u5f53\u524d\u538b\u4f4f\u6570\u503c", _bet);
        var nodeArr = [ cc.find("Mini", unLockNode), cc.find("Minor", unLockNode), cc.find("Maxi", unLockNode), cc.find("Major", unLockNode), cc.find("Grand", unLockNode) ];
        for (var i = 0; i < 5; i++) {
          var isUnLock = false;
          var lockNum = 0;
          betIndex >= _JackpotUnlock[i] && (isUnLock = true);
          lockNum = betMultsArr[_JackpotUnlock[i] - 1] ? betMultsArr[_JackpotUnlock[i] - 1] : betMultsArr[betMultsArr.length - 1] * (i + 2);
          this.changLockBonusItem(nodeArr[i], isUnLock, lockNum);
        }
      },
      changLockBonusItem: function changLockBonusItem(node, isUnLock, lockNum) {
        console.log("changLockBonusItem2222222222222", node.name, isUnLock, lockNum, node.isUnLock);
        var spineNode = cc.find("spine", node);
        var txt = spineNode.getChildByName("num").getComponent(cc.Label);
        txt.string = Global.formatNumShort(lockNum, 0);
        if (isUnLock) {
          if (true === node.isUnLock) return;
          node.isUnLock = true;
          console.log("\u89e3\u9501");
          node.stopAllActions();
          cc.tween(node).call(function() {
            spineNode.getChildByName("num").active = false;
            BigDuel_Tools.playSpineAni(spineNode, "animation", false);
          }).delay(1).call(function() {
            spineNode.active = false;
          }).start();
        } else {
          if (false === node.isUnLock) return;
          node.isUnLock = false;
          console.log("\u672a\u89e3\u9501");
          node.stopAllActions();
          cc.tween(node).call(function() {
            spineNode.active = true;
            BigDuel_Tools.playSpineAni(spineNode, "animation3", false);
          }).delay(1).call(function() {
            spineNode.getChildByName("num").active = true;
            BigDuel_Tools.playSpineAni(spineNode, "animation2", false);
          }).start();
        }
      },
      stopAllSymbolAni: function stopAllSymbolAni() {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i2 = 0; _i2 < item._symbols.length; _i2++) {
            var element = item._symbols[_i2];
            element.ShowNormal();
            element.ShowKuang(false);
          }
        }
      },
      delayFunc: function delayFunc(func, time) {
        this.scheduleOnce(function() {
          func();
        }, time);
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(sucess, failed) {
          _this10.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools",
    LMSlots_Slots_Base: void 0
  } ],
  BigDuel_Store: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bf50231lNGPoe8ajnbXlbc", "BigDuel_Store");
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
    var BigDuel_Tools = require("./BigDuel_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        chooseSpf1: cc.SpriteFrame,
        chooseSpf2: cc.SpriteFrame,
        itemOpenSpf: cc.SpriteFrame,
        itemCloseSpf: cc.SpriteFrame,
        itemGraySpf: cc.SpriteFrame,
        _beginFlyItem: cc.node,
        _flyLizi: cc.node,
        _cannotOpenTip: cc.node,
        _upSpine: cc.node,
        _roseStore: null,
        _page: 1,
        _unlockPage: 1,
        _repick: false
      },
      Init: function Init() {
        this._flyLizi = cc.find("bg/flyLizi", this.node);
        this._cannotOpenTip = cc.find("bg/cannotOpenTip", this.node);
        this._upSpine = cc.find("bg/shangdiandakai", this.node);
        Global.btnClickEvent(cc.find("bg/leftBtn", this.node), function() {
          var spineNode = cc.find("bg/leftBtn/jiantou", this.node);
          spineNode.active = true;
          BigDuel_Tools.playSpineAni(spineNode, "animation1", false);
          BigDuel_Tools.spineEndFunc(spineNode, function() {
            spineNode.active = false;
          });
          this.movePage(1);
        }, this);
        Global.btnClickEvent(cc.find("bg/rightBtn", this.node), function() {
          var spineNode = cc.find("bg/rightBtn/jiantou", this.node);
          spineNode.active = true;
          BigDuel_Tools.playSpineAni(spineNode, "animation1", false);
          BigDuel_Tools.spineEndFunc(spineNode, function() {
            spineNode.active = false;
          });
          this.movePage(2);
        }, this);
        Global.btnClickEvent(cc.find("bg/btnClose", this.node), function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          this.closeRoseStore();
          cc.vv.gameData.GetSlotsScript().CanDoNextRound();
        }, this);
      },
      onLoad: function onLoad() {
        var _this = this;
        var self = this;
        this.initUi();
        this.updateUi();
        var pageView = cc.find("bg/pageView", this.node).getComponent(cc.PageView);
        pageView.node.on("page-turning", function(pageView) {
          Global.SlotsSoundMgr.playEffect("change");
          var pageIndex = pageView.getCurrentPageIndex();
          var unlockPage = self._roseStore.unlockPage;
          self._page = pageIndex + 1;
          self.updateUi();
          _this._page > unlockPage ? BigDuel_Tools.playSpineAni(_this._upSpine, "animation" + (_this._page + 4), false) : BigDuel_Tools.playSpineAni(_this._upSpine, "animation" + _this._page, false);
          self.scheduleOnce(function() {
            Global.SlotsSoundMgr.playEffect("dialog_store_show");
          }, .2);
        });
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      updateData: function updateData(roseStore) {
        this._roseStore = roseStore;
        var haveRose = cc.find("bg/haveRoseBg/num", this.node);
        BigDuel_Tools.changeNodeLab(haveRose, Global.FormatNumToComma(this._roseStore.roseCnt));
        true == this._roseStore.repick && (this._repick = true);
      },
      initUi: function initUi() {
        var _this2 = this;
        this._upSpine.getComponent(sp.Skeleton).setAnimation(0, "animation" + this._page, false);
        var pageDetails = this._roseStore.pageDetails;
        var cloneItem = cc.find("bg/pageView/view/content/page_1/item", this.node);
        cloneItem.active = false;
        var posArr = [ cc.v2(-175, 150), cc.v2(0, 150), cc.v2(175, 150), cc.v2(-175, 0), cc.v2(0, 0), cc.v2(175, 0), cc.v2(-175, -150), cc.v2(0, -150), cc.v2(175, -150) ];
        var _loop = function _loop(i) {
          var pageItem = cc.find("bg/pageView/view/content/page_" + i, _this2.node);
          var price = pageDetails[i - 1].price;
          var _loop2 = function _loop2(j) {
            var item = cc.instantiate(cloneItem);
            item.name = "item" + j;
            item.active = true;
            item.setPosition(posArr[j]);
            pageItem.addChild(item);
            item.getChildByName("coin").active = false;
            item.getChildByName("spine").active = false;
            item.price = price;
            if (i < _this2._roseStore.unlockPage + 1) {
              item.getChildByName("lock").active = false;
              BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this2.itemCloseSpf);
            } else {
              item.getChildByName("lock").active = true;
              BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this2.itemGraySpf);
            }
            BigDuel_Tools.changeNodeLab(cc.find("price/lab", item), Global.formatNumShort(price));
            Global.btnClickEvent(item, function() {
              console.log(item.hasUnlock, this._page, this._roseStore.unlockPage);
              if (true == item.hasUnlock) return;
              if (this._page > this._roseStore.unlockPage) return;
              if (this._roseStore.roseCnt < item.price && !this._repick) {
                var tip = cc.instantiate(this._cannotOpenTip);
                item.addChild(tip);
                cc.tween(tip).call(function() {
                  tip.active = true;
                  tip.y = 50;
                  Global.SlotsSoundMgr.playEffect("tip");
                  BigDuel_Tools.nodeAni(tip, 1);
                }).delay(1).call(function() {
                  tip.removeFromParent();
                }).start();
                return;
              }
              Global.SlotsSoundMgr.playEffect("buy1");
              var req = {
                c: MsgId.SLOT_SUBGAME_DATA
              };
              req.gameid = cc.vv.gameData.getGameId();
              req.data = {};
              req.data.rtype = 2;
              req.data.pageId = i;
              req.data.choiceId = j + 1;
              cc.vv.NetManager.send(req, true);
              this.repick(false);
              cc.find("bg/zheZhao", this.node).active = true;
            }, _this2);
          };
          for (var j = 0; j < 9; j++) _loop2(j);
        };
        for (var i = 1; i < 6; i++) _loop(i);
        var unlockItems = this._roseStore.unlockItems;
        for (var _i = 1; _i < this._roseStore.unlockPage + 1; _i++) {
          var pageItem = cc.find("bg/pageView/view/content/page_" + _i, this.node);
          var unlockInfo = unlockItems[_i - 1];
          for (var key in unlockInfo) {
            var itemInfo = unlockInfo[key];
            var item = pageItem.getChildByName("item" + (itemInfo.idx - 1));
            item.getChildByName("lock").active = false;
            item.getChildByName("price").active = false;
            item.getChildByName("itemBg").active = false;
            var spineNode = item.getChildByName("spine");
            spineNode.active = true;
            var spineCom = spineNode.getComponent(sp.Skeleton);
            if (1 === itemInfo.type) spineCom.setAnimation(0, "animation3_1", false); else if (2 === itemInfo.type) {
              item.getChildByName("coin").active = true;
              spineCom.setAnimation(0, "animation1_1", false);
              var showCoinNum = 1e3 * parseInt(itemInfo.coin / 1e3);
              BigDuel_Tools.changeNodeLab(item.getChildByName("coin"), Global.formatNumShort(showCoinNum, 0));
            } else 3 === itemInfo.type && spineCom.setAnimation(0, "animation2_1", false);
            item.hasUnlock = true;
            BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), this.itemOpenSpf);
          }
        }
      },
      updateUi: function updateUi() {
        var bg = this.node.getChildByName("bg");
        var haveRose = cc.find("haveRoseBg/num", bg);
        BigDuel_Tools.changeNodeLab(haveRose, Global.FormatNumToComma(this._roseStore.roseCnt));
        var downNode = cc.find("bg/down", this.node);
        for (var i = 1; i < 6; i++) {
          var key = cc.find("chooseBtn" + i, downNode);
          BigDuel_Tools.changeNodeSp(key, this.chooseSpf1);
          i === this._page && BigDuel_Tools.changeNodeSp(key, this.chooseSpf2);
        }
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var data, pageItem, item, gameData, rose, numLab, spineNode, spineCom, coinNum, haveWin, addCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 != msg.code)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              data = msg.data;
              pageItem = cc.find("bg/pageView/view/content/page_" + data.pageId, _this3.node);
              item = pageItem.getChildByName("item" + (data.choiceId - 1));
              gameData = cc.vv.gameData;
              if (!data.errMsg) {
                _context.next = 9;
                break;
              }
              console.log("\u6709\u62a5\u9519\u4fe1\u606f");
              return _context.abrupt("return");

             case 9:
              rose = cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose");
              numLab = cc.find("numBg/num", rose);
              cc.vv.gameData.GetSlotsScript()._roseNum = data.roseStore.roseCnt;
              BigDuel_Tools.changeNodeLab(numLab, Global.FormatNumToComma(data.roseStore.roseCnt));
              true == _this3._roseStore.repick && (_this3._repick = true);
              if (data.roseStore) {
                _this3.updateData(data.roseStore);
                _this3.updateUi();
              }
              item.getChildByName("lock").active = false;
              item.getChildByName("price").active = false;
              item.getChildByName("itemBg").active = false;
              item.hasUnlock = true;
              item.stopAllActions();
              BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this3.itemOpenSpf);
              spineNode = item.getChildByName("spine");
              spineNode.active = true;
              spineCom = spineNode.getComponent(sp.Skeleton);
              _context.t0 = data.result.type;
              _context.next = 1 === _context.t0 ? 27 : 2 === _context.t0 ? 36 : 3 === _context.t0 ? 58 : 66;
              break;

             case 27:
              spineCom.setAnimation(0, "animation3", false);
              Global.SlotsSoundMgr.playEffect("buy2");
              gameData.SetSmallStoreToFreeGame(true);
              _context.next = 32;
              return _this3.awaitTime(1);

             case 32:
              spineCom.setAnimation(0, "animation3_1", false);
              BigDuel_Tools.nodeAni(_this3.node, 2);
              gameData.GetSlotsScript().delayFunc(function() {
                cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame(2);
              }, 1);
              return _context.abrupt("break", 67);

             case 36:
              spineCom.setAnimation(0, "animation1", false);
              _context.next = 39;
              return _this3.awaitTime(.5);

             case 39:
              item.getChildByName("coin").active = true;
              coinNum = data.result.coin;
              true == _this3._repick && (coinNum = data.result.coin / 2);
              BigDuel_Tools.changeNodeLab(item.getChildByName("coin"), Global.formatNumShort(coinNum, 0));
              _context.next = 45;
              return _this3.awaitTime(.5);

             case 45:
              spineCom.setAnimation(0, "animation1_1", false);
              _this3.repick(false);
              if (!_this3._beginFlyItem) {
                _context.next = 50;
                break;
              }
              _context.next = 50;
              return _this3.flyliziAct(_this3._beginFlyItem, item);

             case 50:
              BigDuel_Tools.changeNodeLab(item.getChildByName("coin"), Global.formatNumShort(data.result.coin, 0));
              haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              addCoin = data.result.coin;
              console.log("\u8f6c\u76d8\u6e38\u620f\u6240\u6709\u4e2d\u5956\u91d1\u5e01", addCoin, "\u5df2\u4e2d\u5956\u91d1\u5e01", haveWin);
              cc.vv.gameData.AddCoin(addCoin);
              cc.vv.gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
              cc.vv.gameData.GetTopScript().ShowCoin();
              return _context.abrupt("break", 67);

             case 58:
              spineCom.setAnimation(0, "animation2", false);
              Global.SlotsSoundMgr.playEffect("buy3");
              _context.next = 62;
              return _this3.awaitTime(1);

             case 62:
              spineCom.setAnimation(0, "animation2_1", false);
              _this3._beginFlyItem = item;
              _this3.repick(true);
              return _context.abrupt("break", 67);

             case 66:
              return _context.abrupt("break", 67);

             case 67:
              cc.find("bg/zheZhao", _this3.node).active = false;
              data.result.pageReward && _this3.goPageReward(data.pageId, data.result.pageReward);
              _this3.checkCanOpen();

             case 70:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      checkCanOpen: function checkCanOpen() {
        var _this4 = this;
        var pageItem = cc.find("bg/pageView/view/content/page_" + this._roseStore.unlockPage, this.node);
        var roseCnt = this._roseStore.roseCnt;
        var _loop3 = function _loop3(i) {
          var item = pageItem.getChildByName("item" + i);
          if (true == item.hasUnlock) return "continue";
          var price = item.price;
          var spineNode = item.getChildByName("spine");
          if (roseCnt >= price) {
            spineNode.active = true;
            BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this4.itemCloseSpf);
            null == item.getActionByTag(1) && cc.tween(item).delay(2 + 4 * i).call(function() {
              BigDuel_Tools.playSpineAni(spineNode, "animation5", false);
            }).union().repeatForever().tag(1).start();
          } else {
            spineNode.active = false;
            item.stopAllActions();
            BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this4.itemGraySpf);
          }
        };
        for (var i = 0; i < 9; i++) {
          var _ret = _loop3(i);
          if ("continue" === _ret) continue;
        }
      },
      flyliziAct: function flyliziAct(beginNode, endNode) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var self, flyLizi, endPos;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              self = _this5;
              flyLizi = cc.instantiate(_this5._flyLizi);
              flyLizi.parent = beginNode;
              flyLizi.active = true;
              flyLizi.setPosition(cc.v2(0, 0));
              endPos = BigDuel_Tools.convetOtherNodeSpace(endNode, beginNode);
              cc.tween(flyLizi).to(.5, {
                position: endPos
              }).call(function() {
                flyLizi.removeFromParent();
                self._beginFlyItem = null;
                self._repick = false;
              }).start();
              _this5.awaitTime(1);

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      repick: function repick(isIn) {
        if (!this._roseStore.repick) return;
        var unlockPage = this._roseStore.unlockPage;
        var pageItem = cc.find("bg/pageView/view/content/page_" + unlockPage, this.node);
        for (var j = 0; j < 9; j++) {
          var item = pageItem.getChildByName("item" + j);
          item.hasUnlock || (item.getChildByName("price").active = !isIn);
        }
      },
      goPageReward: function goPageReward(pageId, pageReward) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var spineNode1, spineNode2, unlockPage, pageItem, j, item;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("full");
              spineNode1 = cc.find("kuangzhu", _this6.node);
              spineNode2 = cc.find("quanpingqingzhu", _this6.node);
              spineNode1.active = true;
              spineNode2.active = true;
              spineNode1.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              spineNode2.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              cc.vv.gameData.SetBigStoreToFreeGame(true);
              _context3.next = 10;
              return _this6.awaitTime(2);

             case 10:
              _context3.next = 12;
              return _this6.closeRoseStore();

             case 12:
              cc.vv.gameData.GetPopNodeScript().roseStoreToFreeGame(pageId, pageReward);
              unlockPage = _this6._roseStore.unlockPage;
              pageItem = cc.find("bg/pageView/view/content/page_" + unlockPage, _this6.node);
              for (j = 0; j < 9; j++) {
                item = pageItem.getChildByName("item" + j);
                item.getChildByName("lock").active = false;
                BigDuel_Tools.changeNodeSp(item.getChildByName("itemBg"), _this6.itemCloseSpf);
              }

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      movePage: function movePage(type) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var pageView, unlockPage, pageIndex, movePageIndex;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("change");
              pageView = cc.find("bg/pageView", _this7.node).getComponent(cc.PageView);
              unlockPage = _this7._roseStore.unlockPage;
              pageIndex = pageView.getCurrentPageIndex();
              movePageIndex = 1;
              if (1 === type) {
                movePageIndex = pageIndex - 1;
                -1 === movePageIndex && (movePageIndex = 4);
              } else if (2 === type) {
                movePageIndex = pageIndex + 1;
                5 === movePageIndex && (movePageIndex = 0);
              }
              _this7._page = movePageIndex + 1;
              pageView.scrollToPage(movePageIndex);
              _this7.updateUi();
              _this7._page > unlockPage ? BigDuel_Tools.playSpineAni(_this7._upSpine, "animation" + (_this7._page + 4), false) : BigDuel_Tools.playSpineAni(_this7._upSpine, "animation" + _this7._page, false);
              _this7.scheduleOnce(function() {
                Global.SlotsSoundMgr.playEffect("dialog_store_show");
              }, .2);

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showRoseStore: function showRoseStore() {
        BigDuel_Tools.nodeAni(this.node, 1);
        this.checkCanOpen();
        cc.find("bg/zheZhao", this.node).active = false;
      },
      closeRoseStore: function closeRoseStore() {
        BigDuel_Tools.nodeAni(this.node, 2);
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(sucess, failed) {
          _this8.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools"
  } ],
  BigDuel_Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91347RgeMRFfYlXbQvvhwE7", "BigDuel_Tools");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      statics: {
        changeNodeSp: function changeNodeSp(node, sp) {
          if (null == node) return;
          node.getComponent(cc.Sprite).spriteFrame = sp;
        },
        changeNodeLab: function changeNodeLab(node, str) {
          if (null == node) return;
          node.getComponent(cc.Label).string = str;
        },
        numInArr: function numInArr(num1, num2, arr) {
          var judge1 = arr.indexOf(num1);
          var judge2 = arr.indexOf(num2);
          return -1 != judge1 && -1 != judge2;
        },
        nodeAni: function nodeAni(node, type) {
          if (1 === type) {
            node.scale = 0;
            node.active = true;
            cc.tween(node).to(.2, {
              scale: 1
            }).start();
          } else 2 === type ? cc.tween(node).to(.2, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
          }).start() : 3 === type && cc.tween(node).to(.2, {
            scale: 1.3
          }).to(.3, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
          }).start();
        },
        playSpineAni: function playSpineAni(node) {
          var aniName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
          var isloop = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          var idx = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          if (node) {
            node.active = true;
            var spine = node.getComponent(sp.Skeleton);
            spine.setAnimation(idx, aniName, isloop);
          }
        },
        getKNum: function getKNum(num) {
          if (num) {
            var backNum = 1e3 * parseInt(num / 1e3);
            return backNum;
          }
        },
        spineEndFunc: function spineEndFunc(spineNode, callFunc) {
          spineNode && spineNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            callFunc && callFunc();
          });
        },
        localConvertWorldPoint: function localConvertWorldPoint(node) {
          if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
          return null;
        },
        worldConvertLocalPoint: function worldConvertLocalPoint(node, worldPoint) {
          if (node) return node.convertToNodeSpace(worldPoint);
          return null;
        },
        convetOtherNodeSpace: function convetOtherNodeSpace(node, targetNode) {
          if (!node || !targetNode) return null;
          var worldPoint = this.localConvertWorldPoint(node);
          return this.worldConvertLocalPoint(targetNode, worldPoint);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BigDuel_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b638C8mxVDt6D6ay7ej+L/", "BigDuel_Wheel");
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
    var BigDuel_Tools = require("./BigDuel_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _node_win: cc.node,
        _node_wheel: cc.node,
        _yuan_di: cc.node,
        _point_node: cc.node,
        _spine_moon: cc.node,
        _wheelAtlas: null,
        _bonusGameInfo: null,
        _pointType: null,
        _gameTimes: 1
      },
      Init: function Init() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var collectBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this._node_win = cc.find("node_win", _this.node);
              _this._spine_moon = cc.find("spine_moon", _this.node);
              _this._node_wheel = cc.find("node_wheel", _this.node);
              _this._yuan_di = cc.find("yuanDi", _this._node_wheel);
              _this._point_node = cc.find("pointNode", _this._node_wheel);
              _this._wheelAtlas = cc.vv.gameData.GetAtlasByName("wheel");
              collectBtn = cc.find("sureBtn", _this._node_win);
              Global.btnClickEvent(collectBtn, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var _this2 = this;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    collectBtn.stopAllActions();
                    Global.SlotsSoundMgr.playEffect("popup_out");
                    BigDuel_Tools.nodeAni(this._node_win, 3);
                    this.scheduleOnce(function() {
                      _this2.exitWheelGame();
                    }, .6);

                   case 4:
                   case "end":
                    return _context.stop();
                  }
                }, _callee, this);
              })), _this);

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterWheelGame: function enterWheelGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._bonusGameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo.bonusGame;
              if (_this3._bonusGameInfo) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");

             case 3:
              _this3._pointType = _this3._bonusGameInfo.size;
              _this3._gameTimes = _this3._bonusGameInfo.result.length;
              _this3.updateUi();

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      updateUi: function updateUi() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var _left_heiDi, _right_heiDi, spine1_Point_node, spine2_Point_node, jackPotArr, index, item, itemInfo, coin, offsetNumArr;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4.node.active = true;
              _left_heiDi = cc.find("leftHeiDi", _this4._node_wheel);
              _right_heiDi = cc.find("rightHeiDi", _this4._node_wheel);
              _this4._spine_moon.active = false;
              _this4._node_win.active = false;
              _this4._yuan_di.angle = 0;
              spine1_Point_node = _this4._node_wheel.getChildByName("pointSpine1");
              spine2_Point_node = _this4._node_wheel.getChildByName("pointSpine2");
              spine1_Point_node.active = false;
              spine2_Point_node.active = false;
              BigDuel_Tools.changeNodeSp(_this4._yuan_di, _this4._wheelAtlas.getSpriteFrame("yuanDi" + _this4._bonusGameInfo.wheelJackpot));
              BigDuel_Tools.changeNodeSp(_left_heiDi, _this4._wheelAtlas.getSpriteFrame("zz" + _this4._pointType));
              BigDuel_Tools.changeNodeSp(_right_heiDi, _this4._wheelAtlas.getSpriteFrame("zz" + _this4._pointType));
              BigDuel_Tools.changeNodeSp(_this4._point_node, _this4._wheelAtlas.getSpriteFrame("point" + _this4._pointType));
              jackPotArr = {
                1: "mini",
                2: "minor",
                3: "maxi",
                4: "major",
                5: "grand"
              };
              if (_this4._yuan_di.childrenCount < 10) for (index = 0; index < 40; index++) {
                item = cc.instantiate(cc.find("item", _this4._yuan_di));
                itemInfo = _this4._bonusGameInfo.wheelItems[index];
                item.active = true;
                item.name = "item" + index;
                item.angle = 9 * index;
                item.parent = _this4._yuan_di;
                item.getChildByName("png1").active = false;
                item.getChildByName("png2").active = false;
                item.getChildByName("lab").active = false;
                if (itemInfo.mult) {
                  item.getChildByName("lab").active = true;
                  coin = cc.vv.gameData.GetTotalBet() * itemInfo.mult;
                  BigDuel_Tools.changeNodeLab(item.getChildByName("lab"), Global.FormatNumToComma(coin));
                }
                if (itemInfo.respin) {
                  BigDuel_Tools.changeNodeSp(item.getChildByName("png1"), _this4._wheelAtlas.getSpriteFrame("again" + itemInfo.respin));
                  item.getChildByName("png1").active = true;
                }
                if (itemInfo.jackpotId) {
                  BigDuel_Tools.changeNodeSp(item.getChildByName("png2"), _this4._wheelAtlas.getSpriteFrame(jackPotArr[itemInfo.jackpotId]));
                  item.getChildByName("png2").active = true;
                }
              }
              offsetNumArr = {
                1: 0,
                2: -4.5,
                3: -9,
                4: -13.5
              };
              _this4._yuan_di.angle = offsetNumArr[_this4._pointType];
              _context4.next = 20;
              return _this4.awaitTime(1.5);

             case 20:
              _this4.moveWheel(0);

             case 21:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      moveWheel: function moveWheel(index) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var self, itemArr, min, max, rightIndex, targetRotation, spine1_Point_node, spine2_Point_node, haveWin, addCoin, offsetNumArr;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              self = _this5;
              itemArr = _this5._bonusGameInfo.result[index];
              Global.SlotsSoundMgr.playEffect("wheel_spin");
              _this5._node_wheel.getChildByName("pointSpine1").active = false;
              _this5._node_wheel.getChildByName("pointSpine2").active = false;
              min = Math.min.apply(null, itemArr);
              max = Math.max.apply(null, itemArr);
              rightIndex = min;
              if (BigDuel_Tools.numInArr(1, 40, itemArr)) {
                max -= 1;
                rightIndex = max;
              } else {
                min -= 1;
                rightIndex = min;
              }
              targetRotation = -9 * rightIndex - 1800;
              spine1_Point_node = _this5._node_wheel.getChildByName("pointSpine1");
              spine2_Point_node = _this5._node_wheel.getChildByName("pointSpine2");
              spine1_Point_node.active = true;
              spine1_Point_node.getComponent(sp.Skeleton).setAnimation(0, "animation" + _this5._pointType, true);
              _this5._yuan_di.runAction(cc.rotateBy(8, targetRotation));
              _context5.next = 17;
              return _this5.awaitTime(3);

             case 17:
              spine1_Point_node.getComponent(sp.Skeleton).setAnimation(0, "animation" + self._pointType + "_1", true);
              _context5.next = 20;
              return _this5.awaitTime(5);

             case 20:
              Global.SlotsSoundMgr.playEffect("wheel_win");
              spine1_Point_node.active = false;
              spine2_Point_node.active = true;
              spine2_Point_node.getComponent(sp.Skeleton).setAnimation(0, "animation" + self._pointType, false);
              _context5.next = 26;
              return _this5.awaitTime(.8);

             case 26:
              spine2_Point_node.active = false;
              _this5.playItemAni(itemArr, true);
              Global.SlotsSoundMgr.playEffect("wheel_win");
              _context5.next = 31;
              return _this5.awaitTime(2);

             case 31:
              haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              addCoin = _this5.getCoinByIndex(index);
              if (!(_this5._gameTimes > index + 1)) {
                _context5.next = 48;
                break;
              }
              _context5.next = 36;
              return cc.vv.gameData.GetSlotsScript().ShowBottomWin(addCoin, haveWin + addCoin, false, null, 1);

             case 36:
              _this5.playItemAni(itemArr, false);
              Global.SlotsSoundMgr.playEffect("transitionyun");
              _this5._spine_moon.active = true;
              _this5._spine_moon.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              offsetNumArr = {
                1: 0,
                2: -4.5,
                3: -9,
                4: -13.5
              };
              _this5._yuan_di.angle = offsetNumArr[_this5._pointType];
              _context5.next = 44;
              return _this5.awaitTime(1.5);

             case 44:
              _this5._spine_moon.active = false;
              _this5.moveWheel(index + 1);
              _context5.next = 51;
              break;

             case 48:
              _context5.next = 50;
              return cc.vv.gameData.GetSlotsScript().ShowBottomWin(addCoin, haveWin + addCoin, true, null, 1);

             case 50:
              _this5._bonusGameInfo.jackpot && _this5._bonusGameInfo.jackpot.id ? _this5.showJpAni() : _this5.exitWheelGame();

             case 51:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      getCoinByIndex: function getCoinByIndex(index) {
        var itemArr = this._bonusGameInfo.result[index];
        var wheelItems = this._bonusGameInfo.wheelItems;
        var totalCoin = 0;
        for (var key in itemArr) {
          var element = itemArr[key];
          var itemInfo = wheelItems[element - 1];
          if (itemInfo.mult) {
            var coin = cc.vv.gameData.GetTotalBet() * itemInfo.mult;
            console.log("\u83b7\u53d6\u7684\u91d1\u5e0111111", coin);
            totalCoin += coin;
          }
        }
        return totalCoin;
      },
      showJpAni: function showJpAni() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var jackpot, sureBtn, winCoinNode, aniName;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              jackpot = _this6._bonusGameInfo.jackpot.id;
              sureBtn = cc.find("sureBtn", _this6._node_win);
              winCoinNode = cc.find("winCoinNode", _this6._node_win);
              Global.SlotsSoundMgr.playEffect("dialog_jp_collect");
              sureBtn.active = false;
              winCoinNode.active = false;
              _this6._node_win.active = true;
              aniName = {
                1: 5,
                2: 4,
                3: 3,
                4: 2,
                5: 1
              };
              cc.find("jptanchuang", _this6._node_win).getComponent(sp.Skeleton).setAnimation(0, "animation" + aniName[jackpot], false);
              cc.tween(_this6.node).delay(.5).call(function() {
                sureBtn.active = true;
                winCoinNode.active = true;
                BigDuel_Tools.playSpineAni(cc.find("shuzikuang", winCoinNode));
                sureBtn.getChildByName("anniu").getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                cc.find("numBg/num", winCoinNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this6._bonusGameInfo.winCoin);
              }).delay(.5).call(function() {
                cc.find("jptanchuang", _this6._node_win).getComponent(sp.Skeleton).setAnimation(0, "animation" + aniName[jackpot] + "_1", true);
              }).start();
              _context6.next = 12;
              return cc.vv.gameData.awaitTime(.5);

             case 12:
              cc.vv.gameData.checkAutoPlay(sureBtn, function() {
                Global.SlotsSoundMgr.playEffect("popup_out");
                BigDuel_Tools.nodeAni(_this6._node_win, 3);
                _this6.scheduleOnce(function() {
                  _this6.exitWheelGame();
                }, .6);
              });

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playItemAni: function playItemAni(itemArr, isPlay) {
        for (var key in itemArr) {
          var element = itemArr[key];
          var itemInfo = this._bonusGameInfo.wheelItems[element - 1];
          var item = this._yuan_di.getChildByName("item" + (element - 1));
          var spineNode = void 0;
          var aniName = "animation";
          itemInfo.mult && (spineNode = item.getChildByName("lab").getChildByName("spineNode"));
          if (itemInfo.respin) {
            spineNode = item.getChildByName("png1").getChildByName("spineNode");
            var nameArr = {
              1: "animation_lv",
              2: "animation_lam",
              3: "animation_zi",
              4: "animation_hong",
              5: "animation_huang"
            };
            aniName = nameArr[itemInfo.respin];
          }
          if (itemInfo.jackpotId) {
            spineNode = item.getChildByName("png2").getChildByName("spineNode");
            var _nameArr = {
              1: "animation_lv",
              2: "animation_lan",
              3: "animation_zi",
              4: "animation_hong",
              5: "animation_huang"
            };
            aniName = _nameArr[itemInfo.jackpotId];
          }
          if (isPlay) {
            spineNode.active = true;
            spineNode.getComponent(sp.Skeleton).setAnimation(0, aniName, true);
          } else {
            spineNode.getComponent(sp.Skeleton).clearTracks();
            spineNode.active = false;
          }
        }
      },
      exitWheelGame: function exitWheelGame() {
        var _this7 = this;
        var self = this;
        cc.tween(this._node_wheel).by(.5, {
          y: -100,
          opacity: 0
        }).call(function() {
          self.node.active = false;
          self._node_wheel.y = -480;
          self._node_wheel.opacity = 255;
          for (var index = 0; index < 40; index++) {
            var item = cc.find("item" + index, _this7._yuan_di);
            item && item.removeFromParent();
          }
          cc.vv.gameData.GetSlotsScript().ExitBonusGame();
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(sucess, failed) {
          _this8.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools"
  } ],
  BigDuel_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94a14m2B0VBlK+ulPrA82wp", "BigDuel_symbol");
    "use strict";
    var BigDuel_Tools = require("./BigDuel_Tools");
    var maskHeight = 106;
    var maskWidth = 124;
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      SetRoseText: function SetRoseText(num) {
        var roseSpine = cc.find("roseSpine", this.node);
        var roseFlyLizi = cc.find("roseFlyLizi", this.node);
        var rose = cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose");
        var targetPos = BigDuel_Tools.convetOtherNodeSpace(roseSpine, rose);
        var cloneRoseSpine = cc.instantiate(roseSpine);
        cloneRoseSpine.setPosition(targetPos);
        cloneRoseSpine.parent = rose;
        var cloneRoseFlyLizi = cc.instantiate(roseFlyLizi);
        cloneRoseFlyLizi.setPosition(targetPos);
        cloneRoseFlyLizi.parent = rose;
        var aniName1 = "animation" + num / 5 + "_1";
        var aniName2 = "animation" + num / 5 + "_2";
        cloneRoseSpine.active = true;
        cloneRoseSpine.getComponent(sp.Skeleton).setAnimation(0, aniName2, false);
        cc.tween(cloneRoseSpine).delay(.3).call(function() {
          cloneRoseSpine.getComponent(sp.Skeleton).setAnimation(0, aniName1, false);
        }).delay(.1).to(.4, {
          position: cc.v2(0, 0)
        }).call(function() {
          cloneRoseSpine.removeFromParent();
        }).start();
        cc.tween(cloneRoseFlyLizi).delay(.5).call(function() {
          cloneRoseFlyLizi.active = true;
        }).to(.4, {
          position: cc.v2(0, 0)
        }).start();
      },
      Resume: function Resume(backup) {
        if (!backup) return;
        this._symbolIdx = backup.symbolIdx;
        this._id = backup.id;
        this._data = Global.copy(backup.data);
        this.ShowKuang(backup.isKuang);
        this.ShowNormal();
        var state = backup.state;
        "win" == state ? this.playWinAnimation() : "stop" == state ? this.playStopAnimation() : "idle" == state ? this.playidleAnimation() : "trigger" == state && this.playTriggerAnimation(true);
      },
      playTriggerAnimation: function playTriggerAnimation(bPlay) {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (bPlay) {
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
        } else this.setAnimationToTop(false);
        return isPlay;
      }
    });
    cc._RF.pop();
  }, {
    "./BigDuel_Tools": "BigDuel_Tools",
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "BigDuel_ButtonSafe", "BigDuel_Cfg", "BigDuel_GameData", "BigDuel_Logic", "BigDuel_Pop", "BigDuel_PrizePool", "BigDuel_Reel", "BigDuel_Slots", "BigDuel_Store", "BigDuel_Tools", "BigDuel_Wheel", "BigDuel_symbol" ]);