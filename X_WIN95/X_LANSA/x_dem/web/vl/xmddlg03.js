﻿LANSA.addComponent({id:"XMDDLG03",nm:"xMdDialog3",ot:"wv",tp:"Dialog",de:"Material Design Dialog",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C6=this.cR("LAYOUT1ITEM4","PRIM_TBLO","Item");
var C7=this.cR("LABEL1","PRIM_MD","FlatButton");var C8=this.cR("LABEL","PRIM_MD","FlatButton");var C9=this.cR("LABEL2","PRIM_MD","FlatButton");var C10=this.cR("LABEL3","PRIM_MD","FlatButton");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPCENTER");C3.setColumn(C2);C3.setManage(C7);C3.setParent(C0);C3.setRow(C1);C3.setSizing("FITTOWIDTH");C3.setFlow("DOWN");C3.iC();C4.setAlignment("TOPCENTER");C4.setColumn(C2);C4.setManage(C8);
C4.setParent(C0);C4.setRow(C1);C4.setSizing("FITTOWIDTH");C4.setFlow("DOWN");C4.setMarginTop(20);C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C2);C5.setManage(C9);C5.setParent(C0);C5.setRow(C1);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C2);C6.setManage(C10);C6.setParent(C0);C6.setRow(C1);C6.setSizing("FITTOWIDTH");C6.setFlow("DOWN");C6.iC();C7.setCaption("Set backup account");C7.setDisplayPosition(1);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(1);
C7.setTabStop(false);C7.setThemeDrawStyle("Heading1+Strong");C7.setTop(0);C7.setWidth(287);C7.setWordWrap(true);C7.setCaptionMarginTop(20);C7.setHeight(57);C7.setCaptionAlignment("TOPLEFT");C7.setCaptionMarginLeft(20);C7.setCaptionMarginRight(20);C7.setPaddingBottom(10);C7.iC();C8.setCaption("username@gmail.com");C8.setDisplayPosition(2);C8.setIcon("account_circle");C8.setLeft(0);C8.setParent(this);C8.setTabPosition(4);C8.setTabStop(false);C8.setTop(77);C8.setWidth(287);C8.setCaptionMarginLeft(10);
C8.setIconHeight(48);C8.setHeight(57);C8.setThemeDrawStyle("Heading3");C8.setIconColor("THEME500");C8.setIconMarginLeft(15);C8.setCaptionAlignment("CENTERLEFT");C8.iC();C9.setCaption("user2@gmail.com");C9.setDisplayPosition(3);C9.setIcon("account_circle");C9.setLeft(0);C9.setParent(this);C9.setTabPosition(3);C9.setTabStop(false);C9.setTop(134);C9.setWidth(287);C9.setCaptionMarginLeft(10);C9.setIconHeight(48);C9.setHeight(57);C9.setThemeDrawStyle("Heading3");C9.setIconColor("THEMEACCENTMEDIUM");C9.setIconMarginLeft(15);
C9.setCaptionAlignment("CENTERLEFT");C9.iC();C10.setCaption("Add user");C10.setDisplayPosition(4);C10.setIcon("add");C10.setLeft(0);C10.setParent(this);C10.setTabPosition(2);C10.setTabStop(false);C10.setTop(191);C10.setWidth(287);C10.setCaptionMarginLeft(10);C10.setIconHeight(48);C10.setHeight(57);C10.setThemeDrawStyle("Heading3");C10.setIconColor("THEME500");C10.setIconMarginLeft(15);C10.setCaptionAlignment("CENTERLEFT");C10.iC();C8.aH("CLICK",this,e1);C9.aH("CLICK",this,e2);C10.aH("CLICK",this,e3);
this.setLayoutManager(C0);this.setHeight(305);this.setWidth(289);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Label.Click",16);r.ln=16;{r.ln=18;this.mthCLOSE();}r.ln=20;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Label2.Click",21);r.ln=21;{r.ln=23;this.mthCLOSE();}r.ln=25;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Label3.Click",26);r.ln=26;{r.ln=28;this.mthCLOSE();}r.ln=30;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.FlatButton"]
});