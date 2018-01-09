<?xml version="1.0" encoding="UTF-8"?><!--(c) 2012, 2017 LANSA--><!--jqMobile Standard textarea--><!--$Workfile:: std_textarea.xsl $--><!--$UTCDate:: 2017-01-21 03:33:21Z $--><!--$Revision:: 23 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd msxsl exslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:exslt="http://exslt.org/common" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:template name="std_textarea"><xsl:param name="name"></xsl:param><xsl:param name="id" select="concat($lweb_WRName,'_',$name)"></xsl:param><xsl:param name="value"></xsl:param><xsl:param name="addErrorDiv" select="true()"></xsl:param><xsl:param name="autofocus" select="false()"></xsl:param><xsl:param name="class"></xsl:param><xsl:param name="corners" select="true()"></xsl:param><xsl:param name="cols"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="displayMode"></xsl:param><xsl:param name="fieldContainWrapper" select="true()"></xsl:param><xsl:param name="form"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="hideLabel" select="false()"></xsl:param><xsl:param name="label"></xsl:param><xsl:param name="maxlength"></xsl:param><xsl:param name="mini" select="false()"></xsl:param><xsl:param name="placeholder" select="$label"></xsl:param><xsl:param name="rdmlxDataType"></xsl:param><xsl:param name="readonly" select="false()"></xsl:param><xsl:param name="required" select="false()"></xsl:param><xsl:param name="rows"></xsl:param><xsl:param name="style"></xsl:param><xsl:param name="swatch" select="''"></xsl:param><xsl:param name="tabindex"></xsl:param><xsl:param name="title"></xsl:param><xsl:param name="wrap" select="'soft'"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><xsl:variable name="theFieldElement"><xsl:if test="$displayMode != 'hidden'"><label for="{$id}"><xsl:if test="$hideLabel"><xsl:attribute name="class">ui-hidden-accessible</xsl:attribute></xsl:if><xsl:value-of select="concat($label, ' ')"></xsl:value-of></label><xsl:choose><xsl:when test="$displayMode='output'"><span data-lstdField="{$name}" data-lstdValue="{$value}"><xsl:attribute name="class"><xsl:value-of select="concat('lstd_Field ',$class)"></xsl:value-of></xsl:attribute><xsl:if test="$title"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$style"><xsl:attribute name="data-style"><xsl:value-of select="$style"></xsl:value-of></xsl:attribute></xsl:if><xsl:value-of select="$value"></xsl:value-of><xsl:comment /></span></xsl:when><xsl:otherwise><textarea id="{$id}" name="{$name}" data-lstddatatype="{$rdmlxDataType}" data-enhanced="true"><xsl:attribute name="class"><xsl:text>lstd_field ui-input-text ui-shadow-inset ui-textinput-autogrow</xsl:text><xsl:choose><xsl:when test="$swatch != ''"> ui-body-<xsl:value-of select="$swatch"></xsl:value-of></xsl:when><xsl:otherwise> ui-body-inherit</xsl:otherwise></xsl:choose><xsl:if test="$mini"> ui-mini</xsl:if><xsl:if test="$corners"> ui-corner-all</xsl:if><xsl:if test="$class != ''"><xsl:value-of select="concat(' ',$class)"></xsl:value-of></xsl:if></xsl:attribute><xsl:if test="$disabled"><xsl:attribute name="disabled">disabled</xsl:attribute></xsl:if><xsl:if test="$readonly"><xsl:attribute name="readonly">readonly</xsl:attribute></xsl:if><xsl:if test="$value"><xsl:attribute name="value"><xsl:value-of select="$value"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$placeholder"><xsl:attribute name="placeholder"><xsl:value-of select="$placeholder"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$autofocus"><xsl:attribute name="disabled">autofocus</xsl:attribute></xsl:if><xsl:if test="$maxlength"><xsl:attribute name="maxlength"><xsl:value-of select="$maxlength"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$required"><xsl:attribute name="required">required</xsl:attribute></xsl:if><xsl:if test="$rows"><xsl:attribute name="rows"><xsl:value-of select="$rows"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$cols"><xsl:attribute name="cols"><xsl:value-of select="$cols"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$wrap"><xsl:attribute name="wrap"><xsl:value-of select="$wrap"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$form"><xsl:attribute name="form"><xsl:value-of select="$form"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$tabindex"><xsl:attribute name="tabindex"><xsl:value-of select="$tabindex"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$title"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$style"><xsl:attribute name="data-style"><xsl:value-of select="$style"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$mini"><xsl:attribute name="data-mini">true</xsl:attribute></xsl:if><xsl:if test="$swatch != ''"><xsl:attribute name="data-theme"><xsl:value-of select="$swatch"></xsl:value-of></xsl:attribute></xsl:if><xsl:value-of select="$value"></xsl:value-of><xsl:text>&#13;</xsl:text></textarea><xsl:if test="$addErrorDiv"><div id="{$id}_error" class="lstdFieldError"><xsl:value-of select="' '"></xsl:value-of><xsl:comment /></div></xsl:if></xsl:otherwise></xsl:choose></xsl:if></xsl:variable><xsl:choose><xsl:when test="$displayMode='hidden'"><textarea id="{$id}" name="{$name}" class="lstd_Field lstd_hidden" data-lstddatatype="{$rdmlxDataType}"><xsl:if test="$form"><xsl:attribute name="form"><xsl:value-of select="$form"></xsl:value-of></xsl:attribute></xsl:if><xsl:value-of select="$value"></xsl:value-of><xsl:text>&#13;</xsl:text></textarea></xsl:when><xsl:when test="$fieldContainWrapper = false()"><xsl:choose><xsl:when test="$lweb_is_msxsl_nodeset"><xsl:copy-of select="msxsl:node-set($theFieldElement)"></xsl:copy-of></xsl:when><xsl:when test="$lweb_is_exslt_nodeset"><xsl:copy-of select="exslt:node-set($theFieldElement)"></xsl:copy-of></xsl:when></xsl:choose></xsl:when><xsl:otherwise><div class="ui-field-contain"><xsl:if test="$hideLabel"><xsl:attribute name="class">ui-hide-label</xsl:attribute></xsl:if><xsl:choose><xsl:when test="$lweb_is_msxsl_nodeset"><xsl:copy-of select="msxsl:node-set($theFieldElement)"></xsl:copy-of></xsl:when><xsl:when test="$lweb_is_exslt_nodeset"><xsl:copy-of select="exslt:node-set($theFieldElement)"></xsl:copy-of></xsl:when></xsl:choose><xsl:comment /></div></xsl:otherwise></xsl:choose></xsl:if></xsl:template></xsl:transform>