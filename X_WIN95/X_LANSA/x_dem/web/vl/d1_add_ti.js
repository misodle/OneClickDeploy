// -----------------------
// -- Dialog: D1_ADD_TI --
// -----------------------
LANSA.addComponent(
{
   id: "D1_ADD_TI", 
   nm: "D1_Add_Ticket", 
   ot: "wv", 
   tp: "Dialog", 
   de: "Add Ticket", 
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
      an: "PRIM_DLG", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         setupForEdit: 
         {
            ps: 
            {
               "pTicketNumber":
               {
                  pt: "i"
               }
            }
         },

         setupForAdd: 
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
         this.addFields( "D1_ADD_TI", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Column(#Layout1Column1) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Alignment(TopCenter) Flow(Down) Manage(#Label)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item6) Alignment(BottomRight) Column(#Layout1Column1) Manage(#ButtonCancel) Parent(#Layout1) Row(#Layout1Row1) Sizing(None) Flow(Left) Marginbottom(12) Marginright(12)
         //
         var LAYOUT1ITEM6 = this.createReference( "LAYOUT1ITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item7) Alignment(BottomRight) Column(#Layout1Column1) Manage(#ButtonSubmit) Parent(#Layout1) Row(#Layout1Row1) Sizing(None) Flow(Left) Marginbottom(12) Marginright(24)
         //
         var LAYOUT1ITEM7 = this.createReference( "LAYOUT1ITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item9) Column(#Layout1Column1) Flow(Right) Manage(#Button) Parent(#Layout1) Row(#Layout1Row1) Sizing(None) Alignment(BottomLeft) Marginbottom(12) Marginleft(24)
         //
         var LAYOUT1ITEM9 = this.createReference( "LAYOUT1ITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item2) Manage(#TicketNumber) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Column(#Layout1Column1) Alignment(TopCenter) Flow(Down) Marginleft(24) Marginright(24) Margintop(12)
         //
         var LAYOUT1ITEM2 = this.createReference( "LAYOUT1ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item5) Alignment(TopCenter) Column(#Layout1Column1) Manage(#ProblemDescription) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Flow(Down) Marginleft(24) Marginright(24) Margintop(12)
         //
         var LAYOUT1ITEM5 = this.createReference( "LAYOUT1ITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item10) Alignment(TopCenter) Column(#Layout1Column1) Manage(#Customer) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Flow(Down) Marginleft(24) Marginright(24) Margintop(12)
         //
         var LAYOUT1ITEM10 = this.createReference( "LAYOUT1ITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item11) Alignment(TopCenter) Column(#Layout1Column1) Manage(#CustomerPhoneNumber) Parent(#Layout1) Row(#Layout1Row1) Sizing(FitToWidth) Flow(Down) Marginleft(24) Marginright(24) Margintop(12)
         //
         var LAYOUT1ITEM11 = this.createReference( "LAYOUT1ITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#Label) Caption('Add Ticket') Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(3) Top(0) Width(398) Themedrawstyle('MediumTitle+Heading1') Paddingleft(24) Height(48) Iconalignment(CenterLeft) Iconheight(0)
         //
         var LABEL = this.createReference( "LABEL", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#ButtonSubmit) Caption('SUBMIT') Displayposition(4) Left(274) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Themedrawstyle('MediumTitle') Top(551)
         //
         var BUTTONSUBMIT = this.createReference( "BUTTONSUBMIT", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonCancel) Caption('CANCEL') Displayposition(5) Left(182) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(551) Themedrawstyle('ForegroundMediumPrimary') Width(80)
         //
         var BUTTONCANCEL = this.createReference( "BUTTONCANCEL", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#Button) Caption('Delete') Displayposition(3) Left(24) Parent(#COM_OWNER) Tabposition(4) Themedrawstyle('MediumTitle') Top(551)
         //
         var BUTTON = this.createReference( "BUTTON", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#TicketNumber.SpinEditField) Name(#TicketNumber) Displayposition(2) Label('Ticket Number') Left(24) Parent(#COM_OWNER) Tabposition(5) Top(60) Width(350)
         //
         var TICKETNUMBER = this.createFieldReference( "TICKETNUMBER", Fields.TICKETNUM.SPINEDITFIELD );

         //
         // DEFINE_COM Class(#ProblemDescription.EditField) Name(#ProblemDescription) Displayposition(8) Label('Problem Description') Left(24) Parent(#COM_OWNER) Tabposition(6) Top(321) Width(350)
         //
         var PROBLEMDESCRIPTION = this.createFieldReference( "PROBLEMDESCRIPTION", Fields.PROBLEMDE.EDITFIELD );

         //
         // DEFINE_COM Class(#Customer.EditField) Name(#Customer) Displayposition(6) Label('Customer') Left(24) Parent(#COM_OWNER) Tabposition(7) Top(147) Width(350)
         //
         var CUSTOMER = this.createFieldReference( "CUSTOMER", Fields.CUSTOMER.EDITFIELD );

         //
         // DEFINE_COM Class(#CustomerPhoneNumber.EditField) Name(#CustomerPhoneNumber) Displayposition(7) Label('Phone Number') Left(24) Parent(#COM_OWNER) Tabposition(8) Top(234) Width(350)
         //
         var CUSTOMERPHONENUMBER = this.createFieldReference( "CUSTOMERPHONENUMBER", Fields.CUSTOMERP.EDITFIELD );

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
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM1.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM1.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM1.setFlow( "DOWN" );
         LAYOUT1ITEM1.setManage( LABEL );
         LAYOUT1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM6 --
         // ------------------------------
         LAYOUT1ITEM6.setAlignment( "BOTTOMRIGHT" );
         LAYOUT1ITEM6.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM6.setManage( BUTTONCANCEL );
         LAYOUT1ITEM6.setParent( LAYOUT1 );
         LAYOUT1ITEM6.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM6.setSizing( "NONE" );
         LAYOUT1ITEM6.setFlow( "LEFT" );
         LAYOUT1ITEM6.setMarginBottom( 12 );
         LAYOUT1ITEM6.setMarginRight( 12 );
         LAYOUT1ITEM6.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM7 --
         // ------------------------------
         LAYOUT1ITEM7.setAlignment( "BOTTOMRIGHT" );
         LAYOUT1ITEM7.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM7.setManage( BUTTONSUBMIT );
         LAYOUT1ITEM7.setParent( LAYOUT1 );
         LAYOUT1ITEM7.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM7.setSizing( "NONE" );
         LAYOUT1ITEM7.setFlow( "LEFT" );
         LAYOUT1ITEM7.setMarginBottom( 12 );
         LAYOUT1ITEM7.setMarginRight( 24 );
         LAYOUT1ITEM7.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM9 --
         // ------------------------------
         LAYOUT1ITEM9.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM9.setFlow( "RIGHT" );
         LAYOUT1ITEM9.setManage( BUTTON );
         LAYOUT1ITEM9.setParent( LAYOUT1 );
         LAYOUT1ITEM9.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM9.setSizing( "NONE" );
         LAYOUT1ITEM9.setAlignment( "BOTTOMLEFT" );
         LAYOUT1ITEM9.setMarginBottom( 12 );
         LAYOUT1ITEM9.setMarginLeft( 24 );
         LAYOUT1ITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM2 --
         // ------------------------------
         LAYOUT1ITEM2.setManage( TICKETNUMBER );
         LAYOUT1ITEM2.setParent( LAYOUT1 );
         LAYOUT1ITEM2.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM2.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM2.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM2.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM2.setFlow( "DOWN" );
         LAYOUT1ITEM2.setMarginLeft( 24 );
         LAYOUT1ITEM2.setMarginRight( 24 );
         LAYOUT1ITEM2.setMarginTop( 12 );
         LAYOUT1ITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM5 --
         // ------------------------------
         LAYOUT1ITEM5.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM5.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM5.setManage( PROBLEMDESCRIPTION );
         LAYOUT1ITEM5.setParent( LAYOUT1 );
         LAYOUT1ITEM5.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM5.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM5.setFlow( "DOWN" );
         LAYOUT1ITEM5.setMarginLeft( 24 );
         LAYOUT1ITEM5.setMarginRight( 24 );
         LAYOUT1ITEM5.setMarginTop( 12 );
         LAYOUT1ITEM5.initialize();

         // -------------------------------
         // -- Initialize #LAYOUT1ITEM10 --
         // -------------------------------
         LAYOUT1ITEM10.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM10.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM10.setManage( CUSTOMER );
         LAYOUT1ITEM10.setParent( LAYOUT1 );
         LAYOUT1ITEM10.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM10.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM10.setFlow( "DOWN" );
         LAYOUT1ITEM10.setMarginLeft( 24 );
         LAYOUT1ITEM10.setMarginRight( 24 );
         LAYOUT1ITEM10.setMarginTop( 12 );
         LAYOUT1ITEM10.initialize();

         // -------------------------------
         // -- Initialize #LAYOUT1ITEM11 --
         // -------------------------------
         LAYOUT1ITEM11.setAlignment( "TOPCENTER" );
         LAYOUT1ITEM11.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM11.setManage( CUSTOMERPHONENUMBER );
         LAYOUT1ITEM11.setParent( LAYOUT1 );
         LAYOUT1ITEM11.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM11.setSizing( "FITTOWIDTH" );
         LAYOUT1ITEM11.setFlow( "DOWN" );
         LAYOUT1ITEM11.setMarginLeft( 24 );
         LAYOUT1ITEM11.setMarginRight( 24 );
         LAYOUT1ITEM11.setMarginTop( 12 );
         LAYOUT1ITEM11.initialize();

         // -----------------------
         // -- Initialize #LABEL --
         // -----------------------
         LABEL.setCaption( "Add Ticket" );
         LABEL.setDisplayPosition( 1 );
         LABEL.setLeft( 0 );
         LABEL.setParent( this );
         LABEL.setTabPosition( 3 );
         LABEL.setTop( 0 );
         LABEL.setWidth( 398 );
         LABEL.setThemeDrawStyle( "MediumTitle+Heading1" );
         LABEL.setPaddingLeft( 24 );
         LABEL.setHeight( 48 );
         LABEL.setIconAlignment( "CENTERLEFT" );
         LABEL.setIconHeight( 0 );
         LABEL.initialize();

         // ------------------------------
         // -- Initialize #BUTTONSUBMIT --
         // ------------------------------
         BUTTONSUBMIT.setCaption( "SUBMIT" );
         BUTTONSUBMIT.setDisplayPosition( 4 );
         BUTTONSUBMIT.setLeft( 274 );
         BUTTONSUBMIT.setParent( this );
         BUTTONSUBMIT.setTabPosition( 1 );
         BUTTONSUBMIT.setTabStop( false );
         BUTTONSUBMIT.setThemeDrawStyle( "MediumTitle" );
         BUTTONSUBMIT.setTop( 551 );
         BUTTONSUBMIT.initialize();

         // ------------------------------
         // -- Initialize #BUTTONCANCEL --
         // ------------------------------
         BUTTONCANCEL.setCaption( "CANCEL" );
         BUTTONCANCEL.setDisplayPosition( 5 );
         BUTTONCANCEL.setLeft( 182 );
         BUTTONCANCEL.setParent( this );
         BUTTONCANCEL.setTabPosition( 2 );
         BUTTONCANCEL.setTabStop( false );
         BUTTONCANCEL.setTop( 551 );
         BUTTONCANCEL.setThemeDrawStyle( "ForegroundMediumPrimary" );
         BUTTONCANCEL.setWidth( 80 );
         BUTTONCANCEL.initialize();

         // ------------------------
         // -- Initialize #BUTTON --
         // ------------------------
         BUTTON.setCaption( "Delete" );
         BUTTON.setDisplayPosition( 3 );
         BUTTON.setLeft( 24 );
         BUTTON.setParent( this );
         BUTTON.setTabPosition( 4 );
         BUTTON.setThemeDrawStyle( "MediumTitle" );
         BUTTON.setTop( 551 );
         BUTTON.initialize();

         // ------------------------------
         // -- Initialize #TICKETNUMBER --
         // ------------------------------
         TICKETNUMBER.setDisplayPosition( 2 );
         TICKETNUMBER.setLabel( "Ticket Number" );
         TICKETNUMBER.setLeft( 24 );
         TICKETNUMBER.setParent( this );
         TICKETNUMBER.setTabPosition( 5 );
         TICKETNUMBER.setTop( 60 );
         TICKETNUMBER.setWidth( 350 );
         TICKETNUMBER.applyDefault();
         TICKETNUMBER.initialize();

         // ------------------------------------
         // -- Initialize #PROBLEMDESCRIPTION --
         // ------------------------------------
         PROBLEMDESCRIPTION.setDisplayPosition( 8 );
         PROBLEMDESCRIPTION.setLabel( "Problem Description" );
         PROBLEMDESCRIPTION.setLeft( 24 );
         PROBLEMDESCRIPTION.setParent( this );
         PROBLEMDESCRIPTION.setTabPosition( 6 );
         PROBLEMDESCRIPTION.setTop( 321 );
         PROBLEMDESCRIPTION.setWidth( 350 );
         PROBLEMDESCRIPTION.applyDefault();
         PROBLEMDESCRIPTION.initialize();

         // --------------------------
         // -- Initialize #CUSTOMER --
         // --------------------------
         CUSTOMER.setDisplayPosition( 6 );
         CUSTOMER.setLabel( "Customer" );
         CUSTOMER.setLeft( 24 );
         CUSTOMER.setParent( this );
         CUSTOMER.setTabPosition( 7 );
         CUSTOMER.setTop( 147 );
         CUSTOMER.setWidth( 350 );
         CUSTOMER.applyDefault();
         CUSTOMER.initialize();

         // -------------------------------------
         // -- Initialize #CUSTOMERPHONENUMBER --
         // -------------------------------------
         CUSTOMERPHONENUMBER.setDisplayPosition( 7 );
         CUSTOMERPHONENUMBER.setLabel( "Phone Number" );
         CUSTOMERPHONENUMBER.setLeft( 24 );
         CUSTOMERPHONENUMBER.setParent( this );
         CUSTOMERPHONENUMBER.setTabPosition( 8 );
         CUSTOMERPHONENUMBER.setTop( 234 );
         CUSTOMERPHONENUMBER.setWidth( 350 );
         CUSTOMERPHONENUMBER.applyDefault();
         CUSTOMERPHONENUMBER.initialize();

         // ------------------------------------------
         // -- Add Event Handlers for #BUTTONSUBMIT --
         // ------------------------------------------
         BUTTONSUBMIT.addEventHandler( "CLICK", this, evtRoutine1 );

         // ------------------------------------------
         // -- Add Event Handlers for #BUTTONCANCEL --
         // ------------------------------------------
         BUTTONCANCEL.addEventHandler( "CLICK", this, evtRoutine3 );

         // ------------------------------------
         // -- Add Event Handlers for #BUTTON --
         // ------------------------------------
         BUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 601 );
         this.setWidth( 400 );
         this.setLayoutManager( LAYOUT1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #ButtonSubmit.Click
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.D1_ADD_TI, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonSubmit.Click", 25 );

      //
      // DEFINE_COM Class(#D1_Server_Module.Save) Name(#SaveRecord)
      //
      var SAVERECORD = rtn.createDataRequest( "SAVERECORD", "D1_SERVER", "SAVE" );

      // ----------------------------
      // -- Initialize #SAVERECORD --
      // ----------------------------
      SAVERECORD.initialize();

      //
      // EVTROUTINE Handling(#ButtonSubmit.Click)
      //
      rtn.Line( 25 );
      {

         //
         // #SaveRecord.Execute Afile1(#AFile1)
         //
         rtn.Line( 32 );
         SAVERECORD.mthEXECUTE( { FLD: { "TICKETNUM": ref.TICKETNUMBER.get(), "PROBLEMDE": ref.PROBLEMDESCRIPTION.get(), "LOGGEDDAT": fld.LOGGEDDAT.get(), "CUSTOMER": ref.CUSTOMER.get(), "CUSTOMERP": ref.CUSTOMERPHONENUMBER.get() } }, {  } );

         //
         // FOR Each(#Message) In(#sys_msgq.Messages)
         //
         rtn.Line( 34 );
         {
            var l1 = Lansa.MSGQ().getMessages().createIterator();

            while( l1.step() )
            {
               var MESSAGE = rtn.setref( "MESSAGE", l1.item() );

               //
               // #sys_web.Alert( #Message.Text )
               //
               rtn.Line( 35 );
               Lansa.WEB().mthALERT( MESSAGE.getText() );

            //
            // ENDFOR 
            //
            rtn.Line( 36 );
            }

            l1.end();
            rtn.deleteReference( "MESSAGE" );
         }

         //
         // #COM_OWNER.Close
         //
         rtn.Line( 38 );
         this.mthCLOSE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 40 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Button.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button.Click", 42 );

      //
      // DEFINE_COM Class(#D1_Server_Module.Delete) Name(#DeleteRecord)
      //
      var DELETERECORD = rtn.createDataRequest( "DELETERECORD", "D1_SERVER", "DELETE" );

      // ------------------------------
      // -- Initialize #DELETERECORD --
      // ------------------------------
      DELETERECORD.initialize();

      //
      // EVTROUTINE Handling(#Button.Click)
      //
      rtn.Line( 42 );
      {

         //
         // #DeleteRecord.Execute Ticketnumber(#TicketNumber)
         //
         rtn.Line( 48 );
         DELETERECORD.mthEXECUTE( { FLD: { "TICKETNUM": ref.TICKETNUMBER.get() } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 50 );
      rtn.end();
   };

   //
   // evtRoutine3 - #ButtonCancel.Click
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonCancel.Click", 52 );

      //
      // EVTROUTINE Handling(#ButtonCancel.Click)
      //
      rtn.Line( 52 );
      {

         //
         // #COM_OWNER.Close
         //
         rtn.Line( 54 );
         this.mthCLOSE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 56 );
      rtn.end();
   };

   //
   // mthSETUPFOREDIT - setupForEdit
   //
   COM_OWNER.mthSETUPFOREDIT = function( parm_PTICKETNUMBER )
   {
      var fld = this.FLD.D1_ADD_TI, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "setupForEdit", 58 );

      //
      // DEFINE_MAP For(*INPUT) Class(#TicketNumber) Name(#pTicketNumber)
      //
      var PTICKETNUMBER = rtn.createFieldParameter( "PTICKETNUMBER", Fields.TICKETNUM.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      PTICKETNUMBER.set( parm_PTICKETNUMBER );

      //
      // DEFINE_COM Class(#D1_Server_Module.Find) Name(#FindRecord)
      //
      var FINDRECORD = rtn.createDataRequest( "FINDRECORD", "D1_SERVER", "FIND" );

      // ----------------------------
      // -- Initialize #FINDRECORD --
      // ----------------------------
      FINDRECORD.initialize();

      //
      // MTHROUTINE Name(setupForEdit)
      //
      rtn.Line( 58 );
      {

         //
         // #TicketNumber := #pTicketNumber
         //
         rtn.Line( 67 );
         ref.TICKETNUMBER.set( PTICKETNUMBER.get() );

         //
         // #FindRecord.Execute Ticketnumber(#TicketNumber) Afile1(#AFileFind)
         //
         rtn.Line( 69 );
         FINDRECORD.mthEXECUTE( { FLD: { "TICKETNUM": ref.TICKETNUMBER.get() } }, { FLD: { "TICKETNUM": ref.TICKETNUMBER, "PROBLEMDE": ref.PROBLEMDESCRIPTION, "LOGGEDDAT": fld.LOGGEDDAT, "CUSTOMER": ref.CUSTOMER, "CUSTOMERP": ref.CUSTOMERPHONENUMBER } } );

         //
         // #TicketNumber.Visible := True
         //
         rtn.Line( 71 );
         ref.TICKETNUMBER.setVisible( true );

         //
         // #Label := 'Edit Ticket'
         //
         rtn.Line( 72 );
         ref.LABEL.set( "Edit Ticket" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // mthSETUPFORADD - setupForAdd
   //
   COM_OWNER.mthSETUPFORADD = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "setupForAdd", 76 );

      //
      // MTHROUTINE Name(setupForAdd)
      //
      rtn.Line( 76 );
      {

         //
         // #ProblemDescription := ''
         //
         rtn.Line( 82 );
         ref.PROBLEMDESCRIPTION.set( "" );

         //
         // #Customer := ''
         //
         rtn.Line( 83 );
         ref.CUSTOMER.set( "" );

         //
         // #CustomerPhoneNumber := ''
         //
         rtn.Line( 84 );
         ref.CUSTOMERPHONENUMBER.set( "" );

         //
         // #TicketNumber := 0
         //
         rtn.Line( 85 );
         ref.TICKETNUMBER.set( 0 );

         //
         // #TicketNumber.Visible := False
         //
         rtn.Line( 87 );
         ref.TICKETNUMBER.setVisible( false );

         //
         // #Label := 'Add Ticket'
         //
         rtn.Line( 88 );
         ref.LABEL.set( "Add Ticket" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 90 );
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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_DLG", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_MD.Label", "PRIM_MD.RaisedButton", "PRIM_MD.FlatButton", "PRIM_MD.SpinEdit", "PRIM_MD.Edit", "PRIM_WEB.DataRequest", "PRIM_FLD", "PRIM_MSGQ" ]
});

//# sourceURL=d1_add_ti.js
