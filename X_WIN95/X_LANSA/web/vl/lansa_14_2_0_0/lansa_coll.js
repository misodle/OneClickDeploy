window.LANSA.addSrc("coll",function(e,c,a,b,l){a.eKa={gic:0,f2a:1};var u=0;c.Pja=function(){p.v.call(this)};var p=c.u(c.Pja,c.ld);p.nvb=function(){return!1};p.lMb=function(){return!1};p.wc=function(){return 0};p.cg=function(){return 0==this.wc()};p.YU=function(a){a&&(a.va(),a.eec(this))};p.tV=function(a){a&&(a.xb(),a.ePc(this))};p.GX=function(a,b){this.RMa(b);null!=this.ZP&&this.ZP.GX(a,b)};p.j3=function(a,b){this.SMa(b);null!=this.ZP&&this.ZP.j3(a,b)};e.ad(c.Pja,"PRIM_COLL",{Va:{AllowsDuplicates:{f:function(){return this.nvb()}},
IsEmpty:{f:function(){return this.cg()}},IsOrdered:{f:function(){return this.lMb()}},ItemCount:{f:function(){return this.wc()}}}});c.ZKa=function(){r.v.call(this);this.bb=[];this.ZP=null};var r=c.u(c.ZKa,c.Pja);r.R=function(){this.Uj();r.j.R.call(this)};r.nvb=function(){return!0};r.lMb=function(){return!0};r.wc=function(){return this.bb.length};r.we=function(a){if(0>a||a>=this.bb.length)throw e.AC(a,this.bb.length);return this.bb[a]};r.ss=function(a,b){if(0>a||a>this.bb.length)throw e.AC(a,this.bb.length);
a==this.bb.length?this.bs(b):this.mgb(b,a)};r.f4a=function(a,b){return b===l?this.bb.indexOf(a):this.bb.indexOf(a,b)};r.mHb=function(a){return this.bb.lastIndexOf(a)+1};r.Z3a=function(){return 0<this.bb.length?this.bb[0]:null};r.q4a=function(){return 0<this.bb.length?this.bb[this.bb.length-1]:null};r.gkd=function(){return this.rda};r.WX=function(a){this.rda=a};r.JEa=function(a){this.WX(a.D0b())};r.Wd=function(a){return-1!=this.bb.indexOf(a)};r.bs=r.kLb=function(a){this.YU(a);this.bb.push(a);this.GX(a,
this.wc()-1)};r.jLb=function(a){this.YU(a);this.bb.unshift(a);this.GX(a,0)};r.iLb=function(a,b){if(0>b||b>=this.bb.length)throw e.AC(b,this.bb.length);this.YU(a);this.bb.splice(b+1,0,a);this.GX(a,b+1)};r.S7a=function(a,b){if(0>b||b>=this.bb.length)throw e.AC(b,this.bb.length);this.YU(a);this.bb.splice(b,0,a);this.GX(a,b)};r.nr=function(a){a=this.bb.indexOf(a);if(-1==a)throw e.FPc();return this.qr(a)};r.qr=function(a){if(0>a||a>=this.bb.length)throw e.AC(a,this.bb.length);var b=this.bb[a];this.bb.splice(a,
1);e.$fa(b);this.tV(b);this.j3(b,a);return b};r.ggb=function(){return this.qr(0)};r.igb=function(){return this.qr(this.bb.length-1)};r.Uj=function(){for(var a=0;a<this.bb.length;a++)this.tV(this.bb[a]);this.bb=[];this.raa()};r.reb=function(a){for(var b=0,c=0;c<this.bb.length;c++)this.bb[c]===a&&b++;return b};r.mgb=function(a,b){if(0>b||b>=this.bb.length)throw e.AC(b,this.bb.length);var c=this.bb[b];e.$fa(c);this.tV(c);this.bb[b]=a;this.YU(a);return c};r.$f=function(){var a=e.M_a(this.rda);if(a=e.he(a.DMa,
a.Anb))this.yka(a),this.bs(a)};r.mj=function(){this.Uj()};r.Hh=function(a){if(0<=a&&a<this.wc()){var b=this.we(a);b&&this.T$(b);this.mk=a;return"OK"}this.mk=-1;return"NR"};r.Zm=function(){return this.wc()};r.Gl=function(a){a===l&&(a=this.mk);0<=a&&a<this.wc()&&this.qr(a)};r.kk=function(){var a=this.mk;0<=a&&a<this.wc()&&(a=this.we(a))&&this.yka(a)};r.ql=function(a,b,c){for(var d=0;d<this.wc();d++){var e=this.we(d);if(e&&(e=e.wW())){var f={},k;for(k in e)f[k]=e[k].get();if(a(f))return null!=b&&b.set(d+
1),c&&this.Hh(d),this.mk=d,"OK"}}return"NR"};r.Xo=function(a){this.Uj();for(var b=0;b<a;b++)this.$f()};r.Eq=function(){return new c.obb(this)};r.Egb=function(){null==this.ZP&&(this.ZP=new c.aTb);return this.ZP};c.aTb=function(){f.v.call(this)};var f=c.u(c.aTb,c.pbb);c.WSb=function(){g.v.call(this);this.mk=-1};var g=c.u(c.WSb,c.ZKa);g.AR=function(){return"PRIM_LCOL<"+this.rda+">"};g.Mec=function(a){for(var b=0;b<a.wc();b++)this.bs(a.we(b))};g.tic=function(a){for(var b=e.he("PRIM_LCOL"),c=0;c<this.wc();c++)b.bs(this.we(c));
for(c=0;c<a.wc();c++)b.bs(a.we(c));e.$fa(b);return b};e.ad(c.WSb,"PRIM_LCOL",{sH:a.Xt.ZYa,Va:{First:{f:function(){return this.Z3a()}},Last:{f:function(){return this.q4a()}},Item:{f:function(a){return this.we(e.aa(a)-1)},i:function(a,b){this.ss(e.aa(a)-1,b)}},IndexOf:{f:function(a,b){return this.f4a(a,b===l?l:e.aa(b)-1)+1}},LastIndexOf:{f:g.mHb},Collects:{i:g.WX}},yc:{Append:g.Mec,Concatenate:g.tic,Contains:g.Wd,Insert:g.bs,InsertFirst:g.jLb,InsertLast:g.kLb,InsertAfter:function(a,b){return this.iLb(a,
e.aa(b)-1)},InsertBefore:function(a,b){return this.S7a(a,e.aa(b)-1)},Remove:g.nr,RemoveAt:function(a){return this.qr(e.aa(a)-1)},RemoveFirst:g.ggb,RemoveLast:g.igb,RemoveAll:g.Uj,OccurrencesOf:g.reb,ReplaceAt:function(a,b){return this.mgb(a,e.aa(b)-1)}},dg:{bg:"Item"},Mp:{m$:function(a){var b=e.he("PRIM_NMBR");b.set(a);return b},Zo:function(a){return this.we(e.aa(a)-1)},kw:function(){return this.wc()}},ow:{$f:g.$f,Hh:function(a){return this.Hh(e.aa(a)-1)},Xo:g.Xo,mj:g.mj,Zm:g.Zm,Gl:function(a){return this.Gl(a?
e.aa(a)-1:l)},kk:g.kk,ql:g.ql,Eq:g.Eq}});c.qPb=function(){m.v.call(this)};var m=c.u(c.qPb,c.ZKa);m.AR=function(){return"PRIM_ACOL<"+this.rda+">"};e.ad(c.qPb,"PRIM_ACOL",{sH:a.Xt.ZYa,Va:{First:{f:function(){return this.Z3a()}},Last:{f:function(){return this.q4a()}},Item:{f:function(a){return this.we(e.aa(a)-1)},i:function(a,b){this.ss(e.aa(a)-1,b)}},IndexOf:{f:function(a,b){return this.f4a(a,b===l?l:e.aa(b)-1)+1}},LastIndexOf:{f:m.mHb},Collects:{i:m.WX}},yc:{Contains:m.Wd,Insert:m.bs,InsertFirst:m.jLb,
InsertLast:m.kLb,InsertAfter:function(a,b){return this.iLb(a,e.aa(b)-1)},InsertBefore:function(a,b){return this.S7a(a,e.aa(b)-1)},Remove:m.nr,RemoveAt:function(a){return this.qr(e.aa(a)-1)},RemoveFirst:m.ggb,RemoveLast:m.igb,RemoveAll:m.Uj,OccurrencesOf:m.reb,ReplaceAt:function(a,b){return this.mgb(a,e.aa(b)-1)}},dg:{bg:"Item"},Mp:{m$:function(a){var b=e.he("PRIM_NMBR");b.set(a);return b},Zo:function(a){return this.we(e.aa(a)-1)},kw:function(){return this.wc()}},ow:{$f:m.$f,Hh:function(a){return this.Hh(e.aa(a)-
1)},Xo:m.Xo,mj:m.mj,Zm:m.Zm,Gl:function(a){return this.Gl(a?e.aa(a)-1:l)},kk:m.kk,ql:m.ql,Eq:m.Eq}});c.hTb=function(){k.v.call(this)};var k=c.u(c.hTb,c.ZKa);k.bs=function(b){this.YU(b);for(var c=0,d=this.bb.length-1;c<=d;){var e=Math.floor((c+d)/2);this.Yqc(b,this.bb[e])==a.Zc.il?d=e-1:c=e+1}this.bb.splice(c,0,b)};k.Yqc=function(b,c){var d=a.Zc.Mj,f=e.Nb();f.Rb("SUBJECT",b);f.Rb("OBJECT",c);f.zM("RESULT",d,a.Zc.G);this.za(a.K.kFa,f);d=f.U3a("RESULT",a.Zc.G);f.hc();return d};e.ad(c.hTb,"PRIM_SACO",
{Va:{First:{f:function(){return this.Z3a()}},Last:{f:function(){return this.q4a()}},Item:{f:function(a){return this.we(e.aa(a)-1)},i:function(a,b){this.ss(e.aa(a)-1,b)}},IndexOf:{f:function(a,b){return this.f4a(a,b===l?l:e.aa(b)-1)+1}},Collects:{i:k.WX}},yc:{Remove:k.nr,RemoveAt:function(a){return this.qr(e.aa(a)-1)},RemoveAll:k.Uj,RemoveLast:k.igb,RemoveFirst:k.ggb,Contains:k.Wd,OccurrencesOf:k.reb,Insert:k.bs},dg:{bg:"Item"},Mp:{m$:function(a){var b=e.he("PRIM_NMBR");b.set(a);return b},Zo:function(a){return this.we(e.aa(a)-
1)},kw:function(){return this.wc()}}});c.lX=function(a){d.v.call(this);this.$bc=a};var d=c.u(c.lX,c.Pja);d.we=function(a){if(0>a||a>=this.wc())throw e.AC(a,this.wc());return this.cw(a)};d.wc=function(){return this.$bc.wc()};d.cw=function(a){return this.$bc.cw(a)};e.ad(c.lX,"PRIM_PCOL",{Va:{Item:{f:function(a){return this.we(e.aa(a)-1)},i:function(a,b){this.ss(e.aa(a)-1,b)}}},dg:{bg:"Item"},Mp:{Zo:function(a){return this.cw(e.aa(a)-1)},kw:function(){return this.wc()}}});c.VSb=function(){q.v.call(this);
this.bb={};this.RP=null;this.Ie=a.eKa.f2a};var q=c.u(c.VSb,c.Pja);q.R=function(){this.Uj();q.j.R.call(this)};q.AR=function(){return"PRIM_KCOL<"+this.SSa+" "+this.gwc()+">"};q.Mf=function(){return this.Ie};q.vb=function(a){this.Ie=a};q.wc=function(){return this.aaa().length};q.we=function(b){b=this.uZa(b);if(this.bb[b]===l&&this.Ie==a.eKa.f2a){var c=null;this.oqb?c=new this.oqb:this.SSa&&(c=e.M_a(this.SSa),c=e.he(c.DMa,c.Anb));c&&(this.bb[b]=c,this.YU(c),this.YE())}return this.bb[b]};q.ss=function(a,
b){a=this.uZa(a);var c=a.toString();this.bb[c]===l?this.YE():this.tV(this.bb[c]);this.YU(b);this.bb[c]=b};q.cw=function(a){a=this.aaa()[a];return this.bb[a]};q.m4a=function(a){a=this.aaa()[a];this.RP.set(a);return this.RP};q.n4a=function(a){for(var b in this.bb)if(this.bb[b]===a)return this.xZa(b);return this.RP.Exc()};q.WX=function(a,b){"string"!==typeof a?this.oqb=a:(this.SSa=a,this.oqb=b)};q.EOa=function(a){this.RP=new a;this.RP.va()};q.hkd=function(){return this.SSa};q.gwc=function(){var a="";
this.RP&&(a=this.RP.qta());return a};q.JEa=function(a){this.WX(a.D0b(),a.Ywb(0));this.EOa(a.Ywb(1))};q.uZa=function(a){this.RP.set(a);a=this.RP.get();return a.toString()};q.xZa=function(a){this.RP.set(a);return this.RP.get()};q.nr=function(a){a=this.uZa(a);var b=null;this.bb[a]!==l&&(b=this.bb[a],e.$fa(b),this.tV(b),delete this.bb[a],this.YE(),this.j3(b,0));return b};q.Uj=function(){for(var a in this.bb)this.tV(this.bb[a]);this.bb={};this.YE();this.raa()};q.YE=function(){delete this.vD};q.aaa=function(){var a=
this;if(this.vD===l){this.vD=[];for(var b in this.bb)this.vD.push(b);this.vD.sort(function(b,c){b=a.xZa(b);c=a.xZa(c);return e.cmp(b,c)})}return this.vD};var v={COLLECTION:a.eKa.gic,FACTORY:a.eKa.f2a};e.ad(c.VSb,"PRIM_KCOL",{Va:{Style:{f:function(){return e.Ga(this.Mf(),v)},i:function(a){this.vb(e.Aa(a,v))}},Item:{f:function(a){return this.we(a)},i:function(a,b){this.ss(a,b)},px:"na"},Collects:{i:q.WX},KeyedBy:{i:q.EOa},KeyOf:{f:function(a){return this.n4a(a)},px:"na"}},yc:{Remove:q.nr,RemoveAll:q.Uj},
dg:{bg:"Item"},Mp:{m$:function(a){return this.m4a(e.aa(a)-1)},Zo:function(a){return this.cw(e.aa(a)-1)},kw:function(){return this.wc()}}});c.lSb=function(){D.v.call(this);this.LP=(u++).toString();this.QF=[];this.rda=this.Ibc=""};var D=c.u(c.lSb,c.Pja);D.AR=function(){return"PRIM_DCOL<"+this.rda+" "+this.Ibc+">"};D.wc=function(){return this.QF.length};D.cw=function(a){return this.QF[a].zF[this.LP]};D.we=function(a){return a.zF===l||a.zF[this.LP]===l?null:a.zF[this.LP]};D.ss=function(a,b){a.zF===l&&
(a.zF={});var c=a.zF[this.LP];c===l?(this.QF.push(a),a.va()):this.tV(c);a.zF[this.LP]=b;this.YU(b)};D.m4a=function(a){return this.QF[a]};D.WX=function(a){this.rda=a};D.EOa=function(a){this.Ibc=a};D.n4a=function(a,b){for(var c=b;c<this.QF.length;c++){var d=this.QF[c];if(d.zF[this.LP]===a)return d}return null};D.Hqc=function(a){return this.we(a)};D.Wd=function(a){return-1!=this.QF.indexOf(a)};D.yic=function(a){for(var b=0;b<this.QF.length;b++)if(this.QF[b].zF[this.LP]===a)return!0;return!1};D.bs=function(a,
b){var c=this.we(b);this.ss(b,a);return c};D.nr=function(a){if(a.zF!==l){var b=a.zF[this.LP];if(b!==l)return delete a.zF[this.LP],this.QF.splice(this.QF.indexOf(a),1),e.$fa(b),this.tV(b),a.xb(),this.j3(b,0),b}return null};D.Uj=function(){for(var a=0;a<this.QF.length;a++){var b=this.QF[a],c=b.zF[this.LP];c!==l&&(delete b.zF[this.LP],this.tV(c))}this.QF=[];this.raa()};e.ad(c.lSb,"PRIM_DCOL",{Va:{Item:{f:function(a){return this.we(a)},i:function(a,b){this.ss(a,b)},px:"na"},Collects:{i:D.WX,px:"na"},
KeyedBy:{i:D.EOa,px:"na"},KeyOf:{f:function(a,b){return this.n4a(a,b!==l?e.aa(b)-1:0)},px:"na"}},yc:{Contains:D.Wd,ContainsItem:D.yic,Insert:D.bs,Remove:D.nr,RemoveAll:D.Uj,Find:D.Hqc},dg:{bg:"Item"},Mp:{m$:function(a){return this.m4a(e.aa(a)-1)},Zo:function(a){return this.cw(e.aa(a)-1)},kw:function(){return this.wc()}}})});