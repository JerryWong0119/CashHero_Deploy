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
  Odysseus_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82fd6D9NO9FUo1kxqzeoPBr", "Odysseus_ButtonSafe");
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
  Odysseus_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37d1bhVoy9LEahsBSC9ExaW", "Odysseus_Cfg");
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
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "s101",
        win_node: "w101",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2",
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
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Odysseus_Slots",
        Reels: "Odysseus_Reel",
        Symbols: "Odysseus_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 128,
        height: 130
      },
      helpItems: [ "games/Odysseus/prefab/LMSlots_Help_item1", "games/Odysseus/prefab/LMSlots_Help_item2", "games/Odysseus/prefab/LMSlots_Help_item3", "games/Odysseus/prefab/LMSlots_Help_item4", "games/Odysseus/prefab/LMSlots_Help_item5", "games/Odysseus/prefab/LMSlots_Help_item6", "games/Odysseus/prefab/LMSlots_Help_item7" ],
      autoModelDelay: 1,
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10 ],
      kuang: "kuang",
      speed: 1600,
      reelStopInter: .3,
      auto_stop_time: 1.2,
      bounce: true,
      commEffect: {
        path: "games/Odysseus/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      normalBgm: "base_bgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Odysseus/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti1",
        path: "games/Odysseus/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "reel_notify2",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Odysseus_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f94etKBdZB2pChXuacU8Cf", "Odysseus_GameData");
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
      SetWheelMarScript: function SetWheelMarScript(scp) {
        this._wheelScp = scp;
      },
      GetWheelMarScript: function GetWheelMarScript() {
        return this._wheelScp;
      },
      SetPickGameScript: function SetPickGameScript(scp) {
        this._pickGameScp = scp;
      },
      GetPickGameScript: function GetPickGameScript() {
        return this._pickGameScp;
      },
      SetJackpotUnlock: function SetJackpotUnlock(JackpotUnlock) {
        this.JackpotUnlock = JackpotUnlock;
      },
      GetJackpotUnlock: function GetJackpotUnlock() {
        return this.JackpotUnlock;
      },
      GetOpenPickGameBet: function GetOpenPickGameBet() {
        var needBet = this._deskInfo.needBet || 1;
        return this._deskInfo.mults[needBet - 1];
      },
      GetPickGameState: function GetPickGameState() {
        return this.PickGameState;
      },
      SetPickGameState: function SetPickGameState(state) {
        this.PickGameState = state;
      },
      GetPickGameProgress: function GetPickGameProgress() {
        return this.PickGameProgress;
      },
      SetPickGameProgress: function SetPickGameProgress(num) {
        this.PickGameProgress = num;
      },
      GetWheelItems: function GetWheelItems() {
        return this.WheelItems;
      },
      SetWheelItems: function SetWheelItems(WheelItems) {
        this.WheelItems = WheelItems;
      },
      IdxToBet: function IdxToBet(idx) {
        return this._deskInfo.mults[idx];
      },
      getBonusTrail: function getBonusTrail() {
        return this._gameInfo ? this._gameInfo.bonusTrail : this._deskInfo.bonusTrail;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Odysseus_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfe7f2caOxAfL8bgp3hJA9P", "Odysseus_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var cfg = cc.vv.gameData.getGameCfg();
        cc.vv.gameData.SetSlotsNode(cc.vv.gameData.GetSlotsScript().node);
        var node_pop = cc.find("node_pop_ui", safe_node);
        var script_pop = node_pop.addComponent("Odysseus_Pop");
        script_pop.Init();
        cc.vv.gameData.SetPopNodeScript(script_pop);
        var node_wheel = cc.find("slots/wheelNode", safe_node);
        var script_wheel = node_wheel.addComponent("Odysseus_Wheel_mar");
        script_wheel.Init();
        cc.vv.gameData.SetWheelMarScript(script_wheel);
        node_wheel.active = false;
        var node_pickGame = cc.find("pickGameNode", safe_node);
        var script_pickGame = node_pickGame.addComponent("Odysseus_PickGame");
        script_pickGame.Init();
        cc.vv.gameData.SetPickGameScript(script_pickGame);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Odysseus_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa6e8fEO0ZGW4uShhBvM/SW", "Odysseus_PickGame");
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
    var Odysseus_Tools = require("./Odysseus_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _wheelNode: cc.Node,
        _pickGameNode: cc.Node,
        _bagPanel: cc.Node,
        _pickBonus: null,
        _wheelItems: [],
        _pickItems: [],
        _pickState: 0,
        _pickIndex: 0,
        isOpen: false,
        curItemCnt: 0
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      Init: function Init() {
        this._wheelItems = [];
        var wheelNode = cc.find("wheelGame/wheelNode", this.node);
        this._wheelNode = wheelNode;
        var pickGameNode = cc.find("pickGame", this.node);
        this._pickGameNode = pickGameNode;
        this._bagPanel = cc.find("panel", this._pickGameNode);
        cc.find("pickGame/downNode", this.node).zIndex = 99;
        this._boosterWin = cc.find("Canvas/safe_node/pick_win");
        this._boosterWin.children.forEach(function(node) {
          node.active = false;
        });
        var yeNode = cc.find("yeNode", wheelNode);
        for (var index = 1; index <= 10; index++) {
          var cloneNode = void 0;
          cloneNode = 1 == index || 6 == index ? cc.instantiate(cc.find("node1", yeNode)) : cc.instantiate(cc.find("node2", yeNode));
          cloneNode.active = true;
          cloneNode.parent = yeNode;
          cloneNode.angle = 36 * -(index - 1);
          this._wheelItems.push(cloneNode);
        }
        var handNode = cc.find("handNode", wheelNode);
        Global.btnClickEvent(handNode, function() {
          this.clickHandNode();
        }, this);
        var spine_collect = cc.find("pickGame/spine_collect", this.node);
        var collectBtn = cc.find("pickGame/spine_collect/btn", this.node);
        Global.btnClickEvent(collectBtn, function() {
          this.clickCollectBtn();
        }, this);
      },
      clickHandNode: function clickHandNode() {
        var handNode = cc.find("wheelGame/wheelNode/handNode", this.node);
        handNode.stopAllActions();
        Global.SlotsSoundMgr.playEffect("pickwheel_spin");
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {};
        req.data.rtype = 1;
        cc.vv.NetManager.send(req, true);
        handNode.active = false;
      },
      clickCollectBtn: function clickCollectBtn() {
        var _this = this;
        var spine_collect = cc.find("pickGame/spine_collect", this.node);
        cc.find("pickGame/spine_collect/btn", this.node).stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        Odysseus_Tools.nodeAni(spine_collect, 3, function() {
          cc.vv.gameData.GetSlotsScript().ExitPickGame(_this._pickBonus);
        });
      },
      updateWheelItems: function updateWheelItems() {
        var wheelItemsData = this._pickBonus.wheelItems;
        for (var index = 0; index < wheelItemsData.length; index++) {
          var element = wheelItemsData[index];
          cc.find("lab", this._wheelItems[index]).getComponent(cc.Label).string = element.cnt;
        }
      },
      openPickGameNode: function openPickGameNode(pickBonus) {
        this.node.active = true;
        this._pickBonus = pickBonus;
        cc.find("bg0", this.node).active = false;
        cc.find("bg1", this.node).active = false;
        cc.find("bg2", this.node).active = false;
        cc.find("bg" + pickBonus.level, this.node).active = true;
        this._pickGameNode.active = false;
        cc.find("wheelGame", this.node).active = false;
        if (0 === pickBonus.state) {
          this.updateWheelItems();
          this._wheelNode.angle = 0;
          cc.find("wheelGame", this.node).active = true;
          cc.find("wheelGame", this.node).x = 0;
          cc.find("handNode", this._wheelNode).active = true;
          var self = this;
          cc.vv.gameData.checkAutoPlay(cc.find("handNode", this._wheelNode), function() {
            self.clickHandNode();
          });
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm("pick_wheel_bgm");
        } else {
          this._pickGameNode.active = true;
          this.startPick();
          Global.SlotsSoundMgr.stopBgm();
          pickBonus.level > 1 ? Global.SlotsSoundMgr.playBgm("pick2_bgm") : Global.SlotsSoundMgr.playBgm("pick_bgm");
        }
      },
      onRecvMsgSubAction: function onRecvMsgSubAction(msg) {
        if (200 === msg.code) {
          var data = msg.data;
          if (data.errMsg) return;
          if (1 === data.rtype) {
            this._pickBonus = data.pickBonus;
            this.startMove(data.resultId);
          }
        }
      },
      startMove: function startMove(resultId) {
        var self = this;
        var wheelGame = cc.find("wheelGame", this.node);
        var targetAngle = 36 * (resultId - 1) - 1440;
        var targetItem = cc.find("zhuanpan2", self._wheelItems[resultId - 1]);
        Global.SlotsSoundMgr.playEffect("pickwheel_roll");
        cc.tween(this._wheelNode).to(9.5, {
          angle: targetAngle
        }, {
          easing: "quadInOut"
        }).call(function() {
          if (targetItem) {
            targetItem.active = true;
            targetItem.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          }
          Global.SlotsSoundMgr.playEffect("pickwheel_collect");
        }).delay(2).call(function() {
          cc.tween(wheelGame).to(2, {
            x: 800
          }).start();
        }).delay(3).call(function() {
          targetItem.active = false;
          self.startPick();
        }).start();
      },
      startPick: function startPick() {
        this._pickGameNode.active = true;
        this._pickIndex = this._pickBonus.step ? this._pickBonus.step : 0;
        cc.find("pickGame/downNode", this.node).active = true;
        var lab1 = cc.find("downNode/lab1", this._pickGameNode);
        var lab2 = cc.find("downNode/lab2", this._pickGameNode);
        lab1.getComponent(cc.Label).string = this._pickIndex;
        lab2.getComponent(cc.Label).string = this._pickBonus.restCnt;
        this._pickState = 1;
        this._pickItems = [];
        this.curItemCnt = 0;
        this.schedule(this.pickGameCallback, 1);
      },
      exitPick: function exitPick() {
        this._pickState = 0;
        this._pickIndex = 0;
        this.isOpen = false;
        this.unschedule(this.pickGameCallback);
        var _iterator = _createForOfIteratorHelper(this._pickItems), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.removeFromParent();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        cc.find("pickGame/downNode", this.node).active = false;
        var items = this._pickBonus.items;
        var coinNum = 0;
        var _iterator2 = _createForOfIteratorHelper(items), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var iterator = _step2.value;
            if (iterator.coin) coinNum += iterator.coin; else {
              var _iterator3 = _createForOfIteratorHelper(iterator.booster), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  var i = _step3.value;
                  coinNum += i.coin * (iterator.mult || 1);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        Global.SlotsSoundMgr.stopBgm();
        2 == this._pickBonus.level ? Global.SlotsSoundMgr.playEffect("mega_dialog_collect_show") : 3 == this._pickBonus.level ? Global.SlotsSoundMgr.playEffect("super_dialog_collect_show") : Global.SlotsSoundMgr.playEffect("pick_dialog_collect_show");
        var aniArr = [ "2", "3", "1" ];
        var spine_collect = cc.find("pickGame/spine_collect", this.node);
        var spine = spine_collect.getComponent(sp.Skeleton);
        cc.find("lab", spine_collect).getComponent(cc.Label).string = Global.FormatNumToComma(coinNum);
        spine_collect.active = true;
        spine.setAnimation(0, "animation" + aniArr[this._pickBonus.level] + "_1", false);
        spine.addAnimation(0, "animation" + aniArr[this._pickBonus.level] + "_2", true);
        var btn = cc.find("pickGame/spine_collect/btn", this.node);
        cc.vv.gameData.checkAutoPlay(btn, this.clickCollectBtn.bind(this));
      },
      pickGameCallback: function pickGameCallback() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _loop, index;
          return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(_this2._pickItems.length > 10)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              _loop = regeneratorRuntime.mark(function _loop(index) {
                var cloneNode, bagNode, item;
                return regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    _this2.curItemCnt += 1;
                    cloneNode = void 0;
                    cloneNode = 0 === _this2._pickBonus.level ? cc.find("pickGame/bagNode1", _this2.node) : cc.find("pickGame/bagNode2", _this2.node);
                    bagNode = cc.instantiate(cloneNode);
                    bagNode.parent = _this2._bagPanel;
                    bagNode.y = _this2._bagPanel.height / 2 + bagNode.height;
                    _context.t0 = _this2._pickItems.length % 3;
                    _context.next = 0 === _context.t0 ? 9 : 1 === _context.t0 ? 11 : 2 === _context.t0 ? 13 : 15;
                    break;

                   case 9:
                    bagNode.x = 100 * Math.random() - 300;
                    return _context.abrupt("break", 16);

                   case 11:
                    bagNode.x = 100 * Math.random() - 50;
                    return _context.abrupt("break", 16);

                   case 13:
                    bagNode.x = 300 - 100 * Math.random();
                    return _context.abrupt("break", 16);

                   case 15:
                    return _context.abrupt("break", 16);

                   case 16:
                    bagNode.isOpen = false;
                    bagNode.active = true;
                    Global.btnClickEvent(bagNode, function() {
                      this.bagNodeClickFunc(bagNode);
                    }, _this2);
                    _this2._pickItems.push(bagNode);
                    if (cc.vv.gameData.isNeedAutoPlay() && _this2.curItemCnt > 6) {
                      _this2.curItemCnt = 0;
                      item = _this2._pickItems[Global.random(0, _this2._pickItems.length - 1)];
                      item.emit("click", item);
                    }
                    _context.next = 23;
                    return cc.vv.gameData.awaitTime(Math.random());

                   case 23:
                   case "end":
                    return _context.stop();
                  }
                }, _loop);
              });
              index = 0;

             case 4:
              if (!(index < Math.round(3 * Math.random()))) {
                _context2.next = 9;
                break;
              }
              return _context2.delegateYield(_loop(index), "t0", 6);

             case 6:
              index++;
              _context2.next = 4;
              break;

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee);
        }))();
      },
      openCoinBag: function openCoinBag(box, coin) {
        var lab = box.getChildByName("lab");
        lab.active = true;
        lab.getComponent(cc.Label).string = Global.formatNumShort(coin);
        var myBet = cc.vv.gameData.GetTotalBet();
        lab.getComponent(cc.Label).font = coin > 2 * myBet ? cc.vv.gameData.GetFontByName("theme234_pick1") : cc.vv.gameData.GetFontByName("theme234_pick3");
      },
      bagNodeClickFunc: function bagNodeClickFunc(btn, data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var self, gameData, slotsNode, item, lab1, req, _req, spine, lab, dz, bx, myBet, addCoin, haveWin;
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              cc.log("this.isOpen:", _this3.isOpen);
              if (!(_this3.isOpen || _this3._pickIndex >= _this3._pickBonus.restCnt)) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");

             case 3:
              _this3.curItemCnt = 0;
              self = _this3;
              gameData = cc.vv.gameData;
              Global.SlotsSoundMgr.playEffect("pick_open");
              slotsNode = cc.vv.gameData.GetSlotsNode();
              item = data || _this3._pickBonus.items[_this3._pickIndex];
              btn.isOpen = true;
              btn.zIndex = 20;
              _this3.isOpen = true;
              _this3._pickIndex++;
              lab1 = cc.find("pickGame/downNode/lab1", _this3.node);
              lab1.getComponent(cc.Label).string = _this3._pickIndex;
              req = {
                c: MsgId.SLOT_SUBGAME_DATA
              };
              req.gameid = cc.vv.gameData.getGameId();
              req.data = {};
              req.data.rtype = 4;
              req.data.step = _this3._pickIndex;
              cc.vv.NetManager.send(req, true);
              if (_this3._pickIndex == _this3._pickBonus.restCnt) {
                _req = {
                  c: MsgId.SLOT_SUBGAME_DATA
                };
                _req.gameid = cc.vv.gameData.getGameId();
                _req.data = {};
                _req.data.rtype = 2;
                cc.vv.NetManager.send(_req, true);
              }
              spine = btn.getChildByName("spine").getComponent(sp.Skeleton);
              lab = btn.getChildByName("lab");
              dz = btn.getChildByName("qe_dz01");
              bx = dz.getChildByName("qe_bx01");
              dz.active = false;
              bx.active = false;
              myBet = gameData.GetTotalBet();
              spine.setAnimation(0, "animation2", false);
              _context4.next = 32;
              return cc.vv.gameData.awaitTime(.3);

             case 32:
              if (!item.coin) {
                _context4.next = 42;
                break;
              }
              Global.SlotsSoundMgr.playEffect("coin_rollpick");
              _this3.openCoinBag(btn, item.coin);
              addCoin = item.coin;
              haveWin = gameData.GetBottomScript().getCurrentWin();
              gameData.AddCoin(addCoin);
              gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
              gameData.GetTopScript().ShowCoin();
              _context4.next = 44;
              break;

             case 42:
              if (!item.booster) {
                _context4.next = 44;
                break;
              }
              return _context4.delegateYield(regeneratorRuntime.mark(function _callee2() {
                var idx, boosterlbl, boosterspine, shoujiEff, coinTotal, _loop2, i, _ret, _idx, endNode, haveWin;
                return regeneratorRuntime.wrap(function _callee2$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    Global.SlotsSoundMgr.playEffect("pick_boost");
                    dz.active = true;
                    dz.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                    dz.getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
                    if (!item.mult) {
                      _context3.next = 10;
                      break;
                    }
                    _context3.next = 7;
                    return cc.vv.gameData.awaitTime(.5);

                   case 7:
                    bx.active = true;
                    idx = [ 2, 3, 5, 8, 10 ].indexOf(item.mult) + 1;
                    bx.getComponent(sp.Skeleton).setAnimation(0, "animation".concat(idx), false);

                   case 10:
                    _context3.next = 12;
                    return cc.vv.gameData.awaitTime(1.5);

                   case 12:
                    boosterlbl = _this3._boosterWin.getChildByName("lbl");
                    boosterspine = _this3._boosterWin.getChildByName("pick_zaq01");
                    shoujiEff = _this3._boosterWin.getChildByName("shouji_1");
                    _this3._boosterWin.active = true;
                    coinTotal = 0;
                    _loop2 = function _loop2(_i) {
                      var node = _this3._pickItems[Global.random(0, _this3._pickItems.length - 1)];
                      if (node == btn || !node.active || node.y > _this3._bagPanel.height / 2 || node.y < -_this3._bagPanel.height / 2) {
                        _i -= 1;
                        i = _i;
                        return "continue";
                      }
                      _this3._pickState = 0;
                      var eff = cc.instantiate(shoujiEff);
                      cc.tween(node).call(function() {
                        eff.active = true;
                        eff.parent = _this3._boosterWin;
                        eff.position = _this3._boosterWin.convertToNodeSpaceAR(btn.convertToWorldSpaceAR(cc.v2(0, 0)));
                        eff.getComponent(cc.ParticleSystem).resetSystem();
                        cc.tween(eff).to(.5, {
                          position: _this3._boosterWin.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)))
                        }).start();
                      }).delay(.5).call(function() {
                        eff.active = false;
                        _this3.openCoinBag(node, item.booster[_i].coin);
                      }).delay(2 + .5 * _i).call(function() {
                        var copyLbl = node.getChildByName("lab");
                        var lbl = cc.instantiate(copyLbl);
                        lbl.parent = _this3._boosterWin;
                        lbl.position = _this3._boosterWin.convertToNodeSpaceAR(copyLbl.convertToWorldSpaceAR(cc.v2(0, 0)));
                        cc.tween(lbl).to(.5, {
                          position: cc.v2(0, 0)
                        }).call(function() {
                          boosterlbl.active = true;
                          coinTotal += item.booster[_i].coin;
                          boosterlbl.getComponent(cc.Label).string = Global.formatNumShort(coinTotal);
                          item.booster[_i].coin > 2 * myBet ? boosterlbl.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme234_pick1") : boosterlbl.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme234_pick3");
                          boosterspine.active = true;
                          boosterspine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                          lbl.destroy();
                        }).start();
                        node.active = false;
                        self.initBagNode(node);
                      }).start();
                      i = _i;
                    };
                    i = 0;

                   case 19:
                    if (!(i < item.booster.length)) {
                      _context3.next = 26;
                      break;
                    }
                    _ret = _loop2(i);
                    if (!("continue" === _ret)) {
                      _context3.next = 23;
                      break;
                    }
                    return _context3.abrupt("continue", 23);

                   case 23:
                    i++;
                    _context3.next = 19;
                    break;

                   case 26:
                    _context3.next = 28;
                    return cc.vv.gameData.awaitTime(3 + .5 * item.booster.length);

                   case 28:
                    if (!item.mult) {
                      _context3.next = 35;
                      break;
                    }
                    _idx = [ 2, 3, 5, 8, 10 ].indexOf(item.mult) + 1;
                    bx.getComponent(sp.Skeleton).setAnimation(0, "animation1".concat(_idx, "_1"), false);
                    cc.tween(bx).to(.5, {
                      position: bx.convertToNodeSpaceAR(_this3._boosterWin.convertToWorldSpaceAR(cc.v2(0, 0)))
                    }).start();
                    _context3.next = 34;
                    return cc.vv.gameData.awaitTime(.5);

                   case 34:
                    boosterlbl.getComponent(cc.Label).string = Global.formatNumShort(coinTotal * item.mult);

                   case 35:
                    endNode = cc.vv.gameData.GetBottomScript().getWinLabelNor();
                    cc.tween(_this3._boosterWin).to(.5, {
                      position: _this3._boosterWin.convertToNodeSpaceAR(endNode.convertToWorldSpaceAR(cc.v2(0, 0)))
                    }).call(function() {
                      _this3._boosterWin.active = false;
                      _this3._boosterWin.children.forEach(function(node) {
                        node.active = false;
                        _this3._boosterWin.position = cc.v2(0, 0);
                      });
                    }).start();
                    _context3.next = 39;
                    return cc.vv.gameData.awaitTime(.5);

                   case 39:
                    haveWin = gameData.GetBottomScript().getCurrentWin();
                    gameData.AddCoin(coinTotal * (item.mult || 1));
                    gameData.GetBottomScript().ShowWin(coinTotal * (item.mult || 1) + haveWin, 3, haveWin, null, .3);
                    gameData.GetTopScript().ShowCoin();
                    _this3._pickState = 1;

                   case 44:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee2);
              })(), "t0", 44);

             case 44:
              _context4.next = 46;
              return cc.vv.gameData.awaitTime(.5);

             case 46:
              self.isOpen = false;
              btn.active = false;
              self.initBagNode(btn);
              _this3._pickIndex === _this3._pickBonus.restCnt && _this3.exitPick();

             case 50:
             case "end":
              return _context4.stop();
            }
          }, _callee3);
        }))();
      },
      initBagNode: function initBagNode(bagNode) {
        var spine = bagNode.getChildByName("spine").getComponent(sp.Skeleton);
        var lab = bagNode.getChildByName("lab");
        var dz = bagNode.getChildByName("qe_dz01");
        var bx = dz.getChildByName("qe_bx01");
        lab.active = false;
        dz.active = false;
        bx.active = false;
        spine.setAnimation(0, "animation1", true);
        bagNode.y = this._bagPanel.height / 2 + bagNode.height;
        bagNode.isOpen = false;
        bagNode.active = true;
        bagNode.zIndex = 3;
      },
      update: function update(dt) {
        if (1 != this._pickState) return;
        var speed = 200;
        var _iterator4 = _createForOfIteratorHelper(this._pickItems), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var item = _step4.value;
            if (!item.isOpen) {
              item.y -= speed * dt;
              if (item.y < -(this._bagPanel.height + item.height) / 2) {
                item.y = (this._bagPanel.height + item.height) / 2;
                this.curItemCnt += 1;
                if (cc.vv.gameData.isNeedAutoPlay() && this.curItemCnt > 6) {
                  this.curItemCnt = 0;
                  var _item = this._pickItems[Global.random(0, this._pickItems.length - 1)];
                  _item.emit("click", _item);
                }
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    "./Odysseus_Tools": "Odysseus_Tools"
  } ],
  Odysseus_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "054c3UbzaNIH6UtrtaDbOoG", "Odysseus_Pop");
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
    var Odysseus_Tools = require("./Odysseus_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {},
      Init: function Init() {
        var self = this;
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 != msg.code) return;
        var data = msg.data;
      },
      updateUi: function updateUi() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var iterator = _step.value;
            "pop_bg" != iterator.name && (iterator.active = false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      openJpNode: function openJpNode(coinNum, jpNum, successFunc) {
        this.updateUi();
        this._jpSuccessFunc = successFunc;
        this.node.active = true;
        var rapidNode = cc.find("rapid", this.node);
        rapidNode.active = true;
        rapidNode.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
        rapidNode.getComponent(sp.Skeleton).addAnimation(0, "animation1_2", true);
        cc.tween(this.node).delay(.5).call(function() {
          cc.find("lab1", rapidNode).active = true;
          cc.find("lab2", rapidNode).active = true;
          cc.find("btn", rapidNode).active = true;
        }).start();
        cc.find("lab1", rapidNode).getComponent(cc.Label).string = Global.FormatNumToComma(coinNum);
        cc.find("lab2", rapidNode).getComponent(cc.Label).string = jpNum;
        var self = this;
        var func = function func() {
          cc.find("rapid/btn", self.node).stopAllActions();
          var rapidNode = cc.find("rapid", self.node);
          rapidNode.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", false);
          cc.tween(self.node).delay(.5).call(function() {
            cc.find("lab1", rapidNode).active = false;
            cc.find("lab2", rapidNode).active = false;
            cc.find("btn", rapidNode).active = false;
          }).start();
          rapidNode.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if ("animation1_3" === name) {
              self.node.active = false;
              self._jpSuccessFunc();
            }
          });
        };
        var collectBtn = cc.find("rapid/btn", this.node);
        cc.vv.gameData.checkAutoPlay(collectBtn, func);
        collectBtn.off("click");
        collectBtn.on("click", function() {
          collectBtn.stopAllActions();
          func();
        });
      },
      openBoost: function openBoost() {
        var self = this;
        this.updateUi();
        this.node.active = true;
        var boost = cc.find("boost", this.node);
        boost.active = true;
        boost.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        boost.getComponent(sp.Skeleton).setCompleteListener(function() {
          boost.active = false;
          self.node.active = false;
        });
      },
      openWheelCollectNode: function openWheelCollectNode(coinNum) {
        Global.SlotsSoundMgr.stopBgm();
        this.updateUi();
        Global.SlotsSoundMgr.playEffect("bonus_dialog_collect_show");
        this.node.active = true;
        var wheelCollectNode = cc.find("wheelCollectNode", this.node);
        wheelCollectNode.active = true;
        wheelCollectNode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        wheelCollectNode.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
        cc.tween(this.node).delay(.5).call(function() {
          cc.find("lab1", wheelCollectNode).active = true;
          cc.find("btn", wheelCollectNode).active = true;
        }).start();
        cc.find("lab1", wheelCollectNode).getComponent(cc.Label).string = Global.FormatNumToComma(coinNum);
        var self = this;
        var func = function func() {
          var wheelCollectNode = cc.find("wheelCollectNode", self.node);
          wheelCollectNode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          cc.tween(self.node).delay(.5).call(function() {
            cc.find("lab1", wheelCollectNode).active = false;
            cc.find("btn", wheelCollectNode).active = false;
          }).start();
          Odysseus_Tools.nodeAni(wheelCollectNode, 3, function() {
            self.node.active = false;
            cc.vv.gameData.GetSlotsScript().ExitWheelGame();
          });
        };
        var btn = cc.find("wheelCollectNode/btn", this.node);
        cc.vv.gameData.checkAutoPlay(btn, func);
        btn.off("click");
        btn.on("click", function() {
          btn.stopAllActions();
          func();
        });
      },
      openWheelJpNode: function openWheelJpNode(jpId, coinNum) {
        var gameData = cc.vv.gameData;
        this.updateUi();
        this.node.active = true;
        var nodeNameArr = [ "jpNode1", "jpNode1", "jpNode2", "jpNode2", "jpNode3" ];
        var spineNameArr = [ "1", "2", "1", "2", "1" ];
        var wheelJpNode = cc.find("wheelJpNode", this.node);
        cc.find("jpNode3", wheelJpNode).active = false;
        cc.find("jpNode2", wheelJpNode).active = false;
        cc.find("jpNode1", wheelJpNode).active = false;
        var jpNode = cc.find(nodeNameArr[jpId - 1], wheelJpNode);
        jpNode.active = true;
        wheelJpNode.active = true;
        console.log("---1openWheelJpNode", jpId, coinNum, jpNode);
        switch (jpId) {
         case 1:
          Global.SlotsSoundMgr.playEffect("mini_jackpot");
          break;

         case 2:
          Global.SlotsSoundMgr.playEffect("minor_jackpot");
          break;

         case 3:
          Global.SlotsSoundMgr.playEffect("major_jackpot");
          break;

         case 4:
          Global.SlotsSoundMgr.playEffect("mega_jackpot");
          break;

         case 5:
          Global.SlotsSoundMgr.playEffect("grand_jackpot");
        }
        jpNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + spineNameArr[jpId - 1] + "_1", false);
        jpNode.getComponent(sp.Skeleton).addAnimation(0, "animation" + spineNameArr[jpId - 1] + "_2", true);
        cc.tween(this.node).delay(.5).call(function() {
          cc.find("lab1", wheelJpNode).active = true;
          cc.find("btn", wheelJpNode).active = true;
        }).start();
        cc.find("lab1", wheelJpNode).getComponent(cc.Label).string = Global.FormatNumToComma(coinNum);
        var self = this;
        var func = function func() {
          Global.SlotsSoundMgr.playEffect("popup_out");
          var wheelJpNode = cc.find("wheelJpNode", self.node);
          cc.tween(self.node).delay(.5).call(function() {
            cc.find("lab1", wheelJpNode).active = false;
            cc.find("btn", wheelJpNode).active = false;
          }).start();
          Odysseus_Tools.nodeAni(wheelJpNode, 3, function() {
            self.node.active = false;
          });
        };
        var btn = cc.find("wheelJpNode/btn", this.node);
        cc.vv.gameData.checkAutoPlay(btn, func);
        btn.off("click");
        btn.on("click", function() {
          btn.stopAllActions();
          func();
        });
      },
      openNormalNode: function openNormalNode(coinNum) {
        this.updateUi();
        this.node.active = true;
        var normalCollectNode = cc.find("normalCollectNode", this.node);
        normalCollectNode.active = true;
        normalCollectNode.getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
        normalCollectNode.getComponent(sp.Skeleton).addAnimation(0, "animation2_2", true);
        cc.tween(this.node).delay(.5).call(function() {
          cc.find("lab1", normalCollectNode).active = true;
          cc.find("btn", normalCollectNode).active = true;
        }).start();
        cc.find("lab1", normalCollectNode).getComponent(cc.Label).string = Global.FormatNumToComma(coinNum);
        var self = this;
        var func = function func() {
          Global.SlotsSoundMgr.playEffect("popup_out");
          var normalCollectNode = cc.find("normalCollectNode", self.node);
          cc.tween(self.node).delay(.5).call(function() {
            cc.find("lab1", normalCollectNode).active = false;
            cc.find("btn", normalCollectNode).active = false;
          }).start();
          Odysseus_Tools.nodeAni(normalCollectNode, 3, function() {
            self.node.active = false;
          });
        };
        var btn = cc.find("normalCollectNode/btn", this.node);
        cc.vv.gameData.checkAutoPlay(btn, func);
        btn.off("click");
        btn.on("click", function() {
          btn.stopAllActions();
          func();
        });
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Odysseus_Tools": "Odysseus_Tools"
  } ],
  Odysseus_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b917cFT2ZBDEIsijLW+8zYE", "Odysseus_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        console.log("---ShowNodeLockByNode", node, bLock, unLockBet, poolType, bInit);
        var parentNode = node.parent;
        var callFunc;
        if (bLock) {
          Global.SlotsSoundMgr.playEffect("jp_lock");
          cc.find("lock", parentNode).active = true;
          cc.find("lock", parentNode).getComponent(sp.Skeleton).setAnimation(0, "animation" + (5 - poolType), false);
          callFunc = function callFunc() {
            cc.find("bg", parentNode).active = false;
            cc.find("bgDi", parentNode).active = true;
            cc.find("num", parentNode).active = false;
            cc.find("numDi", parentNode).active = true;
            if (cc.find("num1", parentNode)) {
              cc.find("num1", parentNode).active = false;
              cc.find("num1Di", parentNode).active = true;
              cc.find("zi1", parentNode).active = false;
              cc.find("zi1Di", parentNode).active = true;
            }
            cc.find("zi", parentNode).active = false;
            cc.find("ziDi", parentNode).active = true;
            cc.find("prizePool/lbl_num", parentNode).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme234_jp2");
          };
        } else {
          Global.SlotsSoundMgr.playEffect("jp_unlock");
          cc.find("unlock", parentNode).active = true;
          cc.find("unlock", parentNode).getComponent(sp.Skeleton).setAnimation(0, "animation" + (5 - poolType), false);
          callFunc = function callFunc() {
            cc.find("bg", parentNode).active = true;
            cc.find("bgDi", parentNode).active = false;
            cc.find("num", parentNode).active = true;
            cc.find("numDi", parentNode).active = false;
            if (cc.find("num1", parentNode)) {
              cc.find("num1", parentNode).active = true;
              cc.find("num1Di", parentNode).active = false;
              cc.find("zi1", parentNode).active = true;
              cc.find("zi1Di", parentNode).active = false;
            }
            cc.find("zi", parentNode).active = true;
            cc.find("ziDi", parentNode).active = false;
          };
          cc.find("prizePool/lbl_num", parentNode).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme234_jp");
        }
        cc.tween(parentNode).delay(.2).call(callFunc).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Odysseus_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7be8G50tNH4aMZpuk40AeK", "Odysseus_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      playReelStop: function playReelStop() {
        this._super();
      },
      OnReelHeigtChange: function OnReelHeigtChange(nAddHeight) {
        this._super(nAddHeight);
      },
      StartRecycleSymbol: function StartRecycleSymbol(nTime) {
        var cfg = cc.vv.gameData.getGameCfg();
        var localRow = cfg.row + 1;
        if (this._symbols.length > localRow) {
          var nCount = -(this._symbols.length - (cfg.row + 1));
          this.AddCount(nCount, nTime);
        }
      },
      setBeiShu: function setBeiShu(num) {
        for (var i = 0; i < this._symbols.length; i++) {
          var element = this._symbols[i];
          element.setBeiShu(num);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Odysseus_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b862fIKGsBL6YmOc6CYcmp3", "Odysseus_Slots");
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
    var Odysseus_Tools = require("./Odysseus_Tools");
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {},
      onLoad: function onLoad() {
        var _this = this;
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
        var unLockNode = cc.find("reels_frame/frameUp/unLockNode", this.node);
        Global.btnClickEvent(unLockNode, function() {
          _this.onBtnCollect();
        }, this);
      },
      onEnable: function onEnable() {},
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
        var multIdxs = msg.multIdxs;
        var jackpotInfo = msg.jackpotInfo;
        var pickBonus = msg.pickBonus;
        if (jackpotInfo) {
          Global.SlotsSoundMgr.playEffect("notify");
          cc.find("reels_frame/qipanjili", this.node).active = true;
          cc.find("reels_frame/qipanjili", this.node).getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        }
        pickBonus;
        for (var i = 0; i < this._reels.length; i++) this._reels[i].setBeiShu();
        if (multIdxs) {
          var _iterator = _createForOfIteratorHelper(multIdxs), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              var symbol = this.GetSymbolByIdx(item.idx);
              symbol.setBeiShu(item.mult);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.find("reels_frame/qipanjili", _this2.node).active = false;
              cc.find("reels_frame/heidi", _this2.node).active = false;
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              if (!_this2._gameInfo.jackpotInfo) {
                _context.next = 11;
                break;
              }
              _this2.playJpAni(true);
              Global.SlotsSoundMgr.playEffect("rapid_dialog_collect_show1");
              _context.next = 11;
              return new Promise(function(sucess, failed) {
                _this2.CheckJackpotInfo(sucess);
              });

             case 11:
              _context.next = 13;
              return new Promise(function(sucess, failed) {
                var isUpdate = true;
                _this2.ShowBottomWin(nWin, nTotal, isUpdate, function() {
                  sucess();
                });
              });

             case 13:
              if (!_this2._gameInfo.pickBonus) {
                _context.next = 18;
                break;
              }
              _context.next = 16;
              return _this2.CheckPickBonus(_this2._gameInfo.pickBonus, _this2._gameInfo.bonusTrail);

             case 16:
              _context.next = 24;
              break;

             case 18:
              if (!_this2._gameInfo.wheelGame) {
                _context.next = 23;
                break;
              }
              _context.next = 21;
              return _this2.CheckWheelGame(_this2._gameInfo.wheelGame);

             case 21:
              _context.next = 24;
              break;

             case 23:
              _this2.CanDoNextRound();

             case 24:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      CheckJackpotInfo: function CheckJackpotInfo(sucessFunc) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var gameData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              gameData = cc.vv.gameData;
              Global.SlotsSoundMgr.playEffect("symbol_bonus");
              _context2.next = 4;
              return _this3.awaitTime(4);

             case 4:
              Global.SlotsSoundMgr.playEffect("bell");
              gameData.GetPopNodeScript().openJpNode(_this3._gameInfo.jackpotInfo.winCoin, _this3._gameInfo.jackpotInfo.idxs.length, sucessFunc);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckPickBonus: function CheckPickBonus(pickBonus, bonusTrail) {
        var _arguments = arguments, _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var bReconnect, heidi, pick_cfNode, mega_cfNode, super_cfNode, cdNodeArr, qiepingNode;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              bReconnect = _arguments.length > 2 && void 0 !== _arguments[2] && _arguments[2];
              _this4.stopAllSymbolAni();
              Global.SlotsSoundMgr.playEffect("bell");
              bonusTrail && _this4.SetPickGameProgress(bonusTrail.count, true);
              if (bReconnect) {
                _context3.next = 9;
                break;
              }
              _this4.playPickAni(true);
              _context3.next = 8;
              return _this4.awaitTime(3);

             case 8:
              _this4.stopAllSymbolAni();

             case 9:
              Global.SlotsSoundMgr.stopBgm();
              _context3.t0 = pickBonus.level;
              _context3.next = 1 === _context3.t0 ? 13 : 2 === _context3.t0 ? 15 : 3 === _context3.t0 ? 17 : 19;
              break;

             case 13:
              Global.SlotsSoundMgr.playEffect("pick_dialog_start_show");
              return _context3.abrupt("break", 20);

             case 15:
              Global.SlotsSoundMgr.playEffect("mega_dialog_start_show");
              return _context3.abrupt("break", 20);

             case 17:
              Global.SlotsSoundMgr.playEffect("super_dialog_start_show");
              return _context3.abrupt("break", 20);

             case 19:
              return _context3.abrupt("break", 20);

             case 20:
              heidi = cc.find("reels_frame/heidi", _this4.node);
              pick_cfNode = cc.find("reels_frame/pick_cf", _this4.node);
              mega_cfNode = cc.find("reels_frame/mega_cf", _this4.node);
              super_cfNode = cc.find("reels_frame/super_cf", _this4.node);
              cdNodeArr = [ pick_cfNode, mega_cfNode, super_cfNode ];
              cdNodeArr[pickBonus.level].active = true;
              heidi.active = true;
              cdNodeArr[pickBonus.level].getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              cdNodeArr[pickBonus.level].getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
              cdNodeArr[pickBonus.level].getComponent(sp.Skeleton).addAnimation(0, "animation3", true);
              _context3.next = 32;
              return _this4.awaitTime(3);

             case 32:
              cdNodeArr[pickBonus.level].active = false;
              heidi.active = false;
              if (0 === pickBonus.level) {
                Global.SlotsSoundMgr.playEffect("transition_bonus");
                qiepingNode = cc.find("Canvas/safe_node/qieping1");
              } else {
                Global.SlotsSoundMgr.playEffect("transition_super");
                qiepingNode = cc.find("Canvas/safe_node/qieping2");
              }
              qiepingNode.active = true;
              qiepingNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              qiepingNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                qiepingNode.active = false;
              });
              _context3.next = 40;
              return _this4.awaitTime(1.2);

             case 40:
              cc.vv.gameData.GetPickGameScript().openPickGameNode(pickBonus);

             case 41:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      ExitPickGame: function ExitPickGame(pickBonus) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var qiepingNode, bonusTrail, haveWin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (0 === pickBonus.level) {
                Global.SlotsSoundMgr.playEffect("transition_bonus");
                qiepingNode = cc.find("Canvas/safe_node/qieping1");
              } else {
                Global.SlotsSoundMgr.playEffect("transition_super");
                qiepingNode = cc.find("Canvas/safe_node/qieping2");
              }
              qiepingNode.active = true;
              qiepingNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context4.next = 5;
              return _this5.awaitTime(1.2);

             case 5:
              cc.find("Canvas/safe_node/pickGameNode").active = false;
              bonusTrail = cc.vv.gameData.getBonusTrail();
              bonusTrail.count == bonusTrail.totalCount && _this5.SetPickGameProgress(0);
              _context4.next = 10;
              return _this5.awaitTime(1);

             case 10:
              qiepingNode.active = false;
              haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              _context4.next = 14;
              return cc.vv.gameData.GetSlotsScript().ShowBottomWin(haveWin, haveWin, false, null, 1);

             case 14:
              _this5.CanDoNextRound();
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();

             case 17:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckWheelGame: function CheckWheelGame(wheelGame) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var gameData, bonus_cfNode, heidi, reels_bg, reels, reels_frame, top_ani, addCoin, haveWin, role;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              gameData = cc.vv.gameData;
              _this6.stopAllSymbolAni();
              _this6.playWheelAni(true);
              Global.SlotsSoundMgr.playEffect("symbol_bonus");
              _context5.next = 6;
              return _this6.awaitTime(1);

             case 6:
              Global.SlotsSoundMgr.playEffect("bell");
              _context5.next = 9;
              return _this6.awaitTime(1.5);

             case 9:
              _this6.playWheelAni(false);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("bonus_dialog_start_show");
              bonus_cfNode = cc.find("reels_frame/bonus_cf", _this6.node);
              heidi = cc.find("reels_frame/heidi", _this6.node);
              bonus_cfNode.active = true;
              bonus_cfNode.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              bonus_cfNode.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
              heidi.active = true;
              _context5.next = 20;
              return _this6.awaitTime(3);

             case 20:
              bonus_cfNode.getComponent(sp.Skeleton).addAnimation(0, "animation3", false);
              _context5.next = 23;
              return _this6.awaitTime(1);

             case 23:
              bonus_cfNode.active = false;
              heidi.active = false;
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              reels_bg = cc.find("reels_bg", _this6.node);
              reels = cc.find("reels", _this6.node);
              reels_frame = cc.find("reels_frame", _this6.node);
              top_ani = cc.find("top_ani", _this6.node);
              reels_bg.runAction(cc.moveTo(.8, cc.v2(0, -1050)));
              reels.runAction(cc.moveTo(.8, cc.v2(0, -1050)));
              reels_frame.runAction(cc.moveTo(.8, cc.v2(0, -1050)));
              top_ani.runAction(cc.moveTo(.8, cc.v2(0, -1050)));
              if (wheelGame.winCoin > 0) {
                addCoin = wheelGame.winCoin;
                haveWin = gameData.GetBottomScript().getCurrentWin();
                gameData.AddCoin(addCoin);
                gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
                gameData.GetTopScript().ShowCoin();
              }
              _context5.next = 38;
              return _this6.awaitTime(.3);

             case 38:
              role = cc.find("Canvas/safe_node/role");
              role.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              _context5.next = 42;
              return _this6.awaitTime(.7);

             case 42:
              cc.find("wheelNode", _this6.node).active = true;
              cc.find("LMSlots_Panel_Click", _this6.node).active = false;
              cc.vv.gameData.GetWheelMarScript().openWheelGame(true, wheelGame);
              cc.vv.gameData.showOtherSysNode(false);

             case 46:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      ExitWheelGame: function ExitWheelGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var reels_bg, reels, reels_frame, top_ani, haveWin;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              reels_bg = cc.find("reels_bg", _this7.node);
              reels = cc.find("reels", _this7.node);
              reels_frame = cc.find("reels_frame", _this7.node);
              top_ani = cc.find("top_ani", _this7.node);
              reels_bg.runAction(cc.moveTo(.8, cc.v2(0, -482)));
              reels.runAction(cc.moveTo(.8, cc.v2(0, -482)));
              reels_frame.runAction(cc.moveTo(.8, cc.v2(0, -482)));
              top_ani.runAction(cc.moveTo(.8, cc.v2(0, -677)));
              cc.vv.gameData.GetWheelMarScript().openWheelGame(false);
              cc.vv.gameData.showOtherSysNode(true);
              _context6.next = 12;
              return _this7.awaitTime(.8);

             case 12:
              _this7.playWheelAni(true);
              cc.find("wheelNode", _this7.node).active = false;
              cc.find("role", _this7.node.parent).active = true;
              cc.find("role", _this7.node.parent).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              cc.find("LMSlots_Panel_Click", _this7.node).active = true;
              _context6.next = 19;
              return _this7.awaitTime(1);

             case 19:
              haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              _context6.next = 22;
              return cc.vv.gameData.GetSlotsScript().ShowBottomWin(haveWin, haveWin, false, null, 1);

             case 22:
              _this7.CanDoNextRound();
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();

             case 25:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var gameData, deskInfo, tanChuangNode, entry;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              gameData = cc.vv.gameData;
              deskInfo = gameData._deskInfo;
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              console.log("---1IsPrizePoolLock", gameData.IsPrizePoolLock(0));
              console.log("---1IsPrizePoolLock", gameData.IsPrizePoolLock(1));
              console.log("---1IsPrizePoolLock", gameData.IsPrizePoolLock(2));
              console.log("---1IsPrizePoolLock", gameData.IsPrizePoolLock(3));
              console.log("---1IsPrizePoolLock", gameData.IsPrizePoolLock(4));
              gameData.SetWheelItems(deskInfo.wheelItems);
              gameData.GetWheelMarScript().updateWheelItems(deskInfo.wheelItems);
              _this8.SetPickGameProgress(deskInfo.bonusTrail.count);
              Global.SlotsSoundMgr.playEffect("welcome");
              tanChuangNode = cc.find("Canvas/safe_node/tanchuang");
              tanChuangNode.active = true;
              cc.find("tanchuangSpine", tanChuangNode).getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              cc.find("tanchuangSpine", tanChuangNode).getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
              entry = cc.find("tanchuangSpine", tanChuangNode).getComponent(sp.Skeleton).addAnimation(0, "animation3", false);
              _context7.next = 19;
              return new Promise(function(succ) {
                cc.find("tanchuangSpine", tanChuangNode).getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                  tanChuangNode.active = false;
                  succ();
                });
                var btn = cc.find("btn", tanChuangNode);
                Global.btnClickEvent(btn, function() {
                  tanChuangNode.active = false;
                  succ();
                });
              });

             case 19:
              gameData.SetPickGameState(true);
              _this8.checkPickEntrance();
              if (!deskInfo.pickBonus) {
                _context7.next = 26;
                break;
              }
              _context7.next = 24;
              return _this8.CheckPickBonus(deskInfo.pickBonus, null, true);

             case 24:
              _context7.next = 32;
              break;

             case 26:
              if (!deskInfo.wheelGame) {
                _context7.next = 31;
                break;
              }
              _context7.next = 29;
              return _this8.CheckWheelGame(deskInfo.wheelGame);

             case 29:
              _context7.next = 32;
              break;

             case 31:
              _this8.CanDoNextRound();

             case 32:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data, bInit) {
        var gameData = cc.vv.gameData;
        gameData.GetWheelMarScript().updateWheelItems();
        this.checkPickEntrance();
      },
      checkPickEntrance: function checkPickEntrance() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var gameData, needBet, myBet, state, unLockNode, spineJiesuo, spineSs;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              gameData = cc.vv.gameData;
              needBet = gameData.GetOpenPickGameBet();
              myBet = gameData.GetTotalBet();
              state = gameData.GetPickGameState();
              unLockNode = cc.find("reels_frame/frameUp/unLockNode", _this9.node);
              spineJiesuo = cc.find("spineJiesuo", unLockNode);
              spineSs = cc.find("spineSs", unLockNode);
              spineJiesuo.active = false;
              spineSs.active = false;
              if (!(myBet >= needBet && !state)) {
                _context8.next = 21;
                break;
              }
              Global.SlotsSoundMgr.playEffect("collect_unlock");
              gameData.SetPickGameState(true);
              Global.SlotsSoundMgr.playEffect("unlock");
              spineJiesuo.active = true;
              cc.find("unLockedNode", unLockNode).active = true;
              spineJiesuo.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context8.next = 18;
              return cc.vv.gameData.awaitTime(.5);

             case 18:
              spineJiesuo.active = false;
              _context8.next = 22;
              break;

             case 21:
              if (myBet < needBet && state) {
                Global.SlotsSoundMgr.playEffect("collect_lock");
                gameData.SetPickGameState(false);
                Global.SlotsSoundMgr.playEffect("lock");
                spineSs.active = true;
                cc.find("unLockedNode", unLockNode).active = false;
                spineSs.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spineSs.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  "animation" === name && spineSs.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                });
              }

             case 22:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      SetPickGameProgress: function SetPickGameProgress(count, isMove) {
        var gameData = cc.vv.gameData;
        var unLockedNode = cc.find("reels_frame/frameUp/unLockNode/unLockedNode", this.node);
        var qieNode = cc.find("qie", unLockedNode);
        qieNode.active = true;
        if (0 === count) qieNode.active = false; else if (isMove) {
          Global.SlotsSoundMgr.playEffect("collect_light");
          cc.tween(qieNode).to(.5, {
            x: cc.find("ld" + count, unLockedNode).x
          }).start();
        } else qieNode.x = cc.find("ld" + count, unLockedNode).x;
        for (var index = 1; index <= 18; index++) {
          var IdNode = cc.find("ld" + index, unLockedNode);
          var adNode = cc.find("ad" + index, unLockedNode);
          adNode.active = count < index;
          IdNode.active = count >= index;
        }
        gameData.SetPickGameProgress(count);
      },
      onBtnCollect: function onBtnCollect() {
        var gameData = cc.vv.gameData;
        if ("idle" !== gameData.GetSlotState()) return;
        var status = gameData.GetPickGameState();
        var needBet = gameData.GetOpenPickGameBet();
        if (status) {
          var unLockNode = cc.find("reels_frame/frameUp/unLockNode", this.node);
          cc.find("tipNode", unLockNode).active = true;
          cc.find("tipNode", unLockNode).scale = 0;
          cc.find("tipNode", unLockNode).stopAllActions();
          cc.tween(cc.find("tipNode", unLockNode)).to(.2, {
            scale: 1
          }).delay(2).to(.2, {
            scale: 0
          }).call(function() {
            cc.find("tipNode", unLockNode).active = false;
            cc.find("tipNode", unLockNode).scale = 1;
          }).start();
        } else {
          var unLockLv = gameData.BetToIdx(needBet);
          if (unLockLv) {
            var bottom = gameData.GetBottomScript();
            bottom.SetBetIdx(unLockLv);
            gameData.SetPickGameState(true);
          }
        }
      },
      stopAllSymbolAni: function stopAllSymbolAni() {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i = 0; _i < item._symbols.length; _i++) {
            var element = item._symbols[_i];
            element.ShowNormal();
            element.ShowKuang(false);
          }
        }
      },
      playWheelAni: function playWheelAni(isPlay) {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i2 = 0; _i2 < item._symbols.length; _i2++) {
            var element = item._symbols[_i2];
            element.playWheelAnimation(isPlay);
          }
        }
      },
      playPickAni: function playPickAni(isPlay) {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i3 = 0; _i3 < item._symbols.length; _i3++) {
            var element = item._symbols[_i3];
            element.playPickAnimation(isPlay);
          }
        }
      },
      playJpAni: function playJpAni(isPlay) {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i4 = 0; _i4 < item._symbols.length; _i4++) {
            var element = item._symbols[_i4];
            element.playJackpotAnimation(isPlay);
          }
        }
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
    "./Odysseus_Tools": "Odysseus_Tools",
    LMSlots_Slots_Base: void 0
  } ],
  Odysseus_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a78662cdVtLGryALEgqh3jZ", "Odysseus_Symbol");
    "use strict";
    var Odysseus_Tools = require("./Odysseus_Tools");
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
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
      },
      setBeiShu: function setBeiShu(num) {
        var beiShuNode = cc.find("beiShu", this.node);
        if (num) {
          beiShuNode.active = true;
          cc.find("2x", beiShuNode).active = false;
          cc.find("3x", beiShuNode).active = false;
          cc.find("5x", beiShuNode).active = false;
          cc.find(num + "x", beiShuNode).active = true;
        } else beiShuNode.active = false;
      },
      playWheelAnimation: function playWheelAnimation(bPlay) {
        var isPlay = false;
        var id = this._id;
        if (3 != id) return;
        isPlay = this.playTriggerAnimation(bPlay);
        return isPlay;
      },
      playPickAnimation: function playPickAnimation(bPlay) {
        var isPlay = false;
        var id = this._id;
        if (2 != id) return;
        isPlay = this.playTriggerAnimation(bPlay);
        return isPlay;
      },
      playJackpotAnimation: function playJackpotAnimation(bPlay) {
        var isPlay = false;
        var id = this._id;
        if (4 != id) return;
        isPlay = this.playTriggerAnimation(bPlay);
        return isPlay;
      }
    });
    cc._RF.pop();
  }, {
    "./Odysseus_Tools": "Odysseus_Tools",
    LMSlots_Symbol_Base: void 0
  } ],
  Odysseus_Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3431fWPHrlK779bntn0fxJh", "Odysseus_Tools");
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
        nodeAni: function nodeAni(node, type, func) {
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
            func && func();
          }).start() : 3 === type && cc.tween(node).to(.2, {
            scale: 1.3
          }).to(.3, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
            func && func();
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
          if (node) return node.convertToWorldSpace(cc.v2(0, 0));
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
  Odysseus_Wheel_mar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a93a3zmlHFD1bHgbzFuL3ay", "Odysseus_Wheel_mar");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _wheelSrc: [],
        _wheelNode: [],
        _wheelGame: null,
        _wheelItems: null
      },
      Init: function Init() {
        var _this = this;
        this._wheelNodePosArr = [ {
          x: 150,
          y: -260
        }, {
          x: -230,
          y: -240
        }, {
          x: 0,
          y: -80
        } ];
        this._wheel_bg = cc.find("Canvas/safe_node/wheel_bg_1");
        this._wheel_bg.active = false;
        this._wheelNode[0] = cc.find("Canvas/safe_node/slots/wheelNode/wheel1");
        this._wheelNode[1] = cc.find("Canvas/safe_node/slots/wheelNode/wheel2");
        this._wheelNode[2] = cc.find("Canvas/safe_node/slots/wheelNode/wheel3");
        this._wheelSrc[0] = this._wheelNode[0].addComponent("Odysseus_Wheel");
        this._wheelSrc[1] = this._wheelNode[1].addComponent("Odysseus_Wheel");
        this._wheelSrc[2] = this._wheelNode[2].addComponent("Odysseus_Wheel");
        for (var index = 0; index < this._wheelNode.length; index++) {
          var element = this._wheelNode[index];
          element.x = this._wheelNodePosArr[index].x;
          element.y = this._wheelNodePosArr[index].y;
          element.opacity = 0;
        }
        cc.find("point", this.node).active = false;
        cc.find("handNode", this.node).active = false;
        Global.btnClickEvent(cc.find("handNode", this.node), function() {
          _this.onClickHandNode();
        }, this);
      },
      onClickHandNode: function onClickHandNode() {
        var handNode = cc.find("handNode", this.node);
        handNode.stopAllActions();
        handNode.active = false;
        Global.SlotsSoundMgr.playEffect("wheel_spin");
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {};
        req.data.rtype = 3;
        cc.vv.NetManager.send(req, true);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      onRecvMsgSubAction: function onRecvMsgSubAction(msg) {
        if (200 === msg.code) {
          var data = msg.data;
          if (data.errMsg) return;
          if (3 === data.rtype) {
            this._wheelGame = data.wheelGame;
            this.startMove(data.resultId);
          }
        }
      },
      updateWheelItems: function updateWheelItems(wheelItems, wheelGame) {
        if (wheelItems) {
          this._wheelItems = wheelItems;
          this._wheelSrc[0].Init(1, 1);
          this._wheelSrc[1].Init(2, 1);
          this._wheelSrc[2].Init(3, 1);
        }
        this.addCoinColor(this._wheelItems["minor"]);
        this.addCoinColor(this._wheelItems["mega"]);
        this._wheelSrc[0].updateWheelUi(this._wheelItems["mini"]);
        this._wheelSrc[1].updateWheelUi(this._wheelItems["minor"]);
        this._wheelSrc[2].updateWheelUi(this._wheelItems["mega"]);
        if (wheelGame) if (1 == wheelGame.wheelId) this._wheelSrc[0].updateWheelUi(wheelGame.items); else if (2 == wheelGame.wheelId) {
          this.addCoinColor(wheelGame.items);
          this._wheelSrc[1].updateWheelUi(wheelGame.items);
        } else if (3 == wheelGame.wheelId) {
          this.addCoinColor(wheelGame.items);
          this._wheelSrc[2].updateWheelUi(wheelGame.items);
        }
      },
      addCoinColor: function addCoinColor(data) {
        for (var i = 0; i < data.length; i++) {
          var element = data[i];
          (element.mult || element.coin) && (element.color = i % 2);
        }
      },
      openWheelGame: function openWheelGame(isOpen, wheelGame) {
        var _this2 = this;
        var self = this;
        var gameData = cc.vv.gameData;
        if (wheelGame) {
          this._wheelGame = wheelGame;
          this._wheelSrc[wheelGame.wheelId - 1].updateWheelUi(wheelGame.items);
          var wheelId = wheelGame.wheelId;
          for (var index = 0; index < this._wheelNode.length; index++) {
            var element = this._wheelNode[index];
            element.active = index + 1 >= wheelId;
          }
        }
        this.updateWheelItems(gameData.GetWheelItems(), wheelGame);
        this._wheel_bg.active = isOpen;
        if (isOpen) for (var _index = 0; _index < this._wheelNode.length; _index++) {
          var _element = this._wheelNode[_index];
          var elementSrc = this._wheelSrc[_index];
          elementSrc.setState(2);
          cc.tween(_element).to(.8, {
            x: 0,
            y: -200,
            opacity: 255
          }).call(function() {
            Global.SlotsSoundMgr.playEffect("wheel_combine");
            cc.find("point", self.node).active = true;
            cc.find("handNode", self.node).active = true;
            cc.vv.gameData.checkAutoPlay(cc.find("handNode", self.node), _this2.onClickHandNode.bind(_this2));
          }).start();
        } else {
          var _loop = function _loop(_index2) {
            var element = _this2._wheelNode[_index2];
            var elementSrc = _this2._wheelSrc[_index2];
            element.active = true;
            cc.tween(element).to(.8, {
              x: _this2._wheelNodePosArr[_index2].x,
              y: _this2._wheelNodePosArr[_index2].y,
              opacity: 0
            }).call(function() {
              cc.find("point", self.node).active = false;
              cc.find("handNode", self.node).active = false;
              elementSrc.setState(1);
            }).start();
          };
          for (var _index2 = 0; _index2 < this._wheelNode.length; _index2++) _loop(_index2);
        }
      },
      startMove: function startMove(resultId) {
        var wheelId = this._wheelGame.wheelId;
        if (this._wheelGame.newItems) {
          this._wheelSrc[wheelId - 1]._itemsData = this._wheelGame.newItems;
          wheelId = this._wheelGame.wheelId - 1;
        }
        this._wheelSrc[wheelId - 1].startMoveOne(resultId, this._wheelGame.items);
      },
      endMove: function endMove() {
        var gameData = cc.vv.gameData;
        var haveWin = gameData.GetBottomScript().getCurrentWin();
        gameData.GetPopNodeScript().openWheelCollectNode(haveWin);
      },
      endMoveOne: function endMoveOne() {
        cc.find("handNode", this.node).active = true;
        cc.vv.gameData.checkAutoPlay(cc.find("handNode", this.node), this.onClickHandNode.bind(this));
      }
    });
    cc._RF.pop();
  }, {} ],
  Odysseus_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd316ZcsJBIvahO4m/8gwD/", "Odysseus_Wheel");
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
    var Odysseus_Tools = require("./Odysseus_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _yeNode: cc.Node,
        _speed: 0,
        _itemAngle: 90,
        _type: 1,
        _state: 1,
        _items: [],
        _itemsData: []
      },
      Init: function Init(type, state) {
        this._yeNode = cc.find("yeNode", this.node);
        this._state = state;
        this._type = type;
        switch (type) {
         case 1:
          this._itemAngle = 45;
          this._speed = .1;
          break;

         case 2:
          this._itemAngle = 30;
          this._speed = .2;
          break;

         case 3:
          this._itemAngle = 22.5;
          this._speed = .3;
        }
      },
      updateWheelUi: function updateWheelUi(data) {
        var items = data;
        var cloneNode;
        this._itemsData = data;
        var GetTotalBet = cc.vv.gameData.GetTotalBet();
        this.node.angle = 0;
        var _iterator = _createForOfIteratorHelper(this._items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var iterator = _step.value;
            iterator.removeFromParent();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._items = [];
        switch (this._type) {
         case 1:
          var _iterator2 = _createForOfIteratorHelper(items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var item = _step2.value;
              if (item.isEnd) cloneNode = cc.instantiate(cc.find("wheel4", this._yeNode)); else if (item.mult || item.coin) {
                cloneNode = cc.instantiate(cc.find("wheel3", this._yeNode));
                item.coin ? cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(item.coin) : cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(item.mult * GetTotalBet);
              } else if (item.jackpot) {
                cloneNode = cc.instantiate(cc.find("wheel1", this._yeNode));
                cc.find("1", cloneNode).active = false;
                cc.find("2", cloneNode).active = false;
                cc.find(item.jackpot.id.toString(), cloneNode) && (cc.find(item.jackpot.id.toString(), cloneNode).active = true);
              } else item.boost && (cloneNode = cc.instantiate(cc.find("wheel2", this._yeNode)));
              cloneNode.x = 0;
              cloneNode.y = 0;
              cloneNode.active = true;
              this._yeNode.addChild(cloneNode);
              cloneNode.angle = -this._items.length * this._itemAngle;
              this._items.push(cloneNode);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          break;

         case 2:
          var _iterator3 = _createForOfIteratorHelper(items), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _item = _step3.value;
              if (_item.isEnd) cloneNode = cc.instantiate(cc.find("wheel5", this._yeNode)); else if (_item.mult || _item.coin) {
                cloneNode = 0 === _item.color ? cc.instantiate(cc.find("wheel3", this._yeNode)) : cc.instantiate(cc.find("wheel4", this._yeNode));
                _item.coin ? cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(_item.coin) : cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(_item.mult * GetTotalBet);
              } else if (_item.jackpot) {
                cloneNode = cc.instantiate(cc.find("wheel1", this._yeNode));
                cc.find("2", cloneNode).active = false;
                cc.find("3", cloneNode).active = false;
                cc.find("4", cloneNode).active = false;
                cc.find(_item.jackpot.id.toString(), cloneNode) && (cc.find(_item.jackpot.id.toString(), cloneNode).active = true);
              } else _item.boost && (cloneNode = cc.instantiate(cc.find("wheel2", this._yeNode)));
              cloneNode.x = 0;
              cloneNode.y = 0;
              cloneNode.active = true;
              this._yeNode.addChild(cloneNode);
              cloneNode.angle = -this._items.length * this._itemAngle;
              this._items.push(cloneNode);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          break;

         case 3:
          var _iterator4 = _createForOfIteratorHelper(items), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _item2 = _step4.value;
              if (_item2.isEnd) cloneNode = cc.instantiate(cc.find("wheel4", this._yeNode)); else if (_item2.mult || _item2.coin) {
                cloneNode = 0 === _item2.color ? cc.instantiate(cc.find("wheel3", this._yeNode)) : cc.instantiate(cc.find("wheel2", this._yeNode));
                _item2.coin ? cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(_item2.coin) : cc.find("lab", cloneNode).getComponent(cc.Label).string = Global.formatNumShort(_item2.mult * GetTotalBet);
              } else if (_item2.jackpot) {
                cloneNode = cc.instantiate(cc.find("wheel1", this._yeNode));
                cc.find("4", cloneNode).active = false;
                cc.find("3", cloneNode).active = false;
                cc.find("5", cloneNode).active = false;
                cc.find(_item2.jackpot.id.toString(), cloneNode) && (cc.find(_item2.jackpot.id.toString(), cloneNode).active = true);
              }
              cloneNode.x = 0;
              cloneNode.y = 0;
              cloneNode.active = true;
              this._yeNode.addChild(cloneNode);
              cloneNode.angle = -this._items.length * this._itemAngle;
              this._items.push(cloneNode);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      startMoveOne: function startMoveOne(resultId, items) {
        var _this = this;
        var self = this;
        var targetAngle = (resultId - 1) * this._itemAngle - 1440;
        var targetItem = cc.find("zhuanpan2", self._items[resultId - 1]);
        Global.SlotsSoundMgr.playEffect("wheel_roll");
        console.log("---1resultId", resultId, targetAngle);
        cc.tween(this.node).to(7.8, {
          angle: targetAngle
        }, {
          easing: "quadInOut"
        }).call(function() {
          if (targetItem && !self._itemsData[resultId - 1].isEnd) {
            targetItem.active = true;
            targetItem.getComponent(sp.Skeleton).setAnimation(0, "animation" + self._type, true);
          }
        }).delay(3).call(function() {
          _this.node.angle += 1440;
          targetItem && (targetItem.active = false);
          self._itemsData = items;
          self.endMoveOne(resultId);
        }).start();
      },
      endMoveOne: function endMoveOne(resultId) {
        var self = this;
        var gameData = cc.vv.gameData;
        var data = this._itemsData[resultId - 1];
        var itemNode = this._items[resultId - 1];
        if (data.isEnd) gameData.GetWheelMarScript().endMove(); else if (data.coin) {
          Global.SlotsSoundMgr.playEffect("wheel_collect2");
          var addCoin = data.coin;
          var haveWin = gameData.GetBottomScript().getCurrentWin();
          gameData.AddCoin(addCoin);
          gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
          gameData.GetTopScript().ShowCoin();
          cc.tween(this.node).delay(1).call(function() {
            cc.find("endNode", itemNode) && (cc.find("endNode", itemNode).active = true);
            gameData.GetWheelMarScript().endMoveOne();
          }).start();
        } else if (data.jackpot) {
          Global.SlotsSoundMgr.playEffect("wheel_collect1");
          var _addCoin = data.jackpot.value;
          var _haveWin = gameData.GetBottomScript().getCurrentWin();
          gameData.AddCoin(_addCoin);
          gameData.GetBottomScript().ShowWin(_addCoin + _haveWin, 3, _haveWin, null, .3);
          gameData.GetTopScript().ShowCoin();
          gameData.IsPrizePoolLock(data.jackpot.id - 1) ? gameData.GetPopNodeScript().openNormalNode(data.jackpot.value) : gameData.GetPopNodeScript().openWheelJpNode(data.jackpot.id, data.jackpot.value);
          cc.tween(this.node).delay(1).call(function() {
            cc.find("endNode", itemNode) && (cc.find("endNode", itemNode).active = true);
            gameData.GetWheelMarScript().endMoveOne();
          }).start();
        } else if (data.boost) {
          Global.SlotsSoundMgr.playEffect("wheel_collect1");
          cc.tween(this.node).delay(2).call(function() {
            gameData.GetPopNodeScript().openBoost();
            Global.SlotsSoundMgr.playEffect("boost_dialog_start_show");
          }).delay(4).call(function() {
            1 == self._type ? Global.SlotsSoundMgr.playEffect("wheel_fly1") : Global.SlotsSoundMgr.playEffect("wheel_fly2");
          }).to(1, {
            x: 800
          }).call(function() {
            gameData.GetWheelMarScript().endMoveOne();
          }).start();
        }
      },
      update: function update(dt) {
        1 === this._state && (this.node.angle -= this._speed * this._itemAngle * dt);
      },
      setState: function setState(state) {
        this._state = state;
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Odysseus_Tools": "Odysseus_Tools"
  } ]
}, {}, [ "Odysseus_ButtonSafe", "Odysseus_Cfg", "Odysseus_GameData", "Odysseus_Logic", "Odysseus_PickGame", "Odysseus_Pop", "Odysseus_PrizePool", "Odysseus_Reel", "Odysseus_Slots", "Odysseus_Symbol", "Odysseus_Tools", "Odysseus_Wheel", "Odysseus_Wheel_mar" ]);