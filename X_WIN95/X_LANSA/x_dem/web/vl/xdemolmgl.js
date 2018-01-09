﻿LANSA.addComponent({id:"XDEMOLMGL",nm:"xDemoLANSAMobileGeolocation",ot:"wp",tp:"Web Page",de:"Geolocation",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOLATI",an:"xDemoLatitude",ft:"P",ln:12,dc:9,ec:"1",lb:"Latitude",h1:"Latitude",h2:"",h3:"",de:"Latitude",dv:0,ia:["ASQN"]},F2:{nm:"XDEMOLONG",an:"xDemoLongitude",ft:"P",ln:12,dc:9,ec:"1",lb:"Longitude",h1:"Longitude",h2:"",h3:"",de:"Longitude",dv:0,ia:["ASQN"]}};
var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOLMGL",Fd);var C0=this.cR("GEOLOCATIONCONTROL","XDEMOGEO");var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("COLUMN3","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("ROW4","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C16=this.cR("GETCURRENTLOCATION","PRIM_PHBN");var C17=this.cF("XDEMOLATITUDE",Fd.F1.VISUALEDIT);var C18=this.cF("XDEMOLONGITUDE",Fd.F2.VISUALEDIT);var C19=this.cR("LABEL1","PRIM_LABL");var C20=this.cR("LABEL2","PRIM_LABL");
C0.setParent(this);C0.setTabStop(false);C0.setHeight(398);C0.setWidth(349);C0.setLeft(10);C0.setTop(10);C0.iC();C1.iC();C2.setDisplayPosition(2);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.setUnits("PIXELS");C3.setWidth(10);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setUnits("PIXELS");C4.setWidth(10);C4.iC();C5.setDisplayPosition(2);C5.setParent(C1);C5.iC();C6.setDisplayPosition(3);C6.setParent(C1);C6.setHeight(183);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(1);
C7.setParent(C1);C7.setUnits("PIXELS");C7.setHeight(10);C7.iC();C8.setDisplayPosition(4);C8.setParent(C1);C8.setUnits("PIXELS");C8.setHeight(10);C8.iC();C9.setColumn(C2);C9.setParent(C1);C9.setRow(C5);C9.iC();C10.setAlignment("TOPCENTER");C10.setColumn(C2);C10.setManage(C16);C10.setParent(C1);C10.setRow(C6);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setMarginTop(10);C10.iC();C11.setColumn(C2);C11.setFlow("DOWN");C11.setManage(C17);C11.setParent(C1);C11.setRow(C6);C11.setSizing("FITTOWIDTH");
C11.setAlignment("TOPCENTER");C11.iC();C12.setColumn(C2);C12.setFlow("DOWN");C12.setManage(C18);C12.setParent(C1);C12.setRow(C6);C12.setSizing("FITTOWIDTH");C12.setAlignment("TOPCENTER");C12.iC();C13.setColumn(C2);C13.setManage(C0);C13.setParent(C1);C13.setRow(C5);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C2);C14.setManage(C19);C14.setParent(C1);C14.setRow(C6);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");C14.setMarginTop(4);C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C2);C15.setManage(C20);
C15.setParent(C1);C15.setRow(C6);C15.setSizing("FITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(5);C15.iC();C16.setCaption("Get My Location");C16.setDisplayPosition(2);C16.setParent(this);C16.setTabPosition(2);C16.setTop(418);C16.setWidth(349);C16.setHeight(39);C16.iC();C17.setDisplayPosition(4);C17.setParent(this);C17.setTabPosition(3);C17.setTop(486);C17.setWidth(349);C17.setPlaceholder("Enter Latitude here");C17.setLabelPosition("NONE");C17.setMarginLeft(0);C17.setHeight(30);C17.setLeft(10);
C17.aD();C17.iC();C18.setDisplayPosition(6);C18.setParent(this);C18.setTabPosition(4);C18.setTop(546);C18.setWidth(349);C18.setPlaceholder("Enter Longitude");C18.setLabelPosition("NONE");C18.setMarginLeft(0);C18.setHeight(30);C18.setLeft(10);C18.aD();C18.iC();C19.setCaption("Latitude:");C19.setDisplayPosition(3);C19.setEllipses("WORD");C19.setHeight(25);C19.setParent(this);C19.setTabPosition(5);C19.setTabStop(false);C19.setTop(461);C19.setVerticalAlignment("CENTER");C19.setWidth(349);C19.setThemeDrawStyle("Heading3");
C19.iC();C20.setCaption("Longitude:");C20.setDisplayPosition(5);C20.setEllipses("WORD");C20.setHeight(25);C20.setParent(this);C20.setTabPosition(6);C20.setTabStop(false);C20.setTop(521);C20.setVerticalAlignment("CENTER");C20.setWidth(349);C20.setThemeDrawStyle("Heading3");C20.iC();C0.aH("LOCATIONCHANGED",this,e1);C0.aH("FAILED",this,e5);C16.aH("CLICK",this,e2);C17.aH("CHANGED",this,e3);C18.aH("CHANGED",this,e4);this.setWidth(369);this.setHeight(601);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOLMTH"));
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#GeolocationControl.LocationChanged",34);var P0=Ps.r("LATITUDE");var P1=Ps.r("LONGITUDE");r.ln=34;{r.ln=36;m.XDEMOLATITUDE.set(P0.get());r.ln=38;m.XDEMOLONGITUDE.set(P1.get());}r.ln=40;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#GetCurrentLocation.Click",42);r.ln=42;{r.ln=44;m.GEOLOCATIONCONTROL.mthGETCURRENTLOCATION();}r.ln=46;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xDemoLatitude.Changed",48);r.ln=48;
{r.ln=50;m.GEOLOCATIONCONTROL.mthSETLOCATION(m.XDEMOLATITUDE.get(),m.XDEMOLONGITUDE.get());}r.ln=52;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xDemoLongitude.Changed",54);r.ln=54;{r.ln=56;m.GEOLOCATIONCONTROL.mthSETLOCATION(m.XDEMOLATITUDE.get(),m.XDEMOLONGITUDE.get());}r.ln=58;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#GeolocationControl.Failed",60);r.ln=60;{r.ln=62;l.WEB().mthALERT("Unable to access your current location.");}r.ln=64;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOLATI"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(366);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOLATI",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOLONG"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);
this.setWidth(337);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOLONG",cn:"VisualEdit"});}},{rc:["XDEMOGEO","XDEMOLMTH"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PHBN","PRIM_EVEF","PRIM_LABL","PRIM_FLD"]});