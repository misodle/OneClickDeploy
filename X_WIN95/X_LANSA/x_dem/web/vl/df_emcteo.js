﻿LANSA.addComponent({id:"DF_EMCTEO",ot:"rp",tp:"Reusable Part",de:"\\OC=Employee Client Side Item",tl:14020001},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDA("1900-01-01");var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],dv:"",ia:["FE"]},F3:{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",
ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F6:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],h2:" ",h3:" ",de:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XCITY",
an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],h2:" ",h3:" ",de:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],h2:" ",h3:" ",de:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",
ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号"}[cL],h3:" ",de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号"}[cL],dv:"",ia:["FE"]},F10:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話"}[cL],h3:" ",
de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話"}[cL],dv:"",ia:["FE"]},F11:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話"}[cL],h3:" ",de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話"}[cL],dv:"",ia:["FE"]},F12:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],
h1:{"ENG":"Department","FRA":"Code","JPN":"部門"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],dv:"",ia:["FE"]},F13:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" "}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],dv:0,ia:["FE","RB"]
},F14:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付"}[cL],h3:" ",de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F15:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了"}[cL],
h2:{"ENG":"Date","FRA":"Départ","JPN":"日付"}[cL],h3:" ",de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F16:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{ChangeCount:{da:"r"}},mt:{LoadEmployee:{ps:{"xEmployeeIdentification":{pt:"i"}}},UpdateEmployeeDetails:{ps:{"pxEmployeeIdentification":{pt:"i"},"pxEmployeeSurname":{pt:"i"},"pxEmployeeGivenNames":{pt:"i"},"pxEmployeeStreet":{pt:"i"},"pxEmployeeCity":{pt:"i"},"pxEmployeeState":{pt:"i"},"pxEmployeePostalCode":{pt:"i"},"pxEmployeeHomeTelephone":{pt:"i"},"pxEmployeeBusinessTelephone":{pt:"i"},"pxDepartmentCode":{pt:"i"},"pxEmployeeSalary":{pt:"i"
},"pxEmployeeStartDate":{pt:"i"},"pxEmployeeTerminationDate":{pt:"i"}}},GetEmployeeDetails:{ps:{"pxEmployeeIdentification":{pt:"o"},"pxEmployeeSurname":{pt:"o"},"pxEmployeeGivenNames":{pt:"o"},"pxEmployeeStreet":{pt:"o"},"pxEmployeeCity":{pt:"o"},"pxEmployeeState":{pt:"o"},"pxEmployeePostalCode":{pt:"o"},"pxEmployeeHomeTelephone":{pt:"o"},"pxEmployeeBusinessTelephone":{pt:"o"},"pxDepartmentCode":{pt:"o"},"pxEmployeeSalary":{pt:"o"},"pxEmployeeStartDate":{pt:"o"},"pxEmployeeTerminationDate":{pt:"o"
}}},SaveEmployee:{ps:{"ForCommandHandler":{pt:"i"},"DataItem":{pt:"i"},"ReturnCode":{pt:"o"}}}},ev:{EmployeeFound:{ps:{"xEmployeeIdentification":{pt:"i"}}},EmployeeNotFound:{ps:{"xEmployeeIdentification":{pt:"i"}}},EmployeeChanged:{ps:{"xEmployeeIdentification":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_EMCTEO",Fd);var C0=this.cF("CHANGECOUNT",Fd.F1.Dc);C0.aD();C0.iC();var li=this.aL("DF_EMCTEO");li.EMPLOYEEDETAILS=l.cLT({"XEMPLOYID":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XSTREET":f.F6,"XCITY":f.F7,"XSTATE":f.F8,"XPOSTCODE":f.F9,"XPHONEHME":f.F10,"XPHONEBUS":f.F11,"XDEPTMENT":f.F12,"XSALARY":f.F13,"XSTARTDTE":f.F14,"XTERMDATE":f.F15},null);
}});cO.mthLOADEMPLOYEE=function(p0){var li=this.LIST.DF_EMCTEO,f=this.FLD.DF_EMCTEO,m=this.REF,r=l.mR(this,cO,"LoadEmployee",35);var P0=r.cPF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cP("FOUND","PRIM_BOLN");P0.set(p0);var C0=r.cDR("GETEMPLOYEE","DF_EMDSO","GETEMPLOYEE");var C1=r.cF("RETURNCODE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=35;{r.ln=42;f.F2.set("");f.F4.set("");f.F5.set("");f.F6.set("");f.F7.set("");f.F8.set("");f.F9.set("");f.F10.set("");f.F11.set("");f.F12.set("");f.F13.set(0);f.F14.set(c1);
f.F15.set(c1);r.ln=44;li.EMPLOYEEDETAILS.clearList();r.ln=46;C0.mthEXECUTE({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"RETURNCODE":C1},LIST:{"EMPLOYEEDETAILS":li.EMPLOYEEDETAILS}});r.ln=48;P1.set(l.s.eq(C1.get(),"OK"));r.ln=50;f.F16.set(lIO=li.EMPLOYEEDETAILS.getEntry(1));r.ln=52;m.CHANGECOUNT.set(0);}r.ln=54;return r.rV(P1.get());};cO.mthUPDATEEMPLOYEEDETAILS=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12){var li=this.LIST.DF_EMCTEO,f=this.FLD.DF_EMCTEO,m=this.REF,r=l.mR(this,cO,"UpdateEmployeeDetails",57);
var P0=r.cPF("PXEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cPF("PXEMPLOYEESURNAME",Fd.F4.Dc);var P2=r.cPF("PXEMPLOYEEGIVENNAMES",Fd.F5.Dc);var P3=r.cPF("PXEMPLOYEESTREET",Fd.F6.Dc);var P4=r.cPF("PXEMPLOYEECITY",Fd.F7.Dc);var P5=r.cPF("PXEMPLOYEESTATE",Fd.F8.Dc);var P6=r.cPF("PXEMPLOYEEPOSTALCODE",Fd.F9.Dc);var P7=r.cPF("PXEMPLOYEEHOMETELEPHONE",Fd.F10.Dc);var P8=r.cPF("PXEMPLOYEEBUSINESSTELEPHONE",Fd.F11.Dc);var P9=r.cPF("PXDEPARTMENTCODE",Fd.F12.Dc);var P10=r.cPF("PXEMPLOYEESALARY",Fd.F13.Dc);var P11=r.cPF("PXEMPLOYEESTARTDATE",Fd.F14.Dc);
var P12=r.cPF("PXEMPLOYEETERMINATIONDATE",Fd.F15.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);P9.set(p9);P10.set(p10);P11.set(p11);P12.set(p12);r.ln=57;{r.ln=72;f.F16.set(lIO=li.EMPLOYEEDETAILS.getEntry(1));r.ln=74;f.F2.set(P0.get());r.ln=75;f.F4.set(P1.get());r.ln=76;f.F5.set(P2.get());r.ln=77;f.F6.set(P3.get());r.ln=78;f.F7.set(P4.get());r.ln=79;f.F8.set(P5.get());r.ln=80;f.F9.set(P6.get());r.ln=81;f.F10.set(P7.get());r.ln=82;f.F11.set(P8.get());
r.ln=83;f.F12.set(P9.get());r.ln=84;f.F13.set(P10.get());r.ln=85;f.F14.set(P11.get());r.ln=86;f.F15.set(P12.get());r.ln=88;li.EMPLOYEEDETAILS.updateEntry();r.ln=90;m.CHANGECOUNT.set(l.add(m.CHANGECOUNT.get(),1));r.ln=92;{var eP=l.ePs();eP.cF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);eP.r("XEMPLOYEEIDENTIFICATION").set(f.F2.get());this.fE("EMPLOYEECHANGED",eP);eP.e();}}r.ln=94;r.e();};cO.mthGETEMPLOYEEDETAILS=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12){var li=this.LIST.DF_EMCTEO,f=this.FLD.DF_EMCTEO,r=l.mR(this,cO,"GetEmployeeDetails",97);
var P0=r.cPF("PXEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cPF("PXEMPLOYEESURNAME",Fd.F4.Dc);var P2=r.cPF("PXEMPLOYEEGIVENNAMES",Fd.F5.Dc);var P3=r.cPF("PXEMPLOYEESTREET",Fd.F6.Dc);var P4=r.cPF("PXEMPLOYEECITY",Fd.F7.Dc);var P5=r.cPF("PXEMPLOYEESTATE",Fd.F8.Dc);var P6=r.cPF("PXEMPLOYEEPOSTALCODE",Fd.F9.Dc);var P7=r.cPF("PXEMPLOYEEHOMETELEPHONE",Fd.F10.Dc);var P8=r.cPF("PXEMPLOYEEBUSINESSTELEPHONE",Fd.F11.Dc);var P9=r.cPF("PXDEPARTMENTCODE",Fd.F12.Dc);var P10=r.cPF("PXEMPLOYEESALARY",Fd.F13.Dc);var P11=r.cPF("PXEMPLOYEESTARTDATE",Fd.F14.Dc);
var P12=r.cPF("PXEMPLOYEETERMINATIONDATE",Fd.F15.Dc);r.ln=97;{r.ln=112;f.F16.set(lIO=li.EMPLOYEEDETAILS.getEntry(1));r.ln=114;P0.set(l.s.Trim(f.F2.get()));r.ln=115;P1.set(l.s.Trim(f.F4.get()));r.ln=116;P2.set(l.s.Trim(f.F5.get()));r.ln=117;P3.set(l.s.Trim(f.F6.get()));r.ln=118;P4.set(l.s.Trim(f.F7.get()));r.ln=119;P5.set(l.s.Trim(f.F8.get()));r.ln=120;P6.set(f.F9.get());r.ln=121;P7.set(l.s.Trim(f.F10.get()));r.ln=122;P8.set(l.s.Trim(f.F11.get()));r.ln=123;P9.set(l.s.Trim(f.F12.get()));r.ln=124;P10.set(f.F13.get());
r.ln=125;P11.set(f.F14.get());r.ln=126;P12.set(f.F15.get());p0.set(P0.get());p1.set(P1.get());p2.set(P2.get());p3.set(P3.get());p4.set(P4.get());p5.set(P5.get());p6.set(P6.get());p7.set(P7.get());p8.set(P8.get());p9.set(P9.get());p10.set(P10.get());p11.set(P11.get());p12.set(P12.get());}r.ln=128;r.e();};cO.mthSAVEEMPLOYEE=function(p0,p1,p2){var f=this.FLD.DF_EMCTEO,m=this.REF,r=l.mR(this,cO,"SaveEmployee",131);var P0=r.cPD("FORCOMMANDHANDLER");var P1=r.cPD("DATAITEM");var P2=r.cPF("RETURNCODE",Fd.F3.Dc);
P0=p0;P1=p1;var C0=r.cDR("SAVEEMPLOYEE","DF_EMDSO","SAVEEMPLOYEE");C0.iC();r.ln=131;{r.ln=138;P0.getAVFRAMEWORKMANAGER().mthAVCLEARMESSAGES(P0,u,u);r.ln=140;C0.mthEXECUTE({FLD:{"XEMPLOYID":f.F2.get(),"XSURNAME":f.F4.get(),"XGIVENAME":f.F5.get(),"XSTREET":f.F6.get(),"XCITY":f.F7.get(),"XSTATE":f.F8.get(),"XPOSTCODE":f.F9.get(),"XPHONEHME":f.F10.get(),"XPHONEBUS":f.F11.get(),"XDEPTMENT":f.F12.get(),"XSALARY":f.F13.get(),"XSTARTDTE":f.F14.get(),"XTERMDATE":f.F15.get()}},{FLD:{"RETURNCODE":P2}});r.ln=142;
P0.getAVFRAMEWORKMANAGER().mthAVRECEIVESYSTEMMESSAGEQUEUE(P0,u);r.ln=144;if(l.and(l.s.eq(P2.get(),"OK"),(P1!=null))){r.ln=146;m.CHANGECOUNT.set(0);r.ln=148;P1.getAVVISUALID2().set(l.add(l.cat(f.F5.get()," "),f.F4.get()));r.ln=149;P1.getAVACOLUMN1().set(f.F6.get());r.ln=150;P1.getAVACOLUMN2().set(f.F7.get());r.ln=151;P1.getAVACOLUMN3().set(f.F8.get());r.ln=152;P1.getAVACOLUMN4().set(f.F4.get());r.ln=153;P1.getAVACOLUMN5().set(f.F5.get());r.ln=154;P1.getAVACOLUMN6().set(f.F10.get());r.ln=155;P1.getAVACOLUMN7().set(f.F11.get());
r.ln=156;P1.getAVACOLUMN8().set(f.F9.get());r.ln=157;P1.getAVNCOLUMN2().set(f.F13.get());r.ln=159;P1.mthAVUPDATEDISPLAY();r.ln=161;P0.getAVFRAMEWORKMANAGER().mthAVCLEARMESSAGES(P0,u,u);r.ln=163;P0.getAVFRAMEWORKMANAGER().mthAVISSUEMESSAGE(l.cat(l.add(l.cat(l.add("Details of ",f.F5.get())," "),f.F4.get())," saved."),u,u,P0,true,u,u);}else{r.ln=167;P0.getAVFRAMEWORKMANAGER().mthAVISSUEMESSAGE(l.cat(l.add(l.cat(l.add("Details of ",f.F5.get())," "),f.F4.get())," NOT saved."),u,"WARNING",P0,u,u,u);}p2.set(P2.get());
}r.ln=171;r.e();};cO.getCHANGECOUNT=function(){return this.REF.CHANGECOUNT.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSURNAME"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);
};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTREET"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XCITY"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XSTATE"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});
}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XSALARY"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});
}},{rp:["PRIM_OBJT","PRIM_FLD","PRIM_WEB.DataRequest"]});