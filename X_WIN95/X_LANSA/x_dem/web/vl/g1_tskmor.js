﻿LANSA.addComponent({id:"G1_TSKMOR",nm:"G1_TaskDetailMorePopup",ot:"rp",tp:"Reusable Part",de:"Task Detail More Popup",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",mt:{UpdateMenu:{ps:{"Task":{pt:"i"}}}},ev:{StartClicked:{},DeleteClicked:{},CompleteClicked:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE_NOBORDER","PRIM_VS","Style");var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");
var C5=this.cR("ROWDELETE","PRIM_TBLO","Row");var C6=this.cR("ROWSTART","PRIM_TBLO","Row");var C7=this.cR("ROWCOMPLETE","PRIM_TBLO","Row");var C8=this.cR("ROW5","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C15=this.cR("IMAGEDELETE","PRIM_MD","Label");
var C16=this.cR("IMAGESTART","PRIM_MD","Label");var C17=this.cR("LABELSTART","PRIM_MD","FlatButton");var C18=this.cR("LABELDELETE","PRIM_MD","FlatButton");var C19=this.cR("IMAGECOMPLETE","PRIM_MD","Label");var C20=this.cR("LABELCOMPLETE","PRIM_MD","FlatButton");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.iC();C1.setSizing("CONTENTHEIGHT");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setUnits("PIXELS");C2.setWidth(60);C2.iC();C3.setDisplayPosition(2);
C3.setParent(C1);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.setUnits("PIXELS");C4.setHeight(10);C4.iC();C5.setDisplayPosition(2);C5.setParent(C1);C5.setUnits("PIXELS");C5.setHeight(40);C5.iC();C6.setDisplayPosition(3);C6.setParent(C1);C6.setUnits("PIXELS");C6.setHeight(40);C6.iC();C7.setDisplayPosition(4);C7.setParent(C1);C7.setUnits("PIXELS");C7.setHeight(40);C7.iC();C8.setDisplayPosition(5);C8.setParent(C1);C8.setUnits("PIXELS");C8.setHeight(10);C8.iC();C9.setColumn(C2);C9.setManage(C15);
C9.setParent(C1);C9.setRow(C5);C9.setSizing("NONE");C9.iC();C10.setColumn(C2);C10.setManage(C16);C10.setParent(C1);C10.setRow(C6);C10.setSizing("NONE");C10.iC();C11.setColumn(C2);C11.setManage(C17);C11.setParent(C1);C11.setRow(C6);C11.setColumnSpan(2);C11.setSizing("FITTOWIDTH");C11.iC();C12.setColumn(C2);C12.setManage(C18);C12.setParent(C1);C12.setRow(C5);C12.setColumnSpan(2);C12.setSizing("FITTOWIDTH");C12.iC();C13.setColumn(C2);C13.setManage(C19);C13.setParent(C1);C13.setRow(C7);C13.setSizing("NONE");
C13.iC();C14.setColumn(C2);C14.setManage(C20);C14.setParent(C1);C14.setRow(C7);C14.setColumnSpan(2);C14.setSizing("FITTOWIDTH");C14.iC();C15.setDisplayPosition(1);C15.setHeight(24);C15.setLeft(18);C15.setParent(this);C15.setTabPosition(1);C15.setTabStop(false);C15.setTop(18);C15.setWidth(24);C15.setIcon("delete");C15.setIconOpacity(50);C15.iC();C16.setDisplayPosition(2);C16.setHeight(24);C16.setLeft(18);C16.setParent(this);C16.setTabPosition(3);C16.setTabStop(false);C16.setTop(58);C16.setWidth(24);
C16.setIcon("timer");C16.setIconOpacity(50);C16.iC();C17.setDisplayPosition(5);C17.setEllipses(true);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(6);C17.setTabStop(false);C17.setWidth(240);C17.setCaptionMarginLeft(60);C17.setCaption("Start task");C17.setHeight(40);C17.setTop(50);C17.setCaptionAlignment("CENTERLEFT");C17.iC();C18.setCaption("Delete");C18.setDisplayPosition(3);C18.setEllipses(true);C18.setLeft(0);C18.setParent(this);C18.setTabPosition(4);C18.setTabStop(false);C18.setWidth(240);
C18.setCaptionMarginLeft(60);C18.setHeight(40);C18.setCaptionAlignment("CENTERLEFT");C18.iC();C19.setDisplayPosition(4);C19.setHeight(24);C19.setLeft(18);C19.setParent(this);C19.setTabPosition(2);C19.setTabStop(false);C19.setTop(98);C19.setWidth(24);C19.setIcon("fa-flag-checkered");C19.setIconOpacity(50);C19.setIconHeight(22);C19.iC();C20.setCaption("Complete task");C20.setDisplayPosition(6);C20.setEllipses(true);C20.setLeft(0);C20.setParent(this);C20.setTabPosition(5);C20.setTabStop(false);C20.setTop(90);
C20.setWidth(240);C20.setCaptionMarginLeft(60);C20.setHeight(40);C20.setCaptionAlignment("CENTERLEFT");C20.iC();C15.aH("CLICK",this,e2);C16.aH("CLICK",this,e1);C17.aH("CLICK",this,e1);C18.aH("CLICK",this,e2);C19.aH("CLICK",this,e3);C20.aH("CLICK",this,e3);this.setCaption("Caption");this.setCloseButton(true);this.setLeft(0);this.setTop(0);this.setWidth(240);this.setStyle(C0);this.setLayoutManager(C1);this.setHeight(140);}});function e1(sender,Ps){var r=l.eR(this,cO,"#ImageStart.Click #LabelStart.Click",43);
r.ln=43;{r.ln=45;this.fE("STARTCLICKED");r.ln=47;this.mthCLOSEPOPUP();}r.ln=49;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ImageDelete.Click #LabelDelete.Click",51);r.ln=51;{r.ln=53;this.fE("DELETECLICKED");r.ln=55;this.mthCLOSEPOPUP();}r.ln=57;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ImageComplete.Click #LabelComplete.Click",59);r.ln=59;{r.ln=61;this.fE("COMPLETECLICKED");r.ln=63;this.mthCLOSEPOPUP();}r.ln=65;r.e();};cO.mthUPDATEMENU=function(p0){var m=this.REF,r=l.mR(this,cO,"UpdateMenu",71);
var P0=r.cPD("TASK");P0=p0;r.ln=71;{r.ln=74;if(P0.getISCOMPLETED()){r.ln=76;m.LABELSTART.setVisible(false);m.IMAGESTART.setVisible(false);m.LABELCOMPLETE.setVisible(false);m.IMAGECOMPLETE.setVisible(false);r.ln=78;m.ROWSTART.setHeight(0);m.ROWCOMPLETE.setHeight(0);}else{r.ln=82;m.LABELCOMPLETE.setVisible(true);m.IMAGECOMPLETE.setVisible(true);r.ln=84;m.ROWCOMPLETE.setHeight(40);r.ln=86;if(P0.getISSTARTED()){r.ln=88;m.LABELSTART.setVisible(false);m.IMAGESTART.setVisible(false);r.ln=90;m.ROWSTART.setHeight(0);
}else{r.ln=94;m.LABELSTART.setVisible(true);m.IMAGESTART.setVisible(true);r.ln=96;m.ROWSTART.setHeight(40);}}}r.ln=102;r.e();};},{rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.FlatButton"]});