﻿LANSA.addComponent({id:"XDTOOLSC",nm:"xDToolsCountryDropdown",ot:"rp",tp:"Reusable Part",de:"Country Dropdown",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSCNTRYNM",an:"XSCountryName",ft:"C",ln:100,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"XDTOOLSP",fd:Fd,mt:{Prepare:{},PositionTo:{ps:{"Country":{pt:"i"}}}},ev:{ItemSelected:{ps:{"Country":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDTOOLSC",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("COUNTRIESITEM1","PRIM_TBLO","Item");var C4=this.cR("COUNTRIES","PRIM_LIST","DropDown");
var C5=this.cR("DROPDOWNCOLUMN1","PRIM_LIST","String");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPLEFT");C3.setColumn(C1);C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.iC();C4.setColumnHeaderHeight(0);C4.setColumnLines(false);C4.setDisplayPosition(1);C4.setLeft(0);C4.setParent(this);C4.setRowLines(false);C4.setShowSelection(false);C4.setTabPosition(1);C4.setTop(0);C4.setDropDownStyle("DROPDOWN");C4.setWidth(489);
C4.setRowHeight(25);C4.setHeight(33);C4.iC();C5.setColumnResize(false);C5.setColumnUnits("PROPORTION");C5.setColumnWidth(1);C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F1);C5.iC();C4.aH("ITEMGOTSELECTION",this,e2);this.REF.GDATAMODEL.ref.aH("PREPARED",this,e1);this.setHeight(33);this.setWidth(489);this.setLayoutManager(C0);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gDataModel.Prepared",15);r.ln=15;{r.ln=17;this.mthPREPARE();}r.ln=19;r.e();};cO.mthPREPARE=function(){var f=this.FLD.XDTOOLSC,m=this.REF,r=l.mR(this,cO,"Prepare",21);
r.ln=21;{r.ln=23;{var l1=this.REF.GDATAMODEL.ref.getCOUNTRIES().cI();while(l1.step()){var COUNTRY=r.sR("COUNTRY",l1.item());r.ln=25;f.F1.set(COUNTRY.getCOUNTRYNAME());r.ln=26;m.COUNTRIES.addEntry();r.ln=27;m.COUNTRIES.getCurrentItem().setRelatedReference(COUNTRY);r.ln=29;}l1.end();r.dR("COUNTRY");}}r.ln=31;r.e();};cO.mthPOSITIONTO=function(p0){var f=this.FLD.XDTOOLSC,m=this.REF,r=l.mR(this,cO,"PositionTo",33);var P0=r.cPF("COUNTRY",Fd.F1.Dc);P0.set(p0);r.ln=33;{r.ln=36;{var l1=m.COUNTRIES.selectList();
while(l1.step()){r.ln=37;if(l.s.ne(f.F1.get(),P0.get())){continue;}r.ln=38;m.COUNTRIES.getCurrentItem().setFocus(true);r.ln=39;break;r.ln=40;}l1.end();}}r.ln=42;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Countries.ItemGotSelection",44);r.ln=44;{r.ln=46;{var eP=l.ePs();eP.cD("COUNTRY");eP.sR("COUNTRY",l.cast(m.COUNTRIES.getCurrentItem().getRelatedReference(),"XDTOO_24"));this.fE("ITEMSELECTED",eP);eP.e();}}r.ln=48;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSCNTRYNM"});
}},{rc:["XDTOOLSP"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_FLD"]});