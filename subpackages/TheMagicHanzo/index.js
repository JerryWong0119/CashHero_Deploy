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
  TheMagicHanzo_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "983a4iY9gBGU5iIKe5T3COE", "TheMagicHanzo_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      CanDoNextRound: function CanDoNextRound() {
        this._bStartRound = false;
        this.ShowBtnsByState("idle");
        var restFree = cc.vv.gameData.GetFreeTime();
        var cfg = cc.vv.gameData.getGameCfg();
        if (restFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.getFreeCnt();
          this.ShowFreeModel(true, total - rest + 1, total);
          this.scheduleOnce(this.SendSpinReq, cfg.autoModelDelay);
          return;
        }
        var autoTime = cc.vv.gameData.GetAutoModelTime();
        if (autoTime > 0) {
          this.scheduleOnce(this.DoAutoSpine, cfg.autoModelDelay);
          return;
        }
      },
      SendSpinReq: function SendSpinReq() {
        this._super();
      },
      OnClickStop: function OnClickStop() {
        this._super();
        cc.vv.gameData.getMoreSlotsMgr().stopMove();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  TheMagicHanzo_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea224z9QzhNsp+OmHZeGN61", "TheMagicHanzo_ButtonSafe");
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
  TheMagicHanzo_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f940bS71NtO7qGG1jWxfmh/", "TheMagicHanzo_Cfg");
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
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s14",
        win_node: "w2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s13",
        win_node: "w3",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: ""
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: ""
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: ""
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: ""
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s7",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s12",
        win_node: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "TheMagicHanzo_Bottom",
        Slots: "TheMagicHanzo_Slots",
        Reels: "TheMagicHanzo_Reel",
        Symbols: "TheMagicHanzo_Symbol"
      },
      col: 5,
      row: 3,
      scatterId: 2,
      symbolPrefab: "LMSlots_Symbol",
      symbolPrefab50: "LMSlots_Symbol50",
      symbolPrefab33: "LMSlots_Symbol33",
      symbolSize: {
        width: 150,
        height: 112
      },
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "base_bgm",
      AddAntiTime: 3,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/TheMagicHanzo/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "anticipation",
        antSpeed: 2500
      }, {
        id: [ 3 ],
        mini: 6,
        counts: [ 3, 3, 3, 3, 3 ],
        path: "games/TheMagicHanzo/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_chip"
      } ],
      commEffect: {
        path: "games/TheMagicHanzo/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      helpItems: [ "games/TheMagicHanzo/prefab/TheMagicHanzo_Help_item1", "games/TheMagicHanzo/prefab/TheMagicHanzo_Help_item2", "games/TheMagicHanzo/prefab/TheMagicHanzo_Help_item3", "games/TheMagicHanzo/prefab/TheMagicHanzo_Help_item4" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheMagicHanzo_Energy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1013HLmTRP5bSaLEYuOLqu", "TheMagicHanzo_Energy");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _playUnlockState: 0,
        _clickPyramidiconState: 0,
        _needBonusState: 0,
        _targetPos: cc.v2(23, 7),
        _defautPos: cc.v2(23, 150)
      },
      onLoad: function onLoad() {
        this._tips = cc.find("slots/mask/tips", this.node.parent);
        this._points = cc.find("points", this.node);
        var btn_unlock = cc.find("btn_unlock/operate", this.node);
        Global.btnClickEvent(btn_unlock, this.onClicklock, this);
        var btn_pyramidicon = cc.find("slots/pyramidicon", this.node.parent);
        Global.btnClickEvent(btn_pyramidicon, this.onClickpyramidicon, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY, this.onEventRefushEnergy, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onChangeBetValue, this);
      },
      start: function start() {
        var superbonus = cc.vv.gameData.getSuperBonus();
        this.UNLOCKVAL = superbonus.min;
        this.updateShow();
        this.updateNeedBonusNum();
        this.updateCoinProgress(superbonus);
      },
      updateShow: function updateShow() {
        var betIdx = cc.vv.gameData.GetBetIdx();
        var ani_node = cc.find("btn_unlock", this.node);
        if (betIdx >= this.UNLOCKVAL) {
          if (1 != this._playUnlockState) {
            this._playUnlockState = 1;
            this.playTips();
            Global.SlotsSoundMgr.playEffect("unlock");
            cc.vv.gameData.playSpine(ani_node, "animation3", false, function() {
              ani_node.active = false;
            });
          }
        } else if (2 != this._playUnlockState) {
          this._playUnlockState = 2;
          ani_node.active = true;
          this.playTips();
          Global.SlotsSoundMgr.playEffect("lock");
          cc.vv.gameData.playSpine(ani_node, "animation1", false, function() {
            cc.vv.gameData.playSpine(ani_node, "animation2", false, null);
          });
        }
      },
      playTips: function playTips() {
        this._clickPyramidiconState = 1;
        this._tips.stopAllActions();
        var delay = cc.delayTime(5);
        var showtips = cc.moveTo(.3, cc.v2(23, 7)).easing(cc.easeBackOut());
        var hidetips = cc.moveTo(.3, cc.v2(23, 150)).easing(cc.easeBackIn());
        var seq = cc.sequence(showtips, delay, hidetips);
        this._tips.runAction(seq);
      },
      onClicklock: function onClicklock() {
        if (cc.vv.gameData.isReelMove()) return;
        if (1 == this._playUnlockState) return;
        cc.vv.gameData.GetBottomScript().SetBetIdx(this.UNLOCKVAL);
        var ani_node = cc.find("btn_unlock", this.node);
        cc.vv.gameData.playSpine(ani_node, "animation3", false, function() {
          ani_node.active = false;
        });
      },
      onClickpyramidicon: function onClickpyramidicon() {
        Global.SlotsSoundMgr.playEffect("tip_show");
        clearTimeout(this._timeoutId);
        if (0 == this._clickPyramidiconState) this.playTips(); else {
          this._clickPyramidiconState = 0;
          cc.tween(this._tips).to(.3, {
            position: this._defautPos
          }, {
            easing: "backIn"
          }).start();
        }
      },
      updateCoinProgress: function updateCoinProgress(superbonus) {
        var _this = this;
        var isinit = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (superbonus) if (isinit || 0 == superbonus.num) for (var i = 1; i < 11; i++) {
          var pointnode = cc.find(cc.js.formatStr("points/point%s/coin", i), this.node);
          pointnode.active = superbonus.num >= i;
        } else {
          var pnode = cc.find(cc.js.formatStr("points/point%s/coin", superbonus.num), this.node);
          var spnode = cc.find(cc.js.formatStr("points/point%s/spine", superbonus.num), this.node);
          pnode.active = true;
          pnode.scale = 0;
          cc.vv.gameData.playSpine(spnode, "animation1", false, null);
          cc.tween(pnode).to(.5, {
            scale: 1
          }, {
            easing: "backInOut"
          }).call(function() {
            if (superbonus.total == superbonus.num) {
              var fullspine = cc.find("collectfull", _this.node);
              Global.SlotsSoundMgr.playEffect("trail_full");
              cc.vv.gameData.playSpine(fullspine, "animation", false, function() {
                fullspine.active = false;
              });
              _this.scheduleOnce(function() {
                cc.vv.gameData.GetUIManager().showSuperFreeStartUI();
              }, 1);
            } else Global.SlotsSoundMgr.playEffect("trail_in");
          }).start();
        }
      },
      updateNeedBonusNum: function updateNeedBonusNum() {
        var _this2 = this;
        var isinit = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var needbet = 13;
        var betIdx = cc.vv.gameData.GetBetIdx();
        if (betIdx < needbet) {
          if (7 != this._needBonusState) {
            this._needBonusState = 7;
            Global.SlotsSoundMgr.playEffect("low_bet");
            this.playChangeBonusNumSp(isinit, "animation1", function() {
              cc.find("triggersui6", _this2.node).active = false;
              cc.find("triggersui7", _this2.node).active = true;
            });
          }
        } else if (6 != this._needBonusState) {
          this._needBonusState = 6;
          Global.SlotsSoundMgr.playEffect("high_bet");
          cc.find("triggersui7", this.node).active = false;
          cc.find("triggersui6", this.node).active = true;
          this.playChangeBonusNumSp(isinit, "animation2", null);
        }
      },
      playChangeBonusNumSp: function playChangeBonusNumSp(isinit, aniname, endcall) {
        if (!isinit) {
          var spnode = cc.find("betchange", this.node);
          cc.vv.gameData.playSpine(spnode, aniname, false, endcall);
        }
      },
      onChangeBetValue: function onChangeBetValue(data) {
        this.updateShow();
        this.updateNeedBonusNum(false);
      },
      onEventRefushEnergy: function onEventRefushEnergy() {
        var _this3 = this;
        this.scheduleOnce(function() {
          var superbonus = cc.vv.gameData.getSuperBonus();
          _this3.updateCoinProgress(superbonus, false);
        }, .3);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheMagicHanzo_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17b98F3igNB8reL8GwjOIzn", "TheMagicHanzo_FreeGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  TheMagicHanzo_FreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2167a4wcm1BCJDzzST0WPDQ", "TheMagicHanzo_FreeReel");
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
      InitReel: function InitReel(idx, nCount, node, colmax) {
        this._colMax = colmax;
        this._symbolHeight = 2 == colmax ? 56 : 37;
        this.Init(idx, nCount, node);
      },
      StartMove: function StartMove() {
        this._super();
        this._speed = 1200 * this.GetTimeScale();
        this._offset = this._symbolHeight;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        cc.vv.gameData.getMoreSlotsMgr().reelSpineEnd(this._reelIdx);
      },
      LoadSymbols: function LoadSymbols() {
        var cfg = cc.vv.gameData.getGameCfg();
        var url = 2 == this._colMax ? cfg.symbolPrefab50 : cfg.symbolPrefab33;
        this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url));
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("TheMagicHanzo_FreeSymbol");
        var idx = this._symbols.length;
        scp.InitSymbol(idx, this._topAniNode, this._colMax);
        scp.SetSymbolReelIdx(this._reelIdx);
        this._symbols.push(scp);
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation();
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
              } else reelStopEffect = "";
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
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * this._symbolHeight);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheMagicHanzo_FreeSlotsMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7335O282lJt6ibY11X+UJ7", "TheMagicHanzo_FreeSlotsMgr");
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
    var SlotsCount = [ 3, 6, 12, 18, 18 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        bgs: [ cc.SpriteFrame ],
        _slotsScpList: [],
        _curSlotsCount: 0,
        _curLevel: 1,
        _curNum: 0
      },
      onLoad: function onLoad() {
        var bgnode = cc.find("mainnode/bg", this.node);
        this._curBgSp = bgnode.getComponent(cc.Sprite);
        this._slotParNode = cc.find("mainnode/slotsnode", this.node);
        this._topcontentNode = cc.find("mainnode/topcontent", this.node);
        this._slots50 = cc.find("mainnode/slots50", this.node);
        this._slots33 = cc.find("mainnode/slots33", this.node);
      },
      start: function start() {},
      changeBackimage: function changeBackimage(index) {
        this._curBgSp.spriteFrame = this.bgs[index];
      },
      collectBonusEffect: function collectBonusEffect() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                var collect = cc.vv.gameData.getCollectData();
                if (_this._curNum == collect.num) success(); else {
                  var mainnode = cc.find("mainnode", _this.node);
                  var bonusspine = cc.find("mainnode/collectbonus", _this.node);
                  var coinnode = cc.find("mainnode/topcontent/item1/aimnode", _this.node);
                  var collectspine = cc.find("mainnode/topcontent/item1/collectspine", _this.node);
                  var aimpos = mainnode.convertToNodeSpaceAR(coinnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                  _this._curNum = collect.num;
                  _this._slotsScpList.forEach(function(slots) {
                    slots.slotsFly(mainnode, aimpos, bonusspine);
                  });
                  Global.SlotsSoundMgr.playEffect("free_chip_collect");
                  _this.scheduleOnce(function() {
                    _this.updateCollectBounsNum();
                    cc.vv.gameData.playSpine(collectspine, "animation", false, null);
                  }, .3);
                  _this.scheduleOnce(function() {
                    success();
                  }, .5);
                }
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      bonusCollectUpgrade: function bonusCollectUpgrade() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                var collect = cc.vv.gameData.getCollectData();
                _this2._curLevel == collect.level || collect.level > 4 ? _this2.scheduleOnce(function() {
                  success();
                }, .1) : _this2.scheduleOnce(function() {
                  Global.SlotsSoundMgr.playEffect("free_message");
                  var spinenode = cc.find(cc.js.formatStr("mainnode/topcontent/item%s/upgradespine", collect.level), _this2.node);
                  cc.vv.gameData.playSpine(spinenode, "animation", false, function() {
                    cc.vv.gameData.GetSlotsScript().playTransitionAni(function() {
                      _this2._curLevel = collect.level;
                      _this2.scheduleOnce(function() {
                        success();
                      }, .5);
                    });
                    _this2.scheduleOnce(function() {
                      _this2.updateSlotsUI(false);
                    }, .2);
                  });
                }, 1);
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      startMove: function startMove() {
        if (0 == this._slotsScpList.length) return;
        this._slotsScpList.forEach(function(slots) {
          slots.StartMove();
        });
      },
      stopMove: function stopMove() {
        if (0 == this._slotsScpList.length) return;
        this._slotsScpList.forEach(function(slots) {
          slots.StopMove();
        });
      },
      showSpineResult: function showSpineResult(msg) {
        if (0 == this._slotsScpList.length) return;
        if (!msg.slotsList) return;
        var slotsinfo = msg.slotsList.info;
        for (var i = 0; i < this._slotsScpList.length; i++) this._slotsScpList[i].showMsgSpineResult(msg, slotsinfo[i].resultCards);
      },
      showWinTrance: function showWinTrance() {
        var slotslist = cc.vv.gameData.getSlotsListData();
        if (slotslist) for (var i = 0; i < this._slotsScpList.length; i++) {
          this._slotsScpList[i].ShowWinTraceResult(slotslist.info[i]);
          this._slotsScpList[i].updateWinCoin(slotslist.coins[i]);
        }
      },
      reelSpineEnd: function reelSpineEnd(reelidx) {
        this._slotsScpList.forEach(function(slots) {
          slots.OnReelSpinEnd(reelidx);
          var lastReelStopIdx = slots.GetLastStopReelIdx();
          reelidx == lastReelStopIdx && slots.OnSpinEnd();
        });
      },
      updateSlotsUI: function updateSlotsUI() {
        var isinit = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var collect = cc.vv.gameData.getCollectData();
        var level = collect ? collect.level : 1;
        var num = collect ? collect.num : 0;
        var slotscount = SlotsCount[level - 1];
        if (isinit || slotscount > this._curSlotsCount) {
          this.dynamicLoadSlots(slotscount);
          this.updateTopContentPos(level, slotscount);
          this.updateCollectBounsNum();
          if (isinit) {
            this._curLevel = level;
            this._curNum = num;
          }
        }
        if (isinit) {
          var superbonus = cc.vv.gameData.getSuperBonus();
          superbonus && (superbonus.total == superbonus.num ? this.changeBackimage(1) : this.changeBackimage(0));
        }
      },
      dynamicLoadSlots: function dynamicLoadSlots(slotscount) {
        this.clearSlotsUI();
        var loadtimes = 0;
        var self = this;
        var loadslots = function loadslots() {
          slotscount > 6 ? self.initSlotsUI(self._slots33, loadtimes, 3) : self.initSlotsUI(self._slots50, loadtimes, 2, slotscount);
          loadtimes++;
          loadtimes < slotscount && self.scheduleOnce(function() {
            loadslots();
          }, .03);
        };
        loadslots();
      },
      updateCollectBounsNum: function updateCollectBounsNum() {
        var collect = cc.vv.gameData.getCollectData();
        var num = collect ? collect.num : 0;
        var coinnode = cc.find("mainnode/topcontent/item1/coin", this.node);
        coinnode.getComponent(cc.Label).string = num;
      },
      updateTopContentPos: function updateTopContentPos(level, slotscount) {
        this._topcontentNode.position = level > 2 ? cc.v2(0, 150 * (Math.ceil(slotscount / 3) - 1) + 75) : cc.v2(0, 200 * (Math.ceil(slotscount / 2) - 1) + 100);
        for (var i = 2; i < level + 1; i++) {
          var itemnode = cc.find(cc.js.formatStr("mainnode/topcontent/item%s", i), this.node);
          itemnode.active = false;
        }
      },
      initSlotsUI: function initSlotsUI(initnode, idx, colmax, slotscount) {
        var slotsdata = cc.vv.gameData.getSlotsListData();
        var wincoin = slotsdata ? idx >= slotsdata.coins.length ? 0 : slotsdata.coins[idx] : 0;
        var instnode = cc.instantiate(initnode);
        instnode.active = true;
        instnode.parent = this._slotParNode;
        var fslots = instnode.addComponent("TheMagicHanzo_FreeSlots");
        fslots.Init(colmax, wincoin);
        this._slotsScpList.push(fslots);
        instnode.position = 2 == idx && 3 == slotscount ? cc.v2(0, 200) : this.getSlotsUIPos(idx, colmax);
      },
      getSlotsUIPos: function getSlotsUIPos(index, colmax) {
        var xpos = 0;
        var ypos = 0;
        if (2 == colmax) {
          xpos = index % 2 == 0 ? -150 : 150;
          ypos = 200 * parseInt(index / 2);
        } else {
          var idxpos = index % 3;
          xpos = 0 == idxpos ? -200 : 1 == idxpos ? 0 : 200;
          ypos = 150 * parseInt(index / 3);
        }
        return cc.v2(xpos, ypos);
      },
      clearSlotsUI: function clearSlotsUI() {
        this._slotParNode.removeAllChildren();
        this._slotsScpList = [];
      }
    });
    cc._RF.pop();
  }, {} ],
  TheMagicHanzo_FreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cc399Gto9IIIca/hL6Jam0", "TheMagicHanzo_FreeSlots");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _lastWinCoin: 0
      },
      Init: function Init(colmax, wincoin) {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this.createFreeReels(this._col, this._row, colmax);
        this.updateWinCoin(wincoin);
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
      },
      OnSpinEnd: function OnSpinEnd() {
        AppLog.log("freeslots onspinend");
      },
      updateWinCoin: function updateWinCoin(wincoin) {
        var lblwincoin = cc.find("head/getcoin", this.node);
        Global.doRoallNumEff(lblwincoin, this._lastWinCoin, wincoin, 1, null, null, 0, true);
        this._lastWinCoin = wincoin;
      },
      ShowWinTraceResult: function ShowWinTraceResult(info) {
        var allWinIdx = [];
        for (var i = 0; i < info.zjLuXian.length; i++) {
          var item = info.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (info.scatterZJLuXian && info.scatterZJLuXian.indexs) for (var _i = 0; _i < info.scatterZJLuXian.indexs.length; _i++) {
          var val = info.scatterZJLuXian.indexs[_i];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      createFreeReels: function createFreeReels(col, row, colmax) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("TheMagicHanzo_FreeReel");
          scp.InitReel(i, row, this._topAniNode, colmax);
          this._reels.push(scp);
        }
      },
      showMsgSpineResult: function showMsgSpineResult(msg, cards) {
        this._gameInfo = msg;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
      },
      slotsFly: function slotsFly(mainnode, aimpos, flyspine) {
        for (var i = 1; i < 16; i++) {
          var symbol = this.GetSymbolByIdx(i);
          if (3 == symbol.GetShowId()) {
            var flynode = cc.instantiate(flyspine);
            flynode.parent = mainnode;
            flynode.active = true;
            flynode.position = mainnode.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
            Global.SlotsSoundMgr.playEffect("chip_value_collect");
            cc.tween(flynode).to(.3, {
              position: aimpos
            }).start();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheMagicHanzo_FreeSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02c37j/H8pOuJPXja6w6hEX", "TheMagicHanzo_FreeSymbol");
    "use strict";
    var freeCollectMin = [ 40, 88, 102 ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      InitSymbol: function InitSymbol(idx, node, colmax) {
        this._colMax = colmax;
        this.Init(idx, node);
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
              if (!old) {
                var kuangPrefab = assetScp.GetPrefabByName(this.getKuangName());
                if (kuangPrefab) {
                  old = cc.instantiate(kuangPrefab);
                  old.name = "kuang" + this._symbolIdx + "_" + this._reelIdx;
                  old.parent = parentObj;
                  var symbolWordPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  var nodePos = parentObj.convertToNodeSpaceAR(symbolWordPos);
                  old.position = nodePos;
                }
              }
              old.active = true;
              cfg.symbol[this._id].win_ani && (old.zIndex = cfg.symbol[this._id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx + 10);
            } else old && (old.active = false);
          }
        }
      },
      stopWinTweenAction: function stopWinTweenAction() {
        if (this._showNode) {
          this._showNode.active = true;
          this._showNode.cleanup();
          this._showNode.opacity = 255;
        }
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var collect = cc.vv.gameData.getCollectData();
        if (collect) {
          var randVal = 1;
          if (4 == this._reelIdx && collect.num >= freeCollectMin[0] || (3 == this._reelIdx || 4 == this._reelIdx) && collect.num >= freeCollectMin[1] || (2 == this._reelIdx || 3 == this._reelIdx || 4 == this._reelIdx) && collect.num >= freeCollectMin[2]) randVal = 1; else {
            var cfg = cc.vv.gameData.getGameCfg();
            var randIdx = Global.random(1, cfg.randomSymbols.length);
            randVal = cfg.randomSymbols[randIdx - 1];
          }
          this.ShowById(randVal);
        } else this._super();
      },
      getKuangName: function getKuangName() {
        return 2 == this._colMax ? "kuang50" : "kuang33";
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheMagicHanzo_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19564NaOo1PQbWL7rhD5+1W", "TheMagicHanzo_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._selectData = deskInfo.select;
        this._bonusGame = deskInfo.bonusGame;
        this._collect = deskInfo.freeGameData.collect;
        this._slotsList = deskInfo.freeGameData.slotsList;
        this._freeCnt = deskInfo.restFreeCount;
        this._superBonus = deskInfo.superbonus;
        this._super(deskInfo, gameId, gameJackpot);
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        this._EventId.GORGEOUSCLEOPATRA_UNLOCK_ENERGY = "GORGEOUSCLEOPATRA_UNLOCK_ENERGY";
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._selectData = msg.select;
          this._bonusGame = msg.bonusGame;
          this._collect = msg.collect;
          this._slotsList = msg.slotsList;
          this._freeCnt = msg.freeCnt;
          this._superBonus = msg.superbonus;
          this._super(msg);
          this._moreSlotsMgr.showSpineResult(msg);
        }
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
      isReelMove: function isReelMove() {
        return this._isReelMove || this._autoTime > 0;
      },
      setReelMove: function setReelMove(ismove) {
        this._isReelMove = ismove;
      },
      setSuperBonus: function setSuperBonus(spbonus) {
        this._superBonus = spbonus;
      },
      getSuperBonus: function getSuperBonus() {
        return this._superBonus;
      },
      clearSuperBonus: function clearSuperBonus() {
        this._superBonus.num = 0;
      },
      getFreeCnt: function getFreeCnt() {
        return this._freeCnt;
      },
      getBonusData: function getBonusData() {
        return this._bonusGame;
      },
      getSelectData: function getSelectData() {
        return this._selectData;
      },
      SetGameScript: function SetGameScript(fgame) {
        this._freeGame = fgame;
      },
      GetFreeGameScript: function GetFreeGameScript() {
        return this._freeGame;
      },
      SetUIManagerScript: function SetUIManagerScript(uimgr) {
        this._uimgr = uimgr;
      },
      GetUIManager: function GetUIManager() {
        return this._uimgr;
      },
      SetMoreSlotsMgr: function SetMoreSlotsMgr(slotsmgr) {
        this._moreSlotsMgr = slotsmgr;
      },
      getMoreSlotsMgr: function getMoreSlotsMgr() {
        return this._moreSlotsMgr;
      },
      SetWheelData: function SetWheelData(wheeldata) {
        this._wheelData = wheeldata;
      },
      getWheelData: function getWheelData() {
        return this._wheelData;
      },
      clearWheelData: function clearWheelData() {
        this._wheelData = null;
      },
      getSlotsListData: function getSlotsListData() {
        return this._slotsList;
      },
      getCollectData: function getCollectData() {
        return this._collect;
      },
      isTriggerNormalFree: function isTriggerNormalFree() {
        var triggerfree = this._gameInfo.freeResult.freeInfo.idxs && this._gameInfo.freeResult.freeInfo.idxs.length > 0;
        if (triggerfree) return this._gameInfo.freeResult.freeInfo.freeCnt;
        return 0;
      },
      getWheelFreeTimes: function getWheelFreeTimes() {
        var freetimes = 0;
        this._wheelData && (1 == this._wheelData.result.length && "FREE" == this._wheelData.result[0].type ? freetimes = this._wheelData.result[0].num : this._wheelData.result.length > 1 && "FREE" == this._wheelData.result[1].type && (freetimes = this._wheelData.result[1].num));
        return freetimes;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheMagicHanzo_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ae31WgZeVPOoZkdj5YT89y", "TheMagicHanzo_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        var script_freegame = this.node.addComponent("TheMagicHanzo_FreeGame");
        cc.vv.gameData.SetGameScript(script_freegame);
        var uinode = cc.find("safe_node/gameUI", this.node);
        var script_uimgr = uinode.addComponent("TheMagicHanzo_UIMgr");
        cc.vv.gameData.SetUIManagerScript(script_uimgr);
        var moreslotsnode = cc.find("safe_node/moreslotsUI", this.node);
        var script_moreslots = moreslotsnode.getComponent("TheMagicHanzo_FreeSlotsMgr");
        cc.vv.gameData.SetMoreSlotsMgr(script_moreslots);
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheMagicHanzo_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9826vaAFRG0YOIFmcrhXJJ", "TheMagicHanzo_Reel");
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
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation();
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
              } else reelStopEffect = cc.vv.gameData.getSlotsListData() ? "" : _info.reelStopSound ? _info.reelStopSound : "";
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheMagicHanzo_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f462i7MAFKwK/nMa6m4PkQ", "TheMagicHanzo_Slots");
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
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        var select = cc.vv.gameData.getSelectData();
        if (select && select.state) {
          this.lockJackpot();
          this.startShowWheel();
          return;
        }
        var rest = cc.vv.gameData.GetFreeTime();
        if (rest) {
          this.ShowGameview(true);
          this.scheduleOnce(function() {
            _this.CanDoNextRound();
          }, .5);
        } else this.ShowGameview(false);
      },
      ShowGameview: function ShowGameview(bFree) {
        var slotsuinode = cc.find("moreslotsUI/mainnode", this.node.parent);
        if (bFree) {
          slotsuinode.active = true;
          this.resetMoreSlotsTop(slotsuinode);
          if (cc.vv.gameData.getWheelFreeTimes()) {
            var nTotal = cc.vv.gameData.GetTotalFreeWin();
            this._bottomScript.SetWin(nTotal);
          }
          cc.vv.gameData.getMoreSlotsMgr().updateSlotsUI();
        } else {
          slotsuinode.active = false;
          this._bottomScript.ShowFreeModel(false);
          cc.vv.gameData.getMoreSlotsMgr().clearSlotsUI();
        }
      },
      resetMoreSlotsTop: function resetMoreSlotsTop(uinode) {
        for (var i = 2; i < 5; i++) {
          var itemnode = cc.find(cc.js.formatStr("topcontent/item%s", i), uinode);
          itemnode.active = true;
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        0 == msg.resultCards.length && (msg.resultCards = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 13, 13, 5 ]);
        this._super(msg);
      },
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.clearWheelData();
        Global.SlotsSoundMgr.playNormalBgm();
        cc.vv.gameData.setReelMove(true);
        this.startMoveHandle();
        cc.vv.gameData.getMoreSlotsMgr().startMove();
      },
      StopMove: function StopMove() {
        this._super();
        cc.vv.gameData.getMoreSlotsMgr().stopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bHit, freetimes, superbonus;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              bHit = _this2.CheckSpecialReward();
              bHit && _this2._bottomScript.ShowBtnsByState("moveing_1");
              if (!cc.vv.gameData.getSlotsListData()) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return cc.vv.gameData.getMoreSlotsMgr().collectBonusEffect();

             case 5:
              _this2.ShowWinTrace();
              cc.vv.gameData.getMoreSlotsMgr().showWinTrance();
              _this2.showWildWinTrace();
              _this2.playScatterAnimation(true);
              if (!_this2.CheckTriggerSubGame()) {
                _context.next = 13;
                break;
              }
              _this2.lockJackpot();
              _context.next = 13;
              return _this2.triggerWheelGame();

             case 13:
              _context.next = 15;
              return _this2.playBottomWin();

             case 15:
              if (!cc.vv.gameData.getSlotsListData()) {
                _context.next = 18;
                break;
              }
              _context.next = 18;
              return cc.vv.gameData.getMoreSlotsMgr().bonusCollectUpgrade();

             case 18:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.getFreeCnt())) {
                _context.next = 23;
                break;
              }
              _context.next = 21;
              return _this2.awaitTime(1);

             case 21:
              cc.vv.gameData.GetUIManager().showFreeOverCollectUI();
              return _context.abrupt("return");

             case 23:
              freetimes = cc.vv.gameData.isTriggerNormalFree() || cc.vv.gameData.getWheelFreeTimes();
              if (!(freetimes > 0)) {
                _context.next = 35;
                break;
              }
              superbonus = cc.vv.gameData.getSuperBonus();
              if (!superbonus) {
                _context.next = 30;
                break;
              }
              if (!(superbonus.total == superbonus.num)) {
                _context.next = 30;
                break;
              }
              Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
              return _context.abrupt("return");

             case 30:
              if (!cc.vv.gameData.isTriggerNormalFree()) {
                _context.next = 33;
                break;
              }
              _context.next = 33;
              return _this2.awaitTime(3);

             case 33:
              cc.vv.gameData.GetUIManager().showStartFreeGameUI(freetimes);
              return _context.abrupt("return");

             case 35:
              _context.next = 37;
              return cc.vv.gameData.GetUIManager().showExtraFreeUI();

             case 37:
              _context.next = 39;
              return _this2.awaitTime(.3);

             case 39:
              cc.vv.gameData.setReelMove(false);
              _this2.CanDoNextRound();

             case 41:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var selectdata = cc.vv.gameData.getSelectData();
        if (selectdata) return selectdata.state;
        return false;
      },
      triggerWheelGame: function triggerWheelGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this3.playTriggerBonusAnimation();

             case 2:
              _context2.next = 4;
              return _this3.playCoinShow();

             case 4:
              _context2.next = 6;
              return _this3.bonsShowCollectUI();

             case 6:
              _context2.next = 8;
              return _this3.bonusCollectCoin();

             case 8:
              _context2.next = 10;
              return _this3.awaitTime(.5);

             case 10:
              _context2.next = 12;
              return _this3.startShowWheel();

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      startShowWheel: function startShowWheel() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                _this4.showLogo(true);
                cc.find("node_wincollect", _this4.node).active = false;
                var wheelnode = cc.find("subgamewheel", _this4.node.parent);
                wheelnode.getComponent("TheMagicHanzo_Wheel").enterGame(success);
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playTriggerBonusAnimation: function playTriggerBonusAnimation() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.playEffect("wheel_trigger");
                for (var i = 0; i < 5; i++) {
                  var sys = _this5._reels[i]._symbols;
                  for (var j = 0; j < 3; j++) sys[j].playBonusAnimation(true);
                }
                _this5.scheduleOnce(function() {
                  success();
                }, 2);
              }));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      playCoinShow: function playCoinShow() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                var index = 0;
                var self = _this6;
                var bonusdata = cc.vv.gameData.getBonusData();
                var info = bonusdata.info;
                var playindex = [ 1, 6, 11, 2, 7, 12, 3, 8, 13, 4, 9, 14, 5, 10, 15 ];
                var showcoin = function showcoin() {
                  if (index >= playindex.length) {
                    success();
                    return;
                  }
                  var bonusinfo = self.getBonusByIndex(info, playindex[index]);
                  if (bonusinfo) {
                    Global.SlotsSoundMgr.playEffect("num_out");
                    self.GetSymbolByIdx(playindex[index]).playBonusNum(bonusinfo.num);
                    self.scheduleOnce(function() {
                      index++;
                      showcoin();
                    }, .6);
                  } else {
                    index++;
                    showcoin();
                  }
                };
                showcoin();
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showLogo: function showLogo(isshow) {
        cc.find("Canvas/safe_node/fububanzhang").active = isshow;
      },
      bonsShowCollectUI: function bonsShowCollectUI() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function(success) {
                _this7.showLogo(false);
                var collectnode = cc.find("node_wincollect", _this7.node);
                cc.find("getcoin", collectnode).getComponent(cc.Label).string = "";
                collectnode.active = true;
                collectnode.scale = 0;
                Global.SlotsSoundMgr.playEffect("wheel_frame_in");
                cc.tween(collectnode).to(.5, {
                  scale: 1
                }, {
                  easing: "backInOut"
                }).call(function() {
                  success();
                }).start();
              }));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      bonusCollectCoin: function bonusCollectCoin() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function(success) {
                var collectpar = cc.find("collectbonus", _this8.node);
                var aimnode = cc.find("node_wincollect", _this8.node);
                var aimpos = _this8.node.convertToNodeSpaceAR(aimnode.convertToWorldSpaceAR(cc.v2(0, 0)));
                for (var i = 0; i < 5; i++) {
                  var sys = _this8._reels[i]._symbols;
                  for (var j = 0; j < 3; j++) if (3 == sys[j].GetShowId()) {
                    var flynode = cc.instantiate(collectpar);
                    flynode.parent = _this8.node;
                    flynode.active = true;
                    flynode.position = _this8.node.convertToNodeSpaceAR(sys[j].node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    cc.tween(flynode).to(.5, {
                      position: aimpos
                    }).start();
                  }
                }
                Global.SlotsSoundMgr.playEffect("chip_value_collect");
                _this8.scheduleOnce(function() {
                  var bonusdata = cc.vv.gameData.getBonusData();
                  var getcoinnode = cc.find("getcoin", aimnode);
                  var collectframe = cc.find("node_wincollect/collectframespine", _this8.node);
                  cc.vv.gameData.playSpine(collectframe, "animation", false, function() {
                    collectframe.active = false;
                  });
                  Global.SlotsSoundMgr.playEffect("win_rollup");
                  Global.doRoallNumEff(getcoinnode, 0, bonusdata.gamewin, 1.5, function() {
                    success();
                  }, null, 0, true);
                }, .5);
              }));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      getBonusByIndex: function getBonusByIndex(info, index) {
        for (var i = 0; i < info.length; i++) if (info[i].idx == index) return info[i];
        return null;
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (cc.vv.gameData.isTriggerNormalFree()) {
          Global.SlotsSoundMgr.playEffect("scatter_trigger");
          for (var i = 0; i < 5; i++) {
            var sys = this._reels[i]._symbols;
            for (var j = 0; j < 3; j++) sys[j].playScatterAnimation(isplay);
          }
        }
      },
      startMoveHandle: function startMoveHandle() {
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 4; j++) sys[j].clearBonusNum();
        }
      },
      showWildWinTrace: function showWildWinTrace() {
        var parNode = cc.find("top_ani", this.node);
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < 4; idx++) {
            var itemidx = item.indexs[idx];
            var col = (itemidx - 1) % 5;
            var row = 4 - Math.floor((itemidx - 1) / 5) - 1;
            var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", row, col), parNode);
            showNode && showNode.active && showNode.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          }
        }
      },
      startEnterFreeGame: function startEnterFreeGame() {
        var _this9 = this;
        this.backupSymbolState();
        this.playTransitionAni(function() {
          _this9.scheduleOnce(function() {
            cc.vv.gameData.GetBottomScript().SendSpinReq();
          }, .5);
        });
        this.scheduleOnce(function() {
          Global.SlotsSoundMgr.playBgm("free_bgm");
          _this9.ShowGameview(true);
          var freetimes = cc.vv.gameData.isTriggerNormalFree() || cc.vv.gameData.getWheelFreeTimes();
          cc.vv.gameData.SetFreeTime(freetimes);
          cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 1, freetimes);
        }, .2);
      },
      backupSymbolState: function backupSymbolState() {
        for (var i = 0; i < 5; i++) this._reels[i].Backup();
      },
      resumeSymbolState: function resumeSymbolState() {
        for (var i = 0; i < 5; i++) this._reels[i].Resume();
      },
      exitFreeGame: function exitFreeGame() {
        var _this10 = this;
        this.resetJackpot();
        this.playTransitionAni(function() {
          var wincoin = cc.vv.gameData.GetGameTotalFreeWin();
          cc.vv.gameData.GetSlotsScript().ShowBottomWin(wincoin, wincoin, true, function() {
            _this10.CanDoNextRound();
          });
        });
        this.scheduleOnce(function() {
          _this10.resumeSymbolState();
          Global.SlotsSoundMgr.stopBgm();
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_REFUSH_ENERGY);
          _this10.ShowGameview(false);
        }, .2);
      },
      lockJackpot: function lockJackpot() {
        var bonusdata = cc.vv.gameData.getBonusData();
        var prizepool = cc.find("LMSlots_PrizePool_1", this.node.parent).getComponent("LMSlots_PrizePool_Base");
        prizepool.PausePool([ {
          prizeType: 0,
          pauseNum: bonusdata.poolList[0]
        }, {
          prizeType: 1,
          pauseNum: bonusdata.poolList[1]
        }, {
          prizeType: 2,
          pauseNum: bonusdata.poolList[2]
        }, {
          prizeType: 3,
          pauseNum: bonusdata.poolList[3]
        } ]);
      },
      resetJackpot: function resetJackpot() {
        var prizepool = cc.find("LMSlots_PrizePool_1", this.node.parent).getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      playTransitionAni: function playTransitionAni(endcall) {
        Global.SlotsSoundMgr.playEffect("transition");
        var transitionnode = cc.find("screenspine/transition", this.node.parent);
        cc.vv.gameData.playSpine(transitionnode, "animation", false, endcall);
      },
      playBottomWin: function playBottomWin() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = 0 == cc.vv.gameData.GetFreeTime();
                } else {
                  var wheeldata = cc.vv.gameData.getWheelData();
                  if (wheeldata) {
                    nWin = wheeldata.wincoin;
                    nTotal = wheeldata.wincoin;
                    cc.vv.gameData.AddCoin(nTotal);
                  }
                }
                _this11.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
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
  TheMagicHanzo_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "071f4MKD9ZBOr7xS36O5axp", "TheMagicHanzo_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      onLoad: function onLoad() {},
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (2 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        if (isplay) {
          wnode.active = true;
          wnode.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        } else wnode.active = false;
      },
      playBonusAnimation: function playBonusAnimation(isplay) {
        if (3 != this._id) return;
        var cfg = cc.vv.gameData.getGameCfg();
        var wnode = cc.find(cfg.symbol[this._id].win_node, this.node);
        if (isplay) {
          wnode.active = true;
          wnode.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
        } else wnode.active = false;
      },
      playBonusNum: function playBonusNum(coin) {
        var numnode = cc.find("num", this.node);
        numnode.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 0);
        numnode.scale = 0;
        cc.tween(numnode).to(.5, {
          scale: 1
        }, {
          easing: "backInOut"
        }).start();
      },
      clearBonusNum: function clearBonusNum() {
        cc.find("num", this.node).getComponent(cc.Label).string = "";
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheMagicHanzo_UIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc836AYVv1B6LX7566ehHEC", "TheMagicHanzo_UIMgr");
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
      onLoad: function onLoad() {
        this._luckUI = cc.find("luckui", this.node);
        this._wheelresultUI = cc.find("wheelresultui", this.node);
        this._startfreeUI = cc.find("startfreegameui", this.node);
        this._collectfreeUI = cc.find("collectui", this.node);
        this._startSuperfreeUI = cc.find("startsuperfreegameui", this.node);
        this._collectSuperfreeUI = cc.find("supercollectui", this.node);
        this._extrafreeUI = cc.find("extrafreeui", this.node);
        this._extrasuperfreeUI = cc.find("extrasuperfreeui", this.node);
        var btn_collect = cc.find("mainnode/btn_collect", this._wheelresultUI);
        Global.btnClickEvent(btn_collect, this.onCollectCoin, this);
        var btn_start = cc.find("mainnode/btn_start", this._startfreeUI);
        Global.btnClickEvent(btn_start, this.onStartFreeGame, this);
        var btn_freeovercollect = cc.find("mainnode/btn_start", this._collectfreeUI);
        Global.btnClickEvent(btn_freeovercollect, this.onFreeOverCollect, this);
        var btn_superstart = cc.find("mainnode/btn_start", this._startSuperfreeUI);
        Global.btnClickEvent(btn_superstart, this.onSuperFreeStart, this);
        var btn_supercollect = cc.find("mainnode/btn_start", this._collectSuperfreeUI);
        Global.btnClickEvent(btn_supercollect, this.onSuperFreeOverCollect, this);
      },
      start: function start() {},
      showLuckyUI: function showLuckyUI(endcall) {
        var _this = this;
        this._luckUI.active = true;
        Global.showAlertAction(this._luckUI, true, .01, 1, function() {
          _this.scheduleOnce(function() {
            Global.SlotsSoundMgr.playEffect("popup_out");
            Global.showAlertAction(_this._luckUI, false, 1, 0, endcall);
          }, 2);
        });
      },
      showExtraFreeUI: function showExtraFreeUI() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                var slotslist = cc.vv.gameData.getSlotsListData();
                if (slotslist) if (slotslist.free > 0) {
                  var superbonus = cc.vv.gameData.getSuperBonus();
                  if (superbonus) {
                    var shownode = superbonus.total == superbonus.num ? _this2._extrasuperfreeUI : _this2._extrafreeUI;
                    var mainnode = cc.find("mainnode", shownode);
                    shownode.active = true;
                    cc.find("freegames/middle/freetimes", mainnode).getComponent(cc.Label).string = slotslist.free;
                    Global.showAlertAction(mainnode, true, .01, 1, function() {
                      _this2.scheduleOnce(function() {
                        Global.showAlertAction(mainnode, false, 1, 0, function() {
                          shownode.active = false;
                          success();
                        });
                      }, 2);
                    });
                  }
                } else success(); else success();
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWheelResultUI: function showWheelResultUI(data) {
        var _this3 = this;
        this._wheelData = data;
        var result = data.result;
        this._wheelresultUI.active = true;
        var mainnode = cc.find("mainnode", this._wheelresultUI);
        1 == result.length ? "MULT" == result[0].type ? this.showMultUI(result[0].num, data.gamewin) : "FREE" == result[0].type && this.showFreeUI(result[0].num) : this.showJackpotUI(result[0], result[1], data.gamewin);
        var self = this;
        Global.showAlertAction(mainnode, true, .01, 1, function() {
          var totalwin = cc.find("mainnode/bottom/totalwin", self._wheelresultUI);
          Global.doRoallNumEff(totalwin, data.wincoin, data.wincoin, 0, null, null, 0, true);
        });
        var btn_collect = cc.find("mainnode/btn_collect", this._wheelresultUI);
        cc.vv.gameData.checkAutoPlay(btn_collect, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          var mainnode = cc.find("mainnode", _this3._wheelresultUI);
          cc.tween(mainnode).to(.1, {
            scale: 1.2
          }).to(.3, {
            scale: 0
          }, {
            easing: "backOut"
          }).call(function() {
            _this3._wheelData.select && _this3._wheelData.select.state ? _this3.sendEnterFreeeGame(_this3._wheelData.select.rtype) : cc.find("Canvas/safe_node/subgamewheel").getComponent("TheMagicHanzo_Wheel").wheelResultUIClose();
            _this3._wheelresultUI.active = false;
          }).start();
        });
      },
      showJackpotUI: function showJackpotUI(result1, result2, gamewin) {
        this.showSubUI(true, false, false);
        var mult = cc.find("mainnode/jackpot/middle_mult", this._wheelresultUI);
        var free = cc.find("mainnode/jackpot/middle_free", this._wheelresultUI);
        var totalwinnode = cc.find("mainnode/jackpot/totalwin", this._wheelresultUI);
        var headnode = cc.find("mainnode/jackpot/head", this._wheelresultUI);
        var spname = this.getJackpotSpName(result1.num);
        headnode.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("popup").getSpriteFrame(spname);
        if ("MULT" == result2.type) {
          cc.find("multnum", mult).getComponent(cc.Label).string = result2.num + "X";
          this.setShortNum(cc.find("totalwin", mult), gamewin);
          totalwinnode.active = true;
          mult.active = true;
          free.active = false;
        } else if ("FREE" == result2.type) {
          cc.find("freetimes", free).getComponent(cc.Label).string = result2.num;
          totalwinnode.active = false;
          free.active = true;
          mult.active = false;
        }
      },
      setShortNum: function setShortNum(node, wincoin) {
        node.getComponent(cc.Label).string = wincoin > 1e3 ? Global.FormatNumToComma(Number(wincoin / 1e3)) + "K" : wincoin;
      },
      getJackpotSpName: function getJackpotSpName(pool) {
        switch (pool) {
         case 1:
          return "theme143_popup_text7_4";

         case 2:
          return "theme143_popup_text7_3";

         case 3:
          return "theme143_popup_text7_2";

         case 4:
          return "theme143_popup_text7_1";
        }
      },
      showMultUI: function showMultUI(num, gamewin) {
        Global.SlotsSoundMgr.playEffect("tip_show");
        this.showSubUI(false, true, false);
        var mult = cc.find("mainnode/mult", this._wheelresultUI);
        cc.find("multnum", mult).getComponent(cc.Label).string = num + "X";
        var totalwin = cc.find("middle/totalwin", mult);
        this.setShortNum(totalwin, gamewin);
      },
      showFreeUI: function showFreeUI(num) {
        Global.SlotsSoundMgr.playEffect("tip_show");
        this.showSubUI(false, false, true);
        var free = cc.find("mainnode/freegames/middle/freetimes", this._wheelresultUI);
        free.getComponent(cc.Label).string = num;
      },
      showSubUI: function showSubUI(pool, mult, free) {
        Global.SlotsSoundMgr.playEffect("tip_show");
        var jackpotnode = cc.find("mainnode/jackpot", this._wheelresultUI);
        var multnode = cc.find("mainnode/mult", this._wheelresultUI);
        var freenode = cc.find("mainnode/freegames", this._wheelresultUI);
        jackpotnode.active = pool;
        multnode.active = mult;
        freenode.active = free;
      },
      showStartFreeGameUI: function showStartFreeGameUI(freetimes) {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect("free_popup_trigger");
        this._startfreeUI.active = true;
        var mainnode = cc.find("mainnode", this._startfreeUI);
        cc.find("freegames/middle/freetimes", mainnode).getComponent(cc.Label).string = freetimes;
        Global.showAlertAction(mainnode, true, .01, 1, null);
        var btn_start = cc.find("mainnode/btn_start", this._startfreeUI);
        cc.vv.gameData.checkAutoPlay(btn_start, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          var mainnode = cc.find("mainnode", _this4._startfreeUI);
          cc.tween(mainnode).to(.1, {
            scale: 1.2
          }).to(.3, {
            scale: 0
          }, {
            easing: "backOut"
          }).call(function() {
            _this4._startfreeUI.active = false;
            cc.log("2222222222222222222222222222222");
            cc.vv.gameData.GetSlotsScript().startEnterFreeGame();
          }).start();
        });
      },
      showSuperFreeStartUI: function showSuperFreeStartUI() {
        var _this5 = this;
        Global.SlotsSoundMgr.playEffect("free_popup_trigger");
        this._startSuperfreeUI.active = true;
        var freetimes = cc.vv.gameData.isTriggerNormalFree() || cc.vv.gameData.getWheelFreeTimes();
        var mainnode = cc.find("mainnode", this._startSuperfreeUI);
        cc.find("freegames/middle/freetimes", mainnode).getComponent(cc.Label).string = freetimes;
        Global.showAlertAction(mainnode, true, .01, 1, null);
        var btn_superstart = cc.find("mainnode/btn_start", this._startSuperfreeUI);
        cc.vv.gameData.checkAutoPlay(btn_superstart, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          var mainnode = cc.find("mainnode", _this5._startSuperfreeUI);
          cc.tween(mainnode).to(.1, {
            scale: 1.2
          }).to(.3, {
            scale: 0
          }, {
            easing: "backOut"
          }).call(function() {
            _this5._startSuperfreeUI.active = false;
            cc.vv.gameData.getMoreSlotsMgr().changeBackimage(1);
            cc.vv.gameData.GetSlotsScript().startEnterFreeGame();
          }).start();
        });
      },
      showSuperFreeCollectUI: function showSuperFreeCollectUI() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect("free_popup_collect");
        this._collectSuperfreeUI.active = true;
        var mainnode = cc.find("mainnode", this._collectSuperfreeUI);
        Global.showAlertAction(mainnode, true, .01, 1, function() {
          var lbl_coin = cc.find("freegames/middle/collectcoin", mainnode);
          var freewincoin = cc.vv.gameData.GetGameTotalFreeWin();
          lbl_coin.getComponent(cc.Label).string = "";
          Global.doRoallNumEff(lbl_coin, 0, freewincoin, 1, null, null, 0, true);
        });
        var btn_supercollect = cc.find("mainnode/btn_start", this._collectSuperfreeUI);
        cc.vv.gameData.checkAutoPlay(btn_supercollect, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          cc.vv.gameData.clearSuperBonus();
          var mainnode = cc.find("mainnode", _this6._collectSuperfreeUI);
          cc.tween(mainnode).to(.1, {
            scale: 1.2
          }).to(.3, {
            scale: 0
          }, {
            easing: "backOut"
          }).call(function() {
            _this6._collectSuperfreeUI.active = false;
            cc.vv.gameData.GetSlotsScript().exitFreeGame();
          }).start();
        });
      },
      showFreeOverCollectUI: function showFreeOverCollectUI() {
        var _this7 = this;
        Global.SlotsSoundMgr.playEffect("free_popup_collect");
        var superbonus = cc.vv.gameData.getSuperBonus();
        if (superbonus && superbonus.total == superbonus.num) {
          this.showSuperFreeCollectUI();
          return;
        }
        this._collectfreeUI.active = true;
        var mainnode = cc.find("mainnode", this._collectfreeUI);
        Global.showAlertAction(mainnode, true, .01, 1, function() {
          var lbl_coin = cc.find("freegames/middle/collectcoin", mainnode);
          var freewincoin = cc.vv.gameData.GetGameTotalFreeWin();
          lbl_coin.getComponent(cc.Label).string = "";
          Global.doRoallNumEff(lbl_coin, 0, freewincoin, 1, null, null, 0, true);
        });
        var btn_freeovercollect = cc.find("mainnode/btn_start", this._collectfreeUI);
        cc.vv.gameData.checkAutoPlay(btn_freeovercollect, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          var mainnode = cc.find("mainnode", _this7._collectfreeUI);
          cc.tween(mainnode).to(.1, {
            scale: 1.2
          }).to(.3, {
            scale: 0
          }, {
            easing: "backOut"
          }).call(function() {
            _this7._collectfreeUI.active = false;
            cc.vv.gameData.GetSlotsScript().exitFreeGame();
          }).start();
        });
      },
      onSuperFreeStart: function onSuperFreeStart() {
        var _this8 = this;
        var btn_superstart = cc.find("mainnode/btn_start", this._startSuperfreeUI);
        btn_superstart.stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        var mainnode = cc.find("mainnode", this._startSuperfreeUI);
        cc.tween(mainnode).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this8._startSuperfreeUI.active = false;
          cc.vv.gameData.getMoreSlotsMgr().changeBackimage(1);
          cc.vv.gameData.GetSlotsScript().startEnterFreeGame();
        }).start();
      },
      onFreeOverCollect: function onFreeOverCollect() {
        var _this9 = this;
        var btn_freeovercollect = cc.find("mainnode/btn_start", this._collectfreeUI);
        btn_freeovercollect.stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        var mainnode = cc.find("mainnode", this._collectfreeUI);
        cc.tween(mainnode).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this9._collectfreeUI.active = false;
          cc.vv.gameData.GetSlotsScript().exitFreeGame();
        }).start();
      },
      onSuperFreeOverCollect: function onSuperFreeOverCollect() {
        var _this10 = this;
        var btn_supercollect = cc.find("mainnode/btn_start", this._collectSuperfreeUI);
        btn_supercollect.stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        cc.vv.gameData.clearSuperBonus();
        var mainnode = cc.find("mainnode", this._collectSuperfreeUI);
        cc.tween(mainnode).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this10._collectSuperfreeUI.active = false;
          cc.vv.gameData.GetSlotsScript().exitFreeGame();
        }).start();
      },
      onCollectCoin: function onCollectCoin() {
        var _this11 = this;
        var btn_collect = cc.find("mainnode/btn_collect", this._wheelresultUI);
        btn_collect.stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        var mainnode = cc.find("mainnode", this._wheelresultUI);
        cc.tween(mainnode).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this11._wheelData.select && _this11._wheelData.select.state ? _this11.sendEnterFreeeGame(_this11._wheelData.select.rtype) : cc.find("Canvas/safe_node/subgamewheel").getComponent("TheMagicHanzo_Wheel").wheelResultUIClose();
          _this11._wheelresultUI.active = false;
        }).start();
      },
      onStartFreeGame: function onStartFreeGame() {
        var _this12 = this;
        var btn_start = cc.find("mainnode/btn_start", this._startfreeUI);
        btn_start.stopAllActions();
        Global.SlotsSoundMgr.playEffect("btn_click");
        var mainnode = cc.find("mainnode", this._startfreeUI);
        cc.tween(mainnode).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this12._startfreeUI.active = false;
          cc.log("11111111111111111111111111111");
          cc.vv.gameData.GetSlotsScript().startEnterFreeGame();
        }).start();
      },
      sendEnterFreeeGame: function sendEnterFreeeGame(type) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = type;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheMagicHanzo_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ece5KJw+xIzYzqem7qvRDk", "TheMagicHanzo_Wheel");
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
        _node_main: null,
        _node_wheel: null,
        _node_win: null,
        _targetIdx: 0
      },
      onLoad: function onLoad() {
        this._node_main = cc.find("mainnode", this.node);
        this._node_wheel = cc.find("node_wheel", this._node_main);
        this._node_win = cc.find("node_win", this._node_main);
        this._node_winSpine = cc.find("wheelNode/spinewining", this._node_wheel);
        this._node_morewinSpine = cc.find("wheelNode/morewiningspine", this._node_wheel);
        this._node_activewheel = cc.find("wheelNode/activewheel", this._node_wheel);
        this._btnSpin = cc.find("wheelNode/btnSpin", this._node_wheel);
        Global.btnClickEvent(this._btnSpin, this.onWheelStart, this);
        cc.vv.gameData.playSpine(this._btnSpin, "animation1", true, null);
      },
      start: function start() {},
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onWheelStart: function onWheelStart(btn) {
        this._btnSpin.stopAllActions();
        btn.node.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect("wheel_press");
        cc.vv.gameData.GetUIManager().sendEnterFreeeGame(1);
        var spineSpinEff = cc.find("wheelNode/spineSpinEffect", this._node_wheel);
        cc.vv.gameData.playSpine(spineSpinEff, "animation", false, function() {
          spineSpinEff.active = false;
        });
      },
      enterGame: function enterGame(success) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._nextStep = success;
              _this._targetIdx = -1;
              _this._node_winSpine.active = false;
              _this._node_morewinSpine.active = false;
              _this.clearWheelSubObject();
              _this._btnSpin.getComponent(cc.Button).interactable = false;
              _context.next = 8;
              return _this.showMain();

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2.awaitTime(1);

             case 2:
              _context2.next = 4;
              return _this2.playActions(_this2._node_main, [ cc.scaleTo(.2, 1.3), cc.scaleTo(.5, 0) ]);

             case 4:
              _this2._node_main.active = false;

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showMain: function showMain() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var rorationWheel;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _this3._node_main.active = true;
                      _this3._node_win.position = cc.v2(0, -225);
                      _this3._node_win.scale = .6;
                      _this3._node_wheel.scale = 0;
                      _this3.showEnterGameWinCoin();
                      Global.SlotsSoundMgr.playEffect("wheel_in");
                      rorationWheel = cc.find("wheelNode/rotationWheel", _this3._node_wheel);
                      rorationWheel.angle = 126;
                      _context3.next = 10;
                      return _this3.playActions(_this3._node_wheel, [ cc.scaleTo(.3, 1).easing(cc.easeBackInOut()) ]);

                     case 10:
                      _context3.next = 12;
                      return _this3.awaitTime(.3);

                     case 12:
                      _context3.next = 14;
                      return _this3.playActions(_this3._node_win, [ cc.moveTo(.2, cc.v2(0, 130)).easing(cc.easeBackInOut()) ]);

                     case 14:
                      _this3._btnSpin.getComponent(cc.Button).interactable = true;
                      cc.vv.gameData.checkAutoPlay(_this3._btnSpin, function() {
                        _this3._btnSpin.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("wheel_press");
                        cc.vv.gameData.GetUIManager().sendEnterFreeeGame(1);
                        var spineSpinEff = cc.find("wheelNode/spineSpinEffect", _this3._node_wheel);
                        cc.vv.gameData.playSpine(spineSpinEff, "animation", false, function() {
                          spineSpinEff.active = false;
                        });
                      });
                      cc.vv.gameData.playSpine(_this3._btnSpin, "animation1", true);
                      success();

                     case 18:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x) {
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
      showEnterGameWinCoin: function showEnterGameWinCoin() {
        var coinnode = cc.find("getcoin", this._node_win);
        var bonusdata = cc.vv.gameData.getBonusData();
        Global.doRoallNumEff(coinnode, 0, bonusdata.gamewin, 0, null, null, 0, true);
      },
      showResult: function showResult(resultidx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var rorationWheel, offsetangle, diffAngle, targetAngle, mRound;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              rorationWheel = cc.find("wheelNode/rotationWheel", _this4._node_wheel);
              offsetangle = rorationWheel.angle;
              -1 != _this4._targetIdx && (offsetangle = rorationWheel.angle % 360 - 18 * _this4._targetIdx);
              _this4._targetIdx = resultidx - 1;
              diffAngle = 18 * _this4._targetIdx;
              targetAngle = -diffAngle - offsetangle;
              mRound = 12;
              _context5.next = 9;
              return _this4.awaitTime(1);

             case 9:
              cc.vv.gameData.playSpine(_this4._btnSpin, "animation2", true, null);
              cc.find("wheelNode/spindisable", _this4._node_wheel).active = true;
              Global.SlotsSoundMgr.playEffect("wheel_spin");
              _context5.next = 14;
              return _this4.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound, 360 * mRound + targetAngle).easing(cc.easeSineInOut()) ]);

             case 14:
              _this4._wheelData.lucky ? cc.vv.gameData.playSpine(_this4._node_morewinSpine, "animation1", true, null) : cc.vv.gameData.playSpine(_this4._node_winSpine, "animation", true, null);
              Global.SlotsSoundMgr.playEffect("wheel_win");
              _context5.next = 18;
              return _this4.awaitTime(2);

             case 18:
              _this4.showResultUI();

             case 19:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      clearWheelSubObject: function clearWheelSubObject() {
        var rotationWheel = cc.find("wheelNode/rotationWheel", this._node_wheel);
        rotationWheel.removeAllChildren();
      },
      showResultUI: function showResultUI() {
        var _this5 = this;
        if (this._wheelData.lucky) {
          Global.SlotsSoundMgr.playEffect("wheel_spin_again");
          cc.vv.gameData.GetUIManager().showLuckyUI(function() {
            Global.SlotsSoundMgr.playEffect("wheel_double");
            cc.vv.gameData.playSpine(_this5._node_activewheel, "animation", false, function() {
              var rorationWheel = cc.find("wheelNode/rotationWheel", _this5._node_wheel);
              var instnode = cc.instantiate(_this5._node_morewinSpine);
              instnode.parent = rorationWheel;
              instnode.angle = -rorationWheel.angle;
              cc.vv.gameData.playSpine(instnode, "animation2", true, null);
              _this5._node_morewinSpine.active = false;
              _this5._node_winSpine.active = false;
              Global.SlotsSoundMgr.playEffect("wheel_win");
              var btnspin = cc.find("wheelNode/btnSpin", _this5._node_wheel);
              cc.vv.gameData.playSpine(btnspin, "animation1", true, null);
              btnspin.getComponent(cc.Button).interactable = true;
              cc.vv.gameData.checkAutoPlay(btnspin, function() {
                btnspin.getComponent(cc.Button).interactable = false;
                Global.SlotsSoundMgr.playEffect("wheel_press");
                cc.vv.gameData.GetUIManager().sendEnterFreeeGame(1);
                var spineSpinEff = cc.find("wheelNode/spineSpinEffect", _this5._node_wheel);
                cc.vv.gameData.playSpine(spineSpinEff, "animation", false, function() {
                  spineSpinEff.active = false;
                });
              });
              cc.find("wheelNode/spindisable", _this5._node_wheel).active = false;
            });
          });
        } else {
          Global.SlotsSoundMgr.playEffect("wheel_popup");
          cc.vv.gameData.GetUIManager().showWheelResultUI(this._wheelData);
        }
      },
      wheelResultUIClose: function wheelResultUIClose() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect("wheel_in");
        cc.tween(this._node_win).to(.3, {
          scale: 0
        }).start();
        cc.tween(this._node_wheel).to(.3, {
          scale: 0
        }).call(function() {
          _this6._node_main.active = false;
          cc.vv.gameData.GetSlotsScript().resetJackpot();
          _this6._nextStep && _this6._nextStep();
        }).start();
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 == msg.code) {
          this._wheelData = msg.data;
          cc.vv.gameData.setSuperBonus(msg.data.superbonus);
          if (1 == this._wheelData.rtype) {
            cc.vv.gameData.SetWheelData(msg.data);
            this.showResult(msg.data.idx);
          } else this.wheelResultUIClose();
        }
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(success) {
          _this7.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheMagicHanzo_Bottom", "TheMagicHanzo_ButtonSafe", "TheMagicHanzo_Cfg", "TheMagicHanzo_Energy", "TheMagicHanzo_FreeGame", "TheMagicHanzo_FreeReel", "TheMagicHanzo_FreeSlots", "TheMagicHanzo_FreeSlotsMgr", "TheMagicHanzo_FreeSymbol", "TheMagicHanzo_GameData", "TheMagicHanzo_Logic", "TheMagicHanzo_Reel", "TheMagicHanzo_Slots", "TheMagicHanzo_Symbol", "TheMagicHanzo_UIMgr", "TheMagicHanzo_Wheel" ]);