﻿LANSA.addComponent({id:"XDEVICE05",nm:"xDeviceFileWrite",ot:"ww",tp:"Widget",de:"Write to a local file",tl:14000101,cl:14020001},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var
widgetStatus = WIDGET.Completed;
if ( !window.LONGRANGE )
{
widgetStatus = WIDGET.Loading;
var
previousOnLongRangeReady = window.onLongRangeReady;
window.onLongRangeReady = function()
{
WIDGET.Finalize();
if ( previousOnLongRangeReady )
{
previousOnLongRangeReady();
}
}
}
PROTOTYPE.onCreateInstance = function()
{
}
PROTOTYPE.getFileName = function()
{
return this.m_FileName;
}
PROTOTYPE.setFileName = function( strValue )
{
this.m_FileName = strValue;
}
PROTOTYPE.getFileType = function()
{
var
fileType = "";
switch (this.m_FileType)
{
case "text":
fileType = "TEXT";
break;
case "binary":
fileType = "BIN";
break;
}
return fileType;
}
PROTOTYPE.setFileType = function( enumValue )
{
switch (enumValue)
{
case "TEXT":
this.m_FileType = "text";
break;
case "BIN":
this.m_FileType = "binary";
break;
default:
this.m_FileType = "text";
}
}
PROTOTYPE.getFileEncoding = function()
{
var
fileEncoding = "";
switch (this.m_FileType)
{
case "utf8":
fileEncoding = "UTF8";
break;
case "utf16":
fileEncoding = "UTF16";
break;
case "ascii":
fileEncoding = "ASCII";
break;
}
return fileEncoding
}
PROTOTYPE.setFileEncoding = function( enumValue )
{
switch (enumValue)
{
case "UTF8":
this.m_FileEncoding = "utf8";
break;
case "UTF16":
this.m_FileEncoding = "utf16";
break;
case "ASCII":
this.m_FileEncoding = "ascii";
break;
default:
this.m_FileEncoding = "utf8";
}
}
PROTOTYPE.getDataEncoding = function()
{
var
dataEncoding = "";
switch (this.m_DataEncoding)
{
case "none":
dataEncoding = "NONE";
break;
case "base64":
dataEncoding = "BASE64";
break;
case "urlencode":
dataEncoding = "URL";
break;
}
return dataEncoding
}
PROTOTYPE.setDataEncoding = function( enumValue )
{
switch (enumValue)
{
case "NONE":
this.m_DataEncoding = "none";
break;
case "BASE64":
this.m_DataEncoding = "base64";
break;
case "URL":
this.m_DataEncoding = "urlencode";
break;
default:
this.m_DataEncoding = "none";
}
}
PROTOTYPE.getData = function()
{
return this.m_Data;
}
PROTOTYPE.setData = function( strValue )
{
this.m_Data = strValue;
}
PROTOTYPE.Write = function()
{
var pThis = this;
var options = { };
options.path = this.m_FileName;
options.type = this.m_FileType;
if ( this.m_FileType == "TEXT" )
{
options.fileEncoding = this.m_FileEncoding;
}
options.data = this.m_Data;
options.dataEncoding = this.m_DataEncoding;
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.LocalFiles.writeFile(options);
return "OK";
}
function LongRangeToVLStatusCodes( lrStatus )
{
var
vlStatus = "";
if ( lrStatus == LONGRANGE.Status.Ok )
{
vlStatus = "OK";
}
else if ( lrStatus == LONGRANGE.Status.Cancelled )
{
vlStatus = "CAN";
}
else if ( lrStatus == LONGRANGE.Status.Error )
{
vlStatus = "ER";
}
else
{
vlStatus = "UNK";
}
return vlStatus;
}
return widgetStatus;
}
;
l.rWg({nm:"XDEVICE05",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFILENAME("");this.setFILETYPE("TEXT");this.setFILEENCODING("UTF8");this.setDATAENCODING("NONE");this.setDATA("");}});cO.getFILENAME=function(){return l.tS(this.get("FileName"));};cO.setFILENAME=function(v){this.set("FileName",l.tS(v));};cO.getFILETYPE=function(){return l.tS(this.get("FileType")).toUpperCase();};cO.setFILETYPE=function(v){this.set("FileType",l.tS(v).toUpperCase());
};cO.getFILEENCODING=function(){return l.tS(this.get("FileEncoding")).toUpperCase();};cO.setFILEENCODING=function(v){this.set("FileEncoding",l.tS(v).toUpperCase());};cO.getDATAENCODING=function(){return l.tS(this.get("DataEncoding")).toUpperCase();};cO.setDATAENCODING=function(v){this.set("DataEncoding",l.tS(v).toUpperCase());};cO.getDATA=function(){return l.tS(this.get("Data"));};cO.setDATA=function(v){this.set("Data",l.tS(v));};cO.mthWRITE=function(){return l.tS(this.invoke("Write"));};},{rp:["PRIM_WDGT.Object"]
});