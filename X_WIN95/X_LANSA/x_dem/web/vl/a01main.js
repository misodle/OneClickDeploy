// -----------------------
// -- Web Page: A01MAIN --
// -----------------------
LANSA.addComponent(
{
   id: "A01MAIN", 
   nm: "A01Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Left Navigation", 
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
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn1) Displayposition(1) Parent(#LayoutMain) Units(Content) Width(220)
         //
         var LAYOUTMAINCOLUMN1 = this.createReference( "LAYOUTMAINCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn2) Displayposition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINCOLUMN2 = this.createReference( "LAYOUTMAINCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) Displayposition(1) Parent(#LayoutMain) Height(56) Units(Pixels)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) Displayposition(2) Parent(#LayoutMain) Height(40) Units(Content)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow3) Displayposition(3) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW3 = this.createReference( "LAYOUTMAINROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#AppBar) Parent(#LayoutMain) Row(#LayoutMainRow1) Columnspan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToHeight) Rowspan(2)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem4) Column(#LayoutMainColumn2) Manage(#Filter) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LAYOUTMAINITEM4 = this.createReference( "LAYOUTMAINITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn2) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow3)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppBar)
         //
         var LAYOUTAPPBAR = this.createReference( "LAYOUTAPPBAR", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppBarRow1) Displayposition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARROW1 = this.createReference( "LAYOUTAPPBARROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppBarColumn1) Displayposition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARCOLUMN1 = this.createReference( "LAYOUTAPPBARCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppBarItem1) Alignment(CenterRight) Column(#LayoutAppBarColumn1) Manage(#FilterIcon) Parent(#LayoutAppBar) Row(#LayoutAppBarRow1) Sizing(None)
         //
         var LAYOUTAPPBARITEM1 = this.createReference( "LAYOUTAPPBARITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWER = this.createReference( "LAYOUTAPPDRAWER", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppDrawerColumn1) Displayposition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERCOLUMN1 = this.createReference( "LAYOUTAPPDRAWERCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppDrawerRow1) Displayposition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERROW1 = this.createReference( "LAYOUTAPPDRAWERROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem1) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton1) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM1 = this.createReference( "LAYOUTAPPDRAWERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem2) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton2) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM2 = this.createReference( "LAYOUTAPPDRAWERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem3) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton3) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM3 = this.createReference( "LAYOUTAPPDRAWERITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem4) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM4 = this.createReference( "LAYOUTAPPDRAWERITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem5) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton5) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM5 = this.createReference( "LAYOUTAPPDRAWERITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#AppBar) Displayposition(1) Parent(#COM_OWNER) Tabposition(1) Width(1200) Themedrawstyle('Heading1') Caption('Left Navigation') Captionmarginbottom(0) Captionmarginright(0) Captionmargintop(0) Icon('menu') Layoutmanager(#LayoutAppBar)
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#FilterIcon) Displayposition(1) Icon('search') Left(1152) Parent(#AppBar) Tabposition(1) Top(4)
         //
         var FILTERICON = this.createReference( "FILTERICON", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Top(56) Height(744) Layoutmanager(#LayoutAppDrawer) Themedrawstyle('MediumTitle') Width(220)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton1) Caption('Employees') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(1) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(1) Tabstop(False) Top(0) Width(219) Manage(#Employees) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON1 = this.createReference( "NAVBUTTON1", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton2) Caption('Departments') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(2) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(2) Tabstop(False) Top(48) Width(219) Manage(#Departments) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON2 = this.createReference( "NAVBUTTON2", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton3) Caption('Destinations') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(3) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(3) Tabstop(False) Top(96) Width(219) Manage(#Destinations) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON3 = this.createReference( "NAVBUTTON3", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton5) Caption('Settings') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(4) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(4) Tabstop(False) Top(192) Width(219) Height(48) Icon('settings') Manage(#Settings) Themedrawstyle('TopDivider')
         //
         var NAVBUTTON5 = this.createReference( "NAVBUTTON5", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.Edit) Name(#Filter) Appearance(None) Displayposition(4) Height(40) Helperposition(None) Label('Label') Labelposition(None) Left(220) Parent(#COM_OWNER) Tabposition(4) Top(56) Width(980) Icon('search') Placeholder('Search') Themedrawstyle('BottomDivider') Visible(False)
         //
         var FILTER = this.createReference( "FILTER", "PRIM_MD", "Edit" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) Displayposition(3) Left(220) Parent(#COM_OWNER) Tabposition(3) Top(96) Height(704) Width(980) Autoselect(False)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#A01Employees) Name(#Employees) Height(704) Left(326) Parent(#ViewContainer) Width(980)
         //
         var EMPLOYEES = this.createReference( "EMPLOYEES", "A01EMPLOY" );

         //
         // DEFINE_COM Class(#A01Departments) Name(#Departments) Height(704) Left(652) Parent(#ViewContainer) Width(980) Displayposition(2) Tabposition(2)
         //
         var DEPARTMENTS = this.createReference( "DEPARTMENTS", "A01DEPART" );

         //
         // DEFINE_COM Class(#A01Destinations) Name(#Destinations) Height(704) Parent(#ViewContainer) Width(980) Displayposition(3) Tabposition(3) Top(231)
         //
         var DESTINATIONS = this.createReference( "DESTINATIONS", "A01DESTIN" );

         //
         // DEFINE_COM Class(#A01Settings) Name(#Settings) Displayposition(4) Parent(#ViewContainer) Caption('Settings') Height(704) Width(980) Left(326) Tabposition(4) Top(231)
         //
         var SETTINGS = this.createReference( "SETTINGS", "A01SETTIN" );

         //
         // DEFINE_COM Class(#A01SignIn) Name(#SignIn)
         //
         var SIGNIN = this.createReference( "SIGNIN", "A01SIGNIN" );

         //
         // DEFINE_COM Class(#PRIM_TIMR) Name(#FilterTimer) Startup(Manual) Interval(500)
         //
         var FILTERTIMER = this.createReference( "FILTERTIMER", "PRIM_TIMR" );

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN1 --
         // -----------------------------------
         LAYOUTMAINCOLUMN1.setDisplayPosition( 1 );
         LAYOUTMAINCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN1.setUnits( "CONTENT" );
         LAYOUTMAINCOLUMN1.setWidth( 220 );
         LAYOUTMAINCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN2 --
         // -----------------------------------
         LAYOUTMAINCOLUMN2.setDisplayPosition( 2 );
         LAYOUTMAINCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setHeight( 56 );
         LAYOUTMAINROW1.setUnits( "PIXELS" );
         LAYOUTMAINROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW2 --
         // --------------------------------
         LAYOUTMAINROW2.setDisplayPosition( 2 );
         LAYOUTMAINROW2.setParent( LAYOUTMAIN );
         LAYOUTMAINROW2.setHeight( 40 );
         LAYOUTMAINROW2.setUnits( "CONTENT" );
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
         LAYOUTMAINITEM1.setManage( APPBAR );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM1.setColumnSpan( 2 );
         LAYOUTMAINITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM2 --
         // ---------------------------------
         LAYOUTMAINITEM2.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM2.setManage( APPDRAWER );
         LAYOUTMAINITEM2.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM2.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM2.setSizing( "FITTOHEIGHT" );
         LAYOUTMAINITEM2.setRowSpan( 2 );
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM4 --
         // ---------------------------------
         LAYOUTMAINITEM4.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM4.setManage( FILTER );
         LAYOUTMAINITEM4.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM4.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM4.setAlignment( "TOPCENTER" );
         LAYOUTMAINITEM4.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM3.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW3 );
         LAYOUTMAINITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTAPPBAR --
         // ------------------------------
         LAYOUTAPPBAR.initialize();

         // ----------------------------------
         // -- Initialize #LAYOUTAPPBARROW1 --
         // ----------------------------------
         LAYOUTAPPBARROW1.setDisplayPosition( 1 );
         LAYOUTAPPBARROW1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARROW1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPBARCOLUMN1 --
         // -------------------------------------
         LAYOUTAPPBARCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPBARCOLUMN1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTAPPBARITEM1 --
         // -----------------------------------
         LAYOUTAPPBARITEM1.setAlignment( "CENTERRIGHT" );
         LAYOUTAPPBARITEM1.setColumn( LAYOUTAPPBARCOLUMN1 );
         LAYOUTAPPBARITEM1.setManage( FILTERICON );
         LAYOUTAPPBARITEM1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARITEM1.setRow( LAYOUTAPPBARROW1 );
         LAYOUTAPPBARITEM1.setSizing( "NONE" );
         LAYOUTAPPBARITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTAPPDRAWER --
         // ---------------------------------
         LAYOUTAPPDRAWER.initialize();

         // ----------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERCOLUMN1 --
         // ----------------------------------------
         LAYOUTAPPDRAWERCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERCOLUMN1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERCOLUMN1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERROW1 --
         // -------------------------------------
         LAYOUTAPPDRAWERROW1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERROW1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERROW1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM1 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM1.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM1.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM1.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM1.setManage( NAVBUTTON1 );
         LAYOUTAPPDRAWERITEM1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM1.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM2 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM2.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM2.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM2.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM2.setManage( NAVBUTTON2 );
         LAYOUTAPPDRAWERITEM2.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM2.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM2.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM3 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM3.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM3.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM3.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM3.setManage( NAVBUTTON3 );
         LAYOUTAPPDRAWERITEM3.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM3.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM3.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM4 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM4.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM4.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM4.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM4.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM4.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM4.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM5 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM5.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM5.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM5.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM5.setManage( NAVBUTTON5 );
         LAYOUTAPPDRAWERITEM5.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM5.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM5.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 1 );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setWidth( 1200 );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaption( "Left Navigation" );
         APPBAR.setCaptionMarginBottom( 0 );
         APPBAR.setCaptionMarginRight( 0 );
         APPBAR.setCaptionMarginTop( 0 );
         APPBAR.setIcon( "menu" );
         APPBAR.setLayoutManager( LAYOUTAPPBAR );
         APPBAR.initialize();

         // ----------------------------
         // -- Initialize #FILTERICON --
         // ----------------------------
         FILTERICON.setDisplayPosition( 1 );
         FILTERICON.setIcon( "search" );
         FILTERICON.setLeft( 1152 );
         FILTERICON.setParent( APPBAR );
         FILTERICON.setTabPosition( 1 );
         FILTERICON.setTop( 4 );
         FILTERICON.initialize();

         // ---------------------------
         // -- Initialize #APPDRAWER --
         // ---------------------------
         APPDRAWER.setDisplayPosition( 2 );
         APPDRAWER.setParent( this );
         APPDRAWER.setTabPosition( 2 );
         APPDRAWER.setTop( 56 );
         APPDRAWER.setHeight( 744 );
         APPDRAWER.setLayoutManager( LAYOUTAPPDRAWER );
         APPDRAWER.setThemeDrawStyle( "MediumTitle" );
         APPDRAWER.setWidth( 220 );
         APPDRAWER.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON1 --
         // ----------------------------
         NAVBUTTON1.setCaption( "Employees" );
         NAVBUTTON1.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON1.setCaptionMarginLeft( 16 );
         NAVBUTTON1.setDisplayPosition( 1 );
         NAVBUTTON1.setIconMarginLeft( 16 );
         NAVBUTTON1.setLeft( 0 );
         NAVBUTTON1.setParent( APPDRAWER );
         NAVBUTTON1.setTabPosition( 1 );
         NAVBUTTON1.setTabStop( false );
         NAVBUTTON1.setTop( 0 );
         NAVBUTTON1.setWidth( 219 );
         NAVBUTTON1.setManage( EMPLOYEES );
         NAVBUTTON1.setHeight( 48 );
         NAVBUTTON1.setIcon( "view_quilt" );
         NAVBUTTON1.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON2 --
         // ----------------------------
         NAVBUTTON2.setCaption( "Departments" );
         NAVBUTTON2.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON2.setCaptionMarginLeft( 16 );
         NAVBUTTON2.setDisplayPosition( 2 );
         NAVBUTTON2.setIconMarginLeft( 16 );
         NAVBUTTON2.setLeft( 0 );
         NAVBUTTON2.setParent( APPDRAWER );
         NAVBUTTON2.setTabPosition( 2 );
         NAVBUTTON2.setTabStop( false );
         NAVBUTTON2.setTop( 48 );
         NAVBUTTON2.setWidth( 219 );
         NAVBUTTON2.setManage( DEPARTMENTS );
         NAVBUTTON2.setHeight( 48 );
         NAVBUTTON2.setIcon( "view_quilt" );
         NAVBUTTON2.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON3 --
         // ----------------------------
         NAVBUTTON3.setCaption( "Destinations" );
         NAVBUTTON3.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON3.setCaptionMarginLeft( 16 );
         NAVBUTTON3.setDisplayPosition( 3 );
         NAVBUTTON3.setIconMarginLeft( 16 );
         NAVBUTTON3.setLeft( 0 );
         NAVBUTTON3.setParent( APPDRAWER );
         NAVBUTTON3.setTabPosition( 3 );
         NAVBUTTON3.setTabStop( false );
         NAVBUTTON3.setTop( 96 );
         NAVBUTTON3.setWidth( 219 );
         NAVBUTTON3.setManage( DESTINATIONS );
         NAVBUTTON3.setHeight( 48 );
         NAVBUTTON3.setIcon( "view_quilt" );
         NAVBUTTON3.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON5 --
         // ----------------------------
         NAVBUTTON5.setCaption( "Settings" );
         NAVBUTTON5.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON5.setCaptionMarginLeft( 16 );
         NAVBUTTON5.setDisplayPosition( 4 );
         NAVBUTTON5.setIconMarginLeft( 16 );
         NAVBUTTON5.setLeft( 0 );
         NAVBUTTON5.setParent( APPDRAWER );
         NAVBUTTON5.setTabPosition( 4 );
         NAVBUTTON5.setTabStop( false );
         NAVBUTTON5.setTop( 192 );
         NAVBUTTON5.setWidth( 219 );
         NAVBUTTON5.setHeight( 48 );
         NAVBUTTON5.setIcon( "settings" );
         NAVBUTTON5.setManage( SETTINGS );
         NAVBUTTON5.setThemeDrawStyle( "TopDivider" );
         NAVBUTTON5.initialize();

         // ------------------------
         // -- Initialize #FILTER --
         // ------------------------
         FILTER.setAppearance( "NONE" );
         FILTER.setDisplayPosition( 4 );
         FILTER.setHeight( 40 );
         FILTER.setHelperPosition( "NONE" );
         FILTER.setLabel( "Label" );
         FILTER.setLabelPosition( "NONE" );
         FILTER.setLeft( 220 );
         FILTER.setParent( this );
         FILTER.setTabPosition( 4 );
         FILTER.setTop( 56 );
         FILTER.setWidth( 980 );
         FILTER.setIcon( "search" );
         FILTER.setPlaceholder( "Search" );
         FILTER.setThemeDrawStyle( "BottomDivider" );
         FILTER.setVisible( false );
         FILTER.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 3 );
         VIEWCONTAINER.setLeft( 220 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 3 );
         VIEWCONTAINER.setTop( 96 );
         VIEWCONTAINER.setHeight( 704 );
         VIEWCONTAINER.setWidth( 980 );
         VIEWCONTAINER.setAutoSelect( false );
         VIEWCONTAINER.initialize();

         // ---------------------------
         // -- Initialize #EMPLOYEES --
         // ---------------------------
         EMPLOYEES.setHeight( 704 );
         EMPLOYEES.setLeft( 326 );
         EMPLOYEES.setParent( VIEWCONTAINER );
         EMPLOYEES.setWidth( 980 );
         EMPLOYEES.initialize();

         // -----------------------------
         // -- Initialize #DEPARTMENTS --
         // -----------------------------
         DEPARTMENTS.setHeight( 704 );
         DEPARTMENTS.setLeft( 652 );
         DEPARTMENTS.setParent( VIEWCONTAINER );
         DEPARTMENTS.setWidth( 980 );
         DEPARTMENTS.setDisplayPosition( 2 );
         DEPARTMENTS.setTabPosition( 2 );
         DEPARTMENTS.initialize();

         // ------------------------------
         // -- Initialize #DESTINATIONS --
         // ------------------------------
         DESTINATIONS.setHeight( 704 );
         DESTINATIONS.setParent( VIEWCONTAINER );
         DESTINATIONS.setWidth( 980 );
         DESTINATIONS.setDisplayPosition( 3 );
         DESTINATIONS.setTabPosition( 3 );
         DESTINATIONS.setTop( 231 );
         DESTINATIONS.initialize();

         // --------------------------
         // -- Initialize #SETTINGS --
         // --------------------------
         SETTINGS.setDisplayPosition( 4 );
         SETTINGS.setParent( VIEWCONTAINER );
         SETTINGS.setCaption( "Settings" );
         SETTINGS.setHeight( 704 );
         SETTINGS.setWidth( 980 );
         SETTINGS.setLeft( 326 );
         SETTINGS.setTabPosition( 4 );
         SETTINGS.setTop( 231 );
         SETTINGS.initialize();

         // ------------------------
         // -- Initialize #SIGNIN --
         // ------------------------
         SIGNIN.initialize();

         // -----------------------------
         // -- Initialize #FILTERTIMER --
         // -----------------------------
         FILTERTIMER.setStartup( "MANUAL" );
         FILTERTIMER.setInterval( 500 );
         FILTERTIMER.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine4 );

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine3 );

         // ----------------------------------------
         // -- Add Event Handlers for #FILTERICON --
         // ----------------------------------------
         FILTERICON.addEventHandler( "CLICK", this, evtRoutine5 );

         // ------------------------------------
         // -- Add Event Handlers for #FILTER --
         // ------------------------------------
         FILTER.addEventHandler( "CHANGED", this, evtRoutine6 );

         // -------------------------------------------
         // -- Add Event Handlers for #VIEWCONTAINER --
         // -------------------------------------------
         VIEWCONTAINER.addEventHandler( "VIEWCHANGED", this, evtRoutine8 );

         // ------------------------------------
         // -- Add Event Handlers for #SIGNIN --
         // ------------------------------------
         SIGNIN.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // -----------------------------------------
         // -- Add Event Handlers for #FILTERTIMER --
         // -----------------------------------------
         FILTERTIMER.addEventHandler( "TICK", this, evtRoutine7 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNBLUE" ) );
         this.setLayoutManager( LAYOUTMAIN );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 64 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 64 );
      {

         //
         // #SignIn.Show
         //
         rtn.Line( 66 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 68 );
      rtn.end();
   };

   //
   // evtRoutine2 - #SignIn.Completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SignIn.Completed", 70 );

      //
      // EVTROUTINE Handling(#SignIn.Completed)
      //
      rtn.Line( 70 );
      {

         //
         // #Employees.Show
         //
         rtn.Line( 72 );
         ref.EMPLOYEES.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // evtRoutine3 - #AppBar.IconClick
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AppBar.IconClick", 76 );

      //
      // EVTROUTINE Handling(#AppBar.IconClick)
      //
      rtn.Line( 76 );
      {

         //
         // #AppDrawer.ToggleDrawer
         //
         rtn.Line( 78 );
         ref.APPDRAWER.mthTOGGLEDRAWER();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 80 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Sys_Web.DeviceChanged
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sys_Web.DeviceChanged", 82 );

      //
      // EVTROUTINE Handling(#Sys_Web.DeviceChanged)
      //
      rtn.Line( 82 );
      {

         //
         // IF (#Sys_Web.Device = Mobile)
         //
         rtn.Line( 84 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 86 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AppDrawer.DrawerStyle := Permanent
            //
            rtn.Line( 90 );
            ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 94 );
      rtn.end();
   };

   //
   // evtRoutine5 - #FilterIcon.Click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FilterIcon.Click", 96 );

      //
      // EVTROUTINE Handling(#FilterIcon.Click)
      //
      rtn.Line( 96 );
      {

         //
         // IF (#Filter <> "")
         //
         rtn.Line( 98 );
         if ( Lansa.String.ne( ref.FILTER.get(), "" ) )
         {

            //
            // #Filter := ""
            //
            rtn.Line( 100 );
            ref.FILTER.set( "" );

            //
            // #FilterTimer.Start
            //
            rtn.Line( 102 );
            ref.FILTERTIMER.mthSTART();

         //
         // ENDIF 
         //
         }

         //
         // #Filter.Visible := *Not #Filter.Visible
         //
         rtn.Line( 106 );
         ref.FILTER.setVisible( Lansa.not( ref.FILTER.getVisible() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 108 );
      rtn.end();
   };

   //
   // evtRoutine6 - #Filter.Changed
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Filter.Changed", 110 );

      //
      // EVTROUTINE Handling(#Filter.Changed)
      //
      rtn.Line( 110 );
      {

         //
         // #FilterTimer.Stop
         //
         rtn.Line( 112 );
         ref.FILTERTIMER.mthSTOP();

         //
         // #FilterTimer.Start
         //
         rtn.Line( 113 );
         ref.FILTERTIMER.mthSTART();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 115 );
      rtn.end();
   };

   //
   // evtRoutine7 - #FilterTimer.Tick
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FilterTimer.Tick", 117 );

      //
      // EVTROUTINE Handling(#FilterTimer.Tick)
      //
      rtn.Line( 117 );
      {

         //
         // #FilterTimer.Stop
         //
         rtn.Line( 119 );
         ref.FILTERTIMER.mthSTOP();

         //
         // SET Com(#Employees #Departments #Destinations) Filter(#Filter)
         //
         rtn.Line( 121 );
         ref.EMPLOYEES.setFILTER( ref.FILTER.get() );
         ref.DEPARTMENTS.setFILTER( ref.FILTER.get() );
         ref.DESTINATIONS.setFILTER( ref.FILTER.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 123 );
      rtn.end();
   };

   //
   // evtRoutine8 - #ViewContainer.ViewChanged
   //
   function evtRoutine8( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ViewContainer.ViewChanged", 125 );

      //
      // EVTROUTINE Handling(#ViewContainer.ViewChanged)
      //
      rtn.Line( 125 );
      {

         //
         // #Filter := ""
         //
         rtn.Line( 127 );
         ref.FILTER.set( "" );

         //
         // #Filter.Visible := False
         //
         rtn.Line( 129 );
         ref.FILTER.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 131 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "A01EMPLOY", "A01DEPART", "A01DESTIN", "A01SETTIN", "A01SIGNIN" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.AppBar", "PRIM_MD.Icon", "PRIM_MD.AppDrawer", "PRIM_MD.NavButton", "PRIM_MD.Edit", "PRIM_MD.ViewContainer", "PRIM_TIMR" ]
});

//# sourceURL=a01main.js
