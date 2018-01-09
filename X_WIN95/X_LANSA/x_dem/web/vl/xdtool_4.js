﻿LANSA.addComponent({id:"XDTOOL_4",nm:"xDToolsDataModel",ot:"rp",tp:"Reusable Part",de:"Data Model",tl:14020001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSCNTRYNM",an:"XSCountryName",ft:"C",ln:100,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
dv:"",ia:["FE"]},F2:{nm:"XSPRDID",an:"XSProductID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product ID","FRA":"Id produit","JPN":"製品 ID","LLL":"Product ID"}[cL],h1:{"ENG":"Product","FRA":"ID","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"ID","FRA":"Produit","JPN":"ID","LLL":"ID"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product ID","FRA":"Id Produit","JPN":"製品 ID","LLL":"Product ID"}[cL],dv:"",ia:["FE"]},F3:{nm:"XSPRDLNID",an:"XSProductLineID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product Categor","FRA":"Ligne produit","JPN":"製品ライン","LLL":"Product Categor"}[cL],
h1:{"ENG":"Product","FRA":"ID","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Category","FRA":"Ligne","JPN":"ライン","LLL":"Category"}[cL],h3:{"ENG":"ID","FRA":"Produit","JPN":"ID","LLL":"ID"}[cL],de:{"ENG":"Product Line ID","FRA":"Id Ligne Produit","JPN":"製品ライン ID","LLL":"Product Line ID"}[cL],dv:"",ia:["FE"]},F4:{nm:"XSPRDCTID",an:"XSProductCategoryID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product Categry","FRA":"Id catég prod","JPN":"カテゴリー ID","LLL":"Product Categry"}[cL],h1:{"ENG":"Product","FRA":"Id","JPN":"製品","LLL":"Product"}[cL],
h2:{"ENG":"Category","FRA":"Catégorie","JPN":"カテゴリー","LLL":"Category"}[cL],h3:{"ENG":"ID","FRA":"Produit","JPN":"ID","LLL":"ID"}[cL],de:{"ENG":"Product Category ID","FRA":"Id catégorie produit","JPN":"製品カテゴリー ID","LLL":"Product Category ID"}[cL],dv:"",ia:["FE"]},F5:{nm:"XSPRDDSC",an:"XSProductDescription",ft:"C",ln:100,dc:0,lb:{"ENG":"Product Desc","FRA":"Desc. produit","JPN":"製品説明","LLL":"Product Desc"}[cL],h1:{"ENG":"Product","FRA":"Description","JPN":"製品説明","LLL":"Product"}[cL],h2:{"ENG":"Description","FRA":"Produit","JPN":" ","LLL":"Description"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Description","FRA":"Description produit","JPN":"製品説明","LLL":"Product Description"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XSPRDMDL",an:"XSProductModel",ft:"C",ln:100,dc:0,lb:{"ENG":"Product Model","FRA":"Modèle Produit","JPN":"製品モデル","LLL":"Product Model"}[cL],h1:{"ENG":"Product","FRA":"Modèle","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Model","FRA":"Produit","JPN":"モデル","LLL":"Model"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Product Model","FRA":"Modèle Produit","JPN":"製品モデル","LLL":"Product Model"}[cL],dv:"",ia:["FE"]},F7:{nm:"XSPRDPRC",an:"XSProductPrice",ft:"S",ln:9,dc:2,ec:"3",lb:{"ENG":"Product Price","FRA":"Prix Produit","JPN":"製品価格","LLL":"Product Price"}[cL],h1:{"ENG":"Product","FRA":"Prix","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Price","FRA":"Produit","JPN":"価格","LLL":"Price"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Price","FRA":"Prix Produit","JPN":"製品価格","LLL":"Product Price"}[cL],
dv:0,ia:["FE","RB"]},F8:{nm:"XSPRDDTL",an:"XSProductDetail",ft:"C",ln:100,dc:0,lb:{"ENG":"Product Detail","FRA":"Détail produit","JPN":"製品詳細","LLL":"Product Detail"}[cL],h1:{"ENG":"Product","FRA":"Détail","JPN":"製品詳細","LLL":"Product"}[cL],h2:{"ENG":"Detail","FRA":"Produit","JPN":" ","LLL":"Detail"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Detail","FRA":"Détail produit","JPN":"製品詳細","LLL":"Product Detail"}[cL],dv:"",ia:["FE"]},F9:{nm:"XSPRDSHP",an:"XSProductShipping",
ft:"S",ln:9,dc:2,ec:"3",lb:{"ENG":"Product Price","FRA":"Livrais Produit","JPN":"出荷コスト","LLL":"Product Price"}[cL],h1:{"ENG":"Product","FRA":"Livraison","JPN":"出荷","LLL":"Product"}[cL],h2:{"ENG":"Price","FRA":"Produit","JPN":"コスト","LLL":"Price"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Shipping Cost","FRA":"Coût Livraison Produit","JPN":"製品出荷コスト","LLL":"Product Shipping Cost"}[cL],dv:0,ia:["FE","RB"]},F10:{nm:"XSPRDSTS",an:"XSProductStockStatus",ft:"A",ln:10,dc:0,lb:{"ENG":"Product Stock S","FRA":"Stock Produit","JPN":"在庫状態","LLL":"Product Stock S"}[cL],
h1:{"ENG":"Product","FRA":"Etat","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Stock","FRA":"Stock","JPN":"在庫","LLL":"Stock"}[cL],h3:{"ENG":"Status","FRA":"Produit","JPN":"ステータス","LLL":"Status"}[cL],de:{"ENG":"Product Stock Status","FRA":"Etat Stock Produit","JPN":"製品在庫ステータス","LLL":"Product Stock Status"}[cL],dv:"",ia:["FE"]},F11:{nm:"XSPRDTAX",an:"XSProductTaxPercent",ft:"S",ln:5,dc:2,lb:{"ENG":"Product Tax %","FRA":"% Taxe Produit","JPN":"製品税率 %","LLL":"Product Tax %"}[cL],h1:{"ENG":"Product","FRA":"% Taxe","JPN":"製品","LLL":"Product"}[cL],
h2:{"ENG":"Tax %","FRA":"Produit","JPN":"税率 %","LLL":"Tax %"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Tax %","FRA":"Pourcentage Taxe Produit","JPN":"製品税率 %","LLL":"Product Tax %"}[cL],dv:0,ia:["FE","RB"]},F12:{nm:"XSPRODIMG",an:"XSProductImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Product Image","FRA":"Image Produit","JPN":"製品イメージ","LLL":"Product Image"}[cL],h1:{"ENG":"Product","FRA":"Image","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Image","FRA":"Produit","JPN":"イメージ","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Image","FRA":"Image Produit","JPN":"製品イメージ","LLL":"Product Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F13:{nm:"XSPRDCTDS",an:"XSProductCategoryDescription",ft:"C",ln:100,dc:0,lb:{"ENG":"Last Name","FRA":"Catég produit","JPN":"カテゴリー","LLL":"Last Name"}[cL],h1:{"ENG":"Last","FRA":"Description","JPN":"製品カテゴリー","LLL":"Last"}[cL],h2:{"ENG":"Name","FRA":"Catégorie","JPN":"説明","LLL":"Name"}[cL],h3:{"ENG":" ","FRA":"Produit","JPN":" ","LLL":""}[cL],
de:{"ENG":"Product Category Description","FRA":"Description catégorie produit","JPN":"製品カテゴリー説明","LLL":"Product Category Description"}[cL],dv:"",ia:["FE","LC"]},F14:{nm:"XSPRDLNDS",an:"XSProductLineDescription",ft:"C",ln:100,dc:0,lb:{"ENG":"Last Name","FRA":"Desc lig prod","JPN":"製品ライン","LLL":"Last Name"}[cL],h1:{"ENG":"Last","FRA":"Description","JPN":"製品ライン","LLL":"Last"}[cL],h2:{"ENG":"Name","FRA":"Ligne","JPN":"説明","LLL":"Name"}[cL],h3:{"ENG":" ","FRA":"Produit","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Line Description","FRA":"Description ligne produit","JPN":"製品ライン説明","LLL":"Product Line Description"}[cL],
dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{isPrepared:{da:"r"},Countries:{da:"r"},Products:{da:"r"},ProductCategories:{da:"r"},ProductLines:{da:"r"},ShoppingCart:{da:"r"}},mt:{Prepare:{},FindCountry:{ps:{"CountryName":{pt:"i"}}},FindProduct:{ps:{"ID":{pt:"i"}}},FindProductLine:{ps:{"ID":{pt:"i"}}},FindProductCategory:{ps:{"ID":{pt:"i"}}}},ev:{Prepared:{}},co:function(){cO.aN.call(this);var f=this.aF("XDTOOL_4",Fd);var C0=this.cR("GPRODUCTS","PRIM_ACOL");var C1=this.cR("GPRODUCTCATEGORIES","PRIM_ACOL");
var C2=this.cR("GPRODUCTLINES","PRIM_ACOL");var C3=this.cR("GCOUNTRIES","PRIM_ACOL");var C4=this.cR("GSHOPPINGCART","XDTOO_10");var C5=this.cR("GPREPARED","PRIM_BOLN");C0.setCollects("XDTOOL_6");C0.iC();C1.setCollects("XDTOOL_7");C1.iC();C2.setCollects("XDTOOL_8");C2.iC();C3.setCollects("XDTOO_24");C3.iC();C4.iC();C5.iC();C0.aLF({"XSPRDID":f.F2,"XSPRDCTID":f.F4,"XSPRDLNID":f.F3,"XSPRDDSC":f.F5,"XSPRDMDL":f.F6,"XSPRDPRC":f.F7,"XSPRDDTL":f.F8,"XSPRDSHP":f.F9,"XSPRDSTS":f.F10,"XSPRDTAX":f.F11,"XSPRODIMG":f.F12});
C1.aLF({"XSPRDCTID":f.F4,"XSPRDCTDS":f.F13,"XSPRDLNID":f.F3});C2.aLF({"XSPRDLNID":f.F3,"XSPRDLNDS":f.F14});C3.aLF({"XSCNTRYNM":f.F1});}});cO.mthPREPARE=function(){var m=this.REF,r=l.mR(this,cO,"Prepare",21),mth=r;var C0=r.cDR("LOADSTARTUPDATA","XDTOOLSER","LOADSTARTUPDATA");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=21;{r.ln=25;C0.mthEXECUTEASYNC({},{LIST:{"PRODUCTCATEGORYS":m.GPRODUCTCATEGORIES,"PRODUCTLINES":m.GPRODUCTLINES,"PRODUCTS":m.GPRODUCTS,"COUNTRIES":m.GCOUNTRIES}});}r.ln=34;r.e();function e1(sender,Ps)
{var r=l.eR(this,cO,"#LoadStartUpData.Completed",27,mth);r.ln=27;{r.ln=29;m.GPREPARED.set(true);r.ln=30;this.fE("PREPARED");}r.ln=32;r.e();}};cO.mthFINDCOUNTRY=function(p0){var m=this.REF,r=l.mR(this,cO,"FindCountry",36);var P0=r.cPF("COUNTRYNAME",Fd.F1.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=36;{r.ln=40;{var l1=m.GCOUNTRIES.cI();while(l1.step()){var COUNTRY=r.sR("COUNTRY",l1.item());r.ln=42;if(l.s.ne(l.s.UpperCase(COUNTRY.getCOUNTRYNAME()),l.s.UpperCase(P0.get()))){continue;}r.ln=44;P1=r.sR("P1",COUNTRY);
r.ln=46;break;r.ln=48;}l1.end();r.dR("COUNTRY");}}r.ln=50;return r.rR(P1);};cO.mthFINDPRODUCT=function(p0){var m=this.REF,r=l.mR(this,cO,"FindProduct",52);var P0=r.cPF("ID",Fd.F2.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=52;{r.ln=56;{var l1=m.GPRODUCTS.cI();while(l1.step()){var PRODUCT=r.sR("PRODUCT",l1.item());r.ln=58;if(l.s.ne(PRODUCT.getID(),P0.get())){continue;}r.ln=60;P1=r.sR("P1",PRODUCT);r.ln=62;break;r.ln=64;}l1.end();r.dR("PRODUCT");}}r.ln=66;return r.rR(P1);};cO.mthFINDPRODUCTLINE=function(p0)
{var m=this.REF,r=l.mR(this,cO,"FindProductLine",68);var P0=r.cPF("ID",Fd.F3.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=68;{r.ln=72;{var l1=m.GPRODUCTLINES.cI();while(l1.step()){var PRODUCTLINE=r.sR("PRODUCTLINE",l1.item());r.ln=74;if(l.s.ne(PRODUCTLINE.getID(),P0.get())){continue;}r.ln=76;P1=r.sR("P1",PRODUCTLINE);r.ln=78;break;r.ln=80;}l1.end();r.dR("PRODUCTLINE");}}r.ln=82;return r.rR(P1);};cO.mthFINDPRODUCTCATEGORY=function(p0){var m=this.REF,r=l.mR(this,cO,"FindProductCategory",84);var P0=r.cPF("ID",Fd.F4.Dc);
var P1=r.cPD("RESULT");P0.set(p0);r.ln=84;{r.ln=88;{var l1=m.GPRODUCTCATEGORIES.cI();while(l1.step()){var PRODUCTCATEGORY=r.sR("PRODUCTCATEGORY",l1.item());r.ln=90;if(l.s.ne(PRODUCTCATEGORY.getID(),P0.get())){continue;}r.ln=92;P1=r.sR("P1",PRODUCTCATEGORY);r.ln=94;break;r.ln=96;}l1.end();r.dR("PRODUCTCATEGORY");}}r.ln=98;return r.rR(P1);};cO.getISPREPARED=function(){return this.REF.GPREPARED.get();};cO.getCOUNTRIES=function(){return this.REF.GCOUNTRIES;};cO.getPRODUCTS=function(){return this.REF.GPRODUCTS;
};cO.getPRODUCTCATEGORIES=function(){return this.REF.GPRODUCTCATEGORIES;};cO.getPRODUCTLINES=function(){return this.REF.GPRODUCTLINES;};cO.getSHOPPINGCART=function(){return this.REF.GSHOPPINGCART;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSCNTRYNM"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSPRDID"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XSPRDLNID"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSPRDCTID"});}},{rc:["XDTOO_10"],rp:["PRIM_OBJT","PRIM_ACOL","PRIM_BOLN","PRIM_WEB.DataRequest","PRIM_FLD"]});