﻿LANSA.addComponent({id:"DF_DET52O",ot:"rp",tp:"Reusable Part",de:"\\OC=Switch and Signal 1 - Example 2",tl:14020001},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",co:function(){cO.aN.call(this);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("ATTACHITEM3","PRIM_ATLI");var C4=this.cR("ATTACHITEM4","PRIM_ATLI");var C5=this.cR("ATTACHITEM5","PRIM_ATLI");var C6=this.cR("ATTACHITEM7","PRIM_ATLI");var C7=this.cR("ATTACHITEM8","PRIM_ATLI");
var C8=this.cR("ATTACHITEM9","PRIM_ATLI");var C9=this.cR("BUTTONSPANEL","PRIM_PANL");var C10=this.cR("SWITCH1","PRIM_PHBN");var C11=this.cR("SWITCH2","PRIM_PHBN");var C12=this.cR("SWITCH3","PRIM_PHBN");var C13=this.cR("SWITCH4","PRIM_PHBN");var C14=this.cR("SWITCH5","PRIM_PHBN");var C15=this.cR("SWITCH7","PRIM_PHBN");var C16=this.cR("SWITCH8","PRIM_PHBN");var C17=this.cR("SWITCH9","PRIM_PHBN");C0.iC();C1.setManage(C10);C1.setParent(C0);C1.setAttachment("TOP");C1.setMarginTop(6);C1.iC();C2.setManage(C11);
C2.setParent(C0);C2.setAttachment("TOP");C2.setMarginTop(6);C2.iC();C3.setManage(C12);C3.setParent(C0);C3.setAttachment("TOP");C3.setMarginTop(6);C3.iC();C4.setManage(C13);C4.setParent(C0);C4.setAttachment("TOP");C4.setMarginTop(6);C4.iC();C5.setManage(C14);C5.setParent(C0);C5.setAttachment("TOP");C5.setMarginTop(6);C5.iC();C6.setManage(C15);C6.setParent(C0);C6.setAttachment("TOP");C6.setMarginTop(6);C6.iC();C7.setManage(C16);C7.setParent(C0);C7.setAttachment("TOP");C7.setMarginTop(6);C7.iC();C8.setManage(C17);
C8.setParent(C0);C8.setAttachment("TOP");C8.setMarginTop(6);C8.iC();C9.setLayoutManager(C0);C9.setParent(this);C9.setDisplayPosition(1);C9.setTabPosition(1);C9.setWidth(287);C9.setHeight(289);C9.setTop(0);C9.setLeft(6);C9.iC();C10.setCaption("Switch to Framework Tab");C10.setDisplayPosition(1);C10.setLeft(0);C10.setTabPosition(1);C10.setTop(6);C10.setWidth(287);C10.setParent(C9);C10.iC();C11.setCaption("Switch to 'Our Business' Application");C11.setDisplayPosition(2);C11.setLeft(0);C11.setParent(C9);
C11.setTabPosition(2);C11.setTop(37);C11.setWidth(287);C11.iC();C12.setCaption("Switch to 'Our Resources' Application");C12.setDisplayPosition(3);C12.setLeft(0);C12.setParent(C9);C12.setTabPosition(3);C12.setTop(68);C12.setWidth(287);C12.iC();C13.setCaption("Switch to 'Customers' Business Object");C13.setDisplayPosition(4);C13.setLeft(0);C13.setParent(C9);C13.setTabPosition(4);C13.setTop(99);C13.setWidth(287);C13.iC();C14.setCaption("Switch to 'People' Business Object");C14.setDisplayPosition(5);
C14.setLeft(0);C14.setParent(C9);C14.setTabPosition(5);C14.setTop(130);C14.setWidth(287);C14.iC();C15.setCaption("Switch to create a new 'Thing'");C15.setDisplayPosition(6);C15.setLeft(0);C15.setParent(C9);C15.setTabPosition(6);C15.setTop(161);C15.setWidth(287);C15.iC();C16.setCaption("Switch to a selected application");C16.setDisplayPosition(7);C16.setLeft(0);C16.setParent(C9);C16.setTabPosition(7);C16.setTop(192);C16.setWidth(287);C16.iC();C17.setCaption("Switch to a selected business object");
C17.setDisplayPosition(8);C17.setLeft(0);C17.setParent(C9);C17.setTabPosition(8);C17.setTop(223);C17.setWidth(287);C17.iC();C10.aH("CLICK",this,e1);C11.aH("CLICK",this,e2);C12.aH("CLICK",this,e3);C13.aH("CLICK",this,e4);C14.aH("CLICK",this,e5);C15.aH("CLICK",this,e6);C16.aH("CLICK",this,e7);C17.aH("CLICK",this,e8);this.setHeight(425);this.setWidth(393);this.setLayoutManager(null);}});var cA=cO.aN.prototype;function e1(sender,Ps){var r=l.eR(this,cO,"#Switch1.Click",45);r.ln=45;{r.ln=47;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("VLFONE_DEMONSTRATION",u,u,u,this,u,u);
}r.ln=49;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Switch2.Click",53);r.ln=53;{r.ln=55;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("APP_BUSINESS",u,u,u,this,u,u);}r.ln=57;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Switch3.Click",61);r.ln=61;{r.ln=63;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("APP_RESOURCES",u,u,u,this,u,u);}r.ln=65;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Switch4.Click",69);r.ln=69;{r.ln=71;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("CUSTOMERS",u,u,u,this,u,u);
}r.ln=73;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Switch5.Click",77);r.ln=77;{r.ln=79;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("PEOPLE",u,u,u,this,u,u);}r.ln=81;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Switch7.Click",85);r.ln=85;{r.ln=87;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("THINGS",u,"COMMAND_NEW",u,this,u,u);}r.ln=89;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#Switch8.Click",93);r.ln=93;{r.ln=95;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("*SELECT_APPLICATION",u,u,u,this,u,u);
}r.ln=97;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#Switch9.Click",101);r.ln=101;{r.ln=103;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("*SELECT_BUSINESSOBJECT",u,u,u,this,u,u);}r.ln=105;r.e();};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_PHBN"]});