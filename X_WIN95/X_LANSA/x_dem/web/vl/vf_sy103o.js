﻿LANSA.addComponent({id:"VF_SY103O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Switching Object",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]
}};var cO=l.rC(oI,{an:"VF_SY174O",fd:Fd,pt:{Caller:{da:"rw"},CallerReference:{da:"rw"},Named:{da:"rw"},Execute:{da:"rw"},ExecuteInstanceReferenceKey:{da:"rw"},UseBusyPanel:{da:"rw"},StartFilterandInstanceList:{da:"rw"},IgnoreEnablement:{da:"rw"}},mt:{zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_SY103O",Fd);this.cD("CALLER");this.cD("CALLERREFERENCE");var C2=this.cF("NAMED",Fd.F1.Dc);var C3=this.cF("EXECUTE",Fd.F1.Dc);var C4=this.cR("EXECUTEINSTANCEREFERENCEKEY","PRIM_ALPH");this.cD("USEBUSYPANEL");
var C6=this.cR("STARTFILTERANDINSTANCELIST","PRIM_BOLN");var C7=this.cR("IGNOREENABLEMENT","PRIM_BOLN");C2.aD();C2.iC();C3.aD();C3.iC();C4.iC();C6.iC();C7.iC();}});var cA=cO.aN.prototype;cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",29);r.ln=29;{r.ln=31;cA.mthZINT_TERMINATE.call(this);r.ln=33;this.srCALLER(null);this.srCALLERREFERENCE(null);this.srUSEBUSYPANEL(null);}r.ln=35;r.e();};cO.getCALLER=function(){return this.REF.CALLER;};cO.setCALLER=function(v){this.srCALLER(v);
};cO.getCALLERREFERENCE=function(){return this.REF.CALLERREFERENCE;};cO.setCALLERREFERENCE=function(v){this.srCALLERREFERENCE(v);};cO.getNAMED=function(){return this.REF.NAMED.get();};cO.setNAMED=function(v){this.REF.NAMED.set(v);};cO.getEXECUTE=function(){return this.REF.EXECUTE.get();};cO.setEXECUTE=function(v){this.REF.EXECUTE.set(v);};cO.getEXECUTEINSTANCEREFERENCEKEY=function(){return this.REF.EXECUTEINSTANCEREFERENCEKEY.get();};cO.setEXECUTEINSTANCEREFERENCEKEY=function(v){this.REF.EXECUTEINSTANCEREFERENCEKEY.set(v);
};cO.getUSEBUSYPANEL=function(){return this.REF.USEBUSYPANEL;};cO.setUSEBUSYPANEL=function(v){this.srUSEBUSYPANEL(v);};cO.getSTARTFILTERANDINSTANCELIST=function(){return this.REF.STARTFILTERANDINSTANCELIST.get();};cO.setSTARTFILTERANDINSTANCELIST=function(v){this.REF.STARTFILTERANDINSTANCELIST.set(v);};cO.getIGNOREENABLEMENT=function(){return this.REF.IGNOREENABLEMENT.get();};cO.setIGNOREENABLEMENT=function(v){this.REF.IGNOREENABLEMENT.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});
}cO.srCALLER=function(rn){this.sR("CALLER",rn);};cO.srCALLERREFERENCE=function(rn){this.sR("CALLERREFERENCE",rn);};cO.srUSEBUSYPANEL=function(rn){this.sR("USEBUSYPANEL",rn);};},{rc:["VF_SY174O"],rp:["PRIM_FLD","PRIM_ALPH","PRIM_BOLN"],dp:["PRIM_OBJT","PRIM_PANL"]});