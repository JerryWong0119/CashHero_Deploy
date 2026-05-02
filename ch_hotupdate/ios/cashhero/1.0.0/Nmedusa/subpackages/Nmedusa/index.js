window.__require = function e(t, n, o) {
function i(s, r) {
if (!n[s]) {
if (!t[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = n[s] = {
exports: {}
};
t[s][0].call(u.exports, function(e) {
return i(t[s][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
return i;
}({
Nmedusa_BonusGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a303fUU8sFCrYuqUpj6WlSz", "Nmedusa_BonusGame");
var o, i;
function a(e) {
if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
if (Array.isArray(e) || (e = s(e))) {
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
var o, i, a = !0, r = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
a = e.done;
return e;
},
e: function(e) {
r = !0;
i = e;
},
f: function() {
try {
a || null == o.return || o.return();
} finally {
if (r) throw i;
}
}
};
}
function s(e, t) {
if (e) {
if ("string" == typeof e) return r(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
}
}
function r(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
function c(e, t, n, o, i, a, s) {
try {
var r = e[a](s), c = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(c) : Promise.resolve(c).then(o, i);
}
function l(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function s(e) {
c(a, o, i, s, r, "next", e);
}
function r(e) {
c(a, o, i, s, r, "throw", e);
}
s(void 0);
});
};
}
function u(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var m = [ 3, 7, 7, 7, 3 ], d = [ 21, 28, 27, 26, 24, 25, 23, 22 ], f = [ 226, 333, 440, 547 ], p = [ 0, 107, 214, 321 ], _ = (u(o = {}, 25, [ 0, 20, 15, 10 ]), 
u(o, 30, [ 0, 15, 12, 9 ]), u(o, 35, [ 0, 10, 8, 6 ]), u(i = {}, 21, "animation1"), 
u(i, 26, "animation2"), u(i, 31, "animation3"), i);
cc.Class({
extends: cc.Component,
properties: {
effectNode: {
default: null,
type: cc.Node
},
effectNodeInside: {
default: null,
type: cc.Node
},
_gameUI: null,
_slotsUI: null,
_topScript: null,
_bottomScript: null,
_col: 0,
_row: 0,
_reels: [],
_cfg: null,
_stopTime: null,
_bonusData: null,
_finishBonusData: [],
_exitCallBack: null,
_bonusWinCoin: 0
},
Init: function() {
this._gameUI = cc.find("game_ui", this.node);
this._gameUI.active = !1;
this._slotsUI = cc.find("game_ui/slots", this.node);
this._topAnimationNode = cc.find("top_ani", this._slotsUI);
this._spinNumLable = cc.find("reels_frame/spine_node/spin/spin", this._slotsUI);
this._lastSpinNumLable = cc.find("reels_frame/spine_node/spin/last_spin", this._slotsUI);
this._respinMultActive = cc.find("reels_frame/respin_ban_1/wins_node", this._slotsUI);
this._respinRespinNode = cc.find("reels_frame/respin_ban_1/wins_node/respin_node", this._slotsUI);
this._respinRespinX = cc.find("reels_frame/respin_ban_1/wins_node/respin_x", this._slotsUI);
this._respinRowActive = cc.find("reels_frame/respin_ban_2/activet_node", this._slotsUI);
this._respinRowNode = cc.find("reels_frame/respin_ban_2/activet_node/respin_node", this._slotsUI);
this._respinRowspnX = cc.find("reels_frame/respin_ban_2/activet_node/respin_r", this._slotsUI);
this._spinUpNode = cc.find("reels_frame/spine_node", this._slotsUI);
this._spinUpBg = cc.find("reels_frame/spine_bg/bg", this._slotsUI);
this._respin_ban_1 = cc.find("reels_frame/respin_ban_1", this._slotsUI);
this._respin_ban_2 = cc.find("reels_frame/respin_ban_2", this._slotsUI);
this._bonusBg = cc.find("Canvas/safe_node/spr_bg_bonus");
this._topScript = cc.vv.gameData.GetTopScript();
this._bottomScript = cc.vv.gameData.GetBottomScript();
this._cfg = cc.vv.gameData.getGameCfg();
this._col = 5;
this._row = 7;
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, this);
this.createReels(this._col);
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
onDestroy: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, !1, this);
},
enterGame: function(e, t, n) {
var o = this;
return l(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
o._exitCallBack = t;
cc.vv.gameData.GetSlotsScript().node.active = !1;
Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(!1);
o._bonusBg.active = !0;
o._gameUI.active = !0;
o.initData(e);
Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.respin_bgm);
n.next = 9;
return o.updateActive();

case 9:
o._bottomScript.ShowBtnsByState("moveing_1");
o.sendSpinMsg();

case 11:
case "end":
return n.stop();
}
}, n);
}))();
},
exitGame: function() {
cc.vv.gameData.isFreeGame() ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm) : Global.SlotsSoundMgr.playNormalBgm(!0);
cc.vv.gameData.GetSlotsScript().node.active = !0;
cc.vv.gameData.isFreeGame() ? Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(!1) : Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(!0);
this._bonusBg.active = !1;
this._gameUI.active = !1;
this._topAnimationNode.removeAllChildren();
cc.vv.gameData.setIsBonusGame(!1);
cc.vv.gameData.GetSlotsScript().RestPrizePool();
},
getBonusWinCoin: function() {
return this._bonusWinCoin;
},
initData: function(e) {
this._bonusWinCoin = 0;
this._finishBonusData = e;
this._spinUpNode.setPosition(cc.v2(0, f[0]));
this._spinUpBg.setPosition(cc.v2(0, p[0]));
this._respinRespinNode.active = !0;
this._respinRespinX.active = !1;
this._respinRowNode.active = !0;
this._respinRowspnX.active = !1;
this._respin_ban_1.active = !0;
this._respin_ban_2.active = !0;
var t = [];
Array.isArray(this._finishBonusData) && (t = this._finishBonusData);
var n, o = a(t);
try {
for (o.s(); !(n = o.n()).done; ) {
var i = n.value, s = [];
Array.isArray(i.reelData) && (s = i.reelData);
var r, c = a(s);
try {
for (c.s(); !(r = c.n()).done; ) {
var l = r.value, u = this._row - Math.floor((l.index - 1) / this._col) - 1, m = (l.index - 1) % this._col, _ = this._reels[m].GetSymbolByRow(u);
if (_) {
_.ShowById(d[l.type], l.coin);
_.playBonusIdleAnimation();
}
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
this._bonusData = i;
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
this.updateSpinsNum(this._bonusData.resSpin);
},
updateActive: function() {
var e = this;
return l(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = l(regeneratorRuntime.mark(function t(n, o) {
var i, s, r, c, l, u, m, d, f, p, _, h, v, g;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = [];
s = [];
r = 0;
c = 0;
l = !1;
if (1 !== e._finishBonusData.length) {
t.next = 29;
break;
}
if ((u = e._finishBonusData[0]).mult.length > 0) {
i = u.mult;
l = !0;
}
if (u.row.length > 0) {
s = u.row;
l = !0;
}
r = u.addMult;
c = u.addRow;
m = i.length - 1;

case 12:
if (!(m >= 0)) {
t.next = 19;
break;
}
d = i[m];
t.next = 16;
return e.updateMult(r - m, [ d ]);

case 16:
m--;
t.next = 12;
break;

case 19:
f = s.length - 1;

case 20:
if (!(f >= 0)) {
t.next = 27;
break;
}
p = s[f];
t.next = 24;
return e.updateRows(c - f, [ p ]);

case 24:
f--;
t.next = 20;
break;

case 27:
t.next = 35;
break;

case 29:
_ = [];
Array.isArray(e._finishBonusData) && (_ = e._finishBonusData);
h = a(_);
try {
for (h.s(); !(v = h.n()).done; ) {
if ((g = v.value).mult.length > 0) {
i = g.mult;
l = !0;
}
if (g.row.length > 0) {
s = g.row;
l = !0;
}
r = g.addMult;
c = g.addRow;
}
} catch (e) {
h.e(e);
} finally {
h.f();
}
e.initMult(r);
e.initRows(c);

case 35:
if (!l) {
t.next = 38;
break;
}
t.next = 38;
return e.awaitTime(2);

case 38:
n();

case 39:
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
createReels: function(e) {
for (var t = 0; t < e; t++) {
var n = cc.find("reels/reel" + (t + 1), this._slotsUI).addComponent("Nmedusa_BonusReel");
n.Init(t, 1, m[t], this._topAnimationNode);
this._reels.push(n);
}
},
updateSpinsNum: function(e) {
if (e > 0) {
this._lastSpinNumLable.active = !1;
this._spinNumLable.active = !0;
var t = cc.vv.gameData.GetAtlasByName("base");
cc.find("num", this._spinNumLable).getComponent(cc.Sprite).spriteFrame = t.getSpriteFrame("theme191_r_" + e);
if (3 == e) {
var n = cc.find("cssx", this._spinUpNode);
n.active = !0;
var o = n.getComponent(sp.Skeleton);
o.setAnimation(0, "animation", !1);
o.setCompleteListener(function() {
n.active = !1;
});
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.add_spin);
}
} else if (0 == e) {
this._lastSpinNumLable.active = !0;
this._spinNumLable.active = !1;
} else {
this._lastSpinNumLable.active = !1;
this._spinNumLable.active = !1;
}
},
updateMult: function(e, t) {
var n = this;
return l(regeneratorRuntime.mark(function o() {
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
return o.abrupt("return", new Promise(function() {
var o = l(regeneratorRuntime.mark(function o(i, s) {
var r, c, l, u, m;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
r = cc.vv.gameData.GetAtlasByName("base");
c = [];
Array.isArray(t) && (c = t);
l = a(c);
try {
m = function() {
var e = u.value, t = cc.find("lizi_mult_spine_" + e, n.effectNodeInside);
t.active = !0;
var o = t.getComponent(sp.Skeleton);
o.setAnimation(0, _[e], !1);
o.setCompleteListener(function() {
t.active = !1;
});
};
for (l.s(); !(u = l.n()).done; ) m();
} catch (e) {
l.e(e);
} finally {
l.f();
}
if (!(t.length > 0)) {
o.next = 13;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_mul);
o.next = 9;
return n.awaitTime(1);

case 9:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.number);
n._respinMultActive.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
n._respinRespinNode.active = !1;
n._respinRespinX.active = !0;
n._respinRespinX.getComponent(cc.Sprite).spriteFrame = r.getSpriteFrame("theme191_respin_" + e + "x");
}), cc.scaleTo(.3, 1)));
o.next = 13;
return n.awaitTime(.6);

case 13:
i();

case 14:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}()));

case 1:
case "end":
return o.stop();
}
}, o);
}))();
},
initMult: function(e) {
if (!(e <= 0)) {
var t = cc.vv.gameData.GetAtlasByName("base");
this._respinRespinNode.active = !1;
this._respinRespinX.active = !0;
this._respinRespinX.getComponent(cc.Sprite).spriteFrame = t.getSpriteFrame("theme191_respin_" + e + "x");
}
},
updateRows: function(e, t) {
var n = this;
return new Promise(function() {
var o = l(regeneratorRuntime.mark(function o(i, a) {
var s, r, c, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
s = cc.vv.gameData.GetAtlasByName("base");
r = t[0];
o.next = 4;
return new Promise(function(t, o) {
var i = cc.find("lizi_row_spine_" + r + "_" + e, n.effectNodeInside);
i.active = !0;
var a = i.getComponent(sp.Skeleton);
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_row);
a.setAnimation(0, "animation1", !1);
a.setCompleteListener(function() {
i.active = !1;
a.setCompleteListener(null);
t();
});
});

case 4:
if (!(t.length > 0)) {
o.next = 19;
break;
}
(c = cc.find("reels_frame/spine_node/active", n._slotsUI)).active = !0;
(l = c.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
l.setCompleteListener(function() {
c.active = !1;
});
o.next = 12;
return n.awaitTime(.5);

case 12:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.add_row);
n._spinUpNode.runAction(cc.moveTo(.5, cc.v2(0, f[e])));
n._spinUpBg.runAction(cc.moveTo(.5, cc.v2(0, p[e])));
o.next = 17;
return n.awaitTime(.8);

case 17:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.number);
n._respinRowActive.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
n._respinRowNode.active = !1;
n._respinRowspnX.active = !0;
n._respinRowspnX.getComponent(cc.Sprite).spriteFrame = s.getSpriteFrame("theme191_respin_r" + e);
}), cc.scaleTo(.3, 1)));

case 19:
i();

case 20:
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
initRows: function(e) {
if (!(e <= 0)) {
var t = cc.vv.gameData.GetAtlasByName("base");
this._respinRowNode.active = !1;
this._respinRowspnX.active = !0;
this._respinRowspnX.getComponent(cc.Sprite).spriteFrame = t.getSpriteFrame("theme191_respin_r" + e);
this._spinUpNode.y = f[e];
this._spinUpBg.y = p[e];
}
},
showEndAnimation: function() {
var e = this;
return l(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = l(regeneratorRuntime.mark(function t(n, o) {
var i, s, r, c, l, u, m, f, p, _, h, v, g, b;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = e._finishBonusData[e._finishBonusData.length - 1];
e._respin_ban_1.active = !1;
e._respin_ban_2.active = !1;
e.updateSpinsNum(-1);
if (!(i.addMult > 1)) {
t.next = 20;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bigmul);
(s = cc.find("mult_and_spine", e.effectNodeInside)).active = !0;
(r = s.getComponent(sp.Skeleton)).setAnimation(0, "animation" + i.addMult, !1);
r.setCompleteListener(function() {
s.active = !1;
});
t.next = 13;
return e.awaitTime(3);

case 13:
c = [];
Array.isArray(e._finishBonusData) && (c = e._finishBonusData);
l = a(c);
try {
for (l.s(); !(u = l.n()).done; ) {
m = u.value;
f = [];
Array.isArray(m.reelData) && (f = m.reelData);
p = a(f);
try {
for (p.s(); !(_ = p.n()).done; ) {
h = _.value;
v = e._row - Math.floor((h.index - 1) / e._col) - 1;
g = (h.index - 1) % e._col;
(b = e.getSymbolTopAni(v, g)) && (g > 0 && g < 4 ? function() {
h.coin = h.coin * i.addMult;
var t = cc.find(cc.js.formatStr("fb_%s_%s", v, g), e.effectNodeInside);
if (t) {
t.active = !0;
var n = t.getComponent(sp.Skeleton);
n.setAnimation(0, "animation", !1);
n.setCompleteListener(function() {
n.setCompleteListener(null);
t.active = !1;
});
}
b.SetCoin(h.coin);
b.setMult(i.addMult);
}() : b.ShowById(d[h.type], h.coin));
}
} catch (e) {
p.e(e);
} finally {
p.f();
}
}
} catch (e) {
l.e(e);
} finally {
l.f();
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mul_symbol);
t.next = 20;
return e.awaitTime(1);

case 20:
n();

case 21:
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
settlement: function() {
var e = this;
return l(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = l(regeneratorRuntime.mark(function t(n, o) {
var i, s, r, c, l, u, m, f, p, _, h, v, g, b, S, y, w, C, B;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
i = [];
s = [];
Array.isArray(e._finishBonusData) && (s = e._finishBonusData);
r = a(s);
try {
for (r.s(); !(c = r.n()).done; ) {
l = c.value;
u = [];
Array.isArray(l.reelData) && (u = l.reelData);
m = a(u);
try {
for (m.s(); !(f = m.n()).done; ) {
p = f.value;
(_ = (p.index - 1) % e._col) > 0 && _ < 4 && i.push(p);
}
} catch (e) {
m.e(e);
} finally {
m.f();
}
}
} catch (e) {
r.e(e);
} finally {
r.f();
}
i.sort(function(t, n) {
var o = e._row - Math.floor((t.index - 1) / e._col) - 1, i = (t.index - 1) % e._col, a = e._row - Math.floor((n.index - 1) / e._col) - 1, s = (n.index - 1) % e._col;
return i == s ? a - o : i - s;
});
h = e._finishBonusData[e._finishBonusData.length - 1];
v = [];
Array.isArray(i) && (v = i);
g = a(v);
t.prev = 10;
g.s();

case 12:
if ((b = g.n()).done) {
t.next = 33;
break;
}
S = b.value;
y = e._row - Math.floor((S.index - 1) / e._col) - 1;
w = (S.index - 1) % e._col;
if (C = e.getSymbolTopAni(y, w)) {
C.ShowById(d[S.type], S.coin);
C.setMult(h.addMult);
C.setBonusMaskVisible(!0);
}
e.playBaoAnimation(y, w);
if (!(S.type >= 1 && S.type <= 5)) {
t.next = 24;
break;
}
t.next = 22;
return cc.vv.gameData.getPopControl().showJackpotWinCoin(S.type, h.addMult, S.coin);

case 22:
t.next = 26;
break;

case 24:
t.next = 26;
return e.playCollectAnimation(y, w);

case 26:
B = e._bottomScript.getCurrentWin();
e._bottomScript.ShowWin(B + S.coin, .8, null, null);
e.playBoomAnimation();
t.next = 31;
return e.awaitTime(1.8);

case 31:
t.next = 12;
break;

case 33:
t.next = 38;
break;

case 35:
t.prev = 35;
t.t0 = t.catch(10);
g.e(t.t0);

case 38:
t.prev = 38;
g.f();
return t.finish(38);

case 41:
n();

case 42:
case "end":
return t.stop();
}
}, t, null, [ [ 10, 35, 38, 41 ] ]);
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
playCollectAnimation: function(e, t) {
var n = this;
return new Promise(function() {
var o = l(regeneratorRuntime.mark(function o(i, a) {
var s, r, c, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
if (s = cc.find(cc.js.formatStr("sj_%s_%s", e, t), n.effectNode)) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect);
s.active = !0;
r = n.effectNode.convertToNodeSpaceAR(cc.vv.gameData.GetBottomScript().getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
c = r.x;
cc.tween(s).by(.5, {
x: c
}).start();
(l = s.getComponent(sp.Skeleton)).setCompleteListener(function() {
l.setCompleteListener(null);
s.x -= c;
s.active = !1;
i();
});
} else i();

case 2:
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
playBoomAnimation: function() {
var e = cc.find("boom", this.effectNode);
if (e) {
e.active = !0;
var t = this.effectNode.convertToNodeSpaceAR(cc.vv.gameData.GetBottomScript().getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
e.position = t;
var n = e.getComponent(sp.Skeleton);
n.setCompleteListener(function() {
n.setCompleteListener(null);
e.active = !1;
});
}
},
playBaoAnimation: function(e, t) {
var n = cc.find("bonus_bao", this.effectNodeInside);
if (n) {
n.active = !0;
var o = this._reels[t].GetSymbolByRow(e);
if (o) {
var i = o.node.convertToWorldSpaceAR(cc.v2(0));
n.position = this.effectNodeInside.convertToNodeSpaceAR(i);
}
var a = n.getComponent(sp.Skeleton);
a.setCompleteListener(function() {
a.setCompleteListener(null);
n.active = !1;
});
}
},
StartMove: function() {
this._bonusData = null;
this.MoveReels(this._reels);
this._stopTime = this._cfg.auto_stop_time;
},
sendSpinMsg: function() {
var e = {
c: MsgId.SLOT_SUBGAME_DATA
};
e.uid = Global.playerData.uid;
e.gameid = cc.vv.gameData._gameId;
e.data = {};
e.data.rtype = 1;
cc.vv.NetManager.send(e);
this.updateSpinsNum(this._bonusData.resSpin - 1);
this.StartMove();
},
onRecvGameAction: function(e) {
var t = this;
return l(regeneratorRuntime.mark(function n() {
var o;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (200 == e.code && 1 == e.data.rtype) {
t._bonusWinCoin = e.data.winCoin;
t._bonusData = e.data.bonusData;
t._finishBonusData.push(t._bonusData);
t._bottomScript.ShowBtnsByState("moveing_2");
o = t.creatReelData(t._bonusData.reelData);
t.SetSlotsResult(o);
cc.vv.gameData.isFreeGame() || cc.vv.gameData.AddCoin(t._bonusWinCoin);
}

case 1:
case "end":
return n.stop();
}
}, n);
}))();
},
MoveReels: function(e) {
this.moveReelLastIdx = -1;
for (var t = 0; t < e.length; t++) {
var n = e[t];
n.StartMove();
var o = n.GetReelIdx();
o > this.moveReelLastIdx && (this.moveReelLastIdx = o);
}
},
StopMove: function() {
this._stopTime = -1;
this._bottomScript.ShowBtnsByState("moveing_1");
for (var e = 0; e < this._reels.length; e++) {
this._reels[e].stopRightNow();
}
},
creatReelData: function(e) {
for (var t = [], n = 0; n < 35; n++) {
var o = {
sid: 0,
coin: 0
};
t.push(o);
}
var i = [];
Array.isArray(e) && (i = e);
var s, r = a(i);
try {
for (r.s(); !(s = r.n()).done; ) {
var c = s.value;
t[c.index - 1].sid = d[c.type];
t[c.index - 1].coin = c.coin;
}
} catch (e) {
r.e(e);
} finally {
r.f();
}
return t;
},
SetSlotsResult: function(e) {
e.length, this._col;
for (var t = [], n = 0; n < e.length; n++) {
var o = n % this._col, i = {};
i.sid = e[n].sid;
i.coin = e[n].coin;
t[o] || (t[o] = []);
t[o].unshift(i);
}
for (var a = 0; a < this._reels.length; a++) {
var s = this._reels[a], r = t[a];
s.SetResult(r);
}
},
OnSpinEnd: function() {
var e = this;
return l(regeneratorRuntime.mark(function t() {
var n, o, i, a, s, r;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
n = [];
o = [];
e._bonusData.mult.length > 0 && (n = e._bonusData.mult);
e._bonusData.row.length > 0 && (o = e._bonusData.row);
e.updateSpinsNum(e._bonusData.resSpin);
i = n.length - 1;

case 7:
if (!(i >= 0)) {
t.next = 14;
break;
}
a = n[i];
t.next = 11;
return e.updateMult(e._bonusData.addMult - i, [ a ]);

case 11:
i--;
t.next = 7;
break;

case 14:
s = o.length - 1;

case 15:
if (!(s >= 0)) {
t.next = 22;
break;
}
r = o[s];
t.next = 19;
return e.updateRows(e._bonusData.addRow - s, [ r ]);

case 19:
s--;
t.next = 15;
break;

case 22:
if (!e._bonusData.isEnd) {
t.next = 36;
break;
}
t.next = 25;
return e.showEndAnimation();

case 25:
t.next = 27;
return e.settlement();

case 27:
cc.vv.gameData.getPopControl().playSnakeAnimation();
t.next = 30;
return e.awaitTime(1);

case 30:
e.exitGame();
t.next = 33;
return e.awaitTime(2);

case 33:
e._exitCallBack && e._exitCallBack();
t.next = 37;
break;

case 36:
e.scheduleOnce(function() {
e.sendSpinMsg();
}, 1);

case 37:
case "end":
return t.stop();
}
}, t);
}))();
},
getSymbolTopAni: function(e, t) {
var n = cc.vv.gameData.getGameCfg().scripts.Symbols, o = cc.find(cc.js.formatStr("symbol_ani_%s_%s", e, t), this._topAnimationNode);
if (o) {
o.active = !0;
return o.getComponent(n);
}
return null;
},
GetReelStopInter: function(e) {
return e * (this._cfg.reelStopInter || .6);
},
GetLastStopReelIdx: function() {
return this.moveReelLastIdx;
},
update: function(e) {
if (this._stopTime > 0) {
this._stopTime = this._stopTime - e;
if (this._stopTime <= 0) for (var t = 0; t < this._reels.length; t++) {
var n = this._reels[t], o = this.GetReelStopInter(t);
n.StopMove(o);
}
}
}
});
cc._RF.pop();
}, {} ],
Nmedusa_BonusReel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b5841dGUgBIV7eppmCODaav", "Nmedusa_BonusReel");
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
var o, a, s = !0, r = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
s = e.done;
return e;
},
e: function(e) {
r = !0;
a = e;
},
f: function() {
try {
s || null == o.return || o.return();
} finally {
if (r) throw a;
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
extends: cc.Component,
properties: {
_reelIdx: null,
_holderCount: 0,
_nCount: 0,
_symbols: [],
_symbolTemplete: null,
_holderData: [],
_bMoving: !1,
_bStoping: !1,
_holderOrigPosY: [],
_curY: 0,
_stopTime: 0,
_result: null,
totalAddHeight: 0,
deltaHeight: 0,
curAddHeight: 0,
_fillCount: 0,
_cloneResult: [],
_topAniNode: null
},
Init: function(e, t, n, o) {
this._reelIdx = e;
this._holderCount = n;
this._nCount = t;
this._symbols = [];
this._topAniNode = o;
for (var i = 0; i < this._holderCount; i++) {
var a = {}, s = cc.find("mask_" + (i + 1), this.node);
a.node = cc.find("holder", s);
a.OrigPosY = a.node.position.y;
a.symbols = [];
this._holderData.push(a);
}
this.LoadSymbols();
},
GetReelIdx: function() {
return this._reelIdx;
},
LoadSymbols: function() {
var e = cc.vv.gameData.getGameCfg().symbolPrefab;
this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(e));
for (var t = 0; t < this._holderData.length; t++) {
for (var n = this._holderData[t], o = 0; o < 2; o++) {
var i = cc.vv.gameData.getGameCfg(), a = cc.instantiate(this._symbolTemplete);
a.parent = n.node;
var s = a.addComponent(i.scripts.Symbols), r = o + 1;
s.Init(r, this._topAniNode);
s.setBonusIndex(t);
s.SetSymbolReelIdx(this._reelIdx);
s.ShowRandomBonusSymbol(this._reelIdx, !0);
n.symbols.push(s);
}
this.ReLayOut(n.symbols);
}
},
ReLayOut: function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
n.node.position = this.GetSymbolPosByRow(t);
n.SetSymbolIdx(t);
}
},
GetSymbolByRow: function(e) {
return this._holderData[e].symbols[0];
},
GetSymbolPosByRow: function(e) {
var t = cc.vv.gameData.getGameCfg();
return cc.v2(0, (e + .5) * t.symbolSize.height);
},
StartMove: function() {
this._result = null;
var e = cc.vv.gameData.getGameCfg();
this._curY = 0;
this._bMoving = !0;
this._bStoping = !1;
this._fillCount = 0;
var t, n = o(this._holderData);
try {
for (n.s(); !(t = n.n()).done; ) {
var i, a = o(t.value.symbols);
try {
for (a.s(); !(i = a.n()).done; ) {
i.value.bonusStartMove();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
} catch (e) {
n.e(e);
} finally {
n.f();
}
this._speed = e.speed;
this._offset = e.symbolSize.height;
},
StopMove: function(e) {
if (!this._bStoping && this._bMoving) {
this._bStoping = !0;
this._stopTime = e;
}
},
stopRightNow: function() {
this._bStoping = !0;
this._stopTime = 0;
},
OnReelSpinEnd: function() {
var e = cc.vv.gameData.getBonusControl(), t = e.GetLastStopReelIdx();
this._reelIdx == t && e.OnSpinEnd();
},
SetResult: function(e) {
this._result = e;
this._cloneResult = Global.copy(this._result);
},
UpdatePosition: function(e) {
this._stopTime = this._stopTime - e;
if (this._stopTime <= 0 && this._bStoping && this._result) {
var t = cc.vv.gameData.getGameCfg();
this._speed = Math.max(t.speed / 2, this._speed - t.speed * e);
}
this._curY += e * this._speed;
if (this._curY > this._offset) {
this._curY = 0;
var n, i = o(this._holderData);
try {
for (i.s(); !(n = i.n()).done; ) {
var a = n.value;
a.node.y = a.OrigPosY;
var s = 0, r = null;
if (this._stopTime <= 0 && this._bStoping && this._result) if (this._fillCount < this._holderCount) {
var c = this._result.shift();
s = c.sid;
r = c.coin;
this._fillCount++;
} else this._bMoving = !1;
var l = a.symbols.shift();
s > 0 ? l.ShowById(s, r) : l.ShowRandomBonusSymbol(this._reelIdx, this._bStoping);
a.symbols.push(l);
this.ReLayOut(a.symbols);
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
} else {
var u, m = o(this._holderData);
try {
for (m.s(); !(u = m.n()).done; ) {
var d = u.value;
d.node.y = d.OrigPosY - this._curY;
}
} catch (e) {
m.e(e);
} finally {
m.f();
}
}
this._bMoving || this.OnReelBounsAction();
},
OnReelBounsActionDeep: function() {
var e, t = cc.vv.gameData.getGameCfg(), n = Global.SlotsSoundMgr.reel_stop, i = o(this._cloneResult);
try {
for (i.s(); !(e = i.n()).done; ) {
var a = e.value.sid;
t.symbol[a] && t.symbol[a].playBonusAudio && (n = Global.SlotsSoundMgr.bonus_stop);
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
Global.SlotsSoundMgr.playEffect(n);
},
OnReelBounsActionEnd: function() {
this.OnReelSpinEnd();
for (var e = 0; e < this._holderData.length; e++) {
this._holderData[e].symbols[0].BonusStopMove();
}
},
OnReelBounsAction: function() {
var e, t = cc.vv.gameData.getGameCfg(), n = t.bounceInfo ? t.bounceInfo.distance : 30, i = t.bounceInfo ? t.bounceInfo.time : .3, a = o(this._holderData);
try {
for (a.s(); !(e = a.n()).done; ) {
var s = e.value;
cc.tween(s.node).to(n / this._speed, {
position: cc.v2(s.node.x, s.OrigPosY - n)
}).to(i, {
position: cc.v2(s.node.x, s.OrigPosY)
}).start();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
cc.tween(this.node).delay(n / this._speed).call(this.OnReelBounsActionDeep.bind(this)).delay(i).call(this.OnReelBounsActionEnd.bind(this)).start();
},
update: function(e) {
this._bMoving && this.UpdatePosition(e);
}
});
cc._RF.pop();
}, {} ],
Nmedusa_Bottom: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "26522Hbc/xDWbyG4ewwI0la", "Nmedusa_Bottom");
cc.Class({
extends: e("LMSlots_Bottom_Base"),
properties: {},
OnClickStop: function() {
if (cc.vv.gameData.isBonusGame()) {
cc.vv.gameData.getBonusControl().StopMove();
} else {
cc.vv.gameData.GetSlotsScript().StopMove();
}
},
OnClickAddBet: function() {
this._super();
Global.NmedusaGameControl.collectBonusControl.updataCollectState();
},
OnClickMinusBet: function() {
this._super();
Global.NmedusaGameControl.collectBonusControl.updataCollectState();
},
OnClickMaxBet: function() {
this._super();
Global.NmedusaGameControl.collectBonusControl.updataCollectState();
},
showTotalBet: function(e) {
cc.find("totalBetBg", this.node).active = e;
}
});
cc._RF.pop();
}, {
LMSlots_Bottom_Base: void 0
} ],
Nmedusa_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f4491Ys1g5KMq+0VEwvnFd5", "Nmedusa_Cfg");
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
win_ani: {
name: "animation",
zIndex: 300
},
trigger_ani: {
name: "animation1",
zIndex: 400
},
isMask: !0
}), i(o, 2, {
node: "s2",
win_node: "w2",
win_ani: {
name: "animation",
zIndex: 300
},
stop_ani: {
name: "animation1",
zIndex: 100
},
trigger_ani: {
name: "animation",
zIndex: 400
}
}), i(o, 3, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
coin: "coin"
}), i(o, 4, {
node: "s4",
win_node: "w4",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 5, {
node: "s5",
win_node: "w5",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 6, {
node: "s6",
win_node: "w6",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 7, {
node: "s7",
win_node: "w7",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 8, {
node: "s8",
win_node: "w8",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 9, {
node: "s9",
win_node: "w9",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 10, {
node: "s10",
win_node: "w10",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 11, {
node: "s11",
win_node: "w11",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 12, {
node: "s12",
win_node: "w12",
win_ani: {
name: "animation",
zIndex: 300
},
isMask: !0
}), i(o, 21, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
coin: "coin"
}), i(o, 22, {
node: "s22",
win_node: "w3",
stop_ani: {
name: "animation3_1",
zIndex: 100
},
idle_ani: {
name: "animation3_2",
zIndex: 100
},
trigger_ani: {
name: "animation3_3",
zIndex: 400
},
playBonusAudio: !0
}), i(o, 23, {
node: "s23",
win_node: "w3",
stop_ani: {
name: "animation2_1",
zIndex: 100
},
idle_ani: {
name: "animation2_2",
zIndex: 100
},
trigger_ani: {
name: "animation2_3",
zIndex: 400
},
playBonusAudio: !0
}), i(o, 24, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
mult: !0,
dataNode: "s24"
}), i(o, 25, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
mult: !0,
dataNode: "s25"
}), i(o, 26, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
mult: !0,
dataNode: "s26"
}), i(o, 27, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
mult: !0,
dataNode: "s27"
}), i(o, 28, {
node: "s21",
win_node: "w3",
stop_ani: {
name: "animation1_1",
zIndex: 100
},
idle_ani: {
name: "animation1_2",
zIndex: 100
},
trigger_ani: {
name: "animation1_3",
zIndex: 400
},
playBonusAudio: !0,
mult: !0,
dataNode: "s28"
}), i(o, 31, {
node: "s31"
}), i(o, 32, {
node: "s32"
}), i(o, 33, {
node: "s33"
}), i(o, 34, {
node: "s34"
}), i(o, 35, {
node: "s35"
}), i(o, 36, {
node: "s36"
}), i(o, 37, {
node: "s37"
}), i(o, 38, {
node: "s38"
}), i(o, 39, {
node: "s39"
}), i(o, 40, {
node: "s40"
}), i(o, 41, {
node: "s41"
}), i(o, 42, {
node: "s42"
}), i(o, 100, {
node: "",
random: !0
}), o),
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "Nmedusa_Bottom",
Slots: "Nmedusa_Slots",
Reels: "Nmedusa_Reel",
Symbols: "Nmedusa_Symbol",
Sound: "Nmedusa_Sound"
},
col: 5,
row: 4,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
width: 128,
height: 107
},
scatterId: 2,
AddAntiTime: 2,
randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
randomBonusSymbols: [ [ 23, 31, 32, 33, 34 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 22, 39, 40, 41, 42 ] ],
randomNoBonusSymbols: [ [ 31, 32, 33, 34 ], [ 35, 36, 37, 38 ], [ 35, 36, 37, 38 ], [ 35, 36, 37, 38 ], [ 39, 40, 41, 42 ] ],
kuang: "kuang",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 1,
bounce: !0,
autoModelDelay: 1,
normalBgm: "ngbgm",
helpItems: [ "games/Nmedusa/prefab/LMSlots_Help_item1", "games/Nmedusa/prefab/LMSlots_Help_item2", "games/Nmedusa/prefab/LMSlots_Help_item3", "games/Nmedusa/prefab/LMSlots_Help_item4" ],
commEffect: {
path: "games/Nmedusa/",
win1: [ "win1", "win1end" ],
win2: [ "win2", "win2end" ]
},
bounceInfo: {
distance: 30,
time: .1
},
reelStateInfo: [ {
id: [ 3, 21, 22, 23, 24, 25, 26, 27, 28 ],
mini: 6,
counts: [ 5, 5, 5, 5, 5 ],
antiNode: "node_anti_bonus",
path: "games/Nmedusa/",
reelStopSound: "reel_stop",
symbolStopSound: "bonus_notify",
antSound: "anticipation",
antSpeed: 2e3
}, {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_anti",
freeNode: "node_free",
path: "games/Nmedusa/",
reelStopSound: "reel_stop",
symbolStopSound: "scatter_notify",
antSound: "anticipation",
antSpeed: 2e3
} ]
};
t.exports = a;
cc._RF.pop();
}, {} ],
Nmedusa_CollectBonusControl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7e59e91zH5N97rsDi+0SuJk", "Nmedusa_CollectBonusControl");
cc.Class({
extends: cc.Component,
properties: {
_gameUI: null,
_collectAni: null,
_itemNode: null,
_itemList: [],
_clickButton: null,
_tips: null,
_tipsClickButton: null,
_num: 0,
_needBet: 0
},
onLoad: function() {
var e = this;
this._gameUI = cc.find("Game_UI", this.node);
this._collectAni = cc.find("Game_UI/collect_ani", this.node);
this._itemNode = cc.find("Game_UI/item_node", this.node);
this._clickButton = cc.find("Game_UI/button", this.node);
this._tipsClickButton = cc.find("Game_UI/buttonTips", this.node);
for (var t = 1; t < 17; t++) {
var n = cc.find("item_" + t, this._itemNode);
this._itemList.push(n);
}
this._tips = cc.find("Game_UI/tips", this.node);
this._clickButton.on("click", function() {
if ("idle" == cc.vv.gameData.GetSlotState() && !(cc.vv.gameData.GetAutoModelTime() > 0)) {
if (e._needBet <= cc.vv.gameData._deskInfo.mults.length) {
cc.vv.gameData.GetBottomScript().SetBetIdx(e._needBet);
e.updataCollectState();
}
return !0;
}
});
this._tipsClickButton.on("click", function() {
cc.vv.gameData.GetBetIdx() >= e._needBet && e.showTips();
});
},
setGameUIVisible: function(e) {
this._gameUI.active = e;
},
initData: function() {
this._num = cc.vv.gameData.bonusTrail.count;
this._needBet = cc.vv.gameData._deskInfo.needBet;
for (var e = 0; e < this._num; e++) 3 == e || 7 == e || 15 == e ? this._itemList[e].getComponent(sp.Skeleton).setAnimation(0, "animation3", !0) : this._itemList[e].getChildByName("icon").active = !0;
if (cc.vv.gameData.GetBetIdx() >= this._needBet) {
this._isLock = !1;
this.playMaskAnimation(1);
} else {
this._isLock = !0;
this.playMaskAnimation(3);
}
},
showFreeGameCollect: function(e) {
if (e) {
this.playMaskAnimation(4);
if (4 === this._num || 8 === this._num) {
cc.find("mage", this._collectAni).active = !0;
cc.find("super", this._collectAni).active = !1;
} else if (16 === this._num) {
cc.find("mage", this._collectAni).active = !1;
cc.find("super", this._collectAni).active = !0;
}
} else {
16 == this._num && this.reSetCollect();
if (this._isLock) this.playMaskAnimation(3); else {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_unlock);
this.playMaskAnimation(1);
}
cc.find("mage", this._collectAni).active = !1;
cc.find("super", this._collectAni).active = !1;
}
},
reSetCollect: function() {
for (var e = 0; e < 16; e++) 3 == e || 7 == e || 15 == e ? this._itemList[e].getComponent(sp.Skeleton).setAnimation(0, "animation1", !0) : this._itemList[e].getChildByName("icon").active = !1;
this._num = 0;
},
activeBonus: function() {
if (cc.vv.gameData.GetBetIdx() >= this._needBet) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_one);
this._num++;
if (4 == this._num || 8 == this._num || 16 == this._num) {
this._itemList[this._num - 1].getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
this._itemList[this._num - 1].getComponent(sp.Skeleton).addAnimation(0, "animation3", !0);
} else this._itemList[this._num - 1].getChildByName("icon").active = !0;
}
},
updataCollectState: function() {
if (cc.vv.gameData.GetBetIdx() >= this._needBet) {
if (this._isLock) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_unlock);
this.playMaskAnimation(1);
}
} else if (!this._isLock) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_lock);
this.playMaskAnimation(2);
}
},
playMaskAnimation: function(e) {
var t = this, n = this._collectAni.getComponent(sp.Skeleton);
this._collectAni.active = !0;
if (1 == e) {
n.setAnimation(0, "animation1", !1);
n.setCompleteListener(null);
this._isLock = !1;
this._clickButton.getComponent(cc.Button).interactable = !1;
this._itemNode.active = !0;
} else if (2 == e) {
n.setAnimation(0, "animation2", !1);
n.addAnimation(0, "animation3", !0);
n.setCompleteListener(function() {
t._itemNode.active = !1;
n.setCompleteListener(null);
});
this._isLock = !0;
this._clickButton.getComponent(cc.Button).interactable = !0;
} else if (3 == e) {
n.setAnimation(0, "animation3", !0);
n.setCompleteListener(null);
this._isLock = !0;
this._clickButton.getComponent(cc.Button).interactable = !0;
this._itemNode.active = !1;
} else if (4 == e) {
n.setAnimation(0, "animation4", !0);
n.setCompleteListener(null);
this._clickButton.getComponent(cc.Button).interactable = !1;
this._itemNode.active = !1;
}
},
showTips: function() {
var e = this;
if (!this._tips.active) {
this._tips.active = !0;
this._tips.opacity = 0;
cc.tween(this._tips).to(.5, {
opacity: 255
}).delay(2).to(.5, {
opacity: 0
}).delay(1).call(function() {
e._tips.active = !1;
}).start();
}
}
});
cc._RF.pop();
}, {} ],
Nmedusa_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e3293/TyTxEaIJdPTA2llrl", "Nmedusa_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {
_bonusControl: null,
_popControl: null,
_isBonusGame: !1,
_isFreeGame: !1,
_isPlayingBgm: !1,
bonusTrail: null
},
init: function(e, t, n) {
this._super(e, t, n);
this._isFreeGame = this._deskInfo.restFreeCount > 0;
this.bonusTrail = this._deskInfo.bonusTrail;
},
SetBonusControl: function(e) {
this._bonusControl = e;
},
getBonusControl: function() {
return this._bonusControl;
},
SetPopControl: function(e) {
this._popControl = e;
},
getPopControl: function() {
return this._popControl;
},
setIsBonusGame: function(e) {
this._isBonusGame = e;
},
isBonusGame: function() {
return this._isBonusGame;
},
setIsFreeGame: function(e) {
this._isFreeGame = e;
},
isFreeGame: function() {
return this._isFreeGame;
},
setPlayingBgm: function(e) {
this._isPlayingBgm = e;
},
isPlayingBgm: function() {
return this._isPlayingBgm;
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
Nmedusa_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9d8c3XGjVxDHaWs1m60TjTH", "Nmedusa_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {
collectBonusControl: {
default: null,
visible: !1
},
superFreeGameWild: {
default: null,
visible: !1
}
},
InitCommComponent: function() {
this._super();
var e = cc.find("safe_node/bonus_game", this.node).getComponent("Nmedusa_BonusGame");
cc.vv.gameData.SetBonusControl(e);
var t = cc.find("safe_node/node_pop_ui", this.node).getComponent("Nmedusa_Pop");
cc.vv.gameData.SetPopControl(t);
e.Init();
t.Init();
this.collectBonusControl = cc.find("Canvas/safe_node/Collect_Bonus_UI").getComponent("Nmedusa_CollectBonusControl");
this.superFreeGameWild = cc.find("Canvas/safe_node/superFreeGameWildRoot").getComponent("Nmedusa_SuperFreeGameWild");
Global.NmedusaGameControl = this;
},
onDestroy: function() {
Global.NmedusaGameControl = null;
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
Nmedusa_Pop: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "675454jy5dHcIxTBAbZndDK", "Nmedusa_Pop");
var o, i, a, s;
function r(e, t, n, o, i, a, s) {
try {
var r = e[a](s), c = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(c) : Promise.resolve(c).then(o, i);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function s(e) {
r(a, o, i, s, c, "next", e);
}
function c(e) {
r(a, o, i, s, c, "throw", e);
}
s(void 0);
});
};
}
function l(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var u = (l(s = {}, 10, (l(o = {}, 1, {
pop: "animation1",
show: "animation1_1"
}), l(o, 2, {
pop: "animation4",
show: "animation4_4"
}), l(o, 3, {
pop: "animation7",
show: "animation7_7"
}), o)), l(s, 20, (l(i = {}, 1, {
pop: "animation2",
show: "animation2_2"
}), l(i, 2, {
pop: "animation5",
show: "animation5_5"
}), l(i, 3, {
pop: "animation8",
show: "animation8_8"
}), i)), l(s, 30, (l(a = {}, 1, {
pop: "animation3",
show: "animation3_3"
}), l(a, 2, {
pop: "animation6",
show: "animation6_6"
}), l(a, 3, {
pop: "animation9",
show: "animation9_9"
}), a)), s);
cc.Class({
extends: cc.Component,
properties: {
logoMeidusha: {
default: null,
type: cc.Node
},
_popup: null,
_snakeSpine: null,
_meidushaSpine: null,
_popBonus: null,
_cfg: null,
collectButton: {
default: null,
type: cc.Node
},
jpCoinLable: {
default: null,
type: cc.Node
},
_startAddFreeWinCoin: !1,
jpLabelBg: {
default: [],
type: cc.Node
}
},
onLoad: function() {},
Init: function() {
this._cfg = cc.vv.gameData.getGameCfg();
this._popup = cc.find("popup", this.node);
this._popup.active = !1;
this._snakeSpine = cc.find("snake", this.node);
this._snakeSpine.active = !1;
this._meidushaSpine = cc.find("meidusha", this.node);
this._meidushaSpine.active = !1;
this._popBonus = cc.find("popup/popbonus", this.node);
this._popBonus.active = !1;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showFreeGameTimes: function(e, t) {
var n = this;
return c(regeneratorRuntime.mark(function o() {
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
return o.abrupt("return", new Promise(function() {
var o = c(regeneratorRuntime.mark(function o(i, a) {
var s, r, c, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
2 != t && Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
n._popup.active = !0;
(s = n._popup.getChildByName("show_free_games_time")).active = !0;
s.setScale(.9);
(r = s.getChildByName("spine")).getComponent(sp.Skeleton).setAnimation(0, u[e][t].pop, !1);
r.getComponent(sp.Skeleton).setCompleteListener(function() {
r.getComponent(sp.Skeleton).setCompleteListener(null);
r.getComponent(sp.Skeleton).setAnimation(0, u[e][t].show, !0);
});
c = s.getChildByName("start");
l = function() {
c.getComponent(cc.Button).interactable = !1;
s.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
n._popup.active = !1;
s.active = !1;
i();
})));
};
if (2 != t) {
o.next = 18;
break;
}
c.active = !1;
o.next = 15;
return n.awaitTime(2);

case 15:
l();
o.next = 27;
break;

case 18:
c.active = !0;
c.setScale(0);
c.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
o.next = 23;
return n.awaitTime(.5);

case 23:
c.getComponent(cc.Button).interactable = !0;
c.off("click");
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", function() {
c.stopAllActions();
l();
});

case 27:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}()));

case 1:
case "end":
return o.stop();
}
}, o);
}))();
},
showFreeGameWinner: function(e) {
var t = this;
return new Promise(function() {
var n = c(regeneratorRuntime.mark(function n(o, i) {
var a, s, r, c, l, u;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
t._popup.active = !0;
(a = t._popup.getChildByName("show_free_games_win")).active = !0;
a.setScale(.9);
(s = a.getChildByName("spine")).getComponent(sp.Skeleton).setAnimation(0, "animation10", !1);
s.getComponent(sp.Skeleton).setCompleteListener(function() {
s.getComponent(sp.Skeleton).setCompleteListener(null);
s.getComponent(sp.Skeleton).setAnimation(0, "animation10_10", !0);
});
(r = a.getChildByName("start")).setScale(0);
r.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
(c = cc.find("lable", a)).setScale(0);
c.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
(l = cc.find("lable/coin", a)).getComponent(cc.Label).string = "";
n.next = 19;
return t.awaitTime(.2);

case 19:
r.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
t._startAddFreeWinCoin = !0;
Global.doRoallNumEff(l, 0, e, 2, function() {
t._startAddFreeWinCoin = !1;
}, null, 0, !0);
r.getComponent(cc.Button).interactable = !0;
r.off("click");
u = function() {
if (t._startAddFreeWinCoin) {
t._startAddFreeWinCoin = !1;
l.stopAllActions();
l.getComponent(cc.Label).string = Global.FormatNumToComma(e);
} else {
r.getComponent(cc.Button).interactable = !1;
a.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
t._popup.active = !1;
a.active = !1;
o();
})));
}
};
cc.vv.gameData.checkAutoPlay(r, u);
r.on("click", function() {
r.stopAllActions();
u();
});

case 27:
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
showJackpotWinCoin: function(e, t, n) {
var o = this;
return new Promise(function() {
var i = c(regeneratorRuntime.mark(function i(a, s) {
var r, c, l, u, m, d, f, p;
return regeneratorRuntime.wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_dialog_start_show);
o._popup.active = !0;
(r = o._popup.getChildByName("show_jackpot_winCoin")).active = !0;
r.setScale(.9);
c = r.getChildByName("jp_tc_01");
l = r.getChildByName("multRoot");
for (u = 0; u < l.children.length; u++) l.children[u].active = !1;
t > 1 && (m = cc.find("x" + t, l)) && (m.active = !0);
for (d = 0; d < o.jpLabelBg.length; d++) o.jpLabelBg[d].active = e - 1 === d;
f = "";
i.t0 = e;
i.next = 1 === i.t0 ? 14 : 2 === i.t0 ? 16 : 3 === i.t0 ? 18 : 4 === i.t0 ? 20 : 5 === i.t0 ? 22 : 24;
break;

case 14:
f = "animation_mini_";
return i.abrupt("break", 24);

case 16:
f = "animation_mlnor_";
return i.abrupt("break", 24);

case 18:
f = "animation_major_";
return i.abrupt("break", 24);

case 20:
f = "animation_grand_";
return i.abrupt("break", 24);

case 22:
f = "animation_maxl_";
return i.abrupt("break", 24);

case 24:
c.getComponent(sp.Skeleton).setAnimation(0, f + 1, !1);
c.getComponent(sp.Skeleton).addAnimation(0, f + 2, !0);
o._startAddFreeWinCoin = !0;
Global.doRoallNumEff(o.jpCoinLable, Math.floor(.1 * n), n, 2.5, function() {
o._startAddFreeWinCoin = !1;
}, null, 0, !0);
i.next = 30;
return cc.vv.gameData.awaitTime(2.6);

case 30:
o.collectButton.getComponent(cc.Button).interactable = !0;
o.collectButton.off("click");
p = function() {
if (o._startAddFreeWinCoin) {
o._startAddFreeWinCoin = !1;
o.jpCoinLable.stopAllActions();
o.jpCoinLable.getComponent(cc.Label).string = Global.FormatNumToComma(n);
} else {
o.collectButton.getComponent(cc.Button).interactable = !1;
cc.tween(r).to(.3, {
scale: 0
}).call(function() {
o._popup.active = !1;
r.active = !1;
a();
}).start();
}
};
cc.vv.gameData.checkAutoPlay(o.collectButton, p);
o.collectButton.on("click", function() {
o.collectButton.stopAllActions();
p();
});

case 35:
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
playMedusaAnimation: function(e) {
var t = this;
return new Promise(function() {
var n = c(regeneratorRuntime.mark(function n(o, i) {
var a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.act1);
t._meidushaSpine.active = !0;
t.logoMeidusha.active = !1;
(a = t._meidushaSpine.getComponent(sp.Skeleton)).setAnimation(0, "idle3", !1);
a.setCompleteListener(function() {
t._meidushaSpine.active = !1;
o();
});
n.next = 8;
return t.awaitTime(1.5);

case 8:
t.logoMeidusha.active = !0;
e && e();

case 10:
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
playSnakeAnimation: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.act2);
e._snakeSpine.active = !0;
(n = e._snakeSpine.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
n.setCompleteListener(function() {
e._snakeSpine.active = !1;
});

case 6:
case "end":
return t.stop();
}
}, t);
}))();
},
playPopBonus: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.respin_dialog_start_show);
e._popup.active = !0;
e._popBonus.active = !0;
(n = e._popBonus.getComponent(sp.Skeleton)).setAnimation(0, "animation", !1);
n.setCompleteListener(function() {
e._popBonus.active = !1;
e._popup.active = !1;
});

case 6:
case "end":
return t.stop();
}
}, t);
}))();
}
});
cc._RF.pop();
}, {} ],
Nmedusa_Reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0fde0JNwMxM3rBKKu+vsMdw", "Nmedusa_Reel");
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
var o, a, s = !0, r = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
s = e.done;
return e;
},
e: function(e) {
r = !0;
a = e;
},
f: function() {
try {
s || null == o.return || o.return();
} finally {
if (r) throw a;
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
properties: {},
SetResult: function(e) {
this._super(e);
if (0 == this._reelIdx || 4 == this._reelIdx) {
this._originResult.pop();
this._result.pop();
}
},
playAntiAnimation: function() {
var e = !1, t = cc.vv.gameData.getGameCfg(), n = cc.vv.gameData.isFreeGame();
if (t.reelStateInfo && t.reelStateInfo[0]) {
var i, a = o(this._reelState);
try {
for (a.s(); !(i = a.n()).done; ) {
var s = i.value;
if (s.isAnt && s.antiNode) {
n && s.freeNode ? this.ShowAntiEffect(!0, s.freeNode) : this.ShowAntiEffect(!0, s.antiNode);
cc.vv.AudioManager.playEff(s.path, s.antSound, !0);
var r = s.antSpeed;
r && (r *= this.GetTimeScale());
this._speed = r || this._speed;
e = !0;
}
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
return e;
},
ShowAntiEffect: function(e, t) {
if (!1 === e) {
var n = cc.vv.gameData.getGameCfg();
if (n.reelStateInfo) {
var i, a = o(n.reelStateInfo);
try {
for (a.s(); !(i = a.n()).done; ) {
var s = i.value, r = cc.find("mask/" + s.antiNode, this.node);
if (r && r.active) {
r.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(s.antSound);
}
var c = cc.find("mask/" + s.freeNode, this.node);
if (c && c.active) {
c.active = !1;
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(s.antSound);
}
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
}
if (!0 === e) {
var l = cc.find("mask/" + t, this.node);
l ? l.active = !0 : console.log(">>>> 未找到加速节点：mask/node_anti");
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Nmedusa_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c2cebifJF5ESKu5URYVcVU5", "Nmedusa_Slots");
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
var o, a, s = !0, r = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
s = e.done;
return e;
},
e: function(e) {
r = !0;
a = e;
},
f: function() {
try {
s || null == o.return || o.return();
} finally {
if (r) throw a;
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
function s(e) {
"@babel/helpers - typeof";
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
})(e);
}
function r(e, t, n, o, i, a, s) {
try {
var r = e[a](s), c = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(c) : Promise.resolve(c).then(o, i);
}
function c(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function s(e) {
r(a, o, i, s, c, "next", e);
}
function c(e) {
r(a, o, i, s, c, "throw", e);
}
s(void 0);
});
};
}
var l = [ 21, 28, 27, 26, 24, 25, 23, 22 ];
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_isSuperBonus: !1,
_canStopSlots: !1,
_prizePool: []
},
Init: function() {
for (var e = cc.find("LMSlots_PrizePool_1", this.node.parent), t = 0; t < e.children.length; t++) {
var n = e.children[t].getComponent("LMSlotMachine_PrizePool");
this._prizePool[n.dataType] = n;
}
this._super();
this.playMedusaAnimation(1);
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
createReels: function(e, t) {
for (var n = this._cfg.scripts.Reels, o = 0; o < e; o++) {
var i = cc.find("reels/reel" + (o + 1), this.node).addComponent(n);
0 == o || 4 == o ? i.Init(o, t - 1, this._topAniNode) : i.Init(o, t, this._topAniNode);
this._reels.push(i);
}
},
StartMove: function() {
this._super();
Global.SlotsSoundMgr.playNormalBgm();
Global.NmedusaGameControl.superFreeGameWild.show();
this._isSuperBonus || Global.NmedusaGameControl.superFreeGameWild.clearWild();
this._canStopSlots = !1;
},
onMsgSpine: function(e) {
var t = this;
return c(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._super(e);
t._gameInfo.freeResult && t._gameInfo.freeResult.freeInfo && t._gameInfo.freeResult.freeInfo.idxs && t.playActive(!0);
t._gameInfo.allBonusData && t._gameInfo.allBonusData.length > 0 && t.playActive(!0);
if (!cc.vv.gameData.isFreeGame()) {
n.next = 9;
break;
}
if (t._gameInfo.bonusTrail.count !== t._gameInfo.bonusTrail.megaIdx[0] && t._gameInfo.bonusTrail.count !== t._gameInfo.bonusTrail.megaIdx[1] && t._gameInfo.bonusTrail.count !== t._gameInfo.bonusTrail.superBonus[0]) {
n.next = 9;
break;
}
n.next = 7;
return t.playSuperBonusStartAnimation();

case 7:
n.next = 9;
return Global.NmedusaGameControl.superFreeGameWild.showSuperBonus(t._gameInfo.bonusTrail.info.currWildIdxs);

case 9:
t._canStopSlots = !0;

case 10:
case "end":
return n.stop();
}
}, n);
}))();
},
SetSlotsResult: function(e) {
this._gameInfo.roundBonus;
for (var t = [], n = 0; n < e.length; n++) {
var i = {};
i.id = e[n];
i.data = 0;
t.push(i);
}
var a = [];
Array.isArray(this._gameInfo.roundBonus) ? a = this._gameInfo.roundBonus : this._gameInfo.roundBonus && "object" === s(this._gameInfo.roundBonus) && (a = Object.values(this._gameInfo.roundBonus));
var r, c = o(a);
try {
for (c.s(); !(r = c.n()).done; ) {
var u = r.value;
t[u.index - 1].data = u.coin;
t[u.index - 1].id = l[u.type];
}
} catch (e) {
c.e(e);
} finally {
c.f();
}
for (var m = e.length / this._col, d = [], f = 0; f < t.length; f++) {
var p = t[f].id, _ = (Math.floor(f / m), f % this._col);
if (this._cfg.symbol[p]) {
var h = {};
h.sid = p;
h.data = t[f].data;
d[_] || (d[_] = []);
d[_].unshift(h);
}
}
for (var v = 0; v < this._reels.length; v++) {
var g = this._reels[v], b = d[v];
g.SetResult(b);
}
},
ShowWinTrace: function() {
for (var e = [], t = 0; t < this._gameInfo.zjLuXian.length; t++) for (var n = this._gameInfo.zjLuXian[t], o = 0; o < n.indexs.length; o++) e[n.indexs[o]] = 1;
for (var i in e) {
var a = this.GetSymbolByIdx(Number(i));
if (a) {
a.playWinAnimation();
a.ShowKuang();
}
}
},
OnSpinEnd: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, o, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
Global.NmedusaGameControl.superFreeGameWild.hide();
e.ShowWinTrace();
n = cc.vv.gameData.GetGameWin();
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
t.next = 9;
break;
}
t.next = 7;
return e.ShowWinCoin(n, cc.vv.gameData.GetGameTotalFreeWin(), !1);

case 7:
t.next = 11;
break;

case 9:
t.next = 11;
return e.ShowWinCoin(n, n, !0);

case 11:
if (!(e._gameInfo.freeResult && e._gameInfo.freeResult.freeInfo && e._gameInfo.freeResult.freeInfo.idxs)) {
t.next = 20;
break;
}
e.playActive(!1);
if (!e._gameInfo.freeResult.isFreeState) {
t.next = 18;
break;
}
t.next = 16;
return e.CheckFreeEnterFreeGame();

case 16:
t.next = 20;
break;

case 18:
t.next = 20;
return e.CheckEnterFreeGame();

case 20:
if (!(e._gameInfo.allBonusData && e._gameInfo.allBonusData.length > 0)) {
t.next = 29;
break;
}
e.playActive(!1);
e.PausePrizePool(e._gameInfo.jackpotValues);
t.next = 25;
return e.CheckTriggerSubGame();

case 25:
o = e._bottomScript.getCurrentWin();
i = cc.vv.gameData.getBonusControl().getBonusWinCoin();
t.next = 29;
return e.ShowWinCoin(i, o, !0);

case 29:
if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
t.next = 34;
break;
}
t.next = 32;
return e.CheckExitFreeGame();

case 32:
t.next = 34;
return e.ShowWinCoin(e._bottomScript.getCurrentWin(), e._bottomScript.getCurrentWin(), !0);

case 34:
e.CanDoNextRound();

case 35:
case "end":
return t.stop();
}
}, t);
}))();
},
ShowWinCoin: function(e, t, n) {
var o = this;
return new Promise(function() {
var i = c(regeneratorRuntime.mark(function i(a, s) {
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
CheckExitFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
cc.vv.gameData.setIsFreeGame(!1);
t.next = 3;
return cc.vv.gameData.getPopControl().showFreeGameWinner(cc.vv.gameData.GetGameTotalFreeWin());

case 3:
t.next = 5;
return cc.vv.gameData.getPopControl().playMedusaAnimation(function() {
e.playMedusaAnimation(1);
e.ShowGameview(!1);
Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(!1);
Global.NmedusaGameControl.superFreeGameWild.clearWild();
e.Resume();
});

case 5:
Global.SlotsSoundMgr.playNormalBgm(!0);
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
CheckFreeEnterFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, i) {
var a, s, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
a = o(e._gameInfo.freeResult.freeInfo.idxs);
try {
for (a.s(); !(s = a.n()).done; ) {
r = s.value;
(c = e.GetSymbolByIdx(r)) && c.playWinAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
t.next = 5;
return e.awaitTime(2.5);

case 5:
t.next = 7;
return cc.vv.gameData.getPopControl().showFreeGameTimes(e._gameInfo.freeResult.freeInfo.freeCnt, 2);

case 7:
n();

case 8:
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
CheckEnterFreeGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, i) {
var a, s, r, c, l;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
a = o(e._gameInfo.freeResult.freeInfo.idxs);
try {
for (a.s(); !(s = a.n()).done; ) {
r = s.value;
(c = e.GetSymbolByIdx(r)) && c.playWinAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
Global.NmedusaGameControl.collectBonusControl.activeBonus();
e.Backup();
t.next = 7;
return e.awaitTime(1.5);

case 7:
cc.vv.gameData.setIsFreeGame(!0);
l = 1;
e._gameInfo.bonusTrail.count !== e._gameInfo.bonusTrail.megaIdx[0] && e._gameInfo.bonusTrail.count !== e._gameInfo.bonusTrail.megaIdx[1] && e._gameInfo.bonusTrail.count !== e._gameInfo.bonusTrail.superBonus[0] || (l = 3);
t.next = 12;
return cc.vv.gameData.getPopControl().showFreeGameTimes(e._gameInfo.freeResult.freeInfo.freeCnt, l);

case 12:
t.next = 14;
return cc.vv.gameData.getPopControl().playMedusaAnimation(function() {
e.playMedusaAnimation(3);
Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(!0);
e.ShowGameview(!0);
});

case 14:
Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
n();

case 16:
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
CheckTriggerSubGame: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, i) {
var a, s, r, c;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
a = o(e._gameInfo.roundBonus);
try {
for (a.s(); !(s = a.n()).done; ) {
r = s.value;
(c = e.GetSymbolByIdx(r.index)) && c.playTriggerAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
cc.vv.gameData.isFreeGame() || e._bottomScript.DoHideWinAction();
t.next = 6;
return e.awaitTime(1.5);

case 6:
cc.vv.gameData.setIsBonusGame(!0);
cc.vv.gameData.getPopControl().playPopBonus();
t.next = 10;
return e.awaitTime(4);

case 10:
cc.vv.gameData.getPopControl().playSnakeAnimation();
t.next = 13;
return e.awaitTime(1);

case 13:
cc.vv.gameData.getBonusControl().enterGame(e._gameInfo.allBonusData, n, !0);

case 14:
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
ShowGameview: function(e) {
if (e) {
var t = cc.vv.gameData.GetTotalFree(), n = cc.vv.gameData.GetFreeTime();
this._bottomScript.ShowFreeModel(!0, t - n, t);
var o = cc.vv.gameData.GetTotalFreeWin();
this._bottomScript.SetWin(o);
} else this._bottomScript.ShowFreeModel(!1);
var i = cc.vv.gameData.getDeskInfo().bonusTrail;
this._gameInfo && (i = this._gameInfo.bonusTrail);
Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(!e);
var a = cc.find("Canvas/safe_node/spr_bg_normal"), s = cc.find("Canvas/safe_node/spr_bg_free"), r = cc.find("Canvas/safe_node/spr_bg_bonus");
if (s) {
a && (a.active = !e);
if (i.count === i.superBonus[0]) {
s.active = !1;
r.active = e;
} else {
s.active = e;
r.active = !1;
}
}
if (e) {
if (i.count === i.superBonus[0]) {
this._isSuperBonus = !0;
if (e) {
Global.NmedusaGameControl.superFreeGameWild.show();
Global.NmedusaGameControl.superFreeGameWild.recaveryWild(i.info.wildIdxs);
}
} else this._isSuperBonus = !1;
i.count !== i.megaIdx[0] && i.count !== i.megaIdx[1] && i.count !== i.superBonus[0] || this._bottomScript.showTotalBet(!1);
} else this._bottomScript.showTotalBet(!0);
},
ReconnectShow: function() {
var e = this;
return c(regeneratorRuntime.mark(function t() {
var n, o;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e.ShowGameview(cc.vv.gameData.isFreeGame());
Global.NmedusaGameControl.collectBonusControl.initData();
Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(cc.vv.gameData.isFreeGame());
cc.vv.gameData.isFreeGame() ? e.playMedusaAnimation(3) : e.playMedusaAnimation(1);
if (!(cc.vv.gameData.getDeskInfo().allBonusData && cc.vv.gameData.getDeskInfo().allBonusData.length > 0)) {
t.next = 12;
break;
}
e.PausePrizePool(cc.vv.gameData.getDeskInfo().jackpotValues);
t.next = 8;
return new Promise(function() {
var t = c(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
cc.vv.gameData.setIsBonusGame(!0);
cc.vv.gameData.getBonusControl().enterGame(cc.vv.gameData.getDeskInfo().allBonusData, n, !1);

case 3:
case "end":
return t.stop();
}
}, t);
}));
return function(e, n) {
return t.apply(this, arguments);
};
}());

case 8:
n = e._bottomScript.getCurrentWin();
o = cc.vv.gameData.getBonusControl().getBonusWinCoin();
t.next = 12;
return e.ShowWinCoin(o, n, !0);

case 12:
e.CanDoNextRound();

case 13:
case "end":
return t.stop();
}
}, t);
}))();
},
playMedusaAnimation: function(e) {
var t = this, n = cc.find("Canvas/safe_node/slots/role/spine_role");
if (1 == e) {
n.getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
} else if (2 == e) ; else if (3 == e) {
n.getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
this.scheduleOnce(function() {
t.playMedusaAnimation(4);
}, 6.6);
} else if (4 == e) {
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.flash);
var o = n.getComponent(sp.Skeleton);
o.setAnimation(0, "skill", !1);
o.setCompleteListener(function() {
t.playMedusaAnimation(1);
o.setCompleteListener(null);
});
}
},
playActive: function(e) {
var t = cc.find("Canvas/safe_node/spr_bg_mask"), n = cc.find("Canvas/safe_node/active_spine_2");
if (e) {
n.active = !0;
t.active = !0;
t.runAction(cc.fadeTo(1, 180));
n.getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
} else {
n.active = !1;
t.runAction(cc.fadeOut(.5));
}
},
playSuperBonusStartAnimation: function() {
var e = this;
return new Promise(function(t, n) {
e.unscheduleAllCallbacks();
var o = cc.find("Canvas/safe_node/slots/role/spine_role").getComponent(sp.Skeleton);
o.setAnimation(0, "jineng", !1);
o.setCompleteListener(function() {
e.playMedusaAnimation(1);
o.setCompleteListener(null);
t();
});
});
},
CanStopSlot: function() {
return this._canStopSlots;
},
PausePrizePool: function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
this._prizePool[t].PausePrizePool(n);
}
},
RestPrizePool: function() {
for (var e = 0; e < this._prizePool.length; e++) this._prizePool[e].RestPrizePool();
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Nmedusa_Sound: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1e756goKHVC6bCDE6mFaCvl", "Nmedusa_Sound");
cc.Class({
extends: e("LMSlots_Sound"),
properties: {
soundPath: {
default: "games/Nmedusa/",
override: !0
},
base_bgm: "ngbgm",
reel_stop: "reel_stop",
scatter_stop: "scatter_notify",
bonus_stop: "bonus_notify",
scatter_ant: "anticipation",
bonus_ant: "anticipation",
act1: "act1",
act2: "act2",
bell: "bell",
flash: "flash",
shouji_lock: "shouji_lock",
shouji_one: "shouji_one",
shouji_unlock: "shouji_unlock",
wild: "wild",
win1: "win1",
win2: "win2",
free_bgm: "fg_bgm",
free_dialog_collect_show: "free_dialog_collect_show",
free_dialog_start_show: "free_dialog_start_show",
add_row: "add_row",
add_spin: "add_spin",
bigmul: "bigmul",
collect: "collect",
fly_mul: "fly_mul",
fly_row: "fly_row",
jp_dialog_start_show: "jp_dialog_start_show",
mul_symbol: "mul_symbol",
number: "number",
respin_bgm: "GG_bgm_free",
respin_dialog_start_show: "respin_dialog_start_show"
}
});
cc._RF.pop();
}, {
LMSlots_Sound: void 0
} ],
Nmedusa_SuperFreeGameWild: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3c50d+d0O5Fg6eWo7sFWsfl", "Nmedusa_SuperFreeGameWild");
function o(e, t, n, o, i, a, s) {
try {
var r = e[a](s), c = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(c) : Promise.resolve(c).then(o, i);
}
function i(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(i, a) {
var s = e.apply(t, n);
function r(e) {
o(s, i, a, r, c, "next", e);
}
function c(e) {
o(s, i, a, r, c, "throw", e);
}
r(void 0);
});
};
}
cc.Class({
extends: cc.Component,
properties: {
wildLianXian: {
default: null,
type: cc.Node
},
_wildList: []
},
onLoad: function() {
this.hide();
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
show: function() {
this.node.active = !0;
},
hide: function() {
this.node.active = !1;
},
showWild: function(e) {
var t = this;
return new Promise(function(n, o) {
t.wildLianXian.active = !0;
var i = t.wildLianXian.position, a = (e - 1) % cc.vv.gameData._cfg.col, s = cc.vv.gameData._cfg.row - Math.floor((e - 1) / cc.vv.gameData._cfg.col) - 1, r = t.node.getChildByName("node" + a + "_" + s), c = r.position.sub(i), l = new cc.Vec2(0, -1), u = cc.v2(c.x, c.y).signAngle(l), m = cc.misc.radiansToDegrees(u), d = c.mag();
t.wildLianXian.angle = -m;
t.wildLianXian.scaleY = d / 420;
var f = t.wildLianXian.getComponent(sp.Skeleton);
f.setAnimation(0, "animation", !1);
f.setCompleteListener(function() {
t.wildLianXian.active = !1;
f.setCompleteListener(null);
if (t._wildList[e]) {
t._wildList[e].playTriggerAnimation();
n();
} else {
var o = cc.instantiate(cc.vv.gameData.GetPrefabByName(cc.vv.gameData._cfg.symbolPrefab));
t._wildList[e] = o.addComponent(cc.vv.gameData._cfg.scripts.Symbols);
o.parent = r;
o.position = cc.v2(0, 0);
t._wildList[e].ShowById(1);
t._wildList[e].playTriggerAnimation();
n();
}
});
});
},
clearWild: function() {
for (var e in this._wildList) if (this._wildList.hasOwnProperty(e)) {
this._wildList[e].node.parent = null;
}
this._wildList = [];
},
showSuperBonus: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a, s;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
a = 0;

case 1:
if (!(a < e.length)) {
n.next = 10;
break;
}
s = e[a];
n.next = 5;
return t.showWild(s);

case 5:
n.next = 7;
return t.awaitTime(.2);

case 7:
a++;
n.next = 1;
break;

case 10:
o();

case 11:
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
recaveryWild: function(e) {
this.clearWild();
for (var t = 0; t < e.length; t++) {
var n = e[t], o = (n - 1) % cc.vv.gameData._cfg.col, i = cc.vv.gameData._cfg.row - Math.floor((n - 1) / cc.vv.gameData._cfg.col) - 1, a = this.node.getChildByName("node" + o + "_" + i);
if (!this._wildList[n]) {
var s = cc.instantiate(cc.vv.gameData.GetPrefabByName(cc.vv.gameData._cfg.symbolPrefab));
this._wildList[n] = s.addComponent(cc.vv.gameData._cfg.scripts.Symbols);
s.parent = a;
s.position = cc.v2(0, 0);
this._wildList[n].ShowById(1);
}
}
}
});
cc._RF.pop();
}, {} ],
Nmedusa_Symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "99bdbvr7vtOxJcYrc1qKagK", "Nmedusa_Symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {
_bonusIndex: 0
},
Init: function(e, t) {
this._topAniNode = t;
this.SetSymbolIdx(e);
this.ShowFristRandomSymbol();
},
setBonusIndex: function(e) {
this._bonusIndex = e;
},
ShowFristRandomSymbol: function() {
var e = [ .5, 1, 2, 3, 4, 10, 20 ], t = [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ], n = e[Global.random(1, e.length) - 1], o = cc.vv.gameData.GetTotalBet() * n, i = t[Global.random(1, t.length) - 1];
this.ShowById(i, o);
},
ShowRandomSymbol: function() {
var e = [ .5, 1, 2, 3, 4, 10, 20 ], t = [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28 ], n = e[Global.random(1, e.length) - 1], o = cc.vv.gameData.GetTotalBet() * n, i = t[Global.random(1, t.length) - 1];
this.ShowById(i, o);
this.setMaskVisible(!0);
},
ShowRandomBonusSymbol: function(e, t) {
var n = [ .5, 1, 2, 3, 4, 10, 20 ], o = n[Global.random(1, n.length) - 1], i = cc.vv.gameData.GetTotalBet() * o, a = cc.vv.gameData.getGameCfg(), s = t ? a.randomNoBonusSymbols : a.randomBonusSymbols, r = Global.random(1, s[e].length), c = s[e][r - 1];
this.ShowById(c, i);
},
ShowById: function(e, t) {
this._id = e;
this._data = t;
this._state = "normal";
this._showNode && (this._showNode.active = !1);
var n = cc.vv.gameData.getGameCfg();
if (n.symbol[e] && n.symbol[e].node) {
this._showNode = cc.find(n.symbol[e].node, this.node);
this._showNode.color = cc.Color.WHITE;
this._showNode.active = !0;
if (n.symbol[this._id].mult) {
cc.find("s24", this.node).active = !1;
cc.find("s25", this.node).active = !1;
cc.find("s26", this.node).active = !1;
cc.find("s27", this.node).active = !1;
cc.find("s28", this.node).active = !1;
var o = cc.find(n.symbol[this._id].dataNode, this.node);
o.active = !0;
var i = cc.find("jp", o);
i && (i.active = !0);
var a = cc.find("mult", o);
if (a) {
a.active = !1;
cc.find("s_2x", a).active = !1;
cc.find("s_3x", a).active = !1;
cc.find("s_4x", a).active = !1;
}
} else {
cc.find("s24", this.node).active = !1;
cc.find("s25", this.node).active = !1;
cc.find("s26", this.node).active = !1;
cc.find("s27", this.node).active = !1;
cc.find("s28", this.node).active = !1;
}
} else console.log(">>>> 未找到配置id:" + e);
var s = cc.find("coin", this.node);
if (n.symbol[e].coin) {
s.active = !0;
s.getComponent(cc.Label).string = Global.convertNumToShort(this._data, 1e3, 0, null, 1e3);
} else s.active = !1;
},
SetCoin: function(e) {
this._data = e;
var t = cc.vv.gameData.getGameCfg(), n = cc.find("coin", this.node);
if (t.symbol[this._id].coin) {
n.active = !0;
n.getComponent(cc.Label).string = Global.convertNumToShort(this._data, 1e3, 0, null, 1e3);
} else n.active = !1;
},
setMult: function(e) {
if (2 === e || 3 === e || 4 === e) {
var t = cc.vv.gameData.getGameCfg();
if (t.symbol[this._id].mult) {
cc.find("s24", this.node).active = !1;
cc.find("s25", this.node).active = !1;
cc.find("s26", this.node).active = !1;
cc.find("s27", this.node).active = !1;
cc.find("s28", this.node).active = !1;
var n = cc.find(t.symbol[this._id].dataNode, this.node);
if (n) {
n.active = !0;
var o = cc.find("jp", n);
o && (o.active = !1);
var i = cc.find("mult", n);
if (i) {
i.active = !0;
cc.find("s_" + e + "x", i).active = !0;
}
}
}
}
},
setMaskVisible: function(e) {
var t = cc.vv.gameData.getGameCfg();
if (t.symbol[this._id] && t.symbol[this._id].node && t.symbol[this._id].isMask) {
var n = cc.find(t.symbol[this._id].node, this.node);
n.color = e ? new cc.Color(120, 120, 120) : cc.Color.WHITE;
}
},
setBonusMaskVisible: function(e) {
this.node.children.forEach(function(t) {
if (e) {
t.color = new cc.Color(120, 120, 120);
if (t.active && ("s24" == t.name || "s25" == t.name || "s26" == t.name || "s27" == t.name || "s28" == t.name)) {
cc.find("jp", t).color = new cc.Color(120, 120, 120);
cc.find("mult", t).color = new cc.Color(120, 120, 120);
cc.find("mult", t).children.forEach(function(e) {
e.color = new cc.Color(120, 120, 120);
});
}
} else t.color = cc.Color.WHITE;
});
},
StopMoveEnd: function() {
this._super();
this.playidleAnimation();
},
BonusStopMove: function() {
var e = this, t = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[t] && n.symbol[t].win_node && n.symbol[t].stop_ani) {
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(n.symbol[t].win_node, this.node);
this._showNode.active = !1;
var o = this.setBonusAnimationToTop(!0), i = cc.find(n.symbol[t].win_node, o);
i.active = !0;
if (n.symbol[t].stop_ani && "" != n.symbol[t].stop_ani.name) {
this.node.zIndex = n.symbol[t].stop_ani.zIndex - this._bonusIndex + 10 * this._reelIdx;
var a = i.getComponent(sp.Skeleton);
if (a) {
a.setAnimation(0, n.symbol[t].stop_ani.name, !1);
n.symbol[t].idle_ani && a.setCompleteListener(function() {
a.setCompleteListener(null);
e.playBonusIdleAnimation();
});
}
}
}
return !1;
},
bonusStartMove: function() {
this.node.zIndex = 50 - this._bonusIndex + 10 * this._reelIdx;
this.node.active = !0;
this._showNode && (this._showNode.active = !0);
},
playBonusIdleAnimation: function() {
var e = !1, t = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[t] && n.symbol[t].win_node && n.symbol[t].idle_ani) {
this._showNode && (this._showNode.active = !1);
this._showNode = cc.find(n.symbol[t].win_node, this.node);
this._showNode.active = !0;
var o = this.setBonusAnimationToTop(!0), i = cc.find(n.symbol[t].win_node, o);
i.active = !0;
if (n.symbol[t].idle_ani && "" != n.symbol[t].idle_ani.name) {
o.zIndex = n.symbol[t].idle_ani.zIndex - this._bonusIndex + 10 * this._reelIdx;
e = !0;
var a = i.getComponent(sp.Skeleton);
a && a.setAnimation(0, n.symbol[t].idle_ani.name, !0);
}
}
return e;
},
setBonusAnimationToTop: function(e) {
if (this._topAniNode) {
if (e) {
var t = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx), this._topAniNode);
t || (t = cc.instantiate(this.node));
var n = this.node.convertToWorldSpaceAR(cc.v2(0));
t.parent = this._topAniNode;
t.name = cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx);
t.position = this._topAniNode.convertToNodeSpaceAR(n);
this.node.active = !1;
return t;
}
var o = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx), this._topAniNode);
if (o) {
o.removeFromParent();
o.destroy();
}
this.node.active = !0;
this._showNode && (this._showNode.active = !0);
}
return this.node;
},
SetSymbolIdx: function(e) {
this._symbolIdx = e;
2 === this._id ? this.node.zIndex = 150 - e : this.node.zIndex = 100 - e;
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ],
Nmedusa_ThroughInput: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "23402B5HYBAj6/G/72PuRH8", "Nmedusa_ThroughInput");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {},
onEnable: function() {
this.node._touchListener && this.node._touchListener.setSwallowTouches(!1);
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Nmedusa_BonusGame", "Nmedusa_BonusReel", "Nmedusa_Bottom", "Nmedusa_Cfg", "Nmedusa_CollectBonusControl", "Nmedusa_GameData", "Nmedusa_Logic", "Nmedusa_Pop", "Nmedusa_Reel", "Nmedusa_Slots", "Nmedusa_Sound", "Nmedusa_SuperFreeGameWild", "Nmedusa_Symbol", "Nmedusa_ThroughInput" ]);