﻿LANSA.addComponent({id:"VF_SY185O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Create/Destoy Tracker",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELTRCT",ft:"DT",ln:26,dc:0,lb:"Trace Time",h1:"Trace",h2:"Time",h3:"",de:"Trace Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","DUTC"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,rm:["dt"],pt:{TimeCreated:{da:"rw"},oCaption:{da:"rw"},TrackingItemNumber:{da:"rw"},oName:{da:"rw"},TracingName:{da:"na"}},mt:{zInt_TrackDestruction:{ps:{"RequestedBy":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_SY185O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cF("TIMECREATED",Fd.F1.Dc);var C2=this.cR("OCAPTION","PRIM_DC","UnicodeString");
var C3=this.cF("TRACKINGITEMNUMBER",Fd.F2.Dc);var C4=this.cR("ONAME","PRIM_ALPH");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.aD();C1.iC();C2.iC();C3.aD();C3.iC();C4.iC();}});cO.mthGET_TRACINGNAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_TracingName",20);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=20;{r.ln=23;P0.set(l.cat(l.cat(l.cat(l.add(l.cat(m.ONAME.get()," - "),m.OCAPTION.get())," ("),l.s.Substring(l.dt.AsDisplayString(m.TIMECREATED.get()),12,12)),")"));}r.ln=25;return r.rV(P0.get());
};cO.mthZINT_TRACKDESTRUCTION=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_TrackDestruction",28);var P0=r.cPD("REQUESTEDBY");P0=p0;r.ln=28;{r.ln=31;m.USYSTEM.ref.mthZINT_TRACKMAJOROBJECTDESTRUCTION(this,P0);}r.ln=33;r.e();};cO.getTIMECREATED=function(){return this.REF.TIMECREATED.get();};cO.setTIMECREATED=function(v){this.REF.TIMECREATED.set(v);};cO.getOCAPTION=function(){return this.REF.OCAPTION.get();};cO.setOCAPTION=function(v){this.REF.OCAPTION.set(v);};cO.getTRACKINGITEMNUMBER=function()
{return this.REF.TRACKINGITEMNUMBER.get();};cO.setTRACKINGITEMNUMBER=function(v){this.REF.TRACKINGITEMNUMBER.set(v);};cO.getONAME=function(){return this.REF.ONAME.get();};cO.setONAME=function(v){this.REF.ONAME.set(v);};cO.getTRACINGNAME=function(){return this.mthGET_TRACINGNAME();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELTRCT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_SY001O"],rp:["PRIM_OBJT","PRIM_FLD","PRIM_DC.UnicodeString","PRIM_ALPH","PRIM_DTIM"]
});