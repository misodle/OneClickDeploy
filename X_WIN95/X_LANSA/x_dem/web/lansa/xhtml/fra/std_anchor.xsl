<?xml version="1.0" encoding="UTF-8"?><!--(c) 2003, 2017 LANSA--><!--XHTML Selectable Anchor (Hyperlink)--><!--$Workfile:: std_anchor.xsl $--><!--$UTCDate:: 2017-03-31 05:21:18Z $--><!--$Revision:: 24 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd xslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xslt="http://www.lansa.com/2002/XSL/Transform-Alias" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:namespace-alias stylesheet-prefix="xslt" result-prefix="xsl"></xsl:namespace-alias><xsl:template name="std_anchor"><xsl:param name="name"></xsl:param><xsl:param name="value"></xsl:param><xsl:param name="currentrowhfield" select="'STDROWNUM'"></xsl:param><xsl:param name="currentrownumval" select="position()"></xsl:param><xsl:param name="reentryfield" select="'STDRENTRY'"></xsl:param><xsl:param name="reentryvalue" select="'D'"></xsl:param><xsl:param name="hide_if" select="false()"></xsl:param><xsl:param name="formname" select="'LANSA'"></xsl:param><xsl:param name="url">#</xsl:param><xsl:param name="on_click_wamname" select="$lweb_WAMName"></xsl:param><xsl:param name="on_click_wrname"></xsl:param><xsl:param name="protocol"></xsl:param><xsl:param name="show_in_new_window" select="false()"></xsl:param><xsl:param name="target_window_name"><xsl:if test="$show_in_new_window">_blank</xsl:if></xsl:param><xsl:param name="pos_absolute_design"></xsl:param><xsl:param name="width_design"></xsl:param><xsl:param name="relative-image-path" select="''"></xsl:param><xsl:param name="absolute-image-path"><xsl:if test="$relative-image-path != ''"><xsl:value-of select="$lweb_images_path"></xsl:value-of><xsl:text>/</xsl:text><xsl:value-of select="$relative-image-path"></xsl:value-of></xsl:if></xsl:param><xsl:param name="class" select="'std_anchor'"></xsl:param><xsl:param name="mouseover_class"></xsl:param><xsl:param name="text_class" select="'std_anchor_text'"></xsl:param><xsl:param name="presubmit_js"></xsl:param><xsl:param name="confirm" select="false()"></xsl:param><xsl:param name="confirmText"></xsl:param><xsl:param name="tab_index"></xsl:param><xsl:param name="vf_wamevent" select="''"></xsl:param><xsl:if test="not($hide_if) or $lweb_design_mode"><span class="ui-widget"><a href="{$url}" class="std_weblet" data-weblet="std_anchor" data-form="{$formname}" data-currentrowhfield="{$currentrowhfield}" data-currentrownumval="{$currentrownumval}"><xsl:if test="$on_click_wrname!=''"><xsl:attribute name="data-wam"><xsl:value-of select="$on_click_wamname"></xsl:value-of></xsl:attribute><xsl:attribute name="data-webroutine"><xsl:value-of select="$on_click_wrname"></xsl:value-of></xsl:attribute><xsl:if test="$confirm"><xsl:attribute name="data-confirm">true</xsl:attribute><xsl:attribute name="data-confirmtext"><xsl:value-of select="$confirmText"></xsl:value-of></xsl:attribute></xsl:if></xsl:if><xsl:if test="$protocol != ''"><xsl:attribute name="data-protocol"><xsl:value-of select="$protocol"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$target_window_name != ''"><xsl:attribute name="data-target-window"><xsl:value-of select="$target_window_name"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="($pos_absolute_design != '') or ($width_design != '')"><xsl:attribute name="data-style"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_anchor.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute_design"></xsl:with-param><xsl:with-param name="width" select="$width_design"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if><xsl:if test="$url!='' and $on_click_wrname='' and $target_window_name != ''"><xsl:attribute name="target"><xsl:value-of select="$target_window_name"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$name != ''"><xsl:attribute name="id"><xsl:value-of select="$name"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$class != ''"><xsl:attribute name="class">std_weblet <xsl:value-of select="$class"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$mouseover_class != ''"><xsl:attribute name="data-hover-class"><xsl:value-of select="$mouseover_class"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$vf_wamevent != ''"><xsl:attribute name="data-vf-wamevent"><xsl:value-of select="$vf_wamevent"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$absolute-image-path != ''"><img class="std_anchor" src="{$absolute-image-path}" /></xsl:if><xsl:if test="$reentryfield != ''"><span class="hidden__"><span class="reentryfield"><xsl:value-of select="$reentryfield"></xsl:value-of><xsl:comment /></span><span class="reentryvalue"><xsl:value-of select="$reentryvalue"></xsl:value-of><xsl:comment /></span></span></xsl:if><span><xsl:if test="$text_class != ''"><xsl:attribute name="class"><xsl:value-of select="$text_class"></xsl:value-of></xsl:attribute></xsl:if><xsl:choose><xsl:when test="$lweb_design_mode and $value = '' and $absolute-image-path = ''"><xsl:value-of select="'Hyperlink'"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$value"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:comment /></span></a><xsl:if test="$presubmit_js != ''"><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[
</xsl:text><xsl:text>Lstd.Weblets.stdAnchor.presubmit["</xsl:text><xsl:value-of select="$name"></xsl:value-of><xsl:text>"] = function() {</xsl:text><xsl:value-of select="$presubmit_js"></xsl:value-of><xsl:text disable-output-escaping="yes">}; //]]&gt;</xsl:text><xsl:text>&#32;</xsl:text></script></xsl:if></span></xsl:if></xsl:template></xsl:transform>