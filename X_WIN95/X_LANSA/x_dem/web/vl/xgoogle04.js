﻿LANSA.addComponent({id:"XGOOGLE04",nm:"xGoogleColumnChart",ot:"ww",tp:"Widget",de:"Google Column Chart",tl:14000101,cl:14020001},function(l,oI,u){var fF=function(wP){wP.fireItemGotSelection=function(pIndex,pCaption,pValue){var eP=l.ePs();eP.aI("INDEX",pIndex);eP.aS("CAPTION",pCaption);eP.aD("VALUE",pValue);l.fE(this,"ITEMGOTSELECTION",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'visualization', '1', { packages:["corechart"], callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_DataTable = new google.visualization.DataTable();
this.m_DataTable.addColumn( 'string', '' );
this.m_DataTable.addColumn( 'number', '' );
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.m_ParentDiv = parentDiv;
this.m_Chart = new google.visualization.ColumnChart( parentDiv );
this.AttachEvents();
this.DrawChart();
}
PROTOTYPE.onSizeChanged = function()
{
this.DrawChart();
}
PROTOTYPE.getTitle = function()
{
return this.m_Title;
}
PROTOTYPE.setTitle = function( strTitle )
{
this.m_Title = strTitle;
this.DrawChart();
}
PROTOTYPE.getHorizontalCaption = function()
{
return this.m_HorizontalCaption;
}
PROTOTYPE.setHorizontalCaption = function( strValue )
{
this.m_HorizontalCaption = strValue;
}
PROTOTYPE.getVerticalCaption = function()
{
return this.m_VerticalCaption;
}
PROTOTYPE.setVerticalCaption = function( strValue )
{
this.m_VerticalCaption = strValue;
}
PROTOTYPE.getValueCaption = function()
{
return this.m_ValueCaption;
}
PROTOTYPE.setValueCaption = function( strValue )
{
this.m_ValueCaption = strValue;
this.m_DataTable.setColumnLabel( 1, this.m_ValueCaption );
this.DrawChart();
}
PROTOTYPE.Add = function( decValue, strCaption )
{
this.m_DataTable.addRow( [ strCaption, decValue ] );
this.DrawChart();
}
PROTOTYPE.Clear = function()
{
this.m_DataTable.removeRows( 0, this.m_DataTable.getNumberOfRows() );
this.DrawChart();
}
PROTOTYPE.DrawChart = function()
{
if ( this.m_Chart )
{
this.m_Chart.draw( this.m_DataTable,
{
title: this.m_Title,
width: this.m_ParentDiv.offsetWidth,
height: this.m_ParentDiv.offsetHeight,
bar: {groupWidth: "98%"},
legend: { position: "none" },
backgroundColor: 'transparent',
hAxis: {
title: this.m_HorizontalCaption
},
vAxis: {
title: this.m_VerticalCaption
}
});
}
}
PROTOTYPE.AttachEvents = function()
{
var pThis = this;
google.visualization.events.addListener( this.m_Chart, 'select', function()
{
var item = pThis.m_Chart.getSelection()[0];
if ( item )
{
pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
}
});
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE04",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setTITLE("");this.setHORIZONTALCAPTION("");this.setVERTICALCAPTION("");this.setVALUECAPTION("");}});cO.getTITLE=function(){return l.tS(this.get("Title"));};cO.setTITLE=function(v){this.set("Title",l.tS(v));};cO.getHORIZONTALCAPTION=function(){return l.tS(this.get("HorizontalCaption"));};cO.setHORIZONTALCAPTION=function(v){this.set("HorizontalCaption",l.tS(v));
};cO.getVERTICALCAPTION=function(){return l.tS(this.get("VerticalCaption"));};cO.setVERTICALCAPTION=function(v){this.set("VerticalCaption",l.tS(v));};cO.getVALUECAPTION=function(){return l.tS(this.get("ValueCaption"));};cO.setVALUECAPTION=function(v){this.set("ValueCaption",l.tS(v));};cO.mthADD=function(P0,P1){this.invoke("Add",[l.tN(P0),l.tS(P1)]);};cO.mthCLEAR=function(){this.invoke("Clear");};},{rp:["PRIM_WDGT.Control"]});