﻿LANSA.addComponent({id:"DF_T69H3O",ot:"rp",tp:"Reusable Part",de:"\\OC=Print Sample Invoice",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};
var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);this.aF("DF_T69H3O",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("PRINTBUTTON","PRIM_PHBN");var C3=this.cR("SAMPLEINVOICE","PRIM_WEB","Page");var C4=this.cR("REPORT","DF_T69CTO");var C5=this.cF("USETOP",Fd.F1.Dc);var C6=this.cF("SAVETOP",Fd.F1.Dc);var C7=this.cF("USELEFT",Fd.F1.Dc);var C8=this.cF("USEHEIGHT",Fd.F1.Dc);var C9=this.cF("REPEAT",Fd.F1.Dc);
var C10=this.cF("SPACING",Fd.F1.Dc);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setManage(C2);C0.iC();C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("CENTER");C1.setManage(C3);C1.iC();C2.setCaption("Print");C2.setDisplayPosition(2);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(2);C2.setTop(0);C2.setWidth(969);C2.setHeight(41);C2.iC();C3.setDescription("Report to be printed");C3.setDisplayPosition(1);C3.setHeight(720);C3.setParent(this);C3.setTabPosition(1);
C3.setTabStop(false);C3.setTop(41);C3.setWidth(969);C3.iC();C4.iC();C5.aD();C5.iC();C6.aD();C6.iC();C7.aD();C7.iC();C8.aD();C8.iC();C9.aD();C9.iC();C10.aD();C10.iC();C2.aH("CLICK",this,e2);C4.aH("UPRINTWIDGETINITIALIZED",this,e1);this.setHeight(761);this.setWidth(969);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",41);r.ln=41;{r.ln=43;m.SAMPLEINVOICE.setSource("http://www.dockets-forms.com/resource/sample/standard_ncr/A4%20Invoice%20book.pdf");}r.ln=45;r.e();};function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Report.uPrintWidgetInitialized",47);r.ln=47;{r.ln=52;m.REPORT.mthUINITIALIZE(u,u,u,u,u,u,u,u);}r.ln=54;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PrintButton.Click",56);r.ln=56;{r.ln=58;m.USETOP.set(0);m.USELEFT.set(0);r.ln=61;m.REPORT.mthUADDPAGE(u);r.ln=64;m.USETOP.set(l.add(m.USETOP.get(),10));r.ln=67;m.REPORT.mthUINSERTTEXT("TAX INVOICE / STATEMENT","center",u,m.USETOP.get(),u,"20pt",u,true,u,u);r.ln=70;m.USEHEIGHT.set(46);r.ln=71;m.USETOP.set(l.add(m.USETOP.get(),5));
r.ln=73;m.REPORT.mthUINSERTRECTANGLE("right",94,m.USEHEIGHT.get(),u,m.USETOP.get(),3,u,u);r.ln=74;m.REPORT.mthUINSERTRECTANGLE(u,94,m.USEHEIGHT.get(),u,m.USETOP.get(),3,u,u);r.ln=77;m.USETOP.set(l.add(m.USETOP.get(),7));r.ln=79;m.REPORT.mthUINSERTTEXT("From:",u,5,m.USETOP.get(),u,"14pt",u,u,true,u);r.ln=80;m.REPORT.mthUINSERTTEXT("To:",u,111,m.USETOP.get(),u,"14pt",u,u,true,u);r.ln=83;m.USELEFT.set(112);r.ln=84;m.REPEAT.set(3);r.ln=85;m.SPACING.set(8);r.ln=86;m.USETOP.set(l.add(m.USETOP.get(),8));
r.ln=88;m.REPORT.mthUINSERTLINE(80,m.USELEFT.get(),u,m.USETOP.get(),u,u,u,m.REPEAT.get(),m.SPACING.get());r.ln=90;m.USETOP.set(l.add(m.USETOP.get(),l.mul(m.SPACING.get(),m.REPEAT.get())));r.ln=91;m.REPORT.mthUINSERTTEXT("ABN:",u,5,m.USETOP.get(),u,"12pt",u,u,u,u);r.ln=92;m.REPORT.mthUINSERTTEXT("ABN:",u,111,m.USETOP.get(),u,"12pt",u,u,u,u);r.ln=97;m.USETOP.set(l.add(m.USETOP.get(),10));r.ln=98;m.USEHEIGHT.set(16);r.ln=100;m.REPORT.mthUINSERTRECTANGLE(u,66,m.USEHEIGHT.get(),u,m.USETOP.get(),2,u,u);
r.ln=101;m.REPORT.mthUINSERTRECTANGLE("center",66,m.USEHEIGHT.get(),u,m.USETOP.get(),2,u,u);r.ln=102;m.REPORT.mthUINSERTRECTANGLE("right",u,m.USEHEIGHT.get(),u,m.USETOP.get(),2,u,u);r.ln=106;m.REPORT.mthUINSERTTEXT("Date:",u,5,l.add(m.USETOP.get(),8),u,"14pt",u,u,true,u);r.ln=107;m.REPORT.mthUINSERTTEXT("Order No:",u,70,l.add(m.USETOP.get(),8),u,"14pt",u,u,true,u);r.ln=108;m.REPORT.mthUINSERTTEXT("Invoice No:",u,135,l.add(m.USETOP.get(),8),u,"14pt",u,u,true,u);r.ln=111;m.REPORT.mthUINSERTTEXT("0001",u,165,l.add(m.USETOP.get(),8),u,"20pt","red",u,u,u);
r.ln=113;m.USETOP.set(l.add(m.USETOP.get(),m.USEHEIGHT.get()));r.ln=116;m.SPACING.set(8);r.ln=118;m.USEHEIGHT.set(128);r.ln=121;m.REPORT.mthUINSERTRECTANGLE(u,u,m.USEHEIGHT.get(),u,m.USETOP.get(),2,u,u);r.ln=123;m.SAVETOP.set(m.USETOP.get());r.ln=125;m.REPORT.mthUINSERTTEXT("QTY",u,7,l.add(m.USETOP.get(),5),u,"14pt",u,u,true,u);r.ln=126;m.REPORT.mthUINSERTTEXT("Description",u,66,l.add(m.USETOP.get(),5),u,"14pt",u,u,true,u);r.ln=127;m.REPORT.mthUINSERTTEXT("Unit Price",u,148,l.add(m.USETOP.get(),5),u,"14pt",u,u,true,u);
r.ln=128;m.REPORT.mthUINSERTTEXT("TOTAL",u,178,l.add(m.USETOP.get(),5),u,"14pt",u,u,true,u);r.ln=130;m.REPEAT.set(16);r.ln=131;m.REPORT.mthUINSERTLINE(198,u,u,l.add(m.USETOP.get(),m.SPACING.get()),u,u,u,m.REPEAT.get(),m.SPACING.get());r.ln=135;m.REPORT.mthUINSERTLINE(u,23,23,m.SAVETOP.get(),l.add(m.SAVETOP.get(),m.USEHEIGHT.get()),2,u,u,u);r.ln=136;m.REPORT.mthUINSERTLINE(u,146,146,m.SAVETOP.get(),l.add(m.SAVETOP.get(),m.USEHEIGHT.get()),2,u,u,u);r.ln=137;m.REPORT.mthUINSERTLINE(u,174,174,m.SAVETOP.get(),l.add(m.SAVETOP.get(),m.USEHEIGHT.get()),2,u,u,u);
r.ln=139;m.USETOP.set(l.add(m.SAVETOP.get(),m.USEHEIGHT.get()));r.ln=141;m.REPORT.mthUINSERTTEXT("Received By",u,5,l.add(m.USETOP.get(),8),u,"12pt",u,u,u,u);r.ln=142;m.REPORT.mthUINSERTTEXT("Subtotal",u,148,l.add(m.USETOP.get(),8),u,"14pt",u,u,true,u);r.ln=144;m.REPORT.mthUINSERTLINE(120,u,u,l.add(m.USETOP.get(),12),u,2,u,u,u);r.ln=145;m.REPORT.mthUINSERTIMAGE(u,30,20,l.add(m.USETOP.get(),15),u,"barcode.png");r.ln=147;m.USEHEIGHT.set(15);r.ln=149;m.REPORT.mthUINSERTRECTANGLE(u,54,m.USEHEIGHT.get(),120,m.USETOP.get(),2,u,u);
r.ln=150;m.REPORT.mthUINSERTRECTANGLE(u,u,m.USEHEIGHT.get(),174,m.USETOP.get(),2,u,u);r.ln=152;m.USETOP.set(l.add(m.USETOP.get(),m.USEHEIGHT.get()));r.ln=154;m.REPORT.mthUINSERTRECTANGLE(u,u,m.USEHEIGHT.get(),120,m.USETOP.get(),2,u,u);r.ln=155;m.REPORT.mthUINSERTRECTANGLE(u,u,m.USEHEIGHT.get(),174,m.USETOP.get(),2,u,u);r.ln=157;m.REPORT.mthUINSERTTEXT("GST",u,158,l.add(m.USETOP.get(),7),u,"14pt",u,u,true,u);r.ln=159;m.REPORT.mthUINSERTRECTANGLE(u,54,m.USEHEIGHT.get(),120,l.add(m.USETOP.get(),m.USEHEIGHT.get()),2,u,"#000000");
r.ln=160;m.REPORT.mthUINSERTRECTANGLE(u,u,m.USEHEIGHT.get(),174,l.add(m.USETOP.get(),m.USEHEIGHT.get()),2,u,u);r.ln=162;m.USETOP.set(l.add(m.USETOP.get(),l.add(m.USEHEIGHT.get(),10)));r.ln=164;m.REPORT.mthUINSERTTEXT("TOTAL Including GST",u,122,m.USETOP.get(),u,"12pt","white",u,true,u);r.ln=166;m.REPORT.mthUINSERTLINE(198,u,u,l.add(m.USETOP.get(),5),u,2,u,u,u);r.ln=168;m.REPORT.mthUSHOW(u);}r.ln=170;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",173);r.ln=173;{r.ln=174;
m.REPORT.mthUTERMINATE();}r.ln=175;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC010O","DF_T69CTO"],rp:["PRIM_ATLI","PRIM_PHBN","PRIM_WEB.Page","PRIM_FLD"]});