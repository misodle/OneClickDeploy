(function(e,c){function a(a,b,c,d){var e=new XMLHttpRequest;a=a.toLowerCase();e.onreadystatechange=function(){4==e.readyState&&(e.responseText&&400>e.status?b(e.responseText):c&&c(e.status))};e.ontimeout=function(){c&&c(e.status)};e.open("GET",a,d);e.send(null)}function b(a){return a.replace(/[&"<>]/g,function(a){return{"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"}[a]})}function l(a){return(a=RegExp("[?&]"+a+"=([^&]*)","i").exec(window.location.search))&&decodeURIComponent(a[1].replace(/\+/g," "))}
function u(){q||(q=new y.mSb)}function p(a){var b=!1;A.fHb(A.Ira("error/error-"+a.toLowerCase()+".json"),function(a){try{h=JSON.parse(a),b=!0}catch(c){}});return b}function r(){h||(h={},p(A.Dha())||p(A.H4a())||p("ENG"));return h}function f(){function a(){b&&q&&e&&(b.style.visibility="visible")}var b=null,d=null,e=!1,q=!1,t=k.splash;if(t){var h=t.limg,b=document.createElement("div"),d=b.style;d.fontFamily="verdana";d.visibility="hidden";d.position="absolute";d.top="50%";d.left="50%";d.textAlign="center";
d.transform="translateX(-50%) translateY(-50%)";var d=document.createElement("img"),v=document.createTextNode("");b.appendChild(d);b.appendChild(document.createElement("br"));b.appendChild(v);d.onload=function(){var b=t.mtxt;b&&(b=b[A.Dha()],b!==c&&(v.nodeValue=b));q=!0;a()};h!==c?"spin"==h&&(d.src=A.mc("lansa_spin.gif")):(h=t.uimg,h!==c&&(d.src=h));setTimeout(function(){e=!0;a()},1E3)}return b}var g="",m="",k={},d=c,q=c,v=c,D=c,h=c,x=!1,I=l("developer"),W=I&&"YES"===I.toUpperCase(),O=W?Math.round((new Date).getTime()/
1E3).toString()+"_dev":c,t=!1,B=!1,A={};A.nonce=e.nonce;var J={},y={u:function(a,b){a.prototype=Object.create(b.prototype);a.prototype.v=b;a.prototype.j=b.prototype;return a.prototype},je:function(){}};y.je.prototype.gC=function(){return null};if(!W){var K=window.applicationCache;K&&K.addEventListener("updateready",function(){K.status==K.UPDATEREADY&&location.reload()})}window.onerror=function(a,d,t){if(!x){document.body.innerHTML="";var h=a,v=d,f=3>arguments.length?c:arguments[3],B=4>arguments.length?
c:arguments[4],k=r(),g=k.MSG1||"Fatal Error:",p=k.MSG2||"Location:",J=k.MSG3||"Call Stack:",m=k.MSG4||"Reported By:",l=k.MSG5||"&1, line &2",y=c,u=!1;D?h=D:(B instanceof SyntaxError?(u=!0,q&&q.JEc()&&(v=q.Mtc())):0<v.indexOf("/lansa_14_2_0_0/")&&(y=k.MSG6||"Exception:",g=k.MSG7||"LANSA Runtime Error:"),B&&B.message&&(h=B.message));u&&(g=k.MSG8||"JavaScript Syntax Error:");h="<p><strong>"+g+"</strong><ul>"+b(h)+"</ul></p>";if(!u&&e.KV&&0<e.KV()){u=e.Eha();k=u.sD.ey;h=h+("<p><strong>"+p+"</strong>")+
("<ul>"+l.CPa(k.Rxc()+": "+k.I4a(),u.E1())+"</ul>");h+="</p>";h+="<p><strong>"+J+"</strong>";for(p=0;p<e.KV();p++)u=e.uHa(p),k=u.sD.ey,h+="<ol>"+(p+1).toString()+". "+u.r1()+": "+k.I4a()+", line "+u.E1()+"</ol>";h+="</p>"}v&&(h+="<p><strong>"+m+"</strong><ul>"+l.CPa(v,(t||"?")+(f?":"+f:""))+"</ul></p>");B&&y&&(v=B.stack)&&(h+="<p><strong>"+y+"</strong><ul>",h+=v.replace(/(?:\r\n|\r|\n)/g,"<br >"),h+="</ul></p>");document.body.innerHTML=h;x=!0}return!0};e.init=function(a){k=a};e.showPage=function(a,
b){g=a;m=b||a;var c=null;if(A.oFc()){A.VDb();A.UDb();var c=document.createElement("div"),d=document.createElement("div");c.style.fontFamily="Roboto";d.setAttribute("class","material-icons");c.appendChild(d);document.body.appendChild(c)}var t=f();document.body.parentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0px";t&&document.body.appendChild(t);u();q.m5b(a,function(){A.Vua()||(t&&(document.body.removeChild(t),t=null),c&&(document.body.removeChild(c),c=
null),v&&(e.yb("PRIM_WRTN"),A.qqc(v)),e.a5b(a))})};e.showPart=function(a,b,c){var d=document.getElementById(b),t=f();d&&t&&d.appendChild(t);u();q.m5b(a,function(){var q=null;A.Vua()||(d&&t&&(d.removeChild(t),t=null),q=e.QZc(a,b));c&&c(q)})};e.useOutput=function(a){v=a};e.addComponent=function(a,b,d){q===c&&u();q.gec(a,b,d)};e.addSrc=function(a,b,c){q&&q.oec(a,b,c)||b(e,y,J,A)};A.cxc=function(){return g};A.bxc=function(){return m};A.IHa=function(){return k.part||k.Partition};A.JHa=function(){return k.sys||
k.System};A.Eyc=function(){return k.ver};A.iuc=function(){var a=k.splash;return a&&(a=a.uimg)?a:A.mc("lansa_spin.gif")};A.h9a=function(){return 1===k.slz};A.oFc=function(){return 1===k.md};A.Mkd=function(){return 142E5};A.Aod=function(){return 14000002};A.lHb=function(){return k.lang};A.Dha=function(){d===c&&(d=(l("lang")||A.H4a()||"ENG").toUpperCase());return d};A.lAc=function(){return v};A.xQc=function(){v=c};A.VDb=function(){if(!t){t=!0;var a=document.createElement("link");a.href=A.tga("roboto.css");
a.rel="stylesheet";a.type="text/css";document.body.appendChild(a)}};A.UDb=function(){if(!B){B=!0;var a=document.createElement("link");a.href=A.tga("material-icons.css");a.rel="stylesheet";a.type="text/css";document.body.appendChild(a)}};A.tga=function(a){return A.Ira("style/"+a.toLowerCase())};A.Ira=function(a){return"/"+A.JHa()+"/lansa_14_2_0_0/"+a};A.wZa=function(a){a="/"+A.JHa()+"/"+A.IHa()+"/"+a;if(W)a+="?v="+O;else{var b=A.Eyc();b&&(a+="?v="+b)}return a};A.Ajc=function(a,b,c,d,q){var t=A.Dha();
a=a+"/"+b+"/lansaweb?w="+c+"&r="+d+"&vlweb=1&part="+q+"&lang="+t;W&&(a+="&developer=yes");e.DFa&&(a+="&DEBUG="+e.DFa);return a+="&_T="+(new Date).getTime().toString()};A.mc=function(a){return A.Ira("image/"+a.toLowerCase())};A.H4a=function(){var a=A.lHb();return a?a.def:c};A.cpc=function(a,b,c){q&&q.MIc(a,b,c)};A.Tga=function(a){q&&q.lPb(a)};A.Vua=function(){return x};A.Yk=function(a,b,d,e){D===c&&(D=(a=r()[a])?a.CPa(b,d,e):"Unknown error occurred");return 0};A.uWc=function(a){D=a};A.x_b=function(a,
b,c,d,e,q,t){var h=new XMLHttpRequest;h.onreadystatechange=function(){4==h.readyState&&(h.responseText&&400>h.status?c(h.responseText):d(h.status))};h.upload&&e&&h.upload.addEventListener("progress",e,!1);q&&h.addEventListener("progress",q,!1);h.open("POST",a,t);a=JSON.stringify(b);h.setRequestHeader("Content-type","application/json");h.setRequestHeader("Accept","application/json");h.send(a)};A.DMc=function(a,b,c,d,e,q,t){var h=new XMLHttpRequest;h.onreadystatechange=function(){4==h.readyState&&(h.responseText&&
400>h.status?c(h.responseText):d(h.status))};h.upload&&e&&h.upload.addEventListener("progress",e,!1);q&&h.addEventListener("progress",q,!1);h.open("POST",a,t);h.setRequestHeader("Accept","application/json");h.send(b)};A.fHb=function(b,c,d){a(b,c,d,!1)};A.bwc=function(b,c,d){a(b,c,d,!0)};A.hra=function(a){A.nonce&&a.setAttribute("nonce",A.nonce)};String.prototype.CPa=function(a,b,d,e,q,t,h,v,f){for(var B=this.toString(),k=0,D=B.indexOf("&"),g="";0<=D&&D+1<B.length;)g+=B.substring(k,D),k=D,D++,"1"==
B.charAt(D)&&a!==c?(g+=a,k=++D):"2"==B.charAt(D)&&b!==c?(g+=b,k=++D):"3"==B.charAt(D)&&d!==c?(g+=d,k=++D):"4"==B.charAt(D)&&e!==c?(g+=e,k=++D):"5"==B.charAt(D)&&q!==c?(g+=q,k=++D):"6"==B.charAt(D)&&t!==c?(g+=t,k=++D):"7"==B.charAt(D)&&h!==c?(g+=h,k=++D):"8"==B.charAt(D)&&v!==c?(g+=v,k=++D):"9"==B.charAt(D)&&f!==c?(g+=f,k=++D):"&"==B.charAt(D)&&(g+="&",k=++D),D=B.indexOf("&",D);return g+=B.substr(k)}})(window.LANSA?window.LANSA:window.LANSA={},void 0);window.LANSA.addSrc("download",function(e,c,a,b,l){function u(a,c){c===l&&(c=!1);var d=p(a);if(d){var e=document.createElement("script");b.hra(e);e.text=d;k.push(a);document.head.appendChild(e);k.pop()}else if(c)throw b.Yk("E001",a);}function p(a){function c(a){d=a}var d=l;try{b.fHb(a,c,function(){})}catch(e){}return d}function r(a){function c(){b.vNb={};a()}var d=null,e=b.lHb();e&&(d=e.code);d?f(d[b.Dha()],a,function(){f(d[b.H4a()],a,c)}):c()}function f(a,b,c){a?g(a,b,function(){var d=a.indexOf("-");
0<d?g(a.substring(0,d),b,c):c()}):c()}function g(a,c,d){b.bwc(b.Ira("locale/locale-"+a+".json"),function(a){var e=!1;try{b.vNb=JSON.parse(a),e=!0}catch(q){}e?c():d()},d)}var m={anim:{anim:"PRIM_ANIM.AnimationItem PRIM_ANIM.Style PRIM_ANIM.Opacity PRIM_ANIM.Visibility PRIM_ANIM.Scale PRIM_ANIM.Rotate PRIM_ANIM.Skew PRIM_ANIM.Width PRIM_ANIM.Height PRIM_ANIM.Transition PRIM_ANIM.TableLayoutItem PRIM_ANIM.Move PRIM_ANIM.MoveFrom PRIM_ANIM.MoveTo PRIM_ANIM PRIM_ANMG".split(" ")},atlm:{atlm:["PRIM_ATLM"],
atli:["PRIM_ATLI"]},base:{base:[],field:[],string:[],blob:[],number:[],"boolean":[]},btn:{btn:["PRIM_PHBN","PRIM_CKBX","PRIM_RDBN","PRIM_SPBN"]},caro:{caro:["PRIM_CARO","PRIM_CARO.CarouselItem"]},coll:{coll:"PRIM_COLL PRIM_LCOL PRIM_ACOL PRIM_SACO PRIM_PCOL PRIM_KCOL PRIM_DCOL".split(" ")},desn:{desn:["PRIM_DESN","PRIM_DESN.Design"]},drag:{drag:["PRIM_DRAG"]},dtim:{date_and_time:[],fmtd:["PRIM_DATE","PRIM_DAT","PRIM_TIME"],mtcl:["PRIM_MTCL"],dtim:["PRIM_DTIM"]},edit:{fmts:["PRIM_FMTS"],fmtn:["PRIM_FMTN"],
edit:["PRIM_EDIT","PRIM_SPDT"]},evp:{evp:["PRIM_EVP"]},evdt:{evdt:["PRIM_EVDT"]},evef:{evef:["PRIM_EVEF"]},evmc:{evmc:["PRIM_EVMC"]},evpl:{evpl:["PRIM_EVPL"]},evse:{evse:["PRIM_EVSE"]},evst:{evst:["PRIM_EVST"]},fld:{fld:["PRIM_FLD","PRIM_PKIT","PRIM_PKLT"]},gpbx:{gpbx:["PRIM_GPBX"]},hint:{hint:["PRIM_HINT"]},http:{http:["PRIM_WEB.HttpHeader","PRIM_WEB.HttpHeaders","PRIM_WEB.HttpRequest","PRIM_WEB.HttpResponse","PRIM_WEB.HttpContent"]},imag:{imag:["PRIM_IMAG"]},json:{json:"PRIM_WEB.Json PRIM_WEB.JsonElement PRIM_WEB.JsonArray PRIM_WEB.JsonObject PRIM_WEB.JsonNumber PRIM_WEB.JsonString PRIM_WEB.JsonBoolean".split(" ")},
labl:{labl:["PRIM_LABL"]},list:{list:"PRIM_LIST PRIM_UDC.Columns PRIM_LIST.Column PRIM_LIST.CurrentItem PRIM_LIST.String PRIM_LIST.StringCurrentItem PRIM_LIST.Number PRIM_LIST.NumberCurrentItem PRIM_LIST.DateTime PRIM_LIST.DateTimeCurrentItem PRIM_LIST.CheckBox PRIM_LIST.CheckBoxCurrentItem PRIM_LIST.Button PRIM_LIST.ButtonCurrentItem PRIM_LIST.Image PRIM_LIST.ImageCurrentItem PRIM_LIST.Part PRIM_LIST.PartCurrentItem PRIM_LIST.ListItem PRIM_LIST.DropDown PRIM_MD.DataTable PRIM_MD.DataTableDropDown PRIM_MD.DataTableString PRIM_MD.DataTableStringCurrentItem".split(" ")},
menu:{menu:["PRIM_MENU","PRIM_MBAR","PRIM_SMNU","PRIM_MITM"]},msg:{msg:["PRIM_MSG","PRIM_MSGQ","PRIM_MSGQ.Message","PRIM_WEB.MessageBoxCaptions","PRIM_WEB.MessageBox"]},prim:{vo:[],entity:[]},md:{md:"PRIM_MD PRIM_MD.Field PRIM_MD.EditField PRIM_MD.SpinEditField PRIM_MD.FlatButton PRIM_MD.RaisedButton PRIM_MD.ActionButton PRIM_MD.Control PRIM_MD.CheckBox PRIM_MD.RadioButton PRIM_MD.Switch PRIM_MD.Label PRIM_MD.Icon PRIM_MD.Badge".split(" "),md_comp:"PRIM_MD.AppBar PRIM_MD.Alert PRIM_VIEW PRIM_DLG PRIM_MD.AppDrawer PRIM_MD.NavButton PRIM_MD.ViewContainer".split(" ")},
md_dt:{md_df:["PRIM_MD.DateTimeField"],md_dp:["PRIM_MD.DateTimePicker"]},ppnl:{ppnl:["PRIM_PPNL","PRIM_PPNL.MenuBar","PRIM_PPNL.Menu","PRIM_PPNL.MenuItem"]},sound:{sound:["PRIM_SOND","PRIM_SOND.File","PRIM_SOND.Files"]},stpg:{stpg:["PRIM_STPG"]},tab:{tab:["PRIM_TBSH","PRIM_TAB"]},tblo:{tblo:"PRIM_TBLO PRIM_TBLO.Item PRIM_TBLO.Row PRIM_TBLO.RowDivider PRIM_TBLO.Item PRIM_TBLO.Item".split(" ")},text:{text:["PRIM_TEXT"]},tile:{tile:["PRIM_TILE","PRIM_TILE.TileItem"]},thm:{thm:["PRIM_THEME"]},tree:{tree:["PRIM_TREE",
"PRIM_TREE.TreeItem","PRIM_MD.List"]},udc:{cmd:["PRIM_CMD"],fwlm:["PRIM_FWLM","PRIM_FWLI"],udc:"PRIM_UDC PRIM_UDC.Items PRIM_UDC.Item *VARIANT PRIM_VAR PRIM_MD.ListLabel PRIM_MD.ListCheckBox PRIM_MD.ListSwitch PRIM_MD.ListCurrentItem PRIM_MD.ListLabelCurrentItem PRIM_MD.ListCheckBoxCurrentItem PRIM_MD.ListSwitchCurrentItem".split(" ")},val:{val:["PRIM_VAL","PRIM_VAL.Validation"]},ver:{ver:["PRIM_VER.Debugger"]},video:{video:["PRIM_VDEO","PRIM_VDEO.File","PRIM_VDEO.Files"]},wdgt:{wdgt:["PRIM_WDGT",
"PRIM_WDGT.Object","PRIM_WDGT.Control","PRIM_WEB.HtmlContainer"]},dvce:{dvce:["PRIM_DVCE","PRIM_DVCE.Camera","PRIM_DVCE.CameraFile","PRIM_DVCE.BarcodeScanner","PRIM_DVCE.Barcode"]},web:{web:"PRIM_WEB.URLParameters PRIM_WEB.URLParameter PRIM_WEB.LocalStorage PRIM_WEB.LocalStorageItem PRIM_WEB.SessionStorage PRIM_WEB.SessionStorageItem PRIM_WEB.History PRIM_WEB.Page PRIM_WEB.RichTextItem PRIM_WEB.RichTextLine PRIM_WEB.RichTextBreak PRIM_WEB.RichTextImage PRIM_WEB.RichTextParagraph PRIM_WEB.RichText PRIM_WEB.RichTextItems PRIM_WEB.Camera PRIM_WEB.Signature PRIM_WEB.Geolocation PRIM_WEB.Console PRIM_WEB.FilePicker PRIM_WEB.File PRIM_WEB.BlobReader PRIM_WEB.ClobReader".split(" ")},
wrtn:{wrtn:["PRIM_WRTN","PRIM_WEB.ServerRequest","PRIM_WEB.DataRequest","PRIM_WEB.WebPageRequest","PRIM_WEB.ResourceRequest"]}},k=[];c.XKa=function(a){this.xj=a;this.Rbc=null;this.uoa=!1;this.zBa=l};var d=c.u(c.XKa,c.je);d.Hy=function(){var a=this.xj.replace(/[@#$]/g,"_").toLowerCase()+".js";return b.wZa(a)};d.f8=function(a){var c=this,d=this.Hy(),e=document.createElement("script");e.type="text/javascript";e.onload=function(){e.onload=null;e.onerror=null;c.uoa=!0;a()};e.onerror=function(){e.onload=
null;e.onerror=null;throw b.Yk("E001",d);};document.body.appendChild(e);e.src=d};d.b2a=function(a){this.uoa||(this.Hy(),u(this.Hy(),a));this.Fra()};d.JCc=function(a,b){this.zBa===l&&(this.Rbc=a,this.zBa=b)};d.Fra=function(){if(this.zBa){var a=this.zBa;this.zBa=null;a(e,e.checkVersion(this.Rbc))}};c.hbb=function(a){this.sad=a;this.Wac={};this.ABa=[];this.uoa=!1};d=c.u(c.hbb,c.je);d.Hy=function(){return b.Ira("lansa_"+this.sad.toLowerCase()+".js")};d.f8=function(a){var b=this,c=this.Hy(),d=document.createElement("script");
d.type="text/javascript";d.onload=function(){d.onload=null;d.onerror=null;b.uoa=!0;a()};d.onerror=function(){d.onload=null;d.onerror=null;throw"FAILED TO DOWNLOAD"+c;};document.body.appendChild(d);d.src=c};d.b2a=function(a){this.uoa||(this.Hy(),u(this.Hy(),a));this.Fra()};d.LCc=function(a,b){this.Wac[a]===l&&(this.Wac[a]=b,this.ABa.push(b))};d.Fra=function(){for(var d=0;d<this.ABa.length;d++){var v=this.ABa[d];v&&(this.ABa[d]=null,v(e,c,a,b))}this.ABa=[]};c.mSb=function(){this.Poa={};this.Ooa=[];
this.uqb=0;this.Mqb=[];this.uTa=[];this.sDa={};this.rDa=[];this.Vbc=!1;this.Xac=0;this.Nbc=!1;this.spa=null;this.vza={};this.PMa={};for(var a in m)for(var b in m[a]){this.vza[b]=a;for(var c=m[a][b],d=0;d<c.length;d++)this.PMa[c[d].toUpperCase()]=b}};d=c.u(c.mSb,c.je);d.JEc=function(){return 0<k.length};d.Mtc=function(){return k[k.length-1]};d.m5b=function(a,b){this.Vbc=e.a5b!==l;this.bwa("base");this.bwa("prim");this.bwa("thm");this.spa=b;this.KKa(a);var c=this;r(function(){c.Nbc=!0;c.VYa()})};d.bwa=
function(a){if(!this.Vbc&&this.sDa[a]===l){var b=new c.hbb(a);this.sDa[a]=b;this.rDa.push(b);var d=this;b.f8(function(){d.Xac++;d.VYa()})}};d.lPb=function(a,b){var d=this.sDa[a];d||(d=new c.hbb(a),this.sDa[a]=d,this.rDa.push(d));d.b2a(b)};d.KKa=function(a){if(this.Poa[a]===l){var b=new c.XKa(a);this.Poa[a]=b;this.Ooa.push(b);var d=this;b.f8(function(){d.uqb++;d.VYa()})}};d.JIc=function(a,b){var d=this.Poa[a];d||(d=new c.XKa(a),this.Poa[a]=d,this.Ooa.push(d));d.b2a(b)};d.oec=function(a,b,c){var d=
this.vza[a];return d&&(d=this.sDa[d])?(d.LCc(a,b),c&&(this.spa?this.hvb(c.rp):this.BXa(c.rp)),!0):!1};d.gec=function(a,b,d){var e=a.id,f=this.Poa[e];f?(this.spa?(this.qec(d.rc),this.hvb(d.rp)):(this.fvb(d.rc),this.BXa(d.rp)),this.fvb(d.dc),this.BXa(d.dp)):(f=new c.XKa(e),this.Poa[e]=f,this.Ooa.push(f),this.uqb++,f.uoa=!0);f.JCc(a,b)};d.qec=function(a){if(a)for(var b=0;b<a.length;b++)this.KKa(a[b])};d.hvb=function(a){if(a)for(var b=0;b<a.length;b++){var c=this.PMa[a[b].toUpperCase()];c&&(c=this.vza[c])&&
this.bwa(c)}};d.fvb=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];0>this.Mqb.indexOf(c)&&this.Mqb.push(c)}};d.BXa=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];0>this.uTa.indexOf(c)&&this.uTa.push(c)}};d.VYa=function(){this.Nbc&&this.Ooa.length==this.uqb&&this.rDa.length==this.Xac&&this.qic()};d.MIc=function(a,b,c){5<a.length&&"PRIM_"==a.substr(0,5)?this.LIc(a,b,c):this.JIc(a,c)};d.LIc=function(a,b,c){var d=a;a!=b&&(d+="."+b);(a=this.PMa[d.toUpperCase()])&&(a=this.vza[a])&&this.lPb(a,
c)};d.qic=function(){for(var a=0;a<this.rDa.length;a++){var b=this.rDa[a];b.Fra()}for(a=0;a<this.Ooa.length;a++)b=this.Ooa[a],b.Fra();this.spa&&(a=this.spa,this.spa=null,a());this.p_c()};d.p_c=function(){for(var a,b=0;4>b&&(a=this.uTa.shift());){var c=this.PMa[a.toUpperCase()];c&&(c=this.vza[c])&&(this.bwa(c),b++)}for(;4>b&&(a=this.Mqb.shift());)this.KKa(a),b++};d.IHd=function(){for(var a;a=this.uTa.shift();)this.KKa(a)}});
