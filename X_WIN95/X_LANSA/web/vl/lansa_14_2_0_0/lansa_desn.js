window.LANSA.addSrc("desn",function(e,c,a){a.K7={f7:0,h7:1,gYa:16,SXa:32};a.wed={dN:0};c.dUb=function(){b.v.call(this);this.wP=[];this.cL=null};var b=c.u(c.dUb,c.ld);b.tb=function(){this.wP=null;b.j.tb.call(this)};b.R=function(){b.j.R.call(this);this.bhb(null);this.YPc()};b.bhb=function(b){this.cL!=b&&(null!=this.cL&&this.cL.wa(this,this.vzb),this.cL=b,null!=this.cL&&this.cL.ya(this,this.vzb),this.m(a.a.h))};b.Xrc=function(){return this.cL};b.XHb=function(a){var b=this.cL;null==b&&a.W()&&a.W().zs&&
(b=a.W().zs.XHb(a.W()));return b};b.Nld=function(){return this.wP};b.Mld=function(){return this.wP};b.uuc=function(){e.yb("PRIM_PCOL");var a=new c.eUb(this);return new c.lX(a)};b.Ho=function(a){var b=!1,c=null,e=null,m=null,k=null,d=a.Sa();a=a.Qa();for(var q=99999999,l=99999999,u=0,h=[],x=[],I=this.wP,W=null;u<I.length&&null!=(W=I[u]);u++)h.push(W),x.push(W);h.sort(this.Flc);x.sort(this.Elc);for(u=0;u<h.length&&null!=(e=h[u]);u++)if(e.T6a()){I=e.Sc-d;if(null!=c)if(0<=q&&I>q)continue;else if(0>q&&
I<q)continue;c=e;q=I}0>q&&(c=null);h=x;for(u=0;u<h.length&&null!=(k=h[u]);u++)if(k.HJb()){e=k.dd-a;if(null!=m)if(0<=l&&e>l)continue;else if(0>l&&e<l)continue;m=k;l=e}0>l&&(m=null);(c=c?c:m)&&m&&c!=m&&m.T6a()&&m.Sa()<c.Sa()&&(c=m);this.cL!=c&&(this.bhb(c),b=!0);return b};b.Flc=function(a,b){var c=b.Sa();return a.Sa()==c?0:a.Sa()<c?-1:1};b.Elc=function(a,b){var c=b.Qa();return a.Qa()==c?0:a.Qa()<c?-1:1};b.uDc=function(a){a.zs=this;this.wP.push(a);a.ya(this,this.bmc)};b.Q0b=function(b){b.zs=null;this.wP.splice(this.wP.indexOf(b),
1);b.wa(this);this.m(a.a.h)};b.YPc=function(){for(;0<this.wP.length;)this.Q0b(this.wP[0])};b.bmc=function(){this.m(a.a.h)};b.vzb=function(b,c){switch(c.Ya){case a.a.rb:case a.a.Pb:this.bhb(null)}};e.ad(c.dUb,"PRIM_DESN",{Va:{Designs:{f:b.uuc},ActiveDesign:{f:b.Xrc}}});c.cUb=function(){l.v.call(this);this.zs=null;this.rqa=a.K7.f7;this.dd=this.Sc=0};var l=c.u(c.cUb,c.ld);l.tb=function(){l.j.tb.call(this)};l.R=function(){l.j.R.call(this);this.J3(null)};l.Pxb=function(a){this.rqa|=a};l.Oxb=function(a){this.rqa&=
~a};l.H3a=function(){return this.zs};l.J3=function(b){this.zs!=b&&(null!=this.zs&&this.zs.Q0b(this),null!=b&&b.uDc(this),this.m(a.a.h))};l.HZc=function(){!1==this.y9a()&&(this.Oxb(a.K7.gYa),this.m(a.a.h))};l.y9a=function(){return!1==this.T6a()};l.Wb=function(b){if(this.y9a()||this.Sc!=b)this.Pxb(a.K7.gYa),this.Sc=b,this.m(a.a.h)};l.Sa=function(){return this.Sc};l.T6a=function(){return 0!=(this.rqa&a.K7.gYa)?!0:!1};l.ZFd=function(){!1==this.TLb()&&(this.Oxb(a.K7.SXa),this.m(a.a.h))};l.TLb=function(){return!1==
this.HJb()};l.Ac=function(b){if(this.TLb()||this.dd!=b)this.Pxb(a.K7.SXa),this.dd=b,this.m(a.a.h)};l.Qa=function(){return this.dd};l.HJb=function(){return 0!=(this.rqa&a.K7.SXa)?!0:!1};l.j8a=function(){return this.zs&&this.zs&&this.zs.cL==this};e.ub(c.cUb,"PRIM_DESN","Design",{Va:{DesignManager:{f:l.H3a,i:l.J3},Width:{f:function(){return this.y9a()?e.Le:this.Sa()},i:function(a){a===e.Le?this.HZc():this.Wb(e.aa(a))}}}});c.eUb=function(a){u.v.call(this);this.zs=a};var u=c.u(c.eUb,c.G$);u.wc=function(){return this.zs.wP.length};
u.cw=function(a){return this.zs.wP[a]}});