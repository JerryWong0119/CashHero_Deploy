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
  TheEvil_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f99eb+LkIVOPYkvg5915jpb", "TheEvil_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  TheEvil_BubbleCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82aaa9HhY9F9IUhmc6A7CMA", "TheEvil_BubbleCfg");
    "use strict";
    var _bubbleData;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var bubbleCfg = {
      bubbleData: (_bubbleData = {}, _defineProperty(_bubbleData, 1, {
        size: .25,
        pickPosX: -250,
        pickPosY: -324,
        pickMoveAnimation: "animation4",
        route: [ {
          x: -216,
          y: -324,
          point: []
        }, {
          x: -216,
          y: -162,
          point: [ 16 ]
        }, {
          x: -216,
          y: -54,
          point: [ 11 ]
        }, {
          x: -216,
          y: 54,
          point: [ 6 ]
        }, {
          x: -216,
          y: 162,
          point: [ 1 ]
        } ]
      }), _defineProperty(_bubbleData, 2, {
        size: .25,
        pickPosX: -125,
        pickPosY: -324,
        pickMoveAnimation: "animation5",
        route: [ {
          x: -108,
          y: -324,
          point: []
        }, {
          x: -108,
          y: -162,
          point: [ 17 ]
        }, {
          x: -108,
          y: -54,
          point: [ 12 ]
        }, {
          x: -108,
          y: 54,
          point: [ 7 ]
        }, {
          x: -108,
          y: 162,
          point: [ 2 ]
        } ]
      }), _defineProperty(_bubbleData, 3, {
        size: .25,
        pickPosX: 0,
        pickPosY: -324,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 0,
          y: -324,
          point: []
        }, {
          x: 0,
          y: -162,
          point: [ 18 ]
        }, {
          x: 0,
          y: -54,
          point: [ 13 ]
        }, {
          x: 0,
          y: 54,
          point: [ 8 ]
        }, {
          x: 0,
          y: 162,
          point: [ 3 ]
        } ]
      }), _defineProperty(_bubbleData, 4, {
        size: .25,
        pickPosX: 125,
        pickPosY: -324,
        pickMoveAnimation: "animation5",
        route: [ {
          x: 108,
          y: -324,
          point: []
        }, {
          x: 108,
          y: -162,
          point: [ 19 ]
        }, {
          x: 108,
          y: -54,
          point: [ 14 ]
        }, {
          x: 108,
          y: 54,
          point: [ 9 ]
        }, {
          x: 108,
          y: 162,
          point: [ 4 ]
        } ]
      }), _defineProperty(_bubbleData, 5, {
        size: .25,
        pickPosX: 250,
        pickPosY: -324,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 216,
          y: -324,
          point: []
        }, {
          x: 216,
          y: -162,
          point: [ 20 ]
        }, {
          x: 216,
          y: -54,
          point: [ 15 ]
        }, {
          x: 216,
          y: 54,
          point: [ 10 ]
        }, {
          x: 216,
          y: 162,
          point: [ 5 ]
        } ]
      }), _defineProperty(_bubbleData, 6, {
        size: .5,
        pickPosX: -187.5,
        pickPosY: -378,
        pickMoveAnimation: "animation5",
        route: [ {
          x: -162,
          y: -378,
          point: []
        }, {
          x: -162,
          y: -216,
          point: [ 16, 17 ]
        }, {
          x: -162,
          y: -108,
          point: [ 11, 12, 16, 17 ]
        }, {
          x: -162,
          y: 0,
          point: [ 6, 7, 11, 12 ]
        }, {
          x: -162,
          y: 108,
          point: [ 1, 2, 6, 7 ]
        }, {
          x: -162,
          y: 216,
          point: [ 1, 2 ]
        } ]
      }), _defineProperty(_bubbleData, 7, {
        size: .5,
        pickPosX: -62.5,
        pickPosY: -378,
        pickMoveAnimation: "animation4",
        route: [ {
          x: -54,
          y: -378,
          point: []
        }, {
          x: -54,
          y: -216,
          point: [ 17, 18 ]
        }, {
          x: -54,
          y: -108,
          point: [ 12, 13, 17, 18 ]
        }, {
          x: -54,
          y: 0,
          point: [ 7, 8, 12, 13 ]
        }, {
          x: -54,
          y: 108,
          point: [ 2, 3, 7, 8 ]
        }, {
          x: -54,
          y: 216,
          point: [ 2, 3 ]
        } ]
      }), _defineProperty(_bubbleData, 8, {
        size: .5,
        pickPosX: 62.5,
        pickPosY: -378,
        pickMoveAnimation: "animation5",
        route: [ {
          x: 54,
          y: -378,
          point: []
        }, {
          x: 54,
          y: -216,
          point: [ 18, 19 ]
        }, {
          x: 54,
          y: -108,
          point: [ 13, 14, 18, 19 ]
        }, {
          x: 54,
          y: 0,
          point: [ 8, 9, 13, 14 ]
        }, {
          x: 54,
          y: 108,
          point: [ 3, 4, 8, 9 ]
        }, {
          x: 54,
          y: 216,
          point: [ 3, 4 ]
        } ]
      }), _defineProperty(_bubbleData, 9, {
        size: .5,
        pickPosX: 187.5,
        pickPosY: -378,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 162,
          y: -378,
          point: []
        }, {
          x: 162,
          y: -216,
          point: [ 19, 20 ]
        }, {
          x: 162,
          y: -108,
          point: [ 14, 15, 19, 20 ]
        }, {
          x: 162,
          y: 0,
          point: [ 9, 10, 14, 15 ]
        }, {
          x: 162,
          y: 108,
          point: [ 4, 5, 9, 10 ]
        }, {
          x: 162,
          y: 216,
          point: [ 4, 5 ]
        } ]
      }), _defineProperty(_bubbleData, 10, {
        size: .75,
        pickPosX: -125,
        pickPosY: -432,
        pickMoveAnimation: "animation4",
        route: [ {
          x: -108,
          y: -432,
          point: []
        }, {
          x: -108,
          y: -270,
          point: [ 16, 17, 18 ]
        }, {
          x: -108,
          y: -162,
          point: [ 11, 12, 13, 16, 17, 18 ]
        }, {
          x: -108,
          y: -54,
          point: [ 6, 7, 8, 11, 12, 13, 16, 17, 18 ]
        }, {
          x: -108,
          y: 54,
          point: [ 1, 2, 3, 6, 7, 8, 11, 12, 13 ]
        }, {
          x: -108,
          y: 162,
          point: [ 1, 2, 3, 6, 7, 8 ]
        }, {
          x: -108,
          y: 270,
          point: [ 1, 2, 3 ]
        } ]
      }), _defineProperty(_bubbleData, 11, {
        size: .75,
        pickPosX: 0,
        pickPosY: -432,
        pickMoveAnimation: "animation5",
        route: [ {
          x: 0,
          y: -432,
          point: []
        }, {
          x: 0,
          y: -270,
          point: [ 17, 18, 19 ]
        }, {
          x: 0,
          y: -162,
          point: [ 12, 13, 14, 17, 18, 19 ]
        }, {
          x: 0,
          y: -54,
          point: [ 7, 8, 9, 12, 13, 14, 17, 18, 19 ]
        }, {
          x: 0,
          y: 54,
          point: [ 2, 3, 4, 7, 8, 9, 12, 13, 14 ]
        }, {
          x: 0,
          y: 162,
          point: [ 2, 3, 4, 7, 8, 9 ]
        }, {
          x: 0,
          y: 270,
          point: [ 2, 3, 4 ]
        } ]
      }), _defineProperty(_bubbleData, 12, {
        size: .75,
        pickPosX: 125,
        pickPosY: -432,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 108,
          y: -432,
          point: []
        }, {
          x: 108,
          y: -270,
          point: [ 18, 19, 20 ]
        }, {
          x: 108,
          y: -162,
          point: [ 13, 14, 15, 18, 19, 20 ]
        }, {
          x: 108,
          y: -54,
          point: [ 8, 9, 10, 13, 14, 15, 18, 19, 20 ]
        }, {
          x: 108,
          y: 54,
          point: [ 3, 4, 5, 8, 9, 10, 13, 14, 15 ]
        }, {
          x: 108,
          y: 162,
          point: [ 3, 4, 5, 8, 9, 10 ]
        }, {
          x: 108,
          y: 270,
          point: [ 3, 4, 5 ]
        } ]
      }), _defineProperty(_bubbleData, 13, {
        size: 1,
        pickPosX: -62.5,
        pickPosY: -432,
        pickMoveAnimation: "animation5",
        route: [ {
          x: -54,
          y: -486,
          point: []
        }, {
          x: -54,
          y: -324,
          point: [ 16, 17, 18, 19 ]
        }, {
          x: -54,
          y: -216,
          point: [ 11, 12, 13, 14, 16, 17, 18, 19 ]
        }, {
          x: -54,
          y: -108,
          point: [ 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19 ]
        }, {
          x: -54,
          y: 0,
          point: [ 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19 ]
        }, {
          x: -54,
          y: 108,
          point: [ 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14 ]
        }, {
          x: -54,
          y: 216,
          point: [ 1, 2, 3, 4, 6, 7, 8, 9 ]
        }, {
          x: -54,
          y: 324,
          point: [ 1, 2, 3, 4 ]
        } ]
      }), _defineProperty(_bubbleData, 14, {
        size: 1,
        pickPosX: 62.5,
        pickPosY: -432,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 54,
          y: -486,
          point: []
        }, {
          x: 54,
          y: -324,
          point: [ 17, 18, 19, 20 ]
        }, {
          x: 54,
          y: -216,
          point: [ 12, 13, 14, 15, 17, 18, 19, 20 ]
        }, {
          x: 54,
          y: -108,
          point: [ 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20 ]
        }, {
          x: 54,
          y: 0,
          point: [ 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20 ]
        }, {
          x: 54,
          y: 108,
          point: [ 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15 ]
        }, {
          x: 54,
          y: 216,
          point: [ 2, 3, 4, 5, 7, 8, 9, 10 ]
        }, {
          x: 54,
          y: 324,
          point: [ 2, 3, 4, 5 ]
        } ]
      }), _defineProperty(_bubbleData, 15, {
        size: 1.25,
        pickPosX: 0,
        pickPosY: -432,
        pickMoveAnimation: "animation4",
        route: [ {
          x: 0,
          y: -486,
          point: []
        }, {
          x: 0,
          y: -378,
          point: [ 16, 17, 18, 19, 20 ]
        }, {
          x: 0,
          y: -270,
          point: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
        }, {
          x: 0,
          y: -162,
          point: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
        }, {
          x: 0,
          y: -54,
          point: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
        }, {
          x: 0,
          y: 54,
          point: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
        }, {
          x: 0,
          y: 162,
          point: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
        }, {
          x: 0,
          y: 270,
          point: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        }, {
          x: 0,
          y: 378,
          point: [ 1, 2, 3, 4, 5 ]
        } ]
      }), _bubbleData)
    };
    module.exports = bubbleCfg;
    cc._RF.pop();
  }, {} ],
  TheEvil_BubbleControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df9f1In+aZAZa9FoT9RwkNk", "TheEvil_BubbleControl");
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
        pick_bubble_node: {
          default: null,
          type: cc.Node
        },
        items_bubble_node: {
          default: null,
          type: cc.Node
        },
        items_bubble_mask_node: {
          default: null,
          type: cc.Node
        },
        _activeBubbleCmps: [],
        _bubbleTemplate: null,
        _pickIndex: 0,
        _pickData: null,
        _pickBubbleList: [],
        _touchId: null,
        _pickBubbleCnt: 0
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onLoad: function onLoad() {
        this._bubbleTemplate = cc.find("bubble", this.node);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, false, this);
      },
      onRecvGameAction: function onRecvGameAction(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              200 == msg.code;

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      generateBubble: function generateBubble(bubbleData) {
        var _iterator = _createForOfIteratorHelper(bubbleData), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var data = _step.value;
            if (0 == data.preIndex) {
              var bubbleItem = cc.instantiate(this._bubbleTemplate);
              bubbleItem.parent = this.items_bubble_node;
              bubbleItem.active = true;
              var bubbleCmp = bubbleItem.getComponent("TheEvil_Bubble");
              bubbleCmp.bindBubble(data.id, data.preIndex, data.currIndex, data.type, data.coin);
              this._activeBubbleCmps.push(bubbleCmp);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      creatCurrentBubble: function creatCurrentBubble() {
        this.clearCurrentBubble();
        var index = cc.vv.gameData.GetBetIdx() - 1;
        var bubbleInfo = cc.vv.gameData.allBububbleInfo[index];
        this.createBubble(bubbleInfo);
      },
      createBubble: function createBubble(bubbleInfo) {
        if (bubbleInfo && bubbleInfo.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(bubbleInfo), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var data = _step2.value;
              var bubbleItem = cc.instantiate(this._bubbleTemplate);
              bubbleItem.parent = this.items_bubble_node;
              bubbleItem.active = true;
              var bubbleCmp = bubbleItem.getComponent("TheEvil_Bubble");
              bubbleCmp.bindBubble(data.id, data.currIndex, data.nextIndex, data.type, data.coin);
              this._activeBubbleCmps.push(bubbleCmp);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      },
      clearCurrentBubble: function clearCurrentBubble() {
        this._activeBubbleCmps = [];
        this.items_bubble_node.removeAllChildren();
        this.items_bubble_mask_node.removeAllChildren();
      },
      updateActiveBubble: function updateActiveBubble() {
        for (var index = this._activeBubbleCmps.length - 1; index >= 0; index--) this._activeBubbleCmps[index].moveBubble() && this._activeBubbleCmps.splice(index, 1);
      },
      maskAllActiveBubble: function maskAllActiveBubble(isMask) {
        if (isMask) {
          var _iterator3 = _createForOfIteratorHelper(this._activeBubbleCmps), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var cmp = _step3.value;
              cmp.node.parent = this.items_bubble_mask_node;
              cmp.setCoinActive(false);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _iterator4 = _createForOfIteratorHelper(this._activeBubbleCmps), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _cmp = _step4.value;
              _cmp.node.parent = this.items_bubble_node;
              _cmp.setCoinActive(true);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      showWinBubbleAnimation: function showWinBubbleAnimation(pointIdx) {
        for (var j = 0; j < this._activeBubbleCmps.length; j++) {
          var bubble = this._activeBubbleCmps[j];
          bubble.showTriggerAnimation(pointIdx);
        }
      },
      hideAllBubbleAnimation: function hideAllBubbleAnimation() {
        for (var j = 0; j < this._activeBubbleCmps.length; j++) {
          var bubble = this._activeBubbleCmps[j];
          bubble.stopTriggerAnimation();
        }
      },
      stopActiveBubble: function stopActiveBubble() {
        var _iterator5 = _createForOfIteratorHelper(this._activeBubbleCmps), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var cmp = _step5.value;
            cmp.stopBubble();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      },
      generatePickBubble: function generatePickBubble(id, idx) {
        var bubbleItem = cc.instantiate(this._bubbleTemplate);
        bubbleItem.parent = this.pick_bubble_node;
        bubbleItem.active = true;
        var bubbleCmp = bubbleItem.getComponent("TheEvil_Bubble");
        bubbleCmp.creatPickBubble(id, idx);
        this._pickBubbleList.push(bubbleItem);
      },
      launchPickBubble: function launchPickBubble(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var idList, paopaoIndex, id, paopao;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._pickData = data.coinsData;
              _this2._pickIndex = data.pickIndex;
              idList = [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7, 8, 9 ];
              paopaoIndex = 0;
              _this2._pickBubbleList = [];
              _this2._pickBubbleCnt = 0;

             case 6:
              if (!(_this2._pickData.length > 0)) {
                _context2.next = 16;
                break;
              }
              id = idList[parseInt(Math.random() * idList.length)];
              _this2.generatePickBubble(id, paopaoIndex);
              paopaoIndex++;
              _this2._pickBubbleCnt += 1;
              if (cc.vv.gameData.isNeedAutoPlay() && _this2._pickBubbleCnt > 10) {
                _this2._pickBubbleCnt = 0;
                paopao = _this2._pickBubbleList[Global.random(0, _this2._pickBubbleList.length - 1)];
                paopao.emit(cc.Node.EventType.TOUCH_START);
              }
              _context2.next = 14;
              return _this2.awaitTime(.5);

             case 14:
              _context2.next = 6;
              break;

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      deleteBubble: function deleteBubble(item) {
        for (var i = 0; i < this._pickBubbleList.length; i++) {
          var element = this._pickBubbleList[i];
          if (element == item) {
            this._pickBubbleList.splice(i, 1);
            return;
          }
        }
      },
      clickPickBubble: function clickPickBubble() {
        var info = {};
        if (this._pickData.length > 0) {
          this._pickIndex = this._pickIndex + 1;
          var tempData = this._pickData.splice(0, 1);
          info.type = tempData[0].type;
          info.coin = tempData[0].coin;
          info.index = this._pickIndex;
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.uid = Global.playerData.uid;
          req.gameid = cc.vv.gameData.getGameId();
          req.data = {};
          req.data.rtype = 1;
          cc.vv.NetManager.send(req);
          return info;
        }
        return null;
      },
      stopPickBubble: function stopPickBubble() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, element;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              for (i = 0; i < _this3._pickBubbleList.length; i++) {
                element = _this3._pickBubbleList[i];
                element && (element.parent = null);
              }
              _this3._pickBubbleList = [];

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheEvil_Bubble: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58d2131oetF/aa5qVJ/spoy", "TheEvil_Bubble");
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
    var bubbleCfg = require("TheEvil_BubbleCfg");
    cc.Class({
      extends: cc.Component,
      properties: {
        _id: 0,
        _type: 0,
        _cfg: null,
        _moveNode: null,
        _pubbleItems: [],
        _currPosIndex: -1,
        _nextPosIndex: -1,
        _bubbleSpine: null,
        _baozaSpine: null,
        _smallCoinNode: 0,
        _bigCoinNode: 0,
        _coinNum: 0,
        _isKeepMove: true,
        _showTriggerAnimation: false,
        _jackpot: null,
        _index: 0,
        _click: true
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onLoad: function onLoad() {
        this._moveNode = this.node.getChildByName("move_node");
        this._coinNode = this._moveNode.getChildByName("coin");
        this._smallCoinNode = this._coinNode.getChildByName("coin_small");
        this._smallCoinNode.active = false;
        this._bigCoinNode = this._coinNode.getChildByName("coin_big");
        this._bigCoinNode.active = false;
        this._pickCoinNode = this._coinNode.getChildByName("coin_pick");
        this._pickCoinNode.active = false;
        this._pubbleItems = [];
        for (var index = 1; index < 7; index++) {
          var item = this._moveNode.getChildByName("bubble_" + index);
          item.active = false;
          item.setPosition(cc.v2(0, 0));
          this._pubbleItems.push(item);
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this);
      },
      bindBubble: function bindBubble(id, posIndex, nextIndex, type, coin) {
        this._id = id;
        this._type = type;
        this._cfg = bubbleCfg.bubbleData[id];
        this._currPosIndex = posIndex;
        this.node.active = true;
        this._click = true;
        this._pubbleItems[this._type].active = true;
        this._bubbleSpine = this._pubbleItems[this._type].getChildByName("bubble_spine");
        this._bubbleSpine.active = true;
        this._baozaSpine = this._pubbleItems[this._type].getChildByName("baoza_spine");
        this._baozaSpine.active = false;
        this._jackpot = this._pubbleItems[this._type].getChildByName("jackpot");
        this._jackpot && (this._jackpot.active = true);
        this.node.setScale(this._cfg.size);
        this.node.setPosition(new cc.v2(this._cfg.route[this._currPosIndex].x, this._cfg.route[this._currPosIndex].y));
        nextIndex > 0 ? nextIndex < this._cfg.route.length ? this._nextPosIndex = nextIndex : this._nextPosIndex = -1 : this._currPosIndex + 1 < this._cfg.route.length ? this._nextPosIndex = this._currPosIndex + 1 : this._nextPosIndex = -1;
        if (0 == this._type) {
          var mult = Math.floor(coin / cc.vv.gameData.GetTotalBet());
          this._coinNum = coin;
          if (mult < 10) {
            this._bigCoinNode.active = false;
            this._smallCoinNode.active = true;
            this._smallCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1, null, 1e3);
          } else {
            this._smallCoinNode.active = false;
            this._bigCoinNode.active = true;
            this._bigCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1, null, 1e3);
          }
        }
      },
      moveBubble: function moveBubble() {
        var _this2 = this;
        this._coinNode.active = true;
        if (this._nextPosIndex >= 0) {
          this._currPosIndex = this._nextPosIndex;
          var movePosition = cc.v2(this._cfg.route[this._nextPosIndex].x, this._cfg.route[this._nextPosIndex].y);
          this.node.runAction(cc.sequence(cc.moveTo(2, movePosition), cc.callFunc(function() {
            _this2._moveNode.stopAllActions();
            _this2._moveNode.setPosition(cc.v2(0, 0));
            _this2._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
          })));
          this._moveNode.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(-50, 0)), cc.moveBy(1, cc.v2(100, 0)), cc.moveBy(.5, cc.v2(-50, 0)))));
          var animationName = this._id % 2 == 0 ? "animation4" : "animation5";
          this._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, animationName, true);
          this._currPosIndex + 1 < this._cfg.route.length ? this._nextPosIndex = this._currPosIndex + 1 : this._nextPosIndex = -1;
          this._isKeepMove = true;
          return false;
        }
        var moveEndPosition = cc.v2(this._cfg.route[0].x, 600);
        var posMoveSpace = this.node.parent.convertToWorldSpaceAR(moveEndPosition);
        this.node.runAction(cc.spawn(cc.moveTo(5, moveEndPosition), cc.sequence(cc.delayTime(2.8), cc.callFunc(function() {
          Global.TheEvilGameControl.collectBonusControl.shotBubble(posMoveSpace, 1.2);
        }), cc.delayTime(2.2), cc.callFunc(function() {
          _this2.playbrokenBubble();
        }))));
        this._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, "animation3", true);
        this._isKeepMove = false;
        return true;
      },
      stopBubble: function stopBubble() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var movePosition;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this3._isKeepMove) {
                movePosition = cc.v2(_this3._cfg.route[_this3._currPosIndex].x, _this3._cfg.route[_this3._currPosIndex].y);
                _this3.node.stopAllActions();
                _this3._moveNode.stopAllActions();
                _this3._moveNode.setPosition(cc.v2(0, 0));
                _this3._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                _this3.node.setPosition(movePosition);
              }

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playbrokenBubble: function playbrokenBubble() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var animationName;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this4._bubbleSpine.active = false;
              _this4._smallCoinNode.active = false;
              _this4._bigCoinNode.active = false;
              _this4._baozaSpine.active = true;
              _this4._jackpot && (_this4._jackpot.active = false);
              animationName = 5 == _this4._type ? "animation1" : "animation";
              _this4._baozaSpine.getComponent(sp.Skeleton).setAnimation(0, animationName, false);
              _this4._baozaSpine.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this4.node.removeFromParent();
                _this4.node.destroy();
              });

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playActiveBubble: function playActiveBubble() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this5._coinNode.active = false;
              _this5._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      setCoinActive: function setCoinActive(isActive) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this6._coinNode.active = isActive;

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      creatPickBubble: function creatPickBubble(id, idx) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var movePosition;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this7._id = id;
              _this7._index = idx || 0;
              _this7._type = 0;
              _this7._cfg = bubbleCfg.bubbleData[id];
              _this7.node.active = true;
              _this7._click = false;
              _this7._pubbleItems[_this7._type].active = true;
              _this7._bubbleSpine = _this7._pubbleItems[_this7._type].getChildByName("bubble_spine");
              _this7._bubbleSpine.active = true;
              _this7._baozaSpine = _this7._pubbleItems[_this7._type].getChildByName("baoza_spine");
              _this7._baozaSpine.active = false;
              _this7.node.setScale(_this7._cfg.size);
              _this7.node.setPosition(new cc.v2(_this7._cfg.pickPosX, -cc.winSize.height / 2));
              _this7._bubbleSpine.getComponent(sp.Skeleton).setAnimation(0, _this7._cfg.pickMoveAnimation, true);
              movePosition = cc.v2(_this7._cfg.pickPosX, 1300);
              _this7.node.runAction(cc.sequence(cc.moveTo(10, movePosition), cc.callFunc(function() {
                Global.TheEvilGameControl.bubbleControl.deleteBubble(_this7.node);
                _this7.node.removeFromParent();
                _this7.node.destroy();
              })));

             case 16:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      onClick: function onClick() {
        var _this8 = this;
        Global.TheEvilGameControl.bubbleControl._pickBubbleCnt = 0;
        this.node.stopAllActions();
        this._bubbleSpine.active = false;
        this._baozaSpine.active = true;
        this._baozaSpine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        var pickInfo = Global.TheEvilGameControl.bubbleControl.clickPickBubble();
        if (pickInfo) {
          Global.TheEvilGameControl.bubbleControl.deleteBubble(this.node);
          if (0 == pickInfo.type) {
            19 == pickInfo.index ? Global.TheEvilGameControl.pickGameControl.updateTips(3, pickInfo.index) : Global.TheEvilGameControl.pickGameControl.updateTips(2, pickInfo.index);
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_reveal);
            this._pickCoinNode.active = true;
            this._pickCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(pickInfo.coin, 1e3, 1, null, 1e3);
            this._baozaSpine.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
              var startPos = _this8.node.getPosition();
              var bezier = [ cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(0, -cc.winSize.height / 2 + 180) ];
              _this8.node.runAction(cc.bezierTo(.5, bezier));
              _this8._pickCoinNode.runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                var currentCoin = cc.vv.gameData.GetBottomScript().getCurrentWin();
                cc.vv.gameData.GetBottomScript().ShowWin(currentCoin + pickInfo.coin, .8, null, null);
                _this8.node.removeFromParent();
                _this8.node.destroy();
              })));
            })));
          } else if (1 == pickInfo.type) {
            Global.TheEvilGameControl.pickGameControl.updateTips(4, pickInfo.index);
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_reveal);
            this._pickCoinNode.active = true;
            this._pickCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(pickInfo.coin, 1e3, 1, null, 1e3);
            Global.TheEvilGameControl.bubbleControl.stopPickBubble();
            this._baozaSpine.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
              var startPos = _this8.node.getPosition();
              var bezier = [ cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(0, -cc.winSize.height / 2 + 180) ];
              _this8.node.runAction(cc.bezierTo(.5, bezier));
              _this8._pickCoinNode.runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                var currentCoin = cc.vv.gameData.GetBottomScript().getCurrentWin();
                cc.vv.gameData.GetBottomScript().ShowWin(currentCoin + pickInfo.coin, .8, null, null);
                _this8.node.removeFromParent();
                _this8.node.destroy();
                Global.TheEvilGameControl.pickGameControl.showEndGame();
              })));
            })));
          } else if (2 == pickInfo.type) {
            var posStartWorld = this.node.convertToWorldSpaceAR(cc.v2(0));
            Global.TheEvilGameControl.pickGameControl.updateTips(4, pickInfo.index);
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_scatter);
            Global.TheEvilGameControl.bubbleControl.stopPickBubble();
            Global.TheEvilGameControl.pickGameControl.showEmoCoin(posStartWorld, pickInfo.coin);
            this.scheduleOnce(function() {
              _this8.node.removeFromParent();
            }, .3);
          }
        }
      },
      showTriggerAnimation: function showTriggerAnimation(pointIdx) {
        if (this._showTriggerAnimation) return;
        var pos = this.node.position;
        for (var i = 0; i < this._cfg.route.length; i++) {
          var route = this._cfg.route[i];
          if (route.x === pos.x && route.y === pos.y) {
            if (-1 !== route.point.indexOf(pointIdx)) {
              this._showTriggerAnimation = true;
              cc.tween(this.node).repeatForever(cc.tween(this.node).to(.3, {
                scale: 1.2 * this._cfg.size
              }, {
                easing: "backOut"
              }).to(.2, {
                scale: this._cfg.size
              })).start();
              if (this._type > 0) {
                var slots = cc.vv.gameData.GetSlotsScript();
                slots.ShowJackpotEffect(true);
              }
            }
            break;
          }
        }
      },
      stopTriggerAnimation: function stopTriggerAnimation() {
        this.node.stopAllActions();
        this.node.setScale(this._cfg.size);
        this._showTriggerAnimation = false;
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.ShowJackpotEffect(false);
      },
      onEventStart: function onEventStart(event) {
        if (this._click) return;
        this._click = true;
        this.onClick();
      }
    });
    cc._RF.pop();
  }, {
    TheEvil_BubbleCfg: "TheEvil_BubbleCfg"
  } ],
  TheEvil_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76c38o+71dAarGz88CV3b41", "TheEvil_Cfg");
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
        idle_ani: {
          name: "animation2",
          zIndex: 100
        },
        trigger_bubble: {
          name: "animation3",
          zIndex: 400
        },
        trigger_bubble_idle: {
          name: "animation4",
          zIndex: 400
        },
        disappear_ani: {
          name: "animation5",
          zIndex: 200
        },
        coin: "coin"
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation3",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 400
        },
        disappear_ani: {
          name: "",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        idle_ani: {
          name: "",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 400
        },
        disappear_ani: {
          name: "",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "TheEvil_Top",
        Bottom: "TheEvil_Bottom",
        Slots: "TheEvil_Slots",
        Reels: "TheEvil_Reel",
        Symbols: "TheEvil_Symbol",
        Sound: "TheEvil_Sound"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 118,
        height: 118
      },
      AddAntiTime: 2,
      randomSymbols: [ 2, 3, 4, 5, 6, 7, 8, 9 ],
      kuang: "kuang",
      normalBgm: "base_bgm",
      helpItems: [ "games/TheEvil/prefab/LMSlots_Help_item1", "games/TheEvil/prefab/LMSlots_Help_item2", "games/TheEvil/prefab/LMSlots_Help_item3", "games/TheEvil/prefab/LMSlots_Help_item4", "games/TheEvil/prefab/LMSlots_Help_item5", "games/TheEvil/prefab/LMSlots_Help_item6", "games/TheEvil/prefab/LMSlots_Help_item7" ],
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      commEffect: {
        path: "games/TheEvil/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 1 ],
        mini: 15,
        counts: [ 1, 1, 1, 1, 1, 15 ],
        path: "games/TheEvil/",
        reelStopSound: "reel_stop",
        symbolStopSound: "star_landing"
      }, {
        id: [ 11 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_bg",
        path: "games/TheEvil/",
        reelStopSound: "reel_stop",
        symbolStopSound: "anticipation2_1",
        antSound: "anticipation2_2",
        antSpeed: 1800,
        isKeepShow: true
      }, {
        id: [ 10 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheEvil/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter1_landing",
        antSound: "anticipation1_2",
        antSpeed: 1800
      } ],
      sysFloatOffsetPos: cc.v2(0, 20)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheEvil_CollectBonusControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "feb87sYvodM7oaD45qkaQ5D", "TheEvil_CollectBonusControl");
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
        particleNode: {
          default: null,
          type: cc.Node
        },
        _gameUI: null,
        _xiaoEmo: null,
        _logo: null,
        _collectAni: null,
        _itemNode: null,
        _itemList: [],
        _superText: null,
        _clickButton: null,
        _mask: null,
        _collectData: null,
        _particleList: [],
        _particleShotBubbleList: []
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onLoad: function onLoad() {
        var _this2 = this;
        this._xiaoEmo = cc.find("Canvas/safe_node/character");
        this._s_fireNode = cc.find("fire_node", this._xiaoEmo);
        this._gameUI = cc.find("Game_UI", this.node);
        this._logo = cc.find("Game_UI/logo", this.node);
        this._collectAni = cc.find("Game_UI/collect_ani", this.node);
        this._itemNode = cc.find("Game_UI/item_node", this.node);
        this._superText = cc.find("Game_UI/item_node/super_text", this.node);
        this._clickButton = cc.find("Game_UI/button", this.node);
        this._mask = cc.find("Game_UI/mask", this.node);
        this._particleShotBubbleList = [];
        this._particleList = [];
        for (var idx = 1; idx < 6; idx++) {
          var item = cc.find("particle_" + idx, this.particleNode);
          item.active = false;
          this._particleList.push(item);
        }
        for (var i = 1; i < 5; i++) {
          var _item = cc.find("Game_UI/logo/sadantx_" + i, this.node);
          _item.active = false;
          this._particleShotBubbleList.push(_item);
        }
        for (var index = 1; index < 11; index++) {
          var _item2 = cc.find("item_" + index, this._itemNode);
          _item2.getChildByName("icon").active = false;
          this._itemList.push(_item2);
        }
        this._clickButton.on("click", function() {
          if ("idle" != cc.vv.gameData.GetSlotState()) return;
          if (cc.vv.gameData.GetAutoModelTime() > 0) return;
          if (cc.vv.gameData.getNeedBet() <= cc.vv.gameData._deskInfo.mults.length) {
            var bottom = cc.vv.gameData.GetBottomScript();
            bottom.SetBetIdx(cc.vv.gameData.getNeedBet());
            _this2.updataCollectState();
          }
        });
      },
      initData: function initData() {
        this._collectData = cc.vv.gameData.collectData;
        for (var index = 0; index < this._collectData.num; index++) this._itemList[index].getChildByName("icon").active = true;
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= cc.vv.gameData.getNeedBet()) {
          this._isLock = false;
          this.playMaskAnimation(1);
        } else {
          this._isLock = true;
          this.playMaskAnimation(3);
        }
      },
      showFreeGameCollect: function showFreeGameCollect(isShow) {
        if (isShow) this._isLock ? this.playMaskAnimation(3) : this.playMaskAnimation(4); else {
          this._collectData.num == this._collectData.max && this.reSetCollect();
          if (this._isLock) this.playMaskAnimation(3); else {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
            this.playMaskAnimation(1);
          }
        }
      },
      reSetCollect: function reSetCollect() {
        for (var index = 0; index < 10; index++) this._itemList[index].getChildByName("icon").active = false;
        this._collectData.num = 0;
      },
      isSuperBonus: function isSuperBonus() {
        return this._collectData.num == this._collectData.max;
      },
      activeBonus: function activeBonus() {
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= cc.vv.gameData.getNeedBet()) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.symbol_collect);
          this._collectData.num = this._collectData.num + 1;
          this._itemList[this._collectData.num - 1].getChildByName("icon").active = true;
          if (this._collectData.num == this._collectData.max) {
            this._itemList[this._collectData.num - 1].getChildByName("icon").getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
            this._itemList[this._collectData.num - 1].getChildByName("icon").getComponent(sp.Skeleton).setAnimation(0, "animation2_2", true);
            this._superText.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            this._superText.getComponent(sp.Skeleton).addAnimation(0, "animation1", true);
          } else {
            this._itemList[this._collectData.num - 1].getChildByName("icon").getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
            this._itemList[this._collectData.num - 1].getChildByName("icon").getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          }
        }
      },
      flyParticle: function flyParticle(node) {
        var _this3 = this;
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= cc.vv.gameData.getNeedBet()) {
          var wordPos = node.convertToWorldSpaceAR(cc.v2(0));
          var endPos = this._itemList[this._collectData.num].position;
          var _iterator = _createForOfIteratorHelper(this._particleList), _step;
          try {
            var _loop = function _loop() {
              var par = _step.value;
              if (false == par.active) {
                par.active = true;
                par.position = _this3.particleNode.convertToNodeSpaceAR(wordPos);
                par.runAction(cc.sequence(cc.moveTo(1, endPos), cc.callFunc(function() {
                  par.active = false;
                })));
                return "break";
              }
            };
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _ret = _loop();
              if ("break" === _ret) break;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      updataCollectState: function updataCollectState() {
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= cc.vv.gameData.getNeedBet()) {
          if (this._isLock) {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
            this.playMaskAnimation(1);
          }
        } else if (!this._isLock) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.lock);
          this.playMaskAnimation(2);
        }
      },
      playMaskAnimation: function playMaskAnimation(type) {
        var spCollect = this._collectAni.getComponent(sp.Skeleton);
        this._collectAni.active = true;
        if (1 == type) {
          cc.tween(this._superText).to(1, {
            opacity: 255
          }).start();
          spCollect.setAnimation(0, "animation1", false);
          this._isLock = false;
          this._clickButton.getComponent(cc.Button).interactable = false;
        } else if (2 == type) {
          spCollect.setAnimation(0, "animation2", false);
          spCollect.addAnimation(0, "animation3", true);
          cc.tween(this._superText).to(.5, {
            opacity: 0
          }).start();
          this._isLock = true;
          this._clickButton.getComponent(cc.Button).interactable = true;
        } else if (3 == type) {
          spCollect.setAnimation(0, "animation3", true);
          cc.tween(this._superText).to(0, {
            opacity: 0
          }).start();
          this._isLock = true;
          this._clickButton.getComponent(cc.Button).interactable = true;
        } else if (4 == type) {
          spCollect.setAnimation(0, "animation4", true);
          cc.tween(this._superText).to(0, {
            opacity: 0
          }).start();
          this._clickButton.getComponent(cc.Button).interactable = false;
        }
      },
      setMask: function setMask(active) {
        this._mask.active = active;
      },
      shotBubble: function shotBubble(posMoveWorld, time) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var animation, posMoveSpace, _iterator2, _step2, _loop2, _ret2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              animation = _this4._xiaoEmo.getComponent(sp.Skeleton);
              animation.setAnimation(0, "skill02", false);
              animation.setCompleteListener(function() {
                animation.setAnimation(0, "idle", false);
              });
              posMoveSpace = _this4._logo.convertToNodeSpaceAR(posMoveWorld);
              _context.next = 6;
              return _this4.awaitTime(time);

             case 6:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_boom);
              _iterator2 = _createForOfIteratorHelper(_this4._particleShotBubbleList);
              _context.prev = 8;
              _loop2 = function _loop2() {
                var par = _step2.value;
                if (false == par.active) {
                  par.active = true;
                  var sPos = par.parent.convertToNodeSpaceAR(_this4._s_fireNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                  par.setPosition(sPos);
                  var v = cc.v2(posMoveSpace.x, posMoveSpace.y).sub(cc.v2(sPos.x, sPos.y));
                  var length = v.mag();
                  var angle = v.signAngle(cc.v2(1, 0));
                  par.angle = -angle * cc.macro.DEG + 90;
                  par.scale = length / 550;
                  par.getComponent(sp.Skeleton).setAnimation(0, "skill02", false);
                  par.getComponent(sp.Skeleton).setCompleteListener(function() {
                    par.active = false;
                  });
                  return "break";
                }
              };
              _iterator2.s();

             case 11:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 17;
                break;
              }
              _ret2 = _loop2();
              if (!("break" === _ret2)) {
                _context.next = 15;
                break;
              }
              return _context.abrupt("break", 17);

             case 15:
              _context.next = 11;
              break;

             case 17:
              _context.next = 22;
              break;

             case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](8);
              _iterator2.e(_context.t0);

             case 22:
              _context.prev = 22;
              _iterator2.f();
              return _context.finish(22);

             case 25:
             case "end":
              return _context.stop();
            }
          }, _callee, null, [ [ 8, 19, 22, 25 ] ]);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheEvil_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "252dbf5fkdCeq4IJjQCwFlp", "TheEvil_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _isBonusGame: false,
        _isFreeGame: false,
        pickInfo: [],
        isFreeState: false,
        allBububbleInfo: [],
        currBububbleInfo: [],
        collectData: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._isFreeGame = this._deskInfo.restFreeCount > 0;
        this.pickInfo = this._deskInfo.pickInfo;
        this.allBububbleInfo = this._deskInfo.allBububbleInfo;
        this.currBububbleInfo = this._deskInfo.bubbleInfo;
        this.collectData = this._deskInfo.collectData;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.pickInfo = msg.pickInfo;
          this.isFreeState = msg.freeResult.isFreeState;
          this.allBububbleInfo = msg.allBububbleInfo;
          this.currBububbleInfo = msg.bubbleInfo;
        }
        this._super(msg);
      },
      setIsBonusGame: function setIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      setIsFreeGame: function setIsFreeGame(isFreeGame) {
        this._isFreeGame = isFreeGame;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheEvil_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20f89k7dp1Ln7/D9jRbG/qT", "TheEvil_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        popupUIControl: {
          default: null,
          visible: false
        },
        bubbleControl: {
          default: null,
          visible: false
        },
        pickGameControl: {
          default: null,
          visible: false
        },
        collectBonusControl: {
          default: null,
          visible: false
        }
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        this.popupUIControl = cc.find("Canvas/safe_node/Popup_UI").getComponent("TheEvil_PopupUIControl");
        this.bubbleControl = cc.find("Canvas/safe_node/Bubble_Control").getComponent("TheEvil_BubbleControl");
        this.pickGameControl = cc.find("Canvas/safe_node/Pick_Game_UI").getComponent("TheEvil_PickGameControl");
        this.collectBonusControl = cc.find("Canvas/safe_node/Collect_Bonus_UI").getComponent("TheEvil_CollectBonusControl");
        Global.TheEvilGameControl = this;
      },
      onDestroy: function onDestroy() {
        Global.TheEvilGameControl = null;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheEvil_PickGameControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ddcfh7vxhPzojuRVpJytnR", "TheEvil_PickGameControl");
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
        _gameUI: null,
        _pickKuang: null,
        _xiaoemo: null,
        _xiaoemoCoin: null,
        _coinLable: null,
        _suziLable: null,
        _textArr: [],
        _exitCallBack: null,
        _pickData: null,
        _bonusWinCoin: 0,
        _activeTips: null,
        _tipText: null
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onLoad: function onLoad() {
        this._gameUI = cc.find("Game_UI", this.node);
        this._gameUI.active = false;
        this._pickKuang = cc.find("Game_UI/pick_kuang", this.node);
        this._xiaoemo = cc.find("Game_UI/xiaoemo_node/xiaoemo", this.node);
        this._xiaoemoCoin = cc.find("Game_UI/xiaoemo_coin", this.node);
        this._coinLable = cc.find("Game_UI/xiaoemo_coin/coin", this.node);
        this._suziLable = cc.find("Game_UI/pick_kuang/text_2/suzi", this.node);
        for (var index = 1; index < 5; index++) {
          var tempText = this._pickKuang.getChildByName("text_" + index);
          this._textArr.push(tempText);
        }
        this._tipText = cc.find("pick_a_bubble_text", this._gameUI);
      },
      initData: function initData(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._pickData = data;
              _this2._bonusWinCoin = _this2._pickData.totaolWinCoin;
              _this2._xiaoemoCoin.active = false;
              _this2._coinLable.active = false;
              _this2._xiaoemo.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              _this2.updateTips(1, _this2._pickData.pickIndex);
              _context.next = 8;
              return _this2.awaitTime(1);

             case 8:
              Global.TheEvilGameControl.bubbleControl.launchPickBubble(_this2._pickData);

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showEmoCoin: function showEmoCoin(startWorldNode, coin) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var posStartSpace, startPos, bezier, currentCoin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              posStartSpace = _this3._gameUI.convertToNodeSpaceAR(startWorldNode);
              _this3._xiaoemoCoin.active = true;
              _this3._xiaoemoCoin.setPosition(posStartSpace);
              _this3._xiaoemoCoin.setScale(.3);
              _this3._xiaoemoCoin.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              _context2.next = 7;
              return _this3.awaitTime(.8);

             case 7:
              _this3._xiaoemoCoin.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              _this3._xiaoemoCoin.runAction(cc.spawn(cc.moveTo(.5, cc.v2(0, 100)), cc.scaleTo(1, 1)));
              _this3._xiaoemo.getComponent(sp.Skeleton).setAnimation(0, "skill02", false);
              _context2.next = 12;
              return new Promise(function(sucess, failed) {
                _this3._xiaoemo.getComponent(sp.Skeleton).setCompleteListener(function() {
                  sucess();
                  _this3._xiaoemo.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                });
              });

             case 12:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.scatter_reveal);
              _this3._xiaoemoCoin.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
              _context2.next = 16;
              return _this3.awaitTime(.8);

             case 16:
              _this3._coinLable.active = true;
              _this3._coinLable.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1, null, 1e3);
              _this3._xiaoemoCoin.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
              _context2.next = 21;
              return _this3.awaitTime(.2);

             case 21:
              startPos = _this3._xiaoemoCoin.getPosition();
              bezier = [ cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(startPos.x / 2, startPos.y + 100), cc.v2(0, -cc.winSize.height / 2 + 180) ];
              _this3._xiaoemoCoin.runAction(cc.spawn(cc.bezierTo(.5, bezier), cc.scaleTo(.5, 0).easing(cc.easeBackIn())));
              _context2.next = 26;
              return _this3.awaitTime(.5);

             case 26:
              currentCoin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              cc.vv.gameData.GetBottomScript().ShowWin(currentCoin + coin, .8, null, null);
              _context2.next = 30;
              return _this3.awaitTime(.5);

             case 30:
              _context2.next = 32;
              return Global.TheEvilGameControl.popupUIControl.showPickGameWinner(cc.vv.gameData.GetBottomScript().getCurrentWin());

             case 32:
              Global.TheEvilGameControl.popupUIControl.playEmoAnimation();
              _context2.next = 35;
              return _this3.awaitTime(2);

             case 35:
              _this3.exitGame();

             case 36:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showEndGame: function showEndGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return _this4.awaitTime(.5);

             case 2:
              _context3.next = 4;
              return Global.TheEvilGameControl.popupUIControl.showPickGameWinner(cc.vv.gameData.GetBottomScript().getCurrentWin());

             case 4:
              Global.TheEvilGameControl.popupUIControl.playEmoAnimation();
              _context3.next = 7;
              return _this4.awaitTime(2);

             case 7:
              _this4.exitGame();

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      updateTips: function updateTips(type, index) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var _iterator, _step, text;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _iterator = _createForOfIteratorHelper(_this5._textArr);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  text = _step.value;
                  text.active = false;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (1 == type) {
                _this5._textArr[0].active = true;
                _this5._pickKuang.setScale(.1);
                _this5._pickKuang.runAction(cc.sequence(cc.scaleTo(.3, 1), cc.delayTime(1.5), cc.scaleTo(.3, .1), cc.callFunc(function() {
                  _this5._textArr[0].active = false;
                  _this5._textArr[1].active = true;
                  _this5._activeTips = _this5._textArr[1];
                  _this5._suziLable.getComponent(cc.Label).string = 20 - index;
                }), cc.scaleTo(.3, 1)));
              } else if (2 == type) {
                _this5._textArr[1].active = true;
                _this5._activeTips = _this5._textArr[1];
                _this5._suziLable.getComponent(cc.Label).string = 20 - index;
              } else if (3 == type) {
                _this5._pickKuang.setScale(1);
                _this5._pickKuang.stopAllActions();
                _this5._pickKuang.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
                  _this5._textArr[1].active = false;
                  _this5._activeTips.active = false;
                  _this5._textArr[2].active = true;
                  _this5._activeTips = _this5._textArr[2];
                }), cc.scaleTo(.3, 1)));
              } else if (4 == type) {
                _this5._pickKuang.setScale(1);
                _this5._pickKuang.stopAllActions();
                _this5._pickKuang.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
                  _this5._textArr[3].active = true;
                  _this5._activeTips.active = false;
                  _this5._textArr[3].active = true;
                  _this5._activeTips = _this5._textArr[3];
                }), cc.scaleTo(.3, 1), cc.delayTime(1.5), cc.scaleTo(.3, 0)));
                _this5._tipText.active = false;
              }

             case 3:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getBonusWinCoin: function getBonusWinCoin() {
        return this._bonusWinCoin;
      },
      exitGame: function exitGame() {
        cc.vv.gameData.isFreeGame() ? Global.TheEvilGameControl.collectBonusControl.isSuperBonus() ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.super_bgm) : Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm) : Global.SlotsSoundMgr.playNormalBgm(true);
        this._gameUI.active = false;
        this._exitCallBack && this._exitCallBack();
      },
      enterGame: function enterGame(data, exitCallBack) {
        Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.pick_bgm);
        this._exitCallBack = exitCallBack;
        this._gameUI.active = true;
        this.initData(data);
        this._tipText.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  TheEvil_PopupUIControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b07cyRESRIe7F47H0GlxPt", "TheEvil_PopupUIControl");
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
        _showResultSpine: null,
        _popup: null,
        _transitionSpine1: null,
        _transitionSpine2: null
      },
      onLoad: function onLoad() {
        this._popup = cc.find("popup", this.node);
        this._popup.active = false;
        this._transitionSpine1 = cc.find("transition1", this.node);
        this._transitionSpine1.active = false;
        this._transitionSpine2 = cc.find("transition2", this.node);
        this._transitionSpine2.active = false;
        this._qipaomaochu = cc.find("qipaomaochu", this.node);
        this._qipaomaochu.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showPickGameTimes: function showPickGameTimes() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var show_popup, text1, text2, text3, text4, startBtn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_start_show);
                _this2._popup.active = true;
                show_popup = _this2._popup.getChildByName("show_pick_games_time");
                show_popup.active = true;
                show_popup.setScale(.1);
                show_popup.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                text1 = show_popup.getChildByName("text1");
                text1.setScale(0);
                text2 = show_popup.getChildByName("text2");
                text2.setScale(0);
                text3 = show_popup.getChildByName("text3");
                text3.setScale(0);
                text4 = show_popup.getChildByName("text4");
                text4.setScale(0);
                startBtn = show_popup.getChildByName("start");
                startBtn.setScale(0);
                _context.next = 18;
                return _this2.awaitTime(.2);

               case 18:
                text1.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                text2.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                text3.runAction(cc.scaleTo(1.1, 1).easing(cc.easeBackOut()));
                text4.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                startBtn.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                _context.next = 25;
                return _this2.awaitTime(.6);

               case 25:
                self = _this2;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                  startBtn.off("click");
                  show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                    self._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  })));
                };
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.on("click", function() {
                  startBtn.stopAllActions();
                  clickFunc();
                });

               case 29:
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
      showPickGameWinner: function showPickGameWinner(num) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var show_popup, text1, text2, textBg, startBtn, coinLable, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_end_show);
                _this3._popup.active = true;
                show_popup = _this3._popup.getChildByName("show_pick_games_winner");
                show_popup.active = true;
                show_popup.setScale(.1);
                show_popup.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                text1 = show_popup.getChildByName("text1");
                text1.setScale(0);
                text2 = show_popup.getChildByName("text2");
                text2.setScale(0);
                textBg = show_popup.getChildByName("text_bg");
                textBg.setScale(0);
                startBtn = show_popup.getChildByName("start");
                startBtn.setScale(0);
                coinLable = textBg.getChildByName("coin");
                coinLable.getComponent(cc.Label).string = "";
                _context2.next = 18;
                return _this3.awaitTime(.2);

               case 18:
                text1.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                text2.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                textBg.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                startBtn.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                Global.doRoallNumEff(coinLable, 0, num, 2, null, null, 0, true);
                _context2.next = 25;
                return _this3.awaitTime(.6);

               case 25:
                self = _this3;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                  startBtn.off("click");
                  show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                    self._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  })));
                };
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.on("click", function() {
                  startBtn.stopAllActions();
                  clickFunc();
                });

               case 29:
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
      showFreeGameTimes: function showFreeGameTimes(num) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var show_popup, text1, text2, text3, text4, startBtn, dapaopao, emo, lizixiaoguo, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                      _this4._popup.active = true;
                      show_popup = _this4._popup.getChildByName("show_free_games_time");
                      show_popup.active = true;
                      text1 = show_popup.getChildByName("text1");
                      text1.setScale(0);
                      text2 = show_popup.getChildByName("text2");
                      text2.getComponent(cc.Label).string = "" + num;
                      text2.setScale(0);
                      text3 = show_popup.getChildByName("text3");
                      text3.setScale(0);
                      text4 = show_popup.getChildByName("text4");
                      text4.setScale(0);
                      startBtn = show_popup.getChildByName("start");
                      startBtn.setScale(0);
                      dapaopao = show_popup.getChildByName("dapaopao");
                      dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                      dapaopao.getComponent(sp.Skeleton).setCompleteListener(function() {
                        dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                      });
                      emo = show_popup.getChildByName("emo");
                      emo.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                      emo.getComponent(sp.Skeleton).setCompleteListener(function() {
                        emo.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                      });
                      emo.setPosition(cc.v2(0, -300));
                      emo.runAction(cc.moveTo(.5, cc.v2(0, 175)).easing(cc.easeBackOut()));
                      _context3.next = 25;
                      return _this4.awaitTime(.5);

                     case 25:
                      lizixiaoguo = show_popup.getChildByName("freeshuzi");
                      lizixiaoguo.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      text1.runAction(cc.scaleTo(.4, 1).easing(cc.easeBackOut()));
                      text2.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                      text3.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      text4.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      startBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      _context3.next = 34;
                      return _this4.awaitTime(.5);

                     case 34:
                      self = _this4;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        startBtn.off("click");
                        self._popup.active = false;
                        show_popup.active = false;
                        sucess();
                      };
                      cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                      startBtn.on("click", function() {
                        startBtn.stopAllActions();
                        clickFunc();
                      });

                     case 38:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x5, _x6) {
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
      showAddFreeGameTimes: function showAddFreeGameTimes(num) {
        var _this5 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var show_popup, text1, text2, text3, dapaopao, emo, lizixiaoguo;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this5._popup.active = true;
                show_popup = _this5._popup.getChildByName("show_add_free_games_time");
                show_popup.active = true;
                show_popup.setScale(1);
                text1 = show_popup.getChildByName("text1");
                text1.setScale(0);
                text2 = show_popup.getChildByName("text2");
                text2.getComponent(cc.Label).string = "" + num;
                text2.setScale(0);
                text3 = show_popup.getChildByName("text3");
                text3.setScale(0);
                dapaopao = show_popup.getChildByName("dapaopao");
                dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                dapaopao.getComponent(sp.Skeleton).setCompleteListener(function() {
                  dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                });
                emo = show_popup.getChildByName("emo");
                emo.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                emo.getComponent(sp.Skeleton).setCompleteListener(function() {
                  emo.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                });
                emo.setPosition(cc.v2(0, -300));
                emo.runAction(cc.moveTo(.5, cc.v2(0, 175)).easing(cc.easeBackOut()));
                _context5.next = 22;
                return _this5.awaitTime(.5);

               case 22:
                lizixiaoguo = show_popup.getChildByName("freeshuzi");
                lizixiaoguo.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                text1.runAction(cc.scaleTo(.4, 1).easing(cc.easeBackOut()));
                text2.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                text3.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                _context5.next = 29;
                return _this5.awaitTime(.8);

               case 29:
                show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                  _this5._popup.active = false;
                  show_popup.active = false;
                  sucess();
                })));

               case 30:
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
      showFreeGameWinner: function showFreeGameWinner(num) {
        var _this6 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var show_popup, text1, text2, textBg, startBtn, coinLable, dapaopao, emo, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this6._popup.active = true;
                show_popup = _this6._popup.getChildByName("show_free_games_winner");
                show_popup.active = true;
                show_popup.setScale(1);
                text1 = show_popup.getChildByName("text1");
                text1.setScale(0);
                text2 = show_popup.getChildByName("text2");
                text2.setScale(0);
                textBg = show_popup.getChildByName("text_bg");
                textBg.setScale(0);
                startBtn = show_popup.getChildByName("start");
                startBtn.setScale(0);
                coinLable = textBg.getChildByName("coin");
                coinLable.getComponent(cc.Label).string = "";
                dapaopao = show_popup.getChildByName("dapaopao");
                dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                dapaopao.getComponent(sp.Skeleton).setCompleteListener(function() {
                  dapaopao.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                });
                emo = show_popup.getChildByName("emo");
                emo.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                emo.getComponent(sp.Skeleton).setCompleteListener(function() {
                  emo.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
                });
                emo.setPosition(cc.v2(0, -300));
                emo.runAction(cc.moveTo(.5, cc.v2(0, 175)).easing(cc.easeBackOut()));
                _context6.next = 25;
                return _this6.awaitTime(.5);

               case 25:
                text1.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                text2.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                textBg.runAction(cc.scaleTo(.9, 1).easing(cc.easeBackOut()));
                startBtn.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                Global.doRoallNumEff(coinLable, 0, num, 2, null, null, 0, true);
                _context6.next = 32;
                return _this6.awaitTime(.5);

               case 32:
                self = _this6;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                  startBtn.off("click");
                  show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                    self._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  })));
                };
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.on("click", function() {
                  startBtn.stopAllActions();
                  clickFunc();
                });

               case 36:
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
      showSuperBonusGame: function showSuperBonusGame() {
        var _this7 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var show_popup, frame1, frame2, frame3, frame4, start, bg, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.super_popup);
                _this7._popup.active = true;
                show_popup = _this7._popup.getChildByName("show_superBonus");
                show_popup.active = true;
                show_popup.setScale(1);
                frame1 = show_popup.getChildByName("frame1");
                frame1.setScale(0);
                frame2 = show_popup.getChildByName("frame2");
                frame2.setScale(0);
                frame3 = show_popup.getChildByName("frame3");
                frame3.setScale(0);
                frame4 = show_popup.getChildByName("frame4");
                frame4.setScale(0);
                start = show_popup.getChildByName("start");
                start.setScale(0);
                bg = show_popup.getChildByName("bg");
                bg.setScale(.8);
                cc.tween(bg).to(.1, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 20;
                return _this7.awaitTime(.1);

               case 20:
                cc.tween(frame1).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(frame2).to(.8, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(frame3).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(frame4).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(start).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 27;
                return _this7.awaitTime(.8);

               case 27:
                self = _this7;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                  start.off("click");
                  self._popup.active = false;
                  show_popup.active = false;
                  sucess();
                };
                cc.vv.gameData.checkAutoPlay(start, clickFunc);
                start.on("click", function() {
                  start.stopAllActions();
                  clickFunc();
                });

               case 31:
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
      showSuperBonusWinCoin: function showSuperBonusWinCoin(num) {
        var _this8 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var show_popup, frame1, text_bg, frame4, start, bg, winLable, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.super_popclose);
                _this8._popup.active = true;
                show_popup = _this8._popup.getChildByName("show_superBonusWinCoin");
                show_popup.active = true;
                show_popup.setScale(1);
                frame1 = show_popup.getChildByName("frame1");
                frame1.setScale(0);
                text_bg = show_popup.getChildByName("text_bg");
                text_bg.setScale(0);
                frame4 = show_popup.getChildByName("frame4");
                frame4.setScale(0);
                start = show_popup.getChildByName("start");
                start.setScale(0);
                bg = show_popup.getChildByName("bg");
                bg.setScale(.8);
                cc.tween(bg).to(.1, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context8.next = 18;
                return _this8.awaitTime(.1);

               case 18:
                winLable = cc.find("coin", text_bg);
                _this8._startAddCoin = true;
                Global.doRoallNumEff(winLable, Math.floor(.1 * num), num, 2.5, function() {
                  _this8._startAddCoin = false;
                }, null, 0, true);
                cc.tween(frame1).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(text_bg).to(.8, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(frame4).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(start).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context8.next = 27;
                return _this8.awaitTime(.8);

               case 27:
                self = _this8;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                  start.off("click");
                  if (self._startAddCoin) {
                    self._startAddCoin = false;
                    winLable.stopAllActions();
                    var winCoinLabel = winLable.getComponent(cc.Label);
                    winCoinLabel.string = Global.FormatNumToComma(num);
                  }
                  show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                    self._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  })));
                };
                cc.vv.gameData.checkAutoPlay(start, clickFunc);
                start.on("click", function() {
                  start.stopAllActions();
                  clickFunc();
                });

               case 31:
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
      playEmoAnimation: function playEmoAnimation() {
        var _arguments = arguments, _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var bShowSmall, character1, character2, animation;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              bShowSmall = _arguments.length > 0 && void 0 !== _arguments[0] && _arguments[0];
              character1 = cc.find("Canvas/safe_node/character");
              character1.active = false;
              character2 = cc.find("Canvas/safe_node/Pick_Game_UI/Game_UI/xiaoemo_node/xiaoemo");
              character2.active = false;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition2);
              _this9._transitionSpine2.active = true;
              animation = _this9._transitionSpine2.getComponent(sp.Skeleton);
              animation.setAnimation(0, "skill01", false);
              animation.setCompleteListener(function() {
                if (bShowSmall) {
                  animation.setAnimation(0, "idle", false);
                  var norScale = _this9._transitionSpine2.scale;
                  var norPos = _this9._transitionSpine2.position;
                  var endPos = _this9._transitionSpine2.parent.convertToNodeSpaceAR(character2.convertToWorldSpaceAR(cc.v2(0, 0)));
                  cc.tween(_this9._transitionSpine2).to(.5, {
                    position: endPos,
                    scale: character2.scale
                  }).call(function() {
                    _this9._transitionSpine2.active = false;
                    _this9._transitionSpine2.scale = norScale;
                    _this9._transitionSpine2.position = norPos;
                    character2.active = true;
                  }).start();
                } else {
                  _this9._transitionSpine2.active = false;
                  character1.active = true;
                  character2.active = true;
                }
              });

             case 10:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      playLunpanAnimation: function playLunpanAnimation() {
        var _this10 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition1);
        this._transitionSpine1.active = true;
        var animation = this._transitionSpine1.getComponent(sp.Skeleton);
        animation.setAnimation(0, "animation", false);
        animation.setCompleteListener(function() {
          _this10._transitionSpine1.active = false;
        });
      },
      showQiPaoMaoChu: function showQiPaoMaoChu() {
        var _this11 = this;
        return new Promise(function(sucess, failed) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_up);
          _this11._qipaomaochu.active = true;
          var qipaoSp = _this11._qipaomaochu.getComponent(sp.Skeleton);
          qipaoSp.setAnimation(0, "animation", false);
          qipaoSp.setCompleteListener(function() {
            _this11._qipaomaochu.active = false;
            sucess();
          });
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TheEvil_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9919TKnCVP56xfK86W3o29", "TheEvil_Reel");
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
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this._super();
        var _iterator = _createForOfIteratorHelper(this._reelState), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            info.isStop && info.isKeepShow;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheEvil_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ec20v//HpAlr5n+cuEEeyC", "TheEvil_Slots");
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
    var SLOTS_INDEX_ZERO = [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _slotsMask: null,
        _isBackUp: false,
        _jpEffect: null
      },
      onLoad: function onLoad() {
        this._super();
        this._slotsMask = cc.find("mask", this.node);
        this._slotsMask.active = false;
        this._jpEffect = cc.find("jpeffect", this.node);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
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
        this._super();
        this._slotsMask.active = false;
        Global.TheEvilGameControl.bubbleControl.maskAllActiveBubble(false);
        Global.TheEvilGameControl.bubbleControl.hideAllBubbleAnimation();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        cc.vv.gameData.currBububbleInfo && cc.vv.gameData.currBububbleInfo.length > 0 && Global.TheEvilGameControl.bubbleControl.generateBubble(cc.vv.gameData.currBububbleInfo);
      },
      showMask: function showMask() {
        var isMask = false;
        var allWinIdx = Global.copy(SLOTS_INDEX_ZERO);
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) {
            allWinIdx[item.indexs[idx]] = 1;
            isMask = true;
          }
        }
        if (this._gameInfo.bubbleInfo && this._gameInfo.bubbleInfo.length > 0) {
          var _iterator = _createForOfIteratorHelper(this._gameInfo.bubbleInfo), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              var _iterator2 = _createForOfIteratorHelper(info.points), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var _idx = _step2.value;
                  allWinIdx[_idx] = 1;
                  isMask = true;
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
        }
        if (this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.idxs) for (var _i = 0; _i < this._gameInfo.freeResult.freeInfo.idxs.length; _i++) {
          var val = this._gameInfo.freeResult.freeInfo.idxs[_i];
          allWinIdx[val] = 1;
          isMask = true;
        }
        if (this._gameInfo.pickInfo.idxs && this._gameInfo.pickInfo.idxs.length > 0) for (var _i2 = 0; _i2 < this._gameInfo.pickInfo.idxs.length; _i2++) {
          var _val = this._gameInfo.pickInfo.idxs[_i2];
          allWinIdx[_val] = 1;
          isMask = true;
        }
        if (isMask) {
          this._slotsMask.active = true;
          Global.TheEvilGameControl.bubbleControl.maskAllActiveBubble(true);
          for (var index = 1; index < allWinIdx.length; index++) {
            var symbol = this.GetSymbolByIdx(index);
            symbol && 0 == allWinIdx[index] && symbol.playDisappearAnimation();
          }
        }
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        if (colIdx == this.moveReelLastIdx) {
          for (var i = 0; i < this._reels.length; i++) {
            var item = this._reels[i];
            item.ShowAntiEffect(false);
          }
          Global.TheEvilGameControl.bubbleControl.stopActiveBubble();
        }
      },
      OnReelReadyToStop: function OnReelReadyToStop(colIdx) {
        0 == colIdx && Global.TheEvilGameControl.bubbleControl.updateActiveBubble();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var points, _iterator3, _step3, info, _iterator4, _step4, idx, nWin, currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _this2.showMask();
              _this2.ShowWinTrace();
              if (!(_this2._gameInfo.bubbleInfo && _this2._gameInfo.bubbleInfo.length > 0)) {
                _context.next = 11;
                break;
              }
              points = [];
              _iterator3 = _createForOfIteratorHelper(_this2._gameInfo.bubbleInfo);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  info = _step3.value;
                  _iterator4 = _createForOfIteratorHelper(info.points);
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                      idx = _step4.value;
                      Global.TheEvilGameControl.bubbleControl.showWinBubbleAnimation(idx);
                      points.push({
                        index: idx,
                        coin: info.coin,
                        type: info.type
                      });
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (!(points.length > 0)) {
                _context.next = 11;
                break;
              }
              _this2.CheckActiveBubble(points);
              _context.next = 11;
              return _this2.awaitTime(1);

             case 11:
              nWin = cc.vv.gameData.GetGameWin();
              if (!cc.vv.gameData.isFreeGame()) {
                _context.next = 17;
                break;
              }
              _context.next = 15;
              return _this2.ShowWinCoin(nWin, cc.vv.gameData.GetGameTotalFreeWin(), false);

             case 15:
              _context.next = 19;
              break;

             case 17:
              _context.next = 19;
              return _this2.ShowWinCoin(nWin, nWin, true);

             case 19:
              if (!(_this2._gameInfo.freeResult && _this2._gameInfo.freeResult.freeInfo && _this2._gameInfo.freeResult.freeInfo.idxs)) {
                _context.next = 27;
                break;
              }
              if (!_this2._gameInfo.freeResult.isFreeState) {
                _context.next = 25;
                break;
              }
              _context.next = 23;
              return _this2.CheckFreeEnterFreeGame();

             case 23:
              _context.next = 27;
              break;

             case 25:
              _context.next = 27;
              return _this2.CheckEnterFreeGame();

             case 27:
              if (!(_this2._gameInfo.pickInfo.idxs && _this2._gameInfo.pickInfo.idxs.length > 0)) {
                _context.next = 37;
                break;
              }
              _context.next = 30;
              return _this2.CheckTriggerSubGame();

             case 30:
              _context.next = 32;
              return _this2.awaitTime(2);

             case 32:
              currentCoin = _this2._bottomScript.getCurrentWin();
              bonusWinCoin = Global.TheEvilGameControl.pickGameControl.getBonusWinCoin();
              cc.vv.gameData.AddCoin(bonusWinCoin);
              _context.next = 37;
              return _this2.ShowWinCoin(bonusWinCoin, currentCoin, true);

             case 37:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 42;
                break;
              }
              _context.next = 40;
              return _this2.CheckExitFreeGame();

             case 40:
              _context.next = 42;
              return _this2.ShowWinCoin(_this2._bottomScript.getCurrentWin(), _this2._bottomScript.getCurrentWin(), true);

             case 42:
              _this2.CanDoNextRound();

             case 43:
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
      CheckActiveBubble: function CheckActiveBubble(infoData) {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bubble_award);
        var _iterator5 = _createForOfIteratorHelper(infoData), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var info = _step5.value;
            var symbol = this.GetSymbolByIdx(info.index);
            symbol && symbol.playBubbleAnimation(info.coin, info.type);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      cc.vv.gameData.setIsFreeGame(false);
                      if (!Global.TheEvilGameControl.collectBonusControl.isSuperBonus()) {
                        _context3.next = 6;
                        break;
                      }
                      _context3.next = 4;
                      return Global.TheEvilGameControl.popupUIControl.showSuperBonusWinCoin(cc.vv.gameData.GetGameTotalFreeWin());

                     case 4:
                      _context3.next = 8;
                      break;

                     case 6:
                      _context3.next = 8;
                      return Global.TheEvilGameControl.popupUIControl.showFreeGameWinner(cc.vv.gameData.GetGameTotalFreeWin());

                     case 8:
                      Global.TheEvilGameControl.popupUIControl.playLunpanAnimation();
                      _context3.next = 11;
                      return _this4.awaitTime(1.3);

                     case 11:
                      _this4.Resume();
                      Global.TheEvilGameControl.bubbleControl.creatCurrentBubble();
                      if (_this4._isBackUp) {
                        Global.TheEvilGameControl.bubbleControl.maskAllActiveBubble(true);
                        _this4._isBackUp = false;
                      } else _this4.clearSlots();
                      Global.TheEvilGameControl.bubbleControl.hideAllBubbleAnimation();
                      _this4.ShowGameview(false);
                      _context3.next = 18;
                      return _this4.awaitTime(1);

                     case 18:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 20:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var _iterator6, _step6, id, symbol;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator6 = _createForOfIteratorHelper(_this5._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                          id = _step6.value;
                          symbol = _this5.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation();
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }
                      _context5.next = 5;
                      return _this5.awaitTime(2.5);

                     case 5:
                      _context5.next = 7;
                      return Global.TheEvilGameControl.popupUIControl.showAddFreeGameTimes(_this5._gameInfo.freeResult.freeInfo.freeCnt);

                     case 7:
                      sucess();

                     case 8:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var _iterator7, _step7, id, symbol;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator7 = _createForOfIteratorHelper(_this6._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                          id = _step7.value;
                          symbol = _this6.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation();
                          Global.TheEvilGameControl.collectBonusControl.flyParticle(symbol.node);
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }
                      _context7.next = 5;
                      return _this6.awaitTime(1);

                     case 5:
                      Global.TheEvilGameControl.collectBonusControl.activeBonus();
                      _context7.next = 8;
                      return _this6.awaitTime(1);

                     case 8:
                      cc.vv.gameData.setIsFreeGame(true);
                      if (!Global.TheEvilGameControl.collectBonusControl.isSuperBonus()) {
                        _context7.next = 14;
                        break;
                      }
                      _context7.next = 12;
                      return Global.TheEvilGameControl.popupUIControl.showSuperBonusGame();

                     case 12:
                      _context7.next = 16;
                      break;

                     case 14:
                      _context7.next = 16;
                      return Global.TheEvilGameControl.popupUIControl.showFreeGameTimes(_this6._gameInfo.freeResult.freeInfo.freeCnt);

                     case 16:
                      Global.TheEvilGameControl.popupUIControl.playLunpanAnimation();
                      _context7.next = 19;
                      return _this6.awaitTime(1.5);

                     case 19:
                      Global.TheEvilGameControl.bubbleControl.clearCurrentBubble();
                      _this6.ShowGameview(true);
                      _context7.next = 23;
                      return _this6.awaitTime(.5);

                     case 23:
                      _this6.Backup();
                      _this6._isBackUp = true;
                      if (!Global.TheEvilGameControl.collectBonusControl.isSuperBonus()) {
                        _context7.next = 31;
                        break;
                      }
                      _context7.next = 28;
                      return Global.TheEvilGameControl.popupUIControl.showQiPaoMaoChu();

                     case 28:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.super_bgm);
                      _context7.next = 32;
                      break;

                     case 31:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);

                     case 32:
                      sucess();

                     case 33:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x7, _x8) {
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
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  var _iterator8, _step8, id, symbol;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator8 = _createForOfIteratorHelper(_this7._gameInfo.pickInfo.idxs);
                      try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                          id = _step8.value;
                          symbol = _this7.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation();
                        }
                      } catch (err) {
                        _iterator8.e(err);
                      } finally {
                        _iterator8.f();
                      }
                      cc.vv.gameData.isFreeGame() || _this7._bottomScript.DoHideWinAction();
                      _context9.next = 6;
                      return _this7.awaitTime(1.5);

                     case 6:
                      cc.vv.gameData.setIsBonusGame(true);
                      _context9.next = 9;
                      return Global.TheEvilGameControl.popupUIControl.showPickGameTimes();

                     case 9:
                      Global.TheEvilGameControl.popupUIControl.playEmoAnimation(true);
                      _context9.next = 12;
                      return _this7.awaitTime(2);

                     case 12:
                      Global.TheEvilGameControl.pickGameControl.enterGame(cc.vv.gameData.pickInfo, sucess);

                     case 13:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x9, _x10) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              Global.TheEvilGameControl.collectBonusControl.initData();
              _this8.ShowGameview(cc.vv.gameData.isFreeGame());
              if (cc.vv.gameData.isFreeGame()) {
                _this8._bottomScript.SetWin(cc.vv.gameData.GetTotalFreeWin());
                Global.TheEvilGameControl.bubbleControl.createBubble(cc.vv.gameData._deskInfo.bubbleInfoInFree);
              } else Global.TheEvilGameControl.bubbleControl.creatCurrentBubble();
              if (!(cc.vv.gameData.pickInfo.idxs && cc.vv.gameData.pickInfo.idxs.length > 0)) {
                _context12.next = 17;
                break;
              }
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              Global.TheEvilGameControl.bubbleControl.maskAllActiveBubble(true);
              currentCoin = _this8._bottomScript.getCurrentWin();
              bonusWinCoin = cc.vv.gameData.pickInfo.currWinCoin;
              _this8._bottomScript.SetWin(currentCoin + bonusWinCoin);
              _context12.next = 11;
              return new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      Global.TheEvilGameControl.pickGameControl.enterGame(cc.vv.gameData.pickInfo, sucess);

                     case 1:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x11, _x12) {
                  return _ref6.apply(this, arguments);
                };
              }());

             case 11:
              _context12.next = 13;
              return _this8.awaitTime(2);

             case 13:
              currentCoin = _this8._bottomScript.getCurrentWin();
              bonusWinCoin = Global.TheEvilGameControl.pickGameControl.getBonusWinCoin();
              _context12.next = 17;
              return _this8.ShowWinCoin(bonusWinCoin, currentCoin, true);

             case 17:
              _this8.CanDoNextRound();

             case 18:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        this.clearSlots();
        Global.TheEvilGameControl.bubbleControl.maskAllActiveBubble(false);
        Global.TheEvilGameControl.bubbleControl.creatCurrentBubble();
        Global.TheEvilGameControl.collectBonusControl.updataCollectState();
      },
      clearSlots: function clearSlots() {
        this._slotsMask.active = false;
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.ShowNormal();
            symbol.ShowKuang(false);
          }
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
        } else this._bottomScript.ShowFreeModel(false);
        Global.TheEvilGameControl.collectBonusControl.showFreeGameCollect(bFree);
        Global.TheEvilGameControl.collectBonusControl.isSuperBonus() ? this._bottomScript.showTotalBet(!bFree) : this._bottomScript.showTotalBet(true);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var superFree = cc.find("Canvas/safe_node/spr_bg_superfree");
        if (normalFree && superFree) {
          normalBg && (normalBg.active = !bFree);
          if (Global.TheEvilGameControl.collectBonusControl.isSuperBonus()) {
            superFree.active = bFree;
            normalFree.active = false;
          } else {
            superFree.active = false;
            normalFree.active = bFree;
          }
        }
      },
      ShowJackpotEffect: function ShowJackpotEffect(isShow) {
        this._jpEffect.active = isShow;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheEvil_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "155dbxiYZJAdZzh9BIMW+zv", "TheEvil_Sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/TheEvil/",
          override: true
        },
        anticipation1_1: "anticipation1_1",
        anticipation1_2: "anticipation1_2",
        anticipation2_1: "anticipation2_1",
        anticipation2_2: "anticipation2_2",
        base_bgm: "base_bgm",
        bell: "bell",
        click: "click",
        lock: "lock",
        reel_stop: "reel_stop",
        scatter_landing: "scatter_landing",
        scatter1_landing: "scatter1_landing",
        scatter2_landing: "scatter2_landing",
        star_landing: "star_landing",
        symbol_collect: "symbol_collect",
        transition1: "transition1",
        transition2: "transition2",
        unlock: "unlock",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        win3: "win3",
        win3end: "win3end",
        win4: "win4",
        win4end: "win4end",
        bubble_award: "bubble_award",
        bubble_boom: "bubble_boom",
        bubble_up: "bubble_up",
        free_bgm: "free_bgm",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_start_show: "free_dialog_start_show",
        grand_jackpot: "grand_jackpot",
        major_jackpot: "major_jackpot",
        mini_jackpot: "mini_jackpot",
        minor_jackpot: "minor_jackpot",
        bubble_reveal: "bubble_reveal",
        bubble_scatter: "bubble_scatter",
        jp_popup: "jp_popup",
        pick_bgm: "pick_bgm",
        pick_end_show: "pick_end_show",
        pick_start_show: "pick_start_show",
        scatter_reveal: "scatter_reveal",
        super_bgm: "super_bgm",
        super_popclose: "super_popclose",
        super_popup: "super_popup"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  TheEvil_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcbb4+5Sz1MipjUgIah4hZ3", "TheEvil_Symbol");
    "use strict";
    var jackpotMusic = [ "mini_jackpot", "minor_jackpot", "major_jackpot", "grand_jackpot" ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _bonusIndex: 0,
        _BubbleCoin: 0,
        _BubbleJpId: 0
      },
      SetCoin: function SetCoin(coin) {
        this._data = coin;
        var cfg = cc.vv.gameData.getGameCfg();
        var coinLable = cc.find("coin", this.node);
        if (cfg.symbol[this._id].coin) {
          coinLable.active = true;
          coinLable.getComponent(cc.Label).string = Global.convertNumToShort(this._data, 1e3, 1, null, 1e3);
        } else coinLable.active = false;
      },
      StopMoveEnd: function StopMoveEnd() {
        this._super();
        this.playidleAnimation();
      },
      playidleAnimation: function playidleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._state = "idle";
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          isPlay = true;
          if ("" != cfg.symbol[id].idle_ani.name) {
            var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
            topShowNode.active = true;
            aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          } else {
            cc.find(cfg.symbol[id].win_node, aniNode).active = false;
            cc.find(cfg.symbol[id].node, aniNode).active = true;
          }
        }
        return isPlay;
      },
      playTriggerAnimation: function playTriggerAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_ani) {
          this._showNode && (this._showNode.active = false);
          this._state = "trigger";
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
      playDisappearAnimation: function playDisappearAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].disappear_ani) if ("" != cfg.symbol[id].disappear_ani.name) {
          this._state = "disappear";
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          aniNode.zIndex = cfg.symbol[id].disappear_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          isPlay = true;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            this.node.active = true;
            this._showNode && (this._showNode.active = true);
            nodeSp.setAnimation(0, cfg.symbol[id].disappear_ani.name, false);
          }
        } else this.setAnimationToTop(false);
        return isPlay;
      },
      playBubbleAnimation: function playBubbleAnimation(coin, jpId) {
        var isPlay = false;
        var id = this._id;
        this._BubbleCoin = coin;
        this._BubbleJpId = jpId;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_bubble) {
          isPlay = true;
          this._showNode && (this._showNode.active = false);
          this._state = "bubbleAnimation";
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          aniNode.zIndex = cfg.symbol[id].trigger_bubble.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          nodeSp.setAnimation(0, cfg.symbol[id].trigger_bubble.name, false);
          nodeSp.addAnimation(0, cfg.symbol[id].trigger_bubble_idle.name, true);
          switch (jpId) {
           case 1:
           case 2:
           case 3:
           case 4:
            var jp = aniNode.getChildByName("jp_" + jpId);
            jp.active = true;
            jp.setScale(.9);
            jp.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.7, 1.1, 1.1), cc.scaleTo(.7, .9, .9))));
            Global.SlotsSoundMgr.playEffect(jackpotMusic[jpId - 1]);
            break;

           default:
            var smallCoinNode = aniNode.getChildByName("coin_small");
            var bigCoinNode = aniNode.getChildByName("coin_big");
            var mult = Math.floor(coin / cc.vv.gameData.GetTotalBet());
            if (mult < 10) {
              smallCoinNode.active = true;
              smallCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1, null, 1e3);
              smallCoinNode.setScale(.9);
              smallCoinNode.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.7, 1.1, 1.1), cc.scaleTo(.7, .9, .9))));
            } else {
              bigCoinNode.active = true;
              bigCoinNode.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1, null, 1e3);
              bigCoinNode.setScale(.9);
              bigCoinNode.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.7, 1.1, 1.1), cc.scaleTo(.7, .9, .9))));
            }
          }
        }
        return isPlay;
      },
      setAnimationToTop: function setAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
            if (cloneNode) {
              cloneNode.removeFromParent();
              cloneNode.destroy();
            }
            cloneNode = cc.instantiate(this.node);
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            cloneNode.parent = this._topAniNode;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx);
            cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            this.node.active = false;
            return cloneNode;
          }
          var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
          if (showNode) {
            showNode.removeFromParent();
            showNode.destroy();
          }
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      },
      Backup: function Backup() {
        var backup = {};
        backup.symbolIdx = this._symbolIdx;
        backup.id = this._id;
        this._data && (backup.data = Global.copy(this._data));
        backup.isKuang = this._isKuang;
        backup.state = this._state;
        backup.BubbleCoin = this._BubbleCoin;
        backup.BubbleJpId = this._BubbleJpId;
        return backup;
      },
      Resume: function Resume(backup) {
        if (!backup) return;
        this._symbolIdx = backup.symbolIdx;
        this._id = backup.id;
        this._data = Global.copy(backup.data);
        this.ShowKuang(backup.isKuang);
        this.ShowNormal();
        var state = backup.state;
        "win" == state ? this.playWinAnimation() : "stop" == state ? this.playStopAnimation() : "idle" == state ? this.playidleAnimation() : "trigger" == state ? this.playTriggerAnimation() : "disappear" == state ? this.playDisappearAnimation() : "bubbleAnimation" == state && this.playBubbleAnimation(backup.BubbleCoin, backup.BubbleJpId);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheEvil_Top: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5862nDjeNDsaCPq6A0H1iI", "TheEvil_Top");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Top_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
        Global.TheEvilGameControl.collectBonusControl.setMask(true);
      },
      StopMove: function StopMove() {
        this._super();
        Global.TheEvilGameControl.collectBonusControl.setMask(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Top_Base: void 0
  } ]
}, {}, [ "TheEvil_Bottom", "TheEvil_Bubble", "TheEvil_BubbleCfg", "TheEvil_BubbleControl", "TheEvil_Cfg", "TheEvil_CollectBonusControl", "TheEvil_GameData", "TheEvil_Logic", "TheEvil_PickGameControl", "TheEvil_PopupUIControl", "TheEvil_Reel", "TheEvil_Slots", "TheEvil_Sound", "TheEvil_Symbol", "TheEvil_Top" ]);