﻿LANSA.addComponent({id:"DF_FILTXO",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Filter Default for Demos",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h1:{"ENG":"Standard","FRA":"Nombre","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":" ","JPN":"Number"}[cL],h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard","JPN":"Standard Number"}[cL],dv:0,
ia:["FE","RB"]},F2:{nm:"NKEY1",ft:"I",ln:4,dc:0,lb:"NKey1",h1:"NKey1",h2:"",h3:"",de:"NKey1",dv:0},F3:{nm:"VISUALID1",ft:"NV",ln:256,dc:0,lb:"VisualID1",h1:"VisualID1",h2:"",h3:"",de:"VisualID1",dv:""},F4:{nm:"VISUALID2",ft:"NV",ln:256,dc:0,lb:"VisualID2",h1:"VisualID2",h2:"",h3:"",de:"VisualID2",dv:""},F5:{nm:"ACOLUMN1",ft:"NV",ln:256,dc:0,lb:"AColumn1",h1:"AColumn1",h2:"",h3:"",de:"AColumn1",dv:""},F6:{nm:"ACOLUMN2",ft:"NV",ln:256,dc:0,lb:"AColumn2",h1:"AColumn2",h2:"",h3:"",de:"AColumn2",dv:""
},F7:{nm:"ACOLUMN3",ft:"NV",ln:256,dc:0,lb:"AColumn3",h1:"AColumn3",h2:"",h3:"",de:"AColumn3",dv:""},F8:{nm:"ACOLUMN4",ft:"NV",ln:256,dc:0,lb:"AColumn4",h1:"AColumn4",h2:"",h3:"",de:"AColumn4",dv:""},F9:{nm:"ACOLUMN5",ft:"NV",ln:256,dc:0,lb:"AColumn5",h1:"AColumn5",h2:"",h3:"",de:"AColumn5",dv:""},F10:{nm:"NCOLUMN1",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:0,ia:["RB","FE"]},F11:{nm:"NCOLUMN2",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",
h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:0,ia:["RB","FE"]},F12:{nm:"NCOLUMN3",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:0,ia:["RB","FE"]},F13:{nm:"NCOLUMN4",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:0,ia:["RB","FE"]},F14:{nm:"NCOLUMN5",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",
dv:0,ia:["RB","FE"]},F15:{nm:"DCOLUMN1",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]},F16:{nm:"DCOLUMN2",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]},F17:{nm:"DCOLUMN3",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]},F18:{nm:"DCOLUMN4",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",
h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]},F19:{nm:"DCOLUMN5",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{SetInitialFocus:{},uBringToFront:{},uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_FILTXO",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("ATTACHLAYOUT2","PRIM_ATLM");
var C3=this.cR("ATTACHITEM3","PRIM_ATLI");var C4=this.cR("ATTACHITEM4","PRIM_ATLI");var C5=this.cR("ATTACHITEM5","PRIM_ATLI");var C6=this.cR("SEARCHPANEL","PRIM_PANL");var C7=this.cR("SEARCH","PRIM_PHBN");var C8=this.cF("LIMIT",Fd.F1.VISUAL);var C9=this.cR("ACCESSSERVER","PRIM_CKBX");var C10=this.cDR("SERVERLOADINSTANCELIST","DF_FILTSO","LOADINSTANCELIST");C0.iC();C1.setManage(C6);C1.setParent(C0);C1.setAttachment("BOTTOM");C1.iC();C2.iC();C3.setManage(C8);C3.setParent(C2);C3.setAttachment("LEFT");
C3.setMarginLeft(6);C3.setMarginTop(4);C3.setMarginBottom(4);C3.iC();C4.setManage(C7);C4.setParent(C2);C4.setAttachment("LEFT");C4.setMarginLeft(6);C4.setMarginTop(4);C4.setMarginBottom(4);C4.iC();C5.setManage(C9);C5.setParent(C2);C5.setAttachment("LEFT");C5.setMarginLeft(6);C5.setMarginTop(4);C5.setMarginBottom(4);C5.iC();C6.setParent(this);C6.setDisplayPosition(1);C6.setTabPosition(1);C6.setLeft(0);C6.setWidth(489);C6.setHeight(30);C6.setTop(11);C6.setLayoutManager(C2);C6.iC();C7.setCaption("Search for xxxxxxxxxx");
C7.setDisplayPosition(1);C7.setTabPosition(1);C7.setTop(4);C7.setWidth(152);C7.setHeight(22);C7.setParent(C6);C7.setLeft(6);C7.setEllipses("END");C7.iC();C8.setDisplayPosition(2);C8.setHeight(22);C8.setLabelType("CAPTION");C8.setMarginLeft(35);C8.setTabPosition(2);C8.setUsePicklist(false);C8.setWidth(70);C8.setCaption("Limit");C8.setParent(C6);C8.setLeft(164);C8.setTop(4);C8.aD();C8.iC();C9.setCaption("From Server");C9.setDisplayPosition(3);C9.setHeight(22);C9.setLeft(240);C9.setMarginLeft(2);C9.setParent(C6);
C9.setTabPosition(3);C9.setTop(4);C9.setWidth(108);C9.setEllipses("END");C9.iC();C10.iC();C7.aH("CLICK",this,e1);C8.aH("ENTER",this,e1);C8.aH("CHANGED",this,e4);C9.aH("CLICK",this,e2);this.REF.AVLOCALTIMER.aH("TICK",this,e3);this.setWidth(489);this.setLayoutManager(C0);this.setHeight(41);var li=this.aL("DF_FILTXO");li.INSTANCELIST=l.cLT({"NKEY1":f.F2,"VISUALID1":f.F3,"VISUALID2":f.F4,"ACOLUMN1":f.F5,"ACOLUMN2":f.F6,"ACOLUMN3":f.F7,"ACOLUMN4":f.F8,"ACOLUMN5":f.F9,"NCOLUMN1":f.F10,"NCOLUMN2":f.F11,"NCOLUMN3":f.F12,"NCOLUMN4":f.F13,"NCOLUMN5":f.F14,"DCOLUMN1":f.F15,"DCOLUMN2":f.F16,"DCOLUMN3":f.F17,"DCOLUMN4":f.F18,"DCOLUMN5":f.F19},null);
}});var cA=cO.aN.prototype;cO.mthSETINITIALFOCUS=function(){var m=this.REF,r=l.mR(this,cO,"SetInitialFocus",74);r.ln=74;{r.ln=76;m.SEARCH.mthSETFOCUS();}r.ln=78;r.e();};cO.mthUBRINGTOFRONT=function(){var r=l.mR(this,cO,"uBringToFront",81);r.ln=81;{r.ln=83;this.mthSETINITIALFOCUS();}r.ln=85;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",88);var C0=r.cR("SEARCHCAPTION","PRIM_ALPH");C0.iC();r.ln=88;{r.ln=93;cA.mthUINITIALIZE.call(this);r.ln=96;C0.set(this.REF.AVFRAMEWORKMANAGER.getAVMTXT("SEARCHFOR"));
r.ln=97;C0.set(l.s.Substitute(C0.get(),this.getASSOCIATEDVF_FR003O().getUCAPTION()));r.ln=98;m.SEARCH.setCaption(C0.get());r.ln=99;this.setAVTITLEBARCAPTION(C0.get());r.ln=101;m.LIMIT.setCaption(this.REF.AVFRAMEWORKMANAGER.getAVMTXT("LIMIT"));r.ln=102;m.LIMIT.set(10);r.ln=105;this.setAVALLOWLOCATIONCHANGE(true);r.ln=108;this.setHeight(m.SEARCHPANEL.getHeight());r.ln=109;this.setAVFILTERLOCATION("TOP");r.ln=110;this.mthSETINITIALFOCUS();r.ln=113;if(this.REF.ASSOCIATEDVF_FR003O.getHITSERVERINDEMOPROGRAMS())
{r.ln=114;m.ACCESSSERVER.setButtonState("CHECKED");}}r.ln=118;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",121);r.ln=121;{r.ln=123;cA.mthUTERMINATE.call(this);}r.ln=125;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#SEARCH.Click #Limit.Enter",128);r.ln=128;{r.ln=130;this.mthAVGOTOBUSYSTATE(this.REF.AVFRAMEWORKMANAGER.getAVMTXT("SEARCHING"),false,u);r.ln=132;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=134;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AccessServer.Click",138);
r.ln=138;{r.ln=140;this.REF.ASSOCIATEDVF_FR003O.setHITSERVERINDEMOPROGRAMS(l.s.eq(m.ACCESSSERVER.getButtonState(),"CHECKED"));}r.ln=142;r.e();};function e3(sender,Ps){var li=this.LIST.DF_FILTXO,f=this.FLD.DF_FILTXO,m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",145);r.ln=145;{r.ln=147;this.REF.AVLOCALTIMER.setInterval(0);r.ln=149;if(this.REF.ASSOCIATEDVF_FR003O.getHITSERVERINDEMOPROGRAMS()){r.ln=151;m.SERVERLOADINSTANCELIST.mthEXECUTE({FLD:{"USELIMIT":m.LIMIT.get(),"USECAPTION":this.REF.ASSOCIATEDVF_FR003O.getUCAPTIONSINGULAR()}},{LIST:{"INSTANCELIST":li.INSTANCELIST}});
r.ln=153;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);r.ln=155;{var l1=li.INSTANCELIST.selectList();while(l1.step()){r.ln=157;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F3.get(),f.F4.get(),u,u,u,u,u,f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,f.F5.get(),f.F6.get(),f.F7.get(),f.F8.get(),f.F9.get(),u,u,u,u,u,f.F10.get(),f.F11.get(),f.F12.get(),f.F13.get(),f.F14.get(),u,u,u,u,u,u,f.F15.get(),f.F16.get(),f.F17.get(),f.F18.get(),f.F19.get(),u);r.ln=159;}l1.end();}r.ln=161;li.INSTANCELIST.clearList();}else{r.ln=165;this.REF.AVFRAMEWORKMANAGER.mthAVEMULATEINSTANCELISTSEARCH(m.LIMIT.get(),this.REF.ASSOCIATEDVF_FR003O,"");
}r.ln=170;this.mthAVGOTOFREESTATE();}r.ln=172;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Limit.Changed",175);r.ln=175;{r.ln=177;if(l.n.lt(m.LIMIT.get(),1)){r.ln=178;m.LIMIT.set(1);}r.ln=181;if(l.n.gt(m.LIMIT.get(),200)){r.ln=182;m.LIMIT.set(200);}}r.ln=185;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_NUM"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"STD_NUM",cn:"Visual"});
}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srASSOCIATEDVF_FR003O=function(rn){cA.srASSOCIATEDVF_FR003O.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_PHBN","PRIM_EVEF","PRIM_CKBX","PRIM_WEB.DataRequest"],dp:["PRIM_ALPH"]});