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
  Bader_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b12a6d+mU5NF6cz1nr4ei2M", "Bader_Cfg");
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
          name2: "actionframe2",
          name3: "actionframe3",
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
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: ""
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: ""
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
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: ""
      }), _symbol),
      bonusId: [ 3 ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Bader_Slots",
        Reels: "Bader_Reel",
        Symbols: "Bader_Symbol"
      },
      col: 5,
      row: 6,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 94
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
      kuang: "kuang",
      speed: 3e3,
      autoModelDelay: .5,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "music_Kangaroos_bg",
      helpItems: [ "games/Bader/prefab/help_node/LMSlots_Help_item1", "games/Bader/prefab/help_node/LMSlots_Help_item2", "games/Bader/prefab/help_node/LMSlots_Help_item3", "games/Bader/prefab/help_node/LMSlots_Help_item4" ],
      commEffect: {
        path: "games/Bader/",
        win1: [ "sound_Kangaroos_win_1", "" ],
        win2: [ "sound_Kangaroos_win_2", "" ],
        win3: [ "sound_Kangaroos_win_3", "" ],
        win4: [ "sound_Kangaroos_win_4", "" ]
      },
      AddAntiTime: 1.8,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Bader/",
        reelStopSound: "music_Kangaroos_reel_stop",
        symbolStopSound: "sound_Kangaroos_scatter_down_",
        antSound: "",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Bader_FreeWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93b17OgG2FNspm2l1WsYv8L", "Bader_FreeWheel");
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
    var WheelItemType = {
      Jackpot: 1,
      Blue: 2,
      Purple: 3,
      Red: 4,
      FreeGame: 5
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: {
          default: 1,
          tooltip: "\u65cb\u8f6c\u901f\u5ea6"
        },
        maxSpeed: {
          default: 30,
          tooltip: "\u6700\u5927\u901f\u5ea6"
        },
        count: {
          default: 3,
          tooltip: "\u9700\u8981\u8f6c\u51e0\u8f6e"
        },
        minSpeed: {
          default: 1,
          tooltip: "\u6700\u5c0f\u901f\u5ea6"
        },
        speedOffset: {
          default: .25,
          tooltip: "\u901f\u5ea6\u53d8\u5316\u503c"
        },
        _startMove: false,
        _needStop: false,
        _backMove: false,
        _resultItem: null,
        _result: null,
        _rtype: 1,
        _items: [],
        _canClick: false,
        _itemsHeight: 0
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      update: function update(dt) {
        if (this._startMove) {
          if (this._needStop) {
            this.speed -= this.speedOffset;
            this.speed <= this.minSpeed && (this.speed = this.minSpeed);
          } else {
            this.speed += this.speedOffset;
            this.speed >= this.maxSpeed && (this.speed = this.maxSpeed);
          }
          0 === this.count && this._resultItem.y <= 3 * this._resultItem.height && (this._needStop = true);
          if (this._needStop && this._resultItem.y < 0) {
            this._startMove = false;
            this._backMove = true;
          }
          var _iterator = _createForOfIteratorHelper(this._items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.y <= this._bottomPosY) {
                item.y += this._itemsHeight;
                if (item === this._resultItem) {
                  this.count--;
                  this.count <= 0 && (this.count = 0);
                }
              }
              item.y -= this.speed;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._backMove) {
          var _iterator2 = _createForOfIteratorHelper(this._items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _item = _step2.value;
              _item.y += this.minSpeed;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (this._resultItem.y > -1 && this._resultItem.y < 1) {
            this._backMove = false;
            this.exitWheelGame();
          }
        }
      },
      onSendSeq: function onSendSeq(idx) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: this._rtype
        };
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        cc.log(msg);
        if (200 === msg.code && msg.data && msg.data.rtype === this._rtype) {
          this._result = msg.data;
          this._resultItem = this._items[this._result.wheelId - 1];
          this._startMove = true;
          cc.vv.gameData.setFreeGameWheel(this._result.freeGameWheel);
        }
      },
      Init: function Init() {
        var _this = this;
        this._wheelNode = cc.find("safe_node/freeWheel", this.node);
        this._wheelNode.active = false;
        this._rollNode1 = cc.find("bg/rollNode1", this._wheelNode);
        this._rollNode2 = cc.find("bg/rollNode2", this._wheelNode);
        this._node_shou = cc.find("bg/node_shou", this._wheelNode);
        this._node_shou.active = false;
        var btn_click = cc.find("bg/btn_click", this._wheelNode);
        btn_click.off("click");
        btn_click.on("click", function() {
          btn_click.stopAllActions();
          _this.onClickSpin();
        });
      },
      onClickSpin: function onClickSpin() {
        var self = this;
        if (!self._canClick) return;
        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
        self._canClick = false;
        self.playShouAnim(false);
        self.onSendSeq();
      },
      enterFreeWheel: function enterFreeWheel(wheelData) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var curBet, needBet, parentNode, i, node, getCollectInfos, curCollectInfo, wheel, _i, cfg, _node, btn_click;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2._wheelData = wheelData;
                _this2._wheelNode.active = true;
                _this2.reset();
                curBet = cc.vv.gameData.GetBetIdx();
                needBet = cc.vv.gameData.getNeedBet();
                _this2._rollNode1.active = curBet < needBet;
                _this2._rollNode2.active = curBet >= needBet;
                parentNode = curBet < needBet ? _this2._rollNode1 : _this2._rollNode2;
                _this2._items = [];
                _this2._itemsHeight = 0;
                for (i = 0; i < parentNode.childrenCount; i++) {
                  node = cc.find("item" + (i + 1), parentNode);
                  if (node) {
                    _this2._items.push(node);
                    _this2._itemsHeight += node.height;
                  }
                }
                _this2._bottomPosY = -700;
                getCollectInfos = cc.vv.gameData.getCollectInfos();
                curCollectInfo = getCollectInfos[curBet - 1];
                wheel = wheelData.wheel;
                for (_i = 0; _i < wheel.length; _i++) {
                  cfg = wheel[_i];
                  _node = cc.find("item" + (_i + 1), parentNode);
                  if (cfg.type === WheelItemType.Blue) cc.find("node_lbls/lbl_cnt", _node).getComponent(cc.Label).string = curCollectInfo.blue.freeCnt; else if (cfg.type === WheelItemType.Purple) cc.find("node_lbls/lbl_cnt", _node).getComponent(cc.Label).string = curCollectInfo.purple.freeCnt; else if (cfg.type === WheelItemType.Red) cc.find("node_lbls/lbl_cnt", _node).getComponent(cc.Label).string = curCollectInfo.red.freeCnt; else if (cfg.type === WheelItemType.Jackpot) {
                    cc.find("tit", _node).getComponent("ImgSwitchCmp").setIndex(cfg.jackpotId - 2);
                    cc.find("lbl", _node).getComponent(cc.Label).string = Global.convertNumToShort(wheelData.jackpotValues[cfg.jackpotId - 1], null, 0);
                  }
                }
                _context.next = 18;
                return cc.vv.gameData.awaitTime(.5);

               case 18:
                _this2._canClick = true;
                _this2.playShouAnim(true);
                btn_click = cc.find("bg/btn_click", _this2._wheelNode);
                cc.vv.gameData.checkAutoPlay(btn_click, _this2.onClickSpin.bind(_this2));
                _this2._successCallback = success;

               case 23:
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
      exitWheelGame: function exitWheelGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cfg, animName, effName;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              cfg = _this3._wheelData.wheel[_this3._result.wheelId - 1];
              animName = "";
              effName = "sound_Kangaroos_reward_diamond";
              if (cfg.type === WheelItemType.Jackpot) {
                animName = "item_zs_win_jp";
                effName = "sound_Kangaroos_reward_jackpot";
              } else cfg.type === WheelItemType.Blue ? animName = "item_zs_win_blue" : cfg.type === WheelItemType.Purple ? animName = "item_zs_win_pruple" : cfg.type === WheelItemType.Red ? animName = "item_zs_win_red" : cfg.type === WheelItemType.FreeGame && (animName = "item_zs_win_normal");
              _this3._resultItem.getComponent(cc.Animation).play(animName);
              Global.SlotsSoundMgr.playEffect(effName);
              _context2.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _this3._wheelNode.active = false;
              _this3._successCallback && _this3._successCallback();

             case 10:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playShouAnim: function playShouAnim(bPlay) {
        var spr = cc.find("tip_shou", this._node_shou);
        if (bPlay) {
          this._node_shou.active = true;
          cc.tween(spr).repeatForever(cc.tween().call(function() {
            spr.setScale(1);
            spr.setPosition(cc.v2(0, -20));
          }).to(.3, {
            opacity: 255
          }).to(.8, {
            position: cc.v2(0, 160)
          }).call(function() {
            spr.setScale(-1);
            spr.setPosition(cc.v2(0, 180));
          }).to(.8, {
            position: cc.v2(0, 0)
          }).call(function() {
            spr.setScale(1);
            spr.setPosition(cc.v2(0, -20));
          }).to(.8, {
            position: cc.v2(0, 160)
          }).call(function() {
            spr.setScale(-1);
            spr.setPosition(cc.v2(0, 180));
          }).to(.8, {
            position: cc.v2(0, 0)
          }).to(.3, {
            opacity: 0
          }).delay(3)).start();
        } else {
          this._node_shou.active = false;
          spr.stopAllActions();
        }
      },
      reset: function reset() {
        this._startMove = false;
        this.speed = 10;
        this._needStop = false;
        this.count = 2;
        this._backMove = false;
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      awaitTime: function awaitTime(dt) {
        var _this4 = this;
        return new Promise(function(success, failed) {
          _this4.scheduleOnce(function() {
            success();
          }, dt);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Bader_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00cae3aEPlDLrFZthCLIOKh", "Bader_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        cc.log(deskInfo);
        this._freeGameWheel = deskInfo.freeGameWheel;
        this._storeInfo = deskInfo.storeInfo;
        this._collectInfos = deskInfo.collectInfos;
        this._watermarkInfo = deskInfo.watermarkInfo;
        deskInfo.freeGameInfo && (this._freeMult = deskInfo.freeGameInfo.mult);
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        cc.log(msg);
        if (200 == msg.code) {
          this._freeGameWheel = msg.freeGameWheel;
          this._storeInfo = msg.storeInfo;
          this._watermarkInfo = msg.watermarkInfo;
          this._wildMult = msg.wildMult;
          this._freeWinCoin = msg.freeWinCoin;
          msg.collectInfo && this.setCollectInfos(this.GetBetIdx(), msg.collectInfo);
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(scp) {
        this._popScp = scp;
      },
      getPopupScript: function getPopupScript() {
        return this._popScp;
      },
      setFreeWheelScript: function setFreeWheelScript(scp) {
        this._freeWheelScp = scp;
      },
      getFreeWheelScript: function getFreeWheelScript() {
        return this._freeWheelScp;
      },
      setStoreScript: function setStoreScript(scp) {
        this._storeScp = scp;
      },
      getStoreScript: function getStoreScript() {
        return this._storeScp;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getCollectInfos: function getCollectInfos() {
        return this._collectInfos;
      },
      setCollectInfos: function setCollectInfos(lv, info) {
        this._collectInfos[lv - 1] = info;
      },
      setStoreInfo: function setStoreInfo(val) {
        this._storeInfo = val;
      },
      getStoreInfo: function getStoreInfo() {
        return this._storeInfo;
      },
      getWatermarkInfo: function getWatermarkInfo() {
        return this._watermarkInfo;
      },
      setFreeMult: function setFreeMult(val) {
        this._freeMult = val;
      },
      getFreeMult: function getFreeMult() {
        return this._freeMult;
      },
      setFreeGameWheel: function setFreeGameWheel(val) {
        this._freeGameWheel = val;
      },
      getFreeGameWheel: function getFreeGameWheel() {
        return this._freeGameWheel;
      },
      getWildMult: function getWildMult() {
        return this._wildMult;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Bader_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09a74l96Z5KfLvcadE25ZYT", "Bader_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Bader_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_freeWheel = this.node.addComponent("Bader_FreeWheel");
        script_freeWheel.Init();
        cc.vv.gameData.setFreeWheelScript(script_freeWheel);
        var script_store = this.node.addComponent("Bader_StoreGame");
        script_store.Init();
        cc.vv.gameData.setStoreScript(script_store);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Bader_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e35bRUoMxKYpNS7gfk75eG", "Bader_Popup");
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
        this._node_tri_superFree = cc.find("node_tri_superFree", this._node_popup);
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_tri_free_again = cc.find("node_tri_free_again", this._node_popup);
        this._node_win_jp = cc.find("node_win_jp", this._node_popup);
        this._node_tri_superFree.active = false;
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_tri_free_again.active = false;
        this._node_win_jp.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
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
      playTriSuperFreeAnim: function playTriSuperFreeAnim(freeCnt, curPage) {
        var _this = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_super_freespin");
                _this._node_popup.active = true;
                _this._node_tri_superFree.active = true;
                cc.find("spr_up", _this._node_tri_superFree).getComponent("ImgSwitchCmp").setIndex(curPage - 1);
                cc.find("spr_down", _this._node_tri_superFree).getComponent("ImgSwitchCmp").setIndex(curPage - 1);
                btn = cc.find("btn", _this._node_tri_superFree);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context4.next = 10;
                return _this.playPanelAnim(true, _this._node_tri_superFree);

               case 10:
                self = _this;
                clickFunc = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
                        btn.getComponent(cc.Button).interactable = false;
                        _context2.next = 4;
                        return self.playPanelAnim(false, self._node_tri_superFree);

                       case 4:
                        self._node_popup.active = false;
                        self._node_tri_superFree.active = false;
                        success();

                       case 7:
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

               case 14:
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
      playTriFreeAnim: function playTriFreeAnim(freecnt, mult) {
        var _this2 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
                _this2._node_popup.active = true;
                _this2._node_tri_free.active = true;
                cc.find("spr_kuang/lbl", _this2._node_tri_free).getComponent(cc.Label).string = freecnt;
                cc.find("allpays", _this2._node_tri_free).opacity = mult >= 2 ? 255 : 0;
                mult >= 2 && cc.find("allpays/spr", _this2._node_tri_free).getComponent("ImgSwitchCmp").setIndex(mult - 2);
                btn = cc.find("btn", _this2._node_tri_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context7.next = 11;
                return _this2.playPanelAnim(true, _this2._node_tri_free);

               case 11:
                self = _this2;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
                        btn.getComponent(cc.Button).interactable = false;
                        _context5.next = 4;
                        return self.playPanelAnim(false, self._node_tri_free);

                       case 4:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 7:
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

               case 15:
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
      playTriFreeAgainAnim: function playTriFreeAgainAnim(freecnt) {
        var _this3 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
                _this3._node_popup.active = true;
                _this3._node_tri_free_again.active = true;
                cc.find("spr_kuang/lbl", _this3._node_tri_free_again).getComponent(cc.Label).string = freecnt;
                _context8.next = 6;
                return _this3.playPanelAnim(true, _this3._node_tri_free_again);

               case 6:
                _context8.next = 8;
                return cc.vv.gameData.awaitTime(1.5);

               case 8:
                _context8.next = 10;
                return _this3.playPanelAnim(false, _this3._node_tri_free_again);

               case 10:
                _this3._node_popup.active = false;
                _this3._node_tri_free_again.active = false;
                success();

               case 13:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      playEndFreeAnim: function playEndFreeAnim(wincoin, freecnt) {
        var _this4 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
                _this4._node_popup.active = true;
                _this4._node_end_free.active = true;
                cc.find("spr_kuang/lbl", _this4._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                cc.find("cnts/lbl", _this4._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(freecnt);
                btn = cc.find("btn", _this4._node_end_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context11.next = 10;
                return _this4.playPanelAnim(true, _this4._node_end_free);

               case 10:
                self = _this4;
                clickFunc = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
                        btn.getComponent(cc.Button).interactable = false;
                        _context9.next = 4;
                        return self.playPanelAnim(false, self._node_end_free);

                       case 4:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function clickFunc() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 14:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x9, _x10) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playWinJpAnim: function playWinJpAnim(wincoin, jpidx) {
        var _this5 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("");
                _this5._node_popup.active = true;
                _this5._node_win_jp.active = true;
                cc.find("spr_jp", _this5._node_win_jp).getComponent("ImgSwitchCmp").setIndex(jpidx - 2);
                cc.find("spr_kuang/lbl", _this5._node_win_jp).getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                btn = cc.find("btn", _this5._node_win_jp);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context14.next = 10;
                return _this5.playPanelAnim(true, _this5._node_win_jp);

               case 10:
                self = _this5;
                clickFunc = function() {
                  var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
                        btn.getComponent(cc.Button).interactable = false;
                        _context12.next = 4;
                        return self.playPanelAnim(false, self._node_win_jp);

                       case 4:
                        self._node_popup.active = false;
                        self._node_win_jp.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context12.stop();
                      }
                    }, _callee12);
                  }));
                  return function clickFunc() {
                    return _ref13.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));

               case 14:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x11, _x12) {
            return _ref12.apply(this, arguments);
          };
        }());
      },
      playQpAnim: function playQpAnim() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var spine;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("sound_Kangaroos_run");
              _this6._node_qp.active = true;
              spine = cc.find("kangaroo", _this6._node_qp);
              spine.getComponent(sp.Skeleton).setAnimation(0, "idle2", false);
              _context15.next = 6;
              return cc.vv.gameData.awaitTime(2);

             case 6:
              _this6._node_qp.active = false;

             case 7:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Bader_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "924b9iwBxtEd4e6RTOgH+aP", "Bader_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      InItPoolList: function InItPoolList() {
        var _this = this;
        this._super();
        var _loop = function _loop(i) {
          var item = _this._poolList[i].node;
          item.active = false;
          item.opacity = 0;
          var moveT = .5;
          var delayT = 4.5;
          cc.tween(item).delay(i * (moveT + delayT)).repeatForever(cc.tween().call(function() {
            item.active = true;
            item.position = cc.v2(-50, 0);
          }).to(moveT, {
            position: cc.v2(0, 0),
            opacity: 255
          }).delay(delayT).to(moveT, {
            position: cc.v2(50, 0),
            opacity: 0
          }).delay(delayT * (_this._poolList.length - 1) + moveT)).start();
        };
        for (var i = 0; i < this._poolList.length; i++) _loop(i);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Bader_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d25ebHqTGBEALq3amq5OF3h", "Bader_Reel");
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
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound + (this._reelIdx + 1) : "";
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
  Bader_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee29eYhV1lD/ILtML/dUBhp", "Bader_Slots");
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
      properties: {},
      start: function start() {},
      Init: function Init() {
        this._node_sm = cc.find("node_shuoming", this.node);
        this._node_zsCnt = cc.find("node_zsCnt", this.node);
        this._node_freeCnt = cc.find("node_freeCnt", this.node);
        this._node_diamond = cc.find("Canvas/safe_node/node_diamond");
        this._super();
        this.showShuomingSpr();
        this.showZhuanshiCnt();
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var freeGameWheel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("music_Kangaroos_enter");
              freeGameWheel = cc.vv.gameData.getFreeGameWheel();
              if (!freeGameWheel) {
                _context.next = 9;
                break;
              }
              _context.next = 7;
              return _this.triFreeWheelGame(true);

             case 7:
              _context.next = 10;
              break;

             case 9:
              cc.vv.gameData.GetTotalFree() > 0 ? _this.ShowGameview(true) : _this.ShowGameview(false);

             case 10:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        this._isFreeGame && this.showFreeCnt();
      },
      getRandomVal: function getRandomVal() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        return cfg.randomSymbols[randIdx - 1];
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var cnts = [];
        var idxs = [];
        var watermarkInfo = this._gameInfo.watermarkInfo;
        if (watermarkInfo) {
          cnts = watermarkInfo.cnts;
          idxs = watermarkInfo.idxs;
        }
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          20 == cards[i] && (cards[i] = this.getRandomVal());
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            idxs.includes(i + 1) && (res.data.cnt = cnts[idxs.indexOf(i + 1)]);
            this._gameInfo.currDiamond && this._gameInfo.currDiamond.idx == i + 1 && (res.data.diamond = this._gameInfo.currDiamond);
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
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var watermarkInfo, nWin, nTotal, updateBalance, freeGameWheel, freeInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              watermarkInfo = _this2._gameInfo.watermarkInfo;
              if (!(watermarkInfo && watermarkInfo.totalCnt > 0)) {
                _context2.next = 5;
                break;
              }
              cc.vv.gameData.getStoreScript().flyJiaobiao();
              _context2.next = 5;
              return cc.vv.gameData.awaitTime(.5);

             case 5:
              if (!_this2._gameInfo.currDiamond) {
                _context2.next = 8;
                break;
              }
              _context2.next = 8;
              return _this2.addDiamond();

             case 8:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              updateBalance = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.getFreeWinCoin();
                _this2.showFreeWin(false, nTotal);
                updateBalance = false;
              }
              _context2.next = 15;
              return new Promise(function(success, failed) {
                _this2.ShowBottomWin(nWin, nTotal, updateBalance, success);
              });

             case 15:
              freeGameWheel = _this2._gameInfo.freeGameWheel;
              if (!freeGameWheel) {
                _context2.next = 19;
                break;
              }
              _context2.next = 19;
              return _this2.triFreeWheelGame(false);

             case 19:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0 && _this2._gameInfo.allFreeCnt != _this2._gameInfo.freeCnt)) {
                _context2.next = 23;
                break;
              }
              _context2.next = 23;
              return _this2.triFreeGameAgain();

             case 23:
              if (!(0 == _this2._gameInfo.freeCnt && _this2._gameInfo.allFreeCnt > 0)) {
                _context2.next = 26;
                break;
              }
              _context2.next = 26;
              return _this2.endFreeGame();

             case 26:
              _this2.CanDoNextRound();

             case 27:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      addDiamond: function addDiamond() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var idx, type, nameList, animList, endNodeList, symbol, s_pos, e_node, e_pos, fab_name, node_zs, spN, entry;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                idx = _this3._gameInfo.currDiamond.idx;
                type = _this3._gameInfo.currDiamond.type;
                nameList = [ "diamond_blue", "diamond_purple", "diamond_red" ];
                animList = [ "zs_stop_b", "zs_stop_p", "zs_stop_r" ];
                endNodeList = [ "pos_b", "pos_p", "pos_r" ];
                symbol = _this3.GetSymbolByIdx(idx);
                symbol.showDiamond();
                s_pos = _this3._node_diamond.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                e_node = cc.find(endNodeList[type - 1], _this3._node_zsCnt);
                e_pos = _this3._node_diamond.convertToNodeSpaceAR(e_node.convertToWorldSpaceAR(cc.v2(0, 0)));
                fab_name = nameList[type - 1];
                node_zs = cc.instantiate(cc.vv.gameData.GetPrefabByName(fab_name));
                node_zs.parent = _this3._node_diamond;
                node_zs.active = true;
                node_zs.position = s_pos;
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_diamond_1");
                spN = node_zs.getChildByName("spine").getComponent(sp.Skeleton);
                spN.setAnimation(0, "animation1", false);
                spN.addAnimation(0, "animation", true);
                _context3.next = 21;
                return cc.vv.gameData.awaitTime(1);

               case 21:
                cc.tween(node_zs).to(.5, {
                  position: e_pos
                }).start();
                _context3.next = 24;
                return cc.vv.gameData.awaitTime(.5);

               case 24:
                _this3.showZhuanshiCnt();
                entry = spN.setAnimation(0, "animation2", false);
                spN.setTrackCompleteListener(entry, function() {
                  spN.setTrackCompleteListener(entry, null);
                  node_zs.destroy();
                });
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_diamond_2");
                success();

               case 29:
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
      triFreeGameAgain: function triFreeGameAgain() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var freeInfo, i, symbol;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                freeInfo = _this4._gameInfo.freeResult.freeInfo;
                for (i = 0; i < freeInfo.scatterIdx.length; i++) {
                  symbol = _this4.GetSymbolByIdx(freeInfo.scatterIdx[i]);
                  symbol && symbol.playTriggerAnimation();
                }
                Global.SlotsSoundMgr.playEffect("music_Kangaroos_trriger_scatter");
                _context4.next = 5;
                return cc.vv.gameData.awaitTime(2);

               case 5:
                _context4.next = 7;
                return cc.vv.gameData.getPopupScript().playTriFreeAgainAnim(freeInfo.freeCnt);

               case 7:
                success();

               case 8:
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
      triFreeWheelGame: function triFreeWheelGame(bReconnect) {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var result, i, symbol, freeCnt, mult;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                result = cc.vv.gameData.getFreeGameWheel();
                if (bReconnect) {
                  _context5.next = 9;
                  break;
                }
                for (i = 0; i < result.scatterIdx.length; i++) {
                  symbol = _this5.GetSymbolByIdx(result.scatterIdx[i]);
                  symbol && symbol.playTriggerAnimation();
                }
                Global.SlotsSoundMgr.playEffect("music_Kangaroos_trriger_scatter");
                _context5.next = 6;
                return cc.vv.gameData.awaitTime(2);

               case 6:
                cc.vv.gameData.getPopupScript().playQpAnim();
                _context5.next = 9;
                return cc.vv.gameData.awaitTime(2);

               case 9:
                _context5.next = 11;
                return cc.vv.gameData.getFreeWheelScript().enterFreeWheel(result);

               case 11:
                result = cc.vv.gameData.getFreeGameWheel();
                if (!result.jackpot) {
                  _context5.next = 19;
                  break;
                }
                _context5.next = 15;
                return cc.vv.gameData.getPopupScript().playWinJpAnim(result.jackpot.value, result.jackpot.id);

               case 15:
                cc.vv.gameData.AddCoin(result.jackpot.value);
                _this5._topScript.ShowCoinByRoll();
                _context5.next = 33;
                break;

               case 19:
                if (!result.freeInfo) {
                  _context5.next = 33;
                  break;
                }
                freeCnt = result.freeInfo.freeCnt;
                mult = result.freeInfo.mult;
                cc.vv.gameData.SetFreeTime(freeCnt);
                cc.vv.gameData.SetTotalFree(freeCnt);
                cc.vv.gameData.setFreeMult(mult);
                _this5.Backup();
                _this5.ShowGameview(true);
                cc.vv.gameData.getPopupScript().playQpAnim();
                _context5.next = 30;
                return cc.vv.gameData.awaitTime(2);

               case 30:
                _context5.next = 32;
                return cc.vv.gameData.getPopupScript().playTriFreeAnim(freeCnt, mult);

               case 32:
                Global.SlotsSoundMgr.playBgm("music_Kangaroos_freespin_bg");

               case 33:
                success();

               case 34:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      endFreeGame: function endFreeGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var winCoin;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                winCoin = cc.vv.gameData.getFreeWinCoin();
                _context6.next = 4;
                return cc.vv.gameData.getPopupScript().playEndFreeAnim(winCoin, _this6._gameInfo.allFreeCnt);

               case 4:
                cc.vv.gameData.getPopupScript().playQpAnim();
                _context6.next = 7;
                return cc.vv.gameData.awaitTime(1);

               case 7:
                _this6.showZhuanshiCnt();
                _this6.ShowGameview(false);
                _this6.Resume();
                _context6.next = 12;
                return cc.vv.gameData.awaitTime(2);

               case 12:
                _context6.next = 14;
                return new Promise(function(sucess, failed) {
                  _this6.ShowBottomWin(winCoin, winCoin, true, sucess);
                });

               case 14:
                success();

               case 15:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      showZhuanshiCnt: function showZhuanshiCnt() {
        var infos = cc.vv.gameData.getCollectInfos();
        var curBet = cc.vv.gameData.GetBetIdx();
        var curInfo = infos[curBet - 1];
        cc.find("lbl_4", this._node_zsCnt).getComponent(cc.Label).string = curInfo.red.freeCnt;
        cc.find("lbl_3", this._node_zsCnt).getComponent(cc.Label).string = curInfo.purple.freeCnt;
        cc.find("lbl_2", this._node_zsCnt).getComponent(cc.Label).string = curInfo.blue.freeCnt;
      },
      showShuomingSpr: function showShuomingSpr() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        cc.find("zi1", this._node_sm).active = curBet >= needBet;
        cc.find("zi2", this._node_sm).active = curBet < needBet;
        cc.find("par_shuoming", this._node_sm).active = false;
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var zi1 = cc.find("zi1", this._node_sm);
        var zi2 = cc.find("zi2", this._node_sm);
        var par = cc.find("par_shuoming", this._node_sm);
        if (curBet >= needBet && zi2.active) {
          Global.SlotsSoundMgr.playEffect("");
          par.active = true;
          par.getComponent(cc.ParticleSystem).resetSystem();
          zi1.active = true;
          zi2.active = false;
          cc.tween(zi1).to(.3, {
            scale: 1.1
          }).to(.2, {
            scale: 1
          }).start();
        } else if (curBet < needBet && zi1.active) {
          Global.SlotsSoundMgr.playEffect("");
          par.active = true;
          par.getComponent(cc.ParticleSystem).resetSystem();
          zi1.active = false;
          zi2.active = true;
          cc.tween(zi2).to(.3, {
            scale: 1.1
          }).to(.2, {
            scale: 1
          }).start();
        }
        this.showZhuanshiCnt();
      },
      showFreeCnt: function showFreeCnt() {
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        cc.find("zi/curCnt", this._node_freeCnt).getComponent(cc.Label).string = total - rest;
        cc.find("zi/totalCnt", this._node_freeCnt).getComponent(cc.Label).string = total;
      },
      showFreeWin: function showFreeWin(init, winCoin) {
        var lbl = cc.find("lbl_win", this._node_freeCnt);
        if (init) lbl.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin); else {
          var s_num = Global.FormatCommaNumToNum(lbl.getComponent(cc.Label).string);
          Global.doRoallNumEff(lbl, s_num, winCoin, 1, null, null, 0, true);
        }
      },
      showFreeMult: function showFreeMult(mult) {
        var spr = cc.find("spr_mult", this._node_freeCnt);
        var zi = cc.find("zi", this._node_freeCnt);
        if (mult >= 2) {
          spr.active = true;
          zi.position = cc.v2(30, spr.y);
          spr.getComponent("ImgSwitchCmp").setIndex(mult - 2);
        } else {
          spr.active = false;
          zi.position = cc.v2(0, spr.y);
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("Canvas/safe_node/kangaroo").active = !bFree;
        this._node_zsCnt.active = !bFree;
        this._node_sm.active = !bFree;
        this._node_freeCnt.active = bFree;
        this._isFreeGame = bFree;
        cc.vv.gameData.setIsFreeGame(bFree);
        if (bFree) {
          this.showFreeCnt();
          this.showFreeWin(true, cc.vv.gameData.getFreeWinCoin());
          this.showFreeMult(cc.vv.gameData.getFreeMult());
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Bader_StoreGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32290fj6Z5NIox62cKsfEkA", "Bader_StoreGame");
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
    var itemType = {
      lock: 1,
      canClick: 2,
      freeClick: 3,
      unClick: 4,
      coin: 5,
      again: 6
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _rtype: 2,
        _itemList: [],
        _repick: false
      },
      start: function start() {},
      Init: function Init() {
        this._btn_entrance = cc.find("safe_node/slots/btn_entrance", this.node);
        this._btn_entrance.off("click");
        Global.btnClickEvent(this._btn_entrance, this.onClickEntranceBtn, this);
        this._fly_jiaobiao = cc.find("par_fly", this._btn_entrance);
        this._fly_jiaobiao.active = false;
        this._node_store = cc.find("safe_node/node_store", this.node);
        this._node_store.active = false;
        this._layout = cc.find("layout", this._node_store);
        this._btn_close = cc.find("layout/btn_close", this._node_store);
        Global.btnClickEvent(this._btn_close, this.onClickCloseBtn, this);
        this._node_items = cc.find("layout/node_items", this._node_store);
        for (var i = 1; i <= 9; i++) {
          var item = cc.find("item" + i, this._node_items);
          item.off("click");
          Global.btnClickEvent(item, this.onClickItem, this);
          this._itemList[i] = {
            node: item,
            type: 1,
            data: null
          };
        }
        this._par_sj = cc.find("layout/par_sj", this._node_store);
        this._par_sj.active = false;
        this._box_tip = cc.find("layout/box_tip", this._node_store);
        this._box_tip.active = false;
        var btn_left = cc.find("layout/btn_left", this._node_store);
        Global.btnClickEvent(btn_left, this.clickLeftBtn, this);
        var btn_right = cc.find("layout/btn_right", this._node_store);
        Global.btnClickEvent(btn_right, this.clickRightBtn, this);
        this.updateCurMoney();
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onClickEntranceBtn: function onClickEntranceBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        Global.SlotsSoundMgr.playEffect("");
        this._btn_entrance.getComponent(cc.Button).interactable = false;
        this.openStorePage();
      },
      openStorePage: function openStorePage() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("sound_Kangaroos_shop_bgm");
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this._node_store.active = true;
                _this._layout.setScale(0);
                cc.tween(_this._layout).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this._storeInfo = cc.vv.gameData.getStoreInfo();
                _this._curPage = _this._storeInfo.unlockPage;
                _this._repick = _this._storeInfo.repick;
                _this.updateCurMoney();
                _this.showTitleSpr();
                _this.showAllItems();
                _this.showPageFooter();
                _context.next = 14;
                return cc.vv.gameData.awaitTime(.5);

               case 14:
                _this._canClickItem = true;
                success();

               case 16:
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
      closeStorePage: function closeStorePage() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      cc.tween(_this2._layout).to(.5, {
                        opacity: 0,
                        scale: 0
                      }).start();
                      _context2.next = 4;
                      return cc.vv.gameData.awaitTime(.5);

                     case 4:
                      _this2._btn_entrance.getComponent(cc.Button).interactable = true;
                      _this2._node_store.active = false;
                      _this2._layout.opacity = 255;
                      success();

                     case 8:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onClickCloseBtn: function onClickCloseBtn() {
        if (!this._canClickItem) return;
        Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_btnclose");
        this.closeStorePage();
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
      },
      flyJiaobiao: function flyJiaobiao() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var watermarkInfo, cnts, idxs, totalCnt, self, spr, _loop, i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              watermarkInfo = cc.vv.gameData.getWatermarkInfo();
              cnts = watermarkInfo.cnts;
              idxs = watermarkInfo.idxs;
              totalCnt = watermarkInfo.totalCnt;
              Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_collectcoins_1");
              self = _this3;
              spr = cc.find("spr", _this3._btn_entrance);
              _loop = function _loop(i) {
                var jiaobiao = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idxs[i]).getJiaobiao();
                jiaobiao.active = false;
                var flyNode = cc.instantiate(_this3._fly_jiaobiao);
                flyNode.active = true;
                flyNode.parent = _this3._fly_jiaobiao.parent;
                flyNode.position = flyNode.parent.convertToNodeSpaceAR(jiaobiao.convertToWorldSpaceAR(cc.v2(0, 0)));
                var lbl = cc.find("jiaobiao/lbl", flyNode);
                lbl.getComponent(cc.Label).string = cnts[i];
                var endPos = flyNode.parent.convertToNodeSpaceAR(spr.convertToWorldSpaceAR(cc.v2(0, 0)));
                cc.tween(flyNode).to(.3, {
                  scale: .8
                }).to(.2, {
                  scale: 1
                }).parallel(cc.tween().to(.5, {
                  position: endPos,
                  opacity: 0
                }), cc.tween().call(function() {
                  cc.tween(lbl).to(.5, {
                    opacity: 0
                  }).start();
                })).call(function() {
                  flyNode.destroy();
                  cc.tween(spr).to(.3, {
                    scale: 1.3
                  }).to(.2, {
                    scale: 1
                  }).start();
                }).start();
              };
              for (i = 0; i < idxs.length; i++) _loop(i);
              _context4.next = 11;
              return cc.vv.gameData.awaitTime(.5);

             case 11:
              Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_collectcoins_2");
              _this3.updateCurMoney(totalCnt);

             case 13:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      updateCurMoney: function updateCurMoney(addCnt) {
        this._storeInfo = cc.vv.gameData.getStoreInfo();
        var lbl_money = cc.find("lbl", this._btn_entrance);
        if (addCnt) {
          var curCnt = Global.FormatCommaNumToNum(lbl_money.getComponent(cc.Label).string);
          Global.doRoallNumEff(lbl_money, curCnt, this._storeInfo.watermarkCnt, .5, null, null, 0, true);
        } else lbl_money.getComponent(cc.Label).string = Global.FormatNumToComma(this._storeInfo.watermarkCnt);
        var lbl = cc.find("layout/money_bg/lbl", this._node_store);
        lbl.getComponent(cc.Label).string = Global.FormatNumToComma(this._storeInfo.watermarkCnt);
      },
      showTitleSpr: function showTitleSpr(bPlay) {
        var _this4 = this;
        var spr_content = cc.find("layout/spr_content", this._node_store);
        bPlay ? cc.tween(spr_content).to(.3, {
          opacity: 0
        }).call(function() {
          spr_content.getComponent("ImgSwitchCmp").setIndex(_this4._curPage - 1);
        }).to(.3, {
          opacity: 255
        }).start() : spr_content.getComponent("ImgSwitchCmp").setIndex(this._curPage - 1);
      },
      showAllItems: function showAllItems() {
        var pageData = this._storeInfo.unlockItems[this._curPage - 1];
        var pagePrice = this._storeInfo.pageDetails[this._curPage - 1].price;
        for (var i = 1; i <= 9; i++) {
          var item = this._itemList[i].node;
          var type = this._itemList[i].type;
          var data = this._itemList[i].data;
          if (this._curPage <= this._storeInfo.unlockPage) {
            var itemData = this.getItemData(i, pageData);
            if (itemData) if (1 == itemData.type) {
              type = itemType.coin;
              data = itemData.coin;
            } else 2 == itemData.type && (type = itemType.again); else if (this._curPage == this._storeInfo.unlockPage && this._repick) {
              type = itemType.freeClick;
              data = pagePrice;
            } else if (pagePrice <= this._storeInfo.watermarkCnt) {
              type = itemType.canClick;
              data = pagePrice;
            } else {
              type = itemType.unClick;
              data = pagePrice;
            }
          } else {
            type = itemType.lock;
            data = pagePrice;
          }
          this.setItemState(item, type, data);
          this._itemList[i].type = type;
          this._itemList[i].data = data;
        }
      },
      getItemData: function getItemData(idx, pageData) {
        for (var i = 0; i < pageData.length; i++) if (idx == pageData[i].idx) return pageData[i];
        return null;
      },
      setItemState: function setItemState(item, type, data) {
        var spr_fangge = cc.find("spr_fangge", item);
        var spr_fanggedi = cc.find("spr_fanggedi", item);
        var spr_shade = cc.find("spr_shade", item);
        var spr_again = cc.find("spr_pickagain", item);
        var spr_suo = cc.find("spr_suo", item);
        var money_bg = cc.find("money_bg", item);
        var lbl = cc.find("lbl", item);
        spr_fangge.active = type === itemType.lock || type === itemType.canClick || type === itemType.unClick || type === itemType.freeClick;
        type === itemType.canClick || type === itemType.freeClick ? spr_fangge.getComponent(cc.Animation).play("box_sg") : spr_fangge.getComponent(cc.Animation).stop();
        spr_fanggedi.active = type === itemType.coin || type === itemType.again;
        spr_shade.active = type === itemType.lock || type === itemType.unClick;
        spr_again.active = type === itemType.again;
        spr_again.active && this._repick ? cc.tween(spr_again).repeatForever(cc.tween().to(.3, {
          scale: 1.2
        }).to(.3, {
          scale: 1
        })).start() : spr_again.stopAllActions();
        spr_suo.active = type === itemType.lock;
        money_bg.active = type === itemType.canClick || type === itemType.unClick || type === itemType.lock;
        money_bg.active && (cc.find("lbl", money_bg).getComponent(cc.Label).string = Global.FormatNumToComma(data));
        lbl.active = type === itemType.coin;
        lbl && (lbl.getComponent(cc.Label).string = Global.formatNumShort(data, 0));
      },
      getAgainItem: function getAgainItem() {
        for (var i = 1; i <= 9; i++) if (this._itemList[i].type == itemType.again) return this._itemList[i].node;
        return null;
      },
      onClickItem: function onClickItem(event) {
        if (!this._canClickItem) return;
        var idx = Number(event.node.name.substring("item".length));
        var curType = this._itemList[idx].type;
        if (curType === itemType.lock || curType === itemType.unClick) this.playBoxTipAnim(event.node); else if (curType === itemType.canClick || curType === itemType.freeClick) {
          Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_start");
          this._canClickItem = false;
          this.onSendSeq(idx);
        }
      },
      onSendSeq: function onSendSeq(idx) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: this._rtype,
          pageId: this._curPage,
          choiceId: idx
        };
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var data = msg.data;
        200 === msg.code && data && data.rtype == this._rtype && this.showClickResult(data);
      },
      showClickResult: function showClickResult(data) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var result, idx, i, freeCnt;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this5._storeInfo = data.storeInfo;
              cc.vv.gameData.setStoreInfo(_this5._storeInfo);
              _this5.updateCurMoney();
              result = data.result;
              idx = data.choiceId;
              _context5.next = 7;
              return _this5.setItemResult(idx, result);

             case 7:
              if (!_this5._repick && _this5._storeInfo.pageDetails[_this5._curPage - 1].price > _this5._storeInfo.watermarkCnt) for (i = 1; i <= 9; i++) if (_this5._itemList[i].type === itemType.canClick) {
                _this5._itemList[i].type = itemType.unClick;
                _this5.setItemState(_this5._itemList[i].node, itemType.unClick, _this5._itemList[i].data);
              }
              if (!result.pageReward) {
                _context5.next = 29;
                break;
              }
              _context5.next = 11;
              return cc.vv.gameData.awaitTime(1);

             case 11:
              _context5.next = 13;
              return _this5.closeStorePage();

             case 13:
              if (!result.pageReward) {
                _context5.next = 27;
                break;
              }
              freeCnt = result.pageReward.freeCnt;
              cc.vv.gameData.SetTotalFree(freeCnt);
              cc.vv.gameData.SetFreeTime(freeCnt);
              cc.log("this._curPage:", _this5._curPage);
              _context5.next = 20;
              return cc.vv.gameData.getPopupScript().playTriSuperFreeAnim(freeCnt, _this5._curPage);

             case 20:
              cc.vv.gameData.getPopupScript().playQpAnim();
              _context5.next = 23;
              return cc.vv.gameData.awaitTime(1);

             case 23:
              cc.vv.gameData.GetSlotsScript().ShowGameview(true);
              _context5.next = 26;
              return cc.vv.gameData.awaitTime(1);

             case 26:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 27:
              _context5.next = 30;
              break;

             case 29:
              _this5._canClickItem = true;

             case 30:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      setItemResult: function setItemResult(idx, data) {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var item, spr_fangge, spr_fanggedi, spr_shade, spr_again, spr_suo, money_bg, lbl, again_item, endPos, rollData, i, _i;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_loop");
                item = _this6._itemList[idx].node;
                spr_fangge = cc.find("spr_fangge", item);
                spr_fanggedi = cc.find("spr_fanggedi", item);
                spr_shade = cc.find("spr_shade", item);
                spr_again = cc.find("spr_pickagain", item);
                spr_suo = cc.find("spr_suo", item);
                money_bg = cc.find("money_bg", item);
                lbl = cc.find("lbl", item);
                cc.tween(money_bg).to(.3, {
                  opacity: 0
                }).call(function() {
                  money_bg.active = false;
                  money_bg.opacity = 255;
                }).start();
                _context6.next = 12;
                return cc.vv.gameData.awaitTime(.3);

               case 12:
                cc.tween(spr_fangge).to(.2, {
                  scaleX: -1
                }).to(.2, {
                  scaleX: 1
                }).to(.2, {
                  scaleX: -1
                }).to(.2, {
                  scaleX: 1
                }).to(.2, {
                  scaleX: -.5,
                  scaleY: .5
                }).to(.2, {
                  scaleX: 0,
                  scaleY: 0
                }).call(function() {
                  spr_fangge.active = false;
                  spr_fangge.setScale(1);
                }).start();
                _context6.next = 15;
                return cc.vv.gameData.awaitTime(1.2);

               case 15:
                spr_fanggedi.active = true;
                spr_fanggedi.setScale(0);
                cc.tween(spr_fanggedi).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                if (!(data.coin > 0)) {
                  _context6.next = 41;
                  break;
                }
                lbl.active = true;
                lbl.getComponent(cc.Label).string = Global.formatNumShort(data.coin / (_this6._repick ? 2 : 1), 0);
                lbl.setScale(0);
                cc.tween(lbl).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                if (!_this6._repick) {
                  _context6.next = 35;
                  break;
                }
                _context6.next = 26;
                return cc.vv.gameData.awaitTime(.5);

               case 26:
                again_item = _this6.getAgainItem();
                _this6._par_sj.active = true;
                _this6._par_sj.position = _this6._par_sj.parent.convertToNodeSpaceAR(again_item.convertToWorldSpaceAR(cc.v2(0, 0)));
                endPos = _this6._par_sj.parent.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
                cc.tween(_this6._par_sj).to(.5, {
                  position: endPos
                }).start();
                _context6.next = 33;
                return cc.vv.gameData.awaitTime(.5);

               case 33:
                _this6._par_sj.active = false;
                lbl.getComponent(cc.Label).string = Global.formatNumShort(data.coin, 0);

               case 35:
                rollData = {
                  lblCoin: cc.find(Global.INGAME_COIN_LABEL_NODE_PATH),
                  addCoin: data.coin
                };
                Global.FlyCoin(lbl, cc.find(Global.INGAME_COIN_NODE_PATH), null, rollData);
                _this6._itemList[idx].type = itemType.coin;
                if (_this6._repick) {
                  _this6._repick = false;
                  for (i = 1; i <= 9; i++) if (_this6._itemList[i].type === itemType.freeClick) {
                    _this6._itemList[i].type = itemType.canClick;
                    _this6.setItemState(_this6._itemList[i].node, itemType.canClick, _this6._itemList[i].data);
                  } else _this6._itemList[i].type === itemType.again && _this6.setItemState(_this6._itemList[i].node, _this6._itemList[i].type, _this6._itemList[i].data);
                }
                _context6.next = 42;
                break;

               case 41:
                if (data.mult > 1) {
                  spr_again.active = true;
                  cc.tween(spr_again).repeatForever(cc.tween().to(.3, {
                    scale: 1.2
                  }).to(.3, {
                    scale: 1
                  })).start();
                  lbl.setScale(0);
                  cc.tween(lbl).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                  _this6._itemList[idx].type = itemType.again;
                  _this6._repick = true;
                  for (_i = 1; _i <= 9; _i++) if (_this6._itemList[_i].type === itemType.canClick) {
                    _this6._itemList[_i].type = itemType.freeClick;
                    _this6.setItemState(_this6._itemList[_i].node, itemType.freeClick, _this6._itemList[_i].data);
                  }
                }

               case 42:
                _context6.next = 44;
                return cc.vv.gameData.awaitTime(.5);

               case 44:
                Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_over");
                success();

               case 46:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playBoxTipAnim: function playBoxTipAnim(node) {
        var _this7 = this;
        this._box_tip.stopAllActions();
        if (this._box_tip.active) this._box_tip.runAction(cc.sequence(cc.scaleTo(this._box_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this7._box_tip.active = false;
        }))); else {
          this._box_tip.position = this._box_tip.parent.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
          this._box_tip.active = true;
          this._box_tip.setScale(0);
          this._box_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this7._box_tip.active = false;
          })));
        }
      },
      showPageFooter: function showPageFooter() {
        for (var i = 1; i <= 5; i++) {
          var choosed = cc.find(cc.js.formatStr("layout/choose_bg/choose%s/choosed", i), this._node_store);
          choosed.active = i === this._curPage;
        }
      },
      clickLeftBtn: function clickLeftBtn() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (_this8._canClickItem) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              _this8._canClickItem = false;
              _this8._curPage <= 1 ? _this8._curPage = 5 : _this8._curPage--;
              _this8.refreshDataWithAction(20);
              _this8.showPageFooter();
              _context7.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _this8._canClickItem = true;

             case 9:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      clickRightBtn: function clickRightBtn() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (_this9._canClickItem) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              _this9._canClickItem = false;
              _this9._curPage >= 5 ? _this9._curPage = 1 : _this9._curPage++;
              _this9.refreshDataWithAction(-20);
              _this9.showPageFooter();
              _context8.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _this9._canClickItem = true;

             case 9:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var i, item;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_btnnextpage");
              if (0 != deltaX) {
                _this10._node_items.stopAllActions();
                _this10._node_items.x = 0;
                _this10._node_items.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
                _this10.showTitleSpr(true);
              }
              _this10.showAllItems();
              for (i = 1; i <= 9; i++) {
                item = _this10._itemList[i].node;
                item.setScale(.1);
                item.stopAllActions();
                item.runAction(cc.scaleTo(.1 * i, 1, 1).easing(cc.easeBackOut()));
              }

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
  Bader_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce58c6Bx81KIrRTyOh7LR/y", "Bader_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.showJiaobiao();
        this.showDiamond();
        if (this._isResume) this._isResume = false; else if (data) {
          data.cnt && this.showJiaobiao(data.cnt);
          data.diamond && this.showDiamond(data.diamond);
        }
      },
      showJiaobiao: function showJiaobiao(val) {
        var node_jiaobiao = cc.find("jiaobiao", this.node);
        if (val) {
          node_jiaobiao.active = true;
          cc.find("lbl", node_jiaobiao).getComponent(cc.Label).string = val;
        } else node_jiaobiao.active = false;
      },
      getJiaobiao: function getJiaobiao() {
        return cc.find("jiaobiao", this.node);
      },
      showDiamond: function showDiamond(data) {
        cc.find("zs_blue", this.node).active = data && 1 == data.type;
        cc.find("zs_purple", this.node).active = data && 2 == data.type;
        cc.find("zs_red", this.node).active = data && 3 == data.type;
      },
      Resume: function Resume(backup) {
        this._isResume = true;
        this.stopWinTweenAction();
        this._super(backup);
      },
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var animName = cfg.symbol[id].win_ani.name;
              if (1 == id) {
                var mult = cc.vv.gameData.getWildMult();
                2 == mult ? animName = cfg.symbol[id].win_ani.name2 : 3 == mult && (animName = cfg.symbol[id].win_ani.name3);
              }
              nodeSp.setAnimation(0, animName, true);
            }
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Bader_Cfg", "Bader_FreeWheel", "Bader_GameData", "Bader_Logic", "Bader_Popup", "Bader_PrizePool", "Bader_Reel", "Bader_Slots", "Bader_StoreGame", "Bader_Symbol" ]);