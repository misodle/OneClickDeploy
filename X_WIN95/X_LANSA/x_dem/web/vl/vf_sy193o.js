﻿LANSA.addComponent({id:"VF_SY193O",ot:"rp",tp:"Reusable Part",de:"\\OC=VF_AC034O queued asynch requested",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{OperationID:{da:"r"},Parameter1:{da:"r"},Parameter2:{da:"r"},ParameterReference1:{da:"r"},ParameterReference2:{da:"r"},BusyStateText:{da:"rw"},DropBusyStateonCompletion:{da:"r"},ClearMessages:{da:"rw"},ReceiveSystemMessages:{da:"rw"},Delay:{da:"r"}},mt:{zInt_Initialize:{ps:{"UseOperationID":{pt:"i"},"UseParameter1":{pt:"i"},"UseParameter2":{pt:"i"},"UseParameterReference1":{pt:"i"},"UseParameterReference2":{pt:"i"},"UseBusyStateText":{pt:"i"},"UseDropBusyStateonCompletion":
{pt:"i"},"UseReceiveSystemMessages":{pt:"i"},"UseDelay":{pt:"i"}}},zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_SY193O",Fd);var C0=this.cR("OPERATIONID","PRIM_DC","UnicodeString");var C1=this.cR("PARAMETER1","PRIM_DC","UnicodeString");var C2=this.cR("PARAMETER2","PRIM_DC","UnicodeString");this.cD("PARAMETERREFERENCE1");this.cD("PARAMETERREFERENCE2");var C5=this.cR("BUSYSTATETEXT","PRIM_DC","UnicodeString");var C6=this.cR("DROPBUSYSTATEONCOMPLETION","PRIM_BOLN");var C7=this.cR("CLEARMESSAGES","PRIM_BOLN");
var C8=this.cR("RECEIVESYSTEMMESSAGES","PRIM_BOLN");var C9=this.cF("DELAY",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.aD();C9.iC();}});cO.mthZINT_INITIALIZE=function(p0,p1,p2,p3,p4,p5,p6,p7,p8){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",36);var P0=r.cP("USEOPERATIONID","PRIM_DC","UnicodeString");var P1=r.cP("USEPARAMETER1","PRIM_DC","UnicodeString");var P2=r.cP("USEPARAMETER2","PRIM_DC","UnicodeString");var P3=r.cPD("USEPARAMETERREFERENCE1");var P4=r.cPD("USEPARAMETERREFERENCE2");
var P5=r.cP("USEBUSYSTATETEXT","PRIM_DC","UnicodeString");var P6=r.cP("USEDROPBUSYSTATEONCOMPLETION","PRIM_BOLN");var P7=r.cP("USERECEIVESYSTEMMESSAGES","PRIM_BOLN");var P8=r.cPF("USEDELAY",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3=p3;P4=p4;P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);r.ln=36;{r.ln=47;m.OPERATIONID.set(l.s.UpperCase(l.s.Trim(P0.get())));r.ln=48;m.PARAMETER1.set(P1.get());r.ln=49;m.PARAMETER2.set(P2.get());r.ln=50;this.srPARAMETERREFERENCE1(P3);r.ln=51;this.srPARAMETERREFERENCE2(P4);
r.ln=52;m.BUSYSTATETEXT.set(l.s.Trim(P5.get()));r.ln=53;m.DROPBUSYSTATEONCOMPLETION.set(P6.get());r.ln=55;if(l.n.lt(P8.get(),1)){r.ln=56;m.DELAY.set(1);}else{r.ln=58;m.DELAY.set(P8.get());}r.ln=61;m.RECEIVESYSTEMMESSAGES.set(P7.get());}r.ln=63;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",66);r.ln=66;{r.ln=68;this.srPARAMETERREFERENCE1(null);this.srPARAMETERREFERENCE2(null);}r.ln=70;r.e();};cO.getOPERATIONID=function(){return this.REF.OPERATIONID.get();};cO.getPARAMETER1=function()
{return this.REF.PARAMETER1.get();};cO.getPARAMETER2=function(){return this.REF.PARAMETER2.get();};cO.getPARAMETERREFERENCE1=function(){return this.REF.PARAMETERREFERENCE1;};cO.getPARAMETERREFERENCE2=function(){return this.REF.PARAMETERREFERENCE2;};cO.getBUSYSTATETEXT=function(){return this.REF.BUSYSTATETEXT.get();};cO.setBUSYSTATETEXT=function(v){this.REF.BUSYSTATETEXT.set(v);};cO.getDROPBUSYSTATEONCOMPLETION=function(){return this.REF.DROPBUSYSTATEONCOMPLETION.get();};cO.getCLEARMESSAGES=function()
{return this.REF.CLEARMESSAGES.get();};cO.setCLEARMESSAGES=function(v){this.REF.CLEARMESSAGES.set(v);};cO.getRECEIVESYSTEMMESSAGES=function(){return this.REF.RECEIVESYSTEMMESSAGES.get();};cO.setRECEIVESYSTEMMESSAGES=function(v){this.REF.RECEIVESYSTEMMESSAGES.set(v);};cO.getDELAY=function(){return this.REF.DELAY.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srPARAMETERREFERENCE1=function(rn){this.sR("PARAMETERREFERENCE1",rn);};cO.srPARAMETERREFERENCE2=function(rn)
{this.sR("PARAMETERREFERENCE2",rn);};},{rp:["PRIM_OBJT","PRIM_DC.UnicodeString","PRIM_BOLN","PRIM_FLD"],dp:["PRIM_OBJT"]});