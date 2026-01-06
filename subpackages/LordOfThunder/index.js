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
  LordOfThunder_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a4b7+kuWJIZKodpaOlwwic", "LordOfThunder_BonusGame");
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
        _exitCallBack: null,
        _reels: [],
        _emptyId: 13,
        _curShowId: 111,
        _cell_height: 81,
        _curRow: 6
      },
      start: function start() {},
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._curRow = this._row;
        this._cell_height = this._cfg.symbolSize.height;
        this.initBonusNode();
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reel" + (i + 1), this._reels_node);
          var scp = node.addComponent("LordOfThunder_BonusReel");
          scp.Init(i, 1, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      setAllSymbolEmpty: function setAllSymbolEmpty() {
        for (var col = 0; col < this._col; col++) for (var row = 0; row < this._row; row++) {
          var sym = this._reels[col].GetSymbolByRow(row);
          sym.ShowById(this._emptyId);
        }
      },
      initBonusNode: function initBonusNode() {
        this._bonus_slots = cc.find("safe_node/bonus_slots", this.node);
        this._bonus_slots.active = false;
        this._reels_panel = cc.find("mask", this._bonus_slots);
        this._reels_bg = cc.find("mask/reels_bg", this._bonus_slots);
        this._reels_node = cc.find("mask/reels", this._bonus_slots);
        this._node_times = cc.find("node_times", this._reels_bg);
        this.setTimesNode(false);
        this._spine_hit = cc.find("spine_hit", this._bonus_slots);
        this._spine_kuang_up = cc.find("safe_node/bonus_spine/spine_kuang_up", this.node);
        this._spine_kuang_down = cc.find("safe_node/bonus_spine/spine_kuang_down", this.node);
        this._spine_huoshen = cc.find("safe_node/bonus_spine/spine_huoshen", this.node);
        this._spine_result_title = cc.find("safe_node/bonus_spine/spine_result_title", this.node);
        this._spine_hit.active = false;
        this._spine_kuang_up.active = false;
        this._spine_kuang_down.active = false;
        this._spine_huoshen.active = false;
        this._spine_result_title.active = false;
        this._fire_node = cc.find("safe_node/fire_node", this.node);
        this._top_fireNode = cc.find("single_fire", this._fire_node);
        this._top_multiFireNode = cc.find("multi_fire", this._fire_node);
      },
      enterBonusGame: function enterBonusGame() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              cc.vv.gameData.SetIsBonusGame(true);
              _this._curAll = cc.vv.gameData.GetBonusAll();
              _this._curRest = _this._curAll - cc.vv.gameData.GetBonusRest();
              _this.lockJackpot();
              _this.showEnterState();
              _context.next = 9;
              return _this.awaitTime(2);

             case 9:
              cc.vv.gameData.SetIsBonusGame(true);
              _this.sendNextRound();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      triBonusGame: function triBonusGame(success) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              cc.vv.gameData.SetIsBonusGame(true);
              _this2._curAll = cc.vv.gameData.GetBonusAll();
              _this2._curRest = _this2._curAll - cc.vv.gameData.GetBonusRest();
              _this2.lockJackpot();
              _this2.initTriState();
              _context2.next = 8;
              return _this2.awaitTime(2);

             case 8:
              _this2.sendNextRound();
              _this2.setTimesNode(true);

             case 10:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitBonusGame: function exitBonusGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.SetIsBonusGame(false);
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.gameData.GetPopupScript().playBonusQpAnim();
              _context3.next = 5;
              return _this3.awaitTime(.5);

             case 5:
              _this3.resetJackpot();
              _this3.showExitState();
              _context3.next = 9;
              return _this3.awaitTime(1);

             case 9:
              cc.vv.gameData.GetSlotsScript().exitBonusGame();

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      initTriState: function initTriState() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              cc.find("Canvas/safe_node/spr_bg_bonus").active = true;
              cc.find("Canvas/safe_node/slots").active = false;
              cc.vv.gameData.GetSlotsScript().showShandianSpineActive(true);
              _this4._bonus_slots.active = true;
              _context4.next = 6;
              return _this4.awaitTime(0);

             case 6:
              _this4.playCharacterAnim(true);
              _this4._reels_bg.position = cc.v2(0, (_this4._curRow - 5) * _this4._cell_height);
              _this4._reels_node.position = cc.v2(0, (_this4._curRow - 3) * _this4._cell_height);
              _this4._top_fireNode.position = _this4._fire_node.convertToNodeSpaceAR(_this4._reels_panel.convertToWorldSpaceAR(cc.v2(0, (_this4._curRow - 6) * _this4._cell_height)));
              _this4.setPosType(2);
              _this4.initBottomSprType();
              _this4._curShowId = cc.vv.gameData.GetBonusCardId();
              cc.vv.gameData.SetBonusRandomList(_this4._curShowId);
              _this4._curRow = _this4._row;
              _this4.setAllSymbolEmpty();

             case 16:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showEnterState: function showEnterState() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var card, fire, i, row, col, sym, spInfo, _iterator, _step, info;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              card = [];
              if (cc.vv.gameData.GetBonusAll() === cc.vv.gameData.GetBonusRest()) _this5._curRow = _this5._row; else {
                card = cc.vv.gameData.GetBonusCards();
                _this5._curRow = card.length / _this5._col;
              }
              cc.find("Canvas/safe_node/spr_bg_bonus").active = true;
              cc.find("Canvas/safe_node/slots").active = false;
              cc.vv.gameData.GetSlotsScript().showShandianSpineActive(true);
              _this5._bonus_slots.active = true;
              _context5.next = 8;
              return _this5.awaitTime(0);

             case 8:
              _this5.playCharacterAnim(true);
              _this5._reels_bg.position = cc.v2(0, (_this5._curRow - 5) * _this5._cell_height);
              _this5._reels_node.position = cc.v2(0, (_this5._curRow - 3) * _this5._cell_height);
              _this5._top_fireNode.position = _this5._fire_node.convertToNodeSpaceAR(_this5._reels_panel.convertToWorldSpaceAR(cc.v2(0, (_this5._curRow - 6) * _this5._cell_height)));
              _this5.setPosType(2);
              _this5.initBottomSprType();
              _this5.initTimesNode();
              _this5._curShowId = cc.vv.gameData.GetBonusCardId();
              cc.vv.gameData.SetBonusRandomList(_this5._curShowId);
              _this5.setAllSymbolEmpty();
              fire = cc.vv.gameData.GetBonusScript().setMultiFireNode(_this5._curShowId, 0, 0, 6);
              fire.active = true;
              fire.getComponent(sp.Skeleton).addAnimation(0, "animation6", true);
              for (i = 0; i < card.length; i++) if (card[i] !== _this5._emptyId) {
                row = Math.floor(i / _this5._col);
                col = i % _this5._col;
                if (0 === col && row >= 0 && row <= 5) ; else {
                  sym = _this5.setSymbolTopAni(row, col, card[i]);
                  if (12 !== card[i]) {
                    sym.ShowById(card[i]);
                    sym.playBonusShowAnim();
                  } else {
                    spInfo = cc.vv.gameData.GetBonusSpInfo();
                    _iterator = _createForOfIteratorHelper(spInfo);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        info = _step.value;
                        info.idx === i + 1 && (1 === info.rtype ? sym.ShowById(121) : 2 === info.rtype ? sym.ShowById(122) : 3 === info.rtype ? sym.ShowById(123) : 4 === info.rtype && sym.ShowById(124));
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    sym.showBg(true);
                  }
                }
              }

             case 22:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showExitState: function showExitState() {
        this._curRow = 6;
        cc.find("Canvas/safe_node/spr_bg_bonus").active = false;
        cc.find("Canvas/safe_node/slots").active = true;
        cc.vv.gameData.GetSlotsScript().showShandianSpineActive(false);
        this._bonus_slots.active = false;
        this.playCharacterAnim(false);
        this._reels_bg.position = cc.v2(0, (this._curRow - 5) * this._cell_height);
        this._reels_node.position = cc.v2(0, (this._curRow - 3) * this._cell_height);
        this._top_fireNode.position = this._fire_node.convertToNodeSpaceAR(this._reels_panel.convertToWorldSpaceAR(cc.v2(0, (this._curRow - 6) * this._cell_height)));
        this.setPosType(1);
        this.destroyAllMultiFire();
      },
      initBottomSprType: function initBottomSprType() {
        var fireList = cc.vv.gameData.GetBonusFireList();
        var type = fireList[0];
        cc.find("node/spr_blue", this._node_times).active = 1 === type;
        cc.find("node/spr_purple", this._node_times).active = 2 === type;
      },
      initTimesNode: function initTimesNode() {
        var kuang = cc.find("spr_kuang", this._node_times);
        kuang.active = true;
        cc.find("lbl_times_curr", kuang).getComponent(cc.Label).string = this._curRest;
        cc.find("lbl_times_all", kuang).getComponent(cc.Label).string = this._curAll;
      },
      setTimesNode: function setTimesNode(bShow) {
        var kuangNode = cc.find("spr_kuang", this._node_times);
        if (bShow) {
          this.initTimesNode();
          kuangNode.opacity = 0;
          cc.tween(kuangNode).to(.5, {
            opacity: 255
          }).start();
        } else {
          kuangNode.opacity = 255;
          kuangNode.active = false;
        }
      },
      setSymbolTopAni: function setSymbolTopAni(row, col, id) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("reel%s/top_fire_%s", col, row), this._top_fireNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        var copyNode = cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab);
        var newNode = cc.instantiate(copyNode);
        var scp = newNode.addComponent(symScp);
        newNode.parent = this._top_fireNode.getChildByName("reel" + col);
        newNode.name = cc.js.formatStr("top_fire_%s", row);
        var posY = (6 - row - .5) * this._cell_height;
        newNode.position = cc.v2(0, posY);
        newNode.zIndex = 5 * row + col + 10 * row + 10;
        scp.setSymType("bonus");
        return scp;
      },
      getSymbolTopAni: function getSymbolTopAni(row, col) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("reel%s/top_fire_%s", col, row), this._top_fireNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        return null;
      },
      destroyAllTopFire: function destroyAllTopFire() {
        for (var col = 0; col < this._col; col++) {
          var reel = cc.find("reel" + col, this._top_fireNode);
          reel.destroyAllChildren();
        }
      },
      setPosType: function setPosType(type) {
        var _this6 = this;
        var node;
        node = 1 === type ? cc.find("safe_node/slots/reels", this.node) : this._reels_node;
        this.scheduleOnce(function() {
          _this6._top_multiFireNode.position = _this6._top_multiFireNode.parent.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
        }, 0);
      },
      setMultiFireNode: function setMultiFireNode(id, col, s_idx, num) {
        var cloneNode = this.getCloneNode(id, num);
        var fireNode = cc.instantiate(cloneNode);
        fireNode.name = cc.js.formatStr("fireNode_%s_%s", s_idx, num);
        fireNode.active = true;
        fireNode.parent = cc.find("reel" + (col + 1), this._top_multiFireNode);
        var height = this._cfg.symbolSize.height;
        var posY = (s_idx + .5 * num) * height * -1;
        fireNode.position = cc.v2(0, posY);
        return fireNode;
      },
      getMultiFireNode: function getMultiFireNode(col, s_idx, num) {
        var showNode = cc.find(cc.js.formatStr("reel%s/fireNode_%s_%s", col + 1, s_idx, num), this._top_multiFireNode);
        if (showNode) return showNode;
        return null;
      },
      destroyAllMultiFire: function destroyAllMultiFire() {
        for (var col = 0; col < this._col; col++) {
          var reel = cc.find("reel" + (col + 1), this._top_multiFireNode);
          reel.destroyAllChildren();
        }
      },
      getCloneNode: function getCloneNode(id, num) {
        var str_id = "";
        var str_length = "";
        111 === id ? str_id = "blue" : 112 === id ? str_id = "gold" : 113 === id ? str_id = "red" : 114 === id && (str_id = "purple");
        1 === num ? str_length = "1" : num > 1 && num < 8 ? str_length = "234567" : num >= 8 && num <= 10 && (str_length = "8910");
        var str = cc.js.formatStr("%s_%s", str_id, str_length);
        var node = cc.find("Canvas/safe_node/fire_node/clone_node/" + str);
        return node;
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._curTimes -= 1;
        this._curRest += 1;
        this.initTimesNode();
        this.playKuangFire();
        Global.SlotsSoundMgr.playEffect("startspin");
      },
      MoveReels: function MoveReels(arry) {
        this.moveReelLastIdx = -1;
        for (var i = 1; i < arry.length; i++) {
          var item = arry[i];
          item.StartMove();
          var idx = item.GetReelIdx();
          idx > this.moveReelLastIdx && (this.moveReelLastIdx = idx);
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = this._row;
        var reelResults = [];
        for (var i = 0; i < this._row * this._col; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
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
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        for (var row = 0; row < this._row; row++) {
          var symbol = this._reels[colIdx].GetSymbolByRow(row);
          var id = symbol.GetShowId();
          var sym = this.getSymbolTopAni(this._row - row - 1, colIdx);
          if (13 != id && !sym) {
            var top_scp = this.setSymbolTopAni(this._row - row - 1, colIdx, id);
            top_scp.ShowById(id);
            if (12 === id) {
              top_scp.playStopAnimation();
              symbol.ShowById(this._emptyId);
            } else {
              Global.SlotsSoundMgr.playEffect("symbol_hint3");
              top_scp.playBonusShowAnim();
              top_scp.playBonusKuangAnim();
              Global.SlotsSoundMgr.playEffect("fire1");
            }
            var all = cc.vv.gameData.GetBonusAll();
            if (this._curAll != all) {
              this._curAll = all;
              this.initTimesNode();
            }
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _context6.next = 2;
              return _this7.awaitTime(1);

             case 2:
              _context6.next = 4;
              return _this7.playSpecialAnim();

             case 4:
              _context6.next = 6;
              return _this7.awaitTime(.5);

             case 6:
              cc.vv.gameData.GetBonusRest() > 0 ? _this7.sendNextRound() : _this7.playBonusEnd();

             case 7:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playKuangFire: function playKuangFire() {
        this._spine_kuang_up.active = true;
        this._spine_kuang_down.active = true;
        this._spine_kuang_up.y = this._spine_kuang_down.y + this._curRow * this._cell_height + 20;
        this._spine_kuang_up.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_kuang_down.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
      },
      playSpecialAnim: function playSpecialAnim() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var hasSpecial, col, row, top_sym, type, self, titleAnimName, pos1, rs, jp, mult;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      hasSpecial = false;
                      col = 1;

                     case 2:
                      if (!(col < _this8._col)) {
                        _context7.next = 64;
                        break;
                      }
                      row = 0;

                     case 4:
                      if (!(row < _this8._row)) {
                        _context7.next = 61;
                        break;
                      }
                      top_sym = _this8.getSymbolTopAni(_this8._row - row - 1, col);
                      if (!(top_sym && 12 === top_sym.GetShowId())) {
                        _context7.next = 58;
                        break;
                      }
                      hasSpecial = true;
                      Global.SlotsSoundMgr.playEffect("change2");
                      type = cc.vv.gameData.GetBonusSpResult().type;
                      self = _this8;
                      titleAnimName = "";
                      if (1 === type) top_sym.playBonusAnimation("animation101", false); else if (2 === type) {
                        top_sym.playBonusAnimation("animation103", false);
                        titleAnimName = "animation3";
                      } else if (3 === type) {
                        top_sym.playBonusAnimation("animation102", false);
                        titleAnimName = "animation2";
                      } else if (4 === type) {
                        top_sym.playBonusAnimation("animation104", false);
                        titleAnimName = "animation4";
                      }
                      _context7.next = 15;
                      return _this8.awaitTime(2);

                     case 15:
                      _context7.next = 17;
                      return _this8.awaitTime(2.3);

                     case 17:
                      pos1 = _this8._bonus_slots.convertToNodeSpaceAR(top_sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      _this8._spine_hit.setPosition(pos1);
                      _this8._spine_hit.active = true;
                      _this8._spine_hit.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      Global.SlotsSoundMgr.playEffect("transtion2");
                      _context7.next = 24;
                      return _this8.awaitTime(1);

                     case 24:
                      Global.SlotsSoundMgr.stopEffectByName("change2");
                      if (!(1 === type)) {
                        _context7.next = 36;
                        break;
                      }
                      _context7.next = 28;
                      return _this8.showWheelGame(top_sym);

                     case 28:
                      top_sym.ShowById(121);
                      rs = cc.vv.gameData.GetBonusSpResult().rs;
                      jp = cc.vv.gameData.GetWheelScript().getJpType(rs.rs_1.idx - 1);
                      mult = cc.vv.gameData.GetWheelScript().getMultType(rs.rs_2.idx - 1);
                      top_sym.ShowWheelResult(mult, jp);
                      sucess();
                      _context7.next = 57;
                      break;

                     case 36:
                      _this8._spine_result_title.active = true;
                      _this8._spine_result_title.getComponent(sp.Skeleton).setAnimation(0, titleAnimName, false);
                      _context7.next = 40;
                      return _this8.awaitTime(2);

                     case 40:
                      if (!(2 === type)) {
                        _context7.next = 46;
                        break;
                      }
                      _context7.next = 43;
                      return self.showAddReward();

                     case 43:
                      top_sym.ShowById(122);
                      _context7.next = 56;
                      break;

                     case 46:
                      if (!(3 === type)) {
                        _context7.next = 52;
                        break;
                      }
                      _context7.next = 49;
                      return self.showUpReward();

                     case 49:
                      top_sym.ShowById(123);
                      _context7.next = 56;
                      break;

                     case 52:
                      if (!(4 === type)) {
                        _context7.next = 56;
                        break;
                      }
                      _context7.next = 55;
                      return self.showScatterReward(row, col);

                     case 55:
                      top_sym.ShowById(124);

                     case 56:
                      sucess();

                     case 57:
                      top_sym.showBg(true);

                     case 58:
                      row++;
                      _context7.next = 4;
                      break;

                     case 61:
                      col++;
                      _context7.next = 2;
                      break;

                     case 64:
                      hasSpecial || sucess();

                     case 65:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showWheelGame: function showWheelGame(top_sym) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  var rs;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      rs = cc.vv.gameData.GetBonusSpResult().rs;
                      _context9.next = 3;
                      return cc.vv.gameData.GetWheelScript().gainWheel(rs);

                     case 3:
                      sucess();

                     case 4:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      showAddReward: function showAddReward() {
        var _this9 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var sp_result, type, newId, col, row, topSym, old_fire, multi_fire;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("plus");
                sp_result = cc.vv.gameData.GetBonusSpResult();
                type = sp_result.rs.fire;
                newId = _this9._curShowId;
                1 === type ? newId = 111 : 2 === type ? newId = 112 : 3 === type ? newId = 113 : 4 === type && (newId = 114);
                for (col = 0; col < _this9._col; col++) for (row = 0; row < _this9._curRow; row++) {
                  topSym = _this9.getSymbolTopAni(row, col);
                  if (topSym && topSym.GetShowId() === _this9._curShowId) {
                    topSym.ShowById(newId);
                    topSym.playBonusShowAnim();
                  }
                }
                cc.vv.gameData.SetBonusRandomList(newId);
                old_fire = _this9.getMultiFireNode(0, 0, 6);
                old_fire.destroy();
                multi_fire = _this9.setMultiFireNode(newId, 0, 0, 6);
                multi_fire.active = true;
                multi_fire.getComponent(sp.Skeleton).setAnimation(0, "animation6", true);
                _this9._curShowId = newId;
                _context11.next = 15;
                return _this9.awaitTime(1);

               case 15:
                sucess();

               case 16:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showUpReward: function showUpReward() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
                  var awaitT1, awaitT2, col, sym;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("reelup");
                      _this10._curRow += 1;
                      awaitT1 = .8;
                      cc.tween(_this10._reels_bg).by(awaitT1, {
                        position: cc.v2(0, _this10._cell_height)
                      }).start();
                      cc.tween(_this10._reels_node).by(awaitT1, {
                        position: cc.v2(0, _this10._cell_height)
                      }).start();
                      cc.tween(_this10._top_fireNode).by(awaitT1, {
                        position: cc.v2(0, _this10._cell_height)
                      }).start();
                      cc.tween(_this10._top_multiFireNode).by(awaitT1, {
                        position: cc.v2(0, _this10._cell_height)
                      }).start();
                      _context12.next = 9;
                      return _this10.awaitTime(awaitT1);

                     case 9:
                      awaitT2 = .5;
                      col = 0;

                     case 11:
                      if (!(col < _this10._col)) {
                        _context12.next = 22;
                        break;
                      }
                      sym = _this10.setSymbolTopAni(_this10._curRow - 1, col, _this10._curShowId);
                      sym.ShowById(_this10._curShowId);
                      sym.playBonusShowAnim();
                      sym.playBoombAnim();
                      Global.SlotsSoundMgr.playEffect("symbol_hint3");
                      _context12.next = 19;
                      return _this10.awaitTime(awaitT2);

                     case 19:
                      col++;
                      _context12.next = 11;
                      break;

                     case 22:
                      sucess();

                     case 23:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      showScatterReward: function showScatterReward(row, col) {
        var _this11 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(sucess, failed) {
            var need, s_sym, n_col, _loop, n_row;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("expand");
                need = false;
                s_sym = _this11.getSymbolTopAni(_this11._row - row - 1, col);
                for (n_col = Math.max(col - 1, 1); n_col <= Math.min(_this11._col - 1, col + 1); n_col++) {
                  _loop = function _loop(n_row) {
                    var e_sym = _this11.getSymbolTopAni(_this11._row - n_row - 1, n_col);
                    if (e_sym) ; else {
                      need = true;
                      e_sym = _this11.setSymbolTopAni(_this11._row - n_row - 1, n_col, _this11._curShowId);
                      e_sym.ShowById(_this11._curShowId);
                      var e_pos = e_sym.node.position;
                      var s_pos = e_sym.node.parent.convertToNodeSpaceAR(s_sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      e_sym.node.position = s_pos;
                      cc.tween(e_sym.node).to(.5, {
                        position: e_pos
                      }).call(function() {
                        e_sym.playBonusShowAnim();
                      }).start();
                    }
                  };
                  for (n_row = Math.max(row - 1, 0); n_row <= Math.min(_this11._row - 1, row + 1); n_row++) _loop(n_row);
                }
                if (!need) {
                  _context14.next = 7;
                  break;
                }
                _context14.next = 7;
                return _this11.awaitTime(.8);

               case 7:
                _context14.next = 9;
                return _this11.awaitTime(.5);

               case 9:
                sucess();

               case 10:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      playBonusEnd: function playBonusEnd() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var old, new_fire, col, allCount, start_idx, row, sym, _new_fire, _new_fire2, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              _this12.setTimesNode(false);
              if (_this12._curRow > _this12._row) {
                old = _this12.getMultiFireNode(0, 0, 6);
                old.destroy();
                new_fire = _this12.setMultiFireNode(_this12._curShowId, 0, 0, _this12._curRow);
                new_fire.active = true;
                new_fire.getComponent(sp.Skeleton).setAnimation(0, "animation" + _this12._curRow, true);
              }
              for (col = 1; col < _this12._col; col++) {
                allCount = 0;
                start_idx = 0;
                for (row = 0; row < _this12._curRow; row++) {
                  sym = _this12.getSymbolTopAni(row, col);
                  if (sym) {
                    0 === allCount && (start_idx = row);
                    allCount += 1;
                  } else {
                    if (allCount > 0) {
                      _new_fire = _this12.setMultiFireNode(_this12._curShowId, col, start_idx, allCount);
                      _new_fire.active = true;
                      allCount > 1 ? _new_fire.getComponent(sp.Skeleton).setAnimation(0, "animation" + allCount, true) : _new_fire.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                    }
                    allCount = 0;
                  }
                  if (allCount > 0 && row === _this12._curRow - 1) {
                    _new_fire2 = _this12.setMultiFireNode(_this12._curShowId, col, start_idx, allCount);
                    _new_fire2.active = true;
                    allCount > 1 ? _new_fire2.getComponent(sp.Skeleton).setAnimation(0, "animation" + allCount, true) : _new_fire2.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                  }
                }
              }
              _this12.setAllSymbolEmpty();
              _this12.destroyAllTopFire();
              cc.tween(_this12._top_multiFireNode).repeatForever(cc.tween().to(.8, {
                scale: 1.1
              }).to(.8, {
                scale: 1
              })).start();
              nWin = cc.vv.gameData.GetBonusTotalWinCoin();
              nTotal = nWin;
              _context15.next = 10;
              return new Promise(function(sucess, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 10:
              _this12._top_multiFireNode.cleanup();
              _this12._top_multiFireNode.setScale(1);
              _this12.exitBonusGame();

             case 13:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      sendNextRound: function sendNextRound() {
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      GetStopTime: function GetStopTime() {
        return this._cfg.auto_stop_time || 1;
      },
      SetStopTime: function SetStopTime(nVal) {
        this._stopTime = nVal;
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx * nIter;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this.moveReelLastIdx;
      },
      lockJackpot: function lockJackpot() {
        var poolList = cc.vv.gameData.GetBonusPoolList();
        var prizepool = cc.find("safe_node/LMSlots_PrizePool_1", this.node).getComponent("LMSlots_PrizePool_Base");
        prizepool.PausePool([ {
          prizeType: 0,
          pauseNum: poolList[0]
        }, {
          prizeType: 1,
          pauseNum: poolList[1]
        }, {
          prizeType: 2,
          pauseNum: poolList[2]
        }, {
          prizeType: 3,
          pauseNum: poolList[3]
        }, {
          prizeType: 4,
          pauseNum: poolList[4]
        } ]);
      },
      resetJackpot: function resetJackpot() {
        var prizepool = cc.find("safe_node/LMSlots_PrizePool_1", this.node).getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) for (var i = 0; i < this._reels.length; i++) {
            var item = this._reels[i];
            var reelStopInterv = this.GetReelStopInter(i);
            item.StopMove(reelStopInterv);
          }
        }
      },
      awaitTime: function awaitTime(time) {
        var _this13 = this;
        return new Promise(function(sucess, failed) {
          _this13.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      playCharacterAnim: function playCharacterAnim(bPlay) {
        cc.vv.gameData.GetSlotsScript().playCharacterAnim(bPlay);
      }
    });
    cc._RF.pop();
  }, {} ],
  LordOfThunder_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6187ekl5JpPoYXoTVTEP4sJ", "LordOfThunder_BonusReel");
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
      extends: cc.Component,
      properties: {
        _maskList: [],
        _holderData: []
      },
      start: function start() {},
      Init: function Init(idx, nCount, holdCount, aniNode) {
        this._reelIdx = idx;
        this._holderCount = holdCount;
        this._nCount = nCount;
        this._symbols = [];
        this._topAniNode = aniNode;
        for (var index = 0; index < this._holderCount; index++) {
          var holdInfo = {};
          var mask = cc.find("mask_" + (index + 1), this.node);
          holdInfo.node = cc.find("holder", mask);
          holdInfo.OrigPosY = holdInfo.node.position.y;
          holdInfo.symbols = [];
          this._maskList.push(mask);
          this._holderData.push(holdInfo);
        }
        this.LoadSymbols();
      },
      GetReelIdx: function GetReelIdx() {
        return this._reelIdx;
      },
      LoadSymbols: function LoadSymbols() {
        var cfg = cc.vv.gameData.getGameCfg();
        var url = cfg.symbolPrefab;
        this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url));
        for (var index = 0; index < this._holderData.length; index++) {
          var info = this._holderData[index];
          for (var i = 0; i < 2; i++) {
            var _cfg = cc.vv.gameData.getGameCfg();
            var node = cc.instantiate(this._symbolTemplete);
            node.parent = info.node;
            var scp = node.addComponent(_cfg.scripts.Symbols);
            var idx = i + 1;
            scp.Init(idx, this._topAniNode);
            scp.SetSymbolReelIdx(this._reelIdx);
            scp.setSymType("bonus");
            info.symbols.push(scp);
          }
          this.ReLayOut(info.symbols);
        }
      },
      ReLayOut: function ReLayOut(symbols) {
        for (var i = 0; i < symbols.length; i++) {
          var element = symbols[i];
          element.node.position = this.GetSymbolPosByRow(i);
          element.SetSymbolIdx(i);
        }
      },
      GetSymbolByRow: function GetSymbolByRow(row) {
        return this._holderData[row].symbols[0];
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        var cfg = cc.vv.gameData.getGameCfg();
        return cc.v2(0, (row + .5) * cfg.symbolSize.height);
      },
      StartMove: function StartMove() {
        this._result = null;
        var cfg = cc.vv.gameData.getGameCfg();
        this._curY = 0;
        this._bMoving = true;
        this._bStoping = false;
        this._fillCount = 0;
        var _iterator = _createForOfIteratorHelper(this._holderData), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            var _iterator2 = _createForOfIteratorHelper(info.symbols), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var symbol = _step2.value;
                symbol.node.active = true;
                symbol.StartMove();
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
        this._speed = cfg.speed;
        this._offset = cfg.symbolSize.height;
      },
      StopMove: function StopMove(delayTime) {
        if (!this._bMoving) return;
        this._bStoping = true;
        this._stopTime = delayTime;
      },
      StopMoveRightNow: function StopMoveRightNow() {
        this._stopRightNow = true;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        var slots = cc.vv.gameData.GetBonusScript();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      SetResult: function SetResult(val) {
        this._result = val;
      },
      UpdatePosition: function UpdatePosition(dt) {
        dt = Math.min(dt, .025);
        this._stopTime = this._stopTime - dt;
        if (this._stopTime <= 0 && this._bStoping && this._result && this._stopRightNow) {
          var cfg = cc.vv.gameData.getGameCfg();
          this._speed = Math.max(cfg.speed / 2, this._speed - cfg.speed * dt);
        }
        this._curY += dt * this._speed;
        if (this._curY > this._offset) {
          this._curY = 0;
          var _iterator3 = _createForOfIteratorHelper(this._holderData), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var info = _step3.value;
              info.node.y = info.OrigPosY;
              var sid = 0;
              var data = null;
              if (this._stopTime <= 0 && this._bStoping && this._result) if (this._fillCount < this._holderCount) {
                var item = this._result.shift();
                sid = item.sid;
                data = item.data;
                this._fillCount++;
              } else this._bMoving = false;
              var symbol = info.symbols.shift();
              sid > 0 ? symbol.ShowById(sid, data) : symbol.ShowRandomSymbol();
              info.symbols.push(symbol);
              this.ReLayOut(info.symbols);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _iterator4 = _createForOfIteratorHelper(this._holderData), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _info = _step4.value;
              _info.node.y = _info.OrigPosY - this._curY;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        this._bMoving || this.OnReelBounsAction();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {},
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        this.OnReelSpinEnd();
      },
      OnReelBounsAction: function OnReelBounsAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        var _iterator5 = _createForOfIteratorHelper(this._holderData), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var info = _step5.value;
            cc.tween(info.node).to(distance / this._speed, {
              position: cc.v2(info.node.x, info.OrigPosY - distance)
            }).to(time, {
              position: cc.v2(info.node.x, info.OrigPosY)
            }).start();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        cc.tween(this.node).delay(distance / this._speed).call(this.OnReelBounsActionDeep.bind(this)).delay(time).call(this.OnReelBounsActionEnd.bind(this)).start();
      },
      update: function update(dt) {
        this._bMoving && this.UpdatePosition(dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  LordOfThunder_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0ea48X241LtIE635Rr59ac", "LordOfThunder_Cfg");
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
        },
        isMask: true
      }), _defineProperty(_symbol, 201, {
        node: "s201",
        win_node: "w201",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        nudge_ani: {
          name: "animation2",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 202, {
        node: "s202",
        win_node: "w202",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        nudge_ani: {
          name: "animation2",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 203, {
        node: "s203",
        win_node: "w203",
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        nudge_ani: {
          name: "animation2",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 111, {
        node: "s111",
        bonus_node: "s111_0",
        win_node: "w111",
        show_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 112, {
        node: "s112",
        bonus_node: "s112_0",
        win_node: "w112",
        show_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 113, {
        node: "s113",
        bonus_node: "s113_0",
        win_node: "w113",
        show_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 114, {
        node: "s114",
        bonus_node: "s114_0",
        win_node: "w114",
        show_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        bonus_node: "s12",
        win_node: "w12",
        stop_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 121, {
        node: "s121",
        win_node: ""
      }), _defineProperty(_symbol, 122, {
        node: "s122",
        win_node: ""
      }), _defineProperty(_symbol, 123, {
        node: "s123",
        win_node: ""
      }), _defineProperty(_symbol, 124, {
        node: "s124",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s0",
        win_node: "",
        win_ani: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "LordOfThunder_Slots",
        Reels: "LordOfThunder_Reels",
        Symbols: "LordOfThunder_Symbol"
      },
      col: 5,
      row: 6,
      bonus_col: 5,
      bonus_row: 10,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 81
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      helpItems: [ "games/LordOfThunder/prefab/help_node/page_1", "games/LordOfThunder/prefab/help_node/page_2", "games/LordOfThunder/prefab/help_node/page_3" ],
      commEffect: {
        path: "games/LordOfThunder/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 2.5,
      reelStateInfo: [ {
        id: [ 201, 202, 203 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/LordOfThunder/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_speedup",
        antSpeed: 2e3
      } ],
      normalBgm: "base_bgm",
      sysFloatOffsetPos: cc.v2(0, 40)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LordOfThunder_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "715a5fmRltCmKa0qRMOwERZ", "LordOfThunder_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._fireGame = deskInfo.fireGame;
        if (this._fireGame) {
          this._bonusRest = this._fireGame.rest;
          this._bonusAll = this._fireGame.all;
          this._bonusTotalWinCoin = this._fireGame.totalWinCoin;
          this._fireGame.fire && this.setBonusIdByFire(this._fireGame.fire);
          this._fireGame.poolList && (this._poolList = this._fireGame.poolList);
        }
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._fireGame = msg.fireGame;
          if (this._fireGame) {
            if (this._fireGame.spineCnt) {
              this._bonusRest = this._fireGame.spineCnt.rest;
              this._bonusAll = this._fireGame.spineCnt.all;
              this._bonusTotalWinCoin = this._fireGame.spineCnt.totalWinCoin;
            }
            this._fireGame.poolList && (this._poolList = this._fireGame.poolList);
          }
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
      },
      SetPopupScript: function SetPopupScript(scp) {
        this._popupScp = scp;
      },
      GetPopupScript: function GetPopupScript() {
        return this._popupScp;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      SetWheelScript: function SetWheelScript(scp) {
        this._wheelScp = scp;
      },
      GetWheelScript: function GetWheelScript() {
        return this._wheelScp;
      },
      GetFireGame: function GetFireGame() {
        return this._fireGame;
      },
      GetChangeNumBet: function GetChangeNumBet() {
        return this._fireGame.minBet;
      },
      SetIsBonusGame: function SetIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      IsBonusGame: function IsBonusGame() {
        return this._isBonusGame;
      },
      GetBonusAll: function GetBonusAll() {
        return this._bonusAll;
      },
      GetBonusRest: function GetBonusRest() {
        return this._bonusRest;
      },
      GetBonusTotalWinCoin: function GetBonusTotalWinCoin() {
        return this._bonusTotalWinCoin;
      },
      setBonusIdByFire: function setBonusIdByFire(type) {
        1 === type ? this.SetBonusCardId(111) : 2 === type ? this.SetBonusCardId(112) : 3 === type ? this.SetBonusCardId(113) : 4 === type && this.SetBonusCardId(114);
      },
      SetBonusCardId: function SetBonusCardId(id) {
        this._bonusCardId = id;
      },
      GetBonusCardId: function GetBonusCardId() {
        return this._bonusCardId;
      },
      SetBonusRandomList: function SetBonusRandomList(id) {
        var list = [ 12, 13, 13, 13, 13 ];
        list.push(id);
        list.push(id);
        list.push(id);
        list.push(id);
        this._bonusRandomList = list;
      },
      GetBonusRandomList: function GetBonusRandomList() {
        return this._bonusRandomList;
      },
      GetBonusCards: function GetBonusCards() {
        return this._fireGame.cards;
      },
      GetBonusSpInfo: function GetBonusSpInfo() {
        return this._fireGame.spInfo;
      },
      GetBonusFireList: function GetBonusFireList() {
        return this._fireGame.fireList;
      },
      GetBonusSpResult: function GetBonusSpResult() {
        return this._fireGame.sp_result;
      },
      GetBonusPoolList: function GetBonusPoolList() {
        return this._poolList;
      },
      GetFreeWinCoin: function GetFreeWinCoin() {
        return this._freeWinCoin;
      },
      setSymbolDark: function setSymbolDark(bDark) {
        this._symDark = bDark;
      },
      getSymbolDark: function getSymbolDark() {
        return this._symDark;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  LordOfThunder_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74423p3ZTNEiKUffJTiE0/M", "LordOfThunder_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("LordOfThunder_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("LordOfThunder_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
        var script_wheel = this.node.addComponent("LordOfThunder_Wheel");
        script_wheel.Init();
        cc.vv.gameData.SetWheelScript(script_wheel);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LordOfThunder_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dad6a75CH9KtJKyiX+ZVjDx", "LordOfThunder_Popup");
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
        this._node_free_end = cc.find("pop_free_end", this._node_popup);
        this._node_free_end.active = false;
        this._node_free_tri = cc.find("pop_free_tri", this._node_popup);
        this._node_free_tri.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._spine_free_chui = cc.find("spine_free_chui", this._node_qp);
        this._spine_bonus_qp = cc.find("spine_bonus_qp", this._node_qp);
        this._spine_free_chui.active = false;
        this._spine_bonus_qp.active = false;
      },
      showGainFree: function showGainFree(freeCnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var btn_collect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("touch_out");
                      _this._node_popup.active = true;
                      _this._node_free_tri.active = true;
                      cc.find("fnt_freecnt", _this._node_free_tri).getComponent(cc.Label).string = freeCnt;
                      _this._node_free_tri.opacity = 0;
                      cc.tween(_this._node_free_tri).to(.5, {
                        opacity: 255
                      }).start();
                      _context3.next = 8;
                      return _this.awaitTime(.5);

                     case 8:
                      btn_collect = _this._node_free_tri.getChildByName("btn_collect");
                      self = _this;
                      clickFunc = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                             case 0:
                              btn_collect.getComponent(cc.Button).interactable = false;
                              cc.tween(self._node_free_tri).to(.5, {
                                opacity: 0
                              }).call(function() {
                                self._node_popup.active = false;
                                self._node_free_tri.active = false;
                              }).start();
                              _context.next = 4;
                              return _this.awaitTime(.4);

                             case 4:
                              sucess();

                             case 5:
                             case "end":
                              return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function clickFunc() {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                      btn_collect.getComponent(cc.Button).interactable = true;
                      btn_collect.off("click");
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      })));

                     case 15:
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
      showEndFree: function showEndFree(winCoin) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var lbl_winCoin, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("FreeGame_End");
                _this2._node_popup.active = true;
                _this2._node_free_end.active = true;
                lbl_winCoin = cc.find("lbl_wincoin", _this2._node_free_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 1.5, null, null, 0, true);
                _this2._node_free_end.opacity = 0;
                cc.tween(_this2._node_free_end).to(.5, {
                  opacity: 255
                }).start();
                _context7.next = 10;
                return _this2.awaitTime(.5);

               case 10:
                btn_collect = _this2._node_free_end.getChildByName("btn_collect");
                self = _this2;
                clickFunc = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        lbl_winCoin.stopAllActions();
                        if (!(Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) < winCoin)) {
                          _context5.next = 6;
                          break;
                        }
                        lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                        _context5.next = 6;
                        return _this2.awaitTime(.2);

                       case 6:
                        cc.tween(self._node_free_end).to(.5, {
                          opacity: 0
                        }).call(function() {
                          self._node_popup.active = false;
                          self._node_free_end.active = false;
                        }).start();
                        _context5.next = 9;
                        return _this2.awaitTime(.4);

                       case 9:
                        sucess();

                       case 10:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function clickFunc() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 17:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playFreeQpAnim: function playFreeQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("transtion1");
        this._spine_free_chui.active = true;
        this._spine_free_chui.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_free_chui.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_free_chui.active = false;
        });
      },
      playBonusQpAnim: function playBonusQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("fire1");
        this._spine_bonus_qp.active = true;
        this._spine_bonus_qp.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_bonus_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_bonus_qp.active = false;
        });
      },
      awaitTime: function awaitTime(time) {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LordOfThunder_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aca474mN1JaJAIa3Ux2GEW", "LordOfThunder_Reels");
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
      reelMove: function reelMove(mult, num, time) {
        var height = this._cfg.symbolSize.height;
        cc.tween(this._holderNode).to(time, {
          position: cc.v2(this._holderNode.x, this._holderNode.y + mult * num * height)
        }).start();
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode + "_" + (this._reelIdx + 1), this.node.parent);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        } else {
          var _node = cc.find(name + "_" + (this._reelIdx + 1), this.node.parent);
          if (_node) {
            _node.active = bShow;
            _node.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            cc.vv.gameData.setSymbolDark(true);
            cc.vv.gameData.GetSlotsScript().setBgMask(true);
            cc.vv.gameData.GetSlotsScript().setAllSymbolMask(true);
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      getAllSymbol: function getAllSymbol() {
        return this._symbols;
      },
      setScatterNum: function setScatterNum(num) {
        this._scatterNum = num;
      },
      getScatterNum: function getScatterNum() {
        return this._scatterNum;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  LordOfThunder_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "571868MOi5O8as2pkkQxA50", "LordOfThunder_Slots");
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
      properties: {
        _isSixTri: false,
        _triFreeIdxs: [],
        _isInitEntry: true
      },
      start: function start() {},
      Init: function Init(top, bottom) {
        this._isInitEntry = true;
        Global.registerEvent(EventId.END_QUEUE_POP, this.onEventEndQueuePop, this);
        this._node_banner = cc.find("node_banner", this.node);
        this._node_free_spins = cc.find("node_free_spins", this.node);
        this._node_free_spins.active = false;
        this._top_free = cc.find("top_free", this.node);
        this.hideAllFreeCnt();
        this.setBgMask(false);
        this._super(top, bottom);
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.initBannerState();
              cc.vv.gameData.GetTotalFree() > 0 ? _this.ShowGameview(true) : _this.ShowGameview(false);
              cc.vv.gameData.GetBonusAll() > 0 ? cc.vv.gameData.GetBonusScript().enterBonusGame() : _this.CanDoNextRound();

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onEventEndQueuePop: function onEventEndQueuePop() {
        if (this._isInitEntry) {
          this._isInitEntry = false;
          var isFree = cc.vv.gameData.GetTotalFree() > 0;
          var isBonus = cc.vv.gameData.GetBonusAll() > 0;
          isFree || isBonus ? this.playCharacterAnim(isFree) : this.playEnterGameEff();
        }
      },
      playEnterGameEff: function playEnterGameEff() {
        var _this2 = this;
        Global.SlotsSoundMgr.playEffect("welcome");
        var node = cc.find("Canvas/safe_node/leishen");
        var entry = node.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        node.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
          node.getComponent(sp.Skeleton).setTrackCompleteListener(entry, null);
          _this2.playCharacterAnim();
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        if (cc.vv.gameData.IsBonusGame()) cc.vv.gameData.GetBonusScript().onMsgSpine(msg); else {
          this._gameInfo = msg;
          var cards = msg.resultCards;
          cards = this.dealCards(cards);
          this.SetSlotsResult(cards);
          this.SetReelStateInfo(cards);
        }
        if (msg.fireGame && msg.fireGame.tri) {
          this.SetStopTime(1e3);
          var self = this;
          cc.tween(this.node).delay(this._cfg.auto_stop_time).call(function() {
            self._reels[0].StopMove(0);
          }).start();
        }
      },
      dealCards: function dealCards(cards) {
        for (var col = 0; col < this._col; col++) {
          var count = 0;
          var hasScatterList = [ 0, 0, 0, 0, 0, 0 ];
          for (var row = 0; row < this._row; row++) {
            var id = this.GetResutByRowCol(cards, row, col);
            if (2 === id) {
              hasScatterList[row] = 1;
              count += 1;
            }
          }
          var startIdx = hasScatterList.indexOf(1);
          for (var i = 0; i < count; i++) {
            var idx = this.ChangeRowColToIdx(cards, i + startIdx, col);
            var subNum = 0;
            hasScatterList[0] && (subNum = 3 - count);
            cards[idx] = 203 - i - subNum;
          }
          this._reels[col].setScatterNum(count);
        }
        return cards;
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (!this._cfg.reelStateInfo) return;
        var fireGame = cc.vv.gameData.GetFireGame();
        if (fireGame && fireGame.tri) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = this._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = this._reels[_i].getScatterNum() > 0 ? 1 : 0;
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && (stateInfo.isStop = true);
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.IsBonusGame()) cc.vv.gameData.GetBonusScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.IsBonusGame() || this._super();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var fireGame, hasCount, hasHsList, addSym, curId, row, sym, mult, s_row, nudge, height, fire, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(0 === colIdx)) {
                _context2.next = 41;
                break;
              }
              fireGame = cc.vv.gameData.GetFireGame();
              if (!(fireGame && fireGame.tri)) {
                _context2.next = 41;
                break;
              }
              hasCount = 0;
              hasHsList = [ 0, 0, 0, 0, 0, 0 ];
              addSym = [];
              curId = cc.vv.gameData.GetBonusCardId();
              for (row = 0; row < _this3._row; row++) {
                sym = _this3._reels[colIdx].GetSymbolByRow(row);
                if (sym.GetShowId() === curId) {
                  ++hasCount;
                  hasHsList[row] = 1;
                } else addSym.push(curId);
              }
              if (!(hasCount < 6)) {
                _context2.next = 26;
                break;
              }
              _this3._reels[colIdx].AppendSymbol(addSym, hasHsList[0] ? 1 : 2);
              mult = hasHsList[0] ? 1 : -1;
              s_row = hasHsList[0] ? 6 : hasHsList.lastIndexOf(0);
              nudge = cc.find("reels/reel1/spine_nudge", _this3.node);
              nudge.position = nudge.parent.convertToNodeSpaceAR(_this3._reels[colIdx].GetSymbolByRow(s_row).node.convertToWorldSpaceAR(cc.v2(0, 0)));
              nudge.active = true;
              nudge.setScale(cc.v2(1, hasHsList[0] ? -1 : 1));
              nudge.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context2.next = 19;
              return _this3.awaitTime(.5);

             case 19:
              _this3._reels[colIdx].reelMove(mult, addSym.length, .6 * addSym.length);
              height = _this3._cfg.symbolSize.height;
              cc.tween(nudge).to(.6 * addSym.length, {
                position: cc.v2(nudge.x, mult * addSym.length * height + nudge.y)
              }).start();
              _context2.next = 24;
              return _this3.awaitTime(.6 * addSym.length);

             case 24:
              _this3._reels[colIdx].DelAppendSymbol();
              nudge.active = false;

             case 26:
              fire = cc.vv.gameData.GetBonusScript().getMultiFireNode(colIdx, 0, 6);
              fire || (fire = cc.vv.gameData.GetBonusScript().setMultiFireNode(curId, colIdx, 0, 6));
              fire.active = true;
              fire.getComponent(sp.Skeleton).setAnimation(0, "animation6_1", false);
              fire.getComponent(sp.Skeleton).addAnimation(0, "animation6", true);
              cc.vv.gameData.GetBonusScript().setPosType(1);
              _context2.next = 34;
              return _this3.awaitTime(1);

             case 34:
              cc.vv.gameData.GetPopupScript().playBonusQpAnim();
              _context2.next = 37;
              return _this3.awaitTime(.5);

             case 37:
              for (i = 1; i < _this3._col; i++) _this3._reels[i].StopMove(0);
              _context2.next = 40;
              return _this3.awaitTime(.1);

             case 40:
              cc.vv.gameData.GetBonusScript().triBonusGame();

             case 41:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        if (colIdx === this._col - 1) {
          cc.vv.gameData.setSymbolDark(false);
          this.setBgMask(false);
          this.setAllSymbolMask(false);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var fireGame, nWin, nTotal, freeInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              fireGame = _this4._gameInfo.fireGame;
              if (!(fireGame && fireGame.tri)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");

             case 3:
              _context3.next = 5;
              return _this4.playScatterNudge();

             case 5:
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context3.next = 11;
              return new Promise(function(sucess, failed) {
                _this4.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 11:
              freeInfo = _this4._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context3.next = 15;
                break;
              }
              _context3.next = 15;
              return _this4.CheckEnterFreeGame();

             case 15:
              if (!(_this4._gameInfo.allFreeCnt > 0 && 0 == _this4._gameInfo.freeCnt)) {
                _context3.next = 20;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              _context3.next = 19;
              return _this4.CheckExitFreeGame();

             case 19:
              Global.SlotsSoundMgr.playNormalBgm();

             case 20:
              _this4.CanDoNextRound();

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playScatterNudge: function playScatterNudge() {
        var _this5 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var needMoveCol, col, count, i, _col, _count, id_0, isBottom, list, _i2, allSym, row, _i3;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                needMoveCol = [];
                for (col = 0; col < _this5._col; col++) {
                  count = _this5._reels[col].getScatterNum();
                  count > 0 && count < 3 && needMoveCol.push(col);
                }
                if (!(needMoveCol.length > 0)) {
                  _context4.next = 11;
                  break;
                }
                _context4.next = 5;
                return _this5.awaitTime(.2);

               case 5:
                for (i = 0; i < needMoveCol.length; i++) {
                  _col = needMoveCol[i];
                  _count = _this5._reels[_col].getScatterNum();
                  id_0 = _this5._reels[_col].GetSymbolByRow(0).GetShowId();
                  isBottom = 201 === id_0 || 202 === id_0;
                  list = [];
                  for (_i2 = 0; _i2 < 3 - _count; _i2++) isBottom ? list.unshift(203 - _i2) : list.unshift(201 + _i2);
                  _this5._reels[_col].AppendSymbol(list, isBottom ? 1 : 2);
                  _this5._reels[_col].reelMove(isBottom ? 1 : -1, list.length, .3);
                  Global.SlotsSoundMgr.playEffect("nudge_scatter");
                  allSym = _this5._reels[_col].getAllSymbol();
                  for (row = 0; row < allSym.length; row++) allSym[row].playNudgeAnim();
                }
                _context4.next = 8;
                return _this5.awaitTime(.3);

               case 8:
                for (_i3 = 0; _i3 < needMoveCol.length; _i3++) _this5._reels[needMoveCol[_i3]].DelAppendSymbol();
                _context4.next = 11;
                return _this5.awaitTime(.2);

               case 11:
                sucess();

               case 12:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var freeInfo, _iterator2, _step2, id, symbol;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("fg_ling");
                      freeInfo = _this6._gameInfo.freeResult.freeInfo;
                      _this6._triFreeIdxs = freeInfo.idxs;
                      _iterator2 = _createForOfIteratorHelper(_this6._triFreeIdxs);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          id = _step2.value;
                          symbol = _this6.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation(false);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context5.next = 7;
                      return _this6.awaitTime(1.5);

                     case 7:
                      _this6.Backup();
                      _context5.next = 10;
                      return _this6.showTriFreeAni();

                     case 10:
                      _context5.next = 12;
                      return cc.vv.gameData.GetPopupScript().showGainFree(freeInfo.freeCnt);

                     case 12:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context5.next = 15;
                      return _this6.awaitTime(1.2);

                     case 15:
                      Global.SlotsSoundMgr.playEffect("frame1");
                      _this6._node_free_spins.active = false;
                      _this6.hideAllFreeCnt();
                      _this6.ShowGameview(true);
                      _this6.playCharacterAnim(true);
                      _context5.next = 22;
                      return _this6.awaitTime(1);

                     case 22:
                      sucess();

                     case 23:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showTriFreeAni: function showTriFreeAni() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var lbl_count, spr_count_1, spr_count_2, freeInfo, freeCnt, freeIdxs, splitList, countIdx, lbl_cnt, col, row, idx, curCnt;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("beforefg");
                      lbl_count = cc.find("node_count/lbl_count", _this7._node_free_spins);
                      spr_count_1 = cc.find("node_count/spine_count_1", _this7._node_free_spins);
                      spr_count_2 = cc.find("node_count/spine_count_2", _this7._node_free_spins);
                      lbl_count.getComponent(cc.Label).string = "";
                      spr_count_1.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                      spr_count_2.active = false;
                      Global.SlotsSoundMgr.playEffect("frame1");
                      _this7._node_free_spins.active = true;
                      _this7._node_free_spins.y = -200;
                      cc.tween(_this7._node_free_spins).to(1, {
                        position: cc.v2(_this7._node_free_spins.x, 24)
                      }).start();
                      _context7.next = 14;
                      return _this7.awaitTime(1);

                     case 14:
                      freeInfo = _this7._gameInfo.freeResult.freeInfo;
                      freeCnt = freeInfo.freeCnt;
                      freeIdxs = freeInfo.idxs;
                      splitList = _this7.splitCount(freeCnt, freeIdxs.length);
                      countIdx = 0;
                      lbl_cnt = 0;
                      col = 0;

                     case 21:
                      if (!(col < _this7._col && countIdx < splitList.length)) {
                        _context7.next = 43;
                        break;
                      }
                      row = _this7._row - 1;

                     case 23:
                      if (!(row >= 0 && countIdx < splitList.length)) {
                        _context7.next = 40;
                        break;
                      }
                      idx = _this7.ChangeRowColToIdx(_this7._gameInfo.resultCards, row, col);
                      if (!freeIdxs.includes(idx + 1)) {
                        _context7.next = 37;
                        break;
                      }
                      countIdx % 2 === 0 ? Global.SlotsSoundMgr.playEffect("digital1") : Global.SlotsSoundMgr.playEffect("digital2");
                      curCnt = splitList[countIdx];
                      _this7.playFreeCnt(idx + 1, curCnt);
                      lbl_cnt += curCnt;
                      lbl_count.active = true;
                      lbl_count.getComponent(cc.Label).string = lbl_cnt;
                      spr_count_2.active = true;
                      spr_count_2.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      countIdx += 1;
                      _context7.next = 37;
                      return _this7.awaitTime(.7);

                     case 37:
                      row--;
                      _context7.next = 23;
                      break;

                     case 40:
                      col++;
                      _context7.next = 21;
                      break;

                     case 43:
                      sucess();

                     case 44:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x5, _x6) {
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
      playFreeCnt: function playFreeCnt(idx, cnt) {
        this._top_free.active = true;
        var fgNode = cc.find("fg_" + idx, this._top_free);
        fgNode.active = true;
        fgNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + cnt, false);
      },
      hideAllFreeCnt: function hideAllFreeCnt() {
        for (var i = 0; i < this._top_free.childrenCount; i++) this._top_free.children[i].active = false;
        this._top_free.active = false;
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  var _iterator3, _step3, id, symbol, nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _context9.next = 2;
                      return cc.vv.gameData.GetPopupScript().showEndFree(cc.vv.gameData.GetGameTotalFreeWin());

                     case 2:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context9.next = 5;
                      return _this8.awaitTime(1.2);

                     case 5:
                      _this8.Resume();
                      if (_this8._triFreeIdxs && _this8._triFreeIdxs.length > 0) {
                        _iterator3 = _createForOfIteratorHelper(_this8._triFreeIdxs);
                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                            id = _step3.value;
                            symbol = _this8.GetSymbolByIdx(id);
                            symbol && symbol.playTriggerAnimation(true);
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                        _this8._triFreeIdxs = [];
                      }
                      _this8.ShowGameview(false);
                      _this8.playCharacterAnim(false);
                      _context9.next = 11;
                      return _this8.awaitTime(1);

                     case 11:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context9.next = 15;
                      return new Promise(function(sucess, failed) {
                        _this8.ShowBottomWin(nWin, nTotal, true, sucess);
                      });

                     case 15:
                      sucess();

                     case 16:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      exitBonusGame: function exitBonusGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              if (!(cc.vv.gameData.GetTotalFree() > 0)) {
                _context11.next = 8;
                break;
              }
              Global.SlotsSoundMgr.playBgm("free_bgm");
              if (!(0 == cc.vv.gameData.GetFreeTime())) {
                _context11.next = 6;
                break;
              }
              _context11.next = 6;
              return _this9.CheckExitFreeGame();

             case 6:
              _context11.next = 9;
              break;

             case 8:
              Global.SlotsSoundMgr.playNormalBgm();

             case 9:
              cc.vv.gameData.SetBonusCardId(_this9._isSixTri ? 111 : 112);
              _this9.CanDoNextRound();

             case 11:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      splitCount: function splitCount(count, des) {
        var nums = [ 1, 2, 3, 5, 10 ];
        var resultNum = [];
        des = des || 9;
        for (;des > 0; ) if (1 === des) {
          resultNum.push(count);
          --des;
        } else if (des <= 3) {
          var n1 = 0 === parseInt(count / 2) ? 1 : parseInt(count / 2);
          for (var i = 0; i < nums.length; i++) n1 <= nums[i] && n1 > nums[i - 1] && (n1 = n1 + des > count ? nums[i - 1] : nums[i]);
          resultNum.push(n1);
          --des;
          count -= n1;
        } else {
          var max = count - des + 1;
          var random = parseInt(Math.random() * (max + 1));
          random = 0 === random ? 1 : random;
          if (nums.includes(random)) {
            resultNum.push(random);
            --des;
            count -= random;
          }
        }
        resultNum.reverse();
        return resultNum;
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("free_bgm");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        this.showShandianSpineActive(bFree);
      },
      showShandianSpineActive: function showShandianSpineActive(bShow) {
        cc.find("Canvas/safe_node/shandian").active = bShow;
      },
      setBgMask: function setBgMask(bShow) {
        var node = cc.find("reels_bg/items_bg/mask", this.node);
        node.active = bShow;
      },
      setAllSymbolMask: function setAllSymbolMask(bShow) {
        for (var col = 0; col < this._reels.length; col++) {
          var allSym = this._reels[col].getAllSymbol();
          for (var row = 0; row < allSym.length; row++) allSym[row].setMaskVisible(bShow);
        }
      },
      setBannerState: function setBannerState(isSix) {
        var tit_6 = cc.find("bg_title/title_6", this._node_banner);
        var tit_4 = cc.find("bg_title/title_4", this._node_banner);
        var icon_6 = cc.find("icon_6", this._node_banner);
        var icon_4 = cc.find("icon_4", this._node_banner);
        var spr_6 = cc.find("spr_6", this._node_banner);
        tit_6.active = isSix;
        tit_4.active = !isSix;
        icon_6.active = isSix;
        icon_4.active = !isSix;
        spr_6.active = isSix;
      },
      initBannerState: function initBannerState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetChangeNumBet();
        if (curBet <= minBet) {
          this._isSixTri = true;
          this.setBannerState(true);
        } else {
          this._isSixTri = false;
          this.setBannerState(false);
        }
        cc.vv.gameData.SetBonusCardId(this._isSixTri ? 111 : 112);
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var spine_change = cc.find("spine_change", this._node_banner);
        spine_change.active = false;
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetChangeNumBet();
        if (!this._isSixTri && curBet <= minBet) {
          Global.SlotsSoundMgr.playEffect("change1");
          this._isSixTri = true;
          spine_change.active = true;
          spine_change.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
          this.setBannerState(true);
        } else if (this._isSixTri && curBet > minBet) {
          Global.SlotsSoundMgr.playEffect("change1");
          this._isSixTri = false;
          spine_change.active = true;
          spine_change.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
          this.setBannerState(false);
        }
        cc.vv.gameData.SetBonusCardId(this._isSixTri ? 111 : 112);
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(sucess, failed) {
          _this10.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      playCharacterAnim: function playCharacterAnim(isSpe) {
        var node = cc.find("Canvas/safe_node/leishen");
        if (isSpe) {
          node.stopAllActions();
          node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
            node.getComponent(sp.Skeleton).setAnimation(0, "idle", false);
            node.getComponent(sp.Skeleton).addAnimation(0, "idle", false);
            node.getComponent(sp.Skeleton).addAnimation(0, "skill", false);
          }), cc.delayTime(11.2))));
        } else {
          node.stopAllActions();
          node.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LordOfThunder_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc3bannNg5BooY1q4kmhHiQ", "LordOfThunder_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: "normal"
      },
      Init: function Init(idx, node) {
        this._super(idx, node);
      },
      setSymType: function setSymType(type) {
        this._type = type;
      },
      playBonusShowAnim: function playBonusShowAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].show_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].show_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].show_ani.name, true);
          }
        }
      },
      playBonusAnimation: function playBonusAnimation(animName, bLoop) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && "" != animName) {
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, animName, bLoop);
        }
      },
      playBoombAnim: function playBoombAnim() {
        var spine = cc.find("bonus_bao", this.node);
        if (spine) {
          spine.active = true;
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function() {
            spine.active = false;
          });
        }
      },
      playBonusKuangAnim: function playBonusKuangAnim() {
        var spine = cc.find("fire_kuang", this.node);
        if (spine) {
          spine.active = true;
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function() {
            spine.active = false;
          });
        }
      },
      showBg: function showBg(bShow) {
        var bg = cc.find("bg", this.node);
        bg && (bg.active = bShow);
      },
      ShowWheelResult: function ShowWheelResult(mult, jp) {
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find("s121_0", this.node);
        this._showNode.active = true;
        var spr_mult = cc.find("spr_mult", this.node);
        var spr_jp = cc.find("spr_jp", this.node);
        spr_mult.active = true;
        spr_jp.active = true;
        spr_mult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("base_game").getSpriteFrame("theme_wheel_num" + mult);
        spr_jp.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("base_game").getSpriteFrame("theme_jackpot_" + jp);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        if ("bonus" === this._type) {
          var randomList = cc.vv.gameData.GetBonusRandomList();
          var cfg = cc.vv.gameData.getGameCfg();
          var randIdx = Global.random(1, randomList.length);
          var randVal = randomList[randIdx - 1];
          this.ShowById(randVal);
        } else {
          var bonusId = cc.vv.gameData.GetBonusCardId();
          var _cfg = cc.vv.gameData.getGameCfg();
          var list = Global.copy(_cfg.randomSymbols);
          list.push(bonusId);
          var _randIdx = Global.random(1, list.length);
          var _randVal = list[_randIdx - 1];
          this.ShowById(_randVal);
        }
      },
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._state = "win";
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
          this._playNode = topShowNode;
        } else {
          this._showNode.active = true;
          this._playNode = this._showNode;
        }
        this.playWinTweenAction();
      },
      playWinTweenAction: function playWinTweenAction() {
        this._playNode.cleanup();
        var nScale = this._playNode.scale;
        this._showNodeOrgScale = nScale;
        cc.tween(this._playNode).repeatForever(cc.tween().to(.5, {
          scale: nScale + .2
        }).to(.5, {
          scale: nScale
        }).delay(1)).start();
      },
      stopWinTweenAction: function stopWinTweenAction() {
        if (this._playNode) {
          this._playNode.cleanup();
          this._playNode = null;
        }
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.setMaskVisible(true);
      },
      setMaskVisible: function setMaskVisible(isMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node && cfg.symbol[this._id].isMask) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          isMask && cc.vv.gameData.getSymbolDark() ? showNode.color = new cc.Color(105, 105, 105) : showNode.color = cc.Color.WHITE;
        }
      },
      playNudgeAnim: function playNudgeAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].nudge_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].nudge_ani.name) {
            this.node.zIndex = cfg.symbol[id].nudge_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].nudge_ani.name, false);
          }
        }
      },
      playTriggerAnimation: function playTriggerAnimation(bLoop) {
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
              bLoop = bLoop || false;
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, bLoop);
            }
          }
        }
        return isPlay;
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
            "normal" == this._type && (this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx);
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
          }
        }
      },
      Resume: function Resume(backup) {
        this.stopWinTweenAction();
        this._super(backup);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  LordOfThunder_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc828Aiov5IY4Vp0w2/gNsu", "LordOfThunder_Wheel");
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
        _soundCfg: null,
        _turn_wheel: 0
      },
      Init: function Init() {
        this._wheelData1 = [ "HEPHAESTUS", "MAJOR", "MINI", "MEGA", "MINOR", "MAJOR", "MINI", "MINOR", "MEGA", "MINI" ];
        this._wheelData2 = [ 10, 3, 1, 5, 2, 3, 1, 2, 5, 1 ];
        this._node_wheel = cc.find("safe_node/node_wheel", this.node);
        this._node_wheel.active = false;
        this._nodeUI = cc.find("node", this._node_wheel);
        this._wheel_1 = cc.find("node/wheel_1", this._node_wheel);
        this._wheel_2 = cc.find("node/wheel_2", this._node_wheel);
        this._spine_spin = cc.find("node/spine_spin", this._node_wheel);
        this._node_result = cc.find("node/wheel_2/node_result", this._node_wheel);
      },
      start: function start() {},
      gainWheel: function gainWheel(data) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.playBgm("wheel_bgm");
                      _this._result = data;
                      _this._node_wheel.active = true;
                      _this.recoverAllNode();
                      _this.setJackPotGray(false);
                      _context.next = 7;
                      return _this.showWheel();

                     case 7:
                      _context.next = 9;
                      return _this.readyWheel1();

                     case 9:
                      _context.next = 11;
                      return _this.moveWheel(1);

                     case 11:
                      _context.next = 13;
                      return _this.showResultAnim(1);

                     case 13:
                      _context.next = 15;
                      return _this.showResultWheel1();

                     case 15:
                      _this.setJackPotGray(true);
                      _context.next = 18;
                      return _this.readyWheel2();

                     case 18:
                      _context.next = 20;
                      return _this.moveWheel(2);

                     case 20:
                      _context.next = 22;
                      return _this.showResultAnim(2);

                     case 22:
                      _context.next = 24;
                      return _this.showResultWheel2();

                     case 24:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("bonus_bgm");
                      sucess();
                      _context.next = 29;
                      return _this.awaitTime(.5);

                     case 29:
                      _this._node_wheel.active = false;
                      _this.setJackPotGray(false);

                     case 31:
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
        this._nodeUI.active = true;
        this._nodeUI.opacity = 255;
        this._wheel_1.position = cc.find("node/pos_1", this._node_wheel).position;
        this._wheel_2.position = cc.find("node/pos_2", this._node_wheel).position;
        cc.find("spr_di", this._wheel_1).angle = 0;
        cc.find("spr_di", this._wheel_2).angle = 0;
        cc.find("spr_multi", this._wheel_2).y = 0;
        cc.find("spr_multi", this._wheel_2).active = false;
        cc.find("spine_light", this._wheel_2).active = false;
        this._spine_spin.active = false;
        this._node_result.active = false;
      },
      showWheel: function showWheel() {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          Global.SlotsSoundMgr.playEffect("wheel_popup");
          _this2._nodeUI.position = cc.find("pos_s", _this2._node_wheel).position;
          cc.tween(_this2._nodeUI).to(1, {
            position: cc.v2(0, 0)
          }, {
            easing: "backOut"
          }).call(function() {
            sucess();
          }).start();
        });
      },
      readyWheel1: function readyWheel1() {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _this3._spine_spin.active = true;
                _this3._spine_spin.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
                _this3._spine_spin.getComponent(sp.Skeleton).addAnimation(0, "animation1_2", true);
                _context5.next = 5;
                return _this3.awaitTime(1);

               case 5:
                btn = cc.find("node/btn_start_1", _this3._node_wheel);
                btn.active = true;
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                self = _this3;
                clickFunc = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn.getComponent(cc.Button).interactable = false;
                        btn.active = false;
                        self._spine_spin.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", false);
                        _context3.next = 6;
                        return _this3.awaitTime(.5);

                       case 6:
                        self._spine_spin.active = false;
                        sucess();

                       case 8:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  return function clickFunc() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                })));

               case 13:
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
      moveWheel: function moveWheel(type) {
        var _this4 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var objLun, nCir, nTotal, normalIdx, normalLength, bonusIdx, bonusLength, self;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("wheel_spin");
                nCir = 4;
                normalIdx = _this4._result.rs_1.idx;
                normalLength = 10;
                bonusIdx = _this4._result.rs_2.idx;
                bonusLength = 10;
                _this4._result_wheel2 = _this4._result.rs_2.coin;
                if (1 === type) {
                  objLun = cc.find("spr_di", _this4._wheel_1);
                  nTotal = 360 / normalLength * (normalLength - (normalIdx - 1)) + 360 * nCir;
                } else {
                  objLun = cc.find("spr_di", _this4._wheel_2);
                  nTotal = 360 / bonusLength * (bonusLength - (bonusIdx - 1)) + 360 * nCir;
                }
                self = _this4;
                cc.tween(objLun).by(7, {
                  angle: -nTotal
                }, {
                  easing: "quadInOut"
                }).call(function() {
                  sucess();
                }).start();

               case 10:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x5, _x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      showResultAnim: function showResultAnim(type) {
        var _this5 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var spine_result, _spine_result;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("word");
                if (1 === type) {
                  spine_result = cc.find("spine_result", _this5._wheel_1);
                  spine_result.active = true;
                  spine_result.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                  spine_result.getComponent(sp.Skeleton).setCompleteListener(function() {
                    spine_result.active = false;
                    sucess();
                  });
                } else if (2 === type) {
                  _spine_result = cc.find("spine_result", _this5._wheel_2);
                  _spine_result.active = true;
                  _spine_result.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                  _spine_result.getComponent(sp.Skeleton).setCompleteListener(function() {
                    _spine_result.active = false;
                    sucess();
                  });
                }

               case 2:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x7, _x8) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      showResultWheel1: function showResultWheel1() {
        var _this6 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var spr_title, lbl_result, result_id;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("wheel_stop1");
                spr_title = cc.find("spr_title", _this6._node_result);
                lbl_result = cc.find("lbl_result", _this6._node_result);
                result_id = _this6.getJpType(_this6._result.rs_1.idx - 1);
                spr_title.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("base_game").getSpriteFrame("theme_jackpot_" + result_id);
                lbl_result.getComponent(cc.Label).string = "";
                _this6._node_result.active = true;
                _this6._node_result.setScale(0);
                cc.tween(_this6._node_result).to(1, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context8.next = 11;
                return _this6.awaitTime(1);

               case 11:
                Global.SlotsSoundMgr.playEffect("qianshu");
                Global.doRoallNumEff(lbl_result, 0, _this6._result.rs_1.coin, .7, null, null, 0, true);
                _context8.next = 15;
                return _this6.awaitTime(.7);

               case 15:
                Global.SlotsSoundMgr.stopEffectByName("qianshu");
                sucess();

               case 17:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x9, _x10) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      readyWheel2: function readyWheel2() {
        var _this7 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var endPos, btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("wheel_popup");
                endPos = cc.find("node/pos_1", _this7._node_wheel).position;
                cc.tween(_this7._wheel_2).to(1, {
                  position: endPos
                }).start();
                _context11.next = 5;
                return _this7.awaitTime(1);

               case 5:
                _this7._spine_spin.active = true;
                _this7._spine_spin.getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
                _this7._spine_spin.getComponent(sp.Skeleton).addAnimation(0, "animation2_2", true);
                _context11.next = 10;
                return _this7.awaitTime(1);

               case 10:
                btn = cc.find("node/btn_start_2", _this7._node_wheel);
                btn.active = true;
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                self = _this7;
                clickFunc = function() {
                  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click");
                        btn.getComponent(cc.Button).interactable = false;
                        btn.active = false;
                        self._spine_spin.getComponent(sp.Skeleton).setAnimation(0, "animation2_3", false);
                        _context9.next = 6;
                        return _this7.awaitTime(.5);

                       case 6:
                        self._spine_spin.active = false;
                        sucess();

                       case 8:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function clickFunc() {
                    return _ref9.apply(this, arguments);
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

               case 18:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x11, _x12) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      showResultWheel2: function showResultWheel2() {
        var _this8 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
            var spine_light, spr_multi, lbl_result, spine_result, multi_id;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("wheel_stop2");
                spine_light = cc.find("spine_light", _this8._wheel_2);
                spine_light.active = true;
                spine_light.setScale(1);
                spine_light.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spine_light.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine_light.active = false;
                });
                spr_multi = cc.find("spr_multi", _this8._wheel_2);
                lbl_result = cc.find("lbl_result", _this8._node_result);
                spine_result = cc.find("spine_result", _this8._node_result);
                multi_id = _this8.getMultType(_this8._result.rs_2.idx - 1);
                spr_multi.active = true;
                spr_multi.setScale(2);
                spr_multi.opacity = 255;
                spr_multi.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("mini_game").getSpriteFrame("theme_bonus_multi_" + multi_id);
                _context12.next = 16;
                return _this8.awaitTime(.5);

               case 16:
                Global.SlotsSoundMgr.playEffect("jackpotframe");
                cc.tween(spr_multi).to(1, {
                  position: _this8._node_result.position,
                  scale: 1
                }).to(.5, {
                  opacity: 0
                }).start();
                cc.tween(spine_light).to(.5, {
                  scale: 0
                }).start();
                _context12.next = 21;
                return _this8.awaitTime(1);

               case 21:
                spine_result.active = true;
                spine_result.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spine_result.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine_result.active = false;
                });
                Global.doRoallNumEff(lbl_result, _this8._result.rs_1.coin, _this8._result.rs_2.coin, 1.5, null, null, 0, true);
                _context12.next = 27;
                return _this8.awaitTime(1.5);

               case 27:
                cc.tween(_this8._nodeUI).to(.5, {
                  opacity: 0
                }).call(function() {
                  sucess();
                }).start();

               case 28:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x13, _x14) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      getJpType: function getJpType(idx) {
        var str = this._wheelData1[idx];
        var result_id = 1;
        "HEPHAESTUS" == str ? result_id = 0 : "MEGA" == str ? result_id = 1 : "MAJOR" == str ? result_id = 2 : "MINOR" == str ? result_id = 3 : "MINI" == str && (result_id = 4);
        return result_id;
      },
      getMultType: function getMultType(idx) {
        return this._wheelData2[idx];
      },
      setJackPotGray: function setJackPotGray(bGray) {
        var prizePool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
        bGray ? cc.tween(prizePool).to(.5, {
          opacity: 0
        }).start() : cc.tween(prizePool).to(.5, {
          opacity: 255
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this9 = this;
        return new Promise(function(sucess, failed) {
          _this9.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "LordOfThunder_BonusGame", "LordOfThunder_BonusReel", "LordOfThunder_Cfg", "LordOfThunder_GameData", "LordOfThunder_Logic", "LordOfThunder_Popup", "LordOfThunder_Reels", "LordOfThunder_Slots", "LordOfThunder_Symbol", "LordOfThunder_Wheel" ]);