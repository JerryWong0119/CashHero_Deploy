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
  Prometheus_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8da18kMNexGE4JpnM91Xv8O", "Prometheus_BonusGame");
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
    var Prometheus_Tools = require("./Prometheus_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _spinePick: cc.Node,
        _freeGameEnd: cc.Node,
        _chooseNode: cc.Node,
        _bonusGame: null,
        _isShowJpNode: false
      },
      onLoad: function onLoad() {},
      start: function start() {},
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      Init: function Init() {
        var _this = this;
        var self = this;
        var gameData = cc.vv.gameData;
        this._spinePick = cc.find("spinePick", this.node);
        this._bonusGameEnd = cc.find("bonusGameEnd", this.node);
        this._chooseNode = cc.find("chooseNode", this.node);
        this._jpWin = cc.find("jpWin", this._chooseNode);
        this._jpWin.active = false;
        var startBtn = cc.find("startBtn", this._spinePick);
        var startFunc = function startFunc() {
          Global.SlotsSoundMgr.playEffect("botton");
          Prometheus_Tools.nodeAni(_this._spinePick, 3, function() {
            var pig3 = cc.find("pig3", _this.node);
            pig3.active = true;
            pig3.getComponent(sp.Skeleton).setAnimation(0, "Tpig_luoxia_tiao", false);
            pig3.getComponent(sp.Skeleton).addAnimation(0, "JinBiZaZhu", false);
            Global.SlotsSoundMgr.playEffect("5pigUp");
            pig3.getComponent(sp.Skeleton).setCompleteListener(function(trackEntry, loopCount) {
              var name = trackEntry.animation ? trackEntry.animation.name : "";
              Global.SlotsSoundMgr.playEffect("GpigJump");
              if ("JinBiZaZhu" === name) {
                self.updateUi();
                cc.vv.gameData.GetSlotsScript().showJpNode(false);
                self._chooseNode.active = true;
                for (var index = 1; index < 6; index++) {
                  var pigNode = cc.find("pig1_" + index, _this._chooseNode);
                  pigNode.scale = 0;
                  cc.tween(pigNode).to(.3, {
                    scale: 1
                  }).start();
                }
                _this.numAni();
                Global.SlotsSoundMgr.playBgm("bgbgm");
              }
            });
          });
        };
        Global.btnClickEvent(startBtn, function() {
          startBtn.stopAllActions();
          startFunc();
        }, this);
        var endBtn = cc.find("startBtn", this._bonusGameEnd);
        var endFunc = function endFunc() {
          Global.SlotsSoundMgr.playEffect("collect");
          Prometheus_Tools.nodeAni(_this._bonusGameEnd, 3, function() {
            self.node.active = false;
            cc.vv.gameData.GetSlotsScript().showJpNode(true);
            cc.vv.gameData.GetSlotsScript().exitBonusGame(_this._allBonusGameWin);
          });
        };
        Global.btnClickEvent(endBtn, function() {
          endBtn.stopAllActions();
          endFunc();
        }, this);
        var jpBtn = cc.find("startBtn", this._jpWin);
        var jpFunc = function jpFunc() {
          Global.SlotsSoundMgr.playEffect("collect");
          Prometheus_Tools.nodeAni(_this._jpWin, 3, function() {
            self._isShowJpNode = false;
            0 === self._bonusGame.restCnt && cc.tween(cc.vv.gameData.GetSlotsNode()).delay(2).call(function() {
              self.closeBonusGame();
            }).start();
          });
        };
        Global.btnClickEvent(jpBtn, function() {
          jpBtn.stopAllActions();
          jpFunc();
        }, this);
      },
      updateUi: function updateUi() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var iterator = _step.value;
            "bg" != iterator.name && (iterator.active = false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      updateChooseNodeUi: function updateChooseNodeUi() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var self, num, _loop, index;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              self = _this2;
              num = cc.find("bgCountBoard/num", _this2._chooseNode);
              num.getComponent("ImgSwitchCmp").setIndex(0);
              cc.find("jackNode/Grand/prizePool_Grand/lbl_num", _this2._chooseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this2._bonusGame.jackpotValues[4]);
              cc.find("jackNode/Maxi/prizePool_Maxi/lbl_num", _this2._chooseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this2._bonusGame.jackpotValues[3]);
              cc.find("jackNode/Major/prizePool_Major/lbl_num", _this2._chooseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this2._bonusGame.jackpotValues[2]);
              cc.find("jackNode/Minor/prizePool_Minor/lbl_num", _this2._chooseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this2._bonusGame.jackpotValues[1]);
              cc.find("jackNode/Mini/prizePool_Mini/lbl_num", _this2._chooseNode).getComponent(cc.Label).string = Global.FormatNumToComma(_this2._bonusGame.jackpotValues[0]);
              _loop = function _loop(index) {
                var pigNode = cc.find("pig1_" + index, _this2._chooseNode);
                var spine = cc.find("spine", pigNode).getComponent(sp.Skeleton);
                pigNode.isOpen = _this2._bonusGame.items[index - 1].isOpen;
                pigNode.index = index;
                cc.find("jpNode", pigNode).active = false;
                cc.find("coinNum", pigNode).active = false;
                if (_this2._bonusGame.items[index - 1].coin) {
                  pigNode.type = "coin";
                  pigNode.coinNum = _this2._bonusGame.items[index - 1].coin;
                  cc.find("coinNum", pigNode).getComponent(cc.Label).string = Global.formatNumShort(_this2._bonusGame.items[index - 1].coin);
                  _this2._bonusGame.items[index - 1].coin >= 5 * cc.vv.gameData.GetTotalBet() ? cc.find("coinNum", pigNode).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("coinNum") : cc.find("coinNum", pigNode).getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("coinNumP");
                } else {
                  pigNode.type = "jp";
                  var _iterator2 = _createForOfIteratorHelper(cc.find("jpNode", pigNode).children), _step2;
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
                  pigNode.coinNum = _this2._bonusGame.items[index - 1].jackpot.value;
                  pigNode.jpId = _this2._bonusGame.items[index - 1].jackpot.id;
                  cc.find("jpNode/" + _this2._bonusGame.items[index - 1].jackpot.id, pigNode).active = true;
                }
                if (_this2._bonusGame.items[index - 1].isOpen) {
                  spine.setAnimation(0, "Pig_boom", false);
                  _this2._bonusGame.items[index - 1].coin ? cc.find("coinNum", pigNode).active = true : cc.find("jpNode", pigNode).active = true;
                } else spine.setAnimation(0, "Pig_loop", false);
                pigNode.off("click");
                Global.btnClickEvent(pigNode, function() {
                  self.clickItemfunc(pigNode);
                }, _this2);
              };
              for (index = 1; index < 6; index++) _loop(index);

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var index = 1; index < 6; index++) {
          var pigNode = cc.find("pig1_" + index, this._chooseNode);
          !pigNode.isOpen && this._bonusGame.restCnt > 0 && list.push(pigNode);
        }
        if (list.length > 0) {
          var randomIdx = Global.random(0, list.length - 1);
          var _self = this;
          cc.vv.gameData.checkAutoPlay(list[randomIdx], function() {
            _self.clickItemfunc(list[randomIdx]);
          });
        }
      },
      clickItemfunc: function clickItemfunc(pigNode) {
        var _this3 = this;
        for (var index = 1; index < 6; index++) {
          var _pigNode = cc.find("pig1_" + index, this._chooseNode);
          _pigNode.stopAllActions();
        }
        var self = this;
        if (!pigNode.isOpen && this._bonusGame.restCnt > 0) {
          self.changePigBtn(false);
          "coin" == pigNode.type ? this._isShowJpNode = false : this._isShowJpNode = true;
          pigNode.isOpen = true;
          Global.SlotsSoundMgr.playEffect("pickGpig");
          this._bonusGame.restCnt -= 1;
          var spine = cc.find("spine", pigNode).getComponent(sp.Skeleton);
          spine.setAnimation(0, "Pig_boom", false);
          cc.tween(pigNode).delay(.8).call(function() {
            "coin" == pigNode.type ? cc.find("coinNum", pigNode).active = true : cc.find("jpNode", pigNode).active = true;
          }).delay(1).call(function() {
            if (true == cc.find("jpNode", pigNode).active) {
              Prometheus_Tools.nodeAni(self._jpWin, 1);
              cc.find("WinFrame/totalWinNum", self._jpWin).getComponent(cc.Label).string = Global.FormatNumToComma(pigNode.coinNum);
              var aniArr = [ "mini", "minor", "mijor", "maxi", "grand" ];
              var audioArr = [ "VO_MiniJP_EN", "VO_MinorJP_EN", "VO_MajorJP_EN", "VO_MaxiJP_EN", "VO_GrandJP_EN" ];
              Global.SlotsSoundMgr.playEffect(audioArr[pigNode.jpId - 1]);
              cc.find("jpSpine", self._jpWin).getComponent(sp.Skeleton).setAnimation(0, aniArr[pigNode.jpId - 1], true);
              var jpBtn = cc.find("startBtn", _this3._jpWin);
              var jpFunc = function jpFunc() {
                Global.SlotsSoundMgr.playEffect("collect");
                Prometheus_Tools.nodeAni(_this3._jpWin, 3, function() {
                  self._isShowJpNode = false;
                  0 === self._bonusGame.restCnt && cc.tween(cc.vv.gameData.GetSlotsNode()).delay(2).call(function() {
                    self.closeBonusGame();
                  }).start();
                });
              };
              cc.vv.gameData.checkAutoPlay(jpBtn, jpFunc);
            }
            self.changePigBtn(true);
            self.setAutoPlay();
          }).start();
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.gameid = cc.vv.gameData.getGameId();
          req.data = {};
          req.data.rtype = 1;
          req.data.choiceId = pigNode.index;
          cc.vv.NetManager.send(req, true);
          var haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
          var addCoin = pigNode.coinNum;
          cc.vv.gameData.AddCoin(addCoin);
          cc.vv.gameData.GetBottomScript().ShowWin(addCoin + haveWin, 3, haveWin, null, .3);
          cc.vv.gameData.GetTopScript().ShowCoin();
        }
      },
      openBonusGame: function openBonusGame(bonusGame) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var startBtn, startFunc;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              _this4.changePigBtn(false);
              _this4._bonusGame = bonusGame;
              _this4.updateUi();
              _this4.node.active = true;
              _this4._spinePick.active = true;
              cc.find("spine1", _this4._spinePick).getComponent(sp.Skeleton).setAnimation(0, "logo", true);
              Prometheus_Tools.nodeAni(_this4._spinePick, 1);
              Global.SlotsSoundMgr.playEffect("bgbegin");
              _this4.updateChooseNodeUi();
              startBtn = cc.find("startBtn", _this4._spinePick);
              startFunc = function startFunc() {
                Global.SlotsSoundMgr.playEffect("botton");
                Prometheus_Tools.nodeAni(_this4._spinePick, 3, function() {
                  var pig3 = cc.find("pig3", _this4.node);
                  pig3.active = true;
                  pig3.getComponent(sp.Skeleton).setAnimation(0, "Tpig_luoxia_tiao", false);
                  pig3.getComponent(sp.Skeleton).addAnimation(0, "JinBiZaZhu", false);
                  Global.SlotsSoundMgr.playEffect("5pigUp");
                  pig3.getComponent(sp.Skeleton).setCompleteListener(function(trackEntry, loopCount) {
                    var name = trackEntry.animation ? trackEntry.animation.name : "";
                    Global.SlotsSoundMgr.playEffect("GpigJump");
                    if ("JinBiZaZhu" === name) {
                      _this4.updateUi();
                      cc.vv.gameData.GetSlotsScript().showJpNode(false);
                      _this4._chooseNode.active = true;
                      for (var index = 1; index < 6; index++) {
                        var pigNode = cc.find("pig1_" + index, _this4._chooseNode);
                        pigNode.scale = 0;
                        cc.tween(pigNode).to(.3, {
                          scale: 1
                        }).start();
                      }
                      _this4.numAni();
                      Global.SlotsSoundMgr.playBgm("bgbgm");
                    }
                  });
                });
              };
              cc.vv.gameData.checkAutoPlay(startBtn, startFunc);

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      closeBonusGame: function closeBonusGame() {
        var _this5 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._chooseNode.active = false;
        Global.SlotsSoundMgr.playEffect("bgend");
        Prometheus_Tools.nodeAni(this._bonusGameEnd, 1);
        var totalNumNode = cc.find("WinFrame/totalWinNum", this._bonusGameEnd);
        var num1Node = cc.find("num1", this._bonusGameEnd);
        var num2Node = cc.find("num2", this._bonusGameEnd);
        var num1 = 0;
        var num2 = 0;
        var _iterator3 = _createForOfIteratorHelper(this._bonusGame.items), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var iterator = _step3.value;
            iterator.coin ? iterator.isOpen && (num1 += iterator.coin) : iterator.isOpen && (num2 += iterator.jackpot.value);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        totalNumNode.getComponent(cc.Label).string = Global.FormatNumToComma(num1 + num2);
        num1Node.getComponent(cc.Label).string = Global.FormatNumToComma(num1);
        num2Node.getComponent(cc.Label).string = Global.FormatNumToComma(num2);
        this._allBonusGameWin = num1 + num2;
        var endBtn = cc.find("startBtn", this._bonusGameEnd);
        var endFunc = function endFunc() {
          Global.SlotsSoundMgr.playEffect("collect");
          Prometheus_Tools.nodeAni(_this5._bonusGameEnd, 3, function() {
            _this5.node.active = false;
            cc.vv.gameData.GetSlotsScript().showJpNode(true);
            cc.vv.gameData.GetSlotsScript().exitBonusGame(_this5._allBonusGameWin);
          });
        };
        cc.vv.gameData.checkAutoPlay(endBtn, endFunc);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 != msg.code) return;
        var data = msg.data;
        var self = this;
        this._bonusGame = data.bonusGame;
        var num = cc.find("bgCountBoard/num", this._chooseNode);
        cc.find("bgCountBoard/spine", this._chooseNode).getComponent(sp.Skeleton).setAnimation(0, "BG_PicksLeft", false);
        num.getComponent("ImgSwitchCmp").setIndex(this._bonusGame.restCnt);
        Global.SlotsSoundMgr.playEffect("pickLeft");
        0 !== self._bonusGame.restCnt || this._isShowJpNode || cc.tween(cc.vv.gameData.GetSlotsNode()).delay(2).call(function() {
          self.closeBonusGame();
        }).start();
      },
      changePigBtn: function changePigBtn(canClick) {
        for (var index = 1; index < 6; index++) {
          var pigNode = cc.find("pig1_" + index, this._chooseNode);
          pigNode.getComponent(cc.Button).interactable = canClick;
        }
      },
      numAni: function numAni() {
        var _this6 = this;
        var self = this;
        var num = cc.find("bgCountBoard/num", this._chooseNode);
        num.getComponent("ImgSwitchCmp").setIndex(0);
        var _loop2 = function _loop2(index) {
          cc.tween(num).delay(.7 * index).call(function() {
            num.getComponent("ImgSwitchCmp").setIndex(index);
            cc.find("bgCountBoard/spine", _this6._chooseNode).getComponent(sp.Skeleton).setAnimation(0, "BG_PicksLeft", false);
            Global.SlotsSoundMgr.playEffect("pickLeft");
            if (_this6._bonusGame.restCnt === index) {
              self.changePigBtn(true);
              self.setAutoPlay();
            }
          }).start();
        };
        for (var index = 1; index <= this._bonusGame.restCnt; index++) _loop2(index);
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(sucess, failed) {
          _this7.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Prometheus_Tools": "Prometheus_Tools"
  } ],
  Prometheus_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54bbdABbXJJKJez+kfVbPsc", "Prometheus_ButtonSafe");
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
  Prometheus_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bf97toexJJCZi//JdbdFAa", "Prometheus_Cfg");
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
          name: "Wild",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "Scatter_02",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_01",
          zIndex: 300
        },
        win_ani: {
          name: "Scatter_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "collect",
          zIndex: 299
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        stop_ani: {
          name: "collect",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "H1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "H2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "H3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "H4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "H5",
          H2: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "H6",
          H3: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "a",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "j",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "k",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "q",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Prometheus_Slots",
        Reels: "Prometheus_Reel",
        Symbols: "Prometheus_Symbol"
      },
      col: 5,
      row: 3,
      realRow: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 125,
        height: 125
      },
      helpItems: [ "games/Prometheus/prefab/LMSlots_Help_item1", "games/Prometheus/prefab/LMSlots_Help_item2" ],
      autoModelDelay: 1,
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      commEffect: {
        path: "games/Prometheus/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ]
      },
      normalBgm: "ngbgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 8, 8, 8, 0 ],
        antiNode: "node_anti",
        path: "games/Prometheus/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Prometheus_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c76cj9plVAD6vtRvykgqZQ", "Prometheus_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _slotsNode: null,
        isBigStoreToFreeGame: false,
        isSmallStoreToFreeGame: false
      },
      SetPopNodeScript: function SetPopNodeScript(scp) {
        this._popupScp = scp;
      },
      GetPopNodeScript: function GetPopNodeScript(scp) {
        return this._popupScp;
      },
      SetSlotsNode: function SetSlotsNode(scp) {
        this._slotsNode = scp;
      },
      GetSlotsNode: function GetSlotsNode() {
        return this._slotsNode;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      SetJackpotUnlock: function SetJackpotUnlock(JackpotUnlock) {
        this.JackpotUnlock = JackpotUnlock;
      },
      GetJackpotUnlock: function GetJackpotUnlock() {
        return this.JackpotUnlock;
      },
      SetCollectInfos: function SetCollectInfos(CollectInfos) {
        this._collectInfos = CollectInfos;
      },
      GetCollectInfos: function GetCollectInfos() {
        return this._collectInfos;
      },
      SetCollectInfo: function SetCollectInfo(CollectInfo) {
        this._collectInfo = CollectInfo;
        var betIndex = this.GetBetIdx();
        this._collectInfos[betIndex - 1] = CollectInfo;
      },
      GetCollectInfo: function GetCollectInfo() {
        return this._collectInfo;
      },
      SetCollectState: function SetCollectState(state) {
        this._collectState = state;
      },
      GetCollectState: function GetCollectState() {
        return this._collectState;
      },
      SetFreeGameState: function SetFreeGameState(state) {
        this._freeGameState = state;
      },
      GetFreeGameState: function GetFreeGameState() {
        return this._freeGameState;
      },
      IdxToBet: function IdxToBet(idx) {
        return this._deskInfo.mults[idx];
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Prometheus_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d27dcPk3BIEbjmo0ElsY0U", "Prometheus_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var cfg = cc.vv.gameData.getGameCfg();
        cc.vv.gameData.SetSlotsNode(cc.vv.gameData.GetSlotsScript().node);
        var node_pop = cc.find("node_pop_ui", safe_node);
        var script_pop = node_pop.addComponent("Prometheus_Pop");
        script_pop.Init();
        cc.vv.gameData.SetPopNodeScript(script_pop);
        var node_bonus = cc.find("bonusGame", safe_node);
        var script_bonus = node_bonus.addComponent("Prometheus_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Prometheus_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bee18VmS2JI1oqD1y+V0C78", "Prometheus_Pop");
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
    var Prometheus_Tools = require("./Prometheus_Tools");
    cc.Class({
      extends: cc.Component,
      properties: {
        _node_free_Game: null,
        _node_extra_free: null,
        _node_free_end: null,
        _storeExtenLine: 0
      },
      Init: function Init() {
        var _this = this;
        this._node_free_Game = cc.find("freeGame", this.node);
        this._node_extra_free = cc.find("extraFreeGame", this.node);
        this._node_free_end = cc.find("freeGameEnd", this.node);
        var gameData = cc.vv.gameData;
        var slotsSrc = gameData.GetSlotsScript();
        var slotsNode = cc.vv.gameData.GetSlotsNode();
        var freeGameBtn = cc.find("startBtn", this._node_free_Game);
        var freeGameEndBtn = cc.find("startBtn", this._node_free_end);
        var func1 = function func1() {
          Global.SlotsSoundMgr.playEffect("botton");
          Prometheus_Tools.nodeAni(_this._node_free_Game, 3, function() {
            _this.node.active = false;
          });
          cc.tween(slotsNode).delay(1).call(function() {
            var totalFree = cc.vv.gameData.GetTotalFree();
            cc.vv.gameData.SetFreeTime(totalFree - 1);
            slotsSrc.ShowGameview(true);
            cc.find("Canvas/safe_node/guochang").active = true;
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setAnimation(0, "skill", false);
            Global.SlotsSoundMgr.playEffect("fgTrans");
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setCompleteListener(function(track) {
              cc.find("Canvas/safe_node/guochang").active = false;
            });
          }).delay(3).call(function() {
            slotsSrc.sendNextRound();
          }).start();
        };
        Global.btnClickEvent(freeGameBtn, function() {
          freeGameBtn.stopAllActions();
          func1();
        }, this);
        var func3 = function func3() {
          Global.SlotsSoundMgr.playEffect("botton");
          Prometheus_Tools.nodeAni(_this._node_free_end, 3, function() {
            _this.node.active = false;
          });
          cc.tween(slotsNode).delay(1).call(function() {
            slotsSrc.ShowGameview(false);
            cc.find("Canvas/safe_node/guochang").active = true;
            Global.SlotsSoundMgr.playEffect("fgTrans");
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setAnimation(0, "skill", false);
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setCompleteListener(function(track) {
              cc.find("Canvas/safe_node/guochang").active = false;
            });
          }).delay(3).call(function() {
            slotsSrc.CanDoNextRound();
          }).start();
        };
        Global.btnClickEvent(freeGameEndBtn, function() {
          freeGameEndBtn.stopAllActions();
          func3();
        }, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 != msg.code) return;
        var data = msg.data;
        var numArr = {
          1: 10,
          2: 8,
          3: 5,
          4: 3
        };
        var lineArr = {
          1: 4,
          2: 5,
          3: 6,
          4: 8
        };
        var index = data.choiceId;
        cc.vv.gameData.GetSlotsScript().extendLine(lineArr[index], .01);
        Prometheus_Tools.nodeAni(this._node_free_Game, 2);
      },
      updateUi: function updateUi() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var iterator = _step.value;
            console.log(iterator);
            "pop_bg" != iterator.name && (iterator.active = false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      goFreeGame: function goFreeGame(num) {
        var _this2 = this;
        var freeGameBtn = cc.find("startBtn", this._node_free_Game);
        var gameData = cc.vv.gameData;
        var slotsSrc = gameData.GetSlotsScript();
        var slotsNode = cc.vv.gameData.GetSlotsNode();
        this.updateUi();
        this.node.active = true;
        this._node_free_Game.active = true;
        cc.find("num2", this._node_free_Game).getComponent(cc.Label).string = num / 8;
        cc.find("num1", this._node_free_Game).getComponent(cc.Label).string = num;
        Prometheus_Tools.nodeAni(this._node_free_Game, 1);
        Global.SlotsSoundMgr.playEffect("fgbegin");
        cc.vv.gameData.checkAutoPlay(freeGameBtn, function() {
          Global.SlotsSoundMgr.playEffect("botton");
          Prometheus_Tools.nodeAni(_this2._node_free_Game, 3, function() {
            _this2.node.active = false;
          });
          cc.tween(slotsNode).delay(1).call(function() {
            var totalFree = cc.vv.gameData.GetTotalFree();
            cc.vv.gameData.SetFreeTime(totalFree - 1);
            slotsSrc.ShowGameview(true);
            cc.find("Canvas/safe_node/guochang").active = true;
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setAnimation(0, "skill", false);
            Global.SlotsSoundMgr.playEffect("fgTrans");
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setCompleteListener(function(track) {
              cc.find("Canvas/safe_node/guochang").active = false;
            });
          }).delay(3).call(function() {
            slotsSrc.sendNextRound();
          }).start();
        });
      },
      goExtraFreeGame: function goExtraFreeGame(num) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var gameData, slotsSrc, slotsNode, freeGameBtn, freeGameEndBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              gameData = cc.vv.gameData;
              slotsSrc = gameData.GetSlotsScript();
              slotsNode = cc.vv.gameData.GetSlotsNode();
              freeGameBtn = cc.find("startBtn", _this3._node_free_Game);
              freeGameEndBtn = cc.find("startBtn", _this3._node_free_end);
              _this3.updateUi();
              _this3.node.active = true;
              _this3._node_extra_free.active = true;
              cc.find("num2", _this3._node_extra_free).getComponent(cc.Label).string = num / 8;
              cc.find("num1", _this3._node_extra_free).getComponent(cc.Label).string = num;
              Prometheus_Tools.nodeAni(_this3._node_extra_free, 1);
              Global.SlotsSoundMgr.playEffect("fgbegin");
              _context.next = 14;
              return cc.vv.gameData.awaitTime(2.5);

             case 14:
              Global.SlotsSoundMgr.playEffect("botton");
              Prometheus_Tools.nodeAni(_this3._node_extra_free, 3, function() {
                _this3.node.active = false;
                slotsSrc.CanDoNextRound();
                slotsSrc.ShowGameview(true);
              });

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      goFreeGameEnd: function goFreeGameEnd(totalFreeTimes, freeWinCoin) {
        var _this4 = this;
        var slotsSrc = cc.vv.gameData.GetSlotsScript();
        var gameData = cc.vv.gameData;
        var slotsNode = cc.vv.gameData.GetSlotsNode();
        var freeGameBtn = cc.find("startBtn", this._node_free_Game);
        var extraFreeGameBtn = cc.find("startBtn", this._node_extra_free);
        var freeGameEndBtn = cc.find("startBtn", this._node_free_end);
        this.updateUi();
        this.node.active = true;
        this._node_free_end.active = true;
        cc.find("num1", this._node_free_end).getComponent(cc.Label).string = totalFreeTimes;
        cc.find("WinFrame/totalWinNum", this._node_free_end).getComponent(cc.Label).string = Global.FormatNumToComma(freeWinCoin);
        Prometheus_Tools.nodeAni(this._node_free_end, 1);
        Global.SlotsSoundMgr.playEffect("fgend");
        slotsSrc.Resume();
        cc.vv.gameData.GetSlotsScript().updateCollectPigUi();
        cc.vv.gameData.checkAutoPlay(freeGameEndBtn, function() {
          Global.SlotsSoundMgr.playEffect("botton");
          Prometheus_Tools.nodeAni(_this4._node_free_end, 3, function() {
            _this4.node.active = false;
          });
          cc.tween(slotsNode).delay(1).call(function() {
            slotsSrc.ShowGameview(false);
            cc.find("Canvas/safe_node/guochang").active = true;
            Global.SlotsSoundMgr.playEffect("fgTrans");
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setAnimation(0, "skill", false);
            cc.find("Canvas/safe_node/guochang/spine").getComponent(sp.Skeleton).setCompleteListener(function(track) {
              cc.find("Canvas/safe_node/guochang").active = false;
            });
          }).delay(3).call(function() {
            slotsSrc.CanDoNextRound();
          }).start();
        });
      },
      awaitTime: function awaitTime(time) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          _this5.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Prometheus_Tools": "Prometheus_Tools"
  } ],
  Prometheus_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d85cbX3fIVJ2qlSVWjVjR9r", "Prometheus_PrizePool");
    "use strict";
    var Prometheus_Tools = require("./Prometheus_Tools");
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {}
    });
    cc._RF.pop();
  }, {
    "./Prometheus_Tools": "Prometheus_Tools",
    LMSlots_PrizePool_Base: void 0
  } ],
  Prometheus_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "579ccF2eadEeJRGdTczcXkU", "Prometheus_Reel");
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
        this._super();
      },
      OnReelHeigtChange: function OnReelHeigtChange(nAddHeight) {
        this._super(nAddHeight);
        var gameData = cc.vv.gameData;
        var slotsNode = cc.vv.gameData.GetSlotsNode();
        if (1 == this._reelIdx) {
          var cfg = cc.vv.gameData.getGameCfg();
          var reels_frame = cc.find("Canvas/safe_node/slots/reels_frame");
          var frameUp = cc.find("frameUp", reels_frame);
          var frameLeft = cc.find("frameLeft", reels_frame);
          var frameRight = cc.find("frameRight", reels_frame);
          frameLeft.height += nAddHeight;
          frameRight.height += nAddHeight;
          for (var index = 1; index < 5; index++) cc.find("Canvas/safe_node/slots/reels_bg/role_line" + index).height += nAddHeight;
          frameUp.y += nAddHeight;
          var widget = cc.find("Canvas/safe_node/jackpot").getComponent(cc.Widget);
          var logo = cc.find("Canvas/safe_node/logo");
          widget.isAbsoluteBottom = false;
          if (cfg.row >= 6) {
            widget.bottom = .7;
            logo.active = false;
          }
          if (cfg.row < 6) {
            widget.bottom = .64;
            logo.active = true;
          }
          widget.updateAlignment();
          var _iterator = _createForOfIteratorHelper(cc.find("reels_frame/frameLeft/xianShu", slotsNode).children), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var iterator = _step.value;
              iterator.active = false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var _iterator2 = _createForOfIteratorHelper(cc.find("reels_frame/frameRight/xianShu", slotsNode).children), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _iterator3 = _step2.value;
              _iterator3.active = false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          cc.find("reels_frame/frameLeft/xianShu/sp" + cfg.row, slotsNode).active = true;
          cc.find("reels_frame/frameRight/xianShu/sp" + cfg.row, slotsNode).active = true;
        }
      },
      StartRecycleSymbol: function StartRecycleSymbol(nTime) {
        var cfg = cc.vv.gameData.getGameCfg();
        var localRow = cfg.row + 1;
        if (this._symbols.length > localRow) {
          var nCount = -(this._symbols.length - (cfg.row + 1));
          this.AddCount(nCount, nTime);
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator4 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step3;
            try {
              for (_iterator4.s(); !(_step3 = _iterator4.n()).done; ) {
                var info = _step3.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } else {
          var _node = cc.find("mask/" + name, this.node);
          var cfg = cc.vv.gameData.getGameCfg();
          var aniNameArr = {
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8"
          };
          var posArr = {
            3: 187.5,
            4: 250,
            5: 312.5,
            6: 375,
            7: 437.5,
            8: 500
          };
          var aniName = "animation" + aniNameArr[cfg.row];
          if (_node) {
            _node.getComponent(sp.Skeleton).setAnimation(0, aniName, true);
            _node.active = bShow;
            _node.y = posArr[cfg.row];
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Prometheus_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd951jxUiFLrLA523Qc/nIO", "Prometheus_Slots");
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
    var Prometheus_Tools = require("./Prometheus_Tools");
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _pigNum: 0
      },
      Init: function Init() {
        var cfg = cc.vv.gameData.getGameCfg();
        cfg.row = cfg.realRow;
        this._super();
      },
      onLoad: function onLoad() {
        this._super();
        cc.vv.gameData.SetFreeGameState(false);
      },
      StartMove: function StartMove() {
        var _this = this;
        this._super();
        0 == cc.vv.gameData.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
        var collectInfo = cc.vv.gameData.GetCollectInfo();
        var freeGameState = cc.vv.gameData.GetFreeGameState();
        if (collectInfo && 1 === collectInfo.state && !freeGameState) {
          collectInfo.count -= 1;
          var _loop = function _loop(index) {
            var pigNode = cc.find("reels_frame/frameUp/unLockNode/wood/pinkPig" + index, _this.node);
            var huoju = cc.find("huoju", pigNode);
            var pinkSpine = cc.find("pinkSpine", pigNode);
            if (index <= collectInfo.count) {
              if (1 != pigNode.state) {
                huoju.getComponent(sp.Skeleton).setAnimation(0, "fenTojin", false);
                huoju.getComponent(sp.Skeleton).addAnimation(0, "jin_idle", true);
                pigNode.state = 1;
              }
            } else if (0 != pigNode.state) {
              huoju.getComponent(sp.Skeleton).setAnimation(0, "jintofen", false);
              huoju.getComponent(sp.Skeleton).addAnimation(0, "fen_idle", true);
              pigNode.state = 0;
              pinkSpine.active = true;
              pinkSpine.getComponent(sp.Skeleton).setAnimation(0, "BG_PicksLeft", false);
              pinkSpine.getComponent(sp.Skeleton).setCompleteListener(function(trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : "";
                pinkSpine.active = false;
              });
            }
          };
          for (var index = 1; index < 8; index++) _loop(index);
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var GameData = cc.vv.gameData;
        var collectInfos = GameData.GetCollectInfos();
        var betIndex = GameData.GetBetIdx();
        GameData.SetCollectInfo(collectInfos[betIndex - 1]);
        this.updateCollectPigUi(true);
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var self, nWin, nTotal, rest, freeResult;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              self = _this2;
              cc.vv.gameData.SetCollectInfo(_this2._gameInfo.collectInfo);
              _context.next = 4;
              return _this2.moveCoinToPig();

             case 4:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context.next = 10;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 10:
              rest = cc.vv.gameData.GetFreeTime();
              _context.next = 13;
              return _this2.updateCollectPigUi();

             case 13:
              freeResult = self._gameInfo.freeResult;
              if (!(_this2._gameInfo.allFreeCnt > rest && freeResult.freeInfo.freeCnt > 0)) {
                _context.next = 19;
                break;
              }
              _context.next = 17;
              return _this2.enterDoubleFreeGame();

             case 17:
              _context.next = 37;
              break;

             case 19:
              if (!(freeResult.freeInfo && freeResult.freeInfo.freeCnt > 0)) {
                _context.next = 25;
                break;
              }
              cc.vv.gameData.SetFreeGameState(true);
              _context.next = 23;
              return _this2.CheckEnterFreeGame();

             case 23:
              _context.next = 37;
              break;

             case 25:
              if (!_this2._gameInfo.bonusGame) {
                _context.next = 30;
                break;
              }
              _context.next = 28;
              return _this2.CheckTriggerSubGame(_this2._gameInfo.bonusGame);

             case 28:
              _context.next = 37;
              break;

             case 30:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context.next = 36;
                break;
              }
              cc.vv.gameData.SetFreeGameState(false);
              _context.next = 34;
              return _this2.CheckExitFreeGame();

             case 34:
              _context.next = 37;
              break;

             case 36:
              _this2.CanDoNextRound();

             case 37:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      CheckTriggerSubGame: function CheckTriggerSubGame(bonusGame) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var pigIndex, key, element, symbol;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              pigIndex = 0;
              if (!(_this3._gameInfo && _this3._gameInfo.resultCards)) {
                _context2.next = 12;
                break;
              }
              _context2.t0 = regeneratorRuntime.keys(_this3._gameInfo.resultCards);

             case 3:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 11;
                break;
              }
              key = _context2.t1.value;
              element = _this3._gameInfo.resultCards[key];
              if (!(301 === element)) {
                _context2.next = 9;
                break;
              }
              pigIndex = Number(key) + 1;
              return _context2.abrupt("break", 11);

             case 9:
              _context2.next = 3;
              break;

             case 11:
              if (pigIndex) {
                symbol = _this3.GetSymbolByIdx(pigIndex);
                symbol && symbol.playStopAnimation();
              }

             case 12:
              Global.SlotsSoundMgr.playEffect("reelPumpkin");
              _context2.next = 15;
              return _this3.awaitTime(1);

             case 15:
              _this3.stopAllSymbolAni();
              cc.vv.gameData.GetBonusScript().openBonusGame(bonusGame);

             case 17:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var gameData, popNodeSrc, freeResult, _iterator, _step, id, symbol, _iterator2, _step2, _id, _symbol, Bg;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              gameData = cc.vv.gameData;
              popNodeSrc = gameData.GetPopNodeScript();
              freeResult = _this4._gameInfo.freeResult;
              _iterator = _createForOfIteratorHelper(freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  id = _step.value;
                  symbol = _this4.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              Global.SlotsSoundMgr.playEffect("triggering");
              _this4.Backup();
              _context3.next = 10;
              return _this4.awaitTime(3);

             case 10:
              _iterator2 = _createForOfIteratorHelper(freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _id = _step2.value;
                  _symbol = _this4.GetSymbolByIdx(_id);
                  _symbol && _symbol.playTriggerAnimation(false);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if (!(0 != gameData.GetCollectState())) {
                _context3.next = 22;
                break;
              }
              _this4.recoverLine(.3);
              Bg = cc.find("Canvas/safe_node/spr_bg_collect");
              cc.find("reels_frame/frameUp/unLockNode/wood/goldenMode", _this4.node).active = false;
              cc.find("spine_hero", _this4.node).active = true;
              cc.find("Canvas/safe_node/jackpot").active = true;
              _context3.next = 20;
              return _this4.awaitTime(.5);

             case 20:
              gameData.SetCollectState(0);
              Bg.active = false;

             case 22:
              popNodeSrc.goFreeGame(freeResult.freeInfo.freeCnt);

             case 23:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterDoubleFreeGame: function enterDoubleFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var freeResult, popNodeSrc, _iterator3, _step3, id, symbol, _iterator4, _step4, _id2, _symbol2;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              freeResult = _this5._gameInfo.freeResult;
              popNodeSrc = cc.vv.gameData.GetPopNodeScript();
              _iterator3 = _createForOfIteratorHelper(freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  id = _step3.value;
                  symbol = _this5.GetSymbolByIdx(id);
                  symbol && symbol.playTriggerAnimation(true);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _context4.next = 6;
              return _this5.awaitTime(3);

             case 6:
              _iterator4 = _createForOfIteratorHelper(freeResult.freeInfo.scatterIdx);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  _id2 = _step4.value;
                  _symbol2 = _this5.GetSymbolByIdx(_id2);
                  _symbol2 && _symbol2.playTriggerAnimation(false);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              popNodeSrc.goExtraFreeGame(freeResult.freeInfo.freeCnt);

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var GameData, deskInfo, total, rest, betIndex, nTotal;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              GameData = cc.vv.gameData;
              deskInfo = GameData._deskInfo;
              total = GameData.GetTotalFree();
              rest = GameData.GetFreeTime();
              GameData.SetCollectInfos(deskInfo.collectInfos);
              betIndex = cc.vv.gameData.GetBetIdx();
              GameData.SetCollectInfo(deskInfo.collectInfos[betIndex - 1]);
              rest > 0 && cc.vv.gameData.SetFreeGameState(true);
              _context5.next = 10;
              return _this6.updateCollectPigUi();

             case 10:
              if (rest > 0) {
                _this6._bottomScript.ShowFreeModel(true, total - rest, total);
                nTotal = GameData.GetTotalFreeWin();
                _this6._bottomScript.SetWin(nTotal);
                _this6.CanDoNextRound();
                _this6.ShowGameview(true);
              } else if (deskInfo.bonusGame) {
                _this6._bottomScript.ShowBtnsByState("moveing_1");
                _this6.CheckTriggerSubGame(deskInfo.bonusGame);
              }

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var popNodeSrc;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              popNodeSrc = cc.vv.gameData.GetPopNodeScript();
              popNodeSrc.goFreeGameEnd(_this7._gameInfo.allFreeCnt, _this7._gameInfo.freeWinCoin);

             case 3:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      moveCoinToPig: function moveCoinToPig() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var collectInfo, pigNode, coinNode, pigIndex, key, element, symbol, pos;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              collectInfo = cc.vv.gameData.GetCollectInfo();
              pigNode = cc.find("reels_frame/frameUp/unLockNode/wood/pinkPig" + collectInfo.count, _this8.node);
              coinNode = cc.find("reels_frame/frameUp/unLockNode/wood/collect_coin", _this8.node);
              pigIndex = -1;
              _context7.t0 = regeneratorRuntime.keys(_this8._gameInfo.resultCards);

             case 5:
              if ((_context7.t1 = _context7.t0()).done) {
                _context7.next = 13;
                break;
              }
              key = _context7.t1.value;
              element = _this8._gameInfo.resultCards[key];
              if (!(3 === element)) {
                _context7.next = 11;
                break;
              }
              pigIndex = Number(key) + 1;
              return _context7.abrupt("break", 13);

             case 11:
              _context7.next = 5;
              break;

             case 13:
              if (!(-1 === pigIndex)) {
                _context7.next = 15;
                break;
              }
              return _context7.abrupt("return");

             case 15:
              Global.SlotsSoundMgr.playEffect("reelpig");
              symbol = _this8.GetSymbolByIdx(pigIndex);
              pos = Prometheus_Tools.convetOtherNodeSpace(symbol.node, coinNode.parent);
              symbol.playStopAnimation();
              coinNode.y = pos.y;
              coinNode.x = 0;
              coinNode.active = true;
              cc.tween(coinNode).to(.5, {
                x: pigNode.x,
                y: pigNode.y
              }).call(function() {
                Global.SlotsSoundMgr.playEffect("reelPetBox");
                coinNode.active = false;
                symbol.ShowNormal();
                symbol.ShowKuang(false);
              }).start();
              _context7.next = 25;
              return _this8.awaitTime(.5);

             case 25:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      updateCollectPigUi: function updateCollectPigUi(isUpdateBet) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var gameData, collectInfo, Bg, _loop2, index, needChange, _needChange;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              gameData = cc.vv.gameData;
              collectInfo = gameData.GetCollectInfo();
              Bg = cc.find("Canvas/safe_node/spr_bg_collect");
              _loop2 = function _loop2(index) {
                var pigNode = cc.find("reels_frame/frameUp/unLockNode/wood/pinkPig" + index, _this9.node);
                var huoju = cc.find("huoju", pigNode);
                var pinkSpine = cc.find("pinkSpine", pigNode);
                if (index <= collectInfo.count) {
                  if (1 != pigNode.state) {
                    if (isUpdateBet) huoju.getComponent(sp.Skeleton).setAnimation(0, "jin_idle", false); else {
                      huoju.getComponent(sp.Skeleton).setAnimation(0, "fenTojin", false);
                      huoju.getComponent(sp.Skeleton).addAnimation(0, "jin_idle", true);
                    }
                    pigNode.state = 1;
                  }
                } else if (0 != pigNode.state) {
                  if (isUpdateBet) huoju.getComponent(sp.Skeleton).setAnimation(0, "fen_idle", true); else {
                    huoju.getComponent(sp.Skeleton).setAnimation(0, "jintofen", false);
                    huoju.getComponent(sp.Skeleton).addAnimation(0, "fen_idle", true);
                  }
                  pigNode.state = 0;
                  pinkSpine.active = true;
                  pinkSpine.getComponent(sp.Skeleton).setAnimation(0, "BG_PicksLeft", false);
                  pinkSpine.getComponent(sp.Skeleton).setCompleteListener(function(trackEntry, loopCount) {
                    var name = trackEntry.animation ? trackEntry.animation.name : "";
                    pinkSpine.active = false;
                  });
                }
              };
              for (index = 1; index < 8; index++) _loop2(index);
              if (!(1 === collectInfo.state)) {
                _context8.next = 20;
                break;
              }
              if (!(!gameData.GetFreeGameState() && _this9._cfg.row != collectInfo.row)) {
                _context8.next = 18;
                break;
              }
              needChange = false;
              if (_this9._bottomScript.GetSpinBtnState()) {
                needChange = true;
                _this9._bottomScript.ShowBtnsByState("moveing_1");
              }
              _this9.extendLine(collectInfo.row, .5);
              cc.find("spine_hero", _this9.node).active = false;
              cc.find("Canvas/safe_node/jackpot").active = false;
              cc.find("reels_frame/frameUp/unLockNode/wood/goldenMode", _this9.node).active = true;
              Bg.active = true;
              gameData.SetCollectState(1);
              _context8.next = 17;
              return _this9.awaitTime(.5);

             case 17:
              needChange && _this9.CanDoNextRound();

             case 18:
              _context8.next = 32;
              break;

             case 20:
              if (!(0 != gameData.GetCollectState())) {
                _context8.next = 32;
                break;
              }
              _needChange = false;
              if (_this9._bottomScript.GetSpinBtnState()) {
                _needChange = true;
                _this9._bottomScript.ShowBtnsByState("moveing_1");
              }
              _this9.recoverLine(.5);
              cc.find("reels_frame/frameUp/unLockNode/wood/goldenMode", _this9.node).active = false;
              cc.find("spine_hero", _this9.node).active = true;
              cc.find("Canvas/safe_node/jackpot").active = true;
              Bg.active = false;
              gameData.SetCollectState(0);
              _context8.next = 31;
              return _this9.awaitTime(.5);

             case 31:
              _needChange && _this9.CanDoNextRound();

             case 32:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      exitBonusGame: function exitBonusGame(_allBonusGameWin) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var haveWin;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              Global.SlotsSoundMgr.playNormalBgm(true);
              haveWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              _context9.next = 4;
              return cc.vv.gameData.GetSlotsScript().ShowBottomWin(_allBonusGameWin, _allBonusGameWin + haveWin, true, null, 1);

             case 4:
              _this10.CanDoNextRound();

             case 5:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      extendLine: function extendLine(count) {
        var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01;
        var GameCfg = cc.vv.gameData.getGameCfg();
        var addLineNum = count - GameCfg.row;
        GameCfg.row = count;
        var topAniNode = cc.find("Canvas/safe_node/slots/top_ani");
        topAniNode.height = count * GameCfg.symbolSize.height;
        for (var i = 0; i < 5; i++) this._reels[i].AddCount(addLineNum, time);
        Global.SlotsSoundMgr.playEffect("reelup");
        this._row = this._cfg.row;
      },
      recoverLine: function recoverLine() {
        var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .01;
        var GameCfg = cc.vv.gameData.getGameCfg();
        var data1 = GameCfg.row;
        var data2 = GameCfg.realRow;
        var addLineNum = data2 - data1;
        var topAniNode = cc.find("Canvas/safe_node/slots/top_ani");
        topAniNode.height = data2 * GameCfg.symbolSize.height;
        if (0 != addLineNum) for (var i = 0; i < 5; i++) this._reels[i].AddCount(addLineNum, time);
        Global.SlotsSoundMgr.playEffect("reeldown");
        this._cfg.row = this._cfg.realRow;
        this._row = this._cfg.row;
      },
      ShowGameview: function ShowGameview(bFree) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var total, rest, nTotal, normalBg, normalFree;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (bFree) {
                total = cc.vv.gameData.GetTotalFree();
                rest = cc.vv.gameData.GetFreeTime();
                _this11._bottomScript.ShowFreeModel(true, total - rest, total);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                _this11._bottomScript.SetWin(nTotal);
                Global.SlotsSoundMgr.playBgm("fgbgm");
              } else {
                _this11._bottomScript.ShowFreeModel(false);
                Global.SlotsSoundMgr.playNormalBgm(true);
              }
              normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
              normalFree = cc.find("Canvas/safe_node/spr_bg_free");
              normalBg && (normalBg.active = !bFree);
              normalFree && (normalFree.active = bFree);

             case 5:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      stopAllSymbolAni: function stopAllSymbolAni() {
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          for (var _i = 0; _i < item._symbols.length; _i++) {
            var element = item._symbols[_i];
            element.ShowNormal();
            element.ShowKuang(false);
          }
        }
      },
      showJpNode: function showJpNode(isShow) {
        var jackpot = cc.find("Canvas/safe_node/jackpot");
        var logo = cc.find("Canvas/safe_node/logo");
        if (isShow) {
          jackpot.active = true;
          var widget = jackpot.getComponent(cc.Widget);
          widget.isAbsoluteBottom = false;
          if (this._cfg.row >= 6) {
            widget.bottom = .7;
            logo.active = false;
          }
          if (this._cfg.row < 6) {
            widget.bottom = .64;
            logo.active = true;
          }
          widget.updateAlignment();
        } else {
          jackpot.active = false;
          logo.active = false;
        }
      },
      sendNextRound: function sendNextRound() {
        this._bottomScript.SendSpinReq();
      },
      awaitTime: function awaitTime(time) {
        var _this12 = this;
        return new Promise(function(sucess, failed) {
          _this12.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    "./Prometheus_Tools": "Prometheus_Tools",
    LMSlots_Slots_Base: void 0
  } ],
  Prometheus_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2dfbLVJVBAIIsjNDG9KXrB", "Prometheus_Symbol");
    "use strict";
    var Prometheus_Tools = require("./Prometheus_Tools");
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      SetRoseText: function SetRoseText(num) {},
      Resume: function Resume(backup) {
        if (!backup) return;
        this._symbolIdx = backup.symbolIdx;
        this._id = backup.id;
        this._data = Global.copy(backup.data);
        this.ShowKuang(backup.isKuang);
        this.ShowNormal();
        var state = backup.state;
        "win" == state ? this.playWinAnimation() : "stop" == state ? this.playStopAnimation() : "idle" == state ? this.playidleAnimation() : "trigger" == state && this.playTriggerAnimation(true);
      },
      playTriggerAnimation: function playTriggerAnimation(bPlay) {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (bPlay) {
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
        } else this.setAnimationToTop(false);
        return isPlay;
      }
    });
    cc._RF.pop();
  }, {
    "./Prometheus_Tools": "Prometheus_Tools",
    LMSlots_Symbol_Base: void 0
  } ],
  Prometheus_Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f693ZE8BNO9LUIMe1IGHwK", "Prometheus_Tools");
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
        nodeAni: function nodeAni(node, type, endCall) {
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
            endCall && endCall();
          }).start() : 3 === type && cc.tween(node).to(.2, {
            scale: 1.3
          }).to(.3, {
            scale: 0
          }).call(function() {
            node.active = false;
            node.scale = 1;
            endCall && endCall();
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
        spineEndFunc: function spineEndFunc(spineNode, callFunc) {
          spineNode && spineNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            callFunc && callFunc();
          });
        },
        localConvertWorldPoint: function localConvertWorldPoint(node) {
          if (node) return node.convertToWorldSpace(cc.v2(0, 0));
          return null;
        },
        worldConvertLocalPoint: function worldConvertLocalPoint(node, worldPoint) {
          if (node) return node.convertToNodeSpace(worldPoint);
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
  }, {} ]
}, {}, [ "Prometheus_BonusGame", "Prometheus_ButtonSafe", "Prometheus_Cfg", "Prometheus_GameData", "Prometheus_Logic", "Prometheus_Pop", "Prometheus_PrizePool", "Prometheus_Reel", "Prometheus_Slots", "Prometheus_Symbol", "Prometheus_Tools" ]);