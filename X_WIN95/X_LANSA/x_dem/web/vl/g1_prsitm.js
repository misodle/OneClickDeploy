﻿LANSA.addComponent({id:"G1_PRSITM",nm:"G1_PersonItem",ot:"rp",tp:"Reusable Part",de:"Person Item",tl:14020001},function(l,oI,u){var rc1=l.cB("ximageemp.png");var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],mt:{OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}},RefreshDetails:{},RefreshTasks:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE_AVATAR","PRIM_VS","Style");var C1=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C2=this.cR("STYLEPRESSED","PRIM_VS","Style");var C3=this.cR("BRUSH7","PRIM_VS","SolidBrush");
var C4=this.cR("STYLENOTPRESSED","PRIM_VS","Style");var C5=this.cR("BRUSH8","PRIM_VS","SolidBrush");var C6=this.cR("STYLE_TASKS","PRIM_VS","Style");var C7=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C8=this.cR("LAYOUT_MAIN","PRIM_TBLO");var C9=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C10=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C11=this.cR("ROW2MAIN","PRIM_TBLO","Row");var C12=this.cR("LAYOUTITEM1MAIN","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM2MAIN","PRIM_TBLO","Item");var C14=this.cR("LAYOUT_PERSON","PRIM_TBLO");
var C15=this.cR("COLUMN1","PRIM_TBLO","Column");var C16=this.cR("COLUMN2","PRIM_TBLO","Column");var C17=this.cR("COLUMN3","PRIM_TBLO","Column");var C18=this.cR("COLUMN4","PRIM_TBLO","Column");var C19=this.cR("COLUMN5","PRIM_TBLO","Column");var C20=this.cR("ROW1","PRIM_TBLO","Row");var C21=this.cR("ROW2","PRIM_TBLO","Row");var C22=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C26=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C27=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C28=this.cR("PANELPERSON","PRIM_PANL");var C29=this.cR("PERSONNAME","PRIM_LABL");var C30=this.cR("PERSONSTATUS","PRIM_LABL");var C31=this.cR("PERSONIMAGE","PRIM_IMAG");var C32=this.cR("SHOWACTIVETASKS","PRIM_MD","Label");var C33=this.cR("SHOWCOMPLETEDTASKS","PRIM_MD","Label");var C34=this.cR("TASKLIST","PRIM_TREE");this.cD("PERSON");var C36=this.cA("DATA","G1_DATA");C0.setCornerBottomLeft(30);C0.setCornerBottomRight(30);
C0.setCornerTopLeft(30);C0.setCornerTopRight(30);C0.setBackgroundBrush(C1);C0.iC();C1.setColor("207:207:207");C1.iC();C2.setForegroundBrush(C3);C2.iC();C3.setColor("THEME700");C3.iC();C4.setForegroundBrush(C5);C4.iC();C5.setColor("THEMESECONDARYTEXT");C5.setOpacity(80);C5.iC();C6.setBackgroundBrush(C7);C6.iC();C7.setColor("THEME50");C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);C10.setHeight(72);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(2);
C11.setParent(C8);C11.iC();C12.setColumn(C9);C12.setManage(C28);C12.setParent(C8);C12.setRow(C10);C12.iC();C13.setColumn(C9);C13.setManage(C34);C13.setParent(C8);C13.setRow(C11);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.setUnits("PIXELS");C15.setWidth(16);C15.iC();C16.setDisplayPosition(2);C16.setParent(C14);C16.setUnits("PIXELS");C16.setWidth(56);C16.iC();C17.setDisplayPosition(3);C17.setParent(C14);C17.setWidth(20);C17.iC();C18.setDisplayPosition(4);C18.setParent(C14);C18.setMinWidth(62);
C18.iC();C19.setDisplayPosition(5);C19.setParent(C14);C19.setMinWidth(10);C19.iC();C20.setDisplayPosition(1);C20.setParent(C14);C20.setHeight(72);C20.setUnits("PIXELS");C20.iC();C21.setDisplayPosition(2);C21.setParent(C14);C21.iC();C22.setColumn(C17);C22.setManage(C30);C22.setParent(C14);C22.setRow(C20);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setFlow("CENTERVERTICAL");C22.iC();C23.setColumn(C17);C23.setManage(C29);C23.setParent(C14);C23.setRow(C20);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setFlow("CENTERVERTICAL");
C23.iC();C24.setAlignment("CENTERRIGHT");C24.setColumn(C18);C24.setManage(C32);C24.setParent(C14);C24.setRow(C20);C24.setSizing("NONE");C24.setFlow("LEFT");C24.iC();C25.setAlignment("CENTERLEFT");C25.setColumn(C16);C25.setManage(C31);C25.setParent(C14);C25.setRow(C20);C25.setSizing("NONE");C25.iC();C26.setAlignment("CENTERRIGHT");C26.setColumn(C18);C26.setManage(C33);C26.setParent(C14);C26.setRow(C20);C26.setSizing("NONE");C26.setFlow("LEFT");C26.setMarginLeft(10);C26.iC();C27.setColumn(C15);C27.setManage(C34);
C27.setParent(C14);C27.setRow(C21);C27.setColumnSpan(4);C27.setSizing("FITTOWIDTH");C27.setAlignment("TOPCENTER");C27.iC();C28.setDisplayPosition(2);C28.setLeft(0);C28.setParent(this);C28.setTabPosition(2);C28.setTabStop(false);C28.setTop(0);C28.setHeight(72);C28.setWidth(609);C28.setLayoutManager(C14);C28.setThemeDrawStyle("ListItem+BottomDivider");C28.iC();C29.setCaption("Briar Coleman");C29.setDisplayPosition(2);C29.setEllipses("END");C29.setHeight(19);C29.setLeft(72);C29.setParent(C28);C29.setTabPosition(2);
C29.setTabStop(false);C29.setVerticalAlignment("CENTER");C29.setWidth(453);C29.setTop(18);C29.setWordWrap(false);C29.setThemeDrawStyle("Heading3");C29.iC();C30.setCaption("1 task, completed");C30.setDisplayPosition(3);C30.setEllipses("WORD");C30.setHeight(17);C30.setLeft(72);C30.setParent(C28);C30.setTabPosition(1);C30.setTabStop(false);C30.setVerticalAlignment("CENTER");C30.setWidth(453);C30.setTop(37);C30.setThemeDrawStyle("ForegroundSecondary");C30.iC();C31.setDisplayPosition(5);C31.setHeight(40);
C31.setLeft(16);C31.setParent(C28);C31.setTabPosition(3);C31.setTabStop(false);C31.setTop(16);C31.setWidth(40);C31.setImageSizing("CROPPED");C31.setStyle(C0);C31.setImage(rc1);C31.iC();C32.setDisplayPosition(4);C32.setLeft(529);C32.setParent(C28);C32.setTabPosition(5);C32.setTabStop(false);C32.setHeight(24);C32.setTop(24);C32.setWidth(24);C32.setIcon("assignment");C32.setStyle(C4);C32.iC();C33.setDisplayPosition(1);C33.setLeft(563);C33.setParent(C28);C33.setTabPosition(4);C33.setTabStop(false);C33.setHeight(24);
C33.setTop(24);C33.setWidth(24);C33.setIcon("assignment_turned_in");C33.setStyle(C4);C33.iC();C34.setParent(this);C34.setDisplayPosition(1);C34.setTabPosition(1);C34.setLeft(0);C34.setHeight(216);C34.setWidth(609);C34.setTop(72);C34.setStyle(C6);C34.iC();if((C36!=null)&&(C36.iI()==false)){C36.iC();}C32.aH("CLICK",this,e3);C33.aH("CLICK",this,e3);C34.aDS("G1_TSKITM");C34.aLF({});this.setDisplayPosition(1);this.setHeight(288);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(609);
this.setLayoutManager(C8);this.aH("CREATEINSTANCE",this,e1);this.aH("CLICK",this,e2);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",58);r.ln=58;{r.ln=60;this.setHeight(72);}r.ln=62;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Click",64);var C0=r.cR("PERSONDETAILDIALOG","G1_PRSDTL");C0.iC();r.ln=64;{r.ln=68;C0.mthSHOWDETAIL(m.PERSON);}r.ln=70;r.e();};function e3(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#ShowActiveTasks.Click #ShowCompletedTasks.Click",72);
var P0=Ps.r("HANDLED");r.ln=72;{r.ln=74;P0.set(true);r.ln=76;if((SENDER.getStyle()===m.STYLENOTPRESSED)){r.ln=78;SENDER.setStyle(m.STYLEPRESSED);}else{r.ln=82;SENDER.setStyle(m.STYLENOTPRESSED);}r.ln=86;this.mthREFRESHTASKS();}r.ln=88;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Person.Changed",90);r.ln=90;{r.ln=92;this.mthREFRESHDETAILS();r.ln=94;this.mthREFRESHTASKS();}r.ln=96;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",102);var P0=r.cPD("TREEITEM");
P0=p0;r.ln=102;{r.ln=104;this.srPERSON(l.cast(P0.getRelatedReference(),"G1_PERS"));r.ln=106;this.mthREFRESHDETAILS();}r.ln=108;r.e();};cO.mthREFRESHDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"RefreshDetails",110);r.ln=110;{r.ln=112;m.PERSONIMAGE.setImage(m.PERSON.getIMAGE());r.ln=113;m.PERSONNAME.set(m.PERSON.getFULLNAME());r.ln=114;m.PERSONSTATUS.set(m.PERSON.getSTATUSTEXT());r.ln=116;m.SHOWACTIVETASKS.setVisible(l.n.gt(m.PERSON.getACTIVETASKCOUNT(),0));r.ln=117;m.SHOWCOMPLETEDTASKS.setVisible(l.n.gt(m.PERSON.getCOMPLETEDTASKCOUNT(),0));
}r.ln=119;r.e();};cO.mthREFRESHTASKS=function(){var m=this.REF,r=l.mR(this,cO,"RefreshTasks",121);r.ln=121;{r.ln=123;m.TASKLIST.clearList();r.ln=125;if((m.SHOWACTIVETASKS.getStyle()===m.STYLEPRESSED)){r.ln=127;{var l1=m.PERSON.getACTIVETASKS().cI();while(l1.step()){var TASK=r.sR("TASK",l1.item());r.ln=129;m.TASKLIST.addEntry();r.ln=131;m.TASKLIST.getCurrentItem().setRelatedReference(TASK);r.ln=133;}l1.end();r.dR("TASK");}}r.ln=137;if((m.SHOWCOMPLETEDTASKS.getStyle()===m.STYLEPRESSED)){r.ln=139;{var l1=m.PERSON.getCOMPLETEDTASKS().cI();
while(l1.step()){var TASK=r.sR("TASK",l1.item());r.ln=141;m.TASKLIST.addEntry();r.ln=143;m.TASKLIST.getCurrentItem().setRelatedReference(TASK);r.ln=145;}l1.end();r.dR("TASK");}}r.ln=149;this.setHeight(l.add(72,l.mul(m.TASKLIST.getItems().getItemCount(),72)));}r.ln=151;r.e();};cO.srPERSON=function(rn){if(this.REF.PERSON!=null){this.REF.PERSON.rH("CHANGED",this,e4);}this.sR("PERSON",rn);if(this.REF.PERSON!=null){this.REF.PERSON.aH("CHANGED",this,e4);}};},{rc:["G1_DATA"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_MD.Label","PRIM_TREE"],
dc:["G1_PERS","G1_PRSDTL","G1_TSKITM"]});