﻿LANSA.addComponent({id:"XCONNEC01",nm:"xConnectorSystemValue",ot:"ww",tp:"Widget",de:"Get a system value",tl:14000101,cl:14020001},function(l,oI,u){var fF=function(wP){wP.fireReadCompleted=function(pStatus,pValue,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("VALUE",pValue);eP.aS("ERROR",pError);l.fE(this,"READCOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.Caption = 'My Widget';
}
PROTOTYPE.getHostEndPoint = function()
{
return this.m_HostEndPoint;
}
PROTOTYPE.setHostEndPoint = function( strValue )
{
this.m_HostEndPoint = strValue;
}
PROTOTYPE.getHostUserid = function()
{
return this.m_HostUserid;
}
PROTOTYPE.setHostUserid = function( strValue )
{
this.m_HostUserid = strValue;
}
PROTOTYPE.getHostPassword = function()
{
return this.m_HostPassword;
}
PROTOTYPE.setHostPassword = function( strValue )
{
this.m_HostPassword = strValue;
}
PROTOTYPE.getValue = function()
{
return this.m_Value;
}
PROTOTYPE.setValue = function( strValue )
{
this.m_Value = strValue;
}
PROTOTYPE.getError = function()
{
return this.m_Error;
}
PROTOTYPE.setError = function( strValue )
{
this.m_Error = strValue;
}
PROTOTYPE.Read = function( systemValue, asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
var service = {
connector: "systemvalue",
object: systemValue };
this.m_Value = "";
this.m_Error = "";
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
pThis.fireReadCompleted( "OK", response.value, "" );
}
else if ( response.type == "error" )
{
pThis.fireReadCompleted( "ER", "", CollateErrorMessage( response ) );
}
else
{
pThis.fireReadCompleted( "ER", "", "" );
}
});
return "OK";
}
else
{
var response = LUICONNECTOR.execute( host, service, null ) ;
return this.ProcessReadValue( response );
}
}
PROTOTYPE.ProcessReadValue = function( response )
{
var status = "ER";
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
this.m_Value = response.value;
status = "OK";
}
else if ( response.type == "error" )
{
this.m_Error = CollateErrorMessage( response );
}
return status;
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC01",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-connector-min.js").get(),l.cRc("lui-encrypt-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");this.setVALUE("");this.setERROR("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));};cO.getHOSTUSERID=function()
{return l.tS(this.get("HostUserid"));};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.getVALUE=function(){return l.tS(this.get("Value"));};cO.setVALUE=function(v){this.set("Value",l.tS(v));};cO.getERROR=function(){return l.tS(this.get("Error"));};cO.setERROR=function(v){this.set("Error",l.tS(v));};cO.mthREAD=function(P0,P1){return l.tS(this.invoke("Read",[l.tS(P0),l.tB(P1)])).toUpperCase();
};},{rp:["PRIM_WDGT.Object"]});