window.LANSA.addSrc("wrtn",function(e,c,a,b,l){function u(a){return null===a?e.Le:"object"==typeof a?a.mimetype&&a.data&&a.filename?new c.ME(a):"":a}function p(a){if(a===e.Le)return null;switch(typeof a){case "object":if(a instanceof c.Mi)return a.toString();if(c.wo&&a instanceof c.wo)return a.u7b();if(a instanceof c.ME)return a.Fpa}return a}function r(b,c,d){var e=document.createElement("form");e.setAttribute("method","post");e.setAttribute("action",b);d==a.JT.X5b&&e.setAttribute("target","_blank");
for(var f in c)c.hasOwnProperty(f)&&(b=document.createElement("input"),b.setAttribute("type","hidden"),b.setAttribute("name",f),b.setAttribute("value",c[f]),e.appendChild(b));document.body.appendChild(e);e.submit()}function f(a){return(a=a.sm)&&"M"==a}function g(a,b){q&&b.append("_SESSIONKEY",q);var d=a.FLD;if(d!==l)for(var f in d){var h=d[f];h!==e.Le&&(h instanceof c.ME?b.append(f,h.Uha(),h.Ug()):b.append(f,p(h)))}d=a.LIST;if(d!==l)for(var k in d){for(var g=d[k],m=g.Yn={},v=g.entryCount(),r=1;r<=
v;r++)for(f in g.getEntry(r),1==r&&b.append(k+"..",1),m){var h="000"+r.toString(),h=h.substr(h.length-4),u=k+"."+h+"."+f,h=m[f];h instanceof c.ME?b.append(u,h.Uha(),h.Ug()):b.append(u,p(h))}delete g.Yn}}function m(a,b){var c=b.webroutine={},d=c.context={};q&&(d["session-key"]=q);v&&(d["session-key-name"]=v);D&&(d["session-key-method"]=D);d=a.FLD;if(d!==l){var e=c.fields={},f;for(f in d)(e[f]={}).value=p(d[f])}d=a.LIST;if(d!==l){var c=c.lists={},h;for(h in d){for(var k=c[h]={},e=k.header=[],k=k.entries=
[],g=d[h],m=g.Yn={},r=g.entryCount(),u=1;u<=r;u++){g.getEntry(u);if(1==u)for(f in m){var x={};e.push(x);x.name=f}x=[];k.push(x);for(f in m)x.push(p(m[f]))}delete g.Yn}}}function k(a){if(a=a.context)q=a["session-key"],v=a["session-key-name"],D=a["session-key-method"]}function d(a,b,c){function d(a){if(a!=l){var b=a.FLD;f(a.LIST);f(b)}}function f(b){if(b!=l)for(var c in b)if(null===b[c])throw e.LPc(c,a.lWa,a.fWa);}d(b);d(c)}var q=l,v=l,D=l;a.JT={mlb:0,X5b:1};a.JT.G={CURRENT:a.JT.mlb,NEW:a.JT.X5b};e.ad(function(){},
"PRIM_WRTN",{});c.Wwa=function(a,b){h.v.call(this);this.lWa=a;this.fWa=b;this.Qsb=this.Srb=""};var h=c.u(c.Wwa,c.ld);h.Qnd=function(){return this.Srb};h.$Fd=function(a){this.Srb=a};h.Tpd=function(){return this.Qsb};h.nGd=function(a){this.Qsb=a};h.Myc=function(){return this.lWa};h.Ayc=function(){return this.fWa};h.Hy=function(){return b.Ajc(this.Srb,b.JHa(),this.lWa,this.fWa,this.nyc())};h.nyc=function(){var a=this.Qsb;""==a&&(a=b.IHa());return a};e.ub(c.Wwa,"PRIM_WEB","ServerRequest",{Va:{ServerModule:{f:h.Myc},
Routine:{f:h.Ayc}}});c.eka=function(a,b){x.v.call(this,a,b)};var x=c.u(c.eka,c.Wwa);x.oR=function(a,b){this.BEb(a,b,!1,null)};x.f8=function(a,c){this.BEb(a,c,!0,b.LO())};x.BEb=function(c,h,p,r){function x(c){var d=null;try{d=JSON.parse(c)}catch(f){d=null}if(d){if(c=d.webroutine)if(c=c.messages)for(var g=e.x4a(),m=0;m<c.length;m++)g.Sg(c[m],null);if(c=d["vlweb-error"]){var p=a.$O.gHa;switch(c["message-id"]){case "HM42":case "HM43":p=a.$O.FFb;D=v=q=l;break;case "HM05":p=a.$O.EFb}if(!ca.i8(p)&&c.message!==
l)throw e.NPc(ca.lWa,ca.fWa,c.message);}else{g=h;if(d=d.webroutine){m=g.FLD;if(m!==l){var I=d.fields;if(I)for(var B in m)c=I[B],c!==l&&(c=u(c.value),m[B].set(c))}B=g.LIST;if(B!==l&&(g=d.lists))for(p in B)if(m=B[p],m.mj(),c=g[p])for(var I=c.header,y=c.entries,O=0;O<y.length;O++){for(var F=m.Yn={},Ja=y[O],z=0;z<Ja.length;z++)c=u(Ja[z]),F[I[z].name]=c;m.$f();delete m.Yn}k(d)}ca.DV()}}else ca.i8(a.$O.gHa);b.Dw(r)}function I(){ca.i8(a.$O.gHa);b.Dw(r)}function W(a){a.lengthComputable&&ca.zrc(a.loaded,a.total,
e.aa(a.loaded/a.total*100))}function F(a){if(a.lengthComputable){var b=a.loaded/a.total*100;ca.iFb(a.loaded,a.total,e.aa(b))}else ca.iFb(a.loaded,-1,-1)}var ca=this;d(ca,c,h);if(f(c)){var ha=new FormData;g(c,ha);b.DMc(this.Hy(),ha,x,I,W,F,p)}else ha={},m(c,ha),b.x_b(this.Hy(),ha,x,I,W,F,p)};x.i8=function(c){var d=!1,d=e.Nb();d.zM("REASON",c,a.$O.G);d.Xe("HANDLED",!1);this.za(a.K.tR,d);(d=d.yf("HANDLED"))||(d=b.Op().qrc(this,c));return d};x.DV=function(){this.za(a.K.A0)};x.zrc=function(b,c,d){var f=
e.Nb();f.Lz("LOADED",b);f.Lz("TOTAL",c);f.Lz("PROGRESS",d);this.za(a.K.W8c,f)};x.iFb=function(b,c,d){var f=e.Nb();f.Lz("LOADED",b);f.Lz("TOTAL",c);f.Lz("PROGRESS",d);this.za(a.K.dpc,f)};e.ub(c.eka,"PRIM_WEB","DataRequest",{yc:{Execute:x.oR,ExecuteAsync:x.f8}});c.rka=function(b,c){I.v.call(this,b,c);this.Nk=a.JT.mlb};var I=c.u(c.rka,c.Wwa);I.pzc=function(){return this.Nk};I.djb=function(a){this.Nk=a};I.oR=function(a,b){d(this,a,b);var c={};q&&(c._SESSIONKEY=q);var e=a.FLD;if(e!==l)for(var f in e)c[f]=
p(e[f]);e=a.LIST;if(e!==l)for(var h in e){for(var k=e[h],g=k.Yn={},m=k.entryCount(),v=1;v<=m;v++)for(f in k.getEntry(v),1==v&&(c[h+".."]=1),g){var u="000"+v.toString(),u=u.substr(u.length-4);c[h+"."+u+"."+f]=p(g[f])}delete k.Yn}r(this.Hy(),c,this.Nk)};e.ub(c.rka,"PRIM_WEB","WebPageRequest",{Va:{Target:{f:function(){return e.Ga(this.Nk,a.JT.G)},i:function(b){this.djb(e.Aa(b,a.JT.G))}}},yc:{Execute:I.oR}});c.lka=function(b,c){W.v.call(this,b,c);this.Nk=a.JT.mlb};var W=c.u(c.lka,c.Wwa);W.pzc=function(){return this.Nk};
W.djb=function(a){this.Nk=a};W.oR=function(a,b){d(this,a,b);var c={};q&&(c._SESSIONKEY=q);var e=a.FLD;if(e!==l)for(var f in e)c[f]=p(e[f]);e=a.LIST;if(e!==l)for(var h in e){for(var k=e[h],g=k.Yn={},m=k.entryCount(),v=1;v<=m;v++)for(f in k.getEntry(v),1==v&&(c[h+".."]=1),g){var u="000"+v.toString(),u=u.substr(u.length-4);c[h+"."+u+"."+f]=p(g[f])}delete k.Yn}r(this.Hy(),c,this.Nk)};e.ub(c.lka,"PRIM_WEB","ResourceRequest",{Va:{Target:{f:function(){return e.Ga(this.Nk,a.JT.G)},i:function(b){this.djb(e.Aa(b,
a.JT.G))}}},yc:{Execute:W.oR}});b.rqc=function(b,c){var d=c.webroutine;if(d){var e=b.ey.Qta(),f=d.fields;if(f){var h=b.oya(e),k;for(k in f){var g=null,m=b.ui[k];m&&(g=m.Sfa());if(!g&&h)for(var q in h)if(m=h[q],m.xh()==k){g=m;break}g&&(m=u(f[k].value),g.set(m))}}if(d=d.lists){var e=b.VQc(e),l;for(l in d){f=null;if(m=b.ui[l])switch(m.pta()){case a.Xt.vob:case a.Xt.XRa:case a.Xt.ZYa:f=m}!f&&e&&(f=e[l]);if(f)for(m=d[l],h=m.header,k=m.entries,g=0;g<k.length;g++){q=f.Yn={};for(var p=k[g],v=0;v<p.length;v++)m=
u(p[v]),q[h[v].name]=m;f.$f();delete f.Yn}}}}};b.qqc=function(a){(a=a.webroutine)&&k(a)}});
