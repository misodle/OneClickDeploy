﻿LANSA.addComponent({id:"DF_T68H1O",ot:"rp",tp:"Reusable Part",de:"\\OC=Upload a selected file to the server",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELBLOB",ft:"BL",ln:0,dc:0,lb:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],h1:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],h2:" ",h3:" ",de:{"ENG":"Document","FRA":"Document","JPN":"ﾄﾞｷｭﾒﾝﾄ"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"RETURNCODE",ft:"A",
ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F3:{nm:"NEWFILENAME1",ft:"A",ln:256,dc:0,lb:"Document long f",h1:"Document",h2:"long",h3:"file",de:"Document long file name",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T68H1O",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LABEL_NAMEITEM1","PRIM_TBLO","Item");
var C4=this.cR("FILEPICKER1ITEM1","PRIM_TBLO","Item");var C5=this.cR("RADIOBUTTON_DATABASEITEM1","PRIM_TBLO","Item");var C6=this.cR("RADIOBUTTON_FILEITEM1","PRIM_TBLO","Item");var C7=this.cR("LABEL1ITEM1","PRIM_TBLO","Item");var C8=this.cR("FILEPICKER1","PRIM_WEB","FilePicker");var C9=this.cR("LABEL_MESSAGE","PRIM_LABL");var C10=this.cR("STYLEBUTTON","PRIM_VS","Style");var C11=this.cR("RADIOBUTTON_DATABASE","PRIM_RDBN");var C12=this.cR("RADIOBUTTON_FILE","PRIM_RDBN");var C13=this.cR("LABEL_NAME","PRIM_LABL");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setManage(C13);C3.setParent(C0);C3.setRow(C2);C3.setSizing("NONE");C3.setColumn(C1);C3.setAlignment("TOPLEFT");C3.setFlow("DOWN");C3.iC();C4.setManage(C8);C4.setParent(C0);C4.setRow(C2);C4.setSizing("NONE");C4.setColumn(C1);C4.setAlignment("TOPLEFT");C4.setFlow("DOWN");C4.iC();C5.setManage(C11);C5.setParent(C0);C5.setRow(C2);C5.setSizing("NONE");C5.setColumn(C1);C5.setAlignment("TOPLEFT");
C5.setFlow("DOWN");C5.iC();C6.setManage(C12);C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");C6.setColumn(C1);C6.setAlignment("TOPLEFT");C6.setFlow("DOWN");C6.iC();C7.setManage(C9);C7.setParent(C0);C7.setRow(C2);C7.setSizing("NONE");C7.setColumn(C1);C7.setAlignment("TOPLEFT");C7.setFlow("DOWN");C7.iC();C8.setCaption("Click here to select a file to send to the server");C8.setDisplayPosition(2);C8.setEllipses("WORD");C8.setHeight(25);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(1);C8.setTabStop(false);
C8.setTop(25);C8.setVerticalAlignment("CENTER");C8.setWidth(599);C8.setStyle(C10);C8.iC();C9.setCaption(" ");C9.setDisplayPosition(5);C9.setEllipses("WORD");C9.setHeight(73);C9.setLeft(0);C9.setParent(this);C9.setTabPosition(3);C9.setTabStop(false);C9.setTop(100);C9.setVerticalAlignment("CENTER");C9.setWidth(599);C9.iC();C10.setNormBackColor("SILVER");C10.iC();C11.setCaption("Save in a Database ");C11.setDisplayPosition(3);C11.setLeft(0);C11.setMarginLeft(2);C11.setParent(this);C11.setTabPosition(4);
C11.setTop(50);C11.setWidth(599);C11.setButtonChecked(true);C11.iC();C12.setCaption("Save as a file on the server");C12.setDisplayPosition(4);C12.setLeft(0);C12.setMarginLeft(2);C12.setParent(this);C12.setTabPosition(5);C12.setTop(75);C12.setWidth(599);C12.iC();C13.setDisplayPosition(1);C13.setEllipses("WORD");C13.setHeight(25);C13.setLeft(0);C13.setParent(this);C13.setTabPosition(2);C13.setTabStop(false);C13.setTop(0);C13.setVerticalAlignment("CENTER");C13.setWidth(599);C13.iC();C8.aH("FILESELECTED",this,e1);
this.setHeight(281);this.setWidth(609);this.setLayoutManager(C0);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",51);r.ln=51;{r.ln=52;cA.mthUINITIALIZE.call(this);r.ln=54;m.LABEL_NAME.setCaption(l.cat(l.cat(l.cat("See component ",this.getComponentClassName())," - "),"Upload a selected file to the server"));}r.ln=55;r.e();};function e1(sender,Ps){var f=this.FLD.DF_T68H1O,m=this.REF,r=l.eR(this,cO,"#FilePicker1.FileSelected",61);var P0=Ps.r("FILE");
var C0=r.cDR("USAVETODATABASE","DF_T68DSO","USAVETODATABASE");var C1=r.cDR("USAVEASFILE","DF_T68DSO","USAVEASFILE");C0.iC();C1.iC();r.ln=61;{r.ln=69;f.F1.set(P0.getBlob());r.ln=71;m.LABEL_MESSAGE.setCaption("");r.ln=74;if(l.n.gt(P0.getFileSize(),4194304)){r.ln=75;m.LABEL_MESSAGE.setCaption(l.cat(l.cat("File ",P0.getName())," is more than 4Mb, which is the maximum attachment size that this example allows."));r.e();return;}r.ln=79;if(l.n.lt(P0.getFileSize(),1)){r.ln=80;m.LABEL_MESSAGE.setCaption(l.cat(l.cat("File ",P0.getName())," is empty. Choose a file that contains some data, to upload "));
r.e();return;}r.ln=86;if(m.RADIOBUTTON_DATABASE.getButtonChecked()){r.ln=87;C0.mthEXECUTE({FLD:{"DF_ELBLOB":f.F1.get()},sm:"M"},{FLD:{"RETURNCODE":f.F2}});r.ln=88;m.LABEL_MESSAGE.setCaption(l.cat(l.cat(P0.getName()," was uploaded to the server and inserted to database file DFT68BLOB. Return Code was: "),f.F2.get()));}else{r.ln=90;C1.mthEXECUTE({FLD:{"DF_ELBLOB":f.F1.get()},sm:"M"},{FLD:{"RETURNCODE":f.F2,"NEWFILENAME1":f.F3}});r.ln=91;m.LABEL_MESSAGE.setCaption(l.cat(l.cat(l.cat(l.cat(l.cat(P0.getName()," was uploaded to the server as file: ")," "),f.F3.get())," -  Return Code was: "),f.F2.get()));
}}r.ln=93;r.e();};},{rc:["VF_AC010O"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_WEB.FilePicker","PRIM_LABL","PRIM_VS.Style","PRIM_RDBN","PRIM_WEB.DataRequest"]});