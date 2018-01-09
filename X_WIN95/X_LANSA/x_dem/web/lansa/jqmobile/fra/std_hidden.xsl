<?xml version="1.0" encoding="UTF-8"?><!--(c) 2012, 2017 LANSA--><!--jqMobile Standard Hidden Fields--><!--$Workfile:: std_hidden.xsl $--><!--$UTCDate:: 2017-01-17 03:15:54Z $--><!--$Revision:: 14 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_variables.xsl"></xsl:import><xsl:template name="hidden_fields"><div class="lstd_hidden"><input id="{$lweb_WRName}__SERVICENAME" name="_SERVICENAME" type="hidden" value="{$lweb_context/lxml:service-name}" /><input id="{$lweb_WRName}__WEBAPP" name="_WEBAPP" type="hidden" value="{$lweb_WAMName}" /><input id="{$lweb_WRName}__WEBROUTINE" name="_WEBROUTINE" type="hidden" value="{$lweb_WRName}" /><input id="{$lweb_WRName}__PARTITION" name="_PARTITION" type="hidden" value="{$lweb_context/lxml:partition}" /><input id="{$lweb_WRName}__LANGUAGE" name="_LANGUAGE" type="hidden" value="{$lweb_part_language}" /><xsl:if test="$lweb_context/lxml:session-key-method = 'hidden'"><input type="hidden" id="{$lweb_WRName}__SESSIONKEY" name="_SESSIONKEY" value="{$lweb_context/lxml:session-key}" /></xsl:if><input id="{$lweb_WRName}__LW3TRCID" name="_LW3TRCID" type="hidden" value="{key('option', 'trace')}" /><div class="Lstd.Fields"><xsl:for-each select="/lxml:data/lxml:fields/lxml:field"><span data-lstdfield="{@name}"><xsl:value-of select="lxml:value"></xsl:value-of><xsl:comment /></span></xsl:for-each><xsl:comment /></div></div><xsl:if test="not($lweb_design_mode)"><div class="hiddenContent"><xsl:apply-templates select="*" mode="content.hidden"></xsl:apply-templates><xsl:comment /></div><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[
</xsl:text>Lstd.registerLists([<xsl:text></xsl:text><xsl:for-each select="/lxml:data/lxml:lists/lxml:json-list"><xsl:value-of select="."></xsl:value-of>, </xsl:for-each><xsl:text>null]);</xsl:text><xsl:text disable-output-escaping="yes">//]]&gt;</xsl:text></script></xsl:if></xsl:template><xsl:template name="hidden_content_design.private"></xsl:template><xsl:template match="/lxml:data" mode="content.hidden"><xsl:comment> Hidden Content </xsl:comment></xsl:template></xsl:transform>