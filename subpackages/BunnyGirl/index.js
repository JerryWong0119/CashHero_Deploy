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
  BunnyGirl_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c35eevZDNRBOIbPYigsfVbX", "BunnyGirl_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      },
      OnClickSpin: function OnClickSpin() {
        cc.vv.gameData.getManage()._isInBonus ? cc.vv.gameData.getBonusGame().StartMove() : this._super();
      },
      OnClickStop: function OnClickStop() {
        cc.vv.gameData.getManage()._isInBonus ? cc.vv.gameData.getBonusGame().StopMove() : this._super();
      },
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        if ("bounsGame" == strState) {
          this._btn_spin.active = true;
          this._SetBtnEnable(this._btn_spin, true);
          this._btn_stop.active = false;
          this._SetBtnEnable(this._btn_add_bet, false);
          this._SetBtnEnable(this._btn_minus_bet, false);
          this._SetBtnEnable(this._btn_max_bet, false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  BunnyGirl_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03d57NK0NRE5ptgfcK7370Q", "BunnyGirl_Cfg");
    "use strict";
    var _symbol, _symbolArray, _cardmap, _cardmapfree;
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
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        },
        stop_ani: {
          name: "buling",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_ani: {
          name: "pearlsWin",
          zIndex: 800
        },
        idle_ani: {
          name: "pearlsIdel",
          zIndex: 800
        },
        stop_ani: {
          name: "pearlsStop",
          zIndex: 800
        },
        settle_ani: {
          name: "pearlsStop",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4"
      }), _defineProperty(_symbol, 5, {
        node: "s5"
      }), _defineProperty(_symbol, 6, {
        node: "s6"
      }), _defineProperty(_symbol, 7, {
        node: "s7"
      }), _defineProperty(_symbol, 8, {
        node: "s8"
      }), _defineProperty(_symbol, 9, {
        node: "s9"
      }), _defineProperty(_symbol, 10, {
        node: "s10"
      }), _defineProperty(_symbol, 11, {
        node: "s11"
      }), _defineProperty(_symbol, 12, {
        node: "s12"
      }), _defineProperty(_symbol, 101, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 102, {
        node: "s14",
        win_node: "w13",
        win_ani: {
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 103, {
        node: "s15",
        win_node: "w13",
        win_ani: {
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 104, {
        node: "s16",
        win_node: "w13",
        win_ani: {
          name: "actionframe",
          zIndex: 800
        },
        idle_ani: {
          name: "idleframe",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 201, {
        node: "s2"
      }), _symbol),
      symbolArray: (_symbolArray = {}, _defineProperty(_symbolArray, 1, [ 1 ]), _defineProperty(_symbolArray, 2, [ 2 ]), 
      _defineProperty(_symbolArray, 3, [ 3 ]), _defineProperty(_symbolArray, 4, [ 4, 4, 4, 4 ]), 
      _defineProperty(_symbolArray, 5, [ 5, 5, 5, 5 ]), _defineProperty(_symbolArray, 6, [ 6, 6, 6, 6 ]), 
      _defineProperty(_symbolArray, 7, [ 7, 7, 7, 7 ]), _defineProperty(_symbolArray, 8, [ 8, 8, 8, 8 ]), 
      _defineProperty(_symbolArray, 9, [ 9, 9, 9, 9 ]), _defineProperty(_symbolArray, 10, [ 10, 10, 10, 10 ]), 
      _defineProperty(_symbolArray, 11, [ 11, 11, 11, 11 ]), _defineProperty(_symbolArray, 12, [ 12, 12, 12, 12 ]), 
      _defineProperty(_symbolArray, 104, [ 101, 102, 103, 104 ]), _symbolArray),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "BunnyGirl_Bottom",
        Slots: "BunnyGirl_Slots",
        Reels: "BunnyGirl_reel",
        Symbols: "BunnyGirl_symbol",
        Sound: "BunnyGirl_sound"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 130,
        height: 110
      },
      helpItems: [ "games/BunnyGirl/prefab/LMSlots_Help_item1", "games/BunnyGirl/prefab/LMSlots_Help_item2", "games/BunnyGirl/prefab/LMSlots_Help_item3", "games/BunnyGirl/prefab/LMSlots_Help_item4", "games/BunnyGirl/prefab/LMSlots_Help_item5", "games/BunnyGirl/prefab/LMSlots_Help_item6", "games/BunnyGirl/prefab/LMSlots_Help_item7" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      randomSymbolsBonus: [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 12, 12, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 104, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 104, 11, 3, 3, 3, 3, 12, 12, 8, 8, 8, 104, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 104, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 3, 3, 3, 3, 11, 10, 10, 10, 7, 7, 7, 7, 104, 12, 12, 12, 12, 5, 104, 1, 11, 5, 8, 9, 3, 3, 3, 3, 104, 1, 7, 7, 7, 9, 9, 9, 7, 7, 104, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 104, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 104, 104, 104, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 104, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmap, 2, [ 7, 7, 7, 7, 8, 8, 7, 104, 11, 11, 11, 3, 3, 3, 3, 1, 1, 7, 7, 3, 3, 3, 3, 1, 2, 104, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 4, 4, 4, 9, 9, 3, 3, 3, 3, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 3, 3, 3, 3, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 104, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 3, 3, 3, 3, 4, 4, 2, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 104, 104, 104, 10, 10, 10, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmap, 3, [ 3, 3, 3, 3, 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 104, 3, 3, 3, 3, 4, 4, 4, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 2, 1, 8, 104, 12, 12, 12, 12, 6, 6, 6, 6, 104, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 104, 3, 3, 3, 3, 4, 4, 104, 10, 10, 10, 10, 8, 8, 4, 4, 3, 3, 3, 3, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 3, 3, 3, 3, 5, 5, 5, 12, 12, 104, 104, 104, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 104, 1, 1, 11, 104, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 104, 2, 3, 3, 3, 3, 7, 7, 7, 4, 3, 3, 3, 3, 7, 7, 4, 4, 12, 3, 3, 3, 3, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 3, 3, 3, 3, 8, 8, 8, 8, 7, 7, 1, 1, 2, 12, 12, 104, 7, 7, 7, 7, 104, 12, 12, 12, 12, 8, 9, 9, 11, 11, 104, 104, 4, 4, 8, 8, 8, 104, 3, 3, 3, 3, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 104, 104, 104, 1, 1, 104, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 6, 8, 4, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 1, 4, 7, 7, 7, 8, 104, 10, 10, 11, 11, 11, 1, 1, 6, 3, 3, 3, 3, 11, 11, 11, 4, 4, 4, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 3, 3, 3, 3, 7, 7, 7, 7, 104, 1, 1, 3, 3, 3, 3, 104, 8, 8, 8, 8, 6, 6, 6, 5, 104, 3, 3, 3, 3, 5, 5, 5, 5, 104, 12, 12, 12, 12, 8, 12, 12, 12, 104, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 4, 4, 3, 3, 3, 3, 10, 10, 10, 1, 4, 4, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 104, 1, 7, 7, 4, 7, 7, 4, 4, 4, 7, 104, 11, 11, 11, 4, 4, 4, 7, 10, 104, 104, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmap),
      cardmapfree: (_cardmapfree = {}, _defineProperty(_cardmapfree, 1, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 2, [ 7, 7, 7, 7, 201, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 201, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 201, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 201, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 201, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 201, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 201, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 201, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 201, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 201, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree, 3, [ 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 4, 4, 4, 4, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 1, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 4, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 7, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 1, 1, 12, 9, 9, 9, 5, 5, 5, 8, 8, 8, 1, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 4, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 5, [ 7, 7, 7, 7, 201, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 201, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 201, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 201, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 201, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 201, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 201, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 201, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 201, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 201, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree, 6, [ 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 4, 4, 4, 4, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 1, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 4, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 7, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 1, 1, 12, 9, 9, 9, 5, 5, 5, 8, 8, 8, 1, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _cardmapfree),
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
        path: "games/BunnyGirl/",
        win1: [ "music_Mermaid_last_win_1", "" ],
        win2: [ "music_Mermaid_last_win_2", "" ]
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/BunnyGirl/",
        reelStopSound: "Mermaid_reelstop",
        symbolStopSound: "music_Mermaid_Big_Scatter_Down",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2, 201 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0, 3 ],
        antiNode: "jilikuang",
        path: "games/BunnyGirl/",
        reelStopSound: "Mermaid_reelstop",
        symbolStopSound: "Mermaid_scatter_down",
        antSound: "Mermaid_longRun",
        antSpeed: 2e3
      } ],
      AddAntiTime: 5,
      normalBgm: "music_Mermaid_NormalBG",
      grayColor: cc.color(60, 60, 60),
      normalColor: cc.color(255, 255, 255),
      sysFloatOffsetPos: cc.v2(0, 10)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  BunnyGirl_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23e44nQculOrqQNICi2rGRH", "BunnyGirl_GameData");
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
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _popWinManage: null,
        _qiePing: null,
        _collectNode: null,
        _slotsArray: [],
        _slotsIndex: 0,
        _manage: null,
        _pickGame: null,
        _bonusGame: null,
        _prizePool: null
      },
      reconnect: function reconnect() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this._collectNode.init(_this._deskInfo.bubbleBonus.count);
                _this._slotsArray[0].recoveryQiPao(_this._deskInfo.bubbleBonus.unCollectIdxs);
                if (!_this._deskInfo.bonusGame) {
                  _context.next = 10;
                  break;
                }
                _context.next = 5;
                return _this._bonusGame.showBonusGame(_this._deskInfo.bonusGame, true);

               case 5:
                if (!_this._deskInfo.bubbleGame) {
                  _context.next = 8;
                  break;
                }
                _context.next = 8;
                return cc.vv.gameData.getManage().enterPickGame();

               case 8:
                _context.next = 13;
                break;

               case 10:
                if (!_this._deskInfo.bubbleGame) {
                  _context.next = 13;
                  break;
                }
                _context.next = 13;
                return _this._pickGame.recoveryPickGame(_this._deskInfo.bubbleGame);

               case 13:
                success();

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
      setPopWinManage: function setPopWinManage(script) {
        this._popWinManage = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWinManage;
      },
      setQiePing: function setQiePing(script) {
        this._qiePing = script;
      },
      getQiePing: function getQiePing() {
        return this._qiePing;
      },
      setCollectNode: function setCollectNode(script) {
        this._collectNode = script;
      },
      getCollectNode: function getCollectNode() {
        return this._collectNode;
      },
      addSlotsScript: function addSlotsScript(script) {
        this._slotsArray.push(script);
      },
      GetSlotsScript: function GetSlotsScript() {
        (this._slotsIndex > 1 || this._slotsIndex < 0) && (this._slotsIndex = 0);
        return this._slotsArray[this._slotsIndex];
      },
      changeSlotsFree: function changeSlotsFree() {
        this._slotsIndex = 1;
      },
      changeSlotsNormal: function changeSlotsNormal() {
        this._slotsIndex = 0;
      },
      setManage: function setManage(script) {
        this._manage = script;
      },
      getManage: function getManage() {
        return this._manage;
      },
      setPickGame: function setPickGame(script) {
        this._pickGame = script;
      },
      getPickGame: function getPickGame() {
        return this._pickGame;
      },
      setBonusGame: function setBonusGame(script) {
        this._bonusGame = script;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      setPrizePool: function setPrizePool(script) {
        this._prizePool = script;
      },
      getPrizePool: function getPrizePool() {
        return this._prizePool;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  BunnyGirl_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0c52PaVuhCB7VgDNuE0KDu", "BunnyGirl_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var safeNode = cc.find("Canvas/safe_node");
        var popWinManage = safeNode.getComponentInChildren("BunnyGirl_Pop");
        popWinManage && cc.vv.gameData.setPopWinManage(popWinManage);
        var qieping = safeNode.getComponentInChildren("BunnyGirl_qiePing");
        qieping && cc.vv.gameData.setQiePing(qieping);
        var collect = safeNode.getComponentInChildren("BunnyGirl_collectNode");
        collect && cc.vv.gameData.setCollectNode(collect);
        var node_slots = cc.find("slots", safeNode);
        var script_slots = node_slots.getComponent("BunnyGirl_Slots");
        cc.vv.gameData.addSlotsScript(script_slots);
        var node_slotsfree = cc.find("slotsfree", safeNode);
        var script_slotsfree = node_slotsfree.addComponent("BunnyGirl_Slotsfree");
        cc.vv.gameData.addSlotsScript(script_slotsfree);
        var manage = safeNode.getComponent("BunnyGirl_manage");
        manage && cc.vv.gameData.setManage(manage);
        var pickGame = safeNode.getComponentInChildren("BunnyGirl_pick");
        pickGame && cc.vv.gameData.setPickGame(pickGame);
        var bonusGame = safeNode.getComponentInChildren("BunnyGirl_bonusGame");
        bonusGame && cc.vv.gameData.setBonusGame(bonusGame);
        var prizePool = safeNode.getComponentInChildren("BunnyGirl_PrizePool");
        prizePool && cc.vv.gameData.setPrizePool(prizePool);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  BunnyGirl_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe3bfHkc6lPHogOar/BWM/v", "BunnyGirl_Pop");
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
        _startAddCoin: false,
        _hailuoList: [],
        _bonusSelectSuccess: null,
        _cfg: null
      },
      onLoad: function onLoad() {
        this._cfg = cc.vv.gameData.getGameCfg();
      },
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
      showFreeGametri: function showFreeGametri(freecnt) {
        var _this2 = this;
        var bExtra = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var showNode, coin, showNodeAnimation, collectButton;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                bExtra || Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Freespin_OverView);
                _this2.showWin();
                showNode = cc.find("show_freeGame_tri", _this2.node);
                showNode.active = true;
                cc.find("bg/freeGameBg/free_more", showNode).active = bExtra;
                cc.find("bg/freeGameBg/free_nor", showNode).active = !bExtra;
                coin = cc.find("numBg/num", showNode);
                coin.getComponent(cc.Label).string = freecnt;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                collectButton = cc.find("bg/collectBtn", showNode);
                collectButton.opacity = bExtra ? 0 : 255;
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("popWinIdel");
                  var self = _this2;
                  var clickFunc = function() {
                    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          bExtra || (collectButton.getComponent(cc.Button).interactable = false);
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            self.hideWin(function() {
                              success();
                            });
                          });

                         case 4:
                         case "end":
                          return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function clickFunc() {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  if (bExtra) {
                    collectButton.off("click");
                    self.scheduleOnce(function() {
                      clickFunc();
                    }, 1.5);
                  } else {
                    cc.vv.gameData.checkAutoPlay(collectButton, clickFunc);
                    collectButton.getComponent(cc.Button).interactable = true;
                    collectButton.off("click");
                    collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                         case 0:
                          collectButton.stopAllActions();
                          clickFunc();

                         case 2:
                         case "end":
                          return _context2.stop();
                        }
                      }, _callee2);
                    })));
                  }
                });

               case 14:
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
      showFreeGameWinCoin: function showFreeGameWinCoin(num, freeGameNum) {
        var _this3 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var showNode, freeGameTime, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Freespin_OverView);
                _this3.showWin();
                showNode = cc.find("show_freeGame_winCoin", _this3.node);
                showNode.active = true;
                freeGameTime = cc.find("bg/freeGameBg/num", showNode);
                freeGameTime.getComponent(cc.Label).string = freeGameNum;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("popWinIdel");
                  var coin = cc.find("numBg/num", showNode);
                  _this3._startAddCoin = true;
                  Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 1, function() {
                    _this3._startAddCoin = false;
                  }, null, 0, true);
                  var collectButton = cc.find("bg/collectBtn", showNode);
                  var self = _this3;
                  var clickFunc = function() {
                    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                         case 0:
                          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                          collectButton.getComponent(cc.Button).interactable = false;
                          if (!self._startAddCoin) {
                            _context4.next = 9;
                            break;
                          }
                          self._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                          _context4.next = 9;
                          return self.awaitTime(.2);

                         case 9:
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            self.hideWin(function() {
                              success();
                            });
                          });

                         case 11:
                         case "end":
                          return _context4.stop();
                        }
                      }, _callee4);
                    }));
                    return function clickFunc() {
                      return _ref5.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(collectButton, clickFunc);
                  collectButton.getComponent(cc.Button).interactable = true;
                  collectButton.off("click");
                  collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        collectButton.stopAllActions();
                        clickFunc();

                       case 2:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  })));
                });

               case 10:
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
      showPearlsLinkWinCoin: function showPearlsLinkWinCoin(num) {
        var _this4 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
            var showNode, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_BonusOver_view);
                _this4.showWin();
                showNode = cc.find("show_pearlsLink_winCoin", _this4.node);
                showNode.active = true;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("popWinIdel");
                  var coin = cc.find("numBg/num", showNode);
                  _this4._startAddCoin = true;
                  Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 1, function() {
                    _this4._startAddCoin = false;
                  }, null, 0, true);
                  var collectButton = cc.find("bg/collectBtn", showNode);
                  var self = _this4;
                  var clickFunc = function() {
                    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) switch (_context7.prev = _context7.next) {
                         case 0:
                          collectButton.getComponent(cc.Button).interactable = false;
                          if (!self._startAddCoin) {
                            _context7.next = 8;
                            break;
                          }
                          self._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                          _context7.next = 8;
                          return self.awaitTime(.2);

                         case 8:
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            self.hideWin(function() {
                              success();
                            });
                          });

                         case 10:
                         case "end":
                          return _context7.stop();
                        }
                      }, _callee7);
                    }));
                    return function clickFunc() {
                      return _ref8.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(collectButton, clickFunc);
                  collectButton.getComponent(cc.Button).interactable = true;
                  collectButton.off("click");
                  collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                       case 0:
                        collectButton.stopAllActions();
                        clickFunc();

                       case 2:
                       case "end":
                        return _context8.stop();
                      }
                    }, _callee8);
                  })));
                });

               case 8:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x5, _x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      showPearlsLinkTri: function showPearlsLinkTri() {
        var _this5 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var showNode, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_BonusOver_view);
                _this5.showWin();
                showNode = cc.find("show_pearlsLink_tri", _this5.node);
                showNode.active = true;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("popWinIdel");
                  var collectButton = cc.find("bg/collectBtn", showNode);
                  var self = _this5;
                  var clickFunc = function() {
                    var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) switch (_context10.prev = _context10.next) {
                         case 0:
                          collectButton.getComponent(cc.Button).interactable = false;
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            self.hideWin(function() {
                              success();
                            });
                          });

                         case 3:
                         case "end":
                          return _context10.stop();
                        }
                      }, _callee10);
                    }));
                    return function clickFunc() {
                      return _ref11.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(collectButton, clickFunc);
                  collectButton.getComponent(cc.Button).interactable = true;
                  collectButton.off("click");
                  collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                       case 0:
                        collectButton.stopAllActions();
                        clickFunc();

                       case 2:
                       case "end":
                        return _context11.stop();
                      }
                    }, _callee11);
                  })));
                });

               case 8:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x7, _x8) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      showBonusWinCoin: function showBonusWinCoin(num) {
        var _this6 = this;
        return new Promise(function() {
          var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success, failed) {
            var showNode, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_respin_overView);
                _this6.showWin();
                showNode = cc.find("show_bonus_winCoin", _this6.node);
                showNode.active = true;
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showFreeGameWinCoin");
                showNodeAnimation.on("finished", function() {
                  showNodeAnimation.off("finished");
                  showNodeAnimation.play("popWinIdel");
                  var coin = cc.find("numBg/num", showNode);
                  _this6._startAddCoin = true;
                  Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 1, function() {
                    _this6._startAddCoin = false;
                  }, null, 0, true);
                  var collectButton = cc.find("bg/collectBtn", showNode);
                  var self = _this6;
                  var clickFunc = function() {
                    var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                      var winCoinLabel;
                      return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) switch (_context13.prev = _context13.next) {
                         case 0:
                          collectButton.getComponent(cc.Button).interactable = false;
                          if (!self._startAddCoin) {
                            _context13.next = 8;
                            break;
                          }
                          self._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                          _context13.next = 8;
                          return self.awaitTime(.2);

                         case 8:
                          showNodeAnimation.play("hideFreeGameWinCoin");
                          showNodeAnimation.on("finished", function() {
                            showNodeAnimation.off("finished");
                            showNode.active = false;
                            self.hideWin(function() {
                              success();
                            });
                          });

                         case 10:
                         case "end":
                          return _context13.stop();
                        }
                      }, _callee13);
                    }));
                    return function clickFunc() {
                      return _ref14.apply(this, arguments);
                    };
                  }();
                  cc.vv.gameData.checkAutoPlay(collectButton, clickFunc);
                  collectButton.getComponent(cc.Button).interactable = true;
                  collectButton.off("click");
                  collectButton.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        collectButton.stopAllActions();
                        clickFunc();

                       case 2:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee14);
                  })));
                });

               case 8:
               case "end":
                return _context15.stop();
              }
            }, _callee15);
          }));
          return function(_x9, _x10) {
            return _ref13.apply(this, arguments);
          };
        }());
      },
      showBonusSelect: function showBonusSelect() {
        var _this7 = this;
        return new Promise(function() {
          var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success, failed) {
            var showNode, self, clickFunc, _loop, i;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                _this7.showWin();
                _this7._bonusSelectSuccess = success;
                showNode = cc.find("show_bonus_select", _this7.node);
                showNode.active = true;
                showNode.opacity = 255;
                showNode.scale = 1;
                _this7._hailuoList = [];
                self = _this7;
                clickFunc = function() {
                  var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(i) {
                    var j, req;
                    return regeneratorRuntime.wrap(function _callee16$(_context16) {
                      while (1) switch (_context16.prev = _context16.next) {
                       case 0:
                        _this7._hailuoList[0].stopAllActions();
                        for (j = 0; j < _this7._hailuoList.length; j++) _this7._hailuoList[j].getComponent(cc.Button).interactable = false;
                        req = {
                          c: MsgId.SLOT_SUBGAME_DATA
                        };
                        req.uid = Global.playerData.uid;
                        req.gameid = cc.vv.gameData._gameId;
                        req.data = {};
                        req.data.rtype = 2;
                        req.data.choiceId = i + 1;
                        cc.vv.NetManager.send(req);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Click_HaiLuo);

                       case 10:
                       case "end":
                        return _context16.stop();
                      }
                    }, _callee16);
                  }));
                  return function clickFunc(_x13) {
                    return _ref17.apply(this, arguments);
                  };
                }();
                _loop = function _loop(i) {
                  var hailuo = cc.find("hailuo" + (i + 1), showNode);
                  _this7._hailuoList.push(hailuo);
                  hailuo.off("click");
                  hailuo.getComponent(cc.Button).interactable = true;
                  hailuo.on("click", function() {
                    clickFunc(i);
                  });
                  cc.find("hailuoBg/num", hailuo).color = _this7._cfg.normalColor;
                  cc.find("hailuoBg", hailuo).color = _this7._cfg.normalColor;
                  cc.find("hailuoBg", hailuo).getComponent(cc.Animation).play("hailuoIdel");
                  cc.find("hailuoBg/num", hailuo).active = false;
                };
                for (i = 0; i < 3; i++) _loop(i);
                cc.vv.gameData.checkAutoPlay(_this7._hailuoList[0], function() {
                  clickFunc(0);
                });

               case 13:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x11, _x12) {
            return _ref16.apply(this, arguments);
          };
        }());
      },
      onSelectBonus: function onSelectBonus(index, num, bubbleGame) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          var numList, i, _i, hailuo, tempIndex, numNode, hailuoBg, showNode;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              numList = [ 15, 20, 30 ];
              i = 0;

             case 2:
              if (!(i < numList.length)) {
                _context18.next = 9;
                break;
              }
              if (!(numList[i] == num)) {
                _context18.next = 6;
                break;
              }
              numList.splice(i, 1);
              return _context18.abrupt("break", 9);

             case 6:
              i++;
              _context18.next = 2;
              break;

             case 9:
              for (_i = 0; _i < _this8._hailuoList.length; _i++) {
                hailuo = _this8._hailuoList[_i];
                if (_i === index - 1) (function() {
                  cc.find("hailuoBg/num", hailuo).active = true;
                  cc.find("hailuoBg/num", hailuo).getComponent(cc.Label).string = num;
                  var hailuodianji = cc.find("hailuoBg/hailuodianji", hailuo);
                  hailuodianji.active = true;
                  var dianjiAnimation = hailuodianji.getComponent(cc.Animation);
                  dianjiAnimation.play("hailuodianji");
                  dianjiAnimation.on("finished", function() {
                    hailuodianji.active = false;
                    dianjiAnimation.off("finished");
                  });
                })(); else {
                  tempIndex = Global.random(0, numList.length - 1);
                  numNode = cc.find("hailuoBg/num", hailuo);
                  numNode.active = true;
                  hailuoBg = cc.find("hailuoBg", hailuo);
                  numNode.getComponent(cc.Label).string = numList[tempIndex];
                  numList.splice(tempIndex, 1);
                  numNode.color = _this8._cfg.grayColor;
                  hailuoBg.color = _this8._cfg.grayColor;
                }
                cc.find("hailuoBg", hailuo).getComponent(cc.Animation).stop();
                cc.find("hailuoBg", hailuo).y = 0;
              }
              _context18.next = 12;
              return _this8.awaitTime(2);

             case 12:
              showNode = cc.find("show_bonus_select", _this8.node);
              cc.tween(showNode).parallel(cc.tween().to(.3, {
                scale: 0
              }), cc.tween().to(.3, {
                opacity: 0
              })).call(function() {
                _this8.hideWin(function() {
                  if (_this8._bonusSelectSuccess) {
                    _this8._bonusSelectSuccess();
                    _this8._bonusSelectSuccess = null;
                  }
                  cc.vv.gameData.getPickGame().startPickGame(num, bubbleGame.winCoin, bubbleGame.results);
                });
              }).start();

             case 14:
             case "end":
              return _context18.stop();
            }
          }, _callee18);
        }))();
      },
      showJackpotWinCoin: function showJackpotWinCoin(num, jpid) {
        var _this9 = this;
        return new Promise(function() {
          var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(success, failed) {
            var showNode, meirenyu, meirenyuSp, coin, showNodeAnimation;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_JackpotView);
                _this9.showWin();
                showNode = cc.find("show_jackpot_winCoin", _this9.node);
                showNode.active = true;
                meirenyu = cc.find("Mermaid_guochang", showNode);
                meirenyu.active = true;
                meirenyuSp = meirenyu.getComponent(sp.Skeleton);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Jp_yu_shengQi);
                meirenyuSp.setAnimation(0, "skill", false);
                cc.find("numBg/title", showNode).getComponent("ImgSwitchCmp").setIndex(jpid - 1);
                coin = cc.find("numBg/num", showNode);
                coin.getComponent(cc.Label).string = "";
                showNodeAnimation = showNode.getComponent(cc.Animation);
                showNodeAnimation.play("showJackpotWinCoin");
                _this9.scheduleOnce(function() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_JackPotWinCoins);
                  _this9._startAddCoin = true;
                  Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2, function() {
                    _this9._startAddCoin = false;
                    Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.Mermaid_JackPotWinCoins);
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_JackPotWinCoins_end);
                  }, null, 0, true);
                }, 2.1);
                _this9.scheduleOnce(function() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Jp_yu_FeiWen);
                }, 1.66);
                showNodeAnimation.on("finished", _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      showNodeAnimation.off("finished");
                      showNodeAnimation.play("idelJackpotWinCoin");
                      _context20.next = 4;
                      return _this9.awaitTime(2);

                     case 4:
                      showNodeAnimation.play("hideJackpotWinCoin");
                      showNodeAnimation.on("finished", _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) switch (_context19.prev = _context19.next) {
                           case 0:
                            showNodeAnimation.off("finished");
                            _this9.hideWin(function() {
                              showNode.active = false;
                              success();
                            });

                           case 2:
                           case "end":
                            return _context19.stop();
                          }
                        }, _callee19);
                      })));

                     case 6:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                })));

               case 17:
               case "end":
                return _context21.stop();
              }
            }, _callee21);
          }));
          return function(_x14, _x15) {
            return _ref18.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd2a02qEYFFWYBSWjiRhngb", "BunnyGirl_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _logo: cc.Node
      },
      start: function start() {
        var _this = this;
        this._super();
        this._logo = cc.find("Canvas/safe_node/logo");
        this.scheduleOnce(function() {
          _this.toNormal();
        });
      },
      alignTop: function alignTop() {
        this.scheduleOnce(function() {});
      },
      toNormal: function toNormal() {
        this.scheduleOnce(function() {});
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  BunnyGirl_Slotsfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e625enbOVpP8qu4lfoBbfQv", "BunnyGirl_Slotsfree");
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
        _canShowStop: false,
        _top_ani1: null,
        _top_ani2: null,
        _slots1reel: [],
        _slots2reel: [],
        _slots1reelKuang: [],
        _slots2reelKuang: [],
        _slots1kuang: [],
        _slots2kuang: []
      },
      onLoad: function onLoad() {
        this._top_ani1 = cc.find("slotsRoot/slots1/top_ani", this.node);
        this._top_ani2 = cc.find("slotsRoot/slots2/top_ani", this.node);
        this.Init();
        this.node.active = false;
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
        for (var i = 1; i < 6; i++) {
          var reel1 = cc.find("slotsRoot/slots1/reels/reel" + i, this.node);
          this._slots1reelKuang.push(reel1);
          var reel2 = cc.find("slotsRoot/slots2/reels/reel" + i, this.node);
          this._slots2reelKuang.push(reel2);
        }
        this.createSlots1Reel();
        this.createSlots2Reel();
      },
      createSlots1Reel: function createSlots1Reel() {
        var reel1 = cc.find("slotsRoot/slots1/reels/reel1", this.node);
        var reel1Script = reel1.addComponent("BunnyGirl_reelfree");
        reel1Script.Init(0, 4, this._top_ani1);
        this._slots1reel.push(reel1Script);
        var reel2 = cc.find("slotsRoot/slots1/reels/reel6", this.node);
        var reel2Script = reel2.addComponent("BunnyGirl_reelbig");
        reel2Script.Init(1, 1, this._top_ani1);
        this._slots1reel.push(reel2Script);
        var reel3 = cc.find("slotsRoot/slots1/reels/reel5", this.node);
        var reel3Script = reel3.addComponent("BunnyGirl_reelfree");
        reel3Script.Init(2, 4, this._top_ani1);
        this._slots1reel.push(reel3Script);
      },
      createSlots2Reel: function createSlots2Reel() {
        var reel1 = cc.find("slotsRoot/slots2/reels/reel1", this.node);
        var reel1Script = reel1.addComponent("BunnyGirl_reelfree");
        reel1Script.Init(3, 4, this._top_ani2);
        this._slots2reel.push(reel1Script);
        var reel2 = cc.find("slotsRoot/slots2/reels/reel6", this.node);
        var reel2Script = reel2.addComponent("BunnyGirl_reelbig");
        reel2Script.Init(4, 1, this._top_ani2);
        this._slots2reel.push(reel2Script);
        var reel3 = cc.find("slotsRoot/slots2/reels/reel5", this.node);
        var reel3Script = reel3.addComponent("BunnyGirl_reelfree");
        reel3Script.Init(5, 4, this._top_ani2);
        this._slots2reel.push(reel3Script);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i = 0; _i < this._gameInfo.scatterZJLuXian.indexs.length; _i++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            this.showKuangByIdx(Number(key));
          }
        }
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this.hideSlotsKuang();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._slots1reel);
        this.MoveReels(this._slots2reel);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._gameInfo = msg;
              cards = msg.resultCards;
              _this2.SetSlotsResult(cards, msg.bonusIdxs, msg.bonusItems);
              _this2.SetReelStateInfo(cards);
              _this2._canShowStop = true;

             case 5:
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.error("BunnyGirl_Slotsfree OnSpinEnd\u5df2\u5e9f\u5f03\u4e0d\u7528");

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
          }
        }
        this._super();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      showFreeGame: function showFreeGame(callBack) {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var nodeAnimation, guochang, guochangSp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this4.node.active = true;
                _this4.clearSlots();
                nodeAnimation = _this4.node.getComponent(cc.Animation);
                nodeAnimation.play("freeGameGuoChang");
                nodeAnimation.on("finished", function() {
                  nodeAnimation.off("finished");
                  success();
                });
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_FsStart_GuoChang);
                guochang = cc.find("guochang", _this4.node);
                guochang.active = true;
                guochangSp = guochang.getComponent(sp.Skeleton);
                guochangSp.setAnimation(0, "skill", false);
                guochangSp.setCompleteListener(function() {
                  guochang.active = false;
                  guochangSp.setCompleteListener(null);
                });
                _context4.next = 13;
                return _this4.awaitTime(.5);

               case 13:
                callBack && callBack();

               case 14:
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
      recoveryFree: function recoveryFree() {
        this.node.active = true;
        cc.find("slotsRoot", this.node).y = 0;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._slots1reel.length; i++) {
              var item = this._slots1reel[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
            for (var _i2 = 0; _i2 < this._slots2reel.length; _i2++) {
              var _item = this._slots2reel[_i2];
              var _reelStopInterv = this.GetReelStopInter(_i2);
              _item.StopMove(_reelStopInterv);
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      GetSlots1SymbolWorldPosByIdx: function GetSlots1SymbolWorldPosByIdx(idx) {
        var reels = this._slots1reelKuang;
        var _col = this._cfg.col;
        var _row = this._cfg.row;
        var col = (idx - 1) % _col;
        var row = _row - Math.floor((idx - 1) / _col) - 1;
        var maskNode = cc.find("mask", reels[col]);
        var retPos = maskNode.convertToWorldSpaceAR(cc.v2(0, 0));
        retPos.y += row * this._cfg.symbolSize.height + this._cfg.symbolSize.height / 2;
        return retPos;
      },
      showSlots1Kuang: function showSlots1Kuang(idx) {
        var kuangWorldPos = this.GetSlots1SymbolWorldPosByIdx(idx);
        if (this._cfg.kuang) {
          var kuangPrefab = cc.vv.gameData.GetPrefabByName(this._cfg.kuang);
          if (kuangPrefab) {
            var kuang = cc.instantiate(kuangPrefab);
            kuang.zIndex = 1e3;
            kuang.parent = this._top_ani1;
            kuang.position = this._top_ani1.convertToNodeSpaceAR(kuangWorldPos);
            this._slots1kuang.push(kuang);
          }
        }
      },
      GetSlots2SymbolWorldPosByIdx: function GetSlots2SymbolWorldPosByIdx(idx) {
        var reels = this._slots2reelKuang;
        var _col = this._cfg.col;
        var _row = this._cfg.row;
        var col = (idx - 1) % _col;
        var row = _row - Math.floor((idx - 1) / _col) - 1;
        var maskNode = cc.find("mask", reels[col]);
        var retPos = maskNode.convertToWorldSpaceAR(cc.v2(0, 0));
        retPos.y += row * this._cfg.symbolSize.height + this._cfg.symbolSize.height / 2;
        return retPos;
      },
      showSlots2Kuang: function showSlots2Kuang(idx) {
        var kuangWorldPos = this.GetSlots2SymbolWorldPosByIdx(idx);
        if (this._cfg.kuang) {
          var kuangPrefab = cc.vv.gameData.GetPrefabByName(this._cfg.kuang);
          if (kuangPrefab) {
            var kuang = cc.instantiate(kuangPrefab);
            kuang.zIndex = 1e3;
            kuang.parent = this._top_ani2;
            kuang.position = this._top_ani2.convertToNodeSpaceAR(kuangWorldPos);
            this._slots2kuang.push(kuang);
          }
        }
      },
      showKuangByIdx: function showKuangByIdx(idx) {
        idx < 21 ? this.showSlots1Kuang(idx) : this.showSlots2Kuang(idx - 20);
      },
      hideSlotsKuang: function hideSlotsKuang() {
        for (var i = 0; i < this._slots1kuang.length; i++) this._slots1kuang[i].parent = null;
        this._slots1kuang = [];
        for (var _i3 = 0; _i3 < this._slots2kuang.length; _i3++) this._slots2kuang[_i3].parent = null;
        this._slots2kuang = [];
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        return idx < 21 ? this.GetSlots1SymbolByIdx(idx) : this.GetSlots2SymbolByIdx(idx - 20);
      },
      GetSlots1SymbolByIdx: function GetSlots1SymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return 0 == col ? this._slots1reel[col].GetSymbolByRow(row) : col > 0 && col < 4 ? this._slots1reel[1].GetSymbolByRow(0) : this._slots1reel[2].GetSymbolByRow(row);
      },
      GetSlots2SymbolByIdx: function GetSlots2SymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return 0 == col ? this._slots2reel[col].GetSymbolByRow(row) : col > 0 && col < 4 ? this._slots2reel[1].GetSymbolByRow(0) : this._slots2reel[2].GetSymbolByRow(row);
      },
      SetSlotsResult: function SetSlotsResult(cards, bonusIdxs, bonusItems) {
        var card1 = cards.slice(0, 20);
        var card2 = cards.slice(20, 40);
        this.SetSlotsResult1(card1, bonusIdxs, bonusItems);
        this.SetSlotsResult2(card2, bonusIdxs, bonusItems);
      },
      SetSlotsResult1: function SetSlotsResult1(cards, bonusIdxs, bonusItems) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            for (var j = 0; j < bonusIdxs.length; j++) if (i + 1 === bonusIdxs[j]) {
              res.data = bonusItems[j];
              break;
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        this._slots1reel[0].SetResult(reelResults[0]);
        this._slots1reel[1].SetResult([ reelResults[1][0] ]);
        this._slots1reel[2].SetResult(reelResults[4]);
      },
      SetSlotsResult2: function SetSlotsResult2(cards, bonusIdxs, bonusItems) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            for (var j = 0; j < bonusIdxs.length; j++) if (i + 21 === bonusIdxs[j]) {
              res.data = bonusItems[j];
              break;
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        this._slots2reel[0].SetResult(reelResults[0]);
        this._slots2reel[1].SetResult([ reelResults[1][0] ]);
        this._slots2reel[2].SetResult(reelResults[4]);
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {},
      clearSlots: function clearSlots() {
        for (var i = 0; i < this._slots1reel.length; i++) {
          var reel = this._slots1reel[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.ShowNormal();
          }
        }
        for (var _i4 = 0; _i4 < this._slots2reel.length; _i4++) {
          var _reel = this._slots2reel[_i4];
          for (var _j = 0; _j < _reel._symbols.length; _j++) {
            var _symbol = _reel._symbols[_j];
            _symbol.ShowNormal();
          }
        }
        this.hideSlotsKuang();
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        for (var i = 0; i < this._slots1reel.length; i++) {
          var item = this._slots1reel[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
        for (var _i5 = 0; _i5 < this._slots2reel.length; _i5++) {
          var _item2 = this._slots2reel[_i5];
          var _reelStopInterv2 = 0;
          _item2.StopMove(_reelStopInterv2);
          _item2.StopMoveRightNow();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BunnyGirl_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3dfb8wRuYBBn6ch6yx0D14u", "BunnyGirl_Slots");
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
        _canShowStop: false,
        _qipaoList: [],
        _scatterNum: 0
      },
      onLoad: function onLoad() {
        this._super();
        for (var i = 1; i < 21; i++) {
          var qipao = cc.find("qipaoRoot/qipao" + i, this.node);
          this._qipaoList.push(qipao);
        }
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
        this._roundSpineTime = 0;
        this._scatterNum = 0;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._gameInfo = msg;
              cards = msg.resultCards;
              _this2.SetSlotsResult(cards, msg.bonusIdxs, msg.bonusItems);
              _this2.SetReelStateInfo(cards);
              _this2._canShowStop = true;

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(cards, bonusIdxs, bonusItems) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            for (var j = 0; j < bonusIdxs.length; j++) if (i + 1 === bonusIdxs[j]) {
              res.data = bonusItems[j];
              break;
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        var skipBorderAniIdxs = [];
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) {
          for (var _i2 = 0; _i2 < this._gameInfo.scatterZJLuXian.indexs.length; _i2++) {
            var val = this._gameInfo.scatterZJLuXian.indexs[_i2];
            allWinIdx[val] = 1;
          }
          skipBorderAniIdxs = this._gameInfo.scatterZJLuXian.indexs.concat();
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            skipBorderAniIdxs.includes(Number(key)) || symbol.ShowKuang();
          }
          this.hideQiPaoByIdx(Number(key));
        }
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.error("BunnyGirl_Slots OnSpinEnd\u5df2\u5e9f\u5f03\u4e0d\u7528");

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
          }
        }
        this._super();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      hideQiPaoByIdx: function hideQiPaoByIdx(idx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var collectNode, qipao, qipaoAni, qppos, startPos, flyNode, destNode, destPos, endPos;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              collectNode = cc.find("collectNode", _this4.node.parent);
              qipao = _this4._qipaoList[idx - 1];
              if (!(qipao && qipao.active)) {
                _context4.next = 16;
                break;
              }
              qipaoAni = qipao.getComponent(cc.Animation);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_IceQiPap_Fly);
              qipaoAni.play("qipaoDisappear");
              qipaoAni.on("finished", function() {
                qipaoAni.off("finished");
                qipao.active = false;
              });
              _context4.next = 9;
              return _this4.awaitTime(.5);

             case 9:
              qppos = qipao.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = collectNode.convertToNodeSpaceAR(qppos);
              flyNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("flyPoint"));
              flyNode.parent = collectNode;
              flyNode.position = startPos;
              destNode = cc.vv.gameData.getCollectNode().getOnePoint();
              if (destNode) {
                destPos = destNode.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = collectNode.convertToNodeSpaceAR(destPos);
                cc.tween(flyNode).to(.5, {
                  position: endPos
                }, {
                  easing: "quadIn"
                }).call(function() {
                  cc.vv.gameData.getCollectNode().addOnePoint();
                  flyNode.parent = null;
                }).start();
              }

             case 16:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      restQiPao: function restQiPao() {
        for (var i = 0; i < this._qipaoList.length; i++) {
          var qipao = this._qipaoList[i];
          qipao.active = true;
          var qipaoAni = qipao.getComponent(cc.Animation);
          qipaoAni.play("qipaoNormal");
        }
      },
      recoveryQiPao: function recoveryQiPao(qipaolist) {
        for (var i = 0; i < this._qipaoList.length; i++) {
          var qipao = this._qipaoList[i];
          qipao.active = false;
        }
        for (var _i3 = 0; _i3 < qipaolist.length; _i3++) {
          var idx = qipaolist[_i3];
          var _qipao = this._qipaoList[idx - 1];
          if (_qipao) {
            _qipao.active = true;
            var qipaoAni = _qipao.getComponent(cc.Animation);
            qipaoAni.play("qipaoNormal");
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BunnyGirl_bonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f6341pOH1Jl55MtqIIN2Y1", "BunnyGirl_bonusGame");
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
    var unlockNum = [ 8, 12, 16, 20 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _reels: [],
        _jushu: null,
        _lockRoot: null,
        _winCoinRoot: null,
        _success: null,
        _roundList: [],
        _lockList: [],
        _moveReelLastIdx: 0,
        _moveIdxList: [],
        _cfg: null,
        _col: 0,
        _row: 0,
        _canStopReel: false,
        _coin: 0,
        _bonusNum: 0,
        _spinCnt: 0,
        _gameInfo: null,
        _unlockRow: 4
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 41; i++) {
          var reel = cc.find("slots/reels/reel" + i, this.node);
          var scp = reel.addComponent("BunnyGirl_bonusReel");
          scp.Init(i - 1, 1, cc.find("slots/top_ani", this.node));
          this._reels.push(scp);
        }
        for (var _i = 1; _i < 4; _i++) {
          var round = cc.find("jushu/round" + _i, this.node);
          this._roundList.push(round);
        }
        for (var _i2 = 1; _i2 < 5; _i2++) {
          var lockNode = cc.find("luckRoot/luckNode" + _i2, this.node);
          this._lockList.push(lockNode);
        }
        this._winCoinRoot = cc.find("winCoinRoot", this.node);
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = 8;
      },
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(success, failed) {
          _this.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      showBonusGame: function showBonusGame(data, isReconnect) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var i, reel, _i3, idx, _reel, j, _i4, bonusNum, _i5, _idx, row;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_Mermaid_RespinBG);
                _this2._success = success;
                _this2._coin = 0;
                cc.vv.gameData.getManage()._isInBonus = true;
                _this2.node.active = true;
                _context.next = 7;
                return _this2.awaitTime(0);

               case 7:
                _this2._winCoinRoot.active = false;
                cc.find("Canvas/safe_node/spr_bg_free").active = true;
                _this2._moveIdxList = [];
                for (i = 1; i < 41; i++) {
                  reel = _this2._reels[i - 1];
                  if (reel) {
                    reel._symbols[0].InitSymbol();
                    reel._symbols[1].InitSymbol();
                  }
                  _this2._moveIdxList.push(i);
                }
                _i3 = 0;

               case 12:
                if (!(_i3 < data.bonusIdxs.length)) {
                  _context.next = 27;
                  break;
                }
                idx = data.bonusIdxs[_i3];
                _reel = _this2._reels[idx - 1];
                _reel && _reel.setResult(data.bonusItems[_i3]);
                j = 0;

               case 17:
                if (!(j < _this2._moveIdxList.length)) {
                  _context.next = 24;
                  break;
                }
                if (!(idx === _this2._moveIdxList[j])) {
                  _context.next = 21;
                  break;
                }
                _this2._moveIdxList.splice(j, 1);
                return _context.abrupt("break", 24);

               case 21:
                j++;
                _context.next = 17;
                break;

               case 24:
                _i3++;
                _context.next = 12;
                break;

               case 27:
                _this2._unlockRow = 4;
                for (_i4 = 0; _i4 < data.unlockInfo.length; _i4++) 0 === data.unlockInfo[_i4] && _this2._unlockRow++;
                bonusNum = 0;
                for (_i5 = 0; _i5 < data.bonusIdxs.length; _i5++) {
                  _idx = data.bonusIdxs[_i5];
                  row = _this2._row - Math.floor((_idx - 1) / _this2._col) - 1;
                  row < _this2._unlockRow && bonusNum++;
                }
                _this2.initUnLockNum(bonusNum);
                _this2.updateSpinTime(data.spinCnt);
                if (isReconnect) {
                  _context.next = 36;
                  break;
                }
                _context.next = 36;
                return _this2.awaitTime(1);

               case 36:
                _this2.autoSpin();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("bounsGame");

               case 38:
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
      autoSpin: function autoSpin() {
        this.unschedule(this.StartMove);
        this.scheduleOnce(this.StartMove, this._cfg.autoModelDelay);
      },
      hide: function hide() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.getQiePing().showQiePing1(function() {
                _this3.node.active = false;
                cc.find("Canvas/safe_node/spr_bg_free").active = false;
              });

             case 2:
              _context2.next = 4;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(cc.vv.gameData.GetBottomScript().getCurrentWin(), cc.vv.gameData.GetBottomScript().getCurrentWin(), true);

             case 4:
              _this3.exitBonusGame();

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var bonusNum, i, idx, row;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              if (!(_this4._gameInfo.result.idxs.length > 0)) {
                _context3.next = 8;
                break;
              }
              bonusNum = 0;
              for (i = 0; i < _this4._gameInfo.result.idxs.length; i++) {
                idx = _this4._gameInfo.result.idxs[i];
                row = _this4._row - Math.floor((idx - 1) / _this4._col) - 1;
                row < _this4._unlockRow && bonusNum++;
              }
              _this4.updateUnLockNum(_this4._bonusNum + bonusNum);
              _this4.updateSpinTime(_this4._gameInfo.bonusGame.spinCnt);
              _context3.next = 8;
              return _this4.awaitTime(1);

             case 8:
              if (!_this4._gameInfo.bonusGame.isEnd) {
                _context3.next = 14;
                break;
              }
              _context3.next = 11;
              return _this4.ShowResult(_this4._gameInfo.bonusGame.bonusIdxs, _this4._gameInfo.bonusGame.bonusItems);

             case 11:
              _this4.hide();
              _context3.next = 16;
              break;

             case 14:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("bounsGame");
              _this4.autoSpin();

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitBonusGame: function exitBonusGame() {
        cc.vv.gameData.getManage()._isInBonus = false;
        Global.SlotsSoundMgr.playNormalBgm(true);
        if (this._success) {
          this._success();
          this._success = null;
        }
      },
      updateSpinTime: function updateSpinTime(time) {
        this._spinCnt = time;
        for (var i = 0; i < this._roundList.length; i++) {
          var round = this._roundList[i];
          cc.find("select", round).active = time === i + 1;
        }
      },
      unlockRow: function unlockRow(row) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var lockNode, lockNodeAni, lizi;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                lockNode = _this5._lockList[row - 1];
                if (!lockNode) {
                  _context4.next = 11;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_respin_unlock);
                lockNodeAni = lockNode.getComponent(cc.Animation);
                lockNodeAni.play("jiesuo");
                lockNodeAni.on("finished", function() {
                  lockNodeAni.off("finished");
                  lockNode.active = false;
                  lizi.active = false;
                  success();
                });
                _context4.next = 8;
                return _this5.awaitTime(.5);

               case 8:
                lizi = cc.find("jiesuo_lizi", lockNode);
                lizi.active = true;
                lizi.getComponent(cc.ParticleSystem).resetSystem();

               case 11:
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
      OnMsgSpin: function OnMsgSpin(data) {
        this._gameInfo = data;
        var cards = [];
        for (var i = 0; i < 40; i++) {
          var randIdx = Global.random(2, this._cfg.randomSymbols.length);
          var randVal = this._cfg.randomSymbols[randIdx - 1];
          var randData = null;
          for (var j = 0; j < data.result.idxs.length; j++) if (i + 1 === data.result.idxs[j]) {
            randVal = 3;
            randData = data.result.items[j];
            break;
          }
          if (3 === randVal) for (var _j = 0; _j < this._moveIdxList.length; _j++) if (i + 1 === this._moveIdxList[_j]) {
            this._moveIdxList.splice(_j, 1);
            break;
          }
          cards.push(randVal);
          var reel = this._reels[i];
          reel.SetResult([ {
            sid: randVal,
            data: randData
          } ]);
        }
        this.SetReelStateInfo(cards);
        this._canStopReel = true;
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (!this._cfg.reelStateInfo) return;
        var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            for (var i = 0; i < cards.length; i++) {
              var item = this._reels[i];
              var val = cards[i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              stateInfo.isStop = stateInfo.id.includes(val);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      initUnLockNum: function initUnLockNum(curNum) {
        this._bonusNum = curNum;
        for (var i = 0; i < this._lockList.length; i++) {
          var num = unlockNum[i];
          var lockNode = this._lockList[i];
          if (lockNode) if (num - curNum > 0) {
            cc.find("num", lockNode).getComponent(cc.Label).string = num - curNum;
            lockNode.active = true;
            lockNode.opacity = 255;
          } else {
            cc.find("num", lockNode).getComponent(cc.Label).string = 0;
            lockNode.active && (lockNode.active = false);
          }
        }
      },
      updateUnLockNum: function updateUnLockNum(curNum) {
        var tempUnlockRow = 4;
        for (var i = 0; i < this._lockList.length; i++) {
          var num = unlockNum[i];
          num - curNum <= 0 && tempUnlockRow++;
        }
        if (tempUnlockRow > this._unlockRow) {
          this._unlockRow = tempUnlockRow;
          var bonusNum = 0;
          for (var _i6 = 0; _i6 < this._gameInfo.bonusGame.bonusIdxs.length; _i6++) {
            var idx = this._gameInfo.bonusGame.bonusIdxs[_i6];
            var row = this._row - Math.floor((idx - 1) / this._col) - 1;
            row < this._unlockRow && bonusNum++;
          }
          this.updateUnLockNum(bonusNum);
        } else {
          this._bonusNum = curNum;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_RsBar_rest);
          for (var _i7 = 0; _i7 < this._lockList.length; _i7++) {
            var _num = unlockNum[_i7];
            var lockNode = this._lockList[_i7];
            if (lockNode) if (_num - curNum > 0) cc.find("num", lockNode).getComponent(cc.Label).string = _num - curNum; else {
              cc.find("num", lockNode).getComponent(cc.Label).string = 0;
              lockNode.active && this.unlockRow(_i7 + 1);
            }
          }
        }
      },
      resetLockNode: function resetLockNode() {
        for (var i = 0; i < this._lockList.length; i++) {
          var lockNode = this._lockList[i];
          lockNode.active = true;
          lockNode.opacity = 255;
          cc.find("liang", lockNode).active = false;
        }
      },
      StartMove: function StartMove() {
        var _this6 = this;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.unschedule(this.StartMove);
        this._moveReelLastIdx = 0;
        var sortArray = function sortArray(a, b) {
          var acol = (a - 1) % _this6._col;
          var bcol = (b - 1) % _this6._col;
          return acol == bcol ? a - b : acol - bcol;
        };
        this._moveIdxList.sort(sortArray);
        for (var i = 0; i < this._moveIdxList.length; i++) {
          var idx = this._moveIdxList[i] - 1;
          var reel = this._reels[idx];
          if (reel) {
            reel.StartMove();
            this._moveReelLastIdx = idx;
          }
        }
        this._stopTime = cc.vv.gameData.GetSlotsScript().GetStopTime();
        this._canStopReel = false;
        this._roundSpineTime = 0;
        this.updateSpinTime(this._spinCnt - 1);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 1;
        cc.vv.NetManager.send(req);
      },
      GetLastMoveReelIdx: function GetLastMoveReelIdx() {
        return this._moveReelLastIdx;
      },
      CanStopSlot: function CanStopSlot() {
        return this._canStopReel;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var col = i % this._col;
              var reelStopInterv = cc.vv.gameData.GetSlotsScript().GetReelStopInter(col);
              item.StopMove(reelStopInterv);
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && cc.vv.gameData.GetTopScript().SetBackLobby(true);
          }
        }
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.unschedule(this.StartMove);
        this._stopTime = -1;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      updateData: function updateData(coin) {
        this._coin += coin;
        var winCoinAni = this._winCoinRoot.getComponent(cc.Animation);
        winCoinAni.play("shoujifankuiguang");
        var lizi = cc.find("lizi", this._winCoinRoot);
        lizi.active = true;
        lizi.getComponent(cc.ParticleSystem).resetSystem();
        lizi.stopAllActions();
        cc.vv.gameData.GetBottomScript().SetWin(coin + cc.vv.gameData.GetBottomScript().getCurrentWin());
        cc.find("coin", this._winCoinRoot).getComponent(cc.Label).string = Global.FormatNumToComma(this._coin);
        cc.tween(lizi).delay(1).call(function() {
          lizi.active = false;
        }).start();
      },
      ShowResult: function ShowResult(bonusIdxs, bonusItems) {
        var _this7 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var result, i, idx, row, sortArray, _i8, ret, reel;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                result = [];
                for (i = 0; i < bonusIdxs.length; i++) {
                  idx = bonusIdxs[i];
                  row = _this7._row - Math.floor((idx - 1) / _this7._col) - 1;
                  row < _this7._unlockRow && result.push({
                    idx: bonusIdxs[i],
                    data: bonusItems[i]
                  });
                }
                sortArray = function sortArray(a, b) {
                  var acol = (a.idx - 1) % _this7._col;
                  var bcol = (b.idx - 1) % _this7._col;
                  return acol == bcol ? a.idx - b.idx : acol - bcol;
                };
                result.sort(sortArray);
                _this7._winCoinRoot.active = true;
                _this7._coin = 0;
                cc.find("coin", _this7._winCoinRoot).getComponent(cc.Label).string = "";
                _context5.next = 9;
                return _this7.awaitTime(1);

               case 9:
                _i8 = 0;

               case 10:
                if (!(_i8 < result.length)) {
                  _context5.next = 29;
                  break;
                }
                ret = result[_i8];
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_scatter_down);
                reel = _this7._reels[ret.idx - 1];
                reel && reel._symbols[0].playSettleAnimation();
                _context5.next = 17;
                return _this7.awaitTime(.8);

               case 17:
                if (!ret.data.jackpot) {
                  _context5.next = 23;
                  break;
                }
                _context5.next = 20;
                return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(ret.data.jackpot.value, ret.data.jackpot.id);

               case 20:
                _this7.updateData(ret.data.jackpot.value);
                _context5.next = 24;
                break;

               case 23:
                _this7.updateData(ret.data.coin);

               case 24:
                _context5.next = 26;
                return _this7.awaitTime(.2);

               case 26:
                _i8++;
                _context5.next = 10;
                break;

               case 29:
                _context5.next = 31;
                return cc.vv.gameData.getPopWinManage().showPearlsLinkWinCoin(_this7._gameInfo.bonusGame.winCoin);

               case 31:
                cc.vv.gameData.AddCoin(_this7._gameInfo.bonusGame.winCoin);
                success();

               case 33:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_bonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3645b7dhghLGKeFgXym5L49", "BunnyGirl_bonusReel");
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
        var lastReelStopIdx = cc.vv.gameData.getBonusGame().GetLastMoveReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getBonusGame().OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        this._bNotifyReadyStop || (this._bNotifyReadyStop = true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.playReelStop();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("BunnyGirl_bonusSymbol");
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        this._symbols.push(scp);
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation(true);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
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
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      setResult: function setResult(data) {
        this._symbols[0].ShowById(3, data);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BunnyGirl_bonusSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e834/S9kNB8InEYWWMEIH7", "BunnyGirl_bonusSymbol");
    "use strict";
    cc.Class({
      extends: require("BunnyGirl_symbol"),
      properties: {},
      start: function start() {},
      Init: function Init(idx, node) {
        this._topAniNode = node;
        this.SetSymbolIdx(idx);
        this.InitSymbol();
      },
      InitSymbol: function InitSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(2, cfg.randomSymbolsBonus.length);
        var randVal = cfg.randomSymbolsBonus[randIdx - 1];
        this.ShowById(randVal);
        this.setTopNodeGray(false);
        this.setAnimationToTop(false);
      },
      GetRandomCfg: function GetRandomCfg() {
        return null;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        cc.find("mask", this.node).active = 3 !== id;
      },
      GetKuangShowParent: function GetKuangShowParent() {
        return this._topAniNode;
      },
      playSettleAnimation: function playSettleAnimation() {
        var _this = this;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].settle_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].node, aniNode);
          topShowNode.active = true;
          if ("" !== cfg.symbol[id].settle_ani.name) {
            aniNode.zIndex = cfg.symbol[id].settle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeAnimation = topShowNode.getComponent(cc.Animation);
            if (nodeAnimation) {
              nodeAnimation.play(cfg.symbol[id].settle_ani.name);
              nodeAnimation.on("finished", function() {
                nodeAnimation.off("finished");
                _this.setSymbolGray(true, topShowNode);
              });
            }
          }
        }
      },
      setTopNodeGray: function setTopNodeGray(bGray) {
        var cfg = cc.vv.gameData.getGameCfg();
        var topNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
        if (topNode) {
          var bonusNode = cc.find(cfg.symbol[3].node, topNode);
          bonusNode && this.setSymbolGray(bGray, bonusNode);
        }
      },
      setSymbolGray: function setSymbolGray(bGray, node) {
        var nState = "2d-sprite";
        bGray && (nState = "2d-gray-sprite");
        node.getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial(nState));
        node.childrenCount > 0 && node.children.forEach(function(child) {
          child.getComponent(cc.Sprite) ? child.getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial(nState)) : child.getComponent(cc.Label) && child.getComponent(cc.Label).setMaterial(0, cc.Material.getBuiltinMaterial(nState));
        });
      }
    });
    cc._RF.pop();
  }, {
    BunnyGirl_symbol: "BunnyGirl_symbol"
  } ],
  BunnyGirl_collectNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "058d3agNalFM6/3/BL4NOMr", "BunnyGirl_collectNode");
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
        _pointList: [],
        _pointIdx: 0,
        _hailuo: null,
        _tips: null,
        _tempPointIdx: 0
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 21; i++) {
          var point = cc.find("point" + i, this.node);
          this._pointList.push(point);
        }
        this._hailuo = cc.find("hailuo", this.node);
        this._hailuo.on("click", this.onClickHaiLuo, this);
        this._tips = cc.find("tips", this.node);
        this._tips.active = false;
      },
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onClickHaiLuo: function onClickHaiLuo() {
        var _this2 = this;
        this._hailuo.getComponent(cc.Button).interactable = false;
        this._tips.active = true;
        this._tips.scale = 0;
        cc.tween(this._tips).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(2).to(.5, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this2._hailuo.getComponent(cc.Button).interactable = true;
          _this2._tips.active = false;
        }).start();
      },
      init: function init(num) {
        num > 20 && (num = 20);
        for (var i = 0; i < num; i++) {
          var point = this._pointList[i];
          cc.find("select", point).active = true;
        }
        this._pointIdx = num;
        this._tempPointIdx = num;
      },
      addOnePoint: function addOnePoint() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var point, effect, effectAni;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3._pointIdx++;
              if (!(_this3._pointIdx > 20)) {
                _context.next = 4;
                break;
              }
              _this3._pointIdx = 20;
              return _context.abrupt("return");

             case 4:
              point = _this3._pointList[_this3._pointIdx - 1];
              effect = cc.find("jindutiaoqipaolizi", point);
              effectAni = effect.getComponent(cc.Animation);
              effect.active = true;
              effectAni.play("jindutiaoqipaolizi");
              effectAni.on("finished", function() {
                effectAni.off("finished");
                effect.active = false;
              });
              cc.find("select", point).active = true;

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showJiMan: function showJiMan() {
        var hailuoAni = this._hailuo.getComponent(cc.Animation);
        hailuoAni.play("hailuoJiManEffect");
      },
      getOnePoint: function getOnePoint() {
        this._tempPointIdx++;
        this._tempPointIdx > 20 && (this._tempPointIdx = 20);
        return this._pointList[this._tempPointIdx - 1];
      },
      recovery: function recovery() {
        this._pointIdx = 0;
        this._tempPointIdx = 0;
        for (var i = 0; i < this._pointList.length; i++) {
          var point = this._pointList[i];
          cc.find("select", point).active = false;
          cc.find("jindutiaoqipaolizi", point).active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "332adJ7KWxOP5MzaZB/0isj", "BunnyGirl_manage");
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
        _isInFree: false,
        _isInBonus: false
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, false, this);
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
      onRecvClickQiQiu: function onRecvClickQiQiu(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              200 == msg.code && (1 === msg.data.rtype ? cc.vv.gameData.getBonusGame().OnMsgSpin(msg.data) : 2 === msg.data.rtype && cc.vv.gameData.getPopWinManage().onSelectBonus(msg.data.choiceId, msg.data.bubbleGame.restCnt, msg.data.bubbleGame));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _gameInfo, curWin, i, idx, symbol, nWin, nTotal, isNormalGame, _i, _idx, _symbol, _i2, key, _symbol2, _i3, _key, _symbol3;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _gameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo;
              if (_gameInfo) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              if (!(_gameInfo.bonusWinCoin && _gameInfo.bonusWinCoin > 0)) {
                _context2.next = 10;
                break;
              }
              curWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              cc.vv.gameData.GetBottomScript().SetWin(curWin + _gameInfo.bonusWinCoin);
              for (i = 0; i < _gameInfo.bonusIdxs.length; i++) {
                idx = _gameInfo.bonusIdxs[i];
                symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                symbol && symbol.playStopAnimation();
              }
              _context2.next = 10;
              return _this2.awaitTime(1);

             case 10:
              cc.vv.gameData.GetSlotsScript().ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              _context2.next = 17;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(nWin, nTotal, isNormalGame);

             case 17:
              if (!_gameInfo.bonusGame) {
                _context2.next = 24;
                break;
              }
              for (_i = 0; _i < _gameInfo.bonusGame.bonusIdxs.length; _i++) {
                _idx = _gameInfo.bonusGame.bonusIdxs[_i];
                _idx > 20 && (_idx -= 20);
                _symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(_idx);
                _symbol && _symbol.playWinAnimation();
                cc.vv.gameData.GetSlotsScript().hideQiPaoByIdx(_idx);
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_TriggerRespin);
              _context2.next = 22;
              return _this2.awaitTime(2);

             case 22:
              _context2.next = 24;
              return _this2.enterBonusGame(_gameInfo.bonusGame);

             case 24:
              if (!_gameInfo.bubbleGame) {
                _context2.next = 27;
                break;
              }
              _context2.next = 27;
              return _this2.enterPickGame();

             case 27:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context2.next = 39;
                break;
              }
              if (!_gameInfo.freeResult) {
                _context2.next = 37;
                break;
              }
              if (!(_gameInfo.freeResult.freeInfo && _gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context2.next = 37;
                break;
              }
              for (_i2 = 0; _i2 < _gameInfo.freeResult.freeInfo.scatterIdx.length; _i2++) {
                key = _gameInfo.freeResult.freeInfo.scatterIdx[_i2];
                _symbol2 = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(Number(key));
                _symbol2 && _symbol2.playWinAnimation();
              }
              if (!(_gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 37;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              _context2.next = 35;
              return _this2.awaitTime(2);

             case 35:
              _context2.next = 37;
              return _this2.CheckFreeEnterFreeGame(_gameInfo.freeResult.freeInfo.freeCnt);

             case 37:
              _context2.next = 48;
              break;

             case 39:
              if (!_gameInfo.freeResult) {
                _context2.next = 48;
                break;
              }
              if (!(_gameInfo.freeResult.freeInfo && _gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context2.next = 48;
                break;
              }
              for (_i3 = 0; _i3 < _gameInfo.freeResult.freeInfo.scatterIdx.length; _i3++) {
                _key = _gameInfo.freeResult.freeInfo.scatterIdx[_i3];
                _symbol3 = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(Number(_key));
                _symbol3 && _symbol3.playWinAnimation();
              }
              if (!(_gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 48;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Mermaid_scatter_TriggerFreespin);
              _context2.next = 46;
              return _this2.awaitTime(2);

             case 46:
              _context2.next = 48;
              return _this2.CheckEnterFreeGame(_gameInfo.freeResult.freeInfo.freeCnt);

             case 48:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context2.next = 51;
                break;
              }
              _context2.next = 51;
              return _this2.CheckExitFreeGame();

             case 51:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 52:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context3.next = 4;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin, cc.vv.gameData.GetTotalFree());

                     case 4:
                      _context3.next = 6;
                      return _this3.changeSlotsNormal();

                     case 6:
                      cc.vv.gameData.SetTotalFree(0);
                      _context3.next = 9;
                      return cc.vv.gameData.GetSlotsScript().ShowWinCoin(nWin, nTotal, true);

                     case 9:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 11:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame(freecnt) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _context5.next = 2;
                      return cc.vv.gameData.getPopWinManage().showFreeGametri(freecnt, true);

                     case 2:
                      sucess();

                     case 3:
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
      CheckEnterFreeGame: function CheckEnterFreeGame(freecnt) {
        var _this4 = this;
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
                      return cc.vv.gameData.getPopWinManage().showFreeGametri(freecnt, false);

                     case 2:
                      _context7.next = 4;
                      return _this4.changeSlotsFree();

                     case 4:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_Mermaid_FreespinBG);
                      sucess();

                     case 6:
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
      ReconnectShow: function ReconnectShow() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var rest;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this5.ShowGameview(true);
                _this5.ShowFreeTimes(true);
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_Mermaid_FreespinBG);
                cc.vv.gameData.changeSlotsFree();
                cc.vv.gameData.GetSlotsScript().recoveryFree();
              } else {
                _this5.ShowGameview(false);
                _this5.ShowFreeTimes(false);
                cc.vv.gameData.changeSlotsNormal();
              }
              _context9.next = 5;
              return cc.vv.gameData.reconnect();

             case 5:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 6:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._isInFree = bFree;
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          cc.vv.gameData.GetBottomScript().SetWin(nTotal);
          cc.vv.gameData.getPrizePool().alignTop();
        } else cc.vv.gameData.getPrizePool().toNormal();
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      ShowFreeTimes: function ShowFreeTimes(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.GetBottomScript().ShowFreeModel(true, total - rest, total);
        } else cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
      },
      changeSlotsFree: function changeSlotsFree() {
        var _this6 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                cc.vv.gameData.changeSlotsFree();
                _context10.next = 3;
                return cc.vv.gameData.GetSlotsScript().showFreeGame(function() {
                  _this6.ShowGameview(true);
                });

               case 3:
                _this6.ShowFreeTimes(true);
                success();

               case 5:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      changeSlotsNormal: function changeSlotsNormal() {
        var _this7 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                _context11.next = 2;
                return cc.vv.gameData.getQiePing().showQiePing1(function() {
                  _this7.ShowGameview(false);
                  cc.vv.gameData.GetSlotsScript().node.active = false;
                  cc.vv.gameData.changeSlotsNormal();
                });

               case 2:
                _this7.ShowFreeTimes(false);
                success();

               case 4:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      enterPickGame: function enterPickGame() {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_TriggerBonus);
                cc.vv.gameData.getCollectNode().showJiMan();
                _context12.next = 4;
                return _this8.awaitTime(2);

               case 4:
                cc.vv.gameData.getQiePing().showQiePing1();
                _context12.next = 7;
                return _this8.awaitTime(.5);

               case 7:
                _context12.next = 9;
                return cc.vv.gameData.getPickGame().showPickGame();

               case 9:
                success();

               case 10:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      enterBonusGame: function enterBonusGame(data) {
        var _this9 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                _context13.next = 2;
                return cc.vv.gameData.getPopWinManage().showPearlsLinkTri();

               case 2:
                cc.vv.gameData.getQiePing().showQiePing1();
                _context13.next = 5;
                return _this9.awaitTime(3);

               case 5:
                _context13.next = 7;
                return cc.vv.gameData.getBonusGame().showBonusGame(data);

               case 7:
                success();

               case 8:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_paopaoNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66db5iwFC5OCI5gpWiQiwcd", "BunnyGirl_paopaoNode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _qipao: null,
        _jinbi: null
      },
      onLoad: function onLoad() {
        this._qipao = cc.find("qipao", this.node);
        this._jinbi = cc.find("jinbi", this.node);
      },
      start: function start() {
        this.init();
      },
      init: function init() {
        var qipaoAni = this._qipao.getComponent(cc.Animation);
        qipaoAni.play("qipaoScale");
        var nodeAni = this.node.getComponent(cc.Animation);
        nodeAni.play("PaoPaoNodeNormal");
        this._jinbi.is3DNode = true;
        this._jinbi.eulerAngles = cc.v3(0, 0, 0);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this);
      },
      onEventStart: function onEventStart(event) {
        var _this = this;
        cc.vv.gameData.getPickGame().curPaoPaoCnt = 0;
        this.node.off(cc.Node.EventType.TOUCH_START);
        var data = cc.vv.gameData.getPickGame().getPickData();
        if (data) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_Click_QiPao);
          this.node.zIndex = 100;
          cc.find("coin", this.node).getComponent(cc.Label).string = Global.convertNumToShort(data, 1e3, 1);
          var nodeAni = this.node.getComponent(cc.Animation);
          nodeAni.play("clickPaoPaoNode");
          var qipaoAni = this._qipao.getComponent(cc.Animation);
          qipaoAni.play("qipaoClick");
          this._jinbi.is3DNode = true;
          cc.tween(this._jinbi).to(.66, {
            eulerAngles: cc.v3(0, 180, 0)
          }).start();
          cc.vv.gameData.getPickGame().updateData(data);
          this.node.stopAllActions();
          cc.vv.gameData.getPickGame().removePaoPao(this.node);
          nodeAni.on("finished", function() {
            nodeAni.off("finished");
            _this.node.parent = null;
          });
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.uid = Global.playerData.uid;
          req.gameid = cc.vv.gameData._gameId;
          req.data = {};
          req.data.rtype = 3;
          req.data.pickCnt = 1;
          cc.vv.NetManager.send(req);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_pick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0b7bdyRiRNUYOS3riSe6vH", "BunnyGirl_pick");
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
    var paopaoScale = [ 1, .95, .95, .95, .9, .85, .85, .85, .8 ];
    var paopaoX = [ 0, -235, 235 ];
    var offsetY = [ 0, 100, 120, 130, 140, 200, -110, -120, -130, -140, -200 ];
    var offsetX = [ 0, 50, 60, 70, 80, 150, -50, -60, -70, -80, -150 ];
    var paopaoNumCfg = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _winCoin: null,
        _picks: null,
        _dataList: [],
        _paopaoRoot: null,
        _success: null,
        _coin: 0,
        _pickNum: 0,
        _start: false,
        _paopaoList: [],
        _timeInterval: 1.5,
        curPaoPaoCnt: 0
      },
      onLoad: function onLoad() {
        this._winCoin = cc.find("winCoinRoot", this.node);
        this._picks = cc.find("picksRoot", this.node);
        this._paopaoRoot = cc.find("paopaoRoot", this.node);
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
      showPickGame: function showPickGame() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_Zeus_BonusCollectBg);
                _this2._success = success;
                _this2.node.active = true;
                _this2._start = true;
                _this2._winCoin.active = false;
                _this2._picks.active = false;
                _this2._paopaoRoot.opacity = 0;
                _this2.curPaoPaoCnt = 0;
                cc.vv.gameData.getPopWinManage().showBonusSelect();

               case 9:
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
      recoveryPickGame: function recoveryPickGame(bubbleGame) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.music_Zeus_BonusCollectBg);
                _this3._success = success;
                _this3.node.active = true;
                _this3._start = true;
                _this3._winCoin.active = false;
                _this3._picks.active = false;
                _this3._paopaoRoot.opacity = 0;
                _this3.curPaoPaoCnt = 0;
                if (0 === bubbleGame.state) cc.vv.gameData.getPopWinManage().showBonusSelect(); else {
                  _this3.startPickGame(bubbleGame.restCnt, bubbleGame.winCoin, bubbleGame.results);
                  cc.vv.gameData.GetBottomScript().SetWin(bubbleGame.winCoin);
                }

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
      startPickGame: function startPickGame(pickTimes, winCoin, dataList) {
        this._winCoin.active = true;
        this._winCoin.opacity = 0;
        cc.tween(this._winCoin).to(.2, {
          opacity: 255
        }).start();
        this._picks.active = true;
        this._picks.opacity = 0;
        this.curPaoPaoCnt = 0;
        cc.tween(this._picks).to(.2, {
          opacity: 255
        }).start();
        cc.tween(this._paopaoRoot).to(.2, {
          opacity: 255
        }).start();
        this._pickNum = pickTimes;
        cc.find("num", this._picks).getComponent(cc.Label).string = pickTimes;
        cc.find("coin", this._winCoin).getComponent(cc.Label).string = winCoin > 0 ? Global.FormatNumToComma(winCoin) : "";
        this._coin = winCoin;
        this._dataList = Global.copy(dataList);
      },
      getPickData: function getPickData() {
        if (this._dataList.length > 0) return this._dataList.shift();
        return null;
      },
      updateData: function updateData(coin) {
        this._coin += coin;
        var winCoinAni = this._winCoin.getComponent(cc.Animation);
        winCoinAni.play("shoujifankuiguang");
        var lizi = cc.find("lizi", this._winCoin);
        lizi.active = true;
        lizi.getComponent(cc.ParticleSystem).resetSystem();
        lizi.stopAllActions();
        cc.vv.gameData.GetBottomScript().SetWin(coin + cc.vv.gameData.GetBottomScript().getCurrentWin());
        cc.find("coin", this._winCoin).getComponent(cc.Label).string = Global.FormatNumToComma(this._coin);
        cc.tween(lizi).delay(1).call(function() {
          lizi.active = false;
        }).start();
        this._pickNum--;
        cc.find("num", this._picks).getComponent(cc.Label).string = this._pickNum;
        if (this._pickNum <= 0) {
          this._start = false;
          this.showGameOver();
        }
      },
      showGameOver: function showGameOver() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return _this4.awaitTime(1);

             case 2:
              for (i = 0; i < _this4._paopaoList.length; i++) _this4._paopaoList[i].active = false;
              _this4._paopaoList = [];
              _context3.next = 6;
              return cc.vv.gameData.getPopWinManage().showBonusWinCoin(_this4._coin);

             case 6:
              _context3.next = 8;
              return cc.vv.gameData.getQiePing().showQiePing1(function() {
                _this4.node.active = false;
                cc.vv.gameData.GetSlotsScript().restQiPao();
                cc.vv.gameData.getCollectNode().recovery();
              });

             case 8:
              cc.vv.gameData.AddCoin(_this4._coin);
              _context3.next = 11;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(cc.vv.gameData.GetBottomScript().getCurrentWin(), cc.vv.gameData.GetBottomScript().getCurrentWin(), true);

             case 11:
              _this4.exitPickGame();

             case 12:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitPickGame: function exitPickGame() {
        Global.SlotsSoundMgr.playNormalBgm(true);
        if (this._success) {
          this._success();
          this._success = null;
        }
      },
      update: function update(dt) {
        var _this5 = this;
        if (this._start) {
          this._timeInterval += dt;
          if (this._timeInterval > 1.5) {
            this._timeInterval -= 1.5;
            var tempPaoPaox = Global.copy(paopaoX);
            var paopaoNum = paopaoNumCfg[Global.random(0, paopaoNumCfg.length - 1)];
            var _loop = function _loop(i) {
              _this5.curPaoPaoCnt += 1;
              var scaleIndex = Global.random(0, paopaoScale.length - 1);
              var xIndex = Global.random(0, tempPaoPaox.length - 1);
              var offsetYIndex = Global.random(0, offsetY.length - 1);
              var offsetXIndex = Global.random(0, offsetX.length - 1);
              var x = tempPaoPaox[xIndex] + offsetX[offsetXIndex];
              x < -252.5 && (x = -252.5);
              x > 252.5 && (x = 252.5);
              tempPaoPaox.splice(xIndex, 1);
              var y = -cc.winSize.height / 2 - 235 + offsetY[offsetYIndex];
              var paopao = cc.instantiate(cc.vv.gameData.GetPrefabByName("paopaoNode"));
              paopao.parent = _this5._paopaoRoot;
              paopao.position = cc.v2(x, y);
              paopao.scale = paopaoScale[scaleIndex];
              _this5._paopaoList.push(paopao);
              cc.tween(paopao).to(15, {
                position: cc.v2(x, cc.winSize.height / 2 + 235 + offsetY[offsetYIndex])
              }).call(function() {
                for (var j = 0; j < _this5._paopaoList.length; j++) if (paopao == _this5._paopaoList[j]) {
                  _this5._paopaoList.splice(j, 1);
                  break;
                }
                paopao.parent = null;
              }).start();
            };
            for (var i = 0; i < paopaoNum; i++) _loop(i);
            if (cc.vv.gameData.isNeedAutoPlay() && this.curPaoPaoCnt > 6) {
              this.curPaoPaoCnt = 0;
              var paopao = this._paopaoRoot.children[Global.random(0, this._paopaoRoot.childrenCount - 1)];
              paopao.emit(cc.Node.EventType.TOUCH_START);
            }
          }
        }
      },
      removePaoPao: function removePaoPao(paopao) {
        for (var j = 0; j < this._paopaoList.length; j++) if (paopao == this._paopaoList[j]) {
          this._paopaoList.splice(j, 1);
          break;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_qiePing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4dee9Ryjz9KfpmFjYlSUWet", "BunnyGirl_qiePing");
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
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(success, failed) {
          _this.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      showQiePing1: function showQiePing1(callBack) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var character, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              character = cc.find("Canvas/safe_node/Mermaid_idle");
              character.active = false;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Mermaid_GuoChang);
              spine = _this2.node.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "skill", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 9;
              return _this2.awaitTime(2.7);

             case 9:
              character.active = true;
              callBack && callBack();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showQiePing2: function showQiePing2(callBack) {
        this.showQiePing1(callBack);
      }
    });
    cc._RF.pop();
  }, {} ],
  BunnyGirl_reelbig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d82evlPLBESqnCSBDFEmSv", "BunnyGirl_reelbig");
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
    var symbolSize = {
      width: 390,
      height: 400
    };
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      start: function start() {},
      LoadSymbols: function LoadSymbols() {
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("LMSlots_SymbolBig");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("BunnyGirl_symbolBig");
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        this._symbols.push(scp);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getManage().OnSpinEnd();
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * symbolSize.height);
      },
      StartMove: function StartMove() {
        this._result = null;
        this._stopRightNow = null;
        this._bNotifyReadyStop = null;
        this._originResult = null;
        this._addSpeed = 0;
        this._curY = 0;
        this._bMoving = true;
        this._bStoping = false;
        this._offsetY = 0;
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          symbol.StartMove();
        }
        this._speed = this._cfg.speed * this.GetTimeScale();
        this._offset = symbolSize.height;
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation(true);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
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
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
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
        symbolData ? symbol.ShowById(symbolData.sid, symbolData.data) : symbol.ShowRandomSymbol();
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      },
      SetResult: function SetResult(val) {
        this._originResult = Global.copy(val);
        this._result = val;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BunnyGirl_reelfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fd597T7odDIY9esdlEzhnt", "BunnyGirl_reelfree");
    "use strict";
    cc.Class({
      extends: require("BunnyGirl_reel"),
      properties: {},
      LoadSymbols: function LoadSymbols() {
        var url = this._cfg.symbolPrefab;
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url);
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("BunnyGirl_symbolfree");
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        this._symbols.push(scp);
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) if (this._result instanceof Array) {
          this.ReadyToStop();
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        } else cc.error("LMSlots_Reel_Base.updataSymbol\u8bbe\u7f6e\u7684\u7ed3\u679c\u4e0d\u662f\u6570\u7ec4!");
        symbolData ? symbol.ShowById(symbolData.sid, symbolData.data) : symbol.ShowRandomSymbol();
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      },
      SetResult: function SetResult(val) {
        this._originResult = Global.copy(val);
        this._result = val;
      }
    });
    cc._RF.pop();
  }, {
    BunnyGirl_reel: "BunnyGirl_reel"
  } ],
  BunnyGirl_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4584c/at5BFUIu0axL0uVSq", "BunnyGirl_reel");
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
        _randSymbolNum: 0,
        _randSymbolVal: 0
      },
      start: function start() {},
      LoadSymbols: function LoadSymbols() {
        var url = this._cfg.symbolPrefab;
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url);
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 4; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getManage().OnSpinEnd();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent(this._cfg.scripts.Symbols);
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        if (this._randSymbolNum > 0) {
          this._randSymbolNum--;
          scp.ShowById(this._cfg.symbolArray[this._randSymbolVal][this._randSymbolNum]);
        } else {
          this._randSymbolVal = scp.ShowRandomSymbol();
          if (104 == this._randSymbolVal) {
            this._randSymbolNum = this._cfg.symbolArray[this._randSymbolVal].length;
            this._randSymbolNum--;
          } else this._randSymbolNum = 0;
        }
        this._symbols.push(scp);
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        this._super(bShow, name);
        var diNode = cc.find("mask/jiliBg", this.node);
        diNode && (diNode.active = bShow);
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) if (this._result instanceof Array) {
          this.ReadyToStop();
          this._randSymbolNum = 0;
          this._randSymbolVal = 0;
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        } else cc.error("LMSlots_Reel_Base.updataSymbol\u8bbe\u7f6e\u7684\u7ed3\u679c\u4e0d\u662f\u6570\u7ec4!");
        if (symbolData) symbol.ShowById(symbolData.sid, symbolData.data); else if (this._randSymbolNum > 0) {
          this._randSymbolNum--;
          symbol.ShowById(this._cfg.symbolArray[this._randSymbolVal][this._randSymbolNum]);
        } else {
          this._randSymbolVal = symbol.ShowRandomSymbol();
          this._randSymbolNum = this._cfg.symbolArray[this._randSymbolVal].length;
          this._randSymbolNum--;
        }
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.GetSlotsScript();
          slots.OnReelReadyToStop(this._reelIdx);
          var startIdx = this._symbols.length - 3;
          if (104 === this._symbols[startIdx]._id) for (var i = startIdx; i < this._symbols.length; i++) {
            var symbol = this._symbols[i];
            symbol.changeOther();
          } else if (104 === this._symbols[startIdx + 1]._id) for (var _i = startIdx + 1; _i < this._symbols.length; _i++) {
            var _symbol = this._symbols[_i];
            _symbol.changeOther();
          } else if (104 === this._symbols[startIdx + 2]._id) for (var _i2 = startIdx + 2; _i2 < this._symbols.length; _i2++) {
            var _symbol2 = this._symbols[_i2];
            _symbol2.changeOther();
          }
        }
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length - 3; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation(true);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
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
          if ("Mermaid_scatter_down" === reelStopEffect) if (0 === cc.vv.gameData.GetSlotsScript()._scatterNum) {
            reelStopEffect = "Mermaid_scatter_down";
            cc.vv.gameData.GetSlotsScript()._scatterNum++;
          } else if (1 === cc.vv.gameData.GetSlotsScript()._scatterNum) {
            reelStopEffect = "Mermaid_scatter_down2";
            cc.vv.gameData.GetSlotsScript()._scatterNum++;
          } else if (2 === cc.vv.gameData.GetSlotsScript()._scatterNum) {
            reelStopEffect = "Mermaid_scatter_down3";
            cc.vv.gameData.GetSlotsScript()._scatterNum++;
          }
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      SetResult: function SetResult(val) {
        this._originResult = Global.copy(val);
        this._result = val;
        var num = 3;
        var lastSymbol = this._originResult[this._originResult.length - 1].sid;
        if (lastSymbol > 101) for (var i = 0; i < lastSymbol - 101; i++) {
          this._originResult.push({
            sid: lastSymbol - i - 1
          });
          this._result.push({
            sid: lastSymbol - i - 1
          });
          num--;
        }
        if (num > 0) for (var _i3 = 0; _i3 < num; _i3++) {
          var randIdx = Global.random(1, this._cfg.randomSymbols.length);
          var randVal = this._cfg.randomSymbols[randIdx - 1];
          if (3 === randVal) {
            this._originResult.push({
              sid: randVal,
              data: {
                coin: cc.vv.gameData.GetTotalBet()
              }
            });
            this._result.push({
              sid: randVal,
              data: {
                coin: cc.vv.gameData.GetTotalBet()
              }
            });
          } else {
            this._originResult.push({
              sid: randVal
            });
            this._result.push({
              sid: randVal
            });
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BunnyGirl_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfe5aG2y0FMaI7DxDZ2rg/2", "BunnyGirl_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/BunnyGirl/",
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
        Mermaid_IceQiPap_Fly: "Mermaid_IceQiPap_Fly",
        Mermaid_JackPotWinCoins: "Mermaid_JackPotWinCoins",
        Mermaid_JackPotWinCoins_end: "Mermaid_JackPotWinCoins_end",
        Mermaid_longRun: "Mermaid_longRun",
        Mermaid_reelstop: "Mermaid_reelstop",
        Mermaid_scatter_down: "Mermaid_scatter_down",
        Mermaid_scatter_down2: "Mermaid_scatter_down2",
        Mermaid_scatter_down3: "Mermaid_scatter_down3",
        Mermaid_scatter_TriggerFreespin: "Mermaid_scatter_TriggerFreespin",
        Mermaid_TriggerRespin: "Mermaid_TriggerRespin",
        music_Mermaid_Big_Scatter_Down: "music_Mermaid_Big_Scatter_Down",
        music_Mermaid_BonusOver_view: "music_Mermaid_BonusOver_view",
        music_Mermaid_Click_HaiLuo: "music_Mermaid_Click_HaiLuo",
        music_Mermaid_Click_QiPao: "music_Mermaid_Click_QiPao",
        music_Mermaid_Freespin_OverView: "music_Mermaid_Freespin_OverView",
        music_Mermaid_FreespinBG: "music_Mermaid_FreespinBG",
        music_Mermaid_FsStart_GuoChang: "music_Mermaid_FsStart_GuoChang",
        music_Mermaid_GuoChang: "music_Mermaid_GuoChang",
        music_Mermaid_JackpotView: "music_Mermaid_JackpotView",
        music_Mermaid_Jp_yu_FeiWen: "music_Mermaid_Jp_yu_FeiWen",
        music_Mermaid_Jp_yu_shengQi: "music_Mermaid_Jp_yu_shengQi",
        music_Mermaid_last_win_1: "music_Mermaid_last_win_1",
        music_Mermaid_last_win_2: "music_Mermaid_last_win_2",
        music_Mermaid_NormalBG: "music_Mermaid_NormalBG",
        music_Mermaid_respin_overView: "music_Mermaid_respin_overView",
        music_Mermaid_respin_unlock: "music_Mermaid_respin_unlock",
        music_Mermaid_RespinBG: "music_Mermaid_RespinBG",
        music_Mermaid_RsBar_rest: "music_Mermaid_RsBar_rest",
        music_Mermaid_TriggerBonus: "music_Mermaid_TriggerBonus",
        music_Zeus_BonusCollectBg: "music_Zeus_BonusCollectBg",
        click: "click"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  BunnyGirl_symbolBig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19209d9wLJA1JnXt7I/5L0P", "BunnyGirl_symbolBig");
    "use strict";
    cc.Class({
      extends: require("BunnyGirl_symbol"),
      properties: {},
      start: function start() {},
      Init: function Init(idx, node) {
        this._topAniNode = node;
        this.SetSymbolIdx(idx);
        this.ShowRandomSymbol();
      },
      playWinTweenAction: function playWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("bigSymbolWin");
      },
      stopWinTweenAction: function stopWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("bigSymbolIdel");
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        return cfg.cardmapfree;
      },
      GetKuangShowParent: function GetKuangShowParent() {
        return this._topAniNode;
      },
      playWinAnimation: function playWinAnimation() {
        if ("win" === this._state) return;
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    BunnyGirl_symbol: "BunnyGirl_symbol"
  } ],
  BunnyGirl_symbolfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b00ce9QPStPEJJuBY7XmVGo", "BunnyGirl_symbolfree");
    "use strict";
    cc.Class({
      extends: require("BunnyGirl_symbol"),
      properties: {},
      Init: function Init(idx, node) {
        this._topAniNode = node;
        this.SetSymbolIdx(idx);
        this.ShowRandomSymbol();
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        return cfg.cardmapfree;
      },
      GetKuangShowParent: function GetKuangShowParent() {
        return this._topAniNode;
      }
    });
    cc._RF.pop();
  }, {
    BunnyGirl_symbol: "BunnyGirl_symbol"
  } ],
  BunnyGirl_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "163316Cf0xPg4PTCezlfXgC", "BunnyGirl_symbol");
    "use strict";
    var pearlsType = [ 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
    var coinMult = [ 1, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 3.5, 4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 7, 8, 9, 10 ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _topAnikuangNode: null,
        _topAniLongNode: null
      },
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 200 - idx : this._id >= 101 && this._id <= 104 ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      Init: function Init(idx, node) {
        this._topAniNode = node;
        this._topAniLongNode = cc.find("Canvas/safe_node/slots/top_ani_long");
        this._topAnikuangNode = cc.find("Canvas/safe_node/slots/top_ani_kuang");
        this.SetSymbolIdx(idx);
      },
      playWinTweenAction: function playWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolWin");
      },
      stopWinTweenAction: function stopWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolIdel");
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        return cfg.cardmap;
      },
      ShowById: function ShowById(id, data) {
        this._id = id;
        this._data = data;
        this._state = "normal";
        this._showNode && (this._showNode.active = false);
        this._data && (this._data.jackpot ? this.setSymbolJackpot(this._data.jackpot.id, this.node) : this.setSymbolCoin(this._data.coin, this.node));
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].node) {
          this._showNode = cc.find(cfg.symbol[id].node, this.node);
          this._showNode.active = true;
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
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
          var type = pearlsType[Global.random(0, pearlsType.length - 1)];
          if (5 === type) {
            var betCoin = cc.vv.gameData.GetTotalBet();
            var coin = coinMult[Global.random(0, coinMult.length - 1)];
            data = {
              coin: coin * betCoin
            };
          } else data = {
            jackpot: {
              id: type
            }
          };
        }
        this.ShowById(randVal, data);
        return randVal;
      },
      setSymbolCoin: function setSymbolCoin(coin, node) {
        var betCoin = cc.vv.gameData.GetTotalBet();
        var mult = coin / betCoin;
        var s3 = cc.find("s3", node);
        for (var i = 0; i < s3.children.length; i++) {
          var child = s3.children[i];
          child.active = false;
        }
        if (mult >= 5) {
          var coinNumH = cc.find("s3/coinNumH", node);
          coinNumH.active = true;
          coinNumH.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        } else {
          var coinNumL = cc.find("s3/coinNumL", node);
          coinNumL.active = true;
          coinNumL.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        }
      },
      setSymbolJackpot: function setSymbolJackpot(jpid, node) {
        var s3 = cc.find("s3", node);
        for (var i = 0; i < s3.children.length; i++) {
          var child = s3.children[i];
          child.active = false;
        }
        switch (jpid) {
         case 1:
          cc.find("s3/mini", node).active = true;
          break;

         case 2:
          cc.find("s3/minor", node).active = true;
          break;

         case 3:
          cc.find("s3/major", node).active = true;
          break;

         case 4:
          cc.find("s3/grand", node).active = true;
        }
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
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
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
      OnSymbolAction: function OnSymbolAction(symbol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        cc.tween(symbol).to(time, {
          position: cc.v2(symbol.x, symbol.y + distance)
        }).start();
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
      setAnimationToTop: function setAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = null;
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            var nodePos = cc.v2(0, 0);
            var nodeParent = null;
            if (this._id <= 104 && this._id >= 101) {
              cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniLongNode);
              nodeParent = this._topAniLongNode;
              nodePos = this._topAniLongNode.convertToNodeSpaceAR(wordPos);
              switch (this._id) {
               case 101:
                nodePos.y += -165;
                break;

               case 102:
                nodePos.y += -55;
                break;

               case 103:
                nodePos.y += 55;
                break;

               case 104:
                nodePos.y += 165;
              }
            } else {
              cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
              nodeParent = this._topAniNode;
              nodePos = this._topAniNode.convertToNodeSpaceAR(wordPos);
            }
            cloneNode || (cloneNode = cc.instantiate(this.node));
            this._data && (this._data.jackpot ? this.setSymbolJackpot(this._data.jackpot.id, cloneNode) : this.setSymbolCoin(this._data.coin, cloneNode));
            cloneNode.parent = nodeParent;
            cloneNode.position = nodePos;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx);
            this.node.active = false;
            return cloneNode;
          }
          var showNode = null;
          showNode = this._id <= 104 && this._id >= 101 ? cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniLongNode) : cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
          if (showNode) {
            showNode.active = false;
            for (var i = 0; i < showNode.children.length; i++) {
              var element = showNode.children[i];
              element.active = false;
            }
          }
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      },
      GetKuangShowParent: function GetKuangShowParent() {
        return this._topAnikuangNode;
      },
      changeOther: function changeOther() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        var data = null;
        if (3 === randVal) {
          var type = pearlsType[Global.random(0, pearlsType.length - 1)];
          if (5 === type) {
            var betCoin = cc.vv.gameData.GetTotalBet();
            var coin = coinMult[Global.random(0, coinMult.length - 1)];
            data = {
              coin: coin * betCoin
            };
          } else data = {
            jackpot: {
              id: type
            }
          };
        }
        this.ShowById(randVal, data);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "BunnyGirl_Bottom", "BunnyGirl_Cfg", "BunnyGirl_GameData", "BunnyGirl_Logic", "BunnyGirl_Pop", "BunnyGirl_PrizePool", "BunnyGirl_Slots", "BunnyGirl_Slotsfree", "BunnyGirl_bonusGame", "BunnyGirl_bonusReel", "BunnyGirl_bonusSymbol", "BunnyGirl_collectNode", "BunnyGirl_manage", "BunnyGirl_paopaoNode", "BunnyGirl_pick", "BunnyGirl_qiePing", "BunnyGirl_reel", "BunnyGirl_reelbig", "BunnyGirl_reelfree", "BunnyGirl_sound", "BunnyGirl_symbol", "BunnyGirl_symbolBig", "BunnyGirl_symbolfree" ]);