﻿LANSA.addComponent({id:"VF_SY174O",ot:"rp",tp:"Reusable Part",de:"\\OC=Queueable VLF-ONE Transaction",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{WaituntilStarting:{da:"rw"}},mt:{zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_SY174O",Fd);var C0=this.cF("WAITUNTILSTARTING",Fd.F1.Dc);C0.aD();C0.iC();}});cO.mthZINT_TERMINATE=function(){var r=l.mR(this,cO,"zInt_Terminate",16);r.ln=16;{}r.ln=19;r.e();};cO.getWAITUNTILSTARTING=function(){return this.REF.WAITUNTILSTARTING.get();};cO.setWAITUNTILSTARTING=function(v){this.REF.WAITUNTILSTARTING.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rp:["PRIM_OBJT","PRIM_FLD"]});