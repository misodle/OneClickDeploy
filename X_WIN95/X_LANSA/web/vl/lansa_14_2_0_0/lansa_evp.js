window.LANSA.addSrc("evp",function(e,c,a,b){var l=a.wk.jG,u=a.Wm.Gsa,p=a.Gi.FB,r=a.Xl.Q2,f=null;a.nw={Xja:0,Wja:16,G2:32,jbb:64,U$a:128};a.nw.G={NONE:a.nw.Xja,LEFT:a.nw.Wja,TOP:a.nw.G2,RIGHT:a.nw.jbb,BOTTOM:a.nw.U$a};a.sS={h6a:256,sJb:512,rJb:1024};a.sS.G={LEFT:a.sS.h6a,RIGHT:a.sS.sJb,CENTER:a.sS.rJb};a.uS={f$b:4096,e$b:8192,sob:16384};a.uS.G={TOP:a.uS.f$b,BOTTOM:a.uS.e$b,CENTER:a.uS.sob};a.X1a={KJd:0,rob:65536};a.lE={eEb:15,mEb:240,kEb:3840,sEb:61440,qhd:983040,fEb:15728640,iEb:251658240,lEb:4026531840};
a.XE={EMc:0,bfb:256,cfb:512,MMa:1024,afb:2048};a.uh={Q1a:1,L1a:2,PGa:4,T1a:8,U1a:16,P1a:32,S1a:64,RGa:128,QGa:65536,qEb:131072,V1a:262144,O1a:524288,pEb:3840,nEb:61440,eha:4026531840};c.A2=function(c){g.v.call(this);this.uCa=c;this.kd=b.zd(0,0,0,0);this.Pg=0;this.Og=150;this.hj=this.ij=0;this.jx=this.kq=this.lQ=this.fb=null;this.Cu=a.Xm.b8;this.Vd=null;this.Se=this.cl=0;this.ksb=this.lsb=this.jrb=this.krb=this.lrb=null;this.Ipa=this.qpa=this.DI="";this.qI=null;this.Lc=this.Lc|a.Sb.wja|a.Sb.Fva|a.Sb.qS|
a.Sb.n$|a.Sb.Hva;this.cl=a.wk.F0|a.nw.Wja|a.sS.h6a|a.uS.sob;this.Se=a.uh.PGa|a.uh.RGa|a.XE.MMa|a.uh.QGa;this.Tp(!1);this.m3b(l);this.$k(u);this.Zk(p);this.vl(r);this.rOa(!0)};var g=c.u(c.A2,c.Ul);g.R=function(){g.j.R.call(this);this.rza(null);this.Daa();this.U3(null);b.ja(this.lQ);this.lQ=null;b.ja(this.qI);this.qI=null};g.By=function(){return this.uCa.By()};g.jHb=function(){return this.cl&a.lE.kEb};g.jA=function(){return this.cl&a.lE.mEb};g.QR=function(){return this.Se&a.uh.pEb};g.kHb=function(){return this.cl&
a.lE.sEb};g.T3=function(b){this.DI!=b&&(this.DI=b,this.ea(a.a.h))};g.xIa=function(){return this.DI};g.Bha=function(){var a=[""],b=this.bc();b&&b.I1b(a);return a[0]};g.VWc=function(b){b|=this.cl&~a.lE.kEb;this.cl!=b&&(this.cl=b,this.pb(),this.ea(a.a.h),this.ff())};g.Y3b=function(b){b|=this.Se&~a.uh.pEb;this.Se!=b&&(this.Se=b,this.pb(),this.ea(a.a.h),this.cob(),this.ff())};g.hba=function(b){b|=this.cl&~a.lE.mEb;this.cl!=b&&(this.cl=b,this.pb(),this.ea(a.a.h),this.ff())};g.UQc=function(){var b=new c.ha(0,
0,0,0);if(this.jA()!=a.nw.Xja){for(var b=this.ve(),d=b.qa,e=b.pa,f=0,g=0,h,m=this.Lk,l=0;l<m.length&&null!=(h=m[l]);l++)if(h!=this.Ur())var p=h.bk(),d=Math.min(d,p.O()),e=Math.min(e,p.M()),f=Math.max(f,p.qa),g=Math.max(g,p.pa);switch(this.jA()){case a.nw.Xja:b.eh(d,b.ba());break;case a.nw.Wja:b.eh(d,b.ba());break;case a.nw.G2:b.eh(b.$(),e);break;case a.nw.jbb:b.SNa(f,0);break;case a.nw.U$a:b.SNa(0,g)}}return b};g.c4a=function(){return(this.cl&a.lE.lEb)>>28};g.m3b=function(b){b=this.cl&~a.lE.lEb|b<<
28;this.cl!=b&&(this.cl=b,this.pb(),this.ea(a.a.h),this.ff())};g.p4a=function(){return this.cl&a.lE.eEb};g.YWc=function(b){b|=this.cl&~a.lE.eEb;this.cl!=b&&(this.cl=b,this.pb(),this.bd(),this.ea(a.a.h),this.ff())};g.C1=function(){var b;switch(this.p4a()){case a.wk.F0:case a.wk.Nra:case a.wk.Mra:b=this.mb().zla(this.p4a(),a.X9.IKb);break;case a.wk.jG:b=this.Hb()}return b};g.ZWc=function(b){b|=this.cl&~a.lE.sEb;this.cl!=b&&(this.cl=b,this.pb(),this.bd(),this.ea(a.a.h),this.ff())};g.exc=function(){return this.hj};
g.fXc=function(b){this.hj!=b&&(this.hj=b,this.doa(32767,32767),this.pb(!0),this.ff(),this.ea(a.a.h))};g.fxc=function(){return this.Og};g.F3b=function(b){this.Og!=b&&(this.Og=b,this.doa(32767,32767),this.pb(!0),this.ff(),this.ea(a.a.h))};g.gxc=function(){return this.ij};g.iXc=function(b){this.ij!=b&&(this.ij=b,this.doa(32767,32767),this.pb(!0),this.ff(),this.ea(a.a.h))};g.hxc=function(){return this.Pg};g.kXc=function(b){this.Pg!=b&&(this.Pg=b,this.doa(32767,32767),this.pb(!0),this.ff(),this.ea(a.a.h))};
g.Sf=function(){var b=0,b=this.hj;this.lja()&&this.QR()==a.XE.afb&&(b+=17);return b};g.Ue=function(){var b=0,b=this.Og;this.lja()&&this.QR()==a.XE.bfb&&(b+=17);return b};g.Ff=function(){var b=0,b=this.ij;this.lja()&&this.QR()==a.XE.MMa&&(b+=17);return b};g.Oe=function(){var b=0,b=this.Pg;this.lja()&&this.QR()==a.XE.cfb&&(b+=17);return b};g.tf=function(){return 0!=(this.Se&a.uh.Q1a)?!0:!1};g.gi=function(b){b=this.Se&~a.uh.Q1a|(b?a.uh.Q1a:0);this.Se!=b&&(this.Se=b,this.Bd(a.U.Tva),this.ea(a.a.h))};
g.Zxc=function(){return 0!=(this.Se&a.uh.P1a)?!0:!1};g.qGd=function(b){b=this.Se&~a.uh.P1a|(b?a.uh.P1a:0);this.Se!=b&&(this.Se=b)};g.uqd=function(){return 17};g.C9=function(){return this};g.$xc=function(){var f=null;if(this.lja()){var d=this.C9();null==d.bA()&&(null==this.qI&&(e.yb("PRIM_PPNL"),this.qI=new c.sw),d.hF(this.qI),d.bA().Da(this,a.K.Ry,this.lmc),this.E1b());f=this.lQ}else d=this.C9(),null!=d.bA()&&(d.bA().Da(this,a.K.Ry,null),d.hF(null)),b.ja(this.lQ),this.lQ=null;return f};g.mb=function(){if(null==
this.fb){var b=this.uCa;this.hU||0!=(this.Se&a.uh.qEb)?(b.iib(!1),this.$Aa(b),b.sY(this.Jua()),b.iib(!this.Jua())):b.iib(!0);this.oF(this.fb,b);this.fb=b}return this.fb};g.Us=function(){return null};g.vJ=function(){var a=null;this.Ur()&&(a=this.Ur().fa);return a};g.u1=function(){var a=null;this.Us()&&(a=this.Us().Mf());return a};g.Zaa=function(b){this.Us()&&this.Us().Mf()!=b&&(this.Us().vb(b),this.m(a.a.h))};g.B1=function(){var a=null;this.vJ()&&(a=this.vJ().Mf());return a};g.iba=function(b){this.vJ()&&
this.vJ().Mf()!=b&&(this.vJ().vb(b),this.m(a.a.h))};g.UHa=function(){var a=null;this.Us()&&(a=this.Us().Ol());return a};g.qOa=function(b){this.Us()&&this.Us().Ol()!=b&&(this.Us().Zl(b),this.m(a.a.h))};g.SHa=function(){var a=null;this.Us()&&(a=this.Us().Zv());return a};g.pOa=function(b){this.Us()&&this.Us().Zv()!=b&&(this.Us().NA(b),this.m(a.a.h))};g.dIa=function(){var a=null;this.vJ()&&(a=this.vJ().Ol());return a};g.FOa=function(b){this.vJ()&&this.vJ().Ol()!=b&&(this.vJ().Zl(b),this.m(a.a.h))};g.Lha=
function(){null==this.lrb&&(this.lrb=new c.gs(this.Us(),a.uf.HS));return this.lrb};g.VHa=function(){null==this.krb&&(this.krb=new c.gs(this.Us(),a.uf.GS));return this.krb};g.THa=function(){null==this.jrb&&(this.jrb=new c.gs(this.Us(),a.uf.X2));return this.jrb};g.fIa=function(){null==this.lsb&&(this.lsb=new c.gs(this.vJ(),a.uf.HS));return this.lsb};g.eIa=function(){null==this.ksb&&(this.ksb=new c.gs(this.vJ(),a.uf.GS));return this.ksb};g.Yuc=function(){return this.qpa};g.pWc=function(b){this.qpa!=
b&&(this.qpa=b,this.MAa(),this.ea(a.a.h))};g.jwc=function(){return this.Ipa};g.XWc=function(b){this.Ipa!=b&&(this.Ipa=b,this.MAa(),this.ea(a.a.h))};g.to=function(){return this.tf()};g.lvd=function(){return this.wd()};g.lja=function(){return this.V1()?this.ZJa()?!0:this.Zxc():!1};g.ZJa=function(){return!1};g.mvd=function(){var b=!1;this.jA()==a.nw.Wja&&this.QR()==a.XE.bfb?b=!0:this.jA()==a.nw.jbb&&this.QR()==a.XE.MMa&&(b=!0);return b};g.nvd=function(){var b=!1;this.jA()==a.nw.G2&&this.QR()==a.XE.cfb?
b=!0:this.jA()==a.nw.U$a&&this.QR()==a.XE.afb&&(b=!0);return b};g.xR=function(){return 0!=(this.Se&a.uh.L1a)?!0:!1};g.D3=function(b){b=this.Se&~a.uh.L1a|(b?a.uh.L1a:0);this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.Jl=function(){return 0!=(this.Se&a.uh.PGa)?!0:!1};g.qm=function(b){b=this.Se&~a.uh.PGa|(b?a.uh.PGa:0);this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.mm=function(){return 0!=(this.Se&a.uh.T1a)?!0:!1};g.$l=function(b){b=this.Se&~a.uh.T1a|(b?a.uh.T1a:0);this.Se!=b&&(this.Se=b,this.Kg(),
this.ea(a.a.h))};g.eu=function(){return 0!=(this.Se&a.uh.U1a)?!0:!1};g.yr=function(b){b=this.Se&~a.uh.U1a|(b?a.uh.U1a:0);this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.Nf=function(){return 0!=(this.Se&a.uh.V1a)?!0:!1};g.lh=function(b){b=this.Se&~a.uh.V1a|(b?a.uh.V1a:0);this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.V1=function(){return 0!=(this.Se&a.uh.S1a)?!0:!1};g.hma=function(b){b=this.Se&~a.uh.S1a|(b?a.uh.S1a:0);this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.iwc=function(){return 0!=
(this.Se&a.uh.O1a)?!0:!1};g.WWc=function(b){var c=this.Se&~a.uh.O1a|(b?a.uh.O1a:0);this.Se!=c&&(this.Se=c,this.Ur().k4b(b),this.ea(a.a.h))};g.hua=function(){return 0!=(this.Se&a.uh.QGa)?!0:!1};g.Mib=function(b){b=this.Se&~a.uh.QGa|(b?a.uh.QGa:0);this.Se!=b&&(this.Se=b,this.v8c(),this.ea(a.a.h))};g.Jua=function(){return 0!=(this.Se&a.uh.RGa)?!0:!1};g.xZc=function(b){if(this.Jua()!=b){var c=null!=this.fb;this.sY(b);this.Daa();c&&this.mb();this.Kg();this.ea(a.a.h)}};g.sY=function(b){b=this.Se&~a.uh.RGa|
(b?a.uh.RGa:0);this.Se!=b&&(this.Se=b,this.ea(a.a.h))};g.Xi=function(){return(this.cl&a.lE.iEb)>>24};g.$k=function(b){b=this.cl&~a.lE.iEb|b<<24;this.cl!=b&&(this.cl=b,this.Kg(),this.ea(a.a.h))};g.ni=function(){return(this.cl&a.lE.fEb)>>20};g.Zk=function(b){b=this.cl&~a.lE.fEb|b<<20;this.cl!=b&&(this.cl=b,this.Kg(),this.ea(a.a.h))};g.Pj=function(){return(this.Se&a.uh.nEb)>>12};g.vl=function(b){b=this.Se&~a.uh.nEb|b<<12;this.Se!=b&&(this.Se=b,this.Kg(),this.ea(a.a.h))};g.LHa=function(){return b.jO()};
g.CIa=function(){return this.kq};g.U3=function(b){this.kq!=b&&(null!=this.kq&&(this.kq.xb(),this.kq.wa(this)),this.kq=b,null!=this.kq&&(this.kq.va(),this.kq.ya(this,this.nGa)),this.E1b(),this.ff(),this.ea(a.a.h))};g.rza=function(b){this.jx!=b&&(null!=this.jx&&this.jx.wa(this),this.jx.tm(b),null!=this.jx&&this.jx.ya(this,this.voc),this.Hk(!0),this.ea(a.a.h))};g.X5a=function(){return this.jx};g.gk=function(b){this.Cu!=b&&(this.Cu=b,this.Ur()&&this.Ur().gk(b),this.ff(),this.ea(a.a.h))};g.Nj=function(){return this.Cu};
g.La=function(){return this.mb().La()};g.Wa=function(a){this.mb().Wa(a)};g.vc=function(){this.za(a.K.Ig)};g.Nhd=function(){};g.j2=function(){this.mr(this,a.U.z$a)};g.Gwb=function(){this.Lha().nr(f)};g.r3b=function(){null==f&&(f=new c.qb,f.fp(a.l.KA),f.rn(2),f.Km(2),f.Yl(2),f.ul(2));this.Lha().Sg(f)};g.Sfa=function(){return this};g.v8c=function(){this.lQ&&this.lQ.Ve(this.hua())};g.E1b=function(){var a=this.kq;null==a&&(a=b.Q().hia());this.lQ&&this.lQ.Xc(a);this.C9().YX(a)};g.pe=function(){var a=this.$xc();
if(a){var b=this.PKc();a.hb(b)}this.Ur()&&(a=this.UQc(),this.RAa(),this.Ur().hb(a))};g.RAa=function(){var b=this.C1(),c=this.Ur();if(c){c.Vb(b);c.Qf(this.ae());switch(this.jHb()){case a.sS.h6a:c.Kb(a.wg.m0);break;case a.sS.sJb:c.Kb(a.wg.TI);break;case a.sS.rJb:c.Kb(a.wg.Mz)}switch(this.kHb()){case a.uS.f$b:c.Lm(a.Wg.qZ);break;case a.uS.e$b:c.Lm(a.Wg.YO);break;case a.uS.sob:c.Lm(a.Wg.aq)}}};g.Ur=function(){null==this.Vd&&this.wd()&&(e.yb("PRIM_LABL"),this.Vd=new c.lr,this.Vd.Ia(this),this.Vd.lh(!1),
this.Vd.Ve(!1),this.Vd.Tp(!1),this.Vd.gk(this.Nj()),this.Vd.ue(5),this.Mb()&&this.Vd.tg());return this.Vd};g.Cha=function(){return b.jO()};g.PKc=function(){var b=this.Cha(),d;switch(this.QR()){case a.XE.EMc:d=new c.ha(b.O(),b.M(),0,0);break;case a.XE.bfb:d=new c.ha(b.O()-17,b.M(),17,b.ba());break;case a.XE.MMa:d=new c.ha(b.qa,b.M(),17,b.ba());break;case a.XE.cfb:d=new c.ha(b.O(),b.M()-17,b.$(),17);break;case a.XE.afb:d=new c.ha(b.O(),b.pa,b.$(),17)}return d};g.Daa=function(){var a=this.fb;this.fb=
null;this.oF(a,null)};g.$Aa=function(a){this.Jua()&&null==a.kv()&&this.sY(!1)};g.oF=function(){};g.fl=function(b,c,e,f,m){if(e==a.K.GJ||e==a.K.VG||e==a.K.nK||e==a.K.oK||this.wd()&&e==a.K.Zt)return m;b==this.lQ&&e==a.K.fc&&(this.Jd().RB()!=this.lQ||this.hua()||this.Jd().Xy(this),this.PZc(),m=!0);return g.j.fl.call(this,b,c,e,f,m)};g.Sv=function(){var a=null;this.Gy()&&this.NJ()&&(a=this);return a};g.doa=function(a,c){this.Og=b.zg(this.Og,-a,a);a=0<=this.Og?a-this.Og:a+this.Og;this.ij=b.zg(this.ij,
-a,a);this.Pg=b.zg(this.Pg,-c,c);c=0<=this.Pg?c-this.Pg:c+this.Pg;this.hj=b.zg(this.hj,-c,c)};g.Ixa=function(){this.RAa();g.j.Ixa.call(this)};g.Hxa=function(){this.RAa();g.j.Hxa.call(this)};g.pga=function(){e.yb("PRIM_FLD");var a=this.By();return a&&(a=a.Cr)?new c.Rja(a):null};g.Wc=function(){this.dG(a.Sb.UJ,this.OJ());g.j.Wc.call(this)};g.MAa=function(){};g.lmc=function(a,b){this.dHa();b.ep("CONTINUE",!1)};g.voc=function(b,c){c.Ya==a.a.Pb?this.rza(null):c.Ya==a.a.h&&this.Hk(!0)};g.nGa=function(b,
c){switch(c.Ya){case a.a.rb:case a.a.Pb:c.$h==this.kq&&this.U3(null);break;case a.a.h:c.$h==this.kq&&this.ff()}};g.E0a=g[a.U.Tva]=function(){this.Kg()};g.iBb=g[a.U.z$a]=function(){var a=null!=this.fb;this.Daa();a&&this.mb();this.Kg()};g.Vz=g[a.U.fO]=function(a){this.Ql()||this.Rsa();g.j.Vz.call(this,a)};g.rx=g[a.U.VJ]=function(a){var b=a.Ic;this.j8();b.df()&&g.j.rx.call(this,a)};g.hnc=g[a.U.YNb]=function(a){this.lja()&&(this.PZc(),a.Ee=!0)};g.iE=g[a.U.Ix]=function(){this.pb();this.ff()};g.osa=g[a.U.Wva]=
function(b){var c=!1,e="";switch(this.c4a()){case a.wk.F0:case a.wk.Nra:case a.wk.Mra:this.mb().zla(this.c4a(),a.X9.b7a,e);break;case a.wk.jG:e=this.wG()}""!=e&&(b.Yc.ib=e,c=!0);c||g.j.osa.call(this,b)};e.ad(c.A2,"PRIM_EVP",{FXa:"PRIM_CTRL",Va:{Placeholder:{f:g.xIa,i:function(a){this.T3(e.ma(a))}},UsePicklist:{f:g.Jua,i:function(a){this.xZc(e.Ja(a))}},LabelSelectable:{f:g.iwc,i:function(a){this.WWc(e.Ja(a))}},MarginLeft:{f:g.fxc,i:function(a){this.F3b(e.aa(a))}},MarginTop:{f:g.hxc,i:function(a){this.kXc(e.aa(a))}},
MarginBottom:{f:g.exc,i:function(a){this.fXc(e.aa(a))}},MarginRight:{f:g.gxc,i:function(a){this.iXc(e.aa(a))}},Caption:{f:g.Hb,i:function(a){this.Vb(e.ma(a))}},HintType:{f:g.c4a,i:g.m3b},LabelType:{f:function(){return e.Ga(this.p4a(),a.wk.G)},i:function(b){this.YWc(e.Aa(b,a.wk.G))}},LabelText:{f:g.C1},LabelPosition:{f:function(){return e.Ga(this.jA(),a.nw.G)},i:function(b){this.hba(e.Aa(b,a.nw.G))}},LabelHorAlignment:{f:function(){return e.Ga(this.jHb(),a.sS.G)},i:function(b){this.VWc(e.Aa(b,a.sS.G))}},
LabelVerAlignment:{f:function(){return e.Ga(this.kHb(),a.uS.G)},i:function(b){this.ZWc(e.Aa(b,a.uS.G))}},ReadOnly:{f:g.tf,i:function(a){this.gi(e.Ja(a))}},Ellipses:{f:g.Nj,i:g.gk},EditThemeDrawStyle:{f:g.Yuc,i:function(a){this.pWc(e.ma(a))}},LabelThemeDrawStyle:{f:g.jwc,i:function(a){this.XWc(e.ma(a))}}}});var m=g;m.aD=m.applyDefault=function(){this.mb().JXa()}});