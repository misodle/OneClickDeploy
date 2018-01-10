// ---------------------
// -- Web Page: A001X --
// ---------------------
LANSA.addComponent(
{
   id: "A001X", 
   nm: "A001x", 
   ot: "wp", 
   tp: "Web Page", 
   de: "test #2", 
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
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Label1xxxxx') Displayposition(1) Ellipses(Word) Height(25) Left(230) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(190) Verticalalignment(Center) Width(120)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Label1xxxxx" );
         LABEL1.setDisplayPosition( 1 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 230 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 1 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 190 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 120 );
         LABEL1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNBLUE" ) );

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
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 5 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 5 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 7 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_LABL" ]
});

//# sourceURL=a001x.js
