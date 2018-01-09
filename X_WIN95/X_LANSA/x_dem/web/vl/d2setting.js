// ---------------------
// -- View: D2SETTING --
// ---------------------
LANSA.addComponent(
{
   id: "D2SETTING", 
   nm: "D2Settings", 
   ot: "wv", 
   tp: "View", 
   de: "Settings", 
   tl: 14020001
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_VIEW", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleRed) Normbackcolor(244:67:54)
         //
         var STYLERED = this.createReference( "STYLERED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StylePink) Normbackcolor(233:30:99)
         //
         var STYLEPINK = this.createReference( "STYLEPINK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StylePurple) Normbackcolor(156:39:176)
         //
         var STYLEPURPLE = this.createReference( "STYLEPURPLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleDeepPurple) Normbackcolor(103:58:183)
         //
         var STYLEDEEPPURPLE = this.createReference( "STYLEDEEPPURPLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleIndigo) Normbackcolor(63:81:181)
         //
         var STYLEINDIGO = this.createReference( "STYLEINDIGO", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleBlue) Normbackcolor(33:150:243)
         //
         var STYLEBLUE = this.createReference( "STYLEBLUE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleLightBlue) Normbackcolor(3:169:244)
         //
         var STYLELIGHTBLUE = this.createReference( "STYLELIGHTBLUE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleCyan) Normbackcolor(0:188:212)
         //
         var STYLECYAN = this.createReference( "STYLECYAN", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleTeal) Normbackcolor(0:150:136)
         //
         var STYLETEAL = this.createReference( "STYLETEAL", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleGreen) Normbackcolor(76:175:80)
         //
         var STYLEGREEN = this.createReference( "STYLEGREEN", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleLightGreen) Normbackcolor(139:195:74)
         //
         var STYLELIGHTGREEN = this.createReference( "STYLELIGHTGREEN", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleLime) Normbackcolor(205:220:57)
         //
         var STYLELIME = this.createReference( "STYLELIME", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleYellow) Normbackcolor(255:235:59)
         //
         var STYLEYELLOW = this.createReference( "STYLEYELLOW", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleAmber) Normbackcolor(255:193:7)
         //
         var STYLEAMBER = this.createReference( "STYLEAMBER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleOrange) Normbackcolor(255:152:0)
         //
         var STYLEORANGE = this.createReference( "STYLEORANGE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleDeepOrange) Normbackcolor(255:87:34)
         //
         var STYLEDEEPORANGE = this.createReference( "STYLEDEEPORANGE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow1) Displayposition(1) Parent(#LayoutMain)
         //
         var LAYOUTROW1 = this.createReference( "LAYOUTROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn1) Displayposition(1) Parent(#LayoutMain)
         //
         var LAYOUTCOLUMN1 = this.createReference( "LAYOUTCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#DarkBackgroundSwitch) Parent(#LayoutMain) Row(#LayoutRow1) Sizing(FitToWidth) Flow(Down)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#PanelThemeColors) Parent(#LayoutMain) Row(#LayoutRow1) Sizing(ContentHeightFitToWidth) Flow(Down) Marginleft(25) Marginright(25) Marginbottom(20)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#LabelTheme) Parent(#LayoutMain) Row(#LayoutRow1) Sizing(FitToWidth) Flow(Down)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_FWLM) Name(#FlowLayout1) Spacingitems(20)
         //
         var FLOWLAYOUT1 = this.createReference( "FLOWLAYOUT1", "PRIM_FWLM" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem3) Manage(#PanelRed) Parent(#FlowLayout1)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout2)
         //
         var LAYOUT2 = this.createReference( "LAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow2) Displayposition(1) Parent(#Layout2)
         //
         var LAYOUTROW2 = this.createReference( "LAYOUTROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn2) Displayposition(1) Parent(#Layout2)
         //
         var LAYOUTCOLUMN2 = this.createReference( "LAYOUTCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem4) Manage(#PanelPink) Parent(#FlowLayout1)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem5) Manage(#PanelPurple) Parent(#FlowLayout1)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem6) Manage(#PanelDeepPurple) Parent(#FlowLayout1)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem7) Manage(#PanelIndigo) Parent(#FlowLayout1)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem8) Manage(#PanelBlue) Parent(#FlowLayout1)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem9) Manage(#PanelLightBlue) Parent(#FlowLayout1)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem10) Manage(#PanelCyan) Parent(#FlowLayout1)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem11) Manage(#PanelTeal) Parent(#FlowLayout1)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem12) Manage(#PanelGreen) Parent(#FlowLayout1)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem13) Manage(#PanelLightGreen) Parent(#FlowLayout1)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem14) Manage(#PanelLime) Parent(#FlowLayout1)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem15) Manage(#PanelYellow) Parent(#FlowLayout1)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem16) Manage(#PanelAmber) Parent(#FlowLayout1)
         //
         var LAYOUTITEM16 = this.createReference( "LAYOUTITEM16", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem17) Manage(#PanelOrange) Parent(#FlowLayout1)
         //
         var LAYOUTITEM17 = this.createReference( "LAYOUTITEM17", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_FWLI) Name(#LayoutItem18) Manage(#PanelDeepOrange) Parent(#FlowLayout1)
         //
         var LAYOUTITEM18 = this.createReference( "LAYOUTITEM18", "PRIM_FWLI" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelThemeColors) Displayposition(2) Left(25) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(50) Width(935) Layoutmanager(#FlowLayout1) Height(110)
         //
         var PANELTHEMECOLORS = this.createReference( "PANELTHEMECOLORS", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelRed) Displayposition(1) Parent(#PanelThemeColors) Tabposition(16) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleRed) Left(0) Top(0)
         //
         var PANELRED = this.createReference( "PANELRED", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelPink) Displayposition(2) Left(70) Parent(#PanelThemeColors) Tabposition(15) Tabstop(False) Layoutmanager(#Layout2) Style(#StylePink) Top(0)
         //
         var PANELPINK = this.createReference( "PANELPINK", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelPurple) Displayposition(3) Left(140) Parent(#PanelThemeColors) Tabposition(14) Tabstop(False) Layoutmanager(#Layout2) Style(#StylePurple) Top(0)
         //
         var PANELPURPLE = this.createReference( "PANELPURPLE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelDeepPurple) Displayposition(4) Left(210) Parent(#PanelThemeColors) Tabposition(13) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleDeepPurple) Top(0)
         //
         var PANELDEEPPURPLE = this.createReference( "PANELDEEPPURPLE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelIndigo) Displayposition(5) Left(280) Parent(#PanelThemeColors) Tabposition(12) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleIndigo) Top(0)
         //
         var PANELINDIGO = this.createReference( "PANELINDIGO", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelBlue) Displayposition(6) Left(350) Parent(#PanelThemeColors) Tabposition(11) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleBlue) Top(0)
         //
         var PANELBLUE = this.createReference( "PANELBLUE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelLightBlue) Displayposition(7) Left(420) Parent(#PanelThemeColors) Tabposition(10) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleLightBlue) Top(0)
         //
         var PANELLIGHTBLUE = this.createReference( "PANELLIGHTBLUE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelCyan) Displayposition(8) Left(490) Parent(#PanelThemeColors) Tabposition(9) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleCyan) Top(0)
         //
         var PANELCYAN = this.createReference( "PANELCYAN", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#LabelTheme) Caption('Theme') Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(3) Top(0) Height(50) Paddingleft(25) Width(985)
         //
         var LABELTHEME = this.createReference( "LABELTHEME", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelTeal) Displayposition(9) Left(560) Parent(#PanelThemeColors) Tabposition(8) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleTeal) Top(0)
         //
         var PANELTEAL = this.createReference( "PANELTEAL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelGreen) Displayposition(10) Left(630) Parent(#PanelThemeColors) Tabposition(7) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleGreen) Top(0)
         //
         var PANELGREEN = this.createReference( "PANELGREEN", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelLightGreen) Displayposition(11) Left(700) Parent(#PanelThemeColors) Tabposition(6) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleLightGreen) Top(0)
         //
         var PANELLIGHTGREEN = this.createReference( "PANELLIGHTGREEN", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelLime) Displayposition(12) Left(770) Parent(#PanelThemeColors) Tabposition(5) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleLime) Top(0)
         //
         var PANELLIME = this.createReference( "PANELLIME", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelYellow) Displayposition(13) Left(840) Parent(#PanelThemeColors) Tabposition(4) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleYellow) Top(0)
         //
         var PANELYELLOW = this.createReference( "PANELYELLOW", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelAmber) Displayposition(14) Left(0) Parent(#PanelThemeColors) Tabposition(3) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleAmber) Top(60)
         //
         var PANELAMBER = this.createReference( "PANELAMBER", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelOrange) Displayposition(15) Left(70) Parent(#PanelThemeColors) Tabposition(2) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleOrange) Top(60)
         //
         var PANELORANGE = this.createReference( "PANELORANGE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelDeepOrange) Displayposition(16) Left(140) Parent(#PanelThemeColors) Tabposition(1) Tabstop(False) Layoutmanager(#Layout2) Style(#StyleDeepOrange) Top(60)
         //
         var PANELDEEPORANGE = this.createReference( "PANELDEEPORANGE", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Switch) Name(#DarkBackgroundSwitch) Caption('Dark background') Displayposition(3) Height(50) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Iconalignment(CenterRight) Width(985) Top(180) Themedrawstyle('BottomDivider+TopDivider') Paddingleft(25) Paddingright(25) Iconcolor(Theme500)
         //
         var DARKBACKGROUNDSWITCH = this.createReference( "DARKBACKGROUNDSWITCH", "PRIM_MD", "Switch" );

         // --------------------------
         // -- Initialize #STYLERED --
         // --------------------------
         STYLERED.setNormBackColor( "244:67:54" );
         STYLERED.initialize();

         // ---------------------------
         // -- Initialize #STYLEPINK --
         // ---------------------------
         STYLEPINK.setNormBackColor( "233:30:99" );
         STYLEPINK.initialize();

         // -----------------------------
         // -- Initialize #STYLEPURPLE --
         // -----------------------------
         STYLEPURPLE.setNormBackColor( "156:39:176" );
         STYLEPURPLE.initialize();

         // ---------------------------------
         // -- Initialize #STYLEDEEPPURPLE --
         // ---------------------------------
         STYLEDEEPPURPLE.setNormBackColor( "103:58:183" );
         STYLEDEEPPURPLE.initialize();

         // -----------------------------
         // -- Initialize #STYLEINDIGO --
         // -----------------------------
         STYLEINDIGO.setNormBackColor( "63:81:181" );
         STYLEINDIGO.initialize();

         // ---------------------------
         // -- Initialize #STYLEBLUE --
         // ---------------------------
         STYLEBLUE.setNormBackColor( "33:150:243" );
         STYLEBLUE.initialize();

         // --------------------------------
         // -- Initialize #STYLELIGHTBLUE --
         // --------------------------------
         STYLELIGHTBLUE.setNormBackColor( "3:169:244" );
         STYLELIGHTBLUE.initialize();

         // ---------------------------
         // -- Initialize #STYLECYAN --
         // ---------------------------
         STYLECYAN.setNormBackColor( "0:188:212" );
         STYLECYAN.initialize();

         // ---------------------------
         // -- Initialize #STYLETEAL --
         // ---------------------------
         STYLETEAL.setNormBackColor( "0:150:136" );
         STYLETEAL.initialize();

         // ----------------------------
         // -- Initialize #STYLEGREEN --
         // ----------------------------
         STYLEGREEN.setNormBackColor( "76:175:80" );
         STYLEGREEN.initialize();

         // ---------------------------------
         // -- Initialize #STYLELIGHTGREEN --
         // ---------------------------------
         STYLELIGHTGREEN.setNormBackColor( "139:195:74" );
         STYLELIGHTGREEN.initialize();

         // ---------------------------
         // -- Initialize #STYLELIME --
         // ---------------------------
         STYLELIME.setNormBackColor( "205:220:57" );
         STYLELIME.initialize();

         // -----------------------------
         // -- Initialize #STYLEYELLOW --
         // -----------------------------
         STYLEYELLOW.setNormBackColor( "255:235:59" );
         STYLEYELLOW.initialize();

         // ----------------------------
         // -- Initialize #STYLEAMBER --
         // ----------------------------
         STYLEAMBER.setNormBackColor( "255:193:7" );
         STYLEAMBER.initialize();

         // -----------------------------
         // -- Initialize #STYLEORANGE --
         // -----------------------------
         STYLEORANGE.setNormBackColor( "255:152:0" );
         STYLEORANGE.initialize();

         // ---------------------------------
         // -- Initialize #STYLEDEEPORANGE --
         // ---------------------------------
         STYLEDEEPORANGE.setNormBackColor( "255:87:34" );
         STYLEDEEPORANGE.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW1 --
         // ----------------------------
         LAYOUTROW1.setDisplayPosition( 1 );
         LAYOUTROW1.setParent( LAYOUTMAIN );
         LAYOUTROW1.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN1 --
         // -------------------------------
         LAYOUTCOLUMN1.setDisplayPosition( 1 );
         LAYOUTCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTCOLUMN1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM1.setManage( DARKBACKGROUNDSWITCH );
         LAYOUTITEM1.setParent( LAYOUTMAIN );
         LAYOUTITEM1.setRow( LAYOUTROW1 );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM2.setManage( PANELTHEMECOLORS );
         LAYOUTITEM2.setParent( LAYOUTMAIN );
         LAYOUTITEM2.setRow( LAYOUTROW1 );
         LAYOUTITEM2.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setMarginLeft( 25 );
         LAYOUTITEM2.setMarginRight( 25 );
         LAYOUTITEM2.setMarginBottom( 20 );
         LAYOUTITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM1 --
         // ---------------------------------
         LAYOUTMAINITEM1.setAlignment( "TOPCENTER" );
         LAYOUTMAINITEM1.setColumn( LAYOUTCOLUMN1 );
         LAYOUTMAINITEM1.setManage( LABELTHEME );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTROW1 );
         LAYOUTMAINITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM1.setFlow( "DOWN" );
         LAYOUTMAINITEM1.initialize();

         // -----------------------------
         // -- Initialize #FLOWLAYOUT1 --
         // -----------------------------
         FLOWLAYOUT1.setSpacingItems( 20 );
         FLOWLAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setManage( PANELRED );
         LAYOUTITEM3.setParent( FLOWLAYOUT1 );
         LAYOUTITEM3.initialize();

         // -------------------------
         // -- Initialize #LAYOUT2 --
         // -------------------------
         LAYOUT2.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW2 --
         // ----------------------------
         LAYOUTROW2.setDisplayPosition( 1 );
         LAYOUTROW2.setParent( LAYOUT2 );
         LAYOUTROW2.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN2 --
         // -------------------------------
         LAYOUTCOLUMN2.setDisplayPosition( 1 );
         LAYOUTCOLUMN2.setParent( LAYOUT2 );
         LAYOUTCOLUMN2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setManage( PANELPINK );
         LAYOUTITEM4.setParent( FLOWLAYOUT1 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setManage( PANELPURPLE );
         LAYOUTITEM5.setParent( FLOWLAYOUT1 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setManage( PANELDEEPPURPLE );
         LAYOUTITEM6.setParent( FLOWLAYOUT1 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setManage( PANELINDIGO );
         LAYOUTITEM7.setParent( FLOWLAYOUT1 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setManage( PANELBLUE );
         LAYOUTITEM8.setParent( FLOWLAYOUT1 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setManage( PANELLIGHTBLUE );
         LAYOUTITEM9.setParent( FLOWLAYOUT1 );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setManage( PANELCYAN );
         LAYOUTITEM10.setParent( FLOWLAYOUT1 );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setManage( PANELTEAL );
         LAYOUTITEM11.setParent( FLOWLAYOUT1 );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setManage( PANELGREEN );
         LAYOUTITEM12.setParent( FLOWLAYOUT1 );
         LAYOUTITEM12.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setManage( PANELLIGHTGREEN );
         LAYOUTITEM13.setParent( FLOWLAYOUT1 );
         LAYOUTITEM13.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setManage( PANELLIME );
         LAYOUTITEM14.setParent( FLOWLAYOUT1 );
         LAYOUTITEM14.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setManage( PANELYELLOW );
         LAYOUTITEM15.setParent( FLOWLAYOUT1 );
         LAYOUTITEM15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM16 --
         // ------------------------------
         LAYOUTITEM16.setManage( PANELAMBER );
         LAYOUTITEM16.setParent( FLOWLAYOUT1 );
         LAYOUTITEM16.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM17 --
         // ------------------------------
         LAYOUTITEM17.setManage( PANELORANGE );
         LAYOUTITEM17.setParent( FLOWLAYOUT1 );
         LAYOUTITEM17.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM18 --
         // ------------------------------
         LAYOUTITEM18.setManage( PANELDEEPORANGE );
         LAYOUTITEM18.setParent( FLOWLAYOUT1 );
         LAYOUTITEM18.initialize();

         // ----------------------------------
         // -- Initialize #PANELTHEMECOLORS --
         // ----------------------------------
         PANELTHEMECOLORS.setDisplayPosition( 2 );
         PANELTHEMECOLORS.setLeft( 25 );
         PANELTHEMECOLORS.setParent( this );
         PANELTHEMECOLORS.setTabPosition( 1 );
         PANELTHEMECOLORS.setTabStop( false );
         PANELTHEMECOLORS.setTop( 50 );
         PANELTHEMECOLORS.setWidth( 935 );
         PANELTHEMECOLORS.setLayoutManager( FLOWLAYOUT1 );
         PANELTHEMECOLORS.setHeight( 110 );
         PANELTHEMECOLORS.initialize();

         // --------------------------
         // -- Initialize #PANELRED --
         // --------------------------
         PANELRED.setDisplayPosition( 1 );
         PANELRED.setParent( PANELTHEMECOLORS );
         PANELRED.setTabPosition( 16 );
         PANELRED.setTabStop( false );
         PANELRED.setLayoutManager( LAYOUT2 );
         PANELRED.setStyle( STYLERED );
         PANELRED.setLeft( 0 );
         PANELRED.setTop( 0 );
         PANELRED.initialize();

         // ---------------------------
         // -- Initialize #PANELPINK --
         // ---------------------------
         PANELPINK.setDisplayPosition( 2 );
         PANELPINK.setLeft( 70 );
         PANELPINK.setParent( PANELTHEMECOLORS );
         PANELPINK.setTabPosition( 15 );
         PANELPINK.setTabStop( false );
         PANELPINK.setLayoutManager( LAYOUT2 );
         PANELPINK.setStyle( STYLEPINK );
         PANELPINK.setTop( 0 );
         PANELPINK.initialize();

         // -----------------------------
         // -- Initialize #PANELPURPLE --
         // -----------------------------
         PANELPURPLE.setDisplayPosition( 3 );
         PANELPURPLE.setLeft( 140 );
         PANELPURPLE.setParent( PANELTHEMECOLORS );
         PANELPURPLE.setTabPosition( 14 );
         PANELPURPLE.setTabStop( false );
         PANELPURPLE.setLayoutManager( LAYOUT2 );
         PANELPURPLE.setStyle( STYLEPURPLE );
         PANELPURPLE.setTop( 0 );
         PANELPURPLE.initialize();

         // ---------------------------------
         // -- Initialize #PANELDEEPPURPLE --
         // ---------------------------------
         PANELDEEPPURPLE.setDisplayPosition( 4 );
         PANELDEEPPURPLE.setLeft( 210 );
         PANELDEEPPURPLE.setParent( PANELTHEMECOLORS );
         PANELDEEPPURPLE.setTabPosition( 13 );
         PANELDEEPPURPLE.setTabStop( false );
         PANELDEEPPURPLE.setLayoutManager( LAYOUT2 );
         PANELDEEPPURPLE.setStyle( STYLEDEEPPURPLE );
         PANELDEEPPURPLE.setTop( 0 );
         PANELDEEPPURPLE.initialize();

         // -----------------------------
         // -- Initialize #PANELINDIGO --
         // -----------------------------
         PANELINDIGO.setDisplayPosition( 5 );
         PANELINDIGO.setLeft( 280 );
         PANELINDIGO.setParent( PANELTHEMECOLORS );
         PANELINDIGO.setTabPosition( 12 );
         PANELINDIGO.setTabStop( false );
         PANELINDIGO.setLayoutManager( LAYOUT2 );
         PANELINDIGO.setStyle( STYLEINDIGO );
         PANELINDIGO.setTop( 0 );
         PANELINDIGO.initialize();

         // ---------------------------
         // -- Initialize #PANELBLUE --
         // ---------------------------
         PANELBLUE.setDisplayPosition( 6 );
         PANELBLUE.setLeft( 350 );
         PANELBLUE.setParent( PANELTHEMECOLORS );
         PANELBLUE.setTabPosition( 11 );
         PANELBLUE.setTabStop( false );
         PANELBLUE.setLayoutManager( LAYOUT2 );
         PANELBLUE.setStyle( STYLEBLUE );
         PANELBLUE.setTop( 0 );
         PANELBLUE.initialize();

         // --------------------------------
         // -- Initialize #PANELLIGHTBLUE --
         // --------------------------------
         PANELLIGHTBLUE.setDisplayPosition( 7 );
         PANELLIGHTBLUE.setLeft( 420 );
         PANELLIGHTBLUE.setParent( PANELTHEMECOLORS );
         PANELLIGHTBLUE.setTabPosition( 10 );
         PANELLIGHTBLUE.setTabStop( false );
         PANELLIGHTBLUE.setLayoutManager( LAYOUT2 );
         PANELLIGHTBLUE.setStyle( STYLELIGHTBLUE );
         PANELLIGHTBLUE.setTop( 0 );
         PANELLIGHTBLUE.initialize();

         // ---------------------------
         // -- Initialize #PANELCYAN --
         // ---------------------------
         PANELCYAN.setDisplayPosition( 8 );
         PANELCYAN.setLeft( 490 );
         PANELCYAN.setParent( PANELTHEMECOLORS );
         PANELCYAN.setTabPosition( 9 );
         PANELCYAN.setTabStop( false );
         PANELCYAN.setLayoutManager( LAYOUT2 );
         PANELCYAN.setStyle( STYLECYAN );
         PANELCYAN.setTop( 0 );
         PANELCYAN.initialize();

         // ----------------------------
         // -- Initialize #LABELTHEME --
         // ----------------------------
         LABELTHEME.setCaption( "Theme" );
         LABELTHEME.setDisplayPosition( 1 );
         LABELTHEME.setLeft( 0 );
         LABELTHEME.setParent( this );
         LABELTHEME.setTabPosition( 3 );
         LABELTHEME.setTop( 0 );
         LABELTHEME.setHeight( 50 );
         LABELTHEME.setPaddingLeft( 25 );
         LABELTHEME.setWidth( 985 );
         LABELTHEME.initialize();

         // ---------------------------
         // -- Initialize #PANELTEAL --
         // ---------------------------
         PANELTEAL.setDisplayPosition( 9 );
         PANELTEAL.setLeft( 560 );
         PANELTEAL.setParent( PANELTHEMECOLORS );
         PANELTEAL.setTabPosition( 8 );
         PANELTEAL.setTabStop( false );
         PANELTEAL.setLayoutManager( LAYOUT2 );
         PANELTEAL.setStyle( STYLETEAL );
         PANELTEAL.setTop( 0 );
         PANELTEAL.initialize();

         // ----------------------------
         // -- Initialize #PANELGREEN --
         // ----------------------------
         PANELGREEN.setDisplayPosition( 10 );
         PANELGREEN.setLeft( 630 );
         PANELGREEN.setParent( PANELTHEMECOLORS );
         PANELGREEN.setTabPosition( 7 );
         PANELGREEN.setTabStop( false );
         PANELGREEN.setLayoutManager( LAYOUT2 );
         PANELGREEN.setStyle( STYLEGREEN );
         PANELGREEN.setTop( 0 );
         PANELGREEN.initialize();

         // ---------------------------------
         // -- Initialize #PANELLIGHTGREEN --
         // ---------------------------------
         PANELLIGHTGREEN.setDisplayPosition( 11 );
         PANELLIGHTGREEN.setLeft( 700 );
         PANELLIGHTGREEN.setParent( PANELTHEMECOLORS );
         PANELLIGHTGREEN.setTabPosition( 6 );
         PANELLIGHTGREEN.setTabStop( false );
         PANELLIGHTGREEN.setLayoutManager( LAYOUT2 );
         PANELLIGHTGREEN.setStyle( STYLELIGHTGREEN );
         PANELLIGHTGREEN.setTop( 0 );
         PANELLIGHTGREEN.initialize();

         // ---------------------------
         // -- Initialize #PANELLIME --
         // ---------------------------
         PANELLIME.setDisplayPosition( 12 );
         PANELLIME.setLeft( 770 );
         PANELLIME.setParent( PANELTHEMECOLORS );
         PANELLIME.setTabPosition( 5 );
         PANELLIME.setTabStop( false );
         PANELLIME.setLayoutManager( LAYOUT2 );
         PANELLIME.setStyle( STYLELIME );
         PANELLIME.setTop( 0 );
         PANELLIME.initialize();

         // -----------------------------
         // -- Initialize #PANELYELLOW --
         // -----------------------------
         PANELYELLOW.setDisplayPosition( 13 );
         PANELYELLOW.setLeft( 840 );
         PANELYELLOW.setParent( PANELTHEMECOLORS );
         PANELYELLOW.setTabPosition( 4 );
         PANELYELLOW.setTabStop( false );
         PANELYELLOW.setLayoutManager( LAYOUT2 );
         PANELYELLOW.setStyle( STYLEYELLOW );
         PANELYELLOW.setTop( 0 );
         PANELYELLOW.initialize();

         // ----------------------------
         // -- Initialize #PANELAMBER --
         // ----------------------------
         PANELAMBER.setDisplayPosition( 14 );
         PANELAMBER.setLeft( 0 );
         PANELAMBER.setParent( PANELTHEMECOLORS );
         PANELAMBER.setTabPosition( 3 );
         PANELAMBER.setTabStop( false );
         PANELAMBER.setLayoutManager( LAYOUT2 );
         PANELAMBER.setStyle( STYLEAMBER );
         PANELAMBER.setTop( 60 );
         PANELAMBER.initialize();

         // -----------------------------
         // -- Initialize #PANELORANGE --
         // -----------------------------
         PANELORANGE.setDisplayPosition( 15 );
         PANELORANGE.setLeft( 70 );
         PANELORANGE.setParent( PANELTHEMECOLORS );
         PANELORANGE.setTabPosition( 2 );
         PANELORANGE.setTabStop( false );
         PANELORANGE.setLayoutManager( LAYOUT2 );
         PANELORANGE.setStyle( STYLEORANGE );
         PANELORANGE.setTop( 60 );
         PANELORANGE.initialize();

         // ---------------------------------
         // -- Initialize #PANELDEEPORANGE --
         // ---------------------------------
         PANELDEEPORANGE.setDisplayPosition( 16 );
         PANELDEEPORANGE.setLeft( 140 );
         PANELDEEPORANGE.setParent( PANELTHEMECOLORS );
         PANELDEEPORANGE.setTabPosition( 1 );
         PANELDEEPORANGE.setTabStop( false );
         PANELDEEPORANGE.setLayoutManager( LAYOUT2 );
         PANELDEEPORANGE.setStyle( STYLEDEEPORANGE );
         PANELDEEPORANGE.setTop( 60 );
         PANELDEEPORANGE.initialize();

         // --------------------------------------
         // -- Initialize #DARKBACKGROUNDSWITCH --
         // --------------------------------------
         DARKBACKGROUNDSWITCH.setCaption( "Dark background" );
         DARKBACKGROUNDSWITCH.setDisplayPosition( 3 );
         DARKBACKGROUNDSWITCH.setHeight( 50 );
         DARKBACKGROUNDSWITCH.setLeft( 0 );
         DARKBACKGROUNDSWITCH.setParent( this );
         DARKBACKGROUNDSWITCH.setTabPosition( 2 );
         DARKBACKGROUNDSWITCH.setTabStop( false );
         DARKBACKGROUNDSWITCH.setIconAlignment( "CENTERRIGHT" );
         DARKBACKGROUNDSWITCH.setWidth( 985 );
         DARKBACKGROUNDSWITCH.setTop( 180 );
         DARKBACKGROUNDSWITCH.setThemeDrawStyle( "BottomDivider+TopDivider" );
         DARKBACKGROUNDSWITCH.setPaddingLeft( 25 );
         DARKBACKGROUNDSWITCH.setPaddingRight( 25 );
         DARKBACKGROUNDSWITCH.setIconColor( "THEME500" );
         DARKBACKGROUNDSWITCH.initialize();

         // --------------------------------------
         // -- Add Event Handlers for #PANELRED --
         // --------------------------------------
         PANELRED.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------------------
         // -- Add Event Handlers for #PANELPINK --
         // ---------------------------------------
         PANELPINK.addEventHandler( "CLICK", this, evtRoutine2 );

         // -----------------------------------------
         // -- Add Event Handlers for #PANELPURPLE --
         // -----------------------------------------
         PANELPURPLE.addEventHandler( "CLICK", this, evtRoutine3 );

         // ---------------------------------------------
         // -- Add Event Handlers for #PANELDEEPPURPLE --
         // ---------------------------------------------
         PANELDEEPPURPLE.addEventHandler( "CLICK", this, evtRoutine4 );

         // -----------------------------------------
         // -- Add Event Handlers for #PANELINDIGO --
         // -----------------------------------------
         PANELINDIGO.addEventHandler( "CLICK", this, evtRoutine5 );

         // ---------------------------------------
         // -- Add Event Handlers for #PANELBLUE --
         // ---------------------------------------
         PANELBLUE.addEventHandler( "CLICK", this, evtRoutine6 );

         // --------------------------------------------
         // -- Add Event Handlers for #PANELLIGHTBLUE --
         // --------------------------------------------
         PANELLIGHTBLUE.addEventHandler( "CLICK", this, evtRoutine7 );

         // ---------------------------------------
         // -- Add Event Handlers for #PANELCYAN --
         // ---------------------------------------
         PANELCYAN.addEventHandler( "CLICK", this, evtRoutine8 );

         // ---------------------------------------
         // -- Add Event Handlers for #PANELTEAL --
         // ---------------------------------------
         PANELTEAL.addEventHandler( "CLICK", this, evtRoutine9 );

         // ----------------------------------------
         // -- Add Event Handlers for #PANELGREEN --
         // ----------------------------------------
         PANELGREEN.addEventHandler( "CLICK", this, evtRoutine10 );

         // ---------------------------------------------
         // -- Add Event Handlers for #PANELLIGHTGREEN --
         // ---------------------------------------------
         PANELLIGHTGREEN.addEventHandler( "CLICK", this, evtRoutine11 );

         // ---------------------------------------
         // -- Add Event Handlers for #PANELLIME --
         // ---------------------------------------
         PANELLIME.addEventHandler( "CLICK", this, evtRoutine12 );

         // -----------------------------------------
         // -- Add Event Handlers for #PANELYELLOW --
         // -----------------------------------------
         PANELYELLOW.addEventHandler( "CLICK", this, evtRoutine13 );

         // ----------------------------------------
         // -- Add Event Handlers for #PANELAMBER --
         // ----------------------------------------
         PANELAMBER.addEventHandler( "CLICK", this, evtRoutine14 );

         // -----------------------------------------
         // -- Add Event Handlers for #PANELORANGE --
         // -----------------------------------------
         PANELORANGE.addEventHandler( "CLICK", this, evtRoutine15 );

         // ---------------------------------------------
         // -- Add Event Handlers for #PANELDEEPORANGE --
         // ---------------------------------------------
         PANELDEEPORANGE.addEventHandler( "CLICK", this, evtRoutine16 );

         // --------------------------------------------------
         // -- Add Event Handlers for #DARKBACKGROUNDSWITCH --
         // --------------------------------------------------
         DARKBACKGROUNDSWITCH.addEventHandler( "CHANGED", this, evtRoutine17 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 497 );
         this.setWidth( 985 );
         this.setHorizontalScroll( true );
         this.setLayoutManager( LAYOUTMAIN );
         this.setTabPosition( 1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #PanelRed.Click
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelRed.Click", 71 );

      //
      // EVTROUTINE Handling(#PanelRed.Click)
      //
      rtn.Line( 71 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignRed>
         //
         rtn.Line( 73 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNRED" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 75 );
      rtn.end();
   };

   //
   // evtRoutine2 - #PanelPink.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelPink.Click", 77 );

      //
      // EVTROUTINE Handling(#PanelPink.Click)
      //
      rtn.Line( 77 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignPink>
         //
         rtn.Line( 79 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNPINK" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 81 );
      rtn.end();
   };

   //
   // evtRoutine3 - #PanelPurple.Click
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelPurple.Click", 83 );

      //
      // EVTROUTINE Handling(#PanelPurple.Click)
      //
      rtn.Line( 83 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignPurple>
         //
         rtn.Line( 85 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNPURPLE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();
   };

   //
   // evtRoutine4 - #PanelDeepPurple.Click
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelDeepPurple.Click", 89 );

      //
      // EVTROUTINE Handling(#PanelDeepPurple.Click)
      //
      rtn.Line( 89 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignDeepPurple>
         //
         rtn.Line( 91 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNDEEPPURPLE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      rtn.end();
   };

   //
   // evtRoutine5 - #PanelIndigo.Click
   //
   function evtRoutine5( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelIndigo.Click", 95 );

      //
      // EVTROUTINE Handling(#PanelIndigo.Click)
      //
      rtn.Line( 95 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignIndigo>
         //
         rtn.Line( 97 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNINDIGO" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 99 );
      rtn.end();
   };

   //
   // evtRoutine6 - #PanelBlue.Click
   //
   function evtRoutine6( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelBlue.Click", 101 );

      //
      // EVTROUTINE Handling(#PanelBlue.Click)
      //
      rtn.Line( 101 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignBlue>
         //
         rtn.Line( 103 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNBLUE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 105 );
      rtn.end();
   };

   //
   // evtRoutine7 - #PanelLightBlue.Click
   //
   function evtRoutine7( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelLightBlue.Click", 107 );

      //
      // EVTROUTINE Handling(#PanelLightBlue.Click)
      //
      rtn.Line( 107 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignLightBlue>
         //
         rtn.Line( 109 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNLIGHTBLUE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 111 );
      rtn.end();
   };

   //
   // evtRoutine8 - #PanelCyan.Click
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelCyan.Click", 113 );

      //
      // EVTROUTINE Handling(#PanelCyan.Click)
      //
      rtn.Line( 113 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignCyan>
         //
         rtn.Line( 115 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNCYAN" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 117 );
      rtn.end();
   };

   //
   // evtRoutine9 - #PanelTeal.Click
   //
   function evtRoutine9( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelTeal.Click", 119 );

      //
      // EVTROUTINE Handling(#PanelTeal.Click)
      //
      rtn.Line( 119 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignTeal>
         //
         rtn.Line( 121 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNTEAL" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 123 );
      rtn.end();
   };

   //
   // evtRoutine10 - #PanelGreen.Click
   //
   function evtRoutine10( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelGreen.Click", 125 );

      //
      // EVTROUTINE Handling(#PanelGreen.Click)
      //
      rtn.Line( 125 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignGreen>
         //
         rtn.Line( 127 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNGREEN" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 129 );
      rtn.end();
   };

   //
   // evtRoutine11 - #PanelLightGreen.Click
   //
   function evtRoutine11( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelLightGreen.Click", 131 );

      //
      // EVTROUTINE Handling(#PanelLightGreen.Click)
      //
      rtn.Line( 131 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignLightGreen>
         //
         rtn.Line( 133 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNLIGHTGREEN" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 135 );
      rtn.end();
   };

   //
   // evtRoutine12 - #PanelLime.Click
   //
   function evtRoutine12( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelLime.Click", 137 );

      //
      // EVTROUTINE Handling(#PanelLime.Click)
      //
      rtn.Line( 137 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignLime>
         //
         rtn.Line( 139 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNLIME" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 141 );
      rtn.end();
   };

   //
   // evtRoutine13 - #PanelYellow.Click
   //
   function evtRoutine13( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelYellow.Click", 143 );

      //
      // EVTROUTINE Handling(#PanelYellow.Click)
      //
      rtn.Line( 143 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignYellow>
         //
         rtn.Line( 145 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNYELLOW" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 147 );
      rtn.end();
   };

   //
   // evtRoutine14 - #PanelAmber.Click
   //
   function evtRoutine14( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelAmber.Click", 148 );

      //
      // EVTROUTINE Handling(#PanelAmber.Click)
      //
      rtn.Line( 148 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignAmber>
         //
         rtn.Line( 150 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNAMBER" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 152 );
      rtn.end();
   };

   //
   // evtRoutine15 - #PanelOrange.Click
   //
   function evtRoutine15( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelOrange.Click", 154 );

      //
      // EVTROUTINE Handling(#PanelOrange.Click)
      //
      rtn.Line( 154 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignOrange>
         //
         rtn.Line( 156 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNORANGE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 158 );
      rtn.end();
   };

   //
   // evtRoutine16 - #PanelDeepOrange.Click
   //
   function evtRoutine16( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PanelDeepOrange.Click", 160 );

      //
      // EVTROUTINE Handling(#PanelDeepOrange.Click)
      //
      rtn.Line( 160 );
      {

         //
         // #Sys_Web.WebPage.Theme <= #SYS_THEME<MaterialDesignDeepOrange>
         //
         rtn.Line( 162 );
         Lansa.WEB().getWebPage().setTheme( Lansa.THEME().get( "MATERIALDESIGNDEEPORANGE" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 164 );
      rtn.end();
   };

   //
   // evtRoutine17 - #DarkBackgroundSwitch.Changed
   //
   function evtRoutine17( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DarkBackgroundSwitch.Changed", 166 );

      //
      // EVTROUTINE Handling(#DarkBackgroundSwitch.Changed)
      //
      rtn.Line( 166 );
      {

         //
         // IF (#Sys_Web.WebPage.ThemeBackground = Light)
         //
         rtn.Line( 168 );
         if ( Lansa.String.eq( Lansa.WEB().getWebPage().getThemeBackground(), "LIGHT" ) )
         {

            //
            // #Sys_Web.WebPage.ThemeBackground := Dark
            //
            rtn.Line( 170 );
            Lansa.WEB().getWebPage().setThemeBackground( "DARK" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #Sys_Web.WebPage.ThemeBackground := Light
            //
            rtn.Line( 174 );
            Lansa.WEB().getWebPage().setThemeBackground( "LIGHT" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 178 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_VIEW", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_FWLM", "PRIM_FWLI", "PRIM_PANL", "PRIM_MD.Label", "PRIM_MD.Switch" ]
});

//# sourceURL=d2setting.js
