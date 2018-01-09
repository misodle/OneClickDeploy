﻿LANSA.addComponent({id:"XDEMO_36",nm:"xDemoWebPassingWorkingListsListViewer",ot:"rp",tp:"Reusable Part",de:"List Viewer",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,mt:
{Show:{ps:{"Employees":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_36",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LIST1","PRIM_LIST");var C7=this.cR("COLUMNEMPTHM1","PRIM_LIST","Image");var C8=this.cR("COLUMNEMPNO1","PRIM_LIST","String");
var C9=this.cR("COLUMNSURNAME1","PRIM_LIST","String");var C10=this.cR("COLUMNGIVENAME1","PRIM_LIST","String");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME900");C1.setOpacity(30);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C3);C5.setManage(C6);C5.setParent(C2);C5.setRow(C4);C5.iC();C6.setDisplayPosition(1);C6.setHeight(377);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTop(30);C6.setWidth(655);
C6.setColumnLines(false);C6.setRowLines(false);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setSource(f.F1);C7.setColumnWidth(44);C7.setImageSizing("BESTFIT");C7.setCellMarginTop(2);C7.setCellMarginBottom(2);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setSource(f.F2);C8.setColumnWidth(97);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setSource(f.F3);C9.setColumnUnits("PROPORTION");C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setSource(f.F4);C10.setColumnUnits("PROPORTION");
C10.iC();this.setHeight(409);this.setLeft(0);this.setTop(0);this.setWidth(657);this.setLayoutManager(C2);this.setCloseButton(true);this.setTitleBar(true);this.setCaption("List Contents");this.setAutoClose(false);this.setShroudStyle(C0);}});cO.mthSHOW=function(p0){var m=this.REF,r=l.mR(this,cO,"Show",19);var P0=r.cPD("EMPLOYEES");P0=p0;r.ln=19;{r.ln=22;m.LIST1.clearList();r.ln=24;{var l1=P0.selectList();while(l1.step()){r.ln=26;m.LIST1.addEntry();r.ln=28;}l1.end();}r.ln=30;this.mthSHOWPOPUP(u,u,u,u,u);
}r.ln=32;r.e();};},{rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String"]});