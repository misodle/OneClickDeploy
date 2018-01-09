﻿LANSA.addComponent({id:"XDEMOW_6",nm:"xDemoWebListAddressFields",ot:"rp",tp:"Reusable Part",de:"Address Using Field Values Cell",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_LIST.IListCellDesign"],fd:Fd,mt:{OnAdd:{ps:{"ListItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_6",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW1","PRIM_TBLO","Row");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("GADDRESS","PRIM_LABL");var C4=this.cR("LAYOUTITEM","PRIM_TBLO","Item");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setCaption("<text>");C3.setDisplayPosition(1);C3.setEllipses("END");C3.setLeft(0);C3.setParent(this);C3.setTabPosition(1);C3.setTabStop(false);C3.setTop(0);C3.setHeight(68);C3.setWidth(217);C3.setVerticalAlignment("CENTER");C3.setMarginLeft(2);C3.setMarginRight(2);C3.iC();C4.setAlignment("TOPLEFT");C4.setColumn(C2);C4.setFlow("DOWN");C4.setManage(C3);C4.setParent(C0);C4.setRow(C1);C4.setRowSpan(3);
C4.iC();this.setDisplayPosition(1);this.setHeight(68);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(217);this.setLayoutManager(C0);this.aLF({"XSTREET":f.F1,"XCITY":f.F2,"XSTATE":f.F3,"XPOSTCODE":f.F4});}});cO.mthONADD=function(p0){var f=this.FLD.XDEMOW_6,m=this.REF,r=l.mR(this,cO,"OnAdd",11);var P0=r.cPD("LISTITEM");P0=p0;r.ln=11;{r.ln=13;m.GADDRESS.set(l.s.Substitute("&1, &2, &3, &4",f.F1.get(),f.F2.get(),f.F3.get(),f.F4.get()));}r.ln=15;r.e();};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LABL","PRIM_TBLO.Item"]
});