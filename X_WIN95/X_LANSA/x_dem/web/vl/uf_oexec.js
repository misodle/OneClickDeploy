﻿LANSA.addComponent({id:"UF_OEXEC",ot:"wp",tp:"Web Page",de:"\\OC=VLF-ONE Execution Entry point",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("WEBFORMLAYOUTMANAGER","PRIM_ATLM");var C1=this.cR("VLF_ONE_ATTACHITEM","PRIM_ATLI");var C2=this.cR("VLF_ONE","VF_AC006O");C0.iC();C1.setParent(C0);C1.setAttachment("CENTER");C1.setManage(C2);C1.iC();C2.setParent(this);C2.setHeight(800);C2.setWidth(1200);C2.iC();l.WEB().aH("CLOSEQUERY",this,e2);this.setLayoutManager(C0);
this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",47);r.ln=47;{r.ln=98;m.VLF_ONE.mthUINITIALIZE("","VF_AC026O","","UF_OMULTI","",90,"UF_OHEADP","UF_OTRALP",u,true);}r.ln=100;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.CloseQuery",104);r.ln=104;{r.ln=106;if((m.VLF_ONE!=null)){r.ln=108;m.VLF_ONE.mthUTERMINATE(false,true,u);}}r.ln=111;r.e();};},{rc:["VF_AC006O"],rp:["PRIM_WEB","PRIM_ATLM","PRIM_ATLI"]});