﻿LANSA.addComponent({id:"XDEMOPHO",nm:"xDemoPhoneNumberUSFormattedInput",ot:"rp",tp:"Reusable Part",de:"US Phone Number Formatted Input",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOPHON",an:"xDemoPhoneNumberUS",ft:"N",ln:12,dc:0,lb:"Phone Number",h1:"Phone",h2:"Number",h3:"",de:"Phone Number",dv:l.SqlNull,ia:["ASQN"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_DC.IMonitorSubject","PRIM_DC.IContextualSubject"],fd:Fd,
pt:{Value:{da:"na"}},mt:{OnContextChanged:{ps:{"Context":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOPHO",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("COLUMN4","PRIM_TBLO","Column");var C5=this.cR("COLUMN5","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");
var C9=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C12=this.cR("NUMBER","PRIM_EDIT");var C13=this.cR("EXCHANGE","PRIM_EDIT");var C14=this.cR("AREACODE","PRIM_EDIT");var C15=this.cR("LABEL1","PRIM_LABL");var C16=this.cR("LABEL2","PRIM_LABL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(3);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setUnits("PIXELS");C2.setWidth(10);C2.iC();
C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(3);C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.setUnits("PIXELS");C4.setWidth(10);C4.iC();C5.setDisplayPosition(5);C5.setParent(C0);C5.setWidth(4);C5.iC();C6.setDisplayPosition(1);C6.setParent(C0);C6.iC();C7.setColumn(C1);C7.setManage(C14);C7.setParent(C0);C7.setRow(C6);C7.iC();C8.setColumn(C3);C8.setManage(C13);C8.setParent(C0);C8.setRow(C6);C8.iC();C9.setColumn(C5);C9.setManage(C12);C9.setParent(C0);C9.setRow(C6);C9.iC();C10.setColumn(C2);
C10.setManage(C16);C10.setParent(C0);C10.setRow(C6);C10.iC();C11.setColumn(C4);C11.setManage(C15);C11.setParent(C0);C11.setRow(C6);C11.iC();C12.setDisplayPosition(5);C12.setLeft(117);C12.setParent(this);C12.setShowSelection(false);C12.setShowSelectionHilight(false);C12.setTabPosition(3);C12.setTop(0);C12.setWidth(64);C12.setAutoTab(true);C12.setHeight(33);C12.setDisplayAlignment("CENTER");C12.setMaxLength(4);C12.iC();C13.setDisplayPosition(3);C13.setLeft(59);C13.setParent(this);C13.setShowSelection(false);
C13.setShowSelectionHilight(false);C13.setTabPosition(2);C13.setTop(0);C13.setWidth(48);C13.setAutoTab(true);C13.setHeight(33);C13.setDisplayAlignment("CENTER");C13.setMaxLength(3);C13.iC();C14.setDisplayPosition(1);C14.setLeft(0);C14.setParent(this);C14.setShowSelection(false);C14.setShowSelectionHilight(false);C14.setTabPosition(1);C14.setTop(0);C14.setWidth(49);C14.setAutoTab(true);C14.setHeight(33);C14.setDisplayAlignment("CENTER");C14.setMaxLength(3);C14.iC();C15.setCaption("-");C15.setDisplayPosition(4);
C15.setEllipses("WORD");C15.setHeight(33);C15.setLeft(107);C15.setParent(this);C15.setTabPosition(5);C15.setTabStop(false);C15.setTop(0);C15.setVerticalAlignment("CENTER");C15.setWidth(10);C15.setAlignment("CENTER");C15.iC();C16.setCaption("-");C16.setDisplayPosition(2);C16.setEllipses("WORD");C16.setHeight(33);C16.setLeft(49);C16.setParent(this);C16.setTabPosition(4);C16.setTabStop(false);C16.setTop(0);C16.setVerticalAlignment("CENTER");C16.setWidth(10);C16.setAlignment("CENTER");C16.iC();C12.aH("CHANGED",this,e1);
C12.aH("KEYPRESS",this,e2);C13.aH("CHANGED",this,e1);C13.aH("KEYPRESS",this,e2);C14.aH("CHANGED",this,e1);C14.aH("KEYPRESS",this,e2);this.setDisplayPosition(1);this.setHeight(33);this.setLeft(0);this.setTabPosition(1);this.setTabStop(false);this.setTop(0);this.setWidth(181);this.setLayoutManager(C0);}});cO.mthGETPROPERTYVALUE=function(){var m=this.REF,r=l.pR(this,cO,"GetPropertyValue",25);var P0=r.cPF("PROPERTY",Fd.F1.Dc);r.ln=25;{r.ln=28;P0.set(l.s.Substitute("&1-&2-&3",m.AREACODE.getValue(),m.EXCHANGE.getValue(),m.NUMBER.getValue()));
}r.ln=30;return r.rV(P0.get());};cO.mthSETPROPERTYVALUE=function(p0){var m=this.REF,r=l.pR(this,cO,"SetPropertyValue",32);var P0=r.cPF("PROPERTY",Fd.F1.Dc);P0.set(p0);r.ln=32;{r.ln=35;m.AREACODE.set(l.s.Substring(P0.get(),1,3));r.ln=36;m.EXCHANGE.set(l.s.Substring(P0.get(),5,3));r.ln=37;m.NUMBER.set(l.s.Substring(P0.get(),9,4));}r.ln=39;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#AreaCode.Changed #Exchange.Changed #Number.Changed",41);r.ln=41;{r.ln=43;this.fE("VALUECHANGED");}r.ln=45;r.e();
};function e2(sender,Ps){var r=l.eR(this,cO,"#AreaCode.KeyPress #Exchange.KeyPress #Number.KeyPress",47);var P0=Ps.r("CHAR");var P1=Ps.r("HANDLED");var P2=Ps.r("KEYCODE");r.ln=47;{r.ln=49;if(l.s.eq(P2.get(),"ISCHAR")){r.ln=51;P1.set(l.or(l.not(l.s.IsNumber(P0.get())),l.s.IsNull(P0.get())));}}r.ln=55;r.e();};cO.mthONCONTEXTCHANGED=function(p0){var m=this.REF,r=l.mR(this,cO,"OnContextChanged",57);var P0=r.cPD("CONTEXT");P0=p0;r.ln=57;{r.ln=59;if(l.Io(P0,"PRIM_EVP")){r.ln=61;m.AREACODE.setReadOnly(l.cast(P0,"PRIM_EVP").getReadOnly());
m.EXCHANGE.setReadOnly(l.cast(P0,"PRIM_EVP").getReadOnly());m.NUMBER.setReadOnly(l.cast(P0,"PRIM_EVP").getReadOnly());}}r.ln=65;r.e();};cO.get=cO.getVALUE=function(){return this.mthGETPROPERTYVALUE();};cO.set=cO.setVALUE=function(v){this.mthSETPROPERTYVALUE(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOPHON"});}},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_EDIT","PRIM_LABL","PRIM_FLD"]});