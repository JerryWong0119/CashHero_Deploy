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
  DoubleAgent_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "676fbOVwNdLjYPxiNFGH1YC", "DoubleAgent_ButtonSafe");
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
  DoubleAgent_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83606qLAPtL3Z9RT/vQyhBd", "DoubleAgent_Cfg");
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
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
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
        win_node: ""
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 500
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: ""
      }), _defineProperty(_symbol, 15, {
        node: "s15",
        win_node: ""
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "DoubleAgent_Slots",
        Reels: "DoubleAgent_Reel",
        Symbols: "DoubleAgent_symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 85
      },
      helpItems: [ "games/DoubleAgent/prefab/LMSlots_Help_item1", "games/DoubleAgent/prefab/LMSlots_Help_item2", "games/DoubleAgent/prefab/LMSlots_Help_item3", "games/DoubleAgent/prefab/LMSlots_Help_item4", "games/DoubleAgent/prefab/LMSlots_Help_item5" ],
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ],
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
        counts: [ 1, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/DoubleAgent/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2400
      }, {
        id: [ 11 ],
        mini: 1,
        counts: [ 0, 0, 0, 0, 0 ],
        antiNode: "node_antiXXX",
        path: "games/DoubleAgent/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "reel_notify",
        antSpeed: 2400
      } ],
      normalBgm: "base_bgm",
      sysFloatOffsetPos: cc.v2(0, 80)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  DoubleAgent_CollectGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0b64be6IdERItZ1a+Oq/Lq", "DoubleAgent_CollectGame");
    "use strict";
    var _takeCfg;
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
    var takeCfg = (_takeCfg = {}, _defineProperty(_takeCfg, 1, {
      multiple: 3
    }), _defineProperty(_takeCfg, 2, {
      multiple: 5
    }), _defineProperty(_takeCfg, 3, {
      multiple: 7
    }), _defineProperty(_takeCfg, 4, {
      multiple: 9
    }), _defineProperty(_takeCfg, 5, {
      multiple: 12
    }), _defineProperty(_takeCfg, 6, {
      multiple: 20
    }), _defineProperty(_takeCfg, 7, {
      multiple: 2
    }), _defineProperty(_takeCfg, 8, {
      multiple: 4
    }), _defineProperty(_takeCfg, 9, {
      multiple: 6
    }), _defineProperty(_takeCfg, 10, {
      multiple: 8
    }), _defineProperty(_takeCfg, 11, {
      multiple: 10
    }), _defineProperty(_takeCfg, 12, {
      multiple: 15
    }), _defineProperty(_takeCfg, 13, {
      multiple: 30
    }), _defineProperty(_takeCfg, 14, {
      multiple: 50
    }), _defineProperty(_takeCfg, 15, {
      multiple: 60
    }), _defineProperty(_takeCfg, 16, {
      multiple: 70
    }), _defineProperty(_takeCfg, 17, {
      multiple: 80
    }), _defineProperty(_takeCfg, 18, {
      multiple: 90
    }), _defineProperty(_takeCfg, 19, {
      multiple: 100
    }), _defineProperty(_takeCfg, 20, {
      multiple: 150
    }), _defineProperty(_takeCfg, 21, {
      multiple: 200
    }), _defineProperty(_takeCfg, 22, {
      multiple: 300
    }), _defineProperty(_takeCfg, 23, {
      multiple: 500
    }), _defineProperty(_takeCfg, 24, {
      multiple: 750
    }), _defineProperty(_takeCfg, 25, {
      multiple: 1e3
    }), _defineProperty(_takeCfg, 26, {
      multiple: 1500
    }), _takeCfg);
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        bagListNode: cc.Node,
        multipleListNode: cc.Node,
        btnOk: cc.Button,
        title: cc.Node,
        guide: cc.Node,
        pre_offers_node: cc.Node,
        dialog_result: cc.Node,
        dialog_result2: cc.Node,
        dialog_round_tips: cc.Node,
        tips_have_select: cc.Node,
        money_bag_selected: cc.Node,
        money_bag: cc.Node,
        particle_feixing: cc.ParticleSystem,
        _bagList: null,
        _multipleList: null,
        _callBack: null,
        _data: null,
        _multipleChoiceBagCnt: 7
      },
      onLoad: function onLoad() {
        var _this = this;
        this._bagList = [];
        this._multipleList = [];
        this._reset();
        for (var i = 1; i <= this._data.bagCnt; i++) {
          var item = this.bagListNode.getChildByName("take_bag_" + i);
          item.data = {};
          item.data.id = i;
          item.active = false;
          item.getChildByName("label").getComponent(cc.Label).string = i.toString();
          item.on(cc.Node.EventType.TOUCH_END, this._onClickBag.bind(this), this);
          this._bagList.push(item);
          var multipleItem = this.multipleListNode.getChildByName("take_multiple_" + i);
          i > 13 && multipleItem.getChildByName("bg").getComponent("ImgSwitchCmp").setIndex(1);
          multipleItem.getChildByName("label").getComponent(cc.Label).string = takeCfg[i].multiple + "X";
          this._multipleList.push(multipleItem);
        }
        this.btnOk.node.on("click", function() {
          _this.close();
        });
        this.dialog_result.getChildByName("content").getChildByName("btn_ok").on("click", this._onTakeHandler.bind(this), this);
        this.dialog_result.getChildByName("content").getChildByName("btn_no").on("click", this._onLeaveItHandler.bind(this), this);
        this.dialog_result2.getChildByName("content").getChildByName("btn_ok").on("click", this._onKeepHandler.bind(this), this);
        this.dialog_result2.getChildByName("content").getChildByName("btn_no").on("click", this._onTradeHander.bind(this), this);
        this.money_bag_selected.data = {
          x: this.money_bag_selected.x,
          y: this.money_bag_selected.y,
          scaleX: this.money_bag_selected.scaleX,
          scaleY: this.money_bag_selected.scaleY
        };
      },
      _reset: function _reset() {
        this._data = {
          bagCnt: 26,
          bagState: 0,
          firstBagId: 0,
          selectedIds: [],
          curSelectedIds: [],
          currRoundSelectedCnt: 0
        };
        this._setTitleState(0);
        this.pre_offers_node.active = false;
        this.dialog_result.active = false;
        this.dialog_round_tips.active = false;
        this.tips_have_select.active = false;
        this.money_bag_selected.active = false;
        this.money_bag.active = false;
        this.particle_feixing.node.active = false;
        for (var i = 1; i <= this._data.bagCnt; i++) {
          var item = this.bagListNode.getChildByName("take_bag_" + i);
          item.active = false;
        }
      },
      close: function close() {
        var _this2 = this;
        SlotsFacade.soundMgr.playEffect("bonus_close");
        SlotsFacade.dm.hasFree() ? SlotsFacade.soundMgr.playBgm("free_bgm") : SlotsFacade.soundMgr.playBgm();
        this.panel.stopAllActions();
        this.panel.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this2.panel.active = false;
        })));
        this._callBack && this._callBack();
      },
      reConnectCollect: function reConnectCollect(freebags) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var state, i, _i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.btnOk.node.active = false;
              state = freebags.currState.state;
              SlotsFacade.soundMgr.playBgm("bonus_bgm");
              _this3.guide.active = false;
              _this3.pre_offers_node.active = true;
              _this3.panel.active = true;
              _this3.title.active = false;
              if (freebags.currState.nextCount) {
                _this3.tips_have_select.active = true;
                _this3.tips_have_select.getChildByName("label").getComponent(cc.Label).string = "0/" + freebags.currState.nextCount;
              } else _this3._setTitleState(1);
              for (i = 0; i < _this3._data.bagCnt; i++) freebags.choices.includes(i + 1) || (_this3._bagList[i].active = true);
              _this3.reConnectChoiceGray(freebags.unpickedMult);
              for (_i = 0; _i < freebags.historyMult.length; _i++) _this3._showMultToOffers(freebags.historyMult[_i], _i + 1);
              if (freebags.lastChoice.length > 0) {
                _this3.money_bag_selected.active = true;
                cc.find("bag1/label", _this3.money_bag_selected).getComponent(cc.Label).string = freebags.lastChoice[0];
              }
              _this3._multipleChoiceBagCnt = freebags.currState.nextCount;
              _this3._data.selectedIds = freebags.choices;
              if (1 == state) _this3._data.bagState = 1; else {
                _this3._data.bagState = 2;
                if (3 == state) _this3._showBagResult(freebags); else if (4 == state) {
                  _this3._lastchoices = freebags.lastChoice;
                  _this3.showLastChoiceUI(_this3._lastchoices);
                }
              }

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      reConnectChoiceGray: function reConnectChoiceGray(pickedmult) {
        var _this4 = this;
        this.initShowMultipleIcon(true);
        pickedmult.forEach(function(mult) {
          var itemidx = _this4.getTakemultipleItem(mult);
          var bgnode = cc.find(cc.js.formatStr("take_multiple_%s/bg", itemidx), _this4.multipleListNode);
          var lblnode = cc.find(cc.js.formatStr("take_multiple_%s/label", itemidx), _this4.multipleListNode);
          bgnode.color = cc.color(255, 255, 255);
          lblnode.color = cc.color(255, 255, 255);
        });
      },
      open: function open(isView, cb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this5._callBack = cb;
              _this5.btnOk.node.active = isView;
              _this5.panel.active = true;
              _this5.panel.opacity = 0;
              _this5.panel.runAction(cc.fadeIn(.3));
              _this5._showBagList();
              _this5.initShowMultipleIcon(true);
              _this5.guide.active = true;
              if (isView) {
                _context2.next = 12;
                break;
              }
              _context2.next = 11;
              return _this5._cmpleteBag();

             case 11:
              if (SlotsFacade.dm.getFreeBagInfo().currCnt == _this5._data.bagCnt) {
                _this5.initShowMultipleIcon(false);
                _this5._startTakeBonus();
              } else _this5.close();

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      initShowMultipleIcon: function initShowMultipleIcon(isgray) {
        for (var i = 1; i <= this._data.bagCnt; i++) {
          var bgnode = cc.find(cc.js.formatStr("take_multiple_%s/bg", i), this.multipleListNode);
          var lblnode = cc.find(cc.js.formatStr("take_multiple_%s/label", i), this.multipleListNode);
          if (isgray) {
            bgnode.color = cc.color(90, 90, 90);
            lblnode.color = cc.color(90, 90, 90);
          } else {
            bgnode.color = cc.color(255, 255, 255);
            lblnode.color = cc.color(255, 255, 255);
          }
        }
      },
      _showBagList: function _showBagList() {
        var cmpCnt = SlotsFacade.dm.getFreeBagInfo().currCnt;
        for (var i = 0; i < cmpCnt; i++) this._bagList[i].active = true;
      },
      _cmpleteBag: function _cmpleteBag() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var freeBags, completeIndex, bagItem;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              freeBags = SlotsFacade.dm.getFreeBagInfo();
              freeBags.currCnt += 1;
              freeBags.currCnt > _this6._data.bagCnt && (freeBags.currCnt = _this6._data.bagCnt);
              completeIndex = freeBags.currCnt - 1;
              bagItem = _this6._bagList[completeIndex];
              _context3.next = 7;
              return new Promise(function(res) {
                cc.tween(_this6.node).delay(.5).call(function() {
                  bagItem.active = true;
                  var qiandaichuxian = _this6.bagListNode.getChildByName("qiandaichuxian").getComponent(sp.Skeleton);
                  qiandaichuxian.node.x = bagItem.x;
                  qiandaichuxian.node.y = bagItem.y;
                  qiandaichuxian.node.active = true;
                  qiandaichuxian.setAnimation(0, "animation", false);
                  qiandaichuxian.setCompleteListener(function() {
                    qiandaichuxian.setCompleteListener(null);
                    qiandaichuxian.node.active = false;
                  });
                }).delay(1.5).call(function() {
                  res();
                }).start();
              });

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _setTitleState: function _setTitleState(value) {
        this.title.active = true;
        if (1 == value) {
          this.title.getComponent("ImgSwitchCmp").setIndex(1);
          cc.tween(this.title).repeatForever(cc.tween().to(.8, {
            scale: .8
          }).to(.8, {
            scale: 1
          })).start();
        } else {
          this.title.getComponent("ImgSwitchCmp").setIndex(0);
          this.title.stopAllActions();
          this.title.scale = 1;
        }
      },
      _startTakeBonus: function _startTakeBonus() {
        SlotsFacade.soundMgr.playBgm("bonus_bgm");
        this.guide.active = false;
        this.pre_offers_node.active = true;
        this._setTitleState(1);
        this._data.bagState = 1;
      },
      _onClickBag: function _onClickBag(evt) {
        SlotsFacade.soundMgr.playEffect("bag_click");
        if (0 == this._data.bagState) return;
        if (1 == this._data.bagState) {
          this._data.bagState = 0;
          this._selectBag(evt.target);
          this._setTitleState(0);
        } else 2 == this._data.bagState && this._selectMultipleBag(evt.target);
      },
      _selectBag: function _selectBag(bagItem) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var xuanzeqiandai, startPos, endPos, middlePos, qiandaishouji, result;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bag_fly");
              _this7._data.firstBagId = bagItem.data.id;
              _this7._data.selectedIds.push(_this7._data.firstBagId);
              xuanzeqiandai = bagItem.getChildByName("xuanzeqiandai").getComponent(sp.Skeleton);
              xuanzeqiandai.node.active = true;
              _context4.next = 7;
              return new Promise(function(res) {
                xuanzeqiandai.setAnimation(0, "animation", false);
                xuanzeqiandai.setCompleteListener(function() {
                  xuanzeqiandai.setCompleteListener(null);
                  xuanzeqiandai.node.active = false;
                  bagItem.active = false;
                  res();
                });
              });

             case 7:
              startPos = _this7.panel.convertToNodeSpaceAR(bagItem.convertToWorldSpaceAR(cc.v2(0, 0)));
              _this7.particle_feixing.node.active = true;
              _this7.particle_feixing.node.x = startPos.x;
              _this7.particle_feixing.node.y = startPos.y;
              endPos = {
                x: _this7.money_bag_selected.data.x,
                y: _this7.money_bag_selected.data.y
              };
              middlePos = {
                x: startPos.x + (endPos.x - startPos.x) / 2,
                y: startPos.y + (endPos.y - startPos.y) / 2
              };
              _context4.next = 15;
              return new Promise(function(res) {
                cc.tween(_this7.particle_feixing.node).to(.8, {
                  x: middlePos.x,
                  y: middlePos.y
                }).call(function() {
                  _this7.particle_feixing.node.active = false;
                  res();
                }).start();
              });

             case 15:
              _this7.money_bag_selected.active = true;
              _this7.money_bag_selected.scale = 1;
              _this7.money_bag_selected.x = middlePos.x;
              _this7.money_bag_selected.y = middlePos.y;
              cc.find("bag1/label", _this7.money_bag_selected).getComponent(cc.Label).string = _this7._data.firstBagId.toString();
              qiandaishouji = _this7.money_bag_selected.getChildByName("qiandaishouji").getComponent(sp.Skeleton);
              qiandaishouji.node.active = true;
              qiandaishouji.setAnimation(0, "animation", false);
              qiandaishouji.setCompleteListener(function() {
                qiandaishouji.setCompleteListener(null);
                qiandaishouji.node.active = false;
              });
              _context4.next = 26;
              return new Promise(function(res) {
                cc.tween(_this7.money_bag_selected).to(1, {
                  x: endPos.x,
                  y: endPos.y,
                  scaleX: _this7.money_bag_selected.data.scaleX,
                  scaleY: _this7.money_bag_selected.data.scaleY
                }).call(function() {
                  res();
                }).start();
              });

             case 26:
              _context4.next = 28;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 1,
                choices: [ bagItem.data.id ]
              });

             case 28:
              result = _context4.sent;
              _this7._startSelectMultipleBag(result.data);

             case 30:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _startSelectMultipleBag: function _startSelectMultipleBag(data) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this8._data.curSelectedIds = [];
              _this8._multipleChoiceBagCnt = data.nextCount;
              _this8.dialog_round_tips.active = true;
              _this8.dialog_round_tips.scale = 0;
              _this8.dialog_round_tips.getChildByName("label_1").getComponent(cc.Label).string = data.nextRound;
              _this8.dialog_round_tips.getChildByName("label_2").getComponent(cc.Label).string = data.nextCount;
              _context5.next = 8;
              return new Promise(function(res) {
                cc.tween(_this8.dialog_round_tips).to(1, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).delay(1.5).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this8.dialog_round_tips.active = false;
                  res();
                }).start();
              });

             case 8:
              _this8.title.active = false;
              _this8.tips_have_select.active = true;
              _this8.tips_have_select.getChildByName("label").getComponent(cc.Label).string = "0/" + _this8._multipleChoiceBagCnt;
              _this8._data.bagState = 2;

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _selectMultipleBag: function _selectMultipleBag(bagItem) {
        var _this9 = this;
        var id = bagItem.data.id;
        if (this._data.selectedIds.includes(id)) return;
        this._data.selectedIds.push(id);
        this._data.curSelectedIds.push(id);
        this._data.currRoundSelectedCnt++;
        this.tips_have_select.getChildByName("label").getComponent(cc.Label).string = this._data.currRoundSelectedCnt + "/" + this._multipleChoiceBagCnt;
        var xuanzeqiandai = bagItem.getChildByName("xuanzeqiandai").getComponent(sp.Skeleton);
        xuanzeqiandai.node.active = true;
        xuanzeqiandai.setAnimation(0, "animation", false);
        if (this._data.currRoundSelectedCnt == this._multipleChoiceBagCnt) {
          this._data.bagState = 0;
          this.scheduleOnce(function() {
            _this9._processResult();
          }, .5);
        }
      },
      _processResult: function _processResult() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var result;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this10.tips_have_select.active = false;
              _this10._setTitleState(0);
              _context6.next = 4;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 2,
                choices: _this10._data.curSelectedIds
              });

             case 4:
              result = _context6.sent;
              _this10.playChoiceResult(result.data);

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playChoiceResult: function playChoiceResult(data) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var shownode, bag1node, bag2node, moneybagcnt, self, dataitems, showmoneybag;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this11.money_bag.active = true;
              shownode = cc.find("shownode", _this11.money_bag);
              bag1node = cc.find("shownode/bag1", _this11.money_bag);
              bag2node = cc.find("shownode/bag2", _this11.money_bag);
              moneybagcnt = 0;
              self = _this11;
              dataitems = data.items;
              showmoneybag = function showmoneybag() {
                if (moneybagcnt >= self._multipleChoiceBagCnt) {
                  self.money_bag.active = false;
                  self._showBagResult(data.freeBags);
                } else {
                  var moneybagpos = self._data.curSelectedIds[moneybagcnt];
                  self.hideChoiceMoneyBag(moneybagpos);
                  shownode.opacity = 0;
                  shownode.runAction(cc.fadeIn(.2));
                  bag1node.active = true;
                  bag1node.scale = 0;
                  cc.find("label", bag1node).getComponent(cc.Label).string = moneybagpos;
                  cc.tween(bag1node).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).delay(1).call(function() {
                    bag2node.active = true;
                    bag1node.active = false;
                    var qiandaifanbei = cc.find("qiandaifanbei", bag2node);
                    SlotsFacade.dm.playSpine(qiandaifanbei, "animation", false, function() {
                      qiandaifanbei.active = false;
                    });
                    var multarr = dataitems[moneybagcnt];
                    var multratio = multarr.length > 1 ? multarr[1] : multarr[0];
                    var lblnode = cc.find("label", bag2node);
                    lblnode.scale = 0;
                    lblnode.getComponent(cc.Label).string = multratio + "X";
                    cc.tween(lblnode).to(.5, {
                      scale: 1
                    }, {
                      easing: "backOut"
                    }).call(function() {
                      1 == multarr.length && self.hideOutMult(multratio);
                    }).delay(2).call(function() {
                      multratio = multarr[0];
                      if (multarr.length > 1) {
                        self.hideOutMult(multratio);
                        lblnode.getComponent(cc.Label).string = multratio + "X";
                        var qiehuansp = cc.find("shuzhiqiehuan", bag2node);
                        SlotsFacade.dm.playSpine(qiehuansp, "animation", false, function() {
                          shownode.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(.5), cc.callFunc(function() {
                            moneybagcnt++;
                            bag2node.active = false;
                            showmoneybag();
                          })));
                        });
                      } else shownode.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                        moneybagcnt++;
                        bag2node.active = false;
                        showmoneybag();
                      })));
                    }).start();
                  }).start();
                }
              };
              showmoneybag();

             case 9:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      getTakemultipleItem: function getTakemultipleItem(mult) {
        for (var i = 1; i <= this._data.bagCnt; i++) if (takeCfg[i].multiple == mult) return i;
      },
      hideOutMult: function hideOutMult(mult) {
        var itemidx = this.getTakemultipleItem(mult);
        if (!itemidx) {
          cc.error("###\u500d\u7387\u6ca1\u627e\u5230:" + mult);
          return;
        }
        var bgnode = cc.find(cc.js.formatStr("take_multiple_%s/bg", itemidx), this.multipleListNode);
        var lblnode = cc.find(cc.js.formatStr("take_multiple_%s/label", itemidx), this.multipleListNode);
        var beishunode = cc.find(cc.js.formatStr("take_multiple_%s/beishuqubianhui", itemidx), this.multipleListNode);
        bgnode.color = cc.color(90, 90, 90);
        lblnode.color = cc.color(90, 90, 90);
        SlotsFacade.dm.playSpine(beishunode, "animation", false);
      },
      hideChoiceMoneyBag: function hideChoiceMoneyBag(idx) {
        var item = this.bagListNode.getChildByName("take_bag_" + idx);
        item.getChildByName("xuanzeqiandai").active = false;
        item.active = false;
      },
      _showBagResult: function _showBagResult(freeBags) {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var content, prizenum, totalnum, tips_node;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("board_show");
              _this12.dialog_result.active = true;
              content = _this12.dialog_result.getChildByName("content");
              content.active = false;
              content.getChildByName("label_1").getComponent(cc.Label).string = freeBags.mult + "X";
              prizenum = Global.convertNumToShort(freeBags.prize, 1e3, 0);
              totalnum = Global.convertNumToShort(freeBags.prize * freeBags.mult, 1e3, 0);
              content.getChildByName("label_2").getComponent(cc.Label).string = cc.js.formatStr("%s X %s = %s", freeBags.mult, prizenum, totalnum);
              tips_node = _this12.dialog_result.getChildByName("tips_node");
              tips_node.active = true;
              tips_node.scale = 0;
              cc.tween(tips_node.getChildByName("tips")).repeatForever(cc.tween().to(.8, {
                scale: .8
              }).to(.8, {
                scale: 1
              })).start();
              cc.tween(tips_node).to(.5, {
                scale: 1.26
              }, {
                easing: "backOut"
              }).call(function() {
                content.active = true;
              }).delay(2).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                tips_node.active = false;
              }).start();

             case 13:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      _showMultToOffers: function _showMultToOffers(mult, index) {
        var multnode = cc.find(cc.js.formatStr("getmult/multshow_%s", index), this.pre_offers_node);
        multnode.getComponent(cc.Label).string = mult + "X";
        multnode.scale = 0;
        cc.tween(multnode).to(.3, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
      },
      _onTakeHandler: function _onTakeHandler() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var result;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bonus_end_show");
              _context9.next = 3;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 3,
                takeIt: true
              });

             case 3:
              result = _context9.sent;
              _context9.next = 6;
              return SlotsFacade.popup.showCollectWinGold(result.data);

             case 6:
              SlotsFacade.dm.getFreeBagInfo().currCnt = 0;
              _this13._reset();
              _this13.close();

             case 9:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      _onLeaveItHandler: function _onLeaveItHandler() {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var result, freebags;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _context10.next = 2;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 3,
                takeIt: false
              });

             case 2:
              result = _context10.sent;
              freebags = result.data.freeBags;
              if (4 == freebags.currState.state) {
                _this14._lastchoices = freebags.lastChoice;
                _this14.showLastChoiceUI(_this14._lastchoices);
              } else _this14._startSelectMultipleBag(result.data);
              _this14._showMultToOffers(freebags.mult, freebags.historyMult.length);
              _this14._data.currRoundSelectedCnt = 0;
              _this14.dialog_result.active = false;

             case 8:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      _onKeepHandler: function _onKeepHandler() {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var result;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _context11.next = 2;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 4,
                keep: true
              });

             case 2:
              result = _context11.sent;
              _context11.next = 5;
              return _this15._showSingleMoneybag(result.data, _this15._lastchoices[0]);

             case 5:
              _context11.next = 7;
              return SlotsFacade.popup.showCollectWinGold(result.data);

             case 7:
              SlotsFacade.dm.getFreeBagInfo().currCnt = 0;
              _this15._reset();
              _this15.close();

             case 10:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      _onTradeHander: function _onTradeHander() {
        var _this16 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var result;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              _context12.next = 2;
              return SlotsFacade.dm.reqSubGame({
                rtype: 3,
                act: 4,
                keep: false
              });

             case 2:
              result = _context12.sent;
              _context12.next = 5;
              return _this16._showSingleMoneybag(result.data, _this16._lastchoices[1]);

             case 5:
              _context12.next = 7;
              return SlotsFacade.popup.showCollectWinGold(result.data);

             case 7:
              SlotsFacade.dm.getFreeBagInfo().currCnt = 0;
              _this16._reset();
              _this16.close();

             case 10:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      _showSingleMoneybag: function _showSingleMoneybag(data, choicepos) {
        var _this17 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function(success) {
                var moneybag2 = cc.find("panel/money_bag2", _this17.node);
                moneybag2.active = true;
                var shownode = cc.find("shownode", moneybag2);
                var bag1node = cc.find("shownode/bag1", moneybag2);
                var bag2node = cc.find("shownode/bag2", moneybag2);
                bag1node.active = true;
                shownode.scale = 0;
                cc.find("label", bag1node).getComponent(cc.Label).string = choicepos;
                cc.tween(shownode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).delay(1).call(function() {
                  bag2node.active = true;
                  bag1node.active = false;
                  var qiandaifanbei = cc.find("qiandaifanbei", bag2node);
                  SlotsFacade.dm.playSpine(qiandaifanbei, "animation", false, function() {
                    qiandaifanbei.active = false;
                  });
                  var lblnode = cc.find("label", bag2node);
                  lblnode.scale = 0;
                  lblnode.getComponent(cc.Label).string = data.mult + "X";
                  cc.tween(lblnode).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).delay(2).call(function() {
                    _this17.dialog_result2.active = false;
                    moneybag2.active = false;
                    success();
                  }).start();
                }).start();
              }));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      showLastChoiceUI: function showLastChoiceUI(lastchoice) {
        cc.find("content/theme159_take_dialog5/label", this.dialog_result2).getComponent(cc.Label).string = lastchoice[0];
        cc.find("content/theme159_take_dialog4/label", this.dialog_result2).getComponent(cc.Label).string = lastchoice[1];
        this.dialog_result2.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e3b3nGNW9N3p1ii8X/yith", "DoubleAgent_CollectProgress");
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
        btn_enter: cc.Node,
        progressBar: cc.Node,
        spine_switch_tips: sp.Skeleton,
        spine_full: sp.Skeleton,
        collect_track_particle: cc.Node,
        unlock_tips: cc.Node,
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
          _this._isOpen || _this._showTips(true);
        }, this);
      },
      _init: function _init() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.showCollect(true);
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        SlotsFacade.soundMgr.playEffect("btn_click");
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.collectGame.open(true, function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        });
      },
      _showTips: function _showTips(boo) {
        var _this2 = this;
        SlotsFacade.soundMgr.playEffect("tips");
        this.unlock_tips.active && this.unlock_tips.stopAllActions();
        if (boo) {
          this.unlock_tips.active = true;
          this.unlock_tips.opacity = 0;
          cc.tween(this.unlock_tips).to(1, {
            opacity: 255
          }).delay(3).to(1, {
            opacity: 0
          }).call(function() {
            _this2.unlock_tips.active = false;
          }).start();
        } else this.unlock_tips.active && cc.tween(this.unlock_tips).to(1, {
          opacity: 0
        }).call(function() {
          _this2.unlock_tips.active = false;
        }).start();
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              endPos = _this3.icon_energy.getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this3.node.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(_this3.collect_track_particle);
                lz.parent = _this3.node;
                lz.x = pos.x;
                lz.y = pos.y;
                lz.active = true;
                var p = lz.getComponent(cc.ParticleSystem);
                p.resetSystem();
                promiseArr.push(new Promise(function(res) {
                  cc.tween(lz).to(.5, {
                    x: endPos.x,
                    y: endPos.y
                  }).call(function() {
                    lz.removeFromParent();
                    res();
                  }).start();
                }));
              });
              SlotsFacade.soundMgr.playEffect("collect");
              _context.next = 6;
              return Promise.all(promiseArr);

             case 6:
              _this3.playCollectSpine();
              _this3.setProgress(percent, true);

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playCollectSpine: function playCollectSpine() {
        var collectsp = cc.find("collectsp", this.icon_energy);
        SlotsFacade.dm.playSpine(collectsp, "animation", false, null);
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (!this._isOpen) if (isInit) this.spine_switch_tips.node.active = false; else {
            SlotsFacade.soundMgr.playEffect("unlock");
            this.spine_switch_tips.setAnimation(0, "animation1", false);
          }
        } else {
          this.spine_switch_tips.node.active = true;
          if (isInit) this.spine_switch_tips.setAnimation(0, "animation3", true); else if (this._isOpen) {
            SlotsFacade.soundMgr.playEffect("lock");
            this.spine_switch_tips.setAnimation(0, "animation2", false);
          }
        }
        this._isOpen = boo;
      },
      playCollectEnd: function playCollectEnd() {
        var _this4 = this;
        return new Promise(function(res) {
          SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
          _this4.spine_collect_end.node.active = true;
          _this4.spine_collect_end.setAnimation(0, "animation1", false);
          _this4.spine_collect_end.setCompleteListener(function() {
            _this4.spine_collect_end.setCompleteListener(null);
            _this4.spine_collect_end.node.active = false;
            res();
          });
        });
      },
      setProgress: function setProgress(percent, needTransform) {
        percent = Math.min(1, percent);
        var w = this.progressBar.width;
        var spine = this.progressBar.getChildByName("spine_progress");
        var toX = -w / 2 + percent * w;
        needTransform ? cc.tween(spine).to(.5, {
          x: toX
        }).start() : spine.x = -w / 2 + percent * w;
      },
      showEnterCollectGameAni: function showEnterCollectGameAni() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this5.spine_full.node.active = true;
              _context2.next = 3;
              return new Promise(function(res) {
                _this5.spine_full.setAnimation(0, "animation", false);
                _this5.spine_full.setCompleteListener(function() {
                  _this5.spine_full.setCompleteListener(null);
                  _this5.spine_full.node.active = false;
                  res();
                });
              });

             case 3:
              _context2.next = 5;
              return new Promise(function(res) {
                var btn_enter_spine = _this5.btn_enter.getComponent(sp.Skeleton);
                btn_enter_spine.setAnimation(0, "animation2", false);
                btn_enter_spine.setCompleteListener(function() {
                  btn_enter_spine.setCompleteListener(null);
                  btn_enter_spine.setAnimation(0, "animation1", false);
                  res();
                });
              });

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_ExtraWildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffa26iyG9NKjo2GyHv4Kiss", "DoubleAgent_ExtraWildGame");
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
        colWildItems: [ cc.Node ],
        jinbizhongjiang1: sp.Skeleton,
        jinbizhongjiang2: sp.Skeleton,
        xialuo: sp.Skeleton
      },
      onLoad: function onLoad() {
        this.colWildItems.forEach(function(v, i) {
          for (var j = 0; j <= 4; j++) {
            var item = v.getChildByName("xialuo_zengjia_0" + j);
            item.data = {
              originX: item.x,
              originY: item.y
            };
          }
        });
      },
      startFallWild: function startFallWild(data) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var maxRound, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(!data || data.length < 1)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              maxRound = 0;
              data.forEach(function(v) {
                maxRound = Math.max(maxRound, v.length);
              });
              i = 0;

             case 5:
              if (!(i < maxRound)) {
                _context.next = 12;
                break;
              }
              if (_this._stopFall) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this._fallARound(i + 1, data);

             case 9:
              i++;
              _context.next = 5;
              break;

             case 12:
              _this._stopFall = false;

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showZengjiaWild: function showZengjiaWild(data) {
        var _this2 = this;
        if (!data || data.length < 1) return;
        var index = 0;
        this._stopFall = true;
        data.forEach(function(v) {
          var round = v.length;
          if (round > 0) {
            var colNode = _this2.colWildItems[index];
            colNode.getChildByName("xialuo_01").active = false;
            colNode.getChildByName("xialuo_xunhuan_01").active = false;
            var feixingParticle = colNode.getChildByName("particle_feixing");
            feixingParticle.stopAllActions();
            feixingParticle.getComponent(cc.ParticleSystem).resetSystem();
            feixingParticle.active = false;
            for (var i = 0; i < round; i++) {
              var zengjianode = colNode.getChildByName("xialuo_zengjia_0" + i);
              zengjianode.cleanup();
              zengjianode.stopAllActions();
              zengjianode.active = true;
              zengjianode.scale = 1;
              var skl = zengjianode.getComponent(sp.Skeleton);
              var endPos = skl.node.data;
              skl.node.setPosition(endPos.originX, endPos.originY);
            }
          }
          index++;
        });
      },
      hideWilds: function hideWilds() {
        this.jinbizhongjiang2.node.active = false;
        var promiseArr = [];
        var scaleTime = .2;
        var maxdelay = 0;
        for (var i = 0; i < 5; i++) {
          var colNode = this.colWildItems[i];
          var xialuo_01 = colNode.getChildByName("xialuo_01");
          xialuo_01.active = false;
          var particle_feixing = colNode.getChildByName("particle_feixing");
          particle_feixing.active = false;
          var xialuo_xunhuan_01 = colNode.getChildByName("xialuo_xunhuan_01");
          xialuo_xunhuan_01.active = false;
          var zongjiang_01 = colNode.getChildByName("xialuo_zongjiang_01");
          zongjiang_01.active = false;
          var delayTime = 0;
          var _loop = function _loop(j) {
            var xialuo_zengjia = colNode.getChildByName("xialuo_zengjia_0" + j);
            if (xialuo_zengjia.active) {
              cc.tween(xialuo_zengjia).delay(delayTime).to(scaleTime, {
                scale: 0
              }).call(function() {
                xialuo_zengjia.active = false;
              }).start();
              delayTime += scaleTime;
            }
          };
          for (var j = 4; j >= 0; j--) _loop(j);
          delayTime > maxdelay && (maxdelay = delayTime);
        }
        return maxdelay;
      },
      _fallARound: function _fallARound(round, data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var promissArr, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("coin_drop");
              promissArr = [];
              for (i = 0; i < data.length; i++) data[i].length >= round && promissArr.push(_this3._playATrace(round, i));
              if (!promissArr.length) {
                _context2.next = 6;
                break;
              }
              _context2.next = 6;
              return Promise.all(promissArr);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _playATrace: function _playATrace(round, colIndex, startPos) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var colNode, xialuoSpine, startAniName, idleAniName, endPos, feixingParticle;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              colNode = _this4.colWildItems[colIndex];
              startPos || (startPos = colNode.getChildByName("pos_start").getPosition());
              xialuoSpine = colNode.getChildByName("xialuo_zengjia_0" + (round - 1)).getComponent(sp.Skeleton);
              xialuoSpine.node.setPosition(startPos.x, startPos.y);
              xialuoSpine.node.scale = 1;
              xialuoSpine.node.active = true;
              startAniName = "animation" + (colIndex + 1);
              idleAniName = startAniName + "_" + (colIndex + 1);
              if (round > 1) {
                startAniName = "animation1_2";
                idleAniName = "animation1_1";
              }
              xialuoSpine.setAnimation(0, startAniName, false);
              xialuoSpine.setCompleteListener(function() {
                xialuoSpine.setCompleteListener(null);
                xialuoSpine.setAnimation(0, idleAniName, false);
              });
              endPos = xialuoSpine.node.data;
              cc.tween(xialuoSpine.node).to(.8, {
                x: endPos.originX,
                y: endPos.originY
              }, {
                easing: "cubicIn"
              }).call(function() {
                var xialuo_01_spine = colNode.getChildByName("xialuo_01").getComponent(sp.Skeleton);
                xialuo_01_spine.node.setPosition(endPos.originX, endPos.originY);
                xialuo_01_spine.node.active = true;
                xialuo_01_spine.setAnimation(0, "animation", false);
                xialuo_01_spine.setCompleteListener(function() {
                  xialuo_01_spine.setCompleteListener(null);
                  var xialuo_xunhuan_01_spine = colNode.getChildByName("xialuo_xunhuan_01").getComponent(sp.Skeleton);
                  xialuo_xunhuan_01_spine.node.active = true;
                  xialuo_xunhuan_01_spine.setAnimation(0, "animation", true);
                });
              }).start();
              feixingParticle = colNode.getChildByName("particle_feixing");
              feixingParticle.setPosition(startPos.x, startPos.y);
              feixingParticle.active = true;
              feixingParticle.stopAllActions();
              feixingParticle.getComponent(cc.ParticleSystem).resetSystem();
              cc.tween(feixingParticle).to(.8, {
                x: 0,
                y: 0
              }, {
                easing: "cubicIn"
              }).call(function() {
                feixingParticle.active = false;
              }).start();
              _context3.next = 21;
              return SlotsFacade.delayTime(.81);

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      fillWilds: function fillWilds() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var boxIdx, boxSpine, symbol;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              boxIdx = SlotsFacade.dm.getBoxIndex();
              boxSpine = null;
              if (!(boxIdx > 0)) {
                _context4.next = 7;
                break;
              }
              symbol = SlotsFacade.slots.GetSymbolByIdx(boxIdx);
              boxSpine = symbol.node.getChildByName("w11").getComponent(sp.Skeleton);
              _context4.next = 7;
              return _this5._fillWildsPuzzle(boxSpine);

             case 7:
              if (!SlotsFacade.dm.isCompletePuzzelWild()) {
                _context4.next = 15;
                break;
              }
              _context4.next = 10;
              return _this5._showPrePuzzelGame();

             case 10:
              _context4.next = 12;
              return _this5._releasePuzzleWilds();

             case 12:
              _this5.colWildItems.forEach(function(i) {
                i.getChildByName("xialuo_zongjiang_01").active = false;
              });
              _context4.next = 15;
              return _this5._releaseBoxWilds(boxSpine);

             case 15:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _showPrePuzzelGame: function _showPrePuzzelGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6.jinbizhongjiang1.node.active = true;
              _this6.jinbizhongjiang1.setAnimation(0, "animation", false);
              _this6.jinbizhongjiang1.setCompleteListener(function() {
                _this6.jinbizhongjiang1.setCompleteListener(null);
                _this6.jinbizhongjiang2.node.active = true;
                _this6.jinbizhongjiang2.setAnimation(0, "animation", true);
                _this6.colWildItems.forEach(function(i) {
                  var xialuo_zongjiang = i.getChildByName("xialuo_zongjiang_01").getComponent(sp.Skeleton);
                  xialuo_zongjiang.node.active = true;
                  xialuo_zongjiang.setAnimation(0, "animation", true);
                });
              });
              _context5.next = 5;
              return SlotsFacade.delayTime(1.5);

             case 5:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _fillWildsPuzzle: function _fillWildsPuzzle(boxSpine) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var cols, startPos, i, colNode, pos;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              cols = SlotsFacade.dm.getLackPuzzleWildCols();
              if (!(cols.length < 1)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("vault_coin");
              startPos = boxSpine.node.convertToWorldSpaceAR(cc.v2(0, 0));
              boxSpine.node.active = true;
              boxSpine.setAnimation(0, "animation", false);
              SlotsFacade.delayTime(.5);
              for (i = 0; i < cols.length; i++) {
                colNode = _this7.colWildItems[cols[i]];
                pos = colNode.convertToNodeSpaceAR(startPos);
                boxSpine.setAnimation(0, "animation3", false);
                _this7._playATrace(1, cols[i], pos);
              }
              _context6.next = 11;
              return SlotsFacade.delayTime(1);

             case 11:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _releasePuzzleWilds: function _releasePuzzleWilds() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var maxRound, data, i;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              maxRound = 0;
              data = SlotsFacade.dm.getSpinData().randomData.fallWilds;
              data.forEach(function(v) {
                maxRound = Math.max(maxRound, v.length);
              });
              if (!(maxRound > 0)) {
                _context7.next = 6;
                break;
              }
              _context7.next = 6;
              return SlotsFacade.delayTime(.5);

             case 6:
              i = maxRound;

             case 7:
              if (!(i > 0)) {
                _context7.next = 13;
                break;
              }
              _context7.next = 10;
              return _this8._releaseARound(i, data);

             case 10:
              i--;
              _context7.next = 7;
              break;

             case 13:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _releaseARound: function _releaseARound(round, data) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var promissArr, i;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("coin_fly");
              promissArr = [];
              for (i = 0; i < data.length; i++) data[i].length >= round && promissArr.push(_this9._releaseATrace(round, i, data[i][round - 1]));
              if (!promissArr.length) {
                _context8.next = 6;
                break;
              }
              _context8.next = 6;
              return Promise.all(promissArr);

             case 6:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      _releaseATrace: function _releaseATrace(round, colIndex, itemIndex) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var colNode, xialuoSpine, symbolItem, endPos;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              colNode = _this10.colWildItems[colIndex];
              xialuoSpine = colNode.getChildByName("xialuo_zengjia_0" + round).getComponent(sp.Skeleton);
              xialuoSpine.setAnimation(0, "animation1", false);
              symbolItem = SlotsFacade.slots.GetSymbolByIdx(itemIndex);
              endPos = colNode.convertToNodeSpaceAR(symbolItem.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              cc.tween(xialuoSpine.node).to(1, {
                x: endPos.x,
                y: endPos.y
              }).call(function() {
                xialuoSpine.node.active = false;
                symbolItem.addWild();
              }).start();
              _context9.next = 8;
              return SlotsFacade.delayTime(1.01);

             case 8:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      _releaseBoxWilds: function _releaseBoxWilds(boxSpine) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var data, i;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this11._stopFall = false;
              data = SlotsFacade.dm.getSpinData().randomData.bankWilds;
              SlotsFacade.delayTime(.5);
              i = 0;

             case 4:
              if (!(i < data.length)) {
                _context10.next = 10;
                break;
              }
              _context10.next = 7;
              return _this11._releaseABoxTrace([ data[i] ], boxSpine);

             case 7:
              i++;
              _context10.next = 4;
              break;

             case 10:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      _releaseABoxTrace: function _releaseABoxTrace(itemIndex, boxSpine) {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var symbolItem, endPos, startPos, xialuoSpine;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("coin_fly");
              boxSpine.setAnimation(0, "animation3", false);
              symbolItem = SlotsFacade.slots.GetSymbolByIdx(itemIndex);
              endPos = _this12.node.convertToNodeSpaceAR(symbolItem.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              startPos = _this12.xialuo.node.parent.convertToNodeSpaceAR(boxSpine.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              xialuoSpine = _this12.xialuo;
              xialuoSpine.node.active = true;
              xialuoSpine.node.x = startPos.x;
              xialuoSpine.node.y = startPos.y;
              cc.tween(xialuoSpine.node).to(.9, {
                x: endPos.x,
                y: endPos.y
              }).start();
              _context11.next = 12;
              return new Promise(function(res) {
                xialuoSpine.setAnimation(0, "animation1", false);
                xialuoSpine.setCompleteListener(function() {
                  xialuoSpine.setCompleteListener(null);
                  xialuoSpine.node.active = false;
                  symbolItem.addWild();
                  res();
                });
              });

             case 12:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "967f8IqTHhKu6DBAZbW6Xoj", "DoubleAgent_FlowCtrl");
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
        var freeBags = SlotsFacade.dm.getFreeBagInfo();
        if (freeBags && freeBags.currState.state > 0) {
          SlotsFacade.topCmp.SetBackLobby(false);
          SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
          SlotsFacade.collectGame.reConnectCollect(freeBags);
          return;
        }
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        if (rest > 0) {
          SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          SlotsFacade.bottomCmp.SetWin(nTotal);
          this.enterFreeGame();
        }
        SlotsFacade.slots.CanDoNextRound();
      },
      onMsgSpine: function onMsgSpine(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this.collectEnergy();

             case 2:
              _context2.next = 4;
              return SlotsFacade.extraWildCmp.fillWilds();

             case 4:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 10;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 10:
              _context2.next = 12;
              return _this.enterCollectGame();

             case 12:
              _context2.next = 14;
              return SlotsFacade.delayTime(.3);

             case 14:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context2.next = 31;
                break;
              }
              _context2.next = 17;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getScatterIndexs());

             case 17:
              _context2.next = 19;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), SlotsFacade.dm.isFistTriggerFree());

             case 19:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context2.next = 27;
                break;
              }
              SlotsFacade.slots.Backup();
              SlotsFacade.mainPanel.showSceneTransition();
              _context2.next = 24;
              return SlotsFacade.delayTime(2.5);

             case 24:
              _context2.next = 26;
              return SlotsFacade.slots.playBaoxiangJinChang();

             case 26:
              _this.enterFreeGame();

             case 27:
              _context2.next = 29;
              return SlotsFacade.delayTime(1);

             case 29:
              _context2.next = 45;
              break;

             case 31:
              if (!cc.vv.gameData.hasFree()) {
                _context2.next = 34;
                break;
              }
              _context2.next = 45;
              break;

             case 34:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context2.next = 45;
                break;
              }
              _context2.next = 37;
              return SlotsFacade.popup.showWinGold(SlotsFacade.dm.getFreeWinCoin());

             case 37:
              SlotsFacade.mainPanel.showSceneTransition();
              _context2.next = 40;
              return SlotsFacade.delayTime(1.5);

             case 40:
              _this.enterNormalGame();
              _context2.next = 43;
              return SlotsFacade.delayTime(1);

             case 43:
              _context2.next = 45;
              return new Promise(function(res) {
                var freeWin = cc.vv.gameData.GetGameTotalFreeWin();
                SlotsFacade.slots.ShowBottomWin(freeWin, freeWin, true, function() {
                  res();
                });
              });

             case 45:
              SlotsFacade.slots.CanDoNextRound();

             case 46:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        SlotsFacade.topCmp.SetBackLobby(false);
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.mainPanel.showBg(true);
        SlotsFacade.soundMgr.playBgm("free_bgm");
      },
      enterNormalGame: function enterNormalGame() {
        SlotsFacade.slots.Resume();
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.mainPanel.showBg(false);
        SlotsFacade.soundMgr.playBgm();
      },
      enterCollectGame: function enterCollectGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var energyData;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData;
              if (!(energyData && energyData.cmpInfo && energyData.cmpInfo.next_game)) {
                _context3.next = 8;
                break;
              }
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context3.next = 6;
              return SlotsFacade.collectProgress.showEnterCollectGameAni();

             case 6:
              _context3.next = 8;
              return new Promise(function(res) {
                SlotsFacade.collectGame.open(false, res);
                SlotsFacade.collectProgress.setProgress(0);
              });

             case 8:
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
              energyData = SlotsFacade.dm.energyData;
              if (!(energyData && energyData.currRoundValue)) {
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
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b805a2anrdKSYALilxT/8+w", "DoubleAgent_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        spinData: null,
        extraWildIndexs: [],
        energyData: null
      },
      init: function init(data, gameId) {
        this._super(data, gameId);
        this.energyData = this._deskInfo.energyData;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.energyData = msg.energyData;
          msg.randomData && msg.randomData.wild_idxs ? this.extraWildIndexs = msg.randomData.wild_idxs : this.extraWildIndexs = null;
        }
        this._super(msg);
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.energyData.needBetIdx;
      },
      getCollectSymbolIndexs: function getCollectSymbolIndexs() {
        var resultCards = this.getSpinData().resultCards;
        if (!resultCards || resultCards.length < 1) return [];
        var ret = [];
        resultCards.forEach(function(v, i) {
          3 == v && ret.push(i + 1);
        });
        return ret;
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
      getBoxIndex: function getBoxIndex() {
        var resultCards = this.getSpinData().resultCards;
        if (11 == resultCards[2]) return 3;
        if (11 == resultCards[7]) return 8;
        if (11 == resultCards[12]) return 13;
        if (11 == resultCards[17]) return 18;
        return 0;
      },
      getLackPuzzleWildCols: function getLackPuzzleWildCols() {
        var fallList = this.getSpinData().fallList;
        var cols = [];
        for (var i = 0; i < fallList.length; i++) fallList[i].length < 1 && cols.push(i);
        return cols;
      },
      isCompletePuzzelWild: function isCompletePuzzelWild() {
        var boxIndex = this.getBoxIndex();
        if (boxIndex) return true;
        var fallList = this.getSpinData().fallList;
        if (5 != fallList.length) return false;
        for (var i = 0; i < fallList.length; i++) if (!fallList[i].length) return false;
        return true;
      },
      getMinCollectBet: function getMinCollectBet() {
        if (this.energyData.needBetIdx > this.canBetList.length) return null;
        var ret = {
          singleBet: 0,
          mult: 0,
          line: this.currLine,
          isMax: false
        };
        var index = this.colection.needBet - 1;
        ret.singleBet = this.canBetList[index];
        ret.mult = index;
        return ret;
      },
      getCollectPercent: function getCollectPercent() {
        if (!this.energyData) return 0;
        return this.energyData.totalCoin / this.energyData.needCoins;
      },
      getFreeBagInfo: function getFreeBagInfo() {
        return this._deskInfo.freeBags;
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
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
      getBigWinType: function getBigWinType(winCoin) {
        var mul = winCoin / this.singleBet;
        var type = -1;
        mul >= 100 ? type = 5 : mul >= 80 ? type = 4 : mul >= 60 ? type = 3 : mul >= 40 ? type = 2 : mul >= 20 ? type = 1 : mul >= 10 && (type = 0);
        return type;
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  DoubleAgent_ItemsNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91d2eD96G5I+ZiisHFEmaDy", "DoubleAgent_ItemsNode");
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
    var MOVESTATUS = {
      STATUS_MOVE: 0,
      STATUS_NEEDSTOP: 1,
      STATUS_MOVEBACK: 2,
      STATUS_REST: 3,
      STATUS_STOP: 4
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0,
        callBack: null,
        gameCfg: null,
        items: [],
        itemClass: "",
        itemsContainer: null,
        itemsContainerRect: null,
        itemWidth: 0,
        itemHeight: 0,
        activeItemsContainer: null,
        col: 5,
        row: 4,
        spaceWidth: 0,
        speed: 30,
        moveBackSpace: 40,
        firstColMinRoundCount: 2,
        spaceRoundCount: 2,
        colStateInfo: null,
        canStartStop: false,
        lineActionNode: null,
        resultIds: null,
        spine_add_speed: sp.Skeleton,
        _isManualStop: false
      },
      onLoad: function onLoad() {
        this.lineActionNode = new cc.Node();
        this.lineActionNode.parent = this.node;
      },
      initColStateInfo: function initColStateInfo() {
        this.colStateInfo = {};
        for (var i = 0; i < this.col; i++) {
          var colStateInfoItem = {
            moveState: MOVESTATUS.STATUS_STOP,
            spinedRound: 0,
            needSpinRound: 1e9,
            speed: this.speed,
            needAddSpeed: false,
            hasScatter: false
          };
          this.colStateInfo[i + ""] = colStateInfoItem;
        }
      },
      resetColStateInfo: function resetColStateInfo(moveState) {
        for (var i in this.colStateInfo) {
          this.colStateInfo[i].moveState = moveState;
          this.colStateInfo[i].spinedRound = 0;
          this.colStateInfo[i].needSpinRound = 1e9;
          this.colStateInfo[i].speed = this.speed;
          this.colStateInfo[i].needAddSpeed = false;
          this.colStateInfo[i].hasScatter = false;
        }
      },
      init: function init(cb, gameCfg, itemClass) {
        this.itemClass = itemClass;
        this.itemsContainer = this.node.getChildByName("items_container");
        this.gameCfg = gameCfg;
        this.col = this.gameCfg.col;
        this.row = this.gameCfg.row;
        this.callBack = cb;
        this.itemsContainerRect = this.itemsContainer.getBoundingBox();
        this.itemWidth = (this.itemsContainerRect.width - this.spaceWidth * (this.col - 1)) / this.col;
        this.itemHeight = this.itemsContainerRect.height / this.row;
        this.activeItemsContainer = this.node.getChildByName("active_items_container");
        this.initColStateInfo();
        this._initItems();
        this._initSpine();
      },
      _initSpine: function _initSpine() {
        var spineAddSpeedNode = this.activeItemsContainer.getChildByName("spine_add_speed");
        spineAddSpeedNode && (this.spine_add_speed = spineAddSpeedNode.getComponent(sp.Skeleton));
      },
      _showAddSpeedAni: function _showAddSpeedAni(boo, colIndex) {
        if (!this.spine_add_speed) return;
        this.spine_add_speed.node.active = boo;
        if (boo) {
          this.spine_add_speed.setAnimation(0, "animation", true);
          var refNode = this.activeItemsContainer.getChildByName("active_item_" + (5 + colIndex));
          this.spine_add_speed.node.x = refNode.x;
          this._isManualStop || SlotsFacade.soundMgr.playEffect("reel_notify");
        }
      },
      _initItems: function _initItems() {
        var activeItemsContainer = this.activeItemsContainer;
        var itemCount = this.col * this.row + this.col;
        var activeItemTemplate = activeItemsContainer.getChildByName("active_item");
        for (var i = 0; i < itemCount; i++) {
          var node = new cc.Node();
          node.addComponent(cc.Sprite);
          node.parent = this.itemsContainer;
          var cmp = node.addComponent(this.itemClass);
          cmp.gameCfg = this.gameCfg;
          cmp.itemId = -1;
          cmp.rowIndex = parseInt(i / this.col);
          cmp.colIndex = parseInt(i % this.col);
          cmp.logicIndex = i;
          if (i < itemCount - this.col) {
            var activeItem = cc.instantiate(activeItemTemplate);
            activeItem.active = true;
            activeItem.parent = activeItemsContainer;
            activeItem.name = "active_item_" + i;
            cmp.initActiveNode(activeItem);
          }
          this.updateItem(cmp, -1);
          this.items.push(cmp);
        }
        for (var _i = 0; _i < itemCount; _i++) {
          var _cmp = this.items[_i];
          var nextRow = _cmp.rowIndex + 1;
          nextRow > this.row && (nextRow = 0);
          var nextIndex = nextRow * this.col + _cmp.colIndex;
          var nextRowNode = this.items[nextIndex].node;
          _cmp.node.nextRowNode = nextRowNode;
          var preRow = _cmp.rowIndex - 1;
          preRow < 0 && (preRow = this.row);
          var preIndex = preRow * this.col + _cmp.colIndex;
          var preRowNode = this.items[preIndex].node;
          _cmp.node.preRowNode = preRowNode;
        }
        this.initItemsPos();
      },
      updateItem: function updateItem(cmp, id) {
        if (id <= 0) {
          var idList = [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ];
          id = idList[parseInt(Math.random() * idList.length)];
        }
        cmp.bind(id);
      },
      fillAllItemsSpr: function fillAllItemsSpr(ids) {
        this.resultIds = ids;
        var scatterCount = 0;
        for (var i = 0; i < this.col; i++) {
          var key = i + "";
          var hasScatter = this._hasScatterInCol(i);
          this.colStateInfo[key].needAddSpeed = scatterCount >= 2;
          this.colStateInfo[key].hasScatter = hasScatter;
          hasScatter && scatterCount++;
        }
        for (var _i2 = 0; _i2 < ids.length; _i2++) this.updateItem(this.items[_i2], ids[_i2]);
      },
      initItemsPos: function initItemsPos() {
        for (var i = 0; i < this.items.length; i++) {
          var cmp = this.items[i];
          cmp.node.x = this.itemWidth * cmp.colIndex + this.spaceWidth * cmp.colIndex + this.itemWidth / 2;
          cmp.node.y = -this.itemHeight / 2 - this.itemHeight * cmp.rowIndex + this.itemsContainerRect.height;
          if (cmp.activeNode) {
            cmp.activeNode.x = cmp.node.x;
            cmp.activeNode.y = cmp.node.y;
          }
        }
      },
      _hasScatterInCol: function _hasScatterInCol(colIndex) {
        for (var i = 0; i < this.row; i++) {
          var id = this.resultIds[i * this.col + colIndex];
          if (id == this.gameCfg.scatterId) return true;
        }
        return false;
      },
      setColStop: function setColStop(colIndex) {
        SlotsFacade.soundMgr.stopEffectByName("reel_notify");
        SlotsFacade.soundMgr.playEffect("reel_stop");
        for (var i = 0; i < this.items.length; i++) if (this.items[i].colIndex == colIndex) {
          var cmp = this.items[i];
          cmp.node.x = this.itemWidth * cmp.colIndex + this.spaceWidth * cmp.colIndex + this.itemWidth / 2;
          cmp.node.y = -this.itemHeight / 2 - this.itemHeight * cmp.rowIndex + this.itemsContainerRect.height;
        }
        if (this.colStateInfo[colIndex.toString()].hasScatter) for (var _i3 = 0; _i3 < this.gameCfg.row; _i3++) {
          var index = colIndex + _i3 * this.gameCfg.col;
          var item = this.items[index];
          if (item.itemId == this.gameCfg.scatterId) {
            SlotsFacade.soundMgr.playEffect("symbol_scatter");
            item.playScatter(true);
          }
        }
        this._showAddSpeedAni(false);
        if (colIndex + 1 < this.col) {
          var colInfo = this.colStateInfo[colIndex + 1];
          if (colInfo.needAddSpeed) {
            colInfo.speed *= 2.5;
            this._showAddSpeedAni(true, colIndex + 1);
          }
        }
        if (this.isAllColSameMoveState(MOVESTATUS.STATUS_STOP) && this.callBack) {
          SlotsFacade.soundMgr.stopEffectByName("reel_notify");
          SlotsFacade.soundMgr.playEffect("reel_stop");
          this.callBack({
            evt: "complete",
            target: this
          });
        }
      },
      isAllColSameMoveState: function isAllColSameMoveState(moveState) {
        for (var i in this.colStateInfo) if (this.colStateInfo[i].moveState != moveState) return false;
        return true;
      },
      update: function update(dt) {
        for (var i = 0; i < this.items.length; i++) {
          var cmp = this.items[i];
          var colInfo = this.colStateInfo[cmp.colIndex];
          colInfo.moveState == MOVESTATUS.STATUS_MOVE ? cmp.node.y -= colInfo.speed : colInfo.moveState == MOVESTATUS.STATUS_MOVEBACK && (cmp.node.y += colInfo.speed / 6);
        }
        for (var _i4 = 0; _i4 < this.items.length; _i4++) {
          var _cmp2 = this.items[_i4];
          var _colInfo = this.colStateInfo[_cmp2.colIndex];
          if (_colInfo.moveState == MOVESTATUS.STATUS_MOVE) {
            if (this.canStartStop && 0 == _cmp2.rowIndex && _colInfo.spinedRound >= _colInfo.needSpinRound && _cmp2.node.y < this.itemsContainerRect.height - this.itemHeight / 2 - this.moveBackSpace && _cmp2.node.y > this.itemHeight + this.itemHeight / 2) {
              _colInfo.moveState = MOVESTATUS.STATUS_MOVEBACK;
              this.colChangeToMoveBack(_cmp2.colIndex);
            }
            if (_cmp2.node.y < -this.itemHeight / 2) {
              0 == _cmp2.rowIndex && _colInfo.spinedRound++;
              _cmp2.node.y = _cmp2.node.nextRowNode.y + this.itemHeight;
            }
          } else if (_colInfo.moveState == MOVESTATUS.STATUS_MOVEBACK) if (0 == _cmp2.rowIndex && _cmp2.node.y > this.itemsContainerRect.height - this.itemHeight / 2) {
            _colInfo.moveState = MOVESTATUS.STATUS_STOP;
            this.setColStop(_cmp2.colIndex);
          } else _cmp2.node.y > this.itemsContainerRect.height + this.itemHeight / 2 && (_cmp2.node.y = _cmp2.node.preRowNode.y - this.itemHeight);
        }
      },
      startMove: function startMove() {
        var _this = this;
        this.clearActiveItems();
        this.canStartStop = false;
        this._isManualStop = false;
        this.resultIds = [];
        this.resetColStateInfo(MOVESTATUS.STATUS_MOVE);
        this.scheduleOnce(function() {
          _this.playAni_xztw();
        }, .9);
      },
      toStartStop: function toStartStop(ids) {
        this.canStartStop = true;
        this.fillAllItemsSpr(ids);
        var firstColStateInfo = this.colStateInfo[0];
        var needRound = Math.max(this.firstColMinRoundCount, firstColStateInfo.spinedRound);
        firstColStateInfo.needSpinRound = needRound;
        for (var i = 1; i < this.col; i++) {
          this.colStateInfo[i].needSpinRound = this.colStateInfo[i - 1].needSpinRound + this.spaceRoundCount;
          this.colStateInfo[i].needAddSpeed && (this.colStateInfo[i].needSpinRound += 15);
        }
      },
      manualStop: function manualStop(ids) {
        this.canStartStop = true;
        this._isManualStop = true;
        this.fillAllItemsSpr(ids);
        this.initItemsPos();
        for (var i = 0; i < this.col; i++) {
          var colStateInfo = this.colStateInfo[i];
          colStateInfo.moveState != MOVESTATUS.STATUS_STOP && (this.colStateInfo[i].spinedRound = this.colStateInfo[i].needSpinRound);
        }
      },
      playLine: function playLine(lineList, playOneByOne) {
        var _this2 = this;
        this.lineActionNode.stopAllActions();
        var itemsIndex = [];
        for (var i = 0; i < lineList.length; i++) itemsIndex = itemsIndex.concat(lineList[i].indexs);
        var playAllAction = cc.callFunc(function() {
          _this2.showBorder(itemsIndex);
          _this2.showActiveItemsAni(itemsIndex);
        });
        if (playOneByOne) {
          var _cc;
          var delayAction = cc.delayTime(1.5);
          var actionArr = [ playAllAction ];
          var _loop = function _loop(_i5) {
            actionArr.push(delayAction);
            actionArr.push(cc.callFunc(function() {
              _this2.playALine(lineList[_i5].indexs);
            }));
          };
          for (var _i5 = 0; _i5 < lineList.length; _i5++) _loop(_i5);
          actionArr.push(delayAction);
          this.lineActionNode.runAction(cc.repeatForever((_cc = cc).sequence.apply(_cc, actionArr)));
        } else this.lineActionNode.runAction(playAllAction);
      },
      playALine: function playALine(lineIndex) {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.showActiveAni(false);
          item.showBorder(false);
        }
        this.showBorder(lineIndex);
        this.showActiveItemsAni(lineIndex);
      },
      showBorder: function showBorder(itemsIndex) {
        for (var i = 0; i < itemsIndex.length; i++) this.items[itemsIndex[i] - 1].showBorder(true);
      },
      showActiveItemsAni: function showActiveItemsAni(itemsIndex) {
        for (var i = 0; i < itemsIndex.length; i++) this.items[itemsIndex[i] - 1].showActiveAni(true);
      },
      clearActiveItems: function clearActiveItems() {
        this.lineActionNode.stopAllActions();
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.showActiveAni(false);
          item.showBorder(false);
          item.showStaticIcon(-1);
        }
      },
      clearBorder: function clearBorder() {
        for (var i = 0; i < this.items.length; i++) this.items[i].showBorder(false);
      },
      getItemsByIndex: function getItemsByIndex(indexs) {
        var _this3 = this;
        var ret = [];
        indexs.forEach(function(v) {
          ret.push(_this3.items[v - 1]);
        });
        return ret;
      },
      playAni_xztw: function playAni_xztw() {
        var spine = this.node.getChildByName("spine_xiangzituowei").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      playAni_bxjc: function playAni_bxjc() {},
      colChangeToMoveBack: function colChangeToMoveBack(colIndex) {
        if (2 == colIndex) {
          var index = SlotsFacade.dm.getBoxIndex();
          if (index) {
            var item = this.items[index - 1];
            var pos = item.activeNode.convertToWorldSpaceAR(cc.v2(0, 0));
            SlotsFacade.extraWildCmp.showBox(pos);
          }
        }
      },
      playScatter: function playScatter(indexs) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this4.items[element - 1];
                item.playScatter();
              });
              _context.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d64deWjmSBKIq8s1phMlG3V", "DoubleAgent_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("DoubleAgent_MainPanel");
        this.flowCtrl = this.addComponent("DoubleAgent_FlowCtrl");
        this.soundMgr = this.addComponent("DoubleAgent_Sound");
        this.extraWildCmp = this.mainPanel.extra_wild_game_node.getComponent("DoubleAgent_ExtraWildGame");
        this.collectProgress = this.mainPanel.collect_progress.getComponent("DoubleAgent_CollectProgress");
        this.collectGame = this.mainPanel.collect_game_node.getComponent("DoubleAgent_CollectGame");
        this.popup = this.mainPanel.popup.getComponent("DoubleAgent_Popup");
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
  DoubleAgent_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "690b7dpwytNRrwEiYOUZUDF", "DoubleAgent_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        character_node: cc.Node,
        slots: cc.Node,
        collect_progress: cc.Node,
        collect_game_node: cc.Node,
        extra_wild_game_node: cc.Node,
        popup: cc.Node,
        transition_node: cc.Node,
        spine_free_bg: sp.Skeleton
      },
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.spine_free_bg = this.node.getChildByName("spine_free_bg").getComponent(sp.Skeleton);
        this.character_node = this.node.getChildByName("character_node");
        this.slots = this.node.getChildByName("slots");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.collect_game_node = this.node.getChildByName("collect_game_node");
        this.extra_wild_game_node = this.slots.getChildByName("extra_wild_game_node");
        this.popup = this.node.getChildByName("popup");
        this.transition_node = this.node.getChildByName("transition_node");
        this.spineSceneTransition = this.transition_node.getChildByName("daqiangqieping").getComponent(sp.Skeleton);
      },
      showBg: function showBg(isFree) {
        this.spine_free_bg.node.active = isFree;
        var index = 0;
        isFree && (index = 1);
        this.bg.getComponent("ImgSwitchCmp").setIndex(index);
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        var _this = this;
        SlotsFacade.soundMgr.playEffect("transition_free");
        this.spineSceneTransition.node.active = true;
        this.spineSceneTransition.setAnimation(0, "skill", false);
        this.spineSceneTransition.setCompleteListener(function() {
          _this.spineSceneTransition.setCompleteListener(null);
          _this.spineSceneTransition.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5638cE3kcJK85byfX3Nf5zM", "DoubleAgent_Popup");
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
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("dialog_free_win_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label_coin").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("ok_btn");
              _context.next = 9;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("common_click");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.showBg(false);
                    Global.SlotsSoundMgr.stopBgm();
                    SlotsFacade.topCmp.SetBackLobby(true);
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
              SlotsFacade.soundMgr.playEffect("free_dialog_start_show");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("dialog_free_cnt");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label_free_cnt").getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("ok_btn");
              okBtn.active = isFirstTrigger;
              _context2.next = 10;
              return new Promise(function(res) {
                var tw = cc.tween(panel);
                tw = tw.to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                });
                if (isFirstTrigger) {
                  var handler = function handler() {
                    SlotsFacade.soundMgr.playEffect("common_click");
                    okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                    cc.tween(panel).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      _this2.showBg(false);
                      res();
                    }).start();
                  };
                  cc.vv.gameData.checkAutoPlay(okBtn, handler);
                  okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                    okBtn.stopAllActions();
                    handler();
                  });
                } else tw = tw.delay(1).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this2.showBg(false);
                  res();
                });
                tw.start();
              });

             case 10:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showCollectWinGold: function showCollectWinGold(resultdata) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, lblcoin, lblgetdesc, prizenum, totalnum, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("dialog_collect_win");
              panel.active = true;
              panel.scale = 0;
              lblcoin = panel.getChildByName("lbl_coin");
              lblgetdesc = panel.getChildByName("lbl_getdesc");
              Global.doRoallNumEff(lblcoin, 0, resultdata.winCoin, 1, null, null, 0, true);
              prizenum = Global.convertNumToShort(resultdata.prize, 1e3, 0);
              totalnum = Global.convertNumToShort(resultdata.prize * resultdata.mult, 1e3, 0);
              lblgetdesc.getComponent(cc.Label).string = cc.js.formatStr("%s X %s = %s", resultdata.mult, prizenum, totalnum);
              okBtn = panel.getChildByName("btn_collect");
              _context3.next = 14;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("common_click");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    Global.SlotsSoundMgr.stopBgm();
                    SlotsFacade.topCmp.SetBackLobby(true);
                    SlotsFacade.bottomCmp.CanDoNextRound();
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 14:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1445a9GYQRN7KWqqjGvZXXQ", "DoubleAgent_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        bg: cc.Node
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  DoubleAgent_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1d44ZEBNhEKJR2xSQi/DmK", "DoubleAgent_Slots");
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
        _delaytimes: 0
      },
      StartMove: function StartMove() {
        var _this = this;
        this._super();
        var spindata = SlotsFacade.dm.getSpinData();
        spindata && (this._delaytimes = SlotsFacade.extraWildCmp.hideWilds());
        0 == SlotsFacade.dm.GetTotalFree() && SlotsFacade.soundMgr.playBgm();
        this.scheduleOnce(function() {
          _this.playAni_xztw();
        }, .9);
      },
      StopMove: function StopMove() {
        this._super();
        SlotsFacade.extraWildCmp.showZengjiaWild(SlotsFacade.dm.getSpinData().fallList);
      },
      playAni_xztw: function playAni_xztw() {
        var spine = this.node.getChildByName("spine_xiangzituowei").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return SlotsFacade.delayTime(_this2._delaytimes);

             case 2:
              SlotsFacade.extraWildCmp.startFallWild(SlotsFacade.dm.getSpinData().fallList);
              _this2._gameInfo = msg;
              _this2.SetSlotsResult(msg.resultCards);
              _this2.SetReelStateInfo(msg.resultCards);

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
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
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this3.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context2.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
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
      clearAllSymbolAniState: function clearAllSymbolAniState() {
        for (var i = 0; i < this._reels.length; i++) {
          var symbols = this._reels[i]._symbols;
          for (var j = 0; j < symbols.length; j++) symbols[j].StartMove();
        }
      },
      playBaoxiangJinChang: function playBaoxiangJinChang() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this5.clearAllSymbolAniState();
              return _context3.abrupt("return", new Promise(function(success) {
                var num = 5;
                var reel = _this5._reels[2];
                reel._bMoving = true;
                reel._stopTime = .8 * num;
                var jinchang = function jinchang() {
                  var baoxiang = cc.find("spine_baoxianxiangjinchang", _this5.node);
                  if (num <= 0) {
                    baoxiang.active = false;
                    success();
                  } else {
                    baoxiang.scale = num % 2 == 1 ? 1 : -1;
                    SlotsFacade.dm.playSpine(baoxiang, "animation", false, function() {
                      _this5.changeSymobl();
                    });
                    _this5.scheduleOnce(function() {
                      num -= 1;
                      jinchang();
                    }, .8);
                  }
                };
                jinchang();
              }));

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      changeSymobl: function changeSymobl() {
        var symbols = this._reels[2]._symbols;
        symbols[2].changeSymboltoBaoxiang();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  DoubleAgent_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fed14ByeL9I3pQoevGy02Br", "DoubleAgent_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/DoubleAgent/",
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
      }
    });
    cc._RF.pop();
  }, {} ],
  DoubleAgent_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19e35Z09+5CUrj1pbsCznzA", "DoubleAgent_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        wildCount: 0
      },
      StartMove: function StartMove() {
        this._super();
        this.wildCount = 0;
        var wild = this.node.getChildByName("wild");
        wild.active = false;
      },
      addWild: function addWild() {
        1 != this.GetShowId() && this.ShowById(1, null);
        this.wildCount += 1;
        var wild = this.node.getChildByName("wild");
        wild.active = true;
        var spine = wild.getChildByName("spine").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation1", false);
        var wildMulti = null;
        if (1 == this.wildCount) {
          wildMulti = wild.getChildByName("wild_1").getComponent(sp.Skeleton);
          wild.getChildByName("wild_multi").active = false;
        } else {
          wildMulti = wild.getChildByName("wild_multi").getComponent(sp.Skeleton);
          wild.getChildByName("wild_1").active = false;
        }
        wildMulti.node.active = true;
        wildMulti.setAnimation(0, "animation" + this.wildCount, false);
        var wildlizibao = wild.getChildByName("wildlizibao");
        SlotsFacade.dm.playSpine(wildlizibao, "animation", false, function() {
          wildlizibao.active = false;
        });
      },
      playWild: function playWild() {
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var wild = aniNode.getChildByName("wild");
        var spine = wild.getChildByName("spine").getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation1", false);
        var wildMulti = null;
        if (1 == this.wildCount) {
          wildMulti = wild.getChildByName("wild_1").getComponent(sp.Skeleton);
          wild.getChildByName("wild_multi").active = false;
        } else {
          wildMulti = wild.getChildByName("wild_multi").getComponent(sp.Skeleton);
          wild.getChildByName("wild_1").active = false;
        }
        wildMulti.node.active = true;
        wildMulti.setAnimation(0, "animation" + this.wildCount + "_1", true);
      },
      playWinAnimation: function playWinAnimation() {
        1 == this.GetShowId() ? this.playWild() : this._super();
      },
      changeSymboltoBaoxiang: function changeSymboltoBaoxiang() {
        this._showNode && (this._showNode.active = false);
        this._id = 11;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode = cc.find(cfg.symbol[11].node, this.node);
        this._showNode.active = true;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "DoubleAgent_ButtonSafe", "DoubleAgent_Cfg", "DoubleAgent_CollectGame", "DoubleAgent_CollectProgress", "DoubleAgent_ExtraWildGame", "DoubleAgent_FlowCtrl", "DoubleAgent_GameData", "DoubleAgent_ItemsNode", "DoubleAgent_Logic", "DoubleAgent_MainPanel", "DoubleAgent_Popup", "DoubleAgent_Reel", "DoubleAgent_Slots", "DoubleAgent_Sound", "DoubleAgent_symbol" ]);