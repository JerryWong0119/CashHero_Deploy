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
  VampireCount_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "507faWD3kJOyYK2PbPp6xTi", "VampireCount_Cfg");
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
        node: "symbol_1",
        win_node: "animation_1",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        idle_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3"
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "symbol_101",
        win_node: "animation_101",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 201, {
        node: "symbol_201"
      }), _defineProperty(_symbol, 202, {
        node: "symbol_202",
        win_node: "animation_202",
        stop_ani: {
          name: "animation",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 203, {
        node: "symbol_203"
      }), _defineProperty(_symbol, 301, {
        node: "symbol_301",
        win_node: "animation_301",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        idle_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _symbol),
      BonusType: {
        Coin: 1,
        Double: 2,
        JackpotWheel: 3
      },
      MapType: {
        PickBooster: 1,
        SuperFreeGame: 2
      },
      MapBoostType: {
        ExtraFreeCnt: 1,
        WildPaysDouble: 2,
        AddRow: 3,
        ExtraWild: 4,
        ExtraBonus: 5,
        Coin: 6
      },
      MapConfig: [ {
        id: 1,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 3,
        index: 1
      }, {
        id: 2,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 3,
        index: 1
      }, {
        id: 3,
        type: 2,
        boosters: [ 1, 2 ],
        animationName: "animation1",
        nextSlotsId: 7,
        index: 1
      }, {
        id: 4,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 5,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 6,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 7,
        index: 2
      }, {
        id: 7,
        type: 2,
        boosters: [ 1, 2, 3 ],
        animationName: "animation2",
        nextSlotsId: 12,
        index: 2
      }, {
        id: 8,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 9,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 10,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 11,
        type: 1,
        pickCnt: 2,
        nextSlotsId: 12,
        index: 3
      }, {
        id: 12,
        type: 2,
        boosters: [ 1, 2, 3, 4 ],
        animationName: "animation3",
        nextSlotsId: 18,
        index: 3
      }, {
        id: 13,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 14,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 15,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 16,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 17,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 18,
        index: 4
      }, {
        id: 18,
        type: 2,
        boosters: [ 1, 2, 3, 4 ],
        animationName: "animation4",
        nextSlotsId: 25,
        index: 4
      }, {
        id: 19,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 20,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 21,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 22,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 23,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 24,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 25,
        index: 5
      }, {
        id: 25,
        type: 2,
        boosters: [ 1, 2, 3, 4, 5 ],
        animationName: "animation5",
        nextSlotsId: 33,
        index: 5
      }, {
        id: 26,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 27,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 28,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 29,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 30,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 31,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 32,
        type: 1,
        pickCnt: 3,
        nextSlotsId: 33,
        index: 6
      }, {
        id: 33,
        type: 2,
        boosters: [ 1, 2, 3, 4, 5 ],
        animationName: "animation6",
        nextSlotsId: 3,
        index: 6
      } ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "VampireCount_Slots",
        Reels: "VampireCount_Reel",
        Symbols: "VampireCount_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 112,
        height: 103
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ],
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      collectSymbolId: 4,
      pumpkinManId: 202,
      extraSpinId: 301,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/VampireCount/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_landing",
        antSound: "anticipation1",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/VampireCount/prefab/help_item_1", "games/VampireCount/prefab/help_item_2", "games/VampireCount/prefab/help_item_3", "games/VampireCount/prefab/help_item_4", "games/VampireCount/prefab/help_item_5", "games/VampireCount/prefab/help_item_6", "games/VampireCount/prefab/help_item_7" ],
      commEffect: {
        path: "games/VampireCount/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  VampireCount_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b58f2KlGipPHIFRJ7AT27ZY", "VampireCount_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _pickBonusData: null,
        _lockBonus: false,
        _leftSpiderCount: 0,
        _rightSpiderCount: 0
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
          cc.vv.AudioManager.playEff("games/VampireCount/", "unlock", true);
          this._lockBonus = false;
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation3", false);
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          cc.vv.AudioManager.playEff("games/VampireCount/", "lock", true);
          this._lockBonus = true;
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation1", false);
        }
        cc.vv.gameData.GetSlotsScript().setPumpkinInfo(deskInfo.bonusInfos);
      },
      playSpiderAndGhostAnimation: function playSpiderAndGhostAnimation(index) {
        var _this = this;
        var spider = cc.find("safe_node/bg/spider", this.node);
        var spine = spider.getComponent(sp.Skeleton);
        spine.clearTracks();
        spine.setToSetupPose();
        spine.setAnimation(0, "animation2_" + index + "_1", false);
        spine.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          if (name === "animation2_" + index + "_1") {
            _this._rightSpiderCount++;
            if (_this._rightSpiderCount >= 3) {
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation2_" + index + "_2", false);
              _this._rightSpiderCount = 0;
            }
          } else if (name === "animation2_" + index + "_2") {
            _this._leftSpiderCount++;
            if (_this._leftSpiderCount >= 2) {
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation2_" + index + "_1", false);
              _this._leftSpiderCount = 0;
            }
          }
        });
        var ghost = cc.find("safe_node/bg/ghost", this.node);
        var ghost_spine = ghost.getComponent(sp.Skeleton);
        ghost_spine.clearTracks();
        ghost_spine.setToSetupPose();
        ghost_spine.setAnimation(0, "animation4_" + index + "_1", false);
        ghost_spine.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          if (name === "animation4_" + index + "_1") {
            ghost_spine.clearTracks();
            ghost_spine.setToSetupPose();
            ghost_spine.setAnimation(0, "animation4_" + index + "_2", false);
          } else if (name === "animation4_" + index + "_2") {
            ghost_spine.clearTracks();
            ghost_spine.setToSetupPose();
            ghost_spine.setAnimation(0, "animation4_" + index + "_1", false);
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  VampireCount_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d53bbPqIoVM0JogletkJfM5", "VampireCount_Map");
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
        role: cc.Node,
        points: [ cc.Node ],
        map: cc.Node,
        start_node: cc.Node,
        btn_back: cc.Node
      },
      initMap: function initMap(mapInfo) {
        this.node.active = true;
        this.map.y = cc.winSize.height;
        var cfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < cfg.MapConfig.length; i++) {
          var pointCfg = cfg.MapConfig[i];
          var point = this.points[i];
          var spine = point.getChildByName("spine").getComponent(sp.Skeleton);
          if (pointCfg.type === cfg.MapType.PickBooster) if (i < mapInfo.currId) {
            spine.clearTracks();
            spine.setToSetupPose();
            spine.setAnimation(0, "animation4", true);
          } else {
            spine.clearTracks();
            spine.setToSetupPose();
            spine.setAnimation(0, "animation3", true);
          } else if (pointCfg.type === cfg.MapType.SuperFreeGame) {
            var common = point.getChildByName("common");
            var finish = point.getChildByName("finish");
            common.active = i >= mapInfo.currId;
            finish.active = i < mapInfo.currId;
            i < mapInfo.currId ? spine.setAnimation(0, "animation" + pointCfg.index + "_3", true) : spine.setAnimation(0, "animation" + pointCfg.index + "_2", true);
            for (var _i = 1; _i < 6; _i++) {
              var tips = common.getChildByName("tips_" + _i);
              if (tips) {
                tips.getChildByName("no").active = false;
                tips.getChildByName("yes").active = false;
              }
            }
          }
        }
        var nextFreeGameIndex = mapInfo.currId >= 1 ? cfg.MapConfig[mapInfo.currId - 1].nextSlotsId - 1 : cfg.MapConfig[0].nextSlotsId - 1;
        var nextFreeGameCfg = cfg.MapConfig[nextFreeGameIndex];
        var nextFreeGamePoint = this.points[nextFreeGameIndex];
        if (nextFreeGamePoint) {
          var _common = nextFreeGamePoint.getChildByName("common");
          if (_common) {
            for (var _i2 = 1; _i2 < 6; _i2++) {
              var _tips = _common.getChildByName("tips_" + _i2);
              if (_tips) {
                _tips.getChildByName("no").active = false;
                _tips.getChildByName("yes").active = -1 !== mapInfo.nextUnlockBoosters.indexOf(_i2);
              }
            }
            _common.getChildByName("num").getComponent(cc.Label).string = mapInfo.nextUnlockBoosters.length;
          }
        }
        var startPoint = mapInfo.currId <= 0 ? this.start_node : this.points[mapInfo.currId - 1];
        this.role.active = true;
        this.role.position = startPoint.position;
      },
      openMap: function openMap(showBtn) {
        var _this = this;
        this.node.active = true;
        this.map.y = cc.winSize.height;
        cc.vv.AudioManager.playEff("games/VampireCount/", "map_open", true);
        cc.tween(this.map).to(.5, {
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
            _this.btn_back.off("click");
            cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", true);
            cc.tween(_this.btn_back).to(.2, {
              scale: 0
            }).start();
            cc.tween(_this.map).to(.5, {
              y: cc.winSize.height
            }).call(function() {
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              _this.node.active = false;
            }).start();
          });
        }
      },
      showMap: function showMap(mapInfo) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cfg, pointCfg, point, spine, common, finish, i, tips, position, percentY, startPoint, endPoint, endPointCfg, _spine, script, result, num, _iterator, _step, choiceItem, _i4, _pointCfg2, _point2, _spine3;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.node.active = true;
              cfg = cc.vv.gameData.getGameCfg();
              _this2.initMap(mapInfo);
              pointCfg = cfg.MapConfig[mapInfo.currId - 1];
              point = _this2.points[mapInfo.currId - 1];
              spine = point.getChildByName("spine").getComponent(sp.Skeleton);
              if (pointCfg.type === cfg.MapType.PickBooster) {
                spine.clearTracks();
                spine.setToSetupPose();
                spine.setAnimation(0, "animation3", true);
              } else if (pointCfg.type === cfg.MapType.SuperFreeGame) {
                common = point.getChildByName("common");
                finish = point.getChildByName("finish");
                common.active = true;
                finish.active = false;
                spine.setAnimation(0, "animation" + pointCfg.index + "_2", true);
                for (i = 1; i < 6; i++) {
                  tips = common.getChildByName("tips_" + i);
                  if (tips) {
                    tips.getChildByName("no").active = -1 === mapInfo.nextUnlockBoosters.indexOf(i);
                    tips.getChildByName("yes").active = -1 !== mapInfo.nextUnlockBoosters.indexOf(i);
                  }
                }
              }
              _this2.openMap(false);
              _context3.next = 10;
              return cc.vv.gameData.awaitTime(.5);

             case 10:
              position = point.convertToWorldSpaceAR(cc.v2(0, 0));
              percentY = position.y / cc.winSize.height - .15;
              percentY < 0 ? percentY = 0 : percentY > 1 && (percentY = 1);
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(percentY);
              startPoint = mapInfo.currId - 1 <= 0 ? _this2.start_node : _this2.points[mapInfo.currId - 2];
              endPoint = _this2.points[mapInfo.currId - 1];
              _this2.role.active = true;
              _this2.role.position = startPoint.position;
              cc.vv.AudioManager.playEff("games/VampireCount/", "map_move", true);
              _this2.role.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
              _this2.role.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this2.role.getComponent(sp.Skeleton).setCompleteListener(null);
                _this2.role.active = false;
              });
              cc.tween(_this2.role).delay(.5).then(cc.jumpTo(1, endPoint.position.x, endPoint.position.y, 50, 1)).start();
              _context3.next = 24;
              return cc.vv.gameData.awaitTime(2);

             case 24:
              endPointCfg = cfg.MapConfig[mapInfo.currId - 1];
              if (!(endPointCfg.type === cfg.MapType.PickBooster)) {
                _context3.next = 55;
                break;
              }
              _spine = endPoint.getChildByName("spine").getComponent(sp.Skeleton);
              _spine.setAnimation(0, "animation1", false);
              _spine.addAnimation(0, "animation2", true);
              _context3.next = 31;
              return cc.vv.gameData.awaitTime(1);

             case 31:
              _this2.cutScenePick();
              _context3.next = 34;
              return cc.vv.gameData.awaitTime(1.8);

             case 34:
              script = cc.find("pick_game", _this2.node.parent).getComponent("VampireCount_PickGame");
              _context3.next = 37;
              return script.enterPickGame(endPointCfg.index, endPointCfg.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

             case 37:
              _this2.cutScenePick();
              _context3.next = 40;
              return cc.vv.gameData.awaitTime(1.8);

             case 40:
              cc.find("pick_game", _this2.node.parent).active = false;
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();
              result = script.getResult();
              num = 0;
              _iterator = _createForOfIteratorHelper(result.pickBoosterGame.choiceItems);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  choiceItem = _step.value;
                  choiceItem.type !== cfg.MapBoostType.Coin && num++;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!(0 === num)) {
                _context3.next = 52;
                break;
              }
              _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(percentY);
              _this2.map.y = cc.winSize.height;
              _context3.next = 53;
              break;

             case 52:
              return _context3.delegateYield(regeneratorRuntime.mark(function _callee() {
                var nextFreeGamePoint, _iterator2, _step2, _loop, _i3, _point, _pointCfg, _spine2;
                return regeneratorRuntime.wrap(function _callee$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    _context2.next = 2;
                    return cc.vv.gameData.awaitTime(.5);

                   case 2:
                    nextFreeGamePoint = _this2.points[endPointCfg.nextSlotsId - 1];
                    cc.find("common/num", nextFreeGamePoint).getComponent(cc.Label).string = num;
                    _iterator2 = _createForOfIteratorHelper(result.pickBoosterGame.choiceItems);
                    _context2.prev = 5;
                    _loop = regeneratorRuntime.mark(function _loop() {
                      var choiceItem, boosetervx, _position, endPos;
                      return regeneratorRuntime.wrap(function _loop$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          choiceItem = _step2.value;
                          if (!(choiceItem.type !== cfg.MapBoostType.Coin)) {
                            _context.next = 17;
                            break;
                          }
                          boosetervx = cc.instantiate(cc.find("boostervx", _this2.node));
                          boosetervx.active = true;
                          boosetervx.parent = _this2.node;
                          _position = nextFreeGamePoint.getChildByName("common").convertToWorldSpaceAR(cc.v2(0, 0));
                          _position = _this2.node.convertToNodeSpaceAR(_position);
                          boosetervx.position = _position;
                          boosetervx.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                          boosetervx.getComponent(sp.Skeleton).addAnimation(0, "animation3", true);
                          _context.next = 12;
                          return cc.vv.gameData.awaitTime(1);

                         case 12:
                          endPos = cc.find("common/tips_" + choiceItem.type + "/yes", nextFreeGamePoint).convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = _this2.node.convertToNodeSpaceAR(endPos);
                          cc.tween(boosetervx).to(.3, {
                            position: endPos
                          }).call(function() {
                            cc.find("common/tips_" + choiceItem.type + "/yes", nextFreeGamePoint).active = true;
                            boosetervx.x = _position.x;
                            boosetervx.getComponent(sp.Skeleton).setAnimation(0, "animation5", false);
                            boosetervx.getComponent(sp.Skeleton).setCompleteListener(function() {
                              boosetervx.removeFromParent();
                            });
                          }).start();
                          _context.next = 17;
                          return cc.vv.gameData.awaitTime(.2);

                         case 17:
                         case "end":
                          return _context.stop();
                        }
                      }, _loop);
                    });
                    _iterator2.s();

                   case 8:
                    if ((_step2 = _iterator2.n()).done) {
                      _context2.next = 12;
                      break;
                    }
                    return _context2.delegateYield(_loop(), "t0", 10);

                   case 10:
                    _context2.next = 8;
                    break;

                   case 12:
                    _context2.next = 17;
                    break;

                   case 14:
                    _context2.prev = 14;
                    _context2.t1 = _context2["catch"](5);
                    _iterator2.e(_context2.t1);

                   case 17:
                    _context2.prev = 17;
                    _iterator2.f();
                    return _context2.finish(17);

                   case 20:
                    for (_i3 = endPointCfg.nextSlotsId - 1; _i3 < _this2.points.length; _i3++) {
                      _point = _this2.points[_i3];
                      _pointCfg = cfg.MapConfig[_i3];
                      if (_pointCfg.type === cfg.MapType.SuperFreeGame) {
                        _spine2 = _point.getChildByName("spine").getComponent(sp.Skeleton);
                        _spine2.setAnimation(0, "animation" + _pointCfg.index + "_4", true);
                      }
                    }
                    _context2.next = 23;
                    return cc.vv.gameData.awaitTime(2);

                   case 23:
                    cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", true);
                    cc.tween(_this2.map).to(.5, {
                      y: cc.winSize.height
                    }).call(function() {
                      _this2.map.getComponent(cc.ScrollView).scrollToPercentVertical(percentY);
                    }).start();
                    _context2.next = 27;
                    return cc.vv.gameData.awaitTime(.5);

                   case 27:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee, null, [ [ 5, 14, 17, 20 ] ]);
              })(), "t0", 53);

             case 53:
              _context3.next = 63;
              break;

             case 55:
              if (!(endPointCfg.type === cfg.MapType.SuperFreeGame)) {
                _context3.next = 63;
                break;
              }
              for (_i4 = 0; _i4 < cfg.MapConfig.length; _i4++) {
                _pointCfg2 = cfg.MapConfig[_i4];
                if (_pointCfg2.type === cfg.MapType.SuperFreeGame) {
                  _point2 = _this2.points[_i4];
                  _spine3 = _point2.getChildByName("spine").getComponent(sp.Skeleton);
                  if (_i4 >= mapInfo.currId - 1) {
                    _spine3.setAnimation(0, "animation" + _pointCfg2.index + "_4", false);
                    if (mapInfo.currId === _i4 + 1) {
                      cc.vv.AudioManager.playEff("games/VampireCount/", "map_node", true);
                      _spine3.addAnimation(0, "animation" + _pointCfg2.index + "_1", false);
                      _spine3.addAnimation(0, "animation" + _pointCfg2.index + "_3", true);
                    } else _spine3.addAnimation(0, "animation" + _pointCfg2.index + "_2", true);
                  }
                }
              }
              _context3.next = 59;
              return cc.vv.gameData.awaitTime(5);

             case 59:
              cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", true);
              cc.tween(_this2.map).to(.5, {
                y: cc.winSize.height
              }).start();
              _context3.next = 63;
              return cc.vv.gameData.awaitTime(.5);

             case 63:
             case "end":
              return _context3.stop();
            }
          }, _callee2);
        }))();
      },
      cutScenePick: function cutScenePick() {
        cc.vv.AudioManager.playEff("games/VampireCount/", "transition3", true);
        var pick_qieping = cc.find("pick_qieping", this.node.parent);
        pick_qieping.active = true;
        var spine = pick_qieping.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          pick_qieping.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  VampireCount_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56fa9xaHTlG068ymE7Yx4be", "VampireCount_PickGame");
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
        bg: cc.Node,
        top_bg: cc.Node,
        pick_times: sp.Skeleton,
        tips: sp.Skeleton,
        role: sp.Skeleton,
        items: [ cc.Node ],
        black_bg: cc.Node,
        _haveOpenReward: [],
        _canSelect: true,
        _index: 1,
        _result: null,
        _successCallback: null,
        _unlockBooster: []
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
      },
      changeBg: function changeBg(index, times) {
        this._index = index;
        var atlas = cc.vv.gameData.GetAtlasByName("pick");
        this.top_bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme214_pick_top" + (4 === index ? 3 : index));
        this.pick_times.setAnimation(0, "animation" + (times - 1), true);
        this.tips.setAnimation(0, "animation" + index, true);
        for (var i = 1; i < 9; i++) {
          var item = cc.find("item_" + i, this.node);
          var spine = cc.find("spine", item).getComponent(sp.Skeleton);
          spine.node.active = true;
          spine.setAnimation(0, "animation" + index + "_1", true);
          for (var j = 1; j < 7; j++) {
            var result = item.getChildByName("result_" + j);
            result.active = false;
            result.color = cc.Color.WHITE;
            var _iterator = _createForOfIteratorHelper(result.children), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var child = _step.value;
                child.color = cc.Color.WHITE;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      },
      enterPickGame: function enterPickGame(index, times, pickBoosterGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                _this._successCallback = success;
                _this.node.active = true;
                _this.reset();
                _this.changeBg(index, times);
                for (var i = 0; i < pickBoosterGame.choiceIdxs.length; i++) {
                  var _index = pickBoosterGame.choiceIdxs[i];
                  var item = cc.find("item_" + _index, _this.node);
                  _this.showReward(item, false, pickBoosterGame.choiceItems[i]);
                  _this._haveOpenReward.push(_index);
                }
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("pick_bgm");
                var _loop = function _loop(_i) {
                  var item = cc.find("item_" + _i, _this.node);
                  item.off(cc.Node.EventType.TOUCH_END);
                  item.on(cc.Node.EventType.TOUCH_END, function() {
                    item.stopAllActions();
                    _this.onClickItem(_i);
                  });
                };
                for (var _i = 1; _i < 9; _i++) _loop(_i);
                _this.setAutoPlay();
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onClickItem: function onClickItem(i) {
        var item = cc.find("item_" + i, this.node);
        item.off(cc.Node.EventType.TOUCH_END);
        if (!this._canSelect) return;
        if (this._haveOpenReward.indexOf(i) >= 0) return;
        for (var _i2 = 1; _i2 < 9; _i2++) {
          var _item = cc.find("item_" + _i2, this.node);
          _item.stopAllActions();
        }
        this._canSelect = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 1;
        req.data.choiceId = i;
        cc.vv.NetManager.send(req);
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i < 9; i++) {
          var item = cc.find("item_" + i, this.node);
          0 != this._haveOpenReward.indexOf(i) && list.push(i);
        }
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(cc.find("item_" + list[randomIdx], this.node), function() {
          self.onClickItem(list[randomIdx]);
        });
      },
      reset: function reset() {
        this._haveOpenReward = [];
        this._result = null;
        this._index = 1;
        this._canSelect = true;
        this._unlockBooster = [];
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cfg, data, item, resultIndex, i, _item2, _item3;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(200 !== msg.code)) {
                _context2.next = 3;
                break;
              }
              _this2._canSelect = true;
              return _context2.abrupt("return");

             case 3:
              cfg = cc.vv.gameData.getGameCfg();
              data = msg.data;
              _this2._result = data;
              _this2._haveOpenReward.push(data.choiceId);
              data.choiceItem.type !== cfg.MapBoostType.Coin && _this2._unlockBooster.push(data.choiceItem.type);
              if (!data.pickBoosterGame.isEnd) {
                _context2.next = 23;
                break;
              }
              item = _this2.items[data.choiceId - 1];
              _this2.showReward(item, false, data.choiceItem);
              _context2.next = 13;
              return cc.vv.gameData.awaitTime(.8);

             case 13:
              cc.vv.AudioManager.playEff("games/VampireCount/", "pick_end", true);
              resultIndex = 0;
              for (i = 0; i < _this2.items.length; i++) if (-1 === _this2._haveOpenReward.indexOf(i + 1)) {
                _item2 = _this2.items[i];
                _this2.showReward(_item2, true, data.pickBoosterGame.totalItems[resultIndex]);
                resultIndex++;
              }
              _context2.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              _context2.next = 20;
              return _this2.popResult();

             case 20:
              _this2._successCallback();
              _context2.next = 27;
              break;

             case 23:
              _this2._canSelect = true;
              _item3 = _this2.items[data.choiceId - 1];
              _this2.showReward(_item3, false, data.choiceItem);
              _this2.setAutoPlay();

             case 27:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getResult: function getResult() {
        return this._result;
      },
      showReward: function showReward(item, isGray, reward) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cfg, spine, result_node, _iterator2, _step2, child;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cfg = cc.vv.gameData.getGameCfg();
              spine = item.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "animation" + _this3._index + "_2");
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              isGray || (reward.type === cfg.MapBoostType.Coin ? cc.vv.AudioManager.playEff("games/VampireCount/", "pick_coin", true) : cc.vv.AudioManager.playEff("games/VampireCount/", "pick_booster", true));
              _context3.next = 8;
              return cc.vv.gameData.awaitTime(.8);

             case 8:
              result_node = cc.find("result_" + reward.type, item);
              if (result_node) {
                result_node.active = true;
                result_node.scale = 2.1;
                result_node.color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
                _iterator2 = _createForOfIteratorHelper(result_node.children);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    child = _step2.value;
                    child.color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                reward.type === cfg.MapBoostType.Coin && (cc.find("coin", result_node).getComponent(cc.Label).string = Global.formatNumShort(reward.coin, 0));
                cc.tween(result_node).to(.5, {
                  scale: 2
                }, {
                  easing: "backOut"
                }).start();
              }

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      popResult: function popResult() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function(success) {
                var cfg = cc.vv.gameData.getGameCfg();
                if (_this4._result) {
                  var boosterNum = 0;
                  var _iterator3 = _createForOfIteratorHelper(_this4._result.pickBoosterGame.choiceItems), _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      var item = _step3.value;
                      item.type !== cfg.MapBoostType.Coin && boosterNum++;
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  cc.vv.AudioManager.playEff("games/VampireCount/", "pick_end_show", true);
                  var animationIndex = [ 2, 1, 3 ];
                  _this4.black_bg.active = true;
                  var node = cc.find("booster_result_" + boosterNum, _this4.node);
                  node.active = true;
                  var spine = node.getComponent(sp.Skeleton);
                  spine.setAnimation(0, "animation" + animationIndex[boosterNum], false);
                  spine.addAnimation(0, "animation" + animationIndex[boosterNum] + "_1", true);
                  var coin = cc.find("coin", node);
                  coin.scale = 0;
                  Global.doRoallNumEff(coin, 0, _this4._result.pickBoosterGame.winCoin, 1.5, null, null, 0, true);
                  cc.tween(coin).delay(.2).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                  var btn_collect = cc.find("btn_collect", node);
                  btn_collect.scale = 0;
                  cc.tween(btn_collect).delay(.4).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                  var booster_1 = cc.find("booster_1", node);
                  if (booster_1) {
                    booster_1.scale = 0;
                    var atlas = cc.vv.gameData.GetAtlasByName("popup");
                    booster_1.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme214_pop_booster" + _this4._unlockBooster[0]);
                    cc.tween(booster_1).delay(.3).to(.5, {
                      scale: 1 === boosterNum ? 1 : .8
                    }, {
                      easing: "backOut"
                    }).start();
                  }
                  var booster_2 = cc.find("booster_2", node);
                  if (booster_2) {
                    var _atlas = cc.vv.gameData.GetAtlasByName("popup");
                    booster_1.getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame("theme214_pop_booster" + _this4._unlockBooster[1]);
                    booster_2.scale = 0;
                    cc.tween(booster_2).delay(.3).to(.5, {
                      scale: 1 === boosterNum ? 1 : .8
                    }, {
                      easing: "backOut"
                    }).start();
                  }
                  var index_1 = cc.find("index_1", node);
                  if (index_1) {
                    index_1.scale = 0;
                    cc.tween(index_1).delay(.3).to(.5, {
                      scale: .8
                    }, {
                      easing: "backOut"
                    }).start();
                  }
                  var index_2 = cc.find("index_2", node);
                  if (index_2) {
                    index_2.scale = 0;
                    cc.tween(index_2).delay(.3).to(.5, {
                      scale: .8
                    }, {
                      easing: "backOut"
                    }).start();
                  }
                  var func = function func() {
                    cc.vv.AudioManager.playEff("games/VampireCount/", "click", true);
                    cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(_this4._result.pickBoosterGame.winCoin);
                    btn_collect.off("click");
                    cc.tween(coin).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).start();
                    cc.tween(btn_collect).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).start();
                    booster_1 && cc.tween(booster_1).to(.5, {
                      scale: 0
                    }, {
                      easing: "backOut"
                    }).start();
                    booster_2 && cc.tween(booster_2).to(.5, {
                      scale: 0
                    }, {
                      easing: "backOut"
                    }).start();
                    index_1 && cc.tween(index_1).to(.5, {
                      scale: 0
                    }, {
                      easing: "backOut"
                    }).start();
                    index_2 && cc.tween(index_2).to(.5, {
                      scale: 0
                    }, {
                      easing: "backOut"
                    }).start();
                    spine.setAnimation(0, "animation" + animationIndex[boosterNum] + "_2", false);
                    spine.setCompleteListener(function() {
                      spine.setCompleteListener(null);
                      _this4.black_bg.active = false;
                      node.active = false;
                      success();
                    });
                  };
                  cc.vv.gameData.checkAutoPlay(btn_collect, func);
                  btn_collect.on("click", function() {
                    btn_collect.stopAllActions();
                    func();
                  });
                }
              }));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, false, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  VampireCount_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5a7eRDRwZDba/3+IefZjsl", "VampireCount_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        gray_font: cc.Font,
        yellow_font: cc.Font
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (node) {
          var lockNode = cc.find("lock", node);
          var lockTips = cc.find("image", lockNode);
          var unlockNode = cc.find("unlock", node);
          var unlockTips = cc.find("image", unlockNode);
          var spine = cc.find("jp_suo", node).getComponent(sp.Skeleton);
          var text = cc.find("lbl_num", node).getComponent(cc.Label);
          if (bLock) {
            text.font = this.gray_font;
            if (bInit) {
              lockNode.active = true;
              unlockNode.active = false;
              lockTips.scale = 0;
            } else {
              cc.vv.AudioManager.playEff("games/VampireCount/", "jp_lock", true);
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation" + (4 - poolType) + "_2", false);
              lockNode.active = true;
              unlockNode.active = false;
              lockTips.scale = 0;
              cc.tween(lockTips).to(.1, {
                scale: .7
              }, {
                easing: "backOut"
              }).delay(2).to(.1, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
            }
          } else {
            text.font = this.yellow_font;
            if (bInit) {
              lockNode.active = false;
              unlockNode.active = true;
              unlockTips.scale = 0;
            } else {
              cc.vv.AudioManager.playEff("games/VampireCount/", "jp_unlock", true);
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation" + (4 - poolType) + "_1", false);
              lockNode.active = false;
              unlockNode.active = true;
              unlockTips.scale = 0;
              cc.tween(unlockTips).to(.1, {
                scale: .7
              }, {
                easing: "backOut"
              }).delay(2).to(.1, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  VampireCount_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f3b5iVn5lP94rrLFPHEVSm", "VampireCount_Reel");
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
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
        this.checkPumpkinMan();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.extraSpinId) {
            cc.vv.AudioManager.playEff("games/VampireCount/", "extra_free", true);
            item.playStopAnimation();
          }
        }
      },
      checkPumpkinMan: function checkPumpkinMan() {
        var _this = this;
        var cards = cc.vv.gameData.getGameInfo().resultCards;
        var _iterator = _createForOfIteratorHelper(this._symbols), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var symbol = _step.value;
            if (symbol.GetShowId() === this._cfg.pumpkinManId && symbol.GetSymbolIdx() > 0 && symbol.GetSymbolIdx() < cards.length / this._cfg.col - 1 && cc.vv.gameData.getGameInfo().pumpkinGame) {
              cc.vv.AudioManager.playEff("games/VampireCount/", "bonus_landing", true);
              symbol.playStopAnimation();
              cc.vv.gameData.getGameInfo().pumpkinGame["double"] && function() {
                var pumpkin = cc.find("pumpkin_" + (_this._reelIdx + 1), _this.node.parent.parent);
                var info = cc.vv.gameData.GetSlotsScript().getPumpkinInfo()[_this._reelIdx];
                if (pumpkin) {
                  var double_spine = cc.find("double", pumpkin).getComponent(sp.Skeleton);
                  double_spine.clearTracks();
                  double_spine.setToSetupPose();
                  double_spine.setAnimation(0, "animation3", false);
                  double_spine.setCompleteListener(function(track) {
                    var name = track.animation ? track.animation.name : "";
                    if ("animation3" === name) {
                      Global.doRoallNumEff(cc.find("coin", pumpkin), info.coin, 2 * info.coin, 1, null, null, 1, true, true);
                      info.coin *= 2;
                    }
                  });
                }
              }();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      AppendSymbol: function AppendSymbol(symbolArray, dir) {
        for (var i = 0; i < symbolArray.length; i++) {
          var node = cc.instantiate(this._symbolTemplete);
          node.parent = this._holderNode;
          var scp = node.addComponent(this._cfg.scripts.Symbols);
          scp.SetSymbolReelIdx(this._reelIdx);
          if (1 === dir) {
            var idx = -1 - i;
            node.position = this.GetSymbolPosByRow(idx);
            scp.Init(idx, this._topAniNode);
            this._symbols.unshift(scp);
          } else if (2 === dir) {
            var _idx = this._symbols.length - 1;
            scp.Init(_idx, this._topAniNode);
            this._symbols.splice(_idx, 0, scp);
          }
          scp.ShowById(symbolArray[i].id, symbolArray[i].data);
        }
        2 === dir && this.ReLayOut();
      },
      deleteSymbol: function deleteSymbol(index) {
        var symbol = this._symbols[index];
        this._symbols.splice(index, 1);
        symbol.setAnimationToTop(false);
        symbol.ShowKuang(false);
        symbol.node.destroy();
      },
      clearLastSymbol: function clearLastSymbol() {
        var symbol = this._symbols[this._symbols.length - 1];
        if (symbol) {
          symbol.setAnimationToTop(false);
          symbol.ShowKuang(false);
        }
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (0 === this._reelIdx) {
          var left_bg = cc.find("reels_frame/left_bg", this.node.parent.parent);
          left_bg && objs.push(left_bg);
          var right_bg = cc.find("reels_frame/right_bg", this.node.parent.parent);
          right_bg && objs.push(right_bg);
          for (var i = 1; i < 5; i++) {
            var line = cc.find("reels_frame/line_" + i, this.node.parent.parent);
            line && objs.push(line);
          }
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
        }
        return objs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  VampireCount_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c1caSN+nNIvKr3GiCe2zh9", "VampireCount_Slots");
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
      properties: {
        _wheel_script: null,
        _curFreeLevel: 0,
        _pumpkinInfo: null,
        _leftSpiderCount: 0,
        _rightSpiderCount: 0
      },
      Init: function Init() {
        var _this = this;
        this._super();
        this.setPumpkinInfo(cc.vv.gameData.getDeskInfo().bonusInfos);
        this._pumpkinInfo = cc.vv.gameData.getDeskInfo().bonusInfos[cc.vv.gameData.GetBetIdx() - 1];
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        script.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          if ("animation1" === name) {
            script.clearTracks();
            script.setToSetupPose();
            script.setAnimation(0, "animation2", true);
          }
        });
        if (deskInfo.needBet <= deskInfo.currmult) {
          cc.vv.AudioManager.playEff("games/VampireCount/", "unlock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation3", false);
        } else {
          cc.vv.AudioManager.playEff("games/VampireCount/", "lock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation1", false);
        }
        this.updateCollectProgress(deskInfo.mapInfo, false);
        var touch_map = cc.find("collect_node/spine_map/touch", this.node);
        touch_map.off(cc.Node.EventType.TOUCH_END);
        touch_map.on(cc.Node.EventType.TOUCH_END, function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          _this._bottomScript.ShowBtnsByState("moveing_1");
          cc.find("mapControl", _this.node.parent).getComponent("VampireCount_Map").initMap(_this._gameInfo ? _this._gameInfo.mapInfo : deskInfo.mapInfo);
          cc.find("mapControl", _this.node.parent).getComponent("VampireCount_Map").openMap(true);
        });
      },
      getPumpkinInfo: function getPumpkinInfo() {
        return this._pumpkinInfo;
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, _iterator, _step, reel, _iterator2, _step2, _reel, _iterator3, _step3, _reel2, spine_finish, script, endPointCfg, winCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 10;
                break;
              }
              if (2 === deskInfo.mapInfo.state) if (-1 !== deskInfo.mapInfo.nextUnlockBoosters.indexOf(_this2._cfg.MapBoostType.AddRow)) {
                _iterator = _createForOfIteratorHelper(_this2._reels);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    reel = _step.value;
                    reel.AddCount(4, .01);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _iterator2 = _createForOfIteratorHelper(_this2._reels);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    _reel = _step2.value;
                    _reel.AddCount(3, .01);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } else {
                _iterator3 = _createForOfIteratorHelper(_this2._reels);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    _reel2 = _step3.value;
                    _reel2.AddCount(3, .01);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              _context.next = 6;
              return cc.vv.gameData.awaitTime(.2);

             case 6:
              _this2.ShowGameview(true);
              _this2.CanDoNextRound();
              _context.next = 30;
              break;

             case 10:
              _this2.ShowGameview(false);
              if (!(1 === deskInfo.mapInfo.state)) {
                _context.next = 30;
                break;
              }
              _context.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              cc.vv.AudioManager.playEff("games/VampireCount/", "meter_full", true);
              spine_finish = cc.find("collect_node/progress/scale_node/finish", _this2.node).getComponent(sp.Skeleton);
              spine_finish.node.active = true;
              spine_finish.setToSetupPose();
              spine_finish.setAnimation(0, "animation2", false);
              spine_finish.setCompleteListener(function() {
                spine_finish.node.active = false;
              });
              _context.next = 22;
              return cc.vv.gameData.awaitTime(1);

             case 22:
              script = cc.find("mapControl", _this2.node.parent).getComponent("VampireCount_Map");
              _context.next = 25;
              return script.showMap(deskInfo.mapInfo);

             case 25:
              endPointCfg = _this2._cfg.MapConfig[deskInfo.mapInfo.currId - 1];
              if (!(endPointCfg.type === _this2._cfg.MapType.PickBooster)) {
                _context.next = 30;
                break;
              }
              winCoin = cc.find("pick_game", _this2.node.parent).getComponent("VampireCount_PickGame").getResult().pickBoosterGame.winCoin;
              _context.next = 30;
              return _this2.ShowBottomWin(winCoin, winCoin, true, function() {
                _this2.CanDoNextRound();
              });

             case 30:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cards, spine, stopTime, i, j, _i, _j;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._gameInfo = msg;
              cards = msg.resultCards;
              _this3.SetSlotsResult(msg.bonusResultCards.length > 0 ? msg.bonusResultCards[0].cards : cards);
              _this3.SetReelStateInfo(cards);
              if (_this3._gameInfo.randEvent && !(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _this3.SetStopTime(3);
                cc.vv.AudioManager.playEff("games/VampireCount/", "anticipation2", true);
                spine = cc.find("jilidonghua", _this3.node).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setToSetupPose();
                spine.setAnimation(0, "animation1", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                });
              }
              if (!(2 === _this3._gameInfo.mapInfo.state && cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime() === 1)) {
                _context2.next = 33;
                break;
              }
              stopTime = 0;
              -1 !== _this3._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this3._cfg.MapBoostType.ExtraWild) && (stopTime += 3);
              -1 !== _this3._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this3._cfg.MapBoostType.ExtraBonus) && (stopTime += 3);
              stopTime > 0 && _this3.SetStopTime(stopTime);
              if (!(-1 !== _this3._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this3._cfg.MapBoostType.ExtraWild))) {
                _context2.next = 21;
                break;
              }
              cc.find("black_bg", _this3.node).active = true;
              i = 0;

             case 13:
              if (!(i < 2)) {
                _context2.next = 21;
                break;
              }
              cc.vv.AudioManager.playEff("games/VampireCount/", "wild_add", true);
              for (j = 0; j < cards.length; j++) Math.random() >= .3 && function() {
                var spine = cc.instantiate(cc.find("wild_01", _this3.node));
                spine.active = true;
                spine.parent = cc.find("wild_animation", _this3.node);
                spine.position = cc.v2(j % 5 * 112 - 224, 103 * Math.floor(j / 5) + 51.5);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine.removeFromParent();
                });
              }();
              _context2.next = 18;
              return cc.vv.gameData.awaitTime(1.5);

             case 18:
              i++;
              _context2.next = 13;
              break;

             case 21:
              if (!(-1 !== _this3._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this3._cfg.MapBoostType.ExtraBonus))) {
                _context2.next = 32;
                break;
              }
              cc.find("black_bg", _this3.node).active = true;
              _i = 0;

             case 24:
              if (!(_i < 3)) {
                _context2.next = 32;
                break;
              }
              cc.vv.AudioManager.playEff("games/VampireCount/", "coin_add", true);
              for (_j = 0; _j < cards.length; _j++) Math.random() >= .6 && function() {
                var spine = cc.instantiate(cc.find("jinbi_01", _this3.node));
                spine.active = true;
                spine.parent = cc.find("wild_animation", _this3.node);
                spine.position = cc.v2(_j % 5 * 112 - 224, 103 * Math.floor(_j / 5) + 51.5);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine.removeFromParent();
                });
              }();
              _context2.next = 29;
              return cc.vv.gameData.awaitTime(.5);

             case 29:
              _i++;
              _context2.next = 24;
              break;

             case 32:
              cc.find("black_bg", _this3.node).active = false;

             case 33:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
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
            if (cards[i] === this._cfg.bonusId) {
              var index = this._gameInfo.bonusResultCards[0].bonusIdxs.indexOf(i + 1);
              -1 !== index && (res.data = this._gameInfo.bonusResultCards[0].bonusItems[index]);
            }
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.GetShowId() !== this._cfg.scatterId && symbol.ShowKuang();
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin, totalWinCoin, updateUserCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this4.collectCoin();

             case 2:
              _context4.next = 4;
              return _this4.collectSymbol();

             case 4:
              _this4.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              updateUserCoin = true;
              if (_this4._gameInfo.pumpkinGame) {
                winCoin -= _this4._gameInfo.pumpkinGame.winCoin;
                totalWinCoin -= _this4._gameInfo.pumpkinGame.winCoin;
                updateUserCoin = false;
              }
              _this4.ShowBottomWin(winCoin, totalWinCoin, updateUserCoin, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var symbol, spine_finish, script, endPointCfg, _winCoin, addCount, _iterator4, _step4, reel;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    if (!_this4._gameInfo.pumpkinGame) {
                      _context3.next = 7;
                      break;
                    }
                    _this4._bottomScript.ShowBtnsByState("moveing_1");
                    _this4._gameInfo.pumpkinGame.idxs.sort(function(a, b) {
                      return a - b;
                    });
                    symbol = _this4.GetSymbolByIdx(_this4._gameInfo.pumpkinGame.idxs[1]);
                    if (!(symbol && symbol.GetShowId() === _this4._cfg.pumpkinManId)) {
                      _context3.next = 7;
                      break;
                    }
                    _context3.next = 7;
                    return new Promise(function(success) {
                      symbol.playTriggerAnimation(function(node) {
                        _this4.triggerPumpkinGame(node, success);
                      });
                    });

                   case 7:
                    if (!(0 !== _this4._gameInfo.mapInfo.state && _this4._gameInfo.mapInfo.progressData.currCnt > 0)) {
                      _context3.next = 56;
                      break;
                    }
                    _this4._bottomScript.ShowBtnsByState("moveing_1");
                    _context3.next = 11;
                    return cc.vv.gameData.awaitTime(.5);

                   case 11:
                    cc.vv.AudioManager.playEff("games/VampireCount/", "meter_full", true);
                    spine_finish = cc.find("collect_node/progress/scale_node/finish", _this4.node).getComponent(sp.Skeleton);
                    spine_finish.node.active = true;
                    spine_finish.setToSetupPose();
                    spine_finish.setAnimation(0, "animation2", false);
                    spine_finish.setCompleteListener(function() {
                      spine_finish.node.active = false;
                    });
                    _context3.next = 19;
                    return cc.vv.gameData.awaitTime(1);

                   case 19:
                    script = cc.find("mapControl", _this4.node.parent).getComponent("VampireCount_Map");
                    _context3.next = 22;
                    return script.showMap(_this4._gameInfo.mapInfo);

                   case 22:
                    endPointCfg = _this4._cfg.MapConfig[_this4._gameInfo.mapInfo.currId - 1];
                    if (!(endPointCfg.type === _this4._cfg.MapType.PickBooster)) {
                      _context3.next = 30;
                      break;
                    }
                    _this4.clearCollectProgress();
                    _winCoin = cc.find("pick_game", _this4.node.parent).getComponent("VampireCount_PickGame").getResult().pickBoosterGame.winCoin;
                    _context3.next = 28;
                    return _this4.ShowBottomWin(_winCoin, _winCoin, true, function() {
                      _this4.CanDoNextRound();
                    });

                   case 28:
                    _context3.next = 54;
                    break;

                   case 30:
                    if (!(endPointCfg.type === _this4._cfg.MapType.SuperFreeGame)) {
                      _context3.next = 54;
                      break;
                    }
                    _context3.next = 33;
                    return _this4.popMapFreeDialog(_this4._gameInfo.mapInfo);

                   case 33:
                    _this4.cutSceneBat();
                    _context3.next = 36;
                    return cc.vv.gameData.awaitTime(2);

                   case 36:
                    _this4.ShowGameview(true);
                    cc.find("LMSlots_PrizePool_1", _this4.node.parent).active = false;
                    _this4.clearCollectProgress();
                    addCount = -1 === _this4._gameInfo.mapInfo.nextUnlockBoosters.indexOf(_this4._cfg.MapBoostType.AddRow) ? 3 : 4;
                    _iterator4 = _createForOfIteratorHelper(_this4._reels);
                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                        reel = _step4.value;
                        reel.AddCount(addCount, .01);
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                    cc.find("reels_frame/left_20", _this4.node).active = false;
                    cc.find("reels_frame/right_20", _this4.node).active = false;
                    cc.find("reels_frame/left_56", _this4.node).active = 3 === addCount;
                    cc.find("reels_frame/right_56", _this4.node).active = 3 === addCount;
                    cc.find("reels_frame/left_68", _this4.node).active = 4 === addCount;
                    cc.find("reels_frame/right_68", _this4.node).active = 4 === addCount;
                    cc.find("xixuegui", _this4.node.parent).active = false;
                    _context3.next = 51;
                    return cc.vv.gameData.awaitTime(2);

                   case 51:
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playBgm("free_bgm");
                    _this4.CanDoNextRound();

                   case 54:
                    _context3.next = 57;
                    break;

                   case 56:
                    _this4.CheckEnterFreeGame() ? _this4.triggerFreeGame() : _this4.CheckExtraFreeGame() ? _this4.triggerExtraFreeGame() : _this4.CheckExitFreeGame() ? _this4.triggerExitFreeGame() : _this4.CanDoNextRound();

                   case 57:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("collect_node", this.node).active = !bFree;
        cc.find("reels_frame/left_20", this.node).active = !bFree;
        cc.find("reels_frame/right_20", this.node).active = !bFree;
        cc.find("reels_frame/left_56", this.node).active = bFree;
        cc.find("reels_frame/right_56", this.node).active = bFree;
      },
      collectSymbol: function collectSymbol() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var sjt_m1, haveCollect, i, card, symbol, particle, startPos, endPos, spine_sjt_b;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");

             case 2:
              if (!(0 === _this5._gameInfo.mapInfo.progressData.currCnt)) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return");

             case 4:
              sjt_m1 = cc.find("collect_node/sjt_m1", _this5.node);
              haveCollect = false;
              for (i = 0; i < _this5._gameInfo.resultCards.length; i++) {
                card = _this5._gameInfo.resultCards[i];
                if (card === _this5._cfg.collectSymbolId) {
                  symbol = _this5.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    haveCollect = true;
                    particle = cc.instantiate(cc.find("particle_fly", _this5.node.parent));
                    particle.active = true;
                    particle.parent = _this5.node.parent;
                    startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                    particle.position = startPos;
                    endPos = sjt_m1.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).removeSelf().start();
                  }
                }
              }
              if (!haveCollect) {
                _context5.next = 17;
                break;
              }
              cc.vv.AudioManager.playEff("games/VampireCount/", "symbol_fly", true);
              cc.tween(sjt_m1).delay(.5).call(function() {
                var spine = sjt_m1.getComponent(sp.Skeleton);
                spine.clearTracks();
                spine.setToSetupPose();
                spine.setAnimation(0, "animation2", false);
                spine.setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  if ("animation2" === name) {
                    spine.clearTracks();
                    spine.setToSetupPose();
                    spine.setAnimation(0, "animation1", true);
                  }
                });
              }).start();
              spine_sjt_b = cc.find("collect_node/sjt_b", _this5.node).getComponent(sp.Skeleton);
              spine_sjt_b.node.active = true;
              cc.tween(spine_sjt_b.node).delay(.5).call(function() {
                spine_sjt_b.setToSetupPose();
                spine_sjt_b.setAnimation(0, "animation", false);
                spine_sjt_b.setCompleteListener(function() {
                  spine_sjt_b.node.active = false;
                });
              }).start();
              _context5.next = 15;
              return cc.vv.gameData.awaitTime(.5);

             case 15:
              _context5.next = 17;
              return _this5.updateCollectProgress(_this5._gameInfo.mapInfo, true);

             case 17:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      triggerPumpkinGame: function triggerPumpkinGame(node, success) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var wheel, result_node, reelIndex, pumpkinIndex, pumpkin, info, spine, coin, winCoin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              wheel = cc.find("wheel", node);
              wheel.active = true;
              wheel.angle = 0;
              _context8.next = 5;
              return _this6._rotateWheel(_this6._gameInfo.pumpkinGame.wheel.id - 1, wheel);

             case 5:
              cc.find("zhongjiang", wheel).active = true;
              _context8.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              cc.find("zhongjiang", wheel).active = false;
              result_node = cc.instantiate(cc.find("rotate_node/index_" + _this6._gameInfo.pumpkinGame.wheel.id, wheel));
              result_node.parent = cc.find("result_parent", wheel);
              result_node.position = cc.v2(0, 0);
              result_node.angle = 0;
              reelIndex = (_this6._gameInfo.pumpkinGame.idxs[1] - 1) % _this6._cfg.col;
              pumpkinIndex = reelIndex + 1;
              pumpkin = cc.find("pumpkin_" + pumpkinIndex, _this6.node);
              cc.tween(result_node).to(.2, {
                scale: 1
              }).call(function() {
                var particle = cc.find("zhuanpanlizi", wheel);
                particle.active = true;
                var endPos = cc.find("pumpkin_" + pumpkinIndex, _this6.node).convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = wheel.convertToNodeSpaceAR(endPos);
                cc.vv.AudioManager.playEff("games/VampireCount/", "pot_multi", true);
                cc.tween(particle).to(.5, {
                  position: endPos
                }).call(function() {
                  particle.active = false;
                  particle.y = 65;
                  cc.vv.AudioManager.playEff("games/VampireCount/", "pot_recive", true);
                  var spine = pumpkin.getComponent(sp.Skeleton);
                  spine.clearTracks();
                  spine.setToSetupPose();
                  spine.setAnimation(0, "animation2", false);
                }).start();
              }).start();
              _context8.next = 19;
              return cc.vv.gameData.awaitTime(1.5);

             case 19:
              info = _this6._pumpkinInfo[reelIndex];
              Global.doRoallNumEff(cc.find("coin", pumpkin), info.coin, _this6._gameInfo.pumpkinGame.winCoin, 1, null, null, 1, true, true);
              _context8.next = 23;
              return cc.vv.gameData.awaitTime(1.5);

             case 23:
              cc.tween(result_node).to(.3, {
                scale: .8
              }).removeSelf().start();
              _context8.next = 26;
              return cc.vv.gameData.awaitTime(.3);

             case 26:
              wheel.getChildByName("rotate_node").angle += 2160;
              cc.tween(wheel).to(.3, {
                scale: .7
              }).start();
              cc.tween(wheel.getChildByName("rotate_node")).to(.3, {
                angle: 0
              }).start();
              _context8.next = 31;
              return cc.vv.gameData.awaitTime(.3);

             case 31:
              wheel.active = false;
              cc.vv.AudioManager.playEff("games/VampireCount/", "pot_congratulate", true);
              spine = pumpkin.getComponent(sp.Skeleton);
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation3", false);
              coin = cc.find("coin", pumpkin);
              cc.tween(coin).to(.2, {
                scale: 0
              }).start();
              winCoin = _this6._gameInfo.pumpkinGame.jackpotWheel ? _this6._gameInfo.pumpkinGame.winCoin - _this6._gameInfo.pumpkinGame.jackpot.value : _this6._gameInfo.pumpkinGame.winCoin;
              _this6.ShowBottomWin(winCoin, winCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                var jackpot_wheel_spine, free_dialog, zhuanpanzhongjiangtanchuang, _spine;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                   case 0:
                    if (_this6._gameInfo.pumpkinGame.jackpotWheel) {
                      jackpot_wheel_spine = cc.find("wheel", pumpkin).getComponent(sp.Skeleton);
                      jackpot_wheel_spine.setAnimation(0, "animation3", false);
                      free_dialog = cc.find("free_dialog", _this6.node.parent);
                      free_dialog.active = true;
                      zhuanpanzhongjiangtanchuang = cc.find("zhuanpanzhongjiangtanchuang", free_dialog);
                      zhuanpanzhongjiangtanchuang.active = true;
                      _spine = zhuanpanzhongjiangtanchuang.getComponent(sp.Skeleton);
                      _spine.setAnimation(0, "animation1", false);
                      _spine.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) switch (_context6.prev = _context6.next) {
                           case 0:
                            _spine.setCompleteListener(null);
                            zhuanpanzhongjiangtanchuang.active = false;
                            free_dialog.active = false;
                            _this6.cutSceneLight();
                            _context6.next = 6;
                            return cc.vv.gameData.awaitTime(2);

                           case 6:
                            cc.find("wheel/LMSlots_PrizePool_1", _this6.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                              prizeType: 0,
                              pauseNum: _this6._gameInfo.pumpkinGame.jackpotValues[0]
                            }, {
                              prizeType: 1,
                              pauseNum: _this6._gameInfo.pumpkinGame.jackpotValues[1]
                            }, {
                              prizeType: 2,
                              pauseNum: _this6._gameInfo.pumpkinGame.jackpotValues[2]
                            }, {
                              prizeType: 3,
                              pauseNum: _this6._gameInfo.pumpkinGame.jackpotValues[3]
                            } ]);
                            _context6.next = 9;
                            return new Promise(function(success) {
                              cc.find("wheel", _this6.node.parent).getComponent("VampireCount_Wheel").enterWheelGame(success, _this6._gameInfo.pumpkinGame.jackpot);
                            });

                           case 9:
                            _this6.cutSceneLight();
                            _context6.next = 12;
                            return cc.vv.gameData.awaitTime(2.5);

                           case 12:
                            cc.find("wheel", _this6.node.parent).active = false;
                            Global.SlotsSoundMgr.stopBgm();
                            Global.SlotsSoundMgr.playNormalBgm();
                            _context6.next = 17;
                            return cc.vv.gameData.awaitTime(1);

                           case 17:
                            _this6.ShowBottomWin(_this6._gameInfo.pumpkinGame.jackpot.value, _this6._gameInfo.pumpkinGame.winCoin, true, function() {
                              success();
                            });

                           case 18:
                           case "end":
                            return _context6.stop();
                          }
                        }, _callee6);
                      })));
                    } else success();

                   case 1:
                   case "end":
                    return _context7.stop();
                  }
                }, _callee7);
              })));
              _context8.next = 43;
              return cc.vv.gameData.awaitTime(2);

             case 43:
              _this6._pumpkinInfo = _this6._gameInfo.bonusInfo;
              coin.getComponent(cc.Label).string = Global.formatNumShort(_this6._pumpkinInfo[reelIndex].coin);
              coin.scale = 1;

             case 46:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      cutSceneLight: function cutSceneLight() {
        var wuyun = cc.find("wuyun", this.node.parent);
        wuyun.active = true;
        var spine = wuyun.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          wuyun.active = false;
        });
        cc.vv.AudioManager.playEff("games/VampireCount/", "transition1", true);
      },
      cutSceneBat: function cutSceneBat() {
        var bianfu = cc.find("bianfu", this.node.parent);
        bianfu.active = true;
        var spine = bianfu.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          bianfu.active = false;
        });
        cc.vv.AudioManager.playEff("games/VampireCount/", "transition2", true);
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var i, card, symbol, _iterator5, _step5, reel;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this7._gameInfo.resultCards.length; i++) {
                card = _this7._gameInfo.resultCards[i];
                if (card === _this7._cfg.scatterId) {
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  symbol.playTriggerAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/VampireCount/", "bell", true);
              _context9.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context9.next = 7;
              return _this7.popFreeDialog(false);

             case 7:
              _this7.cutSceneBat();
              _context9.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              _this7.Backup();
              _this7.ShowGameview(true);
              _iterator5 = _createForOfIteratorHelper(_this7._reels);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  reel = _step5.value;
                  reel.AddCount(3, .01);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              cc.find("reels_frame/left_20", _this7.node).active = false;
              cc.find("reels_frame/right_20", _this7.node).active = false;
              cc.find("reels_frame/left_56", _this7.node).active = true;
              cc.find("reels_frame/right_56", _this7.node).active = true;
              cc.find("xixuegui", _this7.node.parent).active = false;
              _context9.next = 21;
              return cc.vv.gameData.awaitTime(2);

             case 21:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free_bgm");
              _this7.CanDoNextRound();

             case 24:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (card === _this8._cfg.extraSpinId) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  symbol.playTriggerAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/VampireCount/", "bell", true);
              _context10.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context10.next = 7;
              return _this8.popFreeDialog(true);

             case 7:
              _this8.CanDoNextRound();

             case 8:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var _iterator6, _step6, reel, _iterator7, _step7, _reel3;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              _context11.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context11.next = 5;
              return _this9.popFreeResultDialog(2 === _this9._gameInfo.mapInfo.state);

             case 5:
              _this9.cutSceneBat();
              _context11.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _iterator6 = _createForOfIteratorHelper(_this9._reels);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  reel = _step6.value;
                  reel.StartRecycleSymbol(.01);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              cc.find("reels_frame/left_20", _this9.node).active = true;
              cc.find("reels_frame/right_20", _this9.node).active = true;
              cc.find("reels_frame/left_56", _this9.node).active = false;
              cc.find("reels_frame/right_56", _this9.node).active = false;
              cc.find("reels_frame/left_68", _this9.node).active = false;
              cc.find("reels_frame/right_68", _this9.node).active = false;
              cc.find("xixuegui", _this9.node.parent).active = true;
              _context11.next = 19;
              return cc.vv.gameData.awaitTime(.02);

             case 19:
              _iterator7 = _createForOfIteratorHelper(_this9._reels);
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  _reel3 = _step7.value;
                  _reel3.clearLastSymbol();
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              2 !== _this9._gameInfo.mapInfo.state && _this9.Resume();
              _this9.ShowGameview(false);
              cc.find("LMSlots_PrizePool_1", _this9.node.parent).active = true;
              _this9.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this9.CanDoNextRound();
              });

             case 25:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      popFreeDialog: function popFreeDialog(isExtra) {
        var _this10 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
            var free_dialog, free_bg, dialog, animationName, times, freetanchuang_spine, add, btn_start, func;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this10.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("common_enter_node", free_dialog);
                animationName = "animation2";
                isExtra && (dialog = cc.find("extra_node", free_dialog));
                dialog.active = true;
                times = cc.find("times", dialog);
                times.scale = 0;
                freetanchuang_spine = cc.find("freetanchuang", dialog).getComponent(sp.Skeleton);
                freetanchuang_spine.node.active = true;
                if (!isExtra) {
                  _context14.next = 31;
                  break;
                }
                cc.vv.AudioManager.playEff("games/VampireCount/", "fg_retrigger", true);
                freetanchuang_spine.setAnimation(0, "animation", false);
                freetanchuang_spine.setCompleteListener(function() {
                  dialog.active = false;
                  free_dialog.active = false;
                  freetanchuang_spine.node.active = false;
                  success();
                });
                add = cc.find("add", dialog);
                add.scale = 0;
                _context14.next = 21;
                return cc.vv.gameData.awaitTime(.3);

               case 21:
                times.getComponent(cc.Label).string = _this10._gameInfo.freeResult.freeInfo.freeCnt;
                cc.tween(times).to(.2, {
                  scale: 1
                }).start();
                cc.tween(add).to(.2, {
                  scale: 1
                }).start();
                _context14.next = 26;
                return cc.vv.gameData.awaitTime(1.5);

               case 26:
                cc.tween(free_bg).to(.2, {
                  opacity: 0
                }).start();
                cc.tween(times).to(.2, {
                  scale: 0
                }).start();
                cc.tween(add).to(.2, {
                  scale: 0
                }).start();
                _context14.next = 52;
                break;

               case 31:
                cc.vv.AudioManager.playEff("games/VampireCount/", "free_dialog_start_show", true);
                freetanchuang_spine.clearTracks();
                freetanchuang_spine.setToSetupPose();
                freetanchuang_spine.setAnimation(0, animationName, false);
                freetanchuang_spine.setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  if (name === animationName) {
                    freetanchuang_spine.clearTracks();
                    freetanchuang_spine.setToSetupPose();
                    freetanchuang_spine.setAnimation(0, "animation2_1", true);
                  } else if ("animation2_2" === name) {
                    dialog.active = false;
                    free_dialog.active = false;
                    freetanchuang_spine.node.active = false;
                    success();
                  }
                });
                btn_start = cc.find("btn_start", dialog);
                btn_start.scale = 0;
                _context14.next = 40;
                return cc.vv.gameData.awaitTime(.3);

               case 40:
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.tween(times).to(.2, {
                  scale: 1
                }).start();
                _context14.next = 44;
                return cc.vv.gameData.awaitTime(.2);

               case 44:
                cc.tween(btn_start).to(.2, {
                  scale: 1
                }).start();
                btn_start.off("click");
                _context14.next = 48;
                return cc.vv.gameData.awaitTime(.2);

               case 48:
                func = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                       case 0:
                        btn_start.off("click");
                        cc.vv.AudioManager.playEff("games/VampireCount/", "click", true);
                        cc.tween(btn_start).to(.2, {
                          scale: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        freetanchuang_spine.clearTracks();
                        freetanchuang_spine.setToSetupPose();
                        freetanchuang_spine.setAnimation(0, "animation2_2", false);
                        _context12.next = 9;
                        return cc.vv.gameData.awaitTime(.3);

                       case 9:
                        cc.tween(times).to(.2, {
                          scale: 0
                        }).start();

                       case 10:
                       case "end":
                        return _context12.stop();
                      }
                    }, _callee12);
                  }));
                  return function func() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context13.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));
                if (!cc.vv.gameData.isNeedAutoPlay()) {
                  btn_start.stopAllActions();
                  cc.tween(btn_start).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
                    func();
                  }).start();
                }

               case 52:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog(isMap) {
        var _this11 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success) {
            var free_dialog, free_bg, dialog, freetanchuang_spine, coin, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this11.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = isMap ? cc.find("map_free_result_node", free_dialog) : cc.find("result_node", free_dialog);
                dialog.active = true;
                freetanchuang_spine = cc.find("freetanchuang", dialog).getComponent(sp.Skeleton);
                freetanchuang_spine.node.active = true;
                coin = cc.find("coin", dialog);
                coin.scale = 0;
                coin.getComponent(cc.Label).string = "";
                isMap && cc.vv.AudioManager.playEff("games/VampireCount/", "mapfree_end_show", true);
                freetanchuang_spine.setAnimation(0, isMap ? "animation2" : "animation3", false);
                freetanchuang_spine.addAnimation(0, isMap ? "animation2_1" : "animation3_1", true);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                _context17.next = 19;
                return cc.vv.gameData.awaitTime(.3);

               case 19:
                Global.doRoallNumEff(coin, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                cc.tween(coin).to(.2, {
                  scale: 1
                }).start();
                _context17.next = 23;
                return cc.vv.gameData.awaitTime(.2);

               case 23:
                cc.tween(btn_collect).to(.2, {
                  scale: 1
                }).start();
                btn_collect.off("click");
                _context17.next = 27;
                return cc.vv.gameData.awaitTime(.2);

               case 27:
                func = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.vv.AudioManager.playEff("games/VampireCount/", "click", true);
                        cc.vv.AudioManager.playEff("games/VampireCount/", "free_dialog_collect_close", true);
                        cc.tween(btn_collect).to(.2, {
                          scale: 0
                        }).start();
                        cc.tween(free_bg).to(.2, {
                          opacity: 0
                        }).start();
                        freetanchuang_spine.setAnimation(0, isMap ? "animation2_2" : "animation3_2", false);
                        freetanchuang_spine.setCompleteListener(function() {
                          freetanchuang_spine.setCompleteListener(null);
                          dialog.active = false;
                          free_dialog.active = false;
                          freetanchuang_spine.node.active = false;
                          success();
                        });
                        _context15.next = 9;
                        return cc.vv.gameData.awaitTime(.3);

                       case 9:
                        cc.tween(coin).to(.2, {
                          scale: 0
                        }).start();

                       case 10:
                       case "end":
                        return _context15.stop();
                      }
                    }, _callee15);
                  }));
                  return function func() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context16.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                })));
                if (!cc.vv.gameData.isNeedAutoPlay()) {
                  btn_collect.stopAllActions();
                  cc.tween(btn_collect).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
                    func();
                  }).start();
                }

               case 31:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x2) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      popMapFreeDialog: function popMapFreeDialog(mapInfo) {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              return _context21.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(success) {
                  var free_dialog, free_bg, dialog, superbonustanchuang_spine, times, i, booster, btn_start, _i4, _booster, func;
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      free_dialog = cc.find("free_dialog", _this12.node.parent);
                      free_dialog.active = true;
                      free_bg = cc.find("free_dialog_bg", free_dialog);
                      free_bg.opacity = 0;
                      free_bg.runAction(cc.fadeTo(.2, 200));
                      dialog = cc.find("map_free_node", free_dialog);
                      dialog.active = true;
                      superbonustanchuang_spine = cc.find("superbonustanchuang", dialog).getComponent(sp.Skeleton);
                      superbonustanchuang_spine.node.active = true;
                      times = cc.find("times_" + mapInfo.nextSpinCount, dialog);
                      times.scale = 0;
                      cc.find("times_10", dialog).active = 10 === mapInfo.nextSpinCount;
                      cc.find("times_15", dialog).active = 15 === mapInfo.nextSpinCount;
                      for (i = 1; i < 6; i++) {
                        booster = cc.find("booster_" + i, dialog);
                        booster.active = -1 !== mapInfo.nextBoosters.indexOf(i);
                        cc.find("black_bg", booster).active = -1 === mapInfo.nextUnlockBoosters.indexOf(i);
                        booster.scale = 0;
                      }
                      cc.vv.AudioManager.playEff("games/VampireCount/", "mapfree_start_show", true);
                      superbonustanchuang_spine.setAnimation(0, "animation4", false);
                      superbonustanchuang_spine.addAnimation(0, "animation4_1", true);
                      btn_start = cc.find("btn_start", dialog);
                      btn_start.scale = 0;
                      _context20.next = 21;
                      return cc.vv.gameData.awaitTime(.3);

                     case 21:
                      cc.tween(times).to(.2, {
                        scale: 1
                      }).start();
                      _context20.next = 24;
                      return cc.vv.gameData.awaitTime(.2);

                     case 24:
                      cc.tween(btn_start).to(.2, {
                        scale: 1
                      }).start();
                      for (_i4 = 1; _i4 < 6; _i4++) {
                        _booster = cc.find("booster_" + _i4, dialog);
                        cc.tween(_booster).to(.2, {
                          scale: 1
                        }).start();
                      }
                      _context20.next = 28;
                      return cc.vv.gameData.awaitTime(.2);

                     case 28:
                      btn_start.off("click");
                      func = function() {
                        var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) switch (_context18.prev = _context18.next) {
                             case 0:
                              btn_start.off("click");
                              cc.vv.AudioManager.playEff("games/VampireCount/", "click", true);
                              cc.tween(btn_start).to(.2, {
                                scale: 0
                              }).start();
                              cc.tween(free_bg).to(.2, {
                                opacity: 0
                              }).start();
                              superbonustanchuang_spine.setAnimation(0, "animation4_2", false);
                              superbonustanchuang_spine.setCompleteListener(function(track) {
                                superbonustanchuang_spine.setCompleteListener(null);
                                dialog.active = false;
                                free_dialog.active = false;
                                superbonustanchuang_spine.node.active = false;
                                success();
                              });
                              _context18.next = 8;
                              return cc.vv.gameData.awaitTime(.3);

                             case 8:
                              cc.tween(times).to(.2, {
                                scale: 0
                              }).start();

                             case 9:
                             case "end":
                              return _context18.stop();
                            }
                          }, _callee18);
                        }));
                        return function func() {
                          return _ref11.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) switch (_context19.prev = _context19.next) {
                           case 0:
                            btn_start.stopAllActions();
                            _context19.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context19.stop();
                          }
                        }, _callee19);
                      })));

                     case 32:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function(_x3) {
                  return _ref10.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context21.stop();
            }
          }, _callee21);
        }))();
      },
      setPumpkinInfo: function setPumpkinInfo(bonusInfos) {
        var bonusInfo = bonusInfos[cc.vv.gameData.GetBetIdx() - 1];
        for (var i = 0; i < bonusInfo.length; i++) {
          var info = bonusInfo[i];
          var pumpkin = cc.find("pumpkin_" + (i + 1), this.node);
          if (pumpkin) {
            cc.find("coin", pumpkin).getComponent(cc.Label).string = Global.formatNumShort(info.coin, 0);
            var _double = cc.find("double", pumpkin);
            var doubleSpine = _double.getComponent(sp.Skeleton);
            if (info["double"]) {
              _double.active = true;
              doubleSpine.clearTracks();
              doubleSpine.setToSetupPose();
              doubleSpine.setAnimation(0, "animation2", true);
            } else _double.active = false;
            var wheel = cc.find("wheel", pumpkin);
            var wheelSpine = wheel.getComponent(sp.Skeleton);
            if (info.jackpotWheel) {
              wheel.active = true;
              wheelSpine.clearTracks();
              wheelSpine.setToSetupPose();
              wheelSpine.setAnimation(0, "animation2", true);
            } else wheel.active = false;
          }
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      collectCoin: function collectCoin() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          var i, bonusResultCards, needAddSymbolArray, haveCoin, _iterator8, _step8, _loop2, _loop, j;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              if (!(_this13._gameInfo.bonusResultCards && _this13._gameInfo.bonusResultCards.length > 0)) {
                _context22.next = 19;
                break;
              }
              i = 0;

             case 2:
              if (!(i < _this13._gameInfo.bonusResultCards.length - 1)) {
                _context22.next = 18;
                break;
              }
              bonusResultCards = _this13._gameInfo.bonusResultCards[i];
              needAddSymbolArray = [ 0, 0, 0, 0, 0 ];
              haveCoin = false;
              _iterator8 = _createForOfIteratorHelper(bonusResultCards.bonusIdxs);
              try {
                _loop2 = function _loop2() {
                  var index = _step8.value;
                  var item = bonusResultCards.bonusItems[bonusResultCards.bonusIdxs.indexOf(index)];
                  var reelIndex = (index - 1) % 5;
                  var symbol = _this13.GetSymbolByIdx(index);
                  if (symbol) {
                    haveCoin = true;
                    symbol.playCoinAnimation();
                  }
                  needAddSymbolArray[reelIndex]++;
                  var spine_coin = cc.instantiate(cc.find("spine_coin", _this13.node.parent)).getComponent(sp.Skeleton);
                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  position = _this13.node.parent.convertToNodeSpaceAR(position);
                  spine_coin.node.active = true;
                  spine_coin.node.parent = _this13.node.parent;
                  spine_coin.node.position = position;
                  spine_coin.setAnimation(0, "animation", false);
                  var endPos = cc.find("pumpkin_" + (reelIndex + 1), _this13.node).convertToWorldSpaceAR(cc.v2(0, 0));
                  endPos = _this13.node.parent.convertToNodeSpaceAR(endPos);
                  cc.tween(spine_coin.node).to(.6, {
                    opacity: 100,
                    position: endPos
                  }).removeSelf().start();
                  cc.tween(_this13.node).delay(.5).call(function() {
                    var spine_pumpkin = cc.find("pumpkin_" + (reelIndex + 1), _this13.node).getComponent(sp.Skeleton);
                    spine_pumpkin.clearTracks();
                    spine_pumpkin.setToSetupPose();
                    spine_pumpkin.setAnimation(0, "animation2", false);
                    spine_pumpkin.setCompleteListener(function(track) {
                      var name = track.animation ? track.animation.name : "";
                      if ("animation2" === name) {
                        spine_pumpkin.clearTracks();
                        spine_pumpkin.setToSetupPose();
                        spine_pumpkin.setAnimation(0, "animation1", true);
                      }
                    });
                    var pumpkinInfo = _this13._pumpkinInfo[reelIndex];
                    if (item.type === _this13._cfg.BonusType.Coin) {
                      pumpkinInfo.coin += item.coin;
                      cc.find("pumpkin_" + (reelIndex + 1) + "/coin", _this13.node).getComponent(cc.Label).string = Global.formatNumShort(pumpkinInfo.coin, 0);
                    } else if (item.type === _this13._cfg.BonusType.Double) {
                      pumpkinInfo["double"] = true;
                      var _double2 = cc.find("pumpkin_" + (reelIndex + 1) + "/double", _this13.node);
                      var doubleSpine = _double2.getComponent(sp.Skeleton);
                      _double2.active = true;
                      doubleSpine.clearTracks();
                      doubleSpine.setToSetupPose();
                      doubleSpine.setAnimation(0, "animation1", false);
                    } else if (item.type === _this13._cfg.BonusType.JackpotWheel) {
                      pumpkinInfo.jackpotWheel = true;
                      var wheel = cc.find("pumpkin_" + (reelIndex + 1) + "/wheel", _this13.node);
                      var wheelSpine = wheel.getComponent(sp.Skeleton);
                      wheel.active = true;
                      wheelSpine.clearTracks();
                      wheelSpine.setToSetupPose();
                      wheelSpine.setAnimation(0, "animation1", false);
                    }
                  }).start();
                };
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) _loop2();
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              if (haveCoin) {
                cc.vv.AudioManager.playEff("games/VampireCount/", "symbol_collect", true);
                _this13.scheduleOnce(function() {}, .5);
              }
              _context22.next = 11;
              return cc.vv.gameData.awaitTime(.6);

             case 11:
              _loop = function _loop(j) {
                var addNum = needAddSymbolArray[j];
                var symbolArray = [];
                var reel = _this13._reels[j];
                var nextCards = _this13._gameInfo.bonusResultCards[i + 1].cards;
                if (addNum > 0) {
                  for (var k = 0; k < addNum; k++) {
                    var card = nextCards[_this13._cfg.col * k + j];
                    var data = null;
                    if (card === _this13._cfg.bonusId) {
                      var index = _this13._gameInfo.bonusResultCards[i + 1].bonusIdxs.indexOf(_this13._cfg.col * k + j + 1);
                      -1 !== index && (data = _this13._gameInfo.bonusResultCards[i + 1].bonusItems[index]);
                    }
                    symbolArray.push({
                      id: card,
                      data: data
                    });
                  }
                  bonusResultCards.bonusIdxs.sort(function(a, b) {
                    return a - b;
                  });
                  symbolArray.reverse();
                  reel.AppendSymbol(symbolArray, 2);
                  var _iterator9 = _createForOfIteratorHelper(bonusResultCards.bonusIdxs), _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                      var _index = _step9.value;
                      var reelIndex = (_index - 1) % 5;
                      if (reelIndex === j) {
                        var _symbol = _this13.GetSymbolByIdx(_index);
                        if (_symbol) {
                          var _reel4 = _this13._reels[reelIndex];
                          var idx = Math.floor(bonusResultCards.cards.length / _this13._cfg.col) - (Math.floor((_index - 1) / 5) + 1);
                          cc.log(idx);
                          _reel4.deleteSymbol(idx);
                        }
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                  for (var _k = 0; _k < nextCards.length / _this13._cfg.col; _k++) {
                    var symbol = reel.GetSymbolByRow(_k);
                    cc.tween(symbol.node).to(.2, {
                      y: (_k + .5) * _this13._cfg.symbolSize.height
                    }).start();
                  }
                  cc.tween(reel.node).delay(.2).call(function() {
                    reel.ReLayOut();
                  }).start();
                }
              };
              for (j = 0; j < needAddSymbolArray.length; j++) _loop(j);
              _context22.next = 15;
              return cc.vv.gameData.awaitTime(.3);

             case 15:
              i++;
              _context22.next = 2;
              break;

             case 18:
              _this13._pumpkinInfo = _this13._gameInfo.bonusInfo;

             case 19:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      },
      updateCollectProgress: function updateCollectProgress(mapInfo, isAdd) {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          var spine_purpose, config, progress, scale_node, sjt, spine_collect;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              spine_purpose = cc.find("collect_node/spine_purpose", _this14.node).getComponent(sp.Skeleton);
              if (mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt < 1) {
                config = _this14._cfg.MapConfig[mapInfo.nextId - 1];
                if (config.animationName) {
                  spine_purpose.clearTracks();
                  spine_purpose.setToSetupPose();
                  spine_purpose.setAnimation(0, config.animationName, true);
                } else {
                  spine_purpose.clearTracks();
                  spine_purpose.setToSetupPose();
                  spine_purpose.setAnimation(0, "animation8", true);
                }
              }
              progress = cc.find("collect_node/progress", _this14.node);
              scale_node = cc.find("scale_node", progress);
              sjt = cc.find("sjt", scale_node);
              if (isAdd) {
                cc.tween(sjt).to(.3, {
                  x: 388 * (mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt) - 194
                }).start();
                spine_collect = cc.find("collect", sjt).getComponent(sp.Skeleton);
                spine_collect.node.active = true;
                spine_collect.setToSetupPose();
                spine_collect.setAnimation(0, "animation1", false);
                spine_collect.setCompleteListener(function() {
                  spine_collect.node.active = false;
                });
              } else sjt.x = 388 * (mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt) - 194;

             case 6:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var spine_purpose = cc.find("collect_node/spine_purpose", this.node).getComponent(sp.Skeleton);
        var progress = cc.find("collect_node/progress", this.node);
        var scale_node = cc.find("scale_node", progress);
        var sjt = cc.find("sjt", scale_node);
        var mapInfo = this._gameInfo ? this._gameInfo.mapInfo : cc.vv.gameData.getDeskInfo().mapInfo;
        var config = this._cfg.MapConfig[mapInfo.nextId - 1];
        if (config.animationName) {
          spine_purpose.clearTracks();
          spine_purpose.setToSetupPose();
          spine_purpose.setAnimation(0, config.animationName, true);
        } else {
          spine_purpose.clearTracks();
          spine_purpose.setToSetupPose();
          spine_purpose.setAnimation(0, "animation8", true);
        }
        sjt.x = -194;
      },
      changeBgAnimation: function changeBgAnimation(index) {
        var _this15 = this;
        this._rightSpiderCount = 0;
        this._leftSpiderCount = 0;
        var spider = cc.find("bg/spider", this.node.parent);
        var spine = spider.getComponent(sp.Skeleton);
        spine.clearTracks();
        spine.setToSetupPose();
        spine.setAnimation(0, "animation2_" + index + "_1", true);
        spine.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          if (name === "animation2_" + index + "_1") {
            _this15._rightSpiderCount++;
            if (_this15._rightSpiderCount >= 3) {
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation2_" + index + "_2", true);
              _this15._rightSpiderCount = 0;
            }
          } else if (name === "animation2_" + index + "_2") {
            _this15._leftSpiderCount++;
            if (_this15._leftSpiderCount >= 2) {
              spine.clearTracks();
              spine.setToSetupPose();
              spine.setAnimation(0, "animation2_" + index + "_1", true);
              _this15._leftSpiderCount = 0;
            }
          }
        });
        var ghost = cc.find("bg/ghost", this.node.parent);
        var ghost_spine = ghost.getComponent(sp.Skeleton);
        ghost_spine.clearTracks();
        ghost_spine.setToSetupPose();
        ghost_spine.setAnimation(0, "animation4_" + index + "_1", false);
        ghost_spine.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          if (name === "animation4_" + index + "_1") {
            ghost_spine.clearTracks();
            ghost_spine.setToSetupPose();
            ghost_spine.setAnimation(0, "animation4_" + index + "_2", false);
          } else if (name === "animation4_" + index + "_2") {
            ghost_spine.clearTracks();
            ghost_spine.setToSetupPose();
            ghost_spine.setAnimation(0, "animation4_" + index + "_1", false);
          }
        });
        var tree = cc.find("bg/tree", this.node.parent);
        var tree_spine = tree.getComponent(sp.Skeleton);
        tree_spine.clearTracks();
        tree_spine.setToSetupPose();
        tree_spine.setAnimation(0, "animation6_" + index, true);
        var frog = cc.find("bg/frog", this.node.parent);
        var frog_spine = frog.getComponent(sp.Skeleton);
        frog_spine.clearTracks();
        frog_spine.setToSetupPose();
        frog_spine.setAnimation(0, "animation3_" + index, true);
        var house_light = cc.find("bg/house_light", this.node.parent);
        var house_light_spine = house_light.getComponent(sp.Skeleton);
        house_light_spine.clearTracks();
        house_light_spine.setToSetupPose();
        house_light_spine.setAnimation(0, "animation1_" + index, true);
      },
      _rotateWheel: function _rotateWheel(endIndex, node) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
             case 0:
              return _context25.abrupt("return", new Promise(function() {
                var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(success) {
                  var angle, action;
                  return regeneratorRuntime.wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                     case 0:
                      angle = 40 * endIndex - 140 - 2160;
                      cc.log(angle);
                      cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_spin", true);
                      action = cc.rotateBy(7, angle).easing(cc.easeSineInOut());
                      node.getChildByName("rotate_node").runAction(cc.sequence(action, cc.callFunc(function() {
                        cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_stop", true);
                        success();
                      })));

                     case 5:
                     case "end":
                      return _context24.stop();
                    }
                  }, _callee24);
                }));
                return function(_x4) {
                  return _ref13.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context25.stop();
            }
          }, _callee25);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  VampireCount_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee9e7ko7ZZPepJim4Uk/a0f", "VampireCount_Symbol");
    "use strict";
    var BonusType = {
      Coin: 1,
      Double: 2,
      JackpotWheel: 3
    };
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
        var cfg = cc.vv.gameData.getGameCfg();
        this._id === cfg.pumpkinManId && (this.node.zIndex = 1e3);
        this._id === cfg.scatterId && (this.node.zIndex = 500);
      },
      ShowById: function ShowById(id, data) {
        var cfg = cc.vv.gameData.getGameCfg();
        this._super(id, data);
        if (id === cfg.bonusId && data) {
          cc.find("coin_bg/coin", this._showNode).active = data.type === BonusType.Coin;
          cc.find("coin_bg/double", this._showNode).active = data.type === BonusType.Double;
          cc.find("coin_bg/wheel", this._showNode).active = data.type === BonusType.JackpotWheel;
          cc.find("coin_bg/coin", this._showNode).opacity = 255;
          cc.find("coin_bg/double", this._showNode).opacity = 255;
          cc.find("coin_bg/wheel", this._showNode).opacity = 255;
          cc.find("coin_bg/coin", this._showNode).scale = 1;
          cc.find("coin_bg/double", this._showNode).scale = 1;
          cc.find("coin_bg/wheel", this._showNode).scale = 1;
          cc.find("coin_bg", this._showNode).opacity = 255;
          data.type === BonusType.Coin && (cc.find("coin_bg/coin", this._showNode).getComponent(cc.Label).string = Global.formatNumShort(data.coin, 0));
        }
      },
      playCoinAnimation: function playCoinAnimation() {
        cc.find("icon", this._showNode).active = false;
        var node = cc.find("coin_bg/coin", this._showNode);
        this._data.type === BonusType.Double ? node = cc.find("coin_bg/double", this._showNode) : this._data.type === BonusType.JackpotWheel && (node = cc.find("coin_bg/wheel", this._showNode));
        var bg = cc.find("coin_bg", this._showNode);
        cc.tween(bg).to(.2, {
          opacity: 0
        }).start();
        cc.tween(node).to(.5, {
          opacity: 0,
          scale: 1.1
        }).start();
      },
      playTriggerAnimation: function playTriggerAnimation(callback) {
        var _this = this;
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_ani) {
          this._state = "trigger";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" !== cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              this._id === cfg.pumpkinManId && cc.vv.AudioManager.playEff("games/VampireCount/", "pumpkin_wheel", true);
              nodeSp.setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if (name === cfg.symbol[id].trigger_ani.name) {
                  if (_this._id === cfg.pumpkinManId) {
                    nodeSp.clearTracks();
                    nodeSp.setToSetupPose();
                    nodeSp.setAnimation(0, "animation2", true);
                  }
                  if (_this._id === cfg.scatterId || _this._id === cfg.extraSpinId) {
                    nodeSp.clearTracks();
                    nodeSp.setToSetupPose();
                    nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
                  }
                  callback && callback(topShowNode);
                }
              });
            }
          }
        }
        return isPlay;
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._super(idx);
        var cfg = cc.vv.gameData.getGameCfg();
        this._id === cfg.pumpkinManId && (this.node.zIndex = 1e3);
        this._id === cfg.scatterId && (this.node.zIndex = 500);
      },
      GetSymbolIdx: function GetSymbolIdx() {
        return this._symbolIdx;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  VampireCount_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "829fcoWIoZJz5Wyei2cV1qn", "VampireCount_Wheel");
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
        items: [ cc.Node ],
        jackpot_result: cc.Node,
        jptanchuang: sp.Skeleton,
        winCoin: cc.Label,
        btn_collect: cc.Node,
        kuang: sp.Skeleton,
        kuloushouzhi: sp.Skeleton,
        black_bg: cc.Node,
        press_node: sp.Skeleton,
        _startMove: false,
        _newSpeed: 1,
        _newMaxSpeed: 20,
        _newMinSpeed: 1,
        _newSpeedOffset: .25,
        _count: 6,
        _needStop: false,
        _bottomPosY: 0,
        _backMove: false,
        _resultItem: null,
        _successCallback: null,
        _hasPressed: true,
        _wheelResult: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.press_node.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (_this._hasPressed) return;
          _this._hasPressed = true;
          _this.press_node.node.stopAllActions();
          cc.tween(_this.black_bg).to(.2, {
            opacity: 0
          }).start();
          _this.press_node.clearTracks();
          _this.press_node.setToSetupPose();
          _this.press_node.setAnimation(0, "animation3", false);
          _this.press_node.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if ("animation3" === name) {
              _this._startMove = true;
              cc.vv.AudioManager.playEff("games/VampireCount/", "jp_spin", true);
              _this.press_node.active = false;
              _this.kuloushouzhi.node.active = true;
              _this.kuloushouzhi.setAnimation(0, "animation", false);
              _this.kuloushouzhi.addAnimation(0, "animation2", true);
            }
          });
        });
        this._bottomPosY = this.items[9].y - this.items[9].height;
      },
      update: function update(dt) {
        if (this._startMove) {
          if (this._needStop) {
            this._newSpeed -= this._newSpeedOffset;
            this._newSpeed <= this._newMinSpeed && (this._newSpeed = this._newMinSpeed);
          } else {
            this._newSpeed += this._newSpeedOffset;
            this._newSpeed >= this._newMaxSpeed && (this._newSpeed = this._newMaxSpeed);
          }
          0 === this._count && this._resultItem.y <= 5 * this._resultItem.height && (this._needStop = true);
          if (this._needStop && this._resultItem.y < 0) {
            this._startMove = false;
            this._backMove = true;
          }
          var _iterator = _createForOfIteratorHelper(this.items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.y <= this._bottomPosY) {
                item.y += this.items.length * item.height;
                if (item === this._resultItem) {
                  this._count--;
                  this._count <= 0 && (this._count = 0);
                }
              }
              item.y -= this._newSpeed;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._backMove) {
          var _iterator2 = _createForOfIteratorHelper(this.items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _item = _step2.value;
              _item.y += this._newMinSpeed;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (this._resultItem.y > -1 && this._resultItem.y < 1) {
            this._backMove = false;
            this._moveEnd();
          }
        }
      },
      _moveEnd: function _moveEnd() {
        var _this2 = this;
        cc.vv.AudioManager.playEff("games/VampireCount/", "jp_stop", true);
        this.kuang.node.active = true;
        this.kuang.clearTracks();
        this.kuang.setToSetupPose();
        this.kuang.setAnimation(0, "animation1", false);
        this.kuang.setCompleteListener(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(track) {
            var name, prizePool, jpzhongjiang, animationIndex, sound, func;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                name = track.animation ? track.animation.name : "";
                if (!("animation1" === name)) {
                  _context.next = 29;
                  break;
                }
                _this2.kuang.clearTracks();
                _this2.kuang.setToSetupPose();
                _this2.kuang.setAnimation(0, "animation2", true);
                prizePool = cc.find("LMSlots_PrizePool_1", _this2.node.parent).getComponent("VampireCount_PrizePool")._GetPoolNodeByType(_this2._wheelResult.id - 1);
                if (prizePool) {
                  jpzhongjiang = cc.find("unlock/jpzhongjiang", prizePool);
                  if (jpzhongjiang) {
                    cc.vv.AudioManager.playEff("games/VampireCount/", "jp_multi", true);
                    jpzhongjiang.active = true;
                    _this2.scheduleOnce(function() {
                      jpzhongjiang.active = false;
                    }, 1);
                  }
                }
                _context.next = 9;
                return cc.vv.gameData.awaitTime(1);

               case 9:
                animationIndex = [ 4, 3, 2, 1 ];
                sound = [ "wheel_mini", "wheel_minor", "wheel_major", "wheel_grand" ];
                cc.vv.AudioManager.playEff("games/VampireCount/", sound[_this2._wheelResult.id - 1], true);
                _this2.jackpot_result.active = true;
                _this2.jptanchuang.clearTracks();
                _this2.jptanchuang.setToSetupPose();
                _this2.jptanchuang.setAnimation(0, "animation" + animationIndex[_this2._wheelResult.id - 1], false);
                _this2.jptanchuang.setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  if (name === "animation" + animationIndex[_this2._wheelResult.id - 1]) {
                    _this2.jptanchuang.clearTracks();
                    _this2.jptanchuang.setToSetupPose();
                    _this2.jptanchuang.setAnimation(0, "animation" + animationIndex[_this2._wheelResult.id - 1] + "_1", true);
                  }
                });
                _this2.winCoin.string = "";
                _this2.btn_collect.scale = 0;
                _context.next = 21;
                return cc.vv.gameData.awaitTime(1);

               case 21:
                Global.doRoallNumEff(_this2.winCoin.node, 0, _this2._wheelResult.value, 3, null, null, 0, true, false);
                cc.tween(_this2.btn_collect).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 25;
                return cc.vv.gameData.awaitTime(.5);

               case 25:
                _this2.btn_collect.off("click");
                func = function func() {
                  _this2.btn_collect.off("click");
                  cc.vv.AudioManager.playEff("games/VampireCount/", "click", true);
                  cc.tween(_this2.btn_collect).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  _this2.jptanchuang.clearTracks();
                  _this2.jptanchuang.setToSetupPose();
                  _this2.jptanchuang.setAnimation(0, "animation" + animationIndex[_this2._wheelResult.id - 1] + "_2", false);
                  _this2.jptanchuang.setCompleteListener(function(track) {
                    var name = track.animation ? track.animation.name : "";
                    if (name === "animation" + animationIndex[_this2._wheelResult.id - 1] + "_2") {
                      _this2.jackpot_result.active = false;
                      _this2.kuloushouzhi.node.active = false;
                      _this2._successCallback && _this2._successCallback();
                    }
                  });
                };
                cc.vv.gameData.checkAutoPlay(_this2.btn_collect, func);
                _this2.btn_collect.on("click", function() {
                  _this2.btn_collect.stopAllActions();
                  func();
                });

               case 29:
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
      enterWheelGame: function enterWheelGame(successCallback, result) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._wheelResult = result;
              _this3._resultItem = cc.find("wheel_mask/index_" + result.idx, _this3.node);
              _this3.node.active = true;
              _this3._successCallback = successCallback;
              _this3.kuang.node.active = false;
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("wheel_bgm");
              cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_start_show", true);
              _this3.reset();
              _this3.black_bg.opacity = 200;
              _this3.press_node.node.active = true;
              _this3.press_node.clearTracks();
              _this3.press_node.setToSetupPose();
              _this3.press_node.setAnimation(0, "animation", false);
              _this3.press_node.setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if ("animation" === name) {
                  _this3.press_node.clearTracks();
                  _this3.press_node.setToSetupPose();
                  _this3.press_node.setAnimation(0, "animation2", true);
                }
              });
              cc.vv.gameData.checkAutoPlay(_this3.press_node.node, function() {
                if (_this3._hasPressed) return;
                _this3._hasPressed = true;
                cc.tween(_this3.black_bg).to(.2, {
                  opacity: 0
                }).start();
                _this3.press_node.clearTracks();
                _this3.press_node.setToSetupPose();
                _this3.press_node.setAnimation(0, "animation3", false);
                _this3.press_node.setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  if ("animation3" === name) {
                    _this3._startMove = true;
                    cc.vv.AudioManager.playEff("games/VampireCount/", "jp_spin", true);
                    _this3.press_node.active = false;
                    _this3.kuloushouzhi.node.active = true;
                    _this3.kuloushouzhi.setAnimation(0, "animation", false);
                    _this3.kuloushouzhi.addAnimation(0, "animation2", true);
                  }
                });
              });

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      reset: function reset() {
        this._startMove = false;
        this._newSpeed = 1;
        this._needStop = false;
        this._count = 6;
        this._hasPressed = false;
        this._backMove = false;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "VampireCount_Cfg", "VampireCount_Logic", "VampireCount_Map", "VampireCount_PickGame", "VampireCount_PrizePool", "VampireCount_Reel", "VampireCount_Slots", "VampireCount_Symbol", "VampireCount_Wheel" ]);