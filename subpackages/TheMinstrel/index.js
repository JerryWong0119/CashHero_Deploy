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
  TheMinstrel_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36a16OjPEhMlJ5fhgJDBU58", "TheMinstrel_Cfg");
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
        node: "s1",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 102, {
        node: "s102",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 103, {
        node: "s103",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
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
        win_node: "w1000",
        win_ani: {
          name: "animation1000_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1000_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w1000",
        win_ani: {
          name: "animation1001_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1001_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w1000",
        win_ani: {
          name: "animation1002_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1002_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "w1000",
        win_ani: {
          name: "animation1003_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1003_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 15, {
        node: "s15",
        win_node: "w1000",
        win_ani: {
          name: "animation11_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation11_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 16, {
        node: "s16",
        win_node: "w1000",
        win_ani: {
          name: "animation15_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation15_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 17, {
        node: "s17",
        win_node: "w1000",
        win_ani: {
          name: "animation16_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation16_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 18, {
        node: "s18",
        win_node: "w1000",
        win_ani: {
          name: "animation17_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation17_1",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheMinstrel_Slots",
        Reels: "TheMinstrel_Reel",
        Symbols: "TheMinstrel_symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 105
      },
      helpItems: [ "games/TheMinstrel/prefab/LMSlots_Help_item1", "games/TheMinstrel/prefab/LMSlots_Help_item2", "games/TheMinstrel/prefab/LMSlots_Help_item3", "games/TheMinstrel/prefab/LMSlots_Help_item4", "games/TheMinstrel/prefab/LMSlots_Help_item5", "games/TheMinstrel/prefab/LMSlots_Help_item6", "games/TheMinstrel/prefab/LMSlots_Help_item7", "games/TheMinstrel/prefab/LMSlots_Help_item8" ],
      autoModelDelay: 1,
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 8, 4, 4, 7, 7, 3, 3, 8, 8, 8, 4, 4, 7, 7, 15, 15, 15, 3, 4, 4, 8, 8, 8, 4, 4, 5, 7, 10, 15, 6, 9, 9, 9, 10, 10, 8, 4, 4, 4, 6, 6, 7, 7, 15, 4, 4, 1, 102, 103, 6, 6, 6, 1, 102, 103, 9, 7, 4, 4, 4, 15, 10, 9, 9, 9, 10, 3, 3, 6, 6, 8, 8, 7, 7, 5, 5, 6, 6, 6, 7, 7, 3, 3, 3, 5, 7, 7, 5, 5, 4, 4, 4, 5, 5, 4, 4, 4, 3, 10, 6, 3, 3, 10, 10, 3, 5, 5, 7, 9, 3, 3, 9, 9, 4, 7, 7, 3, 3, 3, 6, 4, 4, 5, 5, 6, 6, 3, 3, 5, 5, 10, 7, 7, 5, 5, 9, 9, 5, 5, 9, 10, 3, 9 ]), 
      _defineProperty(_cardmap, 2, [ 10, 10, 6, 6, 3, 4, 4, 6, 6, 6, 3, 3, 8, 8, 8, 15, 15, 4, 4, 5, 5, 5, 6, 6, 3, 3, 3, 10, 10, 10, 3, 15, 15, 10, 6, 6, 7, 7, 7, 8, 8, 3, 6, 3, 3, 15, 7, 7, 6, 9, 8, 4, 4, 5, 5, 3, 3, 3, 15, 4, 4, 4, 8, 8, 4, 4, 8, 8, 4, 5, 5, 7, 10, 10, 10, 8, 5, 9, 7, 7, 8, 3, 4, 4, 4, 9, 9, 7, 7, 3, 3, 4, 3, 3, 9, 8, 4, 4, 6, 9, 9, 9, 5, 5, 4, 4, 4, 4, 7, 8, 6, 6, 7, 10, 5, 9, 9, 7, 7, 5, 5, 4, 4, 7, 3, 3, 4, 7, 5 ]), 
      _defineProperty(_cardmap, 3, [ 10, 10, 4, 7, 7, 4, 8, 8, 6, 6, 6, 4, 4, 15, 5, 5, 4, 4, 4, 2, 3, 3, 7, 4, 4, 3, 4, 4, 15, 6, 8, 4, 4, 10, 10, 2, 4, 9, 3, 3, 15, 15, 15, 9, 9, 8, 8, 7, 7, 7, 3, 3, 3, 4, 4, 4, 6, 2, 4, 4, 15, 6, 6, 6, 4, 4, 5, 3, 3, 6, 6, 6, 8, 3, 3, 9, 2, 6, 6, 9, 9, 6, 6, 6, 4, 4, 4, 10, 6, 6, 6, 8, 3, 3, 3, 5, 2, 3, 3, 5, 10, 10, 5, 5, 10, 5, 7, 7, 7, 9, 9, 5, 5, 5, 2, 9, 9, 10, 10, 7, 7, 8, 3, 3, 8, 7, 7, 2, 8, 8, 3, 4, 5, 7, 9, 9 ]), 
      _defineProperty(_cardmap, 4, [ 8, 3, 3, 7, 7, 8, 8, 7, 7, 5, 5, 4, 15, 10, 6, 2, 4, 4, 5, 5, 5, 8, 8, 8, 4, 4, 10, 15, 15, 15, 8, 8, 10, 10, 7, 7, 5, 2, 4, 4, 4, 6, 6, 9, 9, 15, 15, 7, 9, 5, 5, 10, 10, 9, 3, 2, 6, 6, 6, 7, 7, 7, 4, 4, 4, 7, 7, 7, 8, 8, 7, 7, 7, 3, 5, 5, 4, 4, 2, 3, 3, 6, 6, 6, 8, 3, 3, 3, 6, 6, 6, 3, 4, 4, 4, 7, 7, 3, 3, 3, 2, 5, 5, 4, 10, 10, 3, 3, 6, 6, 3, 8, 10, 10, 4, 2, 9, 9, 9, 5, 4, 4, 4, 6, 6, 9, 9, 3, 3, 5, 4, 4, 4, 7, 2, 8, 8, 5, 5, 5, 3, 6, 3, 3, 5, 9, 4, 9, 9 ]), 
      _defineProperty(_cardmap, 5, [ 4, 6, 4, 4, 4, 7, 7, 7, 3, 3, 9, 6, 6, 6, 15, 15, 10, 10, 5, 5, 5, 2, 10, 10, 4, 7, 5, 5, 5, 6, 15, 8, 8, 7, 4, 4, 4, 7, 2, 4, 4, 8, 8, 8, 7, 7, 15, 5, 9, 4, 4, 5, 5, 3, 9, 9, 2, 3, 3, 15, 6, 4, 4, 3, 3, 3, 10, 10, 3, 3, 3, 9, 8, 8, 15, 6, 2, 5, 5, 8, 6, 6, 9, 9, 3, 10, 10, 4, 4, 6, 6, 3, 3, 2, 7, 7, 6, 6, 4, 4, 7, 7, 3, 9, 10, 9, 9, 3, 2, 5, 10, 3, 3, 3, 3 ]), 
      _cardmap),
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      commEffect: {
        path: "games/TheMinstrel/",
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
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "anticipation",
        antSpeed: 2e3
      } ],
      puzzleCfg: {
        atlas: "puzzle_2",
        bg: "theme_store_puzzle2_bg",
        full: "theme_store_puzzle2_full",
        pieces: [ "theme_store_puzzle_2_1", "theme_store_puzzle_2_2", "theme_store_puzzle_2_3", "theme_store_puzzle_2_4", "theme_store_puzzle_2_5", "theme_store_puzzle_2_6", "theme_store_puzzle_2_7", "theme_store_puzzle_2_8", "theme_store_puzzle_2_9", "theme_store_puzzle_2_10", "theme_store_puzzle_2_11", "theme_store_puzzle_2_12" ]
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheMinstrel_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81e6f6zBv5I/6rqoW59UdoL", "TheMinstrel_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      IsSelectWheel: function IsSelectWheel() {
        return this._deskInfo.select;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheMinstrel_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6049TvAoVODo9a8WLxkHAF", "TheMinstrel_Pop");
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
      extends: require("LMSlots_PauseUI_Base"),
      properties: {
        _showNode: null
      },
      onLoad: function onLoad() {
        var btnCollect = cc.find("pop_wheel_result/node_coin/btn_collect", this.node);
        Global.btnClickEvent(btnCollect, this.OnClickCollect, this);
        var btnStart = cc.find("pop_wheel_result/node_freegames/btn_start", this.node);
        Global.btnClickEvent(btnStart, this.OnClickStart, this);
      },
      start: function start() {},
      ShowWheelResult: function ShowWheelResult(data) {
        this._WheelResultData = data;
        Global.SlotsSoundMgr.playEffect("pupup_in1");
        this._showNode && (this._showNode.active = false);
        var node_result = cc.find("pop_wheel_result", this.node);
        node_result.active = true;
        this._showNode = node_result;
        var node_coin = cc.find("node_coin", node_result);
        node_coin.active = 1 == data.awardType;
        var node_free = cc.find("node_freegames", node_result);
        node_free.active = !node_coin.active;
        if (1 == data.awardType) {
          var self = this;
          Global.showAlertAction(node_result, true, null, null, function() {
            var btnCollect = cc.find("btn_collect", node_coin);
            btnCollect.getComponent(cc.Button).interactable = true;
            cc.vv.gameData.checkAutoPlay(btnCollect, self.OnClickCollect.bind(self));
          });
          var lbl_coin = cc.find("lbl_coin", node_coin);
          Global.doRoallNumEff(lbl_coin, 0, data.num, 3, null, null, 0, true);
          Global.SlotsSoundMgr.playEffect("win_rollup");
          var majorType = [ 1, 5, 9, 13 ];
          for (var i = 0; i < majorType.length; i++) {
            var nodeMajor = cc.find("res_" + majorType[i], node_coin);
            nodeMajor.active = majorType[i] == data.idx;
          }
        } else {
          var _self = this;
          Global.showAlertAction(node_result, true, null, null, function() {
            var btnStart = cc.find("btn_start", node_free);
            btnStart.getComponent(cc.Button).interactable = true;
            cc.vv.gameData.checkAutoPlay(btnStart, _self.OnClickStart.bind(_self));
          });
          var lbl_time = cc.find("lbl_time", node_free);
          lbl_time.getComponent(cc.Label).string = Global.FormatNumToComma(data.num);
          cc.vv.gameData.SetFreeTime(data.num);
          cc.vv.gameData.SetTotalFree(data.num);
        }
        var hitIdx = data.num;
        var tarSp = "theme135_popup_bg7";
        5 == hitIdx ? tarSp = "theme135_popup_bg1" : 8 == hitIdx ? tarSp = "theme135_popup_bg3" : 20 == hitIdx ? tarSp = "theme135_popup_bg6" : 15 == hitIdx ? tarSp = "theme135_popup_bg5" : 10 == hitIdx ? tarSp = "theme135_popup_bg4" : 7 == hitIdx && (tarSp = "theme135_popup_bg2");
        var spr_bg = cc.find("spr_bg", node_result);
        var atlas = cc.vv.gameData.GetAtlasByName("popup");
        spr_bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(tarSp);
      },
      ShowExtraFree: function ShowExtraFree(nTime, nextCall) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var self, node_extra, lbl_time, sprTime1, sprTime2, closeEndCall;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              self = _this;
              Global.SlotsSoundMgr.playEffect("pupup_in1");
              _this._showNode && (_this._showNode.active = false);
              node_extra = cc.find("node_extra_free", _this.node);
              _this._showNode = node_extra;
              node_extra.active = true;
              lbl_time = cc.find("lbl_time", node_extra);
              lbl_time.getComponent(cc.Label).string = nTime;
              sprTime1 = cc.find("txt_frees1", node_extra);
              sprTime1.active = 1 == nTime;
              sprTime2 = cc.find("txt_frees2", node_extra);
              sprTime2.active = !sprTime1.active;
              Global.showAlertAction(node_extra, true);
              _context.next = 15;
              return cc.vv.gameData.awaitTime(2);

             case 15:
              _context.next = 17;
              return Global.SlotsSoundMgr.playEffectByUnSync("popup_out");

             case 17:
              closeEndCall = function closeEndCall(params) {
                nextCall && nextCall();
                self.HidePopNode();
              };
              Global.showAlertAction(node_extra, false, null, null, closeEndCall);

             case 19:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      HidePopNode: function HidePopNode() {
        this.node.active = false;
      },
      OnClickCollect: function OnClickCollect() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var self, btnCollect, lbl_coin, node_result, closeEndCall;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              self = _this2;
              btnCollect = cc.find("pop_wheel_result/node_coin/btn_collect", _this2.node);
              btnCollect.getComponent(cc.Button).interactable = false;
              btnCollect.stopAllActions();
              lbl_coin = cc.find("pop_wheel_result/node_coin/lbl_coin", _this2.node);
              if (!(lbl_coin.getNumberOfRunningActions() > 0)) {
                _context2.next = 10;
                break;
              }
              lbl_coin.stopAllActions();
              lbl_coin.getComponent(cc.Label).string = Global.FormatNumToComma(self._WheelResultData.num);
              _context2.next = 10;
              return cc.vv.gameData.awaitTime(.2);

             case 10:
              node_result = cc.find("pop_wheel_result", _this2.node);
              if (!(0 == node_result.getNumberOfRunningActions())) {
                _context2.next = 16;
                break;
              }
              closeEndCall = function closeEndCall() {
                self.HidePopNode();
                var slotScp = cc.vv.gameData.GetSlotsScript();
                slotScp.ShowTranstionExit();
              };
              _context2.next = 15;
              return Global.SlotsSoundMgr.playEffectByUnSync("popup_out");

             case 15:
              Global.showAlertAction(node_result, false, null, null, closeEndCall);

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      OnClickStart: function OnClickStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var self, btnStart, node_result, closeEndCall;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              self = _this3;
              btnStart = cc.find("pop_wheel_result/node_freegames/btn_start", _this3.node);
              btnStart.getComponent(cc.Button).interactable = false;
              btnStart.stopAllActions();
              node_result = cc.find("pop_wheel_result", _this3.node);
              if (!(0 == node_result.getNumberOfRunningActions())) {
                _context3.next = 10;
                break;
              }
              closeEndCall = function closeEndCall() {
                self.HidePopNode();
                var slotScp = cc.vv.gameData.GetSlotsScript();
                slotScp.ShowTranstionExit(true);
              };
              _context3.next = 9;
              return Global.SlotsSoundMgr.playEffectByUnSync("popup_out");

             case 9:
              Global.showAlertAction(node_result, false, null, null, closeEndCall);

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PauseUI_Base: void 0
  } ],
  TheMinstrel_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a65c3HSj4NBnpj8Bl2LnJZt", "TheMinstrel_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var targetJpNode = node;
        if (targetJpNode) {
          var aniType = [ 3, 3, 2, 1 ];
          var lock_node = targetJpNode.getChildByName("jp_lock");
          if (lock_node) {
            var jp_title = targetJpNode.getChildByName("spr_title");
            lock_node.active = true;
            var un_lock_bet = lock_node.getChildByName("un_lock_bet");
            un_lock_bet.getComponent(cc.Label).string = Global.convertNumToShort(unLockBet);
            var lockSp = lock_node.getComponent(sp.Skeleton);
            if (bLock) {
              var delayCall = function delayCall() {
                jp_title && (jp_title.color = cc.Color.GRAY);
                un_lock_bet.active = true;
              };
              if (bInit) {
                delayCall();
                lockSp.setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 2), true);
              } else {
                this.scheduleOnce(delayCall, .6);
                lockSp.setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 1), false);
                lockSp.addAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 2), true);
                Global.SlotsSoundMgr.playEffect("lock");
              }
            } else {
              var _delayCall = function _delayCall() {
                un_lock_bet.active = false;
                jp_title && (jp_title.color = cc.Color.WHITE);
              };
              if (bInit) {
                _delayCall();
                lockSp.setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 3), false);
              } else {
                this.scheduleOnce(_delayCall, .6);
                lockSp.setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 3), false);
                Global.SlotsSoundMgr.playEffect("unlock");
              }
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  TheMinstrel_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "791d4h5ha1DKpuYk9lDdtsk", "TheMinstrel_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      StartMove: function StartMove() {
        this.StartRecycleSymbol();
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this.isInBonusGame()) {
          var bPlayCoin = false;
          for (var i = 0; i < this._originResult.length; i++) {
            var item = this._symbols[i];
            item.playStopAnimation();
            var id = item.GetShowId();
            15 != id && 14 != id && 13 != id && 12 != id && 11 != id || (bPlayCoin = true);
          }
          bPlayCoin && Global.SlotsSoundMgr.playEffect("symbol_coin");
        }
      },
      isInBonusGame: function isInBonusGame() {
        var slot = cc.vv.gameData.GetSlotsScript();
        if (slot) return slot.CheckTriggerSubGame();
      },
      AddCount: function AddCount(count) {
        var deltaTime = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        var offsetY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._super(count, deltaTime, offsetY);
        if (this.isInBonusGame() && count > 0) for (var i = 0; i < this._symbols.length; i++) {
          var item = this._symbols[i];
          item.ShowMask(true);
        }
      },
      OnReelHeigtChange: function OnReelHeigtChange(nAddHeight) {
        this._super(nAddHeight);
        if (2 == this._reelIdx) {
          var freeTimeNode = cc.find("Canvas/safe_node/slots/free_time");
          freeTimeNode.y += nAddHeight;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheMinstrel_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce592v7J0xDsoPZFI1KRn+8", "TheMinstrel_Slots");
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
      properties: {},
      Init: function Init() {
        this._super();
        var self = this;
        this.node.parent.parent.getComponent("LMSlots_Puzzle").setCallback(function(freeInfo, chipGame) {
          cc.vv.gameData.SetTotalFree(freeInfo.freeCnt);
          cc.vv.gameData.SetFreeTime(freeInfo.freeCnt);
          cc.vv.gameData.SetSubGameData({
            awardType: 0
          });
          self.ShowTranstionExit();
        });
      },
      RegisterEvent: function RegisterEvent() {
        Global.registerEvent(cc.vv.gameData._EventId.GAME423_SHOW_WHEEL_RESULT, this.OnEventWheelResult, this);
      },
      StartMove: function StartMove() {
        this._super();
        var man = cc.find("reels/reel1/mask/spine_man", this.node);
        man.active = false;
        if (this.bBounusGame) {
          var role = cc.find("spine_role", this.node);
          var roleSp = role.getComponent(sp.Skeleton);
          roleSp.setAnimation(0, "chuxian", false);
          roleSp.addAnimation(0, "idle", true);
          this.bBounusGame = null;
          Global.SlotsSoundMgr.playEffect("man_in");
          Global.SlotsSoundMgr.playEffect("reel_down");
        }
        Global.SlotsSoundMgr.playNormalBgm();
        this.UpdateOtherFreeTime();
      },
      GetBonusData: function GetBonusData(idx) {
        var bonusData = this._gameInfo.bonusGame;
        if (bonusData && bonusData.coins) for (var i = 0; i < bonusData.coins.length; i++) if (bonusData.coins[i].idx == idx) return {
          t: "coin",
          num: bonusData.coins[i].num
        };
      },
      getBonusAddFree: function getBonusAddFree() {
        var add = 0;
        var bonusData = this._gameInfo.bonusGame;
        if (bonusData && bonusData.free) for (var i = 0; i < bonusData.free.length; i++) add += bonusData.free[i].num;
        return add;
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
            res.data = this.GetBonusData(i + 1);
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var j = 0; j < this._reels.length; j++) {
          var item = this._reels[j];
          var reelRes = reelResults[j];
          item.SetResult(reelRes);
        }
      },
      getPostionByRow: function getPostionByRow(nRow) {
        return this._reels[0].GetSymbolPosByRow(nRow);
      },
      onMsgSpine: function onMsgSpine(msg) {
        var self = this;
        this._gameInfo = msg;
        var cards = msg.resultCards;
        var bBounusGame = msg.bonusGame.open > 0;
        if (bBounusGame) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          cards = msg.bonusGame.cards;
        }
        var rolePos = self.changeWild(cards);
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
        if (bBounusGame) {
          this.bBounusGame = true;
          this.SetStopTime(1e3);
          cc.tween(this.node).delay(1.5).call(function() {
            self.ShowReelEffect();
          }).delay(4).call(function() {
            self._reels[0].StopMove(0);
          }).delay(.6).call(function() {
            var man = cc.find("reels/reel1/mask/spine_man", self.node);
            man.position = self.getPostionByRow(rolePos);
            man.active = true;
            var manSp = man.getChildByName("spine").getComponent(sp.Skeleton);
            manSp.paused = true;
            cc.tween(man).to(.5, {
              position: self.getPostionByRow(1)
            }).call(function() {
              manSp.paused = false;
              manSp.setAnimation(0, "idle", true);
            }).start();
            var role = cc.find("spine_role", self.node);
            var roleSp = role.getComponent(sp.Skeleton);
            roleSp.setMix("skill01", "xiaoshi");
            roleSp.setAnimation(0, "xiaoshi", false);
            Global.SlotsSoundMgr.playEffect("man_in");
          }).delay(1).call(function() {
            Global.SlotsSoundMgr.playEffect("reel_up");
            for (var i = 1; i < 5; i++) self._reels[i].AddCount(2, 1.2);
          }).delay(2).call(function() {
            for (var i = 1; i < 5; i++) {
              var nIter = self.GetReelStopInter(i);
              self._reels[i].StopMove(nIter);
            }
          }).start();
        }
      },
      changeWild: function changeWild(cards) {
        var head = 1;
        var mid = 102;
        var footer = 103;
        var rolePos = 0;
        var nWild = 0;
        var footer_row = this.GetResutByRowCol(cards, 0, 0);
        1 == footer_row && nWild++;
        var mid_row = this.GetResutByRowCol(cards, 1, 0);
        1 == mid_row && nWild++;
        var head_row = this.GetResutByRowCol(cards, 2, 0);
        1 == head_row && nWild++;
        if (1 == nWild) {
          if (1 == footer_row) {
            var sid = this.ChangeRowColToIdx(cards, 0, 0);
            cards[sid] = head;
            rolePos = -1;
          }
          if (1 == head_row) {
            var _sid = this.ChangeRowColToIdx(cards, 2, 0);
            cards[_sid] = footer;
            rolePos = 3;
          }
        }
        if (3 == nWild) {
          var sid0 = this.ChangeRowColToIdx(cards, 0, 0);
          cards[sid0] = footer;
          var sid1 = this.ChangeRowColToIdx(cards, 1, 0);
          cards[sid1] = mid;
          var sid2 = this.ChangeRowColToIdx(cards, 2, 0);
          cards[sid2] = head;
          rolePos = 1;
        }
        if (2 == nWild) {
          if (1 == head_row && 1 == mid_row) {
            var _sid2 = this.ChangeRowColToIdx(cards, 2, 0);
            cards[_sid2] = mid;
            var _sid3 = this.ChangeRowColToIdx(cards, 1, 0);
            cards[_sid3] = footer;
            rolePos = 2;
          }
          if (1 == footer_row && 1 == mid_row) {
            var _sid4 = this.ChangeRowColToIdx(cards, 0, 0);
            cards[_sid4] = mid;
            var _sid5 = this.ChangeRowColToIdx(cards, 1, 0);
            cards[_sid5] = head;
            rolePos = 0;
          }
        }
        return rolePos;
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {
        this._super(colIdx);
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < sys.length; j++) {
            var item = sys[j];
            item.ShowData();
          }
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        return reelIdx > 0 && this.CheckTriggerSubGame() ? 1.5 * reelIdx : this._super(reelIdx);
      },
      OnSpinEnd: function OnSpinEnd() {
        var self = this;
        this.ShowWinTrace();
        var nWin = cc.vv.gameData.GetGameWin();
        var pEndCall = function pEndCall() {
          if (self.CheckTriggerSubGame()) {
            var totalFree = self.getBonusAddFree();
            if (totalFree) {
              self._bottomScript.ShowBtnsByState("moveing_1");
              var showExtraCall = function showExtraCall() {
                cc.vv.gameData.AddTotalFreeTime(totalFree);
                self.CanDoNextRound();
              };
              var node_pop = cc.find("Canvas/safe_node/node_pop_ui");
              node_pop.active = true;
              var cmp = node_pop.getComponent("TheMinstrel_Pop");
              cmp.ShowExtraFree(totalFree, showExtraCall);
              return;
            }
          }
          var bHit = self.CheckEnterFreeGame();
          bHit ? self._bottomScript.ShowBtnsByState("moveing_1") : self.CheckExitFreeGame();
        };
        var nTotal = nWin;
        cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
        this.ShowBottomWin(nWin, nTotal, true, pEndCall);
        if (this.CheckTriggerSubGame()) for (var i = 1; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < sys.length; j++) {
            var item = sys[j];
            item.ShowBonus(true);
          }
        }
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        return this.bBounusGame;
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var res = false;
        res = this._gameInfo.select && true == this._gameInfo.select;
        if (res) {
          var delayCall = function delayCall() {
            var endCall = function endCall() {
              var node = cc.find("Canvas/safe_node/wheel_node");
              node.active = true;
            };
            this.ShowTranstion(endCall);
          };
          this.scheduleOnce(delayCall, 1.5);
          var ids = this._gameInfo.freeResult.freeInfo.idxs;
          for (var i = 0; i < ids.length; i++) {
            var item = this.GetSymbolByIdx(ids[i]);
            item.playTriggerAnimation();
          }
          Global.SlotsSoundMgr.playEffect("scatter_trigger");
        }
        return res;
      },
      ShowReelEffect: function ShowReelEffect() {
        var self = this;
        var role = cc.find("spine_role", this.node);
        role.active = true;
        var roleSp = role.getComponent(sp.Skeleton);
        roleSp.setAnimation(0, "skill01", true);
        roleSp.addAnimation(0, "skill01", false, 3);
        roleSp.addAnimation(0, "idle", false, 5);
        Global.SlotsSoundMgr.playEffect("man_stimulate");
        var music = cc.find("reels_frame/node_eff/spine_music", this.node);
        music.active = true;
        var musicSp = music.getComponent(sp.Skeleton);
        musicSp.setAnimation(0, "animation", false);
        musicSp.setCompleteListener(function() {
          var kuang = cc.find("reels_frame/node_eff/spine_kuang", self.node);
          kuang.active = true;
          var kuangSp = kuang.getComponent(sp.Skeleton);
          kuangSp.setAnimation(0, "animation1", false);
          kuangSp.addAnimation(0, "animation2", false);
          kuangSp.addAnimation(0, "animation3", false);
          kuangSp.setStartListener(function(param) {
            "animation2" == param.name && Global.SlotsSoundMgr.playEffect("nudge");
          });
          musicSp.setCompleteListener(null);
        });
      },
      ShowTranstion: function ShowTranstion(pEndCall) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var role, tranNode, ani, delayCall;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              role = cc.find("spine_role", _this.node);
              role.getComponent(sp.Skeleton).setAnimation(0, "skill01", false);
              role.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              _context.next = 5;
              return cc.vv.gameData.awaitTime(.5);

             case 5:
              tranNode = cc.find("Canvas/safe_node/translate_node");
              tranNode.active = true;
              ani = tranNode.getComponent(sp.Skeleton);
              ani.setAnimation(0, "skill02", false);
              delayCall = function delayCall() {
                pEndCall && pEndCall();
              };
              _this.scheduleOnce(delayCall, .5);
              Global.SlotsSoundMgr.playEffect("transition");

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowTranstionExit: function ShowTranstionExit() {
        var self = this;
        var endCall = function endCall() {
          var node = cc.find("Canvas/safe_node/wheel_node");
          node.active = false;
        };
        var delayCall = function delayCall() {
          var subData = cc.vv.gameData.GetSubGameData();
          if (1 == subData.awardType) {
            var add = subData.num;
            var nextCall = function nextCall() {
              self.CanDoNextRound();
            };
            self.ShowBottomWin(add, add, true, nextCall);
          } else {
            self.CanDoNextRound();
            var total = cc.vv.gameData.GetTotalFree();
            var rest = cc.vv.gameData.GetFreeTime();
            if (rest > 0) {
              self._bottomScript.ShowFreeModel(true, total - rest, total);
              self._ShowGameBg(true);
            }
            Global.SlotsSoundMgr.playBgm("free_bgm");
          }
        };
        this.scheduleOnce(delayCall, 1);
        this.ShowTranstion(endCall);
      },
      OnReelReadyToStop: function OnReelReadyToStop(colIdx) {
        this._super(colIdx);
        colIdx > 0 && this.CheckTriggerSubGame() && Global.SlotsSoundMgr.playEffect("reel_anticipation");
      },
      OnEventWheelResult: function OnEventWheelResult(data) {
        var val = data.detail;
        var node_pop = cc.find("Canvas/safe_node/node_pop_ui");
        node_pop.active = true;
        var cmp = node_pop.getComponent("TheMinstrel_Pop");
        cmp.ShowWheelResult(val);
      },
      ReconnectShow: function ReconnectShow() {
        var bSelect = cc.vv.gameData.IsSelectWheel();
        if (bSelect) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          var endCall = function endCall() {
            var node = cc.find("Canvas/safe_node/wheel_node");
            node.active = true;
          };
          this.ShowTranstion(endCall);
        } else {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          if (rest > 0) {
            this._bottomScript.ShowFreeModel(true, total - rest, total);
            var nTotal = cc.vv.gameData.GetTotalFreeWin();
            this._bottomScript.SetWin(nTotal);
            this.CanDoNextRound();
            this._ShowGameBg(true);
            Global.SlotsSoundMgr.playBgm("free_bgm");
          }
        }
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var self, total, rest;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              self = _this2;
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (!(total > 0 && 0 == rest)) {
                _context2.next = 11;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(1.5);

             case 7:
              _this2._ShowFreeBalance();
              Global.SlotsSoundMgr.stopBgm();
              _context2.next = 12;
              break;

             case 11:
              self.CanDoNextRound();

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _ShowFreeBalance: function _ShowFreeBalance() {
        var self = this;
        var node_balance = cc.find("Canvas/safe_node/node_free_balance");
        node_balance.active = true;
        var btnCollect = cc.find("ui_bg/btn_collect", node_balance);
        var freeWin = cc.vv.gameData.GetGameTotalFreeWin();
        var endCall = function endCall() {
          var lbl_coin = cc.find("ui_bg/lbl_coin", node_balance);
          Global.doRoallNumEff(lbl_coin, 0, freeWin, 1.5, null, null, 0, true);
          cc.vv.gameData.checkAutoPlay(btnCollect, self._OnClickFreeBalance.bind(self));
          btnCollect.on("click", self._OnClickFreeBalance, self);
        };
        btnCollect.off("click", self._OnClickFreeBalance, self);
        Global.showAlertAction(cc.find("ui_bg", node_balance), true, 0, 1, endCall);
        Global.SlotsSoundMgr.playEffect("popup_collect");
      },
      _OnClickFreeBalance: function _OnClickFreeBalance() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var self, node_balance, lbl_coin, _freeWin, popbg, winoutCall, freeWin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              self = _this3;
              node_balance = cc.find("Canvas/safe_node/node_free_balance");
              cc.find("ui_bg/btn_collect", node_balance).stopAllActions();
              lbl_coin = cc.find("ui_bg/lbl_coin", node_balance);
              if (!(lbl_coin.getNumberOfRunningActions() > 0)) {
                _context3.next = 9;
                break;
              }
              _freeWin = cc.vv.gameData.GetGameTotalFreeWin();
              lbl_coin.stopAllActions();
              lbl_coin.getComponent(cc.Label).string = Global.FormatNumToComma(_freeWin);
              return _context3.abrupt("return");

             case 9:
              popbg = cc.find("ui_bg", node_balance);
              if (!(popbg.getNumberOfRunningActions() > 0)) {
                _context3.next = 13;
                break;
              }
              cc.log("\u5f39\u7a97\u52a8\u4f5c\u8fd8\u6ca1\u6267\u884c\u73a9\uff0c\u8fd8\u4e0d\u80fd\u6267\u884c\u5173\u95ed\u5f39\u7a97\uff01");
              return _context3.abrupt("return");

             case 13:
              winoutCall = function winoutCall() {
                node_balance.active = false;
                var endCall = function endCall() {
                  self._ShowGameBg(false);
                  self._bottomScript.ShowFreeModel(false);
                };
                self.ShowTranstion(endCall);
              };
              _context3.next = 16;
              return Global.SlotsSoundMgr.playEffectByUnSync("popup_out");

             case 16:
              Global.showAlertAction(popbg, false, 0, 1, winoutCall);
              _context3.next = 19;
              return cc.vv.gameData.awaitTime(2);

             case 19:
              freeWin = cc.vv.gameData.GetGameTotalFreeWin();
              _context3.next = 22;
              return self.ShowBottomWin(freeWin, freeWin, true, null, 1);

             case 22:
              self.CanDoNextRound();

             case 23:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _ShowGameBg: function _ShowGameBg(bFree) {
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        normalBg.active = !bFree;
        normalFree.active = bFree;
        var freeTimeNode = cc.find("Canvas/safe_node/slots/free_time");
        freeTimeNode.active = bFree;
        this.UpdateOtherFreeTime();
        var bgpath = "Canvas/safe_node/slots/reels_bg/reel_bg";
        var baseAtlas = cc.vv.gameData.GetAtlasByName("base");
        var bgSprite = baseAtlas.getSpriteFrame("reel_04");
        bFree && (bgSprite = baseAtlas.getSpriteFrame("reel_05"));
        for (var i = 0; i < 5; i++) {
          var node = cc.find(bgpath + (i + 1));
          node && (node.getComponent(cc.Sprite).spriteFrame = bgSprite);
        }
      },
      UpdateOtherFreeTime: function UpdateOtherFreeTime() {
        var freeTimeNode = cc.find("Canvas/safe_node/slots/free_time");
        var nTotal = cc.vv.gameData.GetTotalFree();
        var reset = cc.vv.gameData.GetFreeTime();
        if (nTotal > 0) {
          var lblTotal = cc.find("lbl_total", freeTimeNode);
          lblTotal.getComponent(cc.Label).string = nTotal;
          var lblUsed = cc.find("lbl_used", freeTimeNode);
          lblUsed.getComponent(cc.Label).string = nTotal - reset;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheMinstrel_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b64d4rmzjRBcIpTYj0zzOO5", "TheMinstrel_Wheel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PauseUI_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._GRAND = 888;
        this._MAJOR = 777;
        this._MINOR = 666;
        this._MINI = 555;
        this._ReelConfig = [ this._GRAND, 5, 8, 20, this._MAJOR, 5, 10, 7, this._MINOR, 5, 8, 20, this._MINI, 15, 10, 7 ];
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
        this._startBtn = cc.find("btn_start", this.node);
        Global.btnClickEvent(this._startBtn, this.OnClickStart, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      onEnable: function onEnable() {
        this.InitShow();
      },
      onDisable: function onDisable() {
        this.ShowLogoTxt(true);
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_SHOW_HEADFOOTER_MASK, false);
      },
      start: function start() {},
      InitShow: function InitShow() {
        this._isStart = null;
        this.ShowLogoTxt(false);
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_SHOW_HEADFOOTER_MASK, true);
        var nodeWheel = cc.find("wheel_pan", this.node);
        nodeWheel.angle = 0;
        this.ShowResultAni(false);
        this.ShowIdle(true);
        var idleSpin = cc.find("btn_spine", this.node);
        var idleSp = idleSpin.getComponent(sp.Skeleton);
        idleSp.setAnimation(0, "animation1", true);
        Global.SlotsSoundMgr.playBgm("wheel_bgm");
        this.CheckPrizePoolLock();
        cc.vv.gameData.checkAutoPlay(this._startBtn, this.OnClickStart.bind(this));
      },
      CheckPrizePoolLock: function CheckPrizePoolLock() {
        var bGrandLock = cc.vv.gameData.IsPrizePoolLock(3);
        var nodeGrandLock = cc.find("wheel_pan/grand_lock", this.node);
        nodeGrandLock.active = bGrandLock;
        var bMajorLock = cc.vv.gameData.IsPrizePoolLock(2);
        var nodeMajorLock = cc.find("wheel_pan/major_lock", this.node);
        nodeMajorLock.active = bMajorLock;
        var bMinorLock = cc.vv.gameData.IsPrizePoolLock(1);
        var nodeMinorLock = cc.find("wheel_pan/minor_lock", this.node);
        nodeMinorLock.active = bMinorLock;
        var bMiniLock = cc.vv.gameData.IsPrizePoolLock(0);
        var nodeMiniLock = cc.find("wheel_pan/mini_lock", this.node);
        nodeMiniLock.active = bMiniLock;
      },
      ShowResultAni: function ShowResultAni(bShow) {
        var node = cc.find("wheel_win_spine", this.node);
        node.active = bShow;
      },
      ShowIdle: function ShowIdle(bShow) {
        var nodepanAni = cc.find("wheel_pan/wheel_idle_spine", this.node);
        nodepanAni.active = bShow;
        var nodePointAni = cc.find("wheel_pointer/pointer_spine", this.node);
        nodePointAni.active = bShow;
      },
      OnClickStart: function OnClickStart() {
        var self = this;
        if (this._isStart) return;
        this._isStart = true;
        this._startBtn.stopAllActions();
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {};
        req.data.rtype = 1;
        cc.vv.NetManager.send(req, true);
        Global.SlotsSoundMgr.playEffect("wheel_press");
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        var self = this;
        if (200 == msg.code && 1 == msg.data.rtype) {
          this._subData = msg.data;
          cc.vv.gameData.SetSubGameData(this._subData);
          this.ShowIdle(false);
          var idleSpin = cc.find("btn_spine", this.node);
          var idleSp = idleSpin.getComponent(sp.Skeleton);
          idleSp.setAnimation(0, "animation2", false);
          var delayCall = function delayCall() {
            Global.SlotsSoundMgr.playEffect("wheel_spin");
            self.ShowWheelTurn(self._subData);
          };
          this.scheduleOnce(delayCall, 1);
        }
      },
      ShowWheelTurn: function ShowWheelTurn(data, callback) {
        var _this = this;
        var self = this;
        var idx = data.idx;
        var nodeWheel = cc.find("wheel_pan", this.node);
        var rot = 2880 + (16 - (idx - 1)) * (360 / this._ReelConfig.length);
        cc.tween(nodeWheel).to(6.5, {
          angle: -rot
        }, {
          easing: "quadInOut"
        }).call(function() {
          self.ShowResultAni(true);
          Global.SlotsSoundMgr.playEffect("wheel_win");
          Global.SlotsSoundMgr.stopBgm();
        }).delay(2).call(function() {
          Global.dispatchEvent(cc.vv.gameData._EventId.GAME423_SHOW_WHEEL_RESULT, _this._subData);
          callback && callback();
        }).start();
      },
      ShowLogoTxt: function ShowLogoTxt(bShow) {
        var logo = cc.find("Canvas/safe_node/logo_txt");
        logo.active = bShow;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PauseUI_Base: void 0
  } ],
  TheMinstrel_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb287+XeFVNQr8BpDfzwSzu", "TheMinstrel_symbol");
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
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this.SetText();
        this.ShowMask(false);
      },
      ShowBonus: function ShowBonus(bShow) {
        if (this._data) if (bShow) {
          this.SetText(this._data.num);
          this.isInBonusGame() && this.playWinAnimation();
        } else this.SetText();
      },
      ShowData: function ShowData() {
        this._data && this.SetText(this._data.num);
      },
      isCanShowBonus: function isCanShowBonus() {
        var res = false;
        this._id > 10 && this._id < 19 && (res = true);
        return res;
      },
      ShowMask: function ShowMask(bShow) {
        var mask = cc.find("mask", this.node);
        mask.active = bShow;
      },
      SetText: function SetText(num) {
        var bCanShow = false;
        15 != this._id && 16 != this._id && 17 != this._id && 18 != this._id || (bCanShow = true);
        var txt = cc.find("coin_num", this.node);
        if (num && bCanShow) {
          txt.active = true;
          txt.getComponent(cc.Label).string = Global.formatNumShort(num, 1);
        } else txt.active = false;
      },
      isInBonusGame: function isInBonusGame() {
        var slot = cc.vv.gameData.GetSlotsScript();
        if (slot) return slot.CheckTriggerSubGame();
      }
    }, "ShowMask", function ShowMask(bShow) {
      var nodeMask = cc.find("mask", this.node);
      nodeMask.active = bShow;
    }));
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "TheMinstrel_Cfg", "TheMinstrel_GameData", "TheMinstrel_Pop", "TheMinstrel_PrizePool", "TheMinstrel_Reel", "TheMinstrel_Slots", "TheMinstrel_Wheel", "TheMinstrel_symbol" ]);