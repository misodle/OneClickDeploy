﻿LANSA.addComponent({id:"VF_UI048O",ot:"rp",tp:"Reusable Part",de:"\\OC=Desktop or MD push button",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{Caption:{da:"na"},ButtonEnabled:{da:"na"}},mt:{zInt_SetFocus:{},zInt_Terminate:{},zInt_Initialize:{ps:{"WithCaption":{pt:"i"},"ButtonDefault":{pt:"i"},"ButtonCancel":{pt:"i"},"UseMDHeight":{pt:"i"},"IsPrimaryButton":{pt:"i"}}}},ev:{WasClicked:{}},co:function(){cO.aN.call(this);this.cD("DESKTOPBUTTON");this.cD("MATERIALBUTTON");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");
var C3=this.cR("ATTACHBUTTON","PRIM_ATLI");var C4=this.cA("USYSTEM","VF_SY001O");C2.iC();C3.setParent(C2);C3.setAttachment("CENTER");C3.iC();if((C4!=null)&&(C4.iI()==false)){C4.iC();}this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C2);this.setTabStop(false);this.aH("CLICK",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Click #DesktopButton.Click #MaterialButton.Click",22);var P0=Ps.r("HANDLED");
r.ln=22;{r.ln=24;this.fE("WASCLICKED");r.ln=26;P0.set(true);}r.ln=28;r.e();};cO.mthZINT_SETFOCUS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SetFocus",31);r.ln=31;{r.ln=33;if((m.DESKTOPBUTTON!=null)){r.ln=34;m.DESKTOPBUTTON.mthSETFOCUS();r.e();return;}r.ln=38;if((m.MATERIALBUTTON!=null)){r.ln=39;m.MATERIALBUTTON.mthSETFOCUS();r.e();return;}}r.ln=43;r.e();};cO.mthGET_CAPTION=function(){var m=this.REF,r=l.pR(this,cO,"Get_Caption",46);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=46;{r.ln=49;
if((m.DESKTOPBUTTON!=null)){r.ln=50;P0.set(m.DESKTOPBUTTON.getCaption());return r.rV(P0.get());}r.ln=54;if((m.MATERIALBUTTON!=null)){r.ln=55;P0.set(m.MATERIALBUTTON.getCaption());return r.rV(P0.get());}}r.ln=59;return r.rV(P0.get());};cO.mthSET_CAPTION=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_Caption",62);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=62;{r.ln=65;if((m.DESKTOPBUTTON!=null)){r.ln=66;m.DESKTOPBUTTON.setCaption(P0.get());r.e();return;}r.ln=70;if((m.MATERIALBUTTON!=null))
{r.ln=71;m.MATERIALBUTTON.setCaption(l.s.UpperCase(P0.get()));r.e();return;}}r.ln=75;r.e();};cO.mthGET_BUTTONENABLED=function(){var m=this.REF,r=l.pR(this,cO,"Get_ButtonEnabled",78);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=78;{r.ln=81;if((m.DESKTOPBUTTON!=null)){r.ln=82;P0.set(m.DESKTOPBUTTON.getEnabled());return r.rV(P0.get());}r.ln=86;if((m.MATERIALBUTTON!=null)){r.ln=87;P0.set(m.MATERIALBUTTON.getEnabled());return r.rV(P0.get());}}r.ln=91;return r.rV(P0.get());};cO.mthSET_BUTTONENABLED=function(p0)
{var m=this.REF,r=l.pR(this,cO,"Set_ButtonEnabled",94);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=94;{r.ln=97;if((m.DESKTOPBUTTON!=null)){r.ln=98;m.DESKTOPBUTTON.setEnabled(P0.get());r.e();return;}r.ln=102;if((m.MATERIALBUTTON!=null)){r.ln=103;m.MATERIALBUTTON.setEnabled(l.s.UpperCase(P0.get()));r.e();return;}}r.ln=107;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",110);r.ln=110;{r.ln=112;this.srDESKTOPBUTTON(null);this.srMATERIALBUTTON(null);}r.ln=114;
r.e();};cO.mthZINT_INITIALIZE=function(p0,p1,p2,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",117);var P0=r.cP("WITHCAPTION","PRIM_DC","UnicodeString");var P1=r.cP("BUTTONDEFAULT","PRIM_BOLN");var P2=r.cP("BUTTONCANCEL","PRIM_BOLN");var P3=r.cP("USEMDHEIGHT","PRIM_BOLN");var P4=r.cP("ISPRIMARYBUTTON","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);r.ln=117;{r.ln=124;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=126;if(l.tB(P3.get())){r.ln=127;if(l.n.le(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_MEDIUM()))
{r.ln=128;this.setHeight(48);}else{r.ln=130;this.setHeight(36);}}r.ln=134;this.srMATERIALBUTTON(l.cC("PRIM_MD","RaisedButton"));r.ln=136;m.MATERIALBUTTON.setParent(this);m.MATERIALBUTTON.setCaption(l.s.UpperCase(P0.get()));m.MATERIALBUTTON.setButtonDefault(P1.get());m.MATERIALBUTTON.setButtonCancel(P2.get());r.ln=138;if(l.tB(P4.get())){r.ln=139;m.MATERIALBUTTON.setThemeDrawStyle("MediumTitle");}else{r.ln=141;m.MATERIALBUTTON.setThemeDrawStyle("ForegroundMediumPrimary");}r.ln=146;m.ATTACHBUTTON.setManage(m.MATERIALBUTTON);
}else{r.ln=150;this.srDESKTOPBUTTON(l.cC("PRIM_PHBN"));r.ln=152;m.DESKTOPBUTTON.setParent(this);m.DESKTOPBUTTON.setCaption(P0.get());m.DESKTOPBUTTON.setButtonDefault(P1.get());m.DESKTOPBUTTON.setButtonCancel(P2.get());r.ln=155;m.ATTACHBUTTON.setManage(m.DESKTOPBUTTON);}}r.ln=159;r.e();};cO.getCAPTION=function(){return this.mthGET_CAPTION();};cO.setCAPTION=function(v){this.mthSET_CAPTION(v);};cO.getBUTTONENABLED=function(){return this.mthGET_BUTTONENABLED();};cO.setBUTTONENABLED=function(v){this.mthSET_BUTTONENABLED(v);
};cO.srDESKTOPBUTTON=function(rn){if(this.REF.DESKTOPBUTTON!=null){this.REF.DESKTOPBUTTON.rH("CLICK",this,e1);}this.sR("DESKTOPBUTTON",rn);if(this.REF.DESKTOPBUTTON!=null){this.REF.DESKTOPBUTTON.aH("CLICK",this,e1);}};cO.srMATERIALBUTTON=function(rn){if(this.REF.MATERIALBUTTON!=null){this.REF.MATERIALBUTTON.rH("CLICK",this,e1);}this.sR("MATERIALBUTTON",rn);if(this.REF.MATERIALBUTTON!=null){this.REF.MATERIALBUTTON.aH("CLICK",this,e1);}};},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI"],
dp:["PRIM_PHBN","PRIM_MD.RaisedButton"]});