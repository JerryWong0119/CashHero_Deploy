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
  RobinHood_BagBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59728DkFrpBianyUeueAYVV", "RobinHood_BagBonus");
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
    var CoinAniCfg = {
      1: {
        idleAni: "animation1",
        staticAni: "animation1",
        dynamicAni: "animation6"
      },
      2: {
        idleAni: "animation2",
        staticAni: "animation2",
        dynamicAni: "animation4"
      },
      3: {
        idleAni: "animation3",
        staticAni: "animation3",
        dynamicAni: "animation5"
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        spine_coin: sp.Skeleton,
        spine_idle: sp.Skeleton,
        spine_win: sp.Skeleton,
        spine_collect_end: sp.Skeleton,
        collect_item_template: cc.Node,
        win_dialog: cc.Node,
        spineBottom: sp.Skeleton
      },
      onLoad: function onLoad() {},
      start: function start() {
        this._bottomLabel = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
        var bottomPos = this._bottomLabel.convertToWorldSpaceAR(cc.v2(0, 0));
        bottomPos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(bottomPos);
        this.spineBottom.node.position = bottomPos;
        this._setStep(this._getBelleBagLevel(), false);
      },
      _setStep: function _setStep(step, ani) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var aniCfg;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              step = step || 1;
              aniCfg = CoinAniCfg[step.toString()];
              _this.spine_idle.setAnimation(0, aniCfg.idleAni, true);
              _this.spine_coin.node.active = true;
              if (!ani) {
                _context.next = 13;
                break;
              }
              if (!(_this.spine_coin.animation != aniCfg.staticAni)) {
                _context.next = 11;
                break;
              }
              SlotsFacade.soundMgr.playEffect("bag_up");
              _this.spine_coin.setAnimation(0, aniCfg.dynamicAni, false);
              _this.spine_coin.addAnimation(0, aniCfg.staticAni, false);
              _context.next = 11;
              return new Promise(function(res) {
                _this.spine_coin.setCompleteListener(function() {
                  _this.spine_coin.setCompleteListener(null);
                  res();
                });
              });

             case 11:
              _context.next = 14;
              break;

             case 13:
              _this.spine_coin.setAnimation(0, aniCfg.staticAni, false);

             case 14:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      collectEnergy: function collectEnergy() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var belleBag, topNode, endPos, _loop, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              belleBag = SlotsFacade.dm.belleBag;
              if (!(!belleBag.wildCols || belleBag.wildCols.length < 1)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              SlotsFacade.slots.resetAllSymbol();
              SlotsFacade.soundMgr.playEffect("bag_collect");
              topNode = SlotsFacade.mainPanel.top_node;
              endPos = _this2.node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = topNode.convertToNodeSpaceAR(endPos);
              _loop = function _loop(i) {
                var idx = belleBag.wildCols[i];
                var startPos = SlotsFacade.slots.getIdxGlobalPos(idx + 5);
                startPos = topNode.convertToNodeSpaceAR(startPos);
                var spine = cc.instantiate(_this2.collect_item_template).getComponent(sp.Skeleton);
                spine.node.parent = topNode;
                spine.node.position = startPos;
                spine.node.active = true;
                spine.setAnimation(0, "animation", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.removeFromParent(true);
                });
                cc.tween(spine.node).delay(.6).to(.6, {
                  x: endPos.x,
                  y: endPos.y
                }).call(function() {
                  _this2.spine_collect_end.node.active = true;
                  _this2.spine_collect_end.setAnimation(0, "animation", false);
                }).start();
              };
              for (i = 0; i < belleBag.wildCols.length; i++) _loop(i);
              _context2.next = 12;
              return SlotsFacade.delayTime(1.6);

             case 12:
              _this2.spine_collect_end.node.active = false;
              _context2.next = 15;
              return _this2._setStep(_this2._getBelleBagLevel(), true);

             case 15:
              _context2.next = 17;
              return _this2._collectCoin();

             case 17:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _getBelleBagLevel: function _getBelleBagLevel() {
        var belleBag = SlotsFacade.dm.belleBag;
        var percent = belleBag.totalCnt / belleBag.maxCnt;
        return percent < .1 ? 1 : percent < .5 ? 2 : 3;
      },
      _collectCoin: function _collectCoin() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var belleBag, bg, label, spine, labelCopy, startPos, endPos, startCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              belleBag = SlotsFacade.dm.belleBag;
              if (!(belleBag.totalCnt < belleBag.maxCnt)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("bag_roll");
              _this3.spine_win.node.active = true;
              _this3.win_dialog.active = true;
              bg = _this3.win_dialog.getChildByName("bg");
              bg.active = true;
              label = _this3.win_dialog.getChildByName("label").getComponent("LabelRollCmp");
              label.node.active = true;
              label.node.scale = .3;
              label.node.opacity = 150;
              label.startRoll(0, belleBag.totalCoin, 3);
              cc.tween(label.node).to(3, {
                scale: 1.2,
                opacity: 255
              }).to(.3, {
                scale: 1
              }, {
                easing: "backIn"
              }).start();
              _context3.next = 16;
              return SlotsFacade.delayTime(3);

             case 16:
              _this3.spine_win.node.active = false;
              spine = _this3.win_dialog.getChildByName("spine").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "animation1", false);
              spine.addAnimation(0, "animation2", true);
              _context3.next = 23;
              return SlotsFacade.delayTime(2);

             case 23:
              spine.setAnimation(0, "animation3", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
                _this3.win_dialog.active = false;
              });
              label.node.active = false;
              SlotsFacade.soundMgr.playEffect("bag_footer");
              labelCopy = cc.instantiate(label.node);
              labelCopy.active = true;
              labelCopy.parent = SlotsFacade.mainPanel.top_node;
              startPos = label.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(startPos);
              labelCopy.position = startPos;
              endPos = _this3.spineBottom.node.position;
              cc.tween(labelCopy).to(1, {
                scale: .3,
                x: endPos.x,
                y: endPos.y
              }, {
                easing: "backIn"
              }).call(function() {
                _this3.spineBottom.node.active = true;
                _this3.spineBottom.setAnimation(0, "animation", false);
                labelCopy.removeFromParent(true);
              }).start();
              startCoin = SlotsFacade.dm.GetGameWin() - belleBag.totalCoin;
              _context3.next = 38;
              return new Promise(function(res) {
                Global.doRoallNumEff(_this3._bottomLabel, startCoin, startCoin + belleBag.totalCoin, .3, res, null, 0, true);
              });

             case 38:
              _this3._setStep(1, true);

             case 39:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      show: function show() {
        this.bg.active = true;
        this.node.active = true;
      },
      hide: function hide() {
        this.bg.active = false;
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_Bonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12b83Acwq1DXYNIEe8u3jGn", "RobinHood_Bonus");
    "use strict";
    var _properties;
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
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    cc.Class({
      extends: cc.Component,
      properties: (_properties = {
        panel: cc.Node,
        reel1_mask: cc.Node,
        border_top: cc.Node,
        border_bottom: cc.Node
      }, _defineProperty(_properties, "border_top", cc.Node), _defineProperty(_properties, "spine_bonus", sp.Skeleton), 
      _defineProperty(_properties, "spine_kuang", sp.Skeleton), _defineProperty(_properties, "spine_reel1_kuang", sp.Skeleton), 
      _defineProperty(_properties, "spine_fire", sp.Skeleton), _defineProperty(_properties, "spine_collect_coin", sp.Skeleton), 
      _defineProperty(_properties, "spine_top", sp.Skeleton), _defineProperty(_properties, "spine_border", sp.Skeleton), 
      _defineProperty(_properties, "spineBottom", sp.Skeleton), _defineProperty(_properties, "spine_bonus_pre", sp.Skeleton), 
      _defineProperty(_properties, "_bottomLabel", cc.Node), _defineProperty(_properties, "_isEnter", false), 
      _defineProperty(_properties, "_isNormal", false), _properties),
      onLoad: function onLoad() {},
      start: function start() {
        this._bottomLabel = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
        var bottomPos = this._bottomLabel.convertToWorldSpaceAR(cc.v2(0, 0));
        bottomPos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(bottomPos);
        this.spineBottom.node.position = bottomPos;
        this.spine_collect_coin.node.parent = SlotsFacade.mainPanel.top_node;
      },
      enter: function enter(isNormal) {
        isNormal = isNormal || false;
        this._isNormal = isNormal;
        this._isEnter = true;
        if (isNormal) ; else {
          this.showBorder();
          this.to3RowState(false);
        }
      },
      exit: function exit() {
        this._isEnter = false;
        if (this._isNormal) ; else {
          SlotsFacade.dm.triggerBelleBonusCoin = 0;
          this.hideBorder();
        }
      },
      toWheelFreeState: function toWheelFreeState() {
        this.panel.height = 620;
        this.reel1_mask.height = 600;
      },
      toNormalState: function toNormalState() {
        this.panel.height = 382;
        this.reel1_mask.height = 362;
      },
      to3RowState: function to3RowState(isAni, height) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              height = height || 430;
              if (!isAni) {
                _context.next = 9;
                break;
              }
              _this._hideSpineBonus();
              SlotsFacade.soundMgr.playEffect("bonus_end");
              cc.tween(_this.panel).to(.9, {
                height: height
              }).call(function() {
                SlotsFacade.character.actionSeat();
              }).start();
              _context.next = 7;
              return SlotsFacade.delayTime(.9);

             case 7:
              _context.next = 10;
              break;

             case 9:
              _this.panel.height = height;

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      to6RowState: function to6RowState(isAni, height) {
        var _this2 = this;
        height = height || 740;
        isAni ? cc.tween(this.panel).call(function() {
          SlotsFacade.character.actionDisappear();
          _this2._showSpineBonus();
        }).delay(2).call(function() {
          _this2.spine_top.node.active = true;
          _this2.spine_top.setAnimation(0, "animation", false);
        }).delay(.6).call(function() {
          SlotsFacade.soundMgr.playEffect("reel_up");
          _this2.spine_fire.node.active = true;
          _this2.spine_fire.setAnimation(0, "animation", true);
          _this2.spine_border.node.active = true;
          _this2.spine_border.setAnimation(0, "animation", true);
        }).to(1.5, {
          height: height
        }).call(function() {
          _this2.spine_fire.node.active = false;
          _this2.spine_top.node.active = false;
          _this2.spine_border.node.active = false;
          _this2.showReelBorder(10);
        }).start() : this.panel.height = height;
      },
      showBorder: function showBorder() {
        this.border_bottom.active = true;
        this.border_top.active = true;
        this.spine_reel1_kuang.node.active = true;
      },
      hideBorder: function hideBorder() {
        this.border_bottom.active = false;
        this.border_top.active = false;
        this.spine_reel1_kuang.node.active = false;
        this.spine_bonus.node.active = false;
      },
      showReelBorder: function showReelBorder(idx) {
        var row = 6;
        this._isNormal && (row = 3);
        if (idx >= 10 && idx <= 13) {
          var aniName = "animation".concat(row, "_").concat(14 - idx);
          this.spine_kuang.node.active = true;
          this.spine_kuang.setAnimation(0, aniName, true);
        } else this.spine_kuang.node.active = false;
        idx >= 10 && idx < 14 && SlotsFacade.soundMgr.playEffect("bonus_active".concat(idx % 10 + 1));
        idx > 10 && idx <= 14 && SlotsFacade.soundMgr.playEffect("coin_land".concat(idx % 10));
        if (10 == idx) {
          var reels = SlotsFacade.slots._reels;
          var _iterator = _createForOfIteratorHelper(reels), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var r = _step.value;
              var _iterator2 = _createForOfIteratorHelper(r._symbols), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var s = _step2.value;
                  s.setBonusState(true);
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
      },
      reelSpinEnd: function reelSpinEnd(colIdx) {
        var _this3 = this;
        if (!this._isEnter) return;
        10 == colIdx ? this._isNormal ? cc.tween(this.panel).call(function() {
          _this3.spine_border.node.active = true;
          _this3.spine_border.setAnimation(0, "animation", true);
          _this3._showSpineBonus();
          SlotsFacade.character.actionDisappear();
        }).delay(2).call(function() {
          _this3.spine_border.node.active = false;
          _this3.showReelBorder(10);
        }).start() : SlotsFacade.dm.getBonusInfo() && this.to6RowState(true) : (this._isNormal || SlotsFacade.dm.getBonusInfo()) && this.showReelBorder(colIdx);
      },
      _showSpineBonus: function _showSpineBonus() {
        SlotsFacade.soundMgr.playEffect("bonus_land");
        this.spine_bonus.node.active = true;
        this.spine_bonus.node.opacity = 255;
        this.spine_bonus.setAnimation(0, "animation1", false);
        this.spine_bonus.addAnimation(0, "animation2", true);
      },
      _hideSpineBonus: function _hideSpineBonus() {
        var _this4 = this;
        if (!this.spine_bonus.node.active) return;
        this.spine_bonus.setAnimation(0, "animation5", false);
        cc.tween(this.spine_bonus.node).delay(.7).to(.2, {
          opacity: 0
        }).call(function() {
          _this4.spine_bonus.node.active = false;
        }).start();
      },
      startMove: function startMove() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!_this5._isEnter) {
                _context2.next = 5;
                break;
              }
              _context2.next = 3;
              return _this5.to3RowState(true);

             case 3:
              _context2.next = 6;
              break;

             case 5:
              if (_this5.spine_bonus.node.active) {
                _this5._hideSpineBonus();
                SlotsFacade.character.actionSeat();
              }

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSpinMsg: function onSpinMsg() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this6._isEnter) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              if (!_this6._isNormal) {
                _context3.next = 13;
                break;
              }
              SlotsFacade.soundMgr.playEffect("active_woman");
              SlotsFacade.character.actionShine();
              _this6.spine_bonus_pre.node.active = true;
              _this6.spine_bonus_pre.setAnimation(0, "animation2", false);
              _context3.next = 9;
              return new Promise(function(res) {
                _this6.spine_bonus_pre.setCompleteListener(function() {
                  _this6.spine_bonus_pre.setCompleteListener(null);
                  _this6.spine_bonus_pre.node.active = false;
                  res();
                });
              });

             case 9:
              _context3.next = 11;
              return SlotsFacade.delayTime(.5);

             case 11:
              _context3.next = 15;
              break;

             case 13:
              _context3.next = 15;
              return SlotsFacade.delayTime(1);

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (_this7._isEnter) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              if (!_this7._isNormal) {
                _context4.next = 10;
                break;
              }
              _context4.next = 5;
              return _this7.extendBonus();

             case 5:
              _context4.next = 7;
              return _this7.settlement();

             case 7:
              _this7.exit();
              _context4.next = 15;
              break;

             case 10:
              if (!SlotsFacade.dm.getBonusInfo()) {
                _context4.next = 15;
                break;
              }
              _context4.next = 13;
              return _this7.extendBonus();

             case 13:
              _context4.next = 15;
              return _this7.settlement();

             case 15:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      extendBonus: function extendBonus() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var bonusInfo, aniName, extraItems, extraColArr, _iterator3, _step3, _i, col, i, colArr, _iterator4, _step4, item, symbol, allBonusItem, _iterator5, _step5, _item, _symbol;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getBonusInfo();
              aniName = "";
              aniName = _this8._isNormal ? "animation3" : "animation4";
              _this8.spine_bonus.setAnimation(0, aniName, false);
              _this8.spine_bonus.addAnimation(0, "animation2", true);
              extraItems = bonusInfo.extraItems;
              extraColArr = [ [], [], [], [], [] ];
              _iterator3 = _createForOfIteratorHelper(extraItems);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  _i = _step3.value;
                  col = (_i.idx - 1) % 5;
                  extraColArr[col].push(_i);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              i = 0;

             case 10:
              if (!(i < extraColArr.length)) {
                _context5.next = 20;
                break;
              }
              colArr = extraColArr[i];
              _iterator4 = _createForOfIteratorHelper(colArr);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  item = _step4.value;
                  symbol = SlotsFacade.slots.GetSymbolByIdx(item.idx);
                  symbol.changeToBonusSymbol(item.coin);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              colArr.length > 0 && SlotsFacade.soundMgr.playEffect("bonus_fire");
              _context5.next = 17;
              return SlotsFacade.delayTime(.2);

             case 17:
              i++;
              _context5.next = 10;
              break;

             case 20:
              _context5.next = 22;
              return SlotsFacade.delayTime(.5);

             case 22:
              allBonusItem = bonusInfo.items.concat(bonusInfo.extraItems);
              _iterator5 = _createForOfIteratorHelper(allBonusItem);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  _item = _step5.value;
                  _symbol = SlotsFacade.slots.GetSymbolByIdx(_item.idx);
                  _symbol.playTriggerAnimation();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              _context5.next = 27;
              return SlotsFacade.delayTime(.6);

             case 27:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      settlement: function settlement() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var bonusInfo, allBonusItem, startCoin, sum, _iterator6, _step6, _loop;
          return regeneratorRuntime.wrap(function _callee6$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getBonusInfo();
              allBonusItem = bonusInfo.items.concat(bonusInfo.extraItems);
              allBonusItem.sort(function(a, b) {
                var colA = (a.idx - 1) % 5;
                var colB = (b.idx - 1) % 5;
                return colA - colB == 0 ? a.idx - b.idx : colA - colB;
              });
              _this9.spine_collect_coin.node.active = true;
              _this9._bottomLabel.active = true;
              startCoin = 0;
              sum = 0;
              if (!_this9._isNormal) {
                startCoin = cc.vv.gameData.GetGameTotalFreeWin();
                sum = startCoin - bonusInfo.winCoin;
              }
              _this9.spineBottom.node.position = _this9.spineBottom.node.parent.convertToNodeSpaceAR(cc.vv.gameData.GetBottomScript().getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
              _iterator6 = _createForOfIteratorHelper(allBonusItem);
              _context7.prev = 10;
              _loop = regeneratorRuntime.mark(function _loop() {
                var item, symbol, val, pos, aniName;
                return regeneratorRuntime.wrap(function _loop$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    item = _step6.value;
                    SlotsFacade.soundMgr.playEffect("coin_collect");
                    symbol = SlotsFacade.slots.GetSymbolByIdx(item.idx);
                    symbol.playBonusLight();
                    val = item.coin;
                    pos = SlotsFacade.slots.getIdxGlobalPos(item.idx);
                    pos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(pos);
                    aniName = "animation".concat((item.idx - 1) % 5, "_").concat(Math.ceil((item.idx + (_this9._isNormal ? 15 : 0)) / 5));
                    _this9.spine_collect_coin.node.position = pos;
                    _this9.spine_collect_coin.setAnimation(0, aniName, false);
                    _context6.next = 12;
                    return SlotsFacade.delayTime(.5);

                   case 12:
                    _this9.spineBottom.node.active = true;
                    _this9.spineBottom.setAnimation(0, "animation", false);
                    _context6.next = 16;
                    return new Promise(function(res) {
                      Global.doRoallNumEff(_this9._bottomLabel, sum, sum + val, .3, res, null, 0, true);
                    });

                   case 16:
                    sum += val;

                   case 17:
                   case "end":
                    return _context6.stop();
                  }
                }, _loop);
              });
              _iterator6.s();

             case 13:
              if ((_step6 = _iterator6.n()).done) {
                _context7.next = 17;
                break;
              }
              return _context7.delegateYield(_loop(), "t0", 15);

             case 15:
              _context7.next = 13;
              break;

             case 17:
              _context7.next = 22;
              break;

             case 19:
              _context7.prev = 19;
              _context7.t1 = _context7["catch"](10);
              _iterator6.e(_context7.t1);

             case 22:
              _context7.prev = 22;
              _iterator6.f();
              return _context7.finish(22);

             case 25:
              _this9.spine_collect_coin.node.active = false;

             case 26:
             case "end":
              return _context7.stop();
            }
          }, _callee6, null, [ [ 10, 19, 22, 25 ] ]);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bde3cCyaJLPKsc0tRWq3MM", "RobinHood_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      SendSpinReq: function SendSpinReq() {
        this.ShowBtnsByState("moveing_1");
        if (SlotsFacade.dm.belleBonus && SlotsFacade.dm.belleBonus.restCnt > 0) SlotsFacade.dm.reqSubGame({
          rtype: 3
        }); else {
          var betIdx = cc.vv.gameData.GetBetIdx();
          cc.vv.gameData.ReqSpin(betIdx);
        }
        if (this._needRefushFreeTime) {
          this._needRefushFreeTime = null;
          var restFree = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.SetFreeTime(restFree - 1);
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this.ShowFreeModel(true, total - rest, total);
        }
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.StartMove();
        this._ShowBetProTip(false);
        this.ShowAutoSelect(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  RobinHood_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37310SLIGlBypoU8Qw7sr5p", "RobinHood_Cfg");
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
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "animation2",
          zIndex: 300,
          loop: true
        },
        stop_ani: {
          name: "animation4",
          zIndex: 400
        },
        idle_ani: {
          name: "animation3",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation6",
          zIndex: 300,
          loop: false
        },
        idle_ani: {
          name: "animation4"
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
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      blankId: 20,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "RobinHood_Bottom",
        Slots: "RobinHood_Slots",
        Reels: "RobinHood_Reel",
        Symbols: "RobinHood_symbol"
      },
      col: 15,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 120
      },
      helpItems: [ "games/RobinHood/prefab/LMSlots_Help_item1", "games/RobinHood/prefab/LMSlots_Help_item2", "games/RobinHood/prefab/LMSlots_Help_item3", "games/RobinHood/prefab/LMSlots_Help_item4", "games/RobinHood/prefab/LMSlots_Help_item5", "games/RobinHood/prefab/LMSlots_Help_item6" ],
      randomSymbols: [ 1, 3, 5, 7, 9, 11, 4, 6, 8, 10, 12, 1, 4, 7, 10, 5, 8, 11, 3, 6, 9, 12, 1, 5, 9, 6, 10, 3, 7, 11 ],
      randomSkipWildSymbols: [ 3, 5, 7, 9, 11, 4, 6, 8, 10, 12, 4, 7, 10, 5, 8, 11, 3, 6, 9, 12, 5, 9, 6, 10, 3, 7, 11 ],
      randomSkipBonusSymbols: [ 1, 5, 7, 9, 11, 4, 6, 8, 10, 12, 1, 4, 7, 10, 5, 8, 11, 6, 9, 12, 1, 5, 9, 6, 10, 7, 11 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 2,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 0, 1, 0, 1 ],
        antiNode: "node_anti",
        path: "games/RobinHood/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_land1",
        antSound: "reel_active",
        antSpeed: 2400
      } ],
      normalBgm: "base_bgm"
    };
    Cfg.isWild = function(id) {
      return 1 == id;
    };
    Cfg.isEnergyId = function(id) {
      return 4 == id;
    };
    Cfg.MapType = {
      SevenSlot: 1,
      RandomWild: 2,
      MultSlot: 3,
      MovingWild: 4,
      StickyWild: 5
    };
    Cfg.TheFinalHurdleID = 33;
    Cfg.mapCfg = {
      1: {
        id: 1,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 1,
        iconAni: "animation1"
      },
      2: {
        id: 2,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 1,
        iconAni: "animation1"
      },
      3: {
        id: 3,
        type: Cfg.MapType.RandomWild,
        iconAni: "animation1"
      },
      4: {
        id: 4,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 2,
        iconAni: "animation2"
      },
      5: {
        id: 5,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 2,
        iconAni: "animation2"
      },
      6: {
        id: 6,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 2,
        iconAni: "animation2"
      },
      7: {
        id: 7,
        type: Cfg.MapType.MultSlot,
        min: 2,
        max: 10,
        level: 1,
        iconAni: "animation2"
      },
      8: {
        id: 8,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 3,
        iconAni: "animation3"
      },
      9: {
        id: 9,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 3,
        iconAni: "animation3"
      },
      10: {
        id: 10,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 3,
        iconAni: "animation3"
      },
      11: {
        id: 11,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 3,
        iconAni: "animation3"
      },
      12: {
        id: 12,
        type: Cfg.MapType.MovingWild,
        iconAni: "animation3"
      },
      13: {
        id: 13,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 4,
        iconAni: "animation4"
      },
      14: {
        id: 14,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 4,
        iconAni: "animation4"
      },
      15: {
        id: 15,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 4,
        iconAni: "animation4"
      },
      16: {
        id: 16,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 4,
        iconAni: "animation4"
      },
      17: {
        id: 17,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 4,
        iconAni: "animation4"
      },
      18: {
        id: 18,
        type: Cfg.MapType.MultSlot,
        min: 5,
        max: 50,
        level: 2,
        iconAni: "animation4"
      },
      19: {
        id: 19,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      20: {
        id: 20,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      21: {
        id: 21,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      22: {
        id: 22,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      23: {
        id: 23,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      24: {
        id: 24,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 5,
        iconAni: "animation5"
      },
      25: {
        id: 25,
        type: Cfg.MapType.StickyWild,
        iconAni: "animation5"
      },
      26: {
        id: 26,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      27: {
        id: 27,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      28: {
        id: 28,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      29: {
        id: 29,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      30: {
        id: 30,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      31: {
        id: 31,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      32: {
        id: 32,
        type: Cfg.MapType.SevenSlot,
        iconIndex: 6,
        iconAni: "animation6"
      },
      33: {
        id: 33,
        type: Cfg.MapType.MultSlot,
        min: 10,
        max: 100,
        level: 3,
        iconAni: "animation6"
      }
    };
    Cfg.JackPot = {
      Mini: 0,
      Minor: 1,
      Major: 2,
      Grand: 3
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  RobinHood_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "578cfZ4io9MQZ2NXlWVG4PY", "RobinHood_Character");
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
        character: sp.Skeleton
      },
      onLoad: function onLoad() {
        this.character.setAnimation(0, "idle", true);
      },
      start: function start() {},
      toNormalState: function toNormalState() {
        this.node.x = -209;
        this.character.setAnimation(0, "idle", true);
      },
      toWheelFreeState: function toWheelFreeState() {
        this.node.x = -70;
      },
      actionSeat: function actionSeat(force) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              force = force || false;
              (force || "animation1" != _this.character.animation) && _this.character.setAnimation(0, "idle", true);

             case 2:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      actionDisappear: function actionDisappear() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.character.setAnimation(0, "skill", false);

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      actionExtraWilds: function actionExtraWilds(isExtra, delayTime) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wild_trigger");
              delayTime = delayTime || 4;
              _context3.next = 4;
              return SlotsFacade.delayTime(delayTime);

             case 4:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      actionShine: function actionShine() {},
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "029bfG8dU5DqIxWML1/bWs1", "RobinHood_CollectProgress");
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
        head: cc.Node,
        tail: cc.Node,
        progressBar: cc.Node,
        spine_collect_lock: sp.Skeleton,
        spine_full: sp.Skeleton,
        tips: cc.Node,
        item_template: cc.Node,
        _isOpen: false
      },
      onLoad: function onLoad() {
        this._initListener();
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this._init();
        });
      },
      _initListener: function _initListener() {
        var _this2 = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this2.showCollect(false);
        }, this);
        this.tail.on(cc.Node.EventType.TOUCH_END, this._onEnterHandler.bind(this), this);
        this.progressBar.on(cc.Node.EventType.TOUCH_END, function() {
          _this2._showTips();
          _this2._isOpen || _this2._openCollect();
        }, this);
      },
      _showTips: function _showTips() {
        var _this3 = this;
        if (this.tips.active) return;
        this.tips.active = true;
        this.tips.opacity = 0;
        cc.tween(this.tips).to(.5, {
          opacity: 255
        }).delay(2).to(.5, {
          opacity: 0
        }).call(function() {
          _this3.tips.active = false;
        }).start();
      },
      _init: function _init() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.showCollect(true);
        this._updateEnterBtnIcon();
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        if (SlotsFacade.dm.GetAutoModelTime() > 0) return;
        SlotsFacade.soundMgr.playEffect("click");
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.map.enterMap(true, function() {
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
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("collect_fly");
              endPos = _this4.head.getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this4.node.convertToNodeSpaceAR(v);
                var item = cc.instantiate(_this4.item_template);
                item.parent = _this4.node;
                item.position = pos;
                item.active = true;
                promiseArr.push(new Promise(function(res) {
                  cc.tween(item).to(.2, {
                    scale: 1.3
                  }).to(.4, {
                    x: endPos.x,
                    y: endPos.y,
                    scale: .6
                  }).call(function() {
                    item.removeFromParent();
                    res();
                  }).start();
                }));
              });
              _context.next = 6;
              return Promise.all(promiseArr);

             case 6:
              _this4._playHeadSpine();
              _this4.setProgress(percent, true);

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _playHeadSpine: function _playHeadSpine() {
        var spineEff = this.head.getChildByName("spine_effect").getComponent(sp.Skeleton);
        spineEff.node.active = true;
        spineEff.setAnimation(0, "animation", false);
        spineEff.setCompleteListener(function() {
          spineEff.setCompleteListener(null);
          spineEff.node.active = false;
        });
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (isInit) this.spine_collect_lock.node.active = false; else if (!this._isOpen) {
            this.spine_collect_lock.node.active = true;
            SlotsFacade.soundMgr.playEffect("collect_unlock");
            this.spine_collect_lock.setAnimation(0, "animation2", false);
            this._showTips();
          }
        } else if (isInit) {
          this.spine_collect_lock.node.active = true;
          this.spine_collect_lock.setAnimation(0, "animation3", false);
        } else if (this._isOpen) {
          this.spine_collect_lock.node.active = true;
          SlotsFacade.soundMgr.playEffect("collect_lock");
          this.spine_collect_lock.setAnimation(0, "animation1", false);
        }
        this._isOpen = boo;
      },
      playCollectComplete: function playCollectComplete() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("collect_full");
              _this5.spine_full.node.active = true;
              _this5.spine_full.setAnimation(0, "animation", false);
              _context2.next = 5;
              return new Promise(function(res) {
                _this5.spine_full.setCompleteListener(function() {
                  _this5.spine_full.setCompleteListener(null);
                  _this5.spine_full.node.active = false;
                  res();
                });
              });

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setProgress: function setProgress(percent, needTransform) {
        var w = this.progressBar.width;
        var toX = percent * w - w;
        var bar = this.progressBar.getChildByName("bar");
        if (needTransform) {
          var colectEffect = bar.getChildByName("effect").getComponent(sp.Skeleton);
          colectEffect.node.active = true;
          colectEffect.setAnimation(0, "animation", false);
          colectEffect.getComponent(sp.Skeleton).setCompleteListener(function() {
            colectEffect.active = false;
            colectEffect.getComponent(sp.Skeleton).setCompleteListener(null);
          });
          cc.tween(bar).to(.5, {
            x: toX
          }).start();
        } else {
          bar.x = toX;
          0 == percent && this._updateEnterBtnIcon();
        }
      },
      setEnterEnable: function setEnterEnable(boo) {},
      _updateEnterBtnIcon: function _updateEnterBtnIcon() {
        var energyData = SlotsFacade.dm.energyData;
        if (!energyData) return;
        var currId = energyData.currId;
        currId < 1 && (currId = 1);
        var mapItemCfg = SlotsFacade.dm.getGameCfg().mapCfg[currId.toString()];
        var spine = this.tail.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, mapItemCfg.iconAni, true);
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a4f2WVdUdKpK8GLBgAeKxL", "RobinHood_FlowCtrl");
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
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _this.enterNormalGame(true);
              _context.next = 4;
              return SlotsFacade.popup.showEnterTheme();

             case 4:
              _context.next = 6;
              return SlotsFacade.character.actionSeat(true);

             case 6:
              if (!(SlotsFacade.dm.energyData.state > 0)) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.enterCollectGame(true);

             case 9:
              if (!SlotsFacade.dm.wheelGame) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return _this.enterWheelGame(true);

             case 12:
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 20;
                break;
              }
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 20;
              return _this.enterFreeGame(true);

             case 20:
              1 != SlotsFacade.dm.energyData.state && SlotsFacade.slots.CanDoNextRound();

             case 21:
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
              SlotsFacade.bonusGame.startMove();

             case 2:
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
              SlotsFacade.dm.isTriggerNormalBonus() && SlotsFacade.bonusGame.enter(true);
              _context3.next = 5;
              return SlotsFacade.bonusGame.onSpinMsg();

             case 5:
              _context3.next = 7;
              return SlotsFacade.freeGame.onSpinMsg();

             case 7:
              SlotsFacade.slots._gameInfo = msg;
              cards = msg.resultCards;
              SlotsFacade.dm.mapFreeInfo && (cards = SlotsFacade.dm.mapFreeInfo.cards);
              SlotsFacade.slots.SetSlotsResult(cards);
              SlotsFacade.slots.SetReelStateInfo(cards);

             case 12:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this2.collectEnergy();

             case 2:
              _context4.next = 4;
              return SlotsFacade.wildGame.spinEnd();

             case 4:
              _context4.next = 6;
              return SlotsFacade.bonusGame.spinEnd();

             case 6:
              _context4.next = 8;
              return SlotsFacade.freeGame.spinEnd();

             case 8:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 14;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 14:
              _context4.next = 16;
              return _this2.collectBag();

             case 16:
              _context4.next = 18;
              return _this2.enterCollectGame();

             case 18:
              _context4.next = 20;
              return _this2.enterWheelGame();

             case 20:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 25;
                break;
              }
              _context4.next = 23;
              return _this2.enterFreeGame();

             case 23:
              _context4.next = 43;
              break;

             case 25:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 43;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.stopBgm();
              if (!(2 == SlotsFacade.dm.energyData.state)) {
                _context4.next = 35;
                break;
              }
              _context4.next = 31;
              return SlotsFacade.popup.showWinMapFreeGold(SlotsFacade.dm.getFreeWinCoin());

             case 31:
              _context4.next = 33;
              return SlotsFacade.mainPanel.showSceneTransition(3);

             case 33:
              _context4.next = 39;
              break;

             case 35:
              _context4.next = 37;
              return SlotsFacade.popup.showWinWheelFreeGold(SlotsFacade.dm.getFreeWinCoin(), !!SlotsFacade.dm.belleBonus);

             case 37:
              _context4.next = 39;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 39:
              SlotsFacade.slots.resetAllSymbol();
              SlotsFacade.slots.Resume();
              _context4.next = 43;
              return _this2.enterNormalGame();

             case 43:
              1 != SlotsFacade.dm.energyData.state && SlotsFacade.slots.CanDoNextRound();

             case 44:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var freeType, mapInfo, mapItem, total, rest;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              freeType = 1;
              mapInfo = SlotsFacade.dm.energyData;
              mapItem = SlotsFacade.dm.getGameCfg().mapCfg[mapInfo.currId + ""];
              2 == mapInfo.state && (freeType = mapItem.type);
              isReconnect || 1 == freeType && SlotsFacade.slots.Backup();
              SlotsFacade.mainPanel.showBg(2);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = 1 == freeType;
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              if (!(2 == mapInfo.state)) {
                _context5.next = 19;
                break;
              }
              SlotsFacade.slots.toMapFreeState();
              _context5.next = 16;
              return SlotsFacade.wildGame.enterWildGame();

             case 16:
              SlotsFacade.soundMgr.playBgm("map_bgm");
              _context5.next = 20;
              break;

             case 19:
              if (SlotsFacade.dm.belleBonus) {
                SlotsFacade.slots.toWheelBonusState();
                SlotsFacade.bonusGame.enter();
              } else {
                SlotsFacade.slots.toWheelFreeState();
                SlotsFacade.freeGame.enter();
                SlotsFacade.soundMgr.playBgm("free_bgm");
              }

             case 20:
              _context5.next = 22;
              return SlotsFacade.delayTime(.5);

             case 22:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterNormalGame: function enterNormalGame(reconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              reconnect = reconnect || false;
              SlotsFacade.collectProgress.setEnterEnable(true);
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.slots.toNormalState();
              reconnect || SlotsFacade.soundMgr.playBgm(null, true);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              SlotsFacade.wildGame.exitWildGame();
              SlotsFacade.bonusGame.exit();
              SlotsFacade.freeGame.exit();
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 14;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 14;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 14:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var progressData, items, posArr;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              progressData = SlotsFacade.dm.energyData.progressData;
              if (!(progressData && progressData.currCnt)) {
                _context7.next = 11;
                break;
              }
              items = SlotsFacade.slots.getSymbolsByServerIds(SlotsFacade.dm.getCollectSymbolIndexs());
              posArr = [];
              items.forEach(function(v) {
                posArr.push(v.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              });
              if (!(SlotsFacade.dm.getCollectPercent() >= 1)) {
                _context7.next = 10;
                break;
              }
              _context7.next = 8;
              return SlotsFacade.collectProgress.collectEnergy(posArr, SlotsFacade.dm.getCollectPercent());

             case 8:
              _context7.next = 11;
              break;

             case 10:
              SlotsFacade.collectProgress.collectEnergy(posArr, SlotsFacade.dm.getCollectPercent());

             case 11:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      collectBag: function collectBag() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _context8.next = 2;
              return SlotsFacade.bagGame.collectEnergy();

             case 2:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      enterCollectGame: function enterCollectGame(reconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var energyData, canEnter;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData;
              if (!(energyData.state > 0)) {
                _context9.next = 13;
                break;
              }
              canEnter = false;
              if (reconnect) 1 == energyData.state && (canEnter = true); else {
                2 == energyData.state && SlotsFacade.dm.isFistTriggerFree() && (canEnter = true);
                1 == energyData.state && (canEnter = true);
              }
              if (!canEnter) {
                _context9.next = 13;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (reconnect) {
                _context9.next = 11;
                break;
              }
              _context9.next = 11;
              return SlotsFacade.collectProgress.playCollectComplete();

             case 11:
              _context9.next = 13;
              return new Promise(function(res) {
                SlotsFacade.map.enterMap(false, res);
              });

             case 13:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      enterWheelGame: function enterWheelGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var ret, winCoin, totalCoin;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (!SlotsFacade.dm.wheelGame) {
                _context10.next = 14;
                break;
              }
              _context10.next = 3;
              return new Promise(function(res) {
                SlotsFacade.wheelGame.open(res, isReconnect);
              });

             case 3:
              ret = _context10.sent;
              if (!(3 == ret.type)) {
                _context10.next = 7;
                break;
              }
              _context10.next = 7;
              return SlotsFacade.popup.showWinWheelBag(ret.coin);

             case 7:
              winCoin = ret.coin;
              if (!(winCoin > 0)) {
                _context10.next = 14;
                break;
              }
              totalCoin = winCoin;
              SlotsFacade.dm.getSpinData() && (totalCoin += SlotsFacade.dm.GetGameWin());
              SlotsFacade.dm.AddCoin(winCoin);
              _context10.next = 14;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(winCoin, totalCoin, true, res);
              });

             case 14:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_Free: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eee33OwUutLJLRfYZS1mW8K", "RobinHood_Free");
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
        mask: cc.Node,
        frame_border: cc.Node,
        spine_border: sp.Skeleton,
        wild_node: cc.Node,
        _isEnter: false
      },
      onLoad: function onLoad() {
        this._symbolTemplate = SlotsFacade.dm.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplate.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
      },
      start: function start() {},
      enter: function enter() {
        this._isEnter = true;
        this.panel.active = true;
      },
      exit: function exit() {
        this._isEnter = false;
        this.panel.active = false;
      },
      onSpinMsg: function onSpinMsg() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var wildIdxArr, cards, cfg, i, needExtraWild, _i, symbol;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this._isEnter) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              wildIdxArr = [];
              cards = SlotsFacade.dm.getSpinData().resultCards;
              cfg = SlotsFacade.dm.getGameCfg();
              for (i = 0; i < cards.length; i++) cards[i] == cfg.wildId && wildIdxArr.push(i + 1);
              needExtraWild = wildIdxArr.length > 3;
              _context.next = 9;
              return SlotsFacade.character.actionExtraWilds(needExtraWild);

             case 9:
              if (needExtraWild) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return");

             case 11:
              _this.mask.active = true;
              _this.spine_border.node.active = true;
              Global.shakeNode(_this.mask, 5, .4, _this.mask.position);
              Global.shakeNode(_this.spine_border.node, 5, .4, _this.spine_border.node.position);
              _context.next = 17;
              return SlotsFacade.delayTime(.4);

             case 17:
              SlotsFacade.soundMgr.playEffect("wild_appear");
              _this.wild_node.active = true;
              for (_i = 0; _i < wildIdxArr.length; _i++) {
                symbol = _this.genAWildSymbol(wildIdxArr[_i]);
                symbol.playWildAppear();
              }
              _context.next = 22;
              return SlotsFacade.delayTime(.4);

             case 22:
              _this.mask.active = false;
              _this.spine_border.node.active = false;

             case 24:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      genAWildSymbol: function genAWildSymbol(idx) {
        var cfg = SlotsFacade.dm.getGameCfg();
        var node = cc.instantiate(this._symbolTemplate);
        node.parent = this.wild_node;
        var scp = node.addComponent(cfg.scripts.Symbols);
        scp.SetSymbolReelIdx(0);
        scp.Init(0, this.node);
        scp.ShowById(cfg.wildId);
        var pos = SlotsFacade.slots.getIdxGlobalPos(idx);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return scp;
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (_this2._isEnter) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              _this2._hideWild();

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _hideWild: function _hideWild() {
        this.wild_node.active = false;
        this.wild_node.removeAllChildren(true);
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "516152WkF5HubZ+PTVUAE1Z", "RobinHood_GameData");
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
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null,
        mapFreeInfo: null,
        wheelGame: null,
        belleBonus: null,
        triggerBelleBonusCoin: 0,
        belleBag: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.mapInfo;
        this.wheelGame = this._deskInfo.wheelGame;
        this.belleBonus = this._deskInfo.belleBonus;
        if (this.belleBonus) {
          this.SetTotalFree(5);
          this.SetFreeTime(this.belleBonus.restCnt);
        }
        this.belleBag = this._deskInfo.belleBag;
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
          this.energyData = msg.mapInfo;
          this.mapFreeInfo = this._processMapFreeData(msg.freeGameSlots);
          this.wheelGame = msg.wheelGame;
          this.belleBonus = msg.belleBonus;
          this.belleBonus || this._processBonusInfo(msg);
          msg.belleBag ? this.belleBag = msg.belleBag : this.belleBag && (this.belleBag.wildCols = null);
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
      getCollectPercent: function getCollectPercent() {
        if (!this.energyData || !this.energyData.progressData) return 0;
        var percent = this.energyData.progressData.totalCnt / this.energyData.progressData.needCnt;
        percent = Math.min(1, percent);
        percent = Math.max(0, percent);
        return percent;
      },
      getCollectSymbolIndexs: function getCollectSymbolIndexs() {
        var _this = this;
        var cards = this._gameInfo.resultCards;
        if (!cards || cards.length < 1) return [];
        var ret = [];
        cards.forEach(function(v, i) {
          _this.getGameCfg().isEnergyId(v) && ret.push(i + 1);
        });
        return ret;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
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
        2 === msg.data.rtype ? SlotsFacade.wheelGame.onMsg(msg) : 3 == msg.data.rtype && this._onBonusMsg(msg.data);
      },
      _processMapFreeData: function _processMapFreeData(freeGameSlots) {
        if (!freeGameSlots) return null;
        var ret = {
          cards: [],
          zjLuXian: [],
          randomWilds: [],
          multWilds: [],
          moveWilds: {
            currIdxs: [],
            randIdxs: []
          },
          stickyWilds: []
        };
        for (var i = 0; i < freeGameSlots.length; i++) {
          var item = freeGameSlots[i];
          ret.cards = ret.cards.concat(item.cards);
          var zjLuXian = item.zjLuXian;
          var _iterator = _createForOfIteratorHelper(zjLuXian), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var lx = _step.value;
              this.convertIdx(i, lx.indexs);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          ret.zjLuXian = ret.zjLuXian.concat(zjLuXian);
          if (item.randomWilds) {
            this.convertIdx(i, item.randomWilds.currIdxs);
            ret.randomWilds = ret.randomWilds.concat(item.randomWilds.currIdxs);
          }
          item.multWilds && ret.multWilds.push(item.multWilds.wildMult);
          if (item.moveWilds) {
            this.convertIdx(i, item.moveWilds.currIdxs);
            this.convertIdx(i, item.moveWilds.randIdxs);
            ret.moveWilds.currIdxs = ret.moveWilds.currIdxs.concat(item.moveWilds.currIdxs);
            ret.moveWilds.randIdxs = ret.moveWilds.randIdxs.concat(item.moveWilds.randIdxs);
          }
          if (item.stickyWilds) {
            this.convertIdx(i, item.stickyWilds.currIdxs);
            ret.stickyWilds = ret.stickyWilds.concat(item.stickyWilds.currIdxs);
          }
        }
        return ret;
      },
      convertIdx: function convertIdx(slotsIdx, cards) {
        for (var i = 0; i < cards.length; i++) cards[i] = 15 * slotsIdx + cards[i];
      },
      getZjLuXian: function getZjLuXian() {
        return this.mapFreeInfo ? this.mapFreeInfo.zjLuXian : this._gameInfo.zjLuXian;
      },
      _onBonusMsg: function _onBonusMsg(bonusMsg) {
        var msg = {
          gameid: 511,
          c: 44,
          code: 200,
          lastBetCoin: 0,
          wincoin: 0,
          freeCnt: 0,
          mults: null,
          coin: 0,
          allFreeCnt: 5,
          betcoin: 0,
          mapInfo: null,
          freeWinCoin: 0,
          zjLuXian: null,
          freeResult: {
            triFreeCnt: 1,
            freeInfo: []
          },
          resultCards: [],
          bonusInfo: {
            items: [],
            winCoin: 0,
            isTrigger: false,
            extraItems: []
          },
          belleBonus: null
        };
        var cards = [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 301, 20, 20, 20, 20, 301, 20, 20, 20, 20, 301, 20, 20, 20, 20 ];
        var zjLuXian = [];
        var cfg = this.getGameCfg();
        var bonusInfo = bonusMsg.belleBonus.bonusInfo;
        var slotInfo = bonusMsg.belleBonus.slotInfo;
        if (bonusInfo) {
          var _iterator2 = _createForOfIteratorHelper(bonusInfo.items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var i = _step2.value;
              var newIdx = i.idx + Math.ceil(i.idx / bonusInfo.col);
              cards[newIdx - 1] = cfg.bonusId;
              i.idx = newIdx;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _iterator3 = _createForOfIteratorHelper(bonusInfo.extraItems), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _i = _step3.value;
              var _newIdx = _i.idx + Math.ceil(_i.idx / bonusInfo.col);
              _i.idx = _newIdx;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (slotInfo) {
          zjLuXian = slotInfo.zjLuXian;
          var _iterator4 = _createForOfIteratorHelper(zjLuXian), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var lx = _step4.value;
              for (var _i3 = 0; _i3 < lx.indexs.length; _i3++) lx.indexs[_i3] += 15;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          for (var _i2 = 0; _i2 < slotInfo.cards.length; _i2++) cards[15 + _i2] = slotInfo.cards[_i2];
        }
        msg.coin = this.GetCoin();
        msg.freeWinCoin = bonusMsg.belleBonus.winCoin;
        msg.freeWinCoin += this.triggerBelleBonusCoin;
        bonusMsg.belleBonus.bonusInfo ? msg.wincoin = 0 : bonusMsg.belleBonus.slotInfo && (msg.wincoin = bonusMsg.belleBonus.slotInfo.winCoin);
        msg.allFreeCnt = 5;
        msg.freeCnt = bonusMsg.belleBonus.restCnt;
        msg.mapInfo = this.energyData;
        msg.mults = this._deskInfo.mults;
        msg.belleBonus = bonusMsg.belleBonus;
        msg.resultCards = cards;
        msg.zjLuXian = zjLuXian;
        this.OnRcvNetSpine(msg);
      },
      _processBonusInfo: function _processBonusInfo(msg) {
        var bonusInfo = msg.bonusInfo;
        if (!bonusInfo || !bonusInfo.isTrigger) return;
        msg.resultCards[0] = 301;
        msg.resultCards[5] = 301;
        msg.resultCards[10] = 301;
        var cfg = this.getGameCfg();
        var _iterator5 = _createForOfIteratorHelper(bonusInfo.items), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var i = _step5.value;
            msg.resultCards[i.idx - 1] = cfg.bonusId;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(bonusInfo.extraItems), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var _i4 = _step6.value;
            msg.resultCards[_i4.idx - 1] = cfg.blankId;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        msg.wincoin = bonusInfo.winCoin;
      },
      getBonusInfo: function getBonusInfo() {
        var ret = null;
        this.belleBonus ? ret = this.belleBonus.bonusInfo : this.isTriggerNormalBonus() && (ret = this.getSpinData().bonusInfo);
        return ret;
      },
      isTriggerNormalBonus: function isTriggerNormalBonus() {
        return this.getSpinData() && this.getSpinData().bonusInfo && this.getSpinData().bonusInfo.isTrigger;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  RobinHood_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "119460xYSZMca6vFr5y8ulZ", "RobinHood_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        var _this = this;
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("RobinHood_MainPanel");
        this.soundMgr = this.addComponent("RobinHood_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("RobinHood_FlowCtrl");
        this.popup = this.mainPanel.popup_node.addComponent("RobinHood_Popup");
        this.collectProgress = this.mainPanel.collect_progress.getComponent("RobinHood_CollectProgress");
        this.map = this.mainPanel.map_node.addComponent("RobinHood_Map");
        this.slots777 = this.mainPanel.slots777.getComponent("LMSlots_Subgame777");
        this.wildGame = this.mainPanel.wild_game.getComponent("RobinHood_WildGame");
        this.wheelGame = this.mainPanel.wheel_game_node.getComponent("RobinHood_WheelGame");
        this.character = this.mainPanel.character_node.getComponent("RobinHood_Character");
        this.bagGame = this.mainPanel.bag_bonus_node.getComponent("RobinHood_BagBonus");
        this.bonusGame = this.mainPanel.bonus_game_node.getComponent("RobinHood_Bonus");
        this.freeGame = this.mainPanel.free_game_node.getComponent("RobinHood_Free");
        this.jackpot = this.mainPanel.jpNode.getComponent("RobinHood_PrizePool");
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.collectProgress.showCollect();
        }, this);
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
      },
      onDestroy: function onDestroy() {
        window.SlotsFacade = null;
        this.dm = null;
      },
      delayTime: function delayTime(time) {
        var _this2 = this;
        return new Promise(function(res, rej) {
          _this2.scheduleOnce(function() {
            res();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  RobinHood_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4789Uc0QNCq4uIka1M0V2U", "RobinHood_MainPanel");
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
        this.logo = this.node.getChildByName("logo");
        this.slots = this.node.getChildByName("slots");
        this.slots777 = this.node.getChildByName("LMSlots_Subgame777");
        this.character_node = this.slots.getChildByName("character_node");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.bag_bonus_node = this.slots.getChildByName("bag_bonus_node");
        this.bonus_game_node = this.slots.getChildByName("bonus_game_node");
        this.free_game_node = this.slots.getChildByName("free_game_node");
        this.wild_game = this.slots.getChildByName("wild_game");
        this.popup_node = this.node.getChildByName("popup_node");
        this.map_node = this.node.getChildByName("map_node");
        this.wheel_game_node = this.node.getChildByName("wheel_game_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _$2$3$4$type;
          var aniCfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.character.hide();
              type = type || 1;
              aniCfg = (_$2$3$4$type = {}, _defineProperty(_$2$3$4$type, 1, {
                time: 1.8,
                aniName: "skill",
                soundName: "transition1"
              }), _defineProperty(_$2$3$4$type, 2, {
                time: 1.8,
                aniName: "animation",
                soundName: ""
              }), _defineProperty(_$2$3$4$type, 3, {
                time: 1.8,
                aniName: "skill",
                soundName: "transition1"
              }), _defineProperty(_$2$3$4$type, 4, {
                time: 1.8,
                aniName: "skill",
                soundName: "transition1"
              }), _$2$3$4$type)[type];
              SlotsFacade.soundMgr.playEffect(aniCfg.soundName);
              spine = _this.transition_node.getChildByName("spine".concat(type)).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, aniCfg.aniName, false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 10;
              return SlotsFacade.delayTime(aniCfg.time);

             case 10:
              SlotsFacade.character.show();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfe3cu74FZPRa1xdDEPhHXK", "RobinHood_Map");
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
    var CollectGameMap = cc.Class({
      extends: cc.Component,
      properties: {
        callBack: null,
        panel: null,
        bg: null,
        btn_close: null,
        scrollView: null,
        map_flag: null,
        mapItems: []
      },
      onLoad: function onLoad() {
        this._initView();
        this._initListener();
      },
      _initView: function _initView() {
        this.panel = this.node.getChildByName("panel");
        this.bg = this.node.getChildByName("bg");
        this.btn_close = this.panel.getChildByName("btn_close").getComponent(cc.Button);
        this.scrollView = this.panel.getChildByName("scrollview").getComponent(cc.ScrollView);
        this.map_flag = this.scrollView.content.getChildByName("map_flag");
        this.map_flag.originPos = {
          x: this.map_flag.x,
          y: this.map_flag.y
        };
        this.mapItems = [];
        for (var i = 1; i <= 33; i++) {
          var item = this.scrollView.content.getChildByName("item" + i);
          item["id"] = i;
          this.mapItems.push(item);
          this.markItemState(i, true);
        }
        this._reset();
      },
      resetMap: function resetMap() {
        this.map_flag.x = this.map_flag.originPos.x;
        this.map_flag.y = this.map_flag.originPos.y;
        for (var i = 0; i < this.mapItems.length; i++) this.markItemState(i + 1, true);
      },
      _initListener: function _initListener() {
        this.btn_close.node.on("click", this._onBtnCloseHandler.bind(this), this);
      },
      _showCloseBtn: function _showCloseBtn() {
        var _this = this;
        return new Promise(function(res) {
          _this.btn_close.node.active = true;
          _this.btn_close.node.scale = 0;
          _this.btn_close.interactable = true;
          cc.tween(_this.btn_close.node).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function() {
            res();
          }).start();
        });
      },
      _onBtnCloseHandler: function _onBtnCloseHandler() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("click");
              _this2.btn_close.interactable = false;
              cc.tween(_this2.btn_close.node).to(.3, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                _this2.exitMap(true);
              }).start();

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _exitProcess: function _exitProcess() {
        this._reset();
        SlotsFacade.dm.energyData.currId == SlotsFacade.dm.getGameCfg().TheFinalHurdleID && this.resetMap();
        this.panel.active = false;
        if (this.callBack) {
          this.callBack();
          this.callBack = null;
        }
      },
      exitMap: function exitMap(isView) {
        var _this3 = this;
        isView = isView || false;
        SlotsFacade.soundMgr.playEffect("map_close");
        this.bg.active = false;
        isView ? cc.tween(this.panel).to(.3, {
          y: this.node.height / 2
        }, {
          easing: "cubicOut"
        }).call(function() {
          _this3._exitProcess();
        }).start() : this._exitProcess();
      },
      enterMap: function enterMap(isView, cb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var data, currIndex, centerY, maxOffsetY, item, mapCfg, vo, mapInfo, mapItem, mul1, mul2;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("map_open");
              _this4.callBack = cb;
              _this4.node.active = true;
              _this4.panel.active = true;
              _this4.panel.opacity = 0;
              _context2.next = 7;
              return new Promise(function(res) {
                _this4.scheduleOnce(function() {
                  res();
                });
              });

             case 7:
              _this4.panel.opacity = 255;
              _this4.panel.y = _this4.node.height / 2;
              data = SlotsFacade.dm.energyData;
              currIndex = data.currId;
              !isView && data.state > 0 && (currIndex -= 1);
              _this4._freshMap(currIndex);
              _this4.bg.active = true;
              _this4.bg.opacity = 0;
              cc.tween(_this4.bg).to(.4, {
                opacity: 200
              }).start();
              _context2.next = 18;
              return SlotsFacade.delayTime(.3);

             case 18:
              _context2.next = 20;
              return new Promise(function(res) {
                cc.tween(_this4.panel).to(.35, {
                  y: -_this4.node.height / 2
                }).call(function() {
                  res();
                }).start();
              });

             case 20:
              if (currIndex > 0) {
                centerY = -(_this4.scrollView.content.height - _this4.scrollView.node.height / 2);
                maxOffsetY = _this4.scrollView.getMaxScrollOffset().y;
                item = SlotsFacade.map.mapItems[currIndex - 1];
                _this4.scrollView.scrollToOffset(cc.v2(0, maxOffsetY - (item.y - centerY)), 1);
              } else _this4.scrollView.scrollToBottom();
              if (!isView) {
                _context2.next = 25;
                break;
              }
              _this4._showCloseBtn();
              _context2.next = 49;
              break;

             case 25:
              SlotsFacade.collectProgress.setProgress(0);
              _context2.next = 28;
              return _this4._moveMapFlag(data.currId);

             case 28:
              _context2.next = 30;
              return SlotsFacade.delayTime(1);

             case 30:
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              vo = mapCfg[data.currId];
              _context2.t0 = vo.type;
              _context2.next = 1 === _context2.t0 ? 35 : 2 === _context2.t0 ? 38 : 3 === _context2.t0 ? 38 : 4 === _context2.t0 ? 38 : 5 === _context2.t0 ? 38 : 49;
              break;

             case 35:
              SlotsFacade.slots777.showEnter(SlotsFacade.dm.energyData.startPrice);
              _this4.exitMap();
              return _context2.abrupt("break", 49);

             case 38:
              mapInfo = SlotsFacade.dm.energyData;
              mapItem = SlotsFacade.dm.getGameCfg().mapCfg[mapInfo.currId + ""];
              mul1 = 0;
              mul2 = 0;
              if (mapItem.type == SlotsFacade.dm.getGameCfg().MapType.MultSlot) {
                mul1 = mapItem.min;
                mul2 = mapItem.max;
              }
              _context2.next = 45;
              return SlotsFacade.popup.showWinMapFreeCnt(mapItem.type, mul1, mul2);

             case 45:
              _context2.next = 47;
              return SlotsFacade.mainPanel.showSceneTransition(3);

             case 47:
              _this4.exitMap();
              return _context2.abrupt("break", 49);

             case 49:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _moveMapFlag: function _moveMapFlag(toIdx) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var vo, item, cfg, itemContent, spine, coin, _spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              vo = SlotsFacade.dm.getGameCfg().mapCfg[toIdx.toString()];
              item = _this5.mapItems[toIdx - 1];
              _context3.next = 4;
              return new Promise(function(res) {
                SlotsFacade.soundMgr.playEffect("ui_move");
                cc.tween(_this5.map_flag).to(.4, {
                  x: item.x,
                  y: item.y
                }).call(function() {
                  res();
                }).start();
              });

             case 4:
              cfg = SlotsFacade.dm.getGameCfg();
              itemContent = item.getChildByName("type".concat(vo.type));
              vo.type == cfg.MapType.MultSlot && (itemContent = itemContent.getChildByName("item".concat(vo.level)));
              if (vo.type == cfg.MapType.SevenSlot) {
                SlotsFacade.soundMgr.playEffect("small_trigger");
                spine = itemContent.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, vo.iconAni, true);
              } else {
                SlotsFacade.soundMgr.playEffect("big_trigger");
                coin = itemContent.getChildByName("coin");
                coin.active = true;
                _spine = coin.getChildByName("spine").getComponent(sp.Skeleton);
                _spine.setAnimation(0, "animation2", true);
              }

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _freshMap: function _freshMap(currIndex) {
        for (var i = 1; i <= currIndex; i++) this.markItemState(i, false);
        if (currIndex > 0) {
          var item = this.mapItems[currIndex - 1];
          this.map_flag.position = item.position;
        }
      },
      markItemState: function markItemState(index, isActive) {
        isActive = isActive || false;
        var cfg = SlotsFacade.dm.getGameCfg();
        var vo = cfg.mapCfg[index.toString()];
        var item = this.mapItems[index - 1];
        var itemContent = item.getChildByName("type".concat(vo.type));
        vo.type == cfg.MapType.MultSlot && (itemContent = itemContent.getChildByName("item".concat(vo.level)));
        if (vo.type == cfg.MapType.SevenSlot) {
          itemContent.getChildByName("spine").active = false;
          var img = itemContent.getChildByName("icon").getComponent("ImgSwitchCmp");
          isActive ? img.setIndex(vo.iconIndex) : img.setIndex(0);
        } else {
          var coin = itemContent.getChildByName("coin");
          if (isActive) {
            coin.active = true;
            var spine = coin.getChildByName("spine").getComponent(sp.Skeleton);
            spine.node.active = true;
            spine.setAnimation(0, "animation1", true);
          } else coin.active = false;
        }
      },
      _reset: function _reset() {
        this.panel.active = false;
        this.scrollView.node.y = this.scrollView.node.height / 2;
        this.btn_close.node.active = false;
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2f40jBhSNJ4pWPR7iyaf+3", "RobinHood_Popup");
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
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.bg_dark = this.node.getChildByName("bg_dark");
      },
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showBgDark: function showBgDark(boo) {
        this.bg_dark.active = boo;
      },
      showEnterTheme: function showEnterTheme() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, spineBg, spineDialog, entry2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.bg_dark.active = true;
              panel = _this.node.getChildByName("panel_enter");
              panel.active = true;
              spineBg = panel.getChildByName("spine_bg").getComponent(sp.Skeleton);
              spineDialog = panel.getChildByName("spine_dialog").getComponent(sp.Skeleton);
              spineDialog.node.active = true;
              spineBg.setAnimation(0, "animation1", false);
              spineBg.addAnimation(0, "animation2", true);
              spineDialog.setAnimation(0, "animation1", false);
              spineDialog.addAnimation(0, "animation2", false);
              _context.next = 12;
              return SlotsFacade.delayTime(3);

             case 12:
              spineBg.addAnimation(0, "animation3", false);
              entry2 = spineDialog.setAnimation(0, "animation3", false);
              spineDialog.setTrackCompleteListener(entry2, function() {
                spineDialog.setTrackCompleteListener(entry2, null);
                spineDialog.node.active = false;
                spineBg.node.active = false;
                panel.active = false;
              });
              cc.tween(_this.bg_dark).to(.4, {
                opacity: 0
              }).call(function() {
                _this.bg_dark.active = false;
                _this.bg_dark.opacity = 200;
              }).start();
              _context.next = 18;
              return SlotsFacade.delayTime(.6);

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinWheelFreeCnt: function showWinWheelFreeCnt(isBonus) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var type, aniCfg, panel, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fg_start");
              type = isBonus ? 2 : 1;
              aniCfg = {
                enter: "animation".concat(type, "_1"),
                idle: "animation".concat(type, "_2"),
                exit: "animation".concat(type, "_3")
              };
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              okBtn = panel.getChildByName("btn_ok").getComponent(cc.Button);
              okBtn.interactable = true;
              okBtn.node.scale = 0;
              okBtn.node.active = true;
              cc.tween(okBtn.node).delay(1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context2.next = 16;
              return SlotsFacade.delayTime(1.5);

             case 16:
              _context2.next = 18;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_withdraw");
                  okBtn.node.stopAllActions();
                  okBtn.interactable = false;
                  cc.tween(okBtn.node).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  okBtn.node.off("click");
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn.node, handler);
                okBtn.node.on("click", handler);
              });

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinWheelFreeGold: function showWinWheelFreeGold(goldNumb, isBonus) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var type, aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fg_collect");
              type = isBonus ? 2 : 1;
              aniCfg = {
                enter: "animation".concat(type, "_1"),
                idle: "animation".concat(type, "_2"),
                exit: "animation".concat(type, "_3")
              };
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).delay(.5).to(.3, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).delay(1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context3.next = 21;
              return SlotsFacade.delayTime(1.5);

             case 21:
              _context3.next = 23;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_withdraw");
                  okBtn.stopAllActions();
                  okBtn.getComponent(cc.Button).interactable = false;
                  okBtn.off("click");
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on("click", handler);
              });

             case 23:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinMapFreeCnt: function showWinMapFreeCnt(type, mul1, mul2) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var _$3$4$5$type;
          var aniCfg, panel, mulNode, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              aniCfg = (_$3$4$5$type = {}, _defineProperty(_$3$4$5$type, 2, {
                enter: "animation4_1",
                idle: "animation4_2",
                exit: "animation4_3"
              }), _defineProperty(_$3$4$5$type, 3, {
                enter: "animation1_1",
                idle: "animation1_2",
                exit: "animation1_3"
              }), _defineProperty(_$3$4$5$type, 4, {
                enter: "animation3_1",
                idle: "animation3_2",
                exit: "animation3_3"
              }), _defineProperty(_$3$4$5$type, 5, {
                enter: "animation2_1",
                idle: "animation2_2",
                exit: "animation2_3"
              }), _$3$4$5$type)[type];
              SlotsFacade.soundMgr.playEffect("map_start");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_map_free_cnt");
              panel.active = true;
              mulNode = panel.getChildByName("mul");
              if (mul1 && mul2) {
                mulNode.active = true;
                mulNode.getChildByName("label1").getComponent(cc.Label).string = mul1 + "X";
                mulNode.getChildByName("label2").getComponent(cc.Label).string = mul2 + "X";
                mulNode.opacity = 0;
                cc.tween(mulNode).delay(1.5).to(.5, {
                  opacity: 255
                }).start();
              } else mulNode.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              okBtn.scale = 0;
              okBtn.active = true;
              okBtn.y = 3 == type ? -373 : -266;
              cc.tween(okBtn).delay(1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context4.next = 18;
              return SlotsFacade.delayTime(1.5);

             case 18:
              _context4.next = 20;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_withdraw");
                  okBtn.stopAllActions();
                  okBtn.getComponent(cc.Button).interactable = false;
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  mulNode.active && cc.tween(mulNode).to(.4, {
                    opacity: 0
                  }).start();
                  okBtn.off("click");
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this4.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on("click", handler);
              });

             case 20:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showWinMapFreeGold: function showWinMapFreeGold(goldNumb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("map_collect");
              aniCfg = {
                enter: "animation1",
                idle: "animation2",
                exit: "animation3"
              };
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_win_map_game_coin");
              panel.active = true;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).delay(.5).to(.3, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).delay(1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context5.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
              _context5.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_withdraw");
                  okBtn.stopAllActions();
                  okBtn.getComponent(cc.Button).interactable = false;
                  okBtn.off("click");
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this5.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on("click", handler);
              });

             case 22:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              aniCfg = {
                1: {
                  enter: "animation3_1",
                  idle: "animation3_2",
                  exit: "animation3_3",
                  sound: "dialog_mini"
                },
                2: {
                  enter: "animation3_1",
                  idle: "animation3_2",
                  exit: "animation3_3",
                  sound: "dialog_minor"
                },
                3: {
                  enter: "animation2_1",
                  idle: "animation2_2",
                  exit: "animation2_3",
                  sound: "dialog_major"
                },
                4: {
                  enter: "animation1_1",
                  idle: "animation1_2",
                  exit: "animation1_3",
                  sound: "dialog_grand"
                }
              }[jpType.toString()];
              SlotsFacade.soundMgr.playEffect(aniCfg.sound);
              _this6.showBg(true);
              panel = _this6.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).delay(.5).to(.3, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).delay(1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context6.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
              _context6.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("dialog_withdraw");
                  okBtn.stopAllActions();
                  okBtn.getComponent(cc.Button).interactable = false;
                  okBtn.off("click");
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this6.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on("click", handler);
              });

             case 22:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showTriggerWheelAni: function showTriggerWheelAni() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var panel, spine;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_start");
              panel = SlotsFacade.mainPanel.slots.getChildByName("wheel_start");
              panel.active = true;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation", false);
              _context7.next = 7;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  panel.active = false;
                  res();
                });
              });

             case 7:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showWinWheelBag: function showWinWheelBag(goldNumb) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var aniCfg, panel, label, spine;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bag_popup");
              aniCfg = {
                enter: "animation1",
                idle: "animation2",
                exit: "animation3"
              };
              panel = SlotsFacade.mainPanel.popup_node.getChildByName("win_wheel_bag");
              panel.active = true;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).delay(.5).to(.3, {
                scale: 1
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context8.next = 14;
              return SlotsFacade.delayTime(3);

             case 14:
              cc.tween(label).to(.8, {
                scale: 0
              }).start();
              spine.setAnimation(0, aniCfg.exit, false);
              _context8.next = 18;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  panel.active = false;
                  res();
                });
              });

             case 18:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9148dY2pL5Dfb+ylC3U6liV", "RobinHood_PrizePool");
    "use strict";
    var JpCfg = {
      1: {
        nodeName: "prizePool_Minor",
        idleAni: "animation3",
        lockAni: "animation3",
        unlockAni: "animation3_3",
        winAni: "animation3",
        iconIndex: 0,
        weight: 0
      },
      2: {
        nodeName: "prizePool_Major",
        idleAni: "animation2",
        lockAni: "animation2",
        unlockAni: "animation2_2",
        winAni: "animation2",
        iconIndex: 1,
        weight: 1
      },
      3: {
        nodeName: "prizePool_Grand",
        idleAni: "animation1",
        lockAni: "animation1",
        unlockAni: "animation1_1",
        winAni: "animation1",
        iconIndex: 2,
        weight: 2
      }
    };
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (!JpCfg[poolType + ""]) return;
        var param = {
          poolIdx: poolType,
          val: bLock
        };
        this.processTips(param);
      },
      processTips: function processTips(data) {
        this.showJackPotTips(data.poolIdx, data.val);
        var aniCfg = JpCfg[data.poolIdx + ""];
        var jpNodeName = aniCfg.nodeName;
        if (jpNodeName) {
          var safeNode = cc.find("Canvas/safe_node");
          var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
          if (jpNode) {
            var targetJpNode = cc.find(jpNodeName, jpNode.node.parent);
            if (targetJpNode) {
              var lockSp = targetJpNode.getChildByName("spine_lock").getComponent(sp.Skeleton);
              if (data.val) {
                targetJpNode.isLock = true;
                SlotsFacade.soundMgr.stopEffectByName("jp_lock");
                SlotsFacade.soundMgr.playEffect("jp_lock");
                lockSp.node.active = true;
                lockSp.setAnimation(0, aniCfg.lockAni, false);
                lockSp.setCompleteListener(function() {
                  lockSp.setCompleteListener(null);
                  lockSp.node.active = false;
                });
                this.scheduleOnce(function() {
                  Global.showSpriteGray(targetJpNode.getChildByName("bg"), true);
                  Global.showSpriteGray(targetJpNode.getChildByName("title"), true);
                  targetJpNode.getChildByName("lbl_num").getComponent("LabelSwitchCmp").setIndex(1);
                  targetJpNode.getChildByName("spine_idle").active = false;
                }, .4);
              } else {
                targetJpNode.isLock = false;
                SlotsFacade.soundMgr.stopEffectByName("jp_unlock");
                SlotsFacade.soundMgr.playEffect("jp_unlock");
                lockSp.node.active = true;
                lockSp.setAnimation(0, aniCfg.unlockAni, false);
                lockSp.setCompleteListener(function() {
                  lockSp.setCompleteListener(null);
                  lockSp.node.active = false;
                });
                this.scheduleOnce(function() {
                  Global.showSpriteGray(targetJpNode.getChildByName("bg"), false);
                  Global.showSpriteGray(targetJpNode.getChildByName("title"), false);
                  targetJpNode.getChildByName("lbl_num").getComponent("LabelSwitchCmp").setIndex(0);
                  targetJpNode.getChildByName("spine_idle").active = true;
                }, .4);
              }
            }
          }
        }
      },
      showJackPotTips: function showJackPotTips(jpId, isLock) {
        var weight = JpCfg[jpId + ""].weight;
        if (isLock) {
          if (this._nowJpLockWeight < weight) return;
          this._nowJpLockWeight = weight;
        } else {
          if (this._nowJpUnlockWeight > weight) return;
          this._nowJpUnlockWeight = weight;
        }
        var aniCfg = JpCfg[jpId + ""];
        var jpNodeName = aniCfg.nodeName;
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        var targetJpNode = cc.find(jpNodeName, jpNode.node.parent);
        if (targetJpNode) {
          var tips_to_unclok = targetJpNode.parent.getChildByName("tips_to_unclok");
          tips_to_unclok.stopAllActions();
          tips_to_unclok.active = false;
          tips_to_unclok.getChildByName("icon").getComponent("ImgSwitchCmp").setIndex(aniCfg.iconIndex);
          tips_to_unclok.x = targetJpNode.x;
          tips_to_unclok.y = targetJpNode.y;
          var tips_uncloked = targetJpNode.parent.getChildByName("tips_uncloked");
          tips_uncloked.stopAllActions();
          tips_uncloked.active = false;
          tips_uncloked.getChildByName("icon").getComponent("ImgSwitchCmp").setIndex(aniCfg.iconIndex);
          tips_uncloked.x = targetJpNode.x;
          tips_uncloked.y = targetJpNode.y;
          if (isLock) {
            this._nowJpUnlockWeight = this._nowJpLockWeight - 1;
            tips_to_unclok.scale = 0;
            tips_to_unclok.active = true;
            cc.tween(tips_to_unclok).to(.4, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.2, {
              scale: 0
            }).call(function() {
              tips_to_unclok.active = false;
            }).start();
          } else {
            this._nowJpLockWeight = this._nowJpUnlockWeight + 1;
            tips_uncloked.scale = 0;
            tips_uncloked.active = true;
            cc.tween(tips_uncloked).to(.4, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.2, {
              scale: 0
            }).call(function() {
              tips_uncloked.active = false;
            }).start();
          }
        }
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  RobinHood_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e6d0FFNB5Gx4irl8Tb1lLS", "RobinHood_Reel");
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
        _reelBg: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        if (this._reelBg) objs.push(this._reelBg); else {
          var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
          bg && objs.push(bg);
        }
        return objs;
      },
      bindReelBg: function bindReelBg(reelBg) {
        reelBg && (this._reelBg = reelBg);
      },
      isNeedAddSpeed: function isNeedAddSpeed() {
        var _iterator = _createForOfIteratorHelper(this._reelState), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            if (info.isAnt) return true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  RobinHood_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88578RzTGpGVpQ2kwAKyRtk", "RobinHood_Slots");
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
    var MulSlotCfg = {
      maxSlotCnt: 3,
      currSlotCnt: 1,
      unitSlotRowCnt: 3,
      unitSlotColCnt: 5,
      aSlotSymbolCnt: 15
    };
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        allReels: [],
        reels_bg: cc.Node,
        reels_frame: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.reels_bg = this.node.getChildByName("reels_bg");
        this.reels_frame = this.node.getChildByName("reels_frame");
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = null;
          var reelBg = null;
          if (10 == i) {
            node = cc.find("bonus_game_node/panel/reel1_mask/reel".concat(i + 1), this.node);
            reelBg = cc.find("bonus_game_node/panel/reel1_mask/reel_bg".concat(i + 1), this.node);
          } else if (i > 10) {
            node = cc.find("bonus_game_node/panel/reels/reel".concat(i + 1), this.node);
            reelBg = cc.find("bonus_game_node/panel/reels/reel_bg".concat(i + 1), this.node);
          } else node = cc.find("reels/reel".concat(i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          scp.Init(i, row, this._topAniNode);
          reelBg && scp.bindReelBg(reelBg);
          this.allReels.push(scp);
        }
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        SlotsFacade.flowCtrl.startMove();
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this.getCurReels());
        this._stopTime = this.GetStopTime();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
        SlotsFacade.collectProgress.setEnterEnable(false);
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
      SetSlotsResult: function SetSlotsResult(cards) {
        var reelResults = [];
        for (var i = 0; i < MulSlotCfg.currSlotCnt; i++) {
          var startIndex = i * MulSlotCfg.unitSlotColCnt * MulSlotCfg.unitSlotRowCnt;
          var endIndex = startIndex + MulSlotCfg.unitSlotColCnt * MulSlotCfg.unitSlotRowCnt;
          for (var j = startIndex; j < endIndex; j++) {
            var col = i * MulSlotCfg.unitSlotColCnt + j % MulSlotCfg.unitSlotColCnt;
            var res = {};
            res.sid = cards[j];
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        var bonusItem = null;
        SlotsFacade.dm.belleBonus ? SlotsFacade.dm.belleBonus.bonusInfo && (bonusItem = SlotsFacade.dm.belleBonus.bonusInfo.items) : SlotsFacade.dm.getSpinData().bonusInfo && (bonusItem = SlotsFacade.dm.isTriggerNormalBonus() ? SlotsFacade.dm.getSpinData().bonusInfo.items : SlotsFacade.dm.getSpinData().bonusInfo.extraItems);
        if (bonusItem) {
          var _iterator = _createForOfIteratorHelper(bonusItem), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              var idxInfo = this.transferIdx(item.idx);
              reelResults[idxInfo.col][idxInfo.row].data = {
                coin: item.coin
              };
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var _item = this._reels[_i];
          var reelRes = reelResults[_i];
          _item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = Math.floor(i / MulSlotCfg.aSlotSymbolCnt) * MulSlotCfg.unitSlotColCnt + i % MulSlotCfg.unitSlotColCnt;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var info = _step2.value;
            var _loop = function _loop(_i2) {
              var stateInfo = Global.copy(info);
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              var triggerCount = stateInfo.mini;
              var countsConfig = Global.copy(stateInfo.counts);
              var haveCount = 0;
              var startIndex = _i2 * MulSlotCfg.unitSlotColCnt;
              var endIndex = startIndex + MulSlotCfg.unitSlotColCnt;
              for (var j = startIndex; j < endIndex; j++) {
                var reelRes = reelResults[j];
                stateInfo.isStop = false;
                stateInfo.isAnt = false;
                haveCount >= triggerCount - 1 && stateInfo.counts[j % MulSlotCfg.unitSlotColCnt] > 0 && (stateInfo.isAnt = true);
                var reelCountOfID = reelRes.reduce(function(a, v) {
                  return stateInfo.id.includes(v) ? a + 1 : a + 0;
                }, 0);
                haveCount += reelCountOfID;
                countsConfig.shift();
                var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                  return x + y;
                }) : 0) + haveCount;
                reelCountOfID > 0 && remainingCount >= triggerCount && (stateInfo.isStop = true);
                stateInfo.symbolStopSound = "scatter_land".concat(1 + haveCount % 3);
                var item = _this._reels[j];
                item.AddReelStateInfo(Global.copy(stateInfo));
              }
            };
            for (var _i2 = 0; _i2 < MulSlotCfg.currSlotCnt; _i2++) _loop(_i2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      transferIdx: function transferIdx(idx) {
        idx -= 1;
        var col = Math.floor(idx / MulSlotCfg.aSlotSymbolCnt) * MulSlotCfg.unitSlotColCnt + idx % MulSlotCfg.unitSlotColCnt;
        var row = MulSlotCfg.unitSlotRowCnt - 1 - Math.floor(idx % MulSlotCfg.aSlotSymbolCnt / MulSlotCfg.unitSlotColCnt);
        return {
          col: col,
          row: row
        };
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var idxInfo = this.transferIdx(idx);
        return this._reels[idxInfo.col].GetSymbolByRow(idxInfo.row);
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var pos = reel.GetSymbolPosByRow(idxInfo.row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % MulSlotCfg.unitSlotColCnt * nIter;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            var belleBonus = SlotsFacade.dm.belleBonus;
            var bonusTime = 0;
            belleBonus && belleBonus.bonusInfo || SlotsFacade.dm.isTriggerNormalBonus() ? bonusTime = 5 : this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              bonusTime > 0 && i > 0 && (reelStopInterv = reelStopInterv + bonusTime + 2 * (i - 1));
              item.StopMove(reelStopInterv);
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        var zjLuXian = SlotsFacade.dm.getZjLuXian();
        for (var i = 0; i < zjLuXian.length; i++) {
          var item = zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        var skipBorderAniIdxs = [];
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) {
          for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
            var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
            allWinIdx[val] = 1;
          }
          skipBorderAniIdxs = this._gameInfo.scatterZJLuXian.indexs.concat();
        }
        var needSkipAniIdxs = [];
        if (2 == SlotsFacade.dm.energyData.state && !SlotsFacade.dm.isFistTriggerFree()) {
          var cfg = SlotsFacade.dm.getGameCfg();
          var currMapItem = cfg.mapCfg[SlotsFacade.dm.energyData.currId];
          if (currMapItem && currMapItem.type == cfg.MapType.MultSlot) {
            var skipIdxs = [ 3, 8, 13, 18, 23, 28, 33, 38, 43 ];
            for (var key in allWinIdx) skipIdxs.includes(Number(key)) && needSkipAniIdxs.push(Number(key));
          }
        }
        for (var _key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(_key));
          if (symbol) {
            needSkipAniIdxs.includes(Number(_key)) || symbol.playWinAnimation();
            skipBorderAniIdxs.includes(Number(_key)) || symbol.ShowKuang();
          }
        }
        needSkipAniIdxs.length > 0 && SlotsFacade.wildGame.playWinMulAni(needSkipAniIdxs);
      },
      playTriggerAni: function playTriggerAni(indexs) {
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
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this3 = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this3.GetSymbolByIdx(element));
        });
        return ret;
      },
      cleanPlayState: function cleanPlayState() {
        this._reels.forEach(function(reel) {
          reel._symbols.forEach(function(symbol) {
            symbol.cleanPlayState();
          });
        });
      },
      getCurReels: function getCurReels() {
        var skipColIdx = [];
        if (2 == SlotsFacade.dm.energyData.state && SlotsFacade.dm.hasFree()) {
          var cfg = SlotsFacade.dm.getGameCfg();
          var currMapItem = cfg.mapCfg[SlotsFacade.dm.energyData.currId];
          currMapItem && currMapItem.type == cfg.MapType.MultSlot && (skipColIdx = [ 2, 7, 12 ]);
        }
        if (skipColIdx.length > 0) {
          var ret = [];
          for (var i = 0; i < this._reels.length; i++) {
            if (skipColIdx.includes(i)) continue;
            ret.push(this._reels[i]);
          }
          return ret;
        }
        return this._reels;
      },
      getCurrReelCnt: function getCurrReelCnt() {
        return MulSlotCfg.currSlotCnt * MulSlotCfg.unitSlotColCnt;
      },
      setReelStopState: function setReelStopState(idx, boo) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var symbolId = SlotsFacade.dm.getSpinData().resultCards[idx - 1];
        var _iterator3 = _createForOfIteratorHelper(reel._reelState), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var info = _step3.value;
            info.id.includes(symbolId) && (info.isStop = boo);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      toNormalState: function toNormalState() {
        SlotsFacade.character.show();
        SlotsFacade.character.toNormalState();
        SlotsFacade.collectProgress.show();
        SlotsFacade.bagGame.show();
        SlotsFacade.jackpot.show();
        this.reels_frame.active = true;
        MulSlotCfg.currSlotCnt = 1;
        MulSlotCfg.unitSlotRowCnt = 3;
        MulSlotCfg.aSlotSymbolCnt = 15;
        for (var i = 0; i < 10; i++) {
          this.allReels[i].node.active = false;
          this.reels_bg.getChildByName("reel_bg".concat(i + 1)).active = false;
        }
        this.reels_frame.getChildByName("frame1").active = false;
        this.reels_frame.getChildByName("frame2").active = false;
        this._reels = this.allReels.slice(10, 15);
        var _iterator4 = _createForOfIteratorHelper(this._reels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var reel = _step4.value;
            3 != reel._nCount && reel.AddCount(3 - reel._nCount, .001);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this.node.scale = 1;
        SlotsFacade.bonusGame.toNormalState();
      },
      toMapFreeState: function toMapFreeState() {
        SlotsFacade.character.hide();
        SlotsFacade.collectProgress.hide();
        SlotsFacade.bagGame.hide();
        SlotsFacade.jackpot.hide();
        this.reels_frame.active = true;
        MulSlotCfg.currSlotCnt = 3;
        MulSlotCfg.unitSlotRowCnt = 3;
        MulSlotCfg.aSlotSymbolCnt = 15;
        for (var i = 0; i < 10; i++) {
          this.allReels[i].node.active = true;
          this.reels_bg.getChildByName("reel_bg".concat(i + 1)).active = true;
        }
        this.reels_frame.getChildByName("frame1").active = true;
        this.reels_frame.getChildByName("frame2").active = true;
        this._reels = this.allReels.concat();
        this.node.scale = .8;
      },
      toWheelFreeState: function toWheelFreeState() {
        SlotsFacade.character.show();
        SlotsFacade.character.toWheelFreeState();
        SlotsFacade.collectProgress.hide();
        SlotsFacade.bagGame.hide();
        SlotsFacade.jackpot.hide();
        this.reels_frame.active = false;
        MulSlotCfg.currSlotCnt = 1;
        MulSlotCfg.unitSlotRowCnt = 5;
        MulSlotCfg.aSlotSymbolCnt = 25;
        for (var i = 0; i < 10; i++) {
          this.allReels[i].node.active = false;
          this.reels_bg.getChildByName("reel_bg".concat(i + 1)).active = false;
        }
        this._reels = this.allReels.slice(10, 15);
        var _iterator5 = _createForOfIteratorHelper(this._reels), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var reel = _step5.value;
            5 != reel._nCount && reel.AddCount(5 - reel._nCount, .001);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        SlotsFacade.bonusGame.toWheelFreeState();
        this.node.scale = 1;
      },
      toWheelBonusState: function toWheelBonusState() {
        SlotsFacade.character.show();
        SlotsFacade.character.toNormalState();
        SlotsFacade.collectProgress.hide();
        SlotsFacade.bagGame.hide();
        this.reels_frame.active = true;
        MulSlotCfg.currSlotCnt = 1;
        MulSlotCfg.unitSlotRowCnt = 6;
        MulSlotCfg.aSlotSymbolCnt = 30;
        for (var i = 0; i < 10; i++) {
          this.allReels[i].node.active = false;
          this.reels_bg.getChildByName("reel_bg".concat(i + 1)).active = false;
        }
        this._reels = this.allReels.slice(10, 15);
        var _iterator6 = _createForOfIteratorHelper(this._reels), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var reel = _step6.value;
            6 != reel._nCount && reel.AddCount(6 - reel._nCount, .001);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        this.node.scale = 1;
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        SlotsFacade.bonusGame.reelSpinEnd(colIdx);
      },
      resetAllSymbol: function resetAllSymbol() {
        var _iterator7 = _createForOfIteratorHelper(this._reels), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var reel = _step7.value;
            var _iterator8 = _createForOfIteratorHelper(reel._symbols), _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                var s = _step8.value;
                s.StartMove();
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  RobinHood_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca0bcCLq4pDrbYc7Va5ZLTW", "RobinHood_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/RobinHood/",
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
      playBgm: function playBgm(bgmName, isReplay) {
        isReplay = isReplay || false;
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else Global.SlotsSoundMgr.playNormalBgm(isReplay);
      },
      stopBgm: function stopBgm() {
        Global.SlotsSoundMgr.stopBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("free_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_WheelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cb79Z4iRpC5Zui/lrVJM3j", "RobinHood_WheelGame");
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
    var WheelItemType = {
      jackpot: 1,
      freeGame: 2,
      belleBag: 3,
      belleBonus: 4
    };
    var WheelItemConfig = {
      Grand: {
        type: WheelItemType.jackpot,
        iconIndex: 0
      },
      Major: {
        type: WheelItemType.jackpot,
        iconIndex: 1
      },
      Minor: {
        type: WheelItemType.jackpot,
        iconIndex: 2
      },
      belleBag: {
        type: WheelItemType.belleBag,
        iconIndex: 3
      },
      freeGame: {
        type: WheelItemType.freeGame,
        iconIndex: 4
      },
      belleBonus: {
        type: WheelItemType.belleBonus,
        iconIndex: 5
      }
    };
    var WheelListCfg = [ "Grand", "freeGame", "Minor", "belleBonus", "Major", "belleBag", "Minor", "freeGame", "Grand", "belleBonus", "Minor", "belleBag", "Major", "belleBonus", "Minor", "belleBag", "Major", "freeGame" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        wheel: cc.Node,
        startNode: cc.Node,
        frame: cc.Node,
        items: [ cc.Node ],
        proxy: cc.Node,
        spine_border_idle: sp.Skeleton,
        spine_border_start: sp.Skeleton,
        spine_run: sp.Skeleton,
        spine_win: sp.Skeleton,
        _cbHandler: null,
        _canMove: false,
        _wheelCfg: null,
        _respData: null
      },
      onLoad: function onLoad() {
        this._wheelCfg = {
          baseRound: 10,
          itemsLen: this.items.length,
          itemHeight: this.items[0].height,
          totalHeight: 0
        };
        this._wheelCfg.totalHeight = this._wheelCfg.itemsLen * this._wheelCfg.itemHeight;
      },
      _getRotation: function _getRotation(index) {
        var baseRound = this._wheelCfg.baseRound;
        return 360 * baseRound;
      },
      _startWheel: function _startWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rotation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_roll2");
              rotation = _this._getRotation(0);
              _this.proxy.rotation = 0;
              cc.tween(_this.node).delay(1).call(function() {
                _this.spine_run.node.active = true;
                _this.spine_run.setAnimation(0, "animation", true);
              }).start();
              cc.tween(_this.node).delay(3).call(function() {
                var img = _this.items[4].getComponent("ImgSwitchCmp");
                var itemCfg = WheelItemConfig[WheelListCfg[_this._respData.result.wheelId - 1]];
                img.setIndex(itemCfg.iconIndex);
              }).start();
              _context.next = 7;
              return new Promise(function(res) {
                cc.tween(_this.proxy).call(function() {
                  _this._canMove = true;
                  SlotsFacade.soundMgr.playEffect("wheel_spin");
                }).to(7.5, {
                  rotation: rotation
                }, {
                  easing: "quartInOut"
                }).call(function() {
                  _this.spine_run.node.active = false;
                }).delay(.1).call(function() {
                  _this._canMove = false;
                  res();
                }).start();
              });

             case 7:
              SlotsFacade.soundMgr.playEffect("wheel_win");
              _this.spine_win.node.active = true;
              Global.shakeNode(_this.panel, 3, .5, _this.panel.position);
              _context.next = 12;
              return SlotsFacade.delayTime(1.5);

             case 12:
              _context.next = 14;
              return _this._processWheelResult();

             case 14:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _processWheelResult: function _processWheelResult() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var itemCfg, jpInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              itemCfg = WheelItemConfig[WheelListCfg[_this2._respData.result.wheelId - 1]];
              _context2.t0 = itemCfg.type;
              _context2.next = _context2.t0 === WheelItemType.jackpot ? 5 : _context2.t0 === WheelItemType.belleBag ? 11 : _context2.t0 === WheelItemType.belleBonus ? 14 : _context2.t0 === WheelItemType.freeGame ? 23 : 30;
              break;

             case 5:
              jpInfo = _this2._respData.result.jackpot;
              _context2.next = 8;
              return SlotsFacade.popup.showWinJPGold(jpInfo.id, jpInfo.value);

             case 8:
              _context2.next = 10;
              return SlotsFacade.mainPanel.showSceneTransition(4);

             case 10:
              return _context2.abrupt("break", 30);

             case 11:
              _context2.next = 13;
              return SlotsFacade.mainPanel.showSceneTransition(4);

             case 13:
              return _context2.abrupt("break", 30);

             case 14:
              SlotsFacade.dm.belleBonus = _this2._respData.result.belleBonus;
              SlotsFacade.dm.SetFreeTime(_this2._respData.result.belleBonus.restCnt);
              SlotsFacade.dm.SetTotalFree(_this2._respData.result.belleBonus.restCnt);
              SlotsFacade.dm.triggerBelleBonusCoin = SlotsFacade.dm.wheelGame ? SlotsFacade.dm.wheelGame.winCoin : 0;
              _context2.next = 20;
              return SlotsFacade.popup.showWinWheelFreeCnt(true);

             case 20:
              _context2.next = 22;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 22:
              return _context2.abrupt("break", 30);

             case 23:
              SlotsFacade.dm.SetFreeTime(_this2._respData.result.freeInfo.freeCnt);
              SlotsFacade.dm.SetTotalFree(_this2._respData.result.freeInfo.freeCnt);
              _context2.next = 27;
              return SlotsFacade.popup.showWinWheelFreeCnt(false);

             case 27:
              _context2.next = 29;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 29:
              return _context2.abrupt("break", 30);

             case 30:
              _this2.close({
                type: itemCfg.type,
                coin: _this2._respData.result.winCoin
              });

             case 31:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      update: function update(dt) {
        if (!this._canMove) return;
        var dist = this.proxy.angle % 360 / 360 * this._wheelCfg.totalHeight;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          var originY = this._wheelCfg.itemHeight / 2 + i * this._wheelCfg.itemHeight;
          originY += dist;
          originY < -this._wheelCfg.itemHeight / 2 && (originY += this._wheelCfg.totalHeight);
          item.y = originY;
        }
      },
      _initView: function _initView() {
        for (var i = 0; i < this.items.length; i++) {
          var img = this.items[i].getComponent("ImgSwitchCmp");
          img.node.y = this._wheelCfg.itemHeight / 2 + i * this._wheelCfg.itemHeight;
          var itemCfg = WheelItemConfig[WheelListCfg[i]];
          img.setIndex(itemCfg.iconIndex);
        }
        this.spine_border_idle.node.active = false;
        this.spine_run.node.active = false;
        this.spine_win.node.active = false;
        this.spine_win.node.active = false;
      },
      _bindData: function _bindData() {
        this._canMove = false;
      },
      open: function open(cb, isReconnect) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (isReconnect) {
                _context3.next = 8;
                break;
              }
              SlotsFacade.soundMgr.playEffect("bell");
              _context3.next = 4;
              return SlotsFacade.slots.playTriggerAni(SlotsFacade.dm.getSpinData().scatterZJLuXian.indexs);

             case 4:
              SlotsFacade.slots.cleanPlayState();
              Global.SlotsSoundMgr.stopBgm();
              _context3.next = 8;
              return SlotsFacade.popup.showTriggerWheelAni();

             case 8:
              _context3.next = 10;
              return SlotsFacade.mainPanel.showSceneTransition(4);

             case 10:
              SlotsFacade.character.hide();
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playBgm("wheel_bgm");
              cc.vv.gameData.showOtherSysNode(false);
              _this3.panel.active = true;
              _this3._cbHandler = cb;
              _this3._bindData();
              _this3._initView();
              _this3._showStartDialog();

             case 19:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _showStartDialog: function _showStartDialog() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var spine, self, clickFunc;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4.spine_border_start.node.active = true;
              _this4.spine_border_start.setAnimation(0, "animation", false);
              _context4.next = 4;
              return new Promise(function(res) {
                _this4.spine_border_start.setCompleteListener(function() {
                  _this4.spine_border_start.setCompleteListener(null);
                  _this4.spine_border_start.node.active = false;
                  res();
                });
              });

             case 4:
              _this4.spine_border_idle.node.active = true;
              _this4.spine_border_idle.setAnimation(0, "animation", true);
              _this4.startNode.active = true;
              spine = _this4.startNode.getChildByName("spine_start").getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "animation3", false);
              spine.addAnimation(0, "animation1", true);
              _context4.next = 13;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  res();
                });
              });

             case 13:
              self = _this4;
              clickFunc = function clickFunc() {
                SlotsFacade.soundMgr.playEffect("wheel_click");
                self.startNode.off(cc.Node.EventType.TOUCH_END);
                spine.setAnimation(0, "animation2", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  self.startNode.active = false;
                  SlotsFacade.dm.reqSubGame({
                    rtype: 2
                  });
                });
              };
              cc.vv.gameData.checkAutoPlay(_this4.startNode, clickFunc);
              _this4.startNode.on(cc.Node.EventType.TOUCH_END, function() {
                _this4.startNode.stopAllActions();
                clickFunc();
              }, _this4);

             case 17:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onMsg: function onMsg(msg) {
        this._respData = msg.data;
        this._startWheel();
      },
      close: function close(ret) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this5.panel.active = false;
              SlotsFacade.mainPanel.showBg(0);
              cc.vv.gameData.showOtherSysNode(true);
              _this5._cbHandler && _this5._cbHandler(ret);

             case 4:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_WildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1efbzK9FlDOJoMDhiJlxd9", "RobinHood_WildGame");
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
        wild_node: cc.Node,
        multiple_node: cc.Node,
        _symbols: [],
        _stickyIdxs: [],
        _isEnterWild: false
      },
      onLoad: function onLoad() {
        this._symbolTemplate = SlotsFacade.dm.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplate.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
        this.wild_node.active = false;
        this.multiple_node.active = false;
      },
      showRandomWild: function showRandomWild(idxs) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var colIdxArr, i, idx, _i, _colIdxArr, colArr, _iterator, _step, _idx, symbol;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.wild_node.active = true;
              colIdxArr = [ [], [], [], [], [] ];
              for (i = 0; i < idxs.length; i++) {
                idx = idxs[i];
                colIdxArr[(idx - 1) % 5].push(idx);
              }
              _i = 0, _colIdxArr = colIdxArr;

             case 4:
              if (!(_i < _colIdxArr.length)) {
                _context.next = 16;
                break;
              }
              colArr = _colIdxArr[_i];
              if (!(colArr.length < 1)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("continue", 13);

             case 8:
              _iterator = _createForOfIteratorHelper(colArr);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  _idx = _step.value;
                  symbol = _this.genAWildSymbol(_idx);
                  symbol.playWildAppear();
                  _this._symbols.push(symbol);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              SlotsFacade.soundMgr.playEffect("wild_appear");
              _context.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              _i++;
              _context.next = 4;
              break;

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _addMoveWild: function _addMoveWild() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var moveWilds, newIdxs, i, idx, _i2, symbol;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              moveWilds = SlotsFacade.dm.mapFreeInfo.moveWilds;
              newIdxs = [];
              i = 0;

             case 3:
              if (!(i < moveWilds.currIdxs.length)) {
                _context2.next = 11;
                break;
              }
              idx = moveWilds.currIdxs[i];
              if (!moveWilds.randIdxs.includes(idx)) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("continue", 8);

             case 7:
              newIdxs.push(idx);

             case 8:
              i++;
              _context2.next = 3;
              break;

             case 11:
              _this2.wild_node.active = true;
              for (_i2 = 0; _i2 < newIdxs.length; _i2++) {
                symbol = _this2.genAWildSymbol(newIdxs[_i2]);
                _this2._symbols.push(symbol);
              }

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _moveWild: function _moveWild() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var moveWilds, i, idx, symbol, pos;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wild_move");
              moveWilds = SlotsFacade.dm.mapFreeInfo.moveWilds;
              _this3.wild_node.active = true;
              for (i = 0; i < _this3._symbols.length; i++) {
                idx = moveWilds.randIdxs[i];
                symbol = _this3._symbols[i];
                if (idx && symbol) {
                  pos = SlotsFacade.slots.getIdxGlobalPos(idx);
                  pos = _this3.wild_node.convertToNodeSpaceAR(pos);
                  cc.tween(symbol.node).to(.8, {
                    x: pos.x,
                    y: pos.y
                  }).start();
                } else console.log("move wild \u6570\u636e\u5f02\u5e38", moveWilds, symbol);
              }
              _this3._symbols.length > 0 && SlotsFacade.soundMgr.playEffect("moving_wild");
              _context3.next = 7;
              return SlotsFacade.delayTime(.8);

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _addStickyWild: function _addStickyWild() {
        var idxs = SlotsFacade.dm.mapFreeInfo.stickyWilds;
        this.wild_node.active = true;
        for (var i = 0; i < idxs.length; i++) {
          if (this._stickyIdxs.includes(idxs[i])) continue;
          var symbol = this.genAWildSymbol(idxs[i]);
          this._symbols.push(symbol);
          this._stickyIdxs.push(idxs[i]);
        }
      },
      _initMulWild: function _initMulWild() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var idxs, _i3, _idxs, idx, i, node, spine_wild, spine_mask;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              idxs = [ 3, 8, 13, 18, 23, 28, 33, 38, 43 ];
              for (_i3 = 0, _idxs = idxs; _i3 < _idxs.length; _i3++) {
                idx = _idxs[_i3];
                SlotsFacade.slots.GetSymbolByIdx(idx).StartMove();
              }
              _this4.multiple_node.active = true;
              for (i = 0; i < 3; i++) {
                node = _this4.multiple_node.getChildByName("mul".concat(i + 1));
                spine_wild = node.getChildByName("spine_wild").getComponent(sp.Skeleton);
                spine_wild.node.active = true;
                spine_wild.setAnimation(0, "animation5", false);
                spine_mask = node.getChildByName("spine_mask").getComponent(sp.Skeleton);
                spine_mask.node.active = true;
                spine_mask.setAnimation(0, "animation4", false);
              }

             case 4:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _expansionMulWild: function _expansionMulWild() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var multWilds, i, node, spine_mask, label;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wild_open");
              multWilds = SlotsFacade.dm.mapFreeInfo.multWilds;
              for (i = 0; i < 3; i++) {
                node = _this5.multiple_node.getChildByName("mul".concat(i + 1));
                spine_mask = node.getChildByName("spine_mask").getComponent(sp.Skeleton);
                spine_mask.node.active = true;
                spine_mask.setAnimation(0, "animation1", false);
                label = node.getChildByName("label").getComponent(cc.Label);
                label.string = "".concat(multWilds[i], "X");
                label.node.scale = 0;
                cc.tween(label.node).delay(.3).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }
              _context5.next = 5;
              return SlotsFacade.delayTime(.8);

             case 5:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _collapseMulWild: function _collapseMulWild() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, node, spine_mask, idxs, _i4, _idxs2, _i5;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              i = 0;

             case 1:
              if (!(i < 3)) {
                _context6.next = 12;
                break;
              }
              node = _this6.multiple_node.getChildByName("mul".concat(i + 1));
              spine_mask = node.getChildByName("spine_mask").getComponent(sp.Skeleton);
              spine_mask.node.active = true;
              if (!("animation4" == spine_mask.animation)) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("continue", 9);

             case 7:
              spine_mask.setAnimation(0, "animation3", false);
              spine_mask.addAnimation(0, "animation4", false);

             case 9:
              i++;
              _context6.next = 1;
              break;

             case 12:
              idxs = [ 3, 8, 13, 18, 23, 28, 33, 38, 43 ];
              for (_i4 = 0, _idxs2 = idxs; _i4 < _idxs2.length; _i4++) {
                _i5 = _idxs2[_i4];
                SlotsFacade.slots.GetSymbolByIdx(_i5).StartMove();
              }
              _context6.next = 16;
              return SlotsFacade.delayTime(.8);

             case 16:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playWinMulAni: function playWinMulAni(needSkipAniIdxs) {
        var flagArr = [ false, false, false ];
        var _iterator2 = _createForOfIteratorHelper(needSkipAniIdxs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var idx = _step2.value;
            flagArr[Math.floor(idx / 15)] = true;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        for (var i = 0; i < flagArr.length; i++) {
          var spine = cc.find("mul".concat(i + 1, "/spine_wild"), this.multiple_node).getComponent(sp.Skeleton);
          flagArr[i] ? spine.setAnimation(0, "animation2", true) : spine.setAnimation(0, "animation5", false);
        }
      },
      genAWildSymbol: function genAWildSymbol(idx) {
        var cfg = SlotsFacade.dm.getGameCfg();
        var node = cc.instantiate(this._symbolTemplate);
        node.parent = this.wild_node;
        var scp = node.addComponent(cfg.scripts.Symbols);
        scp.SetSymbolReelIdx(0);
        scp.Init(0, this.node);
        scp.ShowById(cfg.wildId);
        var pos = SlotsFacade.slots.getIdxGlobalPos(idx);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return scp;
      },
      enterWildGame: function enterWildGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var mapInfo, mapCfg, mapType, mapItem;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              mapType = SlotsFacade.dm.getGameCfg().MapType;
              mapItem = mapCfg[mapInfo.currId];
              mapItem.type == mapType.MultSlot ? _this7._initMulWild() : mapItem.type == mapType.MovingWild || mapItem.type == mapType.RandomWild || mapItem.type == mapType.StickyWild;
              _this7._isEnterWild = true;

             case 6:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      exitWildGame: function exitWildGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var mapInfo, currId, mapCfg, mapType, mapItem;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              currId = mapInfo.currId;
              0 == mapInfo.currId && (currId = SlotsFacade.dm.getGameCfg().TheFinalHurdleID);
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              mapType = SlotsFacade.dm.getGameCfg().MapType;
              mapItem = mapCfg[currId];
              mapItem.type == mapType.MultSlot ? _this8.multiple_node.active = false : mapItem.type == mapType.MovingWild ? _this8.removeWild() : mapItem.type == mapType.RandomWild ? _this8.removeWild() : mapItem.type == mapType.StickyWild && _this8.removeWild();
              _this8._isEnterWild = false;

             case 8:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      removeWild: function removeWild() {
        this._symbols = [];
        this._stickyIdxs = [];
        this.wild_node.active = false;
        this.wild_node.removeAllChildren();
      },
      hideWild: function hideWild() {
        this.wild_node.active = false;
      },
      startMove: function startMove() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var mapInfo, currId, mapCfg, mapType, mapItem;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              if (!(2 != mapInfo.state)) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", false);

             case 3:
              if (_this9._isEnterWild) {
                _context9.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context9.abrupt("return");

             case 6:
              if (SlotsFacade.dm.mapFreeInfo) {
                _context9.next = 8;
                break;
              }
              return _context9.abrupt("return");

             case 8:
              currId = mapInfo.currId;
              0 == mapInfo.currId && (currId = SlotsFacade.dm.getGameCfg().TheFinalHurdleID);
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              mapType = SlotsFacade.dm.getGameCfg().MapType;
              mapItem = mapCfg[currId];
              mapItem.type == mapType.RandomWild || (mapItem.type == mapType.MultSlot ? _this9._collapseMulWild() : mapItem.type == mapType.MovingWild ? _this9._addMoveWild() : mapItem.type == mapType.StickyWild && _this9._addStickyWild());

             case 14:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      onSpinMsg: function onSpinMsg() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var mapInfo, currId, mapCfg, mapType, mapItem;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              if (!(2 != mapInfo.state)) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return");

             case 3:
              if (_this10._isEnterWild) {
                _context10.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context10.abrupt("return");

             case 6:
              currId = mapInfo.currId;
              0 == mapInfo.currId && (currId = SlotsFacade.dm.getGameCfg().TheFinalHurdleID);
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              mapType = SlotsFacade.dm.getGameCfg().MapType;
              mapItem = mapCfg[currId];
              if (!(mapItem.type == mapType.RandomWild)) {
                _context10.next = 16;
                break;
              }
              _context10.next = 14;
              return _this10.showRandomWild(SlotsFacade.dm.mapFreeInfo.randomWilds);

             case 14:
              _context10.next = 25;
              break;

             case 16:
              if (!(mapItem.type == mapType.MultSlot)) {
                _context10.next = 19;
                break;
              }
              _context10.next = 25;
              break;

             case 19:
              if (!(mapItem.type == mapType.MovingWild)) {
                _context10.next = 24;
                break;
              }
              _context10.next = 22;
              return _this10._moveWild();

             case 22:
              _context10.next = 25;
              break;

             case 24:
              mapItem.type == mapType.StickyWild;

             case 25:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var mapInfo, currId, mapCfg, mapType, mapItem;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              if (!(2 != mapInfo.state)) {
                _context11.next = 3;
                break;
              }
              return _context11.abrupt("return");

             case 3:
              if (_this11._isEnterWild) {
                _context11.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context11.abrupt("return");

             case 6:
              currId = mapInfo.currId;
              0 == mapInfo.currId && (currId = SlotsFacade.dm.getGameCfg().TheFinalHurdleID);
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              mapType = SlotsFacade.dm.getGameCfg().MapType;
              mapItem = mapCfg[currId];
              if (!(mapItem.type == mapType.RandomWild)) {
                _context11.next = 15;
                break;
              }
              _this11.removeWild();
              _context11.next = 28;
              break;

             case 15:
              if (!(mapItem.type == mapType.MultSlot)) {
                _context11.next = 20;
                break;
              }
              _context11.next = 18;
              return _this11._expansionMulWild();

             case 18:
              _context11.next = 28;
              break;

             case 20:
              if (!(mapItem.type == mapType.MovingWild)) {
                _context11.next = 25;
                break;
              }
              _context11.next = 23;
              return _this11.hideWild();

             case 23:
              _context11.next = 28;
              break;

             case 25:
              if (!(mapItem.type == mapType.StickyWild)) {
                _context11.next = 28;
                break;
              }
              _context11.next = 28;
              return _this11.hideWild();

             case 28:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RobinHood_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c9daWjkDJGZYrXHoCTkk6x", "RobinHood_symbol");
    "use strict";
    var CurrRandomIdx = {};
    var GetSymbolId = function GetSymbolId(reelIdx) {
      reelIdx = reelIdx || 0;
      var randomSymbols = SlotsFacade.dm.getGameCfg().randomSymbols;
      0 != reelIdx && 5 != reelIdx || (randomSymbols = SlotsFacade.dm.getGameCfg().randomSkipWildSymbols);
      CurrRandomIdx.hasOwnProperty(reelIdx.toString()) || (CurrRandomIdx[reelIdx.toString()] = Math.floor(Math.random() * randomSymbols.length));
      var idx = (CurrRandomIdx[reelIdx.toString()] + 1) % randomSymbols.length;
      CurrRandomIdx[reelIdx.toString()] = idx;
      return randomSymbols[idx];
    };
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        isEpic: false,
        mirror_node: null,
        bonusSymbolMirror: null,
        label: cc.Label,
        mask: cc.Node,
        isInBonusState: false
      },
      onLoad: function onLoad() {
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.mask = this.node.getChildByName("mask");
        this.showMask(false);
      },
      showMask: function showMask(boo) {
        if (!this.mask) return;
        boo = boo || false;
        this.mask.active = boo;
      },
      StartMove: function StartMove() {
        this._super();
        this._data = null;
        this.isInBonusState = false;
        this.showMask(false);
      },
      ShowById: function ShowById(id, data) {
        var cfg = cc.vv.gameData.getGameCfg();
        id == cfg.blankId && (id = this.getRandomIdSkipBonus());
        this._super(id, data);
        this.showLabel(id, data);
        this.showColor();
        this.isInBonusState && (this.GetShowId() == cfg.bonusId ? this.showMask(false) : this.showMask(true));
      },
      getRandomId: function getRandomId() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        return randVal;
      },
      getRandomIdSkipBonus: function getRandomIdSkipBonus() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSkipBonusSymbols.length);
        var randVal = cfg.randomSkipBonusSymbols[randIdx - 1];
        return randVal;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randVal = GetSymbolId(this.GetSymbolReelIdx());
        var data = null;
        if (randVal == cfg.bonusId) {
          data = {};
          data.coin = Global.random(1, 10) * SlotsFacade.dm.GetTotalBet();
        }
        this.ShowById(randVal, data);
      },
      showLabel: function showLabel(boo) {
        if (boo && this._data && this._data.coin) {
          this.label.node.active = true;
          this.label.string = Global.convertNumToShort(this._data.coin);
        } else this.label.node.active = false;
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var stopAni = cfg.symbol[id].stop_ani.name;
              var idleAni = cfg.symbol[id].idle_ani.name;
              nodeSp.setAnimation(0, stopAni, false);
              idleAni && nodeSp.addAnimation(0, idleAni, true);
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
          if ("" != cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var triggerAni = cfg.symbol[id].trigger_ani.name;
              nodeSp.setAnimation(0, triggerAni, cfg.symbol[id].trigger_ani.loop);
            }
          }
          var label = aniNode.getChildByName("label");
          if (this._data && this._data.coin) {
            label.active = true;
            label.getComponent(cc.Label).string = Global.convertNumToShort(this._data.coin);
          }
        }
        return isPlay;
      },
      playWildAppear: function playWildAppear() {
        if (1 != this._id) return;
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
        this._showNode.active = true;
        var nodeSp = this._showNode.getComponent(sp.Skeleton);
        nodeSp && nodeSp.setAnimation(0, "animation1", false);
      },
      showColor: function showColor() {
        this.isEpic && this._showNode && this.GetShowId() != SlotsFacade.dm.getGameCfg().bonusId && (this._showNode.color = new cc.Color().fromHEX("#3E3E3E"));
      },
      hide: function hide() {
        this._showNode && (this._showNode.active = false);
      },
      cleanPlayState: function cleanPlayState() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      createBonusSymbolMirror: function createBonusSymbolMirror() {
        if (!this.mirror_node) return;
        if (this.bonusSymbolMirror) return;
        this.bonusSymbolMirror = new cc.Node();
        this.bonusSymbolMirror.parent = this.mirror_node;
        var s2 = cc.instantiate(this.node.getChildByName("s2"));
        var s3 = cc.instantiate(this.node.getChildByName("s3"));
        s2.parent = this.bonusSymbolMirror;
        s3.parent = this.bonusSymbolMirror;
      },
      StopMoveDeep: function StopMoveDeep() {
        var cfg = SlotsFacade.dm.getGameCfg();
        this._id == cfg.bonusId && this.playStopAnimation();
      },
      changeToBonusSymbol: function changeToBonusSymbol(coin) {
        var _this = this;
        var cfg = SlotsFacade.dm.getGameCfg();
        this.ShowById(cfg.bonusId, {
          coin: coin
        });
        this.label.node.scale = 0;
        cc.tween(this.label.node).to(.3, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        var spine = this.node.getChildByName("w3").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation5", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          _this.playStopAnimation();
        });
      },
      playBonusLight: function playBonusLight() {
        var cfg = SlotsFacade.dm.getGameCfg();
        if (this._id != cfg.bonusId) return;
        var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
        if (showNode) {
          var spine = showNode.getChildByName("w3").getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation8", false);
          spine.addAnimation(0, "animation7", false);
        }
      },
      setBonusState: function setBonusState(boo) {
        boo = boo || false;
        this.isInBonusState = boo;
        boo && (3 == this.GetShowId() ? this.showMask(false) : this.showMask(true));
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "RobinHood_BagBonus", "RobinHood_Bonus", "RobinHood_Bottom", "RobinHood_Cfg", "RobinHood_Character", "RobinHood_CollectProgress", "RobinHood_FlowCtrl", "RobinHood_Free", "RobinHood_GameData", "RobinHood_Logic", "RobinHood_MainPanel", "RobinHood_Map", "RobinHood_Popup", "RobinHood_PrizePool", "RobinHood_Reel", "RobinHood_Slots", "RobinHood_Sound", "RobinHood_WheelGame", "RobinHood_WildGame", "RobinHood_symbol" ]);