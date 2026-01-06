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
  BirdNineHeads_BigReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e069f9X4eJMrI+0w3LJ91sC", "BirdNineHeads_BigReel");
    "use strict";
    var RowHeight = 300;
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        handler: null
      },
      onLoad: function onLoad() {
        this._super();
        this.isLoaded = true;
        this._nCount && this.Init(this._reelIdx, this._nCount, this._topAniNode);
      },
      onDestroy: function onDestroy() {
        this.handler = null;
      },
      Init: function Init(idx, nCount, node) {
        this._reelIdx = idx;
        this._nCount = nCount;
        this._symbols = [];
        this._topAniNode = node;
        this._cfg = cc.vv.gameData.getGameCfg();
        if (this.isLoaded) {
          this.LoadSymbols();
          this.ShowAntiEffect(false);
        }
      },
      LoadSymbols: function LoadSymbols() {
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("LMSlots_BigSymbol");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("BirdNineHeads_BigSymbol");
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        this._symbols.push(scp);
      },
      ReLayOut: function ReLayOut() {
        for (var i = 0; i < this._symbols.length; i++) {
          var element = this._symbols[i];
          element.node.position = this.GetSymbolPosByRow(i);
          element.SetSymbolIdx(i);
        }
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * RowHeight);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this.ShowAntiEffect(false);
        this.notifyEvt({
          evtName: "reel_spin_end",
          data: this._reelIdx
        });
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
      setHandler: function setHandler(handler) {
        this.handler = handler;
      },
      notifyEvt: function notifyEvt(evt) {
        this.handler && this.handler(evt);
      },
      getFirstSymbol: function getFirstSymbol() {
        return this._symbols[0];
      },
      StartMove: function StartMove() {
        this._super();
        this._offset = RowHeight;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BirdNineHeads_BigSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d7640LAX5MaqgZqQIsrMFJ", "BirdNineHeads_BigSymbol");
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
    var RandomIdxs = [ 1, 0, 0, 101, 0, 0, 1, 0, 101, 0, 1, 101, 0, 1, 0, 101 ];
    cc.Class({
      extends: require("BirdNineHeads_Symbol"),
      properties: {
        label: cc.Label
      },
      onLoad: function onLoad() {
        this._super();
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
      },
      StartMove: function StartMove() {
        this._super();
        this.hideLabel();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randIdx = Global.random(1, RandomIdxs.length);
        var randVal = RandomIdxs[randIdx - 1];
        this.ShowById(randVal);
      },
      playEatBanana: function playEatBanana(coin) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var id, cfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              id = _this._id;
              _this._showNode && (_this._showNode.active = false);
              cfg = cc.vv.gameData.getGameCfg();
              _this._showNode = cc.find(cfg.symbol[id].win_node, _this.node);
              _this._showNode.active = true;
              spine = _this._showNode.getComponent(sp.Skeleton);
              spine.setAnimation(0, "chixiangjiao", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                _this.showLabel(coin);
              });
              _context.next = 10;
              return SlotsFacade.delayTime(1.5);

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showLabel: function showLabel(coin) {
        coin = coin || 0;
        if (coin < 1) {
          this.hideLabel();
          return;
        }
        this.label.string = Global.convertNumToShort(coin);
        this.label.node.active = true;
      },
      hideLabel: function hideLabel() {
        this.label.node.active = false;
      }
    });
    cc._RF.pop();
  }, {
    BirdNineHeads_Symbol: "BirdNineHeads_Symbol"
  } ],
  BirdNineHeads_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba1e4sqEDFFyqWgE3YUh2u+", "BirdNineHeads_Cfg");
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
      symbol: (_symbol = {}, _defineProperty(_symbol, 0, {
        node: "s0",
        win_node: ""
      }), _defineProperty(_symbol, 1, {
        node: "s1",
        win_node: "w1",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe2",
          zIndex: 300
        },
        trigger_ani: {
          name: "idleframe2",
          zIndex: 500
        }
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
          zIndex: 500,
          loop: true
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        burst_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "s101",
        win_node: "w101",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        idle_ani: {
          name: "idleframe2",
          zIndex: 300
        },
        shatter_ani: {
          name: "houjiao",
          zIndex: 500,
          loop: true
        },
        trigger_ani: {
          name: "idleframe2",
          zIndex: 300
        }
      }), _symbol),
      wildIds: [ 1, 101 ],
      scatterId: 2,
      bonusId: 101,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "BirdNineHeads_Slots",
        Reels: "BirdNineHeads_Reel",
        Symbols: "BirdNineHeads_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 100
      },
      helpItems: [ "games/BirdNineHeads/prefab/LMSlots_Help_item1", "games/BirdNineHeads/prefab/LMSlots_Help_item2", "games/BirdNineHeads/prefab/LMSlots_Help_item3", "games/BirdNineHeads/prefab/LMSlots_Help_item4", "games/BirdNineHeads/prefab/LMSlots_Help_item5", "games/BirdNineHeads/prefab/LMSlots_Help_item6" ],
      autoModelDelay: 1,
      randomSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 101 ],
      canEraseSymbols: [ 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "music_JungleKingpin_NormalBg",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/BirdNineHeads/",
        reelStopSound: "sound_JungleKingpin_reel_stop",
        symbolStopSound: "sound_JungleKingpin_scatter_ground",
        antSound: "sound_JungleKingpin_reel_run",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56f5ejCfV9OXLXIoQxlT38j", "BirdNineHeads_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        role: cc.Node
      },
      onLoad: function onLoad() {},
      start: function start() {},
      toNormalState: function toNormalState() {
        this.role.active = true;
      },
      toFreeState: function toFreeState() {
        this.role.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49fb9qYTrhNJL4TE8NzGcZq", "BirdNineHeads_Collect");
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
        progress: cc.Node,
        items: [ cc.Node ],
        title: cc.Node,
        tips_btn: cc.Button,
        tips: cc.Node,
        _step: 0,
        _topZIndex: 100
      },
      onLoad: function onLoad() {
        var _this = this;
        this.tips.active = false;
        this.tips_btn.node.on("click", function() {
          _this._showTips();
        }, this);
      },
      start: function start() {
        this._step = SlotsFacade.dm.bonusTrail.count;
        this.setStep(this._step);
      },
      _showTips: function _showTips() {
        var _this2 = this;
        if (this.tips.active) return;
        this.tips.active = true;
        this.tips.opacity = 0;
        cc.tween(this.tips).to(.5, {
          opacity: 255
        }).delay(2).to(.5, {
          opacity: 0
        }).call(function() {
          _this2.tips.active = false;
        }).start();
      },
      addStep: function addStep() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var item, icon, ani, aniCmp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_collect");
              console.log("\u6dfb\u52a0\u6b65\u6570\uff0c\u5f53\u524d\u6b65\u6570:".concat(_this3._step));
              _this3._topZIndex++;
              item = _this3.items[_this3._step];
              item.zIndex = _this3._topZIndex;
              icon = item.getChildByName("icon");
              icon.getComponent("ImgSwitchCmp").setIndex(1);
              cc.tween(icon).to(.3, {
                scale: 1.5
              }).to(.2, {
                scale: 1
              }).start();
              _context.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              ani = item.getChildByName("ani");
              ani.active = true;
              aniCmp = ani.getComponent(cc.Animation);
              aniCmp.play();
              _context.next = 16;
              return new Promise(function(res) {
                aniCmp.on("finished", function() {
                  ani.active = false;
                  aniCmp.off("finished");
                  res();
                }, _this3);
              });

             case 16:
              _this3._step += 1;

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setStep: function setStep(step) {
        console.log("\u8bbe\u7f6e\u6536\u96c6\u8fdb\u5ea6\u6b65\u6570:".concat(step));
        this._step = step;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.getChildByName("ani").active = false;
          item.getChildByName("light").active = false;
          var icon = item.getChildByName("icon");
          icon.getComponent("ImgSwitchCmp").setIndex(step > i ? 1 : 0);
        }
      },
      triggerSuperGame: function triggerSuperGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator, _step, _loop;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_superfreespin_shan");
              _iterator = _createForOfIteratorHelper(_this4.items);
              try {
                _loop = function _loop() {
                  var item = _step.value;
                  var light = item.getChildByName("light");
                  light.active = true;
                  light.scale = 0;
                  light.angle = 0;
                  cc.tween(light).parallel(cc.tween().to(.25, {
                    scale: 1
                  }), cc.tween().to(.25, {
                    angle: 180
                  })).parallel(cc.tween().to(.25, {
                    scale: 0
                  }), cc.tween().to(.25, {
                    angle: 360
                  })).parallel(cc.tween().to(.25, {
                    scale: 1
                  }), cc.tween().to(.25, {
                    angle: 540
                  })).parallel(cc.tween().to(.25, {
                    scale: 0
                  }), cc.tween().to(.25, {
                    angle: 720
                  })).call(function() {
                    light.active = false;
                  }).start();
                };
                for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              cc.tween(_this4.title).to(.25, {
                scale: 1.2
              }).to(.25, {
                scale: 1
              }).to(.25, {
                scale: 1.2
              }).to(.25, {
                scale: 1
              }).start();
              _context2.next = 6;
              return SlotsFacade.delayTime(1);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enableTipsBtn: function enableTipsBtn(boo) {
        this.tips_btn.interactable = boo;
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.setStep(SlotsFacade.dm.bonusTrail.count);
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_DropGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f27eoQKBpGSqCIctaRPFPl", "BirdNineHeads_DropGame");
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
    var BonusItemType = {
      Jackpot: 1,
      Coin: 2,
      Banana: 3
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        remaining_tips: cc.Node,
        reels_node: cc.Node,
        top_ani: cc.Node,
        banana_node: cc.Node,
        start_drop_game: cc.Node,
        coin_item_template: cc.Node,
        bnana_item_template: cc.Node,
        _bananaItems: [],
        _reels: [],
        _data: null,
        _callBack: null,
        _symbolTemplate: null
      },
      onLoad: function onLoad() {
        this._symbolTemplate = cc.vv.gameData.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplate.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
        this._initData();
        this._initReels();
      },
      _initData: function _initData() {
        this._data = {
          stoppedReelCnt: 0,
          respData: null
        };
      },
      _initReels: function _initReels() {
        this._reels = [];
        for (var i = 0; i < 3; i++) {
          var cmp = cc.find("reel".concat(i + 1), this.reels_node).addComponent("BirdNineHeads_BigReel");
          cmp.Init(i, 1, this.top_ani);
          cmp.setHandler(this._onReelChange.bind(this));
          this._reels.push(cmp);
        }
      },
      _onReelChange: function _onReelChange(evt) {
        if ("reel_spin_end" == evt.evtName) {
          SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_reel_stop");
          this._data.stoppedReelCnt++;
          var reelIdx = evt.data;
          var wildIds = SlotsFacade.dm.getGameCfg().wildIds;
          var symbol = this._reels[reelIdx].GetSymbolByRow(0);
          wildIds.includes(symbol.GetShowId()) && SlotsFacade.soundMgr.playEffect("symbol_bonus");
          3 == this._data.stoppedReelCnt && this.spinEnd();
        }
      },
      _initView: function _initView() {
        var bonusGame = SlotsFacade.dm.bonusGame;
        this.remaining_tips.active = true;
        this.showRestCnt(bonusGame.spinCnt, true);
        this._bananaItems = [];
        for (var i = 0; i < 3; i++) {
          var colNode = this.banana_node.getChildByName("col".concat(i + 1));
          colNode.removeAllChildren();
          var itemsData = bonusGame.items[i];
          var arr = [];
          for (var j = itemsData.length - 1; j >= 0; j--) {
            var itemInfo = itemsData[j];
            var item = null;
            if (itemInfo.type == BonusItemType.Jackpot) {
              item = cc.instantiate(this.bnana_item_template);
              item.active = true;
              item.parent = colNode;
              var imgCmp = item.getChildByName("icon").getComponent("ImgSwitchCmp");
              imgCmp.node.active = true;
              imgCmp.setIndex({
                4: 2,
                3: 1,
                1: 0
              }[itemInfo.jackpotId.toString()]);
            }
            if (itemInfo.type == BonusItemType.Coin) {
              item = cc.instantiate(this.coin_item_template);
              item.active = true;
              item.parent = colNode;
            }
            if (itemInfo.type == BonusItemType.Banana) {
              item = cc.instantiate(this.bnana_item_template);
              item.active = true;
              item.parent = colNode;
              var label = item.getChildByName("label").getComponent(cc.Label);
              label.node.active = true;
              label.string = Global.convertNumToShort(itemInfo.mult * bonusGame.startPrize);
            }
            arr.length > 0 ? item.y = item.height / 2 + arr[0].y + arr[0].height / 2 : item.y = item.height / 2;
            arr.unshift(item);
          }
          this._bananaItems.push(arr);
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var _item = this._reels[_i];
          var symbol = _item.getFirstSymbol();
          symbol.StartMove();
          symbol.ShowRandomSymbol();
        }
      },
      showRestCnt: function showRestCnt(cnt, isInit) {
        var label = this.remaining_tips.getChildByName("label").getComponent(cc.Label);
        label.string = cnt.toString();
      },
      startMove: function startMove() {
        this._data.stoppedReelCnt = 0;
        this._canMoveReels = [];
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          item.StartMove();
          this._canMoveReels.push(item);
        }
      },
      onRecSpinData: function onRecSpinData(msg) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var reelStopInterv, i, item, idx;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._data.respData = msg.data;
              SlotsFacade.dm.bonusGame = msg.data.bonusGame;
              _context.next = 4;
              return SlotsFacade.delayTime(1);

             case 4:
              _this.setSlotsResult();
              reelStopInterv = .2;
              for (i = 0; i < _this._canMoveReels.length; i++) {
                item = _this._canMoveReels[i];
                idx = item.GetReelIdx();
                item.StopMove(idx * reelStopInterv);
              }

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setSlotsResult: function setSlotsResult() {
        var cards = this._data.respData.result.cards;
        for (var i = 0; i < this._canMoveReels.length; i++) {
          var item = this._canMoveReels[i];
          item.SetResult([ {
            sid: cards[i]
          } ]);
        }
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.showRestCnt(SlotsFacade.dm.bonusGame.spinCnt);
              _context2.next = 3;
              return SlotsFacade.delayTime(.5);

             case 3:
              _context2.next = 5;
              return _this2.settlementARound();

             case 5:
              !SlotsFacade.dm.bonusGame.isEnd && SlotsFacade.dm.bonusGame.spinCnt > 0 ? _this2.run() : _this2.totalSettlement();

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      run: function run() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var bonusGame;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._currRoundBonus = [];
              bonusGame = SlotsFacade.dm.bonusGame;
              _this3.showRestCnt(bonusGame.spinCnt - 1);
              _this3.startMove();
              SlotsFacade.dm.reqSubGame({
                rtype: 1
              });

             case 5:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterGame: function enterGame(callBack, isReconnect) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4._callBack = callBack;
              if (isReconnect) {
                _context4.next = 9;
                break;
              }
              _this4.start_drop_game.active = true;
              _this4.start_drop_game.scale = 0;
              cc.tween(_this4.start_drop_game).to(.5, {
                scale: 1.5
              }, {
                easing: "backOut"
              }).delay(1).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                _this4.start_drop_game.active = false;
              }).start();
              _context4.next = 7;
              return SlotsFacade.delayTime(2);

             case 7:
              _context4.next = 9;
              return SlotsFacade.mainPanel.showSceneTransition();

             case 9:
              SlotsFacade.soundMgr.playBgm("music_JungleKingpin_BonusBg");
              SlotsFacade.prizePool.alignTop();
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.mainPanel.slots.active = false;
              _this4.panel.active = true;
              _this4.banana_node.active = true;
              _this4._initData();
              _this4._initView(isReconnect);
              _context4.next = 19;
              return SlotsFacade.delayTime(1.5);

             case 19:
              _this4.run();

             case 20:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      exitGame: function exitGame(coin) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition();

             case 2:
              SlotsFacade.prizePool.toNormal();
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.mainPanel.slots.active = true;
              _this5.panel.active = false;
              _this5.banana_node.active = false;
              _this5._callBack && _this5._callBack(coin);

             case 8:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      settlementARound: function settlementARound() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var result, randomPromiseArr, i, card, symbol, promiseArr, _i2, _card, nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              result = _this6._data.respData.result;
              randomPromiseArr = [];
              for (i = 0; i < result.cards.length; i++) {
                card = result.cards[i];
                if (card > 0) {
                  symbol = _this6._reels[i].getFirstSymbol();
                  symbol.playidleAnimation();
                  card == SlotsFacade.dm.getGameCfg().bonusId && randomPromiseArr.push(_this6._randomEffect(i, result.items[i].id));
                }
              }
              if (!randomPromiseArr.length) {
                _context6.next = 7;
                break;
              }
              _context6.next = 6;
              return Promise.all(randomPromiseArr);

             case 6:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_bonus_paomadeng_over");

             case 7:
              _context6.next = 9;
              return SlotsFacade.delayTime(.5);

             case 9:
              promiseArr = [];
              _i2 = 0;

             case 11:
              if (!(_i2 < result.cards.length)) {
                _context6.next = 19;
                break;
              }
              _card = result.cards[_i2];
              if (!(_card < 1)) {
                _context6.next = 15;
                break;
              }
              return _context6.abrupt("continue", 16);

             case 15:
              promiseArr.push(_this6._dropGold(_i2, result.items[_i2]));

             case 16:
              _i2++;
              _context6.next = 11;
              break;

             case 19:
              _context6.next = 21;
              return Promise.all(promiseArr);

             case 21:
              try {
                nTotal = 0;
                cc.vv.gameData._gameInfo && (nTotal = cc.vv.gameData.GetGameWin());
                cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
                SlotsFacade.bottomCmp.SetWin(nTotal + SlotsFacade.dm.bonusGame.winCoin);
              } catch (e) {
                console.log(e);
              }

             case 22:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _randomEffect: function _randomEffect(colIdx, coinIdx) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var itemArr, ascRoad, i, desRoad, road, minStep, stepArr, currStep, len, j, totalTime, _i3, light;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              itemArr = _this7._bananaItems[colIdx];
              ascRoad = [];
              for (i = 0; i < itemArr.length; i++) ascRoad.push(i);
              desRoad = ascRoad.concat().reverse();
              ascRoad.pop();
              desRoad.pop();
              road = ascRoad.concat(desRoad);
              minStep = 10;
              stepArr = [];
              currStep = 0;
              len = minStep + road.length;
              j = 0;

             case 12:
              if (!(j < len)) {
                _context7.next = 21;
                break;
              }
              stepArr.push(itemArr[road[currStep]]);
              if (!(j >= minStep && road[currStep] == coinIdx - 1)) {
                _context7.next = 16;
                break;
              }
              return _context7.abrupt("break", 21);

             case 16:
              currStep += 1;
              currStep >= road.length && (currStep = 0);

             case 18:
              j++;
              _context7.next = 12;
              break;

             case 21:
              totalTime = 3;
              for (_i3 = 0; _i3 < stepArr.length; _i3++) {
                light = stepArr[_i3].getChildByName("light");
                light.active = true;
                light.opacity = 0;
                cc.tween(light).delay(_this7._genDelayTime(totalTime, stepArr.length, _i3 + 1)).call(function() {
                  SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_bonus_paomadeng");
                }).to(.1, {
                  opacity: 255
                }).to(.1, {
                  opacity: 0
                }).start();
              }
              _context7.next = 25;
              return SlotsFacade.delayTime(totalTime);

             case 25:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _genDelayTime: function _genDelayTime(totalTime, step, currStep) {
        var tan = 1.73205080757;
        var stepLen = Math.sqrt(2 * totalTime / tan);
        var unitLen = stepLen / step;
        var sCurr = 0;
        sCurr = .5 * unitLen * currStep * unitLen * currStep * tan;
        return sCurr;
      },
      _dropGold: function _dropGold(colIdx, data) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var coinItem, symbol, itemGlobalPos, endPos, coinItemArr, refY, i, endY, coin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              coinItem = _this8._bananaItems[colIdx].splice(data.id - 1, 1)[0];
              symbol = _this8._reels[colIdx].getFirstSymbol();
              itemGlobalPos = coinItem.convertToWorldSpaceAR(cc.v2(0, 0));
              coinItem.parent = _this8.top_ani;
              coinItem.setPosition(_this8.top_ani.convertToNodeSpaceAR(itemGlobalPos));
              endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this8.top_ani.convertToNodeSpaceAR(endPos);
              cc.tween(coinItem).to(.5, {
                x: endPos.x,
                y: endPos.y
              }).start();
              coinItemArr = _this8._bananaItems[colIdx];
              refY = 0;
              for (i = coinItemArr.length - 1; i >= 0; i--) {
                endY = coinItemArr[i].height / 2;
                i < coinItemArr.length - 1 && (endY += refY);
                refY = endY + coinItemArr[i].height / 2;
                cc.tween(coinItemArr[i]).to(.5, {
                  y: endY
                }).start();
              }
              _context8.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_wild_eat");
              coin = 0;
              if (!data.coin) {
                _context8.next = 19;
                break;
              }
              coin = data.coin;
              _context8.next = 23;
              break;

             case 19:
              if (!data.jackpot) {
                _context8.next = 23;
                break;
              }
              coin = data.jackpot.value;
              _context8.next = 23;
              return SlotsFacade.popup.showWinJPGold(data.jackpot.id, coin);

             case 23:
              coinItem.removeFromParent();
              _context8.next = 26;
              return symbol.playEatBanana(coin);

             case 26:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      totalSettlement: function totalSettlement() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var winCoin;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              winCoin = SlotsFacade.dm.bonusGame.winCoin;
              _context9.next = 3;
              return SlotsFacade.popup.showWinDropGameGold(winCoin);

             case 3:
              _this9.exitGame(winCoin);

             case 4:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76e70iTqWFIV5Nvt+YONIqT", "BirdNineHeads_FlowCtrl");
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
      enterRoom: function enterRoom() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 6;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 6;
              return _this.enterFreeGame(true);

             case 6:
              if (!SlotsFacade.dm.bonusGame) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.enterDropGame(true);

             case 9:
              SlotsFacade.slots.CanDoNextRound();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startMove: function startMove() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.wildGame.startMove();

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cards;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return SlotsFacade.wildGame.onSpinMsg();

             case 2:
              SlotsFacade.slots._gameInfo = msg;
              cards = msg.resultCards;
              SlotsFacade.slots.SetSlotsResult(cards);
              SlotsFacade.slots.SetReelStateInfo(cards);

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, shatterWinCoin, nTotal, updateTotal;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              cc.vv.AudioManager.stopEffectByName("sound_JungleKingpin_reel_run");
              _context4.next = 3;
              return SlotsFacade.wildGame.spinEnd();

             case 3:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              shatterWinCoin = 0;
              SlotsFacade.dm.getSpinData().shatterInfo && (shatterWinCoin = SlotsFacade.dm.getSpinData().shatterInfo.winCoin);
              nWin -= shatterWinCoin;
              nTotal = nWin;
              updateTotal = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                nTotal -= shatterWinCoin;
                updateTotal = false;
              }
              _context4.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, updateTotal, res);
              });

             case 13:
              _context4.next = 15;
              return _this2.eraseSymbol();

             case 15:
              _context4.next = 17;
              return _this2.enterDropGame();

             case 17:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 27;
                break;
              }
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 23;
                break;
              }
              _context4.next = 21;
              return _this2.enterFreeGame();

             case 21:
              _context4.next = 25;
              break;

             case 23:
              _context4.next = 25;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), false);

             case 25:
              _context4.next = 37;
              break;

             case 27:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 37;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context4.next = 31;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin(), SlotsFacade.dm.GetTotalFree());

             case 31:
              _context4.next = 33;
              return SlotsFacade.mainPanel.showSceneTransition();

             case 33:
              SlotsFacade.slots.startMoveAllSymbol();
              SlotsFacade.slots.Resume();
              _context4.next = 37;
              return _this2.enterNormalGame();

             case 37:
              SlotsFacade.slots.CanDoNextRound();

             case 38:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var total, rest;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isReconnect) {
                _context5.next = 20;
                break;
              }
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_scatter_start");
              _context5.next = 6;
              return SlotsFacade.slots.playTriggerAni(SlotsFacade.dm.getSpinData().scatterZJLuXian.indexs);

             case 6:
              SlotsFacade.slots.Backup();
              _context5.next = 9;
              return SlotsFacade.collect.addStep();

             case 9:
              if (!(SlotsFacade.dm.bonusTrail.count == SlotsFacade.dm.bonusTrail.totalCount)) {
                _context5.next = 16;
                break;
              }
              _context5.next = 12;
              return SlotsFacade.collect.triggerSuperGame();

             case 12:
              _context5.next = 14;
              return SlotsFacade.popup.showWinSuperFreeCnt(SlotsFacade.dm.triggerFreeCnt());

             case 14:
              _context5.next = 18;
              break;

             case 16:
              _context5.next = 18;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), true);

             case 18:
              _context5.next = 20;
              return SlotsFacade.mainPanel.showSceneTransition();

             case 20:
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              SlotsFacade.collect.hide();
              SlotsFacade.slots.showFreeTitle(true, SlotsFacade.dm.bonusTrail.state > 0 ? 1 : 0);
              SlotsFacade.slots.changeReelsBg(true);
              _context5.next = 30;
              return SlotsFacade.delayTime(.5);

             case 30:
              if (!(SlotsFacade.dm.bonusTrail.state > 0)) {
                _context5.next = 33;
                break;
              }
              _context5.next = 33;
              return SlotsFacade.wildGame.enterWildGame(isReconnect);

             case 33:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.collect.show();
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.character.toNormalState();
              Global.SlotsSoundMgr.playNormalBgm(true);
              SlotsFacade.wildGame.exitWildGame();
              SlotsFacade.collect.show();
              SlotsFacade.slots.showFreeTitle(false);
              SlotsFacade.slots.changeReelsBg(false);
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 13;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enterDropGame: function enterDropGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var bonusIdxs, coin, nWin, nTotal, updateTotal;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (SlotsFacade.dm.bonusGame) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isReconnect) {
                _context7.next = 9;
                break;
              }
              SlotsFacade.slots.startMoveAllSymbol();
              bonusIdxs = SlotsFacade.dm.getBonusIdxs();
              _context7.next = 9;
              return SlotsFacade.slots.playTriggerAni(bonusIdxs);

             case 9:
              _context7.next = 11;
              return new Promise(function(res) {
                SlotsFacade.dropGame.enterGame(res, isReconnect);
              });

             case 11:
              coin = _context7.sent;
              SlotsFacade.dm.AddCoin(coin);
              nWin = coin;
              nTotal = coin;
              cc.vv.gameData._gameInfo && (nTotal = cc.vv.gameData.GetGameWin());
              updateTotal = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                updateTotal = false;
              }
              nTotal += coin;
              _context7.next = 21;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, updateTotal, res);
              });

             case 21:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      eraseSymbol: function eraseSymbol() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var shatterInfo, cfg, hasShatter, bonusSymbols, reels, i, symbols, j, _iterator, _step, s, reelState, isRemove, _i, _i2, cnt, hasRest, _iterator2, _step2, _i3, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              shatterInfo = SlotsFacade.dm.getSpinData().shatterInfo;
              if (shatterInfo) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");

             case 3:
              SlotsFacade.slots.startMoveAllSymbol();
              cfg = SlotsFacade.dm.getGameCfg();
              hasShatter = false;

             case 6:
              false;
              _context8.prev = 7;
              bonusSymbols = [];
              reels = SlotsFacade.slots._reels;
              for (i = 0; i < reels.length; i++) {
                symbols = reels[i]._symbols;
                for (j = 0; j < symbols.length - 1; j++) cfg.bonusId == symbols[j].GetShowId() && bonusSymbols.push(symbols[j]);
              }
              if (hasShatter) {
                _context8.next = 18;
                break;
              }
              hasShatter = true;
              _iterator = _createForOfIteratorHelper(bonusSymbols);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  s = _step.value;
                  s.playShatterAni();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_goldwild_hou");
              _context8.next = 18;
              return SlotsFacade.delayTime(1);

             case 18:
              reelState = [ 0, 0, 0, 0, 0 ];
              isRemove = false;
              for (_i = 0; _i < reels.length; _i++) {
                reelState[_i] = reels[_i].eraseSymbol();
                reelState[_i] > 0 && (isRemove = true);
              }
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_symbol_sui");
              _context8.next = 24;
              return SlotsFacade.delayTime(1);

             case 24:
              _i2 = 0;

             case 25:
              if (!(_i2 < reels.length)) {
                _context8.next = 35;
                break;
              }
              cnt = reelState[_i2];
              if (!(cnt > 0)) {
                _context8.next = 32;
                break;
              }
              if (!(cnt > shatterInfo.extraCards[_i2].length)) {
                _context8.next = 31;
                break;
              }
              console.log("#err#\u586b\u5145\u5143\u7d20\u4e0d\u8db3");
              return _context8.abrupt("break", 35);

             case 31:
              reels[_i2].fillSymbols(shatterInfo.extraCards[_i2].splice(0, cnt));

             case 32:
              _i2++;
              _context8.next = 25;
              break;

             case 35:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_symbol_drop");
              _context8.next = 38;
              return SlotsFacade.delayTime(.4);

             case 38:
              if (isRemove) {
                _context8.next = 41;
                break;
              }
              console.log("\u65e0\u53ef\u79fb\u9664\u56fe\u6807");
              return _context8.abrupt("break", 55);

             case 41:
              hasRest = false;
              _iterator2 = _createForOfIteratorHelper(shatterInfo.extraCards);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _i3 = _step2.value;
                  _i3.length > 0 && (hasRest = true);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if (hasRest) {
                _context8.next = 47;
                break;
              }
              console.log("\u65e0\u5269\u4f59\u586b\u5145\u56fe\u6807");
              return _context8.abrupt("break", 55);

             case 47:
              _context8.next = 53;
              break;

             case 49:
              _context8.prev = 49;
              _context8.t0 = _context8["catch"](7);
              console.log(_context8.t0);
              return _context8.abrupt("break", 55);

             case 53:
              _context8.next = 6;
              break;

             case 55:
              SlotsFacade.slots._gameInfo.zjLuXian = shatterInfo.zjLuXian;
              SlotsFacade.slots._gameInfo.scatterZJLuXian = shatterInfo.scatterResult;
              SlotsFacade.slots.ShowWinTrace();
              nWin = shatterInfo.winCoin;
              nTotal = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context8.next = 63;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 63:
             case "end":
              return _context8.stop();
            }
          }, _callee8, null, [ [ 7, 49 ] ]);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b22dm2IEBN3LEGdhHkrY6T", "BirdNineHeads_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        bonusGame: null,
        bonusTrail: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.bonusGame = this._deskInfo.bonusGame;
        this.bonusTrail = this._deskInfo.bonusTrail;
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, false, this);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.bonusGame = msg.bonusGame;
          this.bonusTrail = msg.bonusTrail;
        }
        this._super(msg);
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      hasFree: function hasFree() {
        return this.GetFreeTime() > 0;
      },
      isTriggerFree: function isTriggerFree() {
        return this.triggerFreeCnt() > 0;
      },
      triggerFreeCnt: function triggerFreeCnt() {
        var freeResult = this._gameInfo.freeResult;
        if (freeResult && freeResult.triFreeCnt && freeResult.freeInfo && freeResult.freeInfo.freeCnt) return freeResult.freeInfo.freeCnt;
        return 0;
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this._gameInfo.freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      getBonusIdxs: function getBonusIdxs() {
        var ret = [];
        if (this._gameInfo) {
          var resultCards = this._gameInfo.resultCards;
          this._gameInfo.shatterInfo && (resultCards = this._gameInfo.shatterInfo.finalCards);
          var wildIds = this.getGameCfg().wildIds;
          for (var i = 0; i < resultCards.length; i++) wildIds.includes(resultCards[i]) && ret.push(i + 1);
        }
        return ret;
      },
      reqSubGame: function reqSubGame(param) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: this._gameId,
          data: param
        };
        cc.vv.NetManager.send(req, true);
      },
      onResp: function onResp(msg) {
        console.log("reqSubGame-resp:", msg);
        1 == msg.data.rtype && SlotsFacade.dropGame.onRecSpinData(msg);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  BirdNineHeads_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5753ceQMJVDUJzqmQCoMb4e", "BirdNineHeads_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("BirdNineHeads_MainPanel");
        this.soundMgr = this.addComponent("BirdNineHeads_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("BirdNineHeads_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("BirdNineHeads_Popup");
        this.wildGame = this.mainPanel.wild_game.getComponent("BirdNineHeads_WildGame");
        this.character = this.mainPanel.character_node.getComponent("BirdNineHeads_Character");
        this.collect = this.mainPanel.collect.getComponent("BirdNineHeads_Collect");
        this.dropGame = this.mainPanel.banana_drop_game.getComponent("BirdNineHeads_DropGame");
        this.prizePool = this.mainPanel.jpNode.getComponent("BirdNineHeads_PrizePool");
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
  BirdNineHeads_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "deabfC/gUVN8bB1B6ZH2ZTT", "BirdNineHeads_MainPanel");
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
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character_node");
        this.collect = this.slots.getChildByName("collect");
        this.wild_game = this.slots.getChildByName("wild_game");
        this.drop_game_tips = this.slots.getChildByName("drop_game_tips");
        this.popup_node = this.node.getChildByName("popup_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.banana_drop_game = this.node.getChildByName("banana_drop_game");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.logo = this.node.getChildByName("logo");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_guochang");
              spine = _this.transition_node.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "skill", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 7;
              return SlotsFacade.delayTime(1.3);

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4ce1c1PFxLQoXvMRx8snWN", "BirdNineHeads_Popup");
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
        bg_dark: cc.Node
      },
      onLoad: function onLoad() {},
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showBgDark: function showBgDark(boo) {
        this.bg_dark.active = boo;
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, label, okBtn, tipsLabel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isFirstTrigger ? SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_freespin_start") : SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_freespin_more");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              tipsLabel = cc.find("tips_label/label_2", panel).getComponent("ImgSwitchCmp");
              if (isFirstTrigger) {
                okBtn.active = true;
                tipsLabel.setIndex(0);
              } else {
                okBtn.active = false;
                tipsLabel.setIndex(1);
              }
              _context.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              if (!isFirstTrigger) {
                _context.next = 18;
                break;
              }
              _context.next = 16;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.off("click");
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
                okBtn.on("click", function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 16:
              _context.next = 22;
              break;

             case 18:
              _context.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
              _context.next = 22;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });

             case 22:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb, freeCnt) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, cntLabel, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_freespin_over");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              cntLabel = cc.find("tips_label/label", panel).getComponent(cc.Label);
              cntLabel.string = freeCnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              _context2.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              _context2.next = 15;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("clicksound_JungleKingpin_freespin_collect");
                  okBtn.off("click");
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
                okBtn.on("click", function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 15:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinDropGameGold: function showWinDropGameGold(goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_tip_over");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_drop_game_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context3.next = 11;
              return SlotsFacade.delayTime(.5);

             case 11:
              _context3.next = 13;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.off("click");
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
                okBtn.on("click", function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 13:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinSuperFreeCnt: function showWinSuperFreeCnt(cnt) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_superfreespin_tip");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_super_game");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              _context4.next = 11;
              return SlotsFacade.delayTime(.5);

             case 11:
              _context4.next = 13;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.off("click");
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
                okBtn.on("click", function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 13:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var jpCfg, panel, jpIconImg, label, okBtn;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              jpCfg = {
                1: {
                  index: 0
                },
                3: {
                  index: 1
                },
                4: {
                  index: 2
                }
              }[jpType.toString()];
              if (jpCfg) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_tip_over");
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              jpIconImg = panel.getChildByName("jp_icon").getComponent("ImgSwitchCmp");
              jpIconImg.setIndex(jpCfg.index);
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context5.next = 16;
              return SlotsFacade.delayTime(.5);

             case 16:
              _context5.next = 18;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.off("click");
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
                okBtn.on("click", function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 18:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84ed8Np/O9LjqwPXOG7JOfn", "BirdNineHeads_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        this._super();
        this.toNormal();
      },
      alignTop: function alignTop() {},
      toNormal: function toNormal() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  BirdNineHeads_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e748ezvPqpBx7qNPlO3+WSg", "BirdNineHeads_Reel");
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
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1anode_anti");
        }
      },
      eraseSymbol: function eraseSymbol() {
        var _this = this;
        var removeCnt = 0;
        var canEraseSymbols = SlotsFacade.dm.getGameCfg().canEraseSymbols;
        var _loop = function _loop(_i) {
          var symbol = _this._symbols[_i];
          if (canEraseSymbols.includes(symbol.GetShowId())) {
            _this._symbols.splice(_i, 1);
            symbol.playBurstAni();
            _i--;
            cc.tween(symbol.node).delay(1).call(function() {
              _this._destroySymbol(symbol);
            }).start();
            removeCnt++;
          }
          i = _i;
        };
        for (var i = 0; i < this._symbols.length - 1; i++) _loop(i);
        return removeCnt;
      },
      fillSymbols: function fillSymbols(ids) {
        if (ids.length < 1) return;
        for (var _i2 = 0; _i2 < this._symbols.length; _i2++) this._symbols[_i2].SetSymbolIdx(_i2);
        for (var _i3 = 0; _i3 < ids.length; _i3++) {
          var node = cc.instantiate(this._symbolTemplete);
          node.parent = this._holderNode;
          node.setPosition(this.GetSymbolPosByRow(3 + _i3));
          var scp = node.addComponent(this._cfg.scripts.Symbols);
          scp.SetSymbolReelIdx(this._reelIdx);
          scp.Init(this._symbols.length - 1, this._topAniNode);
          scp.ShowById(ids[_i3]);
          this._symbols.splice(this._symbols.length - 1, 0, scp);
        }
        for (var _i4 = 0; _i4 < this._symbols.length - 1; _i4++) {
          var symbol = this._symbols[_i4];
          symbol.ShowNormal();
          var endPos = this.GetSymbolPosByRow(_i4);
          cc.tween(symbol.node).to(.35, {
            y: endPos.y
          }).start();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BirdNineHeads_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56062hzXipCcrpZ8ZspYQGh", "BirdNineHeads_Slots");
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
      onLoad: function onLoad() {
        this._super();
      },
      StartMove: function StartMove() {
        this._super();
        SlotsFacade.flowCtrl.startMove();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
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
      transferIdx: function transferIdx(idx) {
        idx -= 1;
        var col = idx % this._col;
        var row = this._row - Math.floor(idx / this._col) - 1;
        return {
          col: col,
          row: row
        };
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var pos = reel.GetSymbolPosByRow(idxInfo.row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              indexs.forEach(function(element) {
                var item = _this.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context.next = 3;
              return SlotsFacade.delayTime(1.5);

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startMoveAllSymbol: function startMoveAllSymbol() {
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var r = _step.value;
            var _iterator2 = _createForOfIteratorHelper(r._symbols), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var s = _step2.value;
                s.StartMove();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      showFreeTitle: function showFreeTitle(boo, type) {
        var titleImg = cc.find("reels_frame/free_title", this.node).getComponent("ImgSwitchCmp");
        titleImg.node.active = boo;
        var frameTopImg = cc.find("reels_frame/up", this.node).getComponent("ImgSwitchCmp");
        if (boo) {
          titleImg.setIndex(type);
          frameTopImg.setIndex(1);
        } else frameTopImg.setIndex(0);
      },
      changeReelsBg: function changeReelsBg(isFree) {
        isFree = isFree || false;
        var index = isFree ? 1 : 0;
        for (var i = 0; i < this._cfg.col; i++) {
          var reelBgImg = cc.find("reels_bg/reel_bg".concat(i + 1), this.node).getComponent("ImgSwitchCmp");
          reelBgImg.setIndex(index);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BirdNineHeads_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23c0debpStMLpnPTUzg6aS/", "BirdNineHeads_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/BirdNineHeads/",
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
      stopBgm: function stopBgm() {
        Global.SlotsSoundMgr.stopBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("music_JungleKingpin_FreeSpinBg");
      }
    });
    cc._RF.pop();
  }, {} ],
  BirdNineHeads_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c23b4tJWShISLe5xyuRtxPa", "BirdNineHeads_Symbol");
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
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      onLoad: function onLoad() {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
      },
      StopMoveDeep: function StopMoveDeep() {
        if (!SlotsFacade.dm.getSpinData()) return;
        this.GetShowId() == SlotsFacade.dm.getGameCfg().bonusId && SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_goldwild_ground");
      },
      StopMoveEnd: function StopMoveEnd() {},
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          this.hideChild(aniNode);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var aniCfg = cfg.symbol[id].win_ani;
          if (aniCfg && "" != aniCfg.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            if ("animation" == aniCfg.type) {
              var ani = topShowNode.getChildByName(aniCfg.name).getComponent(cc.Animation);
              ani.node.active = true;
              ani.play();
            } else {
              var nodeSp = topShowNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, aniCfg.name, true);
            }
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var aniNode = this._showNode;
          this.hideChild(aniNode);
          var aniCfg = cfg.symbol[id].stop_ani;
          if ("" != aniCfg.name) {
            this.node.zIndex = aniCfg.zIndex - this._symbolIdx + 10 * this._reelIdx;
            if ("animation" == aniCfg.type) {
              var stopAni = aniNode.getChildByName(aniCfg.name).getComponent(cc.Animation);
              stopAni.node.active = true;
              stopAni.play();
            } else {
              var nodeSp = aniNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, aniCfg.name, false);
            }
          }
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
          this.hideChild(topShowNode);
          var aniCfg = cfg.symbol[id].trigger_ani;
          if ("" != aniCfg.name) {
            aniNode.zIndex = aniCfg.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            if ("animation" == aniCfg.type) {
              var stopAni = topShowNode.getChildByName(aniCfg.name).getComponent(cc.Animation);
              stopAni.node.active = true;
              stopAni.play();
            } else {
              var nodeSp = topShowNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, aniCfg.name, aniCfg.loop);
            }
          }
        }
        return isPlay;
      },
      ShowKuang: function ShowKuang(boo) {
        this._id == SlotsFacade.dm.getGameCfg().scatterId && (boo = false);
        this._super(boo);
      },
      playShatterAni: function playShatterAni() {
        var id = this._id;
        this._showNode && (this._showNode.active = false);
        var symbolCfg = cc.vv.gameData.getGameCfg().symbol[id];
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        aniNode.zIndex = symbolCfg.shatter_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
        this._showNode = cc.find(symbolCfg.win_node, aniNode);
        this._showNode.active = true;
        var topShowNode = this._showNode;
        topShowNode.active = true;
        var spine = topShowNode.getComponent(sp.Skeleton);
        spine.setAnimation(0, symbolCfg.shatter_ani.name, false);
      },
      playBurstAni: function playBurstAni() {
        var id = this._id;
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
        this.hideChild(this._showNode);
        this._showNode.active = true;
        var aniNode = this._showNode;
        var aniCfg = cfg.symbol[id].burst_ani;
        aniNode.zIndex = aniCfg.zIndex - this._symbolIdx + 10 * this._reelIdx;
        if ("animation" == aniCfg.type) {
          var ani = aniNode.getChildByName(aniCfg.name).getComponent(cc.Animation);
          ani.node.active = true;
          ani.play();
        } else {
          var nodeSp = aniNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, aniCfg.name, aniCfg.loop);
        }
      },
      hideChild: function hideChild(node) {
        var children = node.children;
        var _iterator = _createForOfIteratorHelper(children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var c = _step.value;
            c.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      stopWinTweenAction: function stopWinTweenAction() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  BirdNineHeads_WildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99fd2ZB521L4r6ZFuTDUMG3", "BirdNineHeads_WildGame");
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
        wild_node: cc.Node,
        symbolNode: cc.Node,
        symbolSpine: sp.Skeleton,
        symbolLight: cc.Node,
        symbolKuang: cc.Node,
        _isEnterWild: false
      },
      onLoad: function onLoad() {
        this.wild_node.active = false;
      },
      start: function start() {
        var pos = SlotsFacade.slots.getIdxGlobalPos(13);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        this.symbolNode.setPosition(pos);
      },
      enterWildGame: function enterWildGame(isReconnect) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var animation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._isEnterWild = true;
              _this.showWild();
              _this.symbolNode.active = true;
              if (!isReconnect) {
                _context.next = 9;
                break;
              }
              _this.symbolSpine.setAnimation(0, "idleframe", false);
              _this.symbolLight.getComponent(cc.Animation).play();
              _this.symbolKuang.active = false;
              _context.next = 18;
              break;

             case 9:
              SlotsFacade.soundMgr.playEffect("sound_JungleKingpin_superfreespin_addwild");
              _this.symbolSpine.setAnimation(0, "buling2", false);
              _this.symbolSpine.addAnimation(0, "haojiao", false);
              _context.next = 14;
              return SlotsFacade.delayTime(.5);

             case 14:
              _this.symbolKuang.active = true;
              animation = _this.symbolKuang.getComponent(cc.Animation);
              animation.on("finished", function() {
                _this.symbolKuang.active = false;
                _this.symbolLight.active = true;
                _this.symbolLight.getComponent(cc.Animation).play();
              }, _this);
              animation.play();

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitWildGame: function exitWildGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._isEnterWild = false;
              _this2.symbolNode.active = false;
              _this2.hideWild();

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      hideWild: function hideWild() {
        this.wild_node.active = false;
      },
      showWild: function showWild() {
        this.wild_node.active = true;
      },
      startMove: function startMove() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var bonusTrail;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              bonusTrail = SlotsFacade.dm.bonusTrail;
              if (!(bonusTrail.state < 1)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", false);

             case 3:
              if (_this3._isEnterWild) {
                _context3.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context3.abrupt("return");

             case 6:
              _this3.showWild();

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onSpinMsg: function onSpinMsg() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var bonusTrail;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              bonusTrail = SlotsFacade.dm.bonusTrail;
              if (!(bonusTrail.state < 1)) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");

             case 3:
              if (_this4._isEnterWild) {
                _context4.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context4.abrupt("return");

             case 6:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var bonusTrail;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              bonusTrail = SlotsFacade.dm.bonusTrail;
              if (!(bonusTrail.state < 1 && !_this5._isEnterWild)) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return");

             case 3:
              if (_this5._isEnterWild) {
                _context5.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context5.abrupt("return");

             case 6:
              _context5.next = 8;
              return _this5.hideWild();

             case 8:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "BirdNineHeads_BigReel", "BirdNineHeads_BigSymbol", "BirdNineHeads_Cfg", "BirdNineHeads_Character", "BirdNineHeads_Collect", "BirdNineHeads_DropGame", "BirdNineHeads_FlowCtrl", "BirdNineHeads_GameData", "BirdNineHeads_Logic", "BirdNineHeads_MainPanel", "BirdNineHeads_Popup", "BirdNineHeads_PrizePool", "BirdNineHeads_Reel", "BirdNineHeads_Slots", "BirdNineHeads_Sound", "BirdNineHeads_Symbol", "BirdNineHeads_WildGame" ]);