﻿LANSA.addComponent({id:"VF_UI036O",ot:"rp",tp:"Reusable Part",de:"\\OC=Simple group box replacement",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{Caption:{da:"na"}},co:function(){cO.aN.call(this);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");var C3=this.cR("HEADERPANEL","PRIM_LABL");var C4=this.cR("HEADING2STYLE","PRIM_VS","Style");var C5=this.cR("HEADING2FOREGROUND","PRIM_VS","SolidBrush");var C6=this.cR("HEADING2BACKGROUND","PRIM_VS","SolidBrush");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setManage(C3);C2.setParent(C1);C2.setAttachment("TOP");C2.iC();C3.setParent(this);C3.setDisplayPosition(1);C3.setTabPosition(1);C3.setTabStop(false);C3.setLeft(0);C3.setTop(0);C3.setWidth(305);C3.setHeight(18);C3.setVerticalAlignment("CENTER");C3.setStyle(C4);C3.setCaption("Test Title");C3.iC();C4.setForegroundBrush(C5);C4.setFontSize(120);C4.setFontUnits("PERCENT");C4.setBackgroundBrush(C6);C4.setCornerBottomLeft(5);C4.setCornerBottomRight(5);
C4.setCornerTopLeft(5);C4.setCornerTopRight(5);C4.iC();C5.setColor("THEME900");C5.iC();C6.setColor("THEME50");C6.iC();this.setDisplayPosition(1);this.setHeight(120);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(305);this.setLayoutManager(C1);}});cO.mthSET_CAPTION=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_Caption",21);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=21;{r.ln=24;m.HEADERPANEL.setCaption(l.add(" ",P0.get()));}r.ln=26;r.e();};cO.setCAPTION=function(v)
{this.mthSET_CAPTION(v);};},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_VS.Style","PRIM_VS.SolidBrush"]});