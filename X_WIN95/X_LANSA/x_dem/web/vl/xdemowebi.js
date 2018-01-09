﻿LANSA.addComponent({id:"XDEMOWEBI",nm:"xDemoWebIdleTimeout",ot:"wp",tp:"Web Page",de:"Handling Idle Timeouts",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"MESSAGERESULT",ft:"A",ln:6,dc:0,lb:"MessageResult",h1:"MessageResult",h2:"",h3:"",de:"MessageResult",dv:""},F3:{nm:"TIMEDOUT",
ft:"B",ln:1,dc:0,lb:"TimedOut",h1:"TimedOut",h2:"",h3:"",de:"TimedOut",dv:false}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Signin:{}},co:function(){cO.aN.call(this);this.aF("XDEMOWEBI",Fd);var C0=this.cR("STYLE","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("ROW","PRIM_TBLO","Row");var C4=this.cR("LABELITEM","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C6=this.cR("LABEL","PRIM_LABL");var C7=this.cR("LABEL_3","PRIM_LABL");
var C8=this.cR("MESSAGEBOX","PRIM_WEB","MessageBox");C0.setFontSize(18);C0.setFaceName("Calibri");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C2);C4.setManage(C6);C4.setParent(C1);C4.setRow(C3);C4.setSizing("NONE");C4.setAlignment("TOPRIGHT");C4.iC();C5.setColumn(C2);C5.setFlow("DOWN");C5.setManage(C7);C5.setParent(C1);C5.setRow(C3);C5.setSizing("NONE");C5.setAlignment("TOPCENTER");C5.setMarginTop(50);C5.iC();C6.setDisplayPosition(1);
C6.setEllipses("WORD");C6.setLeft(881);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(0);C6.setVerticalAlignment("CENTER");C6.setHeight(57);C6.setWidth(319);C6.setStyle(C0);C6.setAlignment("RIGHT");C6.setMarginRight(10);C6.setCaption("Sign in");C6.iC();C7.setCaption("Page will timeout in 15 seconds if no user input");C7.setDisplayPosition(2);C7.setEllipses("WORD");C7.setHeight(65);C7.setLeft(221);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(50);C7.setVerticalAlignment("CENTER");
C7.setWidth(759);C7.setAlignment("CENTER");C7.setStyle(C0);C7.iC();C8.iC();l.APPL().aH("IDLE",this,e2);l.APPL().aH("IDLEEND",this,e3);C6.aH("CLICK",this,e1);C8.aH("CLOSED",this,e4);this.setLayoutManager(C1);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance #Label.Click",25);r.ln=25;{r.ln=27;if(l.s.eq(m.LABEL.get(),"Sign in")){r.ln=29;this.mthSIGNIN();}}r.ln=33;r.e();};cO.mthSIGNIN=function(){var f=this.FLD.XDEMOWEBI,m=this.REF,r=l.mR(this,cO,"Signin",35);
r.ln=35;{r.ln=37;f.F1.set("");r.ln=40;for(var i1=1,s1=1,t1=9999999;(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=42;f.F2.set(l.WEB().mthPROMPT("Enter a userID",f.F1));r.ln=44;if(l.tB(l.or(l.s.ne(f.F1.get(),""),l.s.eq(f.F2.get(),"CANCEL")))){break;}}r.ln=49;if(l.s.eq(f.F2.get(),"CANCEL")){r.ln=51;m.LABEL.set("Sign in");}else{r.ln=55;m.LABEL.set(l.s.Substitute("Signed in as &1",f.F1.get()));}}r.ln=59;r.e();};function e2(sender,Ps){var f=this.FLD.XDEMOWEBI,m=this.REF,r=l.eR(this,cO,"#Sys_Appln.Idle",62);
var P0=Ps.r("SECONDS");r.ln=62;{r.ln=65;if(l.and(l.n.eq(P0.get(),15),l.not(f.F3.get()))){r.ln=68;m.LABEL.set(l.s.Substitute("&1 timed out",f.F1.get()));r.ln=70;f.F3.set(true);r.ln=72;m.MESSAGEBOX.getCaptions().mthREMOVEALL();r.ln=73;m.MESSAGEBOX.getCaptions().mthADD("Application timeout");r.ln=74;m.MESSAGEBOX.getCaptions().mthADD("Sign in again");r.ln=75;m.MESSAGEBOX.mthSHOW();}}r.ln=79;r.e();};function e3(sender,Ps){var f=this.FLD.XDEMOWEBI,r=l.eR(this,cO,"#Sys_Appln.IdleEnd",82);r.ln=82;{r.ln=84;
f.F3.set(false);}r.ln=86;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Messagebox.Closed",88);r.ln=88;{r.ln=90;this.mthSIGNIN();}r.ln=92;r.e();};},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_WEB.MessageBox"]});