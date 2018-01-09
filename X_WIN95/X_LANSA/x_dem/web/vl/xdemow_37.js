﻿LANSA.addComponent({id:"XDEMOW_37",nm:"xDemoWebSessions",ot:"wp",tp:"Web Page",de:"Session Handling",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],
h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{SignonOff:{},Signon:{},Signoff:{},UpdateSession:{ps:{"Active":{pt:"i"}}},TestSession:{}},co:function(){cO.aN.call(this);this.aF("XDEMOW_37",Fd);
var C0=this.cR("VALID","PRIM_VS","Style");var C1=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C2=this.cR("INVALID","PRIM_VS","Style");var C3=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C4=this.cR("TABLELAYOUT","PRIM_TBLO");var C5=this.cR("ROW","PRIM_TBLO","Row");var C6=this.cR("ROW_2","PRIM_TBLO","Row");var C7=this.cR("ROW_3","PRIM_TBLO","Row");var C8=this.cR("ROW_4","PRIM_TBLO","Row");var C9=this.cR("COLUMN","PRIM_TBLO","Column");var C10=this.cR("COLUMN_2","PRIM_TBLO","Column");var C11=this.cR("COLUMN_4","PRIM_TBLO","Column");
var C12=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C15=this.cF("SIGNINUSER",Fd.F1.VISUALEDIT);var C16=this.cR("SIGNONOFF","PRIM_PHBN");var C17=this.cR("TEST","PRIM_PHBN");var C18=this.cR("SESSIONACTIVE","PRIM_BOLN");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("202:245:206");C1.iC();C2.setBackgroundBrush(C3);C2.iC();C3.setColor("245:191:183");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);
C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.iC();C8.setDisplayPosition(4);C8.setParent(C4);C8.iC();C9.setDisplayPosition(1);C9.setParent(C4);C9.iC();C10.setDisplayPosition(2);C10.setParent(C4);C10.setWidth(503);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(3);C11.setParent(C4);C11.iC();C12.setColumn(C10);C12.setFlow("DOWN");C12.setManage(C15);C12.setParent(C4);C12.setRow(C6);C12.setSizing("FITTOWIDTH");C12.setMarginRight(2);C12.setMarginTop(2);
C12.setAlignment("TOPCENTER");C12.setMarginLeft(2);C12.setMarginBottom(2);C12.iC();C13.setColumn(C10);C13.setFlow("DOWN");C13.setManage(C16);C13.setParent(C4);C13.setRow(C6);C13.setSizing("NONE");C13.setMarginLeft(2);C13.setMarginTop(2);C13.setMarginBottom(2);C13.setMarginRight(2);C13.setAlignment("TOPCENTER");C13.iC();C14.setColumn(C10);C14.setFlow("DOWN");C14.setManage(C17);C14.setParent(C4);C14.setRow(C6);C14.setSizing("NONE");C14.setMarginLeft(2);C14.setMarginTop(2);C14.setMarginBottom(2);C14.setMarginRight(2);
C14.setAlignment("TOPCENTER");C14.iC();C15.setDisplayPosition(1);C15.setParent(this);C15.setTabPosition(1);C15.setTop(202);C15.setWidth(499);C15.setHeight(100);C15.setMarginLeft(0);C15.setCaption("Enter a valid User ID");C15.setLabelType("CAPTION");C15.setLabelHorAlignment("CENTER");C15.setLabelPosition("TOP");C15.setMarginTop(25);C15.setLeft(351);C15.setEditStyle(C2);C15.aD();C15.iC();C16.setDisplayPosition(2);C16.setLeft(496);C16.setParent(this);C16.setTabPosition(3);C16.setTop(306);C16.setWidth(209);
C16.setCaption("Sign In");C16.iC();C17.setCaption("Test Session");C17.setDisplayPosition(3);C17.setLeft(496);C17.setParent(this);C17.setTabPosition(2);C17.setTop(335);C17.setWidth(209);C17.iC();C18.iC();C16.aH("CLICK",this,e2);C17.aH("CLICK",this,e6);this.setLayoutManager(C4);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",29);r.ln=29;{r.ln=31;m.SIGNINUSER.set("LANSA");}r.ln=33;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#SignonOff.Click",35);
r.ln=35;{r.ln=37;this.mthSIGNONOFF();}r.ln=39;r.e();};cO.mthSIGNONOFF=function(){var m=this.REF,r=l.mR(this,cO,"SignonOff",41);r.ln=41;{r.ln=43;if(l.tB(m.SESSIONACTIVE.get())){r.ln=45;this.mthSIGNOFF();}else{r.ln=49;this.mthSIGNON();}}r.ln=53;r.e();};cO.mthSIGNON=function(){var f=this.FLD.XDEMOW_37,m=this.REF,r=l.mR(this,cO,"Signon",55),mth=r;var C0=r.cDR("SIGNIN","XDEMOSESS","SIGNIN");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=55;{r.ln=59;C0.mthEXECUTEASYNC({FLD:{"USER":m.SIGNINUSER.get()}},{FLD:{"IO$STS":f.F2}});
}r.ln=73;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Signin.Completed",61,mth);r.ln=61;{r.ln=63;cO.mthUPDATESESSION.call(this,l.s.eq(f.F2.get(),"OK"));}r.ln=65;r.e();}function e4(sender,Ps){var r=l.eR(this,cO,"#Signin.Failed",67,mth);r.ln=67;{r.ln=69;cO.mthUPDATESESSION.call(this,false);}r.ln=71;r.e();}};cO.mthSIGNOFF=function(){var r=l.mR(this,cO,"Signoff",75),mth=r;var C0=r.cDR("SIGNOFF","XDEMOSESS","SIGNOFF");C0.iC();C0.aH("COMPLETED",this,e5);C0.aH("FAILED",this,e5);r.ln=75;{r.ln=79;C0.mthEXECUTEASYNC({},{});
}r.ln=87;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Signoff.Completed #Signoff.Failed",81,mth);r.ln=81;{r.ln=83;cO.mthUPDATESESSION.call(this,false);}r.ln=85;r.e();}};cO.mthUPDATESESSION=function(p0){var m=this.REF,r=l.mR(this,cO,"UpdateSession",89);var P0=r.cP("ACTIVE","PRIM_BOLN");P0.set(p0);r.ln=89;{r.ln=92;m.SESSIONACTIVE.set(P0.get());r.ln=94;if(l.tB(P0.get())){r.ln=96;m.SIGNINUSER.setEditStyle(m.VALID);r.ln=98;m.SIGNONOFF.setCaption("Sign Off");}else{r.ln=102;m.SIGNINUSER.setEditStyle(m.INVALID);
r.ln=104;m.SIGNONOFF.setCaption("Sign On");}}r.ln=108;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Test.Click",110);r.ln=110;{r.ln=112;this.mthTESTSESSION();}r.ln=114;r.e();};cO.mthTESTSESSION=function(){var f=this.FLD.XDEMOW_37,m=this.REF,r=l.mR(this,cO,"TestSession",116),mth=r;var C0=r.cDR("TESTSESSION","XDEMOSESS","TESTSESSIONSTATE");C0.iC();C0.aH("COMPLETED",this,e7);C0.aH("FAILED",this,e8);r.ln=116;{r.ln=120;f.F2.set("");r.ln=121;m.TEST.setCaption("Testing Session");r.ln=123;C0.mthEXECUTEASYNC({},{FLD:{"IO$STS":f.F2}});
}r.ln=153;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#TestSession.Completed",125,mth);r.ln=125;{r.ln=127;cO.mthUPDATESESSION.call(this,true);r.ln=129;m.TEST.setCaption("Test (Success)");}r.ln=131;r.e();}function e8(sender,Ps){var r=l.eR(this,cO,"#TestSession.Failed",133,mth);var P0=Ps.r("REASON");var P1=Ps.r("HANDLED");r.ln=133;{r.ln=135;P1.set(true);r.ln=137;{var v1=P0.get();if(r.ln=139,l.s.eq(v1,"UNKNOWN")){r.ln=141;m.TEST.setCaption("Test (Failed)");}else if(r.ln=143,l.s.eq(v1,"SESSIONINVALID"))
{r.ln=145;m.TEST.setCaption("Test (Session Invalid)");}r.ln=147;}r.ln=149;cO.mthUPDATESESSION.call(this,false);}r.ln=151;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOUNIC"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(951);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOUNIC",cn:"VisualEdit"});}},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_EVEF","PRIM_PHBN","PRIM_BOLN","PRIM_WEB.DataRequest"]
});