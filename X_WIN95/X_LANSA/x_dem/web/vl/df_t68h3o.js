﻿LANSA.addComponent({id:"DF_T68H3O",ot:"rp",tp:"Reusable Part",de:"\\OC=Download Inline",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELFNAM",ft:"A",ln:256,dc:0,lb:"Document long f",h1:"Document",h2:"long",h3:"file",de:"Document long file name",dv:"",ia:["FE"]},F2:{nm:"DF_ELBLOB",ft:"BL",ln:0,dc:0,lb:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],h1:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],h2:" ",h3:" ",de:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T68H3O",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LABEL_NAMEITEM1","PRIM_TBLO","Item");var C4=this.cR("FILEPICKER1ITEM1","PRIM_TBLO","Item");var C5=this.cR("RADIOBUTTON_DATABASEITEM1","PRIM_TBLO","Item");var C6=this.cR("RADIOBUTTON_FILEITEM1","PRIM_TBLO","Item");
var C7=this.cR("LABEL1ITEM1","PRIM_TBLO","Item");var C8=this.cR("RADIOBUTTON_JPGITEM1","PRIM_TBLO","Item");var C9=this.cR("RADIOBUTTON_PNGITEM1","PRIM_TBLO","Item");var C10=this.cR("RADIOBUTTON_DOCXITEM1","PRIM_TBLO","Item");var C11=this.cR("RADIOBUTTON_XLSITEM1","PRIM_TBLO","Item");var C12=this.cR("RADIOBUTTON_PPTITEM1","PRIM_TBLO","Item");var C13=this.cR("BUTTON_SRVROUTINEITEM1","PRIM_TBLO","Item");var C14=this.cR("WEBPAGE1ITEM1","PRIM_TBLO","Item");var C15=this.cR("BUTTON_WEBSERVER","PRIM_PHBN");
var C16=this.cR("BUTTON_SRVROUTINE","PRIM_PHBN");var C17=this.cR("LABEL_MESSAGE","PRIM_LABL");var C18=this.cR("LABEL_NAME","PRIM_LABL");var C19=this.cR("WEBPAGE1","PRIM_WEB","Page");var C20=this.cR("RADIOBUTTON_PDF","PRIM_RDBN");var C21=this.cR("RADIOBUTTON_DOC","PRIM_RDBN");var C22=this.cR("RADIOBUTTON_DOCX","PRIM_RDBN");var C23=this.cR("RADIOBUTTON_PNG","PRIM_RDBN");var C24=this.cR("RADIOBUTTON_JPG","PRIM_RDBN");var C25=this.cR("RADIOBUTTON_XLS","PRIM_RDBN");var C26=this.cR("RADIOBUTTON_PPT","PRIM_RDBN");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setManage(C18);C3.setParent(C0);C3.setRow(C2);C3.setSizing("NONE");C3.setColumn(C1);C3.setAlignment("TOPLEFT");C3.setFlow("DOWN");C3.iC();C4.setManage(C15);C4.setParent(C0);C4.setRow(C2);C4.setSizing("NONE");C4.setColumn(C1);C4.setAlignment("TOPLEFT");C4.setFlow("DOWN");C4.iC();C5.setManage(C20);C5.setParent(C0);C5.setRow(C2);C5.setSizing("NONE");C5.setColumn(C1);C5.setAlignment("TOPLEFT");
C5.setFlow("DOWN");C5.iC();C6.setManage(C21);C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");C6.setColumn(C1);C6.setAlignment("TOPLEFT");C6.setFlow("DOWN");C6.iC();C7.setManage(C17);C7.setParent(C0);C7.setRow(C2);C7.setSizing("NONE");C7.setColumn(C1);C7.setAlignment("TOPLEFT");C7.setFlow("DOWN");C7.iC();C8.setManage(C24);C8.setParent(C0);C8.setRow(C2);C8.setSizing("NONE");C8.setColumn(C1);C8.setAlignment("TOPLEFT");C8.setFlow("DOWN");C8.iC();C9.setManage(C23);C9.setParent(C0);C9.setRow(C2);C9.setSizing("NONE");
C9.setColumn(C1);C9.setAlignment("TOPLEFT");C9.setFlow("DOWN");C9.iC();C10.setManage(C22);C10.setParent(C0);C10.setRow(C2);C10.setSizing("NONE");C10.setColumn(C1);C10.setAlignment("TOPLEFT");C10.setFlow("DOWN");C10.iC();C11.setManage(C25);C11.setParent(C0);C11.setRow(C2);C11.setSizing("NONE");C11.setColumn(C1);C11.setAlignment("TOPLEFT");C11.setFlow("DOWN");C11.iC();C12.setManage(C26);C12.setParent(C0);C12.setRow(C2);C12.setSizing("NONE");C12.setColumn(C1);C12.setAlignment("TOPLEFT");C12.setFlow("DOWN");
C12.iC();C13.setManage(C16);C13.setParent(C0);C13.setRow(C2);C13.setSizing("NONE");C13.setColumn(C1);C13.setAlignment("TOPLEFT");C13.setFlow("DOWN");C13.iC();C14.setManage(C19);C14.setParent(C0);C14.setRow(C2);C14.setSizing("NONE");C14.setColumn(C1);C14.setAlignment("TOPLEFT");C14.setFlow("DOWN");C14.iC();C15.setCaption("Method 1. Point the webpage at the file on the webserver");C15.setDisplayPosition(2);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(4);C15.setTop(25);C15.setWidth(577);C15.setAlignment("LEFT");
C15.setHint("This example was designed for and has been tested on Windows 10 using the Chrome browser, with MS-Office installed. Other browsers and/or operating systems may produce different results.");C15.iC();C16.setCaption("Method 2. Call a server routine to get the file as a blob field (Does not work in IE or Edge)");C16.setDisplayPosition(3);C16.setLeft(0);C16.setParent(this);C16.setTabPosition(2);C16.setTop(50);C16.setWidth(577);C16.setAlignment("LEFT");C16.setHeight(31);C16.setWordWrap(true);
C16.setHint("This example was designed for and has been tested on Windows 10 using the Chrome browser, with MS-Office installed. Other browsers and/or operating systems may produce different results.");C16.iC();C17.setCaption(" ");C17.setDisplayPosition(11);C17.setEllipses("WORD");C17.setLeft(0);C17.setParent(this);C17.setTabPosition(6);C17.setTabStop(false);C17.setTop(256);C17.setWidth(599);C17.iC();C18.setDisplayPosition(1);C18.setEllipses("WORD");C18.setHeight(25);C18.setLeft(0);C18.setParent(this);
C18.setTabPosition(1);C18.setTabStop(false);C18.setTop(0);C18.setVerticalAlignment("CENTER");C18.setWidth(599);C18.iC();C19.setDescription("Web Page");C19.setDisplayPosition(12);C19.setHeight(346);C19.setParent(this);C19.setTabPosition(3);C19.setTabStop(false);C19.setWidth(673);C19.setTop(306);C19.iC();C20.setCaption(".PDF ");C20.setDisplayPosition(4);C20.setLeft(0);C20.setMarginLeft(2);C20.setParent(this);C20.setTabPosition(5);C20.setTop(81);C20.setWidth(599);C20.setButtonChecked(true);C20.setComponentTag("PDF");
C20.iC();C21.setCaption(".doc");C21.setDisplayPosition(10);C21.setLeft(0);C21.setMarginLeft(2);C21.setParent(this);C21.setTabPosition(12);C21.setTop(231);C21.setWidth(599);C21.setComponentTag("DOC");C21.iC();C22.setCaption(".docx");C22.setDisplayPosition(9);C22.setLeft(0);C22.setMarginLeft(2);C22.setParent(this);C22.setTabPosition(11);C22.setTop(206);C22.setWidth(599);C22.setComponentTag("DOCX");C22.iC();C23.setCaption(".png");C23.setDisplayPosition(8);C23.setLeft(0);C23.setMarginLeft(2);C23.setParent(this);
C23.setTabPosition(10);C23.setTop(181);C23.setWidth(599);C23.setComponentTag("PNG");C23.iC();C24.setCaption(".jpg");C24.setDisplayPosition(7);C24.setLeft(0);C24.setMarginLeft(2);C24.setParent(this);C24.setTabPosition(9);C24.setTop(156);C24.setWidth(599);C24.setComponentTag("JPG");C24.iC();C25.setCaption(".xls");C25.setDisplayPosition(6);C25.setLeft(0);C25.setMarginLeft(2);C25.setParent(this);C25.setTabPosition(8);C25.setTop(131);C25.setWidth(599);C25.setComponentTag("XLS");C25.iC();C26.setCaption(".ppt");
C26.setDisplayPosition(5);C26.setLeft(0);C26.setMarginLeft(2);C26.setParent(this);C26.setTabPosition(7);C26.setTop(106);C26.setWidth(599);C26.setComponentTag("PPT");C26.iC();C15.aH("CLICK",this,e1);C16.aH("CLICK",this,e2);C20.aH("CLICK",this,e3);C21.aH("CLICK",this,e3);C22.aH("CLICK",this,e3);C23.aH("CLICK",this,e3);C24.aH("CLICK",this,e3);C25.aH("CLICK",this,e3);C26.aH("CLICK",this,e3);this.setHeight(681);this.setWidth(609);this.setLayoutManager(C0);this.setVerticalScroll(true);}});var cA=cO.aN.prototype;
cO.mthUINITIALIZE=function(){var f=this.FLD.DF_T68H3O,m=this.REF,r=l.mR(this,cO,"uInitialize",64);r.ln=64;{r.ln=65;cA.mthUINITIALIZE.call(this);r.ln=67;m.LABEL_NAME.setCaption(l.cat(l.cat(l.cat("See component ",this.getComponentClassName())," - "),"Download a file from the server inline"));r.ln=70;f.F1.set("DF_T68_AboutLANSA.pdf");r.ln=73;this.setAVCONTENTNEEDSSHIELDING(true);}r.ln=75;r.e();};function e1(sender,Ps){var f=this.FLD.DF_T68H3O,m=this.REF,r=l.eR(this,cO,"#Button_Webserver.Click",82);r.ln=82;
{r.ln=87;m.WEBPAGE1.setSource(l.cat("VLFONE/",f.F1.get()));}r.ln=89;r.e();};function e2(sender,Ps){var f=this.FLD.DF_T68H3O,m=this.REF,r=l.eR(this,cO,"#Button_SrvRoutine.Click",105);var C0=r.cDR("UDOWNLOADFILEASBLOB","DF_T68DSO","UDOWNLOADFILEASBLOB");C0.iC();r.ln=105;{r.ln=111;C0.mthEXECUTE({FLD:{"DF_ELFNAM":f.F1.get()}},{FLD:{"DF_ELBLOB":f.F2}});r.ln=112;m.LABEL_MESSAGE.setCaption(l.cat(f.F1.get()," download attempt from server has completed."));r.ln=115;m.WEBPAGE1.setSource(f.F2.get());}r.ln=117;
r.e();};function e3(USENDER,Ps){var f=this.FLD.DF_T68H3O,r=l.eR(this,cO,"#RadioButton_DOC.Click #RadioButton_DOCX.Click #RadioButton_JPG.Click #RadioButton_PDF.Click #RadioButton_PNG.Click #RadioButton_XLS.Click #RadioButton_PPT.Click",120);r.ln=120;{r.ln=122;{var v1=USENDER.getComponentTag();if(r.ln=123,l.s.eq(v1,"PDF")){r.ln=124;f.F1.set("DF_T68_AboutLANSA.pdf");}else if(r.ln=126,l.s.eq(v1,"DOC")){r.ln=127;f.F1.set("DF_T68_AboutLANSA.doc");}else if(r.ln=129,l.s.eq(v1,"DOCX")){r.ln=130;f.F1.set("DF_T68_AboutLANSA.docx");
}else if(r.ln=132,l.s.eq(v1,"PNG")){r.ln=133;f.F1.set("DF_T68_VLFImage.PNG");}else if(r.ln=135,l.s.eq(v1,"JPG")){r.ln=136;f.F1.set("DF_T68_VLFImage.jpg");}else if(r.ln=138,l.s.eq(v1,"XLS")){r.ln=139;f.F1.set("DF_T68_AboutLANSA.xls");}else if(r.ln=141,l.s.eq(v1,"PPT")){r.ln=142;f.F1.set("DF_T68_VLFOview.ppt");}r.ln=144;}}r.ln=145;r.e();};},{rc:["VF_AC010O"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PHBN","PRIM_LABL","PRIM_WEB.Page","PRIM_RDBN","PRIM_WEB.DataRequest","PRIM_HINT"]
});