﻿LANSA.addComponent({id:"XDEMO_22",nm:"xDemoWebMoreLessEmployeeItem",ot:"rp",tp:"Reusable Part",de:"More/Less Employee",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],rm:["dt"],mt:{OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("ROW_3","PRIM_TBLO","Row");
var C5=this.cR("ROW_4","PRIM_TBLO","Row");var C6=this.cR("ROW_5","PRIM_TBLO","Row");var C7=this.cR("COLUMN","PRIM_TBLO","Column");var C8=this.cR("COLUMN_2","PRIM_TBLO","Column");var C9=this.cR("COLUMN_3","PRIM_TBLO","Column");var C10=this.cR("COLUMN_4","PRIM_TBLO","Column");var C11=this.cR("COLUMN_5","PRIM_TBLO","Column");var C12=this.cR("COLUMN_6","PRIM_TBLO","Column");var C13=this.cR("COLUMN_7","PRIM_TBLO","Column");var C14=this.cR("IMAGE","PRIM_IMAG");var C15=this.cR("LAYOUTITEM","PRIM_TBLO","Item");
var C16=this.cR("GEMPLOYEENAME","PRIM_LABL");var C17=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C18=this.cR("GDEPARTMENT","PRIM_LABL");var C19=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C20=this.cR("MORELESS","PRIM_LABL");var C21=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");var C22=this.cR("GSTARTDATE","PRIM_LABL");var C23=this.cR("LAYOUTITEM_5","PRIM_TBLO","Item");var C24=this.cR("COLUMN_8","PRIM_TBLO","Column");var C25=this.cR("LABEL","PRIM_LABL");var C26=this.cR("LAYOUTITEM_6","PRIM_TBLO","Item");
var C27=this.cR("LABEL_2","PRIM_LABL");var C28=this.cR("LAYOUTITEM_7","PRIM_TBLO","Item");var C29=this.cR("GSTREET","PRIM_LABL");var C30=this.cR("LAYOUTITEM_9","PRIM_TBLO","Item");var C31=this.cR("GCITY","PRIM_LABL");var C32=this.cR("LAYOUTITEM_8","PRIM_TBLO","Item");var C33=this.cR("GSTATE","PRIM_LABL");var C34=this.cR("LAYOUTITEM_10","PRIM_TBLO","Item");var C35=this.cR("GPOSTCODE","PRIM_LABL");var C36=this.cR("LAYOUTITEM_11","PRIM_TBLO","Item");var C37=this.cR("GEXPANDED","PRIM_BOLN");C0.setCursor("HAND");
C0.iC();C1.setSizing("CONTENTHEIGHT");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(26);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setHeight(24);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setHeight(24);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(4);C5.setParent(C1);C5.setHeight(24);C5.setUnits("CONTENT");C5.iC();C6.setDisplayPosition(5);C6.setParent(C1);C6.iC();C7.setDisplayPosition(1);C7.setParent(C1);C7.setWidth(40);
C7.setUnits("PIXELS");C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.setWidth(80);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(3);C9.setParent(C1);C9.setWidth(80);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(4);C10.setParent(C1);C10.setWidth(80);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(5);C11.setParent(C1);C11.setWidth(80);C11.setUnits("PIXELS");C11.iC();C12.setDisplayPosition(6);C12.setParent(C1);C12.setWidth(80);C12.setUnits("PIXELS");C12.iC();C13.setDisplayPosition(7);
C13.setParent(C1);C13.setWidth(80);C13.setUnits("PIXELS");C13.iC();C14.setDisplayPosition(1);C14.setLeft(4);C14.setParent(this);C14.setTabPosition(1);C14.setTabStop(false);C14.setTop(2);C14.setHeight(41);C14.setWidth(32);C14.setImageSizing("BESTFIT");C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C7);C15.setFlow("DOWN");C15.setManage(C14);C15.setParent(C1);C15.setRow(C2);C15.setSizing("FITTOWIDTH");C15.setMarginLeft(4);C15.setMarginRight(4);C15.setMarginTop(2);C15.iC();C16.setCaption("Employee Name");
C16.setDisplayPosition(2);C16.setEllipses("WORD");C16.setLeft(40);C16.setParent(this);C16.setTabPosition(2);C16.setTabStop(false);C16.setVerticalAlignment("CENTER");C16.setHeight(24);C16.setWidth(240);C16.setTop(2);C16.setThemeDrawStyle("Strong");C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C8);C17.setFlow("DOWN");C17.setManage(C16);C17.setParent(C1);C17.setRow(C2);C17.setColumnSpan(3);C17.setMarginTop(2);C17.iC();C18.setCaption("Department");C18.setDisplayPosition(3);C18.setEllipses("WORD");
C18.setLeft(40);C18.setParent(this);C18.setTabPosition(3);C18.setTabStop(false);C18.setTop(26);C18.setVerticalAlignment("CENTER");C18.setHeight(24);C18.setWidth(240);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C8);C19.setFlow("DOWN");C19.setManage(C18);C19.setParent(C1);C19.setRow(C3);C19.setColumnSpan(3);C19.iC();C20.setCaption("show details");C20.setDisplayPosition(4);C20.setEllipses("WORD");C20.setLeft(40);C20.setParent(this);C20.setTabPosition(4);C20.setTabStop(false);C20.setTop(50);C20.setVerticalAlignment("CENTER");
C20.setHeight(24);C20.setWidth(160);C20.setThemeDrawStyle("Emphasis");C20.setStyle(C0);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C8);C21.setFlow("DOWN");C21.setManage(C20);C21.setParent(C1);C21.setRow(C4);C21.setColumnSpan(2);C21.iC();C22.setCaption("StartDate");C22.setDisplayPosition(5);C22.setEllipses("WORD");C22.setLeft(280);C22.setParent(this);C22.setTabPosition(5);C22.setTabStop(false);C22.setVerticalAlignment("CENTER");C22.setHeight(24);C22.setWidth(240);C22.setMarginLeft(2);C22.setTop(2);
C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C11);C23.setFlow("DOWN");C23.setManage(C22);C23.setParent(C1);C23.setRow(C2);C23.setColumnSpan(3);C23.setMarginTop(2);C23.iC();C24.setDisplayPosition(8);C24.setParent(C1);C24.iC();C25.setCaption("Contact Details");C25.setDisplayPosition(6);C25.setEllipses("WORD");C25.setLeft(40);C25.setParent(this);C25.setTabPosition(6);C25.setTabStop(false);C25.setTop(74);C25.setVerticalAlignment("CENTER");C25.setHeight(24);C25.setWidth(240);C25.setVisible(false);
C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C8);C26.setFlow("DOWN");C26.setManage(C25);C26.setParent(C1);C26.setRow(C5);C26.setColumnSpan(3);C26.setSizing("FITTOWIDTH");C26.iC();C27.setCaption("Address");C27.setDisplayPosition(7);C27.setEllipses("WORD");C27.setLeft(40);C27.setParent(this);C27.setTabPosition(7);C27.setTabStop(false);C27.setTop(98);C27.setVerticalAlignment("CENTER");C27.setHeight(24);C27.setWidth(80);C27.setThemeDrawStyle("Strong");C27.setVisible(false);C27.iC();C28.setAlignment("TOPLEFT");
C28.setColumn(C8);C28.setFlow("DOWN");C28.setManage(C27);C28.setParent(C1);C28.setRow(C6);C28.setSizing("FITTOWIDTH");C28.iC();C29.setCaption("Street");C29.setDisplayPosition(8);C29.setEllipses("WORD");C29.setLeft(120);C29.setParent(this);C29.setTabPosition(8);C29.setTabStop(false);C29.setTop(98);C29.setVerticalAlignment("CENTER");C29.setHeight(24);C29.setWidth(160);C29.setVisible(false);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C9);C30.setFlow("DOWN");C30.setManage(C29);C30.setParent(C1);
C30.setRow(C6);C30.setSizing("FITTOWIDTH");C30.setColumnSpan(2);C30.iC();C31.setCaption("City");C31.setDisplayPosition(9);C31.setEllipses("WORD");C31.setLeft(120);C31.setParent(this);C31.setTabPosition(9);C31.setTabStop(false);C31.setTop(122);C31.setVerticalAlignment("CENTER");C31.setHeight(24);C31.setWidth(160);C31.setVisible(false);C31.iC();C32.setAlignment("TOPLEFT");C32.setColumn(C9);C32.setFlow("DOWN");C32.setManage(C31);C32.setParent(C1);C32.setRow(C6);C32.setSizing("FITTOWIDTH");C32.setColumnSpan(2);
C32.iC();C33.setCaption("State");C33.setDisplayPosition(10);C33.setEllipses("WORD");C33.setLeft(120);C33.setParent(this);C33.setTabPosition(10);C33.setTabStop(false);C33.setTop(146);C33.setVerticalAlignment("CENTER");C33.setHeight(24);C33.setWidth(160);C33.setVisible(false);C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C9);C34.setFlow("DOWN");C34.setManage(C33);C34.setParent(C1);C34.setRow(C6);C34.setSizing("FITTOWIDTH");C34.setColumnSpan(2);C34.iC();C35.setCaption("PostCode");C35.setDisplayPosition(11);
C35.setEllipses("WORD");C35.setLeft(120);C35.setParent(this);C35.setTabPosition(11);C35.setTabStop(false);C35.setTop(170);C35.setVerticalAlignment("CENTER");C35.setHeight(24);C35.setWidth(160);C35.setVisible(false);C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C9);C36.setFlow("DOWN");C36.setManage(C35);C36.setParent(C1);C36.setRow(C6);C36.setSizing("FITTOWIDTH");C36.setColumnSpan(2);C36.iC();C37.iC();C20.aH("CLICK",this,e1);this.setDisplayPosition(1);this.setHeight(194);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(537);this.setLayoutManager(C1);this.setThemeDrawStyle("ListItem");}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",46);var P0=r.cPD("TREEITEM");P0=p0;var C0=r.cD("C0");r.ln=46;{r.ln=50;C0=r.sR("C0",l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=52;m.GEMPLOYEENAME.set(l.s.Substitute("&1 &2 (&3)",C0.getGIVENNAME(),C0.getSURNAME(),C0.getID()));r.ln=53;m.GDEPARTMENT.set(l.s.Substitute("&1 (&2)",C0.getDEPARTMENT().getDESCRIPTION(),C0.getDEPARTMENTCODE()));
r.ln=54;m.IMAGE.setImage(C0.getTHUMBNAIL());r.ln=56;m.GSTREET.set(C0.getSTREET());r.ln=57;m.GCITY.set(C0.getCITY());r.ln=58;m.GSTATE.set(C0.getSTATE());r.ln=59;m.GPOSTCODE.set(C0.getPOSTCODE());r.ln=61;if(l.d.IsNotSqlNull(C0.getTERMINATIONDATE())){r.ln=63;m.GSTARTDATE.set(l.s.Substitute("No longer employed - &1",l.d.AsDisplayString(C0.getTERMINATIONDATE(),"DDSMMSCCYY")));r.ln=64;m.GSTARTDATE.setThemeDrawStyle("POOR");}else{r.ln=68;m.GSTARTDATE.set(l.s.Substitute("Joined - &1",l.d.AsDisplayString(C0.getSTARTDATE(),"DDSMMSCCYY")));
r.ln=69;m.GSTARTDATE.setThemeDrawStyle("GOOD");}}r.ln=73;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MoreLess.Click",75);r.ln=75;{r.ln=77;m.GSTREET.setVisible(l.not(m.GEXPANDED.get()));m.GCITY.setVisible(l.not(m.GEXPANDED.get()));m.GSTATE.setVisible(l.not(m.GEXPANDED.get()));m.GPOSTCODE.setVisible(l.not(m.GEXPANDED.get()));m.LABEL.setVisible(l.not(m.GEXPANDED.get()));m.LABEL_2.setVisible(l.not(m.GEXPANDED.get()));r.ln=78;m.GEXPANDED.set(l.not(m.GEXPANDED.get()));r.ln=80;if(l.tB(m.GEXPANDED.get()))
{r.ln=81;m.MORELESS.setCaption("hide details");}else{r.ln=83;m.MORELESS.setCaption("show details");}}r.ln=86;r.e();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_IMAG","PRIM_TBLO.Item","PRIM_LABL","PRIM_BOLN","PRIM_DTIM"],dc:["XDEMO_32"]});