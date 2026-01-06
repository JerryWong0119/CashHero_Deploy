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
  Jormengander_BottomPop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc67eKtTs5LLZKLxzedqYg7", "Jormengander_BottomPop");
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
        _freeGameTimesSucces: null,
        _startAddFreeWinCoin: false,
        _winCoin: 0,
        _wheelInitPosY: 0,
        _BonusStartButton: null,
        _winCoinCollect: null,
        _winCoinAutoClose: false
      },
      onLoad: function onLoad() {
        this._BonusStartButton = cc.find("bg/pressToStart/startButton", this.node);
        Global.btnClickEvent(this._BonusStartButton, this.clossBonusStart, this);
        this._winCoinCollect = cc.find("bg/winCoin/collectButton", this.node);
        Global.btnClickEvent(this._winCoinCollect, this.closeWinCoin, this);
      },
      start: function start() {},
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("bg", this.node);
        popBg.scale = 1.2;
        cc.tween(popBg).to(.2, {
          scale: 1
        }).start();
        var effect = cc.find("T_01", this.node);
        effect.active = true;
        var effectSp = effect.getComponent(sp.Skeleton);
        effectSp.setAnimation(0, "animation", false);
        effectSp.setCompleteListener(function() {
          effect.active = false;
          effectSp.setCompleteListener(null);
        });
      },
      hideWin: function hideWin() {
        var _this = this;
        var popBg = cc.find("bg", this.node);
        popBg.scale = 1;
        cc.tween(popBg).to(.1, {
          scale: 1.2
        }).to(.3, {
          scale: .1
        }).call(function() {
          _this.node.active = false;
          if (_this._freeGameTimesSucces) {
            _this._freeGameTimesSucces();
            _this._freeGameTimesSucces = null;
          }
        }).start();
      },
      specialFormatNumToComma: function specialFormatNumToComma(num) {
        var unitArr = [ "", "K", "M", "B", "T", "Q" ];
        var sum = 0;
        while (num > 9999999) {
          num /= 1e3;
          sum++;
        }
        return Global.FormatNumToComma(num) + unitArr[sum];
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      initBonusStart: function initBonusStart() {
        this._BonusStartButton.getComponent(cc.Button).interactable = false;
        var bg = cc.find("bg", this.node);
        for (var i = 0; i < bg.children.length; i++) {
          var element = bg.children[i];
          element.active = false;
        }
        var BonusRoot = cc.find("bg/BonusRoot", this.node);
        BonusRoot.active = true;
        BonusRoot.opacity = 255;
      },
      showBonusStart: function showBonusStart() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var BonusRoot, pressToStart;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this3._freeGameTimesSucces = sucess;
                _this3.showWin();
                _this3.initBonusStart();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame2);
                _context.next = 6;
                return _this3.awaitTime(1.5);

               case 6:
                BonusRoot = cc.find("bg/BonusRoot", _this3.node);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame2);
                cc.tween(BonusRoot).to(.4, {
                  opacity: 0
                }).start();
                pressToStart = cc.find("bg/pressToStart", _this3.node);
                pressToStart.active = true;
                pressToStart.opacity = 0;
                _this3.unschedule(_this3.loopStartButton);
                cc.tween(pressToStart).to(.4, {
                  opacity: 255
                }).call(function() {
                  _this3.schedule(_this3.loopStartButton, 1);
                  _this3._BonusStartButton.getComponent(cc.Button).interactable = true;
                }).start();

               case 14:
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
      loopStartButton: function loopStartButton() {
        var pressToStart = cc.find("bg/pressToStart", this.node);
        cc.tween(pressToStart).to(.3, {
          scale: 1.1
        }).to(.8, {
          scale: 1
        }).start();
      },
      clossBonusStart: function clossBonusStart() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click1);
        this.unschedule(this.loopStartButton);
        this._BonusStartButton.getComponent(cc.Button).interactable = false;
        this.hideWin();
      },
      initFreeWinFree: function initFreeWinFree(freeNum) {
        var bg = cc.find("bg", this.node);
        for (var i = 0; i < bg.children.length; i++) {
          var element = bg.children[i];
          element.active = false;
        }
        var freeWinFree = cc.find("bg/freeWinFree", this.node);
        freeWinFree.active = true;
        cc.find("bg/freeWinFree/bg/label", this.node).getComponent(cc.Label).string = freeNum;
      },
      showFreeWinFree: function showFreeWinFree(freeNum) {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this4._freeGameTimesSucces = sucess;
                _this4.showWin();
                _this4.initFreeWinFree(freeNum);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame2);
                _context2.next = 6;
                return _this4.awaitTime(2);

               case 6:
                _this4.hideWin();

               case 7:
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
      initWinCoin: function initWinCoin(coin) {
        this._winCoin = coin;
        this._winCoinCollect.getComponent(cc.Button).interactable = true;
        var bg = cc.find("bg", this.node);
        for (var i = 0; i < bg.children.length; i++) {
          var element = bg.children[i];
          element.active = false;
        }
        var winCoin = cc.find("bg/winCoin", this.node);
        winCoin.active = true;
      },
      showWinCoin: function showWinCoin(coin, autoclose) {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var winCoinLabel;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this5._winCoinAutoClose = autoclose;
                _this5._freeGameTimesSucces = sucess;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame2);
                _this5.showWin();
                _this5.initWinCoin(coin);
                winCoinLabel = cc.find("bg/winCoin/bg/label", _this5.node);
                _this5._startAddFreeWinCoin = true;
                Global.doRoallNumEff(winCoinLabel, Math.floor(.1 * coin), coin, 2.5, function() {
                  _this5._startAddFreeWinCoin = false;
                  autoclose && _this5.hideWin();
                }, null, 0, true);

               case 8:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      closeWinCoin: function closeWinCoin() {
        if (this._winCoinAutoClose) return;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click1);
        if (this._startAddFreeWinCoin) {
          this._startAddFreeWinCoin = false;
          var winCoin = cc.find("bg/winCoin/bg/label", this.node);
          winCoin.stopAllActions();
          var winCoinLabel = winCoin.getComponent(cc.Label);
          winCoinLabel.string = Global.FormatNumToComma(this._winCoin);
          return;
        }
        this._winCoinCollect.getComponent(cc.Button).interactable = false;
        this.hideWin();
      }
    });
    cc._RF.pop();
  }, {} ],
  Jormengander_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e6f3csVhpPS7Sx0lrshcCn", "Jormengander_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      ShowFreeModel: function ShowFreeModel(bShow, used, total) {
        this._bFreeModel = bShow;
      },
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        if (this._bFreeModel) {
          this._SetBtnEnable(this._btn_add_bet, false);
          this._SetBtnEnable(this._btn_minus_bet, false);
          this._SetBtnEnable(this._btn_max_bet, false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  Jormengander_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "809cb8miwNJo6rjJxc5XvgC", "Jormengander_Cfg");
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
          zIndex: 200
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation2",
          zIndex: 800
        },
        stop_ani: {
          name: "animation1",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation2",
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation2",
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation2",
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 160
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "Jormengander_Bottom",
        Slots: "Jormengander_Slots",
        Reels: "Jormengander_reel",
        Symbols: "Jormengander_symbol",
        Sound: "Jormengander_sound"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 130,
        height: 95
      },
      helpItems: [ "games/Jormengander/prefab/LMSlots_Help_item1", "games/Jormengander/prefab/LMSlots_Help_item2", "games/Jormengander/prefab/LMSlots_Help_item3" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 1, 4, 6, 7, 8, 9, 10, 12, 13 ],
      kuang: "",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 10,
        time: .1
      },
      commEffect: {
        path: "games/Jormengander/",
        win1: [ "base/win1", "base/win1end" ],
        win2: [ "base/win2", "base/win2end" ]
      },
      reelStateInfo: [ {
        id: [ 4 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/Jormengander/",
        reelStopSound: "base/reel_stop",
        symbolStopSound: "base/symbol_rapidpay",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 5 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/Jormengander/",
        reelStopSound: "base/reel_stop",
        symbolStopSound: "base/symbol_rapidpay",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/Jormengander/",
        reelStopSound: "base/reel_stop",
        symbolStopSound: "base/symbol_wheel",
        antSound: "base/reel_notify",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/Jormengander/",
        reelStopSound: "base/reel_stop",
        symbolStopSound: "base/symbol_wheel",
        antSound: "base/reel_notify",
        antSpeed: 2e3
      } ],
      AddAntiTime: 2.6,
      normalBgm: "base/base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Jormengander_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5008fz6fFE7I41qCjT7YT9", "Jormengander_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _freeGameMult: 2
      },
      getFreeGameBonus: function getFreeGameBonus() {
        return this._deskInfo.freeGameBonus;
      },
      setFreeGameBouns: function setFreeGameBouns(freeGameBonus) {
        this._deskInfo.freeGameBonus = freeGameBonus;
      },
      getSelect: function getSelect() {
        return this._deskInfo.select;
      },
      getPopWinManage: function getPopWinManage() {
        return cc.find("Canvas/safe_node").getComponentInChildren("Jormengander_Pop");
      },
      getBottomPopWinManage: function getBottomPopWinManage() {
        return cc.find("Canvas/safe_node").getComponentInChildren("Jormengander_BottomPop");
      },
      SetFreeGameMult: function SetFreeGameMult(mult) {
        this._freeGameMult = mult;
      },
      GetFreeGameMult: function GetFreeGameMult() {
        return this._freeGameMult;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Jormengander_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e79cvQgthCFIF7b+0qEYIv", "Jormengander_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Jormengander_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6a30cOl3FJro4Z/jJ9hZ8Q", "Jormengander_Pop");
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
    var winName = {
      win_jackpot: 0,
      freeGameTimes: 1,
      wheelGame: 2
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _showWinList: [],
        _freeGameTimesSucces: null,
        _startAddFreeWinCoin: false,
        _jackpotCoin: 0,
        _freeGameCoin: 0,
        _wheelInitPosY: 0
      },
      onLoad: function onLoad() {
        this._showWinList[winName.win_jackpot] = cc.find("show_win_jackpot", this.node);
        this._showWinList[winName.freeGameTimes] = cc.find("show_freeGameTimes", this.node);
        this._showWinList[winName.wheelGame] = cc.find("wheelGame", this.node);
        var startButton = cc.find("startButton", this._showWinList[winName.freeGameTimes]);
        Global.btnClickEvent(startButton, this.clossFreeGameTimes, this);
        Global.btnClickEvent(cc.find("collectButton", this._showWinList[winName.win_jackpot]), this.clossWinJackpot, this);
      },
      start: function start() {},
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      hideWin: function hideWin(callBack) {
        var _this = this;
        var popBg = cc.find("popup", this.node);
        cc.tween(popBg).to(.3, {
          opacity: 0
        }).call(function() {
          callBack && callBack();
          _this.node.active = false;
          for (var i = 0; i < _this._showWinList.length; i++) {
            var element = _this._showWinList[i];
            element.active = false;
          }
        }).start();
      },
      specialFormatNumToComma: function specialFormatNumToComma(num, change) {
        var unitArr = [ "", "K", "M", "B", "T", "Q" ];
        var sum = 0;
        while (num > change) {
          num /= 1e3;
          sum++;
        }
        return Global.FormatNumToComma(num) + unitArr[sum];
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      initWinJackpot: function initWinJackpot(coinNum, jackpotNum) {
        var collectButton = cc.find("collectButton", this._showWinList[winName.win_jackpot]);
        collectButton.getComponent(cc.Button).interactable = true;
        this._jackpotCoin = coinNum;
        var winCoin = cc.find("freeSpinsRoot/label", this._showWinList[winName.win_jackpot]);
        winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * coinNum));
        var rapidNum = cc.find("rapidNum", this._showWinList[winName.win_jackpot]);
        for (var i = 0; i < rapidNum.children.length; i++) {
          var element = rapidNum.children[i];
          element.active = false;
        }
        cc.find("them113_jackpot_RapidPay_" + jackpotNum, rapidNum).active = true;
      },
      showWinJackpot: function showWinJackpot(coinNum, jackpotNum) {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3._freeGameTimesSucces = sucess;
          _this3.showWin();
          _this3.initWinJackpot(coinNum, jackpotNum);
          for (var i = 0; i < _this3._showWinList.length; i++) {
            var element = _this3._showWinList[i];
            element.active = false;
          }
          _this3._showWinList[winName.win_jackpot].active = true;
          var animation = _this3._showWinList[winName.win_jackpot].getComponent(cc.Animation);
          animation.play("popWin");
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame3);
          animation.on("stop", function() {
            _this3._startAddFreeWinCoin = true;
            var winCoin = cc.find("freeSpinsRoot/label", _this3._showWinList[winName.win_jackpot]);
            Global.doRoallNumEff(winCoin, Math.floor(.1 * coinNum), coinNum, 2.5, function() {
              _this3._startAddFreeWinCoin = false;
            }, null, 0, true);
          });
          _this3.scheduleOnce(_this3.clossWinJackpot, 10);
        });
      },
      clossWinJackpot: function clossWinJackpot() {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click1);
        if (this._startAddFreeWinCoin) {
          this._startAddFreeWinCoin = false;
          var winCoin = cc.find("freeSpinsRoot/label", this._showWinList[winName.win_jackpot]);
          winCoin.stopAllActions();
          var winCoinLabel = winCoin.getComponent(cc.Label);
          winCoinLabel.string = Global.FormatNumToComma(this._jackpotCoin);
          return;
        }
        this.unschedule(this.clossWinJackpot);
        cc.tween(this._showWinList[winName.win_jackpot]).to(.3, {
          scale: .1
        }).start();
        this.hideWin(function() {
          if (_this4._freeGameTimesSucces) {
            _this4._freeGameTimesSucces();
            _this4._freeGameTimesSucces = null;
          }
        });
        var collectButton = cc.find("collectButton", this._showWinList[winName.win_jackpot]);
        collectButton.getComponent(cc.Button).interactable = false;
      },
      initFreeGameTimes: function initFreeGameTimes(freeNum, mult) {
        var startButton = cc.find("startButton", this._showWinList[winName.freeGameTimes]);
        startButton.getComponent(cc.Button).interactable = true;
        startButton.active = false;
        var freeNumLabel = cc.find("freeSpinsRoot/label", this._showWinList[winName.freeGameTimes]);
        freeNumLabel.getComponent(cc.Label).string = freeNum;
        if (2 === mult) {
          cc.find("theme113_tankuang2_with/theme113_tankuang2_X2", this._showWinList[winName.freeGameTimes]).active = true;
          cc.find("theme113_tankuang2_with/theme113_tankuang2_X3", this._showWinList[winName.freeGameTimes]).active = false;
        } else {
          cc.find("theme113_tankuang2_with/theme113_tankuang2_X2", this._showWinList[winName.freeGameTimes]).active = false;
          cc.find("theme113_tankuang2_with/theme113_tankuang2_X3", this._showWinList[winName.freeGameTimes]).active = true;
        }
      },
      showFreeGameTimes: function showFreeGameTimes(freeNum, mult) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          _this5._freeGameTimesSucces = sucess;
          _this5.showWin();
          _this5.initFreeGameTimes(freeNum, mult);
          for (var i = 0; i < _this5._showWinList.length; i++) {
            var element = _this5._showWinList[i];
            element.active = false;
          }
          _this5._showWinList[winName.freeGameTimes].active = true;
          var animation = _this5._showWinList[winName.freeGameTimes].getComponent(cc.Animation);
          animation.play("popWin");
          animation.on("stop", function() {
            var startButton = cc.find("startButton", _this5._showWinList[winName.freeGameTimes]);
            startButton.active = true;
          });
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame1);
        });
      },
      clossFreeGameTimes: function clossFreeGameTimes() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click1);
        cc.tween(this._showWinList[winName.freeGameTimes]).to(.3, {
          scale: .1
        }).start();
        this.hideWin(function() {
          if (_this6._freeGameTimesSucces) {
            _this6._freeGameTimesSucces();
            _this6._freeGameTimesSucces = null;
          }
        });
        var startButton = cc.find("startButton", this._showWinList[winName.freeGameTimes]);
        startButton.getComponent(cc.Button).interactable = false;
      },
      initWheelGame: function initWheelGame(data) {
        var winNode = this._showWinList[winName.wheelGame];
        this._wheelInitPosY = winNode.y;
        for (var i = 0; i < data.length; i++) {
          var element = data[i];
          if ("FREE" === element) {
            var node = cc.find("rollNode/node" + (i + 1), winNode);
            cc.find("free", node).active = true;
            cc.find("jackpot", node).active = false;
          } else if ("JACPOT" === element) {
            var _node = cc.find("rollNode/node" + (i + 1), winNode);
            cc.find("free", _node).active = false;
            cc.find("jackpot", _node).active = true;
          } else {
            var _node2 = cc.find("rollNode/node" + (i + 1), winNode);
            var label = cc.find("label", _node2);
            label.getComponent(cc.Label).string = this.specialFormatNumToComma(element, 9999999);
          }
        }
      },
      showWheelGame: function showWheelGame(data) {
        var _this7 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var i, element, winNode, rollNode, req;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this7._freeGameTimesSucces = sucess;
                _this7.showWin();
                _this7.initWheelGame(data);
                for (i = 0; i < _this7._showWinList.length; i++) {
                  element = _this7._showWinList[i];
                  element.active = false;
                }
                winNode = _this7._showWinList[winName.wheelGame];
                winNode.active = true;
                cc.find("choiceEffect", winNode).active = false;
                rollNode = cc.find("rollNode", winNode);
                rollNode.angle = 0;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_move1);
                cc.tween(winNode).to(.3, {
                  y: 548 - cc.winSize.height / 2
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 13;
                return _this7.awaitTime(1);

               case 13:
                req = {
                  c: MsgId.SLOT_SUBGAME_DATA
                };
                req.uid = Global.playerData.uid;
                req.gameid = cc.vv.gameData._gameId;
                req.data = {};
                req.data.rtype = 1;
                cc.vv.NetManager.send(req);

               case 19:
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
      setWheelResult: function setWheelResult(result) {
        var _this8 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var winNode, rollNode, rusltAngle;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                winNode = _this8._showWinList[winName.wheelGame];
                rollNode = cc.find("rollNode", winNode);
                rusltAngle = 15 * (result.idx - 1);
                rusltAngle -= 3600;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_spin);
                cc.tween(rollNode).to(7, {
                  angle: rusltAngle
                }, {
                  easing: "quadInOut"
                }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      cc.find("choiceEffect", winNode).active = true;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_stop);
                      _context2.next = 4;
                      return _this8.awaitTime(2);

                     case 4:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_move2);
                      cc.tween(winNode).to(.3, {
                        y: _this8._wheelInitPosY
                      }, {
                        easing: "backIn"
                      }).start();
                      _this8.hideWin(function() {
                        if (_this8._freeGameTimesSucces) {
                          _this8._freeGameTimesSucces();
                          _this8._freeGameTimesSucces = null;
                        }
                        sucess();
                      });

                     case 7:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }))).start();

               case 6:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Jormengander_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd7a0AqdjlDwY0Mf+rNKb2f", "Jormengander_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI", "Bigger" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _lastLockJackpot: 0
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var _this = this;
        var targetJpNode = node;
        if (targetJpNode) {
          var lock_node = targetJpNode.getChildByName("lockbg");
          if (lock_node) {
            var jp_title = targetJpNode.getChildByName("spr_title");
            lock_node.active = true;
            var un_lock_bet = lock_node.getChildByName("betNum");
            un_lock_bet.getComponent(cc.Label).string = Global.FormatNumToComma(unLockBet);
            var lockSp = lock_node.getChildByName("lock").getComponent(sp.Skeleton);
            if (bLock) {
              lock_node.active = true;
              lockSp.setAnimation(0, "animation1", false);
              lockSp.setCompleteListener(function() {
                _this.updateJackpotLockAni();
              });
              poolType < this._lastLockJackpot && (this._lastLockJackpot = poolType);
            } else {
              lock_node.active = false;
              if (!bInit) {
                var unlockEffect = targetJpNode.getChildByName("unlock");
                unlockEffect.active = true;
                var unlockEffectSp = unlockEffect.getComponent(sp.Skeleton);
                unlockEffectSp.setAnimation(0, "animation1", false);
                unlockEffectSp.setCompleteListener(function() {
                  unlockEffect.active = false;
                });
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
              }
              poolType >= this._lastLockJackpot && (this._lastLockJackpot = poolType + 1);
              this.updateJackpotLockAni();
            }
          }
        }
      },
      updateJackpotLockAni: function updateJackpotLockAni() {
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        var tempLastJack = this._lastLockJackpot;
        3 === tempLastJack ? tempLastJack++ : 6 === tempLastJack && (tempLastJack = 3);
        if (jpNode) for (var i = 0; i < jackpotNames.length; i++) {
          var element = jackpotNames[i];
          var targetJpNode = cc.find("prizePool_" + element, jpNode.node.parent);
          if (targetJpNode) {
            var lock_node = targetJpNode.getChildByName("lockbg");
            if (lock_node) {
              var lockSp = lock_node.getChildByName("lock").getComponent(sp.Skeleton);
              tempLastJack === i ? lockSp.setAnimation(0, "animation1", true) : lockSp.setAnimation(0, "animation2", false);
              lockSp.setCompleteListener(null);
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Jormengander_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a360aGwiXdLzKp0g/tJftj/", "Jormengander_Slots");
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
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI", "Bigger" ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _qiePin: null,
        _node_freeGame: null,
        _isInFree: false,
        _tipsIndex: 1,
        _wheelResult: null,
        _isBackUp: false
      },
      onLoad: function onLoad() {
        this._super();
        this._qiePin = cc.find("qiepingNode", this.node.parent);
        this._node_freeGame = cc.find("node_free_game", this.node.parent);
        this.schedule(this.showTips, 10);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickButton, this);
      },
      RegisterEvent: function RegisterEvent() {},
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickButton, false, this);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        var parNode = cc.find("top_ani", this.node);
        parNode && parNode.removeAllChildren();
        cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() || this._bottomScript._bAutoModel ? this.SetTimeScale(1.2) : this.SetTimeScale(1);
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        if (total > 0) {
          var freeGameTip = cc.find("Canvas/safe_node/freeGameInfo");
          if (freeGameTip) {
            var usdTimes = cc.find("freeGameTimes", freeGameTip);
            var last = cc.find("theme113_fg_last", freeGameTip);
            if (rest > 0) {
              last.active = false;
              usdTimes.active = true;
              usdTimes.getComponent(cc.Label).string = rest;
            } else {
              last.active = true;
              usdTimes.active = false;
            }
          }
        }
        var PrizePoolRoot = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
        if (PrizePoolRoot) for (var i = 0; i < jackpotNames.length; i++) {
          var prizeName = jackpotNames[i];
          var targetJpNode = cc.find("prizePool_" + prizeName, PrizePoolRoot);
          if (targetJpNode) {
            var winRoot = targetJpNode.getChildByName("winRoot");
            var lbl_num = targetJpNode.getChildByName("lbl_num");
            winRoot.active = false;
            lbl_num.active = true;
          }
        }
      },
      showJackpotWinEffect: function showJackpotWinEffect(index) {
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        if (jpNode) {
          var element = jackpotNames[index];
          var targetJpNode = cc.find("prizePool_" + element, jpNode.node.parent);
          if (targetJpNode) {
            var winRoot = targetJpNode.getChildByName("winRoot");
            var lbl_num = targetJpNode.getChildByName("lbl_num");
            if (winRoot) {
              winRoot.active = true;
              lbl_num.active = false;
            }
          }
        }
      },
      showQiePin: function showQiePin(midCallBack, finalCallBack) {
        var _this2 = this;
        if (this._qiePin && !this._qiePin.active) {
          this._qiePin.active = true;
          var mask = cc.find("mask", this._qiePin);
          mask.height = 0;
          mask.opacity = 255;
          var lizi1 = cc.find("bg/CutTheScreen_lizi01_1", mask);
          lizi1.active = true;
          var lizi2 = cc.find("bg/CutTheScreen_lizi02_1", mask);
          lizi2.active = true;
          var lizi3 = cc.find("CutTheScreen_lizi03_1", this._qiePin);
          lizi3.active = true;
          lizi3.y = cc.winSize.height / 2;
          var qieping_di = cc.find("bg/qieping_di02", mask);
          qieping_di.y = cc.winSize.height / 2;
          var qiepinTime = 1.2;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition);
          cc.tween(mask).to(qiepinTime, {
            height: cc.winSize.height
          }).call(function() {
            lizi1.active = false;
            lizi2.active = false;
            lizi3.active = false;
            midCallBack && midCallBack();
          }).to(.5, {
            opacity: 0
          }).call(function() {
            _this2._qiePin.active = false;
            finalCallBack && finalCallBack();
          }).start();
          cc.tween(qieping_di).to(qiepinTime, {
            y: -cc.winSize.height / 2
          }).start();
          cc.tween(lizi3).to(qiepinTime, {
            y: -cc.winSize.height / 2
          }).call(function() {
            lizi3.y = cc.winSize.height / 2;
          }).start();
        }
      },
      showFreeGame: function showFreeGame() {
        var _this3 = this;
        var freePickGame = {
          pick: [ {
            state: false,
            idx: 1
          }, {
            state: false,
            idx: 2
          }, {
            state: false,
            idx: 3
          }, {
            state: false,
            idx: 4
          }, {
            state: false,
            idx: 5
          }, {
            state: false,
            idx: 6
          }, {
            state: false,
            idx: 7
          }, {
            state: false,
            idx: 8
          }, {
            state: false,
            idx: 9
          }, {
            state: false,
            idx: 10
          }, {
            state: false,
            idx: 11
          }, {
            state: false,
            idx: 12
          }, {
            state: false,
            idx: 13
          }, {
            state: false,
            idx: 14
          }, {
            state: false,
            idx: 15
          }, {
            state: false,
            idx: 16
          }, {
            state: false,
            idx: 17
          }, {
            state: false,
            idx: 18
          }, {
            state: false,
            idx: 19
          }, {
            state: false,
            idx: 20
          } ],
          info: [ {
            max: 3,
            type: 1,
            num: 0,
            desc: "F5M2"
          }, {
            max: 3,
            type: 2,
            num: 0,
            desc: "F7M2"
          }, {
            max: 3,
            type: 3,
            num: 0,
            desc: "F10M2"
          }, {
            max: 3,
            type: 4,
            num: 0,
            desc: "F11M2"
          }, {
            max: 3,
            type: 5,
            num: 0,
            desc: "F15M20"
          }, {
            max: 3,
            type: 6,
            num: 0,
            desc: "F20M3"
          } ],
          result: []
        };
        return new Promise(function(success, failed) {
          _this3.showQiePin(function() {
            _this3.recaveryFreeGame(freePickGame, success);
          }, function() {
            Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.frame_bgm);
          });
        });
      },
      recaveryFreeGame: function recaveryFreeGame(data, success) {
        this._node_freeGame.active = true;
        var pickNode = this._node_freeGame.getComponent("Jormengander_pick");
        pickNode.initData(success, data);
      },
      hideFreeGame: function hideFreeGame(midCallBack) {
        var _this4 = this;
        return new Promise(function(sucess, falied) {
          _this4.showQiePin(function() {
            _this4._node_freeGame.active = false;
            midCallBack && midCallBack();
            Global.SlotsSoundMgr.stopBgm();
            Global.SlotsSoundMgr.playingBgm = false;
          }, function() {
            sucess();
          });
        });
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this5 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this5.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

               case 1:
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
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var total, rest, rapidPayWinCoin, i, key, symbol, index, PrizePoolRoot, element, targetJpNode, PrizePool, _rapidPayWinCoin, _i, _key, _symbol, freeGameTip, winCoin, _nTotal, nWin, nTotal, _i2, _key2, _symbol2, _nWin, _nTotal2, _i3, _key3, _symbol3;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (!_this6._gameInfo.rapidPayData) {
                _context2.next = 23;
                break;
              }
              rapidPayWinCoin = _this6._gameInfo.rapidPayData.win;
              if (rapidPayWinCoin > 0) for (i = 0; i < _this6._gameInfo.rapidPayData.idxs.length; i++) {
                key = _this6._gameInfo.rapidPayData.idxs[i];
                symbol = _this6.GetSymbolByIdx(Number(key));
                symbol && symbol.playWinAnimation();
              }
              if (total > 0 && total != rest) {
                _context2.next = 23;
                break;
              }
              if (!(_this6._gameInfo.rapidPayData.idxs.length >= 5)) {
                _context2.next = 23;
                break;
              }
              index = _this6._gameInfo.rapidPayData.idxs.length - 5;
              index >= 3 && index++;
              6 === index && (index = 3);
              PrizePoolRoot = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
              if (!PrizePoolRoot) {
                _context2.next = 23;
                break;
              }
              element = jackpotNames[index];
              targetJpNode = cc.find("prizePool_" + element, PrizePoolRoot);
              PrizePool = targetJpNode.getComponent("LMSlotMachine_PrizePool");
              if (PrizePool.isLocked()) {
                _context2.next = 23;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell_fg);
              _context2.next = 20;
              return _this6.awaitTime(1);

             case 20:
              _this6.showJackpotWinEffect(index);
              _context2.next = 23;
              return cc.vv.gameData.getPopWinManage().showWinJackpot(rapidPayWinCoin, _this6._gameInfo.rapidPayData.idxs.length);

             case 23:
              if (_this6._gameInfo.rapidPlatinumData) {
                _rapidPayWinCoin = _this6._gameInfo.rapidPlatinumData.win;
                if (_rapidPayWinCoin > 0) for (_i = 0; _i < _this6._gameInfo.rapidPlatinumData.idxs.length; _i++) {
                  _key = _this6._gameInfo.rapidPlatinumData.idxs[_i];
                  _symbol = _this6.GetSymbolByIdx(Number(_key));
                  _symbol && _symbol.playWinAnimation();
                }
              }
              if (total > 0 && total != rest) {
                freeGameTip = cc.find("Canvas/safe_node/freeGameInfo");
                if (freeGameTip) {
                  winCoin = cc.find("winCoin", freeGameTip);
                  _nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  winCoin.getComponent(cc.Label).string = _nTotal > 0 ? cc.vv.gameData.getPopWinManage().specialFormatNumToComma(_nTotal, 99999) : "";
                }
              }
              _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) nTotal = cc.vv.gameData.GetGameTotalFreeWin(); else if (_this6._gameInfo.freeGameBonus && !_this6._gameInfo.freeGameBonus.isEnd) {
                nWin = _this6._gameInfo.freeGameBonus.winCoin;
                nTotal = nWin;
              }
              _context2.next = 31;
              return _this6.ShowWinCoin(nWin, nTotal, true);

             case 31:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context2.next = 43;
                break;
              }
              if (!_this6._gameInfo.freeResult) {
                _context2.next = 41;
                break;
              }
              if (!(_this6._gameInfo.freeResult.freeInfo && _this6._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context2.next = 41;
                break;
              }
              for (_i2 = 0; _i2 < _this6._gameInfo.freeResult.freeInfo.scatterIdx.length; _i2++) {
                _key2 = _this6._gameInfo.freeResult.freeInfo.scatterIdx[_i2];
                _symbol2 = _this6.GetSymbolByIdx(Number(_key2));
                _symbol2 && _symbol2.playWinAnimation();
              }
              if (!(_this6._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 41;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell_fg);
              _context2.next = 39;
              return _this6.awaitTime(2);

             case 39:
              _context2.next = 41;
              return _this6.CheckFreeEnterFreeGame(_this6._gameInfo.freeResult.freeInfo.freeCnt);

             case 41:
              _context2.next = 76;
              break;

             case 43:
              if (!_this6._gameInfo.wheelInfo) {
                _context2.next = 76;
                break;
              }
              cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tips").active = false;
              cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tip_bonusSpine").active = true;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell_fg);
              _context2.next = 49;
              return _this6.awaitTime(2);

             case 49:
              _context2.next = 51;
              return cc.vv.gameData.getBottomPopWinManage().showBonusStart();

             case 51:
              _context2.next = 53;
              return _this6.awaitTime(.5);

             case 53:
              _context2.next = 55;
              return cc.vv.gameData.getPopWinManage().showWheelGame(_this6._gameInfo.wheelInfo.cfg);

             case 55:
              if (!("coin" === _this6._wheelResult.info.type)) {
                _context2.next = 68;
                break;
              }
              _context2.next = 58;
              return _this6.awaitTime(1);

             case 58:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.rollNum);
              _context2.next = 61;
              return cc.vv.gameData.getBottomPopWinManage().showWinCoin(_this6._wheelResult.info.num, true);

             case 61:
              _nWin = _this6._wheelResult.info.num;
              _nTotal2 = _nWin;
              cc.vv.gameData.AddCoin(_nWin);
              _context2.next = 66;
              return _this6.ShowWinCoin(_nWin, _nTotal2, true);

             case 66:
              _context2.next = 74;
              break;

             case 68:
              if (!("free" === _this6._wheelResult.info.type)) {
                _context2.next = 74;
                break;
              }
              _context2.next = 71;
              return _this6.showFreeGame();

             case 71:
              if (_this6._gameInfo.freeResult && _this6._gameInfo.freeResult.freeInfo && _this6._gameInfo.freeResult.freeInfo.scatterIdx) for (_i3 = 0; _i3 < _this6._gameInfo.freeResult.freeInfo.scatterIdx.length; _i3++) {
                _key3 = _this6._gameInfo.freeResult.freeInfo.scatterIdx[_i3];
                _symbol3 = _this6.GetSymbolByIdx(Number(_key3));
                _symbol3 && _symbol3.playWinAnimation();
              }
              _context2.next = 74;
              return _this6.CheckEnterFreeGame();

             case 74:
              cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tips").active = true;
              cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tip_bonusSpine").active = false;

             case 76:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context2.next = 79;
                break;
              }
              _context2.next = 79;
              return _this6.CheckExitFreeGame();

             case 79:
              _this6.CanDoNextRound();

             case 80:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var rest, select, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this7.ShowGameview(true);
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                _this7.CanDoNextRound();
              } else _this7.ShowGameview(false);
              select = cc.vv.gameData.getSelect();
              if (!select) {
                _context3.next = 41;
                break;
              }
              if (!select.state) {
                _context3.next = 41;
                break;
              }
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              if (!(1 === select.rtype)) {
                _context3.next = 29;
                break;
              }
              _context3.next = 9;
              return cc.vv.gameData.getPopWinManage().showWheelGame(cc.vv.gameData._deskInfo.wheelInfo.cfg);

             case 9:
              if (!("coin" === _this7._wheelResult.info.type)) {
                _context3.next = 22;
                break;
              }
              _context3.next = 12;
              return _this7.awaitTime(1);

             case 12:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.rollNum);
              _context3.next = 15;
              return cc.vv.gameData.getBottomPopWinManage().showWinCoin(_this7._wheelResult.info.num, true);

             case 15:
              nWin = _this7._wheelResult.info.num;
              nTotal = nWin;
              cc.vv.gameData.AddCoin(nWin);
              _context3.next = 20;
              return _this7.ShowWinCoin(nWin, nTotal, true);

             case 20:
              _context3.next = 27;
              break;

             case 22:
              if (!("free" === _this7._wheelResult.info.type)) {
                _context3.next = 27;
                break;
              }
              _context3.next = 25;
              return _this7.showFreeGame();

             case 25:
              _context3.next = 27;
              return _this7.CheckEnterFreeGame();

             case 27:
              _context3.next = 41;
              break;

             case 29:
              if (!(2 === select.rtype)) {
                _context3.next = 36;
                break;
              }
              _context3.next = 32;
              return new Promise(function(sucess, failed) {
                _this7.recaveryFreeGame(cc.vv.gameData._deskInfo.freePickGame, sucess);
              });

             case 32:
              _context3.next = 34;
              return _this7.CheckEnterFreeGame();

             case 34:
              _context3.next = 41;
              break;

             case 36:
              if (!(3 === select.rtype)) {
                _context3.next = 41;
                break;
              }
              _context3.next = 39;
              return new Promise(function(sucess, failed) {
                var pickNode = _this7._node_freeGame.getComponent("Jormengander_pick");
                pickNode.recavery(sucess);
              });

             case 39:
              _context3.next = 41;
              return _this7.CheckEnterFreeGame();

             case 41:
              _this7.CanDoNextRound();

             case 42:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.frame1);
                      _context4.next = 5;
                      return cc.vv.gameData.getBottomPopWinManage().showWinCoin(nWin);

                     case 5:
                      _context4.next = 7;
                      return new Promise(function(suc, fail) {
                        _this8.showQiePin(function() {
                          _this8.ShowGameview(false);
                          _this8.Resume();
                        }, function() {
                          suc();
                          Global.SlotsSoundMgr.stopBgm();
                          Global.SlotsSoundMgr.playingBgm = false;
                        });
                      });

                     case 7:
                      _context4.next = 9;
                      return _this8.ShowWinCoin(nWin, nTotal, true);

                     case 9:
                      cc.vv.gameData.SetTotalFree(0);
                      sucess();

                     case 11:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame(num) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return cc.vv.gameData.getBottomPopWinManage().showFreeWinFree(num);

                     case 2:
                      _context6.next = 4;
                      return _this9.awaitTime(1);

                     case 4:
                      sucess();

                     case 5:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  var i, reel, j, symbol;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _context8.next = 2;
                      return _this10.hideFreeGame(function() {
                        _this10.ShowGameview(true);
                      });

                     case 2:
                      _this10.Backup();
                      for (i = 0; i < _this10._reels.length; i++) {
                        reel = _this10._reels[i];
                        for (j = 0; j < reel._symbols.length; j++) {
                          symbol = reel._symbols[j];
                          symbol.ShowNormal();
                        }
                      }
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                      _context8.next = 7;
                      return _this10.awaitTime(1);

                     case 7:
                      sucess();

                     case 8:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._isInFree = bFree;
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin() + this._bottomScript.getCurrentWin();
          this._bottomScript.SetWin(nTotal);
          var _freeGameTip = cc.find("Canvas/safe_node/freeGameInfo");
          if (_freeGameTip) {
            var usdTimes = cc.find("freeGameTimes", _freeGameTip);
            var last = cc.find("theme113_fg_last", _freeGameTip);
            var winCoin = cc.find("winCoin", _freeGameTip);
            winCoin.getComponent(cc.Label).string = nTotal > 0 ? cc.vv.gameData.getPopWinManage().specialFormatNumToComma(nTotal, 99999) : "";
            if (rest > 0) {
              last.active = false;
              usdTimes.active = true;
              usdTimes.getComponent(cc.Label).string = rest;
            } else {
              last.active = true;
              usdTimes.active = false;
            }
            var mult = cc.vv.gameData.GetFreeGameMult();
            if (2 === mult) {
              cc.find("theme113_fg_allpays/theme113_fg_num3", _freeGameTip).active = false;
              cc.find("theme113_fg_allpays/theme113_fg_num2", _freeGameTip).active = true;
            } else {
              cc.find("theme113_fg_allpays/theme113_fg_num3", _freeGameTip).active = true;
              cc.find("theme113_fg_allpays/theme113_fg_num2", _freeGameTip).active = false;
            }
          }
        } else this._bottomScript.ShowFreeModel(false);
        var freeGameTip = cc.find("Canvas/safe_node/freeGameInfo");
        freeGameTip && (freeGameTip.active = bFree);
        var jackpotPool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
        jackpotPool && (jackpotPool.active = !bFree);
      },
      Backup: function Backup() {
        this._super();
        this._isBackUp = true;
      },
      Resume: function Resume() {
        if (this._isBackUp) {
          this._topAniNode.removeAllChildren();
          this._isBackUp = false;
        }
        this._super();
      },
      showTips: function showTips() {
        this._tipsIndex > 1 && (this._tipsIndex = 0);
        var tips = [];
        tips[tips.length] = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tips/tip_1");
        tips[tips.length] = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tips/tip_2");
        for (var i = 0; i < tips.length; i++) {
          var element = tips[i];
          element.active = false;
        }
        var effect = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/tips/base_QH");
        effect.active = true;
        var effectSp = effect.getComponent(sp.Skeleton);
        effectSp.setAnimation(0, "animation", false);
        effectSp.setCompleteListener(function() {
          effect.active = false;
          effectSp.setCompleteListener(null);
        });
        tips[this._tipsIndex].active = true;
        tips[this._tipsIndex].scale = .1;
        cc.tween(tips[this._tipsIndex]).to(.2, {
          scale: 1.3
        }).to(.2, {
          scale: 1
        }).start();
        this._tipsIndex++;
      },
      onRecvClickButton: function onRecvClickButton(msg) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var pickNode, _pickNode;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (!(200 == msg.code)) {
                _context10.next = 8;
                break;
              }
              if (!(1 == msg.data.rtype)) {
                _context10.next = 7;
                break;
              }
              _this11._wheelResult = msg.data;
              _context10.next = 5;
              return cc.vv.gameData.getPopWinManage().setWheelResult(msg.data);

             case 5:
              _context10.next = 8;
              break;

             case 7:
              if (2 == msg.data.rtype) {
                if (msg.data.idx) {
                  pickNode = _this11._node_freeGame.getComponent("Jormengander_pick");
                  pickNode.click(msg.data);
                }
              } else if (3 == msg.data.rtype) {
                _pickNode = _this11._node_freeGame.getComponent("Jormengander_pick");
                _pickNode.startFreeGame(msg.data);
              }

             case 8:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._topScript.StopMove();
        this._bottomScript.CanDoNextRound();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Jormengander_pick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29397QYh/1MZbLT7ac+8Vq0", "Jormengander_pick");
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
        _buttonList: [],
        _pickEffectList: [],
        _success: null,
        _jinduList: [],
        _clickButton: false
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 21; i++) {
          var button = cc.find("waysRoot/pickBg/button" + i, this.node);
          this._buttonList[this._buttonList.length] = button;
          Global.btnClickEvent(button, this.onButtonClick.bind(this, i), this);
        }
        for (var _i = 1; _i < 21; _i++) {
          var pickeffect = cc.find("waysRoot/pickBg/pick_effect" + _i, this.node);
          this._pickEffectList[this._pickEffectList.length] = pickeffect;
        }
        for (var _i2 = 1; _i2 < 7; _i2++) {
          var jindu = cc.find("jinduRoot/jindu" + _i2, this.node);
          this._jinduList[this._jinduList.length] = jindu;
        }
      },
      start: function start() {},
      transformType: function transformType(type) {
        var ret = [ 5, 4, 3, 2, 1, 0, 9 ];
        return ret[type - 1];
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      changeNodeColor: function changeNodeColor(node, color) {
        node.color = color;
        for (var i = 0; i < node.children.length; i++) {
          var element = node.children[i];
          element.color = color;
        }
      },
      initData: function initData(success, data) {
        this._success = success;
        for (var i = 0; i < data.pick.length; i++) {
          var element = data.pick[i];
          if (element.state) {
            this._buttonList[i].getComponent(cc.Button).interactable = false;
            this.setButtonResult(this._buttonList[i], element.type);
          } else {
            this._buttonList[i].getComponent(cc.Button).interactable = true;
            cc.find("result", this._buttonList[i]).active = false;
          }
          this.changeNodeColor(cc.find("result", this._buttonList[i]), cc.color(255, 255, 255));
          var win = cc.find("win", this._buttonList[i]);
          win.active = false;
        }
        for (var _i3 = 0; _i3 < data.info.length; _i3++) {
          var _element = data.info[_i3];
          this.setJinDu(this._jinduList[_element.type - 1], _element.num);
        }
        for (var _i4 = 0; _i4 < this._pickEffectList.length; _i4++) {
          var _element2 = this._pickEffectList[_i4];
          _element2.active = false;
        }
        this._clickButton = false;
      },
      recavery: function recavery(success) {
        this._success = success;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 3;
        cc.vv.NetManager.send(req);
      },
      setButtonResult: function setButtonResult(button, type) {
        var result = cc.find("result", button);
        result.active = true;
        for (var i = 0; i < result.children.length; i++) {
          var element = result.children[i];
          element.active = false;
        }
        var trueType = this.transformType(type);
        cc.find("theme113_pick_" + trueType, result).active = true;
      },
      setJinDu: function setJinDu(node, val) {
        var jindu = cc.find("jindu", node);
        var jindu1 = cc.find("jindu1", jindu);
        var jindu2 = cc.find("jindu2", jindu);
        var barMask = cc.find("barMask", node);
        var jindutiao = cc.find("jindu2/jindutiao_02", node);
        switch (val) {
         case 1:
          barMask.width = jindu1.x;
          jindutiao.x = jindu1.x;
          break;

         case 2:
          barMask.width = jindu2.x;
          jindutiao.x = jindu2.x;
          break;

         case 3:
          barMask.width = jindu.width;
          jindutiao.x = jindu.width;
          break;

         default:
          barMask.width = 0;
          jindutiao.x = 0;
        }
      },
      changeJinDu: function changeJinDu(node, val) {
        var jindu = cc.find("jindu", node);
        var jindu1 = cc.find("jindu1", jindu);
        var jindu2 = cc.find("jindu2", jindu);
        var barMask = cc.find("barMask", node);
        var jindutiao = cc.find("jindu2/jindutiao_02", node);
        switch (val) {
         case 1:
          cc.tween(barMask).to(.2, {
            width: jindu1.x
          }).start();
          cc.tween(jindutiao).to(.2, {
            x: jindu1.x
          }).start();
          break;

         case 2:
          cc.tween(barMask).to(.2, {
            width: jindu2.x
          }).start();
          cc.tween(jindutiao).to(.2, {
            x: jindu2.x
          }).start();
          break;

         case 3:
          cc.tween(barMask).to(.2, {
            width: jindu.width
          }).start();
          cc.tween(jindutiao).to(.2, {
            x: jindu.width
          }).call(function() {
            var fullEffect = cc.find("fullEffect", node);
            fullEffect.active = true;
            var fullEffectSp = fullEffect.getComponent(sp.Skeleton);
            fullEffectSp.setAnimation(0, "animation", false);
            fullEffectSp.setCompleteListener(function() {
              fullEffect.active = false;
              fullEffectSp.setCompleteListener(null);
            });
          }).start();
          break;

         default:
          barMask.width = 0;
          jindutiao.x = 0;
        }
      },
      removeByVal: function removeByVal(val) {
        for (var i = 0; i < this._typeList.length; i++) {
          var element = this._typeList[i];
          if (element === val) {
            this._typeList.splice(i, 1);
            break;
          }
        }
      },
      onButtonClick: function onButtonClick(index) {
        if (this._clickButton) return;
        this._clickButton = true;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.idx = index;
        cc.vv.NetManager.send(req);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click2);
      },
      click: function click(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var index, type, effectSp;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._clickButton = false;
              index = data.idx - 1;
              type = _this2.transformType(data.type);
              _this2._buttonList[index].getComponent(cc.Button).interactable = false;
              _this2._pickEffectList[index].active = true;
              effectSp = _this2._pickEffectList[index].getComponent(sp.Skeleton);
              effectSp.setAnimation(0, "animation_" + type, false);
              effectSp.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var i, element, _i5, _element3, req;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    effectSp.setCompleteListener(null);
                    for (i = 0; i < data.topInfo.length; i++) {
                      element = data.topInfo[i];
                      _this2.changeJinDu(_this2._jinduList[element.type - 1], element.num);
                    }
                    if (!(3 === data.select.rtype)) {
                      _context.next = 16;
                      break;
                    }
                    for (_i5 = 0; _i5 < _this2._buttonList.length; _i5++) {
                      _element3 = _this2._buttonList[_i5];
                      _element3.getComponent(cc.Button).interactable = false;
                    }
                    _this2.showWinNode(data.type, data.pick);
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.threesame);
                    _context.next = 8;
                    return _this2.awaitTime(3.5);

                   case 8:
                    _context.next = 10;
                    return cc.vv.gameData.getPopWinManage().showFreeGameTimes(data.result.num, data.result.mult);

                   case 10:
                    req = {
                      c: MsgId.SLOT_SUBGAME_DATA
                    };
                    req.uid = Global.playerData.uid;
                    req.gameid = cc.vv.gameData._gameId;
                    req.data = {};
                    req.data.rtype = 3;
                    cc.vv.NetManager.send(req);

                   case 16:
                   case "end":
                    return _context.stop();
                  }
                }, _callee);
              })));

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      startFreeGame: function startFreeGame(data) {
        cc.vv.gameData.SetFreeTime(data.allFreeCnt);
        cc.vv.gameData.SetTotalFree(data.freeCnt);
        cc.vv.gameData.SetFreeGameMult(data.addMult);
        this._success && this._success();
      },
      showWinNode: function showWinNode(type, pick) {
        for (var i = 0; i < pick.length; i++) {
          var element = pick[i];
          if (element.state) {
            if (element.type === type || 7 === element.type) {
              var win = cc.find("win", this._buttonList[i]);
              win.active = true;
            }
          } else {
            this.setButtonResult(this._buttonList[i], element.type);
            this.changeNodeColor(cc.find("result", this._buttonList[i]), cc.color(60, 60, 60));
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Jormengander_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e2f1GaGOpASaTYwGRWwJ+Q", "Jormengander_reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      start: function start() {},
      ShowScatterEffect: function ShowScatterEffect() {
        var node = cc.find("mask/scatterAni", this.node);
        if (node) {
          node.active = true;
          var nodeSp = node.getComponent(sp.Skeleton);
          nodeSp.setAnimation(0, "animation", false);
          nodeSp.setCompleteListener(function() {
            node.active = false;
          });
        } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/scatterAni");
      },
      playReelStop: function playReelStop() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Jormengander_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d53d4Syi3FDXpXPnqaW8TG+", "Jormengander_sound");
    "use strict";
    var _properties;
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
      extends: require("LMSlots_Sound"),
      properties: (_properties = {
        soundPath: {
          default: "games/Jormengander/",
          override: true
        },
        bonus_stop: {
          default: "",
          override: true
        },
        scatter_ant: {
          default: "",
          override: true
        },
        bonus_ant: {
          default: "",
          override: true
        },
        base_bgm: {
          default: "base/base_bgm",
          override: true
        },
        reel_stop: {
          default: "base/reel_stop",
          override: true
        },
        scatter_stop: {
          default: "base/symbol_rapidpay",
          override: true
        },
        bell_fg: "base/bell_fg",
        click1: "base/click1",
        frame_bgm: "base/frame_bgm",
        frame1: "base/frame1",
        frame2: "base/frame2",
        frame3: "base/frame3",
        reel_notify: "base/reel_notify"
      }, _defineProperty(_properties, "reel_stop", "base/reel_stop"), _defineProperty(_properties, "rollNum", "base/rollNum"), 
      _defineProperty(_properties, "symbol_rapidpay", "base/symbol_rapidpay"), _defineProperty(_properties, "symbol_wheel", "base/symbol_wheel"), 
      _defineProperty(_properties, "transition", "base/transition"), _defineProperty(_properties, "unlock", "base/unlock"), 
      _defineProperty(_properties, "wheel_move1", "bonus/wheel_move1"), _defineProperty(_properties, "wheel_move2", "bonus/wheel_move2"), 
      _defineProperty(_properties, "wheel_spin", "bonus/wheel_spin"), _defineProperty(_properties, "wheel_stop", "bonus/wheel_stop"), 
      _defineProperty(_properties, "threesame", "free/3same"), _defineProperty(_properties, "click2", "free/click2"), 
      _defineProperty(_properties, "free_bgm", "free/free_bgm"), _properties)
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  Jormengander_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3093baH2BhBvKCTdxCpRHe9", "Jormengander_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Jormengander_Bottom", "Jormengander_BottomPop", "Jormengander_Cfg", "Jormengander_GameData", "Jormengander_Logic", "Jormengander_Pop", "Jormengander_PrizePool", "Jormengander_Slots", "Jormengander_pick", "Jormengander_reel", "Jormengander_sound", "Jormengander_symbol" ]);