window.LANSA.addSrc("stpg",function(e,c,a,b){a.AJa={bCc:1,Z6a:1};c.zUb=function(){l.v.call(this);this.Trb=a.AJa.bCc;this.GUa=!0;this.ypa=a.Z.Aya;this.Ob=null};var l=c.u(c.zUb,c.ld);l.R=function(){this.Ia(null);l.j.R.call(this)};l.ae=function(){return this.GUa};l.Qf=function(b){this.GUa!=b&&(this.GUa=b,this.m(a.a.h))};l.yha=function(){return 0!=(this.Trb&a.AJa.Z6a)?!0:!1};l.X2b=function(b){b!=this.yha()&&(this.Trb=this.Trb&~a.AJa.Z6a|(b?a.AJa.Z6a:0),this.m(a.a.h))};l.Rnd=function(){return this.ypa};
l.KWc=function(b){this.ypa!=b&&(this.ypa=b,this.m(a.a.h))};l.W=function(){return this.Ob};l.Ia=function(c){if(this.Ob!=c){var e=b.Q().zbc;this.Ob&&(e.splice(e.indexOf(this),1),this.Ob.wa(this,this.N7));if(this.Ob=c)e.push(this),this.Ob.ya(this,this.N7);this.m(a.a.h)}};l.orc=function(){this.za(a.K.RMc)};b.AUb=function(c,e){for(var l=!1,f,g=b.Q().zbc,m=0;m<g.length&&null!=(f=g[m]);m++)if(f.Ob==c&&!0==f.GUa&&f.ypa!=a.Z.Aya&&e==f.ypa){f.orc();l=!0;break}return l};l.N7=function(b,c){switch(c.Ya){case a.a.rb:case a.a.Pb:this.Ia(null)}};
e.ad(c.zUb,"PRIM_STPG",{Va:{ShortCut:{f:function(){return e.Ga(this.ypa,a.Z.G)},i:function(b){this.KWc(e.Aa(b,a.Z.G))}},Enabled:{f:l.ae,i:function(a){this.Qf(e.Ja(a))}},Parent:{f:l.W,i:l.Ia}}})});
