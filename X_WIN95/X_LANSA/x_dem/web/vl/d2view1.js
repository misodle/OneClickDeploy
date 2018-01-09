// -------------------
// -- View: D2VIEW1 --
// -------------------
LANSA.addComponent(
{
   id: "D2VIEW1", 
   nm: "D2View1", 
   ot: "wv", 
   tp: "View", 
   de: "Tickets View", 
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
      STD_TEXTS:
      {
         nm: "STD_TEXTS",
         ft: "A",
         ln: 30,
         dc: 0,
         lb: { "ENG": "Text", "FRA": "Texte" }[ curLanguage ],
         h1: { "ENG": "Text", "FRA": "Texte" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard TEXT, SHORT", "FRA": "Texte Court Standard" }[ curLanguage ],
         dv: "",
         ia: [ "LC" ]
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
         ItemAdd: 
         {
         },

         ItemClick: 
         {
         },

         Refresh: 
         {
         },

         BuildList: 
         {
            ps: 
            {
               "SearchKeyword":
               {
                  pt: "i"
               }
            }
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         UpdateBadge: 
         {
            ps: 
            {
               "ResultCount":
               {
                  pt: "i"
               }
            }
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
         var fld = this.addFields( "D2VIEW1", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ImageCellStyle) Fontsize(150) Fontunits(Percent)
         //
         var IMAGECELLSTYLE = this.createReference( "IMAGECELLSTYLE", "PRIM_VS", "Style" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow2) Displayposition(1) Parent(#LayoutMain)
         //
         var LAYOUTROW2 = this.createReference( "LAYOUTROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn2) Displayposition(1) Parent(#LayoutMain)
         //
         var LAYOUTCOLUMN2 = this.createReference( "LAYOUTCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#LayoutColumn2) Manage(#ItemList) Parent(#LayoutMain) Row(#LayoutRow2)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(BottomRight) Column(#LayoutColumn2) Manage(#ItemAdd) Parent(#LayoutMain) Row(#LayoutRow2) Sizing(None) Marginbottom(16) Marginright(16)
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
         // DEFINE_COM Class(#PRIM_MD.List) Name(#ItemList) Displayposition(2) Layoutmanager(#LayoutListItem) Left(0) Parent(#COM_OWNER) Rowheight(88) Tabposition(1) Tabstop(False) Top(0) Height(449) Width(633) Hint('Click an item to View | Edit details') Hinttitle('View | Edit')
         //
         var ITEMLIST = this.createReference( "ITEMLIST", "PRIM_MD", "List" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#ImageCell) Displayposition(4) Iconimagesizing(Cropped) Left(20) Parent(#ItemList) Tabposition(3) Tabstop(False) Top(19) Iconheight(22) Height(50) Width(50) Themedrawstyle('MediumTitle+Rounded') Iconalignment(Center) Captionalignment(Center) Caption('AB') Style(#ImageCellStyle)
         //
         var IMAGECELL = this.createReference( "IMAGECELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#PrimaryCell) Caption('Primary Text') Displayposition(5) Height(20) Left(86) Parent(#ItemList) Style(#PrimaryCellStyle) Tabposition(4) Tabstop(False) Top(14) Width(531) Source(#Customer)
         //
         var PRIMARYCELL = this.createReference( "PRIMARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#SecondaryCell) Caption('Secondary Text') Displayposition(6) Height(20) Left(86) Parent(#ItemList) Style(#SecondaryCellStyle) Tabposition(5) Tabstop(False) Top(34) Width(531) Source(#CustomerPhoneNumber)
         //
         var SECONDARYCELL = this.createReference( "SECONDARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#TertiaryCell) Caption('Tertiary Text') Displayposition(7) Height(20) Left(86) Parent(#ItemList) Style(#TertiaryCellStyle) Tabposition(6) Tabstop(False) Top(54) Width(531) Source(#ProblemDescription)
         //
         var TERTIARYCELL = this.createReference( "TERTIARYCELL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#PRIM_MD.ActionButton) Name(#ItemAdd) Displayposition(1) Icon('add') Left(561) Parent(#COM_OWNER) Tabposition(2) Top(377) Themedrawstyle('DarkAccent') Tabstop(False) Hint('Create New Item') Hinttitle('New')
         //
         var ITEMADD = this.createReference( "ITEMADD", "PRIM_MD", "ActionButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.ListLabel) Name(#Label) Caption('HiddenKey1') Displayposition(1) Dragstyle(None) Left(544) Parent(#ItemList) Tabposition(7) Tabstop(False) Top(20) Source(#TicketNumber) Visible(False)
         //
         var LABEL = this.createReference( "LABEL", "PRIM_MD", "ListLabel" );

         //
         // DEFINE_COM Class(#STD_TEXTS) Name(#SavedSearchKeyword)
         //
         var SAVEDSEARCHKEYWORD = this.createFieldReference( "SAVEDSEARCHKEYWORD", Fields.STD_TEXTS.DataClass );

         // --------------------------------
         // -- Initialize #IMAGECELLSTYLE --
         // --------------------------------
         IMAGECELLSTYLE.setFontSize( 150 );
         IMAGECELLSTYLE.setFontUnits( "PERCENT" );
         IMAGECELLSTYLE.initialize();

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
         LAYOUTROW2.setDisplayPosition( 1 );
         LAYOUTROW2.setParent( LAYOUTMAIN );
         LAYOUTROW2.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN2 --
         // -------------------------------
         LAYOUTCOLUMN2.setDisplayPosition( 1 );
         LAYOUTCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTCOLUMN2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM5.setManage( ITEMLIST );
         LAYOUTITEM5.setParent( LAYOUTMAIN );
         LAYOUTITEM5.setRow( LAYOUTROW2 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "BOTTOMRIGHT" );
         LAYOUTITEM6.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM6.setManage( ITEMADD );
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

         // --------------------------
         // -- Initialize #ITEMLIST --
         // --------------------------
         ITEMLIST.setDisplayPosition( 2 );
         ITEMLIST.setLayoutManager( LAYOUTLISTITEM );
         ITEMLIST.setLeft( 0 );
         ITEMLIST.setParent( this );
         ITEMLIST.setRowHeight( 88 );
         ITEMLIST.setTabPosition( 1 );
         ITEMLIST.setTabStop( false );
         ITEMLIST.setTop( 0 );
         ITEMLIST.setHeight( 449 );
         ITEMLIST.setWidth( 633 );
         ITEMLIST.setHint( "Click an item to View | Edit details" );
         ITEMLIST.setHintTitle( "View | Edit" );
         ITEMLIST.initialize();

         // ---------------------------
         // -- Initialize #IMAGECELL --
         // ---------------------------
         IMAGECELL.setDisplayPosition( 4 );
         IMAGECELL.setIconImageSizing( "CROPPED" );
         IMAGECELL.setLeft( 20 );
         IMAGECELL.setParent( ITEMLIST );
         IMAGECELL.setTabPosition( 3 );
         IMAGECELL.setTabStop( false );
         IMAGECELL.setTop( 19 );
         IMAGECELL.setIconHeight( 22 );
         IMAGECELL.setHeight( 50 );
         IMAGECELL.setWidth( 50 );
         IMAGECELL.setThemeDrawStyle( "MediumTitle+Rounded" );
         IMAGECELL.setIconAlignment( "CENTER" );
         IMAGECELL.setCaptionAlignment( "CENTER" );
         IMAGECELL.setCaption( "AB" );
         IMAGECELL.setStyle( IMAGECELLSTYLE );
         IMAGECELL.initialize();

         // -----------------------------
         // -- Initialize #PRIMARYCELL --
         // -----------------------------
         PRIMARYCELL.setCaption( "Primary Text" );
         PRIMARYCELL.setDisplayPosition( 5 );
         PRIMARYCELL.setHeight( 20 );
         PRIMARYCELL.setLeft( 86 );
         PRIMARYCELL.setParent( ITEMLIST );
         PRIMARYCELL.setStyle( PRIMARYCELLSTYLE );
         PRIMARYCELL.setTabPosition( 4 );
         PRIMARYCELL.setTabStop( false );
         PRIMARYCELL.setTop( 14 );
         PRIMARYCELL.setWidth( 531 );
         PRIMARYCELL.setSource( fld.CUSTOMER );
         PRIMARYCELL.initialize();

         // -------------------------------
         // -- Initialize #SECONDARYCELL --
         // -------------------------------
         SECONDARYCELL.setCaption( "Secondary Text" );
         SECONDARYCELL.setDisplayPosition( 6 );
         SECONDARYCELL.setHeight( 20 );
         SECONDARYCELL.setLeft( 86 );
         SECONDARYCELL.setParent( ITEMLIST );
         SECONDARYCELL.setStyle( SECONDARYCELLSTYLE );
         SECONDARYCELL.setTabPosition( 5 );
         SECONDARYCELL.setTabStop( false );
         SECONDARYCELL.setTop( 34 );
         SECONDARYCELL.setWidth( 531 );
         SECONDARYCELL.setSource( fld.CUSTOMERP );
         SECONDARYCELL.initialize();

         // ------------------------------
         // -- Initialize #TERTIARYCELL --
         // ------------------------------
         TERTIARYCELL.setCaption( "Tertiary Text" );
         TERTIARYCELL.setDisplayPosition( 7 );
         TERTIARYCELL.setHeight( 20 );
         TERTIARYCELL.setLeft( 86 );
         TERTIARYCELL.setParent( ITEMLIST );
         TERTIARYCELL.setStyle( TERTIARYCELLSTYLE );
         TERTIARYCELL.setTabPosition( 6 );
         TERTIARYCELL.setTabStop( false );
         TERTIARYCELL.setTop( 54 );
         TERTIARYCELL.setWidth( 531 );
         TERTIARYCELL.setSource( fld.PROBLEMDE );
         TERTIARYCELL.initialize();

         // -------------------------
         // -- Initialize #ITEMADD --
         // -------------------------
         ITEMADD.setDisplayPosition( 1 );
         ITEMADD.setIcon( "add" );
         ITEMADD.setLeft( 561 );
         ITEMADD.setParent( this );
         ITEMADD.setTabPosition( 2 );
         ITEMADD.setTop( 377 );
         ITEMADD.setThemeDrawStyle( "DarkAccent" );
         ITEMADD.setTabStop( false );
         ITEMADD.setHint( "Create New Item" );
         ITEMADD.setHintTitle( "New" );
         ITEMADD.initialize();

         // -----------------------
         // -- Initialize #LABEL --
         // -----------------------
         LABEL.setCaption( "HiddenKey1" );
         LABEL.setDisplayPosition( 1 );
         LABEL.setDragStyle( "NONE" );
         LABEL.setLeft( 544 );
         LABEL.setParent( ITEMLIST );
         LABEL.setTabPosition( 7 );
         LABEL.setTabStop( false );
         LABEL.setTop( 20 );
         LABEL.setSource( fld.TICKETNUM );
         LABEL.setVisible( false );
         LABEL.initialize();

         // ------------------------------------
         // -- Initialize #SAVEDSEARCHKEYWORD --
         // ------------------------------------
         SAVEDSEARCHKEYWORD.applyDefault();
         SAVEDSEARCHKEYWORD.initialize();

         // --------------------------------------
         // -- Add Event Handlers for #ITEMLIST --
         // --------------------------------------
         ITEMLIST.addEventHandler( "ITEMCLICK", this, evtRoutine2 );

         // -------------------------------------
         // -- Add Event Handlers for #ITEMADD --
         // -------------------------------------
         ITEMADD.addEventHandler( "CLICK", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 449 );
         this.setWidth( 633 );
         this.setLayoutManager( LAYOUTMAIN );
         this.setCaption( "Tickets" );
         this.setTabPosition( 1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "D2VIEW1" );

         //
         // DEF_LIST Name(#ListData) Fields(#TicketNumber #ProblemDescription #LoggedDate #Customer #CustomerPhoneNumber) Counter(#ListCount) Type(*WORKING) Entrys(*MAX)
         //
         list.LISTDATA = Lansa.createList( { "TICKETNUM": fld.TICKETNUM, "PROBLEMDE": fld.PROBLEMDE, "LOGGEDDAT": fld.LOGGEDDAT, "CUSTOMER": fld.CUSTOMER, "CUSTOMERP": fld.CUSTOMERP }, fld.LISTCOUNT );
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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 48 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 48 );
      {

         //
         // #COM_Owner.BuildList Searchkeyword(*BLANKS)
         //
         rtn.Line( 49 );
         this.mthBUILDLIST( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 50 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ItemList.ItemClick
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ItemList.ItemClick", 53 );

      //
      // EVTROUTINE Handling(#ItemList.ItemClick)
      //
      rtn.Line( 53 );
      {

         //
         // #COM_OWNER.ItemClick
         //
         rtn.Line( 54 );
         this.mthITEMCLICK();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 55 );
      rtn.end();
   };

   //
   // evtRoutine3 - #ItemAdd.Click
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ItemAdd.Click", 58 );

      //
      // EVTROUTINE Handling(#ItemAdd.Click)
      //
      rtn.Line( 58 );
      {

         //
         // #COM_OWNER.ItemAdd
         //
         rtn.Line( 59 );
         this.mthITEMADD();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // mthITEMADD - ItemAdd
   //
   COM_OWNER.mthITEMADD = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ItemAdd", 67 ), mth = rtn;

      //
      // DEFINE_COM Class(#D2Dialog) Name(#DetailsDialog)
      //
      var DETAILSDIALOG = rtn.createReference( "DETAILSDIALOG", "D2DIALOG" );

      // -------------------------------
      // -- Initialize #DETAILSDIALOG --
      // -------------------------------
      DETAILSDIALOG.initialize();

      // -------------------------------------------
      // -- Add Event Handlers for #DETAILSDIALOG --
      // -------------------------------------------
      DETAILSDIALOG.addEventHandler( "ITEMSAVED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(ItemAdd)
      //
      rtn.Line( 67 );
      {

         //
         // #DetailsDialog.Create Mode(INSERT)
         //
         rtn.Line( 69 );
         DETAILSDIALOG.mthCREATE( "INSERT" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 73 );
      rtn.end();

      //
      // evtRoutine4 - #DetailsDialog.ItemSaved
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DetailsDialog.ItemSaved", 70, mth );

         //
         // EVTROUTINE Handling(#DetailsDialog.ItemSaved)
         //
         rtn.Line( 70 );
         {

            //
            // #COM_OWNER.Refresh
            //
            rtn.Line( 71 );
            this.mthREFRESH();

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 72 );
         rtn.end();
      }
   };

   //
   // mthITEMCLICK - ItemClick
   //
   COM_OWNER.mthITEMCLICK = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ItemClick", 76 ), mth = rtn;

      //
      // DEFINE_COM Class(#D2Dialog) Name(#DetailsDialog)
      //
      var DETAILSDIALOG = rtn.createReference( "DETAILSDIALOG", "D2DIALOG" );

      // -------------------------------
      // -- Initialize #DETAILSDIALOG --
      // -------------------------------
      DETAILSDIALOG.initialize();

      // -------------------------------------------
      // -- Add Event Handlers for #DETAILSDIALOG --
      // -------------------------------------------
      DETAILSDIALOG.addEventHandler( "ITEMSAVED", this, evtRoutine5 );
      DETAILSDIALOG.addEventHandler( "ITEMDELETED", this, evtRoutine5 );

      //
      // MTHROUTINE Name(ItemClick)
      //
      rtn.Line( 76 );
      {

         //
         // #DetailsDialog.Edit Iticketnumber(#Label.CurrentItem.Caption.AsNumber) Mode(UPDATE)
         //
         rtn.Line( 78 );
         DETAILSDIALOG.mthEDIT( Lansa.String.AsNumber( ref.LABEL.getCurrentItem().getCaption() ), "UPDATE" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 83 );
      rtn.end();

      //
      // evtRoutine5 - #DetailsDialog.ItemSaved #DetailsDialog.ItemDeleted
      //
      function evtRoutine5( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DetailsDialog.ItemSaved #DetailsDialog.ItemDeleted", 80, mth );

         //
         // EVTROUTINE Handling(#DetailsDialog.ItemSaved #DetailsDialog.ItemDeleted)
         //
         rtn.Line( 80 );
         {

            //
            // #COM_OWNER.Refresh
            //
            rtn.Line( 81 );
            this.mthREFRESH();

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 82 );
         rtn.end();
      }
   };

   //
   // mthREFRESH - Refresh
   //
   COM_OWNER.mthREFRESH = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Refresh", 86 );

      //
      // MTHROUTINE Name(Refresh)
      //
      rtn.Line( 86 );
      {

         //
         // CLR_LIST Named(#ItemList)
         //
         rtn.Line( 87 );
         ref.ITEMLIST.clearList();

         //
         // #COM_Owner.BuildList Searchkeyword(#SavedSearchKeyword)
         //
         rtn.Line( 88 );
         this.mthBUILDLIST( ref.SAVEDSEARCHKEYWORD.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 89 );
      rtn.end();
   };

   //
   // mthBUILDLIST - BuildList
   //
   COM_OWNER.mthBUILDLIST = function( parm_SEARCHKEYWORD )
   {
      var list = this.LIST.D2VIEW1, fld = this.FLD.D2VIEW1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "BuildList", 92 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#STD_TEXTS) Name(#SearchKeyword)
      //
      var SEARCHKEYWORD = rtn.createFieldParameter( "SEARCHKEYWORD", Fields.STD_TEXTS.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SEARCHKEYWORD.set( parm_SEARCHKEYWORD );

      //
      // DEFINE_COM Class(#D2_SM.GetItems) Name(#TicketsSearch)
      //
      var TICKETSSEARCH = rtn.createDataRequest( "TICKETSSEARCH", "D2_SM", "GETITEMS" );

      // -------------------------------
      // -- Initialize #TICKETSSEARCH --
      // -------------------------------
      TICKETSSEARCH.initialize();

      // -------------------------------------------
      // -- Add Event Handlers for #TICKETSSEARCH --
      // -------------------------------------------
      TICKETSSEARCH.addEventHandler( "COMPLETED", this, evtRoutine6 );

      //
      // MTHROUTINE Name(BuildList)
      //
      rtn.Line( 92 );
      {

         //
         // #SavedSearchKeyword := #SearchKeyword
         //
         rtn.Line( 95 );
         ref.SAVEDSEARCHKEYWORD.set( SEARCHKEYWORD.get() );

         //
         // #TicketsSearch.ExecuteAsync Searchkeyword(#SearchKeyword) List_Data(#ListData)
         //
         rtn.Line( 97 );
         TICKETSSEARCH.mthEXECUTEASYNC( { FLD: { "STD_TEXTS": SEARCHKEYWORD.get() } }, { LIST: { "LISTDATA": list.LISTDATA } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 108 );
      rtn.end();

      //
      // evtRoutine6 - #TicketsSearch.Completed
      //
      function evtRoutine6( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#TicketsSearch.Completed", 100, mth );

         //
         // EVTROUTINE Handling(#TicketsSearch.Completed)
         //
         rtn.Line( 100 );
         {

            //
            // CLR_LIST Named(#ItemList)
            //
            rtn.Line( 101 );
            ref.ITEMLIST.clearList();

            //
            // SELECTLIST Named(#ListData)
            //
            rtn.Line( 102 );
            {
               var l1 = list.LISTDATA.selectList();

               while( l1.step() )
               {

                  //
                  // #ImageCell := #Customer.Substring( 1, 2 ).Uppercase
                  //
                  rtn.Line( 103 );
                  ref.IMAGECELL.set( Lansa.String.UpperCase( Lansa.String.Substring( fld.CUSTOMER.get(), 1, 2 ) ) );

                  //
                  // ADD_ENTRY To_List(#ItemList)
                  //
                  rtn.Line( 104 );
                  ref.ITEMLIST.addEntry();

               //
               // ENDSELECT 
               //
               rtn.Line( 105 );
               }

               l1.end();
            }

            //
            // SIGNAL Event(UpdateBadge) Resultcount(#ListCount)
            //
            rtn.Line( 106 );
            {
               var evtParms = Lansa.evtParms();

               evtParms.createFieldReference( "RESULTCOUNT", Fields.LISTCOUNT.DataClass );

               evtParms.ref( "RESULTCOUNT" ).set( fld.LISTCOUNT.get() );

               this.fireEvent( "UPDATEBADGE", evtParms );

               evtParms.end();
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 107 );
         rtn.end();
      }
   };

   // ------------------------------
   // -- STD_TEXTS Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_TEXTS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_TEXTS );
      };

      Lansa.createFieldClass( { co: Fields.STD_TEXTS.DataClass, an: "PRIM_FLD", fn: "STD_TEXTS" } );
   }

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
   rp: [ "PRIM_VIEW", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_MD.List", "PRIM_MD.ListLabel", "PRIM_MD.ActionButton", "PRIM_FLD", "PRIM_WEB.DataRequest", "PRIM_HINT" ],
   dc: [ "D2DIALOG" ]
});

//# sourceURL=d2view1.js
