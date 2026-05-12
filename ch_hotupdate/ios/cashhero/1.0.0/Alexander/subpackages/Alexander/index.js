window.__require = function e(t, n, i) {
function a(s, c) {
if (!n[s]) {
if (!t[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!t[r]) {
var _ = "function" == typeof __require && __require;
if (!c && _) return _(r, !0);
if (o) return o(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var p = n[s] = {
exports: {}
};
t[s][0].call(p.exports, function(e) {
return a(t[s][1][e] || e);
}, p, p.exports, e, t, n, i);
}
return n[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < i.length; s++) a(i[s]);
return a;
}({
Alexander_BonusGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "df79c5CGxpGWK+A+VZVYGHE", "Alexander_BonusGame");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
_rtype: 3
},
start: function() {},
Init: function() {
this._rtype = 3;
this._spine_character = cc.find("safe_node/spine_character", this.node);
this._bonus_spins = cc.find("safe_node/slots/node_spins", this.node);
this._node_winner = cc.find("safe_node/slots/node_winner", this.node);
this._bonus_spins.active = !1;
this._node_winner.active = !1;
this._spine_bonus_again = cc.find("safe_node/slots/spine_bonus_again", this.node);
this._spine_bonus_again.active = !1;
},
onEnable: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
enterBonusGame: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playBgm("bonus_bgm");
e.initBonusGame();
t.next = 4;
return cc.vv.gameData.awaitTime(2);

case 4:
e.bonusStartMove();
e._bonusSuccess = n;

case 6:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
endBonusGame: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("bonus_end");
cc.tween(e._bonus_spins).to(.5, {
opacity: 0
}).start();
t.next = 4;
return cc.vv.gameData.awaitTime(.5);

case 4:
e._bonus_spins.active = !1;
e._bonus_spins.opacity = 255;
cc.tween(e._spine_character).to(.5, {
opacity: 0
}).start();
e._node_winner.active = !0;
e._node_winner.opacity = 0;
cc.find("lbl", e._node_winner).getComponent(cc.Label).string = "";
cc.find("spine_light", e._node_winner).active = !1;
cc.find("spine_win", e._node_winner).active = !1;
cc.tween(e._node_winner).to(.5, {
opacity: 255
}).start();
t.next = 15;
return cc.vv.gameData.awaitTime(.5);

case 15:
t.next = 17;
return e.playCompleteAnim();

case 17:
if (!e._retriggered) {
t.next = 34;
break;
}
Global.SlotsSoundMgr.playEffect("playitagain");
e._spine_bonus_again.active = !0;
e._spine_bonus_again.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
t.next = 23;
return cc.vv.gameData.awaitTime(.5);

case 23:
t.next = 25;
return cc.vv.gameData.getPopupScript().playBonusAgainAnim();

case 25:
cc.vv.gameData.setEpicInfo(e._newEpicInfo);
cc.vv.gameData.setBonusIdxs(e._newEpicInfo.bonusIdxs);
cc.vv.gameData.setBonusItems(e._newEpicInfo.bonusItems);
e._node_winner.active = !1;
e._spine_character.opacity = 255;
cc.vv.gameData.GetSlotsScript().initBonusSymbol();
e.initBonusGame();
e.bonusStartMove();
return t.abrupt("return");

case 34:
n = e._winCoin;
i = e._winCoin;
cc.vv.gameData.AddCoin(e._winCoin);
t.next = 39;
return new Promise(function(e, t) {
cc.vv.gameData.GetSlotsScript().ShowBottomWin(n, i, !0, e);
});

case 39:
cc.find("spine_win", e._node_winner).active = !1;
e._node_winner.active = !1;
if (e._bonusSuccess) {
e._bonusSuccess();
e._bonusSuccess = null;
Global.SlotsSoundMgr.stopBgm();
}

case 42:
case "end":
return t.stop();
}
}, t);
}))();
},
bonusStartMove: function() {
this._restCnt -= 1;
this.showBonusSpins(this._restCnt, !1);
cc.vv.gameData.GetSlotsScript().setBonusCanStop(!1);
cc.vv.gameData.GetSlotsScript().StartMove(this._bonusIdxs);
this.onSendSeq();
},
onSendSeq: function() {
var e = {
c: MsgId.SLOT_SUBGAME_DATA
};
e.gameid = cc.vv.gameData.getGameId();
e.data = {
rtype: this._rtype
};
cc.vv.NetManager.send(e, !0);
},
onRcvSubGameAction: function(e) {
var t = e.data;
if (200 === e.code && t && t.rtype == this._rtype) {
cc.vv.gameData.GetSlotsScript().setBonusCanStop(!0);
if (t) {
this._isBonusEnd = t.isEnd;
this._bonusIdxs = t.epicInfo.bonusIdxs;
this._bonusItems = t.epicInfo.bonusItems;
this._retriggered = t.epicInfo.retriggered;
this._winCoin = t.epicInfo.winCoin;
this._restCnt = t.epicInfo.restCnt;
this._newEpicInfo = t.newEpicInfo;
cc.vv.gameData.setBonusIdxs(this._bonusIdxs);
cc.vv.gameData.setBonusItems(this._bonusItems);
var n = this.getResultCard();
cc.vv.gameData.GetSlotsScript().SetSlotsResult(n);
}
}
},
getResultCard: function() {
for (var e = cc.vv.gameData.getGameCfg(), t = [], n = 1; n <= 20; n++) if (this._bonusIdxs.includes(n)) t.push(3); else {
var i = Global.random(1, e.randomSymbols.length), a = e.randomSymbols[i - 1];
t.push(a);
}
return t;
},
onBonusSpinEnd: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!e._isBonusEnd) {
t.next = 4;
break;
}
e.endBonusGame();
t.next = 8;
break;

case 4:
e.showBonusSpins(e._restCnt, !1);
t.next = 7;
return cc.vv.gameData.awaitTime(2);

case 7:
e.bonusStartMove();

case 8:
case "end":
return t.stop();
}
}, t);
}))();
},
showBonusSpins: function(e, t) {
if (!1 === e) this._bonus_spins.active = !1; else {
this._bonus_spins.active = !0;
this._bonus_spins.opacity = 255;
cc.find("lbl", this._bonus_spins).getComponent(cc.Label).string = [ "LAST SPIN", "1 SPIN REMAINING", "2 SPINS REMAINING", "3 SPINS REMAINING" ][e];
var n = cc.find("spine_bomb", this._bonus_spins);
if (t) n.active = !1; else if (3 == e) {
Global.SlotsSoundMgr.playEffect("num");
n.active = !0;
n.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
}
}
},
playCompleteAnim: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a, o, s, c, r, _, p, l, u, m, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
(a = Global.copy(e._bonusIdxs)).sort(function(e, t) {
return e / 5 - t / 5;
}).sort(function(e, t) {
return (e - 1) % 5 - (t - 1) % 5;
});
(o = cc.find("spine_win", e._node_winner)).active = !0;
s = e._curCoin;
c = cc.find("lbl", e._node_winner);
r = cc.find("spine_light", e._node_winner);
_ = 0;

case 8:
if (!(_ < a.length)) {
t.next = 37;
break;
}
p = a[_];
if (!(l = e._bonusItems[e._bonusIdxs.indexOf(p)]).again) {
t.next = 14;
break;
}
t.next = 34;
break;

case 14:
Global.SlotsSoundMgr.playEffect("collect");
u = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(p);
m = e._node_winner.convertToNodeSpaceAR(u.node.convertToWorldSpaceAR(cc.v2(0, 0)));
o.position = m;
o.angle = e.getRotationAngle(p);
o.scale = e.getScaleMul(p);
o.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
u.playBonusCollAnim();
t.next = 24;
return cc.vv.gameData.awaitTime(.5);

case 24:
d = void 0;
l.coin ? d = l.coin : l.jackpot && (d = l.jackpot.value);
if (!(d > 0)) {
t.next = 34;
break;
}
s += d;
c.getComponent(cc.Label).string = Global.FormatNumToComma(s);
r.active = !0;
r.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
cc.vv.gameData.GetBottomScript().SetWin(s);
t.next = 34;
return cc.vv.gameData.awaitTime(.3);

case 34:
_++;
t.next = 8;
break;

case 37:
n();

case 38:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}()));

case 1:
case "end":
return t.stop();
}
}, t);
}))();
},
initBonusGame: function() {
var e = cc.vv.gameData.getEpicInfo();
this._bonusIdxs = e.bonusIdxs;
this._bonusItems = e.bonusItems;
this._currStep = e.currStep;
this._restCnt = e.restCnt;
this._retriggered = e.retriggered;
this._curCoin = e.winCoin;
this.showBonusSpins(this._restCnt, !0);
cc.vv.gameData.GetBottomScript().SetWin(this._curCoin);
},
getRotationAngle: function(e) {
return [ -45, -27, 0, 27, 45, -35, -20, 0, 20, 35, -29, -15, 0, 15, 29, -24, -13, 0, 13, 24 ][e - 1];
},
getScaleMul: function(e) {
return [ .7, .6, .5, .6, .7, .9, .8, .7, .8, .9, 1.1, 1, .9, 1, 1.1, 1.2, 1.1, 1, 1.1, 1.2 ][e - 1];
}
});
cc._RF.pop();
}, {} ],
Alexander_Bottom: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "15598SPy6hAu6LXWQULOQoq", "Alexander_Bottom");
cc.Class({
extends: e("LMSlots_Bottom_Base"),
properties: {},
ShowBtnsByState: function(e) {
this._super(e);
"moveing_2" == e ? cc.vv.gameData.GetSlotsScript().setStopNodeState(!0) : cc.vv.gameData.GetSlotsScript().setStopNodeState(!1);
}
});
cc._RF.pop();
}, {
LMSlots_Bottom_Base: void 0
} ],
Alexander_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1d41cq/BLpA9qoQOfCu0dRB", "Alexander_Cfg");
var i;
function a(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var o = {
symbol: (i = {}, a(i, 1, {
node: "s1",
win_node: "w1",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 2, {
node: "s2",
win_node: "w2",
stop_ani: {
name: "animation1",
zIndex: 100
},
trigger_ani: {
name: "animation2",
zIndex: 300
},
isMask: !0
}), a(i, 3, {
node: "s3",
mini_node: "s301",
minor_node: "s302",
major_node: "s303",
again_node: "s304",
win_node: "w3",
isMask: !1,
idle_ani: {
name: "animationj_1",
mini_name: "animation27_1",
minor_name: "animation32_1",
major_name: "animation36_1",
again_name: "animation37_1",
zIndex: 300
},
coll_ani: {
name: "animationj_2",
mini_name: "animation27_2",
minor_name: "animation32_2",
major_name: "animation36_2",
again_name: "animation37_2",
zIndex: 300
}
}), a(i, 4, {
node: "s4",
win_node: "w4",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 5, {
node: "s5",
win_node: "w5",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 6, {
node: "s6",
win_node: "w6",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 7, {
node: "s7",
win_node: "w7",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 8, {
node: "s8",
win_node: "w8",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 9, {
node: "s9",
win_node: "w9",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), a(i, 10, {
node: "s10",
win_node: "",
isMask: !0
}), a(i, 11, {
node: "s11",
win_node: "",
isMask: !0
}), a(i, 12, {
node: "s12",
win_node: "",
isMask: !0
}), a(i, 13, {
node: "s13",
win_node: "",
isMask: !0
}), a(i, 14, {
node: "s0",
win_node: ""
}), i),
bonusId: [ 3 ],
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "Alexander_Bottom",
Slots: "Alexander_Slots",
Reels: "Alexander_Reel",
Symbols: "Alexander_Symbol"
},
col: 20,
row: 1,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
height: 106
},
randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
kuang: "kuang",
speed: 3e3,
autoModelDelay: .5,
reelStopInter: .1,
auto_stop_time: 1,
bounceInfo: {
distance: 20,
time: .1
},
normalBgm: "base_bgm",
helpItems: [ "games/Alexander/prefab/help_node/LMSlots_Help_item1", "games/Alexander/prefab/help_node/LMSlots_Help_item2", "games/Alexander/prefab/help_node/LMSlots_Help_item3", "games/Alexander/prefab/help_node/LMSlots_Help_item4" ],
commEffect: {
path: "games/Alexander/",
win1: [ "win1", "win1end" ],
win2: [ "win2", "win2end" ]
},
AddAntiTime: 1.8,
reelStateInfo: [ {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_anti",
path: "games/Alexander/",
reelStopSound: "reel_stop",
symbolStopSound: "symbol_scatter",
antSound: "reel_notify",
antSpeed: 2200,
type: "free"
}, {
id: [ 3 ],
mini: 6,
counts: [ 4, 4, 4, 4, 4 ],
path: "games/Alexander/",
reelStopSound: "reel_stop",
symbolStopSound: "symbol_coin",
antSpeed: 2e3,
type: "bonus"
} ]
};
t.exports = o;
cc._RF.pop();
}, {} ],
Alexander_FreeGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b7682wpLEpGUoMWLKf09TN2", "Alexander_FreeGame");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
_slotsNodeList: [],
_slotsScpList: []
},
start: function() {},
Init: function() {
this._node_free = cc.find("safe_node/node_free", this.node);
this._node_free.active = !1;
this._node_slots = cc.find("slots", this._node_free);
for (var e = 1; e <= 4; e++) {
var t = cc.find("slots" + e, this._node_slots), n = t.addComponent("Alexander_FreeSlots");
n.Init(e);
this._slotsNodeList.push(t);
this._slotsScpList.push(n);
}
},
initShowSlotsData: function(e) {
var t = this;
return new Promise(function() {
var n = a(regeneratorRuntime.mark(function n(i, a) {
var o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playBgm("free_bgm");
cc.vv.gameData.setIsFreeGame(!0);
t._node_free.active = !0;
t.showNormalSlots(!1);
t._slotsCnt = cc.vv.gameData.getFreeSlotsCnt();
t._addRow = cc.vv.gameData.getFreeAddRow();
t._wildCols = cc.vv.gameData.getFreeWildCols();
t.setSlotsScale();
t.showWildSpine();
for (o = 0; o < t._slotsNodeList.length; o++) if (o < t._slotsCnt) {
t._slotsNodeList[o].active = !0;
t._slotsScpList[o].initSlotsData();
} else t._slotsNodeList[o].active = !1;
if (!e) {
n.next = 14;
break;
}
n.next = 13;
return cc.vv.gameData.awaitTime(.5);

case 13:
cc.vv.gameData.getMapScript().hideMapNode();

case 14:
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
t._freeSuccess = i;

case 16:
case "end":
return n.stop();
}
}, n);
}));
return function(e, t) {
return n.apply(this, arguments);
};
}());
},
endFreeGame: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
t.next = 2;
return cc.vv.gameData.awaitTime(1);

case 2:
t.next = 4;
return cc.vv.gameData.getPopupScript().playEndFreeAnim();

case 4:
cc.vv.gameData.getPopupScript().playQPAnim3();
t.next = 7;
return cc.vv.gameData.awaitTime(.7);

case 7:
e._node_free.active = !1;
e.showNormalSlots(!0);
cc.vv.gameData.GetBottomScript().ShowFreeModel(!1);
e.hideWildSpine();
t.next = 13;
return cc.vv.gameData.awaitTime(2);

case 13:
t.next = 15;
return new Promise(function(e) {
var t = cc.vv.gameData.getFreeWinCoin();
cc.vv.gameData.GetSlotsScript().ShowBottomWin(t, t, !0, function() {
e();
});
});

case 15:
cc.vv.gameData.setIsFreeGame(!1);
Global.SlotsSoundMgr.stopBgm();
if (e._freeSuccess) {
e._freeSuccess();
e._freeSuccess = null;
}

case 18:
case "end":
return t.stop();
}
}, t);
}))();
},
setSlotsScale: function() {
this._node_slots.setScale([ 1, .9, .53, .53 ][this._slotsCnt - 1]);
this._node_slots.getComponent(cc.Widget).updateAlignment();
var e = cc.vv.gameData.getGameCfg(), t = this._addRow ? 4 : 3, n = this._slotsNodeList[0].width / 2 + 16, i = e.symbolSize.height * t / 2, a = 3 * i + 30;
if (1 == this._slotsCnt && !this._addRow || this._slotsCnt > 2) {
a += e.symbolSize.height;
i += e.symbolSize.height;
}
if (1 == this._slotsCnt) this._slotsNodeList[0].position = cc.v2(0, i); else if (2 == this._slotsCnt) {
this._slotsNodeList[0].position = cc.v2(0, a);
this._slotsNodeList[1].position = cc.v2(0, i);
} else if (3 == this._slotsCnt) {
this._slotsNodeList[0].position = cc.v2(0, a);
this._slotsNodeList[1].position = cc.v2(-n, i);
this._slotsNodeList[2].position = cc.v2(n, i);
} else if (4 == this._slotsCnt) {
this._slotsNodeList[0].position = cc.v2(-n, a);
this._slotsNodeList[1].position = cc.v2(n, a);
this._slotsNodeList[2].position = cc.v2(-n, i);
this._slotsNodeList[3].position = cc.v2(n, i);
}
},
showWildSpine: function() {
for (var e = 0; e < this._slotsNodeList.length; e++) e < this._slotsCnt && this._slotsScpList[e].showWildSpine();
},
hideWildSpine: function() {
for (var e = 0; e < this._slotsNodeList.length; e++) e < this._slotsCnt && this._slotsScpList[e].hideWildSpine();
},
StartMove: function() {
for (var e = 0; e < this._slotsNodeList.length; e++) e < this._slotsCnt && this._slotsScpList[e].StartMove();
},
StopMove: function() {
for (var e = 0; e < this._slotsNodeList.length; e++) e < this._slotsCnt && this._slotsScpList[e].StopMove();
},
onMsgSpine: function(e) {
cc.log(e);
this._gameInfo = e;
for (var t = e.freeGameSlots, n = 0; n < this._slotsNodeList.length; n++) n < this._slotsCnt && this._slotsScpList[n].onMsgSpine(t[n]);
},
OnSpinEnd: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n, i, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
for (n = 0; n < e._slotsNodeList.length; n++) n < e._slotsCnt && e._slotsScpList[n].OnSpinEnd();
i = e._gameInfo.wincoin;
a = cc.vv.gameData.getFreeWinCoin();
t.next = 5;
return new Promise(function(e, t) {
cc.vv.gameData.GetSlotsScript().ShowBottomWin(i, a, !0, function() {
e();
});
});

case 5:
if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
t.next = 8;
break;
}
e.endFreeGame();
return t.abrupt("return");

case 8:
cc.vv.gameData.GetSlotsScript().CanDoNextRound();

case 9:
case "end":
return t.stop();
}
}, t);
}))();
},
GetLastStopReelIdx: function() {
return this._slotsScpList[this._slotsCnt - 1].GetLastStopReelIdx();
},
showNormalSlots: function(e) {
cc.find("safe_node/slots", this.node).active = e;
}
});
cc._RF.pop();
}, {} ],
Alexander_FreeReel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ad728vbaxVL7oA+/+tiBkgS", "Alexander_FreeReel");
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
start: function() {},
Init: function(e, t, n) {
this._holderNode = cc.find("mask/holder", this.node);
this._holderOrigPosY = this._holderNode.position.y;
this._super(e, t, n);
},
setSlotType: function(e) {
this._slotsType = e;
},
OnReelSpinEnd: function() {
this._reelState = [];
var e = cc.vv.gameData.getFreeScript().GetLastStopReelIdx(), t = cc.vv.gameData.getFreeSlotsCnt();
this._slotsType == t && this._reelIdx == e && cc.vv.gameData.getFreeScript().OnSpinEnd();
},
ReadyToStop: function() {
this._bNotifyReadyStop || (this._bNotifyReadyStop = !0);
},
OnReelBounsActionBefore: function() {
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveBefore();
},
OnReelBounsActionDeep: function() {
this.playReelStop();
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveDeep();
},
playReelStop: function() {
var e = this._cfg.reelStateInfo[0].path, t = this._cfg.reelStateInfo[0].reelStopSound;
cc.vv.AudioManager.playEff(e, t, !0);
},
OnReelBounsActionEnd: function() {
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveEnd(); else cc.log("回弹结束，数据已经被清空了");
this.OnReelSpinEnd();
},
StartRecycleSymbol: function(e, t) {
cc.vv.gameData.getGameCfg();
if (this._symbols.length > t + 1) {
var n = -(this._symbols.length - (t + 1));
this.AddCount(n, e);
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Alexander_FreeSlots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b9485/TarlE15Gl38sFmbbS", "Alexander_FreeSlots");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_wildList: []
},
start: function() {},
Init: function(e) {
this._slotsType = e;
this._topScript = cc.vv.gameData.GetTopScript();
this._bottomScript = cc.vv.gameData.GetBottomScript();
this._cfg = cc.vv.gameData.getGameCfg();
this._col = 5;
this._row = 3;
this._topAniNode = cc.find("top_ani", this.node);
this.createReels(this._col, this._row, e);
this.initWildSpine();
},
createReels: function(e, t, n) {
for (var i = 0; i < e; i++) {
var a = cc.find("reels/reel" + (i + 1), this.node).addComponent("Alexander_FreeReel");
a.Init(i, t, this._topAniNode);
a.setSlotType(n);
this._reels.push(a);
}
},
initSlotsData: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._addRow = cc.vv.gameData.getFreeAddRow();
e._wildCols = cc.vv.gameData.getFreeWildCols();
n = e._row;
e._row = e._addRow ? 4 : 3;
e._addRow && 3 == n ? e._reels.forEach(function(e) {
e.AddCount(1, .01);
}) : e._addRow || 4 != n || e._reels.forEach(function(t) {
t.StartRecycleSymbol(.01, e._row);
});
e.addSlotsSize(e._addRow);
e.initAllSymbol();
e.hideWildSpine();
e.showWildSpine();

case 9:
case "end":
return t.stop();
}
}, t);
}))();
},
addSlotsSize: function(e) {
this.node.height = this._row * this._cfg.symbolSize.height;
},
initAllSymbol: function() {
for (var e = 0; e < this._reels.length; e++) for (var t = 0; t < this._row + 1; t++) if (this._reels[e].GetSymbolByRow(t)) {
this._reels[e].GetSymbolByRow(t).ClearState();
this._reels[e].GetSymbolByRow(t).ShowRandomSymbol();
}
},
initWildSpine: function() {
for (var e = 1; e <= 5; e++) {
var t = cc.find(cc.js.formatStr("reels/reel%s/wild", e), this.node);
t.active = !1;
this._wildList.push(t);
}
},
showWildSpine: function() {
for (var e = cc.vv.gameData.getFreeWildCols(), t = cc.vv.gameData.getFreeAddRow(), n = 0; n < e.length; n++) {
var i = e[n];
this._wildList[i - 1].active = !0;
var a = t ? "animation4_1" : "animation3_1";
this._wildList[i - 1].getComponent(sp.Skeleton).setAnimation(0, a, !0);
}
},
hideWildSpine: function() {
for (var e = 0; e < this._wildList.length; e++) this._wildList[e].active = !1;
},
StartMove: function() {
this._super();
this.showWildSpine();
},
onMsgSpine: function(e) {
this._gameInfo = e;
var t = e.cards;
this.SetSlotsResult(t);
},
OnSpinEnd: function() {
this.ShowWinTrace();
},
ShowWinTrace: function() {
for (var e = [], t = 0; t < this._gameInfo.zjLuXian.length; t++) for (var n = this._gameInfo.zjLuXian[t], i = 0; i < n.indexs.length; i++) e[n.indexs[i]] = 1;
if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var a = 0; a < this._gameInfo.scatterZJLuXian.indexs.length; a++) {
e[this._gameInfo.scatterZJLuXian.indexs[a]] = 1;
}
var o = cc.vv.gameData.getFreeWildCols(), s = cc.vv.gameData.getFreeAddRow(), c = [];
for (var r in e) {
var _ = Number(r);
if (o.includes((_ - 1) % 5 + 1)) c.push((_ - 1) % 5); else {
var p = this.GetSymbolByIdx(Number(r));
if (p) {
p.playWinAnimation();
p.ShowKuang();
}
}
}
for (var l = 0; l < c.length; l++) {
var u = s ? "animation4" : "animation3";
this._wildList[c[l]].getComponent(sp.Skeleton).setAnimation(0, u, !0);
}
},
GetReelStopInter: function(e) {
var t = this._cfg.reelStopInter || .6;
return (e + this._col * this._slotsType) * t;
},
CanStopSlot: function() {
return null != this._gameInfo;
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Alexander_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e5eda8cwbhI6ajr93I1nb0I", "Alexander_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {},
start: function() {},
init: function(e, t, n) {
this._epicInfo = e.epicInfo;
if (e.epicInfo) {
this._bonusIdxs = e.epicInfo.bonusIdxs;
this._bonusItems = e.epicInfo.bonusItems;
}
this._mapGame = e.mapGame;
if (e.mapGame) {
this._freeSlotsCnt = e.mapGame.slotCnt;
this._freeAddRow = e.mapGame.extraRow;
this._freeWildCols = e.mapGame.wildCols;
}
if (e.pageReward) {
this._freeSlotsCnt = e.pageReward.slotCnt;
this._freeAddRow = 1;
this._freeWildCols = e.pageReward.wildCols;
}
this._pawStore = e.pawStore;
this._freeWinCoin = e.freeWinCoin;
this._super(e, t, n);
},
OnRcvNetSpine: function(e) {
if (200 == e.code) {
this._epicInfo = e.epicInfo;
this._bonusIdxs = e.bonusIdxs;
this._bonusItems = e.bonusItems;
this._mapGame = e.mapGame;
this._pawStore = e.pawStore;
this._freeWinCoin = e.freeWinCoin;
}
this._super(e);
},
setPopupScript: function(e) {
this._popScp = e;
},
getPopupScript: function() {
return this._popScp;
},
setBonusScript: function(e) {
this._bonusScp = e;
},
getBonusScript: function() {
return this._bonusScp;
},
setMapScript: function(e) {
this._mapScp = e;
},
getMapScript: function() {
return this._mapScp;
},
setFreeScript: function(e) {
this._freeScp = e;
},
getFreeScript: function() {
return this._freeScp;
},
setStoreScript: function(e) {
this._storeScp = e;
},
getStoreScript: function() {
return this._storeScp;
},
getNeedBet: function() {
return this._deskInfo.needBet;
},
setIsBonusGame: function(e) {
this._isBonusGame = e;
},
isBonusGame: function() {
return this._isBonusGame;
},
setEpicInfo: function(e) {
this._epicInfo = e;
},
getEpicInfo: function() {
return this._epicInfo;
},
setBonusIdxs: function(e) {
this._bonusIdxs = e;
},
getBonusIdxs: function() {
return this._bonusIdxs;
},
setBonusItems: function(e) {
this._bonusItems = e;
},
getBonusItems: function() {
return this._bonusItems;
},
setMapGame: function(e) {
this._mapGame = e;
},
getMapGame: function() {
return this._mapGame;
},
setIsFreeGame: function(e) {
this._isFreeGame = e;
},
isFreeGame: function() {
return this._isFreeGame;
},
setFreeAddRow: function(e) {
this._freeAddRow = e;
},
getFreeAddRow: function() {
return this._freeAddRow;
},
setFreeSlotsCnt: function(e) {
this._freeSlotsCnt = e;
},
getFreeSlotsCnt: function() {
return this._freeSlotsCnt;
},
setFreeWildCols: function(e) {
this._freeWildCols = e;
},
getFreeWildCols: function() {
return this._freeWildCols;
},
getFreeGameSlots: function() {
return this._gameInfo.freeGameSlots;
},
getFreeWinCoin: function() {
return this._freeWinCoin;
},
setPawStore: function(e) {
this._pawStore = e;
},
getPawStore: function() {
return this._pawStore;
},
_doPauseAction: function(e) {
this._super(e);
var t = [], n = this.getFreeScript();
if (n) {
n.enabled = e;
for (var i = 0; i < n._slotsScpList.length; i++) for (var a = n._slotsScpList[i]._reels, o = 0; o < a.length; o++) {
var s = a[o];
s.enabled = e;
for (var c = s._symbols, r = 0; r < c.length; r++) {
var _ = c[r];
_.enabled = e;
t.push(_.node);
}
}
}
for (var p = 0; p < t.length; p++) {
t[p].active && (e ? t[p].resumeAllActions() : t[p].pauseAllActions());
for (var l = t[p].children, u = 0; u < l.length; u++) l[u].active && (e ? l[u].resumeAllActions() : l[u].pauseAllActions());
}
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
Alexander_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a5750yPdglH74LPhgRfDwOy", "Alexander_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {},
InitCommComponent: function() {
this._super();
var e = this.node.addComponent("Alexander_Popup");
e.Init();
cc.vv.gameData.setPopupScript(e);
var t = this.node.addComponent("Alexander_BonusGame");
t.Init();
cc.vv.gameData.setBonusScript(t);
var n = this.node.addComponent("Alexander_Map");
n.Init();
cc.vv.gameData.setMapScript(n);
var i = this.node.addComponent("Alexander_FreeGame");
i.Init();
cc.vv.gameData.setFreeScript(i);
var a = this.node.addComponent("Alexander_StoreGame");
a.Init();
cc.vv.gameData.setStoreScript(a);
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
Alexander_Map: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "778e3CuJhdIDJ43J+Ua1KId", "Alexander_Map");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
_rtype: 2,
_itemList: [],
_canClick: !1
},
start: function() {},
onEnable: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
Init: function() {
this._node_map = cc.find("safe_node/node_map", this.node);
this._node_map.active = !1;
this._spr_road1 = cc.find("node_road/spr_road1", this._node_map);
this._spr_road2 = cc.find("node_road/spr_road2", this._node_map);
this._node_road1 = cc.find("node_road/spine_road1", this._node_map);
this._node_road2 = cc.find("node_road/spine_road2", this._node_map);
this._node_road1.active = !1;
this._node_road2.active = !1;
for (var e = 1; e <= 38; e++) {
var t = cc.find("node_items/item" + e, this._node_map);
this._itemList.push(t);
}
this._lbl_free_cnt = cc.find("node_freeCnt/lbl", this._node_map);
this._par_freeCnt = cc.find("node_freeCnt/par", this._node_map);
this._par_freeCnt.active = !1;
this._node_freeType = cc.find("node_freeType", this._node_map);
this._par_freeType = cc.find("node_freeType/par", this._node_map);
this._par_freeType.active = !1;
this._spine_dog = cc.find("node_items/spine_dog", this._node_map);
this._btn_sz = cc.find("btn_sz", this._node_map);
this._btn_sz.off("click");
Global.btnClickEvent(this._btn_sz, this.clickSzBtn, this);
this._spine_sz = cc.find("spine_sz", this._btn_sz);
this._sz_tip = cc.find("spine_tip", this._btn_sz);
this._par_win = cc.find("safe_node/map_par_win", this.node);
this._par_win.active = !1;
this._btn_entrance = cc.find("btn_entrance", this._node_map);
this._spine_fei = cc.find("spine_fei_zz", this._node_map);
this._spine_fei.active = !1;
},
showMapGame: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playBgm("map_bgm");
e._node_map.active = !0;
e._mapGame = cc.vv.gameData.getMapGame();
e._curStep = e._mapGame.currStep;
e.initMapItem();
e.initRoads();
e.initDog();
e.setFreeCnt();
e.initFreeType();
e.initWinCoin();
e.initSzBtn();
e.updatePawNum();
cc.vv.gameData.GetBottomScript().SetWin(e._mapGame.winCoin);
t.next = 15;
return cc.vv.gameData.awaitTime(1);

case 15:
e.setCanClick(!0);
e._mapSuccess = n;

case 17:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
endMapGame: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("map_end");
t.next = 3;
return cc.vv.gameData.awaitTime(.8);

case 3:
cc.vv.gameData.SetTotalFree(e._mapGame.freeCnt);
cc.vv.gameData.SetFreeTime(e._mapGame.freeCnt);
cc.vv.gameData.setFreeAddRow(e._mapGame.extraRow);
cc.vv.gameData.setFreeSlotsCnt(e._mapGame.slotCnt);
cc.vv.gameData.setFreeWildCols(e._mapGame.wildCols);
t.next = 10;
return cc.vv.gameData.getPopupScript().playTriFreeAnim();

case 10:
cc.vv.gameData.getPopupScript().playQPAnim1();
t.next = 13;
return cc.vv.gameData.awaitTime(.5);

case 13:
cc.vv.gameData.GetBottomScript().ShowFreeModel(!0, 0, e._mapGame.freeCnt);
t.next = 16;
return cc.vv.gameData.getFreeScript().initShowSlotsData(!0);

case 16:
if (e._mapSuccess) {
e._node_map.active = !1;
e._mapSuccess();
e._mapSuccess = null;
}

case 17:
case "end":
return t.stop();
}
}, t);
}))();
},
hideMapNode: function() {
this._node_map.active = !1;
},
setCanClick: function(e) {
this._canClick = e;
},
initMapItem: function() {
for (var e = this._mapGame.hisSteps, t = 0; t < this._itemList.length; t++) {
this._itemList[t].opacity = 255;
this._itemList[t].active = !e.includes(t + 1);
cc.find("spr", this._itemList[t]) && (cc.find("spr", this._itemList[t]).active = !0);
}
},
initRoads: function() {
var e = this._mapGame.jumpSteps;
if (e.includes(29)) {
this._node_road1.active = !0;
this._node_road1.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
this._spr_road1.active = !1;
} else {
this._node_road1.active = !1;
this._spr_road1.active = !0;
}
if (e.includes(21)) {
this._node_road2.active = !0;
this._node_road2.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
this._spr_road2.active = !1;
} else {
this._node_road2.active = !1;
this._spr_road2.active = !0;
}
},
initDog: function() {
this._spine_dog.position = this._itemList[this._curStep - 1].position;
this._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
},
setFreeCnt: function() {
this._lbl_free_cnt.getComponent(cc.Label).string = this._mapGame.freeCnt;
},
initFreeType: function() {
this._slotCnt = this._mapGame.slotCnt;
this._extraRow = this._mapGame.extraRow;
this._wildCols = this._mapGame.wildCols;
var e = cc.vv.gameData.GetAtlasByName("map");
this._node_freeType.setScale([ 1, .8, .6, .6 ][this._slotCnt - 1]);
for (var t = [], n = 1; n <= 4; n++) {
var i = cc.find("slots_" + n, this._node_freeType);
if (n > this._slotCnt) i.active = !1; else {
i.active = !0;
cc.find("row", i).getComponent(cc.Sprite).spriteFrame = e.getSpriteFrame(this._extraRow ? "theme128_map_3" : "theme128_map_6");
for (var a = 1; a <= 5; a++) {
cc.find("wild_" + a, i).active = this._wildCols.includes(a);
cc.find("wild_" + a, i).getComponent(cc.Sprite).spriteFrame = e.getSpriteFrame(this._extraRow ? "theme128_map_2" : "theme128_map_4");
}
t.push(i);
}
}
var o = cc.find("row", t[0]).width / 2, s = cc.find("row", t[0]).height / 2;
if (1 == t.length) t[0].position = cc.v2(0, 0); else if (2 == t.length) {
t[0].position = cc.v2(0, s);
t[1].position = cc.v2(0, -s);
} else if (3 == t.length) {
t[0].position = cc.v2(0, s);
t[1].position = cc.v2(-o, -s);
t[2].position = cc.v2(o, -s);
} else if (4 == t.length) {
t[0].position = cc.v2(-o, s);
t[1].position = cc.v2(o, s);
t[2].position = cc.v2(-o, -s);
t[3].position = cc.v2(o, -s);
}
},
initWinCoin: function() {
this._mapGame.winCoin > 0 && cc.vv.gameData.GetBottomScript().SetWin(this._mapGame.winCoin);
},
initSzBtn: function() {
this._diceId = 6;
this._spine_sz.getComponent(sp.Skeleton).setSkin("default");
this._spine_sz.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
this._sz_tip.active = !1;
this.playSzIdleAnim(!0);
},
updatePawNum: function(e) {
var t = cc.vv.gameData.getPawStore();
if (e) {
t.pawCnt += e;
cc.vv.gameData.setPawStore(t);
cc.vv.gameData.getStoreScript().updateCurMoney();
var n = cc.find("spine_fz", this._btn_entrance);
n.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
n.getComponent(sp.Skeleton).addAnimation(0, "animation4", !0);
}
cc.find("lbl_money", this._btn_entrance).getComponent(cc.Label).string = Global.FormatNumToComma(t.pawCnt);
},
playSzIdleAnim: function(e) {
var t = this;
if (e) cc.tween(this._sz_tip).delay(3).call(function() {
t._sz_tip.active = !0;
t._sz_tip.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
t._sz_tip.getComponent(sp.Skeleton).addAnimation(0, "animation2", !0);
}).start(); else {
this._sz_tip.stopAllActions();
if (this._sz_tip.active) {
var n = this._sz_tip.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
this._sz_tip.getComponent(sp.Skeleton).setTrackCompleteListener(n, function() {
t._sz_tip.active = !1;
});
}
}
},
clickSzBtn: function() {
if (this._canClick) {
this.setCanClick(!1);
this.onSendSeq();
}
},
onSendSeq: function() {
var e = {
c: MsgId.SLOT_SUBGAME_DATA
};
e.gameid = cc.vv.gameData.getGameId();
e.data = {
rtype: this._rtype
};
cc.vv.NetManager.send(e, !0);
},
onRcvSubGameAction: function(e) {
cc.log(e);
if (200 === e.code && e.data && e.data.rtype == this._rtype) {
this._mapGame = e.data.mapGame;
this._diceInfo = e.data.diceInfo;
this.showClickResult();
}
},
showClickResult: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._diceId = e._diceInfo.diceId;
e._step = e._diceInfo.step;
e._addCoin = e._diceInfo.addCoin;
e._addFreeCnt = e._diceInfo.addFreeCnt;
e._addReel = e._diceInfo.addReel;
e._addRow = e._diceInfo.addRow;
e._addWildCol = e._diceInfo.addWildCol;
e._pawCnt = e._diceInfo.pawCnt;
e._isEnd = e._diceInfo.isEnd;
n = e._mapGame.currStep;
e.playSzIdleAnim(!1);
t.next = 13;
return e.playSzAnim();

case 13:
t.next = 15;
return cc.vv.gameData.awaitTime(.5);

case 15:
if (!(e._step && e._step > 0)) {
t.next = 34;
break;
}
t.next = 18;
return e.playDogMove1();

case 18:
if (n != e._curStep) if (e._addReel > 0 || e._addWildCol > 0) ; else {
e._addCoin = e._addCoin / 2;
e._mapGame.winCoin -= e._addCoin;
}
if (!(e._addCoin && e._addCoin > 0)) {
t.next = 24;
break;
}
t.next = 22;
return e.playWinCoin();

case 22:
t.next = 32;
break;

case 24:
if (!(e._addFreeCnt > 0)) {
t.next = 29;
break;
}
t.next = 27;
return e.playWinFreeCnt();

case 27:
t.next = 32;
break;

case 29:
if (!(e._addReel > 0 || e._addRow > 0 || e._addWildCol > 0)) {
t.next = 32;
break;
}
t.next = 32;
return e.playWinSlots();

case 32:
t.next = 41;
break;

case 34:
if (!(e._pawCnt && e._pawCnt > 0)) {
t.next = 41;
break;
}
Global.SlotsSoundMgr.playEffect("fly2");
e._spine_fei.active = !0;
e._spine_fei.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
t.next = 40;
return cc.vv.gameData.awaitTime(.5);

case 40:
e.updatePawNum(e._pawCnt);

case 41:
if (n == e._curStep) {
t.next = 52;
break;
}
t.next = 44;
return e.playDogMove2(n);

case 44:
if (!(e._addReel > 0 || e._addWildCol > 0)) {
t.next = 49;
break;
}
t.next = 47;
return e.playWinSlots();

case 47:
t.next = 52;
break;

case 49:
e._mapGame.winCoin += e._addCoin;
t.next = 52;
return e.playWinCoin();

case 52:
if (e._isEnd) e.endMapGame(); else {
e.setCanClick(!0);
e.playSzIdleAnim(!0);
}

case 53:
case "end":
return t.stop();
}
}, t);
}))();
},
playSzAnim: function() {
var e = this;
return new Promise(function(t, n) {
Global.SlotsSoundMgr.playEffect("dice_spin");
var i = e._diceId > 6 ? 100 * (e._diceId - 6) : e._diceId;
e._spine_sz.getComponent(sp.Skeleton).setSkin("sz" + i);
e._spine_sz.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
e._spine_sz.getComponent(sp.Skeleton).setCompleteListener(function() {
Global.SlotsSoundMgr.playEffect("dice_stop");
t();
});
});
},
playDogMove1: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a, o;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = 0;

case 1:
if (!(a < e._step)) {
t.next = 15;
break;
}
Global.SlotsSoundMgr.playEffect("dog1");
e._curStep += 1;
cc.log("this._curStep", e._curStep);
e._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
o = cc.v2(e._itemList[e._curStep - 1].x, e._itemList[e._curStep - 1].y - 20);
cc.tween(e._spine_dog).to(.5, {
position: o
}).start();
t.next = 10;
return cc.vv.gameData.awaitTime(.7);

case 10:
if (!(e._curStep >= e._itemList.length)) {
t.next = 12;
break;
}
return t.abrupt("break", 15);

case 12:
a++;
t.next = 1;
break;

case 15:
e._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
n();

case 17:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playDogMove2: function(e) {
var t = this;
return new Promise(function() {
var n = a(regeneratorRuntime.mark(function n(i, a) {
var o, s, c;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect("dog2");
t._curStep = e;
t._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
o = t._spine_dog.position;
s = cc.v2(t._itemList[e - 1].position.x, t._itemList[e - 1].position.y - 20);
if (6 != e) {
n.next = 15;
break;
}
c = cc.v2(o.x - 100, o.y - 100);
cc.tween(t._spine_dog).bezierTo(.8, o, c, s).start();
n.next = 10;
return cc.vv.gameData.awaitTime(.8);

case 10:
t._node_road1.active = !0;
t._node_road1.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
t._spr_road1.active = !1;
n.next = 21;
break;

case 15:
cc.tween(t._spine_dog).to(.8, {
position: s
}).start();
n.next = 18;
return cc.vv.gameData.awaitTime(.8);

case 18:
t._node_road2.active = !0;
t._node_road2.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
t._spr_road2.active = !1;

case 21:
t._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
i();

case 23:
case "end":
return n.stop();
}
}, n);
}));
return function(e, t) {
return n.apply(this, arguments);
};
}());
},
playWinCoin: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a, o, s;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("coin");
e._par_win.active = !0;
e._par_win.getComponent(cc.ParticleSystem).resetSystem();
e._par_win.position = e._par_win.parent.convertToNodeSpaceAR(e._itemList[e._curStep - 1].convertToWorldSpaceAR(cc.v2(0, 0)));
(a = cc.find("lbl", e._par_win)).active = !0;
a.setScale(1);
a.getComponent(cc.Label).string = Global.formatNumShort(e._addCoin, 1);
t.next = 10;
return cc.vv.gameData.awaitTime(1);

case 10:
o = cc.find("safe_node/LMSlots_Bottom/winBg/lbl_winNum_nor", e.node);
s = e._par_win.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)));
cc.tween(a).to(.5, {
scale: .2
}).start();
cc.tween(e._par_win).to(.5, {
position: s
}).start();
t.next = 16;
return cc.vv.gameData.awaitTime(.5);

case 16:
e._par_win.active = !1;
cc.vv.gameData.GetBottomScript().SetWin(e._mapGame.winCoin);
n();

case 19:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playWinFreeCnt: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a, o, s, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("fly4");
e._par_win.active = !0;
e._par_win.getComponent(cc.ParticleSystem).resetSystem();
cc.find("lbl", e._par_win).active = !1;
a = e._itemList[e._curStep - 1];
(o = cc.find("spr", a)).active = !1;
(s = cc.instantiate(o)).parent = e._par_win;
s.active = !0;
e._par_win.position = e._par_win.parent.convertToNodeSpaceAR(a.convertToWorldSpaceAR(cc.v2(0, 0)));
c = e._par_win.parent.convertToNodeSpaceAR(e._lbl_free_cnt.convertToWorldSpaceAR(cc.v2(0, 0)));
cc.tween(e._par_win).to(.5, {
position: c
}).start();
cc.tween(a).to(.5, {
opacity: 0
}).start();
t.next = 16;
return cc.vv.gameData.awaitTime(.5);

case 16:
s.destroy();
e._par_win.active = !1;
e._par_freeCnt.active = !0;
e._par_freeCnt.getComponent(cc.ParticleSystem).resetSystem();
e.setFreeCnt();
n();

case 22:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playWinSlots: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a, o, s, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("fly3");
e._par_win.active = !0;
e._par_win.getComponent(cc.ParticleSystem).resetSystem();
cc.find("lbl", e._par_win).active = !1;
a = e._itemList[e._curStep - 1];
(o = cc.find("spr", a)).active = !1;
(s = cc.instantiate(o)).parent = e._par_win;
s.active = !0;
e._par_win.position = e._par_win.parent.convertToNodeSpaceAR(a.convertToWorldSpaceAR(cc.v2(0, 0)));
c = e._par_win.parent.convertToNodeSpaceAR(e._node_freeType.convertToWorldSpaceAR(cc.v2(0, 0)));
cc.tween(e._par_win).to(.5, {
position: c
}).start();
cc.tween(a).to(.5, {
opacity: 0
}).start();
t.next = 16;
return cc.vv.gameData.awaitTime(.5);

case 16:
s.destroy();
e._par_win.active = !1;
e._par_freeType.active = !0;
e._par_freeType.getComponent(cc.ParticleSystem).resetSystem();
e.initFreeType();
n();

case 22:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
}
});
cc._RF.pop();
}, {} ],
Alexander_Popup: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7a16dXNbYlCcJS4pOjcRfrX", "Alexander_Popup");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
Init: function() {
this._node_popup = cc.find("safe_node/node_popup", this.node);
this._node_popup.active = !1;
this._node_tri_bonus = cc.find("node_tri_bonus", this._node_popup);
this._node_tri_map = cc.find("node_tri_map", this._node_popup);
this._node_tri_free = cc.find("node_tri_free", this._node_popup);
this._node_end_free = cc.find("node_end_free", this._node_popup);
this._node_tri_superFree = cc.find("node_tri_superFree", this._node_popup);
this._node_unlock_page = cc.find("node_unlock_page", this._node_popup);
this._node_tri_bonus_again = cc.find("node_tri_bonus_again", this._node_popup);
this._node_tri_bonus.active = !1;
this._node_tri_map.active = !1;
this._node_tri_free.active = !1;
this._node_end_free.active = !1;
this._node_tri_superFree.active = !1;
this._node_unlock_page.active = !1;
this._node_tri_bonus_again.active = !1;
this._node_qp = cc.find("safe_node/node_qp", this.node);
this._node_qp.active = !1;
this._qieping_1 = cc.find("qieping_01", this._node_qp);
this._qieping_2 = cc.find("qieping_02", this._node_qp);
this._qieping_3 = cc.find("qieping_03", this._node_qp);
this._qieping_1.active = !1;
this._qieping_2.active = !1;
this._qieping_3.active = !1;
},
playTriBonusAnim: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("normal_dialog_show4");
e._node_popup.active = !0;
e._node_tri_bonus.active = !0;
e._node_tri_bonus.setScale(0);
cc.tween(e._node_tri_bonus).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t.next = 7;
return cc.vv.gameData.awaitTime(2);

case 7:
cc.tween(e._node_tri_bonus).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
t.next = 10;
return cc.vv.gameData.awaitTime(.5);

case 10:
e._node_tri_bonus.active = !1;
e._node_popup.active = !1;
n();

case 13:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playTriMapAnim: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("map_dialog");
e._node_popup.active = !0;
e._node_tri_map.active = !0;
e._node_tri_map.setScale(0);
cc.tween(e._node_tri_map).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t.next = 7;
return cc.vv.gameData.awaitTime(2);

case 7:
cc.tween(e._node_tri_map).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
t.next = 10;
return cc.vv.gameData.awaitTime(.5);

case 10:
e._node_tri_map.active = !1;
e._node_popup.active = !1;
n();

case 13:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playTriFreeAnim: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var o, s, c, r, _, p, l, u, m, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("fg_dialog");
e._node_popup.active = !0;
e._node_tri_free.active = !0;
e._node_tri_free.setScale(0);
cc.tween(e._node_tri_free).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
o = cc.vv.gameData.GetTotalFree();
s = cc.vv.gameData.getFreeAddRow();
c = cc.vv.gameData.getFreeSlotsCnt();
r = cc.vv.gameData.getFreeWildCols();
_ = cc.vv.gameData.GetAtlasByName("map");
p = cc.vv.gameData.GetAtlasByName("dialog");
cc.find("lbl_cnt", e._node_tri_free).getComponent(cc.Label).string = o;
cc.find("spr_map", e._node_tri_free).getComponent(cc.Sprite).spriteFrame = _.getSpriteFrame(s ? "theme128_map_3" : "theme128_map_6");
for (l = 1; l <= 5; l++) {
cc.find("spr_map/wild_" + l, e._node_tri_free).active = r.includes(l);
cc.find("spr_map/wild_" + l, e._node_tri_free).getComponent(cc.Sprite).spriteFrame = _.getSpriteFrame(s ? "theme128_map_2" : "theme128_map_4");
}
cc.find("spr_cnt", e._node_tri_free).getComponent(cc.Sprite).spriteFrame = p.getSpriteFrame("theme128_popup_free_cnt" + c);
t.next = 17;
return cc.vv.gameData.awaitTime(.5);

case 17:
(u = cc.find("bg_btn/btn_start", e._node_tri_free)).off("click");
u.getComponent(cc.Button).interactable = !0;
m = e;
d = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("click1");
Global.SlotsSoundMgr.playEffect("normal_dialog_close");
u.getComponent(cc.Button).interactable = !1;
cc.tween(m._node_tri_free).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 6;
return cc.vv.gameData.awaitTime(.5);

case 6:
m._node_popup.active = !1;
m._node_tri_free.active = !1;
n();

case 9:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(u, d);
u.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
u.stopAllActions();
d();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 24:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playEndFreeAnim: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var o, s, c, r, _;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("normal_dialog_show2");
e._node_popup.active = !0;
e._node_end_free.active = !0;
e._node_end_free.setScale(0);
cc.tween(e._node_end_free).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
o = cc.vv.gameData.getFreeWinCoin();
s = cc.find("spr_tiao/lbl_cnt", e._node_end_free);
Global.doRoallNumEff(s, 0, o, 1.5, null, null, 0, !0);
t.next = 10;
return cc.vv.gameData.awaitTime(.5);

case 10:
(c = cc.find("bg_btn/btn_collect", e._node_end_free)).off("click");
c.getComponent(cc.Button).interactable = !0;
r = e;
_ = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("click1");
c.getComponent(cc.Button).interactable = !1;
if (Global.FormatCommaNumToNum(s.getComponent(cc.Label).string) == o) {
e.next = 7;
break;
}
s.stopAllActions();
s.getComponent(cc.Label).string = Global.FormatNumToComma(o);
e.next = 7;
return cc.vv.gameData.awaitTime(.3);

case 7:
cc.tween(r._node_end_free).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 10;
return cc.vv.gameData.awaitTime(.5);

case 10:
r._node_popup.active = !1;
r._node_end_free.active = !1;
n();

case 13:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, _);
c.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
_();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 17:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playTriSuperFreeAnim: function(e, t) {
var n = this;
return new Promise(function() {
var i = a(regeneratorRuntime.mark(function i(o, s) {
var c, r, _, p;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
Global.SlotsSoundMgr.playEffect("normal_dialog_show1");
n._node_popup.active = !0;
n._node_tri_superFree.active = !0;
n._node_tri_superFree.setScale(0);
cc.tween(n._node_tri_superFree).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
c = cc.vv.gameData.GetAtlasByName("claw_store");
cc.find("lbl_cnt", n._node_tri_superFree).getComponent(cc.Label).string = e;
cc.find("spr_type", n._node_tri_superFree).getComponent(cc.Sprite).spriteFrame = c.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", t));
cc.find("spr_type/spr", n._node_tri_superFree).getComponent(cc.Sprite).spriteFrame = c.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s_0", t));
i.next = 11;
return cc.vv.gameData.awaitTime(.5);

case 11:
(r = cc.find("bg_btn/btn_start", n._node_tri_superFree)).off("click");
r.getComponent(cc.Button).interactable = !0;
_ = n;
p = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("click1");
r.getComponent(cc.Button).interactable = !1;
cc.tween(_._node_tri_superFree).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
_._node_popup.active = !1;
_._node_tri_superFree.active = !1;
o();

case 8:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(r, p);
r.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
r.stopAllActions();
p();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 18:
case "end":
return i.stop();
}
}, i);
}));
return function(e, t) {
return i.apply(this, arguments);
};
}());
},
playUnlockPageAnim: function(e, t) {
var n = this;
return new Promise(function() {
var e = a(regeneratorRuntime.mark(function e(i, o) {
var s, c, r, _, p;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("normal_dialog_show3");
n._node_popup.active = !0;
n._node_unlock_page.active = !0;
n._node_unlock_page.setScale(0);
cc.tween(n._node_unlock_page).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
s = cc.find("node_normal", n._node_unlock_page);
c = cc.find("node_all", n._node_unlock_page);
s.active = t < 4;
c.active = 4 == t;
e.next = 11;
return cc.vv.gameData.awaitTime(.5);

case 11:
(r = cc.find("bg_btn/btn_start", n._node_unlock_page)).off("click");
r.getComponent(cc.Button).interactable = !0;
_ = n;
p = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("click1");
r.getComponent(cc.Button).interactable = !1;
cc.tween(_._node_unlock_page).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
_._node_popup.active = !1;
_._node_unlock_page.active = !1;
i();

case 8:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(r, p);
r.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
r.stopAllActions();
p();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 18:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}());
},
playBonusAgainAnim: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var o, s, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("normal_dialog_show5");
e._node_popup.active = !0;
e._node_tri_bonus_again.active = !0;
e._node_tri_bonus_again.setScale(0);
cc.tween(e._node_tri_bonus_again).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t.next = 7;
return cc.vv.gameData.awaitTime(.5);

case 7:
(o = cc.find("btn_start", e._node_tri_bonus_again)).off("click");
o.getComponent(cc.Button).interactable = !0;
s = e;
c = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("click1");
o.getComponent(cc.Button).interactable = !1;
cc.tween(s._node_tri_bonus_again).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
s._node_popup.active = !1;
s._node_tri_bonus_again.active = !1;
n();

case 8:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(o, c);
o.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
o.stopAllActions();
c();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 14:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
playQPAnim1: function() {
Global.SlotsSoundMgr.playEffect("transition1");
var e = this;
this._node_qp.active = !0;
this._qieping_1.active = !0;
this._qieping_1.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
this._qieping_1.getComponent(sp.Skeleton).setCompleteListener(function() {
e._node_qp.active = !1;
e._qieping_1.active = !1;
});
},
playQPAnim2: function() {
Global.SlotsSoundMgr.playEffect("transition2");
var e = this;
this._node_qp.active = !0;
this._qieping_2.active = !0;
this._qieping_2.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
this._qieping_2.getComponent(sp.Skeleton).setCompleteListener(function() {
e._node_qp.active = !1;
e._qieping_2.active = !1;
});
},
playQPAnim3: function() {
Global.SlotsSoundMgr.playEffect("transition2");
var e = this;
this._node_qp.active = !0;
this._qieping_3.active = !0;
this._qieping_3.getComponent(sp.Skeleton).setAnimation(0, "skill", !1);
this._qieping_3.getComponent(sp.Skeleton).setCompleteListener(function() {
e._node_qp.active = !1;
e._qieping_3.active = !1;
});
}
});
cc._RF.pop();
}, {} ],
Alexander_Reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3b8e5E78qdA+7IdMuf9IAHZ", "Alexander_Reel");
function i(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = a(e))) {
var t = 0, n = function() {};
return {
s: n,
n: function() {
return t >= e.length ? {
done: !0
} : {
done: !1,
value: e[t++]
};
},
e: function(e) {
throw e;
},
f: n
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, o, s = !0, c = !1;
return {
s: function() {
i = e[Symbol.iterator]();
},
n: function() {
var e = i.next();
s = e.done;
return e;
},
e: function(e) {
c = !0;
o = e;
},
f: function() {
try {
s || null == i.return || i.return();
} finally {
if (c) throw o;
}
}
};
}
function a(e, t) {
if (e) {
if ("string" == typeof e) return o(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
}
}
function o(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
return i;
}
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
start: function() {},
playReelStop: function() {
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) {
var t, n = this._symbols[e], a = i(this._reelState);
try {
for (a.s(); !(t = a.n()).done; ) {
var o = t.value;
o.isStop && o.id.includes(n.GetShowId()) && n.playStopAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
var s, c = "", r = "", _ = !1, p = i(this._reelState);
try {
for (p.s(); !(s = p.n()).done; ) {
var l = s.value;
if (l.noEff) {
r = "";
_ = !0;
} else if (l.isStop) {
r = l.symbolStopSound ? l.symbolStopSound : "";
_ = !0;
} else c = l.reelStopSound ? l.reelStopSound : "";
}
} catch (e) {
p.e(e);
} finally {
p.f();
}
_ && (c = r);
var u = this._cfg.reelStateInfo[0].path;
u || (u = cc.vv.gameData.getGameDir());
"" != c && cc.vv.AudioManager.playEff(u, c, !0);
}
},
ShowAntiEffect: function(e, t) {
var n = cc.find("Canvas/safe_node/slots/anti");
if (0 == e) {
if (this._cfg.reelStateInfo) {
var a, o = i(this._cfg.reelStateInfo);
try {
for (o.s(); !(a = o.n()).done; ) {
var s = a.value, c = cc.find(cc.js.formatStr("%s_%s", s.antiNode, this._reelIdx + 1), n);
if (c && c.active) {
c.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(s.antSound);
}
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
}
} else {
var r = cc.find(cc.js.formatStr("%s_%s", t, this._reelIdx + 1), n);
r ? r.active = e : cc.log("未找到加速节点：mask/node_anti");
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Alexander_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "920a6epRZpHipAmXmIVpDUm", "Alexander_Slots");
function i(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = a(e))) {
var t = 0, n = function() {};
return {
s: n,
n: function() {
return t >= e.length ? {
done: !0
} : {
done: !1,
value: e[t++]
};
},
e: function(e) {
throw e;
},
f: n
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, o, s = !0, c = !1;
return {
s: function() {
i = e[Symbol.iterator]();
},
n: function() {
var e = i.next();
s = e.done;
return e;
},
e: function(e) {
c = !0;
o = e;
},
f: function() {
try {
s || null == i.return || i.return();
} finally {
if (c) throw o;
}
}
};
}
function a(e, t) {
if (e) {
if ("string" == typeof e) return o(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
}
}
function o(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
return i;
}
function s(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var o = e.apply(t, n);
function c(e) {
s(o, i, a, c, r, "next", e);
}
function r(e) {
s(o, i, a, c, r, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {},
start: function() {},
Init: function() {
this._btn_entrance = cc.find("btn_entrance", this.node);
this._spr_bonusType = cc.find("spr_bonusCnt", this.node);
Global.btnClickEvent(this._spr_bonusType, this.onclickBonusType, this);
this._normalSpine = cc.find("reels/spine", this.node);
this._normalSpine.on("click", this.slotsSpine, this);
this._normalSpine.getComponent(cc.Button).interactable = !1;
this._stopNode = cc.find("reels/stop", this.node);
this._stopNode.active = !1;
this._stopNode.on("click", this.onStop, this);
this._super();
this.showBonusType();
},
RegisterEvent: function() {
this._super();
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
},
ReconnectShow: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._topScript.SetBackLobby(!1);
e._bottomScript.ShowBtnsByState("moveing_1");
if (!cc.vv.gameData.getEpicInfo()) {
t.next = 21;
break;
}
e.showBonusGameView(!0);
e.Backup();
e.setAllSymbolMask(!0);
e.initBonusSymbol();
e._bottomScript.SetWin(0);
t.next = 11;
return cc.vv.gameData.getBonusScript().enterBonusGame();

case 11:
cc.vv.gameData.getPopupScript().playQPAnim2();
t.next = 14;
return cc.vv.gameData.awaitTime(.7);

case 14:
e.showBonusGameView(!1);
e.Resume();
e.setAllSymbolMask(!1);
t.next = 19;
return cc.vv.gameData.awaitTime(1);

case 19:
t.next = 22;
break;

case 21:
e.showBonusGameView(!1);

case 22:
if (!(cc.vv.gameData.GetTotalFree() > 0)) {
t.next = 26;
break;
}
t.next = 26;
return cc.vv.gameData.getFreeScript().initShowSlotsData(!1);

case 26:
if (!(n = cc.vv.gameData.getMapGame()) || 1 != n.state) {
t.next = 30;
break;
}
t.next = 30;
return cc.vv.gameData.getMapScript().showMapGame();

case 30:
e._topScript.StopMove();
e._bottomScript.CanDoNextRound();

case 32:
case "end":
return t.stop();
}
}, t);
}))();
},
initBonusSymbol: function() {
var e = this, t = cc.vv.gameData.getBonusIdxs(), n = cc.vv.gameData.getBonusItems();
t.forEach(function(i) {
e._reels[i - 1].GetSymbolByRow(0).ShowById(3, n[t.indexOf(i)]);
e._reels[i - 1].GetSymbolByRow(0).playBonusIdleAnim();
});
},
slotsSpine: function() {
this._bottomScript.OnClickSpin();
},
onStop: function() {
this._stopNode.active = !1;
this._bottomScript.OnClickStop();
},
setStopNodeState: function(e) {
this._stopNode.active = e;
},
CanDoNextRound: function() {
this._super();
this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
},
StartMove: function() {
this._normalSpine.getComponent(cc.Button).interactable = !1;
if (cc.vv.gameData.isBonusGame()) this.bonusStartMove(); else if (cc.vv.gameData.isFreeGame()) cc.vv.gameData.getFreeScript().StartMove(); else {
this._super();
Global.SlotsSoundMgr.playNormalBgm();
this._isSpinEnd = !1;
}
},
StopMove: function() {
cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().StopMove() : this._super();
},
bonusStartMove: function() {
this._bStopRightnow = null;
this._topScript.StartMove();
cc.vv.gameData.ClearOneRoundData();
this._reelMax = [];
var e = [], t = [], n = cc.vv.gameData.getBonusIdxs();
this._reels.forEach(function(i) {
if (!n.includes(i.GetReelIdx() + 1)) {
e.push(i);
t.push(i.GetReelIdx());
}
});
this.MoveReels(e);
this.setMoveLastIdx(t);
this._stopTime = this.GetStopTime();
},
setMoveLastIdx: function(e) {
var t = e[0], n = [];
e.forEach(function(e) {
(e % 5 > t % 5 || e % 5 == t % 5 && e / 3 > t / 3) && (t = e);
n[e % 5] = n[e % 5] ? Math.max(n[e % 5], e) : e;
});
this.moveReelLastIdx = t;
cc.log("StartMove：this.moveReelLastIdx:", this.moveReelLastIdx);
this._reelMax = n;
cc.log(this._reelMax);
},
getLastStopReel: function() {
return this._reelMax;
},
SetSlotsResult: function(e) {
var t = e.length / this._col, n = [], i = cc.vv.gameData.getBonusIdxs();
Array.isArray(i) || (i = []);
for (var a = cc.vv.gameData.getBonusItems(), o = 0; o < e.length; o++) {
Math.floor(o / t);
var s = o % this._col;
if (this._cfg.symbol[e[o]]) {
var c = {};
c.sid = e[o];
c.data = {};
i && i.includes(o + 1) && (c.data = a[i.indexOf(o + 1)]);
n[s] || (n[s] = []);
n[s].unshift(c);
}
}
for (var r = 0; r < this._reels.length; r++) {
var _ = this._reels[r], p = n[r];
_.SetResult(p);
}
},
SetReelStateInfo: function(e) {
var t = this;
if (this._cfg.reelStateInfo) {
for (var n = [], a = 0; a < e.length; a++) {
var o = e[a], s = a % 5;
n[s] || (n[s] = []);
n[s].push(o);
}
var c, r = i(this._cfg.reelStateInfo);
try {
var _ = function() {
var e = c.value, i = Global.copy(e);
i.isStop = !1;
i.isAnt = !1;
for (var a = i.mini, o = Global.copy(i.counts), s = 0, r = !0, _ = 0; _ < n.length; _++) {
var p = t._reels[_], l = n[_];
i.isStop = !1;
i.isAnt = !1;
s >= a - 1 && i.counts[_] > 0 && r && (i.isAnt = !0);
var u = l.reduce(function(e, t) {
return i.id.includes(t) ? e + 1 : e + 0;
}, 0);
s += u;
o.shift();
var m = (o.length > 0 ? o.reduce(function(e, t) {
return e + t;
}) : 0) + s;
u > 0 && m >= a && r && (i.isStop = !0);
i.continuous && i.counts[_] > 0 && 0 == u && (r = !1);
p.AddReelStateInfo(Global.copy(i));
for (var d = 1; d < 4; d++) {
var f = t._reels[5 * d + _], v = Global.copy(i);
v.isAnt = !1;
v.noEff = !0;
f.AddReelStateInfo(v);
}
}
};
for (r.s(); !(c = r.n()).done; ) _();
} catch (e) {
r.e(e);
} finally {
r.f();
}
}
},
DoCheckReelAnti: function(e) {
if (!this._bStopRightnow) for (var t = !1, n = 0; n < this._reels.length; n++) {
var i = this._reels[n].GetReelIdx();
i == e + 1 && (t = this._reels[n].playAntiAnimation());
if (i % 5 > e % 5 && t) {
var a = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
this._reels[n].AddDelayTime(a);
}
}
},
onMsgSpine: function(e) {
cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().onMsgSpine(e) : this._super(e);
},
OnReelSpinEnd: function(e) {
if (cc.vv.gameData.isBonusGame()) {
if (3 == this._reels[e].GetSymbolByRow(0).GetShowId()) {
this._reels[e].GetSymbolByRow(0).playBonusIdleAnim();
Global.SlotsSoundMgr.playEffect("symbol_coin");
}
e == this._reelMax[e % 5] && Global.SlotsSoundMgr.playEffect("reel_stop");
} else {
var t = this._gameInfo.pawInfo;
if (t && t.totalCnt > 0) for (var n = t.cnts, i = t.idxs, a = 0; a < i.length; a++) if (i[a] == e + 1) {
this._isSpinEnd || this.GetSymbolByIdx(i[a]).showPaw(this.getPawAnimType(n[a]));
break;
}
this._super(e);
}
},
OnSpinEnd: function() {
cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().onBonusSpinEnd() : cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().OnSpinEnd() : this.onSpinEndAction();
},
onSpinEndAction: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, i, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._isSpinEnd = !0;
(n = e._gameInfo.pawInfo) && n.totalCnt > 0 && e.flyPaw();
e.ShowWinTrace();
i = cc.vv.gameData.GetGameWin();
a = i;
cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (a = cc.vv.gameData.getFreeWinCoin());
t.next = 9;
return new Promise(function(t, n) {
e.ShowBottomWin(i, a, !0, t);
});

case 9:
if (!e._gameInfo.epicInfo) {
t.next = 12;
break;
}
t.next = 12;
return e.triBonusGame();

case 12:
if (!e._gameInfo.mapGame) {
t.next = 15;
break;
}
t.next = 15;
return e.triMapGame();

case 15:
e.CanDoNextRound();

case 16:
case "end":
return t.stop();
}
}, t);
}))();
},
initAllSymbol: function() {
for (var e = 0; e < this._reels.length; e++) for (var t = 0; t < this._row; t++) this._reels[e].GetSymbolByRow(t).ClearState();
},
triBonusGame: function() {
var e = this;
return new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, i) {
var a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("trigger_respin");
t.next = 3;
return cc.vv.gameData.awaitTime(.5);

case 3:
t.next = 5;
return cc.vv.gameData.getPopupScript().playTriBonusAnim();

case 5:
cc.vv.gameData.getPopupScript().playQPAnim2();
t.next = 8;
return cc.vv.gameData.awaitTime(.7);

case 8:
e.showBonusGameView(!0);
e.Backup();
e.initAllSymbol();
e.setAllSymbolMask(!0);
e._bottomScript.SetWin(0);
for (a = 0; a < e._gameInfo.bonusIdxs.length; a++) e.GetSymbolByIdx(e._gameInfo.bonusIdxs[a]).playBonusIdleAnim();
t.next = 16;
return cc.vv.gameData.getBonusScript().enterBonusGame();

case 16:
cc.vv.gameData.getPopupScript().playQPAnim2();
t.next = 19;
return cc.vv.gameData.awaitTime(.7);

case 19:
e.showBonusGameView(!1);
e.Resume();
e.setAllSymbolMask(!1);
t.next = 24;
return cc.vv.gameData.awaitTime(1);

case 24:
n();

case 25:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
triMapGame: function() {
var e = this;
return new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, i) {
var a, o, s;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = e._gameInfo.scatterIdxs;
for (o = 0; o < a.length; o++) (s = e.GetSymbolByIdx(a[o])) && s.playTriggerAnimation();
Global.SlotsSoundMgr.playEffect("bell");
Global.SlotsSoundMgr.playEffect("trigger_fg");
t.next = 6;
return cc.vv.gameData.awaitTime(2);

case 6:
t.next = 8;
return cc.vv.gameData.getPopupScript().playTriMapAnim();

case 8:
cc.vv.gameData.getPopupScript().playQPAnim3();
t.next = 11;
return cc.vv.gameData.awaitTime(.7);

case 11:
t.next = 13;
return cc.vv.gameData.getMapScript().showMapGame();

case 13:
n();

case 14:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
GetReelStopInter: function(e) {
return e % 5 * (this._cfg.reelStopInter || .6);
},
showBonusType: function() {
var e = cc.vv.gameData.GetBetIdx(), t = cc.vv.gameData.getNeedBet(), n = cc.find("spr_5", this._spr_bonusType), i = cc.find("spr_6", this._spr_bonusType);
if (e >= t) {
n.active = !0;
i.active = !1;
} else {
n.active = !1;
i.active = !0;
}
},
onclickBonusType: function() {
if (cc.vv.gameData.GetBottomScript().GetSpinBtnState() && !(cc.vv.gameData.GetAutoModelTime() > 0 || cc.vv.gameData.isFreeGame() || cc.vv.gameData.isBonusGame())) {
if (cc.find("spr_6", this._spr_bonusType).active) {
var e = cc.vv.gameData.getNeedBet();
e > cc.vv.gameData.GetBetMults().length || cc.vv.gameData.GetBottomScript().SetBetIdx(e);
}
}
},
onEventTotalbetUpdated: function() {
var e = cc.vv.gameData.GetBetIdx(), t = cc.vv.gameData.getNeedBet(), n = cc.find("spr_5", this._spr_bonusType), i = cc.find("spr_6", this._spr_bonusType);
if (e >= t && i.active) {
Global.SlotsSoundMgr.playEffect("change_dialog");
n.active = !0;
i.active = !1;
cc.tween(n).to(.3, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
} else if (e < t && n.active) {
Global.SlotsSoundMgr.playEffect("change_dialog");
n.active = !1;
i.active = !0;
cc.tween(i).to(.3, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
}
},
flyPaw: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, i, a, o, s, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n = e._gameInfo.pawInfo;
i = n.cnts;
a = n.idxs;
o = cc.find("btn_entrance/node_fly", e.node);
s = function(t) {
var n = cc.instantiate(o);
n.active = !0;
n.parent = o.parent;
var s = e.GetSymbolByIdx(a[t]).getPaw(), c = n.convertToNodeSpaceAR(s.convertToWorldSpaceAR(cc.v2(0, 0))), r = cc.instantiate(s);
r.active = !0;
r.parent = n;
r.position = c;
var _ = cc.js.formatStr("animation%s", e.getPawAnimType(i[t]));
r.getComponent(sp.Skeleton).setAnimation(0, _, !1);
cc.tween(r).to(.5, {
position: cc.v2(-38, 35)
}).start();
var p = cc.find("par_tw", n);
p.position = cc.v2(c.x + 38, c.y - 35);
cc.tween(p).to(.5, {
position: cc.v2(0, 0)
}).start();
cc.tween(n).delay(.5).call(function() {
n.destroy();
}).start();
e.GetSymbolByIdx(a[t]).showPaw();
};
for (c = 0; c < a.length; c++) s(c);
Global.SlotsSoundMgr.playEffect("fly1");
t.next = 9;
return cc.vv.gameData.awaitTime(.5);

case 9:
cc.vv.gameData.getStoreScript().playWinPawAnim();

case 10:
case "end":
return t.stop();
}
}, t);
}))();
},
getPawAnimType: function(e) {
var t = "";
5 === e ? t += 1 : 10 === e ? t += 2 : 15 === e ? t += 3 : 20 === e ? t += 4 : 25 === e ? t += 5 : 30 === e ? t += 6 : 35 === e ? t += 7 : 40 === e ? t += 8 : 50 === e && (t += 9);
return t;
},
setBonusCanStop: function(e) {
this._bonusCanStop = e;
},
CanStopSlot: function() {
var e = null != this._gameInfo;
cc.vv.gameData.isBonusGame() && (e = this._bonusCanStop);
return e;
},
showBonusGameView: function(e) {
cc.vv.gameData.setIsBonusGame(e);
cc.vv.gameData.getStoreScript().showEntranceBtn(!e);
this._spr_bonusType.active = !e;
if (e) {
var t = cc.vv.gameData.getEpicInfo();
this.lockJackpot(t.jackpotValues);
} else {
this.unlockJackpot();
cc.vv.gameData.getBonusScript().showBonusSpins(!1);
}
cc.find("Canvas/safe_node/spr_bg_normal").active = !e;
cc.find("Canvas/safe_node/spr_bg_bonus").active = e;
cc.find("Canvas/safe_node/spine_character").opacity = 255;
},
lockJackpot: function(e) {
cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base").PausePool([ {
prizeType: 0,
pauseNum: e[0]
}, {
prizeType: 1,
pauseNum: e[1]
}, {
prizeType: 2,
pauseNum: e[2]
}, {
prizeType: 3,
pauseNum: e[3]
} ]);
},
unlockJackpot: function() {
cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base").ResumePausePool();
},
setAllSymbolMask: function(e) {
this._reels.forEach(function(t) {
t.GetSymbolByRow(0).setMaskVisible(e);
t.GetSymbolByRow(1).setMaskVisible(e);
});
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Alexander_StoreGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c500bBVMctLEbKMuz0Vno0e", "Alexander_StoreGame");
function i(e, t, n, i, a, o, s) {
try {
var c = e[o](s), r = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(r) : Promise.resolve(r).then(i, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var s = e.apply(t, n);
function c(e) {
i(s, a, o, c, r, "next", e);
}
function r(e) {
i(s, a, o, c, r, "throw", e);
}
c(void 0);
});
};
}
var o = 1, s = 2, c = 3, r = 4, _ = 5, p = 6;
cc.Class({
extends: cc.Component,
properties: {
_rtype: 1,
_itemList: []
},
start: function() {},
Init: function() {
this._btn_entrance = cc.find("safe_node/slots/btn_entrance", this.node);
this._btn_entrance.off("click");
Global.btnClickEvent(this._btn_entrance, this.onClickEntranceBtn, this);
this._node_store = cc.find("safe_node/node_store", this.node);
this._node_store.active = !1;
this._btn_close = cc.find("layout/btn_close", this._node_store);
Global.btnClickEvent(this._btn_close, this.onClickCloseBtn, this);
this._node_items = cc.find("layout/node_items", this._node_store);
for (var e = 1; e <= 9; e++) {
var t = cc.find("item" + e, this._node_items);
t.off("click");
Global.btnClickEvent(t, this.onClickItem, this);
this._itemList[e] = {
node: t,
type: 1,
data: null
};
}
this._spine_dianliang = cc.find("layout/spine_dianliang", this._node_store);
this._spine_dianliang.active = !1;
this._box_tip = cc.find("layout/box_tip", this._node_store);
this._box_tip.active = !1;
this._spr_tip = cc.find("layout/spr_tip", this._node_store);
this._spr_tip.active = !1;
var n = cc.find("layout/btn_tip", this._node_store);
Global.btnClickEvent(n, this.clickHelpBtn, this);
var i = cc.find("layout/btn_left", this._node_store);
Global.btnClickEvent(i, this.clickLeftBtn, this);
var a = cc.find("layout/btn_right", this._node_store);
Global.btnClickEvent(a, this.clickRightBtn, this);
this._pawStore = cc.vv.gameData.getPawStore();
this.initEntranceBtn();
this.updateCurMoney();
},
onEnable: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
onClickEntranceBtn: function() {
if (cc.vv.gameData.GetBottomScript().GetSpinBtnState() && !(cc.vv.gameData.GetAutoModelTime() > 0 || cc.vv.gameData.isFreeGame() || cc.vv.gameData.isBonusGame())) {
Global.SlotsSoundMgr.playEffect("click");
this._btn_entrance.getComponent(cc.Button).interactable = !1;
this.openStorePage();
}
},
initEntranceBtn: function() {
cc.find("spine_fz", this._btn_entrance).getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
cc.find("node_fly", this._btn_entrance).active = !1;
},
showEntranceBtn: function(e) {
this._btn_entrance.active = e;
},
playWinPawAnim: function() {
var e = cc.find("spine_fz", this._btn_entrance);
e.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
e.getComponent(sp.Skeleton).addAnimation(0, "animation2", !0);
this.updateCurMoney();
},
updateCurMoney: function() {
this._pawStore = cc.vv.gameData.getPawStore();
cc.find("lbl_money", this._btn_entrance).getComponent(cc.Label).string = Global.FormatNumToComma(this._pawStore.pawCnt);
cc.find("layout/money_bg/lbl", this._node_store).getComponent(cc.Label).string = Global.FormatNumToComma(this._pawStore.pawCnt);
},
openStorePage: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
e._node_store.active = !0;
e._node_store.opacity = 0;
(a = cc.find("layout", e._node_store)).setScale(0);
cc.tween(e._node_store).to(.5, {
opacity: 255
}).start();
cc.tween(a).to(.5, {
scale: 1
}).start();
e._pawStore = cc.vv.gameData.getPawStore();
e._curPage = e._pawStore.unlockPage;
e.showTitleSpr();
e.showAllItems();
e.showPageFooter();
e.updateCurMoney();
t.next = 15;
return cc.vv.gameData.awaitTime(.5);

case 15:
e._canClickItem = !0;
n();

case 17:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());
},
closeStorePage: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, i) {
var a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = cc.find("layout", e._node_store);
cc.tween(e._node_store).to(.5, {
opacity: 0
}).start();
cc.tween(a).to(.5, {
scale: 0
}).start();
t.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
e._node_store.active = !1;
n();

case 7:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}()));

case 1:
case "end":
return t.stop();
}
}, t);
}))();
},
showTitleSpr: function() {
var e = cc.find("layout/node_tit/tit_unlock", this._node_store), t = cc.find("layout/node_tit/tit_lock", this._node_store);
e.active = this._curPage <= this._pawStore.unlockPage;
t.active = this._curPage > this._pawStore.unlockPage;
var n = cc.vv.gameData.GetAtlasByName("claw_store");
if (this._curPage <= this._pawStore.unlockPage) {
cc.find("spr_tit", e).getComponent(cc.Sprite).spriteFrame = n.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", this._curPage));
cc.find("spr_tit/spr", e).getComponent(cc.Sprite).spriteFrame = n.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s_0", this._curPage));
cc.find("spr_rewards", e).getComponent(cc.Sprite).spriteFrame = n.getSpriteFrame(cc.js.formatStr("theme128_gouwu_qipan_%s", this._curPage));
} else cc.find("spr2", t).getComponent(cc.Sprite).spriteFrame = n.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", this._curPage + 3));
},
showAllItems: function() {
for (var e = this._pawStore.unlockItems[this._curPage - 1], t = this._pawStore.pageDetails[this._curPage - 1].price, n = 1; n <= 9; n++) {
var i = this._itemList[n].node, a = this._itemList[n].type, l = this._itemList[n].type;
if (this._curPage <= this._pawStore.unlockPage) {
var u = this.getItemData(n, e);
if (u) {
if (u.coin > 0) {
a = r;
l = u.coin;
this.setItemState(i, r, u.coin);
} else if (u.epicInfo) {
a = _;
this.setItemState(i, _);
} else if (u.mapGame) {
a = p;
this.setItemState(i, p);
}
} else if (t <= this._pawStore.pawCnt) {
a = s;
l = t;
this.setItemState(i, s, t);
} else {
a = c;
l = t;
this.setItemState(i, c, t);
}
} else {
a = o;
l = t;
this.setItemState(i, o, t);
}
this._itemList[n].type = a;
this._itemList[n].data = l;
}
},
getItemData: function(e, t) {
for (var n = 0; n < t.length; n++) if (e == t[n].idx) return t[n];
return null;
},
setItemState: function(e, t, n) {
var i = cc.find("gw", e), a = cc.find("money_bg", e), l = cc.find("money_bg/lbl", e), u = cc.find("gt", e), m = cc.find("gt/lbl", e), d = cc.find("gt/spr_bonus", e), f = cc.find("gt/spr_map", e), v = cc.find("spine_change", e), h = cc.find("suo", e);
i.active = t === s || t === c || t === o;
t === s ? i.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0) : t !== c && t !== o || i.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
a.active = t === s || t === c || t === o;
a.active && (l.getComponent(cc.Label).string = Global.FormatNumToComma(n));
u.active = t === r || t === _ || t === p;
u.active && u.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
m.active = t === r;
t === r && n && (m.getComponent(cc.Label).string = Global.formatNumShort(n, 1));
d.active = t === _;
f.active = t === p;
v.active = !1;
h.active = t === o;
},
setItemResult: function(e, t) {
var n = this;
return new Promise(function() {
var i = a(regeneratorRuntime.mark(function i(a, o) {
var s, c, l, u, m, d, f, v, h;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
s = n._itemList[e].node;
c = cc.find("gw", s);
l = cc.find("money_bg", s);
cc.find("money_bg/lbl", s);
u = cc.find("gt", s);
m = cc.find("gt/lbl", s);
d = cc.find("gt/spr_bonus", s);
f = cc.find("gt/spr_map", s);
v = cc.find("spine_change", s);
cc.find("suo", s);
v.active = !0;
v.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
c.active = !1;
u.active = !0;
l.active = !1;
u.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
i.next = 18;
return cc.vv.gameData.awaitTime(.5);

case 18:
if (t.coin > 0) {
n._itemList[e].type = r;
m.getComponent(cc.Label).string = Global.formatNumShort(t.coin, 1);
h = m;
} else if (t.epicInfo) {
n._itemList[e].type = _;
h = d;
} else if (t.mapGame) {
n._itemList[e].type = p;
h = f;
}
h.active = !0;
h.setScale(0);
cc.tween(h).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
i.next = 24;
return cc.vv.gameData.awaitTime(.5);

case 24:
a();

case 25:
case "end":
return i.stop();
}
}, i);
}));
return function(e, t) {
return i.apply(this, arguments);
};
}());
},
onClickItem: function(e) {
if (this._canClickItem) {
var t = Number(e.node.name.substring("item".length)), n = this._itemList[t].type;
if (n === o || n === c) this.playBoxTipAnim(e.node); else if (this._itemList[t].type === s) {
Global.SlotsSoundMgr.playEffect("show");
this._canClickItem = !1;
this.onSendSeq(t);
}
}
},
onSendSeq: function(e) {
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.gameid = cc.vv.gameData.getGameId();
t.data = {
rtype: this._rtype,
pageId: this._curPage,
choiceId: e
};
cc.vv.NetManager.send(t, !0);
},
onRcvSubGameAction: function(e) {
var t = e.data;
200 === e.code && t && t.rtype == this._rtype && this.showClickResult(t);
},
showClickResult: function(e) {
var t = this;
return a(regeneratorRuntime.mark(function n() {
var i, a, o, r, _, p, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._pawStore = e.pawStore;
cc.vv.gameData.setPawStore(t._pawStore);
t.updateCurMoney();
i = e.result;
a = e.choiceId;
n.next = 7;
return t.setItemResult(a, i);

case 7:
if (t._pawStore.pageDetails[t._curPage - 1].price > t._pawStore.pawCnt) for (o = 1; o <= 9; o++) if (t._itemList[o].type === s) {
t._itemList[o].type = c;
t.setItemState(t._itemList[o].node, c, t._itemList[o].data);
}
if (i.coin > 0) {
cc.vv.gameData.AddCoin(i.coin);
cc.vv.gameData.GetBottomScript().SetWin(i.coin);
cc.vv.gameData.GetTopScript().ShowCoin();
}
if (!(i.mapGame || i.epicInfo || i.pageReward)) {
n.next = 77;
break;
}
n.next = 12;
return t.closeStorePage();

case 12:
if (!i.mapGame) {
n.next = 23;
break;
}
cc.vv.gameData.setMapGame(i.mapGame);
n.next = 16;
return cc.vv.gameData.getPopupScript().playTriMapAnim();

case 16:
cc.vv.gameData.getPopupScript().playQPAnim3();
n.next = 19;
return cc.vv.gameData.awaitTime(.7);

case 19:
n.next = 21;
return cc.vv.gameData.getMapScript().showMapGame();

case 21:
n.next = 48;
break;

case 23:
if (!i.epicInfo) {
n.next = 48;
break;
}
cc.vv.gameData.setEpicInfo(i.epicInfo);
cc.vv.gameData.setBonusIdxs(i.epicInfo.bonusIdxs);
cc.vv.gameData.setBonusItems(i.epicInfo.bonusItems);
n.next = 29;
return cc.vv.gameData.getPopupScript().playTriBonusAnim();

case 29:
cc.vv.gameData.getPopupScript().playQPAnim2();
n.next = 32;
return cc.vv.gameData.awaitTime(.7);

case 32:
cc.vv.gameData.GetSlotsScript().showBonusGameView(!0);
cc.vv.gameData.GetSlotsScript().Backup();
cc.vv.gameData.GetSlotsScript().initAllSymbol();
cc.vv.gameData.GetSlotsScript().setAllSymbolMask(!0);
cc.vv.gameData.GetBottomScript().SetWin(0);
n.next = 39;
return cc.vv.gameData.getBonusScript().enterBonusGame();

case 39:
cc.vv.gameData.getPopupScript().playQPAnim2();
n.next = 42;
return cc.vv.gameData.awaitTime(.7);

case 42:
cc.vv.gameData.GetSlotsScript().showBonusGameView(!1);
cc.vv.gameData.GetSlotsScript().Resume();
cc.vv.gameData.GetSlotsScript().setAllSymbolMask(!1);
n.next = 47;
return cc.vv.gameData.awaitTime(1);

case 47:
cc.vv.gameData.GetTopScript().StopMove();

case 48:
if (!i.pageReward) {
n.next = 73;
break;
}
r = i.pageReward.freeCnt;
_ = i.pageReward.slotCnt;
p = i.pageReward.wildCols;
l = 1;
cc.vv.gameData.SetTotalFree(r);
cc.vv.gameData.SetFreeTime(r);
cc.vv.gameData.setFreeAddRow(l);
cc.vv.gameData.setFreeSlotsCnt(_);
cc.vv.gameData.setFreeWildCols(p);
Global.SlotsSoundMgr.playEffect("collect_finish");
t._spine_dianliang.active = !0;
t._spine_dianliang.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
n.next = 63;
return t.closeStorePage();

case 63:
n.next = 65;
return cc.vv.gameData.getPopupScript().playTriSuperFreeAnim(r, t._curPage);

case 65:
cc.vv.gameData.getPopupScript().playQPAnim3();
n.next = 68;
return cc.vv.gameData.awaitTime(.7);

case 68:
cc.vv.gameData.GetBottomScript().ShowFreeModel(!0, 0, r);
n.next = 71;
return cc.vv.gameData.getFreeScript().initShowSlotsData(!0, !0);

case 71:
n.next = 73;
return cc.vv.gameData.getPopupScript().playUnlockPageAnim(r, t._curPage);

case 73:
n.next = 75;
return t.openStorePage();

case 75:
n.next = 78;
break;

case 77:
t._canClickItem = !0;

case 78:
case "end":
return n.stop();
}
}, n);
}))();
},
onClickCloseBtn: function() {
Global.SlotsSoundMgr.playEffect("click1");
this.closeStorePage();
this._btn_entrance.getComponent(cc.Button).interactable = !0;
cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
},
playBoxTipAnim: function(e) {
var t = this;
this._box_tip.stopAllActions();
if (this._box_tip.active) this._box_tip.runAction(cc.sequence(cc.scaleTo(this._box_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
t._box_tip.active = !1;
}))); else {
this._box_tip.position = this._box_tip.parent.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(0, 0)));
this._box_tip.active = !0;
this._box_tip.setScale(0);
this._box_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
t._box_tip.active = !1;
})));
}
},
clickHelpBtn: function() {
var e = this;
Global.SlotsSoundMgr.playEffect("click1");
this._spr_tip.stopAllActions();
if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
e._spr_tip.active = !1;
}))); else {
this._spr_tip.active = !0;
this._spr_tip.setScale(0);
this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
e._spr_tip.active = !1;
})));
}
},
clickLeftBtn: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (e._canClickItem) {
t.next = 2;
break;
}
return t.abrupt("return");

case 2:
e._canClickItem = !1;
Global.SlotsSoundMgr.playEffect("click1");
e._curPage <= 1 ? e._curPage = 4 : e._curPage--;
e.refreshDataWithAction(20);
e.showPageFooter();
t.next = 9;
return cc.vv.gameData.awaitTime(1);

case 9:
e._canClickItem = !0;

case 10:
case "end":
return t.stop();
}
}, t);
}))();
},
clickRightBtn: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (e._canClickItem) {
t.next = 2;
break;
}
return t.abrupt("return");

case 2:
e._canClickItem = !1;
Global.SlotsSoundMgr.playEffect("click1");
e._curPage >= 4 ? e._curPage = 1 : e._curPage++;
e.refreshDataWithAction(20);
e.showPageFooter();
t.next = 9;
return cc.vv.gameData.awaitTime(1);

case 9:
e._canClickItem = !0;

case 10:
case "end":
return t.stop();
}
}, t);
}))();
},
refreshDataWithAction: function(e) {
var t = this;
return a(regeneratorRuntime.mark(function n() {
var i, a, o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (0 == e) {
n.next = 11;
break;
}
t._node_items.stopAllActions();
t._node_items.x = 0;
t._node_items.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, e, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -e, 0))));
(i = cc.find("layout/node_tit", t._node_store)).stopAllActions();
i.x = 0;
i.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, e, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -e, 0))));
n.next = 10;
return cc.vv.gameData.awaitTime(.15);

case 10:
t.showTitleSpr();

case 11:
t.showAllItems();
for (a = 1; a <= 9; a++) {
(o = t._itemList[a].node).setScale(.1);
o.stopAllActions();
o.runAction(cc.scaleTo(.1 * a, 1, 1).easing(cc.easeBackOut()));
}

case 13:
case "end":
return n.stop();
}
}, n);
}))();
},
showPageFooter: function() {
for (var e = 1; e <= 4; e++) {
cc.find(cc.js.formatStr("layout/choose_bg/choose%s/choosed", e), this._node_store).active = e === this._curPage;
}
}
});
cc._RF.pop();
}, {} ],
Alexander_Symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "33acerrv9tN94vecwVsNjyZ", "Alexander_Symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
start: function() {},
ClearState: function() {
this.showPaw();
this.setAnimationToTop(!1);
this.ShowKuang(!1);
this.stopWinTweenAction();
this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
},
ShowById: function(e, t) {
this._super(e, t);
this.hideAllIcon();
3 === e && t && (t.coin ? this.setCoin(t.coin) : t.jackpot ? this.showJackPotNode(t.jackpot.id) : t.again && this.showBonusAgain());
cc.vv.gameData.isBonusGame() ? this.setMaskVisible(!0) : this.setMaskVisible(!1);
},
showJackPotNode: function(e) {
this._showNode && (this._showNode.active = !1);
var t = cc.vv.gameData.getGameCfg(), n = this._id;
1 === e && t.symbol[n].mini_node ? this._showNode = cc.find(t.symbol[n].mini_node, this.node) : 2 === e && t.symbol[n].minor_node ? this._showNode = cc.find(t.symbol[n].minor_node, this.node) : 3 === e && t.symbol[n].major_node && (this._showNode = cc.find(t.symbol[n].major_node, this.node));
this._showNode.active = !0;
},
showBonusAgain: function() {
this._showNode && (this._showNode.active = !1);
var e = cc.vv.gameData.getGameCfg(), t = this._id;
e.symbol[t].again_node && (this._showNode = cc.find(e.symbol[t].again_node, this.node));
this._showNode.active = !0;
},
hideAllIcon: function() {
this.setCoin();
this.showPaw();
},
setCoin: function(e) {
var t = cc.find("lbl_coin", this.node);
if (e) {
var n = null;
n = e < 5 * cc.vv.gameData.GetTotalBet() ? cc.vv.gameData.GetFontByName("theme128_font_b_2") : cc.vv.gameData.GetFontByName("theme128_font_b_1");
t.active = !0;
t.getComponent(cc.Label).font = n;
t.getComponent(cc.Label).string = Global.formatNumShort(e, 0);
} else {
t.active = !1;
t.getComponent(cc.Label).string = "";
}
},
showPaw: function(e) {
var t = cc.find("paw", this.node);
if (e) {
t.active = !0;
t.getComponent(sp.Skeleton).setAnimation(0, "animation" + e, !1);
} else t.active = !1;
},
getPaw: function() {
return cc.find("paw", this.node);
},
getPawAnimName: function(e) {
var t;
5 === e ? t = "animation1" : 10 === e ? t = "animation2" : 15 === e ? t = "animation3" : 20 === e ? t = "animation4" : 25 === e ? t = "animation5" : 30 === e ? t = "animation6" : 35 === e ? t = "animation7" : 40 === e ? t = "animation8" : 50 === e && (t = "animation9");
return t;
},
playTriggerAnimation: function() {
var e = !1, t = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[t] && n.symbol[t].win_node && n.symbol[t].trigger_ani) {
this._state = "trigger";
this._showNode && (this._showNode.active = !1);
var i = this.setAnimationToTop(!0);
i.active = !0;
var a = cc.find(n.symbol[t].win_node, i);
a.active = !0;
if ("" != n.symbol[t].trigger_ani.name) {
i.zIndex = n.symbol[t].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
e = !0;
var o = a.getComponent(sp.Skeleton);
o && o.setAnimation(0, n.symbol[t].trigger_ani.name, !0);
}
}
return e;
},
playStopAnimation: function() {
if (3 == this._id) {
this._showNode.stopAllActions();
var e = this._showNode.scale;
this._showNodeOrgScale = e;
cc.tween(this._showNode).to(.35, {
scale: e + .2
}).to(.35, {
scale: e
}).start();
} else this._super();
},
playBonusIdleAnim: function() {
var e = this._id, t = cc.vv.gameData.getGameCfg();
if (3 == e && t.symbol[e] && t.symbol[e].win_node && t.symbol[e].idle_ani) {
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(t.symbol[e].win_node, this.node);
this._showNode.active = !0;
var n = t.symbol[e].idle_ani, i = n.name;
this._data.coin || (this._data.jackpot ? 1 == this._data.jackpot.id ? i = n.mini_name : 2 == this._data.jackpot.id ? i = n.minor_name : 3 == this._data.jackpot.id && (i = n.major_name) : this._data.again && (i = n.again_name));
if ("" != i) {
this.node.zIndex = t.symbol[e].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var a = this._showNode.getComponent(sp.Skeleton);
a && a.setAnimation(0, i, !0);
}
}
},
playBonusCollAnim: function() {
var e = this._id, t = cc.vv.gameData.getGameCfg();
if (3 == e && t.symbol[e] && t.symbol[e].win_node && t.symbol[e].coll_ani) {
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(t.symbol[e].win_node, this.node);
this._showNode.active = !0;
var n = t.symbol[e].coll_ani, i = n.name;
this._data.coin || (this._data.jackpot ? 1 == this._data.jackpot.id ? i = n.mini_name : 2 == this._data.jackpot.id ? i = n.minor_name : 3 == this._data.jackpot.id && (i = n.major_name) : this._data.again && (i = n.again_name));
if ("" != i) {
this.node.zIndex = t.symbol[e].coll_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var a = this._showNode.getComponent(sp.Skeleton);
a && a.setAnimation(0, i, !1);
}
}
},
StartMove: function() {
this._super();
cc.vv.gameData.isBonusGame() ? this.setMaskVisible(!0) : this.setMaskVisible(!1);
},
setMaskVisible: function(e) {
var t = cc.vv.gameData.getGameCfg();
if (t.symbol[this._id] && t.symbol[this._id].node) {
var n = cc.find(t.symbol[this._id].node, this.node);
e && t.symbol[this._id].isMask ? n.color = new cc.Color(100, 100, 100) : n.color = cc.Color.WHITE;
}
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ]
}, {}, [ "Alexander_BonusGame", "Alexander_Bottom", "Alexander_Cfg", "Alexander_FreeGame", "Alexander_FreeReel", "Alexander_FreeSlots", "Alexander_GameData", "Alexander_Logic", "Alexander_Map", "Alexander_Popup", "Alexander_Reel", "Alexander_Slots", "Alexander_StoreGame", "Alexander_Symbol" ]);