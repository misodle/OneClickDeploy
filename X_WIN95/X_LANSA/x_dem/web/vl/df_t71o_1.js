﻿LANSA.addComponent({id:"DF_T71O_1",nm:"DF_T71O_PieChart_Access",ot:"rp",tp:"Reusable Part",de:"\\OC=Interface with pie chart widget",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec(".5");var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"DF_DECDTA",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Net Salary","FRA":"Salaire net","JPN":"?????"}[cL],h1:{"ENG":"Net Salary","FRA":"Salaire net","JPN":"給与の"}[cL],h2:{"ENG":" ","FRA":" ","JPN":"総計"}[cL],h3:" ",de:{"ENG":"Decimal field for chart data","FRA":"Salaire net","JPN":"給与の総計"}[cL],dv:0,ia:["RB","FE"]},F3:{nm:"DF_ALPHAO",ft:"S",ln:2,dc:1,lb:"Opacity",h1:"Opacity",h2:" ",h3:" ",de:"Opacity",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{uVisualizeAs:{
da:"na"},uAlignChart:{da:"rw"},isInitialized:{da:"r"}},mt:{uRefresh:{ps:{"PercentageWidth":{pt:"i"},"Align":{pt:"i"}}},uAddPieSection:{ps:{"DataSetId":{pt:"i"},"Label":{pt:"i"},"Data":{pt:"i"},"BackgroundColor":{pt:"i"},"Opacity":{pt:"i"}}},uSetLegend:{ps:{"DataSetId":{pt:"i"},"Text":{pt:"i"},"Position":{pt:"i"},"FontFamily":{pt:"i"},"FontSize":{pt:"i"},"FontColor":{pt:"i"},"Show":{pt:"i"}}},uShowTitle:{ps:{"Text":{pt:"i"},"FontFamily":{pt:"i"},"FontSize":{pt:"i"},"FontColor":{pt:"i"},"Position":
{pt:"i"},"FontStyle":{pt:"i"}}},uClear:{ps:{"Terminate":{pt:"i"}}}},ev:{uChartInitialized:{}},co:function(){cO.aN.call(this);this.aF("DF_T71O_1",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");var C2=this.cR("CHART","DF_T71O_P");var C3=this.cR("ALIGNCHART","PRIM_ALPH");var C4=this.cR("ISINITIALIZED","PRIM_BOLN");var C5=this.cR("REFRESHTIMER","PRIM_TIMR");C0.iC();C1.setAttachment("CENTER");C1.setParent(C0);C1.setManage(C2);C1.iC();C2.setDisplayPosition(1);
C2.setParent(this);C2.setTabPosition(1);C2.setHeight(345);C2.setLeft(0);C2.setTop(0);C2.setWidth(441);C2.iC();C3.iC();C4.iC();C5.setInterval(0);C5.iC();C2.aH("INITIALIZE",this,e1);C5.aH("TICK",this,e2);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setLayoutManager(C0);this.setHeight(345);this.setWidth(441);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Chart.Initialize",32);r.ln=32;{r.ln=34;m.ISINITIALIZED.set(true);r.ln=36;this.fE("UCHARTINITIALIZED");
}r.ln=38;r.e();};cO.mthSET_UVISUALIZEAS=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_uVisualizeAs",40);var P0=r.cP("VISUALIZEAS","PRIM_ALPH");P0.set(p0);r.ln=40;{r.ln=44;m.CHART.setUVISUALIZEAS(P0.get());}r.ln=46;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RefreshTimer.tick",49);r.ln=49;{r.ln=51;m.REFRESHTIMER.setInterval(0);r.ln=53;m.CHART.mthUREFRESHCHART();}r.ln=55;r.e();};cO.mthUREFRESH=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uRefresh",57);var P0=r.cPF("PERCENTAGEWIDTH",Fd.F1.Dc);
var P1=r.cP("ALIGN","PRIM_ALPH");P0.set((p0===u)?(70):(p0));P1.set((p1===u)?("left"):(p1));r.ln=57;{r.ln=62;m.REFRESHTIMER.setInterval(1);}r.ln=64;r.e();};cO.mthUADDPIESECTION=function(p0,p1,p2,p3,p4){var m=this.REF,r=l.mR(this,cO,"uAddPieSection",66);var P0=r.cP("DATASETID","PRIM_ALPH");var P1=r.cP("LABEL","PRIM_ALPH");var P2=r.cPF("DATA",Fd.F2.Dc);var P3=r.cP("BACKGROUNDCOLOR","PRIM_ALPH");var P4=r.cPF("OPACITY",Fd.F3.Dc);P0.set((p0===u)?(""):(p0));P1.set((p1===u)?(""):(p1));P2.set((p2===u)?(0):(p2));
P3.set((p3===u)?("blue"):(p3));P4.set((p4===u)?(c1):(p4));r.ln=66;{r.ln=74;m.CHART.mthUADDPIESECTION(P0.get(),P1.get(),P2.get(),P3.get(),P4.get());}r.ln=76;r.e();};cO.mthUSETLEGEND=function(p0,p1,p2,p3,p4,p5,p6){var m=this.REF,r=l.mR(this,cO,"uSetLegend",78);var P0=r.cP("DATASETID","PRIM_ALPH");var P1=r.cP("TEXT","PRIM_ALPH");var P2=r.cP("POSITION","PRIM_ALPH");var P3=r.cP("FONTFAMILY","PRIM_ALPH");var P4=r.cPF("FONTSIZE",Fd.F1.Dc);var P5=r.cP("FONTCOLOR","PRIM_ALPH");var P6=r.cP("SHOW","PRIM_BOLN");
P0.set((p0===u)?(""):(p0));P1.set((p1===u)?(""):(p1));P2.set((p2===u)?("top"):(p2));P3.set((p3===u)?(""):(p3));P4.set((p4===u)?(0):(p4));P5.set((p5===u)?("blue"):(p5));P6.set((p6===u)?(true):(p6));r.ln=78;{r.ln=88;m.CHART.mthUSETLEGEND(P0.get(),P6.get(),P1.get(),P2.get(),P4.get(),P3.get(),P5.get());}r.ln=90;r.e();};cO.mthUSHOWTITLE=function(p0,p1,p2,p3,p4,p5){var m=this.REF,r=l.mR(this,cO,"uShowTitle",92);var P0=r.cP("TEXT","PRIM_ALPH");var P1=r.cP("FONTFAMILY","PRIM_ALPH");var P2=r.cPF("FONTSIZE",Fd.F1.Dc);
var P3=r.cP("FONTCOLOR","PRIM_ALPH");var P4=r.cP("POSITION","PRIM_ALPH");var P5=r.cP("FONTSTYLE","PRIM_ALPH");P0.set((p0===u)?(""):(p0));P1.set((p1===u)?(""):(p1));P2.set((p2===u)?(0):(p2));P3.set((p3===u)?("blue"):(p3));P4.set((p4===u)?("top"):(p4));P5.set((p5===u)?(""):(p5));r.ln=92;{r.ln=101;m.CHART.mthUSHOWTITLE(P0.get(),P4.get(),P2.get(),P3.get(),P1.get(),P5.get());}r.ln=103;r.e();};cO.mthUCLEAR=function(p0){var m=this.REF,r=l.mR(this,cO,"uClear",105);var P0=r.cP("TERMINATE","PRIM_BOLN");P0.set((p0===u)?(false):(p0));
r.ln=105;{r.ln=109;m.CHART.mthUCLEAR(P0.get());}r.ln=110;r.e();};cO.setUVISUALIZEAS=function(v){this.mthSET_UVISUALIZEAS(v);};cO.getUALIGNCHART=function(){return this.REF.ALIGNCHART.get();};cO.setUALIGNCHART=function(v){this.REF.ALIGNCHART.set(v);};cO.getISINITIALIZED=function(){return this.REF.ISINITIALIZED.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"DF_DECDTA"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"DF_ALPHAO"});}},{rc:["DF_T71O_P"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_ALPH","PRIM_BOLN","PRIM_TIMR","PRIM_FLD"]});