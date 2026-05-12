window.__require = function e(n, t, a) {
function o(c, r) {
if (!t[c]) {
if (!n[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!n[s]) {
var m = "function" == typeof __require && __require;
if (!r && m) return m(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = t[c] = {
exports: {}
};
n[c][0].call(l.exports, function(e) {
return o(n[c][1][e] || e);
}, l, l.exports, e, n, t, a);
}
return t[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < a.length; c++) o(a[c]);
return o;
}({
MinamotoNoYoshitsune_Cfg: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "939d3rFB9FGcrL0xSnKsB3P", "MinamotoNoYoshitsune_Cfg");
var a, o, i, c, r, s, m, l;
function d(e, n, t) {
n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[n] = t;
return e;
}
var u = {
symbol: (a = {}, d(a, 101, {
node: "symbol_101",
win_node: "animation_101",
win_ani: {
name: "animation2",
zIndex: 300
}
}), d(a, 102, {
node: "symbol_102",
win_node: "animation_102",
win_ani: {
name: "animation3",
zIndex: 300
}
}), d(a, 103, {
node: "symbol_103",
win_node: "animation_103",
win_ani: {
name: "animation4",
zIndex: 300
}
}), d(a, 104, {
node: "symbol_104",
win_node: "animation_104"
}), d(a, 105, {
node: "symbol_105",
win_node: "animation_105"
}), d(a, 2, {
node: "symbol_2",
win_node: "animation_2",
stop_ani: {
name: "animation1",
zIndex: 100
},
trigger_ani: {
name: "animation",
zIndex: 400
},
idle_ani: {
name: "animation2",
zIndex: 200
}
}), d(a, 3, {
node: "symbol_3",
win_node: "animation_3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 200
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
win_ani: {
name: "animation1_4",
zIndex: 300
}
}), d(a, 4, {
node: "symbol_4",
win_node: "animation_4",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 5, {
node: "symbol_5",
win_node: "animation_5",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 6, {
node: "symbol_6",
win_node: "animation_6",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 7, {
node: "symbol_7",
win_node: "animation_7",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 8, {
node: "symbol_8",
win_node: "animation_8",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 9, {
node: "symbol_9",
win_node: "animation_9",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 10, {
node: "symbol_10",
win_node: "animation_10",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 11, {
node: "symbol_11",
win_node: "animation_11",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 12, {
node: "symbol_12",
win_node: "animation_12",
win_ani: {
name: "animation",
zIndex: 300
}
}), d(a, 301, {
node: "symbol_301",
win_node: "animation_3",
stop_ani_1: {
name: "animation3_1",
zIndex: 100
},
trigger_ani_1: {
name: "animation3_3",
zIndex: 400
},
idle_ani_1: {
name: "animation3_2",
zIndex: 200
},
win_ani_1: {
name: "animation3_4",
zIndex: 300
},
stop_ani: {
name: "animation2_1",
zIndex: 100
},
trigger_ani: {
name: "animation2_3",
zIndex: 400
},
idle_ani: {
name: "animation2_2",
zIndex: 200
},
win_ani: {
name: "animation2_4",
zIndex: 300
}
}), d(a, 401, {
node: "symbol_401"
}), a),
emptyId: 401,
autoModelDelay: 1,
shoujifeiCfg: (l = {}, d(l, 4, (c = {}, d(c, 5, (o = {}, d(o, 1, "animation1"), 
d(o, 2, "animation2"), d(o, 3, "animation3"), d(o, 4, "animation4"), d(o, 6, "animation5"), 
d(o, 7, "animation6"), d(o, 8, "animation7"), d(o, 9, "animation8"), d(o, 11, "animation9"), 
d(o, 12, "animation10"), d(o, 13, "animation11"), d(o, 14, "animation12"), d(o, 16, "animation13"), 
d(o, 17, "animation14"), d(o, 18, "animation15"), d(o, 19, "animation16"), o)), 
d(c, 6, (i = {}, d(i, 1, "animation1"), d(i, 2, "animation2"), d(i, 3, "animation3"), 
d(i, 4, "animation4"), d(i, 5, "animation4"), d(i, 6, "animation5"), d(i, 7, "animation6"), 
d(i, 8, "animation7"), d(i, 9, "animation8"), d(i, 10, "animation8"), d(i, 11, "animation9"), 
d(i, 12, "animation10"), d(i, 13, "animation11"), d(i, 14, "animation12"), d(i, 15, "animation12"), 
d(i, 16, "animation13"), d(i, 17, "animation14"), d(i, 18, "animation15"), d(i, 19, "animation16"), 
d(i, 20, "animation16"), i)), c)), d(l, 5, (m = {}, d(m, 5, (r = {}, d(r, 1, "animation1"), 
d(r, 2, "animation2"), d(r, 3, "animation3"), d(r, 4, "animation4"), d(r, 5, "animation4"), 
d(r, 6, "animation5"), d(r, 7, "animation6"), d(r, 8, "animation7"), d(r, 9, "animation8"), 
d(r, 10, "animation8"), d(r, 11, "animation9"), d(r, 12, "animation10"), d(r, 13, "animation11"), 
d(r, 14, "animation12"), d(r, 15, "animation12"), d(r, 16, "animation13"), d(r, 17, "animation14"), 
d(r, 18, "animation15"), d(r, 19, "animation16"), d(r, 20, "animation16"), r)), 
d(m, 6, (s = {}, d(s, 1, "animation1"), d(s, 2, "animation2"), d(s, 3, "animation3"), 
d(s, 4, "animation4"), d(s, 5, "animation4"), d(s, 6, "animation5"), d(s, 7, "animation6"), 
d(s, 8, "animation7"), d(s, 9, "animation8"), d(s, 10, "animation8"), d(s, 11, "animation9"), 
d(s, 12, "animation10"), d(s, 13, "animation11"), d(s, 14, "animation12"), d(s, 15, "animation12"), 
d(s, 16, "animation13"), d(s, 17, "animation14"), d(s, 18, "animation15"), d(s, 19, "animation16"), 
d(s, 20, "animation16"), d(s, 21, "animation13"), d(s, 22, "animation14"), d(s, 23, "animation15"), 
d(s, 24, "animation16"), d(s, 25, "animation16"), s)), m)), l),
MapType: {
PickBooster: 1,
SuperFreeGame: 2
},
MapBoostType: {
ExtraFreeCnt: 1,
WildPaysDouble: 2,
AddReel: 3,
AddRow: 4,
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
index: 1,
mult: 1
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
boosters: [ 1, 2 ],
animationName: "animation2",
nextSlotsId: 12,
index: 2,
mult: 1.25
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
boosters: [ 1, 2, 3 ],
animationName: "animation3",
nextSlotsId: 18,
index: 3,
mult: 1.5
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
index: 4,
mult: 1.75
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
index: 5,
mult: 2
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
index: 6,
mult: 2.5
} ],
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "LMSlots_Bottom_Base",
Slots: "MinamotoNoYoshitsune_Slots",
Reels: "MinamotoNoYoshitsune_Reel",
Symbols: "MinamotoNoYoshitsune_Symbol"
},
col: 5,
row: 4,
symbolPrefab: "symbol",
symbolSize: {
width: 118,
height: 87
},
randomSymbols: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
wildId: 101,
scatterId: 2,
bonusId: 3,
collectSymbolId: 3,
extraSpinId: 301,
kuang: "kuang",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 1,
bounceInfo: {
distance: 30,
time: .1
},
AddAntiTime: 1.5,
reelStateInfo: [],
helpItems: [ "games/MinamotoNoYoshitsune/prefab/help_item_1", "games/MinamotoNoYoshitsune/prefab/help_item_2", "games/MinamotoNoYoshitsune/prefab/help_item_3", "games/MinamotoNoYoshitsune/prefab/help_item_4", "games/MinamotoNoYoshitsune/prefab/help_item_5", "games/MinamotoNoYoshitsune/prefab/help_item_6" ],
commEffect: {
path: "games/MinamotoNoYoshitsune/",
win1: [ "win1", "" ],
win2: [ "win2", "" ],
win3: [ "win3", "" ],
win4: [ "win4", "" ]
},
normalBgm: "bg_bgm"
};
n.exports = u;
cc._RF.pop();
}, {} ],
MinamotoNoYoshitsune_Logic: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "378089aCghEdqEOGMTni680", "MinamotoNoYoshitsune_Logic");
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
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
},
onUpdateBet: function() {
var e = cc.vv.gameData.getDeskInfo(), n = cc.find("safe_node/slots/collect_node/jdt", this.node).getComponent(sp.Skeleton);
if (e.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_unlock", !0);
this._lockBonus = !1;
n.setAnimation(0, "animation2", !1);
n.addAnimation(0, "animation2_1", !0);
} else if (e.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_lock", !0);
this._lockBonus = !0;
n.setAnimation(0, "animation1", !1);
n.addAnimation(0, "animation1_1", !0);
}
cc.find("safe_node/slots/collect_node/scale_node", this.node).active = !this._lockBonus;
},
onRcvSubGameData: function(e) {
200 === e.code && (1 === e.data.rtype ? cc.find("safe_node/pick_game", this.node).getComponent("MinamotoNoYoshitsune_PickGame").onRcvSubGameData(e) : 2 === e.data.rtype ? cc.find("safe_node/slots/pick_bonus", this.node).getComponent("MinamotoNoYoshitsune_PickBonus").onRcvSubGameData(e) : cc.log("cannot get msg reciver"));
},
onDestroy: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, !1, this);
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
MinamotoNoYoshitsune_Map: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "9542cs2z6RB+bIkfDBnjdwG", "MinamotoNoYoshitsune_Map");
function a(e, n, t, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
t(e);
return;
}
r.done ? n(s) : Promise.resolve(s).then(a, o);
}
function o(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(o, i) {
var c = e.apply(n, t);
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
for (var n = cc.vv.gameData.getGameCfg(), t = (cc.vv.gameData.GetAtlasByName("map"), 
0); t < n.MapConfig.length; t++) {
var a = n.MapConfig[t], o = this.points[t], i = o.getChildByName("spine").getComponent(sp.Skeleton);
if (a.type === n.MapType.PickBooster) i.node.active = t < e.currId; else if (a.type === n.MapType.SuperFreeGame) {
var c = o.getChildByName("common"), r = o.getChildByName("finish");
c.active = t >= e.currId;
r.active = t < e.currId;
if (t < e.currId) {
i.setAnimation(0, "animation" + a.index + "_3", !0);
o.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(a.boosters.length);
} else {
i.setAnimation(0, "animation" + a.index, !0);
o.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(0);
}
o.getChildByName("allBooster").getComponent("ImgSwitchCmp").setIndex(a.boosters.length);
cc.find("diamond_winCoin/num", o).getComponent(cc.Label).string = Global.formatNumShort(e.startPrice * a.mult, 0);
for (var s = 1; s < 6; s++) {
var m = c.getChildByName("tips_" + s);
if (m) {
m.getChildByName("no").active = !1;
m.getChildByName("yes").active = !1;
}
}
}
}
var l = e.currId >= 1 ? n.MapConfig[e.currId - 1].nextSlotsId - 1 : n.MapConfig[0].nextSlotsId - 1, d = (n.MapConfig[l], 
this.points[l]);
if (d) {
var u = d.getChildByName("common");
if (u) {
for (var f = 1; f < 6; f++) {
var p = u.getChildByName("tips_" + f);
if (p) {
p.getChildByName("no").active = !1;
p.getChildByName("yes").active = -1 !== e.nextUnlockBoosters.indexOf(f);
}
}
d.getChildByName("curBooster").getComponent("ImgSwitchCmp").setIndex(e.nextUnlockBoosters.length);
}
}
var g = e.currId <= 0 ? this.start_node : this.points[e.currId - 1];
this.role.active = !0;
this.role.position = g.position;
},
openMap: function(e) {
var n = this;
this.node.active = !0;
this.map.y = cc.winSize.height;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_open", !0);
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
n.btn_back.off("click");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_close", !0);
cc.tween(n.btn_back).to(.2, {
scale: 0
}).start();
n.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
cc.tween(n.map).to(.5, {
y: cc.winSize.height
}).call(function() {
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
n.node.active = !1;
cc.vv.gameData.GetSlotsScript()._haveOpenMap = !1;
}).start();
});
}
},
showMap: function(e) {
var n = this;
return o(regeneratorRuntime.mark(function t() {
var a, o, i, c, r, s, m, l, d, u, f, p, g;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n.node.active = !0;
a = cc.vv.gameData.getGameCfg();
n.initMap(e);
o = a.MapConfig[e.currId - 1];
i = n.points[e.currId - 1];
c = i.getChildByName("spine").getComponent(sp.Skeleton);
if (o.type === a.MapType.PickBooster) c.node.active = !1; else if (o.type === a.MapType.SuperFreeGame) {
r = i.getChildByName("common");
s = i.getChildByName("finish");
r.active = !0;
s.active = !1;
c.setAnimation(0, "animation" + o.index, !0);
for (m = 1; m < 6; m++) if (l = r.getChildByName("tips_" + m)) {
l.getChildByName("no").active = -1 === e.nextUnlockBoosters.indexOf(m);
l.getChildByName("yes").active = -1 !== e.nextUnlockBoosters.indexOf(m);
}
}
n.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
n.openMap(!1);
t.next = 11;
return cc.vv.gameData.awaitTime(.5);

case 11:
d = i.convertToWorldSpaceAR(cc.v2(0, 0));
(u = d.y / cc.winSize.height - .15) < 0 ? u = 0 : u > 1 && (u = 1);
n.map.getComponent(cc.ScrollView).scrollToPercentVertical(u);
f = e.currId - 1 <= 0 ? n.start_node : n.points[e.currId - 2];
p = n.points[e.currId - 1];
n.role.active = !0;
n.role.position = f.position;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "man_jump", !0);
cc.tween(n.role).delay(.5).to(.5, {
position: p.position
}).start();
if ((g = a.MapConfig[e.currId - 1]).type !== a.MapType.PickBooster) {
t.next = 36;
break;
}
t.next = 25;
return cc.vv.gameData.awaitTime(.8);

case 25:
p.getChildByName("spine").getComponent(sp.Skeleton).node.active = !0;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "fire_ignite", !0);
t.next = 30;
return cc.vv.gameData.awaitTime(1);

case 30:
n.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
cc.tween(n.map).to(.5, {
y: cc.winSize.height
}).start();
t.next = 34;
return cc.vv.gameData.awaitTime(.5);

case 34:
t.next = 49;
break;

case 36:
if (g.type !== a.MapType.SuperFreeGame) {
t.next = 49;
break;
}
t.next = 39;
return cc.vv.gameData.awaitTime(.5);

case 39:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "tiger_roar", !0);
p.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "animation" + g.index + "_1", !0);
t.next = 44;
return cc.vv.gameData.awaitTime(2);

case 44:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "map_close", !0);
n.map.getComponent(cc.ScrollView).scrollToPercentVertical(0);
cc.tween(n.map).to(.5, {
y: cc.winSize.height
}).start();
t.next = 49;
return cc.vv.gameData.awaitTime(.5);

case 49:
case "end":
return t.stop();
}
}, t);
}))();
},
cutScenePick: function() {
cc.vv.AudioManager.playEff("games/SpookyHalloween/", "transition3", !0);
var e = cc.find("pick_qieping", this.node.parent);
e.active = !0;
var n = e.getComponent(sp.Skeleton);
n.setToSetupPose();
n.setAnimation(0, "animation", !1);
n.setCompleteListener(function() {
n.setCompleteListener(null);
e.active = !1;
});
}
});
cc._RF.pop();
}, {} ],
MinamotoNoYoshitsune_PickBonus: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "2a7359KC81PBpO+dIbDEcPI", "MinamotoNoYoshitsune_PickBonus");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
function o(e, n) {
if (e) {
if ("string" == typeof e) return i(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0;
}
}
function i(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
function c(e, n, t, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
t(e);
return;
}
r.done ? n(s) : Promise.resolve(s).then(a, o);
}
function r(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(a, o) {
var i = e.apply(n, t);
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
reels_bg: cc.Node,
tips_node: cc.Node,
reels_frame: cc.Node,
bonus_bj: sp.Skeleton,
bonus_wenzi: sp.Skeleton,
items_node: cc.Node,
items: [ cc.Node ],
pick_lizi: cc.Node,
tengman: sp.Skeleton,
remain_times: cc.Label,
_successCallback: null,
_canSelect: !1,
_remainTimes: 3,
_haveOpenReward: [],
_winCoin: 0,
_startPosY: 0
},
onLoad: function() {},
reconnect: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function(n) {
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("pick1_bgm");
e.reset();
e._successCallback = n;
e.node.active = !0;
var t = cc.vv.gameData.getDeskInfo().pickBonus;
e._remainTimes = t.spinCnt;
e.bonus_bj.node.active = !0;
e.bonus_bj.setAnimation(0, "animation1_2", !0);
e.bonus_wenzi.node.y = 0;
e.bonus_wenzi.node.active = !0;
e.bonus_wenzi.setAnimation(0, "animation2", !0);
e.reels_bg.active = !0;
e.reels_frame.active = !0;
e.items_node.active = !0;
e._haveOpenReward = t.choiceIdxs;
e._canSelect = !0;
for (var a = function(n) {
var a = e.items[n];
a.scale = 1;
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
if (e._canSelect) {
a.off(cc.Node.EventType.TOUCH_END);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_click", !0);
e._canSelect = !1;
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 2;
t.data.choiceId = n + 1;
cc.vv.NetManager.send(t);
}
});
cc.find("zishuijing", a).getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
if (-1 !== e._haveOpenReward.indexOf(n + 1)) {
var o = cc.find("lanbaoshi", a).getComponent(sp.Skeleton);
o.node.active = !0;
o.setAnimation(0, "animation1", !0);
var i = t.items[n];
if (i.coin > 0) {
var c = cc.find("coin", a);
c.active = !0;
c.getComponent(cc.Label).string = Global.formatNumShort(i.coin, 0);
} else {
var r = cc.vv.gameData.GetAtlasByName("symbols");
cc.find("jackpot", a).active = !0;
cc.find("jackpot", a).getComponent(cc.Sprite).spriteFrame = r.getSpriteFrame("theme205_s_jp" + (5 - i.jackpot.id));
}
}
}, o = 0; o < e.items.length; o++) a(o);
cc.find("collect_node", e.node.parent).y -= 100;
e.tips_node.active = !0;
e.tips_node.y += 100;
e.remain_times.string = e._remainTimes;
e.tengman.node.active = !0;
e.tengman.setAnimation(0, "animation6_1", !0);
var i = cc.find("coin", e.tengman.node);
i.active = !0;
i.opacity = 255;
i.getComponent(cc.Label).string = Global.formatNumShort(t.winCoin);
}));

case 1:
case "end":
return n.stop();
}
}, n);
}))();
},
enterPickBonus: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(a) {
var o, i, c, r, s;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("pick1_bgm");
cc.find("role", n.node.parent.parent).active = !1;
n.tengman.node.active = !0;
n.node.active = !0;
n.reset();
n._successCallback = a;
n._startPosY = e;
n.bonus_bj.node.active = !0;
n.bonus_bj.setAnimation(0, "animation1_1", !1);
n.bonus_bj.addAnimation(0, "animation1_2", !0);
n.bonus_wenzi.node.active = !0;
n.bonus_wenzi.node.y = e;
n.bonus_wenzi.setAnimation(0, "animation2", !0);
cc.tween(n.bonus_wenzi.node).to(.5, {
y: 0
}).start();
t.next = 17;
return cc.vv.gameData.awaitTime(.5);

case 17:
n.reels_bg.active = !0;
n.reels_frame.active = !0;
n.items_node.active = !0;
for (o = 0; o < n.items.length; o++) {
i = n.items[o];
cc.tween(i).delay(o % 4 * .3).to(.3, {
scale: 1
}).start();
}
t.next = 23;
return cc.vv.gameData.awaitTime(1.2);

case 23:
c = cc.find("collect_node", n.node.parent);
cc.tween(c).by(.5, {
y: -100
}).start();
t.next = 27;
return cc.vv.gameData.awaitTime(.5);

case 27:
n.tips_node.active = !0;
cc.tween(n.tips_node).by(.5, {
y: 100
}).start();
n.remain_times.string = n._remainTimes;
t.next = 32;
return cc.vv.gameData.awaitTime(.5);

case 32:
n._canSelect = !0;
r = function(e) {
var t = n.items[e];
t.off(cc.Node.EventType.TOUCH_END);
t.on(cc.Node.EventType.TOUCH_END, function() {
if (n._canSelect) {
t.off(cc.Node.EventType.TOUCH_END);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_click", !0);
n._canSelect = !1;
var a = {
c: MsgId.SLOT_SUBGAME_DATA
};
a.uid = Global.playerData.uid;
a.gameid = cc.vv.gameData._gameId;
a.data = {};
a.data.rtype = 2;
a.data.choiceId = e + 1;
cc.vv.NetManager.send(a);
}
});
};
for (s = 0; s < n.items.length; s++) r(s);

case 35:
case "end":
return t.stop();
}
}, t);
}));
return function(e) {
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
reset: function() {
this.reels_bg.active = !1;
this.tips_node.y = 116;
this.reels_frame.active = !1;
this.bonus_bj.node.active = !1;
this.bonus_wenzi.node.active = !1;
this.items_node.active = !1;
var e, n = a(this.items);
try {
for (n.s(); !(e = n.n()).done; ) {
var t = e.value;
cc.find("lanbaoshi", t).active = !1;
cc.find("coin", t).active = !1;
cc.find("pick_more", t).active = !1;
cc.find("jackpot", t).active = !1;
cc.find("dianji", t).active = !1;
cc.find("shoujifei", t).active = !1;
cc.find("zishuijing", t).active = !0;
cc.find("zishuijing", t).getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
var o, i = a(t.children);
try {
for (i.s(); !(o = i.n()).done; ) {
o.value.color = cc.Color.WHITE;
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
t.scale = 0;
}
} catch (e) {
n.e(e);
} finally {
n.f();
}
this._successCallback = null;
this._canSelect = !1;
this._remainTimes = 3;
this._haveOpenReward = [];
},
onRcvSubGameData: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
var a, o;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (200 === e.code) {
t.next = 3;
break;
}
n._canSelect = !0;
return t.abrupt("return");

case 3:
if (2 === e.data.rtype) {
t.next = 5;
break;
}
return t.abrupt("return");

case 5:
a = e.data;
n._result = a;
n._haveOpenReward.push(a.choiceId);
n._remainTimes--;
n._remainTimes < 0 && (n._remainTimes = 0);
n.remain_times.string = n._remainTimes;
if (0 !== a.pickBonus.spinCnt) {
t.next = 25;
break;
}
n.showReward(a.choiceId, !1, a.pickBonus.items[a.choiceId - 1], a.pickBonus.winCoin);
n._canSelect = !1;
n._winCoin = a.pickBonus.winCoin;
cc.vv.gameData.AddCoin(n._winCoin);
t.next = 18;
return cc.vv.gameData.awaitTime(3);

case 18:
for (o = 0; o < n.items.length; o++) -1 === n._haveOpenReward.indexOf(o + 1) && n.showReward(o + 1, !0, a.pickBonus.items[o], a.pickBonus.winCoin);
t.next = 21;
return cc.vv.gameData.awaitTime(2);

case 21:
t.next = 23;
return n.exitPickBonus();

case 23:
t.next = 26;
break;

case 25:
n.showReward(a.choiceId, !1, a.pickBonus.items[a.choiceId - 1], a.pickBonus.winCoin);

case 26:
case "end":
return t.stop();
}
}, t);
}))();
},
showReward: function(e, n, t, o) {
var i = this;
return r(regeneratorRuntime.mark(function c() {
var r, s, m, l, d, u, f, p, g, v, _, h, b;
return regeneratorRuntime.wrap(function(c) {
for (;;) switch (c.prev = c.next) {
case 0:
r = i.items[e - 1];
s = r.getChildByName("zishuijing");
if (!n) {
c.next = 9;
break;
}
s.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
m = a(r.children);
try {
for (m.s(); !(l = m.n()).done; ) l.value.color = cc.Color.GRAY;
} catch (e) {
m.e(e);
} finally {
m.f();
}
if (t.repick) cc.find("pick_more", r).active = !0; else if (t.coin > 0) {
(d = cc.find("coin", r)).active = !0;
d.getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0);
} else if (t.jackpot) {
u = cc.vv.gameData.GetAtlasByName("symbols");
cc.find("jackpot", r).active = !0;
cc.find("jackpot", r).getComponent(cc.Sprite).spriteFrame = u.getSpriteFrame("theme205_s_jp" + (5 - t.jackpot.id));
}
c.next = 41;
break;

case 9:
(f = cc.find("dianji", r).getComponent(sp.Skeleton)).node.active = !0;
f.setAnimation(0, "animation", !1);
f.setCompleteListener(function() {
f.setCompleteListener(null);
f.node.active = !1;
});
s.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
c.next = 16;
return cc.vv.gameData.awaitTime(.5);

case 16:
(p = cc.find("lanbaoshi", r).getComponent(sp.Skeleton)).node.active = !0;
p.setAnimation(0, "animation1", !0);
if (!t.repick) {
c.next = 40;
break;
}
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_addone", !0);
(g = cc.find("pick_more", r)).scale = 0;
g.active = !0;
cc.tween(g).to(.5, {
scale: 1
}).start();
c.next = 27;
return cc.vv.gameData.awaitTime(.5);

case 27:
i._remainTimes++;
i.pick_lizi.active = !0;
i.pick_lizi.position = r.position;
v = i.remain_times.node.convertToWorldSpaceAR(cc.v2(0, 0));
v = i.node.convertToNodeSpaceAR(v);
cc.tween(i.pick_lizi).to(.5, {
position: v
}).call(function() {
i.remain_times.string = i._remainTimes;
i.pick_lizi.active = !1;
}).start();
c.next = 35;
return cc.vv.gameData.awaitTime(1.2);

case 35:
p.setAnimation(0, "animation2", !1);
p.addAnimation(0, "animation1", !0);
c.next = 39;
return cc.vv.gameData.awaitTime(.3);

case 39:
g.active = !1;

case 40:
if (t.coin > 0) {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_coin", !0);
(_ = cc.find("coin", r)).active = !0;
_.scale = 0;
_.getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0);
cc.tween(_).to(.5, {
scale: 1
}).call(function() {
if (1 === i._haveOpenReward.length) {
i.tengman.setAnimation(0, "animation7", !1);
i.tengman.addAnimation(0, "animation6_1", !0);
}
}).delay(.2).call(function() {
var n = cc.find("shoujifei", r).getComponent(sp.Skeleton);
n.node.active = !0;
n.setAnimation(0, "animation" + e, !1);
n.setCompleteListener(function() {
n.setCompleteListener(null);
n.node.active = !1;
var e = cc.find("coin", i.tengman.node);
e.active = !0;
e.opacity = 255;
e.getComponent(cc.Label).string = Global.formatNumShort(o, 0);
i._canSelect = !0;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", !0);
var t = cc.find("bonusjieshou", i.tengman.node).getComponent(sp.Skeleton);
t.node.active = !0;
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
t.node.active = !1;
});
});
}).start();
} else if (t.jackpot) {
h = cc.find("jackpot", r);
b = cc.vv.gameData.GetAtlasByName("symbols");
h.active = !0;
h.scale = 0;
h.getComponent(cc.Sprite).spriteFrame = b.getSpriteFrame("theme205_s_jp" + (5 - t.jackpot.id));
cc.tween(h).to(.5, {
scale: 1
}).call(function() {
if (1 === i._haveOpenReward.length) {
i.tengman.setAnimation(0, "animation7", !1);
i.tengman.addAnimation(0, "animation6_1", !0);
}
}).delay(.2).call(function() {
var n = cc.find("shoujifei", r).getComponent(sp.Skeleton);
n.node.active = !0;
n.setAnimation(0, "animation" + e, !1);
n.setCompleteListener(function() {
n.setCompleteListener(null);
var e = cc.find("coin", i.tengman.node);
e.active = !0;
e.opacity = 255;
e.getComponent(cc.Label).string = Global.formatNumShort(o, 0);
i.popJackpotResult(t.jackpot);
});
}).start();
}

case 41:
case "end":
return c.stop();
}
}, c);
}))();
},
popJackpotResult: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
var a, o, i, c, s, m, l, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
(a = cc.find("free_dialog", n.node.parent.parent)).active = !0;
(o = cc.find("free_dialog_bg", a)).opacity = 0;
o.runAction(cc.fadeTo(.2, 200));
(i = cc.find("jackpot_node", a)).active = !0;
(c = cc.find("freetanchuang", i).getComponent(sp.Skeleton)).node.active = !0;
(s = cc.find("coin", i)).scale = 0;
s.getComponent(cc.Label).string = "";
m = "dialog_mini_collect";
t.t0 = e.id;
t.next = 1 === t.t0 ? 16 : 2 === t.t0 ? 18 : 3 === t.t0 ? 20 : 4 === t.t0 ? 22 : 24;
break;

case 16:
m = "dialog_mini_collect";
return t.abrupt("break", 24);

case 18:
m = "dialog_minor_collect";
return t.abrupt("break", 24);

case 20:
m = "dialog_major_collect";
return t.abrupt("break", 24);

case 22:
m = "dialog_grand_collect";
return t.abrupt("break", 24);

case 24:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", m, !0);
c.setAnimation(0, "animation" + e.id + "_1", !1);
c.addAnimation(0, "animation" + e.id + "_2", !0);
(l = cc.find("btn_collect", i)).scale = 0;
t.next = 31;
return cc.vv.gameData.awaitTime(.3);

case 31:
Global.doRoallNumEff(s, 0, e.value, 3, null, null, 0, !0);
cc.tween(s).to(.2, {
scale: 1
}).start();
t.next = 35;
return cc.vv.gameData.awaitTime(.2);

case 35:
cc.tween(l).to(.2, {
scale: .5
}).start();
t.next = 38;
return cc.vv.gameData.awaitTime(.2);

case 38:
l.off("click");
d = function() {
var t = r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
l.off("click");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", !0);
cc.tween(o).to(.2, {
opacity: 0
}).start();
c.setAnimation(0, "animation" + e.id + "_3", !1);
c.setCompleteListener(function() {
c.setCompleteListener(null);
i.active = !1;
a.active = !1;
c.node.active = !1;
n._canSelect = !0;
});
t.next = 8;
return cc.vv.gameData.awaitTime(.3);

case 8:
cc.tween(s).to(.2, {
scale: 0
}).start();

case 9:
case "end":
return t.stop();
}
}, t);
}));
return function() {
return t.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(l, d);
l.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
l.stopAllActions();
e.next = 3;
return d();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 42:
case "end":
return t.stop();
}
}, t);
}))();
},
exitPickBonus: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e.reels_bg.active = !1;
e.reels_frame.active = !1;
e.items_node.active = !1;
e.bonus_bj.setAnimation(0, "animation1_3", !1);
e.bonus_bj.setCompleteListener(function() {
e.bonus_bj.setCompleteListener(null);
e.bonus_bj.node.active = !1;
});
cc.tween(e.bonus_wenzi.node).to(.5, {
y: e._startPosY
}).call(function() {
e.bonus_wenzi.node.active = !1;
}).start();
t = cc.find("coin", e.tengman.node);
cc.tween(t).to(.5, {
opacity: 0
}).call(function() {
t.active = !1;
}).start();
e.tips_node.y -= 100;
e.tips_node.active = !1;
cc.tween(cc.find("collect_node", e.node.parent)).by(.5, {
y: 100
}).start();
e.tengman.setAnimation(0, "animation1", !1);
e.tengman.addAnimation(0, "animation2", !0);
n.next = 15;
return cc.vv.gameData.awaitTime(1);

case 15:
e.tengman.node.active = !1;
cc.find("role", e.node.parent.parent).active = !0;
e.node.active = !1;
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
e._successCallback();

case 21:
case "end":
return n.stop();
}
}, n);
}))();
},
getWinCoin: function() {
return this._winCoin;
}
});
cc._RF.pop();
}, {} ],
MinamotoNoYoshitsune_PickGame: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "3fc05wF6OBHCavBUqRA3FS4", "MinamotoNoYoshitsune_PickGame");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
function o(e, n) {
if (e) {
if ("string" == typeof e) return i(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0;
}
}
function i(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
function c(e, n, t, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
t(e);
return;
}
r.done ? n(s) : Promise.resolve(s).then(a, o);
}
function r(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(a, o) {
var i = e.apply(n, t);
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
top_bg: cc.Node,
items: [ cc.Node ],
black_bg: cc.Node,
_haveOpenReward: [],
_canSelect: !0,
_result: null,
_successCallback: null,
_unlockBooster: []
},
onLoad: function() {},
enterPickGame: function(e, n, t) {
var a = this;
return r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
a._successCallback = e;
a.node.active = !0;
a.reset();
for (var n = 0; n < t.choiceIdxs.length; n++) {
var o = t.choiceIdxs[n], i = cc.find("item_bg/item_" + o, a.node);
a.showReward(i, !1, t.choiceItems[n]);
a._haveOpenReward.push(o);
}
cc.find("num_2", a.top_bg).active = 2 === t.totalCnt;
cc.find("num_3", a.top_bg).active = 3 === t.totalCnt;
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("pick2_bgm");
for (var c = function(e) {
var n = cc.find("item_bg/item_" + e, a.node);
n.off(cc.Node.EventType.TOUCH_END);
n.on(cc.Node.EventType.TOUCH_END, function() {
if (a._canSelect) {
n.off(cc.Node.EventType.TOUCH_END);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "mappick_open", !0);
a._canSelect = !1;
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 1;
t.data.choiceId = e;
cc.vv.NetManager.send(t);
}
});
}, r = 1; r < 9; r++) c(r);
}));

case 1:
case "end":
return e.stop();
}
}, e);
}))();
},
reset: function() {
this._haveOpenReward = [];
this._result = null;
this._canSelect = !0;
this._unlockBooster = [];
for (var e = 1; e < 9; e++) {
var n, t = cc.find("item_bg/item_" + e, this.node), o = a(t.children);
try {
for (o.s(); !(n = o.n()).done; ) {
n.value.color = cc.Color.WHITE;
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
cc.find("spine", t).getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
cc.find("coin", t).active = !1;
cc.find("coin_light", t).active = !1;
}
},
onRcvSubGameData: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
var a, o, i, c, r, s, m;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (200 === e.code) {
t.next = 3;
break;
}
n._canSelect = !0;
return t.abrupt("return");

case 3:
if (1 === e.data.rtype) {
t.next = 6;
break;
}
n._canSelect = !0;
return t.abrupt("return");

case 6:
a = cc.vv.gameData.getGameCfg();
o = e.data;
n._result = o;
n._haveOpenReward.push(o.choiceId);
o.choiceItem.type !== a.MapBoostType.Coin && n._unlockBooster.push(o.choiceItem.type);
if (!o.pickBoosterGame.isEnd) {
t.next = 26;
break;
}
i = n.items[o.choiceId - 1];
n.showReward(i, !1, o.choiceItem);
t.next = 16;
return cc.vv.gameData.awaitTime(.8);

case 16:
cc.vv.gameData.AddCoin(o.pickBoosterGame.winCoin);
c = 0;
for (r = 0; r < n.items.length; r++) if (-1 === n._haveOpenReward.indexOf(r + 1)) {
s = n.items[r];
n.showReward(s, !0, o.pickBoosterGame.totalItems[c]);
c++;
}
t.next = 21;
return cc.vv.gameData.awaitTime(2);

case 21:
t.next = 23;
return n.popResult();

case 23:
n._successCallback();
t.next = 29;
break;

case 26:
n._canSelect = !0;
m = n.items[o.choiceId - 1];
n.showReward(m, !1, o.choiceItem);

case 29:
case "end":
return t.stop();
}
}, t);
}))();
},
getResult: function() {
return this._result;
},
showReward: function(e, n, t) {
return r(regeneratorRuntime.mark(function o() {
var i, c, r, s, m, l, d;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
i = cc.vv.gameData.getGameCfg();
c = 1;
o.t0 = t.type;
o.next = o.t0 === i.MapBoostType.ExtraFreeCnt ? 5 : o.t0 === i.MapBoostType.WildPaysDouble ? 7 : o.t0 === i.MapBoostType.Coin ? 9 : 11;
break;

case 5:
c = 2;
return o.abrupt("break", 13);

case 7:
c = 6;
return o.abrupt("break", 13);

case 9:
c = 7;
return o.abrupt("break", 13);

case 11:
c = t.type;
return o.abrupt("break", 13);

case 13:
r = e.getChildByName("spine").getComponent(sp.Skeleton);
if (n) {
r.setAnimation(0, "animation" + c + "_2", !1);
s = a(e.children);
try {
for (s.s(); !(m = s.n()).done; ) m.value.color = cc.Color.GRAY;
} catch (e) {
s.e(e);
} finally {
s.f();
}
if (t.type === i.MapBoostType.Coin) {
(l = cc.find("coin", e)).active = !0;
l.scale = 1;
l.getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0);
}
} else {
r.setAnimation(0, "animation" + c, !1);
r.addAnimation(0, "animation" + c + "_1", !0);
if (t.type === i.MapBoostType.Coin) {
(d = cc.find("coin", e)).getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0);
d.active = !0;
d.scale = 0;
cc.tween(d).delay(.3).to(.5, {
scale: 1
}, {
easing: "backOut"
}).call(function() {
cc.find("coin_light", e).active = !0;
}).start();
}
}

case 15:
case "end":
return o.stop();
}
}, o);
}))();
},
popResult: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(t) {
var o, i, c, r, s, m, l, d, u, f, p, g, v;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
o = cc.vv.gameData.getGameCfg();
if (!e._result) {
n.next = 27;
break;
}
i = 0;
c = a(e._result.pickBoosterGame.choiceItems);
try {
for (c.s(); !(r = c.n()).done; ) r.value.type !== o.MapBoostType.Coin && i++;
} catch (e) {
c.e(e);
} finally {
c.f();
}
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_mappick_collect", !0);
e.black_bg.active = !0;
(s = cc.find("booster_result_" + i, e.node)).active = !0;
m = s.getComponent(sp.Skeleton);
if (0 === i) {
m.setAnimation(0, "animation", !1);
m.addAnimation(0, "animation2", !0);
} else {
m.setAnimation(0, "animation" + (i + 1) + "_1", !1);
m.addAnimation(0, "animation" + (i + 1) + "_2", !0);
}
(l = cc.find("coin", s)).scale = 0;
Global.doRoallNumEff(l, 0, e._result.pickBoosterGame.winCoin, 1.5, null, null, 0, !0);
cc.tween(l).delay(.2).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
(d = cc.find("btn_collect", s)).scale = 0;
cc.tween(d).delay(.4).to(.5, {
scale: .5
}, {
easing: "backOut"
}).start();
if (u = cc.find("booster_1", s)) {
u.scale = 0;
f = cc.vv.gameData.GetAtlasByName("popup");
u.getComponent(cc.Sprite).spriteFrame = f.getSpriteFrame("theme205_pop_booster" + e._unlockBooster[0]);
cc.tween(u).delay(.3).to(.5, {
scale: 1 === i ? 1 : .8
}, {
easing: "backOut"
}).start();
}
if (p = cc.find("booster_2", s)) {
g = cc.vv.gameData.GetAtlasByName("popup");
p.getComponent(cc.Sprite).spriteFrame = g.getSpriteFrame("theme205_pop_booster" + e._unlockBooster[1]);
p.scale = 0;
cc.tween(p).delay(.3).to(.5, {
scale: 1 === i ? 1 : .8
}, {
easing: "backOut"
}).start();
}
n.next = 24;
return cc.vv.gameData.awaitTime(.9);

case 24:
v = function() {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(e._result.pickBoosterGame.winCoin);
d.off("click");
cc.tween(l).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
cc.tween(d).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
u && cc.tween(u).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
p && cc.tween(p).to(.5, {
scale: 0
}, {
easing: "backOut"
}).start();
0 === i ? m.setAnimation(0, "animation3", !1) : m.setAnimation(0, "animation" + (i + 1) + "_3", !1);
m.setCompleteListener(function() {
m.setCompleteListener(null);
e.black_bg.active = !1;
t();
});
};
cc.vv.gameData.checkAutoPlay(d, v);
d.on("click", function() {
d.stopAllActions();
v();
});

case 27:
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
}, {} ],
MinamotoNoYoshitsune_PrizePool: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "159b1YVzChAj5ViRm7Pp+jG", "MinamotoNoYoshitsune_PrizePool");
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {},
ShowNodeLockByNode: function(e, n, t, a, o) {
if (e) {
var i = cc.find("lock", e), c = cc.find("image", i), r = cc.find("unlock", e), s = cc.find("image", r), m = cc.find("jpsuo", e).getComponent(sp.Skeleton);
if (n) if (o) {
i.active = !0;
m.setAnimation(0, "animation" + (4 - a) + "_2", !0);
r.active = !1;
c.scale = 0;
} else {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "jp_lock", !0);
m.clearTracks();
m.setToSetupPose();
m.setAnimation(0, "animation" + (4 - a), !1);
m.addAnimation(0, "animation" + (4 - a) + "_2", !0);
i.active = !0;
r.active = !1;
c.scale = 0;
cc.tween(c).to(.1, {
scale: 1
}, {
easing: "backOut"
}).delay(2).to(.1, {
scale: 0
}, {
easing: "backIn"
}).start();
} else if (o) {
i.active = !1;
r.active = !0;
s.scale = 0;
m.setAnimation(0, "animation", !0);
} else {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "jp_unlock", !0);
m.clearTracks();
m.setToSetupPose();
m.setAnimation(0, "animation" + (4 - a) + "_1", !1);
m.addAnimation(0, "animation", !0);
i.active = !1;
r.active = !0;
s.scale = 0;
cc.tween(s).to(.1, {
scale: 1
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
});
cc._RF.pop();
}, {
LMSlots_PrizePool_Base: void 0
} ],
MinamotoNoYoshitsune_Reel: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "9c005zopPNAtIFC8/dPLchd", "MinamotoNoYoshitsune_Reel");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
function o(e, n) {
if (e) {
if ("string" == typeof e) return i(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0;
}
}
function i(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
StartMove: function() {
this._super();
var e = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
e && (e.color = cc.Color.GRAY);
},
OnReelSpinEnd: function() {
this._super();
},
clearLastSymbol: function() {
var e = this._symbols[this._symbols.length - 1];
if (e) {
e.setAnimationToTop(!1);
e.ShowKuang(!1);
}
},
playReelStop: function() {
var e = !1;
if (this._originResult) for (var n = 0; n < this._originResult.length; n++) {
var t = this._symbols[n];
if (t.GetShowId() === this._cfg.bonusId || t.GetShowId() === this._cfg.extraSpinId || t.GetShowId() === this._cfg.scatterId) {
e = !0;
t.GetShowId() === this._cfg.bonusId ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus1_land", !0) : t.GetShowId() === this._cfg.scatterId ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_land", !0) : cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus2_land", !0);
t.playStopAnimation();
}
}
e || cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_stop", !0);
var o = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
o && (o.color = cc.Color.WHITE);
var i, c = a(this._symbols);
try {
for (c.s(); !(i = c.n()).done; ) {
i.value.resetColor();
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
},
playAntiAnimation: function() {
var e = !1, n = cc.vv.gameData.getGameInfo();
if (4 === this._reelIdx) if (n.gemsPushBonus) {
this.ShowAntiEffect(!0, "node_anti");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_notify", !0);
this._speed = 2e3;
e = !0;
} else if (Math.random() <= .05) {
if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime()) return e;
this.ShowAntiEffect(!0, "node_anti");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "reel_notify", !0);
this._speed = 2e3;
e = !0;
}
return e;
},
ShowAntiEffect: function(e, n) {
if (!1 === e) {
var t = cc.find("node_anti", this.node);
if (t && t.active) {
t.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName("reel_notify");
}
} else {
var a = cc.find(n, this.node);
a ? a.active = e : cc.log("未找到加速节点：mask/node_anti");
}
},
GetResizeHeightObjs: function() {
var e = [], n = cc.find("mask", this.node);
n && e.push(n);
var t = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
t && e.push(t);
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
var n = cc.find("reels_frame/top_bg", this.node.parent.parent);
n && e.push(n);
var t = cc.find("freegame_tips", this.node.parent.parent);
t && e.push(t);
}
return e;
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
MinamotoNoYoshitsune_Slots: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "5ad75x4CqZASo7cIoBd3j/s", "MinamotoNoYoshitsune_Slots");
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = o(e))) {
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
function o(e, n) {
if (e) {
if ("string" == typeof e) return i(e, n);
var t = Object.prototype.toString.call(e).slice(8, -1);
"Object" === t && e.constructor && (t = e.constructor.name);
return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0;
}
}
function i(e, n) {
(null == n || n > e.length) && (n = e.length);
for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
return a;
}
function c(e, n, t, a, o, i, c) {
try {
var r = e[i](c), s = r.value;
} catch (e) {
t(e);
return;
}
r.done ? n(s) : Promise.resolve(s).then(a, o);
}
function r(e) {
return function() {
var n = this, t = arguments;
return new Promise(function(a, o) {
var i = e.apply(n, t);
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
_haveOpenMap: !1,
_formatCards: null,
_baseCoin: 0,
_freeCnt: 0,
_curUnlockBooster: []
},
Init: function() {
var e = this;
this._super();
var n = cc.find("collect_node/jdtsaoguang", this.node), t = cc.vv.gameData.getDeskInfo();
n.on(cc.Node.EventType.TOUCH_END, function() {
t.needBet > t.currmult && "idle" === cc.vv.gameData.GetSlotState() && e._bottomScript.SetBetIdx(t.needBet);
});
var a = cc.find("collect_node/jdt", this.node).getComponent(sp.Skeleton);
t.needBet <= t.currmult ? a.setAnimation(0, "animation2_1", !0) : a.setAnimation(0, "animation1_1", !0);
cc.find("collect_node/scale_node", this.node).active = t.needBet <= t.currmult;
this.updateCollectProgress(t.mapInfo, !1);
cc.find("collect_node/btn_map", this.node).on("click", function() {
if ("idle" === cc.vv.gameData.GetSlotState() && !e._haveOpenMap) {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
e._haveOpenMap = !0;
e._bottomScript.ShowBtnsByState("moveing_1");
var n = cc.find("mapControl", e.node.parent).getComponent("MinamotoNoYoshitsune_Map");
n.initMap(e._gameInfo ? e._gameInfo.mapInfo : t.mapInfo);
n.openMap(!0);
}
});
cc.find("tengman", this.node.parent).getComponent(sp.Skeleton).setStartListener(function(e) {
var n = "";
switch (e.animation ? e.animation.name : "") {
case "animation4":
n = "logo_unlock";
break;

case "animation5":
n = "logo_active";
break;

case "animation1":
n = "logo_lock";
}
"" !== n && cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", n, !0);
});
},
getBaseCoin: function() {
return this._baseCoin;
},
StartMove: function() {
if (this._freeCnt > 0) {
this._freeCnt--;
this._freeCnt < 0 && (this._freeCnt = 0);
this.updateFreeTimes(this._freeCnt);
}
this._super();
Global.SlotsSoundMgr.playNormalBgm();
},
ReconnectShow: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, o, i, c, r, s, m, l, d, u, f, p, g, v, _, h, b, y, S, w, k;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e._super();
t = cc.vv.gameData.getDeskInfo();
if (!(o = cc.vv.gameData.GetFreeTime())) {
n.next = 60;
break;
}
if (2 !== t.mapInfo.state) {
n.next = 29;
break;
}
e.ShowGameview(!0);
cc.find("spr_bg_bonus", e.node.parent).active = !0;
cc.find("LMSlots_PrizePool_1", e.node.parent).active = !1;
e.setTengmanVisible(!0);
(i = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation6_1", !0);
cc.find("coin", i.node).active = !0;
cc.find("coin", i.node).getComponent(cc.Label).string = Global.formatNumShort(t.bonusTotalCoin, 0);
c = e._cfg.row;
r = e._cfg.col;
if (-1 !== t.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddRow)) {
s = a(e._reels);
try {
for (s.s(); !(m = s.n()).done; ) m.value.AddCount(1, .01);
} catch (e) {
s.e(e);
} finally {
s.f();
}
c = e._cfg.row + 1;
}
if (-1 !== t.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddReel)) {
cc.find("reels_bg", e.node).scale = .82;
cc.find("reels", e.node).scale = .82;
cc.find("top_ani", e.node).scale = .82;
cc.find("black_bg", e.node).scale = .82;
cc.find("reels_frame", e.node).active = !1;
cc.find("reels_frame_" + c + "_6", e.node).active = !0;
r = e._cfg.col + 1;
}
e._curUnlockBooster = t.mapInfo.nextUnlockBoosters;
e._freeCnt = o;
e.updateFreeTimes(o);
(l = cc.find("map_" + c + "_" + r, e.node)).active = !0;
cc.find("bonus_wenzi/coin", l).getComponent(cc.Label).string = Global.formatNumShort(t.bonusBaseCoin, 0);
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free2_bgm");
n.next = 27;
return cc.vv.gameData.awaitTime(1);

case 27:
n.next = 58;
break;

case 29:
e.setTengmanVisible(!0);
(d = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation6_1", !0);
(u = cc.find("collect_node", e.node)).y -= 100;
u.active = !1;
(f = cc.find("freegame_tips", e.node)).active = !0;
e._freeCnt = o;
e.updateFreeTimes(o);
f.y += 100;
(p = cc.find("coin", d.node)).active = !0;
p.opacity = 255;
p.getComponent(cc.Label).string = Global.formatNumShort(t.bonusTotalCoin, 0);
(g = cc.find("bonus_bj", e.node).getComponent(sp.Skeleton)).node.active = !0;
g.setAnimation(0, "animation1_2", !0);
(v = cc.find("bonus_wenzi", e.node).getComponent(sp.Skeleton)).node.active = !0;
v.node.y = 0;
cc.find("icon", v.node).active = !1;
cc.find("coin", v.node).active = !0;
cc.find("coin", v.node).getComponent(cc.Label).string = Global.formatNumShort(t.bonusBaseCoin, 0);
e.ShowGameview(!0);
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free1_bgm");
n.next = 58;
return cc.vv.gameData.awaitTime(1);

case 58:
n.next = 104;
break;

case 60:
e.ShowGameview(!1);
if (!t.pickBonus) {
n.next = 72;
break;
}
e._bottomScript.ShowBtnsByState("moveing_1");
e.setTengmanVisible(!0);
cc.find("tengman", e.node.parent).getComponent(sp.Skeleton).setAnimation(0, "animation6", !0);
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
prizeType: 0,
pauseNum: t.pickBonus.jackpotValues[0]
}, {
prizeType: 1,
pauseNum: t.pickBonus.jackpotValues[1]
}, {
prizeType: 2,
pauseNum: t.pickBonus.jackpotValues[2]
}, {
prizeType: 3,
pauseNum: t.pickBonus.jackpotValues[3]
} ]);
_ = cc.find("pick_bonus", e.node).getComponent("MinamotoNoYoshitsune_PickBonus");
n.next = 70;
return _.reconnect();

case 70:
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
e.ShowBottomWin(_.getWinCoin(), _.getWinCoin(), !0, function() {
e.CanDoNextRound();
});

case 72:
if (1 !== t.mapInfo.state) {
n.next = 104;
break;
}
e._bottomScript.ShowBtnsByState("moveing_1");
n.next = 76;
return cc.vv.gameData.awaitTime(.5);

case 76:
(h = cc.find("collect_node/jiman", e.node).getComponent(sp.Skeleton)).node.active = !0;
h.setToSetupPose();
h.setAnimation(0, "animation", !1);
h.setCompleteListener(function() {
h.node.active = !1;
});
n.next = 83;
return cc.vv.gameData.awaitTime(1);

case 83:
b = cc.find("mapControl", e.node.parent).getComponent("MinamotoNoYoshitsune_Map");
n.next = 86;
return b.showMap(t.mapInfo);

case 86:
y = e._cfg.MapConfig[t.mapInfo.currId - 1];
e.cutScenePick();
n.next = 90;
return cc.vv.gameData.awaitTime(1.8);

case 90:
S = cc.find("pick_game", e.node.parent).getComponent("MinamotoNoYoshitsune_PickGame");
n.next = 93;
return S.enterPickGame(y.index, y.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

case 93:
e.cutScenePick();
n.next = 96;
return cc.vv.gameData.awaitTime(1.8);

case 96:
cc.find("pick_game", e.node.parent).active = !1;
w = S.getResult();
e.clearCollectProgress();
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
k = w.pickBoosterGame.winCoin;
n.next = 104;
return e.ShowBottomWin(k, k, !0, function() {
e.CanDoNextRound();
});

case 104:
case "end":
return n.stop();
}
}, n);
}))();
},
setTengmanVisible: function(e) {
cc.find("tengman", this.node.parent).active = e;
cc.find("role", this.node.parent).active = !e;
},
onMsgSpine: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
var a, o;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n._gameInfo = e;
n._gameInfo.bonusBaseCoin ? n._baseCoin = n._gameInfo.bonusBaseCoin : n._baseCoin = 0;
a = e.resultCards;
n.formatSlotsResult(a);
n.SetSlotsResult(n._formatCards);
if (n._gameInfo.pickBonus) {
n.SetStopTime(4);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "active_man", !0);
(o = cc.find("transition", n.node.parent).getComponent(sp.Skeleton)).node.active = !0;
o.setToSetupPose();
o.setAnimation(0, "skill", !1);
o.setCompleteListener(function() {
o.setCompleteListener(null);
o.node.active = !1;
});
}

case 6:
case "end":
return t.stop();
}
}, t);
}))();
},
formatSlotsResult: function(e) {
for (var n = e.concat(), t = 0; t < this._cfg.col; t++) {
for (var a = [], o = 0, i = 0; i < n.length / this._cfg.row; i++) {
n[i * this._cfg.col + t] === this._cfg.wildId && o++;
a.push(n[i * this._cfg.col + t]);
}
for (var c = 0, r = -1, s = 0; s < a.length; s++) if (a[s] === this._cfg.wildId) {
-1 === r && (r = s);
a[s] = (0 === r ? 105 - o : 101) + c;
n[s * this._cfg.col + t] = a[s];
c++;
}
}
this._formatCards = n;
},
SetSlotsResult: function(e) {
for (var n = e.length / this._col, t = [], a = 0; a < e.length; a++) {
Math.floor(a / n);
var o = a % this._col;
if (this._cfg.symbol[e[a]]) {
var i = {};
i.sid = e[a];
if (e[a] === this._cfg.bonusId || e[a] === this._cfg.extraSpinId) {
var c = this._gameInfo.bonusIdxs.indexOf(a + 1);
-1 !== c && c < this._gameInfo.bonusItems.length && (i.data = this._gameInfo.bonusItems[c]);
}
t[o] || (t[o] = []);
t[o].unshift(i);
} else {
var r = {
sid: 5
};
t[o] || (t[o] = []);
t[o].unshift(r);
}
}
for (var s = 0; s < this._reels.length; s++) {
var m = this._reels[s], l = t[s];
m.SetResult(l);
}
},
CheckEnterFreeGame: function() {
return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
},
CheckExitFreeGame: function() {
return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
},
ShowWinTrace: function() {
for (var e = [], n = 0; n < this._gameInfo.zjLuXian.length; n++) for (var t = this._gameInfo.zjLuXian[n], a = 0; a < t.indexs.length; a++) e[t.indexs[a]] = 1;
if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var o = 0; o < this._gameInfo.scatterZJLuXian.indexs.length; o++) {
e[this._gameInfo.scatterZJLuXian.indexs[o]] = 1;
}
for (var i in e) {
var c = this.GetSymbolByIdx(Number(i));
if (c) {
if (101 !== c.GetShowId() && 102 !== c.GetShowId() && 103 !== c.GetShowId() && 104 !== c.GetShowId() && 105 !== c.GetShowId()) c.playWinAnimation(); else if (101 === c.GetShowId() || 102 === c.GetShowId() || 103 === c.GetShowId()) if (Math.floor((Number(i) - 1) / this._cfg.col) === this._cfg.row - 1) c.playWinAnimation(); else for (var r = c.GetSymbolReelIdx(), s = this._reels[r], m = 0; m < this._cfg.row; m++) {
var l = s.GetSymbolByRow(m);
if (104 === l.GetShowId() || 105 === l.GetShowId()) {
l.playWildAnimation();
break;
}
if (101 === l.GetShowId() || 102 === l.GetShowId() || 103 === l.GetShowId()) {
l.playWinAnimation();
break;
}
} else c.playWildAnimation();
c.ShowKuang();
}
}
},
cutScenePick: function() {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition2", !0);
var e = cc.find("black_bg", this.node.parent);
e.active = !0;
var n = cc.find("transition", this.node.parent);
n.active = !0;
var t = n.getComponent(sp.Skeleton);
t.setAnimation(0, "skill", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
n.active = !1;
e.active = !1;
});
},
OnSpinEnd: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
n.next = 2;
return e.collectSymbol();

case 2:
if (!e._gameInfo.gemsPushBonus) {
n.next = 5;
break;
}
n.next = 5;
return e.triggerGemsPushBonus();

case 5:
if (!e._gameInfo.pickBonus) {
n.next = 8;
break;
}
n.next = 8;
return e.triggerPickBonus();

case 8:
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && e._gameInfo.bonusIdxs.length > 0)) {
n.next = 11;
break;
}
n.next = 11;
return e.triggerBonusCollectInFreeGame();

case 11:
if (!e.CheckEnterFreeGame() || 0 !== e._gameInfo.mapInfo.state) {
n.next = 14;
break;
}
n.next = 14;
return e.triggerGetFreeTime();

case 14:
e.ShowWinTrace();
t = cc.vv.gameData.GetGameWin();
o = cc.vv.gameData.GetGameWin();
cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (o = cc.vv.gameData.GetGameTotalFreeWin());
e.ShowBottomWin(t, o, !0, r(regeneratorRuntime.mark(function n() {
var t, o, i, c, r, s, m, l, d, u, f, p, g;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (e._gameInfo.gemsPushBonus) {
e.setTengmanVisible(!1);
t = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton);
cc.find("coin", t.node).active = !1;
t.setAnimation(0, "animation1", !1);
t.addAnimation(0, "animation2", !0);
}
if (!(0 !== e._gameInfo.mapInfo.state && e._gameInfo.mapInfo.progressData.currCnt > 0)) {
n.next = 71;
break;
}
e._bottomScript.ShowBtnsByState("moveing_1");
n.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_full", !0);
(o = cc.find("collect_node/jiman", e.node).getComponent(sp.Skeleton)).node.active = !0;
o.setToSetupPose();
o.setAnimation(0, "animation", !1);
o.setCompleteListener(function() {
o.node.active = !1;
});
n.next = 13;
return cc.vv.gameData.awaitTime(1);

case 13:
i = cc.find("mapControl", e.node.parent).getComponent("MinamotoNoYoshitsune_Map");
n.next = 16;
return i.showMap(e._gameInfo.mapInfo);

case 16:
if ((c = e._cfg.MapConfig[e._gameInfo.mapInfo.currId - 1]).type !== e._cfg.MapType.PickBooster) {
n.next = 37;
break;
}
e.cutScenePick();
n.next = 21;
return cc.vv.gameData.awaitTime(1.5);

case 21:
r = cc.find("pick_game", e.node.parent).getComponent("MinamotoNoYoshitsune_PickGame");
n.next = 24;
return r.enterPickGame(c.index, c.pickCnt, cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().pickBoosterGame : cc.vv.gameData.getDeskInfo().pickBoosterGame);

case 24:
e.cutScenePick();
n.next = 27;
return cc.vv.gameData.awaitTime(1.3);

case 27:
cc.find("black_bg", e.node.parent).active = !1;
cc.find("pick_game", e.node.parent).active = !1;
s = r.getResult();
e.clearCollectProgress();
m = s.pickBoosterGame.winCoin;
n.next = 35;
return e.ShowBottomWin(m, m, !0, function() {
e.CanDoNextRound();
});

case 35:
n.next = 69;
break;

case 37:
if (c.type !== e._cfg.MapType.SuperFreeGame) {
n.next = 69;
break;
}
n.next = 40;
return e.popMapFreeDialog(e._gameInfo.mapInfo);

case 40:
e._curUnlockBooster = e._gameInfo.mapInfo.nextUnlockBoosters;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition3", !0);
(l = cc.find("transition", e.node.parent)).active = !0;
l.getComponent(sp.Skeleton).setAnimation(0, "skill", !1);
l.getComponent(sp.Skeleton).setCompleteListener(function() {
l.getComponent(sp.Skeleton).setCompleteListener(null);
l.active = !1;
});
n.next = 48;
return cc.vv.gameData.awaitTime(2);

case 48:
e.ShowGameview(!0);
cc.find("spr_bg_bonus", e.node.parent).active = !0;
cc.find("LMSlots_PrizePool_1", e.node.parent).active = !1;
e.clearCollectProgress();
d = e._cfg.row;
u = e._cfg.col;
if (-1 !== e._gameInfo.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddRow)) {
f = a(e._reels);
try {
for (f.s(); !(p = f.n()).done; ) p.value.AddCount(1, .01);
} catch (e) {
f.e(e);
} finally {
f.f();
}
d = e._cfg.row + 1;
}
if (-1 !== e._gameInfo.mapInfo.nextUnlockBoosters.indexOf(e._cfg.MapBoostType.AddReel)) {
cc.find("reels_bg", e.node).scale = .82;
cc.find("reels", e.node).scale = .82;
cc.find("top_ani", e.node).scale = .82;
cc.find("black_bg", e.node).scale = .82;
cc.find("reels_frame", e.node).active = !1;
cc.find("reels_frame_" + d + "_6", e.node).active = !0;
u = e._cfg.col + 1;
} else cc.find("freegame_tips", e.node).active = !0;
e._freeCnt = cc.vv.gameData.GetTotalFree();
e.updateFreeTimes(cc.vv.gameData.GetTotalFree());
(g = cc.find("map_" + d + "_" + u, e.node)).active = !0;
e.setTengmanVisible(!0);
cc.find("tengman", e.node.parent).getComponent(sp.Skeleton).setAnimation(0, "animation6", !0);
cc.find("bonus_wenzi/coin", g).getComponent(cc.Label).string = Global.formatNumShort(e._gameInfo.mapInfo.startPrice, 0);
n.next = 66;
return cc.vv.gameData.awaitTime(2);

case 66:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free2_bgm");
e.CanDoNextRound();

case 69:
n.next = 72;
break;

case 71:
e.CheckEnterFreeGame() ? e.triggerFreeGame() : e.CheckExitFreeGame() ? e.triggerExitFreeGame() : e.CanDoNextRound();

case 72:
case "end":
return n.stop();
}
}, n);
})));

case 19:
case "end":
return n.stop();
}
}, n);
}))();
},
triggerBonusCollectInFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, a, o, i, c, r, s, m, l, d, u, f, p, g, v, _, h, b, y, S;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(t = cc.find("kuang_gl_01", e.node).getComponent(sp.Skeleton)).node.active = !0;
a = e._cfg.col;
o = e._cfg.row;
if (2 === e._gameInfo.mapInfo.state) {
a = -1 === e._curUnlockBooster.indexOf(e._cfg.MapBoostType.AddReel) ? 5 : 6;
o = -1 === e._curUnlockBooster.indexOf(e._cfg.MapBoostType.AddRow) ? 4 : 5;
t.setAnimation(0, "animation" + o + "_" + a, !0);
} else t.setAnimation(0, "animation4_5", !0);
cc.find("black_bg", e.node).active = !0;
for (i = 0; i < e._gameInfo.bonusIdxs.length; i++) {
c = e._gameInfo.bonusIdxs[i];
(r = e.GetSymbolByIdx(c)) && r.playWinAnimation();
}
n.next = 9;
return cc.vv.gameData.awaitTime(.5);

case 9:
if (2 !== e._gameInfo.mapInfo.state) {
n.next = 17;
break;
}
if (e._gameInfo.bonusTotalCoin - e._gameInfo.bonusCurCoin != 0 || 0 === e._gameInfo.bonusTotalCoin) {
n.next = 17;
break;
}
e.setTengmanVisible(!0);
(s = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation7", !1);
s.addAnimation(0, "animation6_1", !0);
n.next = 17;
return cc.vv.gameData.awaitTime(1);

case 17:
m = cc.find("shoujifei", e.node).getComponent(sp.Skeleton);
l = e._gameInfo.bonusTotalCoin - e._gameInfo.bonusCurCoin;
d = 0;

case 20:
if (!(d < e._gameInfo.bonusIdxs.length)) {
n.next = 36;
break;
}
u = e._gameInfo.bonusIdxs[d];
if (!e._gameInfo.bonusItems[d].coin) {
n.next = 33;
break;
}
if (!(f = e.GetSymbolByIdx(u))) {
n.next = 33;
break;
}
m.node.active = !0;
p = f.node.convertToWorldSpaceAR(cc.v2(0, 0));
p = e.node.convertToNodeSpaceAR(p);
m.node.position = p;
m.setAnimation(0, e._cfg.shoujifeiCfg[o][a][u], !1);
l += e._gameInfo.bonusItems[d].coin;
n.next = 33;
return new Promise(function(n) {
m.setCompleteListener(function() {
m.setCompleteListener(null);
var t = cc.find("tengman/coin", e.node.parent);
t.active = !0;
t.opacity = 255;
t.getComponent(cc.Label).string = Global.formatNumShort(l, 0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", !0);
var a = cc.find("tengman/bonusjieshou", e.node.parent).getComponent(sp.Skeleton);
a.node.active = !0;
a.setAnimation(0, "animation", !1);
a.setCompleteListener(function() {
a.setCompleteListener(null);
n();
a.node.active = !1;
});
});
});

case 33:
d++;
n.next = 20;
break;

case 36:
g = 0;

case 37:
if (!(g < e._gameInfo.bonusIdxs.length)) {
n.next = 61;
break;
}
v = e._gameInfo.bonusIdxs[g];
if (!e._gameInfo.bonusItems[g].freeCnt) {
n.next = 58;
break;
}
if (!(_ = e.GetSymbolByIdx(v))) {
n.next = 58;
break;
}
e._freeCnt += e._gameInfo.bonusItems[g].freeCnt;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "fg_collect", !0);
(h = cc.instantiate(cc.find("particle_fly", e.node.parent))).active = !0;
h.parent = e.node.parent;
b = _.node.convertToWorldSpaceAR(cc.v2(0, 0));
b = e.node.parent.convertToNodeSpaceAR(b);
h.position = b;
y = cc.find("freegame_tips", e.node);
e._gameInfo.mapInfo;
-1 !== e._curUnlockBooster.indexOf(e._cfg.MapBoostType.AddReel) && (y = -1 !== e._curUnlockBooster.indexOf(e._cfg.MapBoostType.AddRow) ? cc.find("reels_frame_5_6/freegame_tips", e.node) : cc.find("reels_frame_4_6/freegame_tips", e.node));
S = cc.find("remain_times", y).convertToWorldSpaceAR(cc.v2(0, 0));
S = e.node.parent.convertToNodeSpaceAR(S);
cc.tween(h).to(.5, {
position: S
}).call(function() {
e.updateFreeTimes(e._freeCnt);
}).removeSelf().start();
n.next = 58;
return cc.vv.gameData.awaitTime(.5);

case 58:
g++;
n.next = 37;
break;

case 61:
t.node.active = !1;
cc.find("black_bg", e.node).active = !1;

case 63:
case "end":
return n.stop();
}
}, n);
}))();
},
GetSymbolByIdx: function(e) {
var n = (e - 1) % this._col, t = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((e - 1) / this._col) - 1;
return this._reels[n].GetSymbolByRow(t);
},
triggerGemsPushBonus: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, a, o, i, c, r, s, m, l, d, u, f, p, g, v;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(t = cc.find("kuang_gl_01", e.node).getComponent(sp.Skeleton)).node.active = !0;
a = e._cfg.col;
o = e._cfg.row;
t.setAnimation(0, "animation4_5", !0);
cc.find("black_bg", e.node).active = !0;
i = 0;

case 7:
if (!(i < e._gameInfo.resultCards.length)) {
n.next = 17;
break;
}
if (e._gameInfo.resultCards[i] !== e._cfg.scatterId) {
n.next = 14;
break;
}
if (!(c = e.GetSymbolByIdx(i + 1))) {
n.next = 14;
break;
}
c.playTriggerAnimation();
return n.abrupt("break", 17);

case 14:
i++;
n.next = 7;
break;

case 17:
for (r = 0; r < e._gameInfo.bonusIdxs.length; r++) {
s = e._gameInfo.bonusIdxs[r];
(m = e.GetSymbolByIdx(s)) && m.playTriggerAnimation();
}
n.next = 20;
return cc.vv.gameData.awaitTime(.5);

case 20:
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
prizeType: 0,
pauseNum: e._gameInfo.jackpotValues[0]
}, {
prizeType: 1,
pauseNum: e._gameInfo.jackpotValues[1]
}, {
prizeType: 2,
pauseNum: e._gameInfo.jackpotValues[2]
}, {
prizeType: 3,
pauseNum: e._gameInfo.jackpotValues[3]
} ]);
e.setTengmanVisible(!0);
(l = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation4", !1);
l.addAnimation(0, "animation5", !1);
l.addAnimation(0, "animation6", !1);
l.addAnimation(0, "animation7", !1);
l.addAnimation(0, "animation6_1", !0);
n.next = 30;
return cc.vv.gameData.awaitTime(7);

case 30:
d = cc.find("shoujifei", e.node).getComponent(sp.Skeleton);
u = 0;
f = 0;

case 33:
if (!(f < e._gameInfo.bonusIdxs.length)) {
n.next = 48;
break;
}
p = e._gameInfo.bonusIdxs[f];
if (!(g = e.GetSymbolByIdx(p))) {
n.next = 45;
break;
}
d.node.active = !0;
v = g.node.convertToWorldSpaceAR(cc.v2(0, 0));
v = e.node.convertToNodeSpaceAR(v);
d.node.position = v;
d.setAnimation(0, e._cfg.shoujifeiCfg[o][a][p], !1);
u += e._gameInfo.bonusItems[f].jackpot ? e._gameInfo.bonusItems[f].jackpot.value : e._gameInfo.bonusItems[f].coin;
n.next = 45;
return new Promise(function(e) {
d.setCompleteListener(function() {
d.setCompleteListener(null);
var n = cc.find("coin", l.node);
n.active = !0;
n.opacity = 255;
n.getComponent(cc.Label).string = Global.formatNumShort(u, 0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", !0);
var t = cc.find("bonusjieshou", l.node).getComponent(sp.Skeleton);
t.node.active = !0;
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
e();
t.node.active = !1;
});
});
});

case 45:
f++;
n.next = 33;
break;

case 48:
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
cc.find("black_bg", e.node).active = !1;
t.node.active = !1;

case 51:
case "end":
return n.stop();
}
}, n);
}))();
},
triggerPickBonus: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, a, o, i, c, r, s, m, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = null;
a = 0;
o = 0;

case 3:
if (!(o < e._gameInfo.resultCards.length)) {
n.next = 15;
break;
}
if (e._gameInfo.resultCards[o] !== e._cfg.scatterId) {
n.next = 12;
break;
}
if (!(i = e.GetSymbolByIdx(o + 1))) {
n.next = 12;
break;
}
t = i;
a = o;
i.playTriggerAnimation();
return n.abrupt("break", 15);

case 12:
o++;
n.next = 3;
break;

case 15:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_trigger", !0);
n.next = 18;
return cc.vv.gameData.awaitTime(1);

case 18:
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
prizeType: 0,
pauseNum: e._gameInfo.jackpotValues[0]
}, {
prizeType: 1,
pauseNum: e._gameInfo.jackpotValues[1]
}, {
prizeType: 2,
pauseNum: e._gameInfo.jackpotValues[2]
}, {
prizeType: 3,
pauseNum: e._gameInfo.jackpotValues[3]
} ]);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "pick_active", !0);
(c = cc.find("shouji_huoyan", e.node)).active = !0;
r = t.node.convertToWorldSpaceAR(cc.v2(0, 0));
r = e.node.convertToNodeSpaceAR(r);
c.position = r;
s = Math.floor(a / 5) + 1;
c.getComponent(sp.Skeleton).setAnimation(0, "animation" + s, !1);
c.getComponent(sp.Skeleton).setCompleteListener(function() {
c.getComponent(sp.Skeleton).setCompleteListener(null);
c.active = !1;
});
n.next = 30;
return cc.vv.gameData.awaitTime(.5);

case 30:
e.setTengmanVisible(!0);
(m = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation4", !1);
m.addAnimation(0, "animation5", !1);
m.addAnimation(0, "animation6", !0);
n.next = 37;
return cc.vv.gameData.awaitTime(2);

case 37:
l = cc.find("pick_bonus", e.node).getComponent("MinamotoNoYoshitsune_PickBonus");
n.next = 40;
return l.enterPickBonus(r.y);

case 40:
cc.find("LMSlots_PrizePool_1", e.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
n.next = 43;
return e.ShowBottomWin(l.getWinCoin(), l.getWinCoin(), !0, null);

case 43:
case "end":
return n.stop();
}
}, n);
}))();
},
ShowGameview: function(e) {
this._super(e);
cc.find("collect_node", this.node).active = !e;
},
collectSymbol: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, a, o, i, c, r, s;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
n.next = 2;
break;
}
return n.abrupt("return");

case 2:
if (0 !== e._gameInfo.mapInfo.progressData.currCnt) {
n.next = 4;
break;
}
return n.abrupt("return");

case 4:
t = cc.find("collect_node/icon_diamond", e.node);
a = !1;
for (o = 0; o < e._gameInfo.resultCards.length; o++) if (e._gameInfo.resultCards[o] === e._cfg.collectSymbolId && (i = e.GetSymbolByIdx(o + 1))) {
a = !0;
(c = cc.instantiate(cc.find("particle_fly", e.node.parent))).active = !0;
c.parent = e.node.parent;
r = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
r = e.node.parent.convertToNodeSpaceAR(r);
c.position = r;
s = t.convertToWorldSpaceAR(cc.v2(0, 0));
s = e.node.parent.convertToNodeSpaceAR(s);
cc.tween(c).to(.5, {
position: s
}).removeSelf().start();
}
if (!a) {
n.next = 14;
break;
}
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "collect_fly", !0);
cc.tween(t).delay(.5).call(function() {
var e = cc.find("jieshou", t).getComponent(sp.Skeleton);
e.node.active = !0;
e.setToSetupPose();
e.setAnimation(0, "animation", !1);
e.setCompleteListener(function(n) {
e.node.active = !1;
});
}).start();
n.next = 12;
return cc.vv.gameData.awaitTime(.5);

case 12:
n.next = 14;
return e.updateCollectProgress(e._gameInfo.mapInfo, !0);

case 14:
case "end":
return n.stop();
}
}, n);
}))();
},
triggerGetFreeTime: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
n.next = 2;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(t) {
var a, o, i, c, r, s, m, l, d, u, f, p, g, v, _, h, b, y, S, w, k, x, C;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
e._freeCnt = e._gameInfo.freeCnt;
0;
(a = cc.find("kuang_gl_01", e.node).getComponent(sp.Skeleton)).node.active = !0;
a.setAnimation(0, "animation4_5", !0);
cc.find("black_bg", e.node).active = !0;
o = 0;

case 8:
if (!(o < e._gameInfo.resultCards.length)) {
n.next = 20;
break;
}
if (e._gameInfo.resultCards[o] !== e._cfg.scatterId) {
n.next = 17;
break;
}
if (!(i = e.GetSymbolByIdx(o + 1))) {
n.next = 17;
break;
}
c = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
e.node.convertToNodeSpaceAR(c).y;
i.playTriggerAnimation();
return n.abrupt("break", 20);

case 17:
o++;
n.next = 8;
break;

case 20:
for (r = 0; r < e._gameInfo.bonusIdxs.length; r++) {
s = e._gameInfo.bonusIdxs[r];
(m = e.GetSymbolByIdx(s)) && m.playTriggerAnimation();
}
n.next = 23;
return cc.vv.gameData.awaitTime(.5);

case 23:
e.setTengmanVisible(!0);
(l = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation4", !1);
l.addAnimation(0, "animation5", !1);
l.addAnimation(0, "animation6", !1);
l.addAnimation(0, "animation7", !1);
l.addAnimation(0, "animation6_1", !0);
n.next = 32;
return cc.vv.gameData.awaitTime(6);

case 32:
d = cc.find("collect_node", e.node);
cc.tween(d).by(.5, {
y: -100
}).call(function() {
d.active = !1;
}).start();
(u = cc.find("freegame_tips", e.node)).active = !0;
e.updateFreeTimes(0);
cc.tween(u).delay(.5).by(.5, {
y: 100
}).start();
f = cc.find("shoujifei", e.node).getComponent(sp.Skeleton);
p = 0;
g = 0;

case 41:
if (!(g < e._gameInfo.bonusIdxs.length)) {
n.next = 57;
break;
}
v = e._gameInfo.bonusIdxs[g];
if (!e._gameInfo.bonusItems[g].coin) {
n.next = 54;
break;
}
if (!(_ = e.GetSymbolByIdx(v))) {
n.next = 54;
break;
}
f.node.active = !0;
h = _.node.convertToWorldSpaceAR(cc.v2(0, 0));
h = e.node.convertToNodeSpaceAR(h);
f.node.position = h;
f.setAnimation(0, e._cfg.shoujifeiCfg[4][5][v], !1);
p += e._gameInfo.bonusItems[g].jackpot ? e._gameInfo.bonusItems[g].jackpot.value : e._gameInfo.bonusItems[g].coin;
n.next = 54;
return new Promise(function(e) {
f.setCompleteListener(function() {
f.setCompleteListener(null);
var n = cc.find("coin", l.node);
n.active = !0;
n.opacity = 255;
n.getComponent(cc.Label).string = Global.formatNumShort(p, 0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "logo_collect", !0);
var t = cc.find("bonusjieshou", l.node).getComponent(sp.Skeleton);
t.node.active = !0;
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
t.setCompleteListener(null);
e();
t.node.active = !1;
});
});
});

case 54:
g++;
n.next = 41;
break;

case 57:
b = 0;
y = 0;

case 59:
if (!(y < e._gameInfo.bonusIdxs.length)) {
n.next = 79;
break;
}
S = e._gameInfo.bonusIdxs[y];
if (!e._gameInfo.bonusItems[y].freeCnt) {
n.next = 76;
break;
}
if (!(w = e.GetSymbolByIdx(S))) {
n.next = 76;
break;
}
b += e._gameInfo.bonusItems[y].freeCnt;
(k = cc.instantiate(cc.find("particle_fly", e.node.parent))).active = !0;
k.parent = e.node.parent;
x = w.node.convertToWorldSpaceAR(cc.v2(0, 0));
x = e.node.parent.convertToNodeSpaceAR(x);
k.position = x;
C = cc.find("remain_times", u).convertToWorldSpaceAR(cc.v2(0, 0));
C = e.node.parent.convertToNodeSpaceAR(C);
cc.tween(k).to(.5, {
position: C
}).call(function() {
e.updateFreeTimes(b);
}).removeSelf().start();
n.next = 76;
return cc.vv.gameData.awaitTime(.5);

case 76:
y++;
n.next = 59;
break;

case 79:
cc.find("black_bg", e.node).active = !1;
a.node.active = !1;
t();

case 82:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}());

case 2:
case "end":
return n.stop();
}
}, n);
}))();
},
triggerFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, a, o, i, c, s, m;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t = 0;
0;
for (a = 0; a < e._gameInfo.bonusIdxs.length; a++) {
e._gameInfo.bonusIdxs[a];
e._gameInfo.bonusItems[a].coin && (e._gameInfo.bonusItems[a].jackpot ? e._gameInfo.bonusItems[a].jackpot.value : e._gameInfo.bonusItems[a].coin);
}
o = 0;

case 4:
if (!(o < e._gameInfo.resultCards.length)) {
n.next = 15;
break;
}
if (e._gameInfo.resultCards[o] !== e._cfg.scatterId) {
n.next = 12;
break;
}
if (!(i = e.GetSymbolByIdx(o + 1))) {
n.next = 12;
break;
}
c = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
t = e.node.convertToNodeSpaceAR(c).y;
return n.abrupt("break", 15);

case 12:
o++;
n.next = 4;
break;

case 15:
n.next = 17;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(a) {
var o, i, c, r, s, m, l, d, u;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(o = cc.find("bonus_bj", e.node).getComponent(sp.Skeleton)).node.active = !0;
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_expand", !0);
o.setAnimation(0, "animation1_1", !1);
o.addAnimation(0, "animation1_2", !0);
(i = cc.find("bonus_wenzi", e.node).getComponent(sp.Skeleton)).node.active = !0;
cc.find("coin", i.node).getComponent(cc.Label).string = 0;
i.node.y = t;
cc.tween(i.node).to(.5, {
y: 0
}).start();
n.next = 13;
return cc.vv.gameData.awaitTime(1);

case 13:
c = 0;
r = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
r = e.node.parent.convertToNodeSpaceAR(r);
s = 0;

case 17:
if (!(s < e._gameInfo.bonusIdxs.length)) {
n.next = 42;
break;
}
m = e._gameInfo.bonusIdxs[s];
if (!e._gameInfo.bonusItems[s].coin) {
n.next = 39;
break;
}
if (!(l = e.GetSymbolByIdx(m))) {
n.next = 39;
break;
}
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "gemrush_collect", !0);
d = l.node.convertToWorldSpaceAR(cc.v2(0, 0));
d = e.node.parent.convertToNodeSpaceAR(d);
c += e._gameInfo.bonusItems[s].coin;
(u = cc.instantiate(l.node).getComponent("MinamotoNoYoshitsune_Symbol")).node.parent = e.node.parent;
u.node.position = d;
u.ShowNormal();
u.ShowById(l.GetShowId(), l.GetData());
u.playFlyBonusAnimation();
l.ShowNormal();
l.ShowById(e._cfg.emptyId, null);
n.next = 36;
return cc.vv.gameData.awaitTime(.3);

case 36:
cc.tween(u.node).to(.5, {
position: r
}).call(function() {
var e = cc.find("coin", i.node);
e.active = !0;
e.getComponent(cc.Label).string = Global.formatNumShort(c, 0);
cc.find("icon", i.node).active = !1;
}).removeSelf().start();
n.next = 39;
return cc.vv.gameData.awaitTime(.5);

case 39:
s++;
n.next = 17;
break;

case 42:
a();

case 43:
case "end":
return n.stop();
}
}, n);
}));
return function(e) {
return n.apply(this, arguments);
};
}());

case 17:
for (s = 0; s < e._gameInfo.resultCards.length; s++) e._gameInfo.resultCards[s] === e._cfg.extraSpinId && (m = e.GetSymbolByIdx(s + 1)) && m.playWinAnimation();
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bell", !0);
n.next = 21;
return cc.vv.gameData.awaitTime(1);

case 21:
n.next = 23;
return e.popFreeDialog();

case 23:
e.cutSceneGem();
n.next = 26;
return cc.vv.gameData.awaitTime(2);

case 26:
e.ShowGameview(!0);
n.next = 29;
return cc.vv.gameData.awaitTime(2);

case 29:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playBgm("free1_bgm");
e.CanDoNextRound();

case 32:
case "end":
return n.stop();
}
}, n);
}))();
},
cutSceneGem: function() {
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "transition1", !0);
var e = cc.find("fg_qp_01", this.node.parent).getComponent(sp.Skeleton);
e.node.active = !0;
e.setAnimation(0, "animation", !1);
e.setCompleteListener(function() {
e.setCompleteListener(null);
e.node.active = !1;
});
},
updateFreeTimes: function(e) {
var n = cc.find("freegame_tips", this.node), t = cc.vv.gameData.getDeskInfo().mapInfo;
this._gameInfo && (t = this._gameInfo.mapInfo);
2 === t.state && -1 !== this._curUnlockBooster.indexOf(this._cfg.MapBoostType.AddReel) && (n = -1 !== this._curUnlockBooster.indexOf(this._cfg.MapBoostType.AddRow) ? cc.find("reels_frame_5_6/freegame_tips", this.node) : cc.find("reels_frame_4_6/freegame_tips", this.node));
cc.find("frees", n).active = e > 1;
cc.find("free", n).active = e <= 1;
cc.find("remain_times", n).getComponent(cc.Label).string = e;
},
triggerExitFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function n() {
var t, o, i, c, r, s, m, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
e._freeCnt = 0;
n.next = 4;
return cc.vv.gameData.awaitTime(1);

case 4:
n.next = 6;
return e.popFreeResultDialog(2 === e._gameInfo.mapInfo.state);

case 6:
if (2 !== e._gameInfo.mapInfo.state) {
n.next = 28;
break;
}
(t = cc.find("transition", e.node.parent)).active = !0;
t.getComponent(sp.Skeleton).setAnimation(0, "skill", !1);
t.getComponent(sp.Skeleton).setCompleteListener(function() {
t.getComponent(sp.Skeleton).setCompleteListener(null);
t.active = !1;
});
n.next = 13;
return cc.vv.gameData.awaitTime(2);

case 13:
cc.find("freegame_tips", e.node).active = !1;
if (-1 !== e._curUnlockBooster.indexOf(e._cfg.MapBoostType.AddRow)) {
o = a(e._reels);
try {
for (o.s(); !(i = o.n()).done; ) i.value.StartRecycleSymbol(.01);
} catch (e) {
o.e(e);
} finally {
o.f();
}
c = a(e._reels);
try {
for (c.s(); !(r = c.n()).done; ) r.value.clearLastSymbol();
} catch (e) {
c.e(e);
} finally {
c.f();
}
}
cc.find("reels_bg", e.node).scale = 1;
cc.find("reels", e.node).scale = 1;
cc.find("top_ani", e.node).scale = 1;
cc.find("black_bg", e.node).scale = 1;
cc.find("reels_frame", e.node).active = !0;
cc.find("reels_frame_4_6", e.node).active = !1;
cc.find("reels_frame_5_6", e.node).active = !1;
cc.find("map_4_5", e.node).active = !1;
cc.find("map_4_6", e.node).active = !1;
cc.find("map_5_5", e.node).active = !1;
cc.find("map_5_6", e.node).active = !1;
n.next = 41;
break;

case 28:
e.cutSceneGem();
n.next = 31;
return cc.vv.gameData.awaitTime(2);

case 31:
(s = cc.find("collect_node", e.node)).y += 100;
s.active = !0;
(m = cc.find("freegame_tips", e.node)).y -= 100;
m.active = !1;
cc.find("bonus_bj", e.node).getComponent(sp.Skeleton).node.active = !1;
cc.find("bonus_wenzi", e.node).getComponent(sp.Skeleton).node.active = !1;

case 41:
cc.find("spr_bg_bonus", e.node.parent).active = !1;
cc.find("LMSlots_PrizePool_1", e.node.parent).active = !0;
e.setTengmanVisible(!1);
(l = cc.find("tengman", e.node.parent).getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
l.addAnimation(0, "animation2", !0);
cc.find("coin", l.node).active = !1;
e.ShowGameview(!1);
e.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), !0, function() {
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playNormalBgm();
e.CanDoNextRound();
});

case 50:
case "end":
return n.stop();
}
}, n);
}))();
},
popFreeDialog: function() {
var e = this;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(t) {
var a, o, i, c, s, m, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
(a = cc.find("free_dialog", e.node.parent)).active = !0;
(o = cc.find("free_dialog_bg", a)).opacity = 0;
o.runAction(cc.fadeTo(.2, 200));
(i = cc.find("common_enter_node", a)).active = !0;
(c = cc.find("times", i)).scale = 0;
(s = cc.find("freetanchuang", i).getComponent(sp.Skeleton)).node.active = !0;
cc.find("coin", i).getComponent(cc.Label).string = Global.formatNumShort(e._gameInfo.bonusBaseCoin, 0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_fg_start", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "bonus_trigger", !0);
s.setAnimation(0, "animation1_1", !1);
s.addAnimation(0, "animation1_2", !0);
(m = cc.find("btn_start", i)).scale = 0;
n.next = 21;
return cc.vv.gameData.awaitTime(.3);

case 21:
c.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
cc.tween(c).to(.2, {
scale: 1
}).start();
n.next = 25;
return cc.vv.gameData.awaitTime(.2);

case 25:
cc.tween(m).to(.2, {
scale: .5
}).start();
n.next = 28;
return cc.vv.gameData.awaitTime(.2);

case 28:
m.off("click");
l = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
m.off("click");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", !0);
cc.tween(m).to(.2, {
scale: 0
}).start();
cc.tween(o).to(.2, {
opacity: 0
}).start();
cc.tween(c).to(.2, {
scale: 0
}).start();
s.setAnimation(0, "animation1_3", !1);
s.setCompleteListener(function(e) {
s.setCompleteListener(null);
i.active = !1;
a.active = !1;
s.node.active = !1;
t();
});

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
cc.vv.gameData.checkAutoPlay(m, l);
m.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
m.stopAllActions();
e.next = 3;
return l();

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
}());
},
popFreeResultDialog: function(e) {
var n = this;
return new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(a) {
var o, i, c, s, m, l, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
(o = cc.find("free_dialog", n.node.parent)).active = !0;
(i = cc.find("free_dialog_bg", o)).opacity = 0;
i.runAction(cc.fadeTo(.2, 200));
(c = e ? cc.find("map_free_result_node", o) : cc.find("result_node", o)).active = !0;
(s = cc.find("freetanchuang", c).getComponent(sp.Skeleton)).node.active = !0;
(m = cc.find("coin", c)).scale = 0;
m.getComponent(cc.Label).string = "";
e ? cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_map_collect", !0) : cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_fg_collect", !0);
e && n.clearCollectProgress();
s.setAnimation(0, e ? "animation" : "animation2_1", !1);
s.addAnimation(0, e ? "animation2" : "animation2_2", !0);
(l = cc.find("btn_collect", c)).scale = 0;
t.next = 20;
return cc.vv.gameData.awaitTime(.3);

case 20:
Global.doRoallNumEff(m, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, !0);
cc.tween(m).to(.2, {
scale: 1
}).start();
t.next = 24;
return cc.vv.gameData.awaitTime(.2);

case 24:
cc.tween(l).to(.2, {
scale: .5
}).start();
l.off("click");
t.next = 28;
return cc.vv.gameData.awaitTime(.2);

case 28:
d = function() {
var n = r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
l.off("click");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", !0);
cc.tween(l).to(.2, {
scale: 0
}).start();
cc.tween(i).to(.2, {
opacity: 0
}).start();
s.setAnimation(0, e ? "animation3" : "animation2_3", !1);
s.setCompleteListener(function() {
s.setCompleteListener(null);
c.active = !1;
o.active = !1;
s.node.active = !1;
a();
});
n.next = 9;
return cc.vv.gameData.awaitTime(.3);

case 9:
cc.tween(m).to(.2, {
scale: 0
}).start();

case 10:
case "end":
return n.stop();
}
}, n);
}));
return function() {
return n.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(l, d);
l.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
l.stopAllActions();
e.next = 3;
return d();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 31:
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
popMapFreeDialog: function(e) {
var n = this;
return r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(a) {
var o, i, c, s, m, l, d, u, f, p, g;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_mapfg_start", !0);
(o = cc.find("free_dialog", n.node.parent)).active = !0;
(i = cc.find("free_dialog_bg", o)).opacity = 0;
i.runAction(cc.fadeTo(.2, 200));
(c = cc.find("map_free_node", o)).active = !0;
(s = cc.find("superbonustanchuang", c).getComponent(sp.Skeleton)).node.active = !0;
(m = cc.find("times", c)).getComponent(cc.Label).string = n._gameInfo.mapInfo.nextSpinCount;
m.scale = 0;
cc.find("coin", c).getComponent(cc.Label).string = Global.formatNumShort(n._gameInfo.mapInfo.startPrice, 0);
for (l = 1; l < 6; l++) {
(d = cc.find("booster_" + l, c)).active = -1 !== e.nextBoosters.indexOf(l);
cc.find("black_bg", d).active = -1 === e.nextUnlockBoosters.indexOf(l);
d.scale = 0;
}
s.setAnimation(0, "animation1_1", !1);
s.addAnimation(0, "animation1_2", !0);
(u = cc.find("btn_start", c)).scale = 0;
t.next = 22;
return cc.vv.gameData.awaitTime(.3);

case 22:
cc.tween(m).to(.2, {
scale: 1
}).start();
t.next = 25;
return cc.vv.gameData.awaitTime(.2);

case 25:
cc.tween(u).to(.2, {
scale: .5
}).start();
for (f = 1; f < 6; f++) {
p = cc.find("booster_" + f, c);
cc.tween(p).to(.2, {
scale: 1
}).start();
}
t.next = 29;
return cc.vv.gameData.awaitTime(.2);

case 29:
g = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
u.off("click");
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "click", !0);
cc.vv.AudioManager.playEff("games/MinamotoNoYoshitsune/", "dialog_retract", !0);
cc.tween(u).to(.2, {
scale: 0
}).start();
cc.tween(i).to(.2, {
opacity: 0
}).start();
s.setAnimation(0, "animation1_3", !1);
s.setCompleteListener(function(e) {
s.setCompleteListener(null);
c.active = !1;
o.active = !1;
s.node.active = !1;
a();
});
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
u.off("click");
cc.vv.gameData.checkAutoPlay(u, g);
u.on("click", r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
u.stopAllActions();
e.next = 3;
return g();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 33:
case "end":
return t.stop();
}
}, t);
}));
return function(e) {
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
updateCollectProgress: function(e, n) {
var t = this;
return r(regeneratorRuntime.mark(function a() {
var o, i, c;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
o = cc.find("collect_node/progress", t.node);
i = cc.find("collect_node/scale_node", t.node);
if (n) {
cc.tween(i).to(.3, {
scaleX: e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt
}).start();
cc.tween(o.getComponent(cc.ProgressBar)).to(.3, {
progress: e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt
}).start();
(c = cc.find("bar/jdtshangzhang", o).getComponent(sp.Skeleton)).node.active = !0;
c.setToSetupPose();
c.setAnimation(0, "animation", !1);
c.setCompleteListener(function() {
c.node.active = !1;
});
} else {
o.getComponent(cc.ProgressBar).progress = e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt;
i.scaleX = e.progressData.totalCnt / e.progressData.needCnt > 1 ? 1 : e.progressData.totalCnt / e.progressData.needCnt;
}

case 3:
case "end":
return a.stop();
}
}, a);
}))();
},
clearCollectProgress: function() {
var e = cc.find("collect_node/progress", this.node);
cc.find("collect_node/scale_node", this.node).scaleX = 0;
e.getComponent(cc.ProgressBar).progress = 0;
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
MinamotoNoYoshitsune_Symbol: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "17fcfoAa0xE2pJsz/27vJPS", "MinamotoNoYoshitsune_Symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
Init: function(e, n) {
this._super(e, n);
this._showNode.color = cc.Color.WHITE;
},
StartMove: function() {
this._super();
this._id !== cc.vv.gameData.getGameCfg().bonusId ? this._showNode.color = cc.Color.GRAY : this._showNode.color = cc.Color.WHITE;
},
ShowRandomSymbol: function() {
this._super();
this._id !== cc.vv.gameData.getGameCfg().bonusId ? this._showNode.color = cc.Color.GRAY : this._showNode.color = cc.Color.WHITE;
this.showCoin();
this.showFreeTimes();
},
ShowById: function(e, n) {
this._super(e, n);
this.showCoin();
this.showFreeTimes();
},
playStopAnimation: function() {
var e = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[e] && n.symbol[e].win_node && n.symbol[e].stop_ani) {
this._state = "stop";
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(n.symbol[e].win_node, this.node);
this._showNode.active = !0;
if ("" !== n.symbol[e].stop_ani.name) {
this.node.zIndex = n.symbol[e].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var t = this._showNode.getComponent(sp.Skeleton);
if (t) {
t.setAnimation(0, n.symbol[e].stop_ani.name, !1);
e === n.bonusId && t.addAnimation(0, n.symbol[e].idle_ani.name, !0);
}
}
}
},
showCoin: function() {
var e = cc.find("coin", this.node), n = cc.find("jackpot", this.node);
if (e && n && this._id === cc.vv.gameData.getGameCfg().bonusId) if (this._data) {
if (this._data.coin > 0) {
e.active = !0;
e.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
} else if (this._data.jackpot) {
n.active = !0;
var t = cc.vv.gameData.GetAtlasByName("symbols");
n.getComponent(cc.Sprite).spriteFrame = t.getSpriteFrame("theme205_s_jp" + (5 - this._data.jackpot.id));
}
} else if (0 !== cc.vv.gameData.GetSlotsScript().getBaseCoin()) {
e.active = !0;
e.getComponent(cc.Label).string = Global.formatNumShort(cc.vv.gameData.GetSlotsScript().getBaseCoin(), 0);
} else {
e.active = !0;
var a = [ .25, .5, .75, 1, 2, 5, 10 ], o = cc.vv.gameData.GetTotalBet() * a[Math.floor(Math.random() * a.length)];
e.getComponent(cc.Label).string = Global.formatNumShort(o, 0);
} else {
e.active = !1;
n.active = !1;
}
},
showFreeTimes: function() {
var e = cc.find("times", this.node);
if (e && this._id === cc.vv.gameData.getGameCfg().extraSpinId) {
if (this._data && this._data.freeCnt) {
e.active = !0;
e.getComponent(cc.Label).string = this._data.freeCnt;
}
} else e.active = !1;
},
playWinAnimation: function() {
this._showNode && (this._showNode.active = !1);
var e = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[e] && n.symbol[e].win_node) {
this._state = "win";
this._showNode && (this._showNode.active = !1);
var t = this.setAnimationToTop(!0);
t.active = !0;
var a = cc.find(n.symbol[e].win_node, t);
a.active = !0;
if (n.symbol[e].win_ani && "" != n.symbol[e].win_ani.name) {
t.zIndex = n.symbol[e].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var o = a.getComponent(sp.Skeleton);
o && (e === n.extraSpinId ? this._data.freeCnt > 1 ? o.setAnimation(0, n.symbol[e].win_ani.name, !0) : o.setAnimation(0, n.symbol[e].win_ani_1.name, !0) : o.setAnimation(0, n.symbol[e].win_ani.name, !0));
}
} else {
this._showNode.active = !0;
this.playWinTweenAction();
}
},
playTriggerAnimation: function() {
var e = !1, n = this._id, t = cc.vv.gameData.getGameCfg();
if (t.symbol[n] && t.symbol[n].win_node && t.symbol[n].trigger_ani) {
this._state = "trigger";
this._showNode && (this._showNode.active = !1);
var a = this.setAnimationToTop(!0);
a.active = !0;
var o = cc.find(t.symbol[n].win_node, a);
o.active = !0;
if ("" !== t.symbol[n].trigger_ani.name) {
a.zIndex = t.symbol[n].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
e = !0;
var i = o.getComponent(sp.Skeleton);
if (i) {
i.setAnimation(0, t.symbol[n].trigger_ani.name, !1);
n !== t.scatterId && n !== t.bonusId || !t.symbol[n].idle_ani || i.setCompleteListener(function() {
i.setCompleteListener(null);
i.setAnimation(0, t.symbol[n].idle_ani.name, !0);
cc.find("icon", o) && (cc.find("icon", o).active = !0);
});
}
}
}
return e;
},
playFlyBonusAnimation: function() {
var e = this._id, n = cc.vv.gameData.getGameCfg();
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(n.symbol[e].win_node, this.node);
this._showNode.active = !0;
this.node.zIndex = 500 - this._symbolIdx + 10 * this._reelIdx;
var t = this._showNode.getComponent(sp.Skeleton);
t && t.setAnimation(0, "animation1_5", !1);
},
playWildAnimation: function() {
this._showNode && (this._showNode.active = !1);
var e = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[e] && n.symbol[e].win_node) {
this._state = "win";
this._showNode && (this._showNode.active = !1);
var t = this.setAnimationToTop(!0);
t.active = !0;
var a = cc.find(n.symbol[e].win_node, t);
a.active = !0;
t.zIndex = 300 - this._symbolIdx + 10 * this._reelIdx;
var o = a.getComponent(sp.Skeleton), i = 105 === e ? "animation1_1" : "animation1";
this._symbolIdx < cc.vv.gameData.getGameCfg().row && this._symbolIdx > 0 && (i = "animation" + (3 - this._symbolIdx + 5) + (105 === e ? "_1" : ""));
o && o.setAnimation(0, i, !0);
}
},
Resume: function(e) {
if (e) {
this._symbolIdx = e.symbolIdx;
this._id = e.id;
this._data = Global.copy(e.data);
this.ShowKuang(e.isKuang);
this.ShowNormal();
var n = cc.vv.gameData.getGameCfg(), t = e.state;
if ("win" == t) if (101 === this.GetShowId() || 102 === this.GetShowId() || 103 === this.GetShowId()) if (Math.floor((Number(key) - 1) / n.col) === n.row - 1) this.playWinAnimation(); else for (var a = this.GetSymbolReelIdx(), o = cc.vv.gameData.GetSlotsScript()._reels[a], i = 0; i < n.row; i++) {
var c = o.GetSymbolByRow(i);
if (104 === c.GetShowId() || 105 === c.GetShowId()) {
c.playWildAnimation();
break;
}
if (101 === c.GetShowId() || 102 === c.GetShowId() || 103 === c.GetShowId()) {
c.playWinAnimation();
break;
}
} else this.playWildAnimation(); else "stop" == t ? this.playStopAnimation() : "idle" == t ? this.playidleAnimation() : "trigger" == t && this.playTriggerAnimation();
if (this._id === n.bonusId || this._id === n.extraSpinId) {
this._state = "win";
this.playWinAnimation();
}
}
},
resetColor: function() {
this._showNode.color = cc.Color.WHITE;
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ]
}, {}, [ "MinamotoNoYoshitsune_Cfg", "MinamotoNoYoshitsune_Logic", "MinamotoNoYoshitsune_Map", "MinamotoNoYoshitsune_PickBonus", "MinamotoNoYoshitsune_PickGame", "MinamotoNoYoshitsune_PrizePool", "MinamotoNoYoshitsune_Reel", "MinamotoNoYoshitsune_Slots", "MinamotoNoYoshitsune_Symbol" ]);