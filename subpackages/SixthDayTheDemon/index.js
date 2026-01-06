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
  SixthDayTheDemon_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "407aaABlrdF3JBuhGp9xuaW", "SixthDayTheDemon_BonusGame");
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
    var fanzhuanAni = [ "animation04", "animation03", "animation02", "animation01" ];
    var towCountAni = [ "animation04_1", "animation03_1", "animation02_1", "animation01_1" ];
    var threeCountAni = [ "animation04_2", "animation03_2", "animation02_2", "animation01_2" ];
    var iconPick = [ "theme102_icon_pick_mini", "theme102_icon_pick_minor", "theme102_icon_pick_major", "theme102_icon_pick_grand" ];
    var textPick = [ "theme102_text_pick_mini", "theme102_text_pick_minor", "theme102_text_pick_major", "theme102_text_pick_grand" ];
    var bgPick = [ "theme102_bg_pick_4", "theme102_bg_pick_3", "theme102_bg_pick_2", "theme102_bg_pick_1" ];
    var coinPosition = [ cc.v2(-224, -8), cc.v2(-73, -8), cc.v2(73, -8), cc.v2(224, -8), cc.v2(-224, -180), cc.v2(-73, -180), cc.v2(73, -180), cc.v2(224, -180), cc.v2(-224, -353), cc.v2(-73, -353), cc.v2(73, -353), cc.v2(224, -353) ];
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _gameUI: null,
        _coinNode: null,
        _coinAnimationNode: null,
        _mask: null,
        _itemList: [],
        _bonusWinCoin: 0,
        _bonusData: null,
        _pickIndexs: [],
        _lizi: null,
        _prizePool: null
      },
      onLoad: function onLoad() {},
      Init: function Init() {
        this._gameUI = cc.find("game_ui", this.node);
        this._gameUI.active = false;
        this._coinNode = cc.find("game_ui/coin_node", this.node);
        this._coinAnimationNode = cc.find("game_ui/coin_node_ani", this.node);
        this._mask = cc.find("game_ui/mask", this.node);
        this._cfg = cc.vv.gameData.getGameCfg();
        for (var index = 1; index < 13; index++) {
          var item = cc.find("item_" + index, this._coinNode);
          item.chooseIndex = index;
          this._itemList.push(item);
          Global.btnClickEvent(item, this.onClick, this);
        }
        this._lizi = cc.find("Canvas/safe_node/lizi");
        this._lizi.active = false;
        this._prizePool = cc.find("LMSlots_PrizePool_1", this._gameUI);
      },
      onRecvGameAction: function onRecvGameAction(msg) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusData, currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 == msg.code)) {
                _context.next = 29;
                break;
              }
              if (!(2 == msg.data.rtype)) {
                _context.next = 29;
                break;
              }
              bonusData = msg.data.bonusData;
              if (!bonusData) {
                _context.next = 29;
                break;
              }
              _this._pickIndexs.push(_this._chooseIndex);
              _this._bonusData[bonusData.type].push(bonusData);
              _context.next = 8;
              return _this.clickCoin(bonusData);

             case 8:
              if (!bonusData.isEnd) {
                _context.next = 29;
                break;
              }
              _this._bonusWinCoin = bonusData.winCoin;
              cc.vv.gameData.isFreeGame() || cc.vv.gameData.AddCoin(_this._bonusWinCoin);
              _this.showEndAnimation();
              _context.next = 14;
              return _this.awaitTime(2);

             case 14:
              _this._lizi.active = true;
              _context.next = 17;
              return cc.vv.gameData.getPopControl().showBonusGameWinner(_this._bonusWinCoin, iconPick[bonusData.type - 1], textPick[bonusData.type - 1], bgPick[bonusData.type - 1]);

             case 17:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_complete);
              currentCoin = cc.vv.gameData.GetSlotsScript()._bottomScript.getCurrentWin();
              bonusWinCoin = cc.vv.gameData.getBonusControl().getBonusWinCoin();
              _context.next = 22;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(bonusWinCoin, currentCoin + bonusWinCoin, true);

             case 22:
              _context.next = 24;
              return _this.awaitTime(2);

             case 24:
              cc.vv.gameData.getPopControl().showTransitonAnimation();
              _context.next = 27;
              return _this.awaitTime(1);

             case 27:
              _this._lizi.active = false;
              _this.exitBonusGame();

             case 29:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      initData: function initData(data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _this3$_bonusData;
          var _iterator, _step, _item2, _iterator2, _step2, _bonusData, index, item, tongbiNode, roleNode, i, len, _iterator3, _step3, bonusData, _item, _tongbiNode, _roleNode, animation;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._mask.active = false;
              _this3._bonusWinCoin = 0;
              _this3._bonusData = (_this3$_bonusData = {}, _defineProperty(_this3$_bonusData, 1, []), 
              _defineProperty(_this3$_bonusData, 2, []), _defineProperty(_this3$_bonusData, 3, []), 
              _defineProperty(_this3$_bonusData, 4, []), _this3$_bonusData);
              _this3._pickIndexs = [];
              _this3._coinAnimationNode.removeAllChildren();
              _this3._gameUI.opacity = 80;
              cc.tween(_this3._gameUI).to(1, {
                opacity: 255
              }).start();
              _iterator = _createForOfIteratorHelper(_this3._itemList);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  _item2 = _step.value;
                  _item2.active = false;
                  _item2.getComponent(cc.Button).interactable = false;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!data) {
                _context2.next = 16;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(data);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _bonusData = _step2.value;
                  _this3._bonusData[_bonusData.type].push(_bonusData);
                  _this3._pickIndexs.push(_bonusData.index);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              for (index = 0; index < _this3._itemList.length; index++) {
                item = _this3._itemList[index];
                item.active = true;
                item.getComponent(cc.Button).interactable = true;
                item.position = coinPosition[index];
                item.scale = 1;
                tongbiNode = item.getChildByName("tongbi");
                tongbiNode.active = true;
                tongbiNode.getComponent(sp.Skeleton).setAnimation(0, "animation02", true);
                roleNode = item.getChildByName("role");
                roleNode.active = false;
              }
              for (i = 1; i < 5; i++) {
                len = _this3._bonusData[i].length;
                _iterator3 = _createForOfIteratorHelper(_this3._bonusData[i]);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    bonusData = _step3.value;
                    _item = _this3._itemList[bonusData.index - 1];
                    _item.getComponent(cc.Button).interactable = false;
                    _tongbiNode = _item.getChildByName("tongbi");
                    _tongbiNode.active = false;
                    _roleNode = _item.getChildByName("role");
                    _roleNode.active = true;
                    animation = _roleNode.getComponent(sp.Skeleton);
                    len > 1 ? animation.setAnimation(0, towCountAni[i - 1], true) : animation.setAnimation(0, fanzhuanAni[i - 1], false);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              _context2.next = 19;
              break;

             case 16:
              _context2.next = 18;
              return _this3.awaitTime(1);

             case 18:
              _this3.showEnterAnimation();

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterBonusGame: function enterBonusGame(data, jackPotVal, exitCallBack) {
        Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.bonus_bgm);
        this._exitCallBack = exitCallBack;
        this._gameUI.active = true;
        this.initData(data);
        for (var i = 0; i < jackPotVal.length; i++) {
          var element = jackPotVal[i];
          var lbl = cc.find("prizePool_" + jackpotNames[i] + "/lbl_num", this._prizePool);
          lbl.getComponent(cc.Label).string = Global.FormatNumToComma(element);
        }
      },
      exitBonusGame: function exitBonusGame() {
        this._gameUI.active = false;
        this._exitCallBack && this._exitCallBack();
        Global.SlotsSoundMgr.playNormalBgm(true);
      },
      onClick: function onClick(render) {
        render.interactable = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.index = render.node.chooseIndex;
        cc.vv.NetManager.send(req);
        this._chooseIndex = render.node.chooseIndex;
      },
      clickCoin: function clickCoin(bonusData) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var tongbiNode, roleNode, animation, _iterator4, _step4, bonusInfo, item, _iterator5, _step5, _bonusInfo, _item3, newNode, wordPos, role;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      tongbiNode = _this4._itemList[bonusData.index - 1].getChildByName("tongbi");
                      tongbiNode.active = false;
                      roleNode = _this4._itemList[bonusData.index - 1].getChildByName("role");
                      roleNode.active = true;
                      animation = roleNode.getComponent(sp.Skeleton);
                      animation.setAnimation(0, fanzhuanAni[bonusData.type - 1], false);
                      1 == _this4._bonusData[bonusData.type].length && Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_coin);
                      if (!(2 == _this4._bonusData[bonusData.type].length)) {
                        _context3.next = 13;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_coin);
                      _context3.next = 11;
                      return _this4.awaitTime(1);

                     case 11:
                      _iterator4 = _createForOfIteratorHelper(_this4._bonusData[bonusData.type]);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                          bonusInfo = _step4.value;
                          item = _this4._itemList[bonusInfo.index - 1].getChildByName("role");
                          item.getComponent(sp.Skeleton).setAnimation(0, towCountAni[bonusData.type - 1], true);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }

                     case 13:
                      if (!(3 == _this4._bonusData[bonusData.type].length)) {
                        _context3.next = 22;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_hit);
                      _context3.next = 17;
                      return _this4.awaitTime(1);

                     case 17:
                      _iterator5 = _createForOfIteratorHelper(_this4._bonusData[bonusData.type]);
                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                          _bonusInfo = _step5.value;
                          _item3 = _this4._itemList[_bonusInfo.index - 1];
                          _item3.active = false;
                          newNode = cc.instantiate(_item3);
                          wordPos = _item3.convertToWorldSpaceAR(cc.v2(0));
                          newNode.active = true;
                          newNode.parent = _this4._coinAnimationNode;
                          newNode.position = _this4._coinAnimationNode.convertToNodeSpaceAR(wordPos);
                          role = newNode.getChildByName("role");
                          role.getComponent(sp.Skeleton).setAnimation(0, threeCountAni[bonusData.type - 1], true);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }
                      _this4._mask.active = true;
                      _context3.next = 22;
                      return _this4.awaitTime(2);

                     case 22:
                      sucess();

                     case 23:
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
      showEndAnimation: function showEndAnimation() {
        for (var index = 1; index < 5; index++) if (this._bonusData[index].length < 3) {
          var count = 3 - this._bonusData[index].length;
          for (var idx = 0; idx < count; idx++) for (var i = 0; i < 12; i++) if (!this._pickIndexs.includes(i + 1)) {
            var tongbiNode = this._itemList[i].getChildByName("tongbi");
            tongbiNode.active = false;
            var roleNode = this._itemList[i].getChildByName("role");
            roleNode.active = true;
            var animation = roleNode.getComponent(sp.Skeleton);
            animation.setAnimation(0, fanzhuanAni[index - 1], false);
            this._pickIndexs.push(i + 1);
            break;
          }
        }
      },
      showEnterAnimation: function showEnterAnimation() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var index, item, roleNode, tongbiNode, indx, _item4, _tongbiNode2;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                for (index = 0; index < _this5._itemList.length; index++) {
                  item = _this5._itemList[index];
                  item.active = true;
                  item.getComponent(cc.Button).interactable = false;
                  item.position = cc.v2(0, 880);
                  item.scale = .2;
                  item.runAction(cc.spawn(cc.moveTo(1, coinPosition[index]), cc.rotateBy(1, 360), cc.scaleTo(1, 1)));
                  roleNode = item.getChildByName("role");
                  roleNode.active = false;
                  tongbiNode = item.getChildByName("tongbi");
                  tongbiNode.active = true;
                  tongbiNode.getComponent(sp.Skeleton).setAnimation(0, "animation01", true);
                }
                _context5.next = 3;
                return _this5.awaitTime(2);

               case 3:
                for (indx = 0; indx < _this5._itemList.length; indx++) {
                  _item4 = _this5._itemList[indx];
                  _item4.getComponent(cc.Button).interactable = true;
                  _tongbiNode2 = _item4.getChildByName("tongbi");
                  _tongbiNode2.active = true;
                  _tongbiNode2.getComponent(sp.Skeleton).setAnimation(0, "animation02", true);
                }
                sucess();

               case 5:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      getBonusWinCoin: function getBonusWinCoin() {
        return this._bonusWinCoin;
      }
    });
    cc._RF.pop();
  }, {} ],
  SixthDayTheDemon_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39b12IaB79M1pwDQbi0T2Vl", "SixthDayTheDemon_Cfg");
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
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        isBlink: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 200
        },
        playScatterAudio: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        isBlink: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        isBlink: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        isBlink: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        isBlink: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        isBlink: true
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        isBlink: true
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "SixthDayTheDemon_Slots",
        Reels: "SixthDayTheDemon_Reel",
        Symbols: "SixthDayTheDemon_Symbol",
        Sound: "SixthDayTheDemon_Sound"
      },
      col: 5,
      row: 6,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 128,
        height: 128
      },
      AddAntiTime: 0,
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: 1,
      helpItems: [ "games/SixthDayTheDemon/prefab/LMSlots_Help_item1", "games/SixthDayTheDemon/prefab/LMSlots_Help_item2" ],
      commEffect: {
        path: "games/SixthDayTheDemon/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 1 ],
        mini: 1,
        counts: [ 5, 5, 5, 5, 5 ],
        path: "games/SixthDayTheDemon/",
        reelStopSound: "reel_stop"
      }, {
        id: [ 7 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        path: "games/SixthDayTheDemon/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter"
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  SixthDayTheDemon_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68383weZX9Gd4g261O8Llp9", "SixthDayTheDemon_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _bonusControl: null,
        _popControl: null,
        _selectControl: null,
        _isFreeGame: false,
        _isBonusGame: false,
        _slotsArr: [],
        _slotsIndex: 0,
        _collectCount: 0
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, false, this);
      },
      onRecvGameAction: function onRecvGameAction(msg) {
        this._bonusControl.onRecvGameAction(msg);
        this._selectControl.onRecvGameAction(msg);
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._isFreeGame = this._deskInfo.restFreeCount > 0;
        this._isFreeGame ? this._slotsIndex = deskInfo.rowIndex - 1 : this._slotsIndex = 0;
        this._collectCount = this._deskInfo.collectCount;
      },
      getCollectCount: function getCollectCount() {
        this._collectCount > 2 ? this._collectCount = 2 : this._collectCount < 0 && (this._collectCount = 0);
        return this._collectCount;
      },
      setCollectCount: function setCollectCount(count) {
        this._collectCount = count;
      },
      addSlots: function addSlots(cmp) {
        this._slotsArr.push(cmp);
      },
      setSlotsIndex: function setSlotsIndex(index) {
        this._slotsIndex = index;
      },
      GetSlotsScript: function GetSlotsScript() {
        return this._slotsArr[this._slotsIndex];
      },
      setBonusControl: function setBonusControl(cmp) {
        this._bonusControl = cmp;
      },
      getBonusControl: function getBonusControl() {
        return this._bonusControl;
      },
      setPopControl: function setPopControl(cmp) {
        this._popControl = cmp;
      },
      getPopControl: function getPopControl() {
        return this._popControl;
      },
      setSelectControl: function setSelectControl(cmp) {
        this._selectControl = cmp;
      },
      getSelectControl: function getSelectControl() {
        return this._selectControl;
      },
      setIsFreeGame: function setIsFreeGame(isFreeGame) {
        this._isFreeGame = isFreeGame;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setIsBonusGame: function setIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  SixthDayTheDemon_LMPrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f894xAWDJD5o1OaJAWTAA0", "SixthDayTheDemon_LMPrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  SixthDayTheDemon_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffd2enuBVZOS5Vl1RVWl5bm", "SixthDayTheDemon_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _popupControl: null,
        _bonusGameControl: null,
        _selectFeature: null,
        _slots_3x5_cmp: null,
        _slots_4x5_cmp: null,
        _slots_5x5_cmp: null,
        _slots_6x5_cmp: null
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var cfg = cc.vv.gameData.getGameCfg();
        var slots_3x5 = cc.find("game_3x5/slots", safe_node);
        this._slots_3x5_cmp = slots_3x5.getComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(this._slots_3x5_cmp);
        var slots_4x5 = cc.find("game_4x5/slots", safe_node);
        this._slots_4x5_cmp = slots_4x5.getComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(this._slots_4x5_cmp);
        var slots_5x5 = cc.find("game_5x5/slots", safe_node);
        this._slots_5x5_cmp = slots_5x5.getComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(this._slots_5x5_cmp);
        var slots_6x5 = cc.find("game_6x5/slots", safe_node);
        this._slots_6x5_cmp = slots_6x5.getComponent(cfg.scripts.Slots);
        cc.vv.gameData.addSlots(this._slots_6x5_cmp);
        var select_feature = cc.find("select_feature", safe_node);
        this._selectFeature = select_feature.getComponent("SixthDayTheDemon_SelectFeature");
        cc.vv.gameData.setSelectControl(this._selectFeature);
        var bonus_game = cc.find("bonus_game", safe_node);
        this._bonusGameControl = bonus_game.getComponent("SixthDayTheDemon_BonusGame");
        cc.vv.gameData.setBonusControl(this._bonusGameControl);
        var popup = cc.find("node_pop_ui", safe_node);
        this._popupControl = popup.getComponent("SixthDayTheDemon_Pop");
        cc.vv.gameData.setPopControl(this._popupControl);
      },
      StartSlot: function StartSlot() {
        this._popupControl.Init();
        this._bonusGameControl.Init();
        this._selectFeature.Init();
        this._slots_3x5_cmp.Init(3, 5);
        this._slots_4x5_cmp.Init(4, 5);
        this._slots_5x5_cmp.Init(5, 5);
        this._slots_6x5_cmp.Init(6, 5);
        cc.vv.gameData.GetSlotsScript().showGameUI(true);
        cc.vv.gameData.GetSlotsScript().ReconnectShow();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  SixthDayTheDemon_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb79cECtFFDSKz4z0XIOK5k", "SixthDayTheDemon_Pop");
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
        _popup: null,
        _cfg: null,
        _transiton: null
      },
      onLoad: function onLoad() {},
      Init: function Init() {
        this._cfg = cc.vv.gameData.getGameCfg();
        this._popup = cc.find("popup", this.node);
        this._popup.active = false;
        this._transiton = cc.find("transiton", this.node);
        this._transiton.active = false;
        this._cfg = cc.vv.gameData.getGameCfg();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      update: function update(dt) {},
      showTransitonAnimation: function showTransitonAnimation() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!_this2._transiton.active) {
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition);
                _this2._transiton.active = true;
                _this2._transiton.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _this2._transiton.getComponent(sp.Skeleton).setCompleteListener(function() {
                  _this2._transiton.getComponent(sp.Skeleton).setCompleteListener(null);
                  _this2._transiton.active = false;
                });
              }

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showBonusGameWinner: function showBonusGameWinner(num, icon, text, bg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
                  var show_popup, atlas, icon_pick, text_pick, bg_pick, startBtn, coinLable, func;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      show_popup = _this3.node.getChildByName("show_bonus_games_win");
                      show_popup.active = true;
                      show_popup.opacity = 0;
                      atlas = cc.vv.gameData.GetAtlasByName("pick_bs");
                      icon_pick = cc.find("icon_pick", show_popup);
                      text_pick = cc.find("text_pick", show_popup);
                      bg_pick = cc.find("bg_pick", show_popup);
                      startBtn = show_popup.getChildByName("start");
                      startBtn.active = false;
                      icon_pick.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetSpriteFrameByName(icon);
                      text_pick.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetSpriteFrameByName(text);
                      bg_pick.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetSpriteFrameByName(bg);
                      cc.tween(show_popup).to(1.5, {
                        opacity: 255
                      }).start();
                      cc.tween(startBtn).delay(1).call(function() {
                        startBtn.active = true;
                        startBtn.getComponent(cc.Button).interactable = true;
                      }).start();
                      _context2.next = 16;
                      return cc.vv.gameData.awaitTime(1);

                     case 16:
                      coinLable = cc.find("coin", show_popup);
                      Global.doRoallNumEff(coinLable, 0, num, 2, null, null, 0, true);
                      startBtn.off("click");
                      func = function func() {
                        startBtn.getComponent(cc.Button).interactable = false;
                        cc.tween(show_popup).to(1, {
                          opacity: 0
                        }).call(function() {
                          show_popup.active = false;
                          sucess();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(startBtn, func);
                      startBtn.on("click", function() {
                        startBtn.stopAllActions();
                        func();
                      });

                     case 22:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showFreeGameWinner: function showFreeGameWinner(num) {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popup, lizi, sp_1, sp_2, startBtn, showLable, coinLable, func;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this4._popup.active = true;
                show_popup = _this4._popup.getChildByName("show_free_games_win");
                show_popup.active = true;
                show_popup.setScale(1);
                lizi = cc.find("fg_jiesuan", show_popup);
                lizi.active = true;
                lizi.getComponent(cc.ParticleSystem).resetSystem();
                sp_1 = show_popup.getChildByName("sp_1");
                sp_1.setScale(.5);
                sp_1.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
                sp_2 = show_popup.getChildByName("sp_2");
                sp_2.setScale(0);
                sp_2.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                startBtn = show_popup.getChildByName("start");
                startBtn.setScale(0);
                startBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                showLable = cc.find("lable", show_popup);
                showLable.setScale(0);
                showLable.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                coinLable = cc.find("coin", show_popup);
                coinLable.getComponent(cc.Label).string = Global.FormatNumToComma(num);
                startBtn.off("click");
                _context4.next = 25;
                return _this4.awaitTime(.7);

               case 25:
                startBtn.getComponent(cc.Button).interactable = true;
                func = function func() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_click);
                  startBtn.getComponent(cc.Button).interactable = false;
                  cc.tween(sp_1).delay(.4).to(.3, {
                    scale: .5
                  }, {
                    easing: "backIn"
                  }).start();
                  cc.tween(sp_2).to(.6, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  cc.tween(startBtn).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  cc.tween(showLable).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  cc.tween(show_popup).delay(.3).to(.4, {
                    scale: .3
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this4._popup.active = false;
                    show_popup.active = false;
                    lizi.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(startBtn, func);
                startBtn.on("click", function() {
                  startBtn.stopAllActions();
                  func();
                });

               case 29:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  SixthDayTheDemon_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3e6c+gGqtAAIfobLOm728z", "SixthDayTheDemon_Reel");
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
        this.ShowAntiEffect(false);
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetSlotsScript();
        this.playReelStop();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if (info.isStop && info.id.includes(item.GetShowId()) && 1 == item.GetShowId()) {
                item.playStopAnimation();
                cc.vv.gameData.GetSlotsScript().showCollectCoinAnimation(item.node);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.reelStateInfo && cfg.reelStateInfo[0]) {
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
          cc.vv.AudioManager.playEff(cfg.reelStateInfo[0].path, reelStopEffect, true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  SixthDayTheDemon_SelectFeature: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9e16BUG+hG9bq84Infrsdf", "SixthDayTheDemon_SelectFeature");
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
    var waysPick = [ "theme102_fgturn_243", "theme102_fgturn_1024", "theme102_fgturn_3125", "theme102_fgturn_7776" ];
    var multPick = [ "theme102_fgturn_3x5", "theme102_fgturn_4x5", "theme102_fgturn_5x5", "theme102_fgturn_6x5" ];
    var numPick = [ "theme102_fgturn_15", "theme102_fgturn_10", "theme102_fgturn_5", "theme102_fgturn_3" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _gameUI: null,
        _randomNode: null,
        _itemList: [],
        _exitCallBack: null,
        _isChooseRandom: false
      },
      Init: function Init() {
        this._gameUI = cc.find("game_ui", this.node);
        this._gameUI.active = false;
        this._randomNode = cc.find("game_ui/item_random", this.node);
        this._cfg = cc.vv.gameData.getGameCfg();
        for (var index = 1; index < 6; index++) {
          var item = cc.find("game_ui/item_" + index, this.node);
          item.chooseIndex = index;
          this._itemList.push(item);
          Global.btnClickEvent(item, this.onClick, this);
        }
      },
      onRecvGameAction: function onRecvGameAction(msg) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 == msg.code)) {
                _context.next = 22;
                break;
              }
              if (!(1 == msg.data.rtype)) {
                _context.next = 22;
                break;
              }
              cc.vv.gameData.GetSlotsScript().showGameUI(false);
              cc.vv.gameData.setSlotsIndex(msg.data.index - 1);
              cc.vv.gameData.SetFreeTime(msg.data.freeCnt);
              cc.vv.gameData.SetTotalFree(msg.data.freeCnt);
              cc.vv.gameData.GetSlotsScript().showGameUI(true);
              cc.vv.gameData.GetSlotsScript().node.active = false;
              if (!_this._isChooseRandom) {
                _context.next = 15;
                break;
              }
              _context.next = 11;
              return _this.awaitTime(1);

             case 11:
              _context.next = 13;
              return _this.showRandomAnimation(msg.data.index - 1);

             case 13:
              _context.next = 15;
              break;

             case 15:
              _context.next = 17;
              return _this.awaitTime(1.5);

             case 17:
              cc.vv.gameData.getPopControl().showTransitonAnimation();
              _context.next = 20;
              return _this.awaitTime(1);

             case 20:
              cc.vv.gameData.GetSlotsScript().node.active = true;
              _this.exitSelectFeature();

             case 22:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      initData: function initData() {
        this._isChooseRandom = false;
        var _iterator = _createForOfIteratorHelper(this._itemList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.getComponent(cc.Button).interactable = false;
            item.opacity = 255;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var randomSpine = cc.find("reel_spine", this._randomNode);
        randomSpine.active = false;
        var randomStart = cc.find("reel_Start", this._randomNode);
        randomStart.active = true;
        var fgturn_ways = cc.find("fgturn_ways", this._randomNode);
        fgturn_ways.active = true;
        var fgturn_pick = cc.find("fgturn_pick", this._randomNode);
        fgturn_pick.active = true;
        var fgturn_reel = cc.find("fgturn_reel", this._randomNode);
        fgturn_reel.active = false;
        var fgturn_line = cc.find("fgturn_line", this._randomNode);
        fgturn_line.active = false;
        var fgturn_fg = cc.find("fgturn_fg", this._randomNode);
        fgturn_fg.active = false;
      },
      enterSelectFeature: function enterSelectFeature(exitCallBack) {
        var _this3 = this;
        Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.pick_bgm);
        this._exitCallBack = exitCallBack;
        this._gameUI.active = true;
        this._gameUI.opacity = 80;
        this.initData();
        cc.tween(this._gameUI).to(1.2, {
          opacity: 255
        }).call(function() {
          var _iterator2 = _createForOfIteratorHelper(_this3._itemList), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var item = _step2.value;
              item.getComponent(cc.Button).interactable = true;
              var itemSpine = cc.find("frame/spine", item);
              itemSpine.active = true;
              itemSpine.getComponent(sp.Skeleton).setAnimation(0, "xunhuanshan", true);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          cc.vv.gameData.isNeedAutoPlay() && cc.tween(_this3._gameUI).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
            var _iterator3 = _createForOfIteratorHelper(_this3._itemList), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _item = _step3.value;
                _item.getComponent(cc.Button).interactable = false;
                var _itemSpine = cc.find("frame/spine", _item);
                _itemSpine.active = false;
                cc.tween(_item).to(.2, {
                  opacity: 100
                }).start();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            var item = cc.find("game_ui/item_5", _this3.node);
            item.stopAllActions();
            item.opacity = 255;
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_click);
            var itemSpine = cc.find("frame/spine", item);
            itemSpine.active = true;
            itemSpine.getComponent(sp.Skeleton).setAnimation(0, "dianjixiaoguo", false);
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.uid = Global.playerData.uid;
            req.gameid = cc.vv.gameData._gameId;
            req.data = {};
            req.data.rtype = 1;
            req.data.index = 5;
            cc.vv.NetManager.send(req);
            _this3._isChooseRandom = true;
          }).start();
        }).start();
      },
      exitSelectFeature: function exitSelectFeature() {
        this._gameUI.active = false;
        this._exitCallBack && this._exitCallBack();
      },
      onClick: function onClick(render) {
        this._gameUI.stopAllActions();
        var _iterator4 = _createForOfIteratorHelper(this._itemList), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var item = _step4.value;
            item.getComponent(cc.Button).interactable = false;
            var _itemSpine2 = cc.find("frame/spine", item);
            _itemSpine2.active = false;
            cc.tween(item).to(.2, {
              opacity: 100
            }).start();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        render.node.stopAllActions();
        render.node.opacity = 255;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_click);
        var itemSpine = cc.find("frame/spine", render.node);
        itemSpine.active = true;
        itemSpine.getComponent(sp.Skeleton).setAnimation(0, "dianjixiaoguo", false);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 1;
        req.data.index = render.node.chooseIndex;
        cc.vv.NetManager.send(req);
        this._isChooseRandom = render.node.chooseIndex > 4;
      },
      showRandomAnimation: function showRandomAnimation(index) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var atlas, randomStart, randomSpine, fgturn_ways, fgturn_reel, fgturn_mult, fgturn_line, fgturn_pick, fgturn_fg, fgturn_num;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                atlas = cc.vv.gameData.GetAtlasByName("pickfs");
                randomStart = cc.find("reel_Start", _this4._randomNode);
                randomStart.active = false;
                randomSpine = cc.find("reel_spine", _this4._randomNode);
                randomSpine.active = true;
                randomSpine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  randomSpine.active = false;
                  randomSpine.getComponent(sp.Skeleton).setCompleteListener(null);
                });
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_random);
                _context2.next = 9;
                return _this4.awaitTime(.6);

               case 9:
                fgturn_ways = cc.find("fgturn_ways", _this4._randomNode);
                fgturn_ways.active = false;
                _context2.next = 13;
                return _this4.awaitTime(.6);

               case 13:
                fgturn_reel = cc.find("fgturn_reel", _this4._randomNode);
                fgturn_reel.active = true;
                fgturn_mult = cc.find("fgturn_mult", fgturn_reel);
                fgturn_mult.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(multPick[index]);
                _context2.next = 19;
                return _this4.awaitTime(.3);

               case 19:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_random_end);
                fgturn_reel.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.1, 1)));
                _context2.next = 23;
                return _this4.awaitTime(.5);

               case 23:
                fgturn_line = cc.find("fgturn_line", _this4._randomNode);
                fgturn_line.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(waysPick[index]);
                fgturn_line.active = true;
                fgturn_pick = cc.find("fgturn_pick", _this4._randomNode);
                fgturn_pick.active = false;
                fgturn_fg = cc.find("fgturn_fg", _this4._randomNode);
                fgturn_fg.active = true;
                fgturn_num = cc.find("fgturn_num", fgturn_fg);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_random);
                fgturn_num.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(numPick[0]);
                fgturn_num.scale = .2;
                fgturn_num.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.callFunc(function() {
                  fgturn_num.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(numPick[1]);
                  fgturn_num.scale = .2;
                }), cc.scaleTo(.2, 1), cc.callFunc(function() {
                  fgturn_num.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(numPick[2]);
                  fgturn_num.scale = .2;
                }), cc.scaleTo(.2, 1), cc.callFunc(function() {
                  fgturn_num.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(numPick[3]);
                  fgturn_num.scale = .2;
                }), cc.scaleTo(.2, 1), cc.callFunc(function() {
                  fgturn_num.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(numPick[index]);
                  fgturn_num.scale = .2;
                }), cc.scaleTo(.5, 1), cc.callFunc(function() {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_random_end);
                  fgturn_fg.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    sucess();
                  })));
                })));

               case 35:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  SixthDayTheDemon_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b098reqO1DTK5GA7CUPSm9", "SixthDayTheDemon_Slots");
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
        gameUI: {
          default: null,
          type: cc.Node
        },
        _roleNode: null,
        _coinSpine: null,
        _coinNode: null
      },
      Init: function Init(row, col) {
        this._roleNode = cc.find("zhitianxinchang", this.node);
        this._coinSpine = cc.find("collect/coin_spine", this.node);
        this._coinSpine.active = false;
        this._coinNode = cc.find("collect/coin_node", this.node);
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = col;
        this._row = row;
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.CheckJoopLock();
        this.showGameUI(false);
      },
      showGameUI: function showGameUI(isShow) {
        this.gameUI.active = isShow;
        this.node.active = isShow;
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
        Global.SlotsSoundMgr.playNormalBgm();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nWin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return _this2.ShowWinCoin(nWin, nWin + _this2._bottomScript.getCurrentWin(), false);

             case 5:
              _context.next = 9;
              break;

             case 7:
              _context.next = 9;
              return _this2.ShowWinCoin(nWin, nWin, true);

             case 9:
              if (!_this2._gameInfo.select) {
                _context.next = 22;
                break;
              }
              if (!_this2._gameInfo.freeResult.isFreeState) {
                _context.next = 13;
                break;
              }
              _context.next = 22;
              break;

             case 13:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              _context.next = 16;
              return _this2.awaitTime(2);

             case 16:
              _context.next = 18;
              return _this2.CheckEnterFreeGame();

             case 18:
              _this2.ShowGameview(true);
              cc.vv.gameData.setIsFreeGame(true);
              _context.next = 22;
              return _this2.awaitTime(1);

             case 22:
              if (!_this2._gameInfo.isBonusGame) {
                _context.next = 27;
                break;
              }
              _context.next = 25;
              return _this2.awaitTime(1.2);

             case 25:
              _context.next = 27;
              return _this2.CheckTriggerSubGame();

             case 27:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 32;
                break;
              }
              _context.next = 30;
              return _this2.CheckExitFreeGame();

             case 30:
              _context.next = 32;
              return _this2.ShowWinCoin(_this2._bottomScript.getCurrentWin(), _this2._bottomScript.getCurrentWin(), true);

             case 32:
              _this2._topScript.StopMove();
              _this2._bottomScript.CanDoNextRound();

             case 34:
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
                      _context3.next = 3;
                      return _this4.awaitTime(1);

                     case 3:
                      _context3.next = 5;
                      return cc.vv.gameData.getPopControl().showFreeGameWinner(_this4._bottomScript.getCurrentWin());

                     case 5:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_complete);
                      cc.vv.gameData.getPopControl().showTransitonAnimation();
                      _context3.next = 9;
                      return _this4.awaitTime(1);

                     case 9:
                      cc.vv.gameData.GetSlotsScript().showGameUI(false);
                      cc.vv.gameData.setSlotsIndex(0);
                      cc.vv.gameData.GetSlotsScript().showGameUI(true);
                      _this4.ShowGameview(false);
                      _context3.next = 15;
                      return _this4.awaitTime(1);

                     case 15:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 17:
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      cc.vv.gameData.GetSlotsScript().node.active = false;
                      cc.vv.gameData.getSelectControl().enterSelectFeature(sucess);

                     case 2:
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
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return _this5.awaitTime(1);

                     case 2:
                      cc.vv.gameData.isFreeGame() || _this5._bottomScript.DoHideWinAction();
                      _this5.showCollectAnimation();
                      _context7.next = 6;
                      return _this5.awaitTime(2.9);

                     case 6:
                      cc.vv.gameData.setIsBonusGame(true);
                      cc.vv.gameData.getBonusControl().enterBonusGame(null, _this5._gameInfo.jackpotValues, sucess);

                     case 8:
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
      ReconnectShow: function ReconnectShow() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var nTotal, currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this6.ShowGameview(cc.vv.gameData.isFreeGame());
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              _this6._bottomScript.SetWin(nTotal);
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              if (!(cc.vv.gameData.getDeskInfo().allBonusData && cc.vv.gameData.getDeskInfo().allBonusData.isBonusGame)) {
                _context10.next = 11;
                break;
              }
              _context10.next = 7;
              return new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      cc.vv.gameData.setIsBonusGame(true);
                      cc.vv.gameData.getBonusControl().enterBonusGame(cc.vv.gameData.getDeskInfo().allBonusData.infoData, cc.vv.gameData.getDeskInfo().allBonusData.jackpotValues, sucess);

                     case 2:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x9, _x10) {
                  return _ref5.apply(this, arguments);
                };
              }());

             case 7:
              currentCoin = _this6._bottomScript.getCurrentWin();
              bonusWinCoin = cc.vv.gameData.getBonusControl().getBonusWinCoin();
              _context10.next = 11;
              return _this6.ShowWinCoin(bonusWinCoin, currentCoin, true);

             case 11:
              if (!cc.vv.gameData.getDeskInfo().select) {
                _context10.next = 14;
                break;
              }
              _context10.next = 14;
              return _this6.CheckEnterFreeGame();

             case 14:
              _this6.CanDoNextRound();

             case 15:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      CheckJoopLock: function CheckJoopLock() {
        var safeNode = this.gameUI;
        var curBet = cc.vv.gameData.GetTotalBet();
        var jpNodes = safeNode.getComponentsInChildren("LMSlotMachine_PrizePool");
        for (var i = 0; i < jpNodes.length; i++) {
          var item = jpNodes[i];
          item.onEventTotalbetUpdated({
            detail: curBet
          });
        }
      },
      showCollectAnimation: function showCollectAnimation() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wawa);
              _this7._roleNode.active = false;
              _this7._roleNode.getComponent(sp.Skeleton).setAnimation(0, "skill02", false);
              _context11.next = 5;
              return _this7.awaitTime(4);

             case 5:
              _this7._roleNode.active = true;
              _this7._roleNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);

             case 7:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      showCollectCoinAnimation: function showCollectCoinAnimation(node) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var wordPos, startPos, endPos, pianyiPos, _loop, index, collectCount;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              wordPos = node.convertToWorldSpaceAR(cc.v2(0));
              startPos = _this8._coinNode.convertToNodeSpaceAR(wordPos);
              endPos = cc.find("collect/bowl", _this8.node).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this8._coinNode.convertToNodeSpaceAR(endPos);
              _context12.next = 6;
              return _this8.awaitTime(.3);

             case 6:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coin_fly);
              pianyiPos = [ cc.v2(101, 56), cc.v2(-95.6, 48.6), cc.v2(-47.7, 40.2), cc.v2(-44, -124), cc.v2(108.5, 28), cc.v2(121.6, -11.6), cc.v2(92.7, -10.7), cc.v2(-135, -49.5) ];
              _loop = function _loop(index) {
                var pos = cc.v2(startPos.x + pianyiPos[index].x, startPos.y + pianyiPos[index].y);
                var newNode = cc.instantiate(_this8._coinSpine);
                newNode.active = true;
                newNode.parent = _this8._coinNode;
                newNode.position = startPos;
                newNode.scale = 1;
                newNode.angle = Global.random(1, 360);
                var coin = cc.find("coin", newNode);
                coin.active = true;
                cc.tween(coin).repeatForever(cc.tween(coin).by(.9, {
                  angle: -50
                })).start();
                var star = cc.find("star", newNode);
                star.active = false;
                cc.tween(newNode).parallel(cc.tween(newNode).delay(.2).to(.65, {
                  scale: .4
                }, {
                  easing: "quadIn"
                }).call(function() {
                  coin.active = false;
                  star.active = true;
                  star.scale = 2.5;
                  newNode.stopAllActions();
                  var starSp = star.getComponent(sp.Skeleton);
                  starSp.setAnimation(0, "animation2", false);
                  starSp.setCompleteListener(function() {
                    newNode.parent = null;
                    starSp.setCompleteListener(null);
                  });
                }), cc.tween(newNode).to(.2, {
                  position: pos
                }, {
                  easing: "quadIn"
                }).to(.7, {
                  position: endPos
                }, {
                  easing: "quadIn"
                })).start();
              };
              for (index = 1; index < pianyiPos.length; index++) _loop(index);
              if (!_this8._gameInfo) {
                _context12.next = 17;
                break;
              }
              collectCount = _this8._gameInfo.collectCount;
              if (!(collectCount > 0)) {
                _context12.next = 16;
                break;
              }
              _context12.next = 15;
              return cc.vv.gameData.awaitTime(1.3);

             case 15:
              if ("idle" === _this8._roleNode.getComponent(sp.Skeleton).animation) {
                _this8._roleNode.getComponent(sp.Skeleton).setAnimation(0, "skill01", false);
                _this8._roleNode.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              }

             case 16:
              cc.vv.gameData.setCollectCount(collectCount);

             case 17:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  SixthDayTheDemon_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7c01prL6pBNbOKhOT2S0n1", "SixthDayTheDemon_Sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/SixthDayTheDemon/",
          override: true
        },
        anticipation: "anticipation",
        base_bgm: "base_bgm",
        bell: "bell",
        bonus: "bonus",
        bowl_close: "bowl_close",
        bowl_open: "bowl_open",
        coin_fall: "coin_fall",
        coin_fly: "coin_fly",
        reel_stop: "reel_stop",
        symbol_scatter: "symbol_scatter",
        transition: "transition",
        wawa: "wawa",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        win3: "win3",
        win3end: "win3end",
        win4: "win4",
        win4end: "win4end",
        free_dialog_collect_click: "free_dialog_collect_click",
        free_dialog_collect_show: "free_dialog_collect_show",
        bonus_bgm: "bonus_bgm",
        bonus_coin: "bonus_coin",
        bonus_complete: "bonus_complete",
        bonus_hit: "bonus_hit",
        pick_bgm: "pick_bgm",
        pick_click: "pick_click",
        pick_random: "pick_random",
        pick_random_end: "pick_random_end"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  SixthDayTheDemon_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "523a4m7qNdOtqCCfkY1wDEQ", "SixthDayTheDemon_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      playWinTweenAction: function playWinTweenAction() {
        if (this._showNode) {
          this._showNode.cleanup();
          this._showNode.runAction(cc.repeatForever(cc.blink(1, 1)));
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "SixthDayTheDemon_BonusGame", "SixthDayTheDemon_Cfg", "SixthDayTheDemon_GameData", "SixthDayTheDemon_LMPrizePool", "SixthDayTheDemon_Logic", "SixthDayTheDemon_Pop", "SixthDayTheDemon_Reel", "SixthDayTheDemon_SelectFeature", "SixthDayTheDemon_Slots", "SixthDayTheDemon_Sound", "SixthDayTheDemon_Symbol" ]);