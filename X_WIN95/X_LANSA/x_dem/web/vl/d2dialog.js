// ----------------------
// -- Dialog: D2DIALOG --
// ----------------------
LANSA.addComponent(
{
   id: "D2DIALOG", 
   nm: "D2Dialog", 
   ot: "wv", 
   tp: "Dialog", 
   de: "Tickets Detail | Edit | Create Dialog", 
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

   // ---------------
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDateTime( "1900-01-01T00:00:00Z" );

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
      STD_CODE:
      {
         nm: "STD_CODE",
         ft: "A",
         ln: 3,
         dc: 0,
         lb: "Code",
         h1: "Code",
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard CODE", "FRA": "Code Standard" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_DLG", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Create: 
         {
            ps: 
            {
               "Mode":
               {
                  pt: "i"
               }
            }
         },

         Edit: 
         {
            ps: 
            {
               "iTicketNumber":
               {
                  pt: "i"
               },

               "Mode":
               {
                  pt: "i"
               }
            }
         },

         Save: 
         {
         },

         Delete: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         ItemSaved: 
         {
         },

         ItemDeleted: 
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
         this.addFields( "D2DIALOG", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#Layout1) Height(56) Units(Content)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(3) Parent(#Layout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout1Row1) Displayposition(2) Parent(#Layout1) Height(57) Units(Content)
         //
         var LAYOUT1ROW1 = this.createReference( "LAYOUT1ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Column(#Column1) Manage(#Appbar) Parent(#Layout1) Row(#Row1) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item4) Manage(#Panel) Parent(#Layout1) Row(#Row2) Column(#Column1)
         //
         var LAYOUT1ITEM4 = this.createReference( "LAYOUT1ITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item2) Manage(#ErrorMessages) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Column(#Column1)
         //
         var LAYOUT1ITEM2 = this.createReference( "LAYOUT1ITEM2", "PRIM_TBLO", "Item" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout2Item1) Column(#Layout2Column1) Flow(Left) Manage(#ItemDelete) Parent(#Layout2) Row(#Layout2Row1) Sizing(None) Alignment(CenterRight)
         //
         var LAYOUT2ITEM1 = this.createReference( "LAYOUT2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout2Item2) Column(#Layout2Column1) Flow(Left) Manage(#ItemSave) Parent(#Layout2) Row(#Layout2Row1) Sizing(None) Alignment(CenterRight)
         //
         var LAYOUT2ITEM2 = this.createReference( "LAYOUT2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#MessagesPanel) Displayposition(3) Height(72) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(519) Width(369)
         //
         var MESSAGESPANEL = this.createReference( "MESSAGESPANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout3)
         //
         var LAYOUT3 = this.createReference( "LAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout4Row1) Displayposition(1) Parent(#Layout3)
         //
         var LAYOUT4ROW1 = this.createReference( "LAYOUT4ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout4Column1) Displayposition(1) Parent(#Layout3)
         //
         var LAYOUT4COLUMN1 = this.createReference( "LAYOUT4COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout4Item1) Alignment(TopCenter) Column(#Layout4Column1) Manage(#TicketNumber) Parent(#Layout3) Row(#Layout4Row1) Sizing(FitToWidth) Flow(Down) Marginright(15) Marginleft(15)
         //
         var LAYOUT4ITEM1 = this.createReference( "LAYOUT4ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout4Item2) Alignment(TopCenter) Column(#Layout4Column1) Manage(#ProblemDescription) Parent(#Layout3) Row(#Layout4Row1) Sizing(FitToWidth) Flow(Down) Marginright(15) Marginleft(15)
         //
         var LAYOUT4ITEM2 = this.createReference( "LAYOUT4ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout4Item3) Alignment(TopCenter) Column(#Layout4Column1) Manage(#LoggedDate) Parent(#Layout3) Row(#Layout4Row1) Sizing(FitToWidth) Flow(Down) Marginright(15) Marginleft(15)
         //
         var LAYOUT4ITEM3 = this.createReference( "LAYOUT4ITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout4Item4) Alignment(TopCenter) Column(#Layout4Column1) Manage(#Customer) Parent(#Layout3) Row(#Layout4Row1) Sizing(FitToWidth) Flow(Down) Marginright(15) Marginleft(15)
         //
         var LAYOUT4ITEM4 = this.createReference( "LAYOUT4ITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout4Item5) Alignment(TopCenter) Column(#Layout4Column1) Manage(#CustomerPhoneNumber) Parent(#Layout3) Row(#Layout4Row1) Sizing(FitToWidth) Flow(Down) Marginright(15) Marginleft(15)
         //
         var LAYOUT4ITEM5 = this.createReference( "LAYOUT4ITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#Appbar) Displayposition(1) Icon('arrow_back') Parent(#COM_OWNER) Tabposition(1) Width(806) Layoutmanager(#Layout2) Iconalignment(CenterLeft) Caption('Details') Themedrawstyle('Heading1') Captionmarginleft(48)
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel) Displayposition(2) Height(446) Imagealignment(Stretch) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(113) Width(806) Verticalscroll(True) Layoutmanager(#Layout3) Left(0)
         //
         var PANEL = this.createReference( "PANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#ItemDelete) Displayposition(2) Icon('delete_forever') Left(710) Parent(#Appbar) Tabposition(2) Top(0) Height(57) Hinttitle('Item Delete') Hint('Delete current item')
         //
         var ITEMDELETE = this.createReference( "ITEMDELETE", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#ItemSave) Displayposition(1) Left(758) Parent(#Appbar) Tabposition(1) Top(0) Height(57) Icon('check') Hint('Save changes to current Item') Hinttitle('Save Item')
         //
         var ITEMSAVE = this.createReference( "ITEMSAVE", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.Alert) Name(#ErrorMessages) Caption('Messages') Displayposition(4) Parent(#COM_OWNER) Tabposition(4) Themedrawstyle('MediumError') Top(56) Visible(False) Width(806) Captionalignment(CenterLeft) Height(57)
         //
         var ERRORMESSAGES = this.createReference( "ERRORMESSAGES", "PRIM_MD", "Alert" );

         //
         // DEFINE_COM Class(#TicketNumber.SpinEditField) Name(#TicketNumber) Displayposition(1) Label('Ticket Number') Parent(#Panel) Tabposition(1) Top(0) Width(776) Left(15)
         //
         var TICKETNUMBER = this.createFieldReference( "TICKETNUMBER", Fields.TICKETNUM.SPINEDITFIELD );

         //
         // DEFINE_COM Class(#ProblemDescription.EditField) Name(#ProblemDescription) Displayposition(2) Label('Problem Description') Parent(#Panel) Tabposition(2) Top(75) Width(776) Left(15)
         //
         var PROBLEMDESCRIPTION = this.createFieldReference( "PROBLEMDESCRIPTION", Fields.PROBLEMDE.EDITFIELD );

         //
         // DEFINE_COM Class(#LoggedDate.DateField) Name(#LoggedDate) Displayposition(3) Label('Logged Date') Parent(#Panel) Tabposition(3) Top(150) Width(776) Left(15)
         //
         var LOGGEDDATE = this.createFieldReference( "LOGGEDDATE", Fields.LOGGEDDAT.DATEFIELD );

         //
         // DEFINE_COM Class(#Customer.EditField) Name(#Customer) Displayposition(4) Label('Customer') Parent(#Panel) Tabposition(4) Top(225) Width(776) Left(15)
         //
         var CUSTOMER = this.createFieldReference( "CUSTOMER", Fields.CUSTOMER.EDITFIELD );

         //
         // DEFINE_COM Class(#CustomerPhoneNumber.EditField) Name(#CustomerPhoneNumber) Displayposition(5) Label('Phone Number') Parent(#Panel) Tabposition(5) Top(300) Width(776) Left(15)
         //
         var CUSTOMERPHONENUMBER = this.createFieldReference( "CUSTOMERPHONENUMBER", Fields.CUSTOMERP.EDITFIELD );

         //
         // DEFINE_COM Class(#STD_TEXTS) Name(#CurrentMode)
         //
         var CURRENTMODE = this.createFieldReference( "CURRENTMODE", Fields.STD_TEXTS.DataClass );

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( LAYOUT1 );
         COLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( LAYOUT1 );
         ROW1.setHeight( 56 );
         ROW1.setUnits( "CONTENT" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 3 );
         ROW2.setParent( LAYOUT1 );
         ROW2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT1ROW1 --
         // -----------------------------
         LAYOUT1ROW1.setDisplayPosition( 2 );
         LAYOUT1ROW1.setParent( LAYOUT1 );
         LAYOUT1ROW1.setHeight( 57 );
         LAYOUT1ROW1.setUnits( "CONTENT" );
         LAYOUT1ROW1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM1 --
         // ------------------------------
         LAYOUT1ITEM1.setColumn( COLUMN1 );
         LAYOUT1ITEM1.setManage( APPBAR );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( ROW1 );
         LAYOUT1ITEM1.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM1.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM4 --
         // ------------------------------
         LAYOUT1ITEM4.setManage( PANEL );
         LAYOUT1ITEM4.setParent( LAYOUT1 );
         LAYOUT1ITEM4.setRow( ROW2 );
         LAYOUT1ITEM4.setColumn( COLUMN1 );
         LAYOUT1ITEM4.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM2 --
         // ------------------------------
         LAYOUT1ITEM2.setManage( ERRORMESSAGES );
         LAYOUT1ITEM2.setParent( LAYOUT1 );
         LAYOUT1ITEM2.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM2.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM2.setColumn( COLUMN1 );
         LAYOUT1ITEM2.initialize();

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
         LAYOUT2ITEM1.setColumn( LAYOUT2COLUMN1 );
         LAYOUT2ITEM1.setFlow( "LEFT" );
         LAYOUT2ITEM1.setManage( ITEMDELETE );
         LAYOUT2ITEM1.setParent( LAYOUT2 );
         LAYOUT2ITEM1.setRow( LAYOUT2ROW1 );
         LAYOUT2ITEM1.setSizing( "NONE" );
         LAYOUT2ITEM1.setAlignment( "CENTERRIGHT" );
         LAYOUT2ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT2ITEM2 --
         // ------------------------------
         LAYOUT2ITEM2.setColumn( LAYOUT2COLUMN1 );
         LAYOUT2ITEM2.setFlow( "LEFT" );
         LAYOUT2ITEM2.setManage( ITEMSAVE );
         LAYOUT2ITEM2.setParent( LAYOUT2 );
         LAYOUT2ITEM2.setRow( LAYOUT2ROW1 );
         LAYOUT2ITEM2.setSizing( "NONE" );
         LAYOUT2ITEM2.setAlignment( "CENTERRIGHT" );
         LAYOUT2ITEM2.initialize();

         // -------------------------------
         // -- Initialize #MESSAGESPANEL --
         // -------------------------------
         MESSAGESPANEL.setDisplayPosition( 3 );
         MESSAGESPANEL.setHeight( 72 );
         MESSAGESPANEL.setLeft( 0 );
         MESSAGESPANEL.setParent( this );
         MESSAGESPANEL.setTabPosition( 3 );
         MESSAGESPANEL.setTabStop( false );
         MESSAGESPANEL.setTop( 519 );
         MESSAGESPANEL.setWidth( 369 );
         MESSAGESPANEL.initialize();

         // -------------------------
         // -- Initialize #LAYOUT3 --
         // -------------------------
         LAYOUT3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT4ROW1 --
         // -----------------------------
         LAYOUT4ROW1.setDisplayPosition( 1 );
         LAYOUT4ROW1.setParent( LAYOUT3 );
         LAYOUT4ROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUT4COLUMN1 --
         // --------------------------------
         LAYOUT4COLUMN1.setDisplayPosition( 1 );
         LAYOUT4COLUMN1.setParent( LAYOUT3 );
         LAYOUT4COLUMN1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT4ITEM1 --
         // ------------------------------
         LAYOUT4ITEM1.setAlignment( "TOPCENTER" );
         LAYOUT4ITEM1.setColumn( LAYOUT4COLUMN1 );
         LAYOUT4ITEM1.setManage( TICKETNUMBER );
         LAYOUT4ITEM1.setParent( LAYOUT3 );
         LAYOUT4ITEM1.setRow( LAYOUT4ROW1 );
         LAYOUT4ITEM1.setSizing( "FITTOWIDTH" );
         LAYOUT4ITEM1.setFlow( "DOWN" );
         LAYOUT4ITEM1.setMarginRight( 15 );
         LAYOUT4ITEM1.setMarginLeft( 15 );
         LAYOUT4ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT4ITEM2 --
         // ------------------------------
         LAYOUT4ITEM2.setAlignment( "TOPCENTER" );
         LAYOUT4ITEM2.setColumn( LAYOUT4COLUMN1 );
         LAYOUT4ITEM2.setManage( PROBLEMDESCRIPTION );
         LAYOUT4ITEM2.setParent( LAYOUT3 );
         LAYOUT4ITEM2.setRow( LAYOUT4ROW1 );
         LAYOUT4ITEM2.setSizing( "FITTOWIDTH" );
         LAYOUT4ITEM2.setFlow( "DOWN" );
         LAYOUT4ITEM2.setMarginRight( 15 );
         LAYOUT4ITEM2.setMarginLeft( 15 );
         LAYOUT4ITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT4ITEM3 --
         // ------------------------------
         LAYOUT4ITEM3.setAlignment( "TOPCENTER" );
         LAYOUT4ITEM3.setColumn( LAYOUT4COLUMN1 );
         LAYOUT4ITEM3.setManage( LOGGEDDATE );
         LAYOUT4ITEM3.setParent( LAYOUT3 );
         LAYOUT4ITEM3.setRow( LAYOUT4ROW1 );
         LAYOUT4ITEM3.setSizing( "FITTOWIDTH" );
         LAYOUT4ITEM3.setFlow( "DOWN" );
         LAYOUT4ITEM3.setMarginRight( 15 );
         LAYOUT4ITEM3.setMarginLeft( 15 );
         LAYOUT4ITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT4ITEM4 --
         // ------------------------------
         LAYOUT4ITEM4.setAlignment( "TOPCENTER" );
         LAYOUT4ITEM4.setColumn( LAYOUT4COLUMN1 );
         LAYOUT4ITEM4.setManage( CUSTOMER );
         LAYOUT4ITEM4.setParent( LAYOUT3 );
         LAYOUT4ITEM4.setRow( LAYOUT4ROW1 );
         LAYOUT4ITEM4.setSizing( "FITTOWIDTH" );
         LAYOUT4ITEM4.setFlow( "DOWN" );
         LAYOUT4ITEM4.setMarginRight( 15 );
         LAYOUT4ITEM4.setMarginLeft( 15 );
         LAYOUT4ITEM4.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT4ITEM5 --
         // ------------------------------
         LAYOUT4ITEM5.setAlignment( "TOPCENTER" );
         LAYOUT4ITEM5.setColumn( LAYOUT4COLUMN1 );
         LAYOUT4ITEM5.setManage( CUSTOMERPHONENUMBER );
         LAYOUT4ITEM5.setParent( LAYOUT3 );
         LAYOUT4ITEM5.setRow( LAYOUT4ROW1 );
         LAYOUT4ITEM5.setSizing( "FITTOWIDTH" );
         LAYOUT4ITEM5.setFlow( "DOWN" );
         LAYOUT4ITEM5.setMarginRight( 15 );
         LAYOUT4ITEM5.setMarginLeft( 15 );
         LAYOUT4ITEM5.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 1 );
         APPBAR.setIcon( "arrow_back" );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setWidth( 806 );
         APPBAR.setLayoutManager( LAYOUT2 );
         APPBAR.setIconAlignment( "CENTERLEFT" );
         APPBAR.setCaption( "Details" );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaptionMarginLeft( 48 );
         APPBAR.initialize();

         // -----------------------
         // -- Initialize #PANEL --
         // -----------------------
         PANEL.setDisplayPosition( 2 );
         PANEL.setHeight( 446 );
         PANEL.setImageAlignment( "STRETCH" );
         PANEL.setParent( this );
         PANEL.setTabPosition( 2 );
         PANEL.setTabStop( false );
         PANEL.setTop( 113 );
         PANEL.setWidth( 806 );
         PANEL.setVerticalScroll( true );
         PANEL.setLayoutManager( LAYOUT3 );
         PANEL.setLeft( 0 );
         PANEL.initialize();

         // ----------------------------
         // -- Initialize #ITEMDELETE --
         // ----------------------------
         ITEMDELETE.setDisplayPosition( 2 );
         ITEMDELETE.setIcon( "delete_forever" );
         ITEMDELETE.setLeft( 710 );
         ITEMDELETE.setParent( APPBAR );
         ITEMDELETE.setTabPosition( 2 );
         ITEMDELETE.setTop( 0 );
         ITEMDELETE.setHeight( 57 );
         ITEMDELETE.setHintTitle( "Item Delete" );
         ITEMDELETE.setHint( "Delete current item" );
         ITEMDELETE.initialize();

         // --------------------------
         // -- Initialize #ITEMSAVE --
         // --------------------------
         ITEMSAVE.setDisplayPosition( 1 );
         ITEMSAVE.setLeft( 758 );
         ITEMSAVE.setParent( APPBAR );
         ITEMSAVE.setTabPosition( 1 );
         ITEMSAVE.setTop( 0 );
         ITEMSAVE.setHeight( 57 );
         ITEMSAVE.setIcon( "check" );
         ITEMSAVE.setHint( "Save changes to current Item" );
         ITEMSAVE.setHintTitle( "Save Item" );
         ITEMSAVE.initialize();

         // -------------------------------
         // -- Initialize #ERRORMESSAGES --
         // -------------------------------
         ERRORMESSAGES.setCaption( "Messages" );
         ERRORMESSAGES.setDisplayPosition( 4 );
         ERRORMESSAGES.setParent( this );
         ERRORMESSAGES.setTabPosition( 4 );
         ERRORMESSAGES.setThemeDrawStyle( "MediumError" );
         ERRORMESSAGES.setTop( 56 );
         ERRORMESSAGES.setVisible( false );
         ERRORMESSAGES.setWidth( 806 );
         ERRORMESSAGES.setCaptionAlignment( "CENTERLEFT" );
         ERRORMESSAGES.setHeight( 57 );
         ERRORMESSAGES.initialize();

         // ------------------------------
         // -- Initialize #TICKETNUMBER --
         // ------------------------------
         TICKETNUMBER.setDisplayPosition( 1 );
         TICKETNUMBER.setLabel( "Ticket Number" );
         TICKETNUMBER.setParent( PANEL );
         TICKETNUMBER.setTabPosition( 1 );
         TICKETNUMBER.setTop( 0 );
         TICKETNUMBER.setWidth( 776 );
         TICKETNUMBER.setLeft( 15 );
         TICKETNUMBER.applyDefault();
         TICKETNUMBER.initialize();

         // ------------------------------------
         // -- Initialize #PROBLEMDESCRIPTION --
         // ------------------------------------
         PROBLEMDESCRIPTION.setDisplayPosition( 2 );
         PROBLEMDESCRIPTION.setLabel( "Problem Description" );
         PROBLEMDESCRIPTION.setParent( PANEL );
         PROBLEMDESCRIPTION.setTabPosition( 2 );
         PROBLEMDESCRIPTION.setTop( 75 );
         PROBLEMDESCRIPTION.setWidth( 776 );
         PROBLEMDESCRIPTION.setLeft( 15 );
         PROBLEMDESCRIPTION.applyDefault();
         PROBLEMDESCRIPTION.initialize();

         // ----------------------------
         // -- Initialize #LOGGEDDATE --
         // ----------------------------
         LOGGEDDATE.setDisplayPosition( 3 );
         LOGGEDDATE.setLabel( "Logged Date" );
         LOGGEDDATE.setParent( PANEL );
         LOGGEDDATE.setTabPosition( 3 );
         LOGGEDDATE.setTop( 150 );
         LOGGEDDATE.setWidth( 776 );
         LOGGEDDATE.setLeft( 15 );
         LOGGEDDATE.applyDefault();
         LOGGEDDATE.initialize();

         // --------------------------
         // -- Initialize #CUSTOMER --
         // --------------------------
         CUSTOMER.setDisplayPosition( 4 );
         CUSTOMER.setLabel( "Customer" );
         CUSTOMER.setParent( PANEL );
         CUSTOMER.setTabPosition( 4 );
         CUSTOMER.setTop( 225 );
         CUSTOMER.setWidth( 776 );
         CUSTOMER.setLeft( 15 );
         CUSTOMER.applyDefault();
         CUSTOMER.initialize();

         // -------------------------------------
         // -- Initialize #CUSTOMERPHONENUMBER --
         // -------------------------------------
         CUSTOMERPHONENUMBER.setDisplayPosition( 5 );
         CUSTOMERPHONENUMBER.setLabel( "Phone Number" );
         CUSTOMERPHONENUMBER.setParent( PANEL );
         CUSTOMERPHONENUMBER.setTabPosition( 5 );
         CUSTOMERPHONENUMBER.setTop( 300 );
         CUSTOMERPHONENUMBER.setWidth( 776 );
         CUSTOMERPHONENUMBER.setLeft( 15 );
         CUSTOMERPHONENUMBER.applyDefault();
         CUSTOMERPHONENUMBER.initialize();

         // -----------------------------
         // -- Initialize #CURRENTMODE --
         // -----------------------------
         CURRENTMODE.applyDefault();
         CURRENTMODE.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine3 );

         // ----------------------------------------
         // -- Add Event Handlers for #ITEMDELETE --
         // ----------------------------------------
         ITEMDELETE.addEventHandler( "CLICK", this, evtRoutine5 );

         // --------------------------------------
         // -- Add Event Handlers for #ITEMSAVE --
         // --------------------------------------
         ITEMSAVE.addEventHandler( "CLICK", this, evtRoutine4 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 561 );
         this.setWidth( 808 );
         this.setLayoutManager( LAYOUT1 );
         this.setAutoClose( true );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_MODE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Create", 58 );

      //
      // DEFINE_MAP For(*INPUT) Class(#STD_TEXTS) Name(#Mode)
      //
      var MODE = rtn.createFieldParameter( "MODE", Fields.STD_TEXTS.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      MODE.set( parm_MODE );

      //
      // MTHROUTINE Name(Create)
      //
      rtn.Line( 58 );
      {

         //
         // #TicketDetails := *NULL
         //
         rtn.Line( 61 );
         ref.TICKETNUMBER.set( 0 );
         ref.PROBLEMDESCRIPTION.set( "" );
         ref.LOGGEDDATE.set( const1 );
         ref.CUSTOMER.set( "" );
         ref.CUSTOMERPHONENUMBER.set( "" );

         //
         // IF (#SYS_WEB.Device = Mobile)
         //
         rtn.Line( 62 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #COM_OWNER.Placement := FullScreen
            //
            rtn.Line( 63 );
            this.setPlacement( "FULLSCREEN" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #COM_OWNER.Placement := Center
            //
            rtn.Line( 65 );
            this.setPlacement( "CENTER" );

         //
         // ENDIF 
         //
         }

         //
         // #ErrorMessages.Visible := False
         //
         rtn.Line( 67 );
         ref.ERRORMESSAGES.setVisible( false );

         //
         // #CurrentMode := #Mode
         //
         rtn.Line( 68 );
         ref.CURRENTMODE.set( MODE.get() );

         //
         // #TicketNumber.Enabled := True
         //
         rtn.Line( 69 );
         ref.TICKETNUMBER.setEnabled( true );

         //
         // #Com_Owner.Show
         //
         rtn.Line( 70 );
         this.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 71 );
      rtn.end();
   };

   //
   // mthEDIT - Edit
   //
   COM_OWNER.mthEDIT = function( parm_ITICKETNUMBER, parm_MODE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Edit", 74 );

      //
      // DEFINE_MAP For(*INPUT) Class(#TicketNumber) Name(#iTicketNumber)
      //
      var ITICKETNUMBER = rtn.createFieldParameter( "ITICKETNUMBER", Fields.TICKETNUM.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#STD_TEXTS) Name(#Mode)
      //
      var MODE = rtn.createFieldParameter( "MODE", Fields.STD_TEXTS.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ITICKETNUMBER.set( parm_ITICKETNUMBER );
      MODE.set( parm_MODE );

      //
      // DEFINE_COM Class(#D2_SM.GetItem) Name(#TicketData)
      //
      var TICKETDATA = rtn.createDataRequest( "TICKETDATA", "D2_SM", "GETITEM" );

      // ----------------------------
      // -- Initialize #TICKETDATA --
      // ----------------------------
      TICKETDATA.initialize();

      //
      // MTHROUTINE Name(Edit)
      //
      rtn.Line( 74 );
      {

         //
         // #TicketData.ExecuteAsync Itemkey1(#iTicketNumber) Item_Details(#TicketDetails)
         //
         rtn.Line( 80 );
         TICKETDATA.mthEXECUTEASYNC( { FLD: { "TICKETNUM": ITICKETNUMBER.get() } }, { FLD: { "TICKETNUM": ref.TICKETNUMBER, "PROBLEMDE": ref.PROBLEMDESCRIPTION, "LOGGEDDAT": ref.LOGGEDDATE, "CUSTOMER": ref.CUSTOMER, "CUSTOMERP": ref.CUSTOMERPHONENUMBER } } );

         //
         // IF (#SYS_WEB.Device = Mobile)
         //
         rtn.Line( 82 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #COM_OWNER.Placement := FullScreen
            //
            rtn.Line( 83 );
            this.setPlacement( "FULLSCREEN" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #COM_OWNER.Placement := Center
            //
            rtn.Line( 85 );
            this.setPlacement( "CENTER" );

         //
         // ENDIF 
         //
         }

         //
         // #ErrorMessages.Visible := False
         //
         rtn.Line( 87 );
         ref.ERRORMESSAGES.setVisible( false );

         //
         // #CurrentMode := #Mode
         //
         rtn.Line( 88 );
         ref.CURRENTMODE.set( MODE.get() );

         //
         // #TicketNumber.Enabled := False
         //
         rtn.Line( 89 );
         ref.TICKETNUMBER.setEnabled( false );

         //
         // #Com_Owner.Show
         //
         rtn.Line( 90 );
         this.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 91 );
      rtn.end();
   };

   //
   // mthSAVE - Save
   //
   COM_OWNER.mthSAVE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Save", 94 ), mth = rtn;

      //
      // DEFINE_COM Class(#D2_SM.SaveItem) Name(#TicketSave)
      //
      var TICKETSAVE = rtn.createDataRequest( "TICKETSAVE", "D2_SM", "SAVEITEM" );

      //
      // DEFINE_COM Class(#STD_CODE) Name(#SaveSts)
      //
      var SAVESTS = rtn.createFieldReference( "SAVESTS", Fields.STD_CODE.DataClass );

      // ----------------------------
      // -- Initialize #TICKETSAVE --
      // ----------------------------
      TICKETSAVE.initialize();

      // -------------------------
      // -- Initialize #SAVESTS --
      // -------------------------
      SAVESTS.initialize();

      // ----------------------------------------
      // -- Add Event Handlers for #TICKETSAVE --
      // ----------------------------------------
      TICKETSAVE.addEventHandler( "COMPLETED", this, evtRoutine1 );

      //
      // MTHROUTINE Name(Save)
      //
      rtn.Line( 94 );
      {

         //
         // #SYS_MSGQ.ClearAll
         //
         rtn.Line( 99 );
         Lansa.MSGQ().mthCLEARALL();

         //
         // #TicketSave.ExecuteAsync Item_Details(#AFile1) Status(#SaveSts) Mode(#CurrentMode)
         //
         rtn.Line( 100 );
         TICKETSAVE.mthEXECUTEASYNC( { FLD: { "TICKETNUM": ref.TICKETNUMBER.get(), "PROBLEMDE": ref.PROBLEMDESCRIPTION.get(), "LOGGEDDAT": ref.LOGGEDDATE.get(), "CUSTOMER": ref.CUSTOMER.get(), "CUSTOMERP": ref.CUSTOMERPHONENUMBER.get(), "STD_TEXTS": ref.CURRENTMODE.get() } }, { FLD: { "IO$STS": SAVESTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 116 );
      rtn.end();

      //
      // evtRoutine1 - #TicketSave.Completed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#TicketSave.Completed", 102, mth );

         //
         // EVTROUTINE Handling(#TicketSave.Completed)
         //
         rtn.Line( 102 );
         {

            //
            // IF (#SaveSts *NE OK)
            //
            rtn.Line( 103 );
            if ( Lansa.String.ne( SAVESTS.get(), "OK" ) )
            {

               //
               // #ErrorMessages.Visible := True
               //
               rtn.Line( 104 );
               ref.ERRORMESSAGES.setVisible( true );

               //
               // #ErrorMessages.Opacity := 100
               //
               rtn.Line( 105 );
               ref.ERRORMESSAGES.setOpacity( 100 );

               //
               // #ErrorMessages.Caption := "Ticket Item could not be saved" + (10).AsUnicodeString
               //
               rtn.Line( 106 );
               ref.ERRORMESSAGES.setCaption( Lansa.cat( "Ticket Item could not be saved", Lansa.Number.AsUnicodeString( 10 ) ) );

               //
               // FOR Each(#Message) In(#sys_msgq.Messages)
               //
               rtn.Line( 108 );
               {
                  var l1 = Lansa.MSGQ().getMessages().createIterator();

                  while( l1.step() )
                  {
                     var MESSAGE = rtn.setref( "MESSAGE", l1.item() );

                     //
                     // #ErrorMessages.Caption += #Message.Text + (10).AsUnicodeString
                     //
                     rtn.Line( 109 );
                     ref.ERRORMESSAGES.setCaption( Lansa.cat( ref.ERRORMESSAGES.getCaption(), Lansa.cat( MESSAGE.getText(), Lansa.Number.AsUnicodeString( 10 ) ) ) );

                  //
                  // ENDFOR 
                  //
                  rtn.Line( 110 );
                  }

                  l1.end();
                  rtn.deleteReference( "MESSAGE" );
               }

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_OWNER.Close
               //
               rtn.Line( 112 );
               this.mthCLOSE();

               //
               // SIGNAL Event(ItemSaved)
               //
               rtn.Line( 113 );
               this.fireEvent( "ITEMSAVED" );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 115 );
         rtn.end();
      }
   };

   //
   // mthDELETE - Delete
   //
   COM_OWNER.mthDELETE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Delete", 119 ), mth = rtn;

      //
      // DEFINE_COM Class(#D2_SM.DeleteItem) Name(#TicketDelete)
      //
      var TICKETDELETE = rtn.createDataRequest( "TICKETDELETE", "D2_SM", "DELETEITEM" );

      //
      // DEFINE_COM Class(#STD_CODE) Name(#DeleteSts)
      //
      var DELETESTS = rtn.createFieldReference( "DELETESTS", Fields.STD_CODE.DataClass );

      // ------------------------------
      // -- Initialize #TICKETDELETE --
      // ------------------------------
      TICKETDELETE.initialize();

      // ---------------------------
      // -- Initialize #DELETESTS --
      // ---------------------------
      DELETESTS.initialize();

      // ------------------------------------------
      // -- Add Event Handlers for #TICKETDELETE --
      // ------------------------------------------
      TICKETDELETE.addEventHandler( "COMPLETED", this, evtRoutine2 );

      //
      // MTHROUTINE Name(Delete)
      //
      rtn.Line( 119 );
      {

         //
         // #SYS_MSGQ.ClearAll
         //
         rtn.Line( 122 );
         Lansa.MSGQ().mthCLEARALL();

         //
         // #TicketDelete.ExecuteAsync Itemkey1(#TicketNumber) Status(#DeleteSts)
         //
         rtn.Line( 123 );
         TICKETDELETE.mthEXECUTEASYNC( { FLD: { "TICKETNUM": ref.TICKETNUMBER.get() } }, { FLD: { "IO$STS": DELETESTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 140 );
      rtn.end();

      //
      // evtRoutine2 - #TicketDelete.Completed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#TicketDelete.Completed", 125, mth );

         //
         // EVTROUTINE Handling(#TicketDelete.Completed)
         //
         rtn.Line( 125 );
         {

            //
            // IF (#DeleteSts *NE OK)
            //
            rtn.Line( 126 );
            if ( Lansa.String.ne( DELETESTS.get(), "OK" ) )
            {

               //
               // #ErrorMessages.Visible := True
               //
               rtn.Line( 127 );
               ref.ERRORMESSAGES.setVisible( true );

               //
               // #ErrorMessages.Opacity := 100
               //
               rtn.Line( 128 );
               ref.ERRORMESSAGES.setOpacity( 100 );

               //
               // #ErrorMessages.Caption := "Ticket Item could not be deleted" + (10).AsUnicodeString
               //
               rtn.Line( 129 );
               ref.ERRORMESSAGES.setCaption( Lansa.cat( "Ticket Item could not be deleted", Lansa.Number.AsUnicodeString( 10 ) ) );

               //
               // FOR Each(#Message) In(#sys_msgq.Messages)
               //
               rtn.Line( 132 );
               {
                  var l1 = Lansa.MSGQ().getMessages().createIterator();

                  while( l1.step() )
                  {
                     var MESSAGE = rtn.setref( "MESSAGE", l1.item() );

                     //
                     // #ErrorMessages.Caption += #Message.Text + (13).AsUnicodeString
                     //
                     rtn.Line( 133 );
                     ref.ERRORMESSAGES.setCaption( Lansa.cat( ref.ERRORMESSAGES.getCaption(), Lansa.cat( MESSAGE.getText(), Lansa.Number.AsUnicodeString( 13 ) ) ) );

                  //
                  // ENDFOR 
                  //
                  rtn.Line( 134 );
                  }

                  l1.end();
                  rtn.deleteReference( "MESSAGE" );
               }

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_OWNER.Close
               //
               rtn.Line( 136 );
               this.mthCLOSE();

               //
               // SIGNAL Event(ItemDeleted)
               //
               rtn.Line( 137 );
               this.fireEvent( "ITEMDELETED" );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 139 );
         rtn.end();
      }
   };

   //
   // evtRoutine3 - #Appbar.IconClick
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Appbar.IconClick", 143 );

      //
      // EVTROUTINE Handling(#Appbar.IconClick)
      //
      rtn.Line( 143 );
      {

         //
         // #Com_Owner.Close
         //
         rtn.Line( 144 );
         this.mthCLOSE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 145 );
      rtn.end();
   };

   //
   // evtRoutine4 - #ItemSave.Click
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ItemSave.Click", 148 );

      //
      // EVTROUTINE Handling(#ItemSave.Click)
      //
      rtn.Line( 148 );
      {

         //
         // #COM_OWNER.Save
         //
         rtn.Line( 149 );
         this.mthSAVE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 150 );
      rtn.end();
   };

   //
   // evtRoutine5 - #ItemDelete.Click
   //
   function evtRoutine5( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ItemDelete.Click", 153 );

      //
      // EVTROUTINE Handling(#ItemDelete.Click)
      //
      rtn.Line( 153 );
      {

         //
         // #COM_OWNER.Delete
         //
         rtn.Line( 154 );
         this.mthDELETE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 155 );
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

      // -------------------
      // -- SPINEDITFIELD --
      // -------------------
      Fields.TICKETNUM.SPINEDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.TICKETNUM.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.TICKETNUM.SPINEDITFIELD, an: "PRIM_MD", at: "SpinEdit", fn: "TICKETNUM", cn: "SpinEditField" } );
   }

   // ------------------------------
   // -- PROBLEMDE Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.PROBLEMDE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.PROBLEMDE );
      };

      Lansa.createFieldClass( { co: Fields.PROBLEMDE.DataClass, an: "PRIM_FLD", fn: "PROBLEMDE" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.PROBLEMDE.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.PROBLEMDE.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.PROBLEMDE.EDITFIELD, an: "PRIM_MD", at: "Edit", fn: "PROBLEMDE", cn: "EditField" } );
   }

   // ------------------------------
   // -- LOGGEDDAT Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.LOGGEDDAT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.LOGGEDDAT );
      };

      Lansa.createFieldClass( { co: Fields.LOGGEDDAT.DataClass, an: "PRIM_FLD", fn: "LOGGEDDAT" } );

      // ---------------
      // -- DATEFIELD --
      // ---------------
      Fields.LOGGEDDAT.DATEFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.LOGGEDDAT.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.LOGGEDDAT.DATEFIELD, an: "PRIM_MD", at: "DateTime", fn: "LOGGEDDAT", cn: "DateField" } );
   }

   // -----------------------------
   // -- CUSTOMER Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.CUSTOMER.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.CUSTOMER );
      };

      Lansa.createFieldClass( { co: Fields.CUSTOMER.DataClass, an: "PRIM_FLD", fn: "CUSTOMER" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.CUSTOMER.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.CUSTOMER.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.CUSTOMER.EDITFIELD, an: "PRIM_MD", at: "Edit", fn: "CUSTOMER", cn: "EditField" } );
   }

   // ------------------------------
   // -- CUSTOMERP Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.CUSTOMERP.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.CUSTOMERP );
      };

      Lansa.createFieldClass( { co: Fields.CUSTOMERP.DataClass, an: "PRIM_FLD", fn: "CUSTOMERP" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.CUSTOMERP.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.CUSTOMERP.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.CUSTOMERP.EDITFIELD, an: "PRIM_MD", at: "Edit", fn: "CUSTOMERP", cn: "EditField" } );
   }

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

   // -----------------------------
   // -- STD_CODE Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_CODE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_CODE );
      };

      Lansa.createFieldClass( { co: Fields.STD_CODE.DataClass, an: "PRIM_FLD", fn: "STD_CODE" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_DLG", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_PANL", "PRIM_MD.AppBar", "PRIM_MD.Icon", "PRIM_MD.Alert", "PRIM_MD.SpinEdit", "PRIM_MD.Edit", "PRIM_MD.DateTime", "PRIM_FLD", "PRIM_WEB.DataRequest", "PRIM_HINT", "PRIM_MSGQ" ]
});

//# sourceURL=d2dialog.js
