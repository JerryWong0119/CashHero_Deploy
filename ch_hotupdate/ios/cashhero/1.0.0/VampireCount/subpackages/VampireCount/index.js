window.__require = function e(t, n, a) {
function o(c, r) {
if (!n[c]) {
if (!t[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!t[s]) {
var m = "function" == typeof __require && __require;
if (!r && m) return m(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = n[c] = {
exports: {}
};
t[c][0].call(l.exports, function(e) {
return o(t[c][1][e] || e);
}, l, l.exports, e, t, n, a);
}
return n[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < a.length; c++) o(a[c]);
return o;
}({
VampireCount_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "507faWD3kJOyYK2PbPp6xTi", "VampireCount_Cfg");
var a;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var i = {
symbol: (a = {}, o(a, 1, {
node: "symbol_1",
win_node: "animation_1",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 2, {
node: "symbol_2",
win_node: "animation_2",
stop_ani: {
name: "animation",
zIndex: 100
},
trigger_ani: {
name: "animation3",
zIndex: 300
},
idle_ani: {
name: "animation2",
zIndex: 200
}
}), o(a, 3, {
node: "symbol_3"
}), o(a, 4, {
node: "symbol_4",
win_node: "animation_4",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 5, {
node: "symbol_5",
win_node: "animation_5",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 6, {
node: "symbol_6",
win_node: "animation_6",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 7, {
node: "symbol_7",
win_node: "animation_7",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 8, {
node: "symbol_8",
win_node: "animation_8",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 9, {
node: "symbol_9",
win_node: "animation_9",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 10, {
node: "symbol_10",
win_node: "animation_10",
win_ani: {
name: "animation",
zIndex: 300
}
}), o(a, 101, {
node: "symbol_101",
win_node: "animation_101",
win_ani: {
name: "animation2",
zIndex: 300
}
}), o(a, 201, {
node: "symbol_201"
}), o(a, 202, {
node: "symbol_202",
win_node: "animation_202",
stop_ani: {
name: "animation",
zIndex: 200
},
trigger_ani: {
name: "animation3",
zIndex: 400
}
}), o(a, 203, {
node: "symbol_203"
}), o(a, 301, {
node: "symbol_301",
win_node: "animation_301",
stop_ani: {
name: "animation",
zIndex: 100
},
trigger_ani: {
name: "animation3",
zIndex: 300
},
idle_ani: {
name: "animation2",
zIndex: 200
}
}), a),
BonusType: {
Coin: 1,
Double: 2,
JackpotWheel: 3
},
MapType: {
PickBooster: 1,
SuperFreeGame: 2
},
MapBoostType: {
ExtraFreeCnt: 1,
WildPaysDouble: 2,
AddRow: 3,
ExtraWild: 4,
ExtraBonus: 5,
Coin: 6
},
MapConfig: [ {
id: 1,
type: 1,
pickCnt: 2,
nextSlotsId: 3,
index: 1
}, {
id: 2,
type: 1,
pickCnt: 2,
nextSlotsId: 3,
index: 1
}, {
id: 3,
type: 2,
boosters: [ 1, 2 ],
animationName: "animation1",
nextSlotsId: 7,
index: 1
}, {
id: 4,
type: 1,
pickCnt: 2,
nextSlotsId: 7,
index: 2
}, {
id: 5,
type: 1,
pickCnt: 2,
nextSlotsId: 7,
index: 2
}, {
id: 6,
type: 1,
pickCnt: 2,
nextSlotsId: 7,
index: 2
}, {
id: 7,
type: 2,
boosters: [ 1, 2, 3 ],
animationName: "animation2",
nextSlotsId: 12,
index: 2
}, {
id: 8,
type: 1,
pickCnt: 2,
nextSlotsId: 12,
index: 3
}, {
id: 9,
type: 1,
pickCnt: 2,
nextSlotsId: 12,
index: 3
}, {
id: 10,
type: 1,
pickCnt: 2,
nextSlotsId: 12,
index: 3
}, {
id: 11,
type: 1,
pickCnt: 2,
nextSlotsId: 12,
index: 3
}, {
id: 12,
type: 2,
boosters: [ 1, 2, 3, 4 ],
animationName: "animation3",
nextSlotsId: 18,
index: 3
}, {
id: 13,
type: 1,
pickCnt: 3,
nextSlotsId: 18,
index: 4
}, {
id: 14,
type: 1,
pickCnt: 3,
nextSlotsId: 18,
index: 4
}, {
id: 15,
type: 1,
pickCnt: 3,
nextSlotsId: 18,
index: 4
}, {
id: 16,
type: 1,
pickCnt: 3,
nextSlotsId: 18,
index: 4
}, {
id: 17,
type: 1,
pickCnt: 3,
nextSlotsId: 18,
index: 4
}, {
id: 18,
type: 2,
boosters: [ 1, 2, 3, 4 ],
animationName: "animation4",
nextSlotsId: 25,
index: 4
}, {
id: 19,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 20,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 21,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 22,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 23,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 24,
type: 1,
pickCnt: 3,
nextSlotsId: 25,
index: 5
}, {
id: 25,
type: 2,
boosters: [ 1, 2, 3, 4, 5 ],
animationName: "animation5",
nextSlotsId: 33,
index: 5
}, {
id: 26,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 27,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 28,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 29,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 30,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 31,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 32,
type: 1,
pickCnt: 3,
nextSlotsId: 33,
index: 6
}, {
id: 33,
type: 2,
boosters: [ 1, 2, 3, 4, 5 ],
animationName: "animation6",
nextSlotsId: 3,
index: 6
} ],
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "LMSlots_Bottom_Base",
Slots: "VampireCount_Slots",
Reels: "VampireCount_Reel",
Symbols: "VampireCount_Symbol"
},
col: 5,
row: 3,
symbolPrefab: "symbol",
symbolSize: {
width: 112,
height: 103
},
randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ],
wildId: 1,
scatterId: 2,
bonusId: 3,
collectSymbolId: 4,
pumpkinManId: 202,
extraSpinId: 301,
kuang: "kuang",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 1,
bounceInfo: {
distance: 30,
time: .1
},
autoModelDelay: 1,
AddAntiTime: 1.5,
reelStateInfo: [ {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_anti",
path: "games/VampireCount/",
reelStopSound: "reel_stop",
symbolStopSound: "scatter_landing",
antSound: "anticipation1",
antSpeed: 2e3
} ],
helpItems: [ "games/VampireCount/prefab/help_item_1", "games/VampireCount/prefab/help_item_2", "games/VampireCount/prefab/help_item_3", "games/VampireCount/prefab/help_item_4", "games/VampireCount/prefab/help_item_5", "games/VampireCount/prefab/help_item_6", "games/VampireCount/prefab/help_item_7" ],
commEffect: {
path: "games/VampireCount/",
win1: [ "win1", "win1end" ],
win2: [ "win2", "win2end" ]
},
normalBgm: "base_bgm"
};
t.exports = i;
cc._RF.pop();
}, {} ],
VampireCount_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b58f2KlGipPHIFRJ7AT27ZY", "VampireCount_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {
_pickBonusData: null,
_lockBonus: !1,
_leftSpiderCount: 0,
_rightSpiderCount: 0
},
onLoad: function() {
this._super();
var e = cc.vv.gameData.getDeskInfo();
this._lockBonus = e.needBet > e.currmult;
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
},
onUpdateBet: function() {
var e = cc.vv.gameData.getDeskInfo(), t = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
if (e.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
cc.vv.AudioManager.playEff("games/VampireCount/", "unlock", !0);
this._lockBonus = !1;
t.clearTracks();
t.setToSetupPose();
t.setAnimation(0, "animation3", !1);
} else if (e.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
cc.vv.AudioManager.playEff("games/VampireCount/", "lock", !0);
this._lockBonus = !0;
t.clearTracks();
t.setToSetupPose();
t.setAnimation(0, "animation1", !1);
}
cc.vv.gameData.GetSlotsScript().setPumpkinInfo(e.bonusInfos);
},
playSpiderAndGhostAnimation: function(e) {
var t = this, n = cc.find("safe_node/bg/spider", this.node).getComponent(sp.Skeleton);
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_1", !1);
n.setCompleteListener(function(a) {
var o = a.animation ? a.animation.name : "";
if (o === "animation2_" + e + "_1") {
t._rightSpiderCount++;
if (t._rightSpiderCount >= 3) {
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_2", !1);
t._rightSpiderCount = 0;
}
} else if (o === "animation2_" + e + "_2") {
t._leftSpiderCount++;
if (t._leftSpiderCount >= 2) {
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_1", !1);
t._leftSpiderCount = 0;
}
}
});
var a = cc.find("safe_node/bg/ghost", this.node).getComponent(sp.Skeleton);
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_1", !1);
a.setCompleteListener(function(t) {
var n = t.animation ? t.animation.name : "";
if (n === "animation4_" + e + "_1") {
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_2", !1);
} else if (n === "animation4_" + e + "_2") {
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_1", !1);
}
});
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
VampireCount_Map: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d53bbPqIoVM0JogletkJfM5", "VampireCount_Map");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
var a, i, c = !0, r = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
c = e.done;
return e;
},
e: function(e) {
r = !0;
i = e;
},
f: function() {
try {
c || null == a.return || a.return();
} finally {
if (r) throw i;
}
}
};
}
function o(e, t) {
if (e) {
if ("string" == typeof e) return i(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
}
}
function i(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
return a;
}
function c(e, t, n, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(s) : Promise.resolve(s).then(a, o);
}
function r(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var i = e.apply(t, n);
function r(e) {
c(i, a, o, r, s, "next", e);
}
function s(e) {
c(i, a, o, r, s, "throw", e);
}
r(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
role: cc.Node,
points: [ cc.Node ],
map: cc.Node,
start_node: cc.Node,
btn_back: cc.Node
},
initMap: function(e) {
this.node.active = !0;
this.map.y = cc.winSize.height;
for (var t = cc.vv.gameData.getGameCfg(), n = 0; n < t.MapConfig.length; n++) {
var a = t.MapConfig[n], o = this.points[n], i = o.getChildByName("spine").getComponent(sp.Skeleton);
if (a.type === t.MapType.PickBooster) if (n < e.currId) {
i.clearTracks();
i.setToSetupPose();
i.setAnimation(0, "animation4", !0);
} else {
i.clearTracks();
i.setToSetupPose();
i.setAnimation(0, "animation3", !0);
} else if (a.type === t.MapType.SuperFreeGame) {
var c = o.getChildByName("common"), r = o.getChildByName("finish");
c.active = n >= e.currId;
r.active = n < e.currId;
n < e.currId ? i.setAnimation(0, "animation" + a.index + "_3", !0) : i.setAnimation(0, "animation" + a.index + "_2", !0);
for (var s = 1; s < 6; s++) {
var m = c.getChildByName("tips_" + s);
if (m) {
m.getChildByName("no").active = !1;
m.getChildByName("yes").active = !1;
}
}
}
}
var l = e.currId >= 1 ? t.MapConfig[e.currId - 1].nextSlotsId - 1 : t.MapConfig[0].nextSlotsId - 1, u = (t.MapConfig[l], 
this.points[l]);
if (u) {
var p = u.getChildByName("common");
if (p) {
for (var f = 1; f < 6; f++) {
var d = p.getChildByName("tips_" + f);
if (d) {
d.getChildByName("no").active = !1;
d.getChildByName("yes").active = -1 !== e.nextUnlockBoosters.indexOf(f);
}
}
p.getChildByName("num").getComponent(cc.Label).string = e.nextUnlockBoosters.length;
}
}
var g = e.currId <= 0 ? this.start_node : this.points[e.currId - 1];
this.role.active = !0;
this.role.position = g.position;
},
openMap: function(e) {
var t = this;
this.node.active = !0;
this.map.y = cc.winSize.height;
cc.vv.AudioManager.playEff("games/VampireCount/", "map_open", !0);
cc.tween(this.map).to(.5, {
y: 0
}).start();
if (e) {
this.btn_back.active = !0;
this.btn_back.scale = 0;
cc.tween(this.btn_back).delay(.6).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
this.btn_back.on("click", function() {
t.btn_back.off("click");
cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", !0);
cc.tween(t.btn_back).to(.2, {
scale: 0
}).start();
cc.tween(t.map).to(.5, {
y: cc.winSize.height
}).call(function() {
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
t.node.active = !1;
}).start();
});
}
},
showMap: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
var o, i, c, r, s, m, l, u, p, f, d, g, v, _, h, y, S, k, C, b, w, x, I;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t.node.active = !0;
o = cc.vv.gameData.getGameCfg();
t.initMap(e);
i = o.MapConfig[e.currId - 1];
c = t.points[e.currId - 1];
r = c.getChildByName("spine").getComponent(sp.Skeleton);
if (i.type === o.MapType.PickBooster) {
r.clearTracks();
r.setToSetupPose();
r.setAnimation(0, "animation3", !0);
} else if (i.type === o.MapType.SuperFreeGame) {
s = c.getChildByName("common");
m = c.getChildByName("finish");
s.active = !0;
m.active = !1;
r.setAnimation(0, "animation" + i.index + "_2", !0);
for (l = 1; l < 6; l++) if (u = s.getChildByName("tips_" + l)) {
u.getChildByName("no").active = -1 === e.nextUnlockBoosters.indexOf(l);
u.getChildByName("yes").active = -1 !== e.nextUnlockBoosters.indexOf(l);
}
}
t.openMap(!1);
n.next = 10;
return cc.vv.gameData.awaitTime(.5);

case 10:
p = c.convertToWorldSpaceAR(cc.v2(0, 0));
(f = p.y / cc.winSize.height - .15) < 0 ? f = 0 : f > 1 && (f = 1);
t.map.getComponent(cc.ScrollView).scrollToPercentVertical(f);
d = e.currId - 1 <= 0 ? t.start_node : t.points[e.currId - 2];
g = t.points[e.currId - 1];
t.role.active = !0;
t.role.position = d.position;
cc.vv.AudioManager.playEff("games/VampireCount/", "map_move", !0);
t.role.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
t.role.getComponent(sp.Skeleton).setCompleteListener(function() {
t.role.getComponent(sp.Skeleton).setCompleteListener(null);
t.role.active = !1;
});
cc.tween(t.role).delay(.5).then(cc.jumpTo(1, g.position.x, g.position.y, 50, 1)).start();
n.next = 24;
return cc.vv.gameData.awaitTime(2);

case 24:
if ((v = o.MapConfig[e.currId - 1]).type !== o.MapType.PickBooster) {
n.next = 55;
break;
}
(_ = g.getChildByName("spine").getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
_.addAnimation(0, "animation2", !0);
n.next = 31;
return cc.vv.gameData.awaitTime(1);

case 31:
t.cutScenePick();
n.next = 34;
return cc.vv.gameData.awaitTime(1.8);

case 34:
h = cc.find("pick_game", t.node.parent).getComponent("VampireCount_PickGame");
n.next = 37;
return h.enterPickGame(v.index, v.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

case 37:
t.cutScenePick();
n.next = 40;
return cc.vv.gameData.awaitTime(1.8);

case 40:
cc.find("pick_game", t.node.parent).active = !1;
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
y = h.getResult();
S = 0;
k = a(y.pickBoosterGame.choiceItems);
try {
for (k.s(); !(C = k.n()).done; ) C.value.type !== o.MapBoostType.Coin && S++;
} catch (e) {
k.e(e);
} finally {
k.f();
}
if (0 !== S) {
n.next = 52;
break;
}
t.map.getComponent(cc.ScrollView).scrollToPercentVertical(f);
t.map.y = cc.winSize.height;
n.next = 53;
break;

case 52:
return n.delegateYield(regeneratorRuntime.mark(function e() {
var n, i, c, r, s, m, l;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
e.next = 2;
return cc.vv.gameData.awaitTime(.5);

case 2:
n = t.points[v.nextSlotsId - 1];
cc.find("common/num", n).getComponent(cc.Label).string = S;
i = a(y.pickBoosterGame.choiceItems);
e.prev = 5;
r = regeneratorRuntime.mark(function e() {
var a, i, r, s;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
if ((a = c.value).type === o.MapBoostType.Coin) {
e.next = 17;
break;
}
(i = cc.instantiate(cc.find("boostervx", t.node))).active = !0;
i.parent = t.node;
r = n.getChildByName("common").convertToWorldSpaceAR(cc.v2(0, 0));
r = t.node.convertToNodeSpaceAR(r);
i.position = r;
i.getComponent(sp.Skeleton).setAnimation(0, "animation1", !1);
i.getComponent(sp.Skeleton).addAnimation(0, "animation3", !0);
e.next = 12;
return cc.vv.gameData.awaitTime(1);

case 12:
s = cc.find("common/tips_" + a.type + "/yes", n).convertToWorldSpaceAR(cc.v2(0, 0));
s = t.node.convertToNodeSpaceAR(s);
cc.tween(i).to(.3, {
position: s
}).call(function() {
cc.find("common/tips_" + a.type + "/yes", n).active = !0;
i.x = r.x;
i.getComponent(sp.Skeleton).setAnimation(0, "animation5", !1);
i.getComponent(sp.Skeleton).setCompleteListener(function() {
i.removeFromParent();
});
}).start();
e.next = 17;
return cc.vv.gameData.awaitTime(.2);

case 17:
case "end":
return e.stop();
}
}, e);
});
i.s();

case 8:
if ((c = i.n()).done) {
e.next = 12;
break;
}
return e.delegateYield(r(), "t0", 10);

case 10:
e.next = 8;
break;

case 12:
e.next = 17;
break;

case 14:
e.prev = 14;
e.t1 = e.catch(5);
i.e(e.t1);

case 17:
e.prev = 17;
i.f();
return e.finish(17);

case 20:
for (s = v.nextSlotsId - 1; s < t.points.length; s++) {
m = t.points[s];
(l = o.MapConfig[s]).type === o.MapType.SuperFreeGame && m.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "animation" + l.index + "_4", !0);
}
e.next = 23;
return cc.vv.gameData.awaitTime(2);

case 23:
cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", !0);
cc.tween(t.map).to(.5, {
y: cc.winSize.height
}).call(function() {
t.map.getComponent(cc.ScrollView).scrollToPercentVertical(f);
}).start();
e.next = 27;
return cc.vv.gameData.awaitTime(.5);

case 27:
case "end":
return e.stop();
}
}, e, null, [ [ 5, 14, 17, 20 ] ]);
})(), "t0", 53);

case 53:
n.next = 63;
break;

case 55:
if (v.type !== o.MapType.SuperFreeGame) {
n.next = 63;
break;
}
for (b = 0; b < o.MapConfig.length; b++) if ((w = o.MapConfig[b]).type === o.MapType.SuperFreeGame) {
x = t.points[b];
I = x.getChildByName("spine").getComponent(sp.Skeleton);
if (b >= e.currId - 1) {
I.setAnimation(0, "animation" + w.index + "_4", !1);
if (e.currId === b + 1) {
cc.vv.AudioManager.playEff("games/VampireCount/", "map_node", !0);
I.addAnimation(0, "animation" + w.index + "_1", !1);
I.addAnimation(0, "animation" + w.index + "_3", !0);
} else I.addAnimation(0, "animation" + w.index + "_2", !0);
}
}
n.next = 59;
return cc.vv.gameData.awaitTime(5);

case 59:
cc.vv.AudioManager.playEff("games/VampireCount/", "map_close", !0);
cc.tween(t.map).to(.5, {
y: cc.winSize.height
}).start();
n.next = 63;
return cc.vv.gameData.awaitTime(.5);

case 63:
case "end":
return n.stop();
}
}, n);
}))();
},
cutScenePick: function() {
cc.vv.AudioManager.playEff("games/VampireCount/", "transition3", !0);
var e = cc.find("pick_qieping", this.node.parent);
e.active = !0;
var t = e.getComponent(sp.Skeleton);
t.setToSetupPose();
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
e.active = !1;
});
}
});
cc._RF.pop();
}, {} ],
VampireCount_PickGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "56fa9xaHTlG068ymE7Yx4be", "VampireCount_PickGame");
function a(e, t, n, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(s) : Promise.resolve(s).then(a, o);
}
function o(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var c = e.apply(t, n);
function r(e) {
a(c, o, i, r, s, "next", e);
}
function s(e) {
a(c, o, i, r, s, "throw", e);
}
r(void 0);
});
};
}
function i(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = c(e))) {
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
var a, o, i = !0, r = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
i = e.done;
return e;
},
e: function(e) {
r = !0;
o = e;
},
f: function() {
try {
i || null == a.return || a.return();
} finally {
if (r) throw o;
}
}
};
}
function c(e, t) {
if (e) {
if ("string" == typeof e) return r(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
}
}
function r(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
return a;
}
cc.Class({
extends: cc.Component,
properties: {
bg: cc.Node,
top_bg: cc.Node,
pick_times: sp.Skeleton,
tips: sp.Skeleton,
role: sp.Skeleton,
items: [ cc.Node ],
black_bg: cc.Node,
_haveOpenReward: [],
_canSelect: !0,
_index: 1,
_result: null,
_successCallback: null,
_unlockBooster: []
},
onLoad: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
},
changeBg: function(e, t) {
this._index = e;
var n = cc.vv.gameData.GetAtlasByName("pick");
this.top_bg.getComponent(cc.Sprite).spriteFrame = n.getSpriteFrame("theme214_pick_top" + (4 === e ? 3 : e));
this.pick_times.setAnimation(0, "animation" + (t - 1), !0);
this.tips.setAnimation(0, "animation" + e, !0);
for (var a = 1; a < 9; a++) {
var o = cc.find("item_" + a, this.node), c = cc.find("spine", o).getComponent(sp.Skeleton);
c.node.active = !0;
c.setAnimation(0, "animation" + e + "_1", !0);
for (var r = 1; r < 7; r++) {
var s = o.getChildByName("result_" + r);
s.active = !1;
s.color = cc.Color.WHITE;
var m, l = i(s.children);
try {
for (l.s(); !(m = l.n()).done; ) {
m.value.color = cc.Color.WHITE;
}
} catch (e) {
l.e(e);
} finally {
l.f();
}
}
}
},
enterPickGame: function(e, t, n) {
var a = this;
return o(regeneratorRuntime.mark(function o() {
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
return o.abrupt("return", new Promise(function(o) {
a._successCallback = o;
a.node.active = !0;
a.reset();
a.changeBg(e, t);
for (var i = 0; i < n.choiceIdxs.length; i++) {
var c = n.choiceIdxs[i], r = cc.find("item_" + c, a.node);
a.showReward(r, !1, n.choiceItems[i]);
a._haveOpenReward.push(c);
}
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("pick_bgm");
for (var s = function(e) {
var t = cc.find("item_" + e, a.node);
t.off(cc.Node.EventType.TOUCH_END);
t.on(cc.Node.EventType.TOUCH_END, function() {
t.stopAllActions();
a.onClickItem(e);
});
}, m = 1; m < 9; m++) s(m);
a.setAutoPlay();
}));

case 1:
case "end":
return o.stop();
}
}, o);
}))();
},
onClickItem: function(e) {
cc.find("item_" + e, this.node).off(cc.Node.EventType.TOUCH_END);
if (this._canSelect && !(this._haveOpenReward.indexOf(e) >= 0)) {
for (var t = 1; t < 9; t++) {
cc.find("item_" + t, this.node).stopAllActions();
}
this._canSelect = !1;
var n = {
c: MsgId.SLOT_SUBGAME_DATA
};
n.uid = Global.playerData.uid;
n.gameid = cc.vv.gameData._gameId;
n.data = {};
n.data.rtype = 1;
n.data.choiceId = e;
cc.vv.NetManager.send(n);
}
},
setAutoPlay: function() {
for (var e = [], t = 1; t < 9; t++) {
cc.find("item_" + t, this.node);
0 != this._haveOpenReward.indexOf(t) && e.push(t);
}
var n = Global.random(0, e.length - 1), a = this;
cc.vv.gameData.checkAutoPlay(cc.find("item_" + e[n], this.node), function() {
a.onClickItem(e[n]);
});
},
reset: function() {
this._haveOpenReward = [];
this._result = null;
this._index = 1;
this._canSelect = !0;
this._unlockBooster = [];
},
onRcvSubGameData: function(e) {
var t = this;
return o(regeneratorRuntime.mark(function n() {
var a, o, i, c, r, s, m;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (200 === e.code) {
n.next = 3;
break;
}
t._canSelect = !0;
return n.abrupt("return");

case 3:
a = cc.vv.gameData.getGameCfg();
o = e.data;
t._result = o;
t._haveOpenReward.push(o.choiceId);
o.choiceItem.type !== a.MapBoostType.Coin && t._unlockBooster.push(o.choiceItem.type);
if (!o.pickBoosterGame.isEnd) {
n.next = 23;
break;
}
i = t.items[o.choiceId - 1];
t.showReward(i, !1, o.choiceItem);
n.next = 13;
return cc.vv.gameData.awaitTime(.8);

case 13:
cc.vv.AudioManager.playEff("games/VampireCount/", "pick_end", !0);
c = 0;
for (r = 0; r < t.items.length; r++) if (-1 === t._haveOpenReward.indexOf(r + 1)) {
s = t.items[r];
t.showReward(s, !0, o.pickBoosterGame.totalItems[c]);
c++;
}
n.next = 18;
return cc.vv.gameData.awaitTime(2);

case 18:
n.next = 20;
return t.popResult();

case 20:
t._successCallback();
n.next = 27;
break;

case 23:
t._canSelect = !0;
m = t.items[o.choiceId - 1];
t.showReward(m, !1, o.choiceItem);
t.setAutoPlay();

case 27:
case "end":
return n.stop();
}
}, n);
}))();
},
getResult: function() {
return this._result;
},
showReward: function(e, t, n) {
var a = this;
return o(regeneratorRuntime.mark(function o() {
var c, r, s, m, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
c = cc.vv.gameData.getGameCfg();
(r = e.getChildByName("spine").getComponent(sp.Skeleton)).node.active = !0;
r.setAnimation(0, "animation" + a._index + "_2");
r.setCompleteListener(function() {
r.setCompleteListener(null);
r.node.active = !1;
});
t || (n.type === c.MapBoostType.Coin ? cc.vv.AudioManager.playEff("games/VampireCount/", "pick_coin", !0) : cc.vv.AudioManager.playEff("games/VampireCount/", "pick_booster", !0));
o.next = 8;
return cc.vv.gameData.awaitTime(.8);

case 8:
if (s = cc.find("result_" + n.type, e)) {
s.active = !0;
s.scale = 2.1;
s.color = t ? cc.Color.GRAY : cc.Color.WHITE;
m = i(s.children);
try {
for (m.s(); !(l = m.n()).done; ) l.value.color = t ? cc.Color.GRAY : cc.Color.WHITE;
} catch (e) {
m.e(e);
} finally {
m.f();
}
n.type === c.MapBoostType.Coin && (cc.find("coin", s).getComponent(cc.Label).string = Global.formatNumShort(n.coin, 0));
cc.tween(s).to(.5, {
scale: 2
}, {
easing: "backOut"
}).start();
}

case 10:
case "end":
return o.stop();
}
}, o);
}))();
},
popResult: function() {
var e = this;
return o(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function(t) {
var n = cc.vv.gameData.getGameCfg();
if (e._result) {
var a, o = 0, c = i(e._result.pickBoosterGame.choiceItems);
try {
for (c.s(); !(a = c.n()).done; ) {
a.value.type !== n.MapBoostType.Coin && o++;
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
cc.vv.AudioManager.playEff("games/VampireCount/", "pick_end_show", !0);
var r = [ 2, 1, 3 ];
e.black_bg.active = !0;
var s = cc.find("booster_result_" + o, e.node);
s.active = !0;
var m = s.getComponent(sp.Skeleton);
m.setAnimation(0, "animation" + r[o], !1);
m.addAnimation(0, "animation" + r[o] + "_1", !0);
var l = cc.find("coin", s);
l.scale = 0;
Global.doRoallNumEff(l, 0, e._result.pickBoosterGame.winCoin, 1.5, null, null, 0, !0);
cc.tween(l).delay(.2).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
var u = cc.find("btn_collect", s);
u.scale = 0;
cc.tween(u).delay(.4).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
var p = cc.find("booster_1", s);
if (p) {
p.scale = 0;
var f = cc.vv.gameData.GetAtlasByName("popup");
p.getComponent(cc.Sprite).spriteFrame = f.getSpriteFrame("theme214_pop_booster" + e._unlockBooster[0]);
cc.tween(p).delay(.3).to(.5, {
scale: 1 === o ? 1 : .8
}, {
easing: "backOut"
}).start();
}
var d = cc.find("booster_2", s);
if (d) {
var g = cc.vv.gameData.GetAtlasByName("popup");
p.getComponent(cc.Sprite).spriteFrame = g.getSpriteFrame("theme214_pop_booster" + e._unlockBooster[1]);
d.scale = 0;
cc.tween(d).delay(.3).to(.5, {
scale: 1 === o ? 1 : .8
}, {
easing: "backOut"
}).start();
}
var v = cc.find("index_1", s);
if (v) {
v.scale = 0;
cc.tween(v).delay(.3).to(.5, {
scale: .8
}, {
easing: "backOut"
}).start();
}
var _ = cc.find("index_2", s);
if (_) {
_.scale = 0;
cc.tween(_).delay(.3).to(.5, {
scale: .8
}, {
easing: "backOut"
}).start();
}
var h = function() {
cc.vv.AudioManager.playEff("games/VampireCount/", "click", !0);
cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(e._result.pickBoosterGame.winCoin);
u.off("click");
cc.tween(l).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
cc.tween(u).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
p && cc.tween(p).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
d && cc.tween(d).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
v && cc.tween(v).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
_ && cc.tween(_).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
m.setAnimation(0, "animation" + r[o] + "_2", !1);
m.setCompleteListener(function() {
m.setCompleteListener(null);
e.black_bg.active = !1;
s.active = !1;
t();
});
};
cc.vv.gameData.checkAutoPlay(u, h);
u.on("click", function() {
u.stopAllActions();
h();
});
}
}));

case 1:
case "end":
return t.stop();
}
}, t);
}))();
},
onDestroy: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, !1, this);
}
});
cc._RF.pop();
}, {} ],
VampireCount_PrizePool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b5a7eRDRwZDba/3+IefZjsl", "VampireCount_PrizePool");
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {
gray_font: cc.Font,
yellow_font: cc.Font
},
ShowNodeLockByNode: function(e, t, n, a, o) {
if (e) {
var i = cc.find("lock", e), c = cc.find("image", i), r = cc.find("unlock", e), s = cc.find("image", r), m = cc.find("jp_suo", e).getComponent(sp.Skeleton), l = cc.find("lbl_num", e).getComponent(cc.Label);
if (t) {
l.font = this.gray_font;
if (o) {
i.active = !0;
r.active = !1;
c.scale = 0;
} else {
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_lock", !0);
m.clearTracks();
m.setToSetupPose();
m.setAnimation(0, "animation" + (4 - a) + "_2", !1);
i.active = !0;
r.active = !1;
c.scale = 0;
cc.tween(c).to(.1, {
scale: .7
}, {
easing: "backOut"
}).delay(2).to(.1, {
scale: 0
}, {
easing: "backIn"
}).start();
}
} else {
l.font = this.yellow_font;
if (o) {
i.active = !1;
r.active = !0;
s.scale = 0;
} else {
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_unlock", !0);
m.clearTracks();
m.setToSetupPose();
m.setAnimation(0, "animation" + (4 - a) + "_1", !1);
i.active = !1;
r.active = !0;
s.scale = 0;
cc.tween(s).to(.1, {
scale: .7
}, {
easing: "backOut"
}).delay(2).to(.1, {
scale: 0
}, {
easing: "backIn"
}).start();
}
}
}
}
});
cc._RF.pop();
}, {
LMSlots_PrizePool_Base: void 0
} ],
VampireCount_Reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8f3b5iVn5lP94rrLFPHEVSm", "VampireCount_Reel");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
var a, i, c = !0, r = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
c = e.done;
return e;
},
e: function(e) {
r = !0;
i = e;
},
f: function() {
try {
c || null == a.return || a.return();
} finally {
if (r) throw i;
}
}
};
}
function o(e, t) {
if (e) {
if ("string" == typeof e) return i(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
}
}
function i(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
return a;
}
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
StartMove: function() {
this._super();
},
OnReelSpinEnd: function() {
this._super();
this.checkPumpkinMan();
},
playReelStop: function() {
this._super();
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) {
var t = this._symbols[e];
if (t.GetShowId() === this._cfg.extraSpinId) {
cc.vv.AudioManager.playEff("games/VampireCount/", "extra_free", !0);
t.playStopAnimation();
}
}
},
checkPumpkinMan: function() {
var e, t = this, n = cc.vv.gameData.getGameInfo().resultCards, o = a(this._symbols);
try {
for (o.s(); !(e = o.n()).done; ) {
var i = e.value;
if (i.GetShowId() === this._cfg.pumpkinManId && i.GetSymbolIdx() > 0 && i.GetSymbolIdx() < n.length / this._cfg.col - 1 && cc.vv.gameData.getGameInfo().pumpkinGame) {
cc.vv.AudioManager.playEff("games/VampireCount/", "bonus_landing", !0);
i.playStopAnimation();
cc.vv.gameData.getGameInfo().pumpkinGame.double && function() {
var e = cc.find("pumpkin_" + (t._reelIdx + 1), t.node.parent.parent), n = cc.vv.gameData.GetSlotsScript().getPumpkinInfo()[t._reelIdx];
if (e) {
var a = cc.find("double", e).getComponent(sp.Skeleton);
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation3", !1);
a.setCompleteListener(function(t) {
if ("animation3" === (t.animation ? t.animation.name : "")) {
Global.doRoallNumEff(cc.find("coin", e), n.coin, 2 * n.coin, 1, null, null, 1, !0, !0);
n.coin *= 2;
}
});
}
}();
}
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
},
AppendSymbol: function(e, t) {
for (var n = 0; n < e.length; n++) {
var a = cc.instantiate(this._symbolTemplete);
a.parent = this._holderNode;
var o = a.addComponent(this._cfg.scripts.Symbols);
o.SetSymbolReelIdx(this._reelIdx);
if (1 === t) {
var i = -1 - n;
a.position = this.GetSymbolPosByRow(i);
o.Init(i, this._topAniNode);
this._symbols.unshift(o);
} else if (2 === t) {
var c = this._symbols.length - 1;
o.Init(c, this._topAniNode);
this._symbols.splice(c, 0, o);
}
o.ShowById(e[n].id, e[n].data);
}
2 === t && this.ReLayOut();
},
deleteSymbol: function(e) {
var t = this._symbols[e];
this._symbols.splice(e, 1);
t.setAnimationToTop(!1);
t.ShowKuang(!1);
t.node.destroy();
},
clearLastSymbol: function() {
var e = this._symbols[this._symbols.length - 1];
if (e) {
e.setAnimationToTop(!1);
e.ShowKuang(!1);
}
},
GetResizeHeightObjs: function() {
var e = [], t = cc.find("mask", this.node);
t && e.push(t);
var n = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
n && e.push(n);
if (0 === this._reelIdx) {
var a = cc.find("reels_frame/left_bg", this.node.parent.parent);
a && e.push(a);
var o = cc.find("reels_frame/right_bg", this.node.parent.parent);
o && e.push(o);
for (var i = 1; i < 5; i++) {
var c = cc.find("reels_frame/line_" + i, this.node.parent.parent);
c && e.push(c);
}
var r = cc.find("black_bg", this.node.parent.parent);
r && e.push(r);
}
return e;
},
GetResizeMoveingObjs: function() {
var e = [];
if (0 === this._reelIdx) {
var t = cc.find("reels_frame/top_bg", this.node.parent.parent);
t && e.push(t);
}
return e;
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
VampireCount_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3c1caSN+nNIvKr3GiCe2zh9", "VampireCount_Slots");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
var a, i, c = !0, r = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
c = e.done;
return e;
},
e: function(e) {
r = !0;
i = e;
},
f: function() {
try {
c || null == a.return || a.return();
} finally {
if (r) throw i;
}
}
};
}
function o(e, t) {
if (e) {
if ("string" == typeof e) return i(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
}
}
function i(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
return a;
}
function c(e, t, n, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(s) : Promise.resolve(s).then(a, o);
}
function r(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, o) {
var i = e.apply(t, n);
function r(e) {
c(i, a, o, r, s, "next", e);
}
function s(e) {
c(i, a, o, r, s, "throw", e);
}
r(void 0);
});
};
}
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_wheel_script: null,
_curFreeLevel: 0,
_pumpkinInfo: null,
_leftSpiderCount: 0,
_rightSpiderCount: 0
},
Init: function() {
var e = this;
this._super();
this.setPumpkinInfo(cc.vv.gameData.getDeskInfo().bonusInfos);
this._pumpkinInfo = cc.vv.gameData.getDeskInfo().bonusInfos[cc.vv.gameData.GetBetIdx() - 1];
var t = cc.find("collect_node/bonus_node", this.node), n = cc.vv.gameData.getDeskInfo();
t.on(cc.Node.EventType.TOUCH_END, function() {
n.needBet > n.currmult && "idle" === cc.vv.gameData.GetSlotState() && e._bottomScript.SetBetIdx(n.needBet);
});
var a = cc.find("lock", t).getComponent(sp.Skeleton);
a.setCompleteListener(function(e) {
if ("animation1" === (e.animation ? e.animation.name : "")) {
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation2", !0);
}
});
if (n.needBet <= n.currmult) {
cc.vv.AudioManager.playEff("games/VampireCount/", "unlock", !0);
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation3", !1);
} else {
cc.vv.AudioManager.playEff("games/VampireCount/", "lock", !0);
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation1", !1);
}
this.updateCollectProgress(n.mapInfo, !1);
var o = cc.find("collect_node/spine_map/touch", this.node);
o.off(cc.Node.EventType.TOUCH_END);
o.on(cc.Node.EventType.TOUCH_END, function() {
if ("idle" === cc.vv.gameData.GetSlotState()) {
e._bottomScript.ShowBtnsByState("moveing_1");
cc.find("mapControl", e.node.parent).getComponent("VampireCount_Map").initMap(e._gameInfo ? e._gameInfo.mapInfo : n.mapInfo);
cc.find("mapControl", e.node.parent).getComponent("VampireCount_Map").openMap(!0);
}
});
},
getPumpkinInfo: function() {
return this._pumpkinInfo;
},
StartMove: function() {
this._super();
Global.SlotsSoundMgr.playNormalBgm();
},
ReconnectShow: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, i, c, r, s, m, l, u, p;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n = cc.vv.gameData.getDeskInfo();
if (!cc.vv.gameData.GetFreeTime()) {
t.next = 10;
break;
}
if (2 === n.mapInfo.state) if (-1 !== n.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddRow)) {
o = a(e._reels);
try {
for (o.s(); !(i = o.n()).done; ) i.value.AddCount(4, .01);
} catch (e) {
o.e(e);
} finally {
o.f();
}
} else {
c = a(e._reels);
try {
for (c.s(); !(r = c.n()).done; ) r.value.AddCount(3, .01);
} catch (e) {
c.e(e);
} finally {
c.f();
}
} else {
s = a(e._reels);
try {
for (s.s(); !(m = s.n()).done; ) m.value.AddCount(3, .01);
} catch (e) {
s.e(e);
} finally {
s.f();
}
}
t.next = 6;
return cc.vv.gameData.awaitTime(.2);

case 6:
e.ShowGameview(!0);
e.CanDoNextRound();
t.next = 30;
break;

case 10:
e.ShowGameview(!1);
if (1 !== n.mapInfo.state) {
t.next = 30;
break;
}
t.next = 14;
return cc.vv.gameData.awaitTime(.5);

case 14:
cc.vv.AudioManager.playEff("games/VampireCount/", "meter_full", !0);
(l = cc.find("collect_node/progress/scale_node/finish", e.node).getComponent(sp.Skeleton)).node.active = !0;
l.setToSetupPose();
l.setAnimation(0, "animation2", !1);
l.setCompleteListener(function() {
l.node.active = !1;
});
t.next = 22;
return cc.vv.gameData.awaitTime(1);

case 22:
u = cc.find("mapControl", e.node.parent).getComponent("VampireCount_Map");
t.next = 25;
return u.showMap(n.mapInfo);

case 25:
if (e._cfg.MapConfig[n.mapInfo.currId - 1].type !== e._cfg.MapType.PickBooster) {
t.next = 30;
break;
}
p = cc.find("pick_game", e.node.parent).getComponent("VampireCount_PickGame").getResult().pickBoosterGame.winCoin;
t.next = 30;
return e.ShowBottomWin(p, p, !0, function() {
e.CanDoNextRound();
});

case 30:
case "end":
return t.stop();
}
}, t);
}))();
},
onMsgSpine: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
var a, o, i, c, r, s, m;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._gameInfo = e;
a = e.resultCards;
t.SetSlotsResult(e.bonusResultCards.length > 0 ? e.bonusResultCards[0].cards : a);
t.SetReelStateInfo(a);
if (t._gameInfo.randEvent && !(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
t.SetStopTime(3);
cc.vv.AudioManager.playEff("games/VampireCount/", "anticipation2", !0);
(o = cc.find("jilidonghua", t.node).getComponent(sp.Skeleton)).node.active = !0;
o.setToSetupPose();
o.setAnimation(0, "animation1", !1);
o.setCompleteListener(function() {
o.setCompleteListener(null);
o.node.active = !1;
});
}
if (!(2 === t._gameInfo.mapInfo.state && cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime() == 1)) {
n.next = 33;
break;
}
i = 0;
-1 !== t._gameInfo.mapInfo.nextUnlockBoosters.indexOf(t._cfg.MapBoostType.ExtraWild) && (i += 3);
-1 !== t._gameInfo.mapInfo.nextUnlockBoosters.indexOf(t._cfg.MapBoostType.ExtraBonus) && (i += 3);
i > 0 && t.SetStopTime(i);
if (-1 === t._gameInfo.mapInfo.nextUnlockBoosters.indexOf(t._cfg.MapBoostType.ExtraWild)) {
n.next = 21;
break;
}
cc.find("black_bg", t.node).active = !0;
c = 0;

case 13:
if (!(c < 2)) {
n.next = 21;
break;
}
cc.vv.AudioManager.playEff("games/VampireCount/", "wild_add", !0);
for (r = 0; r < a.length; r++) Math.random() >= .3 && function() {
var e = cc.instantiate(cc.find("wild_01", t.node));
e.active = !0;
e.parent = cc.find("wild_animation", t.node);
e.position = cc.v2(r % 5 * 112 - 224, 103 * Math.floor(r / 5) + 51.5);
e.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
e.getComponent(sp.Skeleton).setCompleteListener(function() {
e.removeFromParent();
});
}();
n.next = 18;
return cc.vv.gameData.awaitTime(1.5);

case 18:
c++;
n.next = 13;
break;

case 21:
if (-1 === t._gameInfo.mapInfo.nextUnlockBoosters.indexOf(t._cfg.MapBoostType.ExtraBonus)) {
n.next = 32;
break;
}
cc.find("black_bg", t.node).active = !0;
s = 0;

case 24:
if (!(s < 3)) {
n.next = 32;
break;
}
cc.vv.AudioManager.playEff("games/VampireCount/", "coin_add", !0);
for (m = 0; m < a.length; m++) Math.random() >= .6 && function() {
var e = cc.instantiate(cc.find("jinbi_01", t.node));
e.active = !0;
e.parent = cc.find("wild_animation", t.node);
e.position = cc.v2(m % 5 * 112 - 224, 103 * Math.floor(m / 5) + 51.5);
e.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
e.getComponent(sp.Skeleton).setCompleteListener(function() {
e.removeFromParent();
});
}();
n.next = 29;
return cc.vv.gameData.awaitTime(.5);

case 29:
s++;
n.next = 24;
break;

case 32:
cc.find("black_bg", t.node).active = !1;

case 33:
case "end":
return n.stop();
}
}, n);
}))();
},
SetSlotsResult: function(e) {
for (var t = e.length / this._col, n = [], a = 0; a < e.length; a++) {
Math.floor(a / t);
var o = a % this._col;
if (this._cfg.symbol[e[a]]) {
var i = {};
i.sid = e[a];
if (e[a] === this._cfg.bonusId) {
var c = this._gameInfo.bonusResultCards[0].bonusIdxs.indexOf(a + 1);
-1 !== c && (i.data = this._gameInfo.bonusResultCards[0].bonusItems[c]);
}
n[o] || (n[o] = []);
n[o].unshift(i);
}
}
for (var r = 0; r < this._reels.length; r++) {
var s = this._reels[r], m = n[r];
s.SetResult(m);
}
},
CheckEnterFreeGame: function() {
return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
},
CheckExtraFreeGame: function() {
return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
},
CheckExitFreeGame: function() {
return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
},
ShowWinTrace: function() {
for (var e = [], t = 0; t < this._gameInfo.zjLuXian.length; t++) for (var n = this._gameInfo.zjLuXian[t], a = 0; a < n.indexs.length; a++) e[n.indexs[a]] = 1;
if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var o = 0; o < this._gameInfo.scatterZJLuXian.indexs.length; o++) {
e[this._gameInfo.scatterZJLuXian.indexs[o]] = 1;
}
for (var i in e) {
var c = this.GetSymbolByIdx(Number(i));
if (c) {
c.playWinAnimation();
c.GetShowId() !== this._cfg.scatterId && c.ShowKuang();
}
}
},
OnSpinEnd: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
t.next = 2;
return e.collectCoin();

case 2:
t.next = 4;
return e.collectSymbol();

case 4:
e.ShowWinTrace();
n = cc.vv.gameData.GetGameWin();
o = cc.vv.gameData.GetGameWin();
cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (o = cc.vv.gameData.GetGameTotalFreeWin());
i = !0;
if (e._gameInfo.pumpkinGame) {
n -= e._gameInfo.pumpkinGame.winCoin;
o -= e._gameInfo.pumpkinGame.winCoin;
i = !1;
}
e.ShowBottomWin(n, o, i, r(regeneratorRuntime.mark(function t() {
var n, o, i, c, r, s, m, l;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!e._gameInfo.pumpkinGame) {
t.next = 7;
break;
}
e._bottomScript.ShowBtnsByState("moveing_1");
e._gameInfo.pumpkinGame.idxs.sort(function(e, t) {
return e - t;
});
if (!(n = e.GetSymbolByIdx(e._gameInfo.pumpkinGame.idxs[1])) || n.GetShowId() !== e._cfg.pumpkinManId) {
t.next = 7;
break;
}
t.next = 7;
return new Promise(function(t) {
n.playTriggerAnimation(function(n) {
e.triggerPumpkinGame(n, t);
});
});

case 7:
if (!(0 !== e._gameInfo.mapInfo.state && e._gameInfo.mapInfo.progressData.currCnt > 0)) {
t.next = 56;
break;
}
e._bottomScript.ShowBtnsByState("moveing_1");
t.next = 11;
return cc.vv.gameData.awaitTime(.5);

case 11:
cc.vv.AudioManager.playEff("games/VampireCount/", "meter_full", !0);
(o = cc.find("collect_node/progress/scale_node/finish", e.node).getComponent(sp.Skeleton)).node.active = !0;
o.setToSetupPose();
o.setAnimation(0, "animation2", !1);
o.setCompleteListener(function() {
o.node.active = !1;
});
t.next = 19;
return cc.vv.gameData.awaitTime(1);

case 19:
i = cc.find("mapControl", e.node.parent).getComponent("VampireCount_Map");
t.next = 22;
return i.showMap(e._gameInfo.mapInfo);

case 22:
if ((c = e._cfg.MapConfig[e._gameInfo.mapInfo.currId - 1]).type !== e._cfg.MapType.PickBooster) {
t.next = 30;
break;
}
e.clearCollectProgress();
r = cc.find("pick_game", e.node.parent).getComponent("VampireCount_PickGame").getResult().pickBoosterGame.winCoin;
t.next = 28;
return e.ShowBottomWin(r, r, !0, function() {
e.CanDoNextRound();
});

case 28:
t.next = 54;
break;

case 30:
if (c.type !== e._cfg.MapType.SuperFreeGame) {
t.next = 54;
break;
}
t.next = 33;
return e.popMapFreeDialog(e._gameInfo.mapInfo);

case 33:
e.cutSceneBat();
t.next = 36;
return cc.vv.gameData.awaitTime(2);

case 36:
e.ShowGameview(!0);
cc.find("LMSlots_PrizePool_1", e.node.parent).active = !1;
e.clearCollectProgress();
s = -1 === e._gameInfo.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddRow) ? 3 : 4;
m = a(e._reels);
try {
for (m.s(); !(l = m.n()).done; ) l.value.AddCount(s, .01);
} catch (e) {
m.e(e);
} finally {
m.f();
}
cc.find("reels_frame/left_20", e.node).active = !1;
cc.find("reels_frame/right_20", e.node).active = !1;
cc.find("reels_frame/left_56", e.node).active = 3 === s;
cc.find("reels_frame/right_56", e.node).active = 3 === s;
cc.find("reels_frame/left_68", e.node).active = 4 === s;
cc.find("reels_frame/right_68", e.node).active = 4 === s;
cc.find("xixuegui", e.node.parent).active = !1;
t.next = 51;
return cc.vv.gameData.awaitTime(2);

case 51:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free_bgm");
e.CanDoNextRound();

case 54:
t.next = 57;
break;

case 56:
e.CheckEnterFreeGame() ? e.triggerFreeGame() : e.CheckExtraFreeGame() ? e.triggerExtraFreeGame() : e.CheckExitFreeGame() ? e.triggerExitFreeGame() : e.CanDoNextRound();

case 57:
case "end":
return t.stop();
}
}, t);
})));

case 11:
case "end":
return t.stop();
}
}, t);
}))();
},
ShowGameview: function(e) {
this._super(e);
cc.find("collect_node", this.node).active = !e;
cc.find("reels_frame/left_20", this.node).active = !e;
cc.find("reels_frame/right_20", this.node).active = !e;
cc.find("reels_frame/left_56", this.node).active = e;
cc.find("reels_frame/right_56", this.node).active = e;
},
collectSymbol: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, a, o, i, c, r, s, m;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
t.next = 2;
break;
}
return t.abrupt("return");

case 2:
if (0 !== e._gameInfo.mapInfo.progressData.currCnt) {
t.next = 4;
break;
}
return t.abrupt("return");

case 4:
n = cc.find("collect_node/sjt_m1", e.node);
a = !1;
for (o = 0; o < e._gameInfo.resultCards.length; o++) if (e._gameInfo.resultCards[o] === e._cfg.collectSymbolId && (i = e.GetSymbolByIdx(o + 1))) {
a = !0;
(c = cc.instantiate(cc.find("particle_fly", e.node.parent))).active = !0;
c.parent = e.node.parent;
r = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
r = e.node.parent.convertToNodeSpaceAR(r);
c.position = r;
s = n.convertToWorldSpaceAR(cc.v2(0, 0));
s = e.node.parent.convertToNodeSpaceAR(s);
cc.tween(c).to(.5, {
position: s
}).removeSelf().start();
}
if (!a) {
t.next = 17;
break;
}
cc.vv.AudioManager.playEff("games/VampireCount/", "symbol_fly", !0);
cc.tween(n).delay(.5).call(function() {
var e = n.getComponent(sp.Skeleton);
e.clearTracks();
e.setToSetupPose();
e.setAnimation(0, "animation2", !1);
e.setCompleteListener(function(t) {
if ("animation2" === (t.animation ? t.animation.name : "")) {
e.clearTracks();
e.setToSetupPose();
e.setAnimation(0, "animation1", !0);
}
});
}).start();
(m = cc.find("collect_node/sjt_b", e.node).getComponent(sp.Skeleton)).node.active = !0;
cc.tween(m.node).delay(.5).call(function() {
m.setToSetupPose();
m.setAnimation(0, "animation", !1);
m.setCompleteListener(function() {
m.node.active = !1;
});
}).start();
t.next = 15;
return cc.vv.gameData.awaitTime(.5);

case 15:
t.next = 17;
return e.updateCollectProgress(e._gameInfo.mapInfo, !0);

case 17:
case "end":
return t.stop();
}
}, t);
}))();
},
triggerPumpkinGame: function(e, t) {
var n = this;
return r(regeneratorRuntime.mark(function a() {
var o, i, c, s, m, l, u, p, f;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
(o = cc.find("wheel", e)).active = !0;
o.angle = 0;
a.next = 5;
return n._rotateWheel(n._gameInfo.pumpkinGame.wheel.id - 1, o);

case 5:
cc.find("zhongjiang", o).active = !0;
a.next = 8;
return cc.vv.gameData.awaitTime(1);

case 8:
cc.find("zhongjiang", o).active = !1;
(i = cc.instantiate(cc.find("rotate_node/index_" + n._gameInfo.pumpkinGame.wheel.id, o))).parent = cc.find("result_parent", o);
i.position = cc.v2(0, 0);
i.angle = 0;
c = (n._gameInfo.pumpkinGame.idxs[1] - 1) % n._cfg.col;
s = c + 1;
m = cc.find("pumpkin_" + s, n.node);
cc.tween(i).to(.2, {
scale: 1
}).call(function() {
var e = cc.find("zhuanpanlizi", o);
e.active = !0;
var t = cc.find("pumpkin_" + s, n.node).convertToWorldSpaceAR(cc.v2(0, 0));
t = o.convertToNodeSpaceAR(t);
cc.vv.AudioManager.playEff("games/VampireCount/", "pot_multi", !0);
cc.tween(e).to(.5, {
position: t
}).call(function() {
e.active = !1;
e.y = 65;
cc.vv.AudioManager.playEff("games/VampireCount/", "pot_recive", !0);
var t = m.getComponent(sp.Skeleton);
t.clearTracks();
t.setToSetupPose();
t.setAnimation(0, "animation2", !1);
}).start();
}).start();
a.next = 19;
return cc.vv.gameData.awaitTime(1.5);

case 19:
l = n._pumpkinInfo[c];
Global.doRoallNumEff(cc.find("coin", m), l.coin, n._gameInfo.pumpkinGame.winCoin, 1, null, null, 1, !0, !0);
a.next = 23;
return cc.vv.gameData.awaitTime(1.5);

case 23:
cc.tween(i).to(.3, {
scale: .8
}).removeSelf().start();
a.next = 26;
return cc.vv.gameData.awaitTime(.3);

case 26:
o.getChildByName("rotate_node").angle += 2160;
cc.tween(o).to(.3, {
scale: .7
}).start();
cc.tween(o.getChildByName("rotate_node")).to(.3, {
angle: 0
}).start();
a.next = 31;
return cc.vv.gameData.awaitTime(.3);

case 31:
o.active = !1;
cc.vv.AudioManager.playEff("games/VampireCount/", "pot_congratulate", !0);
(u = m.getComponent(sp.Skeleton)).clearTracks();
u.setToSetupPose();
u.setAnimation(0, "animation3", !1);
p = cc.find("coin", m);
cc.tween(p).to(.2, {
scale: 0
}).start();
f = n._gameInfo.pumpkinGame.jackpotWheel ? n._gameInfo.pumpkinGame.winCoin - n._gameInfo.pumpkinGame.jackpot.value : n._gameInfo.pumpkinGame.winCoin;
n.ShowBottomWin(f, f, !0, r(regeneratorRuntime.mark(function e() {
var a, o, i;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
if (n._gameInfo.pumpkinGame.jackpotWheel) {
cc.find("wheel", m).getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
(a = cc.find("free_dialog", n.node.parent)).active = !0;
(o = cc.find("zhuanpanzhongjiangtanchuang", a)).active = !0;
(i = o.getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
i.setCompleteListener(r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
i.setCompleteListener(null);
o.active = !1;
a.active = !1;
n.cutSceneLight();
e.next = 6;
return cc.vv.gameData.awaitTime(2);

case 6:
cc.find("wheel/LMSlots_PrizePool_1", n.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
prizeType: 0,
pauseNum: n._gameInfo.pumpkinGame.jackpotValues[0]
}, {
prizeType: 1,
pauseNum: n._gameInfo.pumpkinGame.jackpotValues[1]
}, {
prizeType: 2,
pauseNum: n._gameInfo.pumpkinGame.jackpotValues[2]
}, {
prizeType: 3,
pauseNum: n._gameInfo.pumpkinGame.jackpotValues[3]
} ]);
e.next = 9;
return new Promise(function(e) {
cc.find("wheel", n.node.parent).getComponent("VampireCount_Wheel").enterWheelGame(e, n._gameInfo.pumpkinGame.jackpot);
});

case 9:
n.cutSceneLight();
e.next = 12;
return cc.vv.gameData.awaitTime(2.5);

case 12:
cc.find("wheel", n.node.parent).active = !1;
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
e.next = 17;
return cc.vv.gameData.awaitTime(1);

case 17:
n.ShowBottomWin(n._gameInfo.pumpkinGame.jackpot.value, n._gameInfo.pumpkinGame.winCoin, !0, function() {
t();
});

case 18:
case "end":
return e.stop();
}
}, e);
})));
} else t();

case 1:
case "end":
return e.stop();
}
}, e);
})));
a.next = 43;
return cc.vv.gameData.awaitTime(2);

case 43:
n._pumpkinInfo = n._gameInfo.bonusInfo;
p.getComponent(cc.Label).string = Global.formatNumShort(n._pumpkinInfo[c].coin);
p.scale = 1;

case 46:
case "end":
return a.stop();
}
}, a);
}))();
},
cutSceneLight: function() {
var e = cc.find("wuyun", this.node.parent);
e.active = !0;
var t = e.getComponent(sp.Skeleton);
t.setToSetupPose();
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
e.active = !1;
});
cc.vv.AudioManager.playEff("games/VampireCount/", "transition1", !0);
},
cutSceneBat: function() {
var e = cc.find("bianfu", this.node.parent);
e.active = !0;
var t = e.getComponent(sp.Skeleton);
t.setToSetupPose();
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
e.active = !1;
});
cc.vv.AudioManager.playEff("games/VampireCount/", "transition2", !0);
},
triggerFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
for (n = 0; n < e._gameInfo.resultCards.length; n++) e._gameInfo.resultCards[n] === e._cfg.scatterId && e.GetSymbolByIdx(n + 1).playTriggerAnimation();
cc.vv.AudioManager.playEff("games/VampireCount/", "bell", !0);
t.next = 5;
return cc.vv.gameData.awaitTime(2);

case 5:
t.next = 7;
return e.popFreeDialog(!1);

case 7:
e.cutSceneBat();
t.next = 10;
return cc.vv.gameData.awaitTime(2);

case 10:
e.Backup();
e.ShowGameview(!0);
o = a(e._reels);
try {
for (o.s(); !(i = o.n()).done; ) i.value.AddCount(3, .01);
} catch (e) {
o.e(e);
} finally {
o.f();
}
cc.find("reels_frame/left_20", e.node).active = !1;
cc.find("reels_frame/right_20", e.node).active = !1;
cc.find("reels_frame/left_56", e.node).active = !0;
cc.find("reels_frame/right_56", e.node).active = !0;
cc.find("xixuegui", e.node.parent).active = !1;
t.next = 21;
return cc.vv.gameData.awaitTime(2);

case 21:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free_bgm");
e.CanDoNextRound();

case 24:
case "end":
return t.stop();
}
}, t);
}))();
},
triggerExtraFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
for (n = 0; n < e._gameInfo.resultCards.length; n++) e._gameInfo.resultCards[n] === e._cfg.extraSpinId && e.GetSymbolByIdx(n + 1).playTriggerAnimation();
cc.vv.AudioManager.playEff("games/VampireCount/", "bell", !0);
t.next = 5;
return cc.vv.gameData.awaitTime(2);

case 5:
t.next = 7;
return e.popFreeDialog(!0);

case 7:
e.CanDoNextRound();

case 8:
case "end":
return t.stop();
}
}, t);
}))();
},
triggerExitFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, i, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
t.next = 3;
return cc.vv.gameData.awaitTime(1);

case 3:
t.next = 5;
return e.popFreeResultDialog(2 === e._gameInfo.mapInfo.state);

case 5:
e.cutSceneBat();
t.next = 8;
return cc.vv.gameData.awaitTime(2);

case 8:
n = a(e._reels);
try {
for (n.s(); !(o = n.n()).done; ) o.value.StartRecycleSymbol(.01);
} catch (e) {
n.e(e);
} finally {
n.f();
}
cc.find("reels_frame/left_20", e.node).active = !0;
cc.find("reels_frame/right_20", e.node).active = !0;
cc.find("reels_frame/left_56", e.node).active = !1;
cc.find("reels_frame/right_56", e.node).active = !1;
cc.find("reels_frame/left_68", e.node).active = !1;
cc.find("reels_frame/right_68", e.node).active = !1;
cc.find("xixuegui", e.node.parent).active = !0;
t.next = 19;
return cc.vv.gameData.awaitTime(.02);

case 19:
i = a(e._reels);
try {
for (i.s(); !(c = i.n()).done; ) c.value.clearLastSymbol();
} catch (e) {
i.e(e);
} finally {
i.f();
}
2 !== e._gameInfo.mapInfo.state && e.Resume();
e.ShowGameview(!1);
cc.find("LMSlots_PrizePool_1", e.node.parent).active = !0;
e.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), !0, function() {
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
e.CanDoNextRound();
});

case 25:
case "end":
return t.stop();
}
}, t);
}))();
},
popFreeDialog: function(e) {
var t = this;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(a) {
var o, i, c, s, m, l, u, p, f;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(o = cc.find("free_dialog", t.node.parent)).active = !0;
(i = cc.find("free_dialog_bg", o)).opacity = 0;
i.runAction(cc.fadeTo(.2, 200));
c = cc.find("common_enter_node", o);
s = "animation2";
e && (c = cc.find("extra_node", o));
c.active = !0;
(m = cc.find("times", c)).scale = 0;
(l = cc.find("freetanchuang", c).getComponent(sp.Skeleton)).node.active = !0;
if (!e) {
n.next = 31;
break;
}
cc.vv.AudioManager.playEff("games/VampireCount/", "fg_retrigger", !0);
l.setAnimation(0, "animation", !1);
l.setCompleteListener(function() {
c.active = !1;
o.active = !1;
l.node.active = !1;
a();
});
(u = cc.find("add", c)).scale = 0;
n.next = 21;
return cc.vv.gameData.awaitTime(.3);

case 21:
m.getComponent(cc.Label).string = t._gameInfo.freeResult.freeInfo.freeCnt;
cc.tween(m).to(.2, {
scale: 1
}).start();
cc.tween(u).to(.2, {
scale: 1
}).start();
n.next = 26;
return cc.vv.gameData.awaitTime(1.5);

case 26:
cc.tween(i).to(.2, {
opacity: 0
}).start();
cc.tween(m).to(.2, {
scale: 0
}).start();
cc.tween(u).to(.2, {
scale: 0
}).start();
n.next = 52;
break;

case 31:
cc.vv.AudioManager.playEff("games/VampireCount/", "free_dialog_start_show", !0);
l.clearTracks();
l.setToSetupPose();
l.setAnimation(0, s, !1);
l.setCompleteListener(function(e) {
var t = e.animation ? e.animation.name : "";
if (t === s) {
l.clearTracks();
l.setToSetupPose();
l.setAnimation(0, "animation2_1", !0);
} else if ("animation2_2" === t) {
c.active = !1;
o.active = !1;
l.node.active = !1;
a();
}
});
(p = cc.find("btn_start", c)).scale = 0;
n.next = 40;
return cc.vv.gameData.awaitTime(.3);

case 40:
m.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
cc.tween(m).to(.2, {
scale: 1
}).start();
n.next = 44;
return cc.vv.gameData.awaitTime(.2);

case 44:
cc.tween(p).to(.2, {
scale: 1
}).start();
p.off("click");
n.next = 48;
return cc.vv.gameData.awaitTime(.2);

case 48:
f = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
p.off("click");
cc.vv.AudioManager.playEff("games/VampireCount/", "click", !0);
cc.tween(p).to(.2, {
scale: 0
}).start();
cc.tween(i).to(.2, {
opacity: 0
}).start();
l.clearTracks();
l.setToSetupPose();
l.setAnimation(0, "animation2_2", !1);
e.next = 9;
return cc.vv.gameData.awaitTime(.3);

case 9:
cc.tween(m).to(.2, {
scale: 0
}).start();

case 10:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(p, f);
p.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
p.stopAllActions();
e.next = 3;
return f();

case 3:
case "end":
return e.stop();
}
}, e);
})));
if (!cc.vv.gameData.isNeedAutoPlay()) {
p.stopAllActions();
cc.tween(p).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
f();
}).start();
}

case 52:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}());
},
popFreeResultDialog: function(e) {
var t = this;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(a) {
var o, i, c, s, m, l, u;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(o = cc.find("free_dialog", t.node.parent)).active = !0;
(i = cc.find("free_dialog_bg", o)).opacity = 0;
i.runAction(cc.fadeTo(.2, 200));
(c = e ? cc.find("map_free_result_node", o) : cc.find("result_node", o)).active = !0;
(s = cc.find("freetanchuang", c).getComponent(sp.Skeleton)).node.active = !0;
(m = cc.find("coin", c)).scale = 0;
m.getComponent(cc.Label).string = "";
e && cc.vv.AudioManager.playEff("games/VampireCount/", "mapfree_end_show", !0);
s.setAnimation(0, e ? "animation2" : "animation3", !1);
s.addAnimation(0, e ? "animation2_1" : "animation3_1", !0);
(l = cc.find("btn_collect", c)).scale = 0;
n.next = 19;
return cc.vv.gameData.awaitTime(.3);

case 19:
Global.doRoallNumEff(m, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, !0);
cc.tween(m).to(.2, {
scale: 1
}).start();
n.next = 23;
return cc.vv.gameData.awaitTime(.2);

case 23:
cc.tween(l).to(.2, {
scale: 1
}).start();
l.off("click");
n.next = 27;
return cc.vv.gameData.awaitTime(.2);

case 27:
u = function() {
var t = r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
l.off("click");
cc.vv.AudioManager.playEff("games/VampireCount/", "click", !0);
cc.vv.AudioManager.playEff("games/VampireCount/", "free_dialog_collect_close", !0);
cc.tween(l).to(.2, {
scale: 0
}).start();
cc.tween(i).to(.2, {
opacity: 0
}).start();
s.setAnimation(0, e ? "animation2_2" : "animation3_2", !1);
s.setCompleteListener(function() {
s.setCompleteListener(null);
c.active = !1;
o.active = !1;
s.node.active = !1;
a();
});
t.next = 9;
return cc.vv.gameData.awaitTime(.3);

case 9:
cc.tween(m).to(.2, {
scale: 0
}).start();

case 10:
case "end":
return t.stop();
}
}, t);
}));
return function() {
return t.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(l, u);
l.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
l.stopAllActions();
e.next = 3;
return u();

case 3:
case "end":
return e.stop();
}
}, e);
})));
if (!cc.vv.gameData.isNeedAutoPlay()) {
l.stopAllActions();
cc.tween(l).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
u();
}).start();
}

case 31:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}());
},
popMapFreeDialog: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(a) {
var o, i, c, s, m, l, u, p, f, d, g;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(o = cc.find("free_dialog", t.node.parent)).active = !0;
(i = cc.find("free_dialog_bg", o)).opacity = 0;
i.runAction(cc.fadeTo(.2, 200));
(c = cc.find("map_free_node", o)).active = !0;
(s = cc.find("superbonustanchuang", c).getComponent(sp.Skeleton)).node.active = !0;
(m = cc.find("times_" + e.nextSpinCount, c)).scale = 0;
cc.find("times_10", c).active = 10 === e.nextSpinCount;
cc.find("times_15", c).active = 15 === e.nextSpinCount;
for (l = 1; l < 6; l++) {
(u = cc.find("booster_" + l, c)).active = -1 !== e.nextBoosters.indexOf(l);
cc.find("black_bg", u).active = -1 === e.nextUnlockBoosters.indexOf(l);
u.scale = 0;
}
cc.vv.AudioManager.playEff("games/VampireCount/", "mapfree_start_show", !0);
s.setAnimation(0, "animation4", !1);
s.addAnimation(0, "animation4_1", !0);
(p = cc.find("btn_start", c)).scale = 0;
n.next = 21;
return cc.vv.gameData.awaitTime(.3);

case 21:
cc.tween(m).to(.2, {
scale: 1
}).start();
n.next = 24;
return cc.vv.gameData.awaitTime(.2);

case 24:
cc.tween(p).to(.2, {
scale: 1
}).start();
for (f = 1; f < 6; f++) {
d = cc.find("booster_" + f, c);
cc.tween(d).to(.2, {
scale: 1
}).start();
}
n.next = 28;
return cc.vv.gameData.awaitTime(.2);

case 28:
p.off("click");
g = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
p.off("click");
cc.vv.AudioManager.playEff("games/VampireCount/", "click", !0);
cc.tween(p).to(.2, {
scale: 0
}).start();
cc.tween(i).to(.2, {
opacity: 0
}).start();
s.setAnimation(0, "animation4_2", !1);
s.setCompleteListener(function(e) {
s.setCompleteListener(null);
c.active = !1;
o.active = !1;
s.node.active = !1;
a();
});
e.next = 8;
return cc.vv.gameData.awaitTime(.3);

case 8:
cc.tween(m).to(.2, {
scale: 0
}).start();

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
cc.vv.gameData.checkAutoPlay(p, g);
p.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
p.stopAllActions();
e.next = 3;
return g();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 32:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}()));

case 1:
case "end":
return n.stop();
}
}, n);
}))();
},
setPumpkinInfo: function(e) {
for (var t = e[cc.vv.gameData.GetBetIdx() - 1], n = 0; n < t.length; n++) {
var a = t[n], o = cc.find("pumpkin_" + (n + 1), this.node);
if (o) {
cc.find("coin", o).getComponent(cc.Label).string = Global.formatNumShort(a.coin, 0);
var i = cc.find("double", o), c = i.getComponent(sp.Skeleton);
if (a.double) {
i.active = !0;
c.clearTracks();
c.setToSetupPose();
c.setAnimation(0, "animation2", !0);
} else i.active = !1;
var r = cc.find("wheel", o), s = r.getComponent(sp.Skeleton);
if (a.jackpotWheel) {
r.active = !0;
s.clearTracks();
s.setToSetupPose();
s.setAnimation(0, "animation2", !0);
} else r.active = !1;
}
}
},
GetSymbolByIdx: function(e) {
var t = (e - 1) % this._col, n = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((e - 1) / this._col) - 1;
return this._reels[t].GetSymbolByRow(n);
},
collectCoin: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, i, c, r, s, m, l, u;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!(e._gameInfo.bonusResultCards && e._gameInfo.bonusResultCards.length > 0)) {
t.next = 19;
break;
}
n = 0;

case 2:
if (!(n < e._gameInfo.bonusResultCards.length - 1)) {
t.next = 18;
break;
}
o = e._gameInfo.bonusResultCards[n];
i = [ 0, 0, 0, 0, 0 ];
c = !1;
r = a(o.bonusIdxs);
try {
m = function() {
var t = s.value, n = o.bonusItems[o.bonusIdxs.indexOf(t)], a = (t - 1) % 5, r = e.GetSymbolByIdx(t);
if (r) {
c = !0;
r.playCoinAnimation();
}
i[a]++;
var m = cc.instantiate(cc.find("spine_coin", e.node.parent)).getComponent(sp.Skeleton), l = r.node.convertToWorldSpaceAR(cc.v2(0, 0));
l = e.node.parent.convertToNodeSpaceAR(l);
m.node.active = !0;
m.node.parent = e.node.parent;
m.node.position = l;
m.setAnimation(0, "animation", !1);
var u = cc.find("pumpkin_" + (a + 1), e.node).convertToWorldSpaceAR(cc.v2(0, 0));
u = e.node.parent.convertToNodeSpaceAR(u);
cc.tween(m.node).to(.6, {
opacity: 100,
position: u
}).removeSelf().start();
cc.tween(e.node).delay(.5).call(function() {
var t = cc.find("pumpkin_" + (a + 1), e.node).getComponent(sp.Skeleton);
t.clearTracks();
t.setToSetupPose();
t.setAnimation(0, "animation2", !1);
t.setCompleteListener(function(e) {
if ("animation2" === (e.animation ? e.animation.name : "")) {
t.clearTracks();
t.setToSetupPose();
t.setAnimation(0, "animation1", !0);
}
});
var o = e._pumpkinInfo[a];
if (n.type === e._cfg.BonusType.Coin) {
o.coin += n.coin;
cc.find("pumpkin_" + (a + 1) + "/coin", e.node).getComponent(cc.Label).string = Global.formatNumShort(o.coin, 0);
} else if (n.type === e._cfg.BonusType.Double) {
o.double = !0;
var i = cc.find("pumpkin_" + (a + 1) + "/double", e.node), c = i.getComponent(sp.Skeleton);
i.active = !0;
c.clearTracks();
c.setToSetupPose();
c.setAnimation(0, "animation1", !1);
} else if (n.type === e._cfg.BonusType.JackpotWheel) {
o.jackpotWheel = !0;
var r = cc.find("pumpkin_" + (a + 1) + "/wheel", e.node), s = r.getComponent(sp.Skeleton);
r.active = !0;
s.clearTracks();
s.setToSetupPose();
s.setAnimation(0, "animation1", !1);
}
}).start();
};
for (r.s(); !(s = r.n()).done; ) m();
} catch (e) {
r.e(e);
} finally {
r.f();
}
if (c) {
cc.vv.AudioManager.playEff("games/VampireCount/", "symbol_collect", !0);
e.scheduleOnce(function() {}, .5);
}
t.next = 11;
return cc.vv.gameData.awaitTime(.6);

case 11:
l = function(t) {
var c = i[t], r = [], s = e._reels[t], m = e._gameInfo.bonusResultCards[n + 1].cards;
if (c > 0) {
for (var l = 0; l < c; l++) {
var u = m[e._cfg.col * l + t], p = null;
if (u === e._cfg.bonusId) {
var f = e._gameInfo.bonusResultCards[n + 1].bonusIdxs.indexOf(e._cfg.col * l + t + 1);
-1 !== f && (p = e._gameInfo.bonusResultCards[n + 1].bonusItems[f]);
}
r.push({
id: u,
data: p
});
}
o.bonusIdxs.sort(function(e, t) {
return e - t;
});
r.reverse();
s.AppendSymbol(r, 2);
var d, g = a(o.bonusIdxs);
try {
for (g.s(); !(d = g.n()).done; ) {
var v = d.value, _ = (v - 1) % 5;
if (_ === t) {
if (e.GetSymbolByIdx(v)) {
var h = e._reels[_], y = Math.floor(o.cards.length / e._cfg.col) - (Math.floor((v - 1) / 5) + 1);
cc.log(y);
h.deleteSymbol(y);
}
}
}
} catch (e) {
g.e(e);
} finally {
g.f();
}
for (var S = 0; S < m.length / e._cfg.col; S++) {
var k = s.GetSymbolByRow(S);
cc.tween(k.node).to(.2, {
y: (S + .5) * e._cfg.symbolSize.height
}).start();
}
cc.tween(s.node).delay(.2).call(function() {
s.ReLayOut();
}).start();
}
};
for (u = 0; u < i.length; u++) l(u);
t.next = 15;
return cc.vv.gameData.awaitTime(.3);

case 15:
n++;
t.next = 2;
break;

case 18:
e._pumpkinInfo = e._gameInfo.bonusInfo;

case 19:
case "end":
return t.stop();
}
}, t);
}))();
},
updateCollectProgress: function(e, t) {
var n = this;
return r(regeneratorRuntime.mark(function a() {
var o, i, c, r, s, m;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
o = cc.find("collect_node/spine_purpose", n.node).getComponent(sp.Skeleton);
if (e.progressData.totalCnt / e.progressData.needCnt < 1) if ((i = n._cfg.MapConfig[e.nextId - 1]).animationName) {
o.clearTracks();
o.setToSetupPose();
o.setAnimation(0, i.animationName, !0);
} else {
o.clearTracks();
o.setToSetupPose();
o.setAnimation(0, "animation8", !0);
}
c = cc.find("collect_node/progress", n.node);
r = cc.find("scale_node", c);
s = cc.find("sjt", r);
if (t) {
cc.tween(s).to(.3, {
x: 388 * (e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt) - 194
}).start();
(m = cc.find("collect", s).getComponent(sp.Skeleton)).node.active = !0;
m.setToSetupPose();
m.setAnimation(0, "animation1", !1);
m.setCompleteListener(function() {
m.node.active = !1;
});
} else s.x = 388 * (e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt) - 194;

case 6:
case "end":
return a.stop();
}
}, a);
}))();
},
clearCollectProgress: function() {
var e = cc.find("collect_node/spine_purpose", this.node).getComponent(sp.Skeleton), t = cc.find("collect_node/progress", this.node), n = cc.find("scale_node", t), a = cc.find("sjt", n), o = this._gameInfo ? this._gameInfo.mapInfo : cc.vv.gameData.getDeskInfo().mapInfo, i = this._cfg.MapConfig[o.nextId - 1];
if (i.animationName) {
e.clearTracks();
e.setToSetupPose();
e.setAnimation(0, i.animationName, !0);
} else {
e.clearTracks();
e.setToSetupPose();
e.setAnimation(0, "animation8", !0);
}
a.x = -194;
},
changeBgAnimation: function(e) {
var t = this;
this._rightSpiderCount = 0;
this._leftSpiderCount = 0;
var n = cc.find("bg/spider", this.node.parent).getComponent(sp.Skeleton);
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_1", !0);
n.setCompleteListener(function(a) {
var o = a.animation ? a.animation.name : "";
if (o === "animation2_" + e + "_1") {
t._rightSpiderCount++;
if (t._rightSpiderCount >= 3) {
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_2", !0);
t._rightSpiderCount = 0;
}
} else if (o === "animation2_" + e + "_2") {
t._leftSpiderCount++;
if (t._leftSpiderCount >= 2) {
n.clearTracks();
n.setToSetupPose();
n.setAnimation(0, "animation2_" + e + "_1", !0);
t._leftSpiderCount = 0;
}
}
});
var a = cc.find("bg/ghost", this.node.parent).getComponent(sp.Skeleton);
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_1", !1);
a.setCompleteListener(function(t) {
var n = t.animation ? t.animation.name : "";
if (n === "animation4_" + e + "_1") {
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_2", !1);
} else if (n === "animation4_" + e + "_2") {
a.clearTracks();
a.setToSetupPose();
a.setAnimation(0, "animation4_" + e + "_1", !1);
}
});
var o = cc.find("bg/tree", this.node.parent).getComponent(sp.Skeleton);
o.clearTracks();
o.setToSetupPose();
o.setAnimation(0, "animation6_" + e, !0);
var i = cc.find("bg/frog", this.node.parent).getComponent(sp.Skeleton);
i.clearTracks();
i.setToSetupPose();
i.setAnimation(0, "animation3_" + e, !0);
var c = cc.find("bg/house_light", this.node.parent).getComponent(sp.Skeleton);
c.clearTracks();
c.setToSetupPose();
c.setAnimation(0, "animation1_" + e, !0);
},
_rotateWheel: function(e, t) {
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(a) {
var o, i;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
o = 40 * e - 140 - 2160;
cc.log(o);
cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_spin", !0);
i = cc.rotateBy(7, o).easing(cc.easeSineInOut());
t.getChildByName("rotate_node").runAction(cc.sequence(i, cc.callFunc(function() {
cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_stop", !0);
a();
})));

case 5:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}()));

case 1:
case "end":
return n.stop();
}
}, n);
}))();
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
VampireCount_Symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ee9e7ko7ZZPepJim4Uk/a0f", "VampireCount_Symbol");
var a = 1, o = 2, i = 3;
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
StartMove: function() {
this._super();
var e = cc.vv.gameData.getGameCfg();
this._id === e.pumpkinManId && (this.node.zIndex = 1e3);
this._id === e.scatterId && (this.node.zIndex = 500);
},
ShowById: function(e, t) {
var n = cc.vv.gameData.getGameCfg();
this._super(e, t);
if (e === n.bonusId && t) {
cc.find("coin_bg/coin", this._showNode).active = t.type === a;
cc.find("coin_bg/double", this._showNode).active = t.type === o;
cc.find("coin_bg/wheel", this._showNode).active = t.type === i;
cc.find("coin_bg/coin", this._showNode).opacity = 255;
cc.find("coin_bg/double", this._showNode).opacity = 255;
cc.find("coin_bg/wheel", this._showNode).opacity = 255;
cc.find("coin_bg/coin", this._showNode).scale = 1;
cc.find("coin_bg/double", this._showNode).scale = 1;
cc.find("coin_bg/wheel", this._showNode).scale = 1;
cc.find("coin_bg", this._showNode).opacity = 255;
t.type === a && (cc.find("coin_bg/coin", this._showNode).getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0));
}
},
playCoinAnimation: function() {
cc.find("icon", this._showNode).active = !1;
var e = cc.find("coin_bg/coin", this._showNode);
this._data.type === o ? e = cc.find("coin_bg/double", this._showNode) : this._data.type === i && (e = cc.find("coin_bg/wheel", this._showNode));
var t = cc.find("coin_bg", this._showNode);
cc.tween(t).to(.2, {
opacity: 0
}).start();
cc.tween(e).to(.5, {
opacity: 0,
scale: 1.1
}).start();
},
playTriggerAnimation: function(e) {
var t = this, n = !1, a = this._id, o = cc.vv.gameData.getGameCfg();
if (o.symbol[a] && o.symbol[a].win_node && o.symbol[a].trigger_ani) {
this._state = "trigger";
this._showNode && (this._showNode.active = !1);
var i = this.setAnimationToTop(!0);
i.active = !0;
var c = cc.find(o.symbol[a].win_node, i);
c.active = !0;
if ("" !== o.symbol[a].trigger_ani.name) {
i.zIndex = o.symbol[a].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
n = !0;
var r = c.getComponent(sp.Skeleton);
if (r) {
r.setAnimation(0, o.symbol[a].trigger_ani.name, !1);
this._id === o.pumpkinManId && cc.vv.AudioManager.playEff("games/VampireCount/", "pumpkin_wheel", !0);
r.setCompleteListener(function(n) {
if ((n.animation ? n.animation.name : "") === o.symbol[a].trigger_ani.name) {
if (t._id === o.pumpkinManId) {
r.clearTracks();
r.setToSetupPose();
r.setAnimation(0, "animation2", !0);
}
if (t._id === o.scatterId || t._id === o.extraSpinId) {
r.clearTracks();
r.setToSetupPose();
r.setAnimation(0, o.symbol[a].idle_ani.name, !0);
}
e && e(c);
}
});
}
}
}
return n;
},
SetSymbolIdx: function(e) {
this._super(e);
var t = cc.vv.gameData.getGameCfg();
this._id === t.pumpkinManId && (this.node.zIndex = 1e3);
this._id === t.scatterId && (this.node.zIndex = 500);
},
GetSymbolIdx: function() {
return this._symbolIdx;
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ],
VampireCount_Wheel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "829fcoWIoZJz5Wyei2cV1qn", "VampireCount_Wheel");
function a(e, t, n, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(s) : Promise.resolve(s).then(a, o);
}
function o(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var c = e.apply(t, n);
function r(e) {
a(c, o, i, r, s, "next", e);
}
function s(e) {
a(c, o, i, r, s, "throw", e);
}
r(void 0);
});
};
}
function i(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = c(e))) {
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
var a, o, i = !0, r = !1;
return {
s: function() {
a = e[Symbol.iterator]();
},
n: function() {
var e = a.next();
i = e.done;
return e;
},
e: function(e) {
r = !0;
o = e;
},
f: function() {
try {
i || null == a.return || a.return();
} finally {
if (r) throw o;
}
}
};
}
function c(e, t) {
if (e) {
if ("string" == typeof e) return r(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
}
}
function r(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
return a;
}
cc.Class({
extends: cc.Component,
properties: {
items: [ cc.Node ],
jackpot_result: cc.Node,
jptanchuang: sp.Skeleton,
winCoin: cc.Label,
btn_collect: cc.Node,
kuang: sp.Skeleton,
kuloushouzhi: sp.Skeleton,
black_bg: cc.Node,
press_node: sp.Skeleton,
_startMove: !1,
_newSpeed: 1,
_newMaxSpeed: 20,
_newMinSpeed: 1,
_newSpeedOffset: .25,
_count: 6,
_needStop: !1,
_bottomPosY: 0,
_backMove: !1,
_resultItem: null,
_successCallback: null,
_hasPressed: !0,
_wheelResult: null
},
onLoad: function() {
var e = this;
this.press_node.node.on(cc.Node.EventType.TOUCH_END, function() {
if (!e._hasPressed) {
e._hasPressed = !0;
e.press_node.node.stopAllActions();
cc.tween(e.black_bg).to(.2, {
opacity: 0
}).start();
e.press_node.clearTracks();
e.press_node.setToSetupPose();
e.press_node.setAnimation(0, "animation3", !1);
e.press_node.setCompleteListener(function(t) {
if ("animation3" === (t.animation ? t.animation.name : "")) {
e._startMove = !0;
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_spin", !0);
e.press_node.active = !1;
e.kuloushouzhi.node.active = !0;
e.kuloushouzhi.setAnimation(0, "animation", !1);
e.kuloushouzhi.addAnimation(0, "animation2", !0);
}
});
}
});
this._bottomPosY = this.items[9].y - this.items[9].height;
},
update: function(e) {
if (this._startMove) {
if (this._needStop) {
this._newSpeed -= this._newSpeedOffset;
this._newSpeed <= this._newMinSpeed && (this._newSpeed = this._newMinSpeed);
} else {
this._newSpeed += this._newSpeedOffset;
this._newSpeed >= this._newMaxSpeed && (this._newSpeed = this._newMaxSpeed);
}
0 === this._count && this._resultItem.y <= 5 * this._resultItem.height && (this._needStop = !0);
if (this._needStop && this._resultItem.y < 0) {
this._startMove = !1;
this._backMove = !0;
}
var t, n = i(this.items);
try {
for (n.s(); !(t = n.n()).done; ) {
var a = t.value;
if (a.y <= this._bottomPosY) {
a.y += this.items.length * a.height;
if (a === this._resultItem) {
this._count--;
this._count <= 0 && (this._count = 0);
}
}
a.y -= this._newSpeed;
}
} catch (e) {
n.e(e);
} finally {
n.f();
}
}
if (this._backMove) {
var o, c = i(this.items);
try {
for (c.s(); !(o = c.n()).done; ) {
o.value.y += this._newMinSpeed;
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
if (this._resultItem.y > -1 && this._resultItem.y < 1) {
this._backMove = !1;
this._moveEnd();
}
}
},
_moveEnd: function() {
var e = this;
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_stop", !0);
this.kuang.node.active = !0;
this.kuang.clearTracks();
this.kuang.setToSetupPose();
this.kuang.setAnimation(0, "animation1", !1);
this.kuang.setCompleteListener(function() {
var t = o(regeneratorRuntime.mark(function t(n) {
var a, o, i, c, r;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if ("animation1" !== (n.animation ? n.animation.name : "")) {
t.next = 29;
break;
}
e.kuang.clearTracks();
e.kuang.setToSetupPose();
e.kuang.setAnimation(0, "animation2", !0);
if ((a = cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("VampireCount_PrizePool")._GetPoolNodeByType(e._wheelResult.id - 1)) && (o = cc.find("unlock/jpzhongjiang", a))) {
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_multi", !0);
o.active = !0;
e.scheduleOnce(function() {
o.active = !1;
}, 1);
}
t.next = 9;
return cc.vv.gameData.awaitTime(1);

case 9:
i = [ 4, 3, 2, 1 ];
c = [ "wheel_mini", "wheel_minor", "wheel_major", "wheel_grand" ];
cc.vv.AudioManager.playEff("games/VampireCount/", c[e._wheelResult.id - 1], !0);
e.jackpot_result.active = !0;
e.jptanchuang.clearTracks();
e.jptanchuang.setToSetupPose();
e.jptanchuang.setAnimation(0, "animation" + i[e._wheelResult.id - 1], !1);
e.jptanchuang.setCompleteListener(function(t) {
if ((t.animation ? t.animation.name : "") === "animation" + i[e._wheelResult.id - 1]) {
e.jptanchuang.clearTracks();
e.jptanchuang.setToSetupPose();
e.jptanchuang.setAnimation(0, "animation" + i[e._wheelResult.id - 1] + "_1", !0);
}
});
e.winCoin.string = "";
e.btn_collect.scale = 0;
t.next = 21;
return cc.vv.gameData.awaitTime(1);

case 21:
Global.doRoallNumEff(e.winCoin.node, 0, e._wheelResult.value, 3, null, null, 0, !0, !1);
cc.tween(e.btn_collect).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t.next = 25;
return cc.vv.gameData.awaitTime(.5);

case 25:
e.btn_collect.off("click");
r = function() {
e.btn_collect.off("click");
cc.vv.AudioManager.playEff("games/VampireCount/", "click", !0);
cc.tween(e.btn_collect).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.jptanchuang.clearTracks();
e.jptanchuang.setToSetupPose();
e.jptanchuang.setAnimation(0, "animation" + i[e._wheelResult.id - 1] + "_2", !1);
e.jptanchuang.setCompleteListener(function(t) {
if ((t.animation ? t.animation.name : "") === "animation" + i[e._wheelResult.id - 1] + "_2") {
e.jackpot_result.active = !1;
e.kuloushouzhi.node.active = !1;
e._successCallback && e._successCallback();
}
});
};
cc.vv.gameData.checkAutoPlay(e.btn_collect, r);
e.btn_collect.on("click", function() {
e.btn_collect.stopAllActions();
r();
});

case 29:
case "end":
return t.stop();
}
}, t);
}));
return function(e) {
return t.apply(this, arguments);
};
}());
},
enterWheelGame: function(e, t) {
var n = this;
return o(regeneratorRuntime.mark(function a() {
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
n._wheelResult = t;
n._resultItem = cc.find("wheel_mask/index_" + t.idx, n.node);
n.node.active = !0;
n._successCallback = e;
n.kuang.node.active = !1;
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("wheel_bgm");
cc.vv.AudioManager.playEff("games/VampireCount/", "wheel_start_show", !0);
n.reset();
n.black_bg.opacity = 200;
n.press_node.node.active = !0;
n.press_node.clearTracks();
n.press_node.setToSetupPose();
n.press_node.setAnimation(0, "animation", !1);
n.press_node.setCompleteListener(function(e) {
if ("animation" === (e.animation ? e.animation.name : "")) {
n.press_node.clearTracks();
n.press_node.setToSetupPose();
n.press_node.setAnimation(0, "animation2", !0);
}
});
cc.vv.gameData.checkAutoPlay(n.press_node.node, function() {
if (!n._hasPressed) {
n._hasPressed = !0;
cc.tween(n.black_bg).to(.2, {
opacity: 0
}).start();
n.press_node.clearTracks();
n.press_node.setToSetupPose();
n.press_node.setAnimation(0, "animation3", !1);
n.press_node.setCompleteListener(function(e) {
if ("animation3" === (e.animation ? e.animation.name : "")) {
n._startMove = !0;
cc.vv.AudioManager.playEff("games/VampireCount/", "jp_spin", !0);
n.press_node.active = !1;
n.kuloushouzhi.node.active = !0;
n.kuloushouzhi.setAnimation(0, "animation", !1);
n.kuloushouzhi.addAnimation(0, "animation2", !0);
}
});
}
});

case 16:
case "end":
return a.stop();
}
}, a);
}))();
},
reset: function() {
this._startMove = !1;
this._newSpeed = 1;
this._needStop = !1;
this._count = 6;
this._hasPressed = !1;
this._backMove = !1;
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "VampireCount_Cfg", "VampireCount_Logic", "VampireCount_Map", "VampireCount_PickGame", "VampireCount_PrizePool", "VampireCount_Reel", "VampireCount_Slots", "VampireCount_Symbol", "VampireCount_Wheel" ]);