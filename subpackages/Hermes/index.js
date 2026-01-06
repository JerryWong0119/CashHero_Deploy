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
  Hermes_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4ab2eJBkxAFahfof1T57z3", "Hermes_BonusReel");
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
        _reelIdx: null,
        _coin: 0,
        _count: 0,
        _symbols: [],
        _col: 5,
        _row: 8,
        _items: null,
        _idxs: null,
        _restCnt: null,
        _yellowKuang: null
      },
      Init: function Init(_reelIdx) {
        var dataArr = [ 4, 4, 6, 6, 8 ];
        this._reelIdx = _reelIdx;
        this._count = dataArr[_reelIdx];
        this._coin = 0;
      },
      GetReelIdx: function GetReelIdx() {
        return this._reelIdx;
      },
      SetBonusReel: function SetBonusReel(idxs, items, restCnt, fullCnt, isInitWing) {
        this._idxs = idxs;
        this._items = items;
        this._restCnt = restCnt;
        this._fullCnt = fullCnt;
        var gameData = cc.vv.gameData;
        var holderNode = cc.find("mask/holder", this.node);
        gameData.GetFreeGameTimes() && true == gameData.GetFreeGameTimes().status || this.showSmallWing();
        for (var i = 0; i < this._count; i++) {
          var bonus_Symbol = cc.find("bonus_Symbol" + i, holderNode);
          bonus_Symbol.check = false;
          bonus_Symbol.active = false;
        }
        var index = 0;
        var play_bonus_notify = false;
        var _iterator = _createForOfIteratorHelper(idxs), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var idx = _step.value;
            var col = (idx - 1) % this._col;
            var row = this._row - Math.floor((idx - 1) / this._col) - 1;
            var _bonus_Symbol = cc.find("bonus_Symbol" + row, holderNode);
            _bonus_Symbol.check || isInitWing || (play_bonus_notify = true);
            _bonus_Symbol.active = true;
            _bonus_Symbol.check = true;
            var _iterator2 = _createForOfIteratorHelper(_bonus_Symbol.children), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var iterator = _step2.value;
                iterator.check = false;
                iterator.active = false;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var itemInfo = items[index];
            index++;
            if (itemInfo.coin) {
              cc.find("s3/lab", _bonus_Symbol).getComponent(cc.Label).string = Global.formatNumShort(itemInfo.coin, 0);
              cc.find("s3", _bonus_Symbol).active = true;
            } else 1 == itemInfo.jackpotId ? cc.find("s301", _bonus_Symbol).active = true : 2 == itemInfo.jackpotId ? cc.find("s302", _bonus_Symbol).active = true : 3 == itemInfo.jackpotId ? cc.find("s303", _bonus_Symbol).active = true : 4 == itemInfo.jackpotId && (cc.find("s304", _bonus_Symbol).active = true);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        play_bonus_notify && Global.SlotsSoundMgr.playEffect("bonus_notify");
        this.showKuang();
      },
      showKuang: function showKuang() {
        var idxs = this._idxs;
        var self = this;
        if (this._fullCnt - 1 === idxs.length) {
          if (!cc.find("mask/spine_blue", this.node).active) {
            var aniNameArr = [ "animation4_", "animation4_", "animation6_", "animation6_", "animation8_" ];
            var spine = cc.find("mask/spine_blue", this.node).getComponent(sp.Skeleton);
            cc.find("mask/spine_blue", this.node).active = true;
            spine.setAnimation(0, aniNameArr[this._reelIdx] + 1, false);
            spine.setCompleteListener(function(track) {
              spine.setAnimation(0, aniNameArr[self._reelIdx] + 2, false);
            });
            return;
          }
        } else cc.find("mask/spine_blue", this.node).active = false;
        var rowArr = [];
        var _iterator3 = _createForOfIteratorHelper(idxs), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var idx = _step3.value;
            var col = (idx - 1) % this._col;
            var row = this._row - Math.floor((idx - 1) / this._col) - 1;
            rowArr.push(row);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        rowArr.sort();
      },
      StartMove: function StartMove() {
        var idxs = this._idxs;
        if (this._restCnt >= 0 && idxs && this._fullCnt - 1 === idxs.length) {
          var dataArr = [ {
            index: 0,
            check: false,
            y: 46.5
          }, {
            index: 1,
            check: false,
            y: 139.5
          }, {
            index: 2,
            check: false,
            y: 232.5
          }, {
            index: 3,
            check: false,
            y: 325.5
          }, {
            index: 4,
            check: false,
            y: 418.5
          }, {
            index: 5,
            check: false,
            y: 511.5
          }, {
            index: 6,
            check: false,
            y: 604.5
          }, {
            index: 7,
            check: false,
            y: 697.5
          } ];
          var indexObj = {};
          var _iterator4 = _createForOfIteratorHelper(idxs), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var idx = _step4.value;
              var col = (idx - 1) % this._col;
              var row = this._row - Math.floor((idx - 1) / this._col) - 1;
              dataArr[row].check = true;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          for (var _i = 0, _dataArr = dataArr; _i < _dataArr.length; _i++) {
            var iterator = _dataArr[_i];
            if (false == iterator.check) {
              indexObj = iterator;
              break;
            }
          }
          cc.find("mask/spine_one_blue", this.node).active = true;
          cc.find("mask/spine_one_blue", this.node).getComponent(sp.Skeleton).setAnimation(0, "animation", true);
          cc.find("mask/spine_one_blue", this.node).y = indexObj.y;
        } else {
          cc.find("mask/spine_one_blue", this.node).active = false;
          cc.find("mask/spine_blue", this.node).active = false;
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        cc.find("mask/spine_one_blue", this.node).active = false;
        this._restCnt <= 0 && (cc.find("mask/spine_blue", this.node).active = false);
      },
      collectWing: function collectWing(reelGoldIngotInfo) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var self, slotsNode, holderNode, str;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              self = _this;
              slotsNode = cc.vv.gameData.GetSlotsNode();
              holderNode = cc.find("mask/holder", _this.node);
              str = "reels_frame/lint_bottom/down/coin" + (_this._reelIdx + 1) + "/lab";
              _this._coin = 0;
              cc.find(str, slotsNode).getComponent(cc.Label).string = _this._coin;
              if (!(reelGoldIngotInfo.length > 0)) {
                _context2.next = 10;
                break;
              }
              return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
                var aniNameArr, spine, firstPosArr, jptime, _loop, key;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    aniNameArr = [ "animation4_", "animation4_", "animation6_", "animation6_", "animation8_" ];
                    spine = cc.find("mask/spine_purple", _this.node).getComponent(sp.Skeleton);
                    cc.find("mask/spine_purple", _this.node).active = true;
                    cc.find("mask/spine_blue", _this.node).active = false;
                    cc.find("mask/spine_one_blue", _this.node).active = false;
                    spine.setAnimation(0, aniNameArr[_this._reelIdx] + 1, false);
                    spine.setCompleteListener(function(track) {
                      spine.setAnimation(0, aniNameArr[self._reelIdx] + 2, false);
                    });
                    Global.SlotsSoundMgr.playEffect("appear");
                    _context.next = 10;
                    return _this.awaitTime(2);

                   case 10:
                    firstPosArr = [];
                    jptime = 0;
                    _loop = function _loop(key) {
                      var itemInfo = reelGoldIngotInfo[key];
                      var col = (itemInfo.idx - 1) % _this._col;
                      var row = _this._row - Math.floor((itemInfo.idx - 1) / _this._col) - 1;
                      var bonus_Symbol = cc.find("bonus_Symbol" + row, holderNode);
                      bonus_Symbol.active = true;
                      firstPosArr.push(bonus_Symbol.y);
                      var str = "reels_frame/lint_bottom/down/coin" + (col + 1);
                      var str2 = "reels_frame/lint_bottom/down/item" + (col + 1);
                      var coinNode = cc.find(str, slotsNode);
                      var stoveNode = cc.find(str2, slotsNode);
                      var coinLabNode = cc.find("lab", coinNode);
                      coinNode.active = true;
                      var delayTime = key;
                      cc.tween(bonus_Symbol).by(.2, {
                        y: 10
                      }).delay(1 * delayTime + jptime).call(function() {
                        Global.SlotsSoundMgr.playEffect("jubaopen");
                      }).to(.6, {
                        y: -76
                      }).call(function() {
                        bonus_Symbol.y = firstPosArr[delayTime];
                        itemInfo.item.jackpotValue && (_this._coin += itemInfo.item.jackpotValue);
                        itemInfo.item.coin && (_this._coin += itemInfo.item.coin);
                        coinLabNode.getComponent(cc.Label).string = Global.formatNumShort(_this._coin, 0);
                        cc.find("spineShan", stoveNode).active = true;
                        cc.find("spineShan", stoveNode).getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                        bonus_Symbol.active = false;
                        itemInfo.item.jackpotId && cc.vv.gameData.GetSlotsScript().showJpDialog(itemInfo.item.jackpotId);
                        delayTime == reelGoldIngotInfo.length - 1 && cc.tween(slotsNode).delay(.8).call(function() {
                          cc.find("spineShan", stoveNode).active = false;
                          cc.find("mask/spine_purple", _this.node).active = false;
                        }).start();
                      }).start();
                      itemInfo.item.jackpotValue && (jptime += 4);
                    };
                    for (key in reelGoldIngotInfo) _loop(key);
                    _context.next = 16;
                    return _this.awaitTime(1.2 * reelGoldIngotInfo.length + 2 + jptime);

                   case 16:
                   case "end":
                    return _context.stop();
                  }
                }, _callee);
              })(), "t0", 8);

             case 8:
              _context2.next = 11;
              break;

             case 10:
              cc.find("mask/spine_purple", _this.node).active = false;

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showSmallWing: function showSmallWing(type) {
        var slotsNode = cc.vv.gameData.GetSlotsNode();
        var holderNode = cc.find("mask/holder", this.node);
        var itemNode = cc.find("reels_frame/lint_bottom/down/item" + (this._reelIdx + 1), slotsNode);
        var upbgNode = cc.find("mask/upBg", itemNode);
        if (this._restCnt <= 0) {
          cc.tween(upbgNode).to(.2, {
            y: 45
          }).start();
          var _iterator5 = _createForOfIteratorHelper(holderNode.children), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var iterator = _step5.value;
              iterator.active = false;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } else cc.tween(upbgNode).to(.2, {
          y: 0
        }).start();
        1 === type && (this._restCnt -= 1);
        var idxs = this._idxs;
        if (idxs.length > 0) {
          var wingNodeArr = [ cc.find("wing1", upbgNode), cc.find("wing2", upbgNode), cc.find("wing3", upbgNode) ];
          for (var i = 0; i < 3; i++) wingNodeArr[i].active = i < this._restCnt;
        }
      },
      hideSuspendWing: function hideSuspendWing() {
        for (var i = 0; i < this._count; i++) cc.find("mask/holder/bonus_Symbol" + i, this.node).active = false;
      },
      hideAllKuang: function hideAllKuang() {
        cc.find("mask/spine_purple", this.node).active = false;
        cc.find("mask/spine_blue", this.node).active = false;
        cc.find("mask/spine_one_blue", this.node).active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Hermes_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de248MFvuhBSZFqTNV8WpNh", "Hermes_ButtonSafe");
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
          cc.vv.gameData.GetSlotsScript().scheduleOnce(function() {
            buttton.interactable = true;
          }, this.safeTime);
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  Hermes_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77758KqbQ1Ly7WWklfrYxhA", "Hermes_Cfg");
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
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        isMask: false
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w2",
        win_ani: {
          name: "animation1",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w2",
        win_ani: {
          name: "animation2",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 303, {
        node: "s303",
        win_node: "w2",
        win_ani: {
          name: "animation3",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 304, {
        node: "s304",
        win_node: "w2",
        win_ani: {
          name: "animation4",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 20, {
        node: "s20",
        win_node: "w10",
        isMask: true
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Hermes_Slots",
        Reels: "Hermes_Reel",
        Symbols: "Hermes_Symbol"
      },
      col: 5,
      row: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 93
      },
      randomSymbols: [ 7, 8, 9, 10, 4, 5, 6 ],
      kuang: "kuang",
      autoModelDelay: .5,
      speed: 3e3,
      reelStopInter: .2,
      bonusReelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      helpItems: [ "games/Hermes/prefab/help_node/page1", "games/Hermes/prefab/help_node/page2", "games/Hermes/prefab/help_node/page3", "games/Hermes/prefab/help_node/page4", "games/Hermes/prefab/help_node/page5" ],
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "spine_yellow_scatter",
        path: "games/Hermes/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_notify",
        antSound: "anticipation",
        antSpeed: 2e3
      } ],
      normalBgm: "base_bgm",
      commEffect: {
        path: "games/Hermes/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Hermes_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1b4eiS8M1LK7oZSoiv7PHy", "Hermes_FreeGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Hermes_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8609NtQ2dDZb40ERhO8gQu", "Hermes_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _poolList: [],
        _freeType: 0,
        _storeEntranceStatus: false,
        _goldIngotInfos: []
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._collect = this._deskInfo.collect;
        this._deskInfo.coinBonus && (this._poolList = this._deskInfo.coinBonus.poolList);
        this._deskInfo.freeGameData && (this._freeType = this._deskInfo.freeGameData.freeType);
        this._deskInfo.goldIngotInfoInFree && (this.goldIngotInfoInFree = this._deskInfo.goldIngotInfoInFree);
        this.SetJadeStore(this._deskInfo.jadeStore);
        this.SetGoldIngotInfos(this._deskInfo.goldIngotInfos);
      },
      onLoad: function onLoad() {},
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._deskInfo.user.coin = msg.coin;
          this._gameInfo = msg;
          this._deskInfo.restFreeCount = msg.freeCnt;
          this._deskInfo.allFreeCount = msg.allFreeCnt;
          this._deskInfo.coinBonus = msg.coinBonus;
          this._needBet = this._deskInfo.needBet;
          this.SetJadeStore(this._deskInfo.jadeStore);
          msg.goldIngotInfoInFree && (this.goldIngotInfoInFree = msg.goldIngotInfoInFree);
        }
        this._super(msg);
      },
      SetSlotsNode: function SetSlotsNode(scp) {
        this._slotsNode = scp;
      },
      GetSlotsNode: function GetSlotsNode(scp) {
        return this._slotsNode;
      },
      SetStoreScript: function SetStoreScript(scp) {
        this._collectScp = scp;
      },
      GetStoreScript: function GetStoreScript() {
        return this._collectScp;
      },
      SetPopScript: function SetPopScript(scp) {
        this._popupScp = scp;
      },
      GetPopScript: function GetPopScript() {
        return this._popupScp;
      },
      SetWheelScript: function SetWheelScript(scp) {
        this._wheelScp = scp;
      },
      GetWheelScript: function GetWheelScript() {
        return this._wheelScp;
      },
      SetGoldIngotInfoInFree: function SetGoldIngotInfoInFree(val) {
        this.goldIngotInfoInFree = val;
      },
      GetGoldIngotInfoInFree: function GetGoldIngotInfoInFree() {
        return this.goldIngotInfoInFree;
      },
      SetGoldIngotInfos: function SetGoldIngotInfos(goldIngotInfos) {
        this._goldIngotInfos = goldIngotInfos;
      },
      GetGoldIngotInfos: function GetGoldIngotInfos() {
        return this._goldIngotInfos;
      },
      SetGoldIngotInfo: function SetGoldIngotInfo(goldIngotInfo, index) {
        this._goldIngotInfos[index] = JSON.parse(JSON.stringify(goldIngotInfo));
      },
      GetOpenStoreBet: function GetOpenStoreBet() {
        var needBet = this._deskInfo.needBet || 1;
        return this._deskInfo.mults[needBet - 1];
      },
      GetJadeStore: function GetJadeStore() {
        return this._jadeStore;
      },
      SetJadeStore: function SetJadeStore(scp) {
        this._jadeStore = scp;
      },
      SetStoreEntranceStatus: function SetStoreEntranceStatus(scp) {
        this._storeEntranceStatus = scp;
      },
      GetStoreEntranceStatus: function GetStoreEntranceStatus() {
        return this._storeEntranceStatus;
      },
      SetFreeGameTimes: function SetFreeGameTimes(_freeGameTimes) {
        this._freeGameTimes = _freeGameTimes;
      },
      GetFreeGameTimes: function GetFreeGameTimes() {
        return this._freeGameTimes;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Hermes_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "716ffklhZRDdIZdhQXpncxX", "Hermes_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        cc.vv.gameData.SetSlotsNode(cc.vv.gameData.GetSlotsScript().node);
        var Hermes_Store = cc.find("safe_node/node_store", this.node).addComponent("Hermes_Store");
        Hermes_Store.Init();
        cc.vv.gameData.SetStoreScript(Hermes_Store);
        var wheelNode = cc.find("safe_node/freeGame/zhuanPanNode", this.node);
        var script_wheel = wheelNode.addComponent("Hermes_Wheel");
        script_wheel.Init();
        cc.vv.gameData.SetWheelScript(script_wheel);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Hermes_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c725FUpWBIDL7K1Wou4aK3", "Hermes_Pop");
    "use strict";
    cc._RF.pop();
  }, {} ],
  Hermes_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b21b0+lJn5D67XVbUSHlwzZ", "Hermes_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Hermes_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16824ZBOWtDLZY3XFDGds9s", "Hermes_Slots");
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
    var Hermes_BonusReel = require("./Hermes_BonusReel");
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _curTimes: 0,
        _bonusReels: [],
        _superWildList: [],
        _reelGoldIngotInfos: []
      },
      onLoad: function onLoad() {
        this._super();
        this._entranceBtn = cc.find("btn_collect", this.node);
        Global.btnClickEvent(this._entranceBtn, function() {
          Global.SlotsSoundMgr.playEffect("btn_click");
          this.onBtnStore();
        }, this);
        for (var i = 1; i <= 5; i++) {
          var bonusReelNode = cc.find("super_wild_reel/reel" + i, this.node);
          this._bonusReels[i - 1] = bonusReelNode.addComponent("Hermes_BonusReel");
          this._bonusReels[i - 1].Init(i - 1);
        }
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var GameData, deskInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              GameData = cc.vv.gameData;
              deskInfo = GameData._deskInfo;
              GameData.SetJadeStore(deskInfo.jadeStore);
              _this.refreshIngotUi(GameData._jadeStore.jadeCnt);
              if (cc.vv.gameData.GetTotalFree() > 0) {
                2 == deskInfo.jadeStore.state ? cc.vv.gameData.SetFreeGameTimes({
                  status: true,
                  times: cc.vv.gameData.GetFreeTime(),
                  type: "pageReward",
                  page: deskInfo.jadeStore.unlockPage
                }) : cc.vv.gameData.SetFreeGameTimes({
                  status: true,
                  times: cc.vv.gameData.GetFreeTime(),
                  type: "normal"
                });
                _this.enterFreeGame();
              } else {
                cc.vv.gameData.SetFreeGameTimes({
                  status: false
                });
                _this.ShowGameview(false);
              }
              _this.checkStoreEntrance(true);
              _this.CanDoNextRound();

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        this.checkStoreEntrance();
        this.changeWing();
      },
      StartMove: function StartMove() {
        var gameData = cc.vv.gameData;
        this._super();
        this._entranceBtn.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playNormalBgm();
        gameData.GetFreeGameTimes().status || this.reduceSmallWing();
        this.hideAllSmallCoin();
        for (var i = 1; i <= 5; i++) this._bonusReels[i - 1].StartMove();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        this.sortCollectWing();
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var jadeInfo = this._gameInfo.jadeInfo;
        var currGoldIngotInfo = this._gameInfo.currGoldIngotInfo;
        var goldIngotInfo = this._gameInfo.goldIngotInfo;
        cc.vv.gameData.GetFreeGameTimes().status && (goldIngotInfo = this._gameInfo.goldIngotInfoInFree);
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            if (jadeInfo) {
              var index = jadeInfo.idxs.indexOf(i + 1);
              if (index >= 0) {
                res.data.num = jadeInfo.cnts[index];
                res.data.type = 1;
              }
            }
            if (currGoldIngotInfo) {
              var _index = currGoldIngotInfo.idxs.indexOf(i + 1);
              if (_index >= 0) {
                res.data.item = currGoldIngotInfo.items[_index];
                res.data.type = 2;
              }
            }
            var _iterator = _createForOfIteratorHelper(goldIngotInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var iterator = _step.value;
                var _index2 = iterator.idxs.indexOf(i + 1);
                if (_index2 >= 0) {
                  res.data.item = iterator.items[_index2];
                  res.data.type = 2;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
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
      ShowSymbolTopAni: function ShowSymbolTopAni(nRow, nCol) {
        if (this._topAniNode) {
          var cfg = cc.vv.gameData.getGameCfg();
          var symScp = cfg.scripts.Symbols;
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", nRow, nCol), this._topAniNode);
          if (showNode) {
            showNode.active = true;
            return showNode.getComponent(symScp);
          }
          var reel = this._reels[nCol];
          var symbol = reel.GetSymbolByRow(nRow);
          if (symbol) {
            var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
            var newNode = cc.instantiate(symbol.node);
            newNode.parent = this._topAniNode;
            newNode.name = cc.js.formatStr("top_symbol_%s_%s", nRow, nCol);
            newNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            cc.find("ingot", newNode).removeFromParent();
            return newNode.getComponent(symScp);
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
        for (var i = 1; i <= 5; i++) this._bonusReels[i - 1].OnSpinEnd();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var gameData, betIndex, nWin, nTotal, freeCnt, allFreeCnt, freeInfo, rest, autoTime;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              gameData = cc.vv.gameData;
              gameData.SetJadeStore(_this2._gameInfo.jadeStore);
              _this2.collectJade();
              betIndex = cc.vv.gameData.GetBetIdx();
              gameData.SetGoldIngotInfo(_this2._gameInfo.goldIngotInfo, betIndex - 1);
              _context2.next = 7;
              return _this2.showWing();

             case 7:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 13;
              return new Promise(function(sucess, failed) {
                var isUpdate = true;
                _this2._gameInfo.bonusGame && (isUpdate = false);
                _this2.ShowBottomWin(nWin, nTotal, isUpdate, function() {
                  sucess();
                });
              });

             case 13:
              freeCnt = _this2._gameInfo.freeCnt;
              allFreeCnt = _this2._gameInfo.allFreeCnt;
              if (!(freeCnt && allFreeCnt && allFreeCnt == freeCnt)) {
                _context2.next = 26;
                break;
              }
              Global.SlotsSoundMgr.playEffect("bell");
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              freeInfo.scatterIdx.forEach(function(idx) {
                var symbol = _this2.GetSymbolByIdx(idx);
                symbol && symbol.playTriggerAnimation();
              });
              _context2.next = 21;
              return cc.vv.gameData.awaitTime(1.5);

             case 21:
              cc.vv.gameData.SetFreeGameTimes({
                status: true,
                times: _this2._gameInfo.freeCnt,
                type: "normal"
              });
              _context2.next = 24;
              return _this2.CheckEnterFreeGame(_this2._gameInfo.allFreeCnt);

             case 24:
              _context2.next = 33;
              break;

             case 26:
              if (!(allFreeCnt && 0 == freeCnt)) {
                _context2.next = 31;
                break;
              }
              _context2.next = 29;
              return _this2.CheckExitFreeGame(_this2._gameInfo.freeWinCoin);

             case 29:
              _context2.next = 33;
              break;

             case 31:
              cc.vv.gameData.GetFreeGameTimes().status || _this2.showAllMask(false);
              _this2.CanDoNextRound();

             case 33:
              rest = cc.vv.gameData.GetFreeTime();
              autoTime = cc.vv.gameData.GetAutoModelTime();
              0 == rest && autoTime <= 0 && (_this2._entranceBtn.getComponent(cc.Button).interactable = true);

             case 36:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      refreshIngotUi: function refreshIngotUi(num) {
        cc.find("lab", this._entranceBtn).getComponent(cc.Label).string = Global.FormatNumToComma(num);
        var moneyLab = cc.find("Canvas/safe_node/node_store/layout/money_bg/lbl_money");
        moneyLab.getComponent(cc.Label).string = Global.FormatNumToComma(num);
      },
      CheckEnterFreeGame: function CheckEnterFreeGame(allFreeCnt) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(suc) {
                  var self, gameData, freeGameBeginAniNode, spine, startBtn, firstStr, func;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      self = _this3;
                      gameData = cc.vv.gameData;
                      if (!("pageReward" === gameData.GetFreeGameTimes().type)) {
                        _context4.next = 7;
                        break;
                      }
                      _context4.next = 6;
                      return _this3.CheckEnterPageRewardFreeGame(_this3._gameInfo.allFreeCnt);

                     case 6:
                      return _context4.abrupt("return");

                     case 7:
                      freeGameBeginAniNode = cc.find("Canvas/safe_node/freeGameBeginAniNode");
                      spine = cc.find("freeGameSpine", freeGameBeginAniNode).getComponent(sp.Skeleton);
                      startBtn = cc.find("freeGameSpine/startBtn", freeGameBeginAniNode);
                      startBtn.scale = 0;
                      freeGameBeginAniNode.active = true;
                      firstStr = 1;
                      "super" === gameData.GetFreeGameTimes().type ? firstStr = 5 : 10 == allFreeCnt ? firstStr = 1 : 15 == allFreeCnt ? firstStr = 2 : 20 == allFreeCnt && (firstStr = 3);
                      Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
                      spine.setAnimation(0, "animation" + firstStr + "_1", false);
                      spine.addAnimation(0, "animation" + firstStr + "_2", true);
                      _context4.next = 19;
                      return cc.vv.gameData.awaitTime(.5);

                     case 19:
                      cc.tween(startBtn).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context4.next = 22;
                      return cc.vv.gameData.awaitTime(.5);

                     case 22:
                      func = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("btn_click");
                              startBtn.off("click");
                              spine.setAnimation(0, "animation" + firstStr + "_3", false);
                              cc.tween(startBtn).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context3.next = 6;
                              return cc.vv.gameData.awaitTime(.8);

                             case 6:
                              freeGameBeginAniNode.active = false;
                              self.playCutScreenAnim();
                              Global.SlotsSoundMgr.playEffect("fgtransition");
                              _context3.next = 11;
                              return cc.vv.gameData.awaitTime(1.5);

                             case 11:
                              self.enterFreeGame();
                              _context3.next = 14;
                              return cc.vv.gameData.awaitTime(2);

                             case 14:
                              self.CanDoNextRound();
                              suc();

                             case 16:
                             case "end":
                              return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function func() {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(startBtn, func);
                      startBtn.off("click");
                      Global.btnClickEvent(startBtn, function() {
                        startBtn.stopAllActions();
                        func();
                      }, _this3);

                     case 26:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckEnterPageRewardFreeGame: function CheckEnterPageRewardFreeGame(allFreeCnt) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(suc) {
                  var self, gameData, pageFreeGameAniNode, spine, startBtn, collectBtn, firstStr, func;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      self = _this4;
                      gameData = cc.vv.gameData;
                      pageFreeGameAniNode = cc.find("Canvas/safe_node/pageFreeGameAniNode");
                      spine = cc.find("freeGameSpine", pageFreeGameAniNode).getComponent(sp.Skeleton);
                      startBtn = cc.find("freeGameSpine/startBtn", pageFreeGameAniNode);
                      collectBtn = cc.find("freeGameSpine/collectBtn", pageFreeGameAniNode);
                      cc.find("freeGameSpine/labNode", pageFreeGameAniNode).active = false;
                      startBtn.active = true;
                      collectBtn.active = false;
                      startBtn.scale = 0;
                      pageFreeGameAniNode.active = true;
                      firstStr = gameData.GetFreeGameTimes().page;
                      Global.SlotsSoundMgr.playEffect("superfree_dialog_start_show");
                      spine.setAnimation(0, "animation" + firstStr + "_1", false);
                      spine.addAnimation(0, "animation" + firstStr + "_2", true);
                      _context7.next = 17;
                      return cc.vv.gameData.awaitTime(.5);

                     case 17:
                      cc.tween(startBtn).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context7.next = 20;
                      return cc.vv.gameData.awaitTime(.5);

                     case 20:
                      func = function() {
                        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("btn_click");
                              startBtn.off("click");
                              spine.setAnimation(0, "animation" + firstStr + "_3", false);
                              cc.tween(startBtn).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context6.next = 6;
                              return cc.vv.gameData.awaitTime(.8);

                             case 6:
                              pageFreeGameAniNode.active = false;
                              self.playCutScreenAnim();
                              Global.SlotsSoundMgr.playEffect("fgtransition");
                              _context6.next = 11;
                              return cc.vv.gameData.awaitTime(1.5);

                             case 11:
                              self.enterFreeGame();
                              _context6.next = 14;
                              return cc.vv.gameData.awaitTime(2);

                             case 14:
                              self.CanDoNextRound();
                              suc();

                             case 16:
                             case "end":
                              return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function func() {
                          return _ref4.apply(this, arguments);
                        };
                      }();
                      startBtn.off("click");
                      cc.vv.gameData.checkAutoPlay(startBtn, func);
                      Global.btnClickEvent(startBtn, function() {
                        startBtn.stopAllActions();
                        func();
                      }, _this4);

                     case 24:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x2) {
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
      enterFreeGame: function enterFreeGame() {
        Global.SlotsSoundMgr.playBgm("free_bgm");
        var safeNode = cc.find("Canvas/safe_node");
        var gameData = cc.vv.gameData;
        this.ShowGameview(true);
        cc.find("spin_hero", safeNode).active = false;
        cc.find("slots/btn_collect", safeNode).active = false;
        cc.find("LMSlots_PrizePool_1", safeNode).active = false;
        cc.find("freeGame", safeNode).active = true;
        if ("pageReward" === gameData.GetFreeGameTimes().type) {
          cc.find("freeGame/pageReward", safeNode).active = true;
          var _iterator2 = _createForOfIteratorHelper(cc.find("freeGame/pageReward", safeNode).children), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var iterator = _step2.value;
              iterator.active = false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          cc.find("freeGame/pageReward/" + gameData.GetFreeGameTimes().page, safeNode).active = true;
        } else {
          this.showAllMask(true);
          cc.find("freeGame/pageReward", safeNode).active = false;
        }
      },
      CheckExitFreeGame: function CheckExitFreeGame(num) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(suc) {
                  var self, gameData, freeGameEndAniNode, spine, collectBtn, labNode, func;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      self = _this5;
                      gameData = cc.vv.gameData;
                      if (!("pageReward" === gameData.GetFreeGameTimes().type)) {
                        _context10.next = 7;
                        break;
                      }
                      _context10.next = 6;
                      return _this5.CheckExitPageRewardFreeGame(_this5._gameInfo.freeWinCoin);

                     case 6:
                      return _context10.abrupt("return");

                     case 7:
                      freeGameEndAniNode = cc.find("Canvas/safe_node/freeGameEndAniNode");
                      spine = cc.find("freeGameSpine", freeGameEndAniNode).getComponent(sp.Skeleton);
                      collectBtn = cc.find("freeGameSpine/collectBtn", freeGameEndAniNode);
                      labNode = cc.find("freeGameSpine/labNode", freeGameEndAniNode);
                      collectBtn.scale = 0;
                      labNode.scale = 0;
                      freeGameEndAniNode.active = true;
                      Global.doRoallNumEff(cc.find("lab", labNode), 0, num, 2, null, null, 0, true);
                      Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
                      spine.setAnimation(0, "animation4_1", false);
                      spine.addAnimation(0, "animation4_2", true);
                      _context10.next = 20;
                      return cc.vv.gameData.awaitTime(.5);

                     case 20:
                      cc.tween(collectBtn).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).call(function() {}).start();
                      labNode.active = true;
                      cc.tween(labNode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).call(function() {}).start();
                      _context10.next = 25;
                      return cc.vv.gameData.awaitTime(.5);

                     case 25:
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("btn_click");
                              collectBtn.off("click");
                              spine.setAnimation(0, "animation4_3", false);
                              cc.tween(collectBtn).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              cc.tween(labNode).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context9.next = 7;
                              return cc.vv.gameData.awaitTime(.8);

                             case 7:
                              freeGameEndAniNode.active = false;
                              self.playCutScreenAnim(true);
                              Global.SlotsSoundMgr.playEffect("act2");
                              _context9.next = 12;
                              return cc.vv.gameData.awaitTime(2);

                             case 12:
                              self.exitFreeGame();
                              suc();

                             case 14:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(collectBtn, func);
                      collectBtn.off("click");
                      Global.btnClickEvent(collectBtn, function() {
                        collectBtn.stopAllActions();
                        func();
                      }, _this5);

                     case 29:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x3) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      CheckExitPageRewardFreeGame: function CheckExitPageRewardFreeGame(num) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(suc) {
                  var self, pageFreeGameAniNode, spine, startBtn, collectBtn, labNode, func;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      self = _this6;
                      pageFreeGameAniNode = cc.find("Canvas/safe_node/pageFreeGameAniNode");
                      spine = cc.find("freeGameSpine", pageFreeGameAniNode).getComponent(sp.Skeleton);
                      startBtn = cc.find("freeGameSpine/startBtn", pageFreeGameAniNode);
                      collectBtn = cc.find("freeGameSpine/collectBtn", pageFreeGameAniNode);
                      labNode = cc.find("freeGameSpine/labNode", pageFreeGameAniNode);
                      startBtn.active = false;
                      collectBtn.active = true;
                      collectBtn.scale = 0;
                      labNode.scale = 0;
                      pageFreeGameAniNode.active = true;
                      Global.doRoallNumEff(lab, 0, num, 2, null, null, 0, true);
                      Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
                      spine.setAnimation(0, "animation5_1", false);
                      spine.addAnimation(0, "animation5_2", true);
                      _context13.next = 17;
                      return cc.vv.gameData.awaitTime(.5);

                     case 17:
                      cc.tween(collectBtn).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      labNode.active = true;
                      cc.tween(labNode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context13.next = 22;
                      return cc.vv.gameData.awaitTime(.5);

                     case 22:
                      func = function() {
                        var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("btn_click");
                              collectBtn.off("click");
                              spine.setAnimation(0, "animation5_3", false);
                              cc.tween(collectBtn).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              cc.tween(labNode).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context12.next = 7;
                              return cc.vv.gameData.awaitTime(.8);

                             case 7:
                              pageFreeGameAniNode.active = false;
                              self.playCutScreenAnim(true);
                              Global.SlotsSoundMgr.playEffect("act2");
                              _context12.next = 12;
                              return cc.vv.gameData.awaitTime(2);

                             case 12:
                              self.exitFreeGame();
                              suc();

                             case 14:
                             case "end":
                              return _context12.stop();
                            }
                          }, _callee12);
                        }));
                        return function func() {
                          return _ref8.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(collectBtn, func);
                      collectBtn.off("click");
                      Global.btnClickEvent(collectBtn, function() {
                        collectBtn.stopAllActions();
                        func();
                      }, _this6);

                     case 26:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x4) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      exitFreeGame: function exitFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var gameData, safeNode, freeWin;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              gameData = cc.vv.gameData;
              safeNode = cc.find("Canvas/safe_node");
              cc.find("slots/btn_collect", safeNode).active = true;
              cc.find("LMSlots_PrizePool_1", safeNode).active = true;
              cc.find("freeGame", safeNode).active = false;
              _this7.ShowGameview(false);
              _this7.showAllMask(false);
              _context15.next = 10;
              return _this7.awaitTime(2);

             case 10:
              freeWin = gameData.GetGameTotalFreeWin();
              _context15.next = 13;
              return gameData.GetSlotsScript().ShowBottomWin(freeWin, freeWin, true, null, 1);

             case 13:
              gameData.SetFreeGameTimes({
                status: false
              });
              Global.SlotsSoundMgr.playNormalBgm(true);
              _context15.next = 17;
              return _this7.awaitTime(1);

             case 17:
              _this7.CanDoNextRound();

             case 18:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      playCutScreenAnim: function playCutScreenAnim() {
        var bShowHero = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var cutScreen = cc.find("Canvas/safe_node/cutScreen");
        var spin_hero = cc.find("Canvas/safe_node/spin_hero");
        cutScreen.active = true;
        spin_hero.active = false;
        var spine = cutScreen.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, "skill", false);
        spine.setCompleteListener(function(track) {
          cutScreen.active = false;
          bShowHero && (spin_hero.active = true);
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          if (!total) {
            total = 10;
            cc.vv.gameData.SetTotalFree(total);
          }
          if (!rest) {
            rest = 10;
            cc.vv.gameData.SetFreeTime(rest);
          }
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
          this.hideAllSmallWing();
          for (var i = 0; i < this._reels.length; i++) for (var j = 0; j < this._reels[i]._symbols.length; j++) this._reels[i]._symbols[j].ShowRandomSymbol();
          this.changeWing();
        } else {
          this.changeWing();
          this._bottomScript.ShowFreeModel(false);
          this.hideAllSmallCoin();
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      checkStoreEntrance: function checkStoreEntrance() {
        var bReconnect = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var needBet = cc.vv.gameData.GetOpenStoreBet();
        var myBet = cc.vv.gameData.GetTotalBet();
        var status = cc.vv.gameData.GetStoreEntranceStatus();
        var spine = cc.find("sd", this._entranceBtn).getComponent(sp.Skeleton);
        if (bReconnect) if (myBet >= needBet) {
          spine.setAnimation(0, "animation1_1", true);
          cc.vv.gameData.SetStoreEntranceStatus(true);
        } else {
          spine.setAnimation(0, "animation1_4", false);
          cc.vv.gameData.SetStoreEntranceStatus(false);
        } else if (myBet >= needBet && false == status) {
          Global.SlotsSoundMgr.playEffect("unlock");
          cc.vv.gameData.SetStoreEntranceStatus(true);
          spine.setAnimation(0, "animation1_2", false);
          spine.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation1_2" === name && spine.setAnimation(0, "animation1_1", true);
          });
        } else if (myBet < needBet && status) {
          Global.SlotsSoundMgr.playEffect("lock");
          cc.vv.gameData.SetStoreEntranceStatus(false);
          spine.setAnimation(0, "animation1_3", false);
          spine.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation1_3" === name && spine.setAnimation(0, "animation1_4", false);
          });
        }
      },
      onBtnStore: function onBtnStore() {
        var gameData = cc.vv.gameData;
        var status = cc.vv.gameData.GetStoreEntranceStatus();
        var needBet = cc.vv.gameData.GetOpenStoreBet();
        Global.SlotsSoundMgr.playEffect("dialog_store_show");
        if (status) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          gameData.GetStoreScript().openStore(true);
        } else {
          var unLockLv = cc.vv.gameData.BetToIdx(needBet);
          if (unLockLv) {
            var bottom = cc.vv.gameData.GetBottomScript();
            bottom.SetBetIdx(unLockLv);
            cc.vv.gameData.SetStoreEntranceStatus(true);
          }
        }
      },
      collectJade: function collectJade() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          var GameData, jadeStore, _iterator3, _step3, iterator;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              GameData = cc.vv.gameData;
              jadeStore = GameData.GetJadeStore();
              if (_this8._gameInfo.jadeInfo && _this8._gameInfo.jadeInfo.idxs.length > 0) {
                _iterator3 = _createForOfIteratorHelper(_this8._gameInfo.jadeInfo.idxs);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    iterator = _step3.value;
                    _this8.GetSymbolByIdx(iterator).collectJade();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              cc.tween(_this8.node).delay(.7).call(function() {
                _this8.refreshIngotUi(jadeStore.jadeCnt);
                _this8._gameInfo && _this8._gameInfo.jadeInfo && _this8._gameInfo.jadeInfo.idxs.length > 0 && Global.SlotsSoundMgr.playEffect("jade_collect");
              }).start();

             case 4:
             case "end":
              return _context16.stop();
            }
          }, _callee16);
        }))();
      },
      sortCollectWing: function sortCollectWing() {
        var goldIngotsResult = this._gameInfo.goldIngotsResult;
        this._reelGoldIngotInfos = [ [], [], [], [], [] ];
        if (!goldIngotsResult) return;
        for (var key in goldIngotsResult.items) {
          var idx = goldIngotsResult.idxs[key];
          var col = (idx - 1) % this._col;
          var row = this._row - Math.floor((idx - 1) / this._col) - 1;
          var obj = {
            item: goldIngotsResult.items[key],
            idx: goldIngotsResult.idxs[key]
          };
          this._reelGoldIngotInfos[col].push(obj);
        }
        var _iterator4 = _createForOfIteratorHelper(this._reelGoldIngotInfos), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var iterator = _step4.value;
            iterator.sort(function(a, b) {
              return b.idx - a.idx;
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        console.log("---1reelGoldIngotInfos", this._reelGoldIngotInfos);
      },
      showWing: function showWing() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          var self, i;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              self = _this9;
              i = 0;

             case 2:
              if (!(i < 5)) {
                _context17.next = 8;
                break;
              }
              _context17.next = 5;
              return _this9._bonusReels[i].collectWing(_this9._reelGoldIngotInfos[i]);

             case 5:
              i++;
              _context17.next = 2;
              break;

             case 8:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      changeWing: function changeWing() {
        var betIndex = cc.vv.gameData.GetBetIdx();
        var goldIngotInfo = cc.vv.gameData.GetGoldIngotInfos()[betIndex - 1];
        cc.vv.gameData.GetFreeTime() > 0 && (goldIngotInfo = cc.vv.gameData.GetGoldIngotInfoInFree());
        for (var i = 0; i < 5; i++) {
          var itemInfo = goldIngotInfo[i];
          var reelGoldIngotInfo = goldIngotInfo[i];
          this._bonusReels[i].SetBonusReel(reelGoldIngotInfo.idxs, reelGoldIngotInfo.items, itemInfo.restCnt, itemInfo.fullCnt, true);
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) for (var j = 0; j < this._reels[_i2]._symbols.length; j++) this._reels[_i2]._symbols[j].ShowRandomSymbol();
      },
      reduceSmallWing: function reduceSmallWing() {
        for (var i = 0; i < 5; i++) this._bonusReels[i].showSmallWing(1);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var goldIngotInfo = this._gameInfo.goldIngotInfo;
        var gameData = cc.vv.gameData;
        gameData.GetFreeGameTimes().status && (goldIngotInfo = this._gameInfo.goldIngotInfoInFree);
        var itemInfo = goldIngotInfo[colIdx];
        var reelGoldIngotInfo = goldIngotInfo[colIdx];
        this._bonusReels[colIdx].SetBonusReel(reelGoldIngotInfo.idxs, reelGoldIngotInfo.items, itemInfo.restCnt, itemInfo.fullCnt);
        if (0 == this._reelGoldIngotInfos[colIdx].length) ; else for (var i = 0; i < this._reels[colIdx]._symbols.length; i++) this._reels[colIdx]._symbols[i].ShowMask(true);
      },
      hideAllSmallWing: function hideAllSmallWing() {
        for (var i = 1; i <= 5; i++) cc.find("reels_frame/lint_bottom/down/item" + i + "/mask/upBg", this.node).y = 45;
        for (var _i3 = 0; _i3 < 5; _i3++) {
          this._bonusReels[_i3].hideSuspendWing();
          this._bonusReels[_i3].hideAllKuang();
          this._bonusReels[_i3]._idxs = [];
        }
        this.hideAllSmallCoin();
      },
      hideAllSmallCoin: function hideAllSmallCoin() {
        for (var index = 0; index < 5; index++) {
          var str = "reels_frame/lint_bottom/down/coin" + (index + 1);
          var coinNode = cc.find(str, this.node);
          coinNode.active = false;
        }
      },
      showAllMask: function showAllMask(isShow) {
        for (var i = 0; i < this._reels.length; i++) for (var j = 0; j < this._reels[i]._symbols.length; j++) {
          var id = this._reels[i]._symbols[j]._id;
          this._reels[i]._symbols[j].ShowMask(isShow);
        }
        var bg = cc.find("reels_bg", this.node);
        bg.children.forEach(function(node) {
          node.color = isShow ? new cc.Color(80, 80, 80) : cc.Color.WHITE;
        });
      },
      showJpDialog: function showJpDialog(type) {
        var jpNode = cc.find("Canvas/safe_node/jpNode");
        jpNode.active = true;
        var jpSpineCom = cc.find("jp", jpNode).getComponent(sp.Skeleton);
        jpSpineCom.setAnimation(0, "animation" + type, false);
        Global.SlotsSoundMgr.playEffect("jp_dialog_show");
        jpSpineCom.setCompleteListener(function(track) {
          jpNode.active = false;
        });
      },
      showReelMask: function showReelMask(reelIndex) {
        for (var i = 0; i < this._reels[reelIndex]._symbols.length; i++) this._reels[reelIndex]._symbols[i].ShowMask(true);
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(sucess, failed) {
          _this10.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Hermes_BonusReel": "Hermes_BonusReel",
    LMSlots_Slots_Base: void 0
  } ],
  Hermes_Store: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fa0cC7PMZJZJxPix9C+hNt", "Hermes_Store");
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
    var Hermes_Tools = require("./Hermes_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _page: 1,
        _pageState: 1,
        _boxes: [],
        _layoutScale: 1
      },
      Init: function Init() {
        this._cannotOpenTip = cc.find("layout/view/cannotOpenTip", this.node);
        for (var i = 0; i < 9; i++) {
          var box = cc.find("layout/view/item" + (i + 1), this.node);
          box.on("click", this.onClickBoxBtn.bind(this));
          box.index = i;
          this._boxes[i] = {
            node: box,
            state: "canBuy",
            type: 1,
            coin: null
          };
        }
        cc.find("layout/view/zheZhao", this.node).active = false;
        var layout = cc.find("layout", this.node);
        var curCanvas = cc.find("Canvas").getComponent(cc.Canvas);
        var scaleX = cc.winSize.width / curCanvas.designResolution.width;
        var scaleY = cc.winSize.height / curCanvas.designResolution.height;
        var min = Math.min(scaleX, scaleY);
        this._layoutScale = layout.scale * Math.min(min, 1);
      },
      onLoad: function onLoad() {
        var _this = this;
        this._page = 1;
        var btn_close = cc.find("layout/btn_close", this.node);
        Global.btnClickEvent(btn_close, function() {
          _this.openStore(false, true);
        }, this);
        Global.btnClickEvent(cc.find("layout/btn_left", this.node), function() {
          Global.SlotsSoundMgr.playEffect("page");
          this.movePage(this._page - 1, "left");
        }, this);
        Global.btnClickEvent(cc.find("layout/btn_right", this.node), function() {
          Global.SlotsSoundMgr.playEffect("page");
          this.movePage(this._page + 1, "right");
        }, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      onRecvMsgSubAction: function onRecvMsgSubAction(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var data, result, slotsNode, unlockPage, nowPrice, jadeCnt, itemInfo, item, showNode, showSpine, haveWin, addCoin, _iterator, _step, iterator;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 === msg.code)) {
                _context.next = 23;
                break;
              }
              data = msg.data;
              if (!data.errMsg) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");

             case 4:
              result = data.result;
              slotsNode = cc.vv.gameData.GetSlotsNode();
              cc.vv.gameData.SetJadeStore(data.jadeStore);
              unlockPage = data.jadeStore.unlockPage;
              nowPrice = data.jadeStore.pageDetails[_this2._page - 1].price;
              jadeCnt = data.jadeStore.jadeCnt;
              cc.vv.gameData.GetSlotsScript().refreshIngotUi(data.jadeStore.jadeCnt);
              itemInfo = _this2._boxes[result.idx - 1];
              item = _this2._boxes[result.idx - 1].node;
              showNode = cc.find("open", item);
              showSpine = null;
              cc.find("open", item).active = false;
              cc.find("lock", item).active = false;
              cc.find("canBuy", item).active = false;
              cc.find("open/coinLab", item).active = false;
              itemInfo.state = "open";
              if (2 === result.type) {
                showNode.active = true;
                showSpine = showNode.getComponent(sp.Skeleton);
                showSpine.setAnimation(0, "animation2", false);
                showSpine.addAnimation(0, "animation2_1", false);
                cc.tween(slotsNode).delay(3).call(function() {
                  cc.vv.gameData.SetGoldIngotInfoInFree(result.goldIngotInfoInFree);
                  cc.vv.gameData.SetFreeGameTimes({
                    status: true,
                    times: result.freeInfo.freeCnt,
                    type: "normal"
                  });
                  _this2.openStore(false);
                  cc.find("layout/view/zheZhao", _this2.node).active = false;
                }).delay(.5).call(function() {
                  cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame(result.freeInfo.freeCnt);
                }).start();
              } else if (3 === result.type) {
                showNode.active = true;
                showSpine = showNode.getComponent(sp.Skeleton);
                showSpine.setAnimation(0, "animation3", false);
                showSpine.addAnimation(0, "animation3_1", false);
                cc.tween(slotsNode).delay(3).call(function() {
                  cc.vv.gameData.SetGoldIngotInfoInFree(result.goldIngotInfoInFree);
                  cc.vv.gameData.SetFreeGameTimes({
                    status: true,
                    times: result.freeInfo.freeCnt,
                    type: "super"
                  });
                  _this2.openStore(false);
                  cc.find("layout/view/zheZhao", _this2.node).active = false;
                }).delay(.5).call(function() {
                  cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame(result.freeInfo.freeCnt);
                }).start();
              } else if (1 === result.type) {
                showNode.active = true;
                showSpine = showNode.getComponent(sp.Skeleton);
                showSpine.setAnimation(0, "animation1", false);
                showSpine.addAnimation(0, "animation1_1", false);
                haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
                addCoin = result.coin;
                cc.vv.gameData.AddCoin(addCoin);
                cc.vv.gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
                cc.vv.gameData.GetTopScript().ShowCoin();
                cc.tween(slotsNode).delay(1).call(function() {
                  cc.find("open/coinLab", item).active = true;
                  cc.find("open/coinLab", item).getComponent(cc.Label).string = Global.formatNumShort(result.coin, 0);
                  cc.find("layout/view/zheZhao", _this2.node).active = false;
                }).start();
              }
              if (_this2._page <= unlockPage && jadeCnt < nowPrice) {
                _iterator = _createForOfIteratorHelper(_this2._boxes);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    iterator = _step.value;
                    "canBuy" == iterator.state && (iterator.state = "canNotBuy");
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              if (result.pageReward) {
                Global.SlotsSoundMgr.playEffect("logo_store");
                cc.tween(slotsNode).delay(2).call(function() {
                  _this2.playUpSymbolAni("open");
                }).delay(3).call(function() {
                  _this2.openStore(false);
                  cc.find("layout/view/zheZhao", _this2.node).active = false;
                }).delay(.5).call(function() {
                  cc.vv.gameData.SetFreeGameTimes({
                    status: true,
                    times: result.pageReward.freeCnt,
                    type: "pageReward",
                    page: _this2._page
                  });
                  cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame(result.pageReward.freeCnt);
                }).start();
              }

             case 23:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      openStore: function openStore(isOpen, CanDoNextRound) {
        var _this3 = this;
        var store_bg = cc.find("store_bg", this.node);
        var layout = cc.find("layout", this.node);
        cc.find("layout/view/zheZhao", this.node).active = false;
        if (isOpen) {
          this.node.active = isOpen;
          store_bg.active = isOpen;
          layout.active = isOpen;
          store_bg.opacity = 0;
          layout.scale = 0;
          Global.SlotsSoundMgr.playEffect("popup_out");
          cc.tween(layout).to(.5, {
            scale: this._layoutScale
          }).start();
          cc.tween(store_bg).to(.5, {
            opacity: 255
          }).start();
          this.movePage(this._page);
          this.updateUi();
        } else {
          Global.SlotsSoundMgr.playEffect("close");
          cc.tween(layout).to(.5, {
            scale: 0
          }).call(function() {
            _this3.node.active = isOpen;
          }).start();
          cc.tween(store_bg).to(.5, {
            opacity: 0
          }).start();
          CanDoNextRound && cc.vv.gameData.GetSlotsScript().CanDoNextRound();
        }
      },
      updateUi: function updateUi() {
        var jadeStore = cc.vv.gameData.GetJadeStore();
        var unlockPage = jadeStore.unlockPage;
        var unlockItems = jadeStore.unlockItems;
        var nowPrice = jadeStore.pageDetails[this._page - 1].price;
        var jadeCnt = jadeStore.jadeCnt;
        cc.vv.gameData.GetSlotsScript().refreshIngotUi(jadeStore.jadeCnt);
        if (this._page <= unlockPage) {
          var isCanBuyState = "canBuy";
          jadeCnt < nowPrice && (isCanBuyState = "canNotBuy");
          var _iterator2 = _createForOfIteratorHelper(this._boxes), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var iterator = _step2.value;
              iterator.state = isCanBuyState;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _iterator3 = _createForOfIteratorHelper(unlockItems[this._page - 1]), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _iterator4 = _step3.value;
              this._boxes[_iterator4.idx - 1].state = "open";
              this._boxes[_iterator4.idx - 1].type = _iterator4.type;
              this._boxes[_iterator4.idx - 1].coin = _iterator4.coin;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _iterator5 = _createForOfIteratorHelper(this._boxes), _step4;
          try {
            for (_iterator5.s(); !(_step4 = _iterator5.n()).done; ) {
              var _iterator6 = _step4.value;
              _iterator6.state = "lock";
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        for (var i = 0; i < 9; i++) {
          var itemNode = cc.find("layout/view/item" + (i + 1), this.node);
          var itemInfo = this._boxes[i];
          cc.find("lock", itemNode).active = false;
          cc.find("open", itemNode).active = false;
          cc.find("canBuy", itemNode).active = false;
          if ("lock" == itemInfo.state) {
            cc.find("lock", itemNode).active = true;
            cc.find("lock", itemNode).getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            cc.find("lock/priceNode/lab", itemNode).getComponent(cc.Label).string = Global.FormatNumToComma(nowPrice);
          } else if ("open" == itemInfo.state) {
            cc.find("open", itemNode).active = true;
            switch (itemInfo.type) {
             case 1:
              cc.find("open/coinLab", itemNode).active = true;
              cc.find("open", itemNode).getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
              cc.find("open/coinLab", itemNode).getComponent(cc.Label).string = Global.formatNumShort(itemInfo.coin, 0);
              break;

             case 2:
              cc.find("open/coinLab", itemNode).active = false;
              cc.find("open", itemNode).getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
              break;

             case 3:
              cc.find("open/coinLab", itemNode).active = false;
              cc.find("open", itemNode).getComponent(sp.Skeleton).setAnimation(0, "animation3_1", false);
            }
          } else if ("canBuy" == itemInfo.state) {
            cc.find("canBuy", itemNode).active = true;
            cc.find("canBuy/priceNode/lab", itemNode).getComponent(cc.Label).string = Global.FormatNumToComma(nowPrice);
            var canBuySpineCom = cc.find("canBuy", itemNode).getComponent(sp.Skeleton);
            canBuySpineCom.setAnimation(0, "animation3", false);
          } else if ("canNotBuy" == itemInfo.state) {
            cc.find("canBuy", itemNode).active = true;
            cc.find("canBuy/priceNode/lab", itemNode).getComponent(cc.Label).string = Global.FormatNumToComma(nowPrice);
            var _canBuySpineCom = cc.find("canBuy", itemNode).getComponent(sp.Skeleton);
            _canBuySpineCom.setAnimation(0, "animation1", false);
          }
        }
      },
      movePage: function movePage(page, type) {
        var self = this;
        var gameData = cc.vv.gameData;
        var jadeStore = gameData.GetJadeStore();
        var unlockPage = jadeStore.unlockPage;
        Global.SlotsSoundMgr.playEffect("page");
        page <= 0 ? page = 4 : page >= 5 && (page = 1);
        this._page = page;
        this.updateUi();
        this._page >= unlockPage ? this.playUpSymbolAni("close") : this.playUpSymbolAni("hasOpen");
        var upSpine = cc.find("layout/upBg/shangdian", this.node).getComponent(sp.Skeleton);
        var track = upSpine.setAnimation(0, "animation" + this._page, false);
        Hermes_Tools.spineEndFunc(cc.find("layout/upBg/shangdian", this.node), track, function() {
          upSpine.setAnimation(0, "animation" + self._page + "_1", false);
        });
        var choose_bg = cc.find("layout/choose_bg", this.node);
        var _iterator7 = _createForOfIteratorHelper(choose_bg.children), _step5;
        try {
          for (_iterator7.s(); !(_step5 = _iterator7.n()).done; ) {
            var iterator = _step5.value;
            cc.find("choosed", iterator).active = false;
            iterator.name.slice(6) == this._page && (cc.find("choosed", iterator).active = true);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if (!type) return;
        var movePosx = 100;
        "right" === type && (movePosx = -100);
        for (var i = 0; i < 9; i++) {
          var itemNode = cc.find("layout/view/item" + (i + 1), this.node);
          var posX = itemNode.x;
          cc.tween(itemNode).to(.2, {
            opacity: 0,
            x: posX + movePosx
          }).to(.01, {
            x: posX,
            scale: 0,
            opacity: 360
          }).delay(.03 * i).to(.2, {
            scale: 1
          }).start();
        }
      },
      playUpSymbolAni: function playUpSymbolAni(status) {
        var upSymbolSpine = cc.find("layout/upBg/chuxian", this.node).getComponent(sp.Skeleton);
        var page = this._page;
        if ("hasOpen" === status) upSymbolSpine.setAnimation(0, "animation" + page + "_1", false); else if ("open" === status) {
          upSymbolSpine.setAnimation(0, "animation" + page, false);
          upSymbolSpine.addAnimation(0, "animation" + page + "_1", false);
        } else "close" === status && upSymbolSpine.setAnimation(0, "animation" + page + "_2", false);
      },
      onClickBoxBtn: function onClickBoxBtn(event) {
        var index = event.node.index;
        var jadeStore = cc.vv.gameData.GetJadeStore();
        var nowPrice = jadeStore.pageDetails[this._page - 1].price;
        var jadeCnt = jadeStore.jadeCnt;
        if (jadeCnt < nowPrice && "canNotBuy" === this._boxes[index].state) {
          Global.SlotsSoundMgr.playEffect("nomoney");
          var tipNode = this._cannotOpenTip;
          tipNode.stopAllActions();
          tipNode.x = event.node.x;
          tipNode.y = event.node.y;
          tipNode.active = true;
          tipNode.scale = 0;
          cc.tween(tipNode).to(.5, {
            scale: 1
          }).delay(.3).call(function() {
            tipNode.active = false;
          }).start();
          return;
        }
        if ("canBuy" === this._boxes[index].state) {
          Global.SlotsSoundMgr.playEffect("buy");
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.gameid = cc.vv.gameData.getGameId();
          req.data = {};
          req.data.rtype = 1;
          req.data.pageId = this._page;
          req.data.choiceId = index + 1;
          cc.vv.NetManager.send(req, true);
          cc.find("layout/view/zheZhao", this.node).active = true;
        }
      },
      awaitTime: function awaitTime(time) {
        var _this4 = this;
        return new Promise(function(sucess, failed) {
          _this4.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Hermes_Tools": "Hermes_Tools"
  } ],
  Hermes_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "baffcNJ4bdJF5wsUzddVDGp", "Hermes_Symbol");
    "use strict";
    var Hermes_Tools = require("./Hermes_Tools");
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _bonusIndex: 0,
        _data: null
      },
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.GetFreeGameTimes() && cc.vv.gameData.GetFreeGameTimes().status && "pageReward" != cc.vv.gameData.GetFreeGameTimes().type ? this.ShowMask(true) : this.ShowMask(false);
      },
      hideOther: function hideOther() {
        cc.find("s3/lab", this.node).active = false;
        cc.find("ingot", this.node).active = false;
      },
      ShowById: function ShowById(id, data) {
        20 === id && (id = Math.round(5 * Math.random() + 4));
        this._super(id, data);
        this.hideOther();
        this._data = data;
        data && data.type && (1 === data.type && data.num ? this.showIngot(data.num) : 2 === data.type && data.item && this.showWing(data.item));
        var mask = cc.find("mask", this.node);
        if (mask.active) {
          mask.height = this._showNode.height > 118 ? this._showNode.height : 118;
          1 === this._id ? mask.width = 154 : mask.width = this._showNode.width > 122 ? this._showNode.width : 122;
        }
        cc.vv.gameData.GetFreeGameTimes() && cc.vv.gameData.GetFreeGameTimes().status && "pageReward" != cc.vv.gameData.GetFreeGameTimes().type ? this.ShowMask(true) : this.ShowMask(false);
      },
      showIngot: function showIngot(num) {
        var ingotNode = cc.find("ingot", this.node);
        ingotNode.active = true;
        cc.find("lab", ingotNode).getComponent(cc.Label).string = num;
      },
      showWing: function showWing(item) {
        if (item && item.coin) {
          var labNode = cc.find("s3/lab", this.node);
          labNode.active = true;
          labNode.getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
        }
      },
      collectJade: function collectJade() {
        if (this._data && 1 === this._data.type) {
          var targetNode = cc.find("Canvas/safe_node/slots/btn_collect/sd");
          var insIngotNode = cc.instantiate(cc.find("ingot", this.node));
          insIngotNode.parent = targetNode;
          var pos1 = Hermes_Tools.convetOtherNodeSpace(cc.find("ingot", this.node), targetNode);
          insIngotNode.setPosition(pos1);
          cc.find("ingot", this.node).active = false;
          cc.tween(insIngotNode).to(.2, {
            scale: 1.7
          }).to(.5, {
            position: cc.v2(-60, 0)
          }).to(.2, {
            opacity: 31,
            scale: .5
          }).call(function() {
            insIngotNode.removeFromParent();
          }).start();
        }
      },
      getIngotWPos: function getIngotWPos() {
        return this.ingot().convertToWorldSpaceAR(cc.v2(0, 0));
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
      setAnimationToTop: function setAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
            cloneNode || (cloneNode = cc.instantiate(this.node));
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            cloneNode.parent = this._topAniNode;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx);
            cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            cc.find("ingot", cloneNode).removeFromParent();
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
      playWinAnimation: function playWinAnimation() {
        this.ShowMask(false);
        this._super();
      },
      ShowMask: function ShowMask(bShow) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          if (bShow) {
            showNode.color = new cc.Color(80, 80, 80);
            showNode.childrenCount > 0 && showNode.children.forEach(function(node) {
              node.color = new cc.Color(80, 80, 80);
            });
          } else {
            showNode.color = cc.Color.WHITE;
            showNode.childrenCount > 0 && showNode.children.forEach(function(node) {
              node.color = cc.Color.WHITE;
            });
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    "./Hermes_Tools": "Hermes_Tools",
    LMSlots_Symbol_Base: void 0
  } ],
  Hermes_Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74de9mfCfNHUq3JkEznao79", "Hermes_Tools");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      statics: {
        changeNodeSp: function changeNodeSp(node, sp) {
          if (null == node) return;
          node.getComponent(cc.Sprite).spriteFrame = sp;
        },
        changeNodeLab: function changeNodeLab(node, str) {
          if (null == node) return;
          node.getComponent(cc.Label).string = str;
        },
        numInArr: function numInArr(num1, num2, arr) {
          var judge1 = arr.indexOf(num1);
          var judge2 = arr.indexOf(num2);
          return -1 != judge1 && -1 != judge2;
        },
        nodeAni: function nodeAni(node, type) {
          if (1 === type) {
            node.scale = 0;
            node.active = true;
            cc.tween(node).to(.2, {
              scale: 1
            }).start();
          } else 2 === type ? cc.tween(node).to(.2, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
          }).start() : 3 === type && cc.tween(node).to(.2, {
            scale: 1.3
          }).to(.3, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
          }).start();
        },
        playSpineAni: function playSpineAni(node) {
          var aniName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
          var isloop = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          var idx = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          if (node) {
            node.active = true;
            var spine = node.getComponent(sp.Skeleton);
            spine.setAnimation(idx, aniName, isloop);
          }
        },
        getKNum: function getKNum(num) {
          if (num) {
            var backNum = 1e3 * parseInt(num / 1e3);
            return backNum;
          }
        },
        spineEndFunc: function spineEndFunc(spineNode, track, callFunc) {
          if (spineNode) {
            var spineCom = spineNode.getComponent(sp.Skeleton);
            track && callFunc && spineCom.setTrackEventListener(track, function(trackIndex, event) {
              callFunc();
            });
          }
        },
        localConvertWorldPoint: function localConvertWorldPoint(node) {
          if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
          return null;
        },
        worldConvertLocalPoint: function worldConvertLocalPoint(node, worldPoint) {
          if (node) return node.convertToNodeSpaceAR(worldPoint);
          return null;
        },
        convetOtherNodeSpace: function convetOtherNodeSpace(node, targetNode) {
          if (!node || !targetNode) return null;
          var worldPoint = this.localConvertWorldPoint(node);
          return this.worldConvertLocalPoint(targetNode, worldPoint);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Hermes_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab267m68rBOS7qZ/9X+bVpj", "Hermes_Wheel");
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
    var cfg = [ 2, 3, 4, 5, 6, 8, 10, 16, 20 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _items: [],
        _itemWidth: 146,
        _slowSpeed: 30,
        _fastSpeed: 90
      },
      Init: function Init() {
        for (var i = 0; i < 9; i++) this._items.push(cc.find("moveNode/item" + i, this.node));
      },
      onLoad: function onLoad() {},
      start: function start() {},
      moveToIndex: function moveToIndex() {},
      update: function update(dt) {
        var _iterator = _createForOfIteratorHelper(this._items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var iterator = _step.value;
            iterator.x += dt * this._slowSpeed;
            iterator.x >= 876 && (iterator.x = -292);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Hermes_BonusReel", "Hermes_ButtonSafe", "Hermes_Cfg", "Hermes_FreeGame", "Hermes_GameData", "Hermes_Logic", "Hermes_Pop", "Hermes_Reel", "Hermes_Slots", "Hermes_Store", "Hermes_Symbol", "Hermes_Tools", "Hermes_Wheel" ]);