window.LANSA.addSrc("evef",function(e,c,a,b){e.Eb("PRIM_EVP");e.Eb("PRIM_EDIT");c.zQb=function(b){k.v.call(this,b);this.Zk|=a.Z1a.lob;this.Oe|=268435456;this.Ka=new c.yQb(this);this.Ka.Ia(this);this.Ka.Ha(this,a.M.fh,this.CB)};var k=c.u(c.zQb,c.Z1);k.rb=function(){b.ka(this.Ka);this.Ka=null;k.j.rb.call(this)};k.c9=function(){return this.Ka};k.Wo=function(b){this.Ka.Cm()!=b&&(this.Ka.Wo(b),this.ha(a.a.h))};k.Cm=function(){return this.Ka.Cm()};k.Xs=function(b){this.Ka.qq()!=b&&(this.Ka.Xs(b),this.ha(a.a.h))};
k.qq=function(){return this.Ka.qq()};k.nO=function(b){this.Ka.YB()!=b&&(this.Ka.nO(b),this.ha(a.a.h))};k.YB=function(){return this.Ka.YB()};k.jG=function(){return this.St()!=this.Tt()};k.Tt=function(){return this.Ka.Tt()};k.Uy=function(a){this.Ka.Uy(a)};k.St=function(){return this.Ka.St()};k.Ty=function(a){this.Ka.Ty(a)};k.gc=function(){return this.Ka.gc()};k.Ls=function(){return this.Ka.ea};k.lK=function(a){1==a?this.qn(268435456):this.qn(0)};k.hG=function(){var a=0;268435456==this.Di()&&(a=1);return a};
k.qn=function(b){this.Di()!=b&&(this.Oe=this.Oe&~a.ph.uga|b,this.Jg(),this.m(a.a.h))};k.Di=function(){return this.Oe&a.ph.uga};k.xJa=function(){return this.CG()?!0:!1};k.CG=function(){return 0<this.Di()};k.Yza=function(){this.Nr()&&this.Nr().hc(this.Uoa);this.Ka&&this.Ka.hc(this.Coa)};k.Iua=function(){this.Ka.fg(this.kb());this.Ka.mv(!0);this.Ka.$s(!0);this.Ka.Y2(this.ZQ());this.Ka.yi(this.mf());this.Ka.mH(this.Ri());this.Ka.p3(this.lI);this.Ka.km(this.il());this.Ka.Hm(this.dn());this.Ka.Ys(this.cw());
this.Ka.ql(this.fj());this.Ka.ol(this.ui());this.Ka.om(this.tk());this.kb().wJa()&&this.Ka.Sy("*")};k.$V=function(a){this.Iua();k.j.$V.call(this,a)};k.Pi=function(){this.Iua();k.j.Pi.call(this)};k.oe=function(a){if(this.Ka){var c=this.we(),e,g,n;this.td()?(g=this.Mg,n=this.Ng,e=c.$()-(this.Mg+this.Yi),c=c.ba()-(this.Ng+this.Xi)):(g=this.Ue(),n=this.Re(),e=c.$()-(this.Ue()+this.Of()),c=c.ba()-(this.Re()+this.cg()));this.Ka.hb(b.xd(g,n,e,c))}k.j.oe.call(this,a)};k.Rga=function(){var a;this.Ka&&(a=this.Ka.Uj());
return a};k.QC=function(a,b){a&&a.wa(this,this.fl);b&&b.ya(this,this.fl);this.Ka.fg(b)};k.Jp=function(){this.Ka.Je()};k.Ti=function(a){null!=this.Ka&&this.Ka.mH(this.Ri());k.j.Ti.call(this,a);this.Ka&&(this.Ka.Rp(null),this.Ka.mv(!0),this.Ka.$s(!0),this.dx&&this.Ka.Rp(this.dx))};k.Xnb=function(){this.Ka&&this.Ka.q9b()};k.jX=function(a,b){this.Ka&&this.Ka.jX(a,b)};k.EU=function(){this.Ka&&this.Ka.EU()};k.AI=function(a){this.Ka&&this.Ka.AI(a)};k.cK=function(a){this.Ka&&this.Ka.cK(a)};k.CB=function(){this.vc()};
k.fl=function(){};k.AFa=k[a.W.P9]=function(){this.Ka&&this.t3(this.HV())};k.RU=k[a.W.jw]=function(){this.Ka.Je()};k.JM=k[a.W.GJ]=function(){this.Ka.Je()};e.$c(c.zQb,"PRIM_EVEF",{eK:a.Fu.U6,Va:{ComponentVersion:{f:k.hG,i:function(a){this.lK(e.aa(a))}},AutoTab:{f:k.ZQ,i:function(a){this.Y2(e.Fa(a))}},AutoSelect:{f:k.il,i:function(a){this.km(e.Fa(a))}},WordWrap:{f:k.dg,i:function(a){this.Eh(e.Fa(a))}},ShowSelection:{f:k.dn,i:function(a){this.Hm(e.Fa(a))}},ShowSelectionHilight:{f:k.cw,i:function(a){this.Ys(e.Fa(a))}},
ShowPrompter:{f:k.v1,i:function(a){this.tla(e.Fa(a))}},PrompterImage:{f:k.VHa,i:k.q3},PrompterTabStop:{f:k.xta,i:function(a){this.Iib(e.Fa(a))}},UsePicklist:{f:k.BIa,i:function(a){this.WX(e.Fa(a))}},EditAlignment:{f:function(){return e.Ja(this.fj(),a.cm.H)},i:function(b){this.ql(e.Ba(b,a.cm.H))}},DisplayAlignment:{f:function(){return e.Ja(this.ui(),a.hi.H)},i:function(b){this.ol(e.Ba(b,a.hi.H))}},Text:{f:k.Qga},SelectionEnd:{f:k.St,i:function(a){this.Ty(e.aa(a))}},SelectionStart:{f:k.Tt,i:function(a){this.Uy(e.aa(a))}},
VisualStyleEdit:{f:k.X5a,i:k.Dya},NumericEditStyle:{f:function(){return e.Ja(this.tk(),a.Rl.H)},i:function(b){this.om(e.Ba(b,a.Rl.H))}},HasSelection:{f:k.jG},EditStyle:{f:k.V0,i:k.vaa},EditStyles:{f:k.Zga},EditMouseOverStyle:{f:k.iHa,i:k.WNa},EditMouseOverStyles:{f:k.jHa},EditFocusedStyle:{f:k.gHa,i:k.VNa},EditFocusedStyles:{f:k.hHa},LabelStyle:{f:k.b1,i:k.Baa},LabelStyles:{f:k.xHa},LabelMouseOverStyle:{f:k.vHa,i:k.lOa},LabelMouseOverStyles:{f:k.wHa},InputType:{f:function(){return e.Ja(this.Cm(),
a.re.H)},i:function(b){this.Wo(e.Ba(b,a.re.H))}},InputTypePattern:{f:k.qq,i:function(a){this.Xs(e.ra(a))}},SpellCheck:{f:k.YB,i:function(a){this.nO(e.Fa(a))}},Value:{f:function(){return this.Ma()},i:function(a){this.Ya(a)}}},Ec:{SelectText:function(a,b){this.jX(e.aa(a)-1,e.aa(b))}},Jf:{Ef:"Value"}});c.yQb=function(a){s.v.call(this);this.qbc=a};var s=c.u(c.yQb,c.hS);s.FR=function(){return this.qbc.rq()||this.qbc.mI?!1:s.j.FR.call(this)}},{rp:["PRIM_EVP","PRIM_EDIT"]});