﻿LANSA.addComponent({id:"DF_T0006O",ot:"rp",tp:"Reusable Part",de:"\\OC=Command handler for Hidden Filter",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");var C1=this.cR("LABL_1","PRIM_LABL");var C2=this.cR("BLUE","PRIM_VS","Style");C0.setManage(C1);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("CENTER");C0.setMarginBottom(8);
C0.setMarginLeft(8);C0.setMarginRight(8);C0.setMarginTop(8);C0.iC();C1.setDisplayPosition(1);C1.setHeight(265);C1.setLeft(8);C1.setParent(this);C1.setTabPosition(1);C1.setTabStop(false);C1.setTop(8);C1.setWidth(305);C1.setVerticalAlignment("CENTER");C1.setAlignment("CENTER");C1.setStyle(C2);C1.iC();C2.setTextColor("BLUE");C2.setFontSize(16);C2.setFontUnits("PIXEL");C2.iC();this.setHeight(281);this.setWidth(321);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",26);
var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;var C0=r.cR("CRLF","PRIM_DC","UnicodeString");C0.iC();r.ln=26;{r.ln=30;C0.set(l.cat(l.n.AsUnicodeString(13),l.n.AsUnicodeString(10)));r.ln=32;m.LABL_1.setCaption(l.cat(l.add(l.add(l.add(l.cat(this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVVISUALID1().get()," "),this.REF.AVLISTMANAGER.getCURRENTINSTANCE().getAVVISUALID2().get()),C0.get()),C0.get()),"See the source code of component DF_FILT5O to see how a filter is defined as HIDDEN."));
p0.set(P0.get());}r.ln=34;r.e();};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_LABL","PRIM_VS.Style"],dp:["PRIM_DC.UnicodeString"]});