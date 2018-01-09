﻿LANSA.addComponent({id:"DF_T40H2O",ot:"rp",tp:"Reusable Part",de:"\\OC=Person Salary Command Handler",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" "}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],
h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],dv:"",ia:["FE"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},
uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T40H2O",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cR("BUTTONPANEL","VF_UI049O");var C2=this.cR("LABEL1","PRIM_LABL");var C3=this.cR("LABEL2","PRIM_LABL");var C4=this.cR("DROPDOWN1","DF_T40DDO");var C5=this.cR("LABEL7","PRIM_LABL");var C6=this.cF("XEMPLOYEESALARY",Fd.F1.VISUALEDIT);var C7=this.cR("LABEL3","PRIM_LABL");var C8=this.cR("DROPDOWN2","DF_T40DDO");
var C9=this.cR("LABEL4","PRIM_LABL");var C10=this.cR("CHECKBOX1","PRIM_CKBX");var C11=this.cR("LABEL5","PRIM_LABL");var C12=this.cR("DROPDOWN3","DF_T40DDO");var C13=this.cR("LABEL6","PRIM_LABL");var C14=this.cR("DROPDOWN4","DF_T40DDO");var C15=this.cR("PAGE_GRAPH","PRIM_WEB","Page");var C16=this.cR("ATTACHITEM1","PRIM_ATLI");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setLeft(24);C1.setParent(this);C1.setTop(326);C1.setWidth(273);C1.setHeight(41);C1.iC();C2.setCaption("Employee number and full name");
C2.setDisplayPosition(2);C2.setEllipses("WORD");C2.setHeight(25);C2.setLeft(16);C2.setParent(this);C2.setTabPosition(2);C2.setTabStop(false);C2.setTop(8);C2.setVerticalAlignment("CENTER");C2.setWidth(289);C2.iC();C3.setCaption("Contract/Permanent");C3.setDisplayPosition(7);C3.setEllipses("WORD");C3.setHeight(19);C3.setLeft(34);C3.setParent(this);C3.setTabPosition(7);C3.setTabStop(false);C3.setTop(40);C3.setVerticalAlignment("CENTER");C3.setWidth(120);C3.iC();C4.setDisplayPosition(6);C4.setHeight(19);
C4.setLeft(184);C4.setParent(this);C4.setTabPosition(6);C4.setTop(40);C4.setWidth(113);C4.iC();C5.setCaption("Salary");C5.setDisplayPosition(14);C5.setEllipses("WORD");C5.setHeight(19);C5.setLeft(34);C5.setParent(this);C5.setTabPosition(14);C5.setTabStop(false);C5.setTop(64);C5.setVerticalAlignment("CENTER");C5.setWidth(120);C5.iC();C6.setDisplayPosition(8);C6.setLeft(184);C6.setParent(this);C6.setTabPosition(8);C6.setTop(64);C6.setWidth(113);C6.setMarginLeft(0);C6.aD();C6.iC();C7.setCaption("Car");
C7.setDisplayPosition(9);C7.setEllipses("WORD");C7.setHeight(19);C7.setLeft(34);C7.setParent(this);C7.setTabPosition(9);C7.setTabStop(false);C7.setTop(88);C7.setVerticalAlignment("CENTER");C7.setWidth(120);C7.iC();C8.setDisplayPosition(3);C8.setHeight(19);C8.setLeft(184);C8.setParent(this);C8.setTabPosition(3);C8.setTop(88);C8.setWidth(113);C8.iC();C9.setCaption("Parking Space");C9.setDisplayPosition(12);C9.setEllipses("WORD");C9.setHeight(19);C9.setLeft(34);C9.setParent(this);C9.setTabPosition(12);
C9.setTabStop(false);C9.setTop(112);C9.setVerticalAlignment("CENTER");C9.setWidth(120);C9.iC();C10.setDisplayPosition(10);C10.setLeft(184);C10.setParent(this);C10.setTabPosition(10);C10.setTop(112);C10.setImagePosition("AFTERCAPTION");C10.setWidth(33);C10.setHeight(19);C10.iC();C11.setCaption("Pension Plan");C11.setDisplayPosition(11);C11.setEllipses("WORD");C11.setHeight(19);C11.setLeft(34);C11.setParent(this);C11.setTabPosition(11);C11.setTabStop(false);C11.setTop(136);C11.setVerticalAlignment("CENTER");
C11.setWidth(120);C11.iC();C12.setDisplayPosition(5);C12.setHeight(19);C12.setLeft(184);C12.setParent(this);C12.setTabPosition(5);C12.setTop(136);C12.setWidth(113);C12.iC();C13.setCaption("Health Plan");C13.setDisplayPosition(13);C13.setEllipses("WORD");C13.setHeight(19);C13.setLeft(34);C13.setParent(this);C13.setTabPosition(13);C13.setTabStop(false);C13.setTop(160);C13.setVerticalAlignment("CENTER");C13.setWidth(120);C13.iC();C14.setDisplayPosition(4);C14.setHeight(19);C14.setLeft(184);C14.setParent(this);
C14.setTabPosition(4);C14.setTop(160);C14.setWidth(113);C14.iC();C15.setDisplayPosition(15);C15.setLeft(24);C15.setParent(this);C15.setTabPosition(15);C15.setTabStop(false);C15.setTop(200);C15.setHeight(110);C15.setWidth(350);C15.iC();C16.setAttachment("LEFT");C16.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C16.iC();C1.aH("BUTTONCLICKED",this,e1);this.setHeight(377);this.setWidth(393);this.setLayoutManager(null);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",54);
r.ln=54;{r.ln=57;this.setAVCONTENTNEEDSSHIELDING(true);r.ln=60;m.BUTTONPANEL.mthUINITIALIZE(false,"LEFT");r.ln=61;m.BUTTONPANEL.mthUADDBUTTON("Save","SAVE",u,u);r.ln=64;m.DROPDOWN1.mthADD("C",u,"Contract",u);r.ln=65;m.DROPDOWN1.mthADD("P",u,"Permanent",u);r.ln=68;m.DROPDOWN2.mthADD("N",u,"None",u);r.ln=69;m.DROPDOWN2.mthADD("1",u,"Car - Grade 1",u);r.ln=70;m.DROPDOWN2.mthADD("2",u,"Car - Grade 2",u);r.ln=73;m.DROPDOWN3.mthADD("N",u,"None",u);r.ln=74;m.DROPDOWN3.mthADD("401K",u,"401K",u);r.ln=75;m.DROPDOWN3.mthADD("OTH",u,"Other",u);
r.ln=78;m.DROPDOWN4.mthADD("N",u,"None",u);r.ln=79;m.DROPDOWN4.mthADD("HMO",u,"HMO",u);r.ln=80;m.DROPDOWN4.mthADD("OTH",u,"Other",u);}r.ln=82;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",85);r.ln=85;{r.ln=87;m.BUTTONPANEL.mthUTERMINATE();r.ln=89;cA.mthUTERMINATE.call(this);}r.ln=91;r.e();};cO.mthUEXECUTE=function(p0,p1){var f=this.FLD.DF_T40H2O,m=this.REF,r=l.mR(this,cO,"uExecute",94);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");
P0.set(p0.get());P1=p1;var C0=r.cD("C0");var C1=r.cF("EMPSAL",Fd.F2.Dc);var C2=r.cF("REMSAL",Fd.F2.Dc);C1.iC();C2.iC();r.ln=94;{r.ln=100;C0=r.sR("C0",this.getAVASSOCIATEDINSTANCE());r.ln=102;if((C0!=null)){r.ln=104;f.F3.set(C0.getAVVISUALID1().get());r.ln=105;f.F4.set(C0.getAVACOLUMN4().get());r.ln=106;f.F5.set(C0.getAVACOLUMN5().get());r.ln=107;m.XEMPLOYEESALARY.set(C0.getAVNCOLUMN2().get());r.ln=109;m.LABEL1.setCaption(l.add(l.cat(l.add(l.cat(f.F3.get()," - "),f.F4.get()),", "),f.F5.get()));r.ln=112;
m.DROPDOWN1.mthFIND("P",u,u);r.ln=113;m.DROPDOWN2.mthFIND("1",u,u);r.ln=114;m.DROPDOWN3.mthFIND("401K",u,u);r.ln=115;m.DROPDOWN4.mthFIND("HMO",u,u);r.ln=116;m.CHECKBOX1.setButtonState("CHECKED");r.ln=118;C1.set(l.n.Round(l.div(m.XEMPLOYEESALARY.get(),1000),"UP"));r.ln=119;C2.set(l.sub(3000,C1.get()));r.ln=121;m.PAGE_GRAPH.setSource(l.add(l.cat(l.add(l.cat(l.cat(l.cat(l.cat("https://chart.googleapis.com/chart?cht=p3&chs=350x110&chds=a&chd=t:",l.n.AsString(C2.get())),","),l.n.AsString(C1.get())),"&chl=Dept|"),f.F5.get()),"_"),f.F4.get()));
}p0.set(P0.get());}r.ln=125;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#ButtonPanel.ButtonClicked",128);r.ln=128;{r.ln=130;l.WEB().mthALERT("This is a demonstration panel only. Save has not been implemented.");}r.ln=132;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(293);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XSALARY",cn:"VisualEdit"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC010O","DF_EMCTLO","VF_UI049O","DF_T40DDO"],rp:["PRIM_LABL","PRIM_EVEF","PRIM_CKBX","PRIM_WEB.Page","PRIM_ATLI","PRIM_FLD"],dc:["VF_LM003O"]});