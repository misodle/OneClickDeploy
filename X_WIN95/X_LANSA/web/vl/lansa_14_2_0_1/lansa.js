(function(e,c){function a(a,b,c,d){var e=new XMLHttpRequest;a=a.toLowerCase();e.onreadystatechange=function(){4==e.readyState&&(e.responseText&&400>e.status?b(e.responseText):c&&c(e.status))};e.ontimeout=function(){c&&c(e.status)};e.open("GET",a,d);e.send(null)}function b(a){return a.replace(/[&"<>]/g,function(a){return{"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"}[a]})}function k(a){return(a=RegExp("[?&]"+a+"=([^&]*)","i").exec(window.location.search))&&decodeURIComponent(a[1].replace(/\+/g," "))}
function s(){q||(q=new x.cSb)}function p(a){var b=!1;H.UGb(H.Tqa("error/error-"+a.toLowerCase()+".json"),function(a){try{h=JSON.parse(a),b=!0}catch(c){}});return b}function t(){h||(h={},p(H.Sga())||p(H.H4a())||p("ENG"));return h}function f(){function a(){b&&q&&e&&(b.style.visibility="visible")}var b=null,d=null,e=!1,q=!1,u=l.splash;if(u){var f=u.limg,b=document.createElement("div"),d=b.style;d.fontFamily="verdana";d.visibility="hidden";d.position="absolute";d.top="50%";d.left="50%";d.textAlign="center";
d.transform="translateX(-50%) translateY(-50%)";var d=document.createElement("img"),h=document.createTextNode("");b.appendChild(d);b.appendChild(document.createElement("br"));b.appendChild(h);d.onload=function(){var b=u.mtxt;b&&(b=b[H.Sga()],b!==c&&(h.nodeValue=b));q=!0;a()};f!==c?"spin"==f&&(d.src=H.oc("lansa_spin.gif")):(f=u.uimg,f!==c&&(d.src=f));setTimeout(function(){e=!0;a()},1E3)}return b}var g="",n="",l={},d=c,q=c,v=c,C=c,h=c,y=!1,J=k("developer"),V=J&&"YES"===J.toUpperCase(),O=V?Math.round((new Date).getTime()/
1E3).toString()+"_dev":c,u=!1,B=!1,H={};H.nonce=e.nonce;var F={},x={u:function(a,b){a.prototype=Object.create(b.prototype);a.prototype.v=b;a.prototype.j=b.prototype;return a.prototype},ke:function(){}};x.ke.prototype.dC=function(){return null};if(!V){var K=window.applicationCache;K&&K.addEventListener("updateready",function(){K.status==K.UPDATEREADY&&location.reload()})}window.onerror=function(a,d,u){if(!y){document.body.innerHTML="";var f=a,h=d,v=3>arguments.length?c:arguments[3],B=4>arguments.length?
c:arguments[4],l=t(),g=l.MSG1||"Fatal Error:",p=l.MSG2||"Location:",n=l.MSG3||"Call Stack:",F=l.MSG4||"Reported By:",k=l.MSG5||"&1, line &2",x=c,s=!1;C?f=C:(B instanceof SyntaxError?(s=!0,q&&q.NEc()&&(h=q.Otc())):0<h.indexOf("/lansa_14_2_0_1/")&&(x=l.MSG6||"Exception:",g=l.MSG7||"LANSA Runtime Error:"),B&&B.message&&(f=B.message));s&&(g=l.MSG8||"JavaScript Syntax Error:");f="<p><strong>"+g+"</strong><ul>"+b(f)+"</ul></p>";if(!s&&e.hV&&0<e.hV()){s=e.Tga();l=s.qD.$x;f=f+("<p><strong>"+p+"</strong>")+
("<ul>"+k.wPa(l.Sxc()+": "+l.I4a(),s.d1())+"</ul>");f+="</p>";f+="<p><strong>"+n+"</strong>";for(p=0;p<e.hV();p++)s=e.JGa(p),l=s.qD.$x,f+="<ol>"+(p+1).toString()+". "+s.S0()+": "+l.I4a()+", line "+s.d1()+"</ol>";f+="</p>"}h&&(f+="<p><strong>"+F+"</strong><ul>"+k.wPa(h,(u||"?")+(v?":"+v:""))+"</ul></p>");B&&x&&(h=B.stack)&&(f+="<p><strong>"+x+"</strong><ul>",f+=h.replace(/(?:\r\n|\r|\n)/g,"<br >"),f+="</ul></p>");document.body.innerHTML=f;y=!0}return!0};e.init=function(a){l=a};e.showPage=function(a,
b){g=a;n=b||a;var c=null;if(H.tFc()){H.KDb();H.JDb();var c=document.createElement("div"),d=document.createElement("div");c.style.fontFamily="Roboto";d.setAttribute("class","material-icons");c.appendChild(d);document.body.appendChild(c)}var u=f();document.body.parentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0px";u&&document.body.appendChild(u);s();q.h5b(a,function(){H.mua()||(u&&(document.body.removeChild(u),u=null),c&&(document.body.removeChild(c),c=
null),v&&(e.Eb("PRIM_WRTN"),H.rqc(v)),e.W4b(a))})};e.showPart=function(a,b,c){var d=document.getElementById(b),u=f();d&&u&&d.appendChild(u);s();q.h5b(a,function(){var q=null;H.mua()||(d&&u&&(d.removeChild(u),u=null),q=e.$Zc(a,b));c&&c(q)})};e.useOutput=function(a){v=a};e.addComponent=function(a,b,d){q===c&&s();q.eec(a,b,d)};e.addSrc=function(a,b,c){q&&q.mec(a,b,c)||b(e,x,F,H)};H.dxc=function(){return g};H.cxc=function(){return n};H.XGa=function(){return l.part||l.Partition};H.YGa=function(){return l.sys||
l.System};H.Gyc=function(){return l.ver};H.iuc=function(){var a=l.splash;return a&&(a=a.uimg)?a:H.oc("lansa_spin.gif")};H.h9a=function(){return 1===l.slz};H.tFc=function(){return 1===l.md};H.Wkd=function(){return 14200001};H.Ood=function(){return 14000002};H.$Gb=function(){return l.lang};H.Sga=function(){d===c&&(d=(k("lang")||H.H4a()||"ENG").toUpperCase());return d};H.nAc=function(){return v};H.BQc=function(){v=c};H.KDb=function(){if(!u){u=!0;var a=document.createElement("link");a.href=H.Hfa("roboto.css");
a.rel="stylesheet";a.type="text/css";document.body.appendChild(a)}};H.JDb=function(){if(!B){B=!0;var a=document.createElement("link");a.href=H.Hfa("material-icons.css");a.rel="stylesheet";a.type="text/css";document.body.appendChild(a)}};H.Hfa=function(a){return H.Tqa("style/"+a.toLowerCase())};H.Tqa=function(a){return"/"+H.YGa()+"/lansa_14_2_0_1/"+a};H.xZa=function(a){a="/"+H.YGa()+"/"+H.XGa()+"/"+a;if(V)a+="?v="+O;else{var b=H.Gyc();b&&(a+="?v="+b)}return a};H.zjc=function(a,b,c,d,q){var u=H.Sga();
a=a+"/"+b+"/lansaweb?w="+c+"&r="+d+"&vlweb=1&part="+q+"&lang="+u;V&&(a+="&developer=yes");e.PEa&&(a+="&DEBUG="+e.PEa);return a+="&_T="+(new Date).getTime().toString()};H.oc=function(a){return H.Tqa("image/"+a.toLowerCase())};H.H4a=function(){var a=H.$Gb();return a?a.def:c};H.bpc=function(a,b,c){q&&q.PIc(a,b,c)};H.i7=function(a){q&&q.ZOb(a)};H.mua=function(){return y};H.Uk=function(a,b,d,e){C===c&&(C=(a=t()[a])?a.wPa(b,d,e):"Unknown error occurred");return 0};H.zWc=function(a){C=a};H.p_b=function(a,
b,c,d,e,q,u){var f=new XMLHttpRequest;f.onreadystatechange=function(){4==f.readyState&&(f.responseText&&400>f.status?c(f.responseText):d(f.status))};f.upload&&e&&f.upload.addEventListener("progress",e,!1);q&&f.addEventListener("progress",q,!1);f.open("POST",a,u);a=JSON.stringify(b);f.setRequestHeader("Content-type","application/json");f.setRequestHeader("Accept","application/json");f.send(a)};H.GMc=function(a,b,c,d,e,q,u){var f=new XMLHttpRequest;f.onreadystatechange=function(){4==f.readyState&&(f.responseText&&
400>f.status?c(f.responseText):d(f.status))};f.upload&&e&&f.upload.addEventListener("progress",e,!1);q&&f.addEventListener("progress",q,!1);f.open("POST",a,u);f.setRequestHeader("Accept","application/json");f.send(b)};H.UGb=function(b,c,d){a(b,c,d,!1)};H.cwc=function(b,c,d){a(b,c,d,!0)};H.sqa=function(a){H.nonce&&a.setAttribute("nonce",H.nonce)};String.prototype.wPa=function(a,b,d,e,q,f,u,h,v){for(var B=this.toString(),l=0,g=B.indexOf("&"),C="";0<=g&&g+1<B.length;)C+=B.substring(l,g),l=g,g++,"1"==
B.charAt(g)&&a!==c?(C+=a,l=++g):"2"==B.charAt(g)&&b!==c?(C+=b,l=++g):"3"==B.charAt(g)&&d!==c?(C+=d,l=++g):"4"==B.charAt(g)&&e!==c?(C+=e,l=++g):"5"==B.charAt(g)&&q!==c?(C+=q,l=++g):"6"==B.charAt(g)&&f!==c?(C+=f,l=++g):"7"==B.charAt(g)&&u!==c?(C+=u,l=++g):"8"==B.charAt(g)&&h!==c?(C+=h,l=++g):"9"==B.charAt(g)&&v!==c?(C+=v,l=++g):"&"==B.charAt(g)&&(C+="&",l=++g),g=B.indexOf("&",g);return C+=B.substr(l)}})(window.LANSA?window.LANSA:window.LANSA={},void 0);window.LANSA.addSrc("download",function(e,c,a,b,k){function s(a,c){c===k&&(c=!1);var d=p(a);if(d){var e=document.createElement("script");b.sqa(e);e.text=d;l.push(a);document.head.appendChild(e);l.pop()}else if(c)throw b.Uk("E001",a);}function p(a){function c(a){d=a}var d=k;try{b.UGb(a,c,function(){})}catch(e){}return d}function t(a){function c(){b.hNb={};a()}var d=null,e=b.$Gb();e&&(d=e.code);d?f(d[b.Sga()],a,function(){f(d[b.H4a()],a,c)}):c()}function f(a,b,c){a?g(a,b,function(){var d=a.indexOf("-");
0<d?g(a.substring(0,d),b,c):c()}):c()}function g(a,c,d){b.cwc(b.Tqa("locale/locale-"+a+".json"),function(a){var e=!1;try{b.hNb=JSON.parse(a),e=!0}catch(q){}e?c():d()},d)}var n={anim:{anim:"PRIM_ANIM.AnimationItem PRIM_ANIM.Style PRIM_ANIM.Opacity PRIM_ANIM.Visibility PRIM_ANIM.Scale PRIM_ANIM.Rotate PRIM_ANIM.Skew PRIM_ANIM.Width PRIM_ANIM.Height PRIM_ANIM.Transition PRIM_ANIM.TableLayoutItem PRIM_ANIM.Move PRIM_ANIM.MoveFrom PRIM_ANIM.MoveTo PRIM_ANIM PRIM_ANMG".split(" ")},atlm:{atlm:["PRIM_ATLM"],
atli:["PRIM_ATLI"]},base:{base:[],field:[],string:[],blob:[],number:[],"boolean":[]},btn:{btn:["PRIM_PHBN","PRIM_CKBX","PRIM_RDBN","PRIM_SPBN"]},caro:{caro:["PRIM_CARO","PRIM_CARO.CarouselItem"]},coll:{coll:"PRIM_COLL PRIM_LCOL PRIM_ACOL PRIM_SACO PRIM_PCOL PRIM_KCOL PRIM_DCOL".split(" ")},desn:{desn:["PRIM_DESN","PRIM_DESN.Design"]},drag:{drag:["PRIM_DRAG"]},dtim:{date_and_time:[],fmtd:["PRIM_DATE","PRIM_DAT","PRIM_TIME"],mtcl:["PRIM_MTCL"],dtim:["PRIM_DTIM"]},edit:{fmts:["PRIM_FMTS"],fmtn:["PRIM_FMTN"],
edit:["PRIM_EDIT","PRIM_SPDT"]},evp:{evp:["PRIM_EVP"]},evdt:{evdt:["PRIM_EVDT"]},evef:{evef:["PRIM_EVEF"]},evmc:{evmc:["PRIM_EVMC"]},evpl:{evpl:["PRIM_EVPL"]},evse:{evse:["PRIM_EVSE"]},evst:{evst:["PRIM_EVST"]},fld:{fld:["PRIM_FLD","PRIM_PKIT","PRIM_PKLT"]},gpbx:{gpbx:["PRIM_GPBX"]},hint:{hint:["PRIM_HINT"]},http:{http:["PRIM_WEB.HttpHeader","PRIM_WEB.HttpHeaders","PRIM_WEB.HttpRequest","PRIM_WEB.HttpResponse","PRIM_WEB.HttpContent"]},imag:{imag:["PRIM_IMAG"]},json:{json:"PRIM_WEB.Json PRIM_WEB.JsonElement PRIM_WEB.JsonArray PRIM_WEB.JsonObject PRIM_WEB.JsonNumber PRIM_WEB.JsonString PRIM_WEB.JsonBoolean".split(" ")},
labl:{labl:["PRIM_LABL"]},list:{list:"PRIM_LIST PRIM_UDC.Columns PRIM_LIST.Column PRIM_LIST.CurrentItem PRIM_LIST.String PRIM_LIST.StringCurrentItem PRIM_LIST.Number PRIM_LIST.NumberCurrentItem PRIM_LIST.DateTime PRIM_LIST.DateTimeCurrentItem PRIM_LIST.CheckBox PRIM_LIST.CheckBoxCurrentItem PRIM_LIST.Button PRIM_LIST.ButtonCurrentItem PRIM_LIST.Image PRIM_LIST.ImageCurrentItem PRIM_LIST.Part PRIM_LIST.PartCurrentItem PRIM_LIST.ListItem PRIM_LIST.DropDown".split(" ")},menu:{menu:["PRIM_MENU","PRIM_MBAR",
"PRIM_SMNU","PRIM_MITM"]},msg:{msg:["PRIM_MSG","PRIM_MSGQ","PRIM_MSGQ.Message","PRIM_WEB.MessageBoxCaptions","PRIM_WEB.MessageBox"]},prim:{vo:[],entity:[]},md:{md:"PRIM_MD PRIM_MD.Input PRIM_MD.Edit PRIM_MD.SpinEdit PRIM_MD.FlatButton PRIM_MD.RaisedButton PRIM_MD.ActionButton PRIM_MD.Control PRIM_MD.CheckBox PRIM_MD.RadioButton PRIM_MD.Switch PRIM_MD.Label PRIM_MD.Icon PRIM_MD.Badge".split(" "),md_comp:"PRIM_MD.AppBar PRIM_MD.Alert PRIM_VIEW PRIM_DLG PRIM_MD.AppDrawer PRIM_MD.NavButton PRIM_MD.ViewContainer".split(" ")},
md_dt:{md_date:["PRIM_MD.DateTime"],md_dp:["PRIM_MD.DateTimePicker"],md_dropdown:["PRIM_MD.Dropdown","PRIM_MD.DropdownItem","PRIM_MD.DropdownItems"]},ppnl:{ppnl:["PRIM_PPNL","PRIM_PPNL.MenuBar","PRIM_PPNL.Menu","PRIM_PPNL.MenuItem"]},sound:{sound:["PRIM_SOND","PRIM_SOND.File","PRIM_SOND.Files"]},stpg:{stpg:["PRIM_STPG"]},tab:{tab:["PRIM_TBSH","PRIM_TAB"]},tblo:{tblo:"PRIM_TBLO PRIM_TBLO.Item PRIM_TBLO.Row PRIM_TBLO.RowDivider PRIM_TBLO.Item PRIM_TBLO.Item".split(" ")},text:{text:["PRIM_TEXT"]},tile:{tile:["PRIM_TILE",
"PRIM_TILE.TileItem"]},thm:{thm:["PRIM_THEME"]},tree:{tree:["PRIM_TREE","PRIM_TREE.TreeItem","PRIM_MD.List"]},udc:{cmd:["PRIM_CMD"],fwlm:["PRIM_FWLM","PRIM_FWLI"],udc:"PRIM_UDC PRIM_UDC.Items PRIM_UDC.Item *VARIANT PRIM_VAR PRIM_MD.ListLabel PRIM_MD.ListCheckBox PRIM_MD.ListSwitch PRIM_MD.ListCurrentItem PRIM_MD.ListLabelCurrentItem PRIM_MD.ListCheckBoxCurrentItem PRIM_MD.ListSwitchCurrentItem".split(" ")},val:{val:["PRIM_VAL","PRIM_VAL.Validation"]},ver:{ver:["PRIM_VER.Debugger"]},video:{video:["PRIM_VDEO",
"PRIM_VDEO.File","PRIM_VDEO.Files"]},wdgt:{wdgt:["PRIM_WDGT","PRIM_WDGT.Object","PRIM_WDGT.Control","PRIM_WEB.HtmlContainer"]},dvce:{dvce:["PRIM_DVCE","PRIM_DVCE.Camera","PRIM_DVCE.CameraFile","PRIM_DVCE.BarcodeScanner","PRIM_DVCE.Barcode"]},web:{web:"PRIM_WEB.URLParameters PRIM_WEB.URLParameter PRIM_WEB.LocalStorage PRIM_WEB.LocalStorageItem PRIM_WEB.SessionStorage PRIM_WEB.SessionStorageItem PRIM_WEB.History PRIM_WEB.Page PRIM_WEB.RichTextItem PRIM_WEB.RichTextLine PRIM_WEB.RichTextBreak PRIM_WEB.RichTextImage PRIM_WEB.RichTextParagraph PRIM_WEB.RichText PRIM_WEB.RichTextItems PRIM_WEB.Camera PRIM_WEB.Signature PRIM_WEB.Geolocation PRIM_WEB.Console PRIM_WEB.FilePicker PRIM_WEB.File PRIM_WEB.BlobReader PRIM_WEB.ClobReader".split(" ")},
wrtn:{wrtn:["PRIM_WRTN","PRIM_WEB.ServerRequest","PRIM_WEB.DataRequest","PRIM_WEB.WebPageRequest","PRIM_WEB.ResourceRequest"]}},l=[];c.wKa=function(a){this.pj=a;this.Pbc=null;this.Ena=!1;this.JAa=k};var d=c.u(c.wKa,c.ke);d.Ay=function(){var a=this.pj.replace(/[@#$]/g,"_").toLowerCase()+".js";return b.xZa(a)};d.v7=function(a){var c=this,d=this.Ay(),e=document.createElement("script");e.type="text/javascript";e.onload=function(){e.onload=null;e.onerror=null;c.Ena=!0;a()};e.onerror=function(){e.onload=
null;e.onerror=null;throw b.Uk("E001",d);};document.body.appendChild(e);e.src=d};d.d2a=function(a){this.Ena||(this.Ay(),s(this.Ay(),a));this.Qqa()};d.LCc=function(a,b){this.JAa===k&&(this.Pbc=a,this.JAa=b)};d.Qqa=function(){if(this.JAa){var a=this.JAa;this.JAa=null;a(e,e.checkVersion(this.Pbc))}};c.fbb=function(a){this.Aad=a;this.Vac={};this.KAa=[];this.Ena=!1};d=c.u(c.fbb,c.ke);d.Ay=function(){return b.Tqa("lansa_"+this.Aad.toLowerCase()+".js")};d.v7=function(a){var b=this,c=this.Ay(),d=document.createElement("script");
d.type="text/javascript";d.onload=function(){d.onload=null;d.onerror=null;b.Ena=!0;a()};d.onerror=function(){d.onload=null;d.onerror=null;throw"FAILED TO DOWNLOAD"+c;};document.body.appendChild(d);d.src=c};d.d2a=function(a){this.Ena||(this.Ay(),s(this.Ay(),a));this.Qqa()};d.NCc=function(a,b){this.Vac[a]===k&&(this.Vac[a]=b,this.KAa.push(b))};d.Qqa=function(){for(var d=0;d<this.KAa.length;d++){var f=this.KAa[d];f&&(this.KAa[d]=null,f(e,c,a,b))}this.KAa=[]};c.cSb=function(){this.Zna={};this.Yna=[];
this.nqb=0;this.Fqb=[];this.rTa=[];this.FCa={};this.ECa=[];this.Tbc=!1;this.Wac=0;this.Lbc=!1;this.Eoa=null;this.Hya={};this.rMa={};for(var a in n)for(var b in n[a]){this.Hya[b]=a;for(var c=n[a][b],d=0;d<c.length;d++)this.rMa[c[d].toUpperCase()]=b}};d=c.u(c.cSb,c.ke);d.NEc=function(){return 0<l.length};d.Otc=function(){return l[l.length-1]};d.h5b=function(a,b){this.Tbc=e.W4b!==k;this.zva("base");this.zva("prim");this.zva("thm");this.Eoa=b;this.hKa(a);var c=this;t(function(){c.Lbc=!0;c.WYa()})};d.zva=
function(a){if(!this.Tbc&&this.FCa[a]===k){var b=new c.fbb(a);this.FCa[a]=b;this.ECa.push(b);var d=this;b.v7(function(){d.Wac++;d.WYa()})}};d.ZOb=function(a,b){var d=this.FCa[a];d||(d=new c.fbb(a),this.FCa[a]=d,this.ECa.push(d));d.d2a(b)};d.hKa=function(a){if(this.Zna[a]===k){var b=new c.wKa(a);this.Zna[a]=b;this.Yna.push(b);var d=this;b.v7(function(){d.nqb++;d.WYa()})}};d.MIc=function(a,b){var d=this.Zna[a];d||(d=new c.wKa(a),this.Zna[a]=d,this.Yna.push(d));d.d2a(b)};d.mec=function(a,b,c){var d=
this.Hya[a];return d&&(d=this.FCa[d])?(d.NCc(a,b),c&&(this.Eoa?this.Zub(c.rp):this.CXa(c.rp)),!0):!1};d.eec=function(a,b,d){var e=a.id,f=this.Zna[e];f?(this.Eoa?(this.oec(d.rc),this.Zub(d.rp)):(this.Xub(d.rc),this.CXa(d.rp)),this.Xub(d.dc),this.CXa(d.dp)):(f=new c.wKa(e),this.Zna[e]=f,this.Yna.push(f),this.nqb++,f.Ena=!0);f.LCc(a,b)};d.oec=function(a){if(a)for(var b=0;b<a.length;b++)this.hKa(a[b])};d.Zub=function(a){if(a)for(var b=0;b<a.length;b++){var c=this.rMa[a[b].toUpperCase()];c&&(c=this.Hya[c])&&
this.zva(c)}};d.Xub=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];0>this.Fqb.indexOf(c)&&this.Fqb.push(c)}};d.CXa=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];0>this.rTa.indexOf(c)&&this.rTa.push(c)}};d.WYa=function(){this.Lbc&&this.Yna.length==this.nqb&&this.ECa.length==this.Wac&&this.pic()};d.PIc=function(a,b,c){5<a.length&&"PRIM_"==a.substr(0,5)?this.OIc(a,b,c):this.MIc(a,c)};d.OIc=function(a,b,c){var d=a;a!=b&&(d+="."+b);(a=this.rMa[d.toUpperCase()])&&(a=this.Hya[a])&&this.ZOb(a,
c)};d.pic=function(){for(var a=0;a<this.ECa.length;a++){var b=this.ECa[a];b.Qqa()}for(a=0;a<this.Yna.length;a++)b=this.Yna[a],b.Qqa();this.Eoa&&(a=this.Eoa,this.Eoa=null,a());this.y_c()};d.y_c=function(){for(var a,b=0;4>b&&(a=this.rTa.shift());){var c=this.rMa[a.toUpperCase()];c&&(c=this.Hya[c])&&(this.zva(c),b++)}for(;4>b&&(a=this.Fqb.shift());)this.hKa(a),b++};d.XHd=function(){for(var a;a=this.rTa.shift();)this.hKa(a)}});
