﻿LANSA.addComponent({id:"DF_OSYSTM",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE main IIP for shipped demo",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC011O",mt:{uInitialize:{},avMAINWindowReady:{ps:{"Continue":{pt:"o"}}}},co:function(){cO.aN.call(this);this.REF.USYSTEM.ref.aH("REQUESTSHORTCUT",this,e1);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",28);r.ln=28;{r.ln=31;cA.mthUINITIALIZE.call(this);r.ln=34;this.REF.AVCUSTOMMANAGERID.set("DF_OCUSTM");
r.ln=37;this.REF.SHAREDMESSAGESETINTABLETMODE.set(true);r.ln=40;this.REF.AVFRAMEWORKMANAGER.setAVSHOWRESTARTBUTTON(l.b.Not(this.REF.AVFRAMEWORKMANAGER.getAVLARGESCREEN()));}r.ln=42;r.e();};cO.mthAVMAINWINDOWREADY=function(p0){var r=l.mR(this,cO,"avMAINWindowReady",46);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=46;{r.ln=49;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("F1","ASSISTANCE");r.ln=50;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+A","APPLICATION");r.ln=51;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+B","BUSINESSOBJECT");
r.ln=52;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+N","NEXT_PANE");r.ln=53;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("CTRL+RIGHT","NEXT_PANE");r.ln=54;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+P","PREVIOUS_PANE");r.ln=55;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("CTRL+LEFT","PREVIOUS_PANE");r.ln=56;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+T","TRACE_ON_OFF");r.ln=57;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+Y","TRACE_ON_OFF_SYSTEM");
r.ln=58;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+O","STATS_ON_OFF");r.ln=59;this.REF.USYSTEM.ref.getMAINVLFPANEL().mthENROLLSHORTCUT("ALT+I","SHOW_STATS");r.ln=62;P0.set(true);p0.set(P0.get());}r.ln=64;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#USYSTEM.RequestShortCut",68);var P0=Ps.r("LOGICALOPERATION");r.ln=68;{r.ln=70;{var v1=P0.get();if(r.ln=72,l.s.eq(v1,"ASSISTANCE")){}else if(r.ln=74,l.s.eq(v1,"APPLICATION")){r.ln=75;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("*SELECT_APPLICATION",u,u,u,this.REF.USYSTEM.ref.getMAINVLFPANEL(),u,u);
}else if(r.ln=77,l.s.eq(v1,"BUSINESSOBJECT")){r.ln=78;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("*SELECT_BUSINESSOBJECT",u,u,u,this.REF.USYSTEM.ref.getMAINVLFPANEL(),u,u);}else if(r.ln=80,l.s.eq(v1,"TRACE_ON_OFF")){r.ln=81;this.REF.USYSTEMCOMMON.ref.setINAPPTRACEMODE(l.b.Not(this.REF.USYSTEMCOMMON.ref.getINAPPTRACEMODE()));}else if(r.ln=83,l.s.eq(v1,"TRACE_ON_OFF_SYSTEM")){r.ln=84;this.REF.USYSTEMCOMMON.ref.setINSYSTRACEMODE(l.b.Not(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()));}else if(r.ln=86,l.s.eq(v1,"STATS_ON_OFF"))
{r.ln=87;this.REF.USYSTEMCOMMON.ref.setINSTATSMODE(l.b.Not(this.REF.USYSTEMCOMMON.ref.getINSTATSMODE()));r.ln=88;if(l.b.Not(this.REF.USYSTEMCOMMON.ref.getINSTATSMODE())){r.ln=89;this.REF.USYSTEM.ref.mthSTOPCOLLECTINGSTATISTICS();r.ln=90;l.WEB().mthALERT("Statistics collection turned off.");}else{r.ln=92;l.WEB().mthALERT("Statistics collection turned on.");}}else if(r.ln=95,l.s.eq(v1,"SHOW_STATS")){r.ln=96;this.REF.USYSTEM.ref.mthSHOWCOLLECTEDSTATISTICS();}r.ln=98;}}r.ln=100;r.e();};cO.srAVFRAMEWORKMANAGER=function(rn)
{cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC011O"]});