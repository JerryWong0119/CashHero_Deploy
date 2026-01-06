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
  TheLegendOfDragon_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f0d7/xTLBA6oR1bEnITiMr", "TheLegendOfDragon_Cfg");
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
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7"
      }), _defineProperty(_symbol, 8, {
        node: "s8"
      }), _defineProperty(_symbol, 9, {
        node: "s9"
      }), _defineProperty(_symbol, 10, {
        node: "s10"
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 200
        },
        stop_ani: {
          name: "animation",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation1",
          zIndex: 300
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
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheLegendOfDragon_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "TheLegendOfDragon_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "TheLegendOfDragon_Symbol",
      symbolSize: {
        width: 126,
        height: 100
      },
      randomSymbols: [ 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10 ],
      kuang: "TheLegendOfDragon_Kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      normalBgm: "base/base_bgm",
      helpItems: [ "games/TheLegendOfDragon/prefab/help/HelpPage1", "games/TheLegendOfDragon/prefab/help/HelpPage2", "games/TheLegendOfDragon/prefab/help/HelpPage3", "games/TheLegendOfDragon/prefab/help/HelpPage4", "games/TheLegendOfDragon/prefab/help/HelpPage5", "games/TheLegendOfDragon/prefab/help/HelpPage6", "games/TheLegendOfDragon/prefab/help/HelpPage7", "games/TheLegendOfDragon/prefab/help/HelpPage8" ],
      commEffect: {
        path: "games/TheLegendOfDragon/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      autoModelDelay: .8,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 11 ],
        mini: 3,
        counts: [ 1, 0, 1, 0, 1 ],
        antiNode: "node_anti",
        path: "games/TheLegendOfDragon/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheLegendOfDragon_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37933LZV0RJN6oLoGOE6Kwo", "TheLegendOfDragon_Collect");
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
        _roles: [],
        _boxes: [],
        _lblNum: null,
        _lblNum2: null,
        _store: null,
        _progress: null,
        _reduce: null,
        _prize_x2: null,
        _lack_ingot_tip: null,
        _islock: false,
        _idx: 1,
        _processing: false,
        _reopen: false
      },
      onLoad: function onLoad() {
        this._idx = cc.vv.gameData.getDragonIdx();
        this.showRole(this._idx);
        this._progress = cc.find("safe_node/slots/collect_progress", this.node);
        this._progress.on("click", this.onClickShowStore.bind(this));
        this._store = cc.find("safe_node/collect_game", this.node);
        this._lblNum = cc.find("bg/lbl_num", this._progress).getComponent(cc.Label);
        this._lblNum2 = cc.find("layout/money_bg/lbl_money", this._store).getComponent(cc.Label);
        this.refreshIngotNum();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      start: function start() {
        this.initStore();
        this.onEventTotalbetUpdated();
      },
      refreshIngotNum: function refreshIngotNum() {
        var num = cc.vv.gameData.getIngot();
        this._lblNum.string = Global.FormatNumToComma(num);
        this._lblNum2.string = Global.FormatNumToComma(num);
      },
      _isCdOk: function _isCdOk(node, cdTime) {
        cdTime = cdTime || 500;
        var t = new Date().getTime();
        if (!node.time || t - node.time >= cdTime) {
          var btn = node.getComponent(cc.Button);
          if (btn) {
            btn.interactable = false;
            btn.scheduleOnce(function() {
              btn.interactable = true;
            }, cdTime / 1e3);
          }
          node.time = t;
          return true;
        }
        return false;
      },
      initStore: function initStore() {
        var _this = this;
        var btnClose = cc.find("layout/btn_close", this._store);
        btnClose.on("click", this.onBtnClose.bind(this));
        var btnLeft = cc.find("layout/btn_left", this._store);
        btnLeft.on("click", function() {
          _this._isCdOk(btnLeft) && _this.onBtnLeft();
        });
        var btnRight = cc.find("layout/btn_right", this._store);
        btnRight.on("click", function() {
          _this._isCdOk(btnRight) && _this.onBtnRight();
        });
        for (var i = 1; i <= 9; i++) {
          var box = cc.find("layout/box_bg/item" + i, this._store);
          box.on("click", this.onBtnBox.bind(this));
          this._boxes[i] = {
            node: box,
            icon: box.getChildByName("icon"),
            spine: box.getChildByName("spine"),
            moneybg: box.getChildByName("money_bg"),
            lblcoin: cc.find("lbl_wincoin", box).getComponent(cc.Label),
            lblprice: cc.find("money_bg/lbl_money", box).getComponent(cc.Label)
          };
        }
        this.refreshData();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var islock = cc.vv.gameData.GetBetIdx() < cc.vv.gameData.getUnlockIdx();
        if (islock != this._islock) {
          this._islock = islock;
          if (islock) {
            this._progress.getChildByName("lock").getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
            Global.TheLegendOfDragon.playEffect("base/lock");
          } else {
            this._progress.getChildByName("lock").getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            Global.TheLegendOfDragon.playEffect("base/unlock");
          }
        }
      },
      onDropItem: function onDropItem(itemid, didx) {
        cc.vv.gameData.addItem(didx, itemid);
        var atlas_store = cc.vv.gameData.GetAtlasByName("coins_store");
        var atlas_base = cc.vv.gameData.GetAtlasByName("base");
        if (didx == this._idx) {
          var item = cc.find("layout/material_bg/item_" + itemid, this._store);
          if (item) {
            var material = item.getChildByName("material");
            material.active = true;
            material.getComponent(cc.Sprite).spriteFrame = atlas_store.getSpriteFrame("theme177_collect_material" + didx + "_" + itemid);
            item.getChildByName("text").active = true;
          }
        }
        var prompt = cc.find("safe_node/slots/collect_prompt", this.node);
        prompt.getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame("theme177_collect_prompt_" + itemid);
        prompt.getChildByName("material").getComponent(cc.Sprite).spriteFrame = atlas_store.getSpriteFrame("theme177_collect_material" + didx + "_" + itemid);
        prompt.scale = .1;
        prompt.position = cc.v2(0, 0);
        prompt.active = true;
        cc.tween(prompt).to(.4, {
          scale: 1
        }, {
          easing: "backInOut"
        }).delay(.8).to(.05, {
          scale: 1.05
        }).to(.35, {
          scale: 0,
          position: cc.v2(-220, 280)
        }).start();
      },
      hide: function hide() {
        if (true == this._store.active) {
          this._store.active = false;
          cc.vv.gameData.GetBottomScript().ShowInputMask(false);
        }
      },
      onClickShowStore: function onClickShowStore() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        this.showStore();
      },
      showStore: function showStore() {
        if (this._islock) {
          var unlockidx = cc.vv.gameData.getUnlockIdx();
          cc.vv.gameData.GetBottomScript().SetBetIdx(unlockidx);
        } else {
          this._store.active = true;
          this._processing = false;
          this._reopen = false;
          this.refreshData();
          var layout = this._store.getChildByName("layout");
          layout.stopAllActions();
          layout.scale = .5;
          layout.runAction(cc.scaleTo(.25, 1));
          Global.TheLegendOfDragon.playEffect("shop/shop_show");
          cc.vv.gameData.GetBottomScript().ShowInputMask(true);
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        }
      },
      onBtnClose: function onBtnClose() {
        Global.TheLegendOfDragon.playEffect("shop/shop_close");
        if (this._processing) return;
        cc.vv.gameData.setDragonIdx(this._idx);
        this.showRole(this._idx);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: cc.vv.gameData.getGameId()
        };
        req.data = {
          rtype: 3,
          didx: this._idx
        };
        cc.vv.NetManager.send(req, true);
        this.hide();
        Global.TheLegendOfDragon.Slots.CanDoNextRound();
      },
      showRole: function showRole(idx) {
        for (var i = 1; i <= 6; i++) {
          var role = cc.find("safe_node/roles/role" + i, this.node);
          role.active = i == idx;
        }
      },
      setBoxAnim: function setBoxAnim(box, state) {
        if ("null" == state) box.spine.active = false; else {
          box.spine.active = true;
          var ske = box.spine.getComponent(sp.Skeleton);
          if ("unopen" == state) ske.setAnimation(0, "animation1", true); else if ("opening" == state) ske.setAnimation(0, "animation", false); else if ("locked" == state) ske.setAnimation(0, "animation2", false); else if ("locking" == state) ske.setAnimation(0, "animation1_1", false); else if ("unlocking" == state) {
            ske.setAnimation(0, "animation2_1", false);
            ske.addAnimation(0, "animation1", true);
          }
        }
      },
      showBoxInfo: function showBoxInfo(box, chest) {
        box.icon.active = true;
        box.moneybg.active = false;
        var atlas = cc.vv.gameData.GetAtlasByName("coins_store");
        if (1 == chest.tp) {
          box.lblcoin.string = Global.convertNumToShort(chest.coin, 1e3, 0);
          box.icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_collect_bg3");
        } else if (2 == chest.tp) {
          box.lblcoin.string = "";
          box.icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_collect_logo1");
        } else if (3 == chest.tp) {
          box.lblcoin.string = "";
          box.icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_collect_logo2");
        }
      },
      refreshData: function refreshData() {
        var data = cc.vv.gameData;
        var dragon = cc.vv.gameData.getDragon(this._idx);
        var atlas = cc.vv.gameData.GetAtlasByName("coins_store");
        var title = cc.find("layout/title_bg/title", this._store);
        title.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_collect_name" + this._idx);
        for (var i = 1; i <= 5; i++) {
          var item = cc.find("layout/material_bg/item_" + i, this._store);
          var has = data.hasItem(this._idx, i);
          var material = item.getChildByName("material");
          material.active = has;
          has && (material.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_collect_material" + this._idx + "_" + i));
          item.color = has ? cc.Color.WHITE : cc.color(96, 96, 96, 255);
          item.getChildByName("text").color = has ? cc.Color.WHITE : cc.color(96, 96, 96, 255);
        }
        var levelBg = cc.find("layout/level_bg", this._store);
        var lblLv = levelBg.getChildByName("lbl_lv").getComponent(cc.Label);
        lblLv.string = "" + dragon.lv;
        for (var _i = 1; _i <= 5; _i++) levelBg.getChildByName("lv" + _i).active = _i <= dragon.lv;
        var characterBg = cc.find("layout/character_bg", this._store);
        for (var _i2 = 1; _i2 <= 6; _i2++) {
          var character = characterBg.getChildByName("spine" + _i2);
          character.active = _i2 == this._idx;
          if (_i2 == this._idx) {
            cc.log("dragon", dragon, dragon.lock);
            character.color = 0 == dragon.lock ? cc.Color.WHITE : cc.Color.GRAY;
            characterBg.getChildByName("lock").active = 0 != dragon.lock;
          }
        }
        for (var _i3 = 1; _i3 <= 6; _i3++) cc.find("layout/choose_bg/choose" + _i3 + "/choosed", this._store).active = _i3 == this._idx;
        for (var _i4 = 1; _i4 <= 9; _i4++) {
          var chest = data.getChest(this._idx, _i4);
          var box = this._boxes[_i4];
          if (0 == chest.tp) {
            box.icon.active = false;
            box.moneybg.active = true;
            box.lblcoin.string = "";
            box.lblprice.string = Global.FormatNumToComma(chest.price);
            var price = chest.price;
            data.hasItem(this._idx, 5) && (price -= 200);
            data.getIngot() >= price && !data.isChestLocked(this._idx, _i4) ? this.setBoxAnim(box, "unopen") : this.setBoxAnim(box, "locked");
          } else {
            this.showBoxInfo(box, chest);
            this.setBoxAnim(box, "null");
          }
        }
        var lock2 = cc.find("layout/lock_lv2", this._store);
        lock2.active = dragon.lv < 2;
        dragon.lv < 2 && lock2.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        var lock4 = cc.find("layout/lock_lv4", this._store);
        lock4.active = dragon.lv < 4;
        dragon.lv < 4 && lock4.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
        this.refreshIngotNum();
      },
      doExchangeAction: function doExchangeAction(node, deltaX) {
        node.stopAllActions();
        node.x = 0;
        node.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this2 = this;
        this.scheduleOnce(function() {
          _this2.refreshData();
        }, .15);
        this.doExchangeAction(cc.find("layout/title_bg", this._store), deltaX);
        this.doExchangeAction(cc.find("layout/character_bg", this._store), deltaX);
        this.doExchangeAction(cc.find("layout/box_bg", this._store), deltaX);
      },
      onBtnLeft: function onBtnLeft() {
        Global.TheLegendOfDragon.playEffect("shop/shop_click");
        if (this._processing) return;
        this._idx = this._idx - 1;
        this._idx < 1 && (this._idx = 6);
        this.refreshDataWithAction(-20);
      },
      onBtnRight: function onBtnRight() {
        Global.TheLegendOfDragon.playEffect("shop/shop_click");
        if (this._processing) return;
        this._idx = this._idx + 1;
        this._idx > 6 && (this._idx = 1);
        this.refreshDataWithAction(20);
      },
      showLackIngot: function showLackIngot(node) {
        this._lack_ingot_tip || (this._lack_ingot_tip = cc.find("layout/lack_ingot_tip", this._store));
        this._lack_ingot_tip.active = true;
        this._lack_ingot_tip.stopAllActions();
        var wp = node.convertToWorldSpaceAR(cc.v2(0, 60));
        this._lack_ingot_tip.position = this._lack_ingot_tip.parent.convertToNodeSpaceAR(wp);
        this._lack_ingot_tip.scale = 0;
        this._lack_ingot_tip.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(2), cc.scaleTo(.5, 0)));
      },
      onBtnBox: function onBtnBox(event) {
        if (this._processing) return;
        for (var i = 1; i <= 9; i++) if (event.node == this._boxes[i].node) {
          cc.log("buy box", this._idx, i);
          var data = cc.vv.gameData;
          var dragon = data.getDragon(this._idx);
          if (0 != dragon.lock) return;
          if (data.isChestLocked(this._idx, i)) return;
          var chest = data.getChest(this._idx, i);
          if (0 != chest.tp) return;
          var price = chest.price;
          data.hasItem(this._idx, 5) && (price -= 200);
          if (data.getIngot() < price) {
            this.showLackIngot(event.node);
            return;
          }
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: cc.vv.gameData.getGameId()
          };
          req.data = {
            rtype: 2,
            didx: this._idx,
            cidx: i
          };
          cc.vv.NetManager.send(req);
          this._processing = true;
          break;
        }
      },
      Sleep: function Sleep(time) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this3.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showOpenBox: function showOpenBox(cidx, chest, dec_ingot, prize_x2) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var box, wp, price, coin, _wp;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              box = _this4._boxes[cidx];
              if (!dec_ingot) {
                _context2.next = 12;
                break;
              }
              _this4._reduce || (_this4._reduce = cc.find("layout/reduce", _this4._store));
              _this4._reduce.active = true;
              wp = box.node.convertToWorldSpaceAR(cc.v2(0, -40));
              _this4._reduce.position = _this4._reduce.parent.convertToNodeSpaceAR(wp);
              _this4._reduce.active = true;
              _this4._reduce.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context2.next = 10;
              return _this4.Sleep(.5);

             case 10:
              price = box.lblprice.string;
              box.lblprice.string = Global.FormatNumToComma(parseInt(price) - 200);

             case 12:
              _this4.setBoxAnim(box, "opening");
              Global.TheLegendOfDragon.playEffect("shop/open");
              _context2.next = 16;
              return _this4.Sleep(.5);

             case 16:
              if (!prize_x2) {
                _context2.next = 29;
                break;
              }
              coin = chest.coin;
              chest.coin = Math.floor(coin / 2);
              _this4.showBoxInfo(box, chest);
              _context2.next = 22;
              return _this4.Sleep(1);

             case 22:
              _this4._prize_x2 || (_this4._prize_x2 = cc.find("layout/prize_x2", _this4._store));
              _this4._prize_x2.active = true;
              _wp = box.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _this4._prize_x2.position = _this4._prize_x2.parent.convertToNodeSpaceAR(_wp);
              _this4._prize_x2.active = true;
              _this4._prize_x2.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              chest.coin = coin;

             case 29:
              _context2.next = 31;
              return _this4.Sleep(.5);

             case 31:
              _this4.showBoxInfo(box, chest);

             case 32:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsgBuyBox: function onMsgBuyBox(msg) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var data, freeCnt;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!(0 != msg.spcode)) {
                _context3.next = 3;
                break;
              }
              _this5._processing = false;
              return _context3.abrupt("return");

             case 3:
              data = cc.vv.gameData;
              data.setDragonLv(msg.didx, msg.lv);
              msg.unlock_didx > 0 && data.unlockDragon(msg.unlock_didx);
              data.updateChest(msg.didx, msg.cidx, msg.chest.tp, msg.chest.coin);
              data.setIngot(msg.num);
              if (msg.reset) {
                data.resetChests(msg.didx, msg.chests);
                data.resetItems(msg.didx, msg.items);
              }
              _context3.next = 11;
              return _this5.showOpenBox(msg.cidx, msg.chest, msg.dec_ingot, msg.prize_x2);

             case 11:
              _context3.next = 13;
              return _this5.Sleep(1);

             case 13:
              msg.reset && Global.TheLegendOfDragon.playEffect("shop/level_up");
              _this5.refreshData();
              if (1 == msg.chest.tp) {
                cc.vv.gameData.GetBottomScript().SetWin(msg.chest.coin);
                cc.vv.gameData.AddCoin(msg.chest.coin);
                cc.vv.gameData.GetTopScript().ShowCoin();
              } else if (2 == msg.chest.tp) {
                _this5._reopen = true;
                freeCnt = msg.free.cnt;
                cc.vv.gameData.SetFreeTime(freeCnt);
                cc.vv.gameData.SetTotalFree(freeCnt);
                Global.TheLegendOfDragon.Pop.showFreeStart(freeCnt, true, msg.free.inc_wild);
              } else if (3 == msg.chest.tp) {
                _this5._reopen = true;
                Global.TheLegendOfDragon.Pop.showPickStart(msg.pick);
              }
              _this5._processing = false;

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        200 == msg.code && (2 == msg.data.rtype ? this.onMsgBuyBox(msg.data) : 3 == msg.data.rtype && cc.log("choose dragon", msg.data.didx));
      }
    });
    cc._RF.pop();
  }, {} ],
  TheLegendOfDragon_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38fbf7GzbVE3IWTOBpRH5xS", "TheLegendOfDragon_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _collect: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._collect = this._deskInfo.collect;
      },
      isFirstTriggerFree: function isFirstTriggerFree() {
        return this.GetFreeTime() > 0 && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getPickState: function getPickState() {
        if (this._gameInfo.pick) return this._gameInfo.pick.state;
        return 0;
      },
      getCollectData: function getCollectData() {
        return this._collect;
      },
      getDragonIdx: function getDragonIdx() {
        return this._collect.didx;
      },
      getDragon: function getDragon(didx) {
        return this._collect.dragons[didx - 1];
      },
      setDragonIdx: function setDragonIdx(didx) {
        this._collect.didx = didx;
      },
      getUnlockIdx: function getUnlockIdx() {
        return this._collect.unlockidx;
      },
      getIngot: function getIngot() {
        return this._collect.num;
      },
      setIngot: function setIngot(num) {
        this._collect.num = num;
      },
      modifyIngot: function modifyIngot(num) {
        this._collect.num += num;
      },
      addItem: function addItem(didx, itemid) {
        this.hasItem(didx, itemid) || this._collect.dragons[didx - 1].items.push(itemid);
      },
      hasItem: function hasItem(didx, itemid) {
        return this._collect.dragons[didx - 1].items.indexOf(itemid) >= 0;
      },
      resetItems: function resetItems(didx, items) {
        this._collect.dragons[didx - 1].items = items;
      },
      getChest: function getChest(didx, cidx) {
        return this._collect.dragons[didx - 1].chests[cidx - 1];
      },
      isChestLocked: function isChestLocked(didx, cidx) {
        if (1 == this._collect.dragons[didx - 1].lock) return true;
        var unlock_level = [ 0, 2, 4 ];
        var row = Math.floor((cidx - 1) / 3);
        return this._collect.dragons[didx - 1].lv < unlock_level[row];
      },
      updateChest: function updateChest(didx, cidx, tp, coin) {
        var chest = this._collect.dragons[didx - 1].chests[cidx - 1];
        chest.tp = tp;
        chest.coin = coin;
      },
      resetChests: function resetChests(didx, chests) {
        this._collect.dragons[didx - 1].chests = chests;
      },
      getDragonLv: function getDragonLv(didx) {
        return this._collect.dragons[didx - 1].lv;
      },
      setDragonLv: function setDragonLv(didx, lv) {
        this._collect.dragons[didx - 1].lv = lv;
      },
      unlockDragon: function unlockDragon(didx) {
        this._collect.dragons[didx - 1].lock = 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheLegendOfDragon_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "611675cgzlG+rDxzh4yud1n", "TheLegendOfDragon_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        var TheLegendOfDragon = {};
        Global.TheLegendOfDragon = TheLegendOfDragon;
        TheLegendOfDragon.playEffect = function(fn) {
          cc.vv.AudioManager.playEff("games/TheLegendOfDragon/", fn, true);
        };
        TheLegendOfDragon.stopEffect = function(fn) {
          cc.vv.AudioManager.stopEffectByName(fn);
        };
        TheLegendOfDragon.Logic = this;
        TheLegendOfDragon.Pick = this.node.getComponent("TheLegendOfDragon_Pick");
        TheLegendOfDragon.Collect = this.node.getComponent("TheLegendOfDragon_Collect");
        TheLegendOfDragon.Wheel = this.node.getComponent("TheLegendOfDragon_Wheel");
        TheLegendOfDragon.Pop = this.node.getComponent("TheLegendOfDragon_Pop");
        this._super();
        TheLegendOfDragon.Slots = cc.find("safe_node/slots", this.node).getComponent("TheLegendOfDragon_Slots");
        this.StartSlot();
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        Global.TheLegendOfDragon = null;
      },
      showTransition: function showTransition(name, callback) {
        var node = cc.find("safe_node/" + name, this.node);
        node.active = true;
        var ske = node.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation", false);
        ske.setCompleteListener(function() {
          callback && callback();
          node.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheLegendOfDragon_Pick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2851Zkqx9ENIL7d2HXDCY+", "TheLegendOfDragon_Pick");
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
        _pick: null,
        _data: null,
        _boxes: [],
        _columns: [],
        _fanpai: null,
        _fly: null,
        _processing: false,
        _tip: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this._pick = cc.find("safe_node/pick_game", this.node);
        var box_bg = cc.find("box_bg", this._pick);
        var children = box_bg.children;
        var self = this;
        var _loop = function _loop(i, count) {
          var box = children[i - 1];
          _this._boxes[i] = box;
          box.on("click", function() {
            self.onBtnBox(box);
          });
        };
        for (var i = 1, count = children.length; i <= count; ++i) _loop(i, count);
        for (var _i = 1; _i <= 5; _i++) {
          var c = cc.find("columns/c" + _i, this._pick);
          this._columns[_i] = c;
        }
        this._fanpai = cc.find("fanpai", this._pick);
        this._fly = cc.find("fly", this._pick);
        this._tip = cc.find("tip", this._pick);
        this._tip.opacity = 0;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      start: function start() {
        var pick = cc.vv.gameData.getDeskInfo().pick;
        pick && 1 == pick.state && this.show(pick, 1, true);
      },
      Sleep: function Sleep(time) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this2.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      show: function show(data, delay) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var i, _i2, _i3, gray, _i4;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playBgm("pick/pick_bgm");
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _this3._pick.active = true;
              _this3._processing = true;
              _this3._data = data;
              for (i = 1; i <= 20; i++) {
                _this3.showBoxInfo(_this3._boxes[i], 0, false);
                _this3._boxes[i].getChildByName("win").active = false;
              }
              for (_i2 = 1; _i2 <= 5; _i2++) _this3.showColumnInfo(_i2, 0);
              _context2.next = 9;
              return _this3.Sleep(delay || 2);

             case 9:
              if (!data.remove_mini) {
                _context2.next = 16;
                break;
              }
              Global.TheLegendOfDragon.Pop.showRemoveMini();
              _context2.next = 13;
              return _this3.Sleep(1.2);

             case 13:
              cc.find("columns/lock", _this3._pick).active = true;
              _context2.next = 17;
              break;

             case 16:
              cc.find("columns/lock", _this3._pick).active = false;

             case 17:
              for (_i3 = 1; _i3 <= 20; _i3++) {
                gray = data.remove_mini && 1 == data.cards[_i3 - 1];
                _this3.showBoxInfo(_this3._boxes[_i3], data.cards[_i3 - 1], false, gray);
              }
              for (_i4 = 1; _i4 <= 5; _i4++) _this3.showColumnInfo(_i4, data.progs[_i4 - 1]);
              _context2.next = 21;
              return _this3.Sleep(1);

             case 21:
              _this3.showTip();
              _this3._processing = false;
              _this3.setAutoPlay();

             case 24:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      hide: function hide() {
        true == this._pick.active && (this._pick.active = false);
      },
      showTip: function showTip() {
        this._tip.stopAllActions();
        this._tip.opacity = 255;
        this._tip.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .7), cc.scaleTo(.5, .6))));
      },
      showBoxInfo: function showBoxInfo(box, card, open, gray) {
        var atlas = cc.vv.gameData.GetAtlasByName("pick");
        var icon = box.getChildByName("icon");
        icon.color = gray ? cc.Color.GRAY : cc.Color.WHITE;
        var names = [ "theme177_pick_frame1", "theme177_pick_r_4", "theme177_pick_r_3", "theme177_pick_r_2", "theme177_pick_r_1", "theme177_pick_r_0" ];
        icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(names[card]);
        var jackpot = box.getChildByName("jackpot");
        jackpot.active = card > 0 && !gray;
        if (card > 0) {
          var anims = [ "", "animation4", "animation3", "animation2", "animation1", "animation0" ];
          gray || jackpot.getComponent(sp.Skeleton).setAnimation(0, anims[card], true);
          if (open) {
            icon.opacity = 0;
            icon.runAction(cc.fadeIn(.5));
            var wp = icon.convertToWorldSpaceAR(cc.v2(0, 0));
            var np = this._pick.convertToNodeSpaceAR(wp);
            var fanpai = cc.instantiate(this._fanpai);
            fanpai.parent = this._pick;
            fanpai.position = np;
            fanpai.active = true;
            fanpai.runAction(cc.sequence(cc.delayTime(1), cc.destroySelf()));
            var px = [ 280, -280, 140, -140, 0 ];
            var fly = cc.instantiate(this._fly);
            fly.parent = this._pick;
            fly.position = np;
            fly.opacity = 0;
            fly.active = true;
            fly.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(0), cc.callFunc(function() {
              Global.TheLegendOfDragon.playEffect("pick/card_fly");
            }), cc.moveTo(.5, cc.v2(px[card - 1], 0)), cc.delayTime(.2), cc.destroySelf()));
          }
        }
      },
      showColumnInfo: function showColumnInfo(idx, prog) {
        var column = this._columns[idx];
        var circle = column.getChildByName("circle");
        var counts = [ 0, 2, 2, 3, 3, 5 ];
        circle.active = prog != counts[idx] + 1;
        0 == prog && (circle.y = 0);
        for (var i = 1; i <= counts[idx]; i++) {
          var circlex = column.getChildByName("circle" + i);
          if (i <= prog) {
            circlex.active = false;
            if (i == prog) {
              var pos = circlex.position;
              circle.runAction(cc.moveTo(.5, pos));
            }
          } else circlex.active = true;
        }
        var ske = column.getChildByName("column").getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation" + prog, false);
      },
      showWinCard: function showWinCard(card) {
        for (var i = 1; i <= 20; i++) this._data.cards[i - 1] == card && (this._boxes[i].getChildByName("win").active = true);
      },
      showLeftCards: function showLeftCards(leftcards) {
        for (var i = 1; i <= 20; i++) if (0 == this._data.cards[i - 1]) {
          var card = leftcards.shift();
          if (card) {
            this.showBoxInfo(this._boxes[i], card, false, true);
            var icon = this._boxes[i].getChildByName("icon");
            icon.scale = .1;
            icon.runAction(cc.scaleTo(.3, 1));
          }
        }
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i <= 20; i++) 0 == this._data.cards[i - 1] && list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(this._boxes[list[randomIdx]], function() {
          self.onBtnBox(self._boxes[list[randomIdx]]);
        });
      },
      onBtnBox: function onBtnBox(node) {
        if (this._processing) return;
        if (this._tip.opacity > 0) {
          this._tip.stopAllActions();
          this._tip.runAction(cc.fadeOut(.2));
        }
        for (var i = 1; i <= 20; i++) {
          this._boxes[i].stopAllActions();
          if (node == this._boxes[i] && 0 == this._data.cards[i - 1]) {
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA,
              gameid: cc.vv.gameData.getGameId(),
              data: {
                rtype: 1,
                idx: i
              }
            };
            cc.vv.NetManager.send(req);
            this._processing = true;
            Global.TheLegendOfDragon.playEffect("pick/card");
          }
        }
      },
      OnMsgPick: function OnMsgPick(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var idx, card, wincoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              idx = msg.data.idx;
              card = msg.data.card;
              _this4._data.cards[idx - 1] = card;
              _this4._data.progs[card - 1] = msg.data.prog;
              _this4.showBoxInfo(_this4._boxes[idx], card, true);
              _this4.scheduleOnce(function() {
                _this4.showColumnInfo(card, msg.data.prog);
              }, 1);
              if (!(msg.data.wincoin > 0)) {
                _context3.next = 18;
                break;
              }
              _context3.next = 9;
              return _this4.Sleep(.8);

             case 9:
              _this4.showWinCard(card);
              _this4.showLeftCards(msg.data.leftcards);
              _context3.next = 13;
              return _this4.Sleep(2);

             case 13:
              wincoin = msg.data.wincoin;
              cc.vv.gameData.AddCoin(wincoin);
              Global.TheLegendOfDragon.Pop.showCollectJp(card, wincoin);
              _context3.next = 22;
              break;

             case 18:
              _context3.next = 20;
              return _this4.Sleep(1.5);

             case 20:
              _this4._processing = false;
              _this4.setAutoPlay();

             case 22:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        200 == msg.code && 0 == msg.data.spcode && 1 == msg.data.rtype && this.OnMsgPick(msg);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheLegendOfDragon_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52596ctYbBNLoAMhGFFNDB4", "TheLegendOfDragon_Pop");
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
        _pop: null,
        _pick_start: null,
        _collect_jp: null,
        _free: null,
        _free_start: null,
        _free_end: null,
        _jpWin: 0,
        _freeWin: 0,
        _pickData: null,
        _incWild: false,
        _pickStartClicked: false,
        _collectJpClicked: false,
        _freeStartClicked: false,
        _freeEndClicked: false
      },
      onLoad: function onLoad() {
        this._pop = cc.find("safe_node/node_pop_ui", this.node);
        this._pick_start = this._pop.getChildByName("pick_start");
        var btnPickStart = this._pick_start.getChildByName("btn_start");
        btnPickStart.on("click", this.onClickPickStart.bind(this));
        this._collect_jp = this._pop.getChildByName("collect_jp");
        var btnCollectJp = this._collect_jp.getChildByName("btn_collect");
        btnCollectJp.on("click", this.onClickCollectJp.bind(this));
        this._free = this._pop.getChildByName("free");
        this._free_start = this._free.getChildByName("start");
        var btnFreeStart = this._free_start.getChildByName("btn_start");
        btnFreeStart.on("click", this.onClickFreeStart.bind(this));
        this._free_end = this._free.getChildByName("end");
        var btnFreeEnd = this._free_end.getChildByName("btn_collect");
        btnFreeEnd.on("click", this.onClickFreeEnd.bind(this));
      },
      showPickStart: function showPickStart(pickData) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var btnPickStart, func;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._pickData = pickData;
              _this._pop.active = true;
              _this._pick_start.active = true;
              Global.showAlertAction(_this._pick_start, true, .1, 1, null);
              _this.showNodePopAnimation(_this._pick_start.getChildByName("btn_start"), .2);
              Global.SlotsSoundMgr.stopBgm();
              Global.TheLegendOfDragon.playEffect("pick/pick_start_show");
              btnPickStart = _this._pick_start.getChildByName("btn_start");
              func = function func() {
                if (_this._pickStartClicked) return false;
                _this._pickStartClicked = true;
                Global.TheLegendOfDragon.playEffect("base/common_click");
                Global.showAlertAction(_this._pick_start, false, 1, .1, function() {
                  _this._pop.active = false;
                  _this._pick_start.active = false;
                  Global.TheLegendOfDragon.Logic.showTransition("qieping1");
                  Global.TheLegendOfDragon.playEffect("base/transition_bonus");
                  _this._pickStartClicked = false;
                });
                Global.TheLegendOfDragon.playEffect("base/popup_out");
                _this.scheduleOnce(function() {
                  Global.TheLegendOfDragon.Pick.show(_this._pickData, 2);
                }, 1.5);
                Global.TheLegendOfDragon.Collect.hide();
              };
              _context.next = 11;
              return cc.vv.gameData.awaitTime(.7);

             case 11:
              cc.vv.gameData.checkAutoPlay(btnPickStart, func);

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onClickPickStart: function onClickPickStart() {
        var _this2 = this;
        if (this._pickStartClicked) return false;
        var btnPickStart = this._pick_start.getChildByName("btn_start");
        btnPickStart.stopAllActions();
        this._pickStartClicked = true;
        Global.TheLegendOfDragon.playEffect("base/common_click");
        Global.showAlertAction(this._pick_start, false, 1, .1, function() {
          _this2._pop.active = false;
          _this2._pick_start.active = false;
          Global.TheLegendOfDragon.Logic.showTransition("qieping1");
          Global.TheLegendOfDragon.playEffect("base/transition_bonus");
          _this2._pickStartClicked = false;
        });
        Global.TheLegendOfDragon.playEffect("base/popup_out");
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Pick.show(_this2._pickData, 2);
        }, 1.5);
        Global.TheLegendOfDragon.Collect.hide();
      },
      showCollectJp: function showCollectJp(jp, winCoin) {
        var _this3 = this;
        var idx = 5 - jp;
        this._jpWin = winCoin;
        this._pop.active = true;
        this._collect_jp.active = true;
        this._collect_jp.scale = 1;
        cc.find("coin_bg/lbl_coin", this._collect_jp).getComponent("LabelRollCmp").startRoll(0, winCoin, 2);
        var ske = this._collect_jp.getChildByName("spine_bg").getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation" + idx, false);
        ske.addAnimation(0, "animation" + idx + "_" + idx, true);
        var sounds = [ "", "mini", "minor", "major", "maxi", "grand" ];
        Global.TheLegendOfDragon.playEffect("pick/" + sounds[jp]);
        Global.SlotsSoundMgr.stopBgm();
        Global.TheLegendOfDragon.playEffect("pick/jackpot_show");
        var btnCollectJp = this._collect_jp.getChildByName("btn_collect");
        cc.vv.gameData.checkAutoPlay(btnCollectJp, function() {
          if (_this3._collectJpClicked) return;
          _this3._collectJpClicked = true;
          Global.TheLegendOfDragon.playEffect("base/common_click");
          Global.showAlertAction(_this3._collect_jp, false, 1, .1, function() {
            _this3._pop.active = false;
            _this3._collect_jp.active = false;
            Global.TheLegendOfDragon.Logic.showTransition("qieping1");
            Global.TheLegendOfDragon.playEffect("base/transition_bonus");
            _this3._collectJpClicked = false;
          });
          Global.TheLegendOfDragon.playEffect("base/popup_out");
          _this3.scheduleOnce(function() {
            Global.SlotsSoundMgr.playNormalBgm(true);
            Global.TheLegendOfDragon.Pick.hide();
          }, 1);
          _this3.scheduleOnce(function() {
            Global.TheLegendOfDragon.Slots.ShowBottomWin(_this3._jpWin, _this3._jpWin, true, function() {
              Global.TheLegendOfDragon.Collect._reopen ? Global.TheLegendOfDragon.Collect.showStore() : Global.TheLegendOfDragon.Slots.CanDoNextRound();
            });
          }, 2.5);
        });
      },
      onClickCollectJp: function onClickCollectJp() {
        var _this4 = this;
        if (this._collectJpClicked) return;
        this._collectJpClicked = true;
        var btnCollectJp = this._collect_jp.getChildByName("btn_collect");
        btnCollectJp.stopAllActions();
        Global.TheLegendOfDragon.playEffect("base/common_click");
        Global.showAlertAction(this._collect_jp, false, 1, .1, function() {
          _this4._pop.active = false;
          _this4._collect_jp.active = false;
          Global.TheLegendOfDragon.Logic.showTransition("qieping1");
          Global.TheLegendOfDragon.playEffect("base/transition_bonus");
          _this4._collectJpClicked = false;
        });
        Global.TheLegendOfDragon.playEffect("base/popup_out");
        this.scheduleOnce(function() {
          Global.SlotsSoundMgr.playNormalBgm(true);
          Global.TheLegendOfDragon.Pick.hide();
        }, 1);
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Slots.ShowBottomWin(_this4._jpWin, _this4._jpWin, true, function() {
            Global.TheLegendOfDragon.Collect._reopen ? Global.TheLegendOfDragon.Collect.showStore() : Global.TheLegendOfDragon.Slots.CanDoNextRound();
          });
        }, 2.5);
      },
      showNodePopAnimation: function showNodePopAnimation(node, delay) {
        node.scale = 0;
        node.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(.3, 1.2), cc.scaleTo(.2, 1)));
      },
      showFreeStart: function showFreeStart(freeCnt, hideBet, incWild) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var lblCount, ske, more, btnFreeStart;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this5._incWild = incWild;
              _this5._pop.active = true;
              _this5._free.active = true;
              _this5._free.scale = 1;
              _this5._free_start.active = true;
              lblCount = _this5._free_start.getChildByName("lbl_count").getComponent(cc.Label);
              lblCount.string = "" + freeCnt;
              ske = _this5._free.getChildByName("spine_bg").getComponent(sp.Skeleton);
              ske.setAnimation(0, "animation1_1", false);
              ske.addAnimation(0, "animation1_2", true);
              _this5.showNodePopAnimation(_this5._free_start.getChildByName("lbl_count"), .5);
              _this5.showNodePopAnimation(_this5._free_start.getChildByName("btn_start"), .8);
              if (freeCnt > 8) {
                lblCount.string = "8";
                more = _this5._free_start.getChildByName("more");
                more.active = true;
                more.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                more.getComponent(sp.Skeleton).setCompleteListener(function() {
                  lblCount.string = "" + freeCnt;
                });
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.TheLegendOfDragon.playEffect("free/free_dialog_start_show");
              _context2.next = 17;
              return cc.vv.gameData.awaitTime(1.3);

             case 17:
              btnFreeStart = _this5._free_start.getChildByName("btn_start");
              cc.vv.gameData.checkAutoPlay(btnFreeStart, function() {
                if (_this5._freeStartClicked) return;
                _this5._freeStartClicked = true;
                Global.TheLegendOfDragon.playEffect("base/common_click");
                Global.showAlertAction(_this5._free, false, 1, .1, function() {
                  _this5._pop.active = false;
                  _this5._free.active = false;
                  _this5._free_start.active = false;
                  Global.TheLegendOfDragon.Logic.showTransition("qieping2");
                  Global.TheLegendOfDragon.playEffect("base/transition_free");
                  _this5._freeStartClicked = false;
                });
                Global.TheLegendOfDragon.playEffect("base/popup_out");
                _this5.scheduleOnce(function() {
                  Global.TheLegendOfDragon.Slots.ShowGameview(true);
                }, .8);
                _this5.scheduleOnce(function() {
                  Global.TheLegendOfDragon.Slots.CanDoNextRound();
                }, 1.8);
                _this5._incWild && _this5.scheduleOnce(function() {
                  _this5.showIncWild();
                }, 2.4);
                Global.TheLegendOfDragon.Collect.hide();
              });

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onClickFreeStart: function onClickFreeStart() {
        var _this6 = this;
        if (this._freeStartClicked) return;
        this._freeStartClicked = true;
        var btnFreeStart = this._free_start.getChildByName("btn_start");
        btnFreeStart.stopAllActions();
        Global.TheLegendOfDragon.playEffect("base/common_click");
        Global.showAlertAction(this._free, false, 1, .1, function() {
          _this6._pop.active = false;
          _this6._free.active = false;
          _this6._free_start.active = false;
          Global.TheLegendOfDragon.Logic.showTransition("qieping2");
          Global.TheLegendOfDragon.playEffect("base/transition_free");
          _this6._freeStartClicked = false;
        });
        Global.TheLegendOfDragon.playEffect("base/popup_out");
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Slots.ShowGameview(true);
        }, .8);
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Slots.CanDoNextRound();
        }, 1.8);
        this._incWild && this.scheduleOnce(function() {
          _this6.showIncWild();
        }, 2.4);
        Global.TheLegendOfDragon.Collect.hide();
      },
      showFreeEnd: function showFreeEnd(winCoin) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var ske, btnFreeEnd;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this7._freeWin = winCoin;
              _this7._pop.active = true;
              _this7._free.active = true;
              _this7._free.scale = 1;
              _this7._free_end.active = true;
              cc.find("coin_bg/lbl_coin", _this7._free_end).getComponent("LabelRollCmp").startRoll(0, winCoin, 2);
              ske = _this7._free.getChildByName("spine_bg").getComponent(sp.Skeleton);
              ske.setAnimation(0, "animation2_1", false);
              ske.addAnimation(0, "animation2_2", true);
              _this7.showNodePopAnimation(_this7._free_end.getChildByName("coin_bg"), .5);
              _this7.showNodePopAnimation(_this7._free_end.getChildByName("btn_collect"), .8);
              Global.SlotsSoundMgr.stopBgm();
              Global.TheLegendOfDragon.playEffect("free/free_dialog_collect_show");
              btnFreeEnd = _this7._free_end.getChildByName("btn_collect");
              _context3.next = 16;
              return cc.vv.gameData.awaitTime(1.3);

             case 16:
              cc.vv.gameData.checkAutoPlay(btnFreeEnd, function() {
                if (_this7._freeEndClicked) return;
                _this7._freeEndClicked = true;
                Global.TheLegendOfDragon.playEffect("base/common_click");
                Global.showAlertAction(_this7._free, false, 1, .1, function() {
                  _this7._pop.active = false;
                  _this7._free.active = false;
                  _this7._free_end.active = false;
                  Global.TheLegendOfDragon.Logic.showTransition("qieping2");
                  Global.TheLegendOfDragon.playEffect("base/transition_free");
                  _this7._freeEndClicked = false;
                });
                Global.TheLegendOfDragon.playEffect("base/popup_out");
                _this7.scheduleOnce(function() {
                  Global.TheLegendOfDragon.Slots.ShowGameview(false);
                  Global.TheLegendOfDragon.Slots.Resume();
                  Global.SlotsSoundMgr.playNormalBgm(true);
                }, .6);
                _this7.scheduleOnce(function() {
                  Global.TheLegendOfDragon.Slots.ShowBottomWin(_this7._freeWin, _this7._freeWin, true, function() {
                    Global.TheLegendOfDragon.Collect._reopen ? Global.TheLegendOfDragon.Collect.showStore() : Global.TheLegendOfDragon.Slots.CanDoNextRound();
                  });
                }, 1.5);
              });

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onClickFreeEnd: function onClickFreeEnd() {
        var _this8 = this;
        if (this._freeEndClicked) return;
        this._freeEndClicked = true;
        var btnFreeEnd = this._free_end.getChildByName("btn_collect");
        btnFreeEnd.stopAllActions();
        Global.TheLegendOfDragon.playEffect("base/common_click");
        Global.showAlertAction(this._free, false, 1, .1, function() {
          _this8._pop.active = false;
          _this8._free.active = false;
          _this8._free_end.active = false;
          Global.TheLegendOfDragon.Logic.showTransition("qieping2");
          Global.TheLegendOfDragon.playEffect("base/transition_free");
          _this8._freeEndClicked = false;
        });
        Global.TheLegendOfDragon.playEffect("base/popup_out");
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Slots.ShowGameview(false);
          Global.TheLegendOfDragon.Slots.Resume();
          Global.SlotsSoundMgr.playNormalBgm(true);
        }, .6);
        this.scheduleOnce(function() {
          Global.TheLegendOfDragon.Slots.ShowBottomWin(_this8._freeWin, _this8._freeWin, true, function() {
            Global.TheLegendOfDragon.Collect._reopen ? Global.TheLegendOfDragon.Collect.showStore() : Global.TheLegendOfDragon.Slots.CanDoNextRound();
          });
        }, 1.5);
      },
      showLizi: function showLizi(targetNode, cb) {
        var tips = cc.find("safe_node/slots/tips", this.node);
        var lizi = cc.instantiate(tips.getChildByName("lizi"));
        lizi.parent = this.node;
        lizi.position = this.node.convertToNodeSpaceAR(tips.convertToWorldSpaceAR(cc.v2(0, 0)));
        lizi.active = true;
        lizi.opacity = 0;
        var pos = this.node.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        lizi.runAction(cc.sequence(cc.delayTime(1.2), cc.fadeIn(0), cc.callFunc(function() {
          Global.TheLegendOfDragon.playEffect("free/num_fly");
        }), cc.moveTo(.6, pos), cc.callFunc(function() {
          cb && cb();
        }), cc.destroySelf()));
      },
      showAddFreeCnt: function showAddFreeCnt(cb) {
        var tips = cc.find("safe_node/slots/tips", this.node);
        var add_free_cnt = tips.getChildByName("add_free_cnt");
        tips.active = true;
        add_free_cnt.active = true;
        var ske = add_free_cnt.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation", false);
        ske.setCompleteListener(function() {
          tips.active = false;
          add_free_cnt.active = false;
        });
        Global.TheLegendOfDragon.playEffect("free/free_dialog_more_show");
        this.showLizi(cc.find("safe_node/LMSlots_Bottom/free_time", this.node), cb);
      },
      showAddFreeMulti: function showAddFreeMulti(mul, cb) {
        var idx = 1;
        2 == mul ? idx = 1 : 3 == mul ? idx = 2 : 5 == mul ? idx = 3 : 10 == mul && (idx = 4);
        var tips = cc.find("safe_node/slots/tips", this.node);
        var add_free_multi = tips.getChildByName("add_free_multi");
        tips.active = true;
        add_free_multi.active = true;
        var ske = add_free_multi.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation" + idx, false);
        ske.setCompleteListener(function() {
          tips.active = false;
          add_free_multi.active = false;
        });
        Global.TheLegendOfDragon.playEffect("free/free_dialog_more_show");
        this.showLizi(cc.find("safe_node/slots/free_multi", this.node), cb);
      },
      showWheelStart: function showWheelStart() {
        var tips = cc.find("safe_node/slots/tips", this.node);
        var wheel_start = tips.getChildByName("wheel_start");
        tips.active = true;
        wheel_start.active = true;
        var ske = wheel_start.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation", false);
        ske.setCompleteListener(function() {
          tips.active = false;
          wheel_start.active = false;
        });
      },
      showRemoveMini: function showRemoveMini() {
        var pop = this._pop;
        pop.active = true;
        var remove_mini = pop.getChildByName("remove_mini");
        remove_mini.active = true;
        remove_mini.scale = .2;
        cc.tween(remove_mini).to(.25, {
          scale: 1
        }, {
          easing: "backInOut"
        }).delay(.7).to(.25, {
          scale: .2
        }, {
          easing: "backInOut"
        }).call(function() {
          pop.active = false;
          remove_mini.active = false;
        }).start();
      },
      showIncWild: function showIncWild() {
        var spr_wild = cc.find("safe_node/slots/spr_inc_wild", this.node);
        spr_wild.active = true;
        spr_wild.scale = 0;
        cc.tween(spr_wild).to(.25, {
          scale: 1
        }, {
          easing: "backInOut"
        }).delay(1.5).to(.25, {
          scale: 0
        }, {
          easing: "backInOut"
        }).call(function() {
          spr_wild.active = false;
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheLegendOfDragon_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9db64GfHXxDKJQ53ou7VRz8", "TheLegendOfDragon_Slots");
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
    var SCATTER = 11;
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _ingot: null,
        _ingotEndPos: null,
        _result: []
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var collect = this._gameInfo.collect;
        var acRow = cards.length / this._col;
        var reelResults = [];
        this._result = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = false;
            collect && -1 != collect.pos.indexOf(i + 1) && (res.data = true);
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
            this._result[col] || (this._result[col] = []);
            this._result[col].unshift(cards[i]);
          }
        }
        for (var j = 0; j < this._reels.length; j++) {
          var item = this._reels[j];
          var reelRes = reelResults[j];
          item.SetResult(reelRes);
        }
      },
      Sleep: function Sleep(time) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      AfterSpinEnd: function AfterSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var collect, _iterator, _step, idx, symbol, spine, nWin, nTotal, can_spin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              collect = _this2._gameInfo.collect;
              if (!collect) {
                _context2.next = 11;
                break;
              }
              _iterator = _createForOfIteratorHelper(collect.pos);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  idx = _step.value;
                  symbol = _this2.GetSymbolByIdx(idx);
                  if (symbol) {
                    _this2.ShowIngotFly(symbol.GetIngotWPos());
                    symbol.ShowIngot(false);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              Global.TheLegendOfDragon.playEffect("base/collect");
              _context2.next = 7;
              return _this2.Sleep(.7);

             case 7:
              spine = cc.find("collect_progress/bg/icon/spine", _this2.node);
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              cc.vv.gameData.setIngot(collect.num);
              Global.TheLegendOfDragon.Collect.refreshIngotNum();

             case 11:
              if (!_this2._gameInfo.spFree) {
                _context2.next = 14;
                break;
              }
              _context2.next = 14;
              return _this2.ShowSpecialFree(_this2._gameInfo.spFree);

             case 14:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 20;
              return new Promise(function(resolve) {
                _this2.ShowBottomWin(nWin, nTotal, true, resolve);
              });

             case 20:
              can_spin = true;
              if (cc.vv.gameData.isFirstTriggerFree()) {
                can_spin = false;
                _this2._bottomScript.ShowBtnsByState("moveing_1");
                Global.TheLegendOfDragon.Pop.showFreeStart(cc.vv.gameData.GetFreeTime(), false, false);
                Global.TheLegendOfDragon.playEffect("base/bell");
                _this2.Backup();
              }
              if (cc.vv.gameData.isLastEndFree()) {
                can_spin = false;
                _this2._bottomScript.ShowBtnsByState("moveing_1");
                Global.TheLegendOfDragon.Pop.showFreeEnd(cc.vv.gameData.GetGameTotalFreeWin());
              }
              if (1 == cc.vv.gameData.getPickState()) {
                can_spin = false;
                _this2._bottomScript.ShowBtnsByState("moveing_1");
                Global.TheLegendOfDragon.Pop.showPickStart(_this2._gameInfo.pick);
              }
              if (_this2._gameInfo.bonus) {
                can_spin = false;
                _this2._bottomScript.ShowBtnsByState("moveing_1");
                _this2.OnBonusEnd(_this2._gameInfo.bonus);
              }
              can_spin && _this2.CanDoNextRound();

             case 26:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        Global.TheLegendOfDragon.Wheel.showEnd();
        var bonus_tw = this.node.getChildByName("bonus_tw");
        this.scheduleOnce(function() {
          bonus_tw.active = true;
          bonus_tw.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        }, .55);
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        msg.bonus && this.OnBonusStart(msg.bonus);
        msg.item && Global.TheLegendOfDragon.Collect.onDropItem(msg.item.id, msg.item.didx);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super(colIdx);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.AfterSpinEnd();
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("free/free_bgm");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
        } else {
          this._bottomScript.ShowFreeModel(false);
          this.node.getChildByName("free_multi").active = false;
        }
        var normalBg = cc.find("Canvas/safe_node/bg_base");
        var freeBg = cc.find("Canvas/safe_node/bg_free");
        if (freeBg) {
          normalBg && (normalBg.active = !bFree);
          freeBg.active = bFree;
        }
      },
      ShowSpecialFree: function ShowSpecialFree(spFree) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var total, rest, free_multi, atlas_base;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!spFree.total_cnt) {
                _context3.next = 6;
                break;
              }
              _context3.next = 3;
              return new Promise(function(resolve) {
                Global.TheLegendOfDragon.Pop.showAddFreeCnt(resolve);
              });

             case 3:
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              _this3._bottomScript.ShowFreeModel(true, total - rest, total);

             case 6:
              if (!spFree.total_mul) {
                _context3.next = 13;
                break;
              }
              _context3.next = 9;
              return new Promise(function(resolve) {
                Global.TheLegendOfDragon.Pop.showAddFreeMulti(spFree.total_mul, resolve);
              });

             case 9:
              free_multi = _this3.node.getChildByName("free_multi");
              atlas_base = cc.vv.gameData.GetAtlasByName("base");
              free_multi.getChildByName("num").getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame("theme177_free_ui_num" + spFree.total_mul);
              if (!free_multi.active) {
                free_multi.opacity = 0;
                free_multi.active = true;
                free_multi.runAction(cc.fadeIn(.2));
              }

             case 13:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      ShowIngotFly: function ShowIngotFly(fromWp) {
        this._ingot || (this._ingot = cc.instantiate(this.node.getChildByName("ingot")));
        if (!this._ingotEndPos) {
          var icon = cc.find("collect_progress/bg/icon", this.node);
          this._ingotEndPos = this.node.convertToNodeSpaceAR(icon.convertToWorldSpaceAR(cc.v2(0, 0)));
        }
        var ingot = cc.instantiate(this._ingot);
        ingot.active = true;
        ingot.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        var pos = this.node.convertToNodeSpaceAR(fromWp);
        ingot.position = pos;
        ingot.parent = this.node;
        ingot.runAction(cc.sequence(cc.moveTo(.7, this._ingotEndPos), cc.destroySelf()));
      },
      ShowBonusWild: function ShowBonusWild(pos, visible) {
        var layout = cc.find("bonus_wilds/layout", this.node);
        var _iterator2 = _createForOfIteratorHelper(pos), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var idx = _step2.value;
            layout.getChildByName("w" + idx).active = visible;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      OnBonusStart: function OnBonusStart(bonus) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var idx, role;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              _this4.SetStopTime(20);
              Global.shakeNode(cc.find("Canvas/safe_node"), 8, 1);
              idx = cc.vv.gameData.getDragonIdx();
              role = cc.find("Canvas/safe_node/roles/role" + idx);
              role.getComponent(sp.Skeleton).setAnimation(0, "attack", false);
              role.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              _context4.next = 9;
              return _this4.Sleep(1.2);

             case 9:
              Global.TheLegendOfDragon.Pop.showWheelStart();
              _context4.next = 12;
              return _this4.Sleep(1);

             case 12:
              cc.find("bonus_wilds", _this4.node).active = true;
              _context4.next = 15;
              return new Promise(function(resolve) {
                Global.TheLegendOfDragon.Wheel.showSpin(bonus, resolve);
              });

             case 15:
              _context4.next = 17;
              return _this4.Sleep(1);

             case 17:
              1 == bonus.idx ? _this4.ShowBonusWild(bonus.pos, true) : cc.find("bonus_wilds", _this4.node).active = false;
              _this4.SetStopTime(3);

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      OnBonusEnd: function OnBonusEnd(bonus) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (1 == bonus.idx) {
                _this5.ShowBonusWild(bonus.pos, false);
                cc.find("bonus_wilds", _this5.node).active = false;
              }
              _context5.next = 3;
              return _this5.Sleep(1);

             case 3:
              _this5.CanDoNextRound();

             case 4:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheLegendOfDragon_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1173zadhxB1LgVA46HhUdR", "TheLegendOfDragon_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _ingot: null
      },
      ingot: function ingot() {
        this._ingot || (this._ingot = this.node.getChildByName("ingot"));
        return this._ingot;
      },
      ShowIngot: function ShowIngot(bshow) {
        this.ingot().active = bshow;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.ShowIngot(data || false);
      },
      GetIngotWPos: function GetIngotWPos() {
        return this.ingot().convertToWorldSpaceAR(cc.v2(0, 0));
      },
      Resume: function Resume(backup) {
        this._super(backup);
        this.ShowIngot(false);
      },
      StopMoveBefore: function StopMoveBefore() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (id >= 12 && id <= 14 && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].win_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].win_ani.name) {
            this.node.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheLegendOfDragon_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "517a9SRfUZDA4vyrHWTcxSf", "TheLegendOfDragon_Wheel");
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
        _data: null,
        _movenode: null,
        _wheel: null,
        _reels: [],
        _rounds: [],
        _res: null,
        _spining: false,
        _xjl: null,
        _show: false,
        _onSpinEndCallBack: null
      },
      onLoad: function onLoad() {
        this._movenode = cc.find("safe_node/layout/move_node", this.node);
        this._wheel = cc.find("wheel_game", this._movenode);
        this._xjl = cc.find("safe_node/xiaojinlong", this.node);
        for (var i = 1; i <= 3; i++) {
          var reel = this._wheel.getChildByName("reel" + i);
          var holder_ = cc.find("mask/holder", reel);
          var symbols_ = [];
          for (var j = 1; j <= 2; j++) {
            var symbol = holder_.getChildByName("symbol" + j);
            symbols_.push(symbol);
          }
          this._reels.push({
            holder: holder_,
            symbols: symbols_,
            anim1: cc.find("title_bg/anim", reel),
            anim2: cc.find("frame/anim", reel)
          });
        }
      },
      showXiaoJinLong: function showXiaoJinLong(anim, sx) {
        var _this = this;
        this._xjl.active = true;
        this._xjl.scaleX = sx || 1;
        this._xjl.getComponent(sp.Skeleton).setAnimation(0, anim, false);
        this._xjl.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this._xjl.active = false;
        });
      },
      showSpin: function showSpin(res, callback) {
        var _this2 = this;
        if (this._spining) return;
        this._show = true;
        this._reels[1].symbols[0].getChildByName("what").active = true;
        this._reels[1].symbols[0].getChildByName("icon").scale = 0;
        this._reels[2].symbols[0].getChildByName("what").active = true;
        this._reels[2].symbols[0].getChildByName("lbl_multipler").scale = 0;
        for (var i = 0; i < 3; i++) {
          this._reels[i].holder.y = 0;
          this._reels[i].symbols[0].y = 0;
          this._reels[i].symbols[1].y = 180;
        }
        this._res = res;
        this._onSpinEndCallBack = callback;
        this._rounds = [ 21, 31, 41 ];
        this._rounds[res.idx - 1] += 1;
        cc.tween(this._movenode).by(2, {
          position: cc.v2(-1008, 0)
        }).delay(.5).call(function() {
          _this2._spining = true;
          Global.TheLegendOfDragon.playEffect("base/wheel");
        }).start();
        this.showXiaoJinLong("animation1", -1);
        Global.TheLegendOfDragon.playEffect("base/dragon_fly");
      },
      showEnd: function showEnd() {
        var _this3 = this;
        if (!this._show) return;
        this._show = false;
        cc.tween(this._movenode).call(function() {
          for (var i = 0; i < 3; i++) {
            _this3._reels[i].anim1.active = false;
            _this3._reels[i].anim2.active = false;
          }
        }).by(1.8, {
          position: cc.v2(1008, 0)
        }).start();
        this.showXiaoJinLong("animation1");
        Global.TheLegendOfDragon.playEffect("base/jp_move");
      },
      onSpinEnd: function onSpinEnd(idx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var reel, res, delayTime, anim, dir, symbol, icon, atlas, _symbol, label;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              Global.TheLegendOfDragon.playEffect("base/wheel_stop");
              if (idx == _this4._res.idx - 1) {
                reel = _this4._reels[idx];
                reel.anim1.active = true;
                reel.anim2.active = true;
              }
              if (2 == idx) {
                Global.TheLegendOfDragon.stopEffect("base/wheel");
                Global.TheLegendOfDragon.playEffect("base/wheel_wild");
                _this4._spining = false;
                res = _this4._res;
                delayTime = 0;
                anim = "animation2";
                dir = 1;
                if (1 == res.idx) {
                  anim = "animation2";
                  delayTime = .1;
                } else if (2 == res.idx) {
                  symbol = _this4._reels[res.idx - 1].symbols[0];
                  symbol.getChildByName("what").active = false;
                  icon = symbol.getChildByName("icon");
                  atlas = cc.vv.gameData.GetAtlasByName("base");
                  icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme177_wheel_ui_s" + res.card);
                  icon.scale = 0;
                  icon.runAction(cc.sequence(cc.scaleTo(.6, 1.1), cc.scaleTo(.2, 1)));
                  anim = "animation2";
                  dir = -1;
                  delayTime = .8;
                } else if (3 == res.idx) {
                  _symbol = _this4._reels[res.idx - 1].symbols[0];
                  _symbol.getChildByName("what").active = false;
                  label = _symbol.getChildByName("lbl_multipler");
                  label.getComponent(cc.Label).string = "X" + res.mul;
                  label.scale = 0;
                  label.runAction(cc.sequence(cc.scaleTo(.6, 1.1), cc.scaleTo(.2, 1)));
                  anim = "animation3";
                  delayTime = .8;
                }
                _this4.scheduleOnce(function() {
                  _this4.showXiaoJinLong(anim, dir);
                  Global.TheLegendOfDragon.playEffect("base/bonus_notify");
                  _this4._onSpinEndCallBack && _this4._onSpinEndCallBack();
                }, delayTime);
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      update: function update(dt) {
        if (!this._spining) return;
        for (var i = 0; i < 3; i++) {
          if (this._rounds[i] <= 0) continue;
          var reel = this._reels[i];
          var y = reel.holder.y - 1600 * dt;
          if (y <= -180) {
            y = 0;
            var pos0 = reel.symbols[0].getPosition();
            var tmppos0 = cc.v2(pos0.x, pos0.y);
            var pos1 = reel.symbols[1].getPosition();
            var tmppos1 = cc.v2(pos1.x, pos1.y);
            reel.symbols[0].position = tmppos1;
            reel.symbols[1].position = tmppos0;
            this._rounds[i] -= 1;
            this._rounds[i] <= 0 && this.onSpinEnd(i);
          }
          reel.holder.y = y;
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheLegendOfDragon_Cfg", "TheLegendOfDragon_Collect", "TheLegendOfDragon_GameData", "TheLegendOfDragon_Logic", "TheLegendOfDragon_Pick", "TheLegendOfDragon_Pop", "TheLegendOfDragon_Slots", "TheLegendOfDragon_Symbol", "TheLegendOfDragon_Wheel" ]);