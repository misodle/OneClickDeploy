window.LANSA.addSrc("video",function(e,c,a,b,k){var s,p;s={ALL:0,METADATA:1,NONE:2};p={auto:0,metadata:1,none:2};c.FKa=function(a){t.v.call(this);this.OZ=this.Sq="";this.Cca=a};var t=c.u(c.FKa,c.ed);t.R=function(){t.j.R.call(this)};t.Qg=function(){return this.Sq};t.gu=function(a){this.Sq=a};t.mV=function(){return this.OZ==k?"":this.OZ};t.tX=function(a){this.OZ=a};t.sp=function(){for(var a=0;a<this.Cca.lc();a++)this.Cca.zp(a)===this&&this.Cca.Lp(a)};e.tb(c.FKa,"PRIM_VDEO","File",{Va:{FileName:{f:t.Qg,
i:function(a){this.gu(e.ra(a))}},FileExtension:{f:t.mV,i:function(a){this.tX(e.ra(a))}}},Ec:{Delete:t.sp},Jf:{Ef:"FileExtension"}});c.qbb=function(a){f.v.call(this);this.pdc=a;this.$a=[]};var f=c.u(c.qbb,c.ed);f.lc=function(){return this.$a.length};f.Vd=function(a){return this.zp(a)};f.zp=function(a){if(0>a||a>=this.$a.length)throw e.yC(a,this.$a.length);return this.$a[a]};f.xg=function(a,b){var e=new c.FKa(this);e.gu(a);e.tX(b);this.$a.push(e);(e=this.pdc.Na())&&e.Wp()};f.Rsa=function(){0==this.lc()&&
this.$a.push(new c.FKa(this));return this.zp(0)};f.jj=function(){this.$a=[];var a=this.pdc.Na();a&&a.Wp()};f.Lp=function(a){if(null==this.zp(a))throw e.yC(a,this.$a.length);this.$a.splice(a,1)};f.aPc=function(a){for(var b=!1,c=0;c<this.lc()&&!(b=this.zp(c).Qg()==a);c++);b&&this.Lp(c)};e.tb(c.qbb,"PRIM_VDEO","Files",{Va:{Item:{f:function(a){return this.zp(e.aa(a)-1)}}},Ec:{Add:f.xg,RemoveAll:f.jj,Remove:function(a){return this.Lp(e.aa(a)-1)}},so:{Nn:function(a){return this.zp(e.aa(a)-1)},Vt:function(){return this.lc()}},
Jf:{Ef:"Item"}});c.HWb=function(){g.v.call(this);this.pZ=0;this.cZ=this.y_=!0;this.RP=1;this.xu=new c.qbb(this);this.ci=-1;this.vP=this.Ada=this.Cda=!1;this.Cz=50};var g=c.u(c.HWb,c.Qs);g.Ag=function(){return c.ZXb};g.R=function(){g.j.R.call(this)};g.Qg=function(){return 0<this.xu.lc()?this.xu.zp(0).Qg():""};g.gu=function(b){this.xu.jj();var c=this.xu.Rsa();c.Qg()!=b&&(c.gu(b),(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.mV=function(){return 0<this.xu.lc()?this.xu.zp(0).mV():""};g.tX=function(b){var c=
this.xu.Rsa();c.mV()!=b&&(c.tX(b),(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.rvc=function(){return this.xu};g.C3a=function(){return this.pZ};g.zhb=function(b){this.pZ!=b&&(this.pZ=b,(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.j4a=function(){return this.vP};g.$4a=function(){return this.y_};g.Rib=function(b){this.y_!=b&&(this.y_=b,(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.a3a=function(){return this.cZ};g.dhb=function(b){this.cZ!=b&&(this.cZ=b,(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.Yga=function(){return this.ci};
g.k4a=function(){return this.Cda};g.i4a=function(){return this.Ada};g.Y5a=function(){return this.Cz};g.Eya=function(c){c=b.tg(c,0,100);this.Cz!=c&&(this.Cz=c,this.vP=0==this.Cz,(c=this.Na())&&c.Wp(),this.m(a.a.h))};g.Yxc=function(){return this.RP};g.Gib=function(b){this.RP!=b&&(this.RP=b,(b=this.Na())&&b.Wp(),this.m(a.a.h))};g.Play=function(){this.Na()&&this.Na().Play()};g.Fh=function(){this.Na()&&this.Na().Fh()};g.ieb=function(){this.Eya(0)};g.Irc=function(){if(this.Na()){var a=this.Na().w;a.currentTime=
Math.min(a.duration,a.currentTime+5)}};g.Hrc=function(){if(this.Na()){var a=this.Na().w;0<a.currentTime&&(a.currentTime-=5)}};e.$c(c.HWb,"PRIM_VDEO",{Va:{FileName:{f:g.Qg,i:function(a){this.gu(e.ra(a))}},CycleToStart:{f:g.C3a,i:function(a){this.zhb(e.Fa(a))}},ShowControls:{f:g.$4a,i:function(a){this.Rib(e.Fa(a))}},Autoplay:{f:g.a3a,i:function(a){this.dhb(e.Fa(a))}},Preload:{f:function(){return e.Ja(this.RP,s)},i:function(a){this.Gib(e.Ba(a,s))}},Duration:{f:g.Yga},IsMuted:{f:g.j4a},IsPlaying:{f:g.k4a},
IsEnded:{f:g.i4a},Volume:{f:g.Y5a,i:function(a){this.Eya(e.aa(a))}}},Ec:{Play:g.Play,Stop:g.Fh,Mute:g.ieb,FrameForward:g.Irc,FrameBackward:g.Hrc}});c.ZXb=function(a){n.v.call(this,a)};var n=c.u(c.ZXb,c.Pl);n.Ve=function(b,c){this.w=document.createElement("video");this.LAa=b+this.$b;this.w.setAttribute("id",this.LAa);this.w.setAttribute("LANSAHandle",this.$b);this.w.style.position="absolute";this.w.style.overflow="hidden";this.w.style.whiteSpace="nowrap";this.Wp();var e=this.w,f=this;e.addEventListener("loadedmetadata",
function(){f.la.ci=e.duration;f.la.Aa(a.M.bPb)},!1);e.addEventListener("loadeddata",function(){f.la.Aa(a.M.aPb)},!1);e.addEventListener("play",function(){f.la.Cda=!0;f.la.Ada=!1;f.la.Aa(a.M.XZb)},!1);e.addEventListener("pause",function(){f.la.Cda=!1;f.la.Aa(a.M.k5b)},!1);e.addEventListener("ended",function(){f.w.pause();f.w.paused=!0;f.la.Ada=!0;f.la.Aa(a.M.ty)},!1);e.addEventListener("volumechange",function(){e.muted||0==e.volume?(f.w.muted=!0,f.la.vP=!0,f.la.Cz=0,f.la.Aa(a.M.XYb)):(f.la.vP=!1,f.la.Cz=
Math.round(100*e.volume))},!1);return n.j.Ve.call(this,b,c)};n.Wp=function(){this.ala("controls",this.la.y_);this.ala("autoplay",this.la.cZ);this.ala("loop",this.la.pZ);this.w.setAttribute("preload",e.Ja(this.la.RP,p));this.w.volume=0<this.la.Cz?this.la.Cz/100:0;this.w.muted=this.la.vP;this.Rnb()};n.Rnb=function(){this.igb();var a=this.la.xu.lc();if(0!=a)for(var b=0;b<a;b++){var c=this.la.xu.zp(b);this.qec(this.w,c.Sq,c.OZ)}};n.qec=function(a,b,c){var e=document.createElement("source");e.src=b;c&&
(e.type="video/"+c);a.appendChild(e)};n.igb=function(){var a=document.getElementById(this.LAa);if(a&&(a=a.childNodes)){var b,c,e=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&e.push(b);for(c=0;c<e.length;c++)b=e[c],b.parentNode.removeChild(b)}};n.VJ=function(){return!1};n.CLa=function(){};n.Play=function(){this.w.play!==k&&this.w.play()};n.Fh=function(){this.w.pause!==k&&this.w.pause()}});
