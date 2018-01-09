﻿LANSA.addComponent({id:"A01EMPL_1",nm:"A01EmployeesDetails",ot:"wv",tp:"Dialog",de:"Employees Details",tl:14020001},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé"}[cL],h1:{"ENG":"Employee","FRA":"Identification"}[cL],h2:{"ENG":"Identification","FRA":"Employé"}[cL],h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre"}[cL],
h1:{"ENG":"Employee","FRA":"Titre"}[cL],h2:{"ENG":"Title","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Title","FRA":"Titre"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom"}[cL],h1:{"ENG":"Employee","FRA":"Nom"}[cL],h2:{"ENG":"Surname","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Surname","FRA":"Nom"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms"}[cL],
h2:{"ENG":"Given","FRA":"Employé"}[cL],h3:{"ENG":"Names","FRA":" "}[cL],de:{"ENG":"Given Names","FRA":"Prénoms"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance"}[cL],h1:{"ENG":"Employee","FRA":"Date"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance"}[cL],h3:{"ENG":" ","FRA":"Employé"}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F6:{nm:"XGENDER",an:"xEmployeeGender",
ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre"}[cL],h1:{"ENG":"Employee","FRA":"Genre"}[cL],h2:{"ENG":"Gender","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Gender","FRA":"Genre"}[cL],dv:"Male",ia:["FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue"}[cL],h1:{"ENG":"Street","FRA":"Rue"}[cL],h2:" ",h3:" ",de:{"ENG":"Street","FRA":"Rue"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune"}[cL],h1:{"ENG":"City","FRA":"Commune"}[cL],
h2:" ",h3:" ",de:{"ENG":"City","FRA":"Commune"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat"}[cL],h1:{"ENG":"State","FRA":"Etat"}[cL],h2:" ",h3:" ",de:{"ENG":"State","FRA":"Etat"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],h1:{"ENG":"Postal","FRA":"Code"}[cL],h2:{"ENG":"Code","FRA":"Postal"}[cL],h3:" ",de:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],
dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays"}[cL],h1:{"ENG":"Country","FRA":"Pays"}[cL],h2:" ",h3:" ",de:{"ENG":"Country","FRA":"Pays"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso"}[cL],h1:{"ENG":"Home","FRA":"Téléphone"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel"}[cL],h3:" ",de:{"ENG":"Home Telephone","FRA":"Téléphone personnel"}[cL],dv:"",
ia:["FE"]},F13:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail"}[cL],h1:{"ENG":"Business","FRA":"Téléphone"}[cL],h2:{"ENG":"Telephone","FRA":"Travail"}[cL],h3:" ",de:{"ENG":"Business Telephone","FRA":"Téléphone travail"}[cL],dv:"",ia:["FE"]},F14:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob."}[cL],h1:{"ENG":"Employee","FRA":"Téléphone"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile"}[cL],
h3:" ",de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile"}[cL],dv:"",ia:["FE"]},F15:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel"}[cL],h1:{"ENG":"Annual","FRA":"Salaire"}[cL],h2:{"ENG":"Salary","FRA":"Annuel"}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel"}[cL],dv:0,ia:["FE","RB"]},F16:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche"}[cL],h1:{"ENG":"Start","FRA":"Date"}[cL],
h2:{"ENG":"Date","FRA":"Embauche"}[cL],h3:" ",de:{"ENG":"Start Date","FRA":"Date d'Embauche"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F17:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ"}[cL],h1:{"ENG":"Termination","FRA":"Date"}[cL],h2:{"ENG":"Date","FRA":"Départ"}[cL],h3:" ",de:{"ENG":"Termination Date","FRA":"Date de départ"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département"}[cL],
h1:{"ENG":"Department","FRA":"Code"}[cL],h2:{"ENG":"Code","FRA":"Département"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département"}[cL],dv:"",ia:["FE"]},F19:{nm:"XMONTHSAL",an:"xEmployeeMonthlySalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Monthly Salary","FRA":"Salaire mensuel"}[cL],h1:{"ENG":"Monthly","FRA":"Salaire"}[cL],h2:{"ENG":"Salary","FRA":"Mensuel"}[cL],h3:" ",de:{"ENG":"Monthly Salary","FRA":"Salaire mensuel"}[cL],dv:0,ia:["FE","RB"]},F20:{nm:"XEMPAGE",an:"xEmployeeAge",ft:"I",ln:4,dc:0,
lb:{"ENG":"Employee Age","FRA":"Age Employé"}[cL],h1:{"ENG":"Employee","FRA":"Age"}[cL],h2:{"ENG":"Age","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Employee Age","FRA":"Age de l'employé"}[cL],dv:0,ia:["FE","RB"]},F21:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept"}[cL],h1:{"ENG":"Department","FRA":"Description"}[cL],h2:{"ENG":"Description","FRA":"Département"}[cL],h3:{"ENG":"Description","FRA":"Employé"}[cL],de:{"ENG":"Department Description","FRA":"Description du département"}[cL],
dv:"",ia:["FE","LC"]},F22:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . ."}[cL],h1:{"ENG":"I/O","FRA":"Statut"}[cL],h2:{"ENG":"Status","FRA":"I/O"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,mt:{Create:{},ShowItem:{ps:{"Key1":{pt:"i"}}},Save:{},Delete:{}},ev:{ItemSaved:{},ItemDeleted:{}},co:function(){cO.aN.call(this);this.aF("A01EMPL_1",Fd);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");
var C1=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTMAINROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTAPPBAR","PRIM_TBLO");var C8=this.cR("LAYOUTAPPBARROW1","PRIM_TBLO","Row");var C9=this.cR("LAYOUTAPPBARCOLUMN1","PRIM_TBLO","Column");var C10=this.cR("LAYOUTAPPBARITEM1","PRIM_TBLO","Item");
var C11=this.cR("LAYOUTAPPBARITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTDETAILS","PRIM_TBLO");var C13=this.cR("LAYOUTDETAILSROW1","PRIM_TBLO","Row");var C14=this.cR("LAYOUTDETAILSCOLUMN1","PRIM_TBLO","Column");var C15=this.cR("LAYOUTDETAILSITEMERRORTEXT","PRIM_TBLO","Item");var C16=this.cR("LAYOUTDETAILSITEM1","PRIM_TBLO","Item");var C17=this.cR("LAYOUTDETAILSITEM2","PRIM_TBLO","Item");var C18=this.cR("LAYOUTDETAILSITEM3","PRIM_TBLO","Item");var C19=this.cR("LAYOUTDETAILSITEM4","PRIM_TBLO","Item");
var C20=this.cR("LAYOUTDETAILSITEM5","PRIM_TBLO","Item");var C21=this.cR("LAYOUTDETAILSITEM6","PRIM_TBLO","Item");var C22=this.cR("LAYOUTDETAILSITEM7","PRIM_TBLO","Item");var C23=this.cR("LAYOUTDETAILSITEM8","PRIM_TBLO","Item");var C24=this.cR("LAYOUTDETAILSITEM9","PRIM_TBLO","Item");var C25=this.cR("LAYOUTDETAILSITEM10","PRIM_TBLO","Item");var C26=this.cR("LAYOUTDETAILSITEM11","PRIM_TBLO","Item");var C27=this.cR("LAYOUTDETAILSITEM12","PRIM_TBLO","Item");var C28=this.cR("LAYOUTDETAILSITEM13","PRIM_TBLO","Item");
var C29=this.cR("LAYOUTDETAILSITEM14","PRIM_TBLO","Item");var C30=this.cR("LAYOUTDETAILSITEM15","PRIM_TBLO","Item");var C31=this.cR("LAYOUTDETAILSITEM16","PRIM_TBLO","Item");var C32=this.cR("LAYOUTDETAILSITEM17","PRIM_TBLO","Item");var C33=this.cR("LAYOUTDETAILSITEM18","PRIM_TBLO","Item");var C34=this.cR("LAYOUTDETAILSITEM19","PRIM_TBLO","Item");var C35=this.cR("LAYOUTDETAILSITEM20","PRIM_TBLO","Item");var C36=this.cR("LAYOUTDETAILSITEM21","PRIM_TBLO","Item");var C37=this.cR("APPBAR","PRIM_MD","AppBar");
var C38=this.cR("SAVEICON","PRIM_MD","Icon");var C39=this.cR("DELETEICON","PRIM_MD","Icon");var C40=this.cR("DETAILS","PRIM_PANL");var C41=this.cR("ERRORTEXT","PRIM_MD","Label");var C42=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.EDITFIELD);var C43=this.cF("XEMPLOYEETITLE",Fd.F2.EDITFIELD);var C44=this.cF("XEMPLOYEESURNAME",Fd.F3.EDITFIELD);var C45=this.cF("XEMPLOYEEGIVENNAMES",Fd.F4.EDITFIELD);var C46=this.cF("XEMPLOYEEDATEOFBIRTH",Fd.F5.DATEFIELD);var C47=this.cF("XEMPLOYEEGENDER",Fd.F6.EDITFIELD);
var C48=this.cF("XEMPLOYEESTREET",Fd.F7.EDITFIELD);var C49=this.cF("XEMPLOYEECITY",Fd.F8.EDITFIELD);var C50=this.cF("XEMPLOYEESTATE",Fd.F9.EDITFIELD);var C51=this.cF("XEMPLOYEEPOSTALCODE",Fd.F10.EDITFIELD);var C52=this.cF("XEMPLOYEECOUNTRY",Fd.F11.EDITFIELD);var C53=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F12.EDITFIELD);var C54=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F13.EDITFIELD);var C55=this.cF("XEMPLOYEEMOBILEPHONE",Fd.F14.EDITFIELD);var C56=this.cF("XEMPLOYEESALARY",Fd.F15.SPINEDITFIELD);var C57=this.cF("XEMPLOYEESTARTDATE",Fd.F16.DATEFIELD);
var C58=this.cF("XEMPLOYEETERMINATIONDATE",Fd.F17.DATEFIELD);var C59=this.cF("XDEPARTMENTCODE",Fd.F18.EDITFIELD);var C60=this.cF("XEMPLOYEEMONTHLYSALARY",Fd.F19.SPINEDITFIELD);var C61=this.cF("XEMPLOYEEAGE",Fd.F20.SPINEDITFIELD);var C62=this.cF("XEMPLOYEEDEPARTMENT",Fd.F21.EDITFIELD);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(56);C2.setUnits("CONTENT");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(57);C3.setUnits("CONTENT");
C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);C4.iC();C5.setColumn(C1);C5.setManage(C37);C5.setParent(C0);C5.setRow(C2);C5.setSizing("FITTOWIDTH");C5.setAlignment("TOPCENTER");C5.iC();C6.setManage(C40);C6.setParent(C0);C6.setRow(C4);C6.setColumn(C1);C6.iC();C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.iC();C9.setDisplayPosition(1);C9.setParent(C7);C9.iC();C10.setColumn(C9);C10.setFlow("LEFT");C10.setManage(C39);C10.setParent(C7);C10.setRow(C8);C10.setSizing("NONE");C10.setAlignment("CENTERRIGHT");
C10.iC();C11.setColumn(C9);C11.setFlow("LEFT");C11.setManage(C38);C11.setParent(C7);C11.setRow(C8);C11.setSizing("NONE");C11.setAlignment("CENTERRIGHT");C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);C14.iC();C15.setManage(C41);C15.setParent(C12);C15.setRow(C13);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setColumn(C14);C15.setAlignment("TOPCENTER");C15.setFlow("DOWN");C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C14);
C16.setManage(C42);C16.setParent(C12);C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginRight(16);C16.setMarginLeft(16);C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C14);C17.setManage(C43);C17.setParent(C12);C17.setRow(C13);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginRight(16);C17.setMarginLeft(16);C17.iC();C18.setAlignment("TOPCENTER");C18.setColumn(C14);C18.setManage(C44);C18.setParent(C12);C18.setRow(C13);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");
C18.setMarginRight(16);C18.setMarginLeft(16);C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C14);C19.setManage(C45);C19.setParent(C12);C19.setRow(C13);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.setMarginRight(16);C19.setMarginLeft(16);C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C14);C20.setManage(C46);C20.setParent(C12);C20.setRow(C13);C20.setSizing("FITTOWIDTH");C20.setFlow("DOWN");C20.setMarginRight(16);C20.setMarginLeft(16);C20.iC();C21.setAlignment("TOPCENTER");C21.setColumn(C14);
C21.setManage(C47);C21.setParent(C12);C21.setRow(C13);C21.setSizing("FITTOWIDTH");C21.setFlow("DOWN");C21.setMarginRight(16);C21.setMarginLeft(16);C21.iC();C22.setAlignment("TOPCENTER");C22.setColumn(C14);C22.setManage(C48);C22.setParent(C12);C22.setRow(C13);C22.setSizing("FITTOWIDTH");C22.setFlow("DOWN");C22.setMarginRight(16);C22.setMarginLeft(16);C22.iC();C23.setAlignment("TOPCENTER");C23.setColumn(C14);C23.setManage(C49);C23.setParent(C12);C23.setRow(C13);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");
C23.setMarginRight(16);C23.setMarginLeft(16);C23.iC();C24.setAlignment("TOPCENTER");C24.setColumn(C14);C24.setManage(C50);C24.setParent(C12);C24.setRow(C13);C24.setSizing("FITTOWIDTH");C24.setFlow("DOWN");C24.setMarginRight(16);C24.setMarginLeft(16);C24.iC();C25.setAlignment("TOPCENTER");C25.setColumn(C14);C25.setManage(C51);C25.setParent(C12);C25.setRow(C13);C25.setSizing("FITTOWIDTH");C25.setFlow("DOWN");C25.setMarginRight(16);C25.setMarginLeft(16);C25.iC();C26.setAlignment("TOPCENTER");C26.setColumn(C14);
C26.setManage(C52);C26.setParent(C12);C26.setRow(C13);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginRight(16);C26.setMarginLeft(16);C26.iC();C27.setAlignment("TOPCENTER");C27.setColumn(C14);C27.setManage(C53);C27.setParent(C12);C27.setRow(C13);C27.setSizing("FITTOWIDTH");C27.setFlow("DOWN");C27.setMarginRight(16);C27.setMarginLeft(16);C27.iC();C28.setAlignment("TOPCENTER");C28.setColumn(C14);C28.setManage(C54);C28.setParent(C12);C28.setRow(C13);C28.setSizing("FITTOWIDTH");C28.setFlow("DOWN");
C28.setMarginRight(16);C28.setMarginLeft(16);C28.iC();C29.setAlignment("TOPCENTER");C29.setColumn(C14);C29.setManage(C55);C29.setParent(C12);C29.setRow(C13);C29.setSizing("FITTOWIDTH");C29.setFlow("DOWN");C29.setMarginRight(16);C29.setMarginLeft(16);C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C14);C30.setManage(C56);C30.setParent(C12);C30.setRow(C13);C30.setSizing("FITTOWIDTH");C30.setFlow("DOWN");C30.setMarginRight(16);C30.setMarginLeft(16);C30.iC();C31.setAlignment("TOPCENTER");C31.setColumn(C14);
C31.setManage(C57);C31.setParent(C12);C31.setRow(C13);C31.setSizing("FITTOWIDTH");C31.setFlow("DOWN");C31.setMarginRight(16);C31.setMarginLeft(16);C31.iC();C32.setAlignment("TOPCENTER");C32.setColumn(C14);C32.setManage(C58);C32.setParent(C12);C32.setRow(C13);C32.setSizing("FITTOWIDTH");C32.setFlow("DOWN");C32.setMarginRight(16);C32.setMarginLeft(16);C32.iC();C33.setAlignment("TOPCENTER");C33.setColumn(C14);C33.setManage(C59);C33.setParent(C12);C33.setRow(C13);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");
C33.setMarginRight(16);C33.setMarginLeft(16);C33.iC();C34.setAlignment("TOPCENTER");C34.setColumn(C14);C34.setManage(C60);C34.setParent(C12);C34.setRow(C13);C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginRight(16);C34.setMarginLeft(16);C34.iC();C35.setAlignment("TOPCENTER");C35.setColumn(C14);C35.setManage(C61);C35.setParent(C12);C35.setRow(C13);C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginRight(16);C35.setMarginLeft(16);C35.iC();C36.setAlignment("TOPCENTER");C36.setColumn(C14);
C36.setManage(C62);C36.setParent(C12);C36.setRow(C13);C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.setMarginRight(16);C36.setMarginLeft(16);C36.iC();C37.setDisplayPosition(1);C37.setIcon("arrow_back");C37.setParent(this);C37.setTabPosition(1);C37.setTabStop(false);C37.setWidth(806);C37.setLayoutManager(C7);C37.setCaption("Details");C37.setThemeDrawStyle("Heading1");C37.iC();C38.setDisplayPosition(1);C38.setLeft(758);C38.setParent(C37);C38.setTabPosition(1);C38.setTabStop(false);C38.setTop(0);
C38.setHeight(57);C38.setIcon("check");C38.iC();C39.setDisplayPosition(2);C39.setIcon("delete_forever");C39.setLeft(710);C39.setParent(C37);C39.setTabPosition(2);C39.setTabStop(false);C39.setTop(0);C39.setHeight(57);C39.iC();C40.setDisplayPosition(2);C40.setHeight(446);C40.setImageAlignment("STRETCH");C40.setParent(this);C40.setTabPosition(1);C40.setTop(113);C40.setWidth(806);C40.setVerticalScroll(true);C40.setLayoutManager(C12);C40.setLeft(0);C40.iC();C41.setCaption("Errors");C41.setDisplayPosition(1);
C41.setLeft(0);C41.setParent(C40);C41.setTabPosition(3);C41.setTabStop(false);C41.setHeight(49);C41.setWidth(788);C41.setCaptionMarginLeft(0);C41.setCaptionMarginBottom(0);C41.setCaptionAlignment("TOPLEFT");C41.setCaptionMarginRight(0);C41.setCaptionMarginTop(0);C41.setPaddingBottom(16);C41.setPaddingTop(16);C41.setPaddingRight(16);C41.setPaddingLeft(16);C41.setThemeDrawStyle("LightError");C41.setIconHeight(32);C41.setTop(0);C41.setVisible(false);C41.iC();C42.setDisplayPosition(2);C42.setLabel("Identification");
C42.setParent(C40);C42.setReadOnly(true);C42.setTabPosition(2);C42.aD();C42.iC();C43.setDisplayPosition(3);C43.setLabel("Title");C43.setParent(C40);C43.setReadOnly(false);C43.setTabPosition(3);C43.aD();C43.iC();C44.setDisplayPosition(4);C44.setLabel("Surname");C44.setParent(C40);C44.setReadOnly(false);C44.setTabPosition(4);C44.aD();C44.iC();C45.setDisplayPosition(5);C45.setLabel("Given Names");C45.setParent(C40);C45.setReadOnly(false);C45.setTabPosition(5);C45.aD();C45.iC();C46.setDisplayPosition(6);
C46.setLabel("Date of Birth");C46.setParent(C40);C46.setReadOnly(false);C46.setTabPosition(6);C46.aD();C46.iC();C47.setDisplayPosition(7);C47.setLabel("Gender");C47.setParent(C40);C47.setReadOnly(false);C47.setTabPosition(7);C47.aD();C47.iC();C48.setDisplayPosition(8);C48.setLabel("Street");C48.setParent(C40);C48.setReadOnly(false);C48.setTabPosition(8);C48.aD();C48.iC();C49.setDisplayPosition(9);C49.setLabel("City");C49.setParent(C40);C49.setReadOnly(false);C49.setTabPosition(9);C49.aD();C49.iC();
C50.setDisplayPosition(10);C50.setLabel("State");C50.setParent(C40);C50.setReadOnly(false);C50.setTabPosition(10);C50.aD();C50.iC();C51.setDisplayPosition(11);C51.setLabel("Postal Code");C51.setParent(C40);C51.setReadOnly(false);C51.setTabPosition(11);C51.aD();C51.iC();C52.setDisplayPosition(12);C52.setLabel("Country");C52.setParent(C40);C52.setReadOnly(false);C52.setTabPosition(12);C52.aD();C52.iC();C53.setDisplayPosition(13);C53.setLabel("Home Telephone");C53.setParent(C40);C53.setReadOnly(false);
C53.setTabPosition(13);C53.aD();C53.iC();C54.setDisplayPosition(14);C54.setLabel("Business Telephone");C54.setParent(C40);C54.setReadOnly(false);C54.setTabPosition(14);C54.aD();C54.iC();C55.setDisplayPosition(15);C55.setLabel("Mobile Phone");C55.setParent(C40);C55.setReadOnly(false);C55.setTabPosition(15);C55.aD();C55.iC();C56.setDisplayPosition(16);C56.setLabel("Annual Salary");C56.setParent(C40);C56.setReadOnly(false);C56.setTabPosition(16);C56.aD();C56.iC();C57.setDisplayPosition(17);C57.setLabel("Start Date");
C57.setParent(C40);C57.setReadOnly(false);C57.setTabPosition(17);C57.aD();C57.iC();C58.setDisplayPosition(18);C58.setLabel("Termination Date");C58.setParent(C40);C58.setReadOnly(false);C58.setTabPosition(18);C58.aD();C58.iC();C59.setDisplayPosition(19);C59.setLabel("Department");C59.setParent(C40);C59.setReadOnly(false);C59.setTabPosition(19);C59.aD();C59.iC();C60.setDisplayPosition(20);C60.setLabel("Monthly Salary");C60.setParent(C40);C60.setReadOnly(false);C60.setTabPosition(20);C60.aD();C60.iC();
C61.setDisplayPosition(21);C61.setLabel("Employee Age");C61.setParent(C40);C61.setReadOnly(false);C61.setTabPosition(21);C61.aD();C61.iC();C62.setDisplayPosition(22);C62.setLabel("Department Description");C62.setParent(C40);C62.setReadOnly(false);C62.setTabPosition(22);C62.aD();C62.iC();l.WEB().aH("DEVICECHANGED",this,e1);C37.aH("ICONCLICK",this,e2);C38.aH("CLICK",this,e3);C39.aH("CLICK",this,e4);this.setHeight(561);this.setWidth(808);this.setLayoutManager(C0);this.setAutoClose(true);this.aH("CREATEINSTANCE",this,e1);
}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance #SYS_WEB.DeviceChanged",85);r.ln=85;{r.ln=87;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=89;this.setPlacement("FULLSCREEN");}else{r.ln=93;this.setPlacement("CENTER");}}r.ln=97;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Appbar.IconClick",99);r.ln=99;{r.ln=101;this.mthCLOSE();}r.ln=103;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#SaveIcon.Click",105);r.ln=105;{r.ln=107;this.mthSAVE();}r.ln=109;r.e();};function e4(sender,Ps)
{var r=l.eR(this,cO,"#DeleteIcon.Click",111);r.ln=111;{r.ln=113;this.mthDELETE();}r.ln=115;r.e();};cO.mthCREATE=function(){var m=this.REF,r=l.mR(this,cO,"Create",121);r.ln=121;{r.ln=123;m.XEMPLOYEEIDENTIFICATION.setReadOnly(false);r.ln=125;m.DELETEICON.setVisible(false);r.ln=127;this.mthSHOW();}r.ln=129;r.e();};cO.mthSHOWITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowItem",131),mth=r;var P0=r.cPF("KEY1",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("READ","A01EMPL_2","READ");C0.iC();C0.aH("COMPLETED",this,e5);
r.ln=131;{r.ln=136;m.DETAILS.setVisible(false);m.SAVEICON.setVisible(false);m.DELETEICON.setVisible(false);r.ln=138;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":m.XEMPLOYEETITLE,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH,"XGENDER":m.XEMPLOYEEGENDER,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":m.XEMPLOYEECOUNTRY,"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE,"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE,"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE,"XSALARY":m.XEMPLOYEESALARY,"XSTARTDTE":m.XEMPLOYEESTARTDATE,"XTERMDATE":m.XEMPLOYEETERMINATIONDATE,"XDEPTMENT":m.XDEPARTMENTCODE,"XMONTHSAL":m.XEMPLOYEEMONTHLYSALARY,"XEMPAGE":m.XEMPLOYEEAGE,"XEMPDEPT":m.XEMPLOYEEDEPARTMENT}});
r.ln=140;this.mthSHOW();}r.ln=148;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Read.Completed",142,mth);r.ln=142;{r.ln=144;m.DETAILS.setVisible(true);m.SAVEICON.setVisible(true);m.DELETEICON.setVisible(true);}r.ln=146;r.e();}};cO.mthSAVE=function(){var f=this.FLD.A01EMPL_1,m=this.REF,r=l.mR(this,cO,"Save",150),mth=r;var C0=r.cDR("SAVE","A01EMPL_2","SAVE");C0.iC();C0.aH("COMPLETED",this,e6);r.ln=150;{r.ln=154;l.MSGQ().mthCLEARALL();r.ln=156;m.ERRORTEXT.setVisible(false);r.ln=158;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get(),"XEMPTITLE":m.XEMPLOYEETITLE.get(),"XSURNAME":m.XEMPLOYEESURNAME.get(),"XGIVENAME":m.XEMPLOYEEGIVENNAMES.get(),"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH.get(),"XGENDER":m.XEMPLOYEEGENDER.get(),"XSTREET":m.XEMPLOYEESTREET.get(),"XCITY":m.XEMPLOYEECITY.get(),"XSTATE":m.XEMPLOYEESTATE.get(),"XPOSTCODE":m.XEMPLOYEEPOSTALCODE.get(),"XCOUNTRY":m.XEMPLOYEECOUNTRY.get(),"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE.get(),"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE.get(),"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE.get(),"XSALARY":m.XEMPLOYEESALARY.get(),"XSTARTDTE":m.XEMPLOYEESTARTDATE.get(),"XTERMDATE":m.XEMPLOYEETERMINATIONDATE.get(),"XDEPTMENT":m.XDEPARTMENTCODE.get(),"XMONTHSAL":m.XEMPLOYEEMONTHLYSALARY.get(),"XEMPAGE":m.XEMPLOYEEAGE.get(),"XEMPDEPT":m.XEMPLOYEEDEPARTMENT.get()}},{FLD:{"IO$STS":f.F22}});
}r.ln=186;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#Save.Completed",160,mth);r.ln=160;{r.ln=162;if(l.s.eq(f.F22.get(),"OK")){r.ln=164;this.mthCLOSE();r.ln=166;this.fE("ITEMSAVED");}else{r.ln=170;m.ERRORTEXT.setCaption("");r.ln=172;{var l1=l.MSGQ().getMessages().cI();while(l1.step()){var MESSAGE=r.sR("MESSAGE",l1.item());r.ln=174;m.ERRORTEXT.setCaption(l.cat(m.ERRORTEXT.getCaption(),l.cat(MESSAGE.getText(),l.n.AsUnicodeString(10))));r.ln=176;}l1.end();r.dR("MESSAGE");}r.ln=178;m.ERRORTEXT.setVisible(true);
r.ln=180;m.DETAILS.setVerticalScrollPos(0);}}r.ln=184;r.e();}};cO.mthDELETE=function(){var m=this.REF,r=l.mR(this,cO,"Delete",188),mth=r;var C0=r.cDR("DELETE","A01EMPL_2","DELETE");C0.iC();C0.aH("COMPLETED",this,e7);r.ln=188;{r.ln=192;m.ERRORTEXT.setVisible(false);r.ln=194;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get()}},{});}r.ln=204;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#Delete.Completed",196,mth);r.ln=196;{r.ln=198;this.mthCLOSE();r.ln=200;this.fE("ITEMDELETED");
}r.ln=202;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.EDITFIELD=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XEMPLOYID",cn:"EditField"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");
var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});
Fd.F2.EDITFIELD=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XEMPTITLE",cn:"EditField"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F3.EDITFIELD=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XSURNAME",cn:"EditField"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F4.EDITFIELD=function()
{this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XGIVENAME",cn:"EditField"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XEMPDOB"});Fd.F5.DATEFIELD=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.DATEFIELD,an:"PRIM_MD",at:"DateTime",fn:"XEMPDOB",cn:"DateField"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F6.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");
var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F6.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});Fd.F6.EDITFIELD=function(){this.aN.call(this,new Fd.F6.Dc());};l.cFC({co:Fd.F6.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XGENDER",cn:"EditField"});
}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F7.EDITFIELD=function(){this.aN.call(this,new Fd.F7.Dc());};l.cFC({co:Fd.F7.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XSTREET",cn:"EditField"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F8.EDITFIELD=function(){this.aN.call(this,new Fd.F8.Dc());};l.cFC({co:Fd.F8.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XCITY",cn:"EditField"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);
};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F9.EDITFIELD=function(){this.aN.call(this,new Fd.F9.Dc());};l.cFC({co:Fd.F9.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XSTATE",cn:"EditField"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F10.EDITFIELD=function(){this.aN.call(this,new Fd.F10.Dc());};l.cFC({co:Fd.F10.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XPOSTCODE",cn:"EditField"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XCOUNTRY"});
Fd.F11.EDITFIELD=function(){this.aN.call(this,new Fd.F11.Dc());};l.cFC({co:Fd.F11.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XCOUNTRY",cn:"EditField"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F12.EDITFIELD=function(){this.aN.call(this,new Fd.F12.Dc());};l.cFC({co:Fd.F12.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XPHONEHME",cn:"EditField"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F13.EDITFIELD=function()
{this.aN.call(this,new Fd.F13.Dc());};l.cFC({co:Fd.F13.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XPHONEBUS",cn:"EditField"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XPHONEMOB"});Fd.F14.EDITFIELD=function(){this.aN.call(this,new Fd.F14.Dc());};l.cFC({co:Fd.F14.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XPHONEMOB",cn:"EditField"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F15.SPINEDITFIELD=function(){
this.aN.call(this,new Fd.F15.Dc());};l.cFC({co:Fd.F15.SPINEDITFIELD,an:"PRIM_MD",at:"SpinEdit",fn:"XSALARY",cn:"SpinEditField"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});Fd.F16.DATEFIELD=function(){this.aN.call(this,new Fd.F16.Dc());};l.cFC({co:Fd.F16.DATEFIELD,an:"PRIM_MD",at:"DateTime",fn:"XSTARTDTE",cn:"DateField"});}{Fd.F17.Dc=function(){this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});Fd.F17.DATEFIELD=function()
{this.aN.call(this,new Fd.F17.Dc());};l.cFC({co:Fd.F17.DATEFIELD,an:"PRIM_MD",at:"DateTime",fn:"XTERMDATE",cn:"DateField"});}{Fd.F18.Dc=function(){this.aN.call(this,Fd.F18);};l.cFC({co:Fd.F18.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});Fd.F18.EDITFIELD=function(){this.aN.call(this,new Fd.F18.Dc());};l.cFC({co:Fd.F18.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XDEPTMENT",cn:"EditField"});}{Fd.F19.Dc=function(){this.aN.call(this,Fd.F19);};l.cFC({co:Fd.F19.Dc,an:"PRIM_FLD",fn:"XMONTHSAL"});Fd.F19.SPINEDITFIELD=function()
{this.aN.call(this,new Fd.F19.Dc());};l.cFC({co:Fd.F19.SPINEDITFIELD,an:"PRIM_MD",at:"SpinEdit",fn:"XMONTHSAL",cn:"SpinEditField"});}{Fd.F20.Dc=function(){this.aN.call(this,Fd.F20);};l.cFC({co:Fd.F20.Dc,an:"PRIM_FLD",fn:"XEMPAGE"});Fd.F20.SPINEDITFIELD=function(){this.aN.call(this,new Fd.F20.Dc());};l.cFC({co:Fd.F20.SPINEDITFIELD,an:"PRIM_MD",at:"SpinEdit",fn:"XEMPAGE",cn:"SpinEditField"});}{Fd.F21.Dc=function(){this.aN.call(this,Fd.F21);};l.cFC({co:Fd.F21.Dc,an:"PRIM_FLD",fn:"XEMPDEPT"});Fd.F21.EDITFIELD=function()
{this.aN.call(this,new Fd.F21.Dc());};l.cFC({co:Fd.F21.EDITFIELD,an:"PRIM_MD",at:"Edit",fn:"XEMPDEPT",cn:"EditField"});}},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.AppBar","PRIM_MD.Icon","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_PKLT","PRIM_MD.DateTime","PRIM_MD.SpinEdit","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_MSGQ"]});