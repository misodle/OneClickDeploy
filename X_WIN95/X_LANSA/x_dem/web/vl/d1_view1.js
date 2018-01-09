// --------------------
// -- View: D1_VIEW1 --
// --------------------
LANSA.addComponent(
{
   id: "D1_VIEW1", 
   nm: "D1_View1", 
   ot: "wv", 
   tp: "View", 
   de: "Tickets", 
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
      TICKETNUM:
      {
         nm: "TICKETNUM",
         an: "TicketNumber",
         ft: "S",
         ln: 9,
         dc: 0,
         lb: "Ticket Number",
         h1: "Ticket",
         h2: "Number",
         h3: " ",
         de: "Ticket Number",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
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
      },
      PROBLEMDE:
      {
         nm: "PROBLEMDE",
         an: "ProblemDescription",
         ft: "NV",
         ln: 65535,
         dc: 0,
         lb: "Problem Descrip",
         h1: "Problem",
         h2: "Description",
         h3: " ",
         de: "Problem Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      LOGGEDDAT:
      {
         nm: "LOGGEDDAT",
         an: "LoggedDate",
         ft: "DT",
         ln: 26,
         dc: 0,
         lb: "Logged Date",
         h1: "Logged",
         h2: "Date",
         h3: " ",
         de: "Logged Date",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO", "SUTC" ]
      },
      CUSTOMER:
      {
         nm: "CUSTOMER",
         an: "Customer",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: "Customer",
         h1: "Customer",
         h2: " ",
         h3: " ",
         de: "Customer",
         dv: "",
         ia: [ "FE" ]
      },
      CUSTOMERP:
      {
         nm: "CUSTOMERP",
         an: "CustomerPhoneNumber",
         ft: "A",
         ln: 20,
         dc: 0,
         lb: "Phone Number",
         h1: "Phone",
         h2: "Number",
         h3: " ",
         de: "Phone Number",
         dv: "",
         ia: [ "FE" ]
      },
      W_ENTRIES:
      {
         nm: "W_ENTRIES",
         ft: "P",
         ln: 9,
         dc: 0,
         lb: "w_entries",
         h1: "w_entries",
         h2: "",
         h3: "",
         de: "w_entries",
         dv: 0
      },
      STD_ALPHA:
      {
         nm: "STD_ALPHA",
         ft: "A",
         ln: 1,
         dc: 0,
         lb: { "ENG": "std alpha field", "FRA": "Zone alpha std" }[ curLanguage ],
         h1: { "ENG": "standard", "FRA": "Zone" }[ curLanguage ],
         h2: "alpha",
         h3: { "ENG": "field", "FRA": "std" }[ curLanguage ],
         de: { "ENG": "Standard alpha field", "FRA": "Zone alpha standard" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_VIEW", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         More: 
         {
         }
      },

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
         var fld = this.addFields( "D1_VIEW1", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PrimaryCellStyle) Fontsize(120) Fontunits(Percent) Textcolor(ThemeText)
         //
         var PRIMARYCELLSTYLE = this.createReference( "PRIMARYCELLSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#SecondaryCellStyle) Textcolor(ThemeText)
         //
         var SECONDARYCELLSTYLE = this.createReference( "SECONDARYCELLSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#TertiaryCellStyle) Textcolor(ThemeSecondaryText)
         //
         var TERTIARYCELLSTYLE = this.createReference( "TERTIARYCELLSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow2) Displayposition(2) Parent(#LayoutMain)
         //
         var LAYOUTROW2 = this.createReference( "LAYOUTROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn2) Displayposition(1) Parent(#LayoutMain)
         //
         var LAYOUTCOLUMN2 = this.createReference( "LAYOUTCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) Displayposition(1) Parent(#LayoutMain) Minheight(100) Maxheight(100)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#LayoutColumn2) Manage(#MessageList) Parent(#LayoutMain) Row(#LayoutRow2)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(BottomRight) Column(#LayoutColumn2) Manage(#ButtonCompose) Parent(#LayoutMain) Row(#LayoutRow2) Sizing(None) Marginbottom(16) Marginright(16)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutListItem)
         //
         var LAYOUTLISTITEM = this.createReference( "LAYOUTLISTITEM", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutRow1) Displayposition(1) Parent(#LayoutListItem)
         //
         var LAYOUTROW1 = this.createReference( "LAYOUTROW1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutColumn1) Displayposition(1) Parent(#LayoutListItem)
         //
         var LAYOUTCOLUMN1 = this.createReference( "LAYOUTCOLUMN1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(CenterLeft) Column(#LayoutRow1) Manage(#ImageCell) Marginleft(20) Parent(#LayoutListItem) Row(#LayoutColumn1) Sizing(None)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(CenterLeft) Column(#LayoutRow1) Flow(CenterVertical) Manage(#PrimaryCell) Marginleft(86) Marginright(16) Parent(#LayoutListItem) Row(#LayoutColumn1) Sizing(FitToWidth)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(CenterLeft) Column(#LayoutRow1) Flow(CenterVertical) Manage(#SecondaryCell) Marginleft(86) Marginright(16) Parent(#LayoutListItem) Row(#LayoutColumn1) Sizing(FitToWidth)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(CenterLeft) Column(#LayoutRow1) Flow(CenterVertical) Manage(#TertiaryCell) Marginleft(86) Marginright(16) Parent(#LayoutListItem) Row(#LayoutColumn1) Sizing(FitToWidth)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.List) Name(#MessageList) Displayposition(5) Layoutmanager(#LayoutListItem) Left(0) Parent(#COM_OWNER) Rowheight(88) Tabposition(1) Height(349) Width(633) Top(100)
         //
         var MESSAGELIST = this.createReference( "MESSAGELIST", "PRIM_MD", "List" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#ImageCell) Displayposition(1) Icon('image') Iconimagesizing(Cropped) Left(20) Parent(#MessageList) Tabposition(3) Top(19) Iconheight(22) Height(50) Width(50) Themedrawstyle('MediumTitle')
         //
         var IMAGECELL = this.createReference( "IMAGECELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#PrimaryCell) Caption('Primary Text') Displayposition(4) Height(20) Left(86) Parent(#MessageList) Style(#PrimaryCellStyle) Tabposition(4) Top(14) Width(531)
         //
         var PRIMARYCELL = this.createReference( "PRIMARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#SecondaryCell) Caption('Secondary Text') Displayposition(5) Height(20) Left(86) Parent(#MessageList) Style(#SecondaryCellStyle) Tabposition(5) Top(34) Width(531)
         //
         var SECONDARYCELL = this.createReference( "SECONDARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#TertiaryCell) Caption('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus...') Displayposition(6) Height(20) Left(86) Parent(#MessageList) Style(#TertiaryCellStyle) Tabposition(6) Top(54) Width(531)
         //
         var TERTIARYCELL = this.createReference( "TERTIARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ActionButton) Name(#ButtonCompose) Displayposition(4) Icon('add') Left(561) Parent(#COM_OWNER) Tabposition(2) Top(377) Themedrawstyle('DarkAccent') Tabstop(False)
         //
         var BUTTONCOMPOSE = this.createReference( "BUTTONCOMPOSE", "PRIM_MD", "ActionButton" );

         //
         // DEFINE_COM Class(#D1_Add_Ticket) Name(#D1_Add_Ticket)
         //
         var D1_ADD_TICKET = this.createReference( "D1_ADD_TICKET", "D1_ADD_TI" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Label1') Displayposition(6) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(0) Verticalalignment(Center) Width(120)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Caption('Top') Displayposition(3) Left(232) Parent(#COM_OWNER) Tabposition(4) Top(64)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Label2') Displayposition(7) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(32) Verticalalignment(Center) Width(120)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('Label3') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(64) Verticalalignment(Center) Width(120)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#Button) Caption('Bottom') Displayposition(1) Left(368) Parent(#COM_OWNER) Tabposition(7) Top(58)
         //
         var BUTTON = this.createReference( "BUTTON", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#PRIM_TIMR) Name(#Timer1) Startup(Manual)
         //
         var TIMER1 = this.createReference( "TIMER1", "PRIM_TIMR" );

         //
         // DEFINE_COM Class(#TicketNumber) Name(#LastTicketNumber)
         //
         var LASTTICKETNUMBER = this.createFieldReference( "LASTTICKETNUMBER", Fields.TICKETNUM.DataClass );

         // ----------------------------------
         // -- Initialize #PRIMARYCELLSTYLE --
         // ----------------------------------
         PRIMARYCELLSTYLE.setFontSize( 120 );
         PRIMARYCELLSTYLE.setFontUnits( "PERCENT" );
         PRIMARYCELLSTYLE.setTextColor( "THEMETEXT" );
         PRIMARYCELLSTYLE.initialize();

         // ------------------------------------
         // -- Initialize #SECONDARYCELLSTYLE --
         // ------------------------------------
         SECONDARYCELLSTYLE.setTextColor( "THEMETEXT" );
         SECONDARYCELLSTYLE.initialize();

         // -----------------------------------
         // -- Initialize #TERTIARYCELLSTYLE --
         // -----------------------------------
         TERTIARYCELLSTYLE.setTextColor( "THEMESECONDARYTEXT" );
         TERTIARYCELLSTYLE.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW2 --
         // ----------------------------
         LAYOUTROW2.setDisplayPosition( 2 );
         LAYOUTROW2.setParent( LAYOUTMAIN );
         LAYOUTROW2.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN2 --
         // -------------------------------
         LAYOUTCOLUMN2.setDisplayPosition( 1 );
         LAYOUTCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTCOLUMN2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setMinHeight( 100 );
         LAYOUTMAINROW1.setMaxHeight( 100 );
         LAYOUTMAINROW1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM5.setManage( MESSAGELIST );
         LAYOUTITEM5.setParent( LAYOUTMAIN );
         LAYOUTITEM5.setRow( LAYOUTROW2 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "BOTTOMRIGHT" );
         LAYOUTITEM6.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM6.setManage( BUTTONCOMPOSE );
         LAYOUTITEM6.setParent( LAYOUTMAIN );
         LAYOUTITEM6.setRow( LAYOUTROW2 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.setMarginBottom( 16 );
         LAYOUTITEM6.setMarginRight( 16 );
         LAYOUTITEM6.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTLISTITEM --
         // --------------------------------
         LAYOUTLISTITEM.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW1 --
         // ----------------------------
         LAYOUTROW1.setDisplayPosition( 1 );
         LAYOUTROW1.setParent( LAYOUTLISTITEM );
         LAYOUTROW1.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN1 --
         // -------------------------------
         LAYOUTCOLUMN1.setDisplayPosition( 1 );
         LAYOUTCOLUMN1.setParent( LAYOUTLISTITEM );
         LAYOUTCOLUMN1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "CENTERLEFT" );
         LAYOUTITEM1.setColumn( LAYOUTROW1 );
         LAYOUTITEM1.setManage( IMAGECELL );
         LAYOUTITEM1.setMarginLeft( 20 );
         LAYOUTITEM1.setParent( LAYOUTLISTITEM );
         LAYOUTITEM1.setRow( LAYOUTCOLUMN1 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "CENTERLEFT" );
         LAYOUTITEM2.setColumn( LAYOUTROW1 );
         LAYOUTITEM2.setFlow( "CENTERVERTICAL" );
         LAYOUTITEM2.setManage( PRIMARYCELL );
         LAYOUTITEM2.setMarginLeft( 86 );
         LAYOUTITEM2.setMarginRight( 16 );
         LAYOUTITEM2.setParent( LAYOUTLISTITEM );
         LAYOUTITEM2.setRow( LAYOUTCOLUMN1 );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "CENTERLEFT" );
         LAYOUTITEM3.setColumn( LAYOUTROW1 );
         LAYOUTITEM3.setFlow( "CENTERVERTICAL" );
         LAYOUTITEM3.setManage( SECONDARYCELL );
         LAYOUTITEM3.setMarginLeft( 86 );
         LAYOUTITEM3.setMarginRight( 16 );
         LAYOUTITEM3.setParent( LAYOUTLISTITEM );
         LAYOUTITEM3.setRow( LAYOUTCOLUMN1 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "CENTERLEFT" );
         LAYOUTITEM4.setColumn( LAYOUTROW1 );
         LAYOUTITEM4.setFlow( "CENTERVERTICAL" );
         LAYOUTITEM4.setManage( TERTIARYCELL );
         LAYOUTITEM4.setMarginLeft( 86 );
         LAYOUTITEM4.setMarginRight( 16 );
         LAYOUTITEM4.setParent( LAYOUTLISTITEM );
         LAYOUTITEM4.setRow( LAYOUTCOLUMN1 );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #MESSAGELIST --
         // -----------------------------
         MESSAGELIST.setDisplayPosition( 5 );
         MESSAGELIST.setLayoutManager( LAYOUTLISTITEM );
         MESSAGELIST.setLeft( 0 );
         MESSAGELIST.setParent( this );
         MESSAGELIST.setRowHeight( 88 );
         MESSAGELIST.setTabPosition( 1 );
         MESSAGELIST.setHeight( 349 );
         MESSAGELIST.setWidth( 633 );
         MESSAGELIST.setTop( 100 );
         MESSAGELIST.initialize();

         // ---------------------------
         // -- Initialize #IMAGECELL --
         // ---------------------------
         IMAGECELL.setDisplayPosition( 1 );
         IMAGECELL.setIcon( "image" );
         IMAGECELL.setIconImageSizing( "CROPPED" );
         IMAGECELL.setLeft( 20 );
         IMAGECELL.setParent( MESSAGELIST );
         IMAGECELL.setTabPosition( 3 );
         IMAGECELL.setTop( 19 );
         IMAGECELL.setIconHeight( 22 );
         IMAGECELL.setHeight( 50 );
         IMAGECELL.setWidth( 50 );
         IMAGECELL.setThemeDrawStyle( "MediumTitle" );
         IMAGECELL.initialize();

         // -----------------------------
         // -- Initialize #PRIMARYCELL --
         // -----------------------------
         PRIMARYCELL.setCaption( "Primary Text" );
         PRIMARYCELL.setDisplayPosition( 4 );
         PRIMARYCELL.setHeight( 20 );
         PRIMARYCELL.setLeft( 86 );
         PRIMARYCELL.setParent( MESSAGELIST );
         PRIMARYCELL.setStyle( PRIMARYCELLSTYLE );
         PRIMARYCELL.setTabPosition( 4 );
         PRIMARYCELL.setTop( 14 );
         PRIMARYCELL.setWidth( 531 );
         PRIMARYCELL.initialize();

         // -------------------------------
         // -- Initialize #SECONDARYCELL --
         // -------------------------------
         SECONDARYCELL.setCaption( "Secondary Text" );
         SECONDARYCELL.setDisplayPosition( 5 );
         SECONDARYCELL.setHeight( 20 );
         SECONDARYCELL.setLeft( 86 );
         SECONDARYCELL.setParent( MESSAGELIST );
         SECONDARYCELL.setStyle( SECONDARYCELLSTYLE );
         SECONDARYCELL.setTabPosition( 5 );
         SECONDARYCELL.setTop( 34 );
         SECONDARYCELL.setWidth( 531 );
         SECONDARYCELL.initialize();

         // ------------------------------
         // -- Initialize #TERTIARYCELL --
         // ------------------------------
         TERTIARYCELL.setCaption( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus..." );
         TERTIARYCELL.setDisplayPosition( 6 );
         TERTIARYCELL.setHeight( 20 );
         TERTIARYCELL.setLeft( 86 );
         TERTIARYCELL.setParent( MESSAGELIST );
         TERTIARYCELL.setStyle( TERTIARYCELLSTYLE );
         TERTIARYCELL.setTabPosition( 6 );
         TERTIARYCELL.setTop( 54 );
         TERTIARYCELL.setWidth( 531 );
         TERTIARYCELL.initialize();

         // -------------------------------
         // -- Initialize #BUTTONCOMPOSE --
         // -------------------------------
         BUTTONCOMPOSE.setDisplayPosition( 4 );
         BUTTONCOMPOSE.setIcon( "add" );
         BUTTONCOMPOSE.setLeft( 561 );
         BUTTONCOMPOSE.setParent( this );
         BUTTONCOMPOSE.setTabPosition( 2 );
         BUTTONCOMPOSE.setTop( 377 );
         BUTTONCOMPOSE.setThemeDrawStyle( "DarkAccent" );
         BUTTONCOMPOSE.setTabStop( false );
         BUTTONCOMPOSE.initialize();

         // -------------------------------
         // -- Initialize #D1_ADD_TICKET --
         // -------------------------------
         D1_ADD_TICKET.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Label1" );
         LABEL1.setDisplayPosition( 6 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 0 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 3 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 0 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 120 );
         LABEL1.initialize();

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setCaption( "Top" );
         BUTTON1.setDisplayPosition( 3 );
         BUTTON1.setLeft( 232 );
         BUTTON1.setParent( this );
         BUTTON1.setTabPosition( 4 );
         BUTTON1.setTop( 64 );
         BUTTON1.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Label2" );
         LABEL2.setDisplayPosition( 7 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 0 );
         LABEL2.setParent( this );
         LABEL2.setTabPosition( 5 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 32 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 120 );
         LABEL2.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "Label3" );
         LABEL3.setDisplayPosition( 2 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 25 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( this );
         LABEL3.setTabPosition( 6 );
         LABEL3.setTabStop( false );
         LABEL3.setTop( 64 );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 120 );
         LABEL3.initialize();

         // ------------------------
         // -- Initialize #BUTTON --
         // ------------------------
         BUTTON.setCaption( "Bottom" );
         BUTTON.setDisplayPosition( 1 );
         BUTTON.setLeft( 368 );
         BUTTON.setParent( this );
         BUTTON.setTabPosition( 7 );
         BUTTON.setTop( 58 );
         BUTTON.initialize();

         // ------------------------
         // -- Initialize #TIMER1 --
         // ------------------------
         TIMER1.setStartup( "MANUAL" );
         TIMER1.initialize();

         // ----------------------------------
         // -- Initialize #LASTTICKETNUMBER --
         // ----------------------------------
         LASTTICKETNUMBER.applyDefault();
         LASTTICKETNUMBER.initialize();

         // -----------------------------------------
         // -- Add Event Handlers for #MESSAGELIST --
         // -----------------------------------------
         MESSAGELIST.addEventHandler( "ITEMCLICK", this, evtRoutine2 );
         MESSAGELIST.addEventHandler( "ITEMGOTSELECTION", this, evtRoutine4 );

         // -------------------------------------------
         // -- Add Event Handlers for #BUTTONCOMPOSE --
         // -------------------------------------------
         BUTTONCOMPOSE.addEventHandler( "CLICK", this, evtRoutine3 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON1 --
         // -------------------------------------
         BUTTON1.addEventHandler( "CLICK", this, evtRoutine6 );

         // ------------------------------------
         // -- Add Event Handlers for #BUTTON --
         // ------------------------------------
         BUTTON.addEventHandler( "CLICK", this, evtRoutine7 );

         // ------------------------------------
         // -- Add Event Handlers for #TIMER1 --
         // ------------------------------------
         TIMER1.addEventHandler( "TICK", this, evtRoutine5 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 449 );
         this.setWidth( 633 );
         this.setLayoutManager( LAYOUTMAIN );
         this.setCaption( "View 1" );
         this.setTabPosition( 1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "D1_VIEW1" );

         //
         // DEF_LIST Name(#AFile1List) Fields(#TicketNumber #ProblemDescription #LoggedDate #Customer #CustomerPhoneNumber) Counter(#ListCount) Type(*WORKING) Entrys(*MAX)
         //
         list.AFILE1LIST = Lansa.createList( { "TICKETNUM": fld.TICKETNUM, "PROBLEMDE": fld.PROBLEMDE, "LOGGEDDAT": fld.LOGGEDDAT, "CUSTOMER": fld.CUSTOMER, "CUSTOMERP": fld.CUSTOMERP }, fld.LISTCOUNT );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 52 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 52 );
      {

         //
         // #com_self.More
         //
         rtn.Line( 56 );
         this.mthMORE();

         //
         // #timer1.Start
         //
         rtn.Line( 58 );
         ref.TIMER1.mthSTART();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // mthMORE - More
   //
   COM_OWNER.mthMORE = function()
   {
      var list = this.LIST.D1_VIEW1, fld = this.FLD.D1_VIEW1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "More", 62 );

      //
      // DEFINE_COM Class(#D1_Server_Module.FindPage) Name(#GetTickets)
      //
      var GETTICKETS = rtn.createDataRequest( "GETTICKETS", "D1_SERVER", "FINDPAGE" );

      // ----------------------------
      // -- Initialize #GETTICKETS --
      // ----------------------------
      GETTICKETS.initialize();

      //
      // MTHROUTINE Name(More)
      //
      rtn.Line( 62 );
      {

         //
         // #GetTickets.Execute Afile1list(#AFile1List) Startkey1(#LastTicketNumber)
         //
         rtn.Line( 66 );
         GETTICKETS.mthEXECUTE( { FLD: { "STARTKEY1": ref.LASTTICKETNUMBER.get() } }, { LIST: { "AFILE1LIST": list.AFILE1LIST } } );

         //
         // SELECTLIST Named(#AFile1List)
         //
         rtn.Line( 68 );
         {
            var l1 = list.AFILE1LIST.selectList();

            while( l1.step() )
            {

               //
               // #PrimaryCell := #TicketNumber.AsString
               //
               rtn.Line( 69 );
               ref.PRIMARYCELL.set( Lansa.Number.AsString( fld.TICKETNUM.get() ) );

               //
               // #SecondaryCell := #Customer
               //
               rtn.Line( 70 );
               ref.SECONDARYCELL.set( fld.CUSTOMER.get() );

               //
               // #TertiaryCell := #ProblemDescription
               //
               rtn.Line( 71 );
               ref.TERTIARYCELL.set( fld.PROBLEMDE.get() );

               //
               // ADD_ENTRY To_List(#MessageList)
               //
               rtn.Line( 72 );
               ref.MESSAGELIST.addEntry();

               //
               // #w_entries += 1
               //
               rtn.Line( 73 );
               fld.W_ENTRIES.set( Lansa.add( fld.W_ENTRIES.get(), 1 ) );

               //
               // #LastTicketNumber := #TicketNumber /* save last key */
               //
               rtn.Line( 74 );
               ref.LASTTICKETNUMBER.set( fld.TICKETNUM.get() );

            //
            // ENDSELECT 
            //
            rtn.Line( 75 );
            }

            l1.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 77 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MessageList.ItemClick
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.D1_VIEW1, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MessageList.ItemClick", 79 );

      //
      // EVTROUTINE Handling(#MessageList.ItemClick)
      //
      rtn.Line( 79 );
      {

         //
         // #STD_ALPHA := #PrimaryCell.CurrentItem.Caption
         //
         rtn.Line( 81 );
         fld.STD_ALPHA.set( ref.PRIMARYCELL.getCurrentItem().getCaption() );

         //
         // #TicketNumber := #STD_ALPHA.AsNumber
         //
         rtn.Line( 82 );
         fld.TICKETNUM.set( Lansa.String.AsNumber( fld.STD_ALPHA.get() ) );

         //
         // #D1_Add_Ticket.setupForEdit Pticketnumber(#TicketNumber)
         //
         rtn.Line( 83 );
         ref.D1_ADD_TICKET.mthSETUPFOREDIT( fld.TICKETNUM.get() );

         //
         // #D1_Add_Ticket.show
         //
         rtn.Line( 85 );
         ref.D1_ADD_TICKET.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 89 );
      rtn.end();
   };

   //
   // evtRoutine3 - #ButtonCompose.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonCompose.Click", 91 );

      //
      // EVTROUTINE Handling(#ButtonCompose.Click)
      //
      rtn.Line( 91 );
      {

         //
         // #D1_Add_Ticket.setupForAdd
         //
         rtn.Line( 93 );
         ref.D1_ADD_TICKET.mthSETUPFORADD();

         //
         // #D1_Add_Ticket.Show
         //
         rtn.Line( 94 );
         ref.D1_ADD_TICKET.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 96 );
      rtn.end();
   };

   //
   // evtRoutine4 - #MessageList.ItemGotSelection
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#MessageList.ItemGotSelection", 98 );

      //
      // EVTROUTINE Handling(#MessageList.ItemGotSelection)
      //
      rtn.Line( 98 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 103 );
      rtn.end();
   };

   //
   // evtRoutine5 - #Timer1.Tick
   //
   function evtRoutine5( sender, parms )
   {
      var fld = this.FLD.D1_VIEW1, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Timer1.Tick", 104 );

      //
      // EVTROUTINE Handling(#Timer1.Tick)
      //
      rtn.Line( 104 );
      {

         //
         // #label1.Caption := #MessageList.VerticalScrollPos.AsString
         //
         rtn.Line( 105 );
         ref.LABEL1.setCaption( Lansa.Number.AsString( ref.MESSAGELIST.getVerticalScrollPos() ) );

         //
         // #label2.caption := #messagelist.ScrollTop.AsString
         //
         rtn.Line( 106 );
         ref.LABEL2.setCaption( Lansa.Number.AsString( ref.MESSAGELIST.getScrollTop() ) );

         //
         // #label3.caption := #messagelist.Height.AsString
         //
         rtn.Line( 107 );
         ref.LABEL3.setCaption( Lansa.Number.AsString( ref.MESSAGELIST.getHeight() ) );

         //
         // IF (((#messagelist.RowHeight * #w_entries) - #messagelist.height) = #messagelist.verticalscrollpos)
         //
         rtn.Line( 109 );
         if ( Lansa.Number.eq( Lansa.sub( Lansa.mul( ref.MESSAGELIST.getRowHeight(), fld.W_ENTRIES.get() ), ref.MESSAGELIST.getHeight() ), ref.MESSAGELIST.getVerticalScrollPos() ) )
         {

            //
            // #com_owner.More
            //
            rtn.Line( 110 );
            this.mthMORE();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 113 );
      rtn.end();
   };

   //
   // evtRoutine6 - #Button1.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button1.Click", 114 );

      //
      // EVTROUTINE Handling(#Button1.Click)
      //
      rtn.Line( 114 );
      {

         //
         // #MessageList.VerticalScrollPos := 0
         //
         rtn.Line( 115 );
         ref.MESSAGELIST.setVerticalScrollPos( 0 );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 116 );
      rtn.end();
   };

   //
   // evtRoutine7 - #Button.Click
   //
   function evtRoutine7( sender, parms )
   {
      var fld = this.FLD.D1_VIEW1, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button.Click", 117 );

      //
      // EVTROUTINE Handling(#Button.Click)
      //
      rtn.Line( 117 );
      {

         //
         // #MessageList.VerticalScrollPos := (#messagelist.RowHeight * #w_entries) - #messagelist.height
         //
         rtn.Line( 118 );
         ref.MESSAGELIST.setVerticalScrollPos( Lansa.sub( Lansa.mul( ref.MESSAGELIST.getRowHeight(), fld.W_ENTRIES.get() ), ref.MESSAGELIST.getHeight() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 119 );
      rtn.end();
   };

   // ------------------------------
   // -- TICKETNUM Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.TICKETNUM.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.TICKETNUM );
      };

      Lansa.createFieldClass( { co: Fields.TICKETNUM.DataClass, an: "PRIM_FLD", fn: "TICKETNUM" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "D1_ADD_TI" ],
   rp: [ "PRIM_VIEW", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_MD.List", "PRIM_MD.ListLabel", "PRIM_MD.ActionButton", "PRIM_LABL", "PRIM_PHBN", "PRIM_MD.RaisedButton", "PRIM_TIMR", "PRIM_FLD", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=d1_view1.js
