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
  SunWuKong_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "233c3rfiwhHPbkWWk3L8fpZ", "SunWuKong_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      },
      SendSpinReq: function SendSpinReq() {
        this.ShowBtnsByState("moveing_1");
        var betIdx = cc.vv.gameData.GetBetIdx();
        cc.vv.gameData.ReqSpin(betIdx);
        if (this._needRefushFreeTime) {
          this._needRefushFreeTime = null;
          var restFree = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.SetFreeTime(restFree - 1);
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this.ShowFreeModel(true, total - rest, total);
        }
        cc.vv.gameData.StartMove();
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.StartMove();
        cc.vv.gameData.getManage()._isInFree && cc.vv.gameData.GetFreeSlotsScript().StartMove();
        this._ShowBetProTip(false);
        this.ShowAutoSelect(false);
      },
      OnClickStop: function OnClickStop() {
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.StopMove();
        cc.vv.gameData.getManage()._isInFree && cc.vv.gameData.GetFreeSlotsScript().StopMove();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  SunWuKong_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "212c7V6CU9NvJfK/1FS5jJ0", "SunWuKong_Cfg");
    "use strict";
    var _symbol, _cardmap, _cardmapfree;
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
        node: "s16",
        win_node: "w15",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 2, {
        node: "s14",
        win_node: "w13",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        stop_ani: {
          name: "buling",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s1",
        win_node: "w1",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        stop_ani: {
          name: "buling",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "kai",
          name2: "idleframe2",
          zIndex: 200
        },
        stop_ani: {
          name: "buling",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 8, {
        node: "s10"
      }), _defineProperty(_symbol, 9, {
        node: "s11"
      }), _defineProperty(_symbol, 10, {
        node: "s12"
      }), _defineProperty(_symbol, 11, {
        node: "s6"
      }), _defineProperty(_symbol, 12, {
        node: "s7"
      }), _defineProperty(_symbol, 13, {
        node: "s8"
      }), _defineProperty(_symbol, 14, {
        node: "s9"
      }), _defineProperty(_symbol, 201, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "actionframe2",
          zIndex: 200
        },
        stop_ani: {
          name: "buling2",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 101, {
        node: "s15",
        win_node: "w15",
        win_ani: {
          name: "actionframe2",
          zIndex: 200
        },
        idle_ani: {
          name: "idleframe2",
          zIndex: 200
        },
        change_ani: {
          name: "switch",
          zIndex: 200
        },
        fly_ani: {
          name: "buling",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "SunWuKong_Bottom",
        Slots: "SunWuKong_Slots",
        Reels: "SunWuKong_reel",
        Symbols: "SunWuKong_symbol",
        Sound: "SunWuKong_sound"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 130,
        height: 130
      },
      helpItems: [ "games/SunWuKong/prefab/LMSlots_Help_item1", "games/SunWuKong/prefab/LMSlots_Help_item2", "games/SunWuKong/prefab/LMSlots_Help_item3", "games/SunWuKong/prefab/LMSlots_Help_item4", "games/SunWuKong/prefab/LMSlots_Help_item5", "games/SunWuKong/prefab/LMSlots_Help_item6", "games/SunWuKong/prefab/LMSlots_Help_item7" ],
      scatterId: 2,
      autoModelDelay: 1,
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 12, 12, 13, 13, 13, 13, 1, 1, 13, 13, 13, 13, 6, 6, 6, 6, 5, 1, 14, 14, 9, 9, 9, 6, 5, 5, 11, 13, 13, 13, 13, 12, 12, 8, 8, 8, 14, 14, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 14, 6, 6, 6, 6, 9, 9, 9, 9, 14, 14, 10, 10, 13, 13, 13, 13, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 13, 13, 13, 13, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 14, 5, 5, 5, 5, 8, 8, 14, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 14, 9, 9, 1, 7, 7, 7, 7, 14, 14, 14, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 14, 14, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmap, 2, [ 7, 7, 7, 7, 8, 8, 7, 11, 11, 11, 3, 3, 3, 4, 4, 4, 13, 13, 13, 13, 1, 1, 7, 7, 13, 13, 13, 13, 1, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 14, 14, 14, 9, 9, 13, 13, 13, 13, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 13, 13, 13, 13, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 13, 13, 13, 13, 14, 14, 2, 8, 8, 8, 8, 14, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 10, 14, 14, 12, 14, 7, 11, 14, 14, 14, 6, 6, 6, 7, 7, 7, 14, 14, 14, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmap, 3, [ 13, 13, 13, 13, 10, 9, 11, 11, 11, 11, 3, 3, 3, 4, 4, 4, 8, 8, 12, 12, 12, 12, 7, 7, 7, 13, 13, 13, 13, 14, 14, 14, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 14, 14, 2, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 14, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 13, 13, 13, 13, 14, 14, 10, 10, 10, 10, 8, 8, 14, 14, 13, 13, 13, 13, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 13, 13, 13, 13, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 14, 7, 7, 8, 8, 14, 14, 14, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 14, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 11, 11, 3, 3, 3, 4, 4, 4, 7, 7, 7, 7, 14, 14, 14, 2, 13, 13, 13, 13, 7, 7, 7, 14, 13, 13, 13, 13, 7, 7, 14, 14, 12, 13, 13, 13, 13, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 13, 13, 13, 13, 8, 8, 8, 8, 7, 7, 1, 1, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 14, 14, 8, 8, 8, 13, 13, 13, 13, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 14, 14, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 14, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 14, 14, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 14, 6, 8, 14, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 1, 14, 7, 7, 7, 8, 10, 10, 11, 11, 11, 1, 1, 6, 13, 13, 13, 13, 11, 11, 11, 14, 14, 14, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 13, 13, 13, 13, 7, 7, 7, 7, 1, 1, 13, 13, 13, 13, 8, 8, 8, 8, 6, 6, 6, 5, 13, 13, 13, 13, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 14, 14, 13, 13, 13, 13, 10, 10, 10, 1, 14, 14, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 14, 7, 7, 14, 14, 14, 7, 11, 11, 11, 14, 14, 14, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmap),
      cardmapfree: (_cardmapfree = {}, _defineProperty(_cardmapfree, 1, [ 12, 12, 13, 13, 13, 13, 1, 1, 13, 13, 13, 13, 6, 6, 6, 6, 5, 1, 14, 14, 9, 9, 9, 6, 5, 5, 11, 13, 13, 13, 13, 12, 12, 8, 8, 8, 14, 14, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 14, 6, 6, 6, 6, 9, 9, 9, 9, 14, 14, 10, 10, 13, 13, 13, 13, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 13, 13, 13, 13, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 14, 5, 5, 5, 5, 8, 8, 14, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 14, 9, 9, 1, 7, 7, 7, 7, 14, 14, 14, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 14, 14, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 2, [ 7, 7, 7, 7, 8, 8, 7, 11, 11, 11, 13, 13, 13, 13, 1, 1, 7, 7, 13, 13, 13, 13, 1, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 14, 14, 14, 9, 9, 13, 13, 13, 13, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 13, 13, 13, 13, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 13, 13, 13, 13, 14, 14, 2, 8, 8, 8, 8, 14, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 10, 14, 14, 12, 14, 7, 11, 14, 14, 14, 6, 6, 6, 7, 7, 7, 14, 14, 14, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree, 3, [ 13, 13, 13, 13, 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 13, 13, 13, 13, 14, 14, 14, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 14, 14, 2, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 14, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 13, 13, 13, 13, 14, 14, 10, 10, 10, 10, 8, 8, 14, 14, 13, 13, 13, 13, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 13, 13, 13, 13, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 14, 7, 7, 8, 8, 14, 14, 14, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 14, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 14, 14, 14, 2, 13, 13, 13, 13, 7, 7, 7, 14, 13, 13, 13, 13, 7, 7, 14, 14, 12, 13, 13, 13, 13, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 13, 13, 13, 13, 8, 8, 8, 8, 7, 7, 1, 1, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 14, 14, 8, 8, 8, 13, 13, 13, 13, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 14, 14, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 14, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 14, 14, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 14, 6, 8, 14, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 1, 14, 7, 7, 7, 8, 10, 10, 11, 11, 11, 1, 1, 6, 13, 13, 13, 13, 11, 11, 11, 14, 14, 14, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 13, 13, 13, 13, 7, 7, 7, 7, 1, 1, 13, 13, 13, 13, 8, 8, 8, 8, 6, 6, 6, 5, 13, 13, 13, 13, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 14, 14, 13, 13, 13, 13, 10, 10, 10, 1, 14, 14, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 14, 7, 7, 14, 14, 14, 7, 11, 11, 11, 14, 14, 14, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmapfree),
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
        path: "games/SunWuKong/",
        win1: [ "music_FloweryPixie_last_win_1", "" ],
        win2: [ "music_FloweryPixie_last_win_2", "" ]
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/SunWuKong/",
        reelStopSound: "FloweryPixie_reel_stop",
        symbolStopSound: "music_FloweryPixie_Bonus1_Down",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 4 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/SunWuKong/",
        reelStopSound: "FloweryPixie_reel_stop",
        symbolStopSound: "music_FloweryPixie_Bonus2_Down",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2, 201 ],
        mini: 4,
        counts: [ 3, 3, 3, 3, 3 ],
        antiNode: "node_anti",
        path: "games/SunWuKong/",
        reelStopSound: "FloweryPixie_reel_stop",
        symbolStopSound: "FloweryPixie_scatter_down",
        antSound: "music_FloweryPixie_LongRun",
        antSpeed: 2e3,
        continuous: true
      } ],
      AddAntiTime: 5,
      normalBgm: "music_FloweryPixie_baseGame",
      sysFloatOffsetPos: cc.v2(0, 120)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  SunWuKong_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37b5eU+MKxBTILUnO84TL45", "SunWuKong_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _popWinManage: null,
        _manage: null,
        _freeSlotsScript: null,
        _collectNode: null,
        _isTriggerFree: false,
        _freeGameCnt: 0
      },
      setPopWinManage: function setPopWinManage(script) {
        this._popWinManage = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWinManage;
      },
      setManage: function setManage(script) {
        this._manage = script;
      },
      getManage: function getManage() {
        return this._manage;
      },
      SetFreeSlotsScript: function SetFreeSlotsScript(script) {
        this._freeSlotsScript = script;
      },
      GetFreeSlotsScript: function GetFreeSlotsScript() {
        return this._freeSlotsScript;
      },
      setCollectNode: function setCollectNode(script) {
        this._collectNode = script;
      },
      getCollectNode: function getCollectNode() {
        return this._collectNode;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._deskInfo.user.coin = msg.coin;
          this._gameInfo = msg;
          this._deskInfo.restFreeCount = msg.freeCnt;
          this._deskInfo.allFreeCount = msg.allFreeCnt;
          this._puzzleData = msg.chipGame;
          msg.gameTask && cc.vv.UserManager.updateQuestInfoData(msg.gameTask);
          this._isTriggerFree = false;
          this._freeGameCnt = 0;
          if (cc.vv.gameData.getManage()._isInFree) {
            var freeGameSlots = msg.freeGameSlots;
            var freeMsg = Global.copy(msg);
            var normalMsg = Global.copy(msg);
            normalMsg.scatterResult = freeGameSlots[1].scatterResult;
            normalMsg.resultCards = freeGameSlots[1].resultCards;
            normalMsg.zjLuXian = freeGameSlots[1].zjLuXian;
            normalMsg.freeResult = freeGameSlots[1].freeResult;
            normalMsg.winCoin = freeGameSlots[1].winCoin + freeGameSlots[0].winCoin;
            freeMsg.scatterResult = freeGameSlots[0].scatterResult;
            freeMsg.resultCards = freeGameSlots[0].resultCards;
            freeMsg.zjLuXian = freeGameSlots[0].zjLuXian;
            freeMsg.freeResult = freeGameSlots[0].freeResult;
            this.GetFreeSlotsScript().onMsgSpine(freeMsg);
            this.GetSlotsScript().onMsgSpine(normalMsg);
            if (freeMsg.freeResult && freeMsg.freeResult.freeInfo) {
              var idxs = freeMsg.freeResult.freeInfo.scatterIdx;
              idxs || (idxs = freeMsg.freeResult.freeInfo.idxs);
              if (idxs) {
                this._isTriggerFree = true;
                this._freeGameCnt += freeMsg.freeResult.freeInfo.freeCnt;
              }
            }
            if (normalMsg.freeResult && normalMsg.freeResult.freeInfo) {
              var _idxs = normalMsg.freeResult.freeInfo.scatterIdx;
              _idxs || (_idxs = normalMsg.freeResult.freeInfo.idxs);
              if (_idxs) {
                this._isTriggerFree = true;
                this._freeGameCnt += normalMsg.freeResult.freeInfo.freeCnt;
              }
            }
          } else {
            this.GetSlotsScript().onMsgSpine(msg);
            if (msg.freeResult && msg.freeResult.freeInfo) {
              var _idxs2 = msg.freeResult.freeInfo.scatterIdx;
              _idxs2 || (_idxs2 = msg.freeResult.freeInfo.idxs);
              if (_idxs2) {
                this._isTriggerFree = true;
                this._freeGameCnt += msg.freeResult.freeInfo.freeCnt;
              }
            }
          }
          this._puzzleData && this._cfg.puzzleCfg && this._puzzleData.currChipInfo && cc.find("Canvas").getComponent("LMSlots_Puzzle").puzzleFly();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  SunWuKong_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3413Ah00xCyq3ep8IHthOk", "SunWuKong_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var manage = safe_node.addComponent("SunWuKong_manage");
        cc.vv.gameData.setManage(manage);
        cc.vv.gameData.setPopWinManage(safe_node.getComponentInChildren("SunWuKong_Pop"));
        var node_slots = cc.find("slotsfree", safe_node);
        var script_slots = node_slots.addComponent("SunWuKong_Slotsfree");
        cc.vv.gameData.SetFreeSlotsScript(script_slots);
        var collectScript = cc.find("slots/collectNode", safe_node).addComponent("SunWuKong_collectNode");
        cc.vv.gameData.setCollectNode(collectScript);
      },
      StartSlot: function StartSlot() {
        this._super();
        var script_slots = cc.vv.gameData.GetFreeSlotsScript();
        script_slots.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  SunWuKong_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca6025nlWlNZKJUi4CCOyfW", "SunWuKong_Pop");
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
        _startAddCoin: false
      },
      onLoad: function onLoad() {},
      start: function start() {},
      showWin: function showWin() {
        var popBg = cc.find("popup", this.node);
        popBg.active = true;
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      hideWin: function hideWin(callBack) {
        var popBg = cc.find("popup", this.node);
        cc.tween(popBg).to(.3, {
          opacity: 0
        }).call(function() {
          callBack && callBack();
          popBg.active = false;
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showFreeGameTimes: function showFreeGameTimes(times) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var showNode, freeGameTime, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_FreespinStart_view);
                _this2.showWin();
                showNode = cc.find("show_freeGameTimes", _this2.node);
                showNode.active = true;
                freeGameTime = cc.find("numBg/num", showNode);
                freeGameTime.getComponent(cc.Label).string = times;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameTimes");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("idleFreeGameTimes");
                  var startButton = cc.find("startBtn", showNode);
                  startButton.getComponent(cc.Button).interactable = true;
                  startButton.off("click");
                  var func = function() {
                    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          startButton.getComponent(cc.Button).interactable = false;
                          _context.next = 3;
                          return _this2.awaitTime(.2);

                         case 3:
                          showNodeAnimation.play("hideFreeGameTimes");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            _this2.hideWin(function() {
                              success();
                            });
                          });

                         case 5:
                         case "end":
                          return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function func() {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(startButton, func);
                  startButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        startButton.stopAllActions();
                        func();

                       case 2:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  })));
                });

               case 10:
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
      showFreeGameWinCoin: function showFreeGameWinCoin(num, times) {
        var _this3 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var showNode, coin, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_FreespinOver_view);
                _this3.showWin();
                showNode = cc.find("show_freeGame_winCoin", _this3.node);
                showNode.active = true;
                coin = cc.find("numBg/num", showNode);
                _this3._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this3._startAddCoin = false;
                }, null, 0, true);
                cc.find("Common-FloweryPixie_zi_1/times", showNode).getComponent(cc.Label).string = times;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("idleFreeGameWinCoin");
                  var collectButton = cc.find("collectBtn", showNode);
                  collectButton.getComponent(cc.Button).interactable = true;
                  collectButton.off("click");
                  var func = function() {
                    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                         case 0:
                          collectButton.getComponent(cc.Button).interactable = false;
                          if (_this3._startAddCoin) {
                            _this3._startAddCoin = false;
                            coin.stopAllActions();
                            winCoinLabel = coin.getComponent(cc.Label);
                            winCoinLabel.string = Global.FormatNumToComma(num);
                          }
                          _context4.next = 4;
                          return _this3.awaitTime(.2);

                         case 4:
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            _this3.hideWin(function() {
                              success();
                            });
                          });

                         case 6:
                         case "end":
                          return _context4.stop();
                        }
                      }, _callee4);
                    }));
                    return function func() {
                      return _ref5.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(collectButton, func);
                  collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        collectButton.stopAllActions();
                        func();

                       case 2:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  })));
                });

               case 12:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      showFreeGameWinFree: function showFreeGameWinFree(times) {
        var _this4 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var showNode, freeGameTime, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_FreespinStart_view);
                _this4.showWin();
                showNode = cc.find("show_freeGameWinFree", _this4.node);
                showNode.active = true;
                freeGameTime = cc.find("numBg/num", showNode);
                freeGameTime.getComponent(cc.Label).string = times;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinFree");
                showNodeAnimation.on("finished", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      showNodeAnimation.off("finished");
                      showNodeAnimation.play("idleFreeGameWinFree");
                      _context7.next = 4;
                      return _this4.awaitTime(2);

                     case 4:
                      showNodeAnimation.play("hideFreeGameWinFree");
                      showNodeAnimation.on("finished", function() {
                        showNodeAnimation.off("finished");
                        showNode.active = false;
                        _this4.hideWin(function() {
                          success();
                        });
                      });

                     case 6:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                })));

               case 9:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x5, _x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  SunWuKong_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff9142TqAxO9JLXnpjznP9n", "SunWuKong_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _lastLockJackpot: 0
      },
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          if (_this.node.y + _this.node.height > cc.winSize.height / 2 - 74) {
            var length = _this.node.y + _this.node.height - (cc.winSize.height / 2 - 74);
            _this.node.scale = 1 - length / _this.node.height;
          }
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var _this2 = this;
        var targetJpNode = node;
        if (targetJpNode) {
          var lock_node = targetJpNode.getChildByName("lockbg");
          if (lock_node) {
            var jp_title = targetJpNode.getChildByName("spr_title");
            lock_node.active = true;
            var un_lock_bet = lock_node.getChildByName("betNum");
            un_lock_bet.getComponent(cc.Label).string = Global.FormatNumToComma(unLockBet);
            var lockSp = lock_node.getChildByName("lock").getComponent(sp.Skeleton);
            if (bLock) {
              lock_node.active = true;
              lockSp.setAnimation(0, "animation", false);
              lockSp.setCompleteListener(function() {
                _this2.updateJackpotLockAni();
              });
              poolType < this._lastLockJackpot && (this._lastLockJackpot = poolType);
            } else {
              lock_node.active = false;
              if (!bInit) {
                var unlockEffect = targetJpNode.getChildByName("unlock");
                unlockEffect.active = true;
                var unlockEffectSp = unlockEffect.getComponent(sp.Skeleton);
                unlockEffectSp.setAnimation(0, "animation0" + (poolType + 5), false);
                unlockEffectSp.setCompleteListener(function() {
                  unlockEffect.active = false;
                });
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
              }
              poolType >= this._lastLockJackpot && (this._lastLockJackpot = poolType + 1);
              this.updateJackpotLockAni();
            }
          }
        }
      },
      updateJackpotLockAni: function updateJackpotLockAni() {
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        var tempLastJack = this._lastLockJackpot;
        3 === tempLastJack ? tempLastJack++ : 5 === tempLastJack && (tempLastJack = 3);
        if (jpNode) for (var i = 0; i < jackpotNames.length; i++) {
          var element = jackpotNames[i];
          var targetJpNode = cc.find("prizePool_" + element, jpNode.node.parent);
          if (targetJpNode) {
            var lock_node = targetJpNode.getChildByName("lockbg");
            if (lock_node) {
              var lockSp = lock_node.getChildByName("lock").getComponent(sp.Skeleton);
              if (tempLastJack === i) lockSp.setAnimation(0, "animation", true); else {
                lockSp.setAnimation(0, "animation", false);
                lockSp.clearTracks();
              }
              lockSp.setCompleteListener(null);
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  SunWuKong_Slotsfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e4fd71jYpIia0E+jXBc/NJ", "SunWuKong_Slotsfree");
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
        _canShowStop: false
      },
      onLoad: function onLoad() {
        this._super();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this.createReels(this._col, this._row);
        this.RegisterEvent();
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("SunWuKong_reelfree");
          scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super(msg);
              _this2._canShowStop = true;

             case 2:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        this.clearTopSymbol();
        this._super();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, idx, symbol, idxs, _i, key, _symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this3._gameInfo.extraFreeInfo) for (i = 0; i < _this3._gameInfo.extraFreeInfo.slot2.stickyWilds.length; i++) {
                idx = _this3._gameInfo.extraFreeInfo.slot2.stickyWilds[i];
                symbol = _this3.GetSymbolByIdx(idx);
                symbol && symbol.ShowById(101);
              }
              _this3.ShowWinTrace();
              if (_this3._gameInfo.freeResult && _this3._gameInfo.freeResult.freeInfo) {
                idxs = _this3._gameInfo.freeResult.freeInfo.scatterIdx;
                idxs || (idxs = _this3._gameInfo.freeResult.freeInfo.idxs);
                if (idxs) for (_i = 0; _i < idxs.length; _i++) {
                  key = idxs[_i];
                  _symbol = _this3.GetSymbolByIdx(Number(key));
                  _symbol && _symbol.playWinAnimation();
                }
              }

             case 3:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      clearTopSymbol: function clearTopSymbol() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.stopWinTweenAction();
            symbol.ShowNormal();
            symbol.ShowKuang(false);
          }
        }
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
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  SunWuKong_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53ac1RHFqZPjLSl9K1Vj7+q", "SunWuKong_Slots");
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
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _canShowStop: false,
        _collectNode: null,
        _reels_bg: null
      },
      onLoad: function onLoad() {
        this._super();
        this._collectNode = cc.find("collectNode", this.node);
        this._reels_bg = cc.find("reels_bg", this.node);
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
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        var parNode = cc.find("top_ani", this.node);
        parNode && parNode.removeAllChildren();
        this._canShowStop = false;
        cc.vv.gameData.getManage()._isInFree || cc.vv.gameData.getCollectNode().hideSmallHua();
        cc.vv.gameData.getManage()._collectNode.active = true;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super(msg);
              _this2._canShowStop = true;

             case 2:
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
          var idxsList, i, _i, idx, symbol, nWin, nTotal, isNormalGame, idxs, _i2, key, _symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              if (!_this4._gameInfo.bonusItems) {
                _context3.next = 6;
                break;
              }
              idxsList = [];
              for (i = 0; i < _this4._gameInfo.bonusItems.length; i++) _this4._gameInfo.bonusItems[i].isCollected && idxsList.push({
                idx: _this4._gameInfo.bonusItems[i].idx,
                coin: _this4._gameInfo.bonusItems[i].coin
              });
              _context3.next = 6;
              return cc.vv.gameData.getManage().flyBeetle(idxsList);

             case 6:
              cc.vv.gameData.getCollectNode().checkCloseHuaDuo();
              if (!_this4._gameInfo.flowerReward) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return cc.vv.gameData.getManage().collectFlowerCoin([ {
                idx: _this4._gameInfo.flowerReward.idx,
                coin: _this4._gameInfo.flowerReward.winCoin
              } ]);

             case 10:
              if (_this4._gameInfo.extraFreeInfo) {
                cc.vv.gameData.getManage()._collectNode.active = false;
                for (_i = 0; _i < _this4._gameInfo.extraFreeInfo.slot1.stickyWilds.length; _i++) {
                  idx = _this4._gameInfo.extraFreeInfo.slot1.stickyWilds[_i];
                  symbol = _this4.GetSymbolByIdx(idx);
                  symbol && symbol.ShowById(101);
                }
              }
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              _context3.next = 18;
              return _this4.ShowWinCoin(nWin, nTotal, isNormalGame);

             case 18:
              if (_this4._gameInfo.freeResult && _this4._gameInfo.freeResult.freeInfo) {
                idxs = _this4._gameInfo.freeResult.freeInfo.scatterIdx;
                idxs || (idxs = _this4._gameInfo.freeResult.freeInfo.idxs);
                if (idxs) for (_i2 = 0; _i2 < idxs.length; _i2++) {
                  key = idxs[_i2];
                  _symbol = _this4.GetSymbolByIdx(Number(key));
                  _symbol && _symbol.playWinAnimation();
                }
              }
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context3.next = 29;
                break;
              }
              if (!cc.vv.gameData._isTriggerFree) {
                _context3.next = 27;
                break;
              }
              if (!(cc.vv.gameData._freeGameCnt > 0)) {
                _context3.next = 27;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_triggerFreespin);
              _context3.next = 25;
              return _this4.awaitTime(2);

             case 25:
              _context3.next = 27;
              return _this4.CheckFreeEnterFreeGame(cc.vv.gameData._freeGameCnt);

             case 27:
              _context3.next = 36;
              break;

             case 29:
              if (!cc.vv.gameData._isTriggerFree) {
                _context3.next = 36;
                break;
              }
              if (!(cc.vv.gameData._freeGameCnt > 0)) {
                _context3.next = 36;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_triggerFreespin);
              _context3.next = 34;
              return _this4.awaitTime(2);

             case 34:
              _context3.next = 36;
              return _this4.CheckEnterFreeGame(cc.vv.gameData._freeGameCnt);

             case 36:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 39;
                break;
              }
              _context3.next = 39;
              return _this4.CheckExitFreeGame();

             case 39:
              _this4.CanDoNextRound();

             case 40:
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
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_FreespinEnd);
                      _context5.next = 3;
                      return _this5.awaitTime(.5);

                     case 3:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context5.next = 7;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin, cc.vv.gameData.GetTotalFree());

                     case 7:
                      _context5.next = 9;
                      return cc.vv.gameData.getManage().showTransition2();

                     case 9:
                      _this5.Resume();
                      cc.vv.gameData.getManage()._collectNode.removeAllChildren();
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      cc.vv.gameData.SetTotalFree(0);
                      _context5.next = 15;
                      return _this5.awaitTime(.8);

                     case 15:
                      _context5.next = 17;
                      return _this5.ShowWinCoin(nWin, nTotal, true);

                     case 17:
                      sucess();

                     case 18:
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
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame(times) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var old, rest;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _this6.clearTopSymbol();
                      cc.vv.gameData.GetFreeSlotsScript().clearTopSymbol();
                      _context7.next = 4;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinFree(times);

                     case 4:
                      old = cc.vv.gameData.GetTotalFree();
                      rest = cc.vv.gameData.GetFreeTime();
                      _this6._bottomScript.UpdateFreeTime(old, old - rest);
                      if (!_this6._gameInfo.extraFreeInfo) {
                        _context7.next = 11;
                        break;
                      }
                      cc.vv.gameData.getManage()._collectNode.active = true;
                      _context7.next = 11;
                      return cc.vv.gameData.getManage().changeColorHouseToWildEx(_this6._gameInfo.extraFreeInfo.slot2.activeStickyWilds, _this6._gameInfo.extraFreeInfo.slot1.activeStickyWilds);

                     case 11:
                      _context7.next = 13;
                      return _this6.awaitTime(1);

                     case 13:
                      sucess();

                     case 14:
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
      CheckEnterFreeGame: function CheckEnterFreeGame(times) {
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
                      _this7.Backup();
                      _context9.next = 3;
                      return cc.vv.gameData.getPopWinManage().showFreeGameTimes(times);

                     case 3:
                      _this7.clearTopSymbol();
                      _context9.next = 6;
                      return cc.vv.gameData.getManage().showTransition1();

                     case 6:
                      if (!_this7._gameInfo.extraFreeInfo) {
                        _context9.next = 10;
                        break;
                      }
                      cc.vv.gameData.getManage()._collectNode.active = true;
                      _context9.next = 10;
                      return cc.vv.gameData.getManage().changeColorHouseToWild(_this7._gameInfo.extraFreeInfo.slot2.activeStickyWilds);

                     case 10:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_FloweryPixie_freeGame);
                      sucess();

                     case 12:
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
        if (bFree) {
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        this._collectNode.active = !bFree;
        this._reels_bg.active = !bFree;
      },
      ShowFreeTimes: function ShowFreeTimes(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
        } else this._bottomScript.ShowFreeModel(false);
      },
      CanDoNextRound: function CanDoNextRound() {
        this._topScript.StopMove();
        this._bottomScript.CanDoNextRound();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        this.clearTopSymbol();
        this._super();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      clearTopSymbol: function clearTopSymbol() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.stopWinTweenAction();
            symbol.ShowNormal();
            symbol.ShowKuang(false);
          }
        }
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
            if (3 === res.sid && this._gameInfo.bonusItems) for (var j = 0; j < this._gameInfo.bonusItems.length; j++) {
              var item = this._gameInfo.bonusItems[j];
              item.idx === i + 1 && (res.data = {
                coin: item.coin
              });
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
          var _item = this._reels[_i3];
          var reelRes = reelResults[_i3];
          _item.SetResult(reelRes);
        }
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        var canJiaSu = false;
        var threeCanJiaSu = false;
        if (this._gameInfo.extraFreeInfo) {
          var idx = [ 2, 7, 12 ];
          for (var i = 0; i < idx.length; i++) if (!this._gameInfo.extraFreeInfo.slot1.stickyWilds.includes(idx[i])) {
            canJiaSu = true;
            break;
          }
          var idx1 = [ 3, 8, 13 ];
          for (var _i4 = 0; _i4 < idx.length; _i4++) if (!this._gameInfo.extraFreeInfo.slot1.stickyWilds.includes(idx1[_i4])) {
            threeCanJiaSu = true;
            break;
          }
          if (!threeCanJiaSu && 2 === colIdx) return;
        } else canJiaSu = true;
        if (canJiaSu && !this._bStopRightnow) {
          var isPlayAnit = false;
          for (var _i5 = 0; _i5 < this._reels.length; _i5++) {
            var _idx = this._reels[_i5].GetReelIdx();
            if (_idx == colIdx + 1) {
              isPlayAnit = this._reels[_i5].playAntiAnimation();
              cc.vv.gameData.getManage()._isInFree && (isPlayAnit = isPlayAnit || cc.vv.gameData.GetFreeSlotsScript()._reels[_i5].playAntiAnimation());
            }
            if (_idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[_i5].AddDelayTime(nAddSpeedTime);
              cc.vv.gameData.getManage()._isInFree && cc.vv.gameData.GetFreeSlotsScript()._reels[_i5].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  SunWuKong_collectNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0123f+cNqFKCZ43NKxoKAlG", "SunWuKong_collectNode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _smallHua: [],
        _bigHua: [],
        _numBg: [],
        _click: null,
        _tips: null,
        _huaJin: [],
        _collectCoin: [],
        _unlockBet: [],
        _isunlock: []
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 4; i++) {
          this._smallHua[i - 1] = [];
          for (var j = 1; j < 9; j++) {
            var smallHua = cc.find("hua" + i + "/smallFlower" + j, this.node);
            this._smallHua[i - 1].push(smallHua);
          }
          this._bigHua.push(cc.find("hua" + i + "/bigFlower", this.node));
          this._numBg.push(cc.find("hua" + i + "/numBg", this.node));
          this._huaJin.push(cc.find("hua" + i, this.node));
        }
        this._click = cc.find("click", this.node);
        this._click.on("click", this.onClickTips, this);
        this._tips = cc.find("tips", this.node.parent);
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
      init: function init(flowerInfo) {
        var collectCoin = [];
        collectCoin.push(flowerInfo.flower1.coin);
        collectCoin.push(flowerInfo.flower2.coin);
        collectCoin.push(flowerInfo.flower3.coin);
        this._collectCoin = collectCoin;
        this._unlockBet = flowerInfo.betLevel;
        this.initSmallHua(0, flowerInfo.flower1.restCnt);
        this.initSmallHua(1, flowerInfo.flower2.restCnt);
        this.initSmallHua(2, flowerInfo.flower3.restCnt);
        this._isunlock = [ true, true, true ];
        this.initLockState();
      },
      initLockState: function initLockState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        if (curBet >= this._unlockBet[2]) {
          this.initHuaDuo(0, this._collectCoin[0], false);
          this.initHuaDuo(1, this._collectCoin[1], false);
          this.initHuaDuo(2, this._collectCoin[2], false);
        } else if (curBet >= this._unlockBet[1]) {
          this.initHuaDuo(0, this._collectCoin[0], false);
          this.initHuaDuo(1, this._collectCoin[1], false);
          this.initHuaDuo(2, this._collectCoin[2], true);
        } else if (curBet >= this._unlockBet[0]) {
          this.initHuaDuo(0, this._collectCoin[0], false);
          this.initHuaDuo(1, this._collectCoin[1], true);
          this.initHuaDuo(2, this._collectCoin[2], true);
        } else {
          this.initHuaDuo(0, this._collectCoin[0], true);
          this.initHuaDuo(1, this._collectCoin[1], true);
          this.initHuaDuo(2, this._collectCoin[2], true);
        }
      },
      updateLockState: function updateLockState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        if (curBet >= this._unlockBet[2]) {
          this.updateHuaDuo(0, this._collectCoin[0], false);
          this.updateHuaDuo(1, this._collectCoin[1], false);
          this.updateHuaDuo(2, this._collectCoin[2], false);
        } else if (curBet >= this._unlockBet[1]) {
          this.updateHuaDuo(0, this._collectCoin[0], false);
          this.updateHuaDuo(1, this._collectCoin[1], false);
          this.updateHuaDuo(2, this._collectCoin[2], true);
        } else if (curBet >= this._unlockBet[0]) {
          this.updateHuaDuo(0, this._collectCoin[0], false);
          this.updateHuaDuo(1, this._collectCoin[1], true);
          this.updateHuaDuo(2, this._collectCoin[2], true);
        } else {
          this.updateHuaDuo(0, this._collectCoin[0], true);
          this.updateHuaDuo(1, this._collectCoin[1], true);
          this.updateHuaDuo(2, this._collectCoin[2], true);
        }
      },
      getBigHua: function getBigHua(index) {
        return this._bigHua[index];
      },
      getCoin: function getCoin(index) {
        return this._collectCoin[index];
      },
      onClickTips: function onClickTips() {
        var _this2 = this;
        this._click.getComponent(cc.Button).interactable = false;
        this._tips.active = true;
        this._tips.scale = 0;
        cc.tween(this._tips).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(1).to(.5, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this2._tips.active = false;
          _this2._click.getComponent(cc.Button).interactable = true;
        }).start();
      },
      lockHua: function lockHua(index) {
        var isInit = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (index < 0 || index > 2) return;
        if (!isInit) {
          if (!this._isunlock[index]) return;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_BigHua_Close);
        }
        this._isunlock[index] = false;
        var bigHua = this._bigHua[index];
        var bigHuaSp = bigHua.getComponent(sp.Skeleton);
        bigHuaSp.setAnimation(0, "yahei", true);
        bigHua.y = 105;
        var huajin = this._huaJin[index];
        huajin.color = cc.color(60, 60, 60);
        var smallHua = this._smallHua[index];
        for (var i = 0; i < smallHua.length; i++) smallHua[i].opacity = 0;
        this._numBg[index].active = false;
      },
      unlockHua: function unlockHua(index) {
        var isInit = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (index < 0 || index > 2) return;
        if (!isInit) {
          if (this._isunlock[index]) return;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_BigHua_Open);
        }
        this._isunlock[index] = true;
        var smallHua = this._smallHua[index];
        for (var i = 0; i < smallHua.length; i++) smallHua[i].opacity = 255;
        var coin = this._collectCoin[index];
        var bigHua = this._bigHua[index];
        var bigHuaSp = bigHua.getComponent(sp.Skeleton);
        if (coin > 0) {
          bigHua.y = 120;
          bigHuaSp.setAnimation(0, "kai2", false);
          bigHuaSp.addAnimation(0, "idleframe6", true);
          this._numBg[index].active = true;
          cc.find("num", this._numBg[index]).getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        } else this.closeHuaDuo(index);
        var huajin = this._huaJin[index];
        huajin.color = cc.color(255, 255, 255);
      },
      hideCoin: function hideCoin(index) {
        this._numBg[index] && (this._numBg[index].active = false);
      },
      closeHuaDuo: function closeHuaDuo(index) {
        if (index < 0 || index > 2) return;
        this._numBg[index].active = false;
        var smallHua = this._smallHua[index];
        for (var i = 0; i < smallHua.length; i++) smallHua[i].opacity = 0;
        var bigHua = this._bigHua[index];
        var bigHuaSp = bigHua.getComponent(sp.Skeleton);
        bigHuaSp.setAnimation(0, "he", false);
        bigHuaSp.addAnimation(0, "idleframe5", true);
        bigHua.y = 105;
        this._collectCoin[index] = 0;
      },
      openHuaDuo: function openHuaDuo(index, coin) {
        if (index < 0 || index > 2) return;
        if (0 === this._collectCoin[index]) {
          var bigHua = this._bigHua[index];
          bigHua.y = 120;
          var bigHuaSp = bigHua.getComponent(sp.Skeleton);
          bigHuaSp.setAnimation(0, "kai2", false);
          bigHuaSp.addAnimation(0, "idleframe6", true);
        }
        this._collectCoin[index] += coin;
        this._numBg[index].active = true;
        cc.find("num", this._numBg[index]).getComponent(cc.Label).string = Global.convertNumToShort(this._collectCoin[index], 1e3, 1);
        this.resetSmallHua(index);
      },
      initHuaDuo: function initHuaDuo(index, coin, isClose) {
        if (index < 0 || index > 2) return;
        cc.find("num", this._numBg[index]).getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        isClose ? this.lockHua(index, true) : this.unlockHua(index, true);
      },
      updateHuaDuo: function updateHuaDuo(index, coin, isClose) {
        if (index < 0 || index > 2) return;
        cc.find("num", this._numBg[index]).getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        isClose ? this.lockHua(index) : this.unlockHua(index);
      },
      hideSmallHua: function hideSmallHua() {
        var _this3 = this;
        var _loop = function _loop(i) {
          if (0 === _this3._collectCoin[i]) return "continue";
          if (!_this3._isunlock[i]) return "continue";
          var smallHua = _this3._smallHua[i];
          var _loop2 = function _loop2(_i) {
            if (smallHua[_i].active) {
              cc.tween(smallHua[_i]).to(.5, {
                opacity: 0
              }).call(function() {
                smallHua[_i].active = false;
              }).start();
              return "break";
            }
          };
          for (var _i = 0; _i < smallHua.length; _i++) {
            var _ret2 = _loop2(_i);
            if ("break" === _ret2) break;
          }
        };
        for (var i = 0; i < this._smallHua.length; i++) {
          var _ret = _loop(i);
          if ("continue" === _ret) continue;
        }
      },
      initSmallHua: function initSmallHua(index, num) {
        if (index < 0 || index > 2) return;
        var smallHua = this._smallHua[index];
        for (var i = 0; i < 8 - num; i++) smallHua[i] && (smallHua[i].active = false);
      },
      resetSmallHua: function resetSmallHua(index) {
        if (index < 0 || index > 2) return;
        var smallHua = this._smallHua[index];
        for (var i = 0; i < smallHua.length; i++) {
          smallHua[i].opacity = 255;
          smallHua[i].active = true;
        }
      },
      checkCloseHuaDuo: function checkCloseHuaDuo() {
        for (var i = 0; i < this._smallHua.length; i++) {
          if (!this._isunlock[i]) continue;
          var coin = this._collectCoin[i];
          if (coin > 0) {
            var huaNum = 0;
            for (var j = 0; j < this._smallHua[i].length; j++) this._smallHua[i][j].active && huaNum++;
            if (0 === huaNum) {
              this._collectCoin[i] = 0;
              this.closeHuaDuo(i);
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SunWuKong_manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a76dezaaOxD4ob5HVm3lZGc", "SunWuKong_manage");
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
        _slotsfree: null,
        _slots: null,
        _node_pop_ui: null,
        _top: null,
        _bottom: null,
        _freeEffectNode: null,
        _bg_normal: null,
        _bg_free: null,
        _slotsfreeInitY: 0,
        _collectNode: null,
        _collectNode1: null,
        _col: 0,
        _row: 0,
        _cfg: null,
        _isInFree: false,
        _isInitEntry: true
      },
      onLoad: function onLoad() {
        this._bg_normal = cc.find("spr_bg_normal", this.node);
        this._bg_normal.zIndex = -10;
        this._bg_free = cc.find("spr_bg_free", this.node);
        this._bg_free.zIndex = -9;
        this._slotsfree = cc.find("slotsfree", this.node);
        this._slotsfree.zIndex = -8;
        cc.find("logo", this.node).zIndex = -7;
        this._character = cc.find("character", this.node);
        this._character.zIndex = -7;
        this._slots = cc.find("slots", this.node);
        this._slots.zIndex = -6;
        this._freeEffectNode = cc.find("freeEffectNode", this.node);
        this._freeEffectNode.zIndex = -5;
        this._node_pop_ui = cc.find("node_pop_ui", this.node);
        this._node_pop_ui.zIndex = -4;
        this._top = cc.find("LMSlots_Top", this.node);
        this._top.zIndex = -3;
        this._bottom = cc.find("LMSlots_Bottom", this.node);
        this._bottom.zIndex = -2;
        this._collectNode = cc.find("collectNode", this.node);
        this._collectNode.zIndex = -1;
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._collectNode1 = cc.find("collectNode1", this.node);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
        this._isInitEntry = true;
        Global.registerEvent(EventId.END_QUEUE_POP, this.onEventEndQueuePop, this);
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this._slotsfreeInitY = _this._slotsfree.y;
          _this.ReconnectShow();
        }, 0);
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onEventEndQueuePop: function onEventEndQueuePop() {
        if (this._isInitEntry) {
          this._isInitEntry = false;
          var isFree = cc.vv.gameData.GetTotalFree() > 0;
          isFree || this.playEnterGameEff();
        }
      },
      playEnterGameEff: function playEnterGameEff() {
        Global.SlotsSoundMgr.playEffect("enter");
      },
      ReconnectShow: function ReconnectShow() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.getCollectNode().init(cc.vv.gameData._deskInfo.flowerInfo);
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this3._isInFree = true;
                _this3._character.active = false;
                _this3._slotsfree.y = _this3._slotsfreeInitY + 400;
                _this3._freeEffectNode.y = _this3._slotsfreeInitY + 400;
                cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(true);
                cc.vv.gameData._deskInfo.extraFreeInfo && _this3.recoveryStickyWild(cc.vv.gameData._deskInfo.extraFreeInfo.slot1.stickyWilds, cc.vv.gameData._deskInfo.extraFreeInfo.slot2.stickyWilds);
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_FloweryPixie_freeGame);
              } else {
                _this3._isInFree = false;
                _this3._character.active = true;
                _this3._slotsfree.y = _this3._slotsfreeInitY;
                _this3._freeEffectNode.y = _this3._slotsfreeInitY;
                cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(false);
              }
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        cc.vv.gameData.getCollectNode().updateLockState();
      },
      showSlotsfree: function showSlotsfree() {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            var particleSystem, i, child;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this4._isInFree = true;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_Reel_UP);
                cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                cc.vv.gameData.GetSlotsScript().ShowFreeTimes(true);
                cc.tween(_this4._slotsfree).to(1.7, {
                  y: _this4._slotsfreeInitY + 400
                }).start();
                _this4._freeEffectNode.active = true;
                particleSystem = _this4._freeEffectNode.getChildByName("huaxianzi_sahuaban2").getComponent(cc.ParticleSystem);
                particleSystem.resetSystem();
                _this4.scheduleOnce(function() {
                  particleSystem.stopSystem();
                }, 1.7);
                _this4._freeEffectNode.y = _this4._slotsfreeInitY;
                cc.tween(_this4._freeEffectNode).to(1.7, {
                  y: _this4._slotsfreeInitY + 400
                }).start();
                _this4._freeEffectNode.getChildByName("huaxianzi_sahuaban2").runAction(cc.shake(1.7, 10, 10));
                for (i = 0; i < _this4._slotsfree.children.length; i++) {
                  child = _this4._slotsfree.children[i];
                  child.runAction(cc.shake(1.7, 10, 10));
                }
                _context2.next = 15;
                return _this4.awaitTime(1.7);

               case 15:
                success();

               case 16:
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
      hideSlotsfree: function hideSlotsfree() {
        this._isInFree = false;
        this._slotsfree.y = this._slotsfreeInitY;
        this._freeEffectNode.y = this._slotsfreeInitY;
        cc.vv.gameData.GetSlotsScript().ShowGameview(false);
        cc.vv.gameData.GetSlotsScript().ShowFreeTimes(false);
        cc.vv.gameData.GetFreeSlotsScript().clearTopSymbol();
      },
      showTransition1: function showTransition1() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_Guochang);
                _this5._character.active = true;
                _this5._character.zIndex = -7;
                _this5._character.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
                _context3.next = 6;
                return _this5.awaitTime(1.6);

               case 6:
                _this5._character.zIndex = -1;
                _this5.scheduleOnce(function() {
                  _this5._character.active = false;
                  _this5._character.zIndex = -7;
                }, .8);
                _context3.next = 10;
                return _this5.showSlotsfree();

               case 10:
                success();

               case 11:
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
      showTransition2: function showTransition2() {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_Guochang2);
                if (!_this6._free_chara) {
                  _this6._free_chara = cc.instantiate(_this6._character);
                  _this6._free_chara.parent = _this6._character.parent;
                  _this6._free_chara.position = _this6._character.position;
                }
                _this6._free_chara.active = true;
                _this6._free_chara.zIndex = -1;
                _this6._free_chara.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
                _this6._free_chara.getComponent(sp.Skeleton).setCompleteListener(function() {
                  _this6._free_chara.active = false;
                });
                _context4.next = 8;
                return _this6.awaitTime(1.6);

               case 8:
                _this6._character.active = true;
                _this6._character.zIndex = -7;
                _this6._character.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                _this6.hideSlotsfree();
                success();

               case 13:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      flyBeetle: function flyBeetle(indexList) {
        var _this7 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                if (!(indexList && 0 === indexList.length)) {
                  _context5.next = 3;
                  break;
                }
                success();
                return _context5.abrupt("return");

               case 3:
                _loop = function _loop(i) {
                  var idx = indexList[i].idx;
                  var col = (idx - 1) % _this7._col;
                  if (col > 0 && col < 4) {
                    var huaduo = cc.vv.gameData.getCollectNode().getBigHua(col - 1);
                    var huaduoPos = huaduo.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endPos = _this7._collectNode1.convertToNodeSpaceAR(huaduoPos);
                    var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                    if (symbol) {
                      var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      var startPos = _this7._collectNode1.convertToNodeSpaceAR(symbolPos);
                      var beetle = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this7._cfg.symbolPrefab));
                      beetle.position = startPos;
                      beetle.parent = _this7._collectNode1;
                      for (var j = 0; j < beetle.children.length; j++) beetle.children[j].active = false;
                      var w1 = cc.find("w1", beetle);
                      w1.active = true;
                      var w1Sp = w1.getComponent(sp.Skeleton);
                      w1Sp.setAnimation(0, "actionframe", false);
                      w1Sp.setCompleteListener(function() {
                        beetle.parent = null;
                        w1Sp.setCompleteListener(null);
                      });
                      cc.tween(beetle).delay(.4).to(.7, {
                        position: endPos
                      }).start();
                      var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("beetleTW"));
                      var liziSystem = lizi.getComponent(cc.ParticleSystem);
                      liziSystem.resetSystem();
                      lizi.position = startPos;
                      lizi.parent = _this7._collectNode1;
                      lizi.zIndex = -1;
                      cc.tween(lizi).delay(.4).to(.7, {
                        position: endPos
                      }).call(function() {
                        liziSystem.stopSystem();
                        cc.vv.gameData.getCollectNode().openHuaDuo(col - 1, indexList[i].coin);
                      }).delay(2).removeSelf().start();
                    }
                  }
                };
                for (i = 0; i < indexList.length; i++) _loop(i);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_Bonus_1_Trigger);
                _context5.next = 8;
                return _this7.awaitTime(1.1);

               case 8:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_Bonus_1_Down_collect);
                success();

               case 10:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      collectFlowerCoin: function collectFlowerCoin(indexList) {
        var _this8 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var _loop2, i, _loop3, _i;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                if (!(indexList && 0 === indexList.length)) {
                  _context6.next = 3;
                  break;
                }
                success();
                return _context6.abrupt("return");

               case 3:
                _context6.next = 5;
                return _this8.awaitTime(.2);

               case 5:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_Bonus_2_Triigger);
                _loop2 = function _loop2(i) {
                  var idx = indexList[i].idx;
                  var col = (idx - 1) % _this8._col;
                  if (col > 0 && col < 4) {
                    cc.vv.gameData.getCollectNode().hideCoin(col - 1);
                    var huaduo = cc.vv.gameData.getCollectNode().getBigHua(col - 1);
                    var huaduoPos = huaduo.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this8._collectNode1.convertToNodeSpaceAR(huaduoPos);
                    var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                    if (symbol) {
                      var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      var endPos = _this8._collectNode1.convertToNodeSpaceAR(symbolPos);
                      var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("flowerTW"));
                      lizi.parent = _this8._collectNode1;
                      lizi.position = startPos;
                      var liziSystem = lizi.getComponent(cc.ParticleSystem);
                      liziSystem.resetSystem();
                      cc.tween(lizi).to(.5, {
                        position: endPos
                      }).call(function() {
                        liziSystem.stopSystem();
                        symbol.playKaiHuaAnimation(indexList[i].coin);
                      }).delay(2).removeSelf().start();
                    }
                  }
                };
                for (i = 0; i < indexList.length; i++) _loop2(i);
                _context6.next = 10;
                return _this8.awaitTime(.5);

               case 10:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_Bonus_2_Down_collect);
                _context6.next = 13;
                return _this8.awaitTime(1.5);

               case 13:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_FloweryPixie_LiZi_Fly);
                _loop3 = function _loop3(_i) {
                  var idx = indexList[_i].idx;
                  var col = (idx - 1) % _this8._col;
                  if (col > 0 && col < 4) {
                    var lbl_win_nor = cc.find("winBg/lbl_winNum_nor", cc.vv.gameData.GetBottomScript().node);
                    var bottomPos = lbl_win_nor.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endPos = _this8._collectNode1.convertToNodeSpaceAR(bottomPos);
                    var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                    if (symbol) {
                      var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      var startPos = _this8._collectNode1.convertToNodeSpaceAR(symbolPos);
                      var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("flowerTW"));
                      lizi.parent = _this8._collectNode1;
                      lizi.position = startPos;
                      var liziSystem = lizi.getComponent(cc.ParticleSystem);
                      liziSystem.resetSystem();
                      cc.tween(lizi).to(.5, {
                        position: endPos
                      }).call(function() {
                        liziSystem.stopSystem();
                        cc.vv.gameData.getCollectNode().closeHuaDuo(col - 1);
                        cc.vv.gameData.GetBottomScript().SetWin(cc.vv.gameData.GetBottomScript().getCurrentWin() + indexList[_i].coin);
                      }).delay(2).removeSelf().start();
                    }
                  }
                };
                for (_i = 0; _i < indexList.length; _i++) _loop3(_i);
                _context6.next = 18;
                return _this8.awaitTime(.5);

               case 18:
                success();

               case 19:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      changeColorHouseToWild: function changeColorHouseToWild(indexList) {
        var _this9 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var i, idx, symbol, symbolPos, endPos, stickyWild, stickyScript, _loop4, _i2;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                if (indexList) {
                  _context7.next = 3;
                  break;
                }
                success();
                return _context7.abrupt("return");

               case 3:
                if (!(0 === indexList.length)) {
                  _context7.next = 6;
                  break;
                }
                success();
                return _context7.abrupt("return");

               case 6:
                for (i = 0; i < indexList.length; i++) {
                  idx = indexList[i];
                  symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  if (symbol) {
                    symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this9._collectNode.convertToNodeSpaceAR(symbolPos);
                    stickyWild = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this9._cfg.symbolPrefab));
                    stickyWild.parent = _this9._collectNode;
                    stickyWild.position = endPos;
                    stickyWild.zIndex = idx;
                    stickyScript = stickyWild.addComponent(_this9._cfg.scripts.Symbols);
                    stickyScript.ShowById(101);
                    stickyScript.showChangeWild();
                    symbol.ShowById(101);
                  }
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_reel_ScatterToWIld);
                _context7.next = 10;
                return _this9.awaitTime(1);

               case 10:
                _loop4 = function _loop4(_i2) {
                  var idx = indexList[_i2];
                  var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  var freesymbol = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(idx);
                  if (symbol && freesymbol) {
                    var _symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this9._collectNode.convertToNodeSpaceAR(_symbolPos);
                    var freesymbolPos = freesymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var _endPos = _this9._collectNode.convertToNodeSpaceAR(freesymbolPos);
                    var _stickyWild = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this9._cfg.symbolPrefab));
                    _stickyWild.parent = _this9._collectNode;
                    _stickyWild.position = startPos;
                    _stickyWild.zIndex = idx;
                    var _stickyScript = _stickyWild.addComponent(_this9._cfg.scripts.Symbols);
                    _stickyScript.ShowById(101);
                    cc.tween(_stickyWild).parallel(cc.tween().to(.6, {
                      position: _endPos
                    }, {
                      easing: "quadIn"
                    }), cc.tween().to(.3, {
                      scale: .7
                    }).to(.3, {
                      scale: .5
                    })).call(function() {
                      _stickyScript.showChangeWildBuLing();
                      freesymbol.ShowById(101);
                    }).start();
                  }
                };
                for (_i2 = 0; _i2 < indexList.length; _i2++) _loop4(_i2);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_reel_WIld_copy);
                _context7.next = 15;
                return _this9.awaitTime(1.1);

               case 15:
                success();

               case 16:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      changeColorHouseToWildEx: function changeColorHouseToWildEx(indexList1, indexList2) {
        var _this10 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var i, idx, symbol, symbolPos, endPos, stickyWild, stickyScript, _i3, _idx, _symbol, _symbolPos2, _endPos2, _stickyWild2, _stickyScript2, _loop5, _i4, _loop6, _i5;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                if (!(0 === indexList1.length && 0 === indexList2.length)) {
                  _context8.next = 3;
                  break;
                }
                success();
                return _context8.abrupt("return");

               case 3:
                for (i = 0; i < indexList1.length; i++) {
                  idx = indexList1[i];
                  symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  if (symbol) {
                    symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this10._collectNode.convertToNodeSpaceAR(symbolPos);
                    stickyWild = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this10._cfg.symbolPrefab));
                    stickyWild.parent = _this10._collectNode;
                    stickyWild.position = endPos;
                    stickyWild.zIndex = idx;
                    stickyScript = stickyWild.addComponent(_this10._cfg.scripts.Symbols);
                    stickyScript.ShowById(101);
                    stickyScript.showChangeWild();
                    symbol.ShowById(101);
                  }
                }
                for (_i3 = 0; _i3 < indexList2.length; _i3++) {
                  _idx = indexList2[_i3];
                  _symbol = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(_idx);
                  if (_symbol) {
                    _symbolPos2 = _symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    _endPos2 = _this10._collectNode.convertToNodeSpaceAR(_symbolPos2);
                    _stickyWild2 = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this10._cfg.symbolPrefab));
                    _stickyWild2.parent = _this10._collectNode;
                    _stickyWild2.position = _endPos2;
                    _stickyWild2.zIndex = _idx;
                    _stickyScript2 = _stickyWild2.addComponent(_this10._cfg.scripts.Symbols);
                    _stickyScript2.ShowById(101);
                    _stickyScript2.showChangeWild();
                    _symbol.ShowById(101);
                  }
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_reel_ScatterToWIld);
                _context8.next = 8;
                return _this10.awaitTime(1);

               case 8:
                _loop5 = function _loop5(_i4) {
                  var idx = indexList1[_i4];
                  var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  var freesymbol = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(idx);
                  if (symbol && freesymbol) {
                    var _symbolPos3 = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this10._collectNode.convertToNodeSpaceAR(_symbolPos3);
                    var freesymbolPos = freesymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var _endPos3 = _this10._collectNode.convertToNodeSpaceAR(freesymbolPos);
                    var _stickyWild3 = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this10._cfg.symbolPrefab));
                    _stickyWild3.parent = _this10._collectNode;
                    _stickyWild3.position = startPos;
                    _stickyWild3.zIndex = idx;
                    var _stickyScript3 = _stickyWild3.addComponent(_this10._cfg.scripts.Symbols);
                    _stickyScript3.ShowById(101);
                    cc.tween(_stickyWild3).parallel(cc.tween().to(.6, {
                      position: _endPos3
                    }, {
                      easing: "quadIn"
                    }), cc.tween().to(.3, {
                      scale: .7
                    }).to(.3, {
                      scale: .5
                    })).call(function() {
                      _stickyScript3.showChangeWildBuLing();
                      freesymbol.ShowById(101);
                    }).start();
                  }
                };
                for (_i4 = 0; _i4 < indexList1.length; _i4++) _loop5(_i4);
                _loop6 = function _loop6(_i5) {
                  var idx = indexList2[_i5];
                  var symbol = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(idx);
                  var freesymbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  if (symbol && freesymbol) {
                    var _symbolPos4 = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this10._collectNode.convertToNodeSpaceAR(_symbolPos4);
                    var freesymbolPos = freesymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var _endPos4 = _this10._collectNode.convertToNodeSpaceAR(freesymbolPos);
                    var _stickyWild4 = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this10._cfg.symbolPrefab));
                    _stickyWild4.parent = _this10._collectNode;
                    _stickyWild4.position = startPos;
                    _stickyWild4.zIndex = idx;
                    var _stickyScript4 = _stickyWild4.addComponent(_this10._cfg.scripts.Symbols);
                    _stickyScript4.ShowById(101);
                    cc.tween(_stickyWild4).parallel(cc.tween().to(.6, {
                      position: _endPos4
                    }, {
                      easing: "quadIn"
                    }), cc.tween().to(.3, {
                      scale: .7
                    }).to(.3, {
                      scale: .5
                    })).call(function() {
                      _stickyScript4.showChangeWildBuLing();
                      freesymbol.ShowById(101);
                    }).start();
                  }
                };
                for (_i5 = 0; _i5 < indexList2.length; _i5++) _loop6(_i5);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.FloweryPixie_reel_WIld_copy);
                _context8.next = 15;
                return _this10.awaitTime(1.1);

               case 15:
                success();

               case 16:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      recoveryStickyWild: function recoveryStickyWild(indexList1, indexList2) {
        for (var i = 0; i < indexList1.length; i++) {
          var idx = indexList1[i];
          var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
          if (symbol) {
            var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
            var startPos = this._collectNode.convertToNodeSpaceAR(symbolPos);
            var stickyWild = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
            stickyWild.parent = this._collectNode;
            stickyWild.position = startPos;
            stickyWild.zIndex = idx;
            var stickyScript = stickyWild.addComponent(this._cfg.scripts.Symbols);
            stickyScript.ShowById(101);
          }
        }
        for (var _i6 = 0; _i6 < indexList2.length; _i6++) {
          var _idx2 = indexList2[_i6];
          var _symbol2 = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(_idx2);
          if (_symbol2) {
            var _symbolPos5 = _symbol2.node.convertToWorldSpaceAR(cc.v2(0, 0));
            var _startPos = this._collectNode.convertToNodeSpaceAR(_symbolPos5);
            var _stickyWild5 = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
            _stickyWild5.parent = this._collectNode;
            _stickyWild5.position = _startPos;
            _stickyWild5.zIndex = _idx2;
            var _stickyScript5 = _stickyWild5.addComponent(this._cfg.scripts.Symbols);
            _stickyScript5.ShowById(101);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SunWuKong_reelfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e91at0bltD6Ie/KJXhPa1p", "SunWuKong_reelfree");
    "use strict";
    cc.Class({
      extends: require("SunWuKong_reel"),
      properties: {},
      start: function start() {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetFreeSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.GetFreeSlotsScript();
          slots.OnReelReadyToStop(this._reelIdx);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.GetFreeSlotsScript();
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.playReelStop();
        var slots = cc.vv.gameData.GetFreeSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetFreeSlotsScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    SunWuKong_reel: "SunWuKong_reel"
  } ],
  SunWuKong_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "982543GE/ZGfpQpGNqMUW52", "SunWuKong_reel");
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
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var info = _step2.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation(true);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator3 = _createForOfIteratorHelper(this._reelState), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _info = _step3.value;
              if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  SunWuKong_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e216ebDRJ1Lx65Ejq3TzZdi", "SunWuKong_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/SunWuKong/",
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
        FloweryPixie_Guochang: "FloweryPixie_Guochang",
        FloweryPixie_Guochang2: "FloweryPixie_Guochang2",
        FloweryPixie_reel_ScatterToWIld: "FloweryPixie_reel_ScatterToWIld",
        FloweryPixie_reel_stop: "FloweryPixie_reel_stop",
        FloweryPixie_reel_WIld_copy: "FloweryPixie_reel_WIld_copy",
        FloweryPixie_scatter_down: "FloweryPixie_scatter_down",
        FloweryPixie_scatter_down1: "FloweryPixie_scatter_down1",
        FloweryPixie_scatter_down2: "FloweryPixie_scatter_down2",
        FloweryPixie_scatter_down3: "FloweryPixie_scatter_down3",
        FloweryPixie_triggerFreespin: "FloweryPixie_triggerFreespin",
        music_FloweryPixie_baseGame: "music_FloweryPixie_baseGame",
        music_FloweryPixie_BigHua_Close: "music_FloweryPixie_BigHua_Close",
        music_FloweryPixie_BigHua_Open: "music_FloweryPixie_BigHua_Open",
        music_FloweryPixie_Bonus_1_Down_collect: "music_FloweryPixie_Bonus_1_Down_collect",
        music_FloweryPixie_Bonus_1_Trigger: "music_FloweryPixie_Bonus_1_Trigger",
        music_FloweryPixie_Bonus_2_Down_collect: "music_FloweryPixie_Bonus_2_Down_collect",
        music_FloweryPixie_Bonus_2_Triigger: "music_FloweryPixie_Bonus_2_Triigger",
        music_FloweryPixie_Bonus1_Down: "music_FloweryPixie_Bonus1_Down",
        music_FloweryPixie_Bonus2_Down: "music_FloweryPixie_Bonus2_Down",
        music_FloweryPixie_enter: "music_FloweryPixie_enter",
        music_FloweryPixie_freeGame: "music_FloweryPixie_freeGame",
        music_FloweryPixie_FreespinEnd: "music_FloweryPixie_FreespinEnd",
        music_FloweryPixie_FreespinOver_view: "music_FloweryPixie_FreespinOver_view",
        music_FloweryPixie_FreespinStart_view: "music_FloweryPixie_FreespinStart_view",
        music_FloweryPixie_last_win_1: "music_FloweryPixie_last_win_1",
        music_FloweryPixie_last_win_2: "music_FloweryPixie_last_win_2",
        music_FloweryPixie_last_win_3: "music_FloweryPixie_last_win_3",
        music_FloweryPixie_LiZi_Fly: "music_FloweryPixie_LiZi_Fly",
        music_FloweryPixie_LongRun: "music_FloweryPixie_LongRun",
        music_FloweryPixie_Reel_UP: "music_FloweryPixie_Reel_UP"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  SunWuKong_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60bc6UwEtZKbr8gBJMKCaso", "SunWuKong_symbol");
    "use strict";
    var coinMult = [ 1, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 3.5, 4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 7, 8, 9, 10 ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
      },
      ShowById: function ShowById(id, data) {
        this._id = id;
        this._data = data;
        this._state = "normal";
        this.node.scale = .5;
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].node) {
          this._showNode = cc.find(cfg.symbol[id].node, this.node);
          3 === id && (cc.find("s1/coin", this.node).active = false);
          4 === id && (cc.find("w2/coin", this.node).active = false);
          this._showNode.active = true;
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
        this._data && this.setSymbolCoin(this._data.coin, this.node);
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
          if (cfg.symbol[id].win_ani && "" !== cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) if (cfg.symbol[id].win_ani.name2) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
              nodeSp.addAnimation(0, cfg.symbol[id].win_ani.name2, true);
            } else nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        } else if (cfg.symbol[id] && cfg.symbol[id].win_ani && "" !== cfg.symbol[id].win_ani.name) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var _aniNode = this.setAnimationToTop(true);
          _aniNode.active = true;
          var _topShowNode = cc.find(cfg.symbol[id].node, _aniNode);
          _topShowNode.active = true;
          _aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeAnimation = _topShowNode.getComponent(cc.Animation);
          nodeAnimation && nodeAnimation.play(cfg.symbol[id].win_ani.name);
        } else {
          this._state = "win";
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playStopAnimation: function playStopAnimation(isStop) {
        var _this = this;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" !== cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani ? nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true) : nodeSp.setCompleteListener(function() {
                _this.ShowNormal();
                nodeSp.setCompleteListener(null);
              });
            }
            isStop && this.OnSymbolAction(aniNode);
          }
        } else if (cfg.symbol[id] && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var _aniNode2 = this.setAnimationToTop(true);
          _aniNode2.active = true;
          var _topShowNode2 = cc.find(cfg.symbol[id].node, _aniNode2);
          _topShowNode2.active = true;
          if ("" !== cfg.symbol[id].stop_ani.name) {
            _aniNode2.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeAnimation = _topShowNode2.getComponent(cc.Animation);
            if (nodeAnimation) {
              nodeAnimation.play(cfg.symbol[id].stop_ani.name);
              nodeAnimation.on("finished", function() {
                nodeAnimation.off("finished");
                if (cfg.symbol[id].idle_ani) {
                  _this.setAnimationToTop(false);
                  _this.playidleAnimation();
                } else _this.ShowNormal();
              });
            }
            isStop && this.OnSymbolAction(_aniNode2);
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
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" !== cfg.symbol[id].idle_ani.name) {
            this.node.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        } else if (cfg.symbol[id] && cfg.symbol[id].idle_ani) {
          this._state = "idle";
          if ("" !== cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeAnimation = this._showNode.getComponent(cc.Animation);
            isPlay = true;
            nodeAnimation && nodeAnimation.play(cfg.symbol[id].idle_ani.name);
          }
        }
        return isPlay;
      },
      playWinTweenAction: function playWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolWin");
      },
      stopWinTweenAction: function stopWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolIdel");
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randVal;
        var randomcfg = this.GetRandomCfg();
        if (randomcfg) {
          var reelrandomCfg = randomcfg[this._reelIdx + 1];
          if (reelrandomCfg) {
            var randIdx = cc.vv.gameData.GetReelRandomIdx(this._reelIdx);
            randIdx && (randIdx = Global.random(1, reelrandomCfg.length) - 1);
            randVal = reelrandomCfg[randIdx];
            if (!randVal) {
              randIdx = 0;
              randVal = reelrandomCfg[randIdx];
            }
            cc.vv.gameData.SetReelRandomIdx(this._reelIdx, ++randIdx);
          }
        } else {
          var cfg = cc.vv.gameData.getGameCfg();
          var _randIdx = Global.random(1, cfg.randomSymbols.length);
          randVal = cfg.randomSymbols[_randIdx - 1];
        }
        var data = null;
        if (3 === randVal) {
          var betCoin = cc.vv.gameData.GetTotalBet();
          var coin = coinMult[Global.random(0, coinMult.length - 1)];
          data = {
            coin: coin * betCoin
          };
        }
        this.ShowById(randVal, data);
        return randVal;
      },
      setSymbolCoin: function setSymbolCoin(coin, node) {
        var s1 = cc.find("s1", node);
        var coinNum = cc.find("coin", s1);
        coinNum.active = true;
        coinNum.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
      },
      playKaiHuaAnimation: function playKaiHuaAnimation(coin) {
        if (4 !== this._id) return;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if (cfg.symbol[id].win_ani && "" !== cfg.symbol[id].win_ani.name) {
            this.node.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
              nodeSp.addAnimation(0, cfg.symbol[id].win_ani.name2, true);
            }
          }
          cc.find("coin", this._showNode).active = true;
          cc.find("coin", this._showNode).getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        }
      },
      showChangeWild: function showChangeWild() {
        if (101 !== this._id) return;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, cfg.symbol[id].change_ani.name, false);
            nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
      },
      showChangeWildBuLing: function showChangeWildBuLing() {
        if (101 !== this._id) return;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, cfg.symbol[id].fly_ani.name, false);
            nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
      },
      OnSymbolAction: function OnSymbolAction(node) {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        time /= cc.vv.gameData.GetSlotsScript().GetTimeScale();
        cc.tween(node).to(time, {
          position: cc.v2(node.x, node.y + distance)
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "SunWuKong_Bottom", "SunWuKong_Cfg", "SunWuKong_GameData", "SunWuKong_Logic", "SunWuKong_Pop", "SunWuKong_PrizePool", "SunWuKong_Slots", "SunWuKong_Slotsfree", "SunWuKong_collectNode", "SunWuKong_manage", "SunWuKong_reel", "SunWuKong_reelfree", "SunWuKong_sound", "SunWuKong_symbol" ]);