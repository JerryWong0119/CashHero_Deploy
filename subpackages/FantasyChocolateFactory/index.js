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
  FantasyChocolateFactory_BubbuleGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7a443t92JHQo/QZj91hkKF", "FantasyChocolateFactory_BubbuleGame");
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
    var BubbleCfg = {
      1: {
        spine: "bubbleNormal",
        stopAni: "animation03",
        appearAni: "animation06",
        moveAni: [ "animation01", "animation02" ],
        candyMagicAni: "animation3"
      },
      2: {
        spine: "bubbleNormal",
        stopAni: "animation09",
        appearAni: "animation10",
        moveAni: [ "animation07", "animation08" ],
        candyMagicAni: "animation1",
        hasCandySpread: true
      },
      3: {
        spine: "bubbleMinor",
        stopAni: "animation03",
        appearAni: "animation06",
        moveAni: [ "animation01", "animation02" ],
        winAni: "animation11",
        candyMagicAni: "animation3"
      },
      4: {
        spine: "bubbleMinor",
        stopAni: "animation09",
        appearAni: "animation10",
        moveAni: [ "animation07", "animation08" ],
        winAni: "animation12",
        candyMagicAni: "animation1",
        hasCandySpread: true
      },
      5: {
        spine: "bubbleMajor",
        stopAni: "animation03",
        appearAni: "animation06",
        moveAni: [ "animation01", "animation02" ],
        winAni: "animation11",
        candyMagicAni: "animation3"
      },
      6: {
        spine: "bubbleMajor",
        stopAni: "animation09",
        appearAni: "animation10",
        moveAni: [ "animation07", "animation08" ],
        winAni: "animation12",
        candyMagicAni: "animation1",
        hasCandySpread: true
      },
      7: {
        spine: "bubbleGrand",
        stopAni: "animation03",
        appearAni: "animation06",
        moveAni: [ "animation01", "animation02" ],
        winAni: "animation11",
        candyMagicAni: "animation3"
      },
      8: {
        spine: "bubbleGrand",
        stopAni: "animation09",
        appearAni: "animation10",
        moveAni: [ "animation07", "animation08" ],
        winAni: "animation12",
        candyMagicAni: "animation1",
        hasCandySpread: true
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        bubble_machine_node: cc.Node,
        spine_machine: sp.Skeleton,
        spine_machine_buble: sp.Skeleton,
        spine_big_bubble_effect: sp.Skeleton,
        bubble_node: cc.Node,
        bubbleNormal: cc.Node,
        bubbleMinor: cc.Node,
        bubbleMajor: cc.Node,
        bubbleGrand: cc.Node,
        candy_magic: cc.Node,
        _isOpen: false,
        _bubbleItems: [],
        _bubbleStartPos: null
      },
      onLoad: function onLoad() {
        this._bubbleItems = [];
        var pos = cc.v2(this.spine_machine_buble.node.x, this.spine_machine_buble.node.y);
        pos = this.bubble_machine_node.convertToWorldSpaceAR(pos);
        this._bubbleStartPos = this.bubble_node.convertToNodeSpaceAR(pos);
      },
      start: function start() {
        this._initListener();
        this.showBubbleMachine(true);
        this.resetBubble();
      },
      _initListener: function _initListener() {
        var _this = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.showBubbleMachine();
          _this.resetBubble(true);
        }, this);
        this.bubble_machine_node.on(cc.Node.EventType.TOUCH_END, function() {
          _this._isOpen || _this._openBubble();
        }, this);
      },
      _openBubble: function _openBubble() {
        if (this._isOpen) return;
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.getDeskInfo().needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      showBubbleMachine: function showBubbleMachine(isInit) {
        var _this2 = this;
        var boo = SlotsFacade.dm.canBubble();
        if (isInit) if (boo) {
          this.spine_machine_buble.node.active = true;
          this.spine_machine.setAnimation(0, "animation1", true);
        } else {
          this.spine_machine_buble.node.active = false;
          this.spine_machine.setAnimation(0, "animation3", false);
        } else if (boo) {
          if (!this._isOpen) {
            SlotsFacade.soundMgr.playEffect("bubbleMachine_open");
            this.spine_machine.setAnimation(0, "animation4", false);
            this.spine_machine.setCompleteListener(function() {
              _this2.spine_machine.setCompleteListener(null);
              _this2.spine_machine.setAnimation(0, "animation1", true);
              _this2.spine_machine_buble.node.active = true;
            });
          }
        } else {
          this.spine_machine_buble.node.active = false;
          if (this._isOpen) {
            SlotsFacade.soundMgr.playEffect("bubbleMachine_close");
            this.spine_machine.setAnimation(0, "animation2", false);
          }
        }
        this._isOpen = boo;
      },
      getABubblePos: function getABubblePos(bubbleInfoVo) {
        var currIndexs = bubbleInfoVo.currIdxs;
        var posArr = [];
        for (var i = 0; i < currIndexs.length; i++) {
          var pos = SlotsFacade.slots.getIdxGlobalPos(currIndexs[i]);
          pos = this.bubbleNormal.convertToNodeSpaceAR(pos);
          posArr.push(pos);
        }
        if (1 == posArr.length) return posArr[0];
        if (2 == posArr.length) return currIndexs[0] <= 5 ? cc.v2((posArr[0].x + posArr[1].x) / 2, posArr[0].y + SlotsFacade.dm.getGameCfg().symbolSize.height / 2) : cc.v2((posArr[0].x + posArr[1].x) / 2, posArr[0].y - SlotsFacade.dm.getGameCfg().symbolSize.height / 2);
        if (4 == posArr.length) return cc.v2((posArr[0].x + posArr[3].x) / 2, (posArr[0].y + posArr[3].y) / 2);
        console.log("Error#getABubblePos#", bubbleInfoVo);
      },
      createABubble: function createABubble(bubbleInfoVo, parent) {
        var cfgVo = BubbleCfg[bubbleInfoVo.type + ""];
        var item = cc.instantiate(this[cfgVo.spine]);
        item.active = true;
        item.info = {
          id: bubbleInfoVo.id,
          type: bubbleInfoVo.type
        };
        if (parent) {
          item.parent = parent;
          item.getComponent(sp.Skeleton).setAnimation(0, cfgVo.stopAni, false);
        }
        return item;
      },
      clearBubble: function clearBubble() {
        this._bubbleItems.forEach(function(element) {
          element.removeFromParent(true);
        });
        this._bubbleItems = [];
      },
      resetBubble: function resetBubble() {
        this.clearBubble();
        var bubbleInfo = SlotsFacade.dm.getCurrBubbleInfo();
        if (!bubbleInfo) return;
        for (var i = 0; i < bubbleInfo.length; i++) {
          var vo = bubbleInfo[i];
          var bubble = this.createABubble(vo, this.bubble_node);
          var pos = this.getABubblePos(vo);
          bubble.x = pos.x;
          bubble.y = pos.y;
          this._bubbleItems.push(bubble);
        }
      },
      bubbleItemsIncludeId: function bubbleItemsIncludeId(id) {
        for (var i = 0; i < this._bubbleItems.length; i++) if (this._bubbleItems[i].info.id == id) return true;
        return false;
      },
      addBubbleOnOpenBubbleMachine: function addBubbleOnOpenBubbleMachine(bubbleInfo) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var height, newBubbleCnt, i, vo, bubble, endPos, cfgVo, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              height = SlotsFacade.dm.getGameCfg().symbolSize.height;
              newBubbleCnt = 0;
              i = 0;

             case 3:
              if (!(i < bubbleInfo.length)) {
                _context.next = 26;
                break;
              }
              vo = bubbleInfo[i];
              if (!(vo.prevIdxs && vo.prevIdxs.length > 0)) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("continue", 23);

             case 7:
              if (!_this3.bubbleItemsIncludeId(vo.id)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("continue", 23);

             case 9:
              newBubbleCnt++;
              if ([ 2, 4, 6, 8 ].includes(vo.type)) {
                _this3.spine_big_bubble_effect.node.active = true;
                _this3.spine_big_bubble_effect.setAnimation(0, "animation", false);
                _this3.spine_big_bubble_effect.setCompleteListener(function() {
                  _this3.spine_big_bubble_effect.setCompleteListener(null);
                  _this3.spine_big_bubble_effect.node.active = false;
                });
              }
              bubble = _this3.createABubble(vo);
              bubble.active = true;
              bubble.x = _this3._bubbleStartPos.x;
              bubble.y = _this3._bubbleStartPos.y;
              bubble.parent = _this3.bubble_node;
              endPos = _this3.getABubblePos(vo);
              endPos.y -= height;
              cfgVo = BubbleCfg[vo.type + ""];
              spine = bubble.getComponent(sp.Skeleton);
              spine.setAnimation(0, cfgVo.appearAni, false);
              cc.tween(bubble).delay(.5).to(1.5, {
                x: endPos.x,
                y: endPos.y
              }, {
                easing: "cubicIn"
              }).start();
              _this3._bubbleItems.push(bubble);

             case 23:
              i++;
              _context.next = 3;
              break;

             case 26:
              if (!newBubbleCnt) {
                _context.next = 30;
                break;
              }
              SlotsFacade.soundMgr.playEffect("bubble_create" + (newBubbleCnt > 3 ? 3 : newBubbleCnt));
              _context.next = 30;
              return SlotsFacade.delayTime(2.2);

             case 30:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      addBubbleOnCloseBubbleMachine: function addBubbleOnCloseBubbleMachine(bubbleInfo) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var height, newBubbleCnt, i, vo, endPos, bubble, cfgVo, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              height = SlotsFacade.dm.getGameCfg().symbolSize.height;
              newBubbleCnt = 0;
              i = 0;

             case 3:
              if (!(i < bubbleInfo.length)) {
                _context2.next = 24;
                break;
              }
              vo = bubbleInfo[i];
              if (!(vo.prevIdxs && vo.prevIdxs.length > 0)) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("continue", 21);

             case 7:
              if (!_this4.bubbleItemsIncludeId(vo.id)) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("continue", 21);

             case 9:
              newBubbleCnt++;
              endPos = _this4.getABubblePos(vo);
              endPos.y -= height;
              bubble = _this4.createABubble(vo);
              bubble.active = true;
              bubble.x = endPos.x;
              bubble.y = endPos.y;
              bubble.parent = _this4.bubble_node;
              cfgVo = BubbleCfg[vo.type + ""];
              spine = bubble.getComponent(sp.Skeleton);
              spine.setAnimation(0, cfgVo.stopAni, false);
              _this4._bubbleItems.push(bubble);

             case 21:
              i++;
              _context2.next = 3;
              break;

             case 24:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      addBubble: function addBubble() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var bubbleInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              bubbleInfo = SlotsFacade.dm.getCurrBubbleInfo();
              if (!(!bubbleInfo || bubbleInfo.length < 1)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");

             case 3:
              if (!SlotsFacade.dm.canBubble()) {
                _context3.next = 8;
                break;
              }
              _context3.next = 6;
              return _this5.addBubbleOnOpenBubbleMachine(bubbleInfo);

             case 6:
              _context3.next = 10;
              break;

             case 8:
              _context3.next = 10;
              return _this5.addBubbleOnCloseBubbleMachine(bubbleInfo);

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      moveBubble: function moveBubble() {
        var _this6 = this;
        var bubbleInfo = SlotsFacade.dm.getCurrBubbleInfo();
        var bubbleInfoMap = {};
        bubbleInfo.forEach(function(element) {
          bubbleInfoMap[element.id] = element;
        });
        var height = SlotsFacade.dm.getGameCfg().symbolSize.height;
        var _loop = function _loop(_i) {
          var item = _this6._bubbleItems[_i];
          var vo = bubbleInfoMap[item.info.id];
          var cfgVo = BubbleCfg[item.info.type + ""];
          var spine = item.getComponent(sp.Skeleton);
          spine.setAnimation(0, cfgVo.moveAni[Math.floor(Math.random() * cfgVo.moveAni.length)], true);
          if (vo) {
            var pos = _this6.getABubblePos(vo);
            cc.tween(item).to(1.2, {
              x: pos.x,
              y: pos.y
            }).call(function() {
              spine.setAnimation(0, cfgVo.stopAni, false);
            }).start();
          } else {
            _this6._bubbleItems.splice(_i, 1);
            _i--;
            cc.tween(item).to(.8, {
              y: item.y + 1.5 * height
            }).to(.5, {
              opacity: 0
            }).call(function() {
              item.removeFromParent(true);
            }).start();
          }
          i = _i;
        };
        for (var i = 0; i < this._bubbleItems.length; i++) _loop(i);
      },
      showBubbleEndPos: function showBubbleEndPos() {
        var bubbleInfo = SlotsFacade.dm.getCurrBubbleInfo();
        if (!bubbleInfo) return;
        var bubbleInfoMap = {};
        bubbleInfo.forEach(function(element) {
          bubbleInfoMap[element.id] = element;
        });
        for (var _i2 = 0; _i2 < this._bubbleItems.length; _i2++) {
          var item = this._bubbleItems[_i2];
          var vo = bubbleInfoMap[item.info.id];
          if (vo) {
            var pos = this.getABubblePos(vo);
            item.x = pos.x;
            item.y = pos.y;
          }
        }
      },
      getBubbleItemById: function getBubbleItemById(id) {
        for (var _i3 = 0; _i3 < this._bubbleItems.length; _i3++) {
          var item = this._bubbleItems[_i3];
          if (item.info.id == id) return item;
        }
        return null;
      },
      showJackPort: function showJackPort(effectVo) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var item, cfgVo, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bubble_jp_animation");
              item = _this7.getBubbleItemById(effectVo.id);
              cfgVo = BubbleCfg[item.info.type + ""];
              spine = item.getComponent(sp.Skeleton);
              spine.setAnimation(0, cfgVo.winAni, false);
              _context4.next = 7;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  res();
                });
              });

             case 7:
              _context4.next = 9;
              return SlotsFacade.popup.showWinJPCoin(effectVo.jackpotId, effectVo.jackpotValue);

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showCandyMagic: function showCandyMagic(effectVo) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var item, cfgVo, candyMagicItem, candySpread, spine, currIdxs, wildIdxs, bubbleArr, _i4, idx, bubble, endPos;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bubble_transform");
              item = _this8.getBubbleItemById(effectVo.id);
              item.active = false;
              cfgVo = BubbleCfg[item.info.type + ""];
              candyMagicItem = cc.instantiate(_this8.candy_magic);
              candyMagicItem.active = true;
              candyMagicItem.x = item.x;
              candyMagicItem.y = item.y;
              candyMagicItem.parent = _this8.bubble_node;
              candySpread = candyMagicItem.getChildByName("spine_spread");
              if (cfgVo.hasCandySpread) {
                candySpread.active = true;
                candySpread.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              }
              spine = candyMagicItem.getChildByName("spine_candy").getComponent(sp.Skeleton);
              spine.setAnimation(0, cfgVo.candyMagicAni, false);
              _context5.next = 15;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  candyMagicItem.removeFromParent(true);
                  item.active = true;
                  item.getComponent(sp.Skeleton).setAnimation(0, cfgVo.stopAni, false);
                  res();
                });
              });

             case 15:
              currIdxs = effectVo.currIdxs;
              wildIdxs = effectVo.wildIdxs;
              bubbleArr = [];
              _i4 = 0;

             case 19:
              if (!(_i4 < wildIdxs.length)) {
                _context5.next = 32;
                break;
              }
              idx = wildIdxs[_i4];
              if (!currIdxs.includes(idx)) {
                _context5.next = 23;
                break;
              }
              return _context5.abrupt("continue", 29);

             case 23:
              bubble = _this8.createABubble({
                id: 0,
                type: 1
              }, _this8.bubble_node);
              bubble.x = item.x;
              bubble.y = item.y;
              bubbleArr.push(bubble);
              endPos = _this8.getABubblePos({
                currIdxs: [ idx ]
              });
              cc.tween(bubble).to(.5, {
                x: endPos.x,
                y: endPos.y
              }).start();

             case 29:
              _i4++;
              _context5.next = 19;
              break;

             case 32:
              _context5.next = 34;
              return SlotsFacade.delayTime(.6);

             case 34:
              bubbleArr.forEach(function(element) {
                element.removeFromParent(true);
              });

             case 35:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showBubbleEffect: function showBubbleEffect() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var bubbleEffect, _i5, vo, promiseArr, _i6, _vo, hasDivide, wildIdxs, _i7, _vo2, setWildIdxs, symbolArr, _i8, symbol, nTotalBet, nMul, shakeTime, shakeOffset;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              bubbleEffect = SlotsFacade.dm.getSpinData().bubbleEffects;
              if (!(!bubbleEffect || bubbleEffect.length < 1)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              _i5 = 0;

             case 4:
              if (!(_i5 < bubbleEffect.length)) {
                _context6.next = 12;
                break;
              }
              vo = bubbleEffect[_i5];
              if (!vo.jackpotId) {
                _context6.next = 9;
                break;
              }
              _context6.next = 9;
              return _this9.showJackPort(vo);

             case 9:
              _i5++;
              _context6.next = 4;
              break;

             case 12:
              promiseArr = [];
              for (_i6 = 0; _i6 < bubbleEffect.length; _i6++) {
                _vo = bubbleEffect[_i6];
                _vo.isDivide > 0 && promiseArr.push(_this9.showCandyMagic(_vo));
              }
              if (!promiseArr.length) {
                _context6.next = 17;
                break;
              }
              _context6.next = 17;
              return Promise.all(promiseArr);

             case 17:
              hasDivide = false;
              _this9.showBubbleNode(false);
              wildIdxs = [];
              for (_i7 = 0; _i7 < bubbleEffect.length; _i7++) {
                _vo2 = bubbleEffect[_i7];
                wildIdxs = wildIdxs.concat(_vo2.currIdxs);
                wildIdxs = wildIdxs.concat(_vo2.wildIdxs);
                !hasDivide && _vo2.isDivide && (hasDivide = true);
              }
              setWildIdxs = [];
              wildIdxs.forEach(function(element) {
                setWildIdxs.includes(element) || setWildIdxs.push(element);
              });
              symbolArr = SlotsFacade.slots.getSymbolsByServerIds(setWildIdxs);
              for (_i8 = 0; _i8 < symbolArr.length; _i8++) {
                symbol = symbolArr[_i8];
                symbol.changeToWild();
              }
              SlotsFacade.soundMgr.playEffect("bubble_wild");
              if (!hasDivide) {
                _context6.next = 41;
                break;
              }
              _context6.next = 29;
              return SlotsFacade.delayTime(.3);

             case 29:
              nTotalBet = cc.vv.gameData.GetTotalBet();
              nMul = SlotsFacade.dm.GetGameWin() / nTotalBet;
              console.log(nMul);
              if (!(nMul >= 10)) {
                _context6.next = 41;
                break;
              }
              SlotsFacade.soundMgr.playEffect("fg_bell");
              shakeTime = 1;
              shakeOffset = 5;
              Global.shakeNode(SlotsFacade.mainPanel.bg, shakeOffset, shakeTime);
              Global.shakeNode(SlotsFacade.mainPanel.jpNode, shakeOffset, shakeTime);
              Global.shakeNode(SlotsFacade.mainPanel.slots, shakeOffset, shakeTime);
              _context6.next = 41;
              return SlotsFacade.delayTime(shakeTime + .2);

             case 41:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showBubbleNode: function showBubbleNode(boo) {
        this.bubble_node.active = boo;
        if (boo && this._bubbleItems) {
          var _iterator = _createForOfIteratorHelper(this._bubbleItems), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (!item.info) continue;
              var cfgVo = BubbleCfg[item.info.type.toString()];
              item.getComponent(sp.Skeleton).setAnimation(0, cfgVo.stopAni, false);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0c41dwunNLAJolgLTK0mVr", "FantasyChocolateFactory_Cfg");
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
          name: "animation05",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
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
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _symbol),
      scatterId: 2,
      bonusId: 3,
      wildId: 1,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "FantasyChocolateFactory_Slots",
        Reels: "FantasyChocolateFactory_Reel",
        Symbols: "FantasyChocolateFactory_symbol"
      },
      col: 5,
      row: 6,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 85
      },
      helpItems: [ "games/FantasyChocolateFactory/prefab/LMSlots_Help_item1", "games/FantasyChocolateFactory/prefab/LMSlots_Help_item2", "games/FantasyChocolateFactory/prefab/LMSlots_Help_item3" ],
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "bgbgm",
      commEffect: {
        path: "games/FantasyChocolateFactory/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/FantasyChocolateFactory/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatterSmart_stop_1",
        antSound: "anticipation",
        antSpeed: 2400
      } ]
    };
    Cfg.isWild = function(id) {
      return 1 == id;
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a37faaOmmFKqKfkifvY7TGU", "FantasyChocolateFactory_FlowCtrl");
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
              if (!SlotsFacade.dm.bonusData) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return _this.enterBonusGame(true);

             case 6:
              SlotsFacade.slots.CanDoNextRound();

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return SlotsFacade.bubbleGame.addBubble();

             case 2:
              SlotsFacade.slots._gameInfo = msg;
              SlotsFacade.slots.SetSlotsResult(msg.resultCards);
              SlotsFacade.slots.SetReelStateInfo(msg.resultCards);

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
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.bubbleGame.showBubbleEndPos();
              _context3.next = 4;
              return SlotsFacade.bubbleGame.showBubbleEffect();

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
              return _this2.enterBonusGame();

             case 12:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context3.next = 21;
                break;
              }
              SlotsFacade.slots.Backup();
              _context3.next = 16;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt());

             case 16:
              _context3.next = 18;
              return SlotsFacade.delayTime(1);

             case 18:
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 41;
              break;

             case 21:
              if (!cc.vv.gameData.hasFree()) {
                _context3.next = 25;
                break;
              }
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 41;
              break;

             case 25:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context3.next = 40;
                break;
              }
              _context3.next = 28;
              return SlotsFacade.popup.showWinFreeCoin(SlotsFacade.dm.getFreeWinCoin());

             case 28:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 31;
              return SlotsFacade.delayTime(2);

             case 31:
              SlotsFacade.slots.Resume();
              _this2.enterNormalGame();
              _context3.next = 35;
              return SlotsFacade.delayTime(.8);

             case 35:
              _context3.next = 37;
              return new Promise(function(res) {
                var freeTotalWin = cc.vv.gameData.GetGameTotalFreeWin();
                SlotsFacade.slots.ShowBottomWin(freeTotalWin, freeTotalWin, true, res);
              });

             case 37:
              SlotsFacade.slots.CanDoNextRound();
              _context3.next = 41;
              break;

             case 40:
              SlotsFacade.slots.CanDoNextRound();

             case 41:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              _context4.next = 4;
              return SlotsFacade.delayTime(.5);

             case 4:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.mainPanel.showBg(0);
        Global.SlotsSoundMgr.stopBgm();
        SlotsFacade.soundMgr.playBgm();
      },
      enterBonusGame: function enterBonusGame(isReconnect) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (SlotsFacade.dm.bonusData) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");

             case 2:
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isReconnect) {
                _context5.next = 7;
                break;
              }
              _context5.next = 6;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getBonusIndexs());

             case 6:
              SlotsFacade.slots.Backup();

             case 7:
              _context5.next = 9;
              return new Promise(function(res) {
                SlotsFacade.pickGame.enter(res, isReconnect);
              });

             case 9:
              _context5.next = 11;
              return _this3.enterFreeGame();

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01f1dUDL3BFPIwS2YIcloPZ", "FantasyChocolateFactory_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        bonusData: null,
        bubbleHistory: []
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this.bonusData = deskInfo.pickBonus;
        this.bubbleHistory = deskInfo.history.bubbleInfo || [];
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.bonusData = msg.pickBonus;
          this.bubbleHistory[this.GetBetIdx() - 1] = msg.bubbleInfo || [];
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
      getBonusIndexs: function getBonusIndexs() {
        if (!this.bonusData) return [];
        var ret = [];
        var scatterId = this.getGameCfg().scatterId;
        var cards = this.getSpinData().resultCards;
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i];
          c == scatterId && ret.push(i + 1);
        }
        return ret;
      },
      canBubble: function canBubble() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
      },
      getCurrBubbleInfo: function getCurrBubbleInfo() {
        return this.bubbleHistory[this.GetBetIdx() - 1];
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  FantasyChocolateFactory_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f79f79UeJFhY4ylc34dXGz", "FantasyChocolateFactory_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("FantasyChocolateFactory_MainPanel");
        this.flowCtrl = this.addComponent("FantasyChocolateFactory_FlowCtrl");
        this.soundMgr = this.addComponent("FantasyChocolateFactory_Sound");
        this.popup = this.mainPanel.popup_node.addComponent("FantasyChocolateFactory_Popup");
        this.pickGame = this.mainPanel.pick_game_node.getComponent("FantasyChocolateFactory_PickGame");
        this.bubbleGame = this.mainPanel.bubble_game_node.getComponent("FantasyChocolateFactory_BubbuleGame");
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
  FantasyChocolateFactory_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1216n6hFRDSpxxvk9+Lq5V", "FantasyChocolateFactory_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.bubble_machine_node = this.slots.getChildByName("bubble_machine_node");
        this.popup_node = this.node.getChildByName("popup_node");
        this.pick_game_node = this.node.getChildByName("pick_game_node");
        this.bubble_game_node = this.slots.getChildByName("bubble_game_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        SlotsFacade.soundMgr.playEffect("transition");
        var spine = this.transition_node.getChildByName("spine_1").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2be06bwaq5ELIJ21tmOd5LY", "FantasyChocolateFactory_PickGame");
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
    var BubbleCfg = {
      width: 160,
      height: 160,
      speed: 200,
      cdTime: 1.8
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        free_cnt_count: cc.Node,
        pick_cnt_count: cc.Node,
        template_item_add_free: cc.Node,
        template_item_add_cnt: cc.Node,
        bubble_item: cc.Node,
        bubble_panel: cc.Node,
        cnt_ani_panel: cc.Node,
        _callBack: null,
        _data: null,
        _bubbleItems: null
      },
      start: function start() {
        this.reset();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onMsg, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onMsg, false, this);
      },
      sendMsg: function sendMsg() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData._gameId;
        req.data = {
          rtype: 1
        };
        cc.vv.NetManager.send(req);
      },
      onMsg: function onMsg(msg) {
        if (200 == msg.code && 1 == msg.data.rtype) {
          var freeInfo = msg.data.freeInfo;
          var deskInfo = SlotsFacade.dm.getDeskInfo();
          deskInfo.restFreeCount += freeInfo.freeCnt;
          deskInfo.allFreeCount += freeInfo.freeCnt;
          this.showResult(freeInfo.freeCnt);
        }
      },
      showResult: function showResult(cnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return SlotsFacade.popup.showWinFreeCnt(cnt);

             case 2:
              deskInfo = SlotsFacade.dm.getDeskInfo();
              SlotsFacade.bottomCmp.ShowFreeModel(true, deskInfo.allFreeCount - deskInfo.restFreeCount, deskInfo.allFreeCount);
              _this.exit();

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      reset: function reset() {
        this.bubble_panel.removeAllChildren(true);
        this.cnt_ani_panel.removeAllChildren(true);
        this._data = {
          freeCnt: 0,
          pickedCnt: 0,
          pickTotalCnt: 0,
          state: 0,
          restCdTime: 0,
          serverPickData: null
        };
        this._bubbleItems = [];
        var pickData = SlotsFacade.dm.bonusData;
        if (pickData) {
          this._data.serverPickData = Global.copy(pickData);
          this._data.pickTotalCnt = this._data.serverPickData.initPick;
        }
        var freeCntLabel = this.free_cnt_count.getChildByName("label").getComponent(cc.Label);
        freeCntLabel.string = this._data.freeCnt;
        var pickCntLabel = this.pick_cnt_count.getChildByName("label").getComponent(cc.Label);
        pickCntLabel.string = "PICK  ".concat(this._data.pickedCnt, "  OF  ").concat(this._data.pickTotalCnt);
      },
      _addFreeCnt: function _addFreeCnt(cnt) {
        this._data.freeCnt += cnt;
        var label = this.free_cnt_count.getChildByName("label").getComponent(cc.Label);
        label.string = this._data.freeCnt + "";
        var spine = this.free_cnt_count.getChildByName("spine").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.clearTracks();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      _addPickCnt: function _addPickCnt(cnt) {
        this._data.pickTotalCnt += cnt;
        var label = this.pick_cnt_count.getChildByName("label").getComponent(cc.Label);
        label.string = "PICK  ".concat(this._data.pickedCnt, "  OF  ").concat(this._data.pickTotalCnt);
        var spine = this.pick_cnt_count.getChildByName("spine").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.clearTracks();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      enter: function enter(callBack, isReconect) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._callBack = callBack;
              _this2.reset();
              if (isReconect) {
                _context2.next = 6;
                break;
              }
              SlotsFacade.mainPanel.showSceneTransition();
              _context2.next = 6;
              return SlotsFacade.delayTime(2);

             case 6:
              SlotsFacade.soundMgr.playBgm("ngbgm");
              _this2.panel.active = true;
              _this2.panel.opacity = 255;
              _context2.next = 11;
              return SlotsFacade.popup.showStartPick();

             case 11:
              _this2._data.state = 1;

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      generateBubble: function generateBubble() {
        this._data.restCdTime = BubbleCfg.cdTime;
        var len = 4;
        var panelWidth = this.bubble_panel.width;
        var height = 2 * BubbleCfg.height;
        var width = this.bubble_panel.width / len;
        var diffW = width - BubbleCfg.width;
        var diffH = height - BubbleCfg.height;
        for (var i = 0; i < len; i++) {
          var item = cc.instantiate(this.bubble_item);
          item.active = true;
          item.isAlive = true;
          item.parent = this.bubble_panel;
          item.x = -panelWidth / 2 + i * width + BubbleCfg.width / 2 + Math.random() * diffW;
          item.y = -height + BubbleCfg.height / 2 + Math.random() * diffH;
          var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation0" + [ 1, 2 ][Math.floor(2 * Math.random())], true);
          item.on(cc.Node.EventType.TOUCH_START, this.touchBubbleHandler.bind(this), this);
          this._bubbleItems.push(item);
        }
      },
      touchBubbleHandler: function touchBubbleHandler(evt) {
        if (1 != this._data.state) return;
        if (this._data.serverPickData.finalResult.length < 1) return;
        var item = evt.target;
        if (!item.isAlive) return;
        item.isAlive = false;
        SlotsFacade.soundMgr.playEffect("bubble_click");
        this._data.pickedCnt++;
        var label = this.pick_cnt_count.getChildByName("label").getComponent(cc.Label);
        label.string = "PICK  ".concat(this._data.pickedCnt, "  OF  ").concat(this._data.pickTotalCnt);
        for (var i = 0; i < this._bubbleItems.length; i++) if (item == this._bubbleItems[i]) {
          this._bubbleItems.splice(i, 1);
          break;
        }
        var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, "animation03", false);
        spine.setCompleteListener(function() {
          spine.node.removeFromParent(true);
        });
        var vo = this._data.serverPickData.finalResult.shift();
        var startPos = cc.v2(item.x, item.y);
        var endP = [ this.free_cnt_count, this.pick_cnt_count ][vo.type - 1].convertToWorldSpaceAR(cc.v2(0, 0));
        endP = this.cnt_ani_panel.convertToNodeSpaceAR(endP);
        this.processReward(vo, startPos, endP);
      },
      processReward: function processReward(vo, startP, endP) {
        var _this3 = this;
        var node = cc.instantiate([ this.template_item_add_free, this.template_item_add_cnt ][vo.type - 1]);
        node.getChildByName("label").getComponent(cc.Label).string = "+" + vo.cnt;
        node.active = true;
        node.parent = this.cnt_ani_panel;
        node.x = startP.x;
        node.y = startP.y;
        cc.tween(node).to(.5, {
          x: endP.x,
          y: endP.y
        }).call(function() {
          node.removeFromParent();
          1 == vo.type ? _this3._addFreeCnt(vo.cnt) : _this3._addPickCnt(vo.cnt);
          node.removeFromParent(true);
          _this3._data.serverPickData.finalResult.length < 1 && _this3.pickComplete();
        }).start();
      },
      pickComplete: function pickComplete() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!(2 == _this4._data.state)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              _this4._data.state = 2;
              _this4.clearBubble();
              _context3.next = 6;
              return SlotsFacade.delayTime(1);

             case 6:
              _this4.sendMsg();

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      destroyABubble: function destroyABubble(item) {
        if (!item) return;
        if (item.parent) {
          item.off(cc.Node.EventType.TOUCH_START, this.touchBubbleHandler.bind(this), this);
          item.removeFromParent(true);
        }
      },
      clearBubble: function clearBubble() {
        var _this5 = this;
        this._bubbleItems.forEach(function(element) {
          _this5.destroyABubble(element);
        });
      },
      exit: function exit() {
        var _this6 = this;
        cc.tween(this.panel).to(.5, {
          opacity: 0
        }).call(function() {
          _this6.panel.active = false;
          _this6._callBack && _this6._callBack();
        }).start();
      },
      update: function update(dt) {
        if (!this._data || 1 != this._data.state) return;
        this._data.restCdTime -= dt;
        this._data.restCdTime <= 0 && this.generateBubble();
        var dis = BubbleCfg.speed * dt;
        for (var i = 0; i < this._bubbleItems.length; i++) {
          var item = this._bubbleItems[i];
          if (item.y > this.bubble_panel.height + BubbleCfg.height) {
            this._bubbleItems.splice(i, 1);
            item.removeFromParent(true);
            i--;
          } else item.y += dis;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95ca7mDRTFERqdo0IHeWvTW", "FantasyChocolateFactory_Popup");
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
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
      },
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showWinFreeCoin: function showWinFreeCoin(goldNumb) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, label;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 0;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, Math.floor(goldNumb / 1e3));
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              _context.next = 12;
              return new Promise(function(res) {
                var okBtn = panel.getChildByName("btn_ok");
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("free_dialog_collect_click");
                  okBtn.stopAllActions();
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
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("frame_pickCollect");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent(cc.Label).string = cnt + "";
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context2.next = 9;
              return SlotsFacade.delayTime(.5);

             case 9:
              _context2.next = 11;
              return new Promise(function(res) {
                cc.tween(panel).delay(2).call(function() {
                  SlotsFacade.soundMgr.playEffect("frame_out");
                }).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this2.showBg(false);
                  panel.active = false;
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  res();
                }).start();
              });

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinJPCoin: function showWinJPCoin(jpType, goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, iconIndexCfg, label;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("popup_jp_window");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              iconIndexCfg = {
                1: 0,
                2: 0,
                3: 1,
                4: 2
              };
              panel.getChildByName("jp_type_label").getComponent("ImgSwitchCmp").setIndex(iconIndexCfg[jpType + ""]);
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context3.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
              _context3.next = 14;
              return new Promise(function(res) {
                var okBtn = panel.getChildByName("btn_ok");
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  SlotsFacade.soundMgr.playEffect("frame_out");
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
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 14:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showStartPick: function showStartPick() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_bonus_start");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context4.next = 7;
              return SlotsFacade.delayTime(.5);

             case 7:
              _context4.next = 9;
              return new Promise(function(res) {
                var okBtn = panel.getChildByName("btn_ok");
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("frame_out");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this4.showBg(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1ecdjeiCRHrYJQ9ssRUKhT", "FantasyChocolateFactory_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  FantasyChocolateFactory_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d60fdWrbRD07fBkB8fcSQt", "FantasyChocolateFactory_Slots");
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
      StartMove: function StartMove() {
        this._super();
        0 == SlotsFacade.dm.GetTotalFree() && SlotsFacade.soundMgr.playBgm();
        SlotsFacade.bubbleGame.showBubbleNode(true);
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
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fg_bell");
              indexs.forEach(function(element) {
                var item = _this.GetSymbolByIdx(element);
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
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this2 = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this2.GetSymbolByIdx(element));
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
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this._gameInfo) {
            SlotsFacade.bubbleGame.moveBubble();
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this3 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
        try {
          var _loop = function _loop() {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this3._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              if (reelCountOfID > 0 && remainingCount >= triggerCount) {
                stateInfo.isStop = true;
                stateInfo.symbolStopSound = "scatterSmart_stop_" + haveCount;
              }
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  FantasyChocolateFactory_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88f2eZFbiRFSJGNfetbjN6O", "FantasyChocolateFactory_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/FantasyChocolateFactory/",
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
        bgmName ? Global.SlotsSoundMgr.playBgm(bgmName) : Global.SlotsSoundMgr.playNormalBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("fgbgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  FantasyChocolateFactory_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2863FYN0lHF7ajOhmJUHix", "FantasyChocolateFactory_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        isEpic: false
      },
      changeToWild: function changeToWild() {
        var wildId = SlotsFacade.dm.getGameCfg().wildId;
        this.ShowById(wildId);
        this.playWinAnimation();
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "FantasyChocolateFactory_BubbuleGame", "FantasyChocolateFactory_Cfg", "FantasyChocolateFactory_FlowCtrl", "FantasyChocolateFactory_GameData", "FantasyChocolateFactory_Logic", "FantasyChocolateFactory_MainPanel", "FantasyChocolateFactory_PickGame", "FantasyChocolateFactory_Popup", "FantasyChocolateFactory_Reel", "FantasyChocolateFactory_Slots", "FantasyChocolateFactory_Sound", "FantasyChocolateFactory_symbol" ]);