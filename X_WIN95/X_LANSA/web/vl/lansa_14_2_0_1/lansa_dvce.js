window.LANSA.addSrc("dvce",function(e,c,a,b,k){e.Eb("PRIM_WEB");var s=null;a.GK={qna:0,m$b:1,l$b:2};a.GK.H={HIGH:a.GK.qna,MEDIUM:a.GK.m$b,LOW:a.GK.l$b};c.NWb=function(){p.v.call(this);this.WUa=this.Ead=this.qCa="";this.Zx=null};var p=c.u(c.NWb,c.ed);p.R=function(){null!=this.Zx&&(this.Zx.sb(),this.Zx=null);p.j.R.call(this)};p.V3a=function(){return this.Zx};p.Whb=function(a){this.Zx!=a&&(null!=this.Zx&&this.Zx.sb(),this.Zx=a,null!=this.Zx&&this.Zx.va())};p.Lua=function(){s=window.LONGRANGE;return s!==
k};p.w2a=function(b){var c=e.Pb();c.Ub("FILE",b);this.Aa(a.M.KEb,c);c.jc()};p.Chc=function(b,c,e){b===k&&(b=0);c===k&&(c=0);e===k&&(e=!1);this.Lua()&&this.LDa("camera",!0,!1,!1,e,a.GK.qna,0,b,c)};p.Ehc=function(a,b,c){c===k&&(c=!1);this.Lua()&&this.LDa("camera",!1,!0,!1,c,a,b,0,0)};p.nUc=function(){this.Lua()&&this.LDa("library",!0,!0,!1,!1,a.GK.qna,0,0,0)};p.Jec=function(b){b===k&&(b=!1);this.Lua()&&this.LDa("camera",!0,!1,!0,b,!1,a.GK.qna,0,0)};p.LDa=function(b,e,n,l,d,p,s,t,h){var y=this,J={};
J.source=b;J.enableImage=e;J.enableVideo=n;J.enableAnnotation=l;switch(p){case a.GK.l$b:J.videoQuality=3;break;case a.GK.m$b:J.videoQuality=1;break;case a.GK.qna:J.videoQuality=0}J.videoMaxDuration=s;J.size={width:t,height:h};J.saveToPhotoGallery=d;J.returnContent=e;J.returnContent&&(J.returnContent={size:{width:t,height:h}});J.returnFile=!0;J.onCompleted=function(a){y.qCa=a.filePath;y.Ead=a.fileURL;y.WUa=a.data;y.ubc=setTimeout(function(){var a=null;""!=y.WUa&&y.WUa!==k&&(a=new c.xcb(y.qCa,y.WUa));
y.Whb(a);a&&y.w2a(a);clearTimeout(y.ubc);y.ubc=null},25)};window.LONGRANGE.Camera.show(J)};e.tb(c.NWb,"PRIM_DVCE","Camera",{Va:{File:{f:p.V3a},IsAvailable:{f:p.Lua}},Ec:{CaptureImage:function(a,b,c){this.Chc(a?e.aa(a):0,b?e.aa(b):0,c?e.Fa(c):c)},CaptureVideo:function(b,c,n){this.Ehc(b!==k?e.Ba(b,a.GK.H):a.GK.qna,e.aa(c),n?e.Fa(n):n)},SelectFromGallery:function(){this.nUc()},AnnotateImage:function(a){this.Jec(a?e.Fa(a):a)}}});c.xcb=function(a,b){t.v.call(this);this.qCa=a;this.T$c=b;this.$C=null};var t=
c.u(c.xcb,c.ed);t.R=function(){null!=this.$C&&(this.$C=null);t.j.R.call(this)};t.rh=function(){return this.qCa};t.usa=function(){null==this.$C&&(this.$C=new c.DE({data:this.T$c,mimetype:"image/png",filename:this.qCa}));return this.$C};e.tb(c.xcb,"PRIM_DVCE","CameraFile",{Va:{Name:{f:t.rh},Blob:{f:t.usa}}})},{rp:["PRIM_WEB"]});
