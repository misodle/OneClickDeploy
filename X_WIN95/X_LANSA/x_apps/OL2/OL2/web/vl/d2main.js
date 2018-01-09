// ----------------------
// -- Web Page: D2MAIN --
// ----------------------
LANSA.addComponent(
{
   id: "D2MAIN", 
   nm: "D2Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Simple CRUD", 
   tl: 14020001
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   if ( Lansa.getCurrentLanguage() == "FRA" )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: { "ENG": "Entries .......", "FRA": "Entrées . . . ." }[ curLanguage ],
         h1: { "ENG": "Number", "FRA": "Nombre" }[ curLanguage ],
         h2: { "ENG": "of Entrys", "FRA": "d´Entrées" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Number of entries in a browse list", "FRA": "Liste, nombre d´entrées ds liste BROWSE" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
      fd: Fields, 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "D2MAIN", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Backgroundbrush(#Brush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(Theme300)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Facename('Verdana') Fontsize(9) Fontweight(Bold)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(Theme100)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush3) Color(Theme100)
         //
         var BRUSH3 = this.createReference( "BRUSH3", "PRIM_VS", "SolidBrush" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) Displayposition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#AppBar) Parent(#LayoutMain) Row(#LayoutMainRow1) Columnspan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToHeight)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn2) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow2)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem4) Manage(#SearchPanel) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToWidth) Column(#LayoutMainColumn1) Columnspan(2) Alignment(TopCenter)
         //
         var LAYOUTMAINITEM4 = this.createReference( "LAYOUTMAINITEM4", "PRIM_TBLO", "Item" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem4) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton4) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM4 = this.createReference( "LAYOUTAPPDRAWERITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem5) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton5) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM5 = this.createReference( "LAYOUTAPPDRAWERITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem2) Manage(#SearchPanel) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth) Column(#LayoutAppDrawerColumn1) Alignment(TopCenter)
         //
         var LAYOUTAPPDRAWERITEM2 = this.createReference( "LAYOUTAPPDRAWERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout1Row1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUT1ROW1 = this.createReference( "LAYOUT1ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout1Column1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUT1COLUMN1 = this.createReference( "LAYOUT1COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Alignment(CenterRight) Column(#Layout1Column1) Manage(#SearchIcon) Parent(#Layout1) Row(#Layout1Row1) Sizing(None) Flow(Left)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout2)
         //
         var LAYOUT2 = this.createReference( "LAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout2Row1) Displayposition(1) Parent(#Layout2)
         //
         var LAYOUT2ROW1 = this.createReference( "LAYOUT2ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout2Column1) Displayposition(1) Parent(#Layout2)
         //
         var LAYOUT2COLUMN1 = this.createReference( "LAYOUT2COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout2Item1) Alignment(TopCenter) Column(#Layout2Column1) Manage(#SearchPanel) Parent(#Layout2) Row(#Layout2Row1) Sizing(FitToWidth)
         //
         var LAYOUT2ITEM1 = this.createReference( "LAYOUT2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout2Item2) Alignment(CenterRight) Column(#Layout2Column1) Manage(#ClearIcon) Parent(#Layout2) Row(#Layout2Row1) Sizing(None)
         //
         var LAYOUT2ITEM2 = this.createReference( "LAYOUT2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout2Item3) Column(#Layout2Column1) Manage(#Search) Parent(#Layout2) Row(#Layout2Row1) Sizing(FitToWidth) Marginright(32)
         //
         var LAYOUT2ITEM3 = this.createReference( "LAYOUT2ITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#AppBar) Displayposition(3) Parent(#COM_OWNER) Tabposition(1) Width(1200) Themedrawstyle('Heading1') Captionmarginleft(15) Caption('My Demo App') Captionmarginbottom(0) Captionmarginright(0) Captionmargintop(0) Icon('menu') Layoutmanager(#Layout1) Style(#Style4)
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Top(56) Height(744) Layoutmanager(#LayoutAppDrawer) Themedrawstyle('MediumTitle') Width(220) Style(#Style3)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) Displayposition(4) Left(220) Parent(#COM_OWNER) Tabposition(3) Top(56) Height(744) Width(980)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton1) Caption('Tickets') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(1) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(1) Tabstop(False) Top(0) Width(219) Manage(#View1) Height(48) Icon('view_quilt') Hint('Maintain Tickets') Hinttitle('Application')
         //
         var NAVBUTTON1 = this.createReference( "NAVBUTTON1", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#D2VIEW1) Name(#View1) Height(744) Parent(#ViewContainer) Width(980) Left(326)
         //
         var VIEW1 = this.createReference( "VIEW1", "D2VIEW1" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton4) Caption('Help') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(2) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(3) Tabstop(False) Top(48) Width(219) Height(48) Icon('help_outline') Themedrawstyle('TopDivider') Hint('Application Help & Information') Hinttitle('Help')
         //
         var NAVBUTTON4 = this.createReference( "NAVBUTTON4", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton5) Caption('Settings') Captionalignment(CenterLeft) Captionmarginleft(16) Displayposition(3) Iconmarginleft(16) Left(0) Parent(#AppDrawer) Tabposition(2) Tabstop(False) Top(96) Width(219) Height(48) Icon('settings') Hint('Set Application Settings & Theme') Hinttitle('Settings')
         //
         var NAVBUTTON5 = this.createReference( "NAVBUTTON5", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#D2Settings) Name(#d2settings) Displayposition(2) Height(744) Left(652) Parent(#ViewContainer) Tabposition(2) Width(980)
         //
         var D2SETTINGS = this.createReference( "D2SETTINGS", "D2SETTING" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#SearchPanel) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(56) Width(1200) Height(41) Style(#Style1) Layoutmanager(#Layout2) Visible(False) Opacity(80)
         //
         var SEARCHPANEL = this.createReference( "SEARCHPANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#SearchIcon) Displayposition(1) Icon('search') Left(1152) Parent(#AppBar) Tabposition(1) Top(4) Paddingright(10) Hint('Search and filter my List') Hinttitle('Search')
         //
         var SEARCHICON = this.createReference( "SEARCHICON", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.Edit) Name(#Search) Appearance(None) Displayposition(1) Height(40) Helperposition(None) Icon('search') Label('Label') Labelposition(None) Left(0) Parent(#SearchPanel) Tabposition(1) Top(0) Width(1168) Placeholder('Type your Search Keyword here') Placeholdercolor(ThemePopup) Iconcolor(ThemePopup)
         //
         var SEARCH = this.createReference( "SEARCH", "PRIM_MD", "Edit" );

         //
         // DEFINE_COM Class(#PRIM_MD.Badge) Name(#BadgeListCount) Caption('11') Control(#SearchIcon) Displayposition(1) Height(16) Iconalignment(Center) Left(19) Tabposition(1) Themedrawstyle('DarkAccent') Width(24) Badgemarginright(0) Badgemargintop(5) Visible(False) Badgemarginleft(5) Style(#Style2) Top(5) Ellipses(False) Badgesizing(ContentWidth)
         //
         var BADGELISTCOUNT = this.createReference( "BADGELISTCOUNT", "PRIM_MD", "Badge" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#ClearIcon) Displayposition(2) Icon('clear') Left(1168) Parent(#SearchPanel) Tabposition(2) Top(4) Height(32) Width(32) Iconcolor(ThemePopup) Hint('Clear Search criteria and rebuild list') Hinttitle('Clear Search')
         //
         var CLEARICON = this.createReference( "CLEARICON", "PRIM_MD", "Icon" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBackgroundBrush( BRUSH1 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEME300" );
         BRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setFaceName( "Verdana" );
         STYLE2.setFontSize( 9 );
         STYLE2.setFontWeight( "BOLD" );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "THEME100" );
         BRUSH2.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #BRUSH3 --
         // ------------------------
         BRUSH3.setColor( "THEME100" );
         BRUSH3.initialize();

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
         LAYOUTMAINROW2.initialize();

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
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM3.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM4 --
         // ---------------------------------
         LAYOUTMAINITEM4.setManage( SEARCHPANEL );
         LAYOUTMAINITEM4.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM4.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM4.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM4.setColumnSpan( 2 );
         LAYOUTMAINITEM4.setAlignment( "TOPCENTER" );
         LAYOUTMAINITEM4.initialize();

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
         // -- Initialize #LAYOUTAPPDRAWERITEM4 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM4.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM4.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM4.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM4.setManage( NAVBUTTON4 );
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

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM2 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM2.setManage( SEARCHPANEL );
         LAYOUTAPPDRAWERITEM2.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM2.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM2.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM2.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM2.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT1ROW1 --
         // -----------------------------
         LAYOUT1ROW1.setDisplayPosition( 1 );
         LAYOUT1ROW1.setParent( LAYOUT1 );
         LAYOUT1ROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUT1COLUMN1 --
         // --------------------------------
         LAYOUT1COLUMN1.setDisplayPosition( 1 );
         LAYOUT1COLUMN1.setParent( LAYOUT1 );
         LAYOUT1COLUMN1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM1 --
         // ------------------------------
         LAYOUT1ITEM1.setAlignment( "CENTERRIGHT" );
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setManage( SEARCHICON );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM1.setSizing( "NONE" );
         LAYOUT1ITEM1.setFlow( "LEFT" );
         LAYOUT1ITEM1.initialize();

         // -------------------------
         // -- Initialize #LAYOUT2 --
         // -------------------------
         LAYOUT2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT2ROW1 --
         // -----------------------------
         LAYOUT2ROW1.setDisplayPosition( 1 );
         LAYOUT2ROW1.setParent( LAYOUT2 );
         LAYOUT2ROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUT2COLUMN1 --
         // --------------------------------
         LAYOUT2COLUMN1.setDisplayPosition( 1 );
         LAYOUT2COLUMN1.setParent( LAYOUT2 );
         LAYOUT2COLUMN1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT2ITEM1 --
         // ------------------------------
         LAYOUT2ITEM1.setAlignment( "TOPCENTER" );
         LAYOUT2ITEM1.setColumn( LAYOUT2COLUMN1 );
         LAYOUT2ITEM1.setManage( SEARCHPANEL );
         LAYOUT2ITEM1.setParent( LAYOUT2 );
         LAYOUT2ITEM1.setRow( LAYOUT2ROW1 );
         LAYOUT2ITEM1.setSizing( "FITTOWIDTH" );
         LAYOUT2ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT2ITEM2 --
         // ------------------------------
         LAYOUT2ITEM2.setAlignment( "CENTERRIGHT" );
         LAYOUT2ITEM2.setColumn( LAYOUT2COLUMN1 );
         LAYOUT2ITEM2.setManage( CLEARICON );
         LAYOUT2ITEM2.setParent( LAYOUT2 );
         LAYOUT2ITEM2.setRow( LAYOUT2ROW1 );
         LAYOUT2ITEM2.setSizing( "NONE" );
         LAYOUT2ITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT2ITEM3 --
         // ------------------------------
         LAYOUT2ITEM3.setColumn( LAYOUT2COLUMN1 );
         LAYOUT2ITEM3.setManage( SEARCH );
         LAYOUT2ITEM3.setParent( LAYOUT2 );
         LAYOUT2ITEM3.setRow( LAYOUT2ROW1 );
         LAYOUT2ITEM3.setSizing( "FITTOWIDTH" );
         LAYOUT2ITEM3.setMarginRight( 32 );
         LAYOUT2ITEM3.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 3 );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setWidth( 1200 );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaptionMarginLeft( 15 );
         APPBAR.setCaption( "My Demo App" );
         APPBAR.setCaptionMarginBottom( 0 );
         APPBAR.setCaptionMarginRight( 0 );
         APPBAR.setCaptionMarginTop( 0 );
         APPBAR.setIcon( "menu" );
         APPBAR.setLayoutManager( LAYOUT1 );
         APPBAR.setStyle( STYLE4 );
         APPBAR.initialize();

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
         APPDRAWER.setStyle( STYLE3 );
         APPDRAWER.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 4 );
         VIEWCONTAINER.setLeft( 220 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 3 );
         VIEWCONTAINER.setTop( 56 );
         VIEWCONTAINER.setHeight( 744 );
         VIEWCONTAINER.setWidth( 980 );
         VIEWCONTAINER.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON1 --
         // ----------------------------
         NAVBUTTON1.setCaption( "Tickets" );
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
         NAVBUTTON1.setManage( VIEW1 );
         NAVBUTTON1.setHeight( 48 );
         NAVBUTTON1.setIcon( "view_quilt" );
         NAVBUTTON1.setHint( "Maintain Tickets" );
         NAVBUTTON1.setHintTitle( "Application" );
         NAVBUTTON1.initialize();

         // -----------------------
         // -- Initialize #VIEW1 --
         // -----------------------
         VIEW1.setHeight( 744 );
         VIEW1.setParent( VIEWCONTAINER );
         VIEW1.setWidth( 980 );
         VIEW1.setLeft( 326 );
         VIEW1.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON4 --
         // ----------------------------
         NAVBUTTON4.setCaption( "Help" );
         NAVBUTTON4.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON4.setCaptionMarginLeft( 16 );
         NAVBUTTON4.setDisplayPosition( 2 );
         NAVBUTTON4.setIconMarginLeft( 16 );
         NAVBUTTON4.setLeft( 0 );
         NAVBUTTON4.setParent( APPDRAWER );
         NAVBUTTON4.setTabPosition( 3 );
         NAVBUTTON4.setTabStop( false );
         NAVBUTTON4.setTop( 48 );
         NAVBUTTON4.setWidth( 219 );
         NAVBUTTON4.setHeight( 48 );
         NAVBUTTON4.setIcon( "help_outline" );
         NAVBUTTON4.setThemeDrawStyle( "TopDivider" );
         NAVBUTTON4.setHint( "Application Help & Information" );
         NAVBUTTON4.setHintTitle( "Help" );
         NAVBUTTON4.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON5 --
         // ----------------------------
         NAVBUTTON5.setCaption( "Settings" );
         NAVBUTTON5.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON5.setCaptionMarginLeft( 16 );
         NAVBUTTON5.setDisplayPosition( 3 );
         NAVBUTTON5.setIconMarginLeft( 16 );
         NAVBUTTON5.setLeft( 0 );
         NAVBUTTON5.setParent( APPDRAWER );
         NAVBUTTON5.setTabPosition( 2 );
         NAVBUTTON5.setTabStop( false );
         NAVBUTTON5.setTop( 96 );
         NAVBUTTON5.setWidth( 219 );
         NAVBUTTON5.setHeight( 48 );
         NAVBUTTON5.setIcon( "settings" );
         NAVBUTTON5.setHint( "Set Application Settings & Theme" );
         NAVBUTTON5.setHintTitle( "Settings" );
         NAVBUTTON5.initialize();

         // ----------------------------
         // -- Initialize #D2SETTINGS --
         // ----------------------------
         D2SETTINGS.setDisplayPosition( 2 );
         D2SETTINGS.setHeight( 744 );
         D2SETTINGS.setLeft( 652 );
         D2SETTINGS.setParent( VIEWCONTAINER );
         D2SETTINGS.setTabPosition( 2 );
         D2SETTINGS.setWidth( 980 );
         D2SETTINGS.initialize();

         // -----------------------------
         // -- Initialize #SEARCHPANEL --
         // -----------------------------
         SEARCHPANEL.setDisplayPosition( 1 );
         SEARCHPANEL.setLeft( 0 );
         SEARCHPANEL.setParent( this );
         SEARCHPANEL.setTabPosition( 4 );
         SEARCHPANEL.setTabStop( false );
         SEARCHPANEL.setTop( 56 );
         SEARCHPANEL.setWidth( 1200 );
         SEARCHPANEL.setHeight( 41 );
         SEARCHPANEL.setStyle( STYLE1 );
         SEARCHPANEL.setLayoutManager( LAYOUT2 );
         SEARCHPANEL.setVisible( false );
         SEARCHPANEL.setOpacity( 80 );
         SEARCHPANEL.initialize();

         // ----------------------------
         // -- Initialize #SEARCHICON --
         // ----------------------------
         SEARCHICON.setDisplayPosition( 1 );
         SEARCHICON.setIcon( "search" );
         SEARCHICON.setLeft( 1152 );
         SEARCHICON.setParent( APPBAR );
         SEARCHICON.setTabPosition( 1 );
         SEARCHICON.setTop( 4 );
         SEARCHICON.setPaddingRight( 10 );
         SEARCHICON.setHint( "Search and filter my List" );
         SEARCHICON.setHintTitle( "Search" );
         SEARCHICON.initialize();

         // ------------------------
         // -- Initialize #SEARCH --
         // ------------------------
         SEARCH.setAppearance( "NONE" );
         SEARCH.setDisplayPosition( 1 );
         SEARCH.setHeight( 40 );
         SEARCH.setHelperPosition( "NONE" );
         SEARCH.setIcon( "search" );
         SEARCH.setLabel( "Label" );
         SEARCH.setLabelPosition( "NONE" );
         SEARCH.setLeft( 0 );
         SEARCH.setParent( SEARCHPANEL );
         SEARCH.setTabPosition( 1 );
         SEARCH.setTop( 0 );
         SEARCH.setWidth( 1168 );
         SEARCH.setPlaceholder( "Type your Search Keyword here" );
         SEARCH.setPlaceholderColor( "THEMEPOPUP" );
         SEARCH.setIconColor( "THEMEPOPUP" );
         SEARCH.initialize();

         // --------------------------------
         // -- Initialize #BADGELISTCOUNT --
         // --------------------------------
         BADGELISTCOUNT.setCaption( "11" );
         BADGELISTCOUNT.setControl( SEARCHICON );
         BADGELISTCOUNT.setDisplayPosition( 1 );
         BADGELISTCOUNT.setHeight( 16 );
         BADGELISTCOUNT.setIconAlignment( "CENTER" );
         BADGELISTCOUNT.setLeft( 19 );
         BADGELISTCOUNT.setTabPosition( 1 );
         BADGELISTCOUNT.setThemeDrawStyle( "DarkAccent" );
         BADGELISTCOUNT.setWidth( 24 );
         BADGELISTCOUNT.setBadgeMarginRight( 0 );
         BADGELISTCOUNT.setBadgeMarginTop( 5 );
         BADGELISTCOUNT.setVisible( false );
         BADGELISTCOUNT.setBadgeMarginLeft( 5 );
         BADGELISTCOUNT.setStyle( STYLE2 );
         BADGELISTCOUNT.setTop( 5 );
         BADGELISTCOUNT.setEllipses( false );
         BADGELISTCOUNT.setBadgeSizing( "CONTENTWIDTH" );
         BADGELISTCOUNT.initialize();

         // ---------------------------
         // -- Initialize #CLEARICON --
         // ---------------------------
         CLEARICON.setDisplayPosition( 2 );
         CLEARICON.setIcon( "clear" );
         CLEARICON.setLeft( 1168 );
         CLEARICON.setParent( SEARCHPANEL );
         CLEARICON.setTabPosition( 2 );
         CLEARICON.setTop( 4 );
         CLEARICON.setHeight( 32 );
         CLEARICON.setWidth( 32 );
         CLEARICON.setIconColor( "THEMEPOPUP" );
         CLEARICON.setHint( "Clear Search criteria and rebuild list" );
         CLEARICON.setHintTitle( "Clear Search" );
         CLEARICON.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine2 );

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine1 );

         // -----------------------------------
         // -- Add Event Handlers for #VIEW1 --
         // -----------------------------------
         VIEW1.addEventHandler( "UPDATEBADGE", this, evtRoutine5 );

         // ----------------------------------------
         // -- Add Event Handlers for #SEARCHICON --
         // ----------------------------------------
         SEARCHICON.addEventHandler( "CLICK", this, evtRoutine3 );

         // ------------------------------------
         // -- Add Event Handlers for #SEARCH --
         // ------------------------------------
         SEARCH.addEventHandler( "ENTER", this, evtRoutine4 );

         // ---------------------------------------
         // -- Add Event Handlers for #CLEARICON --
         // ---------------------------------------
         CLEARICON.addEventHandler( "CLICK", this, evtRoutine6 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNDEEPPURPLE" ) );
         this.setLayoutManager( LAYOUTMAIN );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #AppBar.IconClick
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AppBar.IconClick", 74 );

      //
      // EVTROUTINE Handling(#AppBar.IconClick)
      //
      rtn.Line( 74 );
      {

         //
         // #AppDrawer.ToggleDrawer
         //
         rtn.Line( 75 );
         ref.APPDRAWER.mthTOGGLEDRAWER();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Sys_Web.DeviceChanged
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sys_Web.DeviceChanged", 79 );

      //
      // EVTROUTINE Handling(#Sys_Web.DeviceChanged)
      //
      rtn.Line( 79 );
      {

         //
         // IF (#Sys_Web.Device = Mobile)
         //
         rtn.Line( 80 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 82 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

            //
            // #AppDrawer.Width := 220
            //
            rtn.Line( 83 );
            ref.APPDRAWER.setWidth( 220 );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // IF (#Sys_Web.Device = Tablet)
            //
            rtn.Line( 85 );
            if ( Lansa.String.eq( Lansa.WEB().getDevice(), "TABLET" ) )
            {

               //
               // #AppDrawer.DrawerStyle := Permanent
               //
               rtn.Line( 87 );
               ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

               //
               // #AppDrawer.Width := 60
               //
               rtn.Line( 88 );
               ref.APPDRAWER.setWidth( 60 );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #AppDrawer.DrawerStyle := Permanent
               //
               rtn.Line( 91 );
               ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

               //
               // #AppDrawer.Width := 220
               //
               rtn.Line( 92 );
               ref.APPDRAWER.setWidth( 220 );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      rtn.end();
   };

   //
   // evtRoutine3 - #SearchIcon.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchIcon.Click", 98 );

      //
      // EVTROUTINE Handling(#SearchIcon.Click)
      //
      rtn.Line( 98 );
      {

         //
         // IF (#SearchPanel.Visible)
         //
         rtn.Line( 99 );
         if ( ref.SEARCHPANEL.getVisible() )
         {

            //
            // #SearchPanel.FadeOut( 500 )
            //
            rtn.Line( 101 );
            ref.SEARCHPANEL.mthFADEOUT( 500 );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #SearchPanel.FadeIn( 500 )
            //
            rtn.Line( 104 );
            ref.SEARCHPANEL.mthFADEIN( 500 );

            //
            // #Search.SetFocus
            //
            rtn.Line( 106 );
            ref.SEARCH.mthSETFOCUS();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 108 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Search.Enter
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Search.Enter", 111 );

      //
      // EVTROUTINE Handling(#Search.Enter)
      //
      rtn.Line( 111 );
      {

         //
         // IF (#ViewContainer.ActiveView *IsEqualTo #View1)
         //
         rtn.Line( 112 );
         if ( ( ref.VIEWCONTAINER.getActiveView() === ref.VIEW1 ) )
         {

            //
            // #View1.BuildList Searchkeyword(#Search.Value)
            //
            rtn.Line( 114 );
            ref.VIEW1.mthBUILDLIST( ref.SEARCH.getValue() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 116 );
      rtn.end();
   };

   //
   // evtRoutine5 - #View1.UpdateBadge
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#View1.UpdateBadge", 119 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var RESULTCOUNT = parms.ref( "RESULTCOUNT" );

      //
      // EVTROUTINE Handling(#View1.UpdateBadge) Resultcount(#ResultCount)
      //
      rtn.Line( 119 );
      {

         //
         // #BadgeListCount.Caption := #ResultCount.AsString
         //
         rtn.Line( 121 );
         ref.BADGELISTCOUNT.setCaption( Lansa.Number.AsString( RESULTCOUNT.get() ) );

         //
         // #BadgeListCount.Visible := True
         //
         rtn.Line( 122 );
         ref.BADGELISTCOUNT.setVisible( true );

         //
         // #SearchPanel.FadeOut( 500 )
         //
         rtn.Line( 124 );
         ref.SEARCHPANEL.mthFADEOUT( 500 );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 125 );
      rtn.end();
   };

   //
   // evtRoutine6 - #ClearIcon.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ClearIcon.Click", 128 );

      //
      // EVTROUTINE Handling(#ClearIcon.Click)
      //
      rtn.Line( 128 );
      {

         //
         // IF (#ViewContainer.ActiveView *IsEqualTo #View1)
         //
         rtn.Line( 130 );
         if ( ( ref.VIEWCONTAINER.getActiveView() === ref.VIEW1 ) )
         {

            //
            // #Search.Value := *BLANKS
            //
            rtn.Line( 131 );
            ref.SEARCH.setValue( "" );

            //
            // #View1.BuildList Searchkeyword(#Search.Value)
            //
            rtn.Line( 133 );
            ref.VIEW1.mthBUILDLIST( ref.SEARCH.getValue() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 135 );
      rtn.end();
   };

   // ------------------------------
   // -- LISTCOUNT Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.LISTCOUNT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.LISTCOUNT );
      };

      Lansa.createFieldClass( { co: Fields.LISTCOUNT.DataClass, an: "PRIM_FLD", fn: "LISTCOUNT" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "D2VIEW1", "D2SETTING" ],
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.AppBar", "PRIM_MD.AppDrawer", "PRIM_MD.ViewContainer", "PRIM_MD.NavButton", "PRIM_PANL", "PRIM_MD.Icon", "PRIM_MD.Edit", "PRIM_MD.Badge", "PRIM_FLD", "PRIM_HINT" ],
   dp: [ "PRIM_ANIM" ]
});

//# sourceURL=d2main.js
