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
  TavernWitch_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef08cn8JdtITYTPufS4hovf", "TavernWitch_Cfg");
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
        node: "s1"
      }), _defineProperty(_symbol, 101, {
        node: "s101"
      }), _defineProperty(_symbol, 102, {
        node: "s102"
      }), _defineProperty(_symbol, 103, {
        node: "s103"
      }), _defineProperty(_symbol, 104, {
        node: "s104"
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation2",
          zIndex: 500
        },
        stop_ani: {
          name: "animation1",
          zIndex: 400
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 201, {
        node: "s201",
        win_node: "w201",
        win_ani: {
          name: "animation2",
          zIndex: 600
        },
        stop_ani: {
          name: "animation1",
          zIndex: 400
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation1",
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
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: ""
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TavernWitch_Slots",
        Reels: "TavernWitch_Reel",
        Symbols: "TavernWitch_symbol"
      },
      col: 5,
      row: 5,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 84
      },
      helpItems: [ "games/TavernWitch/prefab/LMSlots_Help_item1", "games/TavernWitch/prefab/LMSlots_Help_item2", "games/TavernWitch/prefab/LMSlots_Help_item3", "games/TavernWitch/prefab/LMSlots_Help_item4" ],
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 2,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/TavernWitch/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_landing",
        antSound: "anticipation",
        antSpeed: 2400
      }, {
        id: [ 3 ],
        mini: 1,
        counts: [ 0, 0, 0, 0, 0, 1 ],
        antiNode: "",
        path: "games/TavernWitch/",
        reelStopSound: "reel_stop",
        symbolStopSound: "jp_landing",
        antSound: "anticipation",
        antSpeed: 2400
      } ],
      normalBgm: "bg_bgm"
    };
    Cfg.isScatter = function(id) {
      return 2 == id || 201 == id;
    };
    Cfg.isWild = function(id) {
      return 1 == id || 101 == id || 102 == id || 102 == id || 103 == id || 104 == id;
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TavernWitch_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b517f/hxdBDqJqShfXoDNk", "TavernWitch_Character");
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
        roleMultiple: sp.Skeleton,
        roleMultipleLabel: cc.Node,
        normalRole: sp.Skeleton,
        fly_particle: cc.ParticleSystem,
        lightList: [ cc.Node ],
        mutongList: [ cc.Node ],
        tipsLight: cc.Node,
        _multiple: 1
      },
      onLoad: function onLoad() {
        var wildGame = SlotsFacade.dm.wildGame;
        if (wildGame.currMult > 1) {
          this.roleMultiple.node.active = true;
          this.roleMultiple.setAnimation(0, "animation2_1", true);
          this.normalRole.node.active = false;
        } else {
          this.roleMultiple.node.active = false;
          this.normalRole.setAnimation(0, "idle", true);
        }
        this.setMultiple(wildGame.currMult);
        this.showLight(wildGame.restCnt);
      },
      setMultiple: function setMultiple(multiple) {
        this._multiple = multiple;
        this.roleMultipleLabel.active = multiple > 1;
        var index = SlotsFacade.dm.getMultipleIndex(multiple);
        if (multiple > 1) {
          this.roleMultipleLabel.getComponent("ImgSwitchCmp").setIndex(index - 1);
          SlotsFacade.soundMgr.playEffect([ "", "multi_up1", "multi_up2", "multi_up3", "multi_up4", "multi_up5" ][index]);
        }
        var enableColor = new cc.Color().fromHEX("#ffffff");
        var disableColor = new cc.Color().fromHEX("#545454");
        for (var i = 0; i < this.mutongList.length; i++) {
          var element = this.mutongList[i];
          var icon = element.getChildByName("icon");
          var spine = element.getChildByName("spine").getComponent(sp.Skeleton);
          var _multiple = element.getChildByName("multiple");
          if (index == i) {
            icon.color = enableColor;
            _multiple.color = enableColor;
            spine.node.active = true;
            spine.setAnimation(0, "animation2", true);
          } else {
            icon.color = disableColor;
            _multiple.color = disableColor;
            spine.node.active = false;
          }
        }
      },
      showLight: function showLight(cnt) {
        this.tipsLight.active = cnt > 0;
        for (var i = 0; i < this.lightList.length; i++) {
          var element = this.lightList[i];
          var state = element.getChildByName("state").getComponent("ImgSwitchCmp");
          var spine = element.getChildByName("spine").getComponent(sp.Skeleton);
          if (i < cnt) {
            0 === state.getIndex() && SlotsFacade.soundMgr.playEffect([ "light1", "light2", "light3" ][i]);
            state.setIndex(1);
            spine.node.active = true;
          } else {
            state.setIndex(0);
            spine.node.active = false;
          }
        }
      },
      _toMultiple: function _toMultiple(multiple) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("logo_change2");
              _this.setMultiple(multiple || 2);
              _this.normalRole.setAnimation(0, "skill_2", false);
              _this.normalRole.setCompleteListener(function() {
                _this.normalRole.setCompleteListener(null);
                _this.normalRole.node.active = false;
              });
              _context.next = 6;
              return SlotsFacade.delayTime(1);

             case 6:
              _this.roleMultiple.node.active = true;
              _this.roleMultiple.setAnimation(0, "animation1_1", false);
              _this.roleMultiple.setCompleteListener(function() {
                _this.roleMultiple.setCompleteListener(null);
                _this.roleMultiple.setAnimation(0, "animation2_1", true);
              });

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _toNormal: function _toNormal() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("logo_change1");
              _this2.roleMultiple.setAnimation(0, "animation3_1", false);
              _this2.roleMultiple.setCompleteListener(function() {
                _this2.roleMultiple.setCompleteListener(null);
                _this2.roleMultiple.node.active = false;
              });
              _context2.next = 5;
              return SlotsFacade.delayTime(1);

             case 5:
              _this2.normalRole.node.active = true;
              _this2.normalRole.setAnimation(0, "skill", false);
              _this2.normalRole.setCompleteListener(function() {
                _this2.normalRole.setCompleteListener(null);
                _this2.normalRole.setAnimation(0, "idle", true);
                _this2.setMultiple(1);
              });

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      changeMultiple: function changeMultiple() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var wildGame, diff;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              wildGame = SlotsFacade.dm.wildGame;
              _this3.showLight(SlotsFacade.dm.getSpinData().wildGame.restCnt);
              0 === wildGame.restCnt && 1 !== _this3._multiple && _this3._toNormal();
              if (!(wildGame.currMult === _this3._multiple && !SlotsFacade.dm.hasWild())) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");

             case 5:
              diff = wildGame.currMult - _this3._multiple;
              if (!(diff > 0)) {
                _context3.next = 16;
                break;
              }
              _context3.next = 9;
              return SlotsFacade.slots.playWild(wildGame.currMult);

             case 9:
              _context3.next = 11;
              return SlotsFacade.delayTime(.45);

             case 11:
              _context3.next = 13;
              return _this3.moveParticle(wildGame.currMult);

             case 13:
              if (1 == _this3._multiple) _this3._toMultiple(); else {
                SlotsFacade.soundMgr.playEffect("logo_change1");
                _this3.setMultiple(wildGame.currMult);
              }
              _context3.next = 26;
              break;

             case 16:
              if (!SlotsFacade.dm.hasWild()) {
                _context3.next = 25;
                break;
              }
              _context3.next = 19;
              return SlotsFacade.slots.playWild(wildGame.currMult);

             case 19:
              _context3.next = 21;
              return SlotsFacade.delayTime(.45);

             case 21:
              _context3.next = 23;
              return _this3.moveParticle(wildGame.currMult);

             case 23:
              _context3.next = 26;
              break;

             case 25:
              _this3._toNormal();

             case 26:
              _this3._multiple = wildGame.currMult;

             case 27:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      changeMultipleTriggerFree: function changeMultipleTriggerFree() {
        var wildGame = SlotsFacade.dm.wildGame;
        SlotsFacade.soundMgr.playEffect("logo_change1");
        this._multiple = wildGame.currMult;
        if (1 === this._multiple) this._toNormal(); else {
          SlotsFacade.soundMgr.playEffect("logo_change1");
          this._toMultiple(wildGame.currMult);
        }
      },
      changeMultipleExitFree: function changeMultipleExitFree() {
        var mult = cc.vv.gameData.getSpinData().wildGame.currMult;
        SlotsFacade.soundMgr.playEffect("logo_change1");
        this._multiple = mult;
        if (1 === this._multiple) this._toNormal(); else {
          SlotsFacade.soundMgr.playEffect("logo_change1");
          this.setMultiple(mult);
        }
      },
      moveParticle: function moveParticle(mult) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var index, mutongPos, wildPos;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              index = SlotsFacade.dm.getMultipleIndex(mult);
              mutongPos = _this4.mutongList[index].convertToWorldSpaceAR(cc.v2(0, 0));
              mutongPos = _this4.fly_particle.node.parent.convertToNodeSpaceAR(mutongPos);
              wildPos = SlotsFacade.slots.wildNode.convertToWorldSpaceAR(cc.v2(0, 0));
              wildPos = _this4.fly_particle.node.parent.convertToNodeSpaceAR(wildPos);
              _this4.fly_particle.node.x = wildPos.x;
              _this4.fly_particle.node.y = wildPos.y;
              _this4.fly_particle.resetSystem();
              _this4.fly_particle.node.active = true;
              _context4.next = 11;
              return new Promise(function(res) {
                cc.tween(_this4.fly_particle.node).to(.5, {
                  x: mutongPos.x,
                  y: mutongPos.y
                }).call(function() {
                  _this4.fly_particle.node.active = false;
                  res();
                }).start();
              });

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_CollectGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71c48jvTZxCfqAf2cvKIt9k", "TavernWitch_CollectGame");
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
    var LastBBCfg = [ {
      flag: "flag0",
      col: 1,
      bg: "col_0",
      dir: "up",
      idxs: [ 19, 16, 13, 10, 7, 4, 1 ]
    }, {
      flag: "flag1",
      col: 2,
      bg: "col_1",
      dir: "up",
      idxs: [ 20, 17, 14, 11, 8, 5, 2 ]
    }, {
      flag: "flag2",
      col: 3,
      bg: "col_2",
      dir: "up",
      idxs: [ 21, 18, 15, 12, 9, 6, 3 ]
    }, {
      flag: "flag3",
      row: 7,
      bg: "row_6",
      dir: "left",
      idxs: [ 21, 20, 19 ]
    }, {
      flag: "flag4",
      row: 6,
      bg: "row_5",
      dir: "left",
      idxs: [ 18, 17, 16 ]
    }, {
      flag: "flag5",
      row: 5,
      bg: "row_4",
      dir: "left",
      idxs: [ 15, 14, 13 ]
    }, {
      flag: "flag6",
      row: 4,
      bg: "row_3",
      dir: "left",
      idxs: [ 12, 11, 10 ]
    }, {
      flag: "flag7",
      row: 3,
      bg: "row_2",
      dir: "left",
      idxs: [ 9, 8, 7 ]
    }, {
      flag: "flag8",
      row: 2,
      bg: "row_1",
      dir: "left",
      idxs: [ 6, 5, 4 ]
    }, {
      flag: "flag9",
      row: 1,
      bg: "row_0",
      dir: "left",
      idxs: [ 3, 2, 1 ]
    }, {
      flag: "flag10",
      col: 3,
      bg: "col_2",
      dir: "down",
      idxs: [ 3, 6, 9, 12, 15, 18, 21 ]
    }, {
      flag: "flag11",
      col: 2,
      bg: "col_1",
      dir: "down",
      idxs: [ 2, 5, 8, 11, 14, 17, 20 ]
    }, {
      flag: "flag12",
      col: 1,
      bg: "col_0",
      dir: "down",
      idxs: [ 1, 4, 7, 10, 13, 16, 19 ]
    }, {
      flag: "flag13",
      row: 1,
      bg: "row_0",
      dir: "right",
      idxs: [ 1, 2, 3 ]
    }, {
      flag: "flag14",
      row: 2,
      bg: "row_1",
      dir: "right",
      idxs: [ 4, 5, 6 ]
    }, {
      flag: "flag15",
      row: 3,
      bg: "row_2",
      dir: "right",
      idxs: [ 7, 8, 9 ]
    }, {
      flag: "flag16",
      row: 4,
      bg: "row_3",
      dir: "right",
      idxs: [ 10, 11, 12 ]
    }, {
      flag: "flag17",
      row: 5,
      bg: "row_4",
      dir: "right",
      idxs: [ 13, 14, 15 ]
    }, {
      flag: "flag18",
      row: 6,
      bg: "row_5",
      dir: "right",
      idxs: [ 16, 17, 18 ]
    }, {
      flag: "flag19",
      row: 7,
      bg: "row_6",
      dir: "right",
      idxs: [ 19, 20, 21 ]
    } ];
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        panel: cc.Node,
        title1: cc.Node,
        title2: cc.Node,
        multiple_panel: cc.Node,
        totalWinNode: cc.Node,
        labelWinToTal: cc.Label,
        progressNode: cc.Node,
        progressLabel: cc.Label,
        glassNode: cc.Node,
        glassItems: [],
        wheel_panel: cc.Node,
        btn_back: cc.Button,
        _data: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.wheelGame = this.wheel_panel.getComponent("TavernWitch_CollectWheel");
        this.btn_back.node.on("click", function() {
          _this.btn_back.node.active = false;
          _this.close();
        }, this);
        for (var i = 0; i < 21; i++) {
          var item = this.glassNode.getChildByName("beer_glass" + (i + 1));
          this.glassItems.push(item);
        }
        LastBBCfg.forEach(function(element) {
          var flag = _this.glassNode.getChildByName(element.flag);
          element.row ? flag.spineName = "animation3" : flag.spineName = "animation1";
        });
        this._reset();
      },
      _reset: function _reset() {
        var _this2 = this;
        this.title1.active = false;
        this.title2.active = false;
        this.multiple_panel.active = false;
        this.totalWinNode.active = false;
        this.labelWinToTal.node.active = false;
        this.progressNode.active = true;
        this.glassItems.forEach(function(element) {
          _this2._glassReset(element);
        });
      },
      _initPanel: function _initPanel() {
        this._reset();
        this.bg.active = true;
        this.panel.active = true;
        this.panel.scale = 1;
        var energyData = SlotsFacade.dm.energyData;
        for (var i = 0; i < energyData.collectionIdxs.length; i++) {
          var id = energyData.collectionIdxs[i];
          var data = energyData.collectionItems[i];
          var item = this.glassItems[id - 1];
          item.type = data.type;
          var itemSpine = item.getChildByName("spine_glass").getComponent(sp.Skeleton);
          itemSpine.setAnimation(0, "animation" + data.type + "_1", true);
          var color = item.getChildByName("color").getComponent("ImgSwitchCmp");
          color.node.active = true;
          color.setIndex(data.type - 1);
          var label = item.getChildByName("label").getComponent(cc.Label);
          label.node.active = true;
          label.string = Global.convertNumToShort(data.coin);
        }
        this._updateProgressTips(energyData.collectionIdxs.length);
      },
      _updateProgressTips: function _updateProgressTips(cnt, needTransition) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.progressNode.active = true;
              if (!needTransition) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return new Promise(function(res) {
                cc.tween(_this3.progressLabel.node).to(.2, {
                  scale: 1.5
                }).call(function() {
                  _this3.progressLabel.string = cnt.toString();
                }).to(.15, {
                  scale: 1
                }).call(function() {
                  res();
                }).start();
              });

             case 4:
              _context.next = 8;
              break;

             case 6:
              _this3.progressLabel.node.scale = 1;
              _this3.progressLabel.string = cnt.toString();

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      close: function close() {
        var _this4 = this;
        this.btn_back.node.stopAllActions();
        SlotsFacade.soundMgr.playEffect("map_close");
        cc.tween(this.panel).to(.5, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this4.panel.active = false;
          _this4.bg.active = false;
          _this4._callBack && _this4._callBack();
        }).start();
      },
      open: function open(isView, cb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var ret;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this5._callBack = cb;
              _this5._initPanel();
              if (!isView) {
                _context2.next = 10;
                break;
              }
              SlotsFacade.soundMgr.playEffect("map_open");
              _this5.panel.scale = 0;
              _this5.title1.active = true;
              cc.tween(_this5.panel).to(.4, {
                scale: .9
              }, {
                easing: "backOut"
              }).start();
              _this5.btn_back.node.active = true;
              _context2.next = 30;
              break;

             case 10:
              _this5.panel.scale = 1;
              _this5.scheduleOnce(function() {
                _this5.panel.active = false;
              });
              if (!(1 == SlotsFacade.dm.energyData.state)) {
                _context2.next = 20;
                break;
              }
              _context2.next = 15;
              return new Promise(function(res) {
                _this5.wheelGame.open(res);
              });

             case 15:
              ret = _context2.sent;
              SlotsFacade.dm.energyData = ret.bonusGame;
              _this5.panel.active = true;
              _context2.next = 20;
              return _this5.fillGlass(ret);

             case 20:
              if (!(2 == SlotsFacade.dm.energyData.state)) {
                _context2.next = 27;
                break;
              }
              _this5.btn_back.node.active = false;
              _context2.next = 24;
              return SlotsFacade.delayTime(.5);

             case 24:
              _this5.startBonusGame();
              _context2.next = 30;
              break;

             case 27:
              _this5.btn_back.node.active = true;
              _this5.btn_back.node.scale = 0;
              cc.tween(_this5.btn_back.node).to(.3, {
                scale: 1
              }, {
                easing: "backOut"
              }).delay(1.5).call(function() {
                _this5.close();
              }).start();

             case 30:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      fillGlass: function fillGlass(data) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var item, itemSpine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              console.log("#fillGlass#", data);
              SlotsFacade.soundMgr.playEffect("beer_appear");
              item = _this6.glassItems[data.idx - 1];
              item.type = data.type;
              itemSpine = item.getChildByName("spine_glass").getComponent(sp.Skeleton);
              itemSpine.setAnimation(0, "animation" + data.type, false);
              _context3.next = 8;
              return new Promise(function(res) {
                itemSpine.setCompleteListener(function() {
                  itemSpine.setCompleteListener(null);
                  itemSpine.setAnimation(0, "animation" + data.type + "_1", true);
                  var color = item.getChildByName("color").getComponent("ImgSwitchCmp");
                  color.node.active = true;
                  color.setIndex(data.type - 1);
                  var label = item.getChildByName("label").getComponent(cc.Label);
                  label.node.active = true;
                  label.string = Global.convertNumToShort(data.coin);
                  _this6._updateProgressTips(data.bonusGame.collectionIdxs.length, true);
                  res();
                });
              });

             case 8:
              _context3.next = 10;
              return SlotsFacade.delayTime(1.5);

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      startBonusGame: function startBonusGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var selectId, msg, i, winCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playBgm("bs_bgm");
              _context4.next = 3;
              return _this7._showTotalGet();

             case 3:
              _context4.next = 5;
              return SlotsFacade.popup.showBBTips();

             case 5:
              _this7.multiple_panel.active = true;
              _this7._showMultiple(0);
              _context4.next = 9;
              return new Promise(function(res) {
                SlotsFacade.popup.showBBSelect(res);
              });

             case 9:
              selectId = _context4.sent;
              _this7._showSelectedInfo(selectId);
              _context4.next = 13;
              return SlotsFacade.dm.reqSubGame({
                rtype: 2,
                choiceId: selectId
              });

             case 13:
              msg = _context4.sent;
              i = 1;

             case 15:
              if (!(i <= 5)) {
                _context4.next = 25;
                break;
              }
              _context4.next = 18;
              return _this7._showMultiple(i);

             case 18:
              _context4.next = 20;
              return SlotsFacade.popup.showBBRound(i);

             case 20:
              _context4.next = 22;
              return _this7._showRoundGame(msg.data.result, i);

             case 22:
              i++;
              _context4.next = 15;
              break;

             case 25:
              _context4.next = 27;
              return _this7._showMultiple(6);

             case 27:
              _this7.labelWinToTal.string = Global.convertNumToShort(msg.data.winCoin);
              _context4.next = 30;
              return _this7._showLastBalloon();

             case 30:
              winCoin = msg.data.winCoin;
              _context4.next = 33;
              return SlotsFacade.popup.showAmazingGold(winCoin);

             case 33:
              SlotsFacade.dm.addCoin(winCoin);
              SlotsFacade.dm.hasFree() ? SlotsFacade.soundMgr.playFreeBgm() : SlotsFacade.soundMgr.playBgm();
              _this7.close();

             case 36:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _showLastBalloon: function _showLastBalloon() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var i, element;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              i = 0;

             case 1:
              if (!(i < _this8.glassItems.length)) {
                _context5.next = 9;
                break;
              }
              element = _this8.glassItems[i];
              if (element.isBurst) {
                _context5.next = 6;
                break;
              }
              _this8._clearGalss(element);
              return _context5.abrupt("break", 9);

             case 6:
              i++;
              _context5.next = 1;
              break;

             case 9:
              SlotsFacade.soundMgr.playEffect("lastBB_complete");
              _context5.next = 12;
              return SlotsFacade.delayTime(2);

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _showTotalGet: function _showTotalGet() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this9.progressNode.active = false;
              _this9.totalWinNode.active = true;
              _this9.totalWinNode.scale = 0;
              _this9.labelWinToTal.node.active = false;
              _context6.next = 6;
              return new Promise(function(res) {
                cc.tween(_this9.totalWinNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  res();
                }).start();
              });

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _showMultiple: function _showMultiple(index) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, j, item;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("multi_current");
              for (i = 1; i <= 6; i++) for (j = 0; j < 2; j++) {
                item = _this10.multiple_panel.getChildByName("multiple" + i + "_" + j);
                if (i == index) {
                  item.getChildByName("maisui").getComponent("ImgSwitchCmp").setIndex(1);
                  item.getChildByName("spine_light").active = true;
                  item.getChildByName("multiple0").active = false;
                  item.getChildByName("multiple1").active = true;
                } else if (i > index) {
                  item.getChildByName("maisui").getComponent("ImgSwitchCmp").setIndex(1);
                  item.getChildByName("spine_light").active = false;
                  item.getChildByName("multiple0").active = false;
                  item.getChildByName("multiple1").active = true;
                } else {
                  item.getChildByName("maisui").getComponent("ImgSwitchCmp").setIndex(1);
                  item.getChildByName("spine_light").active = false;
                  item.getChildByName("multiple0").active = true;
                  item.getChildByName("multiple1").active = false;
                }
              }
              _context7.next = 4;
              return SlotsFacade.delayTime(.5);

             case 4:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _showRoundGame: function _showRoundGame(result, round) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var disableWalkRow, disableWalkCol, sum, i, r, endRows, endCols, endIndexs, canWorkInfo, _i, item, index, _index, step, len, currStepInfos, _i2, j, stepIndex, stepInfo, _loop, _i3;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              disableWalkRow = [];
              disableWalkCol = [];
              sum = result[round - 1].coin;
              for (i = 0; i < round - 1; i++) {
                r = result[i];
                sum += r.coin;
                disableWalkRow = disableWalkRow.concat(r.rows);
                disableWalkCol = disableWalkCol.concat(r.cols);
              }
              endRows = result[round - 1].rows.concat();
              endCols = result[round - 1].cols.concat();
              endIndexs = [];
              canWorkInfo = [];
              for (_i = 0; _i < LastBBCfg.length; _i++) {
                item = LastBBCfg[_i];
                if (item.col && !disableWalkCol.includes(item.col)) {
                  canWorkInfo.push(item);
                  index = endCols.indexOf(item.col);
                  if (-1 != index) {
                    endIndexs.push(canWorkInfo.length - 1);
                    endCols.splice(index, 1);
                  }
                }
                if (item.row && !disableWalkRow.includes(item.row)) {
                  canWorkInfo.push(item);
                  _index = endRows.indexOf(item.row);
                  if (-1 != _index) {
                    endIndexs.push(canWorkInfo.length - 1);
                    endRows.splice(_index, 1);
                  }
                }
              }
              if (!endIndexs.length) {
                _context8.next = 35;
                break;
              }
              step = 4;
              len = canWorkInfo.length;
              currStepInfos = [];
              _i2 = step;

             case 14:
              if (!(_i2 >= 0)) {
                _context8.next = 24;
                break;
              }
              currStepInfos.forEach(function(element) {
                _this11.glassNode.getChildByName(element.flag).active = false;
                _this11.glassNode.getChildByName(element.bg).active = false;
              });
              currStepInfos = [];
              for (j = 0; j < endIndexs.length; j++) {
                stepIndex = endIndexs[j];
                stepIndex = (stepIndex + len - _i2 % len) % len;
                stepInfo = canWorkInfo[stepIndex];
                _this11.glassNode.getChildByName(stepInfo.flag).active = true;
                _this11.glassNode.getChildByName(stepInfo.bg).active = true;
                currStepInfos.push(stepInfo);
              }
              0 == _i2 ? SlotsFacade.soundMgr.playEffect("lastBB_frame_stop") : SlotsFacade.soundMgr.playEffect("lastBB_frame_move");
              _context8.next = 21;
              return SlotsFacade.delayTime(.75);

             case 21:
              _i2--;
              _context8.next = 14;
              break;

             case 24:
              _context8.next = 26;
              return SlotsFacade.delayTime(1);

             case 26:
              _loop = function _loop(_i3) {
                var element = currStepInfos[_i3];
                for (var _j = 0; _j < element.idxs.length; _j++) {
                  var _item = _this11.glassItems[element.idxs[_j] - 1];
                  _this11._clearGalss(_item);
                }
                _this11.glassNode.getChildByName(element.bg).active = false;
                var flag = _this11.glassNode.getChildByName(element.flag);
                var spine = flag.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, flag.spineName, false);
                cc.tween(flag).delay(1.5).call(function() {
                  flag.active = false;
                  spine.node.active = false;
                }).start();
              };
              for (_i3 = 0; _i3 < currStepInfos.length; _i3++) _loop(_i3);
              SlotsFacade.soundMgr.playEffect("selected");
              _context8.next = 31;
              return SlotsFacade.delayTime(2);

             case 31:
              _this11.labelWinToTal.node.active = true;
              _this11.labelWinToTal.string = Global.convertNumToShort(sum);
              _context8.next = 36;
              break;

             case 35:
              console.log("#error#collectgame#showRoundGame#\u4e94\u8def\u53ef\u8d70");

             case 36:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      _clearGalss: function _clearGalss(item) {
        if (item.isBurst) return;
        item.isBurst = true;
        var label = item.getChildByName("label");
        label.color = new cc.Color().fromHEX("#606060");
        var color = item.getChildByName("color");
        color.active = false;
        var spine = item.getChildByName("spine_glass").getComponent(sp.Skeleton);
        spine.setAnimation(0, "animation" + item.type + "_2", false);
      },
      _glassReset: function _glassReset(item) {
        item.isBurst = false;
        item.type = 0;
        var itemSpine = item.getChildByName("spine_glass").getComponent(sp.Skeleton);
        itemSpine.setAnimation(0, "animation5", false);
        var color = item.getChildByName("color");
        color.active = false;
        var label = item.getChildByName("label");
        label.color = new cc.Color().fromHEX("#FFFFFF");
        label.active = false;
      },
      _showSelectedInfo: function _showSelectedInfo(selectId) {
        this.title2.active = true;
        this.title2.scale = 0;
        this.title2.getChildByName("icon").getComponent("ImgSwitchCmp").setIndex(selectId - 1);
        cc.tween(this.title2).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96c6dFpBzdMuYUpdKj2u9Ig", "TavernWitch_CollectProgress");
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
        icon_energy: cc.Node,
        spine_end: sp.Skeleton,
        btn_enter: cc.Node,
        progressBar: cc.Node,
        spine_full: sp.Skeleton,
        collect_track_particle: cc.Node,
        _isOpen: false
      },
      onLoad: function onLoad() {
        this._initListener();
        this._init();
      },
      _initListener: function _initListener() {
        var _this = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.showCollect(false);
        }, this);
        this.btn_enter.on(cc.Node.EventType.TOUCH_END, this._onEnterHandler.bind(this), this);
        this.progressBar.on(cc.Node.EventType.TOUCH_END, function() {
          _this._isOpen || _this._openCollect();
        }, this);
      },
      _init: function _init() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.showCollect(true);
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.collectGame.open(true, function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        });
      },
      _openCollect: function _openCollect() {
        if (this._isOpen) return;
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.getDeskInfo().needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        cc.vv.gameData._serverRawMult = needBet;
        cc.vv.UserManager.setEnterSelectBet(null);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              endPos = _this2.icon_energy.getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this2.node.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(_this2.collect_track_particle);
                lz.parent = _this2.node;
                lz.x = pos.x;
                lz.y = pos.y;
                lz.active = true;
                var p = lz.getComponent(cc.ParticleSystem);
                p.resetSystem();
                promiseArr.push(new Promise(function(res) {
                  cc.tween(lz).then(cc.bezierTo(.6, [ cc.v2(lz.x + .11 * (endPos.x - lz.x), lz.y + -.19 * (endPos.y - lz.y)), cc.v2(lz.x + .2 * (endPos.x - lz.x), lz.y + -.19 * (endPos.y - lz.y)), cc.v2(endPos.x, endPos.y) ])).then(cc.tween().call(function() {
                    lz.removeFromParent();
                    res();
                  })).start();
                }));
              });
              SlotsFacade.soundMgr.playEffect("symbol_fly");
              _context.next = 6;
              return Promise.all(promiseArr);

             case 6:
              _this2._playHeadSpine();
              _this2.setProgress(percent, true);

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _playHeadSpine: function _playHeadSpine() {
        var spine = this.icon_energy.getChildByName("spine").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (!this._isOpen) if (isInit) this.spine_full.node.active = false; else {
            this.spine_full.node.active = true;
            SlotsFacade.soundMgr.playEffect("lock");
            this.spine_full.setAnimation(0, "animation2", false);
          }
        } else {
          this.spine_full.node.active = true;
          if (isInit) this.spine_full.setAnimation(0, "animation4", false); else if (this._isOpen) {
            SlotsFacade.soundMgr.playEffect("lock");
            this.spine_full.setAnimation(0, "animation3", false);
          }
        }
        this._isOpen = boo;
      },
      setProgress: function setProgress(percent, needTransform) {
        var w = this.progressBar.width;
        var toX = percent * w - w;
        var spine_progress = this.progressBar.getChildByName("spine_progress");
        if (needTransform) {
          var collect_effect = spine_progress.getChildByName("collect_effect").getComponent(sp.Skeleton);
          collect_effect.node.active = true;
          collect_effect.setAnimation(0, "animation", false);
          collect_effect.setCompleteListener(function() {
            collect_effect.setCompleteListener(null);
            collect_effect.node.active = false;
          });
          cc.tween(spine_progress).to(.5, {
            x: toX
          }).start();
        } else spine_progress.x = toX;
      },
      showEnterCollectGameAni: function showEnterCollectGameAni() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3.spine_full.node.active = true;
              SlotsFacade.soundMgr.playEffect("bell");
              _context2.next = 4;
              return new Promise(function(res) {
                _this3.spine_full.setAnimation(0, "animation1", false);
                _this3.spine_full.setCompleteListener(function() {
                  _this3.spine_full.setCompleteListener(null);
                  res();
                });
              });

             case 4:
              _context2.next = 6;
              return new Promise(function(res) {
                _this3.spine_end.setAnimation(0, "animation2", false);
                _this3.spine_end.setCompleteListener(function() {
                  _this3.spine_end.setCompleteListener(null);
                  _this3.spine_end.setAnimation(0, "animation1", true);
                  res();
                });
              });

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_CollectWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed8847Nqg1LhoI0vYYxdk+L", "TavernWitch_CollectWheel");
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
        roundCount: 10,
        _canSpin: false,
        _data: null,
        _callBack: null,
        panel: cc.Node,
        bg: cc.Node,
        board: cc.Node,
        btn_spin: cc.Node,
        spine_spin: sp.Skeleton,
        spine_win: sp.Skeleton
      },
      _getRotation: function _getRotation(index) {
        var ret = 360 * -this.roundCount;
        var unitAngle = 60;
        var indexsAngle = [ 0, 1 * unitAngle - 360, 2 * unitAngle - 360, 3 * unitAngle - 360, 4 * unitAngle - 360, 5 * unitAngle - 360 ];
        ret += indexsAngle[index];
        return ret;
      },
      onLoad: function onLoad() {
        this._initListener();
      },
      _initListener: function _initListener() {
        this.btn_spin.on(cc.Node.EventType.TOUCH_END, this._onStartWheelHandler.bind(this), this);
      },
      _onStartWheelHandler: function _onStartWheelHandler() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var msg;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this._canSpin) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              _this.btn_spin.stopAllActions();
              SlotsFacade.soundMgr.playEffect("wheel_click");
              _this._canSpin = false;
              _context.next = 7;
              return SlotsFacade.dm.reqSubGame({
                rtype: 1
              });

             case 7:
              msg = _context.sent;
              _this._data = msg.data;
              _this.spine_spin.setAnimation(0, "animation2", false);
              _this.spine_spin.setCompleteListener(function() {
                _this.spine_spin.setCompleteListener(null);
                _this.spine_spin.setAnimation(0, "animation3", true);
              });
              _this._startWheel();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _reset: function _reset() {
        this.board.angle = 0;
        this.bg.active = false;
        this.spine_win.node.active = false;
      },
      _startWheel: function _startWheel() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_spin");
              _context2.next = 3;
              return new Promise(function(res) {
                cc.tween(_this2.board).to(8, {
                  angle: _this2._getRotation(_this2._data.id - 1)
                }, {
                  easing: "quartInOut"
                }).call(function() {
                  _this2.spine_win.node.active = true;
                  SlotsFacade.soundMgr.playEffect("wheel_still");
                  res();
                }).start();
              });

             case 3:
              _context2.next = 5;
              return SlotsFacade.delayTime(2);

             case 5:
              _this2._completeWheel();

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _completeWheel: function _completeWheel() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!_this3._data.coin) {
                _context3.next = 5;
                break;
              }
              SlotsFacade.soundMgr.playEffect("wheel_popup3");
              _context3.next = 4;
              return SlotsFacade.popup.showCollectGold(_this3._data.coin);

             case 4:
              SlotsFacade.dm.addCoin(_this3._data.coin);

             case 5:
              _context3.next = 7;
              return _this3.close();

             case 7:
              _this3._callBack && _this3._callBack(_this3._data);

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _freshView: function _freshView() {
        var wheelItems = SlotsFacade.dm.energyData.progressData.wheelItems;
        for (var i = 0; i < wheelItems.length; i++) {
          var itemData = wheelItems[i];
          var label = this.board.getChildByName("label" + (i + 1)).getComponent(cc.Label);
          label.string = Global.convertNumToShort(itemData.coin);
        }
      },
      open: function open(cb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.bottomCmp.ShowBtnsByState("unstoped");
              SlotsFacade.soundMgr.playEffect("wheel_in");
              _this4._callBack = cb;
              _this4._reset();
              _this4._canSpin = true;
              _this4._freshView();
              _this4.bg.active = true;
              _this4.bg.opacity = 128;
              _this4.spine_spin.node.active = true;
              _this4.spine_spin.setAnimation(0, "animation1", true);
              _this4.panel.active = true;
              _this4.panel.scale = 0;
              cc.tween(_this4.panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context5.next = 15;
              return cc.vv.gameData.awaitTime(.5);

             case 15:
              cc.vv.gameData.checkAutoPlay(_this4.btn_spin, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var msg;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    if (_this4._canSpin) {
                      _context4.next = 2;
                      break;
                    }
                    return _context4.abrupt("return");

                   case 2:
                    SlotsFacade.soundMgr.playEffect("wheel_click");
                    _this4._canSpin = false;
                    _context4.next = 6;
                    return SlotsFacade.dm.reqSubGame({
                      rtype: 1
                    });

                   case 6:
                    msg = _context4.sent;
                    _this4._data = msg.data;
                    _this4.spine_spin.setAnimation(0, "animation2", false);
                    _this4.spine_spin.setCompleteListener(function() {
                      _this4.spine_spin.setCompleteListener(null);
                      _this4.spine_spin.setAnimation(0, "animation3", true);
                    });
                    _this4._startWheel();

                   case 11:
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
      close: function close() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function(res) {
                cc.tween(_this5.bg).to(.5, {
                  opacity: 0
                }).call(function() {
                  _this5.bg.active = false;
                }).start();
                cc.tween(_this5.panel).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this5.panel.active = false;
                  res();
                }).start();
              }));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44376x8MlFJZbQaLyPYgiA0", "TavernWitch_FlowCtrl");
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
      enterRoom: function enterRoom() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var total, rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (rest > 0) {
                SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                SlotsFacade.bottomCmp.SetWin(nTotal);
                _this.enterFreeGame();
              }
              if (!(SlotsFacade.dm.energyData.state > 0)) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return new Promise(function(res) {
                SlotsFacade.collectGame.open(false, res);
              });

             case 6:
              if (!SlotsFacade.dm.jackpotGame) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.enterJpGame();

             case 9:
              SlotsFacade.slots.CanDoNextRound();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cards;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.slots._gameInfo = msg;
              SlotsFacade.slots.SetReelStateInfo(msg.resultCards);
              cards = SlotsFacade.dm.processResultCards(msg.resultCards);
              SlotsFacade.dm.afterProcessingCards = cards.concat();
              SlotsFacade.slots.SetSlotsResult(cards);

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, _nWin, _nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.dm.isFistTriggerFree() || SlotsFacade.slots.resetReelBg();
              _this2.collectEnergy();
              _context3.next = 4;
              return SlotsFacade.character.changeMultiple();

             case 4:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context3.next = 10;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 10:
              _context3.next = 12;
              return _this2.enterCollectGame();

             case 12:
              _context3.next = 14;
              return _this2.enterJpGame();

             case 14:
              _context3.next = 16;
              return SlotsFacade.delayTime(.3);

             case 16:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context3.next = 31;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context3.next = 20;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getScatterIndexs());

             case 20:
              _context3.next = 22;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), SlotsFacade.dm.isFistTriggerFree());

             case 22:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context3.next = 28;
                break;
              }
              SlotsFacade.slots.Backup();
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 27;
              return SlotsFacade.delayTime(1);

             case 27:
              _this2.enterFreeGame();

             case 28:
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 56;
              break;

             case 31:
              if (!cc.vv.gameData.hasFree()) {
                _context3.next = 35;
                break;
              }
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 56;
              break;

             case 35:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context3.next = 55;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context3.next = 39;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin());

             case 39:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 42;
              return SlotsFacade.delayTime(1);

             case 42:
              SlotsFacade.slots.Resume();
              SlotsFacade.character.changeMultipleExitFree();
              Global.SlotsSoundMgr.stopBgm();
              _this2.enterNormalGame();
              _context3.next = 48;
              return SlotsFacade.delayTime(.5);

             case 48:
              _nWin = cc.vv.gameData.GetGameTotalFreeWin();
              _nTotal = _nWin;
              _context3.next = 52;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(_nWin, _nTotal, true, res);
              });

             case 52:
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 56;
              break;

             case 55:
              SlotsFacade.slots.CanDoNextRound();

             case 56:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var energyData, items, posArr;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData.progressData;
              if (!(energyData && energyData.currCnt)) {
                _context4.next = 7;
                break;
              }
              items = SlotsFacade.slots.getSymbolsByServerIds(SlotsFacade.dm.getCollectSymbolIndexs());
              posArr = [];
              items.forEach(function(v) {
                posArr.push(v.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              });
              _context4.next = 7;
              return SlotsFacade.collectProgress.collectEnergy(posArr, SlotsFacade.dm.getCollectPercent());

             case 7:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        SlotsFacade.topCmp.SetBackLobby(false);
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.mainPanel.showBg(true);
        SlotsFacade.soundMgr.playFreeBgm();
        SlotsFacade.character.changeMultipleTriggerFree();
      },
      enterNormalGame: function enterNormalGame() {
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.mainPanel.showBg(false);
        SlotsFacade.soundMgr.playBgm();
      },
      enterCollectGame: function enterCollectGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var energyData;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData;
              if (!(1 == energyData.state)) {
                _context5.next = 6;
                break;
              }
              _context5.next = 4;
              return SlotsFacade.collectProgress.showEnterCollectGameAni();

             case 4:
              _context5.next = 6;
              return new Promise(function(res) {
                SlotsFacade.collectProgress.setProgress(0);
                SlotsFacade.collectGame.open(false, res);
              });

             case 6:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterJpGame: function enterJpGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var jackpotGame;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              jackpotGame = SlotsFacade.dm.jackpotGame;
              if (jackpotGame) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              _context6.next = 5;
              return SlotsFacade.slots.playBonus(SlotsFacade.dm.getBonusIndexs());

             case 5:
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context6.next = 8;
              return SlotsFacade.popup.showJpFeatureTips();

             case 8:
              SlotsFacade.mainPanel.showSceneTransition();
              _context6.next = 11;
              return SlotsFacade.delayTime(1);

             case 11:
              _context6.next = 13;
              return new Promise(function(res) {
                SlotsFacade.jpGame.open(res);
              });

             case 13:
              _context6.next = 15;
              return new Promise(function(success) {
                var winCoin = SlotsFacade.dm.getJPGameWinCoin();
                var totalWin = winCoin;
                cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWin = SlotsFacade.dm.getSpinData() ? cc.vv.gameData.GetGameTotalFreeWin() + winCoin : cc.vv.gameData.GetTotalFreeWin() + winCoin);
                cc.vv.gameData.AddCoin(winCoin);
                SlotsFacade.slots.ShowBottomWin(winCoin, totalWin, true, function() {
                  success();
                });
              });

             case 15:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04983pdeNdCP6UFJi6++DMy", "TavernWitch_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null,
        wildGame: null,
        wildMultipleList: null,
        jackpotGame: null,
        afterProcessingCards: null,
        _jackpotWinCoin: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this.energyData = deskInfo.bonusGame;
        deskInfo.wildGameInFree ? this.wildGame = deskInfo.wildGameInFree : this.wildGame = deskInfo.wildGame;
        this.wildMultipleList = [ 1, 2, 3, 5, 10, 25 ];
        this.jackpotGame = deskInfo.jackpotGame;
        this._super(deskInfo, gameId, gameJackpot);
      },
      addCoin: function addCoin(coin) {
        this.setCoins(this.GetCoin() + coin);
      },
      setJackpotWinCoin: function setJackpotWinCoin(coin) {
        this._jackpotWinCoin = coin;
      },
      getJPGameWinCoin: function getJPGameWinCoin() {
        return this._jackpotWinCoin;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.energyData = msg.bonusGame;
          this.freeTurnTable = msg.freeTurnTable;
          this.freeCnt = msg.freeCnt || 0;
          this.totalFreeCnt = msg.allFreeCnt || 0;
          msg.wildGameInFree ? this.wildGame = msg.wildGameInFree : this.wildGame = msg.wildGame;
          this.jackpotGame = msg.jackpotGame;
        }
        this._super(msg);
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      processResultCards: function processResultCards(cards) {
        var result = cards.concat();
        var row = 5;
        var col = 5;
        var scatterId = 2;
        var scatterIdDown = 2;
        var scatterIdUp = 201;
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i];
          if (c != scatterId) continue;
          var crrRow = Math.floor(i / col);
          var upperIsScatter = false;
          var downIsScatter = false;
          upperIsScatter = 0 != crrRow && cards[i - col] == scatterId;
          downIsScatter = 4 != crrRow && cards[i + col] == scatterId;
          0 == crrRow ? result[i] = downIsScatter ? scatterIdDown : scatterIdUp : 4 == crrRow ? result[i] = upperIsScatter ? scatterIdUp : scatterIdDown : upperIsScatter ? result[i] = scatterIdUp : downIsScatter && (result[i] = scatterIdDown);
        }
        result = this.processWild(result);
        return result;
      },
      processWild: function processWild(cards) {
        var result = cards.concat();
        var cfg = this.getGameCfg();
        if (cfg.isWild(result[2]) && cfg.isWild(result[22])) {
          result[2] = 1;
          result[7] = 101;
          result[12] = 102;
          result[17] = 103;
          result[22] = 104;
        } else if (cfg.isWild(result[2]) && !cfg.isWild(result[22])) {
          var firstRow = 3;
          for (var i = 3; i >= 0; i--) if (cfg.isWild(result[5 * i + 2])) {
            firstRow = i;
            break;
          }
          for (var _i = 0; _i <= firstRow; _i++) result[5 * _i + 2] = 104 - (firstRow - _i);
        } else if (!cfg.isWild(result[2]) && cfg.isWild(result[22])) {
          var _firstRow = 4;
          for (var _i2 = 0; _i2 < 5; _i2++) if (cfg.isWild(result[5 * _i2 + 2])) {
            _firstRow = _i2;
            result[5 * _i2 + 2] = 1;
            break;
          }
          for (var _i3 = _firstRow + 1; _i3 < 5; _i3++) result[5 * _i3 + 2] = 101 - (_firstRow + 1 - _i3);
        }
        return result;
      },
      hasWild: function hasWild() {
        var cfg = this.getGameCfg();
        var spinData = this.getSpinData().resultCards;
        if (cfg.isWild(spinData[2]) || cfg.isWild(spinData[7]) || cfg.isWild(spinData[12]) || cfg.isWild(spinData[17]) || cfg.isWild(spinData[22])) return true;
        return false;
      },
      hasScatterByCol: function hasScatterByCol(colId) {
        if (colId < 1 || colId > 3) return false;
        var row = 5;
        var col = 5;
        for (var i = 0; i < row; i++) if (GameCfg.isScatter(this.afterProcessingCards[colId + col * i])) return true;
        return false;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this._deskInfo.needBet;
      },
      getCollectSymbolIndexs: function getCollectSymbolIndexs() {
        if (!this.afterProcessingCards || this.afterProcessingCards.length < 1) return [];
        var ret = [];
        this.afterProcessingCards.forEach(function(v, i) {
          4 == v && ret.push(i + 1);
        });
        return ret;
      },
      reqSubGame: function reqSubGame(param) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: param
          };
          var resp = function resp(msg) {
            cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, resp, false, _this);
            console.log("reqSubGame-resp:", msg);
            res(msg);
          };
          cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, resp, _this);
          cc.vv.NetManager.send(req, true);
        });
      },
      hasFree: function hasFree() {
        return this.GetFreeTime() > 0;
      },
      isTriggerFree: function isTriggerFree() {
        return this.triggerFreeCnt() > 0;
      },
      triggerFreeCnt: function triggerFreeCnt() {
        var freeResult = this.getSpinData().freeResult;
        if (freeResult && freeResult.triFreeCnt && freeResult.freeInfo && freeResult.freeInfo.freeCnt) return freeResult.freeInfo.freeCnt;
        return 0;
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this.getSpinData().freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getMultipleIndex: function getMultipleIndex(multiple) {
        var index = this.wildMultipleList.indexOf(multiple);
        if (index >= 0) return index;
        console.log("\u83b7\u53d6\u500d\u6570\u51fa\u9519");
        return 0;
      },
      getCollectPercent: function getCollectPercent() {
        if (!this.energyData || !this.energyData.progressData) return 0;
        var percent = this.energyData.progressData.totalCnt / this.energyData.progressData.needCnt;
        percent = Math.min(1, percent);
        percent = Math.max(0, percent);
        return percent;
      },
      getJpValue: function getJpValue(jpType) {
        var baseArr = cc.vv.AppData.getGameJackpot(this._gameId);
        var jpBase = 10;
        baseArr && (jpBase = baseArr[jpType]);
        return this.GetTotalBet() * jpBase;
      },
      getBigWinType: function getBigWinType(winCoin) {
        var mul = winCoin / this.singleBet;
        var type = -1;
        mul >= 100 ? type = 5 : mul >= 80 ? type = 4 : mul >= 60 ? type = 3 : mul >= 40 ? type = 2 : mul >= 20 ? type = 1 : mul >= 10 && (type = 0);
        return type;
      },
      getBonusIndexs: function getBonusIndexs() {
        var ret = [];
        if (this.afterProcessingCards) for (var i = 0; i < this.afterProcessingCards.length; i++) {
          var c = this.afterProcessingCards[i];
          c == this.getGameCfg().bonusId && ret.push(i + 1);
        }
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TavernWitch_GameRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e1deB4YbFOFYLvkWdObvHQ", "TavernWitch_GameRule");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg_mask: cc.Node,
        content_node: cc.Node,
        pageView: cc.PageView,
        btnPre: cc.Button,
        btnNext: cc.Button,
        btnExit: cc.Button
      },
      onLoad: function onLoad() {
        this.btnPre.node.on("click", this.btnPreHandler.bind(this), this);
        this.btnNext.node.on("click", this.btnNextHandler.bind(this), this);
        this.btnExit.node.on("click", this.btnExitHandler.bind(this), this);
        this.pageView.node.on("scroll-ended", this.scrollEndHandler.bind(this), this);
      },
      btnPreHandler: function btnPreHandler() {
        var currIndex = this.pageView.getCurrentPageIndex();
        var toIndex = currIndex - 1;
        toIndex >= 0 && this.pageView.scrollToPage(toIndex, .5);
      },
      btnNextHandler: function btnNextHandler() {
        var currIndex = this.pageView.getCurrentPageIndex();
        var toIndex = currIndex + 1;
        toIndex < this.pageView.getPages().length && this.pageView.scrollToPage(toIndex, .5);
      },
      scrollEndHandler: function scrollEndHandler() {},
      btnExitHandler: function btnExitHandler() {
        var _this = this;
        new Promise(function(res) {
          cc.tween(_this.content_node).to(.3, {
            opacity: 0,
            scale: 0
          }, {
            easing: "backIn"
          }).call(function() {
            res();
          }).start();
        }).then(function(data) {
          cc.tween(_this.bg_mask).to(.1, {
            opacity: 0
          }).call(function() {
            _this.bg_mask.opacity = 128;
            _this.bg_mask.active = true;
            _this.content_node.opacity = 255;
            _this.content_node.scale = 1;
            _this.content_node.active = true;
            _this.node.active = false;
          }).start();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_JPBag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1aabbLWKZFNqlgjStMhIfb", "TavernWitch_JPBag");
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
        bg: cc.Node,
        diamond: cc.Node,
        multiple: cc.Node,
        spine_qiandai: sp.Skeleton,
        spine_beishu: sp.Skeleton,
        itemType: 0,
        id: 0
      },
      onLoad: function onLoad() {},
      reset: function reset() {
        this.node.scale = 1;
        this.node.stopAllActions();
        this.bg.active = true;
        this.diamond.active = false;
        this.multiple.active = false;
        this.spine_qiandai.node.active = false;
        this.spine_beishu.node.active = false;
        this.itemType = 0;
        this.multiple.color = new cc.Color().fromHEX("#ffffff");
        this.diamond.color = new cc.Color().fromHEX("#ffffff");
        this.diamond.getChildByName("icon").color = new cc.Color().fromHEX("#ffffff");
      },
      getGlobalPos: function getGlobalPos() {
        return this.node.convertToWorldSpaceAR(cc.v2(0, 0));
      },
      setItemType: function setItemType(itemType) {
        this.itemType = itemType;
        this.bg.active = false;
        this.spine_qiandai.node.active = false;
        this.spine_beishu.node.active = false;
        this.diamond.active = itemType <= 4;
        this.multiple.active = itemType > 4;
        if (itemType > 4) {
          this.multiple.getComponent("ImgSwitchCmp").setIndex(itemType - 5);
          this.spine_beishu.node.active = true;
        } else {
          var iconCmp = this.diamond.getComponent("ImgSwitchCmp");
          iconCmp.setIndex(4 - itemType);
          var iconMiniCmp = iconCmp.node.getChildByName("icon").getComponent("ImgSwitchCmp");
          iconMiniCmp.setIndex(4 - itemType);
        }
      },
      select: function select(itemType) {
        cc.tween(this.node).repeatForever(cc.tween().to(.5, {
          scale: 1.2
        }).to(.5, {
          scale: 1
        })).start();
      },
      unSelect: function unSelect(itemType) {
        this.bg.active = false;
        this.spine_qiandai.node.active = false;
        this.spine_beishu.node.active = false;
        if (0 == this.itemType) {
          var node = null;
          var diamond = this.diamond;
          diamond.active = itemType <= 4;
          var multiple = this.multiple;
          multiple.active = itemType > 4;
          if (itemType > 4) {
            var multipleCmp = multiple.getComponent("ImgSwitchCmp");
            multipleCmp.setIndex(itemType - 5);
            node = multiple;
          } else {
            var iconCmp = diamond.getComponent("ImgSwitchCmp");
            iconCmp.setIndex(4 - itemType);
            var iconMiniCmp = iconCmp.node.getChildByName("icon").getComponent("ImgSwitchCmp");
            iconMiniCmp.setIndex(4 - itemType);
            iconMiniCmp.node.color = new cc.Color().fromHEX("#898989");
            node = diamond;
          }
          node.scale = 0;
          node.color = new cc.Color().fromHEX("#898989");
          cc.tween(node).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        } else {
          this.multiple.color = new cc.Color().fromHEX("#898989");
          this.diamond.color = new cc.Color().fromHEX("#898989");
          this.diamond.getChildByName("icon").color = new cc.Color().fromHEX("#898989");
        }
        SlotsFacade.delayTime(.8);
      },
      openBag: function openBag(itemType) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spine, diamond, multiple, node, multipleCmp, iconCmp, iconMiniCmp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.itemType = itemType;
              _this.bg.active = false;
              _this.spine_beishu.node.active = false;
              spine = _this.spine_qiandai;
              spine.node.active = true;
              spine.setCompleteListener(null);
              spine.setAnimation(0, "animation2", false);
              spine.setCompleteListener(function() {
                spine.node.active = false;
              });
              diamond = _this.diamond;
              diamond.active = itemType <= 4;
              multiple = _this.multiple;
              multiple.active = itemType > 4;
              node = null;
              if (itemType > 4) {
                multipleCmp = multiple.getComponent("ImgSwitchCmp");
                multipleCmp.setIndex(itemType - 5);
                node = multiple;
                SlotsFacade.soundMgr.playEffect([ "multi_out1", "multi_out2", "multi_out3" ][itemType - 5]);
                _this.spine_beishu.node.active = true;
              } else {
                iconCmp = diamond.getComponent("ImgSwitchCmp");
                iconCmp.setIndex(4 - itemType);
                iconMiniCmp = iconCmp.node.getChildByName("icon").getComponent("ImgSwitchCmp");
                iconMiniCmp.setIndex(4 - itemType);
                node = diamond;
                SlotsFacade.soundMgr.playEffect([ "jp_open1", "jp_open2", "jp_open3", "jp_open4" ][4 - itemType]);
              }
              node.scale = 0;
              cc.tween(node).delay(.8).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context.next = 18;
              return SlotsFacade.delayTime(.8);

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      shake: function shake() {
        var _this2 = this;
        if (!this.bg.active || this.itemType > 0) return;
        this.bg.active = false;
        var spine = this.spine_qiandai;
        spine.node.active = true;
        spine.setCompleteListener(null);
        spine.setAnimation(0, "animation1", false);
        spine.setCompleteListener(function() {
          spine.node.active = false;
          _this2.bg.active = true;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_JPGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79227fx8PFE9Z0L1/xLmXzv", "TavernWitch_JPGame");
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
        panel: cc.Node,
        jp_grand: cc.Node,
        jp_major: cc.Node,
        jp_minor: cc.Node,
        jp_mini: cc.Node,
        icon_diamond: cc.Node,
        particle: cc.Node,
        _bagList: [],
        _rateList: [],
        _data: null,
        _callBack: null
      },
      onLoad: function onLoad() {
        for (var i = 1; i <= 23; i++) {
          var itemCmp = this.panel.getChildByName("jp_bag" + i).getComponent("TavernWitch_JPBag");
          itemCmp.id = i;
          itemCmp.node.on(cc.Node.EventType.TOUCH_END, this._onTouchBagHandler.bind(this), this);
          this._bagList.push(itemCmp);
        }
        this._reset();
      },
      _reset: function _reset() {
        this._data = {
          canTouch: false,
          jpCnt: [ 0, 0, 0, 0 ],
          canRandomAni: true
        };
        for (var i = 0; i < this._bagList.length; i++) this._bagList[i].reset();
        this._rateList = [];
      },
      _onTouchBagHandler: function _onTouchBagHandler(evt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bag, msg;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this._data.canTouch) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              bag = evt.target.getComponent("TavernWitch_JPBag");
              if (!SlotsFacade.dm.jackpotGame.choiceIdxs.includes(bag.id)) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");

             case 5:
              _this._data.canTouch = false;
              _context.next = 8;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                choiceId: bag.id
              });

             case 8:
              msg = _context.sent;
              SlotsFacade.dm.jackpotGame = msg.data.jackpotGame;
              _this._initData();
              msg.data.choiceItem > 4 && _this._rateList.push(bag);
              _context.next = 14;
              return bag.openBag(msg.data.choiceItem);

             case 14:
              _context.next = 16;
              return _this._moveDiamond(bag, msg.data);

             case 16:
              _this._settlement(msg);

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _settlement: function _settlement(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var jpData, jpItem, jpNodes, i, cnt, _jpItem;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              jpData = msg.data.jackpotGame;
              if (!(jpData.winCoin > 0)) {
                _context2.next = 21;
                break;
              }
              _this2._data.canRandomAni = false;
              jpItem = [ _this2.jp_grand, _this2.jp_major, _this2.jp_minor, _this2.jp_mini ][msg.data.choiceItem - 1];
              _context2.next = 6;
              return _this2._playParticleFly(jpItem);

             case 6:
              jpNodes = [ _this2.jp_mini, _this2.jp_minor, _this2.jp_major, _this2.jp_grand ];
              for (i = 0; i < jpNodes.length; i++) {
                cnt = msg.data.jackpotGame.jackpotValues[i];
                _jpItem = jpNodes[i];
                _jpItem.getChildByName("lbl_num").getComponent(cc.Label).string = Global.FormatNumToComma(cnt);
              }
              _this2._showJpWinEffect(msg.data.choiceItem);
              _context2.next = 11;
              return _this2._showRestBag(msg.data);

             case 11:
              SlotsFacade.soundMgr.playEffect("jp_stop");
              _context2.next = 14;
              return SlotsFacade.delayTime(.5);

             case 14:
              _context2.next = 16;
              return SlotsFacade.popup.showWinJpGold(jpData.winCoin, 4 - msg.data.choiceItem);

             case 16:
              SlotsFacade.dm.setJackpotWinCoin(jpData.winCoin);
              SlotsFacade.dm.jackpotGame = null;
              _this2.close();
              _context2.next = 22;
              break;

             case 21:
              _this2._data.canTouch = true;

             case 22:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _playParticleFly: function _playParticleFly(jackpotNode) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var time, i, bag, par, startPos, endPos;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              time = 0;
              for (i = 0; i < _this3._rateList.length; i++) {
                bag = _this3._rateList[i];
                par = cc.instantiate(_this3.particle);
                par.active = true;
                par.parent = _this3.node.parent;
                startPos = bag.node.convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = _this3.node.parent.convertToNodeSpaceAR(startPos);
                endPos = jackpotNode.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this3.node.parent.convertToNodeSpaceAR(endPos);
                par.position = startPos;
                time = .5;
                cc.tween(par).to(.5, {
                  position: endPos
                }).start();
              }
              _context3.next = 4;
              return SlotsFacade.delayTime(time);

             case 4:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _showRestBag: function _showRestBag(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var jpData, choiceItem, i, element, bag, _i, _element, _bag;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              jpData = data.jackpotGame;
              choiceItem = data.choiceItem;
              for (i = 0; i < jpData.choiceIdxs.length; i++) {
                element = jpData.choiceIdxs[i];
                bag = _this4._bagList[element - 1];
                bag.itemType == choiceItem || bag.itemType > 4 ? bag.select(jpData.choiceItems[i]) : bag.unSelect(jpData.choiceItems[i]);
              }
              for (_i = 0; _i < jpData.restIdxs.length; _i++) {
                _element = jpData.restIdxs[_i];
                _bag = _this4._bagList[_element - 1];
                _bag.unSelect(jpData.restItems[_i]);
              }
              _context4.next = 6;
              return SlotsFacade.delayTime(2);

             case 6:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _moveDiamond: function _moveDiamond(bag, data) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var itemType, startPos, diamond_container, diamond, endPos, icon;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              itemType = data.choiceItem;
              if (!(itemType > 4)) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return");

             case 3:
              startPos = cc.v2(bag.node.x, bag.node.y);
              diamond_container = [ _this5.jp_grand, _this5.jp_major, _this5.jp_minor, _this5.jp_mini ][itemType - 1].getChildByName("diamond_container");
              diamond = diamond_container.getChildByName("icon" + _this5._data.jpCnt[itemType - 1]);
              endPos = _this5.panel.convertToNodeSpaceAR(diamond.convertToWorldSpaceAR(cc.v2(0, 0)));
              icon = _this5.icon_diamond.getChildByName("icon");
              icon.active = true;
              icon.getComponent("ImgSwitchCmp").setIndex(4 - itemType + 1);
              _this5.icon_diamond.x = startPos.x;
              _this5.icon_diamond.y = startPos.y;
              _context5.next = 14;
              return new Promise(function(res) {
                cc.tween(_this5.icon_diamond).to(.5, {
                  x: endPos.x,
                  y: endPos.y
                }).call(function() {
                  icon.active = false;
                  diamond.getComponent("ImgSwitchCmp").setIndex(1);
                  var beishuxuli = _this5.icon_diamond.getChildByName("beishuxuli").getComponent(sp.Skeleton);
                  beishuxuli.node.active = true;
                  beishuxuli.setAnimation(0, "animation", false);
                  beishuxuli.setCompleteListener(function() {
                    beishuxuli.setCompleteListener(null);
                    beishuxuli.node.active = false;
                  });
                  res();
                }).start();
              });

             case 14:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      close: function close() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this6._data.canRandomAni = false;
              SlotsFacade.mainPanel.showSceneTransition();
              _context6.next = 4;
              return SlotsFacade.delayTime(1);

             case 4:
              _this6.panel.active = false;
              if (SlotsFacade.dm.hasFree()) SlotsFacade.soundMgr.playFreeBgm(); else {
                Global.SlotsSoundMgr.stopBgm();
                SlotsFacade.soundMgr.playBgm();
              }
              _this6._callBack && _this6._callBack();

             case 7:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _initJp: function _initJp() {
        var jpCnt = this._data.jpCnt;
        var jpNodes = [ this.jp_grand, this.jp_major, this.jp_minor, this.jp_mini ];
        var jackpotGame = SlotsFacade.dm.getSpinData() ? SlotsFacade.dm.getSpinData().jackpotGame : SlotsFacade.dm.getDeskInfo().jackpotGame;
        for (var i = 0; i < jpNodes.length; i++) {
          var jpType = i + 1;
          var cnt = jpCnt[i];
          var jpItem = jpNodes[i];
          jpItem.getChildByName("lbl_num").getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpotValues[jpNodes.length - 1 - i]);
          jpItem.getChildByName("win_effect").active = false;
          var items = jpItem.getChildByName("diamond_container").children;
          for (var j = 0; j < items.length; j++) {
            var icon = items[j].getComponent("ImgSwitchCmp");
            j < cnt ? icon.setIndex(1) : icon.setIndex(0);
          }
        }
      },
      _showJpWinEffect: function _showJpWinEffect(choiceItem) {
        var jpItem = [ this.jp_grand, this.jp_major, this.jp_minor, this.jp_mini ][choiceItem - 1];
        jpItem.getChildByName("win_effect").active = true;
      },
      _initBag: function _initBag() {
        var jpData = SlotsFacade.dm.jackpotGame;
        for (var i = 0; i < jpData.choiceIdxs.length; i++) {
          var idx = jpData.choiceIdxs[i];
          var itemType = jpData.choiceItems[i];
          var bag = this._bagList[idx - 1];
          bag.setItemType(itemType);
        }
      },
      _randomBagSpineAni: function _randomBagSpineAni() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var jpData, restIdx, i, len, _i2, temp, idx, count, _i3, bag;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (_this7._data.canRandomAni) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              jpData = SlotsFacade.dm.jackpotGame;
              restIdx = [];
              i = 1;

             case 5:
              if (!(i <= 23)) {
                _context7.next = 12;
                break;
              }
              if (!jpData.choiceIdxs.includes(i)) {
                _context7.next = 8;
                break;
              }
              return _context7.abrupt("continue", 9);

             case 8:
              restIdx.push(i);

             case 9:
              i++;
              _context7.next = 5;
              break;

             case 12:
              len = restIdx.length;
              for (_i2 = 0; _i2 < len; _i2++) {
                temp = restIdx[_i2];
                idx = Math.floor(Math.random() * len);
                restIdx[_i2] = restIdx[idx];
                restIdx[idx] = temp;
              }
              count = [ 4, 5, 6 ][Math.floor(3 * Math.random())];
              count = Math.min(len, count);
              for (_i3 = 0; _i3 < count; _i3++) {
                bag = _this7._bagList[restIdx[_i3] - 1];
                bag.shake();
              }
              _context7.next = 19;
              return SlotsFacade.delayTime(2);

             case 19:
              _this7._randomBagSpineAni();

             case 20:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _initData: function _initData() {
        var jpData = SlotsFacade.dm.jackpotGame;
        this._data.jpCnt = [ 0, 0, 0, 0 ];
        for (var i = 0; i < jpData.choiceItems.length; i++) {
          var item = jpData.choiceItems[i];
          item <= 4 && this._data.jpCnt[item - 1]++;
        }
      },
      _showGuideTips: function _showGuideTips() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var jpData;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              jpData = SlotsFacade.dm.jackpotGame;
              if (!(0 == jpData.choiceIdxs.length)) {
                _context8.next = 4;
                break;
              }
              _context8.next = 4;
              return SlotsFacade.popup.showJpGameGuideTips();

             case 4:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      open: function open(cb) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              SlotsFacade.soundMgr.playBgm("jp_bgm");
              _this8._callBack = cb;
              _this8.panel.active = true;
              _this8._reset();
              _this8._initData();
              _this8._initJp();
              _this8._initBag();
              _this8._randomBagSpineAni();
              _context9.next = 10;
              return _this8._showGuideTips();

             case 10:
              _this8._data.canTouch = true;

             case 11:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f5ecqbmARHXrinLvVmxXV6", "TavernWitch_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("TavernWitch_MainPanel");
        this.flowCtrl = this.addComponent("TavernWitch_FlowCtrl");
        this.soundMgr = this.addComponent("TavernWitch_Sound");
        this.collectProgress = this.mainPanel.collect_progress.getComponent("TavernWitch_CollectProgress");
        this.collectGame = this.mainPanel.collect_game_node.getComponent("TavernWitch_CollectGame");
        this.popup = this.mainPanel.popup.getComponent("TavernWitch_Popup");
        this.character = this.mainPanel.character_node.getComponent("TavernWitch_Character");
        this.jpGame = this.mainPanel.jp_game_node.getComponent("TavernWitch_JPGame");
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
      },
      onDestroy: function onDestroy() {
        window.SlotsFacade = null;
        this.dm = null;
      },
      delayTime: function delayTime(time) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.scheduleOnce(function() {
            res();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TavernWitch_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2290eAloi1OGoTaBzpXf3FO", "TavernWitch_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        character_node: cc.Node,
        slots: cc.Node,
        collect_progress: cc.Node,
        collect_game_node: cc.Node,
        jp_game_node: cc.Node,
        popup: cc.Node,
        operate_node: cc.Node,
        transition_node: cc.Node
      },
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character_node");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.collect_game_node = this.node.getChildByName("bonus_game_node");
        this.jp_game_node = this.node.getChildByName("jp_game_node");
        this.popup = this.node.getChildByName("popup");
        this.operate_node = this.node.getChildByName("operate_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.spineSceneTransition = this.transition_node.getChildByName("spine_1").getComponent(sp.Skeleton);
      },
      showBg: function showBg(isFree) {
        var index = 0;
        isFree && (index = 1);
        this.bg.getComponent("ImgSwitchCmp").setIndex(index);
        if (isFree) {
          this.character_node.y -= 56;
          for (var i = 1; i < 4; i++) cc.find("slots/character_node/light" + i, this.node).active = false;
        } else {
          this.character_node.y += 56;
          for (var _i = 1; _i < 4; _i++) cc.find("slots/character_node/light" + _i, this.node).active = true;
        }
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        var _this = this;
        SlotsFacade.soundMgr.playEffect("change");
        this.spineSceneTransition.node.active = true;
        this.spineSceneTransition.setAnimation(0, "animation", false);
        this.spineSceneTransition.setCompleteListener(function() {
          _this.spineSceneTransition.setCompleteListener(null);
          _this.spineSceneTransition.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5310Ez7u5JAq1cUyCu96sO", "TavernWitch_Popup");
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
        bg: cc.Node
      },
      onLoad: function onLoad() {},
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showWinGold: function showWinGold(goldNumb) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context.next = 9;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.active = isFirstTrigger;
              _context2.next = 8;
              return new Promise(function(res) {
                var tw = cc.tween(panel);
                tw = tw.to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                });
                if (isFirstTrigger) {
                  SlotsFacade.soundMgr.playEffect("trigger_fg");
                  var handler = function handler() {
                    cc.log("22222222222222222222222222222");
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    okBtn.off(cc.Node.EventType.TOUCH_END);
                    cc.tween(panel).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      _this2.showBg(false);
                      panel.active = false;
                      res();
                    }).start();
                  };
                  cc.vv.gameData.checkAutoPlay(okBtn, handler);
                  okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                    cc.log("1111111111111111111111111");
                    okBtn.stopAllActions();
                    handler();
                  });
                } else {
                  SlotsFacade.soundMgr.playEffect("fg_retrigger");
                  tw = tw.delay(1).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  });
                }
                tw.start();
              });

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fg_popup2");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context3.next = 9;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showCollectGold: function showCollectGold(goldNumb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_collect_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context4.next = 9;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this4.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showAmazingGold: function showAmazingGold(goldNumb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bs_popup7");
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_win_amazing_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context5.next = 9;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this5.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showBBTips: function showBBTips() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bstrigger_popup4");
              _this6.showBg(true);
              panel = _this6.node.getChildByName("panel_beer_bonus_1");
              panel.active = true;
              panel.scale = 0;
              okBtn = panel.getChildByName("btn_ok");
              _context6.next = 8;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).call(function() {
                    SlotsFacade.soundMgr.playEffect("popup_out");
                  }).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this6.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showBBSelect: function showBBSelect(cb) {
        SlotsFacade.soundMgr.playEffect("choose_popup5");
        var panel = this.node.getChildByName("panel_beer_bonus_2");
        panel.active = true;
        panel.scale = 0;
        cc.tween(panel).to(.5, {
          scale: .85
        }, {
          easing: "backOut"
        }).start();
        var handler = function handler(evt) {
          SlotsFacade.soundMgr.playEffect("bs_choose");
          for (var i = 1; i <= 3; i++) {
            var item = panel.getChildByName("select" + i);
            item.off(cc.Node.EventType.TOUCH_END);
            if (item.id == evt.target.id) {
              var selectedSpine = panel.getChildByName("spine_choose_effect").getComponent(sp.Skeleton);
              selectedSpine.node.active = true;
              selectedSpine.node.x = evt.target.x;
              selectedSpine.node.y = evt.target.y;
              selectedSpine.setAnimation(0, "animation", true);
            } else item.color = new cc.Color().fromHEX("#4C4C4C");
          }
          cc.tween(panel).delay(2).call(function() {
            SlotsFacade.soundMgr.playEffect("popup_out");
          }).to(.5, {
            scale: 0
          }, {
            easing: "backIn"
          }).call(function() {
            panel.active = false;
            panel.getChildByName("spine_choose_effect").active = false;
            cb && cb(evt.target.id);
          }).start();
        };
        for (var i = 1; i <= 3; i++) {
          var item = panel.getChildByName("select" + i);
          item.id = i;
          item.on(cc.Node.EventType.TOUCH_END, handler);
          item.color = new cc.Color().fromHEX("#FFFFFF");
        }
      },
      showBBRound: function showBBRound(value) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var panel, round, final_round, label1, label2;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("else_popup");
              _this7.showBg(true);
              panel = _this7.node.getChildByName("panel_beer_bonus_3");
              panel.active = true;
              panel.scale = 0;
              round = panel.getChildByName("round");
              final_round = panel.getChildByName("final_round");
              if (value < 5) {
                round.active = true;
                final_round.active = false;
                label1 = round.getChildByName("round_numb_1").getComponent("ImgSwitchCmp");
                label2 = round.getChildByName("round_numb_2").getComponent("ImgSwitchCmp");
                label1.setIndex(value - 1);
                label2.setIndex(value - 1);
              } else {
                round.active = false;
                final_round.active = true;
              }
              _context7.next = 10;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).delay(1).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this7.showBg(false);
                  panel.active = false;
                  SlotsFacade.soundMgr.playEffect("else_end");
                  res();
                }).start();
              });

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showWinJpGold: function showWinJpGold(goldNumb, jpType) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var panel, jp_icon, okBtn;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              jpType || (jpType = 0);
              SlotsFacade.soundMgr.playEffect("jp_popup1");
              _this8.showBg(true);
              panel = _this8.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              jp_icon = panel.getChildByName("jp_icon").getComponent("ImgSwitchCmp");
              jp_icon.setIndex(jpType);
              cc.tween(panel.getChildByName("jp_icon")).repeatForever(cc.tween().to(.5, {
                scale: 1.2
              }).to(.5, {
                scale: 1
              })).start();
              okBtn = panel.getChildByName("btn_ok");
              _context8.next = 13;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this8.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 13:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showJpFeatureTips: function showJpFeatureTips() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var panel;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this9.showBg(true);
              panel = _this9.node.getChildByName("panel_jpfeature_tips");
              panel.active = true;
              panel.scale = 0;
              _context9.next = 6;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: .85
                }, {
                  easing: "backOut"
                }).delay(1).call(function() {
                  SlotsFacade.soundMgr.playEffect("popup_out");
                }).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this9.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });

             case 6:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      showJpGameGuideTips: function showJpGameGuideTips() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var panel, spine, p1, p2;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this10.showBg(true);
              panel = _this10.node.getChildByName("panel_jpgame_guide_tips");
              panel.opacity = 255;
              panel.active = true;
              spine = panel.getChildByName("pick_huxi").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation", true);
              p1 = new Promise(function(res) {
                cc.tween(panel).delay(3).call(function() {
                  SlotsFacade.soundMgr.playEffect("popup_out");
                }).to(1, {
                  opacity: 0
                }).call(function() {
                  console.log("#\u6267\u884cpromise1");
                  _this10.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });
              p2 = new Promise(function(res) {
                var bg = panel.getChildByName("bg");
                var handler = function handler() {
                  console.log("#\u6267\u884cpromise2");
                  bg.off(cc.Node.EventType.TOUCH_END, handler, _this10);
                  _this10.showBg(false);
                  panel.stopAllActions();
                  panel.active = false;
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  res();
                };
                bg.on(cc.Node.EventType.TOUCH_END, handler, _this10);
              });
              _context10.next = 10;
              return Promise.race([ p1, p2 ]);

             case 10:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4575f14rZES4xaPYOnjgSz", "TavernWitch_Reel");
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
        bgSpine: sp.Skeleton
      },
      Init: function Init(idx, nCount, node) {
        this._super(idx, nCount, node);
        this.bgSpine = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1) + "/spine", this.node.parent.parent).getComponent(sp.Skeleton);
        this.bgSpine.node.active = false;
      },
      getSymbols: function getSymbols() {
        return this._symbols;
      },
      playReelStop: function playReelStop() {
        this._super();
        for (var i = 0; i < this._symbols.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              var id = item.GetShowId();
              if (!SlotsFacade.dm.getGameCfg().isScatter(id)) continue;
              if (info.isStop) {
                this.playReelBg(true);
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      playReelBg: function playReelBg(boo) {
        this.bgSpine.node.active = boo;
      },
      reelMove: function reelMove(dir, num) {
        var height = this._cfg.symbolSize.height;
        cc.tween(this._holderNode).to(.2 * num, {
          position: cc.v2(this._holderNode.x, this._holderNode.y + dir * num * height)
        }).start();
      },
      reelReset: function reelReset(dir, num) {
        var height = this._cfg.symbolSize.height;
        this._holderNode.y -= dir * num * height;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TavernWitch_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2fc4avUcZIi7l+l518urYm", "TavernWitch_Slots");
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
      extends: require("LMSlots_Slots_Base"),
      properties: {
        wildNode: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.wildNode = this.node.getChildByName("wild_node");
      },
      StartMove: function StartMove() {
        this._super();
        this.resetReelBg();
        this.wildNode.active = false;
        var _iterator = _createForOfIteratorHelper(this._reels[2].getSymbols()), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var symbol = _step.value;
            symbol && symbol.setVisible(true);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        0 == SlotsFacade.dm.GetTotalFree() && SlotsFacade.soundMgr.playBgm();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
        try {
          var _loop = function _loop() {
            var info = _step2.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID > 1 ? 1 : reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && (stateInfo.isStop = true);
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop();
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        SlotsFacade.flowCtrl.onSpinMsg(msg);
      },
      OnSpinEnd: function OnSpinEnd() {
        SlotsFacade.flowCtrl.spinEnd();
      },
      ReconnectShow: function ReconnectShow() {
        this.scheduleOnce(function() {
          SlotsFacade.flowCtrl.enterRoom();
        });
      },
      playScatter: function playScatter(indexs) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this2.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playBonus: function playBonus(indexs) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(!indexs || indexs.length < 1)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              SlotsFacade.soundMgr.playEffect("trigger_jp");
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this3.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context2.next = 7;
              return SlotsFacade.delayTime(1.5);

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this4 = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this4.GetSymbolByIdx(element));
        });
        return ret;
      },
      showAllSymbolsToNormal: function showAllSymbolsToNormal() {
        this._reels.forEach(function(element) {
          element._symbols.forEach(function(s) {
            s.ShowKuang(false);
            s.ShowNormal();
          });
        });
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        var reel = this._reels[col];
        var pos = reel.GetSymbolPosByRow(row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      resetReelBg: function resetReelBg() {
        this._reels.forEach(function(element) {
          element.playReelBg(false);
        });
      },
      playWild: function playWild(multiple) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cards, cfg, firstRow, i, array, _i2, _firstRow, _i3, _array, _i4, _iterator3, _step3, symbol, icon1, icon2, index, spine1, spine2;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cards = SlotsFacade.dm.afterProcessingCards;
              cc.log(cards);
              cfg = cc.vv.gameData.getGameCfg();
              if (!(cfg.isWild(cards[2]) && cfg.isWild(cards[22]))) {
                _context3.next = 6;
                break;
              }
              _context3.next = 49;
              break;

             case 6:
              if (!(cfg.isWild(cards[2]) && !cfg.isWild(cards[22]))) {
                _context3.next = 28;
                break;
              }
              firstRow = 4;
              i = 4;

             case 9:
              if (!(i >= 0)) {
                _context3.next = 16;
                break;
              }
              if (!cfg.isWild(cards[5 * i + 2])) {
                _context3.next = 13;
                break;
              }
              firstRow = i;
              return _context3.abrupt("break", 16);

             case 13:
              i--;
              _context3.next = 9;
              break;

             case 16:
              array = [];
              for (_i2 = 0; _i2 < 4 - firstRow; _i2++) array.push(103 - firstRow - _i2 <= 100 ? 1 : 103 - firstRow - _i2);
              _this5._reels[2].AppendSymbol(array, 2);
              _this5._reels[2].reelMove(-1, array.length);
              SlotsFacade.soundMgr.playEffect("wild_movement");
              cc.log(array);
              _context3.next = 24;
              return SlotsFacade.delayTime(.2 * array.length);

             case 24:
              _this5._reels[2].reelReset(-1, array.length);
              _this5._reels[2].DelAppendSymbol();
              _context3.next = 49;
              break;

             case 28:
              if (!(!cfg.isWild(cards[2]) && cfg.isWild(cards[22]))) {
                _context3.next = 49;
                break;
              }
              _firstRow = 0;
              _i3 = 0;

             case 31:
              if (!(_i3 < 5)) {
                _context3.next = 38;
                break;
              }
              if (!cfg.isWild(cards[5 * _i3 + 2])) {
                _context3.next = 35;
                break;
              }
              _firstRow = _i3;
              return _context3.abrupt("break", 38);

             case 35:
              _i3++;
              _context3.next = 31;
              break;

             case 38:
              _array = [];
              for (_i4 = 0; _i4 < _firstRow; _i4++) _array.push(104 - (_firstRow - _i4 - 1));
              cc.log(_array);
              _this5._reels[2].AppendSymbol(_array, 1);
              cc.log(_this5._reels[2].getSymbols());
              _this5._reels[2].reelMove(1, _array.length);
              SlotsFacade.soundMgr.playEffect("wild_movement");
              _context3.next = 47;
              return SlotsFacade.delayTime(.2 * _array.length);

             case 47:
              _this5._reels[2].reelReset(1, _array.length);
              _this5._reels[2].DelAppendSymbol();

             case 49:
              _this5.wildNode.active = true;
              _this5.wildNode.stopAllActions();
              cc.log(_this5._reels[2].getSymbols());
              _iterator3 = _createForOfIteratorHelper(_this5._reels[2].getSymbols());
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  symbol = _step3.value;
                  symbol && symbol.setVisible(false);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              SlotsFacade.soundMgr.playEffect("wild_shining");
              icon1 = _this5.wildNode.getChildByName("multiple1").getComponent("ImgSwitchCmp");
              icon2 = _this5.wildNode.getChildByName("multiple2").getComponent("ImgSwitchCmp");
              index = [ 1, 2, 3, 5, 10, 25 ].indexOf(multiple);
              spine1 = _this5.wildNode.getChildByName("spine1").getComponent(sp.Skeleton);
              spine2 = _this5.wildNode.getChildByName("spine2").getComponent(sp.Skeleton);
              if (-1 !== index) {
                icon1.setIndex(index);
                icon2.setIndex(index);
                spine2.node.active = true;
                spine2.setAnimation(0, "animation", false);
                spine2.setCompleteListener(function() {
                  spine2.setCompleteListener(null);
                  spine2.node.active = false;
                  spine1.setAnimation(0, "animation1", false);
                  spine1.setCompleteListener(function(track) {
                    var name = track.animation ? track.animation.name : "";
                    if ("animation1" === name) {
                      spine1.clearTracks();
                      spine1.setToSetupPose();
                      spine1.setAnimation(0, "animation2", false);
                    } else if ("animation2" === name) {
                      spine1.clearTracks();
                      spine1.setToSetupPose();
                      spine1.setAnimation(0, "animation3", false);
                    } else if ("animation3" === name) {
                      spine1.clearTracks();
                      spine1.setToSetupPose();
                      spine1.setAnimation(0, "animation1", false);
                    }
                  });
                });
              } else console.log("#error#playWild#\u500d\u6570\u9519\u8bef", multiple);

             case 61:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TavernWitch_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66a89d3iidNmaKWgZRA4Hwx", "TavernWitch_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/TavernWitch/",
        _isPlayBgm: false
      },
      playEffect: function playEffect(audioName, isLoop) {
        return cc.vv.AudioManager.playEff(this._soundPath, audioName, true, isLoop);
      },
      stopEffectByName: function stopEffectByName(audioName) {
        cc.vv.AudioManager.stopEffectByName(audioName);
      },
      stopEffect: function stopEffect() {
        cc.vv.AudioManager.stopAudio();
      },
      playBgm: function playBgm(bgmName) {
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("fg_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  TavernWitch_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2adfc1tZkRNarfH35XlxumY", "TavernWitch_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        var wildGame = SlotsFacade.dm.wildGame;
        if (wildGame && cc.vv.gameData.getGameCfg().isWild(id)) {
          var index = [ 1, 2, 3, 5, 10, 25 ].indexOf(wildGame.currMult);
          cc.find("multiple", this._showNode) && cc.find("multiple", this._showNode).getComponent("ImgSwitchCmp").setIndex(index);
        }
      },
      playTriggerAnimation: function playTriggerAnimation() {
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
          if ("" != cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, true);
          }
        }
        return isPlay;
      },
      playWinTweenAction: function playWinTweenAction() {
        if (cc.vv.gameData.getGameCfg().isWild(this._id)) {
          this._showNode.active = false;
          return;
        }
        this._showNode.cleanup();
        cc.tween(this._showNode).repeatForever(cc.tween().delay(.5).to(.1, {
          opacity: 0
        }).delay(.3).to(.1, {
          opacity: 255
        }).delay(1)).start();
      },
      stopWinTweenAction: function stopWinTweenAction() {
        if (cc.vv.gameData.getGameCfg().isWild(this._id)) {
          this._showNode.active = true;
          return;
        }
        this._showNode.cleanup();
        this._showNode.opacity = 255;
      },
      setVisible: function setVisible(isVisible) {
        this._showNode && (this._showNode.active = isVisible);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "TavernWitch_Cfg", "TavernWitch_Character", "TavernWitch_CollectGame", "TavernWitch_CollectProgress", "TavernWitch_CollectWheel", "TavernWitch_FlowCtrl", "TavernWitch_GameData", "TavernWitch_GameRule", "TavernWitch_JPBag", "TavernWitch_JPGame", "TavernWitch_Logic", "TavernWitch_MainPanel", "TavernWitch_Popup", "TavernWitch_Reel", "TavernWitch_Slots", "TavernWitch_Sound", "TavernWitch_symbol" ]);