window.__require = function e(t, n, o) {
function a(i, c) {
if (!n[i]) {
if (!t[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var u = n[i] = {
exports: {}
};
t[i][0].call(u.exports, function(e) {
return a(t[i][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < o.length; i++) a(o[i]);
return a;
}({
Bader_Cfg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b12a6d+mU5NF6cz1nr4ei2M", "Bader_Cfg");
var o;
function a(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
var r = {
symbol: (o = {}, a(o, 1, {
node: "s1",
win_node: "w1",
win_ani: {
name: "actionframe",
name2: "actionframe2",
name3: "actionframe3",
zIndex: 300
}
}), a(o, 2, {
node: "s2",
win_node: "w2",
stop_ani: {
name: "buling",
zIndex: 100
},
trigger_ani: {
name: "actionframe",
zIndex: 300
}
}), a(o, 4, {
node: "s4",
win_node: "w4",
win_ani: {
name: "actionframe",
zIndex: 300
}
}), a(o, 5, {
node: "s5",
win_node: ""
}), a(o, 6, {
node: "s6",
win_node: ""
}), a(o, 7, {
node: "s7",
win_node: ""
}), a(o, 8, {
node: "s8",
win_node: ""
}), a(o, 9, {
node: "s9",
win_node: ""
}), a(o, 10, {
node: "s10",
win_node: ""
}), a(o, 11, {
node: "s11",
win_node: ""
}), a(o, 12, {
node: "s12",
win_node: ""
}), a(o, 13, {
node: "s13",
win_node: ""
}), a(o, 14, {
node: "s14",
win_node: ""
}), o),
bonusId: [ 3 ],
scripts: {
Top: "LMSlots_Top_Base",
Bottom: "LMSlots_Bottom_Base",
Slots: "Bader_Slots",
Reels: "Bader_Reel",
Symbols: "Bader_Symbol"
},
col: 5,
row: 6,
symbolPrefab: "LMSlots_Symbol",
symbolSize: {
height: 94
},
randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
kuang: "kuang",
speed: 3e3,
autoModelDelay: .5,
reelStopInter: .2,
auto_stop_time: 1,
bounceInfo: {
distance: 30,
time: .1
},
normalBgm: "music_Kangaroos_bg",
helpItems: [ "games/Bader/prefab/help_node/LMSlots_Help_item1", "games/Bader/prefab/help_node/LMSlots_Help_item2", "games/Bader/prefab/help_node/LMSlots_Help_item3", "games/Bader/prefab/help_node/LMSlots_Help_item4" ],
commEffect: {
path: "games/Bader/",
win1: [ "sound_Kangaroos_win_1", "" ],
win2: [ "sound_Kangaroos_win_2", "" ],
win3: [ "sound_Kangaroos_win_3", "" ],
win4: [ "sound_Kangaroos_win_4", "" ]
},
AddAntiTime: 1.8,
reelStateInfo: [ {
id: [ 2 ],
mini: 3,
counts: [ 1, 1, 1, 1, 1 ],
antiNode: "node_anti",
path: "games/Bader/",
reelStopSound: "music_Kangaroos_reel_stop",
symbolStopSound: "sound_Kangaroos_scatter_down_",
antSound: "",
antSpeed: 2e3
} ]
};
t.exports = r;
cc._RF.pop();
}, {} ],
Bader_FreeWheel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "93b17OgG2FNspm2l1WsYv8L", "Bader_FreeWheel");
function o(e, t, n, o, a, r, i) {
try {
var c = e[r](i), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, r) {
var i = e.apply(t, n);
function c(e) {
o(i, a, r, c, s, "next", e);
}
function s(e) {
o(i, a, r, c, s, "throw", e);
}
c(void 0);
});
};
}
function r(e) {
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
if ("string" == typeof e) return c(e, t);
var n = Object.prototype.toString.call(e).slice(8, -1);
"Object" === n && e.constructor && (n = e.constructor.name);
return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
}
}
function c(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
return o;
}
var s = 1, l = 2, u = 3, _ = 4, p = 5;
cc.Class({
extends: cc.Component,
properties: {
speed: {
default: 1,
tooltip: "旋转速度"
},
maxSpeed: {
default: 30,
tooltip: "最大速度"
},
count: {
default: 3,
tooltip: "需要转几轮"
},
minSpeed: {
default: 1,
tooltip: "最小速度"
},
speedOffset: {
default: .25,
tooltip: "速度变化值"
},
_startMove: !1,
_needStop: !1,
_backMove: !1,
_resultItem: null,
_result: null,
_rtype: 1,
_items: [],
_canClick: !1,
_itemsHeight: 0
},
onLoad: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
update: function(e) {
if (this._startMove) {
if (this._needStop) {
this.speed -= this.speedOffset;
this.speed <= this.minSpeed && (this.speed = this.minSpeed);
} else {
this.speed += this.speedOffset;
this.speed >= this.maxSpeed && (this.speed = this.maxSpeed);
}
0 === this.count && this._resultItem.y <= 3 * this._resultItem.height && (this._needStop = !0);
if (this._needStop && this._resultItem.y < 0) {
this._startMove = !1;
this._backMove = !0;
}
var t, n = r(this._items);
try {
for (n.s(); !(t = n.n()).done; ) {
var o = t.value;
if (o.y <= this._bottomPosY) {
o.y += this._itemsHeight;
if (o === this._resultItem) {
this.count--;
this.count <= 0 && (this.count = 0);
}
}
o.y -= this.speed;
}
} catch (e) {
n.e(e);
} finally {
n.f();
}
}
if (this._backMove) {
var a, i = r(this._items);
try {
for (i.s(); !(a = i.n()).done; ) {
a.value.y += this.minSpeed;
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
if (this._resultItem.y > -1 && this._resultItem.y < 1) {
this._backMove = !1;
this.exitWheelGame();
}
}
},
onSendSeq: function(e) {
var t = {
c: MsgId.SLOT_SUBGAME_DATA
};
t.gameid = cc.vv.gameData.getGameId();
t.data = {
rtype: this._rtype
};
cc.vv.NetManager.send(t, !0);
},
onRcvSubGameAction: function(e) {
cc.log(e);
if (200 === e.code && e.data && e.data.rtype === this._rtype) {
this._result = e.data;
this._resultItem = this._items[this._result.wheelId - 1];
this._startMove = !0;
cc.vv.gameData.setFreeGameWheel(this._result.freeGameWheel);
}
},
Init: function() {
var e = this;
this._wheelNode = cc.find("safe_node/freeWheel", this.node);
this._wheelNode.active = !1;
this._rollNode1 = cc.find("bg/rollNode1", this._wheelNode);
this._rollNode2 = cc.find("bg/rollNode2", this._wheelNode);
this._node_shou = cc.find("bg/node_shou", this._wheelNode);
this._node_shou.active = !1;
var t = cc.find("bg/btn_click", this._wheelNode);
t.off("click");
t.on("click", function() {
t.stopAllActions();
e.onClickSpin();
});
},
onClickSpin: function() {
if (this._canClick) {
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
this._canClick = !1;
this.playShouAnim(!1);
this.onSendSeq();
}
},
enterFreeWheel: function(e) {
var t = this;
return new Promise(function() {
var n = a(regeneratorRuntime.mark(function n(o, a) {
var r, i, c, p, f, m, d, h, v, g, S, b;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._wheelData = e;
t._wheelNode.active = !0;
t.reset();
r = cc.vv.gameData.GetBetIdx();
i = cc.vv.gameData.getNeedBet();
t._rollNode1.active = r < i;
t._rollNode2.active = r >= i;
c = r < i ? t._rollNode1 : t._rollNode2;
t._items = [];
t._itemsHeight = 0;
for (p = 0; p < c.childrenCount; p++) if (f = cc.find("item" + (p + 1), c)) {
t._items.push(f);
t._itemsHeight += f.height;
}
t._bottomPosY = -700;
m = cc.vv.gameData.getCollectInfos();
d = m[r - 1];
h = e.wheel;
for (v = 0; v < h.length; v++) {
g = h[v];
S = cc.find("item" + (v + 1), c);
if (g.type === l) cc.find("node_lbls/lbl_cnt", S).getComponent(cc.Label).string = d.blue.freeCnt; else if (g.type === u) cc.find("node_lbls/lbl_cnt", S).getComponent(cc.Label).string = d.purple.freeCnt; else if (g.type === _) cc.find("node_lbls/lbl_cnt", S).getComponent(cc.Label).string = d.red.freeCnt; else if (g.type === s) {
cc.find("tit", S).getComponent("ImgSwitchCmp").setIndex(g.jackpotId - 2);
cc.find("lbl", S).getComponent(cc.Label).string = Global.convertNumToShort(e.jackpotValues[g.jackpotId - 1], null, 0);
}
}
n.next = 18;
return cc.vv.gameData.awaitTime(.5);

case 18:
t._canClick = !0;
t.playShouAnim(!0);
b = cc.find("bg/btn_click", t._wheelNode);
cc.vv.gameData.checkAutoPlay(b, t.onClickSpin.bind(t));
t._successCallback = o;

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
exitWheelGame: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n, o, a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n = e._wheelData.wheel[e._result.wheelId - 1];
o = "";
a = "sound_Kangaroos_reward_diamond";
if (n.type === s) {
o = "item_zs_win_jp";
a = "sound_Kangaroos_reward_jackpot";
} else n.type === l ? o = "item_zs_win_blue" : n.type === u ? o = "item_zs_win_pruple" : n.type === _ ? o = "item_zs_win_red" : n.type === p && (o = "item_zs_win_normal");
e._resultItem.getComponent(cc.Animation).play(o);
Global.SlotsSoundMgr.playEffect(a);
t.next = 8;
return cc.vv.gameData.awaitTime(2);

case 8:
e._wheelNode.active = !1;
e._successCallback && e._successCallback();

case 10:
case "end":
return t.stop();
}
}, t);
}))();
},
playShouAnim: function(e) {
var t = cc.find("tip_shou", this._node_shou);
if (e) {
this._node_shou.active = !0;
cc.tween(t).repeatForever(cc.tween().call(function() {
t.setScale(1);
t.setPosition(cc.v2(0, -20));
}).to(.3, {
opacity: 255
}).to(.8, {
position: cc.v2(0, 160)
}).call(function() {
t.setScale(-1);
t.setPosition(cc.v2(0, 180));
}).to(.8, {
position: cc.v2(0, 0)
}).call(function() {
t.setScale(1);
t.setPosition(cc.v2(0, -20));
}).to(.8, {
position: cc.v2(0, 160)
}).call(function() {
t.setScale(-1);
t.setPosition(cc.v2(0, 180));
}).to(.8, {
position: cc.v2(0, 0)
}).to(.3, {
opacity: 0
}).delay(3)).start();
} else {
this._node_shou.active = !1;
t.stopAllActions();
}
},
reset: function() {
this._startMove = !1;
this.speed = 10;
this._needStop = !1;
this.count = 2;
this._backMove = !1;
},
onDestroy: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
awaitTime: function(e) {
var t = this;
return new Promise(function(n, o) {
t.scheduleOnce(function() {
n();
}, e);
});
}
});
cc._RF.pop();
}, {} ],
Bader_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "00cae3aEPlDLrFZthCLIOKh", "Bader_GameData");
cc.Class({
extends: e("LMSlots_GameData_Base"),
properties: {},
start: function() {},
init: function(e, t, n) {
cc.log(e);
this._freeGameWheel = e.freeGameWheel;
this._storeInfo = e.storeInfo;
this._collectInfos = e.collectInfos;
this._watermarkInfo = e.watermarkInfo;
e.freeGameInfo && (this._freeMult = e.freeGameInfo.mult);
this._freeWinCoin = e.freeWinCoin;
this._super(e, t, n);
},
OnRcvNetSpine: function(e) {
cc.log(e);
if (200 == e.code) {
this._freeGameWheel = e.freeGameWheel;
this._storeInfo = e.storeInfo;
this._watermarkInfo = e.watermarkInfo;
this._wildMult = e.wildMult;
this._freeWinCoin = e.freeWinCoin;
e.collectInfo && this.setCollectInfos(this.GetBetIdx(), e.collectInfo);
}
this._super(e);
},
setPopupScript: function(e) {
this._popScp = e;
},
getPopupScript: function() {
return this._popScp;
},
setFreeWheelScript: function(e) {
this._freeWheelScp = e;
},
getFreeWheelScript: function() {
return this._freeWheelScp;
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
getCollectInfos: function() {
return this._collectInfos;
},
setCollectInfos: function(e, t) {
this._collectInfos[e - 1] = t;
},
setStoreInfo: function(e) {
this._storeInfo = e;
},
getStoreInfo: function() {
return this._storeInfo;
},
getWatermarkInfo: function() {
return this._watermarkInfo;
},
setFreeMult: function(e) {
this._freeMult = e;
},
getFreeMult: function() {
return this._freeMult;
},
setFreeGameWheel: function(e) {
this._freeGameWheel = e;
},
getFreeGameWheel: function() {
return this._freeGameWheel;
},
getWildMult: function() {
return this._wildMult;
},
setIsFreeGame: function(e) {
this._isFreeGame = e;
},
isFreeGame: function() {
return this._isFreeGame;
},
getFreeWinCoin: function() {
return this._freeWinCoin;
}
});
cc._RF.pop();
}, {
LMSlots_GameData_Base: void 0
} ],
Bader_Logic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "09a74l96Z5KfLvcadE25ZYT", "Bader_Logic");
cc.Class({
extends: e("LMSlots_Logic_Base"),
properties: {},
InitCommComponent: function() {
this._super();
var e = this.node.addComponent("Bader_Popup");
e.Init();
cc.vv.gameData.setPopupScript(e);
var t = this.node.addComponent("Bader_FreeWheel");
t.Init();
cc.vv.gameData.setFreeWheelScript(t);
var n = this.node.addComponent("Bader_StoreGame");
n.Init();
cc.vv.gameData.setStoreScript(n);
}
});
cc._RF.pop();
}, {
LMSlots_Logic_Base: void 0
} ],
Bader_Popup: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3e35bRUoMxKYpNS7gfk75eG", "Bader_Popup");
function o(e, t, n, o, a, r, i) {
try {
var c = e[r](i), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, r) {
var i = e.apply(t, n);
function c(e) {
o(i, a, r, c, s, "next", e);
}
function s(e) {
o(i, a, r, c, s, "throw", e);
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
this._node_tri_superFree = cc.find("node_tri_superFree", this._node_popup);
this._node_tri_free = cc.find("node_tri_free", this._node_popup);
this._node_end_free = cc.find("node_end_free", this._node_popup);
this._node_tri_free_again = cc.find("node_tri_free_again", this._node_popup);
this._node_win_jp = cc.find("node_win_jp", this._node_popup);
this._node_tri_superFree.active = !1;
this._node_tri_free.active = !1;
this._node_end_free.active = !1;
this._node_tri_free_again.active = !1;
this._node_win_jp.active = !1;
this._node_qp = cc.find("safe_node/node_qp", this.node);
this._node_qp.active = !1;
},
playPanelAnim: function(e, t) {
return new Promise(function() {
var n = a(regeneratorRuntime.mark(function n(o, a) {
var r, i, c;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
r = t.childrenCount;
i = function(n) {
var o = t.children[n], a = o.scale;
if (e) {
o.active = !0;
o.setScale(0);
cc.tween(o).delay(.1 * n).to(.5, {
scale: a
}, {
easing: "backOut"
}).start();
} else cc.tween(o).delay(.1 * (r - n)).to(.5, {
scale: 0
}, {
easing: "backIn"
}).call(function() {
o.active = !1;
o.setScale(a);
}).start();
};
for (c = 0; c < r; c++) i(c);
n.next = 5;
return cc.vv.gameData.awaitTime(.1 * r + .5);

case 5:
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
playTriSuperFreeAnim: function(e, t) {
var n = this;
return new Promise(function() {
var e = a(regeneratorRuntime.mark(function e(o, r) {
var i, c, s;
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_super_freespin");
n._node_popup.active = !0;
n._node_tri_superFree.active = !0;
cc.find("spr_up", n._node_tri_superFree).getComponent("ImgSwitchCmp").setIndex(t - 1);
cc.find("spr_down", n._node_tri_superFree).getComponent("ImgSwitchCmp").setIndex(t - 1);
(i = cc.find("btn", n._node_tri_superFree)).off("click");
i.getComponent(cc.Button).interactable = !0;
e.next = 10;
return n.playPanelAnim(!0, n._node_tri_superFree);

case 10:
c = n;
s = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
i.getComponent(cc.Button).interactable = !1;
e.next = 4;
return c.playPanelAnim(!1, c._node_tri_superFree);

case 4:
c._node_popup.active = !1;
c._node_tri_superFree.active = !1;
o();

case 7:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(i, s);
i.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
i.stopAllActions();
s();

case 2:
case "end":
return e.stop();
}
}, e);
})));

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
playTriFreeAnim: function(e, t) {
var n = this;
return new Promise(function() {
var o = a(regeneratorRuntime.mark(function o(r, i) {
var c, s, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
n._node_popup.active = !0;
n._node_tri_free.active = !0;
cc.find("spr_kuang/lbl", n._node_tri_free).getComponent(cc.Label).string = e;
cc.find("allpays", n._node_tri_free).opacity = t >= 2 ? 255 : 0;
t >= 2 && cc.find("allpays/spr", n._node_tri_free).getComponent("ImgSwitchCmp").setIndex(t - 2);
(c = cc.find("btn", n._node_tri_free)).off("click");
c.getComponent(cc.Button).interactable = !0;
o.next = 11;
return n.playPanelAnim(!0, n._node_tri_free);

case 11:
s = n;
l = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
c.getComponent(cc.Button).interactable = !1;
e.next = 4;
return s.playPanelAnim(!1, s._node_tri_free);

case 4:
s._node_popup.active = !1;
s._node_tri_free.active = !1;
r();

case 7:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
l();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 15:
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
playTriFreeAgainAnim: function(e) {
var t = this;
return new Promise(function() {
var n = a(regeneratorRuntime.mark(function n(o, a) {
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
t._node_popup.active = !0;
t._node_tri_free_again.active = !0;
cc.find("spr_kuang/lbl", t._node_tri_free_again).getComponent(cc.Label).string = e;
n.next = 6;
return t.playPanelAnim(!0, t._node_tri_free_again);

case 6:
n.next = 8;
return cc.vv.gameData.awaitTime(1.5);

case 8:
n.next = 10;
return t.playPanelAnim(!1, t._node_tri_free_again);

case 10:
t._node_popup.active = !1;
t._node_tri_free_again.active = !1;
o();

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
playEndFreeAnim: function(e, t) {
var n = this;
return new Promise(function() {
var o = a(regeneratorRuntime.mark(function o(r, i) {
var c, s, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_pop_window");
n._node_popup.active = !0;
n._node_end_free.active = !0;
cc.find("spr_kuang/lbl", n._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(e);
cc.find("cnts/lbl", n._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(t);
(c = cc.find("btn", n._node_end_free)).off("click");
c.getComponent(cc.Button).interactable = !0;
o.next = 10;
return n.playPanelAnim(!0, n._node_end_free);

case 10:
s = n;
l = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
c.getComponent(cc.Button).interactable = !1;
e.next = 4;
return s.playPanelAnim(!1, s._node_end_free);

case 4:
s._node_popup.active = !1;
s._node_end_free.active = !1;
r();

case 7:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
l();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 14:
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
playWinJpAnim: function(e, t) {
var n = this;
return new Promise(function() {
var o = a(regeneratorRuntime.mark(function o(r, i) {
var c, s, l;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
Global.SlotsSoundMgr.playEffect("");
n._node_popup.active = !0;
n._node_win_jp.active = !0;
cc.find("spr_jp", n._node_win_jp).getComponent("ImgSwitchCmp").setIndex(t - 2);
cc.find("spr_kuang/lbl", n._node_win_jp).getComponent(cc.Label).string = Global.FormatNumToComma(e);
(c = cc.find("btn", n._node_win_jp)).off("click");
c.getComponent(cc.Button).interactable = !0;
o.next = 10;
return n.playPanelAnim(!0, n._node_win_jp);

case 10:
s = n;
l = function() {
var e = a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_click_btn");
c.getComponent(cc.Button).interactable = !1;
e.next = 4;
return s.playPanelAnim(!1, s._node_win_jp);

case 4:
s._node_popup.active = !1;
s._node_win_jp.active = !1;
r();

case 7:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
cc.vv.gameData.checkAutoPlay(c, l);
c.on("click", a(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
c.stopAllActions();
l();

case 2:
case "end":
return e.stop();
}
}, e);
})));

case 14:
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
playQpAnim: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_run");
e._node_qp.active = !0;
cc.find("kangaroo", e._node_qp).getComponent(sp.Skeleton).setAnimation(0, "idle2", !1);
t.next = 6;
return cc.vv.gameData.awaitTime(2);

case 6:
e._node_qp.active = !1;

case 7:
case "end":
return t.stop();
}
}, t);
}))();
}
});
cc._RF.pop();
}, {} ],
Bader_PrizePool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "924b9iwBxtEd4e6RTOgH+aP", "Bader_PrizePool");
cc.Class({
extends: e("LMSlots_PrizePool_Base"),
properties: {},
InItPoolList: function() {
var e = this;
this._super();
for (var t = function(t) {
var n = e._poolList[t].node;
n.active = !1;
n.opacity = 0;
cc.tween(n).delay(5 * t).repeatForever(cc.tween().call(function() {
n.active = !0;
n.position = cc.v2(-50, 0);
}).to(.5, {
position: cc.v2(0, 0),
opacity: 255
}).delay(4.5).to(.5, {
position: cc.v2(50, 0),
opacity: 0
}).delay(4.5 * (e._poolList.length - 1) + .5)).start();
}, n = 0; n < this._poolList.length; n++) t(n);
}
});
cc._RF.pop();
}, {
LMSlots_PrizePool_Base: void 0
} ],
Bader_Reel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d25ebHqTGBEALq3amq5OF3h", "Bader_Reel");
function o(e) {
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
var o, r, i = !0, c = !1;
return {
s: function() {
o = e[Symbol.iterator]();
},
n: function() {
var e = o.next();
i = e.done;
return e;
},
e: function(e) {
c = !0;
r = e;
},
f: function() {
try {
i || null == o.return || o.return();
} finally {
if (c) throw r;
}
}
};
}
function a(e, t) {
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
cc.Class({
extends: e("LMSlots_Reel_Base"),
properties: {},
start: function() {},
playReelStop: function() {
if (this._originResult) for (var e = 0; e < this._originResult.length; e++) {
var t, n = this._symbols[e], a = o(this._reelState);
try {
for (a.s(); !(t = a.n()).done; ) {
var r = t.value;
r.isStop && r.id.includes(n.GetShowId()) && n.playStopAnimation();
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
}
if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
var i, c = "", s = "", l = !1, u = o(this._reelState);
try {
for (u.s(); !(i = u.n()).done; ) {
var _ = i.value;
if (_.isStop) {
s = _.symbolStopSound ? _.symbolStopSound + (this._reelIdx + 1) : "";
l = !0;
} else c = _.reelStopSound ? _.reelStopSound : "";
}
} catch (e) {
u.e(e);
} finally {
u.f();
}
l && (c = s);
var p = this._cfg.reelStateInfo[0].path;
p || (p = cc.vv.gameData.getGameDir());
cc.vv.AudioManager.playEff(p, c, !0);
}
}
});
cc._RF.pop();
}, {
LMSlots_Reel_Base: void 0
} ],
Bader_Slots: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ee29eYhV1lD/ILtML/dUBhp", "Bader_Slots");
function o(e) {
"@babel/helpers - typeof";
return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
})(e);
}
function a(e, t, n, o, a, r, i) {
try {
var c = e[r](i), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, a);
}
function r(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(o, r) {
var i = e.apply(t, n);
function c(e) {
a(i, o, r, c, s, "next", e);
}
function s(e) {
a(i, o, r, c, s, "throw", e);
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
this._node_sm = cc.find("node_shuoming", this.node);
this._node_zsCnt = cc.find("node_zsCnt", this.node);
this._node_freeCnt = cc.find("node_freeCnt", this.node);
this._node_diamond = cc.find("Canvas/safe_node/node_diamond");
this._super();
this.showShuomingSpr();
this.showZhuanshiCnt();
},
RegisterEvent: function() {
this._super();
Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
},
ReconnectShow: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
e._topScript.SetBackLobby(!1);
e._bottomScript.ShowBtnsByState("moveing_1");
Global.SlotsSoundMgr.playEffect("music_Kangaroos_enter");
if (!cc.vv.gameData.getFreeGameWheel()) {
t.next = 9;
break;
}
t.next = 7;
return e.triFreeWheelGame(!0);

case 7:
t.next = 10;
break;

case 9:
cc.vv.gameData.GetTotalFree() > 0 ? e.ShowGameview(!0) : e.ShowGameview(!1);

case 10:
e._topScript.StopMove();
e._bottomScript.CanDoNextRound();

case 12:
case "end":
return t.stop();
}
}, t);
}))();
},
StartMove: function() {
this._super();
Global.SlotsSoundMgr.playNormalBgm();
this._isFreeGame && this.showFreeCnt();
},
getRandomVal: function() {
var e = cc.vv.gameData.getGameCfg(), t = Global.random(1, e.randomSymbols.length);
return e.randomSymbols[t - 1];
},
SetSlotsResult: function(e) {
var t = [], n = [], a = this._gameInfo.watermarkInfo;
if (a) {
t = a.cnts;
n = a.idxs;
}
t = Array.isArray(t) ? t : t && "object" === o(t) ? Object.values(t) : [];
n = Array.isArray(n) ? n : n && "object" === o(n) ? Object.values(n) : [];
for (var r = e.length / this._col, i = [], c = 0; c < e.length; c++) {
Math.floor(c / r);
var s = c % this._col;
20 == e[c] && (e[c] = this.getRandomVal());
if (this._cfg.symbol[e[c]]) {
var l = {};
l.sid = e[c];
l.data = {};
n.includes(c + 1) && (l.data.cnt = t[n.indexOf(c + 1)]);
this._gameInfo.currDiamond && this._gameInfo.currDiamond.idx == c + 1 && (l.data.diamond = this._gameInfo.currDiamond);
i[s] || (i[s] = []);
i[s].unshift(l);
}
}
for (var u = 0; u < this._reels.length; u++) {
var _ = this._reels[u], p = i[u];
_.SetResult(p);
}
},
OnSpinEnd: function() {
this.onSpinEndAction();
},
onSpinEndAction: function() {
var e = this;
return r(regeneratorRuntime.mark(function t() {
var n, o, a, r, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!((n = e._gameInfo.watermarkInfo) && n.totalCnt > 0)) {
t.next = 5;
break;
}
cc.vv.gameData.getStoreScript().flyJiaobiao();
t.next = 5;
return cc.vv.gameData.awaitTime(.5);

case 5:
if (!e._gameInfo.currDiamond) {
t.next = 8;
break;
}
t.next = 8;
return e.addDiamond();

case 8:
e.ShowWinTrace();
o = cc.vv.gameData.GetGameWin();
a = o;
r = !0;
if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
a = cc.vv.gameData.getFreeWinCoin();
e.showFreeWin(!1, a);
r = !1;
}
t.next = 15;
return new Promise(function(t, n) {
e.ShowBottomWin(o, a, r, t);
});

case 15:
if (!e._gameInfo.freeGameWheel) {
t.next = 19;
break;
}
t.next = 19;
return e.triFreeWheelGame(!1);

case 19:
if (!((i = e._gameInfo.freeResult.freeInfo) && i.freeCnt > 0 && e._gameInfo.allFreeCnt != e._gameInfo.freeCnt)) {
t.next = 23;
break;
}
t.next = 23;
return e.triFreeGameAgain();

case 23:
if (!(0 == e._gameInfo.freeCnt && e._gameInfo.allFreeCnt > 0)) {
t.next = 26;
break;
}
t.next = 26;
return e.endFreeGame();

case 26:
e.CanDoNextRound();

case 27:
case "end":
return t.stop();
}
}, t);
}))();
},
addDiamond: function() {
var e = this;
return new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(n, o) {
var a, r, i, c, s, l, u, _, p, f, m, d;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = e._gameInfo.currDiamond.idx;
r = e._gameInfo.currDiamond.type;
i = [ "diamond_blue", "diamond_purple", "diamond_red" ];
[ "zs_stop_b", "zs_stop_p", "zs_stop_r" ];
c = [ "pos_b", "pos_p", "pos_r" ];
(s = e.GetSymbolByIdx(a)).showDiamond();
l = e._node_diamond.convertToNodeSpaceAR(s.node.convertToWorldSpaceAR(cc.v2(0, 0)));
u = cc.find(c[r - 1], e._node_zsCnt);
_ = e._node_diamond.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.v2(0, 0)));
p = i[r - 1];
(f = cc.instantiate(cc.vv.gameData.GetPrefabByName(p))).parent = e._node_diamond;
f.active = !0;
f.position = l;
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_diamond_1");
(m = f.getChildByName("spine").getComponent(sp.Skeleton)).setAnimation(0, "animation1", !1);
m.addAnimation(0, "animation", !0);
t.next = 21;
return cc.vv.gameData.awaitTime(1);

case 21:
cc.tween(f).to(.5, {
position: _
}).start();
t.next = 24;
return cc.vv.gameData.awaitTime(.5);

case 24:
e.showZhuanshiCnt();
d = m.setAnimation(0, "animation2", !1);
m.setTrackCompleteListener(d, function() {
m.setTrackCompleteListener(d, null);
f.destroy();
});
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_diamond_2");
n();

case 29:
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
triFreeGameAgain: function() {
var e = this;
return new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(n, o) {
var a, r, i;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
a = e._gameInfo.freeResult.freeInfo;
for (r = 0; r < a.scatterIdx.length; r++) (i = e.GetSymbolByIdx(a.scatterIdx[r])) && i.playTriggerAnimation();
Global.SlotsSoundMgr.playEffect("music_Kangaroos_trriger_scatter");
t.next = 5;
return cc.vv.gameData.awaitTime(2);

case 5:
t.next = 7;
return cc.vv.gameData.getPopupScript().playTriFreeAgainAnim(a.freeCnt);

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
}());
},
triFreeWheelGame: function(e) {
var t = this;
return new Promise(function() {
var n = r(regeneratorRuntime.mark(function n(o, a) {
var r, i, c, s, l;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
r = cc.vv.gameData.getFreeGameWheel();
if (e) {
n.next = 9;
break;
}
for (i = 0; i < r.scatterIdx.length; i++) (c = t.GetSymbolByIdx(r.scatterIdx[i])) && c.playTriggerAnimation();
Global.SlotsSoundMgr.playEffect("music_Kangaroos_trriger_scatter");
n.next = 6;
return cc.vv.gameData.awaitTime(2);

case 6:
cc.vv.gameData.getPopupScript().playQpAnim();
n.next = 9;
return cc.vv.gameData.awaitTime(2);

case 9:
n.next = 11;
return cc.vv.gameData.getFreeWheelScript().enterFreeWheel(r);

case 11:
if (!(r = cc.vv.gameData.getFreeGameWheel()).jackpot) {
n.next = 19;
break;
}
n.next = 15;
return cc.vv.gameData.getPopupScript().playWinJpAnim(r.jackpot.value, r.jackpot.id);

case 15:
cc.vv.gameData.AddCoin(r.jackpot.value);
t._topScript.ShowCoinByRoll();
n.next = 33;
break;

case 19:
if (!r.freeInfo) {
n.next = 33;
break;
}
s = r.freeInfo.freeCnt;
l = r.freeInfo.mult;
cc.vv.gameData.SetFreeTime(s);
cc.vv.gameData.SetTotalFree(s);
cc.vv.gameData.setFreeMult(l);
t.Backup();
t.ShowGameview(!0);
cc.vv.gameData.getPopupScript().playQpAnim();
n.next = 30;
return cc.vv.gameData.awaitTime(2);

case 30:
n.next = 32;
return cc.vv.gameData.getPopupScript().playTriFreeAnim(s, l);

case 32:
Global.SlotsSoundMgr.playBgm("music_Kangaroos_freespin_bg");

case 33:
o();

case 34:
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
return new Promise(function() {
var t = r(regeneratorRuntime.mark(function t(n, o) {
var a;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
a = cc.vv.gameData.getFreeWinCoin();
t.next = 4;
return cc.vv.gameData.getPopupScript().playEndFreeAnim(a, e._gameInfo.allFreeCnt);

case 4:
cc.vv.gameData.getPopupScript().playQpAnim();
t.next = 7;
return cc.vv.gameData.awaitTime(1);

case 7:
e.showZhuanshiCnt();
e.ShowGameview(!1);
e.Resume();
t.next = 12;
return cc.vv.gameData.awaitTime(2);

case 12:
t.next = 14;
return new Promise(function(t, n) {
e.ShowBottomWin(a, a, !0, t);
});

case 14:
n();

case 15:
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
showZhuanshiCnt: function() {
var e = cc.vv.gameData.getCollectInfos()[cc.vv.gameData.GetBetIdx() - 1];
cc.find("lbl_4", this._node_zsCnt).getComponent(cc.Label).string = e.red.freeCnt;
cc.find("lbl_3", this._node_zsCnt).getComponent(cc.Label).string = e.purple.freeCnt;
cc.find("lbl_2", this._node_zsCnt).getComponent(cc.Label).string = e.blue.freeCnt;
},
showShuomingSpr: function() {
var e = cc.vv.gameData.GetBetIdx(), t = cc.vv.gameData.getNeedBet();
cc.find("zi1", this._node_sm).active = e >= t;
cc.find("zi2", this._node_sm).active = e < t;
cc.find("par_shuoming", this._node_sm).active = !1;
},
onEventTotalbetUpdated: function() {
var e = cc.vv.gameData.GetBetIdx(), t = cc.vv.gameData.getNeedBet(), n = cc.find("zi1", this._node_sm), o = cc.find("zi2", this._node_sm), a = cc.find("par_shuoming", this._node_sm);
if (e >= t && o.active) {
Global.SlotsSoundMgr.playEffect("");
a.active = !0;
a.getComponent(cc.ParticleSystem).resetSystem();
n.active = !0;
o.active = !1;
cc.tween(n).to(.3, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
} else if (e < t && n.active) {
Global.SlotsSoundMgr.playEffect("");
a.active = !0;
a.getComponent(cc.ParticleSystem).resetSystem();
n.active = !1;
o.active = !0;
cc.tween(o).to(.3, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
}
this.showZhuanshiCnt();
},
showFreeCnt: function() {
var e = cc.vv.gameData.GetTotalFree(), t = cc.vv.gameData.GetFreeTime();
cc.find("zi/curCnt", this._node_freeCnt).getComponent(cc.Label).string = e - t;
cc.find("zi/totalCnt", this._node_freeCnt).getComponent(cc.Label).string = e;
},
showFreeWin: function(e, t) {
var n = cc.find("lbl_win", this._node_freeCnt);
if (e) n.getComponent(cc.Label).string = Global.FormatNumToComma(t); else {
var o = Global.FormatCommaNumToNum(n.getComponent(cc.Label).string);
Global.doRoallNumEff(n, o, t, 1, null, null, 0, !0);
}
},
showFreeMult: function(e) {
var t = cc.find("spr_mult", this._node_freeCnt), n = cc.find("zi", this._node_freeCnt);
if (e >= 2) {
t.active = !0;
n.position = cc.v2(30, t.y);
t.getComponent("ImgSwitchCmp").setIndex(e - 2);
} else {
t.active = !1;
n.position = cc.v2(0, t.y);
}
},
ShowGameview: function(e) {
this._super(e);
cc.find("Canvas/safe_node/kangaroo").active = !e;
this._node_zsCnt.active = !e;
this._node_sm.active = !e;
this._node_freeCnt.active = e;
this._isFreeGame = e;
cc.vv.gameData.setIsFreeGame(e);
if (e) {
this.showFreeCnt();
this.showFreeWin(!0, cc.vv.gameData.getFreeWinCoin());
this.showFreeMult(cc.vv.gameData.getFreeMult());
}
}
});
cc._RF.pop();
}, {
LMSlots_Slots_Base: void 0
} ],
Bader_StoreGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "32290fj6Z5NIox62cKsfEkA", "Bader_StoreGame");
function o(e, t, n, o, a, r, i) {
try {
var c = e[r](i), s = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(s) : Promise.resolve(s).then(o, a);
}
function a(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(a, r) {
var i = e.apply(t, n);
function c(e) {
o(i, a, r, c, s, "next", e);
}
function s(e) {
o(i, a, r, c, s, "throw", e);
}
c(void 0);
});
};
}
var r = 1, i = 2, c = 3, s = 4, l = 5, u = 6;
cc.Class({
extends: cc.Component,
properties: {
_rtype: 2,
_itemList: [],
_repick: !1
},
start: function() {},
Init: function() {
this._btn_entrance = cc.find("safe_node/slots/btn_entrance", this.node);
this._btn_entrance.off("click");
Global.btnClickEvent(this._btn_entrance, this.onClickEntranceBtn, this);
this._fly_jiaobiao = cc.find("par_fly", this._btn_entrance);
this._fly_jiaobiao.active = !1;
this._node_store = cc.find("safe_node/node_store", this.node);
this._node_store.active = !1;
this._layout = cc.find("layout", this._node_store);
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
this._par_sj = cc.find("layout/par_sj", this._node_store);
this._par_sj.active = !1;
this._box_tip = cc.find("layout/box_tip", this._node_store);
this._box_tip.active = !1;
var n = cc.find("layout/btn_left", this._node_store);
Global.btnClickEvent(n, this.clickLeftBtn, this);
var o = cc.find("layout/btn_right", this._node_store);
Global.btnClickEvent(o, this.clickRightBtn, this);
this.updateCurMoney();
},
onEnable: function() {
cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
},
onDisable: function() {
cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, !1, this);
},
onClickEntranceBtn: function() {
if (cc.vv.gameData.GetBottomScript().GetSpinBtnState() && !(cc.vv.gameData.GetAutoModelTime() > 0 || cc.vv.gameData.isFreeGame())) {
Global.SlotsSoundMgr.playEffect("");
this._btn_entrance.getComponent(cc.Button).interactable = !1;
this.openStorePage();
}
},
openStorePage: function() {
var e = this;
return new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.playBgm("sound_Kangaroos_shop_bgm");
cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
e._node_store.active = !0;
e._layout.setScale(0);
cc.tween(e._layout).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
e._storeInfo = cc.vv.gameData.getStoreInfo();
e._curPage = e._storeInfo.unlockPage;
e._repick = e._storeInfo.repick;
e.updateCurMoney();
e.showTitleSpr();
e.showAllItems();
e.showPageFooter();
t.next = 14;
return cc.vv.gameData.awaitTime(.5);

case 14:
e._canClickItem = !0;
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
}());
},
closeStorePage: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function() {
var t = a(regeneratorRuntime.mark(function t(n, o) {
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
Global.SlotsSoundMgr.stopBgm();
cc.tween(e._layout).to(.5, {
opacity: 0,
scale: 0
}).start();
t.next = 4;
return cc.vv.gameData.awaitTime(.5);

case 4:
e._btn_entrance.getComponent(cc.Button).interactable = !0;
e._node_store.active = !1;
e._layout.opacity = 255;
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
onClickCloseBtn: function() {
if (this._canClickItem) {
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_btnclose");
this.closeStorePage();
cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
}
},
flyJiaobiao: function() {
var e = this;
return a(regeneratorRuntime.mark(function t() {
var n, o, a, r, i, c, s;
return regeneratorRuntime.wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
n = cc.vv.gameData.getWatermarkInfo();
o = n.cnts;
a = n.idxs;
r = n.totalCnt;
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_collectcoins_1");
e;
i = cc.find("spr", e._btn_entrance);
c = function(t) {
var n = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(a[t]).getJiaobiao();
n.active = !1;
var r = cc.instantiate(e._fly_jiaobiao);
r.active = !0;
r.parent = e._fly_jiaobiao.parent;
r.position = r.parent.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
var c = cc.find("jiaobiao/lbl", r);
c.getComponent(cc.Label).string = o[t];
var s = r.parent.convertToNodeSpaceAR(i.convertToWorldSpaceAR(cc.v2(0, 0)));
cc.tween(r).to(.3, {
scale: .8
}).to(.2, {
scale: 1
}).parallel(cc.tween().to(.5, {
position: s,
opacity: 0
}), cc.tween().call(function() {
cc.tween(c).to(.5, {
opacity: 0
}).start();
})).call(function() {
r.destroy();
cc.tween(i).to(.3, {
scale: 1.3
}).to(.2, {
scale: 1
}).start();
}).start();
};
for (s = 0; s < a.length; s++) c(s);
t.next = 11;
return cc.vv.gameData.awaitTime(.5);

case 11:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_collectcoins_2");
e.updateCurMoney(r);

case 13:
case "end":
return t.stop();
}
}, t);
}))();
},
updateCurMoney: function(e) {
this._storeInfo = cc.vv.gameData.getStoreInfo();
var t = cc.find("lbl", this._btn_entrance);
if (e) {
var n = Global.FormatCommaNumToNum(t.getComponent(cc.Label).string);
Global.doRoallNumEff(t, n, this._storeInfo.watermarkCnt, .5, null, null, 0, !0);
} else t.getComponent(cc.Label).string = Global.FormatNumToComma(this._storeInfo.watermarkCnt);
cc.find("layout/money_bg/lbl", this._node_store).getComponent(cc.Label).string = Global.FormatNumToComma(this._storeInfo.watermarkCnt);
},
showTitleSpr: function(e) {
var t = this, n = cc.find("layout/spr_content", this._node_store);
e ? cc.tween(n).to(.3, {
opacity: 0
}).call(function() {
n.getComponent("ImgSwitchCmp").setIndex(t._curPage - 1);
}).to(.3, {
opacity: 255
}).start() : n.getComponent("ImgSwitchCmp").setIndex(this._curPage - 1);
},
showAllItems: function() {
for (var e = this._storeInfo.unlockItems[this._curPage - 1], t = this._storeInfo.pageDetails[this._curPage - 1].price, n = 1; n <= 9; n++) {
var o = this._itemList[n].node, a = this._itemList[n].type, _ = this._itemList[n].data;
if (this._curPage <= this._storeInfo.unlockPage) {
var p = this.getItemData(n, e);
if (p) if (1 == p.type) {
a = l;
_ = p.coin;
} else 2 == p.type && (a = u); else if (this._curPage == this._storeInfo.unlockPage && this._repick) {
a = c;
_ = t;
} else if (t <= this._storeInfo.watermarkCnt) {
a = i;
_ = t;
} else {
a = s;
_ = t;
}
} else {
a = r;
_ = t;
}
this.setItemState(o, a, _);
this._itemList[n].type = a;
this._itemList[n].data = _;
}
},
getItemData: function(e, t) {
for (var n = 0; n < t.length; n++) if (e == t[n].idx) return t[n];
return null;
},
setItemState: function(e, t, n) {
var o = cc.find("spr_fangge", e), a = cc.find("spr_fanggedi", e), _ = cc.find("spr_shade", e), p = cc.find("spr_pickagain", e), f = cc.find("spr_suo", e), m = cc.find("money_bg", e), d = cc.find("lbl", e);
o.active = t === r || t === i || t === s || t === c;
t === i || t === c ? o.getComponent(cc.Animation).play("box_sg") : o.getComponent(cc.Animation).stop();
a.active = t === l || t === u;
_.active = t === r || t === s;
p.active = t === u;
p.active && this._repick ? cc.tween(p).repeatForever(cc.tween().to(.3, {
scale: 1.2
}).to(.3, {
scale: 1
})).start() : p.stopAllActions();
f.active = t === r;
m.active = t === i || t === s || t === r;
m.active && (cc.find("lbl", m).getComponent(cc.Label).string = Global.FormatNumToComma(n));
d.active = t === l;
d && (d.getComponent(cc.Label).string = Global.formatNumShort(n, 0));
},
getAgainItem: function() {
for (var e = 1; e <= 9; e++) if (this._itemList[e].type == u) return this._itemList[e].node;
return null;
},
onClickItem: function(e) {
if (this._canClickItem) {
var t = Number(e.node.name.substring("item".length)), n = this._itemList[t].type;
if (n === r || n === s) this.playBoxTipAnim(e.node); else if (n === i || n === c) {
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_start");
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
var o, a, r, c;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
t._storeInfo = e.storeInfo;
cc.vv.gameData.setStoreInfo(t._storeInfo);
t.updateCurMoney();
o = e.result;
a = e.choiceId;
n.next = 7;
return t.setItemResult(a, o);

case 7:
if (!t._repick && t._storeInfo.pageDetails[t._curPage - 1].price > t._storeInfo.watermarkCnt) for (r = 1; r <= 9; r++) if (t._itemList[r].type === i) {
t._itemList[r].type = s;
t.setItemState(t._itemList[r].node, s, t._itemList[r].data);
}
if (!o.pageReward) {
n.next = 29;
break;
}
n.next = 11;
return cc.vv.gameData.awaitTime(1);

case 11:
n.next = 13;
return t.closeStorePage();

case 13:
if (!o.pageReward) {
n.next = 27;
break;
}
c = o.pageReward.freeCnt;
cc.vv.gameData.SetTotalFree(c);
cc.vv.gameData.SetFreeTime(c);
cc.log("this._curPage:", t._curPage);
n.next = 20;
return cc.vv.gameData.getPopupScript().playTriSuperFreeAnim(c, t._curPage);

case 20:
cc.vv.gameData.getPopupScript().playQpAnim();
n.next = 23;
return cc.vv.gameData.awaitTime(1);

case 23:
cc.vv.gameData.GetSlotsScript().ShowGameview(!0);
n.next = 26;
return cc.vv.gameData.awaitTime(1);

case 26:
cc.vv.gameData.GetSlotsScript().CanDoNextRound();

case 27:
n.next = 30;
break;

case 29:
t._canClickItem = !0;

case 30:
case "end":
return n.stop();
}
}, n);
}))();
},
setItemResult: function(e, t) {
var n = this;
return new Promise(function() {
var o = a(regeneratorRuntime.mark(function o(a, r) {
var s, _, p, f, m, d, h, v, g, S, b;
return regeneratorRuntime.wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_loop");
s = n._itemList[e].node;
_ = cc.find("spr_fangge", s);
p = cc.find("spr_fanggedi", s);
cc.find("spr_shade", s);
f = cc.find("spr_pickagain", s);
cc.find("spr_suo", s);
m = cc.find("money_bg", s);
d = cc.find("lbl", s);
cc.tween(m).to(.3, {
opacity: 0
}).call(function() {
m.active = !1;
m.opacity = 255;
}).start();
o.next = 12;
return cc.vv.gameData.awaitTime(.3);

case 12:
cc.tween(_).to(.2, {
scaleX: -1
}).to(.2, {
scaleX: 1
}).to(.2, {
scaleX: -1
}).to(.2, {
scaleX: 1
}).to(.2, {
scaleX: -.5,
scaleY: .5
}).to(.2, {
scaleX: 0,
scaleY: 0
}).call(function() {
_.active = !1;
_.setScale(1);
}).start();
o.next = 15;
return cc.vv.gameData.awaitTime(1.2);

case 15:
p.active = !0;
p.setScale(0);
cc.tween(p).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
if (!(t.coin > 0)) {
o.next = 41;
break;
}
d.active = !0;
d.getComponent(cc.Label).string = Global.formatNumShort(t.coin / (n._repick ? 2 : 1), 0);
d.setScale(0);
cc.tween(d).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
if (!n._repick) {
o.next = 35;
break;
}
o.next = 26;
return cc.vv.gameData.awaitTime(.5);

case 26:
h = n.getAgainItem();
n._par_sj.active = !0;
n._par_sj.position = n._par_sj.parent.convertToNodeSpaceAR(h.convertToWorldSpaceAR(cc.v2(0, 0)));
v = n._par_sj.parent.convertToNodeSpaceAR(s.convertToWorldSpaceAR(cc.v2(0, 0)));
cc.tween(n._par_sj).to(.5, {
position: v
}).start();
o.next = 33;
return cc.vv.gameData.awaitTime(.5);

case 33:
n._par_sj.active = !1;
d.getComponent(cc.Label).string = Global.formatNumShort(t.coin, 0);

case 35:
g = {
lblCoin: cc.find(Global.INGAME_COIN_LABEL_NODE_PATH),
addCoin: t.coin
};
Global.FlyCoin(d, cc.find(Global.INGAME_COIN_NODE_PATH), null, g);
n._itemList[e].type = l;
if (n._repick) {
n._repick = !1;
for (S = 1; S <= 9; S++) if (n._itemList[S].type === c) {
n._itemList[S].type = i;
n.setItemState(n._itemList[S].node, i, n._itemList[S].data);
} else n._itemList[S].type === u && n.setItemState(n._itemList[S].node, n._itemList[S].type, n._itemList[S].data);
}
o.next = 42;
break;

case 41:
if (t.mult > 1) {
f.active = !0;
cc.tween(f).repeatForever(cc.tween().to(.3, {
scale: 1.2
}).to(.3, {
scale: 1
})).start();
d.setScale(0);
cc.tween(d).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
n._itemList[e].type = u;
n._repick = !0;
for (b = 1; b <= 9; b++) if (n._itemList[b].type === i) {
n._itemList[b].type = c;
n.setItemState(n._itemList[b].node, c, n._itemList[b].data);
}
}

case 42:
o.next = 44;
return cc.vv.gameData.awaitTime(.5);

case 44:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_buy_over");
a();

case 46:
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
showPageFooter: function() {
for (var e = 1; e <= 5; e++) {
cc.find(cc.js.formatStr("layout/choose_bg/choose%s/choosed", e), this._node_store).active = e === this._curPage;
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
e._curPage <= 1 ? e._curPage = 5 : e._curPage--;
e.refreshDataWithAction(20);
e.showPageFooter();
t.next = 8;
return cc.vv.gameData.awaitTime(1);

case 8:
e._canClickItem = !0;

case 9:
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
e._curPage >= 5 ? e._curPage = 1 : e._curPage++;
e.refreshDataWithAction(-20);
e.showPageFooter();
t.next = 8;
return cc.vv.gameData.awaitTime(1);

case 8:
e._canClickItem = !0;

case 9:
case "end":
return t.stop();
}
}, t);
}))();
},
refreshDataWithAction: function(e) {
var t = this;
return a(regeneratorRuntime.mark(function n() {
var o, a;
return regeneratorRuntime.wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
Global.SlotsSoundMgr.playEffect("sound_Kangaroos_shop_btnnextpage");
if (0 != e) {
t._node_items.stopAllActions();
t._node_items.x = 0;
t._node_items.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, e, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -e, 0))));
t.showTitleSpr(!0);
}
t.showAllItems();
for (o = 1; o <= 9; o++) {
(a = t._itemList[o].node).setScale(.1);
a.stopAllActions();
a.runAction(cc.scaleTo(.1 * o, 1, 1).easing(cc.easeBackOut()));
}

case 4:
case "end":
return n.stop();
}
}, n);
}))();
}
});
cc._RF.pop();
}, {} ],
Bader_Symbol: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ce58c6Bx81KIrRTyOh7LR/y", "Bader_Symbol");
cc.Class({
extends: e("LMSlots_Symbol_Base"),
properties: {},
start: function() {},
ShowById: function(e, t) {
this._super(e, t);
this.showJiaobiao();
this.showDiamond();
if (this._isResume) this._isResume = !1; else if (t) {
t.cnt && this.showJiaobiao(t.cnt);
t.diamond && this.showDiamond(t.diamond);
}
},
showJiaobiao: function(e) {
var t = cc.find("jiaobiao", this.node);
if (e) {
t.active = !0;
cc.find("lbl", t).getComponent(cc.Label).string = e;
} else t.active = !1;
},
getJiaobiao: function() {
return cc.find("jiaobiao", this.node);
},
showDiamond: function(e) {
cc.find("zs_blue", this.node).active = e && 1 == e.type;
cc.find("zs_purple", this.node).active = e && 2 == e.type;
cc.find("zs_red", this.node).active = e && 3 == e.type;
},
Resume: function(e) {
this._isResume = !0;
this.stopWinTweenAction();
this._super(e);
},
playWinAnimation: function() {
this._showNode && (this._showNode.active = !1);
var e = this._id, t = cc.vv.gameData.getGameCfg();
if (t.symbol[e] && t.symbol[e].win_node) {
this._state = "win";
this._showNode && (this._showNode.active = !1);
var n = this.setAnimationToTop(!0);
n.active = !0;
var o = cc.find(t.symbol[e].win_node, n);
o.active = !0;
if (t.symbol[e].win_ani && "" != t.symbol[e].win_ani.name) {
n.zIndex = t.symbol[e].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
var a = o.getComponent(sp.Skeleton);
if (a) {
var r = t.symbol[e].win_ani.name;
if (1 == e) {
var i = cc.vv.gameData.getWildMult();
2 == i ? r = t.symbol[e].win_ani.name2 : 3 == i && (r = t.symbol[e].win_ani.name3);
}
a.setAnimation(0, r, !0);
}
}
} else {
this._showNode.active = !0;
this.playWinTweenAction();
}
}
});
cc._RF.pop();
}, {
LMSlots_Symbol_Base: void 0
} ]
}, {}, [ "Bader_Cfg", "Bader_FreeWheel", "Bader_GameData", "Bader_Logic", "Bader_Popup", "Bader_PrizePool", "Bader_Reel", "Bader_Slots", "Bader_StoreGame", "Bader_Symbol" ]);