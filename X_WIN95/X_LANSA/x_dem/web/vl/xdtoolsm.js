﻿LANSA.addComponent({id:"XDTOOLSM",nm:"xDToolsMenu",ot:"rp",tp:"Reusable Part",de:"Menu",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"XDTOOLSP",mt:{LayoutDesktop:{},LayoutMobile:{}},co:function(){cO.aN.call(this);var C0=this.cA("GSEARCHHANDLER","XDTOO_16");var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("MENUBAR","PRIM_PPNL","MenuBar");
var C7=this.cR("HOME","PRIM_PPNL","MenuItem");var C8=this.cR("HANDTOOLS","PRIM_PPNL","MenuItem");var C9=this.cR("POWERTOOLS","PRIM_PPNL","MenuItem");var C10=this.cR("GARDENTOOLS","PRIM_PPNL","MenuItem");var C11=this.cR("TOOLHIRE","PRIM_PPNL","MenuItem");var C12=this.cR("DIY","PRIM_PPNL","MenuItem");var C13=this.cR("MENUITEMS","PRIM_ACOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setAlignment("TOPCENTER");
C4.setColumn(C2);C4.setManage(this);C4.setParent(C1);C4.setRow(C3);C4.setSizing("FITTOWIDTH");C4.iC();C5.setColumn(C2);C5.setManage(C6);C5.setParent(C1);C5.setRow(C3);C5.iC();C6.setDisplayPosition(1);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setWidth(665);C6.iC();C7.setCaption("Home");C7.setDisplayPosition(1);C7.setHeight(30);C7.setParent(C6);C7.setTabPosition(1);C7.setTabStop(false);C7.setAlignment("CENTER");C7.iC();C8.setCaption("Hand Tools");C8.setDisplayPosition(2);C8.setHeight(30);
C8.setLeft(100);C8.setParent(C6);C8.setTabPosition(6);C8.setTabStop(false);C8.setAlignment("CENTER");C8.iC();C9.setCaption("Power Tools");C9.setDisplayPosition(3);C9.setHeight(30);C9.setLeft(200);C9.setParent(C6);C9.setTabPosition(5);C9.setTabStop(false);C9.setAlignment("CENTER");C9.iC();C10.setCaption("Garden Tools");C10.setDisplayPosition(4);C10.setHeight(30);C10.setLeft(300);C10.setParent(C6);C10.setTabPosition(4);C10.setTabStop(false);C10.setAlignment("CENTER");C10.iC();C11.setCaption("Tool Hire");
C11.setDisplayPosition(5);C11.setHeight(30);C11.setLeft(400);C11.setParent(C6);C11.setTabPosition(3);C11.setTabStop(false);C11.setAlignment("CENTER");C11.iC();C12.setCaption("D.I.Y.");C12.setDisplayPosition(6);C12.setHeight(30);C12.setLeft(500);C12.setParent(C6);C12.setTabPosition(2);C12.setTabStop(false);C12.setAlignment("CENTER");C12.iC();C13.setCollects("PRIM_PPNL.MenuItem");C13.iC();C7.aH("CLICK",this,e6);C8.aH("CLICK",this,e3);C9.aH("CLICK",this,e4);C10.aH("CLICK",this,e5);this.REF.GAPPLICATION.ref.aH("ACTIVATINGDESIGN",this,e2);
this.setHeight(30);this.setWidth(665);this.setLayoutManager(C1);this.setThemeDrawStyle("MenuBar");this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",21);r.ln=21;{r.ln=23;m.MENUITEMS.mthINSERT(m.DIY);r.ln=24;m.MENUITEMS.mthINSERT(m.GARDENTOOLS);r.ln=25;m.MENUITEMS.mthINSERT(m.HANDTOOLS);r.ln=26;m.MENUITEMS.mthINSERT(m.HOME);r.ln=27;m.MENUITEMS.mthINSERT(m.POWERTOOLS);r.ln=28;m.MENUITEMS.mthINSERT(m.TOOLHIRE);}r.ln=30;r.e();};function e2(sender,Ps)
{var r=l.eR(this,cO,"#gApplication.ActivatingDesign",32);var P0=Ps.r("DESIGN");r.ln=32;{r.ln=34;{var v1=P0.get();if(r.ln=36,l.s.eq(v1,"DESKTOP")){r.ln=38;this.mthLAYOUTDESKTOP();}else if(r.ln=40,l.s.eq(v1,"TABLET")){r.ln=42;this.mthLAYOUTDESKTOP();}else if(r.ln=44,l.s.eq(v1,"MOBILE")){r.ln=46;this.mthLAYOUTMOBILE();}r.ln=48;}}r.ln=50;r.e();};cO.mthLAYOUTDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"LayoutDesktop",52);r.ln=52;{r.ln=54;m.MENUBAR.setCollapseStyle("HIDDEN");r.ln=55;for(var l1=m.MENUITEMS.cI();l1.step();){l1.item().setWidth(100)};
}r.ln=57;r.e();};cO.mthLAYOUTMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"LayoutMobile",59);r.ln=59;{r.ln=61;m.MENUBAR.setCollapseStyle("ALL");r.ln=62;for(var l1=m.MENUITEMS.cI();l1.step();){l1.item().setWidth(150)};}r.ln=64;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#HandTools.Click",66);r.ln=66;{r.ln=68;l.WEB().getHistory().mthADD("Page=HandTools");r.ln=70;this.REF.GAPPLICATION.ref.mthACTIVATESEARCHPAGEHANDTOOLS();}r.ln=72;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PowerTools.Click",74);
r.ln=74;{r.ln=76;l.WEB().getHistory().mthADD("Page=PowerTools");r.ln=78;this.REF.GAPPLICATION.ref.mthACTIVATESEARCHPAGEPOWERTOOLS();}r.ln=80;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#GardenTools.Click",82);r.ln=82;{r.ln=84;l.WEB().getHistory().mthADD("Page=GardenTools");r.ln=86;this.REF.GAPPLICATION.ref.mthACTIVATESEARCHPAGEGARDENTOOLS();}r.ln=88;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Home.Click",90);r.ln=90;{r.ln=92;this.REF.GAPPLICATION.ref.mthACTIVATEHOMEPAGE();}r.ln=94;
r.e();};},{rc:["XDTOOLSP","XDTOO_16"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PPNL.MenuBar","PRIM_PPNL.MenuItem","PRIM_ACOL"]});