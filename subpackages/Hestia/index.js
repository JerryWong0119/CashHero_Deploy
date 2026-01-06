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
  Hestia_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acdadzEDONLObavw1rti+qY", "Hestia_Cfg");
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
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        stop_ani: {
          name: "buling",
          zIndex: 100
        },
        trigger_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "actionframe",
          zIndex: 300
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
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: ""
      }), _defineProperty(_symbol, 101, {
        node: "s101",
        win_node: "w101",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 102, {
        node: "s102",
        win_node: "w102",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 103, {
        node: "s103",
        win_node: "w103",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 104, {
        node: "s104",
        win_node: "w104",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 105, {
        node: "s105",
        win_node: "w105",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 106, {
        node: "s106",
        win_node: "w106",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Hestia_Slots",
        Reels: "Hestia_Reel",
        Symbols: "Hestia_Symbol"
      },
      col: 5,
      row: 5,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 110
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      autoModelDelay: .5,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .2
      },
      normalBgm: "music_Dragons_basegame",
      helpItems: [ "games/Hestia/prefab/help_node/LMSlots_Help_item1", "games/Hestia/prefab/help_node/LMSlots_Help_item2", "games/Hestia/prefab/help_node/LMSlots_Help_item3", "games/Hestia/prefab/help_node/LMSlots_Help_item4", "games/Hestia/prefab/help_node/LMSlots_Help_item5", "games/Hestia/prefab/help_node/LMSlots_Help_item6" ],
      commEffect: {
        path: "games/Hestia/",
        win1: [ "sound_Dragons_last_win1", "" ],
        win2: [ "sound_Dragons_last_win2", "" ]
      },
      AddAntiTime: 1.8,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Hestia/",
        reelStopSound: "sound_Dragons_reel_stop",
        symbolStopSound: [ "sound_Dragons_scatter1", "sound_Dragons_scatter2", "sound_Dragons_scatter3", "sound_Dragons_scatter4", "sound_Dragons_scatter5" ],
        antSound: "",
        antSpeed: 2e3,
        continuous: true
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Hestia_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c86c8csqxtLtJCT9sjoFktO", "Hestia_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        cc.log(deskInfo);
        this._freeGameInfo = deskInfo.freeGameInfo;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        cc.log(msg);
        if (200 == msg.code) {
          this._freeGameInfo = msg.freeGameInfo;
          this._freeWinCoin = msg.freeWinCoin;
          for (var i = 0; i < msg.resultCards.length; i++) 20 == msg.resultCards[i] && (msg.resultCards[i] = this._cfg.randomSymbols[Global.random(1, this._cfg.randomSymbols.length) - 1]);
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(scp) {
        this._popScp = scp;
      },
      getPopupScript: function getPopupScript() {
        return this._popScp;
      },
      setWheelScript: function setWheelScript(scp) {
        this._wheelScp = scp;
      },
      getWheelScript: function getWheelScript() {
        return this._wheelScp;
      },
      setPickScript: function setPickScript(scp) {
        this._pickScp = scp;
      },
      getPickScript: function getPickScript() {
        return this._pickScp;
      },
      getFreeGameInfo: function getFreeGameInfo() {
        return this._freeGameInfo;
      },
      setFreeGameInfo: function setFreeGameInfo(val) {
        this._freeGameInfo = val;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(val) {
        this._freeWinCoin = val;
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
          };
          cc.vv.NetManager.send(req, true);
          _this._subCallBack = res;
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (this._subCallBack) {
          this._subCallBack(msg);
          this._subCallBack = null;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Hestia_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16478Pywj9F8bGSiSR46Q2c", "Hestia_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Hestia_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_wheel = this.node.addComponent("Hestia_Wheel");
        script_wheel.Init();
        cc.vv.gameData.setWheelScript(script_wheel);
        var script_pick = this.node.addComponent("Hestia_Pick");
        script_pick.Init();
        cc.vv.gameData.setPickScript(script_pick);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Hestia_Pick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e954aiScQ9EpKEc8S0/7AYc", "Hestia_Pick");
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
    var FreeCntList = [ 20, 15, 10, 8, 5 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _itemList: []
      },
      start: function start() {},
      Init: function Init() {
        var _this = this;
        this._node_pick = cc.find("safe_node/node_pick", this.node);
        this._node_pick.active = false;
        var _loop = function _loop(i) {
          var item = cc.find("layout/item" + i, _this._node_pick);
          item.off("click");
          item.on("click", function() {
            _this.clickItem(i);
          });
          _this._itemList[i] = item;
        };
        for (var i = 1; i <= 6; i++) _loop(i);
        this._spr_guang = cc.find("layout/spr_guang", this._node_pick);
        this._spr_guang.active = false;
      },
      enterPick: function enterPick(bTri) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var extraFreeCnt, i, _i, add, _i2, lastItem, self;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("music_Dragons_chooseBg");
                _this2._node_pick.active = true;
                _this2.recoverAllNode();
                _this2._freeGameInfo = cc.vv.gameData.getFreeGameInfo();
                extraFreeCnt = _this2._freeGameInfo.extraFreeCnt;
                if (!bTri) {
                  _context.next = 31;
                  break;
                }
                for (i = 0; i < FreeCntList.length; i++) cc.find("freeCnt", _this2._itemList[i + 1]).getComponent(cc.Label).string = FreeCntList[i];
                if (!extraFreeCnt) {
                  _context.next = 29;
                  break;
                }
                cc.vv.gameData.GetSlotsScript().moveExtraFreeNode();
                _context.next = 11;
                return cc.vv.gameData.awaitTime(1);

               case 11:
                _i = 0;

               case 12:
                if (!(_i < FreeCntList.length)) {
                  _context.next = 26;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("sound_Dragons_extra_add");
                add = cc.find("add", _this2._itemList[_i + 1]);
                add.active = true;
                add.getComponent(cc.Animation).play("pick_add");
                cc.vv.gameData.GetSlotsScript().playExtraFreeAddAnim();
                _context.next = 20;
                return cc.vv.gameData.awaitTime(.3);

               case 20:
                cc.find("freeCnt", _this2._itemList[_i + 1]).getComponent(cc.Label).string = FreeCntList[_i] + extraFreeCnt;
                _context.next = 23;
                return cc.vv.gameData.awaitTime(.3);

               case 23:
                _i++;
                _context.next = 12;
                break;

               case 26:
                _context.next = 28;
                return cc.vv.gameData.awaitTime(.5);

               case 28:
                cc.vv.gameData.GetSlotsScript().showExtraFreeNode(false);

               case 29:
                _context.next = 32;
                break;

               case 31:
                for (_i2 = 0; _i2 < FreeCntList.length; _i2++) cc.find("freeCnt", _this2._itemList[_i2 + 1]).getComponent(cc.Label).string = extraFreeCnt ? FreeCntList[_i2] + extraFreeCnt : FreeCntList[_i2];

               case 32:
                _this2.playAwaitKuangAnim(true);
                _this2._canClick = true;
                lastItem = _this2._itemList[_this2._itemList.length - 1];
                self = _this2;
                cc.vv.gameData.checkAutoPlay(lastItem, function() {
                  self.clickItem(self._itemList.length - 1);
                });
                _this2._pickSuccess = success;

               case 38:
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
      recoverAllNode: function recoverAllNode() {
        for (var i = 1; i < this._itemList.length; i++) {
          this._itemList[i].zIndex = i;
          this._itemList[i].setScale(1);
          cc.find("win", this._itemList[i]).active = false;
          cc.find("add", this._itemList[i]) && (cc.find("add", this._itemList[i]).active = false);
        }
        this._spr_guang.zIndex = this._itemList.length + 1;
        cc.find("mask/zi2", this._itemList[6]).y = 0;
        cc.find("mask/zi3", this._itemList[6]).y = 0;
        cc.find("mask/gundong", this._itemList[6]).children.forEach(function(child) {
          child.active = false;
        });
      },
      clickItem: function clickItem(choiceId) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var reqdata, msg, zi2, zi3, gundong, freeCnt;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (_this3._canClick) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              _this3._canClick = false;
              _this3._itemList[_this3._itemList.length - 1].stopAllActions();
              _this3.playAwaitKuangAnim(false);
              reqdata = {
                rtype: 2,
                choiceId: choiceId
              };
              _context2.next = 8;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 8:
              msg = _context2.sent;
              cc.log(msg);
              if (!(200 === msg.code && !msg.spcode && 2 == msg.data.rtype)) {
                _context2.next = 43;
                break;
              }
              _this3._freeGameInfo = msg.data.freeGameInfo;
              cc.vv.gameData.setFreeGameInfo(_this3._freeGameInfo);
              if (!(6 == choiceId)) {
                _context2.next = 30;
                break;
              }
              zi2 = cc.find("mask/zi2", _this3._itemList[6]);
              zi3 = cc.find("mask/zi3", _this3._itemList[6]);
              cc.tween(zi2).to(.3, {
                y: -130
              }, {
                easing: "backIn"
              }).start();
              cc.tween(zi3).to(.3, {
                y: -130
              }, {
                easing: "backIn"
              }).start();
              _context2.next = 20;
              return cc.vv.gameData.awaitTime(.3);

             case 20:
              gundong = cc.find("mask/gundong", _this3._itemList[6]);
              cc.find("freeCnt", gundong).getComponent(cc.Label).string = _this3._freeGameInfo.config.freeCnt;
              cc.find("mult1", gundong).getComponent(cc.Label).string = "x" + _this3._freeGameInfo.config.mults[0];
              cc.find("mult2", gundong).getComponent(cc.Label).string = "x" + _this3._freeGameInfo.config.mults[1];
              cc.find("mult3", gundong).getComponent(cc.Label).string = "x" + _this3._freeGameInfo.config.mults[2];
              gundong.getComponent(cc.Animation).play("pick_gd");
              _context2.next = 28;
              return new Promise(function(success) {
                gundong.getComponent(cc.Animation).off("stop");
                gundong.getComponent(cc.Animation).on("stop", function() {
                  success();
                });
              });

             case 28:
              _context2.next = 30;
              return cc.vv.gameData.awaitTime(.5);

             case 30:
              Global.SlotsSoundMgr.playEffect("sound_Dragons_choose");
              cc.find("win", _this3._itemList[choiceId]).active = true;
              _this3._itemList[choiceId].zIndex = 20;
              cc.tween(_this3._itemList[choiceId]).to(.2, {
                scale: 1.1
              }).start();
              _context2.next = 36;
              return cc.vv.gameData.awaitTime(1);

             case 36:
              freeCnt = _this3._freeGameInfo.config.extraFreeCnt ? extraFreeCnt + _this3._freeGameInfo.config.freeCnt : _this3._freeGameInfo.config.freeCnt;
              cc.vv.gameData.SetTotalFree(freeCnt);
              cc.vv.gameData.SetFreeTime(freeCnt);
              cc.vv.gameData.setFreeWinCoin(_this3._freeGameInfo.winCoin);
              _this3._node_pick.active = false;
              Global.SlotsSoundMgr.stopBgm();
              if (_this3._pickSuccess) {
                _this3._pickSuccess();
                _this3._pickSuccess = null;
              }

             case 43:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playAwaitKuangAnim: function playAwaitKuangAnim(bPlay) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (bPlay) {
                _this4._spr_guang.active = true;
                _this4._playKuang = true;
                _this4._delayTime = 0;
                _this4._curPlayId = 1;
              } else {
                _this4._playKuang = false;
                _this4._delayTime = 0;
                _this4._curPlayId = 1;
                _this4._spr_guang.active = false;
              }

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      update: function update(dt) {
        if (this._playKuang) {
          this._delayTime += dt;
          if (this._delayTime > 1) {
            this._delayTime = 0;
            this._spr_guang.position = this._itemList[this._curPlayId].position;
            this._curPlayId = this._itemList.length == this._curPlayId + 1 ? 1 : this._curPlayId + 1;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Hestia_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8441DZDZBDzZY3673550et", "Hestia_Popup");
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
      start: function start() {},
      Init: function Init() {
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
        this._guochang1 = cc.find("guochang1", this._node_qp);
        this._guochang2 = cc.find("guochang2", this._node_qp);
        this._guochang1.active = false;
        this._guochang2.active = false;
      },
      playPanelAnim: function playPanelAnim(bShow, p_node) {
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var c_cnt, _loop, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                c_cnt = p_node.childrenCount;
                _loop = function _loop(i) {
                  var node = p_node.children[i];
                  var s_scale = node.scale;
                  if (bShow) {
                    node.active = true;
                    node.setScale(0);
                    cc.tween(node).delay(.1 * i).to(.5, {
                      scale: s_scale
                    }, {
                      easing: "backOut"
                    }).start();
                  } else cc.tween(node).delay(.1 * (c_cnt - i)).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    node.active = false;
                    node.setScale(s_scale);
                  }).start();
                };
                for (i = 0; i < c_cnt; i++) _loop(i);
                _context.next = 5;
                return cc.vv.gameData.awaitTime(.1 * c_cnt + .5);

               case 5:
                success();

               case 6:
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
      triFreeAnim: function triFreeAnim() {
        var _this = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var freeGameInfo, btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Dragons_tip");
                _this._node_popup.active = true;
                _this._node_tri_free.active = true;
                freeGameInfo = cc.vv.gameData.getFreeGameInfo();
                cc.find("freeCnt/lbl", _this._node_tri_free).getComponent(cc.Label).string = freeGameInfo.config.freeCnt;
                cc.find("wild/spr", _this._node_tri_free).getComponent("ImgSwitchCmp").setIndex(freeGameInfo.config.card - 101);
                cc.find("mult/mult1", _this._node_tri_free).getComponent(cc.Label).string = "x" + freeGameInfo.config.mults[0];
                cc.find("mult/mult2", _this._node_tri_free).getComponent(cc.Label).string = "x" + freeGameInfo.config.mults[1];
                cc.find("mult/mult3", _this._node_tri_free).getComponent(cc.Label).string = "x" + freeGameInfo.config.mults[2];
                btn = cc.find("btn", _this._node_tri_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context4.next = 14;
                return _this.playPanelAnim(true, _this._node_tri_free);

               case 14:
                self = _this;
                clickFunc = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        _context2.next = 3;
                        return self.playPanelAnim(false, self._node_tri_free);

                       case 3:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 6:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function clickFunc() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));

               case 18:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      endFreeAnim: function endFreeAnim(wincoin, freecnt) {
        var _this2 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                _this2._node_popup.active = true;
                _this2._node_end_free.active = true;
                cc.find("win/lbl", _this2._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                cc.find("freeCnt/lbl", _this2._node_end_free).getComponent(cc.Label).string = freecnt;
                btn = cc.find("btn", _this2._node_end_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context7.next = 9;
                return _this2.playPanelAnim(true, _this2._node_end_free);

               case 9:
                self = _this2;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        _context5.next = 3;
                        return self.playPanelAnim(false, self._node_end_free);

                       case 3:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 6:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function clickFunc() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 13:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x5, _x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      playGuochangAnim1: function playGuochangAnim1() {
        var _this3 = this;
        Global.SlotsSoundMgr.playEffect("sound_Dragons_guochang1");
        this._node_qp.active = true;
        this._guochang1.active = true;
        this._guochang1.getComponent(sp.Skeleton).setAnimation(0, "Dragons_guochang1", false);
        this._guochang1.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this3._guochang1.getComponent(sp.Skeleton).setCompleteListener(null);
          _this3._node_qp.active = false;
          _this3._guochang1.active = false;
        });
      },
      playGuochangAnim2: function playGuochangAnim2() {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect("sound_Dragons_guochang1");
        this._node_qp.active = true;
        this._guochang2.active = true;
        this._guochang2.getComponent(sp.Skeleton).setAnimation(0, "Dragons_guochang", false);
        this._guochang2.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this4._guochang2.getComponent(sp.Skeleton).setCompleteListener(null);
          _this4._node_qp.active = false;
          _this4._guochang2.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Hestia_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280e5O65OVO25Qx3P5eoUYC", "Hestia_Reel");
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
      start: function start() {},
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
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound[_info.stopIdx] : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
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
  Hestia_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48c15IrkgdMEKdI9hPoatDJ", "Hestia_Slots");
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
      start: function start() {},
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var freeGameInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("sound_Dragons_enter");
              freeGameInfo = cc.vv.gameData.getFreeGameInfo();
              if (!freeGameInfo) {
                _context.next = 23;
                break;
              }
              if (!(1 == freeGameInfo.state)) {
                _context.next = 15;
                break;
              }
              _context.next = 8;
              return cc.vv.gameData.getWheelScript().enterWheel();

             case 8:
              cc.vv.gameData.getPopupScript().playGuochangAnim2();
              _context.next = 11;
              return cc.vv.gameData.awaitTime(.5);

             case 11:
              _context.next = 13;
              return cc.vv.gameData.getPickScript().enterPick(true);

             case 13:
              _context.next = 15;
              return _this.triFreeGame();

             case 15:
              if (!(2 == freeGameInfo.state)) {
                _context.next = 20;
                break;
              }
              _context.next = 18;
              return cc.vv.gameData.getPickScript().enterPick(false);

             case 18:
              _context.next = 20;
              return _this.triFreeGame();

             case 20:
              3 == freeGameInfo.state && _this.ShowGameview(true);
              _context.next = 24;
              break;

             case 23:
              _this.ShowGameview(false);

             case 24:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 26:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        this._isFreeGame && this.hideFreeWildMult();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this2 = this;
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
            stateInfo.stopIdx = 0;
            var stopCnt = 0;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this2._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              if (reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous) {
                stateInfo.isStop = true;
                stateInfo.stopIdx = stopCnt;
                stopCnt += 1;
              }
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal, updateBalance, freeGameInfo, i, symbol;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(_this3._isFreeGame && _this3._gameInfo.wildMult)) {
                _context2.next = 4;
                break;
              }
              _this3.playFreeWildMult(_this3._gameInfo.wildMult);
              _context2.next = 4;
              return cc.vv.gameData.awaitTime(.5);

             case 4:
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              updateBalance = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.getFreeWinCoin();
                updateBalance = false;
              }
              _context2.next = 11;
              return new Promise(function(success, failed) {
                _this3.ShowBottomWin(nWin, nTotal, updateBalance, success);
              });

             case 11:
              freeGameInfo = _this3._gameInfo.freeGameInfo;
              if (!freeGameInfo) {
                _context2.next = 30;
                break;
              }
              if (!(1 == freeGameInfo.state)) {
                _context2.next = 30;
                break;
              }
              for (i = 0; i < freeGameInfo.scatterIdxs.length; i++) {
                symbol = _this3.GetSymbolByIdx(freeGameInfo.scatterIdxs[i]);
                symbol.playTriggerAnimation();
              }
              Global.SlotsSoundMgr.playEffect("sound_Dragons_scatter_start");
              _context2.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              cc.vv.gameData.getPopupScript().playGuochangAnim1();
              _context2.next = 21;
              return cc.vv.gameData.awaitTime(.5);

             case 21:
              _context2.next = 23;
              return cc.vv.gameData.getWheelScript().enterWheel();

             case 23:
              cc.vv.gameData.getPopupScript().playGuochangAnim2();
              _context2.next = 26;
              return cc.vv.gameData.awaitTime(.5);

             case 26:
              _context2.next = 28;
              return cc.vv.gameData.getPickScript().enterPick(true);

             case 28:
              _context2.next = 30;
              return _this3.triFreeGame();

             case 30:
              if (!(0 == _this3._gameInfo.freeCnt && _this3._gameInfo.allFreeCnt > 0)) {
                _context2.next = 35;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("sound_Dragons_freespin_over");
              _context2.next = 35;
              return _this3.endFreeGame();

             case 35:
              _this3.CanDoNextRound();

             case 36:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      triFreeGame: function triFreeGame() {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _context3.next = 2;
                return cc.vv.gameData.getPopupScript().triFreeAnim();

               case 2:
                _this4.Backup();
                _this4.ShowGameview(true);
                success();

               case 5:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      endFreeGame: function endFreeGame() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var winCoin;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                winCoin = cc.vv.gameData.getFreeWinCoin();
                _context4.next = 3;
                return cc.vv.gameData.getPopupScript().endFreeAnim(winCoin, _this5._gameInfo.allFreeCnt);

               case 3:
                cc.vv.gameData.getPopupScript().playGuochangAnim1();
                _context4.next = 6;
                return cc.vv.gameData.awaitTime(.5);

               case 6:
                _this5.Resume();
                _this5.ShowGameview(false);
                _context4.next = 10;
                return cc.vv.gameData.awaitTime(1);

               case 10:
                _context4.next = 12;
                return new Promise(function(success) {
                  cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, true, function() {
                    success();
                  });
                });

               case 12:
                success();

               case 13:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i2 = 0; _i2 < this._gameInfo.scatterZJLuXian.indexs.length; _i2++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i2];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            2 != symbol.GetShowId() && symbol.ShowKuang();
          }
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.getFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        this._isFreeGame = bFree;
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("music_Dragons_freespinbg");
          var freeGameInfo = cc.vv.gameData.getFreeGameInfo();
          var card = freeGameInfo.config.card;
          cc.find("Canvas/safe_node/spr_bg_free").getComponent("ImgSwitchCmp").setIndex(card - 101);
        }
        cc.find("Canvas/safe_node/Dragons_longtou").active = !bFree;
        cc.find("Canvas/safe_node/Dragons_longzhu").active = bFree;
        cc.find("Canvas/safe_node/Dragons_longzhu/lbl").active = false;
        var reels_bg = cc.find("reels_bg", this.node);
        reels_bg.children.forEach(function(child) {
          child.getComponent("ImgSwitchCmp") && child.getComponent("ImgSwitchCmp").setIndex(bFree ? 1 : 0);
        });
      },
      playFreeWildMult: function playFreeWildMult(mult) {
        Global.SlotsSoundMgr.playEffect("sound_Dragons_ball_multi");
        var longzhu = cc.find("Canvas/safe_node/Dragons_longzhu");
        var lbl = cc.find("lbl", longzhu);
        if (mult > 0) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = "X" + mult;
          lbl.setScale(0);
          cc.tween(lbl).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).repeatForever(cc.tween().to(.5, {
            scale: 1.2
          }).to(.3, {
            scale: 1
          })).start();
        } else lbl.active = false;
        longzhu.getComponent(sp.Skeleton).setAnimation(0, "actionframe", false);
        longzhu.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
      },
      hideFreeWildMult: function hideFreeWildMult() {
        var lbl = cc.find("Canvas/safe_node/Dragons_longzhu/lbl");
        if (lbl.active) {
          lbl.stopAllActions();
          cc.tween(lbl).to(.3, {
            scale: 2,
            opacity: 0
          }).call(function() {
            lbl.active = false;
            lbl.opacity = 255;
          }).start();
        }
      },
      showExtraFreeNode: function showExtraFreeNode(bShow, cnt) {
        var node_extra = cc.find("Canvas/safe_node/node_extrafree");
        if (bShow) {
          Global.SlotsSoundMgr.playEffect("sound_Dragons_extra_tip_show");
          node_extra.active = true;
          node_extra.position = cc.v2(0, 0);
          node_extra.setScale(1);
          cc.find("cnt", node_extra).getComponent(cc.Label).string = cnt;
          node_extra.setScale(0);
          cc.tween(node_extra).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          var light = cc.find("light", node_extra);
          light.opacity = 0;
          cc.tween(light).to(.5, {
            opacity: 255
          }).delay(.3).to(.2, {
            opacity: 0
          }).start();
        } else node_extra.active = false;
      },
      moveExtraFreeNode: function moveExtraFreeNode() {
        Global.SlotsSoundMgr.playEffect("sound_Dragons_extra_tip_move");
        var node_extra = cc.find("Canvas/safe_node/node_extrafree");
        cc.tween(node_extra).to(.5, {
          scale: .8,
          position: cc.v2(node_extra.x + 100, node_extra.y + 100)
        }).start();
      },
      playExtraFreeAddAnim: function playExtraFreeAddAnim() {
        var node_extra = cc.find("Canvas/safe_node/node_extrafree");
        var curScale = node_extra.scale;
        cc.tween(node_extra).to(.3, {
          scale: 1.2 * curScale
        }).to(.2, {
          scale: curScale
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Hestia_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08ec3NkDDZDp5whI7X5y4yd", "Hestia_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Hestia_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5928183X4ZKrZWnio2/ypRi", "Hestia_Wheel");
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
      start: function start() {},
      Init: function Init() {
        this._node_wheel = cc.find("safe_node/node_wheel", this.node);
        this._node_wheel.active = false;
        this._wheel_1 = cc.find("wheel_1", this._node_wheel);
        this._wheel_2 = cc.find("wheel_2", this._node_wheel);
        this._spr_shade = cc.find("shade", this._node_wheel);
        this._win_jp = cc.find("wheel_2/win_jp", this._node_wheel);
        Global.btnClickEvent(cc.find("btn", this._wheel_1), this.clickSpin, this);
        this._spr_spin = cc.find("spin", this._wheel_1);
        this._spr_spin.active = false;
        this._start_line = cc.find("start_line", this._wheel_1);
        this._start_line.active = true;
      },
      enterWheel: function enterWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.playBgm("music_Dragons_wheel");
                      _this._freeGameInfo = cc.vv.gameData.getFreeGameInfo();
                      _this._node_wheel.active = true;
                      _this.recoverAllNode();
                      _this._freeGameInfo.winCoin && cc.vv.gameData.GetBottomScript().SetWin(_this._freeGameInfo.winCoin);
                      _this.playAwaitSpinAnim(true);
                      _this._canClick = true;
                      cc.vv.gameData.checkAutoPlay(cc.find("btn", _this._wheel_1), _this.clickSpin.bind(_this));
                      _this._wheelSuccess = success;

                     case 9:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      recoverAllNode: function recoverAllNode() {
        cc.find("pan", this._wheel_1).angle = 0;
        cc.find("pan", this._wheel_2).angle = 0;
        cc.find("win", this._wheel_1).stopAllActions();
        cc.find("win", this._wheel_1).active = false;
        cc.find("win", this._wheel_2).stopAllActions();
        cc.find("win", this._wheel_2).active = false;
        cc.find("mult", this._wheel_2).active = false;
        this._spr_shade.active = false;
        this._win_jp.active = false;
      },
      clickSpin: function clickSpin() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var reqdata, msg, result, item, startPos, startScale, mult, multList;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (_this2._canClick) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              cc.find("btn", _this2._wheel_1).stopAllActions();
              Global.SlotsSoundMgr.playEffect("sound_Dragons_wheel_click");
              _this2._canClick = false;
              _this2.playAwaitSpinAnim(false);
              reqdata = {
                rtype: 1
              };
              _context3.next = 9;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 9:
              msg = _context3.sent;
              cc.log(msg);
              if (!(200 === msg.code && !msg.spcode && 1 == msg.data.rtype)) {
                _context3.next = 87;
                break;
              }
              _context3.next = 14;
              return _this2.playStartSpinAnim();

             case 14:
              _this2._freeGameInfo = msg.data.freeGameInfo;
              cc.vv.gameData.setFreeGameInfo(_this2._freeGameInfo);
              result = msg.data.result;
              item = result.item;
              _context3.next = 20;
              return _this2.moveWheel(_this2._wheel_1, item.id);

             case 20:
              if (!item.jackpot) {
                _context3.next = 75;
                break;
              }
              _this2._win_jp.active = true;
              cc.find("tit1/jp", _this2._win_jp).getComponent("ImgSwitchCmp").setIndex(item.jackpot.id - 1);
              cc.find("tit1", _this2._win_jp).active = true;
              cc.find("tit1/bonusWheel", _this2._win_jp).active = !!result.bonusItem;
              cc.find("tit2", _this2._win_jp).active = false;
              Global.SlotsSoundMgr.playEffect("sound_Dragons_jackpot_jump");
              Global.doRoallNumEff(cc.find("lbl", _this2._win_jp), 0, item.jackpot.value, 1.5, function() {
                Global.SlotsSoundMgr.stopEffectByName("sound_Dragons_jackpot_jump");
                Global.SlotsSoundMgr.playEffect("sound_Dragons_jackpot_over");
              }, null, 0, true);
              _this2._win_jp.setScale(0);
              cc.tween(_this2._win_jp).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context3.next = 32;
              return cc.vv.gameData.awaitTime(2);

             case 32:
              cc.find("win", _this2._wheel_1).stopAllActions();
              cc.find("win", _this2._wheel_1).active = false;
              if (!result.bonusItem) {
                _context3.next = 65;
                break;
              }
              _this2._spr_shade.active = true;
              startPos = _this2._wheel_2.position;
              startScale = _this2._wheel_2.scale;
              Global.SlotsSoundMgr.playEffect("sound_Dragons_wheel_up");
              cc.tween(_this2._wheel_2).to(.5, {
                position: cc.v2(0, -80),
                scale: .8
              }).start();
              _context3.next = 42;
              return cc.vv.gameData.awaitTime(1.5);

             case 42:
              _context3.next = 44;
              return _this2.moveWheel(_this2._wheel_2, result.bonusItem.id);

             case 44:
              mult = cc.find("mult", _this2._wheel_2);
              mult.active = true;
              multList = [ 2, 3, 5, 8, 10 ];
              mult.getComponent("ImgSwitchCmp").setIndex(multList.indexOf(result.bonusItem.mult));
              mult.setScale(0);
              cc.tween(mult).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              cc.find("tit2/jp", _this2._win_jp).getComponent("ImgSwitchCmp").setIndex(item.jackpot.id - 1);
              cc.find("tit2/lbl", _this2._win_jp).getComponent(cc.Label).string = "x" + result.bonusItem.mult;
              cc.find("tit1", _this2._win_jp).active = false;
              cc.find("tit2", _this2._win_jp).active = true;
              Global.doRoallNumEff(cc.find("lbl", _this2._win_jp), item.jackpot.value, item.jackpot.value * result.bonusItem.mult, 1, null, null, 0, true);
              _context3.next = 57;
              return cc.vv.gameData.awaitTime(1);

             case 57:
              cc.find("win", _this2._wheel_2).stopAllActions();
              cc.find("win", _this2._wheel_2).active = false;
              Global.SlotsSoundMgr.playEffect("sound_Dragons_wheel_down");
              cc.tween(_this2._wheel_2).to(.5, {
                position: startPos,
                scale: startScale
              }).start();
              _this2._spr_shade.active = false;
              _context3.next = 64;
              return cc.vv.gameData.awaitTime(.5);

             case 64:
              mult.active = false;

             case 65:
              cc.tween(_this2._win_jp).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
              cc.vv.gameData.GetBottomScript().SetWin(_this2._freeGameInfo.winCoin);
              _context3.next = 69;
              return cc.vv.gameData.awaitTime(.5);

             case 69:
              _this2.playAwaitSpinAnim(true);
              _this2._canClick = true;
              cc.vv.gameData.checkAutoPlay(cc.find("btn", _this2._wheel_1), _this2.clickSpin.bind(_this2));
              return _context3.abrupt("return");

             case 75:
              if (!(item.extraFreeCnt > 0)) {
                _context3.next = 81;
                break;
              }
              cc.vv.gameData.GetSlotsScript().showExtraFreeNode(true, item.extraFreeCnt);
              _context3.next = 79;
              return cc.vv.gameData.awaitTime(.5);

             case 79:
              _context3.next = 82;
              break;

             case 81:
              item.freeGame;

             case 82:
              Global.SlotsSoundMgr.stopBgm();
              _this2._wheelSuccess && _this2._wheelSuccess();
              _context3.next = 86;
              return cc.vv.gameData.awaitTime(.5);

             case 86:
              _this2._node_wheel.active = false;

             case 87:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      moveWheel: function moveWheel(wheel, resultIdx) {
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var pan, normalLength, normalIdx, nCir, nTotal, win;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                pan = cc.find("pan", wheel);
                normalLength = 16;
                normalIdx = resultIdx;
                nCir = 4;
                nTotal = 360 / normalLength * (normalIdx - 1) + 360 * nCir + pan.angle % 360;
                Global.SlotsSoundMgr.playEffect("sound_Dragons_wheel_zhuan");
                cc.tween(pan).by(7, {
                  angle: -nTotal
                }, {
                  easing: "quadInOut"
                }).start();
                _context4.next = 9;
                return cc.vv.gameData.awaitTime(7);

               case 9:
                Global.SlotsSoundMgr.playEffect("sound_Dragons_wheel_win");
                win = cc.find("win", wheel);
                win.active = true;
                win.opacity = 0;
                cc.tween(win).repeatForever(cc.tween().to(.3, {
                  opacity: 255
                }).delay(.2).to(.3, {
                  opacity: 0
                })).start();
                _context4.next = 16;
                return cc.vv.gameData.awaitTime(1);

               case 16:
                success();

               case 17:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      playAwaitSpinAnim: function playAwaitSpinAnim(bPlay) {
        if (bPlay) {
          this._spr_spin.active = true;
          cc.tween(this._spr_spin).repeatForever(cc.tween().to(.5, {
            scale: 1.3
          }).to(.5, {
            scale: 1
          })).start();
        } else {
          this._spr_spin.active = false;
          this._spr_spin.setScale(1);
        }
      },
      playStartSpinAnim: function playStartSpinAnim() {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var i, kuang;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _this3._start_line.active = true;
                for (i = 1; i <= 16; i++) cc.find("node_line" + i, _this3._start_line).getComponent(cc.Animation).play("wheel_line");
                kuang = cc.find("idleguang", _this3._start_line);
                kuang.active = false;
                cc.find("node_line1", _this3._start_line).getComponent(cc.Animation).off("stop");
                cc.find("node_line1", _this3._start_line).getComponent(cc.Animation).on("stop", function() {
                  kuang.active = true;
                  cc.tween(kuang).delay(.5).call(function() {
                    kuang.active = false;
                    success();
                  }).start();
                });

               case 6:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Hestia_Cfg", "Hestia_GameData", "Hestia_Logic", "Hestia_Pick", "Hestia_Popup", "Hestia_Reel", "Hestia_Slots", "Hestia_Symbol", "Hestia_Wheel" ]);