﻿LANSA.addComponent({id:"XDEMOW_44",nm:"xDemoWebUDCTreeOnDemand",ot:"wp",tp:"Web Page",de:"UDC On Demand",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",mt:{AddDepartments:{},AddDepartment:{ps:{"Department":{pt:"i"}}},AddDepartmentEmployees:{ps:{"ParentItem":{pt:"i"}}},AddEmployee:{ps:{"Employee":{pt:"i"},"ParentItem":{pt:"i"}}},HandleExpand:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");
var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("COLUMN3","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("TREE","PRIM_TREE");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setWidth(200);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setWidth(200);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);
C5.setParent(C1);C5.iC();C6.setColumn(C3);C6.setManage(C7);C6.setParent(C1);C6.setRow(C5);C6.iC();C7.setDisplayPosition(1);C7.setHeight(800);C7.setLeft(200);C7.setParent(this);C7.setTabPosition(1);C7.setTop(0);C7.setWidth(800);C7.setNotificationStyle("PROGRAM");C7.iC();C0.aH("PREPARED",this,e1);C7.aH("ITEMEXPANDING",this,e2);C7.aDS("XDEMO_18");C7.aLF({});this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#gData.Prepared",15);r.ln=15;{r.ln=17;
this.mthADDDEPARTMENTS();}r.ln=19;r.e();};cO.mthADDDEPARTMENTS=function(){var m=this.REF,r=l.mR(this,cO,"AddDepartments",21);r.ln=21;{r.ln=23;{var l1=m.GDATA.ref.getDEPARTMENTS().cI();while(l1.step()){var DEPARTMENT=r.sR("DEPARTMENT",l1.item());r.ln=25;cO.mthADDDEPARTMENT.call(this,DEPARTMENT);r.ln=27;}l1.end();r.dR("DEPARTMENT");}}r.ln=29;r.e();};cO.mthADDDEPARTMENT=function(p0){var m=this.REF,r=l.mR(this,cO,"AddDepartment",31);var P0=r.cPD("DEPARTMENT");var P1=r.cPD("RESULT");P0=p0;r.ln=31;{r.ln=35;
P1=r.sR("P1",m.TREE.mthADD("XDEMO_28"));r.ln=37;P1.setRelatedReference(P0);}r.ln=39;return r.rR(P1);};cO.mthADDDEPARTMENTEMPLOYEES=function(p0){var r=l.mR(this,cO,"AddDepartmentEmployees",41);var P0=r.cPD("PARENTITEM");P0=p0;var C0=r.cD("C0");r.ln=41;{r.ln=46;C0=r.sR("C0",l.cast(P0.getRelatedReference(),"XDEMO_31"));r.ln=48;{var l1=C0.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=50;cO.mthADDEMPLOYEE.call(this,EMPLOYEE,P0);r.ln=52;}l1.end();r.dR("EMPLOYEE");}}r.ln=54;
r.e();};cO.mthADDEMPLOYEE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"AddEmployee",56);var P0=r.cPD("EMPLOYEE");var P1=r.cPD("PARENTITEM");P0=p0;P1=p1;r.ln=56;{r.ln=60;m.TREE.mthADD("XDEMO_35");r.ln=62;m.TREE.getCurrentItem().setRelatedReference(P0);r.ln=64;m.TREE.getCurrentItem().setParentItem(P1);}r.ln=66;r.e();};cO.mthHANDLEEXPAND=function(p0){var r=l.mR(this,cO,"HandleExpand",68);var P0=r.cPD("TREEITEM");P0=p0;r.ln=68;{r.ln=72;if(l.and(l.n.eq(P0.getItemCount(),0),l.n.eq(P0.getLevel(),1))){
r.ln=74;cO.mthADDDEPARTMENTEMPLOYEES.call(this,P0);}}r.ln=78;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Tree.ItemExpanding",80);var P0=Ps.r("ITEM");r.ln=80;{r.ln=82;cO.mthHANDLEEXPAND.call(this,P0);}r.ln=84;r.e();};},{rc:["XDEMO_30","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_TREE"],dc:["XDEMO_31","XDEMO_18"]});