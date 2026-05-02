window.__require = function e(t, n, o) {
function i(r, c) {
if (!n[r]) {
if (!t[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var u = n[r] = {
exports: {}
};
t[r][0].call(u.exports, function(e) {
return i(t[r][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
return i;
}({
Clown_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a6f74G7YUBJtaiQKrnCzN0z", "Clown_Cfg");
var o;
function i(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var a = {
symbol: (o = {}, i(o, 1, {
node: "s1",
win_node: "w1",
bg: "",
win_ani: {
name: "animation2",
zIndex: 1e3
},
stop_ani: {
name: "animation1",
zIndex: 100
}
}), i(o, 2, {
node: "s2",
win_node: "w2",
bg: "",
win_ani: {
name: "animation1",
zIndex: 800
}
}), i(o, 3, {
node: "s8",
win_node: "w2",
bg: "",
win_ani: {
name: "animation2",
zIndex: 800
}
}), i(o, 4, {
node: "s9",
win_node: "w2",
bg: "",
win_ani: {
name: "animation3",
zIndex: 800
}
}), i(o, 5, {
node: "s3",
win_node: "w3",
bg: "d3",
win_ani: {
name: "animation",
zIndex: 800
}
}), i(o, 6, {
node: "s4",
win_node: "w4",
bg: "d4",
win_ani: {
name: "animation",
zIndex: 800
}
}), i(o, 7, {
node: "s5",
win_node: "w5",
bg: "d5",
win_ani: {
name: "animation",
zIndex: 800
}
}), i(o, 8, {
node: "s6",
win_node: "w6",
bg: "d6",
win_ani: {
name: "animation",
zIndex: 800
}
}), i(o, 9, {
node: "s7",
win_node: "w7",
bg: "d7",
win_ani: {
name: "animation",
zIndex: 800
}
}), o),
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "LMSlots_Bottom_Base",
Slots: "Clown_Slots",
Reels: "Clown_reel",
Symbols: "Clown_symbol",
Sound: "Clown_sound"
},
col: 5,
row: 4,
col_free: 5,
row_free: 8,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
width: 126,
height: 85
},
symbolBgPrefab: "LMSlots_Symbol_bg",
helpItems: [ "games/Clown/prefab/LMSlots_Help_item1", "games/Clown/prefab/LMSlots_Help_item2", "games/Clown/prefab/LMSlots_Help_item3", "games/Clown/prefab/LMSlots_Help_item4", "games/Clown/prefab/LMSlots_Help_item5", "games/Clown/prefab/LMSlots_Help_item6", "games/Clown/prefab/LMSlots_Help_item7", "games/Clown/prefab/LMSlots_Help_item8" ],
scatterId: 2,
autoModelDelay: 1,
randomSymbols: [ 5, 6, 7, 8, 9 ],
kuang: "zjlx_01",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 2,
bounce: !0,
bounceInfo: {
distance: 30,
time: .1
},
commEffect: {
path: "games/Clown/",
win1: [ "base/win1", "base/win1end" ],
win2: [ "base/win2", "base/win2end" ]
},
reelStateInfo: [ {
id: [ 1 ],
mini: 3,
counts: [ 0, 1, 1, 1, 0 ],
antiNode: "node_anti",
path: "games/Clown/",
reelStopSound: "base/reel_stop",
symbolStopSound: "base/scatter_notify",
antSound: "base/anticipation1",
antSpeed: 2e3
} ],
grayColor: cc.color(60, 60, 60),
normalColor: cc.color(255, 255, 255),
normalBgm: "base/base_bgm",
jackpotType: {
1: 1,
2: 2,
3: 3,
4: 5,
5: 4
},
AddAntiTime: 2
};
t.exports = a;
cc._RF.pop();
}, {} ],
Clown_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cfa63ruvhVCg4xPIvvrL9fF", "Clown_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {
_gameManage: null,
_JackpotReelGame: null,
_StackedWildsGame: null,
_RandomWildsGame: null,
_JackInTheBox: null
},
getBonusGame: function() {
return this._deskInfo.bonusGame;
},
setBonusGame: function(e) {
this._deskInfo.bonusGame = e;
},
getBalloonGame: function() {
return this._deskInfo.balloonGame;
},
getPopWinManage: function() {
return cc.find("Canvas/safe_node").getComponentInChildren("Clown_Pop");
},
getManage: function() {
return this._gameManage;
},
setManage: function(e) {
this._gameManage = e;
},
setJackpotReelGame: function(e) {
this._JackpotReelGame = e;
},
getJackpotReelGame: function() {
return this._JackpotReelGame;
},
setStackedWildsGame: function(e) {
this._StackedWildsGame = e;
},
getStackedWildsGame: function() {
return this._StackedWildsGame;
},
setRandomWildsGame: function(e) {
this._RandomWildsGame = e;
},
getRandomWildsGame: function() {
return this._RandomWildsGame;
},
setJackInTheBox: function(e) {
this._JackInTheBox = e;
},
getJackInTheBox: function() {
return this._JackInTheBox;
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
Clown_JackpotReelGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "179b0jLEPJCzZ/77WBuARMg", "Clown_JackpotReelGame");
function o(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
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
var o, a, r = !0, c = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
a = e;
},
f: function() {
try {
r || null == o.return || o.return();
} finally {
if (c) throw a;
}
}
};
}
function i(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
function r(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function c(e) {
r(a, o, i, c, s, "next", e);
}
function s(e) {
r(a, o, i, c, s, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
jinkuang: {
default: [],
type: [ cc.Node ]
},
_jinKuangStartY: 0
},
onLoad: function() {
this._jinKuangStartY = this.jinkuang[0].y;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showGame: function(e, t, n) {
var i = this;
return new Promise(function() {
var a = c(regeneratorRuntime.mark(function a(r, c) {
var s, l, u, f;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
i.node.active = !0;
s = o(i.jinkuang);
try {
for (s.s(); !(l = s.n()).done; ) l.value.active = !1;
} catch (e) {
s.e(e);
} finally {
s.f();
}
u = 0;

case 4:
if (!(u < e.length)) {
a.next = 31;
break;
}
i.jinkuang[u].y = i._jinKuangStartY;
cc.find("jpzhongjiang", i.jinkuang[u]).active = !1;
cc.find("effect", i.jinkuang[u]).active = !1;
cc.find("node", i.jinkuang[u]).active = !0;
cc.find("jackpot_zjlx_01", i.jinkuang[u]).active = !1;
cc.find("jinkuangluodi", i.jinkuang[u]).active = !0;
i.jinkuang[u].active = !0;
f = (i.jinkuang[u].y + Math.abs(e[u].y)) / (i.jinkuang[u].y + 1208) * 2;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_full);
cc.tween(i.jinkuang[u]).to(f, {
position: cc.v3(i.jinkuang[u].x, e[u].y, 0)
}).start();
a.next = 22;
return i.awaitTime(f);

case 22:
if (!(f < 2)) {
a.next = 28;
break;
}
Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.jp_full);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jackpot_notify);
i.showEndAni(u, n[e.length - 1 - u]);
a.next = 28;
return i.awaitTime(2 - f);

case 28:
u++;
a.next = 4;
break;

case 31:
i.showJacakpotType(t);
a.next = 34;
return i.awaitTime(2);

case 34:
r();

case 35:
case "end":
return a.stop();
}
}, a);
}));
return function(e, t) {
return a.apply(this, arguments);
};
}());
},
showJackPotResult: function(e, t) {
var n = this;
return new Promise(function() {
var i = c(regeneratorRuntime.mark(function i(a, r) {
var c, s, l, u;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
c = cc.vv.gameData.getGameCfg().jackpotType[t];
n.node.active = !0;
s = o(n.jinkuang);
try {
for (s.s(); !(l = s.n()).done; ) l.value.active = !1;
} catch (e) {
s.e(e);
} finally {
s.f();
}
for (u = 0; u < e.length; u++) if (e[u].y > -1208) {
cc.find("jpzhongjiang", n.jinkuang[u]).active = !1;
cc.find("effect", n.jinkuang[u]).active = !1;
cc.find("node", n.jinkuang[u]).active = !1;
cc.find("jackpot_zjlx_01", n.jinkuang[u]).active = !1;
n.jinkuang[u].active = !0;
n.jinkuang[u].y = e[u].y;
} else n.jinkuang[u].active = !1;
n.showJacakpotType(c);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
cc.vv.gameData.getManage().showCaiDan();
i.next = 10;
return n.awaitTime(2);

case 10:
a();

case 11:
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
showEndAni: function(e, t) {
cc.find("node", this.jinkuang[e]).active = !1;
var n = cc.find("jinkuangluodi", this.jinkuang[e]), o = n.getComponent(sp.Skeleton);
o.setAnimation(0, "animation1", !1);
o.setCompleteListener(function() {
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], a = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(i);
a && a.SetBackground("yellow" + (4 - e));
}
n.active = !1;
o.setCompleteListener(null);
});
var i = cc.find("effect", this.jinkuang[e]);
i.active = !0;
i.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", !1);
},
showJacakpotType: function(e) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.win_jackpot);
cc.vv.gameData.getManage().showWinJackPoolAnimation(e - 1);
for (var t = 0; t < this.jinkuang.length; t++) {
var n = this.jinkuang[t], o = cc.find("jpzhongjiang", n);
o.active = !0;
o.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - e), !0);
cc.find("jackpot_zjlx_01", this.jinkuang[t]).active = !0;
o.scale = .2;
cc.tween(o).to(.4, {
scale: 1.1
}).to(.1, {
scale: 1
}).start();
var i = cc.find("jinkuangluodi", this.jinkuang[t]);
i.active = !0;
i.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
}
},
hideGame: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
Clown_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6ac3826r2RLA7/lpIwqAl/x", "Clown_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {},
InitCommComponent: function() {
this._super();
var e = this.node.addComponent("Clown_Manage");
cc.vv.gameData.setManage(e);
var t = cc.find("Canvas/safe_node"), n = t.getComponentInChildren("Clown_JackpotReelGame");
n && cc.vv.gameData.setJackpotReelGame(n);
var o = t.getComponentInChildren("Clown_stackedWildsGame");
o && cc.vv.gameData.setStackedWildsGame(o);
var i = t.getComponentInChildren("Clown_RandomWildsGame");
i && cc.vv.gameData.setRandomWildsGame(i);
var a = t.getComponentInChildren("Clown_jackInTheBox");
a && cc.vv.gameData.setJackInTheBox(a);
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
Clown_Manage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8902dS3qqNHIKfHszwrQuEd", "Clown_Manage");
function o(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function i(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var r = e.apply(t, n);
function c(e) {
o(r, i, a, c, s, "next", e);
}
function s(e) {
o(r, i, a, c, s, "throw", e);
}
c(void 0);
});
};
}
var a = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
cc.Class({
extends: cc.Component,
properties: {
_joker: {
default: null,
type: cc.Node
},
_qiQiuGouRoot: null,
_joker_yan: null,
_qiQiuGouList: [],
_showQiQiuGouSuccess: null,
_slotsMask: null,
_turntableTriggerBar: null,
_PrizePoolRoot: null,
_qiePin: [],
_turntableTriggerBarLock: !1,
_collectNode: null,
_initTurntableTriggerBar: !0,
_turntableTriggerBarInitY: 0,
_caidan: null,
_exitFree: null,
_dingguang: null,
_dengguang: null,
_PrizePoolRootInitY: 0
},
onLoad: function() {
this._joker = cc.find("safe_node/joker", this.node);
var e = this._joker.getComponent(sp.Skeleton);
e.setMix("idle", "skill", .2);
e.setMix("skill", "skill-idle", .2);
e.setMix("skill-idle", "idle", .4);
this._qiQiuGouRoot = cc.find("safe_node/qiqiugouRoot", this.node);
this._joker_yan = cc.find("safe_node/joker_yan", this.node);
this._slots = cc.find("safe_node/slots", this.node);
this._slotsMask = cc.find("safe_node/slotsMask", this.node);
this._turntableTriggerBar = cc.find("safe_node/turntableTriggerBar", this.node);
this._PrizePoolRoot = cc.find("safe_node/LMSlots_PrizePool_1", this.node);
this._qiePin[0] = cc.find("safe_node/qiepingNode", this.node);
this._qiePin[1] = cc.find("safe_node/qiepingNode2", this.node);
this._caidan = cc.find("safe_node/caidai", this.node);
this._exitFree = cc.find("safe_node/exitFree", this.node);
this._collectNode = cc.find("safe_node/collectNode", this.node);
var t = cc.find("iconRight/button", this._turntableTriggerBar);
Global.btnClickEvent(t, this.showJackInTheBoxWin, this);
var n = cc.find("lock/button", this._turntableTriggerBar);
Global.btnClickEvent(n, this.unlockTurntable, this);
this._dingguang = cc.find("safe_node/dingguang", this.node);
this._dengguang = cc.find("safe_node/spr_bg_normal/dengguang", this.node);
for (var o = 1; o < 5; o++) {
var i = this._qiQiuGouRoot.getChildByName("qiqiugouNode" + o);
Global.btnClickEvent(i, this.clickQiQiuGou.bind(this, o - 1), this);
this._qiQiuGouList[this._qiQiuGouList.length] = i;
}
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
this.initTurntableTriggerBar();
},
start: function() {
var e = this;
this.scheduleOnce(function() {
e._PrizePoolRootInitY = e._PrizePoolRoot.y;
}, 0);
},
onDestroy: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, !1, this);
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
ShowGameview: function(e) {
this._turntableTriggerBarInitY = this._turntableTriggerBar.y;
if (e) {
this._joker.active = !1;
this._turntableTriggerBar.y += 336;
} else this._joker.active = !0;
},
showTurntableTriggerBar: function(e) {
if (e) {
this._turntableTriggerBar.y = this._turntableTriggerBarInitY;
cc.tween(this._turntableTriggerBar).to(.65, {
y: this._turntableTriggerBarInitY + 336
}).start();
this._PrizePoolRoot.scale = 1;
} else {
this._turntableTriggerBar.y = this._turntableTriggerBarInitY + 336;
cc.tween(this._turntableTriggerBar).to(.65, {
y: this._turntableTriggerBarInitY
}).start();
}
},
initTurntableTriggerBar: function() {
var e = cc.vv.gameData.getBonusGame();
if (e) {
var t = cc.vv.gameData.GetBetIdx(), n = cc.find("lock", this._turntableTriggerBar);
if (t >= e.needBet) {
n.active = !1;
this._turntableTriggerBarLock = !1;
} else {
n.active = !0;
this._turntableTriggerBarLock = !0;
}
var o = cc.find("Bar", this._turntableTriggerBar), i = cc.find("effect", o), a = cc.find("barMask/bar", o), r = cc.find("addPrograss", o), c = cc.find("node", r), s = e.progressData.totalCnt / e.progressData.needCnt;
s >= 1 && (s = 0);
var l = o.width * s;
i.width = l;
a.x = l - o.width;
c.x = l + -212.5;
}
},
changeTurntableTriggerBar: function() {
var e = cc.vv.gameData.GetBetIdx(), t = cc.find("lock", this._turntableTriggerBar), n = cc.vv.gameData.getBonusGame();
if (n) if (e >= n.needBet) {
if (this._turntableTriggerBarLock) {
this._turntableTriggerBarLock = !1;
var o = cc.find("spine", t).getComponent(sp.Skeleton);
o.setAnimation(0, "animation3", !1);
o.setCompleteListener(function() {
t.active = !1;
o.setCompleteListener(null);
});
this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_unlock);
}
} else if (!this._turntableTriggerBarLock) {
this._turntableTriggerBarLock = !0;
t.active = !0;
var i = cc.find("spine", t).getComponent(sp.Skeleton);
i.setAnimation(0, "animation1", !1);
i.addAnimation(0, "animation2", !0);
i.setCompleteListener(null);
this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_lock);
cc.find("lock/button", this._turntableTriggerBar).getComponent(cc.Button).instantiate = !0;
}
this._initTurntableTriggerBar = !1;
},
TrunTableTriggerBarVal: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s, l, u, f, m, d, h, g, p, _, v, b, w, S, y, G, k, x, C;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
a = cc.vv.gameData.GetBetIdx();
if (!(r = cc.vv.gameData.getBonusGame())) {
n.next = 6;
break;
}
if (!(a < r.needBet)) {
n.next = 6;
break;
}
o();
return n.abrupt("return");

case 6:
c = cc.find("Bar", t._turntableTriggerBar);
s = cc.find("barMask/bar", c);
l = cc.find("effect", c);
u = e.progressData.totalCnt / e.progressData.needCnt;
f = cc.vv.gameData.GetSlotsScript().findAllJinHeZi();
m = cc.find("addPrograss", c);
d = cc.find("node", m);
if (!(f.length > 0)) {
n.next = 48;
break;
}
h = cc.find("giftBoxes", t._turntableTriggerBar);
g = h.convertToWorldSpaceAR(cc.v2(0, 0));
p = t._collectNode.convertToNodeSpaceAR(g);
for (_ = 0; _ < f.length; _++) {
v = f[_];
b = v.node.convertToWorldSpaceAR(cc.v2(0, 0));
w = t._collectNode.convertToNodeSpaceAR(b);
(S = cc.instantiate(v.node)).parent = t._collectNode;
S.position = w;
cc.tween(S).to(.5, {
position: p
}, {
easing: "quadIn"
}).start();
}
n.next = 20;
return t.awaitTime(.5);

case 20:
t._collectNode.removeAllChildren();
(y = cc.find("spine", h)).active = !0;
(G = y.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
G.setCompleteListener(function() {
y.active = !1;
G.setCompleteListener(null);
});
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_fly);
m.active = !0;
(k = d.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
k.setCompleteListener(function() {
m.active = !1;
k.setCompleteListener(null);
});
u > 1 && (u = 1);
x = c.width * u;
cc.tween(s).to(.2, {
x: x - c.width
}).start();
cc.tween(l).to(.2, {
width: x
}).start();
cc.tween(d).to(.2, {
x: x + -212.5
}).start();
n.next = 38;
return t.awaitTime(.2);

case 38:
if (!(u >= 1)) {
n.next = 48;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
(C = cc.find("iconRight/spine", t._turntableTriggerBar).getComponent(sp.Skeleton)).setAnimation(0, "animation2", !1);
C.addAnimation(0, "animation1", !0);
n.next = 45;
return t.awaitTime(1.6);

case 45:
l.width = 0;
s.x = -c.width;
d.x = -212.5;

case 48:
o();

case 49:
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
setNodeColor: function(e, t) {
if (e) {
e.color = t;
for (var n = 0; n < e.children.length; n++) {
e.children[n].color = t;
}
}
},
showHenDuoQQ: function() {
cc.find("safe_node/henduoQQ", this.node).getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
},
showQiQiuGou: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._showQiQiuGouSuccess = o;
t._joker.active = !e;
t._joker_yan.active = !1;
if (e) {
n.next = 19;
break;
}
cc.find("safe_node/base_QQ", t.node).getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
(a = t._joker.getComponent(sp.Skeleton)).setAnimation(0, "skill", !1);
a.addAnimation(0, "skill-idle", !0);
n.next = 11;
return t.awaitTime(1);

case 11:
t._joker_yan.active = !0;
(r = t._joker_yan.getComponent(sp.Skeleton)).setCompleteListener(function() {
t._joker_yan.active = !1;
r.setCompleteListener(null);
});
t._dengguang.active = !0;
t._slotsMask.active = !0;
t._slotsMask.height = 340;
n.next = 21;
break;

case 19:
t._slotsMask.active = !0;
t._slotsMask.height = 680;

case 21:
n.next = 23;
return t.qiQiuGouShow(e);

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
recaveryQiQiuAnimation: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s, l, u, f, m, d;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (4 === e.length) {
t._showQiQiuGouSuccess = o;
a = e[2];
r = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(a);
c = r.node.convertToWorldSpaceAR(cc.v2(0, 0 + cc.vv.gameData.GetSlotsScript()._cfg.symbolSize.height / 2));
s = cc.vv.gameData.GetSlotsScript()._reels[4];
cc.vv.gameData.GetSlotsScript()._isInFree && (s = cc.vv.gameData.GetSlotsScript()._reelsFree[4]);
l = cc.find("mask", s.node);
u = l.convertToNodeSpaceAR(c);
(f = cc.find("qiqiu", l)).active = !0;
f.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
f.y = u.y;
for (m = 0; m < e.length; m++) {
d = e[m];
cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(d).setSymbolBgShow(!1);
}
} else o();

case 1:
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
recaveryQiQiuGou: function(e) {
this._joker.active = !e;
this._joker.getComponent(sp.Skeleton).setAnimation(0, "skill-idle", !0);
this._qiQiuGouRoot.active = !0;
this._qiQiuGouRoot.getComponent(cc.Animation).play("qiqiugouNormal");
for (var t = 0; t < this._qiQiuGouList.length; t++) {
var n = this._qiQiuGouList[t];
n.getComponent(cc.Button).interactable = !0;
this.setNodeColor(n, cc.vv.gameData.getGameCfg().normalColor);
for (var o in n.children) if (n.children.hasOwnProperty(o)) {
n.children[o].active = !1;
}
var i = cc.find("qiqiugou2", n);
i.active = !0;
i.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
}
if (e) {
this._slotsMask.active = !0;
this._slotsMask.height = 680;
} else {
this._dengguang.active = !0;
this._slotsMask.active = !0;
this._slotsMask.height = 340;
}
this.setAutoPlay();
},
setAutoPlay: function() {
var e = Global.random(0, this._qiQiuGouList.length - 1), t = this;
cc.vv.gameData.checkAutoPlay(this._qiQiuGouList[e], function() {
t.clickQiQiuGou(e);
});
},
hideQiQiuGou: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_ball);
if (e) {
n.next = 20;
break;
}
(a = t._joker.getComponent(sp.Skeleton)).setAnimation(0, "skill-sh", !1);
a.addAnimation(0, "idle", !0);
n.next = 7;
return t.awaitTime(.1);

case 7:
t._qiQiuGouRoot.active = !0;
t._qiQiuGouRoot.getComponent(cc.Animation).play("qiqiugouHide");
for (r = 0; r < t._qiQiuGouList.length; r++) {
c = t._qiQiuGouList[r];
cc.tween(c).to(.3, {
scale: .3
}).start();
}
n.next = 13;
return t.awaitTime(.33);

case 13:
t._qiQiuGouRoot.active = !1;
t._slotsMask.active = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.back_ball);
t._dengguang.active = !1;
o();
n.next = 30;
break;

case 20:
t._qiQiuGouRoot.active = !0;
t._qiQiuGouRoot.getComponent(cc.Animation).play("qiqiugouHide");
for (s = 0; s < t._qiQiuGouList.length; s++) {
l = t._qiQiuGouList[s];
cc.tween(l).to(.3, {
scale: .3
}).start();
}
n.next = 26;
return t.awaitTime(.33);

case 26:
t._qiQiuGouRoot.active = !1;
t._slotsMask.active = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.back_ball);
o();

case 30:
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
qiQiuGouShow: function(e) {
var t = this;
return new Promise(function() {
var e = i(regeneratorRuntime.mark(function e(n, o) {
var i, a, r, c, s, l;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
t._qiQiuGouRoot.active = !0;
(i = t._qiQiuGouRoot.getComponent(cc.Animation)).play("qiqiugouShow");
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_ball);
for (a = 0; a < t._qiQiuGouList.length; a++) {
(r = t._qiQiuGouList[a]).getComponent(cc.Button).interactable = !0;
t.setNodeColor(r, cc.vv.gameData.getGameCfg().normalColor);
for (c in r.children) r.children.hasOwnProperty(c) && (r.children[c].active = !1);
(s = cc.find("qiqiugou2", r)).active = !0;
(l = s.getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
l.addAnimation(0, "animation2", !0);
}
e.next = 7;
return t.awaitTime(.33);

case 7:
i.play("qiqiugouNormal");
t.setAutoPlay();
n();

case 10:
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
clickQiQiuGou: function(e) {
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 3;
t.data.choiceId = e;
cc.vv.NetManager.send(t);
this._qiQiuGouRoot.getComponent(cc.Animation).pause();
for (var n = 0; n < this._qiQiuGouList.length; n++) {
var o = this._qiQiuGouList[n];
o.stopAllActions();
n !== e && this.setNodeColor(o, cc.vv.gameData.getGameCfg().grayColor);
o.getComponent(cc.Button).interactable = !1;
}
},
showQiQiuGouResult: function(e, t, n, o) {
var a = this;
return new Promise(function() {
var r = i(regeneratorRuntime.mark(function r(c, s) {
var l, u, f, m;
return regeneratorRuntime.wrap(function(r) {
for (;;) switch (r.prev = r.next) {
case 0:
l = a._qiQiuGouList[e];
(u = cc.find("qiqiugou", l)).active = !0;
(f = u.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
f.setCompleteListener(function() {
u.active = !1;
});
m = cc.find("qiqiugou2", l);
cc.tween(m).to(.3, {
scale: .1
}).call(i(regeneratorRuntime.mark(function i() {
var r, s, u, f, d;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
m.active = !1;
m.scale = 1;
r = cc.find("choose_" + t, l);
1 === t && (r.getComponent(cc.Label).string = n);
r.active = !0;
r.scale = .1;
cc.tween(r).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
i.next = 9;
return a.awaitTime(.8);

case 9:
s = 0;
for (u = 0; u < a._qiQiuGouList.length; u++) {
f = a._qiQiuGouList[u];
if (u !== e) {
if (d = cc.find("choose_" + o[s], f)) {
1 === o[s] && (d.getComponent(cc.Label).string = n);
d.active = !0;
d.scale = 1;
}
s++;
}
}
i.next = 13;
return a.awaitTime(2);

case 13:
c();

case 14:
case "end":
return i.stop();
}
}, i);
}))).start();

case 8:
case "end":
return r.stop();
}
}, r);
}));
return function(e, t) {
return r.apply(this, arguments);
};
}());
},
onRecvClickQiQiu: function(e) {
var t = this;
return i(regeneratorRuntime.mark(function n() {
var o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (200 != e.code) {
n.next = 29;
break;
}
if (3 != e.data.rtype) {
n.next = 28;
break;
}
o = e.data.balloonGame.startPrize * e.data.balloonGame.subGameresult.mult;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_end);
n.next = 6;
return t.showQiQiuGouResult(e.data.choiceId, e.data.balloonGame.finalType, Global.convertNumToShort(o), e.data.balloonGame.otherTypes);

case 6:
n.next = 8;
return t.hideQiQiuGou(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

case 8:
if (1 !== e.data.balloonGame.finalType) {
n.next = 11;
break;
}
n.next = 23;
break;

case 11:
if (2 !== e.data.balloonGame.finalType) {
n.next = 16;
break;
}
n.next = 14;
return t.showRandomWildsGame(e.data.balloonGame.subGameresult);

case 14:
n.next = 23;
break;

case 16:
if (3 !== e.data.balloonGame.finalType) {
n.next = 21;
break;
}
n.next = 19;
return t.showStackedWildsGame(e.data.balloonGame.subGameresult);

case 19:
n.next = 23;
break;

case 21:
n.next = 23;
return t.showJackpotReelGame(e.data.balloonGame.subGameresult);

case 23:
t.showGameWinTrace(e.data.balloonGame.lineResult);
cc.vv.gameData.GetSlotsScript()._balloonGameWinCoin = e.data.balloonGame.winCoin;
if (t._showQiQiuGouSuccess) {
t._showQiQiuGouSuccess();
t._showQiQiuGouSuccess = null;
}
n.next = 29;
break;

case 28:
1 == e.data.rtype ? cc.vv.gameData.getPopWinManage().onSpinTrunTable(e) : 2 === e.data.rtype && cc.vv.gameData.getPopWinManage().onSelectWanFa(e);

case 29:
case "end":
return n.stop();
}
}, n);
}))();
},
showGameWinTrace: function(e) {
for (var t = [], n = 0; n < e.zjLuXian.length; n++) for (var o = e.zjLuXian[n], i = 0; i < o.indexs.length; i++) t[o.indexs[i]] = 1;
if (e.scatterResult && e.scatterResult.indexs) for (var a = 0; a < e.scatterResult.indexs.length; a++) {
t[e.scatterResult.indexs[a]] = 1;
}
for (var r in t) {
var c = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(Number(r));
if (c) {
c.playWinAnimation();
c.ShowKuang();
}
}
},
showJackpotReelGame: function(e) {
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a, r, c, s, l, u, f, m;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = cc.vv.gameData.GetSlotsScript().changeCardsValArr(e.jackpotIdxs);
a = [ cc.v2(260, -1208), cc.v2(130, -1208), cc.v2(0, -1208), cc.v2(-130, -1208), cc.v2(-260, -1208) ];
r = cc.vv.gameData.getGameCfg();
for (c in i) if (i.hasOwnProperty(c) && 4 === (s = i[c]).length) {
l = s[2];
u = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(l);
f = u.node.convertToWorldSpaceAR(cc.v2(0, 0 + r.symbolSize.height / 2));
m = cc.vv.gameData.getJackpotReelGame().node.convertToNodeSpaceAR(f);
a[a.length - Number(c) - 1].y = m.y;
}
t.next = 6;
return cc.vv.gameData.getJackpotReelGame().showGame(a, e.jackpotId, i);

case 6:
t.next = 8;
return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(e.jackpotValue, e.jackpotId);

case 8:
n();

case 9:
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
setJackpot: function(e) {
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a, r, c, s, l, u, f, m;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = cc.vv.gameData.GetSlotsScript().changeCardsValArr(e.idxs);
a = [ cc.v2(260, -1208), cc.v2(130, -1208), cc.v2(0, -1208), cc.v2(-130, -1208), cc.v2(-260, -1208) ];
r = cc.vv.gameData.getGameCfg();
for (c in i) if (i.hasOwnProperty(c) && 4 === (s = i[c]).length) {
l = s[2];
u = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(l);
f = u.node.convertToWorldSpaceAR(cc.v2(0, 0 + r.symbolSize.height / 2));
m = cc.vv.gameData.getJackpotReelGame().node.convertToNodeSpaceAR(f);
a[a.length - Number(c) - 1].y = m.y;
}
t.next = 6;
return cc.vv.gameData.getJackpotReelGame().showJackPotResult(a, e.id);

case 6:
t.next = 8;
return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(e.value, e.id);

case 8:
n();

case 9:
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
showStackedWildsGame: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._dingguang.active = !0;
n.next = 3;
return cc.vv.gameData.getStackedWildsGame().showGame(e.wildCols, e.realCards, cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

case 3:
cc.vv.gameData.getStackedWildsGame().hideGame();
t._dingguang.active = !1;
o();

case 6:
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
showRandomWildsGame: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._slotsMask.active = !0;
cc.vv.gameData.GetSlotsScript()._isInFree ? t._slotsMask.height = 680 : t._slotsMask.height = 340;
n.next = 4;
return cc.vv.gameData.getRandomWildsGame().showGame(e.randIdxs, e.randCards);

case 4:
t._slotsMask.active = !1;
cc.vv.gameData.getRandomWildsGame().hideGame();
o();

case 7:
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
showJackPoolNorMalAction: function() {
if (cc.vv.gameData) {
var e = this._PrizePoolRoot, t = cc.vv.gameData.getGameCfg();
if (e) for (var n = 1; n < 6; n++) {
var o = a[t.jackpotType[n] - 1], i = cc.find("prizePool_" + o, e);
cc.find("winEffect", i).active = !1;
var r = cc.find("icon_" + o, e), c = cc.find("jackpot_awards_01", r);
c.scale = 1;
c.getComponent(sp.Skeleton).setAnimation(0, "animation" + (6 - n) + "_4", !0);
cc.tween(c).delay(.5 * n).to(.5, {
scale: 0
}, {
easing: "backIn"
}).delay(1 * (5 - n) + 3).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
}
}
},
showWinJackPoolAnimation: function(e) {
var t = this._PrizePoolRoot;
if (t) {
var n = a[e], o = cc.find("icon_" + n, t), i = cc.find("jackpot_awards_01", o);
i.scale = 1;
i.stopAllActions();
var r = i.getComponent(sp.Skeleton);
r.setAnimation(0, "animation" + (5 - e) + "_1", !1);
r.addAnimation(0, "animation" + (5 - e) + "_2", !1);
r.addAnimation(0, "animation" + (5 - e) + "_3", !1);
var c = cc.find("prizePool_" + n, t);
cc.find("winEffect", c).active = !0;
}
},
setFreeGame: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (!e) {
n.next = 12;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition2);
a = t._qiePin[0].getComponent(sp.Skeleton);
t._qiePin[0].active = !0;
a.setAnimation(0, "animation", !1);
a.setCompleteListener(function() {
t._qiePin[0].active = !1;
a.setCompleteListener(null);
});
n.next = 8;
return t.awaitTime(2.5);

case 8:
n.next = 10;
return cc.vv.gameData.GetSlotsScript().showFreeGameSlots();

case 10:
n.next = 16;
break;

case 12:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition1);
t.showExitFree();
n.next = 16;
return cc.vv.gameData.GetSlotsScript().hideFreeGameSlots();

case 16:
o();

case 17:
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
onEventTotalbetUpdated: function(e) {
this.changeTurntableTriggerBar();
},
showJackInTheBoxWin: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!cc.vv.gameData.GetSlotsScript()._isInFree) {
t.next = 2;
break;
}
return t.abrupt("return");

case 2:
if ("idle" == cc.vv.gameData.GetSlotState()) {
t.next = 4;
break;
}
return t.abrupt("return");

case 4:
if (!(cc.vv.gameData.GetAutoModelTime() > 0)) {
t.next = 6;
break;
}
return t.abrupt("return");

case 6:
(n = cc.find("iconRight/button", e._turntableTriggerBar)).getComponent(cc.Button).interactable = !1;
t.next = 10;
return cc.vv.gameData.getJackInTheBox().showPopWin(cc.vv.gameData.getBonusGame());

case 10:
n.getComponent(cc.Button).interactable = !0;

case 11:
case "end":
return t.stop();
}
}, t);
}))();
},
unlockTurntable: function() {
if (!(cc.vv.gameData.GetSlotsScript()._isInFree || "idle" != cc.vv.gameData.GetSlotState() || cc.vv.gameData.GetAutoModelTime() > 0)) {
var e = cc.find("lock/button", this._turntableTriggerBar), t = cc.vv.gameData.getBonusGame();
if (t && t.needBet <= cc.vv.gameData._deskInfo.mults.length) {
e.getComponent(cc.Button).instantiate = !1;
cc.vv.gameData.GetBottomScript().SetBetIdx(t.needBet);
}
}
},
showCaiDan: function() {
var e = this;
this._caidan.active = !0;
var t = this._caidan.getComponent(sp.Skeleton);
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
e._caidan.active = !1;
t.setCompleteListener(null);
});
},
showExitFree: function() {
var e = this;
this._exitFree.active = !0;
var t = this._exitFree.getComponent(sp.Skeleton);
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
e._exitFree.active = !1;
t.setCompleteListener(null);
});
}
});
cc._RF.pop();
}, {} ],
Clown_Pop: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "92a2altlEVGI5XliUOaFRFt", "Clown_Pop");
function o(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function i(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var r = e.apply(t, n);
function c(e) {
o(r, i, a, c, s, "next", e);
}
function s(e) {
o(r, i, a, c, s, "throw", e);
}
c(void 0);
});
};
}
var a = 0, r = 1, c = 2, s = 3, l = 4, u = 5, f = [ -120, -300, -240, -60, 0, -180 ];
cc.Class({
extends: cc.Component,
properties: {
showWinList: {
default: [],
type: [ cc.Node ]
},
jackpotWinCoin_button: {
default: null,
type: cc.Node
},
jackpotWinCoin_label: {
default: null,
type: cc.Node
},
freeGame_Collectbutton: {
default: null,
type: cc.Node
},
freeGame_label: {
default: null,
type: cc.Node
},
freeGame_startbutton: {
default: null,
type: cc.Node
},
turnTableGame_spinButton: {
default: null,
type: cc.Node
},
turnTableGame_clossButton: {
default: null,
type: cc.Node
},
turnTableGame_label: {
default: null,
type: cc.Node
},
wanFaXuanZe_startButton: {
default: null,
type: cc.Node
},
wanFaXuanZe_selectButton1: {
default: null,
type: cc.Node
},
wanFaXuanZe_selectButton2: {
default: null,
type: cc.Node
},
wanFaXuanZe_selectButton3: {
default: null,
type: cc.Node
},
jackInBoxWinCoin_collect: {
default: null,
type: cc.Node
},
jackInBoxWinCoin_label: {
default: null,
type: cc.Node
},
_jackpotWinCoin: 0,
_freeGameWinCoin: 0,
_trunTableWinCoin: 0,
_freeGameTimesSucces: null,
_spinWheelSucces: null,
_jackInBoxWinCoin: 0,
_trunTableSucces: null
},
onLoad: function() {},
onDestroy: function() {},
start: function() {
Global.btnClickEvent(this.jackpotWinCoin_button, this.clossJackpotWinCoin, this);
Global.btnClickEvent(this.freeGame_Collectbutton, this.clossFreeGame, this);
Global.btnClickEvent(this.freeGame_startbutton, this.clossFreeGame, this);
Global.btnClickEvent(this.turnTableGame_spinButton, this.spinTurnTable, this);
Global.btnClickEvent(this.turnTableGame_clossButton, this.closeTrunTableGame, this);
Global.btnClickEvent(this.wanFaXuanZe_startButton, this.selectWanFa, this);
Global.btnClickEvent(this.wanFaXuanZe_selectButton1, this.selectResult1, this);
Global.btnClickEvent(this.wanFaXuanZe_selectButton2, this.selectResult2, this);
Global.btnClickEvent(this.wanFaXuanZe_selectButton3, this.selectResult3, this);
Global.btnClickEvent(this.jackInBoxWinCoin_collect, this.closeJackInBoxWinCoin, this);
},
showWin: function() {
this.node.active = !0;
var e = cc.find("popup", this.node);
e.opacity = 0;
cc.tween(e).to(.3, {
opacity: 255
}).start();
},
hideWin: function(e) {
var t = this, n = cc.find("popup", this.node);
cc.tween(n).to(.3, {
opacity: 0
}).call(function() {
e && e();
t.node.active = !1;
for (var n = 0; n < t.showWinList.length; n++) {
t.showWinList[n].active = !1;
}
}).start();
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
initJackpotWinCoin: function(e) {
this.jackpotWinCoin_button.getComponent(cc.Button).interactable = !0;
this._jackpotWinCoin = e;
this.jackpotWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * e));
this.jackpotWinCoin_label.scale = .2;
cc.vv.gameData.checkAutoPlay(this.jackpotWinCoin_button, this.clossJackpotWinCoin.bind(this));
},
showJackpotWinCoin: function(e, t) {
var n = this;
return new Promise(function(o, i) {
var a = cc.vv.gameData.getGameCfg().jackpotType[t];
n._freeGameTimesSucces = o;
n.showWin();
n.initJackpotWinCoin(e);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_dialog_start_show);
for (var c = 0; c < n.showWinList.length; c++) {
n.showWinList[c].active = !1;
}
n.showWinList[r].active = !0;
var s = cc.find("jackpot_tc_01", n.showWinList[r]);
s.y = -170;
var l = s.getComponent(sp.Skeleton), u = 6 - a;
if (l) {
l.setAnimation(0, "animation" + u + "_1", !1);
l.addAnimation(0, "animation" + u + "_2", !0);
}
cc.tween(n.jackpotWinCoin_label).to(.2, {
scale: 1
}).call(function() {
n._startAddFreeWinCoin = !0;
Global.doRoallNumEff(n.jackpotWinCoin_label, Math.floor(.1 * e), e, 2.5, function() {
n._startAddFreeWinCoin = !1;
}, null, 0, !0);
}).start();
});
},
clossJackpotWinCoin: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
e.jackpotWinCoin_button.stopAllActions();
e.jackpotWinCoin_button.getComponent(cc.Button).interactable = !1;
if (!e._startAddFreeWinCoin) {
t.next = 10;
break;
}
e._startAddFreeWinCoin = !1;
e.jackpotWinCoin_label.stopAllActions();
e.jackpotWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(e._jackpotWinCoin);
t.next = 10;
return e.awaitTime(.2);

case 10:
t.next = 12;
return e.awaitTime(.2);

case 12:
n = cc.find("jackpot_tc_01", e.showWinList[r]);
cc.tween(n).to(.3, {
position: cc.v3(n.x, -1208, 0)
}).start();
e.hideWin(function() {
cc.vv.gameData.getManage().showJackPoolNorMalAction();
if (e._freeGameTimesSucces) {
e._freeGameTimesSucces();
e._freeGameTimesSucces = null;
}
});

case 15:
case "end":
return t.stop();
}
}, t);
}))();
},
initFreeGameWinCoin: function(e) {
this.freeGame_Collectbutton.getComponent(cc.Button).interactable = !0;
this._freeGameWinCoin = e;
this.freeGame_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * e));
this.freeGame_label.active = !1;
this.freeGame_Collectbutton.active = !1;
this.freeGame_startbutton.active = !1;
},
showFreeGameWinCoin: function(e) {
var t = this;
return new Promise(function(n, o) {
t._freeGameTimesSucces = n;
t.showWin();
t.initFreeGameWinCoin(e);
for (var i = 0; i < t.showWinList.length; i++) {
t.showWinList[i].active = !1;
}
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
t.showWinList[c].active = !0;
var a = cc.find("fg_tc_01", t.showWinList[c]);
a.opacity = 255;
var r = a.getComponent(sp.Skeleton);
if (r) {
r.setAnimation(0, "animation3", !1);
r.addAnimation(0, "animation4", !0);
}
cc.tween(t.freeGame_label).delay(.2).call(function() {
t.freeGame_label.active = !0;
t.freeGame_Collectbutton.active = !0;
t._startAddFreeWinCoin = !0;
Global.doRoallNumEff(t.freeGame_label, Math.floor(.1 * e), e, 2.5, function() {
t._startAddFreeWinCoin = !1;
}, null, 0, !0);
cc.vv.gameData.checkAutoPlay(t.freeGame_Collectbutton, t.clossFreeGame.bind(t));
}).start();
});
},
initFreeGame: function() {
this.freeGame_startbutton.getComponent(cc.Button).interactable = !0;
this.freeGame_label.active = !1;
this.freeGame_Collectbutton.active = !1;
this.freeGame_startbutton.active = !1;
cc.vv.gameData.checkAutoPlay(this.freeGame_startbutton, this.clossFreeGame.bind(this));
},
showFreeGame: function() {
var e = this;
return new Promise(function(t, n) {
e._freeGameTimesSucces = t;
e.showWin();
e.initFreeGame();
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
for (var o = 0; o < e.showWinList.length; o++) {
e.showWinList[o].active = !1;
}
e.showWinList[c].active = !0;
var i = cc.find("fg_tc_01", e.showWinList[c]);
i.opacity = 255;
var a = i.getComponent(sp.Skeleton);
if (a) {
a.setAnimation(0, "animation1", !1);
a.addAnimation(0, "animation2", !0);
}
cc.tween(e.freeGame_label).delay(.2).call(function() {
e.freeGame_startbutton.active = !0;
}).start();
});
},
showFreeWinFree: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a, r;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.showWin();
e.freeGame_label.active = !1;
e.freeGame_Collectbutton.active = !1;
e.freeGame_startbutton.active = !1;
for (i = 0; i < e.showWinList.length; i++) e.showWinList[i].active = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_more_show);
e.showWinList[c].active = !0;
(a = cc.find("fg_tc_01", e.showWinList[c])).opacity = 255;
if (r = a.getComponent(sp.Skeleton)) {
r.setAnimation(0, "animation5", !1);
r.setCompleteListener(function() {
e.node.active = !1;
n();
r.setCompleteListener(null);
});
} else n();

case 11:
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
clossFreeGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
e.freeGame_Collectbutton.stopAllActions();
e.freeGame_Collectbutton.getComponent(cc.Button).interactable = !1;
e.freeGame_startbutton.stopAllActions();
e.freeGame_startbutton.getComponent(cc.Button).interactable = !1;
if (!e._startAddFreeWinCoin) {
t.next = 12;
break;
}
e._startAddFreeWinCoin = !1;
e.freeGame_label.stopAllActions();
e.freeGame_label.getComponent(cc.Label).string = Global.FormatNumToComma(e._freeGameWinCoin);
t.next = 12;
return e.awaitTime(.2);

case 12:
n = cc.find("fg_tc_01", e.showWinList[c]);
cc.tween(n).to(.3, {
opacity: 0
}).start();
e.hideWin(function() {
if (e._freeGameTimesSucces) {
e._freeGameTimesSucces();
e._freeGameTimesSucces = null;
}
});

case 15:
case "end":
return t.stop();
}
}, t);
}))();
},
initTurnTableGame: function(e) {
this.turnTableGame_spinButton.getComponent(cc.Button).interactable = !0;
for (var t = 0; t < e.progressData.wheelItems.length; t++) {
var n = e.progressData.wheelItems[t];
cc.find("bg/theme198_wheel_img/result" + (t + 1), this.showWinList[a]).getComponent(cc.Label).string = Global.convertNumToShort(n.coin);
}
cc.vv.gameData.checkAutoPlay(this.turnTableGame_spinButton, this.spinTurnTable.bind(this));
},
showTurnTableGame: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var r, c, s, l, u, f;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._trunTableSucces = o;
t.showWin();
t.initTurnTableGame(e);
for (r = 0; r < t.showWinList.length; r++) t.showWinList[r].active = !1;
c = t.showWinList[a];
(s = cc.find("bg", c)).y = -1286;
n.next = 9;
return t.awaitTime(0);

case 9:
c.active = !0;
(l = cc.find("text", t.turnTableGame_spinButton)).color = cc.color(255, 255, 255);
cc.find("spin", t.turnTableGame_spinButton).active = !0;
cc.find("bg/yepian", c).active = !1;
u = cc.find("bg/jiantou", c);
u.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
f = cc.find("bg/deng", c);
f.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
cc.find("tuichu", c).active = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_in);
cc.tween(s).to(.2, {
y: -316
}).call(function() {
l.getComponent(cc.Animation).play("loopScaled");
}).start();

case 26:
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
closeTrunTableGame: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n, o;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
e.turnTableGame_clossButton.stopAllActions();
e.turnTableGame_clossButton.getComponent(cc.Button).interactable = !1;
if (!e._startAddFreeWinCoin) {
t.next = 10;
break;
}
e._startAddFreeWinCoin = !1;
e.turnTableGame_label.stopAllActions();
e.turnTableGame_label.getComponent(cc.Label).string = Global.FormatNumToComma(e._trunTableWinCoin);
t.next = 10;
return e.awaitTime(.2);

case 10:
n = e.showWinList[a];
o = cc.find("bg", n);
cc.tween(o).to(.2, {
y: -1286
}).call(function() {
var t = cc.find("tuichu", n);
cc.tween(t).to(.3, {
opacity: 0
}).start();
e.hideWin(function() {
if (e._spinWheelSucces) {
e._spinWheelSucces();
e._spinWheelSucces = null;
}
});
}).start();

case 13:
case "end":
return t.stop();
}
}, t);
}))();
},
spinTurnTable: function() {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_spin);
this.turnTableGame_spinButton.stopAllActions();
this.turnTableGame_spinButton.getComponent(cc.Button).interactable = !1;
var e = cc.find("text", this.turnTableGame_spinButton);
e.getComponent(cc.Animation).pause();
e.color = cc.color(60, 60, 60);
cc.find("spin", this.turnTableGame_spinButton).active = !1;
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 1;
cc.vv.NetManager.send(t);
},
onSpinTrunTable: function(e) {
var t = this;
return i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
cc.vv.gameData.GetSlotsScript()._wheelWinCoin = e.data.coin;
cc.vv.gameData.setBonusGame(e.data.bonusGame);
n.next = 4;
return t.spinWheel(e.data.id, e.data.coin);

case 4:
n.next = 6;
return cc.vv.gameData.getJackInTheBox().showWin(e.data.bonusGame, e.data.idx);

case 6:
if (t._trunTableSucces) {
t._trunTableSucces();
t._trunTableSucces = null;
}

case 7:
case "end":
return n.stop();
}
}, n);
}))();
},
spinWheel: function(e, t) {
var n = this;
return new Promise(function() {
var o = i(regeneratorRuntime.mark(function o(r, c) {
var s, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
n._spinWheelSucces = r;
s = cc.find("bg/theme198_wheel_img", n.showWinList[a]);
l = f[e - 1] - 20;
l -= 1800;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_roll);
cc.tween(s).to(6, {
angle: l
}, {
easing: "quadInOut"
}).to(.7, {
angle: l + 20
}, {
easing: "quadIn"
}).call(i(regeneratorRuntime.mark(function e() {
var o, i, r, c, l, u;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_end);
s.angle += 1800;
(o = cc.find("bg/yepian", n.showWinList[a])).active = !0;
o.getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
i = cc.find("bg/jiantou", n.showWinList[a]);
i.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
r = cc.find("bg/deng", n.showWinList[a]);
r.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
e.next = 14;
return n.awaitTime(1);

case 14:
(c = cc.find("tuichu", n.showWinList[a])).active = !0;
c.opacity = 255;
l = cc.find("spine", c);
u = l.getComponent(sp.Skeleton);
n.turnTableGame_clossButton.getComponent(cc.Button).interactable = !0;
cc.vv.gameData.checkAutoPlay(n.turnTableGame_clossButton, n.closeTrunTableGame.bind(n));
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_dialog_collect_show);
u.setAnimation(0, "animation3", !1);
u.addAnimation(0, "animation4", !0);
n._startAddFreeWinCoin = !0;
n._trunTableWinCoin = t;
Global.doRoallNumEff(n.turnTableGame_label, Math.floor(.1 * t), t, 2.5, function() {
n._startAddFreeWinCoin = !1;
}, null, 0, !0);

case 27:
case "end":
return e.stop();
}
}, e);
}))).start();

case 6:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}());
},
initWanFaXuanZe: function() {
this.wanFaXuanZe_startButton.getComponent(cc.Button).interactable = !0;
cc.vv.gameData.checkAutoPlay(this.wanFaXuanZe_startButton, this.selectWanFa.bind(this));
},
showWanFaXuanZe: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._freeGameTimesSucces = n;
e.showWin();
e.initWanFaXuanZe();
for (i = 0; i < e.showWinList.length; i++) e.showWinList[i].active = !1;
(a = e.showWinList[s]).active = !0;
a.scale = 1;
(r = cc.find("wanfaxuanze_01", a)).active = !0;
r.opacity = 255;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_start_show);
(c = r.getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
c.addAnimation(0, "animation2", !0);
cc.find("wanfaxuanze_02", a).active = !1;
cc.find("wanfaxuanze_03", a).active = !1;

case 18:
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
showWanFaSelect: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n, o, i, a, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n = e.showWinList[s];
o = cc.find("wanfaxuanze_01", n);
cc.tween(o).to(.2, {
opacity: 0
}).start();
t.next = 5;
return e.awaitTime(.2);

case 5:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.choose_dialog_start_show);
o.active = !1;
(i = cc.find("wanfaxuanze_02", n)).active = !0;
(a = i.getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
a.addAnimation(0, "animation2", !0);
(r = cc.find("wanfaxuanze_03", n)).active = !0;
(c = r.getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
c.addAnimation(0, "animation2", !0);
e.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = !0;
e.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = !0;
e.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = !0;
cc.vv.gameData.checkAutoPlay(e.wanFaXuanZe_selectButton1, e.selectResult1.bind(e));

case 21:
case "end":
return t.stop();
}
}, t);
}))();
},
selectWanFa: function() {
this.wanFaXuanZe_startButton.stopAllActions();
this.wanFaXuanZe_startButton.getComponent(cc.Button).interactable = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
this.showWanFaSelect();
},
selectResult1: function() {
this.wanFaXuanZe_selectButton1.stopAllActions();
this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
var e = this.showWinList[s];
cc.find("wanfaxuanze_03", e).getComponent(sp.Skeleton).setAnimation(0, "animation1_1", !1);
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 2;
t.data.choiceId = 1;
cc.vv.NetManager.send(t);
},
selectResult2: function() {
this.wanFaXuanZe_selectButton1.stopAllActions();
this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
var e = this.showWinList[s];
cc.find("wanfaxuanze_03", e).getComponent(sp.Skeleton).setAnimation(0, "animation2_1", !1);
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 2;
t.data.choiceId = 2;
cc.vv.NetManager.send(t);
},
selectResult3: function() {
this.wanFaXuanZe_selectButton1.stopAllActions();
this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = !1;
this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
var e = this.showWinList[s];
cc.find("wanfaxuanze_03", e).getComponent(sp.Skeleton).setAnimation(0, "animation3_1", !1);
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.uid = Global.playerData.uid;
t.gameid = cc.vv.gameData._gameId;
t.data = {};
t.data.rtype = 2;
t.data.choiceId = 3;
cc.vv.NetManager.send(t);
},
onSelectWanFa: function(e) {
var t = this;
return i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
cc.vv.gameData.getJackInTheBox().setGameData(e.data);
n.next = 3;
return t.awaitTime(1);

case 3:
t.closeWanFaXuanZe();

case 4:
case "end":
return n.stop();
}
}, n);
}))();
},
closeWanFaXuanZe: function() {
var e = this, t = this.showWinList[s];
cc.tween(t).to(.3, {
scale: .1
}).start();
this.hideWin(function() {
if (e._freeGameTimesSucces) {
e._freeGameTimesSucces();
e._freeGameTimesSucces = null;
}
});
},
showRound: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.round_dialog_start_show);
t.showWin();
for (a = 0; a < t.showWinList.length; a++) t.showWinList[a].active = !1;
(r = t.showWinList[l]).active = !0;
c = cc.find("spine", r);
(s = c.getComponent(sp.Skeleton)).setAnimation(0, "animation_" + e, !1);
s.setCompleteListener(function() {
t.hideWin();
s.setCompleteListener(null);
o();
});

case 9:
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
initJackInBoxWinCoin: function(e) {
this.jackInBoxWinCoin_collect.getComponent(cc.Button).interactable = !0;
this._jackInBoxWinCoin = e;
this.jackInBoxWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * e));
cc.vv.gameData.checkAutoPlay(this.jackInBoxWinCoin_collect, this.closeJackInBoxWinCoin.bind(this));
},
showJackInBoxWinCoin: function(e) {
var t = this;
return new Promise(function(n, o) {
t._freeGameTimesSucces = n;
t.showWin();
t.initJackInBoxWinCoin(e);
for (var i = 0; i < t.showWinList.length; i++) {
t.showWinList[i].active = !1;
}
t.showWinList[u].active = !0;
t.showWinList[u].scale = 1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_collect_show);
var a = cc.find("spine", t.showWinList[u]).getComponent(sp.Skeleton);
if (a) {
a.setAnimation(0, "animation1", !1);
a.addAnimation(0, "animation2", !0);
}
t._startAddFreeWinCoin = !0;
Global.doRoallNumEff(t.jackInBoxWinCoin_label, Math.floor(.1 * e), e, 2.5, function() {
t._startAddFreeWinCoin = !1;
}, null, 0, !0);
});
},
closeJackInBoxWinCoin: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
e.jackInBoxWinCoin_collect.stopAllActions();
e.jackInBoxWinCoin_collect.getComponent(cc.Button).interactable = !1;
if (!e._startAddFreeWinCoin) {
t.next = 10;
break;
}
e._startAddFreeWinCoin = !1;
e.jackInBoxWinCoin_label.stopAllActions();
e.jackInBoxWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(e._jackInBoxWinCoin);
t.next = 10;
return e.awaitTime(.2);

case 10:
cc.tween(e.showWinList[u]).to(.3, {
scale: .1
}).start();
e.hideWin(function() {
if (e._freeGameTimesSucces) {
e._freeGameTimesSucces();
e._freeGameTimesSucces = null;
}
});

case 12:
case "end":
return t.stop();
}
}, t);
}))();
}
});
cc._RF.pop();
}, {} ],
Clown_PrizePool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fd466/cbrxDOafD1Q+ty/5x", "Clown_PrizePool");
var o = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {
_nowUpdatePool: 0
},
ShowNodeLockByNode: function(e, t, n, i, a) {
var r = o[i];
this.updataJackPoolLock(i, t);
var c = cc.vv.gameData.getGameCfg().jackpotType[i + 1] - 1;
if (r) {
var s = cc.find("Canvas/safe_node").getComponentInChildren("LMSlotMachine_PrizePool");
if (s) {
var l = cc.find("prizePool_" + r, s.node.parent), u = cc.find("icon_" + r, s.node.parent);
if (l && u) {
var f = u.getChildByName("lockbg"), m = cc.find("lockEffect", l).getComponent(sp.Skeleton);
if (f) if (t) {
f.active = !0;
if (a) m.setAnimation(0, "animation" + (5 - c) + "_2", !0); else {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_lock);
m.setAnimation(0, "animation" + (5 - c) + "_1", !1);
m.addAnimation(0, "animation" + (5 - c) + "_2", !0);
}
} else {
f.active = !1;
if (a) {
m.setAnimation(0, "animation" + (5 - c) + "_1", !1);
m.clearTracks();
} else {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_unlock);
m.setAnimation(0, "animation" + (5 - c) + "_3", !1);
}
}
}
}
}
},
updataJackPoolLock: function(e, t) {
var n = cc.vv.gameData.getGameCfg().jackpotType[e + 1] - 1;
if (t) {
if (this._nowUpdatePool < n) return;
this._nowUpdatePool = n;
} else {
if (this._nowUpdatePool > n) return;
this._nowUpdatePool = n;
}
var i = cc.find("Canvas/safe_node").getComponentInChildren("LMSlotMachine_PrizePool");
if (i) for (var a = 0; a < o.length; a++) {
var r = o[a], c = cc.find("icon_" + r, i.node.parent);
if (c) {
var s = c.getChildByName("lockbg"), l = cc.find("tips", c);
if (s) if (e === a) if (t) {
s.active = !0;
cc.find("lock", l).active = !0;
cc.find("unlock", l).active = !1;
l.scale = 0;
cc.tween(l).to(.5, {
scale: 1
}, {
easing: "backOut"
}).delay(.5).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
} else {
s.active = !1;
cc.find("lock", l).active = !1;
cc.find("unlock", l).active = !0;
l.scale = 0;
cc.tween(l).to(.5, {
scale: 1
}, {
easing: "backOut"
}).delay(.5).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
} else {
l.stopAllActions();
l.scale = 0;
}
}
}
}
});
cc._RF.pop();
}, {
LMSlots_PrizePool_Base: void 0
} ],
Clown_RandomWildsGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dc829flpRNLM5kkqBjyUNb/", "Clown_RandomWildsGame");
function o(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function i(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var r = e.apply(t, n);
function c(e) {
o(r, i, a, c, s, "next", e);
}
function s(e) {
o(r, i, a, c, s, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
wild: {
default: null,
type: cc.Node
},
_wildStartY: 0,
_result: null,
_wildList: []
},
onLoad: function() {
this._wildStartY = this.wild.y;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showGame: function(e, t) {
var n = this;
return new Promise(function() {
var o = i(regeneratorRuntime.mark(function o(i, a) {
var r, c, s, l, u, f, m, d;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
n.node.active = !0;
for (r = 0; r < n._wildList.length; r++) n._wildList[r].parent = null;
cc.vv.gameData.getGameCfg();
c = cc.vv.gameData.GetSlotsScript();
s = 0;

case 5:
if (!(s < e.length)) {
o.next = 25;
break;
}
l = e[s];
u = c.GetSymbolByIdx(l);
f = u.node.convertToWorldSpaceAR(cc.v2(0, 0));
m = cc.vv.gameData.getRandomWildsGame().node.convertToNodeSpaceAR(f);
d = cc.instantiate(n.wild);
n._wildList.push(d);
d.active = !0;
d.x = m.x;
d.y = n._wildStartY;
d.parent = n.node;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_appear);
cc.tween(d).to(1, {
position: m
}).start();
o.next = 20;
return n.awaitTime(1);

case 20:
n.showEndAni(d, t[s]);
u.ShowById(t[s]);

case 22:
s++;
o.next = 5;
break;

case 25:
o.next = 27;
return n.awaitTime(1);

case 27:
i();

case 28:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}());
},
showEndAni: function(e, t) {
cc.find("wildtuowei", e).active = !1;
var n = cc.find("wild", e);
n.active = !0;
switch (t) {
case 2:
var o = cc.find("wild", n);
o && (o.active = !0);
break;

case 3:
var i = cc.find("wild2", n);
i && (i.active = !0);
break;

case 4:
var a = cc.find("wild3", n);
a && (a.active = !0);
}
var r = cc.find("bouns", e);
r.active = !0;
var c = r.getComponent(sp.Skeleton);
c.setAnimation(0, "animation", !1);
c.setCompleteListener(function() {
c.setCompleteListener(null);
r.active = !1;
});
},
hideGame: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
Clown_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "22bb8fB3MJMCY4OVQQ/YRFg", "Clown_Slots");
function o(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
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
var o, a, r = !0, c = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
a = e;
},
f: function() {
try {
r || null == o.return || o.return();
} finally {
if (c) throw a;
}
}
};
}
function i(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
function r(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function c(e) {
r(a, o, i, c, s, "next", e);
}
function s(e) {
r(a, o, i, c, s, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_node_freeGame: null,
_freeGameFinalWays: [],
_isInFree: !1,
_colFree: 0,
_rowFree: 0,
_reelsFree: [],
_freeSlotsNode: null,
_reelsFrame: null,
_showQiQiuJiLi: !1,
_jackInTheBoxWinCoin: 0,
_balloonGameWinCoin: 0,
_wheelWinCoin: 0
},
Init: function() {
var e = this;
this._topScript = cc.vv.gameData.GetTopScript();
this._bottomScript = cc.vv.gameData.GetBottomScript();
this._cfg = cc.vv.gameData.getGameCfg();
this._col = this._cfg.col;
this._row = this._cfg.row;
this._colFree = this._cfg.col_free;
this._rowFree = this._cfg.row_free;
this.createReels(this._col, this._row);
this.createFreeReels(this._colFree, this._rowFree);
this._bottomScript.ShowBtnsByState("idle");
this.RegisterEvent();
this.scheduleOnce(function() {
e.ReconnectShow();
}, 0);
},
onLoad: function() {
this._topAniNode = cc.find("reels/top_ani", this.node);
this._freeSlotsNode = cc.find("slotsfree", this.node.parent);
this._reelsFrame = cc.find("reels_frame", this.node.parent);
this._freeSlotsNode.active = !1;
},
RegisterEvent: function() {},
createFreeReels: function(e, t) {
var n = this._cfg.scripts.Reels;
this._freeSlotsNode.active = !0;
for (var o = 0; o < e; o++) {
var i = cc.find("reels/reel" + (o + 1), this._freeSlotsNode).addComponent(n);
i.Init(o, t, cc.find("reels/top_ani", this._freeSlotsNode));
this._reelsFree.push(i);
}
this._freeSlotsNode.active = !1;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
onMsgSpine: function(e) {
this._super(e);
this.SetBackgroundResult(e.backgrouds, e.balloonGame);
this.SetJackpotJl(e.backgrouds);
},
StopMove: function() {
this._bStopRightnow = !0;
this._bottomScript.ShowBtnsByState("moveing_1");
this._showQiQiuJiLi = !1;
this._stopTime = -1;
var e = this._reels;
this._isInFree && (e = this._reelsFree);
for (var t = 0; t < e.length; t++) {
var n = e[t];
n.StopMove(0);
n.StopMoveRightNow();
}
},
SetBackgroundResult: function(e, t) {
if (e) {
if (this._isInFree) {
for (var n = e.length / this._colFree, o = [], i = 0; i < e.length; i++) {
Math.floor(i / n);
var a = i % this._colFree;
if (this._cfg.symbol[e[i]]) {
var r = {};
r.type = e[i];
o[a] || (o[a] = []);
o[a].unshift(r);
}
}
for (var c = 0; c < this._reelsFree.length; c++) {
var s = this._reelsFree[c], l = o[c];
s.SetBackResult(l);
}
} else {
for (var u = e.length / this._col, f = [], m = 0; m < e.length; m++) {
Math.floor(m / u);
var d = m % this._col;
if (this._cfg.symbol[e[m]]) {
var h = {};
h.type = e[m];
f[d] || (f[d] = []);
f[d].unshift(h);
}
}
for (var g = 0; g < this._reels.length; g++) {
var p = this._reels[g], _ = f[g];
p.SetBackResult(_);
}
}
t && (this._showQiQiuJiLi = !0);
}
},
findJackPotBack: function(e) {
for (var t = 0, n = 0; n < e.length; n++) {
var o = e[n];
0 == t ? 1 === o && t++ : 1 === o && o === e[n - 1] ? t++ : t = 0;
}
return t >= 4;
},
SetJackpotJl: function(e) {
if (e) {
var t = [], n = this._col, o = this._reels;
if (this._isInFree) {
o = this._reelsFree;
n = this._colFree;
}
for (var i = 0; i < e.length; i++) {
var a = e[i], r = i % n;
t[r] || (t[r] = []);
t[r].push(a);
}
for (var c = 1; c < t.length; c++) {
var s = o[c];
s._showJackpotJl = !1;
for (var l = !0, u = 0; u < c; u++) {
var f = t[u];
if (!this.findJackPotBack(f)) {
l = !1;
break;
}
}
s._showJackpotJl = l;
}
}
},
SetSlotsResult: function(e) {
if (this._isInFree) {
for (var t = e.length / this._colFree, n = [], o = 0; o < e.length; o++) {
Math.floor(o / t);
var i = o % this._colFree;
if (this._cfg.symbol[e[o]]) {
var a = {};
a.sid = e[o];
n[i] || (n[i] = []);
n[i].unshift(a);
}
}
for (var r = 0; r < this._reelsFree.length; r++) {
var c = this._reelsFree[r], s = n[r];
c.SetResult(s);
}
} else {
for (var l = e.length / this._col, u = [], f = 0; f < e.length; f++) {
Math.floor(f / l);
var m = f % this._col;
if (this._cfg.symbol[e[f]]) {
var d = {};
d.sid = e[f];
u[m] || (u[m] = []);
u[m].unshift(d);
}
}
for (var h = 0; h < this._reels.length; h++) {
var g = this._reels[h], p = u[h];
g.SetResult(p);
}
}
},
changeCardsValArr: function(e) {
for (var t = [], n = 0; n < e.length; n++) {
var o = e[n] - 1, i = (Math.floor(o / this._col), o % this._col);
t[i] || (t[i] = []);
t[i].push(o + 1);
}
return t;
},
changeCardsArr: function(e) {
for (var t = e.length / this._col, n = [], o = 0; o < e.length; o++) {
Math.floor(o / t);
var i = o % this._col;
if (this._cfg.symbol[e[o]]) {
n[i] || (n[i] = []);
n[i].unshift(e[o]);
}
}
return n;
},
ShowWinCoin: function(e, t, n) {
var o = this;
return new Promise(function() {
var i = c(regeneratorRuntime.mark(function i(a, r) {
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
o.ShowBottomWin(e, t, n, a);

case 1:
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
OnSpinEnd: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, o, i, a, r, c, s, l;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
if (!(n = e._gameInfo.bonusGame)) {
t.next = 9;
break;
}
cc.vv.gameData.setBonusGame(n);
t.next = 6;
return cc.vv.gameData.getManage().TrunTableTriggerBarVal(n);

case 6:
if (1 !== n.state) {
t.next = 9;
break;
}
t.next = 9;
return cc.vv.gameData.getPopWinManage().showTurnTableGame(n);

case 9:
if (!e._gameInfo.balloonGame) {
t.next = 20;
break;
}
o = cc.find("reels/bousn_jl", e.node);
e._isInFree && (o = cc.find("reels/bousn_jl", e._freeSlotsNode));
o.active = !1;
Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.anticipation3);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
cc.vv.gameData.getManage().showHenDuoQQ();
t.next = 18;
return e.showQiQiuAnimation(e._gameInfo.balloonGame.triggerIdxs);

case 18:
t.next = 20;
return cc.vv.gameData.getManage().showQiQiuGou(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

case 20:
if (!e._gameInfo.jackpot) {
t.next = 23;
break;
}
t.next = 23;
return cc.vv.gameData.getManage().setJackpot(e._gameInfo.jackpot);

case 23:
e.ShowWinTrace();
i = cc.vv.gameData.GetGameWin() + e._jackInTheBoxWinCoin + e._balloonGameWinCoin + e._wheelWinCoin;
a = i;
if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) a = cc.vv.gameData.GetGameTotalFreeWin(); else if (e._gameInfo.freeGameBonus && !e._gameInfo.freeGameBonus.isEnd) {
i = e._gameInfo.freeGameBonus.winCoin;
a = i;
}
cc.vv.gameData.AddCoin(e._jackInTheBoxWinCoin + e._balloonGameWinCoin + e._wheelWinCoin);
e._jackInTheBoxWinCoin = 0;
e._balloonGameWinCoin = 0;
e._wheelWinCoin = 0;
t.next = 33;
return e.ShowWinCoin(i, a, !0);

case 33:
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
t.next = 45;
break;
}
if (!e._gameInfo.freeResult) {
t.next = 43;
break;
}
if (!e._gameInfo.freeResult.freeInfo || !e._gameInfo.freeResult.freeInfo.scatterIdx) {
t.next = 43;
break;
}
for (r = 0; r < e._gameInfo.freeResult.freeInfo.scatterIdx.length; r++) {
c = e._gameInfo.freeResult.freeInfo.scatterIdx[r];
e.GetSymbolByIdx(c).playWinAnimation();
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
if (!(e._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
t.next = 43;
break;
}
t.next = 41;
return e.awaitTime(2);

case 41:
t.next = 43;
return e.CheckFreeEnterFreeGame();

case 43:
t.next = 54;
break;

case 45:
if (!e._gameInfo.freeResult) {
t.next = 54;
break;
}
if (!e._gameInfo.freeResult.freeInfo || !e._gameInfo.freeResult.freeInfo.scatterIdx) {
t.next = 54;
break;
}
for (s = 0; s < e._gameInfo.freeResult.freeInfo.scatterIdx.length; s++) {
l = e._gameInfo.freeResult.freeInfo.scatterIdx[s];
e.GetSymbolByIdx(l).playWinAnimation();
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
if (!(e._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
t.next = 54;
break;
}
t.next = 52;
return e.awaitTime(2);

case 52:
t.next = 54;
return e.CheckEnterFreeGame();

case 54:
if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
t.next = 57;
break;
}
t.next = 57;
return e.CheckExitFreeGame();

case 57:
e.CanDoNextRound();

case 58:
case "end":
return t.stop();
}
}, t);
}))();
},
ReconnectShow: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, o, i, a, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (n = cc.vv.gameData.GetFreeTime()) {
e.ShowGameview(!0);
o = cc.vv.gameData.GetTotalFreeWin();
e._bottomScript.SetWin(o);
} else e.ShowGameview(!1);
e._bottomScript.ShowBtnsByState("moveing_1");
(i = cc.vv.gameData.getBalloonGame()) && e.recaverySlotsData(i.cards, i.backgrouds, n);
if (!(a = cc.vv.gameData.getBonusGame())) {
t.next = 15;
break;
}
if (1 !== a.state) {
t.next = 12;
break;
}
t.next = 10;
return cc.vv.gameData.getPopWinManage().showTurnTableGame(a);

case 10:
t.next = 15;
break;

case 12:
if (2 !== a.state) {
t.next = 15;
break;
}
t.next = 15;
return cc.vv.gameData.getJackInTheBox().showWin(a);

case 15:
if (!i) {
t.next = 18;
break;
}
t.next = 18;
return cc.vv.gameData.getManage().recaveryQiQiuAnimation(i.triggerIdxs);

case 18:
if (!((r = e._jackInTheBoxWinCoin + e._balloonGameWinCoin + e._wheelWinCoin) > 0)) {
t.next = 28;
break;
}
c = r;
n && (c += cc.vv.gameData.GetTotalFreeWin());
e._jackInTheBoxWinCoin = 0;
e._balloonGameWinCoin = 0;
e._wheelWinCoin = 0;
cc.vv.gameData.AddCoin(r);
t.next = 28;
return e.ShowWinCoin(r, c, !0);

case 28:
e._bottomScript.ShowBtnsByState("idle");
n && e.CanDoNextRound();

case 30:
case "end":
return t.stop();
}
}, t);
}))();
},
CheckExitFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, o) {
var i, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = cc.vv.gameData.GetGameTotalFreeWin();
a = i;
t.next = 4;
return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(i);

case 4:
t.next = 6;
return cc.vv.gameData.getManage().setFreeGame(!1);

case 6:
t.next = 8;
return e.ShowWinCoin(i, a, !0);

case 8:
n();

case 9:
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
CheckFreeEnterFreeGame: function() {
return c(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function() {
var e = c(regeneratorRuntime.mark(function e(t, n) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
e.next = 2;
return cc.vv.gameData.getPopWinManage().showFreeWinFree();

case 2:
t();

case 3:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}()));

case 1:
case "end":
return e.stop();
}
}, e);
}))();
},
CheckEnterFreeGame: function() {
return c(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function() {
var e = c(regeneratorRuntime.mark(function e(t, n) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
e.next = 2;
return cc.vv.gameData.getPopWinManage().showFreeGame();

case 2:
e.next = 4;
return cc.vv.gameData.getManage().setFreeGame(!0);

case 4:
t();

case 5:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}()));

case 1:
case "end":
return e.stop();
}
}, e);
}))();
},
ShowGameview: function(e) {
this._isInFree = e;
cc.vv.gameData.getManage().ShowGameview(e);
if (e) {
var t = cc.vv.gameData.GetTotalFree(), n = cc.vv.gameData.GetFreeTime();
this._bottomScript.ShowFreeModel(!0, t - n, t);
this._freeSlotsNode.active = !0;
cc.find("reels", this.node).active = !1;
this._reelsFrame.getComponent(sp.Skeleton).setAnimation(0, "animation3", !0);
Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
} else {
this._bottomScript.ShowFreeModel(!1);
this._freeSlotsNode.active = !1;
cc.find("reels", this.node).active = !0;
this._reelsFrame.getComponent(sp.Skeleton).setAnimation(0, "animation1", !0);
Global.SlotsSoundMgr.stopBgm();
}
var o = cc.find("Canvas/safe_node/spr_bg_normal"), i = cc.find("Canvas/safe_node/spr_bg_free");
if (i) {
o && (o.active = !e);
i.active = e;
}
},
recaverySlotsData: function(e, t, n) {
this.SetSlotsResult(e);
this.SetBackgroundResult(t);
if (this._isInFree) for (var o = 0; o < this._reelsFree.length; o++) {
this._reelsFree[o].recaveryReel();
} else for (var i = 0; i < this._reels.length; i++) {
this._reels[i].recaveryReel();
}
cc.vv.gameData.getManage().recaveryQiQiuGou(n);
},
StartMove: function() {
Global.SlotsSoundMgr.playNormalBgm();
this._bStopRightnow = null;
this._gameInfo = null;
this._topScript.StartMove();
cc.vv.gameData.ClearOneRoundData();
this._isInFree ? this.MoveReels(this._reelsFree) : this.MoveReels(this._reels);
this._stopTime = this.GetStopTime();
this.hideBonusNode();
},
hideBonusNode: function() {
cc.vv.gameData.getJackpotReelGame().hideGame();
cc.vv.gameData.getStackedWildsGame().hideGame();
cc.vv.gameData.getRandomWildsGame().hideGame();
this._showQiQiuJiLi = !1;
this.clearQiQiuAnimation();
},
showFreeGameSlots: function() {
var e = this;
return new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, o) {
var i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.ShowGameview(!0);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fg_up);
(i = e._reelsFrame.getComponent(sp.Skeleton)).setAnimation(0, "animation2", !1);
i.addAnimation(0, "animation3", !0);
e._freeSlotsNode.active = !0;
e._freeSlotsNode.height = 350;
cc.tween(e._freeSlotsNode).to(.65, {
height: 700
}).start();
cc.vv.gameData.getManage().showTurntableTriggerBar(!0);
t.next = 11;
return e.awaitTime(.7);

case 11:
n();

case 12:
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
hideFreeGameSlots: function() {
var e = this;
return new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, o) {
var i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fg_up);
(i = e._reelsFrame.getComponent(sp.Skeleton)).setAnimation(0, "animation4", !1);
i.addAnimation(0, "animation1", !0);
e._freeSlotsNode.active = !0;
e._freeSlotsNode.height = 700;
cc.tween(e._freeSlotsNode).to(.65, {
height: 350
}).start();
cc.vv.gameData.getManage().showTurntableTriggerBar(!1);
t.next = 10;
return e.awaitTime(.65);

case 10:
e._freeSlotsNode.active = !1;
e.ShowGameview(!1);
e.hideBonusNode();
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
DoCheckReelAnti: function(e) {
var t = this._reels;
this._isInFree && (t = this._reelsFree);
if (!this._bStopRightnow) for (var n = !1, o = !1, i = 0; i < t.length; i++) {
var a = t[i].GetReelIdx();
if (a == e + 1) {
n = t[i].playAntiAnimation();
o = t[i]._showJackpotJl;
t[i].ShowJackpotJlEffect(o);
}
if (a > e && (n || o)) {
var r = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
t[i].AddDelayTime(r);
}
}
if (3 === e && this._showQiQiuJiLi) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.anticipation3);
var c = cc.find("reels/bousn_jl", this.node);
this._isInFree && (c = cc.find("reels/bousn_jl", this._freeSlotsNode));
c.active = !0;
var s = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
t[e + 1].AddDelayTime(s);
}
},
showQiQiuAnimation: function(e) {
var t = this;
return new Promise(function() {
var n = c(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s, l, u, f, m, d, h, g, p, _;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (4 !== e.length) {
n.next = 19;
break;
}
a = e[2];
r = t.GetSymbolByIdx(a);
c = r.node.convertToWorldSpaceAR(cc.v2(0, 0 + t._cfg.symbolSize.height / 2));
s = t._reels[4];
t._isInFree && (s = t._reelsFree[4]);
l = cc.find("mask", s.node);
u = l.convertToNodeSpaceAR(c);
(f = cc.find("qiqiu", l)).active = !0;
(m = f.getComponent(sp.Skeleton)).setAnimation(0, "animation3", !1);
m.addAnimation(0, "animation2", !0);
f.y = u.y;
for (d = 0; d < e.length; d++) {
h = e[d];
(g = t.GetSymbolByIdx(h)).setSymbolShow(!1);
g.setSymbolBgShow(!1);
}
n.next = 17;
return t.awaitTime(2);

case 17:
for (p = 0; p < e.length; p++) {
_ = e[p];
t.GetSymbolByIdx(_).setSymbolShow(!0);
}
o();

case 19:
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
clearQiQiuAnimation: function() {
var e = this._reels[4];
this._isInFree && (e = this._reelsFree[4]);
var t = cc.find("mask", e.node);
cc.find("qiqiu", t).active = !1;
for (var n = 0; n < e._symbols.length; n++) {
var o = e._symbols[n];
o.setSymbolShow(!0);
o.setSymbolBgShow(!0);
}
},
update: function(e) {
if (this._stopTime > 0) {
this._stopTime = this._stopTime - e;
if (this._stopTime <= 0) if (this._gameInfo) {
this._bottomScript.ShowBtnsByState("moveing_2");
var t = this._reels;
this._isInFree && (t = this._reelsFree);
for (var n = 0; n < t.length; n++) {
var o = t[n], i = this.GetReelStopInter(n);
o.StopMove(i);
}
} else this._stopTime = e;
}
},
SetReelStateInfo: function(e) {
if (this._cfg.reelStateInfo) {
var t = this._reels, n = this._col;
if (this._isInFree) {
t = this._reelsFree;
n = this._colFree;
}
for (var i = [], a = 0; a < e.length; a++) {
var r = e[a], c = a % n;
i[c] || (i[c] = []);
i[c].push(r);
}
var s, l = o(this._cfg.reelStateInfo);
try {
var u = function() {
var e = s.value, n = Global.copy(e);
n.isStop = !1;
n.isAnt = !1;
for (var o = n.mini, a = Global.copy(n.counts), r = 0, c = 0; c < i.length; c++) {
var l = t[c], u = i[c];
n.isStop = !1;
n.isAnt = !1;
r >= o - 1 && n.counts[c] > 0 && (n.isAnt = !0);
var f = u.reduce(function(e, t) {
return n.id.includes(t) ? e + 1 : e + 0;
}, 0);
r += f;
a.shift();
var m = (a.length > 0 ? a.reduce(function(e, t) {
return e + t;
}) : 0) + r;
f > 0 && m >= o && (n.isStop = !0);
l.AddReelStateInfo(Global.copy(n));
}
};
for (l.s(); !(s = l.n()).done; ) u();
} catch (e) {
l.e(e);
} finally {
l.f();
}
}
},
GetSymbolByIdx: function(e) {
if (this._isInFree) {
var t = (e - 1) % this._colFree, n = this._rowFree - Math.floor((e - 1) / this._colFree) - 1;
return this._reelsFree[t].GetSymbolByRow(n);
}
var o = (e - 1) % this._col, i = this._row - Math.floor((e - 1) / this._col) - 1;
return this._reels[o].GetSymbolByRow(i);
},
ShowSymbolTopAni: function(e, t) {
var n = this._reels;
this._isInFree && (n = this._reelsFree);
if (this._topAniNode) {
var o = cc.vv.gameData.getGameCfg().scripts.Symbols, i = cc.find(cc.js.formatStr("top_symbol_%s_%s", e, t), this._topAniNode);
if (i) {
i.active = !0;
return i.getComponent(o);
}
var a = n[t].GetSymbolByRow(e);
if (a) {
var r = a.node.convertToWorldSpaceAR(cc.v2(0)), c = cc.instantiate(a.node);
c.parent = this._topAniNode;
c.name = cc.js.formatStr("top_symbol_%s_%s", e, t);
c.position = this._topAniNode.convertToNodeSpaceAR(r);
return c.getComponent(o);
}
}
},
ChangeRowColToIdx: function(e, t, n) {
var o = this._col;
this._isInFree && (o = this._colFree);
return o * (e.length / o - t - 1) + n;
},
findAllJinHeZi: function() {
var e = [];
if (this._isInFree) for (var t = 0; t < this._reelsFree.length; t++) for (var n = this._reelsFree[t], o = 0; o < n._symbols.length - 1; o++) {
var i = n._symbols[o];
5 === i._id && e.push(i);
} else for (var a = 0; a < this._reels.length; a++) for (var r = this._reels[a], c = 0; c < r._symbols.length - 1; c++) {
var s = r._symbols[c];
5 === s._id && e.push(s);
}
return e;
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Clown_jackInTheBox: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3dbacyvgzxCuYyax2EeAOjH", "Clown_jackInTheBox");
function o(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function i(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var r = e.apply(t, n);
function c(e) {
o(r, i, a, c, s, "next", e);
}
function s(e) {
o(r, i, a, c, s, "throw", e);
}
c(void 0);
});
};
}
var a = [ 1, 2, 3, 4, 10, 25 ];
cc.Class({
extends: cc.Component,
properties: {
texiaoRoot: {
default: null,
type: cc.Node
},
jackInTheBox: {
default: null,
type: cc.Node
},
boxRoot: {
default: null,
type: cc.Node
},
spotsFilled: {
default: null,
type: cc.Node
},
multRoot: {
default: null,
type: cc.Node
},
totalWinBg: {
default: null,
type: cc.Node
},
backToGame: {
default: null,
type: cc.Node
},
_texiaoIndexList: [],
_jieDianIndexList: [],
_rowNode: null,
_colNode: null,
_rowQiangNode: null,
_colQiangNode: null,
_boxList: [],
_jackInTheBoxInitY: 0,
_spotsFilledLabel: null,
_gameData: null,
_title: null,
_titleSelectBox: null,
_multNodeList: [],
_winCoin: 0,
_bonusGame: null,
_showPopWinSuccess: null
},
onLoad: function() {
this.Init();
},
start: function() {
this.multRoot.active = !1;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
Init: function() {
this._rowNode = cc.find("row", this.texiaoRoot);
this._colNode = cc.find("col", this.texiaoRoot);
this._rowQiangNode = cc.find("rowQiang", this.texiaoRoot);
this._colQiangNode = cc.find("colQiang", this.texiaoRoot);
for (var e = 1; e <= 21; e++) {
var t = cc.find("xiaochou" + e, this.boxRoot);
this._boxList[this._boxList.length] = t;
}
this._jackInTheBoxInitY = this.jackInTheBox.y;
this._spotsFilledLabel = cc.find("label", this.spotsFilled);
this._title = cc.find("headBg/title", this.jackInTheBox);
this._titleSelectBox = cc.find("headBg/xiaochou", this.jackInTheBox);
for (var n = 1; n <= 6; n++) {
var o = cc.find("mult" + n, this.multRoot);
this._multNodeList[this._multNodeList.length] = o;
}
Global.btnClickEvent(this.backToGame, this.onClickBackToGame, this);
},
initTeXiaoJieDianXinxi: function() {
this._texiaoIndexList = [ {
type: "row",
index: 1,
dir: "down",
position: {
x: 0,
y: 348
}
}, {
type: "row",
index: 2,
dir: "down",
position: {
x: 0,
y: 240
}
}, {
type: "row",
index: 3,
dir: "down",
position: {
x: 0,
y: 130
}
}, {
type: "row",
index: 4,
dir: "down",
position: {
x: 0,
y: 20
}
}, {
type: "row",
index: 5,
dir: "down",
position: {
x: 0,
y: -87
}
}, {
type: "row",
index: 6,
dir: "down",
position: {
x: 0,
y: -197
}
}, {
type: "row",
index: 7,
dir: "down",
position: {
x: 0,
y: -308
}
}, {
type: "col",
index: 1,
dir: "right",
position: {
x: -171,
y: 20
}
}, {
type: "col",
index: 2,
dir: "right",
position: {
x: 0,
y: 20
}
}, {
type: "col",
index: 3,
dir: "right",
position: {
x: 175,
y: 20
}
}, {
type: "row",
index: 7,
dir: "up",
position: {
x: 0,
y: -308
}
}, {
type: "row",
index: 6,
dir: "up",
position: {
x: 0,
y: -197
}
}, {
type: "row",
index: 5,
dir: "up",
position: {
x: 0,
y: -87
}
}, {
type: "row",
index: 4,
dir: "up",
position: {
x: 0,
y: 20
}
}, {
type: "row",
index: 3,
dir: "up",
position: {
x: 0,
y: 130
}
}, {
type: "row",
index: 2,
dir: "up",
position: {
x: 0,
y: 240
}
}, {
type: "row",
index: 1,
dir: "up",
position: {
x: 0,
y: 348
}
}, {
type: "col",
index: 3,
dir: "left",
position: {
x: 175,
y: 20
}
}, {
type: "col",
index: 2,
dir: "left",
position: {
x: 0,
y: 20
}
}, {
type: "col",
index: 1,
dir: "left",
position: {
x: -171,
y: 20
}
} ];
this._jieDianIndexList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];
},
showWinAnimation: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.jackInTheBox.y = e._jackInTheBoxInitY;
cc.tween(e.jackInTheBox).to(.7, {
y: 780 - cc.winSize.height / 2
}).call(function() {
n();
}).start();

case 2:
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
showWin: function(e, t) {
var n = this;
return new Promise(function() {
var o = i(regeneratorRuntime.mark(function o(i, a) {
var r, c, s, l, u, f, m, d, h, g, p, _;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
n._bonusGame = e;
o.next = 3;
return n.awaitTime(0);

case 3:
n.node.active = !0;
n.totalWinBg.active = !1;
n.spotsFilled.active = !0;
n.multRoot.active = !1;
for (r = 0; r < n._boxList.length; r++) {
(c = n._boxList[r]).color = cc.color(255, 255, 255);
c.getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
c.getChildByName("coin").active = !1;
}
s = t || e.collectionIdxs[e.collectionIdxs.length - 1];
l = null;
u = null;
for (f = 0; f < e.collectionIdxs.length; f++) {
m = e.collectionIdxs[f];
d = e.collectionItems[f];
if (h = n._boxList[m - 1]) if (s === m) {
l = h;
u = d;
} else {
h.getComponent(sp.Skeleton).setAnimation(0, "animation" + d.type + "_2", !0);
(g = h.getChildByName("coin")).active = !0;
g.getComponent(cc.Label).string = Global.convertNumToShort(d.coin);
}
}
n._title.active = !0;
n._titleSelectBox.active = !1;
n._spotsFilledLabel.getComponent(cc.Label).string = e.collectionIdxs.length - 1 + "/21";
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.row_col);
o.next = 18;
return n.showWinAnimation();

case 18:
if (!l || !u) {
o.next = 29;
break;
}
p = l.getComponent(sp.Skeleton);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_appear);
p.setAnimation(0, "animation" + u.type + "_1", !1);
p.addAnimation(0, "animation" + u.type + "_2", !0);
o.next = 25;
return n.awaitTime(1);

case 25:
(_ = l.getChildByName("coin")).active = !0;
_.getComponent(cc.Label).string = Global.convertNumToShort(u.coin);
n._spotsFilledLabel.getComponent(cc.Label).string = e.collectionIdxs.length + "/21";

case 29:
o.next = 31;
return n.awaitTime(1);

case 31:
if (!(e.collectionIdxs.length >= 21)) {
o.next = 41;
break;
}
o.next = 34;
return cc.vv.gameData.getPopWinManage().showWanFaXuanZe();

case 34:
o.next = 36;
return n.showChoiceGame();

case 36:
o.next = 38;
return n.hideWin();

case 38:
i();
o.next = 44;
break;

case 41:
o.next = 43;
return n.hideWin();

case 43:
i();

case 44:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}());
},
showPopWin: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, r, c, s, l, u, f;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._bonusGame = e;
t._showPopWinSuccess = o;
cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
n.next = 5;
return t.awaitTime(0);

case 5:
t.node.active = !0;
t.totalWinBg.active = !1;
t.spotsFilled.active = !0;
t.multRoot.active = !1;
for (a = 0; a < t._boxList.length; a++) {
(r = t._boxList[a]).color = cc.color(255, 255, 255);
r.getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
r.getChildByName("coin").active = !1;
}
for (c = 0; c < e.collectionIdxs.length; c++) {
s = e.collectionIdxs[c];
l = e.collectionItems[c];
if (u = t._boxList[s - 1]) {
u.getComponent(sp.Skeleton).setAnimation(0, "animation" + l.type + "_2", !0);
(f = u.getChildByName("coin")).active = !0;
f.getComponent(cc.Label).string = Global.convertNumToShort(l.coin);
}
}
t._title.active = !0;
t._titleSelectBox.active = !1;
t._spotsFilledLabel.getComponent(cc.Label).string = e.collectionIdxs.length + "/21";
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_start);
n.next = 17;
return t.showWinAnimation();

case 17:
t.backToGame.active = !0;
t.backToGame.scale = 0;
cc.tween(t.backToGame).to(.2, {
scale: 1
}).start();
t.backToGame.getComponent(cc.Button).instantiate = !0;

case 21:
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
onClickBackToGame: function() {
var e = this;
this.backToGame.getComponent(cc.Button).instantiate = !1;
cc.tween(this.backToGame).to(.2, {
scale: 0
}).call(i(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.backToGame.active = !0;
t.next = 3;
return e.hideWin();

case 3:
cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
if (e._showPopWinSuccess) {
e._showPopWinSuccess();
e._showPopWinSuccess = null;
}

case 5:
case "end":
return t.stop();
}
}, t);
}))).start();
},
setGameData: function(e) {
this._gameData = e;
this.initTeXiaoJieDianXinxi();
cc.vv.gameData.GetSlotsScript()._jackInTheBoxWinCoin = this._gameData.winCoin;
},
showChoiceGame: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a, r, c, s, l, u;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._title.active = !1;
e._titleSelectBox.active = !0;
i = e._titleSelectBox.getComponent(sp.Skeleton);
a = e._gameData.choiceId;
i.setAnimation(0, "animation" + a + "_5", !1);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jack_appear);
e.totalWinBg.active = !0;
e.spotsFilled.active = !1;
cc.find("coin", e.totalWinBg).getComponent(cc.Label).string = "";
e._winCoin = 0;
t.next = 13;
return e.awaitTime(1);

case 13:
t.next = 15;
return e.showMultAnimation();

case 15:
t.next = 17;
return e.awaitTime(1);

case 17:
r = 0;

case 18:
if (!(r < e._gameData.result.length)) {
t.next = 51;
break;
}
c = e._gameData.result[r];
if (!(r < 5)) {
t.next = 24;
break;
}
t.next = 23;
return cc.vv.gameData.getPopWinManage().showRound(r + 1);

case 23:
e.laftBoxTurnOver(r, 1);

case 24:
e.setRound(r);
if (5 !== r) {
t.next = 41;
break;
}
if (1 != e._jieDianIndexList.length) {
t.next = 39;
break;
}
s = null;
l = e._jieDianIndexList[0];
u = 0;

case 30:
if (!(u < e._bonusGame.collectionIdxs.length)) {
t.next = 38;
break;
}
if (e._bonusGame.collectionIdxs[u] !== l) {
t.next = 35;
break;
}
s = e._bonusGame.collectionItems[u];
return t.abrupt("break", 38);

case 35:
u++;
t.next = 30;
break;

case 38:
if (s.type === e._gameData.choiceId) {
e.laftBoxTurnOver(r, 2);
e.setLastMultDouble();
} else e.laftBoxTurnOver(r, 1);

case 39:
t.next = 41;
return e.awaitTime(1);

case 41:
if (!(r < 5)) {
t.next = 44;
break;
}
t.next = 44;
return e.showkuangAnimation(c.rows, c.cols, r);

case 44:
t.next = 46;
return e.setBoxEnable(c.rows, c.cols, c.coin);

case 46:
t.next = 48;
return e.awaitTime(1);

case 48:
r++;
t.next = 18;
break;

case 51:
t.next = 53;
return cc.vv.gameData.getPopWinManage().showJackInBoxWinCoin(e._gameData.winCoin);

case 53:
cc.vv.gameData.getBonusGame().collectionIdxs = [];
n();

case 55:
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
laftBoxTurnOver: function(e, t) {
var n = this, o = a[e];
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.multi_top);
for (var i = 0; i < this._jieDianIndexList.length; i++) {
var r = this._jieDianIndexList[i], c = this._bonusGame.collectionItems[r - 1];
cc.find("coin", this._boxList[r - 1]).getComponent(cc.Label).string = Global.convertNumToShort(c.coin * o * t);
o > 1 && function() {
var e = cc.find("jinglingshuzi", n._boxList[r - 1]);
e.active = !0;
var t = e.getComponent(sp.Skeleton);
t.setAnimation(0, "animation", !1);
t.setCompleteListener(function() {
e.active = !1;
t.setCompleteListener(null);
});
}();
2 === t && cc.tween(this._boxList[r - 1]).to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
}
},
showMultAnimation: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.multRoot.active = !0;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.multi_appear);
i = regeneratorRuntime.mark(function t(n) {
var o, i, a, r, c, s, l;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
(o = e._multNodeList[n]).active = !0;
i = cc.find("left", o);
(a = cc.find("beicheng_cx", i)).active = !0;
(r = a.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
r.setCompleteListener(function() {
a.active = !1;
r.setCompleteListener(null);
});
c = cc.find("right", o);
(s = cc.find("beicheng_cx", c)).active = !0;
(l = s.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
l.setCompleteListener(function() {
s.active = !1;
l.setCompleteListener(null);
});
t.next = 16;
return e.awaitTime(0);

case 16:
case "end":
return t.stop();
}
}, t);
});
a = 0;

case 4:
if (!(a < e._multNodeList.length)) {
t.next = 9;
break;
}
return t.delegateYield(i(a), "t0", 6);

case 6:
a++;
t.next = 4;
break;

case 9:
n();

case 10:
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
setRound: function(e) {
for (var t = 0; t < this._multNodeList.length; t++) {
var n = this._multNodeList[t];
this.setMultSelect(n, e === t, e);
}
},
setMultSelect: function(e, t, n) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mul_mul);
var o = cc.find("left", e);
cc.find("beicheng_xh", o).active = t;
var i = cc.find("right", e);
cc.find("beicheng_xh", i).active = t;
if (t) {
o.getComponent(cc.Animation).play("loopScaledMap");
i.getComponent(cc.Animation).play("loopScaledMap");
} else {
o.getComponent(cc.Animation).stop("loopScaledMap");
i.getComponent(cc.Animation).stop("loopScaledMap");
}
if (5 === n) {
var a = cc.find("jinglingshuzi", e);
if (a) {
a.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
}
}
},
setLastMultDouble: function() {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coins_fly);
var e = this._multNodeList[this._multNodeList.length - 1], t = cc.find("left", e);
cc.find("text25", t).active = !1;
cc.find("text50", t).active = !0;
var n = cc.find("20_50", t);
n.active = !0;
var o = n.getComponent(sp.Skeleton);
o.setAnimation(0, "animation", !1);
o.setCompleteListener(function() {
n.active = !1;
o.setCompleteListener(null);
});
var i = cc.find("right", e);
cc.find("text25", i).active = !1;
cc.find("text50", i).active = !0;
var a = cc.find("20_50", i);
a.active = !0;
var r = a.getComponent(sp.Skeleton);
r.setAnimation(0, "animation", !1);
r.setCompleteListener(function() {
a.active = !1;
r.setCompleteListener(null);
});
},
showkuangAnimation: function(e, t, n) {
var o = this;
return new Promise(function() {
var a = i(regeneratorRuntime.mark(function i(a, r) {
var c, s, l, u, f, m, d, h, g, p, _, v, b, w, S, y, G, k, x, C, B, T, R, I;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
o.texiaoRoot.active = !0;
c = [];
if (e) for (s = 0; s < e.length; s++) {
l = e[s];
u = o.findRowPosition(l);
f = o._texiaoIndexList[u];
(m = o.getMoveItem(f)).index = u;
c.push(m);
}
if (t) for (d = 0; d < t.length; d++) {
h = t[d];
g = o.findColPosition(h);
p = o._texiaoIndexList[g];
(_ = o.getMoveItem(p)).index = g;
c.push(_);
}
i.next = 6;
return o.awaitTime(1);

case 6:
v = 0;

case 7:
if (!(v < 11)) {
i.next = 15;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.row_col);
for (b in c) if (c.hasOwnProperty(b)) {
(w = c[b]).index++;
w.index >= o._texiaoIndexList.length && (w.index = 0);
w.item.parent = null;
w.qiangRoot.parent = null;
S = o._texiaoIndexList[w.index];
y = o.getMoveItem(S);
w.item = y.item;
w.qiang = y.qiang;
w.qiangRoot = y.qiangRoot;
}
i.next = 12;
return o.awaitTime(1);

case 12:
v++;
i.next = 7;
break;

case 15:
for (G in c) if (c.hasOwnProperty(G)) {
k = c[G];
x = k.qiang.getComponent(sp.Skeleton);
if ("row" === o._texiaoIndexList[k.index].type) {
x.setAnimation(0, "animation2", !1);
x.addAnimation(0, "animation2_1", !0);
} else {
x.setAnimation(0, "animation1", !1);
x.addAnimation(0, "animation1_1", !0);
}
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.selected);
i.next = 19;
return o.awaitTime(1);

case 19:
for (C in c) if (c.hasOwnProperty(C)) {
(B = c[C]).item.parent = null;
B.qiangRoot.parent = null;
}
for (T = o._texiaoIndexList.length - 1; T >= 0; T--) "row" === (R = o._texiaoIndexList[T]).type ? e && -1 != e.indexOf(R.index) && o._texiaoIndexList.splice(T, 1) : t && -1 != t.indexOf(R.index) && o._texiaoIndexList.splice(T, 1);
if (1 === n) for (I = o._texiaoIndexList.length - 1; I >= 0; I--) "col" === o._texiaoIndexList[I].type && o._texiaoIndexList.splice(I, 1);
a();

case 23:
case "end":
return i.stop();
}
}, i);
}));
return function(e, t) {
return a.apply(this, arguments);
};
}());
},
findRowPosition: function(e) {
for (var t = 0, n = 0; n < this._texiaoIndexList.length; n++) {
var o = this._texiaoIndexList[n];
if ("row" === o.type && o.index === e) {
t = n;
break;
}
}
for (var i = t - 11 + this._texiaoIndexList.length; i < 0; ) i += this._texiaoIndexList.length;
return i;
},
findColPosition: function(e) {
for (var t = 0, n = 0; n < this._texiaoIndexList.length; n++) {
var o = this._texiaoIndexList[n];
if ("col" === o.type && o.index === e) {
t = n;
break;
}
}
for (var i = t - 11 + this._texiaoIndexList.length; i < 0; ) i += this._texiaoIndexList.length;
return i;
},
getMoveItem: function(e) {
var t = null, n = null, o = null;
if ("row" === e.type) {
t = cc.instantiate(this._rowNode);
o = cc.instantiate(this._rowQiangNode);
if ("down" === e.dir) {
(n = cc.find("qiangLeft", o)).active = !0;
cc.find("down", t).active = !0;
} else {
(n = cc.find("qiangRight", o)).active = !0;
cc.find("up", t).active = !0;
}
} else {
t = cc.instantiate(this._colNode);
o = cc.instantiate(this._colQiangNode);
if ("right" === e.dir) {
(n = cc.find("qiangDown", o)).active = !0;
cc.find("right", t).active = !0;
} else {
(n = cc.find("qiangUp", o)).active = !0;
cc.find("left", t).active = !0;
}
}
t.parent = this.texiaoRoot;
t.position = e.position;
t.active = !0;
o.parent = this.texiaoRoot;
o.position = e.position;
o.active = !0;
o.zIndex = 2;
return {
item: t,
qiang: n,
qiangRoot: o
};
},
setBoxEnable: function(e, t, n) {
var o = this;
return new Promise(function() {
var a = i(regeneratorRuntime.mark(function i(a, r) {
var c, s, l, u, f, m, d, h;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
c = [];
for (s = o._jieDianIndexList.length - 1; s >= 0; s--) {
l = o._jieDianIndexList[s];
u = (l - 1) % 3 + 1;
f = Math.floor((l - 1) / 3) + 1;
if (e && -1 != e.indexOf(f) || t && -1 != t.indexOf(u)) {
c.push(l);
o._jieDianIndexList.splice(s, 1);
}
}
m = cc.find("coin", o.totalWinBg);
d = function(e) {
var t = c[e];
o._boxList[t - 1].color = cc.color(60, 60, 60);
var n = cc.find("coin", o._boxList[t - 1]), i = cc.instantiate(n);
i.parent = o.totalWinBg;
var a = n.convertToWorldSpaceAR(cc.v2(0, 0)), r = o.totalWinBg.convertToNodeSpaceAR(a);
i.position = r;
cc.tween(i).to(.2, {
position: m.position
}, {
easing: "cubicIn"
}).call(function() {
i.parent = null;
}).start();
n.active = !1;
};
for (h = 0; h < c.length; h++) d(h);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coins_fly);
i.next = 8;
return o.awaitTime(.2);

case 8:
o._winCoin += n;
m.getComponent(cc.Label).string = Global.convertNumToShort(o._winCoin);
a();

case 11:
case "end":
return i.stop();
}
}, i);
}));
return function(e, t) {
return a.apply(this, arguments);
};
}());
},
hideWin: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_down);
cc.tween(e.jackInTheBox).to(.7, {
y: e._jackInTheBoxInitY
}).call(function() {
e.node.active = !1;
n();
}).start();

case 2:
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
Clown_reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fb74bX80aRBtYP2VyR1ykWk", "Clown_reel");
function o(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
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
var o, a, r = !0, c = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
a = e;
},
f: function() {
try {
r || null == o.return || o.return();
} finally {
if (c) throw a;
}
}
};
}
function i(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {
_backResult: [],
_tempBackResult: [],
_backType: null,
_backNum: 0,
_bgholderNode: null,
_symbolsBg: [],
_symbolBgTemplete: null,
_curBgType: 3,
_curBgNum: 0,
_curSymbolId: 0,
_curSymbolNum: 0,
_showJackpotJl: !1
},
onLoad: function() {
this._super();
this._bgholderNode = cc.find("mask/holderBg", this.node);
if (!this._symbolBgTemplete) {
var e = cc.vv.gameData.getGameCfg();
this._symbolBgTemplete = cc.vv.gameData.GetPrefabByName(e.symbolBgPrefab);
}
},
start: function() {},
randomBg: function() {
if (3 === this._curBgType) {
if (4 === this._reelIdx) {
var e = Global.random(1, 100);
this._curBgType = e > 50 ? 3 : Global.random(1, 3);
} else {
var t = Global.random(1, 100);
this._curBgType = t > 80 ? 1 : 3;
}
3 !== this._curBgType && (this._curBgNum = 1);
}
},
createBg: function(e) {
if (3 !== this._curBgType && this._curBgNum <= 4) {
1 === this._curBgType ? e.SetBackground("yellow" + (5 - this._curBgNum)) : 2 === this._curBgType && e.SetBackground("qiqiu" + (5 - this._curBgNum));
this._curBgNum++;
this._curBgNum > 4 && (this._curBgType = 3);
} else e.SetBackground("");
},
randomSymbol: function() {
if (this._curSymbolNum <= 0) {
var e = cc.vv.gameData.getGameCfg(), t = Global.random(1, e.randomSymbols.length);
this._curSymbolId = e.randomSymbols[t - 1];
this._curSymbolNum = 4;
}
},
setSymbol: function(e) {
e.ShowById(this._curSymbolId);
this._curSymbolNum--;
},
LoadSymbols: function() {
var e = cc.vv.gameData.getGameCfg().symbolPrefab;
this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(e));
for (var t = 0; t < this._nCount + 1; t++) this.CreateOneSymbol();
this.ReLayOut();
},
CreateOneSymbol: function() {
var e = cc.vv.gameData.getGameCfg(), t = cc.instantiate(this._symbolTemplete);
t.parent = this._holderNode;
var n = cc.instantiate(this._symbolBgTemplete);
n.parent = this._bgholderNode;
var o = t.addComponent(e.scripts.Symbols), i = this._symbols.length;
o.Init(i, this._topAniNode, n);
o.SetSymbolReelIdx(this._reelIdx);
this._symbols.push(o);
this._symbolsBg.push(n);
this.randomBg();
this.randomSymbol();
this.setSymbol(o);
this.createBg(o);
},
ReLayOut: function() {
for (var e = 0; e < this._symbols.length; e++) {
var t = this._symbols[e];
t.node.position = this.GetSymbolPosByRow(e);
t._bindBg.position = t.node.position;
t.SetSymbolIdx(e);
}
},
recaveryReel: function() {
for (var e = 0; e < this._symbols.length; e++) {
var t = this._symbols[e], n = this._result.shift();
if (n) {
var o = n.sid, i = this._tempBackResult.shift();
if (o) {
t.ShowById(o, null);
t.SetBackground(i);
}
}
}
},
ShowAntiEffect: function(e, t) {
if (0 == e) {
var n = cc.vv.gameData.getGameCfg();
if (n.reelStateInfo) {
var i, a = o(n.reelStateInfo);
try {
for (a.s(); !(i = a.n()).done; ) {
var r = i.value, c = cc.find(r.antiNode, this.node);
if (c && c.active) {
c.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(r.antSound);
}
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
} else {
var s = cc.find(t, this.node);
s ? s.active = e : cc.log("未找到加速节点：node_anti");
}
},
ShowJackpotJlEffect: function(e) {
e ? Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.anticipation2) : Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.anticipation2);
var t = cc.find("jackpot_jl", this.node);
t ? t.active = e : cc.log("未找到加速节点：jackpot_jl");
},
checkArrVal: function(e, t, n) {
for (var o = e[t].type, i = t; i < n; i++) {
if (e[i].type !== o) return !1;
}
return !0;
},
SetBackResult: function(e) {
for (var t = [], n = 0; n < e.length; ) {
var o = e[n].type;
if (1 === o) if (this.checkArrVal(e, n, 4)) {
t[t.length] = "yellow4";
t[t.length] = "yellow3";
t[t.length] = "yellow2";
t[t.length] = "yellow1";
n += 4;
} else if (this.checkArrVal(e, n, 3)) {
if (e[n - 1]) {
t[t.length] = "yellow4";
t[t.length] = "yellow3";
t[t.length] = "yellow2";
} else {
t[t.length] = "yellow3";
t[t.length] = "yellow2";
t[t.length] = "yellow1";
}
n += 3;
} else if (this.checkArrVal(e, n, 2)) {
if (e[n - 1]) {
t[t.length] = "yellow4";
t[t.length] = "yellow3";
} else {
t[t.length] = "yellow2";
t[t.length] = "yellow1";
}
n += 2;
} else {
e[n - 1] ? t[t.length] = "yellow4" : t[t.length] = "yellow1";
n++;
} else if (2 === o) if (this.checkArrVal(e, n, 4)) {
t[t.length] = "qiqiu4";
t[t.length] = "qiqiu3";
t[t.length] = "qiqiu2";
t[t.length] = "qiqiu1";
n += 4;
} else if (this.checkArrVal(e, n, 3)) {
if (e[n - 1]) {
t[t.length] = "qiqiu4";
t[t.length] = "qiqiu3";
t[t.length] = "qiqiu2";
} else {
t[t.length] = "qiqiu3";
t[t.length] = "qiqiu2";
t[t.length] = "qiqiu1";
}
n += 3;
} else if (this.checkArrVal(e, n, 2)) {
if (e[n - 1]) {
t[t.length] = "qiqiu4";
t[t.length] = "qiqiu3";
} else {
t[t.length] = "qiqiu2";
t[t.length] = "qiqiu1";
}
n += 2;
} else {
e[n - 1] ? t[t.length] = "qiqiu4" : t[t.length] = "qiqiu1";
n++;
} else {
t[t.length] = "null";
n++;
}
}
this._backResult = t;
this._tempBackResult = Global.copy(this._backResult);
var i = e[e.length - 1].type;
if (3 === i) this._curBgType = 3; else if (e[e.length - 4] && e[e.length - 4].type === i) this._curBgType = 3; else if (e[e.length - 3] && e[e.length - 3].type === i) {
this._curBgType = i;
this._curBgNum = 3;
} else if (e[e.length - 2] && e[e.length - 2].type === i) {
this._curBgType = i;
this._curBgNum = 2;
} else {
this._curBgType = i;
this._curBgNum = 1;
}
},
UpdatePosition: function(e) {
this._stopTime = this._stopTime - e;
this._curY += e * this._speed;
if (this._curY > this._offset) this.updataSymbol(); else {
this._holderNode.y = this._holderOrigPosY - this._curY;
this._bgholderNode.y = this._holderNode.y;
}
},
updataSymbol: function() {
var e = this._symbols.shift(), t = null, n = null;
if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) {
this.ReadyToStop();
this._result.shift && (t = this._result.shift());
this._tempBackResult.shift && (n = this._tempBackResult.shift());
e.SetBackground(n);
t || (this._bMoving = !1);
}
if (t) e.ShowById(t.sid, t.data); else {
this.randomBg();
this.randomSymbol();
this.setSymbol(e);
this.createBg(e);
}
this._symbols.push(e);
this.ReLayOut();
this._curY = 0;
this._holderNode.y = this._holderOrigPosY;
this._bgholderNode.y = this._holderNode.y;
if (!this._bMoving) {
this.OnReelBounsAction();
this.OnReelBounsBgAction();
}
},
OnReelBounsBgAction: function() {
var e = cc.vv.gameData.getGameCfg(), t = e.bounceInfo ? e.bounceInfo.distance : 30, n = e.bounceInfo ? e.bounceInfo.time : .3;
cc.tween(this._bgholderNode).to(t / this._speed, {
position: cc.v2(this._bgholderNode.x, this._holderOrigPosY - t)
}).to(n, {
position: cc.v2(this._bgholderNode.x, this._holderOrigPosY)
}).start();
},
OnReelBounsActionDeep: function() {
this.ShowAntiEffect(!1);
this.ShowJackpotJlEffect(!1);
cc.vv.gameData.GetSlotsScript().OnReelBounsActionDeep(this._reelIdx);
for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveDeep();
},
OnReelBounsActionEnd: function() {
this.playReelStop();
cc.vv.gameData.GetSlotsScript().OnReelBounsActionEnd(this._reelIdx);
var e, t = !1, n = o(this._reelState);
try {
for (n.s(); !(e = n.n()).done; ) {
e.value.isStop && (t = !0);
}
} catch (e) {
n.e(e);
} finally {
n.f();
}
for (var i = 0; i < this._originResult.length; i++) t || this._symbols[i].StopMoveEnd();
this.OnReelSpinEnd();
},
StartRecycleSymbol: function() {},
StopMoveRightNow: function() {
this._stopRightNow = !0;
if (this._bMoving && this._originResult && this._backResult) {
this._result = Global.copy(this._originResult);
this._tempBackResult = Global.copy(this._backResult);
for (var e = 0; e < this._symbols.length; e++) this.updataSymbol();
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Clown_sound: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "11eb6nd2iBAsqY4tYkteLRo", "Clown_sound");
cc.Class({
extends: e("LMSlots_Sound"),
properties: {
soundPath: {
default: "games/Clown/",
override: !0
},
bonus_stop: {
default: "",
override: !0
},
scatter_ant: {
default: "",
override: !0
},
bonus_ant: {
default: "",
override: !0
},
base_bgm: {
default: "base/base_bgm",
override: !0
},
reel_stop: {
default: "base/reel_stop",
override: !0
},
scatter_stop: {
default: "base/scatter_notify",
override: !0
},
anticipation1: "base/anticipation1",
anticipation2: "base/anticipation2",
anticipation3: "base/anticipation3",
bell: "base/bell",
btn_click: "base/btn_click",
collect_fly: "base/collect_fly",
collect_lock: "base/collect_lock",
collect_unlock: "base/collect_unlock",
jackpot_notify: "base/jackpot_notify",
transition1: "base/transition1",
transition2: "base/transition2",
win_jackpot: "base/win_jackpot",
free_bgm: "free/free_bgm",
free_dialog_start_show: "free/free_dialog_start_show",
free_dialog_collect_show: "free/free_dialog_collect_show",
fg_up: "free/fg_up",
free_dialog_more_show: "free/free_dialog_more_show",
back_ball: "bonus/back_ball",
fly_ball: "bonus/fly_ball",
jp_full: "bonus/jp_full",
pick_end: "bonus/pick_end",
wild_appear: "bonus/wild_appear",
wild_full: "bonus/wild_full",
wild_notify: "bonus/wild_notify",
jp_dialog_start_show: "jackpot/jp_dialog_start_show",
jp_lock: "jackpot/jp_lock",
jp_unlock: "jackpot/jp_unlock",
wheel_dialog_collect_show: "wheel/wheel_dialog_collect_show",
wheel_end: "wheel/wheel_end",
wheel_in: "wheel/wheel_in",
wheel_roll: "wheel/wheel_roll",
wheel_spin: "wheel/wheel_spin",
bonus_dialog_collect_show: "map/bonus_dialog_collect_show",
bonus_dialog_start_show: "map/bonus_dialog_start_show",
bonus_down: "map/bonus_down",
bonus_start: "map/bonus_start",
choose_dialog_start_show: "map/choose_dialog_start_show",
coins_fly: "map/coins_fly",
elf_appear: "map/elf_appear",
elf_choose: "map/elf_choose",
jack_appear: "map/jack_appear",
mul_mul: "map/mul_mul",
multi_appear: "map/multi_appear",
multi_top: "map/multi_top",
round_dialog_start_show: "map/round_dialog_start_show",
row_col: "map/row_col",
selected: "map/selected"
}
});
cc._RF.pop();
}, {
LMSlots_Sound: void 0
} ],
Clown_stackedWildsGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a6ab2m9CN1FB4GEMnTwqVc5", "Clown_stackedWildsGame");
function o(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = i(e))) {
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
var o, a, r = !0, c = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
r = e.done;
return e;
},
e: function(e) {
c = !0;
a = e;
},
f: function() {
try {
r || null == o.return || o.return();
} finally {
if (c) throw a;
}
}
};
}
function i(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
function r(e, t, n, o, i, a, r) {
try {
var c = e[a](r), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, i);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function c(e) {
r(a, o, i, c, s, "next", e);
}
function s(e) {
r(a, o, i, c, s, "throw", e);
}
c(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
wildList: {
default: [],
type: [ cc.Node ]
},
_wildListStartY: 0,
_result: null,
_isFreeGame: !1
},
onLoad: function() {
this._wildListStartY = this.wildList[0].y;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showGame: function(e, t, n) {
var i = this;
return new Promise(function() {
var a = c(regeneratorRuntime.mark(function a(r, c) {
var s, l, u, f, m, d, h, g, p, _, v, b, w, S;
return regeneratorRuntime.wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
i.node.active = !0;
i._result = cc.vv.gameData.GetSlotsScript().changeCardsArr(t);
i._isFreeGame = n;
s = o(i.wildList);
try {
for (s.s(); !(l = s.n()).done; ) l.value.active = !1;
} catch (e) {
s.e(e);
} finally {
s.f();
}
u = cc.vv.gameData.getGameCfg();
f = cc.vv.gameData.GetSlotsScript()._reels;
m = f[0];
d = m._symbols[0];
h = d.node.convertToWorldSpaceAR(cc.v2(0, 0 - u.symbolSize.height / 2));
g = cc.vv.gameData.getStackedWildsGame().node.convertToNodeSpaceAR(h);
p = 0;

case 12:
if (!(p < i.wildList.length)) {
a.next = 36;
break;
}
(_ = i.wildList[p]).active = !0;
_.y = i._wildListStartY;
(v = cc.find("wildluodi", _)).active = !0;
b = v.getComponent(sp.Skeleton);
i._isFreeGame ? b.setAnimation(0, "animation2_1", !0) : b.setAnimation(0, "animation1_1", !0);
w = 2;
S = 0;
if (i.findIsWild(e, p)) {
w = (_.y + Math.abs(g.y)) / (_.y + 1428) * 2;
S = g.y;
} else S = -1428;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_full);
cc.tween(_).to(w, {
position: cc.v3(_.x, S, 0)
}).start();
a.next = 27;
return i.awaitTime(w);

case 27:
if (!(w < 2)) {
a.next = 33;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_notify);
i.showEndAni(p);
i.changeSymbol(i._result[4 - p], 4 - p);
a.next = 33;
return i.awaitTime(2 - w);

case 33:
p++;
a.next = 12;
break;

case 36:
a.next = 38;
return i.awaitTime(1);

case 38:
r();

case 39:
case "end":
return a.stop();
}
}, a);
}));
return function(e, t) {
return a.apply(this, arguments);
};
}());
},
findIsWild: function(e, t) {
for (var n = 5 - t, o = 0; o < e.length; o++) {
if (n === e[o]) return !0;
}
return !1;
},
showEndAni: function(e) {
var t = cc.find("wildluodi", this.wildList[e]), n = t.getComponent(sp.Skeleton);
this._isFreeGame ? n.setAnimation(0, "animation2", !1) : n.setAnimation(0, "animation1", !1);
n.setCompleteListener(function() {
t.active = !1;
n.setCompleteListener(null);
});
},
changeSymbol: function(e, t) {
for (var n = cc.vv.gameData.GetSlotsScript()._reels[t], o = 0; o < n._symbols.length; o++) {
n._symbols[o].ShowById(e[o]);
}
},
hideGame: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
Clown_symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "57753QxeDRMmqT9DSYh/3YG", "Clown_symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {
_bindBg: null,
_bgNode: null,
_bgResultNode: null
},
start: function() {},
Init: function(e, t, n) {
this._topAniNode = t;
this._bindBg = n;
this.SetSymbolIdx(e);
},
SetSymbolIdx: function(e) {
this._symbolIdx = e;
1 === this._id ? this.node.zIndex = 150 - e : this.node.zIndex = 100 - e;
},
ShowById: function(e, t) {
this._id = e;
this._data = t;
this.setAnimationToTop(!1);
this._showNode && (this._showNode.active = !1);
this._bgNode && (this._bgNode.active = !1);
var n = cc.vv.gameData.getGameCfg();
if (n.symbol[e] && n.symbol[e].node) {
this._showNode = cc.find(n.symbol[e].node, this.node);
this._showNode.active = !0;
if (n.symbol[e].bg) {
this._bgNode = cc.find(n.symbol[e].bg, this._bindBg);
this._bgNode.active = !0;
}
} else console.log("未找到配置id:" + e);
},
SetBackground: function(e) {
this._bgResultNode && (this._bgResultNode.active = !1);
if (e && this._bindBg) {
this._bgResultNode = cc.find(e, this._bindBg);
this._bgResultNode && (this._bgResultNode.active = !0);
}
},
setSymbolShow: function(e) {
this.node.active = e;
},
setSymbolBgShow: function(e) {
this._bindBg.active = e;
},
playStopAnimation: function() {
var e = this._id, t = cc.vv.gameData.getGameCfg();
if (t.symbol[e] && t.symbol[e].win_node && t.symbol[e].stop_ani) {
this._state = "stop";
this._showNode && (this._showNode.active = !1);
var n = this.setAnimationToTop(!0);
n.active = !0;
var o = cc.find(t.symbol[e].win_node, n);
o.active = !0;
if ("" != t.symbol[e].stop_ani.name) {
n.zIndex = t.symbol[e].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var i = o.getComponent(sp.Skeleton);
i && i.setAnimation(0, t.symbol[e].stop_ani.name, !1);
}
}
},
StopMoveEnd: function() {
var e = this._id;
if (1 === e) {
var t = cc.vv.gameData.getGameCfg();
if (t.symbol[e] && t.symbol[e].node) {
this._state = "stop";
this._showNode && (this._showNode.active = !1);
var n = this.setAnimationToTop(!0);
n.active = !0;
for (var o = 0; o < n.children.length; o++) {
n.children[o].active = !1;
}
cc.find(t.symbol[e].node, n).active = !0;
n.zIndex = t.symbol[e].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
}
}
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ]
}, {}, [ "Clown_Cfg", "Clown_GameData", "Clown_JackpotReelGame", "Clown_Logic", "Clown_Manage", "Clown_Pop", "Clown_PrizePool", "Clown_RandomWildsGame", "Clown_Slots", "Clown_jackInTheBox", "Clown_reel", "Clown_sound", "Clown_stackedWildsGame", "Clown_symbol" ]);