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
Hades_Bottom: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fdaf8hZYYBFcomIYT3W227r", "Hades_Bottom");
cc.Class({
extends: e("LMSlots_Bottom_Base"),
properties: {},
showTotalBet: function(e) {
cc.find("totalBetBg", this.node).active = e;
},
ShowBtnsByState: function(e) {
this._super(e);
cc.vv.gameData.GetSlotsScript()._stopClick.active = "moveing_2" == e;
}
});
cc._RF.pop();
}, {
LMSlots_Bottom_Base: void 0
} ],
Hades_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a7449trlLlKSa1/n9+mlWAP", "Hades_Cfg");
var o, i;
function a(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var s = {
symbol: (o = {}, a(o, 1, {
node: "s15",
win_node: "w15",
win_ani: {
name: "Wild",
zIndex: 200
}
}), a(o, 2, {
node: "s12",
win_node: "w13",
win_ani: {
name: "Scatter_02",
zIndex: 800
},
stop_ani: {
name: "Scatter_01",
zIndex: 800
}
}), a(o, 3, {
node: "s14"
}), a(o, 4, {
node: "s1"
}), a(o, 5, {
node: "s2"
}), a(o, 6, {
node: "s3"
}), a(o, 7, {
node: "s4"
}), a(o, 8, {
node: "s5"
}), a(o, 9, {
node: "s6"
}), a(o, 10, {
node: "s7"
}), a(o, 11, {
node: "s8"
}), a(o, 12, {
node: "s9"
}), a(o, 13, {
node: "s10"
}), a(o, 14, {
node: "s11"
}), a(o, 102, {
node: "s13",
win_node: "w13",
win_ani: {
name: "Scatter_03",
zIndex: 800
}
}), o),
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "Hades_Bottom",
Slots: "Hades_Slots",
Reels: "Hades_reel",
Symbols: "Hades_symbol",
Sound: "Hades_sound"
},
col: 5,
row: 3,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
width: 128,
height: 109
},
helpItems: [ "games/Hades/prefab/LMSlots_Help_item1", "games/Hades/prefab/LMSlots_Help_item2", "games/Hades/prefab/LMSlots_Help_item3" ],
scatterId: 2,
autoModelDelay: 1,
cardmap: (i = {}, a(i, 1, [ 12, 12, 14, 14, 14, 14, 4, 4, 4, 4, 2, 1, 13, 13, 13, 13, 1, 4, 4, 4, 4, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 14, 14, 14, 14, 6, 5, 5, 11, 4, 4, 4, 4, 2, 12, 12, 8, 8, 8, 4, 4, 13, 13, 13, 13, 10, 10, 10, 10, 14, 14, 14, 14, 1, 1, 2, 7, 8, 8, 8, 12, 12, 12, 12, 4, 2, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 4, 4, 4, 4, 11, 10, 10, 14, 14, 14, 14, 10, 2, 7, 7, 7, 7, 13, 13, 13, 13, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 4, 4, 4, 4, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 2, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 13, 13, 13, 13, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
a(i, 2, [ 13, 13, 13, 13, 7, 7, 7, 7, 14, 14, 14, 14, 8, 8, 7, 11, 11, 11, 3, 1, 1, 7, 7, 1, 14, 14, 14, 14, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 4, 4, 4, 9, 9, 3, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 13, 13, 13, 13, 10, 10, 14, 14, 14, 14, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 3, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 3, 4, 4, 2, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 13, 13, 13, 13, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
a(i, 3, [ 4, 4, 4, 4, 14, 14, 14, 14, 10, 9, 11, 11, 11, 11, 14, 14, 14, 14, 8, 8, 12, 12, 12, 12, 7, 7, 7, 13, 13, 13, 13, 4, 4, 4, 4, 4, 4, 4, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 13, 13, 13, 13, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 2, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 14, 14, 14, 14, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 4, 4, 4, 4, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 4, 4, 4, 4, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 4, 4, 4, 4, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 13, 13, 13, 13, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
a(i, 4, [ 8, 9, 9, 9, 13, 13, 13, 13, 14, 14, 14, 14, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 2, 3, 7, 14, 14, 14, 14, 7, 7, 4, 7, 7, 4, 4, 12, 3, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 3, 14, 14, 14, 14, 8, 8, 8, 8, 7, 7, 1, 1, 13, 13, 13, 13, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 3, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 6, 8, 4, 13, 13, 13, 13, 8, 8, 6, 6, 6, 6, 6 ]), 
a(i, 5, [ 5, 5, 5, 5, 14, 14, 14, 14, 2, 11, 11, 11, 7, 7, 7, 1, 4, 7, 7, 7, 13, 13, 13, 13, 8, 10, 10, 2, 11, 11, 11, 2, 1, 1, 6, 4, 4, 4, 4, 11, 11, 11, 2, 4, 4, 4, 6, 6, 6, 6, 2, 14, 14, 14, 14, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 2, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 4, 4, 4, 4, 2, 7, 7, 7, 7, 1, 1, 2, 4, 4, 4, 4, 8, 8, 8, 8, 6, 6, 6, 5, 4, 4, 4, 4, 2, 5, 5, 5, 5, 13, 13, 13, 13, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 2, 4, 4, 4, 4, 4, 4, 10, 10, 10, 1, 4, 4, 6, 6, 6, 2, 7, 14, 14, 14, 14, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 4, 13, 13, 13, 13, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
i),
kuang: "kuang",
speed: 3e3,
reelStopInter: .2,
auto_stop_time: 1,
bounce: !0,
bounceInfo: {
distance: 30,
time: .1
},
commEffect: {
path: "games/Hades/",
win1: [ "win_a", "win_end" ],
win2: [ "win_b", "win_end" ]
},
reelStateInfo: [ {
id: [ 3 ],
mini: 1,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "",
path: "games/Hades/",
reelStopSound: "reelstop",
symbolStopSound: "reelmoon",
antSound: "reelfast",
antSpeed: 3200
}, {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_ani",
path: "games/Hades/",
reelStopSound: "reelstop",
symbolStopSound: "scatter_",
antSound: "reelfast",
antSpeed: 3200
} ],
reelStateInfoFree: [ {
id: [ 3 ],
mini: 1,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "",
path: "games/Hades/",
reelStopSound: "reelstop",
symbolStopSound: "reelmoon",
antSound: "reelfast",
antSpeed: 2e3
}, {
id: [ 2 ],
mini: 2,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_ani",
path: "games/Hades/",
reelStopSound: "reelstop",
symbolStopSound: "scatter_",
antSound: "reelfast",
antSpeed: 2e3
} ],
AddAntiTime: 2,
normalBgm: "ngbgm"
};
t.exports = s;
cc._RF.pop();
}, {} ],
Hades_CollectNode: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c755aeFm2dGS4aTznwCkRuM", "Hades_CollectNode");
cc.Class(function(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}({
extends: cc.Component,
properties: {
zhezhao: {
default: null,
type: cc.Node
},
_unlock: null,
_betup: null,
_needBet: 0,
_click: null,
_betupActive: !0
},
onLoad: function() {
this._unlock = cc.find("B_unlock", this.node);
this._betup = cc.find("Betup", this.node);
this.zhezhao.active = !1;
this._unlock.active = !1;
this._betup.active = !0;
this._betupActive = !0;
this._click = cc.find("click", this._betup);
this._click.on("click", this.onClickNode, this);
},
onDestroy: function() {},
start: function() {},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
isDoubleGame: function() {
return cc.vv.gameData.GetBetIdx() >= this._needBet;
},
show: function() {
if (!this._betupActive) {
this._unlock.active = !1;
this.zhezhao.active = !1;
this._betup.active = !0;
this._betupActive = !0;
cc.vv.gameData.getManage().changeKuang(1);
var e = this._betup.getComponent(sp.Skeleton);
e.setAnimation(0, "Betup_lock", !1);
e.addAnimation(0, "Betup_idle", !0);
e.setCompleteListener(null);
this._click.getComponent(cc.Button).interactable = !0;
cc.vv.gameData.getManage().changeSlot(0);
}
},
showUnLock: function() {
var e = this;
if (this._betupActive) {
cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
this._betup.active = !0;
this._betupActive = !1;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
var t = this._betup.getComponent(sp.Skeleton);
t.setAnimation(0, "Betup_unlock", !1);
t.setCompleteListener(function() {
e._betup.active = !1;
e._unlock.active = !0;
cc.vv.gameData.getManage().changeKuang(3);
e._unlock.getComponent(sp.Skeleton).setAnimation(0, "B_unlock", !1);
e.zhezhao.active = !0;
e.zhezhao.getComponent(sp.Skeleton).setAnimation(0, "B_zhezhao", !1);
t.setCompleteListener(null);
cc.vv.gameData.getManage().changeSlot(1);
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
});
}
},
hide: function() {
this._unlock.active = !1;
this.zhezhao.active = !1;
this._betup.active = !1;
this._betupActive = !1;
cc.vv.gameData.getManage().changeSlot(1);
},
startMove: function() {
if (cc.vv.gameData.GetBetIdx() >= this._needBet) {
this._unlock.active = !1;
this.zhezhao.active = !1;
}
},
setCollectData: function(e) {
this._needBet = e;
this.initCollectNode();
},
onClickNode: function() {
if (!cc.vv.gameData.GetSlotsScript()._isInFree && "idle" == cc.vv.gameData.GetSlotState() && !(cc.vv.gameData.GetAutoModelTime() > 0) && this._needBet <= cc.vv.gameData._deskInfo.mults.length) {
if (cc.vv.gameData.GetBetIdx() >= this._needBet) ; else {
this._click.getComponent(cc.Button).interactable = !1;
cc.vv.gameData.GetBottomScript().SetBetIdx(this._needBet);
}
}
},
initCollectNode: function() {
if (cc.vv.gameData.GetBetIdx() >= this._needBet) {
this.hide();
cc.vv.gameData.getManage().changeKuang(3);
} else this.show();
},
changeCollectNode: function() {
cc.vv.gameData.GetBetIdx() >= this._needBet ? this.showUnLock() : this.show();
}
}, "awaitTime", function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
}));
cc._RF.pop();
}, {} ],
Hades_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "200bdPthJlICIQ3Jik+nsHV", "Hades_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {
_collectNode: null,
_popWin: null,
_qiePing: null,
_slotsArr: [],
_slotsIndex: 0,
_wildTrans: null,
_manage: null
},
getCollectNode: function() {
return this._collectNode;
},
setCollectNode: function(e) {
this._collectNode = e;
},
getPopWinManage: function() {
return this._popWin;
},
setPopWinManage: function(e) {
this._popWin = e;
},
getQiePing: function() {
return this._qiePing;
},
setQiePing: function(e) {
this._qiePing = e;
},
addSlots: function(e) {
this._slotsArr.push(e);
},
setSlotsIndex: function(e) {
this._slotsIndex = e;
},
GetSlotsScript: function() {
return this._slotsArr[this._slotsIndex];
},
GetSlotsScriptById: function(e) {
return this._slotsArr[e];
},
getWildTransition: function() {
return this._wildTrans;
},
setWildTransition: function(e) {
this._wildTrans = e;
},
showSlot: function() {
for (var e = 0; e < this._slotsArr.length; e++) {
var t = this._slotsArr[e];
e == this._slotsIndex ? t.show() : t.hide();
}
},
getManage: function() {
return this._manage;
},
setManage: function(e) {
this._manage = e;
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
Hades_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d4e879jMLlPkbfNSBxmIEE9", "Hades_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {},
InitCommComponent: function() {
this.FitIPad();
this.node.addComponent("BigWin");
var e = cc.find("Canvas").getComponent("LMSlots_Asset_Base");
cc.vv.gameData.SetAssetScript(e);
var t = cc.find("safe_node", this.node), n = cc.vv.gameData.getGameCfg(), o = "LMSlots_Sound";
n.scripts.Sound && (o = n.scripts.Sound);
this.node.addComponent(o);
var i = cc.find("LMSlots_Top", t).addComponent(n.scripts.Top);
i.Init();
var a = cc.find("LMSlots_Bottom", t).addComponent(n.scripts.Bottom);
a.Init();
cc.vv.gameData.SetTopBottomScript(i, a);
var s = cc.find("slots", t).addComponent(n.scripts.Slots);
cc.vv.gameData.addSlots(s);
var r = cc.find("slotsdouble", t).addComponent(n.scripts.Slots);
cc.vv.gameData.addSlots(r);
var c = cc.find("slotsfree", t).addComponent(n.scripts.Slots);
cc.vv.gameData.addSlots(c);
this.node.addComponent("LMSots_OtherSys");
n.puzzleCfg && this.node.addComponent("LMSlots_Puzzle");
var l = t.getComponentInChildren("Hades_CollectNode");
l && cc.vv.gameData.setCollectNode(l);
var u = t.getComponentInChildren("Hades_Pop");
u && cc.vv.gameData.setPopWinManage(u);
var f = t.getComponentInChildren("Hades_qiePing");
f && cc.vv.gameData.setQiePing(f);
var d = t.getComponentInChildren("Hades_wildTransition");
d && cc.vv.gameData.setWildTransition(d);
cc.vv.gameData.setManage(this.node.getComponent("Hades_manage"));
},
StartSlot: function() {
for (var e = cc.vv.gameData._slotsArr, t = 0; t < e.length; t++) {
e[t].Init();
}
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
Hades_Pop: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "84c102hNDJBd6nZka5i7aFH", "Hades_Pop");
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
properties: {},
onLoad: function() {},
start: function() {},
showWin: function() {
this.node.active = !0;
var e = cc.find("popup", this.node);
e.opacity = 0;
cc.tween(e).to(.3, {
opacity: 255
}).start();
cc.find("guochang", this.node).active = !1;
},
showWinEx: function() {
this.node.active = !0;
cc.find("popup", this.node).opacity = 0;
cc.find("guochang", this.node).active = !0;
},
hideWin: function(e) {
var t = this, n = cc.find("popup", this.node);
cc.tween(n).to(.3, {
opacity: 0
}).call(function() {
e && e();
t.node.active = !1;
}).start();
},
hideWinEx: function(e) {
cc.find("guochang", this.node).active = !1;
e && e();
this.node.active = !1;
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showFreeGameTimes: function(e) {
var t = this;
return new Promise(function() {
var e = i(regeneratorRuntime.mark(function e(n, o) {
var i;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgbegin);
t.showWinEx();
(i = cc.find("show_freeGameTimes", t.node)).active = !0;
cc.find("times", i).active = !0;
i.scale = 0;
cc.tween(i).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
e.next = 10;
return t.awaitTime(2.5);

case 10:
cc.tween(i).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
e.next = 13;
return t.awaitTime(.5);

case 13:
t.hideWinEx(function() {
n();
});

case 14:
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
showFreeGameWinCoin: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, a) {
var s, r, c, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgend);
t.showWinEx();
(s = cc.find("show_freeGame_winCoin", t.node)).active = !0;
r = cc.find("coin", s);
c = cc.find("collectBtn", s);
s.scale = 0;
cc.tween(s).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t._startAddCoin = !0;
Global.doRoallNumEff(r, Math.floor(.1 * e), e, 2.5, function() {
t._startAddCoin = !1;
}, null, 0, !0);
c.getComponent(cc.Button).interactable = !0;
c.off("click");
l = function() {
var n = i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
c.getComponent(cc.Button).interactable = !1;
if (t._startAddCoin) {
t._startAddCoin = !1;
r.stopAllActions();
r.getComponent(cc.Label).string = Global.FormatNumToComma(e);
}
n.next = 4;
return t.awaitTime(.2);

case 4:
cc.tween(s).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
n.next = 7;
return t.awaitTime(.5);

case 7:
t.hideWinEx(function() {
o();
});

case 8:
case "end":
return n.stop();
}
}, n);
}));
return function() {
return n.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", i(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
e.next = 3;
return l();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 15:
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
showFreeGameWinFree: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fgtrans);
t.showWin();
(a = cc.find("show_freeGame_winfree", t.node)).active = !0;
if (5 === e) {
cc.find("times5", a).active = !0;
cc.find("times8", a).active = !1;
} else {
cc.find("times8", a).active = !0;
cc.find("times5", a).active = !1;
}
a.scale = 0;
cc.tween(a).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
n.next = 9;
return t.awaitTime(2.5);

case 9:
cc.tween(a).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
n.next = 12;
return t.awaitTime(.5);

case 12:
t.hideWin(function() {
o();
});

case 13:
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
showJackPotWinCoin: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, a) {
var s, r, c, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.JPwin);
t.showWin();
(s = cc.find("show_win_jackpot", t.node)).active = !0;
r = cc.find("coin", s);
c = cc.find("collectBtn", s);
s.scale = 0;
cc.tween(s).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
t._startAddCoin = !0;
Global.doRoallNumEff(r, Math.floor(.1 * e), e, 2.5, function() {
t._startAddCoin = !1;
}, null, 0, !0);
c.getComponent(cc.Button).interactable = !0;
c.off("click");
l = function() {
var n = i(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
c.getComponent(cc.Button).interactable = !1;
if (t._startAddCoin) {
t._startAddCoin = !1;
r.stopAllActions();
r.getComponent(cc.Label).string = Global.FormatNumToComma(e);
}
n.next = 4;
return t.awaitTime(.2);

case 4:
cc.tween(s).to(.5, {
scale: 0
}, {
easing: "backIn"
}).start();
n.next = 7;
return t.awaitTime(.5);

case 7:
t.hideWin(function() {
o();
});

case 8:
case "end":
return n.stop();
}
}, n);
}));
return function() {
return n.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", i(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
e.next = 3;
return l();

case 3:
case "end":
return e.stop();
}
}, e);
})));

case 15:
case "end":
return n.stop();
}
}, n);
}));
return function(e, t) {
return n.apply(this, arguments);
};
}());
}
});
cc._RF.pop();
}, {} ],
Hades_PrizePool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6b13bp1rEpD0pq4pwAO7Tkr", "Hades_PrizePool");
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {},
start: function() {
var e = this;
this._super();
this.scheduleOnce(function() {
if (e.node.y + e.node.height / 2 > cc.winSize.height / 2 - 74) {
var t = e.node.y + e.node.height / 2 - (cc.winSize.height / 2 - 74);
e.node.y -= t;
}
}, 0);
},
ShowNodeLockByNode: function(e, t, n, o, i) {},
setPrizePoxY: function(e) {
var t = cc.find("prizePool_Grand", this.node);
t.y = e ? 45 : 0;
}
});
cc._RF.pop();
}, {
LMSlots_PrizePool_Base: void 0
} ],
Hades_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0f6d4gYfm5Da5vGfWdbHlRK", "Hades_Slots");
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
function s(e, t, n, o, i, a, s) {
try {
var r = e[a](s), c = r.value;
} catch (e) {
n(e);
return;
}
r.done ? t(c) : Promise.resolve(c).then(o, i);
}
function r(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, i) {
var a = e.apply(t, n);
function r(e) {
s(a, o, i, r, c, "next", e);
}
function c(e) {
s(a, o, i, r, c, "throw", e);
}
r(void 0);
});
};
}
cc.Class({
extends: e("LMSlots_Slots_Base"),
properties: {
_canShowStop: !1,
_canStop: !1,
_normalSpine: null,
_stopClick: null
},
Init: function() {
this._topScript = cc.vv.gameData.GetTopScript();
this._bottomScript = cc.vv.gameData.GetBottomScript();
this._cfg = cc.vv.gameData.getGameCfg();
this._col = this._cfg.col;
this._row = this._cfg.row;
"slotsdouble" === this.node.name && (this._row = 5);
"slotsfree" === this.node.name && (this._row = 9);
this.createReels(this._col, this._row);
this._bottomScript.ShowBtnsByState("idle");
this.RegisterEvent();
this.ReconnectShow();
},
onLoad: function() {
this._super();
this._normalSpine = cc.find("reels_bg/theme228_base_frame", this.node);
this._normalSpine.on("click", this.slotsSpine, this);
this._stopClick = cc.find("reels_bg/stopClick", this.node);
this._stopClick.on("click", this.stopSpin, this);
this._stopClick.active = !1;
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
},
show: function() {
this.node.active = !0;
},
hide: function() {
this.node.active = !1;
},
slotsSpine: function() {
this._bottomScript.OnClickSpin();
},
stopSpin: function() {
this._stopClick.active = !1;
this._bottomScript.OnClickStop();
},
CanDoNextRound: function() {
this._super();
this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
ShowWinTrace: function() {
this._super();
},
StartMove: function() {
this._normalSpine.getComponent(cc.Button).interactable = !1;
Global.SlotsSoundMgr.playNormalBgm();
this._bStopRightnow = null;
this._gameInfo = null;
this._topScript.StartMove();
cc.vv.gameData.getCollectNode().startMove();
cc.vv.gameData.ClearOneRoundData();
this.MoveReels(this._reels);
this._stopTime = this.GetStopTime();
this._canShowStop = !0;
this._canStop = !1;
this._bonusSpin = !1;
},
onMsgSpine: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
var o, i, a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._super(e);
o = !1;
if (!cc.vv.gameData.getManage()._isInFree) {
t._gameInfo.freeResult && t._gameInfo.freeResult.freeInfo && t._gameInfo.freeResult.freeInfo.scatterIdx && (o = !0);
i = cc.vv.gameData.GetGameWin();
a = cc.vv.gameData.GetTotalBet();
i / a >= 10 && (o = !0);
o && Global.random(1, 100);
}
t._canStop = !0;

case 4:
case "end":
return n.stop();
}
}, n);
}))();
},
ShowWinCoin: function(e, t, n) {
var o = this;
return new Promise(function() {
var i = r(regeneratorRuntime.mark(function i(a, s) {
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
return r(regeneratorRuntime.mark(function t() {
var n, o, i, a, s, r, c, l, u;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._bottomScript.ShowBtnsByState("moveing_1");
if (!(e._gameInfo.bonusInfo && e._gameInfo.bonusInfo.triggerIdxs.length > 0)) {
t.next = 4;
break;
}
t.next = 4;
return cc.vv.gameData.getWildTransition().showBonus(e._gameInfo.bonusInfo, function() {
for (var t = 0; t < e._gameInfo.bonusInfo.wildCols.length; t++) for (var n = e._gameInfo.bonusInfo.wildCols[t] - 1, o = e._reels[n], i = 0; i < o._symbols.length - 1; i++) {
var a = o._symbols[i];
a && a.changeWild();
}
});

case 4:
e.ShowWinTrace();
n = cc.vv.gameData.GetGameWin();
o = n;
i = !0;
if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
o = cc.vv.gameData.GetGameTotalFreeWin();
i = !1;
}
t.next = 11;
return e.ShowWinCoin(n, o, i);

case 11:
if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
t.next = 23;
break;
}
if (!e._gameInfo.freeResult) {
t.next = 21;
break;
}
if (!e._gameInfo.freeResult.freeInfo || !e._gameInfo.freeResult.freeInfo.scatterIdx) {
t.next = 21;
break;
}
for (a = 0; a < e._gameInfo.freeResult.freeInfo.scatterIdx.length; a++) {
s = e._gameInfo.freeResult.freeInfo.scatterIdx[a];
(r = e.GetSymbolByIdx(Number(s))) && r.playWinAnimation();
}
if (!(e._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
t.next = 21;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.retrigger);
t.next = 19;
return e.awaitTime(2);

case 19:
t.next = 21;
return e.CheckFreeEnterFreeGame(e._gameInfo.freeResult.freeInfo.freeCnt);

case 21:
t.next = 32;
break;

case 23:
if (!e._gameInfo.freeResult) {
t.next = 32;
break;
}
if (!e._gameInfo.freeResult.freeInfo || !e._gameInfo.freeResult.freeInfo.scatterIdx) {
t.next = 32;
break;
}
for (c = 0; c < e._gameInfo.freeResult.freeInfo.scatterIdx.length; c++) {
l = e._gameInfo.freeResult.freeInfo.scatterIdx[c];
(u = e.GetSymbolByIdx(Number(l))) && u.playWinAnimation();
}
if (!(e._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
t.next = 32;
break;
}
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.triggering);
t.next = 30;
return e.awaitTime(2);

case 30:
t.next = 32;
return e.CheckEnterFreeGame(e._gameInfo.freeResult.freeInfo.freeCnt);

case 32:
if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
t.next = 35;
break;
}
t.next = 35;
return e.CheckExitFreeGame();

case 35:
e.CanDoNextRound();

case 36:
case "end":
return t.stop();
}
}, t);
}))();
},
ReconnectShow: function() {
return r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
case "end":
return e.stop();
}
}, e);
}))();
},
CheckExitFreeGame: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(n, o) {
var i, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
i = cc.vv.gameData.GetGameTotalFreeWin();
a = i;
t.next = 5;
return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(i);

case 5:
e.ShowGameview(!1);
e.clearSlots();
cc.vv.gameData.getCollectNode().isDoubleGame() ? cc.vv.gameData.getManage().changeSlot(1) : cc.vv.gameData.getManage().changeSlot(0);
e.ShowFreeTimes(!1);
cc.vv.gameData.SetTotalFree(0);
t.next = 12;
return e.ShowWinCoin(i, a, !0);

case 12:
Global.SlotsSoundMgr.playNormalBgm(!0);
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
}()));

case 1:
case "end":
return t.stop();
}
}, t);
}))();
},
CheckFreeEnterFreeGame: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(o, i) {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
n.next = 2;
return cc.vv.gameData.getPopWinManage().showFreeGameWinFree(e);

case 2:
n.next = 4;
return t.awaitTime(1);

case 4:
o();

case 5:
case "end":
return n.stop();
}
}, n);
}));
return function(e, t) {
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
CheckEnterFreeGame: function(e) {
var t = this;
return r(regeneratorRuntime.mark(function n() {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
return n.abrupt("return", new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(o, i) {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
n.next = 3;
return cc.vv.gameData.getPopWinManage().showFreeGameTimes(e);

case 3:
t.ShowGameview(!0);
cc.vv.gameData.getManage().changeSlot(2);
Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.fgbgm);
t.ShowFreeTimes(!0);
o();

case 8:
case "end":
return n.stop();
}
}, n);
}));
return function(e, t) {
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
ShowGameview: function(e) {
cc.vv.gameData.getManage()._isInFree = e;
if (e) cc.vv.gameData.GetTotalFree(), cc.vv.gameData.GetFreeTime();
cc.find("Canvas/safe_node/bg").getComponent("ImgSwitchCmp").setIndex(e ? 1 : 0);
cc.vv.gameData.showOtherSysNode(!e);
cc.vv.gameData.getManage().setPrizePoxY(e);
},
ShowFreeTimes: function(e) {
if (e) {
var t = cc.vv.gameData.GetTotalFree(), n = cc.vv.gameData.GetFreeTime();
this._bottomScript.ShowFreeModel(!0, t - n, t);
} else {
this._bottomScript.ShowFreeModel(!1);
this._bottomScript.showTotalBet(!0);
}
},
Backup: function() {
this._super();
},
Resume: function() {
this.clearSlots();
this._super();
},
clearSlots: function() {
for (var e = 0; e < this._reels.length; e++) for (var t = this._reels[e], n = 0; n < t._symbols.length; n++) {
var o = t._symbols[n];
o.setAnimationToTop(!1);
o.ShowKuang(!1);
o.stopWinTweenAction();
}
},
update: function(e) {
if (this._stopTime > 0) {
this._stopTime = this._stopTime - e;
if (this._stopTime <= 0) if (this.CanStopSlot()) {
this._canShowStop && this._bottomScript.ShowBtnsByState("moveing_2");
for (var t = 0; t < this._reels.length; t++) {
var n = this._reels[t], o = this.GetReelStopInter(t);
n.StopMove(o);
}
} else this._stopTime = e;
}
},
CanStopSlot: function() {
return this._canStop;
},
onEventTotalbetUpdated: function(e) {
cc.vv.gameData.getCollectNode().changeCollectNode();
},
SetReelStateInfo: function(e) {
var t = this, n = this._cfg.reelStateInfo;
cc.vv.gameData.getManage()._isInFree && (n = this._cfg.reelStateInfoFree);
if (n) {
for (var i = [], a = 0; a < e.length; a++) {
var s = e[a], r = a % this._col;
i[r] || (i[r] = []);
i[r].push(s);
}
var c, l = 0, u = o(n);
try {
var f = function() {
var e = c.value, n = Global.copy(e);
n.isStop = !1;
n.isAnt = !1;
for (var o = n.mini, a = Global.copy(n.counts), s = 0, r = !0, u = 0; u < i.length; u++) {
var f = t._reels[u], d = i[u];
n.isStop = !1;
n.isAnt = !1;
s >= o - 1 && n.counts[u] > 0 && r && (n.isAnt = !0);
var h = d.reduce(function(e, t) {
return n.id.includes(t) ? e + 1 : e + 0;
}, 0);
s += h;
a.shift();
var m = (a.length > 0 ? a.reduce(function(e, t) {
return e + t;
}) : 0) + s;
if (h > 0 && m >= o && r) {
n.isStop = !0;
if (2 === e.id[0]) {
l++;
n.symbolStopSound = e.symbolStopSound + l;
}
}
n.continuous && n.counts[u] > 0 && 0 == h && (r = !1);
f.AddReelStateInfo(Global.copy(n));
}
};
for (u.s(); !(c = u.n()).done; ) f();
} catch (e) {
u.e(e);
} finally {
u.f();
}
}
},
SetSlotsResult: function(e) {
for (var t = e.length / this._col, n = [], o = 0; o < e.length; o++) {
Math.floor(o / t);
var i = o % this._col;
20 === e[o] && (e[o] = Global.random(4, 14));
if (this._cfg.symbol[e[o]]) {
var a = {};
a.sid = e[o];
n[i] || (n[i] = []);
n[i].unshift(a);
}
}
for (var s = 0; s < this._reels.length; s++) {
var r = this._reels[s], c = n[s];
r.SetResult(c);
}
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Hades_manage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "be0fe4zh3lEOL3GtVexMMjW", "Hades_manage");
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
_prizePool: null,
_isInFree: !1,
_kuang1: null,
_kuang2: null,
_allofakindi: null,
_man: null
},
onLoad: function() {
this._prizePool = cc.find("safe_node/LMSlots_PrizePool_1", this.node).getComponent("Hades_PrizePool");
this._kuang1 = cc.find("safe_node/kuang1", this.node);
this._kuang2 = cc.find("safe_node/kuang2", this.node);
this._allofakindi = cc.find("safe_node/quanpan", this.node);
this._allofakindi.active = !1;
this._man = cc.find("safe_node/hadishi", this.node);
},
start: function() {
this.ReconnectShow();
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
ReconnectShow: function() {
var e = this;
return i(regeneratorRuntime.mark(function t() {
var n;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
cc.vv.gameData.getCollectNode().setCollectData(cc.vv.gameData._deskInfo.needBet);
if (cc.vv.gameData.GetFreeTime()) {
e.changeSlot(2);
Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.fgbgm);
cc.vv.gameData.GetSlotsScript().ShowGameview(!0);
cc.vv.gameData.GetSlotsScript().ShowFreeTimes(!0);
n = cc.vv.gameData.GetTotalFreeWin();
cc.vv.gameData.GetBottomScript().SetWin(n);
cc.vv.gameData.GetSlotsScript().CanDoNextRound();
} else {
cc.vv.gameData.GetSlotsScript().ShowGameview(!1);
cc.vv.gameData.GetSlotsScript().ShowFreeTimes(!1);
cc.vv.gameData.getCollectNode().isDoubleGame() ? e.changeSlot(1) : e.changeSlot(0);
}

case 3:
case "end":
return t.stop();
}
}, t);
}))();
},
changeKuang: function(e) {
switch (e) {
case 1:
this._kuang1.getComponent(sp.Skeleton).setAnimation(0, "kuang_NG", !0);
this._kuang2.getComponent(sp.Skeleton).setAnimation(0, "kuang_NG", !0);
break;

case 2:
this._kuang1.getComponent(sp.Skeleton).setAnimation(0, "kuang_NG2", !0);
this._kuang2.getComponent(sp.Skeleton).setAnimation(0, "kuang_NG2", !0);
break;

case 3:
this._kuang1.getComponent(sp.Skeleton).setAnimation(0, "kuang_FG", !0);
this._kuang2.getComponent(sp.Skeleton).setAnimation(0, "kuang_FG", !0);
break;

case 4:
this._kuang1.getComponent(sp.Skeleton).setAnimation(0, "kuang_FG2", !0);
this._kuang2.getComponent(sp.Skeleton).setAnimation(0, "kuang_FG2", !0);
}
},
changeSlot: function(e) {
cc.vv.gameData.setSlotsIndex(e);
cc.vv.gameData.showSlot();
if (2 === e) {
cc.vv.gameData.getCollectNode().node.active = !1;
this._man.active = !1;
} else {
cc.vv.gameData.getCollectNode().node.active = !0;
this._man.active = !0;
}
},
PausePool: function(e) {
for (var t = [], n = 0; n < e.length; n++) {
var o = e[n];
t.push({
prizeType: n,
pauseNum: o
});
}
this._prizePool.PausePool(t);
},
ResumePausePool: function() {
this._prizePool.ResumePausePool();
},
setPrizePoxY: function(e) {
this._prizePool.setPrizePoxY(e);
},
showAllOfAKindi: function() {
var e = this;
this._allofakindi.active = !0;
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Voice_AllOfAKind);
var t = this._allofakindi.getComponent(sp.Skeleton);
t.setCompleteListener(function() {
e._allofakindi.active = !1;
t.setCompleteListener(null);
});
}
});
cc._RF.pop();
}, {} ],
Hades_qiePing: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8145fHm79dMcLWUfxOyaBsc", "Hades_qiePing");
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
qiepin: {
default: null,
type: cc.Node
}
},
onLoad: function() {},
onDestroy: function() {},
start: function() {},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showQP: function(e) {
var t = this;
return new Promise(function() {
var n = i(regeneratorRuntime.mark(function n(o, i) {
var a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t.qiepin.active = !0;
(a = t.qiepin.getComponent(sp.Skeleton)).setAnimation(0, "FG_guochang_intro", !1);
a.setCompleteListener(function() {
t.qiepin.active = !1;
o();
a.setCompleteListener(null);
});
n.next = 6;
return t.awaitTime(.5);

case 6:
e && e();

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
showDaJiangYuGao: function() {
var e = this;
return new Promise(function() {
var t = i(regeneratorRuntime.mark(function t(n, o) {
var i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bigAward);
e.qiepin.active = !0;
(i = e.qiepin.getComponent(sp.Skeleton)).setAnimation(0, "dajiangyugao", !1);
i.setCompleteListener(function() {
e.qiepin.active = !1;
n();
i.setCompleteListener(null);
});

case 5:
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
Hades_reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0f14c1XV0hF3IxLkCUOHVIH", "Hades_reel");
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
start: function() {},
OnReelSpinEnd: function() {
this._reelState = [];
var e = cc.vv.gameData.GetSlotsScript();
e.OnReelSpinEnd(this._reelIdx);
if (!cc.vv.gameData.GetSlotsScript()._bonusSpin) {
var t = e.GetLastStopReelIdx();
this._reelIdx == t && e.OnSpinEnd();
}
},
OnReelBounsActionBefore: function() {
cc.vv.gameData.GetSlotsScript().OnReelBounsActionBefore(this._reelIdx);
this.playReelStop();
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveBefore();
},
OnReelBounsActionDeep: function() {
this.ShowAntiEffect(!1);
cc.vv.gameData.GetSlotsScript().OnReelBounsActionDeep(this._reelIdx);
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveDeep();
},
OnReelBounsActionEnd: function() {
cc.vv.gameData.GetSlotsScript().OnReelBounsActionEnd(this._reelIdx);
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) this._symbols[e].StopMoveEnd(); else cc.log("回弹结束，数据已经被清空了");
this.OnReelSpinEnd();
},
playReelStop: function() {
var e = this._cfg.reelStateInfo;
cc.vv.gameData.getManage()._isInFree && (e = this._cfg.reelStateInfoFree);
if (this._originResult) for (var t = 0; t < this._originResult.length; t++) {
var n, i = this._symbols[t], a = o(this._reelState);
try {
for (a.s(); !(n = a.n()).done; ) {
var s = n.value;
s.isStop && s.id.includes(i.GetShowId()) ? i.playStopAnimation() : i.playidleAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
if (e && e[0]) {
var r, c = "", l = "", u = !1, f = o(this._reelState);
try {
for (f.s(); !(r = f.n()).done; ) {
var d = r.value;
if (d.isStop) {
l = d.symbolStopSound ? d.symbolStopSound : "";
u = !0;
} else c = d.reelStopSound ? d.reelStopSound : "";
}
} catch (e) {
f.e(e);
} finally {
f.f();
}
u && (c = l);
var h = e[0].path;
h || (h = cc.vv.gameData.getGameDir());
cc.vv.AudioManager.playEff(h, c, !0);
}
},
playAntiAnimation: function() {
var e = this._cfg.reelStateInfo;
cc.vv.gameData.getManage()._isInFree && (e = this._cfg.reelStateInfoFree);
var t = !1;
if (e && e[0]) {
var n, i = o(this._reelState);
try {
for (i.s(); !(n = i.n()).done; ) {
var a = n.value;
if (a.isAnt && a.antiNode) {
this.ShowAntiEffect(!0, a.antiNode);
var s = a.path;
s || (s = cc.vv.gameData.getGameDir());
cc.vv.AudioManager.playEff(s, a.antSound, !0);
var r = a.antSpeed;
r && (r *= this.GetTimeScale());
this._speed = r || this._speed;
t = !0;
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
}
return t;
},
ShowAntiEffect: function(e, t) {
if (0 == e) {
if (this._cfg.reelStateInfo) {
var n, i = o(this._cfg.reelStateInfo);
try {
for (i.s(); !(n = i.n()).done; ) {
var a = n.value, s = cc.find("mask/" + a.antiNode, this.node);
s && s.active && (s.active = !1);
this._stopRightNow && cc.vv.AudioManager.stopEffectByName(a.antSound);
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
}
} else {
var r = cc.find("mask/" + t, this.node);
r ? r.active = e : cc.log("未找到加速节点：mask/node_anti");
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Hades_sound: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "39fd6I+75hGxpOi2J3JvZkX", "Hades_sound");
cc.Class({
extends: e("LMSlots_Sound"),
properties: {
soundPath: {
default: "games/Hades/",
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
default: "",
override: !0
},
reel_stop: {
default: "",
override: !0
},
scatter_stop: {
default: "",
override: !0
},
AllOfAKind: "AllOfAKind",
bigAward: "bigAward",
fgbegin: "fgbegin",
fgbgm: "fgbgm",
fgend: "fgend",
fgtrans: "fgtrans",
JPwin: "JPwin",
ngbgm: "ngbgm",
reelfast: "reelfast",
reelmoon: "reelmoon",
reelscatr: "reelscatr",
reelstop: "reelstop",
retrigger: "retrigger",
scatter_1: "scatter_1",
scatter_2: "scatter_2",
scatter_3: "scatter_3",
scatter_4: "scatter_4",
scatter_5: "scatter_5",
triggering: "triggering",
unlock: "unlock",
Voice_AllOfAKind: "Voice_AllOfAKind",
Voice_PowerZone: "Voice_PowerZone",
wildreel1: "wildreel1",
wildreel3: "wildreel3"
}
});
cc._RF.pop();
}, {
LMSlots_Sound: void 0
} ],
Hades_symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9fb57USRYdDBYBjHvoonkJg", "Hades_symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
start: function() {},
SetSymbolIdx: function(e) {
this._symbolIdx = e;
2 === this._id ? this.node.zIndex = 150 - e : this.node.zIndex = 100 - e;
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
if (i) {
i.setAnimation(0, t.symbol[e].stop_ani.name, !1);
t.symbol[e].idle_ani && i.addAnimation(0, t.symbol[e].idle_ani.name, !0);
}
}
}
},
playidleAnimation: function() {
var e = !1, t = this._id, n = cc.vv.gameData.getGameCfg();
if (n.symbol[t] && n.symbol[t].win_node && n.symbol[t].idle_ani) {
this._state = "idle";
this._showNode && (this._showNode.active = !1);
var o = this.setAnimationToTop(!0);
o.active = !0;
var i = cc.find(n.symbol[t].win_node, o);
i.active = !0;
if ("" != n.symbol[t].idle_ani.name) {
o.zIndex = n.symbol[t].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
e = !0;
var a = i.getComponent(sp.Skeleton);
a && a.setAnimation(0, n.symbol[t].idle_ani.name, !0);
}
}
return e;
},
changeWild: function() {
this.setAnimationToTop(!1);
2 === this._id ? this.ShowById(102) : this.ShowById(1);
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ],
Hades_wildTransition: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3bf27ZnlnxB66+9Jyg3JSQ8", "Hades_wildTransition");
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
_transitionMap: null
},
onLoad: function() {
this._transitionMap = {};
this._transitionMap.L_Blue1x3 = cc.find("L_Blue1x3", this.node);
this._transitionMap.L_Blue1x4 = cc.find("L_Blue1x4", this.node);
this._transitionMap.L_Blue1x9 = cc.find("L_Blue1x9", this.node);
this._transitionMap.L_Red3x3 = cc.find("L_Red3x3", this.node);
this._transitionMap.L_Red3x9 = cc.find("L_Red3x9", this.node);
this._transitionMap.L_Red3x4x5 = cc.find("L_Red3x4x5", this.node);
this._transitionMap.R_Blue1x3 = cc.find("R_Blue1x3", this.node);
this._transitionMap.R_Blue1x4 = cc.find("R_Blue1x4", this.node);
this._transitionMap.R_Blue1x9 = cc.find("R_Blue1x9", this.node);
this._transitionMap.R_Red3x3 = cc.find("R_Red3x3", this.node);
this._transitionMap.R_Red3x9 = cc.find("R_Red3x9", this.node);
this._transitionMap.R_Red3x4x5 = cc.find("R_Red3x4x5", this.node);
this._transitionMap.Red5x3 = cc.find("Red5x3", this.node);
this._transitionMap.Red5x5x5 = cc.find("Red5x5x5", this.node);
this._transitionMap.Red5x9 = cc.find("Red5x9", this.node);
},
onDestroy: function() {},
start: function() {},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
},
showTransition: function(e) {
var t = this._transitionMap[e];
if (t) {
t.active = !0;
var n = t.getComponent(sp.Skeleton);
switch (e) {
case "L_Blue1x3":
case "L_Blue1x4":
case "L_Blue1x9":
case "R_Blue1x3":
case "R_Blue1x4":
case "R_Blue1x9":
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wildreel1);
break;

case "L_Red3x3":
case "L_Red3x9":
case "L_Red3x4x5":
case "R_Red3x3":
case "R_Red3x9":
case "R_Red3x4x5":
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wildreel3);
break;

case "Red5x3":
case "Red5x5x5":
case "Red5x9":
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.AllOfAKind);
cc.vv.gameData.getManage().showAllOfAKindi();
}
n.setCompleteListener(function() {
t.active = !1;
});
}
},
showBonus: function(e, t) {
var n = this;
return new Promise(function() {
var o = i(regeneratorRuntime.mark(function o(i, a) {
var s, r, c, l, u, f, d;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Voice_PowerZone);
o.next = 3;
return n.awaitTime(.2);

case 3:
s = e.wildCols.includes(1);
r = e.wildCols.includes(2);
c = e.wildCols.includes(3);
l = e.wildCols.includes(4);
u = e.wildCols.includes(5);
f = cc.vv.gameData.getManage()._isInFree;
d = cc.vv.gameData.getCollectNode().isDoubleGame();
if (f) if (s && r && c && l && u) n.showTransition("Red5x9"); else if (s && r && c && l) {
n.showTransition("L_Red3x9");
n.showTransition("R_Blue1x9");
} else if (r && c && l && u) {
n.showTransition("L_Blue1x9");
n.showTransition("R_Red3x9");
} else if (s && r && c) n.showTransition("L_Red3x9"); else if (c && l && u) n.showTransition("R_Red3x9"); else if (r && l) {
n.showTransition("R_Blue1x9");
n.showTransition("L_Blue1x9");
} else r ? n.showTransition("L_Blue1x9") : l && n.showTransition("R_Blue1x9"); else if (d) if (s && r && c && l && u) n.showTransition("Red5x5x5"); else if (s && r && c && l) {
n.showTransition("L_Red3x4x5");
n.showTransition("R_Blue1x4");
} else if (r && c && l && u) {
n.showTransition("L_Blue1x4");
n.showTransition("R_Red3x4x5");
} else if (s && r && c) n.showTransition("L_Red3x4x5"); else if (c && l && u) n.showTransition("R_Red3x4x5"); else if (r && l) {
n.showTransition("R_Blue1x4");
n.showTransition("L_Blue1x4");
} else r ? n.showTransition("L_Blue1x4") : l && n.showTransition("R_Blue1x4"); else if (s && r && c && l && u) n.showTransition("Red5x3"); else if (s && r && c && l) {
n.showTransition("L_Red3x3");
n.showTransition("R_Blue1x3");
} else if (r && c && l && u) {
n.showTransition("L_Blue1x3");
n.showTransition("R_Red3x3");
} else if (s && r && c) n.showTransition("L_Red3x3"); else if (c && l && u) n.showTransition("R_Red3x3"); else if (r && l) {
n.showTransition("R_Blue1x3");
n.showTransition("L_Blue1x3");
} else r ? n.showTransition("L_Blue1x3") : l && n.showTransition("R_Blue1x3");
o.next = 13;
return n.awaitTime(.5);

case 13:
t && t();
o.next = 16;
return n.awaitTime(2);

case 16:
i();

case 17:
case "end":
return o.stop();
}
}, o);
}));
return function(e, t) {
return o.apply(this, arguments);
};
}());
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Hades_Bottom", "Hades_Cfg", "Hades_CollectNode", "Hades_GameData", "Hades_Logic", "Hades_Pop", "Hades_PrizePool", "Hades_Slots", "Hades_manage", "Hades_qiePing", "Hades_reel", "Hades_sound", "Hades_symbol", "Hades_wildTransition" ]);