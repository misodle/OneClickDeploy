window.LANSA.addSrc("dvce",function(e,c,a,b,l){e.yb("PRIM_WEB");var u=null;a.ZK={goa:0,o$b:1,n$b:2};a.ZK.G={HIGH:a.ZK.goa,MEDIUM:a.ZK.o$b,LOW:a.ZK.n$b};c.WWb=function(){p.v.call(this);this.YUa=this.wad=this.dDa="";this.dy=null};var p=c.u(c.WWb,c.ld);p.R=function(){null!=this.dy&&(this.dy.xb(),this.dy=null);p.j.R.call(this)};p.Y3a=function(){return this.dy};p.aib=function(a){this.dy!=a&&(null!=this.dy&&this.dy.xb(),this.dy=a,null!=this.dy&&this.dy.va())};p.rva=function(){u=window.LONGRANGE;return u!==
l};p.v2a=function(b){var c=e.Nb();c.Rb("FILE",b);this.za(a.K.VEb,c);c.hc()};p.Dhc=function(b,c,e){b===l&&(b=0);c===l&&(c=0);e===l&&(e=!1);this.rva()&&this.xEa("camera",!0,!1,!1,e,a.ZK.goa,0,b,c)};p.Fhc=function(a,b,c){c===l&&(c=!1);this.rva()&&this.xEa("camera",!1,!0,!1,c,a,b,0,0)};p.jUc=function(){this.rva()&&this.xEa("library",!0,!0,!1,!1,a.ZK.goa,0,0,0)};p.Lec=function(b){b===l&&(b=!1);this.rva()&&this.xEa("camera",!0,!1,!0,b,!1,a.ZK.goa,0,0)};p.xEa=function(b,e,m,k,d,q,p,r,h){var u=this,I={};
I.source=b;I.enableImage=e;I.enableVideo=m;I.enableAnnotation=k;switch(q){case a.ZK.n$b:I.videoQuality=3;break;case a.ZK.o$b:I.videoQuality=1;break;case a.ZK.goa:I.videoQuality=0}I.videoMaxDuration=p;I.size={width:r,height:h};I.saveToPhotoGallery=d;I.returnContent=e;I.returnContent&&(I.returnContent={size:{width:r,height:h}});I.returnFile=!0;I.onCompleted=function(a){u.dDa=a.filePath;u.wad=a.fileURL;u.YUa=a.data;u.vbc=setTimeout(function(){var a=null;""!=u.YUa&&u.YUa!==l&&(a=new c.Bcb(u.dDa,u.YUa));
u.aib(a);a&&u.v2a(a);clearTimeout(u.vbc);u.vbc=null},25)};window.LONGRANGE.Camera.show(I)};e.ub(c.WWb,"PRIM_DVCE","Camera",{Va:{File:{f:p.Y3a},IsAvailable:{f:p.rva}},yc:{CaptureImage:function(a,b,c){this.Dhc(a?e.aa(a):0,b?e.aa(b):0,c?e.Ja(c):c)},CaptureVideo:function(b,c,m){this.Fhc(b!==l?e.Aa(b,a.ZK.G):a.ZK.goa,e.aa(c),m?e.Ja(m):m)},SelectFromGallery:function(){this.jUc()},AnnotateImage:function(a){this.Lec(a?e.Ja(a):a)}}});c.Bcb=function(a,b){r.v.call(this);this.dDa=a;this.L$c=b;this.$C=null};var r=
c.u(c.Bcb,c.ld);r.R=function(){null!=this.$C&&(this.$C=null);r.j.R.call(this)};r.xh=function(){return this.dDa};r.ita=function(){null==this.$C&&(this.$C=new c.ME({data:this.L$c,mimetype:"image/png",filename:this.dDa}));return this.$C};e.ub(c.Bcb,"PRIM_DVCE","CameraFile",{Va:{Name:{f:r.xh},Blob:{f:r.ita}}})},{rp:["PRIM_WEB"]});
