﻿LANSA.addComponent({id:"XDOMAINS",nm:"xDOEmployeeList",ot:"rp",tp:"Reusable Part",de:"Employee List Screen",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",mt:{PopulateEmployeeList:{},RefreshEmployeeList:{}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C5=this.cR("EMPLOYEELIST","PRIM_TREE");
var C6=this.cR("NEWBUTTON","PRIM_PHBN");var C7=this.cA("GAPPLICATION","XDOAPP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setParent(C0);C3.setRow(C2);C3.setColumn(C1);C3.setFlow("DOWN");C3.setManage(C5);C3.iC();C4.setManage(C6);C4.setParent(C0);C4.setRow(C2);C4.setSizing("NONE");C4.setColumn(C1);C4.setAlignment("BOTTOMRIGHT");C4.setMarginRight(15);C4.setMarginBottom(15);C4.iC();C5.setDisplayPosition(2);C5.setHeight(561);C5.setLeft(0);
C5.setParent(this);C5.setTabPosition(2);C5.setTop(0);C5.setWidth(500);C5.iC();C6.setWidth(60);C6.setHeight(60);C6.setParent(this);C6.setDisplayPosition(1);C6.setTabPosition(1);C6.setTop(486);C6.setLeft(425);C6.setCaption("+");C6.setThemeDrawStyle("floatingButton");C6.iC();if((C7!=null)&&(C7.iI()==false)){C7.iC();}C5.aH("ITEMCLICK",this,e5);C6.aH("CLICK",this,e6);C7.aH("EMPLOYEESLOADED",this,e2);C7.aH("EMPLOYEEADDED",this,e3);C7.aH("SEARCHSTRINGCHANGED",this,e4);C7.aH("EMPLOYEESAVED",this,e4);C5.aDS("XDOEMPCD");
C5.aLF({});this.setHeight(561);this.setLayoutManager(C0);this.setComponentTag("MAIN");this.setWidth(500);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",22);r.ln=22;{r.ln=24;this.setImage(l.WEB().getLoadingImage());}r.ln=26;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeesLoaded",28);r.ln=28;{r.ln=30;this.mthPOPULATEEMPLOYEELIST();
r.ln=32;m.EMPLOYEELIST.mthSORT("SURNAME",u);r.ln=34;this.setImage(null);}r.ln=36;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeAdded",38);var P0=Ps.r("EMPLOYEE");r.ln=38;{r.ln=40;m.EMPLOYEELIST.addEntry();r.ln=42;m.EMPLOYEELIST.getCurrentItem().setRelatedReference(P0);r.ln=44;m.EMPLOYEELIST.mthSORT("SURNAME",u);}r.ln=46;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#gApplication.SearchStringChanged #gApplication.EmployeeSaved",48);r.ln=48;{r.ln=50;this.mthREFRESHEMPLOYEELIST();
}r.ln=52;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeList.ItemClick",54);r.ln=54;{r.ln=56;l.WEB().getHistory().mthADD(l.cat("screen=DETAIL&employee=",l.cast(m.EMPLOYEELIST.getCurrentItem().getRelatedReference(),"XDOEMP").getIDENTIFIER()));}r.ln=58;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#NewButton.Click",60);r.ln=60;{r.ln=62;l.WEB().getHistory().mthADD("screen=NEW");}r.ln=64;r.e();};cO.mthPOPULATEEMPLOYEELIST=function(){var m=this.REF,r=l.mR(this,cO,"PopulateEmployeeList",70);
r.ln=70;{r.ln=72;m.EMPLOYEELIST.clearList();r.ln=74;{var l1=m.GAPPLICATION.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=76;m.EMPLOYEELIST.addEntry();r.ln=78;m.EMPLOYEELIST.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=80;}l1.end();r.dR("EMPLOYEE");}}r.ln=82;r.e();};cO.mthREFRESHEMPLOYEELIST=function(){var m=this.REF,r=l.mR(this,cO,"RefreshEmployeeList",84);r.ln=84;{r.ln=86;{var l1=m.EMPLOYEELIST.selectList();while(l1.step()){r.ln=88;if((l.s.eq(m.GAPPLICATION.ref.getCURRENTSEARCHSTRING(),"")||l.s.Contains(l.s.UpperCase(l.cast(m.EMPLOYEELIST.getCurrentItem().getRelatedReference(),"XDOEMP").getFULLNAME()),l.s.UpperCase(m.GAPPLICATION.ref.getCURRENTSEARCHSTRING()))))
{r.ln=90;m.EMPLOYEELIST.getCurrentItem().setVisible(true);}else{r.ln=94;m.EMPLOYEELIST.getCurrentItem().setVisible(false);}r.ln=98;}l1.end();}}r.ln=100;r.e();};},{rc:["XDOAPP"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_TREE","PRIM_PHBN"],dc:["XDOEMPCD"]});