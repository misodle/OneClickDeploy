window.LANSA.addSrc("atlm",function(e,c,a){e.Eb("PRIM_CPST");a.B6={efc:0,xvb:1,dfc:2,wvb:4,ffc:8,Xbd:15};a.ZN={xfb:0,q0b:1,p0b:2,jOc:3};a.ZN.H={VERTICAL:a.ZN.xfb,HORIZONTAL:a.ZN.q0b,DISPLAYPOSITION:a.ZN.p0b,EO:a.ZN.jOc};a.xva={O$c:0,Vob:1,M$c:2,Q$c:3,N$c:4,P$c:5,ELd:6};a.dyd={vLa:0,wLa:1};a.dZa={c$a:32};c.oTb=function(c,e,k){b.v.call(this);this.Nb=[];this.Nb=e;this.xh=this.Sh=k;this.Ioa=this.gqa=0;this.LO=a.B6.efc};var b=c.u(c.oTb,c.ke);b.R=function(){b.j.R.call(this)};c.Qva=function(){k.v.call(this);
this.HCa=a.ZN.xfb};e.Eb("PRIM_TBLO");var k=c.u(c.Qva,c.awa);k.R=function(){k.j.R.call(this)};k.Gqd=function(){return this.HCa};k.XXc=function(b){this.HCa!=b&&(this.HCa=b,this.m(a.a.h))};k.W2=function(a,b){var c=this.Qja(a);c.W2(b);return c};k.bN=function(a){return this.Ie(a).bN()};k.ajd=function(a){return this.Ie(a)};k.s4a=function(){return a.xva.Vob};k.Mn=function(b,c){var e=k.j.Mn.call(this,b,c);if(e){var f=this.Ie(b);!f||f.bN()!=a.dh.C6&&f.bN()!=a.dh.z6||(e=!1)}return e};k.Fp=function(b,c){var e=
k.j.Fp.call(this,b,c);if(e){var f=this.Ie(b);!f||f.bN()!=a.dh.V_&&f.bN()!=a.dh.A6||(e=!1)}return e};k.I0=function(a){return this.Ie(a)};k.Ffa=function(a,b){var c=new e.he("PRIM_ATLI");c.Zh(b);c.Ia(this);return c};k.kKc=function(a,b){return b=this.oe(a,void 0)};k.rjc=function(a){var b=new c.KKa;b.Zh(a);return b};k.oe=function(b,e){for(var k=this.Hz(b,!0);;){var f=new c.oTb(0,k,e);f.xh.Ua(f.xh.Ae()+this.Ng);f.xh.Sa(f.xh.je()+this.Mg);f.xh.Oa(f.xh.Pr()-this.Yi);f.xh.xa(f.xh.gG()-this.Xi);switch(this.HCa){case a.ZN.xfb:this.GM(f,
a.dh.C6);this.GM(f,a.dh.z6);this.GM(f,a.dh.V_);this.GM(f,a.dh.A6);this.GM(f,a.dh.WD);break;case a.ZN.q0b:this.GM(f,a.dh.V_);this.GM(f,a.dh.A6);this.GM(f,a.dh.C6);this.GM(f,a.dh.z6);this.GM(f,a.dh.WD);break;case a.ZN.p0b:for(var g=null,n=k,l=0;l<n.length&&null!=(g=n[l]);l++){var d=g;d.m4!=a.dh.WD&&0==(g.Ca().eb&a.dZa.c$a)&&this.rYa(f,d)}this.GM(f,a.dh.WD)}if(0==f.gqa&&0==f.Ioa)break;e.ZX(f.gqa,f.Ioa)}return new c.NG(e.$(),e.ba())};k.GM=function(b,c){var e=null,f=b.Nb;switch(c){case a.dh.C6:case a.dh.V_:case a.dh.WD:for(var g=
0;g<f.length&&null!=(e=f[g]);g++){var k=e;if(k.m4==c){var l=e.Ca();0==(l.eb&a.dZa.c$a)&&this.rYa(b,k)}}break;case a.dh.z6:case a.dh.A6:for(g=f.length-1;0<=g&&null!=(e=f[g]);g--)k=e,k.m4==c&&(l=e.Ca(),0==(l.eb&a.dZa.c$a)&&this.rYa(b,k))}};k.rYa=function(b,c){var e=c.oGb(),f,g;switch(c.m4){case a.dh.C6:g=0;b.LO|=a.B6.xvb;0!=c.OP&&e.ih(e.$(),b.Sh.ba()*c.OP/100);e.Bb(b.xh.O()+c.Ue(),b.xh.L()+c.Re());b.xh.yNa(b.xh.O(),b.xh.L()+e.ba()+c.Re()+c.cg());f=b.xh.$()-(c.Ue()+c.Of());e.ih(Math.max(f,0),e.ba());
this.lfa(c,e);0<g&&(g>b.xh.ba()&&(e=g-b.xh.ba(),e>b.Ioa&&(b.Ioa=e)),b.xh.f2b(0,g));break;case a.dh.z6:g=0;b.LO|=a.B6.dfc;0!=c.OP&&e.ih(e.$(),b.Sh.ba()*c.OP/100);f=b.xh.ba()-(e.ba()+c.Re()+c.cg());0!=(b.LO&a.B6.xvb)&&(f=Math.max(f,0));b.xh.ih(b.xh.$(),f);e.Bb(b.xh.O()+c.Ue(),b.xh.na+c.Re());f=b.xh.$()-(c.Ue()+c.Of());e.ih(Math.max(f,0),e.ba());this.lfa(c,e);0<g&&(g>b.xh.ba()&&(e=g-b.xh.ba(),e>b.Ioa&&(b.Ioa=e)),b.xh.ZX(0,-g));break;case a.dh.V_:g=0;b.LO|=a.B6.wvb;0!=c.OP&&e.ih(b.Sh.$()*c.OP/100,e.ba());
e.Bb(b.xh.O()+c.Ue(),b.xh.L()+c.Re());f=b.xh.O()+e.$()+c.Ue()+c.Of();b.xh.yNa(Math.max(f,b.Sh.O()),b.xh.L());f=b.xh.ba()-(c.Re()+c.cg());e.ih(e.$(),Math.max(f,0));this.lfa(c,e);0<g&&(g>b.xh.$()&&(e=g-b.xh.$(),e>b.gqa&&(b.gqa=e)),b.xh.f2b(g,0));break;case a.dh.A6:g=0;b.LO|=a.B6.ffc;0!=c.OP&&e.ih(b.Sh.$()*c.OP/100,e.ba());f=b.xh.$()-(e.$()+c.Ue()+c.Of());0!=(b.LO&a.B6.wvb)&&(f=Math.max(f,0));b.xh.ih(f,b.xh.ba());e.Bb(b.xh.pa+c.Ue(),b.xh.L()+c.Re());f=b.xh.ba()-(c.Re()+c.cg());e.ih(e.$(),Math.max(f,
0));this.lfa(c,e);0<g&&(g>b.xh.$()&&(e=g-b.xh.$(),e>b.gqa&&(b.gqa=e)),b.xh.ZX(-g,0));break;case a.dh.WD:e.Bb(b.xh.O()+c.Ue(),b.xh.L()+c.Re()),f=b.xh.$()-(c.Ue()+c.Of()),g=b.xh.ba()-(c.Re()+c.cg()),e.ih(Math.max(f,0),Math.max(g,0)),this.lfa(c,e)}};k.Ofb=function(b,c){var e=this.I0(b);if(e){if(e.bN()==a.dh.C6||e.bN()==a.dh.z6)c[0]=!0;if(e.bN()==a.dh.V_||e.bN()==a.dh.A6)c[1]=!0}};e.$c(c.Qva,"PRIM_ATLM",{Va:{MarginTop:{f:k.Re,i:function(a){this.Be(e.aa(a))}},MarginBottom:{f:k.cg,i:function(a){this.of(e.aa(a))}},
MarginLeft:{f:k.Ue,i:function(a){this.Ge(e.aa(a))}},MarginRight:{f:k.Of,i:function(a){this.se(e.aa(a))}},MaxHeight:{f:k.EHa,i:function(a){this.kla(e.aa(a))}},MaxWidth:{f:k.GHa,i:function(a){this.j3(e.aa(a))}},MinHeight:{f:k.IHa,i:function(a){this.lla(e.aa(a))}},MinWidth:{f:k.JHa,i:function(a){this.l3(e.aa(a))}},ProcessingOrder:{f:function(){return e.Ja(this.HCa,a.ZN.H)},i:function(b){this.XXc(e.Ba(b,a.ZN.H))}}}})});window.LANSA.addSrc("atli",function(e,c,a,b){a.dh={Gvb:0,C6:1,z6:2,V_:3,A6:4,WD:5,Mgc:6};a.dh.H={NONE:a.dh.Gvb,TOP:a.dh.C6,BOTTOM:a.dh.z6,LEFT:a.dh.V_,RIGHT:a.dh.A6,CENTER:a.dh.WD,EO:a.dh.Mgc};a.Ogc={kfa:0};c.KKa=function(){k.v.call(this);this.OP=0;this.m4=a.dh.Gvb;this.LO=a.Ogc.kfa};var k=c.u(c.KKa,c.bwa);b.LKa=function(a,b,e){var f=new c.KKa;f.Ia(a);f.Zh(b);f.W2(e);return f};k.R=function(){k.j.R.call(this)};k.s4a=function(){return a.xva.Vob};k.bN=function(){return this.m4};k.W2=function(b){this.m4!=
b&&(this.m4=b,this.m(a.a.h))};k.lqd=function(){return this.OP};k.CGd=function(b){0>b?b=0:100<b&&(b=100);this.OP!=b&&(this.OP=b,this.m(a.a.h))};k.l8a=function(b){var c=!1;if(null!=this.Xa&&this.Xa.Z()===b)if(this.Xa.td()){if(this.Xa.Po()||this.m4==a.dh.WD)c=!0}else this.Xa.Po()&&(c=!0);return c};k.SKb=function(a,b,c){this.Ia(a);this.Zh(b);this.W2(c)};e.$c(c.KKa,"PRIM_ATLI",{Va:{MarginTop:{f:k.Re,i:function(a){this.Be(e.aa(a))}},MarginBottom:{f:k.cg,i:function(a){this.of(e.aa(a))}},MarginLeft:{f:k.Ue,
i:function(a){this.Ge(e.aa(a))}},MarginRight:{f:k.Of,i:function(a){this.se(e.aa(a))}},MaxHeight:{f:k.EHa,i:function(a){this.kla(e.aa(a))}},MaxWidth:{f:k.GHa,i:function(a){this.j3(e.aa(a))}},MinHeight:{f:k.IHa,i:function(a){this.lla(e.aa(a))}},MinWidth:{f:k.JHa,i:function(a){this.l3(e.aa(a))}},Manage:{f:k.Ca,i:k.Zh},Parent:{f:k.Z,i:k.Ia},Attachment:{f:function(){return e.Ja(this.bN(),a.dh.H)},i:function(b){this.W2(e.Ba(b,a.dh.H))}}}})});