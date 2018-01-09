﻿LANSA.addComponent({id:"VF_AC010O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Ancestor - Command Handlers",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELTXTL",ft:"A",ln:255,dc:0,lb:"Standard Long T",h1:"Standard",h2:"Long",h3:"Text",de:"Standard Long Text",dv:"",ia:["FE"]},F2:{nm:"VF_ELNUM",ft:"P",ln:7,dc:0,ec:"K",lb:{"ENG":"Number","FRA":"?","JPN":"Standard Number"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":"?","JPN":"Number"}[cL],
h3:"",de:{"ENG":"Standard Number","FRA":"?","JPN":"Standard Number"}[cL],dv:0,ia:["RB","FE"]},F3:{nm:"VF_ELXAK1",ft:"A",ln:32,dc:0,lb:"Alpha Key 1",h1:"Alpha",h2:"Key",h3:"1",de:"Alpha Key 1",dv:"",ia:["FE"]},F4:{nm:"VF_ELXAK2",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 2","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],h1:"Alpha",h2:"Key",h3:{"ENG":"2","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 2","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F5:{nm:"VF_ELXAK3",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 3","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],
h1:"Alpha",h2:"Key",h3:{"ENG":"3","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 3","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F6:{nm:"VF_ELXAK4",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 4","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],h1:"Alpha",h2:"Key",h3:{"ENG":"4","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 4","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F7:{nm:"VF_ELXAK5",ft:"A",ln:32,dc:0,lb:{"ENG":"Alpha Key 5","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],
h1:"Alpha",h2:"Key",h3:{"ENG":"5","FRA":"1","JPN":"1"}[cL],de:{"ENG":"Alpha Key 5","FRA":"Alpha Key 1","JPN":"Alpha Key 1"}[cL],dv:"",ia:["FE"]},F8:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F9:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],
h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F10:{nm:"VF_ELSUBT",ft:"A",ln:5,dc:0,lb:"Business Object",h1:"Business",h2:"Object",h3:"SubType",de:"Business Object SubType",dv:"",ia:["FE"]},F11:{nm:"VF_ELXCON",ft:"S",ln:30,dc:9,ec:"4",lb:{"ENG":"Numeric Column","FRA":"Instance Column","JPN":"Instance Column"}[cL],h1:{"ENG":"Numeric","FRA":"Instance","JPN":"Instance"}[cL],
h2:{"ENG":"Instance","FRA":"Column","JPN":"Column"}[cL],h3:{"ENG":"Column","FRA":"Name","JPN":"Name"}[cL],de:{"ENG":"Numeric Instance Column","FRA":"Instance Column Name","JPN":"Instance Column Name"}[cL],dv:0,ia:["RB","FE"]},F12:{nm:"VF_ELXCOD",ft:"A",ln:19,dc:0,lb:"Date Instance l",h1:"Date",h2:"Instance",h3:"list",de:"Date Instance list Column",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC034O",fd:Fd,pt:{avObjectType:{da:"na"},avObjectCaption:{da:"na"},avCommandType:{da:"na"},avCommandCaption:{da:"na"
},avAlphaArg1:{da:"na"},avAlphaArg2:{da:"na"},avNumericArg1:{da:"na"},avNumericArg2:{da:"na"},avHandlerCaption:{da:"na"},avAssociatedInstance:{da:"na"},zInt_ReusableVF_SY120O:{da:"rw"}},mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},avGetAssociatedInstance:{ps:{"Found":{pt:"o"},"AKey1":{pt:"o"},"AKey2":{pt:"o"},"AKey3":{pt:"o"},"AKey4":{pt:"o"},"AKey5":{pt:"o"},"NKey1":{pt:"o"},"NKey2":{pt:"o"},"NKey3":{pt:"o"},"NKey4":{pt:"o"},"NKey5":{pt:"o"},"VisualId1":{pt:"o"},
"VisualId2":{pt:"o"},"BusinessObjectType":{pt:"o"},"SubType":{pt:"o"},"AColumn1":{pt:"o"},"AColumn2":{pt:"o"},"AColumn3":{pt:"o"},"AColumn4":{pt:"o"},"AColumn5":{pt:"o"},"AColumn6":{pt:"o"},"AColumn7":{pt:"o"},"AColumn8":{pt:"o"},"AColumn9":{pt:"o"},"AColumn10":{pt:"o"},"NColumn1":{pt:"o"},"NColumn2":{pt:"o"},"NColumn3":{pt:"o"},"NColumn4":{pt:"o"},"NColumn5":{pt:"o"},"NColumn6":{pt:"o"},"NColumn7":{pt:"o"},"NColumn8":{pt:"o"},"NColumn9":{pt:"o"},"NColumn10":{pt:"o"},"DColumn1":{pt:"o"},"DColumn2":
{pt:"o"},"DColumn3":{pt:"o"},"DColumn4":{pt:"o"},"DColumn5":{pt:"o"}}},avResetDefaultCommandExecuted:{ps:{"To":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_AC010O",Fd);this.cD("ZINT_REUSABLEVF_SY120O");}});var cA=cO.aN.prototype;cO.mthGET_ASSOCIATEDINSTANCE=function(){var r=l.pR(this,cO,"Get_AssociatedInstance",33);var P0=r.cPD("RETURNITEM");r.ln=33;{r.ln=36;if((this.REF.ASSOCIATEDVF_UM012O!=null)){r.ln=38;P0=r.sR("P0",this.REF.ASSOCIATEDVF_UM012O.getASSOCIATEDLM003OITEM());}}r.ln=42;return r.rR(P0);
};cO.mthSET_AVHANDLERCAPTION=function(p0){var r=l.pR(this,cO,"Set_avHandlerCaption",45);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=45;{r.ln=48;this.setAVTITLEBARCAPTION(P0.get());}r.ln=50;r.e();};cO.mthGET_UALPHAARG1=function(){var r=l.pR(this,cO,"Get_uAlphaArg1",52);var P0=r.cPF("PROPERTYVALUE",Fd.F1.Dc);r.ln=52;{r.ln=54;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getUCOMMANDAARG1());}r.ln=55;return r.rV(P0.get());};cO.mthGET_UALPHAARG2=function(){var r=l.pR(this,cO,"Get_uAlphaArg2",57);
var P0=r.cPF("PROPERTYVALUE",Fd.F1.Dc);r.ln=57;{r.ln=59;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getUCOMMANDAARG2());}r.ln=60;return r.rV(P0.get());};cO.mthGET_UNUMERICARG1=function(){var r=l.pR(this,cO,"Get_uNumericArg1",62);var P0=r.cPF("PROPERTYVALUE",Fd.F2.Dc);r.ln=62;{r.ln=64;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getUCOMMANDNARG1());}r.ln=65;return r.rV(P0.get());};cO.mthGET_UNUMERICARG2=function(){var r=l.pR(this,cO,"Get_uNumericArg2",67);var P0=r.cPF("PROPERTYVALUE",Fd.F2.Dc);
r.ln=67;{r.ln=69;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getUCOMMANDNARG2());}r.ln=70;return r.rV(P0.get());};cO.mthGET_UOBJECTTYPE=function(){var r=l.pR(this,cO,"Get_uObjectType",72);var P0=r.cP("PROPERTYVALUE","PRIM_ALPH");r.ln=72;{r.ln=74;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getPARENTVF_AC001OBJECT().getUUSEROBJECTTYPE());}r.ln=75;return r.rV(P0.get());};cO.mthGET_UCOMMANDTYPE=function(){var r=l.pR(this,cO,"Get_uCommandType",77);var P0=r.cP("PROPERTYVALUE","PRIM_ALPH");
r.ln=77;{r.ln=79;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getVF_FP009REFERENCE().getUUSEROBJECTTYPE());}r.ln=80;return r.rV(P0.get());};cO.mthGET_UOBJECTCAPTION=function(){var r=l.pR(this,cO,"Get_uObjectCaption",82);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=82;{r.ln=84;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getPARENTVF_AC001OBJECT().getUCAPTION());}r.ln=85;return r.rV(P0.get());};cO.mthGET_UCOMMANDCAPTION=function(){var r=l.pR(this,cO,"Get_uCommandCaption",87);
var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=87;{r.ln=89;P0.set(this.REF.ASSOCIATEDHANDLERDEFINITIONREFERENCE.getVF_FP009REFERENCE().getUCAPTION());}r.ln=90;return r.rV(P0.get());};cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",95);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=95;{r.ln=99;this.REF.AVFRAMEWORKMANAGER.mthAVRECORDTRACE(this,"Command Handler - uExecute executed");p0.set(P0.get());}r.ln=101;r.e();};cO.mthAVGETASSOCIATEDINSTANCE=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39)
{var r=l.mR(this,cO,"avGetAssociatedInstance",108);var P0=r.cP("FOUND","PRIM_BOLN");var P1=r.cPF("AKEY1",Fd.F3.Dc);var P2=r.cPF("AKEY2",Fd.F4.Dc);var P3=r.cPF("AKEY3",Fd.F5.Dc);var P4=r.cPF("AKEY4",Fd.F6.Dc);var P5=r.cPF("AKEY5",Fd.F7.Dc);var P6=r.cPF("NKEY1",Fd.F8.Dc);var P7=r.cPF("NKEY2",Fd.F8.Dc);var P8=r.cPF("NKEY3",Fd.F8.Dc);var P9=r.cPF("NKEY4",Fd.F8.Dc);var P10=r.cPF("NKEY5",Fd.F8.Dc);var P11=r.cP("VISUALID1","PRIM_DC","UnicodeString");var P12=r.cP("VISUALID2","PRIM_DC","UnicodeString");var P13=r.cPF("BUSINESSOBJECTTYPE",Fd.F9.Dc);
var P14=r.cPF("SUBTYPE",Fd.F10.Dc);var P15=r.cP("ACOLUMN1","PRIM_DC","UnicodeString");var P16=r.cP("ACOLUMN2","PRIM_DC","UnicodeString");var P17=r.cP("ACOLUMN3","PRIM_DC","UnicodeString");var P18=r.cP("ACOLUMN4","PRIM_DC","UnicodeString");var P19=r.cP("ACOLUMN5","PRIM_DC","UnicodeString");var P20=r.cP("ACOLUMN6","PRIM_DC","UnicodeString");var P21=r.cP("ACOLUMN7","PRIM_DC","UnicodeString");var P22=r.cP("ACOLUMN8","PRIM_DC","UnicodeString");var P23=r.cP("ACOLUMN9","PRIM_DC","UnicodeString");var P24=r.cP("ACOLUMN10","PRIM_DC","UnicodeString");
var P25=r.cPF("NCOLUMN1",Fd.F11.Dc);var P26=r.cPF("NCOLUMN2",Fd.F11.Dc);var P27=r.cPF("NCOLUMN3",Fd.F11.Dc);var P28=r.cPF("NCOLUMN4",Fd.F11.Dc);var P29=r.cPF("NCOLUMN5",Fd.F11.Dc);var P30=r.cPF("NCOLUMN6",Fd.F11.Dc);var P31=r.cPF("NCOLUMN7",Fd.F11.Dc);var P32=r.cPF("NCOLUMN8",Fd.F11.Dc);var P33=r.cPF("NCOLUMN9",Fd.F11.Dc);var P34=r.cPF("NCOLUMN10",Fd.F11.Dc);var P35=r.cPF("DCOLUMN1",Fd.F12.Dc);var P36=r.cPF("DCOLUMN2",Fd.F12.Dc);var P37=r.cPF("DCOLUMN3",Fd.F12.Dc);var P38=r.cPF("DCOLUMN4",Fd.F12.Dc);
var P39=r.cPF("DCOLUMN5",Fd.F12.Dc);P0.set(false);P1.set(" ");P2.set(" ");P3.set(" ");P4.set(" ");P5.set(" ");P6.set(0);P7.set(0);P8.set(0);P9.set(0);P10.set(0);P11.set(" ");P12.set(" ");P13.set(" ");P14.set(" ");P15.set(" ");P16.set(" ");P17.set(" ");P18.set(" ");P19.set(" ");P20.set(" ");P21.set(" ");P22.set(" ");P23.set(" ");P24.set(" ");P25.set(0);P26.set(0);P27.set(0);P28.set(0);P29.set(0);P30.set(0);P31.set(0);P32.set(0);P33.set(0);P34.set(0);P35.set(" ");P36.set(" ");P37.set(" ");P38.set(" ");
P39.set(" ");var C0=r.cD("C0");r.ln=108;{r.ln=162;C0=r.sR("C0",this.getAVASSOCIATEDINSTANCE());r.ln=164;if((C0!=null)){r.ln=166;P0.set(true);r.ln=168;P13.set(C0.getAVBUSINESSOBJECTTYPE().get());r.ln=169;P14.set(C0.getAVSUBTYPE().get());r.ln=171;P11.set(C0.getAVVISUALID1().get());r.ln=172;P12.set(C0.getAVVISUALID2().get());r.ln=174;P1.set(C0.getAVAKEY1().get());r.ln=175;P2.set(C0.getAVAKEY2().get());r.ln=176;P3.set(C0.getAVAKEY3().get());r.ln=177;P4.set(C0.getAVAKEY4().get());r.ln=178;P5.set(C0.getAVAKEY5().get());
r.ln=180;P6.set(C0.getAVNKEY1().get());r.ln=181;P7.set(C0.getAVNKEY2().get());r.ln=182;P8.set(C0.getAVNKEY3().get());r.ln=183;P9.set(C0.getAVNKEY4().get());r.ln=184;P10.set(C0.getAVNKEY5().get());r.ln=186;P15.set(C0.getAVACOLUMN1().get());r.ln=187;P16.set(C0.getAVACOLUMN2().get());r.ln=188;P17.set(C0.getAVACOLUMN3().get());r.ln=189;P18.set(C0.getAVACOLUMN4().get());r.ln=190;P19.set(C0.getAVACOLUMN5().get());r.ln=191;P20.set(C0.getAVACOLUMN6().get());r.ln=192;P21.set(C0.getAVACOLUMN7().get());r.ln=193;
P22.set(C0.getAVACOLUMN8().get());r.ln=194;P23.set(C0.getAVACOLUMN9().get());r.ln=195;P24.set(C0.getAVACOLUMN10().get());r.ln=197;P25.set(C0.getAVNCOLUMN1().get());r.ln=198;P26.set(C0.getAVNCOLUMN2().get());r.ln=199;P27.set(C0.getAVNCOLUMN3().get());r.ln=200;P28.set(C0.getAVNCOLUMN4().get());r.ln=201;P29.set(C0.getAVNCOLUMN5().get());r.ln=202;P30.set(C0.getAVNCOLUMN6().get());r.ln=203;P31.set(C0.getAVNCOLUMN7().get());r.ln=204;P32.set(C0.getAVNCOLUMN8().get());r.ln=205;P33.set(C0.getAVNCOLUMN9().get());
r.ln=206;P34.set(C0.getAVNCOLUMN10().get());r.ln=208;P35.set(C0.getAVDCOLUMN1().get());r.ln=209;P36.set(C0.getAVDCOLUMN2().get());r.ln=210;P37.set(C0.getAVDCOLUMN3().get());r.ln=211;P38.set(C0.getAVDCOLUMN4().get());r.ln=212;P39.set(C0.getAVDCOLUMN5().get());}else{r.ln=216;P0.set(false);r.ln=218;P13.setValue(null);P14.setValue(null);P1.setValue(null);P2.setValue(null);P3.setValue(null);P4.setValue(null);P5.setValue(null);P6.setValue(null);P7.setValue(null);P8.setValue(null);P9.setValue(null);P10.setValue(null);
P11.setValue(null);P12.setValue(null);P15.setValue(null);P16.setValue(null);P17.setValue(null);P18.setValue(null);P19.setValue(null);P20.setValue(null);P21.setValue(null);P22.setValue(null);P23.setValue(null);P24.setValue(null);P25.setValue(null);P26.setValue(null);P27.setValue(null);P28.setValue(null);P29.setValue(null);P30.setValue(null);P31.setValue(null);P32.setValue(null);P33.setValue(null);P34.setValue(null);P35.setValue(null);P36.setValue(null);P37.setValue(null);P38.setValue(null);P39.setValue(null);
}if(p0!==u){p0.set(P0.get());}if(p1!==u){p1.set(P1.get());}if(p2!==u){p2.set(P2.get());}if(p3!==u){p3.set(P3.get());}if(p4!==u){p4.set(P4.get());}if(p5!==u){p5.set(P5.get());}if(p6!==u){p6.set(P6.get());}if(p7!==u){p7.set(P7.get());}if(p8!==u){p8.set(P8.get());}if(p9!==u){p9.set(P9.get());}if(p10!==u){p10.set(P10.get());}if(p11!==u){p11.set(P11.get());}if(p12!==u){p12.set(P12.get());}if(p13!==u){p13.set(P13.get());}if(p14!==u){p14.set(P14.get());}if(p15!==u){p15.set(P15.get());}if(p16!==u){p16.set(P16.get());
}if(p17!==u){p17.set(P17.get());}if(p18!==u){p18.set(P18.get());}if(p19!==u){p19.set(P19.get());}if(p20!==u){p20.set(P20.get());}if(p21!==u){p21.set(P21.get());}if(p22!==u){p22.set(P22.get());}if(p23!==u){p23.set(P23.get());}if(p24!==u){p24.set(P24.get());}if(p25!==u){p25.set(P25.get());}if(p26!==u){p26.set(P26.get());}if(p27!==u){p27.set(P27.get());}if(p28!==u){p28.set(P28.get());}if(p29!==u){p29.set(P29.get());}if(p30!==u){p30.set(P30.get());}if(p31!==u){p31.set(P31.get());}if(p32!==u){p32.set(P32.get());
}if(p33!==u){p33.set(P33.get());}if(p34!==u){p34.set(P34.get());}if(p35!==u){p35.set(P35.get());}if(p36!==u){p36.set(P36.get());}if(p37!==u){p37.set(P37.get());}if(p38!==u){p38.set(P38.get());}if(p39!==u){p39.set(P39.get());}}r.ln=224;r.e();};cO.mthAVRESETDEFAULTCOMMANDEXECUTED=function(p0){var r=l.mR(this,cO,"avResetDefaultCommandExecuted",227);var P0=r.cP("TO","PRIM_BOLN");P0.set(p0);r.ln=227;{r.ln=230;if((this.REF.ASSOCIATEDVF_AC025O.getVF_AC005CONTAINER().getVF_UI002OCONTAINER()!=null)){r.ln=232;
this.REF.ASSOCIATEDVF_AC025O.getVF_AC005CONTAINER().getVF_UI002OCONTAINER().mthZINT_RESETDEFAULTCOMMANDEXECUTED(P0.get());}}r.ln=236;r.e();};cO.getAVOBJECTTYPE=function(){return this.mthGET_UOBJECTTYPE();};cO.getAVOBJECTCAPTION=function(){return this.mthGET_UOBJECTCAPTION();};cO.getAVCOMMANDTYPE=function(){return this.mthGET_UCOMMANDTYPE();};cO.getAVCOMMANDCAPTION=function(){return this.mthGET_UCOMMANDCAPTION();};cO.getAVALPHAARG1=function(){return this.mthGET_UALPHAARG1();};cO.getAVALPHAARG2=function()
{return this.mthGET_UALPHAARG2();};cO.getAVNUMERICARG1=function(){return this.mthGET_UNUMERICARG1();};cO.getAVNUMERICARG2=function(){return this.mthGET_UNUMERICARG2();};cO.setAVHANDLERCAPTION=function(v){this.mthSET_AVHANDLERCAPTION(v);};cO.getAVASSOCIATEDINSTANCE=function(){return this.mthGET_ASSOCIATEDINSTANCE();};cO.getZINT_REUSABLEVF_SY120O=function(){return this.REF.ZINT_REUSABLEVF_SY120O;};cO.setZINT_REUSABLEVF_SY120O=function(v){this.srZINT_REUSABLEVF_SY120O(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELTXTL"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELNUM"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELXAK1"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELXAK2"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELXAK3"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELXAK4"});
}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELXAK5"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"VF_ELSUBT"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"VF_ELXCON"});}{Fd.F12.Dc=function()
{this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"VF_ELXCOD"});}cO.srZINT_REUSABLEVF_SY120O=function(rn){this.sR("ZINT_REUSABLEVF_SY120O",rn);};cO.srASSOCIATEDVF_UM012O=function(rn){cA.srASSOCIATEDVF_UM012O.call(this,rn);};cO.srASSOCIATEDHANDLERDEFINITIONREFERENCE=function(rn){cA.srASSOCIATEDHANDLERDEFINITIONREFERENCE.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srASSOCIATEDVF_AC025O=function(rn){cA.srASSOCIATEDVF_AC025O.call(this,rn);
};},{rc:["VF_AC034O"],rp:["PRIM_FLD"],dc:["VF_SY120O","VF_LM003O"]});