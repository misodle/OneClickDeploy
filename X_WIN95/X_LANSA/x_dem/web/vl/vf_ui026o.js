﻿LANSA.addComponent({id:"VF_UI026O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Quick Search",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:
{nm:"VF_ELURLU",ft:"N",ln:256,dc:0,lb:"URL (Unicode)",h1:"URL",h2:"(Unicode)",h3:"",de:"URL (Unicode)",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{PositionedatFormTop:{da:"rw"}},mt:{zInt_Initialize:{ps:{"SearchInstruction":{pt:"i"},"ParentTitleBar":{pt:"i"},"MediumOrSmallUsageContext":{pt:"i"}}},zInt_ResetImageLocation:{},zInt_SetImage:{},zInt_Terminate:{},zInt_StartSearch:{},zInt_EndSearch:{},zInt_Select:{ps:{"PanelLabel":{pt:"i"}}},zInt_ExecuteItem:{ps:{"Associatedvf_Fp202O":
{pt:"i"}}},zInt_AdjustPanelHeight:{},zInt_HandleSearch:{ps:{"SearchString":{pt:"i"}}},zInt_ShowBigHint:{ps:{"For":{pt:"i"}}},zInt_HideBigHint:{},zInt_ExtractSearchWords:{ps:{"FromString":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI026O",Fd);var C0=this.cR("MAINATTACHLAYOUT","PRIM_ATLM");var C1=this.cR("ATTACHCURRENTSEARCHTEXT","PRIM_ATLI");var C2=this.cR("VISIBLESEARCHSTRING","PRIM_EDIT");var C3=this.cR("ACTIONIMAGE","PRIM_IMAG");this.cD("SEARCHIMAGE");this.cD("CLEARIMAGE");var C6=this.cA("USYSTEM","VF_SY001O");
var C7=this.cA("USYSTEMCOMMON","VF_SY001X");var C8=this.cA("UFRAMEWORK","VF_FP001O");var C9=this.cF("SMALL_TOP",Fd.F1.Dc);var C10=this.cF("SMALL_LEFT",Fd.F1.Dc);var C11=this.cF("SMALL_WIDTH",Fd.F1.Dc);var C12=this.cF("SMALL_MAXIMUMHEIGHT",Fd.F1.Dc);var C13=this.cR("COLLECTPANELLABELS","PRIM_ACOL");this.cD("CURRENTPANELLABEL");var C15=this.cR("LASTSEARCHDETAILS","VF_SY104O");this.cD("USINGPARENTTITLEBAR");var C17=this.cR("RESULTSPANEL","PRIM_PANL");var C18=this.cR("RESULTSPOPOVER","VF_UI021O");var C19=this.cR("BIGHINT","PRIM_LABL");
var C20=this.cF("RESULTSPANELLOGICALHEIGHT",Fd.F1.Dc);var C21=this.cR("BORDERTOP","PRIM_VS","Style");var C22=this.cR("POINTSTO","PRIM_DC","UnicodeString");var C23=this.cR("SEARCHTIMER","PRIM_TIMR");var C24=this.cR("SETIMAGETIMER","PRIM_TIMR");var C25=this.cR("CURRENTSEARCHSTRING","PRIM_ALPH");var C26=this.cR("POSITIONEDATFORMTOP","PRIM_BOLN");var C27=this.cR("USINGMEDIUMORSMALLUSAGECONTEXT","PRIM_BOLN");C0.iC();C1.setManage(C2);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setDisplayPosition(1);
C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTop(0);C2.setHeight(24);C2.setWidth(150);C2.setAutoSelect(false);C2.iC();C3.setParent(this);C3.setDisplayPosition(2);C3.setTabPosition(2);C3.setHeight(16);C3.setWidth(16);C3.iC();if((C6!=null)&&(C6.iI()==false)){C6.iC();}if((C7!=null)&&(C7.iI()==false)){C7.iC();}if((C8!=null)&&(C8.iI()==false)){C8.iC();}C9.aD();C9.iC();C10.aD();C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();C13.setCollects("VF_UI027O");C13.iC();C15.iC();C17.setDisplayPosition(3);
C17.setVerticalScroll(true);C17.iC();C18.iC();C19.setParent(C17);C19.setDisplayPosition(1);C19.setTabPosition(1);C19.setTabStop(false);C19.setVisible(false);C19.iC();C20.aD();C20.iC();C21.setBorderTop(1);C21.iC();C22.iC();C23.setInterval(0);C23.iC();C24.setInterval(0);C24.iC();C25.iC();C26.iC();C27.iC();C2.aH("KEYPRESS",this,e3);C3.aH("CLICK",this,e2);C13.aH("CLICK",this,e4);C13.aH("MOUSEENTER",this,e5);C13.aH("MOUSELEAVE",this,e6);C23.aH("TICK",this,e7);C24.aH("TICK",this,e1);this.setDisplayPosition(1);
this.setLayoutManager(C0);this.setHeight(24);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(150);}});cO.mthZINT_INITIALIZE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",65);var P0=r.cP("SEARCHINSTRUCTION","PRIM_DC","UnicodeString");var P1=r.cPD("PARENTTITLEBAR");var P2=r.cP("MEDIUMORSMALLUSAGECONTEXT","PRIM_BOLN");P0.set(p0);P1=p1;P2.set(p2);r.ln=65;{r.ln=70;m.USINGMEDIUMORSMALLUSAGECONTEXT.set(P2.get());r.ln=72;this.setPOSITIONEDATFORMTOP(true);r.ln=74;m.RESULTSPANEL.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEFORMBACKGROUNDANDFONT());
r.ln=76;if(l.tB(P2.get())){r.ln=77;m.RESULTSPANEL.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getPOPUPMENU_FONTSTYLE());}r.ln=80;this.srUSINGPARENTTITLEBAR(P1);r.ln=82;m.POINTSTO.set(l.n.AsUnicodeString(8594));r.ln=84;m.VISIBLESEARCHSTRING.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getDEFAULTSEARCHTEXTSTYLE());m.VISIBLESEARCHSTRING.setPlaceholder(P0.get());r.ln=86;m.RESULTSPOPOVER.mthZINT_INITIALIZE(m.RESULTSPANEL);r.ln=88;m.BIGHINT.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getDEFAULTSEARCHHELPTEXT());
r.ln=90;m.BORDERTOP.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=92;m.BIGHINT.getStyles().mthADD(m.BORDERTOP);r.ln=94;this.srSEARCHIMAGE(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("SEARCH_FILLED"),"SMALL","T",false));r.ln=96;this.srCLEARIMAGE(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("CLOSE_FILLED"),"SMALL","T",false));r.ln=98;m.SETIMAGETIMER.setInterval(500);}r.ln=100;r.e();
};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SetImageTimer.Tick",103);r.ln=103;{r.ln=105;m.SETIMAGETIMER.setInterval(0);r.ln=107;this.mthZINT_SETIMAGE();}r.ln=109;r.e();};cO.mthZINT_RESETIMAGELOCATION=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ResetImageLocation",112);r.ln=112;{r.ln=114;m.SETIMAGETIMER.setInterval(10);}r.ln=116;r.e();};cO.mthZINT_SETIMAGE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SetImage",119);var C0=r.cF("IMAGESIZE",Fd.F1.Dc);var C1=r.cF("IMAGEBORDER",Fd.F1.Dc);
var C2=r.cF("IMAGERIGHTPADDING",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=119;{r.ln=125;C1.set(4);r.ln=126;C2.set(4);r.ln=128;C0.set(l.sub(m.VISIBLESEARCHSTRING.getHeight(),l.mul(2,C1.get())));r.ln=130;m.ACTIONIMAGE.setHeight(C0.get());m.ACTIONIMAGE.setWidth(C0.get());m.ACTIONIMAGE.setTop(C1.get());m.ACTIONIMAGE.setLeft(l.sub(m.VISIBLESEARCHSTRING.getWidth(),l.add(C0.get(),C2.get())));m.ACTIONIMAGE.setDisplayPosition(1);m.ACTIONIMAGE.setOpacity(50);m.ACTIONIMAGE.setImageSizing("BESTFIT");r.ln=132;if(l.s.eq(l.s.Trim(m.VISIBLESEARCHSTRING.getValue()),""))
{r.ln=133;m.ACTIONIMAGE.setImage(m.SEARCHIMAGE);}else{r.ln=135;m.ACTIONIMAGE.setImage(m.CLEARIMAGE);}}r.ln=138;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ActionImage.Click",141);r.ln=141;{r.ln=143;if((m.ACTIONIMAGE.getImage()===m.SEARCHIMAGE)){r.ln=145;this.mthZINT_STARTSEARCH();}else{r.ln=149;this.mthZINT_HIDEBIGHINT();r.ln=150;this.mthZINT_SELECT(null);r.ln=151;m.COLLECTPANELLABELS.mthREMOVEALL();r.ln=152;m.RESULTSPOPOVER.mthZINT_CLOSEPOPOVER();r.ln=153;m.VISIBLESEARCHSTRING.setValue("");
m.CURRENTSEARCHSTRING.setValue("");r.ln=154;m.VISIBLESEARCHSTRING.mthSETFOCUS();}r.ln=158;m.SETIMAGETIMER.setInterval(1);}r.ln=160;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",164);r.ln=164;{r.ln=166;m.SETIMAGETIMER.setInterval(0);r.ln=167;this.mthZINT_ENDSEARCH();r.ln=168;this.srCURRENTPANELLABEL(null);r.ln=169;m.RESULTSPOPOVER.mthZINT_TERMINATE();r.ln=170;m.COLLECTPANELLABELS.mthREMOVEALL();r.ln=171;m.LASTSEARCHDETAILS.mthZINT_TERMINATE();r.ln=172;this.srUSINGPARENTTITLEBAR(null);
}r.ln=174;r.e();};cO.mthZINT_STARTSEARCH=function(){var m=this.REF,r=l.mR(this,cO,"zInt_StartSearch",177);r.ln=177;{r.ln=179;m.SEARCHTIMER.setInterval(10);}r.ln=181;r.e();};cO.mthZINT_ENDSEARCH=function(){var m=this.REF,r=l.mR(this,cO,"zInt_EndSearch",184);r.ln=184;{r.ln=186;m.SEARCHTIMER.setInterval(0);}r.ln=188;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#VisibleSearchString.KeyPress",192);var P0=Ps.r("KEYCODE");var P1=Ps.r("HANDLED");var P2=Ps.r("CHAR");var C0=r.cF("SELECTCOLLECTIONITEM",Fd.F1.Dc);
var C1=r.cR("ADJUSTEDSEARCHSTRING","PRIM_ALPH");C0.iC();C1.iC();r.ln=192;{r.ln=197;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Keypress of ",P0.get()),u,u,true);r.ln=199;C1.set(l.s.Trim(m.VISIBLESEARCHSTRING.getValue()));r.ln=201;m.SETIMAGETIMER.setInterval(30);r.ln=203;if(l.s.eq(P0.get(),"ISCHAR")){r.ln=204;C1.set(l.cat(C1.get(),P2.get()));r.ln=205;m.VISIBLESEARCHSTRING.mthSETFOCUS();}r.ln=208;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=209;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Adjusted string =",C1.get()),u,u,true);
}r.ln=212;P1.set(false);r.ln=214;this.mthZINT_ENDSEARCH();r.ln=218;{var v1=P0.get();if(r.ln=220,l.s.eq(v1,"ENTER")){r.ln=222;if((m.CURRENTPANELLABEL!=null)){r.ln=223;this.mthZINT_EXECUTEITEM(m.CURRENTPANELLABEL.getASSOCIATEDVF_FP202O());r.ln=224;P1.set(true);r.e();return;}else{r.ln=229;if(l.tB(l.s.ne(C1.get(),""))){r.ln=230;this.mthZINT_STARTSEARCH();}}r.ln=235;if(l.n.gt(m.LASTSEARCHDETAILS.getUSEARCHWORDSORCOMMANDS().getItemCount(),0)){r.ln=236;this.mthZINT_EXECUTEITEM(null);r.e();return;}}else if(r.ln=240,l.s.eq(v1,"DOWNARROW"))
{r.ln=241;if((m.CURRENTPANELLABEL!=null)){r.ln=242;C0.set(l.add(m.CURRENTPANELLABEL.getCOLLECTIONITEM(),1));}else{r.ln=244;C0.set(1);}}else if(r.ln=247,l.s.eq(v1,"UPARROW")){r.ln=248;if((m.CURRENTPANELLABEL!=null)){r.ln=249;C0.set(l.sub(m.CURRENTPANELLABEL.getCOLLECTIONITEM(),1));r.ln=250;if(l.n.eq(C0.get(),0)){r.ln=251;this.mthZINT_SELECT(null);r.ln=252;P1.set(true);}}}else{r.ln=258;if(l.tB(l.and(l.s.ne(C1.get(),""),l.s.ne(C1.get(),m.CURRENTSEARCHSTRING.get())))){r.ln=259;this.mthZINT_STARTSEARCH();
}}r.ln=262;}r.ln=266;if(l.and(l.n.gt(C0.get(),0),l.n.le(C0.get(),m.COLLECTPANELLABELS.getItemCount()))){r.ln=267;this.mthZINT_SELECT(m.COLLECTPANELLABELS.get(C0.get()));r.ln=268;P1.set(true);}}r.ln=271;r.e();};function e4(VISUALLINE,Ps){var r=l.eR(this,cO,"#CollectPanelLabels<>.Click",274);r.ln=274;{r.ln=276;this.mthZINT_EXECUTEITEM(VISUALLINE.getASSOCIATEDVF_FP202O());}r.ln=278;r.e();};function e5(VISUALLINE,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectPanelLabels<>.MouseEnter",281);r.ln=281;{r.ln=283;
this.mthZINT_SHOWBIGHINT(l.cast(VISUALLINE.getASSOCIATEDVF_FP202O().getREFERENCEOBJECT(),"VF_AC001O"));r.ln=285;if((VISUALLINE!==m.CURRENTPANELLABEL)){r.ln=287;VISUALLINE.setThemeDrawStyle("LISTITEM");}}r.ln=292;r.e();};function e6(VISUALLINE,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectPanelLabels<>.MouseLeave",295);r.ln=295;{r.ln=297;if((VISUALLINE!==m.CURRENTPANELLABEL)){r.ln=298;VISUALLINE.setThemeDrawStyle("");}}r.ln=301;r.e();};cO.mthZINT_SELECT=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Select",304);
var P0=r.cPD("PANELLABEL");P0=p0;r.ln=304;{r.ln=307;this.mthZINT_HIDEBIGHINT();r.ln=309;if((m.CURRENTPANELLABEL!=null)){r.ln=310;m.CURRENTPANELLABEL.setThemeDrawStyle("");r.ln=311;this.srCURRENTPANELLABEL(null);}r.ln=314;if((P0!=null)){r.ln=315;this.srCURRENTPANELLABEL(P0);r.ln=316;m.CURRENTPANELLABEL.setThemeDrawStyle("DARKTITLE");r.ln=317;this.mthZINT_SHOWBIGHINT(l.cast(m.CURRENTPANELLABEL.getASSOCIATEDVF_FP202O().getREFERENCEOBJECT(),"VF_AC001O"));}}r.ln=320;r.e();};cO.mthZINT_EXECUTEITEM=function(p0)
{var m=this.REF,r=l.mR(this,cO,"zInt_ExecuteItem",324);var P0=r.cPD("ASSOCIATEDVF_FP202O");P0=p0;var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cR("EMPTYSTRING","PRIM_ALPH");C2.iC();r.ln=324;{r.ln=332;this.mthZINT_ENDSEARCH();r.ln=335;if((P0!=null)){r.ln=336;C1=r.sR("C1",l.cast(P0.getREFERENCEOBJECT(),"VF_AC001O"));}r.ln=340;this.mthZINT_SELECT(null);r.ln=341;m.COLLECTPANELLABELS.mthREMOVEALL();r.ln=342;m.RESULTSPOPOVER.mthZINT_CLOSEPOPOVER();r.ln=346;if((C1==null)){r.ln=347;m.LASTSEARCHDETAILS.setUUSEROBJECTTYPE("NONE");
}else{r.ln=349;m.LASTSEARCHDETAILS.setUUSEROBJECTTYPE(C1.getUUSEROBJECTTYPE());}r.ln=353;do{r.ln=356;if((C1==null)){r.ln=357;m.LASTSEARCHDETAILS.setUOBJECTTYPE("NONE");r.ln=358;break;}r.ln=362;if(l.Io(C1,"VF_FP001O")){r.ln=363;m.LASTSEARCHDETAILS.setUOBJECTTYPE("FRAMEWORK");r.ln=364;m.USYSTEM.ref.mthZINT_DISPLAYFRAMEWORKTAB();r.ln=365;break;}r.ln=369;if(l.Io(C1,"VF_FP002O")){r.ln=370;m.LASTSEARCHDETAILS.setUOBJECTTYPE("APPLICATION");r.ln=371;m.USYSTEM.ref.mthZINT_DISPLAYAPPLICATIONTAB(l.cast(C1,"VF_FP002O"),"VF_UI026O");
r.ln=372;break;}r.ln=376;if(l.Io(C1,"VF_FR003O")){r.ln=377;m.LASTSEARCHDETAILS.setUOBJECTTYPE("BUSINESSOBJECT");r.ln=378;m.USYSTEM.ref.mthZINT_SELECTBUSINESSOBJECTINSTANCE(l.cast(C1,"VF_FR003O"),"VF_UI026O",true);r.ln=379;break;}r.ln=383;if(l.Io(C1,"VF_FP010O")){r.ln=384;m.LASTSEARCHDETAILS.setUOBJECTTYPE("COMMAND");r.ln=385;l.cast(C1,"VF_FP010O").mthZINT_EXECUTECOMMANDHANDLER(null,null,C2);r.ln=386;break;}r.ln=389;}while(!(l.n.eq(1,1)))r.ln=393;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=394;
m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat("ExecuteItem uObjectType=",m.LASTSEARCHDETAILS.getUOBJECTTYPE()),", uUserObjectType="),m.LASTSEARCHDETAILS.getUUSEROBJECTTYPE()),u,u,true);}r.ln=397;m.LASTSEARCHDETAILS.setWAITUNTILSTARTING(50);r.ln=398;m.USYSTEM.ref.mthZINT_QUEUETRANSACTION(m.LASTSEARCHDETAILS);}r.ln=401;r.e();};cO.mthZINT_ADJUSTPANELHEIGHT=function(){var m=this.REF,r=l.mR(this,cO,"zInt_AdjustPanelHeight",405);r.ln=405;{r.ln=407;if(l.b.Not(m.USINGMEDIUMORSMALLUSAGECONTEXT.get()))
{r.ln=408;if(l.n.gt(m.RESULTSPANEL.getHeight(),l.sub(m.USYSTEM.ref.getMAINVLFPANEL().getHeight(),70))){r.ln=409;m.RESULTSPANEL.setHeight(l.sub(m.USYSTEM.ref.getMAINVLFPANEL().getHeight(),70));}}}r.ln=413;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SearchTimer.Tick",417);r.ln=417;{r.ln=419;this.mthZINT_ENDSEARCH();r.ln=421;this.mthZINT_HANDLESEARCH(m.VISIBLESEARCHSTRING.get());}r.ln=423;r.e();};cO.mthZINT_HANDLESEARCH=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_HandleSearch",426);
var P0=r.cP("SEARCHSTRING","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cF("CURRENTWORD",Fd.F2.Dc);var C1=r.cF("CURRENTWORDLENGTH",Fd.F1.Dc);var C2=r.cD("C2");var C3=r.cF("SEARCHLIMIT",Fd.F1.Dc);var C4=r.cF("INDEXCOUNT",Fd.F1.Dc);var C5=r.cF("USENEXTTOPPOSITION",Fd.F1.Dc);var C6=r.cF("TOTALWORDS",Fd.F1.Dc);var C7=r.cR("CAPTION","PRIM_DC","UnicodeString");var C8=r.cR("TRACKITEMSALREADYFOUND","PRIM_DCOL");C0.iC();C1.iC();C3.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.setCollects("PRIM_BOLN");C8.setKeyedBy("VF_FP202O");
C8.iC();r.ln=426;{r.ln=440;if(l.tB(m.USINGMEDIUMORSMALLUSAGECONTEXT.get())){r.ln=442;m.USINGPARENTTITLEBAR.mthZINT_GETSMALLSEARCHDIMENSIONS(m.SMALL_TOP,m.SMALL_LEFT,m.SMALL_WIDTH,m.SMALL_MAXIMUMHEIGHT);}r.ln=447;this.mthZINT_HIDEBIGHINT();r.ln=448;this.mthZINT_SELECT(null);r.ln=449;m.COLLECTPANELLABELS.mthREMOVEALL();r.ln=450;C3.set(m.USYSTEM.ref.getUCUSTOMUF_OSYSTM().getMAXIUMQUICKSEARCHSIZE());r.ln=453;m.RESULTSPOPOVER.mthZINT_CLOSEPOPOVER();r.ln=456;if(l.s.eq(l.s.Trim(P0.get()),"")){r.e();return;
}r.ln=460;m.CURRENTSEARCHSTRING.set(l.s.Trim(P0.get()));r.ln=463;this.mthZINT_EXTRACTSEARCHWORDS(P0.get());r.ln=467;C4.set(0);r.ln=468;C6.set(m.LASTSEARCHDETAILS.getUSEARCHWORDSORCOMMANDS().getItemCount());r.ln=470;{var l1=m.LASTSEARCHDETAILS.getUSEARCHWORDSORCOMMANDS().cI();while(l1.step()){var WORD=r.sR("WORD",l1.item());r.ln=472;C0.set(l.s.UpperCase(WORD.get()));r.ln=473;C1.set(l.s.CurChars(C0.get()));r.ln=475;if(l.n.lt(C1.get(),m.USYSTEM.ref.getUCUSTOMUF_OSYSTM().getMINIMUMQUICKSEARCHCHARACTERS()))
{continue;}r.ln=477;{var l2=m.USYSTEM.ref.getSEARCHWORDSCOLLECTIONS().cI();while(l2.step()){var MATCH=r.sR("MATCH",l2.item());var POTENTIALMATCHINGWORD=r.sR("POTENTIALMATCHINGWORD",l2.key());r.ln=479;if(l.eq(C0.get(),l.s.Substring(POTENTIALMATCHINGWORD.get(),1,C1.get()))){r.ln=481;{var l3=MATCH.getALLSAMEWORDCOLLECTION().cI();while(l3.step()){var VF_FP202OITEM=r.sR("VF_FP202OITEM",l3.item());r.ln=482;if((VF_FP202OITEM.getCURRENTLYAVAILABLE()&&(C8.get(VF_FP202OITEM)==null))){r.ln=485;if(l.n.gt(C6.get(),1))
{r.ln=486;if(l.Io(VF_FP202OITEM.getREFERENCEOBJECT(),"VF_FP010O")){continue;}}r.ln=491;C4.set(l.add(C4.get(),1));r.ln=493;C2=r.sR("C2",l.cC("VF_UI027O"));r.ln=495;m.COLLECTPANELLABELS.mthINSERT(C2);r.ln=497;C7.set(VF_FP202OITEM.getVISIBLESTRING());r.ln=499;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add(l.cat(l.add(l.cat(l.add(l.cat(l.add("CurrentWord=",C0.get()),",PotentialMatchingWord="),POTENTIALMATCHINGWORD.get()),",Caption="),C7.get()),",FirstUsedExactCaseWord="),MATCH.getFIRSTUSEDEXACTCASEWORD()),u,u,true);
r.ln=501;if(l.and(l.n.eq(C6.get(),1),l.nIo(VF_FP202OITEM.getREFERENCEOBJECT(),"VF_FP010O"))){r.ln=502;if(l.ne(l.s.UpperCase(C7.get()),l.s.UpperCase(MATCH.getFIRSTUSEDEXACTCASEWORD()))){r.ln=504;C7.set(l.add(l.cat(l.add(l.cat(MATCH.getFIRSTUSEDEXACTCASEWORD()," "),m.POINTSTO.get())," "),C7.get()));}}r.ln=509;C2.setCaption(C7.get());C2.setParent(m.RESULTSPANEL);C2.setLeft(4);C2.setHeight(22);C2.setTop(C5.get());C2.setWidth(l.add(m.UFRAMEWORK.ref.getUMRUWIDTH(),55));C2.setASSOCIATEDVF_FP202O(VF_FP202OITEM);
C2.setCOLLECTIONITEM(C4.get());r.ln=511;if(l.tB(m.USINGMEDIUMORSMALLUSAGECONTEXT.get())){r.ln=513;C2.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getPOPUPMENU_ITEMHEIGHT());C2.setLeft(0);C2.setWidth(m.SMALL_WIDTH.get());C2.setMarginLeft(2);C2.setEllipses("END");}r.ln=518;C5.set(l.add(C5.get(),C2.getHeight()));r.ln=519;C8.set(VF_FP202OITEM,l.cC("PRIM_BOLN"));r.ln=521;if(l.n.ge(m.COLLECTPANELLABELS.getItemCount(),C3.get())){break;}}r.ln=524;}l3.end();r.dR("VF_FP202OITEM");}}r.ln=528;if(l.n.ge(m.COLLECTPANELLABELS.getItemCount(),C3.get()))
{break;}r.ln=530;}l2.end();r.dR("MATCH");r.dR("POTENTIALMATCHINGWORD");}r.ln=532;if(l.n.ge(m.COLLECTPANELLABELS.getItemCount(),C3.get())){break;}r.ln=534;}l1.end();r.dR("WORD");}r.ln=538;if(l.n.gt(m.COLLECTPANELLABELS.getItemCount(),0)){r.ln=540;if(l.tB(m.USINGMEDIUMORSMALLUSAGECONTEXT.get())){r.ln=542;m.RESULTSPANELLOGICALHEIGHT.set(l.add(C5.get(),4));r.ln=543;if(l.n.gt(m.RESULTSPANELLOGICALHEIGHT.get(),m.SMALL_MAXIMUMHEIGHT.get())){r.ln=544;m.RESULTSPANELLOGICALHEIGHT.set(m.SMALL_MAXIMUMHEIGHT.get());
}r.ln=546;m.RESULTSPANEL.setWidth(m.SMALL_WIDTH.get());m.RESULTSPANEL.setHeight(m.RESULTSPANELLOGICALHEIGHT.get());}else{r.ln=550;m.RESULTSPANEL.setWidth(l.add(m.UFRAMEWORK.ref.getUMRUWIDTH(),64));r.ln=551;m.RESULTSPANEL.setHeight(l.add(C5.get(),4));r.ln=552;m.RESULTSPANELLOGICALHEIGHT.set(m.RESULTSPANEL.getHeight());r.ln=554;this.mthZINT_ADJUSTPANELHEIGHT();}r.ln=559;if(l.tB(m.USINGMEDIUMORSMALLUSAGECONTEXT.get())){r.ln=561;m.RESULTSPOPOVER.mthZINT_SHOWPOPOVER(m.VISIBLESEARCHSTRING,u,u,u,"",false,u,u,m.SMALL_LEFT.get(),m.SMALL_TOP.get());
}else{r.ln=565;if(this.getPOSITIONEDATFORMTOP()){r.ln=567;m.RESULTSPOPOVER.mthZINT_SHOWPOPOVER(m.VISIBLESEARCHSTRING,u,u,u,"",false,u,u,u,u);}else{r.ln=570;m.RESULTSPOPOVER.mthZINT_SHOWPOPOVER(u,l.add(8,51),u,u,"",false,u,m.VISIBLESEARCHSTRING,u,u);}}r.ln=576;this.mthZINT_SELECT(m.COLLECTPANELLABELS.get(1));}r.ln=581;C8.mthREMOVEALL();}r.ln=583;r.e();};cO.mthZINT_SHOWBIGHINT=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ShowBigHint",586);var P0=r.cPD("FOR");P0=p0;r.ln=586;{r.ln=589;if(l.tB(((P0==null)||m.USINGMEDIUMORSMALLUSAGECONTEXT.get())))
{r.ln=590;this.mthZINT_HIDEBIGHINT();r.e();return;}r.ln=595;if(l.Io(P0,"VF_FP010O")){r.ln=596;P0=r.sR("P0",l.cast(P0,"VF_FP010O").getVF_FP009REFERENCE());}r.ln=599;if(((P0==null)||l.s.eq(P0.getUHINT(),""))){r.ln=600;this.mthZINT_HIDEBIGHINT();r.e();return;}r.ln=604;m.BIGHINT.setCaption(P0.getUHINT());r.ln=606;if(l.b.eq(m.BIGHINT.getVisible(),false)){r.ln=608;m.BIGHINT.setTop(l.add(m.RESULTSPANELLOGICALHEIGHT.get(),4));m.BIGHINT.setLeft(4);m.BIGHINT.setWidth(l.sub(m.RESULTSPANEL.getWidth(),10));m.BIGHINT.setHeight(43);
m.BIGHINT.setAlignment("LEFT");m.BIGHINT.setVerticalAlignment("TOP");m.BIGHINT.setWordWrap(true);r.ln=610;m.RESULTSPANEL.setHeight(l.add(m.RESULTSPANELLOGICALHEIGHT.get(),51));r.ln=612;this.mthZINT_ADJUSTPANELHEIGHT();r.ln=614;m.BIGHINT.setVisible(true);}}r.ln=619;r.e();};cO.mthZINT_HIDEBIGHINT=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HideBigHint",622);r.ln=622;{r.ln=624;if(l.b.eq(m.BIGHINT.getVisible(),true)){r.ln=626;m.RESULTSPANEL.setHeight(m.RESULTSPANELLOGICALHEIGHT.get());r.ln=628;this.mthZINT_ADJUSTPANELHEIGHT();
r.ln=630;m.BIGHINT.setVisible(false);}}r.ln=634;r.e();};cO.mthZINT_EXTRACTSEARCHWORDS=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ExtractSearchWords",638);var P0=r.cP("FROMSTRING","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cF("TOTALCHARS",Fd.F1.Dc);var C1=r.cR("CHARAT","PRIM_DC","UnicodeString");var C2=r.cF("CURRENTCHARINDEX",Fd.F1.Dc);var C3=r.cD("C3");C0.iC();C1.iC();C2.iC();r.ln=638;{r.ln=646;m.LASTSEARCHDETAILS.mthZINT_TERMINATE();r.ln=648;P0.set(l.s.Trim(l.s.UpperCase(P0.get())));r.ln=650;
C0.set(l.s.CurChars(P0.get()));r.ln=652;for(var i1=1,s1=1,t1=l.tI(C0.get());C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=654;C1.set(l.s.Substring(P0.get(),C2.get(),1));r.ln=656;if(l.tB(l.s.eq(C1.get()," "))){r.ln=658;C3=r.sR("C3",null);}else{r.ln=662;if(C3==null){r.ln=663;C3=r.sR("C3",l.cAs("PRIM_DC","UnicodeString"));r.ln=664;m.LASTSEARCHDETAILS.getUSEARCHWORDSORCOMMANDS().mthINSERT(C3);r.ln=665;C3.set(C1.get());}else{r.ln=667;C3.set(l.add(C3.get(),C1.get()));}}}}r.ln=674;r.e();
};cO.getPOSITIONEDATFORMTOP=function(){return this.REF.POSITIONEDATFORMTOP.get();};cO.setPOSITIONEDATFORMTOP=function(v){this.REF.POSITIONEDATFORMTOP.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELURLU"});}cO.srSEARCHIMAGE=function(rn){this.sR("SEARCHIMAGE",rn);};cO.srCLEARIMAGE=function(rn){this.sR("CLEARIMAGE",rn);};cO.srCURRENTPANELLABEL=function(rn)
{this.sR("CURRENTPANELLABEL",rn);};cO.srUSINGPARENTTITLEBAR=function(rn){this.sR("USINGPARENTTITLEBAR",rn);};},{rc:["VF_SY001O","VF_SY001X","VF_FP001O","VF_SY104O","VF_UI021O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_EDIT","PRIM_IMAG","PRIM_FLD","PRIM_ACOL","PRIM_LABL","PRIM_VS.Style","PRIM_DC.UnicodeString","PRIM_TIMR","PRIM_ALPH","PRIM_BOLN"],dc:["VF_UI027O","VF_UI022O","VF_FP010O","VF_AC001O"],dp:["PRIM_BMP","PRIM_ALPH","PRIM_DC.UnicodeString","PRIM_DCOL"]});