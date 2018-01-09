﻿LANSA.addComponent({id:"XAAPART06",nm:"xAssessorMap",ot:"rp",tp:"Reusable Part",de:"AssessorMap",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xaaimg16.png");var rc2=l.cB("xaaimg13.png");var Fd={F1:{nm:"XAAFLD04",an:"xAssessorLongitude",ft:"S",ln:18,dc:15,lb:"Longitude",h1:"Longitude",h2:"",h3:"",de:"Longitude",dv:0,ia:["FE","RB"]},F2:{nm:"XAAFLD05",an:"xAssessorLatitude",ft:"S",ln:18,dc:15,lb:"Latitude",h1:"Latitude",
h2:"",h3:"",de:"Assessor Latitude",dv:0,ia:["FE","RB"]},F3:{nm:"XAAFLD13",an:"xLongitude",ft:"S",ln:12,dc:9,ec:"1",lb:"Longitude",h1:"Longitude",h2:"",h3:"",de:"Longitude",dv:0,ia:["FE","RB"]},F4:{nm:"XAAFLD12",an:"xLatitude",ft:"S",ln:12,dc:9,ec:"1",lb:"Latitude",h1:"Latitude",h2:"",h3:"",de:"Latitude",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,mt:{OpenToCurrentLocation:{},OpenToSpecifiedLocation:{},LocationSet:{}},co:function(){cO.aN.call(this);this.aF("XAAPART06",Fd);var C0=this.cR("SHROUDSTYLE","PRIM_VS","Style");
var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("STYLE1","PRIM_VS","Style");var C3=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C4=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C5=this.cR("LAYOUT1","PRIM_TBLO");var C6=this.cR("COLUMN1","PRIM_TBLO","Column");var C7=this.cR("ROW1","PRIM_TBLO","Row");var C8=this.cR("ROW2","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C12=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C14=this.cR("MARKER","PRIM_IMAG");var C15=this.cR("SETLOCATION","PRIM_PHBN");var C16=this.cR("EXITCANCEL","PRIM_PHBN");var C17=this.cR("LABELCENTER","PRIM_LABL");var C18=this.cR("MAP","XAADEV04");var C19=this.cA("CONTROL","XAAPART02");var C20=this.cA("DATA","XAAPART10");var C21=this.cF("CENTERLONGITUDE",Fd.F1.Dc);var C22=this.cF("CENTERLATITUDE",Fd.F2.Dc);C0.setBackgroundBrush(C1);C0.iC();C1.setColor("0:0:0");
C1.setOpacity(75);C1.iC();C2.setForegroundBrush(C4);C2.setBackgroundBrush(C3);C2.iC();C3.setColor("THEME800");C3.iC();C4.setColor("THEME50");C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setDisplayPosition(2);C8.setParent(C5);C8.setHeight(85);C8.setUnits("PIXELS");C8.iC();C9.setColumn(C6);C9.setManage(C15);C9.setParent(C5);C9.setRow(C8);C9.setSizing("NONE");C9.iC();C10.setAlignment("TOPRIGHT");C10.setColumn(C6);C10.setManage(C16);
C10.setParent(C5);C10.setRow(C7);C10.setSizing("NONE");C10.setMarginRight(12);C10.setMarginTop(12);C10.iC();C11.setColumn(C6);C11.setManage(C14);C11.setParent(C5);C11.setRow(C7);C11.setSizing("NONE");C11.iC();C12.setAlignment("BOTTOMCENTER");C12.setColumn(C6);C12.setManage(C17);C12.setParent(C5);C12.setRow(C7);C12.setSizing("CONTENTWIDTHANDHEIGHT");C12.setMarginBottom(10);C12.iC();C13.setColumn(C6);C13.setManage(C18);C13.setParent(C5);C13.setRow(C7);C13.iC();C14.setTabPosition(3);C14.setTabStop(false);
C14.setTop(286);C14.setImage(rc1);C14.setHeight(19);C14.setWidth(21);C14.setLeft(198);C14.setDisplayPosition(2);C14.setParent(this);C14.iC();C15.setDisplayPosition(4);C15.setLeft(176);C15.setTabPosition(2);C15.setTop(600);C15.setThemeDrawStyle("KeyPad");C15.setHeight(65);C15.setWidth(65);C15.setImage(rc1);C15.setImageHeight(50);C15.setParent(this);C15.iC();C16.setDisplayPosition(3);C16.setLeft(375);C16.setTabPosition(1);C16.setThemeDrawStyle("KeyPad");C16.setHeight(30);C16.setWidth(30);C16.setImage(rc2);
C16.setImageHeight(25);C16.setParent(this);C16.setTop(12);C16.iC();C17.setDisplayPosition(1);C17.setEllipses("WORD");C17.setHeight(10);C17.setLeft(203);C17.setParent(this);C17.setTabPosition(4);C17.setTabStop(false);C17.setTop(570);C17.setVerticalAlignment("CENTER");C17.setWidth(10);C17.setAlignment("CENTER");C17.setWordWrap(false);C17.setStyle(C2);C17.setMarginBottom(3);C17.setMarginLeft(5);C17.setMarginRight(5);C17.setMarginTop(3);C17.iC();C18.setDisplayPosition(5);C18.setParent(this);C18.setTabPosition(5);
C18.setTabStop(false);C18.setHeight(590);C18.setWidth(417);C18.iC();if((C19!=null)&&(C19.iI()==false)){C19.iC();}if((C20!=null)&&(C20.iI()==false)){C20.iC();}C21.aD();C21.iC();C22.aD();C22.iC();C15.aH("CLICK",this,e1);C16.aH("CLICK",this,e2);C18.aH("LOCATIONCHANGED",this,e3);this.setCaption("Caption");this.setHeight(675);this.setThemeDrawStyle("Popup");this.setWidth(417);this.setAutoClose(false);this.setLeft(0);this.setTop(0);this.setShroudStyle(C0);this.setLayoutManager(C5);}});function e1(sender,Ps)
{var r=l.eR(this,cO,"#SetLocation.Click",41);r.ln=41;{r.ln=43;this.mthLOCATIONSET();}r.ln=45;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ExitCancel.Click",47);r.ln=47;{r.ln=49;this.mthLOCATIONSET();}r.ln=51;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Map.LocationChanged",53);var P0=Ps.r("LONGITUDE");var P1=Ps.r("LATITUDE");r.ln=53;{r.ln=55;m.CENTERLONGITUDE.set(P0.get());r.ln=56;m.CENTERLATITUDE.set(P1.get());r.ln=58;m.LABELCENTER.set(l.cat(l.cat(l.cat(l.n.AsString(m.CENTERLATITUDE.get()),"N "),l.n.AsString(m.CENTERLONGITUDE.get())),"W"));
}r.ln=60;r.e();};cO.mthOPENTOCURRENTLOCATION=function(){var m=this.REF,r=l.mR(this,cO,"OpenToCurrentLocation",66);r.ln=66;{r.ln=68;m.MAP.mthSHOWCURRENTLOCATION();}r.ln=70;r.e();};cO.mthOPENTOSPECIFIEDLOCATION=function(){var m=this.REF,r=l.mR(this,cO,"OpenToSpecifiedLocation",72);r.ln=72;{r.ln=74;m.MAP.mthSHOWLOCATION(m.DATA.ref.getLATITUDE(),m.DATA.ref.getLONGITUDE());}r.ln=76;r.e();};cO.mthLOCATIONSET=function(){var m=this.REF,r=l.mR(this,cO,"LocationSet",78);r.ln=78;{r.ln=80;m.DATA.ref.setLONGITUDE(m.CENTERLONGITUDE.get());
r.ln=81;m.DATA.ref.setLATITUDE(m.CENTERLATITUDE.get());r.ln=83;m.CONTROL.ref.mthCOORDINATESRECIEVED();r.ln=85;this.mthCLOSEPOPUP();}r.ln=87;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XAAFLD04"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XAAFLD05"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XAAFLD13"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XAAFLD12"});
}},{rc:["XAADEV04","XAAPART02","XAAPART10"],rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_PHBN","PRIM_LABL","PRIM_FLD"]});