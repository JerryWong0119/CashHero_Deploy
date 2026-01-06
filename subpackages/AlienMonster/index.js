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
  AlienMonster_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f037fkU8lFMIVyIg5X8f8E", "AlienMonster_Cfg");
    "use strict";
    var _symbol, _cardmap, _freemap;
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
          name: "Wild_idle",
          zIndex: 300
        },
        stop_ani: "Wild_Intro",
        zIndex: 200
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "H1_1X1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "H2_1X1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "H3_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "H4_1X1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "H5_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "L1_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "L2_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "L3_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "L4_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13",
        win_node: "animation_13",
        win_ani: {
          name: "L5_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14",
        win_node: "animation_14",
        win_ani: {
          name: "L6_1x1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 201, {
        node: "symbol_201",
        win_node: "animation_201",
        win_ani: {
          name: "Scatter_1x2_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_1x2_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Scatter_1x2_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 202, {
        node: "symbol_202",
        win_node: "animation_202",
        win_ani: {
          name: "Scatter_1x2_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_1x2_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Scatter_1x2_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 211, {
        node: "symbol_211",
        win_node: "animation_211",
        win_ani: {
          name: "Scatter_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Scatter_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 212, {
        node: "symbol_212",
        win_node: "animation_212",
        win_ani: {
          name: "Scatter_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Scatter_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 213, {
        node: "symbol_213",
        win_node: "animation_213",
        win_ani: {
          name: "Scatter_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Scatter_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 311, {
        node: "symbol_311",
        win_node: "animation_311",
        win_ani: {
          name: "JP_Scatter_03",
          zIndex: 300
        },
        stop_ani: {
          name: "JP_Scatter_01",
          zIndex: 200
        },
        idle_ani: {
          name: "JP_Scatter_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 312, {
        node: "symbol_312",
        win_node: "animation_312",
        win_ani: {
          name: "JP_Scatter_03",
          zIndex: 300
        },
        stop_ani: {
          name: "JP_Scatter_01",
          zIndex: 200
        },
        idle_ani: {
          name: "JP_Scatter_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 313, {
        node: "symbol_313",
        win_node: "animation_313",
        win_ani: {
          name: "JP_Scatter_03",
          zIndex: 300
        },
        stop_ani: {
          name: "JP_Scatter_01",
          zIndex: 200
        },
        idle_ani: {
          name: "JP_Scatter_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1501, {
        node: "symbol_1501",
        win_node: "animation_1501",
        win_ani: {
          name: "Bonus_1x2_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Bonus_1x2_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Bonus_1x2_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1502, {
        node: "symbol_1502",
        win_node: "animation_1502",
        win_ani: {
          name: "Bonus_1x2_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Bonus_1x2_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Bonus_1x2_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1511, {
        node: "symbol_1511",
        win_node: "animation_1511",
        win_ani: {
          name: "Bonus_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Bonus_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Bonus_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1512, {
        node: "symbol_1512",
        win_node: "animation_1512",
        win_ani: {
          name: "Bonus_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Bonus_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Bonus_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1513, {
        node: "symbol_1513",
        win_node: "animation_1513",
        win_ani: {
          name: "Bonus_2x3_03",
          zIndex: 300
        },
        stop_ani: {
          name: "Bonus_2x3_01",
          zIndex: 200
        },
        idle_ani: {
          name: "Bonus_2x3_02",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 111, {
        node: "symbol_111",
        win_node: "animation_111",
        win_ani: {
          name: "Wild_1x4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 112, {
        node: "symbol_112",
        win_node: "animation_112",
        win_ani: {
          name: "Wild_1x4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 113, {
        node: "symbol_113",
        win_node: "animation_113",
        win_ani: {
          name: "Wild_1x4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 114, {
        node: "symbol_114",
        win_node: "animation_114",
        win_ani: {
          name: "Wild_1x4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 121, {
        node: "symbol_121",
        win_node: "animation_121",
        win_ani: {
          name: "Wild_Dog",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 122, {
        node: "symbol_122",
        win_node: "animation_122",
        win_ani: {
          name: "Wild_Dog",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 123, {
        node: "symbol_123",
        win_node: "animation_123",
        win_ani: {
          name: "Wild_Dog",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 124, {
        node: "symbol_124",
        win_node: "animation_124",
        win_ani: {
          name: "Wild_Dog",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1111, {
        node: "symbol_1111",
        win_node: "animation_1111",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1112, {
        node: "symbol_1112",
        win_node: "animation_1112",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1113, {
        node: "symbol_1113",
        win_node: "animation_1113",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1114, {
        node: "symbol_1114",
        win_node: "animation_1114",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1121, {
        node: "symbol_1121",
        win_node: "animation_1121",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1122, {
        node: "symbol_1122",
        win_node: "animation_1122",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1123, {
        node: "symbol_1123",
        win_node: "animation_1123",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1124, {
        node: "symbol_1124",
        win_node: "animation_1124",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1131, {
        node: "symbol_1131",
        win_node: "animation_1131",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1132, {
        node: "symbol_1132",
        win_node: "animation_1132",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1133, {
        node: "symbol_1133",
        win_node: "animation_1133",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1134, {
        node: "symbol_1134",
        win_node: "animation_1134",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1141, {
        node: "symbol_1141",
        win_node: "animation_1141",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1142, {
        node: "symbol_1142",
        win_node: "animation_1142",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1143, {
        node: "symbol_1143",
        win_node: "animation_1143",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1144, {
        node: "symbol_1144",
        win_node: "animation_1144",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1151, {
        node: "symbol_1151",
        win_node: "animation_1151",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1152, {
        node: "symbol_1152",
        win_node: "animation_1152",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1153, {
        node: "symbol_1153",
        win_node: "animation_1153",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1154, {
        node: "symbol_1154",
        win_node: "animation_1154",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1211, {
        node: "symbol_1211",
        win_node: "animation_1211",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1212, {
        node: "symbol_1212",
        win_node: "animation_1212",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1221, {
        node: "symbol_1221",
        win_node: "animation_1221",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1222, {
        node: "symbol_1222",
        win_node: "animation_1222",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1231, {
        node: "symbol_1231",
        win_node: "animation_1231",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1232, {
        node: "symbol_1232",
        win_node: "animation_1232",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1241, {
        node: "symbol_1241",
        win_node: "animation_1241",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1242, {
        node: "symbol_1242",
        win_node: "animation_1242",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1251, {
        node: "symbol_1251",
        win_node: "animation_1251",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1252, {
        node: "symbol_1252",
        win_node: "animation_1252",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 131, {
        node: "symbol_131",
        win_node: "animation_131",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        },
        stop_ani: {
          name: "Multi_intro",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 132, {
        node: "symbol_132",
        win_node: "animation_132",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        },
        stop_ani: {
          name: "Multi_intro",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 133, {
        node: "symbol_133",
        win_node: "animation_133",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        },
        stop_ani: {
          name: "Multi_intro",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 134, {
        node: "symbol_134",
        win_node: "animation_134",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        },
        stop_ani: {
          name: "Multi_intro",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 135, {
        node: "symbol_135",
        win_node: "animation_135",
        win_ani: {
          name: "Multi_win",
          zIndex: 300
        },
        idle_ani: {
          name: "Multi_idle",
          zIndex: 200
        },
        stop_ani: {
          name: "Multi_intro",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 401, {
        node: "symbol_401",
        win_node: "animation_401",
        win_ani: {
          name: "H1_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 402, {
        node: "symbol_402",
        win_node: "animation_402",
        win_ani: {
          name: "H1_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 403, {
        node: "symbol_403",
        win_node: "animation_403",
        win_ani: {
          name: "H1_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 411, {
        node: "symbol_411",
        win_node: "animation_411",
        win_ani: {
          name: "H1_1X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 412, {
        node: "symbol_412",
        win_node: "animation_412",
        win_ani: {
          name: "H1_1X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 413, {
        node: "symbol_413",
        win_node: "animation_413",
        win_ani: {
          name: "H1_1X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 501, {
        node: "symbol_501",
        win_node: "animation_501",
        win_ani: {
          name: "H2_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 502, {
        node: "symbol_502",
        win_node: "animation_502",
        win_ani: {
          name: "H2_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 503, {
        node: "symbol_503",
        win_node: "animation_503",
        win_ani: {
          name: "H2_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 511, {
        node: "symbol_511",
        win_node: "animation_511",
        win_ani: {
          name: "H2_1X2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 512, {
        node: "symbol_512",
        win_node: "animation_512",
        win_ani: {
          name: "H2_1X2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 601, {
        node: "symbol_601",
        win_node: "animation_601",
        win_ani: {
          name: "H3_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 602, {
        node: "symbol_602",
        win_node: "animation_602",
        win_ani: {
          name: "H3_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 603, {
        node: "symbol_603",
        win_node: "animation_603",
        win_ani: {
          name: "H3_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 611, {
        node: "symbol_611",
        win_node: "animation_611",
        win_ani: {
          name: "H3_1x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 612, {
        node: "symbol_612",
        win_node: "animation_612",
        win_ani: {
          name: "H3_1x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 701, {
        node: "symbol_701",
        win_node: "animation_701",
        win_ani: {
          name: "H4_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 702, {
        node: "symbol_702",
        win_node: "animation_702",
        win_ani: {
          name: "H4_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 703, {
        node: "symbol_703",
        win_node: "animation_703",
        win_ani: {
          name: "H4_2X3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 711, {
        node: "symbol_711",
        win_node: "animation_711",
        win_ani: {
          name: "H4_1X2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 712, {
        node: "symbol_712",
        win_node: "animation_712",
        win_ani: {
          name: "H4_1X2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 801, {
        node: "symbol_801",
        win_node: "animation_801",
        win_ani: {
          name: "H5_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 802, {
        node: "symbol_802",
        win_node: "animation_802",
        win_ani: {
          name: "H5_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 803, {
        node: "symbol_803",
        win_node: "animation_803",
        win_ani: {
          name: "H5_2x3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 811, {
        node: "symbol_811",
        win_node: "animation_811",
        win_ani: {
          name: "H5_1x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 812, {
        node: "symbol_812",
        win_node: "animation_812",
        win_ani: {
          name: "H5_1x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 901, {
        node: "symbol_901",
        win_node: "animation_901",
        win_ani: {
          name: "L1_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 902, {
        node: "symbol_902",
        win_node: "animation_902",
        win_ani: {
          name: "L1_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1001, {
        node: "symbol_1001",
        win_node: "animation_1001",
        win_ani: {
          name: "L2_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1002, {
        node: "symbol_1002",
        win_node: "animation_1002",
        win_ani: {
          name: "L2_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1101, {
        node: "symbol_1101",
        win_node: "animation_1101",
        win_ani: {
          name: "L3_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1102, {
        node: "symbol_1102",
        win_node: "animation_1102",
        win_ani: {
          name: "L3_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1201, {
        node: "symbol_1201",
        win_node: "animation_1201",
        win_ani: {
          name: "L4_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1202, {
        node: "symbol_1202",
        win_node: "animation_1202",
        win_ani: {
          name: "L4_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1301, {
        node: "symbol_1301",
        win_node: "animation_1301",
        win_ani: {
          name: "L5_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1302, {
        node: "symbol_1302",
        win_node: "animation_1302",
        win_ani: {
          name: "L5_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1401, {
        node: "symbol_1401",
        win_node: "animation_1401",
        win_ani: {
          name: "L6_2x2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 1402, {
        node: "symbol_1402",
        win_node: "animation_1402",
        win_ani: {
          name: "L6_2x2",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "AlienMonster_Slots",
        Reels: "AlienMonster_Reel",
        Symbols: "AlienMonster_Symbol"
      },
      col: 5,
      row: 5,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 82,
        height: 58
      },
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 14, 14, 1, 13, 13, 13, 4, 12, 413, 412, 411, 11, 202, 201, 11, 1502, 1501, 11, 11, 11, 7, 7, 413, 412, 411, 9, 9, 4, 7, 7, 202, 201, 7, 7, 9, 1502, 1501, 9, 9, 4, 7, 7, 4, 8, 8, 202, 201, 8, 8, 812, 811, 4, 1502, 1501, 4, 512, 511, 8, 8, 8, 6, 202, 201, 6, 1, 5, 5, 10, 10, 1502, 1501, 10, 4, 4, 13, 202, 201, 13, 5, 5, 6, 6, 13, 13, 13, 1, 1502, 1501, 1, 6, 9, 6, 11, 11, 612, 611, 7, 7, 7, 9, 9, 9, 6, 14, 14, 5, 5, 8, 8, 8, 6, 6, 14, 14, 812, 811, 7, 7, 6, 6, 12, 6, 10, 10, 10, 1, 114, 113, 112, 111, 12, 12, 12, 712, 711, 1, 6, 6, 4, 4, 612, 611, 11, 12, 12, 10, 10, 4, 8, 8, 6, 6, 1, 4, 1, 5, 5, 7, 7, 6, 1, 4, 1, 1, 11, 11, 5, 5, 6, 5, 4, 14, 14, 4, 5, 5, 9, 4, 4, 5, 4, 6, 1, 6, 6, 5, 4, 4, 6, 5, 6, 13, 13, 5, 4, 6, 5, 12, 4, 4, 4 ]), 
      _defineProperty(_cardmap, 2, [ 612, 611, 6, 6, 12, 12, 11, 5, 8, 8, 8, 5, 5, 202, 201, 5, 1502, 1501, 5, 5, 5, 1, 1, 4, 4, 7, 7, 12, 6, 202, 201, 6, 6, 6, 5, 5, 1502, 1501, 5, 5, 11, 11, 11, 6, 6, 6, 9, 9, 6, 202, 201, 6, 7, 7, 7, 6, 1502, 1501, 6, 7, 7, 7, 8, 812, 811, 202, 201, 8, 8, 8, 114, 113, 112, 111, 4, 4, 1502, 1501, 4, 11, 11, 11, 6, 6, 6, 202, 201, 6, 1, 13, 13, 13, 7, 7, 4, 4, 1502, 1501, 4, 114, 113, 112, 111, 7, 712, 711, 1, 13, 14, 9, 9, 512, 511, 11, 11, 4, 10, 10, 5, 9, 9, 5, 6, 4, 4, 10, 10, 4, 1, 12, 5, 1, 14, 7, 7, 7, 14, 4, 6, 6, 13, 4, 10, 10, 413, 412, 411, 4, 9, 9, 9, 712, 711, 4, 1, 1, 14, 14, 14, 8, 12, 4, 12, 12, 12, 5, 5, 5, 1, 1, 8, 8, 13, 13, 13, 4, 6, 13, 13, 512, 511, 10, 11, 4, 4, 7, 4, 4, 14, 14, 6, 4, 9, 6, 4, 8, 8, 6, 5, 10 ]), 
      _defineProperty(_cardmap, 3, [ 10, 10, 11, 1, 1, 4, 6, 6, 14, 11, 11, 11, 202, 201, 11, 11, 11, 1502, 1501, 11, 11, 8, 8, 14, 14, 14, 6, 7, 7, 114, 113, 112, 111, 202, 201, 114, 113, 112, 111, 4, 1502, 1501, 4, 6, 6, 413, 412, 411, 5, 5, 5, 7, 202, 201, 7, 7, 7, 1, 10, 10, 10, 1502, 1501, 10, 10, 4, 9, 9, 9, 4, 202, 201, 4, 4, 8, 12, 8, 8, 1502, 1501, 8, 8, 8, 512, 511, 5, 5, 202, 201, 5, 13, 612, 611, 9, 9, 812, 811, 1502, 1501, 812, 811, 10, 7, 4, 4, 13, 12, 12, 12, 1, 6, 413, 412, 411, 13, 7, 7, 13, 13, 5, 1, 12, 12, 12, 6, 4, 4, 9, 9, 8, 8, 6, 1, 4, 6, 7, 8, 8, 7, 7, 11, 13, 13, 13, 6, 6, 5, 5, 712, 711, 1, 5, 1, 6, 6, 4, 4, 1, 6, 6, 4, 12, 5, 1, 5, 5, 612, 611, 6, 6, 14, 14, 14, 4, 4, 6, 9, 9, 6, 6, 6, 5, 5, 4, 5, 5, 4, 4, 5, 13, 13, 6, 6, 6, 7, 7, 9, 4, 4, 14, 4, 7, 4 ]), 
      _defineProperty(_cardmap, 4, [ 8, 6, 12, 5, 6, 5, 5, 7, 202, 201, 7, 7, 7, 1502, 1501, 7, 11, 11, 11, 12, 712, 711, 8, 8, 8, 1, 1, 202, 201, 1, 6, 1502, 1501, 6, 6, 6, 13, 1, 1, 4, 9, 202, 201, 9, 14, 14, 14, 1, 1, 1502, 1501, 1, 1, 7, 7, 4, 7, 7, 7, 202, 201, 7, 6, 6, 5, 114, 113, 112, 111, 1502, 1501, 5, 5, 4, 4, 202, 201, 4, 10, 10, 5, 5, 6, 9, 9, 9, 1502, 1501, 9, 9, 413, 412, 411, 8, 8, 5, 5, 6, 6, 4, 8, 8, 6, 6, 14, 14, 14, 13, 13, 4, 712, 711, 4, 5, 12, 12, 12, 4, 4, 13, 13, 11, 6, 6, 6, 5, 5, 5, 4, 6, 6, 5, 5, 5, 6, 13, 13, 11, 6, 612, 611, 812, 811, 4, 4, 13, 10, 512, 511, 9, 9, 11, 11, 11, 6, 6, 1, 4, 7, 4, 7, 7, 7, 10, 10, 10, 12, 4, 9, 13, 14, 14, 1, 8, 5, 6, 6, 4, 4, 512, 511, 4, 4, 10, 10, 12, 12, 8, 8, 11, 11, 8, 1, 13 ]), 
      _defineProperty(_cardmap, 5, [ 503, 502, 501, 1144, 1143, 1142, 1141, 403, 402, 401, 1154, 1153, 1152, 1151, 603, 602, 601, 132, 313, 312, 311, 132, 132, 131, 1212, 1211, 213, 212, 211, 1212, 1211, 131, 1513, 1512, 1511, 131, 313, 312, 311, 131, 902, 901, 1102, 1101, 1124, 1123, 1122, 1121, 1302, 1301, 1232, 1231, 213, 212, 211, 703, 702, 701, 803, 802, 801, 1202, 1201, 1513, 1512, 1511, 1202, 1201, 603, 602, 601, 1402, 1401, 134, 1114, 1113, 1112, 1111, 1402, 1401, 1134, 1133, 1132, 1131, 803, 802, 801, 403, 402, 401, 1252, 1251, 1513, 1512, 1511, 703, 702, 701, 1002, 1001, 902, 901, 1002, 1001, 1302, 1301, 503, 502, 501, 1242, 1241, 135, 1114, 1113, 1112, 1111, 131, 1513, 1512, 1511, 134, 133, 133, 1102, 1101, 132, 133, 1222, 1221 ]), 
      _cardmap),
      freemap: (_freemap = {}, _defineProperty(_freemap, 1, [ 14, 14, 413, 412, 411, 10, 5, 6, 6, 4, 8, 8, 8, 202, 201, 8, 8, 1502, 1501, 8, 8, 8, 10, 6, 5, 5, 6, 14, 202, 201, 14, 1, 1, 1502, 1501, 1, 13, 13, 13, 11, 1, 8, 202, 201, 8, 8, 8, 1, 612, 611, 1502, 1501, 612, 611, 124, 123, 122, 121, 7, 7, 812, 811, 202, 201, 812, 811, 13, 512, 511, 5, 1502, 1501, 5, 12, 12, 7, 4, 6, 6, 11, 13, 13, 13, 7, 4, 4, 12, 12, 124, 123, 122, 121, 6, 9, 9, 11, 11, 7, 7, 712, 711, 6, 6, 4, 5, 1, 1, 4, 9, 6, 6, 9, 9, 9, 512, 511, 5, 1, 4, 6, 7, 7, 7, 9, 11, 13, 13, 13, 10, 10, 6, 4, 6, 10, 10, 12, 12, 11, 11, 6, 9, 9, 5, 4, 5, 1, 1, 7, 4, 413, 412, 411, 4, 6, 6, 7, 4, 14, 5, 5, 4, 4, 12, 4, 6, 6, 7, 7, 9, 5, 5, 4, 7, 4, 1, 14, 4, 4, 6, 11, 4, 10, 5, 1, 5, 4, 10, 5, 14, 14, 4, 7, 11, 6, 11, 4, 5, 5, 4, 12 ]), 
      _defineProperty(_freemap, 2, [ 9, 9, 5, 13, 13, 124, 123, 122, 121, 6, 5, 5, 4, 4, 202, 201, 4, 1502, 1501, 4, 4, 7, 1, 1, 7, 7, 7, 5, 4, 202, 201, 4, 4, 6, 1502, 1501, 6, 9, 9, 5, 1, 9, 202, 201, 9, 7, 7, 7, 6, 1502, 1501, 6, 1, 1, 8, 8, 6, 202, 201, 6, 9, 9, 11, 12, 12, 1502, 1501, 12, 12, 124, 123, 122, 121, 8, 8, 413, 412, 411, 5, 5, 10, 10, 5, 11, 8, 8, 1, 1, 10, 10, 8, 8, 8, 11, 11, 10, 10, 11, 11, 11, 1, 4, 14, 14, 13, 5, 6, 612, 611, 12, 12, 4, 413, 412, 411, 5, 6, 6, 14, 12, 6, 4, 13, 13, 6, 11, 11, 11, 4, 4, 10, 5, 6, 5, 8, 7, 7, 5, 6, 10, 1, 4, 7, 4, 6, 5, 5, 13, 6, 14, 14, 712, 711, 5, 5, 8, 14, 12, 7, 7, 13, 13, 13, 9, 9, 13, 4, 7, 712, 711, 7, 7, 1, 14, 14, 512, 511, 812, 811, 4, 5, 6, 8, 4, 512, 511, 4, 6, 4, 6, 4, 4, 6, 6, 4, 4 ]), 
      _defineProperty(_freemap, 3, [ 4, 14, 14, 10, 612, 611, 7, 5, 1, 202, 201, 1, 1, 1502, 1501, 1, 5, 712, 711, 12, 12, 14, 14, 11, 11, 202, 201, 11, 11, 11, 7, 1502, 1501, 7, 7, 1, 124, 123, 122, 121, 13, 13, 4, 4, 202, 201, 4, 4, 6, 6, 9, 9, 1502, 1501, 9, 9, 5, 9, 124, 123, 122, 121, 202, 201, 8, 8, 8, 4, 5, 5, 1502, 1501, 5, 6, 6, 11, 11, 6, 6, 12, 6, 4, 13, 7, 7, 7, 413, 412, 411, 7, 8, 8, 6, 9, 9, 9, 4, 4, 10, 10, 7, 8, 8, 13, 13, 13, 12, 13, 13, 5, 12, 1, 1, 6, 1, 4, 4, 8, 812, 811, 4, 4, 6, 7, 7, 7, 4, 612, 611, 5, 12, 8, 8, 8, 5, 10, 10, 14, 14, 413, 412, 411, 4, 4, 12, 10, 12, 5, 9, 9, 11, 4, 6, 5, 13, 512, 511, 5, 5, 10, 6, 6, 1, 5, 5, 6, 6, 512, 511, 14, 14, 13, 4, 10, 6, 6, 812, 811, 1, 11, 7, 7, 6, 4, 6, 5, 4, 4, 5, 8, 7, 5, 6, 6, 4, 4, 11, 4 ]), 
      _defineProperty(_freemap, 4, [ 4, 1, 9, 14, 11, 11, 10, 10, 4, 202, 201, 4, 1502, 1501, 4, 7, 6, 9, 9, 5, 5, 6, 202, 201, 6, 6, 13, 13, 1502, 1501, 13, 13, 13, 7, 7, 7, 712, 711, 6, 14, 14, 202, 201, 14, 413, 412, 411, 11, 11, 1502, 1501, 11, 11, 4, 4, 12, 812, 811, 202, 201, 7, 7, 1, 1, 7, 7, 1502, 1501, 7, 10, 1, 1, 124, 123, 122, 121, 12, 12, 6, 1, 1, 6, 6, 5, 4, 6, 4, 4, 6, 413, 412, 411, 8, 8, 8, 12, 6, 4, 9, 9, 4, 4, 7, 7, 7, 5, 5, 712, 711, 4, 6, 8, 8, 8, 4, 4, 5, 8, 11, 9, 9, 9, 12, 6, 512, 511, 4, 6, 5, 9, 9, 10, 10, 1, 612, 611, 6, 6, 7, 7, 512, 511, 1, 8, 8, 14, 5, 1, 1, 5, 5, 4, 8, 4, 14, 14, 5, 5, 13, 13, 13, 5, 4, 13, 13, 12, 7, 4, 5, 5, 10, 10, 11, 11, 11, 5, 4, 5, 6, 6, 4, 12, 12, 8, 4, 5, 4, 6, 8, 1, 10, 6, 14, 6 ]), 
      _defineProperty(_freemap, 5, [ 1222, 1221, 902, 901, 1402, 1401, 131, 131, 902, 901, 1212, 1211, 403, 402, 401, 1154, 1153, 1152, 1151, 803, 802, 801, 213, 212, 211, 803, 802, 801, 1302, 1301, 1513, 1512, 1511, 1302, 1301, 1402, 1401, 1252, 1251, 503, 502, 501, 132, 1124, 1123, 1122, 1121, 1144, 1143, 1142, 1141, 213, 212, 211, 1124, 1123, 1122, 1121, 403, 402, 401, 1114, 1113, 1112, 1111, 1513, 1512, 1511, 1114, 1113, 1112, 1111, 1242, 1241, 132, 1002, 1001, 134, 134, 131, 131, 132, 133, 503, 502, 501, 1134, 1133, 1132, 1131, 1222, 1221, 1513, 1512, 1511, 703, 702, 701, 1202, 1201, 131, 603, 602, 601, 503, 502, 501, 1232, 1231, 135, 1002, 1001, 403, 402, 401, 1202, 1201, 703, 702, 701, 133, 1212, 1211, 133, 1102, 1101, 603, 602, 601, 1102, 1101, 132 ]), 
      _freemap),
      wildIds: [ 1, 111, 112, 113, 114 ],
      dogWilds: [ 121, 122, 123, 124 ],
      scatterIds: [ 201, 202, 211, 212, 213 ],
      collectSymbolIds: [ 4, 401, 402, 403, 411, 412, 413 ],
      jackpotIds: [ 311, 312, 313 ],
      shootGameIds: [ 1501, 1502, 1511, 1512, 1513 ],
      kuang: "kuang",
      doubleColKuang: "doubleColKuang",
      speed: 1500,
      reelStopInter: .3,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .4
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 201, 202, 211, 212, 213 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/AlienMonster/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 1501, 1502, 1511, 1512, 1513 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/AlienMonster/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelbgsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/AlienMonster/prefab/help_item_1", "games/AlienMonster/prefab/help_item_2", "games/AlienMonster/prefab/help_item_3", "games/AlienMonster/prefab/help_item_4", "games/AlienMonster/prefab/help_item_5", "games/AlienMonster/prefab/help_item_6" ],
      commEffect: {
        path: "games/AlienMonster/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ]
      },
      normalBgm: "ngbgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  AlienMonster_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6501YvciBK24TO5dcKm9LC", "AlienMonster_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      isFreeOver: function isFreeOver() {
        return !!this._gameInfo && (this._gameInfo.allFreeCnt > 0 && 0 === this._gameInfo.freeCnt);
      },
      isInFreeGame: function isInFreeGame() {
        return this._deskInfo.restFreeCount >= 0 && this._deskInfo.allFreeCount > 0;
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
          };
          cc.vv.NetManager.send(req, true);
          _this._subCallBack = res;
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (this._subCallBack) {
          this._subCallBack(msg);
          this._subCallBack = null;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  AlienMonster_JackpotGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a37936tDBGLLblCYVmgu7R", "AlienMonster_JackpotGame");
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
    var JackpotGameSymbol = {
      None: 0,
      Mini: 1,
      Minor: 2,
      Major: 3,
      Mega: 4,
      Grand: 5,
      Gold: 6
    };
    var animationName = [ "mini", "minor", "major", "grand" ];
    var multIndexs = [ 2, 3, 4, 5, 10, 25 ];
    var prizePoolName = [ "prizePool_Mini", "prizePool_Minor", "prizePool_Major", "prizePool_Grand" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        layout: cc.Node,
        select_board: cc.Node,
        fly_mult: cc.Node,
        prizePool: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _haveOpenReward: null,
        _jackpotNum: null,
        _jackpotGame: null
      },
      startPick: function startPick(jackpotGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this.node.active = true;
                _this.reset();
                _this._jackpotGame = jackpotGame;
                _this._successCallback = success;
                cc.find("LMSlots_PrizePool_1", _this.node).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 0,
                  pauseNum: jackpotGame.jackpotValues[0]
                }, {
                  prizeType: 1,
                  pauseNum: jackpotGame.jackpotValues[1]
                }, {
                  prizeType: 2,
                  pauseNum: jackpotGame.jackpotValues[2]
                }, {
                  prizeType: 3,
                  pauseNum: jackpotGame.jackpotValues[3]
                } ]);
                _this._canSelect = true;
                _this.setAutoPlay();
                var _loop = function _loop(i) {
                  var item = cc.find("item_" + i, _this.layout);
                  var info = jackpotGame.items[i - 1];
                  var spine = cc.find("spine", item).getComponent(sp.Skeleton);
                  var jackpot_spine = cc.find("jackpot_spine", item).getComponent(sp.Skeleton);
                  if (info.isOpen) {
                    _this._haveOpenReward.push(i);
                    var animation = animationName[info.jackpotId - 1];
                    spine.node.active = false;
                    jackpot_spine.node.active = true;
                    jackpot_spine.setAnimation(0, animation + "_di_idle", true);
                    _this._jackpotNum[info.jackpotId - 1]++;
                    var ball = cc.find(animation + "/reward_" + _this._jackpotNum[info.jackpotId - 1] + "/ball", _this.select_board);
                    ball.active = true;
                    ball.getComponent(sp.Skeleton).setAnimation(0, "ball_tx", false);
                    ball.getComponent(sp.Skeleton).addAnimation(0, "ball_" + animation + "_idle", true);
                    if (info.mult > 1) {
                      var mult_node = cc.find("mult_node", item);
                      mult_node.active = true;
                      cc.find("jackpot", mult_node).getComponent("ImgSwitchCmp").setIndex(info.jackpotId - 1);
                      cc.find("mult", mult_node).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(info.mult));
                      var prizePool = cc.find("LMSlots_PrizePool_1/" + prizePoolName[info.jackpotId - 1], _this.node);
                      cc.find("mult", prizePool).active = true;
                      cc.find("mult", prizePool).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(info.mult));
                      cc.find("glow", prizePool).active = true;
                    } else {
                      var jackpot = cc.find("jackpot", item);
                      jackpot.active = true;
                      jackpot.getComponent("ImgSwitchCmp").setIndex(info.jackpotId - 1);
                    }
                  } else {
                    spine.node.active = true;
                    spine.setAnimation(0, "zuanshi_idle", true);
                  }
                  item.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        _this.clickItemfunc(i);

                       case 1:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  })));
                };
                for (var i = 1; i < 13; i++) _loop(i);
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i < 13; i++) -1 == this._haveOpenReward.indexOf(i) && list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        var item = cc.find("item_" + list[randomIdx], this.layout);
        cc.vv.gameData.checkAutoPlay(item, function() {
          self.clickItemfunc(list[randomIdx]);
        });
      },
      clickItemfunc: function clickItemfunc(i) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var item, req, result, newJp, choiceId, newInfo, selectItem, spine, jackpot_spine, animation, selectMultNode, selectJp;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              item = cc.find("item_" + i, _this2.layout);
              item.stopAllActions();
              if (_this2._canSelect) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");

             case 4:
              if (!(-1 !== _this2._haveOpenReward.indexOf(i))) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");

             case 6:
              _this2._canSelect = false;
              Global.SlotsSoundMgr.playEffect("gemopen");
              req = {
                rtype: 3,
                choiceId: i
              };
              _context3.next = 11;
              return cc.vv.gameData.reqSubGame(req);

             case 11:
              result = _context3.sent;
              if (!(200 === result.code)) {
                _context3.next = 32;
                break;
              }
              newJp = result.data.jackpotGame;
              _this2._jackpotGame = newJp;
              choiceId = result.data.choiceId;
              newInfo = newJp.items[choiceId - 1];
              _this2._haveOpenReward.push(choiceId);
              selectItem = cc.find("item_" + choiceId, _this2.layout);
              spine = cc.find("spine", selectItem).getComponent(sp.Skeleton);
              jackpot_spine = cc.find("jackpot_spine", selectItem).getComponent(sp.Skeleton);
              animation = animationName[newInfo.jackpotId - 1];
              spine.setAnimation(0, "zuanshi_clik", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              jackpot_spine.node.active = true;
              jackpot_spine.setAnimation(0, animation + "_di_intro", false);
              jackpot_spine.addAnimation(0, animation + "_di_idle", true);
              if (newInfo.mult > 1) {
                selectMultNode = cc.find("mult_node", selectItem);
                selectMultNode.active = true;
                cc.find("jackpot", selectMultNode).getComponent("ImgSwitchCmp").setIndex(newInfo.jackpotId - 1);
                cc.find("mult", selectMultNode).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(newInfo.mult));
                selectMultNode.scale = 0;
                cc.tween(selectMultNode).delay(.5).call(function() {
                  _this2._jackpotNum[newInfo.jackpotId - 1]++;
                  if (newJp.isEnd) {
                    Global.SlotsSoundMgr.playEffect("jpmatch");
                    for (var j = 0; j < 3; j++) {
                      var _ball = cc.find(animation + "/reward_" + (j + 1) + "/ball", _this2.select_board);
                      _ball.active = true;
                      _ball.getComponent(sp.Skeleton).setAnimation(0, "ball_tx", false);
                      _ball.getComponent(sp.Skeleton).addAnimation(0, "ball_" + animation + "_idle", true);
                    }
                  } else {
                    Global.SlotsSoundMgr.playEffect("jpcount");
                    var ball = cc.find(animation + "/reward_" + _this2._jackpotNum[newInfo.jackpotId - 1] + "/ball", _this2.select_board);
                    ball.active = true;
                    ball.getComponent(sp.Skeleton).setAnimation(0, "ball_tx", false);
                    ball.getComponent(sp.Skeleton).addAnimation(0, "ball_" + animation + "_idle", true);
                  }
                }).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  cc.find(prizePoolName[newInfo.jackpotId - 1] + "/glow", _this2.prizePool).active = true;
                  Global.SlotsSoundMgr.playEffect("jpmulti");
                  var startPos = selectItem.convertToWorldSpaceAR(cc.v2(0, 0));
                  startPos = _this2.node.convertToNodeSpaceAR(startPos);
                  _this2.fly_mult.active = true;
                  _this2.fly_mult.position = startPos;
                  var endPos = cc.find(prizePoolName[newInfo.jackpotId - 1] + "/mult", _this2.prizePool).convertToWorldSpaceAR(cc.v2(0, 0));
                  endPos = _this2.node.convertToNodeSpaceAR(endPos);
                  cc.tween(_this2.fly_mult).to(.5, {
                    position: endPos
                  }).call(function() {
                    _this2.fly_mult.active = false;
                    cc.find(prizePoolName[newInfo.jackpotId - 1] + "/mult", _this2.prizePool).active = true;
                    cc.find(prizePoolName[newInfo.jackpotId - 1] + "/mult", _this2.prizePool).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(newInfo.mult));
                    _this2._canSelect = !newJp.isEnd;
                    _this2._canSelect && _this2.setAutoPlay();
                  }).start();
                }).start();
              } else {
                selectJp = cc.find("jackpot", selectItem);
                selectJp.active = true;
                selectJp.getComponent("ImgSwitchCmp").setIndex(newInfo.jackpotId - 1);
                selectJp.scale = 0;
                cc.tween(selectJp).delay(.5).call(function() {
                  _this2._jackpotNum[newInfo.jackpotId - 1]++;
                  if (newJp.isEnd) {
                    Global.SlotsSoundMgr.playEffect("jpmatch");
                    for (var j = 0; j < 3; j++) {
                      var _ball2 = cc.find(animation + "/reward_" + (j + 1) + "/ball", _this2.select_board);
                      _ball2.active = true;
                      _ball2.getComponent(sp.Skeleton).setAnimation(0, "ball_tx", false);
                      _ball2.getComponent(sp.Skeleton).addAnimation(0, "ball_" + animation + "_idle", true);
                    }
                  } else {
                    Global.SlotsSoundMgr.playEffect("jpcount");
                    var ball = cc.find(animation + "/reward_" + _this2._jackpotNum[newInfo.jackpotId - 1] + "/ball", _this2.select_board);
                    ball.active = true;
                    ball.getComponent(sp.Skeleton).setAnimation(0, "ball_tx", false);
                    ball.getComponent(sp.Skeleton).addAnimation(0, "ball_" + animation + "_idle", true);
                  }
                }).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  _this2._canSelect = !newJp.isEnd;
                  _this2._canSelect && _this2.setAutoPlay();
                }).start();
              }
              if (!newJp.isEnd) {
                _context3.next = 32;
                break;
              }
              _context3.next = 31;
              return cc.vv.gameData.awaitTime(2);

             case 31:
              _this2.endGame(newJp, choiceId);

             case 32:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      endGame: function endGame(jackpotGame, lastChoiceId) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var _loop2, j;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _loop2 = function _loop2(j) {
                var info = jackpotGame.items[j - 1];
                var item = cc.find("item_" + j, _this3.layout);
                var spine = cc.find("spine", item).getComponent(sp.Skeleton);
                var jackpot_spine = cc.find("jackpot_spine", item).getComponent(sp.Skeleton);
                var animation = animationName[info.jackpotId - 1];
                if (!info.isOpen) {
                  spine.setAnimation(0, "zuanshi_clik", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    spine.node.active = false;
                  });
                  jackpot_spine.node.active = true;
                  jackpot_spine.setAnimation(0, animation + "_di_grey_jingzhen", true);
                  cc.tween(item).delay(.3).call(function() {
                    if (info.mult > 1) {
                      var mult_node = cc.find("mult_node", item);
                      mult_node.active = true;
                      cc.find("jackpot", mult_node).getComponent("ImgSwitchCmp").setIndex(info.jackpotId - 1);
                      cc.find("mult", mult_node).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(info.mult));
                      var prizePool = cc.find("LMSlots_PrizePool_1/" + prizePoolName[info.jackpotId - 1], _this3.node);
                      cc.find("mult", prizePool).active = true;
                      cc.find("mult", prizePool).getComponent("ImgSwitchCmp").setIndex(multIndexs.indexOf(info.mult));
                      cc.find("glow", prizePool).active = true;
                    } else {
                      var jackpot = cc.find("jackpot", item);
                      jackpot.active = true;
                      jackpot.getComponent("ImgSwitchCmp").setIndex(info.jackpotId - 1);
                    }
                  }).start();
                }
              };
              for (j = 1; j < 13; j++) _loop2(j);
              _context4.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              _this3._successCallback && _this3._successCallback();

             case 5:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getJackpotGame: function getJackpotGame() {
        return this._jackpotGame;
      },
      reset: function reset() {
        for (var i = 1; i < 13; i++) {
          var item = cc.find("item_" + i, this.layout);
          var spine = cc.find("spine", item).getComponent(sp.Skeleton);
          spine.node.active = true;
          spine.setAnimation(0, "zuanshi_idle", true);
          cc.find("jackpot_spine", item).active = false;
          cc.find("jackpot", item).active = false;
          cc.find("mult_node", item).active = false;
        }
        for (var _i = 0; _i < animationName.length; _i++) {
          var jp = cc.find(animationName[_i], this.select_board);
          for (var j = 0; j < 3; j++) cc.find("reward_" + (j + 1) + "/ball", jp).active = false;
        }
        var _iterator = _createForOfIteratorHelper(cc.find("LMSlots_PrizePool_1", this.node).children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            cc.find("mult", child).active = false;
            cc.find("glow", child).active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._successCallback = null;
        this._canSelect = false;
        this._haveOpenReward = [];
        this._jackpotNum = [ 0, 0, 0, 0 ];
        this._jackpotGame = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  AlienMonster_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e3aasIBCxLi5m9xsYM6RRC", "AlienMonster_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "Betup_unlock", false);
          this._lockBonus = false;
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._lockBonus = true;
          script.setAnimation(0, "Betup_lock", false);
          script.addAnimation(0, "Betup_idle", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  AlienMonster_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0baf6mC4JZN4IHUhq8KHDii", "AlienMonster_Map");
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
    var stepCfg = {
      row: [ {
        include: [ 0, 16 ]
      }, {
        include: [ 1, 15 ]
      }, {
        include: [ 2, 14 ]
      }, {
        include: [ 3, 13 ]
      }, {
        include: [ 4, 12 ]
      }, {
        include: [ 5, 11 ]
      }, {
        include: [ 6, 10 ]
      } ],
      col: [ {
        include: [ 7, 19 ]
      }, {
        include: [ 8, 18 ]
      }, {
        include: [ 9, 17 ]
      } ],
      detail: [ {
        gun: "gun_left",
        x: -25,
        y: 270,
        arrow: "down",
        items: [ 1, 2, 3 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 16
      }, {
        gun: "gun_left",
        x: -25,
        y: 167,
        arrow: "down",
        items: [ 4, 5, 6 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 15
      }, {
        gun: "gun_left",
        x: -25,
        y: 64,
        arrow: "down",
        items: [ 7, 8, 9 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 14
      }, {
        gun: "gun_left",
        x: -25,
        y: -39,
        arrow: "down",
        items: [ 10, 11, 12 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 13
      }, {
        gun: "gun_left",
        x: -25,
        y: -142,
        arrow: "down",
        items: [ 13, 14, 15 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 12
      }, {
        gun: "gun_left",
        x: -25,
        y: -245,
        arrow: "down",
        items: [ 16, 17, 18 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 11
      }, {
        gun: "gun_left",
        x: -25,
        y: -348,
        arrow: "right",
        items: [ 19, 20, 21 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 10
      }, {
        gun: "gun_down",
        x: -90,
        y: -65,
        arrow: "right",
        items: [ 19, 16, 13, 10, 7, 4, 1 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 19
      }, {
        gun: "gun_down",
        x: 18,
        y: -65,
        arrow: "right",
        items: [ 20, 17, 14, 11, 8, 5, 2 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 18
      }, {
        gun: "gun_down",
        x: 125,
        y: -65,
        arrow: "up",
        items: [ 21, 18, 15, 12, 9, 6, 3 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 17
      }, {
        gun: "gun_right",
        x: 45,
        y: -348,
        arrow: "up",
        items: [ 21, 20, 19 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 6
      }, {
        gun: "gun_right",
        x: 45,
        y: -245,
        arrow: "up",
        items: [ 18, 17, 16 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 5
      }, {
        gun: "gun_right",
        x: 45,
        y: -142,
        arrow: "up",
        items: [ 15, 14, 13 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 4
      }, {
        gun: "gun_right",
        x: 45,
        y: -39,
        arrow: "up",
        items: [ 12, 11, 10 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 3
      }, {
        gun: "gun_right",
        x: 45,
        y: 64,
        arrow: "up",
        items: [ 9, 8, 7 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 2
      }, {
        gun: "gun_right",
        x: 45,
        y: 167,
        arrow: "up",
        items: [ 6, 5, 4 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 1
      }, {
        gun: "gun_right",
        x: 45,
        y: 270,
        arrow: "left",
        items: [ 3, 2, 1 ],
        finish: "gun1_shoot",
        idle: "gun1_jingzhen",
        extra: 0
      }, {
        gun: "gun_up",
        x: 125,
        y: 10,
        arrow: "left",
        items: [ 3, 6, 9, 12, 15, 18, 21 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 9
      }, {
        gun: "gun_up",
        x: 18,
        y: 10,
        arrow: "left",
        items: [ 2, 5, 8, 11, 14, 17, 20 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 8
      }, {
        gun: "gun_up",
        x: -90,
        y: 10,
        arrow: "down",
        items: [ 1, 4, 7, 10, 13, 16, 19 ],
        finish: "gun2_shoot",
        idle: "gun2_jingzhen",
        extra: 7
      } ],
      mults: [ 1, 2, 3, 4, 10, 25 ]
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        layout: cc.Node,
        filled: cc.Node,
        finishNum: cc.Node,
        btn_back: cc.Node,
        total_win_tips: cc.Node,
        winCoin: cc.Node,
        mult_root: cc.Node,
        gun_root: cc.Node,
        dialog_node: cc.Node,
        super_alien_bonus: cc.Node,
        choose_your_alien: cc.Node,
        round_tips: cc.Node,
        round: cc.Node,
        _endCallback: null,
        _result: null,
        _steps: [],
        _allItems: [],
        _winCoin: 0,
        _bonusGame: null,
        _mult: 1
      },
      openMap: function openMap(bonusGame) {
        var _this = this;
        this.node.active = true;
        this.reset();
        this._bonusGame = bonusGame;
        this.finishNum.getComponent(cc.Label).string = bonusGame.collectionIdxs.length + "/21";
        for (var i = 0; i < bonusGame.collectionIdxs.length; i++) {
          var idx = bonusGame.collectionIdxs[i];
          var item = bonusGame.collectionItems[i];
          var node = cc.find("item_" + idx, this.layout);
          cc.find("lock_spine", node).active = false;
          cc.find("icon", node).active = true;
          cc.find("icon", node).getComponent("ImgSwitchCmp").setIndex(item.type - 1);
          cc.find("coin", node).active = true;
          cc.find("coin", node).getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
        }
        this.btn_back.active = true;
        this.btn_back.scale = 0;
        cc.tween(this.btn_back).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        this.btn_back.off("click");
        this.btn_back.on("click", function() {
          Global.SlotsSoundMgr.playEffect("button");
          _this.node.active = false;
        });
      },
      startMapGame: function startMapGame(bonusGame, getIndex) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            var i, idx, item, node, getItem, getNode, lock_spine;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.node.active = true;
                _this2.reset();
                _this2._bonusGame = bonusGame;
                _this2._endCallback = success;
                _this2.finishNum.getComponent(cc.Label).string = bonusGame.collectionIdxs.length - 1 + "/21";
                for (i = 0; i < bonusGame.collectionIdxs.length; i++) {
                  idx = bonusGame.collectionIdxs[i];
                  item = bonusGame.collectionItems[i];
                  node = cc.find("item_" + idx, _this2.layout);
                  if (idx !== getIndex) {
                    cc.find("lock_spine", node).active = false;
                    cc.find("icon", node).active = true;
                    cc.find("icon", node).getComponent("ImgSwitchCmp").setIndex(item.type - 1);
                    cc.find("coin", node).active = true;
                    cc.find("coin", node).getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
                  }
                }
                if (!(getIndex > 0)) {
                  _context.next = 17;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("fillmap");
                getItem = bonusGame.collectionItems[bonusGame.collectionIdxs.indexOf(getIndex)];
                getNode = cc.find("item_" + getIndex, _this2.layout);
                cc.find("icon", getNode).active = true;
                cc.find("icon", getNode).getComponent("ImgSwitchCmp").setIndex(getItem.type - 1);
                lock_spine = cc.find("lock_spine", getNode).getComponent(sp.Skeleton);
                lock_spine.setAnimation(0, "men_open", false);
                lock_spine.setCompleteListener(function() {
                  lock_spine.setCompleteListener(null);
                  lock_spine.node.active = false;
                  cc.find("coin", getNode).active = true;
                  cc.find("coin", getNode).getComponent(cc.Label).string = Global.formatNumShort(getItem.coin, 0);
                });
                _context.next = 17;
                return cc.vv.gameData.awaitTime(1);

               case 17:
                _this2.finishNum.getComponent(cc.Label).string = bonusGame.collectionIdxs.length + "/21";
                cc.tween(_this2.finishNum).to(.3, {
                  scale: 1.1
                }).to(.3, {
                  scale: 1
                }).start();
                _context.next = 21;
                return cc.vv.gameData.awaitTime(1);

               case 21:
                if (!(21 === bonusGame.collectionIdxs.length)) {
                  _context.next = 27;
                  break;
                }
                _context.next = 24;
                return _this2.collectCoin();

               case 24:
                _this2._endCallback && _this2._endCallback();
                _context.next = 34;
                break;

               case 27:
                _this2.btn_back.active = true;
                _this2.btn_back.scale = 0;
                cc.tween(_this2.btn_back).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 32;
                return cc.vv.gameData.awaitTime(.7);

               case 32:
                _this2.node.active = false;
                _this2._endCallback && _this2._endCallback();

               case 34:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      collectCoin: function collectCoin() {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var i, result, mult, _iterator, _step, _loop, _iterator2, _step2, allItem;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this3.filled.active = false;
                _this3.total_win_tips.active = true;
                _this3.total_win_tips.scale = 0;
                _this3.winCoin.getComponent(cc.Label).string = "";
                cc.tween(_this3.total_win_tips).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context2.next = 7;
                return cc.vv.gameData.awaitTime(.5);

               case 7:
                _context2.next = 9;
                return _this3.popSuperAlienBonus();

               case 9:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("mapbgm");
                _context2.next = 13;
                return _this3.showMult();

               case 13:
                _context2.next = 15;
                return _this3.popChooseYourAlien();

               case 15:
                i = 0;

               case 16:
                if (!(i < _this3._result.length)) {
                  _context2.next = 43;
                  break;
                }
                result = _this3._result[i];
                _this3._mult = stepCfg.mults[i];
                _context2.next = 21;
                return _this3.showRound(i + 1);

               case 21:
                mult = cc.find("row_" + (i + 1), _this3.mult_root);
                cc.find("left/mult", mult).getComponent(sp.Skeleton).setAnimation(0, "beishu_jihuo", true);
                cc.find("right/mult", mult).getComponent(sp.Skeleton).setAnimation(0, "beishu_jihuo", true);
                if (1 !== _this3._mult) {
                  Global.SlotsSoundMgr.playEffect("creditsdouble");
                  _iterator = _createForOfIteratorHelper(_this3._allItems);
                  try {
                    _loop = function _loop() {
                      var allItem = _step.value;
                      var info = _this3._bonusGame.collectionItems[_this3._bonusGame.collectionIdxs.indexOf(allItem)];
                      var node = cc.find("item_" + allItem, _this3.layout);
                      var up_or_die = cc.find("up_or_die", node).getComponent(sp.Skeleton);
                      up_or_die.node.active = true;
                      up_or_die.setAnimation(0, "alien_up", false);
                      up_or_die.setCompleteListener(function() {
                        up_or_die.setCompleteListener(null);
                        up_or_die.node.active = false;
                      });
                      cc.find("coin", node).getComponent(cc.Label).string = Global.formatNumShort(info.coin * _this3._mult, 0);
                    };
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
                _context2.next = 27;
                return cc.vv.gameData.awaitTime(1);

               case 27:
                if (!(i < _this3._result.length - 1)) {
                  _context2.next = 32;
                  break;
                }
                _context2.next = 30;
                return _this3.showGun(result.cols, result.rows);

               case 30:
                _context2.next = 34;
                break;

               case 32:
                _iterator2 = _createForOfIteratorHelper(_this3._allItems);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    allItem = _step2.value;
                    _this3._collectCoin(cc.find("item_" + allItem, _this3.layout), allItem);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

               case 34:
                cc.find("left/mult", mult).getComponent(sp.Skeleton).setAnimation(0, "beishu_grey", false);
                cc.find("right/mult", mult).getComponent(sp.Skeleton).setAnimation(0, "beishu_grey", false);
                if (!(i === _this3._result.length - 1)) {
                  _context2.next = 40;
                  break;
                }
                _context2.next = 39;
                return cc.vv.gameData.awaitTime(1);

               case 39:
                success();

               case 40:
                i++;
                _context2.next = 16;
                break;

               case 43:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      popSuperAlienBonus: function popSuperAlienBonus() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var self, func, btn_start;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("mapin");
                      _this4.dialog_node.active = true;
                      _this4.super_alien_bonus.active = true;
                      _this4.super_alien_bonus.scale = 0;
                      cc.tween(_this4.super_alien_bonus).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context3.next = 7;
                      return cc.vv.gameData.awaitTime(.5);

                     case 7:
                      self = _this4;
                      func = function func() {
                        btn_start.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(self.super_alien_bonus).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self.super_alien_bonus.active = false;
                          self.dialog_node.active = false;
                          success();
                        }).start();
                      };
                      btn_start = cc.find("btn_start", _this4.super_alien_bonus);
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", function() {
                        btn_start.stopAllActions();
                        func();
                      });

                     case 12:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      popChooseYourAlien: function popChooseYourAlien() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var func, randomIdx, _loop2, i;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("choice");
                      _this5.dialog_node.active = true;
                      _this5.choose_your_alien.active = true;
                      _this5.choose_your_alien.scale = 0;
                      cc.tween(_this5.choose_your_alien).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context7.next = 7;
                      return cc.vv.gameData.awaitTime(.5);

                     case 7:
                      func = function() {
                        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(i) {
                          var j, req, result, _j;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) switch (_context5.prev = _context5.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("choosealien");
                              for (j = 0; j < 3; j++) {
                                cc.find("btn_" + (j + 1), _this5.choose_your_alien).off("click");
                                cc.find("btn_" + (j + 1), _this5.choose_your_alien).stopAllActions();
                              }
                              req = {
                                rtype: 2,
                                choiceId: i + 1
                              };
                              _context5.next = 5;
                              return cc.vv.gameData.reqSubGame(req);

                             case 5:
                              result = _context5.sent;
                              if (!(200 === result.code)) {
                                _context5.next = 12;
                                break;
                              }
                              _this5._result = result.data.result;
                              for (_j = 0; _j < 3; _j++) _j !== result.data.choiceId - 1 && cc.find("btn_" + (_j + 1) + "/icon", _this5.choose_your_alien).getComponent(sp.Skeleton).setAnimation(0, "grey", false);
                              _context5.next = 11;
                              return cc.vv.gameData.awaitTime(1);

                             case 11:
                              cc.tween(_this5.choose_your_alien).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                _this5.choose_your_alien.active = false;
                                _this5.dialog_node.active = false;
                                success();
                              }).start();

                             case 12:
                             case "end":
                              return _context5.stop();
                            }
                          }, _callee5);
                        }));
                        return function func(_x5) {
                          return _ref5.apply(this, arguments);
                        };
                      }();
                      randomIdx = Global.random(0, 2);
                      cc.vv.gameData.checkAutoPlay(cc.find("btn_" + (randomIdx + 1), _this5.choose_your_alien), function() {
                        func(randomIdx);
                      });
                      _loop2 = function _loop2(i) {
                        var btn = cc.find("btn_" + (i + 1), _this5.choose_your_alien);
                        var icon = cc.find("icon", btn);
                        icon.getComponent(sp.Skeleton).setAnimation(0, "jingzhen", true);
                        btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                             case 0:
                              func(i);

                             case 1:
                             case "end":
                              return _context6.stop();
                            }
                          }, _callee6);
                        })));
                      };
                      for (i = 0; i < 3; i++) _loop2(i);

                     case 12:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showMult: function showMult() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
                  var _iterator3, _step3, child, i, row, left, right, _i, _row, _left, _right;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _this6.mult_root.active = true;
                      _iterator3 = _createForOfIteratorHelper(_this6.mult_root.children);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          child = _step3.value;
                          child.active = false;
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      i = 0;

                     case 4:
                      if (!(i < _this6.mult_root.childrenCount)) {
                        _context9.next = 20;
                        break;
                      }
                      row = cc.find("row_" + (i + 1), _this6.mult_root);
                      cc.find("left/mult", row).active = false;
                      cc.find("right/mult", row).active = false;
                      _context9.next = 10;
                      return cc.vv.gameData.awaitTime(.2);

                     case 10:
                      row.active = true;
                      left = cc.find("left", row);
                      left.getComponent(sp.Skeleton).setAnimation(0, "di_intro", false);
                      left.getComponent(sp.Skeleton).addAnimation(0, "di_idle", true);
                      right = cc.find("right", row);
                      right.getComponent(sp.Skeleton).setAnimation(0, "di_intro", false);
                      right.getComponent(sp.Skeleton).addAnimation(0, "di_idle", true);

                     case 17:
                      i++;
                      _context9.next = 4;
                      break;

                     case 20:
                      _context9.next = 22;
                      return cc.vv.gameData.awaitTime(.2);

                     case 22:
                      _i = 0;

                     case 23:
                      if (!(_i < _this6.mult_root.childrenCount)) {
                        _context9.next = 38;
                        break;
                      }
                      _row = cc.find("row_" + (_i + 1), _this6.mult_root);
                      _context9.next = 27;
                      return cc.vv.gameData.awaitTime(.2);

                     case 27:
                      _left = cc.find("left/mult", _row);
                      _left.active = true;
                      _left.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
                      _left.getComponent(sp.Skeleton).addAnimation(0, "beishu_jingzhen", true);
                      _right = cc.find("right/mult", _row);
                      _right.active = true;
                      _right.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
                      _right.getComponent(sp.Skeleton).addAnimation(0, "beishu_jingzhen", true);

                     case 35:
                      _i++;
                      _context9.next = 23;
                      break;

                     case 38:
                      _context9.next = 40;
                      return cc.vv.gameData.awaitTime(.2);

                     case 40:
                      success();

                     case 41:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x6) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      showRound: function showRound(round) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function(success) {
                if (round <= 5) {
                  _this7.round_tips.active = true;
                  _this7.round_tips.scale = 0;
                  _this7.round.getComponent("ImgSwitchCmp").setIndex(round - 1);
                  cc.tween(_this7.round_tips).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).delay(1).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    success();
                  }).start();
                } else success();
              }));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      showGun: function showGun(cols, rows) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var step_1, step_2;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              step_1 = -1;
              step_2 = -1;
              if (cols.length > 0) {
                step_1 = _this8.getStep(cols[0], 0);
                cols.length > 1 ? step_2 = _this8.getStep(cols[1], 0) : rows.length > 0 && (step_2 = _this8.getStep(0, rows[0]));
              } else {
                step_1 = _this8.getStep(0, rows[0]);
                rows.length > 1 && (step_2 = _this8.getStep(0, rows[1]));
              }
              if (!(-1 !== step_1)) {
                _context13.next = 5;
                break;
              }
              return _context13.delegateYield(regeneratorRuntime.mark(function _callee12() {
                var index_1, curStep_1, i, curStep_2, index_2, _i2, _i3, items_1, _loop3, _i4, items_2, _loop4, _i5;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                   case 0:
                    index_1 = _this8._steps.indexOf(step_1);
                    curStep_1 = -1;
                    for (i = 0; i < 10; i++) {
                      index_1--;
                      index_1 < 0 && (index_1 = _this8._steps.length - 1);
                    }
                    curStep_1 = _this8._steps[index_1];
                    curStep_2 = -1;
                    index_2 = -1;
                    if (-1 !== step_2) {
                      index_2 = _this8._steps.indexOf(step_2);
                      for (_i2 = 0; _i2 < 10; _i2++) {
                        index_2--;
                        index_2 < 0 && (index_2 = _this8._steps.length - 1);
                      }
                      curStep_2 = _this8._steps[index_2];
                    }
                    Global.SlotsSoundMgr.playEffect("weaponmove");
                    _this8.setGun(1, curStep_1);
                    -1 !== curStep_2 ? _this8.setGun(2, curStep_2) : cc.find("gun_2", _this8.gun_root).active = false;
                    _context12.next = 12;
                    return cc.vv.gameData.awaitTime(1);

                   case 12:
                    _i3 = 0;

                   case 13:
                    if (!(_i3 < 10)) {
                      _context12.next = 30;
                      break;
                    }
                    index_1++;
                    index_1 >= _this8._steps.length && (index_1 = 0);
                    curStep_1 = _this8._steps[index_1];
                    _this8.setGun(1, curStep_1, 9 === _i3);
                    Global.SlotsSoundMgr.playEffect("weaponmove");
                    if (-1 !== curStep_2 && -1 !== index_2) {
                      index_2++;
                      index_2 >= _this8._steps.length && (index_2 = 0);
                      curStep_2 = _this8._steps[index_2];
                      _this8.setGun(2, curStep_2, 9 === _i3);
                    }
                    if (!(9 === _i3)) {
                      _context12.next = 25;
                      break;
                    }
                    _context12.next = 23;
                    return cc.vv.gameData.awaitTime(.3);

                   case 23:
                    _context12.next = 27;
                    break;

                   case 25:
                    _context12.next = 27;
                    return cc.vv.gameData.awaitTime(1);

                   case 27:
                    _i3++;
                    _context12.next = 13;
                    break;

                   case 30:
                    items_1 = stepCfg.detail[step_1].items;
                    _this8._steps.splice(_this8._steps.indexOf(step_1), 1);
                    _this8._steps.splice(_this8._steps.indexOf(stepCfg.detail[step_1].extra), 1);
                    _loop3 = function _loop3(_i4) {
                      var item = cc.find("item_" + items_1[_i4], _this8.layout);
                      cc.tween(item).delay(.1 * _i4).call(function() {
                        _this8._collectCoin(item, items_1[_i4]);
                      }).start();
                    };
                    for (_i4 = 0; _i4 < items_1.length; _i4++) _loop3(_i4);
                    items_2 = null;
                    if (-1 !== step_2) {
                      items_2 = stepCfg.detail[step_2].items;
                      _this8._steps.splice(_this8._steps.indexOf(step_2), 1);
                      _this8._steps.splice(_this8._steps.indexOf(stepCfg.detail[step_2].extra), 1);
                      _loop4 = function _loop4(_i5) {
                        var item = cc.find("item_" + items_2[_i5], _this8.layout);
                        cc.tween(item).delay(.1 * _i5).call(function() {
                          _this8._collectCoin(item, items_2[_i5]);
                        }).start();
                      };
                      for (_i5 = 0; _i5 < items_2.length; _i5++) _loop4(_i5);
                    }
                    _context12.next = 39;
                    return cc.vv.gameData.awaitTime(1.5);

                   case 39:
                   case "end":
                    return _context12.stop();
                  }
                }, _callee12);
              })(), "t0", 5);

             case 5:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      _collectCoin: function _collectCoin(item, index) {
        var _this9 = this;
        if (-1 !== this._allItems.indexOf(index)) {
          this._allItems.splice(this._allItems.indexOf(index), 1);
          var up_or_die = cc.find("up_or_die", item).getComponent(sp.Skeleton);
          up_or_die.node.active = true;
          up_or_die.setAnimation(0, "alien_die", false);
          up_or_die.setCompleteListener(function() {
            up_or_die.setCompleteListener(null);
            up_or_die.node.active = false;
          });
          var grey = cc.find("grey", item);
          grey.active = true;
          grey.getComponent("ImgSwitchCmp").setIndex(cc.find("icon", item).getComponent("ImgSwitchCmp").getIndex());
          var copy_coin = cc.instantiate(cc.find("coin", item));
          cc.find("coin", item).active = false;
          copy_coin.parent = this.total_win_tips;
          var position = cc.find("coin", item).convertToWorldSpaceAR(cc.v2(0, 0));
          position = this.total_win_tips.convertToNodeSpaceAR(position);
          copy_coin.position = position;
          cc.tween(copy_coin).to(.5, {
            position: this.winCoin.position
          }).call(function() {
            var info = _this9._bonusGame.collectionItems[_this9._bonusGame.collectionIdxs.indexOf(index)];
            _this9._winCoin += info.coin * _this9._mult;
            _this9.winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(_this9._winCoin);
          }).removeSelf().start();
        }
      },
      setGun: function setGun(gunIndex, step, isFinish) {
        this.gun_root.active = true;
        var gun = cc.find("gun_" + gunIndex, this.gun_root);
        gun.active = true;
        var cfg = stepCfg.detail[step];
        cc.log(step);
        cc.log(cfg);
        var _iterator4 = _createForOfIteratorHelper(gun.children), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var child = _step4.value;
            if (child.name === cfg.gun) {
              child.active = true;
              child.position = cc.v2(cfg.x, cfg.y);
              var _iterator5 = _createForOfIteratorHelper(child.children), _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  var child1 = _step5.value;
                  child1.active = child1.name === cfg.arrow;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              if (isFinish) {
                Global.SlotsSoundMgr.playEffect("mapshoot");
                child.getComponent(sp.Skeleton).setAnimation(0, cfg.finish, false);
                child.getComponent(sp.Skeleton).addAnimation(0, cfg.idle, true);
              }
            } else child.active = false;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      getStep: function getStep(col, row) {
        if (col > 0) {
          var cfg = stepCfg.col[col - 1];
          var _iterator6 = _createForOfIteratorHelper(cfg.include), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              var step = _step6.value;
              if (-1 !== this._steps.indexOf(step)) return step;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        } else {
          var _cfg = stepCfg.row[row - 1];
          var _iterator7 = _createForOfIteratorHelper(_cfg.include), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              var _step8 = _step7.value;
              if (-1 !== this._steps.indexOf(_step8)) return _step8;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      },
      reset: function reset() {
        var _iterator8 = _createForOfIteratorHelper(this.layout.children), _step9;
        try {
          for (_iterator8.s(); !(_step9 = _iterator8.n()).done; ) {
            var child = _step9.value;
            var lock_spine = cc.find("lock_spine", child).getComponent(sp.Skeleton);
            lock_spine.node.active = true;
            lock_spine.setAnimation(0, "men_jingzhen", true);
            cc.find("icon", child).active = false;
            cc.find("grey", child).active = false;
            cc.find("coin", child).active = false;
            cc.find("up_or_die", child).active = false;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this.btn_back.active = false;
        this.total_win_tips.active = false;
        this.mult_root.active = false;
        this.gun_root.active = false;
        this.dialog_node.active = false;
        this.super_alien_bonus.active = false;
        this.choose_your_alien.active = false;
        this.round_tips.active = false;
        this._endCallback = null;
        this._result = null;
        this._bonusGame = null;
        this._steps = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
        this._allItems = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];
        this._winCoin = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  AlienMonster_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c702bEww4FC25zN0HCE26Pg", "AlienMonster_Reel");
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
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.isInFreeGame() || this.StartRecycleSymbol();
      },
      changeAllSymbolToWild: function changeAllSymbolToWild() {
        var _iterator = _createForOfIteratorHelper(this._symbols), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var symbol = _step.value;
            -1 === this._cfg.wildIds.indexOf(symbol.GetShowId()) && -1 === this._cfg.scatterIds.indexOf(symbol.GetShowId()) && -1 === this._cfg.shootGameIds.indexOf(symbol.GetShowId()) && -1 === this._cfg.dogWilds.indexOf(symbol.GetShowId()) && symbol.changeToWild();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var info = _step2.value;
                var node = cc.find(info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } else {
          var _node = cc.find(name, this.node);
          if (_node) {
            _node.active = bShow;
            var spine = _node.getComponent(sp.Skeleton);
            cc.vv.gameData.isInFreeGame() ? spine.setAnimation(0, "tingpai_" + (7 - cc.vv.gameData.getGameInfo().minRow + 5), true) : spine.setAnimation(0, "tingpai_" + cc.vv.gameData.getGameInfo().resultCards.length / cc.vv.gameData.getGameCfg().col, true);
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        if (0 === this._reelIdx) {
          var top = cc.find("reels_frame/top", this.node.parent.parent);
          top && objs.push(top);
          var collect_node = cc.find("collect_node", this.node.parent.parent);
          collect_node && objs.push(collect_node);
        }
        return objs;
      },
      OnReelHeigtChange: function OnReelHeigtChange(nAddHeight) {
        if (0 == this._reelIdx) {
          var frame = cc.find("reels_frame/frame", this.node.parent.parent);
          frame.height += nAddHeight;
          var line_1 = cc.find("reels_frame/line_1", this.node.parent.parent);
          var line_2 = cc.find("reels_frame/line_2", this.node.parent.parent);
          var line_3 = cc.find("reels_frame/line_3", this.node.parent.parent);
          var line_4 = cc.find("reels_frame/line_4", this.node.parent.parent);
          line_1.height += nAddHeight;
          line_2.height += nAddHeight;
          line_3.height += nAddHeight;
          line_4.height += nAddHeight;
        }
      },
      haveDogAndHide: function haveDogAndHide() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) if ((121 === this._originResult[i].sid || 122 === this._originResult[i].sid || 123 === this._originResult[i].sid || 124 === this._originResult[i].sid) && i > 4) return true;
        return false;
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (0 === this._reelIdx) {
          for (var i = 0; i < 4; i++) {
            var line = cc.find("reesl_frame/line_" + (i + 1), this.node.parent.parent);
            line && objs.push(line);
          }
          var top_ani = cc.find("top_ani", this.node.parent.parent);
          top_ani && objs.push(top_ani);
        }
        return objs;
      },
      getSymbolNum: function getSymbolNum() {
        return this._nCount;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (this._cfg.jackpotIds.includes(item.GetShowId())) {
            item.playStopAnimation();
            Global.SlotsSoundMgr.playEffect("reelsctr");
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  AlienMonster_SelectFreeTimes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1519QZzetNiJeFhQDHXRvj", "AlienMonster_SelectFreeTimes");
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
    cc.Class({
      extends: cc.Component,
      properties: {
        items: [ cc.Node ],
        _endCallback: null,
        _canSelect: false,
        _multIndex: -1,
        _timesIndex: -1,
        _freeTime: 0
      },
      startSelectFreeTimes: function startSelectFreeTimes() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                _this.node.active = true;
                _this.reset();
                _this._canSelect = true;
                _this._endCallback = success;
                _this.setAutoPlay();
                var _loop = function _loop(i) {
                  var item = _this.items[i];
                  item.off(cc.Node.EventType.TOUCH_END);
                  item.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        _this.clickItemfunc(i);

                       case 1:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  })));
                };
                for (var i = 0; i < _this.items.length; i++) _loop(i);
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 0; i < this.items.length; i++) i !== this._multIndex - 1 && list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(this.items[list[randomIdx]], function() {
          self.clickItemfunc(list[randomIdx]);
        });
      },
      clickItemfunc: function clickItemfunc(i) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var timeOptions, req, result, selectItem, option, spine, bgSpine, mult, times, timesIndex, _loop2, j;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.items[i].stopAllActions();
              if (_this2._canSelect) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");

             case 3:
              if (!(i === _this2._multIndex - 1)) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");

             case 5:
              _this2._canSelect = false;
              Global.SlotsSoundMgr.playEffect("gemopen");
              timeOptions = [ 8, 10, 12, 15, 16, 20, 24, 30 ];
              req = {
                rtype: 4,
                choiceId: i + 1
              };
              _context3.next = 11;
              return cc.vv.gameData.reqSubGame(req);

             case 11:
              result = _context3.sent;
              if (!(200 === result.code)) {
                _context3.next = 46;
                break;
              }
              selectItem = _this2.items[result.data.choiceId - 1];
              option = result.data.freeOptionGame.items[result.data.choiceId - 1];
              spine = cc.find("spine", selectItem).getComponent(sp.Skeleton);
              spine.setAnimation(0, "zuanshi_click", false);
              bgSpine = cc.find("bg", selectItem).getComponent(sp.Skeleton);
              bgSpine.node.active = true;
              bgSpine.setAnimation(0, "di_intro", false);
              bgSpine.addAnimation(0, "di_idle", true);
              _context3.next = 23;
              return cc.vv.gameData.awaitTime(.3);

             case 23:
              if (!option.mult) {
                _context3.next = 31;
                break;
              }
              _this2._multIndex = result.data.choiceId;
              mult = cc.find("mult", selectItem);
              mult.active = true;
              _this2._canSelect = true;
              _this2.setAutoPlay();
              _context3.next = 46;
              break;

             case 31:
              _this2._timesIndex = result.data.choiceId;
              times = cc.find("times", selectItem);
              times.active = true;
              _this2._freeTime = option.freeCnt;
              timesIndex = timeOptions.indexOf(option.freeCnt);
              times.getComponent("ImgSwitchCmp").setIndex(timesIndex);
              _context3.next = 39;
              return cc.vv.gameData.awaitTime(1);

             case 39:
              _loop2 = function _loop2(j) {
                if (!result.data.freeOptionGame.items[j].isOpen) {
                  var notSelectItem = _this2.items[j];
                  var not_spine = cc.find("spine", notSelectItem).getComponent(sp.Skeleton);
                  not_spine.setAnimation(0, "zuanshi_click", false);
                  var notBgSpine = cc.find("bg", notSelectItem).getComponent(sp.Skeleton);
                  notBgSpine.node.active = true;
                  notBgSpine.setAnimation(0, "di_grey", false);
                  notBgSpine.addAnimation(0, "di_grey_jingzhen", true);
                  cc.tween(notSelectItem).delay(.3).call(function() {
                    var op = result.data.freeOptionGame.items[j];
                    if (op.mult) cc.find("mult", notSelectItem).active = true; else {
                      cc.find("times", notSelectItem).active = true;
                      cc.find("times", notSelectItem).getComponent("ImgSwitchCmp").setIndex(timeOptions.indexOf(op.freeCnt));
                    }
                  }).start();
                }
              };
              for (j = 0; j < _this2.items.length; j++) _loop2(j);
              _context3.next = 43;
              return cc.vv.gameData.awaitTime(1);

             case 43:
              cc.vv.gameData.SetTotalFree(_this2._freeTime);
              cc.vv.gameData.SetFreeTime(_this2._freeTime);
              _this2._endCallback && _this2._endCallback();

             case 46:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      getFreeTime: function getFreeTime() {
        return this._freeTime;
      },
      reset: function reset() {
        var _iterator = _createForOfIteratorHelper(this.items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            cc.find("spine", item).getComponent(sp.Skeleton).setAnimation(0, "zuanshi_idle", true);
            cc.find("bg", item).active = false;
            cc.find("times", item).active = false;
            cc.find("mult", item).active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._multIndex = -1;
        this._timesIndex = -1;
        this._canSelect = false;
        this._endCallback = null;
        this._freeTime = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  AlienMonster_ShootGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e97ccAfAtNBZOPRyAfJAkJ", "AlienMonster_ShootGame");
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
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        pick_bg: cc.Node,
        box_layout: cc.Node,
        wave_tips: cc.Node,
        wave: cc.Node,
        destroy_all_tips: cc.Node,
        gun: cc.Node,
        gun_hurt: cc.Node,
        dialog_node: cc.Node,
        alien_are_comming: cc.Node,
        extra_prize: cc.Node,
        result_node: cc.Node,
        fail_node: cc.Node,
        alien_close: cc.Node,
        _endCallback: null,
        _haveOpenBox: [],
        _canSelect: false,
        _alienBusterGame: null,
        _winCoin: 0
      },
      startShootGame: function startShootGame(alienBusterGame) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this.node.active = true;
                _this.reset();
                _this._alienBusterGame = alienBusterGame;
                _this._endCallback = success;
                _context.next = 6;
                return _this.popAlienAreComming();

               case 6:
                _context.next = 8;
                return cc.vv.gameData.awaitTime(1);

               case 8:
                Global.SlotsSoundMgr.playBgm("bgbgm");
                _this.registerClickItem();
                _this.showAlien(alienBusterGame);

               case 11:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showAlien: function showAlien(alienBusterGame) {
        this.clearAlien();
        Global.SlotsSoundMgr.playEffect("alienshow");
        alienBusterGame.aliens[4].length > 0 && this.popAlienClose();
        for (var i = 0; i < alienBusterGame.aliens.length; i++) {
          var aliens = alienBusterGame.aliens[i];
          for (var j = 0; j < aliens.length; j++) {
            var alien = aliens[j];
            var node = cc.instantiate(cc.vv.gameData.GetPrefabByName("alien"));
            node.parent = cc.find("line_" + (i + 1) + "/position_" + (j + 1), this.bg);
            for (var k = 0; k < 7; k++) cc.find("alien_" + (k + 1), node).active = alien.type === k + 1;
            var spine = cc.find("alien_" + alien.type, node).getComponent(sp.Skeleton);
            0 === i ? function() {
              spine.setAnimation(0, "intro", false);
              var alien_intro = cc.find("alien_intro", node);
              alien_intro.active = true;
              var alien_intro_spine = alien_intro.getComponent(sp.Skeleton);
              alien_intro_spine.setAnimation(0, "Alien" + alien.type + "_intro", false);
              alien_intro_spine.setCompleteListener(function() {
                alien_intro_spine.setCompleteListener(null);
                alien_intro.active = false;
              });
            }() : spine.setAnimation(0, "intro2", false);
            spine.addAnimation(0, "idle", true);
          }
        }
        for (var _i = 0; _i < 16; _i++) {
          var item = cc.find("item_" + (_i + 1), this.box_layout);
          var info = alienBusterGame.items[_i];
          var skin = "gun" + info.type;
          info.mult > 1 && (skin += "_" + info.mult + "x");
          if (info.isOpen) {
            this._haveOpenBox.push(_i);
            cc.find("spine", item).getComponent(sp.Skeleton).setSkin(skin);
            cc.find("spine", item).getComponent(sp.Skeleton).setAnimation(0, "result_jingzhen", true);
          } else cc.find("spine", item).getComponent(sp.Skeleton).setAnimation(0, "box_idle", true);
        }
        if (alienBusterGame.round > 10) {
          this.destroy_all_tips.active = true;
          this.wave_tips.active = false;
        } else {
          this.wave_tips.active = true;
          this.wave.getComponent(cc.Label).string = alienBusterGame.round + "/10";
        }
        this._canSelect = true;
        this.setAutoPlay();
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 0; i < 16; i++) -1 == this._haveOpenBox.indexOf(i) && list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        var item = cc.find("item_" + (list[randomIdx] + 1), this.box_layout);
        cc.vv.gameData.checkAutoPlay(item, function() {
          self.clickItemfunc(list[randomIdx]);
        });
      },
      clickItemfunc: function clickItemfunc(i) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var item, req, result, choiceId, killAliens, _i2, _item, choiceItem, choiceItemSpine, gunInfo, skin, gunSpine, _iterator, _step, _loop, _loop2, j, leftAliens, _iterator2, _step2, alien;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              item = cc.find("item_" + (i + 1), _this2.box_layout);
              item.stopAllActions();
              if (!(-1 !== _this2._haveOpenBox.indexOf(i))) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");

             case 4:
              if (_this2._canSelect) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");

             case 6:
              Global.SlotsSoundMgr.playEffect("boxopen");
              _this2._canSelect = false;
              req = {
                rtype: 5,
                choiceId: i + 1
              };
              _context3.next = 11;
              return cc.vv.gameData.reqSubGame(req);

             case 11:
              result = _context3.sent;
              if (!(200 === result.code)) {
                _context3.next = 91;
                break;
              }
              _this2.pick_bg.active = false;
              choiceId = result.data.choiceId;
              killAliens = result.data.killAliens;
              _this2._haveOpenBox.push(choiceId - 1);
              _this2._alienBusterGame = result.data.alienBusterGame;
              for (_i2 = 0; _i2 < 16; _i2++) {
                _item = cc.find("item_" + (_i2 + 1), _this2.box_layout);
                -1 === _this2._haveOpenBox.indexOf(_i2) && _i2 + 1 !== choiceId && cc.find("spine", _item).getComponent(sp.Skeleton).setAnimation(0, "box_jingzhen", true);
              }
              choiceItem = cc.find("item_" + choiceId, _this2.box_layout);
              choiceItemSpine = cc.find("spine", choiceItem).getComponent(sp.Skeleton);
              gunInfo = _this2._alienBusterGame.items[choiceId - 1];
              skin = "gun" + gunInfo.type;
              gunInfo.mult > 1 && (skin += "_" + gunInfo.mult + "x");
              choiceItemSpine.setSkin(skin);
              choiceItemSpine.setAnimation(0, "box_open", false);
              choiceItemSpine.addAnimation(0, "result_jingzhen", true);
              _context3.next = 29;
              return cc.vv.gameData.awaitTime(1);

             case 29:
              _this2.gun.active = true;
              gunSpine = _this2.gun.getComponent(sp.Skeleton);
              gunSpine.setAnimation(0, "gun" + gunInfo.type, false);
              gunSpine.setCompleteListener(function() {
                gunSpine.setCompleteListener(null);
                _this2.gun.active = false;
              });
              if (!(4 === gunInfo.type)) {
                _context3.next = 46;
                break;
              }
              _context3.next = 36;
              return cc.vv.gameData.awaitTime(.5);

             case 36:
              Global.SlotsSoundMgr.playEffect("weapon" + gunInfo.type);
              _this2.gun_hurt.active = true;
              _this2.gun_hurt.getComponent(sp.Skeleton).setAnimation(0, "gun4", false);
              _this2.gun_hurt.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this2.gun_hurt.getComponent(sp.Skeleton).setCompleteListener(null);
                _this2.gun_hurt.active = false;
              });
              _context3.next = 42;
              return cc.vv.gameData.awaitTime(1);

             case 42:
              _iterator = _createForOfIteratorHelper(killAliens);
              try {
                _loop = function _loop() {
                  var killAlien = _step.value;
                  var node = _this2.getAlien(killAlien.lineNo, killAlien.type);
                  var alien = cc.find("alien_" + killAlien.type, node);
                  alien.getComponent(sp.Skeleton).setAnimation(0, "die", false);
                  var coin = cc.find("coin", alien);
                  coin.active = true;
                  coin.getComponent(cc.Label).string = Global.formatNumShort(killAlien.coin, 0);
                  var alien_die = cc.find("alien_die", node);
                  alien_die.active = true;
                  var alien_die_spine = alien_die.getComponent(sp.Skeleton);
                  alien_die_spine.setAnimation(0, "Alien" + killAlien.type + "_die", false);
                  alien_die_spine.setCompleteListener(function() {
                    alien_die_spine.setCompleteListener(null);
                    alien_die.active = false;
                  });
                };
                for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context3.next = 57;
              break;

             case 46:
              _context3.next = 48;
              return cc.vv.gameData.awaitTime(.5);

             case 48:
              Global.SlotsSoundMgr.playEffect("weapon" + gunInfo.type);
              killAliens.sort(function(a, b) {
                return a.lineNo - b.lineNo;
              });
              _loop2 = regeneratorRuntime.mark(function _loop2(j) {
                var killAlien, node, alien, gun_hurt, coin, alien_die, alien_die_spine;
                return regeneratorRuntime.wrap(function _loop2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    killAlien = killAliens[j];
                    node = _this2.getAlien(killAlien.lineNo, killAlien.type);
                    alien = cc.find("alien_" + killAlien.type, node);
                    gun_hurt = cc.find("gun_hurt", alien);
                    gun_hurt.active = true;
                    gun_hurt.getComponent(sp.Skeleton).setAnimation(0, "gun" + gunInfo.type, false);
                    _context2.next = 8;
                    return cc.vv.gameData.awaitTime(.2);

                   case 8:
                    alien.getComponent(sp.Skeleton).setAnimation(0, "die", false);
                    coin = cc.find("coin", alien);
                    coin.active = true;
                    coin.getComponent(cc.Label).string = Global.formatNumShort(killAlien.coin, 0);
                    Global.SlotsSoundMgr.playEffect("aliendie");
                    alien_die = cc.find("alien_die", node);
                    alien_die.active = true;
                    alien_die_spine = alien_die.getComponent(sp.Skeleton);
                    alien_die_spine.setAnimation(0, "Alien" + killAlien.type + "_die", false);
                    alien_die_spine.setCompleteListener(function() {
                      alien_die_spine.setCompleteListener(null);
                      alien_die.active = false;
                    });
                    _context2.next = 20;
                    return cc.vv.gameData.awaitTime(.1);

                   case 20:
                   case "end":
                    return _context2.stop();
                  }
                }, _loop2);
              });
              j = 0;

             case 52:
              if (!(j < killAliens.length)) {
                _context3.next = 57;
                break;
              }
              return _context3.delegateYield(_loop2(j), "t0", 54);

             case 54:
              j++;
              _context3.next = 52;
              break;

             case 57:
              if (!_this2._alienBusterGame.superWinCoin) {
                _context3.next = 60;
                break;
              }
              _context3.next = 60;
              return _this2.popExtraPrize();

             case 60:
              if (!_this2._alienBusterGame.isEnd) {
                _context3.next = 88;
                break;
              }
              leftAliens = false;
              _iterator2 = _createForOfIteratorHelper(_this2._alienBusterGame.aliens);
              _context3.prev = 63;
              _iterator2.s();

             case 65:
              if ((_step2 = _iterator2.n()).done) {
                _context3.next = 72;
                break;
              }
              alien = _step2.value;
              if (!(alien.length > 0)) {
                _context3.next = 70;
                break;
              }
              leftAliens = true;
              return _context3.abrupt("break", 72);

             case 70:
              _context3.next = 65;
              break;

             case 72:
              _context3.next = 77;
              break;

             case 74:
              _context3.prev = 74;
              _context3.t1 = _context3["catch"](63);
              _iterator2.e(_context3.t1);

             case 77:
              _context3.prev = 77;
              _iterator2.f();
              return _context3.finish(77);

             case 80:
              if (!leftAliens) {
                _context3.next = 83;
                break;
              }
              _context3.next = 83;
              return _this2.popFail();

             case 83:
              _context3.next = 85;
              return _this2.popResultDialog();

             case 85:
              _this2._endCallback && _this2._endCallback();
              _context3.next = 91;
              break;

             case 88:
              _context3.next = 90;
              return cc.vv.gameData.awaitTime(2);

             case 90:
              _this2.showAlien(_this2._alienBusterGame);

             case 91:
             case "end":
              return _context3.stop();
            }
          }, _callee2, null, [ [ 63, 74, 77, 80 ] ]);
        }))();
      },
      registerClickItem: function registerClickItem() {
        var _this3 = this;
        this.setAutoPlay();
        var _loop3 = function _loop3(i) {
          var item = cc.find("item_" + (i + 1), _this3.box_layout);
          item.off(cc.Node.EventType.TOUCH_END);
          item.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this3.clickItemfunc(i);

               case 1:
               case "end":
                return _context4.stop();
              }
            }, _callee3);
          })));
        };
        for (var i = 0; i < 16; i++) _loop3(i);
      },
      getAlien: function getAlien(lineIndex, type) {
        var line = cc.find("line_" + lineIndex, this.bg);
        for (var i = 0; i < 7; i++) {
          var position = cc.find("position_" + (i + 1), line);
          var _iterator3 = _createForOfIteratorHelper(position.children), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var child = _step3.value;
              if (cc.find("alien_" + type, child).active) return child;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return null;
      },
      popAlienAreComming: function popAlienAreComming() {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
            var self, func, btn_start;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("bgin");
                _this4.dialog_node.active = true;
                _this4.alien_are_comming.active = true;
                _this4.alien_are_comming.scale = 0;
                cc.tween(_this4.alien_are_comming).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context6.next = 8;
                return cc.vv.gameData.awaitTime(.5);

               case 8:
                self = _this4;
                func = function func() {
                  Global.SlotsSoundMgr.playEffect("button");
                  btn_start.off("click");
                  cc.tween(self.alien_are_comming).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self.dialog_node.active = false;
                    self.alien_are_comming.active = false;
                    success();
                  }).start();
                };
                btn_start = cc.find("btn_start", _this4.alien_are_comming);
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.off("click");
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      btn_start.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee4);
                })));

               case 14:
               case "end":
                return _context6.stop();
              }
            }, _callee5);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popAlienClose: function popAlienClose() {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("warning");
                _this5.dialog_node.active = true;
                _this5.alien_close.active = true;
                _this5.alien_close.scale = 0;
                cc.tween(_this5.alien_close).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 7;
                return cc.vv.gameData.awaitTime(1);

               case 7:
                cc.tween(_this5.alien_close).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this5.dialog_node.active = false;
                  _this5.alien_close.active = false;
                  success();
                }).start();

               case 8:
               case "end":
                return _context7.stop();
              }
            }, _callee6);
          }));
          return function(_x3) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      popFail: function popFail() {
        var _this6 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("caught");
                _this6.dialog_node.active = true;
                _this6.fail_node.active = true;
                _this6.fail_node.scale = 0;
                cc.tween(_this6.fail_node).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context8.next = 7;
                return cc.vv.gameData.awaitTime(1);

               case 7:
                cc.tween(_this6.fail_node).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this6.dialog_node.active = false;
                  _this6.fail_node.active = false;
                  success();
                }).start();

               case 8:
               case "end":
                return _context8.stop();
              }
            }, _callee7);
          }));
          return function(_x4) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      popExtraPrize: function popExtraPrize() {
        var _this7 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("destroyall");
                _this7.dialog_node.active = true;
                _this7.extra_prize.active = true;
                _this7.extra_prize.scale = 0;
                cc.tween(_this7.extra_prize).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("bg/coin", _this7.extra_prize).getComponent(cc.Label).string = Global.FormatNumToComma(_this7._alienBusterGame.superWinCoin);
                _context9.next = 8;
                return cc.vv.gameData.awaitTime(2);

               case 8:
                cc.tween(_this7.extra_prize).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this7.dialog_node.active = false;
                  _this7.extra_prize.active = false;
                  success();
                }).start();

               case 9:
               case "end":
                return _context9.stop();
              }
            }, _callee8);
          }));
          return function(_x5) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      popResultDialog: function popResultDialog() {
        var _this8 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
            var dialog, freetanchuang, yifenkuang, btn_collect, self, func;
            return regeneratorRuntime.wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("bgend");
                _this8.dialog_node.active = true;
                dialog = cc.find("result_node", _this8.dialog_node);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", freetanchuang);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(_this8._alienBusterGame.winCoin);
                _this8._winCoin = _this8._alienBusterGame.winCoin;
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context11.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                self = _this8;
                func = function func() {
                  btn_collect.off("click");
                  Global.SlotsSoundMgr.playEffect("button");
                  cc.tween(dialog).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self.dialog_node.active = false;
                    dialog.active = false;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee9);
                })));

               case 20:
               case "end":
                return _context11.stop();
              }
            }, _callee10);
          }));
          return function(_x6) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      clearAlien: function clearAlien() {
        for (var i = 0; i < 5; i++) {
          var line = cc.find("line_" + (i + 1), this.bg);
          for (var j = 0; j < 7; j++) {
            var position = cc.find("position_" + (j + 1), line);
            position.removeAllChildren();
          }
        }
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      reset: function reset() {
        this.clearAlien();
        this.pick_bg.active = true;
        for (var i = 0; i < 16; i++) {
          var item = cc.find("item_" + (i + 1), this.box_layout);
          cc.find("spine", item).getComponent(sp.Skeleton).setAnimation(0, "box_jingzhen", true);
        }
        this.wave_tips.active = true;
        this.wave.getComponent(cc.Label).string = "1/10";
        this.destroy_all_tips.active = false;
        this.gun.active = false;
        this.dialog_node.active = false;
        this._endCallback = null;
        this._alienBusterGame = null;
        this._haveOpenBox = [];
        this._winCoin = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  AlienMonster_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "876f3tCIItJQaAM/+Sqp896", "AlienMonster_Slots");
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
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {},
      Init: function Init() {
        var _this = this;
        this._super();
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        script.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          "Betup_lock" === name && script.setAnimation(0, "Betup_idle", true);
        });
        if (deskInfo.needBet <= deskInfo.currmult) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "Betup_unlock", false);
        } else {
          Global.SlotsSoundMgr.playEffect("lock");
          script.setAnimation(0, "Betup_lock", false);
        }
        this.updateCollectProgress(deskInfo.bonusGame, false);
        var touch_map = cc.find("collect_node/target/touch", this.node);
        touch_map.off(cc.Node.EventType.TOUCH_END);
        touch_map.on(cc.Node.EventType.TOUCH_END, function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          cc.find("map", _this.node.parent).getComponent("AlienMonster_Map").openMap(deskInfo.bonusGame);
        });
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        if (cc.vv.gameData.isInFreeGame()) {
          var dianwang = cc.find("reels_frame_free_2/mask/FG_dianwang", this.node);
          cc.tween(dianwang).to(.3, {
            y: 0
          }).start();
        }
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, spine_finish, target, wheelScript, wheelCoin, mapScript, _mapScript, script, rest, _iterator, _step, reel, _script, freescript, _iterator2, _step2, _reel, _script2, _iterator3, _step3, _reel2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!(1 === deskInfo.bonusGame.state)) {
                _context.next = 40;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 5;
              return cc.vv.gameData.awaitTime(.5);

             case 5:
              Global.SlotsSoundMgr.playEffect("collectalien");
              spine_finish = cc.find("collect_node/progress/mask/bar/full", _this2.node).getComponent(sp.Skeleton);
              spine_finish.node.active = true;
              spine_finish.setToSetupPose();
              spine_finish.setAnimation(0, "bar_full", false);
              spine_finish.setCompleteListener(function() {
                spine_finish.setCompleteListener(null);
                spine_finish.node.active = false;
              });
              _context.next = 13;
              return cc.vv.gameData.awaitTime(1);

             case 13:
              target = cc.find("collect_node/target", _this2.node).getComponent(sp.Skeleton);
              target.setAnimation(0, "R_bar_full", false);
              target.addAnimation(0, "R_bar_idle", true);
              _context.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              _this2.clearCollectProgress();
              wheelScript = cc.find("wheel", _this2.node.parent).getComponent("AlienMonster_Wheel");
              _context.next = 22;
              return wheelScript.startWheel(deskInfo.bonusGame);

             case 22:
              _context.next = 24;
              return cc.vv.gameData.awaitTime(1);

             case 24:
              wheelCoin = wheelScript.getWinCoin();
              _context.next = 27;
              return _this2.popWheelResult(wheelCoin);

             case 27:
              cc.vv.gameData.AddCoin(wheelCoin, true);
              wheelScript.node.active = false;
              mapScript = cc.find("map", _this2.node.parent).getComponent("AlienMonster_Map");
              _context.next = 32;
              return mapScript.startMapGame(wheelScript.getBonusGame(), wheelScript.getIndex());

             case 32:
              if (!(mapScript.getWinCoin() > 0)) {
                _context.next = 37;
                break;
              }
              _context.next = 35;
              return _this2.popWheelResult(mapScript.getWinCoin());

             case 35:
              cc.vv.gameData.AddCoin(mapScript.getWinCoin());
              _this2.ShowBottomWin(mapScript.getWinCoin(), mapScript.getWinCoin(), true);

             case 37:
              mapScript.node.active = false;
              _context.next = 50;
              break;

             case 40:
              if (!(2 === deskInfo.bonusGame.state)) {
                _context.next = 50;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 44;
              return cc.vv.gameData.awaitTime(.5);

             case 44:
              _mapScript = cc.find("map", _this2.node.parent).getComponent("AlienMonster_Map");
              _context.next = 47;
              return _mapScript.startMapGame(deskInfo.bonusGame, -1);

             case 47:
              _context.next = 49;
              return _this2.popWheelResult(_mapScript.getWinCoin());

             case 49:
              _mapScript.node.active = false;

             case 50:
              if (!deskInfo.alienBusterGame) {
                _context.next = 65;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              cc.find("shoot_game", _this2.node.parent).active = true;
              script = cc.find("shoot_game", _this2.node.parent).getComponent("AlienMonster_ShootGame");
              _context.next = 56;
              return script.startShootGame(deskInfo.alienBusterGame);

             case 56:
              _this2.cutSceneShoot();
              _context.next = 59;
              return cc.vv.gameData.awaitTime(2);

             case 59:
              script.node.active = false;
              cc.vv.gameData.AddCoin(script.getWinCoin());
              _context.next = 63;
              return _this2.ShowBottomWin(script.getWinCoin(), script.getWinCoin(), true);

             case 63:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();

             case 65:
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 79;
                break;
              }
              _context.next = 69;
              return cc.vv.gameData.awaitTime(.2);

             case 69:
              _this2.ShowGameview(true);
              _iterator = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  reel = _step.value;
                  reel.AddCount(6, .01);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context.next = 74;
              return cc.vv.gameData.awaitTime(.5);

             case 74:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this2.CanDoNextRound();
              _context.next = 129;
              break;

             case 79:
              _this2.ShowGameview(false);
              if (!deskInfo.jackpotGame) {
                _context.next = 110;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              cc.find("pick_game", _this2.node.parent).active = true;
              _script = cc.find("pick_game", _this2.node.parent).getComponent("AlienMonster_JackpotGame");
              _context.next = 86;
              return _script.startPick(deskInfo.jackpotGame);

             case 86:
              _context.next = 88;
              return _this2.popJackpotDialog(_script.getJackpotGame());

             case 88:
              _this2.cutSceneJackpot();
              _context.next = 91;
              return cc.vv.gameData.awaitTime(1.5);

             case 91:
              _script.node.active = false;
              cc.find("node_select_freegames", _this2.node.parent).active = true;
              freescript = cc.find("node_select_freegames", _this2.node.parent).getComponent("AlienMonster_SelectFreeTimes");
              _context.next = 96;
              return freescript.startSelectFreeTimes();

             case 96:
              _context.next = 98;
              return _this2.popFreeDialog(freescript.getFreeTime());

             case 98:
              _this2.cutSceneFreeTime();
              _context.next = 101;
              return cc.vv.gameData.awaitTime(1.5);

             case 101:
              _this2.Backup();
              _this2.ShowGameview(true);
              _iterator2 = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _reel = _step2.value;
                  _reel.AddCount(6, .01);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              freescript.node.active = false;
              _context.next = 108;
              return cc.vv.gameData.awaitTime(.5);

             case 108:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");

             case 110:
              if (!deskInfo.freeOptionGame) {
                _context.next = 128;
                break;
              }
              cc.find("node_select_freegames", _this2.node.parent).active = true;
              _script2 = cc.find("node_select_freegames", _this2.node.parent).getComponent("AlienMonster_SelectFreeTimes");
              _context.next = 115;
              return _script2.startSelectFreeTimes();

             case 115:
              _context.next = 117;
              return _this2.popFreeDialog(_script2.getFreeTime());

             case 117:
              _this2.cutSceneFreeTime();
              _context.next = 120;
              return cc.vv.gameData.awaitTime(1.5);

             case 120:
              _this2.ShowGameview(true);
              _iterator3 = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  _reel2 = _step3.value;
                  _reel2.AddCount(6, .01);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _script2.node.active = false;
              _context.next = 126;
              return cc.vv.gameData.awaitTime(.5);

             case 126:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");

             case 128:
              _this2.CanDoNextRound();

             case 129:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var yugao, i, _iterator4, _step4, reel1, reelup_tishi, _i, _iterator5, _step5, _reel3;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._super(msg);
              if (!(msg.wildCols.length > 0 && !cc.vv.gameData.isInFreeGame())) {
                _context2.next = 43;
                break;
              }
              if (!(Math.random() <= .2)) {
                _context2.next = 24;
                break;
              }
              if (!(_this3._gameInfo.resultCards.length / _this3._cfg.col > _this3._cfg.row)) {
                _context2.next = 7;
                break;
              }
              _this3.SetStopTime(.6 * (_this3._gameInfo.resultCards.length / _this3._cfg.col - _this3._cfg.row) + 3);
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(.6);

             case 7:
              Global.SlotsSoundMgr.playEffect("wildreel");
              yugao = cc.find("WildReel_yugao", _this3.node);
              yugao.active = true;
              yugao.getComponent(sp.Skeleton).setAnimation(0, "WildReel_yugao", false);
              yugao.getComponent(sp.Skeleton).setCompleteListener(function() {
                yugao.getComponent(sp.Skeleton).setCompleteListener(null);
                yugao.active = false;
              });
              i = 0;

             case 13:
              if (!(i < _this3._gameInfo.resultCards.length / _this3._cfg.col - _this3._cfg.row)) {
                _context2.next = 22;
                break;
              }
              _iterator4 = _createForOfIteratorHelper(_this3._reels);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  reel1 = _step4.value;
                  reel1.AddCount(1);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              Global.SlotsSoundMgr.playEffect("upreel");
              _context2.next = 19;
              return cc.vv.gameData.awaitTime(.6);

             case 19:
              i++;
              _context2.next = 13;
              break;

             case 22:
              _context2.next = 43;
              break;

             case 24:
              if (!(_this3._gameInfo.resultCards.length / _this3._cfg.col > _this3._cfg.row)) {
                _context2.next = 43;
                break;
              }
              _this3.SetStopTime(.6 * (_this3._gameInfo.resultCards.length / _this3._cfg.col - _this3._cfg.row) + 1);
              _context2.next = 28;
              return cc.vv.gameData.awaitTime(.6);

             case 28:
              Global.SlotsSoundMgr.playEffect("reelwild");
              reelup_tishi = cc.find("Reelup_tishi", _this3.node);
              reelup_tishi.active = true;
              reelup_tishi.getComponent(sp.Skeleton).setAnimation(0, "Reelup", false);
              reelup_tishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                reelup_tishi.getComponent(sp.Skeleton).setCompleteListener(null);
                reelup_tishi.active = false;
              });
              _i = 0;

             case 34:
              if (!(_i < _this3._gameInfo.resultCards.length / _this3._cfg.col - _this3._cfg.row)) {
                _context2.next = 43;
                break;
              }
              _iterator5 = _createForOfIteratorHelper(_this3._reels);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  _reel3 = _step5.value;
                  _reel3.AddCount(1);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              Global.SlotsSoundMgr.playEffect("upreel");
              _context2.next = 40;
              return cc.vv.gameData.awaitTime(.6);

             case 40:
              _i++;
              _context2.next = 34;
              break;

             case 43:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this4 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator6 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step6;
        try {
          var _loop = function _loop() {
            var info = _step6.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this4._reels[_i2];
              var reelRes = reelResults[_i2];
              cc.vv.gameData.isInFreeGame() && reelRes.splice(0, _this4._gameInfo.minRow - 1);
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID > 0 ? 1 : 0;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && (stateInfo.isStop = true);
              stateInfo.continuous && stateInfo.counts[_i2] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) _loop();
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var reel, i, frog, dianwang, _i3;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this5._gameInfo.wildCols.length > 0 && -1 !== _this5._gameInfo.wildCols.indexOf(colIdx + 1)) {
                reel = _this5._reels[colIdx];
                reel.changeAllSymbolToWild();
              }
              if (!cc.vv.gameData.isInFreeGame()) {
                _context3.next = 20;
                break;
              }
              if (!(7 !== _this5._gameInfo.minRow && _this5._reels[colIdx].haveDogAndHide())) {
                _context3.next = 20;
                break;
              }
              for (i = colIdx + 1; i < _this5._reels.length; i++) _this5._reels[i].AddDelayTime(.6 * (7 - _this5._gameInfo.minRow) + 1);
              frog = cc.find("reels_frame_free_2/mask/FG_dianwang/frog", _this5.node);
              frog.active = true;
              frog.getComponent(sp.Skeleton).setAnimation(0, "FG_up_smoke", false);
              frog.getComponent(sp.Skeleton).setCompleteListener(function() {
                frog.getComponent(sp.Skeleton).setCompleteListener(null);
                frog.active = false;
              });
              _context3.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              dianwang = cc.find("reels_frame_free_2/mask/FG_dianwang", _this5.node);
              _i3 = 0;

             case 12:
              if (!(_i3 < 7 - _this5._gameInfo.minRow)) {
                _context3.next = 20;
                break;
              }
              Global.SlotsSoundMgr.playEffect("reelexpending");
              cc.tween(dianwang).by(.5, {
                y: _this5._cfg.symbolSize.height
              }).start();
              _context3.next = 17;
              return cc.vv.gameData.awaitTime(.6);

             case 17:
              _i3++;
              _context3.next = 12;
              break;

             case 20:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return this._gameInfo.freeOptionGame;
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return _this6.checkChangeSymbol();

             case 2:
              _context5.next = 4;
              return _this6.collectSymbol();

             case 4:
              _this6.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this6.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var spine_finish, target, wheelScript, wheelCoin, mapScript;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    if (!_this6._gameInfo.jackpotGame) {
                      _context4.next = 3;
                      break;
                    }
                    _context4.next = 3;
                    return _this6.triggerJackpotGame();

                   case 3:
                    if (!(0 !== _this6._gameInfo.bonusGame.state && _this6._gameInfo.bonusGame.progressData.currCnt > 0)) {
                      _context4.next = 40;
                      break;
                    }
                    _this6._bottomScript.ShowBtnsByState("moveing_1");
                    _context4.next = 7;
                    return cc.vv.gameData.awaitTime(.5);

                   case 7:
                    Global.SlotsSoundMgr.playEffect("collectalien");
                    spine_finish = cc.find("collect_node/progress/mask/bar/full", _this6.node).getComponent(sp.Skeleton);
                    spine_finish.node.active = true;
                    spine_finish.setToSetupPose();
                    spine_finish.setAnimation(0, "bar_full", false);
                    spine_finish.setCompleteListener(function() {
                      spine_finish.setCompleteListener(null);
                      spine_finish.node.active = false;
                    });
                    _context4.next = 15;
                    return cc.vv.gameData.awaitTime(1);

                   case 15:
                    target = cc.find("collect_node/target", _this6.node).getComponent(sp.Skeleton);
                    target.setAnimation(0, "R_bar_full", false);
                    target.addAnimation(0, "R_bar_idle", true);
                    _context4.next = 20;
                    return cc.vv.gameData.awaitTime(2);

                   case 20:
                    _this6.clearCollectProgress();
                    wheelScript = cc.find("wheel", _this6.node.parent).getComponent("AlienMonster_Wheel");
                    _context4.next = 24;
                    return wheelScript.startWheel(_this6._gameInfo.bonusGame);

                   case 24:
                    _context4.next = 26;
                    return cc.vv.gameData.awaitTime(1);

                   case 26:
                    wheelCoin = wheelScript.getWinCoin();
                    _context4.next = 29;
                    return _this6.popWheelResult(wheelCoin);

                   case 29:
                    cc.vv.gameData.AddCoin(wheelCoin, true);
                    wheelScript.node.active = false;
                    mapScript = cc.find("map", _this6.node.parent).getComponent("AlienMonster_Map");
                    _context4.next = 34;
                    return mapScript.startMapGame(wheelScript.getBonusGame(), wheelScript.getIndex());

                   case 34:
                    if (!(mapScript.getWinCoin() > 0)) {
                      _context4.next = 39;
                      break;
                    }
                    _context4.next = 37;
                    return _this6.popWheelResult(mapScript.getWinCoin());

                   case 37:
                    cc.vv.gameData.AddCoin(mapScript.getWinCoin());
                    _this6.ShowBottomWin(mapScript.getWinCoin(), mapScript.getWinCoin(), true);

                   case 39:
                    mapScript.node.active = false;

                   case 40:
                    if (!_this6._gameInfo.alienBusterGame) {
                      _context4.next = 43;
                      break;
                    }
                    _context4.next = 43;
                    return _this6.triggerShootGame();

                   case 43:
                    _this6.CheckEnterFreeGame() ? _this6.triggerFreeGame() : _this6.CheckExtraFreeGame() ? _this6.triggerExtraFreeGame() : _this6.CheckExitFreeGame() ? _this6.triggerExitFreeGame() : _this6.CanDoNextRound();

                   case 44:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      triggerShootGame: function triggerShootGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, card, symbol, script;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this7._gameInfo.resultCards.length; i++) {
                card = _this7._gameInfo.resultCards[i];
                if (-1 !== _this7._cfg.shootGameIds.indexOf(card)) {
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context6.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              Global.SlotsSoundMgr.stopBgm();
              _this7.cutSceneShoot();
              _context6.next = 9;
              return cc.vv.gameData.awaitTime(2);

             case 9:
              cc.find("shoot_game", _this7.node.parent).active = true;
              script = cc.find("shoot_game", _this7.node.parent).getComponent("AlienMonster_ShootGame");
              _context6.next = 13;
              return script.startShootGame(_this7._gameInfo.alienBusterGame);

             case 13:
              _this7.cutSceneShoot();
              _context6.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              script.node.active = false;
              cc.vv.gameData.AddCoin(script.getWinCoin());
              _context6.next = 20;
              return _this7.ShowBottomWin(script.getWinCoin(), script.getWinCoin(), true);

             case 20:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();

             case 22:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      triggerJackpotGame: function triggerJackpotGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, card, symbol, script, freescript, _iterator7, _step7, reel, _iterator8, _step8, _reel4;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (-1 !== _this8._cfg.scatterIds.indexOf(card) || -1 !== _this8._cfg.jackpotIds.indexOf(card)) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context7.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _this8.cutSceneJackpot();
              _context7.next = 8;
              return cc.vv.gameData.awaitTime(1.5);

             case 8:
              cc.find("pick_game", _this8.node.parent).active = true;
              script = cc.find("pick_game", _this8.node.parent).getComponent("AlienMonster_JackpotGame");
              _context7.next = 12;
              return script.startPick(_this8._gameInfo.jackpotGame);

             case 12:
              _context7.next = 14;
              return _this8.popJackpotDialog(script.getJackpotGame());

             case 14:
              _this8.cutSceneJackpot();
              _context7.next = 17;
              return cc.vv.gameData.awaitTime(1.5);

             case 17:
              script.node.active = false;
              cc.find("node_select_freegames", _this8.node.parent).active = true;
              freescript = cc.find("node_select_freegames", _this8.node.parent).getComponent("AlienMonster_SelectFreeTimes");
              _context7.next = 22;
              return freescript.startSelectFreeTimes();

             case 22:
              _context7.next = 24;
              return _this8.popFreeDialog(freescript.getFreeTime());

             case 24:
              _this8.cutSceneFreeTime();
              _context7.next = 27;
              return cc.vv.gameData.awaitTime(1.5);

             case 27:
              _iterator7 = _createForOfIteratorHelper(_this8._reels);
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  reel = _step7.value;
                  reel.StartRecycleSymbol(.1);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              _context7.next = 31;
              return cc.vv.gameData.awaitTime(.2);

             case 31:
              _this8.Backup();
              _this8.ShowGameview(true);
              _iterator8 = _createForOfIteratorHelper(_this8._reels);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  _reel4 = _step8.value;
                  _reel4.AddCount(6, .01);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              freescript.node.active = false;
              _context7.next = 38;
              return cc.vv.gameData.awaitTime(.5);

             case 38:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              1;

             case 41:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      checkChangeSymbol: function checkChangeSymbol() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var changeDog, dogSpine, array, oneRowArray, _iterator9, _step9, _loop2, twoThreeRowArray, rowNum, _iterator10, _step10, _loop3;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (_this9._gameInfo.randGame) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              Global.SlotsSoundMgr.playEffect("dog");
              changeDog = cc.find("change_Dog", _this9.node);
              changeDog.active = true;
              dogSpine = changeDog.getComponent(sp.Skeleton);
              dogSpine.setAnimation(0, "change_Dog", false);
              dogSpine.setCompleteListener(function() {
                dogSpine.setCompleteListener(null);
                changeDog.active = false;
              });
              _context8.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              array = _this9._gameInfo.randGame.convertIdxs.concat(_this9._gameInfo.randGame.convertIdxs2);
              oneRowArray = array.filter(function(value) {
                return value % 5 !== 0;
              });
              _iterator9 = _createForOfIteratorHelper(oneRowArray);
              try {
                _loop2 = function _loop2() {
                  var index = _step9.value;
                  Global.SlotsSoundMgr.playEffect("symbolrefresh");
                  var symbol_change = cc.instantiate(cc.find("symbol_change", _this9.node));
                  var spine = symbol_change.getComponent(sp.Skeleton);
                  symbol_change.active = true;
                  symbol_change.parent = _this9._topAniNode;
                  var symbol = _this9.GetSymbolByIdx(index);
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  position = _this9._topAniNode.convertToNodeSpaceAR(position);
                  symbol_change.position = position;
                  spine.setAnimation(0, "change_1x1_02", false);
                  spine.setCompleteListener(function() {
                    symbol_change.removeFromParent();
                  });
                  cc.tween(symbol_change).delay(.2).call(function() {
                    symbol.ShowById(_this9._gameInfo.randGame.convertCard);
                  }).start();
                };
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) _loop2();
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              twoThreeRowArray = array.filter(function(value) {
                return value % 5 === 0;
              });
              rowNum = _this9._gameInfo.resultCards.length / _this9._cfg.col;
              _iterator10 = _createForOfIteratorHelper(twoThreeRowArray);
              try {
                _loop3 = function _loop3() {
                  var index = _step10.value;
                  var row = index / 5;
                  var symbol_change = cc.instantiate(cc.find("symbol_change", _this9.node));
                  var spine = symbol_change.getComponent(sp.Skeleton);
                  symbol_change.active = true;
                  symbol_change.parent = _this9._topAniNode;
                  var symbol = _this9.GetSymbolByIdx(index);
                  var preId = symbol.GetShowId();
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  position = _this9._topAniNode.convertToNodeSpaceAR(position);
                  var animation = "change_2x2";
                  if (1 === row) if (_this9._gameInfo.resultCards[index + 10 - 1] - _this9._gameInfo.resultCards[index - 1] === 2) {
                    position.y -= _this9._cfg.symbolSize.height;
                    animation = "change_2x3";
                  } else {
                    position.y -= _this9._cfg.symbolSize.height / 2;
                    animation = "change_2x2";
                  } else if (row === rowNum) if (_this9._gameInfo.resultCards[index - 10 - 1] - _this9._gameInfo.resultCards[index - 1] === -2) {
                    position.y += _this9._cfg.symbolSize.height;
                    animation = "change_2x3";
                  } else {
                    position.y += _this9._cfg.symbolSize.height / 2;
                    animation = "change_2x2";
                  } else switch (symbol.GetShowId() % 100) {
                   case 1:
                    if (rowNum - row >= 2) if (_this9._gameInfo.resultCards[index + 10 - 1] - _this9._gameInfo.resultCards[index - 1] === 2) {
                      position.y -= _this9._cfg.symbolSize.height;
                      animation = "change_2x3";
                    } else {
                      position.y -= _this9._cfg.symbolSize.height / 2;
                      animation = "change_2x2";
                    } else {
                      position.y -= _this9._cfg.symbolSize.height / 2;
                      animation = "change_2x2";
                    }
                    break;

                   case 2:
                    if (_this9._gameInfo.resultCards[index + 5 - 1] - _this9._gameInfo.resultCards[index - 1] === 1) animation = "change_2x3"; else {
                      position.y += _this9._cfg.symbolSize.height / 2;
                      animation = "change_2x2";
                    }
                    break;

                   case 3:
                    if (row >= 3) if (_this9._gameInfo.resultCards[index - 10 - 1] - _this9._gameInfo.resultCards[index - 1] === -2) {
                      position.y += _this9._cfg.symbolSize.height;
                      animation = "change_2x3";
                    } else {
                      position.y += _this9._cfg.symbolSize.height / 2;
                      animation = "change_2x2";
                    } else {
                      position.y += _this9._cfg.symbolSize.height / 2;
                      animation = "change_2x2";
                    }
                  }
                  symbol_change.position = position;
                  spine.setAnimation(0, animation, false);
                  spine.setCompleteListener(function() {
                    symbol_change.removeFromParent();
                  });
                  cc.tween(symbol_change).delay(.2).call(function() {
                    symbol.ShowById(100 * _this9._gameInfo.randGame.convertCard + preId % 100);
                  }).start();
                };
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) _loop3();
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              _context8.next = 20;
              return cc.vv.gameData.awaitTime(1);

             case 20:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      cutSceneFreeTime: function cutSceneFreeTime() {
        Global.SlotsSoundMgr.playEffect("fgtransition");
        var node = cc.find("FG_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "FG_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      cutSceneJackpot: function cutSceneJackpot() {
        Global.SlotsSoundMgr.playEffect("fgtransition");
        var node = cc.find("JP_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "JP_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      cutSceneShoot: function cutSceneShoot() {
        Global.SlotsSoundMgr.playEffect("bgtransition");
        var node = cc.find("BG_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "BG_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("reels_frame", this.node).active = !bFree;
        cc.find("reels_frame_free", this.node).active = bFree;
        cc.find("reels_frame_free_2", this.node).active = bFree;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._gameInfo.resultCards.length / this._col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      collectSymbol: function collectSymbol() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var man, haveCollect, i, card, symbol, particle, startPos, endPos, array, _iterator11, _step11, arrayElement, _symbol, _particle, _startPos, _endPos;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              if (!(0 === _this10._gameInfo.bonusGame.progressData.currCnt)) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");

             case 2:
              man = cc.find("collect_node/collect", _this10.node);
              haveCollect = false;
              i = 0;

             case 5:
              if (!(i < _this10._gameInfo.resultCards.length)) {
                _context9.next = 25;
                break;
              }
              card = _this10._gameInfo.resultCards[i];
              if (!(-1 !== _this10._cfg.collectSymbolIds.indexOf(card))) {
                _context9.next = 22;
                break;
              }
              symbol = _this10.GetSymbolByIdx(i + 1);
              if (!symbol) {
                _context9.next = 22;
                break;
              }
              if (!(cc.vv.gameData.isInFreeGame() && i / _this10._cfg.col < _this10._gameInfo.minRow - 1)) {
                _context9.next = 12;
                break;
              }
              return _context9.abrupt("continue", 22);

             case 12:
              haveCollect = true;
              particle = cc.instantiate(cc.find("particle_fly", _this10.node.parent));
              particle.active = true;
              particle.parent = _this10.node.parent;
              startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this10.node.parent.convertToNodeSpaceAR(startPos);
              particle.position = startPos;
              endPos = man.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this10.node.parent.convertToNodeSpaceAR(endPos);
              cc.tween(particle).to(.5, {
                position: endPos
              }).removeSelf().start();

             case 22:
              i++;
              _context9.next = 5;
              break;

             case 25:
              if (_this10._gameInfo.randGame && _this10._cfg.collectSymbolIds.includes(_this10._gameInfo.randGame.convertCard)) {
                array = _this10._gameInfo.randGame.convertIdxs.concat(_this10._gameInfo.randGame.convertIdxs2);
                _iterator11 = _createForOfIteratorHelper(array);
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                    arrayElement = _step11.value;
                    _symbol = _this10.GetSymbolByIdx(arrayElement);
                    if (_symbol) {
                      haveCollect = true;
                      _particle = cc.instantiate(cc.find("particle_fly", _this10.node.parent));
                      _particle.active = true;
                      _particle.parent = _this10.node.parent;
                      _startPos = _symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      _startPos = _this10.node.parent.convertToNodeSpaceAR(_startPos);
                      _particle.position = _startPos;
                      _endPos = man.convertToWorldSpaceAR(cc.v2(0, 0));
                      _endPos = _this10.node.parent.convertToNodeSpaceAR(_endPos);
                      cc.tween(_particle).to(.5, {
                        position: _endPos
                      }).removeSelf().start();
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }
              if (!haveCollect) {
                _context9.next = 32;
                break;
              }
              cc.tween(man).delay(.5).call(function() {
                Global.SlotsSoundMgr.playEffect("collect");
                var spine = cc.find("spine", man).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "collect", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                });
              }).start();
              _context9.next = 30;
              return cc.vv.gameData.awaitTime(.5);

             case 30:
              _context9.next = 32;
              return _this10.updateCollectProgress(_this10._gameInfo.bonusGame, true);

             case 32:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var i, card, symbol, script, _iterator12, _step12, reel, _iterator13, _step13, _reel5;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this11._gameInfo.resultCards.length; i++) {
                card = _this11._gameInfo.resultCards[i];
                if (-1 !== _this11._cfg.scatterIds.indexOf(card)) {
                  symbol = _this11.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context10.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              cc.find("node_select_freegames", _this11.node.parent).active = true;
              script = cc.find("node_select_freegames", _this11.node.parent).getComponent("AlienMonster_SelectFreeTimes");
              _context10.next = 9;
              return script.startSelectFreeTimes();

             case 9:
              _context10.next = 11;
              return _this11.popFreeDialog(script.getFreeTime());

             case 11:
              _this11.cutSceneFreeTime();
              _context10.next = 14;
              return cc.vv.gameData.awaitTime(1.5);

             case 14:
              _iterator12 = _createForOfIteratorHelper(_this11._reels);
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                  reel = _step12.value;
                  reel.StartRecycleSymbol(.1);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
              _context10.next = 18;
              return cc.vv.gameData.awaitTime(.2);

             case 18:
              _this11.Backup();
              _this11.ShowGameview(true);
              _iterator13 = _createForOfIteratorHelper(_this11._reels);
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                  _reel5 = _step13.value;
                  _reel5.AddCount(6, .01);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              script.node.active = false;
              _context10.next = 25;
              return cc.vv.gameData.awaitTime(.5);

             case 25:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this11.CanDoNextRound();

             case 28:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this12._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this12._gameInfo.resultCards.length; i++) {
                card = _this12._gameInfo.resultCards[i];
                if (-1 !== _this12._cfg.scatterIds.indexOf(card)) {
                  symbol = _this12.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context11.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context11.next = 7;
              return _this12.popExtraFreeDialog();

             case 7:
              _this12.CanDoNextRound();

             case 8:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var _iterator14, _step14, reel;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              _this13._bottomScript.ShowBtnsByState("moveing_1");
              _context12.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context12.next = 5;
              return _this13.popFreeResultDialog();

             case 5:
              _this13.cutSceneFreeTime();
              _context12.next = 8;
              return cc.vv.gameData.awaitTime(1.5);

             case 8:
              _this13.Resume();
              _this13.ShowGameview(false);
              _iterator14 = _createForOfIteratorHelper(_this13._reels);
              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                  reel = _step14.value;
                  reel.StartRecycleSymbol(.01);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
              _context12.next = 14;
              return cc.vv.gameData.awaitTime(1);

             case 14:
              _this13.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this13.CanDoNextRound();
              });

             case 15:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      popFreeDialog: function popFreeDialog(freeTime) {
        var _this14 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
            var free_dialog, dialog, freetanchuang, times, btn_start, func;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("fgin");
                free_dialog = cc.find("free_dialog", _this14.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", freetanchuang);
                times.getComponent(cc.Label).string = freeTime;
                btn_start = cc.find("btn_start", freetanchuang);
                _context14.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                func = function func() {
                  Global.SlotsSoundMgr.playEffect("button");
                  btn_start.off("click");
                  cc.tween(dialog).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    free_dialog.active = false;
                    dialog.active = false;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.off("click");
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      btn_start.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));

               case 19:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      popExtraFreeDialog: function popExtraFreeDialog() {
        var _this15 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
            var free_dialog, dialog, freetanchuang, times;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgretrigger");
                free_dialog = cc.find("free_dialog", _this15.node.parent);
                free_dialog.active = true;
                dialog = cc.find("extra_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", freetanchuang);
                times.getComponent(cc.Label).string = _this15._gameInfo.freeResult.freeInfo.freeCnt;
                _context15.next = 13;
                return cc.vv.gameData.awaitTime(1);

               case 13:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 14:
               case "end":
                return _context15.stop();
              }
            }, _callee15);
          }));
          return function(_x2) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this16 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success) {
            var free_dialog, dialog, freetanchuang, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("free_dialog", _this16.node.parent);
                free_dialog.active = true;
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", freetanchuang);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context17.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                func = function func() {
                  btn_collect.off("click");
                  Global.SlotsSoundMgr.playEffect("button");
                  cc.tween(dialog).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    free_dialog.active = false;
                    dialog.active = false;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                })));

               case 19:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x3) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      popJackpotDialog: function popJackpotDialog(jackpotGame) {
        var _this17 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
            var animation, free_dialog, dialog, bg, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("jpwin");
                animation = [ "Mini", "Minor", "Major", "Grand" ];
                free_dialog = cc.find("free_dialog", _this17.node.parent);
                free_dialog.active = true;
                dialog = cc.find("jackpot_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                bg = cc.find("bg", dialog);
                bg.getComponent(sp.Skeleton).setAnimation(0, animation[jackpotGame.jackpot.id - 1], true);
                bg.scale = 0;
                cc.tween(bg).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("diban", bg).getComponent(sp.Skeleton).setAnimation(0, animation[jackpotGame.jackpot.id - 1], true);
                cc.find("title", bg).getComponent(sp.Skeleton).setAnimation(0, animation[jackpotGame.jackpot.id - 1], true);
                yifenkuang = cc.find("yifenkuang", bg);
                yifenkuang.getComponent(sp.Skeleton).setAnimation(0, animation[jackpotGame.jackpot.id - 1], true);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.winCoin);
                btn_collect = cc.find("btn_collect", bg);
                _context19.next = 20;
                return cc.vv.gameData.awaitTime(1);

               case 20:
                func = function func() {
                  btn_collect.off("click");
                  Global.SlotsSoundMgr.playEffect("button");
                  cc.tween(dialog).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    free_dialog.active = false;
                    dialog.active = false;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                })));

               case 24:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x4) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      popWheelResult: function popWheelResult(winCoin) {
        var _this18 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(success) {
            var free_dialog, dialog, freetanchuang, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("free_dialog", _this18.node.parent);
                free_dialog.active = true;
                dialog = cc.find("wheel_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", freetanchuang);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context21.next = 14;
                return cc.vv.gameData.awaitTime(1);

               case 14:
                func = function func() {
                  btn_collect.off("click");
                  Global.SlotsSoundMgr.playEffect("button");
                  cc.tween(dialog).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    free_dialog.active = false;
                    dialog.active = false;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                })));

               case 18:
               case "end":
                return _context21.stop();
              }
            }, _callee21);
          }));
          return function(_x5) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(bonusGame, isAdd) {
        var _this19 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          var progress, lizi;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              progress = cc.find("collect_node/progress/mask/bar", _this19.node);
              if (isAdd) {
                lizi = cc.find("collect", progress);
                lizi.active = true;
                lizi.getComponent(sp.Skeleton).setAnimation(0, "collect", false);
                lizi.getComponent(sp.Skeleton).setCompleteListener(function() {
                  lizi.getComponent(sp.Skeleton).setCompleteListener(null);
                  lizi.active = false;
                });
                cc.tween(progress).to(.3, {
                  x: 368 * (bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt > 1 ? 1 : bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt) - 184
                }).start();
              } else progress.x = 368 * (bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt > 1 ? 1 : bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt) - 184;

             case 2:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var progress = cc.find("collect_node/progress/mask/bar", this.node);
        progress.x = -184;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  AlienMonster_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f997djo2YVMT4WhF8goQDvX", "AlienMonster_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      changeToWild: function changeToWild() {
        this.ShowById(1);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id]) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = 200 - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            Global.SlotsSoundMgr.playEffect("reelwild");
            nodeSp.setAnimation(0, "Wild_intro", false);
            nodeSp.addAnimation(0, "Wild_idle", true);
          }
        }
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
      },
      ShowKuang: function ShowKuang() {
        var bShow = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isKuang = bShow;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.kuang) {
          var assetScp = cc.vv.gameData.GetAssetScript();
          var parentObj = this.GetKuangShowParent();
          if (assetScp && parentObj) {
            var old = parentObj.getChildByName("kuang" + this._symbolIdx + "_" + this._reelIdx);
            if (bShow) {
              if (!old || !cc.isValid(old, true)) {
                var kuangPrefab = assetScp.GetPrefabByName(cfg.kuang);
                4 === this._reelIdx && (kuangPrefab = assetScp.GetPrefabByName(cfg.doubleColKuang));
                if (kuangPrefab) {
                  old = cc.instantiate(kuangPrefab);
                  old.name = "kuang" + this._symbolIdx + "_" + this._reelIdx;
                  old.parent = parentObj;
                }
              }
              var symbolWordPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
              var nodePos = parentObj.convertToNodeSpaceAR(symbolWordPos);
              old.position = nodePos;
              old.active = true;
              cfg.symbol[this._id].win_ani && (old.zIndex = cfg.symbol[this._id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx + 10);
            } else old && (old.active = false);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  AlienMonster_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbc13roBwRC1bZ/Tmf4iokk", "AlienMonster_Wheel");
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
        wheel_node: cc.Node,
        wheel: cc.Node,
        spine_spin: sp.Skeleton,
        spine_win: sp.Skeleton,
        btn_spin: cc.Node,
        _successCallback: null,
        _bonusGame: null,
        _winCoin: 0,
        _index: -1
      },
      startWheel: function startWheel(bonusGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.playEffect("wheelshow");
                _this.node.active = true;
                _this.wheel_node.scale = 0;
                _this._successCallback = success;
                cc.tween(_this.wheel_node).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this.wheel.angle = 0;
                _this.spine_win.node.active = false;
                var func = function() {
                  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var req, result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        _this.btn_spin.off("click");
                        Global.SlotsSoundMgr.playEffect("spin");
                        req = {
                          rtype: 1
                        };
                        _context.next = 5;
                        return cc.vv.gameData.reqSubGame(req);

                       case 5:
                        result = _context.sent;
                        if (!(200 === result.code)) {
                          _context.next = 19;
                          break;
                        }
                        _this._bonusGame = result.data.bonusGame;
                        cc.vv.gameData.getDeskInfo().bonusGame = result.data.bonusGame;
                        _this._winCoin = result.data.coin;
                        _this._index = result.data.idx;
                        _this.spine_spin.setAnimation(0, "click", false);
                        _this.spine_spin.addAnimation(0, "jingzhen", true);
                        _context.next = 15;
                        return _this._rotateWheel(result.data.id - 1);

                       case 15:
                        _this.spine_win.node.active = true;
                        _context.next = 18;
                        return cc.vv.gameData.awaitTime(1);

                       case 18:
                        _this._successCallback && _this._successCallback();

                       case 19:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function func() {
                    return _ref.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(_this.btn_spin, func);
                _this.btn_spin.off("click");
                _this.btn_spin.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this.btn_spin.stopAllActions();
                      func();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));
                for (var i = 0; i < bonusGame.progressData.wheelItems.length; i++) {
                  var info = bonusGame.progressData.wheelItems[i];
                  cc.find("index_" + (i + 1), _this.wheel).getComponent(cc.Label).string = Global.formatNumShort(info.coin, 2);
                }
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      getIndex: function getIndex() {
        return this._index;
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      _rotateWheel: function _rotateWheel(endIndex) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function(success) {
                var angle = 60 * endIndex - 2160;
                cc.log(angle);
                Global.SlotsSoundMgr.playEffect("wheelspin");
                var action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                _this2.wheel.runAction(cc.sequence(action, cc.callFunc(function() {
                  Global.SlotsSoundMgr.playEffect("wheelwin");
                  success();
                })));
              }));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "AlienMonster_Cfg", "AlienMonster_GameData", "AlienMonster_JackpotGame", "AlienMonster_Logic", "AlienMonster_Map", "AlienMonster_Reel", "AlienMonster_SelectFreeTimes", "AlienMonster_ShootGame", "AlienMonster_Slots", "AlienMonster_Symbol", "AlienMonster_Wheel" ]);