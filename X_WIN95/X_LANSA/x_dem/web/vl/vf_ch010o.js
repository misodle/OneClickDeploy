﻿LANSA.addComponent({id:"VF_CH010O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Test Command Handler",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELXVI1",ft:"A",ln:32,dc:0,ks:"O",lb:{"ENG":"Visual Id 1","FRA":"Visual Identifi","JPN":"Visual Identifi"}[cL],h1:"Visual",h2:"Identifier",h3:"1",de:"Visual Identifier 1",dv:"",ia:["FE"]},F2:{nm:"VF_ELXVI2",ft:"A",ln:50,dc:0,ks:"O",lb:{"ENG":"Visual Id 2","FRA":"Visual Identifi","JPN":"Visual Identifi"}[cL],
h1:"Visual",h2:"Identifier",h3:"2",de:"Visual Identifier 2",dv:"",ia:["FE"]},F3:{nm:"VF_ELXNK1",ft:"S",ln:15,dc:0,ec:"K",lb:"Numeric Key 1",h1:"Numeric",h2:"Key",h3:"1",de:"Numeric Key 1",dv:0,ia:["RB","FE"]},F4:{nm:"VF_ELXNK2",ft:"S",ln:15,dc:0,ec:"K",lb:{"ENG":"Numeric Key 2","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],h1:"Numeric",h2:"Key",h3:{"ENG":"2","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Numeric Key 2","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],dv:0,ia:["RB","FE"]},F5:{nm:"VF_ELXNK3",
ft:"S",ln:15,dc:0,ec:"K",lb:{"ENG":"Numeric Key 3","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],h1:"Numeric",h2:"Key",h3:{"ENG":"3","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Numeric Key 3","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],dv:0,ia:["RB","FE"]},F6:{nm:"VF_ELXNK4",ft:"S",ln:15,dc:0,ec:"K",lb:{"ENG":"Numeric Key 4","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],h1:"Numeric",h2:"Key",h3:{"ENG":"4","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Numeric Key 4","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],
dv:0,ia:["RB","FE"]},F7:{nm:"VF_ELXNK5",ft:"S",ln:15,dc:0,ec:"K",lb:{"ENG":"Numeric Key 5","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],h1:"Numeric",h2:"Key",h3:{"ENG":"5","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Numeric Key 5","FRA":"Numeric Key 1","JPN":"Numeric Key 1"}[cL],dv:0,ia:["RB","FE"]},F8:{nm:"VF_ELXAK1",ft:"A",ln:32,dc:0,lb:"Alpha Key 1",h1:"Alpha",h2:"Key",h3:"1",de:"Alpha Key 1",dv:"",ia:["FE"]},F9:{nm:"VF_ELXAK2",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 2","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],
h1:"Alpha",h2:"Key",h3:{"ENG":"2","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 2","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F10:{nm:"VF_ELXAK3",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 3","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],h1:"Alpha",h2:"Key",h3:{"ENG":"3","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 3","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F11:{nm:"VF_ELXAK4",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 4","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],
h1:"Alpha",h2:"Key",h3:{"ENG":"4","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 4","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F12:{nm:"VF_ELXAK5",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 5","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],h1:"Alpha",h2:"Key",h3:{"ENG":"5","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 5","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F13:{nm:"VF_ELBOOL",ft:"A",ln:5,dc:0,lb:{"ENG":"Standard","FRA":"?","JPN":"Standard Boolea"}[cL],h1:{"ENG":"Boolean","FRA":"?","JPN":"Standard"}[cL],
h2:{"ENG":"","FRA":"","JPN":"Boolean"}[cL],h3:"",de:{"ENG":"Standard Boolean","FRA":"?","JPN":"Standard Boolean"}[cL],dv:"",ia:["FE"]},F14:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F15:{nm:"VF_ELTXTS",ft:"A",ln:20,dc:0,lb:"Standard Short",
h1:"Standard",h2:"Short",h3:"Text",de:"Standard Short Text",dv:"",ia:["FE"]},F16:{nm:"VF_ELTXTL",ft:"A",ln:255,dc:0,lb:"Standard Long T",h1:"Standard",h2:"Long",h3:"Text",de:"Standard Long Text",dv:"",ia:["FE"]},F17:{nm:"STD_TEXTL",ft:"A",ln:75,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:{"ENG":"Standard TEXT, LONG","FRA":"Texte Long Standard","JPN":"Standard TEXT, LONG"}[cL],dv:"",ia:["LC"]},F18:{nm:"STD_TEXTS",ft:"A",ln:30,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text"}[cL],
h2:" ",h3:" ",de:{"ENG":"Standard TEXT, SHORT","FRA":"Texte Court Standard","JPN":"Standard TEXT, SHORT"}[cL],dv:"",ia:["LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_CH010O",Fd);var C0=this.cF("VF_ELXVI1",Fd.F1.VISUAL);var C1=this.cF("VF_ELXVI2",Fd.F2.VISUAL);var C2=this.cF("VF_ELXNK1",Fd.F3.VISUAL);var C3=this.cF("VF_ELXNK2",Fd.F4.VISUAL);var C4=this.cF("VF_ELXNK3",Fd.F5.VISUAL);
var C5=this.cF("VF_ELXNK4",Fd.F6.VISUAL);var C6=this.cF("VF_ELXNK5",Fd.F7.VISUAL);var C7=this.cF("VF_ELXAK1",Fd.F8.VISUAL);var C8=this.cF("VF_ELXAK2",Fd.F9.VISUAL);var C9=this.cF("VF_ELXAK3",Fd.F10.VISUAL);var C10=this.cF("VF_ELXAK4",Fd.F11.VISUAL);var C11=this.cF("VF_ELXAK5",Fd.F12.VISUAL);var C12=this.cF("VF_ELBOOL",Fd.F13.VISUAL);var C13=this.cF("VF_ELIDN",Fd.F14.VISUAL);var C14=this.cF("VF_ELTXTS",Fd.F15.VISUAL);var C15=this.cF("VF_ELTXTL",Fd.F16.VISUAL);var C16=this.cF("STD_TEXTL",Fd.F17.VISUAL);
var C17=this.cF("STD_TEXTS",Fd.F18.VISUAL);C0.setDisplayPosition(1);C0.setHeight(19);C0.setLeft(8);C0.setParent(this);C0.setTabPosition(1);C0.setTop(8);C0.setUsePicklist(false);C0.setWidth(416);C0.aD();C0.iC();C1.setDisplayPosition(2);C1.setHeight(19);C1.setLeft(8);C1.setParent(this);C1.setTabPosition(2);C1.setTop(26);C1.setUsePicklist(false);C1.setWidth(417);C1.aD();C1.iC();C2.setDisplayPosition(7);C2.setLeft(273);C2.setParent(this);C2.setTabPosition(7);C2.setTop(136);C2.setWidth(247);C2.aD();C2.iC();
C3.setDisplayPosition(6);C3.setHeight(19);C3.setLeft(273);C3.setParent(this);C3.setTabPosition(6);C3.setTop(155);C3.setUsePicklist(false);C3.setWidth(247);C3.aD();C3.iC();C4.setDisplayPosition(5);C4.setHeight(19);C4.setLeft(273);C4.setParent(this);C4.setTabPosition(5);C4.setTop(174);C4.setUsePicklist(false);C4.setWidth(247);C4.aD();C4.iC();C5.setDisplayPosition(4);C5.setHeight(19);C5.setLeft(273);C5.setParent(this);C5.setTabPosition(4);C5.setTop(192);C5.setUsePicklist(false);C5.setWidth(247);C5.aD();
C5.iC();C6.setDisplayPosition(3);C6.setHeight(19);C6.setLeft(273);C6.setParent(this);C6.setTabPosition(3);C6.setTop(208);C6.setUsePicklist(false);C6.setWidth(247);C6.aD();C6.iC();C7.setDisplayPosition(12);C7.setHeight(19);C7.setLeft(11);C7.setParent(this);C7.setTabPosition(12);C7.setTop(136);C7.setUsePicklist(false);C7.setWidth(249);C7.aD();C7.iC();C8.setDisplayPosition(11);C8.setHeight(19);C8.setLeft(11);C8.setParent(this);C8.setTabPosition(11);C8.setTop(153);C8.setUsePicklist(false);C8.setWidth(249);
C8.aD();C8.iC();C9.setDisplayPosition(10);C9.setHeight(19);C9.setLeft(11);C9.setParent(this);C9.setTabPosition(10);C9.setTop(172);C9.setUsePicklist(false);C9.setWidth(249);C9.aD();C9.iC();C10.setDisplayPosition(9);C10.setHeight(19);C10.setLeft(11);C10.setParent(this);C10.setTabPosition(9);C10.setTop(190);C10.setUsePicklist(false);C10.setWidth(249);C10.aD();C10.iC();C11.setDisplayPosition(8);C11.setHeight(19);C11.setLeft(11);C11.setParent(this);C11.setTabPosition(8);C11.setTop(208);C11.setUsePicklist(false);
C11.setWidth(249);C11.aD();C11.iC();C12.setCaption("Found ");C12.setDisplayPosition(13);C12.setHeight(19);C12.setLabelType("CAPTION");C12.setLeft(8);C12.setParent(this);C12.setTabPosition(13);C12.setTop(44);C12.setUsePicklist(false);C12.setWidth(209);C12.aD();C12.iC();C13.setCaption("Business Object Type");C13.setDisplayPosition(14);C13.setHeight(19);C13.setLabelType("CAPTION");C13.setLeft(8);C13.setParent(this);C13.setTabPosition(14);C13.setTop(64);C13.setWidth(329);C13.aD();C13.iC();C14.setCaption("Type");
C14.setDisplayPosition(15);C14.setHeight(19);C14.setLabelType("CAPTION");C14.setLeft(344);C14.setMarginLeft(30);C14.setParent(this);C14.setTabPosition(15);C14.setTop(108);C14.setUsePicklist(false);C14.setWidth(159);C14.aD();C14.iC();C15.setCaption("Business Object Caption");C15.setDisplayPosition(16);C15.setHeight(19);C15.setLabelType("CAPTION");C15.setLeft(8);C15.setParent(this);C15.setTabPosition(16);C15.setTop(107);C15.setUsePicklist(false);C15.setWidth(329);C15.aD();C15.iC();C16.setCaption("Command Caption");
C16.setDisplayPosition(17);C16.setHeight(19);C16.setLabelType("CAPTION");C16.setLeft(8);C16.setParent(this);C16.setTabPosition(17);C16.setTop(84);C16.setUsePicklist(false);C16.setWidth(329);C16.aD();C16.iC();C17.setCaption("Type");C17.setDisplayPosition(18);C17.setHeight(19);C17.setLabelType("CAPTION");C17.setLeft(344);C17.setMarginLeft(30);C17.setParent(this);C17.setTabPosition(18);C17.setTop(84);C17.setUsePicklist(false);C17.setWidth(159);C17.aD();C17.iC();this.setHeight(240);this.setWidth(600);
}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",47);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=47;{r.ln=50;cA.mthUEXECUTE.call(this,P0,P1);r.ln=53;this.mthAVGETASSOCIATEDINSTANCE(m.VF_ELBOOL,m.VF_ELXAK1,m.VF_ELXAK2,m.VF_ELXAK3,m.VF_ELXAK4,m.VF_ELXAK5,m.VF_ELXNK1,m.VF_ELXNK2,m.VF_ELXNK3,m.VF_ELXNK4,m.VF_ELXNK4,m.VF_ELXVI1,m.VF_ELXVI2,m.VF_ELIDN,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
r.ln=57;m.STD_TEXTS.set(this.getAVCOMMANDTYPE());r.ln=58;m.STD_TEXTL.set(this.getAVCOMMANDCAPTION());r.ln=59;m.VF_ELTXTS.set(this.getAVOBJECTTYPE());r.ln=60;m.VF_ELTXTL.set(this.getAVOBJECTCAPTION());p0.set(P0.get());}r.ln=62;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELXVI1"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXVI1",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);
};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELXVI2"});Fd.F2.VISUAL=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXVI2",cn:"Visual"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELXNK1"});Fd.F3.VISUAL=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXNK1",cn:"Visual"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELXNK2"});
Fd.F4.VISUAL=function(){this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXNK2",cn:"Visual"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELXNK3"});Fd.F5.VISUAL=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXNK3",cn:"Visual"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELXNK4"});Fd.F6.VISUAL=function(){this.aN.call(this,new Fd.F6.Dc());
};l.cFC({co:Fd.F6.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXNK4",cn:"Visual"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELXNK5"});Fd.F7.VISUAL=function(){this.aN.call(this,new Fd.F7.Dc());};l.cFC({co:Fd.F7.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXNK5",cn:"Visual"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"VF_ELXAK1"});Fd.F8.VISUAL=function(){this.aN.call(this,new Fd.F8.Dc());};l.cFC({co:Fd.F8.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXAK1",cn:"Visual"});
}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"VF_ELXAK2"});Fd.F9.VISUAL=function(){this.aN.call(this,new Fd.F9.Dc());};l.cFC({co:Fd.F9.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXAK2",cn:"Visual"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"VF_ELXAK3"});Fd.F10.VISUAL=function(){this.aN.call(this,new Fd.F10.Dc());};l.cFC({co:Fd.F10.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXAK3",cn:"Visual"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);
};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"VF_ELXAK4"});Fd.F11.VISUAL=function(){this.aN.call(this,new Fd.F11.Dc());};l.cFC({co:Fd.F11.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXAK4",cn:"Visual"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"VF_ELXAK5"});Fd.F12.VISUAL=function(){this.aN.call(this,new Fd.F12.Dc());};l.cFC({co:Fd.F12.VISUAL,an:"PRIM_EVEF",fn:"VF_ELXAK5",cn:"Visual"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"VF_ELBOOL"});
Fd.F13.VISUAL=function(){this.aN.call(this,new Fd.F13.Dc());};l.cFC({co:Fd.F13.VISUAL,an:"PRIM_EVEF",fn:"VF_ELBOOL",cn:"Visual"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});Fd.F14.VISUAL=function(){this.aN.call(this,new Fd.F14.Dc());};l.cFC({co:Fd.F14.VISUAL,an:"PRIM_EVEF",fn:"VF_ELIDN",cn:"Visual"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"VF_ELTXTS"});Fd.F15.VISUAL=function(){this.aN.call(this,new Fd.F15.Dc());
};l.cFC({co:Fd.F15.VISUAL,an:"PRIM_EVEF",fn:"VF_ELTXTS",cn:"Visual"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"VF_ELTXTL"});Fd.F16.VISUAL=function(){this.aN.call(this,new Fd.F16.Dc());};l.cFC({co:Fd.F16.VISUAL,an:"PRIM_EVEF",fn:"VF_ELTXTL",cn:"Visual"});}{Fd.F17.Dc=function(){this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"STD_TEXTL"});Fd.F17.VISUAL=function(){this.aN.call(this,new Fd.F17.Dc());};l.cFC({co:Fd.F17.VISUAL,an:"PRIM_EVEF",fn:"STD_TEXTL",cn:"Visual"});
}{Fd.F18.Dc=function(){this.aN.call(this,Fd.F18);};l.cFC({co:Fd.F18.Dc,an:"PRIM_FLD",fn:"STD_TEXTS"});Fd.F18.VISUAL=function(){this.aN.call(this,new Fd.F18.Dc());};l.cFC({co:Fd.F18.VISUAL,an:"PRIM_EVEF",fn:"STD_TEXTS",cn:"Visual"});}},{rc:["VF_AC010O"],rp:["PRIM_EVEF"]});