﻿LANSA.addComponent({id:"XDEMOW_30",nm:"xDemoWebImageDownload",ot:"wp",tp:"Web Page",de:"Image Multiple DownLoad",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximaged_3.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Download:{}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_30",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");
var C3=this.cR("TABLELAYOUT","PRIM_TBLO");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("LIST","PRIM_LIST");var C7=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");var C8=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C9=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C10=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C11=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C12=this.cR("COLUMNIMAGE","PRIM_LIST","Image");var C13=this.cR("COLUMNDOWNLOAD","PRIM_LIST","Button");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setBackgroundBrush(C2);C1.setCornerTopLeft(3);C1.setCornerBottomLeft(3);C1.setCornerTopRight(3);C1.setCornerBottomRight(3);C1.iC();C2.setColor("214:214:214");C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);C5.setParent(C3);C5.iC();C6.setDisplayPosition(1);C6.setHeight(800);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTop(0);C6.setWidth(1200);C6.setRowHeight(37);C6.setRowResize(true);C6.setSelectionStyle("ALL");
C6.setRowLines(false);C6.setColumnLines(false);C6.iC();C7.setColumnWidth(100);C7.setDisplayPosition(2);C7.setParent(C6);C7.setSource(f.F1);C7.iC();C8.setColumnWidth(112);C8.setDisplayPosition(3);C8.setParent(C6);C8.setSource(f.F2);C8.iC();C9.setColumnWidth(302);C9.setDisplayPosition(4);C9.setParent(C6);C9.setSource(f.F3);C9.iC();C10.setColumnWidth(302);C10.setDisplayPosition(5);C10.setParent(C6);C10.setSource(f.F4);C10.iC();C11.setColumn(C4);C11.setManage(C6);C11.setParent(C3);C11.setRow(C5);C11.iC();
C12.setColumnWidth(50);C12.setDisplayPosition(1);C12.setParent(C6);C12.setImageSizing("BESTFIT");C12.setCellMarginBottom(2);C12.setCellMarginLeft(2);C12.setCellMarginRight(2);C12.setCellMarginTop(2);C12.iC();C13.setColumnWidth(113);C13.setDisplayPosition(6);C13.setParent(C6);C13.setImage(rc1);C13.setCaption("Download");C13.setCellSizing("NONE");C13.setCellWidth(100);C13.setStyle(C1);C13.setColumnCaption("DownLoad");C13.setVisible(false);C13.iC();C0.aH("PREPARED",this,e1);C6.aH("ITEMMOUSEENTER",this,e3);
C6.aH("ITEMMOUSELEAVE",this,e4);C13.aH("CLICK",this,e2);this.setLayoutManager(C3);}});function e1(sender,Ps){var f=this.FLD.XDEMOW_30,m=this.REF,r=l.eR(this,cO,"#gData.Prepared",28);r.ln=28;{r.ln=31;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=34;f.F1.set(EMPLOYEE.getID());r.ln=35;f.F2.set(EMPLOYEE.getTITLE());r.ln=36;f.F3.set(EMPLOYEE.getSURNAME());r.ln=37;f.F4.set(EMPLOYEE.getGIVENNAME());r.ln=39;m.LIST.addEntry();r.ln=42;m.COLUMNIMAGE.getCurrentItem().setImage(EMPLOYEE.getTHUMBNAIL());
r.ln=44;m.COLUMNDOWNLOAD.getCurrentItem().setVisible(false);r.ln=45;m.COLUMNDOWNLOAD.getCurrentItem().setHint("Download Image");r.ln=47;}l1.end();r.dR("EMPLOYEE");}}r.ln=49;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ColumnDownload.Click",51);r.ln=51;{r.ln=53;this.mthDOWNLOAD();}r.ln=55;r.e();};cO.mthDOWNLOAD=function(){var f=this.FLD.XDEMOW_30,r=l.mR(this,cO,"Download",57);var C0=r.cRR("IMAGEDOWNLOAD","XDEMOW_84","DOWNLOADIMAGE");C0.iC();r.ln=57;{r.ln=61;C0.mthEXECUTE({FLD:{"XEMPLOYID":f.F1.get()}},{});
}r.ln=63;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemMouseEnter",65);r.ln=65;{r.ln=67;m.COLUMNDOWNLOAD.getCurrentItem().setVisible(true);}r.ln=69;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemMouseLeave",71);r.ln=71;{r.ln=73;m.COLUMNDOWNLOAD.getCurrentItem().setVisible(false);}r.ln=75;r.e();};{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");
var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");
};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}},{rc:["XDEMO_30"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_LIST","PRIM_LIST.String","PRIM_TBLO.Item","PRIM_LIST.Image","PRIM_LIST.Button","PRIM_WEB.ResourceRequest","PRIM_PKLT"]});