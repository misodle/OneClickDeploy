﻿LANSA.addComponent({id:"XEPEDIT",nm:"XEPEditor",ot:"rp",tp:"Reusable Part",de:"Employee Editor",tl:14020001},function(l,oI,u){var rc1=l.cB("xepbm008.png");var rc2=l.cB("xepbm009.png");var rc3=l.cB("xepbm007.png");var cO=l.rC(oI,{an:"PRIM_PANL",pt:{CurrentEmployee:{da:"r"}},mt:{AddEmployee:{},EditEmployee:{ps:{"Employee":{pt:"i"}}}},ev:{EditCompleted:{},EditCancelled:{},EditFailed:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE_WHITEBACKGROUND","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");
var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("ROW2","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C9=this.cR("PANELHEADINGITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C11=this.cR("PANELHEADING","PRIM_PANL");var C12=this.cR("LABELHEADING","PRIM_LABL");
var C13=this.cR("IMAGECANCEL","PRIM_IMAG");var C14=this.cR("IMAGECAMERA","PRIM_WEB","FilePicker");var C15=this.cR("IMAGECOMPLETE","PRIM_IMAG");var C16=this.cR("EMPLOYEEEDITOR","XEPDTLS");this.cD("CURRENTEMPLOYEE");C0.setNormBackColor("WHITE");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.setHeight(48);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(2);C4.setParent(C1);C4.iC();C5.setAlignment("CENTERLEFT");C5.setColumn(C2);C5.setParent(C1);
C5.setRow(C3);C5.iC();C6.setColumn(C2);C6.setManage(C16);C6.setParent(C1);C6.setRow(C4);C6.iC();C7.setColumn(C2);C7.setManage(C15);C7.setParent(C1);C7.setRow(C3);C7.setSizing("FITTOHEIGHT");C7.setAlignment("TOPRIGHT");C7.setFlow("LEFT");C7.iC();C8.setColumn(C2);C8.setParent(C1);C8.setRow(C3);C8.setSizing("FITTOHEIGHT");C8.setAlignment("TOPRIGHT");C8.setFlow("LEFT");C8.setManage(C14);C8.iC();C9.setColumn(C2);C9.setManage(C11);C9.setParent(C1);C9.setRow(C3);C9.iC();C10.setColumn(C2);C10.setManage(C13);
C10.setParent(C1);C10.setRow(C3);C10.setSizing("FITTOHEIGHT");C10.setAlignment("CENTERLEFT");C10.setFlow("RIGHT");C10.iC();C11.setDisplayPosition(2);C11.setHeight(48);C11.setLeft(0);C11.setParent(this);C11.setTabPosition(1);C11.setTabStop(false);C11.setTop(0);C11.setWidth(500);C11.setThemeDrawStyle("MediumTitle");C11.setLayoutManager(C1);C11.iC();C12.setDisplayPosition(4);C12.setEllipses("WORD");C12.setHeight(48);C12.setLeft(0);C12.setParent(C11);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(0);
C12.setVerticalAlignment("CENTER");C12.setWidth(500);C12.setThemeDrawStyle("Heading1+MediumTitle");C12.setMarginLeft(50);C12.setCaption("New Employee");C12.iC();C13.setDisplayPosition(3);C13.setLeft(0);C13.setParent(C11);C13.setTabStop(false);C13.setTop(0);C13.setHeight(48);C13.setTabPosition(2);C13.setImage(rc1);C13.setWidth(48);C13.iC();C14.setDisplayPosition(2);C14.setLeft(404);C14.setParent(C11);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(0);C14.setHeight(48);C14.setWidth(48);C14.setImage(rc2);
C14.setAlignment("CENTER");C14.setVerticalAlignment("CENTER");C14.iC();C15.setDisplayPosition(1);C15.setLeft(452);C15.setParent(C11);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(0);C15.setHeight(48);C15.setWidth(48);C15.setImage(rc3);C15.iC();C16.setHeight(521);C16.setParent(this);C16.setTabPosition(2);C16.setTabStop(false);C16.setTop(48);C16.iC();C13.aH("CLICK",this,e1);C14.aH("FILESELECTED",this,e2);C15.aH("CLICK",this,e3);C16.aH("SAVESUCCEEDED",this,e4);C16.aH("SAVEFAILED",this,e5);this.setDisplayPosition(1);
this.setHeight(569);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C1);this.setStyle(C0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ImageCancel.Click",47);r.ln=47;{r.ln=49;this.fE("EDITCANCELLED");r.ln=51;this.srCURRENTEMPLOYEE(null);}r.ln=53;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ImageCamera.FileSelected",55);var P0=Ps.r("FILE");r.ln=55;{r.ln=57;m.EMPLOYEEEDITOR.mthUPDATEEMPLOYEEIMAGE(P0.getBlob());}r.ln=59;r.e();
};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ImageComplete.Click",61);r.ln=61;{r.ln=63;this.setEnabled(false);r.ln=65;m.EMPLOYEEEDITOR.mthSAVEEMPLOYEE(m.CURRENTEMPLOYEE);}r.ln=67;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeEditor.SaveSucceeded",69);r.ln=69;{r.ln=71;this.setEnabled(true);r.ln=73;this.fE("EDITCOMPLETED");r.ln=75;this.srCURRENTEMPLOYEE(null);}r.ln=77;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#EmployeeEditor.SaveFailed",79);r.ln=79;{r.ln=81;
this.setEnabled(true);r.ln=83;this.fE("EDITFAILED");}r.ln=85;r.e();};cO.mthADDEMPLOYEE=function(){var m=this.REF,r=l.mR(this,cO,"AddEmployee",91);r.ln=91;{r.ln=93;m.LABELHEADING.set("New Employee");r.ln=95;this.srCURRENTEMPLOYEE(m.EMPLOYEEEDITOR.mthADDEMPLOYEE());}r.ln=97;r.e();};cO.mthEDITEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"EditEmployee",99);var P0=r.cPD("EMPLOYEE");P0=p0;r.ln=99;{r.ln=102;this.srCURRENTEMPLOYEE(P0);r.ln=104;m.LABELHEADING.set("Edit Employee");r.ln=106;m.EMPLOYEEEDITOR.mthEDITEMPLOYEE(m.CURRENTEMPLOYEE);
}r.ln=108;r.e();};cO.getCURRENTEMPLOYEE=function(){return this.REF.CURRENTEMPLOYEE;};cO.srCURRENTEMPLOYEE=function(rn){this.sR("CURRENTEMPLOYEE",rn);};},{rc:["XEPDTLS"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_WEB.FilePicker"],dc:["XEPDATA"]});