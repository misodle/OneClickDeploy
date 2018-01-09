<?xml version="1.0" encoding="UTF-8"?><!--(c) 2015, 2017 LANSA--><!--XHTML Google Map--><!--$Workfile:: std_gmap.xsl $--><!--$UTCDate:: 2017-01-23 05:10:17Z $--><!--$Revision:: 12 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd msxsl exslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:exslt="http://exslt.org/common" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:template name="std_gmap"><xsl:param name="name"></xsl:param><xsl:param name="mapTypeId" select="'ROADMAP'"></xsl:param><xsl:param name="center" select="''"></xsl:param><xsl:param name="zoom" select="''"></xsl:param><xsl:param name="zoomControl" select="true()"></xsl:param><xsl:param name="draggable" select="true()"></xsl:param><xsl:param name="scrollWheel" select="false()"></xsl:param><xsl:param name="mapTypeControl" select="true()"></xsl:param><xsl:param name="streetViewControl" select="true()"></xsl:param><xsl:param name="bgColor" select="'Theme'"></xsl:param><xsl:param name="mapStyle" select="'Default'"></xsl:param><xsl:param name="markCenter" select="false()"></xsl:param><xsl:param name="centerTitle"></xsl:param><xsl:param name="markerList" select="''"></xsl:param><xsl:param name="markerDescriptor" select="''"></xsl:param><xsl:param name="markerIcon" select="'Default'"></xsl:param><xsl:param name="markerAnimation" select="'NONE'"></xsl:param><xsl:param name="markerListPosition" select="'none'"></xsl:param><xsl:param name="markerListRowClass" select="''"></xsl:param><xsl:param name="hide_if" select="false()"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="width" select="'Auto'"></xsl:param><xsl:param name="height" select="'Auto'"></xsl:param><xsl:param name="key" select="''"></xsl:param><xsl:if test="not($hide_if) or $lweb_design_mode"><div><xsl:if test="$markerListPosition = 'above' or $markerListPosition = 'left'"><div class="lstd-gmap-markerlist-{$markerListPosition}"><table id="{$name}-markerlist" class="lstd-gmap-markerlist"><xsl:comment></xsl:comment></table></div></xsl:if><div id="{$name}" data-map-type="{$mapTypeId}" data-map-center="{$center}" data-zoom="{$zoom}" data-zoomcontrol="{$zoomControl}" data-draggable="{$draggable}" data-scrollwheel="{$scrollWheel}" data-maptypecontrol="{$mapTypeControl}" data-streetview="{$streetViewControl}" data-markcenter="{$markCenter}"><xsl:attribute name="class"><xsl:text>lstd-gmap ui-widget</xsl:text><xsl:if test="$markerListPosition = 'right'"> lstd-gmap-left</xsl:if><xsl:if test="$markerListPosition = 'left'"> lstd-gmap-right</xsl:if></xsl:attribute><xsl:if test="$key != ''"><xsl:attribute name="data-key"><xsl:value-of select="$key"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$centerTitle != ''"><xsl:attribute name="data-centertitle"><xsl:value-of select="$centerTitle"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$markerList != ''"><xsl:attribute name="data-markerlist"><xsl:value-of select="$markerList"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$markerAnimation != 'NONE'"><xsl:attribute name="data-markeranimation"><xsl:value-of select="$markerAnimation"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$markerListPosition != 'none'"><xsl:attribute name="data-showmarkerlist">true</xsl:attribute><xsl:attribute name="data-markerdescriptor"><xsl:value-of select="$markerDescriptor"></xsl:value-of></xsl:attribute><xsl:if test="$markerListRowClass != ''"><xsl:attribute name="data-markerlistrowclass"><xsl:value-of select="$markerListRowClass"></xsl:value-of></xsl:attribute></xsl:if></xsl:if><xsl:if test="$markerIcon != 'Default'"><xsl:attribute name="data-markericon"><xsl:value-of select="$markerIcon"></xsl:value-of></xsl:attribute></xsl:if><xsl:variable name="size"><xsl:if test="$width != 'Auto'">width:<xsl:value-of select="$width"></xsl:value-of>px;</xsl:if><xsl:if test="$height != 'Auto'">height:<xsl:value-of select="$height"></xsl:value-of>px;</xsl:if></xsl:variable><xsl:if test="($size != '') or ($pos_absolute != '')"><xsl:attribute name="data-style"><xsl:value-of select="$size"></xsl:value-of><xsl:if test="$pos_absolute != ''"><xsl:value-of select="$pos_absolute"></xsl:value-of></xsl:if></xsl:attribute></xsl:if><xsl:if test="$bgColor != 'Theme'"><xsl:attribute name="data-bgcolor"><xsl:value-of select="$bgColor"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$mapStyle != 'Default'"><xsl:attribute name="data-mapstyle"><xsl:value-of select="$mapStyle"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$size != ''"><xsl:attribute name="data-size"><xsl:value-of select="$size"></xsl:value-of></xsl:attribute></xsl:if><xsl:comment /></div><xsl:if test="$markerListPosition = 'below' or $markerListPosition = 'right'"><div class="lstd-gmap-markerlist-{$markerListPosition}"><table id="{$name}-markerlist" class="lstd-gmap-markerlist"><xsl:comment></xsl:comment></table></div></xsl:if></div></xsl:if></xsl:template></xsl:transform>