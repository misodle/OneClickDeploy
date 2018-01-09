﻿LANSA.addComponent({id:"DF_T41F1O",ot:"rp",tp:"Reusable Part",de:"\\OC=Filter",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],dv:"",ia:["FE"]},F2:{nm:"XDEPTDESC",
an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明"}[cL],h3:" ",de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],
h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F4:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],
dv:"",ia:["FE"]},F5:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F6:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{},Search:{ps:{"uDeptment":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_T41F1O",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");
var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("DEPARTMENTSDD","PRIM_LIST","DropDown");var C3=this.cR("COLUMNDEPTMENT1","PRIM_LIST","String");var C4=this.cR("COLUMNDEPTDESC1","PRIM_LIST","String");var C5=this.cR("LABEL1","PRIM_LABL");C0.setManage(C2);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.iC();C1.setManage(C5);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("TOP");C1.iC();C2.setDisplayPosition(2);C2.setLeft(8);C2.setParent(this);C2.setTabPosition(1);
C2.setTop(38);C2.setHeight(25);C2.setWidth(273);C2.setColumnHeaderHeight(0);C2.setColumnLines(false);C2.setColumnSortArrow(false);C2.setRowLines(false);C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setSource(f.F1);C3.setColumnWidth(43);C3.setColumnCaptionType("CAPTION");C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setSource(f.F2);C4.setColumnWidth(121);C4.setColumnCaptionType("CAPTION");C4.iC();C5.setCaption("Select Department to Display Employees");C5.setDisplayPosition(1);C5.setEllipses("WORD");
C5.setHeight(30);C5.setLeft(8);C5.setParent(this);C5.setTabPosition(2);C5.setTabStop(false);C5.setTop(8);C5.setVerticalAlignment("CENTER");C5.setWidth(273);C5.iC();this.REF.MAINPANELATTACHMENTMANAGER.setMarginLeft(8);this.REF.MAINPANELATTACHMENTMANAGER.setMarginRight(8);this.REF.MAINPANELATTACHMENTMANAGER.setMarginTop(8);C2.aH("ITEMGOTSELECTION",this,e3);this.setHeight(223);this.setWidth(289);var li=this.aL("DF_T41F1O");li.DEPARTMENTS=l.cLT({"XDEPTMENT":f.F1,"XDEPTDESC":f.F2},null);li.XEMPLOYEELIST=l.cLT({"XEMPLOYID":f.F4,"XSURNAME":f.F5,"XGIVENAME":f.F6},f.F3);
}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var li=this.LIST.DF_T41F1O,m=this.REF,r=l.mR(this,cO,"uInitialize",42),mth=r;var C0=r.cDR("GETDEPARTMENTS","DF_T41DSO","GETDEPARTMENTS");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=42;{r.ln=45;C0.mthEXECUTEASYNC({},{LIST:{"DEPARTMENTS":li.DEPARTMENTS}});}r.ln=54;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#GetDepartments.Completed",47,mth);r.ln=47;{r.ln=48;m.DEPARTMENTSDD.clearList();r.ln=49;{var l1=li.DEPARTMENTS.selectList();while(l1.step())
{r.ln=50;m.DEPARTMENTSDD.addEntry();r.ln=51;}l1.end();}}r.ln=52;r.e();}};cO.mthSEARCH=function(p0){var li=this.LIST.DF_T41F1O,f=this.FLD.DF_T41F1O,r=l.mR(this,cO,"Search",56),mth=r;var P0=r.cPF("UDEPTMENT",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETDEPTEMPLOYEES","DF_T41DSO","GETDEPTEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=56;{r.ln=62;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=64;this.mthAVGOTOBUSYSTATE("Searching",false,u);r.ln=66;C0.mthEXECUTEASYNC({FLD:{"XDEPTMENT":P0.get()}},{LIST:{"XEMPLOYEELIST":li.XEMPLOYEELIST}});
}r.ln=88;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetDeptEmployees.Completed",68,mth);r.ln=68;{r.ln=70;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);r.ln=72;{var l1=li.XEMPLOYEELIST.selectList();while(l1.step()){r.ln=74;this.REF.AVLISTMANAGER.mthADDTOLIST(l.add(l.cat(f.F5.get()," "),f.F6.get()),f.F4.get(),f.F4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=77;}l1.end();}r.ln=80;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat("Found ",l.n.AsString(f.F3.get()))," employees in department "),f.F1.get()),u,u,this,u,u,u);
r.ln=83;this.mthAVGOTOFREESTATE();}r.ln=85;r.e();}};function e3(sender,Ps){var f=this.FLD.DF_T41F1O,r=l.eR(this,cO,"#DepartmentsDD.ItemGotSelection",90);r.ln=90;{r.ln=91;this.mthSEARCH(f.F1.get());}r.ln=92;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_ATLI","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_LABL","PRIM_WEB.DataRequest","PRIM_FLD"]
});