﻿LANSA.addComponent({id:"DF_T49H2O",ot:"rp",tp:"Reusable Part",de:"\\OC=Google Pie Chart",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],dv:"",ia:["FE"]},F3:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門"}[cL],
h2:{"ENG":"Description","FRA":"Département","JPN":"説明"}[cL],h3:" ",de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"EMPCOUNT",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uLoadChart:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_T49H2O",Fd);var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");
var C1=this.cR("PIECHART","DF_T49PCO");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("ATTACHITEM2","PRIM_ATLI");var C5=this.cR("PIECHART_INITIALIZED","PRIM_BOLN");C0.setCaption("Pie Chart using Google. See component DF_T49H2O for details of this command handler");C0.setDisplayPosition(1);C0.setEllipses("WORD");C0.setHeight(25);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setVerticalAlignment("CENTER");
C0.setWidth(577);C0.iC();C1.setDisplayPosition(2);C1.setHeight(248);C1.setLeft(0);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(25);C1.setWidth(577);C1.iC();C2.iC();C3.setManage(C0);C3.setParent(C2);C3.setAttachment("TOP");C3.iC();C4.setParent(C2);C4.setAttachment("CENTER");C4.setManage(C1);C4.iC();C5.iC();C1.aH("INITIALIZE",this,e1);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.setHeight(273);this.setWidth(577);this.setLayoutManager(C2);var li=this.aL("DF_T49H2O");li.DEPARTMENTLIST=l.cLT({"XDEPTMENT":f.F2,"XDEPTDESC":f.F3,"EMPCOUNT":f.F4},f.F1);
}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",40);r.ln=40;{r.ln=43;cA.mthUINITIALIZE.call(this);r.ln=45;this.setAVCONTENTNEEDSSHIELDING(true);r.ln=48;this.REF.AVLOCALTIMER.setInterval(400);}r.ln=50;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PieChart.Initialize",52);r.ln=52;{r.ln=54;m.PIECHART_INITIALIZED.set(true);}r.ln=56;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",58);r.ln=58;{r.ln=61;this.REF.AVLOCALTIMER.setInterval(0);
r.ln=65;if(l.b.Not(m.PIECHART_INITIALIZED.get())){r.ln=67;this.REF.AVLOCALTIMER.setInterval(100);}else{r.ln=72;this.mthULOADCHART();r.ln=73;m.PIECHART.setTITLE("Employees by Department");}}r.ln=75;r.e();};cO.mthULOADCHART=function(){var li=this.LIST.DF_T49H2O,f=this.FLD.DF_T49H2O,m=this.REF,r=l.mR(this,cO,"uLoadChart",78),mth=r;var C0=r.cDR("GETDEPARTMENTLIST","DF_T49DSO","GETDEPARTMENTLIST");C0.iC();C0.aH("COMPLETED",this,e3);r.ln=78;{r.ln=84;C0.mthEXECUTEASYNC({},{LIST:{"DEPARTMENTLIST":li.DEPARTMENTLIST}});
}r.ln=97;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetDepartmentList.Completed",86,mth);r.ln=86;{r.ln=88;{var l1=li.DEPARTMENTLIST.selectList();while(l1.step()){r.ln=91;m.PIECHART.mthINSERT(f.F4.get(),f.F3.get());r.ln=93;}l1.end();}}r.ln=95;r.e();}};},{rc:["VF_AC010O","DF_T49PCO"],rp:["PRIM_LABL","PRIM_ATLM","PRIM_ATLI","PRIM_BOLN","PRIM_WEB.DataRequest"]});