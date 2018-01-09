<?xml version="1.0" encoding="UTF-8"?><!--(c) 2014, 2017 LANSA--><!--jqMobile Standard button--><!--$Workfile:: std_button_s1.xsl $--><!--$UTCDate:: 2017-01-20 05:16:23Z $--><!--$Revision:: 8 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd xslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xslt="http://www.lansa.com/2002/XSL/Transform-Alias" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:namespace-alias stylesheet-prefix="xslt" result-prefix="xsl"></xsl:namespace-alias><lxml:data><lxml:internal_id id="std_button_s1"></lxml:internal_id><lxml:json>[]</lxml:json></lxml:data><xsl:template name="std_button_s1"><xsl:param name="name" select="generate-id()"></xsl:param><xsl:param name="id" select="concat($lweb_WRName,'_',$name)"></xsl:param><xsl:param name="value" select="'Submit'"></xsl:param><xsl:param name="autofocus" select="false()"></xsl:param><xsl:param name="caption" select="'Submit'"></xsl:param><xsl:param name="class" select="''"></xsl:param><xsl:param name="corners" select="true()"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="form"></xsl:param><xsl:param name="formaction"></xsl:param><xsl:param name="formenctype"></xsl:param><xsl:param name="formmethod"></xsl:param><xsl:param name="formnovalidate" select="false()"></xsl:param><xsl:param name="formtarget"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="icon" select="''"></xsl:param><xsl:param name="iconPosition" select="''"></xsl:param><xsl:param name="iconShadow" select="false()"></xsl:param><xsl:param name="inline" select="false()"></xsl:param><xsl:param name="mini" select="false()"></xsl:param><xsl:param name="onClickExtraFields" select="document('')/*/lxml:data/lxml:json[not(@id)]"></xsl:param><xsl:param name="onClickWamName" select="$lweb_WAMName"></xsl:param><xsl:param name="onClickWrName"></xsl:param><xsl:param name="presubmitJS"></xsl:param><xsl:param name="shadow" select="true()"></xsl:param><xsl:param name="style"></xsl:param><xsl:param name="swatch" select="''"></xsl:param><xsl:param name="tabindex"></xsl:param><xsl:param name="title"></xsl:param><xsl:param name="transition" select="'slide'"></xsl:param><xsl:param name="transitionDirection" select="'forward'"></xsl:param><xsl:param name="type" select="'submit'"></xsl:param><xsl:param name="useAjax" select="true()"></xsl:param><xsl:param name="internal_id" select="document('')/*/lxml:data/lxml:internal_id[@id='std_button_s1']"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><button id="{$id}" type="{$type}" value="{$value}" data-transition="{$transition}" data-lansaxmlcolumnid="{descendant-or-self::lxml:column/@id}" data-enhanced="true"><xsl:attribute name="class"><xsl:text>lstd_button ui-btn</xsl:text><xsl:if test="$inline"> ui-btn-inline</xsl:if><xsl:if test="$mini"> ui-mini</xsl:if><xsl:if test="$corners"> ui-corner-all</xsl:if><xsl:if test="$swatch!= ''"> ui-btn-<xsl:value-of select="$swatch"></xsl:value-of></xsl:if><xsl:if test="$shadow"> ui-shadow</xsl:if><xsl:if test="$iconShadow"> ui-shadow-icon</xsl:if><xsl:if test="$icon != ''"><xsl:text> ui-icon-</xsl:text><xsl:value-of select="$icon"></xsl:value-of><xsl:text></xsl:text><xsl:choose><xsl:when test="$iconPosition = ''"> ui-btn-icon-left</xsl:when><xsl:otherwise> ui-btn-icon-<xsl:value-of select="$iconPosition"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:if><xsl:if test="$class != ''"><xsl:value-of select="$class"></xsl:value-of></xsl:if></xsl:attribute><xsl:if test="$onClickExtraFields"><xsl:attribute name="data-lansaextrafields"><xsl:value-of select="$onClickExtraFields" disable-output-escaping="yes"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$name != ''"><xsl:attribute name="name"><xsl:value-of select="$name"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$autofocus"><xsl:attribute name="autofocus">autofocus</xsl:attribute></xsl:if><xsl:if test="$disabled"><xsl:attribute name="disabled">disabled</xsl:attribute></xsl:if><xsl:if test="$tabindex"><xsl:attribute name="tabindex"><xsl:value-of select="$tabindex"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$title"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$style"><xsl:attribute name="data-style"><xsl:value-of select="$style"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$form"><xsl:attribute name="form"><xsl:value-of select="$form"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$onClickWamName and $onClickWrName"><xsl:attribute name="formaction"><xsl:value-of select="$lweb_context/lxml:action-request"></xsl:value-of><xsl:text>?wam=</xsl:text><xsl:value-of select="$onClickWamName"></xsl:value-of><xsl:text>&amp;webrtn=</xsl:text><xsl:value-of select="$onClickWrName"></xsl:value-of><xsl:text>&amp;ml=</xsl:text><xsl:value-of select="$lweb_context/lxml:technology-service"></xsl:value-of><xsl:text>&amp;part=</xsl:text><xsl:value-of select="$lweb_context/lxml:partition"></xsl:value-of><xsl:text>&amp;lang=</xsl:text><xsl:value-of select="$lweb_context/lxml:language"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$formaction"><xsl:attribute name="formaction"><xsl:value-of select="$formaction"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$formenctype"><xsl:attribute name="formenctype"><xsl:value-of select="$formenctype"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$formmethod"><xsl:attribute name="formmethod"><xsl:value-of select="$formmethod"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$formnovalidate"><xsl:attribute name="formnovalidate">formnovalidate</xsl:attribute></xsl:if><xsl:if test="$formtarget"><xsl:attribute name="formtarget"><xsl:value-of select="$formtarget"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$transitionDirection != 'forward'"><xsl:attribute name="data-direction"><xsl:value-of select="$transitionDirection"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="not($useAjax) or $lweb_has_csp_nonce"><xsl:attribute name="data-ajax">false</xsl:attribute></xsl:if><xsl:value-of select="$caption"></xsl:value-of><xsl:comment /></button><xsl:if test="$presubmitJS"><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[</xsl:text>
Lstd.Weblets.scripts['<xsl:value-of select="$id"></xsl:value-of>'] = function() { <xsl:value-of select="$presubmitJS"></xsl:value-of>; };
<xsl:text disable-output-escaping="yes">//]]&gt;</xsl:text></script></xsl:if></xsl:if></xsl:template></xsl:transform>