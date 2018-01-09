﻿LANSA.addComponent({id:"DF_T47H1O",ot:"rp",tp:"Reusable Part",de:"\\OC=Enrolling Shortcuts & Function Keys",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{SetInitialFocus:{},uBringToFront:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C1=this.cR("LABEL1","PRIM_LABL");var C2=this.cR("LABEL2","PRIM_LABL");var C3=this.cR("BUTTON_F7","PRIM_PHBN");var C4=this.cR("BUTTON_F8","PRIM_PHBN");
var C5=this.cR("F7","PRIM_STPG");var C6=this.cR("F8","PRIM_STPG");var C7=this.cR("CTRLN","PRIM_STPG");C0.setCaption("See component DF_T47H1O for details of this command handler");C0.setDisplayPosition(2);C0.setEllipses("WORD");C0.setHeight(25);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setVerticalAlignment("CENTER");C0.setWidth(577);C0.iC();C1.setCaption("This command handler shows how to enrol shortcut keys and function keys");C1.setDisplayPosition(3);
C1.setEllipses("WORD");C1.setHeight(48);C1.setLeft(0);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(25);C1.setVerticalAlignment("CENTER");C1.setWidth(577);C1.iC();C2.setDisplayPosition(1);C2.setEllipses("WORD");C2.setHeight(25);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(3);C2.setTabStop(false);C2.setTop(72);C2.setVerticalAlignment("CENTER");C2.setWidth(361);C2.setCaption("Try clicking F7 (Function Key 7), F8, or Ctrl N ");C2.iC();C3.setCaption("F7");C3.setDisplayPosition(5);
C3.setLeft(8);C3.setParent(this);C3.setTabPosition(5);C3.setTop(160);C3.iC();C4.setCaption("F8");C4.setDisplayPosition(4);C4.setLeft(104);C4.setParent(this);C4.setTabPosition(4);C4.setTop(160);C4.iC();C5.setParent(this);C5.setShortCut("F7");C5.iC();C6.setParent(this);C6.setShortCut("F8");C6.iC();C7.setParent(this);C7.setShortCut("CTRL+N");C7.iC();C5.aH("PRESSED",this,e1);C6.aH("PRESSED",this,e2);C7.aH("PRESSED",this,e3);this.setHeight(273);this.setWidth(577);this.setLayoutManager(null);}});function e1(sender,Ps)
{var r=l.eR(this,cO,"#F7.Pressed",52);r.ln=52;{r.ln=54;l.WEB().mthALERT("You pressed F7");}r.ln=56;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#F8.Pressed",58);var C0=r.cR("UTEXT","PRIM_ALPH");C0.iC();r.ln=58;{r.ln=62;C0.set("You pressed F8");r.ln=64;if(l.APPL().getFocusControl()!=null){r.ln=65;C0.set(l.cat(C0.get(),l.cat(" The control with focus was: ",l.APPL().getFocusControl().getName())));}r.ln=67;l.WEB().mthALERT(C0.get());}r.ln=69;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#CtrlN.Pressed",71);
r.ln=71;{r.ln=73;l.WEB().mthALERT("You pressed Ctrl N");}r.ln=75;r.e();};cO.mthSETINITIALFOCUS=function(){var m=this.REF,r=l.mR(this,cO,"SetInitialFocus",82);r.ln=82;{r.ln=83;m.BUTTON_F7.mthSETFOCUS();}r.ln=84;r.e();};cO.mthUBRINGTOFRONT=function(){var r=l.mR(this,cO,"uBringToFront",86);r.ln=86;{r.ln=87;this.mthSETINITIALFOCUS();}r.ln=88;r.e();};cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",90);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());
P1=p1;r.ln=90;{r.ln=91;this.mthSETINITIALFOCUS();p0.set(P0.get());}r.ln=92;r.e();};},{rc:["VF_AC010O"],rp:["PRIM_LABL","PRIM_PHBN","PRIM_STPG"],dp:["PRIM_ALPH"]});