﻿LANSA.addComponent({id:"XDTOO_24",nm:"xDToolsDataCountry",ot:"rp",tp:"Reusable Part",de:"Country",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSCNTRYNM",an:"XSCountryName",ft:"C",ln:100,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"XDTOOL_5",fd:Fd,pt:{CountryName:{da:"r"}},co:function(){cO.aN.call(this);var f=this.aF("XDTOO_24",Fd);this.aLF({"XSCNTRYNM":f.F1});}});cO.getCOUNTRYNAME=function(){var f=this.FLD.XDTOO_24;return f.F1.get();};},{rc:["XDTOOL_5"]});