﻿LANSA.addComponent({id:"XDEMOW_90",nm:"xDemoWebPositioningaPopup",ot:"wp",tp:"Web Page",de:"Positioning a Popup",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("PANEL1","PRIM_PANL");var C5=this.cR("BOTTOMRIGHT","PRIM_PHBN");var C6=this.cR("CENTEREDPOPUP","PRIM_PPNL");
var C7=this.cR("POPUP","PRIM_PPNL");var C8=this.cR("LAIDOUTPOPUP","PRIM_PPNL");var C9=this.cR("LABEL1","PRIM_LABL");var C10=this.cR("CENTERED","PRIM_PHBN");var C11=this.cR("LAIDOUT","PRIM_PHBN");var C12=this.cR("LABEL2","PRIM_LABL");var C13=this.cR("LABEL3","PRIM_LABL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("BOTTOMRIGHT");C3.setColumn(C1);C3.setManage(C8);C3.setParent(C0);C3.setRow(C2);C3.setSizing("NONE");C3.setMarginBottom(20);
C3.setMarginRight(20);C3.iC();C4.setDisplayPosition(1);C4.setLeft(528);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(40);C4.setHeight(185);C4.setWidth(257);C4.setThemeDrawStyle("LightTitle");C4.setTouchMove("BOTH");C4.iC();C5.setCaption("Show a popup at the bottom right corner of this button");C5.setDisplayPosition(1);C5.setLeft(16);C5.setParent(C4);C5.setTabPosition(1);C5.setTop(96);C5.setHeight(73);C5.setWidth(225);C5.setWordWrap(true);C5.setMarginLeft(4);C5.setMarginRight(4);
C5.setThemeDrawStyle("Heading2");C5.iC();C6.setTitleBar(true);C6.setCloseButton(true);C6.setCaption("Centered Popup");C6.setAutoClose(false);C6.setHeight(249);C6.setWidth(361);C6.iC();C7.setTitleBar(true);C7.setCloseButton(true);C7.setCaption("Unparented Popup");C7.iC();C8.setParent(this);C8.setTitleBar(true);C8.setCloseButton(true);C8.setCaption("Laid Out Popup");C8.setLeft(603);C8.setTop(363);C8.setHeight(249);C8.setWidth(361);C8.setAutoClose(false);C8.iC();C9.setCaption("This panel can be moved");
C9.setDisplayPosition(2);C9.setEllipses("WORD");C9.setHeight(25);C9.setLeft(8);C9.setParent(C4);C9.setTabPosition(2);C9.setTabStop(false);C9.setTop(8);C9.setVerticalAlignment("CENTER");C9.setWidth(241);C9.setAlignment("CENTER");C9.iC();C10.setDisplayPosition(3);C10.setLeft(16);C10.setParent(this);C10.setTabPosition(3);C10.setTop(16);C10.setWidth(161);C10.setCaption("Show a centered popup");C10.setHeight(57);C10.setThemeDrawStyle("Heading2");C10.setWordWrap(true);C10.iC();C11.setDisplayPosition(2);
C11.setLeft(16);C11.setParent(this);C11.setTabPosition(2);C11.setTop(80);C11.setWidth(161);C11.setCaption("Show a popup under layout");C11.setHeight(57);C11.setThemeDrawStyle("Heading2");C11.setWordWrap(true);C11.iC();C12.setCaption("Resize the page. Popup will stay close to the bottom right corner");C12.setDisplayPosition(2);C12.setEllipses("WORD");C12.setHeight(81);C12.setLeft(32);C12.setParent(C8);C12.setTabPosition(2);C12.setTabStop(false);C12.setTop(96);C12.setWidth(297);C12.setThemeDrawStyle("Heading3");
C12.setAlignment("CENTER");C12.iC();C13.setCaption("Resize the page. Popup will stay in the center");C13.setDisplayPosition(2);C13.setEllipses("WORD");C13.setHeight(81);C13.setLeft(32);C13.setParent(C6);C13.setTabPosition(2);C13.setTabStop(false);C13.setTop(96);C13.setWidth(297);C13.setThemeDrawStyle("Heading3");C13.setAlignment("CENTER");C13.iC();C5.aH("CLICK",this,e1);C7.aH("PREPARE",this,e4);C10.aH("CLICK",this,e2);C11.aH("CLICK",this,e3);this.setHeight(632);this.setWidth(984);this.setTheme(l.THEME().get("2015BLUE"));
this.setLayoutManager(C0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BottomRight.Click",20);r.ln=20;{r.ln=22;m.POPUP.mthSHOWPOPUP(u,u,"ABSOLUTE",u,u);}r.ln=24;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Centered.Click",26);r.ln=26;{r.ln=28;m.CENTEREDPOPUP.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=30;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Laidout.Click",32);r.ln=32;{r.ln=34;m.LAIDOUTPOPUP.mthSHOWPOPUP(u,u,u,u,u);}r.ln=36;r.e();};function e4(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Popup.Prepare",38);var P0=Ps.r("LEFT");var P1=Ps.r("TOP");r.ln=38;{r.ln=40;P0.set(l.add(m.BOTTOMRIGHT.getScreenLeft(),m.BOTTOMRIGHT.getWidth()));r.ln=41;P1.set(l.add(m.BOTTOMRIGHT.getScreenTop(),m.BOTTOMRIGHT.getHeight()));}r.ln=43;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_PHBN","PRIM_PPNL","PRIM_LABL"]});