<?xml version="1.0" encoding="UTF-8"?><!--(c) 2003, 2017 LANSA--><!--jqMobile Standard utility templates--><!--$Workfile:: std_util.xsl $--><!--$UTCDate:: 2017-01-16 23:36:39Z $--><!--$Revision:: 10 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml tsml wd msxsl" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:tsml="http://www.lansa.com/2002/XML/Generation-Metadata" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:template name="make_size_style.private"><xsl:param name="width"></xsl:param><xsl:param name="height"></xsl:param><xsl:param name="alt_width"></xsl:param><xsl:param name="alt_height"></xsl:param><xsl:param name="default_width" select="'0pt'"></xsl:param><xsl:param name="default_height" select="'0pt'"></xsl:param><xsl:param name="in_attribute" select="true()"></xsl:param><xsl:param name="caller_name"></xsl:param><xsl:variable name="style_width"><xsl:choose><xsl:when test="$width != '' and $width != $default_width"><xsl:value-of select="$width"></xsl:value-of></xsl:when><xsl:otherwise><xsl:if test="$alt_width != ''"><xsl:value-of select="$alt_width"></xsl:value-of></xsl:if></xsl:otherwise></xsl:choose></xsl:variable><xsl:variable name="style_height"><xsl:choose><xsl:when test="$height != '' and $height != $default_height"><xsl:value-of select="$height"></xsl:value-of></xsl:when><xsl:otherwise><xsl:if test="$alt_height != ''"><xsl:value-of select="$alt_height"></xsl:value-of></xsl:if></xsl:otherwise></xsl:choose></xsl:variable><xsl:variable name="size"><xsl:choose><xsl:when test="$style_width != ''"><xsl:text>width:</xsl:text><xsl:choose><xsl:when test="$lweb_design_mode and contains($style_width, '%') and $caller_name != $lweb_context/@design"><xsl:value-of select="'100%'"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$style_width"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:when></xsl:choose><xsl:choose><xsl:when test="$style_height != ''"><xsl:text>height:</xsl:text><xsl:choose><xsl:when test="$lweb_design_mode and contains($style_height, '%') and $caller_name != $lweb_context/@design"><xsl:value-of select="'100%'"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$style_height"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:when></xsl:choose></xsl:variable><xsl:if test="$size != ''"><xsl:choose><xsl:when test="$in_attribute"><xsl:attribute name="style"><xsl:value-of select="$size"></xsl:value-of></xsl:attribute></xsl:when><xsl:otherwise><xsl:value-of select="$size"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:if></xsl:template><xsl:template name="make_pos_style.private"><xsl:param name="pos_absolute"></xsl:param><xsl:param name="alt_pos"></xsl:param><xsl:param name="default_pos"></xsl:param><xsl:param name="in_attribute" select="true()"></xsl:param><xsl:param name="caller_name"></xsl:param><xsl:variable name="style_pos"><xsl:choose><xsl:when test="$pos_absolute!= '' and $pos_absolute!= $default_pos"><xsl:value-of select="$pos_absolute"></xsl:value-of></xsl:when><xsl:otherwise><xsl:if test="$alt_pos != ''"><xsl:value-of select="$alt_pos"></xsl:value-of></xsl:if></xsl:otherwise></xsl:choose></xsl:variable><xsl:if test="$style_pos != ''"><xsl:choose><xsl:when test="$in_attribute"><xsl:attribute name="style"><xsl:value-of select="$style_pos"></xsl:value-of></xsl:attribute></xsl:when><xsl:otherwise><xsl:value-of select="$style_pos"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:if></xsl:template><xsl:template name="make_size_and_pos_style.private"><xsl:param name="width"></xsl:param><xsl:param name="height"></xsl:param><xsl:param name="alt_width"></xsl:param><xsl:param name="alt_height"></xsl:param><xsl:param name="default_width" select="'0pt'"></xsl:param><xsl:param name="default_height" select="'0pt'"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="alt_pos"></xsl:param><xsl:param name="default_pos"></xsl:param><xsl:param name="in_attribute" select="true()"></xsl:param><xsl:param name="caller_name"></xsl:param><xsl:variable name="size"><xsl:call-template name="make_size_style.private"><xsl:with-param name="width" select="$width"></xsl:with-param><xsl:with-param name="height" select="$height"></xsl:with-param><xsl:with-param name="alt_width" select="$alt_width"></xsl:with-param><xsl:with-param name="alt_height" select="$alt_height"></xsl:with-param><xsl:with-param name="default_width" select="$default_width"></xsl:with-param><xsl:with-param name="default_height" select="$default_height"></xsl:with-param><xsl:with-param name="in_attribute" select="false()"></xsl:with-param><xsl:with-param name="caller_name" select="$caller_name"></xsl:with-param></xsl:call-template></xsl:variable><xsl:variable name="pos"><xsl:call-template name="make_pos_style.private"><xsl:with-param name="pos_absolute" select="$pos_absolute"></xsl:with-param><xsl:with-param name="alt_pos" select="$alt_pos"></xsl:with-param><xsl:with-param name="default_pos" select="$default_pos"></xsl:with-param><xsl:with-param name="in_attribute" select="false()"></xsl:with-param><xsl:with-param name="caller_name" select="$caller_name"></xsl:with-param></xsl:call-template></xsl:variable><xsl:if test="$size != '' or $pos != ''"><xsl:choose><xsl:when test="$in_attribute"><xsl:attribute name="style"><xsl:value-of select="concat($size, $pos, ';')"></xsl:value-of></xsl:attribute></xsl:when><xsl:otherwise><xsl:value-of select="concat($size, $pos, ';')"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:if></xsl:template><xsl:template name="make_size_and_pos_style_v2.private"><xsl:param name="width"></xsl:param><xsl:param name="height"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="caller_name"></xsl:param><xsl:if test="$pos_absolute and $pos_absolute != ''"><xsl:value-of select="$pos_absolute"></xsl:value-of><xsl:text>;</xsl:text></xsl:if><xsl:if test="$width and $width != '0pt'"><xsl:text>width:</xsl:text><xsl:choose><xsl:when test="$lweb_design_mode and contains($width, '%') and $caller_name != $lweb_context/@design"><xsl:value-of select="'100%'"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$width"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:if><xsl:if test="$height and $height != '0pt'"><xsl:text>height:</xsl:text><xsl:choose><xsl:when test="$lweb_design_mode and contains($height, '%') and $caller_name != $lweb_context/@design"><xsl:value-of select="'100%'"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$height"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:if></xsl:template><xsl:template name="expand_mtxt_in_xml_items.private"><xsl:param name="items"></xsl:param><xsl:for-each select="$items"><xsl:choose><xsl:when test="self::lxml:variable"><xsl:variable name="var_name" select="@name"></xsl:variable><xsl:value-of select="$lweb_variables[@name=$var_name]"></xsl:value-of></xsl:when><xsl:when test="self::lxml:field-value"><xsl:variable name="fld_name" select="@name"></xsl:variable><xsl:value-of select="$lweb_data_node/lxml:fields/lxml:field[@name=$fld_name]/lxml:value"></xsl:value-of></xsl:when><xsl:when test="self::xsl:value-of"><xsl:variable name="select" select="translate(@select, ' ', '')"></xsl:variable><xsl:variable name="prefix" select="&quot;key('variable','&quot;"></xsl:variable><xsl:variable name="suffix" select="&quot;')&quot;"></xsl:variable><xsl:variable name="var_name" select="substring-before(substring-after($select, $prefix), $suffix)"></xsl:variable><xsl:value-of select="$lweb_variables[@name=$var_name]"></xsl:value-of></xsl:when><xsl:otherwise><xsl:copy><xsl:for-each select="@*"><xsl:copy></xsl:copy></xsl:for-each><xsl:call-template name="expand_mtxt_in_xml_items.private"><xsl:with-param name="items" select="node()"></xsl:with-param></xsl:call-template></xsl:copy></xsl:otherwise></xsl:choose></xsl:for-each></xsl:template><xsl:template name="css_class_from_tsml_format.private"><xsl:param name="format"></xsl:param><xsl:variable name="format_type" select="$format/tsml:type/text()"></xsl:variable><xsl:choose><xsl:when test="($format_type = 'alpha') or ($format_type = 'char') or ($format_type = 'varchar')"><xsl:choose><xsl:when test="$format/tsml:input-case = 'uppercase'">utext</xsl:when><xsl:when test="$format/tsml:input-case = 'mixedcase'">text</xsl:when><xsl:when test="$format/tsml:input-case = 'lowercase'">ltext</xsl:when><xsl:otherwise>text</xsl:otherwise></xsl:choose></xsl:when><xsl:when test="($format_type = 'packed') or ($format_type = 'signed') or ($format_type = 'integer') or ($format_type = 'float')">number</xsl:when><xsl:when test="($format_type = 'date') or ($format_type = 'time') or ($format_type = 'datetime')">number</xsl:when><xsl:when test="$format_type = 'boolean'">ltext</xsl:when><xsl:otherwise>text</xsl:otherwise></xsl:choose><xsl:if test="$format/tsml:display-hi = 'true'">
			bold
		</xsl:if></xsl:template><xsl:template name="JSEncode.private"><xsl:param name="theStr" select="''"></xsl:param><xsl:variable name="step1"><xsl:choose><xsl:when test="contains($theStr, '\')"><xsl:call-template name="JSEncode2.private"><xsl:with-param name="theStr" select="$theStr"></xsl:with-param><xsl:with-param name="theChr" select="'\'"></xsl:with-param><xsl:with-param name="replaceWith">" + g_bs + "</xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select="$theStr"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:variable><xsl:choose><xsl:when test="contains($step1, '&quot;')"><xsl:call-template name="JSEncode2.private"><xsl:with-param name="theStr" select="$step1"></xsl:with-param><xsl:with-param name="theChr" select="'&quot;'"></xsl:with-param><xsl:with-param name="replaceWith">" + g_dq + "</xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select="$step1"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:template><xsl:template name="JSEncode2.private"><xsl:param name="theStr" select="''"></xsl:param><xsl:param name="theChr" select="''"></xsl:param><xsl:param name="replaceWith" select="''"></xsl:param><xsl:choose><xsl:when test="not($theStr)"></xsl:when><xsl:when test="not($theChr)"></xsl:when><xsl:when test="contains($theStr, $theChr)"><xsl:value-of select="concat(substring-before($theStr, $theChr), $replaceWith)"></xsl:value-of><xsl:call-template name="JSEncode2.private"><xsl:with-param name="theStr" select="substring-after($theStr, $theChr)"></xsl:with-param><xsl:with-param name="theChr" select="$theChr"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select="$theStr"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:template><xsl:template name="std_list_to_json.private"><xsl:param name="listname"></xsl:param><xsl:text>{"list":{"</xsl:text><xsl:value-of select="$listname"></xsl:value-of><xsl:text>":{"header":[</xsl:text><xsl:for-each select="key('list',$listname)/lxml:list-header/lxml:header"><xsl:text>{name: "</xsl:text><xsl:value-of select="@name"></xsl:value-of><xsl:text>",</xsl:text><xsl:for-each select="lxml:*"><xsl:text>"</xsl:text><xsl:value-of select="name()"></xsl:value-of><xsl:text>": </xsl:text><xsl:call-template name="std_escape-string.private"><xsl:with-param name="s" select="."></xsl:with-param></xsl:call-template><xsl:if test="position() != last()"><xsl:text>,</xsl:text></xsl:if></xsl:for-each><xsl:text>}</xsl:text><xsl:if test="position() != last()"><xsl:text>,</xsl:text></xsl:if></xsl:for-each><xsl:text>], entries: [</xsl:text><xsl:for-each select="key('list',$listname)/lxml:list-entries/lxml:entry"><xsl:text>[</xsl:text><xsl:for-each select="lxml:column"><xsl:call-template name="std_escape-string.private"><xsl:with-param name="s" select="."></xsl:with-param></xsl:call-template><xsl:if test="position() != last()"><xsl:text>,</xsl:text></xsl:if></xsl:for-each><xsl:text>]</xsl:text><xsl:if test="position() != last()"><xsl:text>,</xsl:text></xsl:if></xsl:for-each><xsl:text>]}}}</xsl:text></xsl:template><xsl:template name="std_escape-string.private"><xsl:param name="s"></xsl:param><xsl:text>"</xsl:text><xsl:call-template name="std_escape-bs-string.private"><xsl:with-param name="s" select="$s"></xsl:with-param></xsl:call-template><xsl:text>"</xsl:text></xsl:template><xsl:template name="std_escape-bs-string.private"><xsl:param name="s"></xsl:param><xsl:choose><xsl:when test="contains($s,'\')"><xsl:call-template name="std_escape-quot-string.private"><xsl:with-param name="s" select="concat(substring-before($s,'\'),'\\')"></xsl:with-param></xsl:call-template><xsl:call-template name="std_escape-bs-string.private"><xsl:with-param name="s" select="substring-after($s,'\')"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="std_escape-quot-string.private"><xsl:with-param name="s" select="$s"></xsl:with-param></xsl:call-template></xsl:otherwise></xsl:choose></xsl:template><xsl:template name="std_escape-quot-string.private"><xsl:param name="s"></xsl:param><xsl:choose><xsl:when test="contains($s,'&quot;')"><xsl:call-template name="std_encode-string.private"><xsl:with-param name="s" select="concat(substring-before($s,'&quot;'),'\&quot;')"></xsl:with-param></xsl:call-template><xsl:call-template name="std_escape-quot-string.private"><xsl:with-param name="s" select="substring-after($s,'&quot;')"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="std_encode-string.private"><xsl:with-param name="s" select="$s"></xsl:with-param></xsl:call-template></xsl:otherwise></xsl:choose></xsl:template><xsl:template name="apply-csp-nonce.private"><xsl:if test="$lweb_has_csp_nonce"><xsl:attribute name="nonce"><xsl:value-of select="$lweb_csp_nonce"></xsl:value-of></xsl:attribute></xsl:if></xsl:template><xsl:template name="std_encode-string.private"><xsl:param name="s"></xsl:param><xsl:choose><xsl:when test="contains($s,' ')"><xsl:call-template name="std_encode-string.private"><xsl:with-param name="s" select="concat(substring-before($s,' '),'\t',substring-after($s,' '))"></xsl:with-param></xsl:call-template></xsl:when><xsl:when test="contains($s,'&#xA;')"><xsl:call-template name="std_encode-string.private"><xsl:with-param name="s" select="concat(substring-before($s,'&#xA;'),'\n',substring-after($s,'&#xA;'))"></xsl:with-param></xsl:call-template></xsl:when><xsl:when test="contains($s,'&#xA;')"><xsl:call-template name="std_encode-string.private"><xsl:with-param name="s" select="concat(substring-before($s,'&#xA;'),'\r',substring-after($s,'&#xA;'))"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select="$s"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:template><xsl:template name="std_escape-jqm-selector.private"><xsl:param name="s"></xsl:param><xsl:choose><xsl:when test="contains($s,'.')"><xsl:text></xsl:text><xsl:value-of select="substring-before($s, '.')"></xsl:value-of>\.<xsl:text></xsl:text><xsl:call-template name="std_escape-jqm-selector.private"><xsl:with-param name="s" select="substring-after($s, '.')"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select="$s"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:template></xsl:transform>