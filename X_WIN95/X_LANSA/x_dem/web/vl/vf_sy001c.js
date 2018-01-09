﻿LANSA.addComponent({id:"VF_SY001C",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE version of VF_SY001A",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELLANG",ft:"A",ln:4,dc:0,lb:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],h1:{"ENG":"Language","FRA":"Code","JPN":"言語"}[cL],h2:{"ENG":"Code","FRA":"langue","JPN":"コード"}[cL],h3:"",de:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],dv:l.eSV("*LANGUAGE"),ia:["FE"]},F3:{nm:"VF_ELURLX",ft:"VC",ln:2048,dc:0,lb:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],h1:{"ENG":"URL","FRA":"Extended","JPN":"Extended"}[cL],h2:{"ENG":"","FRA":"URL","JPN":"URL"}[cL],
h3:"",de:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F5:{nm:"VF_ELOBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Identifier","FRA":"LANSA Object Na","JPN":"LANSA Object Na"}[cL],h1:"LANSA",h2:"Object",h3:{"ENG":"Identifier","FRA":"Name","JPN":"Name"}[cL],de:{"ENG":"LANSA Object Identifier","FRA":"LANSA Object Name","JPN":"LANSA Object Name"}[cL],dv:"",ia:["FE"]
},F6:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F7:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F8:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",
h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F9:{nm:"VF_ELPUVA",ft:"NV",ln:4096,dc:0,lb:"Unicode propert",h1:"Unicode",h2:"property",h3:"Value",de:"Unicode property Value",dv:"",ia:["FE"]},F10:{nm:"VF_ELXU01",ft:"N",ln:4096,dc:0,lb:"Field Value",h1:"Field Value",h2:"",h3:"",de:{"ENG":"Unicode Field Value","FRA":"Field Value","JPN":"Field Value"}[cL],dv:"",ia:["FE"]},F11:{nm:"SERIALOPERATION",ft:"A",ln:1,dc:0,lb:"SerialOperation",h1:"SerialOperation",h2:"",
h3:"",de:"SerialOperation",dv:""},F12:{nm:"SERIALOBJECTCLASS",ft:"A",ln:10,dc:0,lb:"Identifier",h1:"LANSA",h2:"Object",h3:"Identifier",de:"LANSA Object Identifier",dv:"",ia:["FE"]},F13:{nm:"SERIALPTYNUMBER",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F14:{nm:"SERIALINSTANCE",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:0,ia:["FE","RB"]},F15:{
nm:"SERIALVALUE",ft:"NV",ln:4096,dc:0,lb:"SerialValue",h1:"SerialValue",h2:"",h3:"",de:"SerialValue",dv:""},F16:{nm:"SERIALDEFAULTACCESS",ft:"A",ln:1,dc:0,lb:"SerialDefaultAccess",h1:"SerialDefaultAccess",h2:"",h3:"",de:"SerialDefaultAccess",dv:""},F17:{nm:"USETRACEMODE",ft:"B",ln:1,dc:0,lb:"UseTraceMode",h1:"UseTraceMode",h2:"",h3:"",de:"UseTraceMode",dv:false},F18:{nm:"VF_ELUSET",ft:"A",ln:10,dc:0,lb:"User Set",h1:"User",h2:"Set",h3:"",de:"User Set",dv:"",ia:["FE"]},F19:{nm:"VF_ELPTYN",ft:"A",ln:32,
dc:0,lb:"Property Name",h1:"Property",h2:"Name",h3:"",de:"Property Name",dv:"",ia:["FE"]},F20:{nm:"VF_ELNUM",ft:"P",ln:7,dc:0,ec:"K",lb:{"ENG":"Number","FRA":"?","JPN":"Standard Number"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":"?","JPN":"Number"}[cL],h3:"",de:{"ENG":"Standard Number","FRA":"?","JPN":"Standard Number"}[cL],dv:0,ia:["RB","FE"]},F21:{nm:"VF_ELAVAL",ft:"A",ln:132,dc:0,ks:"O",lb:"Alpha Persitent",h1:"Alpha",h2:"Persitent",h3:"Property",de:"Alpha Persitent Property",
dv:"",ia:["FE","LC"]},F22:{nm:"VF_ELNUMX",ft:"S",ln:30,dc:9,ec:"4",lb:"Maximum Number",h1:"Maximum",h2:"Number",h3:"",de:"Maximum Number",dv:0,ia:["RB","FE"]},F23:{nm:"STREAMLISTENTRYCOUNT",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:0,ia:["FE","RB"]},F24:{nm:"VF_ELTRCS",ft:"A",ln:1,dc:0,lb:"Trace Source (C",h1:"Trace",h2:"Source",h3:"(Client",de:"Trace Source (Client / Server)",dv:"",ia:["FE"]},F25:{nm:"VF_ELTRCT",ft:"DT",ln:26,dc:0,
lb:"Trace Time",h1:"Trace",h2:"Time",h3:"",de:"Trace Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","DUTC"]},F26:{nm:"VF_ELTRCN",ft:"VC",ln:256,dc:0,lb:"Trace Component",h1:"Trace",h2:"Component",h3:"Name",de:"Trace Component Name",dv:"",ia:["FE"]},F27:{nm:"VF_ELTRCE",ft:"NV",ln:2048,dc:0,lb:"Trace Event Tex",h1:"Trace",h2:"Event",h3:"Text",de:"Trace Event Text",dv:"",ia:["FE","LC"]},F28:{nm:"DATAISSYSTEMTRACE",ft:"A",ln:5,dc:0,lb:"Standard",h1:"Boolean",h2:" ",h3:" ",de:"Standard Boolean",dv:"",ia:["FE"]
}};var cO=l.rC(oI,{an:"VF_SY001A",fd:Fd,mt:{RouteServerTracetoLocalTrace:{},Abort:{ps:{"ErrorMessageText":{pt:"i"}}},Alert:{ps:{"Text":{pt:"i"}}},ClearSerialList:{},Random:{ps:{"Maximum":{pt:"i"}}},SaveSerialList:{ps:{"FrameworkIdentifier":{pt:"i"},"ForLanguageCode":{pt:"i"},"FileSuffix":{pt:"i"},"ReturnCode":{pt:"o"}}},RestoreSerialList:{ps:{"FrameworkIdentifier":{pt:"i"},"ForLanguageCode":{pt:"i"},"FileSuffix":{pt:"i"},"ReturnCode":{pt:"o"}}},CreateVersionStamp:{ps:{"VisibleDescriptor":{pt:"i"}
}},BeginObject:{ps:{"Class":{pt:"i"},"GUID":{pt:"i"},"DefaultAccess":{pt:"i"}}},EndObject:{ps:{"Class":{pt:"i"},"GUID":{pt:"i"}}},AddProperty:{ps:{"PtyNumber":{pt:"i"},"Instance":{pt:"i"},"Value":{pt:"i"}}},AddDirect:{ps:{"Operation":{pt:"i"},"Class":{pt:"i"},"Number":{pt:"i"},"Instance":{pt:"i"},"Value":{pt:"i"},"DefaultAccess":{pt:"i"}}},ConvertSerialStreamtoObjects:{ps:{"uRootVF_FP001OReference":{pt:"i"},"uRootVF_FP501OReference":{pt:"i"}}},Decrypt:{ps:{"Key":{pt:"i"},"InHexString":{pt:"i"}}},
Encrypt:{ps:{"Key":{pt:"i"},"InString":{pt:"i"}}},GenerateExchangeKey:{},ConvertToUTF8:{ps:{"Value":{pt:"i"}}},ConvertFromUTF8:{ps:{"Value":{pt:"i"}}},PackageDefaultCurrentExchangeKey:{},UnPackageDefaultCurrentExchangeKey:{ps:{"From":{pt:"i"}}},GetVFPPF07AlphaValue:{ps:{"UserPropertyset":{pt:"i"},"UserIdentifier":{pt:"i"},"ForLanguage":{pt:"i"},"PropertyName":{pt:"i"},"ValueLength":{pt:"i"},"UpperCaseValue":{pt:"i"},"DefaultValue":{pt:"i"},"PropertyInstance":{pt:"i"},"AlphaValue":{pt:"o"}}},GetVFPPF07NumericValue:
{ps:{"UserPropertyset":{pt:"i"},"UserIdentifier":{pt:"i"},"ForLanguage":{pt:"i"},"PropertyName":{pt:"i"},"DefaultValue":{pt:"i"},"PropertyInstance":{pt:"i"},"NumericValue":{pt:"o"}}}},co:function(){cO.aN.call(this);var f=this.aF("VF_SY001C",Fd);var C0=this.cA("UFRAMEWORK","VF_FP001O");var C1=this.cA("UCONFIGURATION","VF_FP501O");var C2=this.cA("USYSTEM","VF_SY001O");var C3=this.cF("STACKPOSITION",Fd.F1.Dc);var C4=this.cR("CURRENTVF_AC001OSTACK","PRIM_ACOL");this.cD("CURRENTVF_AC001O");this.cD("NEWVF_AC001O");
this.cD("USINGROOTVF_FP001OREFERENCE");this.cD("USINGROOTVF_FP501OREFERENCE");var C9=this.cR("VF_SY187OPARM","VF_SY187O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.aD();C3.iC();C4.setCollects("VF_AC001O");C4.iC();C9.iC();var li=this.aL("VF_SY001C");li.SERIALSTREAM=l.cLT({"SERIALOPERATION":f.F11,"SERIALOBJECTCLASS":f.F12,"SERIALPTYNUMBER":f.F13,"SERIALINSTANCE":f.F14,"SERIALVALUE":f.F15,"SERIALDEFAULTACCESS":f.F16},f.F23);
li.SERVERTRACEDETAILS=l.cLT({"VF_ELTRCS":f.F24,"VF_ELTRCT":f.F25,"VF_ELTRCN":f.F26,"VF_ELTRCE":f.F27,"DATAISSYSTEMTRACE":f.F28},null);}});cO.mthROUTESERVERTRACETOLOCALTRACE=function(){var li=this.LIST.VF_SY001C,f=this.FLD.VF_SY001C,r=l.mR(this,cO,"RouteServerTracetoLocalTrace",41);r.ln=41;{r.ln=43;if(this.REF.USYSTEMCOMMON.ref.getINAPPTRACEMODE()){r.ln=44;{var l1=li.SERVERTRACEDETAILS.selectList();while(l1.step()){r.ln=45;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(null,f.F26.get(),f.F27.get(),f.F24.get(),f.F25.get(),f.F28.get());
r.ln=46;}l1.end();}}r.ln=49;li.SERVERTRACEDETAILS.clearList();}r.ln=51;r.e();};cO.mthGET_WEBSERVERPARTDIREXECUTE=function(){var r=l.pR(this,cO,"Get_WebServerPartDirExecute",55);var P0=r.cP("PART_DIR_EXECUTE","PRIM_DC","UnicodeString");r.ln=55;{r.ln=57;P0.set("");}r.ln=59;return r.rV(P0.get());};cO.mthABORT=function(p0){var m=this.REF,r=l.mR(this,cO,"Abort",64);var P0=r.cPD("ERRORMESSAGETEXT");P0=p0;var C0=r.cD("C0");r.ln=64;{r.ln=69;m.USYSTEM.ref.mthZINT_ERRORREPORTING(P0.get());r.ln=72;C0.set("");
}r.ln=74;r.e();};cO.mthALERT=function(p0){var r=l.mR(this,cO,"Alert",79);var P0=r.cPD("TEXT");P0=p0;r.ln=79;{r.ln=80;l.WEB().mthALERT(P0.get());}r.ln=81;r.e();};cO.mthCLEARSERIALLIST=function(){var li=this.LIST.VF_SY001C,r=l.mR(this,cO,"ClearSerialList",86);r.ln=86;{r.ln=87;li.SERIALSTREAM.clearList();}r.ln=88;r.e();};cO.mthRANDOM=function(p0){var r=l.mR(this,cO,"Random",91);var P0=r.cPF("MAXIMUM",Fd.F1.Dc);var P1=r.cPF("RESULT",Fd.F1.Dc);P0.set(p0);r.ln=91;{r.ln=93;l.WEB().mthALERT("VF_SY001C: Random method is not available on this platform.");
}r.ln=95;return r.rV(P1.get());};cO.mthSAVESERIALLIST=function(p0,p1,p2,p3){var li=this.LIST.VF_SY001C,r=l.mR(this,cO,"SaveSerialList",100);var P0=r.cP("FRAMEWORKIDENTIFIER","PRIM_ALPH");var P1=r.cPF("FORLANGUAGECODE",Fd.F2.Dc);var P2=r.cPF("FILESUFFIX",Fd.F3.Dc);var P3=r.cPF("RETURNCODE",Fd.F4.Dc);P0.set(p0);P1.set(p1);P2.set(p2);var C0=r.cDR("RESTORESTREAM","VF_SW100O","PUTSERIALSTREAM");C0.iC();r.ln=100;{r.ln=105;P3.set("SE");r.ln=108;C0.mthEXECUTE({FLD:{"FILESUFFIX":P2.get(),"FRAMEWORKIDENTIFIER":P0.get(),"FORLANGUAGECODE":P1.get(),"REQUESTSERVERAPPTRACEMODE":this.REF.USYSTEMCOMMON.ref.getINAPPTRACEMODE(),"REQUESTSERVERSYSTRACEMODE":this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()},LIST:{"SERIALSTREAM":li.SERIALSTREAM}},{FLD:{"MAJORRETURNCODE":P3},LIST:{"SERVERTRACEDETAILS":li.SERVERTRACEDETAILS}});
r.ln=110;this.mthROUTESERVERTRACETOLOCALTRACE();p3.set(P3.get());}r.ln=112;r.e();};cO.mthRESTORESERIALLIST=function(p0,p1,p2,p3){var li=this.LIST.VF_SY001C,m=this.REF,r=l.mR(this,cO,"RestoreSerialList",117);var P0=r.cP("FRAMEWORKIDENTIFIER","PRIM_ALPH");var P1=r.cPF("FORLANGUAGECODE",Fd.F2.Dc);var P2=r.cPF("FILESUFFIX",Fd.F3.Dc);var P3=r.cPF("RETURNCODE",Fd.F4.Dc);P0.set(p0);P1.set(p1);P2.set(p2);var C0=r.cDR("RESTORESTREAM","VF_SW100O","GETSERIALSTREAM");C0.iC();r.ln=117;{r.ln=122;P3.set("SE");r.ln=126;
li.SERIALSTREAM.clearList();r.ln=128;C0.mthEXECUTE({FLD:{"FILESUFFIX":P2.get(),"FRAMEWORKIDENTIFIER":P0.get(),"FORLANGUAGECODE":P1.get(),"REQUESTSERVERAPPTRACEMODE":this.REF.USYSTEMCOMMON.ref.getINAPPTRACEMODE(),"REQUESTSERVERSYSTRACEMODE":this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()}},{FLD:{"MAJORRETURNCODE":P3},LIST:{"SERIALSTREAM":li.SERIALSTREAM,"SERVERTRACEDETAILS":li.SERVERTRACEDETAILS}});r.ln=130;this.mthROUTESERVERTRACETOLOCALTRACE();r.ln=134;this.mthCONVERTSERIALSTREAMTOOBJECTS(m.UFRAMEWORK.ref,m.UCONFIGURATION.ref);
p3.set(P3.get());}r.ln=136;r.e();};cO.mthCREATEVERSIONSTAMP=function(p0){var r=l.mR(this,cO,"CreateVersionStamp",141);var P0=r.cP("VISIBLEDESCRIPTOR","PRIM_DC","UnicodeString");P0.set(p0);r.ln=141;{r.ln=143;sr1.call(this,"D","",1,0,P0.get()," ");r.ln=145;sr1.call(this,"V","",1,0,l.cat(l.eSV("*YYYYMMDDC"),l.eSV("*TIMEC"))," ");}r.ln=146;r.e();};cO.mthBEGINOBJECT=function(p0,p1,p2){var r=l.mR(this,cO,"BeginObject",151);var P0=r.cPF("CLASS",Fd.F5.Dc);var P1=r.cPF("GUID",Fd.F6.Dc);var P2=r.cPF("DEFAULTACCESS",Fd.F7.Dc);
P0.set(p0);P1.set(p1);P2.set(p2);r.ln=151;{r.ln=153;sr1.call(this,"B",l.s.UpperCase(P0.get()),1,0,P1.get(),P2.get());}r.ln=154;r.e();};cO.mthENDOBJECT=function(p0,p1){var r=l.mR(this,cO,"EndObject",158);var P0=r.cPF("CLASS",Fd.F5.Dc);var P1=r.cPF("GUID",Fd.F6.Dc);P0.set(p0);P1.set(p1);r.ln=158;{r.ln=160;sr1.call(this,"E",l.s.UpperCase(P0.get()),1,0,P1.get()," ");}r.ln=162;r.e();};cO.mthADDPROPERTY=function(p0,p1,p2){var r=l.mR(this,cO,"AddProperty",166);var P0=r.cPF("PTYNUMBER",Fd.F8.Dc);var P1=r.cPF("INSTANCE",Fd.F1.Dc);
var P2=r.cPF("VALUE",Fd.F9.Dc);P0.set(p0);P1.set(p1);P2.set(p2);r.ln=166;{r.ln=168;sr1.call(this,"P","",P0.get(),P1.get(),P2.get()," ");}r.ln=169;r.e();};cO.mthADDDIRECT=function(p0,p1,p2,p3,p4,p5){var r=l.mR(this,cO,"AddDirect",173);var P0=r.cPF("OPERATION",Fd.F4.Dc);var P1=r.cPF("CLASS",Fd.F5.Dc);var P2=r.cPF("NUMBER",Fd.F8.Dc);var P3=r.cPF("INSTANCE",Fd.F1.Dc);var P4=r.cPF("VALUE",Fd.F10.Dc);var P5=r.cPF("DEFAULTACCESS",Fd.F7.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);
r.ln=173;{r.ln=175;sr1.call(this,P0.get(),P1.get(),P2.get(),P3.get(),P4.get(),P5.get());}r.ln=176;r.e();};function sr1(p0,p1,p2,p3,p4,p5){var li=this.LIST.VF_SY001C,f=this.FLD.VF_SY001C,r=l.sR(this,cO,"AddSerialEntry",180);f.F11.set(p0);f.F12.set(p1);f.F13.set(p2);f.F14.set(p3);f.F15.set(p4);f.F16.set(p5);r.ln=180;{r.ln=182;li.SERIALSTREAM.addEntry();}r.ln=184;r.e();};cO.mthCONVERTSERIALSTREAMTOOBJECTS=function(p0,p1){var li=this.LIST.VF_SY001C,m=this.REF,r=l.mR(this,cO,"ConvertSerialStreamtoObjects",187);
var P0=r.cPD("UROOTVF_FP001OREFERENCE");var P1=r.cPD("UROOTVF_FP501OREFERENCE");P0=p0;P1=p1;var C0=r.cR("CURRENTLYINSYSTRACEMODE","PRIM_BOLN");C0.iC();r.ln=187;{r.ln=192;m.STACKPOSITION.set(1);r.ln=193;m.CURRENTVF_AC001OSTACK.set(m.STACKPOSITION.get(),null);r.ln=194;this.srUSINGROOTVF_FP001OREFERENCE(P0);r.ln=195;this.srUSINGROOTVF_FP501OREFERENCE(P1);r.ln=199;C0.set(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE());r.ln=201;{var l1=li.SERIALSTREAM.selectList();while(l1.step()){r.ln=203;sr2.call(this,C0.get());
r.ln=205;}l1.end();}r.ln=209;this.srNEWVF_AC001O(null);r.ln=210;this.srCURRENTVF_AC001O(null);r.ln=211;m.CURRENTVF_AC001OSTACK.mthREMOVEALL();r.ln=212;li.SERIALSTREAM.clearList();r.ln=213;this.srUSINGROOTVF_FP001OREFERENCE(null);r.ln=214;this.srUSINGROOTVF_FP501OREFERENCE(null);}r.ln=217;r.e();};function sr2(p0){var f=this.FLD.VF_SY001C,m=this.REF,r=l.sR(this,cO,"ConvertSerialListEntry",221);f.F17.set(p0);r.ln=221;{r.ln=225;{var v1=f.F11.get();if(r.ln=228,l.s.eq(v1," ")){}else if(r.ln=232,l.s.eq(v1,"P"))
{r.ln=234;m.USYSTEM.ref.setPROPERTYLOADCOUNT(l.add(m.USYSTEM.ref.getPROPERTYLOADCOUNT(),1));r.ln=236;if((m.CURRENTVF_AC001O!=null)){r.ln=238;m.VF_SY187OPARM.setPROPERTYNUMBER(f.F13.get());r.ln=239;m.VF_SY187OPARM.setINSTANCE(f.F14.get());r.ln=240;m.VF_SY187OPARM.setVALUE(f.F15.get());r.ln=242;m.CURRENTVF_AC001O.mthZINT_SETPROPERTY(m.VF_SY187OPARM);}else{r.ln=246;if(f.F17.get()){r.ln=247;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add(l.cat(l.cat(l.cat(l.cat("*** Failed to set property number=",l.n.AsString(f.F13.get())),",inst="),l.n.AsString(f.F14.get())),",value="),f.F15.get()),u,u,true);
}}}else if(r.ln=253,l.s.eq(v1,"B")){r.ln=255;m.USYSTEM.ref.setOBJECTLOADCOUNT(l.add(m.USYSTEM.ref.getOBJECTLOADCOUNT(),1));r.ln=264;{var v2=f.F12.get();if(r.ln=266,l.s.eq(v2,"VF_FP001O")){r.ln=267;this.srNEWVF_AC001O(m.USINGROOTVF_FP001OREFERENCE);}else if(r.ln=269,l.s.eq(v2,"VF_FP002O")){r.ln=270;m.USYSTEM.ref.setAPPLICATIONLOADCOUNT(l.add(m.USYSTEM.ref.getAPPLICATIONLOADCOUNT(),1));}else if(r.ln=272,l.s.eq(v2,"VF_FR003O")){r.ln=273;m.USYSTEM.ref.setBUSINESSOBJECTLOADCOUNT(l.add(m.USYSTEM.ref.getBUSINESSOBJECTLOADCOUNT(),1));
}else if(r.ln=275,l.s.eq(v2,"VF_FP501O")){r.ln=276;this.srNEWVF_AC001O(m.USINGROOTVF_FP501OREFERENCE);}else if(r.ln=278,l.s.eq(v2,"VF_FP005O")){}else{r.ln=282;this.srNEWVF_AC001O(l.cFr(f.F12.get(),"VF_AC001O"));}r.ln=283;}r.ln=287;m.NEWVF_AC001O.mthZINT_CREATEINSTANCE(l.s.AsNativeString(f.F15.get()));r.ln=289;m.USYSTEM.ref.getMASTERVF_AC001COLLECTION().set(l.s.AsNativeString(f.F15.get()),m.NEWVF_AC001O);r.ln=292;if((m.CURRENTVF_AC001O!=null)){r.ln=293;m.CURRENTVF_AC001O.mthZINT_ENROLLCHILD(m.NEWVF_AC001O);
}r.ln=296;this.srCURRENTVF_AC001O(m.NEWVF_AC001O);r.ln=297;m.STACKPOSITION.set(l.add(m.STACKPOSITION.get(),1));r.ln=298;m.CURRENTVF_AC001OSTACK.set(m.STACKPOSITION.get(),m.CURRENTVF_AC001O);}else if(r.ln=302,l.s.eq(v1,"E")){r.ln=306;if((m.CURRENTVF_AC001O==null)){r.ln=308;l.WEB().mthALERT(l.add(l.cat(l.cat("*** Unable to end class=",f.F12.get())," with GUID="),f.F15.get()));}else{r.ln=312;if(l.ne(m.CURRENTVF_AC001O.getUIDENTIFIER(),f.F15.get())){r.ln=314;l.WEB().mthALERT(l.add(l.cat(l.cat("*** Incorrectly matched ending for class=",f.F12.get())," with GUID="),f.F15.get()));
}r.ln=318;m.USYSTEM.ref.getMASTERVF_AC001COLLECTIONBYUSEROBJECTTYPE().set(m.CURRENTVF_AC001O.getUUSEROBJECTTYPE(),m.CURRENTVF_AC001O);r.ln=320;if(l.Io(m.CURRENTVF_AC001O,"VF_FR003O")){r.ln=321;m.USYSTEM.ref.getMASTERVF_FR003OCOLLECTIONBYUSEROBJECTTYPE().set(m.CURRENTVF_AC001O.getUUSEROBJECTTYPE(),l.cast(m.CURRENTVF_AC001O,"VF_FR003O"));}r.ln=326;m.STACKPOSITION.set(l.sub(m.STACKPOSITION.get(),1));r.ln=327;this.srCURRENTVF_AC001O(m.CURRENTVF_AC001OSTACK.get(m.STACKPOSITION.get()));}}else if(r.ln=332,l.s.eq(v1,"V"))
{r.ln=334;if(f.F17.get()){r.ln=335;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Version stamp=",f.F15.get()),u,u,true);}}else if(r.ln=339,l.s.eq(v1,"D")){r.ln=341;if(f.F17.get()){r.ln=342;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Descriptor=",f.F15.get()),u,u,true);}}else{r.ln=347;if(f.F17.get()){r.ln=348;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("*** Unknown serial operation=",f.F11.get()),u,u,true);}}r.ln=351;}}r.ln=354;r.e();};cO.mthDECRYPT=function(p0,p1){var r=l.mR(this,cO,"Decrypt",359);
var P0=r.cPF("KEY",Fd.F6.Dc);var P1=r.cP("INHEXSTRING","PRIM_ALPH");var P2=r.cP("OUTSTRING","PRIM_DC","UnicodeString");P0.set(p0);P1.set(p1);r.ln=359;{r.ln=361;P2.set(l.s.Decrypt(P1.get(),P0.get()));}r.ln=363;return r.rV(P2.get());};cO.mthENCRYPT=function(p0,p1){var r=l.mR(this,cO,"Encrypt",368);var P0=r.cPF("KEY",Fd.F6.Dc);var P1=r.cP("INSTRING","PRIM_DC","UnicodeString");var P2=r.cP("OUTHEXSTRING","PRIM_ALPH");P0.set(p0);P1.set(p1);r.ln=368;{r.ln=370;P1.set(this.REF.USYSTEMCOMMON.ref.mthPADTOMULTIPLEOF8(P1.get()," "));
r.ln=372;P2.set(l.s.Encrypt(P1.get(),P0.get()));}r.ln=374;return r.rV(P2.get());};cO.mthGENERATEEXCHANGEKEY=function(){var r=l.mR(this,cO,"GenerateExchangeKey",376);var P0=r.cPF("RESULT",Fd.F6.Dc);r.ln=376;{r.ln=378;l.WEB().mthALERT("VF_SY001C: GenerateExchangeKey method is not available on this platform.");}r.ln=380;return r.rV(P0.get());};cO.mthCONVERTTOUTF8=function(p0){var r=l.mR(this,cO,"ConvertToUTF8",383);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cP("RESULT","PRIM_ALPH");P0.set(p0);
r.ln=383;{r.ln=385;P1.set(P0.get());}r.ln=387;return r.rV(P1.get());};cO.mthCONVERTFROMUTF8=function(p0){var r=l.mR(this,cO,"ConvertFromUTF8",390);var P0=r.cP("VALUE","PRIM_ALPH");var P1=r.cP("RESULT","PRIM_DC","UnicodeString");P0.set(p0);r.ln=390;{r.ln=392;P1.set(P0.get());}r.ln=394;return r.rV(P1.get());};cO.mthPACKAGEDEFAULTCURRENTEXCHANGEKEY=function(){var r=l.mR(this,cO,"PackageDefaultCurrentExchangeKey",397);var P0=r.cP("RESULT","PRIM_ALPH");r.ln=397;{r.ln=399;l.WEB().mthALERT("VF_SY001C: PackageDefaultCurrentExchangeKey method is not available on this platform.");
}r.ln=401;return r.rV(P0.get());};cO.mthUNPACKAGEDEFAULTCURRENTEXCHANGEKEY=function(p0){var r=l.mR(this,cO,"UnPackageDefaultCurrentExchangeKey",404);var P0=r.cP("FROM","PRIM_ALPH");P0.set(p0);var C0=r.cR("PSTRING","PRIM_ALPH");var C1=r.cF("P",Fd.F1.Dc);var C2=r.cR("TEMPDATA","PRIM_ALPH");C0.iC();C1.iC();C2.iC();r.ln=404;{r.ln=409;C2.set(this.mthDECRYPT(this.REF.USYSTEMCOMMON.ref.mthGETPLATFORMINFORMATION(),P0.get()));r.ln=411;C0.set(l.cat(C0.get(),l.s.Substring(C2.get(),9,1)));r.ln=412;C0.set(l.cat(C0.get(),l.s.Substring(C2.get(),5,1)));
r.ln=413;C1.set(l.s.AsNumber(C0.get()));r.ln=415;this.REF.USYSTEMCOMMON.ref.setDEFAULTCURRENTEXCHANGEKEY(l.s.Substring(C2.get(),C1.get(),32));r.ln=417;C2.set("");}r.ln=419;r.e();};cO.mthGETVFPPF07ALPHAVALUE=function(p0,p1,p2,p3,p4,p5,p6,p7,p8){var r=l.mR(this,cO,"GetVFPPF07AlphaValue",421);var P0=r.cPF("USERPROPERTYSET",Fd.F18.Dc);var P1=r.cPF("USERIDENTIFIER",Fd.F6.Dc);var P2=r.cPF("FORLANGUAGE",Fd.F2.Dc);var P3=r.cPF("PROPERTYNAME",Fd.F19.Dc);var P4=r.cPF("VALUELENGTH",Fd.F20.Dc);var P5=r.cP("UPPERCASEVALUE","PRIM_BOLN");
var P6=r.cPF("DEFAULTVALUE",Fd.F21.Dc);var P7=r.cPF("PROPERTYINSTANCE",Fd.F20.Dc);var P8=r.cPF("ALPHAVALUE",Fd.F21.Dc);P0.set(p0);P1.set(p1);P2.set((p2===u)?("ALL"):(p2));P3.set(p3);P4.set((p4===u)?(0):(p4));P5.set((p5===u)?("TRUE"):(p5));P6.set(p6);P7.set((p7===u)?(1):(p7));r.ln=421;{p8.set(P8.get());r.e();return;p8.set(P8.get());}r.ln=425;};cO.mthGETVFPPF07NUMERICVALUE=function(p0,p1,p2,p3,p4,p5,p6){var r=l.mR(this,cO,"GetVFPPF07NumericValue",427);var P0=r.cPF("USERPROPERTYSET",Fd.F18.Dc);var P1=r.cPF("USERIDENTIFIER",Fd.F6.Dc);
var P2=r.cPF("FORLANGUAGE",Fd.F2.Dc);var P3=r.cPF("PROPERTYNAME",Fd.F19.Dc);var P4=r.cPF("DEFAULTVALUE",Fd.F22.Dc);var P5=r.cPF("PROPERTYINSTANCE",Fd.F20.Dc);var P6=r.cPF("NUMERICVALUE",Fd.F22.Dc);P0.set(p0);P1.set(p1);P2.set((p2===u)?("ALL"):(p2));P3.set(p3);P4.set(p4);P5.set((p5===u)?(1):(p5));r.ln=427;{p6.set(P6.get());r.e();return;p6.set(P6.get());}r.ln=431;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);
};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELLANG"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELURLX"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELOBJ"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});
}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"VF_ELPUVA"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"VF_ELXU01"});}{Fd.F18.Dc=function(){this.aN.call(this,Fd.F18);};l.cFC({co:Fd.F18.Dc,an:"PRIM_FLD",fn:"VF_ELUSET"});}{Fd.F19.Dc=function(){this.aN.call(this,Fd.F19);};l.cFC({co:Fd.F19.Dc,an:"PRIM_FLD",fn:"VF_ELPTYN"});
}{Fd.F20.Dc=function(){this.aN.call(this,Fd.F20);};l.cFC({co:Fd.F20.Dc,an:"PRIM_FLD",fn:"VF_ELNUM"});}{Fd.F21.Dc=function(){this.aN.call(this,Fd.F21);};l.cFC({co:Fd.F21.Dc,an:"PRIM_FLD",fn:"VF_ELAVAL"});}{Fd.F22.Dc=function(){this.aN.call(this,Fd.F22);};l.cFC({co:Fd.F22.Dc,an:"PRIM_FLD",fn:"VF_ELNUMX"});}cO.srCURRENTVF_AC001O=function(rn){this.sR("CURRENTVF_AC001O",rn);};cO.srNEWVF_AC001O=function(rn){this.sR("NEWVF_AC001O",rn);};cO.srUSINGROOTVF_FP001OREFERENCE=function(rn){this.sR("USINGROOTVF_FP001OREFERENCE",rn);
};cO.srUSINGROOTVF_FP501OREFERENCE=function(rn){this.sR("USINGROOTVF_FP501OREFERENCE",rn);};},{rc:["VF_SY001A","VF_FP001O","VF_FP501O","VF_SY001O","VF_SY187O"],rp:["PRIM_FLD","PRIM_ACOL","PRIM_WEB.DataRequest"],dc:["VF_AC001O","VF_FP501O"],dp:["PRIM_ALPH","PRIM_BOLN"]});