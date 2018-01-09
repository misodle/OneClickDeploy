﻿LANSA.addComponent({id:"VF_UI030O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Center Pane Manager",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec("2.32"),c2=l.cDec("2.77");var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{MainCenterPane:{da:"r"},MainCenterPaneAttachmentItem:{da:"r"}},mt:{zInt_Terminate:{},zInt_Initialize:{},zInt_LoadSlider:{ps:{"VLComponentName":{pt:"i"},"Caption":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI030O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cA("UFRAMEWORK","VF_FP001O");var C3=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C4=this.cR("ATTACHITEM1","PRIM_ATLI");
var C5=this.cR("MAIN_OWNER_PANEL","PRIM_PANL");var C6=this.cR("MAINTABLELAYOUT","PRIM_TBLO");var C7=this.cR("TOPROW","PRIM_TBLO","Row");var C8=this.cR("TOPHORIZONTALDIVIDER","PRIM_TBLO","RowDivider");var C9=this.cR("MIDDLEROW","PRIM_TBLO","Row");var C10=this.cR("BOTTOMHORIZONTALDIVIDER","PRIM_TBLO","RowDivider");var C11=this.cR("BOTTOMROW","PRIM_TBLO","Row");var C12=this.cR("LEFTCOLUMN","PRIM_TBLO","Column");var C13=this.cR("LEFTVERTICALDIVIDER","PRIM_TBLO","ColumnDivider");var C14=this.cR("MIDDLECOLUMN","PRIM_TBLO","Column");
var C15=this.cR("RIGHTVERTICALDIVIDER","PRIM_TBLO","ColumnDivider");var C16=this.cR("RIGHTCOLUMN","PRIM_TBLO","Column");var C17=this.cR("MAIN_TOP_PANE","PRIM_PANL");var C18=this.cR("MAIN_CENTER_PANE","PRIM_PANL");var C19=this.cR("MAIN_CENTER_PANE_ATTACHMENTMANAGER","PRIM_ATLM");var C20=this.cR("MAIN_CENTER_PANE_ATTACH_MENUTOP","PRIM_ATLI");var C21=this.cR("MAIN_CENTER_PANE_ATTACH_MENULEFT","PRIM_ATLI");var C22=this.cR("MAIN_CENTER_PANE_ATTACH_MENURIGHT","PRIM_ATLI");var C23=this.cR("MAIN_CENTER_PANE_ATTACH_MENUBOTTOM","PRIM_ATLI");
var C24=this.cR("MAIN_CENTER_PANE_ATTACH_VF_UI002CONTAINER","PRIM_ATLI");var C25=this.cR("MAIN_CENTER_PANE_TOP_MENU","PRIM_PANL");var C26=this.cR("MAIN_CENTER_PANE_LEFT_MENU","PRIM_PANL");var C27=this.cR("MAIN_CENTER_PANE_BOTTOM_MENU","PRIM_PANL");var C28=this.cR("MAIN_CENTER_PANE_RIGHT_MENU","PRIM_PANL");var C29=this.cR("MAIN_CENTER_PANE_VF_UI002CONTAINER","PRIM_PANL");var C30=this.cR("MAIN_CENTER_PANE_VF_UI002CONTAINER_MANAGER","PRIM_ATLM");var C31=this.cR("MAIN_CENTER_PANE_VF_UI002CONTAINERATTACHMENTITEM","PRIM_ATLI");
var C32=this.cR("MAIN_BOTTOM_PANE","PRIM_PANL");var C33=this.cR("MAIN_LEFT_PANE","PRIM_PANL");var C34=this.cR("MAIN_RIGHT_PANE","PRIM_PANL");var C35=this.cR("MAIN_TOP_PANE_ITEM","PRIM_TBLO","Item");var C36=this.cR("MAIN_BOTTOM_PANE_ITEM","PRIM_TBLO","Item");var C37=this.cR("MAIN_LEFT_PANE_ITEM","PRIM_TBLO","Item");var C38=this.cR("MAIN_RIGHT_PANE_ITEM","PRIM_TBLO","Item");var C39=this.cR("MAIN_CENTER_PANE_ITEM","PRIM_TBLO","Item");var C40=this.cR("LEFTSLIDER","VF_UI006O");var C41=this.cR("RIGHTSLIDER","VF_UI006O");
var C42=this.cR("BOTTOMSLIDER","VF_UI006O");var C43=this.cR("TOPSLIDER","VF_UI006O");var C44=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C45=this.cR("ATTACHITEM7","PRIM_ATLI");var C46=this.cR("ATTACHITEMDOCKRIGHT","PRIM_ATLI");var C47=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C48=this.cR("ATTACHITEM8","PRIM_ATLI");var C49=this.cR("ATTACHITEMDOCKLEFT","PRIM_ATLI");var C50=this.cR("ATTACHLAYOUT4","PRIM_ATLM");var C51=this.cR("ATTACHITEM9","PRIM_ATLI");var C52=this.cR("ATTACHITEMDOCKBOTTOM","PRIM_ATLI");
var C53=this.cR("ATTACHLAYOUT5","PRIM_ATLM");var C54=this.cR("ATTACHITEM10","PRIM_ATLI");var C55=this.cR("ATTACHITEMDOCKTOP","PRIM_ATLI");this.cD("LEFTSLIDEROCCUPANT");this.cD("RIGHTSLIDEROCCUPANT");this.cD("TOPSLIDEROCCUPANT");this.cD("BOTTOMSLIDEROCCUPANT");var C60=this.cR("SETUPSIDEBARMENUTIMER","PRIM_TIMR");this.cD("SIDEBARMENU");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();C4.setManage(C5);C4.setParent(C3);
C4.setAttachment("CENTER");C4.iC();C5.setParent(this);C5.setDisplayPosition(1);C5.setTabPosition(1);C5.setHeight(700);C5.setLeft(0);C5.setTop(0);C5.setWidth(700);C5.setLayoutManager(C6);C5.iC();C6.setDividerStyle("GAP");C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setHeight(10);C7.setUnits("PIXELS");C7.iC();C8.setParent(C6);C8.setDisplayPosition(2);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setHeight(c1);C9.iC();C10.setParent(C6);C10.setDisplayPosition(4);C10.iC();C11.setDisplayPosition(5);
C11.setParent(C6);C11.setHeight(10);C11.setUnits("PIXELS");C11.iC();C12.setDisplayPosition(1);C12.setParent(C6);C12.setWidth(10);C12.setUnits("PIXELS");C12.iC();C13.setParent(C6);C13.setDisplayPosition(2);C13.iC();C14.setDisplayPosition(3);C14.setParent(C6);C14.setWidth(c2);C14.iC();C15.setParent(C6);C15.setDisplayPosition(4);C15.iC();C16.setDisplayPosition(5);C16.setParent(C6);C16.setWidth(10);C16.setUnits("PIXELS");C16.iC();C17.setParent(C5);C17.setDisplayPosition(3);C17.setTabPosition(3);C17.setLeft(0);
C17.setTop(0);C17.setHeight(10);C17.setLayoutManager(C53);C17.setWidth(700);C17.iC();C18.setParent(C5);C18.setHeight(678);C18.setTop(11);C18.setWidth(678);C18.setLeft(11);C18.setDisplayPosition(2);C18.setTabPosition(2);C18.setLayoutManager(C19);C18.iC();C19.iC();C20.setParent(C19);C20.setAttachment("TOP");C20.setManage(C25);C20.iC();C21.setParent(C19);C21.setAttachment("LEFT");C21.setManage(C26);C21.iC();C22.setParent(C19);C22.setAttachment("RIGHT");C22.setManage(C28);C22.iC();C23.setParent(C19);
C23.setAttachment("BOTTOM");C23.setManage(C27);C23.iC();C24.setParent(C19);C24.setAttachment("CENTER");C24.setManage(C29);C24.iC();C25.setParent(C18);C25.setDisplayPosition(1);C25.setTabPosition(1);C25.setLeft(0);C25.setTop(0);C25.setWidth(678);C25.setVisible(false);C25.iC();C26.setParent(C18);C26.setDisplayPosition(5);C26.setTabPosition(2);C26.setHeight(628);C26.setLeft(0);C26.setTop(0);C26.setVisible(false);C26.iC();C27.setParent(C18);C27.setDisplayPosition(4);C27.setTabPosition(3);C27.setLeft(0);
C27.setTop(628);C27.setWidth(678);C27.setVisible(false);C27.iC();C28.setParent(C18);C28.setDisplayPosition(3);C28.setTabPosition(4);C28.setHeight(678);C28.setLeft(628);C28.setTop(0);C28.setVisible(false);C28.iC();C29.setParent(C18);C29.setDisplayPosition(2);C29.setTabPosition(5);C29.setLayoutManager(C30);C29.setHeight(678);C29.setLeft(0);C29.setTop(0);C29.setWidth(678);C29.iC();C30.iC();C31.setParent(C30);C31.setAttachment("CENTER");C31.iC();C32.setParent(C5);C32.setDisplayPosition(5);C32.setTabPosition(5);
C32.setLeft(0);C32.setTop(690);C32.setHeight(10);C32.setLayoutManager(C50);C32.setWidth(700);C32.iC();C33.setParent(C5);C33.setDisplayPosition(4);C33.setTabPosition(4);C33.setHeight(678);C33.setLeft(0);C33.setTop(11);C33.setWidth(10);C33.setLayoutManager(C47);C33.iC();C34.setParent(C5);C34.setDisplayPosition(1);C34.setTabPosition(1);C34.setHeight(678);C34.setTop(11);C34.setWidth(10);C34.setLayoutManager(C44);C34.setLeft(690);C34.iC();C35.setColumn(C12);C35.setManage(C17);C35.setParent(C6);C35.setRow(C7);
C35.setColumnSpan(5);C35.iC();C36.setColumn(C12);C36.setManage(C32);C36.setParent(C6);C36.setRow(C11);C36.setColumnSpan(5);C36.iC();C37.setColumn(C12);C37.setManage(C33);C37.setParent(C6);C37.setRow(C9);C37.iC();C38.setColumn(C16);C38.setManage(C34);C38.setParent(C6);C38.setRow(C9);C38.iC();C39.setColumn(C14);C39.setParent(C6);C39.setRow(C9);C39.setManage(C18);C39.iC();C40.setParent(C33);C40.setHeight(678);C40.setWidth(10);C40.iC();C41.setParent(C34);C41.setWidth(10);C41.setHeight(678);C41.iC();C42.setParent(C32);
C42.setHeight(10);C42.setWidth(700);C42.iC();C43.setParent(C17);C43.setHeight(10);C43.setWidth(700);C43.iC();C44.iC();C45.setManage(C41);C45.setParent(C44);C45.setAttachment("CENTER");C45.iC();C46.setParent(C44);C46.setAttachment("CENTER");C46.iC();C47.iC();C48.setManage(C40);C48.setParent(C47);C48.setAttachment("CENTER");C48.iC();C49.setParent(C47);C49.setAttachment("CENTER");C49.iC();C50.iC();C51.setManage(C42);C51.setParent(C50);C51.setAttachment("CENTER");C51.iC();C52.setParent(C50);C52.setAttachment("CENTER");
C52.iC();C53.iC();C54.setManage(C43);C54.setParent(C53);C54.setAttachment("CENTER");C54.iC();C55.setParent(C53);C55.setAttachment("CENTER");C55.iC();C60.setInterval(0);C60.iC();C0.aH("CHANGESIDEBAR",this,e10);C40.aH("CONTENTMINIMIZED",this,e1);C40.aH("CONTENTDOCKED",this,e2);C41.aH("CONTENTMINIMIZED",this,e3);C41.aH("CONTENTDOCKED",this,e4);C42.aH("CONTENTMINIMIZED",this,e7);C42.aH("CONTENTDOCKED",this,e8);C43.aH("CONTENTMINIMIZED",this,e5);C43.aH("CONTENTDOCKED",this,e6);C60.aH("TICK",this,e9);this.setDisplayPosition(1);
this.setTabPosition(1);this.setHeight(700);this.setWidth(700);this.setLayoutManager(C3);this.setLeft(0);this.setTop(0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LeftSlider.ContentMinimized",108);r.ln=108;{r.ln=109;m.LEFTVERTICALDIVIDER.setParent(null);}r.ln=110;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LeftSlider.ContentDocked",112);r.ln=112;{r.ln=113;m.LEFTVERTICALDIVIDER.setParent(m.MAINTABLELAYOUT);m.LEFTVERTICALDIVIDER.setDisplayPosition(1);}r.ln=114;r.e();
};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RightSlider.ContentMinimized",116);r.ln=116;{r.ln=117;m.RIGHTVERTICALDIVIDER.setParent(null);}r.ln=118;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RightSlider.ContentDocked",120);var C0=r.cF("SEQUENCE",Fd.F1.Dc);C0.iC();r.ln=120;{r.ln=122;if((m.LEFTVERTICALDIVIDER.getParent()==null)){r.ln=123;C0.set(2);}else{r.ln=125;C0.set(3);}r.ln=127;m.RIGHTVERTICALDIVIDER.setParent(m.MAINTABLELAYOUT);m.RIGHTVERTICALDIVIDER.setDisplayPosition(C0.get());
}r.ln=128;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TopSlider.ContentMinimized",130);r.ln=130;{r.ln=131;m.TOPHORIZONTALDIVIDER.setParent(null);}r.ln=132;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TopSlider.ContentDocked",134);r.ln=134;{r.ln=135;m.TOPHORIZONTALDIVIDER.setParent(m.MAINTABLELAYOUT);m.TOPHORIZONTALDIVIDER.setDisplayPosition(1);}r.ln=136;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BottomSlider.ContentMinimized",138);r.ln=138;
{r.ln=139;m.BOTTOMHORIZONTALDIVIDER.setParent(null);}r.ln=140;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BottomSlider.ContentDocked",142);var C0=r.cF("SEQUENCE",Fd.F1.Dc);C0.iC();r.ln=142;{r.ln=144;if((m.TOPHORIZONTALDIVIDER.getParent()==null)){r.ln=145;C0.set(2);}else{r.ln=147;C0.set(3);}r.ln=149;m.BOTTOMHORIZONTALDIVIDER.setParent(m.MAINTABLELAYOUT);m.BOTTOMHORIZONTALDIVIDER.setDisplayPosition(C0.get());}r.ln=150;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",154);
r.ln=154;{r.ln=157;m.SETUPSIDEBARMENUTIMER.setInterval(0);r.ln=160;if((m.SIDEBARMENU!=null)){r.ln=161;m.SIDEBARMENU.mthZINT_TERMINATE();r.ln=162;this.srSIDEBARMENU(null);}r.ln=166;m.LEFTSLIDER.mthZINT_TERMINATE();r.ln=167;m.TOPSLIDER.mthZINT_TERMINATE();r.ln=168;m.BOTTOMSLIDER.mthZINT_TERMINATE();r.ln=169;m.RIGHTSLIDER.mthZINT_TERMINATE();}r.ln=171;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SetupSideBarMenuTimer.Tick",174);var C0=r.cR("REQUEST","PRIM_ALPH");C0.iC();r.ln=174;{r.ln=178;
m.SETUPSIDEBARMENUTIMER.setInterval(0);r.ln=180;if((m.SIDEBARMENU==null)){r.e();return;}r.ln=184;m.MAIN_CENTER_PANE_TOP_MENU.setVisible(false);m.MAIN_CENTER_PANE_LEFT_MENU.setVisible(false);m.MAIN_CENTER_PANE_RIGHT_MENU.setVisible(false);m.MAIN_CENTER_PANE_BOTTOM_MENU.setVisible(false);r.ln=186;C0.set(l.s.UpperCase(m.SETUPSIDEBARMENUTIMER.getComponentTag()));r.ln=189;if(l.tB(l.s.eq(C0.get(),"LASTSIDEBARLOCATION"))){r.ln=190;m.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET(this.getComponentPatternName(),"LASTSIDEBARLOCATION",u,u,u,u,u,C0,u,"NONE",u);
}r.ln=194;if(l.s.ne(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getNAVIGATEPANELOCATIONLOCK(),"")){r.ln=195;C0.set(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getNAVIGATEPANELOCATIONLOCK());}r.ln=199;{var v1=C0.get();if(r.ln=201,l.or(l.s.eq(v1,"NONE"),l.s.eq(v1,"CLOSE"))){r.ln=202;C0.set("NONE");r.ln=203;m.SIDEBARMENU.mthZINT_DOCK("NONE",m.MAIN_CENTER_PANE_LEFT_MENU,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR());}else if(r.ln=205,l.s.eq(v1,"LEFT"))
{r.ln=206;m.SIDEBARMENU.mthZINT_DOCK("LEFT",m.MAIN_CENTER_PANE_LEFT_MENU,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR());}else if(r.ln=208,l.s.eq(v1,"RIGHT")){r.ln=209;m.SIDEBARMENU.mthZINT_DOCK("RIGHT",m.MAIN_CENTER_PANE_RIGHT_MENU,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR());}else if(r.ln=211,l.s.eq(v1,"TOP")){r.ln=212;m.SIDEBARMENU.mthZINT_DOCK("TOP",m.MAIN_CENTER_PANE_TOP_MENU,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR());
}else if(r.ln=214,l.s.eq(v1,"BOTTOM")){r.ln=215;m.SIDEBARMENU.mthZINT_DOCK("BOTTOM",m.MAIN_CENTER_PANE_BOTTOM_MENU,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR());}r.ln=217;}r.ln=220;m.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET(this.getComponentPatternName(),"LASTSIDEBARLOCATION",u,u,u,u,u,C0.get(),u,u);}r.ln=222;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#uSystem.ChangeSidebar",225);var P0=Ps.r("TO");r.ln=225;{r.ln=227;m.SETUPSIDEBARMENUTIMER.setComponentTag(P0.get());
m.SETUPSIDEBARMENUTIMER.setInterval(10);}r.ln=229;r.e();};cO.mthZINT_INITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",232);r.ln=232;{r.ln=235;if(l.n.gt(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_MEDIUM())){r.ln=237;this.srSIDEBARMENU(l.cC("VF_UI040O"));r.ln=238;m.SIDEBARMENU.mthZINT_INITIALIZE();r.ln=239;m.SETUPSIDEBARMENUTIMER.setComponentTag("LASTSIDEBARLOCATION");m.SETUPSIDEBARMENUTIMER.setInterval(50);}r.ln=244;this.srLEFTSLIDEROCCUPANT(cO.mthZINT_LOADSLIDER.call(this,m.UFRAMEWORK.ref.getUVLFONELEFTSLIDER(),"Left hand side slider pane"));
r.ln=245;if((m.LEFTSLIDEROCCUPANT==null)){r.ln=246;m.LEFTCOLUMN.setWidth(0);r.ln=247;m.LEFTVERTICALDIVIDER.setWidth(0);}else{r.ln=249;m.LEFTSLIDER.setATTACHEDGE("LEFT");r.ln=250;m.LEFTSLIDER.mthZINT_INITALIZE(m.MAIN_LEFT_PANE,null,m.LEFTCOLUMN,m.ATTACHITEMDOCKLEFT,m.LEFTSLIDEROCCUPANT);}r.ln=253;this.srRIGHTSLIDEROCCUPANT(cO.mthZINT_LOADSLIDER.call(this,m.UFRAMEWORK.ref.getUVLFONERIGHTSLIDER(),"Right hand side slider pane"));r.ln=254;if((m.RIGHTSLIDEROCCUPANT==null)){r.ln=255;m.RIGHTCOLUMN.setWidth(0);
r.ln=256;m.RIGHTVERTICALDIVIDER.setWidth(0);}else{r.ln=258;m.RIGHTSLIDER.setATTACHEDGE("RIGHT");r.ln=259;m.RIGHTSLIDER.mthZINT_INITALIZE(m.MAIN_RIGHT_PANE,null,m.RIGHTCOLUMN,m.ATTACHITEMDOCKRIGHT,m.RIGHTSLIDEROCCUPANT);}r.ln=262;this.srBOTTOMSLIDEROCCUPANT(cO.mthZINT_LOADSLIDER.call(this,m.UFRAMEWORK.ref.getUVLFONEBOTTOMSLIDER(),"Bottom slider pane"));r.ln=263;if((m.BOTTOMSLIDEROCCUPANT==null)){r.ln=264;m.BOTTOMROW.setHeight(0);r.ln=265;m.BOTTOMHORIZONTALDIVIDER.setHeight(0);}else{r.ln=267;m.BOTTOMSLIDER.setATTACHEDGE("BOTTOM");
r.ln=268;m.BOTTOMSLIDER.mthZINT_INITALIZE(m.MAIN_BOTTOM_PANE,m.BOTTOMROW,null,m.ATTACHITEMDOCKBOTTOM,m.BOTTOMSLIDEROCCUPANT);}r.ln=272;this.srTOPSLIDEROCCUPANT(cO.mthZINT_LOADSLIDER.call(this,m.UFRAMEWORK.ref.getUVLFONETOPSLIDER(),"Top slider pane"));r.ln=273;if((m.TOPSLIDEROCCUPANT==null)){r.ln=274;m.TOPROW.setHeight(0);r.ln=275;m.TOPHORIZONTALDIVIDER.setHeight(0);}else{r.ln=277;m.TOPSLIDER.setATTACHEDGE("TOP");r.ln=278;m.TOPSLIDER.mthZINT_INITALIZE(m.MAIN_TOP_PANE,m.TOPROW,null,m.ATTACHITEMDOCKTOP,m.TOPSLIDEROCCUPANT);
}}r.ln=281;r.e();};cO.mthZINT_LOADSLIDER=function(p0,p2){var m=this.REF,r=l.mR(this,cO,"zInt_LoadSlider",284);var P0=r.cP("VLCOMPONENTNAME","PRIM_ALPH");var P1=r.cPD("SLIDER");var P2=r.cP("CAPTION","PRIM_DC","UnicodeString");P0.set(p0);P2.set(p2);r.ln=284;{r.ln=290;P1=r.sR("P1",null);r.ln=293;if(l.tB(l.s.ne(P0.get(),""))){r.ln=295;P1=r.sR("P1",l.cFrN(P0.get(),"VF_AC028O"));r.ln=297;if((P1==null)){r.ln=299;l.WEB().mthALERT(l.cat(l.cat("VF_UI030O: Attempt to a load slider snap in component with id ",P0.get())," failed. Request has been ignored and slider will not be available."));
}else{r.ln=303;m.USYSTEM.ref.getACTIVEVF_AC034INSTANCES().mthINSERT(P1);r.ln=305;m.USYSTEM.ref.mthZINT_UPDATEMAJORTRACKEDOBJECTDETAILS(P1.getASSOCIATEDVF_SY185OTRACKINGITEM(),P1.getComponentClassName(),P2.get());}}}r.ln=312;return r.rR(P1);};cO.getMAINCENTERPANE=function(){return this.REF.MAIN_CENTER_PANE_VF_UI002CONTAINER;};cO.getMAINCENTERPANEATTACHMENTITEM=function(){return this.REF.MAIN_CENTER_PANE_VF_UI002CONTAINERATTACHMENTITEM;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}cO.srLEFTSLIDEROCCUPANT=function(rn){this.sR("LEFTSLIDEROCCUPANT",rn);};cO.srRIGHTSLIDEROCCUPANT=function(rn){this.sR("RIGHTSLIDEROCCUPANT",rn);};cO.srTOPSLIDEROCCUPANT=function(rn){this.sR("TOPSLIDEROCCUPANT",rn);};cO.srBOTTOMSLIDEROCCUPANT=function(rn){this.sR("BOTTOMSLIDEROCCUPANT",rn);};cO.srSIDEBARMENU=function(rn){this.sR("SIDEBARMENU",rn);};},{rc:["VF_SY001O","VF_SY001X","VF_FP001O","VF_UI006O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.RowDivider","PRIM_TBLO.Column","PRIM_TBLO.ColumnDivider","PRIM_TBLO.Item","PRIM_TIMR","PRIM_FLD"],
dc:["VF_AC028O","VF_UI040O"],dp:["PRIM_ALPH"]});