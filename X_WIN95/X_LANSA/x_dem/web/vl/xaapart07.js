﻿LANSA.addComponent({id:"XAAPART07",nm:"xAssessorViewImage",ot:"rp",tp:"Reusable Part",de:"Assessor View Image",tl:14020001},function(l,oI,u){var c1=l.cDec("2.5");var rc1=l.cB("xaaimg13.png");var rc2=l.cB("xaaimg14.png");var cO=l.rC(oI,{an:"PRIM_PPNL",mt:{ShowImage:{}},co:function(){cO.aN.call(this);var C0=this.cR("SHROUDSTYLE","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");
var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("ROW2","PRIM_TBLO","Row");var C8=this.cR("ROW3","PRIM_TBLO","Row");var C9=this.cR("ROW4","PRIM_TBLO","Row");var C10=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C14=this.cR("TABLELAYOUT2","PRIM_TBLO");var C15=this.cR("COLUMN4","PRIM_TBLO","Column");
var C16=this.cR("ROW5","PRIM_TBLO","Row");var C17=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C18=this.cR("IMAGEPANEL","PRIM_IMAG");var C19=this.cR("BUTTONCLOSE","PRIM_PHBN");var C20=this.cR("BUTTONCHANGEIMAGE","PRIM_PHBN");var C21=this.cR("PANEL1","PRIM_PANL");var C22=this.cA("CONTROL","XAAPART02");var C23=this.cA("DATA","XAAPART10");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("0:0:0");C1.setOpacity(75);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setUnits("PIXELS");C3.setWidth(10);
C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.setUnits("PIXELS");C5.setWidth(10);C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.setUnits("PIXELS");C6.setHeight(10);C6.iC();C7.setDisplayPosition(2);C7.setParent(C2);C7.setHeight(c1);C7.iC();C8.setDisplayPosition(3);C8.setParent(C2);C8.setHeight(90);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(4);C9.setParent(C2);C9.setHeight(10);C9.setUnits("PIXELS");C9.iC();C10.setColumn(C4);C10.setManage(C18);
C10.setParent(C2);C10.setRow(C7);C10.iC();C11.setAlignment("TOPRIGHT");C11.setColumn(C4);C11.setFlow("RIGHT");C11.setManage(C19);C11.setParent(C2);C11.setRow(C7);C11.setMarginTop(5);C11.setMarginBottom(5);C11.setSizing("NONE");C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C4);C12.setFlow("RIGHT");C12.setManage(C20);C12.setParent(C2);C12.setRow(C16);C12.setMarginTop(5);C12.setMarginBottom(5);C12.iC();C13.setColumn(C4);C13.setManage(C21);C13.setParent(C2);C13.setRow(C8);C13.iC();C14.iC();C15.setDisplayPosition(1);
C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setColumn(C15);C17.setManage(C20);C17.setParent(C14);C17.setRow(C16);C17.setSizing("NONE");C17.iC();C18.setDisplayPosition(2);C18.setParent(this);C18.setTabPosition(1);C18.setTabStop(false);C18.setHeight(401);C18.setWidth(382);C18.iC();C19.setDisplayPosition(1);C19.setParent(this);C19.setTabPosition(2);C19.setHeight(30);C19.setWidth(30);C19.setThemeDrawStyle("KeyPad");C19.setImage(rc1);C19.setImageHeight(25);C19.setLeft(362);
C19.iC();C20.setDisplayPosition(1);C20.setParent(C21);C20.setTabPosition(1);C20.setTop(8);C20.setWidth(75);C20.setHeight(75);C20.setLeft(154);C20.setThemeDrawStyle("KeyPad");C20.setImage(rc2);C20.setImageHeight(60);C20.iC();C21.setDisplayPosition(3);C21.setHeight(90);C21.setParent(this);C21.setTabPosition(3);C21.setTabStop(false);C21.setTop(411);C21.setWidth(382);C21.setLayoutManager(C14);C21.iC();if((C22!=null)&&(C22.iI()==false)){C22.iC();}if((C23!=null)&&(C23.iI()==false)){C23.iC();}C19.aH("CLICK",this,e1);
C20.aH("CLICK",this,e2);this.setHeight(513);this.setWidth(404);this.setLayoutManager(C2);this.setAutoClose(false);this.setLeft(0);this.setTop(0);this.setShroudStyle(C0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonClose.Click",40);r.ln=40;{r.ln=42;m.IMAGEPANEL.setImage(null);r.ln=44;this.mthCLOSEPOPUP();}r.ln=46;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonChangeImage.Click",48);r.ln=48;{r.ln=50;m.CONTROL.ref.mthCHANGEIMAGE();r.ln=52;this.mthCLOSEPOPUP();
}r.ln=54;r.e();};cO.mthSHOWIMAGE=function(){var m=this.REF,r=l.mR(this,cO,"ShowImage",60);r.ln=60;{r.ln=62;m.IMAGEPANEL.setVisible(true);r.ln=64;m.IMAGEPANEL.setFileName(m.DATA.ref.getIMAGEBASE64DATA());}r.ln=66;r.e();};},{rc:["XAAPART02","XAAPART10"],rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_PHBN","PRIM_PANL"]});