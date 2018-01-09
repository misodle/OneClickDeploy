﻿LANSA.addComponent({id:"XDOAPP",nm:"xDOApplication",ot:"rp",tp:"Reusable Part",de:"Application Object",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",
ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",
an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F8:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F9:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],
h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F10:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F11:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],
dv:0,ia:["FE","RB"]},F12:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F13:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F14:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept","JPN":"部門記述","LLL":"Department Desc"}[cL],
h1:{"ENG":"Department","FRA":"Description","JPN":"部門記述","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"記述","LLL":"Description"}[cL],h3:{"ENG":"Description","FRA":"Employé","JPN":" ","LLL":"Description"}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門記述","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F15:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],
h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{Employees:{da:"r"},Departments:{da:"r"},HasPendingChanges:{da:"na"},IsProcessingPendingChanges:{da:"na"},LoggedIn:
{da:"rw"},IsSearching:{da:"r"},CurrentEmployee:{da:"r"},CurrentSearchString:{da:"r"}},mt:{Login:{},RefreshData:{},OpenMenu:{},CreateEmployee:{},OpenEmployee:{ps:{"EmployeeId":{pt:"i"}}},DeleteEmployee:{},SaveEmployee:{},ShowSearch:{},HideSearch:{},FilterOnSearchString:{ps:{"SearchString":{pt:"i"}}},LoadData:{},FindEmployeeById:{ps:{"Identifier":{pt:"i"}}},CommitPendingChanges:{},CommitNextPendingChange:{},LoadEmployeesFromLocalStorage:{},SaveEmployeesToLocalStorage:{},LoadDepartmentsFromLocalStorage:
{},SaveDepartmentsToLocalStorage:{},LoadEmployees:{},LoadDepartments:{}},ev:{EmployeesLoaded:{},DepartmentsLoaded:{},MenuClicked:{},SearchHiding:{},SearchShowing:{},SearchStringChanged:{},LoginCompleted:{},LoadingFailed:{},RefreshFailed:{},EmployeeSaved:{},EmployeeOpened:{},EmployeeCreated:{},EmployeeDeleted:{},EmployeeSaveFailed:{},EmployeeAdded:{ps:{"Employee":{pt:"i"}}},EmployeeSyncCompleted:{ps:{"Employee":{pt:"i"}}},EmployeeSyncFailed:{ps:{"Employee":{pt:"i"}}},SaveEmployeeDetails:{ps:{"Result":
{pt:"o"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDOAPP",Fd);var C0=this.cR("EMPLOYEELIST","PRIM_LCOL");var C1=this.cR("PENDINGCHANGESLIST","PRIM_LCOL");var C2=this.cR("DEPARTMENTLIST","PRIM_LCOL");this.cD("CURRENTEMPLOYEE");var C4=this.cR("GLOGGEDIN","PRIM_BOLN");var C5=this.cR("ISSEARCHING","PRIM_BOLN");var C6=this.cR("CURRENTSEARCHSTRING","PRIM_ALPH");C0.setCollects("XDOEMP");C0.iC();C1.setCollects("XDOEMP");C1.iC();C2.setCollects("XDODEPT");C2.iC();C4.iC();C5.iC();C6.iC();C0.aH("SAVED",this,e2);
C0.aH("SAVEONSERVERCOMPLETED",this,e3);C0.aH("SAVEONSERVERFAILED",this,e4);C0.aH("DELETEFROMSERVERCOMPLETED",this,e6);C0.aH("DELETEFROMSERVERFAILED",this,e7);C1.aH("SAVEONSERVERCOMPLETED",this,e5);C1.aH("DELETEFROMSERVERCOMPLETED",this,e5);C1.aH("SAVEONSERVERFAILED",this,e5);C1.aH("DELETEFROMSERVERFAILED",this,e5);C0.aLF({"XEMPLOYID":f.F1,"XSURNAME":f.F2,"XGIVENAME":f.F3,"XSTREET":f.F4,"XCITY":f.F5,"XSTATE":f.F6,"XPOSTCODE":f.F7,"XPHONEHME":f.F8,"XPHONEBUS":f.F9,"XDEPTMENT":f.F10,"XSALARY":f.F11,"XSTARTDTE":f.F12,"XTERMDATE":f.F13,"XEMPDEPT":f.F14});
C1.aLF({"XEMPLOYID":f.F1,"XSURNAME":f.F2,"XGIVENAME":f.F3,"XSTREET":f.F4,"XCITY":f.F5,"XSTATE":f.F6,"XPOSTCODE":f.F7,"XPHONEHME":f.F8,"XPHONEBUS":f.F9,"XDEPTMENT":f.F10,"XSALARY":f.F11,"XSTARTDTE":f.F12,"XTERMDATE":f.F13,"XEMPDEPT":f.F14});C2.aLF({"XDEPTMENT":f.F10,"XDEPTDESC":f.F15});}});cO.mthGETHASPENDINGCHANGES=function(){var m=this.REF,r=l.pR(this,cO,"GetHasPendingChanges",64);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=64;{r.ln=67;{var l1=m.EMPLOYEELIST.cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());
r.ln=69;if(l.s.ne(EMPLOYEE.getSYNCSTATUS(),"IN_SYNC")){r.ln=71;P0.set(true);r.ln=73;break;}r.ln=77;}l1.end();r.dR("EMPLOYEE");}}r.ln=79;return r.rV(P0.get());};cO.mthGETISPROCESSINGPENDINGCHANGES=function(){var m=this.REF,r=l.pR(this,cO,"GetIsProcessingPendingChanges",81);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=81;{r.ln=84;P0.set(l.n.gt(m.PENDINGCHANGESLIST.getItemCount(),0));}r.ln=86;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentEmployee.Saved",92);r.ln=92;
{r.ln=94;if(l.not(m.EMPLOYEELIST.mthCONTAINS(m.CURRENTEMPLOYEE))){r.ln=96;m.EMPLOYEELIST.mthINSERT(m.CURRENTEMPLOYEE);r.ln=98;{var eP=l.ePs();eP.cD("EMPLOYEE");eP.sR("EMPLOYEE",m.CURRENTEMPLOYEE);this.fE("EMPLOYEEADDED",eP);eP.e();}}r.ln=102;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();}r.ln=104;r.e();};function e2(EMPLOYEE,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeList<>.Saved",106);r.ln=106;{r.ln=108;if(l.not(m.EMPLOYEELIST.mthCONTAINS(EMPLOYEE))){r.ln=110;m.EMPLOYEELIST.mthINSERT(EMPLOYEE);r.ln=112;
{var eP=l.ePs();eP.cD("EMPLOYEE");eP.sR("EMPLOYEE",EMPLOYEE);this.fE("EMPLOYEEADDED",eP);eP.e();}}r.ln=116;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();}r.ln=118;r.e();};function e3(SENDER,Ps){var r=l.eR(this,cO,"#EmployeeList<>.SaveOnServerCompleted",120);r.ln=120;{r.ln=122;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();r.ln=124;{var eP=l.ePs();eP.cD("EMPLOYEE");eP.sR("EMPLOYEE",SENDER);this.fE("EMPLOYEESYNCCOMPLETED",eP);eP.e();}}r.ln=126;r.e();};function e4(SENDER,Ps){var r=l.eR(this,cO,"#EmployeeList<>.SaveOnServerFailed",128);
r.ln=128;{r.ln=130;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();r.ln=132;{var eP=l.ePs();eP.cD("EMPLOYEE");eP.sR("EMPLOYEE",SENDER);this.fE("EMPLOYEESYNCFAILED",eP);eP.e();}}r.ln=134;r.e();};function e5(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#PendingChangesList<>.SaveOnServerCompleted #PendingChangesList<>.DeleteFromServerCompleted #PendingChangesList<>.SaveOnServerFailed #PendingChangesList<>.DeleteFromServerFailed",136);r.ln=136;{r.ln=138;m.PENDINGCHANGESLIST.mthREMOVE(SENDER);r.ln=140;this.mthCOMMITNEXTPENDINGCHANGE();
}r.ln=142;r.e();};function e6(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeList<>.DeleteFromServerCompleted",144);r.ln=144;{r.ln=146;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();r.ln=148;m.EMPLOYEELIST.mthREMOVE(SENDER);r.ln=150;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();r.ln=152;{var eP=l.ePs();eP.cD("EMPLOYEE");eP.sR("EMPLOYEE",SENDER);this.fE("EMPLOYEESYNCCOMPLETED",eP);eP.e();}}r.ln=154;r.e();};function e7(SENDER,Ps){var r=l.eR(this,cO,"#EmployeeList<>.DeleteFromServerFailed",156);r.ln=156;{r.ln=158;
this.mthSAVEEMPLOYEESTOLOCALSTORAGE();}r.ln=160;r.e();};cO.mthLOGIN=function(){var r=l.mR(this,cO,"Login",166);r.ln=166;{r.ln=168;this.setLOGGEDIN(true);r.ln=170;this.mthLOADDATA();r.ln=172;this.fE("LOGINCOMPLETED");}r.ln=174;r.e();};cO.mthREFRESHDATA=function(){var r=l.mR(this,cO,"RefreshData",176);r.ln=176;{r.ln=178;this.mthLOADDATA();}r.ln=180;r.e();};cO.mthOPENMENU=function(){var r=l.mR(this,cO,"OpenMenu",182);r.ln=182;{r.ln=184;this.fE("MENUCLICKED");}r.ln=186;r.e();};cO.mthCREATEEMPLOYEE=function()
{var m=this.REF,r=l.mR(this,cO,"CreateEmployee",188);r.ln=188;{r.ln=190;this.srCURRENTEMPLOYEE(l.cC("XDOEMP"));r.ln=192;this.fE("EMPLOYEECREATED");}r.ln=194;r.e();};cO.mthOPENEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"OpenEmployee",196);var P0=r.cPF("EMPLOYEEID",Fd.F1.Dc);P0.set(p0);var C0=r.cD("C0");r.ln=196;{r.ln=201;C0=r.sR("C0",cO.mthFINDEMPLOYEEBYID.call(this,P0.get()));r.ln=203;if((C0!=null)){r.ln=205;this.srCURRENTEMPLOYEE(C0);r.ln=207;this.fE("EMPLOYEEOPENED");}}r.ln=211;r.e();};
cO.mthDELETEEMPLOYEE=function(){var m=this.REF,r=l.mR(this,cO,"DeleteEmployee",213);r.ln=213;{r.ln=215;m.CURRENTEMPLOYEE.mthDELETE();r.ln=217;this.fE("EMPLOYEEDELETED");}r.ln=219;r.e();};cO.mthSAVEEMPLOYEE=function(){var r=l.mR(this,cO,"SaveEmployee",221);var C0=r.cR("EMPLOYEESAVED","PRIM_BOLN");C0.iC();r.ln=221;{r.ln=224;{var eP=l.ePs();eP.cR("RESULT","PRIM_BOLN");this.fE("SAVEEMPLOYEEDETAILS",eP);C0.set(eP.r("RESULT").get());eP.e();}r.ln=226;if(l.tB(C0.get())){r.ln=228;this.fE("EMPLOYEESAVED");
}else{r.ln=232;this.fE("EMPLOYEESAVEFAILED");}}r.ln=236;r.e();};cO.mthSHOWSEARCH=function(){var m=this.REF,r=l.mR(this,cO,"ShowSearch",238);r.ln=238;{r.ln=240;m.ISSEARCHING.set(true);r.ln=242;this.fE("SEARCHSHOWING");}r.ln=244;r.e();};cO.mthHIDESEARCH=function(){var m=this.REF,r=l.mR(this,cO,"HideSearch",246);r.ln=246;{r.ln=248;m.ISSEARCHING.set(false);r.ln=250;m.CURRENTSEARCHSTRING.set("");r.ln=252;this.fE("SEARCHSTRINGCHANGED");r.ln=254;this.fE("SEARCHHIDING");}r.ln=256;r.e();};cO.mthFILTERONSEARCHSTRING=function(p0)
{var m=this.REF,r=l.mR(this,cO,"FilterOnSearchString",258);var P0=r.cP("SEARCHSTRING","PRIM_ALPH");P0.set(p0);r.ln=258;{r.ln=261;m.CURRENTSEARCHSTRING.set(P0.get());r.ln=263;this.fE("SEARCHSTRINGCHANGED");}r.ln=265;r.e();};cO.mthLOADDATA=function(){var m=this.REF,r=l.mR(this,cO,"LoadData",267);r.ln=267;{r.ln=269;m.EMPLOYEELIST.clearList();r.ln=270;m.DEPARTMENTLIST.clearList();r.ln=272;this.mthLOADEMPLOYEES();r.ln=273;this.mthLOADDEPARTMENTS();}r.ln=275;r.e();};cO.mthFINDEMPLOYEEBYID=function(p0){
var m=this.REF,r=l.mR(this,cO,"FindEmployeeById",277);var P0=r.cPF("IDENTIFIER",Fd.F1.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=277;{r.ln=281;{var l1=m.EMPLOYEELIST.cI();while(l1.step()){var PROXY=r.sR("PROXY",l1.item());r.ln=283;if(l.s.eq(PROXY.getIDENTIFIER(),P0.get())){r.ln=285;P1=r.sR("P1",PROXY);r.ln=287;break;}r.ln=291;}l1.end();r.dR("PROXY");}}r.ln=293;return r.rR(P1);};cO.mthCOMMITPENDINGCHANGES=function(){var m=this.REF,r=l.mR(this,cO,"CommitPendingChanges",295);r.ln=295;{r.ln=298;{var l1=m.EMPLOYEELIST.cI();
while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=300;if(l.s.ne(EMPLOYEE.getSYNCSTATUS(),"IN_SYNC")){r.ln=302;m.PENDINGCHANGESLIST.mthINSERT(EMPLOYEE);}r.ln=306;}l1.end();r.dR("EMPLOYEE");}r.ln=308;this.mthCOMMITNEXTPENDINGCHANGE();}r.ln=310;r.e();};cO.mthCOMMITNEXTPENDINGCHANGE=function(){var m=this.REF,r=l.mR(this,cO,"CommitNextPendingChange",316);r.ln=316;{r.ln=318;if(l.n.gt(m.PENDINGCHANGESLIST.getItemCount(),0)){r.ln=320;{var v1=m.PENDINGCHANGESLIST.get(1).getSYNCSTATUS();if(r.ln=322,l.s.eq(v1,"UPDATED"))
{r.ln=324;m.PENDINGCHANGESLIST.get(1).mthSAVEONSERVER();}else if(r.ln=326,l.s.eq(v1,"DELETED")){r.ln=328;m.PENDINGCHANGESLIST.get(1).mthDELETEFROMSERVER();}else{r.ln=332;l.WEB().mthALERT(m.PENDINGCHANGESLIST.get(1).getSYNCSTATUS());r.ln=334;m.PENDINGCHANGESLIST.mthREMOVEFIRST();}r.ln=336;}}}r.ln=340;r.e();};cO.mthLOADEMPLOYEESFROMLOCALSTORAGE=function(){var m=this.REF,r=l.mR(this,cO,"LoadEmployeesFromLocalStorage",342);var P0=r.cP("RESULT","PRIM_BOLN");var C0=r.cR("JSON","PRIM_WEB","Json");C0.iC();
r.ln=342;{r.ln=347;if((l.WEB().getLocalStorage().get("xemployees")!=null)){r.ln=349;C0.set(l.WEB().getLocalStorage().get("xemployees").get());r.ln=351;{var l1=C0.getRootItem().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=353;m.EMPLOYEELIST.addEntry();r.ln=355;m.EMPLOYEELIST.get(m.EMPLOYEELIST.getItemCount()).mthPOPULATEFROMJSON(ITEM);r.ln=357;}l1.end();r.dR("ITEM");}r.ln=359;this.fE("EMPLOYEESLOADED");r.ln=361;P0.set(true);}}r.ln=365;return r.rV(P0.get());};cO.mthSAVEEMPLOYEESTOLOCALSTORAGE=function()
{var r=l.mR(this,cO,"SaveEmployeesToLocalStorage",367);var C0=r.cR("JSON","PRIM_WEB","Json");var C1=r.cD("C1");C0.iC();r.ln=367;{r.ln=372;C1=r.sR("C1",C0.mthCREATEROOTARRAY());r.ln=374;{var l1=this.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=376;EMPLOYEE.mthSAVEASJSON(C1);r.ln=378;}l1.end();r.dR("EMPLOYEE");}r.ln=380;l.WEB().getLocalStorage().mthADD("xemployees",C0.get());}r.ln=382;r.e();};cO.mthLOADDEPARTMENTSFROMLOCALSTORAGE=function(){var m=this.REF,r=l.mR(this,cO,"LoadDepartmentsFromLocalStorage",384);
var P0=r.cP("RESULT","PRIM_BOLN");var C0=r.cR("JSON","PRIM_WEB","Json");var C1=r.cD("C1");C0.iC();r.ln=384;{r.ln=390;if((l.WEB().getLocalStorage().get("xdepartments")!=null)){r.ln=392;C0.set(l.WEB().getLocalStorage().get("xdepartments").get());r.ln=394;{var l1=C0.getRootItem().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=396;m.DEPARTMENTLIST.addEntry();r.ln=398;m.DEPARTMENTLIST.get(m.DEPARTMENTLIST.getItemCount()).mthPOPULATEFROMJSON(ITEM);r.ln=400;}l1.end();r.dR("ITEM");}r.ln=402;this.fE("DEPARTMENTSLOADED");
r.ln=404;P0.set(true);}}r.ln=408;return r.rV(P0.get());};cO.mthSAVEDEPARTMENTSTOLOCALSTORAGE=function(){var m=this.REF,r=l.mR(this,cO,"SaveDepartmentsToLocalStorage",410);var C0=r.cR("JSON","PRIM_WEB","Json");var C1=r.cD("C1");C0.iC();r.ln=410;{r.ln=415;C1=r.sR("C1",C0.mthCREATEROOTARRAY());r.ln=417;{var l1=m.DEPARTMENTLIST.cI();while(l1.step()){var DEPARTMENT=r.sR("DEPARTMENT",l1.item());r.ln=419;DEPARTMENT.mthSAVEASJSON(C1);r.ln=421;}l1.end();r.dR("DEPARTMENT");}r.ln=423;l.WEB().getLocalStorage().mthADD("xdepartments",C0.get());
}r.ln=425;r.e();};cO.mthLOADEMPLOYEES=function(){var m=this.REF,r=l.mR(this,cO,"LoadEmployees",427),mth=r;var C0=r.cDR("LOADEMPLOYEES","XDOSERVER","LOADEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e8);C0.aH("FAILED",this,e9);r.ln=427;{r.ln=431;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEELIST":m.EMPLOYEELIST}});}r.ln=459;r.e();function e8(sender,Ps){var r=l.eR(this,cO,"#LoadEmployees.Completed",433,mth);r.ln=433;{r.ln=435;this.mthSAVEEMPLOYEESTOLOCALSTORAGE();r.ln=437;this.fE("EMPLOYEESLOADED");}r.ln=439;
r.e();}function e9(sender,Ps){var r=l.eR(this,cO,"#LoadEmployees.Failed",441,mth);r.ln=441;{r.ln=443;this.fE("REFRESHFAILED");r.ln=445;if(cO.mthLOADEMPLOYEESFROMLOCALSTORAGE.call(this)){r.ln=447;this.fE("EMPLOYEESLOADED");}else{r.ln=451;this.setLOGGEDIN(false);r.ln=453;this.fE("LOADINGFAILED");}}r.ln=457;r.e();}};cO.mthLOADDEPARTMENTS=function(){var m=this.REF,r=l.mR(this,cO,"LoadDepartments",461),mth=r;var C0=r.cDR("LOADDEPARTMENTS","XDOSERVER","LOADDEPARTMENTS");C0.iC();C0.aH("COMPLETED",this,e10);
C0.aH("FAILED",this,e11);r.ln=461;{r.ln=465;C0.mthEXECUTEASYNC({},{LIST:{"DEPARTMENTLIST":m.DEPARTMENTLIST}});}r.ln=493;r.e();function e10(sender,Ps){var r=l.eR(this,cO,"#LoadDepartments.Completed",467,mth);r.ln=467;{r.ln=469;this.mthSAVEDEPARTMENTSTOLOCALSTORAGE();r.ln=471;this.fE("DEPARTMENTSLOADED");}r.ln=473;r.e();}function e11(sender,Ps){var r=l.eR(this,cO,"#LoadDepartments.Failed",475,mth);r.ln=475;{r.ln=477;this.fE("REFRESHFAILED");r.ln=479;if(cO.mthLOADDEPARTMENTSFROMLOCALSTORAGE.call(this))
{r.ln=481;this.fE("DEPARTMENTSLOADED");}else{r.ln=485;this.setLOGGEDIN(false);r.ln=487;this.fE("LOADINGFAILED");}}r.ln=491;r.e();}};cO.getEMPLOYEES=function(){return this.REF.EMPLOYEELIST;};cO.getDEPARTMENTS=function(){return this.REF.DEPARTMENTLIST;};cO.getHASPENDINGCHANGES=function(){return this.mthGETHASPENDINGCHANGES();};cO.getISPROCESSINGPENDINGCHANGES=function(){return this.mthGETISPROCESSINGPENDINGCHANGES();};cO.getLOGGEDIN=function(){return this.REF.GLOGGEDIN.get();};cO.setLOGGEDIN=function(v)
{this.REF.GLOGGEDIN.set(v);};cO.getISSEARCHING=function(){return this.REF.ISSEARCHING.get();};cO.getCURRENTEMPLOYEE=function(){return this.REF.CURRENTEMPLOYEE;};cO.getCURRENTSEARCHSTRING=function(){return this.REF.CURRENTSEARCHSTRING.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}cO.srCURRENTEMPLOYEE=function(rn){if(this.REF.CURRENTEMPLOYEE!=null){this.REF.CURRENTEMPLOYEE.rH("SAVED",this,e1);}this.sR("CURRENTEMPLOYEE",rn);if(this.REF.CURRENTEMPLOYEE!=null)
{this.REF.CURRENTEMPLOYEE.aH("SAVED",this,e1);}};},{rp:["PRIM_OBJT","PRIM_LCOL","PRIM_BOLN","PRIM_ALPH","PRIM_FLD","PRIM_WEB.DataRequest"],dc:["XDOEMP"],dp:["PRIM_BOLN","PRIM_WEB.Json","PRIM_WEB.JsonArray"]});