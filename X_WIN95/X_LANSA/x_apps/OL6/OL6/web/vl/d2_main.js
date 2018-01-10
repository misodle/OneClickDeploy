// -----------------------
// -- Web Page: D2_MAIN --
// -----------------------
LANSA.addComponent(
{
   id: "D2_MAIN", 
   nm: "D2_Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Issues", 
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
      an: "PRIM_WEB", 

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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleAppDrawer) BorderRight(0)
         //
         var STYLEAPPDRAWER = this.createReference( "STYLEAPPDRAWER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleHeader) BackgroundBrush(#BrushHeader)
         //
         var STYLEHEADER = this.createReference( "STYLEHEADER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#BrushHeader) Color(Theme700)
         //
         var BRUSHHEADER = this.createReference( "BRUSHHEADER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleMain) BackgroundBrush(#BrushMain)
         //
         var STYLEMAIN = this.createReference( "STYLEMAIN", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#BrushMain) Color(Theme400)
         //
         var BRUSHMAIN = this.createReference( "BRUSHMAIN", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn1) DisplayPosition(1) Parent(#LayoutMain) Units(Pixels) Width(220)
         //
         var LAYOUTMAINCOLUMN1 = this.createReference( "LAYOUTMAINCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn2) DisplayPosition(2) Parent(#LayoutMain) Units(Pixels) Width(8)
         //
         var LAYOUTMAINCOLUMN2 = this.createReference( "LAYOUTMAINCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn3) DisplayPosition(3) Parent(#LayoutMain)
         //
         var LAYOUTMAINCOLUMN3 = this.createReference( "LAYOUTMAINCOLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn4) DisplayPosition(4) Parent(#LayoutMain) Units(Pixels) Width(8)
         //
         var LAYOUTMAINCOLUMN4 = this.createReference( "LAYOUTMAINCOLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) DisplayPosition(1) Parent(#LayoutMain) Units(Pixels) Height(80)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) DisplayPosition(2) Parent(#LayoutMain) Height(20) Units(Pixels)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow3) DisplayPosition(3) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW3 = this.createReference( "LAYOUTMAINROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#PanelHeader) Parent(#LayoutMain) Row(#LayoutMainRow1) ColumnSpan(4) RowSpan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow1) RowSpan(3) ColumnSpan(2)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn3) Manage(#SearchString) Parent(#LayoutMain) Sizing(FitToWidth) Row(#LayoutMainRow1)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem4) Column(#LayoutMainColumn3) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow2) RowSpan(2)
         //
         var LAYOUTMAINITEM4 = this.createReference( "LAYOUTMAINITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWER = this.createReference( "LAYOUTAPPDRAWER", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppDrawerRow1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERROW1 = this.createReference( "LAYOUTAPPDRAWERROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppDrawerColumn1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERCOLUMN1 = this.createReference( "LAYOUTAPPDRAWERCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem1) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Manage(#ApplicationName) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth) Flow(Down)
         //
         var LAYOUTAPPDRAWERITEM1 = this.createReference( "LAYOUTAPPDRAWERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem2) Column(#LayoutAppDrawerColumn1) Manage(#NavButton1) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth) Flow(Down) Alignment(TopCenter)
         //
         var LAYOUTAPPDRAWERITEM2 = this.createReference( "LAYOUTAPPDRAWERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem3) Column(#LayoutAppDrawerColumn1) Manage(#NavButtonSettings) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth) Flow(Down) Alignment(TopCenter)
         //
         var LAYOUTAPPDRAWERITEM3 = this.createReference( "LAYOUTAPPDRAWERITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem4) Column(#LayoutAppDrawerColumn1) Manage(#NavButtonSignOut) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth) Flow(Down) Alignment(TopCenter)
         //
         var LAYOUTAPPDRAWERITEM4 = this.createReference( "LAYOUTAPPDRAWERITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PanelHeader) DisplayPosition(4) Height(100) Parent(#COM_OWNER) TabPosition(4) TabStop(False) Top(0) Width(1200) Left(0) Style(#StyleHeader)
         //
         var PANELHEADER = this.createReference( "PANELHEADER", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Edit) Name(#SearchString) DisplayPosition(3) Label('Label') Parent(#COM_OWNER) TabPosition(1) Top(20) Appearance(None) HelperPosition(None) Icon('search') LabelPosition(None) Width(960) Height(40) Placeholder('Search') ThemeDrawStyle('Card+ForegroundTheme') Left(230) 
         //
         var SEARCHSTRING = this.createReference( "SEARCHSTRING", "PRIM_MD", "Edit" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) DisplayPosition(1) TabPosition(3) TabStop(False) Height(800) Width(230) LayoutManager(#LayoutAppDrawer) ThemeDrawStyle('MediumTitle') Style(#StyleAppDrawer) Parent(#COM_OWNER)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) DisplayPosition(2) Parent(#COM_OWNER) TabPosition(2) TabStop(False) ThemeDrawStyle('Card+ForegroundTheme') Height(720) Width(960) Left(230) Top(80) AutoSelect(False)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#ApplicationName) Caption('Issues') DisplayPosition(1) Left(0) Parent(#AppDrawer) TabPosition(1) TabStop(False) Top(0) ThemeDrawStyle('Title+DarkTitle') Width(230) Height(100) IconAlignment(CenterLeft) IconMarginLeft(10) IconHeight(32) CaptionMarginRight(0) CaptionMarginLeft(30) CaptionMarginBottom(0) CaptionMarginTop(20) CaptionAlignment(TopLeft)
         //
         var APPLICATIONNAME = this.createReference( "APPLICATIONNAME", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton1) Caption('Issues') DisplayPosition(2) Icon('view_quilt') Left(0) Parent(#AppDrawer) TabPosition(2) Width(230) IconMarginLeft(10) Height(50) CaptionAlignment(CenterLeft) CaptionMarginLeft(20) CaptionMarginBottom(0) CaptionMarginRight(0) CaptionMarginTop(0) Manage(#Issues) IconOpacity(50)
         //
         var NAVBUTTON1 = this.createReference( "NAVBUTTON1", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButtonSettings) Caption('Settings') DisplayPosition(3) Icon('settings') Left(0) Parent(#AppDrawer) TabPosition(3) Top(300) Width(230) IconMarginLeft(10) Height(50) CaptionAlignment(CenterLeft) CaptionMarginLeft(20) CaptionMarginBottom(0) CaptionMarginRight(0) CaptionMarginTop(0) IconOpacity(50) Manage(#Settings) ThemeDrawStyle('TopDivider') 
         //
         var NAVBUTTONSETTINGS = this.createReference( "NAVBUTTONSETTINGS", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButtonSignOut) Caption('Sign Out') DisplayPosition(4) Icon('exit_to_app') Left(0) Parent(#AppDrawer) TabPosition(4) Top(300) Width(230) IconMarginLeft(10) Height(50) CaptionAlignment(CenterLeft) CaptionMarginLeft(20) CaptionMarginBottom(0) CaptionMarginRight(0) CaptionMarginTop(0) IconOpacity(50)
         //
         var NAVBUTTONSIGNOUT = this.createReference( "NAVBUTTONSIGNOUT", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#D2_Issues) Name(#Issues) Parent(#ViewContainer) TabStop(False) DisplayPosition(1)
         //
         var ISSUES = this.createReference( "ISSUES", "D2_ISSUES" );

         //
         // DEFINE_COM Class(#D2_Settings) Name(#Settings) DisplayPosition(3) Parent(#ViewContainer) Caption('Settings') Height(412) Width(920) Left(612) TabPosition(3)
         //
         var SETTINGS = this.createReference( "SETTINGS", "D2_SETTIN" );

         //
         // DEFINE_COM Class(#D2_SignIn) Name(#SignIn)
         //
         var SIGNIN = this.createReference( "SIGNIN", "D2_SIGNIN" );

         // --------------------------------
         // -- Initialize #STYLEAPPDRAWER --
         // --------------------------------
         STYLEAPPDRAWER.setBorderRight( 0 );
         STYLEAPPDRAWER.initialize();

         // -----------------------------
         // -- Initialize #STYLEHEADER --
         // -----------------------------
         STYLEHEADER.setBackgroundBrush( BRUSHHEADER );
         STYLEHEADER.initialize();

         // -----------------------------
         // -- Initialize #BRUSHHEADER --
         // -----------------------------
         BRUSHHEADER.setColor( "THEME700" );
         BRUSHHEADER.initialize();

         // ---------------------------
         // -- Initialize #STYLEMAIN --
         // ---------------------------
         STYLEMAIN.setBackgroundBrush( BRUSHMAIN );
         STYLEMAIN.initialize();

         // ---------------------------
         // -- Initialize #BRUSHMAIN --
         // ---------------------------
         BRUSHMAIN.setColor( "THEME400" );
         BRUSHMAIN.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN1 --
         // -----------------------------------
         LAYOUTMAINCOLUMN1.setDisplayPosition( 1 );
         LAYOUTMAINCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN1.setUnits( "PIXELS" );
         LAYOUTMAINCOLUMN1.setWidth( 220 );
         LAYOUTMAINCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN2 --
         // -----------------------------------
         LAYOUTMAINCOLUMN2.setDisplayPosition( 2 );
         LAYOUTMAINCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN2.setUnits( "PIXELS" );
         LAYOUTMAINCOLUMN2.setWidth( 8 );
         LAYOUTMAINCOLUMN2.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN3 --
         // -----------------------------------
         LAYOUTMAINCOLUMN3.setDisplayPosition( 3 );
         LAYOUTMAINCOLUMN3.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN3.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN4 --
         // -----------------------------------
         LAYOUTMAINCOLUMN4.setDisplayPosition( 4 );
         LAYOUTMAINCOLUMN4.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN4.setUnits( "PIXELS" );
         LAYOUTMAINCOLUMN4.setWidth( 8 );
         LAYOUTMAINCOLUMN4.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setUnits( "PIXELS" );
         LAYOUTMAINROW1.setHeight( 80 );
         LAYOUTMAINROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW2 --
         // --------------------------------
         LAYOUTMAINROW2.setDisplayPosition( 2 );
         LAYOUTMAINROW2.setParent( LAYOUTMAIN );
         LAYOUTMAINROW2.setHeight( 20 );
         LAYOUTMAINROW2.setUnits( "PIXELS" );
         LAYOUTMAINROW2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW3 --
         // --------------------------------
         LAYOUTMAINROW3.setDisplayPosition( 3 );
         LAYOUTMAINROW3.setParent( LAYOUTMAIN );
         LAYOUTMAINROW3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM1 --
         // ---------------------------------
         LAYOUTMAINITEM1.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM1.setManage( PANELHEADER );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM1.setColumnSpan( 4 );
         LAYOUTMAINITEM1.setRowSpan( 2 );
         LAYOUTMAINITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM2 --
         // ---------------------------------
         LAYOUTMAINITEM2.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM2.setManage( APPDRAWER );
         LAYOUTMAINITEM2.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM2.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM2.setRowSpan( 3 );
         LAYOUTMAINITEM2.setColumnSpan( 2 );
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN3 );
         LAYOUTMAINITEM3.setManage( SEARCHSTRING );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM4 --
         // ---------------------------------
         LAYOUTMAINITEM4.setColumn( LAYOUTMAINCOLUMN3 );
         LAYOUTMAINITEM4.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM4.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM4.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM4.setRowSpan( 2 );
         LAYOUTMAINITEM4.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTAPPDRAWER --
         // ---------------------------------
         LAYOUTAPPDRAWER.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERROW1 --
         // -------------------------------------
         LAYOUTAPPDRAWERROW1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERROW1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERROW1.initialize();

         // ----------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERCOLUMN1 --
         // ----------------------------------------
         LAYOUTAPPDRAWERCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERCOLUMN1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERCOLUMN1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM1 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM1.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM1.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM1.setManage( APPLICATIONNAME );
         LAYOUTAPPDRAWERITEM1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM1.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM1.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM2 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM2.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM2.setManage( NAVBUTTON1 );
         LAYOUTAPPDRAWERITEM2.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM2.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM2.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM2.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM2.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM3 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM3.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM3.setManage( NAVBUTTONSETTINGS );
         LAYOUTAPPDRAWERITEM3.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM3.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM3.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM3.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM3.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM4 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM4.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM4.setManage( NAVBUTTONSIGNOUT );
         LAYOUTAPPDRAWERITEM4.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM4.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM4.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM4.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM4.initialize();

         // -----------------------------
         // -- Initialize #PANELHEADER --
         // -----------------------------
         PANELHEADER.setDisplayPosition( 4 );
         PANELHEADER.setHeight( 100 );
         PANELHEADER.setParent( this );
         PANELHEADER.setTabPosition( 4 );
         PANELHEADER.setTabStop( false );
         PANELHEADER.setTop( 0 );
         PANELHEADER.setWidth( 1200 );
         PANELHEADER.setLeft( 0 );
         PANELHEADER.setStyle( STYLEHEADER );
         PANELHEADER.initialize();

         // ------------------------------
         // -- Initialize #SEARCHSTRING --
         // ------------------------------
         SEARCHSTRING.setDisplayPosition( 3 );
         SEARCHSTRING.setLabel( "Label" );
         SEARCHSTRING.setParent( this );
         SEARCHSTRING.setTabPosition( 1 );
         SEARCHSTRING.setTop( 20 );
         SEARCHSTRING.setAppearance( "NONE" );
         SEARCHSTRING.setHelperPosition( "NONE" );
         SEARCHSTRING.setIcon( "search" );
         SEARCHSTRING.setLabelPosition( "NONE" );
         SEARCHSTRING.setWidth( 960 );
         SEARCHSTRING.setHeight( 40 );
         SEARCHSTRING.setPlaceholder( "Search" );
         SEARCHSTRING.setThemeDrawStyle( "Card+ForegroundTheme" );
         SEARCHSTRING.setLeft( 230 );
         SEARCHSTRING.initialize();

         // ---------------------------
         // -- Initialize #APPDRAWER --
         // ---------------------------
         APPDRAWER.setDisplayPosition( 1 );
         APPDRAWER.setTabPosition( 3 );
         APPDRAWER.setTabStop( false );
         APPDRAWER.setHeight( 800 );
         APPDRAWER.setWidth( 230 );
         APPDRAWER.setLayoutManager( LAYOUTAPPDRAWER );
         APPDRAWER.setThemeDrawStyle( "MediumTitle" );
         APPDRAWER.setStyle( STYLEAPPDRAWER );
         APPDRAWER.setParent( this );
         APPDRAWER.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 2 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 2 );
         VIEWCONTAINER.setTabStop( false );
         VIEWCONTAINER.setThemeDrawStyle( "Card+ForegroundTheme" );
         VIEWCONTAINER.setHeight( 720 );
         VIEWCONTAINER.setWidth( 960 );
         VIEWCONTAINER.setLeft( 230 );
         VIEWCONTAINER.setTop( 80 );
         VIEWCONTAINER.setAutoSelect( false );
         VIEWCONTAINER.initialize();

         // ---------------------------------
         // -- Initialize #APPLICATIONNAME --
         // ---------------------------------
         APPLICATIONNAME.setCaption( "Issues" );
         APPLICATIONNAME.setDisplayPosition( 1 );
         APPLICATIONNAME.setLeft( 0 );
         APPLICATIONNAME.setParent( APPDRAWER );
         APPLICATIONNAME.setTabPosition( 1 );
         APPLICATIONNAME.setTabStop( false );
         APPLICATIONNAME.setTop( 0 );
         APPLICATIONNAME.setThemeDrawStyle( "Title+DarkTitle" );
         APPLICATIONNAME.setWidth( 230 );
         APPLICATIONNAME.setHeight( 100 );
         APPLICATIONNAME.setIconAlignment( "CENTERLEFT" );
         APPLICATIONNAME.setIconMarginLeft( 10 );
         APPLICATIONNAME.setIconHeight( 32 );
         APPLICATIONNAME.setCaptionMarginRight( 0 );
         APPLICATIONNAME.setCaptionMarginLeft( 30 );
         APPLICATIONNAME.setCaptionMarginBottom( 0 );
         APPLICATIONNAME.setCaptionMarginTop( 20 );
         APPLICATIONNAME.setCaptionAlignment( "TOPLEFT" );
         APPLICATIONNAME.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON1 --
         // ----------------------------
         NAVBUTTON1.setCaption( "Issues" );
         NAVBUTTON1.setDisplayPosition( 2 );
         NAVBUTTON1.setIcon( "view_quilt" );
         NAVBUTTON1.setLeft( 0 );
         NAVBUTTON1.setParent( APPDRAWER );
         NAVBUTTON1.setTabPosition( 2 );
         NAVBUTTON1.setWidth( 230 );
         NAVBUTTON1.setIconMarginLeft( 10 );
         NAVBUTTON1.setHeight( 50 );
         NAVBUTTON1.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON1.setCaptionMarginLeft( 20 );
         NAVBUTTON1.setCaptionMarginBottom( 0 );
         NAVBUTTON1.setCaptionMarginRight( 0 );
         NAVBUTTON1.setCaptionMarginTop( 0 );
         NAVBUTTON1.setManage( ISSUES );
         NAVBUTTON1.setIconOpacity( 50 );
         NAVBUTTON1.initialize();

         // -----------------------------------
         // -- Initialize #NAVBUTTONSETTINGS --
         // -----------------------------------
         NAVBUTTONSETTINGS.setCaption( "Settings" );
         NAVBUTTONSETTINGS.setDisplayPosition( 3 );
         NAVBUTTONSETTINGS.setIcon( "settings" );
         NAVBUTTONSETTINGS.setLeft( 0 );
         NAVBUTTONSETTINGS.setParent( APPDRAWER );
         NAVBUTTONSETTINGS.setTabPosition( 3 );
         NAVBUTTONSETTINGS.setTop( 300 );
         NAVBUTTONSETTINGS.setWidth( 230 );
         NAVBUTTONSETTINGS.setIconMarginLeft( 10 );
         NAVBUTTONSETTINGS.setHeight( 50 );
         NAVBUTTONSETTINGS.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTONSETTINGS.setCaptionMarginLeft( 20 );
         NAVBUTTONSETTINGS.setCaptionMarginBottom( 0 );
         NAVBUTTONSETTINGS.setCaptionMarginRight( 0 );
         NAVBUTTONSETTINGS.setCaptionMarginTop( 0 );
         NAVBUTTONSETTINGS.setIconOpacity( 50 );
         NAVBUTTONSETTINGS.setManage( SETTINGS );
         NAVBUTTONSETTINGS.setThemeDrawStyle( "TopDivider" );
         NAVBUTTONSETTINGS.initialize();

         // ----------------------------------
         // -- Initialize #NAVBUTTONSIGNOUT --
         // ----------------------------------
         NAVBUTTONSIGNOUT.setCaption( "Sign Out" );
         NAVBUTTONSIGNOUT.setDisplayPosition( 4 );
         NAVBUTTONSIGNOUT.setIcon( "exit_to_app" );
         NAVBUTTONSIGNOUT.setLeft( 0 );
         NAVBUTTONSIGNOUT.setParent( APPDRAWER );
         NAVBUTTONSIGNOUT.setTabPosition( 4 );
         NAVBUTTONSIGNOUT.setTop( 300 );
         NAVBUTTONSIGNOUT.setWidth( 230 );
         NAVBUTTONSIGNOUT.setIconMarginLeft( 10 );
         NAVBUTTONSIGNOUT.setHeight( 50 );
         NAVBUTTONSIGNOUT.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTONSIGNOUT.setCaptionMarginLeft( 20 );
         NAVBUTTONSIGNOUT.setCaptionMarginBottom( 0 );
         NAVBUTTONSIGNOUT.setCaptionMarginRight( 0 );
         NAVBUTTONSIGNOUT.setCaptionMarginTop( 0 );
         NAVBUTTONSIGNOUT.setIconOpacity( 50 );
         NAVBUTTONSIGNOUT.initialize();

         // ------------------------
         // -- Initialize #ISSUES --
         // ------------------------
         ISSUES.setParent( VIEWCONTAINER );
         ISSUES.setTabStop( false );
         ISSUES.setDisplayPosition( 1 );
         ISSUES.initialize();

         // --------------------------
         // -- Initialize #SETTINGS --
         // --------------------------
         SETTINGS.setDisplayPosition( 3 );
         SETTINGS.setParent( VIEWCONTAINER );
         SETTINGS.setCaption( "Settings" );
         SETTINGS.setHeight( 412 );
         SETTINGS.setWidth( 920 );
         SETTINGS.setLeft( 612 );
         SETTINGS.setTabPosition( 3 );
         SETTINGS.initialize();

         // ------------------------
         // -- Initialize #SIGNIN --
         // ------------------------
         SIGNIN.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine4 );

         // ------------------------------------------
         // -- Add Event Handlers for #SEARCHSTRING --
         // ------------------------------------------
         SEARCHSTRING.addEventHandler( "ICONCLICK", this, evtRoutine5 );
         SEARCHSTRING.addEventHandler( "AUTOSUGGEST", this, evtRoutine6 );

         // -------------------------------------------
         // -- Add Event Handlers for #VIEWCONTAINER --
         // -------------------------------------------
         VIEWCONTAINER.addEventHandler( "ACTIVEVIEWCHANGED", this, evtRoutine7 );

         // ----------------------------------------------
         // -- Add Event Handlers for #NAVBUTTONSIGNOUT --
         // ----------------------------------------------
         NAVBUTTONSIGNOUT.addEventHandler( "CLICK", this, evtRoutine3 );

         // ------------------------------------
         // -- Add Event Handlers for #SIGNIN --
         // ------------------------------------
         SIGNIN.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNGREEN" ) );
         this.setLayoutManager( LAYOUTMAIN );
         this.setStyle( STYLEMAIN );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 56 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 56 );
      {

         //
         // #SignIn.Show
         //
         rtn.Line( 58 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // evtRoutine2 - #SignIn.Completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SignIn.Completed", 62 );

      //
      // EVTROUTINE Handling(#SignIn.Completed)
      //
      rtn.Line( 62 );
      {

         //
         // #Issues.Show
         //
         rtn.Line( 64 );
         ref.ISSUES.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // evtRoutine3 - #NavButtonSignOut.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#NavButtonSignOut.Click", 68 );

      //
      // DEFINE_COM Class(#D2_Session.SignOut) Name(#SignOut)
      //
      var SIGNOUT = rtn.createDataRequest( "SIGNOUT", "D2_SESSIO", "SIGNOUT" );

      // -------------------------
      // -- Initialize #SIGNOUT --
      // -------------------------
      SIGNOUT.initialize();

      //
      // EVTROUTINE Handling(#NavButtonSignOut.Click)
      //
      rtn.Line( 68 );
      {

         //
         // #SignOut.ExecuteAsync
         //
         rtn.Line( 72 );
         SIGNOUT.mthEXECUTEASYNC( {  }, {  } );

         //
         // #ViewContainer.Clear
         //
         rtn.Line( 74 );
         ref.VIEWCONTAINER.mthCLEAR();

         //
         // #SignIn.Show
         //
         rtn.Line( 76 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 78 );
      rtn.end();
   };

   //
   // evtRoutine4 - #SYS_WEB.DeviceChanged
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SYS_WEB.DeviceChanged", 80 );

      //
      // EVTROUTINE Handling(#SYS_WEB.DeviceChanged)
      //
      rtn.Line( 80 );
      {

         //
         // IF (#SYS_WEB.Device = Mobile)
         //
         rtn.Line( 82 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 84 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

            //
            // #LayoutMainColumn1.Width := 0
            //
            rtn.Line( 86 );
            ref.LAYOUTMAINCOLUMN1.setWidth( 0 );

            //
            // #SearchString.Icon := "menu"
            //
            rtn.Line( 88 );
            ref.SEARCHSTRING.setIcon( "menu" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AppDrawer.DrawerStyle := Permanent
            //
            rtn.Line( 92 );
            ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

            //
            // #LayoutMainColumn1.Width := 220
            //
            rtn.Line( 94 );
            ref.LAYOUTMAINCOLUMN1.setWidth( 220 );

            //
            // #SearchString.Icon := "search"
            //
            rtn.Line( 96 );
            ref.SEARCHSTRING.setIcon( "search" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 100 );
      rtn.end();
   };

   //
   // evtRoutine5 - #SearchString.IconClick
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchString.IconClick", 102 );

      //
      // EVTROUTINE Handling(#SearchString.IconClick)
      //
      rtn.Line( 102 );
      {

         //
         // IF (#SYS_WEB.Device = Mobile)
         //
         rtn.Line( 104 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.ToggleDrawer
            //
            rtn.Line( 106 );
            ref.APPDRAWER.mthTOGGLEDRAWER();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 110 );
      rtn.end();
   };

   //
   // evtRoutine6 - #SearchString.AutoSuggest
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchString.AutoSuggest", 112 );

      //
      // EVTROUTINE Handling(#SearchString.AutoSuggest)
      //
      rtn.Line( 112 );
      {

         //
         // SET Com(#Issues) Filter(#SearchString)
         //
         rtn.Line( 114 );
         ref.ISSUES.setFILTER( ref.SEARCHSTRING.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 116 );
      rtn.end();
   };

   //
   // evtRoutine7 - #ViewContainer.ActiveViewChanged
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ViewContainer.ActiveViewChanged", 118 );

      //
      // EVTROUTINE Handling(#ViewContainer.ActiveViewChanged)
      //
      rtn.Line( 118 );
      {

         //
         // #SearchString := ""
         //
         rtn.Line( 120 );
         ref.SEARCHSTRING.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 122 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "D2_ISSUES", "D2_SETTIN", "D2_SIGNIN" ],
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_PANL", "PRIM_MD.Edit", "PRIM_MD.AppDrawer", "PRIM_MD.ViewContainer", "PRIM_MD.Label", "PRIM_MD.NavButton", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=d2_main.js
