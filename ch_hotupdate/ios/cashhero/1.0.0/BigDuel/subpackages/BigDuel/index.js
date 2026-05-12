window.__require = function e(n, t, a) {
function i(r, c) {
if (!t[r]) {
if (!n[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!n[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var m = t[r] = {
exports: {}
};
n[r][0].call(m.exports, function(e) {
return i(n[r][1][e] || e);
}, m, m.exports, e, n, t, a);
}
return t[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < a.length; r++) i(a[r]);
return i;
}({
BigDuel_ButtonSafe: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "e15b0TSCplFMY+BEXr1fjBq", "BigDuel_ButtonSafe");
cc.Class({
extends: cc.Component,
properties: {
safeTime: {
default: .5,
tooltip: "按钮保护时间，指定间隔内只能点击一次."
}
},
onLoad: function() {
var e = this.getComponent(cc.Button);
if (e) {
this.clickEvents = e.clickEvents;
Global.btnClickEvent(this.node, function(e) {
e.interactable = !1;
cc.vv.gameData.GetSlotsScript().scheduleOnce(function() {
e.interactable = !0;
}, this.safeTime);
}, this);
}
}
});
cc._RF.pop();
}, {} ],
BigDuel_Cfg: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "b15f4r5/f1IvacNhYDEJ62y", "BigDuel_Cfg");
var a;
function i(e, n, t) {
n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[n] = t;
return e;
}
var o = {
symbol: (a = {}, i(a, 1, {
node: "s1",
win_node: "w1",
win_ani: {
name: "animation1",
zIndex: 300
}
}), i(a, 2, {
node: "s2",
win_node: "w2",
trigger_ani: {
name: "animation2",
zIndex: 300
},
stop_ani: {
name: "animation1",
zIndex: 300
}
}), i(a, 3, {
node: "s3",
win_node: "w3",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 301, {
node: "s301",
win_node: "w301",
win_ani: {
name: "animation",
zIndex: 296
}
}), i(a, 302, {
node: "s302",
win_node: "w302",
win_ani: {
name: "animation",
zIndex: 297
}
}), i(a, 303, {
node: "s303",
win_node: "w303",
win_ani: {
name: "animation",
zIndex: 298
}
}), i(a, 304, {
node: "s304",
win_node: "w304",
win_ani: {
name: "animation",
zIndex: 299
}
}), i(a, 4, {
node: "s4",
win_node: "w4",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 5, {
node: "s5",
win_node: "w5",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 6, {
node: "s6",
win_node: "w6",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 7, {
node: "s7",
win_node: "w7",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 8, {
node: "s8",
win_node: "w8",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 9, {
node: "s9",
win_node: "w9",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 10, {
node: "s10",
win_node: "w10",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 11, {
node: "s11",
win_node: "w11",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 12, {
node: "s12",
win_node: "w12",
win_ani: {
name: "animation",
zIndex: 300
}
}), i(a, 13, {
node: "s13",
win_node: "w13",
win_ani: {
name: "animation4_3",
zIndex: 300
},
trigger_ani: {
name: "animation4_2",
zIndex: 300
}
}), i(a, 14, {
node: "s14",
win_node: "w13",
win_ani: {
name: "animation3_3",
zIndex: 300
},
trigger_ani: {
name: "animation3_2",
zIndex: 300
}
}), i(a, 15, {
node: "s15",
win_node: "w13",
win_ani: {
name: "animation5_3",
zIndex: 300
},
trigger_ani: {
name: "animation5_2",
zIndex: 300
}
}), i(a, 16, {
node: "s16",
win_node: "w13",
win_ani: {
name: "animation2_3",
zIndex: 300
},
trigger_ani: {
name: "animation2_2",
zIndex: 300
}
}), i(a, 17, {
node: "s17",
win_node: "w13",
win_ani: {
name: "animation1_3",
zIndex: 300
},
trigger_ani: {
name: "animation1_2",
zIndex: 300
}
}), i(a, 18, {
node: "s18",
win_node: "w13",
win_ani: {
name: "animation6_3",
zIndex: 300
},
trigger_ani: {
name: "animation6_2",
zIndex: 300
}
}), a),
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "LMSlots_Bottom_Base",
Slots: "BigDuel_Slots",
Reels: "BigDuel_Reel",
Symbols: "BigDuel_symbol"
},
col: 5,
row: 4,
realRow: 4,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
width: 134,
height: 92
},
helpItems: [ "games/BigDuel/prefab/LMSlots_Help_item1", "games/BigDuel/prefab/LMSlots_Help_item2", "games/BigDuel/prefab/LMSlots_Help_item3", "games/BigDuel/prefab/LMSlots_Help_item4", "games/BigDuel/prefab/LMSlots_Help_item5", "games/BigDuel/prefab/LMSlots_Help_item6", "games/BigDuel/prefab/LMSlots_Help_item7" ],
autoModelDelay: 1,
randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
kuang: "kuang",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 1,
bounce: !0,
bounceInfo: {
distance: 20,
time: .1
},
commEffect: {
path: "games/BigDuel/",
win1: [ "win1", "win1end" ],
win2: [ "win2", "win2end" ],
win3: [ "win3", "win3end" ],
win4: [ "win4", "win4end" ]
},
normalBgm: "base_bgm",
AddAntiTime: 2.4,
reelStateInfo: [ {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_anti",
reelStopSound: "reel_stop",
symbolStopSound: "symbol_scatter",
antSound: "anticipation",
antSpeed: 2e3
} ]
};
n.exports = o;
cc._RF.pop();
}, {} ],
BigDuel_GameData: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "e244c174+BIX68Vd0ZJm5SI", "BigDuel_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {
_slotsNode: null,
isBigStoreToFreeGame: !1,
isSmallStoreToFreeGame: !1
},
SetPopNodeScript: function(e) {
this._popupScp = e;
},
GetPopNodeScript: function(e) {
return this._popupScp;
},
SetSlotsNode: function(e) {
this._slotsNode = e;
},
GetSlotsNode: function(e) {
return this._slotsNode;
},
SetWheelScript: function(e) {
this._wheelScp = e;
},
GetWheelScript: function() {
return this._wheelScp;
},
SetStoreScript: function(e) {
this._storeScp = e;
},
GetStoreScript: function() {
return this._storeScp;
},
SetBigStoreToFreeGame: function(e) {
this.isBigStoreToFreeGame = e;
},
GetBigStoreToFreeGame: function() {
return this.isBigStoreToFreeGame;
},
SetSmallStoreToFreeGame: function(e) {
this.isSmallStoreToFreeGame = e;
},
GetSmallStoreToFreeGame: function() {
return this.isSmallStoreToFreeGame;
},
SetJackpotUnlock: function(e) {
this.JackpotUnlock = e;
},
GetJackpotUnlock: function() {
return this.JackpotUnlock;
},
IdxToBet: function(e) {
return this._deskInfo.mults[e];
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
BigDuel_Logic: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "d1d317wI/tLNZlrz8QdPD9/", "BigDuel_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {},
onLoad: function() {
this._super();
var e = cc.find("safe_node", this.node);
cc.vv.gameData.getGameCfg();
cc.vv.gameData.SetSlotsNode(cc.vv.gameData.GetSlotsScript().node);
var n = cc.find("wheel_node", e).getComponent("BigDuel_Wheel");
n.Init();
cc.vv.gameData.SetWheelScript(n);
var t = cc.find("node_pop_ui", e).getComponent("BigDuel_Pop");
t.Init();
cc.vv.gameData.SetPopNodeScript(t);
var a = cc.find("node_store", e).getComponent("BigDuel_Store");
a.Init();
cc.vv.gameData.SetStoreScript(a);
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
BigDuel_Pop: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "b31f9eQ+thBwax0gr2sIthM", "BigDuel_Pop");
function a(e, n, t, a, i, o, r) {
try {
var c = e[o](r), s = c.value;
} catch (e) {
t(e);
return;
}
c.done ? n(s) : Promise.resolve(s).then(a, i);
}
function i(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(i, o) {
var r = e.apply(n, t);
function c(e) {
a(r, i, o, c, s, "next", e);
}
function s(e) {
a(r, i, o, c, s, "throw", e);
}
c(void 0);
});
};
}
var o = e("./BigDuel_Tools");
cc.Class({
extends: cc.Component,
properties: {
_node_free_Game: null,
_node_free_tanchuang: null,
_spine_freeGame: null,
_spine_bonusGame: null,
_spine_storeToFreeGame: null,
_spine_storeToFreeGameEnd: null,
_storeExtenLine: 0,
_hasSendMsg: !1
},
Init: function() {
this._node_free_Game = cc.find("node_free_Game", this.node);
this._node_free_Game.active = !1;
this._node_free_tanchuang = cc.find("node_free_tanchuang", this.node);
this._node_free_tanchuang.active = !1;
this._spine_freeGame = cc.find("spine_qp_jian", this.node.parent);
this._spine_freeGame.active = !1;
this._spine_bonusGame = cc.find("spine_qp_moon", this.node.parent);
this._spine_bonusGame.active = !1;
this._spine_storeToFreeGame = cc.find("spine_storeToFreeGame", this.node.parent);
this._spine_storeToFreeGame.active = !1;
this._spine_storeToFreeGameEnd = cc.find("spine_storeToFreeGameEnd", this.node.parent);
this._spine_storeToFreeGameEnd.active = !1;
this.initFreeGame();
},
onEnable: function() {
this._hasSendMsg = !1;
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
onRcvSubGameAction: function(e) {
var n = this;
if (200 == e.code) {
var t = e.data, a = {
1: 10,
2: 8,
3: 5,
4: 3
}, i = t.choiceId;
cc.vv.gameData.GetSlotsScript().extendLine({
1: 4,
2: 5,
3: 6,
4: 8
}[i], .01);
o.nodeAni(this._node_free_Game, 2);
this.scheduleOnce(function() {
for (var e = 1; e < 6; e++) {
var o = cc.find("choose" + e, n._node_free_Game);
cc.find("black", o).active = !1;
}
cc.find("choose5/wenHao", n._node_free_Game).active = !0;
cc.find("choose5/beishubianhua", n._node_free_Game).active = !1;
n.showFreeGameDialog(1, a[i]);
if (t.freeInfo) {
cc.vv.gameData.SetTotalFree(t.freeInfo.freeCnt);
cc.vv.gameData.SetFreeTime(t.freeInfo.freeCnt);
}
cc.vv.gameData.GetSlotsScript().ShowGameview(!0);
}, .5);
}
},
updateUi: function() {
this._node_free_Game.active = !1;
this._node_free_tanchuang.active = !1;
this._spine_freeGame.active = !1;
this._spine_bonusGame.active = !1;
},
initFreeGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t, a, r, c, s, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
for (t = 1; t < 6; t++) {
(a = e._node_free_Game.getChildByName("choose" + t)).target = t;
Global.btnClickEvent(a, function() {
var e = i(regeneratorRuntime.mark(function e(n) {
var t, a, i, r, c;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
t = n.node.target;
a = {
1: 10,
2: 8,
3: 5,
4: 3
};
if (!this._hasSendMsg) {
e.next = 4;
break;
}
return e.abrupt("return");

case 4:
this._node_free_Game.stopAllActions();
this._hasSendMsg = !0;
i = 1;

case 7:
if (!(i < 6)) {
e.next = 17;
break;
}
if (i !== t) {
e.next = 10;
break;
}
return e.abrupt("continue", 14);

case 10:
(r = cc.find("choose" + i, this._node_free_Game)).stopAllActions();
r.getChildByName("biankuangliuguang").active = !1;
cc.find("black", r).active = !0;

case 14:
i++;
e.next = 7;
break;

case 17:
Global.SlotsSoundMgr.playEffect("choose");
o.playSpineAni(n.node.getChildByName("xuanzhong"), "animation1", !0);
if (5 !== t) {
e.next = 30;
break;
}
t = Math.round(3 * Math.random() + 1);
n.node.getChildByName("wenHao").active = !1;
n.node.getChildByName("beishubianhua").active = !0;
n.node.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + a[t], !1);
e.next = 26;
return this.awaitTime(1);

case 26:
n.node.getChildByName("xuanzhong").active = !1;
e.next = 29;
return this.awaitTime(3);

case 29:
n.node.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + a[t] + "_1", !1);

case 30:
e.next = 32;
return this.awaitTime(2);

case 32:
n.node.getChildByName("xuanzhong").active = !1;
(c = {
c: MsgId.SLOT_SUBGAME_DATA
}).gameid = cc.vv.gameData.getGameId();
c.data = {};
c.data.rtype = 1;
c.data.choiceId = t || 1;
cc.vv.NetManager.send(c, !0);

case 39:
case "end":
return e.stop();
}
}, e, this);
}));
return function(n) {
return e.apply(this, arguments);
};
}(), e);
}
r = cc.find("sureBtn", e._node_free_tanchuang);
Global.btnClickEvent(r, function() {
r.stopAllActions();
this._node_free_tanchuang.active = !1;
this.node.active = !1;
this.scheduleOnce(function() {
cc.vv.gameData.GetBottomScript().SendSpinReq();
var e = cc.vv.gameData.GetTotalFree();
cc.vv.gameData.SetFreeTime(e - 1);
cc.vv.gameData.GetSlotsScript().ShowGameview(!0);
}, 1.5);
}, e);
c = cc.find("collectBtn", e._node_free_tanchuang);
Global.btnClickEvent(c, function() {
var e = this;
c.stopAllActions();
Global.SlotsSoundMgr.playEffect("btn_click");
o.nodeAni(this._node_free_tanchuang, 3);
this.scheduleOnce(function() {
e.exitFreeGame();
}, .5);
}, e);
s = cc.find("startBtn", e._spine_storeToFreeGame);
Global.btnClickEvent(s, i(regeneratorRuntime.mark(function e() {
var n, t, a;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("transitionz");
n = cc.vv.gameData.GetSlotsScript();
this._spine_freeGame.active = !0;
this._spine_storeToFreeGame.active = !1;
o.playSpineAni(this._spine_freeGame, "animation", !1);
n._bottomScript.ShowBtnsByState("moveing_1");
n.ShowGameview(!0);
e.next = 9;
return this.awaitTime(3);

case 9:
this._spine_freeGame.active = !1;
n.extendLine(this._storeExtenLine, .01);
t = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
cc.find("rose", t).active = !1;
cc.find("freeGameAllWins", t).active = !0;
e.next = 16;
return this.awaitTime(1);

case 16:
cc.vv.gameData.GetBottomScript().SendSpinReq();
a = cc.vv.gameData.GetTotalFree();
cc.vv.gameData.SetFreeTime(a - 1);
n.ShowGameview(!0);

case 20:
case "end":
return e.stop();
}
}, e, this);
})), e);
l = cc.find("startBtn", e._spine_storeToFreeGameEnd);
Global.btnClickEvent(l, i(regeneratorRuntime.mark(function e() {
var n, t;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("btn_click");
n = cc.vv.gameData;
o.nodeAni(this._spine_storeToFreeGameEnd, 2);
e.next = 5;
return this.awaitTime(.5);

case 5:
e.next = 7;
return this.exitFreeGame();

case 7:
Global.SlotsSoundMgr.playEffect("dialog_store_show");
n.GetBottomScript().ShowBtnsByState("moveing_1");
n.GetStoreScript().showRoseStore();
e.next = 12;
return this.awaitTime(1);

case 12:
this._spine_storeToFreeGameEnd.active = !0;
cc.find("winCoinNode", this._spine_storeToFreeGameEnd).active = !1;
cc.find("startBtn", this._spine_storeToFreeGameEnd).active = !1;
cc.find("pageNumNode", this._spine_storeToFreeGameEnd).active = !0;
t = n.GetStoreScript()._roseStore.unlockPage;
cc.find("pageNumNode/2", this._spine_storeToFreeGameEnd).active = !1;
cc.find("pageNumNode/3", this._spine_storeToFreeGameEnd).active = !1;
cc.find("pageNumNode/4", this._spine_storeToFreeGameEnd).active = !1;
cc.find("pageNumNode/5", this._spine_storeToFreeGameEnd).active = !1;
1 == t ? cc.find("pageNumNode/5", this._spine_storeToFreeGameEnd).active = !0 : cc.find("pageNumNode/" + t, this._spine_storeToFreeGameEnd).active = !0;
Global.SlotsSoundMgr.playEffect("dialog_store_unlock");
o.playSpineAni(this._spine_storeToFreeGameEnd, "animation1", !1);
e.next = 26;
return this.awaitTime(1);

case 26:
o.playSpineAni(this._spine_storeToFreeGameEnd, "animation1_1", !1);
e.next = 29;
return this.awaitTime(1);

case 29:
o.nodeAni(this._spine_storeToFreeGameEnd, 2);
e.next = 32;
return this.awaitTime(.5);

case 32:
n.GetStoreScript().movePage(2);

case 33:
case "end":
return e.stop();
}
}, e, this);
})), e);

case 9:
case "end":
return n.stop();
}
}, n);
}))();
},
showFreeGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t, a, r;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e;
e.node.active = !0;
e.updateUi();
Global.SlotsSoundMgr.playEffect("transitionz");
e._spine_freeGame.active = !0;
o.playSpineAni(e._spine_freeGame, "animation", !1);
n.next = 8;
return e.awaitTime(2.5);

case 8:
e._spine_freeGame.active = !1;
e._node_free_Game.active = !0;
(t = cc.find("title", e._node_free_Game)).stopAllActions();
t.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.delayTime(2))));
a = function(n) {
var t = e._node_free_Game.getChildByName("choose" + n);
cc.tween(t).delay(2 * n).call(function() {
t.getChildByName("biankuangliuguang").active = !0;
t.getChildByName("biankuangliuguang").getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
}).start();
};
for (r = 1; r < 6; r++) a(r);
if (cc.vv.gameData.isNeedAutoPlay()) {
e._node_free_Game.getChildByName("choose5");
cc.tween(e._node_free_Game).delay(cc.vv.gameData.getManualAutoPlayTime()).call(i(regeneratorRuntime.mark(function n() {
var t, a, i, r, c, s;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = 5;
a = {
1: 10,
2: 8,
3: 5,
4: 3
};
if (!e._hasSendMsg) {
n.next = 4;
break;
}
return n.abrupt("return");

case 4:
e._hasSendMsg = !0;
i = cc.find("choose5", e._node_free_Game);
r = 1;

case 7:
if (!(r < 6)) {
n.next = 17;
break;
}
if (r !== t) {
n.next = 10;
break;
}
return n.abrupt("continue", 14);

case 10:
(c = cc.find("choose" + r, e._node_free_Game)).stopAllActions();
c.getChildByName("biankuangliuguang").active = !1;
cc.find("black", c).active = !0;

case 14:
r++;
n.next = 7;
break;

case 17:
Global.SlotsSoundMgr.playEffect("choose");
o.playSpineAni(i.getChildByName("xuanzhong"), "animation1", !0);
if (5 !== t) {
n.next = 30;
break;
}
t = Math.round(3 * Math.random() + 1);
i.getChildByName("wenHao").active = !1;
i.getChildByName("beishubianhua").active = !0;
i.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + a[t], !1);
n.next = 26;
return e.awaitTime(1);

case 26:
i.getChildByName("xuanzhong").active = !1;
n.next = 29;
return e.awaitTime(3);

case 29:
i.getChildByName("beishubianhua").getComponent(sp.Skeleton).setAnimation(0, "animation" + a[t] + "_1", !1);

case 30:
n.next = 32;
return e.awaitTime(2);

case 32:
i.getChildByName("xuanzhong").active = !1;
(s = {
c: MsgId.SLOT_SUBGAME_DATA
}).gameid = cc.vv.gameData.getGameId();
s.data = {};
s.data.rtype = 1;
s.data.choiceId = t || 1;
cc.vv.NetManager.send(s, !0);

case 39:
case "end":
return n.stop();
}
}, n);
}))).start();
}

case 16:
case "end":
return n.stop();
}
}, n);
}))();
},
roseStoreToFreeGame: function(e, n) {
var t = this;
Global.SlotsSoundMgr.playEffect("dialog_sfg_start");
var a = cc.vv.gameData, i = n.row, r = n.freeCnt, c = n.mult;
this._spine_storeToFreeGame.active = !0;
a.SetTotalFree(r);
a.SetFreeTime(r);
this._storeExtenLine = i;
o.changeNodeLab(cc.find("numBg/lab", this._spine_storeToFreeGame), r);
var s = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
cc.find("freeGameAllWins/3", s).active = !1;
cc.find("freeGameAllWins/4", s).active = !1;
cc.find("freeGameAllWins/5", s).active = !1;
cc.find("freeGameAllWins/8", s).active = !1;
cc.find("freeGameAllWins/" + c, s).active = !0;
var l = "animation" + (e + 3), m = "animation" + (e + 3) + "_1", u = cc.find("numBg", this._spine_storeToFreeGame);
u.active = !1;
var d = cc.find("startBtn", this._spine_storeToFreeGame);
d.active = !1;
o.playSpineAni(this._spine_storeToFreeGame.getChildByName("spine"), l, !1);
cc.tween(a.GetSlotsNode()).delay(.5).call(function() {
d.active = !0;
u.active = !0;
o.playSpineAni(t._spine_storeToFreeGame.getChildByName("spine"), m, !0);
}).start();
},
exitStoreFreeGame: function(e) {
var n = this;
Global.SlotsSoundMgr.playEffect("dialog_sfg_collect");
var t = cc.vv.gameData;
t.GetBottomScript().ShowBtnsByState("moveing_1");
this.node.active = !0;
this._spine_storeToFreeGameEnd.active = !0;
var a = cc.find("winCoinNode", this._spine_storeToFreeGameEnd), i = cc.find("startBtn", this._spine_storeToFreeGameEnd);
a.active = !1;
i.active = !1;
cc.find("pageNumNode", this._spine_storeToFreeGameEnd).active = !1;
cc.tween(t.GetSlotsNode()).call(function() {
o.playSpineAni(n._spine_storeToFreeGameEnd, "animation2", !1);
}).delay(.5).call(function() {
o.playSpineAni(cc.find("winCoinNode/shuzikuang", n._spine_storeToFreeGameEnd));
o.playSpineAni(cc.find("startBtn/anniu", n._spine_storeToFreeGameEnd));
o.nodeAni(a, 1);
o.nodeAni(i, 1);
}).delay(.3).call(function() {
o.playSpineAni(n._spine_storeToFreeGameEnd, "animation2_1", !0);
var t = cc.find("winCoinNode/numBg/num", n._spine_storeToFreeGameEnd);
Global.doRoallNumEff(t, 0, e, 2, null, null, 0, !0);
cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose").active = !0;
}).start();
},
exitFreeGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t, a, i, r;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = cc.vv.gameData;
a = t.GetSlotsScript();
Global.SlotsSoundMgr.playEffect("transitionz");
t.SetBigStoreToFreeGame(!1);
e.updateUi();
e._spine_freeGame.active = !0;
o.playSpineAni(e._spine_freeGame, "animation", !1);
n.next = 9;
return e.awaitTime(1.8);

case 9:
a.recoverLine();
a._row = a._cfg.row;
a.ShowGameview(!1);
n.next = 14;
return e.awaitTime(1);

case 14:
a.Resume();
e.node.active = !1;
i = cc.find("Canvas/safe_node/slots/reels_frame/frameUp");
cc.find("freeGameAllWins", i).active = !1;
n.next = 20;
return e.awaitTime(1.5);

case 20:
e._spine_freeGame.active = !1;
r = t.GetGameTotalFreeWin();
n.next = 24;
return t.GetSlotsScript().ShowBottomWin(r, r, !0, null, 1);

case 24:
if (t.GetSmallStoreToFreeGame()) {
t.GetStoreScript().showRoseStore();
t.SetSmallStoreToFreeGame(!1);
} else t.GetSlotsScript().CanDoNextRound();

case 25:
case "end":
return n.stop();
}
}, n);
}))();
},
showFreeGameDialog: function(e, n) {
var t = this;
return i(regeneratorRuntime.mark(function a() {
var i, r, c, s, l, m;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
t.node.active = !0;
t._node_free_tanchuang.active = !0;
(i = cc.find("sureBtn", t._node_free_tanchuang)).active = !1;
(r = cc.find("collectBtn", t._node_free_tanchuang)).active = !1;
(c = cc.find("freeGameNode", t._node_free_tanchuang)).active = !1;
(s = cc.find("moreFreeNode", t._node_free_tanchuang)).active = !1;
(l = cc.find("winCoinNode", t._node_free_tanchuang)).active = !1;
(m = cc.find("spine_freetanchuang", t._node_free_tanchuang)).active = !1;
if (1 != e) {
a.next = 28;
break;
}
Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
m.active = !0;
o.playSpineAni(m, "animation1", !1);
o.playSpineAni(cc.find("anniu", i), "animation", !0);
o.changeNodeLab(cc.find("num", c), n);
c.active = !0;
a.next = 23;
return t.awaitTime(.5);

case 23:
i.active = !0;
o.playSpineAni(m, "animation1_1", !0);
cc.vv.gameData.checkAutoPlay(i, function() {
t._node_free_tanchuang.active = !1;
t.node.active = !1;
t.scheduleOnce(function() {
cc.vv.gameData.GetBottomScript().SendSpinReq();
var e = cc.vv.gameData.GetTotalFree();
cc.vv.gameData.SetFreeTime(e - 1);
cc.vv.gameData.GetSlotsScript().ShowGameview(!0);
}, 1.5);
});
a.next = 58;
break;

case 28:
if (2 != e) {
a.next = 43;
break;
}
Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
m.active = !0;
o.playSpineAni(m, "animation2", !1);
o.changeNodeLab(cc.find("num", s), n);
s.active = !0;
a.next = 36;
return t.awaitTime(1);

case 36:
o.playSpineAni(m, "animation2_1", !0);
a.next = 39;
return t.awaitTime(1);

case 39:
t.updateUi();
t.node.active = !1;
a.next = 58;
break;

case 43:
if (3 != e) {
a.next = 58;
break;
}
cc.vv.gameData.GetSlotsScript().stopAllSymbolAni();
Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
t.updateUi();
t._node_free_tanchuang.active = !0;
m.active = !0;
o.playSpineAni(m, "animation3", !1);
o.playSpineAni(cc.find("anniu", r), "animation", !0);
Global.doRoallNumEff(cc.find("numBg/num", l), 0, n, 2, null, null, 0, !0);
l.active = !0;
o.playSpineAni(cc.find("shuzikuang", l));
cc.tween(t.node).delay(1).call(function() {
r.active = !0;
o.playSpineAni(m, "animation3_1", !0);
}).start();
a.next = 57;
return cc.vv.gameData.awaitTime(1);

case 57:
cc.vv.gameData.checkAutoPlay(r, function() {
Global.SlotsSoundMgr.playEffect("btn_click");
o.nodeAni(t._node_free_tanchuang, 3);
t.scheduleOnce(function() {
t.exitFreeGame();
}, .5);
});

case 58:
case "end":
return a.stop();
}
}, a);
}))();
},
showWheelGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e.updateUi();
e.node.active = !0;
e._spine_bonusGame.active = !0;
o.playSpineAni(e._spine_bonusGame, "animation", !1);
n.next = 6;
return e.awaitTime(2);

case 6:
e._spine_bonusGame.active = !1;
e.node.active = !1;
cc.vv.gameData.GetWheelScript().enterWheelGame();

case 9:
case "end":
return n.stop();
}
}, n);
}))();
},
awaitTime: function(e) {
var n = this;
return new Promise(function(t, a) {
n.scheduleOnce(function() {
t();
}, e);
});
}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools"
} ],
BigDuel_PrizePool: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "e3ae79vRq5Ctr0TN5n3K5iz", "BigDuel_PrizePool");
e("./BigDuel_Tools");
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {},
ShowNodeLockByNode: function(e, n, t, a, i) {}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools",
LMSlots_PrizePool_Base: void 0
} ],
BigDuel_Reel: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "4e5d2kfVyVAcK/qy2+PpgSd", "BigDuel_Reel");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
var n = 0, t = function() {};
return {
s: t,
n: function() {
return n >= e.length ? {
done: !0
} : {
done: !1,
value: e[n++]
};
},
e: function(e) {
throw e;
},
f: t
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var a, o, r = !0, c = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
o = e;
},
f: function() {
try {
r || null == a.return || a.return();
} finally {
if (c) throw o;
}
}
};
}
function i(e, n) {
if (e) {
if ("string" == typeof e) return o(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, n) : void 0;
}
}
function o(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
playReelStop: function() {
this._super();
},
OnReelHeigtChange: function(e) {
this._super(e);
if (1 == this._reelIdx) {
var n = cc.find("Canvas/safe_node/slots/reels_frame"), t = cc.find("frameUp", n), a = cc.find("frameLeft", n), i = cc.find("frameRight", n), o = cc.find("rose", t), r = cc.find("bigRose", t);
a.height += e;
i.height += e;
cc.find("xianShu", a).active = e < 0;
cc.find("xianShu", i).active = e < 0;
for (var c = 1; c < 5; c++) cc.find("Canvas/safe_node/slots/reels_bg/role_line" + c).height += e;
t.y += e;
if (e >= 360) {
cc.vv.gameData.GetBigStoreToFreeGame() || (r.active = !0);
o.active = !1;
o.x = 0;
var s = cc.vv.gameData.GetSlotsScript()._roseNum;
cc.find("numBg/num", r).getComponent(cc.Label).string = Global.FormatNumToComma(s);
} else {
cc.vv.gameData.GetBigStoreToFreeGame() || (o.active = !0);
r.active = !1;
o.x = -280;
}
}
},
StartRecycleSymbol: function(e) {
var n = cc.vv.gameData.getGameCfg(), t = n.row + 1;
if (this._symbols.length > t) {
var a = -(this._symbols.length - (n.row + 1));
this.AddCount(a, e);
}
},
ShowAntiEffect: function(e, n) {
if (0 == e) {
if (this._cfg.reelStateInfo) {
var t, i = a(this._cfg.reelStateInfo);
try {
for (i.s(); !(t = i.n()).done; ) {
var o = t.value, r = cc.find("mask/" + o.antiNode, this.node);
if (r && r.active) {
r.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(o.antSound);
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
}
} else {
var c = cc.find("mask/" + n, this.node), s = cc.vv.gameData.getGameCfg(), l = "lzjl_" + {
4: "1",
5: "2",
6: "3",
8: "4"
}[s.row];
if (c) {
c.getComponent(sp.Skeleton).setAnimation(0, l, !0);
c.active = e;
c.y = {
4: 185,
5: 233,
6: 274,
8: 370
}[s.row];
} else cc.log("未找到加速节点：mask/node_anti");
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
BigDuel_Slots: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "9ba157aXXZH4aOTupNlv3XX", "BigDuel_Slots");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
var n = 0, t = function() {};
return {
s: t,
n: function() {
return n >= e.length ? {
done: !0
} : {
done: !1,
value: e[n++]
};
},
e: function(e) {
throw e;
},
f: t
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var a, o, r = !0, c = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
o = e;
},
f: function() {
try {
r || null == a.return || a.return();
} finally {
if (c) throw o;
}
}
};
}
function i(e, n) {
if (e) {
if ("string" == typeof e) return o(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, n) : void 0;
}
}
function o(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
function r(e, n, t, a, i, o, r) {
try {
var c = e[o](r), s = c.value;
} catch (e) {
t(e);
return;
}
c.done ? n(s) : Promise.resolve(s).then(a, i);
}
function c(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(a, i) {
var o = e.apply(n, t);
function c(e) {
r(o, a, i, c, s, "next", e);
}
function s(e) {
r(o, a, i, c, s, "throw", e);
}
c(void 0);
});
};
}
var s = e("./BigDuel_Tools");
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_entranceBtn: cc.node,
_roseBtn: cc.node,
_roseNum: 0
},
onLoad: function() {
this._super();
this._entranceBtn = cc.find("reels_frame/frameUp/rose/entrance", this.node);
Global.btnClickEvent(this._entranceBtn, function() {
Global.SlotsSoundMgr.playEffect("dialog_store_show");
this._bottomScript.ShowBtnsByState("moveing_1");
cc.vv.gameData.GetStoreScript().showRoseStore();
}, this);
this._roseBtn = cc.find("reels_frame/frameUp/rose/roseBtn", this.node);
Global.btnClickEvent(this._roseBtn, function() {
Global.SlotsSoundMgr.playEffect("dialog_store_show");
this._bottomScript.ShowBtnsByState("moveing_1");
cc.vv.gameData.GetStoreScript().showRoseStore();
}, this);
this.playZuoluoAni();
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
},
StartMove: function() {
this._super();
Global.SlotsSoundMgr.playNormalBgm();
this._entranceBtn.getComponent(cc.Button).interactable = !1;
this._roseBtn.getComponent(cc.Button).interactable = !1;
},
onMsgSpine: function(e) {
this._gameInfo = e;
var n = e.resultCards;
this.SetSlotsResult(n);
this.SetReelStateInfo(n);
cc.vv.gameData.GetStoreScript().updateData(e.roseStore);
},
OnSpinEnd: function() {
this.onSpinEndAction();
},
onSpinEndAction: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
var t, a, i, o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e.ShowWinTrace();
e.collectRose();
t = cc.vv.gameData.GetGameWin();
e._gameInfo.bonusGame && e._gameInfo.bonusGame.winCoin && (t -= e._gameInfo.bonusGame.winCoin);
a = t;
cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (a = cc.vv.gameData.GetGameTotalFreeWin());
n.next = 8;
return new Promise(function(n, i) {
var o = !0;
e._gameInfo.bonusGame && (o = !1);
e.ShowBottomWin(t, a, o, function() {
n();
});
});

case 8:
if (!e._gameInfo.freeResult.freeInfo.freeCnt) {
n.next = 13;
break;
}
n.next = 11;
return e.enterDoubleFreeGame();

case 11:
n.next = 29;
break;

case 13:
if (!e._gameInfo.bonusGame) {
n.next = 18;
break;
}
n.next = 16;
return e.CheckTriggerSubGame();

case 16:
n.next = 29;
break;

case 18:
if (!(e._gameInfo.allFreeCnt > 0 && 0 == e._gameInfo.freeCnt)) {
n.next = 23;
break;
}
n.next = 21;
return e.CheckExitFreeGame();

case 21:
n.next = 29;
break;

case 23:
if (!e._gameInfo.freeGameOptions) {
n.next = 28;
break;
}
n.next = 26;
return e.CheckEnterFreeGame(1);

case 26:
n.next = 29;
break;

case 28:
e.CanDoNextRound();

case 29:
i = cc.vv.gameData.GetFreeTime();
o = cc.vv.gameData.GetAutoModelTime();
if (0 == i && o <= 0) {
e._entranceBtn.getComponent(cc.Button).interactable = !0;
e._roseBtn.getComponent(cc.Button).interactable = !0;
}

case 32:
case "end":
return n.stop();
}
}, n);
}))();
},
CheckTriggerSubGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
var t, i, o, r, c, s, l, m, u, d, f, p;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e.stopAllSymbolAni();
t = a(e._gameInfo.bonusGame.idxs);
try {
for (t.s(); !(i = t.n()).done; ) {
o = i.value;
(r = e.GetSymbolByIdx(o)) && r.playTriggerAnimation(!0);
}
} catch (e) {
t.e(e);
} finally {
t.f();
}
Global.SlotsSoundMgr.playEffect("symbol_bonus");
n.next = 6;
return e.awaitTime(1);

case 6:
Global.SlotsSoundMgr.playEffect("trigger");
n.next = 9;
return e.awaitTime(1.5);

case 9:
c = a(e._gameInfo.bonusGame.idxs);
try {
for (c.s(); !(s = c.n()).done; ) {
l = s.value;
(m = e.GetSymbolByIdx(l)) && m.playTriggerAnimation(!1);
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
Global.SlotsSoundMgr.playEffect("transitionmoon");
n.next = 14;
return e.playZuoluoAni(!0);

case 14:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("bonus_bgm");
u = cc.find("reels_bg", e.node);
d = cc.find("reels", e.node);
f = cc.find("reels_frame", e.node);
p = cc.find("top_ani", e.node);
u.runAction(cc.moveTo(.8, cc.v2(0, -800)));
d.runAction(cc.moveTo(.8, cc.v2(0, -800)));
f.runAction(cc.moveTo(.8, cc.v2(0, -800)));
p.runAction(cc.moveTo(.8, cc.v2(0, -960)));
cc.vv.gameData.GetPopNodeScript().showWheelGame();

case 25:
case "end":
return n.stop();
}
}, n);
}))();
},
ExitBonusGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
var t, i, o, r, c, s, l, m;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = cc.find("reels_bg", e.node);
i = cc.find("reels", e.node);
o = cc.find("reels_frame", e.node);
r = cc.find("top_ani", e.node);
t.runAction(cc.moveTo(.8, cc.v2(0, 0)));
i.runAction(cc.moveTo(.8, cc.v2(0, 0)));
o.runAction(cc.moveTo(.8, cc.v2(0, 0)));
r.runAction(cc.moveTo(.8, cc.v2(0, -180)));
c = a(e._gameInfo.bonusGame.idxs);
try {
for (c.s(); !(s = c.n()).done; ) {
l = s.value;
(m = e.GetSymbolByIdx(l)) && m.playTriggerAnimation(!0);
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
n.next = 12;
return e.awaitTime(2);

case 12:
Global.SlotsSoundMgr.playNormalBgm();
e.CanDoNextRound();

case 14:
case "end":
return n.stop();
}
}, n);
}))();
},
CheckEnterFreeGame: function(e) {
var n = this;
return c(regeneratorRuntime.mark(function t() {
var i, o, r, c, s, l, m, u, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
i = cc.vv.gameData.GetPopNodeScript();
if (1 != e) {
t.next = 13;
break;
}
o = a(n._gameInfo.freeGameOptions.scatterIdx);
try {
for (o.s(); !(r = o.n()).done; ) {
c = r.value;
(s = n.GetSymbolByIdx(c)) && s.playTriggerAnimation(!0);
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
Global.SlotsSoundMgr.playEffect("bell");
n.Backup();
t.next = 9;
return n.awaitTime(4);

case 9:
l = a(n._gameInfo.freeGameOptions.scatterIdx);
try {
for (l.s(); !(m = l.n()).done; ) {
u = m.value;
(d = n.GetSymbolByIdx(u)) && d.playTriggerAnimation(!1);
}
} catch (e) {
l.e(e);
} finally {
l.f();
}
t.next = 14;
break;

case 13:
n.Backup();

case 14:
Global.SlotsSoundMgr.playEffect("dialog_sfg_start");
i.showFreeGame();

case 16:
case "end":
return t.stop();
}
}, t);
}))();
},
enterDoubleFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
var t, i, o, r, c, s, l, m;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect("transitionz");
t = a(e._gameInfo.freeResult.freeInfo.scatterIdx);
try {
for (t.s(); !(i = t.n()).done; ) {
o = i.value;
(r = e.GetSymbolByIdx(o)) && r.playTriggerAnimation(!0);
}
} catch (e) {
t.e(e);
} finally {
t.f();
}
n.next = 5;
return e.awaitTime(1.5);

case 5:
n.next = 7;
return cc.vv.gameData.GetPopNodeScript().showFreeGameDialog(2, e._gameInfo.freeResult.freeInfo.freeCnt);

case 7:
c = a(e._gameInfo.freeResult.freeInfo.scatterIdx);
try {
for (c.s(); !(s = c.n()).done; ) {
l = s.value;
(m = e.GetSymbolByIdx(l)) && m.playTriggerAnimation(!1);
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
e.CanDoNextRound();

case 10:
case "end":
return n.stop();
}
}, n);
}))();
},
ReconnectShow: function() {
var e = cc.vv.gameData, n = e._deskInfo;
if (n.freeGameOptions) {
this._bottomScript.ShowBtnsByState("moveing_1");
e.GetPopNodeScript().showFreeGame();
} else {
var t = e.GetTotalFree(), a = e.GetFreeTime();
if (a > 0) {
Global.SlotsSoundMgr.playBgm("free_bgm");
this._bottomScript.ShowFreeModel(!0, t - a, t);
var i = e.GetTotalFreeWin();
this._bottomScript.SetWin(i);
this.extendLine(n.freeGameInfo.row, .01);
this.CanDoNextRound();
this.ShowGameview(!0);
}
}
e.GetStoreScript().updateData(n.roseStore);
this._roseNum = n.roseStore.roseCnt;
e.SetJackpotUnlock(n.JackpotUnlock);
this.onEventTotalbetUpdated();
var o = cc.find("reels_frame/frameUp/rose/numBg/num", this.node);
s.changeNodeLab(o, Global.FormatNumToComma(Math.floor(n.roseStore.roseCnt)));
},
CheckExitFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect("dialog_sfg_collect");
if (!cc.vv.gameData.GetBigStoreToFreeGame()) {
n.next = 6;
break;
}
cc.vv.gameData.GetPopNodeScript().exitStoreFreeGame(e._gameInfo.freeWinCoin);
n.next = 8;
break;

case 6:
n.next = 8;
return cc.vv.gameData.GetPopNodeScript().showFreeGameDialog(3, e._gameInfo.freeWinCoin);

case 8:
case "end":
return n.stop();
}
}, n);
}))();
},
collectRose: function() {
var e = this;
return c(regeneratorRuntime.mark(function n() {
var t, a, i, o, r, c;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if ((t = e._gameInfo.roseInfo) && 0 !== t.totalCnt) {
n.next = 3;
break;
}
return n.abrupt("return");

case 3:
Global.SlotsSoundMgr.playEffect("collect_rose");
for (a = 0; a < t.idxs.length; a++) (i = e.GetSymbolByIdx(t.idxs[a])) && i.getComponent("BigDuel_symbol").SetRoseText(t.cnts[a]);
n.next = 7;
return e.awaitTime(.7);

case 7:
o = cc.find("reels_frame/frameUp/rose", e.node);
r = cc.find("reels_frame/frameUp/bigRose", e.node);
c = cc.find("numBg/num", o);
o.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
if (r.active) {
s.changeNodeLab(cc.find("numBg/num", o), Global.FormatNumToComma(Math.floor(e._roseNum + t.totalCnt)));
c = cc.find("numBg/num", r);
}
Global.doRoallNumEff(c, e._roseNum, e._roseNum + t.totalCnt, .5, null, null, 0, !0);
e._roseNum += t.totalCnt;
n.next = 16;
return e.awaitTime(.5);

case 16:
o.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);

case 17:
case "end":
return n.stop();
}
}, n);
}))();
},
extendLine: function(e) {
var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01, t = cc.vv.gameData.getGameCfg(), a = e - t.row;
t.row = e;
cc.find("Canvas/safe_node/slots/top_ani").height = e * t.symbolSize.height;
if (a > 0) for (var i = 0; i < 5; i++) this._reels[i].AddCount(a, n);
this._row = this._cfg.row;
},
recoverLine: function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .01, n = cc.vv.gameData.getGameCfg().row, t = cc.vv.gameData.getGameCfg().realRow, a = t - n;
cc.find("Canvas/safe_node/slots/top_ani").height = 93 * t;
if (0 != a) for (var i = 0; i < 5; i++) this._reels[i].AddCount(a, e);
for (var o = 0; o < this._reels.length; o++) {
var r = this._reels[o]._symbols[4];
r.setAnimationToTop(!1);
r.ShowKuang(!1);
}
cc.vv.gameData.getGameCfg().row = cc.vv.gameData.getGameCfg().realRow;
},
ShowGameview: function(e) {
var n = this;
return c(regeneratorRuntime.mark(function t() {
var a, i, o, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (e) {
Global.SlotsSoundMgr.playBgm("free_bgm");
a = cc.vv.gameData.GetTotalFree();
i = cc.vv.gameData.GetFreeTime();
n._bottomScript.ShowFreeModel(!0, a - i, a);
o = cc.vv.gameData.GetTotalFreeWin();
n._bottomScript.SetWin(o);
cc.find("reels_frame/frameUp/rose", n.node).y = 110;
cc.find("reels_frame/frameUp/unLockNode", n.node).active = !1;
n._entranceBtn.getComponent(cc.Button).interactable = !1;
n._roseBtn.getComponent(cc.Button).interactable = !1;
} else {
n._bottomScript.ShowFreeModel(!1);
cc.find("reels_frame/frameUp/rose", n.node).y = 160;
cc.find("reels_frame/frameUp/unLockNode", n.node).active = !0;
n._entranceBtn.getComponent(cc.Button).interactable = !0;
n._roseBtn.getComponent(cc.Button).interactable = !0;
}
r = cc.find("Canvas/safe_node/spr_bg_normal");
c = cc.find("Canvas/safe_node/spr_bg_free");
r && (r.active = !e);
c && (c.active = e);

case 5:
case "end":
return t.stop();
}
}, t);
}))();
},
playZuoluoAni: function(e) {
var n = this;
return c(regeneratorRuntime.mark(function t() {
var a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = cc.find("new_role", n.node);
if (!e) {
t.next = 6;
break;
}
a.stopAllActions();
a.getComponent(sp.Skeleton).setAnimation(0, "skill", !1);
t.next = 6;
return n.awaitTime(2);

case 6:
a.getComponent(sp.Skeleton).setAnimation(0, "idle", !0);

case 7:
case "end":
return t.stop();
}
}, t);
}))();
},
onEventTotalbetUpdated: function(e, n) {
var t = cc.vv.gameData;
e && e.detail;
for (var a = cc.find("reels_frame/frameUp/unLockNode", this.node), i = t.GetBetMults(), o = t.GetJackpotUnlock(), r = cc.vv.gameData.GetBetIdx(), c = [ cc.find("Mini", a), cc.find("Minor", a), cc.find("Maxi", a), cc.find("Major", a), cc.find("Grand", a) ], s = 0; s < 5; s++) {
var l = !1, m = 0;
r >= o[s] && (l = !0);
m = i[o[s] - 1] ? i[o[s] - 1] : i[i.length - 1] * (s + 2);
this.changLockBonusItem(c[s], l, m);
}
},
changLockBonusItem: function(e, n, t) {
var a = cc.find("spine", e);
a.getChildByName("num").getComponent(cc.Label).string = Global.formatNumShort(t, 0);
if (n) {
if (!0 === e.isUnLock) return;
e.isUnLock = !0;
e.stopAllActions();
cc.tween(e).call(function() {
a.getChildByName("num").active = !1;
s.playSpineAni(a, "animation", !1);
}).delay(1).call(function() {
a.active = !1;
}).start();
} else {
if (!1 === e.isUnLock) return;
e.isUnLock = !1;
e.stopAllActions();
cc.tween(e).call(function() {
a.active = !0;
s.playSpineAni(a, "animation3", !1);
}).delay(1).call(function() {
a.getChildByName("num").active = !0;
s.playSpineAni(a, "animation2", !1);
}).start();
}
},
stopAllSymbolAni: function() {
for (var e = 0; e < this._reels.length; e++) for (var n = this._reels[e], t = 0; t < n._symbols.length; t++) {
var a = n._symbols[t];
a.ShowNormal();
a.ShowKuang(!1);
}
},
delayFunc: function(e, n) {
this.scheduleOnce(function() {
e();
}, n);
},
awaitTime: function(e) {
var n = this;
return new Promise(function(t, a) {
n.scheduleOnce(function() {
t();
}, e);
});
}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools",
LMSlots_Slots_Base: void 0
} ],
BigDuel_Store: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "9bf50231lNGPoe8ajnbXlbc", "BigDuel_Store");
function a(e, n, t, a, i, o, r) {
try {
var c = e[o](r), s = c.value;
} catch (e) {
t(e);
return;
}
c.done ? n(s) : Promise.resolve(s).then(a, i);
}
function i(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(i, o) {
var r = e.apply(n, t);
function c(e) {
a(r, i, o, c, s, "next", e);
}
function s(e) {
a(r, i, o, c, s, "throw", e);
}
c(void 0);
});
};
}
var o = e("./BigDuel_Tools");
cc.Class({
extends: cc.Component,
properties: {
chooseSpf1: cc.SpriteFrame,
chooseSpf2: cc.SpriteFrame,
itemOpenSpf: cc.SpriteFrame,
itemCloseSpf: cc.SpriteFrame,
itemGraySpf: cc.SpriteFrame,
_beginFlyItem: cc.node,
_flyLizi: cc.node,
_cannotOpenTip: cc.node,
_upSpine: cc.node,
_roseStore: null,
_page: 1,
_unlockPage: 1,
_repick: !1
},
Init: function() {
this._flyLizi = cc.find("bg/flyLizi", this.node);
this._cannotOpenTip = cc.find("bg/cannotOpenTip", this.node);
this._upSpine = cc.find("bg/shangdiandakai", this.node);
Global.btnClickEvent(cc.find("bg/leftBtn", this.node), function() {
var e = cc.find("bg/leftBtn/jiantou", this.node);
e.active = !0;
o.playSpineAni(e, "animation1", !1);
o.spineEndFunc(e, function() {
e.active = !1;
});
this.movePage(1);
}, this);
Global.btnClickEvent(cc.find("bg/rightBtn", this.node), function() {
var e = cc.find("bg/rightBtn/jiantou", this.node);
e.active = !0;
o.playSpineAni(e, "animation1", !1);
o.spineEndFunc(e, function() {
e.active = !1;
});
this.movePage(2);
}, this);
Global.btnClickEvent(cc.find("bg/btnClose", this.node), function() {
Global.SlotsSoundMgr.playEffect("btn_click");
this.closeRoseStore();
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
}, this);
},
onLoad: function() {
var e = this, n = this;
this.initUi();
this.updateUi();
cc.find("bg/pageView", this.node).getComponent(cc.PageView).node.on("page-turning", function(t) {
Global.SlotsSoundMgr.playEffect("change");
var a = t.getCurrentPageIndex(), i = n._roseStore.unlockPage;
n._page = a + 1;
n.updateUi();
e._page > i ? o.playSpineAni(e._upSpine, "animation" + (e._page + 4), !1) : o.playSpineAni(e._upSpine, "animation" + e._page, !1);
n.scheduleOnce(function() {
Global.SlotsSoundMgr.playEffect("dialog_store_show");
}, .2);
});
},
onEnable: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
updateData: function(e) {
this._roseStore = e;
var n = cc.find("bg/haveRoseBg/num", this.node);
o.changeNodeLab(n, Global.FormatNumToComma(this._roseStore.roseCnt));
1 == this._roseStore.repick && (this._repick = !0);
},
initUi: function() {
var e = this;
this._upSpine.getComponent(sp.Skeleton).setAnimation(0, "animation" + this._page, !1);
var n = this._roseStore.pageDetails, t = cc.find("bg/pageView/view/content/page_1/item", this.node);
t.active = !1;
for (var a = [ cc.v2(-175, 150), cc.v2(0, 150), cc.v2(175, 150), cc.v2(-175, 0), cc.v2(0, 0), cc.v2(175, 0), cc.v2(-175, -150), cc.v2(0, -150), cc.v2(175, -150) ], i = function(i) {
for (var r = cc.find("bg/pageView/view/content/page_" + i, e.node), c = n[i - 1].price, s = function(n) {
var s = cc.instantiate(t);
s.name = "item" + n;
s.active = !0;
s.setPosition(a[n]);
r.addChild(s);
s.getChildByName("coin").active = !1;
s.getChildByName("spine").active = !1;
s.price = c;
if (i < e._roseStore.unlockPage + 1) {
s.getChildByName("lock").active = !1;
o.changeNodeSp(s.getChildByName("itemBg"), e.itemCloseSpf);
} else {
s.getChildByName("lock").active = !0;
o.changeNodeSp(s.getChildByName("itemBg"), e.itemGraySpf);
}
o.changeNodeLab(cc.find("price/lab", s), Global.formatNumShort(c));
Global.btnClickEvent(s, function() {
if (1 != s.hasUnlock && !(this._page > this._roseStore.unlockPage)) if (this._roseStore.roseCnt < s.price && !this._repick) {
var e = cc.instantiate(this._cannotOpenTip);
s.addChild(e);
cc.tween(e).call(function() {
e.active = !0;
e.y = 50;
Global.SlotsSoundMgr.playEffect("tip");
o.nodeAni(e, 1);
}).delay(1).call(function() {
e.removeFromParent();
}).start();
} else {
Global.SlotsSoundMgr.playEffect("buy1");
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.gameid = cc.vv.gameData.getGameId();
t.data = {};
t.data.rtype = 2;
t.data.pageId = i;
t.data.choiceId = n + 1;
cc.vv.NetManager.send(t, !0);
this.repick(!1);
cc.find("bg/zheZhao", this.node).active = !0;
}
}, e);
}, l = 0; l < 9; l++) s(l);
}, r = 1; r < 6; r++) i(r);
for (var c = this._roseStore.unlockItems, s = 1; s < this._roseStore.unlockPage + 1; s++) {
var l = cc.find("bg/pageView/view/content/page_" + s, this.node), m = c[s - 1];
for (var u in m) {
var d = m[u], f = l.getChildByName("item" + (d.idx - 1));
f.getChildByName("lock").active = !1;
f.getChildByName("price").active = !1;
f.getChildByName("itemBg").active = !1;
var p = f.getChildByName("spine");
p.active = !0;
var _ = p.getComponent(sp.Skeleton);
if (1 === d.type) _.setAnimation(0, "animation3_1", !1); else if (2 === d.type) {
f.getChildByName("coin").active = !0;
_.setAnimation(0, "animation1_1", !1);
var g = 1e3 * parseInt(d.coin / 1e3);
o.changeNodeLab(f.getChildByName("coin"), Global.formatNumShort(g, 0));
} else 3 === d.type && _.setAnimation(0, "animation2_1", !1);
f.hasUnlock = !0;
o.changeNodeSp(f.getChildByName("itemBg"), this.itemOpenSpf);
}
}
},
updateUi: function() {
var e = this.node.getChildByName("bg"), n = cc.find("haveRoseBg/num", e);
o.changeNodeLab(n, Global.FormatNumToComma(this._roseStore.roseCnt));
for (var t = cc.find("bg/down", this.node), a = 1; a < 6; a++) {
var i = cc.find("chooseBtn" + a, t);
o.changeNodeSp(i, this.chooseSpf1);
a === this._page && o.changeNodeSp(i, this.chooseSpf2);
}
},
onRcvSubGameAction: function(e) {
var n = this;
return i(regeneratorRuntime.mark(function t() {
var a, i, r, c, s, l, m, u, d, f, p;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (200 == e.code) {
t.next = 2;
break;
}
return t.abrupt("return");

case 2:
a = e.data;
i = cc.find("bg/pageView/view/content/page_" + a.pageId, n.node);
r = i.getChildByName("item" + (a.choiceId - 1));
c = cc.vv.gameData;
if (!a.errMsg) {
t.next = 8;
break;
}
return t.abrupt("return");

case 8:
s = cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose");
l = cc.find("numBg/num", s);
cc.vv.gameData.GetSlotsScript()._roseNum = a.roseStore.roseCnt;
o.changeNodeLab(l, Global.FormatNumToComma(a.roseStore.roseCnt));
1 == n._roseStore.repick && (n._repick = !0);
if (a.roseStore) {
n.updateData(a.roseStore);
n.updateUi();
}
r.getChildByName("lock").active = !1;
r.getChildByName("price").active = !1;
r.getChildByName("itemBg").active = !1;
r.hasUnlock = !0;
r.stopAllActions();
o.changeNodeSp(r.getChildByName("itemBg"), n.itemOpenSpf);
(m = r.getChildByName("spine")).active = !0;
u = m.getComponent(sp.Skeleton);
t.t0 = a.result.type;
t.next = 1 === t.t0 ? 26 : 2 === t.t0 ? 35 : 3 === t.t0 ? 56 : 64;
break;

case 26:
u.setAnimation(0, "animation3", !1);
Global.SlotsSoundMgr.playEffect("buy2");
c.SetSmallStoreToFreeGame(!0);
t.next = 31;
return n.awaitTime(1);

case 31:
u.setAnimation(0, "animation3_1", !1);
o.nodeAni(n.node, 2);
c.GetSlotsScript().delayFunc(function() {
cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame(2);
}, 1);
return t.abrupt("break", 65);

case 35:
u.setAnimation(0, "animation1", !1);
t.next = 38;
return n.awaitTime(.5);

case 38:
r.getChildByName("coin").active = !0;
d = a.result.coin;
1 == n._repick && (d = a.result.coin / 2);
o.changeNodeLab(r.getChildByName("coin"), Global.formatNumShort(d, 0));
t.next = 44;
return n.awaitTime(.5);

case 44:
u.setAnimation(0, "animation1_1", !1);
n.repick(!1);
if (!n._beginFlyItem) {
t.next = 49;
break;
}
t.next = 49;
return n.flyliziAct(n._beginFlyItem, r);

case 49:
o.changeNodeLab(r.getChildByName("coin"), Global.formatNumShort(a.result.coin, 0));
f = cc.vv.gameData.GetBottomScript().getCurrentWin();
p = a.result.coin;
cc.vv.gameData.AddCoin(p);
cc.vv.gameData.GetBottomScript().ShowWin(p + f, 3, f, null, .3);
cc.vv.gameData.GetTopScript().ShowCoin();
return t.abrupt("break", 65);

case 56:
u.setAnimation(0, "animation2", !1);
Global.SlotsSoundMgr.playEffect("buy3");
t.next = 60;
return n.awaitTime(1);

case 60:
u.setAnimation(0, "animation2_1", !1);
n._beginFlyItem = r;
n.repick(!0);
return t.abrupt("break", 65);

case 64:
return t.abrupt("break", 65);

case 65:
cc.find("bg/zheZhao", n.node).active = !1;
a.result.pageReward && n.goPageReward(a.pageId, a.result.pageReward);
n.checkCanOpen();

case 68:
case "end":
return t.stop();
}
}, t);
}))();
},
checkCanOpen: function() {
for (var e = this, n = cc.find("bg/pageView/view/content/page_" + this._roseStore.unlockPage, this.node), t = this._roseStore.roseCnt, a = function(a) {
var i = n.getChildByName("item" + a);
if (1 == i.hasUnlock) return "continue";
var r = i.price, c = i.getChildByName("spine");
if (t >= r) {
c.active = !0;
o.changeNodeSp(i.getChildByName("itemBg"), e.itemCloseSpf);
null == i.getActionByTag(1) && cc.tween(i).delay(2 + 4 * a).call(function() {
o.playSpineAni(c, "animation5", !1);
}).union().repeatForever().tag(1).start();
} else {
c.active = !1;
i.stopAllActions();
o.changeNodeSp(i.getChildByName("itemBg"), e.itemGraySpf);
}
}, i = 0; i < 9; i++) a(i);
},
flyliziAct: function(e, n) {
var t = this;
return i(regeneratorRuntime.mark(function a() {
var i, r, c;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
i = t;
(r = cc.instantiate(t._flyLizi)).parent = e;
r.active = !0;
r.setPosition(cc.v2(0, 0));
c = o.convetOtherNodeSpace(n, e);
cc.tween(r).to(.5, {
position: c
}).call(function() {
r.removeFromParent();
i._beginFlyItem = null;
i._repick = !1;
}).start();
t.awaitTime(1);

case 8:
case "end":
return a.stop();
}
}, a);
}))();
},
repick: function(e) {
if (this._roseStore.repick) for (var n = this._roseStore.unlockPage, t = cc.find("bg/pageView/view/content/page_" + n, this.node), a = 0; a < 9; a++) {
var i = t.getChildByName("item" + a);
i.hasUnlock || (i.getChildByName("price").active = !e);
}
},
goPageReward: function(e, n) {
var t = this;
return i(regeneratorRuntime.mark(function a() {
var i, r, c, s, l, m;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
Global.SlotsSoundMgr.playEffect("full");
i = cc.find("kuangzhu", t.node);
r = cc.find("quanpingqingzhu", t.node);
i.active = !0;
r.active = !0;
i.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
r.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
cc.vv.gameData.SetBigStoreToFreeGame(!0);
a.next = 10;
return t.awaitTime(2);

case 10:
a.next = 12;
return t.closeRoseStore();

case 12:
cc.vv.gameData.GetPopNodeScript().roseStoreToFreeGame(e, n);
c = t._roseStore.unlockPage;
s = cc.find("bg/pageView/view/content/page_" + c, t.node);
for (l = 0; l < 9; l++) {
(m = s.getChildByName("item" + l)).getChildByName("lock").active = !1;
o.changeNodeSp(m.getChildByName("itemBg"), t.itemCloseSpf);
}

case 16:
case "end":
return a.stop();
}
}, a);
}))();
},
movePage: function(e) {
var n = this;
return i(regeneratorRuntime.mark(function t() {
var a, i, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("change");
a = cc.find("bg/pageView", n.node).getComponent(cc.PageView);
i = n._roseStore.unlockPage;
r = a.getCurrentPageIndex();
c = 1;
1 === e ? -1 === (c = r - 1) && (c = 4) : 2 === e && 5 === (c = r + 1) && (c = 0);
n._page = c + 1;
a.scrollToPage(c);
n.updateUi();
n._page > i ? o.playSpineAni(n._upSpine, "animation" + (n._page + 4), !1) : o.playSpineAni(n._upSpine, "animation" + n._page, !1);
n.scheduleOnce(function() {
Global.SlotsSoundMgr.playEffect("dialog_store_show");
}, .2);

case 11:
case "end":
return t.stop();
}
}, t);
}))();
},
showRoseStore: function() {
o.nodeAni(this.node, 1);
this.checkCanOpen();
cc.find("bg/zheZhao", this.node).active = !1;
},
closeRoseStore: function() {
o.nodeAni(this.node, 2);
},
awaitTime: function(e) {
var n = this;
return new Promise(function(t, a) {
n.scheduleOnce(function() {
t();
}, e);
});
}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools"
} ],
BigDuel_Tools: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "91347RgeMRFfYlXbQvvhwE7", "BigDuel_Tools");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
statics: {
changeNodeSp: function(e, n) {
null != e && (e.getComponent(cc.Sprite).spriteFrame = n);
},
changeNodeLab: function(e, n) {
null != e && (e.getComponent(cc.Label).string = n);
},
numInArr: function(e, n, t) {
var a = t.indexOf(e), i = t.indexOf(n);
return -1 != a && -1 != i;
},
nodeAni: function(e, n) {
if (1 === n) {
e.scale = 0;
e.active = !0;
cc.tween(e).to(.2, {
scale: 1
}).start();
} else 2 === n ? cc.tween(e).to(.2, {
scale: 0
}).call(function() {
e.active = !1;
e.scale = 1;
}).start() : 3 === n && cc.tween(e).to(.2, {
scale: 1.3
}).to(.3, {
scale: 0
}).call(function() {
e.active = !1;
e.scale = 1;
}).start();
},
playSpineAni: function(e) {
var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation", t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
if (e) {
e.active = !0;
e.getComponent(sp.Skeleton).setAnimation(a, n, t);
}
},
getKNum: function(e) {
if (e) {
return 1e3 * parseInt(e / 1e3);
}
},
spineEndFunc: function(e, n) {
e && e.getComponent(sp.Skeleton).setCompleteListener(function() {
n && n();
});
},
localConvertWorldPoint: function(e) {
return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null;
},
worldConvertLocalPoint: function(e, n) {
return e ? e.convertToNodeSpace(n) : null;
},
convetOtherNodeSpace: function(e, n) {
if (!e || !n) return null;
var t = this.localConvertWorldPoint(e);
return this.worldConvertLocalPoint(n, t);
}
}
});
cc._RF.pop();
}, {} ],
BigDuel_Wheel: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "8b638C8mxVDt6D6ay7ej+L/", "BigDuel_Wheel");
function a(e, n, t, a, i, o, r) {
try {
var c = e[o](r), s = c.value;
} catch (e) {
t(e);
return;
}
c.done ? n(s) : Promise.resolve(s).then(a, i);
}
function i(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(i, o) {
var r = e.apply(n, t);
function c(e) {
a(r, i, o, c, s, "next", e);
}
function s(e) {
a(r, i, o, c, s, "throw", e);
}
c(void 0);
});
};
}
var o = e("./BigDuel_Tools");
cc.Class({
extends: cc.Component,
properties: {
_node_win: cc.node,
_node_wheel: cc.node,
_yuan_di: cc.node,
_point_node: cc.node,
_spine_moon: cc.node,
_wheelAtlas: null,
_bonusGameInfo: null,
_pointType: null,
_gameTimes: 1
},
Init: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e._node_win = cc.find("node_win", e.node);
e._spine_moon = cc.find("spine_moon", e.node);
e._node_wheel = cc.find("node_wheel", e.node);
e._yuan_di = cc.find("yuanDi", e._node_wheel);
e._point_node = cc.find("pointNode", e._node_wheel);
e._wheelAtlas = cc.vv.gameData.GetAtlasByName("wheel");
t = cc.find("sureBtn", e._node_win);
Global.btnClickEvent(t, i(regeneratorRuntime.mark(function e() {
var n = this;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
t.stopAllActions();
Global.SlotsSoundMgr.playEffect("popup_out");
o.nodeAni(this._node_win, 3);
this.scheduleOnce(function() {
n.exitWheelGame();
}, .6);

case 4:
case "end":
return e.stop();
}
}, e, this);
})), e);

case 8:
case "end":
return n.stop();
}
}, n);
}))();
},
enterWheelGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e._bonusGameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo.bonusGame;
if (e._bonusGameInfo) {
n.next = 3;
break;
}
return n.abrupt("return");

case 3:
e._pointType = e._bonusGameInfo.size;
e._gameTimes = e._bonusGameInfo.result.length;
e.updateUi();

case 6:
case "end":
return n.stop();
}
}, n);
}))();
},
updateUi: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t, a, i, r, c, s, l, m, u, d;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e.node.active = !0;
t = cc.find("leftHeiDi", e._node_wheel);
a = cc.find("rightHeiDi", e._node_wheel);
e._spine_moon.active = !1;
e._node_win.active = !1;
e._yuan_di.angle = 0;
i = e._node_wheel.getChildByName("pointSpine1");
r = e._node_wheel.getChildByName("pointSpine2");
i.active = !1;
r.active = !1;
o.changeNodeSp(e._yuan_di, e._wheelAtlas.getSpriteFrame("yuanDi" + e._bonusGameInfo.wheelJackpot));
o.changeNodeSp(t, e._wheelAtlas.getSpriteFrame("zz" + e._pointType));
o.changeNodeSp(a, e._wheelAtlas.getSpriteFrame("zz" + e._pointType));
o.changeNodeSp(e._point_node, e._wheelAtlas.getSpriteFrame("point" + e._pointType));
c = {
1: "mini",
2: "minor",
3: "maxi",
4: "major",
5: "grand"
};
if (e._yuan_di.childrenCount < 10) for (s = 0; s < 40; s++) {
l = cc.instantiate(cc.find("item", e._yuan_di));
m = e._bonusGameInfo.wheelItems[s];
l.active = !0;
l.name = "item" + s;
l.angle = 9 * s;
l.parent = e._yuan_di;
l.getChildByName("png1").active = !1;
l.getChildByName("png2").active = !1;
l.getChildByName("lab").active = !1;
if (m.mult) {
l.getChildByName("lab").active = !0;
u = cc.vv.gameData.GetTotalBet() * m.mult;
o.changeNodeLab(l.getChildByName("lab"), Global.FormatNumToComma(u));
}
if (m.respin) {
o.changeNodeSp(l.getChildByName("png1"), e._wheelAtlas.getSpriteFrame("again" + m.respin));
l.getChildByName("png1").active = !0;
}
if (m.jackpotId) {
o.changeNodeSp(l.getChildByName("png2"), e._wheelAtlas.getSpriteFrame(c[m.jackpotId]));
l.getChildByName("png2").active = !0;
}
}
d = {
1: 0,
2: -4.5,
3: -9,
4: -13.5
};
e._yuan_di.angle = d[e._pointType];
n.next = 20;
return e.awaitTime(1.5);

case 20:
e.moveWheel(0);

case 21:
case "end":
return n.stop();
}
}, n);
}))();
},
moveWheel: function(e) {
var n = this;
return i(regeneratorRuntime.mark(function t() {
var a, i, r, c, s, l, m, u, d, f, p;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = n;
i = n._bonusGameInfo.result[e];
Global.SlotsSoundMgr.playEffect("wheel_spin");
n._node_wheel.getChildByName("pointSpine1").active = !1;
n._node_wheel.getChildByName("pointSpine2").active = !1;
r = Math.min.apply(null, i);
c = Math.max.apply(null, i);
s = r;
s = o.numInArr(1, 40, i) ? c -= 1 : r -= 1;
l = -9 * s - 1800;
m = n._node_wheel.getChildByName("pointSpine1");
u = n._node_wheel.getChildByName("pointSpine2");
m.active = !0;
m.getComponent(sp.Skeleton).setAnimation(0, "animation" + n._pointType, !0);
n._yuan_di.runAction(cc.rotateBy(8, l));
t.next = 17;
return n.awaitTime(3);

case 17:
m.getComponent(sp.Skeleton).setAnimation(0, "animation" + a._pointType + "_1", !0);
t.next = 20;
return n.awaitTime(5);

case 20:
Global.SlotsSoundMgr.playEffect("wheel_win");
m.active = !1;
u.active = !0;
u.getComponent(sp.Skeleton).setAnimation(0, "animation" + a._pointType, !1);
t.next = 26;
return n.awaitTime(.8);

case 26:
u.active = !1;
n.playItemAni(i, !0);
Global.SlotsSoundMgr.playEffect("wheel_win");
t.next = 31;
return n.awaitTime(2);

case 31:
d = cc.vv.gameData.GetBottomScript().getCurrentWin();
f = n.getCoinByIndex(e);
if (!(n._gameTimes > e + 1)) {
t.next = 48;
break;
}
t.next = 36;
return cc.vv.gameData.GetSlotsScript().ShowBottomWin(f, d + f, !1, null, 1);

case 36:
n.playItemAni(i, !1);
Global.SlotsSoundMgr.playEffect("transitionyun");
n._spine_moon.active = !0;
n._spine_moon.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
p = {
1: 0,
2: -4.5,
3: -9,
4: -13.5
};
n._yuan_di.angle = p[n._pointType];
t.next = 44;
return n.awaitTime(1.5);

case 44:
n._spine_moon.active = !1;
n.moveWheel(e + 1);
t.next = 51;
break;

case 48:
t.next = 50;
return cc.vv.gameData.GetSlotsScript().ShowBottomWin(f, d + f, !0, null, 1);

case 50:
n._bonusGameInfo.jackpot && n._bonusGameInfo.jackpot.id ? n.showJpAni() : n.exitWheelGame();

case 51:
case "end":
return t.stop();
}
}, t);
}))();
},
getCoinByIndex: function(e) {
var n = this._bonusGameInfo.result[e], t = this._bonusGameInfo.wheelItems, a = 0;
for (var i in n) {
var o = t[n[i] - 1];
if (o.mult) {
a += cc.vv.gameData.GetTotalBet() * o.mult;
}
}
return a;
},
showJpAni: function() {
var e = this;
return i(regeneratorRuntime.mark(function n() {
var t, a, i, r;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = e._bonusGameInfo.jackpot.id;
a = cc.find("sureBtn", e._node_win);
i = cc.find("winCoinNode", e._node_win);
Global.SlotsSoundMgr.playEffect("dialog_jp_collect");
a.active = !1;
i.active = !1;
e._node_win.active = !0;
r = {
1: 5,
2: 4,
3: 3,
4: 2,
5: 1
};
cc.find("jptanchuang", e._node_win).getComponent(sp.Skeleton).setAnimation(0, "animation" + r[t], !1);
cc.tween(e.node).delay(.5).call(function() {
a.active = !0;
i.active = !0;
o.playSpineAni(cc.find("shuzikuang", i));
a.getChildByName("anniu").getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
cc.find("numBg/num", i).getComponent(cc.Label).string = Global.FormatNumToComma(e._bonusGameInfo.winCoin);
}).delay(.5).call(function() {
cc.find("jptanchuang", e._node_win).getComponent(sp.Skeleton).setAnimation(0, "animation" + r[t] + "_1", !0);
}).start();
n.next = 12;
return cc.vv.gameData.awaitTime(.5);

case 12:
cc.vv.gameData.checkAutoPlay(a, function() {
Global.SlotsSoundMgr.playEffect("popup_out");
o.nodeAni(e._node_win, 3);
e.scheduleOnce(function() {
e.exitWheelGame();
}, .6);
});

case 13:
case "end":
return n.stop();
}
}, n);
}))();
},
playItemAni: function(e, n) {
for (var t in e) {
var a = e[t], i = this._bonusGameInfo.wheelItems[a - 1], o = this._yuan_di.getChildByName("item" + (a - 1)), r = void 0, c = "animation";
i.mult && (r = o.getChildByName("lab").getChildByName("spineNode"));
if (i.respin) {
r = o.getChildByName("png1").getChildByName("spineNode");
c = {
1: "animation_lv",
2: "animation_lam",
3: "animation_zi",
4: "animation_hong",
5: "animation_huang"
}[i.respin];
}
if (i.jackpotId) {
r = o.getChildByName("png2").getChildByName("spineNode");
c = {
1: "animation_lv",
2: "animation_lan",
3: "animation_zi",
4: "animation_hong",
5: "animation_huang"
}[i.jackpotId];
}
if (n) {
r.active = !0;
r.getComponent(sp.Skeleton).setAnimation(0, c, !0);
} else {
r.getComponent(sp.Skeleton).clearTracks();
r.active = !1;
}
}
},
exitWheelGame: function() {
var e = this, n = this;
cc.tween(this._node_wheel).by(.5, {
y: -100,
opacity: 0
}).call(function() {
n.node.active = !1;
n._node_wheel.y = -480;
n._node_wheel.opacity = 255;
for (var t = 0; t < 40; t++) {
var a = cc.find("item" + t, e._yuan_di);
a && a.removeFromParent();
}
cc.vv.gameData.GetSlotsScript().ExitBonusGame();
}).start();
},
awaitTime: function(e) {
var n = this;
return new Promise(function(t, a) {
n.scheduleOnce(function() {
t();
}, e);
});
}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools"
} ],
BigDuel_symbol: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "94a14m2B0VBlK+ulPrA82wp", "BigDuel_symbol");
var a = e("./BigDuel_Tools");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
StartMove: function() {
this._super();
},
SetRoseText: function(e) {
var n = cc.find("roseSpine", this.node), t = cc.find("roseFlyLizi", this.node), i = cc.find("Canvas/safe_node/slots/reels_frame/frameUp/rose"), o = a.convetOtherNodeSpace(n, i), r = cc.instantiate(n);
r.setPosition(o);
r.parent = i;
var c = cc.instantiate(t);
c.setPosition(o);
c.parent = i;
var s = "animation" + e / 5 + "_1", l = "animation" + e / 5 + "_2";
r.active = !0;
r.getComponent(sp.Skeleton).setAnimation(0, l, !1);
cc.tween(r).delay(.3).call(function() {
r.getComponent(sp.Skeleton).setAnimation(0, s, !1);
}).delay(.1).to(.4, {
position: cc.v2(0, 0)
}).call(function() {
r.removeFromParent();
}).start();
cc.tween(c).delay(.5).call(function() {
c.active = !0;
}).to(.4, {
position: cc.v2(0, 0)
}).start();
},
Resume: function(e) {
if (e) {
this._symbolIdx = e.symbolIdx;
this._id = e.id;
this._data = Global.copy(e.data);
this.ShowKuang(e.isKuang);
this.ShowNormal();
var n = e.state;
"win" == n ? this.playWinAnimation() : "stop" == n ? this.playStopAnimation() : "idle" == n ? this.playidleAnimation() : "trigger" == n && this.playTriggerAnimation(!0);
}
},
playTriggerAnimation: function(e) {
var n = !1, t = this._id, a = cc.vv.gameData.getGameCfg();
if (e) {
if (a.symbol[t] && a.symbol[t].win_node && a.symbol[t].trigger_ani) {
this._state = "trigger";
this._showNode && (this._showNode.active = !1);
var i = this.setAnimationToTop(!0);
i.active = !0;
var o = cc.find(a.symbol[t].win_node, i);
o.active = !0;
if ("" != a.symbol[t].trigger_ani.name) {
i.zIndex = a.symbol[t].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
n = !0;
var r = o.getComponent(sp.Skeleton);
r && r.setAnimation(0, a.symbol[t].trigger_ani.name, !0);
}
}
} else this.setAnimationToTop(!1);
return n;
}
});
cc._RF.pop();
}, {
"./BigDuel_Tools": "BigDuel_Tools",
LMSlots_Symbol_Base: void 0
} ]
}, {}, [ "BigDuel_ButtonSafe", "BigDuel_Cfg", "BigDuel_GameData", "BigDuel_Logic", "BigDuel_Pop", "BigDuel_PrizePool", "BigDuel_Reel", "BigDuel_Slots", "BigDuel_Store", "BigDuel_Tools", "BigDuel_Wheel", "BigDuel_symbol" ]);