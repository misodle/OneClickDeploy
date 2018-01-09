window.LANSA.addSrc("json",function(e,c,a,b,l){function u(a,b,d){var f=null;if(null===d)f=e.$r(new c.Swa(a,b));else switch(typeof d){case "object":f=Array.isArray(d)?e.$r(new c.pka(a,b)):e.$r(new c.qka(a,b));f.oxb(d);break;case "number":f=e.$r(new c.Twa(a,b,d));break;case "string":f=e.$r(new c.Uwa(a,b,d));break;case "boolean":f=e.$r(new c.Rwa(a,b,d))}return f}e.yb("PRIM_PCOL");a.mC={W1a:0,wEb:1,tEb:2,xEb:3,vEb:4,uEb:5};a.mC.G={NULL:a.mC.W1a,OBJECT:a.mC.wEb,ARRAY:a.mC.tEb,STRING:a.mC.xEb,NUMBER:a.mC.vEb,
BOOLEAN:a.mC.uEb};c.$Wb=function(){p.v.call(this);this.pg="";this.BDa=null;this.g0=!1};var p=c.u(c.$Wb,c.ld);p.R=function(){this.cPa(null);p.j.R.call(this)};p.zyc=function(){return this.BDa};p.cPa=function(a){this.BDa=a};p.fAc=function(){return this.g0};p.oPa=function(a){this.g0=a};p.Jp=function(){return this.g0?JSON.stringify(this.BDa.uJ()):this.pg};p.TK=function(a){this.pg=a;var b=null,c=null;try{b=JSON.parse(a)}catch(d){}b?(c=u(this,null,b),this.oPa(!0)):this.oPa(!1);this.cPa(c)};p.xjc=function(){this.cPa(e.$r(new c.pka(this,
null)));this.oPa(!0);return this.BDa};p.yjc=function(){this.cPa(e.$r(new c.qka(this,null)));this.oPa(!0);return this.BDa};e.ub(c.$Wb,"PRIM_WEB","Json",{Va:{Text:{f:p.Jp,i:function(a){this.TK(e.ma(a))}},IsValid:{f:p.fAc},RootItem:{f:p.zyc}},yc:{CreateRootArray:p.xjc,CreateRootObject:p.yjc},dg:{bg:"Text"}});c.M2=function(a,b){r.v.call(this);this.oD=a;this.iDa=b};var r=c.u(c.M2,c.ld);r.i9=function(){return a.mC.W1a};r.uJ=function(){return null};r.wc=function(){return 0};r.we=function(){return null};
r.cw=function(){return null};r.Dmd=function(){return this.oD};r.Pxc=function(){return this.iDa};r.Vha=function(){return this.iDa?this.iDa.hHb(this):""};r.hHb=function(){return""};r.Ci=function(){return this.iDa?this.iDa.g4a(this):-1};r.g4a=function(){return-1};r.i7=function(){throw e.EPc(JSON.stringify(this.uJ()));};r.ZXa=function(){throw e.eya(JSON.stringify(this.uJ()));};r.PXa=function(){throw e.ngb(JSON.stringify(this.uJ()));};r.nr=function(){return null};r.Uj=function(){};e.ub(c.M2,"PRIM_WEB",
"JsonElement",{Va:{Key:{f:r.Vha},Index:{f:function(){return this.Ci()+1}},Type:{f:function(){return e.Ga(this.i9(),a.mC.G)}},Item:{f:function(a){return this.we(e.ma(a))}},ItemAt:{f:function(a){return this.cw(e.aa(a)-1)}},ItemCount:{f:function(){return this.wc()}},ParentItem:{f:r.Pxc}},yc:{AsString:function(){return this.i7()},AsNumber:function(){return e.Wn(this.ZXa())},AsBoolean:function(){return this.PXa()},Remove:function(a){return this.nr(e.ma(a))},RemoveAt:function(a){return this.qr(e.aa(a)-
1)},RemoveAll:function(){this.Uj()}},dg:{bg:"Item"},Mp:{Zo:function(a){return this.cw(e.aa(a)-1)},kw:function(){return this.wc()}}});c.pka=function(a,b){f.v.call(this,a,b);this.bb=[]};var f=c.u(c.pka,c.M2);f.i9=function(){return a.mC.tEb};f.uJ=function(){for(var a=[],b=0;b<this.bb.length;b++)a.push(this.bb[b].uJ());return a};f.cw=function(a){return 0<=a&&a<this.bb.length?this.bb[a]:null};f.wc=function(){return this.bb.length};f.g4a=function(a){for(var b=0;b<this.bb.length;b++)if(this.bb[b]===a)return b;
return-1};f.oxb=function(a){for(var b=0;b<a.length;b++){var c=u(this.oD,this,a[b]);c&&this.bb.push(c)}};f.Q7a=function(){var a=e.$r(new c.pka(this.oD,this));this.bb.push(a);return a};f.Y7a=function(){var a=e.$r(new c.qka(this.oD,this));this.bb.push(a);return a};f.a8a=function(a){a=e.$r(new c.Uwa(this.oD,this,a));this.bb.push(a);return a};f.X7a=function(a){a=e.$r(new c.Twa(this.oD,this,a));this.bb.push(a);return a};f.T7a=function(a){a=e.$r(new c.Rwa(this.oD,this,a));this.bb.push(a);return a};f.W7a=
function(){var a=e.$r(new c.Swa(this.oD,this));this.bb.push(a);return a};f.qr=function(a){var b=null;0<=a&&a<this.bb.length&&(b=this.bb[a],this.bb.splice(a,1));return b};f.Uj=function(){this.bb=[]};e.ub(c.pka,"PRIM_WEB","JsonArray",{yc:{InsertArray:f.Q7a,InsertObject:f.Y7a,InsertNumber:function(a){return this.X7a(e.Ft(a))},InsertString:function(a){return this.a8a(e.ma(a))},InsertBoolean:function(a){return this.T7a(e.Ja(a))},InsertNull:f.W7a}});c.qka=function(a,b){g.v.call(this,a,b);this.bb={}};var g=
c.u(c.qka,c.M2);g.i9=function(){return a.mC.wEb};g.uJ=function(){var a={},b;for(b in this.bb)a[b]=this.bb[b].uJ();return a};g.we=function(a){a=this.bb[a];return a===l?null:a};g.cw=function(a){var b=this.aaa();return 0<=a&&a<b.length?this.bb[b[a]]:null};g.wc=function(){return this.aaa().length};g.hHb=function(a){for(var b in this.bb)if(this.bb[b]===a)return b};g.g4a=function(a){var b=-1,c;for(c in this.bb)if(b++,this.bb[c]===a)break;return b};g.oxb=function(a){for(var b in a){var c=u(this.oD,this,
a[b]);c&&(this.bb[b]=c)}this.YE()};g.YE=function(){delete this.vD};g.aaa=function(){if(this.vD===l){this.vD=[];for(var a in this.bb)this.vD.push(a)}return this.vD};g.Q7a=function(a){var b=e.$r(new c.pka(this.oD,this));this.bb[a]=b;this.YE();return b};g.Y7a=function(a){var b=e.$r(new c.qka(this.oD,this));this.bb[a]=b;this.YE();return b};g.a8a=function(a,b){var d=e.$r(new c.Uwa(this.oD,this,b));this.bb[a]=d;this.YE();return d};g.T7a=function(a,b){var d=e.$r(new c.Rwa(this.oD,this,b));this.bb[a]=d;this.YE();
return d};g.W7a=function(a){var b=e.$r(new c.Swa(this.oD,this));this.bb[a]=b;this.YE();return b};g.X7a=function(a,b){var d=e.$r(new c.Twa(this.oD,this,b));this.bb[a]=d;this.YE();return d};g.nr=function(a){var b=null;this.bb[a]!==l&&(b=this.bb[a],delete this.bb[a],this.YE());return b};g.qr=function(a){var b=this.aaa();return 0<=a&&a<b.length?this.nr(b[a]):null};g.Uj=function(){this.bb={};this.YE()};e.ub(c.qka,"PRIM_WEB","JsonObject",{yc:{InsertArray:function(a){return this.Q7a(e.ma(a))},InsertObject:function(a){return this.Y7a(e.ma(a))},
InsertNumber:function(a,b){return this.X7a(e.ma(a),e.Ft(b))},InsertString:function(a,b){return this.a8a(e.ma(a),e.ma(b))},InsertBoolean:function(a,b){return this.T7a(e.ma(a),e.Ja(b))},InsertNull:function(a){return this.W7a(e.ma(a))}}});c.Twa=function(a,b,c){m.v.call(this,a,b);this.$a=c};var m=c.u(c.Twa,c.M2);m.i9=function(){return a.mC.vEb};m.uJ=function(){return this.$a};m.ZXa=function(){return this.$a};m.i7=function(){return this.$a.toString()};e.ub(c.Twa,"PRIM_WEB","JsonNumber",{});c.Uwa=function(a,
b,c){k.v.call(this,a,b);this.$a=c};var k=c.u(c.Uwa,c.M2);k.i9=function(){return a.mC.xEb};k.uJ=function(){return this.$a};k.i7=function(){return this.$a};k.ZXa=function(){if(isNaN(Number(this.$a)))throw e.eya(this.$a);return new c.Mi(this.$a)};k.PXa=function(){if("TRUE"==this.$a.toUpperCase())return!0;if("FALSE"==this.$a.toUpperCase())return!1;throw e.ngb(this.$a);};e.ub(c.Uwa,"PRIM_WEB","JsonString",{});c.Rwa=function(a,b,c){d.v.call(this,a,b);this.$a=c};var d=c.u(c.Rwa,c.M2);d.i9=function(){return a.mC.uEb};
d.uJ=function(){return this.$a};d.PXa=function(){return this.$a};d.i7=function(){return this.$a?"true":"false"};e.ub(c.Rwa,"PRIM_WEB","JsonBoolean",{});c.Swa=function(a,b){q.v.call(this,a,b)};var q=c.u(c.Swa,c.M2);q.i9=function(){return a.mC.W1a};q.uJ=function(){return null};e.ub(c.Swa,"PRIM_WEB","JsonNull",{})},{rp:["PRIM_PCOL"]});