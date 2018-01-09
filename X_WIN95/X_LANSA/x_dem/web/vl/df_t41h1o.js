﻿LANSA.addComponent({id:"DF_T41H1O",ot:"rp",tp:"Reusable Part",de:"\\OC=Command Handler",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"XEMPLOYID",
an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],dv:"",ia:["FE"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",
ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},ClearAllPanelContent:{}},co:function(){cO.aN.call(this);this.aF("DF_T41H1O",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("ATTACHITEM3","PRIM_ATLI");var C3=this.cR("ATTACHITEM4","PRIM_ATLI");var C4=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");
var C5=this.cR("UPDATEINSTANCELISTBUTTON","PRIM_PHBN");var C6=this.cR("DELETEINSTANCELISTBUTTON","PRIM_PHBN");var C7=this.cR("NEWINSTANCELISTBUTTON","PRIM_PHBN");var C8=this.cF("COUNTEMPLOYEES",Fd.F1.Dc);C0.setManage(C6);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.iC();C1.setManage(C4);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("TOP");C1.iC();C2.setManage(C7);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("TOP");C2.iC();
C3.setManage(C5);C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("TOP");C3.iC();C4.setCaption("See component DF_T41H1O for details of this COMMAND HANDLER");C4.setDisplayPosition(1);C4.setHeight(46);C4.setLeft(8);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(8);C4.setWidth(657);C4.setVerticalAlignment("CENTER");C4.iC();C5.setParent(this);C5.setDisplayPosition(2);C5.setTabPosition(2);C5.setLeft(8);C5.setTop(54);C5.setWidth(657);C5.iC();C6.setParent(this);
C6.setDisplayPosition(3);C6.setTabPosition(3);C6.setLeft(8);C6.setTop(79);C6.setWidth(657);C6.iC();C7.setParent(this);C7.setDisplayPosition(4);C7.setTabPosition(4);C7.setLeft(8);C7.setTop(104);C7.setWidth(657);C7.iC();this.REF.MAINPANELATTACHMENTMANAGER.setMarginBottom(8);this.REF.MAINPANELATTACHMENTMANAGER.setMarginLeft(8);this.REF.MAINPANELATTACHMENTMANAGER.setMarginRight(8);this.REF.MAINPANELATTACHMENTMANAGER.setMarginTop(8);C8.aD();C8.iC();C5.aH("CLICK",this,e2);C6.aH("CLICK",this,e1);C7.aH("CLICK",this,e3);
this.setHeight(369);this.setWidth(673);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var f=this.FLD.DF_T41H1O,m=this.REF,r=l.mR(this,cO,"uExecute",39);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=39;{r.ln=41;cA.mthUEXECUTE.call(this,P0,P1);r.ln=43;this.mthAVGETASSOCIATEDINSTANCE(u,f.F2,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=45;this.mthCLEARALLPANELCONTENT();r.ln=47;{var v1=this.getAVCOMMANDTYPE();
if(r.ln=49,l.or(l.s.eq(v1,"NEW"),l.s.eq(v1,"COMMAND_NEW"))){r.ln=50;m.NEWINSTANCELISTBUTTON.setVisible(true);m.NEWINSTANCELISTBUTTON.setCaption("Click to create a new employee in the instance list");}else if(r.ln=52,l.or(l.s.eq(v1,"DELETE"),l.s.eq(v1,"COMMAND_DELETE"))){r.ln=53;if((this.REF.AVLISTMANAGER.getCURRENTINSTANCE()==null)){r.ln=54;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("No current employee details found.",u,u,this,u,u,u);}else{r.ln=56;m.DELETEINSTANCELISTBUTTON.setVisible(true);m.DELETEINSTANCELISTBUTTON.setCaption(l.cat(l.cat("Click to delete ",this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVAKEY1().get())," from the instance list"));
}}else{r.ln=61;if((this.REF.AVLISTMANAGER.getCURRENTINSTANCE()==null)){r.ln=62;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("No current employee details found.",u,u,this,u,u,u);}else{r.ln=64;m.UPDATEINSTANCELISTBUTTON.setVisible(true);m.UPDATEINSTANCELISTBUTTON.setCaption(l.cat(l.cat("Click to update ",this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVAKEY1().get())," in the instance list"));}}r.ln=67;}p0.set(P0.get());}r.ln=69;r.e();};cO.mthCLEARALLPANELCONTENT=function(){var m=this.REF,r=l.mR(this,cO,"ClearAllPanelContent",72);
r.ln=72;{r.ln=74;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=76;m.UPDATEINSTANCELISTBUTTON.setVisible(false);m.DELETEINSTANCELISTBUTTON.setVisible(false);m.NEWINSTANCELISTBUTTON.setVisible(false);}r.ln=78;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#DeleteInstanceListButton.Click",82);r.ln=82;{r.ln=84;this.mthCLEARALLPANELCONTENT();r.ln=86;if((this.REF.AVLISTMANAGER.getCURRENTINSTANCE()==null)){r.ln=88;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("No current employee details found.",u,u,this,u,u,u);
}else{r.ln=92;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat("Employee ",this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVAKEY1().get())," removed from instance list."),u,u,this,u,u,u);r.ln=94;this.REF.AVLISTMANAGER.mthREMOVEFROMLIST(this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVAKEY1().get(),u,u,u,u,u,u,u,u,u,u);}}r.ln=98;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UpdateInstanceListButton.Click",101);var C0=r.cD("C0");var C1=r.cR("SECONDS","PRIM_ALPH");C1.iC();r.ln=101;
{r.ln=106;this.mthCLEARALLPANELCONTENT();r.ln=108;C0=r.sR("C0",this.REF.AVLISTMANAGER.getCURRENTINSTANCE());r.ln=110;if((C0==null)){r.ln=112;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("No current employee details found.",u,u,this,u,u,u);}else{r.ln=116;C1.set(l.s.Substring(l.eSV("*TIMEC"),5,2));r.ln=118;C0.getAVVISUALID1().set(l.cat(C0.getAVVISUALID1().get(),C1.get()));r.ln=120;C0.getAVVISUALID2().set(l.cat(C0.getAVVISUALID2().get(),C1.get()));r.ln=122;C0.mthAVUPDATEDISPLAY();r.ln=124;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat("Employee ",C0.getAVAKEY1().get())," updated in instance list."),u,u,this,u,u,u);
r.ln=126;m.UPDATEINSTANCELISTBUTTON.setVisible(true);}}r.ln=130;r.e();};function e3(sender,Ps){var f=this.FLD.DF_T41H1O,m=this.REF,r=l.eR(this,cO,"#NewInstanceListButton.Click",135);var C0=r.cR("SECONDS","PRIM_ALPH");C0.iC();r.ln=135;{r.ln=139;m.COUNTEMPLOYEES.set(l.add(m.COUNTEMPLOYEES.get(),1));r.ln=141;f.F2.set(l.cat(l.cat("TEST",l.eSV("*TIMEC")),l.n.AsString(m.COUNTEMPLOYEES.get())));r.ln=143;f.F3.set(f.F2.get());r.ln=145;C0.set(l.s.Substring(l.eSV("*TIMEC"),6,1));r.ln=147;{var v1=C0.get();if(r.ln=148,l.s.eq(v1,"0"))
{r.ln=149;f.F4.set("Fred");}else if(r.ln=150,l.s.eq(v1,"1")){r.ln=151;f.F4.set("Mary");}else if(r.ln=152,l.s.eq(v1,"2")){r.ln=153;f.F4.set("Bill");}else if(r.ln=154,l.s.eq(v1,"3")){r.ln=155;f.F4.set("Pablo");}else if(r.ln=156,l.s.eq(v1,"4")){r.ln=157;f.F4.set("Greg");}else if(r.ln=158,l.s.eq(v1,"5")){r.ln=159;f.F4.set("Sue");}else if(r.ln=160,l.s.eq(v1,"6")){r.ln=161;f.F4.set("John");}else if(r.ln=162,l.s.eq(v1,"7")){r.ln=163;f.F4.set("Elizabeth");}else if(r.ln=164,l.s.eq(v1,"8")){r.ln=165;f.F4.set("Harry");
}else{r.ln=167;f.F4.set("Alex");}r.ln=168;}r.ln=170;this.REF.AVLISTMANAGER.mthADDTOLIST(l.add(l.cat(f.F3.get()," "),f.F4.get()),f.F2.get(),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=172;m.NEWINSTANCELISTBUTTON.setVisible(true);}r.ln=174;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn)
{cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_LABL","PRIM_PHBN","PRIM_FLD"],dc:["VF_LM003O"],dp:["PRIM_ALPH"]});