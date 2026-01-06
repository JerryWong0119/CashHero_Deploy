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
  Interstellar_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1581eLM4GpPK7e3L0STbIh8", "Interstellar_BonusGame");
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
    var grupNames = [ "mini", "minor", "major", "maxi", "grand" ];
    var grupReelNum = [ 0, 2, 5, 9, 14 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _callBack: null,
        _data: null,
        panel: cc.Node,
        tipsNode: cc.Node,
        spine_win_board: sp.Skeleton,
        spine_footer: cc.Node,
        track_spine: cc.Node,
        jpNodes: [ cc.Node ],
        posArr: [ cc.Node ],
        _topAniNode: cc.Node,
        _topCollectAniNode: null,
        _grups: [],
        _hintList: [],
        _firstRoundGroup: 0
      },
      onDestroy: function onDestroy() {},
      onLoad: function onLoad() {
        this._topCollectAniNode = cc.find("Canvas/safe_node/top_node");
        this._topCollectAniNode.zIndex = 1e3;
        this._topAniNode = cc.find("top_ani", this.panel);
        this._initData();
        this._initReels();
        Global.AABB = this;
      },
      _initData: function _initData() {
        this._data = {
          lastRoundReelsData: null,
          validReelLastIdx: 0,
          respData: null
        };
      },
      _initReels: function _initReels() {
        for (var i = 0; i < grupNames.length; i++) {
          var name = grupNames[i];
          var node = cc.find(name, this.panel);
          var script = node.getComponent("Interstellar_BonusGrup");
          script.initData(this._topAniNode, this._onGrupChange.bind(this), grupReelNum[i], i);
          this._grups.push(script);
        }
      },
      _onGrupChange: function _onGrupChange(grupIdx) {
        grupIdx === this._data.validReelLastIdx ? this.spinEnd() : this.getJackpotHint(grupIdx + 2) && this.playJpFlash(grupIdx + 2);
        var epicInfo = SlotsFacade.dm.bonusData;
        for (var i = 0; i < epicInfo.jackpotList.length; i++) {
          var jpId = epicInfo.jackpotList[i];
          if (jpId > grupIdx) {
            this.playJpTitle(jpId, true);
            this.showWinJackPot(jpId);
            this.playWinJackPotEffect(jpId);
          }
        }
      },
      getJackpotHint: function getJackpotHint(id) {
        switch (id) {
         case 1:
          for (var i = 0; i < this._hintList.length; i++) {
            var element = this._hintList[i];
            if (element < 3) return true;
          }
          return false;

         case 2:
          for (var _i = 0; _i < this._hintList.length; _i++) {
            var _element = this._hintList[_i];
            if (_element > 2 && _element < 6) return true;
          }
          return false;

         case 3:
          for (var _i2 = 0; _i2 < this._hintList.length; _i2++) {
            var _element2 = this._hintList[_i2];
            if (_element2 > 5 && _element2 < 10) return true;
          }
          return false;

         case 4:
          for (var _i3 = 0; _i3 < this._hintList.length; _i3++) {
            var _element3 = this._hintList[_i3];
            if (_element3 > 9 && _element3 < 15) return true;
          }
          return false;

         case 5:
          for (var _i4 = 0; _i4 < this._hintList.length; _i4++) {
            var _element4 = this._hintList[_i4];
            if (_element4 > 14 && _element4 < 30) return true;
          }
          return false;
        }
      },
      showJiLi: function showJiLi(id) {
        switch (id) {
         case 1:
          for (var i = 0; i < this._hintList.length; i++) {
            var element = this._hintList[i];
            element < 3 && this._grups[id - 1].showJL(element);
          }
          break;

         case 2:
          for (var _i5 = 0; _i5 < this._hintList.length; _i5++) {
            var _element5 = this._hintList[_i5];
            _element5 > 2 && _element5 < 6 && this._grups[id - 1].showJL(_element5);
          }
          break;

         case 3:
          for (var _i6 = 0; _i6 < this._hintList.length; _i6++) {
            var _element6 = this._hintList[_i6];
            _element6 > 5 && _element6 < 10 && this._grups[id - 1].showJL(_element6);
          }
          break;

         case 4:
          for (var _i7 = 0; _i7 < this._hintList.length; _i7++) {
            var _element7 = this._hintList[_i7];
            _element7 > 9 && _element7 < 15 && this._grups[id - 1].showJL(_element7);
          }
          break;

         case 5:
          for (var _i8 = 0; _i8 < this._hintList.length; _i8++) {
            var _element8 = this._hintList[_i8];
            _element8 > 14 && _element8 < 30 && this._grups[id - 1].showJL(_element8);
          }
        }
      },
      _initView: function _initView(isReconnect) {
        var epicInfo = SlotsFacade.dm.bonusData;
        this.showRestCnt(epicInfo.restCnt, true);
        for (var i = 0; i < this._grups.length; i++) {
          var grup = this._grups[i];
          grup.initView();
        }
        isReconnect = isReconnect || false;
        for (var _i9 = 0; _i9 < this.jpNodes.length; _i9++) {
          var node = this.jpNodes[_i9];
          node.y = isReconnect ? this.posArr[_i9].y : 4 == _i9 ? this.posArr[_i9].y : 3 == _i9 ? this.posArr[5].y : this.posArr[_i9].y - 320;
          for (var j = 0; j < 2; j++) {
            var spineTitle = node.getChildByName("spineTitle" + (j + 1));
            spineTitle.getComponent(sp.Skeleton).setAnimation(0, "animation" + (5 - _i9) + "_1", false);
          }
        }
        if (isReconnect) for (var _i10 = 0; _i10 < epicInfo.jackpotList.length; _i10++) {
          var jpId = epicInfo.jackpotList[_i10];
          this.playJpTitle(jpId, true);
        } else this.jpNodes[3].y = this.posArr[5].y;
      },
      showRestCnt: function showRestCnt(cnt, isInit) {
        var tips = this.tipsNode.getChildByName("tips").getComponent("ImgSwitchCmp");
        3 == cnt ? tips.setIndex(2) : 2 == cnt ? tips.setIndex(2) : 1 == cnt ? tips.setIndex(1) : tips.setIndex(0);
        var labelNode = this.tipsNode.getChildByName("label");
        if (cnt > 0) {
          labelNode.active = true;
          var labelCnt = labelNode.getChildByName("count").getComponent("ImgSwitchCmp");
          labelCnt.setIndex(cnt - 1);
          if (3 == cnt && !isInit) {
            var spine = labelNode.getChildByName("spine").getComponent(sp.Skeleton);
            spine.node.active = true;
            spine.setAnimation(0, "animation", false);
            spine.setCompleteListener(function() {
              spine.setCompleteListener(null);
              spine.node.active = false;
            });
          }
        } else labelNode.active = false;
      },
      startMove: function startMove() {
        this._firstRoundGroup = 0;
        for (var i = 0; i < this._grups.length; i++) {
          var grup = this._grups[i];
          if (grup.startMove()) {
            this._data.validReelLastIdx = i;
            0 === this._firstRoundGroup && (this._firstRoundGroup = i + 1);
          }
        }
      },
      setSlotsResult: function setSlotsResult() {
        for (var i = 0; i < this._grups.length; i++) {
          var grup = this._grups[i];
          grup.setSlotsResult();
        }
      },
      spinEnd: function spinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var epicInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              epicInfo = SlotsFacade.dm.bonusData;
              _this._data.lastRoundReelsData = epicInfo.items.concat();
              _this._hintList = epicInfo.hintList;
              _this.showRestCnt(epicInfo.restCnt);
              _context.next = 6;
              return SlotsFacade.delayTime(1);

             case 6:
              epicInfo.restCnt > 0 ? _this.run() : _this.startSettlement();

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startSettlement: function startSettlement() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var sum, data, i, val, type, endPos, _i11, _val;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              sum = 0;
              data = _this2._data.respData;
              i = 0;

             case 3:
              if (!(i < data.jackpotValues.length)) {
                _context2.next = 14;
                break;
              }
              val = data.jackpotValues[i];
              type = data.epicInfo.jackpotList[i];
              SlotsFacade.soundMgr.playEffect("dialog_trigger_JP");
              _context2.next = 9;
              return SlotsFacade.popup.showWinJPGold(type, val);

             case 9:
              sum += val;
              SlotsFacade.bottomCmp.SetWin(sum);

             case 11:
              i++;
              _context2.next = 3;
              break;

             case 14:
              _context2.next = 16;
              return SlotsFacade.delayTime(.5);

             case 16:
              endPos = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this2._topCollectAniNode.convertToNodeSpaceAR(endPos);
              _this2.spine_footer.removeFromParent();
              _this2.spine_footer.parent = _this2._topCollectAniNode;
              _this2.spine_footer.position = endPos;
              _this2.spine_footer.active = false;
              _i11 = 0;

             case 23:
              if (!(_i11 < data.epicInfo.items.length)) {
                _context2.next = 34;
                break;
              }
              _val = data.epicInfo.items[_i11];
              if (!(_val < 1)) {
                _context2.next = 27;
                break;
              }
              return _context2.abrupt("continue", 31);

             case 27:
              sum += _val;
              _this2.flyTrackSpine(_i11, function() {
                SlotsFacade.bottomCmp.SetWin(sum);
              });
              _context2.next = 31;
              return SlotsFacade.delayTime(1);

             case 31:
              _i11++;
              _context2.next = 23;
              break;

             case 34:
              cc.vv.gameData.AddCoin(sum);
              _context2.next = 37;
              return SlotsFacade.popup.showWinBonusGold(sum);

             case 37:
              _this2.exitGame();

             case 38:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      flyTrackSpine: function flyTrackSpine(reelIdx, callback) {
        var _this3 = this;
        SlotsFacade.soundMgr.playEffect("fly");
        var endNode = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
        var endPos = endNode.convertToWorldSpaceAR(cc.v2(0, 0));
        endPos = this._topCollectAniNode.convertToNodeSpaceAR(endPos);
        var symbol = this.getSymbolByIndex(reelIdx);
        symbol.playWinFlash();
        var startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
        startPos = this._topCollectAniNode.convertToNodeSpaceAR(startPos);
        var spine = cc.instantiate(this.track_spine);
        spine.active = true;
        spine.parent = this._topCollectAniNode;
        spine.x = startPos.x;
        spine.y = startPos.y;
        spine.angle = this.getAngle(symbol.node, endNode);
        spine.scaleY = this.getDistance(symbol.node, endNode) / (spine.height / 2);
        spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        spine.getComponent(sp.Skeleton).timeScale = .7;
        spine.getComponent(sp.Skeleton).setCompleteListener(function() {
          spine.removeFromParent();
          callback && callback();
          _this3.spine_footer.active = true;
          _this3.spine_footer.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          _this3.spine_footer.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this3.spine_footer.active = false;
          });
        });
      },
      getSymbolByIndex: function getSymbolByIndex(idx) {
        var grupIdx = 0;
        var celIdx = idx + 1;
        for (var i = 2; i < 6; i++) {
          var num = i;
          if (!(celIdx > num)) break;
          celIdx -= num;
          grupIdx++;
        }
        return this._grups[grupIdx]._reels[celIdx - 1].GetSymbolByRow(0);
      },
      getAngle: function getAngle(node1, node2) {
        var pos1 = node1.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos2 = node2.convertToWorldSpaceAR(cc.v2(0, 0));
        var o = pos1.x - pos2.x;
        var a = pos1.y - pos2.y;
        var at = 180 * Math.atan(o / a) / Math.PI;
        a < 0 && (at = o < 0 ? 180 + Math.abs(at) : 180 - Math.abs(at));
        return -at;
      },
      getDistance: function getDistance(node1, node2) {
        var pos1 = node1.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos2 = node2.convertToWorldSpaceAR(cc.v2(0, 0));
        return Math.abs(pos1.sub(pos2).mag());
      },
      playJpTitle: function playJpTitle(jpIdx, bPlay) {
        var jpNode = this.jpNodes[jpIdx - 1];
        var spineTitle1 = jpNode.getChildByName("spineTitle1");
        bPlay ? spineTitle1.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - jpIdx), true) : spineTitle1.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - jpIdx) + "_1", false);
        var spineTitle2 = jpNode.getChildByName("spineTitle2");
        bPlay ? spineTitle2.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - jpIdx), true) : spineTitle2.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - jpIdx) + "_1", false);
      },
      playJpFlash: function playJpFlash(jpIdx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var jpNode, towin, light1, light2, end;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              jpNode = _this4.jpNodes[jpIdx - 1];
              towin = cc.find("towin", jpNode);
              towin.active = true;
              light1 = cc.find("light1", towin);
              light1.active = true;
              light2 = cc.find("light2", towin);
              light2.active = true;
              end = cc.find("end", towin);
              end.active = false;
              light1.active = true;
              light2.active = true;
              light2.getComponent(sp.Skeleton).setCompleteListener(function() {
                light1.active = false;
                light2.active = false;
                light2.getComponent(sp.Skeleton).setCompleteListener(null);
              });
              _context3.next = 14;
              return SlotsFacade.delayTime(.5);

             case 14:
              _this4.showJiLi(jpIdx);
              end.active = true;
              end.getComponent(sp.Skeleton).setCompleteListener(function() {
                end.active = false;
                end.getComponent(sp.Skeleton).setCompleteListener(null);
              });

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playWinJackPotEffect: function playWinJackPotEffect(jpIdx) {
        var jpNode = this.jpNodes[jpIdx - 1];
        var winJackpot = cc.find("winJackpot", jpNode);
        winJackpot.active = true;
        var winJackpotSp = winJackpot.getComponent(sp.Skeleton);
        winJackpotSp.setCompleteListener(function() {
          winJackpot.active = false;
          winJackpotSp.setCompleteListener(null);
        });
      },
      showWinJackPot: function showWinJackPot(jpIdx) {
        var win_jp_loop = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + grupNames[jpIdx - 1] + "/spine");
        win_jp_loop.active = true;
      },
      hideWinJackPot: function hideWinJackPot() {
        for (var i = 0; i < 5; i++) {
          var win_jp_loop = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + grupNames[i] + "/spine");
          win_jp_loop.active = false;
        }
      },
      playJpWhiteFrame: function playJpWhiteFrame(jpIdx, bPlay) {
        var spine_win_board = cc.find("panel/spine_win_board", this.node);
        spine_win_board.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - jpIdx), true);
        spine_win_board.active = bPlay;
      },
      run: function run() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var epicInfo;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              epicInfo = SlotsFacade.dm.bonusData;
              _this5.showRestCnt(epicInfo.restCnt - 1);
              _this5.startMove();
              SlotsFacade.dm.reqSubGame({
                rtype: 2
              });

             case 4:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onSpin: function onSpin(msg) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var reelTime, reelStopInterv, currRoundItems, i, grup, j, reel, val;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6._data.respData = msg.data;
              SlotsFacade.dm.bonusData = msg.data.epicInfo;
              _context5.next = 4;
              return SlotsFacade.delayTime(1);

             case 4:
              _this6.setSlotsResult();
              reelTime = 0;
              reelStopInterv = .2;
              currRoundItems = SlotsFacade.dm.bonusData.items;
              for (i = 0; i < _this6._grups.length; i++) {
                grup = _this6._grups[i];
                for (j = 0; j < grup._reels.length; j++) {
                  reel = grup._reels[j];
                  val = _this6._data.lastRoundReelsData[grup._grupIndex + j];
                  if (-1 == val) {
                    reel.StopMove(reelTime);
                    reelTime += reelStopInterv;
                  }
                }
              }
              _this6.showAddDelayTime();
              _this6.getJackpotHint(_this6._firstRoundGroup) && _this6.playJpFlash(_this6._firstRoundGroup);

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showAddDelayTime: function showAddDelayTime() {
        for (var i = 1; i < 6; i++) if (this.getJackpotHint(i)) for (var j = i - 1; j < this._grups.length; j++) {
          var grup = this._grups[j];
          grup.AddDelayTime(2);
        }
      },
      enterGame: function enterGame(callBack, isReconnect) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this7._callBack = callBack;
              if (isReconnect) {
                _context6.next = 4;
                break;
              }
              _context6.next = 4;
              return new Promise(function(res) {
                SlotsFacade.popup.showStartBonus(function() {
                  res();
                });
              });

             case 4:
              Global.SlotsSoundMgr.playBgm("111xjs_Freesound");
              _this7.panel.active = true;
              SlotsFacade.mainPanel.charactor.active = false;
              SlotsFacade.mainPanel.slots.active = false;
              _this7._initData();
              _this7._data.lastRoundReelsData = SlotsFacade.dm.bonusData.items.concat();
              _this7._initView(isReconnect);
              if (!isReconnect) {
                _context6.next = 18;
                break;
              }
              _this7._hintList = SlotsFacade.dm.bonusData.hintList;
              _context6.next = 15;
              return SlotsFacade.delayTime(.5);

             case 15:
              _this7.run();
              _context6.next = 22;
              break;

             case 18:
              _this7._hintList = [];
              _context6.next = 21;
              return _this7.playShowAni();

             case 21:
              _this7.run();

             case 22:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playShowAni: function playShowAni() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, spaceTime, _i12, node, j, title;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("reel_raise");
              for (i = 0; i < 3; i++) cc.tween(_this8.jpNodes[i]).to(.5, {
                y: _this8.posArr[i].y
              }).delay(.15).start();
              _context7.next = 4;
              return SlotsFacade.delayTime(.7);

             case 4:
              _this8.jpNodes[3].y = _this8.posArr[3].y;
              _context7.next = 7;
              return SlotsFacade.delayTime(.1);

             case 7:
              spaceTime = .15;
              for (_i12 = 0; _i12 < _this8.jpNodes.length; _i12++) {
                node = _this8.jpNodes[_i12];
                cc.tween(node).delay(spaceTime * _i12).call(function() {
                  SlotsFacade.soundMgr.playEffect("map_close");
                }).to(.3, {
                  scale: 1.2
                }).to(.2, {
                  scale: 1
                }).start();
                for (j = 0; j < 2; j++) {
                  title = node.getChildByName("spineTitle" + (j + 1));
                  title.getComponent(sp.Skeleton).setAnimation(0, "animation" + (5 - _i12), false);
                  title.getComponent(sp.Skeleton).addAnimation(0, "animation" + (5 - _i12) + "_1", false);
                }
              }
              _context7.next = 11;
              return SlotsFacade.delayTime(1);

             case 11:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      exitGame: function exitGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              SlotsFacade.mainPanel.showSceneTransition(1, _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                   case 0:
                    _context8.next = 2;
                    return new Promise(function(res) {
                      SlotsFacade.slots.ShowBottomWin(SlotsFacade.bottomCmp.getCurrentWin(), SlotsFacade.bottomCmp.getCurrentWin(), true, res);
                    });

                   case 2:
                    _this9._callBack && _this9._callBack();

                   case 3:
                   case "end":
                    return _context8.stop();
                  }
                }, _callee8);
              })));
              _context9.next = 3;
              return SlotsFacade.delayTime(.5);

             case 3:
              _this9.hideWinJackPot();
              Global.SlotsSoundMgr.playNormalBgm(true);
              _this9.panel.active = false;
              SlotsFacade.mainPanel.charactor.active = true;
              SlotsFacade.mainPanel.slots.active = true;

             case 8:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_BonusGrup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcf70BmdiBLwoC962LPXCJq", "Interstellar_BonusGrup");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        reelNodes: {
          default: [],
          type: cc.Node
        },
        _reels: [],
        _grupIndex: 0,
        _grupCol: 0,
        _endMoveIdx: 0,
        _onGrupChange: null
      },
      onDestroy: function onDestroy() {},
      onLoad: function onLoad() {},
      _getRandomSymbol: function _getRandomSymbol() {
        var randomSymbols = [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
        var randIdx = Global.random(1, randomSymbols.length);
        var randVal = randomSymbols[randIdx - 1];
        return randVal;
      },
      initData: function initData(topAniNode, onGrupChange, index, col) {
        this._grupIndex = index;
        this._grupCol = col;
        for (var i = 0; i < this.reelNodes.length; i++) {
          var node = this.reelNodes[i];
          node.getChildByName("spine_tip").active = false;
          var cmp = node.addComponent("Interstellar_BonusReel");
          cmp.Init(this._grupIndex + i, 1, topAniNode);
          cmp.setHandler(this.onReelSpinEnd.bind(this));
          this._reels.push(cmp);
        }
        this._onGrupChange = onGrupChange;
      },
      initView: function initView() {
        var epicInfo = SlotsFacade.dm.bonusData;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var symbol = item._symbols[0];
          symbol.StartMove();
          var val = epicInfo.items[this._grupIndex + i];
          val >= 0 ? symbol.showBonusSymol(SlotsFacade.dm.getGameCfg().bonusId, val) : symbol.ShowById(this._getRandomSymbol());
        }
      },
      onReelSpinEnd: function onReelSpinEnd(idx) {
        SlotsFacade.soundMgr.playEffect("stop");
        var reelIdx = idx;
        var bonusId = SlotsFacade.dm.getGameCfg().bonusId;
        var symbol = this._reels[reelIdx - this._grupIndex].GetSymbolByRow(0);
        symbol.GetShowId() == bonusId && symbol.playBonusSymbol();
        if (this._endMoveIdx === idx - this._grupIndex) {
          this._onGrupChange && this._onGrupChange(this._grupCol);
          this.hideJL();
        }
      },
      setSlotsResult: function setSlotsResult() {
        var epicInfo = SlotsFacade.dm.bonusData;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var val = epicInfo.items[this._grupIndex + i];
          -1 == val ? item.SetResult([ {
            sid: this._getRandomSymbol(),
            data: 0
          } ]) : item.SetResult([ {
            sid: SlotsFacade.dm.getGameCfg().bonusId,
            data: val
          } ]);
        }
      },
      startMove: function startMove() {
        var reelsData = SlotsFacade.bonusGame._data.lastRoundReelsData;
        var isMoveReel = false;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var val = reelsData[this._grupIndex + i];
          if (-1 == val) {
            item.StartMove();
            isMoveReel = true;
            this._endMoveIdx = i;
          }
        }
        return isMoveReel;
      },
      AddDelayTime: function AddDelayTime(val) {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          reel._bMoving && reel.AddDelayTime(val);
        }
      },
      showJL: function showJL(idx) {
        var spine_tip = this._reels[idx - this._grupIndex - 1].node.getChildByName("spine_tip");
        spine_tip.active = true;
        spine_tip.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
      },
      hideJL: function hideJL() {
        for (var i = 0; i < this._reels.length; i++) {
          var element = this._reels[i];
          var spine_tip = element.node.getChildByName("spine_tip");
          spine_tip.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e906dcv8ERD3o/CtT8PYRZ+", "Interstellar_BonusReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        handler: null,
        reelScale: 1
      },
      onLoad: function onLoad() {
        this._super();
        this.isLoaded = true;
        this._nCount && this.Init(this._reelIdx, this._nCount, this._topAniNode);
      },
      onDestroy: function onDestroy() {
        this.handler = null;
      },
      Init: function Init(idx, nCount, node) {
        this._reelIdx = idx;
        this._nCount = nCount;
        this._symbols = [];
        this._topAniNode = node;
        this._cfg = cc.vv.gameData.getGameCfg();
        if (this.isLoaded) {
          this.LoadSymbols();
          this.ShowAntiEffect(false);
        }
      },
      CreateOneSymbol: function CreateOneSymbol() {
        this._super();
        var symbol = this._symbols[this._symbols.length - 1];
        symbol.node.scale = this.reelScale;
        symbol.isEpic = true;
        symbol._nodeScale = this.reelScale;
        symbol.showColor();
      },
      setHandler: function setHandler(handler) {
        this.handler = handler;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this.ShowAntiEffect(false);
        this.notifyEvt(this._reelIdx);
      },
      notifyEvt: function notifyEvt(evt) {
        this.handler && this.handler(evt);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Interstellar_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48389i5rQxJBIvU41awPw4/", "Interstellar_Cfg");
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
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "",
        win_ani: {
          name: "animation4",
          zIndex: 300
        },
        stop_ani: {
          name: "animation4",
          zIndex: 200
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
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _symbol),
      scatterId: 2,
      bonusId: 3,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Interstellar_Slots",
        Reels: "Interstellar_Reel",
        Symbols: "Interstellar_symbol"
      },
      col: 20,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 100
      },
      helpItems: [ "games/Interstellar/prefab/LMSlots_Help_item1", "games/Interstellar/prefab/LMSlots_Help_item2", "games/Interstellar/prefab/LMSlots_Help_item3", "games/Interstellar/prefab/LMSlots_Help_item4" ],
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
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
        counts: [ 4, 4, 4, 4, 4 ],
        antiNode: "node_anti",
        path: "games/Interstellar/",
        reelStopSound: "stop",
        symbolStopSound: "bonus_land",
        antSound: "anticipation",
        antSpeed: 2400
      } ],
      normalBgm: "xjpzFX_looperman",
      commEffect: {
        path: "games/Interstellar/",
        win1: [ "win1" ],
        win2: [ "win2" ]
      }
    };
    Cfg.isWild = function(id) {
      return 1 == id;
    };
    Cfg.isEnergyId = function(id) {
      return 2 == id || 3 == id;
    };
    Cfg.mapCfg = {
      1: {
        id: 1,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      2: {
        id: 2,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      3: {
        id: 3,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      4: {
        id: 4,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1 ]
        },
        dockerDir: 1
      },
      5: {
        id: 5,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      6: {
        id: 6,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      7: {
        id: 7,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      8: {
        id: 8,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      9: {
        id: 9,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 3, 5 ]
        },
        dockerDir: -1
      },
      10: {
        id: 10,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      11: {
        id: 11,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      12: {
        id: 12,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        },
        dockerDir: 1
      },
      13: {
        id: 13,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      14: {
        id: 14,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      15: {
        id: 15,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      16: {
        id: 16,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      17: {
        id: 17,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      18: {
        id: 18,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ]
        },
        dockerDir: 1
      },
      19: {
        id: 19,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      20: {
        id: 20,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      21: {
        id: 21,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      22: {
        id: 22,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 3, 5 ]
        },
        dockerDir: -1
      },
      23: {
        id: 23,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      24: {
        id: 24,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      25: {
        id: 25,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 5 ]
        },
        dockerDir: 1
      },
      26: {
        id: 26,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      27: {
        id: 27,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      28: {
        id: 28,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      29: {
        id: 29,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      30: {
        id: 30,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      31: {
        id: 31,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ]
        },
        dockerDir: 1
      },
      32: {
        id: 32,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      33: {
        id: 33,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      34: {
        id: 34,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      35: {
        id: 35,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 3, 5 ]
        },
        dockerDir: -1
      },
      36: {
        id: 36,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      37: {
        id: 37,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      38: {
        id: 38,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      39: {
        id: 39,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      40: {
        id: 40,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        },
        dockerDir: 1
      },
      41: {
        id: 41,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      42: {
        id: 42,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      43: {
        id: 43,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      44: {
        id: 44,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ]
        },
        dockerDir: -1
      },
      45: {
        id: 45,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      46: {
        id: 46,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      47: {
        id: 47,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      48: {
        id: 48,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 1 ]
        },
        dockerDir: 1
      },
      49: {
        id: 49,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      50: {
        id: 50,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      51: {
        id: 51,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      52: {
        id: 52,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      53: {
        id: 53,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 4 ]
        },
        dockerDir: -1
      },
      54: {
        id: 54,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      55: {
        id: 55,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      56: {
        id: 56,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 2, 3 ]
        },
        dockerDir: 1
      },
      57: {
        id: 57,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      58: {
        id: 58,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      59: {
        id: 59,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      60: {
        id: 60,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      61: {
        id: 61,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      62: {
        id: 62,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        },
        dockerDir: 1
      },
      63: {
        id: 63,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      64: {
        id: 64,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      65: {
        id: 65,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      66: {
        id: 66,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ]
        },
        dockerDir: -1
      },
      67: {
        id: 67,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      68: {
        id: 68,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      69: {
        id: 69,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 2, 5 ]
        },
        dockerDir: 1
      },
      70: {
        id: 70,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      71: {
        id: 71,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      72: {
        id: 72,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      73: {
        id: 73,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      74: {
        id: 74,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      75: {
        id: 75,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 5 ]
        },
        dockerDir: 1
      },
      76: {
        id: 76,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      77: {
        id: 77,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      78: {
        id: 78,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      79: {
        id: 79,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ]
        },
        dockerDir: -1
      },
      80: {
        id: 80,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      81: {
        id: 81,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      82: {
        id: 82,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      83: {
        id: 83,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      84: {
        id: 84,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 1, 5 ]
        },
        dockerDir: 1
      },
      85: {
        id: 85,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      86: {
        id: 86,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: 1
      },
      87: {
        id: 87,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      88: {
        id: 88,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ]
        },
        dockerDir: -1
      },
      89: {
        id: 89,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      90: {
        id: 90,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      91: {
        id: 91,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      92: {
        id: 92,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 3, 4 ]
        },
        dockerDir: 1
      },
      93: {
        id: 93,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      94: {
        id: 94,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      95: {
        id: 95,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      96: {
        id: 96,
        type: 2,
        iconSpineName: "animation2",
        dockerDir: -1
      },
      97: {
        id: 97,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      98: {
        id: 98,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: -1
      },
      99: {
        id: 99,
        type: 1,
        iconSpineName: "animation1",
        dockerDir: 1
      },
      100: {
        id: 100,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 3, 4, 5 ]
        },
        dockerDir: 1
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Interstellar_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b057cSw7tGcrvxygJHhwql", "Interstellar_CollectProgress");
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
        spine_collect_lock: sp.Skeleton,
        spine_full: sp.Skeleton,
        collect_track_particle: cc.Node,
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
        this.btn_enter.on(cc.Node.EventType.TOUCH_END, this._onEnterHandler.bind(this), this);
        this.progressBar.on(cc.Node.EventType.TOUCH_END, function() {
          _this2._isOpen || _this2._openCollect();
        }, this);
      },
      _init: function _init() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.updateTailSpine();
        this.showCollect(true);
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        SlotsFacade.soundMgr.playEffect("btn_click");
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.map.enterMap(true, function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        });
      },
      updateTailSpine: function updateTailSpine() {
        var nextId = SlotsFacade.dm.energyData.nextId;
        var vo = SlotsFacade.dm.getGameCfg().mapCfg[nextId.toString()];
        if (vo) {
          var spine = this.btn_enter.getChildByName("spine").getComponent(sp.Skeleton);
          var spineName = vo.iconSpineName;
          spine.setAnimation(0, spineName, true);
        } else console.log("#Err#collectProgress#updateTailSpine", nextId);
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
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("map_collect");
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
              _context.next = 6;
              return Promise.all(promiseArr);

             case 6:
              _this3._playHeadSpine();
              _this3.setProgress(percent, true);

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _playHeadSpine: function _playHeadSpine() {
        var spine = this.icon_energy.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, "animation", false);
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (!this._isOpen) {
            this.spine_collect_lock.node.active = true;
            SlotsFacade.soundMgr.playEffect("collect_unlock");
            this.spine_collect_lock.setAnimation(0, "animation2", false);
          }
        } else if (isInit) {
          this.spine_collect_lock.node.active = true;
          this.spine_collect_lock.setAnimation(0, "animation1", false);
        } else if (this._isOpen) {
          this.spine_collect_lock.node.active = true;
          SlotsFacade.soundMgr.playEffect("collect_lock");
          this.spine_collect_lock.setAnimation(0, "animation1", false);
        }
        this._isOpen = boo;
      },
      playCollectComplete: function playCollectComplete() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this4.spine_full.node.active = true;
              SlotsFacade.soundMgr.playEffect("map_full");
              _context2.next = 4;
              return new Promise(function(res) {
                _this4.spine_full.setAnimation(0, "animation3", false);
                _this4.spine_full.setCompleteListener(function() {
                  _this4.spine_full.setCompleteListener(null);
                  res();
                });
              });

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setProgress: function setProgress(percent, needTransform) {
        var w = this.progressBar.width;
        var toX = percent * w - w;
        var spine_progress = this.progressBar.getChildByName("bar");
        var colectEffect = cc.find("spine", spine_progress);
        colectEffect.active = true;
        colectEffect.getComponent(sp.Skeleton).setCompleteListener(function() {
          colectEffect.active = false;
          colectEffect.getComponent(sp.Skeleton).setCompleteListener(null);
        });
        needTransform ? cc.tween(spine_progress).to(.5, {
          x: toX
        }).start() : spine_progress.x = toX;
      },
      setEnterEnable: function setEnterEnable(boo) {
        this.btn_enter.getComponent(cc.Button).enabled = boo;
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25756LhsjxBoLN8ZKCIHUlU", "Interstellar_FlowCtrl");
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
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (rest > 0) {
                SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
                SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = false;
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                SlotsFacade.bottomCmp.SetWin(nTotal);
                SlotsFacade.mainPanel.showBg(2);
                SlotsFacade.soundMgr.playFreeBgm();
              }
              if (!(1 == SlotsFacade.dm.energyData.state)) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return _this.enterCollectGame();

             case 6:
              if (!SlotsFacade.dm.bonusData) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.enterBonusGame(true);

             case 9:
              SlotsFacade.slots.CanDoNextRound();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2.collectEnergy();

             case 2:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 8;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 8:
              _context2.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              _context2.next = 12;
              return _this2.enterCollectGame();

             case 12:
              _context2.next = 14;
              return _this2.enterBonusGame();

             case 14:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context2.next = 27;
                break;
              }
              _context2.next = 17;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), SlotsFacade.dm.isFistTriggerFree());

             case 17:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context2.next = 22;
                break;
              }
              SlotsFacade.mainPanel.showSceneTransition(2);
              _context2.next = 21;
              return SlotsFacade.delayTime(.8);

             case 21:
              _this2.enterFreeGame();

             case 22:
              _context2.next = 24;
              return SlotsFacade.delayTime(1);

             case 24:
              SlotsFacade.slots.CanDoNextRound();
              _context2.next = 47;
              break;

             case 27:
              if (!cc.vv.gameData.hasFree()) {
                _context2.next = 31;
                break;
              }
              SlotsFacade.slots.CanDoNextRound();
              _context2.next = 47;
              break;

             case 31:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context2.next = 45;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context2.next = 35;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin());

             case 35:
              SlotsFacade.mainPanel.showSceneTransition(2);
              _context2.next = 38;
              return SlotsFacade.delayTime(.5);

             case 38:
              _this2.enterNormalGame();
              _context2.next = 41;
              return SlotsFacade.delayTime(.5);

             case 41:
              SlotsFacade.bottomCmp.ShowBtnsByState("idle");
              SlotsFacade.slots.CanDoNextRound();
              _context2.next = 47;
              break;

             case 45:
              SlotsFacade.collectProgress.setEnterEnable(true);
              SlotsFacade.slots.CanDoNextRound();

             case 47:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(2);
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.slots.changeSlots();
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = false;
              _context3.next = 8;
              return SlotsFacade.delayTime(3.5);

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        SlotsFacade.collectProgress.setEnterEnable(true);
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.mainPanel.showBg(0);
        Global.SlotsSoundMgr.playNormalBgm();
        SlotsFacade.slots.clearFreeSymbols();
        SlotsFacade.slots.changeSlots();
        SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var progressData, items, posArr;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              progressData = SlotsFacade.dm.energyData.progressData;
              if (!(progressData && progressData.currCnt)) {
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
      },
      enterCollectGame: function enterCollectGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var energyData, ret, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData;
              if (!(1 == energyData.state || 2 == energyData.state && SlotsFacade.dm.isFistTriggerFree())) {
                _context5.next = 15;
                break;
              }
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context5.next = 6;
              return SlotsFacade.collectProgress.playCollectComplete();

             case 6:
              _context5.next = 8;
              return new Promise(function(res) {
                SlotsFacade.collectProgress.setProgress(0);
                SlotsFacade.collectProgress.updateTailSpine(0);
                SlotsFacade.map.enterMap(false, res);
              });

             case 8:
              ret = _context5.sent;
              if (!ret.winCoin) {
                _context5.next = 15;
                break;
              }
              nWin = ret.winCoin;
              nTotal = cc.vv.gameData.GetBottomScript().getCurrentWin();
              nTotal += ret.winCoin;
              _context5.next = 15;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 15:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterBonusGame: function enterBonusGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (SlotsFacade.dm.bonusData) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");

             case 2:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isReconnect) {
                _context6.next = 7;
                break;
              }
              _context6.next = 7;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getBonusIndexs());

             case 7:
              _context6.next = 9;
              return new Promise(function(res) {
                SlotsFacade.bonusGame.enterGame(res, isReconnect);
              });

             case 9:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecce3Vwi/5AjbK/84HgIxBM", "Interstellar_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null,
        bonusData: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.mapInfo;
        this.bonusData = this._deskInfo.epicInfo;
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
        this._super(msg);
        if (200 == msg.code) {
          this.energyData = msg.mapInfo;
          this.bonusData = msg.epicInfo;
        }
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
      processResultCards: function processResultCards(cards) {
        var result = cards.concat();
        var row = 8;
        var col = 5;
        var Cfg = this.getGameCfg();
        var wildIdMap = {
          1: 2001,
          101: 2101,
          102: 2102
        };
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i];
          if (!Cfg.isWild(c)) continue;
          var crrRow = Math.floor(i / col);
          var upperIsScatter = false;
          var downIsScatter = false;
          upperIsScatter = 0 != crrRow && Cfg.isWild(cards[i - col]);
          downIsScatter = crrRow != row - 1 && Cfg.isWild(cards[i + col]);
          0 == crrRow ? downIsScatter && (result[i] = wildIdMap[c]) : (4 == crrRow, upperIsScatter && (result[i] = wildIdMap[c]));
        }
        return result;
      },
      getSlotsCnt: function getSlotsCnt() {
        return 2 == this.energyData.state ? this.getGameCfg().mapCfg[this.energyData.currId.toString()].slot.cnt : 1;
      },
      getAdventureInSpace: function getAdventureInSpace() {
        if (this._gameInfo) return this._gameInfo.AdventureInSpace;
        return this._deskInfo.AdventureInSpace;
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
      getBonusIndexs: function getBonusIndexs() {
        if (!this.bonusData) return [];
        var ret = [];
        var scatterId = this.getGameCfg().scatterId;
        var cards = this.getSpinData().resultCards;
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i];
          c == scatterId && ret.push(i + 1);
        }
        return ret;
      },
      getMinCollectBet: function getMinCollectBet() {},
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
        2 === msg.data.rtype ? SlotsFacade.bonusGame.onSpin(msg) : SlotsFacade.map._mapWheel.onSpinWheel(msg);
      },
      getColCards: function getColCards(colIndex) {
        var data = this._gameInfo.resultCards;
        var ret = [];
        var col = 5;
        var row = 4;
        for (var i = 0; i < row; i++) ret.push(data[colIndex + i * col]);
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Interstellar_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4968fUJMqdLiIBK9rnqsfTw", "Interstellar_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        var _this = this;
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("Interstellar_MainPanel");
        this.soundMgr = this.addComponent("Interstellar_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("Interstellar_FlowCtrl");
        this.popup = this.mainPanel.popup_node.addComponent("Interstellar_Popup");
        this.collectProgress = this.mainPanel.collect_progress.getComponent("Interstellar_CollectProgress");
        this.map = this.mainPanel.map_game_node.addComponent("Interstellar_Map");
        this.bonusGame = this.mainPanel.bonus_game_node.getComponent("Interstellar_BonusGame");
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
  Interstellar_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b684cRsRzNH3KDRb8d2xT8W", "Interstellar_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.charactor = this.node.getChildByName("xingjichuanyue");
        this.popup_node = this.node.getChildByName("popup_node");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.map_game_node = this.node.getChildByName("map_game_node");
        this.bonus_game_node = this.node.getChildByName("bonus_game_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
        this.charactor.active = 0 == type;
        this.jpNode.active = 2 != type;
        this.collect_progress.active = 0 == type;
      },
      showSceneTransition: function showSceneTransition(type, cmpHandler) {
        var spine = this.transition_node.getChildByName("spine_" + type).getComponent(sp.Skeleton);
        spine.node.active = true;
        if (1 == type) {
          SlotsFacade.soundMgr.playEffect("bonus1");
          spine.setAnimation(0, "skill", false);
        } else if (2 == type) {
          SlotsFacade.soundMgr.playEffect("map1");
          spine.setAnimation(0, "animation1", false);
        }
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_MapWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb11en3ptlFkb5E8JG58rWo", "Interstellar_MapWheel");
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
        roundCount: 10,
        _data: null,
        _callBack: null,
        wheel: cc.Node,
        bg: cc.Node,
        board: cc.Node,
        btn_spin: cc.Node,
        spine_btn_spin: sp.Skeleton,
        spine_fire: sp.Skeleton,
        spine_win: sp.Skeleton,
        spine_wheel_bg: sp.Skeleton,
        label_start_prize: cc.Label,
        spine_down: sp.Skeleton,
        spine_icon_arrow: sp.Skeleton,
        switchUis: [ cc.Node ]
      },
      _getRotation: function _getRotation(index) {
        var ret = 360 * -this.roundCount;
        var unitAngle = 60;
        var indexsAngle = [ 0, 1 * unitAngle - 360, 2 * unitAngle - 360, 3 * unitAngle - 360, 4 * unitAngle - 360, 5 * unitAngle - 360 ];
        ret += indexsAngle[index];
        return ret;
      },
      onLoad: function onLoad() {
        this._initListener();
      },
      _initListener: function _initListener() {
        this.btn_spin.on("click", this._onStartWheelHandler.bind(this), this);
      },
      _onStartWheelHandler: function _onStartWheelHandler() {
        this.btn_spin.getComponent(cc.Button).interactable = false;
        SlotsFacade.soundMgr.playEffect("spin_button");
        SlotsFacade.dm.reqSubGame({
          rtype: 1
        });
      },
      onSpinWheel: function onSpinWheel(msg) {
        if (msg.data) {
          this._data.freeCnt = msg.data.freeCnt;
          this._data.winCoin = msg.data.winCoin;
          this._data.idx = msg.data.idx;
        }
        this._startWheel();
      },
      _reset: function _reset() {
        this.board.angle = 0;
        this.bg.active = false;
        this.wheel.active = false;
        this.wheel.y = this.wheel.height / 2;
        this.spine_btn_spin.node.active = false;
        this.spine_wheel_bg.node.active = false;
        this.spine_win.node.active = false;
        this.spine_fire.active = false;
        this.spine_icon_arrow.node.active = false;
        this.label_start_prize.string = "";
        this._data = {
          wheel_type: 0,
          freeCnt: 0,
          winCoin: 0,
          idx: 0
        };
      },
      _startWheel: function _startWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.spine_btn_spin.node.active = false;
              _this.spine_fire.node.active = true;
              _this.spine_wheel_bg.node.active = true;
              SlotsFacade.soundMgr.playEffect("wheel_act");
              _context.next = 6;
              return new Promise(function(res) {
                cc.tween(_this.board).to(4, {
                  angle: _this._getRotation(_this._data.idx - 1)
                }, {
                  easing: "quartInOut"
                }).call(function() {
                  _this.spine_icon_arrow.node.active = true;
                  _this._data.winCoin, SlotsFacade.soundMgr.playEffect("wheel_collect");
                  res();
                }).start();
              });

             case 6:
              _this.spine_fire.node.active = false;
              _this.spine_wheel_bg.node.active = false;
              _this.spine_win.node.active = true;
              _context.next = 11;
              return SlotsFacade.delayTime(2);

             case 11:
              _this._completeWheel();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _completeWheel: function _completeWheel() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var vo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              if (!_this2._data.winCoin) {
                _context2.next = 6;
                break;
              }
              SlotsFacade.soundMgr.playEffect("jp_collect_popup");
              vo = SlotsFacade.dm.getGameCfg().mapCfg[SlotsFacade.dm.energyData.currId.toString()];
              _context2.next = 6;
              return SlotsFacade.popup.showWinWheelGold(_this2._data.winCoin, vo.type);

             case 6:
              _context2.next = 8;
              return _this2.close();

             case 8:
              _this2._callBack && _this2._callBack({
                freeCnt: _this2._data.freeCnt,
                winCoin: _this2._data.winCoin
              });

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _fresh: function _fresh() {
        var _this3 = this;
        var vo = SlotsFacade.dm.getGameCfg().mapCfg[SlotsFacade.dm.energyData.currId.toString()];
        this._data.wheel_type = vo.type;
        this.switchUis.forEach(function(element) {
          element.getComponent("ImgSwitchCmp").setIndex(_this3._data.wheel_type - 1);
        });
        this.label_start_prize.string = Global.FormatNumToComma(SlotsFacade.dm.energyData.startPrice);
      },
      open: function open(cb) {
        var _this4 = this;
        this._callBack = cb;
        this.node.active = true;
        this._reset();
        this.btn_spin.getComponent(cc.Button).interactable = true;
        this._fresh();
        this.bg.active = true;
        this.bg.opacity = 1;
        this.bg.runAction(cc.fadeTo(1, 200));
        this.wheel.active = true;
        this.spine_down.node.active = true;
        this.spine_down.setAnimation(0, "animation" + this._data.wheel_type);
        cc.tween(this.wheel).to(.5, {
          y: 0
        }, {
          easing: "backOut"
        }).call(function() {
          _this4.spine_down.node.active = false;
          SlotsFacade.soundMgr.playBgm("wheel_bgm");
          cc.vv.gameData.checkAutoPlay(_this4.btn_spin, _this4._onStartWheelHandler.bind(_this4));
        }).start();
        SlotsFacade.soundMgr.playEffect("wheel_show");
        this.spine_btn_spin.node.active = true;
        this.spine_btn_spin.setAnimation(0, "animation", true);
      },
      close: function close() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_disappear");
              return _context3.abrupt("return", new Promise(function(res) {
                cc.tween(_this5.bg).to(.5, {
                  opacity: 0
                }).call(function() {
                  _this5.bg.active = false;
                }).start();
                cc.tween(_this5.wheel).to(.5, {
                  y: _this5.wheel.height / 2
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this5.wheel.active = false;
                  _this5.node.active = false;
                  Global.SlotsSoundMgr.playUnLoopBgm("bg_bgm");
                  res();
                }).start();
              }));

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e467J0SW5MP7JO40u+PJpY", "Interstellar_Map");
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
        _mapWheel: null,
        map_game_node: null,
        bg: null,
        btn_close: null,
        scrollView: null,
        map_flag: null,
        mapItems: [],
        _wheelResp: null
      },
      onLoad: function onLoad() {
        this._initView();
        this._initListener();
      },
      _initView: function _initView() {
        this.map_game_node = this.node;
        this._mapWheel = this.map_game_node.getChildByName("map_wheel_node").getComponent("Interstellar_MapWheel");
        this.bg = this.map_game_node.getChildByName("bg");
        this.btn_close = this.map_game_node.getChildByName("btn_close").getComponent(cc.Button);
        this.scrollView = this.map_game_node.getChildByName("scrollview").getComponent(cc.ScrollView);
        this.map_flag = this.scrollView.content.getChildByName("map_flag");
        this.mapItems = [];
        var mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
        for (var i = 1; i <= 100; i++) {
          var item = this.scrollView.content.getChildByName("item_" + i);
          item["id"] = i;
          var vo = mapCfg[i.toString()];
          var spineName = "";
          1 == vo.type ? spineName = "animation1_1" : 2 == vo.type && (spineName = "animation2_1");
          spineName && item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, spineName, false);
          3 == vo.type ? cc.find("step/label", item).getComponent(cc.Label).string = i : item.getChildByName("label_step").getComponent(cc.Label).string = i;
          this.mapItems.push(item);
        }
        this._reset();
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
          _this.btn_close.node.getChildByName("spine").active = true;
          cc.tween(_this.btn_close.node).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function() {
            cc.vv.gameData.checkAutoPlay(_this.btn_close.node, _this._onBtnCloseHandler.bind(_this));
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
              _this2.btn_close.interactable = false;
              _this2.btn_close.node.getChildByName("spine").active = false;
              _this2.btn_close.node.stopAllActions();
              cc.tween(_this2.btn_close.node).to(.3, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                _this2.exitMap(_this2._wheelResp);
              }).start();

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitMap: function exitMap(data) {
        var _this3 = this;
        SlotsFacade.soundMgr.playEffect("map_close");
        var svNode = this.scrollView.node;
        cc.tween(svNode).to(.3, {
          y: svNode.height
        }, {
          easing: "cubicOut"
        }).call(function() {
          _this3._reset();
          if (_this3.callBack) {
            _this3.callBack(data);
            _this3.callBack = null;
          }
        }).start();
      },
      enterMap: function enterMap(isView, cb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var data, currIndex, item, mapCfg, vo, respData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("map_show");
              _this4.callBack = cb;
              _this4._wheelResp = null;
              _this4.map_game_node.active = true;
              _this4.bg.active = true;
              data = SlotsFacade.dm.energyData;
              currIndex = data.currId;
              !isView && data.state > 0 && (currIndex -= 1);
              _this4._freshMap(currIndex);
              if (currIndex > 0) {
                item = _this4.mapItems[currIndex - 1];
                _this4.scrollView.scrollToOffset(cc.v2(0, Math.abs(item.y) - _this4.scrollView.node.height / 2));
              } else _this4.scrollView.scrollToBottom();
              _context2.next = 12;
              return _this4._scrollViewShow();

             case 12:
              if (!isView) {
                _context2.next = 16;
                break;
              }
              _this4._showCloseBtn();
              _context2.next = 33;
              break;

             case 16:
              _context2.next = 18;
              return _this4._moveMapFlag(data.currId);

             case 18:
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              vo = mapCfg[data.currId];
              if (!(vo.type < 3)) {
                _context2.next = 32;
                break;
              }
              _context2.next = 23;
              return new Promise(function(res) {
                _this4._mapWheel.open(function(resp) {
                  res(resp);
                });
              });

             case 23:
              respData = _context2.sent;
              if (!respData.freeCnt) {
                _context2.next = 28;
                break;
              }
              _context2.next = 27;
              return _this4._addHouseFreeCnt(data.currId);

             case 27:
              SlotsFacade.dm.energyData.nextSpinCount += 1;

             case 28:
              _this4._wheelResp = {
                winCoin: respData.winCoin
              };
              _this4._showCloseBtn();
              _context2.next = 33;
              break;

             case 32:
              _this4.exitMap({
                freeCnt: vo.freeCnt
              });

             case 33:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _addHouseFreeCnt: function _addHouseFreeCnt(currIndex) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("add");
              return _context3.abrupt("return", new Promise(function(res) {
                var item = _this5._findNextHouse(currIndex);
                if (item) {
                  item.getChildByName("icon_free_cnt").getComponent("ImgSwitchCmp").setIndex(SlotsFacade.dm.energyData.nextSpinCount + 1 - 5);
                  var spine = cc.find("icon_free_cnt/spine_free_count_change", item).getComponent(sp.Skeleton);
                  spine.node.active = true;
                  spine.setAnimation(0, "animation", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    res();
                  });
                } else res();
              }));

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _findNextHouse: function _findNextHouse(currIndex) {
        var mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
        for (var i = currIndex + 1; i <= 100; i++) {
          var vo = mapCfg[i];
          if (3 == vo.type) return this.mapItems[i - 1];
        }
        return null;
      },
      _moveMapFlag: function _moveMapFlag(toIdx) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var vo, item;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              vo = SlotsFacade.dm.getGameCfg().mapCfg[toIdx.toString()];
              item = _this6.mapItems[toIdx - 1];
              _context4.next = 4;
              return new Promise(function(res) {
                var pos = item.getChildByName("pos");
                cc.tween(_this6.map_flag).to(1, {
                  x: item.x + pos.x,
                  y: item.y + pos.y
                }).call(function() {
                  _this6.map_flag.scaleX = vo.dockerDir || 1;
                  res();
                }).start();
              });

             case 4:
              _context4.next = 6;
              return new Promise(function(res) {
                var animationName = "";
                if (1 == vo.type) {
                  animationName = "animation1";
                  SlotsFacade.soundMgr.playEffect("move");
                } else if (2 == vo.type) {
                  animationName = "animation2";
                  SlotsFacade.soundMgr.playEffect("move");
                } else if (3 == vo.type) {
                  animationName = "animation" + (vo.slot.cnt - 1);
                  SlotsFacade.soundMgr.playEffect("move2");
                }
                var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, animationName, false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  3 == vo.type && (spine.node.active = false);
                  res();
                });
              });

             case 6:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _freshMap: function _freshMap(currIndex) {
        for (var i = 1; i <= currIndex; i++) this._markItemCmp(i);
        if (currIndex > 0) {
          var item = this.mapItems[currIndex - 1];
          var pos = item.getChildByName("pos");
          this.map_flag.x = item.x + pos.x;
          this.map_flag.y = item.y + pos.y;
          var vo = SlotsFacade.dm.getGameCfg().mapCfg[currIndex.toString()];
          this.map_flag.scaleX = vo.dockerDir || 1;
          item = this._findNextHouse(currIndex);
          item.getChildByName("icon_free_cnt").getComponent("ImgSwitchCmp").setIndex(SlotsFacade.dm.energyData.nextSpinCount - 5);
        }
      },
      _markItemCmp: function _markItemCmp(index) {
        var vo = SlotsFacade.dm.getGameCfg().mapCfg[index.toString()];
        var item = this.mapItems[index - 1];
        var color = new cc.Color().fromHEX("#898989");
        item.color = color;
        if (3 == vo.type) {
          item.getChildByName("step").color = color;
          cc.find("step/label", item).color = color;
        } else item.getChildByName("label_step").color = color;
        if (3 == vo.type) item.getChildByName("icon_free_cnt").active = false; else {
          var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
          spine.node.color = color;
          spine.node.active = true;
        }
      },
      _scrollViewShow: function _scrollViewShow() {
        var _this7 = this;
        return new Promise(function(res) {
          var svNode = _this7.scrollView.node;
          svNode.active = true;
          cc.tween(svNode).to(.5, {
            y: 0
          }, {
            easing: "backOut"
          }).call(function() {
            res();
          }).start();
        });
      },
      _reset: function _reset() {
        this.bg.active = false;
        this.scrollView.node.active = false;
        this.scrollView.node.y = this.scrollView.node.height / 2;
        this.btn_close.node.active = false;
        this.map_game_node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aab9cgv0+NDaKAp7Yl5a6uo", "Interstellar_Popup");
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
      showWinWheelGold: function showWinWheelGold(goldNumb, type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              type = type || 1;
              aniCfg = {
                1: {
                  preAni: "animation1",
                  idle: "animation1_1"
                },
                2: {
                  preAni: "animation2",
                  idle: "animation2_1"
                }
              };
              SlotsFacade.soundMgr.playEffect("wheel_collect");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_wheel_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg[type].preAni, false);
              spine.addAnimation(0, aniCfg[type].idle, true);
              cc.tween(panel).delay(.5).call(function() {
                label.active = true;
                label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
                okBtn.active = true;
                cc.tween(okBtn).to(.4, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }).start();
              _context.next = 18;
              return SlotsFacade.delayTime(.9);

             case 18:
              _context.next = 20;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.showBg(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.stopEffectByName("wheel_collect");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 20:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("dialog_fg_collect");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation2", false);
              spine.addAnimation(0, "animation1_2", true);
              cc.tween(panel).delay(.5).call(function() {
                label.active = true;
                label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
                okBtn.active = true;
                cc.tween(okBtn).to(.4, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }).start();
              _context2.next = 17;
              return SlotsFacade.delayTime(.9);

             case 17:
              _context2.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this2.showBg(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("dialog_fg_start");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation1", false);
              spine.addAnimation(0, "animation1_1", true);
              cc.tween(panel).delay(.5).call(function() {
                label.active = true;
                label.getComponent(cc.Label).string = cnt.toString();
                okBtn.active = true;
                cc.tween(okBtn).to(.4, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }).start();
              _context3.next = 17;
              return SlotsFacade.delayTime(.9);

             case 17:
              _context3.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              aniCfg = {
                1: {
                  preAni: "animation5",
                  idle: "animation5_1"
                },
                2: {
                  preAni: "animation4",
                  idle: "animation4_1"
                },
                3: {
                  preAni: "animation3",
                  idle: "animation3_1"
                },
                4: {
                  preAni: "animation1",
                  idle: "animation1_1"
                },
                5: {
                  preAni: "animation2",
                  idle: "animation2_1"
                }
              };
              SlotsFacade.soundMgr.playEffect("jp_shows");
              _this4.showBgDark(true);
              panel = _this4.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg[jpType].preAni, false);
              spine.addAnimation(0, aniCfg[jpType].idle, true);
              cc.tween(panel).delay(.5).call(function() {
                label.active = true;
                label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
                okBtn.active = true;
                cc.tween(okBtn).to(.4, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }).start();
              _context4.next = 17;
              return SlotsFacade.delayTime(.9);

             case 17:
              _context4.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this4.showBgDark(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showWinBonusGold: function showWinBonusGold(goldNumb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("dialog_respin_end");
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_win_bonus_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.active = false;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation1", false);
              spine.addAnimation(0, "animation1_1", true);
              cc.tween(panel).delay(.5).call(function() {
                label.active = true;
                label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
                okBtn.active = true;
                cc.tween(okBtn).to(.4, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }).start();
              _context5.next = 17;
              return SlotsFacade.delayTime(.9);

             case 17:
              _context5.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this5.showBg(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    res();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showStartBonus: function showStartBonus(cbHandler) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var panel, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("dialog_trigger_respin");
              _this6.showBgDark(true);
              panel = _this6.node.getChildByName("panel_bonus_start");
              panel.active = true;
              panel.scale = 1;
              okBtn = panel.getChildByName("btn_ok");
              okBtn.active = false;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation1", false);
              spine.addAnimation(0, "animation2", true);
              spine.setCompleteListener(function() {
                okBtn.active = true;
                var handler = function handler() {
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this6.showBgDark(false);
                    panel.active = false;
                    SlotsFacade.soundMgr.playEffect("popup_out");
                    cbHandler && cbHandler();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
                spine.setCompleteListener(null);
              });

             case 12:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24272txYjtOIq8QKaz/Abv1", "Interstellar_PrizePool");
    "use strict";
    var JpCfg = {
      0: {
        nodeName: "prizePool_mini",
        lockAni: "animation2",
        lockedAni: "animation1",
        unlockAni: "animation3_5",
        iconIndex: 0,
        weight: 0
      },
      1: {
        nodeName: "prizePool_minor",
        lockAni: "animation2",
        lockedAni: "animation1",
        unlockAni: "animation3_4",
        iconIndex: 1,
        weight: 1
      },
      2: {
        nodeName: "prizePool_major",
        lockAni: "animation2",
        lockedAni: "animation1",
        unlockAni: "animation3_3",
        iconIndex: 2,
        weight: 2
      },
      3: {
        nodeName: "prizePool_grand",
        lockAni: "animation2",
        lockedAni: "animation1",
        unlockAni: "animation3_1",
        iconIndex: 3,
        weight: 4
      },
      4: {
        nodeName: "prizePool_maxi",
        lockAni: "animation2",
        lockedAni: "animation1",
        unlockAni: "animation3_2",
        iconIndex: 4,
        weight: 3
      }
    };
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 - 74 && (_this.node.y = cc.winSize.height / 2 - 30);
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
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
              var lock_node = targetJpNode.getChildByName("jp_lock");
              if (lock_node) {
                var lockSp = lock_node.getChildByName("spine").getComponent(sp.Skeleton);
                if (data.val) {
                  targetJpNode.isLock = true;
                  SlotsFacade.soundMgr.stopEffectByName("jp_lock");
                  SlotsFacade.soundMgr.playEffect("jp_lock");
                  lockSp.node.active = true;
                  lockSp.setAnimation(0, aniCfg.lockAni, false);
                  lockSp.addAnimation(0, aniCfg.lockedAni, false);
                  lockSp.setCompleteListener(function() {
                    lockSp.setCompleteListener(null);
                  });
                  this.scheduleOnce(function() {
                    targetJpNode.getChildByName("bg").color = cc.Color.GRAY;
                    targetJpNode.getChildByName("title").color = cc.Color.GRAY;
                    targetJpNode.getChildByName("lbl_num").color = cc.Color.GRAY;
                  }, .4);
                } else {
                  targetJpNode.isLock = false;
                  SlotsFacade.soundMgr.stopEffectByName("jp_unlock");
                  SlotsFacade.soundMgr.playEffect("jp_unlock");
                  lockSp.node.active = true;
                  lockSp.setAnimation(0, aniCfg.unlockAni, false);
                  lockSp.setCompleteListener(function() {
                    lockSp.setCompleteListener(null);
                  });
                  this.scheduleOnce(function() {
                    targetJpNode.getChildByName("bg").color = cc.Color.WHITE;
                    targetJpNode.getChildByName("title").color = cc.Color.WHITE;
                    targetJpNode.getChildByName("lbl_num").color = cc.Color.WHITE;
                  }, .4);
                }
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Interstellar_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c37490jzFIgIOek+fHKmFf", "Interstellar_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        wildMask: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.wildMask = this.node.getChildByName("wild_mask");
      },
      showWildMask: function showWildMask(boo) {
        this.wildMask && (this.wildMask.active = boo);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Interstellar_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ce47B5JONAwaU6k9ozvXle", "Interstellar_Slots");
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
      extends: require("LMSlots_Slots_Base"),
      properties: {
        MaxSlotsCnt: 4,
        _slotsCnt: 1,
        _unitSlotColCnt: 5,
        _nowJpLockWeight: 0,
        _nowJpUnlockWeight: 0
      },
      Init: function Init() {
        this._super();
        this.changeSlots();
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this.getCurReels());
        this._stopTime = this.GetStopTime();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
        SlotsFacade.collectProgress.setEnterEnable(false);
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        this.SetSlotsResult(msg);
        1 == this._slotsCnt && this.SetReelStateInfo(msg.resultCards);
      },
      OnReelSpinEnd: function OnReelSpinEnd(reelIdx) {
        var reel = this._reels[reelIdx];
        for (var i = 0; i < this._row; i++) {
          var symbol = reel._symbols[i];
          this._bStopRightnow ? symbol.playBonusRightNow() : symbol.playBonusSymbol();
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var selfCol = this._unitSlotColCnt * this._slotsCnt;
        var col = (idx - 1) % selfCol;
        var row = this._row - Math.floor((idx - 1) / selfCol) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      SetSlotsResult: function SetSlotsResult(msg) {
        var cardsList = msg.resultCards;
        if (msg.freeGameSlots && msg.freeGameSlots.length > 0) {
          cardsList = [];
          for (var i = 0; i < this._row; i++) {
            var _iterator = _createForOfIteratorHelper(msg.freeGameSlots), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var slotResult = _step.value;
                for (var j = 0; j < this._unitSlotColCnt; j++) cardsList.push(slotResult.cards[i * this._unitSlotColCnt + j]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
        var reelResults = [];
        var aCol = this.getCurrReelCnt();
        var bonusCoinIdxs = SlotsFacade.dm.getSpinData().bonusCoinIdxs || [];
        bonusCoinIdxs = bonusCoinIdxs.concat();
        var bonusCoins = SlotsFacade.dm.getSpinData().bonusCoins || [];
        bonusCoins = bonusCoins.concat();
        for (var _i = 0; _i < cardsList.length; _i++) {
          var row = Math.floor(_i / aCol);
          var col = _i % aCol;
          if (this._cfg.symbol[cardsList[_i]]) {
            var res = {};
            res.sid = cardsList[_i];
            if (bonusCoinIdxs.length && bonusCoinIdxs[0] == _i + 1) {
              res.data = bonusCoins[0];
              bonusCoinIdxs.shift();
              bonusCoins.shift();
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _j = 0; _j < 5 * this._slotsCnt; _j++) {
          var item = this._reels[_j];
          var reelRes = reelResults[_j];
          item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this = this;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._unitSlotColCnt;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
        try {
          var _loop = function _loop() {
            var info = _step2.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this._reels[_i2];
              var reelRes = reelResults[_i2];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && (stateInfo.isStop = true);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop();
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      hasScatter: function hasScatter(colIdx) {
        var scatterId = cc.vv.gameData.getGameCfg().scatterId;
        var sysResult = this._reels[colIdx]._symbols;
        for (var j = 0; j < 3; j++) if (sysResult[j].GetShowId() == scatterId) return true;
        return false;
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
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this2.GetSymbolByIdx(element);
                item.setAnimationToTop(false);
                item.playWinAnimation();
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
      getCurReels: function getCurReels() {
        return this._reels.slice(0, this.getCurrReelCnt());
      },
      getCurrReelCnt: function getCurrReelCnt() {
        return this._slotsCnt * this._unitSlotColCnt;
      },
      showSlots: function showSlots() {
        for (var i = 1; i <= this.MaxSlotsCnt; i++) cc.find("reels_bg" + i, this.node).active = i <= this._slotsCnt;
        var cnt = this.getCurrReelCnt();
        for (var _i3 = 0; _i3 < this._col; _i3++) this._reels[_i3].node.active = _i3 < cnt;
        this._slotsCnt <= 2 ? this.node.scale = 1 : 3 == this._slotsCnt ? this.node.scale = .8 : 4 == this._slotsCnt && (this.node.scale = .65);
      },
      showSlotsWildMask: function showSlotsWildMask() {
        if (this._slotsCnt > 1) {
          var wildCols = SlotsFacade.dm.getGameCfg().mapCfg[SlotsFacade.dm.energyData.currId + ""].slot.wilds;
          for (var i = 0; i < this._reels.length; i++) {
            var col = i % 5 + 1;
            this._reels[i].showWildMask(wildCols.includes(col));
          }
        } else for (var _i4 = 0; _i4 < this._unitSlotColCnt; _i4++) this._reels[_i4].showWildMask(false);
      },
      changeSlots: function changeSlots() {
        this._slotsCnt = SlotsFacade.dm.getSlotsCnt();
        this.showSlotsWildMask();
        this.showSlots();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        var freeGameSlots = SlotsFacade.dm.getSpinData().freeGameSlots;
        if (freeGameSlots && freeGameSlots.length > 0) for (var n in freeGameSlots) {
          var zjLuxian = freeGameSlots[n].zjLuXian;
          for (var i = 0; i < zjLuxian.length; i++) {
            var item = zjLuxian[i];
            for (var idx = 0; idx < item.indexs.length; idx++) {
              var posIdx = item.indexs[idx];
              var row = Math.floor((posIdx - 1) / 5);
              var col = (posIdx - 1) % 5;
              allWinIdx[5 * row * this._slotsCnt + 5 * n + col + 1] = 1;
            }
          }
        } else {
          var spinData = SlotsFacade.dm.getSpinData();
          for (var _i5 = 0; _i5 < spinData.zjLuXian.length; _i5++) {
            var _item = spinData.zjLuXian[_i5];
            for (var _idx = 0; _idx < _item.indexs.length; _idx++) allWinIdx[_item.indexs[_idx]] = 1;
          }
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      clearFreeSymbols: function clearFreeSymbols() {
        for (var i = 5; i < this._reels.length; i++) {
          var symbols = this._reels[i]._symbols;
          for (var j = 0; j < symbols.length; j++) symbols[j].StartMove();
        }
      },
      update: function update(dt) {
        if (this._slotsCnt > 1) this._super(dt); else if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this._gameInfo) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            var reelTime = 0;
            var interv = this._cfg.reelStopInter;
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              item.StopMove(reelTime);
              reelTime += interv;
              var reelCards = SlotsFacade.dm.getColCards(i);
              (reelCards.includes(this._cfg.scatterId) || reelCards.includes(this._cfg.bonusId)) && (reelTime += 1);
            }
          } else this._stopTime = dt;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Interstellar_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25c3bONnGVCO5CX9mTGueFW", "Interstellar_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/Interstellar/",
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
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("IconAudioInterplanetary");
      }
    });
    cc._RF.pop();
  }, {} ],
  Interstellar_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce14fdrZiJNKqI+lNq/yece", "Interstellar_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        isEpic: false,
        _nodeScale: 1
      },
      StartMove: function StartMove() {
        this._super();
        this._data = 0;
        this.showCoin();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.showColor();
      },
      showCoin: function showCoin() {
        if (this._data > 0) {
          var coin = this._data;
          var txt = cc.find("label_coin", this.node);
          txt.active = coin > 0;
          coin > 0 && (txt.getComponent(cc.Label).string = Global.formatNumShort(coin));
        } else {
          var _txt = cc.find("label_coin", this.node);
          _txt.active = false;
        }
      },
      showColor: function showColor() {
        this.isEpic && this._showNode && (this.GetShowId() == cc.vv.gameData.getGameCfg().bonusId ? this._showNode.color = new cc.Color().fromHEX("#FFFFFF") : this._showNode.color = new cc.Color().fromHEX("#3E3E3E"));
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        var data = 0;
        randVal == cfg.bonusId && (data = Global.random(0, 10) * SlotsFacade.dm.GetTotalBet());
        this.ShowById(randVal, data);
      },
      showBonusSymol: function showBonusSymol(id, data) {
        this._id = id;
        this._data = data;
        this._state = "normal";
        var cfg = SlotsFacade.dm.getGameCfg();
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find("bonus", aniNode);
        topShowNode.active = true;
        var zIndex = 500;
        aniNode.zIndex = zIndex - this._symbolIdx + 10 * this._reelIdx;
        var content_node = topShowNode.getChildByName("content_node");
        content_node.active = true;
        if (id == cfg.scatterId) content_node.getChildByName("epick_icon").active = true; else if (this._data > 0) {
          var label = content_node.getChildByName("label");
          label.active = true;
          label.getComponent(cc.Label).string = Global.formatNumShort(this._data);
        }
        this.showColor();
      },
      playBonusSymbol: function playBonusSymbol() {
        var _this = this;
        var id = this._id;
        var cfg = SlotsFacade.dm.getGameCfg();
        if (id != cfg.scatterId && id != cfg.bonusId) return;
        if (id == cfg.bonusId && this._data < 1) return;
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find("bonus", aniNode);
        topShowNode.active = true;
        var zIndex = 500;
        aniNode.zIndex = zIndex - this._symbolIdx + 10 * this._reelIdx;
        SlotsFacade.soundMgr.playEffect("symbol_bonus");
        var effect = topShowNode.getChildByName("effect").getComponent(sp.Skeleton);
        effect.node.active = true;
        effect.setAnimation(0, "animation1", false);
        effect.addAnimation(0, "animation2", true);
        var reel_ani = topShowNode.getChildByName("reel_ani");
        reel_ani.active = true;
        reel_ani.getComponent(cc.Animation).play("symbol_reel_ani");
        var content_node = topShowNode.getChildByName("content_node");
        content_node.active = true;
        content_node.scale = .6;
        if (id == cfg.scatterId) content_node.getChildByName("epick_icon").active = true; else {
          var label = content_node.getChildByName("label");
          label.active = true;
          label.getComponent(cc.Label).string = Global.formatNumShort(this._data);
        }
        cc.tween(content_node).to(.3, {
          scale: 1.3
        }).to(.1, {
          scale: 1
        }).call(function() {
          reel_ani.active = false;
          _this.isEpic ? effect.node.active = false : id == cfg.scatterId ? effect.node.active = false : effect.setAnimation(0, "animation4", true);
        }).start();
      },
      playBonusRightNow: function playBonusRightNow() {
        var _this2 = this;
        var id = this._id;
        var cfg = SlotsFacade.dm.getGameCfg();
        if (id != cfg.scatterId && id != cfg.bonusId) return;
        if (id == cfg.bonusId && this._data < 1) return;
        this._showNode && (this._showNode.active = false);
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find("bonus", aniNode);
        topShowNode.active = true;
        var zIndex = 500;
        aniNode.zIndex = zIndex - this._symbolIdx + 10 * this._reelIdx;
        SlotsFacade.soundMgr.playEffect("symbol_bonus");
        var effect = topShowNode.getChildByName("effect").getComponent(sp.Skeleton);
        effect.node.active = true;
        effect.setAnimation(0, "animation1", false);
        effect.addAnimation(0, "animation2", true);
        var content_node = topShowNode.getChildByName("content_node");
        content_node.active = true;
        content_node.scale = 0;
        if (id == cfg.scatterId) content_node.getChildByName("epick_icon").active = true; else {
          var label = content_node.getChildByName("label");
          label.active = true;
          label.getComponent(cc.Label).string = Global.formatNumShort(this._data);
        }
        cc.tween(content_node).to(.3, {
          scale: 1
        }, {
          easing: "backOut"
        }).call(function() {
          _this2.isEpic ? effect.node.active = false : id == cfg.scatterId ? effect.node.active = false : effect.setAnimation(0, "animation4", true);
        }).start();
        cc.tween(topShowNode).to(.15, {
          scale: 1.2
        }).to(.25, {
          scale: 1
        }).call(function() {}).start();
      },
      playWinFlash: function playWinFlash() {
        var id = this._id;
        var cfg = SlotsFacade.dm.getGameCfg();
        if (id != cfg.scatterId && id != cfg.bonusId) return;
        if (id == cfg.bonusId && this._data < 1) return;
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find("bonus", aniNode);
        topShowNode.active = true;
        var spineFlash = cc.find("spine_flash", topShowNode);
        spineFlash.active = true;
        spineFlash.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        spineFlash.getComponent(sp.Skeleton).setCompleteListener(function() {
          spineFlash.getComponent(sp.Skeleton).setCompleteListener(null);
          spineFlash.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Interstellar_BonusGame", "Interstellar_BonusGrup", "Interstellar_BonusReel", "Interstellar_Cfg", "Interstellar_CollectProgress", "Interstellar_FlowCtrl", "Interstellar_GameData", "Interstellar_Logic", "Interstellar_MainPanel", "Interstellar_Map", "Interstellar_MapWheel", "Interstellar_Popup", "Interstellar_PrizePool", "Interstellar_Reel", "Interstellar_Slots", "Interstellar_Sound", "Interstellar_symbol" ]);