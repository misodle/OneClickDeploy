﻿LANSA.addComponent({id:"VF_UI019O",ot:"rp",tp:"Reusable Part",de:"\\OC=Tool bar",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELOBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Identifier","FRA":"LANSA Object Na","JPN":"LANSA Object Na"}[cL],h1:"LANSA",h2:"Object",h3:{"ENG":"Identifier","FRA":"Name","JPN":"Name"}[cL],de:{"ENG":"LANSA Object Identifier","FRA":"LANSA Object Name","JPN":"LANSA Object Name"}[cL],dv:"",ia:["FE"]},F2:{nm:"STD_INT",ft:"I",
ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELSYMN",an:"VF_ELSYMNAME",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]},F4:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",
dv:"",ia:["FE"]},F5:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{zInt_SetMaterialStyles:{},zInt_Initialize:{ps:{"TabFolderStyle":{pt:"i"},"UseLogicalContainerPanel":{pt:"i"},"ClipboardKey":{pt:"i"},
"ForCommands":{pt:"i"},"ReflectEnabledinVisibility":{pt:"i"},"SendCommandstoAc005Overflow":{pt:"i"},"SendOverFlowtoAC005Overflow":{pt:"i"},"ContainerVF_AC005O":{pt:"i"}}},zInt_Terminate:{},zInt_AddItem:{ps:{"UseImageName":{pt:"i"},"UseImageSource":{pt:"i"},"Hint":{pt:"i"},"Caption":{pt:"i"},"Reference":{pt:"i"},"Enabled":{pt:"i"},"UseTabFolderStyle":{pt:"i"},"Reference2":{pt:"i"}}},zInt_SelectItem:{ps:{"MenuItem":{pt:"i"}}},zInt_EnterItem:{ps:{"MenuItem":{pt:"i"}}},zInt_SetSelectedState:{ps:{"Reference":
{pt:"i"},"To":{pt:"i"}}},zInt_SetEnabledState:{ps:{"Reference":{pt:"i"},"To":{pt:"i"}}},zInt_EnsureItemVisible:{ps:{"MenuItem":{pt:"i"}}},zInt_EnumerateVisibleItems:{},zInt_ChangeTabOrder:{ps:{"uIdentifier1":{pt:"i"},"uDisplayPosition":{pt:"i"}}},zInt_SortTabs:{ps:{"ForceDefaultSort":{pt:"i"}}},zInt_SaveTabOrder:{},zInt_RestoreTabOrder:{},zInt_isPhysicallyVisible:{ps:{"MenuItem":{pt:"i"}}},zInt_CurrentViewingStripRequiredWidth:{},zInt_DestroyOverflowMenu:{ps:{"SignalClosed":{pt:"i"}}},zInt_HandleOverflowMenuEvent:
{ps:{"EventName":{pt:"i"},"AssociatedReference":{pt:"i"},"AssociatedReference2":{pt:"i"}}}},ev:{OverflowMenuDisplayed:{},OverflowMenuClosed:{},ObjectSelected:{ps:{"Reference":{pt:"i"},"Reference2":{pt:"i"}}},ObjectEntered:{ps:{"Reference":{pt:"i"},"Reference2":{pt:"i"}}},TabFound:{ps:{"Reference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI019O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEMVIEWPORT","PRIM_ATLI");var C2=this.cR("ATTACHITEMMOREITEMS","PRIM_ATLI");
var C3=this.cR("ITEMSVIEWINGPORT","PRIM_PANL");var C4=this.cR("MOREITEMSIMAGE","VF_UI005O");var C5=this.cR("CHEVRONLEFT","VF_UI005O");var C6=this.cR("CHEVRONRIGHT","VF_UI005O");var C7=this.cR("ITEMSVIEWINGSTRIP","PRIM_PANL");var C8=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C9=this.cR("BORDERTOP","PRIM_VS","Style");var C10=this.cR("BORDERLEFTRIGHT","PRIM_VS","Style");var C11=this.cA("USYSTEM","VF_SY001O");var C12=this.cA("USYSTEMCOMMON","VF_SY001X");var C13=this.cF("USEATTACHMENTFLOW",Fd.F1.Dc);
var C14=this.cR("USETEXTFORMAT","PRIM_BOLN");var C15=this.cR("COLLECTVF_UI028O","PRIM_SACO");var C16=this.cR("LAYOUTCHECKTIMER","PRIM_TIMR");var C17=this.cR("ENSURESELECTEDVISIBLETIMER","PRIM_TIMR");var C18=this.cF("LAYOUTCHECK_REQUESTEDITEM",Fd.F2.Dc);var C19=this.cF("LAYOUTCHECK_LOWESTENABLEDINDEX",Fd.F2.Dc);var C20=this.cF("LAYOUTCHECK_HIGHESTENABLEDINDEX",Fd.F2.Dc);this.cD("OVERFLOWPOPUPMENU");this.cD("LOGICALCONTAINERPANEL");var C23=this.cR("USINGTABFOLDERSTYLE","PRIM_BOLN");var C24=this.cR("USAVEDTABSORTLOADED","PRIM_BOLN");
var C25=this.cR("UCLIPBOARDKEY","PRIM_ALPH");var C26=this.cR("FIXEDWIDTHITEMSONSHOW","PRIM_ACOL");var C27=this.cR("MATERIALBACKGROUND","PRIM_VS","Style");var C28=this.cR("THEME200","PRIM_VS","SolidBrush");var C29=this.cR("MATERIALMOUSEOVERSTYLE","PRIM_VS","Style");this.cD("LISTENINGTOVF_AC005O");var C31=this.cR("USEREFLECTENABLEDINVISIBILITY","PRIM_BOLN");var C32=this.cR("USEAC005OVERFLOWFORCOMMANDS","PRIM_BOLN");var C33=this.cR("USEAC005OVERFLOWFOROVERFLOW","PRIM_BOLN");var C34=this.cR("ALLOWTABSORTING","PRIM_BOLN");
var C35=this.cR("USEMATERIALSTYLETABS","PRIM_BOLN");var C36=this.cR("TITLEBARBACKCOLOR_ATFRONT","PRIM_ALPH");var C37=this.cR("TITLEBARTEXTCOLOR_ATFRONT","PRIM_ALPH");var C38=this.cR("TITLEBARBACKCOLOR_ATREAR","PRIM_ALPH");var C39=this.cR("TITLEBARTEXTCOLOR_ATREAR","PRIM_ALPH");C0.iC();C1.setManage(C3);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setParent(C0);C2.setAttachment("RIGHT");C2.setManage(C4);C2.setMarginTop(4);C2.iC();C3.setParent(this);C3.setDisplayPosition(4);C3.setTabPosition(4);
C3.setHeight(32);C3.setLeft(0);C3.setTop(0);C3.setWidth(468);C3.iC();C4.setParent(this);C4.setHeight(28);C4.setLeft(468);C4.setTop(4);C4.setWidth(32);C4.setDisplayPosition(3);C4.setTabPosition(3);C4.iC();C5.setParent(this);C5.setHeight(28);C5.setLeft(468);C5.setTop(4);C5.setWidth(32);C5.setDisplayPosition(2);C5.setTabPosition(2);C5.iC();C6.setParent(this);C6.setHeight(28);C6.setLeft(468);C6.setTop(4);C6.setWidth(32);C6.iC();C7.setParent(C3);C7.setDisplayPosition(1);C7.setTabPosition(1);C7.setHeight(32);
C7.setLeft(0);C7.setTop(0);C7.setWidth(468);C7.iC();C8.setBorderBottom(1);C8.iC();C9.setBorderTop(1);C9.iC();C10.setBorderLeft(1);C10.setBorderRight(1);C10.iC();if((C11!=null)&&(C11.iI()==false)){C11.iC();}if((C12!=null)&&(C12.iI()==false)){C12.iC();}C13.aD();C13.iC();C14.iC();C15.setCollects("VF_UI028O");C15.iC();C16.setInterval(0);C16.iC();C17.setInterval(0);C17.iC();C18.aD();C18.iC();C19.aD();C19.iC();C20.aD();C20.iC();C23.iC();C24.iC();C25.iC();C26.setCollects("VF_UI028O");C26.iC();C27.setNormBackColor("RED");
C27.iC();C28.setColor("THEME200");C28.iC();C29.setBackgroundBrush(C28);C29.iC();C31.iC();C32.iC();C33.iC();C34.iC();C35.iC();C36.iC();C37.iC();C38.iC();C39.iC();C4.aH("WASCLICKED",this,e6);C5.aH("WASCLICKED",this,e11);C6.aH("WASCLICKED",this,e12);C15.aH("WASCLICKED",this,e1);C15.aH("MOUSEENTER",this,e2);C15.aH("COMPARE",this,e8);C15.aH("UDISPLAYPOSITIONCHANGED",this,e9);C16.aH("TICK",this,e10);C17.aH("TICK",this,e3);this.setDisplayPosition(1);this.setHeight(32);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(500);this.setLayoutManager(C0);}});cO.mthZINT_SETMATERIALSTYLES=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SetMaterialStyles",92);var C0=r.cR("ATFRONT","PRIM_BOLN");C0.iC();r.ln=92;{r.ln=96;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=98;if((m.LISTENINGTOVF_AC005O!=null)){r.ln=99;C0.set(m.LISTENINGTOVF_AC005O.getISATFRONT());}else{r.ln=101;C0.set(true);}r.ln=104;m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR().mthZINT_GETAPPROPRIATECOMMANDBARCOLORS(m.TITLEBARBACKCOLOR_ATFRONT,m.TITLEBARBACKCOLOR_ATREAR,m.TITLEBARTEXTCOLOR_ATFRONT,m.TITLEBARTEXTCOLOR_ATREAR);
r.ln=106;if(l.tB(C0.get())){r.ln=107;m.MATERIALBACKGROUND.setNormBackColor(m.TITLEBARBACKCOLOR_ATFRONT.get());}else{r.ln=109;m.MATERIALBACKGROUND.setNormBackColor(m.TITLEBARBACKCOLOR_ATREAR.get());}r.ln=112;this.getStyles().mthREMOVE(m.MATERIALBACKGROUND);r.ln=113;this.getStyles().mthADD(m.MATERIALBACKGROUND);r.ln=115;m.CHEVRONLEFT.mthZINT_CHANGEBACKGROUNDCOLOR(m.MATERIALBACKGROUND.getNormBackColor());r.ln=116;m.CHEVRONLEFT.setUSEREVERSELIGHTANDDARK(C0.get());r.ln=118;m.CHEVRONRIGHT.mthZINT_CHANGEBACKGROUNDCOLOR(m.MATERIALBACKGROUND.getNormBackColor());
r.ln=119;m.CHEVRONRIGHT.setUSEREVERSELIGHTANDDARK(C0.get());}}r.ln=124;r.e();};cO.mthZINT_INITIALIZE=function(p0,p1,p2,p3,p4,p5,p6,p7){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",128);var P0=r.cP("TABFOLDERSTYLE","PRIM_BOLN");var P1=r.cPD("USELOGICALCONTAINERPANEL");var P2=r.cP("CLIPBOARDKEY","PRIM_ALPH");var P3=r.cP("FORCOMMANDS","PRIM_BOLN");var P4=r.cP("REFLECTENABLEDINVISIBILITY","PRIM_BOLN");var P5=r.cP("SENDCOMMANDSTOAC005OVERFLOW","PRIM_BOLN");var P6=r.cP("SENDOVERFLOWTOAC005OVERFLOW","PRIM_BOLN");
var P7=r.cPD("CONTAINERVF_AC005O");P0.set(p0);P1=p1;P2.set((p2===u)?(" "):(p2));P3.set((p3===u)?(false):(p3));P4.set((p4===u)?(false):(p4));P5.set(p5);P6.set(p6);P7=p7;var C0=r.cF("USEMARGIN",Fd.F2.Dc);C0.iC();r.ln=128;{r.ln=140;this.srLOGICALCONTAINERPANEL(P1);r.ln=142;m.USEAC005OVERFLOWFORCOMMANDS.set(P5.get());r.ln=143;m.USEAC005OVERFLOWFOROVERFLOW.set(P6.get());r.ln=146;m.ALLOWTABSORTING.set((l.n.gt(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_MEDIUM())&&P3.get()));r.ln=148;this.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT());
r.ln=150;m.USINGTABFOLDERSTYLE.set(P0.get());r.ln=152;m.USEMATERIALSTYLETABS.set(l.and(m.USYSTEM.ref.getUIMATERIALDESIGN(),m.USINGTABFOLDERSTYLE.get()));r.ln=154;m.USEREFLECTENABLEDINVISIBILITY.set(P4.get());r.ln=156;m.BORDERBOTTOM.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=158;m.LAYOUTCHECKTIMER.setInterval(0);r.ln=160;m.ITEMSVIEWINGSTRIP.setWidth(0);m.ITEMSVIEWINGSTRIP.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT());r.ln=162;m.USAVEDTABSORTLOADED.set(false);
r.ln=164;m.UCLIPBOARDKEY.set(P2.get());r.ln=167;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=168;m.MOREITEMSIMAGE.mthZINT_INTIALIZEIMAGE("SYM=MOREVERTICAL",u,m.USYSTEM.ref.getUMTXTVALUES("MOREOPTIONS"),"MEDIUM",false,u,u,u,u);}else{r.ln=170;m.MOREITEMSIMAGE.mthZINT_INTIALIZEIMAGE("SYM=MOREVERTICAL",u,m.USYSTEM.ref.getUMTXTVALUES("MOREOPTIONS"),"SMALL",false,u,u,u,u);}r.ln=173;m.MOREITEMSIMAGE.setWidth(m.MOREITEMSIMAGE.getIMAGEDIMENSION());r.ln=175;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=177;m.CHEVRONLEFT.mthZINT_INTIALIZEIMAGE("SYM=Chevron_Left",u,"","LARGE",true,u,m.TITLEBARBACKCOLOR_ATFRONT.get(),true,u);
r.ln=178;m.CHEVRONLEFT.setMouseOverStyle(m.MATERIALMOUSEOVERSTYLE);r.ln=180;m.CHEVRONRIGHT.mthZINT_INTIALIZEIMAGE("SYM=Chevron_Right",u,"","LARGE",true,u,m.TITLEBARBACKCOLOR_ATFRONT.get(),true,u);r.ln=181;m.CHEVRONLEFT.setMouseOverStyle(m.MATERIALMOUSEOVERSTYLE);}else{r.ln=185;C0.set(l.div(l.sub(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_IMAGEHEIGHT()),2));r.ln=187;m.ATTACHITEMMOREITEMS.setMarginBottom(C0.get());m.ATTACHITEMMOREITEMS.setMarginTop(C0.get());
}r.ln=191;m.CHEVRONLEFT.setVisible(false);m.CHEVRONRIGHT.setVisible(false);r.ln=194;m.MOREITEMSIMAGE.setVisible(false);r.ln=196;if(l.tB(P5.get())){r.ln=198;this.setVisible(false);}r.ln=202;if(l.tB(m.USINGTABFOLDERSTYLE.get())){r.ln=204;m.LAYOUTCHECKTIMER.setInterval(200);}r.ln=208;if((P7!=null)){r.ln=209;this.srLISTENINGTOVF_AC005O(P7);r.ln=210;m.LISTENINGTOVF_AC005O.setSIGNALATFRONTSTATUSCHANGE(true);r.ln=211;this.mthZINT_SETMATERIALSTYLES();}}r.ln=214;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",217);
r.ln=217;{r.ln=219;this.srLISTENINGTOVF_AC005O(null);r.ln=221;m.FIXEDWIDTHITEMSONSHOW.mthREMOVEALL();r.ln=223;this.srLOGICALCONTAINERPANEL(null);r.ln=225;m.LAYOUTCHECKTIMER.setInterval(0);r.ln=227;m.ENSURESELECTEDVISIBLETIMER.setInterval(0);r.ln=229;for(var l1=m.COLLECTVF_UI028O.cI();l1.step();){l1.item().mthZINT_TERMINATE()};r.ln=231;m.COLLECTVF_UI028O.mthREMOVEALL();r.ln=233;this.mthZINT_DESTROYOVERFLOWMENU(false);}r.ln=235;r.e();};cO.mthZINT_ADDITEM=function(p0,p1,p2,p3,p4,p5,p6,p7){var m=this.REF,r=l.mR(this,cO,"zInt_AddItem",238);
var P0=r.cPF("USEIMAGENAME",Fd.F3.Dc);var P1=r.cPF("USEIMAGESOURCE",Fd.F4.Dc);var P2=r.cP("HINT","PRIM_DC","UnicodeString");var P3=r.cP("CAPTION","PRIM_DC","UnicodeString");var P4=r.cPD("REFERENCE");var P5=r.cP("ENABLED","PRIM_BOLN");var P6=r.cP("USETABFOLDERSTYLE","PRIM_BOLN");var P7=r.cPD("REFERENCE2");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4=p4;P5.set(p5);P6.set(p6);P7=(p7===u)?(null):(p7);var C0=r.cD("C0");var C1=r.cD("C1");r.ln=238;{r.ln=252;C0=r.sR("C0",l.cC("VF_UI028O"));r.ln=255;C0.setUDISPLAYPOSITION(l.add(m.COLLECTVF_UI028O.getItemCount(),1));
r.ln=257;m.COLLECTVF_UI028O.mthINSERT(C0);r.ln=259;C0.mthZINT_INITIALIZE(P3.get(),P2.get(),P0.get(),P1.get(),P4,P7,"","H",false,P5.get(),P6.get(),m.LISTENINGTOVF_AC005O,m.USEREFLECTENABLEDINVISIBILITY.get(),m.USEMATERIALSTYLETABS.get());r.ln=262;C0.setComponentTag(l.cat("ID_",l.n.AsString(m.COLLECTVF_UI028O.getItemCount())));r.ln=265;C0.setParent(m.ITEMSVIEWINGSTRIP);C0.setTop(0);C0.setLeft(m.ITEMSVIEWINGSTRIP.getWidth());C0.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT());r.ln=267;
if(l.tB(l.and(m.USINGTABFOLDERSTYLE.get(),l.b.Not(m.USEMATERIALSTYLETABS.get())))){r.ln=268;C0.getStyles().mthADD(m.BORDERBOTTOM);}r.ln=272;m.ITEMSVIEWINGSTRIP.setWidth(l.add(m.ITEMSVIEWINGSTRIP.getWidth(),C0.getWidth()));r.ln=274;this.setWidth(l.add(m.ITEMSVIEWINGSTRIP.getWidth(),m.MOREITEMSIMAGE.getWidth()));r.ln=276;if(l.tB(l.or(m.USEAC005OVERFLOWFORCOMMANDS.get(),m.USEAC005OVERFLOWFOROVERFLOW.get()))){r.ln=281;m.LISTENINGTOVF_AC005O.mthZINT_OVERFLOWMENUADDITEM(P3.get(),"VF_UM019O",P0.get(),P1.get(),P5.get(),C0,null,this,{set:function(rn){C0.setASSOCIATEDOVERFLOWMENUITEM(rn)}});
}}r.ln=285;r.e();};cO.mthZINT_SELECTITEM=function(p0){var r=l.mR(this,cO,"zInt_SelectItem",288);var P0=r.cPD("MENUITEM");P0=p0;r.ln=288;{r.ln=291;this.mthZINT_ENSUREITEMVISIBLE(P0);r.ln=293;{var eP=l.ePs();eP.cD("REFERENCE");eP.cD("REFERENCE2");eP.sR("REFERENCE",P0.getASSOCIATEDREFERENCE1());eP.sR("REFERENCE2",P0.getASSOCIATEDREFERENCE2());this.fE("OBJECTSELECTED",eP);eP.e();}}r.ln=295;r.e();};cO.mthZINT_ENTERITEM=function(p0){var r=l.mR(this,cO,"zInt_EnterItem",299);var P0=r.cPD("MENUITEM");P0=p0;
r.ln=299;{r.ln=302;{var eP=l.ePs();eP.cD("REFERENCE");eP.cD("REFERENCE2");eP.sR("REFERENCE",P0.getASSOCIATEDREFERENCE1());eP.sR("REFERENCE2",P0.getASSOCIATEDREFERENCE2());this.fE("OBJECTENTERED",eP);eP.e();}}r.ln=304;r.e();};function e1(MENUITEM,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectVF_UI028O<>.wasClicked",308);r.ln=308;{r.ln=310;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(MENUITEM.getUSINGCAPTION()," was clicked."),u,u,true);r.ln=312;this.mthZINT_SELECTITEM(MENUITEM);}r.ln=314;r.e();};function e2(MENUITEM,Ps)
{var r=l.eR(this,cO,"#CollectVF_UI028O<>.MouseEnter",317);r.ln=317;{r.ln=319;this.mthZINT_ENTERITEM(MENUITEM);}r.ln=321;r.e();};cO.mthZINT_SETSELECTEDSTATE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"zInt_SetSelectedState",325);var P0=r.cPD("REFERENCE");var P1=r.cP("TO","PRIM_BOLN");P0=p0;P1.set(p1);r.ln=325;{r.ln=329;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=330;if((MENUITEM.getASSOCIATEDREFERENCE1()===P0)){r.ln=332;MENUITEM.mthZINT_SETSELECTED(P1.get());
r.ln=334;if(l.tB(m.USINGTABFOLDERSTYLE.get())){r.ln=336;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=338;if(l.n.eq(m.LAYOUTCHECKTIMER.getInterval(),0)){r.ln=339;m.LAYOUTCHECKTIMER.setInterval(10);}}else{r.ln=344;if(l.tB(P1.get())){r.ln=345;MENUITEM.getStyles().mthREMOVE(m.BORDERBOTTOM);}else{r.ln=347;MENUITEM.getStyles().mthADD(m.BORDERBOTTOM);}}}r.ln=353;break;}r.ln=355;}l1.end();r.dR("MENUITEM");}}r.ln=357;r.e();};cO.mthZINT_SETENABLEDSTATE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"zInt_SetEnabledState",361);
var P0=r.cPD("REFERENCE");var P1=r.cP("TO","PRIM_BOLN");P0=p0;P1.set(p1);var C0=r.cR("WASVISIBLE","PRIM_BOLN");C0.iC();r.ln=361;{r.ln=367;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=368;if((MENUITEM.getASSOCIATEDREFERENCE1()===P0)){r.ln=370;C0.set(MENUITEM.getVisible());r.ln=372;MENUITEM.mthZINT_SETENABLED(P1.get());r.ln=374;if(l.tB(l.b.ne(MENUITEM.getVisible(),C0.get()))){r.ln=376;this.mthZINT_SORTTABS(true);r.ln=378;if((l.b.Not(m.USEAC005OVERFLOWFORCOMMANDS.get())&&l.n.eq(m.LAYOUTCHECKTIMER.getInterval(),0)))
{r.ln=379;m.LAYOUTCHECKTIMER.setInterval(10);}}r.ln=384;break;}r.ln=387;}l1.end();r.dR("MENUITEM");}}r.ln=389;r.e();};cO.mthZINT_ENSUREITEMVISIBLE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnsureItemVisible",392);var P0=r.cPD("MENUITEM");P0=p0;r.ln=392;{r.ln=395;if(P0.getVisible()){r.ln=397;if(l.b.Not(cO.mthZINT_ISPHYSICALLYVISIBLE.call(this,P0))){r.ln=399;m.ITEMSVIEWINGSTRIP.setLeft(l.sub(l.add(l.sub(0,P0.getLeft()),m.ITEMSVIEWINGPORT.getWidth()),P0.getWidth()));r.ln=401;if(l.n.gt(m.ITEMSVIEWINGSTRIP.getLeft(),0))
{r.ln=403;m.ITEMSVIEWINGSTRIP.setLeft(0);}}}}r.ln=411;r.e();};cO.mthZINT_ENUMERATEVISIBLEITEMS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_EnumerateVisibleItems",414);r.ln=414;{r.ln=416;if(l.tB(m.ALLOWTABSORTING.get())){r.ln=417;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=418;if(MENUITEM.getVisible()){r.ln=419;{var eP=l.ePs();eP.cD("REFERENCE");eP.sR("REFERENCE",MENUITEM);this.fE("TABFOUND",eP);eP.e();}}r.ln=421;}l1.end();r.dR("MENUITEM");}}}r.ln=424;
r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EnsureSelectedVisibleTimer.Tick",427);r.ln=427;{r.ln=429;m.ENSURESELECTEDVISIBLETIMER.setInterval(0);r.ln=431;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=432;if(l.tB(MENUITEM.getLOGICALLYSELECTED().get())){r.ln=433;this.mthZINT_ENSUREITEMVISIBLE(MENUITEM);l1.end();r.e();return;}r.ln=436;}l1.end();r.dR("MENUITEM");}}r.ln=438;r.e();};cO.mthZINT_CHANGETABORDER=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"zInt_ChangeTabOrder",442);
var P0=r.cPF("UIDENTIFIER1",Fd.F5.Dc);var P1=r.cPF("UDISPLAYPOSITION",Fd.F2.Dc);P0.set(p0);P1.set(p1);r.ln=442;{r.ln=446;if(l.tB(m.ALLOWTABSORTING.get())){r.ln=448;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=450;if(l.s.eq(MENUITEM.getComponentTag(),P0.get())){r.ln=452;MENUITEM.setUDISPLAYPOSITION(P1.get());r.ln=454;if(l.n.eq(m.ENSURESELECTEDVISIBLETIMER.getInterval(),0)){r.ln=455;m.ENSURESELECTEDVISIBLETIMER.setInterval(10);}r.ln=458;break;}r.ln=460;
}l1.end();r.dR("MENUITEM");}}}r.ln=463;r.e();};cO.mthZINT_SORTTABS=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SortTabs",467);var P0=r.cP("FORCEDEFAULTSORT","PRIM_BOLN");P0.set((p0===u)?(false):(p0));var C0=r.cF("NEXTLEFT",Fd.F2.Dc);C0.iC();r.ln=467;{r.ln=472;if(l.tB(m.ALLOWTABSORTING.get())){r.ln=475;if(l.b.Not(m.USAVEDTABSORTLOADED.get())){r.ln=477;this.mthZINT_RESTORETABORDER();r.ln=478;m.USAVEDTABSORTLOADED.set(true);}r.ln=481;C0.set(0);r.ln=484;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step())
{var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=485;if(MENUITEM.getVisible()){r.ln=487;MENUITEM.setLeft(C0.get());r.ln=489;C0.set(l.add(C0.get(),MENUITEM.getWidth()));}r.ln=491;}l1.end();r.dR("MENUITEM");}}}r.ln=495;r.e();};cO.mthZINT_SAVETABORDER=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SaveTabOrder",499);r.ln=499;{r.ln=501;if(l.tB(m.ALLOWTABSORTING.get())){r.ln=502;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=503;if(MENUITEM.getVisible()){r.ln=506;
m.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("CMDTAB",m.UCLIPBOARDKEY.get(),MENUITEM.getComponentTag(),"DISPLAYPOS",u,u,u,u,MENUITEM.getUDISPLAYPOSITION(),u);}r.ln=509;}l1.end();r.dR("MENUITEM");}}}r.ln=512;r.e();};cO.mthZINT_RESTORETABORDER=function(){var m=this.REF,r=l.mR(this,cO,"zInt_RestoreTabOrder",516);var C0=r.cF("DISPLAYPOS",Fd.F2.Dc);var C1=r.cR("TEMPCOLLECTVF_UI028O","PRIM_ACOL");C0.iC();C1.setCollects("VF_UI028O");C1.iC();r.ln=516;{r.ln=521;if(l.tB(m.ALLOWTABSORTING.get())){r.ln=524;C1.mthREMOVEALL();
r.ln=525;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=526;C1.mthINSERT(MENUITEM);r.ln=527;}l1.end();r.dR("MENUITEM");}r.ln=530;{var l1=C1.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=531;if(MENUITEM.getVisible()){r.ln=534;m.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("CMDTAB",m.UCLIPBOARDKEY.get(),MENUITEM.getComponentTag(),"DISPLAYPOS",u,u,u,u,C0,u,-9999);r.ln=537;if(l.n.ne(C0.get(),-9999)){r.ln=538;MENUITEM.setUDISPLAYPOSITION(C0.get());
}}r.ln=541;}l1.end();r.dR("MENUITEM");}r.ln=543;C1.mthREMOVEALL();}}r.ln=547;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LogicalContainerPanel.SizeChanged",552);r.ln=552;{r.ln=554;if((l.b.Not(m.USEAC005OVERFLOWFOROVERFLOW.get())&&l.n.eq(m.LAYOUTCHECKTIMER.getInterval(),0))){r.ln=555;m.LAYOUTCHECKTIMER.setInterval(200);}}r.ln=558;r.e();};cO.mthZINT_ISPHYSICALLYVISIBLE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_isPhysicallyVisible",562);var P0=r.cPD("MENUITEM");var P1=r.cP("VISIBLE","PRIM_BOLN");
P0=p0;var C0=r.cF("LOGICALLEFT",Fd.F2.Dc);C0.iC();r.ln=562;{r.ln=567;P1.set(l.n.lt(cO.mthZINT_CURRENTVIEWINGSTRIPREQUIREDWIDTH.call(this),m.ITEMSVIEWINGPORT.getWidth()));r.ln=569;if(l.b.Not(P1.get())){r.ln=571;C0.set(l.add(P0.getLeft(),m.ITEMSVIEWINGSTRIP.getLeft()));r.ln=573;if(l.and(this.getVisible(),(m.LOGICALCONTAINERPANEL!=null))){r.ln=575;P1.set(l.and(l.n.ge(C0.get(),0),l.n.le(l.add(C0.get(),P0.getWidth()),m.ITEMSVIEWINGPORT.getWidth())));}}}r.ln=581;return r.rV(P1.get());};cO.mthZINT_CURRENTVIEWINGSTRIPREQUIREDWIDTH=function()
{var m=this.REF,r=l.mR(this,cO,"zInt_CurrentViewingStripRequiredWidth",587);var P0=r.cPF("VALUE",Fd.F2.Dc);r.ln=587;{r.ln=590;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=591;if(MENUITEM.getVisible()){r.ln=592;P0.set(l.add(P0.get(),MENUITEM.getWidth()));}r.ln=594;}l1.end();r.dR("MENUITEM");}}r.ln=596;return r.rV(P0.get());};cO.mthZINT_DESTROYOVERFLOWMENU=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_DestroyOverflowMenu",600);var P0=r.cP("SIGNALCLOSED","PRIM_BOLN");
P0.set(p0);r.ln=600;{r.ln=603;if((m.OVERFLOWPOPUPMENU!=null)){r.ln=605;if(l.tB(P0.get())){r.ln=606;this.fE("OVERFLOWMENUCLOSED");}r.ln=609;m.OVERFLOWPOPUPMENU.mthZINT_TERMINATE();r.ln=611;this.srOVERFLOWPOPUPMENU(null);}}r.ln=615;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#OverflowPopUpMenu.Closing",619);r.ln=619;{r.ln=621;this.fE("OVERFLOWMENUCLOSED");}r.ln=623;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MoreItemsImage.WasClicked",627);var C0=r.cF("MENUITEMCOUNT",Fd.F2.Dc);
var C1=r.cD("C1");C0.iC();r.ln=627;{r.ln=633;m.LAYOUTCHECKTIMER.setInterval(0);r.ln=636;this.mthZINT_DESTROYOVERFLOWMENU(true);r.ln=638;if(l.b.Not(m.USEAC005OVERFLOWFOROVERFLOW.get())){r.ln=641;this.srOVERFLOWPOPUPMENU(l.cAs("VF_UI008O"));r.ln=645;m.OVERFLOWPOPUPMENU.mthZINT_INITIALIZE(true,false,"");r.ln=649;C0.set(0);r.ln=651;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=652;if(MENUITEM.getVisible()){r.ln=654;if(l.b.Not(cO.mthZINT_ISPHYSICALLYVISIBLE.call(this,MENUITEM)))
{r.ln=656;C0.set(l.add(C0.get(),1));r.ln=658;m.OVERFLOWPOPUPMENU.mthZINT_PUTMENUITEM(MENUITEM.getUSINGCAPTION(),"",MENUITEM.getUSINGIMAGENAME(),MENUITEM.getUSINGIMAGESOURCE(),u,MENUITEM.getLOGICALLYENABLED().get(),MENUITEM,u,u,u,{set:function(rn){C1=r.sR("C1",rn)}},u);r.ln=660;if(l.b.Not(MENUITEM.getLOGICALLYENABLED().get())){r.ln=661;C1.setOpacity(40);}}}r.ln=666;}l1.end();r.dR("MENUITEM");}r.ln=670;if(l.n.le(C0.get(),0)){r.ln=671;this.mthZINT_DESTROYOVERFLOWMENU(true);}else{r.ln=673;this.fE("OVERFLOWMENUDISPLAYED");
r.ln=674;m.OVERFLOWPOPUPMENU.mthZINT_SHOW(u);}}}r.ln=679;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#OverflowPopUpMenu.ItemSelected",683);var P0=Ps.r("ASSOCIATEDREFERENCE");r.ln=683;{r.ln=685;if(l.b.Not(m.USEAC005OVERFLOWFOROVERFLOW.get())){r.ln=687;this.mthZINT_SELECTITEM(l.cast(P0,"VF_UI028O"));r.ln=689;this.mthZINT_DESTROYOVERFLOWMENU(true);}}r.ln=693;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#CollectVF_UI028O.Compare",697);var P0=Ps.r("OBJECT");var P1=Ps.r("SUBJECT");
var P2=Ps.r("RESULT");r.ln=697;{r.ln=699;if(l.n.lt(P1.getUDISPLAYPOSITION(),P0.getUDISPLAYPOSITION())){r.ln=700;P2.set("LESS");}else{r.ln=702;if(l.n.gt(P1.getUDISPLAYPOSITION(),P0.getUDISPLAYPOSITION())){r.ln=703;P2.set("GREATER");}else{r.ln=705;P2.set("EQUAL");}}}r.ln=709;r.e();};function e9(UTAB,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectVF_UI028O<>.uDisplayPositionChanged",713);r.ln=713;{r.ln=715;m.COLLECTVF_UI028O.mthREMOVE(UTAB);r.ln=716;m.COLLECTVF_UI028O.mthINSERT(UTAB);}r.ln=718;r.e();};cO.mthZINT_HANDLEOVERFLOWMENUEVENT=function(p0,p1,p2)
{var r=l.mR(this,cO,"zInt_HandleOverflowMenuEvent",722);var P0=r.cPF("EVENTNAME",Fd.F5.Dc);var P1=r.cPD("ASSOCIATEDREFERENCE");var P2=r.cPD("ASSOCIATEDREFERENCE2");P0.set(p0);P1=p1;P2=p2;var C0=r.cD("C0");r.ln=722;{r.ln=729;if(l.Io(P1,"VF_UI028O")){r.ln=731;C0=r.sR("C0",l.cast(P1,"VF_UI028O"));r.ln=733;{var eP=l.ePs();eP.cD("REFERENCE");eP.cD("REFERENCE2");eP.sR("REFERENCE",C0.getASSOCIATEDREFERENCE1());eP.sR("REFERENCE2",C0.getASSOCIATEDREFERENCE2());this.fE("OBJECTSELECTED",eP);eP.e();}}}r.ln=737;
r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LayoutCheckTimer.Tick",741);var C0=r.cF("ENABLEDTOTAL",Fd.F2.Dc);var C1=r.cF("ENABLEDCOUNT",Fd.F2.Dc);var C2=r.cF("NEXTLEFTTOUSE",Fd.F2.Dc);var C3=r.cF("AVAILABLEWIDTH",Fd.F2.Dc);var C4=r.cF("USEFIXEDTABWIDTH",Fd.F2.Dc);var C5=r.cD("C5");var C6=r.cF("PREFERABLEITEMINDEX",Fd.F2.Dc);var C7=r.cF("INDEX",Fd.F2.Dc);var C8=r.cD("C8");var C9=r.cF("LOWESTENABLEDINDEX",Fd.F2.Dc);var C10=r.cF("HIGHESTENABLEDINDEX",Fd.F2.Dc);var C11=r.cR("ITEMHASBEENSELECTED","PRIM_BOLN");
var C12=r.cR("DONTCHECKITEMENABLED","PRIM_BOLN");C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C6.iC();C7.iC();C9.iC();C10.iC();C11.iC();C12.iC();r.ln=741;{r.ln=760;m.LAYOUTCHECKTIMER.setInterval(0);r.ln=766;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=768;C12.set(l.b.Not(m.USEREFLECTENABLEDINVISIBILITY.get()));r.ln=771;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var KEY=r.sR("KEY",l1.key());r.ln=772;if(l.tB((C12.get()||ITEM.getEnabled()))){r.ln=774;C0.set(l.add(C0.get(),1));
r.ln=776;if(l.n.eq(C9.get(),0)){r.ln=777;C9.set(KEY.get());}r.ln=780;C10.set(KEY.get());r.ln=782;if((C5==null)){r.ln=783;C5=r.sR("C5",ITEM);r.ln=784;C6.set(KEY.get());}r.ln=787;if(l.b.Not(C11.get())){r.ln=788;if(l.n.gt(m.LAYOUTCHECK_REQUESTEDITEM.get(),0)){r.ln=790;if(l.n.eq(KEY.get(),m.LAYOUTCHECK_REQUESTEDITEM.get())){r.ln=792;C5=r.sR("C5",ITEM);r.ln=793;C6.set(KEY.get());r.ln=794;C11.set(true);}}else{r.ln=800;if(l.tB(ITEM.getLOGICALLYSELECTED().get())){r.ln=802;C5=r.sR("C5",ITEM);r.ln=803;C6.set(KEY.get());
r.ln=804;C11.set(true);}}}}r.ln=812;}l1.end();r.dR("ITEM");r.dR("KEY");}r.ln=815;m.LAYOUTCHECK_REQUESTEDITEM.set(0);r.ln=818;if(l.n.le(C0.get(),1)){r.ln=819;this.setVisible(false);r.e();return;}r.ln=825;if(l.b.Not(m.FIXEDWIDTHITEMSONSHOW.mthCONTAINS(C5))){r.ln=828;m.FIXEDWIDTHITEMSONSHOW.mthREMOVEALL();r.ln=831;if(l.n.gt(C0.get(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_MAXIMUMCOMMANDS())){r.ln=832;C0.set(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_MAXIMUMCOMMANDS());}r.ln=836;m.FIXEDWIDTHITEMSONSHOW.mthINSERTFIRST(C5);
r.ln=838;if(l.n.eq(C6.get(),C9.get())){r.ln=839;C9.set(0);}r.ln=841;if(l.n.eq(C6.get(),C10.get())){r.ln=842;C10.set(0);}r.ln=847;for(var i1=l.tI(l.sub(C6.get(),1)),s1=l.tI(-1),t1=l.tI(1);C7.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=848;if(l.n.ge(m.FIXEDWIDTHITEMSONSHOW.getItemCount(),C0.get())){break;}r.ln=849;C8=r.sR("C8",m.COLLECTVF_UI028O.get(C7.get()));r.ln=850;if(l.tB((C12.get()||C8.getEnabled()))){r.ln=852;if(l.n.eq(C7.get(),C9.get())){r.ln=853;C9.set(0);}r.ln=855;if(l.n.eq(C7.get(),C10.get()))
{r.ln=856;C10.set(0);}r.ln=859;m.FIXEDWIDTHITEMSONSHOW.mthINSERTFIRST(C8);}}r.ln=865;for(var i1=l.tI(l.add(C6.get(),1)),s1=1,t1=l.tI(m.COLLECTVF_UI028O.getItemCount());C7.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=866;if(l.n.ge(m.FIXEDWIDTHITEMSONSHOW.getItemCount(),C0.get())){break;}r.ln=867;C8=r.sR("C8",m.COLLECTVF_UI028O.get(C7.get()));r.ln=868;if(l.tB((C12.get()||C8.getEnabled()))){r.ln=870;if(l.n.eq(C7.get(),C9.get())){r.ln=871;C9.set(0);}r.ln=873;if(l.n.eq(C7.get(),C10.get()))
{r.ln=874;C10.set(0);}r.ln=877;m.FIXEDWIDTHITEMSONSHOW.mthINSERT(C8);}}}else{r.ln=886;C9.set(m.LAYOUTCHECK_LOWESTENABLEDINDEX.get());r.ln=887;C10.set(m.LAYOUTCHECK_HIGHESTENABLEDINDEX.get());}r.ln=892;C3.set(this.getWidth());r.ln=895;m.CHEVRONLEFT.setVisible(l.n.gt(C9.get(),0));r.ln=896;m.CHEVRONRIGHT.setVisible(l.n.gt(C10.get(),0));r.ln=898;if(m.CHEVRONLEFT.getVisible()){r.ln=899;m.CHEVRONLEFT.setTop(l.div(l.sub(this.getHeight(),m.CHEVRONLEFT.getIMAGEDIMENSION()),2));m.CHEVRONLEFT.setLeft(0);m.CHEVRONLEFT.setDisplayPosition(1);
r.ln=900;C2.set(l.add(C2.get(),m.CHEVRONLEFT.getIMAGEDIMENSION()));r.ln=901;C3.set(l.sub(C3.get(),m.CHEVRONLEFT.getIMAGEDIMENSION()));}r.ln=904;if(m.CHEVRONRIGHT.getVisible()){r.ln=905;m.CHEVRONRIGHT.setTop(l.div(l.sub(this.getHeight(),m.CHEVRONRIGHT.getIMAGEDIMENSION()),2));m.CHEVRONRIGHT.setLeft(l.sub(this.getWidth(),m.CHEVRONRIGHT.getIMAGEDIMENSION()));m.CHEVRONRIGHT.setDisplayPosition(1);r.ln=906;C3.set(l.sub(C3.get(),m.CHEVRONRIGHT.getIMAGEDIMENSION()));}r.ln=910;C4.set(l.div(C3.get(),m.FIXEDWIDTHITEMSONSHOW.getItemCount()));
r.ln=914;for(var l1=m.COLLECTVF_UI028O.cI();l1.step();){l1.item().setVisible(false)};r.ln=917;{var l1=m.FIXEDWIDTHITEMSONSHOW.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=918;ITEM.setVisible(true);ITEM.setLeft(C2.get());ITEM.setWidth(C4.get());ITEM.setDisplayPosition(1);r.ln=919;ITEM.mthZINT_ALIGNMATERIALSTYLETABS();r.ln=920;C2.set(l.add(C2.get(),C4.get()));r.ln=921;}l1.end();r.dR("ITEM");}r.ln=924;m.LAYOUTCHECK_LOWESTENABLEDINDEX.set(C9.get());r.ln=925;m.LAYOUTCHECK_HIGHESTENABLEDINDEX.set(C10.get());
r.ln=928;m.MOREITEMSIMAGE.setVisible(false);r.ln=929;m.ITEMSVIEWINGSTRIP.setLeft(0);m.ITEMSVIEWINGSTRIP.setWidth(m.ITEMSVIEWINGPORT.getWidth());r.ln=930;this.setVisible(true);}else{r.ln=938;if((l.b.Not(m.USEAC005OVERFLOWFOROVERFLOW.get())&&l.n.gt(cO.mthZINT_CURRENTVIEWINGSTRIPREQUIREDWIDTH.call(this),m.ITEMSVIEWINGPORT.getWidth()))){r.ln=940;m.MOREITEMSIMAGE.setVisible(true);r.ln=942;if(l.n.eq(m.ENSURESELECTEDVISIBLETIMER.getInterval(),0)){r.ln=943;m.ENSURESELECTEDVISIBLETIMER.setInterval(10);}}else
{r.ln=948;m.MOREITEMSIMAGE.setVisible(false);r.ln=949;m.ITEMSVIEWINGSTRIP.setLeft(0);}}}r.ln=955;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ChevronLeft.WasClicked",959);var C0=r.cD("C0");var C1=r.cF("PRECEDINGENABLEDINDEX",Fd.F2.Dc);C1.iC();r.ln=959;{r.ln=964;C0=r.sR("C0",m.FIXEDWIDTHITEMSONSHOW.get(1));r.ln=966;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=967;if((ITEM===C0)){r.ln=969;for(var i1=l.tI(l.sub(INDEX.get(),1)),s1=l.tI(-1),t1=l.tI(1);C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=970;C0=r.sR("C0",m.COLLECTVF_UI028O.get(C1.get()));r.ln=971;if(C0.getEnabled()){r.ln=973;m.LAYOUTCHECK_REQUESTEDITEM.set(C1.get());r.ln=974;m.LAYOUTCHECKTIMER.setInterval(10);l1.end();r.e();return;}}}r.ln=982;}l1.end();r.dR("ITEM");r.dR("INDEX");}}r.ln=984;r.e();};function e12(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ChevronRight.WasClicked",987);var C0=r.cD("C0");var C1=r.cF("ANTECEDINGENABLEDINDEX",Fd.F2.Dc);C1.iC();r.ln=987;{r.ln=992;C0=r.sR("C0",m.FIXEDWIDTHITEMSONSHOW.get(m.FIXEDWIDTHITEMSONSHOW.getItemCount()));
r.ln=994;{var l1=m.COLLECTVF_UI028O.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=995;if((ITEM===C0)){r.ln=997;for(var i1=l.tI(l.add(INDEX.get(),1)),s1=1,t1=l.tI(m.COLLECTVF_UI028O.getItemCount());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=998;C0=r.sR("C0",m.COLLECTVF_UI028O.get(C1.get()));r.ln=999;if(C0.getEnabled()){r.ln=1000;m.LAYOUTCHECK_REQUESTEDITEM.set(C1.get());r.ln=1001;m.LAYOUTCHECKTIMER.setInterval(10);l1.end();r.e();
return;}}}r.ln=1007;}l1.end();r.dR("ITEM");r.dR("INDEX");}}r.ln=1010;r.e();};function e13(sender,Ps){var r=l.eR(this,cO,"#ListeningToVF_AC005O.AtFrontStatusChange",1013);var P0=Ps.r("TO");r.ln=1013;{r.ln=1015;this.mthZINT_SETMATERIALSTYLES();}r.ln=1017;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELOBJ"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);
};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srOVERFLOWPOPUPMENU=function(rn){if(this.REF.OVERFLOWPOPUPMENU!=null){this.REF.OVERFLOWPOPUPMENU.rH("CLOSING",this,e5);this.REF.OVERFLOWPOPUPMENU.rH("ITEMSELECTED",this,e7);}this.sR("OVERFLOWPOPUPMENU",rn);if(this.REF.OVERFLOWPOPUPMENU!=null){this.REF.OVERFLOWPOPUPMENU.aH("CLOSING",this,e5);
this.REF.OVERFLOWPOPUPMENU.aH("ITEMSELECTED",this,e7);}};cO.srLOGICALCONTAINERPANEL=function(rn){if(this.REF.LOGICALCONTAINERPANEL!=null){this.REF.LOGICALCONTAINERPANEL.rH("SIZECHANGED",this,e4);}this.sR("LOGICALCONTAINERPANEL",rn);if(this.REF.LOGICALCONTAINERPANEL!=null){this.REF.LOGICALCONTAINERPANEL.aH("SIZECHANGED",this,e4);}};cO.srLISTENINGTOVF_AC005O=function(rn){if(this.REF.LISTENINGTOVF_AC005O!=null){this.REF.LISTENINGTOVF_AC005O.rH("ATFRONTSTATUSCHANGE",this,e13);}this.sR("LISTENINGTOVF_AC005O",rn);
if(this.REF.LISTENINGTOVF_AC005O!=null){this.REF.LISTENINGTOVF_AC005O.aH("ATFRONTSTATUSCHANGE",this,e13);}};},{rc:["VF_UI005O","VF_SY001O","VF_SY001X"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_VS.Style","PRIM_FLD","PRIM_BOLN","PRIM_SACO","PRIM_TIMR","PRIM_ALPH","PRIM_ACOL","PRIM_VS.SolidBrush"],dc:["VF_UI008O","VF_AC005O","VF_UI028O"],dp:["PRIM_PANL","PRIM_BOLN","PRIM_ACOL"]});