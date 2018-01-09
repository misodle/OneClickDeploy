﻿LANSA.addComponent({id:"XDOEMP",nm:"xDOEmployee",ot:"rp",tp:"Reusable Part",de:"Employee Object",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDA("1900-01-01");var rc1=l.cB("xdoimg10.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",
ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",
an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F8:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F9:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],
h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F10:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],dv:0,ia:["FE","RB"]},F11:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],
dv:l.SqlNull,ia:["FE","ASQN"]},F12:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F13:{nm:"XDEPTMENT",
an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F14:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F15:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept","JPN":"部門記述","LLL":"Department Desc"}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門記述","LLL":"Department"}[cL],
h2:{"ENG":"Description","FRA":"Département","JPN":"記述","LLL":"Description"}[cL],h3:{"ENG":"Description","FRA":"Employé","JPN":" ","LLL":"Description"}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門記述","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,rm:["dt"],pt:{Identifier:{da:"r"},Surname:{da:"r"},GivenName:{da:"r"},Street:{da:"r"},City:{da:"r"},State:{da:"r"},PostalCode:{da:"r"},HomeTelephone:{da:"r"},BusinessTelephone:
{da:"r"},Salary:{da:"r"},StartDate:{da:"r"},TerminationDate:{da:"r"},DepartmentCode:{da:"r"},DepartmentDescription:{da:"r"},Image:{da:"r"},FullName:{da:"na"},SyncStatus:{da:"rw"}},mt:{Save:{ps:{"Identification":{pt:"i"},"Surname":{pt:"i"},"GivenName":{pt:"i"},"Street":{pt:"i"},"City":{pt:"i"},"State":{pt:"i"},"PostalCode":{pt:"i"},"HomeTelephone":{pt:"i"},"BusinessTelephone":{pt:"i"},"Salary":{pt:"i"},"StartDate":{pt:"i"},"TerminationDate":{pt:"i"},"DepartmentCode":{pt:"i"},"Image":{pt:"i"}}},Delete:
{},SaveOnServer:{},DeleteFromServer:{},PopulateFromJSON:{ps:{"Property":{pt:"i"}}},SaveAsJSON:{ps:{"JsonArray":{pt:"i"}}},LoadImage:{},LoadImageFromServer:{}},ev:{Saved:{},Deleted:{},ImageLoaded:{},SaveOnServerFailed:{},SaveOnServerCompleted:{},DeleteFromServerFailed:{},DeleteFromServerCompleted:{}},co:function(){cO.aN.call(this);var f=this.aF("XDOEMP",Fd);var C0=this.cR("IMAGELOADED","PRIM_BOLN");var C1=this.cR("IMAGECHANGED","PRIM_BOLN");var C2=this.cR("SYNCSTATUS","PRIM_ALPH");this.cD("EMPLOYEEIMAGE");
C0.iC();C1.iC();C2.setValue("IN_SYNC");C2.iC();this.aH("CREATEINSTANCE",this,e1);this.aLF({"XEMPLOYID":f.F1,"XSURNAME":f.F2,"XGIVENAME":f.F3,"XSTREET":f.F4,"XCITY":f.F5,"XSTATE":f.F6,"XPOSTCODE":f.F7,"XPHONEHME":f.F8,"XPHONEBUS":f.F9,"XDEPTMENT":f.F13,"XSALARY":f.F10,"XSTARTDTE":f.F11,"XTERMDATE":f.F12,"XEMPDEPT":f.F15});}});cO.mthGETFULLNAME=function(){var f=this.FLD.XDOEMP,r=l.pR(this,cO,"GetFullName",44);var P0=r.cP("FULLNAME","PRIM_ALPH");r.ln=44;{r.ln=47;P0.set(l.add(l.cat(f.F3.get()," "),f.F2.get()));
}r.ln=49;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",55);r.ln=55;{r.ln=57;this.srEMPLOYEEIMAGE(rc1);}r.ln=59;r.e();};cO.mthSAVE=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"Save",66);var P0=r.cPF("IDENTIFICATION",Fd.F1.Dc);var P1=r.cPF("SURNAME",Fd.F2.Dc);var P2=r.cPF("GIVENNAME",Fd.F3.Dc);var P3=r.cPF("STREET",Fd.F4.Dc);var P4=r.cPF("CITY",Fd.F5.Dc);var P5=r.cPF("STATE",Fd.F6.Dc);
var P6=r.cPF("POSTALCODE",Fd.F7.Dc);var P7=r.cPF("HOMETELEPHONE",Fd.F8.Dc);var P8=r.cPF("BUSINESSTELEPHONE",Fd.F9.Dc);var P9=r.cPF("SALARY",Fd.F10.Dc);var P10=r.cPF("STARTDATE",Fd.F11.Dc);var P11=r.cPF("TERMINATIONDATE",Fd.F12.Dc);var P12=r.cPF("DEPARTMENTCODE",Fd.F13.Dc);var P13=r.cPF("IMAGE",Fd.F14.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);P9.set(p9);P10.set(p10);P11.set(p11);P12.set(p12);P13.set(p13);r.ln=66;{r.ln=82;f.F1.set(P0.get());
r.ln=83;f.F2.set(P1.get());r.ln=84;f.F3.set(P2.get());r.ln=85;f.F4.set(P3.get());r.ln=86;f.F5.set(P4.get());r.ln=87;f.F6.set(P5.get());r.ln=88;f.F7.set(P6.get());r.ln=89;f.F8.set(P7.get());r.ln=90;f.F9.set(P8.get());r.ln=91;f.F10.set(P9.get());r.ln=92;f.F11.set(P10.get());r.ln=93;f.F12.set(P11.get());r.ln=94;f.F13.set(P12.get());r.ln=96;if(l.s.IsNotSqlNull(P13.get())){r.ln=98;f.F14.set(P13.get());r.ln=100;this.srEMPLOYEEIMAGE(l.APPL().mthCREATEBITMAP(f.F14.get()));}r.ln=104;m.SYNCSTATUS.set("UPDATED");
r.ln=106;this.mthSAVEONSERVER();r.ln=108;this.fE("SAVED");}r.ln=110;r.e();};cO.mthDELETE=function(){var m=this.REF,r=l.mR(this,cO,"Delete",112);r.ln=112;{r.ln=114;m.SYNCSTATUS.set("DELETED");r.ln=116;this.mthDELETEFROMSERVER();r.ln=118;this.fE("DELETED");}r.ln=120;r.e();};cO.mthSAVEONSERVER=function(){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"SaveOnServer",122),mth=r;var C0=r.cDR("SAVEEMPLOYEE","XDOSERVER","SAVEEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e2);C0.aH("FAILED",this,e3);r.ln=122;
{r.ln=126;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":f.F1.get(),"XSURNAME":f.F2.get(),"XGIVENAME":f.F3.get(),"XSTREET":f.F4.get(),"XCITY":f.F5.get(),"XSTATE":f.F6.get(),"XPOSTCODE":f.F7.get(),"XPHONEHME":f.F8.get(),"XPHONEBUS":f.F9.get(),"XDEPTMENT":f.F13.get(),"XSALARY":f.F10.get(),"XSTARTDTE":f.F11.get(),"XTERMDATE":f.F12.get(),"XEMPDEPT":f.F15.get()}},{});}r.ln=142;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#SaveEmployee.Completed",128,mth);r.ln=128;{r.ln=130;m.SYNCSTATUS.set("IN_SYNC");r.ln=132;
this.fE("SAVEONSERVERCOMPLETED");}r.ln=134;r.e();}function e3(sender,Ps){var r=l.eR(this,cO,"#SaveEmployee.Failed",136,mth);r.ln=136;{r.ln=138;this.fE("SAVEONSERVERFAILED");}r.ln=140;r.e();}};cO.mthDELETEFROMSERVER=function(){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"DeleteFromServer",144),mth=r;var C0=r.cDR("DELETEEMPLOYEE","XDOSERVER","DELETEEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e4);C0.aH("FAILED",this,e5);r.ln=144;{r.ln=148;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":f.F1.get()}},{});}r.ln=164;
r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#DeleteEmployee.Completed",150,mth);r.ln=150;{r.ln=152;m.SYNCSTATUS.set("IN_SYNC");r.ln=154;this.fE("DELETEFROMSERVERCOMPLETED");}r.ln=156;r.e();}function e5(sender,Ps){var r=l.eR(this,cO,"#DeleteEmployee.Failed",158,mth);r.ln=158;{r.ln=160;this.fE("DELETEFROMSERVERFAILED");}r.ln=162;r.e();}};cO.mthPOPULATEFROMJSON=function(p0){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"PopulateFromJSON",167);var P0=r.cPD("PROPERTY");P0=p0;r.ln=167;{r.ln=170;
f.F1.set(P0.get("employee_id").mthASSTRING());r.ln=171;f.F2.set(P0.get("surname").mthASSTRING());r.ln=172;f.F3.set(P0.get("given_names").mthASSTRING());r.ln=173;f.F4.set(P0.get("street").mthASSTRING());r.ln=174;f.F5.set(P0.get("city").mthASSTRING());r.ln=175;f.F6.set(P0.get("state").mthASSTRING());r.ln=176;f.F7.set(P0.get("postal_code").mthASSTRING());r.ln=177;f.F8.set(P0.get("home_telephone").mthASSTRING());r.ln=178;f.F9.set(P0.get("business_telephone").mthASSTRING());r.ln=179;f.F13.set(P0.get("department_code").mthASSTRING());
r.ln=180;f.F10.set(P0.get("salary").mthASNUMBER());r.ln=181;f.F15.set(P0.get("department_description").mthASSTRING());r.ln=183;if(((P0.get("start_date")!=null)&&l.s.IsDate(P0.get("start_date").mthASSTRING()))){r.ln=185;f.F11.set(l.s.AsDate(P0.get("start_date").mthASSTRING()));}else{r.ln=189;f.F11.set(l.SqlNull);}r.ln=193;if(((P0.get("termination_date")!=null)&&l.s.IsDate(P0.get("termination_date").mthASSTRING()))){r.ln=195;f.F12.set(l.s.AsDate(P0.get("termination_date").mthASSTRING()));}else{r.ln=199;
f.F12.set(l.SqlNull);}r.ln=203;m.SYNCSTATUS.set(P0.get("sync_status").mthASSTRING());}r.ln=205;r.e();};cO.mthSAVEASJSON=function(p0){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"SaveAsJSON",207);var P0=r.cPD("JSONARRAY");P0=p0;var C0=r.cD("C0");r.ln=207;{r.ln=212;C0=r.sR("C0",P0.mthINSERTOBJECT());r.ln=214;C0.mthINSERTSTRING("employee_id",f.F1.get());r.ln=215;C0.mthINSERTSTRING("surname",f.F2.get());r.ln=216;C0.mthINSERTSTRING("given_names",f.F3.get());r.ln=217;C0.mthINSERTSTRING("street",f.F4.get());
r.ln=218;C0.mthINSERTSTRING("city",f.F5.get());r.ln=219;C0.mthINSERTSTRING("state",f.F6.get());r.ln=220;C0.mthINSERTSTRING("postal_code",f.F7.get());r.ln=221;C0.mthINSERTSTRING("home_telephone",f.F8.get());r.ln=222;C0.mthINSERTSTRING("business_telephone",f.F9.get());r.ln=223;C0.mthINSERTSTRING("department_code",f.F13.get());r.ln=224;C0.mthINSERTSTRING("department_description",f.F15.get());r.ln=225;C0.mthINSERTNUMBER("salary",f.F10.get());r.ln=227;if(l.d.IsNotSqlNull(f.F11.get())){r.ln=229;C0.mthINSERTSTRING("start_date",l.d.AsString(f.F11.get()));
}r.ln=233;if(l.d.IsNotSqlNull(f.F12.get())){r.ln=235;C0.mthINSERTSTRING("termination_date",l.d.AsString(f.F12.get()));}r.ln=239;C0.mthINSERTSTRING("sync_status",m.SYNCSTATUS.get());}r.ln=241;r.e();};cO.mthLOADIMAGE=function(){var m=this.REF,r=l.mR(this,cO,"LoadImage",243);r.ln=243;{r.ln=245;if(l.tB(l.and(l.not(m.IMAGELOADED.get()),l.WEB().getOnline()))){r.ln=247;this.mthLOADIMAGEFROMSERVER();r.ln=249;m.IMAGELOADED.set(true);}}r.ln=253;r.e();};cO.mthLOADIMAGEFROMSERVER=function(){var f=this.FLD.XDOEMP,m=this.REF,r=l.mR(this,cO,"LoadImageFromServer",255),mth=r;
var C0=r.cDR("LOADEMPLOYEEIMAGE","XDOSERVER","LOADEMPLOYEEIMAGE");C0.iC();C0.aH("COMPLETED",this,e6);r.ln=255;{r.ln=259;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":f.F1.get()}},{FLD:{"XEMPIMG":f.F14}});}r.ln=271;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#LoadEmployeeImage.Completed",261,mth);r.ln=261;{r.ln=263;if(l.s.IsNotSqlNull(f.F14.get())){r.ln=265;this.srEMPLOYEEIMAGE(l.APPL().mthCREATEBITMAP(f.F14.get()));}}r.ln=269;r.e();}};function e7(sender,Ps){var r=l.eR(this,cO,"#EmployeeImage.Loaded",273);
r.ln=273;{r.ln=275;this.fE("IMAGELOADED");}r.ln=277;r.e();};cO.getIDENTIFIER=function(){var f=this.FLD.XDOEMP;return f.F1.get();};cO.getSURNAME=function(){var f=this.FLD.XDOEMP;return f.F2.get();};cO.getGIVENNAME=function(){var f=this.FLD.XDOEMP;return f.F3.get();};cO.getSTREET=function(){var f=this.FLD.XDOEMP;return f.F4.get();};cO.getCITY=function(){var f=this.FLD.XDOEMP;return f.F5.get();};cO.getSTATE=function(){var f=this.FLD.XDOEMP;return f.F6.get();};cO.getPOSTALCODE=function(){var f=this.FLD.XDOEMP;
return f.F7.get();};cO.getHOMETELEPHONE=function(){var f=this.FLD.XDOEMP;return f.F8.get();};cO.getBUSINESSTELEPHONE=function(){var f=this.FLD.XDOEMP;return f.F9.get();};cO.getSALARY=function(){var f=this.FLD.XDOEMP;return f.F10.get();};cO.getSTARTDATE=function(){var f=this.FLD.XDOEMP;return f.F11.get();};cO.getTERMINATIONDATE=function(){var f=this.FLD.XDOEMP;return f.F12.get();};cO.getDEPARTMENTCODE=function(){var f=this.FLD.XDOEMP;return f.F13.get();};cO.getDEPARTMENTDESCRIPTION=function(){var f=this.FLD.XDOEMP;
return f.F15.get();};cO.getIMAGE=function(){return this.REF.EMPLOYEEIMAGE;};cO.getFULLNAME=function(){return this.mthGETFULLNAME();};cO.getSYNCSTATUS=function(){return this.REF.SYNCSTATUS.get();};cO.setSYNCSTATUS=function(v){this.REF.SYNCSTATUS.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});}{Fd.F9.Dc=function()
{this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XSALARY"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F14.Dc=function()
{this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XEMPIMG"});}cO.srEMPLOYEEIMAGE=function(rn){if(this.REF.EMPLOYEEIMAGE!=null){this.REF.EMPLOYEEIMAGE.rH("LOADED",this,e7);}this.sR("EMPLOYEEIMAGE",rn);if(this.REF.EMPLOYEEIMAGE!=null){this.REF.EMPLOYEEIMAGE.aH("LOADED",this,e7);}};},{rp:["PRIM_OBJT","PRIM_BOLN","PRIM_ALPH","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_DTIM"],dp:["PRIM_BMP","PRIM_WEB.JsonObject"]});